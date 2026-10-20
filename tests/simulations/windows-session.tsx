import { StrictMode,useEffect,useState } from 'react'
import { createRoot } from 'react-dom/client'
import {exam as bank} from '../../src/data/220-1202'
import {blankProgress} from '../../src/lib/progress'
import {useQuizSession} from '../../src/lib/quiz-session'
import {bindingKey} from '../../src/simulations/core/contracts'
import {compileScenario} from '../../src/simulations/core/transition'
import {windowsFirewallDefinition} from '../../src/simulations/scenarios/windows-firewall'
const p=bank.pbqs.find(p=>p.title===windowsFirewallDefinition.binding.title)!,runtime=compileScenario(windowsFirewallDefinition),bindings={[bindingKey(runtime.binding)]:runtime}
function Fixture(){const [events,setEvents]=useState<number[]>([]);const session=useQuizSession({...bank,pbqs:[p]},blankProgress(),{mode:'pbq'},{onSeen:()=>{},onResult:(_topic,frac)=>setEvents(v=>[...v,frac])},bindings)
useEffect(()=>{session.dispatchSimulation({type:'edit',id:null})},[])
return <><button onClick={()=>{for(const[field,value]of Object.entries({name:'Inventory',application:'inventory',public:'false'}))session.dispatchSimulation({type:'draft-field',field,value});session.dispatchSimulation({type:'apply'});session.gradePbq();session.gradePbq()}}>Apply and grade twice</button><button onClick={session.resetSimulation}>Reset</button><output data-testid="windows-snapshot">{JSON.stringify({answer:session.answers[session.idx],graded:session.graded[session.idx],events})}</output></>}
createRoot(document.getElementById('root')!).render(<StrictMode><Fixture/></StrictMode>)
