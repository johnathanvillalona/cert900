import { Timer, ListChecks, Puzzle, ChartLine, ArrowRight } from "lucide-react"
import type { ExamDef } from "@/data/types"
import { useProgress } from "@/hooks/useProgress"
import { weakTopics } from "@/lib/engine"

const MODES = [
  { key: "exam", icon: Timer, title: "Full Exam", desc: "90 timed minutes, PBQs plus multiple choice, scored 100 to 900. No feedback until you finish, just like the real thing." },
  { key: "drill", icon: ListChecks, title: "Question Drill", desc: "Short adaptive rounds with an explanation and the matching Professor Messer video after every answer." },
  { key: "pbq", icon: Puzzle, title: "PBQ Lab", desc: "Just the performance-based questions: matching and ordering scenarios with full feedback." },
  { key: "progress", icon: ChartLine, title: "My Progress", desc: "Mastery map by topic, weak areas to review, and your exam score history." },
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
      <p className="font-mono text-xs text-muted-foreground">
        {exam.cert} {exam.name} · {exam.code}
      </p>
      <h1 className="font-heading mt-1 text-3xl font-semibold tracking-tight">Practice like it's exam day.</h1>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {MODES.map((m) => (
          <button
            key={m.key}
            data-testid={`mode-${m.key}`}
            className="group cursor-pointer rounded-lg border bg-card p-5 text-left transition-colors duration-200 hover:border-primary"
            onClick={handlers[m.key]}
          >
            <span className="flex items-center justify-between">
              <m.icon className="size-5 text-brand" strokeWidth={2} />
              <ArrowRight className="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand" strokeWidth={2} />
            </span>
            <span className="font-heading mt-3 block text-lg font-semibold">{m.title}</span>
            <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">{m.desc}</span>
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-lg border bg-card p-5 text-sm leading-relaxed" data-testid="home-snapshot">
        <span className="font-mono tabular-nums">{exam.questions.length}</span> questions and{" "}
        <span className="font-mono tabular-nums">{exam.pbqs.length}</span> PBQs in the {exam.cert} {exam.name} ({exam.code})
        bank, covering all {Object.keys(exam.domains).length} exam domains.{" "}
        {totals.q === 0 ? (
          "Your progress will be tracked automatically from your first answer."
        ) : (
          <>
            You have answered <span className="font-mono font-semibold tabular-nums">{totals.q}</span> so far
            {weak > 0 ? (
              <>
                {" "}with <span className="font-semibold text-destructive">{weak} weak topic{weak > 1 ? "s" : ""}</span> flagged.
                A weak-topics drill would hit those first.
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
      </div>
    </main>
  )
}
