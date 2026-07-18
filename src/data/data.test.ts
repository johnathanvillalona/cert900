import { describe, it, expect } from "vitest"
import { EXAMS, EXAM_ORDER } from "./index"
import { VENDORS } from "./vendors"

// Parity contract with the legacy app (the source of truth at extraction time).
const EXPECTED = {
  "220-1202": { questions: 281, pbqs: 8, videos: 74, domains: 4 },
  "220-1201": { questions: 239, pbqs: 5, videos: 62, domains: 5 },
  "n10-009": { questions: 264, pbqs: 6, videos: 78, domains: 5 },
} as const

// Per-vendor video-link contract: CompTIA topics link Professor Messer pages;
// AWS/Azure topics link YouTube videos (freeCodeCamp / John Savill), often
// with a &t= timestamp into a full course.
const VIDEO_URL_RULES: Record<string, RegExp> = {
  comptia: /^https:\/\/www\.professormesser\.com\/.+\/$/,
  aws: /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}(&t=\d+s?)?$/,
  azure: /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}(&t=\d+s?)?$/,
}

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

      it("has a valid vendor and score scale", () => {
        expect(VENDORS[ex.vendor], `vendor "${ex.vendor}"`).toBeDefined()
        expect(ex.scale.max).toBeGreaterThan(100)
        expect(ex.scale.pass).toBeGreaterThan(100)
        expect(ex.scale.pass).toBeLessThanOrEqual(ex.scale.max)
      })

      it("every question has a valid answer index and 2+ options", () => {
        for (const q of ex.questions) {
          expect(q.o.length, `question ${q.id}`).toBeGreaterThanOrEqual(2)
          expect(q.a, `question ${q.id}`).toBeGreaterThanOrEqual(0)
          expect(q.a, `question ${q.id}`).toBeLessThan(q.o.length)
          expect(q.e.length, `question ${q.id} explanation`).toBeGreaterThan(0)
          if (q.as) {
            // multiple-response: 2+ unique valid indices, and `a` stays
            // consistent as the first correct index for legacy readers
            expect(q.as.length, `question ${q.id} as`).toBeGreaterThanOrEqual(2)
            expect(q.as.length, `question ${q.id} as`).toBeLessThan(q.o.length)
            expect(new Set(q.as).size, `question ${q.id} as dupes`).toBe(q.as.length)
            for (const i of q.as) {
              expect(i, `question ${q.id} as index`).toBeGreaterThanOrEqual(0)
              expect(i, `question ${q.id} as index`).toBeLessThan(q.o.length)
            }
            expect(q.as, `question ${q.id} a/as consistency`).toContain(q.a)
          }
        }
      })

      it("every PBQ topic resolves and per-kind shapes are valid", () => {
        for (const p of ex.pbqs) {
          expect(ex.videos[p.t], `pbq "${p.title}" topic "${p.t}"`).toBeDefined()
          if (p.kind === "match") {
            for (const item of p.items) {
              expect(item.a, `pbq "${p.title}" item "${item.l}"`).toBeGreaterThanOrEqual(0)
              expect(item.a, `pbq "${p.title}" item "${item.l}"`).toBeLessThan(p.choices.length)
            }
          } else if (p.kind === "order") {
            expect(p.steps.length, `pbq "${p.title}"`).toBeGreaterThanOrEqual(3)
          } else if (p.kind === "terminal") {
            expect(p.tasks.length, `pbq "${p.title}"`).toBeGreaterThanOrEqual(2)
            for (const task of p.tasks) {
              expect(task.accept.length, `pbq "${p.title}" task`).toBeGreaterThan(0)
              for (const pat of task.accept) expect(() => new RegExp(pat, "i"), `pbq "${p.title}" pattern ${pat}`).not.toThrow()
            }
          } else if (p.kind === "config") {
            for (const f of p.fields) {
              if (f.type === "select") {
                expect(f.options?.length, `pbq "${p.title}" field ${f.id}`).toBeGreaterThan(1)
                expect(f.answer, `pbq "${p.title}" field ${f.id}`).toBeGreaterThanOrEqual(0)
                expect(f.answer, `pbq "${p.title}" field ${f.id}`).toBeLessThan(f.options!.length)
              } else if (f.type === "toggle") {
                expect(typeof f.answer, `pbq "${p.title}" field ${f.id}`).toBe("boolean")
              } else {
                expect(Array.isArray(f.answer) && (f.answer as string[]).length > 0, `pbq "${p.title}" field ${f.id}`).toBe(true)
              }
            }
          } else if (p.kind === "hotspot") {
            const ids = new Set(p.nodes.map((n) => n.id))
            expect(p.targets.length, `pbq "${p.title}"`).toBeGreaterThan(0)
            for (const t of p.targets) expect(ids.has(t), `pbq "${p.title}" target ${t}`).toBe(true)
            for (const [a, b] of p.edges) {
              expect(ids.has(a) && ids.has(b), `pbq "${p.title}" edge ${a}-${b}`).toBe(true)
            }
          } else if (p.kind === "dragconnect") {
            const zoneIds = new Set(p.zones.map((z) => z.id))
            const itemIds = new Set(p.items.map((i) => i.id))
            expect(Object.keys(p.answer).length, `pbq "${p.title}"`).toBe(p.zones.length)
            for (const [z, it] of Object.entries(p.answer)) {
              expect(zoneIds.has(z), `pbq "${p.title}" answer zone ${z}`).toBe(true)
              expect(itemIds.has(it), `pbq "${p.title}" answer item ${it}`).toBe(true)
            }
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

      it("every video URL matches the vendor's link contract", () => {
        const rule = VIDEO_URL_RULES[ex.vendor]
        expect(rule, `no URL rule for vendor "${ex.vendor}"`).toBeDefined()
        for (const [key, v] of Object.entries(ex.videos)) {
          expect(v.u, `video "${key}"`).toMatch(rule)
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
