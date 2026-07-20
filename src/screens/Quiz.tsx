import { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"
import type { ExamDef, PBQMatch, PBQOrder } from "@/data/types"
import { TerminalView, ConfigView, HotspotView, DragConnectView } from "@/components/pbq-sims"
import { useProgress } from "@/hooks/useProgress"
import { useQuizSession, type QuizConfig, type QuizItem, type QuizOutcome, type QuizSession } from "@/hooks/useQuizSession"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { VideoLink } from "@/components/VideoLink"
import { ReportButton } from "@/components/ReportButton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { mcAnswerBlank, pbqAnswerBlank, pbqScore, type PBQAnswer } from "@/lib/engine"
import { VENDOR_FORMATS } from "@/data/vendors"
import { GripVertical } from "lucide-react"

const LETTERS = "ABCDEF"

function fmtTime(s: number) {
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`
}

export function Quiz({ exam, cfg, onFinish, onQuit }: {
  exam: ExamDef
  cfg: QuizConfig
  onFinish: (o: QuizOutcome) => void
  onQuit: () => void
}) {
  const store = useProgress()
  const session = useQuizSession(exam, store.get(exam.id), cfg, {
    onResult: (topic, frac) => store.recordResult(exam.id, topic, frac),
    onSeen: (qid) => store.markSeen(exam.id, qid),
  })
  const [confirmEnd, setConfirmEnd] = useState(false)
  const [confirmQuit, setConfirmQuit] = useState(false)
  const finishedRef = useRef(false)

  // Exam-mode completion (manual end or time-up): record results once, then leave.
  useEffect(() => {
    if (!session.finished || finishedRef.current) return
    finishedRef.current = true
    const outcome = session.outcome()
    if (outcome.mode === "exam") {
      for (const r of outcome.review) {
        if (r.kind === "mc") store.recordResult(exam.id, r.q.t, r.ok ? 1 : 0)
        else store.recordResult(exam.id, r.p.t, r.frac)
      }
      store.recordExam(exam.id, {
        date: new Date().toISOString().slice(0, 10),
        scaled: outcome.scaled,
        pct: Math.round(outcome.pct * 100),
      })
      store.logSession(exam.id, {
        date: new Date().toISOString().slice(0, 10),
        mode: "exam",
        n: outcome.review.length,
        correct: outcome.review.filter((r) => r.ok).length,
      })
    } else {
      store.logSession(exam.id, {
        date: new Date().toISOString().slice(0, 10),
        mode: outcome.mode,
        n: outcome.review.length,
        correct: outcome.review.filter((r) => r.ok).length,
      })
    }
    onFinish(outcome)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.finished])

  const item = session.item
  const isExam = cfg.mode === "exam"
  const graded = session.graded[session.idx] !== undefined
  const last = session.idx === session.items.length - 1

  // Keyboard-first grind: A-D/1-4 answer, Enter/ArrowRight advance, ArrowLeft back, F flag.
  // Per the motion audit's frequency rule, keyboard-triggered changes get NO added animation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (confirmEnd || confirmQuit || session.finished) return
      const t = e.target as HTMLElement
      if (t.closest('input, textarea, select, [role="dialog"], [role="listbox"]')) return
      // Let native activation handle Enter/Space on focused controls.
      if ((e.key === "Enter" || e.key === " ") && t.closest("button, a")) return

      const cur = session.items[session.idx]
      const curGraded = session.graded[session.idx] !== undefined
      const k = e.key.toLowerCase()
      const multi = cur.kind === "mc" && !!cur.q.as

      if (cur.kind === "mc" && (!curGraded || isExam)) {
        let pos = ["a", "b", "c", "d", "e", "f"].indexOf(k)
        if (isExam && k === "f") pos = -1 // F is flag in exam mode
        if (pos === -1) pos = ["1", "2", "3", "4", "5", "6"].indexOf(e.key)
        if (pos !== -1 && pos < cur.optOrder.length) {
          e.preventDefault()
          if (multi) session.toggleMulti(cur.optOrder[pos])
          else session.gradePractice(cur.optOrder[pos])
          return
        }
      }
      if (e.key === "ArrowRight" || e.key === "Enter") {
        if (isExam) {
          if (session.idx < session.items.length - 1) {
            e.preventDefault()
            session.nav(1)
          }
        } else if (curGraded) {
          e.preventDefault()
          if (session.idx === session.items.length - 1) session.finish()
          else session.nav(1)
        } else if (e.key === "Enter" && multi && cur.kind === "mc") {
          const sel = session.answers[session.idx] as number[] | undefined
          if (sel && sel.length === cur.q.as!.length) {
            e.preventDefault()
            session.gradeMulti()
          }
        }
      } else if (e.key === "ArrowLeft" && isExam) {
        e.preventDefault()
        session.nav(-1)
      } else if (k === "f" && isExam) {
        e.preventDefault()
        session.toggleFlag()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  })

  return (
    <main>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-sm text-muted-foreground" data-testid="qcount">
          Question {session.idx + 1} of {session.items.length}
          {item.kind === "pbq" && ` · ${VENDOR_FORMATS[exam.vendor].itemSuffix[item.p.kind] ?? "PBQ"}`}
        </p>
        <div className="flex items-center gap-2">
          {isExam && (
            <Button
              variant={session.flags.has(session.idx) ? "default" : "outline"}
              size="sm"
              onClick={session.toggleFlag}
              data-testid="flag-btn"
            >
              ⚑ Flag
            </Button>
          )}
          {isExam && (
            <span
              className={cn("rounded-md border px-3 py-1.5 font-mono text-lg font-semibold tabular-nums", session.remaining < 300 && "border-destructive text-destructive")}
              data-testid="timer"
            >
              {fmtTime(Math.max(session.remaining, 0))}
            </span>
          )}
        </div>
      </div>

      <Card className="p-6" data-testid="qcard">
        {item.kind === "mc" ? (
          <MCView exam={exam} session={session} item={item} isExam={isExam} />
        ) : (
          <PBQView exam={exam} session={session} item={item} isExam={isExam} />
        )}
      </Card>

      <div className="mt-4 flex flex-wrap items-center gap-2" data-testid="quiz-nav">
        {isExam ? (
          <>
            <Button variant="outline" disabled={session.idx === 0} onClick={() => session.nav(-1)}>
              Previous
            </Button>
            {last ? (
              <Button onClick={() => setConfirmEnd(true)} data-testid="end-exam">End exam & score</Button>
            ) : (
              <Button onClick={() => session.nav(1)} data-testid="next">Next</Button>
            )}
          </>
        ) : graded ? (
          last ? (
            <Button onClick={session.finish} data-testid="finish">Finish & see summary</Button>
          ) : (
            <Button onClick={() => session.nav(1)} data-testid="next">Next question</Button>
          )
        ) : (
          <p className="text-muted-foreground text-sm">
            {item.kind === "mc"
              ? item.q.as
                ? `Select ${CHOOSE_WORDS[item.q.as.length] ?? item.q.as.length} answers, then check.`
                : "Select an answer to see the explanation."
              : "Set your answers, then check."}
          </p>
        )}
      </div>

      {isExam && (
        <div className="mt-6">
          <p className="text-muted-foreground text-sm">
            Question palette. Tap to jump. <span className="text-sky-600 dark:text-sky-400">⚑ flagged</span>
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5" data-testid="palette">
            {session.items.map((it, i) => {
              const a = session.answers[i]
              const answered =
                it.kind === "mc"
                  ? !mcAnswerBlank(a as number | number[] | undefined)
                  : a !== undefined && !pbqAnswerBlank(it.p, a as PBQAnswer)
              return (
                <button
                  key={i}
                  onClick={() => session.jump(i)}
                  className={cn(
                    "size-9 rounded-md border font-mono text-xs",
                    answered && "border-primary bg-primary/10 font-bold text-brand",
                    session.flags.has(i) && "border-sky-500 bg-sky-500/10 text-sky-600 dark:text-sky-400",
                    i === session.idx && "ring-2 ring-foreground",
                  )}
                >
                  {i + 1}
                </button>
              )
            })}
          </div>
          <Button variant="outline" className="mt-3" onClick={() => setConfirmEnd(true)}>
            End exam & score
          </Button>
        </div>
      )}

      <p className="text-muted-foreground mt-5 hidden font-mono text-xs sm:block" data-testid="key-hints">
        {item.kind === "mc"
          ? item.q.as
            ? isExam
              ? "Keys: A-E toggle · ← → move · F flag"
              : "Keys: A-E toggle · Enter check"
            : isExam
              ? "Keys: A-D answer · ← → move · F flag"
              : "Keys: A-D answer · Enter next"
          : isExam
            ? "Keys: ← → move"
            : ""}
      </p>

      <div className="mt-4">
        <Button variant="ghost" onClick={() => (isExam ? setConfirmQuit(true) : onQuit())} data-testid="quit">
          Quit
        </Button>
      </div>

      <Dialog open={confirmEnd} onOpenChange={setConfirmEnd}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>End the exam?</DialogTitle>
            <DialogDescription>
              {session.unansweredCount() > 0
                ? `${session.unansweredCount()} ${session.unansweredCount() === 1 ? "question is" : "questions are"} unanswered or incomplete. End the exam anyway?`
                : `Your answers will be scored on the 100 to ${exam.scale.max} scale.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmEnd(false)}>Keep working</Button>
            <Button data-testid="confirm-end" onClick={() => { setConfirmEnd(false); session.finish() }}>End & score</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={confirmQuit} onOpenChange={setConfirmQuit}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Quit the exam?</DialogTitle>
            <DialogDescription>This attempt will not be scored.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmQuit(false)}>Keep working</Button>
            <Button variant="destructive" onClick={onQuit}>Quit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}

