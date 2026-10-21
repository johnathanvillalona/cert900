import type { ReactNode } from "react"
import { ArrowRight, BookOpen, CalendarDays, ChartLine, ExternalLink, FileText, FlaskConical, Play, Target, Timer } from "lucide-react"
import { EXAM_META } from "@/data/meta"
import { examPath } from "@/data/routes"
import { VENDOR_FORMATS } from "@/data/vendors"
import { primaryGuideForExam, relatedGuidesForExam, resolveStudyResource, studyHubForExam, studyResourcesForExam } from "@/data/study-resources"
import { StaticContentShell } from "@/components/StaticContentShell"

const linkStyle = "flex min-h-11 items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"

function ResourceCard({ href, title, description, icon, testid, children }: {
  href: string; title: string; description: string; icon: ReactNode; testid: string; children?: ReactNode
}) {
  return <a href={href} data-testid={testid}
    className="group flex min-w-0 flex-col rounded-lg border bg-card p-5 text-sm transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2">
    <span className="flex items-start justify-between gap-3 text-brand">{icon}<ArrowRight className="size-4 shrink-0" aria-hidden="true" /></span>
    <h3 className="font-heading mt-4 break-words text-lg font-semibold leading-snug text-foreground">{title}</h3>
    <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
    {children}
  </a>
}

function videoProvider(url: string) {
  const hostname = new URL(url).hostname.replace(/^www\./, "")
  return hostname === "youtube.com" || hostname === "youtu.be" ? "YouTube" : hostname === "professormesser.com" ? "Professor Messer" : hostname
}

