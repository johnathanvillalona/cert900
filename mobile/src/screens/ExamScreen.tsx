import { useEffect, useMemo, useRef, useState } from "react"
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native"
import Svg, { G, Line, Rect, Text as SvgText } from "react-native-svg"
import { EXAMS } from "@/data/index"
import { VENDOR_FORMATS } from "@/data/vendors"
import type {
  ExamDef,
  HotspotIcon,
  PBQConfig,
  PBQHotspot,
  PBQMatch,
  PBQOrder,
  PBQTerminal,
} from "@/data/types"
import { commandMatches, mcAnswerBlank, pbqAnswerBlank, type PBQAnswer } from "@/lib/engine"
import { useQuizSession, type QuizConfig, type QuizItem, type QuizSession } from "@/lib/quiz-session"
import { useProgress } from "../progress-store"
import { colors, radius, space } from "../theme"
import { AppButton } from "../ui"
import type { RootScreenProps } from "../navigation"

const LETTERS = "ABCDEF"
const CHOOSE_WORDS: Record<number, string> = { 2: "two", 3: "three", 4: "four" }

/** Module scope so the reducer's lazy initializer and the timer effect see one stable object. */
const EXAM_CFG: QuizConfig = { mode: "exam" }

/** Under five minutes the timer turns red, same threshold as the web. */
const WARN_SECONDS = 300

