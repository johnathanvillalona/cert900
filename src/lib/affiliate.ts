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

/** The recommended guide for an exam, or null when affiliates are off / unmapped. */
export function studyGuideFor(examId: string): { title: string; url: string } | null {
  if (!AFFILIATE.amazonTag) return null
  const g = STUDY_GUIDES[examId]
  if (!g) return null
  const url = `https://www.amazon.com/s?k=${encodeURIComponent(g.query)}&tag=${encodeURIComponent(AFFILIATE.amazonTag)}`
  return { title: g.title, url }
}
