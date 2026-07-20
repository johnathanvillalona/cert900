import type { ReactNode } from "react"
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { EXAMS } from "@/data/index"
import type { ExamDef } from "@/data/types"
import type { ExamProgress } from "@/lib/progress"
import { accuracy, domainNumbers, masteryLevel, topicStat, weakTopics } from "@/lib/engine"
import {
  domainAccuracy,
  MIN_ANSWERS,
  MIN_COVERAGE,
  readiness,
  READINESS_COPY,
  recentAccuracy,
  sessionTrend,
  studyStreak,
  type ReadinessLevel,
} from "@/lib/stats"
import { useProgress } from "../progress-store"
import { colors, radius, space } from "../theme"
import type { RootScreenProps } from "../navigation"

// The gate-progress bars draw toward the same floors readiness() enforces, now
// imported rather than copied so the hint can never drift from the verdict.
const GATE_ANSWERS = MIN_ANSWERS
const GATE_COVERAGE = MIN_COVERAGE

/** The bar every domain should clear, matching the web dashboard's guidance. */
const DOMAIN_TARGET = 70

/** Mastery is a semantic scale, not a chart series, so it may carry red/green. */
const MASTERY_COLORS = ["", colors.danger, colors.primary, colors.success, colors.success]

const LEVEL_COLORS: Record<ReadinessLevel, string> = {
  insufficient: colors.muted,
  "not-yet": colors.danger,
  borderline: colors.primary,
  "on-track": colors.success,
}

/** RN's DimensionValue accepts a percentage only as a template literal type. */
const pctWidth = (n: number) => `${Math.max(0, Math.min(100, n))}%` as `${number}%`

