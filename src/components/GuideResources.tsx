import { BookOpen, ClipboardCheck } from "lucide-react"
import { EXAM_META } from "@/data/meta"
import { guideExamsForPath } from "@/data/guide-meta"
import { AFFILIATE_DISCLOSURE, AMAZON_DISCLOSURE, practiceOffer, studyGuideFor } from "@/lib/affiliate"

/**
 * Paid study resources on a guide page. Hook-free and context-free like
 * everything else the guides render, because these pages are prerendered with
 * renderToStaticMarkup.
 *
 * Why here at all: the 16 guide pages are the site's entire organic surface,
 * and until now every affiliate link lived on the Results screen, which search
 * cannot reach. A guide reader is deciding how to prepare -- that is the one
 * moment a paid practice-test recommendation is useful rather than noise.
 *
 * Rendering rules, all deliberate:
 * - Returns null when nothing is configured (src/lib/site.ts AFFILIATE) or the
 *   page maps to no exam (pbq, hub, scores, order) or its vendor has no partner
 *   worth recommending (cisco: Boson has no program, and pointing at a worse
 *   product for a commission spends trust this site cannot buy back).
 * - The disclosure is INLINE because the prerendered pages carry no SiteFooter,
 *   so the footer disclosure never reaches these URLs. Tagged links on indexed
 *   pages without a disclosure breach both the FTC guides and Amazon's
 *   operating agreement.
 * - rel="sponsored" on every link: these are crawlable pages, and unmarked paid
 *   links are a manual-action risk.
 */
export function GuideResources({ path }: { path: string }) {
  const examIds = guideExamsForPath(path)
  if (examIds.length === 0) return null

  // One practice offer per vendor, one book per distinct title. The A+ hub
  // covers both cores, which share a vendor and a Meyers all-in-one guide, so
  // both dedupes matter on day one.
  const offers = new Map<string, { title: string; note: string; url: string }>()
  const books = new Map<string, { title: string; url: string }>()
  for (const id of examIds) {
    const vendor = EXAM_META[id]?.vendor
    if (!vendor) continue
    const offer = practiceOffer(vendor)
    if (offer) offers.set(vendor, offer)
    const book = studyGuideFor(id)
    if (book) books.set(book.title, book)
  }
  if (offers.size === 0 && books.size === 0) return null

  const showAmazon = books.size > 0
  const showGeneric = offers.size > 0

  return (
    <section className="mt-12" data-testid="guide-resources">
      <h2 className="font-heading text-2xl font-semibold tracking-tight">Worth paying for</h2>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        Everything on cert900 is free and stays that way. If you want more on top of it, these are
        the paid resources actually worth the money, not a wall of sponsored filler.
      </p>
      <div className="mt-4 flex flex-col gap-3">
        {[...offers.values()].map((o) => (
          <a
            key={o.url}
            href={o.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-start gap-3 rounded-lg border bg-card p-4 transition-colors duration-200 hover:border-primary"
          >
            <span aria-hidden className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <ClipboardCheck className="size-3.5" strokeWidth={2.5} />
            </span>
            <span>
              <span className="block font-medium text-brand">{o.title}</span>
              <span className="text-muted-foreground mt-0.5 block text-sm">{o.note}</span>
            </span>
          </a>
        ))}
        {[...books.values()].map((b) => (
          <a
            key={b.title}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-start gap-3 rounded-lg border bg-card p-4 transition-colors duration-200 hover:border-primary"
          >
            <span aria-hidden className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <BookOpen className="size-3.5" strokeWidth={2.5} />
            </span>
            <span>
              <span className="block font-medium text-brand">{b.title}</span>
              <span className="text-muted-foreground mt-0.5 block text-sm">The book, if you study better on paper.</span>
            </span>
          </a>
        ))}
      </div>
      <p className="text-muted-foreground mt-3 text-xs">
        {showGeneric && AFFILIATE_DISCLOSURE}
        {showGeneric && showAmazon && " "}
        {showAmazon && AMAZON_DISCLOSURE}
      </p>
    </section>
  )
}
