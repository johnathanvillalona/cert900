import { describe, expect, it } from "vitest"
import { EXAMS } from "../data/index"
import { pbqAnswerBlank, pbqCredit, pbqScore, type PBQAnswer } from "../lib/engine"
import { blankProgress } from "../lib/progress"
import { createQuizState, quizSessionReducer, type QuizState } from "../lib/quiz-session"
import { bindingKey, questionKey, type JsonValue, type ScenarioDefinition, type SimulationBindings } from "./core/contracts"
import { compileScenario, isJsonValue, isSimulationAnswer } from "./core/transition"
import { prepareSimulationBindings, SCENARIOS } from "./registry"
import { dhcpDefinition, DHCP_FIXTURE, initialDhcpState, transitionDhcp } from "./scenarios/dhcp-lease"

const exam = EXAMS["220-1201"]
const question = exam.pbqs.find(p => p.title === "Fix a Stale DHCP Lease")!
const runtime = compileScenario(dhcpDefinition)
const bindings = { [bindingKey(runtime.binding)]: runtime }
const release = { type: "release", adapter: "Ethernet0" } as const
const renew = { type: "renew", adapter: "Ethernet0" } as const
const flush = { type: "flush-dns" } as const
function focus(state: QuizState): QuizState {
  const idx = state.items.findIndex(it => it.kind === "pbq" && it.p.title === question.title)
  return quizSessionReducer(state, { type: "nav", to: idx })
}
function sessionAction(state: QuizState, action: JsonValue): QuizState {
  return quizSessionReducer(state, { type: "simulation-action", idx: state.idx, scenarioId: runtime.id, version: runtime.version, action })
}
function score(state: QuizState) { return pbqScore(question, state.answers[state.idx] as PBQAnswer, state.simulations[state.idx]) }

// Model actions are tested here. The command parser/UI is deliberately a B2 gate.
describe("DHCP outcome rubric", () => {
  it("starts with APIPA, stale DNS, zero credit and isolated initial objects", () => {
    const a = initialDhcpState(), b = initialDhcpState()
    expect(a.adapter.ipv4).toBe(DHCP_FIXTURE.apipa)
    expect(a.adapter.gateway).toBeNull()
    expect(a.dnsCache).toHaveLength(1)
    a.adapter.ipv4 = "changed"
    expect(b.adapter.ipv4).toBe(DHCP_FIXTURE.apipa)
    expect(pbqScore(question, runtime.initialAnswer(), runtime)).toBe(0)
    expect(pbqAnswerBlank(question, runtime.initialAnswer(), runtime)).toBe(true)
  })
  it("gives 0, 1/3, 2/3, 1 through release, renewal and subsequent flush", () => {
    let answer = runtime.initialAnswer()
    for (const [action, expected] of [[release, 1/3], [renew, 2/3], [flush, 1]] as const) {
      answer = runtime.transition(answer, action)
      expect(pbqScore(question, answer, runtime)).toBe(expected)
      expect(pbqAnswerBlank(question, answer, runtime)).toBe(false)
    }
    const final = answer.state as ReturnType<typeof initialDhcpState>
    expect(final.adapter.ipv4).toBe(DHCP_FIXTURE.ipv4)
    expect(final.adapter.gateway).toBe(DHCP_FIXTURE.gateway)
    expect(final.dnsCache).toEqual([])
  })
  it("lets early renewal/flush change the model but gives no out-of-order credit", () => {
    let answer = runtime.transition(runtime.initialAnswer(), renew)
    expect((answer.state as ReturnType<typeof initialDhcpState>).adapter.ipv4).toBe(DHCP_FIXTURE.ipv4)
    answer = runtime.transition(answer, flush)
    expect(pbqScore(question, answer, runtime)).toBe(0)
    answer = runtime.transition(answer, release)
    answer = runtime.transition(answer, flush)
    expect(pbqScore(question, answer, runtime)).toBe(1/3)
    answer = runtime.transition(answer, renew)
    expect(pbqScore(question, answer, runtime)).toBe(2/3)
    answer = runtime.transition(answer, flush)
    expect(pbqScore(question, answer, runtime)).toBe(1)
  })
  it("does not reward unknown adapters/actions; re-release requires recovery again", () => {
    const start = runtime.initialAnswer()
    expect(runtime.transition(start, {type:"release",adapter:"Wi-Fi"})).toBe(start)
    expect(runtime.transition(start, {type:"host-shell",command:"anything"})).toBe(start)
    let answer = [release, renew, flush].reduce((a, action) => runtime.transition(a, action), start)
    answer = runtime.transition(answer, renew) // harmless repeat retains valid completed work
    expect(pbqScore(question, answer, runtime)).toBe(1)
    answer = runtime.transition(answer, release)
    expect(pbqScore(question, answer, runtime)).toBe(1/3)
  })
  it("does not undo cache-clearing credit when later diagnostics cache a fresh lookup", () => {
    const answer = [release, renew, flush].reduce((a, action) => runtime.transition(a, action), runtime.initialAnswer())
    const state = answer.state as ReturnType<typeof initialDhcpState>
    const afterLookup = {...answer, state:{...state,dnsCache:[{name:"inventory.office.test",address:"192.168.10.20"}]}}
    expect(pbqScore(question,afterLookup,runtime)).toBe(1)
  })
  it("is deterministic and leaves input immutable", () => {
    const start = runtime.initialAnswer()
    expect(Object.isFrozen(start.state)).toBe(true)
    expect(runtime.transition(start, release)).toEqual(runtime.transition(start, release))
    expect((start.state as ReturnType<typeof initialDhcpState>).adapter.lease).toBe("apipa")
    expect(transitionDhcp(initialDhcpState(), renew).milestones.renewedAfterRelease).toBe(false)
  })
})

