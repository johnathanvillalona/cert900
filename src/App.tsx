import { useMemo, useState } from "react"
import { EXAMS, EXAM_ORDER } from "@/data/index"
import type { ExamDef } from "@/data/types"
import { ProgressContext, useProgressStore } from "@/hooks/useProgress"
import { useTheme } from "@/hooks/useTheme"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import type { QuizConfig, QuizOutcome } from "@/hooks/useQuizSession"
import { ExamPicker } from "@/screens/ExamPicker"
import { Home } from "@/screens/Home"
import { DrillSetup } from "@/screens/DrillSetup"
import { Quiz } from "@/screens/Quiz"
import { Results } from "@/screens/Results"
import { ProgressScreen } from "@/screens/ProgressScreen"

export type Screen =
  | { kind: "picker" }
  | { kind: "home" }
  | { kind: "setup" }
  | { kind: "quiz"; cfg: QuizConfig; sessionKey: number }
  | { kind: "results"; outcome: QuizOutcome }
  | { kind: "progress" }

export default function App() {
  const store = useProgressStore()
  const { theme, toggle } = useTheme()
  const [examId, setExamId] = useState<string | null>(null)
  const [screen, setScreen] = useState<Screen>({ kind: "picker" })
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

  return (
    <ProgressContext.Provider value={store}>
      <div className="mx-auto min-h-screen max-w-4xl px-4 pb-16">
        <header className="flex flex-wrap items-center justify-between gap-3 py-4">
          <button
            className="font-mono text-sm font-semibold tracking-wide"
            onClick={() => {
              setExamId(null)
              setScreen({ kind: "picker" })
            }}
            data-testid="brand"
          >
            COMPTIA TRAINER
            {exam && <span className="text-muted-foreground font-normal"> · {exam.cert} {exam.name} · {exam.code}</span>}
          </button>
          <div className="flex items-center gap-2">
            {exam && screen.kind !== "picker" && (
              <Button
                variant="outline"
                size="sm"
                data-testid="switch-exam"
                onClick={() => {
                  setExamId(null)
                  setScreen({ kind: "picker" })
                }}
              >
                Switch exam
              </Button>
            )}
            <Button variant="outline" size="sm" onClick={toggle} data-testid="theme-toggle" aria-label="Toggle theme">
              {theme === "dark" ? "Light" : "Dark"}
            </Button>
          </div>
        </header>

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
      <Toaster />
    </ProgressContext.Provider>
  )
}
