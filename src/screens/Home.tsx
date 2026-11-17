import { useState } from "react"
import { Timer, ListChecks, Puzzle, ChartLine, RotateCcw, BadgeCheck, CalendarDays, Trash2 } from "lucide-react"
import type { ExamDef } from "@/data/types"
import { VENDOR_FORMATS } from "@/data/vendors"
import { ExamEmblem } from "@/components/exam-art"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useProgress } from "@/hooks/useProgress"
import { weakTopics } from "@/lib/engine"
import { countdownCopy, dayNumber } from "@/lib/progress"
import { reviewQueue } from "@/lib/review"
import { StudyLinks } from "@/components/StudyLinks"

const MODES = [
  { key: "exam", icon: Timer, title: "Full practice exam", desc: "" }, // computed per exam below
  { key: "drill", icon: ListChecks, title: "Topic practice", desc: "Short sets of questions with an explanation and a free training video after each answer. Topics you miss come back more often." },
  { key: "pbq", icon: Puzzle, title: "", desc: "" }, // vendor-format lab, computed per exam below
  { key: "progress", icon: ChartLine, title: "Detailed progress", desc: "Accuracy by topic, weak areas to review, and your practice exam history." },
] as const

export function Home(props: {
  exam: ExamDef
  onFullExam: () => void
  onDrill: () => void
  onPbqLab: () => void
  onProgress: () => void
  onReview: (ids: number[]) => void
  onStudyPlan: () => void
}) {
  const { exam } = props
  const store = useProgress()
  const p = store.get(exam.id)
  const [confirmClear, setConfirmClear] = useState(false)
  const totals = Object.values(p.topics).reduce((acc, s) => ({ q: acc.q + s.t, c: acc.c + s.c }), { q: 0, c: 0 })
  const weak = weakTopics(exam, p).length
  const today = dayNumber()
  // reviewQueue is due-gated: everything it returns is ready to re-attempt now.
  const queue = reviewQueue(exam, p, today, 20)
  const handlers: Record<(typeof MODES)[number]["key"], () => void> = {
    exam: props.onFullExam,
    drill: props.onDrill,
    pbq: props.onPbqLab,
    progress: props.onProgress,
  }

  return (
    <main>
      <p className="text-muted-foreground flex items-center gap-2 text-sm">
        <ExamEmblem examId={exam.id} className="text-brand size-5" />
        {exam.cert} {exam.name} · <span className="font-mono">{exam.code}</span>
      </p>
      <h1 className="font-heading mt-1 text-3xl font-bold tracking-tight">Choose how to practice</h1>
      <StudyLinks examId={exam.id} />

      {/* Only rendered once there is something to redo, so it never sits empty. */}
      {queue.length > 0 && (
        <button
          data-testid="mode-review"
          onClick={() => props.onReview(queue.map((x) => x.q.id))}
          className="pressable group border-primary bg-primary/5 mt-6 flex w-full cursor-pointer items-center gap-4 rounded-lg border p-5 text-left transition-[background-color,transform] duration-200 hover:bg-primary/10"
        >
          <RotateCcw className="text-brand size-5 shrink-0" strokeWidth={2} />
          <span className="min-w-0 flex-1">
            <span className="font-heading block text-lg font-semibold">Review missed questions</span>
            <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
              <span className="font-semibold tabular-nums">{queue.length}</span>{" "}
              {queue.length === 1 ? "question is" : "questions are"} ready for review today. A question leaves your
              review list after you answer it correctly twice.
            </span>
          </span>
        </button>
      )}

      <div className={`${queue.length > 0 ? "mt-3" : "mt-6"} grid gap-3 sm:grid-cols-2`}>
        {MODES.filter((m) => m.key !== "pbq" || exam.pbqs.length > 0).map((m) => (
          <button
            key={m.key}
            data-testid={`mode-${m.key}`}
            className="pressable group cursor-pointer rounded-lg border bg-card p-5 text-left transition-[color,background-color,border-color,transform] duration-200 hover:border-primary"
            onClick={handlers[m.key]}
          >
            <m.icon className="size-5 text-brand" strokeWidth={2} />
            <span className="font-heading mt-3 block text-lg font-semibold">
              {m.key === "pbq" ? VENDOR_FORMATS[exam.vendor].labTitle : m.title}
            </span>
            <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
              {m.key === "exam"
                ? `A timed ${exam.examMinutes}-minute exam scored from 100 to ${exam.scale.max}. You see your results and explanations when you finish.`
                : m.key === "pbq"
                  ? VENDOR_FORMATS[exam.vendor].labDesc
                  : m.desc}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-lg border bg-card p-5 text-sm leading-relaxed" data-testid="home-snapshot">
        {exam.cert} {exam.name} ({exam.code}) covers {Object.keys(exam.domains).length} exam domains.{" "}
        {totals.q === 0 ? (
          "Tracking starts with your first answer."
        ) : (
          <>
            You have answered <span className="font-semibold tabular-nums">{totals.q}</span> questions so far
            {weak > 0 ? (
              <>
, and <span className="font-semibold text-destructive">{weak} weak topic{weak > 1 ? "s are" : " is"}</span> flagged.
                A weak-topics practice set starts with those.
              </>
            ) : (
              ", and no topics are flagged as weak yet."
            )}
          </>
        )}
        {!store.storageAvailable && (
          <p className="text-destructive mt-2 text-xs">
            Note: persistent storage is unavailable in this browser, so progress resets when the page closes.
          </p>
        )}
      </div>

      {/* Exam plan: real-exam date countdown, the passed milestone, and the
          per-exam reset. One quiet card; never inside the quiz. */}
      <div className="mt-3 rounded-lg border bg-card p-5" data-testid="exam-plan">
        {p.passed ? (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span
              data-testid="passed-badge"
              className="inline-flex items-center gap-1.5 rounded-md bg-success/10 px-2.5 py-1 font-mono text-xs font-semibold text-success"
            >
              <BadgeCheck className="size-3.5" strokeWidth={2.5} />
              Passed{p.passedOn ? <span className="tabular-nums"> · {p.passedOn}</span> : null}
            </span>
            <span className="text-muted-foreground text-sm">This one is in the books. Congratulations.</span>
            <button
              onClick={() => store.setPassed(exam.id, false)}
              className="text-muted-foreground cursor-pointer text-xs underline-offset-2 hover:text-foreground hover:underline"
            >
              Undo
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <label htmlFor="exam-date" className="flex items-center gap-1.5 text-sm font-medium">
                <CalendarDays className="text-brand size-4" strokeWidth={2} />
                Exam date
              </label>
              <input
                id="exam-date"
                data-testid="exam-date"
                type="date"
                value={p.examDate ?? ""}
                onChange={(e) => store.setExamDate(exam.id, e.target.value || null)}
                className="rounded-md border bg-background px-2.5 py-1.5 font-mono text-sm tabular-nums"
              />
              {p.examDate && (
                <span data-testid="exam-countdown" className="text-sm font-medium text-brand">
                  {countdownCopy(p.examDate, today)}
                </span>
              )}
              <button
                onClick={props.onStudyPlan}
                data-testid="open-plan"
                className="text-brand inline-flex cursor-pointer items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
              >
                Build a study plan
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-muted-foreground text-sm">Already passed the exam?</span>
              <Button variant="outline" size="sm" data-testid="mark-passed" onClick={() => store.setPassed(exam.id, true)}>
                <BadgeCheck className="size-4" strokeWidth={2} />
                I passed
              </Button>
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t pt-4">
          <span className="text-muted-foreground text-xs">
            Clearing removes every answer, score, and streak for this exam only.
          </span>
          <Button variant="destructive" size="sm" data-testid="clear-progress" onClick={() => setConfirmClear(true)}>
            <Trash2 className="size-4" strokeWidth={2} />
            Clear progress
          </Button>
        </div>
      </div>

      <Dialog open={confirmClear} onOpenChange={setConfirmClear}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Clear all {exam.code} progress?</DialogTitle>
            <DialogDescription>
              Every answer, exam score, review-queue entry, exam date, and milestone for {exam.cert} {exam.name} will
              be deleted on this device and in your synced copy. Other exams are not affected. This cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmClear(false)}>
              Keep my progress
            </Button>
            <Button
              variant="destructive"
              data-testid="confirm-clear"
              onClick={() => {
                setConfirmClear(false)
                store.resetExam(exam.id)
              }}
            >
              Clear progress
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
