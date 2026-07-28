import { useCallback, useEffect, useRef, useState } from "react"
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { EXAMS } from "@/data/index"
import { mcCorrect, pickMC, shuffle } from "@/lib/engine"
import type { AnswerEntry } from "@/lib/answers"
import type { Question } from "@/data/types"
import { useProgress } from "../progress-store"
import { colors, radius, space } from "../theme"
import { AppButton } from "../ui"
import type { RootScreenProps } from "../navigation"
import { ReportLink } from "../report"

const COUNT = 10
const CHOOSE_WORDS: Record<number, string> = { 2: "two", 3: "three", 4: "four" }

export function DrillScreen({ route, navigation }: RootScreenProps<"Drill">) {
  const { examId, ids, n, focusWeak, domain, topic } = route.params
  const store = useProgress()
  const exam = EXAMS[examId]
  const onExit = () => navigation.goBack()
  // Build the set once, weighted by the user's current progress (shared engine).
  const [questions] = useState<Question[]>(() => {
    // The review queue already decided what is due and in what order (worst
    // first), so its ids bypass adaptive selection exactly as the web's
    // buildItems does for cfg.ids.
    if (ids?.length) {
      const byId = new Map(exam.questions.map((qq) => [qq.id, qq]))
      return ids.map((id) => byId.get(id)).filter((qq): qq is Question => !!qq)
    }
    return pickMC(exam, store.get(examId), n ?? COUNT, { focusWeak, domain, topic })
  })
  // Per-session option order so the correct answer moves around (mirrors web optOrder).
  const [orders] = useState<number[][]>(() => questions.map((qq) => shuffle(qq.o.map((_, i) => i))))

  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number[]>([])
  const [graded, setGraded] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [missedTopics, setMissedTopics] = useState<string[]>([])
  const [done, setDone] = useState(false)

  // Answers accumulate here and reach the store in ONE write. Per-answer writes
  // re-serialized the whole progress blob ten times a round.
  const pending = useRef<AnswerEntry[]>([])
  // The store object is rebuilt every provider render, so the flush must read
  // the latest one rather than whichever was captured when the effect ran.
  const storeRef = useRef(store)
  useEffect(() => {
    storeRef.current = store
  })

  const flush = useCallback(() => {
    if (!pending.current.length) return
    storeRef.current.recordAnswers(examId, pending.current)
    pending.current = []
  }, [examId])

  // Backing out mid-round is normal on a phone, so answers already given have to
  // survive it. Without this the batch would only ever land on Finish.
  useEffect(() => flush, [flush])

  const q = questions[index]
  // Present = multiple response. Held as the array (not a boolean) so the
  // correct-option checks narrow without a non-null assertion.
  const correctSet = q?.as
  const need = correctSet?.length ?? 1
  const isPicked = (oi: number) => picked.includes(oi)
  const isCorrectOpt = (oi: number) => (correctSet ? correctSet.includes(oi) : oi === q.a)
  // Recomputed rather than stored: one grading rule, and it is the engine's.
  const ok = graded && mcCorrect(q, correctSet ? picked : picked[0])

  const commit = (sel: number[]) => {
    if (graded) return
    setGraded(true)
    const right = mcCorrect(q, correctSet ? sel : sel[0])
    store.markSeen(examId, [q.id])
    // questionId is what folds this answer into the shared Leitner history, so a
    // miss on the phone shows up in the web's review queue and vice versa.
    pending.current.push({ topic: q.t, frac: right ? 1 : 0, questionId: q.id })
    if (right) setCorrectCount((c) => c + 1)
    else setMissedTopics((t) => (t.includes(q.t) ? t : [...t, q.t]))
  }

  const choose = (oi: number) => {
    if (graded) return
    // Single answer grades on tap; multiple response waits for "Check answer".
    if (!correctSet) {
      setPicked([oi])
      commit([oi])
      return
    }
    setPicked((cur) =>
      cur.includes(oi) ? cur.filter((x) => x !== oi) : cur.length < need ? [...cur, oi] : cur,
    )
  }

  const finish = () => {
    const answered = pending.current.length
    flush()
    // Feeds the study streak and the dashboard's session trend, the same record
    // the web writes at the end of a practice run.
    store.logSession(examId, {
      date: new Date().toISOString().slice(0, 10),
      mode: "practice",
      n: answered,
      correct: correctCount,
    })
    setDone(true)
  }

  const next = () => {
    if (index + 1 >= questions.length) {
      finish()
      return
    }
    setIndex((i) => i + 1)
    setPicked([])
    setGraded(false)
  }

  if (done || questions.length === 0) {
    return <Summary exam={exam} total={questions.length} correct={correctCount} missedTopics={missedTopics} onExit={onExit} />
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {/* Leaving is the stack's back button (and Android hardware back). */}
      <View style={styles.topRow}>
        <Text style={styles.counter}>
          {index + 1} / {questions.length}
        </Text>
      </View>

      <View style={styles.badges}>
        <Text style={styles.domain}>{exam.domains[q.d]}</Text>
        {correctSet && (
          <Text style={styles.chooseBadge} testID="choose-n">
            Choose {CHOOSE_WORDS[need] ?? need}
          </Text>
        )}
      </View>
      <Text style={styles.stem}>{q.x}</Text>

      <View style={{ gap: space.sm, marginTop: space.md }}>
        {orders[index].map((oi) => {
          const opt = q.o[oi]
          const chosen = isPicked(oi)
          const state = !graded
            ? chosen
              ? "selected"
              : "idle"
            : isCorrectOpt(oi)
              ? "correct"
              : chosen
                ? "wrong"
                : "idle"
          // The checkbox fill tracks the row: amber while choosing, then the
          // verdict colour once graded.
          const fill = !chosen
            ? null
            : !graded
              ? colors.primary
              : isCorrectOpt(oi)
                ? colors.success
                : colors.danger
          return (
            <Pressable
              key={oi}
              onPress={() => choose(oi)}
              disabled={graded}
              testID="option"
              accessibilityRole={correctSet ? "checkbox" : "button"}
              accessibilityState={{ checked: correctSet ? chosen : undefined, disabled: graded }}
              accessibilityLabel={opt}
              style={[
                styles.option,
                state === "selected" && styles.optionSelected,
                state === "correct" && styles.optionCorrect,
                state === "wrong" && styles.optionWrong,
              ]}
            >
              {/* Square boxes appear only for multiple response, so the pick-many
                  rule is visible in the controls and not just in the stem. */}
              {correctSet && (
                <View style={[styles.box, fill ? { backgroundColor: fill, borderColor: fill } : null]}>
                  {chosen && (
                    <Text style={[styles.boxCheck, { color: graded ? colors.text : colors.primaryText }]}>✓</Text>
                  )}
                </View>
              )}
              <Text style={styles.optionText}>{opt}</Text>
            </Pressable>
          )
        })}
      </View>

      {correctSet && !graded && (
        <View style={styles.checkRow}>
          <View style={{ flex: 1 }}>
            <AppButton
              label="Check answer"
              onPress={() => commit(picked)}
              disabled={picked.length !== need}
              testID="check-multi"
            />
          </View>
          <Text style={styles.pickCount}>
            {picked.length} of {need} selected
          </Text>
        </View>
      )}

      {graded && (
        <View style={styles.explain} testID="feedback">
          <Text style={[styles.explainVerdict, { color: ok ? colors.success : colors.danger }]}>
            {ok ? "Correct" : correctSet ? "Not quite. The correct answers are highlighted above" : "Not quite"}
          </Text>
          <Text style={styles.explainText}>{q.e}</Text>
          <ReportLink examId={exam.id} refId={`q:${q.id}`} />
        </View>
      )}

      <View style={{ marginTop: space.lg }}>
        <AppButton
          label={index + 1 >= questions.length ? "Finish" : "Next"}
          onPress={next}
          disabled={!graded}
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
                {video ? (
                  <Text style={styles.reviewLink}>
                    {exam.vendor === "comptia" ? "Watch the Professor Messer video →" : "Watch the free video →"}
                  </Text>
                ) : null}
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
  topRow: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center" },
  counter: { color: colors.muted, fontSize: 14, fontVariant: ["tabular-nums"] },
  badges: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: space.sm, marginTop: space.lg },
  domain: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  chooseBadge: {
    color: colors.primaryText,
    backgroundColor: colors.primary,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    borderRadius: radius.sm,
    paddingHorizontal: space.sm,
    paddingVertical: 2,
    overflow: "hidden",
  },
  stem: { color: colors.text, fontSize: 19, fontWeight: "600", lineHeight: 27, marginTop: space.sm },
  option: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: space.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    paddingVertical: space.md,
    paddingHorizontal: space.md,
  },
  optionSelected: { borderColor: colors.primary, backgroundColor: colors.cardRaised },
  optionCorrect: { borderColor: colors.success, backgroundColor: colors.successBg },
  optionWrong: { borderColor: colors.danger, backgroundColor: colors.dangerBg },
  optionText: { color: colors.text, fontSize: 15, lineHeight: 21, flex: 1 },
  box: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.muted,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  boxCheck: { fontSize: 13, fontWeight: "800", lineHeight: 16 },
  checkRow: { flexDirection: "row", alignItems: "center", gap: space.md, marginTop: space.md },
  pickCount: { color: colors.muted, fontSize: 13, fontVariant: ["tabular-nums"] },
  explain: {
    marginTop: space.lg,
    padding: space.md,
    borderRadius: radius.md,
    backgroundColor: colors.cardRaised,
    borderWidth: 1,
    borderColor: colors.border,
  },
  explainVerdict: { fontSize: 15, fontWeight: "700", marginBottom: space.xs },
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
