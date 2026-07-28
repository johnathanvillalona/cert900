// Regenerates src/data/meta.ts — every exam field EXCEPT the heavy
// `questions` / `pbqs` arrays, plus their counts.
//
// Why: the web app's chrome (header, landing, picker, dashboard, guides) only
// needs metadata, but importing the banks for it dragged ~846KB of question
// JSON into the entry chunk for every visitor. meta.ts is the small, always
// loaded half; the banks load on demand via src/data/banks.ts.
//
// Run after any content change: `node tools/gen-meta.mjs`
// src/data/data.test.ts fails if this file drifts from the banks.
import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const MARKER = "export const exam: ExamDef = "
const IDS = ["220-1201", "220-1202", "n10-009", "sy0-701", "ccna-200-301", "aif-c01", "clf-c02", "saa-c03", "az-900", "sc-900", "az-104"]

const meta = {}
for (const id of IDS) {
  const src = readFileSync(path.join(ROOT, "src", "data", `${id}.ts`), "utf8")
  const exam = JSON.parse(src.slice(src.indexOf(MARKER) + MARKER.length))
  const { questions, pbqs, ...rest } = exam
  meta[id] = { ...rest, questionCount: questions.length, pbqCount: pbqs.length }
}

// ---- question-of-the-day pool -------------------------------------------
// The landing hero shows one fully answerable item, which is the only place the
// chrome needs real question content. Embedding a small sampled pool keeps that
// instant (no fetch, no chunk) while leaving the banks on demand.
//
// Sampling is a PER-EXAM QUOTA, not a stride over one flat list. The stride
// version silently starved the newer, wordier banks: with the old fit rule
// (stem <= 130 chars, options <= 42) SAA-C03 and AZ-900 had a single eligible
// question each and drew ZERO slots, Security+ drew 2, and A+ plus Network+
// took 85 of 120 — so the "daily question" was effectively A+ forever. The
// limits below are the widest the hero card and a 280-character post can carry.
const POOL_SIZE = 121 // 11 per exam; the social composer degrades if one is long
const MAX_STEM = 200
const MAX_OPTION = 80
/** Only these two PBQ kinds render in the hero; the rest need the full sim UI. */
const PBQ_KINDS = ["match", "order"]

const byExam = new Map()
for (const id of IDS) {
  const src = readFileSync(path.join(ROOT, "src", "data", `${id}.ts`), "utf8")
  const exam = JSON.parse(src.slice(src.indexOf(MARKER) + MARKER.length))
  const flat = { code: exam.code, cert: exam.cert, vendor: exam.vendor }
  const mine = []
  const minePbq = []

  for (const q of exam.questions) {
    // `!q.as` excludes multiple-response. It used to be excluded only by
    // accident (`o.length === 4`, since "Choose TWO" items carry 5 options),
    // and the projection below would have dropped `as` silently, turning a
    // multi-answer question into a single-answer one with the wrong key.
    if (q.as) continue
    if (q.x.length > MAX_STEM || q.o.length !== 4) continue
    if (q.o.some((o) => o.length > MAX_OPTION)) continue
    const v = exam.videos[q.t]
    mine.push({
      ...flat,
      kind: "mc",
      domain: exam.domains[q.d],
      videoUrl: v.u,
      videoName: v.n,
      q: { id: q.id, t: q.t, d: q.d, x: q.x, o: q.o, a: q.a, e: q.e },
    })
  }

  for (const pbq of exam.pbqs) {
    if (!PBQ_KINDS.includes(pbq.kind)) continue
    // PBQs carry no numeric id (they are keyed by title everywhere else), and
    // no domain number, so `domain` falls back to the topic's video title.
    const v = exam.videos[pbq.t]
    const payload =
      pbq.kind === "match"
        ? { kind: "match", choices: pbq.choices, items: pbq.items }
        : { kind: "order", steps: pbq.steps }
    if (pbq.kind === "match" && pbq.items.length > 4) continue // taller than the card
    if (pbq.kind === "order" && pbq.steps.length > 5) continue
    minePbq.push({
      ...flat,
      kind: "pbq",
      domain: v.n,
      videoUrl: v.u,
      videoName: v.n,
      pbq: { t: pbq.t, title: pbq.title, scen: pbq.scen, ...payload },
    })
  }
  byExam.set(id, { mc: mine, pbq: minePbq })
}

/** Even stride across a list, so the picks span the whole bank. */
const stride = (list, n) =>
  Array.from({ length: Math.min(n, list.length) }, (_, i) =>
    list[Math.floor((i * list.length) / Math.min(n, list.length))],
  )

// Round-robin the quota so every exam appears. PBQ slots are reserved rather
// than merged into one list: PBQs are appended after several hundred questions,
// so a single stride over the combined list never reached them (the first pass
// of this rewrite produced a fair 11-per-exam pool with zero PBQs in it).
const quota = Math.ceil(POOL_SIZE / IDS.length)
const PBQ_PER_EXAM = 2
const picked = []
for (const id of IDS) {
  const { mc, pbq } = byExam.get(id)
  const takePbq = stride(pbq, PBQ_PER_EXAM)
  picked.push(...stride(mc, quota - takePbq.length), ...takePbq)
}
// Interleave by exam so consecutive days rotate vendors instead of marching
// through one bank at a time (the pool is consumed as dayIndex % length).
const lanes = IDS.map((id) => picked.filter((e) => e.code === meta[id].code))
const pool = []
for (let round = 0; round < Math.max(...lanes.map((l) => l.length)); round++) {
  for (const lane of lanes) if (round < lane.length) pool.push(lane[round])
}

