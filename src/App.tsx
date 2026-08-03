import { Suspense, lazy, startTransition, useEffect, useMemo, useRef, useState } from "react"
import { LoaderCircle } from "lucide-react"
import { toast } from "sonner"
import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import { useExamBank } from "@/hooks/useExamBank"

import { ProgressContext, useProgressStore } from "@/hooks/useProgress"
import { useTheme } from "@/hooks/useTheme"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import type { QuizConfig, QuizOutcome } from "@/lib/quiz-session"
import { siteTitle } from "@/lib/copy"
import { ExamPicker } from "@/screens/ExamPicker"
import { Landing } from "@/screens/Landing"
import { Dashboard } from "@/screens/Dashboard"
import { CalendarDays, ChartLine } from "lucide-react"
import { ThemeIcon } from "@/components/ThemeIcon"
import { AccountMenu } from "@/components/AccountMenu"
import { ExamsMenu } from "@/components/ExamsMenu"
import { SearchPalette } from "@/components/SearchPalette"
import { Wordmark } from "@/components/Wordmark"
import { Home } from "@/screens/Home"
import { DrillSetup } from "@/screens/DrillSetup"
import { StudyPlan } from "@/screens/StudyPlan"
import { PlanWizard } from "@/screens/PlanWizard"
import { Quiz } from "@/screens/Quiz"
import { Results } from "@/screens/Results"
import { DeleteAccount, Privacy, Terms } from "@/screens/Legal"
import { NotFound } from "@/screens/NotFound"
import { ADMIN_PATH, examPath, isKnownPath, parseExamPath } from "@/data/routes"
import { SiteFooter } from "@/components/SiteFooter"

// Charts (recharts) load only when someone opens detailed progress.
const ProgressScreen = lazy(() =>
  import("@/screens/ProgressScreen").then((m) => ({ default: m.ProgressScreen })),
)

// Owner-only, so it must not cost every other visitor a byte of the entry chunk.
const Admin = lazy(() => import("@/screens/Admin").then((m) => ({ default: m.Admin })))

export type Screen =
  | { kind: "landing" }
  | { kind: "dashboard" }
  | { kind: "picker" }
  | { kind: "home" }
  | { kind: "setup" }
  | { kind: "quiz"; cfg: QuizConfig; sessionKey: number }
  | { kind: "results"; outcome: QuizOutcome }
  | { kind: "progress" }
  | { kind: "plan" }
  | { kind: "plan-wizard" }
  | { kind: "privacy" }
  | { kind: "terms" }
  | { kind: "delete-account" }
  | { kind: "admin" }
  | { kind: "not-found" }

/**
 * Deep-linkable SPA paths (legal + admin); everything else is app state.
 *
 * The SEO guides are gone from this table ON PURPOSE: they are pure static
 * documents now (tools/prerender.tsx strips their module scripts), so the SPA
 * never renders them. Reaching one is always a real navigation -- `openPath`
 * falls back to location.assign for any known path the SPA does not own.
 */
const PATH_SCREENS: Record<string, Screen["kind"]> = {
  "/privacy": "privacy",
  "/terms": "terms",
  // The study-plan funnel. Listed here rather than in screenForPath's
  // if-chain (where /exams and /progress live) because this table is
  // bidirectional: SCREEN_PATHS derives from it, so one entry gives both
  // "URL -> screen" and "screen -> URL".
  "/plan": "plan-wizard",
  // Google Play's Data safety form requires a public deletion URL a reviewer
  // can open without installing the app.
  "/delete-account": "delete-account",
  // Not in APP_PATHS (see routes.ts) but it still needs an entry here, or
  // pathForScreen falls through to "/" and the URL fights the render.
  [ADMIN_PATH]: "admin",
}
const SCREEN_PATHS = Object.fromEntries(Object.entries(PATH_SCREENS).map(([p, k]) => [k, p]))
const SCREEN_TITLES: Partial<Record<Screen["kind"], string>> = {
  privacy: "Privacy policy | Cert900",
  terms: "Terms of use | Cert900",
  "plan-wizard": "Build a study plan | Cert900",
  "delete-account": "Delete your account | Cert900",
  // Deliberately says nothing about what this page is. The API 404s rather than
  // 403s for the same reason: someone who guesses the path should learn
  // nothing, and the title is rendered before any auth check has run.
  admin: "Cert900",
  "not-found": "Page not found | Cert900",
}
// Derived so the SPA title cannot drift from index.html's, which it had (one
// listed Cisco, the other did not).
const DEFAULT_TITLE = siteTitle()

/** Screens that need the exam's question bank, so they wait on its chunk. */
const EXAM_SCREENS = new Set<Screen["kind"]>(["home", "setup", "quiz", "results", "progress", "plan"])

