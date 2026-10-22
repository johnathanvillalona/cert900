import type { ReactNode } from "react"
import { AIF_CURRICULUM, AIF_LESSONS, AIF_REVIEWED_ON, AIF_SOURCES, aifSourcesForLesson, type GuideLessonDescriptor } from "@/data/guide-lessons"
import { examPath, studyPath } from "@/data/routes"

export interface LessonContent {
  explanation: ReactNode
  scenario: ReactNode
  comparison?: ReactNode
  diagram?: ReactNode
  misconception: string
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
  resolveSources: (lesson: GuideLessonDescriptor) => readonly { title: string; url: string }[]
}
const awsResources: LearningResources = {
  examId: "aif-c01", contentsId: "aif-lesson-contents", taskLabel: "AWS task references", providerLabel: "AWS",
  videoNotice: "Existing video chapters may use older names or omit newer objectives.", resolveSources: aifSourcesForLesson,
}

/** Pure presentation: no attempt, answer, analytics or consent state. Native HTML works without JS. */
export function LearningLesson({ lesson, content, resources = awsResources }: { lesson: GuideLessonDescriptor; content: LessonContent; resources?: LearningResources }) {
  return <section aria-labelledby={lesson.id} data-testid="learning-lesson" className="min-w-0 scroll-mt-6 border-t pt-8">
    <h2 id={lesson.id} tabIndex={-1} className="scroll-mt-6 font-heading text-2xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4">{lesson.title}</h2>
    <p className="mt-3 rounded-lg border-l-4 border-primary bg-muted/40 p-4 text-base leading-relaxed"><strong>Learning goal:</strong> {lesson.objective}</p>
    <p className="mt-3 text-sm text-muted-foreground">{resources.taskLabel}: {lesson.objectiveRefs.join(", ")}.</p>
    <div data-testid="lesson-explanation" className="mt-5 space-y-4 text-base leading-relaxed [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5">{content.explanation}</div>
    {content.comparison && <div className="mt-5 min-w-0">{content.comparison}</div>}
    {content.diagram && <div className="mt-6 min-w-0">{content.diagram}</div>}
    <div className="mt-6 rounded-lg border bg-card p-4 sm:p-5">
      <h3 className="font-heading text-lg font-semibold">Worked scenario: {lesson.title.replace(/^\d+\. /, "")}</h3>
      <div data-testid="lesson-scenario" className="mt-3 space-y-3 text-base leading-relaxed [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:pl-5">{content.scenario}</div>
    </div>
    <p className="mt-5 text-base leading-relaxed"><strong>Common misconception:</strong> {content.misconception}</p>
    <details data-testid="lesson-check" className="group mt-5 rounded-lg border bg-muted/30">
      <summary className="min-h-11 cursor-pointer rounded-lg p-4 text-base font-semibold leading-relaxed text-brand focus-visible:outline-2 focus-visible:outline-offset-2">Check your understanding: {content.check.prompt}</summary>
      <div className="space-y-3 border-t p-4 text-base leading-relaxed"><p className="text-sm font-medium text-muted-foreground">Unscored self-check. Nothing is submitted or saved.</p>{content.check.explanation}</div>
    </details>
    <nav aria-label={`Study links for ${lesson.title}`} className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-5">
      <a className={`${link} inline-flex min-h-11 items-center`} href={`${studyPath(resources.examId)}#domain-${lesson.domains[0]}`}>Related domain videos</a>
      <a className={`${link} inline-flex min-h-11 items-center`} href={examPath(resources.examId, "drill")}>Open practice drill setup</a>
      <a className={`${link} inline-flex min-h-11 items-center`} href={`#${resources.contentsId}`}>Back to lesson contents</a>
    </nav>
    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">In drill setup, choose {lesson.domains.map(d => `domain ${d}`).join(" or ")}. Links do not preselect a topic. {resources.videoNotice}</p>
    <details className="mt-3">
      <summary className="min-h-11 cursor-pointer py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2">Official references for lesson {lesson.title.split(".")[0]}</summary>
      <ul className="space-y-2 pb-2 text-sm">{resources.resolveSources(lesson).map(source => <li key={source.url}><a className={link} href={source.url}>{source.title} <span className="text-muted-foreground">({resources.providerLabel}, external)</span></a></li>)}</ul>
    </details>
  </section>
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
    <p className="mt-3 text-base leading-relaxed text-muted-foreground">Work through these nine lessons in order, or return to a concept you want to clarify. They are a foundation for further study, not a complete certification course. Worked examples and self-checks are original Cert900 teaching material.</p>
    <ol className="mt-4 grid gap-1 sm:grid-cols-2">{AIF_LESSONS.map(lesson => <li key={lesson.id} className="min-w-0"><a className="flex min-h-11 items-center rounded-md px-2 py-3 text-base font-medium text-brand hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2" href={`#${lesson.id}`}>{lesson.title}</a></li>)}</ol>
  </nav>
}

export function AifCurriculum() {
  return <>
    <p className="mt-3 text-base leading-relaxed text-muted-foreground">The official AIF-C01 guide organizes scored content into five domains. The weights below are AWS's published values, not a promise about an individual exam or Cert900's scoring formula.</p>
    <ComparisonTable caption="Official AIF-C01 domain weights" columns={["AWS exam domain", "Scored content"]} rows={AIF_CURRICULUM.map(domain => [domain.title, `${domain.weight}%`])} />
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Curriculum and service references reviewed {AIF_REVIEWED_ON}, against guide revision 1.1, published April 30, 2026. AWS can revise objectives without changing the exam code. <a className={link} href={AIF_SOURCES.curriculum.url}>Read the official exam guide</a> and <a className={link} href={AIF_SOURCES.revisions.url}>revision history</a>.</p>
  </>
}
