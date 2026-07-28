// Post-build prerender: writes static HTML for the SEO guide pages and the
// QOTD feed the worker cron reads. Runs after `vite build` via tsx (npm run
// build). Uses dist/index.html as the template so asset hashes, the theme
// boot script, and the analytics beacon are always current.
import { readdirSync, readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import * as React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { AifGuide, APlusGuide, APlusCore1Guide, APlusCore2Guide, Az900Guide, ClfGuide, NPlusGuide, PbqGuide, SecplusGuide, Sc900Guide, CcnaGuide, Az104Guide, SaaGuide, GUIDE_META, type GuideMeta } from "../src/screens/Guides"
import { qotdPool } from "../src/lib/qotd"
import { siteTagline, siteTitle } from "../src/lib/copy"
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
writeFileSync(resolve(dist, "index.html"), template)
console.log(`font preloads: ${fontPreloads ? (fontPreloads.match(/href="([^"]+)"/g) ?? []).join(" ") : "(none found)"}`)
console.log(`noscript fallback: ${Object.keys(GUIDE_META).length} guide links`)

const noop = () => {}

function jsonLd(meta: GuideMeta): string {
  const url = `${SITE_URL}${meta.path}`
  // FAQPage + Course + BreadcrumbList in one @graph. Organization/WebSite come
  // from the static template (index.html), deduped by @id.
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
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")
}

function page(meta: GuideMeta, body: string): string {
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
    .replace("</head>", `${jsonLd(meta)}</head>`)
    // Root now carries a <noscript> fallback (see index.html); match the whole
    // block, not the old empty `<div id="root"></div>`.
    .replace(
      /<div id="root">[\s\S]*?<\/div>/,
      `<div id="root"><div class="mx-auto w-full max-w-5xl flex-1 px-4 pb-16 pt-8">${body}</div></div>`,
    )
}

const pages: [GuideMeta, React.ReactElement][] = [
  [GUIDE_META.aplus, <APlusGuide onStart={noop} />],
  [GUIDE_META.aplus1, <APlusCore1Guide onStart={noop} />],
  [GUIDE_META.aplus2, <APlusCore2Guide onStart={noop} />],
  [GUIDE_META.nplus, <NPlusGuide onStart={noop} />],
  [GUIDE_META.pbq, <PbqGuide onStart={noop} />],
  [GUIDE_META.secplus, <SecplusGuide onStart={noop} />],
  [GUIDE_META.aif, <AifGuide onStart={noop} />],
  [GUIDE_META.clf, <ClfGuide onStart={noop} />],
  [GUIDE_META.az900, <Az900Guide onStart={noop} />],
  [GUIDE_META.sc900, <Sc900Guide onStart={noop} />],
  [GUIDE_META.ccna, <CcnaGuide onStart={noop} />],
  [GUIDE_META.az104, <Az104Guide onStart={noop} />],
  [GUIDE_META.saa, <SaaGuide onStart={noop} />],
]

for (const [meta, el] of pages) {
  const body = renderToStaticMarkup(el)
  const out = `${meta.path.slice(1)}.html` // flat file: /slug serves slug.html (no trailing-slash redirect)
  writeFileSync(resolve(dist, out), page(meta, body))
  console.log(`prerendered ${meta.path} -> dist/${out} (${(body.length / 1024).toFixed(1)} KB body)`)
}

// QOTD feed for the worker's daily social post: same pool + order as
// src/lib/qotd.ts (dayIndex % length). No answers or explanations included.
const feed = qotdPool().map((p) => ({
  code: p.code,
  cert: p.cert,
  stem: p.q.x,
  options: p.q.o,
}))
writeFileSync(resolve(dist, "qotd-feed.json"), JSON.stringify(feed))
console.log(`qotd-feed.json: ${feed.length} entries`)
