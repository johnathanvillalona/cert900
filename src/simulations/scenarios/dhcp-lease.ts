import type { ScenarioDefinition } from "../core/contracts"
import { DHCP_BINDING, DHCP_FIXTURE, initialDhcpState, transitionDhcp, isDhcpState, object, type DhcpAction, type DhcpState } from "./dhcp-model"
import { executeDhcpCommand } from "./dhcp-commands"
export { DHCP_BINDING, DHCP_FIXTURE, initialDhcpState, transitionDhcp } from "./dhcp-model"
export type { DhcpAction, DhcpState } from "./dhcp-model"
export type DhcpSimulationAction = DhcpAction | { type: "execute-command"; command: string }
export const dhcpDefinition: ScenarioDefinition<DhcpState, DhcpSimulationAction> = {
  id: "a-plus.dhcp-lease", version: 2, binding: DHCP_BINDING,
  metadata: { title: "DHCP lease recovery", workspace: "command-prompt" },
  initialState: initialDhcpState, isState: isDhcpState,
  transition: (state, action) => action.type === "execute-command" ? executeDhcpCommand(state, action.command) : transitionDhcp(state, action),
  isAction: (v): v is DhcpSimulationAction => object(v) &&
    (v.type === "execute-command" ? typeof v.command === "string" : v.type === "flush-dns" || ((v.type === "release" || v.type === "renew") && typeof v.adapter === "string")),
  isBlank: state => !state.milestones.released,
  grading: { kind: "objectives", evaluate: state => {
    const healthy = state.adapter.lease === "bound" && state.adapter.ipv4 === DHCP_FIXTURE.ipv4 &&
      state.adapter.mask === DHCP_FIXTURE.mask && state.adapter.gateway === DHCP_FIXTURE.gateway && state.adapter.dns.includes(DHCP_FIXTURE.dns)
    return [
      { id: "release", label: "Release the broken lease", weight: 1, satisfied: state.milestones.released },
      { id: "renew", label: "Obtain a healthy lease after release", weight: 1, satisfied: state.milestones.renewedAfterRelease && healthy },
      { id: "flush-dns", label: "Clear the DNS cache after renewal", weight: 1, satisfied: state.milestones.flushedAfterRenewal && healthy },
    ]
  } },
}