export function ProgressScreen({ route }: RootScreenProps<"Progress">) {
  const { examId } = route.params
  const exam = EXAMS[examId]
  const p = useProgress().get(examId)

  const totals = Object.values(p.topics).reduce((acc, s) => ({ q: acc.q + s.t, c: acc.c + s.c }), { q: 0, c: 0 })
  const weak = weakTopics(exam, p)
  const streak = studyStreak(p.sessions, new Date().toISOString().slice(0, 10))
  const trend = sessionTrend(p.sessions)
  const recent = recentAccuracy(p.sessions)
  const domains = domainAccuracy(exam, p)

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>
        {exam.cert} {exam.name} · {exam.code}
      </Text>

      <ReadinessCard exam={exam} p={p} />

      <View style={styles.tiles} testID="statline">
        <StatTile value={String(totals.q)} label="questions answered" />
        <StatTile value={totals.q ? Math.round((totals.c / totals.q) * 100) + "%" : "0%"} label="overall accuracy" />
        <StatTile value={recent !== null ? recent + "%" : "0%"} label="recent accuracy (last ~100)" />
        <StatTile value={streak === 1 ? "1 day" : `${streak} days`} label="study streak" />
      </View>

      {trend.length > 0 && (
        <Card testID="trend">
          <Text style={styles.cardTitle}>Accuracy per session</Text>
          <Text style={styles.cardNote}>Last {trend.length} practice {trend.length === 1 ? "round" : "rounds"}, oldest first.</Text>
          <View style={styles.trend}>
            {trend.map((t) => (
              <View key={t.n} style={styles.trendSlot}>
                {/* A floor of 2% keeps a zero-score round visible as a round. */}
                <View style={[styles.trendBar, { height: pctWidth(Math.max(t.pct, 2)) }]} />
              </View>
            ))}
          </View>
        </Card>
      )}

      <Card testID="domain-bars">
        <Text style={styles.cardTitle}>Accuracy by domain</Text>
        <Text style={styles.cardNote}>
          Exam weight lives in the full simulation. Aim to keep every bar past the {DOMAIN_TARGET}% mark.
        </Text>
        {domains.map((d) => (
          <View key={d.domain} style={styles.domainRow}>
            <View style={styles.domainHead}>
              <Text style={styles.domainName} numberOfLines={2}>
                {d.domain}. {d.name}
              </Text>
              <Text style={styles.domainPct}>{d.attempts ? `${d.pct}%` : "n/a"}</Text>
            </View>
            <View style={styles.track}>
              <View style={[styles.fill, { width: pctWidth(d.pct) }]} />
              <View style={[styles.target, { left: pctWidth(DOMAIN_TARGET) }]} />
            </View>
            <Text style={styles.domainMeta}>
              {d.attempts === 0 ? "not attempted yet" : `${d.attempts} ${d.attempts === 1 ? "attempt" : "attempts"}`}
            </Text>
          </View>
        ))}
      </Card>

      <Card testID="weak-topics">
        <Text style={styles.cardTitle}>Needs work</Text>
        <Text style={styles.cardNote}>
          Topics under 70% accuracy across 3 or more attempts. Watch the video, then run a weak-topics drill.
        </Text>
        {weak.length === 0 ? (
          <Text style={styles.empty}>Nothing here yet. Topics show up once you have a few attempts on them.</Text>
        ) : (
          weak.map((t) => {
            const video = exam.videos[t]
            const s = topicStat(p, t)
            return (
              <Pressable
                key={t}
                testID={`weak-topic-${t}`}
                onPress={() => video && Linking.openURL(video.u)}
                accessibilityRole="link"
                accessibilityLabel={`${video.n}. Open the training video.`}
                style={({ pressed }) => [styles.weakRow, pressed && { opacity: 0.7 }]}
              >
                <Text style={styles.weakName}>{video.n}</Text>
                <Text style={styles.weakStat}>
                  {Math.round((accuracy(p, t) ?? 0) * 100)}% · {s.t} {s.t === 1 ? "attempt" : "attempts"}
                </Text>
                <Text style={styles.link}>
                  {exam.vendor === "comptia" ? "Watch the Professor Messer video →" : "Watch the free video →"}
                </Text>
              </Pressable>
            )
          })
        )}
      </Card>

      <Card testID="mastery-map">
        <Text style={styles.cardTitle}>Mastery map</Text>
        <Text style={styles.cardNote}>
          One row per exam topic, filling in as your accuracy climbs. Tap any row to open its{" "}
          {exam.vendor === "comptia" ? "Professor Messer" : "training"} video.
        </Text>
        {domainNumbers(exam).map((d) => (
          <View key={d}>
            <Text style={styles.domainLabel}>{exam.domains[d]}</Text>
            {Object.keys(exam.videos)
              .filter((t) => exam.videos[t].d === d)
              .map((t) => {
                const lvl = masteryLevel(p, t)
                const s = topicStat(p, t)
                return (
                  <Pressable
                    key={t}
                    testID={`mastery-${t}`}
                    onPress={() => Linking.openURL(exam.videos[t].u)}
                    accessibilityRole="link"
                    accessibilityLabel={`${exam.videos[t].n}. Open the training video.`}
                    style={({ pressed }) => [styles.masteryRow, pressed && { opacity: 0.7 }]}
                  >
                    <View style={styles.pips}>
                      {[1, 2, 3, 4].map((i) => (
                        <View
                          key={i}
                          style={[styles.pip, i <= lvl ? { backgroundColor: MASTERY_COLORS[lvl] } : styles.pipEmpty]}
                        />
                      ))}
                    </View>
                    <View style={styles.masteryText}>
                      <Text style={styles.masteryName}>{exam.videos[t].n}</Text>
                      <Text style={styles.masteryMeta}>
                        {s.t ? `${Math.round((s.c / s.t) * 100)}% · ${s.t} ${s.t === 1 ? "try" : "tries"}` : "not attempted"}
                      </Text>
                    </View>
                  </Pressable>
                )
              })}
          </View>
        ))}
      </Card>

      {p.exams.length > 0 && (
        <Card testID="exam-history">
          <Text style={styles.cardTitle}>Exam history</Text>
          <Text style={styles.cardNote}>Scaled 100 to {exam.scale.max}. This exam passes at {exam.scale.pass}.</Text>
          {p.exams
            .slice()
            .reverse()
            .map((e, i) => (
              <View key={`${e.date}-${i}`} style={styles.historyRow}>
                <Text style={styles.historyDate}>{e.date}</Text>
                {/* Each exam has its own cut score (675/700/720/750); a flat 700
                    mislabels Core 1 passes and Security+ fails. */}
                <Text style={[styles.historyScore, { color: e.scaled >= exam.scale.pass ? colors.success : colors.danger }]}>
                  {e.scaled} ({e.pct}%)
                </Text>
              </View>
            ))}
        </Card>
      )}
    </ScrollView>
  )
}

