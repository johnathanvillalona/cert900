import type { ExamDef, ExamTopics } from "@/data/types"
import type { ExamProgress, ProgressAll } from "./progress"
import { dateToDay } from "./progress"
import { domainAccuracy } from "./stats"

/**
 * Study-plan math, kept out of the screen so it is testable and shareable
 * with mobile later. Planning deliberately inverts the readiness philosophy:
 * readiness RENORMALIZES over covered domains because an unstudied domain is
 * not a failed one, but a PLAN must budget for unstudied domains at full
 * need — you still have to learn them.
 */

/**
 * Everything a plan needs from an exam, and nothing more. Structural rather
 * than `ExamDef` (which readiness already does, stats.ts) because the study-
 * plan hub renders every active plan at once: taking ExamDef would mean
 * downloading eleven question banks to print eleven countdowns. EXAM_META
 * satisfies this as-is; ExamDef callers go through `planExam`.
 */
export type PlanExam = ExamTopics & Pick<ExamDef, "examSplit"> & { questionCount: number }

/** ExamDef -> the slice buildPlan needs. EXAM_META already IS that slice. */
export const planExam = (e: ExamDef): PlanExam => ({
  videos: e.videos,
  domains: e.domains,
  examSplit: e.examSplit,
  questionCount: e.questions.length,
})

/**
 * Exam ids with a live study plan, soonest exam date first and dateless plans
 * last. `examDate` counts on its own: setting a date on the exam home is a
 * commitment to a plan, and reading it that way means plans built before
 * planStartedOn existed are not silently dropped from the list.
 */
export function activePlans(all: ProgressAll, order: readonly string[]): string[] {
  const ids = Object.keys(all).filter((id) => all[id]?.examDate || all[id]?.planStartedOn)
  const rank = (id: string) => order.indexOf(id)
  return ids.sort((a, b) => {
    const da = all[a].examDate
    const db = all[b].examDate
    if (da && db) return da === db ? rank(a) - rank(b) : da < db ? -1 : 1
    if (da) return -1
    if (db) return 1
    return rank(a) - rank(b)
  })
}

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
 * How long the plan runs. Split out so the hub can show a runway for every
 * plan without computing the whole thing, and so the "no date" default has one
 * definition rather than one per surface.
 */
export function planRunway(examDate: string | undefined, today: number): { daysLeft: number | null; weeks: number } {
  const daysLeft = examDate ? Math.max(0, dateToDay(examDate) - today) : null
  // No date (or a past date) plans a default four-week runway.
  return { daysLeft, weeks: daysLeft === null || daysLeft < 7 ? 4 : Math.min(12, Math.ceil(daysLeft / 7)) }
}

/**
 * need = weight x (1 - demonstrated accuracy). A domain with no meaningful
 * attempts counts as accuracy 0: the plan's job is to allocate LEARNING time,
 * and unseen material is exactly what needs it.
 */
export function buildPlan(exam: PlanExam, p: ExamProgress, today: number): StudyPlan {
  const { daysLeft, weeks } = planRunway(p.examDate, today)

  const acc = domainAccuracy(exam, p)
  const needs = acc.map((d) => ({
    ...d,
    weight: exam.examSplit[d.domain] ?? 0,
    need: (exam.examSplit[d.domain] ?? 0) * (1 - (d.attempts >= 3 ? d.pct / 100 : 0)),
  }))
  const totalNeed = needs.reduce((a, d) => a + d.need, 0) || 1

  // ~15 questions on five days a week is a sustainable evening pace; compress
  // the whole remaining bank into the runway only when that is MORE work.
  const unseen = Math.max(0, exam.questionCount - Object.keys(p.seen).length)
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
