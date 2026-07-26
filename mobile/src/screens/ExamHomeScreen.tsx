import { useState } from "react"
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { EXAMS } from "@/data/index"
import { weakTopics } from "@/lib/engine"
import { countdownCopy, dateToDay, dayNumber } from "@/lib/progress"
import { reviewQueue } from "@/lib/review"
import { useProgress } from "../progress-store"
import { colors, radius, space } from "../theme"
import type { RootScreenProps } from "../navigation"

/** How many misses one review round serves, matching the web's Home. */
const REVIEW_LIMIT = 20

/** RN has no native date input; accept a typed YYYY-MM-DD and validate it. */
const isIsoDate = (s: string): boolean => /^\d{4}-\d{2}-\d{2}$/.test(s) && Number.isFinite(dateToDay(s))

export function ExamHomeScreen({ route, navigation }: RootScreenProps<"ExamHome">) {
  const { examId } = route.params
  const store = useProgress()
  const exam = EXAMS[examId]
  const p = store.get(examId)
  // Local draft so a half-typed date never hits the store; committed on submit/blur.
  const [dateDraft, setDateDraft] = useState<string | null>(null)

  // A deep link (cert900://exam/:examId) can carry any id, so this screen is the
  // one place an unvalidated id reaches EXAMS. Guard it before the shared helpers
  // dereference a missing exam and crash the render.
  if (!exam) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundTitle}>Exam not found</Text>
        <Pressable onPress={() => navigation.navigate("Exams")} hitSlop={10}>
          <Text style={styles.notFoundLink}>Back to exams</Text>
        </Pressable>
      </View>
    )
  }

  const totals = Object.values(p.topics).reduce((acc, s) => ({ q: acc.q + s.t, c: acc.c + s.c }), { q: 0, c: 0 })
  const weak = weakTopics(exam, p).length
  const today = dayNumber()
  // reviewQueue is due-gated: everything it returns is ready to re-attempt now.
  const queue = reviewQueue(exam, p, today, REVIEW_LIMIT)

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>
        {exam.cert} {exam.name} · {exam.code}
      </Text>

      {/* Only rendered once there is something to redo, so it never sits empty. */}
      {queue.length > 0 && (
        <Tile
          testID="mode-review"
          title="Review your misses"
          desc={`${queue.length} ${queue.length === 1 ? "question is" : "questions are"} due to be re-earned today. Each one leaves the queue after you get it right twice.`}
          accent
          onPress={() => navigation.navigate("Drill", { examId, ids: queue.map((x) => x.q.id) })}
        />
      )}

      <Tile
        testID="mode-drill"
        title="Question drill"
        desc="Short adaptive rounds with an explanation and the matching free training video after every answer."
        onPress={() => navigation.navigate("Drill", { examId })}
      />
      <Tile
        testID="mode-exam"
        title="Full exam"
        desc={`${exam.examMinutes} timed minutes, scored 100 to ${exam.scale.max}. No feedback until you finish, just like the real thing.`}
        onPress={() => navigation.navigate("Exam", { examId })}
      />
      <Tile
        testID="mode-progress"
        title="Detailed progress"
        desc="Mastery by topic, weak areas to review, and your exam score history."
        onPress={() => navigation.navigate("Progress", { examId })}
      />

      <View style={styles.snapshot} testID="home-snapshot">
        <Text style={styles.snapshotText}>
          {exam.questions.length} questions in the {exam.code} bank, covering all{" "}
          {Object.keys(exam.domains).length} exam domains.{" "}
          {totals.q === 0
            ? "Tracking starts with your first answer."
            : `You have answered ${totals.q} so far${
                weak > 0
                  ? ` with ${weak} weak topic${weak > 1 ? "s" : ""} flagged. A weak-topics drill would hit those first.`
                  : " with nothing flagged as weak yet."
              }`}
        </Text>
      </View>

      {/* Exam plan: real-exam date countdown, the passed milestone, and the
          per-exam reset. Mirrors the web Home's card. */}
      <View style={styles.plan} testID="exam-plan">
        {p.passed ? (
          <View style={styles.planRow}>
            <View style={styles.passedPill} testID="passed-badge">
              <Text style={styles.passedPillText}>Passed{p.passedOn ? ` · ${p.passedOn}` : ""}</Text>
            </View>
            <Text style={styles.planMuted}>This one is in the books.</Text>
            <Pressable onPress={() => store.setPassed(examId, false)} hitSlop={8}>
              <Text style={styles.planLink}>Undo</Text>
            </Pressable>
          </View>
        ) : (
          <>
            <View style={styles.planRow}>
              <Text style={styles.planLabel}>Exam date</Text>
              <TextInput
                testID="exam-date"
                style={styles.dateInput}
                value={dateDraft ?? p.examDate ?? ""}
                placeholder="YYYY-MM-DD"
                placeholderTextColor={colors.muted}
                keyboardType="numbers-and-punctuation"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={10}
                onChangeText={setDateDraft}
                onEndEditing={() => {
                  const v = (dateDraft ?? "").trim()
                  if (v === "") {
                    if (dateDraft !== null) store.setExamDate(examId, null)
                  } else if (isIsoDate(v)) {
                    store.setExamDate(examId, v)
                  }
                  setDateDraft(null)
                }}
              />
              {p.examDate && !dateDraft && (
                <Text style={styles.countdown} testID="exam-countdown">
                  {countdownCopy(p.examDate, today)}
                </Text>
              )}
            </View>
            <View style={styles.planRow}>
              <Text style={styles.planMuted}>Already sat the real exam?</Text>
              <Pressable
                testID="mark-passed"
                accessibilityRole="button"
                accessibilityLabel="Mark this exam as passed"
                onPress={() => store.setPassed(examId, true)}
                style={({ pressed }) => [styles.smallBtn, pressed && { opacity: 0.7 }]}
              >
                <Text style={styles.smallBtnText}>I passed</Text>
              </Pressable>
            </View>
          </>
        )}

        <View style={styles.planDivider} />
        <View style={styles.planRow}>
          <Text style={[styles.planMuted, { flex: 1 }]}>Clearing removes this exam's progress only.</Text>
          <Pressable
            testID="clear-progress"
            accessibilityRole="button"
            accessibilityLabel={`Clear all ${exam.code} progress`}
            onPress={() =>
              Alert.alert(
                `Clear all ${exam.code} progress?`,
                "Every answer, exam score, review-queue entry, exam date, and milestone for this exam will be deleted on this device and in your synced copy. Other exams are not affected. This cannot be undone.",
                [
                  { text: "Keep my progress", style: "cancel" },
                  { text: "Clear progress", style: "destructive", onPress: () => store.resetExam(examId) },
                ],
              )
            }
            style={({ pressed }) => [styles.dangerBtn, pressed && { opacity: 0.7 }]}
          >
            <Text style={styles.dangerBtnText}>Clear progress</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

