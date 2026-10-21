import { ADMIN_PATH, isKnownPath, LEGAL_PATHS, parseExamPath } from "../data/routes"
import { SITE_URL } from "./site"

/** Public descriptions only. Never derive these from accounts, attempts or query strings. */
export interface PageMetadata {
  title: string
  description: string
  canonical: string | null
  indexable: boolean
}

// These are public policies/instructions, not authenticated account operations.
// Deletion instructions remain discoverable for users seeking data-removal help.
export const LEGAL_METADATA = {
  "/privacy": {
    title: "Privacy policy | Cert900",
    description: "How Cert900 handles local study progress, optional accounts, analytics consent, cookies and data deletion. Read our privacy policy and contact information.",
    canonical: `${SITE_URL}/privacy`, indexable: true,
  },
  "/terms": {
    title: "Terms of use | Cert900",
    description: "Terms for using Cert900's free certification study resources, original practice content and simulations, including disclaimers and acceptable use.",
    canonical: `${SITE_URL}/terms`, indexable: true,
  },
  "/delete-account": {
    title: "Delete your account | Cert900",
    description: "Public instructions for deleting a Cert900 account and synced progress, clearing local data, and contacting support if you cannot sign in.",
    canonical: `${SITE_URL}/delete-account`, indexable: true,
  },
} satisfies Record<(typeof LEGAL_PATHS)[number], PageMetadata>

export function homeMetadata(title: string): PageMetadata {
  return { title, canonical: `${SITE_URL}/`, indexable: true,
    description: "Free practice exams for CompTIA (A+, Network+, Security+), Cisco (CCNA), AWS, and Microsoft Azure certifications. Timed simulations in each exam's real format, performance-based questions, adaptive drills, and a free study video for every topic you miss. No sign-up." }
}

export const NOT_FOUND_METADATA: PageMetadata = {
  title: "Page not found | Cert900", description: "This Cert900 page could not be found. Browse the available certification study resources and practice exams.",
  canonical: null, indexable: false,
}

/** null leaves the independently prerendered homepage/educational metadata intact. */
export function metadataForPath(pathname: string): PageMetadata | null {
  // Accept pathname only, never a full URL, query, fragment or ambiguous separators.
  if (!pathname.startsWith("/") || /[?#]/.test(pathname) || pathname.includes("//")) return NOT_FOUND_METADATA
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname
  if (Object.hasOwn(LEGAL_METADATA, path)) return LEGAL_METADATA[path as keyof typeof LEGAL_METADATA]
  const application = (title: string, description: string): PageMetadata => ({ title, description, canonical: null, indexable: false })
  if (path === "/exams") return application("Choose a certification | Cert900", "Choose a certification and open its practice tools or existing Study Hub.")
  if (path === "/progress") return application("Study progress | Cert900", "View your Cert900 study progress on this device. Account and progress information is not public search content.")
  if (path === "/plan") return application("Study plans | Cert900", "Create and view your Cert900 study plans. Personal plans are not public search content.")
  // Preserve the existing non-descriptive admin title; metadata is not access control.
  if (path === ADMIN_PATH) return application("Cert900", "Cert900 application.")
  const exam = parseExamPath(path)
  if (exam) return application(`${exam.examId.toUpperCase()} practice workspace | Cert900`, `Use Cert900's practice, review and progress tools for ${exam.examId.toUpperCase()}. Attempts and account information are not public search content.`)
  return isKnownPath(path) ? null : NOT_FOUND_METADATA
}

/** Owned selectors are replaced, never stacked on stale template/client metadata. */
export const METADATA_SELECTORS = 'head title, head meta[name="description"], head meta[name="robots"], head link[rel="canonical"], head meta[property="og:title"], head meta[property="og:description"], head meta[property="og:url"], head meta[name="twitter:title"], head meta[name="twitter:description"]'

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
export function metadataMarkup(meta: PageMetadata): string {
  const title = escape(meta.title), description = escape(meta.description)
  return `<title>${title}</title><meta name="description" content="${description}"><meta name="robots" content="${meta.indexable ? "index, follow" : "noindex, follow"}">` +
    `<meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${description}">` +
    (meta.canonical ? `<link rel="canonical" href="${escape(meta.canonical)}"><meta property="og:url" content="${escape(meta.canonical)}">` : "")
}
