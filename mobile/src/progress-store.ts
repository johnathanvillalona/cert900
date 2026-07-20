import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import { AppState } from "react-native"
import {
  blankProgress,
  type ExamProgress,
  type ExamRecord,
  type ProgressAll,
  type SessionRecord,
} from "@/lib/progress"
import { foldAnswers, type AnswerEntry } from "@/lib/answers"
import { mergeCloudLocal, type UpdatedAtMap } from "@/lib/sync"
import { fetchCloud, pushExam, SyncAuthError } from "./api"
import { clearLocal, loadAll, loadUpdatedAt, saveAll, saveUpdatedAt } from "./storage"
import { useSession } from "./auth"

/**
 * "stale" is mobile-only: the cloud rejected our cookie (401) while the Better
 * Auth session cache still reads as signed in, so the account menu looks fine
 * and nothing syncs. The web has no equivalent because a browser reload
 * re-checks the session; a phone can sit signed-in-but-rejected for days.
 */
export type SyncStatus = "local" | "syncing" | "synced" | "error" | "stale"

export type { AnswerEntry }

/** A foregrounded app re-pulls at most this often. */
const PULL_THROTTLE_MS = 60_000

export interface ProgressStore {
  all: ProgressAll
  ready: boolean
  syncStatus: SyncStatus
  get(examId: string): ExamProgress
  recordResult(examId: string, topic: string, frac: number, questionId?: number): void
  /** Fold a whole batch in ONE update, so finishing an exam writes storage once. */
  recordAnswers(examId: string, entries: AnswerEntry[]): void
  markSeen(examId: string, questionIds: number[]): void
  recordExam(examId: string, rec: ExamRecord): void
  logSession(examId: string, s: SessionRecord): void
  resetExam(examId: string): void
  /** Wipe every exam from this device. Local only: never pushed to the cloud. */
  clearDevice(): void
}

// Direct port of the web useProgressStore (src/hooks/useProgress.ts): same merge
// rules, same 2s debounce + dirty-set discipline, same sign-in pull/merge/upload,
// and the same shared foldAnswers so per-question Leitner history is written
// identically on both platforms. Differences: async AsyncStorage load at startup,
// AppState (not pagehide) drives the flush-on-background, and AppState -> active
// re-pulls because a phone session outlives any tab reload.
export function useProgressStore(): ProgressStore {
  const [all, setAll] = useState<ProgressAll>({})
  const [ready, setReady] = useState(false)
  const [syncStatus, setSyncStatus] = useState<SyncStatus>("local")
  const updatedAtRef = useRef<UpdatedAtMap>({})
  const dirtyRef = useRef<Set<string>>(new Set())
  const pushTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastPullRef = useRef(0)
  // Bumped to invalidate an in-flight pull (sign-out, unmount, or a newer pull).
  const pullSeq = useRef(0)
  const { data: session } = useSession()
  const signedIn = !!session?.user

  // Initial load from the device (async, unlike the web's synchronous read).
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const [a, u] = await Promise.all([loadAll(), loadUpdatedAt()])
      if (cancelled) return
      // Fold the loaded blob UNDER anything already written. A non-functional
      // setAll(a) here would silently discard a write that landed before the
      // async load resolved, and its saveAll() would already have clobbered
      // that exam's on-disk row. In-memory writes are newer, so they win.
      updatedAtRef.current = { ...u, ...updatedAtRef.current }
      setAll((cur) => ({ ...a, ...cur }))
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
        .catch((e) => {
          ids.forEach((id) => dirtyRef.current.add(id))
          setSyncStatus(e instanceof SyncAuthError ? "stale" : "error")
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

  // Pull cloud, merge, upload local-newer exams. Shared by the sign-in effect and
  // the foreground re-pull so both paths cannot drift.
  const pullCloud = useCallback(async () => {
    if (!signedIn) return
    const seq = ++pullSeq.current
    const live = () => seq === pullSeq.current
    lastPullRef.current = Date.now()
    setSyncStatus("syncing")
    try {
      const cloud = await fetchCloud()
      if (!live()) return
      // 401. Surfaced rather than swallowed: the session cache still says
      // signed in, so a silent skip here looks exactly like a working sync.
      if (cloud === null) {
        setSyncStatus("stale")
        return
      }
      setAll((local) => {
        const { merged, mergedUpdatedAt, toUpload } = mergeCloudLocal(local, updatedAtRef.current, cloud)
        updatedAtRef.current = mergedUpdatedAt
        saveUpdatedAt(mergedUpdatedAt)
        saveAll(merged)
        Promise.all(toUpload.map((id) => pushExam(id, merged[id], mergedUpdatedAt[id] ?? Date.now())))
          .then(() => live() && setSyncStatus("synced"))
          .catch((e) => live() && setSyncStatus(e instanceof SyncAuthError ? "stale" : "error"))
        if (toUpload.length === 0) setSyncStatus("synced")
        return merged
      })
    } catch {
      if (live()) setSyncStatus("error")
    }
  }, [signedIn])

  // On sign-in (after the initial load): pull, merge, upload.
  useEffect(() => {
    if (!ready) return
    if (!signedIn) {
      pullSeq.current++
      setSyncStatus("local")
      return
    }
    void pullCloud()
    return () => {
      pullSeq.current++
    }
  }, [signedIn, ready, pullCloud])

  useEffect(() => {
    const sub = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        // The web re-pulls implicitly on every tab load. A phone app can stay
        // mounted for days, so without this it never sees desk-side answers.
        if (signedIn && Date.now() - lastPullRef.current >= PULL_THROTTLE_MS) void pullCloud()
        return
      }
      // Leaving the foreground: flush anything the 2s debounce still owes.
      if (pushTimer.current) clearTimeout(pushTimer.current)
      setAll((current) => {
        flushDirty(current)
        return current
      })
    })
    return () => sub.remove()
  }, [flushDirty, pullCloud, signedIn])

  return {
    all,
    ready,
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
    logSession: (examId, s) => update(examId, (p) => ({ ...p, sessions: [...(p.sessions ?? []), s] })),
    resetExam: (examId) =>
      setAll((prev) => {
        const next = { ...prev }
        delete next[examId]
        saveAll(next)
        updatedAtRef.current[examId] = Date.now()
        saveUpdatedAt(updatedAtRef.current)
        if (signedIn) {
          pushExam(examId, blankProgress(), updatedAtRef.current[examId]).catch((e) =>
            setSyncStatus(e instanceof SyncAuthError ? "stale" : "error"),
          )
        }
        return next
      }),
    // Deliberately does NOT push or mark anything dirty. This is the "erase on
    // this device" escape hatch, offered after account deletion (when there is
    // no cloud left to write to) and to users who never signed in.
    clearDevice: () => {
      if (pushTimer.current) clearTimeout(pushTimer.current)
      dirtyRef.current.clear()
      updatedAtRef.current = {}
      void clearLocal()
      setAll({})
    },
  }
}

export const ProgressContext = createContext<ProgressStore | null>(null)

export function useProgress(): ProgressStore {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error("useProgress outside provider")
  return ctx
}
