import type { ExamDef } from "@/data/types"
import { useProgress } from "@/hooks/useProgress"
import { Card } from "@/components/ui/card"

export function ExamPicker({ exams, onChoose }: { exams: ExamDef[]; onChoose: (id: string) => void }) {
  const store = useProgress()
  return (
    <main>
      <h1 className="text-3xl font-bold tracking-tight">Choose your certification.</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl text-sm">
        Timed exam simulations, performance-based questions, and adaptive drills — with a Professor
        Messer video for every topic you miss. Progress is saved separately for each exam.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2" data-testid="exam-grid">
        {exams.map((ex) => {
          const p = store.all[ex.id]
          const answered = p ? Object.values(p.topics).reduce((a, s) => a + s.t, 0) : 0
          return (
            <Card
              key={ex.id}
              role="button"
              tabIndex={0}
              data-testid="exam-card"
              className="cursor-pointer p-5 transition-colors hover:border-primary focus-visible:ring-2"
              onClick={() => onChoose(ex.id)}
              onKeyDown={(e) => e.key === "Enter" && onChoose(ex.id)}
            >
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {ex.cert} · {ex.code}
              </p>
              <h2 className="mt-1 text-xl font-semibold">{ex.name}</h2>
              <p className="text-muted-foreground mt-2 text-sm">{ex.blurb}</p>
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                {ex.questions.length} questions · {ex.pbqs.length} PBQs · {Object.keys(ex.domains).length} domains
                {answered > 0 && <> · <b className="text-foreground">{answered}</b> answered</>}
              </p>
            </Card>
          )
        })}
      </div>
      <p className="text-muted-foreground mt-10 max-w-3xl text-xs leading-relaxed">
        A free community study resource. Not affiliated with, endorsed by, or sponsored by CompTIA or
        Professor Messer. CompTIA A+<sup>®</sup> and Network+<sup>®</sup> are registered trademarks of
        CompTIA, Inc. All practice questions are original. Video links open Professor Messer's free
        official training courses.{" "}
        <a className="underline" href="mailto:johnathanv16@gmail.com?subject=CompTIA%20Practice%20Trainer%20feedback">
          Report an error
        </a>
        .
      </p>
    </main>
  )
}
