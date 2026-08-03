import { createContext, useContext, useEffect, useMemo, useRef, useState, useCallback } from "react"
import {
  blankProgress,
  createLocalStorage,
  validateProgressAll,
  type ExamProgress,
  type ExamRecord,
  type ProgressAll,
  type SessionRecord,
} from "@/lib/progress"
import { foldAnswers, type AnswerEntry } from "@/lib/answers"
import { fetchCloud, mergeCloudLocal, pushExam, UPDATED_AT_KEY, type UpdatedAtMap } from "@/lib/sync"
import { useSession } from "@/lib/auth-client"

export type SyncStatus = "local" | "syncing" | "synced" | "error"

export type { AnswerEntry }

export interface ProgressStore {
  all: ProgressAll
  storageAvailable: boolean
  syncStatus: SyncStatus
  get(examId: string): ExamProgress
  recordResult(examId: string, topic: string, frac: number, questionId?: number): void
  /**
   * Fold a whole batch of answers in ONE update. Finishing a 90-question exam
   * used to call recordResult 90 times, and each one re-serialized the entire
   * progress blob to localStorage.
   */
  recordAnswers(examId: string, entries: AnswerEntry[]): void
  /** Batched for the same reason as recordAnswers: one write per call, not per id. */
  /** View-count a batch of questions in ONE write (a session marks all its items at once). */
  markSeen(examId: string, questionIds: number[]): void
  recordExam(examId: string, rec: ExamRecord): void
  logSession(examId: string, s: SessionRecord): void
  /** Set or clear (null) the user's real exam date, ISO "YYYY-MM-DD". */
  setExamDate(examId: string, date: string | null): void
  /**
   * Commit to a study plan. Writes the date (or clears it) and stamps
   * planStartedOn only if absent, so changing the date later does not reset
   * how long the plan has been running.
   */
  startPlan(examId: string, date: string | null): void
  /** End a plan: drops the date and the start stamp. Progress is untouched. */
  clearPlan(examId: string): void
  /** Manual "I passed the real exam" milestone; never inferred from practice. */
  setPassed(examId: string, passed: boolean): void
  resetExam(examId: string): void
  exportJson(): string
  importJson(json: string): void
}

function loadUpdatedAt(): UpdatedAtMap {
  try {
    return JSON.parse(localStorage.getItem(UPDATED_AT_KEY) ?? "{}")
  } catch {
    return {}
  }
}

function saveUpdatedAt(m: UpdatedAtMap) {
  try {
    localStorage.setItem(UPDATED_AT_KEY, JSON.stringify(m))
  } catch {
    /* in-memory only */
  }
}

