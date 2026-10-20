import { address, boundedText, contains, counter, ipv4, ports, record, type Interval } from "./primitives"

export const MAX_RULES = 12
export const RULE_PROTOCOLS = ["tcp", "udp", "icmp", "any"] as const
export const PACKET_PROTOCOLS = ["tcp", "udp", "icmp", "other"] as const
export type RuleProtocol = typeof RULE_PROTOCOLS[number]
export type PacketProtocol = typeof PACKET_PROTOCOLS[number]
export type AclRule = {
  id: number; name: string; enabled: boolean; source: Interval; destination: Interval
  protocol: RuleProtocol; ports: Interval; action: "allow" | "deny"
}
export type Packet = { source: number; destination: number; protocol: PacketProtocol; port: number }
export type Decision = { action: "allow" | "deny"; ruleId: number | null; checked: number }
export type RuleForm = { name: string; source: string; destination: string; protocol: string; ports: string; action: string }
export type TrafficForm = { source: string; destination: string; protocol: string; port: string }
export const emptyRuleForm = (): RuleForm => ({ name: "", source: "Any", destination: "Any", protocol: "tcp", ports: "", action: "allow" })
export const emptyTrafficForm = (): TrafficForm => ({ source: "", destination: "", protocol: "tcp", port: "" })
export const isRuleProtocol = (v: unknown): v is RuleProtocol => RULE_PROTOCOLS.some(p => p === v)
export const isPacketProtocol = (v: unknown): v is PacketProtocol => PACKET_PROTOCOLS.some(p => p === v)
const isInterval = (v: unknown, parse: typeof address) => {
  if (!record(v) || !boundedText(v.text)) return false
  const canonical = parse(v.text)
  return canonical !== null && canonical.start === v.start && canonical.end === v.end && canonical.text === v.text
}
export function isAclRule(v: unknown): v is AclRule {
  return record(v) && counter(v.id) && v.id > 0 && boundedText(v.name, 80) && !!v.name.trim() && typeof v.enabled === "boolean" &&
    isInterval(v.source, address) && isInterval(v.destination, address) && isInterval(v.ports, ports) && isRuleProtocol(v.protocol) &&
    ((v.protocol === "tcp" || v.protocol === "udp") || (record(v.ports) && v.ports.text === "Any")) && (v.action === "allow" || v.action === "deny")
}
export function validateRule(form: RuleForm): { rule: Omit<AclRule, "id" | "enabled"> | null; errors: Record<string, string> } {
  const errors: Record<string, string> = {}
  const source = address(form.source), destination = address(form.destination), range = ports(form.ports)
  if (!form.name.trim() || form.name.length > 80) errors.name = "Enter a rule name, up to 80 characters."
  if (!source) errors.source = "Use Any, a dotted-decimal IPv4 host, or a CIDR prefix from /0 to /32."
  if (!destination) errors.destination = "Use Any, a dotted-decimal IPv4 host, or a CIDR prefix from /0 to /32."
  if (!isRuleProtocol(form.protocol)) errors.protocol = "Choose a supported protocol."
  if (!range) errors.ports = "Use Any, a port from 0 to 65535, or an inclusive range such as 8000-8100."
  if (form.protocol !== "tcp" && form.protocol !== "udp" && range?.text !== "Any") errors.ports = "Port criteria apply to TCP and UDP only."
  if (form.action !== "allow" && form.action !== "deny") errors.action = "Choose Allow or Deny."
  if (Object.keys(errors).length || !source || !destination || !range || !isRuleProtocol(form.protocol) || (form.action !== "allow" && form.action !== "deny")) return { rule: null, errors }
  return { rule: { name: form.name.trim(), source, destination, protocol: form.protocol, ports: range, action: form.action }, errors }
}
export function validateTraffic(form: TrafficForm): { packet: Packet | null; errors: Record<string, string> } {
  const errors: Record<string, string> = {}, source = ipv4(form.source.trim()), destination = ipv4(form.destination.trim())
  const port = /^\d{1,5}$/.test(form.port.trim()) ? Number(form.port) : -1
  if (source === null) errors.source = "Enter one dotted-decimal IPv4 source address."
  if (destination === null) errors.destination = "Enter one dotted-decimal IPv4 destination address."
  if (!isPacketProtocol(form.protocol)) errors.protocol = "Choose a supported packet protocol."
  if ((form.protocol === "tcp" || form.protocol === "udp") && (port < 0 || port > 65535)) errors.port = "Enter a destination port from 0 to 65535."
  if (Object.keys(errors).length || source === null || destination === null || !isPacketProtocol(form.protocol)) return { packet: null, errors }
  return { packet: { source, destination, protocol: form.protocol, port: form.protocol === "tcp" || form.protocol === "udp" ? port : 0 }, errors }
}
export function matches(rule: AclRule, packet: Packet): boolean {
  return rule.enabled && contains(rule.source, packet.source) && contains(rule.destination, packet.destination) &&
    (rule.protocol === "any" || rule.protocol === packet.protocol) &&
    (packet.protocol === "icmp" || packet.protocol === "other" || contains(rule.ports, packet.port))
}
export function evaluateAcl(rules: readonly AclRule[], packet: Packet): Decision {
  let checked = 0
  for (const rule of rules) {
    if (!rule.enabled) continue
    checked++
    if (matches(rule, packet)) return { action: rule.action, ruleId: rule.id, checked }
  }
  return { action: "deny", ruleId: null, checked }
}

