import { createAuthClient } from "better-auth/react"
import { expoClient } from "@better-auth/expo/client"
import * as AppleAuthentication from "expo-apple-authentication"
import * as Crypto from "expo-crypto"
import * as SecureStore from "expo-secure-store"
import { API_BASE, APP_SCHEME } from "./config"

// Better Auth client for React Native. The Expo plugin persists the session in
// the device keychain (SecureStore) and handles the browser-based OAuth redirect
// back to the app's scheme. Same Better Auth version as the worker (1.6.x).
export const authClient = createAuthClient({
  baseURL: API_BASE,
  plugins: [
    expoClient({
      scheme: APP_SCHEME,
      storagePrefix: APP_SCHEME,
      storage: SecureStore,
    }),
  ],
})

export const { useSession, signIn, signOut, deleteUser } = authClient

/**
 * Whether the keychain holds a real session cookie, as opposed to the transient
 * OAuth state cookie the plugin also stores. Needed because `signIn.social`
 * resolves the same way whether the user completed the browser flow or dismissed
 * it: the plugin's hook does `if (result.type !== "success") return`, so a cancel
 * throws nothing and reports nothing.
 */
export function hasSessionCookie(): boolean {
  return (authClient.getCookie() ?? "").includes("session_token")
}

/**
 * Sign in with Apple, iOS only. Unlike Google this never opens a browser: iOS
 * hands us a signed identity token and we post it straight to the worker.
 * `@better-auth/expo`'s client branches on `options.body?.idToken !== undefined`
 * and skips its OAuth-proxy redirect handling entirely, so the whole
 * scheme/callback dance is bypassed.
 *
 * Returns "canceled" when the user dismisses the sheet; throws on real
 * failures, so callers can tell the two apart (unlike the Google path, where a
 * cancel is indistinguishable from success at the promise level).
 */
export async function signInWithApple(): Promise<"signed-in" | "canceled"> {
  // Apple echoes `request.nonce` into the token verbatim (verified: expo's
  // AppleAuthenticationRequest.swift assigns it unchanged, and Apple does not
  // hash it). So we hand Apple the SHA-256 and keep the raw value for the
  // server: Better Auth accepts a token nonce equal to sha256hex(sent nonce).
  // Hashing matters because the identity token is readable by anyone who
  // intercepts it; if the raw nonce were inside it, replaying the token would
  // be trivial.
  const rawNonce = Crypto.randomUUID()
  const hashedNonce = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    rawNonce,
    { encoding: Crypto.CryptoEncoding.HEX },
  )

  let credential: AppleAuthentication.AppleAuthenticationCredential
  try {
    credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
      nonce: hashedNonce,
    })
  } catch (err) {
    if ((err as { code?: string })?.code === "ERR_REQUEST_CANCELED") return "canceled"
    throw err
  }

  const token = credential.identityToken
  if (!token) throw new Error("Apple did not return an identity token")

  // Apple sends fullName ONLY on the very first authorization for this Apple ID
  // and app pair. Every later sign-in returns null, even after the user deletes
  // the account and signs up again, unless they revoke the app under Settings >
  // Apple Account > Sign in with Apple. So it has to be forwarded now or the
  // name is lost for good; Better Auth's apple getUserInfo reads exactly this
  // idToken.user.name shape to seed the profile.
  const { givenName, familyName } = credential.fullName ?? {}
  const name =
    givenName || familyName
      ? { firstName: givenName ?? undefined, lastName: familyName ?? undefined }
      : undefined

  const res = await authClient.signIn.social({
    provider: "apple",
    idToken: { token, nonce: rawNonce, ...(name ? { user: { name } } : {}) },
  })
  if (res.error) throw new Error(res.error.message ?? "Apple rejected the sign-in")
  return "signed-in"
}
