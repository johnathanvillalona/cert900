import { readFileSync } from "node:fs"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"
import { AdSlot } from "../components/AdSlot"
import { GUIDE_META } from "../data/guide-meta"
import { STUDY_PATHS } from "../data/routes"
import { ADVERTISING, ADVERTISING_GUIDE_PATH, advertisingDocument, placementForGuide, type AdvertisingPolicy } from "./advertising-policy"
import { googleAdvertisingConsent, googleAdvertisingPermission, type PrivacyWindow, type TcfData } from "./advertising-consent"
import { startAdvertising, startGatedAdvertising, type AdvertisingGate, type AdvertisingRuntime, type GateOptions } from "./advertising"

const enabled: AdvertisingPolicy = {
  ...ADVERTISING, enabled: true, siteApproved: true, cmpVerified: true,
  placements: { "guide-primary": { enabled: true, slot: "0000000000" }, "guide-secondary": { enabled: false, slot: "" } },
}
const settle = async () => { for (let i = 0; i < 8; i++) await Promise.resolve() }
const tc = (): TcfData => ({ cmpId: 300, cmpStatus: "loaded", gdprApplies: true, eventStatus: "tcloaded", listenerId: 42,
  purpose: { consents: Object.fromEntries([1, 2, 3, 4, 7, 9, 10].map(id => [id, true])) }, vendor: { consents: { 755: true } } })
const source = (): PrivacyWindow => ({ navigator: {}, googlefc: { callbackQueue: [], ConsentModePurposeStatusEnum: { GRANTED: 1 },
  getGoogleConsentModeValues: () => ({ adStoragePurposeConsentStatus: 1, adUserDataPurposeConsentStatus: 1, adPersonalizationPurposeConsentStatus: 1 }) } })

function fixture(overrides: Partial<AdvertisingRuntime> = {}) {
  let listener = (_value: boolean) => {}
  const runtime: AdvertisingRuntime = { eligible: () => true, consent: {
    subscribe: fn => { listener = fn; fn(false); return vi.fn() }, openPreferences: vi.fn(),
  }, load: vi.fn(async () => {}), request: vi.fn(), clear: vi.fn(), unload: vi.fn(), ...overrides }
  const stop = startAdvertising(runtime)
  return { runtime, stop, update: (allowed: boolean) => listener(allowed) }
}

