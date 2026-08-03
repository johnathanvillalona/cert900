import type { ExamDef } from "@/data/types"
import type { ExamProgress } from "./progress"
import { dateToDay } from "./progress"
import { domainAccuracy } from "./stats"

/**
 * Study-plan math, kept out of the screen so it is testable and shareable
 * with mobile later. Planning deliberately inverts the readiness philosophy:
 * readiness RENORMALIZES over covered domains because an unstudied domain is
 * not a failed one, but a PLAN must budget for unstudied domains at full
 * need — you still have to learn them.
 */

export interface DomainPlan {
  domain: number
  name: string
  /** Exam weight, 0..1. */
  weight: number
  /** Accuracy so far, 0..100, or null under 3 attempts (too little signal). */
  pct: number | null
  /** Share of remaining study time this domain deserves, 0..1, sums to 1. */
  share: number
  /** Suggested weekly question count from the shared budget. */
  weeklyQ: number
}

export interface WeekPlan {
  index: number
  focus: string[]
  /** True on weeks that end with a full timed exam. */
  sim: boolean
}

export interface StudyPlan {
  daysLeft: number | null
  weeks: number
  weeklyQ: number
  domains: DomainPlan[]
  schedule: WeekPlan[]
}

/**
 * need = weight x (1 - demonstrated accuracy). A domain with no meaningful
 * attempts counts as accuracy 0: the plan's job is to allocate LEARNING time,
 * and unseen material is exactly what needs it.
 */
export function buildPlan(exam: ExamDef, p: ExamProgress, today: number): StudyPlan {
  const daysLeft = p.examDate ? Math.max(0, dateToDay(p.examDate) - today) : null
  // No date (or a past date) plans a default four-week runway.
  const weeks = daysLeft === null || daysLeft < 7 ? 4 : Math.min(12, Math.ceil(daysLeft / 7))

  const acc = domainAccuracy(exam, p)
  const needs = acc.map((d) => ({
    ...d,
    weight: exam.examSplit[d.domain] ?? 0,
    need: (exam.examSplit[d.domain] ?? 0) * (1 - (d.attempts >= 3 ? d.pct / 100 : 0)),
  }))
  const totalNeed = needs.reduce((a, d) => a + d.need, 0) || 1

  // ~15 questions on five days a week is a sustainable evening pace; compress
  // the whole remaining bank into the runway only when that is MORE work.
  const unseen = Math.max(0, exam.questions.length - Object.keys(p.seen).length)
  const paceWeekly = 75
  const coverageWeekly = Math.ceil(unseen / weeks)
  const weeklyQ = Math.max(40, Math.min(150, Math.max(paceWeekly, coverageWeekly)))

  const domains: DomainPlan[] = needs.map((d) => ({
    domain: d.domain,
    name: d.name,
    weight: d.weight,
    pct: d.attempts >= 3 ? d.pct : null,
    share: d.need / totalNeed,
    weeklyQ: Math.max(5, Math.round((weeklyQ * d.need) / totalNeed / 5) * 5),
  }))

  // Weekly focus: highest-need domains first, two per week, cycling so every
  // domain recurs; a timed exam closes every second week and the final week.
  const byNeed = [...domains].sort((a, b) => b.share - a.share)
  const schedule: WeekPlan[] = []
  for (let w = 0; w < weeks; w++) {
    const last = w === weeks - 1
    const focus = last
      ? ["Review queue, weak topics, and PBQs"]
      : [byNeed[(w * 2) % byNeed.length].name, byNeed[(w * 2 + 1) % byNeed.length].name]
    schedule.push({ index: w + 1, focus, sim: last || (w + 1) % 2 === 0 })
  }

  return { daysLeft, weeks, weeklyQ, domains, schedule }
}
