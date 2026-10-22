import type { ReactNode } from "react"
import { AIF_CURRICULUM, AIF_LESSONS, AIF_REVIEWED_ON, AIF_SOURCES, aifSourcesForLesson, type GuideLessonDescriptor } from "@/data/guide-lessons"
import { examPath, studyPath } from "@/data/routes"
import { AZ900_CURRICULUM, AZ900_LESSONS, AZ900_REVIEWED_ON, AZ900_SKILLS_EFFECTIVE, AZ900_SOURCES } from "@/data/az900-lessons"

export interface LessonContent {
  intro: ReactNode
  explanation: ReactNode
  scenarioTitle: string
  scenario: ReactNode
  comparison?: ReactNode
  diagram?: ReactNode
  misconception: string
  takeaway: string
  advanced: { title: string; content: ReactNode }
  check: { prompt: string; explanation: ReactNode }
}

const link = "text-brand underline underline-offset-4 break-words focus-visible:outline-2 focus-visible:outline-offset-4"

/** A future guide supplies its own links and references without adding learner state. */
export interface LearningResources {
  examId: string
  contentsId: string
  taskLabel: string
  providerLabel: string
  videoNotice: string
  referenceLinkClassName?: string
  resolveSources: (lesson: GuideLessonDescriptor) => readonly { title: string; url: string }[]
}
const awsResources: LearningResources = {
  examId: "aif-c01", contentsId: "aif-lesson-contents", taskLabel: "AWS task references", providerLabel: "AWS",
  videoNotice: "Some linked videos were recorded before the latest updates, so they may use older names or leave out newer objectives.", resolveSources: aifSourcesForLesson,
}

/** Pure presentation: no attempt, answer, analytics or consent state. Native HTML works without JS. */
export function LearningLesson({ lesson, content, resources = awsResources }: { lesson: GuideLessonDescriptor; content: LessonContent; resources?: LearningResources }) {
  return <section aria-labelledby={lesson.id} data-testid="learning-lesson" className="min-w-0 scroll-mt-6 border-t pt-8">
    <h2 id={lesson.id} tabIndex={-1} className="scroll-mt-6 font-heading text-2xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4">{lesson.title}</h2>
    <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-muted-foreground"><strong className="text-foreground">You’ll learn to</strong> {lesson.objective}</p>
    <div data-testid="lesson-explanation" className="mt-6 space-y-6 text-base leading-relaxed">
      <div data-testid="lesson-intro" className="max-w-[65ch] space-y-3">{content.intro}</div>
      {content.diagram && <div className="min-w-0">{content.diagram}</div>}
      <div data-testid="lesson-concepts" className="space-y-7">{content.explanation}</div>
    </div>
    {content.comparison && <div className="mt-5 min-w-0">{content.comparison}</div>}
    <div className="mt-7 rounded-lg border-l-4 border-brand/50 bg-muted/25 p-4 sm:p-5">
      <h3 className="font-heading text-lg font-semibold">Worked example: {content.scenarioTitle}</h3>
      <div data-testid="lesson-scenario" className="mt-3 max-w-[65ch] space-y-3 text-base leading-relaxed">{content.scenario}</div>
    </div>
    <p className="mt-5 max-w-[65ch] text-base leading-relaxed"><strong>Watch out:</strong> {content.misconception}</p>
    <p data-testid="lesson-takeaway" className="mt-5 rounded-lg bg-primary/10 p-4 text-base leading-relaxed"><strong>Takeaway:</strong> {content.takeaway}</p>
    <details data-testid="lesson-check" className="group mt-5 rounded-lg border bg-muted/30">
      <summary className="min-h-11 cursor-pointer rounded-lg p-4 text-base font-semibold leading-relaxed text-brand focus-visible:outline-2 focus-visible:outline-offset-2">Check your understanding: {content.check.prompt}</summary>
      <div className="space-y-3 border-t p-4 text-base leading-relaxed [&>p]:max-w-[65ch]"><p data-testid="lesson-check-note" className="text-sm font-medium text-muted-foreground">This is just for practice. It isn’t graded, and your answer isn’t collected or saved.</p>{content.check.explanation}</div>
    </details>
    <details data-testid="lesson-advanced" className="mt-5 rounded-lg border">
      <summary className="min-h-11 cursor-pointer rounded-lg p-4 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2">More detail: {content.advanced.title}</summary>
      <div className="space-y-6 border-t p-4 text-base leading-relaxed sm:p-5 [&>p]:max-w-[65ch]">{content.advanced.content}</div>
    </details>
    <nav aria-label={`Study links for ${lesson.title}`} className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-5">
      <a className={`${link} inline-flex min-h-11 items-center`} href={`${studyPath(resources.examId)}#domain-${lesson.domains[0]}`}>Watch related topic videos</a>
      <a className={`${link} inline-flex min-h-11 items-center`} href={examPath(resources.examId, "drill")}>Set up a practice drill</a>
      <a className={`${link} inline-flex min-h-11 items-center`} href={`#${resources.contentsId}`}>Back to lesson contents</a>
    </nav>
    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">When you set up the drill, choose {lesson.domains.map(d => `domain ${d}`).join(" or ")}. You’ll choose the topic there; the link doesn’t select one for you. {resources.videoNotice}</p>
    <details className="mt-3">
      <summary className="min-h-11 cursor-pointer py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2">Official references for lesson {lesson.title.split(".")[0]}</summary>
      <p className="mb-3 text-sm text-muted-foreground">{resources.taskLabel}: {lesson.objectiveRefs.join(", ")}.</p>
      <ul className="space-y-2 pb-2 text-sm">{resources.resolveSources(lesson).map(source => <li key={source.url}><a className={resources.referenceLinkClassName ? `${link} ${resources.referenceLinkClassName}` : link} href={source.url}>{source.title} <span className="text-muted-foreground">({resources.providerLabel}, external)</span></a></li>)}</ul>
    </details>
  </section>
}

