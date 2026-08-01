// Post-build prerender: writes static HTML for the SEO guide pages and the
// QOTD feed the worker cron reads. Runs after `vite build` via tsx (npm run
// build). Uses dist/index.html as the template so asset hashes, the theme
// boot script, and the analytics beacon are always current.
import { readdirSync, readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import * as React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { AifGuide, APlusGuide, APlusCore1Guide, APlusCore2Guide, Az900Guide, ClfGuide, NPlusGuide, PbqGuide, SecplusGuide, Sc900Guide, CcnaGuide, Az104Guide, SaaGuide} from "../src/screens/Guides"
import { HubPage, ScoresPage, OrderPage } from "../src/screens/InfoPages"
import { GUIDE_EXAMS, GUIDE_META, type GuideMeta } from "../src/data/guide-meta"
import { GUIDE_SAMPLES } from "../src/data/guide-samples"
import { EXAM_META } from "../src/data/meta"
import { qotdPool } from "../src/lib/qotd"
import { siteFaq, siteTagline, siteTitle } from "../src/lib/copy"
import { GUIDE_PATHS, LEGAL_PATHS, type GuideKey } from "../src/data/routes"
import { SITE_URL } from "../src/lib/site"

const dist = resolve(import.meta.dirname, "../dist")

/**
 * Preload the two primary Latin faces (body/headings + mono). Fonts otherwise
 * load one hop late: their hashed names live inside the CSS bundle, not the
 * HTML, so the browser cannot discover them until the stylesheet parses. The
 * names are resolved here by globbing dist/assets (the HTML template only
 * carries the JS/CSS hashes). `crossorigin` is required — fonts fetch in CORS
 * mode, and without it the preload double-fetches. Same-origin, so the
 * worker's `font-src 'self'` CSP already allows it. The non-Latin subsets
 * (cyrillic/vietnamese/latin-ext/symbols) are deliberately not preloaded.
 */
const fontPreloads = (() => {
  const assets = readdirSync(resolve(dist, "assets"))
  return ["geist-latin-wght-normal-", "geist-mono-latin-wght-normal-"]
    .map((prefix) => assets.find((f) => f.startsWith(prefix) && f.endsWith(".woff2")))
    .filter((f): f is string => !!f)
    .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`)
    .join("")
})()

/**
 * The homepage's crawlable no-JS fallback, generated from GUIDE_META.
 *
 * Hand-maintaining this list failed exactly the way you would expect: it still
 * said "seven IT certifications" and linked 9 of the 13 guides, so four exams
 * were invisible to any crawler that does not run JS. Generating it means a new
 * guide is linked the moment it exists.
 */
function noscriptBlock(): string {
  const links = Object.values(GUIDE_META)
    .map((g) => `<li><a href="${g.path}">${esc(g.title.replace(" | Cert900", ""))}</a></li>`)
    .join("")
  return `<noscript><h1>Cert900 — free certification practice exams</h1><p>${esc(siteTagline())}</p><ul>${links}</ul></noscript>`
}

// Inject into the template so every prerendered guide gets the preloads, and
// patch dist/index.html so the SPA entry (homepage/app) gets them too.
// Idempotent: re-running prerender without a fresh build must not double-inject.
const rawTemplate = readFileSync(resolve(dist, "index.html"), "utf8")
const withFonts = rawTemplate.includes('as="font"')
  ? rawTemplate
  : rawTemplate.replace("</head>", `${fontPreloads}</head>`)
// Idempotent by construction: the regex matches the generated block too. The
// title is stamped from the registry as well, so index.html and the SPA's
// DEFAULT_TITLE cannot drift apart again (one listed Cisco, the other did not).
const template = withFonts
  .replace(/<noscript>[\s\S]*?<\/noscript>/, noscriptBlock())
  .replace(/<title>[^<]*<\/title>/, `<title>${esc(siteTitle())}</title>`)
  .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(siteTitle())}$2`)
  .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(siteTitle())}$2`)
// The homepage's FAQPage/ItemList goes ONLY into index.html, never into the
// shared template: each guide emits its own FAQPage, and two FAQPage entities
// on one URL are competing claims about what the page is.
writeFileSync(resolve(dist, "index.html"), template.replace("</head>", `${homeJsonLd()}</head>`))
console.log(`font preloads: ${fontPreloads ? (fontPreloads.match(/href="([^"]+)"/g) ?? []).join(" ") : "(none found)"}`)
console.log(`noscript fallback: ${Object.keys(GUIDE_META).length} guide links`)

/**
 * Quiz markup for the sample questions the page actually renders.
 *
 * This is the "practice problems" rich result: `Quiz` with `hasPart` Questions,
 * each carrying the accepted answer and the distractors as suggested answers.
 * Driven by the same GUIDE_EXAMS map the page renders from, so the schema can
 * never advertise questions the page does not show.
 */
function quizNode(key: GuideKey, meta: GuideMeta) {
  const examIds = GUIDE_EXAMS[key]
  if (examIds.length === 0) return null
  const questions = examIds
    .flatMap((id) => (GUIDE_SAMPLES[id] ?? []).map((q) => ({ q, exam: EXAM_META[id] })))
    .slice(0, 8)
  if (questions.length === 0) return null

  return {
    "@type": "Quiz",
    name: meta.h1,
    url: `${SITE_URL}${meta.path}`,
    about: examIds.map((id) => ({
      "@type": "Thing",
      name: `${EXAM_META[id].cert} ${EXAM_META[id].name} (${EXAM_META[id].code})`,
    })),
    educationalAlignment: examIds.map((id) => ({
      "@type": "AlignmentObject",
      alignmentType: "educationalSubject",
      targetName: `${EXAM_META[id].cert} ${EXAM_META[id].name}`,
    })),
    hasPart: questions.map(({ q }) => ({
      "@type": "Question",
      eduQuestionType: "Multiple choice",
      learningResourceType: "Practice problem",
      name: q.x,
      text: q.x,
      acceptedAnswer: { "@type": "Answer", text: q.o[q.a], explanation: q.e },
      suggestedAnswer: q.o
        .map((o, i) => ({ o, i }))
        .filter(({ i }) => i !== q.a)
        .map(({ o }) => ({ "@type": "Answer", text: o })),
    })),
  }
}

function jsonLd(key: GuideKey, meta: GuideMeta): string {
  const url = `${SITE_URL}${meta.path}`
  // FAQPage + Course + BreadcrumbList (+ Quiz where the page shows questions)
  // in one @graph. Organization/WebSite come from the static template
  // (index.html), deduped by @id.
  const quiz = quizNode(key, meta)
  const graph = [
    {
      "@type": "FAQPage",
      mainEntity: meta.faq.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "Course",
      name: meta.h1,
      description: meta.description,
      url,
      provider: { "@type": "Organization", name: "Cert900", url: `${SITE_URL}/` },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", category: "Free" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: meta.h1, item: url },
      ],
    },
  ]
  if (quiz) graph.push(quiz)
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`
}

/**
 * Homepage structured data: the FAQ the landing page renders, plus an ItemList
 * of every guide so the exam set is machine-readable from the root.
 *
 * Deliberately NO WebSite SearchAction: the site has no `?q=` search URL (search
 * is an in-app palette), and claiming a sitelinks searchbox that does not work
 * is a promise to Google we cannot keep.
 */
function homeJsonLd(): string {
  const graph = [
    {
      "@type": "FAQPage",
      mainEntity: siteFaq().map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "ItemList",
      name: "Free IT certification practice tests",
      itemListElement: Object.values(GUIDE_META).map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: g.title.replace(" | Cert900", ""),
        url: `${SITE_URL}${g.path}`,
      })),
    },
  ]
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")
}

function page(key: GuideKey, meta: GuideMeta, body: string): string {
  const url = `${SITE_URL}${meta.path}`
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace("</head>", `${jsonLd(key, meta)}</head>`)
    // Root now carries a <noscript> fallback (see index.html); match the whole
    // block, not the old empty `<div id="root"></div>`. GuideShell brings its
    // own header/wrapper/footer, so the body goes in bare.
    .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${body}</div>`)
    // THE point of the static guides: no SPA boot. Strip the module script and
    // its preloads so these pages ship zero JavaScript beyond the inline theme
    // stamp and the analytics beacon. The SPA used to blank the painted page
    // (createRoot clears #root) and re-render it ~255KB of JS later, which is
    // also what let anything loaded on a guide follow the reader into the app.
    .replace(/<script type="module"[^>]*><\/script>/, "")
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
}

