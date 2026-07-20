import { describe, it, expect } from "vitest"
import { studyStreak, sessionTrend, recentAccuracy, domainAccuracy, readiness } from "./stats"
import { EXAMS } from "@/data/index"
import { blankProgress, type ExamProgress, type SessionRecord } from "./progress"

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

describe("question of the day", () => {
  it("has a healthy pool and picks deterministically per day", async () => {
    const { qotdPool, questionOfTheDay } = await import("./qotd")
    const pool = qotdPool()
    expect(pool.length).toBeGreaterThan(100)
    expect(questionOfTheDay(20649).q.id).toBe(questionOfTheDay(20649).q.id)
    expect(questionOfTheDay(20649).q).not.toEqual(questionOfTheDay(20650).q)
    for (const p of pool.slice(0, 50)) {
      expect(p.q.o.length).toBe(4)
      expect(p.q.x.length).toBeLessThanOrEqual(130)
    }
  })
})

describe("readiness", () => {
  const exam = EXAMS["220-1201"]

  /** Answer `n` questions per topic at `pct` accuracy, for topics in `domains`. */
  function studied(domains: number[], pct: number, perTopic = 4): ExamProgress {
    const topics: ExamProgress["topics"] = {}
    for (const [topic, v] of Object.entries(exam.videos)) {
      if (!domains.includes(v.d)) continue
      topics[topic] = { c: perTopic * pct, t: perTopic }
    }
    return { ...blankProgress(), topics }
  }

  const ALL = Object.keys(exam.domains).map(Number)

  it("withholds a number until there is enough evidence", () => {
    const r = readiness(exam, blankProgress())
    expect(r.level).toBe("insufficient")
    expect(r.band).toBeNull()
    expect(r.answers).toBe(0)
  })

  it("stays insufficient when answers are plentiful but coverage is thin", () => {
    // One domain only: lots of answers, far below the 50% coverage floor.
    const r = readiness(exam, studied([1], 1, 30))
    expect(r.answers).toBeGreaterThan(25)
    expect(r.coverage).toBeLessThan(0.5)
    expect(r.level).toBe("insufficient")
  })

  it("reads a strong record as on track, with the band above the pass line", () => {
    const r = readiness(exam, studied(ALL, 1))
    expect(r.level).toBe("on-track")
    expect(r.band!.low).toBeGreaterThanOrEqual(exam.scale.pass)
    expect(r.coverage).toBeCloseTo(1, 5)
  })

  it("reads a weak record as not yet", () => {
    const r = readiness(exam, studied(ALL, 0.3))
    expect(r.level).toBe("not-yet")
    expect(r.band!.high).toBeLessThan(exam.scale.pass)
  })

  it("returns a band, never a point estimate", () => {
    const r = readiness(exam, studied(ALL, 0.75))
    expect(r.band!.high).toBeGreaterThan(r.band!.low)
  })

  it("narrows the band as evidence accumulates", () => {
    const few = readiness(exam, studied(ALL, 0.8, 3))
    const many = readiness(exam, studied(ALL, 0.8, 30))
    const width = (r: typeof few) => r.band!.high - r.band!.low
    expect(width(many)).toBeLessThan(width(few))
  })

  it("does not treat an unstudied domain as a failed one", () => {
    // Same accuracy, different coverage: the estimate must not be dragged down
    // by domains that simply have no evidence yet.
    const partial = readiness(exam, studied(ALL.slice(0, Math.ceil(ALL.length / 2) + 1), 0.9))
    const full = readiness(exam, studied(ALL, 0.9))
    expect(partial.band!.high).toBeGreaterThanOrEqual(full.band!.low)
    expect(partial.gaps.length).toBeGreaterThan(0)
    expect(full.gaps).toHaveLength(0)
  })

  it("honours each exam's real pass line", () => {
    // Security+ needs 750 where Core 1 needs 675, so the same record can differ.
    const sec = EXAMS["sy0-701"]
    expect(sec.scale.pass).toBe(750)
    expect(exam.scale.pass).toBe(675)
  })
})
