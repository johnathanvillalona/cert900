import { describe, it, expect } from "vitest"
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

/**
 * Guards the two invariants behind a real mis-grading bug (fixed 2026-07-20):
 * match/config PBQs showed the previous question's selection while the reducer
 * held no answer, so correct-looking rows graded wrong.
 *
 * 1. A PBQ <Select> must never be bound with `undefined`. Radix treats an
 *    undefined `value` as UNCONTROLLED and keeps its own selection, which then
 *    disagrees with `session.answers`. Use "" — Radix still shows the
 *    placeholder for "" (shouldShowPlaceholder), but the Select stays
 *    controlled.
 * 2. Every PBQ view must be keyed per question. These views hold state that
 *    must not outlive their question (Radix's internal Select value, the
 *    terminal log, the drag-connect held item); without a key React reconciles
 *    the same instances across questions and that state bleeds forward.
 *
 * These are source-level checks because the app's vitest environment is "node"
 * (no DOM), and Radix Select cannot be driven meaningfully in jsdom. The
 * end-to-end proof lives in the Playwright driver `qa/match-repro.js`, which
 * answers every match PBQ by visible label and asserts a 100% grade.
 */

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..")
const QUIZ = readFileSync(path.join(ROOT, "src", "screens", "Quiz.tsx"), "utf8")
const SIMS = readFileSync(path.join(ROOT, "src", "components", "pbq-sims.tsx"), "utf8")

describe("PBQ view bindings", () => {
  it("never binds a Select value to undefined (would go uncontrolled and desync)", () => {
    for (const [name, src] of [["Quiz.tsx", QUIZ], ["pbq-sims.tsx", SIMS]] as const) {
      // matches e.g. value={x === -1 ? undefined : String(x)}
      const offenders = src.match(/value=\{[^}]*\?\s*undefined[^}]*\}/g) ?? []
      expect(offenders, `${name} binds a Select value to undefined: ${offenders.join(" | ")}`).toHaveLength(0)
    }
  })

  it("binds unanswered Selects to the empty string so they stay controlled", () => {
    // Both known Selects (match rows, config select fields) use the "" form.
    expect(QUIZ).toMatch(/value=\{ans\[i\] === -1 \? "" : String\(ans\[i\]\)\}/)
    expect(SIMS).toMatch(/value=\{values\[i\] === -1 \? "" : String\(values\[i\]\)\}/)
  })

  it("keys every PBQ view per question so view state cannot outlive it", () => {
    // Every `{p.kind === "x" && <XView ... />}` render must carry key={session.idx}.
    const renders = QUIZ.match(/\{p\.kind === "[a-z]+" && <\w+View[^/]*\/>\}/g) ?? []
    expect(renders.length, "expected the six PBQ kind renders").toBeGreaterThanOrEqual(6)
    for (const r of renders) {
      expect(r, `PBQ view render is missing key={session.idx}: ${r}`).toContain("key={session.idx}")
    }
  })
})