describe("versioned adapter and grading boundary", () => {
  it("fails closed for missing definitions, wrong question, version, schema and state", () => {
    const answer = runtime.transition(runtime.initialAnswer(), release)
    expect(isSimulationAnswer(answer)).toBe(true)
    expect(pbqScore(question, answer)).toBe(0)
    expect(pbqAnswerBlank(question, answer)).toBe(true)
    for(const invalid of [
      {...answer,scenarioVersion:2}, {...answer,schemaVersion:2}, {...answer,scenarioId:"other"}, {...answer,state:{}},
    ]) {
      expect(pbqScore(question, invalid as PBQAnswer, runtime)).toBe(0)
      expect(pbqAnswerBlank(question, invalid as PBQAnswer, runtime)).toBe(true)
    }
    expect(pbqScore({...question,title:"Different question"},answer,runtime)).toBe(0)
    expect(pbqAnswerBlank({...question,title:"Different question"},answer,runtime)).toBe(true)
  })
  it("preserves vendor rules after raw simulation scoring", () => {
    const answer = runtime.transition(runtime.initialAnswer(),release)
    const raw = pbqScore(question, answer, runtime)
    for(const vendor of ["comptia","cisco"]) expect(pbqCredit(vendor,raw)).toBe(1/3)
    for(const vendor of ["aws","azure"]) expect(pbqCredit(vendor,raw)).toBe(0)
  })
  it("projects committed legacy values, preserving initial config credit", () => {
    const p = { kind:"config" as const,t:"config",title:"Fixture",scen:"",panel:"",fields:[
      {id:"a",label:"A",type:"toggle" as const,answer:true,initial:true},
      {id:"b",label:"B",type:"toggle" as const,answer:true,initial:false},
    ] }
    const definition: ScenarioDefinition<{a:boolean;b:boolean},{type:"apply"}> = {
      id:"fixture.config",version:1,binding:{exam:exam.id,kind:p.kind,topic:p.t,title:p.title},metadata:{title:"Fixture",workspace:"administration"},
      initialState:()=>({a:true,b:false}), transition:s=>({...s,b:true}),
      isState:(v):v is {a:boolean;b:boolean} => !!v && typeof v === "object" && "a" in v && typeof v.a === "boolean" && "b" in v && typeof v.b === "boolean",
      isAction:(v):v is {type:"apply"} => !!v && typeof v === "object" && "type" in v && v.type === "apply",
      isBlank:()=>false, grading:{kind:"legacy",project:s=>[s.a,s.b]},
    }
    const r=compileScenario(definition)
    expect(pbqScore(p,r.initialAnswer(),r)).toBe(0.5)
    expect(pbqAnswerBlank(p,r.initialAnswer(),r)).toBe(false)
    expect(pbqScore(p,r.transition(r.initialAnswer(),{type:"apply"}),r)).toBe(1)
  })
  it("rejects non-JSON and cyclic state; serialized answers round-trip", () => {
    const cycle: Record<string,unknown> = {}; cycle.self=cycle
    for(const v of [cycle, NaN, Infinity, undefined, ()=>{},new Date()]) expect(isJsonValue(v)).toBe(false)
    const answer=runtime.transition(runtime.initialAnswer(),release)
    expect(pbqScore(question,JSON.parse(JSON.stringify(answer)),runtime)).toBe(1/3)
  })
})

