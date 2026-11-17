import { useMemo, useState } from "react"
import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import { VENDORS, VENDOR_ORDER } from "@/data/vendors"
import type { ExamMeta } from "@/data/types"
import { useProgress } from "@/hooks/useProgress"
import { shuffle } from "@/lib/engine"
import { reviewCount } from "@/lib/review"
import { dayNumber } from "@/lib/progress"
import { allSessions, studyStreak } from "@/lib/stats"
import { questionOfTheDay, type DailyPick } from "@/lib/qotd"
import { siteFaq, vendorList } from "@/lib/copy"
import { QotdPbq, QotdPbqFooter } from "@/components/QotdPbq"
import { NewsletterSignup } from "@/components/NewsletterSignup"
import { cn } from "@/lib/utils"
import { CalendarDays, ChartLine, Check, Plus, X } from "lucide-react"
import { ExamEmblem } from "@/components/exam-art"
import { AccountMenu } from "@/components/AccountMenu"
import { ExamsMenu } from "@/components/ExamsMenu"
import { SearchPalette } from "@/components/SearchPalette"
import { SiteFooter } from "@/components/SiteFooter"
import { AppPromo } from "@/components/AppPromo"
import { Wordmark } from "@/components/Wordmark"
import { StudyGuideAction } from "@/components/StudyLinks"
import { HomepageLearningLinks } from "@/components/LearningDestinations"

/**
 * Real product in the hero: the question of the day, fully answerable.
 *
 * Some days that item is a match or order PBQ rather than multiple choice.
 * The pool carries both kinds so the hero shows off the interactive formats
 * too, not just the four-option questions.
 */
function LiveQuestion() {
  const pick = useMemo(() => questionOfTheDay(), [])
  const [pbqGraded, setPbqGraded] = useState(false)

  if (pick.kind === "pbq") {
    return (
      <div className="rounded-lg border bg-card p-5 shadow-sm" data-testid="live-question">
        <p className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Question of the day</span>
          <span>
            <span className="font-mono">{pick.code}</span>, {pick.pbq.kind === "match" ? "matching" : "ordering"}
          </span>
        </p>
        <p className="mt-2 font-medium leading-snug">{pick.pbq.title}</p>
        <QotdPbq pick={pick} onGraded={() => setPbqGraded(true)} />
        {pbqGraded && (
          <div role="status" className="enter-fade-rise">
            <QotdPbqFooter pick={pick} />
            <p className="text-muted-foreground mt-2 text-sm">
              A new question of the day appears here each day.
            </p>
            <NewsletterSignup />
          </div>
        )}
      </div>
    )
  }

  return <LiveMcQuestion pick={pick} />
}

