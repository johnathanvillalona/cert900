import { useState } from "react"
import { Alert, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site"
import {
  authClient,
  deleteUser,
  hasSessionCookie,
  signInWithApple,
  signOut,
  useSession,
} from "../auth"
import { deleteCloud } from "../api"
import { AppleSignInButton, useAppleSignInAvailable } from "../apple-auth"
import { useProgress } from "../progress-store"
import { colors, radius, space } from "../theme"
import { AppButton, Pill, SYNC_LABEL } from "../ui"
import type { RootScreenProps } from "../navigation"

/**
 * Account, sync, legal, and deletion. Sign-in lives here rather than on the
 * exam list on purpose: an account is optional for every feature, and putting
 * the prompt on the first screen reads as a gate (Apple Guideline 4.8).
 * Deletion is two taps from the first screen, which is what reviewers check
 * for Guideline 5.1.1(v).
 */
export function AccountScreen(_props: RootScreenProps<"Account">) {
  const store = useProgress()
  const { data: session } = useSession()
  // Which provider is mid-flight, not a plain boolean: Apple's button cannot
  // render a spinner, so the two need to be told apart to avoid spinning the
  // Google button while the Apple sheet is up.
  const [busy, setBusy] = useState<"google" | "apple" | null>(null)
  const [deleting, setDeleting] = useState(false)
  const appleAvailable = useAppleSignInAvailable()

  const signInGoogle = async () => {
    if (busy) return
    setBusy("google")
    try {
      await authClient.signIn.social({ provider: "google", callbackURL: "/" })
      // Dismissing the browser tab resolves exactly like success, so the stored
      // session cookie is the only way to tell the two apart. Without this the
      // screen sits unchanged after a cancel and looks broken.
      if (!hasSessionCookie()) {
        Alert.alert(
          "Sign-in canceled",
          "You closed the Google window before it finished. Nothing changed, and your progress is still saved on this device.",
        )
      }
    } catch {
      Alert.alert(
        "Sign-in didn't complete",
        "Couldn't finish Google sign-in. Your progress is still saved on this device; try again in a moment.",
      )
    } finally {
      setBusy(null)
    }
  }

  const signInApple = async () => {
    if (busy) return
    setBusy("apple")
    try {
      // A dismissed sheet resolves as "canceled" and is left alone on purpose:
      // the user closed it deliberately, so an error dialog would be noise.
      await signInWithApple()
    } catch {
      Alert.alert(
        "Sign-in didn't complete",
        "Couldn't finish Apple sign-in. Your progress is still saved on this device; try again in a moment.",
      )
    } finally {
      setBusy(null)
    }
  }

  /** Offered after deletion and to signed-out users; never touches the cloud. */
  const confirmEraseDevice = () =>
    Alert.alert(
      "Erase progress on this device?",
      "Removes every answer, score, and review queue saved on this phone. If you have an account and sign back in, whatever was synced to it comes back.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Erase", style: "destructive", onPress: () => store.clearDevice() },
      ],
    )

  const runDelete = async () => {
    setDeleting(true)
    let cloudCleared = false
    try {
      // 1. Synced progress rows, while the session is still valid.
      await deleteCloud()
      cloudCleared = true
      // 2. The account itself.
      const res = await deleteUser()
      if (res?.error) {
        const expired = res.error.code === "SESSION_EXPIRED" || res.error.status === 401
        Alert.alert(
          expired ? "Sign in again to delete" : "Couldn't delete the account",
          expired
            ? "Your saved sign-in is no longer valid, so we couldn't confirm the account is yours. Sign out, sign back in, then delete from here."
            : `Your synced progress was cleared, but the account itself is still there. Try again, or email ${CONTACT_EMAIL}.`,
        )
        return
      }
      // 3. Mobile only, and required. The Expo plugin clears its SecureStore
      // session cache only for a URL containing "/sign-out". Skip this and the
      // cached session rehydrates on the next cold start, showing a signed-in
      // state for a user that no longer exists.
      try {
        await signOut()
      } catch {
        /* the cache is cleared before the request goes out, so this is cosmetic */
      }
      Alert.alert(
        "Account deleted",
        "Your account and everything synced to our servers are gone. Practice progress saved on this device is still here.",
        [
          { text: "Keep it", style: "cancel" },
          {
            text: "Also erase progress on this device",
            style: "destructive",
            onPress: () => store.clearDevice(),
          },
        ],
      )
    } catch {
      // Be honest about how far we got: if deleteCloud already resolved, the
      // synced progress is gone even though the account remains, and a blanket
      // "try again" would hide that.
      Alert.alert(
        "Couldn't delete the account",
        cloudCleared
          ? `Your synced progress was cleared, but the account itself is still there. Try again, or email ${CONTACT_EMAIL}.`
          : `Something went wrong reaching the server. Check your connection and try again, or email ${CONTACT_EMAIL}.`,
      )
    } finally {
      setDeleting(false)
    }
  }

  const confirmDelete = () =>
    Alert.alert(
      "Delete your account?",
      "Removes your account and all synced progress from our servers permanently. Progress saved on this device stays on this device.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete permanently", style: "destructive", onPress: () => void runDelete() },
      ],
    )

  const sync = SYNC_LABEL[store.syncStatus]

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.card}>
        {session?.user ? (
          <>
            <Text style={styles.label}>Signed in</Text>
            <Text style={styles.value}>{session.user.email}</Text>
            <View style={styles.statusRow}>
              <Pill text={sync.text} tone={sync.tone} />
            </View>
            {store.syncStatus === "stale" && (
              <Text style={styles.hint}>
                Your saved sign-in expired, so nothing has synced since. Answers are still safe on
                this device. Sign out and back in to resume syncing.
              </Text>
            )}
            <AppButton
              label="Sign out"
              variant="ghost"
              onPress={() => void signOut()}
              testID="sign-out"
            />
          </>
        ) : (
          <>
            <Text style={styles.label}>Optional. Sync progress across devices</Text>
            <Text style={styles.hint}>
              Everything works without an account. Sign in only if you want the progress from
              cert900.com on this phone, and this phone's progress back at your desk.
            </Text>
            {/* Apple sits first and at the same size as Google, which is what
                Guideline 4.8 means by an equally prominent private option. */}
            {appleAvailable && <AppleSignInButton onPress={signInApple} testID="sign-in-apple" />}
            <AppButton
              label="Sign in with Google"
              onPress={signInGoogle}
              loading={busy === "google"}
              disabled={busy !== null}
              testID="sign-in-google"
            />
          </>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Legal</Text>
        <LinkRow
          label="Privacy policy"
          testID="link-privacy"
          onPress={() => void Linking.openURL(`${SITE_URL}/privacy`)}
        />
        <LinkRow
          label="Terms of use"
          testID="link-terms"
          onPress={() => void Linking.openURL(`${SITE_URL}/terms`)}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Danger zone</Text>
        {session?.user ? (
          <>
            <Text style={styles.hint}>
              Deleting removes your account and all synced progress from our servers permanently.
              Progress saved on this device stays unless you erase it too.
            </Text>
            <AppButton
              label={deleting ? "Deleting" : "Delete account"}
              variant="ghost"
              loading={deleting}
              onPress={confirmDelete}
              testID="delete-account"
            />
          </>
        ) : (
          <>
            <Text style={styles.hint}>
              You are not signed in on this device. This clears the practice progress stored on this
              phone. If you have an account, signing back in restores whatever was synced to it.
            </Text>
            <AppButton
              label="Erase progress on this device"
              variant="ghost"
              onPress={confirmEraseDevice}
              testID="erase-device"
            />
          </>
        )}
      </View>
    </ScrollView>
  )
}

function LinkRow({
  label,
  onPress,
  testID,
}: {
  label: string
  onPress: () => void
  testID: string
}) {
  return (
    <Pressable
      onPress={onPress}
      testID={testID}
      accessibilityRole="link"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.linkRow, pressed && { opacity: 0.6 }]}
    >
      <Text style={styles.linkText}>{label}</Text>
      <Text style={styles.linkChevron}>›</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  content: { padding: space.lg, paddingBottom: space.xl, gap: space.md },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.md,
    gap: space.sm,
  },
  label: { color: colors.text, fontSize: 15, fontWeight: "700" },
  value: { color: colors.muted, fontSize: 14 },
  hint: { color: colors.muted, fontSize: 13, lineHeight: 19 },
  statusRow: { flexDirection: "row" },
  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: space.sm,
  },
  linkText: { color: colors.text, fontSize: 15 },
  linkChevron: { color: colors.muted, fontSize: 20, lineHeight: 20 },
})
