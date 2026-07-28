import type { Env } from "./auth"

/**
 * Transactional mail through the Cloudflare Email Service Workers binding.
 *
 * Binding rather than the REST API because this runs inside the Worker, so
 * there is no API token to store or rotate. The sending domain has to be
 * onboarded once (`wrangler email sending enable cert900.com`, or Dashboard >
 * Compute & AI > Email Service), which adds the SPF and DKIM records.
 *
 * Everything here is inert until `AUTH_EMAIL_FROM` is set in wrangler.jsonc —
 * the same "configured or invisible" pattern as ADS and AFFILIATE in
 * src/lib/site.ts. `mailEnabled` is what gates password auth: shipping
 * email/password sign-in without a working reset is a permanent lockout for
 * anyone who forgets their password.
 */
export function mailEnabled(env: Env): boolean {
  return Boolean(env.AUTH_EMAIL_FROM && env.EMAIL)
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
    console.log(`mail skipped (AUTH_EMAIL_FROM unset): ${subject}`)
    return
  }
  await env.EMAIL!.send({
    to,
    from: { email: env.AUTH_EMAIL_FROM!, name: "cert900" },
    subject,
    html,
    // Always both: some clients render only text, and text/plain alternatives
    // measurably help spam scoring.
    text,
  })
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
