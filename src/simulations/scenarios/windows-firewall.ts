import type { JsonValue, ScenarioDefinition } from '../core/contracts'
import { boundedText, counter, record } from '../firewall/primitives'
import { analyzeWindows, emptyWindowsForm, emptyWindowsTraffic, evaluateWindows, isFlow, isWindowsRule, ruleToForm, validateWindowsRule, validateWindowsTraffic, windowsFields, windowsTrafficFields, WINDOWS_MAX_RULES, type Flow, type WindowsDecision, type WindowsForm, type WindowsRule, type WindowsTrafficForm } from '../firewall/windows'
export type WindowsState={rules:readonly WindowsRule[];nextRuleId:number;revision:number;draft:{editingId:number|null;form:WindowsForm}|null;errors:Record<string,string>;traffic:WindowsTrafficForm;trafficErrors:Record<string,string>;history:readonly{id:number;revision:number;flow:Flow;decision:WindowsDecision}[];nextTestId:number}
export type WindowsAction={type:'edit';id:number|null;direction?:Flow['direction']}|{type:'draft-field';field:keyof WindowsForm;value:string}|{type:'traffic-field';field:keyof WindowsTrafficForm;value:string}|{type:'apply'}|{type:'cancel'}|{type:'test'}|{type:'delete'|'toggle';id:number}
export const initialWindowsState=():WindowsState=>({rules:[],nextRuleId:1,revision:0,draft:null,errors:{},traffic:emptyWindowsTraffic(),trafficErrors:{},history:[],nextTestId:1})
const formValid=(v:unknown,keys:readonly string[])=>record(v)&&Object.keys(v).length===keys.length&&keys.every(k=>boundedText(v[k]))
const errorsValid=(v:unknown)=>record(v)&&Object.keys(v).length<=12&&Object.values(v).every(x=>boundedText(x,200))
export function isWindowsState(v:JsonValue):v is WindowsState {
  if(!record(v)||!Array.isArray(v.rules)||v.rules.length>WINDOWS_MAX_RULES||!v.rules.every(isWindowsRule)||!counter(v.nextRuleId)||v.nextRuleId<1||!counter(v.revision))return false
  const ids=v.rules.map(r=>r.id)
  return new Set(ids).size===ids.length&&ids.every(id=>id<Number(v.nextRuleId))&&(v.draft===null||(record(v.draft)&&(v.draft.editingId===null||(counter(v.draft.editingId)&&ids.includes(v.draft.editingId)))&&formValid(v.draft.form,windowsFields)))&&errorsValid(v.errors)&&formValid(v.traffic,windowsTrafficFields)&&errorsValid(v.trafficErrors)&&counter(v.nextTestId)&&v.nextTestId>0&&Array.isArray(v.history)&&v.history.length<=20&&v.history.every(h=>record(h)&&counter(h.id)&&h.id>0&&h.id<Number(v.nextTestId)&&counter(h.revision)&&h.revision<=Number(v.revision)&&isFlow(h.flow)&&record(h.decision)&&['allow','block'].includes(String(h.decision.action))&&['explicit-block','explicit-allow','default'].includes(String(h.decision.reason))&&Array.isArray(h.decision.ruleIds)&&h.decision.ruleIds.length<=12&&h.decision.ruleIds.every(id=>counter(id)&&id>0))
}
export function isWindowsAction(v:JsonValue):v is WindowsAction {
  if(!record(v))return false
  if(['apply','cancel','test'].includes(String(v.type)))return true
  if(v.type==='edit')return(v.id===null||(counter(v.id)&&v.id>0))&&(v.direction===undefined||['inbound','outbound'].includes(String(v.direction)))
  if(v.type==='delete'||v.type==='toggle')return counter(v.id)&&v.id>0
  if(v.type==='draft-field')return windowsFields.some(k=>k===v.field)&&boundedText(v.value)
  if(v.type==='traffic-field')return windowsTrafficFields.some(k=>k===v.field)&&boundedText(v.value)
  return false
}
export function transitionWindows(s:WindowsState,a:WindowsAction):WindowsState {
  if(a.type==='edit'){
    const rule=s.rules.find(r=>r.id===a.id)
    if(a.id!==null&&!rule||a.id===null&&s.rules.length>=WINDOWS_MAX_RULES)return s
    return{...s,draft:{editingId:a.id,form:rule?ruleToForm(rule):emptyWindowsForm(a.direction)},errors:{}}
  }
  if(a.type==='cancel')return{...s,draft:null,errors:{}}
  if(a.type==='draft-field')return s.draft?{...s,draft:{...s.draft,form:{...s.draft.form,[a.field]:a.value}},errors:{}}:s
  if(a.type==='apply'){
    if(!s.draft)return s
    const {rule,errors}=validateWindowsRule(s.draft.form)
    if(!rule)return{...s,errors}
    const id=s.draft.editingId
    if(id===null&&s.rules.length>=WINDOWS_MAX_RULES)return s
    const next={...rule,id:id??s.nextRuleId,enabled:id===null?true:s.rules.find(r=>r.id===id)!.enabled}
    return{...s,rules:id===null?[...s.rules,next]:s.rules.map(r=>r.id===id?next:r),nextRuleId:s.nextRuleId+(id===null?1:0),revision:s.revision+1,draft:null,errors:{}}
  }
  if(a.type==='traffic-field')return{...s,traffic:{...s.traffic,[a.field]:a.value},trafficErrors:{}}
  if(a.type==='test'){
    const {flow,errors}=validateWindowsTraffic(s.traffic)
    if(!flow)return{...s,trafficErrors:errors}
    return{...s,trafficErrors:{},nextTestId:s.nextTestId+1,history:[...s.history,{id:s.nextTestId,revision:s.revision,flow,decision:evaluateWindows(s.rules,flow)}].slice(-20)}
  }
  if(s.draft||!s.rules.some(r=>r.id===a.id))return s
  return{...s,rules:a.type==='delete'?s.rules.filter(r=>r.id!==a.id):s.rules.map(r=>r.id===a.id?{...r,enabled:!r.enabled}:r),revision:s.revision+1}
}
export const windowsFirewallDefinition:ScenarioDefinition<WindowsState,WindowsAction>={
  id:'a-plus.inventory-firewall',version:1,binding:{exam:'220-1202',kind:'config',topic:'win-firewall-cfg',title:'Windows Defender Firewall: Allow the App'},metadata:{title:'Warehouse application firewall',workspace:'administration'},initialState:initialWindowsState,isState:isWindowsState,isAction:isWindowsAction,transition:transitionWindows,isBlank:s=>s.rules.length===0,
  grading:{kind:'objectives',evaluate:s=>{const a=analyzeWindows(s.rules);return[
    {id:'domain',label:'Domain inbound access for Inventory only',weight:1,satisfied:a.domain},
    {id:'private',label:'Private inbound access for Inventory only',weight:1,satisfied:a.private},
    {id:'isolation',label:'Public isolation and program exceptions, with trusted access functioning',weight:1,satisfied:a.isolation},
  ]}},
}
