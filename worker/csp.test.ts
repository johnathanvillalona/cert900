import { describe, expect, it } from "vitest"
import { GUIDE_PATHS, STUDY_PATHS } from "../src/data/routes"
import { ADVERTISING, ADVERTISING_GUIDE_PATH, type AdvertisingPolicy } from "../src/lib/advertising-core"
import {
  ADVERTISING_GUIDE_CSP, ADVERTISING_STRIP_SELECTORS, CSP, GUIDE_CSP, HOME_CSP, advertisingPilotActive, cspForPath, shouldStripAdvertising,
} from "./csp"

const AD_HOSTS = /googlesyndication|doubleclick|fundingchoices|adtrafficquality|googletagservices|adservice\.google|safeframe/
const GOOGLE_AD_HOST = /^https:\/\/(?:\*\.)?[a-z0-9.-]+\.(?:google\.com|googlesyndication\.com|doubleclick\.net|googletagservices\.com|adtrafficquality\.google|gstatic\.com)$/
const live: AdvertisingPolicy = {
  ...ADVERTISING, enabled: true, siteApproved: true, cmpVerified: true,
  placements: { "guide-primary": { enabled: true, slot: "1234567890" }, "guide-secondary": { enabled: false, slot: "" } },
}
const directives = (policy: string) => Object.fromEntries(policy.split("; ").map(directive => [directive.split(" ")[0], directive]))

describe("content security policies", () => {
  it("keeps the application, home and guide policies free of advertising and consent-manager hosts", () => {
    for (const policy of [CSP, HOME_CSP, GUIDE_CSP]) expect(policy).not.toMatch(AD_HOSTS)
  })
  it("never adds frame-src to the application policy", () => {
    expect(CSP).not.toContain("frame-src")
    expect(HOME_CSP).toContain("frame-src https://grow.me https://*.grow.me")
  })
  it("the advertising policy only appends Google advertising and consent hosts to the guide policy", () => {
    const guide = directives(GUIDE_CSP)
    const advertising = directives(ADVERTISING_GUIDE_CSP)
    expect(Object.keys(advertising)).toEqual(Object.keys(guide))
    const widened: string[] = []
    for (const [name, directive] of Object.entries(guide)) {
      expect(advertising[name].startsWith(directive), name).toBe(true)
      const extras = advertising[name].slice(directive.length).trim().split(" ").filter(Boolean)
      if (extras.length) widened.push(name)
      for (const host of extras) expect(host, `${name} ${host}`).toMatch(GOOGLE_AD_HOST)
    }
    expect(widened.sort()).toEqual(["connect-src", "frame-src", "img-src", "script-src"])
    for (const host of ["https://pagead2.googlesyndication.com", "https://fundingchoicesmessages.google.com"]) {
      expect(advertising["script-src"]).toContain(host)
    }
    expect(advertising["frame-src"]).toContain("https://googleads.g.doubleclick.net")
    expect(advertising["default-src"]).toBe("default-src 'self'")
    expect(advertising["object-src"]).toBe("object-src 'none'")
    expect(advertising["frame-ancestors"]).toBe("frame-ancestors 'none'")
    expect(advertising["form-action"]).toBe("form-action 'self'")
    expect(ADVERTISING_GUIDE_CSP).not.toContain("https: ")
  })
  it("routes every document exactly as before unless advertising is active", () => {
    expect(cspForPath("/", false)).toBe(HOME_CSP)
    expect(cspForPath("/privacy", false)).toBe(CSP)
    expect(cspForPath("/exam/n10-009/quiz", false)).toBe(CSP)
    expect(cspForPath("/login", false)).toBe(CSP)
    for (const path of Object.values(GUIDE_PATHS)) expect(cspForPath(path, false), path).toBe(GUIDE_CSP)
    for (const path of STUDY_PATHS) expect(cspForPath(path, false), path).toBe(CSP)
    expect(cspForPath(ADVERTISING_GUIDE_PATH, true)).toBe(ADVERTISING_GUIDE_CSP)
  })
})

describe("advertising pilot activation", () => {
  it("requires the exact pilot path, the exact runtime value and a policy that renders a unit", () => {
    expect(advertisingPilotActive(ADVERTISING_GUIDE_PATH, "on")).toBe(false)
    expect(advertisingPilotActive(ADVERTISING_GUIDE_PATH, "on", ADVERTISING)).toBe(false)
    expect(advertisingPilotActive(ADVERTISING_GUIDE_PATH, "on", live)).toBe(true)
    for (const value of ["off", undefined, null, "ON", "true", " on", 1]) expect(advertisingPilotActive(ADVERTISING_GUIDE_PATH, value, live), String(value)).toBe(false)
    for (const path of [`${ADVERTISING_GUIDE_PATH}/`, "/", GUIDE_PATHS.aplus, "/study/n10-009", `${ADVERTISING_GUIDE_PATH}?x=1`, `/${ADVERTISING_GUIDE_PATH}`]) {
      expect(advertisingPilotActive(path, "on", live), path).toBe(false)
    }
    for (const partial of [{ enabled: false }, { siteApproved: false }, { cmpVerified: false }, { placements: ADVERTISING.placements }]) {
      expect(advertisingPilotActive(ADVERTISING_GUIDE_PATH, "on", { ...live, ...partial })).toBe(false)
    }
  })
  it("strips the pilot document whenever the switch is not exactly on, tolerating one trailing slash", () => {
    for (const value of ["off", undefined, null, "ON", "true", ""]) {
      expect(shouldStripAdvertising(ADVERTISING_GUIDE_PATH, value), String(value)).toBe(true)
      expect(shouldStripAdvertising(`${ADVERTISING_GUIDE_PATH}/`, value), String(value)).toBe(true)
    }
    expect(shouldStripAdvertising(ADVERTISING_GUIDE_PATH, "on")).toBe(false)
    for (const path of [`/${ADVERTISING_GUIDE_PATH}`, `${ADVERTISING_GUIDE_PATH}//`, "/", GUIDE_PATHS.aplus, "/privacy", "/study/n10-009"]) {
      expect(shouldStripAdvertising(path, "off"), path).toBe(false)
    }
  })
  it("names the stable prerender and AdSlot markers", () => {
    expect(ADVERTISING_STRIP_SELECTORS).toEqual(["script[data-cert900-advertising-entry]", "aside[data-guide-ad]"])
  })
})
