/** Site-wide config: contact, support, and (future) ad settings in one place. */

export const SITE_NAME = "Cert900"
export const SITE_URL = "https://cert900.com"
export const CONTACT_EMAIL = "johnathanv16@gmail.com"

/** Donation link. Empty string = the support link is hidden everywhere. */
export const DONATE_URL = "https://buymeacoffee.com/sorannex"

/**
 * Amazon Associates affiliate config. Inert until `amazonTag` is set: with an
 * empty tag the study-guide recommendation renders nothing, exactly like ADS.
 * Sign up at affiliate-program.amazon.com, then put your tracking tag here
 * (e.g. "cert900-20") and deploy. FTC + Amazon both require the disclosure that
 * ships in the footer and beside each link.
 */
export const AFFILIATE = {
  amazonTag: "",
}

/**
 * EthicalAds config. Stays off until they approve us (they require ~50k
 * pageviews/month) and a publisherId is filled in. When enabled the AdSlot
 * renders on the **Dashboard only** -- Results carries the affiliate
 * study-guide link instead, so a page never shows two monetization units
 * (EthicalAds requires being the only ad on the page). Never inside the quiz
 * or landing hero. To go live: set publisherId + enabled here and deploy; the
 * CSP already allows the EthicalAds hosts (worker/index.ts).
 */
export const ADS = {
  enabled: false as boolean,
  provider: "ethicalads" as "ethicalads" | "",
  /** From the EthicalAds publisher dashboard after approval. */
  publisherId: "",
}
