import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { GUIDE_META } from "@/data/guide-meta"
import { primaryGuideForExam } from "@/data/study-resources"
import {
  ADVERTISING, ADVERTISING_CONFIG_PATH, ADVERTISING_GUIDE_PATH, ADVERTISING_REGIONS, advertisingConfigEnabled, advertisingRuntimeEnabled,
} from "./advertising-core"

describe("advertising runtime switch", () => {
  it("enables only the exact string on", () => {
    expect(advertisingRuntimeEnabled("on")).toBe(true)
  })
  it.each(["off", "", undefined, null, "ON", "On", " on", "on ", "on\n", "true", true, 1, "enabled", "yes", {}, ["on"]])(
    "fails closed for %j", value => {
      expect(advertisingRuntimeEnabled(value)).toBe(false)
    })
  it("accepts only an object whose enabled field is boolean true", () => {
    expect(advertisingConfigEnabled({ enabled: true })).toBe(true)
    expect(advertisingConfigEnabled({ enabled: true, extra: "ignored" })).toBe(true)
    for (const value of [null, undefined, "", "enabled", 1, true, {}, { enabled: false }, { enabled: "true" }, { enabled: 1 }, [{ enabled: true }], [true]]) {
      expect(advertisingConfigEnabled(value), JSON.stringify(value)).toBe(false)
    }
  })
  it("keeps the committed Cloudflare variable off so every upload fails closed", () => {
    const jsonc = readFileSync("wrangler.jsonc", "utf8").split("\n").filter(line => !/^\s*\/\//.test(line)).join("\n")
    const config = JSON.parse(jsonc) as { vars?: Record<string, unknown> }
    expect(config.vars?.ADVERTISING_RUNTIME).toBe("off")
  })
})

describe("advertising policy identity", () => {
  it("allowlists exactly the registered primary Network+ guide and the fixed config path", () => {
    expect(ADVERTISING_GUIDE_PATH).toBe("/network-plus-practice-test")
    expect(ADVERTISING_GUIDE_PATH).toBe(GUIDE_META.nplus.path)
    expect(primaryGuideForExam("n10-009")?.path).toBe(ADVERTISING_GUIDE_PATH)
    expect(ADVERTISING_CONFIG_PATH).toBe("/advertising-config.json")
  })
  it("defaults to TCF-only regions and stays frozen with every gate off", () => {
    expect(ADVERTISING_REGIONS).toEqual(["tcf-only", "tcf-and-non-tcf"])
    expect(ADVERTISING.regions).toBe("tcf-only")
    expect(ADVERTISING.enabled).toBe(false)
    expect(ADVERTISING.siteApproved).toBe(false)
    expect(ADVERTISING.cmpVerified).toBe(false)
    expect(Object.isFrozen(ADVERTISING)).toBe(true)
    expect(Object.isFrozen(ADVERTISING.placements)).toBe(true)
  })
})
