import type { JsonValue, ScenarioDefinition, ScenarioRuntime, SimulationAnswer } from "./contracts"

export function isJsonValue(value: unknown): value is JsonValue {
  const ancestors = new Set<object>()
  const visit = (v: unknown, depth: number): boolean => {
    if (v === null || typeof v === "string" || typeof v === "boolean") return true
    if (typeof v === "number") return Number.isFinite(v)
    if (typeof v !== "object" || depth > 100 || ancestors.has(v)) return false
    if (!Array.isArray(v) && Object.getPrototypeOf(v) !== Object.prototype) return false
    ancestors.add(v)
    const valid = Object.values(v).every(child => visit(child, depth + 1))
    ancestors.delete(v)
    return valid
  }
  return visit(value, 0)
}
export function hasSimulationKind(value: unknown): boolean {
  return !!value && typeof value === "object" && "kind" in value && value.kind === "simulation"
}
export function isSimulationAnswer(value: unknown): value is SimulationAnswer {
  if (!hasSimulationKind(value)) return false
  const a = value as Record<string, unknown>
  return a.schemaVersion === 1 && typeof a.scenarioId === "string" && Number.isInteger(a.scenarioVersion) &&
    Number(a.scenarioVersion) > 0 && "state" in a && isJsonValue(a.state)
}
function freeze<T>(value: T): T {
  if (value && typeof value === "object") {
    for (const child of Object.values(value)) freeze(child)
    Object.freeze(value)
  }
  return value
}
function copy<T extends JsonValue>(value: T): T {
  if (!isJsonValue(value)) throw new Error("Simulation state must be finite JSON data")
  return JSON.parse(JSON.stringify(value)) as T
}

export function compileScenario<S extends JsonValue, A extends JsonValue>(definition: ScenarioDefinition<S, A>): ScenarioRuntime {
  // Capture functions and metadata now, rather than reading a mutable registry
  // during an attempt. Never retain an initial-state instance between questions.
  const { id, version, initialState, transition, isState, isAction, isBlank } = definition
  if (!id || !Number.isInteger(version) || version < 1) throw new Error("Invalid scenario identity/version")
  const binding = Object.freeze({ ...definition.binding })
  const metadata = Object.freeze({ ...definition.metadata })
  const grading = Object.freeze({ ...definition.grading })
  const accepts = (answer: SimulationAnswer) => isSimulationAnswer(answer) && answer.scenarioId === id && answer.scenarioVersion === version && isState(answer.state)
  const wrap = (state: S): SimulationAnswer<S> => {
    if (!isJsonValue(state) || !isState(state)) throw new Error(`Invalid state from scenario ${id}`)
    return freeze({ kind: "simulation", schemaVersion: 1, scenarioId: id, scenarioVersion: version, state: copy(state) })
  }
  // Validate the definition before an exam can begin; discard this probe.
  wrap(initialState())
  return Object.freeze({
    id, version, binding, metadata, accepts,
    initialAnswer: () => wrap(initialState()),
    transition(answer: SimulationAnswer, action: JsonValue) {
      if (!accepts(answer) || !isJsonValue(action) || !isAction(action)) return answer
      const next = transition(freeze(copy(answer.state as S)), freeze(copy(action)))
      if (JSON.stringify(next) === JSON.stringify(answer.state)) return answer
      return wrap(next)
    },
    grade(answer: SimulationAnswer) {
      if (!accepts(answer)) return undefined
      const state = freeze(copy(answer.state as S))
      return grading.kind === "legacy"
        ? { kind: "legacy" as const, answer: grading.project(state) }
        : { kind: "objectives" as const, objectives: grading.evaluate(state) }
    },
    isBlank: (answer: SimulationAnswer) => !accepts(answer) || isBlank(freeze(copy(answer.state as S))),
  })
}
