import { createAuth, type Env } from "./auth"
import { dailySocialPost, todaysQuestion, weeklyRedditScan, weeklyIndexNow } from "./social"
import { dailyNewsletter, handleConfirm, handleSubscribe, handleUnsubscribe } from "./newsletter"
import { mailEnabled } from "./mail"
import { isGuidePath, isKnownPath } from "../src/data/routes"
import { EXAM_IDS } from "../src/data/exam-ids"

const JSON_HEADERS = { "Content-Type": "application/json" }

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS })
}

/** Progress payload guard: per-exam progress blobs, size-capped. */
function isReasonableProgress(data: unknown): boolean {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false
  const o = data as Record<string, unknown>
  return typeof o.topics === "object" && o.topics !== null && Array.isArray(o.exams)
}

async function handleProgress(req: Request, env: Env): Promise<Response> {
  const auth = createAuth(env)
  const session = await auth.api.getSession({ headers: req.headers })
  if (!session) return json({ error: "unauthorized" }, 401)
  const userId = session.user.id

  if (req.method === "GET") {
    const rows = await env.DB.prepare(
      "SELECT exam_id, data, updated_at FROM progress WHERE user_id = ?",
    )
      .bind(userId)
      .all<{ exam_id: string; data: string; updated_at: number }>()
    const out: Record<string, { data: unknown; updatedAt: number }> = {}
    for (const r of rows.results) {
      try {
        out[r.exam_id] = { data: JSON.parse(r.data), updatedAt: r.updated_at }
      } catch {
        /* skip corrupted row */
      }
    }
    return json(out)
  }

  if (req.method === "PUT") {
    let body: { examId?: string; data?: unknown; updatedAt?: number }
    try {
      body = await req.json()
    } catch {
      return json({ error: "bad json" }, 400)
    }
    const { examId, data } = body
    const updatedAt = typeof body.updatedAt === "number" ? body.updatedAt : Date.now()
    if (!examId || typeof examId !== "string" || examId.length > 32 || !isReasonableProgress(data))
      return json({ error: "bad payload" }, 400)
    const raw = JSON.stringify(data)
    if (raw.length > 512_000) return json({ error: "payload too large" }, 413)

    await env.DB.prepare(
      `INSERT INTO progress (user_id, exam_id, data, updated_at) VALUES (?, ?, ?, ?)
       ON CONFLICT(user_id, exam_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`,
    )
      .bind(userId, examId, raw, updatedAt)
      .run()
    return json({ ok: true, updatedAt })
  }

  if (req.method === "DELETE") {
    await env.DB.prepare("DELETE FROM progress WHERE user_id = ?").bind(userId).run()
    return json({ ok: true })
  }

  return json({ error: "method not allowed" }, 405)
}

/** One-way hash of the client IP; stored instead of the IP itself. */
async function ipHash(req: Request): Promise<string> {
  const ip = req.headers.get("CF-Connecting-IP") ?? "unknown"
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`report:${ip}`))
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("")
}

/**
 * Report payload guard.
 *
 * `examId` must be a REAL exam id, not merely a short string. That is a security
 * check rather than tidiness: the credential throttle below keeps its counters in
 * this same table under the sentinel exam_id '__auth', and the report rate
 * limiter excludes exactly those rows -- so a client posting {"examId":"__auth"}
 * wrote rows that never counted against its own quota, i.e. unbounded D1 writes.
 *
 * `ref` is pinned to the two shapes ReportButton actually sends (`q:<id>` and
 * `pbq:<title>`). It used to accept any 200-char string, which now matters more
 * than it did: the admin triage screen renders it.
 */
const REF_RE = /^(?:q:\d{1,7}|pbq:[^\n\r]{1,160})$/

export function isValidReport(
  b: { examId?: unknown; ref?: unknown },
): b is { examId: string; ref: string } {
  return (
    typeof b.examId === "string" &&
    EXAM_IDS.includes(b.examId) &&
    typeof b.ref === "string" &&
    REF_RE.test(b.ref)
  )
}