function LiveMcQuestion({ pick }: { pick: Extract<DailyPick, { kind: "mc" }> }) {
  const q = pick.q
  const order = useMemo(() => shuffle(q.o.map((_, i) => i)), [q])
  const [sel, setSel] = useState<number | null>(null)
  const graded = sel !== null
  const ok = sel === q.a

  return (
    <div className="rounded-lg border bg-card p-5 shadow-sm" data-testid="live-question">
      <p className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">Question of the day</span>
        <span><span className="font-mono">{pick.code}</span>, {pick.domain}</span>
      </p>
      <p className="mt-2 font-medium leading-snug">{q.x}</p>
      <div className="mt-3 flex flex-col gap-1.5">
        {order.map((oi, pos) => {
          const state = graded ? (oi === q.a ? "correct" : oi === sel ? "wrong" : "idle") : "idle"
          return (
            <button
              key={oi}
              disabled={graded}
              onClick={() => setSel(oi)}
              className={cn(
                "pressable flex w-full cursor-pointer items-center gap-2.5 rounded-md border px-3 py-2 text-left text-sm transition-[color,background-color,border-color,transform] duration-200",
                state === "idle" && !graded && "hover:border-primary hover:bg-accent",
                state === "correct" && "border-success bg-success/10",
                state === "wrong" && "border-destructive bg-destructive/10",
              )}
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border text-xs font-semibold">
                {state === "correct" ? <Check className="pop-in size-3.5" strokeWidth={2.5} /> : state === "wrong" ? <X className="pop-in size-3.5" strokeWidth={2.5} /> : "ABCD"[pos]}
              </span>
              {q.o[oi]}
            </button>
          )
        })}
      </div>
      {graded && (
        <div role="status" className="enter-fade-rise mt-3 border-t pt-3 text-sm">
          <p className="font-semibold">{ok ? "Correct." : "Incorrect."}</p>
          <p className="text-muted-foreground mt-1">{q.e}</p>
          <a
            href={pick.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 font-medium text-brand underline-offset-4 hover:underline"
          >
            Related video: {pick.vendor === "comptia" ? `Professor Messer, ${pick.videoName}` : pick.videoName}
          </a>
          <p className="text-muted-foreground mt-2 text-sm">
            A new question of the day appears here each day.
          </p>
          <NewsletterSignup />
        </div>
      )}
    </div>
  )
}

function ContinueHero({ started, streak, onChoose }: { started: { exam: ExamMeta; answered: number; lastScaled: number | null; due: number }[]; streak: number; onChoose: (id: string) => void }) {
  const totalDue = started.reduce((a, s) => a + s.due, 0)
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-5">
        <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">Welcome back</h1>
        <p className="text-muted-foreground mt-4 max-w-md text-lg">
          {totalDue > 0
            ? `${totalDue} ${totalDue === 1 ? "question is" : "questions are"} due for review today.`
            : "Everything is where you left it."}
        </p>
        {/* The streak is a fact, not a nag: shown from the second day, never
            paired with guilt copy when it resets. */}
        {streak >= 2 && (
          <p className="mt-3 inline-flex items-center gap-2 rounded-md border bg-card px-3 py-1.5 text-sm tabular-nums" data-testid="streak-chip">
            <span className="text-brand font-semibold">{streak}-day</span> study streak
          </p>
        )}
        <HomepageLearningLinks />
      </div>
      <div className="flex flex-col gap-3 lg:col-span-7">
        {started.map(({ exam, answered, lastScaled, due }) => (
          <article key={exam.id} data-testid="continue-entry" data-exam-id={exam.id} className="min-w-0 rounded-lg border bg-card">
          <button
            onClick={() => onChoose(exam.id)}
            data-testid="continue-practice"
            aria-label={`${due > 0 ? "Review" : "Continue"} practice for ${exam.code}`}
            className="pressable group grid min-w-0 w-full cursor-pointer grid-cols-1 items-center gap-3 rounded-lg p-5 text-left transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 sm:flex sm:justify-between sm:gap-4"
          >
            <span className="min-w-0">
              <span className="font-mono text-xs text-muted-foreground">{exam.code}</span>
              <span className="mt-0.5 block font-heading text-lg font-semibold">
                {exam.cert} {exam.name}
              </span>
              <span className="text-muted-foreground mt-1 block text-sm tabular-nums">
                {answered} answered{lastScaled !== null && ` · last exam ${lastScaled}`}
                {due > 0 && (
                  <span className="text-brand"> · {due} due for review</span>
                )}
              </span>
            </span>
            <span className="flex min-h-11 shrink-0 items-center gap-2 font-medium text-brand">
              {due > 0 ? "Review" : "Continue"}
            </span>
          </button>
          <StudyGuideAction examId={exam.id} className="mx-5 mb-5" />
          </article>
        ))}
      </div>
    </div>
  )
}