describe("static advertising policy", () => {
  it("is off behind independent global, approval, CMP, and per-unit gates", () => {
    expect(ADVERTISING.enabled).toBe(false)
    expect(ADVERTISING.siteApproved).toBe(false)
    expect(ADVERTISING.cmpVerified).toBe(false)
    expect(placementForGuide(ADVERTISING_GUIDE_PATH, "guide-primary")).toBeNull()
    for (const field of ["enabled", "siteApproved", "cmpVerified"] as const) {
      expect(placementForGuide(ADVERTISING_GUIDE_PATH, "guide-primary", { ...enabled, [field]: false })).toBeNull()
    }
    for (const path of [...Object.values(GUIDE_META).map(g => g.path), ...STUDY_PATHS]) {
      expect(renderToStaticMarkup(<AdSlot path={path} />)).toBe("")
    }
  })
  it("allows only the explicitly selected registered Network+ guide, never learning or legal routes", () => {
    expect(placementForGuide(ADVERTISING_GUIDE_PATH, "guide-primary", enabled)).toBeTruthy()
    const paths = [...Object.values(GUIDE_META).map(g => g.path), ...STUDY_PATHS, "/", "/privacy", "/terms", "/contact", "/login", "/account", "/progress", "/exam/n10-009/quiz", "/exam/n10-009/results"]
    for (const path of paths.filter(path => path !== ADVERTISING_GUIDE_PATH)) {
      expect(placementForGuide(path, "guide-primary", enabled)).toBeNull()
    }
    for (const suffix of ["/", "?test=1", "#answer"]) expect(placementForGuide(ADVERTISING_GUIDE_PATH + suffix, "guide-primary", enabled)).toBeNull()
  })
  it("rejects invalid IDs and keeps second inventory inactive independently", () => {
    expect(placementForGuide(ADVERTISING_GUIDE_PATH, "guide-secondary", enabled)).toBeNull()
    for (const publisher of ["", "ca-pub-x", '<script>']) expect(placementForGuide(ADVERTISING_GUIDE_PATH, "guide-primary", { ...enabled, publisher })).toBeNull()
    for (const slot of ["", "123", '<script>']) expect(placementForGuide(ADVERTISING_GUIDE_PATH, "guide-primary", { ...enabled, placements: { ...enabled.placements, "guide-primary": { enabled: true, slot } } })).toBeNull()
  })
  it("supports a separately gated future secondary without enabling it initially", () => {
    const policy: AdvertisingPolicy = { ...enabled, placements: { ...enabled.placements, "guide-secondary": { enabled: true, slot: "1111111111" } } }
    expect(placementForGuide(ADVERTISING_GUIDE_PATH, "guide-secondary", policy)).toMatchObject({ slot: "1111111111" })
    expect(renderToStaticMarkup(<AdSlot path={ADVERTISING_GUIDE_PATH} placement="guide-secondary" policy={policy} />)).toContain('data-guide-ad="guide-secondary"')
    expect(placementForGuide(ADVERTISING_GUIDE_PATH, "guide-primary", { ...policy, placements: { ...policy.placements, "guide-primary": { enabled: false, slot: "0000000000" } } })).toBeNull()
  })
  it("reserves a labeled, hook-free unit only under explicit configuration", () => {
    const html = renderToStaticMarkup(<AdSlot path={ADVERTISING_GUIDE_PATH} policy={enabled} />)
    expect(html.match(/aria-label="Advertisement"/g)).toHaveLength(1)
    expect(html).toContain('data-full-width-responsive="false"')
    expect(html).not.toContain("<script")
    expect(html).toContain("data-ad-preferences")
    expect(html).toContain('disabled=""')
    expect(html).not.toContain("hidden")
  })
  it("requires an exact canonical document without query/fragment data", () => {
    expect(advertisingDocument(new URL(`https://cert900.com${ADVERTISING_GUIDE_PATH}`))).toBe(true)
    for (const url of [`http://cert900.com${ADVERTISING_GUIDE_PATH}`, `https://www.cert900.com${ADVERTISING_GUIDE_PATH}`, `http://localhost${ADVERTISING_GUIDE_PATH}`, `https://cert900.com${ADVERTISING_GUIDE_PATH}?email=private`, `https://cert900.com${ADVERTISING_GUIDE_PATH}#private`, "https://cert900.com/exam/n10-009/quiz"]) expect(advertisingDocument(new URL(url))).toBe(false)
  })
  it("has no advertising import in SPA, shared static client, or shell and removes legacy dashboard inventory", () => {
    for (const file of ["../App.tsx", "../content-client.ts", "../screens/Dashboard.tsx", "../components/StaticContentShell.tsx"]) {
      expect(readFileSync(new URL(file, import.meta.url), "utf8")).not.toMatch(/advertising-client|advertising-browser|AdSlot|ethicalads/)
    }
  })
})

