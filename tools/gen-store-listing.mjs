// Regenerates the app-store listing copy from the exam registry.
//
// Why generated: the committed listing advertised "seven IT certifications" and
// "2,000+ questions" while the app shipped eleven exams and 3,804 items, with
// Cisco absent from the title, subtitle, keywords, tags, description, and
// screenshot captions. Every count and exam list here is derived, and every
// store field is length-checked against its real limit, so the listing cannot
// drift from the product or overflow a field again.
//
// Run after adding an exam: node tools/gen-store-listing.mjs
// Writes docs/store-listing-copy.md and the copy fields of
// mobile/store.config.json. Push it to Play with tools/play-listing.mjs.
import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const MARKER = "export const exam: ExamDef = "
const IDS = ["220-1201", "220-1202", "n10-009", "sy0-701", "ccna-200-301", "aif-c01", "clf-c02", "saa-c03", "az-900", "sc-900", "az-104"]

const exams = IDS.map((id) => {
  const src = readFileSync(path.join(ROOT, "src", "data", `${id}.ts`), "utf8")
  const e = JSON.parse(src.slice(src.indexOf(MARKER) + MARKER.length))
  return {
    id,
    vendor: e.vendor,
    label: `${e.cert} ${e.name} (${e.code})`,
    code: e.code,
    q: e.questions.length,
    pbq: e.pbqs.length,
  }
})

const totalQ = exams.reduce((a, e) => a + e.q, 0)
const totalPbq = exams.reduce((a, e) => a + e.pbq, 0)
const N = exams.length
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"]
const word = (n) => WORDS[n] ?? String(n)
/** Thousands separator, so "3,666" reads as a number in prose. */
const num = (n) => n.toLocaleString("en-US")

const bullets = exams.map((e) => `- ${e.label}`).join("\n")

// ---- fields, with the store's real limits -------------------------------
const TITLE = "cert900: IT Cert Practice"
const SUBTITLE = "CompTIA, Cisco, AWS, Azure"
const PROMO = `${num(totalQ)} original questions across ${word(N)} certifications: CompTIA, Cisco, AWS, and Microsoft. Adaptive drills, timed exams on the real scoring, and full offline practice.`
const KEYWORDS = "comptia,security+,network+,a+,ccna,aws,azure,az-104,sc-900,saa-c03,exam prep,practice test"
const SHORT_DESC = `${num(totalQ)} free practice questions for CompTIA, Cisco, AWS, and Azure.`

const BODY = `Free practice for ${word(N)} IT certifications across CompTIA, Cisco, AWS, and Microsoft, with no signup and no paywall.

cert900 gives you timed full exams and short adaptive drills you can run anywhere, even offline, and every question links to a free training video so you always know where to review.

${word(N).toUpperCase()} EXAMS, ONE APP
${bullets}

WHAT YOU GET
- ${num(totalQ)} original practice questions, written for the current exams, never copied.
- Timed full-exam mode scored on each exam's real scale and cut line.
- ${num(totalPbq)} performance-based and interactive questions in each vendor's own format: CompTIA and Cisco simulations, AWS and Azure ordering, matching, and build-list items.
- A spaced-repetition review queue that brings back what you got wrong.
- A readiness estimate and per-domain accuracy.
- A free training video link on every question.
- Full offline practice. Progress is saved on the device.
- Optional sign-in to sync across devices and with cert900.com. Never required.

cert900 is independent and is not affiliated with CompTIA, Cisco, Amazon Web Services, or Microsoft. Start in seconds. No account, no cost, no catch.`

const APPLE_BODY = `cert900 is a free practice trainer for ${word(N)} IT certifications, spanning CompTIA, Cisco, AWS, and Microsoft. Practice anywhere, even offline, with every question written from the current exam objectives and linked to a free training video so you always know where to review.

${word(N).toUpperCase()} EXAMS, ONE APP
${bullets}

WHAT YOU GET
- ${num(totalQ)} original practice questions, written for the current exam versions, never copied from real exams.
- Timed full-exam mode that scores on each exam's real scale and cut line, plus short adaptive drills for daily practice.
- ${num(totalPbq)} performance-based and interactive questions in each vendor's own format: CompTIA and Cisco simulations, and AWS and Azure ordering, matching, and build-list items.
- A review queue with spaced repetition that brings back exactly the questions you got wrong.
- A readiness estimate and per-domain accuracy so you can see where you stand.
- A free training video link on every question: Professor Messer for CompTIA, Jeremy's IT Lab for CCNA, and curated video for AWS and Azure.
- Everything works offline. Your progress is saved on the device.
- Optional sign-in to sync progress across devices and with cert900.com. Sign-in is never required.
- No signup wall and no paywall. The full question bank is free.

WHO IT IS FOR
Anyone studying for a CompTIA, Cisco, AWS, or Microsoft certification who wants honest, no-cost practice that mirrors the real scoring and points straight to trusted video explanations.

cert900 is an independent study tool and is not affiliated with, endorsed by, or sponsored by CompTIA, Cisco Systems, Amazon Web Services, or Microsoft. All trademarks belong to their respective owners.`

