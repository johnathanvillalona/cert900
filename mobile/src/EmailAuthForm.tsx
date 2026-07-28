import { useEffect, useState } from "react"
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { authClient, signIn } from "./auth"
import { API_BASE } from "./config"
import { AppButton } from "./ui"
import { colors, radius, space } from "./theme"

/**
 * Whether this deploy offers email/password at all.
 *
 * The server only enables it when transactional mail is configured, because
 * without a delivered reset link a forgotten password is a permanent lockout
 * (see worker/mail.ts). Asking rather than assuming keeps the app from showing
 * a form that would 400.
 */
export function useEmailAuthEnabled(): boolean {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    let live = true
    fetch(`${API_BASE}/api/config`)
      .then((r) => (r.ok ? r.json() : { emailAuth: false }))
      .then((c) => live && setEnabled(Boolean(c.emailAuth)))
      .catch(() => {
        /* offline: social sign-in stays the only path */
      })
    return () => {
      live = false
    }
  }, [])
  return enabled
}

type Mode = "sign-in" | "sign-up"

export function EmailAuthForm({ disabled }: { disabled?: boolean }) {
  const [mode, setMode] = useState<Mode>("sign-in")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [busy, setBusy] = useState(false)

  const submit = async () => {
    if (!email.trim() || password.length < 8) {
      Alert.alert("Check the form", "Enter your email and a password of at least 8 characters.")
      return
    }
    setBusy(true)
    try {
      const res =
        mode === "sign-up"
          ? await authClient.signUp.email({ email: email.trim(), password, name: email.split("@")[0] })
          : await signIn.email({ email: email.trim(), password })
      if (res?.error) {
        Alert.alert(
          mode === "sign-up" ? "Couldn't create the account" : "Couldn't sign in",
          res.error.message ?? "Check the address and password and try again.",
        )
      }
    } catch {
      Alert.alert("Something went wrong", "Check your connection and try again.")
    } finally {
      setBusy(false)
    }
  }

  const forgot = async () => {
    if (!email.trim()) {
      Alert.alert("Enter your email first", "Type the address you signed up with, then tap again.")
      return
    }
    setBusy(true)
    try {
      await authClient.requestPasswordReset({ email: email.trim(), redirectTo: "/" })
    } catch {
      /* fall through to the same message: see below */
    } finally {
      setBusy(false)
    }
    // Deliberately identical whatever happened. Confirming which addresses have
    // accounts would turn this button into an enumeration oracle.
    Alert.alert("Check your email", "If that address has an account, a reset link is on its way.")
  }

  return (
    <View style={styles.wrap}>
      <TextInput
        style={styles.input}
        placeholder="you@example.com"
        placeholderTextColor={colors.muted}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        accessibilityLabel="Email address"
        value={email}
        onChangeText={setEmail}
        editable={!busy && !disabled}
      />
      <TextInput
        style={styles.input}
        placeholder={mode === "sign-up" ? "Password (8 characters or more)" : "Password"}
        placeholderTextColor={colors.muted}
        secureTextEntry
        autoCapitalize="none"
        autoComplete={mode === "sign-up" ? "new-password" : "current-password"}
        accessibilityLabel="Password"
        value={password}
        onChangeText={setPassword}
        editable={!busy && !disabled}
      />
      <AppButton
        label={mode === "sign-up" ? "Create account" : "Sign in with email"}
        onPress={() => void submit()}
        loading={busy}
        disabled={busy || disabled}
        testID="email-auth-submit"
      />
      <View style={styles.links}>
        <Pressable onPress={() => setMode(mode === "sign-up" ? "sign-in" : "sign-up")}>
          <Text style={styles.link}>{mode === "sign-up" ? "I have an account" : "Create an account"}</Text>
        </Pressable>
        <Pressable onPress={() => void forgot()} disabled={busy}>
          <Text style={styles.link}>Forgot password?</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: { gap: space.sm, marginTop: space.sm },
  input: {
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: space.md,
    paddingVertical: space.sm,
    color: colors.text,
    fontSize: 15,
  },
  links: { flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: space.sm },
  link: { color: colors.muted, fontSize: 12, textDecorationLine: "underline" },
})
