import { describe, expect, it } from 'vitest'
import { evaluateAcl, MAX_RULES, validateRule, validateTraffic, type AclRule, type Packet } from './acl'
import { analyzePolicy, authorized, axisBoundaries, MAX_CELLS, MAX_RULE_VISITS } from './partition'
import { ipv4, ports } from './primitives'
import { rule, ssh, web, workloads } from '../../../tests/simulations/acl-fixtures'
const packet = (values: Partial<Packet> = {}): Packet => ({ source: ipv4('198.51.100.25')!, destination: ipv4('192.0.2.80')!, protocol: 'tcp', port: 443, ...values })
const score = (rules: AclRule[]) => { const a = analyzePolicy(rules); return (Number(a.https) + Number(a.ssh) + Number(a.leastPrivilege)) / 3 }
describe('first-match inbound ACL', () => {
  it('uses first match, ignores disabled rules, and denies an empty/no-match policy', () => {
    const deny = rule(3, { protocol: 'any', ports: 'Any', action: 'deny' })
    expect(evaluateAcl([], packet()).action).toBe('deny')
    expect(evaluateAcl([deny, web()], packet()).ruleId).toBe(3)
    expect(evaluateAcl([web(), deny], packet()).ruleId).toBe(1)
    expect(evaluateAcl([{ ...deny, enabled: false }, web()], packet()).ruleId).toBe(1)
    expect(evaluateAcl([web()], packet({ protocol: 'udp' })).action).toBe('deny')
    expect(evaluateAcl([web()], packet({ destination: ipv4('192.0.2.81')! })).action).toBe('deny')
  })
  it('supports inclusive port endpoints, ICMP and Other-IP only through appropriate matchers', () => {
    const range = rule(1, { ports: '22-443' })
    for (const p of [22,443]) expect(evaluateAcl([range], packet({ port: p })).action).toBe('allow')
    for (const p of [21,444]) expect(evaluateAcl([range], packet({ port: p })).action).toBe('deny')
    const icmp = rule(2, { protocol: 'icmp', ports: 'Any' })
    expect(evaluateAcl([icmp], packet({ protocol: 'icmp', port: 0 })).action).toBe('allow')
    expect(evaluateAcl([icmp], packet({ protocol: 'other', port: 0 })).action).toBe('deny')
    expect(evaluateAcl([rule(3, { protocol: 'any', ports: 'Any' })], packet({ protocol: 'other' })).action).toBe('allow')
  })
  it('reports input validation without accepting malformed or incompatible selectors', () => {
    const base = { name: 'rule', source: 'Any', destination: 'Any', action: 'allow', protocol: 'icmp', ports: '443' }
    expect(validateRule(base).rule).toBeNull()
    expect(validateRule({ ...base, name: ' ', source: 'bad', destination: '::1', protocol: 'host-shell', action: 'execute' }).errors).toHaveProperty('name')
    expect(validateTraffic({ source: 'bad', destination: '::1', protocol: 'tcp', port: '65536' }).packet).toBeNull()
    expect(validateTraffic({ source: '0.0.0.0', destination: '255.255.255.255', protocol: 'tcp', port: '0' }).packet?.port).toBe(0)
  })
})
describe('approved equal-weight policy outcomes', () => {
  it.each([
    ['empty', [], 0], ['HTTPS only', [web()], 2/3], ['SSH only', [ssh()], 2/3],
    ['complete', [web(),ssh()], 1], ['reversed disjoint rules', [ssh(),web()], 1],
    ['allow everything', [rule(3,{ protocol:'any',ports:'Any' })], 0],
    ['HTTPS and public SSH', [web(),rule(2,{ports:'22'})], 1/3],
    ['extra DNS exposure', [web(),ssh(),rule(3,{protocol:'udp',ports:'53'})], 2/3],
    ['deny shadows correct rules', [rule(3,{protocol:'any',ports:'Any',action:'deny'}),web(),ssh()],0],
    ['safe shadowed broad Allow', [web(),ssh(),rule(3,{protocol:'any',ports:'Any',action:'deny'}),rule(4,{protocol:'any',ports:'Any'})],1],
    ['disabled unsafe Allow', [web(),ssh(),{...rule(3,{protocol:'any',ports:'Any'}),enabled:false}],1],
  ] as [string,AclRule[],number][])('%s', (_label,rules,expected) => expect(score(rules)).toBe(expected))
  it('accepts split management CIDRs, duplicates, /0 aliases and noncanonical input normalization', () => {
    const a = rule(2,{ source:'10.20.30.1/25',ports:'22' }), b = rule(3,{ source:'10.20.30.128/25',ports:'22' })
    expect(score([web(),a,b,{...web(),id:4}])).toBe(1)
    expect(score([rule(1,{source:'0.0.0.0/0',destination:'192.0.2.80/32'}),ssh()])).toBe(1)
  })
  it('distinguishes incomplete and insecure cases even when both receive 2/3', () => {
    const incomplete = analyzePolicy([web()]), insecure = analyzePolicy([web(),ssh(),rule(3,{protocol:'udp',ports:'53'})])
    expect(incomplete.incomplete).toBe(true); expect(incomplete.insecure).toBe(false)
    expect(insecure.incomplete).toBe(false); expect(insecure.insecure).toBe(true)
    expect(incomplete.missingExample).not.toBeNull(); expect(insecure.exposureExample).not.toBeNull()
  })
  it('detects a single unwanted endpoint or missing management address, not just sampled probes', () => {
    const narrowDeny=rule(3,{source:'10.20.30.255',ports:'22',action:'deny'})
    expect(analyzePolicy([narrowDeny,web(),ssh()]).ssh).toBe(false)
    const exposed=rule(4,{source:'255.255.255.255',destination:'0.0.0.0',protocol:'udp',ports:'65535'})
    expect(analyzePolicy([web(),ssh(),exposed]).insecure).toBe(true)
    expect(authorized(packet({source:ipv4('10.20.30.0')!,port:22,destination:0}))).toBe(true)
    expect(authorized(packet({source:ipv4('10.20.30.255')!,port:22,destination:2**32-1}))).toBe(true)
  })
})
describe('exact partition construction and limits', () => {
  it('agrees with independent brute force over a small Cartesian address/port domain', () => {
    // Every integer inside each boundary cell must have the same decision.
    const rules=[rule(1,{source:'0.0.0.4/30',destination:'0.0.0.8/30',ports:'3-6'}),rule(2,{source:'0.0.0.0/29',destination:'Any',ports:'5',action:'deny'})]
    const axes=[axisBoundaries(rules.map(r=>r.source),16).filter(x=>x<=16),axisBoundaries(rules.map(r=>r.destination),16).filter(x=>x<=16),axisBoundaries(rules.map(r=>r.ports),16).filter(x=>x<=16)]
    for(let s=0;s<16;s++) for(let d=0;d<16;d++) for(let p=0;p<16;p++) {
      const direct=rules.find(r=>s>=r.source.start&&s<=r.source.end&&d>=r.destination.start&&d<=r.destination.end&&p>=r.ports.start&&p<=r.ports.end)?.action??'deny'
      const representatives=[s,d,p].map((n,i)=>axes[i].filter(x=>x<=n).at(-1)!)
      const cell=evaluateAcl(rules,{source:representatives[0],destination:representatives[1],port:representatives[2],protocol:'tcp'})
      expect(cell.action).toBe(direct)
    }
  })
  it('includes the maximum sentinels and rule AND policy boundaries', () => {
    expect(axisBoundaries([ports('65535')!],65536)).toEqual([0,65535,65536])
    const a=analyzePolicy(workloads().boundary)
    expect(a.cells).toBe(43740)
    expect(a.ruleVisits).toBeLessThanOrEqual(524880)
    expect(a.cells).toBeLessThan(MAX_CELLS);expect(a.ruleVisits).toBeLessThan(MAX_RULE_VISITS)
    expect(()=>analyzePolicy(Array.from({length:MAX_RULES+1},(_,i)=>({...web(),id:i+1})))).toThrow()
    expect(()=>analyzePolicy([{...web(),ports:{start:-1,end:1,text:'Any'}}])).toThrow()
  })
})
