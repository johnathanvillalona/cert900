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

/** Fraction correct for a PBQ answer. Match answers: choice index per item (-1 unset). Order answers: permutation of step indices. */
export function pbqScore(p: PBQ, ans: number[] | undefined): number {
  if (!ans) return 0
  if (p.kind === "match") {
    let c = 0
    p.items.forEach((item, i) => {
      if (ans[i] === item.a) c++
    })
    return c / p.items.length
  }
  let c = 0
  ans.forEach((si, pos) => {
    if (si === pos) c++
  })
  return c / p.steps.length
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
