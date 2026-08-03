/** Progress persistence. SAME localStorage key and shape as the legacy app so
 * existing users keep their progress across the v2 cutover. */

export interface TopicStat {
  /** correct (fractional for PBQs) */
  c: number
  /** attempts */
  t: number
}

export interface ExamRecord {
  date: string
  scaled: number
  pct: number
}

/** Additive v2 field powering dashboard trends; absent in legacy data. */
export interface SessionRecord {
  date: string
  mode: "practice" | "exam" | "pbq"
  n: number
  correct: number
}

/**
 * Per-question history. Additive optional v3 field, absent from every blob
 * written before it shipped; `sessions?` is the precedent.
 *
 * A fixed tuple rather than an object because this syncs: JSON repeats every
 * key NAME per entry, so positions cost that once instead of per question
 * (~20 bytes vs ~36). The largest bank is 345 questions, so a fully swept exam
 * costs ~7KB against the worker's 512KB per-exam cap.
 *
 *   [0] right    cumulative correct
 *   [1] wrong    cumulative incorrect
 *   [2] lastDay  UTC day index of the last graded answer
 *   [3] box      Leitner box 1..5 (5 = retired)
 *
 * Readers must tolerate short tuples (`s[3] ?? 1`) so a fifth slot can be
 * appended later without a migration.
 */
export type QStat = [right: number, wrong: number, lastDay: number, box: number]

export interface ExamProgress {
  topics: Record<string, TopicStat>
  exams: ExamRecord[]
  seen: Record<string, number>
  sessions?: SessionRecord[]
  /** key = String(Question["id"]). MC only; PBQs are keyed by title, not id. */
  q?: Record<string, QStat>
  /**
   * Additive optional v4 fields (same contract as `sessions?`/`q?`: absent in
   * older blobs, presence-checked nowhere, survive sync untouched).
   *
   * examDate: the user's REAL exam date as an ISO "YYYY-MM-DD" — powers the
   * countdown on the exam home. passed/passedOn: a manual milestone the user
   * sets after passing the real exam; never inferred from practice scores.
   *
   * planStartedOn: the day a study plan was committed to, ISO "YYYY-MM-DD".
   * Set once and kept across date changes, so "started 3 weeks ago" stays
   * true. It exists because a plan built WITHOUT a date would otherwise leave
   * no trace at all — examDate alone cannot answer "do I have a plan?".
   */
  examDate?: string
  passed?: boolean
  passedOn?: string
  planStartedOn?: string
}

/** UTC day index. Same epoch arithmetic qotd.ts uses for the daily rotation. */
export const dayNumber = (t = Date.now()): number => Math.floor(t / 86_400_000)

/** "YYYY-MM-DD" -> UTC day index; NaN for junk input. */
export const dateToDay = (iso: string): number => Math.floor(Date.parse(`${iso}T00:00:00Z`) / 86_400_000)

/**
 * Countdown copy for the exam-date widget, shared by web Home and mobile
 * ExamHomeScreen so the phrasing can't drift; null when the date is unparsable.
 */
export function countdownCopy(iso: string, today: number): string | null {
  const target = dateToDay(iso)
  if (!Number.isFinite(target)) return null
  const delta = target - today
  if (delta > 1) return `${delta} days to go`
  if (delta === 1) return "Tomorrow. You have got this."
  if (delta === 0) return "Exam day is today. Go get it."
  return delta === -1 ? "Was yesterday" : `Was ${-delta} days ago`
}

export type ProgressAll = Record<string, ExamProgress>

export const STORE_KEY = "comptia-trainer-v1"
const LEGACY_SINGLE_EXAM_KEY = "aplus1202-progress-v1"

export function blankProgress(): ExamProgress {
  return { topics: {}, exams: [], seen: {} }
}

export interface Storage {
  available: boolean
  loadAll(): ProgressAll
  saveAll(all: ProgressAll): void
  clearExam(all: ProgressAll, examId: string): ProgressAll
}

function isExamProgress(p: unknown): p is ExamProgress {
  if (!p || typeof p !== "object" || Array.isArray(p)) return false
  const o = p as Record<string, unknown>
  return typeof o.topics === "object" && o.topics !== null && Array.isArray(o.exams) && typeof o.seen === "object" && o.seen !== null
}

export function validateProgressAll(data: unknown): ProgressAll {
  if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("not an object")
  for (const v of Object.values(data as Record<string, unknown>)) {
    if (!isExamProgress(v)) throw new Error("bad exam progress shape")
  }
  return data as ProgressAll
}

export function createLocalStorage(): Storage {
  let available = true
  try {
    localStorage.setItem("__t", "1")
    localStorage.removeItem("__t")
  } catch {
    available = false
  }

  return {
    available,
    loadAll(): ProgressAll {
      if (!available) return {}
      try {
        const raw = localStorage.getItem(STORE_KEY)
        if (raw) return validateProgressAll(JSON.parse(raw))
        // one-time migration from the original single-exam app
        const legacy = localStorage.getItem(LEGACY_SINGLE_EXAM_KEY)
        if (legacy) {
          const p = JSON.parse(legacy)
          if (isExamProgress(p)) {
            const all: ProgressAll = { "220-1202": p }
            localStorage.setItem(STORE_KEY, JSON.stringify(all))
            return all
          }
        }
      } catch {
        /* corrupted or unavailable — start fresh in memory */
      }
      return {}
    },
    saveAll(all: ProgressAll) {
      if (!available) return
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(all))
      } catch {
        /* quota/unavailable — keep going in memory */
      }
    },
    clearExam(all: ProgressAll, examId: string): ProgressAll {
      const next = { ...all }
      delete next[examId]
      this.saveAll(next)
      return next
    },
  }
}