/** A short connected explanation under a descriptive heading, never a generic FAQ row. */
export function LessonConcept({ title, children }: { title: string; children: ReactNode }) {
  return <div data-testid="lesson-concept" className="min-w-0">
    <h3 className="font-heading text-lg font-semibold leading-snug">{title}</h3>
    <div className="mt-3 max-w-[65ch] space-y-3 text-base leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-2">{children}</div>
  </div>
}

export function TeachingSteps({ steps }: { steps: readonly { title: string; body: ReactNode }[] }) {
  return <ol className="space-y-4">{steps.map((step, index) => <li key={step.title} className="flex min-w-0 gap-3 text-base leading-relaxed">
    <span aria-hidden="true" className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold">{index + 1}</span>
    <div className="min-w-0 flex-1"><p className="font-semibold">{step.title}</p><div className="mt-1 max-w-[65ch] space-y-2">{step.body}</div></div>
  </li>)}</ol>
}

export function ComparisonTable({ caption, columns, rows }: { caption: string; columns: readonly string[]; rows: readonly (readonly string[])[] }) {
  return <div role="region" aria-label={caption} tabIndex={0} className="min-w-0 overflow-x-auto rounded-lg border focus-visible:outline-2 focus-visible:outline-offset-2">
    <table className="w-full border-collapse text-left text-sm leading-relaxed">
      <caption className="border-b bg-muted/40 px-4 py-3 text-left text-base font-semibold text-foreground">{caption}</caption>
      <thead><tr>{columns.map(column => <th key={column} scope="col" className="min-w-32 border-b px-4 py-3 align-top font-semibold">{column}</th>)}</tr></thead>
      <tbody>{rows.map((row, n) => <tr key={n}>{row.map((cell, i) => i === 0
        ? <th key={i} scope="row" className="border-b px-4 py-3 align-top font-medium">{cell}</th>
        : <td key={i} className="border-b px-4 py-3 align-top">{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>
}

export function AifLessonContents() {
  return <nav aria-label="AWS lesson contents" className="scroll-mt-6 rounded-xl border bg-card p-5 sm:p-6">
    <h2 id="aif-lesson-contents" tabIndex={-1} className="scroll-mt-6 font-heading text-2xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4">Learn the AIF-C01 foundations</h2>
    <p className="mt-3 text-base leading-relaxed text-muted-foreground">You can work through these nine lessons in order or jump to something you want to understand better. They’re a foundation for further study, not a complete certification course. The worked examples and practice checks are original Cert900 teaching material.</p>
    <ol className="mt-4 grid gap-1 sm:grid-cols-2">{AIF_LESSONS.map(lesson => <li key={lesson.id} className="min-w-0"><a className="flex min-h-11 items-center rounded-md px-2 py-3 text-base font-medium text-brand hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2" href={`#${lesson.id}`}>{lesson.title}</a></li>)}</ol>
  </nav>
}

export function AifCurriculum() {
  return <>
    <p className="mt-3 text-base leading-relaxed text-muted-foreground">AWS organizes the AIF-C01 objectives into five domains. The percentages below are the official domain weights; Cert900 uses its own practice scoring. Use the weights to help plan your study, rather than to predict the questions on an individual exam.</p>
    <ComparisonTable caption="Official AIF-C01 domain weights" columns={["AWS exam domain", "Scored content"]} rows={AIF_CURRICULUM.map(domain => [domain.title, `${domain.weight}%`])} />
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Curriculum and service references reviewed {AIF_REVIEWED_ON}, against guide revision 1.1, published April 30, 2026. AWS can revise objectives without changing the exam code. <a className={link} href={AIF_SOURCES.curriculum.url}>Read the official exam guide</a> and <a className={link} href={AIF_SOURCES.revisions.url}>revision history</a>.</p>
  </>
}

/** The same native presentation and disclosure boundary used by the AWS guide. */
export function Az900LessonContents() {
  return <nav aria-label="Azure lesson contents" className="scroll-mt-6 rounded-xl border bg-card p-5 sm:p-6">
    <h2 id="az900-lesson-contents" tabIndex={-1} className="scroll-mt-6 font-heading text-2xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4">Learn the Azure foundations</h2>
    <p className="mt-3 text-base leading-relaxed text-muted-foreground">Start with what the cloud changes, then work through a small application’s design and operation. You can read these ten lessons in order or return to a concept when you need it. This is a study guide, not a complete certification course. Examples and unscored checks are original Cert900 teaching material.</p>
    <ol className="mt-4 grid gap-1 sm:grid-cols-2">{AZ900_LESSONS.map(lesson => <li key={lesson.id} className="min-w-0"><a className="flex min-h-11 items-center rounded-md px-2 py-3 text-base font-medium text-brand hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4" href={`#${lesson.id}`}>{lesson.title}</a></li>)}</ol>
  </nav>
}

export function Az900Curriculum() {
  return <>
    <p className="mt-3 text-base leading-relaxed text-muted-foreground">Microsoft publishes ranges for the share of exam content in each domain. Cert900’s practice allocation is a separate teaching choice. Neither the ranges nor a practice result predict the questions or result on your certification exam.</p>
    <ComparisonTable caption="Official AZ-900 domain weight ranges" columns={["Microsoft exam domain", "Published range"]} rows={AZ900_CURRICULUM.map(domain => [domain.title, domain.weightRange])} />
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Reviewed {AZ900_REVIEWED_ON} against the skills measured from {AZ900_SKILLS_EFFECTIVE}. The official guide’s change log describes the July update; it lists no later skills version at this review. <a className={link} href={AZ900_SOURCES.curriculum.url}>Check Microsoft’s current AZ-900 study guide</a> before booking.</p>
  </>
}
