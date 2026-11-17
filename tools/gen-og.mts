/**
 * Renders the Open Graph share cards: public/og.png (site) and
 * public/og/<slug>.png (one per guide). Run manually after changing guide
 * titles or adding a guide; the build only copies the PNGs.
 *
 *   npx tsx tools/gen-og.mts
 *
 * Uses the installed Chrome through Playwright, with Commissioner and Red Hat
 * Mono embedded from node_modules, so no network access is needed. Cards never
 * show Cert900's question counts.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve } from "node:path"
import { chromium } from "@playwright/test"
import { GUIDE_EXAMS, GUIDE_META } from "../src/data/guide-meta"
import { EXAM_META } from "../src/data/meta"
import { vendorList } from "../src/lib/copy"

const font = (pkg: string, file: string) =>
  readFileSync(resolve("node_modules/@fontsource-variable", pkg, "files", file)).toString("base64")
const commissioner = font("commissioner", "commissioner-latin-wght-normal.woff2")
const mono = font("red-hat-mono", "red-hat-mono-latin-wght-normal.woff2")
const mark = readFileSync(resolve("public/favicon.svg"), "utf8")

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

function card({ eyebrow, headline, footer }: { eyebrow: string; headline: string; footer: string }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: "Commissioner"; src: url(data:font/woff2;base64,${commissioner}) format("woff2"); font-weight: 100 900; }
@font-face { font-family: "Red Hat Mono"; src: url(data:font/woff2;base64,${mono}) format("woff2"); font-weight: 300 700; }
html, body { margin: 0; }
body { width: 1200px; height: 630px; box-sizing: border-box; padding: 72px 80px; background: #f8fafc; color: #151b29;
  font-family: "Commissioner", sans-serif; display: flex; flex-direction: column; justify-content: space-between;
  border-bottom: 14px solid #f2b27c; }
.brand { display: flex; align-items: center; gap: 18px; font-size: 34px; font-weight: 600; }
.brand svg { width: 64px; height: 64px; }
.brand b { font-family: "Red Hat Mono", monospace; font-weight: 600; color: #b45309; }
.eyebrow { font-family: "Red Hat Mono", monospace; font-size: 30px; color: #475569; margin: 0 0 18px; }
h1 { font-size: 64px; line-height: 1.1; font-weight: 700; margin: 0; max-width: 1000px; letter-spacing: -0.01em; }
.footer { font-size: 30px; color: #475569; display: flex; justify-content: space-between; }
</style></head><body>
<div class="brand">${mark}<span>cert<b>900</b></span></div>
<div><p class="eyebrow">${esc(eyebrow)}</p><h1>${esc(headline)}</h1></div>
<div class="footer"><span>${esc(footer)}</span><span>cert900.com</span></div>
</body></html>`
}

const site = {
  slug: "",
  eyebrow: vendorList().replace(/,? and /, ", ").split(", ").join(" · "),
  headline: "Free practice exams and study guides for IT certifications.",
  footer: "Timed practice exams, PBQs, and study guides",
}
const guides = Object.entries(GUIDE_META).map(([key, meta]) => {
  const codes = (GUIDE_EXAMS[key as keyof typeof GUIDE_EXAMS] ?? []).map(id => EXAM_META[id].code)
  return {
    slug: meta.path.slice(1),
    eyebrow: codes.length ? codes.join(" · ") : "Study guide",
    headline: meta.h1,
    footer: "Free practice and study resources",
  }
})

mkdirSync(resolve("public/og"), { recursive: true })
const browser = await chromium.launch({ channel: "chrome", headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
  // No network: everything the card needs is inline.
  await page.route("**/*", route => route.request().url().startsWith("data:") ? route.continue() : route.abort())
  for (const entry of [site, ...guides]) {
    await page.setContent(card(entry), { waitUntil: "load" })
    await page.evaluate(() => document.fonts.ready)
    const ok = await page.evaluate(() => document.fonts.check('64px "Commissioner"') && document.fonts.check('30px "Red Hat Mono"'))
    if (!ok) throw new Error(`Fonts did not load for ${entry.slug || "site card"}`)
    const out = entry.slug ? resolve("public/og", `${entry.slug}.png`) : resolve("public/og.png")
    writeFileSync(out, await page.screenshot({ type: "png" }))
    console.log(`wrote ${out.replace(resolve(".") + "/", "")}`)
  }
} finally {
  await browser.close()
}
