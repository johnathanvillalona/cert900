import { useMemo, useState } from "react"
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { EXAMS } from "@/data/index"
import { pickMC } from "@/lib/engine"
import type { Question } from "@/data/types"
import { useProgress } from "../progress-store"
import { colors, radius, space } from "../theme"
import { AppButton } from "../ui"

const COUNT = 10

export function DrillScreen({ examId, onExit }: { examId: string; onExit: () => void }) {
  const store = useProgress()
  const exam = EXAMS[examId]
  // Build the set once, weighted by the user's current progress (shared engine).
  const [questions] = useState<Question[]>(() => pickMC(exam, store.get(examId), COUNT))

  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [missedTopics, setMissedTopics] = useState<string[]>([])
  const [done, setDone] = useState(false)

  const q = questions[index]

  const choose = (optionIndex: number) => {
    if (selected !== null) return
    setSelected(optionIndex)
    const ok = optionIndex === q.a
    store.markSeen(examId, q.id)
    store.recordResult(examId, q.t, ok ? 1 : 0)
    if (ok) setCorrectCount((n) => n + 1)
    else setMissedTopics((t) => (t.includes(q.t) ? t : [...t, q.t]))
  }

  const next = () => {
    if (index + 1 >= questions.length) {
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
  }

  if (done || questions.length === 0) {
    return <Summary exam={exam} total={questions.length} correct={correctCount} missedTopics={missedTopics} onExit={onExit} />
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.topRow}>
        <Pressable onPress={onExit} hitSlop={10}>
          <Text style={styles.exit}>Exit</Text>
        </Pressable>
        <Text style={styles.counter}>
          {index + 1} / {questions.length}
        </Text>
      </View>

      <Text style={styles.domain}>{exam.domains[q.d]}</Text>
      <Text style={styles.stem}>{q.x}</Text>

      <View style={{ gap: space.sm, marginTop: space.md }}>
        {q.o.map((opt, i) => {
          const graded = selected !== null
          const isAnswer = i === q.a
          const isChosen = i === selected
          const state = !graded ? "idle" : isAnswer ? "correct" : isChosen ? "wrong" : "idle"
          return (
            <Pressable
              key={i}
              onPress={() => choose(i)}
              disabled={graded}
              testID="option"
              accessibilityRole="button"
              accessibilityLabel={opt}
              style={[
                styles.option,
                state === "correct" && styles.optionCorrect,
                state === "wrong" && styles.optionWrong,
              ]}
            >
              <Text style={styles.optionText}>{opt}</Text>
            </Pressable>
          )
        })}
      </View>

      {selected !== null && (
        <View style={styles.explain} testID="feedback">
          <Text style={styles.explainVerdict}>
            {selected === q.a ? "Correct" : "Not quite"}
          </Text>
          <Text style={styles.explainText}>{q.e}</Text>
        </View>
      )}

      <View style={{ marginTop: space.lg }}>
        <AppButton
          label={index + 1 >= questions.length ? "Finish" : "Next"}
          onPress={next}
          disabled={selected === null}
          testID="next"
        />
      </View>
    </ScrollView>
  )
}

function Summary({
  exam,
  total,
  correct,
  missedTopics,
  onExit,
}: {
  exam: (typeof EXAMS)[string]
  total: number
  correct: number
  missedTopics: string[]
  onExit: () => void
}) {
  const pct = total ? Math.round((correct / total) * 100) : 0
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.summaryScore} testID="summary-score">
        {correct}/{total}
      </Text>
      <Text style={styles.summaryPct}>{pct}% this set</Text>

      {missedTopics.length > 0 && (
        <View style={{ marginTop: space.lg, gap: space.sm }}>
          <Text style={styles.reviewLabel}>Review these topics</Text>
          {missedTopics.map((t) => {
            const video = exam.videos[t]
            return (
              <Pressable
                key={t}
                style={styles.reviewCard}
                onPress={() => video && Linking.openURL(video.u)}
              >
                <Text style={styles.reviewTopic}>{t}</Text>
                {video ? <Text style={styles.reviewLink}>Watch the Professor Messer video →</Text> : null}
              </Pressable>
            )
          })}
        </View>
      )}

      <View style={{ marginTop: space.xl }}>
        <AppButton label="Back to home" onPress={onExit} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: { padding: space.lg, paddingBottom: space.xl },
  topRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  exit: { color: colors.muted, fontSize: 15, fontWeight: "600" },
  counter: { color: colors.muted, fontSize: 14, fontVariant: ["tabular-nums"] },
  domain: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginTop: space.lg,
  },
  stem: { color: colors.text, fontSize: 19, fontWeight: "600", lineHeight: 27, marginTop: space.sm },
  option: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    paddingVertical: space.md,
    paddingHorizontal: space.md,
  },
  optionCorrect: { borderColor: colors.success, backgroundColor: colors.successBg },
  optionWrong: { borderColor: colors.danger, backgroundColor: colors.dangerBg },
  optionText: { color: colors.text, fontSize: 15, lineHeight: 21 },
  explain: {
    marginTop: space.lg,
    padding: space.md,
    borderRadius: radius.md,
    backgroundColor: colors.cardRaised,
    borderWidth: 1,
    borderColor: colors.border,
  },
  explainVerdict: { color: colors.text, fontSize: 15, fontWeight: "700", marginBottom: space.xs },
  explainText: { color: colors.muted, fontSize: 14, lineHeight: 21 },
  summaryScore: {
    color: colors.text,
    fontSize: 56,
    fontWeight: "800",
    textAlign: "center",
    marginTop: space.xl,
    fontVariant: ["tabular-nums"],
  },
  summaryPct: { color: colors.muted, fontSize: 16, textAlign: "center", marginTop: space.xs },
  reviewLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  reviewCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: space.md,
  },
  reviewTopic: { color: colors.text, fontSize: 15, fontWeight: "600" },
  reviewLink: { color: colors.primary, fontSize: 13, marginTop: 4 },
})