describe("Google certified-CMP signal reader (not a custom CMP)", () => {
  it("accepts explicit supported consent, independently of analytics", () => {
    expect(googleAdvertisingPermission(source(), tc(), true)).toBe(true)
    const data = tc(); data.purpose!.consents = { 1: true, 3: true, 4: true }
    data.purpose!.legitimateInterests = { 2: true, 7: true, 9: true, 10: true }
    data.vendor!.legitimateInterests = { 755: true }
    expect(googleAdvertisingPermission(source(), data, true)).toBe(true)
  })
  it.each([undefined, false])("fails closed on unknown/non-TCF applicability %s", value => {
    expect(googleAdvertisingPermission(source(), { ...tc(), gdprApplies: value }, true)).toBe(false)
  })
  it("requires the Google CMP, explicit purpose/vendor permission and completed choice", () => {
    for (const patch of [{ cmpId: 1 }, { cmpStatus: "error" }, { eventStatus: "cmpuishown" }, { vendor: {} }, { purpose: {} }]) expect(googleAdvertisingPermission(source(), { ...tc(), ...patch }, true)).toBe(false)
    for (const id of [1, 2, 3, 4, 7, 9, 10]) {
      const data = tc(); data.purpose!.consents![id] = false
      expect(googleAdvertisingPermission(source(), data, true)).toBe(false)
    }
    expect(googleAdvertisingPermission(source(), tc(), false)).toBe(false)
  })
  it.each([undefined, 0, 2, 3, 4, 5])("unknown, denied, not-applicable and unconfigured values are not consent: %s", value => {
    for (const field of ["adStoragePurposeConsentStatus", "adUserDataPurposeConsentStatus", "adPersonalizationPurposeConsentStatus"]) {
      const host = source(); const original = host.googlefc!.getGoogleConsentModeValues!()
      host.googlefc!.getGoogleConsentModeValues = () => ({ ...original, [field]: value })
      expect(googleAdvertisingPermission(host, tc(), true)).toBe(false)
    }
  })
  it("honors GPC and handles missing/throwing APIs without granting", () => {
    const host = source(); host.navigator.globalPrivacyControl = true
    expect(googleAdvertisingPermission(host, tc(), true)).toBe(false)
    expect(googleAdvertisingPermission({ navigator: {} }, tc(), true)).toBe(false)
    host.navigator.globalPrivacyControl = false
    host.googlefc!.getGoogleConsentModeValues = () => { throw new Error("Unavailable") }
    expect(googleAdvertisingPermission(host, tc(), true)).toBe(false)
  })
  it("registers one TCF listener, observes rejection/withdrawal, revokes via Google's UI, and detaches", () => {
    const host = source(); let emit = (_data: TcfData, _success: boolean) => {}
    host.__tcfapi = vi.fn((command, _version, callback) => { if (command === "addEventListener") emit = callback })
    host.googlefc!.showRevocationMessage = vi.fn()
    const decisions: boolean[] = []
    const adapter = googleAdvertisingConsent(host)
    const stop = adapter.subscribe(value => decisions.push(value))
    const callbacks = host.googlefc!.callbackQueue[0]
    callbacks.CONSENT_API_READY(); callbacks.CONSENT_DATA_READY()
    emit(tc(), true); emit({ ...tc(), eventStatus: "cmpuishown" }, true); emit({ ...tc(), purpose: {} }, true)
    expect(decisions).toEqual([false, true, false])
    adapter.openPreferences()
    host.googlefc!.callbackQueue[1].CONSENT_API_READY()
    expect(host.googlefc!.showRevocationMessage).toHaveBeenCalledOnce()
    stop(); emit(tc(), true)
    expect(decisions).toEqual([false, true, false])
    expect(host.__tcfapi).toHaveBeenLastCalledWith("removeEventListener", 2, expect.any(Function), 42)
  })
})

