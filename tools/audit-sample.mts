// Stratified audit sampler (2026-08 bank audit): ~25% of every exam's MC
// bank, proportional per domain, seeded deterministic, force-including every
// question that appears on a public surface (QOTD pool or the guide sample
// blocks). Emits chunk files (~65 questions each) that audit finder agents
// read directly, so re-runs produce byte-identical chunks.
// Run from repo root: npx tsx tools/audit-sample.mts <outDir>
import { mkdirSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import { EXAMS } from "../src/data/index"
import { QOTD_POOL } from "../src/data/qotd-pool"
import { GUIDE_SAMPLES } from "../src/data/guide-samples"

const outDir = process.argv[2]
if (!outDir) throw new Error("usage: npx tsx tools/audit-sample.mts <outDir>")
mkdirSync(outDir, { recursive: true })

// mulberry32, the same generator family debias-answers uses. Seeded per exam
// so every run samples identically.
function rng(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const hash = (s: string) => [...s].reduce((a, c) => (Math.imul(a, 31) + c.charCodeAt(0)) | 0, 7)

const RATE = 0.25
const CHUNK = 65

// Public-surface ids per exam (always audited, regardless of the draw).
const publicIds = new Map<string, Set<number>>()
const codeToId = new Map(Object.values(EXAMS).map((e) => [e.code, e.id]))
for (const entry of QOTD_POOL) {
  if (entry.kind !== "mc") continue
  const examId = codeToId.get(entry.code)
  if (!examId) continue
  if (!publicIds.has(examId)) publicIds.set(examId, new Set())
  publicIds.get(examId)!.add(entry.q.id)
}
for (const [examId, samples] of Object.entries(GUIDE_SAMPLES)) {
  if (!publicIds.has(examId)) publicIds.set(examId, new Set())
  for (const s of samples) publicIds.get(examId)!.add(s.id)
}

let chunkCount = 0
let total = 0
const manifest: { file: string; examId: string; n: number }[] = []

for (const exam of Object.values(EXAMS)) {
  const rand = rng(hash(exam.id))
  const pub = publicIds.get(exam.id) ?? new Set<number>()
  const byDomain = new Map<number, typeof exam.questions>()
  for (const q of exam.questions) {
    if (!byDomain.has(q.d)) byDomain.set(q.d, [])
    byDomain.get(q.d)!.push(q)
  }
  const picked: typeof exam.questions = []
  for (const [, qs] of [...byDomain.entries()].sort((a, b) => a[0] - b[0])) {
    const want = Math.ceil(qs.length * RATE)
    const forced = qs.filter((q) => pub.has(q.id))
    const rest = qs.filter((q) => !pub.has(q.id))
    for (let i = rest.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1))
      ;[rest[i], rest[j]] = [rest[j], rest[i]]
    }
    picked.push(...forced, ...rest.slice(0, Math.max(0, want - forced.length)))
  }
  picked.sort((a, b) => a.id - b.id)
  total += picked.length

  const minId = Math.min(...exam.questions.map((q) => q.id))
  for (let i = 0; i < picked.length; i += CHUNK) {
    const slice = picked.slice(i, i + CHUNK)
    const file = `${exam.id}-${Math.floor(i / CHUNK) + 1}.json`
    writeFileSync(
      resolve(outDir, file),
      JSON.stringify(
        {
          examId: exam.id,
          code: exam.code,
          cert: exam.cert,
          name: exam.name,
          vendor: exam.vendor,
          idBase: minId, // 0 for the three 0-indexed CompTIA banks
          domains: exam.domains,
          publicIds: slice.filter((q) => pub.has(q.id)).map((q) => q.id),
          questions: slice,
        },
        null,
        1,
      ),
    )
    manifest.push({ file, examId: exam.id, n: slice.length })
    chunkCount++
  }
  console.log(`${exam.id}: bank ${exam.questions.length}, sampled ${picked.length} (${pub.size} public forced)`)
}

writeFileSync(resolve(outDir, "manifest.json"), JSON.stringify(manifest, null, 1))
console.log(`TOTAL sampled ${total} across ${chunkCount} chunks -> ${outDir}`)