/**
 * The estimate, always as a range. The sample behind it is far too small to
 * justify the precision a single number would imply, and a point value reads as
 * a promise about exam day. Wording comes from READINESS_COPY so the phrasing
 * policy lives in one place.
 */
function ReadinessCard({ exam, p }: { exam: ExamDef; p: ExamProgress }) {
  const ready = readiness(exam, p)
  const copy = READINESS_COPY[ready.level]

  return (
    <Card testID="readiness">
      <View style={styles.readyHead}>
        <Text style={styles.cardTitle}>Where you'd land today</Text>
        <Text style={[styles.readyLevel, { color: LEVEL_COLORS[ready.level] }]} testID="readiness-level">
          {copy.label}
        </Text>
      </View>

      {ready.band ? (
        <>
          <View style={styles.band} testID="readiness-band">
            <Text style={styles.bandNum}>{ready.band.low}</Text>
            <Text style={styles.bandTo}>to</Text>
            <Text style={styles.bandNum}>{ready.band.high}</Text>
          </View>
          <Text style={styles.cardNote}>
            estimated scaled score, pass line {exam.scale.pass}. Based on {ready.answers} answers covering{" "}
            {Math.round(ready.coverage * 100)}% of the exam weight.
          </Text>
        </>
      ) : (
        /* Gated: show the distance left to travel, never a number that would
           read as an estimate the data cannot support. */
        <View testID="readiness-gate">
          <GateBar label="Answers" done={ready.answers} goal={GATE_ANSWERS} value={`${ready.answers} of ${GATE_ANSWERS}`} />
          <GateBar
            label="Exam weight covered"
            done={ready.coverage}
            goal={GATE_COVERAGE}
            value={`${Math.round(ready.coverage * 100)}% of ${Math.round(GATE_COVERAGE * 100)}%`}
          />
        </View>
      )}

      <Text style={styles.readyNote}>{copy.note}</Text>

      {ready.gaps.length > 0 && (
        <Text style={styles.cardNote}>
          No estimate yet for {ready.gaps.map((g) => g.name).join(", ")}. A few questions in{" "}
          {ready.gaps.length === 1 ? "it" : "each"} would sharpen this.
        </Text>
      )}

      <Text style={styles.disclaimer}>
        An estimate from your practice answers here, not a prediction of your real exam result.
      </Text>
    </Card>
  )
}

function GateBar({ label, done, goal, value }: { label: string; done: number; goal: number; value: string }) {
  return (
    <View style={styles.gateRow}>
      <View style={styles.domainHead}>
        <Text style={styles.gateLabel}>{label}</Text>
        <Text style={styles.gateValue}>{value}</Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: pctWidth((done / goal) * 100) }]} />
      </View>
    </View>
  )
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.tile}>
      <Text style={styles.tileValue}>{value}</Text>
      <Text style={styles.tileLabel}>{label}</Text>
    </View>
  )
}

