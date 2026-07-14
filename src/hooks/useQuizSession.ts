import { useEffect, useMemo, useReducer } from "react"
import type { ExamDef, PBQ, Question } from "@/data/types"
import { pbqScore, pickExamMC, pickExamPBQs, pickMC, scaledScore, shuffle } from "@/lib/engine"
import type { ExamProgress } from "@/lib/progress"

export type QuizMode = "practice" | "exam" | "pbq"

export type QuizItem =
  | { kind: "mc"; q: Question; optOrder: number[] }
  | { kind: "pbq"; p: PBQ }

/** MC answer: option index. PBQ match: choices per item (-1 unset). PBQ order: permutation. */
export type Answer = number | number[]

export interface QuizConfig {
  mode: QuizMode
  n?: number
  focusWeak?: boolean
  domain?: number
}

interface State {
  items: QuizItem[]
  idx: number
  answers: Record<number, Answer>
  graded: Record<number, number> // fraction correct (practice/pbq modes)
  flags: Set<number>
  remaining: number // seconds; -1 = untimed
  finished: boolean
}

type Action =
  | { type: "answer-mc"; oi: number; grade: boolean }
  | { type: "set-match"; itemIdx: number; choice: number }
  | { type: "move-step"; pos: number; dir: -1 | 1 }
  | { type: "grade-pbq" }
  | { type: "nav"; to: number }
  | { type: "toggle-flag" }
  | { type: "tick" }
  | { type: "finish" }

export interface MCReviewEntry {
  kind: "mc"
  q: Question
  sel: number | undefined
  ok: boolean
}
export interface PBQReviewEntry {
  kind: "pbq"
  p: PBQ
  frac: number
  ok: boolean
}
export type ReviewEntry = MCReviewEntry | PBQReviewEntry

export interface ExamOutcome {
  mode: "exam"
  scaled: number
  pass: boolean
  pct: number
  timeUp: boolean
  domainScores: Record<number, { pts: number; max: number }>
  review: ReviewEntry[]
}
export interface PracticeOutcome {
  mode: "practice" | "pbq"
  review: ReviewEntry[]
}
export type QuizOutcome = ExamOutcome | PracticeOutcome

function buildItems(exam: ExamDef, progress: ExamProgress, cfg: QuizConfig): QuizItem[] {
  if (cfg.mode === "exam") {
    const pbqs = pickExamPBQs(exam).map((p): QuizItem => ({ kind: "pbq", p }))
    const mcs = pickExamMC(exam, progress).map(
      (q): QuizItem => ({ kind: "mc", q, optOrder: shuffle(q.o.map((_, i) => i)) }),
    )
    return [...pbqs, ...mcs]
  }
  if (cfg.mode === "pbq") {
    return shuffle(exam.pbqs).map((p): QuizItem => ({ kind: "pbq", p }))
  }
  return pickMC(exam, progress, cfg.n ?? 10, { focusWeak: cfg.focusWeak, domain: cfg.domain }).map(
    (q): QuizItem => ({ kind: "mc", q, optOrder: shuffle(q.o.map((_, i) => i)) }),
  )
}

function initialAnswerFor(item: QuizItem): Answer | undefined {
  if (item.kind === "pbq") {
    if (item.p.kind === "match") return item.p.items.map(() => -1)
    return shuffle(item.p.steps.map((_, i) => i))
  }
  return undefined
}

function reducer(state: State, action: Action): State {
  const { idx } = state
  switch (action.type) {
    case "answer-mc": {
      if (state.graded[idx] !== undefined) return state
      const item = state.items[idx]
      if (item.kind !== "mc") return state
      const graded = action.grade
        ? { ...state.graded, [idx]: action.oi === item.q.a ? 1 : 0 }
        : state.graded
      return { ...state, answers: { ...state.answers, [idx]: action.oi }, graded }
    }
    case "set-match": {
      const cur = (state.answers[idx] as number[]).slice()
      cur[action.itemIdx] = action.choice
      return { ...state, answers: { ...state.answers, [idx]: cur } }
    }
    case "move-step": {
      const ord = (state.answers[idx] as number[]).slice()
      const np = action.pos + action.dir
      if (np < 0 || np >= ord.length) return state
      ;[ord[action.pos], ord[np]] = [ord[np], ord[action.pos]]
      return { ...state, answers: { ...state.answers, [idx]: ord } }
    }
    case "grade-pbq": {
      const item = state.items[idx]
      if (item.kind !== "pbq") return state
      const frac = pbqScore(item.p, state.answers[idx] as number[])
      return { ...state, graded: { ...state.graded, [idx]: frac } }
    }
    case "nav": {
      const to = Math.min(Math.max(action.to, 0), state.items.length - 1)
      return { ...state, idx: to }
    }
    case "toggle-flag": {
      const flags = new Set(state.flags)
      if (flags.has(idx)) flags.delete(idx)
      else flags.add(idx)
      return { ...state, flags }
    }
    case "tick": {
      if (state.remaining <= 0) return state
      const remaining = state.remaining - 1
      return { ...state, remaining, finished: remaining <= 0 ? true : state.finished }
    }
    case "finish":
      return { ...state, finished: true }
    default:
      return state
  }
}

