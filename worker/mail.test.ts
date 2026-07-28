import { describe, it, expect, vi, afterEach } from "vitest"
import { mailEnabled, sendPasswordReset } from "./mail"
import type { Env } from "./auth"

const base = { AUTH_EMAIL_FROM: "no-reply@send.cert900.com" }
const env = (over: Partial<Env> = {}) => ({ ...base, ...over }) as Env

afterEach(() => vi.unstubAllGlobals())

describe("mail transport selection", () => {
  it("is off with no from-address, and off with a from-address but no transport", () => {
    expect(mailEnabled({} as Env)).toBe(false)
    expect(mailEnabled(env())).toBe(false)
  })

  it("is on with either transport", () => {
    expect(mailEnabled(env({ RESEND_API_KEY: "re_test" }))).toBe(true)
    expect(mailEnabled(env({ EMAIL: { send: async () => ({}) } }))).toBe(true)
  })

  it("prefers Resend when both are present, and never touches the binding", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "abc" }), { status: 200 }))
    vi.stubGlobal("fetch", fetchMock)
    const binding = { send: vi.fn(async () => ({})) }
    await sendPasswordReset(env({ RESEND_API_KEY: "re_test", EMAIL: binding }), "u@example.com", "https://x/reset")
    expect(fetchMock).toHaveBeenCalledOnce()
    expect(binding.send).not.toHaveBeenCalled()
  })
})

describe("resend request", () => {
  it("sends both bodies and a named from-address", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "abc" }), { status: 200 }))
    vi.stubGlobal("fetch", fetchMock)
    await sendPasswordReset(env({ RESEND_API_KEY: "re_test" }), "u@example.com", "https://cert900.com/reset?t=1")

    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe("https://api.resend.com/emails")
    expect(init.method).toBe("POST")
    expect((init.headers as Record<string, string>).Authorization).toBe("Bearer re_test")

    const body = JSON.parse(init.body as string)
    expect(body.from).toBe("cert900 <no-reply@send.cert900.com>")
    expect(body.to).toEqual(["u@example.com"])
    // A text/plain alternative measurably helps spam scoring, and some clients
    // render nothing else.
    expect(body.html).toContain("https://cert900.com/reset?t=1")
    expect(body.text).toContain("https://cert900.com/reset?t=1")
    expect(body.subject).toMatch(/reset/i)
  })

  /**
   * Better Auth swallows a rejected promise from sendResetPassword, so a send
   * that fails silently is indistinguishable from a delivered reset in the UI.
   * Throwing at least puts the reason in the worker logs.
   */
  it("throws with the provider's reason when Resend rejects the send", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ message: "Domain is not verified" }), { status: 403 })),
    )
    await expect(
      sendPasswordReset(env({ RESEND_API_KEY: "re_test" }), "u@example.com", "https://x/reset"),
    ).rejects.toThrow(/403.*not verified/s)
  })

  it("does not send at all when no transport is configured", async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal("fetch", fetchMock)
    await sendPasswordReset(env(), "u@example.com", "https://x/reset")
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
