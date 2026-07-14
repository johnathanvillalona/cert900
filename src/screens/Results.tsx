import type { ExamDef } from "@/data/types"
import type { QuizOutcome } from "@/hooks/useQuizSession"
import { PASS_SCALED } from "@/lib/engine"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { VideoLink } from "@/components/VideoLink"
import { cn } from "@/lib/utils"

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
        <p className={cn("font-mono text-6xl font-bold tabular-nums", outcome.pass ? "text-green-600" : "text-destructive")}>
          {outcome.scaled}
        </p>
        <p className="text-muted-foreground mt-1 text-sm">
          estimated scaled score (100–900) · {PASS_SCALED} needed to pass · {Math.round(outcome.pct * 100)}% raw
          {outcome.timeUp && " · time expired"}
        </p>
        <p className={cn("mt-3 text-lg font-bold", outcome.pass ? "text-green-600" : "text-destructive")} data-testid="verdict">
          {outcome.pass ? "PASS — nice work." : "Not yet — the review below shows exactly what to study."}
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
                  <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      <Card className="mt-4 p-6">
        <h2 className="text-lg font-semibold">Review — {misses.length} to study</h2>
        <p className="text-muted-foreground text-sm">Every miss links to the Professor Messer video for that topic.</p>
        {misses.length === 0 && <p className="mt-3">Nothing missed. Seriously impressive.</p>}
        <div className="mt-3 flex flex-col gap-3">
          {misses.map((r, i) =>
            r.kind === "mc" ? (
              <div key={i} className="rounded-md border p-4">
                <p className="font-medium">{r.q.x}</p>
                <p className="mt-2 text-sm">
                  Your answer: <span className="text-destructive">{r.sel === undefined ? "(none)" : r.q.o[r.sel]}</span>
                </p>
                <p className="text-sm">
                  Correct: <b className="text-green-700 dark:text-green-500">{r.q.o[r.q.a]}</b>
                </p>
                <p className="text-muted-foreground mt-2 text-sm">{r.q.e}</p>
                <div className="mt-3">
                  <VideoLink exam={exam} topic={r.q.t} />
                </div>
              </div>
            ) : (
              <div key={i} className="rounded-md border p-4">
                <p className="font-mono text-xs text-destructive">PBQ {Math.round(r.frac * 100)}%</p>
                <p className="mt-1 font-medium">{r.p.title}</p>
                <div className="mt-3">
                  <VideoLink exam={exam} topic={r.p.t} />
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
    </main>
  )
}