function Card({ children, testID }: { children: ReactNode; testID?: string }) {
  return (
    <View style={styles.card} testID={testID}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  content: { padding: space.lg, paddingBottom: space.xl, gap: space.sm },
  eyebrow: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginBottom: space.xs,
  },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.md,
  },
  cardTitle: { color: colors.text, fontSize: 17, fontWeight: "700" },
  cardNote: { color: colors.muted, fontSize: 12, lineHeight: 18, marginTop: 4 },
  empty: { color: colors.muted, fontSize: 13, lineHeight: 20, marginTop: space.sm },

  // Readiness
  readyHead: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space.sm },
  readyLevel: { fontSize: 11, fontWeight: "800", letterSpacing: 0.6, textTransform: "uppercase" },
  band: { flexDirection: "row", alignItems: "baseline", gap: space.sm, marginTop: space.sm },
  bandNum: { color: colors.text, fontSize: 34, fontWeight: "800", fontVariant: ["tabular-nums"] },
  bandTo: { color: colors.muted, fontSize: 16 },
  readyNote: { color: colors.text, fontSize: 13, lineHeight: 20, marginTop: space.sm },
  disclaimer: { color: colors.muted, fontSize: 11, lineHeight: 16, marginTop: space.sm },
  gateRow: { marginTop: space.sm },
  gateLabel: { color: colors.text, fontSize: 13, fontWeight: "600" },
  gateValue: { color: colors.muted, fontSize: 12, fontVariant: ["tabular-nums"] },

  // Stat tiles
  tiles: { flexDirection: "row", flexWrap: "wrap", gap: space.sm },
  tile: {
    flexGrow: 1,
    flexBasis: "46%",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.md,
  },
  tileValue: { color: colors.text, fontSize: 24, fontWeight: "800", fontVariant: ["tabular-nums"] },
  tileLabel: { color: colors.muted, fontSize: 12, marginTop: 2 },

  // Session trend
  trend: { flexDirection: "row", alignItems: "flex-end", gap: 3, height: 56, marginTop: space.sm },
  trendSlot: { flex: 1, height: "100%", justifyContent: "flex-end" },
  trendBar: { backgroundColor: colors.primary, borderRadius: 2, minHeight: 2 },

  // Domain bars. Single hue by design: colour is never the variable in a chart.
  domainRow: { marginTop: space.md },
  domainHead: { flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", gap: space.sm },
  domainName: { color: colors.text, fontSize: 13, fontWeight: "600", flexShrink: 1 },
  domainPct: { color: colors.text, fontSize: 13, fontWeight: "700", fontVariant: ["tabular-nums"] },
  domainMeta: { color: colors.muted, fontSize: 11, marginTop: 3 },
  track: {
    height: 8,
    borderRadius: 999,
    backgroundColor: colors.cardRaised,
    marginTop: 6,
    overflow: "hidden",
    justifyContent: "center",
  },
  fill: { height: "100%", backgroundColor: colors.primary, borderRadius: 999 },
  target: { position: "absolute", top: 0, bottom: 0, width: 2, backgroundColor: colors.border },

  // Weak topics
  weakRow: { borderTopWidth: 1, borderTopColor: colors.border, paddingTop: space.sm, marginTop: space.sm },
  weakName: { color: colors.text, fontSize: 14, fontWeight: "600" },
  weakStat: { color: colors.danger, fontSize: 12, marginTop: 2, fontVariant: ["tabular-nums"] },
  link: { color: colors.primary, fontSize: 13, fontWeight: "600", marginTop: 4 },

  // Mastery map
  domainLabel: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginTop: space.md,
  },
  masteryRow: { flexDirection: "row", alignItems: "center", gap: space.sm, paddingVertical: space.sm },
  pips: { flexDirection: "row", gap: 3 },
  pip: { width: 8, height: 14, borderRadius: 2 },
  pipEmpty: { backgroundColor: colors.cardRaised },
  masteryText: { flex: 1 },
  masteryName: { color: colors.text, fontSize: 13, fontWeight: "600" },
  masteryMeta: { color: colors.muted, fontSize: 11, marginTop: 1, fontVariant: ["tabular-nums"] },

  // Exam history
  historyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: space.sm,
    marginTop: space.xs,
  },
  historyDate: { color: colors.text, fontSize: 13, fontVariant: ["tabular-nums"] },
  historyScore: { fontSize: 13, fontWeight: "700", fontVariant: ["tabular-nums"] },
})