describe("manual request lifecycle", () => {
  it("does not subscribe, load, or request on ineligible documents", () => {
    const subscribe = vi.fn()
    const { runtime } = fixture({ eligible: () => false, consent: { subscribe, openPreferences: vi.fn() } })
    expect(subscribe).not.toHaveBeenCalled(); expect(runtime.load).not.toHaveBeenCalled()
  })
  it("makes no request before permission, then deduplicates repeated callbacks", async () => {
    const { runtime, update } = fixture()
    update(false); await settle(); expect(runtime.load).not.toHaveBeenCalled()
    update(true); update(true); await settle(); update(true)
    expect(runtime.load).toHaveBeenCalledOnce(); expect(runtime.request).toHaveBeenCalledOnce()
  })
  it("withdrawal clears and unloads the execution context, never resumes automatically", async () => {
    const { runtime, update } = fixture()
    update(true); await settle(); update(false); update(true); await settle()
    expect(runtime.clear).toHaveBeenCalledOnce(); expect(runtime.unload).toHaveBeenCalledOnce()
    expect(runtime.request).toHaveBeenCalledOnce(); expect(runtime.load).toHaveBeenCalledOnce()
  })
  it("withdrawal during loading cancels the queued request", async () => {
    let finish = () => {}
    const { runtime, update } = fixture({ load: vi.fn(() => new Promise<void>(resolve => { finish = resolve })) })
    update(true); update(false); finish(); await settle()
    expect(runtime.request).not.toHaveBeenCalled(); expect(runtime.unload).toHaveBeenCalledOnce()
  })
  it("unmount and changed document eligibility prevent stale requests", async () => {
    let eligible = true; let finish = () => {}
    const { runtime, update, stop } = fixture({ eligible: () => eligible, load: vi.fn(() => new Promise<void>(resolve => { finish = resolve })) })
    update(true); eligible = false; finish(); await settle(); stop(); stop(); update(true)
    expect(runtime.request).not.toHaveBeenCalled(); expect(runtime.clear).toHaveBeenCalledOnce()
  })
  it("blockers and failed loads do not throw or trigger retries", async () => {
    const { runtime, update } = fixture({ load: vi.fn(async () => { throw new Error("Blocked") }) })
    update(true); await settle(); update(true)
    expect(runtime.request).not.toHaveBeenCalled(); expect(runtime.load).toHaveBeenCalledOnce()
  })
})

