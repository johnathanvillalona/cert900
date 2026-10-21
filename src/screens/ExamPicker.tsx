import { ArrowRight, BadgeCheck } from "lucide-react"
import type { ExamMeta } from "@/data/types"
import { VENDORS, VENDOR_ORDER } from "@/data/vendors"
import { useProgress } from "@/hooks/useProgress"
import { ExamEmblem } from "@/components/exam-art"
import { cn } from "@/lib/utils"
import { StudyGuideAction } from "@/components/StudyLinks"

export function ExamPicker({ exams, onChoose }: { exams: ExamMeta[]; onChoose: (id: string) => void }) {
  const store = useProgress()
  return (
    <main className="ambient">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">Pick your exam</h1>
      <p className="text-muted-foreground mt-2 max-w-lg text-sm">
        Progress is tracked separately for each. Start with the one on your calendar.
      </p>
      <div className="mt-6" data-testid="exam-grid">
        {VENDOR_ORDER.map((v) => {
          const group = exams.filter((ex) => ex.vendor === v)
          if (group.length === 0) return null
          return (
            <div key={v} className="mb-6 last:mb-0">
              <p className="text-muted-foreground border-b pb-2 font-mono text-[11px] font-semibold tracking-wider uppercase">
                {VENDORS[v].name}
              </p>
              {group.map((ex) => {
                const p = store.all[ex.id]
                const answered = p ? Object.values(p.topics).reduce((a, s) => a + s.t, 0) : 0
                return (
                  <article key={ex.id} data-testid="certification-entry" data-exam-id={ex.id}
                    className="mt-3 grid min-w-0 grid-cols-1 items-center rounded-lg border bg-card lg:grid-cols-[minmax(0,1fr)_auto]">
                  <button
                    onClick={() => onChoose(ex.id)}
                    data-testid="exam-card"
                    aria-label={`Practice ${ex.cert} ${ex.name} (${ex.code})`}
                    className="group grid min-w-0 w-full cursor-pointer grid-cols-1 items-center gap-2 rounded-lg px-4 py-5 text-left transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 lg:grid-cols-12 lg:gap-4"
                  >
                    <span className="flex items-center gap-2.5 lg:col-span-2">
                      <ExamEmblem examId={ex.id} className={cn("size-6", VENDORS[ex.vendor].tintClass)} />
                      <span className="font-mono text-sm text-muted-foreground">{ex.code}</span>
                    </span>
                    <span className="min-w-0 lg:col-span-5">
                      <span className="font-heading flex flex-wrap items-center gap-2 text-lg font-semibold sm:text-xl">
                        {ex.cert} {ex.name}
                        {p?.passed && (
                          <span className="bg-success/10 text-success inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold">
                            <BadgeCheck className="size-3" strokeWidth={2.5} />
                            Passed
                          </span>
                        )}
                      </span>
                      <span className="text-muted-foreground mt-0.5 block text-sm">{ex.blurb}</span>
                    </span>
                    <span className="font-mono text-xs text-muted-foreground tabular-nums lg:col-span-3 lg:text-right">
                      {ex.questionCount} questions{ex.pbqCount > 0 && ` · ${ex.pbqCount} ${ex.vendor === "comptia" ? "PBQs" : "interactive"}`}
                      <span className="block">
                        {Object.keys(ex.domains).length} domains
                        {answered > 0 && <span className="text-brand"> · {answered} answered</span>}
                      </span>
                    </span>
                    <span className="inline-flex min-h-11 items-center justify-self-start gap-2 rounded-md bg-primary px-3 text-sm font-semibold text-primary-foreground lg:col-span-2 lg:justify-self-end">
                      Practice<ArrowRight className="size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                    </span>
                  </button>
                  <StudyGuideAction examId={ex.id} className="mx-4 mb-4 lg:mb-0" />
                  </article>
                )
              })}
            </div>
          )
        })}
      </div>
    </main>
  )
}