describe("registry and opt-in session lifecycle", () => {
  it("binds each registration to exactly one actual question; no duplicate keys or IDs", async () => {
    expect(new Set(SCENARIOS.map(s=>s.id)).size).toBe(SCENARIOS.length)
    expect(new Set(SCENARIOS.map(s=>bindingKey(s.binding))).size).toBe(SCENARIOS.length)
    for(const entry of SCENARIOS) {
      const bank=EXAMS[entry.binding.exam]
      expect(bank.pbqs.filter(p=>questionKey(bank.id,p)===bindingKey(entry.binding))).toHaveLength(1)
      expect(Object.keys(await prepareSimulationBindings(bank,[entry.id]))).toEqual([bindingKey(entry.binding)])
    }
    for(const bank of Object.values(EXAMS)) expect(await prepareSimulationBindings(bank)).toEqual({})
    await expect(prepareSimulationBindings(EXAMS["az-900"],[runtime.id])).rejects.toThrow()
    await expect(prepareSimulationBindings(exam,[runtime.id,runtime.id])).rejects.toThrow()
  })
  it("rejects unresolved/misbound definitions before initializing an exam clock", () => {
    expect(()=>createQuizState(exam,blankProgress(),{mode:"exam"},Promise.resolve(bindings) as unknown as SimulationBindings)).toThrow(/Resolve/)
    expect(()=>createQuizState(exam,blankProgress(),{mode:"exam"},{wrong:runtime})).toThrow(/binding/)
    const start=createQuizState(exam,blankProgress(),{mode:"exam"},bindings,123000)
    expect(start.endsAt).toBe(123000+exam.examMinutes*60000)
  })
  it("defaults to legacy answers and initializes only the opted-in question", () => {
    const legacy=focus(createQuizState(exam,blankProgress(),{mode:"pbq"}))
    expect(legacy.answers[legacy.idx]).toEqual(["","",""])
    expect(legacy.simulations).toEqual({})
    const state=focus(createQuizState(exam,blankProgress(),{mode:"pbq"},bindings))
    expect(isSimulationAnswer(state.answers[state.idx])).toBe(true)
    expect(Object.keys(state.simulations)).toHaveLength(1)
    expect(state.touched.size).toBe(0)
  })
  it("preserves answers on navigation, ignores stale actions, and resets only the active question", () => {
    let state=focus(createQuizState(exam,blankProgress(),{mode:"pbq"},bindings))
    state=sessionAction(state,release)
    const idx=state.idx, old=state.answers[idx]
    const other=idx===0?1:0, otherAnswer=state.answers[other]
    state=quizSessionReducer(state,{type:"nav",to:other})
    expect(quizSessionReducer(state,{type:"reset-simulation",idx})).toBe(state)
    expect(quizSessionReducer(state,{type:"simulation-action",idx,scenarioId:runtime.id,version:1,action:renew})).toBe(state)
    state=quizSessionReducer(state,{type:"nav",to:idx})
    expect(state.answers[idx]).toBe(old)
    state=quizSessionReducer(state,{type:"reset-simulation",idx})
    expect(score(state)).toBe(0)
    expect(pbqAnswerBlank(question,state.answers[idx] as PBQAnswer,runtime)).toBe(true)
    expect(state.answers[other]).toBe(otherAnswer)
  })
  it("keeps transcripts in the same authoritative envelope across navigation and reset", () => {
    // Fixture instrumentation of model actions, not the future command parser.
    const transcriptRuntime = compileScenario({ ...dhcpDefinition,
      transition: (state, action) => ({ ...transitionDhcp(state, action), history: [
        ...state.history, { command: action.type, output: "Fixture model transition", status: "info" as const },
      ] }),
    })
    let state = focus(createQuizState(exam, blankProgress(), {mode:"pbq"}, { [bindingKey(runtime.binding)]:transcriptRuntime }))
    state = sessionAction(state, release)
    const idx = state.idx, answer = state.answers[idx]
    state = quizSessionReducer(state, {type:"nav",to:idx===0?1:0})
    state = quizSessionReducer(state, {type:"nav",to:idx})
    expect(state.answers[idx]).toBe(answer)
    expect(state.answers[idx]).toMatchObject({state:{history:[{command:"release",output:"Fixture model transition",status:"info"}]}})
    state = quizSessionReducer(state, {type:"reset-simulation",idx})
    expect(state.answers[idx]).toMatchObject({state:{history:[]}})
  })
  it("grades queued current state, locks after grading/finish and begins retry fresh", () => {
    let state=focus(createQuizState(exam,blankProgress(),{mode:"pbq"},bindings))
    state=sessionAction(state,release)
    state=quizSessionReducer(state,{type:"grade-simulation",idx:state.idx})
    expect(state.graded[state.idx]).toBe(1/3)
    expect(sessionAction(state,renew)).toBe(state)
    expect(quizSessionReducer(state,{type:"reset-simulation",idx:state.idx})).toBe(state)
    expect(quizSessionReducer(state,{type:"grade-simulation",idx:state.idx})).toBe(state)
    let next=focus(createQuizState(exam,blankProgress(),{mode:"pbq"},bindings))
    expect(score(next)).toBe(0)
    next=quizSessionReducer(next,{type:"finish"})
    expect(sessionAction(next,release)).toBe(next)
  })
  it("freezes the version for the attempt and ignores legacy answer setters", () => {
    const source={...bindings}
    const state=focus(createQuizState(exam,blankProgress(),{mode:"pbq"},source))
    source[bindingKey(runtime.binding)]=compileScenario({...dhcpDefinition,version:2})
    expect(state.simulations[state.idx].version).toBe(1)
    expect(quizSessionReducer(state,{type:"set-terminal",taskIdx:0,command:"ipconfig /release"})).toBe(state)
    expect(quizSessionReducer(state,{type:"simulation-action",idx:state.idx,scenarioId:runtime.id,version:2,action:release})).toBe(state)
    expect(quizSessionReducer(state,{type:"reset-simulation",idx:state.idx}).answers[state.idx]).toMatchObject({scenarioVersion:1})
  })
})
