// Question-of-the-day email list: signup, double opt-in, one-click unsubscribe,
// and the daily send off the same cron that posts to X and Bluesky.
//
// Why this exists at all: the site already generates a question a day, already
// writes dist/qotd-feed.json, and already has a working mail transport. The list
// is the one asset here that grows without traffic.
import type { Env } from "./auth"
import { mailEnabled, sendBatch, sendSubscribeConfirm } from "./mail"

const SITE = "https://cert900.com"

/**
 * How many emails one daily send may issue.
 *
 * Resend's free tier is 3,000 a month and 100 a day, so a DAILY send supports
 * roughly 95 addresses before the month runs dry. The cap is here so that limit
 * is hit visibly, in a log line, rather than as silently dropped subscribers.
 * Raise it after moving to a paid plan ($20/mo for 50,000).
 */
const DAILY_CAP = 90

const EMAIL_RE = /^[^\s@,;<>]+@[^\s@,;<>]+\.[a-z]{2,}$/i

/** Per-IP and global signup caps, so the table cannot be filled by one client. */
const SIGNUP_LIMIT = { perIp: 5, global: 500, windowMs: 86_400_000 }

/** A pending signup can be re-sent after this long, and not before: without the
 *  delay, repeated posts would mailbomb whatever address was typed in. */
const RESEND_AFTER_MS = 3_600_000

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } })
}

/** Bounce back into the SPA, which reads ?nl= and shows the right message. */
function backToSite(state: string): Response {
  return Response.redirect(`${SITE}/?nl=${state}`, 302)
}

async function ipHash(req: Request): Promise<string> {
  const ip = req.headers.get("CF-Connecting-IP") ?? "unknown"
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`newsletter:${ip}`))
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("")
}

export function isValidEmail(v: unknown): v is string {
  return typeof v === "string" && v.length <= 254 && EMAIL_RE.test(v)
}

/**
 * Sign up for the daily question.
 *
 * Always answers 200 with the same body, whether the address is new, already
 * pending, or already confirmed. Anything else would turn this into an oracle
 * for "does this person use cert900".
 */
export async function handleSubscribe(req: Request, env: Env): Promise<Response> {
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405)
  if (!mailEnabled(env)) return json({ error: "unavailable" }, 503)

  let body: { email?: unknown }
  try {
    body = await req.json()
  } catch {
    return json({ error: "bad json" }, 400)
  }
  if (!isValidEmail(body.email)) return json({ error: "bad email" }, 400)
  const email = body.email.trim().toLowerCase()

  const hash = await ipHash(req)
  const since = Date.now() - SIGNUP_LIMIT.windowMs
  const counts = await env.DB.prepare(
    "SELECT COUNT(*) AS total, SUM(ip_hash = ?1) AS mine FROM subscribers WHERE created_at > ?2",
  )
    .bind(hash, since)
    .first<{ total: number; mine: number | null }>()
  if ((counts?.mine ?? 0) >= SIGNUP_LIMIT.perIp || (counts?.total ?? 0) >= SIGNUP_LIMIT.global) {
    return json({ error: "rate limited" }, 429)
  }

  const ok = json({ ok: true })
  const now = Date.now()
  const existing = await env.DB.prepare(
    "SELECT token, created_at, confirmed_at, unsubscribed_at FROM subscribers WHERE email = ?",
  )
    .bind(email)
    .first<{ token: string; created_at: number; confirmed_at: number | null; unsubscribed_at: number | null }>()

  if (existing?.confirmed_at && !existing.unsubscribed_at) return ok

  let token = existing?.token ?? crypto.randomUUID()
  if (!existing) {
    await env.DB.prepare(
      "INSERT INTO subscribers (email, token, created_at, ip_hash) VALUES (?, ?, ?, ?)",
    )
      .bind(email, token, now, hash)
      .run()
  } else if (existing.unsubscribed_at) {
    // Coming back after unsubscribing starts over, confirmation and all.
    token = crypto.randomUUID()
    await env.DB.prepare(
      "UPDATE subscribers SET token = ?, created_at = ?, confirmed_at = NULL, unsubscribed_at = NULL, ip_hash = ? WHERE email = ?",
    )
      .bind(token, now, hash, email)
      .run()
  } else if (now - existing.created_at < RESEND_AFTER_MS) {
    // Pending and recent: a real person retrying can wait an hour, and this is
    // what stops the endpoint being used to mailbomb one address.
    return ok
  }

  try {
    await sendSubscribeConfirm(env, email, `${SITE}/api/newsletter/confirm?t=${encodeURIComponent(token)}`)
  } catch (e) {
    console.log(`newsletter: confirm send failed: ${String(e).slice(0, 200)}`)
  }
  return ok
}

/** Double opt-in lands here. Idempotent: confirming twice is a no-op. */
export async function handleConfirm(req: Request, env: Env): Promise<Response> {
  const token = new URL(req.url).searchParams.get("t")
  if (!token) return backToSite("badlink")
  const res = await env.DB.prepare(
    "UPDATE subscribers SET confirmed_at = ?, unsubscribed_at = NULL WHERE token = ? AND confirmed_at IS NULL",
  )
    .bind(Date.now(), token)
    .run()
  if (res.meta.changes > 0) return backToSite("confirmed")
  // Either an unknown token or an already-confirmed one. Both are "you are on
  // the list" from the reader's point of view; only a truly unknown token is an
  // error worth showing.
  const row = await env.DB.prepare("SELECT 1 AS x FROM subscribers WHERE token = ?").bind(token).first()
  return backToSite(row ? "confirmed" : "badlink")
}

