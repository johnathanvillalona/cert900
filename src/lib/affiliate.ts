import { AFFILIATE } from "./site"

/**
 * A recommended study guide per exam, shown as a SECONDARY option beside the
 * free video on the Results screen. The free resource always leads; a book is
 * the "prefer paper?" alternative, never the headline.
 *
 * Each entry is a human title plus the Amazon search query that finds its
 * current edition. We link to a tagged SEARCH results page rather than a fixed
 * product ASIN so the link never rots when a new edition ships (the SY0-701
 * guide alone has had several). Swap `query` for a specific product URL later
 * if a title converts well enough to be worth the maintenance.
 */
interface StudyGuide {
  title: string
  query: string
}

export const STUDY_GUIDES: Record<string, StudyGuide> = {
  "220-1201": { title: "CompTIA A+ Certification All-in-One Exam Guide (Meyers)", query: "CompTIA A+ 220-1201 study guide" },
  "220-1202": { title: "CompTIA A+ Certification All-in-One Exam Guide (Meyers)", query: "CompTIA A+ 220-1202 study guide" },
  "n10-009": { title: "CompTIA Network+ Study Guide (Sybex)", query: "CompTIA Network+ N10-009 study guide" },
  "sy0-701": { title: "CompTIA Security+ Study Guide (Sybex)", query: "CompTIA Security+ SY0-701 study guide" },
  "aif-c01": { title: "AWS Certified AI Practitioner Study Guide", query: "AWS Certified AI Practitioner AIF-C01 study guide" },
  "clf-c02": { title: "AWS Certified Cloud Practitioner Study Guide (Sybex)", query: "AWS Certified Cloud Practitioner CLF-C02 study guide" },
  "az-900": { title: "Microsoft Azure Fundamentals AZ-900 Exam Ref", query: "Microsoft Azure Fundamentals AZ-900 exam ref" },
}

export const AMAZON_DISCLOSURE = "As an Amazon Associate, cert900 earns from qualifying purchases."
export const AFFILIATE_DISCLOSURE = "Affiliate link: cert900 earns a commission if you buy, at no extra cost to you."

/** The recommended guide for an exam, or null when affiliates are off / unmapped. */
export function studyGuideFor(examId: string): { title: string; url: string } | null {
  if (!AFFILIATE.amazonTag) return null
  const g = STUDY_GUIDES[examId]
  if (!g) return null
  const url = `https://www.amazon.com/s?k=${encodeURIComponent(g.query)}&tag=${encodeURIComponent(AFFILIATE.amazonTag)}`
  return { title: g.title, url }
}

/**
 * A paid practice-test partner for this exam's vendor, or null.
 *
 * Split by vendor because the two programs do not overlap: MeasureUp publishes
 * the OFFICIAL practice tests for CompTIA and Microsoft, Tutorials Dojo is the
 * AWS/Azure one people actually recommend. Cisco gets nothing on purpose --
 * Boson is the name worth recommending for CCNA and it has no affiliate
 * program, and pointing at a worse product for a commission is how a free site
 * loses the trust that makes it worth visiting.
 */
export function practiceOffer(vendor: string): { title: string; note: string; url: string } | null {
  if ((vendor === "comptia" || vendor === "azure") && AFFILIATE.measureUpUrl) {
    return {
      title: "MeasureUp practice tests",
      note: "The official practice tests, written under licence from the exam vendor.",
      url: AFFILIATE.measureUpUrl,
    }
  }
  if (vendor === "aws" && AFFILIATE.tutorialsDojoUrl) {
    return {
      title: "Tutorials Dojo practice exams",
      note: "Long-form AWS practice sets with detailed answer breakdowns.",
      url: AFFILIATE.tutorialsDojoUrl,
    }
  }
  return null
}
