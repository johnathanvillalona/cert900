import { useEffect, useState } from "react"
import { Platform, StyleSheet } from "react-native"
import * as AppleAuthentication from "expo-apple-authentication"
import { radius } from "./theme"

/**
 * Apple's button and availability probe live here rather than in ui.tsx so the
 * native module stays out of the dependency graph of every screen that imports
 * the design system.
 */

/**
 * Whether this device can offer Sign in with Apple. Two gates, both needed:
 * the module is iOS-only (calling it elsewhere throws), and even on iOS
 * `isAvailableAsync` is false below iOS 13. Starts false so nothing flashes in
 * before the probe resolves, and stays false on Android forever.
 */
export function useAppleSignInAvailable(): boolean {
  const [available, setAvailable] = useState(false)
  useEffect(() => {
    if (Platform.OS !== "ios") return
    let active = true
    AppleAuthentication.isAvailableAsync()
      .then((ok) => {
        if (active) setAvailable(ok)
      })
      .catch(() => {
        /* treat a failed probe as unavailable; the Google button still works */
      })
    return () => {
      active = false
    }
  }, [])
  return available
}

/**
 * Apple's own rendered button. Apple rejects hand-drawn imitations, so the
 * styling knobs are deliberately limited to the ones they sanction: type,
 * colour scheme, corner radius and layout. WHITE reads correctly against our
 * dark slate card. Height matches AppButton so it sits level with the Google
 * button rather than looking like a lesser option (Guideline 4.8 asks for
 * equal prominence).
 */
export function AppleSignInButton({
  onPress,
  testID,
}: {
  onPress: () => void
  testID?: string
}) {
  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
      cornerRadius={radius.md}
      style={styles.button}
      onPress={onPress}
      testID={testID}
    />
  )
}

const styles = StyleSheet.create({
  // Apple's component draws its own background and radius; setting either here
  // is documented as unsupported.
  button: { height: 48, width: "100%" },
})