const CHOOSE_WORDS: Record<number, string> = { 2: "two", 3: "three", 4: "four" }

function MCView({ exam, session, item, isExam }: { exam: ExamDef; session: QuizSession; item: Extract<QuizItem, { kind: "mc" }>; isExam: boolean }) {
  const q = item.q
  const multi = !!q.as
  const raw = session.answers[session.idx] as number | number[] | undefined
  const selSet = multi ? new Set((raw as number[] | undefined) ?? []) : undefined
  const sel = multi ? undefined : (raw as number | undefined)
  const graded = !isExam && session.graded[session.idx] !== undefined
  const ok = graded && session.graded[session.idx] === 1
  const isCorrectOpt = (oi: number) => (multi ? q.as!.includes(oi) : oi === q.a)
  const isSelected = (oi: number) => (multi ? selSet!.has(oi) : oi === sel)
  const need = multi ? q.as!.length : 1
  const picked = multi ? selSet!.size : sel !== undefined ? 1 : 0

  return (
    <div>
      <p className="mb-3 mr-2 inline-block rounded border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
        {exam.domains[q.d]} · {exam.videos[q.t].n}
      </p>
      {multi && (
        <p className="mb-3 inline-block rounded bg-foreground px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-background" data-testid="choose-n">
          Choose {CHOOSE_WORDS[need] ?? need}
        </p>
      )}
      <p className="whitespace-pre-line text-lg font-semibold leading-relaxed" data-testid="qtext">{q.x}</p>
      <div className="mt-4 flex flex-col gap-2">
        {item.optOrder.map((oi, pos) => {
          const state = graded
            ? isCorrectOpt(oi)
              ? "correct"
              : isSelected(oi)
                ? "wrong"
                : "idle"
            : isSelected(oi)
              ? "selected"
              : "idle"
          return (
            <button
              key={oi}
              disabled={graded}
              data-testid="option"
              aria-pressed={multi ? isSelected(oi) : undefined}
              onClick={() => (multi ? session.toggleMulti(oi) : session.gradePractice(oi))}
              className={cn(
                "pressable flex w-full items-start gap-3 rounded-md border p-3 text-left text-sm transition-[color,background-color,border-color,transform]",
                state === "idle" && "hover:border-primary",
                state === "selected" && "border-primary bg-primary/10",
                state === "correct" && "border-success bg-success/10",
                state === "wrong" && "border-destructive bg-destructive/10",
              )}
            >
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center border font-mono text-xs font-bold",
                  multi ? "rounded-sm" : "rounded",
                  state === "selected" && "border-primary bg-primary text-primary-foreground",
                  state === "correct" && "border-success bg-success text-success-foreground",
                  state === "wrong" && "border-destructive bg-destructive text-white",
                )}
              >
                {LETTERS[pos]}
              </span>
              <span>{q.o[oi]}</span>
            </button>
          )
        })}
      </div>
      {multi && !graded && !isExam && (
        <div className="mt-4 flex items-center gap-3">
          <Button disabled={picked !== need} onClick={session.gradeMulti} data-testid="check-multi">
            Check answer
          </Button>
          <p className="text-muted-foreground text-sm">
            {picked} of {need} selected
          </p>
        </div>
      )}
      {graded && (
        <div
          className={cn("enter-fade-rise mt-4 rounded-md border p-4", ok ? "border-success/50 bg-success/10" : "border-destructive/40 bg-destructive/5")}
          data-testid="feedback"
        >
          <p className={cn("font-semibold", ok ? "text-success" : "text-destructive")}>
            {ok ? "Correct" : multi ? "Incorrect. The correct answers are highlighted above" : "Incorrect. The answer is highlighted above"}
          </p>
          <p className="mt-1 text-sm">{q.e}</p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <VideoLink exam={exam} topic={q.t} label="Review this topic:" />
            <ReportButton examId={exam.id} refId={`q:${q.id}`} />
          </div>
        </div>
      )}
    </div>
  )
}

