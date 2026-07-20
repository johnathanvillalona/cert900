import { useState } from "react"
import type { ExamDef } from "@/data/types"
import type { QuizConfig } from "@/lib/quiz-session"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

function Seg<T extends string | number>(props: {
  value: T
  options: { v: T; label: string }[]
  onChange: (v: T) => void
  testid?: string
}) {
  return (
    <div className="inline-flex overflow-hidden rounded-md border" data-testid={props.testid} role="group">
      {props.options.map((o) => (
        <button
          key={String(o.v)}
          className={cn(
            "px-3.5 py-2 text-sm transition-colors",
            o.v === props.value ? "bg-primary text-primary-foreground font-medium" : "hover:bg-accent",
          )}
          aria-pressed={o.v === props.value}
          onClick={() => props.onChange(o.v)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export function DrillSetup({ exam, onStart, onBack }: { exam: ExamDef; onStart: (cfg: QuizConfig) => void; onBack: () => void }) {
  const [n, setN] = useState(10)
  const [focus, setFocus] = useState<"all" | "weak">("all")
  const [domain, setDomain] = useState(0)

  return (
    <main>
      <Card className="p-6">
        <h2 className="text-xl font-semibold">Question Drill</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Feedback after every question, with a link to the{" "}
          {exam.vendor === "comptia" ? "Professor Messer" : "training"} video for that topic.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
          <div>
            <p className="font-medium">Length</p>
            <p className="text-muted-foreground text-xs">How many questions this round</p>
          </div>
          <Seg testid="seg-len" value={n} onChange={setN} options={[{ v: 10, label: "10" }, { v: 25, label: "25" }, { v: 50, label: "50" }]} />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
          <div>
            <p className="font-medium">Focus</p>
            <p className="text-muted-foreground text-xs">"Weak topics" weights questions toward what you've been missing</p>
          </div>
          <Seg testid="seg-focus" value={focus} onChange={setFocus} options={[{ v: "all", label: "Everything" }, { v: "weak", label: "Weak topics" }]} />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
          <div>
            <p className="font-medium">Domain</p>
            <p className="text-muted-foreground text-xs">Limit to one exam domain, or mix them all</p>
          </div>
          <Seg
            testid="seg-dom"
            value={domain}
            onChange={setDomain}
            options={[{ v: 0, label: "All" }, ...Object.keys(exam.domains).map((d) => ({ v: Number(d), label: exam.domains[Number(d)].split(" ")[0] }))]}
          />
        </div>

        <div className="mt-6 flex gap-2">
          <Button data-testid="start-drill" onClick={() => onStart({ mode: "practice", n, focusWeak: focus === "weak", domain })}>
            Start drill
          </Button>
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
        </div>
      </Card>
    </main>
  )
}
