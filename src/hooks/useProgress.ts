import { createContext, useContext, useEffect, useMemo, useRef, useState, useCallback } from "react"
import {
  blankProgress,
  createLocalStorage,
  dayNumber,
  validateProgressAll,
  type ExamProgress,
  type ExamRecord,
  type ProgressAll,
  type SessionRecord,
} from "@/lib/progress"
import { applyAnswer } from "@/lib/review"
import { fetchCloud, mergeCloudLocal, pushExam, UPDATED_AT_KEY, type UpdatedAtMap } from "@/lib/sync"
import { useSession } from "@/lib/auth-client"

export type SyncStatus = "local" | "syncing" | "synced" | "error"

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
function foldAnswers(p: ExamProgress, entries: AnswerEntry[]): ExamProgress {
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
  markSeen(examId: string, questionId: number): void
  recordExam(examId: string, rec: ExamRecord): void
  logSession(examId: string, s: SessionRecord): void
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
