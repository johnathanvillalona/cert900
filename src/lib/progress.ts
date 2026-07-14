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

export interface ExamProgress {
  topics: Record<string, TopicStat>
  exams: ExamRecord[]
  seen: Record<string, number>
  sessions?: SessionRecord[]
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
