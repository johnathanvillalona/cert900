import { describe, expect, it, vi } from "vitest"
import { analyticsConfig, analyticsPath, analyticsReferrer, createAnalytics, type AnalyticsRuntime } from "./analytics"
import { CONSENT_LIFETIME, consentRecord, readConsent } from "./consent"

const id = "G-TEST900123"
const settle = async () => { for (let i = 0; i < 15; i++) await Promise.resolve() }
function fixture(changes: Partial<AnalyticsRuntime> = {}) {
  const command = vi.fn<AnalyticsRuntime["command"]>()
  const runtime = {
    config: vi.fn(async () => ({ measurementId: id, hosts: ["cert900.com"] })),
    host: () => "cert900.com", load: vi.fn(async () => {}), disable: vi.fn(), erase: vi.fn(),
    referrer: () => "https://www.google.com/search?q=private",
    ...changes,
    command,
  }
  const client = createAnalytics(runtime)
  const events = () => runtime.command.mock.calls.filter(args => args[0] === "event")
  return { runtime, client, events }
}

describe("analytics-only consent", () => {
  it.each([null, "", "{}", "null", "broken", '{"version":1,"choice":"allow"}'])("fails closed for %s", raw => {
    expect(readConsent(raw, 100)).toBe("unknown")
  })
  it("recognizes both choices, expires them, and rejects future/unsupported records", () => {
    for (const choice of ["allow", "decline"] as const) {
      const record = consentRecord(choice, 100)
      expect(readConsent(record, 101)).toBe(choice)
      expect(readConsent(record, 100 + CONSENT_LIFETIME)).toBe("unknown")
      expect(readConsent(record, 0)).toBe("unknown")
      expect(readConsent(record.replace('"version":1', '"version":2'), 101)).toBe("unknown")
    }
  })
})

describe("analytics privacy and configuration", () => {
  it.each(["/api/auth/callback/google?code=private", "/admin", "/delete-account", "/unknown/private@example.com", "/exam/not-an-exam/quiz"])("excludes %s", path => {
    expect(analyticsPath(path)).toBeNull()
  })
  it("reports only known paths and removes all query/hash information", () => {
    expect(analyticsPath("/exam/220-1201/quiz?email=private#answer")).toBe("/exam/220-1201/quiz")
    expect(analyticsPath("/common-network-ports#https")).toBe("/common-network-ports")
  })
  it("retains only an HTTP(S) referrer origin", () => {
    expect(analyticsReferrer("https://google.com/private?q=token#secret")).toBe("https://google.com")
    expect(analyticsReferrer("javascript:alert(1)")).toBe("")
    expect(analyticsReferrer("bad")).toBe("")
  })
  it("requires a verified ID and an explicitly configured host", () => {
    for (const input of [null, {}, { measurementId: "", hosts: ["cert900.com"] }, { measurementId: "G-bad<script>", hosts: ["cert900.com"] }]) {
      expect(analyticsConfig(input, "cert900.com")).toBeNull()
    }
    expect(analyticsConfig({ measurementId: id, hosts: ["cert900.com"] }, "localhost")).toBeNull()
    expect(analyticsConfig({ measurementId: id, hosts: ["cert900.com"] }, "cert900.com")).toBeTruthy()
  })
})

