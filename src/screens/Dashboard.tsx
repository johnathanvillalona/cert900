import { ArrowRight, BadgeCheck, CalendarDays, Flame } from "lucide-react"
import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import type { ExamMeta } from "@/data/types"
import { VENDORS } from "@/data/vendors"
import { ExamEmblem } from "@/components/exam-art"
import { PlanCard } from "@/components/PlanCard"
import { useProgress } from "@/hooks/useProgress"
import { activePlans } from "@/lib/plan"
import { domainAccuracy, readiness, studyStreak, allSessions, type Readiness } from "@/lib/stats"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AdSlot } from "@/components/AdSlot"
import { cn } from "@/lib/utils"

/** One friendly overview for all exams. Detail lives in each exam's progress page. */
export function Dashboard({ onContinue, onDetails, onBrowseExams, onOpenPlan, onNewPlan }: {
  onContinue: (examId: string) => void
  onDetails: (examId: string) => void
  onBrowseExams: () => void
  onOpenPlan: (examId: string) => void
  onNewPlan: () => void
}) {
  const store = useProgress()
  const exams = EXAM_ORDER.map((id) => EXAM_META[id])

  const perExam = exams.map((exam) => {
    const p = store.all[exam.id]
    const totals = p
      ? Object.values(p.topics).reduce((acc, s) => ({ q: acc.q + s.t, c: acc.c + s.c }), { q: 0, c: 0 })
      : { q: 0, c: 0 }
    const lastExam = p?.exams.length ? p.exams[p.exams.length - 1] : null
    const domains = p ? domainAccuracy(exam, p).filter((d) => d.attempts >= 3) : []
    const weakest = domains.length ? domains.reduce((a, b) => (b.pct < a.pct ? b : a)) : null
    const ready = p ? readiness(exam, p) : null
    return {
      exam,
      answered: totals.q,
      accuracy: totals.q ? Math.round((totals.c / totals.q) * 100) : null,
      lastExam,
      weakest,
      ready,
      passed: p?.passed === true,
      passedOn: p?.passedOn,
    }
  })

  const totalAnswered = perExam.reduce((a, x) => a + x.answered, 0)
  const overall = (() => {
    let q = 0
    let c = 0
    for (const p of Object.values(store.all))
      for (const s of Object.values(p.topics)) {
        q += s.t
        c += s.c
      }
    return q ? Math.round((c / q) * 100) : null
  })()
  const streak = studyStreak(allSessions(store.all), new Date().toISOString().slice(0, 10))
  const plans = activePlans(store.all, EXAM_ORDER)

  // A passed exam is worth showing even with no practice behind it, so the
  // milestone someone just marked does not vanish behind the empty state. A
  // study plan is the same kind of thing: an explicit commitment, and the page
  // that says "nothing tracked" while you hold two plans is simply wrong.
  if (totalAnswered === 0 && !perExam.some((x) => x.passed) && plans.length === 0) {
    return (
      <main>
        <h1 className="font-heading text-3xl font-semibold tracking-tight">Progress</h1>
        <Card className="mt-6 flex flex-col items-start gap-3 p-8">
          <p className="font-medium">Nothing tracked yet</p>
          <p className="text-muted-foreground max-w-md text-sm">
            Answer one question and this page starts keeping score, across every exam you touch.
          </p>
          <Button className="mt-2" onClick={onBrowseExams}>Pick an exam</Button>
        </Card>
      </main>
    )
  }

  return (
    <main>
      <h1 className="font-heading text-3xl font-semibold tracking-tight">Progress</h1>

      <div className="mt-5 grid grid-cols-3 gap-3" data-testid="dash-tiles">
        <Card className="stagger-item p-4" style={{ "--i": 0 } as React.CSSProperties}>
          <p className="font-heading flex items-center gap-1.5 text-2xl font-semibold tabular-nums">
            {streak > 0 && <Flame className="size-5 text-brand" strokeWidth={2} />}
            {streak === 1 ? "1 day" : `${streak} days`}
          </p>
          <p className="text-muted-foreground mt-0.5 text-xs">study streak</p>
        </Card>
        <Card className="stagger-item p-4" style={{ "--i": 1 } as React.CSSProperties}>
          <p className="font-heading text-2xl font-semibold tabular-nums">{totalAnswered}</p>
          <p className="text-muted-foreground mt-0.5 text-xs">questions answered</p>
        </Card>
        <Card className="stagger-item p-4" style={{ "--i": 2 } as React.CSSProperties}>
          <p className="font-heading text-2xl font-semibold tabular-nums">{overall ?? 0}%</p>
          <p className="text-muted-foreground mt-0.5 text-xs">overall accuracy</p>
        </Card>
      </div>

      {/* Directly under the tiles: what you have committed to comes before the
          per-exam scoreboard, because it is the thing you act on. */}
      <section className="mt-8" data-testid="dash-plans">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-heading text-xl font-semibold tracking-tight">Plans in progress</h2>
          {plans.length > 0 && (
            <Button variant="ghost" size="sm" onClick={onNewPlan} data-testid="dash-manage-plans">
              Manage plans
              <ArrowRight className="size-3.5" strokeWidth={2} />
            </Button>
          )}
        </div>
        {plans.length > 0 ? (
          <div className="mt-3 flex flex-col gap-3">
            {plans.map((id) => (
              <PlanCard key={id} examId={id} compact onOpen={() => onOpenPlan(id)} />
            ))}
          </div>
        ) : (
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-muted-foreground text-sm">
              No study plans yet. Pick an exam and a date, and the weeks get weighted for you.
            </p>
            <Button size="sm" onClick={onNewPlan} data-testid="dash-new-plan">
              <CalendarDays className="size-3.5" strokeWidth={2} />
              Build a study plan
            </Button>
          </div>
        )}
      </section>

      <div className="mt-8 flex flex-col gap-3">
        {perExam.map(({ exam, answered, accuracy, lastExam, weakest, ready, passed, passedOn }, i) => (
          <ExamSummaryCard
            style={{ "--i": i + 3 } as React.CSSProperties}
            key={exam.id}
            exam={exam}
            answered={answered}
            accuracy={accuracy}
            lastExam={lastExam}
            ready={ready}
            weakest={weakest}
            passed={passed}
            passedOn={passedOn}
            onContinue={() => onContinue(exam.id)}
            onDetails={() => onDetails(exam.id)}
          />
        ))}
      </div>
      <AdSlot slot="dashboard" />
    </main>
  )
}