function Tile({
  title,
  desc,
  onPress,
  testID,
  accent = false,
}: {
  title: string
  desc: string
  onPress: () => void
  testID: string
  accent?: boolean
}) {
  return (
    <Pressable
      onPress={onPress}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={({ pressed }) => [styles.tile, accent && styles.tileAccent, pressed && { opacity: 0.75 }]}
    >
      <Text style={styles.tileTitle}>{title}</Text>
      <Text style={styles.tileDesc}>{desc}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  content: { padding: space.lg, paddingBottom: space.xl, gap: space.sm },
  notFound: { flex: 1, alignItems: "center", justifyContent: "center", gap: space.md, padding: space.lg },
  notFoundTitle: { color: colors.text, fontSize: 18, fontWeight: "700" },
  notFoundLink: { color: colors.primary, fontSize: 15, fontWeight: "600" },
  eyebrow: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginBottom: space.xs,
  },
  tile: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.md,
  },
  tileAccent: { borderColor: colors.primary, backgroundColor: colors.cardRaised },
  tileTitle: { color: colors.text, fontSize: 17, fontWeight: "700" },
  tileDesc: { color: colors.muted, fontSize: 13, lineHeight: 19, marginTop: 4 },
  snapshot: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.md,
    marginTop: space.sm,
  },
  snapshotText: { color: colors.muted, fontSize: 13, lineHeight: 20 },
  plan: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.md,
    marginTop: space.sm,
    gap: space.sm,
  },
  planRow: { flexDirection: "row", alignItems: "center", gap: space.sm, flexWrap: "wrap" },
  planLabel: { color: colors.text, fontSize: 14, fontWeight: "600" },
  planMuted: { color: colors.muted, fontSize: 13, lineHeight: 18 },
  planLink: { color: colors.primary, fontSize: 13, fontWeight: "600" },
  dateInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    color: colors.text,
    paddingHorizontal: space.sm,
    paddingVertical: 6,
    fontSize: 14,
    fontVariant: ["tabular-nums"],
    minWidth: 130,
  },
  countdown: { color: colors.primary, fontSize: 14, fontWeight: "600" },
  passedPill: {
    borderWidth: 1,
    borderColor: colors.success,
    borderRadius: 999,
    paddingHorizontal: space.sm,
    paddingVertical: 3,
  },
  passedPillText: { color: colors.success, fontSize: 12, fontWeight: "700" },
  smallBtn: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: space.md,
    paddingVertical: 7,
  },
  smallBtnText: { color: colors.text, fontSize: 13, fontWeight: "600" },
  planDivider: { height: 1, backgroundColor: colors.border },
  dangerBtn: {
    borderWidth: 1,
    borderColor: colors.danger,
    borderRadius: radius.md,
    paddingHorizontal: space.md,
    paddingVertical: 7,
  },
  dangerBtnText: { color: colors.danger, fontSize: 13, fontWeight: "600" },
})
