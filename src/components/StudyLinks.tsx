import { ArrowRight, BookOpen, FileText } from "lucide-react"
import { EXAM_META } from "@/data/meta"
import { primaryGuideForExam, resolveStudyResource, studyResourcesForExam } from "@/data/study-resources"
import { cn } from "@/lib/utils"

export function StudyGuideAction({ examId, className }: { examId: string; className?: string }) {
  const guide = primaryGuideForExam(examId)
  if (!guide) return null
  return (
    <a href={guide.path} title={guide.title} aria-label={`${EXAM_META[examId].code} Study Guide`}
      data-testid="study-guide-action" data-exam-id={examId}
      className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary/5 px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2", className)}>
      <BookOpen className="size-4 shrink-0" aria-hidden="true" />Study Guide
    </a>
  )
}

/** Native links intentionally leave the application for complete static documents. */
export function StudyLinks({ examId, references = true }: { examId: string; references?: boolean }) {
  const guide = primaryGuideForExam(examId)
  if (!guide) return null
  const sheets = references ? studyResourcesForExam(examId).references.map(resolveStudyResource) : []
  return (
    <section aria-label={`${EXAM_META[examId].code} study resources`} data-testid="study-resources"
      className="mt-6 min-w-0 rounded-lg border bg-card p-5">
      <div className="flex items-start gap-3">
        <BookOpen className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Free learning resources</p>
          <h2 className="font-heading mt-1 text-xl font-semibold">Study resources</h2>
          <p className="mt-1 text-sm text-muted-foreground">Read the guide for this exam{ sheets.length ? " and review the relevant reference sheets" : " before your next practice session" }.</p>
        </div>
      </div>
      <a href={guide.path} data-testid="primary-study-guide" title={guide.title}
        className="mt-4 flex min-h-11 items-center justify-between gap-3 rounded-md border border-primary/40 bg-primary/5 px-4 py-3 text-sm text-brand hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2">
        <span className="min-w-0"><span className="block font-semibold">Study Guide</span><span className="mt-0.5 block break-words">{guide.heading}</span></span>
        <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
      </a>
      {sheets.length > 0 && <div className="mt-4">
        <h3 className="text-sm font-medium">Reference sheets</h3>
        <ul className="mt-2 flex flex-col gap-2">{sheets.map(sheet => <li key={sheet.id}>
          <a href={sheet.path} data-testid="study-reference" title={sheet.title}
            className="flex min-h-11 items-center gap-2 rounded-md border px-3 py-2 text-sm text-brand hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2">
            <FileText className="size-4 shrink-0" aria-hidden="true" /><span className="min-w-0 break-words">{sheet.heading}</span>
          </a>
        </li>)}</ul>
      </div>}
    </section>
  )
}
