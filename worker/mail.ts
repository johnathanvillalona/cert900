import type { Env } from "./auth"

/**
 * Transactional mail for password reset and address confirmation.
 *
 * Two transports, picked by whichever credential the deploy actually has:
 *
 *   RESEND_API_KEY set  -> Resend REST API (a plain fetch, no binding)
 *   EMAIL binding set   -> Cloudflare Email Service
 *
 * Cloudflare's Email Sending is the tidier option (no third party, no API key)
 * but it is gated behind the Workers Paid plan, so Resend's free tier is the
 * zero-cost path. Nothing else in the worker cares which one is in use.
 *
 * Everything here is inert until `AUTH_EMAIL_FROM` is set, and `mailEnabled` is
 * what gates password auth: shipping email/password sign-in without a working
 * reset is a permanent lockout for anyone who forgets their password.
 */
export function mailEnabled(env: Env): boolean {
  return Boolean(env.AUTH_EMAIL_FROM && (env.RESEND_API_KEY || env.EMAIL))
}

const SITE = "https://cert900.com"

/** Shared shell so both mails look like they came from the same product. */
function wrap(heading: string, intro: string, button: { href: string; label: string }, footer: string): string {
  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f8fafc;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#151b29">
  <div style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:32px">
    <p style="margin:0 0 24px;font-weight:700;font-size:18px;letter-spacing:-0.01em">cert900</p>
    <h1 style="margin:0 0 12px;font-size:20px;line-height:1.3">${heading}</h1>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#475569">${intro}</p>
    <a href="${button.href}" style="display:inline-block;background:#f2b27c;color:#151b29;font-weight:600;font-size:15px;text-decoration:none;padding:12px 20px;border-radius:8px">${button.label}</a>
    <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#64748b">${footer}</p>
    <p style="margin:16px 0 0;font-size:13px;line-height:1.6;color:#64748b;word-break:break-all">Or paste this link into your browser:<br>${button.href}</p>
  </div>
</body></html>`
}

async function send(env: Env, to: string, subject: string, html: string, text: string): Promise<void> {
  if (!mailEnabled(env)) {
    // Should be unreachable: password auth is gated on the same flag.
    console.log(`mail skipped (no transport configured): ${subject}`)
    return
  }
  const from = env.AUTH_EMAIL_FROM!

  if (env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      // Always both bodies: some clients render only text, and a text/plain
      // alternative measurably helps spam scoring.
      body: JSON.stringify({ from: `cert900 <${from}>`, to: [to], subject, html, text }),
    })
    if (!res.ok) {
      // Surface the reason: Better Auth swallows a rejected promise here, and a
      // silent failure looks identical to a delivered reset from the UI.
      const body = await res.text()
      throw new Error(`resend send failed (${res.status}): ${body.slice(0, 300)}`)
    }
    return
  }

  await env.EMAIL!.send({ to, from: { email: from, name: "cert900" }, subject, html, text })
}

export async function sendPasswordReset(env: Env, to: string, url: string): Promise<void> {
  await send(
    env,
    to,
    "Reset your cert900 password",
    wrap(
      "Reset your password",
      "Use the button below to choose a new password for your cert900 account. The link is single-use and expires in an hour.",
      { href: url, label: "Choose a new password" },
      "If you did not ask for this, you can ignore this email. Your password will not change and your practice progress is untouched.",
    ),
    `Reset your cert900 password\n\nOpen this link to choose a new one. It is single-use and expires in an hour:\n${url}\n\nIf you did not ask for this, ignore this email: nothing changes.`,
  )
}

export async function sendVerification(env: Env, to: string, url: string): Promise<void> {
  await send(
    env,
    to,
    "Confirm your cert900 email",
    wrap(
      "Confirm your email",
      "Confirming your address lets you reset your password later and keeps your synced progress attached to an address you own.",
      { href: url, label: "Confirm this address" },
      `You can keep practicing without confirming: everything on ${SITE} is free and works without an account.`,
    ),
    `Confirm your cert900 email\n\nOpen this link to confirm:\n${url}\n\nYou can keep practicing without confirming: everything on ${SITE} is free and works without an account.`,
  )
}
