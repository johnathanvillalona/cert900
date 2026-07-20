// Validates authored question JSON against every content rule, then emits a
// tools/additions module ready for add-content.mjs. Usage:
//   node tools/prep-batch.mjs <examId> <authored-dir> [outFile]
//
// add-content.mjs deliberately checks only structural things (valid topic,
// answer in range, exact-duplicate stem). The rules that actually fail the
// build -- the anti-test-wiseness tells and the near-duplicate gate in
// data.test.ts -- are checked here instead, BEFORE anything touches a bank,
// because add-content is all-or-nothing and a bank rewrite is annoying to undo.
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const [examId, dir, outArg] = process.argv.slice(2)
if (!examId || !dir) {
  console.error("usage: node tools/prep-batch.mjs <examId> <authored-dir> [outFile]")
  process.exit(1)
}

const src = fs.readFileSync(path.join(root, "src", "data", `${examId}.ts`), "utf8")
const marker = "export const exam: ExamDef = "
const exam = JSON.parse(src.slice(src.indexOf(marker) + marker.length))

// Same normalisation as data.test.ts / content-lint.mjs.
const words = (s) =>
  new Set(s.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(/\s+/).filter((w) => w.length > 3))
const overlaps = (a, b) => {
  const inter = [...a].filter((w) => b.has(w)).length
  return inter / Math.max(a.size, 1) > 0.62 && inter / Math.max(b.size, 1) > 0.62
}

const incoming = []
for (const f of fs.readdirSync(dir).filter((f) => f.startsWith(examId) && f.endsWith(".json"))) {
  const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"))
  if (!Array.isArray(arr)) { console.error(`${f}: not a JSON array`); process.exit(1) }
  for (const q of arr) incoming.push({ ...q, _src: f })
}
console.log(`loaded ${incoming.length} authored questions for ${examId}`)

const errors = []
const err = (q, msg) => errors.push(`[${q._src}] ${msg}\n     stem: ${q.x?.slice(0, 90) ?? "(none)"}`)

// Existing corpus, for the duplicate checks.
const existing = exam.questions.map((q) => ({ x: q.x, w: words(q.x) }))
const seenStem = new Set(exam.questions.map((q) => q.x.trim().toLowerCase()))
const kept = []

for (const q of incoming) {
  if (!q.t || !exam.videos[q.t]) { err(q, `unknown topic "${q.t}"`); continue }
  if (typeof q.x !== "string" || q.x.length < 20) { err(q, "stem missing or too short"); continue }
  if (typeof q.e !== "string" || q.e.length < 20) { err(q, "explanation missing or too short"); continue }
  if (!Array.isArray(q.o)) { err(q, "options missing"); continue }

  // House convention, enforced by apply-fixes.mjs and universal in the corpus.
  const wantOpts = q.as ? 5 : 4
  if (q.o.length !== wantOpts) { err(q, `${q.o.length} options, expected ${wantOpts}`); continue }
  if (!Number.isInteger(q.a) || q.a < 0 || q.a >= q.o.length) { err(q, `bad answer index ${q.a}`); continue }
  if (q.as) {
    const bad = !Array.isArray(q.as) || q.as.length < 2 || q.as.length >= q.o.length ||
      new Set(q.as).size !== q.as.length ||
      q.as.some((i) => !Number.isInteger(i) || i < 0 || i >= q.o.length) || !q.as.includes(q.a)
    if (bad) { err(q, `bad multiple-response 'as' ${JSON.stringify(q.as)}`); continue }
  }
  if (new Set(q.o.map((s) => s.trim().toLowerCase())).size !== q.o.length) {
    err(q, "duplicate option text"); continue
  }

  // Anti-tell: the keyed option must not be conspicuously longest.
  const keys = q.as ?? [q.a]
  const dis = q.o.filter((_, i) => !keys.includes(i)).map((o) => o.length)
  const mean = dis.reduce((a, b) => a + b, 0) / dis.length
  const longKey = keys.find((k) => q.o[k].length > mean * 1.6 && q.o[k].length > mean + 25)
  if (longKey !== undefined) {
    err(q, `long-answer tell: key is ${q.o[longKey].length} chars vs mean distractor ${Math.round(mean)}`)
    continue
  }

  // Anti-tell: parenthetical on some options but not all.
  const withParen = q.o.filter((o) => /\([^)]{3,}\)/.test(o)).length
  if (withParen !== 0 && withParen !== q.o.length) { err(q, "lone parenthetical in options"); continue }

  const norm = q.x.trim().toLowerCase()
  if (seenStem.has(norm)) { err(q, "exact duplicate stem"); continue }

  const w = words(q.x)
  const dupExisting = existing.find((e) => overlaps(w, e.w))
  if (dupExisting) { err(q, `near-duplicate of existing: ${dupExisting.x.slice(0, 80)}`); continue }
  const dupBatch = kept.find((k) => overlaps(w, k.w))
  if (dupBatch) { err(q, `near-duplicate of batch item: ${dupBatch.x.slice(0, 80)}`); continue }

  seenStem.add(norm)
  kept.push({ ...q, w })
}

const byTopic = {}
const byDomain = {}
for (const q of kept) {
  byTopic[q.t] = (byTopic[q.t] || 0) + 1
  const d = exam.videos[q.t].d
  byDomain[d] = (byDomain[d] || 0) + 1
}

console.log(`\nPASS ${kept.length}   REJECT ${errors.length}`)
console.log("by domain:", JSON.stringify(byDomain))
const hot = Object.entries(byTopic).filter(([, n]) => n > 4).sort((a, b) => b[1] - a[1])
if (hot.length) console.log("topics over 4 new questions:", hot.map(([t, n]) => `${t}=${n}`).join(" "))

if (errors.length) {
  console.log(`\n--- ${errors.length} rejected ---`)
  for (const e of errors) console.log("  " + e)
}

const out = outArg ?? path.join(root, "tools", "additions", `${examId}-batch2.mjs`)
const clean = kept.map(({ _src, w, ...q }) => q)
fs.writeFileSync(
  out,
  `// ${examId} batch 2 (authored, rule-checked by tools/prep-batch.mjs).\n` +
    `export default {\n  examId: ${JSON.stringify(examId)},\n  questions: ${JSON.stringify(clean, null, 2)},\n}\n`,
)
console.log(`\nwrote ${out} with ${clean.length} questions`)
