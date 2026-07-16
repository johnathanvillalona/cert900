import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native"
import { colors, radius, space } from "./theme"

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

export function Pill({
  text,
  tone = "muted",
}: {
  text: string
  tone?: "muted" | "success" | "danger" | "primary"
}) {
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
