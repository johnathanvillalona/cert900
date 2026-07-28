import { Linking, Pressable, ScrollView, Share, StyleSheet, Text, View } from "react-native"
import { EXAMS } from "@/data/index"
import { SITE_URL } from "@/lib/site"
import { VENDOR_FORMATS } from "@/data/vendors"
import type { ExamDef, Question } from "@/data/types"
import type { ExamOutcome, QuizOutcome, ReviewEntry } from "@/lib/quiz-session"
import { colors, radius, space } from "../theme"
import { AppButton } from "../ui"
import type { RootScreenProps } from "../navigation"
import { ReportLink } from "../report"

function fmtSelection(q: Question, sel: number | number[] | undefined): string {
  if (sel === undefined || (Array.isArray(sel) && sel.length === 0)) return "(none)"
  if (Array.isArray(sel)) return sel.map((i) => q.o[i]).join(" · ")
  return q.o[sel]
}

function fmtCorrect(q: Question): string {
  return q.as ? q.as.map((i) => q.o[i]).join(" · ") : q.o[q.a]
}

const videoLabel = (exam: ExamDef) =>
  exam.vendor === "comptia" ? "Watch the Professor Messer video →" : "Watch the free video →"

/**
 * Share sheet for a finished session.
 *
 * Uses React Native's built-in Share, so no dependency and no permissions. The
 * message names the exam and the real scale rather than a bare number, since a
 * scaled score is meaningless without its cut line.
 */
async function shareResult(exam: ExamDef, outcome: QuizOutcome): Promise<void> {
  const right = outcome.review.filter((r) => r.ok).length
  const body =
    outcome.mode === "exam"
      ? `I scored ${outcome.scaled} on a ${exam.cert} ${exam.name} (${exam.code}) practice exam — pass line is ${exam.scale.pass} on a ${exam.scale.max} scale.`
      : `I just drilled ${outcome.review.length} ${exam.cert} ${exam.name} (${exam.code}) questions and got ${right} right.`
  try {
    await Share.share({ message: `${body}\n\nFree practice at ${SITE_URL}` })
  } catch {
    /* user dismissed the sheet, or the platform refused it */
  }
}

export function ResultsScreen({ route, navigation }: RootScreenProps<"Results">) {
  const { examId, outcome } = route.params
  const exam = EXAMS[examId]

  // MC only, matching the web: PBQ history has no per-question id for a drill to
  // look up. Multiple-response is included because DrillScreen grades it, so the
  // count on the button is exactly what the drill will serve.
  const redoIds = outcome.review.flatMap((r) => (!r.ok && r.kind === "mc" ? [r.q.id] : []))
  const misses = outcome.review.filter((r) => !r.ok)

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {outcome.mode === "exam" ? (
        <ExamHero exam={exam} outcome={outcome} />
      ) : (
        <View style={styles.hero} testID="score-hero">
          <Text style={styles.heroScore}>
            {outcome.review.length - misses.length}/{outcome.review.length}
          </Text>
          <Text style={styles.heroSub}>answered correctly this session</Text>
        </View>
      )}

      {outcome.mode === "exam" && <DomainBars exam={exam} outcome={outcome} />}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          {misses.length === 0
            ? "Nothing to review"
            : `Review: ${misses.length} to study`}
        </Text>
        <Text style={styles.cardHint}>
          {misses.length === 0
            ? "A clean sweep. Every item was correct."
            : "Each one links to the video that covers it."}
        </Text>
        {misses.map((r, i) => (
          <MissCard key={i} exam={exam} entry={r} />
        ))}
      </View>

      <View style={styles.actions}>
        <AppButton
          label="Share this result"
          variant="ghost"
          testID="share-result"
          onPress={() => void shareResult(exam, outcome)}
        />
        {redoIds.length > 0 && (
          <AppButton
            label={`Redo the ${redoIds.length} you missed`}
            testID="redo-misses"
            // replace: the results are consumed by starting the drill, so back
            // from the drill lands on the exam menu rather than a stale score.
            onPress={() => navigation.replace("Drill", { examId, ids: redoIds })}
          />
        )}
        <AppButton
          label="My progress"
          variant="ghost"
          onPress={() => navigation.navigate("Progress", { examId })}
          testID="results-progress"
        />
        <AppButton
          label="Back to exam menu"
          variant="ghost"
          onPress={() => navigation.navigate("ExamHome", { examId })}
          testID="results-done"
        />
      </View>
    </ScrollView>
  )
}

function ExamHero({ exam, outcome }: { exam: ExamDef; outcome: ExamOutcome }) {
  return (
    <View style={styles.hero} testID="score-hero">
      <Text style={[styles.heroScore, outcome.pass ? styles.pass : styles.fail]}>{outcome.scaled}</Text>
      <Text style={styles.heroSub}>
        scaled 100 to {exam.scale.max}, pass line {exam.scale.pass}. Raw score{" "}
        {Math.round(outcome.pct * 100)}%
        {outcome.timeUp ? " · time expired" : ""}
      </Text>
      <Text style={[styles.verdict, outcome.pass ? styles.pass : styles.fail]} testID="results-verdict">
        {outcome.pass ? "Pass. Nice work." : "Not yet. The review below shows exactly what to study."}
      </Text>
    </View>
  )
}

