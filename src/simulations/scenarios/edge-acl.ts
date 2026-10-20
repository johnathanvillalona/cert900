import type { JsonValue, ScenarioDefinition } from "../core/contracts"
import { emptyRuleForm, emptyTrafficForm, evaluateAcl, isAclRule, isPacketProtocol, MAX_RULES, validateRule, validateTraffic, type AclRule, type Decision, type Packet, type RuleForm, type TrafficForm } from "../firewall/acl"
import { analyzePolicy } from "../firewall/partition"
import { boundedText, counter, IPV4_END, record } from "../firewall/primitives"

export type AclState = {
  rules: readonly AclRule[]; nextRuleId: number; revision: number
  draft: { editingId: number | null; form: RuleForm } | null; errors: Record<string, string>
  traffic: TrafficForm; trafficErrors: Record<string, string>
  history: readonly { id: number; revision: number; packet: Packet; decision: Decision }[]; nextTestId: number
}
export type AclAction =
  | { type: "edit"; id: number | null }
  | { type: "draft-field"; field: keyof RuleForm; value: string }
  | { type: "traffic-field"; field: keyof TrafficForm; value: string }
  | { type: "apply" } | { type: "cancel" } | { type: "test" }
  | { type: "delete"; id: number } | { type: "toggle"; id: number }
  | { type: "move"; id: number; delta: -1 | 1 }
