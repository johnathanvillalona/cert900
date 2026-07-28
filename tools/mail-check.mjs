// Proves transactional mail actually works before AUTH_EMAIL_FROM is switched
// on, by sending one real message through the transport the Worker will use.
//
//   RESEND_API_KEY=re_xxx node tools/mail-check.mjs you@example.com
//   node tools/mail-check.mjs you@example.com            # Cloudflare binding
//
// Why this exists: a mail integration that is misconfigured fails silently from
// the UI. Better Auth swallows a rejected send, so "reset link sent" is what the
// user sees whether or not anything was delivered, and the account is then
// unrecoverable. Nothing short of an actual send proves the setup.
//
// The Cloudflare path is the subtler one. Email Routing (receiving) and Email
// Sending (transactional) are different products that share the `send_email`
// binding name and both add DNS records, so DNS can look completely correct and
// wrangler will even print an "unrestricted" Send Email binding while every send
// fails with "destination address is not a verified address" — Routing only
// sends to addresses you have verified. Email Sending also requires the Workers
// Paid plan.
import { mkdtempSync, writeFileSync, rmSync } from "node:fs"
import { spawn } from "node:child_process"
import { tmpdir } from "node:os"
import path from "node:path"

const to = process.argv[2]
const from = process.env.AUTH_EMAIL_FROM ?? "no-reply@send.cert900.com"
if (!to || !to.includes("@")) {
  console.error("usage: node tools/mail-check.mjs <destination-address>")
  console.error("Use an inbox you can actually read: the check is whether the mail arrives.")
  console.error("\nResend:     RESEND_API_KEY=re_xxx node tools/mail-check.mjs you@example.com")
  console.error("Cloudflare: node tools/mail-check.mjs you@example.com   (needs Workers Paid)")
  process.exit(1)
}

const SUBJECT = "cert900 mail check"
const TEXT =
  "Transactional mail is working for cert900. Password reset links will be delivered, so AUTH_EMAIL_FROM is safe to set."
const HTML = `<p>${TEXT}</p>`

// ---- Resend: a plain fetch, no worker involved ---------------------------
if (process.env.RESEND_API_KEY) {
  console.log(`Resend: sending from ${from} to ${to}`)
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: `cert900 <${from}>`, to: [to], subject: SUBJECT, html: HTML, text: TEXT }),
  })
  const body = await res.text()
  if (res.ok) {
    console.log(`OK  ${body}`)
    console.log(`\nCheck that inbox. If the mail arrived, set AUTH_EMAIL_FROM to "${from}" in`)
    console.log(`wrangler.jsonc, make sure RESEND_API_KEY is set as a secret:`)
    console.log(`  npx wrangler secret put RESEND_API_KEY`)
    console.log(`then commit, and email sign-in goes live on the next deploy.`)
  } else {
    console.error(`FAILED  HTTP ${res.status}\n${body}`)
    if (body.includes("not verified") || res.status === 403) {
      console.error(
        `\nThe sending domain is not verified in Resend yet, or "${from}" is not on a\n` +
          `verified domain. Resend > Domains > add the domain, then add the DNS records\n` +
          `it shows you in Cloudflare DNS.`,
      )
    }
    process.exitCode = 1
  }
  process.exit()
}

// ---- Cloudflare Email Sending: local worker, remote binding --------------
console.log("No RESEND_API_KEY set, testing the Cloudflare Email Sending binding instead.")
const PORT = 8787 + Math.floor(Math.random() * 200)
const dir = mkdtempSync(path.join(tmpdir(), "cert900-mailcheck-"))

writeFileSync(
  path.join(dir, "wrangler.jsonc"),
  JSON.stringify({
    name: "cert900-mailcheck",
    main: "index.mjs",
    compatibility_date: "2026-07-14",
    // remote:true = local worker, real Email Service.
    send_email: [{ name: "EMAIL", remote: true }],
  }),
)

writeFileSync(
  path.join(dir, "index.mjs"),
  `export default {
  async fetch(req, env) {
    const to = new URL(req.url).searchParams.get("to")
    try {
      const res = await env.EMAIL.send({
        to,
        from: { email: ${JSON.stringify(from)}, name: "cert900" },
        subject: ${JSON.stringify(SUBJECT)},
        html: ${JSON.stringify(HTML)},
        text: ${JSON.stringify(TEXT)},
      })
      return Response.json({ ok: true, res })
    } catch (e) {
      return Response.json({ ok: false, error: String(e) }, { status: 500 })
    }
  },
}`,
)

// One command string rather than an args array: with shell:true Node warns
// about unescaped arg concatenation, and PORT is the only interpolation.
const dev = spawn(`npx wrangler dev --remote --port ${PORT}`, {
  cwd: dir,
  shell: true,
  stdio: ["ignore", "pipe", "pipe"],
})
let log = ""
dev.stdout.on("data", (d) => (log += d))
dev.stderr.on("data", (d) => (log += d))

const cleanup = () => {
  dev.kill()
  try {
    rmSync(dir, { recursive: true, force: true })
  } catch {
    /* temp dir; the OS will get it */
  }
}

const deadline = Date.now() + 90_000
let ready = false
while (Date.now() < deadline && !ready) {
  await new Promise((r) => setTimeout(r, 1000))
  try {
    await fetch(`http://127.0.0.1:${PORT}/`)
    ready = true
  } catch {
    /* not up yet */
  }
}
if (!ready) {
  console.error("wrangler dev never came up. Log:\n" + log.slice(-2000))
  cleanup()
  process.exit(1)
}

try {
  const res = await fetch(`http://127.0.0.1:${PORT}/?to=${encodeURIComponent(to)}`)
  const body = await res.json()
  if (body.ok) {
    console.log(`OK  sent from ${from} to ${to}`)
    console.log(JSON.stringify(body.res, null, 2))
    console.log(`\nCheck that inbox, then set AUTH_EMAIL_FROM to "${from}" in wrangler.jsonc.`)
  } else {
    console.error(`FAILED  ${body.error}`)
    if (String(body.error).includes("not a verified address")) {
      console.error(
        `\nThat is the Email ROUTING error, which means Email SENDING is not active for\n` +
          `this domain. Email Sending needs the Workers Paid plan; on the free plan use\n` +
          `Resend instead:\n\n` +
          `  RESEND_API_KEY=re_xxx node tools/mail-check.mjs ${to}\n\n` +
          `Leave AUTH_EMAIL_FROM empty until one of them passes.`,
      )
    }
    process.exitCode = 1
  }
} finally {
  cleanup()
}
