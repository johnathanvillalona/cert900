// Post-build prerender: writes static HTML for the SEO guide pages and the
// QOTD feed the worker cron reads. Runs after `vite build` via tsx (npm run
// build). Uses dist/index.html as the template so asset hashes, the theme
// boot script, and the analytics beacon are always current.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import * as React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { AifGuide, APlusGuide, APlusCore1Guide, APlusCore2Guide, Az900Guide, ClfGuide, NPlusGuide, PbqGuide, SecplusGuide, Sc900Guide, CcnaGuide, Az104Guide, SaaGuide} from "../src/screens/Guides"
import { HubPage, ScoresPage, OrderPage, MethodPage, PortsPage, CcnaCliPage, CablesPage, CloudSvcPage } from "../src/screens/InfoPages"
import { StudyHub } from "../src/screens/StudyHub"
import { GUIDE_EXAMS, GUIDE_META, type GuideMeta } from "../src/data/guide-meta"
import { studyHubForExam } from "../src/data/study-resources"
import { EXAM_IDS } from "../src/data/exam-ids"
import { GUIDE_SAMPLES } from "../src/data/guide-samples"
import { EXAM_META } from "../src/data/meta"
import { qotdPool } from "../src/lib/qotd"
import { siteFaq, siteTagline, siteTitle } from "../src/lib/copy"
import { GUIDE_PATHS, LEGAL_PATHS, STUDY_PATHS, type GuideKey } from "../src/data/routes"
import { GROW, SITE_URL } from "../src/lib/site"
import { LEGAL_EFFECTIVE_DATE } from "../src/screens/Legal"

const dist = resolve(import.meta.dirname, "../dist")
const manifest = JSON.parse(readFileSync(resolve(dist, ".vite/manifest.json"), "utf8"))
const contentEntry = manifest["src/content-client.ts"]?.file
if (typeof contentEntry !== "string" || !/^assets\/[a-zA-Z0-9_.-]+\.js$/.test(contentEntry)) throw new Error("Missing static content entry")

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
  const hubs = EXAM_IDS.map((id) => {
    const hub = studyHubForExam(id)
    if (!hub) throw new Error(`Missing study hub: ${id}`)
    return `<li><a href="${hub.path}">${esc(hub.heading)}</a></li>`
  }).join("")
  return `<noscript><h1>Cert900 — free certification practice exams</h1><p>${esc(siteTagline())}</p><h2>Study Hubs</h2><ul>${hubs}</ul><h2>Study guides and references</h2><ul>${links}</ul></noscript>`
}

/**
 * Grow by Mediavine. Empty siteId = neither tag exists in the output, and this
 * is the ONLY place either is ever emitted. Grow is the 30-day prerequisite
 * for applying to Journey; it serves no ads itself.
 *
 * Two variants of the official manual-install snippet:
 * - `growTag` goes into the 16 guide pages, unconditional.
 * - `growHomeTag` goes into dist/index.html ONLY (never the guide template)
 *   because Grow's install verification fetches the domain root. It is gated
 *   at runtime on hostname + pathname === "/", so of all the app routes the
 *   shell serves, the script executes on the homepage alone -- a cold load of
 *   /exam/* or /progress never runs it. Their bot passes either way: an
 *   HTML scan sees the snippet; a headless browser on "/" clears the gate.
 *   (Grow does survive client-side navigation out of the landing, which is
 *   why index.css hides its UI under html.spa.)
 */
const growSnippet = GROW.siteId
  ? `!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");e.type="text/javascript";e.src="https://faves.grow.me/main.js";e.defer=!0;e.setAttribute("data-grow-faves-site-id",${JSON.stringify(GROW.siteId)});var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();`
  : ""
const growTag = growSnippet ? `<script data-grow-initializer="">${growSnippet}</script>` : ""
// The homepage tag carries data-grow-initializer TOO, and first: Grow's
// install checker greps the fetched HTML for its own marker (the 2026-08-02
// deploy without it still failed verification), and a naive scanner may
// anchor on `<script data-grow-initializer`. data-grow-home is ours, for the
// guide-template strip below.
const growHomeTag = growSnippet
  ? `<script data-grow-initializer="" data-grow-home="">location.hostname===${JSON.stringify(new URL(SITE_URL).hostname)}&&location.pathname==="/"&&${growSnippet}</script>`
  : ""

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
// on one URL are competing claims about what the page is. The gated Grow
// snippet rides along here (re-run guarded, like the font preloads).
const growHome = template.includes("data-grow-home") ? "" : growHomeTag
writeFileSync(resolve(dist, "index.html"), template.replace("</head>", `${homeJsonLd()}${growHome}</head>`))
console.log(`font preloads: ${fontPreloads ? (fontPreloads.match(/href="([^"]+)"/g) ?? []).join(" ") : "(none found)"}`)
console.log(`noscript fallback: ${Object.keys(GUIDE_META).length} guide links and ${STUDY_PATHS.length} study hubs`)

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

