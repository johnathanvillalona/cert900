import { isAclRule, matches, MAX_RULES, PACKET_PROTOCOLS, type AclRule, type Packet } from "./acl"
import { address, contains, IPV4_END, PORT_END, ports, type Interval } from "./primitives"

export const MANAGEMENT = address("10.20.30.0/24")!
export const WEB_SERVER = address("192.0.2.80")!
export const MAX_CELLS = 65536
export const MAX_RULE_VISITS = 1_000_000
export type Analysis = {
  https: boolean; ssh: boolean; leastPrivilege: boolean; incomplete: boolean; insecure: boolean
  missingExample: Packet | null; exposureExample: Packet | null; cells: number; ruleVisits: number
}
/** Include rule AND work-order boundaries. End sentinels are exact JS integers. */
export function axisBoundaries(ranges: readonly Interval[], end: number): number[] {
  return [...new Set([0, end, ...ranges.flatMap(r => [r.start, r.end + 1])])].sort((a, b) => a - b)
}
export function authorized(packet: Packet): boolean {
  return packet.protocol === "tcp" && ((packet.port === 443 && contains(WEB_SERVER, packet.destination)) || (packet.port === 22 && contains(MANAGEMENT, packet.source)))
}
/** Exact within the published IPv4 model; one pass evaluates every objective. */
export function analyzePolicy(rules: readonly AclRule[]): Analysis {
  if (rules.length > MAX_RULES || !rules.every(isAclRule)) throw new Error("Invalid or oversized ACL policy")
  const source = axisBoundaries([...rules.map(r => r.source), MANAGEMENT], IPV4_END)
  const destination = axisBoundaries([...rules.map(r => r.destination), WEB_SERVER], IPV4_END)
  const port = axisBoundaries([...rules.map(r => r.ports), ports("22")!, ports("443")!], PORT_END)
  const result: Analysis = { https: true, ssh: true, leastPrivilege: false, incomplete: false, insecure: false, missingExample: null, exposureExample: null, cells: 0, ruleVisits: 0 }
  let someAuthorized = false
  for (const protocol of PACKET_PROTOCOLS) {
    const portAxis = protocol === "tcp" || protocol === "udp" ? port : [0, 1]
    for (let s = 0; s < source.length - 1; s++) for (let d = 0; d < destination.length - 1; d++) for (let p = 0; p < portAxis.length - 1; p++) {
      if (++result.cells > MAX_CELLS) throw new Error("Exact ACL analysis exceeded its cell invariant")
      const packet: Packet = { source: source[s], destination: destination[d], port: portAxis[p], protocol }
      let allowed = false
      for (const rule of rules) {
        if (++result.ruleVisits > MAX_RULE_VISITS) throw new Error("Exact ACL analysis exceeded its rule-visit invariant")
        if (matches(rule, packet)) { allowed = rule.action === "allow"; break }
      }
      const expected = authorized(packet)
      if (allowed && expected) someAuthorized = true
      if (!allowed && expected) { result.incomplete = true; result.missingExample ??= packet }
      if (allowed && !expected) { result.insecure = true; result.exposureExample ??= packet }
      if (protocol === "tcp" && packet.port === 443 && allowed !== contains(WEB_SERVER, packet.destination)) result.https = false
      if (protocol === "tcp" && packet.port === 22 && allowed !== contains(MANAGEMENT, packet.source)) result.ssh = false
    }
  }
  result.leastPrivilege = !result.insecure && someAuthorized
  return result
}
