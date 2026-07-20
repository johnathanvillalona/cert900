import { betterAuth } from "better-auth"
import { expo } from "@better-auth/expo"
import { D1Dialect } from "kysely-d1"

// Native app deep-link scheme (see mobile/app.json). The mobile client signs in
// through this scheme's OAuth redirect, then authenticates the data API with the
// session cookie it captured (expoClient.getCookie()), which getSession reads
// exactly like a browser cookie.
const APP_SCHEME = "cert900"

export interface Env {
  DB: D1Database
  ASSETS: Fetcher
  BETTER_AUTH_SECRET: string
  BETTER_AUTH_URL: string
  GOOGLE_CLIENT_ID: string
  GOOGLE_CLIENT_SECRET: string
  // Social automation secrets; optional so the cron degrades gracefully.
  X_API_KEY?: string
  X_API_SECRET?: string
  X_ACCESS_TOKEN?: string
  X_ACCESS_SECRET?: string
  BSKY_IDENTIFIER?: string
  BSKY_APP_PASSWORD?: string
  REDDIT_CLIENT_ID?: string
  REDDIT_CLIENT_SECRET?: string
}

export function createAuth(env: Env) {
  const isLocal = env.BETTER_AUTH_URL.includes("localhost")
  // The native app must be a trusted origin so Google OAuth can redirect back
  // to its deep link. exp:// covers Expo Go during development only.
  const appOrigins = isLocal
    ? [`${APP_SCHEME}://`, `${APP_SCHEME}://*`, "exp://", "exp://*"]
    : [`${APP_SCHEME}://`, `${APP_SCHEME}://*`]
  return betterAuth({
    database: {
      dialect: new D1Dialect({ database: env.DB }),
      type: "sqlite",
    },
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    // expo(): rewrites the OAuth callback to the app's deep-link scheme so
    //   native Google sign-in can complete, and lets the app scheme be a
    //   trusted origin. The app then sends the captured session cookie on
    //   data-API calls.
    plugins: [expo()],
    socialProviders: {
      google: {
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      },
    },
    // Password auth is enabled ONLY for local integration testing (no email
    // delivery is configured, so there is no reset flow in production).
    emailAndPassword: {
      enabled: isLocal,
    },
    trustedOrigins: isLocal
      ? ["http://localhost:5173", "http://127.0.0.1:5173", ...appOrigins]
      : appOrigins,
    user: {
      deleteUser: {
        enabled: true,
      },
    },
    session: {
      /**
       * Better Auth refuses a "sensitive" action (delete-user) on a session
       * older than freshAge unless the request carries the account password,
       * and its default freshAge is 24h while sessions live 7 days. Google is
       * the only production provider, so those users have NO password to
       * offer: anyone who signed in yesterday could never delete their
       * account, and the UI reported only "Could not delete the account."
       *
       * 0 disables the freshness gate. Deleting still requires a valid
       * session cookie plus an explicit in-app confirmation, and account
       * deletion is a right we must not gate behind re-authentication we
       * cannot offer (Apple Guideline 5.1.1(v) tests exactly this).
       */
      freshAge: 0,
      cookieCache: {
        enabled: true,
        maxAge: 60 * 5,
      },
    },
  })
}

export type Auth = ReturnType<typeof createAuth>
