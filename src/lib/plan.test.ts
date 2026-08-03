import { describe, it, expect } from "vitest"
import { activePlans, buildPlan, planExam, planRunway } from "./plan"
import { EXAMS } from "@/data/index"
import { blankProgress, type ProgressAll } from "./progress"

const exam = EXAMS["sy0-701"]
const planned = planExam(exam)
const TODAY = 20_000 // arbitrary fixed UTC day index
const iso = (days: number) => new Date((TODAY + days) * 86_400_000).toISOString().slice(0, 10)

describe("buildPlan", () => {
  it("plans a four-week default runway without a date", () => {
    const plan = buildPlan(planned, blankProgress(), TODAY)
    expect(plan.daysLeft).toBeNull()
    expect(plan.weeks).toBe(4)
    expect(plan.schedule).toHaveLength(4)
  })

  it("derives weeks from the exam date, capped at twelve", () => {
    const p = { ...blankProgress(), examDate: iso(70) }
    expect(buildPlan(planned, p, TODAY).weeks).toBe(10)
    const far = { ...blankProgress(), examDate: iso(365) }
    expect(buildPlan(planned, far, TODAY).weeks).toBe(12)
  })

  it("gives untouched domains their full exam weight and shares sum to one", () => {
    const plan = buildPlan(planned, blankProgress(), TODAY)
    const total = plan.domains.reduce((a, d) => a + d.share, 0)
    expect(total).toBeCloseTo(1, 5)
    // With no attempts anywhere, share must equal normalized exam weight.
    for (const d of plan.domains) expect(d.share).toBeCloseTo(d.weight, 5)
    for (const d of plan.domains) expect(d.pct).toBeNull()
  })

  it("shrinks the share of a domain you have demonstrated", () => {
    const p = blankProgress()
    // Perfect record on every topic of domain 1, enough attempts to count.
    for (const [topic, v] of Object.entries(exam.videos)) {
      if (v.d === 1) p.topics[topic] = { c: 5, t: 5 }
    }
    const plan = buildPlan(planned, p, TODAY)
    const d1 = plan.domains.find((d) => d.domain === 1)!
    expect(d1.pct).toBe(100)
    expect(d1.share).toBeLessThan(d1.weight / 2)
  })

  it("closes the final week with review plus a timed exam", () => {
    const plan = buildPlan(planned, blankProgress(), TODAY)
    const last = plan.schedule[plan.schedule.length - 1]
    expect(last.sim).toBe(true)
    expect(last.focus.join(" ")).toMatch(/review/i)
  })

  it("reads the bank size from questionCount, not a loaded bank", () => {
    // The hub builds plans from EXAM_META, which carries no questions array.
    expect(planned.questionCount).toBe(exam.questions.length)
    expect(buildPlan({ ...planned, questionCount: 4000 }, blankProgress(), TODAY).weeklyQ).toBe(150)
  })
})

describe("planRunway", () => {
  it("defaults to four weeks with no date, or with one inside a week", () => {
    expect(planRunway(undefined, TODAY)).toEqual({ daysLeft: null, weeks: 4 })
    expect(planRunway(iso(3), TODAY).weeks).toBe(4)
  })

  it("never reports negative days for a date that has passed", () => {
    expect(planRunway(iso(-10), TODAY).daysLeft).toBe(0)
  })
})

describe("activePlans", () => {
  const ORDER = ["a", "b", "c", "d"]
  const withPlan = (over: Partial<ReturnType<typeof blankProgress>>) => ({ ...blankProgress(), ...over })

  it("ignores exams with neither a date nor a start stamp", () => {
    const all: ProgressAll = { a: blankProgress(), b: withPlan({ examDate: iso(30) }) }
    expect(activePlans(all, ORDER)).toEqual(["b"])
  })

  it("counts a dateless plan, which is the whole reason planStartedOn exists", () => {
    const all: ProgressAll = { a: withPlan({ planStartedOn: "2026-08-03" }) }
    expect(activePlans(all, ORDER)).toEqual(["a"])
  })

  it("sorts soonest exam date first and puts dateless plans last", () => {
    const all: ProgressAll = {
      c: withPlan({ planStartedOn: "2026-08-01" }),
      b: withPlan({ examDate: iso(60) }),
      a: withPlan({ examDate: iso(10) }),
    }
    expect(activePlans(all, ORDER)).toEqual(["a", "b", "c"])
  })

  it("breaks ties on the registry order so the list cannot jitter", () => {
    const all: ProgressAll = {
      d: withPlan({ examDate: iso(10) }),
      b: withPlan({ examDate: iso(10) }),
    }
    expect(activePlans(all, ORDER)).toEqual(["b", "d"])
  })
})
