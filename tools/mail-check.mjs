// Proves whether cert900.com is really onboarded for Cloudflare Email SENDING,
// by sending one real email through the same binding the Worker uses.
//
//   node tools/mail-check.mjs you@example.com
//
// Why this exists: Email Routing (receiving/forwarding) and Email Sending
// (transactional) are different products that share the `send_email` binding
// name and both add DNS records. cert900.com has Routing configured — MX, an
// SPF include, and a cf2024-1 DKIM key are all live — which makes DNS look
// correct and makes `wrangler dev` print an "unrestricted" Send Email binding,
// while every send still fails:
//
//   destination address is not a verified address
//
// because Routing only sends to addresses you have verified. Nothing short of
// an actual send distinguishes the two, and getting it wrong means shipping a
// password-reset flow that silently never delivers.
//
// Runs the worker as a LOCAL preview with a REMOTE binding, so it talks to the
// real Email Service without deploying anything.
import { mkdtempSync, writeFileSync, rmSync } from "node:fs"
import { spawn } from "node:child_process"
import { tmpdir } from "node:os"
import path from "node:path"

const to = process.argv[2]
if (!to || !to.includes("@")) {
  console.error("usage: node tools/mail-check.mjs <destination-address>")
  console.error("Use an inbox you can actually read: the check is whether the mail arrives.")
  process.exit(1)
}

const FROM = "no-reply@cert900.com"
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
        from: { email: ${JSON.stringify(FROM)}, name: "cert900" },
        subject: "cert900 email sending check",
        html: "<p>Cloudflare Email Sending is working for cert900.com. Password reset mail will be delivered, so AUTH_EMAIL_FROM is safe to set.</p>",
        text: "Cloudflare Email Sending is working for cert900.com. Password reset mail will be delivered, so AUTH_EMAIL_FROM is safe to set.",
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
    console.log(`OK  sent from ${FROM} to ${to}`)
    console.log(JSON.stringify(body.res, null, 2))
    console.log(`\nCheck that inbox. If the mail arrived, set AUTH_EMAIL_FROM to "${FROM}" in`)
    console.log(`wrangler.jsonc, commit, and email/password sign-in goes live on the next deploy.`)
  } else {
    console.error(`FAILED  ${body.error}`)
    if (String(body.error).includes("not a verified address")) {
      console.error(
        `\nThat is the Email ROUTING error, which means Email SENDING is not onboarded\n` +
          `for cert900.com yet. Dashboard > Compute & AI > Email Service > Email Sending >\n` +
          `Onboard Domain, then run this again. Leave AUTH_EMAIL_FROM empty until it passes.`,
      )
    }
    process.exitCode = 1
  }
} finally {
  cleanup()
}
