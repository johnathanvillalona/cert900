import { useState } from "react"
import { Plus } from "lucide-react"
import { EXAM_ORDER } from "@/data/meta"
import { Button } from "@/components/ui/button"
import { PlanCard } from "@/components/PlanCard"
import { useProgress } from "@/hooks/useProgress"
import { activePlans } from "@/lib/plan"
import { PlanWizard } from "@/screens/PlanWizard"

/**
 * The /plan hub: what you are already working on, plus a door to a new plan.
 *
 * Pressing "Study plan" used to drop you straight into the wizard every single
 * time, with no way to see or reopen a plan you had already built. The wizard
 * is unchanged and rendered here rather than duplicated -- this screen only
 * decides which of the two views you get.
 *
 * With no plans yet it IS the wizard, so a first-time visitor still gets the
 * short funnel instead of an empty-state wall.
 */
export function Plans({ onOpenPlan, onFinish, onCancel }: {
  onOpenPlan: (examId: string) => void
  onFinish: (examId: string, date: string | null) => void
  onCancel: () => void
}) {
  const store = useProgress()
  const plans = activePlans(store.all, EXAM_ORDER)
  const [creating, setCreating] = useState(false)

  if (plans.length === 0 || creating) {
    return (
      <PlanWizard
        onFinish={onFinish}
        // "Back to plans" only makes sense when there are plans to go back to.
        backLabel={plans.length > 0 ? "Back to plans" : undefined}
        onCancel={plans.length > 0 ? () => setCreating(false) : onCancel}
      />
    )
  }

  return (
    <main className="mx-auto max-w-3xl" data-testid="plans-list">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-semibold tracking-tight">Study plans</h1>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            {plans.length === 1 ? "One plan running." : `${plans.length} plans running.`} Each one weights the
            weeks by what its exam tests and what you have already shown you know.
          </p>
        </div>
        <Button onClick={() => setCreating(true)} data-testid="plans-new">
          <Plus className="size-4" strokeWidth={2} />
          New study plan
        </Button>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {plans.map((id, i) => (
          <PlanCard
            key={id}
            examId={id}
            onOpen={() => onOpenPlan(id)}
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
      </div>
    </main>
  )
}
