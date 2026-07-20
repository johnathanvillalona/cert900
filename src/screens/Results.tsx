import type { ExamDef, Question } from "@/data/types"
import { VENDOR_FORMATS } from "@/data/vendors"
import type { QuizOutcome } from "@/hooks/useQuizSession"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { VideoLink } from "@/components/VideoLink"
import { ReportButton } from "@/components/ReportButton"
import { AdSlot } from "@/components/AdSlot"
import { cn } from "@/lib/utils"

function fmtSelection(q: Question, sel: number | number[] | undefined): string {
  if (sel === undefined || (Array.isArray(sel) && sel.length === 0)) return "(none)"
  if (Array.isArray(sel)) return sel.map((i) => q.o[i]).join(" · ")
  return q.o[sel]
}

function fmtCorrect(q: Question): string {
  return q.as ? q.as.map((i) => q.o[i]).join(" · ") : q.o[q.a]
}

export function Results({ exam, outcome, onRetake, onDrillAgain, onProgress, onHome }: {
  exam: ExamDef
  outcome: QuizOutcome
  onRetake: () => void
  onDrillAgain: () => void
  onProgress: () => void
  onHome: () => void
}) {
  if (outcome.mode !== "exam") {
    const correct = outcome.review.filter((r) => r.ok).length
    const missedByTopic = new Map<string, number>()
    for (const r of outcome.review) {
      if (r.ok) continue
      const t = r.kind === "mc" ? r.q.t : r.p.t
      missedByTopic.set(t, (missedByTopic.get(t) ?? 0) + 1)
    }
    return (
      <main>
        <Card className="p-8 text-center" data-testid="score-hero">
          <p className="font-mono text-5xl font-bold tabular-nums">
            {correct}/{outcome.review.length}
          </p>
          <p className="text-muted-foreground mt-1 text-sm">answered correctly this {outcome.mode === "pbq" ? "PBQ session" : "drill"}</p>
        </Card>
        {missedByTopic.size > 0 && (
          <Card className="mt-4 p-6">
            <h2 className="text-lg font-semibold">Topics to review</h2>
            <div className="mt-2 divide-y">
              {[...missedByTopic.entries()].map(([t, n]) => (
                <div key={t} className="flex flex-wrap items-center justify-between gap-2 py-3">
                  <div>
                    <p className="font-medium">{exam.videos[t].n}</p>
                    <p className="text-muted-foreground text-xs">{n} missed</p>
                  </div>
                  <VideoLink exam={exam} topic={t} />
                </div>
              ))}
            </div>
          </Card>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={onDrillAgain}>Another drill</Button>
          <Button variant="outline" onClick={onProgress}>My progress</Button>
          <Button variant="outline" onClick={onHome}>Home</Button>
        </div>
      </main>
    )
  }

  const misses = outcome.review.filter((r) => !r.ok)
  return (
    <main>
      <Card className="p-8 text-center" data-testid="score-hero">
        <p className="relative inline-block">
          <span className={cn("verdict-pop block font-mono text-6xl font-bold tabular-nums", outcome.pass ? "text-success" : "text-destructive")}>
            {outcome.scaled}
          </span>
          {outcome.pass && <span className="ambient-bloom" aria-hidden />}
          {outcome.pass && <span className="ring-pulse" aria-hidden />}
        </p>
        <p className="text-muted-foreground mt-1 text-sm">
          scaled 100 to {exam.scale.max}, pass line {exam.scale.pass}. Raw score {Math.round(outcome.pct * 100)}%
          {outcome.timeUp && " · time expired"}
        </p>
        <p className={cn("verdict-line mt-3 text-lg font-bold", outcome.pass ? "text-success" : "text-destructive")} data-testid="verdict">
          {outcome.pass ? "PASS. Nice work." : "Not yet. The review below shows exactly what to study."}
        </p>
      </Card>

      <Card className="mt-4 p-6">
        <h2 className="text-lg font-semibold">Score by domain</h2>
        <div className="mt-3 flex flex-col gap-3">
          {Object.keys(exam.domains).map((dk) => {
            const d = Number(dk)
            const s = outcome.domainScores[d]
            const pct = s.max ? Math.round((s.pts / s.max) * 100) : 0
            return (
              <div key={d}>
                <div className="flex justify-between text-sm">
                  <span>{exam.domains[d]}</span>
                  <span className="font-mono tabular-nums">{pct}%</span>
                </div>
                <div className="mt-1 h-2.5 overflow-hidden rounded-full border bg-muted">
                  <div
                    className="bar-fill h-full w-full rounded-full bg-primary"
                    style={{ "--pct": pct / 100, "--i": d - 1 } as React.CSSProperties}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      <Card className="mt-4 p-6">
        <h2 className="text-lg font-semibold">Review: {misses.length} to study</h2>
        <p className="text-muted-foreground text-sm">Each one links to the video that covers it.</p>
        {misses.length === 0 && <p className="mt-3">A clean sweep. Nothing to review.</p>}
        <div className="mt-3 flex flex-col gap-3">
          {misses.map((r, i) =>
            r.kind === "mc" ? (
              <div key={i} className="rounded-md border p-4">
                <p className="font-medium">{r.q.x}</p>
                <p className="mt-2 text-sm">
                  Your answer: <span className="text-destructive">{fmtSelection(r.q, r.sel)}</span>
                </p>
                <p className="text-sm">
                  Correct: <b className="text-success">{fmtCorrect(r.q)}</b>
                </p>
                <p className="text-muted-foreground mt-2 text-sm">{r.q.e}</p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <VideoLink exam={exam} topic={r.q.t} />
                  <ReportButton examId={exam.id} refId={`q:${r.q.id}`} />
                </div>
              </div>
            ) : (
              <div key={i} className="rounded-md border p-4">
                <p className="font-mono text-xs text-destructive">
                  {exam.vendor === "comptia"
                    ? `PBQ ${Math.round(r.frac * 100)}%`
                    : `${VENDOR_FORMATS[exam.vendor].itemSuffix[r.p.kind] ?? "Interactive"} · incorrect`}
                </p>
                <p className="mt-1 font-medium">{r.p.title}</p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <VideoLink exam={exam} topic={r.p.t} />
                  <ReportButton examId={exam.id} refId={`pbq:${r.p.title}`} />
                </div>
              </div>
            ),
          )}
        </div>
      </Card>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button onClick={onRetake}>Retake with fresh questions</Button>
        <Button variant="outline" onClick={onProgress}>My progress</Button>
        <Button variant="outline" onClick={onHome}>Home</Button>
      </div>
      <AdSlot slot="results" />
    </main>
  )
}
