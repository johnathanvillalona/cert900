import type { PBQ } from "../../data/types"
import type { LegacyPBQAnswer } from "../../lib/engine"
import type { ScenarioRuntime } from "./contracts"
import { isSimulationAnswer } from "./transition"

export function matchesQuestion(p: PBQ, runtime: ScenarioRuntime): boolean {
  return p.kind === runtime.binding.kind && p.t === runtime.binding.topic && p.title === runtime.binding.title
}
export function simulationScore(
  p: PBQ, answer: unknown, runtime: ScenarioRuntime | undefined,
  scoreLegacy: (answer: LegacyPBQAnswer) => number,
): number {
  if (!runtime || !matchesQuestion(p, runtime) || !isSimulationAnswer(answer)) return 0
  const result = runtime.grade(answer)
  if (!result) return 0
  if (result.kind === "legacy") return scoreLegacy(result.answer)
  const { objectives } = result
  const ids = new Set(objectives.map(o => o.id))
  if (!objectives.length || ids.size !== objectives.length || objectives.some(o => !o.id || !Number.isFinite(o.weight) || o.weight <= 0 || typeof o.satisfied !== "boolean")) {
    throw new Error("Invalid simulation objective rubric")
  }
  const total = objectives.reduce((sum, o) => sum + o.weight, 0)
  if (!Number.isFinite(total)) throw new Error("Invalid simulation objective total")
  return objectives.reduce((sum, o) => sum + (o.satisfied ? o.weight : 0), 0) / total
}
export function simulationBlank(p: PBQ, answer: unknown, runtime?: ScenarioRuntime): boolean {
  return !runtime || !matchesQuestion(p, runtime) || !isSimulationAnswer(answer) || runtime.isBlank(answer)
}
