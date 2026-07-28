import { describe, it, expect } from "vitest"
import { readFileSync, readdirSync, statSync } from "node:fs"
import { resolve, join } from "node:path"
import { EXAM_ORDER } from "./meta"
import { examCount, examList, joinList, numberWord, scaleSummary, siteFaq, siteTitle, vendorList } from "../lib/copy"

const ROOT = resolve(import.meta.dirname, "../..")

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) {
      if (name === "node_modules" || name === "dist" || name === "data") continue
      walk(p, out)
    } else if (/\.(ts|tsx)$/.test(name) && !/\.test\.tsx?$/.test(name)) {
      out.push(p)
    }
  }
  return out
}

/**
 * Copy that states how many exams or vendors the site covers must be derived
 * from the registry, never typed out. This has now shipped stale twice: the
 * landing FAQ said "Seven" and "all three vendors" at eleven exams and four
 * vendors, and the <noscript> crawl list said "seven" while linking 9 of 13
 * guides. src/lib/copy.ts is where these sentences belong.
 */
describe("no hardcoded platform counts in user-visible copy", () => {
  // Spelled-out counts are the failure mode; a bare digit is usually a real
  // exam fact ("90 questions in 90 minutes") rather than our inventory.
  // Starts at "three": "one exam" and "two exams" are genuine statements about
  // a single exam or about A+ needing both cores, not platform inventory.
  const STALE =
    /\b(three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|twenty)\s+(vendors?|exams?|certifications?|certs?)\b/i

  it("has none in src/**", () => {
    const offenders: string[] = []
    for (const file of walk(resolve(ROOT, "src"))) {
      // The rule's own documentation quotes the strings it bans.
      if (file.endsWith("copy.ts")) continue
      readFileSync(file, "utf8")
        .split("\n")
        .forEach((line, i) => {
          const m = line.match(STALE)
          if (m) offenders.push(`${file.slice(ROOT.length + 1)}:${i + 1}  ${m[0]}`)
        })
    }
    expect(offenders, `Derive these from src/lib/copy.ts:\n${offenders.join("\n")}`).toEqual([])
  })

  it("has none in index.html or the web manifest", () => {
    for (const rel of ["index.html", "public/manifest.webmanifest"]) {
      const text = readFileSync(resolve(ROOT, rel), "utf8")
      expect(STALE.test(text), `${rel} states a count that will go stale`).toBe(false)
    }
  })
})

describe("derived copy tracks the registry", () => {
  it("counts every exam and names every vendor", () => {
    expect(examCount()).toBe(EXAM_ORDER.length)
    for (const v of ["CompTIA", "Cisco", "AWS", "Azure"]) expect(vendorList()).toContain(v)
    expect(siteTitle()).toContain("Cisco")
  })

  it("lists every exam code exactly once", () => {
    const list = examList()
    for (const id of EXAM_ORDER) {
      const code = id === "ccna-200-301" ? "200-301" : id.toUpperCase()
      expect(list.toUpperCase().split(code).length - 1, `${code} in examList()`).toBe(1)
    }
  })

  it("covers every scale in use, with agreeing verbs", () => {
    const s = scaleSummary()
    expect(s).toContain("900")
    expect(s).toContain("1,000")
    // Single-vendor group takes "scores", multi-vendor takes "score".
    expect(s).toMatch(/CompTIA scores up to 900/)
    expect(s).not.toMatch(/\bCompTIA score up to/)
  })

  it("builds an FAQ with no leftover placeholders", () => {
    const faq = siteFaq()
    expect(faq.length).toBeGreaterThanOrEqual(4)
    for (const [q, a] of faq) {
      expect(q.length).toBeGreaterThan(5)
      expect(a).not.toMatch(/undefined|NaN|\[object/)
    }
  })

  it("joins lists with and without the Oxford comma", () => {
    expect(joinList(["a", "b", "c"])).toBe("a, b, and c")
    expect(joinList(["a", "b", "c"], "&", false)).toBe("a, b & c")
    expect(joinList(["a", "b"])).toBe("a and b")
    expect(joinList(["a"])).toBe("a")
    expect(joinList([])).toBe("")
  })

  it("words small numbers and falls back to digits", () => {
    expect(numberWord(11)).toBe("eleven")
    expect(numberWord(99)).toBe("99")
  })
})
