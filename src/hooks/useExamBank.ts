import { useEffect, useState } from "react"
import type { ExamDef } from "@/data/types"
import { loadBank, peekBank } from "@/data/banks"

/**
 * Loads one exam's questions/PBQs on demand.
 *
 * Deliberately an explicit hook rather than React 19 `use()` + Suspense: App
 * already navigates inside `startTransition`, and React suppresses Suspense
 * fallbacks during a transition — so a `use()` boundary would leave the old
 * screen frozen with no feedback while the chunk downloads. Owning the loading
 * state keeps that visible and testable.
 *
 * `peekBank` short-circuits an already-cached bank so revisiting an exam never
 * flashes a spinner.
 */
export function useExamBank(examId: string | null): {
  exam: ExamDef | null
  loading: boolean
  error: Error | null
  retry: () => void
} {
  const [exam, setExam] = useState<ExamDef | null>(() => (examId ? (peekBank(examId) ?? null) : null))
  const [error, setError] = useState<Error | null>(null)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    if (!examId) {
      setExam(null)
      setError(null)
      return
    }
    const cached = peekBank(examId)
    if (cached) {
      setExam(cached)
      setError(null)
      return
    }
    // Guard the async result: switching exams mid-flight must not let a slow
    // earlier load overwrite the newer one.
    let live = true
    setExam(null)
    setError(null)
    loadBank(examId)
      .then((e) => live && setExam(e))
      .catch((err) => live && setError(err instanceof Error ? err : new Error(String(err))))
    return () => {
      live = false
    }
  }, [examId, attempt])

  return {
    exam,
    loading: !!examId && !exam && !error,
    error,
    retry: () => setAttempt((a) => a + 1),
  }
}