writeFileSync(
  path.join(ROOT, "src", "data", "qotd-pool.ts"),
  `// GENERATED by tools/gen-meta.mjs — do not edit by hand.
// Sampled question-of-the-day pool for the landing hero. Flat exam fields so
// one entry carries everything the card renders without pulling a bank.
// Two kinds: "mc" (four options, single answer) and "pbq" (match/order only).
import type { MatchItem, Vendor } from "./types"

interface QotdBase {
  code: string
  cert: string
  vendor: Vendor
  domain: string
  videoUrl: string
  videoName: string
}

export interface QotdMc extends QotdBase {
  kind: "mc"
  q: { id: number; t: string; d: number; x: string; o: string[]; a: number; e: string }
}

export interface QotdPbqEntry extends QotdBase {
  kind: "pbq"
  pbq:
    | { t: string; title: string; scen: string; kind: "match"; choices: string[]; items: MatchItem[] }
    | { t: string; title: string; scen: string; kind: "order"; steps: string[] }
}

export type QotdEntry = QotdMc | QotdPbqEntry

export const QOTD_POOL: QotdEntry[] = ${JSON.stringify(pool, null, 1)}
`,
)
const spread = IDS.map((id) => `${id} ${pool.filter((e) => e.code === meta[id].code).length}`).join(", ")
const pbqCount = pool.filter((e) => e.kind === "pbq").length
console.log(`wrote src/data/qotd-pool.ts (${pool.length} entries, ${pbqCount} PBQ)\n  ${spread}`)

// ---- guide sample questions ---------------------------------------------
// Real questions embedded in the SEO guide pages, so each page carries actual
// exam content a crawler can read instead of three hand-copied examples. Spread
// across the exam's domains so the samples cover its whole syllabus, and picked
// deterministically so the pages are stable between builds (churning content on
// every deploy is a bad signal).
//
// The guide screens are lazy-loaded (src/App.tsx), so this file never lands in
// the entry chunk.
const SAMPLES_PER_EXAM = 8
const samples = {}
for (const id of IDS) {
  const src = readFileSync(path.join(ROOT, "src", "data", `${id}.ts`), "utf8")
  const exam = JSON.parse(src.slice(src.indexOf(MARKER) + MARKER.length))
  // Round-robin the domains so a sample set never sits inside one objective.
  const byDomain = new Map()
  for (const q of exam.questions) {
    if (q.as) continue // single-answer only: the sample renderer shows one key
    if (q.x.length > 260) continue
    if (!byDomain.has(q.d)) byDomain.set(q.d, [])
    byDomain.get(q.d).push(q)
  }
  const domains = [...byDomain.keys()].sort((a, b) => a - b)
  const picked = []
  for (let round = 0; picked.length < SAMPLES_PER_EXAM; round++) {
    let addedThisRound = false
    for (const d of domains) {
      if (picked.length >= SAMPLES_PER_EXAM) break
      const list = byDomain.get(d)
      // Stride within the domain so repeat rounds do not take adjacent items.
      const idx = Math.floor((round * list.length) / SAMPLES_PER_EXAM) % list.length
      const q = list[idx]
      if (picked.some((p) => p.id === q.id)) continue
      picked.push(q)
      addedThisRound = true
    }
    if (!addedThisRound) break // bank too small to fill the quota
  }
  samples[id] = picked.map((q) => ({
    id: q.id,
    x: q.x,
    o: q.o,
    a: q.a,
    e: q.e,
    domain: exam.domains[q.d],
    topic: exam.videos[q.t].n,
  }))
}
writeFileSync(
  path.join(ROOT, "src", "data", "guide-samples.ts"),
  `// GENERATED by tools/gen-meta.mjs — do not edit by hand.
// Real practice questions rendered into the prerendered SEO guide pages
// (src/screens/Guides.tsx), spread across each exam's domains.
export interface GuideSample {
  id: number
  x: string
  o: string[]
  a: number
  e: string
  domain: string
  topic: string
}

export const GUIDE_SAMPLES: Record<string, GuideSample[]> = ${JSON.stringify(samples, null, 1)}
`,
)
console.log(
  `wrote src/data/guide-samples.ts (${Object.values(samples).reduce((a, s) => a + s.length, 0)} questions across ${IDS.length} exams)`,
)

const out = `// GENERATED by tools/gen-meta.mjs — do not edit by hand.
// Re-run after content changes: node tools/gen-meta.mjs
//
// Exam metadata without the question/PBQ payload. This is the half the app
// chrome needs, so it can stay in the entry chunk while the banks load on
// demand (src/data/banks.ts). data.test.ts asserts this matches the banks.
import type { ExamMeta } from "./types"

export const EXAM_META: Record<string, ExamMeta> = ${JSON.stringify(meta, null, 1)}

/** Display order: grouped by vendor (see vendors.ts VENDOR_ORDER). */
export const EXAM_ORDER: string[] = ${JSON.stringify(IDS)}
`
writeFileSync(path.join(ROOT, "src", "data", "meta.ts"), out)
const kb = (Buffer.byteLength(out) / 1024).toFixed(0)
console.log(`wrote src/data/meta.ts (${IDS.length} exams, ${kb}KB)`)
