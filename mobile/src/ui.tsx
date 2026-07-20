import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native"
import { colors, radius, space } from "./theme"
import { DialMark } from "./mark"
import { useProgress, type SyncStatus } from "./progress-store"

type Tone = "muted" | "success" | "danger" | "primary"

/** How each sync state reads to the user. "stale" is a call to action, not an error code. */
export const SYNC_LABEL: Record<SyncStatus, { text: string; tone: Tone }> = {
  local: { text: "On this device", tone: "muted" },
  syncing: { text: "Syncing", tone: "primary" },
  synced: { text: "Synced", tone: "success" },
  error: { text: "Sync error", tone: "danger" },
  stale: { text: "Sign in again", tone: "danger" },
}

/** Mark + wordmark, used as the Exams screen's navigation header title. */
export function BrandTitle() {
  return (
    <View style={styles.brand}>
      <DialMark size={24} />
      <Text style={styles.wordmark}>
        cert<Text style={{ color: colors.primary }}>900</Text>
      </Text>
    </View>
  )
}

/**
 * Exam-list header action: sync state doubling as the way into Account. Sync is
 * the only account-shaped thing the exam list has any business showing, and it
 * keeps the auth prompt off the first screen.
 */
export function SyncHeaderButton({ onPress }: { onPress: () => void }) {
  const { syncStatus } = useProgress()
  const sync = SYNC_LABEL[syncStatus]
  return (
    <Pressable
      onPress={onPress}
      testID="nav-account"
      hitSlop={10}
      accessibilityRole="button"
      accessibilityLabel={`Account and sync settings. Progress: ${sync.text}`}
      style={({ pressed }) => [styles.headerAction, pressed && { opacity: 0.6 }]}
    >
      <Pill text={sync.text} tone={sync.tone} />
      <Text style={styles.headerActionText}>Account</Text>
    </Pressable>
  )
}

export function AppButton({
  label,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  testID,
}: {
  label: string
  onPress: () => void
  variant?: "primary" | "ghost"
  loading?: boolean
  disabled?: boolean
  testID?: string
}) {
  const isPrimary = variant === "primary"
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        styles.btn,
        isPrimary ? styles.primary : styles.ghost,
        (pressed || disabled) && { opacity: 0.7 },
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? colors.primaryText : colors.text} />
      ) : (
        <Text style={[styles.label, { color: isPrimary ? colors.primaryText : colors.text }]}>
          {label}
        </Text>
      )}
    </Pressable>
  )
}

export function Pill({ text, tone = "muted" }: { text: string; tone?: Tone }) {
  const c =
    tone === "success"
      ? colors.success
      : tone === "danger"
        ? colors.danger
        : tone === "primary"
          ? colors.primary
          : colors.muted
  return (
    <View style={[styles.pill, { borderColor: c }]}>
      <Text style={[styles.pillText, { color: c }]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  brand: { flexDirection: "row", alignItems: "center", gap: space.sm },
  headerAction: { flexDirection: "row", alignItems: "center", gap: space.sm },
  headerActionText: { color: colors.primary, fontSize: 15, fontWeight: "600" },
  wordmark: { fontSize: 20, fontWeight: "800", color: colors.text, letterSpacing: -0.5 },
  btn: {
    height: 48,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: space.lg,
  },
  primary: { backgroundColor: colors.primary },
  ghost: { backgroundColor: "transparent", borderWidth: 1, borderColor: colors.border },
  label: { fontSize: 16, fontWeight: "600" },
  pill: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: space.sm,
    paddingVertical: 3,
    alignSelf: "flex-start",
  },
  pillText: { fontSize: 11, fontWeight: "600", letterSpacing: 0.4 },
})
