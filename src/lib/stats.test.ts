import { describe, it, expect } from "vitest"
import { studyStreak, sessionTrend, recentAccuracy, domainAccuracy } from "./stats"
import { EXAMS } from "@/data/index"
import type { SessionRecord } from "./progress"

const s = (date: string, n = 10, correct = 7): SessionRecord => ({ date, mode: "practice", n, correct })

describe("studyStreak", () => {
  it("counts consecutive days ending today", () => {
    expect(studyStreak([s("2026-07-12"), s("2026-07-13"), s("2026-07-14")], "2026-07-14")).toBe(3)
  })
  it("survives when last practice was yesterday", () => {
    expect(studyStreak([s("2026-07-12"), s("2026-07-13")], "2026-07-14")).toBe(2)
  })
  it("breaks after a missed day", () => {
    expect(studyStreak([s("2026-07-10"), s("2026-07-12")], "2026-07-14")).toBe(0)
    expect(studyStreak([s("2026-07-10"), s("2026-07-13")], "2026-07-14")).toBe(1)
  })
  it("handles duplicates and empty", () => {
    expect(studyStreak([s("2026-07-14"), s("2026-07-14")], "2026-07-14")).toBe(1)
    expect(studyStreak([], "2026-07-14")).toBe(0)
    expect(studyStreak(undefined, "2026-07-14")).toBe(0)
  })
})

describe("sessionTrend", () => {
  it("maps sessions to percentages, oldest first, with stable numbering", () => {
    const trend = sessionTrend([s("2026-07-01", 10, 5), s("2026-07-02", 20, 15)])
    expect(trend).toEqual([
      { n: 1, date: "2026-07-01", pct: 50 },
      { n: 2, date: "2026-07-02", pct: 75 },
    ])
  })
  it("caps to the most recent limit while keeping absolute numbering", () => {
    const many = Array.from({ length: 40 }, (_, i) => s(`2026-06-${String((i % 28) + 1).padStart(2, "0")}`))
    const trend = sessionTrend(many, 30)
    expect(trend.length).toBe(30)
    expect(trend[0].n).toBe(11)
    expect(trend[29].n).toBe(40)
  })
  it("skips zero-question sessions", () => {
    expect(sessionTrend([s("2026-07-01", 0, 0)])).toEqual([])
  })
})

describe("recentAccuracy", () => {
  it("windows over the last ~100 answers", () => {
    const sessions = [s("2026-07-01", 100, 20), s("2026-07-02", 50, 45), s("2026-07-03", 50, 40)]
    // window pulls the last two sessions (100 answers): 85/100
    expect(recentAccuracy(sessions, 100)).toBe(85)
  })
  it("null when no sessions", () => {
    expect(recentAccuracy(undefined)).toBeNull()
    expect(recentAccuracy([])).toBeNull()
  })
})

describe("domainAccuracy", () => {
  it("aggregates topic stats into their domains", () => {
    const exam = EXAMS["220-1202"]
    const topics = Object.keys(exam.videos)
    const d1Topic = topics.find((t) => exam.videos[t].d === 1)!
    const d2Topic = topics.find((t) => exam.videos[t].d === 2)!
    const p = { topics: { [d1Topic]: { c: 3, t: 4 }, [d2Topic]: { c: 1, t: 2 } }, exams: [], seen: {} }
    const stats = domainAccuracy(exam, p)
    expect(stats.find((x) => x.domain === 1)).toMatchObject({ pct: 75, attempts: 4 })
    expect(stats.find((x) => x.domain === 2)).toMatchObject({ pct: 50, attempts: 2 })
    expect(stats.find((x) => x.domain === 3)).toMatchObject({ pct: 0, attempts: 0 })
    expect(stats.length).toBe(4)
  })
})
