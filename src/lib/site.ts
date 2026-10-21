/** Site-wide config: contact, support, and (future) ad settings in one place. */

export const SITE_NAME = "Cert900"
export const SITE_URL = "https://cert900.com"
export const CONTACT_EMAIL = "johnathanv16@gmail.com"

/**
 * Where "support this project" points.
 *
 * Ko-fi leads when it is set because its free plan takes 0% of tips, while Buy
 * Me a Coffee takes 5%. (Ko-fi's free plan does charge 5% on shop sales and
 * memberships, so that preference only holds for tips.) Create the page at
 * ko-fi.com, paste the URL, and every donate link switches over on deploy.
 */
export const DONATE = {
  kofi: "",
  bmc: "https://buymeacoffee.com/sorannex",
}

/** The donate link to render. Empty string = hidden everywhere. */
export const DONATE_URL = DONATE.kofi || DONATE.bmc

/**
 * Affiliate config. Every field is inert until set, exactly like ADS: an empty
 * value renders nothing rather than a broken link.
 *
 * Worth knowing before wiring more of these up:
 * - **CompTIA has no affiliate program at all.** Only partner/reseller
 *   relationships with commitments. And its voucher terms say vouchers "may not
 *   be resold" and that resold vouchers may be voided without refunds, so
 *   reselling discounted vouchers is not an option either.
 * - A $30 book at Amazon's ~3% is about $0.90. The practice-test programs below
 *   pay 10-20% of a ~$100-400 product to the same reader, which is why
 *   `practiceOffer` outranks the book when both are configured.
 */
export const AFFILIATE = {
  /**
   * Amazon Associates. Sign up at affiliate-program.amazon.com, then put the
   * tracking tag here (e.g. "cert900-20"). FTC + Amazon both require the
   * disclosure that ships in the footer and beside each link.
   */
  amazonTag: "",
  /**
   * MeasureUp: the official practice tests for CompTIA and Microsoft. In-house
   * program at measureup.com/become-affiliate, tiered 10% / 15% / 20% by
   * lifetime volume, $50 payout floor. Paste the whole tracking URL they issue.
   */
  measureUpUrl: "",
  /**
   * Tutorials Dojo: AWS and Azure practice exams, 10%, free to join from inside
   * their portal (Billing Account > Register as an Affiliate).
   */
  tutorialsDojoUrl: "",
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

/**
 * Grow by Mediavine, on the 16 static guide pages plus a pathname-gated tag
 * on the homepage.
 *
 * Grow serves no ads. It is the prerequisite for Journey by Mediavine (the one
 * ad network reachable at this traffic level -- 1,000 sessions/month): their
 * rule is the Grow script running on the site for 30 days before you may
 * apply. Setting a site id here starts that clock; whether to actually apply
 * is a separate decision (privacy-policy rewrite, public messaging) recorded
 * in the plan and CLAUDE.md.
 *
 * tools/prerender.tsx emits both tags: unconditional in the guide pages'
 * static HTML, and a hostname+pathname==="/"-gated copy in dist/index.html
 * (Grow's install verification fetches the domain root, so "/" has to carry
 * it). The gate means a cold load of any other app route never runs Grow;
 * because it survives client-side navigation off the landing, index.css hides
 * its widget under html.spa, so it is never VISIBLE anywhere in the app.
 *
 * Get the id from grow.me: create a site, choose manual install, and the
 * snippet's data-grow-initializer contains it.
 */
export const GROW = {
  // Paused by the owner on 2026-10-21 during AdSense ownership readiness.
  // Keep this empty until any future integration and consent are reviewed.
  // The previous public site ID remains available in Git history.
  siteId: "",
}

/**
 * Mobile-app promo config. While both URLs are empty the AppPromo component
 * renders a "coming soon" line; once the apps clear review, paste the store
 * URLs here and deploy -- the promo flips to real download links with no other
 * change (the same inert-until-set pattern as ADS and AFFILIATE above).
 */
export const APP = {
  /** e.g. "https://apps.apple.com/app/id6792990489" once approved. */
  iosUrl: "",
  /** e.g. "https://play.google.com/store/apps/details?id=com.cert900.app" once live. */
  androidUrl: "",
}
