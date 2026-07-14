import { ArrowRight } from "lucide-react"
import type { ExamDef } from "@/data/types"
import { useProgress } from "@/hooks/useProgress"

export function ExamPicker({ exams, onChoose }: { exams: ExamDef[]; onChoose: (id: string) => void }) {
  const store = useProgress()
  return (
    <main>
      <h1 className="font-heading text-3xl font-semibold tracking-tight">Pick your exam.</h1>
      <p className="text-muted-foreground mt-2 max-w-lg text-sm">
        Progress is tracked separately for each. Start with the one on your calendar.
      </p>
      <div className="mt-6 border-t" data-testid="exam-grid">
        {exams.map((ex) => {
          const p = store.all[ex.id]
          const answered = p ? Object.values(p.topics).reduce((a, s) => a + s.t, 0) : 0
          return (
            <button
              key={ex.id}
              onClick={() => onChoose(ex.id)}
              data-testid="exam-card"
              className="group grid w-full cursor-pointer grid-cols-1 items-center gap-2 border-b px-2 py-5 text-left transition-colors duration-200 hover:bg-accent sm:grid-cols-12 sm:gap-4"
            >
              <span className="font-mono text-sm text-muted-foreground sm:col-span-2">{ex.code}</span>
              <span className="sm:col-span-6">
                <span className="font-heading text-lg font-semibold sm:text-xl">
                  {ex.cert} {ex.name}
                </span>
                <span className="text-muted-foreground mt-0.5 block text-sm">{ex.blurb}</span>
              </span>
              <span className="font-mono text-xs text-muted-foreground tabular-nums sm:col-span-3 sm:text-right">
                {ex.questions.length} questions · {ex.pbqs.length} PBQs
                <span className="block">
                  {Object.keys(ex.domains).length} domains
                  {answered > 0 && <span className="text-brand"> · {answered} answered</span>}
                </span>
              </span>
              <ArrowRight
                className="hidden size-4 justify-self-end text-brand transition-transform duration-200 group-hover:translate-x-1 sm:col-span-1 sm:block"
                strokeWidth={2}
              />
            </button>
          )
        })}
      </div>
    </main>
  )
}