function ExamSummaryCard({ exam, answered, accuracy, lastExam, weakest, ready, passed, passedOn, onContinue, onDetails, style }: {
  exam: ExamMeta
  answered: number
  accuracy: number | null
  lastExam: { scaled: number; date: string } | null
  ready: Readiness | null
  weakest: { name: string; pct: number } | null
  passed: boolean
  passedOn?: string
  onContinue: () => void
  onDetails: () => void
  style?: React.CSSProperties
}) {
  const started = answered > 0
  return (
    <Card className="stagger-item p-5" style={style} data-testid="dash-exam-card">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <div className="flex min-w-48 items-center gap-3">
          <ExamEmblem examId={exam.id} className={cn("size-6", VENDORS[exam.vendor].tintClass)} />
          <span>
            <p className="font-mono text-xs text-muted-foreground">{exam.code}</p>
            <p className="font-heading flex flex-wrap items-center gap-2 text-lg font-semibold">
              {exam.cert} {exam.name}
              {passed && (
                <span
                  className="bg-success/10 text-success inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold"
                  data-testid="dash-passed"
                >
                  <BadgeCheck className="size-3" strokeWidth={2.5} />
                  Passed
                </span>
              )}
            </p>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          {/* Passed outranks practice history. Once the real exam is behind
              you, a projected score and a "weakest domain" nag are answering a
              question you have already settled, so the row collapses to the
              milestone whether or not there is practice behind it. The stats
              are still one click away under Details. */}
          {passed ? (
            <span className="text-muted-foreground">
              {passedOn ? `Passed on ${passedOn}` : "Marked as passed"}
            </span>
          ) : started ? (
            <>
              <span className="font-mono tabular-nums">
                {answered} answered · {accuracy}%
              </span>
              {lastExam && (
                <span
                  className={cn(
                    "rounded-md border px-2 py-0.5 font-mono text-xs font-semibold tabular-nums",
                    // Per-exam cut score, not a flat 700: Core 1 passes at 675
                    // and Security+ at 750, so a global constant mislabels both.
                    lastExam.scaled >= exam.scale.pass ? "border-success/50 text-success" : "border-destructive/40 text-destructive",
                  )}
                >
                  last exam {lastExam.scaled}
                </span>
              )}
              {/* Only once the estimate has cleared its evidence gate. The old
                  "tracking 804-845" named neither the quantity nor its scale.
                  The pass line lives in the hover rather than inline to keep
                  this row short. Still a band and still no verdict -- a
                  practice bank cannot promise a real exam result. */}
              {ready?.band && (
                <span
                  className="text-muted-foreground font-mono text-xs tabular-nums"
                  data-testid="dash-readiness"
                  title={`Estimated from your practice so far, as a range rather than a single number. ${exam.code} passes at ${exam.scale.pass} on a ${exam.scale.max}-point scale.`}
                >
                  Projected scaled score: {ready.band.low}-{ready.band.high}
                </span>
              )}
              {weakest && weakest.pct < 70 && (
                <span className="text-muted-foreground">
                  weakest: {weakest.name} ({weakest.pct}%)
                </span>
              )}
            </>
          ) : (
            <span className="text-muted-foreground">Not started</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {started && (
            <Button variant="ghost" size="sm" onClick={onDetails} data-testid="dash-details">
              Details
            </Button>
          )}
          <Button size="sm" onClick={onContinue} className="gap-1.5">
            {started ? "Continue" : "Start"}
            <ArrowRight className="size-3.5" strokeWidth={2} />
          </Button>
        </div>
      </div>
    </Card>
  )
}
