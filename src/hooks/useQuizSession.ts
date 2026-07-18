import { useEffect, useReducer } from "react"
import type { ExamDef, PBQ, Question } from "@/data/types"
import { mcAnswerBlank, mcCorrect, pbqAnswerBlank, pbqScore, pickExamMC, pickExamPBQs, pickMC, scaledScore, shuffle, type PBQAnswer } from "@/lib/engine"
import type { ExamProgress } from "@/lib/progress"

export type QuizMode = "practice" | "exam" | "pbq"

export type QuizItem =
  | { kind: "mc"; q: Question; optOrder: number[] }
  | { kind: "pbq"; p: PBQ }

/** MC answer: option index (single) or indices (multiple-response). PBQ answers: see PBQAnswer in lib/engine. */
export type Answer = number | number[] | PBQAnswer

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
  | { type: "toggle-mc"; oi: number; max: number }
  | { type: "grade-mc" }
  | { type: "set-match"; itemIdx: number; choice: number }
  | { type: "set-terminal"; taskIdx: number; command: string }
  | { type: "set-config-field"; fieldIdx: number; value: number | boolean | string }
  | { type: "toggle-hotspot"; nodeId: string; max: number }
  | { type: "place-item"; zoneId: string | null; itemId: string }
  | { type: "move-step"; pos: number; dir: -1 | 1 }
  | { type: "grade-pbq" }
  | { type: "nav"; to: number }
  | { type: "toggle-flag" }
  | { type: "tick" }
  | { type: "finish" }

export interface MCReviewEntry {
  kind: "mc"
  q: Question
  sel: number | number[] | undefined
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
  // Multiple-response MC starts as an empty selection set.
  if (item.kind === "mc") return item.q.as ? [] : undefined
  if (item.kind !== "pbq") return undefined
  const p = item.p
  switch (p.kind) {
    case "match":
      return p.items.map(() => -1)
    case "order":
      return shuffle(p.steps.map((_, i) => i))
    case "terminal":
      return p.tasks.map(() => "")
    case "config":
      return p.fields.map((f) => (f.type === "select" ? -1 : f.type === "toggle" ? (f.initial ?? false) : ""))
    case "hotspot":
      return [] as string[]
    case "dragconnect":
      return {} as Record<string, string>
  }
}

