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
import { EXAM_IDS } from "./exam-ids"

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
  // Informational pages. Same machinery as the exam guides (sitemap, noscript,
  // footer, IndexNow, cross-links) because they are the same kind of thing to a
  // crawler: a static page we want indexed.
  hub: "/it-certification-practice-tests",
  scores: "/it-certification-passing-scores",
  order: "/which-it-certification-first",
  method: "/how-our-questions-are-made",
  // Reference sheets: same static-page machinery, evergreen search surfaces.
  ports: "/common-network-ports",
  ccnacli: "/ccna-cli-commands",
  cables: "/a-plus-cables-and-connectors",
  cloudsvc: "/aws-azure-service-comparison",
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
  hub: "All IT cert practice tests",
  scores: "Passing scores",
  order: "Which cert first?",
  method: "How questions are made",
  ports: "Ports & protocols",
  ccnacli: "CCNA CLI commands",
  cables: "Cables & connectors",
  cloudsvc: "AWS vs Azure services",
}

export const GUIDE_KEYS = Object.keys(GUIDE_PATHS) as GuideKey[]

/** Deep-linkable app routes that are served by the SPA rather than a static file. */
export const LEGAL_PATHS = ["/privacy", "/terms", "/delete-account"] as const

/**
 * App screens that own a URL.
 *
 * Every screen used to live at "/", which meant browsing the app created no
 * history entries at all and the browser's back button walked straight off the
 * site. These are client-rendered (no prerender), so they stay out of the
 * sitemap, but they must resolve rather than 404.
 */
export const APP_PATHS = ["/exams", "/progress"] as const

/**
 * Owner-only report triage. Kept out of APP_PATHS, which is the list of
 * user-facing screens, but it still has to be a known path or the worker would
 * 404 the shell and the page could never be opened directly.
 *
 * That 404 was never the access control — /api/admin/* checks the session. This
 * just avoids advertising the route in the footer, sitemap or nav.
 */
export const ADMIN_PATH = "/admin"

/** Sub-pages under /exam/:id. "" is the exam's own menu. */
export const EXAM_SUBPATHS = ["", "drill", "quiz", "results", "stats"] as const

export const examPath = (examId: string, sub: (typeof EXAM_SUBPATHS)[number] = "") =>
  sub ? `/exam/${examId}/${sub}` : `/exam/${examId}`

/**
 * Parse `/exam/:id[/sub]`. Returns null for anything else, and for an exam id
 * that does not exist — otherwise `/exam/nonsense` would answer 200 and put the
 * soft-404 hole back.
 */
export function parseExamPath(pathname: string): { examId: string; sub: string } | null {
  const m = /^\/exam\/([^/]+)(?:\/([^/]+))?\/?$/.exec(pathname)
  if (!m) return null
  const [, examId, sub = ""] = m
  if (!EXAM_IDS.includes(examId)) return null
  if (!(EXAM_SUBPATHS as readonly string[]).includes(sub)) return null
  return { examId, sub }
}

/**
 * Everything that should return 200. Anything else under a non-asset path is a
 * genuine 404 — previously the SPA fallback answered every URL on the internet
 * with the landing page and HTTP 200, a soft-404 across the whole path space.
 */
export const KNOWN_PATHS: readonly string[] = [
  "/",
  ...Object.values(GUIDE_PATHS),
  ...LEGAL_PATHS,
  ...APP_PATHS,
  ADMIN_PATH,
]

/**
 * `true` for the 16 static guide pages. The worker serves these a different
 * Content-Security-Policy: they carry the Grow script (and someday maybe ads),
 * which the app's strict CSP must never admit. Tolerates one trailing slash
 * like isKnownPath.
 */
export function isGuidePath(pathname: string): boolean {
  if (pathname.includes("//")) return false
  const p = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname
  return (Object.values(GUIDE_PATHS) as string[]).includes(p)
}

/** `true` for a path the site actually serves, tolerating one trailing slash. */
export function isKnownPath(pathname: string): boolean {
  // "//" would otherwise normalize to "/" and answer 200 for a path we never
  // serve; a doubled slash is never one of ours.
  if (pathname.includes("//")) return false
  const p = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname
  return KNOWN_PATHS.includes(p) || parseExamPath(p) !== null
}