function PBQView({ exam, session, item, isExam }: { exam: ExamDef; session: QuizSession; item: Extract<QuizItem, { kind: "pbq" }>; isExam: boolean }) {
  const p = item.p
  const fmt = VENDOR_FORMATS[exam.vendor]
  const graded = !isExam && session.graded[session.idx] !== undefined
  const frac = session.graded[session.idx]

  return (
    <div>
      <p className="mb-3 mr-2 inline-block rounded bg-foreground px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-background">
        {fmt.itemBadge[p.kind] ?? "Performance-Based Question"}
      </p>
      <p className="mb-3 inline-block rounded border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
        {exam.domains[exam.videos[p.t].d]}
      </p>
      <p className="text-lg font-semibold">{p.title}</p>
      <p className="mt-2 whitespace-pre-line rounded-md border bg-muted/40 p-3 text-sm">{p.scen}</p>

      {/* key={session.idx}: every PBQ view holds state that must not outlive its
          question — Radix's internal Select value (match/config), the terminal
          log, the drag-connect held item. Without a per-question key React
          reconciles the same instances across questions and that state bleeds
          forward, showing values the reducer never recorded. */}
      {p.kind === "match" && <MatchView key={session.idx} p={p} session={session} graded={graded} choiceOrder={item.choiceOrder} />}
      {p.kind === "order" && <OrderView key={session.idx} p={p} session={session} graded={graded} />}
      {p.kind === "terminal" && <TerminalView key={session.idx} p={p} session={session} graded={graded} />}
      {p.kind === "config" && <ConfigView key={session.idx} p={p} session={session} graded={graded} />}
      {p.kind === "hotspot" && <HotspotView key={session.idx} p={p} session={session} graded={graded} />}
      {p.kind === "dragconnect" && <DragConnectView key={session.idx} p={p} session={session} graded={graded} />}

      {!isExam && !graded && (
        <Button className="mt-4" onClick={session.gradePbq} data-testid="check-pbq">
          Check answer
        </Button>
      )}
      {graded && (
        <div
          className={cn("enter-fade-rise mt-4 rounded-md border p-4", frac >= 0.8 ? "border-success/50 bg-success/10" : "border-destructive/40 bg-destructive/5")}
          data-testid="feedback"
        >
          {fmt.partialCredit ? (
            <p className={cn("font-semibold", frac >= 0.8 ? "text-success" : "text-destructive")}>
              {Math.round(frac * 100)}% correct on this PBQ
            </p>
          ) : (
            <>
              <p className={cn("font-semibold", frac === 1 ? "text-success" : "text-destructive")}>
                {frac === 1 ? "Correct" : "Incorrect"}
              </p>
              {frac !== 1 && (() => {
                const raw = pbqScore(p, session.answers[session.idx] as PBQAnswer)
                return raw > 0 ? (
                  <p className="mt-1 text-sm">
                    You had {Math.round(raw * 100)}% of it, but this question type awards credit only when every part
                    is right, just like the real exam.
                  </p>
                ) : null
              })()}
            </>
          )}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <VideoLink exam={exam} topic={p.t} label="Review this topic:" />
            <ReportButton examId={exam.id} refId={`pbq:${p.title}`} />
          </div>
        </div>
      )}
    </div>
  )
}