/**
 * The URL a screen should live at.
 *
 * Every app screen used to answer to "/", so browsing created no history
 * entries and the browser's back button walked straight off the site. Giving
 * each screen a path makes back and forward work for free, and makes an exam
 * bookmarkable.
 */
function pathForScreen(screen: Screen, examId: string | null): string {
  if (SCREEN_PATHS[screen.kind]) return SCREEN_PATHS[screen.kind]
  switch (screen.kind) {
    case "picker":
      return "/exams"
    case "dashboard":
      return "/progress"
    case "home":
      return examId ? examPath(examId) : "/exams"
    case "setup":
      return examId ? examPath(examId, "drill") : "/exams"
    case "quiz":
      return examId ? examPath(examId, "quiz") : "/exams"
    case "results":
      return examId ? examPath(examId, "results") : "/exams"
    case "progress":
      return examId ? examPath(examId, "stats") : "/exams"
    case "plan":
      return examId ? examPath(examId, "plan") : "/exams"
    default:
      return "/"
  }
}

/** Sub-path -> screen for a cold load of /exam/:id/... */
const EXAM_SUB_SCREENS: Record<string, Screen["kind"]> = {
  "": "home",
  drill: "setup",
  stats: "progress",
  plan: "plan",
  // A quiz and its results live entirely in memory (a QuizConfig, a graded
  // QuizOutcome). Nothing can rebuild them from a URL, so a cold load of those
  // lands on the exam's menu rather than a broken screen.
  quiz: "home",
  results: "home",
}

function screenForPath(path: string): { screen: Screen; examId?: string } {
  const kind = PATH_SCREENS[path]
  if (kind) return { screen: { kind } as Screen }
  if (path === "/") return { screen: { kind: "landing" } }
  if (path === "/exams") return { screen: { kind: "picker" } }
  if (path === "/progress") return { screen: { kind: "dashboard" } }
  const exam = parseExamPath(path)
  if (exam) return { screen: { kind: EXAM_SUB_SCREENS[exam.sub] } as Screen, examId: exam.examId }
  // Anything else is a real 404. The worker sends this shell with a 404 status
  // and noindex; rendering the landing page instead (the old behaviour) made
  // every mistyped URL look like a real page.
  return { screen: { kind: "not-found" } }
}

