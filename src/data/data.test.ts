import { describe, it, expect } from "vitest"
import { EXAMS, EXAM_ORDER } from "./index"
import { VENDORS } from "./vendors"
import { EXAM_SHORT } from "./labels"
import { EXAM_META } from "./meta"

// Minimum-count contract per exam (legacy parity for CompTIA; launch floors
// for newer exams). Counts only grow.
const EXPECTED = {
  "220-1202": { questions: 281, pbqs: 8, videos: 74, domains: 4 },
  "220-1201": { questions: 239, pbqs: 5, videos: 62, domains: 5 },
  "n10-009": { questions: 264, pbqs: 6, videos: 78, domains: 5 },
  "sy0-701": { questions: 325, pbqs: 16, videos: 120, domains: 5 },
  "aif-c01": { questions: 315, pbqs: 16, videos: 61, domains: 5 },
  // clf-c02 has no interactive items ON PURPOSE. The real CLF-C02 uses only
  // multiple choice and multiple response -- no ordering, matching, or labs --
  // so a nonzero floor here would invite someone to "fix" a correct bank.
  "clf-c02": { questions: 315, pbqs: 0, videos: 71, domains: 4 },
  "az-900": { questions: 275, pbqs: 12, videos: 62, domains: 3 },
  "sc-900": { questions: 259, pbqs: 8, videos: 58, domains: 4 },
  "ccna-200-301": { questions: 328, pbqs: 12, videos: 58, domains: 6 },
} as const

// Per-vendor video-link contract: CompTIA topics link Professor Messer pages;
// AWS/Azure topics link YouTube videos (freeCodeCamp / John Savill), often
// with a &t= timestamp into a full course.
const VIDEO_URL_RULES: Record<string, RegExp> = {
  comptia: /^https:\/\/www\.professormesser\.com\/.+\/$/,
  aws: /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}(&t=\d+s?)?$/,
  azure: /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}(&t=\d+s?)?$/,
  cisco: /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}(&t=\d+s?)?$/,
}

// Each vendor's interactive items must use only that vendor's REAL exam
// formats (per the official exam guides): AWS has ordering + matching;
// Azure Fundamentals uses build list (order) + drag and drop (match).
// "PBQ" kinds like terminal/hotspot/dragconnect are CompTIA-only.
const ALLOWED_PBQ_KINDS: Record<string, string[]> = {
  comptia: ["match", "order", "terminal", "config", "hotspot", "dragconnect"],
  aws: ["order", "match"],
  azure: ["order", "match"],
  cisco: ["match", "order", "terminal", "hotspot"],
}

describe("exam data integrity", () => {
  it("has exactly the expected exams, all in EXAM_ORDER", () => {
    expect(Object.keys(EXAMS).sort()).toEqual(Object.keys(EXPECTED).sort())
    expect(EXAM_ORDER.slice().sort()).toEqual(Object.keys(EXPECTED).sort())
  })

  it("EXAM_META matches the banks (regenerate with tools/gen-meta.mjs)", () => {
    // meta.ts is generated and checked in so the app chrome can render without
    // loading ~846KB of questions. If it drifts, screens show stale counts.
    expect(Object.keys(EXAM_META).sort()).toEqual(Object.keys(EXAMS).sort())
    for (const id of EXAM_ORDER) {
      const ex = EXAMS[id]
      const m = EXAM_META[id]
      expect(m.questionCount, `${id} questionCount`).toBe(ex.questions.length)
      expect(m.pbqCount, `${id} pbqCount`).toBe(ex.pbqs.length)
      expect(m.code, `${id} code`).toBe(ex.code)
      expect(m.scale, `${id} scale`).toEqual(ex.scale)
      expect(m.examMinutes, `${id} examMinutes`).toBe(ex.examMinutes)
      expect(Object.keys(m.videos).sort(), `${id} videos`).toEqual(Object.keys(ex.videos).sort())
      expect(m.domains, `${id} domains`).toEqual(ex.domains)
      expect(m.examSplit, `${id} examSplit`).toEqual(ex.examSplit)
    }
  })

  it("every exam has a short display name for dense surfaces", () => {
    // The menu/cards show EXAM_SHORT, not `${cert} ${name}`. A missing entry
    // silently falls back to ex.name, which reads wrong for the A+ cores.
    for (const id of EXAM_ORDER) {
      expect(EXAM_SHORT[id], `no EXAM_SHORT entry for ${id}`).toBeTruthy()
    }
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

      it("options carry no test-wiseness tells and stems are not near-duplicates", () => {
        for (const q of ex.questions) {
          // Long-answer tell: the keyed option must not be conspicuously longest.
          const keys = q.as ?? [q.a]
          const dis = q.o.filter((_, i) => !keys.includes(i)).map((o) => o.length)
          const mean = dis.reduce((a, b) => a + b, 0) / dis.length
          for (const k of keys) {
            expect(
              q.o[k].length > mean * 1.6 && q.o[k].length > mean + 25,
              `q${q.id} long-answer tell (key ${q.o[k].length} chars vs mean ${Math.round(mean)})`,
            ).toBe(false)
          }
          // Acronym tell: parenthetical on some options but not all.
          const withParen = q.o.filter((o) => /\([^)]{3,}\)/.test(o)).length
          expect(withParen === 0 || withParen === q.o.length, `q${q.id} lone parenthetical`).toBe(true)
        }
        // Near-duplicate stems (same threshold as tools/content-lint.mjs).
        const norm = (s: string) =>
          s.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(/\s+/).filter((w) => w.length > 3)
        const sets = ex.questions.map((q) => new Set(norm(q.x)))
        for (let i = 0; i < sets.length; i++) {
          for (let j = i + 1; j < sets.length; j++) {
            const inter = [...sets[i]].filter((w) => sets[j].has(w)).length
            const dup =
              inter / Math.max(sets[i].size, 1) > 0.62 && inter / Math.max(sets[j].size, 1) > 0.62
            expect(dup, `q${ex.questions[i].id} near-duplicates q${ex.questions[j].id}`).toBe(false)
          }
        }
      })

      it("every PBQ topic resolves and per-kind shapes are valid", () => {
        for (const p of ex.pbqs) {
          expect(ALLOWED_PBQ_KINDS[ex.vendor], `no kind rule for vendor "${ex.vendor}"`).toContain(p.kind)
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
            // The panel must require real work: at least 2 fields whose start
            // state differs from the answer. (Fields that start correct are
            // allowed as keep-as-is decoys, but the item must never open solved.)
            const needWork = p.fields.filter((f) =>
              f.type === "toggle" ? (f.initial ?? false) !== f.answer : true,
            ).length
            expect(needWork, `pbq "${p.title}" opens nearly solved`).toBeGreaterThanOrEqual(2)
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