/** Build-time only. Complete native navigation/details work without JavaScript. */
export function StudyHub({ examId }: { examId: string }) {
  const hub = studyHubForExam(examId)
  const guide = primaryGuideForExam(examId)
  if (!hub || !guide) throw new Error(`Unknown Study Hub: ${examId}`)
  const exam = EXAM_META[examId]
  const references = studyResourcesForExam(examId).references.map(resolveStudyResource)
  const related = relatedGuidesForExam(examId)
  const domains = Object.entries(exam.domains)
  const icon = "size-5 shrink-0"
  return <StaticContentShell>
    <main id="main" data-testid="study-hub" data-exam-id={examId} className="min-w-0">
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <a href="/" className="inline-flex min-h-11 items-center underline-offset-4 hover:text-brand hover:underline">All certifications</a>
        <span aria-hidden="true">/</span><span aria-current="page">{exam.code} Study Hub</span>
      </nav>
      <header className="rounded-xl border bg-card p-5 sm:p-8">
        <p className="font-mono text-sm font-medium text-brand">{exam.code} · Free study resources</p>
        <h1 className="font-heading mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{hub.heading}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{exam.blurb}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">Use this hub to move from reading to video review and practice. Your Study Plan is a separate scheduling tool; this page brings the available learning resources together.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={guide.path} data-testid="hub-primary-guide" className={`${linkStyle} justify-center bg-primary text-primary-foreground hover:bg-primary/90`}>
            <BookOpen className="size-4 shrink-0" aria-hidden="true" />Read the study guide
          </a>
          <a href={examPath(examId)} data-testid="hub-practice-menu" className={`${linkStyle} justify-center border hover:bg-accent`}>
            <Target className="size-4 shrink-0" aria-hidden="true" />Open practice menu
          </a>
        </div>
      </header>
      <nav aria-label="On this Study Hub" className="my-6 flex flex-wrap gap-2 border-b pb-4">
        {[["#resources", "Guides & references"], ["#domains", "Domain videos"], ["#practice", "Practice & progress"]].map(([href, label]) =>
          <a key={href} href={href} className={`${linkStyle} text-brand hover:bg-accent`}>{label}</a>)}
      </nav>

      <section id="resources" aria-labelledby="resources-title" className="scroll-mt-4">
        <h2 id="resources-title" className="font-heading text-2xl font-semibold tracking-tight">Guides and references</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Start with the complete {exam.code} guide, then keep the relevant references close while you study. All resources in this section stay on Cert900.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <ResourceCard href={guide.path} title={guide.heading} description="Review the exam format, worked examples and study advice before your next practice session." icon={<BookOpen className={icon} aria-hidden="true" />} testid="hub-guide-card" />
          {references.map(ref => <ResourceCard key={ref.id} href={ref.path} title={ref.heading}
            description={ref.description} icon={<FileText className={icon} aria-hidden="true" />} testid="hub-reference" />)}
          {related.map(resource => <ResourceCard key={resource.id} href={resource.path} title={resource.heading}
            description={resource.description} icon={<BookOpen className={icon} aria-hidden="true" />} testid="hub-related" />)}
        </div>
      </section>

      <section id="domains" aria-labelledby="domains-title" className="mt-10 scroll-mt-4">
        <h2 id="domains-title" className="font-heading text-2xl font-semibold tracking-tight">Study by exam domain</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">Expand a domain for its existing topic video links. Percentages show the exam blueprint weight, not your progress. Videos open on an external site in a new tab; some topics share a lesson or course chapter.</p>
        <div className="mt-5 flex flex-col gap-3">
          {domains.map(([key, label]) => {
            const topics = Object.entries(exam.videos).filter(([, video]) => video.d === Number(key))
            return <details key={key} data-testid="hub-domain" className="group min-w-0 rounded-lg border bg-card">
              <summary className="flex min-h-16 cursor-pointer list-none items-center gap-3 rounded-lg p-4 focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 flex-1"><span className="block text-base font-semibold">{label}</span><span className="mt-1 block text-sm text-muted-foreground">{topics.length} topic links · {Math.round((exam.examSplit[Number(key)] ?? 0) * 100)}% of exam</span></span>
                <ArrowRight className="size-4 shrink-0 text-brand transition-transform group-open:rotate-90" aria-hidden="true" />
              </summary>
              <ul className="grid gap-2 border-t p-3 sm:grid-cols-2 sm:p-4">{topics.map(([topic, video]) => <li key={topic} className="min-w-0">
                <a href={video.u} data-testid="hub-video" target="_blank" rel="noopener noreferrer"
                  className="flex min-h-16 h-full items-start gap-3 rounded-md border px-3 py-3 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2">
                  <Play className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="min-w-0 flex-1"><span className="block break-words text-sm font-medium">{video.n}</span><span className="mt-1 block text-sm text-muted-foreground">{videoProvider(video.u)} · External video<span className="sr-only">, opens in a new tab</span></span></span>
                  <ExternalLink className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                </a>
              </li>)}</ul>
            </details>
          })}
        </div>
      </section>

      <section id="practice" aria-labelledby="practice-title" className="mt-10 scroll-mt-4">
        <h2 id="practice-title" className="font-heading text-2xl font-semibold tracking-tight">Practice, plans and progress</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">Choose a practice mode, schedule your study or review your recorded progress. These links open the existing learning application; no exam or question starts automatically.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <ResourceCard href={examPath(examId)} title="Timed practice exam" description={`Open the exam menu and choose the ${exam.examMinutes}-minute timed exam. Feedback is shown when you finish.`} icon={<Timer className={icon} aria-hidden="true" />} testid="hub-exam" />
          <ResourceCard href={examPath(examId, "drill")} title="Topic drills" description="Choose domains, topics and the size of a practice round before starting. Review explanations as you go." icon={<Target className={icon} aria-hidden="true" />} testid="hub-drills" />
          {exam.pbqCount > 0 && <ResourceCard href={examPath(examId)} title={VENDOR_FORMATS[exam.vendor].labTitle}
            description={`Open the exam menu and choose ${VENDOR_FORMATS[exam.vendor].labTitle} to practice this exam's interactive items.`} icon={<FlaskConical className={icon} aria-hidden="true" />} testid="hub-lab" />}
          <ResourceCard href={examPath(examId, "plan")} title="Study Plan" description="Open your exam-specific schedule, set a target date and organize your weekly work. Separate from this resource hub." icon={<CalendarDays className={icon} aria-hidden="true" />} testid="hub-plan" />
          <ResourceCard href={examPath(examId, "stats")} title="Your exam progress" description="Review accuracy and domain coverage from your existing practice history. Start practicing to build your record." icon={<ChartLine className={icon} aria-hidden="true" />} testid="hub-progress" />
        </div>
      </section>
    </main>
  </StaticContentShell>
}
