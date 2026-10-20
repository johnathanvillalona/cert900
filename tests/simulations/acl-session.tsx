import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { exam as bank } from '../../src/data/n10-009'
import { blankProgress } from '../../src/lib/progress'
import { useQuizSession } from '../../src/lib/quiz-session'
import { bindingKey } from '../../src/simulations/core/contracts'
import { compileScenario } from '../../src/simulations/core/transition'
import { edgeAclDefinition } from '../../src/simulations/scenarios/edge-acl'
const p=bank.pbqs.find(p=>p.title==='Build the Edge ACL')!
const exam={...bank,pbqs:[p]}
const runtime=compileScenario(edgeAclDefinition)
const bindings={[bindingKey(runtime.binding)]:runtime}
function Fixture(){
  const [events,setEvents]=useState<number[]>([])
  const session=useQuizSession(exam,blankProgress(),{mode:'pbq'},{onSeen:()=>{},onResult:(_topic,frac)=>setEvents(v=>[...v,frac])},bindings)
  useEffect(()=>{session.dispatchSimulation({type:'edit',id:null})},[]) // StrictMode repeats safely before any draft edits.
  const applyAndGrade=()=>{
    for(const [field,value] of Object.entries({name:'web',destination:'192.0.2.80',ports:'443'})) session.dispatchSimulation({type:'draft-field',field,value})
    session.dispatchSimulation({type:'apply'})
    session.gradePbq();session.gradePbq()
  }
  return <><button onClick={applyAndGrade}>Apply and grade twice</button><button onClick={session.resetSimulation}>Reset</button>
    <output data-testid="acl-snapshot">{JSON.stringify({answer:session.answers[session.idx],graded:session.graded[session.idx],events})}</output></>
}
createRoot(document.getElementById('root')!).render(<StrictMode><Fixture/></StrictMode>)
