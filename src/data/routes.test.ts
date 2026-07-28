import { describe, it, expect } from "vitest"
import { GUIDE_KEYS, GUIDE_LABELS, GUIDE_PATHS, KNOWN_PATHS, LEGAL_PATHS, isKnownPath } from "./routes"
import { GUIDE_META } from "../screens/Guides"

/**
 * The route table is the single source for five consumers that used to keep
 * their own copies: GUIDE_META, the footer nav, the prerendered sitemap, the
 * homepage <noscript> crawl list, and the worker's IndexNow ping. Drift between
 * them is what made four exams invisible to non-JS crawlers.
 */
describe("route table", () => {
  it("covers every guide with a path and a label", () => {
    expect(GUIDE_KEYS.length).toBeGreaterThan(0)
    for (const k of GUIDE_KEYS) {
      expect(GUIDE_PATHS[k], `${k} path`).toMatch(/^\/[a-z0-9-]+$/)
      expect(GUIDE_LABELS[k], `${k} label`).toBeTruthy()
    }
  })

  it("matches GUIDE_META exactly", () => {
    expect(Object.keys(GUIDE_META).sort()).toEqual([...GUIDE_KEYS].sort())
    for (const k of GUIDE_KEYS) expect(GUIDE_META[k].path).toBe(GUIDE_PATHS[k])
  })

  it("has no duplicate paths", () => {
    const all = [...Object.values(GUIDE_PATHS), ...LEGAL_PATHS]
    expect(new Set(all).size).toBe(all.length)
  })

  it("knows the real pages and rejects everything else", () => {
    expect(isKnownPath("/")).toBe(true)
    for (const p of KNOWN_PATHS) expect(isKnownPath(p), p).toBe(true)
    // Trailing slash is the same page, not a 404.
    expect(isKnownPath(`${GUIDE_PATHS.nplus}/`)).toBe(true)

    for (const bad of [
      "/nope",
      "/comptia-a-plus-practice-test-xyz",
      "/wp-login.php",
      "/comptia",
      "//",
      "/privacy/extra",
    ]) {
      expect(isKnownPath(bad), bad).toBe(false)
    }
  })
})
