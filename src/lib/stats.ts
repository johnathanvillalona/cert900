import type { ExamDef, ExamTopics } from "@/data/types"
import type { ExamProgress, ProgressAll, SessionRecord } from "./progress"
import { domainNumbers, scaledScore } from "./engine"

/** All sessions across every exam, for cross-exam streaks. */
export function allSessions(all: ProgressAll): SessionRecord[] {
  return Object.values(all).flatMap((p) => p.sessions ?? [])
}

/** Consecutive days practiced, counting back from today or yesterday. */
export function studyStreak(sessions: SessionRecord[] | undefined, today: string): number {
  if (!sessions?.length) return 0
  const days = new Set(sessions.map((s) => s.date))
  const d = new Date(today + "T00:00:00Z")
  // A streak survives if the last practice was today or yesterday.
  if (!days.has(iso(d))) d.setUTCDate(d.getUTCDate() - 1)
  let streak = 0
  while (days.has(iso(d))) {
    streak++
    d.setUTCDate(d.getUTCDate() - 1)
  }
  return streak
}

function iso(d: Date): string {
  return d.toISOString().slice(0, 10)
}

export interface TrendPoint {
  /** 1-based session number */
  n: number
  date: string
  pct: number
}

/** Per-session accuracy, oldest first, capped to the most recent `limit`. */
export function sessionTrend(sessions: SessionRecord[] | undefined, limit = 30): TrendPoint[] {
  if (!sessions) return []
  const graded = sessions.filter((s) => s.n > 0)
  const recent = graded.slice(-limit)
  const offset = graded.length - recent.length
  return recent.map((s, i) => ({
    n: offset + i + 1,
    date: s.date,
    pct: Math.round((s.correct / s.n) * 100),
  }))
}

/** Accuracy over roughly the last `windowAnswers` answers, from the session log. */
export function recentAccuracy(sessions: SessionRecord[] | undefined, windowAnswers = 100): number | null {
  if (!sessions?.length) return null
  let n = 0
  let c = 0
  for (let i = sessions.length - 1; i >= 0 && n < windowAnswers; i--) {
    n += sessions[i].n
    c += sessions[i].correct
  }
  return n ? Math.round((c / n) * 100) : null
}

export interface DomainStat {
  domain: number
  name: string
  pct: number
  attempts: number
}

/** Per-domain accuracy from topic stats. */
export function domainAccuracy(exam: ExamTopics, p: ExamProgress): DomainStat[] {
  return domainNumbers(exam).map((d) => {
    let c = 0
    let t = 0
    for (const [topic, s] of Object.entries(p.topics)) {
      if (exam.videos[topic]?.d === d) {
        c += s.c
        t += s.t
      }
    }
    return { domain: d, name: exam.domains[d], pct: t ? Math.round((c / t) * 100) : 0, attempts: t }
  })
}

/* ------------------------------------------------------------------ *
 * Readiness estimate
 * ------------------------------------------------------------------ */

export type ReadinessLevel = "insufficient" | "not-yet" | "borderline" | "on-track"

export interface Readiness {
  level: ReadinessLevel
  /** Scaled-score band. Null when `level` is "insufficient". */
  band: { low: number; high: number } | null
  /** Answers counted, and the share of exam weight that has any evidence. */
  answers: number
  coverage: number
  /** Domains with too little evidence to count, worst-weighted first. */
  gaps: DomainStat[]
}

/** Enough attempts in a domain for its accuracy to mean anything. */
const MIN_PER_DOMAIN = 3
const MIN_ANSWERS = 25
const MIN_COVERAGE = 0.5
/** 80% confidence. Wide enough to stay honest, tight enough to be useful. */
const Z = 1.2816

/** Wilson score interval — behaves sanely at small n, unlike the normal approximation. */
function wilson(p: number, n: number): { low: number; high: number } {
  if (n <= 0) return { low: 0, high: 1 }
  const z2 = Z * Z
  const denom = 1 + z2 / n
  const center = (p + z2 / (2 * n)) / denom
  const half = (Z / denom) * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n))
  return { low: Math.max(0, center - half), high: Math.min(1, center + half) }
}

/**
 * Estimate how a practice record would land on the real scale.
 *
 * Domain accuracies are weighted by the exam's published `examSplit` and
 * renormalized over the domains that have evidence — NOT zero-filled, which
 * would read an unstudied domain as a domain failed. That renormalization is
 * also why coverage is gated and reported: an estimate drawn from half the
 * blueprint is an estimate of half the blueprint.
 *
 * This is a practice-bank estimate, not a forecast of exam-day performance.
 * Callers must present the band, never a single number.
 */
export function readiness(
  exam: ExamTopics & Pick<ExamDef, "examSplit" | "scale">,
  p: ExamProgress,
): Readiness {
  const stats = domainAccuracy(exam, p)
  const answers = stats.reduce((n, s) => n + s.attempts, 0)

  let weighted = 0
  let covWeight = 0
  const gaps: DomainStat[] = []
  for (const s of stats) {
    const w = exam.examSplit[s.domain] ?? 0
    if (s.attempts >= MIN_PER_DOMAIN) {
      weighted += (s.pct / 100) * w
      covWeight += w
    } else {
      gaps.push(s)
    }
  }
  gaps.sort((a, b) => (exam.examSplit[b.domain] ?? 0) - (exam.examSplit[a.domain] ?? 0))

  if (answers < MIN_ANSWERS || covWeight < MIN_COVERAGE) {
    return { level: "insufficient", band: null, answers, coverage: covWeight, gaps }
  }

  const acc = weighted / covWeight
  const ci = wilson(acc, answers)
  const low = scaledScore(ci.low, exam.scale).scaled
  const high = scaledScore(ci.high, exam.scale).scaled

  const level: ReadinessLevel =
    low >= exam.scale.pass ? "on-track" : high < exam.scale.pass ? "not-yet" : "borderline"

  return { level, band: { low, high }, answers, coverage: covWeight, gaps }
}

/** Copy for each level. Deliberately avoids promising an outcome. */
export const READINESS_COPY: Record<ReadinessLevel, { label: string; note: string }> = {
  insufficient: {
    label: "Not enough data",
    note: "Answer more questions, spread across the domains, and an estimate will appear here.",
  },
  "not-yet": {
    label: "Not yet",
    note: "Your practice scores land below the pass line. The weak topics below are where the points are.",
  },
  borderline: {
    label: "Borderline",
    note: "Your practice scores straddle the pass line. More work on your weak domains would move the range up.",
  },
  "on-track": {
    label: "On track",
    note: "Your practice scores sit above the pass line. Keep the streak going and cover any thin domains.",
  },
}