describe("regional policy", () => {
  const nonTcf = (): TcfData => ({ ...tc(), gdprApplies: false, purpose: {}, vendor: {} })
  const withUsStatus = (status: number | undefined, enumeration?: { DOES_NOT_APPLY?: number; NOT_OPTED_OUT?: number; OPTED_OUT?: number }) => {
    const host = source()
    host.googlefc!.usstatesoptout = { getInitialUsStatesOptOutStatus: () => status as number, ...(enumeration ? { InitialUsStatesOptOutStatusEnum: enumeration } : {}) }
    return host
  }
  it("defaults to TCF-only, so a non-TCF document never grants by default or explicitly", () => {
    expect(ADVERTISING.regions).toBe("tcf-only")
    expect(googleAdvertisingPermission(source(), nonTcf(), true)).toBe(false)
    expect(googleAdvertisingPermission(source(), nonTcf(), true, "tcf-only")).toBe(false)
  })
  it("tcf-and-non-tcf grants only a loaded Google CMP that reports TCF does not apply, with granted consent-mode values", () => {
    expect(googleAdvertisingPermission(source(), nonTcf(), true, "tcf-and-non-tcf")).toBe(true)
    for (const patch of [{ gdprApplies: undefined }, { cmpId: 1 }, { cmpStatus: "stub" }, { eventStatus: "cmpuishown" }, { eventStatus: undefined }]) {
      expect(googleAdvertisingPermission(source(), { ...nonTcf(), ...patch }, true, "tcf-and-non-tcf"), JSON.stringify(patch)).toBe(false)
    }
    expect(googleAdvertisingPermission(source(), nonTcf(), false, "tcf-and-non-tcf")).toBe(false)
    const gpc = source(); gpc.navigator.globalPrivacyControl = true
    expect(googleAdvertisingPermission(gpc, nonTcf(), true, "tcf-and-non-tcf")).toBe(false)
    for (const field of ["adStoragePurposeConsentStatus", "adUserDataPurposeConsentStatus", "adPersonalizationPurposeConsentStatus"]) {
      const host = source(); const original = host.googlefc!.getGoogleConsentModeValues!()
      host.googlefc!.getGoogleConsentModeValues = () => ({ ...original, [field]: 2 })
      expect(googleAdvertisingPermission(host, nonTcf(), true, "tcf-and-non-tcf"), field).toBe(false)
    }
    expect(googleAdvertisingPermission({ navigator: {} }, nonTcf(), true, "tcf-and-non-tcf")).toBe(false)
    // TCF documents keep every vendor and purpose requirement under the wider policy.
    expect(googleAdvertisingPermission(source(), tc(), true, "tcf-and-non-tcf")).toBe(true)
    expect(googleAdvertisingPermission(source(), { ...tc(), purpose: {} }, true, "tcf-and-non-tcf")).toBe(false)
  })
  it("honors Google's US state opt-out status outside TCF and ignores it inside TCF", () => {
    expect(googleAdvertisingPermission(withUsStatus(1), nonTcf(), true, "tcf-and-non-tcf")).toBe(true)
    expect(googleAdvertisingPermission(withUsStatus(2), nonTcf(), true, "tcf-and-non-tcf")).toBe(true)
    for (const status of [0, 3, undefined, 99]) expect(googleAdvertisingPermission(withUsStatus(status), nonTcf(), true, "tcf-and-non-tcf"), String(status)).toBe(false)
    const enumeration = { DOES_NOT_APPLY: 7, NOT_OPTED_OUT: 8, OPTED_OUT: 9 }
    expect(googleAdvertisingPermission(withUsStatus(7, enumeration), nonTcf(), true, "tcf-and-non-tcf")).toBe(true)
    expect(googleAdvertisingPermission(withUsStatus(8, enumeration), nonTcf(), true, "tcf-and-non-tcf")).toBe(true)
    for (const status of [1, 2, 9]) expect(googleAdvertisingPermission(withUsStatus(status, enumeration), nonTcf(), true, "tcf-and-non-tcf"), String(status)).toBe(false)
    expect(googleAdvertisingPermission(withUsStatus(3), tc(), true, "tcf-and-non-tcf")).toBe(true)
    const throwing = source(); throwing.googlefc!.usstatesoptout = { getInitialUsStatesOptOutStatus: () => { throw new Error("Unavailable") } }
    expect(googleAdvertisingPermission(throwing, nonTcf(), true, "tcf-and-non-tcf")).toBe(false)
  })
  it("threads the regional policy through the subscription", () => {
    const run = (regions?: "tcf-only" | "tcf-and-non-tcf") => {
      const host = source(); let emit = (_data: TcfData, _success: boolean) => {}
      host.__tcfapi = vi.fn((command, _version, callback) => { if (command === "addEventListener") emit = callback })
      const decisions: boolean[] = []
      const stop = googleAdvertisingConsent(host, regions).subscribe(value => decisions.push(value))
      host.googlefc!.callbackQueue[0].CONSENT_API_READY()
      emit(nonTcf(), true)
      stop()
      return decisions
    }
    expect(run("tcf-and-non-tcf")).toEqual([false, true])
    expect(run("tcf-only")).toEqual([false, false])
    expect(run()).toEqual([false, false])
  })
})

