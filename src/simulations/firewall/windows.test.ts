import { describe, expect, it } from 'vitest'
import { analyzeWindows, emptyWindowsForm, evaluateWindows, isWindowsRule, validateWindowsRule, validateWindowsTraffic, type Flow, type WindowsRule } from './windows'
export const program=(overrides:Partial<WindowsRule>={}):WindowsRule=>({...validateWindowsRule({...emptyWindowsForm(),name:'Inventory exception',application:'inventory',public:'false'}).rule!,id:1,enabled:true,...overrides})
const flow=(overrides:Partial<Flow>={}):Flow=>({direction:'inbound',application:'inventory',profile:'domain',protocol:'tcp',localPort:9000,remotePort:55000,...overrides})
const score=(rules:WindowsRule[])=>{const a=analyzeWindows(rules);return [a.domain,a.private,a.isolation].filter(Boolean).length/3}
describe('Windows policy semantics, independent from ordered ACLs',()=>{
  it('uses inbound Block and outbound Allow defaults for each profile',()=>{
    for(const profile of ['domain','private','public'] as const){expect(evaluateWindows([],flow({profile})).action).toBe('block');expect(evaluateWindows([],flow({profile,direction:'outbound'})).action).toBe('allow')}
  })
  it('explicit Block wins in every row order, even against a more specific Allow',()=>{
    const allow=program(),block=program({id:2,application:'any',action:'block'})
    for(const rules of [[allow,block],[block,allow]])expect(evaluateWindows(rules,flow())).toEqual({action:'block',reason:'explicit-block',ruleIds:[2]})
    expect(evaluateWindows([allow,{...block,enabled:false}],flow()).action).toBe('allow')
  })
  it('separates application, profile, direction and protocol filters',()=>{
    const r=program({protocol:'tcp'})
    expect(evaluateWindows([r],flow({protocol:'udp'})).action).toBe('block')
    expect(evaluateWindows([r],flow({application:'other'})).action).toBe('block')
    expect(evaluateWindows([r],flow({profile:'public'})).action).toBe('block')
    expect(evaluateWindows([r],flow({direction:'outbound'})).reason).toBe('default')
  })
  it('normalizes ports and preserves local/remote orientation for Port and Predefined',()=>{
    const inbound=validateWindowsRule({...emptyWindowsForm(),name:'Ports',kind:'port',protocol:'tcp',localPorts:'0080 - 81',remotePorts:'50000-65535'}).rule!
    const r={...inbound,id:1,enabled:true}
    expect(r.localPorts.text).toBe('80-81');expect(isWindowsRule(r)).toBe(true)
    expect(evaluateWindows([r],flow({localPort:81,remotePort:65535})).action).toBe('allow')
    expect(evaluateWindows([r],flow({localPort:65535,remotePort:81})).action).toBe('block')
    for(const direction of ['inbound','outbound'] as const){const p=validateWindowsRule({...emptyWindowsForm(direction),name:'RDP',kind:'predefined'}).rule!;expect(p.application).toBe('rdp');expect(p[direction==='inbound'?'localPorts':'remotePorts'].text).toBe('3389')}
  })
  it.each(['-1','65536','100-10','Any,80','1e3','<script>'])('rejects invalid intervals %s',value=>{
    expect(validateWindowsRule({...emptyWindowsForm(),name:'Invalid',kind:'port',protocol:'udp',localPorts:value}).errors.localPorts).toBeTruthy()
  })
  it('requires profiles, bounded names and supported application IDs; Other is not an editable matcher',()=>{
    expect(validateWindowsRule({...emptyWindowsForm(),name:'x',application:'other'}).errors.application).toBeTruthy()
    expect(validateWindowsRule({...emptyWindowsForm(),name:'x',application:'inventory',domain:'false',private:'false',public:'false'}).errors.profiles).toBeTruthy()
    expect(validateWindowsRule({...emptyWindowsForm(),name:'x'.repeat(81)}).errors.name).toBeTruthy()
    expect(isWindowsRule({...program(),localPorts:{start:1,end:2,text:'Any'}})).toBe(false)
    expect(isWindowsRule({...program(),application:'other'})).toBe(false)
  })
  it('validates operational traffic ports without pretending to connect to a server',()=>{
    const f={application:'inventory',profile:'domain',direction:'inbound',protocol:'tcp',localPort:'0',remotePort:'65535'}
    expect(validateWindowsTraffic(f).flow?.localPort).toBe(0)
    for(const localPort of ['Any','-1','65536','80-81',''])expect(validateWindowsTraffic({...f,localPort}).errors.localPort).toBeTruthy()
  })
})
describe('approved effective-policy objectives',()=>{
  it.each([
    ['empty',[],0],['correct',[program()],1],['Domain only',[program({profiles:['domain']})],2/3],
    ['Private only',[program({profiles:['private']})],2/3],['Public exposure',[program({profiles:['domain','private','public']})],2/3],
    ['all programs',[program({application:'any'})],0],['outbound only',[program({direction:'outbound'})],0],
    ['conflicting Domain Block',[program(),program({id:2,action:'block',profiles:['domain']})],2/3],
    ['equivalent split profiles',[program({profiles:['domain']}),program({id:2,profiles:['private']})],1],
    ['disabled broad Allow',[program(),program({id:2,application:'any',enabled:false})],1],
  ] as const)('%s yields %s',(_label,rules,expected)=>expect(score([...rules])).toBe(expected))
  it('rejects a shadowed raw-port Allow structurally and distinguishes insecurity from incompleteness',()=>{
    const raw={...validateWindowsRule({...emptyWindowsForm(),name:'Raw',domain:'false',private:'false',kind:'port',protocol:'udp',localPorts:'53'}).rule!,id:2,enabled:true}
    const block={...raw,id:3,action:'block' as const}
    const a=analyzeWindows([program(),raw,block])
    expect(a.domain).toBe(true);expect(a.private).toBe(true);expect(a.isolation).toBe(false);expect(a.constructionViolation).toBe(true);expect(a.insecure).toBe(true);expect(a.incomplete).toBe(false)
    expect(analyzeWindows([program({profiles:['domain']})])).toMatchObject({incomplete:true,insecure:false})
    expect(analyzeWindows([program({profiles:['public']})])).toMatchObject({incomplete:true,insecure:true})
  })
  it('does not accept narrow port Allow as an application exception, or miss exposure outside diagnostic probes',()=>{
    const raw={...validateWindowsRule({...emptyWindowsForm(),name:'Unexpected last port',kind:'port',protocol:'udp',localPorts:'65535',remotePorts:'65535'}).rule!,id:2,enabled:true}
    const a=analyzeWindows([program(),raw]);expect(a.domain).toBe(false);expect(a.private).toBe(false);expect(a.insecure).toBe(true);expect(a.exposureExample?.localPort).toBe(65535)
  })
  it('requires full port/protocol coverage for trusted profiles, with no hidden egress objective',()=>{
    const raw={...validateWindowsRule({...emptyWindowsForm(),name:'Block one port',kind:'port',protocol:'tcp',localPorts:'1',public:'false'}).rule!,id:2,enabled:true,action:'block' as const}
    expect(analyzeWindows([program(),raw])).toMatchObject({domain:false,private:false,isolation:true,incomplete:true,insecure:false})
    expect(score([program(),program({id:2,direction:'outbound',action:'block',application:'any'})])).toBe(1)
  })
  it('is order independent and exact over worst-case port boundaries within defensive limits',()=>{
    const rules=Array.from({length:12},(_,i)=>({...validateWindowsRule({...emptyWindowsForm(),name:`Rule ${i}`,kind:'port',protocol:i%2?'tcp':'udp',localPorts:`${i*100+1}-${i*100+2}`,remotePorts:`${i*200+3}-${i*200+4}`}).rule!,id:i+1,enabled:true,action:'block' as const}))
    const a=analyzeWindows(rules);expect(a.cells).toBe(15000);expect(a.ruleVisits).toBe(180000)
    expect(analyzeWindows([...rules].reverse())).toEqual(a)
    expect(()=>analyzeWindows([...rules,program({id:13})])).toThrow()
    for(let i=0;i<5;i++)analyzeWindows(rules)
    const times=Array.from({length:25},()=>{const start=performance.now();analyzeWindows(rules);return performance.now()-start}).sort((a,b)=>a-b)
    console.info(`Windows exact analysis Node p95: ${times[23].toFixed(2)}ms; cells ${a.cells}; visits ${a.ruleVisits}`)
    expect(times[23]).toBeLessThanOrEqual(250)
  })
})
