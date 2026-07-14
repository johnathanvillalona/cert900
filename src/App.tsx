import { useMemo, useState } from "react"
import { EXAMS, EXAM_ORDER } from "@/data/index"
import type { ExamDef } from "@/data/types"
import { ProgressContext, useProgressStore } from "@/hooks/useProgress"
import { useTheme } from "@/hooks/useTheme"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import type { QuizConfig, QuizOutcome } from "@/hooks/useQuizSession"
import { ExamPicker } from "@/screens/ExamPicker"
import { Landing } from "@/screens/Landing"
import { Dashboard } from "@/screens/Dashboard"
import { ArrowLeftRight, ChartLine } from "lucide-react"
import { ThemeIcon } from "@/components/ThemeIcon"
import { AccountMenu } from "@/components/AccountMenu"
import { Home } from "@/screens/Home"
import { DrillSetup } from "@/screens/DrillSetup"
import { Quiz } from "@/screens/Quiz"
import { Results } from "@/screens/Results"
import { ProgressScreen } from "@/screens/ProgressScreen"

export type Screen =
  | { kind: "landing" }
  | { kind: "dashboard" }
  | { kind: "picker" }
  | { kind: "home" }
  | { kind: "setup" }
  | { kind: "quiz"; cfg: QuizConfig; sessionKey: number }
  | { kind: "results"; outcome: QuizOutcome }
  | { kind: "progress" }

export default function App() {
  const store = useProgressStore()
  const { toggle } = useTheme()
  const [examId, setExamId] = useState<string | null>(null)
  const [screen, setScreen] = useState<Screen>({ kind: "landing" })
  const [sessionCounter, setSessionCounter] = useState(0)

  const exam: ExamDef | null = examId ? EXAMS[examId] : null

  const orderedExams = useMemo(
    () =>
      EXAM_ORDER.filter((id) => EXAMS[id])
        .concat(Object.keys(EXAMS).filter((id) => !EXAM_ORDER.includes(id)))
        .map((id) => EXAMS[id]),
    [],
  )

  const startQuiz = (cfg: QuizConfig) => {
    setSessionCounter((c) => c + 1)
    setScreen({ kind: "quiz", cfg, sessionKey: sessionCounter + 1 })
  }

  if (screen.kind === "landing") {
    return (
      <ProgressContext.Provider value={store}>
        <Landing
          onChooseExam={(id) => {
            setExamId(id)
            setScreen({ kind: "home" })
            window.scrollTo(0, 0)
          }}
          onOpenDashboard={() => {
            setScreen({ kind: "dashboard" })
            window.scrollTo(0, 0)
          }}
        />
        <Toaster />
      </ProgressContext.Provider>
    )
  }

  return (
    <ProgressContext.Provider value={store}>
      <div className="min-h-[100dvh]">
        <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
            <button
              className="cursor-pointer font-heading text-sm font-semibold tracking-wide"
              onClick={() => {
                setExamId(null)
                setScreen({ kind: "landing" })
                window.scrollTo(0, 0)
              }}
              data-testid="brand"
            >
              COMPTIA·TRAINER
              {exam && (
                <span className="text-muted-foreground hidden font-mono text-xs font-normal sm:inline">
                  {" "}· {exam.code}
                </span>
              )}
            </button>
            <div className="flex items-center gap-1.5">
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
              {exam && screen.kind !== "picker" && (
                <Button
                  variant="ghost"
                  size="sm"
                  data-testid="switch-exam"
                  aria-label="Switch exam"
                  onClick={() => {
                    setExamId(null)
                    setScreen({ kind: "picker" })
                  }}
                >
                  <ArrowLeftRight className="size-4 sm:hidden" strokeWidth={2} />
                  <span className="hidden sm:inline">Switch exam</span>
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={toggle} data-testid="theme-toggle" aria-label="Toggle theme">
                <ThemeIcon />
              </Button>
              <AccountMenu />
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-8">

        {screen.kind === "dashboard" && (
          <Dashboard
            onContinue={(id) => {
              setExamId(id)
              setScreen({ kind: "home" })
            }}
            onDetails={(id) => {
              setExamId(id)
              setScreen({ kind: "progress" })
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

        {exam && screen.kind === "home" && (
          <Home
            exam={exam}
            onFullExam={() => startQuiz({ mode: "exam" })}
            onDrill={() => setScreen({ kind: "setup" })}
            onPbqLab={() => startQuiz({ mode: "pbq" })}
            onProgress={() => setScreen({ kind: "progress" })}
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
            onProgress={() => setScreen({ kind: "progress" })}
            onHome={() => setScreen({ kind: "home" })}
          />
        )}

        {exam && screen.kind === "progress" && (
          <ProgressScreen exam={exam} onHome={() => setScreen({ kind: "home" })} />
        )}
        </div>
      </div>
      <Toaster />
    </ProgressContext.Provider>
  )
}
