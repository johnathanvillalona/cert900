import type { ComponentType } from "react"
import type { ExamDef } from "../data/types"
import type { SimulationBindings } from "./core/contracts"
import type { SimulationViewProps } from "./ui/contracts"
import { prepareSimulationBindings } from "./registry"

export type WebScenario = { View: ComponentType<SimulationViewProps>; scenarioText?: string }
export type WebSimulations = { bindings: SimulationBindings; views: Readonly<Record<string, WebScenario>> }
// The ACL model is registered at the foundation checkpoint; its web opt-in is
// added with the independently validated workspace. Existing DHCP stays v2.
const PILOTS: Readonly<Record<string, readonly string[]>> = { "220-1201": ["a-plus.dhcp-lease"] }
export function webScenarioIds(exam: string): readonly string[] { return PILOTS[exam] ?? [] }
export async function prepareWebSimulations(exam: ExamDef): Promise<WebSimulations> {
  const ids = webScenarioIds(exam.id)
  const bindings = await prepareSimulationBindings(exam, ids)
  const views: Record<string, WebScenario> = {}
  for (const id of ids) {
    if (id === "a-plus.dhcp-lease") views[id] = { View: (await import("./scenarios/DhcpWorkspace")).DhcpWorkspace }
    else throw new Error(`No web renderer for ${id}`)
  }
  return { bindings, views: Object.freeze(views) }
}
