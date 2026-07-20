import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { EXAMS } from "@/data/index"
import { weakTopics } from "@/lib/engine"
import { dayNumber } from "@/lib/progress"
import { isDue, reviewQueue } from "@/lib/review"
import { useProgress } from "../progress-store"
import { colors, radius, space } from "../theme"
import type { RootScreenProps } from "../navigation"

/** How many misses one review round serves, matching the web's Home. */
const REVIEW_LIMIT = 20

export function ExamHomeScreen({ route, navigation }: RootScreenProps<"ExamHome">) {
  const { examId } = route.params
  const store = useProgress()
  const exam = EXAMS[examId]
  const p = store.get(examId)

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
  const queue = reviewQueue(exam, p, today, REVIEW_LIMIT)
  const dueNow = queue.filter((x) => isDue(p.q![String(x.q.id)], today)).length

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
          desc={`${queue.length} ${queue.length === 1 ? "question is" : "questions are"} waiting to be re-earned${
            dueNow > 0 && dueNow < queue.length ? `, ${dueNow} due today` : ""
          }. Each one leaves the queue after you get it right twice.`}
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
})
