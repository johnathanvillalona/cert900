// Merges question-fix batches (JSON) into the exam data files by question id.
// Batch shape: { examId, fixes: [{ id, x?, o?, a?, as?, e? }] } — only the
// provided fields change. Validates option counts, answer indexes, and topic
// keys after applying. Used by the content-quality sweep; content-lint.mjs
// proves the result.
// Usage: node tools/apply-fixes.mjs <batch.json> [more.json ...]
import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const MARKER = "export const exam: ExamDef = "

const files = process.argv.slice(2)
if (files.length === 0) {
  console.error("usage: node tools/apply-fixes.mjs <batch.json> [...]")
  process.exit(1)
}

const byExam = new Map()
for (const f of files) {
  const batch = JSON.parse(readFileSync(f, "utf8"))
  if (!batch.examId || !Array.isArray(batch.fixes)) {
    console.error(`SKIP ${f}: not a batch (need examId + fixes[])`)
    continue
  }
  const list = byExam.get(batch.examId) ?? []
  list.push(...batch.fixes.map((fx) => ({ ...fx, src: path.basename(f) })))
  byExam.set(batch.examId, list)
}

let applied = 0
let failed = 0
for (const [examId, fixes] of byExam) {
  const file = path.join(ROOT, "src", "data", `${examId}.ts`)
  const src = readFileSync(file, "utf8")
  const head = src.slice(0, src.indexOf(MARKER) + MARKER.length)
  const exam = JSON.parse(src.slice(src.indexOf(MARKER) + MARKER.length))
  const byId = new Map(exam.questions.map((q) => [q.id, q]))

  for (const fx of fixes) {
    const q = byId.get(fx.id)
    if (!q) {
      console.error(`FAIL ${examId} q${fx.id} (${fx.src}): no such id`)
      failed++
      continue
    }
    const next = { ...q }
    for (const k of ["x", "o", "a", "as", "e", "t", "d"]) if (fx[k] !== undefined) next[k] = fx[k]
    const bad =
      !Array.isArray(next.o) ||
      (next.as ? next.o.length !== 5 : next.o.length !== 4) ||
      next.a < 0 ||
      next.a >= next.o.length ||
      (next.as && (!next.as.includes(next.a) || next.as.some((i) => i < 0 || i >= next.o.length))) ||
      new Set(next.o.map((s) => s.trim().toLowerCase())).size !== next.o.length ||
      !exam.videos[next.t] ||
      typeof next.e !== "string" ||
      next.e.length === 0
    if (bad) {
      console.error(`FAIL ${examId} q${fx.id} (${fx.src}): validation`)
      failed++
      continue
    }
    Object.assign(q, next)
    applied++
  }

  writeFileSync(file, head + JSON.stringify(exam, null, 1) + "\n")
  console.log(`${examId}: applied ${fixes.length - fixes.filter((f) => !byId.has(f.id)).length} fixes`)
}
console.log(`TOTAL applied: ${applied}, failed: ${failed}`)
process.exit(failed > 0 ? 1 : 0)
