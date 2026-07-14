/** Site-wide config: contact, support, and (future) ad settings in one place. */

export const SITE_NAME = "Cert900"
export const SITE_URL = "https://cert900.com"
export const CONTACT_EMAIL = "johnathanv16@gmail.com"

/** Donation link. Empty string = the support link is hidden everywhere. */
export const DONATE_URL = "https://buymeacoffee.com/sorannex"

/**
 * Ad configuration. Ads stay off until the network approves us.
 * When enabled, AdSlot renders only in its two approved placements
 * (Results bottom, Dashboard bottom). Never inside the quiz flow.
 * EthicalAds rule: they must be the ONLY ad on the page.
 */
export const ADS = {
  enabled: false as boolean,
  provider: "ethicalads" as "ethicalads" | "",
  /** From the EthicalAds publisher dashboard after approval. */
  publisherId: "",
}
