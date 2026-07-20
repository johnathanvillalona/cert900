import { BookOpen } from "lucide-react"
import { AMAZON_DISCLOSURE, studyGuideFor } from "@/lib/affiliate"

/**
 * A small "prefer a book?" study-guide recommendation, secondary to the free
 * video. Renders nothing until an Amazon Associates tag is set (see
 * src/lib/site.ts AFFILIATE), so it is invisible by default. One per Results
 * screen, never in the quiz. The disclosure ships inline as Amazon and the FTC
 * both require.
 */
export function StudyGuideLink({ examId }: { examId: string }) {
  const guide = studyGuideFor(examId)
  if (!guide) return null
  return (
    <div className="mt-6 rounded-lg border bg-card p-4 text-sm" data-testid="study-guide">
      <p className="text-muted-foreground">
        Everything here is free. Prefer to study from a book too?
      </p>
      <a
        href={guide.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        data-testid="study-guide-link"
        className="mt-2 inline-flex items-center gap-2.5 rounded-md border px-3 py-2 font-medium transition-colors duration-200 hover:border-primary hover:bg-accent"
      >
        <span aria-hidden className="flex size-5 items-center justify-center rounded-sm bg-primary text-primary-foreground">
          <BookOpen className="size-3" strokeWidth={2.5} />
        </span>
        <span className="text-brand">{guide.title}</span>
      </a>
      <p className="text-muted-foreground mt-2 text-xs">{AMAZON_DISCLOSURE}</p>
    </div>
  )
}
