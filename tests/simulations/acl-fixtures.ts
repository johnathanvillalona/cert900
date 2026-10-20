import { validateRule, type AclRule, type RuleForm } from '../../src/simulations/firewall/acl'
import { analyzePolicy } from '../../src/simulations/firewall/partition'
import { compileScenario } from '../../src/simulations/core/transition'
import { edgeAclDefinition, initialAclState } from '../../src/simulations/scenarios/edge-acl'

export function rule(id: number, values: Partial<RuleForm> = {}): AclRule {
  const { rule, errors } = validateRule({ name: `Rule ${id}`, source: 'Any', destination: 'Any', protocol: 'tcp', ports: '443', action: 'allow', ...values })
  if (!rule) throw new Error(JSON.stringify(errors))
  return { ...rule, id, enabled: true }
}
export const web = () => rule(1, { name: 'Public web', destination: '192.0.2.80' })
export const ssh = () => rule(2, { name: 'Management SSH', source: '10.20.30.0/24', ports: '22' })
export function workloads(): Record<string, AclRule[]> {
  const boundary = Array.from({ length: 12 }, (_, i) => rule(i + 1, {
    source: `11.0.${i}.1`, destination: `172.20.${i}.1`, ports: `${1000 + i * 10}-${1004 + i * 10}`, action: 'deny',
  }))
  const overlap = Array.from({ length: 12 }, (_, i) => rule(i + 1, {
    source: `10.0.0.0/${8 + i}`, destination: `192.0.0.0/${8 + i}`, ports: `${i}-${65535 - i}`, action: 'deny',
  }))
  return { boundary, overlap, complete: [web(), ssh(), ...boundary.slice(0, 10).map((r, i) => ({ ...r, id: i + 3 }))] }
}
export function benchmarkAcl(samples: number) {
  const runtime = compileScenario(edgeAclDefinition)
  return Object.entries(workloads()).map(([name, rules]) => {
    const analysis = analyzePolicy(rules)
    const answer = { ...runtime.initialAnswer(), state: { ...initialAclState(), rules, nextRuleId: 13 } }
    for (let i = 0; i < 5; i++) runtime.grade(answer)
    const timings = []
    for (let i = 0; i < samples; i++) {
      const start = performance.now()
      const result = runtime.grade(answer)
      if (!result || result.kind !== 'objectives' || result.objectives.length !== 3) throw new Error('Missing grade')
      timings.push(performance.now() - start)
    }
    timings.sort((a, b) => a - b)
    return { name, samples, p95: timings[Math.ceil(samples * .95) - 1], max: timings.at(-1)!, cells: analysis.cells, ruleVisits: analysis.ruleVisits }
  })
}
