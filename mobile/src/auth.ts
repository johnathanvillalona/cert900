import { createAuthClient } from "better-auth/react"
import { expoClient } from "@better-auth/expo/client"
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

export const { useSession, signIn, signOut } = authClient
