import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { EXAMS, EXAM_ORDER } from "@/data/index"
import { useProgress } from "../progress-store"
import { colors, radius, space } from "../theme"
import type { RootScreenProps } from "../navigation"

export function HomeScreen({ navigation }: RootScreenProps<"Exams">) {
  const store = useProgress()

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {/* Counted, not hardcoded, so the line stays true when a bank is added. */}
      <Text style={styles.tagline}>
        Free practice for {EXAM_ORDER.length} IT certification exams. Adaptive drills, PBQs, and the
        real score scales.
      </Text>

      <Text style={styles.sectionLabel}>Choose an exam</Text>
      {EXAM_ORDER.map((id) => {
        const exam = EXAMS[id]
        const p = store.get(id)
        const answered = Object.values(p.topics).reduce((n, s) => n + s.t, 0)
        return (
          <Pressable
            key={id}
            testID={`practice-${id}`}
            accessibilityRole="button"
            accessibilityLabel={`${exam.cert} ${exam.name}`}
            onPress={() => navigation.navigate("ExamHome", { examId: id })}
            style={({ pressed }) => [styles.examCard, pressed && { opacity: 0.75 }]}
          >
            <View style={styles.nameRow}>
              <Text style={styles.examName}>
                {exam.cert} {exam.name}
              </Text>
              {p.passed && (
                <View style={styles.passedPill} testID={`passed-${id}`}>
                  <Text style={styles.passedPillText}>Passed</Text>
                </View>
              )}
            </View>
            <Text style={styles.examMeta}>
              {exam.code} · {exam.questions.length} questions
              {answered > 0 ? ` · ${answered} answered` : ""}
            </Text>
          </Pressable>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: { padding: space.lg, paddingBottom: space.xl, gap: space.sm },
  tagline: { color: colors.muted, fontSize: 14, lineHeight: 20, marginBottom: space.xs },
  sectionLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  examCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.md,
  },
  nameRow: { flexDirection: "row", alignItems: "center", gap: space.sm, flexWrap: "wrap" },
  examName: { color: colors.text, fontSize: 16, fontWeight: "700" },
  examMeta: { color: colors.muted, fontSize: 13, marginTop: 3 },
  passedPill: {
    borderWidth: 1,
    borderColor: colors.success,
    borderRadius: 999,
    paddingHorizontal: space.sm,
    paddingVertical: 2,
  },
  passedPillText: { color: colors.success, fontSize: 11, fontWeight: "700" },
})
