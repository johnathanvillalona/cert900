import { describe, expect, it } from "vitest"
import { compileScenario } from "../core/transition"
import { pbqScore, pbqAnswerBlank } from "../../lib/engine"
import { exam } from "../../data/220-1201"
import { dhcpDefinition, initialDhcpState, type DhcpState } from "../scenarios/dhcp-lease"
import { executeDhcpCommand } from "../scenarios/dhcp-commands"
import { adapterMatches, HISTORY_LIMIT, MAX_COMMAND_LENGTH, tokenizeCommandPrompt } from "./command-prompt"
const p=exam.pbqs.find(p=>p.title==="Fix a Stale DHCP Lease")!
const runtime=compileScenario(dhcpDefinition)
const run=(state:DhcpState,...commands:string[])=>commands.reduce(executeDhcpCommand,state)
const full=["ipconfig /release","ipconfig /renew","ipconfig /flushdns"]
const answer=(state:DhcpState)=>({...runtime.initialAnswer(),state})
const score=(state:DhcpState)=>pbqScore(p,answer(state),runtime)
const last=(state:DhcpState)=>state.history.at(-1)!

describe("bounded Command Prompt dialect",()=>{
  it("tokenizes spaces, tabs and double quotes without executing anything",()=>{
    expect(tokenizeCommandPrompt('  IPCONFIG.exe\t/renew  "Ethernet0" ')).toEqual({tokens:["IPCONFIG.exe","/renew","Ethernet0"]})
    expect(tokenizeCommandPrompt('ipconfig /renew ""')).toEqual({tokens:["ipconfig","/renew",""]})
    expect(tokenizeCommandPrompt('ipconfig /renew "Ethernet0')).toHaveProperty("error")
  })
  it.each(["ipconfig | more","ipconfig && cls","ipconfig > file","%PATH%","echo !x!","cmd /c (ipconfig)","ipconfig\nipconfig /release","x\u0000y","a".repeat(MAX_COMMAND_LENGTH+1)])("rejects shell syntax/control input: %s",cmd=>{
    expect(tokenizeCommandPrompt(cmd)).toHaveProperty("error")
    const state=executeDhcpCommand(initialDhcpState(),cmd)
    expect(state.milestones.released).toBe(false)
    expect(last(state).status).toBe("error")
  })
  it.each(["*","Ethernet*","*net*","*0","Ethernet0","eTHERnet0","***Ether***0*"])("matches allowlisted adapter wildcard %s",pattern=>expect(adapterMatches(pattern,"Ethernet0")).toBe(true))
  it.each(["","Wi-Fi","Ethernet1","Ethernet?","0*Ethernet","*net1*"])("does not match wrong adapter %s",pattern=>expect(adapterMatches(pattern,"Ethernet0")).toBe(false))
})
describe("stateful ipconfig and the unchanged ordered rubric",()=>{
  it.each(["ipconfig /release"," IPCONFIG.EXE\t/RELEASE ", 'ipconfig /release "Ethernet0"',"ipconfig /release eTHERnet0","ipconfig /release Ethernet*","ipconfig /release *net*"])("accepts release variant %s",cmd=>{
    const state=executeDhcpCommand(initialDhcpState(),cmd)
    expect(state.adapter.lease).toBe("released");expect(score(state)).toBe(1/3)
  })
  it.each(["ipconfig /renew"," IPCONFIG.exe /RENEW ", 'ipconfig /renew "Ethernet0"',"ipconfig /renew *"])("accepts renewal variant %s",cmd=>{
    const state=run(initialDhcpState(),"ipconfig /release",cmd)
    expect(state.adapter.ipv4).toBe("192.168.10.87");expect(score(state)).toBe(2/3)
  })
  it.each(["ipconfig /flushdns","IPCONFIG.EXE /FLUSHDNS","  ipconfig\t/flushdns  "])("accepts cache variant %s",cmd=>{
    const state=run(initialDhcpState(),...full.slice(0,2),cmd)
    expect(state.dnsCache).toEqual([]);expect(score(state)).toBe(1)
  })
  it("reports actual configuration and cached records before and after changes",()=>{
    let state=run(initialDhcpState(),"ipconfig /all","ipconfig /displaydns")
    expect(state.history[0].output).toContain("169.254.42.17")
    expect(state.history[0].output).toContain("02-00-5E-10-00-01")
    expect(last(state).output).toContain("192.0.2.60")
    state=run(state,...full,"ipconfig /all","ipconfig /displaydns")
    expect(state.history.at(-2)!.output).toContain("192.168.10.87")
    expect(state.history.at(-2)!.output).toContain("October 19, 2026 09:00:00")
    expect(last(state).output).toContain("Could not display")
  })
  it.each(['ipconfig /release "Wi-Fi"','ipconfig /renew ""',"ipconfig /renew Ethernet1","ipconfig /all Ethernet0","ipconfig /flushdns Ethernet0","ipconfig /renew6","ipconfig /nonsense","toString","constructor","netsh winsock reset"])("errors leave system and scores unchanged: %s",cmd=>{
    const before=run(initialDhcpState(),...full), after=executeDhcpCommand(before,cmd)
    expect(after.adapter).toEqual(before.adapter);expect(after.dnsCache).toEqual(before.dnsCache)
    expect(after.milestones).toEqual(before.milestones);expect(score(after)).toBe(1)
    expect(last(after).status).toBe("error")
  })
  it("allows early commands but requires ordered objectives, including a new release cycle",()=>{
    let state=run(initialDhcpState(),"ipconfig /renew","ipconfig /flushdns")
    expect(state.adapter.lease).toBe("bound");expect(score(state)).toBe(0)
    state=run(state,"ipconfig /release","ipconfig /flushdns","ipconfig /renew")
    expect(score(state)).toBe(2/3)
    state=run(state,"ipconfig /flushdns","ipconfig /renew")
    expect(score(state)).toBe(1)
    state=executeDhcpCommand(state,"ipconfig /release")
    expect(score(state)).toBe(1/3)
    state=run(state,"ipconfig /renew","ipconfig /flushdns")
    expect(score(state)).toBe(1)
  })
})
describe("simulated diagnostics and console persistence",()=>{
  it.each(["help","HELP IPCONFIG","help ping","help cls","ipconfig /?","IPCONFIG.EXE","ping.exe -4 -n 1 localhost"])("supports unscored diagnostics/help: %s",cmd=>{
    const state=executeDhcpCommand(initialDhcpState(),cmd)
    expect(last(state).status).not.toBe("error");expect(score(state)).toBe(0)
    expect(pbqAnswerBlank(p,answer(state),runtime)).toBe(true)
  })
  it("models APIPA, stale cache, lease recovery and fresh DNS lookups without reducing credit",()=>{
    let state=run(initialDhcpState(),"ping -n 1 192.168.10.1")
    expect(last(state).output).toContain("Destination host unreachable")
    state=run(state,...full.slice(0,2),"ping inventory.office.test")
    expect(last(state).output).toContain("192.0.2.60")
    expect(last(state).output).toContain("Request timed out")
    state=run(state,"ipconfig /flushdns","PING.EXE -n 1 -4 inventory.office.test")
    expect(last(state).output).toContain("Reply from 192.168.10.20")
    expect(state.dnsCache).toEqual([{name:"inventory.office.test",address:"192.168.10.20"}])
    for(const cmd of ["ipconfig","ipconfig /all","ipconfig /displaydns","help","ping localhost","ping 203.0.113.88","ping unknown.test"]) {
      state=executeDhcpCommand(state,cmd);expect(score(state)).toBe(1)
    }
  })
  it.each(["ping -6 ::1","ping -n 0 localhost","ping -n 5 localhost","ping -n -4 localhost","ping -t localhost","ping localhost extra","ping","help wrong","cls extra"])("rejects unsupported syntax: %s",cmd=>expect(last(executeDhcpCommand(initialDhcpState(),cmd)).status).toBe("error"))
  it("cls clears only the display, preserves recall/model/credit, and subsequent output becomes visible",()=>{
    const done=run(initialDhcpState(),...full), cleared=executeDhcpCommand(done,"cls")
    expect(cleared.history.map(e=>e.command)).toEqual([...full,"cls"])
    expect(cleared.console.showBanner).toBe(false)
    expect(cleared.history.filter(e=>e.id>cleared.console.visibleAfter)).toEqual([])
    expect(cleared.adapter).toEqual(done.adapter);expect(score(cleared)).toBe(1)
    const next=executeDhcpCommand(cleared,"ipconfig")
    expect(next.history.filter(e=>e.id>next.console.visibleAfter).map(e=>e.command)).toEqual(["ipconfig"])
  })
  it("ignores empty input and bounds recall without losing objectives or re-showing cleared output",()=>{
    const start=initialDhcpState();expect(executeDhcpCommand(start," \t ")).toBe(start)
    let state=run(start,...full,"cls")
    for(let i=0;i<HISTORY_LIMIT+3;i++) state=executeDhcpCommand(state,"ipconfig")
    expect(state.history).toHaveLength(HISTORY_LIMIT)
    expect(new Set(state.history.map(e=>e.id)).size).toBe(HISTORY_LIMIT)
    expect(state.console.showBanner).toBe(false);expect(score(state)).toBe(1)
  })
  it("is deterministic, uses the existing envelope, and reset clears all state",()=>{
    const start=runtime.initialAnswer()
    const next=runtime.transition(start,{type:"execute-command",command:"ipconfig /release"})
    expect(next).toEqual(runtime.transition(start,{type:"execute-command",command:"ipconfig /release"}))
    expect(pbqScore(p,next,runtime)).toBe(1/3)
    expect(runtime.initialAnswer()).toEqual(start)
    expect((start.state as DhcpState).history).toEqual([])
  })
})
