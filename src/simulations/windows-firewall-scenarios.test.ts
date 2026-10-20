import { expect, it } from 'vitest'
import { exam } from '../data/220-1202'
import { pbqAnswerBlank, pbqScore } from '../lib/engine'
import { blankProgress } from '../lib/progress'
import { createQuizState, quizSessionReducer } from '../lib/quiz-session'
import { bindingKey, type JsonValue } from './core/contracts'
import { compileScenario } from './core/transition'
import { initialWindowsState, isWindowsState, transitionWindows, windowsFirewallDefinition, type WindowsState } from './scenarios/windows-firewall'
const runtime=compileScenario(windowsFirewallDefinition),p=exam.pbqs.find(p=>p.title===runtime.binding.title)!,bindings={[bindingKey(runtime.binding)]:runtime}
function add(s=initialWindowsState()) {s=transitionWindows(s,{type:'edit',id:null});for(const [field,value] of Object.entries({name:'Warehouse',application:'inventory',public:'false'}))s=transitionWindows(s,{type:'draft-field',field:field as 'name',value});return transitionWindows(s,{type:'apply'})}
it('Windows initial/reset state is fresh, blank and zero; legacy question initial credit remains unchanged',()=>{
  expect(isWindowsState(initialWindowsState())).toBe(true);expect(pbqScore(p,runtime.initialAnswer(),runtime)).toBe(0);expect(pbqAnswerBlank(p,runtime.initialAnswer(),runtime)).toBe(true)
  const legacy=createQuizState(exam,blankProgress(),{mode:'pbq'})
  const idx=legacy.items.findIndex(q=>q.kind==='pbq'&&q.p.title===p.title)
  expect(pbqScore(p,legacy.answers[idx] as never)).toBe(1/6)
  expect(runtime.initialAnswer().state).not.toBe(runtime.initialAnswer().state)
})
it('Windows drafts, invalid Apply, Cancel, editing, toggling and deletion remain authoritative',()=>{
  let s=transitionWindows(initialWindowsState(),{type:'edit',id:null});s=transitionWindows(s,{type:'apply'});expect(s.rules).toEqual([]);expect(s.errors.name).toBeTruthy();expect(s.errors.application).toBeTruthy()
  s=transitionWindows(s,{type:'cancel'});expect(s.draft).toBeNull();expect(s.revision).toBe(0)
  s=add(s);expect(s.rules).toHaveLength(1);expect(s.revision).toBe(1);expect(isWindowsState(s)).toBe(true)
  s=transitionWindows(s,{type:'toggle',id:1});s=transitionWindows(s,{type:'edit',id:1});s=transitionWindows(s,{type:'draft-field',field:'name',value:'Renamed'});s=transitionWindows(s,{type:'apply'})
  expect(s.rules[0]).toMatchObject({id:1,name:'Renamed',enabled:false});expect(s.nextRuleId).toBe(2)
  s=transitionWindows(s,{type:'delete',id:1});expect(s.rules).toEqual([])
  expect(transitionWindows(s,{type:'toggle',id:999})).toBe(s)
})
it('Windows caps rules at 12, histories at 20 and keeps diagnostics unscored and revision-tagged',()=>{
  let s=add();const grade=()=>pbqScore(p,{...runtime.initialAnswer(),state:s},runtime)
  expect(grade()).toBe(1);s=transitionWindows(s,{type:'test'});expect(s.trafficErrors.localPort).toBeTruthy()
  for(const field of ['localPort','remotePort'] as const)s=transitionWindows(s,{type:'traffic-field',field,value:'65535'})
  for(let i=0;i<25;i++)s=transitionWindows(s,{type:'test'})
  expect(s.history).toHaveLength(20);expect(s.history.at(-1)?.decision.action).toBe('allow');expect(grade()).toBe(1)
  s=transitionWindows(s,{type:'toggle',id:1});expect(s.history.at(-1)?.revision).toBe(1);expect(s.revision).toBe(2);expect(isWindowsState(s)).toBe(true)
  const full:WindowsState={...s,rules:Array.from({length:12},(_,i)=>({...s.rules[0],id:i+1})),nextRuleId:13}
  expect(transitionWindows(full,{type:'edit',id:null})).toBe(full)
})
it('Windows runtime rejects unsupported host actions, prototype fields, forged models and stale versions',()=>{
  const answer={...runtime.initialAnswer(),state:add()}
  expect(pbqScore(p,answer,runtime)).toBe(1)
  expect(pbqScore(p,{...answer,scenarioVersion:2},runtime)).toBe(0)
  const invalid:JsonValue[]=[{type:'host-shell',command:'netsh'}, {type:'move',id:1,delta:1}, {type:'draft-field',field:'__proto__',value:'x'}, {type:'draft-field',field:'name',value:'x'.repeat(121)}]
  for(const action of invalid)expect(runtime.transition(answer,action)).toBe(answer)
  expect(runtime.accepts({...answer,state:{...answer.state,rules:[{...answer.state.rules[0],application:'other'}]}})).toBe(false)
})
it('Windows session persists drafts/history, resets atomically, isolates questions and locks grading',()=>{
  let s=createQuizState(exam,blankProgress(),{mode:'pbq'},bindings)
  const idx=s.items.findIndex(q=>q.kind==='pbq'&&q.p.title===p.title),other=idx===0?1:0
  s=quizSessionReducer(s,{type:'nav',to:idx})
  const dispatch=(action:JsonValue)=>{s=quizSessionReducer(s,{type:'simulation-action',idx,scenarioId:runtime.id,version:1,action})}
  dispatch({type:'edit',id:null});dispatch({type:'draft-field',field:'name',value:'Pending'})
  const saved=s.answers[idx],otherAnswer=s.answers[other]
  s=quizSessionReducer(s,{type:'nav',to:other});const away=s;dispatch({type:'apply'});expect(s).toBe(away)
  s=quizSessionReducer(s,{type:'nav',to:idx});expect(s.answers[idx]).toBe(saved)
  s=quizSessionReducer(s,{type:'reset-simulation',idx});expect(s.answers[idx]).toMatchObject({state:initialWindowsState()});expect(s.answers[other]).toBe(otherAnswer)
  dispatch({type:'edit',id:null});for(const [field,value]of Object.entries({name:'Exception',application:'inventory',public:'false'}))dispatch({type:'draft-field',field,value});dispatch({type:'apply'})
  s=quizSessionReducer(s,{type:'grade-simulation',idx});expect(s.graded[idx]).toBe(1)
  const locked=s;dispatch({type:'delete',id:1});expect(s).toBe(locked);expect(quizSessionReducer(s,{type:'reset-simulation',idx})).toBe(s)
})
