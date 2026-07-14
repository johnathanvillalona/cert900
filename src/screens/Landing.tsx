import { useMemo, useState } from "react"
import { EXAMS } from "@/data/index"
import type { ExamDef } from "@/data/types"
import { useProgress } from "@/hooks/useProgress"
import { useTheme } from "@/hooks/useTheme"
import { shuffle } from "@/lib/engine"
import { questionOfTheDay } from "@/lib/qotd"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Check, Plus, X } from "lucide-react"
import { ThemeIcon } from "@/components/ThemeIcon"
import { AccountMenu } from "@/components/AccountMenu"
import { SiteFooter } from "@/components/SiteFooter"

/** Real product in the hero: the question of the day, fully answerable. */
function LiveQuestion() {
  const { exam, q } = useMemo(() => questionOfTheDay(), [])
  const order = useMemo(() => shuffle(q.o.map((_, i) => i)), [q])
  const [sel, setSel] = useState<number | null>(null)
  const graded = sel !== null
  const ok = sel === q.a

  return (
    <div className="rounded-lg border bg-card p-5 shadow-sm" data-testid="live-question">
      <p className="flex flex-wrap items-center gap-x-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        <span className="text-brand">Question of the day</span>
        <span>{exam.code} · {exam.domains[q.d]}</span>
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
        <div className="enter-fade-rise mt-3 border-t pt-3 text-sm">
          <p className="font-semibold">{ok ? "Correct." : "Not quite."}</p>
          <p className="text-muted-foreground mt-1">{q.e}</p>
          <a
            href={exam.videos[q.t].u}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 font-medium text-brand underline-offset-4 hover:underline"
          >
            Watch: Professor Messer, {exam.videos[q.t].n}
            <ArrowRight className="size-3.5" strokeWidth={2} />
          </a>
          <p className="text-muted-foreground mt-2 font-mono text-xs">
            Every question works like this. New one tomorrow.
          </p>
        </div>
      )}
    </div>
  )
}