export function useProgressStore(): ProgressStore {
  const storage = useMemo(createLocalStorage, [])
  const [all, setAll] = useState<ProgressAll>(() => storage.loadAll())
  const [syncStatus, setSyncStatus] = useState<SyncStatus>("local")
  const updatedAtRef = useRef<UpdatedAtMap>(loadUpdatedAt())
  const dirtyRef = useRef<Set<string>>(new Set())
  const pushTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { data: session } = useSession()
  const signedIn = !!session?.user

  const flushDirty = useCallback(
    (current: ProgressAll) => {
      if (!signedIn || dirtyRef.current.size === 0) return
      const ids = [...dirtyRef.current]
      dirtyRef.current.clear()
      setSyncStatus("syncing")
      Promise.all(
        ids.map((id) => {
          const t = updatedAtRef.current[id] ?? Date.now()
          return current[id] ? pushExam(id, current[id], t) : Promise.resolve()
        }),
      )
        .then(() => setSyncStatus("synced"))
        .catch(() => {
          ids.forEach((id) => dirtyRef.current.add(id))
          setSyncStatus("error")
        })
    },
    [signedIn],
  )

  const update = useCallback(
    (examId: string, fn: (p: ExamProgress) => ExamProgress) => {
      setAll((prev) => {
        const next = { ...prev, [examId]: fn(prev[examId] ?? blankProgress()) }
        storage.saveAll(next)
        updatedAtRef.current[examId] = Date.now()
        saveUpdatedAt(updatedAtRef.current)
        dirtyRef.current.add(examId)
        if (pushTimer.current) clearTimeout(pushTimer.current)
        pushTimer.current = setTimeout(() => flushDirty(next), 2000)
        return next
      })
    },
    [storage, flushDirty],
  )

  // On sign-in: pull cloud, merge, upload local-newer exams.
  useEffect(() => {
    if (!signedIn) {
      setSyncStatus("local")
      return
    }
    let cancelled = false
    setSyncStatus("syncing")
    ;(async () => {
      try {
        const cloud = await fetchCloud()
        if (cancelled || cloud === null) return
        setAll((local) => {
          const { merged, mergedUpdatedAt, toUpload } = mergeCloudLocal(local, updatedAtRef.current, cloud)
          updatedAtRef.current = mergedUpdatedAt
          saveUpdatedAt(mergedUpdatedAt)
          storage.saveAll(merged)
          Promise.all(
            toUpload.map((id) => pushExam(id, merged[id], mergedUpdatedAt[id] ?? Date.now())),
          )
            .then(() => !cancelled && setSyncStatus("synced"))
            .catch(() => !cancelled && setSyncStatus("error"))
          if (toUpload.length === 0) setSyncStatus("synced")
          return merged
        })
      } catch {
        if (!cancelled) setSyncStatus("error")
      }
    })()
    return () => {
      cancelled = true
    }
  }, [signedIn, storage])

  // flush pending pushes on tab close
  useEffect(() => {
    const flush = () => {
      if (pushTimer.current) clearTimeout(pushTimer.current)
      // best-effort; keepalive not guaranteed but cheap
      setAll((current) => {
        flushDirty(current)
        return current
      })
    }
    window.addEventListener("pagehide", flush)
    return () => window.removeEventListener("pagehide", flush)
  }, [flushDirty])

  return {
    all,
    storageAvailable: storage.available,
    syncStatus: signedIn ? syncStatus : "local",
    get: (examId) => all[examId] ?? blankProgress(),
    recordResult: (examId, topic, frac, questionId) =>
      update(examId, (p) => foldAnswers(p, [{ topic, frac, questionId }])),
    recordAnswers: (examId, entries) =>
      entries.length ? update(examId, (p) => foldAnswers(p, entries)) : undefined,
    markSeen: (examId, ids) =>
      ids.length
        ? update(examId, (p) => {
            const seen = { ...p.seen }
            for (const id of ids) seen[id] = (seen[id] ?? 0) + 1
            return { ...p, seen }
          })
        : undefined,
    recordExam: (examId, rec) => update(examId, (p) => ({ ...p, exams: [...p.exams, rec] })),
    logSession: (examId, s) =>
      update(examId, (p) => ({ ...p, sessions: [...(p.sessions ?? []), s] })),
    setExamDate: (examId, date) =>
      update(examId, (p) => {
        if (date) return { ...p, examDate: date }
        const { examDate: _drop, ...rest } = p
        return rest as ExamProgress
      }),
    startPlan: (examId, date) =>
      update(examId, (p) => {
        const startedOn = p.planStartedOn ?? new Date().toISOString().slice(0, 10)
        if (date) return { ...p, examDate: date, planStartedOn: startedOn }
        const { examDate: _drop, ...rest } = p
        return { ...rest, planStartedOn: startedOn } as ExamProgress
      }),
    clearPlan: (examId) =>
      update(examId, (p) => {
        const { examDate: _d, planStartedOn: _s, ...rest } = p
        return rest as ExamProgress
      }),
    setPassed: (examId, passed) =>
      update(examId, (p) => {
        if (passed) return { ...p, passed: true, passedOn: new Date().toISOString().slice(0, 10) }
        const { passed: _p, passedOn: _po, ...rest } = p
        return rest as ExamProgress
      }),
    resetExam: (examId) =>
      setAll((prev) => {
        const next = { ...prev }
        delete next[examId]
        storage.saveAll(next)
        updatedAtRef.current[examId] = Date.now()
        saveUpdatedAt(updatedAtRef.current)
        if (signedIn) {
          pushExam(examId, blankProgress(), updatedAtRef.current[examId]).catch(() => setSyncStatus("error"))
        }
        return next
      }),
    exportJson: () => JSON.stringify(all, null, 1),
    importJson: (json) => {
      const data = validateProgressAll(JSON.parse(json))
      storage.saveAll(data)
      const now = Date.now()
      for (const id of Object.keys(data)) {
        updatedAtRef.current[id] = now
        dirtyRef.current.add(id)
      }
      saveUpdatedAt(updatedAtRef.current)
      setAll(data)
      if (pushTimer.current) clearTimeout(pushTimer.current)
      pushTimer.current = setTimeout(() => flushDirty(data), 500)
    },
  }
}

export const ProgressContext = createContext<ProgressStore | null>(null)

export function useProgress(): ProgressStore {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error("useProgress outside provider")
  return ctx
}
