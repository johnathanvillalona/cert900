import { useState } from "react"
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native"
import { EXAMS, EXAM_ORDER } from "@/data/index"
import { authClient, signOut, useSession } from "../auth"
import { useProgress, type SyncStatus } from "../progress-store"
import { colors, radius, space } from "../theme"
import { AppButton, Pill } from "../ui"

const SYNC_LABEL: Record<SyncStatus, { text: string; tone: "muted" | "success" | "danger" | "primary" }> = {
  local: { text: "On this device", tone: "muted" },
  syncing: { text: "Syncing…", tone: "primary" },
  synced: { text: "Synced", tone: "success" },
  error: { text: "Sync error", tone: "danger" },
}

export function HomeScreen({ onStart }: { onStart: (examId: string) => void }) {
  const store = useProgress()
  const { data: session } = useSession()
  const [busy, setBusy] = useState(false)

  const signInGoogle = async () => {
    setBusy(true)
    try {
      await authClient.signIn.social({ provider: "google", callbackURL: "/" })
    } catch (e) {
      Alert.alert(
        "Sign-in didn't complete",
        "Couldn't finish Google sign-in. Your progress is still saved on this device; try again in a moment.",
      )
    } finally {
      setBusy(false)
    }
  }

  const sync = SYNC_LABEL[store.syncStatus]

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <Text style={styles.wordmark}>
          cert<Text style={{ color: colors.primary }}>900</Text>
        </Text>
        <Pill text={sync.text} tone={sync.tone} />
      </View>
      <Text style={styles.tagline}>Practice CompTIA anywhere. PBQs and all.</Text>

      <View style={styles.authCard}>
        {session?.user ? (
          <>
            <Text style={styles.authLabel}>Signed in</Text>
            <Text style={styles.authEmail}>{session.user.email}</Text>
            <AppButton label="Sign out" variant="ghost" onPress={() => signOut()} />
          </>
        ) : (
          <>
            <Text style={styles.authLabel}>Sync across devices</Text>
            <Text style={styles.authHint}>
              Optional. Sign in to pick up your web progress here and back to your desk.
            </Text>
            <AppButton label="Sign in with Google" onPress={signInGoogle} loading={busy} />
          </>
        )}
      </View>

      <Text style={styles.sectionLabel}>Choose an exam</Text>
      {EXAM_ORDER.map((id) => {
        const exam = EXAMS[id]
        const p = store.get(id)
        const answered = Object.values(p.topics).reduce((n, s) => n + s.t, 0)
        return (
          <View key={id} style={styles.examCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.examName}>
                {exam.cert} {exam.name}
              </Text>
              <Text style={styles.examMeta}>
                {exam.code} · {exam.questions.length} questions
                {answered > 0 ? ` · ${answered} answered` : ""}
              </Text>
            </View>
            <View style={styles.examAction}>
              <AppButton label="Practice" onPress={() => onStart(id)} />
            </View>
          </View>
        )
      })}

      <Text style={styles.footer}>
        A first look at the cert900 mobile app. Multiple-choice drills work offline today;
        PBQ simulations and full exam mode are on the roadmap.
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: { padding: space.lg, paddingBottom: space.xl, gap: space.md },
  headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  wordmark: { fontSize: 22, fontWeight: "800", color: colors.text, letterSpacing: -0.5 },
  tagline: { color: colors.muted, fontSize: 14, marginTop: -space.xs },
  authCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.md,
    gap: space.sm,
  },
  authLabel: { color: colors.text, fontSize: 15, fontWeight: "700" },
  authEmail: { color: colors.muted, fontSize: 14 },
  authHint: { color: colors.muted, fontSize: 13, lineHeight: 19 },
  sectionLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginTop: space.sm,
  },
  examCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.md,
    flexDirection: "row",
    alignItems: "center",
    gap: space.md,
  },
  examName: { color: colors.text, fontSize: 16, fontWeight: "700" },
  examMeta: { color: colors.muted, fontSize: 13, marginTop: 3 },
  examAction: { width: 120 },
  footer: { color: colors.muted, fontSize: 12, lineHeight: 18, marginTop: space.sm },
})
