import type { ExamDef } from "@/data/types"
import type { ExamProgress, SessionRecord } from "./progress"
import { domainNumbers } from "./engine"

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
export function domainAccuracy(exam: ExamDef, p: ExamProgress): DomainStat[] {
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
