import { useState } from "react"
import { Pressable, StyleSheet, Text } from "react-native"
import { API_BASE } from "./config"
import { colors, space } from "./theme"

/**
 * Question reporting, the mobile half of the web's ReportButton.
 *
 * Testers asked for a way to give feedback from inside the app. The web has had
 * this since launch; mobile had nothing, so a wrong or unclear question on a
 * phone had no route back to us. Same `/api/report` endpoint, same anonymous
 * payload, same server-side rate limits (20/day/IP, 1k/day global).
 *
 * Unlike the web version this needs an absolute URL — the app is not served
 * from the API's origin.
 */
export async function reportQuestion(examId: string, ref: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/api/report`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ examId, ref }),
    })
    return res.ok
  } catch {
    return false
  }
}

/** Small "report this question" link for feedback panels and the miss list. */
export function ReportLink({ examId, refId }: { examId: string; refId: string }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle")

  const label =
    state === "sent"
      ? "Reported. Thank you"
      : state === "sending"
        ? "Sending"
        : state === "failed"
          ? "Could not send. Tap to retry"
          : "Report this question"

  return (
    <Pressable
      disabled={state === "sending" || state === "sent"}
      testID="report-question"
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={async () => {
        setState("sending")
        setState((await reportQuestion(examId, refId)) ? "sent" : "failed")
      }}
      style={({ pressed }) => [styles.row, pressed && { opacity: 0.6 }]}
    >
      <Text style={[styles.text, state === "sent" && styles.sent]}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  row: { marginTop: space.sm, alignSelf: "flex-start" },
  text: { color: colors.muted, fontSize: 12, textDecorationLine: "underline" },
  sent: { color: colors.success, textDecorationLine: "none" },
})
