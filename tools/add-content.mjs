// Merges an additions module into a data file. Usage:
//   node tools/add-content.mjs tools/additions/<name>.mjs
// The additions module default-exports { examId, questions?, pbqs? }.
// Question shape: { t, x, o, a, e } — id and d are derived here.
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL, fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const addFile = process.argv[2]
if (!addFile) { console.error("usage: node tools/add-content.mjs <additions.mjs>"); process.exit(1) }

const { default: add } = await import(pathToFileURL(path.resolve(addFile)).href)
const dataPath = path.join(root, "src", "data", `${add.examId}.ts`)
const src = fs.readFileSync(dataPath, "utf8")
const marker = "export const exam: ExamDef = "
const head = src.slice(0, src.indexOf(marker) + marker.length)
const exam = JSON.parse(src.slice(src.indexOf(marker) + marker.length))

let nextId = Math.max(...exam.questions.map((q) => q.id)) + 1
const errors = []

for (const q of add.questions ?? []) {
  const v = exam.videos[q.t]
  if (!v) { errors.push(`unknown topic "${q.t}" for: ${q.x.slice(0, 60)}`); continue }
  if (!Array.isArray(q.o) || q.o.length < 2 || q.a < 0 || q.a >= q.o.length) {
    errors.push(`bad options/answer for: ${q.x.slice(0, 60)}`); continue
  }
  if (exam.questions.some((e) => e.x === q.x)) { errors.push(`duplicate stem: ${q.x.slice(0, 60)}`); continue }
  exam.questions.push({ id: nextId++, t: q.t, x: q.x, o: q.o, a: q.a, e: q.e, d: v.d })
}

for (const p of add.pbqs ?? []) {
  if (!exam.videos[p.t]) { errors.push(`unknown PBQ topic "${p.t}" (${p.title})`); continue }
  if (p.kind === "match" && p.items.some((i) => i.a < 0 || i.a >= p.choices.length)) {
    errors.push(`bad match index in PBQ ${p.title}`); continue
  }
  if (exam.pbqs.some((e) => e.title === p.title)) { errors.push(`duplicate PBQ title: ${p.title}`); continue }
  exam.pbqs.push(p)
}

if (errors.length) { console.error("ERRORS:\n  " + errors.join("\n  ")); process.exit(1) }

fs.writeFileSync(dataPath, head + JSON.stringify(exam, null, 1) + "\n")
const dom = {}
exam.questions.forEach((q) => (dom[q.d] = (dom[q.d] || 0) + 1))
console.log(`${add.examId}: now ${exam.questions.length} questions ${JSON.stringify(dom)}, ${exam.pbqs.length} pbqs`)
