import { useRef, useState } from "react"
import { toast } from "sonner"
import type { ExamDef } from "@/data/types"
import { useProgress } from "@/hooks/useProgress"
import { accuracy, masteryLevel, topicStat, weakTopics, domainNumbers } from "@/lib/engine"
import { domainAccuracy, readiness, READINESS_COPY, recentAccuracy, sessionTrend, studyStreak } from "@/lib/stats"
import { AccuracyTrendChart, DomainAccuracyChart, ExamScoreChart } from "@/components/charts"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { VideoLink } from "@/components/VideoLink"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const LEVEL_CLASSES = ["", "bg-destructive/40 border-destructive/50", "bg-amber-400/60 border-amber-500/60", "bg-success/50 border-success/60", "bg-success border-success"]

export function ProgressScreen({ exam, onHome }: { exam: ExamDef; onHome: () => void }) {
  const store = useProgress()
  const p = store.get(exam.id)
  const [confirmReset, setConfirmReset] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const totals = Object.values(p.topics).reduce((acc, s) => ({ q: acc.q + s.t, c: acc.c + s.c }), { q: 0, c: 0 })
  const weak = weakTopics(exam, p)
  const streak = studyStreak(p.sessions, new Date().toISOString().slice(0, 10))
  const trend = sessionTrend(p.sessions)
  const recent = recentAccuracy(p.sessions)
  const domains = domainAccuracy(exam, p)
  const ready = readiness(exam, p)
  const readyCopy = READINESS_COPY[ready.level]

  const exportProgress = () => {
    const blob = new Blob([store.exportJson()], { type: "application/json" })
    const a = document.createElement("a")
    a.href = URL.createObjectURL(blob)
    a.download = "comptia-trainer-progress.json"
    a.click()
    URL.revokeObjectURL(a.href)
    toast("Progress exported.")
  }

  const importProgress = (file: File) => {
    const r = new FileReader()
    r.onload = () => {
      try {
        store.importJson(String(r.result))
        toast("Progress imported.")
      } catch {
        toast("That file doesn't look like exported progress.")
      }
    }
    r.readAsText(file)
  }

  return (
    <main>
      <p className="font-mono text-xs text-muted-foreground">{exam.cert} {exam.name} · {exam.code}</p>
      <h1 className="font-heading mt-1 text-3xl font-semibold tracking-tight">Detailed progress</h1>

      <Card className="mt-4 p-6" data-testid="readiness">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h2 className="text-lg font-semibold">Where you'd land today</h2>
          <span
            className={cn(
              "font-mono text-xs font-semibold tracking-wide uppercase",
              ready.level === "on-track" && "text-success",
              ready.level === "not-yet" && "text-destructive",
              ready.level === "borderline" && "text-brand",
              ready.level === "insufficient" && "text-muted-foreground",
            )}
            data-testid="readiness-level"
          >
            {readyCopy.label}
          </span>
        </div>

        {ready.band ? (
          <>
            {/* A range, never a point: the underlying sample is far too small
                to justify the precision a single number would imply. */}
            <p className="mt-3 font-mono text-4xl font-bold tabular-nums" data-testid="readiness-band">
              {ready.band.low}
              <span className="text-muted-foreground mx-2 text-2xl font-normal">to</span>
              {ready.band.high}
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
              estimated scaled score, pass line {exam.scale.pass}. Based on{" "}
              <span className="font-mono tabular-nums">{ready.answers}</span> answers covering{" "}
              <span className="font-mono tabular-nums">{Math.round(ready.coverage * 100)}%</span> of the exam weight.
            </p>
          </>
        ) : (
          <p className="text-muted-foreground mt-2 text-sm">
            <span className="font-mono tabular-nums">{ready.answers}</span> answers so far, covering{" "}
            <span className="font-mono tabular-nums">{Math.round(ready.coverage * 100)}%</span> of the exam weight.
          </p>
        )}

        <p className="mt-3 text-sm leading-relaxed">{readyCopy.note}</p>

        {ready.gaps.length > 0 && (
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            No estimate yet for {ready.gaps.map((g) => g.name).join(", ")}. A few questions in{" "}
            {ready.gaps.length === 1 ? "it" : "each"} would sharpen this.
          </p>
        )}

        <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
          An estimate from your practice answers here, not a prediction of your real exam result.
        </p>
      </Card>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4" data-testid="statline">
        {[
          [String(totals.q), "questions answered"],
          [totals.q ? Math.round((totals.c / totals.q) * 100) + "%" : "0%", "overall accuracy"],
          [recent !== null ? recent + "%" : "0%", "recent accuracy (last ~100)"],
          [streak === 1 ? "1 day" : `${streak} days`, "study streak"],
        ].map(([v, k]) => (
          <Card key={k} className="p-4">
            <p className="font-heading text-2xl font-semibold tabular-nums">{v}</p>
            <p className="text-muted-foreground mt-0.5 text-xs">{k}</p>
          </Card>
        ))}
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-base font-semibold">Accuracy per session</h2>
          <p className="text-muted-foreground mb-3 text-xs">Last {Math.min(trend.length, 30) || 30} practice rounds</p>
          <AccuracyTrendChart trend={trend} />
        </Card>
        <Card className="p-5">
          <h2 className="text-base font-semibold">Exam scores</h2>
          <p className="text-muted-foreground mb-3 text-xs">Scaled 100 to {exam.scale.max}. The dashed line is the pass mark.</p>
          <ExamScoreChart exams={p.exams} scale={exam.scale} />
        </Card>
      </div>

      <Card className="mt-3 p-5">
        <h2 className="text-base font-semibold">Accuracy by domain</h2>
        <p className="text-muted-foreground mb-3 text-xs">Exam weight lives in the full simulation; keep every bar above 70%.</p>
        <DomainAccuracyChart stats={domains} />
      </Card>

      <Card className="mt-4 p-6">
        <h2 className="text-lg font-semibold">Needs work</h2>
        <p className="text-muted-foreground text-sm">Topics under 70% accuracy (3+ attempts). Watch the video, then run a weak-topics drill.</p>
        {weak.length === 0 ? (
          <p className="text-muted-foreground mt-3 text-sm">Nothing here yet. Topics show up once you have a few attempts on them.</p>
        ) : (
          <div className="mt-2 divide-y">
            {weak.map((t) => (
              <div key={t} className="flex flex-wrap items-center justify-between gap-2 py-3">
                <div>
                  <p className="font-medium">{exam.videos[t].n}</p>
                  <p className="font-mono text-xs text-destructive">
                    {Math.round((accuracy(p, t) ?? 0) * 100)}% · {topicStat(p, t).t} attempts
                  </p>
                </div>
                <VideoLink exam={exam} topic={t} />
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card className="mt-4 p-6">
        <h2 className="text-lg font-semibold">Mastery map</h2>
        <p className="text-muted-foreground text-sm">
          One block per exam topic, filling in as your accuracy climbs. Tap any block to open its{" "}
          {exam.vendor === "comptia" ? "Professor Messer" : "training"} video.
        </p>
        {domainNumbers(exam).map((d) => (
          <div key={d}>
            <p className="text-muted-foreground mt-4 font-mono text-xs uppercase tracking-wider">{exam.domains[d]}</p>
            <div className="mt-2 grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2">
              {Object.keys(exam.videos)
                .filter((t) => exam.videos[t].d === d)
                .map((t) => {
                  const lvl = masteryLevel(p, t)
                  const s = topicStat(p, t)
                  return (
                    <a
                      key={t}
                      href={exam.videos[t].u}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border p-2.5 transition-colors hover:border-foreground"
                    >
                      <span className="flex gap-1">
                        {[1, 2, 3, 4].map((i) => (
                          <span key={i} className={cn("size-3 rounded-sm border", i <= lvl ? LEVEL_CLASSES[lvl] : "bg-muted")} />
                        ))}
                      </span>
                      <span className="mt-1.5 block text-xs font-medium leading-tight">{exam.videos[t].n}</span>
                      <span className="text-muted-foreground block font-mono text-[10px]">
                        {s.t ? `${Math.round((s.c / s.t) * 100)}% · ${s.t} tries` : "not attempted"}
                      </span>
                    </a>
                  )
                })}
            </div>
          </div>
        ))}
      </Card>

      {p.exams.length > 0 && (
        <Card className="mt-4 p-6">
          <h2 className="text-lg font-semibold">Exam history</h2>
          <div className="mt-2 divide-y font-mono text-sm">
            {p.exams.slice().reverse().map((e, i) => (
              <div key={i} className="flex justify-between py-2 tabular-nums">
                <span>{e.date}</span>
                {/* Each exam has its own cut score (675/700/720/750); a flat 700
                    mislabels Core 1 passes and Security+ fails. */}
                <span className={e.scaled >= exam.scale.pass ? "text-success" : "text-destructive"}>
                  {e.scaled} ({e.pct}%)
                </span>
              </div>
            ))}
          </div>
        </Card>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => setConfirmReset(true)}>Reset this exam's progress</Button>
        <Button variant="outline" onClick={exportProgress} data-testid="export">Export progress</Button>
        <Button variant="outline" onClick={() => fileRef.current?.click()} data-testid="import">Import progress</Button>
        <Button onClick={onHome}>Home</Button>
        <input
          ref={fileRef}
          type="file"
          accept=".json,application/json"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && importProgress(e.target.files[0])}
        />
      </div>
      <p className="text-muted-foreground mt-2 text-xs">
        Progress lives in this browser. Export a backup to move it to another browser or computer (covers all exams).
      </p>

      <Dialog open={confirmReset} onOpenChange={setConfirmReset}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reset {exam.cert} {exam.name} progress?</DialogTitle>
            <DialogDescription>Erases tracked topics and exam history for this exam only. Other exams keep their progress.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmReset(false)}>Cancel</Button>
            <Button
              variant="destructive"
              onClick={() => {
                store.resetExam(exam.id)
                setConfirmReset(false)
                toast("Progress cleared.")
              }}
            >
              Reset
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