/** Mirrors fmtTime in the web's Quiz screen. */
function fmtTime(s: number) {
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`
}

const todayISO = () => new Date().toISOString().slice(0, 10)

/**
 * The exam form this device can actually present. dragconnect PBQs are dropped:
 * their photo scenes live in the web app's public/pbq and are not bundled into
 * the app, so there would be nothing to drag onto. Every bank that has them
 * keeps 17+ other PBQs, far more than the 3 to 4 an exam form draws, so
 * `examPBQ` is still honoured exactly.
 */
function mobileForm(exam: ExamDef): ExamDef {
  return exam.pbqs.some((p) => p.kind === "dragconnect")
    ? { ...exam, pbqs: exam.pbqs.filter((p) => p.kind !== "dragconnect") }
    : exam
}

export function ExamScreen({ route, navigation }: RootScreenProps<"Exam">) {
  const { examId } = route.params
  const store = useProgress()
  // Stable identity: useQuizSession closes over this exam to build items and to
  // score outcome(), so it must be the same object for the life of the screen.
  const exam = useMemo(() => mobileForm(EXAMS[examId]), [examId])

  const session = useQuizSession(exam, store.get(examId), EXAM_CFG, {
    // Exam mode never grades in-session (no gradePractice/gradeMulti/gradePbq
    // calls below), so this fires only if that ever changes. Wired for parity.
    onResult: (topic, frac, questionId) => store.recordResult(examId, topic, frac, questionId),
    onSeen: (ids) => store.markSeen(examId, ids),
  })

  const [paletteOpen, setPaletteOpen] = useState(false)
  const finishedRef = useRef(false)
  // Lets one navigation action through the quit guard below. Without it the
  // re-dispatched back action hits the same listener, gets prevented again, and
  // the exam becomes impossible to leave.
  const leavingRef = useRef(false)

  // Completion (End & score, or the timer hitting zero): record once, then leave.
  // Same order and payloads as the web's Quiz screen.
  useEffect(() => {
    if (!session.finished || finishedRef.current) return
    finishedRef.current = true
    setPaletteOpen(false)
    const outcome = session.outcome()
    if (outcome.mode === "exam") {
      // ONE batched write. Per-answer writes would re-serialize the whole
      // progress blob to storage 70 times at the end of a form.
      store.recordAnswers(
        examId,
        outcome.review.map((r) =>
          r.kind === "mc"
            ? { topic: r.q.t, frac: r.ok ? 1 : 0, questionId: r.q.id }
            : { topic: r.p.t, frac: r.frac },
        ),
      )
      store.recordExam(examId, {
        date: todayISO(),
        scaled: outcome.scaled,
        pct: Math.round(outcome.pct * 100),
      })
      store.logSession(examId, {
        date: todayISO(),
        mode: "exam",
        n: outcome.review.length,
        correct: outcome.review.filter((r) => r.ok).length,
      })
    }
    navigation.replace("Results", { examId, outcome })
    // Keyed on the flip only, like the web. The closure captures the session
    // from the render that finished it, which is the one holding the answers.
  }, [session.finished])

  // Header back and Android hardware back both destroy a timed attempt, so they
  // ask first. The replace to Results is exempt: finishedRef is already set.
  useEffect(() => {
    const unsub = navigation.addListener("beforeRemove", (e) => {
      if (finishedRef.current || leavingRef.current) return
      e.preventDefault()
      Alert.alert("Quit the exam?", "This attempt will not be scored.", [
        { text: "Keep working", style: "cancel" },
        {
          text: "Quit",
          style: "destructive",
          onPress: () => {
            leavingRef.current = true
            navigation.dispatch(e.data.action)
          },
        },
      ])
    })
    return unsub
  }, [navigation])

  const confirmEnd = () => {
    const n = session.unansweredCount()
    Alert.alert(
      "End the exam?",
      n > 0
        ? `${n} ${n === 1 ? "question is" : "questions are"} unanswered or incomplete. End the exam anyway?`
        : `Your answers will be scored on the 100 to ${exam.scale.max} scale.`,
      [
        { text: "Keep working", style: "cancel" },
        { text: "End and score", onPress: () => session.finish() },
      ],
    )
  }

  const item = session.item
  if (!item) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>
          This bank has no questions to build an exam from yet. Try a drill instead.
        </Text>
      </View>
    )
  }

  const flagged = session.flags.has(session.idx)
  const last = session.idx === session.items.length - 1
  const remaining = Math.max(session.remaining, 0)

  return (
    <View style={styles.root}>
      <View style={styles.topBar}>
        <Text style={styles.counter} testID="qcount">
          Question {session.idx + 1} of {session.items.length}
          {item.kind === "pbq" &&
            ` · ${VENDOR_FORMATS[exam.vendor].itemSuffix[item.p.kind] ?? "PBQ"}`}
        </Text>
        <View style={styles.topActions}>
          <Pressable
            onPress={session.toggleFlag}
            testID="flag-btn"
            hitSlop={8}
            accessibilityRole="button"
            accessibilityState={{ selected: flagged }}
            accessibilityLabel={flagged ? "Remove review flag" : "Flag for review"}
            style={({ pressed }) => [styles.flag, flagged && styles.flagOn, pressed && { opacity: 0.6 }]}
          >
            <Text style={[styles.flagText, flagged && styles.flagTextOn]}>⚑</Text>
          </Pressable>
          <View style={[styles.timer, remaining < WARN_SECONDS && styles.timerWarn]}>
            <Text
              style={[styles.timerText, remaining < WARN_SECONDS && styles.timerTextWarn]}
              testID="timer"
              accessibilityLabel={`${Math.ceil(remaining / 60)} minutes remaining`}
            >
              {fmtTime(remaining)}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        testID="qcard"
      >
        {item.kind === "mc" ? (
          <MCView exam={exam} session={session} item={item} />
        ) : (
          <PBQView exam={exam} session={session} item={item} />
        )}
      </ScrollView>

      <View style={styles.navBar} testID="quiz-nav">
        <View style={styles.navSide}>
          <AppButton
            label="Previous"
            variant="ghost"
            disabled={session.idx === 0}
            onPress={() => session.nav(-1)}
            testID="prev"
          />
        </View>
        <Pressable
          onPress={() => setPaletteOpen(true)}
          testID="open-palette"
          accessibilityRole="button"
          accessibilityLabel="Open the question list"
          style={({ pressed }) => [styles.paletteBtn, pressed && { opacity: 0.6 }]}
        >
          <Text style={styles.paletteBtnText}>All</Text>
        </Pressable>
        <View style={styles.navSide}>
          {last ? (
            <AppButton label="End exam" onPress={confirmEnd} testID="end-exam" />
          ) : (
            <AppButton label="Next" onPress={() => session.nav(1)} testID="next" />
          )}
        </View>
      </View>

      <Modal
        visible={paletteOpen}
        animationType="slide"
        transparent
        onRequestClose={() => setPaletteOpen(false)}
      >
        <View style={styles.sheetBackdrop}>
          <View style={styles.sheet}>
            <Text style={styles.sheetTitle}>All questions</Text>
            <Text style={styles.sheetHint}>
              Amber is answered, blue is flagged for review. Tap any number to jump to it.
            </Text>
            <ScrollView contentContainerStyle={styles.paletteGrid} testID="palette">
              {session.items.map((it, i) => {
                const a = session.answers[i]
                const answered =
                  it.kind === "mc"
                    ? !mcAnswerBlank(a as number | number[] | undefined)
                    : a !== undefined && !pbqAnswerBlank(it.p, a as PBQAnswer)
                return (
                  <Pressable
                    key={i}
                    testID={`palette-${i}`}
                    accessibilityRole="button"
                    accessibilityLabel={`Question ${i + 1}${answered ? ", answered" : ", not answered"}${
                      session.flags.has(i) ? ", flagged" : ""
                    }`}
                    onPress={() => {
                      session.jump(i)
                      setPaletteOpen(false)
                    }}
                    style={({ pressed }) => [
                      styles.cell,
                      answered && styles.cellAnswered,
                      session.flags.has(i) && styles.cellFlagged,
                      i === session.idx && styles.cellCurrent,
                      pressed && { opacity: 0.6 },
                    ]}
                  >
                    <Text
                      style={[
                        styles.cellText,
                        answered && styles.cellTextAnswered,
                        session.flags.has(i) && styles.cellTextFlagged,
                      ]}
                    >
                      {i + 1}
                    </Text>
                  </Pressable>
                )
              })}
            </ScrollView>
            <Text style={styles.sheetHint} testID="palette-unanswered">
              {session.unansweredCount() === 0
                ? "Every question has an answer."
                : `${session.unansweredCount()} still unanswered or incomplete.`}
            </Text>
            <View style={styles.sheetActions}>
              <AppButton label="Keep working" variant="ghost" onPress={() => setPaletteOpen(false)} />
              <AppButton
                label="End exam and score"
                onPress={() => {
                  setPaletteOpen(false)
                  confirmEnd()
                }}
                testID="end-exam-palette"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

/* ================================ multiple choice ================================ */

function MCView({
  exam,
  session,
  item,
}: {
  exam: ExamDef
  session: QuizSession
  item: Extract<QuizItem, { kind: "mc" }>
}) {
  const q = item.q
  const multi = !!q.as
  const raw = session.answers[session.idx] as number | number[] | undefined
  const selected = multi ? new Set((raw as number[] | undefined) ?? []) : null
  const isSelected = (oi: number) => (selected ? selected.has(oi) : oi === raw)
  const need = q.as?.length ?? 1

  return (
    <View>
      <Text style={styles.eyebrow}>
        {exam.domains[q.d]} · {exam.videos[q.t].n}
      </Text>
      {multi && (
        <View style={styles.badge} testID="choose-n">
          <Text style={styles.badgeText}>Choose {CHOOSE_WORDS[need] ?? need}</Text>
        </View>
      )}
      <Text style={styles.stem} testID="qtext">
        {q.x}
      </Text>
      <View style={styles.options}>
        {item.optOrder.map((oi, pos) => {
          const on = isSelected(oi)
          return (
            <Pressable
              key={oi}
              testID="option"
              accessibilityRole={multi ? "checkbox" : "radio"}
              accessibilityState={{ checked: on }}
              accessibilityLabel={q.o[oi]}
              // Exam mode: gradePractice records the choice without grading it,
              // toggleMulti builds the set. Neither reveals anything.
              onPress={() => (multi ? session.toggleMulti(oi) : session.gradePractice(oi))}
              style={({ pressed }) => [styles.option, on && styles.optionOn, pressed && { opacity: 0.75 }]}
            >
              <View style={[styles.letter, multi && styles.letterSquare, on && styles.letterOn]}>
                <Text style={[styles.letterText, on && styles.letterTextOn]}>{LETTERS[pos]}</Text>
              </View>
              <Text style={styles.optionText}>{q.o[oi]}</Text>
            </Pressable>
          )
        })}
      </View>
      {multi && (
        <Text style={styles.help}>
          {selected!.size} of {need} selected. Tap a selected answer to clear it.
        </Text>
      )}
    </View>
  )
}

/* ============================ performance-based questions ============================ */

function PBQView({
  exam,
  session,
  item,
}: {
  exam: ExamDef
  session: QuizSession
  item: Extract<QuizItem, { kind: "pbq" }>
}) {
  const p = item.p
  const fmt = VENDOR_FORMATS[exam.vendor]

  return (
    <View>
      <View style={[styles.badge, styles.badgeLead]}>
        <Text style={styles.badgeText}>{fmt.itemBadge[p.kind] ?? "Performance-Based Question"}</Text>
      </View>
      <Text style={styles.eyebrow}>{exam.domains[exam.videos[p.t].d]}</Text>
      <Text style={styles.stem}>{p.title}</Text>
      <Text style={styles.scenario}>{p.scen}</Text>

      {/* key={session.idx} for the same reason the web keys its PBQ views: any
          state held inside one must not outlive its question. Only the terminal
          keeps local state here (draft + log); the rest are driven entirely by
          session.answers, so they cannot bleed forward. The key covers all of
          them so adding local state later stays safe. */}
      {p.kind === "match" && <MatchView key={session.idx} p={p} session={session} choiceOrder={item.choiceOrder} />}
      {p.kind === "order" && <OrderView key={session.idx} p={p} session={session} />}
      {p.kind === "terminal" && <TerminalView key={session.idx} p={p} session={session} />}
      {p.kind === "config" && <ConfigView key={session.idx} p={p} session={session} />}
      {p.kind === "hotspot" && <HotspotView key={session.idx} p={p} session={session} />}
    </View>
  )
}

function MatchView({
  p,
  session,
  choiceOrder,
}: {
  p: PBQMatch
  session: QuizSession
  choiceOrder?: number[]
}) {
  const ans = session.answers[session.idx] as number[]
  // Session-shuffled: the authored choice order mirrors the answer key.
  const order = choiceOrder ?? p.choices.map((_, ci) => ci)

  return (
    <View style={styles.pbqBody}>
      {p.items.map((row, i) => (
        <View key={i} style={styles.matchRow}>
          <Text style={styles.matchLabel}>{row.l}</Text>
          <View style={styles.chips}>
            {order.map((ci) => {
              const on = ans[i] === ci
              return (
                <Pressable
                  key={ci}
                  testID="match-choice"
                  accessibilityRole="radio"
                  accessibilityState={{ checked: on }}
                  accessibilityLabel={`${row.l}: ${p.choices[ci]}`}
                  // Tapping the current pick clears it, so a row can go back to
                  // unanswered and the palette stops calling this question done.
                  onPress={() => session.setMatch(i, on ? -1 : ci)}
                  style={({ pressed }) => [styles.chip, on && styles.chipOn, pressed && { opacity: 0.7 }]}
                >
                  <Text style={[styles.chipText, on && styles.chipTextOn]}>{p.choices[ci]}</Text>
                </Pressable>
              )
            })}
          </View>
        </View>
      ))}
    </View>
  )
}

function OrderView({ p, session }: { p: PBQOrder; session: QuizSession }) {
  const ord = session.answers[session.idx] as number[]
  return (
    <View style={styles.pbqBody}>
      <Text style={styles.help}>Put the steps in order using the arrows.</Text>
      {ord.map((si, pos) => (
        <View key={si} style={styles.orderRow} testID="order-row">
          <Text style={styles.orderNum}>{pos + 1}</Text>
          <Text style={styles.orderText}>{p.steps[si]}</Text>
          <View style={styles.orderBtns}>
            <Pressable
              onPress={() => session.moveStep(pos, -1)}
              disabled={pos === 0}
              testID="order-up"
              accessibilityRole="button"
              accessibilityLabel={`Move up: ${p.steps[si]}`}
              style={({ pressed }) => [styles.stepBtn, pos === 0 && styles.stepBtnOff, pressed && { opacity: 0.6 }]}
            >
              <Text style={styles.stepBtnText}>↑</Text>
            </Pressable>
            <Pressable
              onPress={() => session.moveStep(pos, 1)}
              disabled={pos === ord.length - 1}
              testID="order-down"
              accessibilityRole="button"
              accessibilityLabel={`Move down: ${p.steps[si]}`}
              style={({ pressed }) => [
                styles.stepBtn,
                pos === ord.length - 1 && styles.stepBtnOff,
                pressed && { opacity: 0.6 },
              ]}
            >
              <Text style={styles.stepBtnText}>↓</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  )
}

function TerminalView({ p, session }: { p: PBQTerminal; session: QuizSession }) {
  const answers = session.answers[session.idx] as string[]
  const [draft, setDraft] = useState("")
  const [log, setLog] = useState<{ cmd: string; out: string; ok: boolean }[]>([])

  const done = p.tasks.map((task, i) => commandMatches(answers[i] ?? "", task.accept))
  const active = done.indexOf(false)

  const submit = () => {
    if (!draft.trim() || active === -1) return
    const task = p.tasks[active]
    const ok = commandMatches(draft, task.accept)
    setLog((l) => [
      ...l,
      { cmd: draft, out: ok ? task.output : "The command ran, but it does not complete the current objective.", ok },
    ])
    if (ok) session.setTerminal(active, draft)
    setDraft("")
  }

  return (
    <View style={styles.pbqBody}>
      <View style={styles.taskList}>
        {p.tasks.map((task, i) => (
          <Text key={i} style={[styles.task, done[i] && styles.taskDone]}>
            {done[i] ? "✓ " : i === active ? "› " : "  "}
            {task.prompt}
          </Text>
        ))}
      </View>
      <View style={styles.screen} testID="terminal-screen">
        <Text style={styles.screenHint}>Simulated terminal. Complete the objectives above in order.</Text>
        {log.map((entry, i) => (
          <View key={i} style={{ marginTop: space.sm }}>
            <Text style={styles.screenCmd}>
              {p.host} {entry.cmd}
            </Text>
            <Text style={entry.ok ? styles.screenOut : styles.screenErr}>{entry.out}</Text>
          </View>
        ))}
      </View>
      <View style={styles.promptRow}>
        <Text style={styles.promptHost}>{p.host}</Text>
        <TextInput
          value={draft}
          onChangeText={setDraft}
          onSubmitEditing={submit}
          editable={active !== -1}
          placeholder={active === -1 ? "All objectives complete" : "Type a command"}
          placeholderTextColor={colors.muted}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="send"
          accessibilityLabel="Terminal command input"
          testID="terminal-input"
          style={styles.promptInput}
        />
      </View>
    </View>
  )
}

function ConfigView({ p, session }: { p: PBQConfig; session: QuizSession }) {
  const values = session.answers[session.idx] as (number | boolean | string)[]

  return (
    <View style={styles.pbqBody} testID="config-panel">
      <Text style={styles.panelTitle}>{p.panel}</Text>
      {p.fields.map((f, i) => (
        <View key={f.id} style={styles.field}>
          <Text style={styles.fieldLabel}>{f.label}</Text>
          {f.note ? <Text style={styles.fieldNote}>{f.note}</Text> : null}
          {f.type === "select" && (
            <View style={styles.chips}>
              {f.options!.map((o, oi) => {
                const on = values[i] === oi
                return (
                  <Pressable
                    key={oi}
                    testID="config-select"
                    accessibilityRole="radio"
                    accessibilityState={{ checked: on }}
                    accessibilityLabel={`${f.label}: ${o}`}
                    onPress={() => session.setConfigField(i, on ? -1 : oi)}
                    style={({ pressed }) => [styles.chip, on && styles.chipOn, pressed && { opacity: 0.7 }]}
                  >
                    <Text style={[styles.chipText, on && styles.chipTextOn]}>{o}</Text>
                  </Pressable>
                )
              })}
            </View>
          )}
          {f.type === "toggle" && (
            <Switch
              value={values[i] as boolean}
              onValueChange={(v) => session.setConfigField(i, v)}
              testID="config-toggle"
              accessibilityLabel={f.label}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.text}
            />
          )}
          {f.type === "text" && (
            <TextInput
              value={values[i] as string}
              onChangeText={(v) => session.setConfigField(i, v)}
              autoCapitalize="none"
              autoCorrect={false}
              accessibilityLabel={f.label}
              testID="config-text"
              style={styles.fieldInput}
            />
          )}
        </View>
      ))}
    </View>
  )
}

/** Short type tag drawn inside each node box; the full label lives in the list below. */
const NODE_TAG: Record<HotspotIcon, string> = {
  router: "RTR",
  switch: "SW",
  firewall: "FW",
  ap: "AP",
  pc: "PC",
  server: "SRV",
  printer: "PRN",
  cloud: "NET",
  phone: "TEL",
}

function HotspotView({ p, session }: { p: PBQHotspot; session: QuizSession }) {
  const selected = session.answers[session.idx] as string[]
  const max = p.maxSelect ?? p.targets.length
  const nodeById = Object.fromEntries(p.nodes.map((n) => [n.id, n]))

  return (
    <View style={styles.pbqBody}>
      <Text style={styles.prompt}>{p.prompt}</Text>
      <Text style={styles.help}>
        {max === 1 ? "Select one device" : `Select up to ${max} devices`}. Tap the diagram or the list
        below. Tap again to deselect.
      </Text>

      {/* Device names are far wider than a node box at this scale, so the boxes
          carry a type tag and a number, and the numbered list underneath carries
          the names. Both hit the same toggle. */}
      <View style={styles.diagram}>
        <Svg viewBox="0 0 100 62" width="100%" height="100%" testID="hotspot-diagram">
          {p.edges.map(([a, b], i) => (
            <Line
              key={i}
              x1={nodeById[a].x}
              y1={nodeById[a].y}
              x2={nodeById[b].x}
              y2={nodeById[b].y}
              stroke={colors.border}
              strokeWidth={0.7}
            />
          ))}
          {p.nodes.map((n, ni) => {
            const on = selected.includes(n.id)
            const stroke = on ? colors.primary : colors.border
            return (
              <G key={n.id} onPress={() => session.toggleHotspot(n.id, max)}>
                <Rect
                  x={n.x - 8}
                  y={n.y - 7}
                  width={16}
                  height={14}
                  rx={1.5}
                  fill={on ? colors.cardRaised : colors.card}
                  stroke={stroke}
                  strokeWidth={on ? 1.4 : 0.7}
                />
                <SvgText
                  x={n.x}
                  y={n.y - 1.2}
                  textAnchor="middle"
                  fontSize={3.4}
                  fontWeight="bold"
                  fill={on ? colors.primary : colors.muted}
                >
                  {NODE_TAG[n.icon]}
                </SvgText>
                <SvgText x={n.x} y={n.y + 4.2} textAnchor="middle" fontSize={3.2} fill={colors.text}>
                  {ni + 1}
                </SvgText>
              </G>
            )
          })}
        </Svg>
      </View>

      {p.nodes.map((n, ni) => {
        const on = selected.includes(n.id)
        return (
          <Pressable
            key={n.id}
            testID={`hotspot-${n.id}`}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: on }}
            accessibilityLabel={`${n.label}${n.sub ? `, ${n.sub}` : ""}`}
            onPress={() => session.toggleHotspot(n.id, max)}
            style={({ pressed }) => [styles.nodeRow, on && styles.nodeRowOn, pressed && { opacity: 0.7 }]}
          >
            <Text style={[styles.nodeNum, on && styles.nodeNumOn]}>{ni + 1}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.nodeLabel}>{n.label}</Text>
              {n.sub ? <Text style={styles.nodeSub}>{n.sub}</Text> : null}
            </View>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  empty: { flex: 1, justifyContent: "center", padding: space.lg },
  emptyText: { color: colors.muted, fontSize: 15, lineHeight: 22, textAlign: "center" },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: space.lg,
    paddingBottom: space.sm,
    gap: space.sm,
  },
  counter: { color: colors.muted, fontSize: 13, flexShrink: 1, fontVariant: ["tabular-nums"] },
  topActions: { flexDirection: "row", alignItems: "center", gap: space.sm },
  flag: {
    width: 40,
    height: 36,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  flagOn: { borderColor: colors.primary, backgroundColor: colors.cardRaised },
  flagText: { color: colors.muted, fontSize: 16 },
  flagTextOn: { color: colors.primary },
  timer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: space.sm,
    height: 36,
    justifyContent: "center",
  },
  timerWarn: { borderColor: colors.danger, backgroundColor: colors.dangerBg },
  timerText: { color: colors.text, fontSize: 17, fontWeight: "700", fontVariant: ["tabular-nums"] },
  timerTextWarn: { color: colors.danger },

  content: { padding: space.lg, paddingTop: 0, paddingBottom: space.xl },
  eyebrow: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  // A View, not a styled Text: Android draws a Text background as a flat span
  // and ignores the corner radius.
  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    paddingHorizontal: space.xs,
    paddingVertical: 3,
    marginTop: space.sm,
  },
  badgeLead: { marginTop: 0, marginBottom: space.sm },
  badgeText: {
    color: colors.primaryText,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  stem: { color: colors.text, fontSize: 19, fontWeight: "600", lineHeight: 27, marginTop: space.sm },
  options: { gap: space.sm, marginTop: space.md },
  option: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: space.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: space.md,
  },
  optionOn: { borderColor: colors.primary, backgroundColor: colors.cardRaised },
  optionText: { color: colors.text, fontSize: 15, lineHeight: 21, flex: 1 },
  letter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  letterSquare: { borderRadius: radius.sm },
  letterOn: { borderColor: colors.primary, backgroundColor: colors.primary },
  letterText: { color: colors.muted, fontSize: 12, fontWeight: "700" },
  letterTextOn: { color: colors.primaryText },
  help: { color: colors.muted, fontSize: 13, lineHeight: 19, marginTop: space.sm },

  scenario: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: space.sm,
    padding: space.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  pbqBody: { marginTop: space.md, gap: space.sm },
  prompt: { color: colors.text, fontSize: 15, fontWeight: "600", lineHeight: 22 },

  matchRow: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: space.md,
    gap: space.sm,
  },
  matchLabel: { color: colors.text, fontSize: 15, fontWeight: "600", lineHeight: 21 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: space.xs },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.cardRaised,
    borderRadius: 999,
    paddingHorizontal: space.sm,
    paddingVertical: 8,
  },
  chipOn: { borderColor: colors.primary, backgroundColor: colors.primary },
  chipText: { color: colors.text, fontSize: 13 },
  chipTextOn: { color: colors.primaryText, fontWeight: "700" },

  orderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: space.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: space.sm,
  },
  orderNum: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: "700",
    minWidth: 18,
    textAlign: "center",
    fontVariant: ["tabular-nums"],
  },
  orderText: { color: colors.text, fontSize: 14, lineHeight: 20, flex: 1 },
  orderBtns: { flexDirection: "row", gap: space.xs },
  stepBtn: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  stepBtnOff: { opacity: 0.35 },
  stepBtnText: { color: colors.text, fontSize: 16 },

  taskList: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: space.md,
    gap: space.xs,
  },
  task: { color: colors.text, fontSize: 14, lineHeight: 20 },
  taskDone: { color: colors.muted, textDecorationLine: "line-through" },
  screen: {
    backgroundColor: "#0a0f1a",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: space.md,
    minHeight: 120,
  },
  screenHint: { color: colors.muted, fontSize: 12, lineHeight: 18 },
  screenCmd: { color: colors.success, fontSize: 12, lineHeight: 18 },
  screenOut: { color: colors.text, fontSize: 12, lineHeight: 18 },
  screenErr: { color: colors.primary, fontSize: 12, lineHeight: 18 },
  promptRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: space.xs,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    paddingHorizontal: space.sm,
  },
  promptHost: { color: colors.success, fontSize: 12 },
  promptInput: { flex: 1, color: colors.text, fontSize: 13, paddingVertical: space.sm },

  panelTitle: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  field: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: space.md,
    gap: space.sm,
  },
  fieldLabel: { color: colors.text, fontSize: 15, fontWeight: "600" },
  fieldNote: { color: colors.muted, fontSize: 13, lineHeight: 19, marginTop: -4 },
  fieldInput: {
    color: colors.text,
    fontSize: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.cardRaised,
    borderRadius: radius.sm,
    paddingHorizontal: space.sm,
    paddingVertical: space.sm,
  },

  diagram: {
    aspectRatio: 100 / 62,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    overflow: "hidden",
  },
  nodeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: space.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: space.sm,
  },
  nodeRowOn: { borderColor: colors.primary, backgroundColor: colors.cardRaised },
  nodeNum: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "700",
    minWidth: 20,
    textAlign: "center",
    fontVariant: ["tabular-nums"],
  },
  nodeNumOn: { color: colors.primary },
  nodeLabel: { color: colors.text, fontSize: 15 },
  nodeSub: { color: colors.muted, fontSize: 12, marginTop: 2 },

  navBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: space.sm,
    paddingHorizontal: space.lg,
    paddingTop: space.sm,
    paddingBottom: space.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  navSide: { flex: 1 },
  paletteBtn: {
    width: 52,
    height: 48,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  paletteBtnText: { color: colors.text, fontSize: 14, fontWeight: "600" },

  sheetBackdrop: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.6)" },
  sheet: {
    maxHeight: "85%",
    backgroundColor: colors.bg,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: space.lg,
    gap: space.sm,
  },
  sheetTitle: { color: colors.text, fontSize: 18, fontWeight: "700" },
  sheetHint: { color: colors.muted, fontSize: 13, lineHeight: 19 },
  sheetActions: { flexDirection: "row", gap: space.sm, marginTop: space.xs },
  paletteGrid: { flexDirection: "row", flexWrap: "wrap", gap: space.xs, paddingVertical: space.xs },
  cell: {
    width: 44,
    height: 44,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  cellAnswered: { borderColor: colors.primary, backgroundColor: colors.cardRaised },
  cellFlagged: { borderColor: "#6aa9e0" },
  cellCurrent: { borderWidth: 2, borderColor: colors.text },
  cellText: { color: colors.muted, fontSize: 13, fontVariant: ["tabular-nums"] },
  cellTextAnswered: { color: colors.primary, fontWeight: "700" },
  cellTextFlagged: { color: "#6aa9e0" },
})
