/**
 * Marketing copy derived from the exam registry.
 *
 * Every fact here used to be retyped by hand, and every one of them went stale
 * as exams were added: the landing FAQ still said "Seven" and "all three
 * vendors" at eleven exams and four vendors, and guide descriptions still
 * quoted question counts from two banks ago. Anything that states a count, a
 * vendor list, an exam list, or a score range belongs in this file so it
 * updates itself. `src/data/copy.test.ts` fails the build if a stale count is
 * hardcoded back into a user-visible string.
 *
 * Import-safe from the prerenderer: this module only reads generated metadata
 * (`@/data/meta`, `@/data/vendors`), never a question bank.
 */
import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import { VENDORS, VENDOR_ORDER } from "@/data/vendors"
import type { Vendor } from "@/data/types"

const WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
  "nineteen", "twenty",
]

/** "eleven" for small counts, "24" past the point where words stop helping. */
export function numberWord(n: number): string {
  return WORDS[n] ?? String(n)
}

function titleCase(s: string): string {
  return s.slice(0, 1).toUpperCase() + s.slice(1)
}

/**
 * Oxford-comma join: ["a","b","c"] -> "a, b, and c". Pass `oxford: false` for
 * ampersand joins ("a, b & c"), where the extra comma reads wrong in a title.
 */
export function joinList(items: string[], conjunction = "and", oxford = true): string {
  if (items.length === 0) return ""
  if (items.length === 1) return items[0]
  if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`
  const head = items.slice(0, -1).join(", ")
  return `${head}${oxford ? "," : ""} ${conjunction} ${items[items.length - 1]}`
}

const exams = () => EXAM_ORDER.map((id) => EXAM_META[id])

export const examCount = () => EXAM_ORDER.length
export const vendorCount = () => new Set(exams().map((e) => e.vendor)).size

/** Vendors that actually have exams, in menu order: "CompTIA, Cisco, AWS, and Azure". */
export function vendorList(conjunction = "and", oxford = true): string {
  const present = VENDOR_ORDER.filter((v) => exams().some((e) => e.vendor === v))
  return joinList(present.map((v) => VENDORS[v].short), conjunction, oxford)
}

/**
 * Every exam as "CompTIA A+ Core 1 (220-1201)", in registry order.
 *
 * Deliberately NOT grouped under a vendor heading with the vendor stripped off
 * `cert`: the two do not line up. `cert` is "CompTIA A+" for the Core exams but
 * plain "CompTIA" for Network+, and Azure's exams carry cert "Microsoft
 * Certified" against vendor short "Azure", so stripping produced both
 * "CompTIA Core 1" (lost the A+) and "Azure Azure Fundamentals".
 */
export function examList(): string {
  return joinList(exams().map((e) => `${e.cert} ${e.name} (${e.code})`))
}

/**
 * One sentence covering every scale in use, grouped by maximum score so the
 * shape survives a new vendor: "CompTIA scores 100 to 900 with pass lines from
 * 675 to 750; Cisco, AWS, and Azure report up to 1,000, passing from 700 to 825."
 */
export function scaleSummary(): string {
  const byMax = new Map<number, { vendors: Vendor[]; lo: number; hi: number }>()
  for (const e of exams()) {
    const g = byMax.get(e.scale.max) ?? { vendors: [], lo: e.scale.pass, hi: e.scale.pass }
    if (!g.vendors.includes(e.vendor)) g.vendors.push(e.vendor)
    g.lo = Math.min(g.lo, e.scale.pass)
    g.hi = Math.max(g.hi, e.scale.pass)
    byMax.set(e.scale.max, g)
  }
  const parts = [...byMax.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([max, g]) => {
      const names = VENDOR_ORDER.filter((v) => g.vendors.includes(v)).map((v) => VENDORS[v].short)
      const verb = names.length === 1 ? "scores" : "score"
      const line = g.lo === g.hi ? `passing at ${g.lo}` : `with pass lines from ${g.lo} to ${g.hi}`
      return `${joinList(names)} ${verb} up to ${max.toLocaleString("en-US")} ${line}`
    })
  return `${titleCase(parts.join("; "))}.`
}

/** The site-wide title and meta description, so the SPA and index.html cannot drift apart. */
export const siteTitle = () => `Free ${vendorList("&", false)} practice exams | Cert900`

export const siteTagline = () =>
  `Free practice exams and study guides for ${vendorList()} certifications. Each exam topic links to a free training video.`

/** Landing FAQ. Exam-agnostic by construction so it cannot go stale. */
export function siteFaq(): [string, string][] {
  return [
    [
      "Is Cert900 free?",
      "Yes. Every practice exam and study guide on Cert900 is free to use, and you do not need an account.",
    ],
    [
      "Which certification exams does Cert900 cover?",
      `Cert900 covers ${examList()}.`,
    ],
    [
      "How does scaled scoring work?",
      `Certification exams report a scaled score rather than a percentage. ${scaleSummary()} Practice exams on Cert900 use the same scales, but a practice score is an estimate and does not predict your official result.`,
    ],
    [
      "Do I need an account?",
      "No. Your progress is saved in this browser. Signing in lets you sync your progress across devices.",
    ],
  ]
}
