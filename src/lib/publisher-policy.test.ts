import { describe, expect, it, vi } from "vitest"
import { EXAM_IDS } from "@/data/exam-ids"
import { APP_PATHS, EXAM_SUBPATHS, GUIDE_PATHS, LEGAL_PATHS, STUDY_PATHS, examPath } from "@/data/routes"
import { primaryGuideForExam } from "@/data/study-resources"
import { ADVERTISING, type AdvertisingPolicy } from "./advertising-policy"
import {
  assessPublisherIntegration, PUBLISHERS, PUBLISHER_ADAPTERS, PUBLISHER_PILOT_PATH, PUBLISHER_POLICY,
  type Publisher, type PublisherBlocker, type PublisherControls, type PublisherPolicy,
} from "./publisher-policy"

const reviewedControls: PublisherControls = {
  enabled: true, siteApproved: true, termsReviewed: true, consentVerified: true,
}
const hypotheticalPolicy: PublisherPolicy = {
  enabled: true,
  providers: Object.fromEntries(PUBLISHERS.map(provider => [provider, { ...reviewedControls }])) as Record<Publisher, PublisherControls>,
  placements: [{
    id: "network-guide-primary", kind: "guide", path: PUBLISHER_PILOT_PATH, enabled: true,
    providers: { adsense: true, infolinks: true, journey: true, "media-net": true, carbon: true },
  }],
}
const hypotheticalAdsense: AdvertisingPolicy = {
  ...ADVERTISING, enabled: true, siteApproved: true, cmpVerified: true,
  placements: { ...ADVERTISING.placements, "guide-primary": { enabled: true, slot: "1234567890" } },
}

