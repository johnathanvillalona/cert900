import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import { AppState } from "react-native"
import { blankProgress, type ExamProgress, type ProgressAll } from "@/lib/progress"
import { mergeCloudLocal, type UpdatedAtMap } from "@/lib/sync"
import { fetchCloud, pushExam } from "./api"
import { loadAll, loadUpdatedAt, saveAll, saveUpdatedAt } from "./storage"
import { useSession } from "./auth"

export type SyncStatus = "local" | "syncing" | "synced" | "error"

export interface ProgressStore {
  all: ProgressAll
  ready: boolean
  syncStatus: SyncStatus
  get(examId: string): ExamProgress
  recordResult(examId: string, topic: string, frac: number): void
  markSeen(examId: string, questionId: number): void
}

// Direct port of the web useProgressStore (src/hooks/useProgress.ts): same merge
// rules, same 2s debounce + dirty-set discipline, same sign-in pull/merge/upload.
// Differences: async AsyncStorage load at startup, and AppState (not pagehide)
// drives the flush-on-background.
export function useProgressStore(): ProgressStore {
  const [all, setAll] = useState<ProgressAll>({})
  const [ready, setReady] = useState(false)
  const [syncStatus, setSyncStatus] = useState<SyncStatus>("local")
  const updatedAtRef = useRef<UpdatedAtMap>({})
  const dirtyRef = useRef<Set<string>>(new Set())
  const pushTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { data: session } = useSession()
  const signedIn = !!session?.user

  // Initial load from the device (async, unlike the web's synchronous read).
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const [a, u] = await Promise.all([loadAll(), loadUpdatedAt()])
      if (cancelled) return
      updatedAtRef.current = u
      setAll(a)
      setReady(true)
    })()
    return () => {
      cancelled = true
    }
  }, [])

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
        saveAll(next)
        updatedAtRef.current[examId] = Date.now()
        saveUpdatedAt(updatedAtRef.current)
        dirtyRef.current.add(examId)
        if (pushTimer.current) clearTimeout(pushTimer.current)
        pushTimer.current = setTimeout(() => flushDirty(next), 2000)
        return next
      })
    },
    [flushDirty],
  )

  // On sign-in (after the initial load): pull cloud, merge, upload local-newer.
  useEffect(() => {
    if (!ready) return
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
          saveAll(merged)
          Promise.all(toUpload.map((id) => pushExam(id, merged[id], mergedUpdatedAt[id] ?? Date.now())))
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
  }, [signedIn, ready])

  // Flush pending pushes when the app leaves the foreground.
  useEffect(() => {
    const sub = AppState.addEventListener("change", (state) => {
      if (state !== "active") {
        if (pushTimer.current) clearTimeout(pushTimer.current)
        setAll((current) => {
          flushDirty(current)
          return current
        })
      }
    })
    return () => sub.remove()
  }, [flushDirty])

  return {
    all,
    ready,
    syncStatus: signedIn ? syncStatus : "local",
    get: (examId) => all[examId] ?? blankProgress(),
    recordResult: (examId, topic, frac) =>
      update(examId, (p) => {
        const s = p.topics[topic] ?? { c: 0, t: 0 }
        return { ...p, topics: { ...p.topics, [topic]: { c: s.c + frac, t: s.t + 1 } } }
      }),
    markSeen: (examId, qid) =>
      update(examId, (p) => ({ ...p, seen: { ...p.seen, [qid]: (p.seen[qid] ?? 0) + 1 } })),
  }
}

export const ProgressContext = createContext<ProgressStore | null>(null)

export function useProgress(): ProgressStore {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error("useProgress outside provider")
  return ctx
}
