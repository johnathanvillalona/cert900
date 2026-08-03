import { useMemo, useState } from "react"
import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import { VENDORS, VENDOR_ORDER } from "@/data/vendors"
import type { ConnectorGlyph, ExamMeta } from "@/data/types"
import { useCountUp } from "@/hooks/useCountUp"
import { useRepelField } from "@/hooks/useRepelField"
import { Glyph } from "@/components/pbq-art"
import { useProgress } from "@/hooks/useProgress"
import { useTheme } from "@/hooks/useTheme"
import { shuffle } from "@/lib/engine"
import { reviewCount } from "@/lib/review"
import { dayNumber } from "@/lib/progress"
import { allSessions, studyStreak } from "@/lib/stats"
import { questionOfTheDay, type DailyPick } from "@/lib/qotd"
import { siteFaq } from "@/lib/copy"
import { QotdPbq, QotdPbqFooter } from "@/components/QotdPbq"
import { NewsletterSignup } from "@/components/NewsletterSignup"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, CalendarDays, ChartLine, Check, Plus, X } from "lucide-react"
import { ExamEmblem } from "@/components/exam-art"
import { ThemeIcon } from "@/components/ThemeIcon"
import { AccountMenu } from "@/components/AccountMenu"
import { ExamsMenu } from "@/components/ExamsMenu"
import { SearchPalette } from "@/components/SearchPalette"
import { SiteFooter } from "@/components/SiteFooter"
import { AppPromo } from "@/components/AppPromo"
import { Wordmark } from "@/components/Wordmark"

/**
 * Real product in the hero: the question of the day, fully answerable.
 *
 * Some days that item is a match or order PBQ rather than multiple choice —
 * the pool carries both kinds so the hero shows off the interactive formats
 * too, not just the four-option questions.
 */
function LiveQuestion() {
  const pick = useMemo(() => questionOfTheDay(), [])
  const [pbqGraded, setPbqGraded] = useState(false)

  if (pick.kind === "pbq") {
    return (
      <div className="rounded-lg border bg-card p-5 shadow-sm" data-testid="live-question">
        <p className="flex flex-wrap items-center gap-x-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <span className="text-brand">Question of the day</span>
          <span>
            {pick.code} · {pick.pbq.kind === "match" ? "matching" : "ordering"}
          </span>
        </p>
        <p className="mt-2 font-medium leading-snug">{pick.pbq.title}</p>
        <QotdPbq pick={pick} onGraded={() => setPbqGraded(true)} />
        {pbqGraded && (
          <div role="status" className="enter-fade-rise">
            <QotdPbqFooter pick={pick} />
            <p className="text-muted-foreground mt-2 font-mono text-xs">
              Every question works like this. A new one lands tomorrow.
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
      <p className="flex flex-wrap items-center gap-x-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        <span className="text-brand">Question of the day</span>
        <span>{pick.code} · {pick.domain}</span>
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
              <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border font-mono text-[11px] font-semibold">
                {state === "correct" ? <Check className="pop-in size-3.5" strokeWidth={2.5} /> : state === "wrong" ? <X className="pop-in size-3.5" strokeWidth={2.5} /> : "ABCD"[pos]}
              </span>
              {q.o[oi]}
            </button>
          )
        })}
      </div>
      {graded && (
        <div role="status" className="enter-fade-rise mt-3 border-t pt-3 text-sm">
          <p className="font-semibold">{ok ? "Correct." : "Not quite."}</p>
          <p className="text-muted-foreground mt-1">{q.e}</p>
          <a
            href={pick.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 font-medium text-brand underline-offset-4 hover:underline"
          >
            Watch: {pick.vendor === "comptia" ? `Professor Messer, ${pick.videoName}` : pick.videoName}
            <ArrowRight className="size-3.5" strokeWidth={2} />
          </a>
          <p className="text-muted-foreground mt-2 font-mono text-xs">
            Every question works like this. A new one lands tomorrow.
          </p>
          <NewsletterSignup />
        </div>
      )}
    </div>
  )
}

/**
 * Decorative IT-icon field behind the hero. Reuses the PBQ bench glyphs
 * (currentColor, theme-aware) -- no icon library, no new art. Hand-placed
 * toward the edges so neither hero branch's copy fights it; a few icons are
 * hidden on phones. Idle drift is pure CSS (.hero-icon-drift); the
 * pointer-repel is the useRepelField rAF (see that file for the rules).
 * Negative animation-delay values desync loops that share a duration.
 */
