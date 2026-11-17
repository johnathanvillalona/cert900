import { GUIDE_PATHS } from "../data/routes"

/** Dependency-free advertising policy shared by the browser entry, the
 * prerenderer and the Cloudflare Worker. Imports only the route list so the
 * Worker bundle never drags the exam registry in (see routes.ts). The pilot
 * guide is validated against the study-resource registry in
 * advertising-policy.ts, which application code imports instead of this file.
 */
export const GUIDE_PLACEMENTS = ["guide-primary", "guide-secondary"] as const
export type GuidePlacement = (typeof GUIDE_PLACEMENTS)[number]

/** Where a consent signal may permit a request. `tcf-only` is the original
 * EEA/UK/CH behaviour: an explicit Google CMP TCF consent is the only grant.
 * `tcf-and-non-tcf` additionally allows documents where Google's CMP reports
 * that TCF does not apply, subject to Global Privacy Control, US state opt-out
 * status and consent-mode values. Everything else stays blocked.
 */
export const ADVERTISING_REGIONS = ["tcf-only", "tcf-and-non-tcf"] as const
export type AdvertisingRegions = (typeof ADVERTISING_REGIONS)[number]

export interface AdvertisingPolicy {
  readonly enabled: boolean
  readonly siteApproved: boolean
  readonly cmpVerified: boolean
  readonly publisher: string
  readonly regions: AdvertisingRegions
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
  regions: "tcf-only",
  placements: Object.freeze({
    "guide-primary": Object.freeze({ enabled: false, slot: "" }),
    "guide-secondary": Object.freeze({ enabled: false, slot: "" }),
  }),
})

/** The single allowlisted document. advertising-policy.ts asserts at startup
 * that this is still the registered primary Network+ guide.
 */
export const ADVERTISING_GUIDE_PATH: string = GUIDE_PATHS.nplus

/** Worker-served runtime switch read by the browser before any ad or consent
 * script loads. `{ "enabled": true }` is the only value that permits loading.
 */
export const ADVERTISING_CONFIG_PATH = "/advertising-config.json"

/** Cloudflare variable `ADVERTISING_RUNTIME`. Only the exact string `on`
 * enables the runtime; `off`, unset, `ON`, `true` or padding all disable it,
 * so an edited or missing variable always fails closed.
 */
export function advertisingRuntimeEnabled(value: unknown): boolean {
  return value === "on"
}

/** Shape check for the runtime config document; anything else is disabled. */
export function advertisingConfigEnabled(input: unknown): boolean {
  if (!input || typeof input !== "object" || Array.isArray(input)) return false
  return (input as { enabled?: unknown }).enabled === true
}

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
