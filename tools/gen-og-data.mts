// Emits the per-guide data the OG-image renderer consumes (the original
// scratchpad renderer qa/og-guides.js was lost 2026-09-05; re-author one that
// matches public/og/*.png). Derived from GUIDE_META/EXAM_META so the cards can never
// drift from the live registry: rerun this, then the renderer, after adding
// an exam. Run from repo root: npx tsx tools/gen-og-data.mts <outFile>
import { writeFileSync } from "node:fs"
import { GUIDE_META, GUIDE_EXAMS } from "../src/data/guide-meta"
import { EXAM_META } from "../src/data/meta"

const out = process.argv[2]
if (!out) throw new Error("usage: npx tsx tools/gen-og-data.mts <outFile>")

const entries = Object.entries(GUIDE_META).map(([key, m]) => {
  const ids = GUIDE_EXAMS[key as keyof typeof GUIDE_EXAMS] ?? []
  const metas = ids.map((id) => EXAM_META[id])
  const q = metas.reduce((a, e) => a + e.questionCount, 0)
  const pbq = metas.reduce((a, e) => a + e.pbqCount, 0)
  return {
    slug: m.path.slice(1),
    eyebrow: metas.length ? metas.map((e) => e.code).join("  ·  ") : "cert900 guides",
    h1: m.h1,
    stats: metas.length
      ? `${q} free questions${pbq ? `  ·  ${pbq} PBQs & labs` : ""}  ·  no sign-up`
      : "free practice exams  ·  11 certifications  ·  no sign-up",
  }
})

writeFileSync(out, JSON.stringify(entries, null, 1))
console.log(`wrote ${entries.length} og entries -> ${out}`)
