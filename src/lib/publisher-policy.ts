import { primaryGuideForExam } from "../data/study-resources"
import { ADVERTISING, placementForGuide, type AdvertisingPolicy } from "./advertising-policy"
import type { AdvertisingRuntime } from "./advertising"

export const PUBLISHERS = ["adsense", "infolinks", "journey", "media-net", "carbon"] as const
export type Publisher = (typeof PUBLISHERS)[number]

export interface PublisherControls {
  readonly enabled: boolean
  readonly siteApproved: boolean
  readonly termsReviewed: boolean
  /** Provider-specific consent integration review, never analytics consent. */
  readonly consentVerified: boolean
}

export interface PublisherPlacement {
  readonly id: "network-guide-primary"
  readonly kind: "guide"
  readonly path: string
  readonly enabled: boolean
  readonly providers: Readonly<Record<Publisher, boolean>>
}

export interface PublisherPolicy {
  readonly enabled: boolean
  readonly providers: Readonly<Record<Publisher, PublisherControls>>
  readonly placements: readonly PublisherPlacement[]
}

const pilot = primaryGuideForExam("n10-009")
if (!pilot || !pilot.primary || pilot.kind !== "guide") throw new Error("Unavailable publisher pilot guide")
export const PUBLISHER_PILOT_PATH = pilot.path

const disabledControls: PublisherControls = Object.freeze({
  enabled: false, siteApproved: false, termsReviewed: false, consentVerified: false,
})
const disabledProviders: Readonly<Record<Publisher, boolean>> = Object.freeze({
  adsense: false, infolinks: false, journey: false, "media-net": false, carbon: false,
})

/** Source-controlled preparation only. No provider is approved or activated here. */
export const PUBLISHER_POLICY: PublisherPolicy = Object.freeze({
  enabled: false,
  providers: Object.freeze({
    adsense: disabledControls, infolinks: disabledControls, journey: disabledControls,
    "media-net": disabledControls, carbon: disabledControls,
  }),
  placements: Object.freeze([Object.freeze({
    id: "network-guide-primary", kind: "guide", path: PUBLISHER_PILOT_PATH,
    enabled: false, providers: disabledProviders,
  })]),
})

/** A future reviewed adapter must supply its own advertising-consent reader.
 * It may reuse startAdvertising's cancellation lifecycle; this file never calls it.
 */
export type PublisherAdapter = () => AdvertisingRuntime
export type PublisherAdapters = Readonly<Partial<Record<Publisher, PublisherAdapter>>>
export const PUBLISHER_ADAPTERS: PublisherAdapters = Object.freeze({})

export type PublisherBlocker = "unknown-provider" | "global-disabled" | "provider-disabled" |
  "site-not-approved" | "terms-not-reviewed" | "consent-not-verified" | "route-not-approved" |
  "placement-disabled" | "placement-provider-disabled" | "adapter-not-implemented" | "adsense-gates-not-ready"

/** Assess preparation, not permission to request an ad. This has no side effects.
 * Source flags cannot replace a visitor's current consent. No renderer or loader
 * imports this policy, and the adapter registry is intentionally empty.
 */
export function assessPublisherIntegration(provider: string, path: string, options: {
  policy?: PublisherPolicy
  adapters?: PublisherAdapters
  adsensePolicy?: AdvertisingPolicy
} = {}) {
  const blockers: PublisherBlocker[] = []
  if (!(PUBLISHERS as readonly string[]).includes(provider)) {
    return { ready: false, blockers: ["unknown-provider"] as PublisherBlocker[], placement: null }
  }
  const publisher = provider as Publisher
  const policy = options.policy ?? PUBLISHER_POLICY
  const controls = policy.providers[publisher]
  if (policy.enabled !== true) blockers.push("global-disabled")
  if (controls.enabled !== true) blockers.push("provider-disabled")
  if (controls.siteApproved !== true) blockers.push("site-not-approved")
  if (controls.termsReviewed !== true) blockers.push("terms-not-reviewed")
  if (controls.consentVerified !== true) blockers.push("consent-not-verified")
  // Exact canonical path only. New hubs, references and catalog entries never opt in.
  const placement = path === PUBLISHER_PILOT_PATH ? policy.placements.find(item =>
    item.id === "network-guide-primary" && item.kind === "guide" && item.path === PUBLISHER_PILOT_PATH) : undefined
  if (!placement) blockers.push("route-not-approved")
  else {
    if (placement.enabled !== true) blockers.push("placement-disabled")
    if (placement.providers[publisher] !== true) blockers.push("placement-provider-disabled")
  }
  if (typeof (options.adapters ?? PUBLISHER_ADAPTERS)[publisher] !== "function") blockers.push("adapter-not-implemented")
  // A new neutral policy must never bypass the existing AdSense unit/CMP gates.
  if (publisher === "adsense" && !placementForGuide(path, "guide-primary", options.adsensePolicy ?? ADVERTISING)) {
    blockers.push("adsense-gates-not-ready")
  }
  return { ready: blockers.length === 0, blockers, placement: placement?.id ?? null }
}