type StaticPageMeta = Pick<GuideMeta, "path" | "title" | "description">

/** Hubs describe a collection of existing resources, never an unseen quiz or FAQ. */
function studyJsonLd(meta: StaticPageMeta & { heading: string }): string {
  const url = `${SITE_URL}${meta.path}`
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${url}#study-hub`,
      name: meta.heading,
      description: meta.description,
      url,
      isPartOf: { "@type": "WebSite", name: "Cert900", url: `${SITE_URL}/` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: meta.heading, item: url },
      ],
    },
  ]
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`
}

function page(meta: StaticPageMeta, body: string, structuredData: string, includeGrow = false): string {
  const url = `${SITE_URL}${meta.path}`
  // Per-guide OG card if one has been rendered (public/og/<slug>.png via
  // tools/gen-og-data.mts + an OG renderer; the original scratchpad renderer
  // qa/og-guides.js was lost 2026-09-05, re-author on demand). Falls back to the
  // site-wide og.png from the template when the file is missing, so a
  // forgotten render degrades to a valid image, never a 404.
  const ogImage = existsSync(resolve(dist, "og", `${meta.path.slice(1)}.png`))
    ? `${SITE_URL}/og/${meta.path.slice(1)}.png`
    : null
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/, ogImage ? `$1${ogImage}$2` : "$&")
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/, ogImage ? `$1${ogImage}$2` : "$&")
    .replace("</head>", `${structuredData}${includeGrow ? growTag : ""}</head>`)
    // Root now carries a <noscript> fallback (see index.html); match the whole
    // block, not the old empty `<div id="root"></div>`. GuideShell brings its
    // own header/wrapper/footer, so the body goes in bare.
    .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${body}</div>`)
    // Preserve the static guides' no-SPA boundary. Strip the app module and its
    // preloads, then add only the small progressive consent/analytics entry.
    // The SPA used to blank the painted page
    // (createRoot clears #root) and re-render it ~255KB of JS later, which is
    // also what let anything loaded on a guide follow the reader into the app.
    .replace(/<script type="module"[^>]*><\/script>/, "")
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    // A small consent/analytics entry; never hydrate the static article with React.
    .replace("</body>", `<script type="module" src="/${contentEntry}"></script></body>`)
    // Guides get the unconditional growTag above; if a prerender re-run built
    // this template from an already-patched index.html, drop the homepage's
    // gated copy rather than shipping two initializers. Keyed on
    // data-grow-home (ours) so it can never strip the guides' own tag.
    .replace(/<script[^>]*data-grow-home[^>]*>[\s\S]*?<\/script>/, "")
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
  ["method", GUIDE_META.method, <MethodPage />],
  ["ports", GUIDE_META.ports, <PortsPage />],
  ["ccnacli", GUIDE_META.ccnacli, <CcnaCliPage />],
  ["cables", GUIDE_META.cables, <CablesPage />],
  ["cloudsvc", GUIDE_META.cloudsvc, <CloudSvcPage />],
]

for (const [key, meta, el] of pages) {
  const body = renderToStaticMarkup(el)
  const out = `${meta.path.slice(1)}.html` // flat file: /slug serves slug.html (no trailing-slash redirect)
  writeFileSync(resolve(dist, out), page(meta, body, jsonLd(key, meta), true))
  console.log(`prerendered ${meta.path} -> dist/${out} (${(body.length / 1024).toFixed(1)} KB body)`)
}

mkdirSync(resolve(dist, "study"), { recursive: true })
for (const examId of EXAM_IDS) {
  const meta = studyHubForExam(examId)
  if (!meta) throw new Error(`Missing study hub: ${examId}`)
  const body = renderToStaticMarkup(<StudyHub examId={examId} />)
  const out = `${meta.path.slice(1)}.html`
  // Like existing guides, these are complete semantic documents without React
  // hydration. The only client module handles optional consent and analytics.
  writeFileSync(resolve(dist, out), page(meta, body, studyJsonLd(meta)))
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
  ...STUDY_PATHS.map(
    (p) =>
      `<url><loc>${SITE_URL}${p}</loc><lastmod>${buildDate}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
  ),
  ...LEGAL_PATHS.map(
    (p) => `<url><loc>${SITE_URL}${p}</loc><lastmod>${LEGAL_EFFECTIVE_DATE}</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>`,
  ),
  `</urlset>`,
].join("\n")
writeFileSync(resolve(dist, "sitemap.xml"), sitemap + "\n")
console.log(`sitemap.xml: ${Object.keys(GUIDE_PATHS).length + STUDY_PATHS.length + LEGAL_PATHS.length + 1} urls`)

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
