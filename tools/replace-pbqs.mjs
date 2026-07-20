// Replaces already-merged PBQs with corrected versions, matched by title.
//   node tools/replace-pbqs.mjs tools/additions/<name>.mjs
//
// add-content.mjs only ever appends, so a defect found after a merge -- an
// accept-regex that rejects a correct command, an order whose steps turned out
// interchangeable -- had no way back except hand-editing the bank. This swaps
// in place by title and refuses to touch anything it cannot match, so it can
// never silently duplicate an item.
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL, fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const addFile = process.argv[2]
if (!addFile) { console.error("usage: node tools/replace-pbqs.mjs <additions.mjs>"); process.exit(1) }

const mod = await import(pathToFileURL(path.resolve(addFile)).href)
// Accept either a default export or named per-exam exports (a module may carry
// more than one exam, as the AWS/Azure interactive batch does).
const batches = [mod.default, ...Object.values(mod)].filter(
  (b, i, a) => b?.examId && b.pbqs && a.findIndex((x) => x?.examId === b.examId) === i,
)

let totalReplaced = 0
for (const batch of batches) {
  const dataPath = path.join(root, "src", "data", `${batch.examId}.ts`)
  const src = fs.readFileSync(dataPath, "utf8")
  const marker = "export const exam: ExamDef = "
  const head = src.slice(0, src.indexOf(marker) + marker.length)
  const exam = JSON.parse(src.slice(src.indexOf(marker) + marker.length))

  const missing = []
  let replaced = 0
  for (const p of batch.pbqs) {
    const i = exam.pbqs.findIndex((e) => e.title === p.title)
    if (i === -1) { missing.push(p.title); continue }
    exam.pbqs[i] = p
    replaced++
  }
  if (missing.length) {
    console.error(`ERRORS in ${batch.examId}: no PBQ titled:\n  ` + missing.join("\n  "))
    process.exit(1)
  }
  fs.writeFileSync(dataPath, head + JSON.stringify(exam, null, 1) + "\n")
  console.log(`${batch.examId}: replaced ${replaced} of ${exam.pbqs.length} pbqs`)
  totalReplaced += replaced
}
console.log(`TOTAL replaced: ${totalReplaced}`)
