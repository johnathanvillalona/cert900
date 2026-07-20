import { ArrowRight, Flame } from "lucide-react"
import { EXAMS, EXAM_ORDER } from "@/data/index"
import type { ExamDef } from "@/data/types"
import { VENDORS } from "@/data/vendors"
import { ExamEmblem } from "@/components/exam-art"
import { useProgress } from "@/hooks/useProgress"
import { domainAccuracy, studyStreak, allSessions } from "@/lib/stats"
import { PASS_SCALED } from "@/lib/engine"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AdSlot } from "@/components/AdSlot"
import { cn } from "@/lib/utils"

/** One friendly overview for all exams. Detail lives in each exam's progress page. */
export function Dashboard({ onContinue, onDetails, onBrowseExams }: {
  onContinue: (examId: string) => void
  onDetails: (examId: string) => void
  onBrowseExams: () => void
}) {
  const store = useProgress()
  const exams = EXAM_ORDER.map((id) => EXAMS[id])

  const perExam = exams.map((exam) => {
    const p = store.all[exam.id]
    const totals = p
      ? Object.values(p.topics).reduce((acc, s) => ({ q: acc.q + s.t, c: acc.c + s.c }), { q: 0, c: 0 })
      : { q: 0, c: 0 }
    const lastExam = p?.exams.length ? p.exams[p.exams.length - 1] : null
    const domains = p ? domainAccuracy(exam, p).filter((d) => d.attempts >= 3) : []
    const weakest = domains.length ? domains.reduce((a, b) => (b.pct < a.pct ? b : a)) : null
    return { exam, answered: totals.q, accuracy: totals.q ? Math.round((totals.c / totals.q) * 100) : null, lastExam, weakest }
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

  if (totalAnswered === 0) {
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

      <div className="mt-3 flex flex-col gap-3">
        {perExam.map(({ exam, answered, accuracy, lastExam, weakest }, i) => (
          <ExamSummaryCard
            style={{ "--i": i + 3 } as React.CSSProperties}
            key={exam.id}
            exam={exam}
            answered={answered}
            accuracy={accuracy}
            lastExam={lastExam}
            weakest={weakest}
            onContinue={() => onContinue(exam.id)}
            onDetails={() => onDetails(exam.id)}
          />
        ))}
      </div>
      <AdSlot slot="dashboard" />
    </main>
  )
}

function ExamSummaryCard({ exam, answered, accuracy, lastExam, weakest, onContinue, onDetails, style }: {
  exam: ExamDef
  answered: number
  accuracy: number | null
  lastExam: { scaled: number; date: string } | null
  weakest: { name: string; pct: number } | null
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
            <p className="font-heading text-lg font-semibold">
              {exam.cert} {exam.name}
            </p>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          {started ? (
            <>
              <span className="font-mono tabular-nums">
                {answered} answered · {accuracy}%
              </span>
              {lastExam && (
                <span
                  className={cn(
                    "rounded-md border px-2 py-0.5 font-mono text-xs font-semibold tabular-nums",
                    lastExam.scaled >= PASS_SCALED ? "border-success/50 text-success" : "border-destructive/40 text-destructive",
                  )}
                >
                  last exam {lastExam.scaled}
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