function ContinueHero({ started, onChoose }: { started: { exam: ExamDef; answered: number; lastScaled: number | null }[]; onChoose: (id: string) => void }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-5">
        <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">Welcome back.</h1>
        <p className="text-muted-foreground mt-4 max-w-md text-lg">
          Your progress is saved in this browser. Pick up where you left off.
        </p>
      </div>
      <div className="flex flex-col gap-3 lg:col-span-7">
        {started.map(({ exam, answered, lastScaled }) => (
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
              </span>
            </span>
            <span className="flex items-center gap-2 font-medium text-brand">
              Continue
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

const FAQ: [string, string][] = [
  [
    "Is this really free?",
    "Yes. Every question, every simulated exam, every PBQ, no paywall and no sign-up requirement. If it helps you pass, telling a friend or supporting the project is appreciated but never required.",
  ],
  [
    "Are these real exam questions?",
    "No, and that matters. Real exam content is protected and using it would be cheating. Every question here is original, written to the same objectives and difficulty the real exams test.",
  ],
  [
    "How does the 100 to 900 scoring work?",
    "CompTIA reports exams on a scaled range from 100 to 900 with a pass line around 675 to 720 depending on the exam. Simulated exams here use the same scale with the pass line at 700, so a score here reads like the real thing.",
  ],
  [
    "Do I need an account?",
    "No. Progress saves in your browser automatically. Signing in with Google is optional and does one thing: it syncs progress across devices so you can drill on your phone and review at your desk.",
  ],
]

function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <h2 className="font-heading text-3xl font-semibold tracking-tight">Common questions.</h2>
      <div className="mt-8 max-w-3xl border-t">
        {FAQ.map(([q, a]) => (
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

export function Landing({ onChooseExam, onOpenDashboard, onOpenLegal }: { onChooseExam: (id: string) => void; onOpenDashboard: () => void; onOpenLegal: (path: "/privacy" | "/terms") => void }) {
  const store = useProgress()
  const { toggle } = useTheme()

  const exams = useMemo(() => ["220-1201", "220-1202", "n10-009"].map((id) => EXAMS[id]), [])
  const totalQ = exams.reduce((a, e) => a + e.questions.length, 0)
  const totalPBQ = exams.reduce((a, e) => a + e.pbqs.length, 0)

  const started = exams
    .map((exam) => {
      const p = store.all[exam.id]
      const answered = p ? Object.values(p.topics).reduce((a, s) => a + s.t, 0) : 0
      const lastScaled = p && p.exams.length ? p.exams[p.exams.length - 1].scaled : null
      return { exam, answered, lastScaled }
    })
    .filter((x) => x.answered > 0)
  const returning = started.length > 0

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <div className="min-h-[100dvh]">
      {/* nav */}
      <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <span className="font-heading text-sm font-semibold tracking-wide">COMPTIA·TRAINER</span>
          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={() => scrollTo("exams")} className="hidden cursor-pointer rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:block">
              Exams
            </button>
            <button onClick={() => scrollTo("how")} className="hidden cursor-pointer rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:block">
              How it works
            </button>
            <button onClick={onOpenDashboard} data-testid="landing-progress" className="cursor-pointer rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              Progress
            </button>
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme" data-testid="theme-toggle">
              <ThemeIcon />
            </Button>
            <AccountMenu />
            <span className="ml-1 hidden items-center gap-1 sm:flex" data-testid="nav-exam-chips">
              {exams.map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => onChooseExam(ex.id)}
                  aria-label={`Start ${ex.cert} ${ex.name}`}
                  title={`${ex.cert} ${ex.name} (${ex.code})`}
                  className="pressable flex size-9 cursor-pointer items-center justify-center rounded-md border font-mono text-xs font-semibold transition-[color,background-color,border-color,transform] duration-200 hover:border-primary hover:bg-accent hover:text-brand"
                >
                  {ex.id === "220-1201" ? "C1" : ex.id === "220-1202" ? "C2" : "N+"}
                </button>
              ))}
            </span>
          </div>
        </nav>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-20">
        {returning ? (
          <ContinueHero started={started} onChoose={onChooseExam} />
        ) : (
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 lg:col-span-6">
              <h1 className="font-heading text-[1.9rem] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
                The practice exam that studies&nbsp;you&nbsp;back.
              </h1>
              <p className="text-muted-foreground mt-5 max-w-md text-lg leading-relaxed">
                {totalQ} original A+ and Network+ questions that adapt to your weak spots. Free, no sign-up.
              </p>
              <div className="mt-7">
                <Button size="lg" onClick={() => scrollTo("exams")} className="active:scale-[0.98]" data-testid="hero-cta">
                  Start practicing
                </Button>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 delay-150 duration-700 lg:col-span-6">
              <LiveQuestion />
            </div>
          </div>
        )}
      </section>

      {/* stats strip */}
      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-8 sm:grid-cols-4">
          {[
            [String(totalQ), "original questions"],
            [String(totalPBQ), "performance-based questions"],
            ["3", "certifications covered"],
            ["214", "video links, all verified"],
          ].map(([n, label]) => (
            <div key={label}>
              <p className="font-heading text-3xl font-semibold tabular-nums">{n}</p>
              <p className="text-muted-foreground mt-1 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* exam index */}
      <section id="exams" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">Pick your exam.</h2>
        <p className="text-muted-foreground mt-2 max-w-lg">
          Progress is tracked separately for each. Start with the one on your calendar.
        </p>
        <div className="mt-8 border-t">
          {exams.map((ex) => {
            const p = store.all[ex.id]
            const answered = p ? Object.values(p.topics).reduce((a, s) => a + s.t, 0) : 0
            return (
              <button
                key={ex.id}
                onClick={() => onChooseExam(ex.id)}
                data-testid="exam-row"
                className="group grid w-full cursor-pointer grid-cols-1 items-center gap-2 border-b px-2 py-6 text-left transition-colors duration-200 hover:bg-accent sm:grid-cols-12 sm:gap-4"
              >
                <span className="font-mono text-sm text-muted-foreground sm:col-span-2">{ex.code}</span>
                <span className="sm:col-span-6">
                  <span className="font-heading text-xl font-semibold md:text-2xl">
                    {ex.cert} {ex.name}
                  </span>
                  <span className="text-muted-foreground mt-1 block text-sm">{ex.blurb}</span>
                </span>
                <span className="font-mono text-xs text-muted-foreground tabular-nums sm:col-span-3 sm:text-right">
                  {ex.questions.length} questions · {ex.pbqs.length} PBQs
                  <span className="block">
                    {Object.keys(ex.domains).length} domains
                    {answered > 0 && <span className="text-brand"> · {answered} answered</span>}
                  </span>
                </span>
                <ArrowRight className="hidden size-5 justify-self-end text-brand transition-transform duration-200 group-hover:translate-x-1 sm:col-span-1 sm:block" strokeWidth={2} />
              </button>
            )
          })}
        </div>
      </section>

      {/* how it works */}
      <section id="how" className="border-t bg-card">
        <div className="mx-auto grid max-w-6xl scroll-mt-20 gap-10 px-4 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl font-semibold tracking-tight">Built the way the real exam works.</h2>
            <p className="text-muted-foreground mt-3 max-w-sm leading-relaxed">
              Not flashcards. Timed simulations on the 900-point scale, performance-based questions, and drills that
              weight what you keep missing.
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:col-span-7">
            {[
              ["Drill", "Short adaptive rounds with an explanation after every answer. Weak topics come back more often until they stick."],
              ["Simulate", "Full 90-minute exams with PBQs, flagging, and a question palette. Scored 100 to 900, pass line at 700."],
              ["Review", "Every miss links to the exact Professor Messer video for that topic. Watch, then drill it again."],
            ].map(([verb, body]) => (
              <div key={verb} className="grid grid-cols-12 gap-4 border-l-2 border-primary/60 pl-5">
                <p className="col-span-12 font-heading text-xl font-semibold sm:col-span-3">{verb}</p>
                <p className="text-muted-foreground col-span-12 leading-relaxed sm:col-span-9">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <FaqSection />

      <SiteFooter full onNavigate={onOpenLegal} />
    </div>
  )
}