/**
 * One-click unsubscribe.
 *
 * GET for the link in the email footer, POST for the List-Unsubscribe-Post
 * header that Gmail and Yahoo now expect from bulk senders. No session, no
 * confirmation step: the token IS the authorisation, and making someone log in
 * to stop email is the pattern this site exists to avoid.
 */
export async function handleUnsubscribe(req: Request, env: Env): Promise<Response> {
  const token = new URL(req.url).searchParams.get("t")
  if (!token) return req.method === "POST" ? json({ error: "bad link" }, 400) : backToSite("badlink")
  await env.DB.prepare("UPDATE subscribers SET unsubscribed_at = ? WHERE token = ?")
    .bind(Date.now(), token)
    .run()
  // One-click POST wants a bare 200; a human clicking the link wants a page.
  return req.method === "POST" ? json({ ok: true }) : backToSite("unsubscribed")
}

interface FeedEntry {
  code: string
  cert: string
  vendor: string
  stem: string
  options: string[]
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

/**
 * The daily email.
 *
 * Question and options only, with the answer behind a link. That is not a dark
 * pattern for its own sake: the explanation and the free video that covers the
 * topic are on the site, and one link is what turns a subscriber into a reader.
 */
export function composeNewsletter(q: FeedEntry, unsubUrl: string): { subject: string; html: string; text: string } {
  const link = `${SITE}/?utm_source=email&utm_medium=newsletter&utm_campaign=qotd`
  const subject = `${q.code} question of the day`
  const opts = q.options.map((o, i) => `${"ABCD"[i]}) ${o}`)
  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f8fafc;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#151b29">
  <div style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:32px">
    <p style="margin:0 0 24px;font-weight:700;font-size:18px;letter-spacing:-0.01em">cert900</p>
    <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#94a3b8">${esc(q.cert)} · ${esc(q.code)}</p>
    <p style="margin:0 0 20px;font-size:16px;line-height:1.5;font-weight:600">${esc(q.stem)}</p>
    <div style="margin:0 0 24px;font-size:15px;line-height:1.9;color:#475569">${opts.map((o) => esc(o)).join("<br>")}</div>
    <a href="${link}" style="display:inline-block;background:#f2b27c;color:#151b29;font-weight:600;font-size:15px;text-decoration:none;padding:12px 20px;border-radius:8px">See the answer</a>
    <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#64748b">Every question links to the free video that covers its topic. No account needed, and nothing behind a paywall.</p>
    <p style="margin:16px 0 0;font-size:12px;line-height:1.6;color:#94a3b8">
      <a href="${unsubUrl}" style="color:#94a3b8">Unsubscribe</a>
    </p>
  </div>
</body></html>`
  const text = `${q.cert} · ${q.code}\n\n${q.stem}\n\n${opts.join("\n")}\n\nSee the answer: ${link}\n\nUnsubscribe: ${unsubUrl}`
  return { subject, html, text }
}

/** Sends today's question to every confirmed subscriber. */
export async function dailyNewsletter(env: Env, q: FeedEntry | null): Promise<void> {
  if (!mailEnabled(env)) {
    console.log("newsletter: skipped (no mail transport configured)")
    return
  }
  if (!q) {
    console.log("newsletter: no feed entry")
    return
  }

  const rows = await env.DB.prepare(
    `SELECT email, token FROM subscribers
      WHERE confirmed_at IS NOT NULL AND unsubscribed_at IS NULL
      ORDER BY confirmed_at ASC LIMIT ?`,
  )
    .bind(DAILY_CAP + 1)
    .all<{ email: string; token: string }>()

  const all = rows.results
  if (all.length === 0) {
    console.log("newsletter: no confirmed subscribers")
    return
  }
  // Never truncate silently. Oldest-first ordering at least makes the cut
  // stable rather than arbitrary.
  const list = all.slice(0, DAILY_CAP)
  if (all.length > DAILY_CAP) {
    console.log(`newsletter: CAP HIT -- ${all.length - DAILY_CAP}+ subscribers not sent to. Raise DAILY_CAP and the Resend plan.`)
  }

  const messages = list.map((s) => {
    const unsub = `${SITE}/api/newsletter/unsubscribe?t=${encodeURIComponent(s.token)}`
    const { subject, html, text } = composeNewsletter(q, unsub)
    return {
      to: s.email,
      subject,
      html,
      text,
      // Gmail and Yahoo require both of these from bulk senders, and without
      // them a "this is spam" click is the only exit a reader is offered.
      // One-Click is why handleUnsubscribe accepts POST as well as GET.
      headers: {
        "List-Unsubscribe": `<${unsub}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    }
  })

  const { sent, failed } = await sendBatch(env, messages)
  console.log(`newsletter: ${sent} sent, ${failed} failed, of ${all.length} confirmed`)
}
