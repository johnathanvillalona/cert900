import { useState } from "react"
import { Check, Share2 } from "lucide-react"
import { toast } from "sonner"
import type { ExamDef } from "@/data/types"
import type { QuizOutcome } from "@/lib/quiz-session"

/** Just the identity and scale fields, so both ExamDef and ExamMeta fit. */
type ShareableExam = Pick<ExamDef, "cert" | "name" | "code" | "scale">
import { SITE_URL } from "@/lib/site"
import { Button } from "@/components/ui/button"

/**
 * Share a finished session.
 *
 * Names the exam and its real cut line rather than posting a bare number: a
 * scaled score means nothing without the scale it came from. Uses the Web Share
 * API where the browser has it (phones, mostly) and falls back to the
 * clipboard everywhere else.
 */
export function buildShareText(exam: ShareableExam, outcome: QuizOutcome): string {
  const right = outcome.review.filter((r) => r.ok).length
  const body =
    outcome.mode === "exam"
      ? `I scored ${outcome.scaled} on a ${exam.cert} ${exam.name} (${exam.code}) practice exam — pass line is ${exam.scale.pass} on a ${exam.scale.max} scale.`
      : `I just drilled ${outcome.review.length} ${exam.cert} ${exam.name} (${exam.code}) questions and got ${right} right.`
  return `${body}\n\nFree practice at ${SITE_URL}`
}

export function ShareResult({ exam, outcome }: { exam: ShareableExam; outcome: QuizOutcome }) {
  const [copied, setCopied] = useState(false)
  const text = buildShareText(exam, outcome)

  return (
    <Button
      variant="outline"
      data-testid="share-result"
      className="gap-1.5"
      onClick={async () => {
        if (navigator.share) {
          try {
            await navigator.share({ text })
            return
          } catch {
            // AbortError when the user dismisses the sheet: fall through to the
            // clipboard rather than reporting a failure they caused.
          }
        }
        try {
          await navigator.clipboard.writeText(text)
          setCopied(true)
          toast("Copied. Paste it anywhere.")
          setTimeout(() => setCopied(false), 2000)
        } catch {
          toast("Could not copy", { description: "Your browser blocked clipboard access." })
        }
      }}
    >
      {copied ? <Check className="size-4" strokeWidth={2} /> : <Share2 className="size-4" strokeWidth={2} />}
      {copied ? "Copied" : "Share result"}
    </Button>
  )
}
