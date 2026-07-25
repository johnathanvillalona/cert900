import { Suspense, lazy, startTransition, useEffect, useMemo, useState } from "react"
import { LoaderCircle } from "lucide-react"
import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import { useExamBank } from "@/hooks/useExamBank"

import { ProgressContext, useProgressStore } from "@/hooks/useProgress"
import { useTheme } from "@/hooks/useTheme"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import type { QuizConfig, QuizOutcome } from "@/lib/quiz-session"
import { ExamPicker } from "@/screens/ExamPicker"
import { Landing } from "@/screens/Landing"
import { Dashboard } from "@/screens/Dashboard"
import { ChartLine } from "lucide-react"
import { ThemeIcon } from "@/components/ThemeIcon"
import { AccountMenu } from "@/components/AccountMenu"
import { ExamsMenu } from "@/components/ExamsMenu"
import { SearchPalette } from "@/components/SearchPalette"
import { Wordmark } from "@/components/Wordmark"
import { Home } from "@/screens/Home"
import { DrillSetup } from "@/screens/DrillSetup"
import { Quiz } from "@/screens/Quiz"
import { Results } from "@/screens/Results"
import { DeleteAccount, Privacy, Terms } from "@/screens/Legal"
import { AifGuide, APlusGuide, Az900Guide, ClfGuide, NPlusGuide, PbqGuide, SecplusGuide, Sc900Guide, CcnaGuide, Az104Guide, GUIDE_META } from "@/screens/Guides"
import { SiteFooter } from "@/components/SiteFooter"

// Charts (recharts) load only when someone opens detailed progress.
const ProgressScreen = lazy(() =>
  import("@/screens/ProgressScreen").then((m) => ({ default: m.ProgressScreen })),
)

export type Screen =
  | { kind: "landing" }
  | { kind: "dashboard" }
  | { kind: "picker" }
  | { kind: "home" }
  | { kind: "setup" }
  | { kind: "quiz"; cfg: QuizConfig; sessionKey: number }
  | { kind: "results"; outcome: QuizOutcome }
  | { kind: "progress" }
  | { kind: "privacy" }
  | { kind: "terms" }
  | { kind: "delete-account" }
  | { kind: "guide-aplus" }
  | { kind: "guide-nplus" }
  | { kind: "guide-pbq" }
  | { kind: "guide-secplus" }
  | { kind: "guide-aif" }
  | { kind: "guide-clf" }
  | { kind: "guide-az900" }
  | { kind: "guide-sc900" }
  | { kind: "guide-ccna" }
  | { kind: "guide-az104" }

/** Deep-linkable paths (legal + SEO guides); everything else is app state under "/". */
const PATH_SCREENS: Record<string, Screen["kind"]> = {
  "/privacy": "privacy",
  "/terms": "terms",
  // Google Play's Data safety form requires a public deletion URL a reviewer
  // can open without installing the app.
  "/delete-account": "delete-account",
  [GUIDE_META.aplus.path]: "guide-aplus",
  [GUIDE_META.nplus.path]: "guide-nplus",
  [GUIDE_META.pbq.path]: "guide-pbq",
  [GUIDE_META.secplus.path]: "guide-secplus",
  [GUIDE_META.aif.path]: "guide-aif",
  [GUIDE_META.clf.path]: "guide-clf",
  [GUIDE_META.az900.path]: "guide-az900",
  [GUIDE_META.sc900.path]: "guide-sc900",
  [GUIDE_META.ccna.path]: "guide-ccna",
  [GUIDE_META.az104.path]: "guide-az104",
}
const SCREEN_PATHS = Object.fromEntries(Object.entries(PATH_SCREENS).map(([p, k]) => [k, p]))
const SCREEN_TITLES: Partial<Record<Screen["kind"], string>> = {
  privacy: "Privacy policy | Cert900",
  terms: "Terms of use | Cert900",
  "delete-account": "Delete your account | Cert900",
  "guide-aplus": GUIDE_META.aplus.title,
  "guide-nplus": GUIDE_META.nplus.title,
  "guide-pbq": GUIDE_META.pbq.title,
  "guide-secplus": GUIDE_META.secplus.title,
  "guide-aif": GUIDE_META.aif.title,
  "guide-clf": GUIDE_META.clf.title,
  "guide-az900": GUIDE_META.az900.title,
  "guide-sc900": GUIDE_META.sc900.title,
  "guide-ccna": GUIDE_META.ccna.title,
  "guide-az104": GUIDE_META.az104.title,
}
const DEFAULT_TITLE = "Cert900: Free CompTIA, AWS & Azure Practice Exams"

/** Screens that need the exam's question bank, so they wait on its chunk. */
const EXAM_SCREENS = new Set<Screen["kind"]>(["home", "setup", "quiz", "results", "progress"])

function screenForPath(path: string): Screen {
  const kind = PATH_SCREENS[path]
  return kind ? ({ kind } as Screen) : { kind: "landing" }
}

export default function App() {
  const store = useProgressStore()
  const { toggle } = useTheme()
  const [examId, setExamId] = useState<string | null>(null)
  const [screen, setScreen] = useState<Screen>(() => screenForPath(window.location.pathname))
  const [sessionCounter, setSessionCounter] = useState(0)

  // Keep the address bar honest: deep-linkable pages get real URLs, everything else lives at "/".
  useEffect(() => {
    const want = SCREEN_PATHS[screen.kind] ?? "/"
    if (window.location.pathname !== want) window.history.pushState({}, "", want)
    document.title = SCREEN_TITLES[screen.kind] ?? DEFAULT_TITLE
  }, [screen.kind])
  useEffect(() => {
    const onPop = () => setScreen(screenForPath(window.location.pathname))
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  const openPath = (path: string) => {
    setScreen(screenForPath(path))
    window.scrollTo(0, 0)
  }

  const startExamFromGuide = (id: string) => {
    setExamId(id)
    setScreen({ kind: "home" })
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
              <AccountMenu />
            </div>
          </div>
        </header>
        <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-16 pt-8">

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

        {screen.kind === "privacy" && <Privacy />}
        {screen.kind === "terms" && <Terms />}
        {screen.kind === "delete-account" && <DeleteAccount />}
        {screen.kind === "guide-aplus" && <APlusGuide onStart={startExamFromGuide} />}
        {screen.kind === "guide-nplus" && <NPlusGuide onStart={startExamFromGuide} />}
        {screen.kind === "guide-pbq" && <PbqGuide onStart={startExamFromGuide} />}
        {screen.kind === "guide-secplus" && <SecplusGuide onStart={startExamFromGuide} />}
        {screen.kind === "guide-aif" && <AifGuide onStart={startExamFromGuide} />}
        {screen.kind === "guide-clf" && <ClfGuide onStart={startExamFromGuide} />}
        {screen.kind === "guide-az900" && <Az900Guide onStart={startExamFromGuide} />}
        {screen.kind === "guide-sc900" && <Sc900Guide onStart={startExamFromGuide} />}
        {screen.kind === "guide-ccna" && <CcnaGuide onStart={startExamFromGuide} />}
        {screen.kind === "guide-az104" && <Az104Guide onStart={startExamFromGuide} />}
        </div>
        <SiteFooter onNavigate={openPath} />
      </div>
      <Toaster />
    </ProgressContext.Provider>
  )
}
