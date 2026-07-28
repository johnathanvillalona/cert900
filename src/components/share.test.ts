import { describe, it, expect } from "vitest"
import { buildShareText } from "./ShareResult"
import { EXAM_META } from "@/data/meta"
import type { QuizOutcome } from "@/lib/quiz-session"

const exam = EXAM_META["sy0-701"]
const review = (n: number, right: number) =>
  Array.from({ length: n }, (_, i) => ({ ok: i < right })) as QuizOutcome["review"]

describe("share text", () => {
  it("quotes an exam score against its real cut line, not a bare number", () => {
    const text = buildShareText(exam, {
      mode: "exam",
      scaled: 812,
      pass: true,
      pct: 0.9,
      timeUp: false,
      review: review(90, 81),
    } as QuizOutcome)
    expect(text).toContain("812")
    // A scaled score is meaningless without the scale it came from.
    expect(text).toContain(String(exam.scale.pass))
    expect(text).toContain(String(exam.scale.max))
    expect(text).toContain(exam.code)
    expect(text).toContain("cert900.com")
  })

  it("reports a drill as questions answered", () => {
    const text = buildShareText(exam, { mode: "practice", review: review(10, 7) } as QuizOutcome)
    expect(text).toContain("10")
    expect(text).toContain("7")
    expect(text).not.toContain("pass line")
  })
})
