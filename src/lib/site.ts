/** Site-wide config: contact, support, and (future) ad settings in one place. */

export const SITE_NAME = "CompTIA Practice Trainer"
export const SITE_URL = "https://comptia-practice-trainer.johnathanv16.workers.dev"
export const CONTACT_EMAIL = "johnathanv16@gmail.com"

/** Donation link. Empty string = the support link is hidden everywhere. */
export const DONATE_URL = ""

/**
 * Ad configuration. Ads stay off until a network is chosen post-launch.
 * When enabled, AdSlot renders only in its two approved placements
 * (Results bottom, Dashboard bottom). Never inside the quiz flow.
 */
export const ADS = {
  enabled: false as boolean,
  /** e.g. "ethicalads" | "carbon" | "adsense" once chosen */
  provider: "",
}