function FaqSection() {
  // Derived from the exam registry, never retyped: this block twice shipped a
  // stale exam count after a new bank landed. See src/lib/copy.ts.
  const faq = siteFaq()
  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <h2 className="font-heading text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
      <div className="mt-8 max-w-3xl border-t">
        {faq.map(([q, a]) => (
          <details key={q} className="group border-b">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {q}
              <Plus className="size-4 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45" strokeWidth={2.5} />
            </summary>
            <p className="-mt-1 max-w-2xl pb-5 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function Landing({ onChooseExam, onOpenDashboard, onNavigate, onDrillTopic }: { onChooseExam: (id: string) => void; onOpenDashboard: () => void; onNavigate: (path: string) => void; onDrillTopic: (examId: string, topic: string) => void }) {
  const store = useProgress()

  const exams = useMemo(() => EXAM_ORDER.map((id) => EXAM_META[id]), [])

  const today = dayNumber()
  const started = exams
    .map((exam) => {
      const p = store.all[exam.id]
      const answered = p ? Object.values(p.topics).reduce((a, s) => a + s.t, 0) : 0
      const lastScaled = p && p.exams.length ? p.exams[p.exams.length - 1].scaled : null
      // reviewCount needs only the progress blob, never the bank, so the
      // landing can show due-work without pulling a single question chunk.
      const due = p ? reviewCount(p, today) : 0
      return { exam, answered, lastScaled, due }
    })
    .filter((x) => x.answered > 0)
  const returning = started.length > 0
  const streak = returning ? studyStreak(allSessions(store.all), new Date().toISOString().slice(0, 10)) : 0

  return (
    <div className="min-h-[100dvh]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:border focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      {/* nav */}
      <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
        <nav aria-label="Primary" className="mx-auto flex max-w-6xl flex-col items-start gap-2 px-4 py-2 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="brand-link pressable flex min-h-11 cursor-pointer sm:min-h-0 items-center rounded-md text-sm transition-colors duration-200 hover:text-brand"
            aria-label="cert900, back to top"
            title="cert900"
            data-testid="brand"
          >
            <Wordmark className="text-sm" />
          </button>
          <div className="grid w-full grid-cols-5 items-center gap-1 max-sm:[&_button]:min-h-11 max-sm:[&_button]:min-w-11 max-sm:[&_button]:justify-center max-sm:[&_button]:px-1 sm:flex sm:w-auto sm:gap-2">
            <SearchPalette onChooseExam={onChooseExam} onNavigate={onNavigate} onDrillTopic={onDrillTopic} />
            <button
              onClick={() => onNavigate("/plan")}
              data-testid="landing-plan"
              aria-label="Study plan"
              className="cursor-pointer rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <CalendarDays className="size-4 sm:hidden" strokeWidth={2} />
              <span className="hidden sm:inline">Study plan</span>
            </button>
            <button onClick={onOpenDashboard} data-testid="landing-progress" aria-label="Progress" className="cursor-pointer rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <ChartLine className="size-4 sm:hidden" strokeWidth={2} />
              <span className="hidden sm:inline">Progress</span>
            </button>
            <span data-testid="nav-exam-chips">
              <ExamsMenu currentId={null} onChoose={onChooseExam} />
            </span>
            <AccountMenu onNavigate={onNavigate} />
          </div>
        </nav>
      </header>

      <main id="main">
      {/* hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-16 md:pt-16">
        {returning ? (
          <ContinueHero started={started} streak={streak} onChoose={onChooseExam} />
        ) : (
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <h1 className="font-heading text-[1.9rem] font-bold leading-tight sm:text-4xl lg:text-[2.5rem]">
                Free practice exams and study guides for IT certifications.
              </h1>
              <p className="text-muted-foreground mt-5 max-w-md text-lg leading-relaxed">
                Prepare for {vendorList()} certification exams with original practice questions and clear explanations.
                You can start without an account.
              </p>
              <HomepageLearningLinks />
            </div>
            <div className="lg:col-span-6">
              <LiveQuestion />
            </div>
          </div>
        )}
      </section>

      {/* exam index */}
      <section id="exams" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-4 pb-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">Choose your certification</h2>
        <p className="text-muted-foreground mt-2 max-w-lg">
          Start a practice exam, or open the Study Hub for each exam's guide, videos, and reference sheets.
        </p>
        <div className="mt-8">
          {VENDOR_ORDER.map((v) => {
            const group = exams.filter((ex) => ex.vendor === v)
            if (group.length === 0) return null
            return (
              <div key={v} className="mb-8 last:mb-0">
                <h3 className="border-b pb-2 text-base font-semibold">
                  {VENDORS[v].name}
                </h3>
                {group.map((ex) => {
                  const p = store.all[ex.id]
                  const answered = p ? Object.values(p.topics).reduce((a, s) => a + s.t, 0) : 0
                  return (
                    <article key={ex.id} data-testid="certification-entry" data-exam-id={ex.id}
                      className="mt-3 grid min-w-0 grid-cols-1 items-center rounded-lg border bg-card lg:grid-cols-[minmax(0,1fr)_auto]">
                    <button
                      onClick={() => onChooseExam(ex.id)}
                      data-testid="exam-row"
                      aria-label={`Practice ${ex.cert} ${ex.name} (${ex.code})`}
                      className="group grid min-w-0 w-full cursor-pointer grid-cols-1 items-center gap-2 rounded-lg px-4 py-5 text-left transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 lg:grid-cols-12 lg:gap-4"
                    >
                      <span className="flex items-center gap-2.5 lg:col-span-2">
                        <ExamEmblem examId={ex.id} className={cn("size-7", VENDORS[ex.vendor].tintClass)} />
                        <span className="font-mono text-sm text-muted-foreground">{ex.code}</span>
                      </span>
                      <span className="min-w-0 lg:col-span-5">
                        <span className="font-heading text-xl font-semibold md:text-[1.375rem]">
                          {ex.cert} {ex.name}
                        </span>
                        <span className="text-muted-foreground mt-1 block text-sm">{ex.blurb}</span>
                      </span>
                      <span className="text-sm text-muted-foreground tabular-nums lg:col-span-3 lg:text-right">
                        {Object.keys(ex.domains).length} exam domains
                        {answered > 0 && <span className="block text-brand">{answered} answered so far</span>}
                      </span>
                      <span className="inline-flex min-h-11 items-center justify-self-start rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground lg:col-span-2 lg:justify-self-end">
                        Practice
                      </span>
                    </button>
                    <StudyGuideAction examId={ex.id} className="mx-4 mb-4 lg:mb-0" />
                    </article>
                  )
                })}
              </div>
            )
          })}
        </div>
      </section>

      {/* Certification choices come before optional app promotion. */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <AppPromo />
      </section>

      {/* how it works */}
      <section id="how" className="border-t bg-card">
        <div className="mx-auto grid max-w-6xl scroll-mt-20 gap-10 px-4 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl font-semibold tracking-tight">Ways to study</h2>
            <p className="text-muted-foreground mt-3 max-w-sm leading-relaxed">
              Choose the mode that fits the time you have before your exam.
            </p>
          </div>
          <dl className="flex flex-col gap-7 lg:col-span-7">
            {[
              ["Practice by topic", "Answer short sets of questions and read the explanation after each one. Topics you miss come back more often until you get them right."],
              ["Take a timed exam", "Work through a full-length practice exam with a timer, then review your results by exam domain. Scores use each vendor's published scale where one exists."],
              ["Review what you missed", "Each missed question links to a free training video on that topic. Watch the video, then practice the topic again."],
            ].map(([title, body]) => (
              <div key={title} className="border-l-2 border-primary/60 pl-5">
                <dt className="font-heading text-lg font-semibold">{title}</dt>
                <dd className="text-muted-foreground mt-1 leading-relaxed">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* faq */}
      <FaqSection />
      </main>

      <SiteFooter full onNavigate={onNavigate} />
    </div>
  )
}
