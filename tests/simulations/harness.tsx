import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { exam as original } from '../../src/data/220-1201'
import { blankProgress } from '../../src/lib/progress'
import { foldAnswers } from '../../src/lib/answers'
import { useQuizSession, type QuizMode } from '../../src/lib/quiz-session'
import { bindingKey } from '../../src/simulations/core/contracts'
import { compileScenario } from '../../src/simulations/core/transition'
import { dhcpDefinition } from '../../src/simulations/scenarios/dhcp-lease'

const p = original.pbqs.find(p => p.title === 'Fix a Stale DHCP Lease')!
const other = original.pbqs.find(p => p.kind === 'match')!
const exam = {...original, questions: [original.questions[0]], pbqs:[p,other], examPBQ:2, examMC:1}
const mode = new URLSearchParams(location.search).get('mode') === 'exam' ? 'exam' : 'pbq'
const runtime = compileScenario(dhcpDefinition)
const initialBindings = { [bindingKey(runtime.binding)]: runtime }
function Fixture() {
  const [attempt,setAttempt] = useState(0)
  const [events,setEvents] = useState<number[]>([])
  return <><button onClick={()=>setAttempt(n=>n+1)}>Retry fresh attempt</button>
    <output data-testid="events">{JSON.stringify(events)}</output>
    <Attempt key={attempt} mode={mode} onResult={frac=>setEvents(v=>[...v,frac])}/></>
}
function Attempt({mode,onResult}:{mode:QuizMode;onResult:(frac:number)=>void}) {
  const [bindings,setBindings] = useState(initialBindings)
  const [commits,setCommits] = useState(0)
  const [progress,setProgress] = useState(blankProgress)
  const finished = useRef(false)
  const session = useQuizSession(exam,blankProgress(),{mode},{onResult:(_topic,frac)=>onResult(frac),onSeen:()=>{}},bindings)
  useEffect(()=>{
    const idx = session.items.findIndex(it=>it.kind==='pbq' && it.p.title===p.title)
    session.jump(idx)
    // One initial jump per attempt; rerenders must not reset navigation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=>{
    if(!session.finished || finished.current) return
    finished.current=true
    const outcome=session.outcome()
    if(outcome.mode==='exam') {
      setProgress(v=>foldAnswers(v,outcome.review.map(r=>r.kind==='pbq'?{topic:r.p.t,frac:r.frac}:{topic:r.q.t,frac:r.ok?1:0,questionId:r.q.id})))
      setCommits(n=>n+1)
    }
  },[session])
  const release=()=>session.dispatchSimulation({type:'release',adapter:'Ethernet0'})
  const outcome=session.outcome()
  return <>
    <button onClick={release}>Release</button>
    <button onClick={()=>session.dispatchSimulation({type:'renew',adapter:'Ethernet0'})}>Renew</button>
    <button onClick={()=>session.dispatchSimulation({type:'flush-dns'})}>Flush DNS</button>
    <button onClick={session.resetSimulation}>Reset simulation</button>
    <button onClick={()=>{session.gradePbq();session.gradePbq()}}>Grade twice</button>
    <button onClick={()=>{release();session.gradePbq();session.gradePbq()}}>Release and grade in one event</button>
    <button onClick={()=>session.nav(1)}>Next</button><button onClick={()=>session.nav(-1)}>Previous</button>
    <button onClick={()=>session.jump(session.items.findIndex(it=>it.kind==='pbq' && it.p.title===p.title))}>Return to DHCP</button>
    <button onClick={()=>session.jump(session.items.findIndex(it=>it.kind==='pbq' && it.p.title===other.title))}>Other question</button>
    <button onClick={()=>{session.setMatch(0,0)}}>Set legacy match</button>
    <button onClick={()=>setBindings({[bindingKey(runtime.binding)]:compileScenario({...dhcpDefinition,version:2})})}>Replace binding prop</button>
    <button onClick={()=>session.setTerminal(0,'ipconfig /release')}>Legacy terminal setter</button>
    <button onClick={()=>{session.finish();session.finish()}}>Finish twice</button>
    <output data-testid="snapshot">{JSON.stringify({
      idx:session.idx, answer:session.answers[session.idx], answers:session.answers, graded:session.graded[session.idx],
      version:session.simulation?.version,unanswered:session.unansweredCount(),finished:session.finished,
      commits,progress,review:outcome.review.map(r=>r.kind==='pbq'?{title:r.p.title,frac:r.frac}:{title:'MC',frac:r.ok?1:0}),
      scaled:outcome.mode==='exam'?outcome.scaled:null,pct:outcome.mode==='exam'?outcome.pct:null,
    })}</output>
  </>
}
createRoot(document.getElementById('root')!).render(<StrictMode><Fixture/></StrictMode>)
