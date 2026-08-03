import { describe, it, expect } from "vitest"
import { buildPlan } from "./plan"
import { EXAMS } from "@/data/index"
import { blankProgress } from "./progress"

const exam = EXAMS["sy0-701"]
const TODAY = 20_000 // arbitrary fixed UTC day index

describe("buildPlan", () => {
  it("plans a four-week default runway without a date", () => {
    const plan = buildPlan(exam, blankProgress(), TODAY)
    expect(plan.daysLeft).toBeNull()
    expect(plan.weeks).toBe(4)
    expect(plan.schedule).toHaveLength(4)
  })

  it("derives weeks from the exam date, capped at twelve", () => {
    const iso = (days: number) => new Date((TODAY + days) * 86_400_000).toISOString().slice(0, 10)
    const p = { ...blankProgress(), examDate: iso(70) }
    expect(buildPlan(exam, p, TODAY).weeks).toBe(10)
    const far = { ...blankProgress(), examDate: iso(365) }
    expect(buildPlan(exam, far, TODAY).weeks).toBe(12)
  })

  it("gives untouched domains their full exam weight and shares sum to one", () => {
    const plan = buildPlan(exam, blankProgress(), TODAY)
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
    const plan = buildPlan(exam, p, TODAY)
    const d1 = plan.domains.find((d) => d.domain === 1)!
    expect(d1.pct).toBe(100)
    expect(d1.share).toBeLessThan(d1.weight / 2)
  })

  it("closes the final week with review plus a timed exam", () => {
    const plan = buildPlan(exam, blankProgress(), TODAY)
    const last = plan.schedule[plan.schedule.length - 1]
    expect(last.sim).toBe(true)
    expect(last.focus.join(" ")).toMatch(/review/i)
  })
})
