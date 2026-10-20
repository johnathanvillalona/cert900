import type { JsonValue } from "../core/contracts"
import { HISTORY_LIMIT, type ConsoleEntry, type ConsoleState } from "../cli/command-prompt"

export const DHCP_BINDING = Object.freeze({
  exam: "220-1201", kind: "terminal" as const,
  topic: "troubleshooting-networks", title: "Fix a Stale DHCP Lease",
})
export const DHCP_FIXTURE = Object.freeze({
  adapter: "Ethernet0", apipa: "169.254.42.17", ipv4: "192.168.10.87",
  hostname: "CERT900-LT01", mac: "02-00-5E-10-00-01", server: "192.168.10.2", inventory: "192.168.10.20",
  mask: "255.255.255.0", gateway: "192.168.10.1", dns: "192.168.10.1",
})
export type DhcpState = {
  adapter: {
    name: string
    lease: "apipa" | "released" | "bound"
    ipv4: string | null
    mask: string | null
    gateway: string | null
    dns: readonly string[]
  }
  dnsCache: readonly { name: string; address: string }[]
  milestones: { released: boolean; renewedAfterRelease: boolean; flushedAfterRenewal: boolean }
  history: readonly ConsoleEntry[]
  console: ConsoleState
}
/** Internal model actions; command parsing and console rendering belong to B2. */
export type DhcpAction = { type: "release" | "renew"; adapter: string } | { type: "flush-dns" }
export function initialDhcpState(): DhcpState {
  return {
    adapter: { name: DHCP_FIXTURE.adapter, lease: "apipa", ipv4: DHCP_FIXTURE.apipa, mask: "255.255.0.0", gateway: null, dns: [] },
    dnsCache: [{ name: "inventory.office.test", address: "192.0.2.60" }],
    milestones: { released: false, renewedAfterRelease: false, flushedAfterRenewal: false },
    history: [], console: {nextId:1,visibleAfter:0,showBanner:true},
  }
}
export const object = (v: JsonValue): v is { readonly [key: string]: JsonValue } => !!v && typeof v === "object" && !Array.isArray(v)
export function isDhcpState(v: JsonValue): v is DhcpState {
  if (!object(v) || !object(v.adapter) || !object(v.milestones)) return false
  const a = v.adapter, m = v.milestones
  return a.name === DHCP_FIXTURE.adapter && ["apipa", "released", "bound"].includes(String(a.lease)) &&
    [a.ipv4, a.mask, a.gateway].every(x => x === null || typeof x === "string") &&
    Array.isArray(a.dns) && a.dns.every(x => typeof x === "string") &&
    [m.released, m.renewedAfterRelease, m.flushedAfterRenewal].every(x => typeof x === "boolean") &&
    Array.isArray(v.dnsCache) && v.dnsCache.every(x => object(x) && typeof x.name === "string" && typeof x.address === "string") &&
    object(v.console) && Number.isSafeInteger(v.console.nextId) && Number(v.console.nextId) > 0 && Number.isSafeInteger(v.console.visibleAfter) && Number(v.console.visibleAfter) >= 0 && Number(v.console.visibleAfter) < Number(v.console.nextId) && typeof v.console.showBanner === "boolean" &&
    Array.isArray(v.history) && v.history.length <= HISTORY_LIMIT && v.history.every(x => object(x) && Number.isSafeInteger(x.id) && Number(x.id) > 0 && Number(x.id) < Number(v.console && object(v.console) ? v.console.nextId : 0) && typeof x.command === "string" && typeof x.output === "string" && ["info", "success", "error"].includes(String(x.status)))
}
export function transitionDhcp(state: DhcpState, action: DhcpAction): DhcpState {
  if (action.type !== "flush-dns" && action.adapter !== state.adapter.name) return state
  if (action.type === "release") {
    return { ...state,
      adapter: { ...state.adapter, lease: "released", ipv4: null, mask: null, gateway: null, dns: [] },
      milestones: { released: true, renewedAfterRelease: false, flushedAfterRenewal: false },
    }
  }
  if (action.type === "renew") {
    return { ...state,
      adapter: { ...state.adapter, lease: "bound", ipv4: DHCP_FIXTURE.ipv4, mask: DHCP_FIXTURE.mask, gateway: DHCP_FIXTURE.gateway, dns: [DHCP_FIXTURE.dns] },
      milestones: { ...state.milestones, renewedAfterRelease: state.milestones.released },
    }
  }
  return { ...state, dnsCache: [],
    milestones: { ...state.milestones, flushedAfterRenewal: state.milestones.renewedAfterRelease && state.adapter.lease === "bound" },
  }
}