export default function App() {
  const store = useProgressStore()
  const { toggle } = useTheme()
  const initial = useMemo(() => screenForPath(window.location.pathname), [])
  const [examId, setExamId] = useState<string | null>(initial.examId ?? null)
  const [screen, setScreen] = useState<Screen>(initial.screen)
  const [sessionCounter, setSessionCounter] = useState(0)
  // Set while restoring from a popstate, so the sync effect below knows this
  // change came FROM history and must not push a duplicate entry back onto it.
  const restoring = useRef(false)

  useEffect(() => {
    document.title = SCREEN_TITLES[screen.kind] ?? DEFAULT_TITLE
    if (restoring.current) {
      restoring.current = false
      return
    }
    // The 404 screen keeps whatever URL the visitor actually asked for;
    // rewriting it would hide the broken link and contradict the 404.
    if (screen.kind === "not-found") return

    const want = pathForScreen(screen, examId)
    if (window.location.pathname === want) return
    // Results REPLACE the quiz entry instead of stacking on it: going "back"
    // into a quiz that has already been graded would restart it.
    const go = screen.kind === "results" ? window.history.replaceState : window.history.pushState
    go.call(window.history, null, "", want)
  }, [screen, examId])

  /**
   * Newsletter confirm and unsubscribe are plain links in an email, so they hit
   * the worker and bounce back here with ?nl=. Report the outcome, then strip
   * the param so a refresh or a shared URL does not repeat the message.
   */
  useEffect(() => {
    const nl = new URLSearchParams(window.location.search).get("nl")
    if (!nl) return
    const said: Record<string, string> = {
      confirmed: "You are on the list. First question lands tomorrow morning.",
      unsubscribed: "Unsubscribed. No more emails.",
      badlink: "That link has expired or was already used.",
    }
    if (said[nl]) toast(said[nl])
    window.history.replaceState(null, "", window.location.pathname)
  }, [])

  useEffect(() => {
    const onPop = () => {
      const next = screenForPath(window.location.pathname)
      restoring.current = true
      // startTransition: progress and the guides are lazy, and a popstate that
      // suspends without one throws away the current screen mid-render.
      startTransition(() => {
        if (next.examId) setExamId(next.examId)
        setScreen(next.screen)
      })
    }
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  const openPath = (path: string) => {
    const next = screenForPath(path)
    // A path the site serves but the SPA does not render -- the static guide
    // pages -- gets a real navigation. Anything else known lands on a screen.
    if (next.screen.kind === "not-found" && isKnownPath(path)) {
      window.location.assign(path)
      return
    }
    if (next.examId) setExamId(next.examId)
    setScreen(next.screen)
    window.scrollTo(0, 0)
  }

  // ProgressScreen is lazy; navigating inside a transition lets React keep the
  // current screen up while the chunk loads instead of aborting the render.
  const openProgress = () => startTransition(() => setScreen({ kind: "progress" }))

  // Chrome (header, picker) renders from metadata only; the heavy bank loads
  // on demand so a visitor never downloads all seven.
  const meta = examId ? EXAM_META[examId] : null
  const { exam, loading: examLoading, error: examError, retry: retryExam } = useExamBank(examId)

  const orderedExams = useMemo(
    () =>
      EXAM_ORDER.filter((id) => EXAM_META[id])
        .concat(Object.keys(EXAM_META).filter((id) => !EXAM_ORDER.includes(id)))
        .map((id) => EXAM_META[id]),
    [],
  )

  const chooseExam = (id: string) => {
    setExamId(id)
    setScreen({ kind: "home" })
    window.scrollTo(0, 0)
  }

  /** Search's "drill this topic": switch exam if needed, then start a focused drill. */
  const drillTopic = (id: string, topic: string) => {
    setExamId(id)
    setSessionCounter((c) => c + 1)
    setScreen({ kind: "quiz", cfg: { mode: "practice", n: 10, topic }, sessionKey: sessionCounter + 1 })
    window.scrollTo(0, 0)
  }

  const startQuiz = (cfg: QuizConfig) => {
    setSessionCounter((c) => c + 1)
    setScreen({ kind: "quiz", cfg, sessionKey: sessionCounter + 1 })
  }

  if (screen.kind === "landing") {
    return (
      <ProgressContext.Provider value={store}>
        <Landing
          onDrillTopic={drillTopic}
          onChooseExam={(id) => {
            setExamId(id)
            setScreen({ kind: "home" })
            window.scrollTo(0, 0)
          }}
          onOpenDashboard={() => {
            setScreen({ kind: "dashboard" })
            window.scrollTo(0, 0)
          }}
          onNavigate={openPath}
        />
        <Toaster />
      </ProgressContext.Provider>
    )
  }

  return (
    <ProgressContext.Provider value={store}>
      <div className="flex min-h-[100dvh] flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:border focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
            {/* items-center, not items-baseline: Wordmark is a flex container whose
                first item is the SVG mark, and a flex container exports its first
                item's baseline. An SVG has no text baseline, so the UA synthesises
                one from its bottom edge and the exam code lands ~5px low. */}
            <button
              className="brand-link pressable flex cursor-pointer items-center gap-2 rounded-md text-sm transition-colors duration-200 hover:text-brand"
              onClick={() => {
                setExamId(null)
                setScreen({ kind: "landing" })
                window.scrollTo(0, 0)
              }}
              data-testid="brand"
              aria-label="cert900 home"
              title="Home"
            >
              <Wordmark className="text-sm" />
              {/* meta, not the bank: the header must never wait on a chunk. */}
              {meta && (
                <span className="text-muted-foreground hidden font-mono text-xs font-normal sm:inline">
                  · {meta.code}
                </span>
              )}
            </button>
            <div className="flex items-center gap-1.5">
              <SearchPalette onChooseExam={chooseExam} onNavigate={openPath} onDrillTopic={drillTopic} />
              <Button
                variant={screen.kind === "plan-wizard" ? "secondary" : "ghost"}
                size="sm"
                data-testid="nav-plan"
                aria-label="Study plan"
                onClick={() => setScreen({ kind: "plan-wizard" })}
              >
                <CalendarDays className="size-4 sm:hidden" strokeWidth={2} />
                <span className="hidden sm:inline">Plan</span>
              </Button>
              <Button
                variant={screen.kind === "dashboard" ? "secondary" : "ghost"}
                size="sm"
                data-testid="nav-progress"
                aria-label="Progress"
                onClick={() => setScreen({ kind: "dashboard" })}
              >
                <ChartLine className="size-4 sm:hidden" strokeWidth={2} />
                <span className="hidden sm:inline">Progress</span>
              </Button>
              <ExamsMenu
                currentId={examId}
                onChoose={(id) => {
                  setExamId(id)
                  setScreen({ kind: "home" })
                }}
              />
              <Button variant="ghost" size="icon" onClick={toggle} data-testid="theme-toggle" aria-label="Toggle theme">
                <ThemeIcon />
              </Button>
              <AccountMenu onNavigate={openPath} />
            </div>
          </div>
        </header>
        <div id="main" className="mx-auto w-full max-w-5xl flex-1 px-4 pb-16 pt-8">

        {screen.kind === "dashboard" && (
          <Dashboard
            onContinue={(id) => {
              setExamId(id)
              setScreen({ kind: "home" })
            }}
            onDetails={(id) => {
              setExamId(id)
              openProgress()
            }}
            onBrowseExams={() => {
              setExamId(null)
              setScreen({ kind: "picker" })
            }}
          />
        )}

        {screen.kind === "picker" && (
          <ExamPicker
            exams={orderedExams}
            onChoose={(id) => {
              setExamId(id)
              setScreen({ kind: "home" })
            }}
          />
        )}

        {/* The bank for this exam is still downloading. Chrome above stays
            interactive; only the exam body waits. */}
        {examLoading && EXAM_SCREENS.has(screen.kind) && (
          <div className="flex justify-center py-24" aria-label="Loading exam" role="status">
            <LoaderCircle className="size-6 animate-spin text-muted-foreground" strokeWidth={2} />
          </div>
        )}

        {examError && EXAM_SCREENS.has(screen.kind) && (
          <div className="flex flex-col items-start gap-3 py-16">
            <p className="font-medium">That exam didn't load.</p>
            <p className="text-muted-foreground max-w-md text-sm">
              Usually a dropped connection, or a new version shipped mid-session. Your progress is safe.
            </p>
            <Button onClick={retryExam}>Try again</Button>
          </div>
        )}

        {exam && screen.kind === "home" && (
          <Home
            exam={exam}
            onFullExam={() => startQuiz({ mode: "exam" })}
            onDrill={() => setScreen({ kind: "setup" })}
            onPbqLab={() => startQuiz({ mode: "pbq" })}
            onProgress={openProgress}
            onReview={(ids) => startQuiz({ mode: "practice", ids })}
            onStudyPlan={() => setScreen({ kind: "plan" })}
          />
        )}

        {exam && screen.kind === "setup" && (
          <DrillSetup
            exam={exam}
            onStart={(cfg) => startQuiz(cfg)}
            onBack={() => setScreen({ kind: "home" })}
          />
        )}

        {exam && screen.kind === "quiz" && (
          <Quiz
            key={screen.sessionKey}
            exam={exam}
            cfg={screen.cfg}
            onFinish={(outcome) => setScreen({ kind: "results", outcome })}
            onQuit={() => setScreen({ kind: "home" })}
          />
        )}

        {exam && screen.kind === "results" && (
          <Results
            exam={exam}
            outcome={screen.outcome}
            onRetake={() => startQuiz({ mode: "exam" })}
            onDrillAgain={() => setScreen({ kind: "setup" })}
            onProgress={openProgress}
            onHome={() => setScreen({ kind: "home" })}
            onReview={(ids) => startQuiz({ mode: "practice", ids })}
          />
        )}

        {exam && screen.kind === "progress" && (
          <Suspense
            fallback={
              <div className="flex justify-center py-24" aria-label="Loading progress">
                <LoaderCircle className="size-6 animate-spin text-muted-foreground" strokeWidth={2} />
              </div>
            }
          >
            <ProgressScreen exam={exam} onHome={() => setScreen({ kind: "home" })} />
          </Suspense>
        )}

        {exam && screen.kind === "plan" && (
          <StudyPlan
            exam={exam}
            onBack={() => setScreen({ kind: "home" })}
            onDrillDomain={(d) => startQuiz({ mode: "practice", n: 15, domain: d, focusWeak: true })}
            onFullExam={() => startQuiz({ mode: "exam" })}
          />
        )}

        {screen.kind === "plan-wizard" && (
          <PlanWizard
            onCancel={() => setScreen({ kind: "landing" })}
            onFinish={(id, date) => {
              store.setExamDate(id, date)
              setExamId(id)
              setScreen({ kind: "plan" })
            }}
          />
        )}

        {screen.kind === "privacy" && <Privacy />}
        {screen.kind === "terms" && <Terms />}
        {screen.kind === "delete-account" && <DeleteAccount />}
        {screen.kind === "not-found" && (
          <NotFound onHome={() => setScreen({ kind: "landing" })} onNavigate={openPath} />
        )}
        <Suspense
          fallback={
            screen.kind === "admin" ? (
              <div className="flex justify-center py-24" aria-label="Loading page">
                <LoaderCircle className="size-6 animate-spin text-muted-foreground" strokeWidth={2} />
              </div>
            ) : null
          }
        >
        {screen.kind === "admin" && <Admin onHome={() => setScreen({ kind: "landing" })} />}
        </Suspense>
        </div>
        <SiteFooter onNavigate={openPath} />
      </div>
      <Toaster />
    </ProgressContext.Provider>
  )
}