describe("disabled provider-neutral preparation policy", () => {
  it("derives one proposed guide from the existing resource registry", () => {
    expect(PUBLISHER_PILOT_PATH).toBe(primaryGuideForExam("n10-009")!.path)
    expect(PUBLISHER_POLICY.placements).toHaveLength(1)
    expect(PUBLISHER_POLICY.placements[0]).toMatchObject({ kind: "guide", enabled: false })
    expect(Object.keys(PUBLISHER_ADAPTERS)).toHaveLength(0)
    expect(ADVERTISING.enabled).toBe(false)
    expect(Object.isFrozen(PUBLISHER_POLICY)).toBe(true)
    expect(Object.isFrozen(PUBLISHER_POLICY.providers)).toBe(true)
    expect(Object.isFrozen(PUBLISHER_POLICY.placements[0])).toBe(true)
  })

  for (const provider of PUBLISHERS) {
    it(`${provider}: no provider or route is enabled by default`, () => {
      expect(PUBLISHER_POLICY.providers[provider]).toEqual({ enabled: false, siteApproved: false, termsReviewed: false, consentVerified: false })
      const assessment = assessPublisherIntegration(provider, PUBLISHER_PILOT_PATH)
      expect(assessment.ready).toBe(false)
      expect(assessment.blockers).toContain("global-disabled")
      expect(assessment.blockers).toContain("adapter-not-implemented")
      expect(assessment.blockers).toContain("placement-provider-disabled")
    })

    it(`${provider}: each source-controlled kill switch independently blocks preparation`, () => {
      // Only mock adapters exist. Assessing readiness must not execute one.
      const adapter = vi.fn(() => { throw new Error("A readiness assessment must not execute an advertising runtime") })
      const options = { adapters: { [provider]: adapter }, adsensePolicy: hypotheticalAdsense }
      expect(assessPublisherIntegration(provider, PUBLISHER_PILOT_PATH, { ...options, policy: hypotheticalPolicy }).ready).toBe(true)
      const cases: readonly (readonly [PublisherPolicy, PublisherBlocker])[] = [
        [{ ...hypotheticalPolicy, enabled: false }, "global-disabled"],
        ...(["enabled", "siteApproved", "termsReviewed", "consentVerified"] as const).map((field, i): [PublisherPolicy, PublisherBlocker] => [{
          ...hypotheticalPolicy,
          providers: { ...hypotheticalPolicy.providers, [provider]: { ...reviewedControls, [field]: false } },
        }, (["provider-disabled", "site-not-approved", "terms-not-reviewed", "consent-not-verified"] as const)[i]]),
        [{ ...hypotheticalPolicy, placements: [{ ...hypotheticalPolicy.placements[0], enabled: false }] }, "placement-disabled"],
        [{ ...hypotheticalPolicy, placements: [{ ...hypotheticalPolicy.placements[0], providers: {
          ...hypotheticalPolicy.placements[0].providers, [provider]: false,
        } }] }, "placement-provider-disabled"],
      ]
      for (const [policy, blocker] of cases) {
        expect(assessPublisherIntegration(provider, PUBLISHER_PILOT_PATH, { ...options, policy }).blockers).toContain(blocker)
        expect(assessPublisherIntegration(provider, PUBLISHER_PILOT_PATH, { ...options, policy }).ready).toBe(false)
      }
      expect(adapter).not.toHaveBeenCalled()
    })

    it(`${provider}: every learning/private route and unapproved static page stays excluded`, () => {
      const paths = new Set([
        "/", ...APP_PATHS, ...LEGAL_PATHS, ...STUDY_PATHS, ...Object.values(GUIDE_PATHS),
        ...EXAM_IDS.flatMap(id => EXAM_SUBPATHS.map(sub => examPath(id, sub))),
        "/login", "/account", "/api/auth/get-session", "/api/progress", "/admin",
      ])
      const adapter = vi.fn(() => { throw new Error("No adapter may run") })
      for (const path of paths) {
        if (path === PUBLISHER_PILOT_PATH) continue
        const assessment = assessPublisherIntegration(provider, path, {
          policy: hypotheticalPolicy, adapters: { [provider]: adapter }, adsensePolicy: hypotheticalAdsense,
        })
        expect(assessment.ready, path).toBe(false)
        expect(assessment.blockers, path).toContain("route-not-approved")
      }
      expect(adapter).not.toHaveBeenCalled()
    })
  }

  it("rejects unknown provider keys and hostile or noncanonical paths", () => {
    for (const provider of ["", "google", "__proto__", "constructor", "ADSENSE", "infolinks "]) {
      expect(assessPublisherIntegration(provider, PUBLISHER_PILOT_PATH).blockers).toEqual(["unknown-provider"])
    }
    const adapter = vi.fn(() => { throw new Error("No adapter may run") })
    for (const path of [
      `${PUBLISHER_PILOT_PATH}/`, `${PUBLISHER_PILOT_PATH}?ads=1`, `${PUBLISHER_PILOT_PATH}#sample`,
      `https://cert900.com${PUBLISHER_PILOT_PATH}`, `//cert900.com${PUBLISHER_PILOT_PATH}`,
      `https://evil.example${PUBLISHER_PILOT_PATH}`, "/%6eetwork-plus-practice-test", "/x/../network-plus-practice-test",
      "/NETWORK-PLUS-PRACTICE-TEST", `${PUBLISHER_PILOT_PATH}\0`, "javascript:alert(1)",
    ]) {
      const result = assessPublisherIntegration("infolinks", path, { policy: hypotheticalPolicy, adapters: { infolinks: adapter } })
      expect(result.ready, path).toBe(false)
      expect(result.blockers, path).toContain("route-not-approved")
    }
    expect(adapter).not.toHaveBeenCalled()
  })

  it("a neutral configuration cannot bypass existing AdSense gates", () => {
    const adapter = vi.fn(() => { throw new Error("No adapter may run") })
    const assessment = assessPublisherIntegration("adsense", PUBLISHER_PILOT_PATH, {
      policy: hypotheticalPolicy, adapters: { adsense: adapter },
    })
    expect(assessment.ready).toBe(false)
    expect(assessment.blockers).toEqual(["adsense-gates-not-ready"])
    expect(adapter).not.toHaveBeenCalled()
  })

  it("adding a registry entry or falsy-looking strings never opts a page in", () => {
    const policy = { ...hypotheticalPolicy, enabled: "false", placements: [{
      ...hypotheticalPolicy.placements[0], path: "/study/n10-009",
    }] } as unknown as PublisherPolicy
    const assessment = assessPublisherIntegration("journey", "/study/n10-009", { policy })
    expect(assessment.ready).toBe(false)
    expect(assessment.blockers).toContain("global-disabled")
    expect(assessment.blockers).toContain("route-not-approved")
  })
})