export const ruleFields = ["name", "source", "destination", "protocol", "ports", "action"] as const
export const trafficFields = ["source", "destination", "protocol", "port"] as const
export const initialAclState = (): AclState => ({ rules: [], nextRuleId: 1, revision: 0, draft: null, errors: {}, traffic: emptyTrafficForm(), trafficErrors: {}, history: [], nextTestId: 1 })
const formValid = (v: unknown, fields: readonly string[]) => record(v) && Object.keys(v).length === fields.length && fields.every(k => boundedText(v[k]))
const errorsValid = (v: unknown) => record(v) && Object.keys(v).length <= 8 && Object.values(v).every(x => boundedText(x, 200))
const packetValid = (v: unknown) => record(v) && counter(v.source) && v.source < IPV4_END && counter(v.destination) && v.destination < IPV4_END && isPacketProtocol(v.protocol) && counter(v.port) && v.port < 65536
export function isAclState(v: JsonValue): v is AclState {
  if (!record(v) || !Array.isArray(v.rules) || v.rules.length > MAX_RULES || !v.rules.every(isAclRule) || !counter(v.nextRuleId) || v.nextRuleId < 1) return false
  const ids = v.rules.map(r => r.id)
  return new Set(ids).size === ids.length && ids.every(id => id < Number(v.nextRuleId)) && counter(v.revision) &&
    (v.draft === null || (record(v.draft) && (v.draft.editingId === null || (counter(v.draft.editingId) && ids.includes(v.draft.editingId))) && formValid(v.draft.form, ruleFields))) &&
    errorsValid(v.errors) && formValid(v.traffic, trafficFields) && errorsValid(v.trafficErrors) && counter(v.nextTestId) && v.nextTestId > 0 &&
    Array.isArray(v.history) && v.history.length <= 20 && v.history.every(h => record(h) && counter(h.id) && h.id > 0 && h.id < Number(v.nextTestId) && counter(h.revision) && h.revision <= Number(v.revision) && packetValid(h.packet) && record(h.decision) &&
      (h.decision.action === "allow" || h.decision.action === "deny") && (h.decision.ruleId === null || (counter(h.decision.ruleId) && h.decision.ruleId > 0)) && counter(h.decision.checked) && h.decision.checked <= MAX_RULES)
}
export function isAclAction(v: JsonValue): v is AclAction {
  if (!record(v)) return false
  if (["apply", "cancel", "test"].includes(String(v.type))) return true
  if (v.type === "edit") return v.id === null || (counter(v.id) && v.id > 0)
  if (v.type === "delete" || v.type === "toggle") return counter(v.id) && v.id > 0
  if (v.type === "move") return counter(v.id) && v.id > 0 && (v.delta === -1 || v.delta === 1)
  if (v.type === "draft-field") return ruleFields.some(k => k === v.field) && boundedText(v.value)
  if (v.type === "traffic-field") return trafficFields.some(k => k === v.field) && boundedText(v.value)
  return false
}
export function transitionAcl(state: AclState, action: AclAction): AclState {
  if (action.type === "edit") {
    const rule = state.rules.find(r => r.id === action.id)
    if (action.id !== null && !rule) return state
    if (action.id === null && state.rules.length >= MAX_RULES) return state
    const form = rule ? { name: rule.name, source: rule.source.text, destination: rule.destination.text, ports: rule.ports.text, protocol: rule.protocol, action: rule.action } : emptyRuleForm()
    return { ...state, draft: { editingId: action.id, form }, errors: {} }
  }
  if (action.type === "cancel") return { ...state, draft: null, errors: {} }
  if (action.type === "draft-field") {
    if (!state.draft) return state
    const form = { ...state.draft.form, [action.field]: action.value }
    if (action.field === "protocol" && action.value !== "tcp" && action.value !== "udp") form.ports = "Any"
    return { ...state, draft: { ...state.draft, form }, errors: {} }
  }
  if (action.type === "apply") {
    if (!state.draft) return state
    const { rule, errors } = validateRule(state.draft.form)
    if (!rule) return { ...state, errors }
    const id = state.draft.editingId
    if (id === null && state.rules.length >= MAX_RULES) return state
    const next = { ...rule, id: id ?? state.nextRuleId, enabled: id === null ? true : state.rules.find(r => r.id === id)!.enabled }
    const rules = id === null ? [...state.rules, next] : state.rules.map(r => r.id === id ? next : r)
    return { ...state, rules, revision: state.revision + 1, nextRuleId: state.nextRuleId + (id === null ? 1 : 0), draft: null, errors: {} }
  }
  if (action.type === "traffic-field") return { ...state, traffic: { ...state.traffic, [action.field]: action.value }, trafficErrors: {} }
  if (action.type === "test") {
    const { packet, errors } = validateTraffic(state.traffic)
    if (!packet) return { ...state, trafficErrors: errors }
    return { ...state, trafficErrors: {}, nextTestId: state.nextTestId + 1, history: [...state.history, { id: state.nextTestId, revision: state.revision, packet, decision: evaluateAcl(state.rules, packet) }].slice(-20) }
  }
  const index = state.rules.findIndex(r => r.id === action.id)
  if (index < 0 || state.draft !== null) return state
  let rules = [...state.rules]
  if (action.type === "delete") rules = rules.filter(r => r.id !== action.id)
  else if (action.type === "toggle") rules[index] = { ...rules[index], enabled: !rules[index].enabled }
  else {
    const target = index + action.delta
    if (target < 0 || target >= rules.length) return state
    ;[rules[index], rules[target]] = [rules[target], rules[index]]
  }
  return { ...state, rules, revision: state.revision + 1 }
}
export const edgeAclDefinition: ScenarioDefinition<AclState, AclAction> = {
  id: "network-plus.edge-acl", version: 1,
  binding: { exam: "n10-009", kind: "config", topic: "security-rules", title: "Build the Edge ACL" },
  metadata: { title: "Branch edge inbound policy", workspace: "administration" },
  initialState: initialAclState, isState: isAclState, isAction: isAclAction, transition: transitionAcl,
  isBlank: state => state.rules.length === 0,
  grading: { kind: "objectives", evaluate: state => {
    const a = analyzePolicy(state.rules)
    return [
      { id: "https", label: "Enforce public HTTPS access to the web server only", weight: 1, satisfied: a.https },
      { id: "ssh", label: "Enforce SSH access from management sources only", weight: 1, satisfied: a.ssh },
      { id: "least-privilege", label: "Permit no unrelated inbound traffic, with authorized access functioning", weight: 1, satisfied: a.leastPrivilege },
    ]
  } },
}
