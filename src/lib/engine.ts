import type { ExamDef, PBQ, Question } from "@/data/types"
import type { ExamProgress } from "./progress"

export type Rng = () => number

export function shuffle<T>(arr: readonly T[], rng: Rng = Math.random): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function topicStat(p: ExamProgress, t: string): { c: number; t: number } {
  return p.topics[t] ?? { c: 0, t: 0 }
}

export function accuracy(p: ExamProgress, topic: string): number | null {
  const s = topicStat(p, topic)
  return s.t ? s.c / s.t : null
}

/** Adaptive weight: unseen-topic boost, weakness boost, seen-count decay. */
export function weightFor(q: Question, p: ExamProgress, focusWeak: boolean): number {
  const acc = accuracy(p, q.t)
  let w = 1
  if (acc === null) w += 1.2
  else w += (1 - acc) * (focusWeak ? 4 : 1.5)
  const seen = p.seen[q.id] ?? 0
  w = w / (1 + seen * 0.6)
  return Math.max(w, 0.05)
}

export function weightedSample(
  pool: readonly Question[],
  n: number,
  p: ExamProgress,
  focusWeak: boolean,
  rng: Rng = Math.random,
): Question[] {
  const out: Question[] = []
  const rest = pool.slice()
  while (out.length < n && rest.length) {
    const ws = rest.map((x) => weightFor(x, p, focusWeak))
    let r = rng() * ws.reduce((a, b) => a + b, 0)
    let i = 0
    for (; i < rest.length; i++) {
      r -= ws[i]
      if (r <= 0) break
    }
    if (i >= rest.length) i = rest.length - 1
    out.push(rest.splice(i, 1)[0])
  }
  return out
}

export function pickMC(
  exam: ExamDef,
  p: ExamProgress,
  n: number,
  opts: { focusWeak?: boolean; domain?: number } = {},
  rng: Rng = Math.random,
): Question[] {
  const { focusWeak = false, domain = 0 } = opts
  const pool = domain ? exam.questions.filter((x) => x.d === domain) : exam.questions
  return weightedSample(pool, Math.min(n, pool.length), p, focusWeak, rng)
}

/** Distribute the full-exam MC count across domains per examSplit. */
export function pickExamMC(exam: ExamDef, p: ExamProgress, rng: Rng = Math.random): Question[] {
  const total = Math.min(exam.examMC, exam.questions.length)
  let picked: Question[] = []
  for (const d of Object.keys(exam.examSplit).map(Number)) {
    picked = picked.concat(pickMC(exam, p, Math.round(total * exam.examSplit[d]), { domain: d }, rng))
  }
  while (picked.length < total) {
    const extra = pickMC(exam, p, 1, {}, rng)
    if (!extra.length) break
    if (!picked.includes(extra[0])) picked.push(extra[0])
  }
  return shuffle(picked, rng).slice(0, total)
}

export function pickExamPBQs(exam: ExamDef, rng: Rng = Math.random): PBQ[] {
  return shuffle(exam.pbqs, rng).slice(0, Math.min(exam.examPBQ, exam.pbqs.length))
}

/** Per-kind PBQ answer shapes:
 *  match: choice index per item (-1 unset) · order: permutation of step indices ·
 *  terminal: typed command per task ("" unset) · config: current value per field ·
 *  hotspot: selected node ids · dragconnect: zoneId -> itemId placements. */
export type PBQAnswer = number[] | string[] | (number | boolean | string)[] | Record<string, string>

/** Case-insensitive full match against any accepted pattern, whitespace-collapsed. */
export function commandMatches(input: string, accept: string[]): boolean {
  const cleaned = input.trim().replace(/\s+/g, " ")
  if (!cleaned) return false
  return accept.some((pat) => {
    try {
      return new RegExp(`^(?:${pat})$`, "i").test(cleaned)
    } catch {
      return false
    }
  })
}

/** Fraction correct for a PBQ answer (partial credit per CompTIA's model). */
export function pbqScore(p: PBQ, ans: PBQAnswer | undefined): number {
  if (!ans) return 0
  switch (p.kind) {
    case "match": {
      const a = ans as number[]
      let c = 0
      p.items.forEach((item, i) => {
        if (a[i] === item.a) c++
      })
      return c / p.items.length
    }
    case "order": {
      const a = ans as number[]
      let c = 0
      a.forEach((si, pos) => {
        if (si === pos) c++
      })
      return c / p.steps.length
    }
    case "terminal": {
      const a = ans as string[]
      let c = 0
      p.tasks.forEach((task, i) => {
        if (commandMatches(a[i] ?? "", task.accept)) c++
      })
      return c / p.tasks.length
    }
    case "config": {
      const a = ans as (number | boolean | string)[]
      let c = 0
      p.fields.forEach((f, i) => {
        const v = a[i]
        if (f.type === "select" && typeof v === "number" && v === f.answer) c++
        else if (f.type === "toggle" && typeof v === "boolean" && v === f.answer) c++
        else if (f.type === "text" && typeof v === "string" && commandMatches(v, f.answer as string[])) c++
      })
      return c / p.fields.length
    }
    case "hotspot": {
      const sel = ans as string[]
      const hits = sel.filter((id) => p.targets.includes(id)).length
      const misses = sel.length - hits
      return Math.max(0, hits - misses) / p.targets.length
    }
    case "dragconnect": {
      const placed = ans as Record<string, string>
      let c = 0
      for (const z of p.zones) {
        if (placed[z.id] && placed[z.id] === p.answer[z.id]) c++
      }
      return c / p.zones.length
    }
  }
}

export const PASS_SCALED = 700

export function scaledScore(pct: number): { scaled: number; pass: boolean } {
  const scaled = Math.round(100 + pct * 800)
  return { scaled, pass: scaled >= PASS_SCALED }
}

/** 0=unattempted, 1=struggling, 2=getting there, 3=solid, 4=mastered */
export function masteryLevel(p: ExamProgress, topic: string): number {
  const s = topicStat(p, topic)
  if (!s.t) return 0
  const acc = s.c / s.t
  if (acc >= 0.9 && s.t >= 3) return 4
  if (acc >= 0.75) return 3
  if (acc >= 0.5) return 2
  return 1
}

export function weakTopics(exam: ExamDef, p: ExamProgress): string[] {
  return Object.keys(exam.videos)
    .filter((t) => {
      const s = topicStat(p, t)
      return s.t >= 3 && s.c / s.t < 0.7
    })
    .sort((a, b) => (accuracy(p, a) ?? 0) - (accuracy(p, b) ?? 0))
}

export function domainNumbers(exam: ExamDef): number[] {
  return Object.keys(exam.domains).map(Number)
}
