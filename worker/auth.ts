import { betterAuth } from "better-auth"
import { D1Dialect } from "kysely-d1"

export interface Env {
  DB: D1Database
  ASSETS: Fetcher
  BETTER_AUTH_SECRET: string
  BETTER_AUTH_URL: string
  GOOGLE_CLIENT_ID: string
  GOOGLE_CLIENT_SECRET: string
}

export function createAuth(env: Env) {
  return betterAuth({
    database: {
      dialect: new D1Dialect({ database: env.DB }),
      type: "sqlite",
    },
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    socialProviders: {
      google: {
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      },
    },
    // Password auth is enabled ONLY for local integration testing (no email
    // delivery is configured, so there is no reset flow in production).
    emailAndPassword: {
      enabled: env.BETTER_AUTH_URL.includes("localhost"),
    },
    trustedOrigins: env.BETTER_AUTH_URL.includes("localhost")
      ? ["http://localhost:5173", "http://127.0.0.1:5173"]
      : [],
    user: {
      deleteUser: {
        enabled: true,
      },
    },
    session: {
      cookieCache: {
        enabled: true,
        maxAge: 60 * 5,
      },
    },
  })
}

export type Auth = ReturnType<typeof createAuth>
