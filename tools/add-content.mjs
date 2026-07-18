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
  if (q.as !== undefined) {
    // multiple-response: 2+ unique valid indices; `a` must be one of them
    const bad =
      !Array.isArray(q.as) || q.as.length < 2 || q.as.length >= q.o.length ||
      new Set(q.as).size !== q.as.length ||
      q.as.some((i) => !Number.isInteger(i) || i < 0 || i >= q.o.length) ||
      !q.as.includes(q.a)
    if (bad) { errors.push(`bad multi-response 'as' for: ${q.x.slice(0, 60)}`); continue }
  }
  if (exam.questions.some((e) => e.x === q.x)) { errors.push(`duplicate stem: ${q.x.slice(0, 60)}`); continue }
  const entry = { id: nextId++, t: q.t, x: q.x, o: q.o, a: q.a, e: q.e, d: v.d }
  if (q.as !== undefined) entry.as = q.as
  exam.questions.push(entry)
}

// Keep these in sync with src/data/types.ts (ConnectorGlyph, HotspotIcon,
// PBQDragConnect scene union) — the source-of-truth unions.
const GLYPHS = new Set([
  "rj45","rj11","usb-a","usb-c","hdmi","vga","dp","audio","coax","lc-fiber","power","lock","shield","badge","blocker",
  "keypad","sata","sata-pwr","usb3-header","fp-leads","fan","molex","dac","strap","mat","bag","air","vacuum","bubble",
  "toner","punchdown","crimper","tester","loopback","multimeter","nettap",
])
const ICONS = new Set(["router","switch","firewall","ap","pc","server","printer","cloud","phone"])
const SCENES = new Set(["pc-rear","patch-panel","rack","desk","mobo","bench"])

for (const p of add.pbqs ?? []) {
  if (!exam.videos[p.t]) { errors.push(`unknown PBQ topic "${p.t}" (${p.title})`); continue }
  if (exam.pbqs.some((e) => e.title === p.title)) { errors.push(`duplicate PBQ title: ${p.title}`); continue }
  if (p.kind === "match" && p.items.some((i) => i.a < 0 || i.a >= p.choices.length)) {
    errors.push(`bad match index in PBQ ${p.title}`); continue
  }
  if (p.kind === "terminal") {
    let bad = false
    for (const task of p.tasks) {
      if (!task.accept?.length || !task.output) { errors.push(`terminal task missing accept/output in ${p.title}`); bad = true; break }
      for (const pat of task.accept) {
        try { new RegExp(pat, "i") } catch { errors.push(`bad regex "${pat}" in ${p.title}`); bad = true }
      }
    }
    if (bad) continue
  }
  if (p.kind === "config") {
    let bad = false
    for (const f of p.fields) {
      if (f.type === "select" && (!f.options || f.answer < 0 || f.answer >= f.options.length)) { errors.push(`bad select field ${f.id} in ${p.title}`); bad = true }
      if (f.type === "toggle" && typeof f.answer !== "boolean") { errors.push(`bad toggle field ${f.id} in ${p.title}`); bad = true }
      if (f.type === "text" && (!Array.isArray(f.answer) || !f.answer.length)) { errors.push(`bad text field ${f.id} in ${p.title}`); bad = true }
    }
    if (bad) continue
  }
  if (p.kind === "hotspot") {
    const ids = new Set(p.nodes.map((n) => n.id))
    if (p.nodes.some((n) => !ICONS.has(n.icon))) { errors.push(`unknown icon in ${p.title}`); continue }
    if (!p.targets?.length || p.targets.some((t) => !ids.has(t))) { errors.push(`bad targets in ${p.title}`); continue }
    if (p.edges.some(([a, b]) => !ids.has(a) || !ids.has(b))) { errors.push(`bad edge in ${p.title}`); continue }
  }
  if (p.kind === "dragconnect") {
    if (!SCENES.has(p.scene)) { errors.push(`unknown scene "${p.scene}" in ${p.title}`); continue }
    const zoneIds = new Set(p.zones.map((z) => z.id))
    const itemIds = new Set(p.items.map((i) => i.id))
    if (p.items.some((i) => !GLYPHS.has(i.glyph))) { errors.push(`unknown glyph in ${p.title}`); continue }
    const ans = Object.entries(p.answer)
    if (ans.length !== p.zones.length || ans.some(([z, it]) => !zoneIds.has(z) || !itemIds.has(it))) {
      errors.push(`answer map mismatch in ${p.title}`); continue
    }
  }
  exam.pbqs.push(p)
}

if (errors.length) { console.error("ERRORS:\n  " + errors.join("\n  ")); process.exit(1) }

fs.writeFileSync(dataPath, head + JSON.stringify(exam, null, 1) + "\n")
const dom = {}
exam.questions.forEach((q) => (dom[q.d] = (dom[q.d] || 0) + 1))
console.log(`${add.examId}: now ${exam.questions.length} questions ${JSON.stringify(dom)}, ${exam.pbqs.length} pbqs`)
