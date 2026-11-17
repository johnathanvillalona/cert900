import { isGuidePath } from "../src/data/routes"
import {
  ADVERTISING, ADVERTISING_GUIDE_PATH, GUIDE_PLACEMENTS, advertisingRuntimeEnabled, placementForGuide, type AdvertisingPolicy,
} from "../src/lib/advertising-core"

// CSP allows exactly what index.html ships: self-hosted assets, the two inline
// scripts (theme boot + beacon loader), and Cloudflare Web Analytics. The
// media.ethicalads.io / server.ethicalads.io hosts pre-authorize EthicalAds
// (script + creative + ad-decision fetch) so the ad unit works the moment
// ADS.enabled flips in site.ts -- no worker change needed then. Harmless while
// ads are off: with an empty publisherId the script is never loaded, so these
// hosts are never contacted. Confirm the decision host in DevTools when first
// enabling, in case EthicalAds changes it.
export const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://media.ethicalads.io https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://media.ethicalads.io https://www.google-analytics.com https://region1.google-analytics.com",
  "font-src 'self'",
  "connect-src 'self' https://cloudflareinsights.com https://server.ethicalads.io https://www.google-analytics.com https://region1.google-analytics.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://accounts.google.com",
  "object-src 'none'",
].join("; ")

const GROW_HOSTS = "https://grow.me https://*.grow.me"

/**
 * The static guide pages get their own, slightly wider CSP: the app policy
 * above plus the grow.me hosts for the Grow script (see tools/prerender.tsx).
 * frame-src exists here and not above because Grow's favourites sign-in
 * renders in an iframe; the strict app CSP inherits frame-src from
 * `default-src 'self'` and stays closed.
 *
 * Advertising never widens this policy. The single allowlisted pilot document
 * gets ADVERTISING_GUIDE_CSP below, and only while the runtime switch is on.
 */
export const GUIDE_CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://www.googletagmanager.com ${GROW_HOSTS}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: https://www.google-analytics.com https://region1.google-analytics.com ${GROW_HOSTS}`,
  "font-src 'self'",
  `connect-src 'self' https://cloudflareinsights.com https://www.google-analytics.com https://region1.google-analytics.com ${GROW_HOSTS}`,
  `frame-src ${GROW_HOSTS}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ")

/**
 * The homepage carries a pathname-gated Grow snippet (Grow's install
 * verification fetches the domain root, so "/" must serve it -- see
 * tools/prerender.tsx). This is the app CSP with ONLY the grow.me hosts
 * added: NOT a reuse of GUIDE_CSP, because the landing has the Google
 * sign-in and must keep `form-action https://accounts.google.com` (and the
 * ethicalads hosts, since a session that cold-loads "/" lives under this
 * policy for its whole SPA lifetime, Dashboard included). Every app path
 * other than "/" keeps the strict CSP above.
 */
export const HOME_CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://media.ethicalads.io https://www.googletagmanager.com ${GROW_HOSTS}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: https://media.ethicalads.io https://www.google-analytics.com https://region1.google-analytics.com ${GROW_HOSTS}`,
  "font-src 'self'",
  `connect-src 'self' https://cloudflareinsights.com https://server.ethicalads.io https://www.google-analytics.com https://region1.google-analytics.com ${GROW_HOSTS}`,
  `frame-src ${GROW_HOSTS}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://accounts.google.com",
  "object-src 'none'",
].join("; ")

/**
 * Google AdSense manual unit plus Google Privacy & messaging (the certified
 * consent manager) on the ONE allowlisted pilot document, and only while the
 * Cloudflare `ADVERTISING_RUNTIME` variable is `on` and the source policy
 * would actually render a unit. Creatives render inside cross-origin frames
 * governed by their own policy, so the host list stays explicit instead of
 * `https:`. Activation re-confirms this list against Google's current
 * guidance and a Report-Only run; see docs/advertising-activation-runbook.md.
 */
const ADVERTISING_SCRIPT_HOSTS = [
  "https://pagead2.googlesyndication.com", "https://tpc.googlesyndication.com", "https://googleads.g.doubleclick.net",
  "https://www.googletagservices.com", "https://adservice.google.com", "https://ep1.adtrafficquality.google",
  "https://ep2.adtrafficquality.google", "https://fundingchoicesmessages.google.com", "https://www.google.com",
].join(" ")
const ADVERTISING_FRAME_HOSTS = [
  "https://googleads.g.doubleclick.net", "https://tpc.googlesyndication.com", "https://*.safeframe.googlesyndication.com",
  "https://www.google.com", "https://fundingchoicesmessages.google.com", "https://ep2.adtrafficquality.google",
].join(" ")
const ADVERTISING_IMG_HOSTS = [
  "https://pagead2.googlesyndication.com", "https://googleads.g.doubleclick.net", "https://tpc.googlesyndication.com",
  "https://ep1.adtrafficquality.google", "https://www.google.com",
].join(" ")
const ADVERTISING_CONNECT_HOSTS = [
  "https://pagead2.googlesyndication.com", "https://googleads.g.doubleclick.net", "https://ep1.adtrafficquality.google",
  "https://fundingchoicesmessages.google.com", "https://csi.gstatic.com", "https://www.google.com",
].join(" ")
export const ADVERTISING_GUIDE_CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://www.googletagmanager.com ${GROW_HOSTS} ${ADVERTISING_SCRIPT_HOSTS}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: https://www.google-analytics.com https://region1.google-analytics.com ${GROW_HOSTS} ${ADVERTISING_IMG_HOSTS}`,
  "font-src 'self'",
  `connect-src 'self' https://cloudflareinsights.com https://www.google-analytics.com https://region1.google-analytics.com ${GROW_HOSTS} ${ADVERTISING_CONNECT_HOSTS}`,
  `frame-src ${GROW_HOSTS} ${ADVERTISING_FRAME_HOSTS}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ")

/** Markup the Worker removes from the pilot document while the runtime
 * switch is off: the prerendered advertising entry and the reserved unit.
 * Both attributes are stable contracts with tools/prerender.tsx and AdSlot.
 */
export const ADVERTISING_STRIP_SELECTORS = ["script[data-cert900-advertising-entry]", "aside[data-guide-ad]"] as const

function normalize(pathname: string): string {
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname
}

/** Exact pilot path, runtime switch `on`, and a source policy that would
 * render at least one unit. The frozen default policy therefore yields false
 * even with the switch on, so no CSP widens until the gates commit ships.
 */
export function advertisingPilotActive(pathname: string, runtime: unknown, policy: AdvertisingPolicy = ADVERTISING): boolean {
  return pathname === ADVERTISING_GUIDE_PATH && advertisingRuntimeEnabled(runtime) &&
    GUIDE_PLACEMENTS.some(placement => !!placementForGuide(ADVERTISING_GUIDE_PATH, placement, policy))
}

/** The pilot document (one trailing slash tolerated, like isGuidePath) while
 * the runtime switch is anything but `on`.
 */
export function shouldStripAdvertising(pathname: string, runtime: unknown): boolean {
  return !pathname.includes("//") && normalize(pathname) === ADVERTISING_GUIDE_PATH && !advertisingRuntimeEnabled(runtime)
}

/** Unchanged routing for every document unless `advertising` is true. */
export function cspForPath(pathname: string, advertising: boolean): string {
  return advertising ? ADVERTISING_GUIDE_CSP : isGuidePath(pathname) ? GUIDE_CSP : pathname === "/" ? HOME_CSP : CSP
}
