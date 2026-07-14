import { createContext, useContext, useMemo, useState, useCallback } from "react"
import {
  blankProgress,
  createLocalStorage,
  validateProgressAll,
  type ExamProgress,
  type ExamRecord,
  type ProgressAll,
  type SessionRecord,
} from "@/lib/progress"

export interface ProgressStore {
  all: ProgressAll
  storageAvailable: boolean
  get(examId: string): ExamProgress
  recordResult(examId: string, topic: string, frac: number): void
  markSeen(examId: string, questionId: number): void
  recordExam(examId: string, rec: ExamRecord): void
  logSession(examId: string, s: SessionRecord): void
  resetExam(examId: string): void
  exportJson(): string
  importJson(json: string): void
}

export function useProgressStore(): ProgressStore {
  const storage = useMemo(createLocalStorage, [])
  const [all, setAll] = useState<ProgressAll>(() => storage.loadAll())

  const update = useCallback(
    (examId: string, fn: (p: ExamProgress) => ExamProgress) => {
      setAll((prev) => {
        const next = { ...prev, [examId]: fn(prev[examId] ?? blankProgress()) }
        storage.saveAll(next)
        return next
      })
    },
    [storage],
  )

  return {
    all,
    storageAvailable: storage.available,
    get: (examId) => all[examId] ?? blankProgress(),
    recordResult: (examId, topic, frac) =>
      update(examId, (p) => {
        const s = p.topics[topic] ?? { c: 0, t: 0 }
        return { ...p, topics: { ...p.topics, [topic]: { c: s.c + frac, t: s.t + 1 } } }
      }),
    markSeen: (examId, qid) =>
      update(examId, (p) => ({ ...p, seen: { ...p.seen, [qid]: (p.seen[qid] ?? 0) + 1 } })),
    recordExam: (examId, rec) => update(examId, (p) => ({ ...p, exams: [...p.exams, rec] })),
    logSession: (examId, s) =>
      update(examId, (p) => ({ ...p, sessions: [...(p.sessions ?? []), s] })),
    resetExam: (examId) =>
      setAll((prev) => {
        const next = { ...prev }
        delete next[examId]
        storage.saveAll(next)
        return next
      }),
    exportJson: () => JSON.stringify(all, null, 1),
    importJson: (json) => {
      const data = validateProgressAll(JSON.parse(json))
      storage.saveAll(data)
      setAll(data)
    },
  }
}

export const ProgressContext = createContext<ProgressStore | null>(null)

export function useProgress(): ProgressStore {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error("useProgress outside provider")
  return ctx
}
