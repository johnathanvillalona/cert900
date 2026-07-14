import { useState } from "react"
import { Flag } from "lucide-react"
import { toast } from "sonner"
import { reportQuestion } from "@/lib/report"
import { cn } from "@/lib/utils"

/** Tiny "report this question" affordance for feedback panels and review lists. */
export function ReportButton({ examId, refId, className }: { examId: string; refId: string; className?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle")

  return (
    <button
      disabled={state !== "idle"}
      data-testid="report-question"
      onClick={async () => {
        setState("sending")
        const ok = await reportQuestion(examId, refId)
        if (ok) {
          setState("sent")
          toast("Thanks. This question is flagged for review.")
        } else {
          setState("idle")
          toast("Could not send the report. Try again in a minute.")
        }
      }}
      className={cn(
        "text-muted-foreground inline-flex cursor-pointer items-center gap-1.5 font-mono text-xs underline-offset-2 transition-colors hover:text-foreground hover:underline disabled:cursor-default disabled:opacity-70",
        className,
      )}
    >
      <Flag className="size-3" strokeWidth={2} />
      {state === "sent" ? "Reported" : state === "sending" ? "Sending" : "Report this question"}
    </button>
  )
}
