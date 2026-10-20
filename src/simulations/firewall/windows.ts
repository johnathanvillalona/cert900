import { boundedText, contains, counter, ports, record, type Interval } from './primitives'

export const WINDOWS_MAX_RULES = 12
export const PROFILES = ['domain', 'private', 'public'] as const
export const APPLICATIONS = {
  inventory: { name: 'Inventory', path: 'C:\\Program Files\\Cert900 Inventory\\Inventory.exe' },
  helper: { name: 'Diagnostics Helper', path: 'C:\\Program Files\\Cert900 Tools\\Diagnostics.exe' },
  rdp: { name: 'Remote Desktop', path: 'Built-in Remote Desktop service (bounded template)' },
} as const
export type Profile = typeof PROFILES[number]
export type Application = keyof typeof APPLICATIONS
export type Flow = { profile: Profile; application: Application | 'other'; direction: 'inbound' | 'outbound'; protocol: 'tcp' | 'udp'; localPort: number; remotePort: number }
export type WindowsRule = {
  id: number; name: string; enabled: boolean; kind: 'program' | 'port' | 'predefined'; application: Application | 'any'
  direction: Flow['direction']; profiles: readonly Profile[]; protocol: 'any' | Flow['protocol']; localPorts: Interval; remotePorts: Interval; action: 'allow' | 'block'
}
export type WindowsForm = { name: string; kind: string; application: string; direction: string; protocol: string; localPorts: string; remotePorts: string; action: string; domain: string; private: string; public: string }
export const windowsFields = ['name','kind','application','direction','protocol','localPorts','remotePorts','action','domain','private','public'] as const
export const emptyWindowsForm = (direction: Flow['direction'] = 'inbound'): WindowsForm => ({ name: '', kind: 'program', application: '', direction, protocol: 'any', localPorts: 'Any', remotePorts: 'Any', action: 'allow', domain: 'true', private: 'true', public: 'true' })
export const ruleToForm = (r: WindowsRule): WindowsForm => ({ name:r.name, kind:r.kind, application:r.application, direction:r.direction, protocol:r.protocol, localPorts:r.localPorts.text, remotePorts:r.remotePorts.text, action:r.action, ...Object.fromEntries(PROFILES.map(p=>[p,String(r.profiles.includes(p))])) } as WindowsForm)
const oneOf = <T extends string>(v: unknown, values: readonly T[]): v is T => values.some(x=>x===v)
export const isProfile = (v: unknown): v is Profile => oneOf(v, PROFILES)
export function validateWindowsRule(f: WindowsForm): { rule?: Omit<WindowsRule,'id'|'enabled'>; errors: Record<string,string> } {
  const errors: Record<string,string> = {}
  if (!f.name.trim() || f.name.trim().length>80) errors.name='Enter a rule name, up to 80 characters.'
  if (!oneOf(f.kind,['program','port','predefined'])) errors.kind='Choose a supported rule type.'
  if (!oneOf(f.direction,['inbound','outbound'])) errors.direction='Choose Inbound or Outbound.'
  if (!oneOf(f.action,['allow','block'])) errors.action='Choose Allow or Block.'
  if (PROFILES.some(p=>!['true','false'].includes(f[p])) || !PROFILES.some(p=>f[p]==='true')) errors.profiles='Select at least one profile.'
  const selected=PROFILES.filter(p=>f[p]==='true')
  let application: WindowsRule['application']='any', protocol: WindowsRule['protocol']='any', localPorts=ports('Any')!, remotePorts=ports('Any')!
  if(f.kind==='program') {
    if(!oneOf(f.application,['inventory','helper','rdp','any'])) errors.application='Select an installed application or All programs.'
    else application=f.application
  } else if(f.kind==='predefined') {
    application='rdp';protocol='tcp'
    if(f.direction==='inbound') localPorts=ports('3389')!
    else remotePorts=ports('3389')!
  } else if(f.kind==='port') {
    if(!oneOf(f.protocol,['tcp','udp'])) errors.protocol='Port rules require TCP or UDP.'
    else protocol=f.protocol
    const local=ports(f.localPorts),remote=ports(f.remotePorts)
    if(!local)errors.localPorts='Use Any, a port or an inclusive interval from 0 to 65535.'
    if(!remote)errors.remotePorts='Use Any, a port or an inclusive interval from 0 to 65535.'
    localPorts=local??localPorts;remotePorts=remote??remotePorts
  }
  if(Object.keys(errors).length)return {errors}
  return {errors,rule:{name:f.name.trim(),kind:f.kind as WindowsRule['kind'],application,direction:f.direction as Flow['direction'],profiles:selected,protocol,localPorts,remotePorts,action:f.action as WindowsRule['action']}}
}
export function isWindowsRule(v: unknown): v is WindowsRule {
  if(!record(v)||!counter(v.id)||v.id<1||typeof v.enabled!=='boolean'||!boundedText(v.name,80)||!Array.isArray(v.profiles)||v.profiles.length<1||v.profiles.length>3||!v.profiles.every(isProfile)||new Set(v.profiles).size!==v.profiles.length||!record(v.localPorts)||!record(v.remotePorts)) return false
  const profiles=v.profiles
  const f={name:v.name,kind:v.kind,application:v.application,direction:v.direction,protocol:v.protocol,localPorts:v.localPorts.text,remotePorts:v.remotePorts.text,action:v.action,...Object.fromEntries(PROFILES.map(p=>[p,String(profiles.includes(p))]))} as WindowsForm
  if(!windowsFields.every(k=>boundedText(f[k])))return false
  const {rule}=validateWindowsRule(f)
  return !!rule && Object.keys(rule).every(k=>k==='profiles'||JSON.stringify(rule[k as keyof typeof rule])===JSON.stringify(v[k]))
}
export function windowsMatches(r: WindowsRule, f: Flow): boolean {
  return r.enabled && r.direction===f.direction && r.profiles.includes(f.profile) && (r.application==='any'||r.application===f.application) && (r.protocol==='any'||r.protocol===f.protocol) && contains(r.localPorts,f.localPort)&&contains(r.remotePorts,f.remotePort)
}
export type WindowsDecision = { action: 'allow'|'block'; reason: 'explicit-block'|'explicit-allow'|'default'; ruleIds: readonly number[] }
/** Windows precedence is independent of row order: explicit Block > Allow > profile default. */
export function evaluateWindows(rules: readonly WindowsRule[], flow: Flow): WindowsDecision {
  const matched=rules.filter(r=>windowsMatches(r,flow)), blocks=matched.filter(r=>r.action==='block')
  if(blocks.length)return {action:'block',reason:'explicit-block',ruleIds:blocks.map(r=>r.id)}
  if(matched.length)return {action:'allow',reason:'explicit-allow',ruleIds:matched.map(r=>r.id)}
  return {action:flow.direction==='inbound'?'block':'allow',reason:'default',ruleIds:[]}
}
export function isFlow(v: unknown): v is Flow {
  return record(v)&&isProfile(v.profile)&&oneOf(v.application,['inventory','helper','rdp','other'])&&oneOf(v.direction,['inbound','outbound'])&&oneOf(v.protocol,['tcp','udp'])&&counter(v.localPort)&&v.localPort<65536&&counter(v.remotePort)&&v.remotePort<65536
}
export type WindowsTrafficForm = { profile:string; application:string; direction:string; protocol:string; localPort:string; remotePort:string }
export const windowsTrafficFields=['profile','application','direction','protocol','localPort','remotePort'] as const
export const emptyWindowsTraffic=():WindowsTrafficForm=>({profile:'domain',application:'inventory',direction:'inbound',protocol:'tcp',localPort:'',remotePort:''})
export function validateWindowsTraffic(form: WindowsTrafficForm): {flow?:Flow;errors:Record<string,string>} {
  const errors:Record<string,string>={}
  if(!isProfile(form.profile))errors.profile='Select a profile.'
  if(!oneOf(form.application,['inventory','helper','rdp','other']))errors.application='Select an application.'
  if(!oneOf(form.direction,['inbound','outbound']))errors.direction='Select a direction.'
  if(!oneOf(form.protocol,['tcp','udp']))errors.protocol='Select TCP or UDP.'
  for(const field of ['localPort','remotePort'] as const)if(!/^\d{1,5}$/.test(form[field].trim())||Number(form[field])>65535)errors[field]='Enter one port from 0 to 65535.'
  return Object.keys(errors).length?{errors}:{errors,flow:{profile:form.profile as Profile,application:form.application as Flow['application'],direction:form.direction as Flow['direction'],protocol:form.protocol as Flow['protocol'],localPort:Number(form.localPort),remotePort:Number(form.remotePort)}}
}
export type WindowsAnalysis={domain:boolean;private:boolean;isolation:boolean;incomplete:boolean;insecure:boolean;constructionViolation:boolean;missingExample:Flow|null;exposureExample:Flow|null;cells:number;ruleVisits:number}
/** Exact equivalence classes, not sample traffic: all match predicates are constant in each cell. */
export function analyzeWindows(rules:readonly WindowsRule[]):WindowsAnalysis {
  if(rules.length>WINDOWS_MAX_RULES||!rules.every(isWindowsRule))throw new Error('Invalid or oversized Windows policy')
  const boundaries=(key:'localPorts'|'remotePorts')=>[...new Set([0,65536,...rules.flatMap(r=>[r[key].start,r[key].end+1])])].sort((a,b)=>a-b)
  const local=boundaries('localPorts'),remote=boundaries('remotePorts')
  const result:WindowsAnalysis={domain:true,private:true,isolation:false,incomplete:false,insecure:false,constructionViolation:rules.some(r=>r.enabled&&r.direction==='inbound'&&r.action==='allow'&&r.kind!=='program'),missingExample:null,exposureExample:null,cells:0,ruleVisits:0}
  let someAuthorized=false,otherExposure=false,publicExposure=false
  for(const profile of PROFILES)for(const application of ['inventory','helper','rdp','other'] as const)for(const protocol of ['tcp','udp'] as const)for(let l=0;l<local.length-1;l++)for(let p=0;p<remote.length-1;p++) {
    if(++result.cells>65536)throw new Error('Exact Windows analysis cell invariant exceeded')
    const flow:Flow={profile,application,protocol,direction:'inbound',localPort:local[l],remotePort:remote[p]}
    let allow=false,block=false
    for(const r of rules){if(++result.ruleVisits>1_000_000)throw new Error('Exact Windows analysis rule invariant exceeded');if(windowsMatches(r,flow)){if(r.action==='block')block=true;else allow=true}}
    const allowed=allow&&!block,expected=application==='inventory'&&profile!=='public'
    if(expected&&allowed)someAuthorized=true
    if(expected&&!allowed){result.incomplete=true;result.missingExample??=flow}
    if(!expected&&allowed){result.insecure=true;result.exposureExample??=flow;if(application!=='inventory')otherExposure=true;if(profile==='public')publicExposure=true}
    if(profile!=='public'&&allowed!==(application==='inventory'))result[profile]=false
  }
  result.isolation=!otherExposure&&!publicExposure&&!result.constructionViolation&&someAuthorized
  result.insecure ||= result.constructionViolation
  return result
}
