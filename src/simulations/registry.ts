import type { ExamDef } from "../data/types"
import { bindingKey, questionKey, type ScenarioBinding, type ScenarioRuntime, type SimulationBindings } from "./core/contracts"

interface Registration {
  readonly id: string
  readonly version: number
  readonly binding: ScenarioBinding
  readonly load: () => Promise<ScenarioRuntime>
}
/** Metadata only. No eager bank, CLI, or renderer imports. */
export const SCENARIOS: readonly Registration[] = Object.freeze([
  Object.freeze({
    id: "a-plus.inventory-firewall", version: 1,
    binding: Object.freeze({ exam: "220-1202", kind: "config" as const, topic: "win-firewall-cfg", title: "Windows Defender Firewall: Allow the App" }),
    load: async () => {
      const [{ compileScenario }, { windowsFirewallDefinition }] = await Promise.all([import("./core/transition"), import("./scenarios/windows-firewall")])
      return compileScenario(windowsFirewallDefinition)
    },
  }),
  Object.freeze({
    id: "network-plus.edge-acl", version: 1,
    binding: Object.freeze({ exam: "n10-009", kind: "config" as const, topic: "security-rules", title: "Build the Edge ACL" }),
    load: async () => {
      const [{ compileScenario }, { edgeAclDefinition }] = await Promise.all([import("./core/transition"), import("./scenarios/edge-acl")])
      return compileScenario(edgeAclDefinition)
    },
  }),
  Object.freeze({
    id: "a-plus.dhcp-lease", version: 2,
    binding: Object.freeze({ exam: "220-1201", kind: "terminal" as const, topic: "troubleshooting-networks", title: "Fix a Stale DHCP Lease" }),
    load: async () => {
      const [{ compileScenario }, { dhcpDefinition }] = await Promise.all([import("./core/transition"), import("./scenarios/dhcp-lease")])
      return compileScenario(dhcpDefinition)
    },
  }),
])

/** Await before mounting useQuizSession/starting the timer. Explicit opt-in only. */
export async function prepareSimulationBindings(exam: ExamDef, enabled: readonly string[] = []): Promise<SimulationBindings> {
  if (new Set(enabled).size !== enabled.length) throw new Error("Duplicate scenario opt-in")
  const bindings: Record<string, ScenarioRuntime> = {}
  for (const id of enabled) {
    const candidates = SCENARIOS.filter(s => s.id === id && s.binding.exam === exam.id)
    if (candidates.length !== 1) throw new Error(`Scenario is not registered for ${exam.id}: ${id}`)
    const registration = candidates[0]
    const key = bindingKey(registration.binding)
    if (exam.pbqs.filter(p => questionKey(exam.id, p) === key).length !== 1 || bindings[key]) throw new Error("Ambiguous or missing scenario question")
    const runtime = await registration.load()
    if (runtime.id !== id || runtime.version !== registration.version || bindingKey(runtime.binding) !== key) throw new Error("Scenario module does not match its registration")
    bindings[key] = runtime
  }
  return Object.freeze(bindings)
}
