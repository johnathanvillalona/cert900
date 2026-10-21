import { GUIDE_META } from "../data/guide-meta"
import { primaryGuideForExam } from "../data/study-resources"

export const GUIDE_PLACEMENTS = ["guide-primary", "guide-secondary"] as const
export type GuidePlacement = (typeof GUIDE_PLACEMENTS)[number]
export interface AdvertisingPolicy {
  readonly enabled: boolean
  readonly siteApproved: boolean
  readonly cmpVerified: boolean
  readonly publisher: string
  readonly placements: Readonly<Record<GuidePlacement, { readonly enabled: boolean; readonly slot: string }>>
}

/** Public publisher identity verified against the owner's AdSense site screen.
 * Activation requires separate approval, verified Google CMP, real manual-unit
 * IDs, and an eligible-guide-only CSP review. See the runbook.
 */
export const ADVERTISING: AdvertisingPolicy = Object.freeze({
  enabled: false,
  siteApproved: false,
  cmpVerified: false,
  publisher: "ca-pub-7887703829224685",
  placements: Object.freeze({
    "guide-primary": Object.freeze({ enabled: false, slot: "" }),
    "guide-secondary": Object.freeze({ enabled: false, slot: "" }),
  }),
})

// One substantive pilot only. Adding a resource never opts it into advertising.
const pilot = primaryGuideForExam("n10-009")
if (!pilot || !pilot.primary || pilot.kind !== "guide" || pilot.path !== GUIDE_META.nplus.path) {
  throw new Error("Unavailable advertising pilot guide")
}
export const ADVERTISING_GUIDE_PATH = pilot.path

export function placementForGuide(path: string, placement: GuidePlacement, policy: AdvertisingPolicy = ADVERTISING) {
  const unit = policy.placements[placement]
  return path === ADVERTISING_GUIDE_PATH && policy.enabled === true && policy.siteApproved === true &&
    policy.cmpVerified === true && /^ca-pub-\d{16}$/.test(policy.publisher) &&
    unit.enabled === true && /^\d{10}$/.test(unit.slot)
    ? { publisher: policy.publisher, slot: unit.slot, placement } : null
}

/** Unknown hosts and query/fragment-bearing documents fail closed. */
export function advertisingDocument(url: URL): boolean {
  return url.origin === "https://cert900.com" && !url.search && !url.hash && url.pathname === ADVERTISING_GUIDE_PATH
}