function MatchView({ p, session, graded, choiceOrder }: { p: PBQMatch; session: QuizSession; graded: boolean; choiceOrder?: number[] }) {
  const ans = session.answers[session.idx] as number[]
  // Session-shuffled dropdown order; authored order would mirror the answer key.
  const order = choiceOrder ?? p.choices.map((_, ci) => ci)
  return (
    <div className="mt-3 flex flex-col gap-2">
      {p.items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "flex flex-wrap items-center justify-between gap-2 rounded-md border p-3",
            graded && (ans[i] === item.a ? "border-success bg-success/10" : "border-destructive bg-destructive/10"),
          )}
        >
          <span className="min-w-44 flex-1 text-sm">{item.l}</span>
          <Select
            disabled={graded}
            // "" (not undefined) keeps the Select CONTROLLED while unanswered:
            // undefined hands control to Radix, whose internal selection then
            // survives into the next question and shows a value the reducer
            // never recorded. Radix still renders the placeholder for "".
            value={ans[i] === -1 ? "" : String(ans[i])}
            onValueChange={(v) => session.setMatch(i, Number(v))}
          >
            <SelectTrigger className="w-56" aria-label={`Answer for: ${item.l}`} data-testid="match-select">
              <SelectValue placeholder="Choose" />
            </SelectTrigger>
            <SelectContent>
              {order.map((ci) => (
                <SelectItem key={ci} value={String(ci)}>
                  {p.choices[ci]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {graded && ans[i] !== item.a && (
            <p className="w-full text-xs font-medium text-success">Correct: {p.choices[item.a]}</p>
          )}
        </div>
      ))}
    </div>
  )
}