const HERO_ICONS: { g: ConnectorGlyph; x: number; y: number; s: number; dur: number; delay: number; cls?: string }[] = [
  { g: "rj45", x: 3, y: 14, s: 30, dur: 26, delay: 0 },
  { g: "sata", x: 12, y: 26, s: 22, dur: 32, delay: 21, cls: "hidden lg:block" },
  { g: "multimeter", x: 9, y: 44, s: 24, dur: 31, delay: 9, cls: "hidden lg:block" },
  { g: "molex", x: 17, y: 70, s: 26, dur: 24, delay: 17, cls: "hidden sm:block" },
  { g: "shield", x: 6, y: 80, s: 36, dur: 23, delay: 4, cls: "text-brand" },
  { g: "usb-c", x: 27, y: 6, s: 24, dur: 29, delay: 13, cls: "hidden sm:block" },
  { g: "power", x: 30, y: 84, s: 24, dur: 30, delay: 23 },
  { g: "coax", x: 38, y: 90, s: 26, dur: 27, delay: 6, cls: "hidden sm:block" },
  { g: "lock", x: 50, y: 12, s: 22, dur: 24, delay: 16, cls: "hidden lg:block" },
  { g: "crimper", x: 44, y: 46, s: 24, dur: 28, delay: 26, cls: "hidden lg:block" },
  { g: "punchdown", x: 55, y: 66, s: 24, dur: 33, delay: 2, cls: "hidden lg:block" },
  { g: "hdmi", x: 64, y: 4, s: 26, dur: 28, delay: 11, cls: "hidden sm:block" },
  { g: "lc-fiber", x: 78, y: 20, s: 24, dur: 25, delay: 30, cls: "hidden sm:block" },
  { g: "badge", x: 71, y: 93, s: 24, dur: 25, delay: 19, cls: "hidden sm:block" },
  { g: "keypad", x: 84, y: 8, s: 28, dur: 30, delay: 7 },
  { g: "tester", x: 96, y: 34, s: 30, dur: 22, delay: 14, cls: "text-brand" },
  { g: "dp", x: 88, y: 58, s: 24, dur: 34, delay: 12, cls: "hidden sm:block" },
  { g: "fan", x: 92, y: 84, s: 36, dur: 34, delay: 3 },
]

