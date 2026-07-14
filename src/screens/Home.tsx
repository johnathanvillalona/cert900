import type { ExamDef } from "@/data/types"
import { useProgress } from "@/hooks/useProgress"
import { weakTopics } from "@/lib/engine"
import { Card } from "@/components/ui/card"

const MODES = [
  { key: "exam", tag: "Simulation", title: "Full Exam", desc: "Timed simulation · PBQs + multiple choice on the 900-point scale. No feedback until you finish, just like Pearson VUE." },
  { key: "drill", tag: "Practice", title: "Question Drill", desc: "Instant explanations and the matching Professor Messer video after every answer. Choose your length and focus." },
  { key: "pbq", tag: "Hands-on", title: "PBQ Lab", desc: "Just the performance-based questions — matching and ordering scenarios with full feedback." },
  { key: "progress", tag: "Tracking", title: "My Progress", desc: "Topic-by-topic mastery map, weak areas to review, and your exam score history." },
] as const

export function Home(props: {
  exam: ExamDef
  onFullExam: () => void
  onDrill: () => void
  onPbqLab: () => void
  onProgress: () => void
}) {
  const { exam } = props
  const store = useProgress()
  const p = store.get(exam.id)
  const totals = Object.values(p.topics).reduce((acc, s) => ({ q: acc.q + s.t, c: acc.c + s.c }), { q: 0, c: 0 })
  const weak = weakTopics(exam, p).length
  const handlers: Record<(typeof MODES)[number]["key"], () => void> = {
    exam: props.onFullExam,
    drill: props.onDrill,
    pbq: props.onPbqLab,
    progress: props.onProgress,
  }

  return (
    <main>
      <h1 className="text-3xl font-bold tracking-tight">Practice like it's exam day.</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {MODES.map((m) => (
          <Card
            key={m.key}
            role="button"
            tabIndex={0}
            data-testid={`mode-${m.key}`}
            className="cursor-pointer p-5 transition-colors hover:border-primary"
            onClick={handlers[m.key]}
            onKeyDown={(e) => e.key === "Enter" && handlers[m.key]()}
          >
            <p className="font-mono text-xs uppercase tracking-wider text-primary">{m.tag}</p>
            <h2 className="mt-1 text-lg font-semibold">{m.title}</h2>
            <p className="text-muted-foreground mt-1 text-sm">{m.desc}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-4 p-5 text-sm" data-testid="home-snapshot">
        <b>{exam.questions.length} questions</b> and <b>{exam.pbqs.length} PBQs</b> in the {exam.cert}{" "}
        {exam.name} ({exam.code}) bank, covering all {Object.keys(exam.domains).length} exam domains.{" "}
        {totals.q === 0 ? (
          "Your progress will be tracked automatically from your first answer."
        ) : (
          <>
            You have answered <b>{totals.q}</b> so far
            {weak > 0 ? (
              <>
                {" "}— <b>{weak} topic{weak > 1 ? "s" : ""}</b> currently flagged as weak. A weak-topics
                drill would hit those first.
              </>
            ) : (
              " with no weak topics flagged. Keep it up."
            )}
          </>
        )}
        {!store.storageAvailable && (
          <p className="text-destructive mt-2 text-xs">
            Note: persistent storage is unavailable in this browser, so progress resets when the page closes.
          </p>
        )}
      </Card>
    </main>
  )
}
