import { useEffect, useReducer } from "react"
import type { ExamDef, PBQ, Question } from "@/data/types"
import { mcAnswerBlank, mcCorrect, pbqAnswerBlank, pbqCredit, pbqScore, pickExamMC, pickExamPBQs, pickMC, scaledScore, shuffle, shuffledIndices, type PBQAnswer } from "./engine"
import { VENDOR_FORMATS } from "@/data/vendors"
import type { ExamProgress } from "./progress"

export type QuizMode = "practice" | "exam" | "pbq"

export type QuizItem =
  | { kind: "mc"; q: Question; optOrder: number[] }
  | { kind: "pbq"; p: PBQ; choiceOrder?: number[] }

/** MC answer: option index (single) or indices (multiple-response). PBQ answers: see PBQAnswer in lib/engine. */
export type Answer = number | number[] | PBQAnswer

export interface QuizConfig {
  mode: QuizMode
  n?: number
  focusWeak?: boolean
  domain?: number
  /** Narrow a drill to one video topic (search's "drill this topic"). */
  topic?: string
  /**
   * Exact questions to serve, in order, bypassing adaptive selection.
   * Set by the review queue, which has already decided what is due.
   */
  ids?: number[]
}

interface State {
  items: QuizItem[]
  idx: number
  answers: Record<number, Answer>
  graded: Record<number, number> // fraction correct (practice/pbq modes)
  /**
   * Items the user actually interacted with. `answers` alone cannot tell:
   * every PBQ gets a non-blank initial answer at session start (an order PBQ
   * starts DERANGED, so it never reads as blank), which made the exam palette
   * light up untouched order PBQs as "answered" and let unansweredCount skip
   * them. Presence here — not answer shape — is what "answered" means in UI.
   */
  touched: Set<number>
  flags: Set<number>
  remaining: number // seconds; -1 = untimed
  /**
   * Wall-clock deadline (epoch ms); 0 when untimed. `remaining` is derived from
   * this on every tick rather than decremented, because a phone suspends JS
   * timers when backgrounded -- a plain counter would freeze the exam clock for
   * as long as the app is away.
   */
  endsAt: number
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
  | { type: "reorder-step"; from: number; to: number }
  | { type: "grade-pbq"; frac: number }
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

function toPBQItem(p: PBQ): QuizItem {
  return p.kind === "match" ? { kind: "pbq", p, choiceOrder: shuffledIndices(p.choices.length) } : { kind: "pbq", p }
}

function buildItems(exam: ExamDef, progress: ExamProgress, cfg: QuizConfig): QuizItem[] {
  if (cfg.mode === "exam") {
    const pbqs = pickExamPBQs(exam).map(toPBQItem)
    const mcs = pickExamMC(exam, progress).map(
      (q): QuizItem => ({ kind: "mc", q, optOrder: shuffle(q.o.map((_, i) => i)) }),
    )
    // CompTIA fronts its PBQs; AWS/Azure mix interactive items through the exam.
    return VENDOR_FORMATS[exam.vendor].interleave ? shuffle([...pbqs, ...mcs]) : [...pbqs, ...mcs]
  }
  if (cfg.mode === "pbq") {
    return shuffle(exam.pbqs).map(toPBQItem)
  }
  if (cfg.ids?.length) {
    // Preserve the queue's ordering (worst first); only the options shuffle.
    const byId = new Map(exam.questions.map((q) => [q.id, q]))
    return cfg.ids
      .map((id) => byId.get(id))
      .filter((q): q is Question => !!q)
      .map((q): QuizItem => ({ kind: "mc", q, optOrder: shuffle(q.o.map((_, i) => i)) }))
  }
  return pickMC(exam, progress, cfg.n ?? 10, { focusWeak: cfg.focusWeak, domain: cfg.domain, topic: cfg.topic }).map(
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
      return shuffledIndices(p.steps.length)
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

/** New Set with idx added — every answer-modifying action marks its item touched. */
function touch(touched: Set<number>, idx: number): Set<number> {
  if (touched.has(idx)) return touched
  const next = new Set(touched)
  next.add(idx)
  return next
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
      return { ...state, answers: { ...state.answers, [idx]: action.oi }, graded, touched: touch(state.touched, idx) }
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
      return { ...state, answers: { ...state.answers, [idx]: cur }, touched: touch(state.touched, idx) }
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
      return { ...state, answers: { ...state.answers, [idx]: cur }, touched: touch(state.touched, idx) }
    }
    case "set-terminal": {
      const cur = (state.answers[idx] as string[]).slice()
      cur[action.taskIdx] = action.command
      return { ...state, answers: { ...state.answers, [idx]: cur }, touched: touch(state.touched, idx) }
    }
    case "set-config-field": {
      const cur = (state.answers[idx] as (number | boolean | string)[]).slice()
      cur[action.fieldIdx] = action.value
      return { ...state, answers: { ...state.answers, [idx]: cur }, touched: touch(state.touched, idx) }
    }
    case "toggle-hotspot": {
      const cur = (state.answers[idx] as string[]).slice()
      const at = cur.indexOf(action.nodeId)
      if (at !== -1) cur.splice(at, 1)
      else if (cur.length < action.max) cur.push(action.nodeId)
      else return state
      return { ...state, answers: { ...state.answers, [idx]: cur }, touched: touch(state.touched, idx) }
    }
    case "place-item": {
      const cur = { ...(state.answers[idx] as Record<string, string>) }
      // remove the item from any zone it currently occupies
      for (const z of Object.keys(cur)) if (cur[z] === action.itemId) delete cur[z]
      if (action.zoneId) cur[action.zoneId] = action.itemId
      return { ...state, answers: { ...state.answers, [idx]: cur }, touched: touch(state.touched, idx) }
    }
    case "move-step": {
      const ord = (state.answers[idx] as number[]).slice()
      const np = action.pos + action.dir
      if (np < 0 || np >= ord.length) return state
      ;[ord[action.pos], ord[np]] = [ord[np], ord[action.pos]]
      return { ...state, answers: { ...state.answers, [idx]: ord }, touched: touch(state.touched, idx) }
    }
    case "reorder-step": {
      // Lift one step out and re-insert it at `to` (drag-and-drop reorder).
      const ord = (state.answers[idx] as number[]).slice()
      const { from, to } = action
      if (from === to || from < 0 || from >= ord.length || to < 0 || to >= ord.length) return state
      const [moved] = ord.splice(from, 1)
      ord.splice(to, 0, moved)
      return { ...state, answers: { ...state.answers, [idx]: ord }, touched: touch(state.touched, idx) }
    }
    case "grade-pbq": {
      const item = state.items[idx]
      if (item.kind !== "pbq") return state
      return { ...state, graded: { ...state.graded, [idx]: action.frac } }
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
      if (state.remaining <= 0 || !state.endsAt) return state
      const remaining = Math.max(0, Math.ceil((state.endsAt - Date.now()) / 1000))
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
  /** Items the user actually interacted with — the UI's definition of "answered". */
  touched: Set<number>
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
  reorderStep(from: number, to: number): void
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
    /** `questionId` is present for MC only; PBQ history is keyed by topic. */
    onResult: (topic: string, frac: number, questionId?: number) => void
    /**
     * The whole form's MC ids at once, not one per item: a store that persists
     * on every call would otherwise re-serialize the entire progress blob 66
     * times from the mount effect below.
     */
    onSeen: (questionIds: number[]) => void
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
      touched: new Set(),
      flags: new Set(),
      remaining: c.mode === "exam" ? exam.examMinutes * 60 : -1,
      endsAt: c.mode === "exam" ? Date.now() + exam.examMinutes * 60_000 : 0,
      finished: false,
    }
  })

