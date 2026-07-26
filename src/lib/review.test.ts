import { describe, expect, it } from "vitest"
import { EXAMS } from "@/data"
import { blankProgress, type ExamProgress, type QStat } from "./progress"
import { applyAnswer, dueDay, isDue, isOutstandingMiss, nextBox, reviewCount, reviewQueue } from "./review"

const exam = EXAMS["220-1201"]

function withHistory(q: Record<string, QStat>): ExamProgress {
  return { ...blankProgress(), q }
}

describe("nextBox", () => {
  it("promotes on correct and caps at 5", () => {
    expect(nextBox(1, true)).toBe(2)
    expect(nextBox(5, true)).toBe(5)
  })

  it("drops all the way to 1 on a miss, from any box", () => {
    expect(nextBox(5, false)).toBe(1)
    expect(nextBox(2, false)).toBe(1)
  })
})

describe("applyAnswer", () => {
  it("starts a fresh question in box 1 and counts the result", () => {
    expect(applyAnswer(undefined, false, 10)).toEqual([0, 1, 10, 1])
    expect(applyAnswer(undefined, true, 10)).toEqual([1, 0, 10, 2])
  })

  it("accumulates without losing earlier counts", () => {
    const a = applyAnswer(undefined, false, 10)
    const b = applyAnswer(a, true, 12)
    expect(b).toEqual([1, 1, 12, 2])
  })

  it("tolerates a short tuple from a future/older writer", () => {
    expect(applyAnswer([2, 1, 5] as unknown as QStat, true, 9)).toEqual([3, 1, 9, 2])
  })
})

describe("isOutstandingMiss", () => {
  it("ignores questions that were never missed", () => {
    expect(isOutstandingMiss([4, 0, 1, 5])).toBe(false)
  })

  it("keeps a missed question queued until two correct answers", () => {
    let s = applyAnswer(undefined, false, 1) // box 1
    expect(isOutstandingMiss(s)).toBe(true)
    s = applyAnswer(s, true, 2) // box 2 — one lucky hit is not enough
    expect(isOutstandingMiss(s)).toBe(true)
    s = applyAnswer(s, true, 5) // box 3 — graduated
    expect(isOutstandingMiss(s)).toBe(false)
  })

  it("re-queues a graduated question the moment it is missed again", () => {
    const s = applyAnswer([9, 1, 30, 5], false, 40)
    expect(isOutstandingMiss(s)).toBe(true)
  })
})

describe("scheduling", () => {
  it("stretches the interval as the box rises", () => {
    expect(dueDay([0, 1, 100, 1])).toBe(100) // box 1 -> same day
    expect(dueDay([1, 1, 100, 2])).toBe(101)
    expect(dueDay([3, 1, 100, 4])).toBe(107)
  })

  it("is due exactly on the due day, not after it", () => {
    const s: QStat = [1, 1, 100, 2]
    expect(isDue(s, 100)).toBe(false)
    expect(isDue(s, 101)).toBe(true)
  })
})

describe("reviewQueue", () => {
  const ids = exam.questions.slice(0, 4).map((q) => q.id)

  it("is empty for progress with no history at all", () => {
    expect(reviewQueue(exam, blankProgress(), 100)).toEqual([])
    expect(reviewCount(blankProgress(), 100)).toBe(0)
  })

  it("returns only outstanding misses", () => {
    const p = withHistory({
      [ids[0]]: [0, 2, 90, 1], // missed, box 1
      [ids[1]]: [5, 0, 90, 5], // never missed
      [ids[2]]: [3, 1, 90, 3], // missed but graduated
    })
    expect(reviewQueue(exam, p, 100).map((x) => x.q.id)).toEqual([ids[0]])
    expect(reviewCount(p, 100)).toBe(1)
  })

  it("does not re-serve a question until its interval elapses (the reappear bug)", () => {
    // Missed on day 100 (box 1, interval 0): due the same day.
    let s = applyAnswer(undefined, false, 100)
    let p = withHistory({ [ids[0]]: s })
    expect(reviewQueue(exam, p, 100).map((x) => x.q.id)).toEqual([ids[0]])

    // Re-answered correctly the same day (box 2, interval 1 day): it must NOT
    // come straight back — not in the queue and not in the badge count today.
    s = applyAnswer(s, true, 100)
    p = withHistory({ [ids[0]]: s })
    expect(reviewQueue(exam, p, 100)).toEqual([])
    expect(reviewCount(p, 100)).toBe(0)

    // Still outstanding (one hit is weak evidence), so it returns when due.
    expect(reviewQueue(exam, p, 101).map((x) => x.q.id)).toEqual([ids[0]])
    expect(reviewCount(p, 101)).toBe(1)
  })

  it("orders worst first: lower box, then more overdue", () => {
    const p = withHistory({
      [ids[0]]: [1, 1, 99, 2], // box 2
      [ids[1]]: [0, 1, 99, 1], // box 1, 1 day overdue
      [ids[2]]: [0, 3, 80, 1], // box 1, 20 days overdue
    })
    expect(reviewQueue(exam, p, 100).map((x) => x.q.id)).toEqual([ids[2], ids[1], ids[0]])
  })

  it("ignores ids that are no longer in the bank", () => {
    const p = withHistory({ "999999": [0, 1, 90, 1] })
    expect(reviewQueue(exam, p, 100)).toEqual([])
    // The count is a cheap badge over stored history, so it still sees the row.
    expect(reviewCount(p, 100)).toBe(1)
  })

  it("caps at the requested limit", () => {
    const q: Record<string, QStat> = {}
    for (const item of exam.questions.slice(0, 40)) q[item.id] = [0, 1, 90, 1]
    expect(reviewQueue(exam, withHistory(q), 100, 25)).toHaveLength(25)
  })
})
