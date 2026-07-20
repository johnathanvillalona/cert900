import { describe, expect, it } from "vitest"
import { createAuth, type Env } from "./auth"

/** Enough of Env to construct the auth instance; nothing here touches D1. */
function env(overrides: Partial<Env> = {}): Env {
  return {
    DB: {} as D1Database,
    ASSETS: {} as Fetcher,
    BETTER_AUTH_SECRET: "test-secret",
    BETTER_AUTH_URL: "https://cert900.com",
    GOOGLE_CLIENT_ID: "id",
    GOOGLE_CLIENT_SECRET: "secret",
    ...overrides,
  }
}

describe("auth config", () => {
  /**
   * Regression guard for a shipped bug: Better Auth blocks delete-user on a
   * session older than `freshAge` unless the request carries a password, and
   * its default is 24h against a 7-day session. Production enables Google
   * only, so those users have no password and could never delete their
   * account. Any value other than 0 silently reintroduces that.
   */
  it("disables the session freshness gate so account deletion always works", async () => {
    const auth = createAuth(env())
    const ctx = await auth.$context
    expect(ctx.sessionConfig.freshAge).toBe(0)
  })

  it("keeps account deletion enabled", () => {
    expect(createAuth(env()).options.user?.deleteUser?.enabled).toBe(true)
  })

  it("trusts only the app scheme in production, never Expo Go", () => {
    const origins = createAuth(env()).options.trustedOrigins as string[]
    expect(origins).toContain("cert900://")
    // exp:// would let any Expo Go deep link receive a live session cookie.
    expect(origins.some((o) => o.startsWith("exp://"))).toBe(false)
    expect(origins.some((o) => o.includes("localhost"))).toBe(false)
  })

  it("enables password auth only for local testing", () => {
    expect(createAuth(env()).options.emailAndPassword?.enabled).toBe(false)
    const local = createAuth(env({ BETTER_AUTH_URL: "http://localhost:8787" }))
    expect(local.options.emailAndPassword?.enabled).toBe(true)
  })
})