/** Anonymous question reports, rate limited per IP and globally. */
async function handleReport(req: Request, env: Env): Promise<Response> {
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405)

  let body: { examId?: unknown; ref?: unknown }
  try {
    body = await req.json()
  } catch {
    return json({ error: "bad json" }, 400)
  }
  if (!isValidReport(body)) return json({ error: "bad payload" }, 400)
  const { examId, ref } = body

  const hash = await ipHash(req)
  const dayAgo = Date.now() - 86_400_000
  // exam_id != '__auth' matters: the auth throttle (below) stores its counters
  // in this table too, and without the filter every sign-in attempt would count
  // against the 1000/day global report cap and quietly disable reporting.
  const counts = await env.DB.prepare(
    "SELECT COUNT(*) AS total, SUM(ip_hash = ?1) AS mine FROM reports WHERE created_at > ?2 AND exam_id != '__auth'",
  )
    .bind(hash, dayAgo)
    .first<{ total: number; mine: number | null }>()
  if ((counts?.mine ?? 0) >= 20 || (counts?.total ?? 0) >= 1000) {
    return json({ error: "rate limited" }, 429)
  }

  await env.DB.prepare(
    "INSERT INTO reports (exam_id, ref, ip_hash, created_at) VALUES (?, ?, ?, ?)",
  )
    .bind(examId, ref, hash, Date.now())
    .run()
  return json({ ok: true })
}

/**
 * Is this session the site owner?
 *
 * Two conditions, both required. The allowlist is obvious; `emailVerified` is
 * the one that is easy to leave out and would matter. Email/password signup is
 * enabled with `requireEmailVerification: false`, so without the second check
 * anyone who knows an allowlisted address that does not yet have an account
 * could register it with a password and be handed admin. The owner's address
 * happens to already be taken by a Google account, but the gate must not rest
 * on that accident -- adding a second admin later would reopen it.
 *
 * Social logins arrive verified, so this costs the owner nothing.
 */
