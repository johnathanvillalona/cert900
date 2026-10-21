import { describe, it, expect } from "vitest"
import { ADMIN_PATH, APP_PATHS, EXAM_SUBPATHS, GUIDE_KEYS, GUIDE_LABELS, GUIDE_PATHS, KNOWN_PATHS, LEGAL_PATHS, STUDY_PATHS, examPath, isGuidePath, isKnownPath, parseExamPath, parseStudyPath, studyPath } from "./routes"
import { EXAM_IDS } from "./exam-ids"
import { GUIDE_META } from "./guide-meta"

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
    const all = [...Object.values(GUIDE_PATHS), ...STUDY_PATHS, ...LEGAL_PATHS]
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

describe("static study hub paths", () => {
  it("covers each supported certification once and preserves canonical guide paths", () => {
    expect(STUDY_PATHS).toEqual(EXAM_IDS.map(id => `/study/${id}`))
    expect(STUDY_PATHS).toHaveLength(11)
    expect(new Set(STUDY_PATHS).size).toBe(EXAM_IDS.length)
    for (const id of EXAM_IDS) {
      const path = studyPath(id)
      expect(path).toBe(`/study/${id}`)
      expect(parseStudyPath(path)).toBe(id)
      expect(parseStudyPath(`${path}/`)).toBe(id)
      expect(isKnownPath(path), path).toBe(true)
      expect(isKnownPath(`${path}/`), `${path}/`).toBe(true)
      // Hubs retain the strict application CSP rather than admitting ads.
      expect(isGuidePath(path), path).toBe(false)
      expect(isGuidePath(`${path}/`), `${path}/`).toBe(false)
      expect(Object.values(GUIDE_PATHS)).not.toContain(path)
    }
  })

  it("rejects unavailable hubs, nested paths and malformed separators", () => {
    for (const path of [
      "/study", "/study/", "/study/not-an-exam", "/study/220-1201/extra",
      "/study/220-1201//", "/study//220-1201", "//study/220-1201",
      "/Study/220-1201", "/study/SY0-701", "/study/220-1201?query=1",
      "/study/220-1201#topic", "/exam/220-1201", "/study/220-1201/../sy0-701",
    ]) {
      expect(parseStudyPath(path), path).toBeNull()
    }
    for (const path of ["/study/not-an-exam", "/study/220-1201/extra", "/study//220-1201", "/study/220-1201//"]) {
      expect(isKnownPath(path), path).toBe(false)
    }
  })
})

/**
 * App screens gained URLs so the browser's back button works: every screen used
 * to live at "/", which created no history entries at all.
 */
describe("app screen paths", () => {
  it("builds exam paths and round-trips them", () => {
    expect(examPath("sy0-701")).toBe("/exam/sy0-701")
    expect(examPath("sy0-701", "drill")).toBe("/exam/sy0-701/drill")
    for (const sub of EXAM_SUBPATHS) {
      const parsed = parseExamPath(examPath("sy0-701", sub))
      expect(parsed, `${sub || "(menu)"} should parse`).toEqual({ examId: "sy0-701", sub })
    }
  })

  it("resolves every real exam id", () => {
    for (const id of EXAM_IDS) expect(parseExamPath(`/exam/${id}`)?.examId, id).toBe(id)
  })

  /** Otherwise /exam/anything would answer 200 and reopen the soft-404 hole. */
  it("rejects unknown exams and unknown sub-pages", () => {
    expect(parseExamPath("/exam/not-an-exam")).toBeNull()
    expect(parseExamPath("/exam/sy0-701/nonsense")).toBeNull()
    expect(parseExamPath("/exam/sy0-701/drill/extra")).toBeNull()
    expect(parseExamPath("/exam/")).toBeNull()
    expect(parseExamPath("/exams")).toBeNull()
    expect(isKnownPath("/exam/not-an-exam")).toBe(false)
  })

  it("serves the app paths rather than 404ing them", () => {
    for (const p of ["/exams", "/progress", "/exam/sy0-701", "/exam/az-104/stats"]) {
      expect(isKnownPath(p), p).toBe(true)
    }
  })

  /**
   * /admin must resolve (so it can be opened directly) without joining the
   * user-facing screen list that the footer and nav iterate. Access control is
   * the session check on /api/admin/*, never the 404.
   */
  it("resolves /admin without listing it as a user-facing screen", () => {
    expect(isKnownPath(ADMIN_PATH)).toBe(true)
    expect(APP_PATHS).not.toContain(ADMIN_PATH)
    expect(Object.values(GUIDE_PATHS)).not.toContain(ADMIN_PATH)
    expect(LEGAL_PATHS).not.toContain(ADMIN_PATH)
  })

  /**
   * isGuidePath selects which Content-Security-Policy a page gets: guides carry
   * the Grow script and get the wider policy, everything else keeps the strict
   * one. A false positive here hands an app page the ad-adjacent CSP.
   */
  it("classifies guide paths for the CSP split, and nothing else", () => {
    for (const p of Object.values(GUIDE_PATHS)) {
      expect(isGuidePath(p), p).toBe(true)
      expect(isGuidePath(`${p}/`), `${p}/`).toBe(true)
    }
    for (const p of ["/", "/exams", "/progress", "/privacy", ADMIN_PATH, "/exam/sy0-701", "/exam/sy0-701/quiz", "/nope", `//${GUIDE_PATHS.nplus.slice(1)}`]) {
      expect(isGuidePath(p), p).toBe(false)
    }
  })
})
