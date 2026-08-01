import { BookOpen, ClipboardCheck } from "lucide-react"
import { EXAM_META } from "@/data/meta"
import { AFFILIATE_DISCLOSURE, AMAZON_DISCLOSURE, practiceOffer, studyGuideFor } from "@/lib/affiliate"

/**
 * One paid study recommendation, secondary to the free video and invisible
 * until an affiliate id is set in src/lib/site.ts. One per Results screen,
 * never in the quiz.
 *
 * When both are configured the practice-test partner wins over the book: a
 * $30 book at Amazon's ~3% pays about $0.90, while the practice-test programs
 * pay 10-20% of a far more expensive product to the same reader. Only ever one
 * of them renders, because a page carrying two monetization units starts to
 * read like the sites this one exists to be an alternative to.
 */
export function StudyGuideLink({ examId }: { examId: string }) {
  const vendor = EXAM_META[examId]?.vendor ?? ""
  const offer = practiceOffer(vendor)
  const book = offer ? null : studyGuideFor(examId)
  if (!offer && !book) return null

  const { title, url, note, disclosure, Icon } = offer
    ? { ...offer, disclosure: AFFILIATE_DISCLOSURE, Icon: ClipboardCheck }
    : { title: book!.title, url: book!.url, note: "", disclosure: AMAZON_DISCLOSURE, Icon: BookOpen }

  return (
    <div className="mt-6 rounded-lg border bg-card p-4 text-sm" data-testid="study-guide">
      <p className="text-muted-foreground">
        {offer ? "Everything here is free. Want a second set of questions too?" : "Everything here is free. Prefer to study from a book too?"}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        data-testid="study-guide-link"
        className="mt-2 inline-flex items-center gap-2.5 rounded-md border px-3 py-2 font-medium transition-colors duration-200 hover:border-primary hover:bg-accent"
      >
        <span aria-hidden className="flex size-5 items-center justify-center rounded-sm bg-primary text-primary-foreground">
          <Icon className="size-3" strokeWidth={2.5} />
        </span>
        <span className="text-brand">{title}</span>
      </a>
      {note && <p className="text-muted-foreground mt-2 text-xs">{note}</p>}
      <p className="text-muted-foreground mt-2 text-xs">{disclosure}</p>
    </div>
  )
}
