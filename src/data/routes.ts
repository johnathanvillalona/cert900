/**
 * Every real URL on the site, in one dependency-free module.
 *
 * Deliberately imports nothing: the Cloudflare Worker reads this to decide what
 * is a 404, and it must not drag the exam registry (140KB of metadata) into the
 * worker bundle to do it. Plain string literals only.
 *
 * This list used to exist in FOUR hand-maintained copies — GUIDE_META, the
 * `<noscript>` crawl list, public/sitemap.xml, the footer nav, and the IndexNow
 * ping — which drifted apart exactly as you would expect: the noscript block
 * linked 9 of 13 guides, so four exams were invisible to non-JS crawlers.
 * Everything now derives from here.
 */

/** Guide slugs, in footer/sitemap order. */
export const GUIDE_PATHS = {
  aplus: "/comptia-a-plus-practice-test",
  aplus1: "/comptia-a-plus-core-1-practice-test",
  aplus2: "/comptia-a-plus-core-2-practice-test",
  nplus: "/network-plus-practice-test",
  secplus: "/comptia-security-plus-practice-test",
  pbq: "/comptia-pbq-practice",
  ccna: "/cisco-ccna-practice-test",
  aif: "/aws-ai-practitioner-practice-test",
  clf: "/aws-cloud-practitioner-practice-test",
  saa: "/aws-solutions-architect-associate-practice-test",
  az900: "/azure-fundamentals-practice-test",
  az104: "/azure-administrator-az-104-practice-test",
  sc900: "/microsoft-sc-900-practice-test",
} as const

export type GuideKey = keyof typeof GUIDE_PATHS

/** Short labels for the footer's study-guide nav. */
export const GUIDE_LABELS: Record<GuideKey, string> = {
  aplus: "A+ practice test",
  aplus1: "A+ Core 1 practice",
  aplus2: "A+ Core 2 practice",
  nplus: "Network+ practice test",
  secplus: "Security+ practice test",
  pbq: "PBQ practice",
  ccna: "CCNA practice test",
  aif: "AWS AI Practitioner practice",
  clf: "AWS Cloud Practitioner practice",
  saa: "AWS Solutions Architect practice",
  az900: "Azure Fundamentals practice",
  az104: "AZ-104 practice test",
  sc900: "SC-900 practice test",
}

export const GUIDE_KEYS = Object.keys(GUIDE_PATHS) as GuideKey[]

/** Deep-linkable app routes that are served by the SPA rather than a static file. */
export const LEGAL_PATHS = ["/privacy", "/terms", "/delete-account"] as const

/**
 * Everything that should return 200. Anything else under a non-asset path is a
 * genuine 404 — previously the SPA fallback answered every URL on the internet
 * with the landing page and HTTP 200, a soft-404 across the whole path space.
 */
export const KNOWN_PATHS: readonly string[] = [
  "/",
  ...Object.values(GUIDE_PATHS),
  ...LEGAL_PATHS,
]

/** `true` for a path the site actually serves, tolerating one trailing slash. */
export function isKnownPath(pathname: string): boolean {
  // "//" would otherwise normalize to "/" and answer 200 for a path we never
  // serve; a doubled slash is never one of ours.
  if (pathname.includes("//")) return false
  const p = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname
  return KNOWN_PATHS.includes(p)
}
