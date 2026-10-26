import { ArrowRight, BookOpen, GraduationCap } from "lucide-react"
import { GUIDE_PATHS } from "@/data/routes"
import { cn } from "@/lib/utils"

/** Native links keep the two entry points available on static pages, too. */
export function LearningDestinations({ prominent = false }: { prominent?: boolean }) {
  return (
    <div data-testid="learning-destinations" className={cn("flex gap-2", prominent ? "flex-col sm:flex-row sm:flex-wrap" : "flex-wrap justify-end gap-x-4")}>
      <a href="/exams" data-testid={prominent ? "hero-cta" : "nav-practice-exams"}
        className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2",
          prominent ? "border border-primary bg-primary px-5 py-3 text-primary-foreground transition-colors hover:bg-primary/90" : "text-foreground underline-offset-4 hover:text-brand hover:underline")}>
        {prominent && <GraduationCap className="size-4 shrink-0" aria-hidden="true" />}Practice exams
        {prominent && <ArrowRight className="size-4 shrink-0" aria-hidden="true" />}
      </a>
      <a href={GUIDE_PATHS.hub} data-testid={prominent ? "hero-study-guides" : "nav-study-guides"}
        className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2",
          prominent ? "border border-primary/50 bg-card px-5 py-3 text-brand transition-colors hover:bg-accent" : "text-foreground underline-offset-4 hover:text-brand hover:underline")}>
        {prominent && <BookOpen className="size-4 shrink-0" aria-hidden="true" />}Study guides
      </a>
    </div>
  )
}

export function HomepageLearningLinks() {
  return (
    <nav aria-label="Start learning" className="mt-7" data-testid="homepage-learning-links">
      <LearningDestinations prominent />
      <a href={GUIDE_PATHS.pbq} data-testid="secondary-pbq-link"
        className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-muted-foreground underline-offset-4 hover:text-brand hover:underline focus-visible:outline-2 focus-visible:outline-offset-2">
        Explore PBQ labs<ArrowRight className="size-3.5 shrink-0" aria-hidden="true" />
      </a>
    </nav>
  )
}
