import type { PBQ } from "../../data/types"
import type { LegacyPBQAnswer } from "../../lib/engine"

/** Serializable virtual state only: no DOM objects, host handles or functions. */
export type JsonValue = null | boolean | number | string | readonly JsonValue[] | { readonly [key: string]: JsonValue }
export interface ScenarioBinding {
  readonly exam: string
  readonly kind: PBQ["kind"]
  readonly topic: string
  readonly title: string
}
export function questionKey(exam: string, p: Pick<PBQ, "kind" | "t" | "title">): string {
  return JSON.stringify([exam, p.kind, p.t, p.title])
}
export function bindingKey(binding: ScenarioBinding): string {
  return questionKey(binding.exam, { kind: binding.kind, t: binding.topic, title: binding.title })
}
export interface SimulationAnswer<State extends JsonValue = JsonValue> {
  readonly kind: "simulation"
  readonly schemaVersion: 1
  readonly scenarioId: string
  readonly scenarioVersion: number
  readonly state: State
}
export interface ObjectiveResult {
  readonly id: string
  readonly label: string
  readonly weight: number
  readonly satisfied: boolean
}
export type ScenarioGrade =
  | { readonly kind: "objectives"; readonly objectives: readonly ObjectiveResult[] }
  | { readonly kind: "legacy"; readonly answer: LegacyPBQAnswer }
export type GradingAdapter<State> =
  | { readonly kind: "objectives"; readonly evaluate: (state: State) => readonly ObjectiveResult[] }
  | { readonly kind: "legacy"; readonly project: (state: State) => LegacyPBQAnswer }

export interface ScenarioDefinition<State extends JsonValue, Action extends JsonValue> {
  readonly id: string
  readonly version: number
  readonly binding: ScenarioBinding
  readonly metadata: {
    readonly title: string
    readonly workspace: "command-prompt" | "administration" | "hardware"
  }
  readonly initialState: () => State
  /** Pure and deterministic. Input state is deeply frozen at the boundary. */
  readonly transition: (state: State, action: Action) => State
  readonly isState: (value: JsonValue) => value is State
  readonly isAction: (value: JsonValue) => value is Action
  readonly isBlank: (state: State) => boolean
  readonly grading: GradingAdapter<State>
}

/** Validated, version-frozen adapter for heterogeneous scenario definitions. */
export interface ScenarioRuntime {
  readonly id: string
  readonly version: number
  readonly binding: ScenarioBinding
  readonly metadata: ScenarioDefinition<JsonValue, JsonValue>["metadata"]
  readonly initialAnswer: () => SimulationAnswer
  readonly transition: (answer: SimulationAnswer, action: JsonValue) => SimulationAnswer
  readonly accepts: (answer: SimulationAnswer) => boolean
  readonly grade: (answer: SimulationAnswer) => ScenarioGrade | undefined
  readonly isBlank: (answer: SimulationAnswer) => boolean
}
export type SimulationBindings = Readonly<Record<string, ScenarioRuntime>>
