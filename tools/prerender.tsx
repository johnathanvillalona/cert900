// Post-build prerender: writes static HTML for the SEO guide pages and the
// QOTD feed the worker cron reads. Runs after `vite build` via tsx (npm run
// build). Uses dist/index.html as the template so asset hashes, the theme
// boot script, and the analytics beacon are always current.
import { readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import * as React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { AifGuide, APlusGuide, NPlusGuide, PbqGuide, GUIDE_META, type GuideMeta } from "../src/screens/Guides"
import { qotdPool } from "../src/lib/qotd"
import { SITE_URL } from "../src/lib/site"

const dist = resolve(import.meta.dirname, "../dist")
const template = readFileSync(resolve(dist, "index.html"), "utf8")

const noop = () => {}

function jsonLd(meta: GuideMeta): string {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: meta.faq.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }
  return `<script type="application/ld+json">${JSON.stringify(faq)}</script>`
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
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace("</head>", `${jsonLd(meta)}</head>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root"><div class="mx-auto w-full max-w-5xl flex-1 px-4 pb-16 pt-8">${body}</div></div>`,
    )
}

const pages: [GuideMeta, React.ReactElement][] = [
  [GUIDE_META.aplus, <APlusGuide onStart={noop} />],
  [GUIDE_META.nplus, <NPlusGuide onStart={noop} />],
  [GUIDE_META.pbq, <PbqGuide onStart={noop} />],
  [GUIDE_META.aif, <AifGuide onStart={noop} />],
]

for (const [meta, el] of pages) {
  const body = renderToStaticMarkup(el)
  const out = `${meta.path.slice(1)}.html` // flat file: /slug serves slug.html (no trailing-slash redirect)
  writeFileSync(resolve(dist, out), page(meta, body))
  console.log(`prerendered ${meta.path} -> dist/${out} (${(body.length / 1024).toFixed(1)} KB body)`)
}

// QOTD feed for the worker's daily social post: same pool + order as
// src/lib/qotd.ts (dayIndex % length). No answers or explanations included.
const feed = qotdPool().map(({ exam, q }) => ({
  code: exam.code,
  cert: exam.cert,
  stem: q.x,
  options: q.o,
}))
writeFileSync(resolve(dist, "qotd-feed.json"), JSON.stringify(feed))
console.log(`qotd-feed.json: ${feed.length} entries`)
