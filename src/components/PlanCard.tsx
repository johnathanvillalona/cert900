import { useState } from "react"
import { ArrowRight, CalendarDays } from "lucide-react"
import { EXAM_META } from "@/data/meta"
import { examShortName } from "@/data/labels"
import { VENDORS } from "@/data/vendors"
import { ExamEmblem } from "@/components/exam-art"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useProgress } from "@/hooks/useProgress"
import { buildPlan } from "@/lib/plan"
import { countdownCopy, dayNumber } from "@/lib/progress"
import { cn } from "@/lib/utils"

/**
 * One active study plan, shared by the /plan hub and the dashboard's "Plans in
 * progress" section so the two can never drift apart.
 *
 * Everything shown comes from EXAM_META plus buildPlan, never a question bank:
 * both mounts render every plan at once, and pulling eleven banks to print
 * eleven countdowns would be absurd.
 */
export function PlanCard({ examId, compact = false, onOpen, style }: {
  examId: string
  /** Dashboard mount: drops the focus line and Remove to stay scannable. */
  compact?: boolean
  onOpen: () => void
  style?: React.CSSProperties
}) {
  const store = useProgress()
  const [confirming, setConfirming] = useState(false)
  const meta = EXAM_META[examId]
  const p = store.get(examId)
  const today = dayNumber()

  if (!meta) return null

  const plan = buildPlan(meta, p, today)
  const countdown = p.examDate ? countdownCopy(p.examDate, today) : null
  const focus = [...plan.domains].sort((a, b) => b.share - a.share)[0]

  return (
    <Card className={cn("p-5", !compact && "stagger-item")} style={style} data-testid="plan-card" data-exam={examId}>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <div className="flex min-w-48 items-center gap-3">
          <ExamEmblem examId={examId} className={cn("size-6 shrink-0", VENDORS[meta.vendor].tintClass)} />
          <span className="min-w-0">
            <p className="font-mono text-xs text-muted-foreground">{meta.code}</p>
            <p className="font-heading text-lg font-semibold">{examShortName(meta)}</p>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm">
          <span className={cn("flex items-center gap-1.5", countdown ? "text-brand font-medium" : "text-muted-foreground")}>
            <CalendarDays className="size-3.5 shrink-0" strokeWidth={2} />
            {countdown ?? "No exam date yet"}
          </span>
          <span className="text-muted-foreground font-mono text-xs tabular-nums">
            ~{plan.weeklyQ}/week over {plan.weeks} {plan.weeks === 1 ? "week" : "weeks"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" onClick={onOpen} className="gap-1.5" data-testid="plan-open">
            Open plan
            <ArrowRight className="size-3.5" strokeWidth={2} />
          </Button>
        </div>
      </div>

      {!compact && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t pt-4">
          {focus && (
            <p className="text-muted-foreground min-w-0 text-sm">
              Focus now: <span className="text-foreground font-medium">{focus.name}</span>
              <span className="font-mono text-xs tabular-nums"> · {Math.round(focus.share * 100)}% of the time</span>
            </p>
          )}
          {/* Two-step, because the click is easy to make by accident and the
              word "remove" next to a study record reads as data loss. */}
          {confirming ? (
            <span className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground">Remove the plan? Your answers and stats stay.</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  store.clearPlan(examId)
                  setConfirming(false)
                }}
                data-testid="plan-remove-confirm"
              >
                Yes, remove
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setConfirming(false)} data-testid="plan-remove-cancel">
                Keep it
              </Button>
            </span>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              onClick={() => setConfirming(true)}
              data-testid="plan-remove"
            >
              Remove plan
            </Button>
          )}
        </div>
      )}
    </Card>
  )
}