export function isAdminEmail(env: Env, email: unknown, emailVerified: unknown): boolean {
  if (typeof email !== "string" || emailVerified !== true) return false
  const list = (env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
  return list.includes(email.trim().toLowerCase())
}

/**
 * Owner-only report triage.
 *
 * Non-admins get 404, not 401/403: the endpoint should not confirm it exists.
 * Every query excludes the '__auth' sentinel rows and NEVER selects `ip_hash`,
 * which exists only as a rate-limit key and has no reason to leave the worker.
 */
async function handleAdmin(req: Request, env: Env, pathname: string): Promise<Response> {
  const notFound = json({ error: "not found" }, 404)
  const session = await createAuth(env).api.getSession({ headers: req.headers })
  if (!isAdminEmail(env, session?.user.email, session?.user.emailVerified)) return notFound

  // "Am I an admin, and is there anything waiting?" The client cannot know the
  // allowlist, and probing the reports endpoint just to decide whether to draw
  // a menu item would run the grouped query on every page load. 404 for
  // everyone else falls out of the gate above, so this leaks nothing.
  if (pathname === "/api/admin/whoami" && req.method === "GET") {
    const row = await env.DB.prepare(
      `SELECT COUNT(*) AS open FROM (
         SELECT 1 FROM reports
          WHERE exam_id != '__auth' AND resolved_at IS NULL
          GROUP BY exam_id, ref)`,
    ).first<{ open: number }>()
    return json({ admin: true, open: row?.open ?? 0 })
  }

  if (pathname === "/api/admin/reports" && req.method === "GET") {
    const wantResolved = new URL(req.url).searchParams.get("status") === "resolved"
    // Grouped, because five people reporting one question is the signal and
    // five separate rows are noise. A group counts as open while ANY of its
    // rows is unresolved -- MAX(resolved_at) would mark a question handled the
    // moment one old report was cleared, hiding every report that came after.
    const rows = await env.DB.prepare(
      `SELECT exam_id AS examId, ref,
              COUNT(*) AS reports,
              SUM(CASE WHEN resolved_at IS NULL THEN 1 ELSE 0 END) AS open,
              MIN(created_at) AS firstAt,
              MAX(created_at) AS lastAt
         FROM reports
        WHERE exam_id != '__auth'
        GROUP BY exam_id, ref
       HAVING open ${wantResolved ? "= 0" : "> 0"}
        ORDER BY reports DESC, lastAt DESC
        LIMIT 500`,
    ).all()
    return json({ reports: rows.results })
  }

  if (pathname === "/api/admin/reports/resolve" && req.method === "POST") {
    let body: { examId?: unknown; ref?: unknown }
    try {
      body = await req.json()
    } catch {
      return json({ error: "bad json" }, 400)
    }
    const { examId, ref } = body
    // Looser than isValidReport on purpose: rows predating that validation
    // (an "exam" called live-check, for one) are exactly the junk the owner
    // needs to be able to clear. Still parameterized, still never '__auth'.
    if (
      typeof examId !== "string" || !examId || examId.length > 32 || examId === "__auth" ||
      typeof ref !== "string" || !ref || ref.length > 200
    ) {
      return json({ error: "bad payload" }, 400)
    }
    const res = await env.DB.prepare(
      "UPDATE reports SET resolved_at = ? WHERE exam_id = ? AND ref = ? AND resolved_at IS NULL",
    )
      .bind(Date.now(), examId, ref)
      .run()
    return json({ ok: true, resolved: res.meta.changes })
  }

  return notFound
}

/**
 * Credential-endpoint throttling.
 *
 * `/api/auth/*` had no rate limiting at all, which was survivable while Google
 * was the only provider (the guessing happens at Google). Password sign-in
 * makes this endpoint worth attacking, so the credential routes get a per-IP
 * budget before Better Auth ever sees the request. Reuses the `reports` table
 * as a generic counter rather than adding a migration: it already has the
 * (ip_hash, created_at) shape and a retention story, and the rows are
 * distinguishable by exam_id.
 */
const AUTH_LIMIT = { perIp: 30, windowMs: 15 * 60_000 }
// Better Auth exposes password reset under both the current name and the
// legacy alias, so both are covered; missing one would leave an open door.
const THROTTLED_AUTH_ROUTES = [
  "/api/auth/sign-in/email",
  "/api/auth/sign-up/email",
  "/api/auth/request-password-reset",
  "/api/auth/forget-password",
  "/api/auth/reset-password",
]

async function authThrottled(req: Request, env: Env, pathname: string): Promise<boolean> {
  if (req.method !== "POST") return false
  if (!THROTTLED_AUTH_ROUTES.some((r) => pathname.startsWith(r))) return false

  const hash = await ipHash(req)
  const since = Date.now() - AUTH_LIMIT.windowMs
  const row = await env.DB.prepare(
    "SELECT COUNT(*) AS mine FROM reports WHERE exam_id = '__auth' AND ip_hash = ?1 AND created_at > ?2",
  )
    .bind(hash, since)
    .first<{ mine: number | null }>()
  if ((row?.mine ?? 0) >= AUTH_LIMIT.perIp) return true

  await env.DB.prepare(
    "INSERT INTO reports (exam_id, ref, ip_hash, created_at) VALUES ('__auth', ?, ?, ?)",
  )
    .bind(pathname.slice(10, 60), hash, Date.now())
    .run()
  return false
}

const CANONICAL_HOST = "cert900.com"

// CSP allows exactly what index.html ships: self-hosted assets, the two inline
// scripts (theme boot + beacon loader), and Cloudflare Web Analytics. The
// media.ethicalads.io / server.ethicalads.io hosts pre-authorize EthicalAds
// (script + creative + ad-decision fetch) so the ad unit works the moment
// ADS.enabled flips in site.ts -- no worker change needed then. Harmless while
// ads are off: with an empty publisherId the script is never loaded, so these
// hosts are never contacted. Confirm the decision host in DevTools when first
// enabling, in case EthicalAds changes it.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://media.ethicalads.io https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://media.ethicalads.io https://www.google-analytics.com https://region1.google-analytics.com",
  "font-src 'self'",
  "connect-src 'self' https://cloudflareinsights.com https://server.ethicalads.io https://www.google-analytics.com https://region1.google-analytics.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://accounts.google.com",
  "object-src 'none'",
].join("; ")