  // mark questions seen once at session start, in one handoff
  useEffect(() => {
    const ids = state.items.flatMap((it) => (it.kind === "mc" ? [it.q.id] : []))
    if (ids.length) callbacks.onSeen(ids)
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
        callbacks.onResult(item.q.t, oi === item.q.a ? 1 : 0, item.q.id)
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
      callbacks.onResult(
        item.q.t,
        mcCorrect(item.q, state.answers[state.idx] as number[] | undefined) ? 1 : 0,
        item.q.id,
      )
    },
    setMatch: (itemIdx, choice) => dispatch({ type: "set-match", itemIdx, choice }),
    setTerminal: (taskIdx, command) => dispatch({ type: "set-terminal", taskIdx, command }),
    setConfigField: (fieldIdx, value) => dispatch({ type: "set-config-field", fieldIdx, value }),
    toggleHotspot: (nodeId, max) => dispatch({ type: "toggle-hotspot", nodeId, max }),
    placeItem: (zoneId, itemId) => dispatch({ type: "place-item", zoneId, itemId }),
    moveStep: (pos, dir) => dispatch({ type: "move-step", pos, dir }),
    reorderStep: (from, to) => dispatch({ type: "reorder-step", from, to }),
    gradePbq() {
      const item = state.items[state.idx]
      if (item.kind !== "pbq" || state.graded[state.idx] !== undefined) return
      // Credit follows the vendor's rule: CompTIA partial, AWS/Azure all-or-nothing.
      const frac = pbqCredit(exam.vendor, pbqScore(item.p, state.answers[state.idx] as PBQAnswer))
      dispatch({ type: "grade-pbq", frac })
      callbacks.onResult(item.p.t, frac)
    },
    nav: (delta) => dispatch({ type: "nav", to: state.idx + delta }),
    jump: (to) => dispatch({ type: "nav", to }),
    toggleFlag: () => dispatch({ type: "toggle-flag" }),
    finish: () => dispatch({ type: "finish" }),
    unansweredCount() {
      // Untouched = unanswered, whatever the initial answer shape looks like
      // (order PBQs start deranged and never read as blank). Touched items can
      // still be blank — e.g. a multi-select toggled on then off, or a terminal
      // command typed then cleared — so keep the blank check for those.
      return state.items.filter((it, i) => {
        if (!state.touched.has(i)) return true
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
        const w = VENDOR_FORMATS[exam.vendor].itemWeight
        const frac = pbqCredit(exam.vendor, pbqScore(it.p, state.answers[i] as PBQAnswer))
        const d = exam.videos[it.p.t].d
        pts += frac * w
        max += w
        domainScores[d].pts += frac * w
        domainScores[d].max += w
        return { kind: "pbq", p: it.p, frac, ok: frac >= 0.8 }
      })
      const pct = max ? pts / max : 0
      const { scaled, pass } = scaledScore(pct, exam.scale)
      return { mode: "exam", scaled, pass, pct, timeUp: state.remaining === 0, domainScores, review }
    },
  }
}
