import { describe, it, expect } from "vitest"
import { GUIDE_EXAMS, GUIDE_META } from "./guide-meta"
import { GUIDE_SAMPLES } from "./guide-samples"
import { EXAM_META, EXAM_ORDER } from "./meta"
import { GUIDE_KEYS } from "./routes"
import { selectGuideSamples } from "../lib/guide-sample-selection"

/**
 * The guide pages are the site's whole organic surface, and their bodies are
 * interpolated from the banks. These lock the parts that would silently degrade
 * a page rather than break a build.
 */
describe("guide sample questions", () => {
  it("covers every exam", () => {
    for (const id of EXAM_ORDER) {
      expect(GUIDE_SAMPLES[id], `${id} has no samples`).toBeDefined()
      expect(GUIDE_SAMPLES[id].length, `${id} sample count`).toBeGreaterThanOrEqual(8)
    }
  })

  it("spreads samples across each exam's domains", () => {
    for (const id of EXAM_ORDER) {
      const domains = new Set(GUIDE_SAMPLES[id].map((q) => q.domain))
      const available = Object.keys(EXAM_META[id].domains).length
      // Every domain, or as many as there are samples to go round.
      expect(domains.size, `${id} covers ${domains.size} of ${available} domains`).toBe(
        Math.min(available, GUIDE_SAMPLES[id].length),
      )
    }
  })

  it("renders a usable question: valid key, four options, an explanation", () => {
    for (const id of EXAM_ORDER) {
      for (const q of GUIDE_SAMPLES[id]) {
        expect(q.o.length, `${id} q${q.id} option count`).toBe(4)
        expect(q.a).toBeGreaterThanOrEqual(0)
        expect(q.a, `${id} q${q.id} answer index`).toBeLessThan(q.o.length)
        // The answer sits in a <details> and in the Quiz schema; both should
        // offer a meaningful explanation without promising a rich result.
        expect(q.e.length, `${id} q${q.id} explanation`).toBeGreaterThan(20)
        expect(new Set(q.o).size, `${id} q${q.id} duplicate options`).toBe(q.o.length)
      }
    }
  })

  it("never repeats a question within one exam's set", () => {
    for (const id of EXAM_ORDER) {
      const ids = GUIDE_SAMPLES[id].map((q) => q.id)
      expect(new Set(ids).size, `${id} repeats a sample`).toBe(ids.length)
    }
  })
})

describe("shared public guide sample selection", () => {
  it("preserves a single exam's generated order and default limit", () => {
    for (const examId of EXAM_ORDER) {
      expect(selectGuideSamples([examId])).toEqual(
        GUIDE_SAMPLES[examId].slice(0, 8).map((sample) => ({ examId, sample })),
      )
    }
  })

  it("alternates both A+ cores so visible samples and structured data agree", () => {
    const exams = ["220-1201", "220-1202"] as const
    expect(selectGuideSamples(exams)).toEqual(
      Array.from({ length: 4 }, (_, index) =>
        exams.map((examId) => ({ examId, sample: GUIDE_SAMPLES[examId][index] })),
      ).flat(),
    )
  })

  it("honors shorter limits without taking an extra question from a lane", () => {
    const selected = selectGuideSamples(["220-1201", "220-1202"], 3)
    expect(selected.map(({ examId }) => examId)).toEqual(["220-1201", "220-1202", "220-1201"])
    expect(selected[2].sample).toBe(GUIDE_SAMPLES["220-1201"][1])
    expect(selectGuideSamples(["220-1201"], 0)).toEqual([])
    expect(selectGuideSamples(["220-1201"], -1)).toEqual([])
  })

  it("stops at the available samples and safely skips missing exams", () => {
    expect(selectGuideSamples([])).toEqual([])
    expect(selectGuideSamples(["not-an-exam"])).toEqual([])
    const selected = selectGuideSamples(["not-an-exam", "220-1201"], 100)
    expect(selected).toEqual(GUIDE_SAMPLES["220-1201"].map((sample) => ({ examId: "220-1201", sample })))
  })

  it("returns all samples in each exam's order when the limit exceeds the catalog", () => {
    const examIds = ["220-1201", "220-1202"]
    const selected = selectGuideSamples(examIds, 100)
    expect(selected).toHaveLength(examIds.reduce((count, id) => count + GUIDE_SAMPLES[id].length, 0))
    for (const examId of examIds) {
      expect(selected.filter((entry) => entry.examId === examId).map(({ sample }) => sample))
        .toEqual(GUIDE_SAMPLES[examId])
    }
  })

  it("does not mutate exam IDs or generated samples", () => {
    const examIds = Object.freeze(["220-1201", "220-1202"])
    const before = JSON.stringify(GUIDE_SAMPLES)
    const selected = selectGuideSamples(examIds)
    selected.reverse()
    expect(examIds).toEqual(["220-1201", "220-1202"])
    expect(JSON.stringify(GUIDE_SAMPLES)).toBe(before)
    expect(selectGuideSamples(examIds)[0].sample).toBe(GUIDE_SAMPLES["220-1201"][0])
  })
})

describe("guide/exam wiring", () => {
  it("declares an exam set for every guide", () => {
    expect(Object.keys(GUIDE_EXAMS).sort()).toEqual([...GUIDE_KEYS].sort())
  })

  it("points only at exams that exist", () => {
    for (const [key, ids] of Object.entries(GUIDE_EXAMS)) {
      for (const id of ids) expect(EXAM_META[id], `${key} -> ${id}`).toBeDefined()
    }
  })

  /**
   * Pages with no exam show no sample questions and get no Quiz schema. These
   * are the PBQ overview, informational pages and reference sheets. Any other
   * key landing here means an exam guide silently lost its questions.
   */
  const SAMPLE_LESS = ["pbq", "hub", "scores", "order", "method", "ports", "ccnacli", "cables", "cloudsvc"]

  it("gives every exam guide questions to show", () => {
    const empty = GUIDE_KEYS.filter((k) => GUIDE_EXAMS[k].length === 0)
    expect(empty.sort()).toEqual([...SAMPLE_LESS].sort())
  })

  it("keeps every guide's meta complete", () => {
    for (const key of GUIDE_KEYS) {
      const m = GUIDE_META[key]
      // Google truncates titles past ~60 and descriptions past ~160, but a
      // longer description still gets used as a snippet source, so only the
      // floor is enforced.
      expect(m.title.length, `${key} title`).toBeGreaterThan(20)
      expect(m.description.length, `${key} description`).toBeGreaterThan(80)
      expect(m.h1.length, `${key} h1`).toBeGreaterThan(10)
      expect(m.faq.length, `${key} faq`).toBeGreaterThanOrEqual(3)
    }
  })

  /**
   * Any question count quoted in a description must equal what the guide's
   * exams actually hold. The A+ page advertised 621 against 715 and Network+
   * 315 against 355 because those numbers were typed in by hand.
   */
  it("quotes question counts that match the banks", () => {
    const siteTotal = EXAM_ORDER.reduce((a, id) => a + EXAM_META[id].questionCount, 0)
    for (const key of GUIDE_KEYS) {
      const claimed = GUIDE_META[key].description.match(/([\d,]+) original questions/)
      if (!claimed) continue
      // A per-exam guide quotes its own exams' total; a site-wide page quotes
      // the whole bank.
      const expected = GUIDE_EXAMS[key].length
        ? GUIDE_EXAMS[key].reduce((a, id) => a + EXAM_META[id].questionCount, 0)
        : siteTotal
      expect(Number(claimed[1].replace(/,/g, "")), `${key} description`).toBe(expected)
    }
  })
})