/** Plain Views at percentage widths. No chart library ships to the phone. */
function DomainBars({ exam, outcome }: { exam: ExamDef; outcome: ExamOutcome }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Score by domain</Text>
      <View style={{ gap: space.md, marginTop: space.sm }}>
        {Object.keys(exam.domains).map((dk) => {
          const d = Number(dk)
          const s = outcome.domainScores[d]
          const pct = s && s.max ? Math.round((s.pts / s.max) * 100) : 0
          return (
            <View key={d} testID={`domain-${d}`}>
              <View style={styles.barRow}>
                <Text style={styles.barLabel}>{exam.domains[d]}</Text>
                <Text style={styles.barPct}>{s && s.max ? `${pct}%` : "not tested"}</Text>
              </View>
              <View style={styles.barTrack}>
                <View style={[styles.barFill, { width: `${pct}%` }]} />
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

function MissCard({ exam, entry }: { exam: ExamDef; entry: ReviewEntry }) {
  const topic = entry.kind === "mc" ? entry.q.t : entry.p.t
  const video = exam.videos[topic]

  return (
    <View style={styles.miss}>
      {entry.kind === "mc" ? (
        <>
          <Text style={styles.missStem}>{entry.q.x}</Text>
          <Text style={styles.missLine}>
            Your answer: <Text style={styles.fail}>{fmtSelection(entry.q, entry.sel)}</Text>
          </Text>
          <Text style={styles.missLine}>
            Correct: <Text style={styles.pass}>{fmtCorrect(entry.q)}</Text>
          </Text>
          <Text style={styles.missExplain}>{entry.q.e}</Text>
        </>
      ) : (
        <>
          <Text style={styles.missKind}>
            {exam.vendor === "comptia"
              ? `PBQ · ${Math.round(entry.frac * 100)}% correct`
              : `${VENDOR_FORMATS[exam.vendor].itemSuffix[entry.p.kind] ?? "Interactive"} · incorrect`}
          </Text>
          <Text style={styles.missStem}>{entry.p.title}</Text>
        </>
      )}
      {video ? (
        <Pressable
          onPress={() => void Linking.openURL(video.u)}
          testID="miss-video"
          accessibilityRole="link"
          accessibilityLabel={`${videoLabel(exam)} ${video.n}`}
          style={({ pressed }) => [styles.videoRow, pressed && { opacity: 0.6 }]}
        >
          <Text style={styles.videoText}>{videoLabel(exam)}</Text>
          <Text style={styles.videoName}>{video.n}</Text>
        </Pressable>
      ) : null}
      <ReportLink
        examId={exam.id}
        refId={entry.kind === "mc" ? `q:${entry.q.id}` : `pbq:${entry.p.title}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content: { padding: space.lg, paddingBottom: space.xl, gap: space.md },
  hero: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.lg,
    alignItems: "center",
  },
  heroScore: {
    color: colors.text,
    fontSize: 56,
    fontWeight: "800",
    fontVariant: ["tabular-nums"],
  },
  heroSub: { color: colors.muted, fontSize: 13, lineHeight: 19, textAlign: "center", marginTop: space.xs },
  verdict: { fontSize: 17, fontWeight: "700", textAlign: "center", marginTop: space.sm, lineHeight: 24 },
  pass: { color: colors.success },
  fail: { color: colors.danger },

  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.md,
    gap: space.sm,
  },
  cardTitle: { color: colors.text, fontSize: 17, fontWeight: "700" },
  cardHint: { color: colors.muted, fontSize: 13, lineHeight: 19 },

  barRow: { flexDirection: "row", justifyContent: "space-between", gap: space.sm },
  barLabel: { color: colors.text, fontSize: 13, flex: 1 },
  barPct: { color: colors.muted, fontSize: 13, fontVariant: ["tabular-nums"] },
  barTrack: {
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.cardRaised,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 6,
    overflow: "hidden",
  },
  barFill: { height: "100%", backgroundColor: colors.primary, borderRadius: 999 },

  miss: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.cardRaised,
    borderRadius: radius.md,
    padding: space.md,
    gap: space.xs,
  },
  missKind: { color: colors.danger, fontSize: 12, fontWeight: "700" },
  missStem: { color: colors.text, fontSize: 15, fontWeight: "600", lineHeight: 22 },
  missLine: { color: colors.muted, fontSize: 14, lineHeight: 21 },
  missExplain: { color: colors.muted, fontSize: 14, lineHeight: 21, marginTop: space.xs },
  videoRow: { marginTop: space.xs },
  videoText: { color: colors.primary, fontSize: 13, fontWeight: "600" },
  videoName: { color: colors.muted, fontSize: 12, marginTop: 2 },

  actions: { gap: space.sm },
})
