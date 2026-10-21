import { useLayoutEffect, useRef } from "react"
import type { ExamDef, Question } from "@/data/types"
import { VENDOR_FORMATS } from "@/data/vendors"
import type { QuizOutcome } from "@/lib/quiz-session"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { VideoLink } from "@/components/VideoLink"
import { ReportButton } from "@/components/ReportButton"
import { StudyGuideLink } from "@/components/StudyGuideLink"
import { AppPromo } from "@/components/AppPromo"
import { ShareResult } from "@/components/ShareResult"
import { DONATE_URL } from "@/lib/site"
import { cn } from "@/lib/utils"
import { StudyLinks } from "@/components/StudyLinks"

/**
 * Everything below the score: one paid study recommendation (secondary to the
 * free video, invisible until an affiliate id is set) and the donate ask.
 * Display ads are deliberately NOT here -- EthicalAds lives on the Dashboard
 * only, so a page never carries two monetization units.
 *
 * `celebrate` is the aha moment: a passing exam score, the one instant where
 * someone is genuinely pleased with the site. The best public datapoint for a
 * free tool is one donation per ~4,200 visitors, and a quiet footer-style link
 * is exactly what earns that rate. So here the ask is a real block, it names an
 * amount, and it says what the money is for. Everywhere else it stays the quiet
 * line -- asking hard after a failed exam would be reading the room badly.
 */
function ResultsSupport({ examId, celebrate }: { examId: string; celebrate: boolean }) {
  return (
    <>
      <StudyGuideLink examId={examId} />
      {DONATE_URL && celebrate && (
        <div className="mt-6 rounded-lg border bg-card p-5 text-center" data-testid="results-donate-block">
          <p className="font-heading text-lg font-semibold">Did this get you there?</p>
          <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm leading-relaxed">
            Cert900 is free to use, with no paywall or account requirement. If it was worth
            something to you, five dollars helps keep it running.
          </p>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="results-donate"
            className="pressable mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors duration-200 hover:opacity-90"
          >
            <Heart className="size-4" strokeWidth={2.5} />
            Chip in $5
          </a>
        </div>
      )}
      {DONATE_URL && !celebrate && (
        <p className="text-muted-foreground mt-4 text-center text-sm">
          Cert900 is free and always will be.{" "}
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="results-donate"
            className="text-brand inline-flex items-center gap-1 underline underline-offset-2"
          >
            <Heart className="size-3" strokeWidth={2.5} /> Support the project
          </a>
        </p>
      )}
      <div className="mt-3 text-center">
        <AppPromo variant="line" />
      </div>
    </>
  )
}

function fmtSelection(q: Question, sel: number | number[] | undefined): string {
  if (sel === undefined || (Array.isArray(sel) && sel.length === 0)) return "(none)"
  if (Array.isArray(sel)) return sel.map((i) => q.o[i]).join(" · ")
  return q.o[sel]
}

function fmtCorrect(q: Question): string {
  return q.as ? q.as.map((i) => q.o[i]).join(" · ") : q.o[q.a]
}

export function Results({ exam, outcome, onRetake, onDrillAgain, onProgress, onHome, onReview }: {
  exam: ExamDef
  outcome: QuizOutcome
  onRetake: () => void
  onDrillAgain: () => void
  onProgress: () => void
  onHome: () => void
  onReview: (ids: number[]) => void
}) {
  const heading = useRef<HTMLHeadingElement>(null)
  useLayoutEffect(() => {
    // A fresh completion mounts this screen. Position it after the DOM changes,
    // before paint; later review/consent/progress rerenders must not reposition it.
    // Leave history.scrollRestoration and all other navigation behavior alone.
    heading.current?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  // PBQs are excluded: the review queue serves MC only, since PBQ history has
  // no per-question id to schedule against.
  const missedIds = outcome.review.flatMap((r) => (!r.ok && r.kind === "mc" ? [r.q.id] : []))

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
        <h1 ref={heading} tabIndex={-1} className="sr-only">Session results</h1>
        <Card className="p-8 text-center" data-testid="score-hero">
          <p className="font-mono text-5xl font-bold tabular-nums">
            {correct}/{outcome.review.length}
          </p>
          <p className="text-muted-foreground mt-1 text-sm">answered correctly this {outcome.mode === "pbq" ? "PBQ session" : "drill"}</p>
        </Card>
        <StudyLinks examId={exam.id} references={false} />
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
          {missedIds.length > 0 && (
            <Button onClick={() => onReview(missedIds)} data-testid="redo-misses">
              Redo the {missedIds.length} you missed
            </Button>
          )}
          <Button variant={missedIds.length > 0 ? "outline" : "default"} onClick={onDrillAgain}>
            Another drill
          </Button>
          <Button variant="outline" onClick={onProgress}>My progress</Button>
          <ShareResult exam={exam} outcome={outcome} />
          <Button variant="outline" onClick={onHome}>Home</Button>
        </div>
        <ResultsSupport examId={exam.id} celebrate={false} />
      </main>
    )
  }

  const misses = outcome.review.filter((r) => !r.ok)
  return (
    <main>
      <h1 ref={heading} tabIndex={-1} className="sr-only">Exam results</h1>
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

      <StudyLinks examId={exam.id} references={false} />
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
        {missedIds.length > 0 && (
          <Button onClick={() => onReview(missedIds)} data-testid="redo-misses">
            Redo the {missedIds.length} you missed
          </Button>
        )}
        <Button variant={missedIds.length > 0 ? "outline" : "default"} onClick={onRetake}>
          Retake with fresh questions
        </Button>
        <Button variant="outline" onClick={onProgress}>My progress</Button>
        <ShareResult exam={exam} outcome={outcome} />
        <Button variant="outline" onClick={onHome}>Home</Button>
      </div>
      <ResultsSupport examId={exam.id} celebrate={outcome.pass} />
    </main>
  )
}
