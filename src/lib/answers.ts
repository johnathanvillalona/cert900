import { dayNumber, type ExamProgress } from "./progress"
import { applyAnswer } from "./review"

/**
 * Grading-to-progress folding, shared by the web store (hooks/useProgress) and
 * the mobile store (mobile/src/progress-store). It lives in lib/ rather than in
 * either store because both platforms write the SAME synced blob: if the two
 * folds drifted, an answer would count differently depending on which device
 * you happened to be holding.
 */

export interface AnswerEntry {
  topic: string
  /** Credit earned: 1/0 for MC, fractional for partial-credit PBQs. */
  frac: number
  /** MC only. PBQs have no numeric id, so they contribute topic stats alone. */
  questionId?: number
}

/**
 * Fold answers into topic counters and per-question history.
 *
 * PBQs count as correct at the same 0.8 threshold Results uses for its verdict,
 * so a question does not sit in the review queue over a rounding difference.
 */
export function foldAnswers(p: ExamProgress, entries: AnswerEntry[]): ExamProgress {
  const topics = { ...p.topics }
  const q = { ...(p.q ?? {}) }
  const today = dayNumber()
  for (const e of entries) {
    const s = topics[e.topic] ?? { c: 0, t: 0 }
    topics[e.topic] = { c: s.c + e.frac, t: s.t + 1 }
    if (e.questionId !== undefined) {
      const key = String(e.questionId)
      q[key] = applyAnswer(q[key], e.frac >= 0.8, today)
    }
  }
  return { ...p, topics, q }
}