describe("consented GA4 boundary", () => {
  it("does not fetch configuration, load GA4, or emit commands without consent", async () => {
    const { client, runtime, events } = fixture()
    client.pageView("/")
    client.startAttempt("220-1201", "exam")()
    client.setConsent("unknown"); client.setConsent("decline")
    await settle()
    expect(runtime.config).not.toHaveBeenCalled()
    expect(runtime.load).not.toHaveBeenCalled()
    expect(events()).toEqual([])
    expect(runtime.command).not.toHaveBeenCalled()
  })
  it("loads one tag, uses restricted config and deduplicates Strict Mode/page effects", async () => {
    const { client, runtime, events } = fixture()
    client.pageView("/?token=private#hash"); client.setConsent("allow")
    client.pageView("/"); client.setConsent("allow")
    await settle()
    expect(runtime.load).toHaveBeenCalledExactlyOnceWith(id)
    expect(events()).toHaveLength(1)
    expect(events()[0]).toEqual(["event", "page_view", { page_location: "https://cert900.com/", page_title: "Cert900", page_referrer: "https://www.google.com" }])
    const config = runtime.command.mock.calls.find(args => args[0] === "config")![2]
    expect(config).toMatchObject({ send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false })
    expect(JSON.stringify(runtime.command.mock.calls)).not.toContain("private")
  })
  it("tracks forward/back/replacement views without counting hashes twice", async () => {
    const { client, events } = fixture()
    client.pageView("/"); client.setConsent("allow"); await settle()
    for (const path of ["/exams", "/exam/220-1201/quiz", "/exam/220-1201/results", "/exams", "/exams#faq"]) client.pageView(path)
    expect(events().filter(e => e[1] === "page_view")).toHaveLength(5)
  })
  it("clears pending work on withdrawal and supports a later explicit grant", async () => {
    let resolve!: (value: unknown) => void
    const { client, runtime, events } = fixture({ config: () => new Promise(r => { resolve = r }) })
    client.pageView("/"); client.setConsent("allow")
    client.setConsent("decline")
    resolve({ measurementId: id, hosts: ["cert900.com"] }); await settle()
    expect(runtime.load).not.toHaveBeenCalled()
    expect(events()).toEqual([])
    client.setConsent("allow")
    resolve({ measurementId: id, hosts: ["cert900.com"] }); await settle()
    expect(runtime.load).toHaveBeenCalledOnce()
  })
  it("disables an already loaded tag, erases only GA cookies, and sends no events after withdrawal", async () => {
    const { client, runtime, events } = fixture()
    client.pageView("/"); client.setConsent("allow"); await settle()
    const finish = client.startAttempt("220-1201", "exam")
    client.setConsent("decline"); client.pageView("/exams"); finish()
    await settle()
    expect(runtime.disable).toHaveBeenLastCalledWith(id, true)
    expect(runtime.erase).toHaveBeenCalledExactlyOnceWith(id)
    expect(events().map(e => e[1])).toEqual(["page_view", "learning_attempt_start"])
    client.setConsent("allow"); await settle()
    expect(events().at(-1)?.[1]).toBe("page_view")
    expect(runtime.load).toHaveBeenCalledOnce()
  })
  it.each(["exam", "practice", "pbq"] as const)("records %s completion once without accepting session data", async mode => {
    const { client, events } = fixture()
    client.pageView("/exam/220-1201/quiz"); client.setConsent("allow"); await settle()
    const finish = client.startAttempt("220-1201", mode)
    finish(); finish()
    expect(events().filter(e => e[1] === "learning_attempt_start")).toHaveLength(1)
    expect(events().filter(e => e[1] === "learning_attempt_complete")).toHaveLength(1)
    expect(Object.keys(events().at(-1)![2] as object).sort()).toEqual(["certification", "mode", "page_location", "page_referrer", "page_title"])
  })
  it("does not retrospectively measure starts or completions without a consented start", async () => {
    const { client, events } = fixture()
    client.pageView("/"); const finish = client.startAttempt("220-1201", "exam")
    client.setConsent("allow"); await settle(); finish()
    client.startAttempt("private@example.com", "exam")()
    expect(events().map(e => e[1])).toEqual(["page_view"])
  })
  it("suppresses excluded screens and restores tracking on a permitted route", async () => {
    const { client, runtime, events } = fixture()
    client.pageView("/"); client.setConsent("allow"); await settle()
    client.pageView("/admin?email=private"); client.startAttempt("220-1201", "exam")()
    expect(runtime.disable).toHaveBeenLastCalledWith(id, true)
    client.pageView("/")
    expect(events().map(e => e[1])).toEqual(["page_view", "page_view"])
  })
  it("keeps learning usable when config or the optional SDK fails", async () => {
    for (const changes of [{ config: async () => { throw new Error("offline") } }, { load: async () => { throw new Error("blocked") } }, { config: async () => ({ measurementId: "", hosts: [] }) }]) {
      const { client, events } = fixture(changes)
      client.pageView("/"); client.setConsent("allow"); client.startAttempt("220-1201", "exam")()
      await settle()
      expect(events()).toEqual([])
    }
  })
})