const CAPTIONS = [
  `${word(N)} certs: CompTIA, Cisco, AWS, Azure`,
  "Timed full exams, scored on the real scale",
  "Adaptive drills target what you miss",
  "A review queue brings back your misses",
  "Every question links to a free video",
]

// ---- length gates --------------------------------------------------------
// Overflowing a store field is rejected at submission, so fail the build here.
const LIMITS = [
  ["Apple name", TITLE, 30],
  ["Apple subtitle", SUBTITLE, 30],
  ["Apple promotional text", PROMO, 170],
  ["Apple keywords", KEYWORDS, 100],
  ["Apple description", APPLE_BODY, 4000],
  ["Play title", TITLE, 30],
  ["Play short description", SHORT_DESC, 80],
  ["Play full description", BODY, 4000],
]
let bad = 0
for (const [name, value, limit] of LIMITS) {
  const over = value.length > limit
  if (over) bad++
  console.log(`${over ? "OVER " : "ok   "} ${name.padEnd(24)} ${String(value.length).padStart(4)}/${limit}`)
}
if (bad) {
  console.error(`\n${bad} field(s) over the store limit. Shorten the copy in tools/gen-store-listing.mjs.`)
  process.exit(1)
}

// ---- write docs/store-listing-copy.md ------------------------------------
const doc = `# Store listing copy

GENERATED by tools/gen-store-listing.mjs — re-run it after adding an exam, then
push to Google Play with tools/play-listing.mjs. Do not hand-edit the counts or
the exam list: this file went stale at "seven certifications / 2,000+ questions"
while the app shipped ${N} exams and ${num(totalQ + totalPbq)} items.

Character counts are exact (spaces included) and checked against each field's
limit by the generator, which fails rather than emitting an over-length field.

## Copy rules

Never name a feature as missing, "coming soon", or "on the roadmap", and never
point a reader at the website for something the app cannot do. Apple reads the
first as a beta submission (Guideline 2.1) and the second as an app that should
have been a web page (Guideline 4.2). If a capability is not ready, say nothing
about it.

Trademarks (CompTIA, Cisco, AWS, Azure) are kept out of the app **name** and used
only descriptively in the subtitle, keywords, and body, where nominative use is
standard and both stores are permissive. cert900 is independent and unaffiliated.

## Apple App Store

| Field | Value | Count |
|---|---|---|
| **Name** (max 30) | \`${TITLE}\` | ${TITLE.length} |
| **Subtitle** (max 30) | \`${SUBTITLE}\` | ${SUBTITLE.length} |
| **Promotional text** (max 170) | \`${PROMO}\` | ${PROMO.length} |
| **Keywords** (max 100) | \`${KEYWORDS}\` | ${KEYWORDS.length} |
| **Support URL** | \`https://cert900.com\` | |
| **Marketing URL** | \`https://cert900.com\` | |
| **Primary category** | Education | |
| **Secondary category** | Reference | |

### Description (${APPLE_BODY.length} characters)

\`\`\`
${APPLE_BODY}
\`\`\`

## Google Play

| Field | Value | Count |
|---|---|---|
| **App title** (max 30) | \`${TITLE}\` | ${TITLE.length} |
| **Short description** (max 80) | \`${SHORT_DESC}\` | ${SHORT_DESC.length} |
| **Category** | Education | |
| **Tags** (max 5) | CompTIA, Cisco, AWS, Azure, exam prep | |

### Full description (${BODY.length} characters)

\`\`\`
${BODY}
\`\`\`

## Screenshot captions

${CAPTIONS.map((c, i) => `${i + 1}. ${c}`).join("\n")}
`
writeFileSync(path.join(ROOT, "docs", "store-listing-copy.md"), doc)

// ---- update mobile/store.config.json (Apple metadata) --------------------
const cfgPath = path.join(ROOT, "mobile", "store.config.json")
const cfg = JSON.parse(readFileSync(cfgPath, "utf8"))
const info = cfg.apple.info["en-US"]
info.title = TITLE
info.subtitle = SUBTITLE
info.promoText = PROMO
info.description = APPLE_BODY
info.keywords = KEYWORDS.split(",")
writeFileSync(cfgPath, JSON.stringify(cfg, null, 2) + "\n")

// ---- machine-readable payload for the Play API ---------------------------
writeFileSync(
  path.join(ROOT, "tools", "store-listing.json"),
  JSON.stringify({ title: TITLE, shortDescription: SHORT_DESC, fullDescription: BODY }, null, 2) + "\n",
)

console.log(`\nwrote docs/store-listing-copy.md, mobile/store.config.json, tools/store-listing.json`)
console.log(`${N} exams · ${num(totalQ)} questions · ${num(totalPbq)} interactive`)