function reducer(state: State, action: Action): State {
  const { idx } = state
  switch (action.type) {
    case "answer-mc": {
      if (state.graded[idx] !== undefined) return state
      const item = state.items[idx]
      if (item.kind !== "mc" || item.q.as) return state
      const graded = action.grade
        ? { ...state.graded, [idx]: action.oi === item.q.a ? 1 : 0 }
        : state.graded
      return { ...state, answers: { ...state.answers, [idx]: action.oi }, graded }
    }
    case "toggle-mc": {
      if (state.graded[idx] !== undefined) return state
      const item = state.items[idx]
      if (item.kind !== "mc" || !item.q.as) return state
      const cur = ((state.answers[idx] as number[] | undefined) ?? []).slice()
      const at = cur.indexOf(action.oi)
      if (at !== -1) cur.splice(at, 1)
      else if (cur.length < action.max) cur.push(action.oi)
      else return state
      return { ...state, answers: { ...state.answers, [idx]: cur } }
    }
    case "grade-mc": {
      const item = state.items[idx]
      if (item.kind !== "mc" || state.graded[idx] !== undefined) return state
      const ok = mcCorrect(item.q, state.answers[idx] as number[] | undefined)
      return { ...state, graded: { ...state.graded, [idx]: ok ? 1 : 0 } }
    }
    case "set-match": {
      const cur = (state.answers[idx] as number[]).slice()
      cur[action.itemIdx] = action.choice
      return { ...state, answers: { ...state.answers, [idx]: cur } }
    }
    case "set-terminal": {
      const cur = (state.answers[idx] as string[]).slice()
      cur[action.taskIdx] = action.command
      return { ...state, answers: { ...state.answers, [idx]: cur } }
    }
    case "set-config-field": {
      const cur = (state.answers[idx] as (number | boolean | string)[]).slice()
      cur[action.fieldIdx] = action.value
      return { ...state, answers: { ...state.answers, [idx]: cur } }
    }
    case "toggle-hotspot": {
      const cur = (state.answers[idx] as string[]).slice()
      const at = cur.indexOf(action.nodeId)
      if (at !== -1) cur.splice(at, 1)
      else if (cur.length < action.max) cur.push(action.nodeId)
      else return state
      return { ...state, answers: { ...state.answers, [idx]: cur } }
    }
    case "place-item": {
      const cur = { ...(state.answers[idx] as Record<string, string>) }
      // remove the item from any zone it currently occupies
      for (const z of Object.keys(cur)) if (cur[z] === action.itemId) delete cur[z]
      if (action.zoneId) cur[action.zoneId] = action.itemId
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
      const frac = pbqScore(item.p, state.answers[idx] as PBQAnswer)
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
  toggleMulti(oi: number): void
  gradeMulti(): void
  setMatch(itemIdx: number, choice: number): void
  setTerminal(taskIdx: number, command: string): void
  setConfigField(fieldIdx: number, value: number | boolean | string): void
  toggleHotspot(nodeId: string, max: number): void
  placeItem(zoneId: string | null, itemId: string): void
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
  // Build once per mount via the reducer's lazy initializer: unlike useMemo,
  // it is never re-invoked by interrupted concurrent renders, so the shuffle
  // inside buildItems stays out of render. Progress intentionally sampled at start.
  const [state, dispatch] = useReducer(reducer, cfg, (c): State => {
    const items = buildItems(exam, progress, c)
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
      remaining: c.mode === "exam" ? exam.examMinutes * 60 : -1,
      finished: false,
    }
  })

  // mark questions seen once at session start
  useEffect(() => {
    state.items.forEach((it) => {
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
      if (item.kind !== "mc" || item.q.as || state.graded[state.idx] !== undefined) return
      dispatch({ type: "answer-mc", oi, grade: cfg.mode === "practice" })
      if (cfg.mode === "practice") {
        callbacks.onResult(item.q.t, oi === item.q.a ? 1 : 0)
      }
    },
    toggleMulti(oi: number) {
      const item = state.items[state.idx]
      if (item.kind !== "mc" || !item.q.as || state.graded[state.idx] !== undefined) return
      dispatch({ type: "toggle-mc", oi, max: item.q.as.length })
    },
    gradeMulti() {
      const item = state.items[state.idx]
      if (item.kind !== "mc" || !item.q.as || state.graded[state.idx] !== undefined) return
      dispatch({ type: "grade-mc" })
      callbacks.onResult(item.q.t, mcCorrect(item.q, state.answers[state.idx] as number[] | undefined) ? 1 : 0)
    },
    setMatch: (itemIdx, choice) => dispatch({ type: "set-match", itemIdx, choice }),
    setTerminal: (taskIdx, command) => dispatch({ type: "set-terminal", taskIdx, command }),
    setConfigField: (fieldIdx, value) => dispatch({ type: "set-config-field", fieldIdx, value }),
    toggleHotspot: (nodeId, max) => dispatch({ type: "toggle-hotspot", nodeId, max }),
    placeItem: (zoneId, itemId) => dispatch({ type: "place-item", zoneId, itemId }),
    moveStep: (pos, dir) => dispatch({ type: "move-step", pos, dir }),
    gradePbq() {
      const item = state.items[state.idx]
      if (item.kind !== "pbq" || state.graded[state.idx] !== undefined) return
      const frac = pbqScore(item.p, state.answers[state.idx] as PBQAnswer)
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
        if (it.kind === "mc") return mcAnswerBlank(a as number | number[] | undefined)
        if (a === undefined) return true
        return pbqAnswerBlank(it.p, a as PBQAnswer)
      }).length
    },
    outcome(): QuizOutcome {
      if (cfg.mode !== "exam") {
        const review: ReviewEntry[] = state.items
          .map((it, i): ReviewEntry | null => {
            if (state.graded[i] === undefined) return null
            if (it.kind === "mc")
              return { kind: "mc", q: it.q, sel: state.answers[i] as number | number[], ok: state.graded[i] === 1 }
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
          const sel = state.answers[i] as number | number[] | undefined
          const ok = mcCorrect(it.q, sel) ? 1 : 0
          pts += ok
          max += 1
          domainScores[it.q.d].pts += ok
          domainScores[it.q.d].max += 1
          return { kind: "mc", q: it.q, sel, ok: ok === 1 }
        }
        const frac = pbqScore(it.p, state.answers[i] as PBQAnswer)
        const d = exam.videos[it.p.t].d
        pts += frac * 2
        max += 2
        domainScores[d].pts += frac * 2
        domainScores[d].max += 2
        return { kind: "pbq", p: it.p, frac, ok: frac >= 0.8 }
      })
      const pct = max ? pts / max : 0
      const { scaled, pass } = scaledScore(pct, exam.scale)
      return { mode: "exam", scaled, pass, pct, timeUp: state.remaining === 0, domainScores, review }
    },
  }
}