function OrderView({ p, session, graded }: { p: PBQOrder; session: QuizSession; graded: boolean }) {
  const ord = session.answers[session.idx] as number[]
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  // Live drag: `from` is the grabbed row, `over` where it would land, `dy` how
  // far the finger/cursor has moved, `step` the distance other rows shift.
  const [drag, setDrag] = useState<{ from: number; over: number; dy: number; step: number } | null>(null)
  const meta = useRef<{ startY: number; centers: number[]; from: number } | null>(null)

  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // Motion explains the swap: View Transitions where supported, instant otherwise.
  const moveWithTransition = (pos: number, dir: -1 | 1) => {
    const apply = () => session.moveStep(pos, dir)
    if (document.startViewTransition && !reduced()) {
      document.startViewTransition(() => flushSync(apply))
    } else {
      apply()
    }
  }

  const startDrag = (pos: number, e: React.PointerEvent) => {
    if (graded) return
    const rects = rowRefs.current.map((el) => el?.getBoundingClientRect()).filter(Boolean) as DOMRect[]
    if (rects.length !== ord.length) return
    const gap = rects.length > 1 ? Math.max(0, rects[1].top - rects[0].bottom) : 8
    // Capture keeps move/up on the handle once the pointer leaves it. Guarded:
    // it throws if the pointer is no longer active (and for synthetic events).
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      /* drag still works via the handler chain */
    }
    meta.current = { startY: e.clientY, centers: rects.map((r) => r.top + r.height / 2), from: pos }
    setDrag({ from: pos, over: pos, dy: 0, step: rects[pos].height + gap })
  }

  const onDragMove = (e: React.PointerEvent) => {
    const m = meta.current
    if (!m || !drag) return
    const dy = e.clientY - m.startY
    const center = m.centers[m.from] + dy
    let over = m.from
    m.centers.forEach((c, i) => {
      if (i === m.from) return
      if (i > m.from && center > c) over = Math.max(over, i)
      if (i < m.from && center < c) over = Math.min(over, i)
    })
    setDrag({ ...drag, dy, over })
  }

  const endDrag = () => {
    if (drag && drag.from !== drag.over) session.reorderStep(drag.from, drag.over)
    meta.current = null
    setDrag(null)
  }

  // While dragging: the grabbed row tracks the pointer; rows it has passed
  // shift by one slot to open the gap it will drop into.
  const offsetFor = (pos: number) => {
    if (!drag) return 0
    if (pos === drag.from) return drag.dy
    if (drag.over > drag.from && pos > drag.from && pos <= drag.over) return -drag.step
    if (drag.over < drag.from && pos >= drag.over && pos < drag.from) return drag.step
    return 0
  }

  // The number a row would carry if dropped now, so the ordinals stay coherent
  // mid-drag instead of showing the pre-drag order.
  const previewPos = (pos: number) => {
    if (!drag) return pos
    if (pos === drag.from) return drag.over
    if (drag.over > drag.from && pos > drag.from && pos <= drag.over) return pos - 1
    if (drag.over < drag.from && pos >= drag.over && pos < drag.from) return pos + 1
    return pos
  }

  return (
    <div className="mt-3">
      {!graded && (
        <p className="text-muted-foreground mb-2 text-xs">
          Drag a row by its handle to reorder, or use the arrows.
        </p>
      )}
      <div className="flex flex-col gap-2">
        {ord.map((si, pos) => {
          const dragging = drag?.from === pos
          return (
            <div
              key={si}
              ref={(el) => { rowRefs.current[pos] = el }}
              data-testid="order-row"
              style={{
                // No viewTransitionName mid-drag: the row is already where the
                // pointer put it, so a transition would double-animate the drop.
                viewTransitionName: drag ? undefined : `pbq-row-${si}`,
                transform: offsetFor(pos) ? `translateY(${offsetFor(pos)}px)` : undefined,
                transition: dragging || reduced() ? "none" : "transform 180ms var(--ease-out-strong)",
                zIndex: dragging ? 10 : undefined,
                position: dragging ? "relative" : undefined,
              }}
              className={cn(
                "flex items-center gap-3 rounded-md border bg-card p-3",
                dragging && "select-none shadow-lg",
                graded && (si === pos ? "border-success bg-success/10" : "border-destructive bg-destructive/10"),
              )}
            >
              {!graded && (
                <button
                  type="button"
                  data-testid="order-handle"
                  aria-label={`Drag to reorder: ${p.steps[si]}`}
                  // touch-none only on the handle, so the list still scrolls on phones.
                  className={cn(
                    "text-muted-foreground -m-1 touch-none rounded p-1 transition-colors hover:text-foreground",
                    dragging ? "cursor-grabbing" : "cursor-grab",
                  )}
                  onPointerDown={(e) => { e.preventDefault(); startDrag(pos, e) }}
                  onPointerMove={onDragMove}
                  onPointerUp={endDrag}
                  onPointerCancel={endDrag}
                >
                  <GripVertical className="size-4" strokeWidth={2} />
                </button>
              )}
              <span className="min-w-6 font-mono text-sm font-bold text-muted-foreground">{previewPos(pos) + 1}</span>
              <span className="flex-1 text-sm">{p.steps[si]}</span>
              {!graded && (
                <span className="flex gap-1">
                  <Button variant="outline" size="icon" className="size-8" aria-label="Move up" onClick={() => moveWithTransition(pos, -1)}>
                    ↑
                  </Button>
                  <Button variant="outline" size="icon" className="size-8" aria-label="Move down" onClick={() => moveWithTransition(pos, 1)}>
                    ↓
                  </Button>
                </span>
              )}
            </div>
          )
        })}
      </div>
      {graded && (
        <div className="mt-3 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Correct order:</p>
          {p.steps.map((s, i) => (
            <p key={i}>
              {i + 1}. {s}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
