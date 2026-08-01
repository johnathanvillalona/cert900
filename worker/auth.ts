import { betterAuth } from "better-auth"
import { expo } from "@better-auth/expo"
import { D1Dialect } from "kysely-d1"
import { mailEnabled, sendPasswordReset, sendVerification } from "./mail"

// Native app deep-link scheme (see mobile/app.json). The mobile client signs in
// through this scheme's OAuth redirect, then authenticates the data API with the
// session cookie it captured (expoClient.getCookie()), which getSession reads
// exactly like a browser cookie.
const APP_SCHEME = "cert900"

// iOS bundle id (mobile/app.json ios.bundleIdentifier). Apple mints native
// Sign in with Apple tokens with this as the audience, so it is what the apple
// provider validates `aud` against. Must stay in step with app.json.
const APP_BUNDLE_ID = "com.cert900.app"

export interface Env {
  DB: D1Database
  ASSETS: Fetcher
  BETTER_AUTH_SECRET: string
  BETTER_AUTH_URL: string
  GOOGLE_CLIENT_ID: string
  GOOGLE_CLIENT_SECRET: string
  /**
   * Comma-separated allowlist for the owner-only report triage at /admin.
   * Unset (the default) means nobody is an admin and /api/admin/* 404s for
   * everyone, which is the right behaviour for a fork or a local checkout.
   */
  ADMIN_EMAILS?: string
  /**
   * Transactional mail. `AUTH_EMAIL_FROM` plus ONE transport is what enables
   * email/password sign-in at all (see worker/mail.ts): without a working
   * reset, a forgotten password is a permanent lockout.
   *
   * `RESEND_API_KEY` (a wrangler secret) selects Resend; the `EMAIL` binding
   * selects Cloudflare Email Service, which needs the Workers Paid plan. All
   * optional, so a deploy without any of them still boots with Google-only
   * auth, exactly like the Apple secrets below.
   */
  EMAIL?: { send(msg: { to: string; from: { email: string; name?: string }; subject: string; html: string; text: string }): Promise<unknown> }
  RESEND_API_KEY?: string
  AUTH_EMAIL_FROM?: string
  // Sign in with Apple, native (iOS) only. Optional so a deploy without the
  // secrets still boots: the provider is simply not registered, exactly like
  // the social cron secrets.
  APPLE_CLIENT_ID?: string
  APPLE_CLIENT_SECRET?: string
  // Social automation secrets; optional so the cron degrades gracefully.
  //
  // The X_* secrets are gone from here because the posting path is gone: X
  // answered every request with `402 credits depleted` (the free tier can no
  // longer write). They still exist on the deployed Worker and can be dropped
  // with `npx wrangler secret delete X_API_KEY` and friends.
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
      /**
       * Apple is iOS-native ONLY, and deliberately not offered on the web.
       * Apple's web flow requests `responseMode: "form_post"`, so the callback
       * arrives as a cross-site POST. Better Auth's OAuth state cookie is
       * SameSite=Lax, which browsers do not send on a cross-site POST, so the
       * state cookie is missing on arrival and the sign-in fails. Wiring Apple
       * into the web app therefore needs a SameSite=None cookie carve-out;
       * do not "finish the job" by adding it to src/ without that.
       *
       * The native path skips all of it: the app gets an identity token from
       * iOS directly and posts it to /sign-in/social, so there is no redirect,
       * no state cookie, no Services ID and no return URL. Better Auth
       * verifies the token's signature against Apple's JWKS and its `aud`
       * against appBundleIdentifier below.
       */
      ...(env.APPLE_CLIENT_ID && env.APPLE_CLIENT_SECRET
        ? {
            apple: {
              clientId: env.APPLE_CLIENT_ID,
              clientSecret: env.APPLE_CLIENT_SECRET,
              appBundleIdentifier: APP_BUNDLE_ID,
            },
          }
        : {}),
    },
    /**
     * Email/password sign-in, gated on mail being configured rather than on
     * `isLocal`.
     *
     * The two were coupled before, which meant flipping password auth on in
     * production would ALSO have re-trusted the Expo Go and localhost origins
     * below. They are separate concerns and are now separate flags.
     *
     * The gate is mail, not an on/off switch, because the two are inseparable:
     * offering passwords without a delivered reset link locks out everyone who
     * forgets one. Locally there is no binding, so `isLocal` keeps password
     * auth available for integration tests without sending anything.
     */
    emailAndPassword: {
      enabled: isLocal || mailEnabled(env),
      sendResetPassword: async ({ user, url }) => {
        await sendPasswordReset(env, user.email, url)
      },
      // Verification is sent (below) but not required to sign in. Requiring it
      // would strand a tester behind a mail round-trip for a free study app
      // whose entire bank works signed out.
      requireEmailVerification: false,
    },
    emailVerification: {
      sendOnSignUp: mailEnabled(env),
      sendVerificationEmail: async ({ user, url }) => {
        await sendVerification(env, user.email, url)
      },
    },
    account: {
      accountLinking: {
        /**
         * Do NOT auto-link an email signup to an existing Google account with
         * the same address unless the address has been verified. Otherwise
         * signing up with someone else's email would attach to their synced
         * progress. Google itself stays trusted: it verifies addresses.
         */
        enabled: true,
        trustedProviders: ["google", "apple"],
      },
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
