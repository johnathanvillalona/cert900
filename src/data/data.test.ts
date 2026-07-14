import { describe, it, expect } from "vitest"
import { EXAMS, EXAM_ORDER } from "./index"

// Parity contract with the legacy app (the source of truth at extraction time).
const EXPECTED = {
  "220-1202": { questions: 281, pbqs: 8, videos: 74, domains: 4 },
  "220-1201": { questions: 239, pbqs: 5, videos: 62, domains: 5 },
  "n10-009": { questions: 264, pbqs: 6, videos: 78, domains: 5 },
} as const

describe("exam data integrity", () => {
  it("has exactly the expected exams, all in EXAM_ORDER", () => {
    expect(Object.keys(EXAMS).sort()).toEqual(Object.keys(EXPECTED).sort())
    expect(EXAM_ORDER.slice().sort()).toEqual(Object.keys(EXPECTED).sort())
  })

  for (const [id, exp] of Object.entries(EXPECTED)) {
    describe(id, () => {
      const ex = EXAMS[id]

      it("matches extraction-time counts (no silent data loss)", () => {
        expect(ex.questions.length).toBeGreaterThanOrEqual(exp.questions)
        expect(ex.pbqs.length).toBeGreaterThanOrEqual(exp.pbqs)
        expect(Object.keys(ex.videos).length).toBeGreaterThanOrEqual(exp.videos)
        expect(Object.keys(ex.domains).length).toBe(exp.domains)
      })

      it("every question topic resolves to a video with a matching domain", () => {
        for (const q of ex.questions) {
          const v = ex.videos[q.t]
          expect(v, `question ${q.id} topic "${q.t}"`).toBeDefined()
          expect(q.d).toBe(v.d)
        }
      })

      it("every question has a valid answer index and 2+ options", () => {
        for (const q of ex.questions) {
          expect(q.o.length, `question ${q.id}`).toBeGreaterThanOrEqual(2)
          expect(q.a, `question ${q.id}`).toBeGreaterThanOrEqual(0)
          expect(q.a, `question ${q.id}`).toBeLessThan(q.o.length)
          expect(q.e.length, `question ${q.id} explanation`).toBeGreaterThan(0)
        }
      })

      it("every PBQ topic resolves and match indices are valid", () => {
        for (const p of ex.pbqs) {
          expect(ex.videos[p.t], `pbq "${p.title}" topic "${p.t}"`).toBeDefined()
          if (p.kind === "match") {
            for (const item of p.items) {
              expect(item.a, `pbq "${p.title}" item "${item.l}"`).toBeGreaterThanOrEqual(0)
              expect(item.a, `pbq "${p.title}" item "${item.l}"`).toBeLessThan(p.choices.length)
            }
          } else {
            expect(p.steps.length, `pbq "${p.title}"`).toBeGreaterThanOrEqual(3)
          }
        }
      })

      it("examSplit covers every domain and sums to 1.0", () => {
        const domains = Object.keys(ex.domains).map(Number)
        const splitKeys = Object.keys(ex.examSplit).map(Number)
        expect(splitKeys.sort()).toEqual(domains.sort())
        const sum = Object.values(ex.examSplit).reduce((a, b) => a + b, 0)
        expect(Math.abs(sum - 1)).toBeLessThan(0.001)
      })

      it("every video URL is a well-formed Professor Messer link", () => {
        for (const [key, v] of Object.entries(ex.videos)) {
          expect(v.u, `video "${key}"`).toMatch(/^https:\/\/www\.professormesser\.com\/.+\/$/)
          expect(v.n.length, `video "${key}" title`).toBeGreaterThan(0)
          expect(ex.domains[v.d], `video "${key}" domain ${v.d}`).toBeDefined()
        }
      })

      it("question ids are unique", () => {
        const ids = new Set(ex.questions.map((q) => q.id))
        expect(ids.size).toBe(ex.questions.length)
      })
    })
  }
})
