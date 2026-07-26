// Content lint: flags answer "tells" and duplicates across every exam bank.
// Rules:
//   long     - keyed option > 1.6x the mean distractor length AND > mean+25 chars
//   acronym  - parenthetical expansion present on some options but not all
//   dupe     - two stems share >62% of their significant keywords both ways
//   config   - config PBQ opens with fewer than 2 fields needing work
// Usage:
//   node tools/content-lint.mjs            summary table
//   node tools/content-lint.mjs --json F   also write full flag detail to F
import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const EXAM_IDS = ["220-1201", "220-1202", "n10-009", "sy0-701", "ccna-200-301", "aif-c01", "clf-c02", "saa-c03", "az-900", "sc-900", "az-104"]
const MARKER = "export const exam: ExamDef = "

export function loadExam(id) {
  const src = readFileSync(path.join(ROOT, "src", "data", `${id}.ts`), "utf8")
  return JSON.parse(src.slice(src.indexOf(MARKER) + MARKER.length))
}

const hasParen = (s) => /\([^)]{3,}\)/.test(s)
const keywords = (s) =>
  s.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(/\s+/).filter((w) => w.length > 3)

export function lintExam(exam) {
  const flags = []
  for (const q of exam.questions) {
    const keys = q.as ?? [q.a]
    const distractors = q.o.filter((_, i) => !keys.includes(i))
    const mean = distractors.reduce((a, o) => a + o.length, 0) / distractors.length
    for (const k of keys) {
      if (q.o[k].length > mean * 1.6 && q.o[k].length > mean + 25) {
        flags.push({ id: q.id, rule: "long", detail: `key ${q.o[k].length} chars vs mean distractor ${Math.round(mean)}` })
        break
      }
    }
    const withParen = q.o.filter(hasParen).length
    if (withParen > 0 && withParen < q.o.length) {
      flags.push({ id: q.id, rule: "acronym", detail: `${withParen}/${q.o.length} options carry a parenthetical` })
    }
  }
  const sets = exam.questions.map((q) => new Set(keywords(q.x)))
  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      const inter = [...sets[i]].filter((w) => sets[j].has(w)).length
      if (inter / Math.max(sets[i].size, 1) > 0.62 && inter / Math.max(sets[j].size, 1) > 0.62) {
        flags.push({ id: exam.questions[i].id, rule: "dupe", detail: `overlaps q${exam.questions[j].id}`, other: exam.questions[j].id })
      }
    }
  }
  for (const p of exam.pbqs) {
    if (p.kind !== "config") continue
    const needWork = p.fields.filter((f) => (f.type === "toggle" ? (f.initial ?? false) !== f.answer : true)).length
    if (needWork < 2) flags.push({ id: p.title, rule: "config", detail: `only ${needWork} fields need work` })
  }
  return flags
}

const jsonIdx = process.argv.indexOf("--json")
const out = {}
let total = 0
for (const id of EXAM_IDS) {
  const flags = lintExam(loadExam(id))
  out[id] = flags
  total += flags.length
  const by = (r) => flags.filter((f) => f.rule === r).length
  console.log(
    id.padEnd(9),
    `long:${String(by("long")).padEnd(4)} acronym:${String(by("acronym")).padEnd(4)} dupe:${String(by("dupe")).padEnd(3)} config:${by("config")}`,
  )
}
console.log(`TOTAL flags: ${total}`)
if (jsonIdx !== -1) {
  const file = process.argv[jsonIdx + 1] ?? "content-lint.json"
  writeFileSync(file, JSON.stringify(out, null, 1))
  console.log(`wrote ${file}`)
}
process.exitCode = 0
