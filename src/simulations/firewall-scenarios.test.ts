import { describe, expect, it } from 'vitest'
import { exam } from '../data/n10-009'
import { pbqAnswerBlank, pbqScore, type PBQAnswer } from '../lib/engine'
import { blankProgress } from '../lib/progress'
import { createQuizState, quizSessionReducer } from '../lib/quiz-session'
import { bindingKey, type JsonValue } from './core/contracts'
import { compileScenario } from './core/transition'
import { edgeAclDefinition, initialAclState, isAclState, transitionAcl, type AclState } from './scenarios/edge-acl'
import { ssh, web } from '../../tests/simulations/acl-fixtures'
const runtime=compileScenario(edgeAclDefinition)
const p=exam.pbqs.find(p=>p.title==='Build the Edge ACL')!
const bindings={[bindingKey(runtime.binding)]:runtime}
const withRules=(rules=[web(),ssh()])=>({...runtime.initialAnswer(),state:{...initialAclState(),rules,nextRuleId:13}})
function addWeb(state=initialAclState()) {
  state=transitionAcl(state,{type:'edit',id:null})
  for(const [field,value] of Object.entries({name:'Public web',source:'Any',destination:'192.0.2.80',protocol:'tcp',ports:'443',action:'allow'})) state=transitionAcl(state,{type:'draft-field',field:field as 'name',value})
  return transitionAcl(state,{type:'apply'})
}
describe('authoritative ACL state and adapter',()=>{
  it('starts/reset initializes fresh with zero credit and no draft/test history',()=>{
    expect(pbqScore(p,runtime.initialAnswer(),runtime)).toBe(0)
    expect(pbqAnswerBlank(p,runtime.initialAnswer(),runtime)).toBe(true)
    expect(isAclState(initialAclState())).toBe(true)
    expect(runtime.initialAnswer().state).not.toBe(runtime.initialAnswer().state)
  })
  it('draft changes and invalid Apply never modify applied policy; Cancel discards the draft',()=>{
    let s=transitionAcl(initialAclState(),{type:'edit',id:null})
    s=transitionAcl(s,{type:'apply'})
    expect(s.rules).toEqual([]);expect(s.errors.name).toBeTruthy();expect(s.errors.ports).toBeTruthy()
    expect(pbqAnswerBlank(p,{...runtime.initialAnswer(),state:s},runtime)).toBe(true)
    s=transitionAcl(s,{type:'cancel'})
    expect(s.draft).toBeNull();expect(s.errors).toEqual({});expect(s.revision).toBe(0)
  })
  it('applies normalized rules atomically, edits in place, and preserves enabled state',()=>{
    let s=addWeb()
    expect(s.rules).toHaveLength(1);expect(s.revision).toBe(1);expect(s.draft).toBeNull()
    s=transitionAcl(s,{type:'toggle',id:1})
    s=transitionAcl(s,{type:'edit',id:1})
    s=transitionAcl(s,{type:'draft-field',field:'source',value:'10.20.30.42/24'})
    s=transitionAcl(s,{type:'apply'})
    expect(s.rules[0].source.text).toBe('10.20.30.0/24');expect(s.rules[0].enabled).toBe(false)
    expect(s.nextRuleId).toBe(2);expect(isAclState(s)).toBe(true)
  })
  it('has safe ordering boundaries, replacement, delete, unknown IDs and rule limits',()=>{
    let s:AclState={...initialAclState(),rules:[web(),ssh()],nextRuleId:3}
    expect(transitionAcl(s,{type:'move',id:1,delta:-1})).toBe(s)
    s=transitionAcl(s,{type:'move',id:2,delta:-1})
    expect(s.rules.map(r=>r.id)).toEqual([2,1])
    s=transitionAcl(s,{type:'delete',id:1})
    expect(s.rules.map(r=>r.id)).toEqual([2])
    expect(transitionAcl(s,{type:'edit',id:999})).toBe(s)
    expect(transitionAcl(s,{type:'toggle',id:999})).toBe(s)
    const full={...s,rules:Array.from({length:12},(_,i)=>({...web(),id:i+1})),nextRuleId:13}
    expect(transitionAcl(full,{type:'edit',id:null})).toBe(full)
  })
  it('keeps traffic results revisioned and bounded without affecting grading',()=>{
    let s=addWeb()
    const score=()=>pbqScore(p,{...runtime.initialAnswer(),state:s},runtime)
    expect(score()).toBe(2/3)
    s=transitionAcl(s,{type:'test'})
    expect(s.history).toEqual([]);expect(s.trafficErrors.source).toBeTruthy()
    for(const [field,value] of Object.entries({source:'198.51.100.25',destination:'192.0.2.80',protocol:'tcp',port:'443'})) s=transitionAcl(s,{type:'traffic-field',field:field as 'source',value})
    for(let i=0;i<25;i++) s=transitionAcl(s,{type:'test'})
    expect(s.history).toHaveLength(20);expect(s.history.at(-1)?.decision.action).toBe('allow')
    expect(s.history.at(-1)?.revision).toBe(1);expect(score()).toBe(2/3)
    s=transitionAcl(s,{type:'toggle',id:1})
    expect(s.history.at(-1)?.revision).toBe(1);expect(s.revision).toBe(2)
    expect(isAclState(s)).toBe(true)
  })
  it('uses the shared score boundary and rejects wrong versions, forged rules and actions',()=>{
    const answer=withRules()
    expect(pbqScore(p,answer,runtime)).toBe(1)
    expect(pbqScore(p,{...answer,scenarioVersion:2},runtime)).toBe(0)
    const forged={...answer,state:{...answer.state,rules:[{...web(),source:{start:0,end:1,text:'Any'}}]}}
    expect(pbqScore(p,forged,runtime)).toBe(0)
    const invalid:JsonValue[]=[{type:'host-shell',command:'iptables'}, {type:'move',id:1,delta:20}, {type:'draft-field',field:'__proto__',value:'x'}, {type:'draft-field',field:'name',value:'x'.repeat(121)}]
    for(const action of invalid) expect(runtime.transition(answer,action)).toBe(answer)
    expect(runtime.transition(answer,{type:'edit',id:1}).state).not.toBe(answer.state)
  })
  it('persists per question, rejects stale actions, grades current state, locks and resets through session API',()=>{
    let s=createQuizState(exam,blankProgress(),{mode:'pbq'},bindings)
    const idx=s.items.findIndex(q=>q.kind==='pbq'&&q.p.title===p.title)
    s=quizSessionReducer(s,{type:'nav',to:idx})
    const dispatch=(state:typeof s,action:JsonValue)=>quizSessionReducer(state,{type:'simulation-action',idx,scenarioId:runtime.id,version:1,action})
    s=dispatch(s,{type:'edit',id:null})
    for(const [field,value] of Object.entries({name:'Public web',destination:'192.0.2.80',ports:'443'})) s=dispatch(s,{type:'draft-field',field,value})
    s=dispatch(s,{type:'apply'})
    const saved=s.answers[idx],other=idx===0?1:0,otherAnswer=s.answers[other]
    s=quizSessionReducer(s,{type:'nav',to:other})
    expect(dispatch(s,{type:'delete',id:1})).toBe(s)
    expect(quizSessionReducer(s,{type:'reset-simulation',idx})).toBe(s)
    s=quizSessionReducer(s,{type:'nav',to:idx})
    expect(s.answers[idx]).toBe(saved)
    s=quizSessionReducer(s,{type:'reset-simulation',idx})
    expect(s.answers[idx]).toMatchObject({state:initialAclState()});expect(s.answers[other]).toBe(otherAnswer)
    s=dispatch(s,{type:'edit',id:null})
    for(const [field,value] of Object.entries({name:'web',destination:'192.0.2.80',ports:'443'})) s=dispatch(s,{type:'draft-field',field,value})
    s=dispatch(s,{type:'apply'})
    s=quizSessionReducer(s,{type:'grade-simulation',idx})
    expect(s.graded[idx]).toBe(2/3)
    expect(dispatch(s,{type:'delete',id:1})).toBe(s)
    expect(quizSessionReducer(s,{type:'reset-simulation',idx})).toBe(s)
    expect(pbqScore(p,s.answers[idx] as PBQAnswer,runtime)).toBe(2/3)
  })
})
