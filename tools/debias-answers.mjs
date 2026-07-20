// Removes positional bias from stored answer keys. Usage:
//   node tools/debias-answers.mjs <examId> <minId> [--apply]
//
// Authors overwhelmingly write the correct option first, and it shows: one
// batch landed 127 of 127 single-answer questions on index 0. Every runtime
// path shuffles (web optOrder, mobile, the landing question of the day), so
// this is not a live leak today -- but it means the stored data carries the
// answer positionally, and any future consumer that forgets to shuffle would
// expose the whole bank. The social cron already renders options in stored
// order.
//
// Permutes each question's options and remaps `a`/`as` to match. Deterministic
// (seeded by question id) so re-runs are stable and diffs stay reviewable.
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const [examId, minIdArg, ...flags] = process.argv.slice(2)
const apply = flags.includes("--apply")
if (!examId || !minIdArg) {
  console.error("usage: node tools/debias-answers.mjs <examId> <minId> [--apply]")
  process.exit(1)
}
const minId = Number(minIdArg)

const dataPath = path.join(root, "src", "data", `${examId}.ts`)
const src = fs.readFileSync(dataPath, "utf8")
const marker = "export const exam: ExamDef = "
const head = src.slice(0, src.indexOf(marker) + marker.length)
const exam = JSON.parse(src.slice(src.indexOf(marker) + marker.length))

// mulberry32 — small deterministic PRNG, seeded per question.
function rng(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Some option sets carry meaning in their order and must not be permuted:
 * ascending figures, percentages, durations, sizes. Reordering those makes a
 * question read as sloppy even though grading still works.
 */
function orderSensitive(o) {
  const numeric = o.every((s) => /^[^a-z]*\d[\d.,]*\s*(%|gb|tb|mb|kb|ms|s|m|h|hours?|days?|years?|usd)?[^a-z]*$/i.test(s.trim()))
  if (!numeric) return false
  const nums = o.map((s) => parseFloat(s.replace(/[^\d.]/g, "")))
  if (nums.some(Number.isNaN)) return false
  const asc = nums.every((n, i) => i === 0 || n >= nums[i - 1])
  const desc = nums.every((n, i) => i === 0 || n <= nums[i - 1])
  return asc || desc
}

let changed = 0
let skipped = 0
const before = [0, 0, 0, 0]
const after = [0, 0, 0, 0]

for (const q of exam.questions) {
  if (q.id < minId) continue
  if (!q.as) before[q.a]++
  if (orderSensitive(q.o)) { skipped++; if (!q.as) after[q.a]++; continue }

  const idx = q.o.map((_, i) => i)
  const r = rng(q.id * 2654435761)
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1))
    ;[idx[i], idx[j]] = [idx[j], idx[i]]
  }
  // idx[newPos] = oldPos, so invert it to find where each old index landed.
  const pos = []
  idx.forEach((oldPos, newPos) => (pos[oldPos] = newPos))

  q.o = idx.map((oldPos) => q.o[oldPos])
  if (q.as) {
    q.as = q.as.map((i) => pos[i]).sort((x, y) => x - y)
    q.a = q.as[0]
  } else {
    q.a = pos[q.a]
    after[q.a]++
  }
  changed++
}

console.log(`${examId}: ${changed} permuted, ${skipped} skipped as order-sensitive`)
console.log(`  single-answer key position before: ${before.join("/")}`)
console.log(`  single-answer key position after:  ${after.join("/")}`)

if (apply) {
  fs.writeFileSync(dataPath, head + JSON.stringify(exam, null, 1) + "\n")
  console.log("  written")
} else {
  console.log("  (dry run -- pass --apply to write)")
}