function HeroIconField() {
  const { fieldRef, itemRefs } = useRepelField(HERO_ICONS)
  return (
    <div ref={fieldRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      {HERO_ICONS.map(({ g, x, y, s, dur, delay, cls }, i) => (
        <div
          key={g}
          ref={(el) => {
            itemRefs.current[i] = el
          }}
          // Centered with negative margins, NOT translate utilities: the repel
          // loop owns style.transform on this element and must never clobber
          // (or be clobbered by) a centering transform.
          className={cn("absolute", cls)}
          style={{ left: `${x}%`, top: `${y}%`, marginLeft: -s / 2, marginTop: -s / 2 }}
        >
          <div
            className={cn("hero-icon-drift opacity-[0.20] dark:opacity-[0.26]", !cls?.includes("text-brand") && "text-muted-foreground")}
            style={{ width: s, height: s, animationDuration: `${dur}s`, animationDelay: `-${delay}s` }}
          >
            <Glyph g={g} className="size-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

function ContinueHero({ started, streak, onChoose }: { started: { exam: ExamMeta; answered: number; lastScaled: number | null; due: number }[]; streak: number; onChoose: (id: string) => void }) {
  const totalDue = started.reduce((a, s) => a + s.due, 0)
  return (
    <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-5">
        <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">Welcome back</h1>
        <p className="text-muted-foreground mt-4 max-w-md text-lg">
          {totalDue > 0
            ? `${totalDue} ${totalDue === 1 ? "question is" : "questions are"} due for review today.`
            : "Everything is where you left it."}
        </p>
        {/* The streak is a fact, not a nag: shown from the second day, never
            paired with guilt copy when it resets. */}
        {streak >= 2 && (
          <p className="mt-3 inline-flex items-center gap-2 rounded-md border bg-card px-3 py-1.5 font-mono text-xs tabular-nums" data-testid="streak-chip">
            <span className="text-brand font-semibold">{streak}-day</span> study streak
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 lg:col-span-7">
        {started.map(({ exam, answered, lastScaled, due }) => (
          <button
            key={exam.id}
            onClick={() => onChoose(exam.id)}
            className="pressable group flex cursor-pointer items-center justify-between gap-4 rounded-lg border bg-card p-5 text-left transition-[color,background-color,border-color,transform] duration-200 hover:border-primary"
          >
            <span>
              <span className="font-mono text-xs text-muted-foreground">{exam.code}</span>
              <span className="mt-0.5 block font-heading text-lg font-semibold">
                {exam.cert} {exam.name}
              </span>
              <span className="text-muted-foreground mt-1 block font-mono text-xs tabular-nums">
                {answered} answered{lastScaled !== null && ` · last exam ${lastScaled}`}
                {due > 0 && (
                  <span className="text-brand"> · {due} due for review</span>
                )}
              </span>
            </span>
            <span className="flex items-center gap-2 font-medium text-brand">
              {due > 0 ? "Review" : "Continue"}
              <ArrowRight className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1" strokeWidth={2} />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

/**
 * One number from the stats strip. These four figures are the strongest claim
 * the page makes, so they earn the one piece of motion on the section: they
 * count up the first time they scroll into view, once.
 */
function Stat({ n, label }: { n: number; label: string }) {
  const { value, ref } = useCountUp(n)
  return (
    <div>
      {/* A visually-hidden span carries the final number so a screen reader
          announces the fact, not whatever frame the count happened to be on.
          (Not aria-label: that attribute is prohibited on a generic <p>.) */}
      <p ref={ref} className="font-heading text-3xl font-semibold tabular-nums">
        <span aria-hidden="true">{value}</span>
        <span className="sr-only">{n}</span>
      </p>
      <p className="text-muted-foreground mt-1 text-sm">{label}</p>
    </div>
  )
}

function FaqSection() {
  // Derived from the exam registry, never retyped: this block twice shipped a
  // stale exam count after a new bank landed. See src/lib/copy.ts.
  const faq = siteFaq()
  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <h2 className="font-heading text-3xl font-semibold tracking-tight">Common questions</h2>
      <div className="mt-8 max-w-3xl border-t">
        {faq.map(([q, a]) => (
          <details key={q} className="group border-b">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {q}
              <Plus className="size-4 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45" strokeWidth={2.5} />
            </summary>
            <p className="text-muted-foreground -mt-1 max-w-2xl pb-5 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function Landing({ onChooseExam, onOpenDashboard, onNavigate, onDrillTopic }: { onChooseExam: (id: string) => void; onOpenDashboard: () => void; onNavigate: (path: string) => void; onDrillTopic: (examId: string, topic: string) => void }) {
  const store = useProgress()
  const { toggle } = useTheme()

  const exams = useMemo(() => EXAM_ORDER.map((id) => EXAM_META[id]), [])
  const totalQ = exams.reduce((a, e) => a + e.questionCount, 0)
  const totalPBQ = exams.reduce((a, e) => a + e.pbqCount, 0)
  const totalVideos = useMemo(() => new Set(exams.flatMap((e) => Object.values(e.videos).map((v) => v.u))).size, [exams])

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

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

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
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="brand-link pressable flex cursor-pointer items-center rounded-md text-sm transition-colors duration-200 hover:text-brand"
            aria-label="cert900, back to top"
            title="cert900"
            data-testid="brand"
          >
            <Wordmark className="text-sm" />
          </button>
          <div className="flex items-center gap-1 sm:gap-2">
            <SearchPalette onChooseExam={onChooseExam} onNavigate={onNavigate} onDrillTopic={onDrillTopic} />
            <button
              onClick={() => onNavigate("/plan")}
              data-testid="landing-plan"
              aria-label="Study plan"
              className="cursor-pointer rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <CalendarDays className="size-4 sm:hidden" strokeWidth={2} />
              <span className="hidden sm:inline">Plan</span>
            </button>
            <button onClick={onOpenDashboard} data-testid="landing-progress" aria-label="Progress" className="cursor-pointer rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <ChartLine className="size-4 sm:hidden" strokeWidth={2} />
              <span className="hidden sm:inline">Progress</span>
            </button>
            <span data-testid="nav-exam-chips">
              <ExamsMenu currentId={null} onChoose={onChooseExam} />
            </span>
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme" data-testid="theme-toggle">
              <ThemeIcon />
            </Button>
            <AccountMenu onNavigate={onNavigate} />
          </div>
        </nav>
      </header>

      <main id="main">
      {/* hero */}
      <section className="ambient mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-20">
        {/* Sibling of the content, never an ancestor: pointer-events-none plus
            this ordering makes click interception structurally impossible. The
            content wrappers below carry z-10 so the field (z-0) stays behind
            both hero branches. */}
        <HeroIconField />
        {returning ? (
          <ContinueHero started={started} streak={streak} onChoose={onChooseExam} />
        ) : (
          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* 400ms, not 700: the documented budget is under 300ms and a
                once-per-visit hero entrance is the fair exception to it, but
                700ms had drifted past reading as intentional. */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-400 lg:col-span-6">
              <h1 className="font-heading text-[1.9rem] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
                The practice exam that studies&nbsp;you&nbsp;back.
              </h1>
              <p className="text-muted-foreground mt-5 max-w-md text-lg leading-relaxed">
                {totalQ} original questions across {exams.length} certification exams, adapting to your weak spots.
                Free, no sign-up.
              </p>
              <div className="mt-7">
                <Button size="lg" onClick={() => scrollTo("exams")} className="motion-safe:active:scale-[0.98]" data-testid="hero-cta">
                  Start practicing
                </Button>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 delay-150 duration-400 lg:col-span-6">
              <LiveQuestion />
            </div>
          </div>
        )}
      </section>

      {/* stats strip */}
      <section className="border-y bg-card">
        <div className="reveal mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-8 sm:grid-cols-4">
          {[
            [totalQ, "original questions"] as const,
            [totalPBQ, "PBQs & interactive questions"] as const,
            [exams.length, "certifications covered"] as const,
            [totalVideos, "video links, all verified"] as const,
          ].map(([n, label]) => (
            <Stat key={label} n={n} label={label} />
          ))}
        </div>
      </section>

      {/* mobile-app promo: below the hero and stats, never inside the hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <AppPromo />
      </section>

      {/* exam index */}
      <section id="exams" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">Pick your exam</h2>
        <p className="text-muted-foreground mt-2 max-w-lg">
          Progress is tracked separately for each. Start with the one on your calendar.
        </p>
        <div className="mt-8">
          {VENDOR_ORDER.map((v) => {
            const group = exams.filter((ex) => ex.vendor === v)
            if (group.length === 0) return null
            return (
              // No .reveal here on purpose: a vendor group is taller than the
              // viewport, and a scroll-driven range on a tall element keeps it
              // part-way through its entrance for most of the scroll past it.
              <div key={v} className="mb-8 last:mb-0">
                <p className="text-muted-foreground border-b pb-2 font-mono text-[11px] font-semibold tracking-wider uppercase">
                  {VENDORS[v].name}
                </p>
                {group.map((ex) => {
                  const p = store.all[ex.id]
                  const answered = p ? Object.values(p.topics).reduce((a, s) => a + s.t, 0) : 0
                  return (
                    // The reveal lives on the GROUP, not here. A filled
                    // animation retains its final transform and would win over
                    // this hover transition, so the row would stop lifting on
                    // every browser that supports view().
                    <button
                      key={ex.id}
                      onClick={() => onChooseExam(ex.id)}
                      data-testid="exam-row"
                      className="group grid w-full cursor-pointer grid-cols-1 items-center gap-2 border-b px-2 py-6 text-left transition-[color,background-color,border-color,transform] duration-200 hover:bg-accent motion-safe:hover:-translate-y-px sm:grid-cols-12 sm:gap-4"
                    >
                      <span className="flex items-center gap-2.5 sm:col-span-2">
                        <ExamEmblem examId={ex.id} className={cn("size-7", VENDORS[ex.vendor].tintClass)} />
                        <span className="font-mono text-sm text-muted-foreground">{ex.code}</span>
                      </span>
                      <span className="sm:col-span-6">
                        <span className="font-heading text-xl font-semibold md:text-2xl">
                          {ex.cert} {ex.name}
                        </span>
                        <span className="text-muted-foreground mt-1 block text-sm">{ex.blurb}</span>
                      </span>
                      <span className="font-mono text-xs text-muted-foreground tabular-nums sm:col-span-3 sm:text-right">
                        {ex.questionCount} questions{ex.pbqCount > 0 && ` · ${ex.pbqCount} ${ex.vendor === "comptia" ? "PBQs" : "interactive"}`}
                        <span className="block">
                          {Object.keys(ex.domains).length} domains
                          {answered > 0 && <span className="text-brand"> · {answered} answered</span>}
                        </span>
                      </span>
                      <ArrowRight className="hidden size-5 justify-self-end text-brand transition-transform duration-200 motion-safe:group-hover:translate-x-1 sm:col-span-1 sm:block" strokeWidth={2} />
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>
      </section>

      {/* how it works */}
      <section id="how" className="border-t bg-card">
        <div className="mx-auto grid max-w-6xl scroll-mt-20 gap-10 px-4 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl font-semibold tracking-tight">How people actually use it</h2>
            <p className="text-muted-foreground mt-3 max-w-sm leading-relaxed">
              Three ways in, depending on how much time you have and how close the test is.
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:col-span-7">
            {[
              ["Drill", "Short adaptive rounds with an explanation after every answer. Weak topics come back more often until they stick."],
              ["Simulate", "Full timed exams in each certification's real format, question mix, and time limit, with flagging and a question palette. Scored on the real exam's scale with its pass line."],
              ["Review", "Every miss links to the exact free training video for that topic. Watch, then drill it again."],
            ].map(([verb, body]) => (
              <div key={verb} className="reveal grid grid-cols-12 gap-4 border-l-2 border-primary/60 pl-5">
                <p className="col-span-12 font-heading text-xl font-semibold sm:col-span-3">{verb}</p>
                <p className="text-muted-foreground col-span-12 leading-relaxed sm:col-span-9">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <FaqSection />
      </main>

      <SiteFooter full onNavigate={onNavigate} />
    </div>
  )
}