const GROW_HOSTS = "https://grow.me https://*.grow.me"

/**
 * The 16 static guide pages get their own, slightly wider CSP: the app policy
 * above plus the grow.me hosts for the Grow script (see tools/prerender.tsx).
 * frame-src exists here and not above because Grow's favourites sign-in
 * renders in an iframe; the strict app CSP inherits frame-src from
 * `default-src 'self'` and stays closed.
 *
 * If ads ever go live (the September decision), this policy -- NOT the app
 * one -- is what gets replaced with the permissive https: version, because
 * programmatic creatives come from arbitrary advertiser hosts that no static
 * allowlist can enumerate.
 */
const GUIDE_CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://www.googletagmanager.com ${GROW_HOSTS}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: https://www.google-analytics.com https://region1.google-analytics.com ${GROW_HOSTS}`,
  "font-src 'self'",
  `connect-src 'self' https://cloudflareinsights.com https://www.google-analytics.com https://region1.google-analytics.com ${GROW_HOSTS}`,
  `frame-src ${GROW_HOSTS}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ")

/**
 * The homepage carries a pathname-gated Grow snippet (Grow's install
 * verification fetches the domain root, so "/" must serve it -- see
 * tools/prerender.tsx). This is the app CSP with ONLY the grow.me hosts
 * added: NOT a reuse of GUIDE_CSP, because the landing has the Google
 * sign-in and must keep `form-action https://accounts.google.com` (and the
 * ethicalads hosts, since a session that cold-loads "/" lives under this
 * policy for its whole SPA lifetime, Dashboard included). Every app path
 * other than "/" keeps the strict CSP above.
 */
