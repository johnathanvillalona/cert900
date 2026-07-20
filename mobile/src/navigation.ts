import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { QuizConfig, QuizOutcome } from "@/lib/quiz-session"

/**
 * Drill params ARE the shared QuizConfig minus its mode, so the phone and the
 * web describe a drill with one type. `ids` is what the review queue passes.
 */
export type DrillParams = { examId: string } & Omit<QuizConfig, "mode">

/**
 * The whole screen graph. Every screen types itself against this, so adding a
 * route or changing a param is a compile error at both ends rather than a
 * runtime undefined.
 */
export type RootStackParamList = {
  Exams: undefined
  Account: undefined
  ExamHome: { examId: string }
  Drill: DrillParams
  Exam: { examId: string }
  /** `outcome` is plain data (no Sets, no functions), so it is a legal param. */
  Results: { examId: string; outcome: QuizOutcome }
  Progress: { examId: string }
}

export type RootScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
