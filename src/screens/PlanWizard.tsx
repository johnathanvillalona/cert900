import { useState } from "react"
import { ArrowLeft, ArrowRight, CalendarDays, Check } from "lucide-react"
import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import { examShortName } from "@/data/labels"
import { VENDORS, VENDOR_ORDER } from "@/data/vendors"
import { ExamEmblem } from "@/components/exam-art"
import { Button } from "@/components/ui/button"
import { useProgress } from "@/hooks/useProgress"
import { countdownCopy, dayNumber } from "@/lib/progress"
import { cn } from "@/lib/utils"

/**
 * Two-step funnel into the per-exam study plan.
 *
 * The planner itself already existed at /exam/:id/plan, but its only entry
 * point assumed you had already picked an exam and scrolled to the bottom of
 * that exam's menu. This is the front door: pick an exam, pick a date, land
 * on the real plan. It deliberately holds no planning logic -- it writes the
 * exam date through the store and hands off, so there is exactly one place
 * (src/lib/plan.ts) where a plan is computed.
 *
 * Reads EXAM_META only, never a question bank, so it renders instantly on a
 * cold load of /plan.
 */

/** Local-calendar ISO, matching what a native date input produces. */
function isoInDays(n: number): string {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
}

const PRESETS = [
  { label: "In 30 days", days: 30 },
  { label: "In 60 days", days: 60 },
  { label: "In 90 days", days: 90 },
] as const

export function PlanWizard({ onFinish, onCancel, backLabel = "Never mind" }: {
  /** Sets the exam date, then routes to that exam's plan. */
  onFinish: (examId: string, date: string | null) => void
  onCancel: () => void
  /** "Back to plans" when the hub has a list to return to; cancel copy otherwise. */
  backLabel?: string
}) {
  const store = useProgress()
  const today = dayNumber()
  const [examId, setExamId] = useState<string | null>(null)
  const [date, setDate] = useState("")

  const groups = VENDOR_ORDER.map((v) => ({
    v,
    exams: EXAM_ORDER.map((id) => EXAM_META[id])
      .filter((ex) => ex.vendor === v)
      // Exams you have already worked on come first inside their vendor.
      .sort((a, b) => answered(b.id) - answered(a.id)),
  })).filter((g) => g.exams.length > 0)

  function answered(id: string): number {
    const p = store.all[id]
    return p ? Object.values(p.topics).reduce((a, s) => a + s.t, 0) : 0
  }

  const chosen = examId ? EXAM_META[examId] : null

  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">Build a study plan</h1>
      <p className="text-muted-foreground mt-2 leading-relaxed">
        Two questions, then you get a week-by-week plan weighted by what each exam actually tests and
        what you have already shown you know.
      </p>

      <ol className="text-muted-foreground mt-6 flex items-center gap-2 font-mono text-xs" aria-label="Progress">
        <li className={cn("rounded-md border px-2.5 py-1", !chosen && "border-primary text-brand font-semibold")}>
          {chosen ? <Check className="mr-1 inline size-3" strokeWidth={3} /> : "1. "}Exam
        </li>
        <li aria-hidden="true">→</li>
        <li className={cn("rounded-md border px-2.5 py-1", chosen && "border-primary text-brand font-semibold")}>
          2. Date
        </li>
      </ol>

      {!chosen ? (
        <section className="mt-6" aria-labelledby="step-exam">
          <h2 id="step-exam" className="font-heading text-xl font-semibold tracking-tight">
            Which exam are you studying for?
          </h2>
          <div className="mt-4 flex flex-col gap-5">
            {groups.map((g) => (
              <div key={g.v}>
                <p className="text-muted-foreground border-b pb-2 font-mono text-[11px] font-semibold tracking-wider uppercase">
                  {VENDORS[g.v].short}
                </p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {g.exams.map((ex) => {
                    const n = answered(ex.id)
                    const existing = store.all[ex.id]?.examDate
                    return (
                      <button
                        key={ex.id}
                        data-testid={`plan-exam-${ex.id}`}
                        onClick={() => {
                          setExamId(ex.id)
                          setDate(existing ?? "")
                        }}
                        className="pressable group hover:border-primary flex cursor-pointer items-center gap-3 rounded-lg border bg-card p-4 text-left transition-[color,background-color,border-color,transform] duration-200"
                      >
                        <ExamEmblem examId={ex.id} className={cn("size-7 shrink-0", VENDORS[ex.vendor].tintClass)} />
                        <span className="min-w-0 flex-1">
                          <span className="block font-medium">{examShortName(ex)}</span>
                          <span className="text-muted-foreground block font-mono text-xs tabular-nums">
                            {ex.code}
                            {n > 0 && <span className="text-brand"> · {n} answered</span>}
                            {existing && <span> · {countdownCopy(existing, today)}</span>}
                          </span>
                        </span>
                        <ArrowRight
                          className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand"
                          strokeWidth={2}
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="mt-6" onClick={onCancel} data-testid="plan-cancel">
            {backLabel}
          </Button>
        </section>
      ) : (
        <section className="mt-6" aria-labelledby="step-date">
          <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
            <ExamEmblem examId={chosen.id} className={cn("size-5", VENDORS[chosen.vendor].tintClass)} />
            <span className="text-foreground font-medium">{examShortName(chosen)}</span>
            <span className="font-mono text-xs">{chosen.code}</span>
            <button
              onClick={() => setExamId(null)}
              data-testid="plan-change-exam"
              className="cursor-pointer underline underline-offset-4 hover:text-foreground"
            >
              Change
            </button>
          </div>

          <h2 id="step-date" className="font-heading mt-4 text-xl font-semibold tracking-tight">
            When are you taking it?
          </h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            This sets the length of the plan. You can change it later, and you do not need one to start.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {PRESETS.map((p) => {
              const value = isoInDays(p.days)
              return (
                <Button
                  key={p.days}
                  variant={date === value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDate(value)}
                  data-testid={`plan-preset-${p.days}`}
                >
                  {p.label}
                </Button>
              )
            })}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <label htmlFor="plan-wizard-date" className="flex items-center gap-1.5 text-sm font-medium">
              <CalendarDays className="text-brand size-4" strokeWidth={2} />
              Exam date
            </label>
            <input
              id="plan-wizard-date"
              data-testid="plan-wizard-date"
              type="date"
              min={isoInDays(0)}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-md border bg-background px-2.5 py-1.5 font-mono text-sm tabular-nums"
            />
            {date && <span className="text-brand text-sm font-medium">{countdownCopy(date, today)}</span>}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t pt-6">
            <Button size="lg" disabled={!date} onClick={() => onFinish(chosen.id, date)} data-testid="plan-build">
              Build my plan
              <ArrowRight className="size-4" strokeWidth={2} />
            </Button>
            <Button variant="ghost" onClick={() => onFinish(chosen.id, null)} data-testid="plan-no-date">
              I do not have a date yet
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="mt-4" onClick={() => setExamId(null)} data-testid="plan-back">
            <ArrowLeft className="size-4" strokeWidth={2} />
            Back
          </Button>
        </section>
      )}
    </main>
  )
}