export interface QuizSession {
  items: QuizItem[]
  idx: number
  item: QuizItem
  answers: Record<number, Answer>
  graded: Record<number, number>
  flags: Set<number>
  remaining: number
  finished: boolean
  gradePractice(oi: number): void
  setMatch(itemIdx: number, choice: number): void
  moveStep(pos: number, dir: -1 | 1): void
  gradePbq(): void
  nav(delta: number): void
  jump(to: number): void
  toggleFlag(): void
  finish(): void
  unansweredCount(): number
  outcome(): QuizOutcome
}

export function useQuizSession(
  exam: ExamDef,
  progress: ExamProgress,
  cfg: QuizConfig,
  callbacks: {
    onResult: (topic: string, frac: number) => void
    onSeen: (questionId: number) => void
  },
): QuizSession {
  // Build once per mount; progress intentionally sampled at start.
  const initial = useMemo<State>(() => {
    const items = buildItems(exam, progress, cfg)
    const answers: Record<number, Answer> = {}
    items.forEach((it, i) => {
      const a = initialAnswerFor(it)
      if (a !== undefined) answers[i] = a
    })
    return {
      items,
      idx: 0,
      answers,
      graded: {},
      flags: new Set(),
      remaining: cfg.mode === "exam" ? exam.examMinutes * 60 : -1,
      finished: false,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [state, dispatch] = useReducer(reducer, initial)

  // mark questions seen once at session start
  useEffect(() => {
    initial.items.forEach((it) => {
      if (it.kind === "mc") callbacks.onSeen(it.q.id)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // exam timer
  useEffect(() => {
    if (cfg.mode !== "exam" || state.finished) return
    const id = setInterval(() => dispatch({ type: "tick" }), 1000)
    return () => clearInterval(id)
  }, [cfg.mode, state.finished])

  return {
    ...state,
    item: state.items[state.idx],
    gradePractice(oi: number) {
      const item = state.items[state.idx]
      if (item.kind !== "mc" || state.graded[state.idx] !== undefined) return
      dispatch({ type: "answer-mc", oi, grade: cfg.mode === "practice" })
      if (cfg.mode === "practice") {
        callbacks.onResult(item.q.t, oi === item.q.a ? 1 : 0)
      }
    },
    setMatch: (itemIdx, choice) => dispatch({ type: "set-match", itemIdx, choice }),
    moveStep: (pos, dir) => dispatch({ type: "move-step", pos, dir }),
    gradePbq() {
      const item = state.items[state.idx]
      if (item.kind !== "pbq" || state.graded[state.idx] !== undefined) return
      const frac = pbqScore(item.p, state.answers[state.idx] as number[])
      dispatch({ type: "grade-pbq" })
      callbacks.onResult(item.p.t, frac)
    },
    nav: (delta) => dispatch({ type: "nav", to: state.idx + delta }),
    jump: (to) => dispatch({ type: "nav", to }),
    toggleFlag: () => dispatch({ type: "toggle-flag" }),
    finish: () => dispatch({ type: "finish" }),
    unansweredCount() {
      return state.items.filter((it, i) => {
        const a = state.answers[i]
        if (a === undefined) return true
        if (it.kind === "pbq" && it.p.kind === "match") return (a as number[]).some((x) => x === -1)
        return false
      }).length
    },
    outcome(): QuizOutcome {
      if (cfg.mode !== "exam") {
        const review: ReviewEntry[] = state.items
          .map((it, i): ReviewEntry | null => {
            if (state.graded[i] === undefined) return null
            if (it.kind === "mc")
              return { kind: "mc", q: it.q, sel: state.answers[i] as number, ok: state.graded[i] === 1 }
            return { kind: "pbq", p: it.p, frac: state.graded[i], ok: state.graded[i] >= 0.8 }
          })
          .filter((x): x is ReviewEntry => x !== null)
        return { mode: cfg.mode, review }
      }
      let pts = 0
      let max = 0
      const domainScores: Record<number, { pts: number; max: number }> = {}
      for (const d of Object.keys(exam.domains).map(Number)) domainScores[d] = { pts: 0, max: 0 }
      const review: ReviewEntry[] = state.items.map((it, i): ReviewEntry => {
        if (it.kind === "mc") {
          const sel = state.answers[i] as number | undefined
          const ok = sel === it.q.a ? 1 : 0
          pts += ok
          max += 1
          domainScores[it.q.d].pts += ok
          domainScores[it.q.d].max += 1
          return { kind: "mc", q: it.q, sel, ok: ok === 1 }
        }
        const frac = pbqScore(it.p, state.answers[i] as number[])
        const d = exam.videos[it.p.t].d
        pts += frac * 2
        max += 2
        domainScores[d].pts += frac * 2
        domainScores[d].max += 2
        return { kind: "pbq", p: it.p, frac, ok: frac >= 0.8 }
      })
      const pct = max ? pts / max : 0
      const { scaled, pass } = scaledScore(pct)
      return { mode: "exam", scaled, pass, pct, timeUp: state.remaining === 0, domainScores, review }
    },
  }
}