const pages: [GuideKey, GuideMeta, React.ReactElement][] = [
  ["aplus", GUIDE_META.aplus, <APlusGuide />],
  ["aplus1", GUIDE_META.aplus1, <APlusCore1Guide />],
  ["aplus2", GUIDE_META.aplus2, <APlusCore2Guide />],
  ["nplus", GUIDE_META.nplus, <NPlusGuide />],
  ["pbq", GUIDE_META.pbq, <PbqGuide />],
  ["secplus", GUIDE_META.secplus, <SecplusGuide />],
  ["aif", GUIDE_META.aif, <AifGuide />],
  ["clf", GUIDE_META.clf, <ClfGuide />],
  ["az900", GUIDE_META.az900, <Az900Guide />],
  ["sc900", GUIDE_META.sc900, <Sc900Guide />],
  ["ccna", GUIDE_META.ccna, <CcnaGuide />],
  ["az104", GUIDE_META.az104, <Az104Guide />],
  ["saa", GUIDE_META.saa, <SaaGuide />],
  ["hub", GUIDE_META.hub, <HubPage />],
  ["scores", GUIDE_META.scores, <ScoresPage />],
  ["order", GUIDE_META.order, <OrderPage />],
]

for (const [key, meta, el] of pages) {
  const body = renderToStaticMarkup(el)
  const out = `${meta.path.slice(1)}.html` // flat file: /slug serves slug.html (no trailing-slash redirect)
  writeFileSync(resolve(dist, out), page(key, meta, body))
  console.log(`prerendered ${meta.path} -> dist/${out} (${(body.length / 1024).toFixed(1)} KB body)`)
}