describe("runtime gate", () => {
  function gated(overrides: Partial<AdvertisingRuntime & AdvertisingGate> = {}, options?: GateOptions) {
    const order: string[] = []
    let listener = (_value: boolean) => {}
    const runtime: AdvertisingRuntime & AdvertisingGate = {
      eligible: vi.fn(() => true),
      consent: { subscribe: vi.fn((fn: (value: boolean) => void) => { order.push("subscribe"); listener = fn; fn(false); return vi.fn() }), openPreferences: vi.fn() },
      config: vi.fn(async () => { order.push("config"); return { enabled: true } }),
      bootstrap: vi.fn(async () => { order.push("bootstrap") }),
      load: vi.fn(async () => { order.push("load") }), request: vi.fn(() => { order.push("request") }), clear: vi.fn(), unload: vi.fn(),
      ...overrides,
    }
    const stop = startGatedAdvertising(runtime, options)
    return { runtime, order, stop, grant: () => listener(true) }
  }
  it("runs the runtime config, then the consent manager, then the subscription, and loads only after permission", async () => {
    const { order, grant } = gated()
    expect(order).toEqual(["config"])
    await settle()
    expect(order).toEqual(["config", "bootstrap", "subscribe"])
    grant(); await settle()
    expect(order).toEqual(["config", "bootstrap", "subscribe", "load", "request"])
  })
  it.each([{ enabled: false }, null, undefined, { enabled: "true" }, "enabled", [{ enabled: true }], 1])("a runtime config of %j stops before the consent manager", async value => {
    const { order, runtime, grant } = gated({ config: async () => value })
    await settle()
    expect(order).toEqual([])
    expect(runtime.bootstrap).not.toHaveBeenCalled()
    expect(runtime.consent.subscribe).not.toHaveBeenCalled()
    grant(); await settle()
    expect(runtime.load).not.toHaveBeenCalled()
  })
  it("a rejected config or consent manager stops the sequence without retry", async () => {
    const failedConfig = gated({ config: vi.fn(async () => { throw new Error("offline") }) })
    await settle()
    expect(failedConfig.runtime.bootstrap).not.toHaveBeenCalled()
    expect(failedConfig.runtime.config).toHaveBeenCalledOnce()
    const failedBootstrap = gated({ bootstrap: vi.fn(async () => { throw new Error("blocked") }) })
    await settle()
    expect(failedBootstrap.order).toEqual(["config"])
    expect(failedBootstrap.runtime.bootstrap).toHaveBeenCalledOnce()
    expect(failedBootstrap.runtime.consent.subscribe).not.toHaveBeenCalled()
  })
  it("lost eligibility between steps stops the sequence", async () => {
    const afterConfig = gated({ eligible: vi.fn().mockReturnValueOnce(true).mockReturnValue(false) })
    await settle()
    expect(afterConfig.order).toEqual(["config"])
    const afterBootstrap = gated({ eligible: vi.fn().mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValue(false) })
    await settle()
    expect(afterBootstrap.order).toEqual(["config", "bootstrap"])
    expect(afterBootstrap.runtime.consent.subscribe).not.toHaveBeenCalled()
  })
  it("stopping before the gates settle prevents every later step", async () => {
    let release = (_value: unknown) => {}
    const { runtime, stop } = gated({ config: () => new Promise(resolve => { release = resolve }) })
    stop()
    release({ enabled: true })
    await settle()
    expect(runtime.bootstrap).not.toHaveBeenCalled()
    expect(runtime.consent.subscribe).not.toHaveBeenCalled()
    expect(runtime.unload).not.toHaveBeenCalled()
  })
  it("ready runs once after both gates; serve=false never subscribes or loads", async () => {
    const ready = vi.fn()
    const preferences = gated({}, { serve: false, ready })
    await settle()
    expect(ready).toHaveBeenCalledOnce()
    expect(preferences.order).toEqual(["config", "bootstrap"])
    const serving = gated({}, { ready: () => serving.order.push("ready") })
    await settle()
    expect(serving.order).toEqual(["config", "bootstrap", "ready", "subscribe"])
  })
  it("stop after start propagates to the lifecycle exactly once", async () => {
    const { runtime, stop, grant } = gated()
    await settle(); grant(); await settle()
    stop(); stop()
    expect(runtime.clear).toHaveBeenCalledOnce()
    expect(runtime.unload).toHaveBeenCalledOnce()
  })
  it("ineligible documents never fetch the runtime config", () => {
    const { runtime } = gated({ eligible: () => false })
    expect(runtime.config).not.toHaveBeenCalled()
  })
})
