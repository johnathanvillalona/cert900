import type { ExamDef } from "@/data/types"
import { useProgress } from "@/hooks/useProgress"
import { buildPlan } from "@/lib/plan"
import { countdownCopy, dayNumber } from "@/lib/progress"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CalendarDays, Target } from "lucide-react"

/**
 * A concrete week-by-week plan from the data the store already holds:
 * examSplit x demonstrated per-domain accuracy, the saved exam date, and the
 * unseen-question count. Every number is a default, not a verdict — the
 * copy never promises an outcome (same rule as readiness).
 */
export function StudyPlan({ exam, onBack, onDrillDomain, onFullExam }: {
  exam: ExamDef
  onBack: () => void
  onDrillDomain: (domain: number) => void
  onFullExam: () => void
}) {
  const store = useProgress()
  const p = store.get(exam.id)
  const today = dayNumber()
  const plan = buildPlan(exam, p, today)

  return (
    <main>
      <button onClick={onBack} className="text-muted-foreground hover:text-foreground mb-4 flex cursor-pointer items-center gap-1.5 text-sm transition-colors" data-testid="plan-back">
        <ArrowLeft className="size-4" strokeWidth={2} /> {exam.code}
      </button>
      <h1 className="font-heading text-3xl font-semibold tracking-tight">Your study plan</h1>

      <Card className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 p-5" data-testid="plan-header">
        <span className="flex items-center gap-2">
          <CalendarDays className="text-brand size-4" strokeWidth={2} />
          <label htmlFor="plan-date" className="text-sm">Exam date</label>
          <input
            id="plan-date"
            data-testid="plan-date"
            type="date"
            value={p.examDate ?? ""}
            onChange={(e) => store.setExamDate(exam.id, e.target.value || null)}
            className="rounded-md border bg-background px-2.5 py-1.5 font-mono text-sm tabular-nums"
          />
        </span>
        {p.examDate ? (
          <span className="text-brand text-sm font-medium">{countdownCopy(p.examDate, today)}</span>
        ) : (
          <span className="text-muted-foreground text-sm">No date yet, so this plans a four-week runway.</span>
        )}
        <span className="text-muted-foreground font-mono text-sm tabular-nums">
          ~{plan.weeklyQ} questions/week over {plan.weeks} {plan.weeks === 1 ? "week" : "weeks"}
        </span>
      </Card>

      <section className="mt-8">
        <h2 className="font-heading text-xl font-semibold tracking-tight">Where the time should go</h2>
        <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
          Exam weight times what you have not yet shown you know. Domains you have barely touched get
          full weight — a plan budgets for learning, not just review.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          {plan.domains
            .slice()
            .sort((a, b) => b.share - a.share)
            .map((d) => (
              <div key={d.domain} className="flex flex-wrap items-center gap-3 rounded-lg border bg-card p-4" data-testid="plan-domain">
                <div className="min-w-0 flex-1">
                  <p className="font-medium">
                    <span className="text-muted-foreground font-mono text-xs">{d.domain}.0</span> {d.name}
                  </p>
                  <div className="bg-muted mt-2 h-1.5 w-full max-w-md overflow-hidden rounded-full">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${Math.round(d.share * 100)}%` }} />
                  </div>
                </div>
                <span className="text-muted-foreground font-mono text-xs tabular-nums">
                  {Math.round(d.share * 100)}% · ~{d.weeklyQ}/wk
                  {d.pct !== null && <span> · {d.pct}% so far</span>}
                </span>
                <Button variant="outline" size="sm" onClick={() => onDrillDomain(d.domain)} data-testid={`plan-drill-${d.domain}`}>
                  Drill
                  <ArrowRight className="size-3.5" strokeWidth={2} />
                </Button>
              </div>
            ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-heading text-xl font-semibold tracking-tight">Week by week</h2>
        <div className="mt-4 flex flex-col gap-2">
          {plan.schedule.map((w) => (
            <div key={w.index} className="flex flex-wrap items-center gap-3 rounded-lg border bg-card p-4" data-testid="plan-week">
              <span className="font-mono text-xs font-semibold tabular-nums text-muted-foreground">Week {w.index}</span>
              <span className="min-w-0 flex-1 text-sm">
                {w.focus.join(" + ")}
                {w.sim && <span className="text-brand font-medium"> · timed exam to close the week</span>}
              </span>
              {w.sim && w.index === plan.schedule.length && (
                <Button size="sm" onClick={onFullExam} data-testid="plan-final-sim">
                  <Target className="size-3.5" strokeWidth={2} />
                  Take one now
                </Button>
              )}
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed">
          Treat this as a default, not a contract: the drill engine already re-serves what you miss, so
          following the domain buttons above and closing weeks with a timed exam is the whole method.
          Misses feed the review queue; the queue is the plan correcting itself.
        </p>
      </section>
    </main>
  )
}