const HOME_CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://media.ethicalads.io https://www.googletagmanager.com ${GROW_HOSTS}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: https://media.ethicalads.io https://www.google-analytics.com https://region1.google-analytics.com ${GROW_HOSTS}`,
  "font-src 'self'",
  `connect-src 'self' https://cloudflareinsights.com https://server.ethicalads.io https://www.google-analytics.com https://region1.google-analytics.com ${GROW_HOSTS}`,
  `frame-src ${GROW_HOSTS}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://accounts.google.com",
  "object-src 'none'",
].join("; ")

/** Security headers on every response; CSP only on HTML documents. */
function withSecurityHeaders(res: Response, pathname: string): Response {
  const out = new Response(res.body, res)
  out.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
  out.headers.set("X-Content-Type-Options", "nosniff")
  out.headers.set("X-Frame-Options", "DENY")
  out.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  out.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
  if ((out.headers.get("content-type") ?? "").includes("text/html")) {
    out.headers.set("Content-Security-Policy", isGuidePath(pathname) ? GUIDE_CSP : pathname === "/" ? HOME_CSP : CSP)
  }
  return out
}

async function route(req: Request, env: Env): Promise<Response> {
  const url = new URL(req.url)

  // Canonical-host + TLS redirect: http, old workers.dev links, and www all
  // land on https://cert900.com. The http check reads CF-Visitor (set only by
  // the Cloudflare edge) because wrangler dev simulates the route host in
  // request.url, which would loop local dev if we trusted url.protocol.
  const wrongHost = url.hostname === `www.${CANONICAL_HOST}` || url.hostname.endsWith(".workers.dev")
  let visitorScheme: string | undefined
  try {
    visitorScheme = JSON.parse(req.headers.get("cf-visitor") ?? "{}").scheme
  } catch {
    /* malformed header: treat as unknown */
  }
  const wrongProto = visitorScheme === "http" && url.hostname === CANONICAL_HOST
  if (wrongHost || wrongProto) {
    url.hostname = CANONICAL_HOST
    url.protocol = "https:"
    const status = req.method === "GET" || req.method === "HEAD" ? 301 : 308
    return Response.redirect(url.toString(), status)
  }

  if (url.pathname.startsWith("/api/auth/")) {
    if (await authThrottled(req, env, url.pathname)) {
      return json({ error: "too many attempts. Try again in a few minutes." }, 429)
    }
    return createAuth(env).handler(req)
  }
  if (url.pathname === "/api/progress") {
    return handleProgress(req, env)
  }
  if (url.pathname === "/api/report") {
    return handleReport(req, env)
  }
  if (url.pathname.startsWith("/api/admin/")) {
    return handleAdmin(req, env, url.pathname)
  }
  if (url.pathname === "/api/newsletter/subscribe") {
    return handleSubscribe(req, env)
  }
  if (url.pathname === "/api/newsletter/confirm") {
    return handleConfirm(req, env)
  }
  if (url.pathname === "/api/newsletter/unsubscribe") {
    return handleUnsubscribe(req, env)
  }
  // Which optional auth methods this deploy actually offers, so the clients can
  // render the right buttons instead of showing a form that would 400. Cached
  // briefly: it only changes on deploy.
  if (url.pathname === "/api/config") {
    // Both ride on the same flag: no transport means no confirmation mail, and
    // a signup form that silently drops addresses is worse than no form.
    const res = json({ emailAuth: mailEnabled(env), newsletter: mailEnabled(env) })
    res.headers.set("cache-control", "public, max-age=300")
    return res
  }
  if (url.pathname.startsWith("/api/")) {
    return json({ error: "not found" }, 404)
  }
  // Vite content-hashes everything under /assets/ (js, css, fonts), so those
  // files never change in place: let browsers keep them for a year instead of
  // revalidating on every visit. HTML keeps the platform default
  // (max-age=0, must-revalidate) so deploys land on the next navigation.
  // The text/html guard matters: missing asset paths fall through to the SPA
  // index.html with a 200, which must never be cached as immutable.
  const res = await env.ASSETS.fetch(req)
  const type = res.headers.get("content-type") ?? ""
  if (
    url.pathname.startsWith("/assets/") &&
    (res.ok || res.status === 304) &&
    !type.includes("text/html")
  ) {
    const out = new Response(res.body, res)
    out.headers.set("cache-control", "public, max-age=31536000, immutable")
    return out
  }

  // Soft-404 fix. `not_found_handling: "single-page-application"` answers EVERY
  // unmatched path with index.html and HTTP 200, so the whole infinite URL space
  // looked like real pages to a crawler (and the SPA quietly rendered the
  // landing screen). Serve the same shell, so a mistyped link still boots the
  // app, but with an honest status and noindex. Only HTML falls through here;
  // a missing static file keeps whatever the assets binding returned.
  if (res.ok && type.includes("text/html") && !isKnownPath(url.pathname)) {
    const out = new Response(res.body, { status: 404, headers: res.headers })
    out.headers.set("X-Robots-Tag", "noindex")
    return out
  }
  return res
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    return withSecurityHeaders(await route(req, env), new URL(req.url).pathname)
  },

  // Marketing automation. "30 14 * * *" = daily question-of-the-day post;
  // "0 15 * * 1" = Monday lead scan + IndexNow ping.
  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    if (controller.cron === "30 14 * * *") {
      // One feed read, two destinations. allSettled so a dead social token
      // never costs the mailing list its send, or the other way round.
      ctx.waitUntil(
        todaysQuestion(env).then((q) =>
          Promise.allSettled([dailySocialPost(env, q), dailyNewsletter(env, q)]),
        ),
      )
    } else {
      ctx.waitUntil(Promise.allSettled([weeklyRedditScan(env), weeklyIndexNow()]))
    }
  },
} satisfies ExportedHandler<Env>
