import { describe, it, expect } from "vitest"
import {
  commandMatches,
  shuffle,
  weightFor,
  weightedSample,
  pickMC,
  pickExamMC,
  pickExamPBQs,
  pbqScore,
  scaledScore,
  masteryLevel,
  weakTopics,
  type Rng,
} from "./engine"
import { blankProgress, validateProgressAll, type ExamProgress } from "./progress"
import { EXAMS } from "@/data/index"
import type { PBQ } from "@/data/types"

/** deterministic rng */
function seeded(seed: number): Rng {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

const core2 = EXAMS["220-1202"]
const core1 = EXAMS["220-1201"]

describe("scaledScore", () => {
  it("maps 0% to 100 and 100% to 900", () => {
    expect(scaledScore(0)).toEqual({ scaled: 100, pass: false })
    expect(scaledScore(1)).toEqual({ scaled: 900, pass: true })
  })
  it("passes exactly at 700 (75%), rounding like the legacy engine", () => {
    expect(scaledScore(0.75)).toEqual({ scaled: 700, pass: true })
    // 0.7499 rounds UP to 700 (legacy parity); clearly-below stays failing
    expect(scaledScore(0.7499)).toMatchObject({ scaled: 700, pass: true })
    expect(scaledScore(0.7493)).toMatchObject({ scaled: 699, pass: false })
  })
})

describe("pbqScore", () => {
  const match: PBQ = { kind: "match", t: "x", title: "", scen: "", choices: ["a", "b", "c"], items: [{ l: "1", a: 0 }, { l: "2", a: 1 }, { l: "3", a: 2 }, { l: "4", a: 0 }] }
  const order: PBQ = { kind: "order", t: "x", title: "", scen: "", steps: ["s0", "s1", "s2", "s3"] }

  it("gives fractional credit on match", () => {
    expect(pbqScore(match, [0, 1, 0, 0])).toBeCloseTo(0.75)
    expect(pbqScore(match, [0, 1, 2, 0])).toBe(1)
    expect(pbqScore(match, [-1, -1, -1, -1])).toBe(0)
    expect(pbqScore(match, undefined)).toBe(0)
  })
  it("scores order by position", () => {
    expect(pbqScore(order, [0, 1, 2, 3])).toBe(1)
    expect(pbqScore(order, [1, 0, 2, 3])).toBeCloseTo(0.5)
    expect(pbqScore(order, [3, 0, 1, 2])).toBe(0)
  })

  const terminal: PBQ = {
    kind: "terminal", t: "x", title: "", scen: "", host: "C:\\>",
    tasks: [
      { prompt: "show config", accept: ["ipconfig( /all)?"], output: "..." },
      { prompt: "test gateway", accept: ["ping 192\\.168\\.1\\.1"], output: "..." },
    ],
  }
  it("terminal: accepts alternatives case-insensitively with whitespace tolerance", () => {
    expect(pbqScore(terminal, ["IPCONFIG  /ALL", "ping 192.168.1.1"])).toBe(1)
    expect(pbqScore(terminal, ["ipconfig", ""])).toBeCloseTo(0.5)
    expect(pbqScore(terminal, ["ipconfig /renew", "ping 10.0.0.1"])).toBe(0)
  })
  it("commandMatches rejects empty and bad regex safely", () => {
    expect(commandMatches("", ["a"])).toBe(false)
    expect(commandMatches("x", ["("])).toBe(false)
  })

  const config: PBQ = {
    kind: "config", t: "x", title: "", scen: "", panel: "P",
    fields: [
      { id: "enc", label: "Encryption", type: "select", options: ["Open", "WEP", "WPA3"], answer: 2 },
      { id: "wps", label: "WPS", type: "toggle", answer: false, initial: true },
      { id: "ssid", label: "SSID", type: "text", answer: ["Office(Net)?"] },
    ],
  }
  it("config: per-field partial credit across all field types", () => {
    expect(pbqScore(config, [2, false, "OfficeNet"])).toBe(1)
    expect(pbqScore(config, [2, true, ""])).toBeCloseTo(1 / 3)
    expect(pbqScore(config, [-1, true, ""])).toBe(0)
  })

  const hotspot: PBQ = {
    kind: "hotspot", t: "x", title: "", scen: "", prompt: "",
    nodes: [
      { id: "a", x: 10, y: 10, label: "A", icon: "pc" },
      { id: "b", x: 50, y: 10, label: "B", icon: "switch" },
      { id: "c", x: 90, y: 10, label: "C", icon: "router" },
    ],
    edges: [["a", "b"], ["b", "c"]],
    targets: ["b", "c"],
  }
  it("hotspot: wrong selections subtract, floored at zero", () => {
    expect(pbqScore(hotspot, ["b", "c"])).toBe(1)
    expect(pbqScore(hotspot, ["b"])).toBeCloseTo(0.5)
    expect(pbqScore(hotspot, ["b", "a"])).toBe(0)
    expect(pbqScore(hotspot, ["a"])).toBe(0)
  })

  const drag: PBQ = {
    kind: "dragconnect", t: "x", title: "", scen: "", prompt: "", scene: "pc-rear",
    zones: [
      { id: "z1", x: 0, y: 0, w: 10, h: 10, label: "HDMI" },
      { id: "z2", x: 20, y: 0, w: 10, h: 10, label: "LAN" },
    ],
    items: [
      { id: "hdmi", label: "HDMI", glyph: "hdmi" },
      { id: "rj45", label: "RJ45", glyph: "rj45" },
      { id: "vga", label: "VGA", glyph: "vga" },
    ],
    answer: { z1: "hdmi", z2: "rj45" },
  }
  it("dragconnect: per-zone credit, distractors score nothing", () => {
    expect(pbqScore(drag, { z1: "hdmi", z2: "rj45" })).toBe(1)
    expect(pbqScore(drag, { z1: "hdmi", z2: "vga" })).toBeCloseTo(0.5)
    expect(pbqScore(drag, {})).toBe(0)
  })
})

describe("adaptive weighting", () => {
  const q = core2.questions[0]
  it("boosts unseen topics", () => {
    const fresh = blankProgress()
    const seenP: ExamProgress = { topics: { [q.t]: { c: 5, t: 5 } }, exams: [], seen: {} }
    expect(weightFor(q, fresh, false)).toBeGreaterThan(weightFor(q, seenP, false))
  })
  it("boosts weak topics harder in weak-focus mode", () => {
    const weak: ExamProgress = { topics: { [q.t]: { c: 1, t: 5 } }, exams: [], seen: {} }
    expect(weightFor(q, weak, true)).toBeGreaterThan(weightFor(q, weak, false))
  })
  it("decays with per-question seen count", () => {
    const p = blankProgress()
    const pSeen: ExamProgress = { ...blankProgress(), seen: { [q.id]: 3 } }
    expect(weightFor(q, pSeen, false)).toBeLessThan(weightFor(q, p, false))
  })
  it("weightedSample returns n unique questions", () => {
    const rng = seeded(42)
    const out = weightedSample(core2.questions, 25, blankProgress(), false, rng)
    expect(out.length).toBe(25)
    expect(new Set(out.map((x) => x.id)).size).toBe(25)
  })
  it("is deterministic with a seeded rng", () => {
    const a = weightedSample(core2.questions, 10, blankProgress(), false, seeded(7)).map((q) => q.id)
    const b = weightedSample(core2.questions, 10, blankProgress(), false, seeded(7)).map((q) => q.id)
    expect(a).toEqual(b)
  })
})

describe("pickMC / pickExamMC", () => {
  it("respects domain filter", () => {
    const out = pickMC(core2, blankProgress(), 10, { domain: 3 }, seeded(1))
    expect(out.every((q) => q.d === 3)).toBe(true)
  })
  it("caps at pool size", () => {
    const out = pickMC(core2, blankProgress(), 10_000, {}, seeded(1))
    expect(out.length).toBe(core2.questions.length)
  })
  for (const exam of [core2, core1]) {
    it(`${exam.id}: exam draw has examMC unique questions roughly split by domain`, () => {
      const out = pickExamMC(exam, blankProgress(), seeded(3))
      expect(out.length).toBe(exam.examMC)
      expect(new Set(out.map((q) => q.id)).size).toBe(exam.examMC)
      for (const d of Object.keys(exam.examSplit).map(Number)) {
        const want = exam.examMC * exam.examSplit[d]
        const got = out.filter((q) => q.d === d).length
        expect(Math.abs(got - want)).toBeLessThanOrEqual(3)
      }
    })
  }
  it("pickExamPBQs draws examPBQ unique PBQs", () => {
    const out = pickExamPBQs(core2, seeded(9))
    expect(out.length).toBe(core2.examPBQ)
    expect(new Set(out.map((p) => p.title)).size).toBe(out.length)
  })
})

describe("mastery & weak topics", () => {
  it("levels follow the thresholds", () => {
    const t = "topic"
    const mk = (c: number, n: number): ExamProgress => ({ topics: { [t]: { c, t: n } }, exams: [], seen: {} })
    expect(masteryLevel(blankProgress(), t)).toBe(0)
    expect(masteryLevel(mk(1, 4), t)).toBe(1) // 25%
    expect(masteryLevel(mk(2, 4), t)).toBe(2) // 50%
    expect(masteryLevel(mk(3, 4), t)).toBe(3) // 75%
    expect(masteryLevel(mk(4, 4), t)).toBe(4) // 100%, 3+ attempts
    expect(masteryLevel(mk(2, 2), t)).toBe(3) // 100% but <3 attempts
  })
  it("weak topics need 3+ attempts under 70%, sorted worst-first", () => {
    const t1 = Object.keys(core2.videos)[0]
    const t2 = Object.keys(core2.videos)[1]
    const p: ExamProgress = { topics: { [t1]: { c: 1, t: 4 }, [t2]: { c: 2, t: 4 }, [Object.keys(core2.videos)[2]]: { c: 1, t: 2 } }, exams: [], seen: {} }
    expect(weakTopics(core2, p)).toEqual([t1, t2])
  })
})

describe("progress validation", () => {
  it("accepts legacy-shaped data and rejects junk", () => {
    expect(() => validateProgressAll({ "220-1202": { topics: {}, exams: [], seen: {} } })).not.toThrow()
    expect(() => validateProgressAll({ x: { topics: {} } })).toThrow()
    expect(() => validateProgressAll([1, 2])).toThrow()
    expect(() => validateProgressAll(null)).toThrow()
  })
})

describe("shuffle", () => {
  it("permutes without loss", () => {
    const out = shuffle([1, 2, 3, 4, 5], seeded(5))
    expect(out.slice().sort()).toEqual([1, 2, 3, 4, 5])
  })
})
