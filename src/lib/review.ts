import type { ExamDef, Question } from "@/data/types"
import type { ExamProgress, QStat } from "./progress"

/**
 * Leitner scheduling over per-question history.
 *
 * Chosen over SM-2 because the inputs here are binary (right/wrong) with no
 * self-rated difficulty, which is exactly what boxes model. Days, not minutes:
 * every date in this app is day-granular.
 */
/**
 * Days to wait before re-asking, INDEXED BY BOX (1-5), so slot 0 is unused.
 * Box 1 is 0: a question you just missed is due again in the same session.
 */
export const LEITNER_INTERVALS = [0, 0, 1, 3, 7, 21] as const
export const MAX_BOX = 5

/** Right promotes one box; wrong drops straight to 1 — a miss means you didn't know it. */
export function nextBox(box: number, correct: boolean): number {
  return correct ? Math.min(box + 1, MAX_BOX) : 1
}

export function applyAnswer(prev: QStat | undefined, correct: boolean, today: number): QStat {
  const [r, w, , box] = prev ?? [0, 0, today, 1]
  return [r + (correct ? 1 : 0), w + (correct ? 0 : 1), today, nextBox(box ?? 1, correct)]
}

export const dueDay = (s: QStat): number => s[2] + LEITNER_INTERVALS[Math.min(s[3] ?? 1, MAX_BOX)]
export const isDue = (s: QStat, today: number): boolean => today >= dueDay(s)

/**
 * "Still owed": missed at least once and not yet re-earned.
 *
 * Box >= 3 means two correct answers since the last miss, which is what
 * graduates a question out of the queue. One lucky correct answer moves box
 * 1 -> 2 and stretches the interval but does not clear it: a single hit after
 * a miss is weak evidence of learning, two spaced hits are reasonable.
 */
export const isOutstandingMiss = (s: QStat): boolean => s[1] > 0 && (s[3] ?? 1) < 3

/** How many questions are waiting to be re-attempted (badge counts). */
export function reviewCount(p: ExamProgress): number {
  if (!p.q) return 0
  let n = 0
  for (const id of Object.keys(p.q)) if (isOutstandingMiss(p.q[id])) n++
  return n
}

export interface QueuedQuestion {
  q: Question
  box: number
  overdue: number
}

/** Worst first: lowest box, then most overdue, then most-missed. */
export function reviewQueue(exam: ExamDef, p: ExamProgress, today: number, limit = 25): QueuedQuestion[] {
  if (!p.q) return []
  const out: QueuedQuestion[] = []
  for (const q of exam.questions) {
    const s = p.q[String(q.id)]
    if (!s || !isOutstandingMiss(s)) continue
    out.push({ q, box: s[3] ?? 1, overdue: today - dueDay(s) })
  }
  out.sort((a, b) => {
    if (a.box !== b.box) return a.box - b.box
    if (a.overdue !== b.overdue) return b.overdue - a.overdue
    const sa = p.q![String(a.q.id)][1]
    const sb = p.q![String(b.q.id)][1]
    return sb - sa
  })
  return out.slice(0, limit)
}