/**
 * sitemap.xml, generated from the same route table the worker and footer use.
 *
 * Hand-maintaining it worked only because someone remembered; the four other
 * copies of this list did not survive contact with four new exams. `lastmod`
 * uses the build date for guides, which is honest here because their bodies are
 * interpolated from the question banks — a content batch really does change
 * them. Legal pages keep a fixed date so they do not claim daily churn.
 */
const buildDate = new Date().toISOString().slice(0, 10)
const sitemap = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  `<url><loc>${SITE_URL}/</loc><lastmod>${buildDate}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`,
  ...Object.values(GUIDE_PATHS).map(
    (p) =>
      `<url><loc>${SITE_URL}${p}</loc><lastmod>${buildDate}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`,
  ),
  ...LEGAL_PATHS.map(
    (p) => `<url><loc>${SITE_URL}${p}</loc><lastmod>2026-07-21</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>`,
  ),
  `</urlset>`,
].join("\n")
writeFileSync(resolve(dist, "sitemap.xml"), sitemap + "\n")
console.log(`sitemap.xml: ${Object.keys(GUIDE_PATHS).length + LEGAL_PATHS.length + 1} urls`)

// QOTD feed for the worker's daily social post. No answers or explanations.
//
// Multiple-choice only: a match/order PBQ has no stem-plus-lettered-options
// shape to post, so those pool days are skipped rather than mangled. That means
// the feed is SHORTER than the pool, so the worker's `dayIndex % feed.length`
// lands on a different item than the site's hero — deliberate, and the reason
// `vendor` travels with each entry: the caption is built from the exam, not
// assumed to be CompTIA.
const feed = qotdPool()
  .filter((p) => p.kind === "mc")
  .map((p) => ({
    code: p.code,
    cert: p.cert,
    vendor: p.vendor,
    stem: p.q.x,
    options: p.q.o,
  }))
writeFileSync(resolve(dist, "qotd-feed.json"), JSON.stringify(feed))
console.log(`qotd-feed.json: ${feed.length} multiple-choice entries (of ${qotdPool().length} in the pool)`)
