import { adapterMatches, appendConsole, tokenizeCommandPrompt, type CommandResult } from "../cli/command-prompt"
import { DHCP_FIXTURE as F, transitionDhcp, type DhcpState } from "./dhcp-model"

const HELP = `Cert900 Command Prompt simulation

IPCONFIG                 Display adapter configuration
IPCONFIG /ALL            Display detailed configuration
IPCONFIG /DISPLAYDNS     Display the virtual DNS cache
IPCONFIG /RELEASE [name]  Release a virtual adapter's lease
IPCONFIG /RENEW [name]    Request a virtual DHCP lease
IPCONFIG /FLUSHDNS        Clear the virtual DNS cache
IPCONFIG /?              Display this reference
PING [-4] [-n count] host Test a virtual destination (count 1-4)
HELP [IPCONFIG|PING|CLS]  Display command help
CLS                      Clear the display; retain command recall

Adapter names accept double quotes and * wildcards.
IPCONFIG.EXE and PING.EXE are supported aliases.
All operations are simulated. No host commands or network requests run.
Other utilities, IPv6, scripts, expansion, pipes and redirection are outside this simulation.`
const syntax = "Error: unrecognized or incomplete command line.\nType help for supported simulator syntax."
function configuration(state: DhcpState, all = false): string {
  const a = state.adapter
  const rows = ["Windows IP Configuration", ""]
  if (all) rows.push(`   Host Name . . . . . . . . . . . . : ${F.hostname}`, "   Primary Dns Suffix  . . . . . . . : office.test", "   Node Type . . . . . . . . . . . . : Hybrid", "   IP Routing Enabled. . . . . . . . : No", "")
  rows.push(`Ethernet adapter ${a.name}:`, "")
  if (all) rows.push("   Description . . . . . . . . . . . : Cert900 Virtual Ethernet Adapter", `   Physical Address. . . . . . . . . : ${F.mac}`, "   DHCP Enabled. . . . . . . . . . . : Yes", "   Autoconfiguration Enabled . . . . : Yes")
  rows.push(`   ${a.lease === "apipa" ? "Autoconfiguration IPv4 Address. ." : "IPv4 Address. . . . . . . . . . ."} : ${a.ipv4 ?? "0.0.0.0"}`, `   Subnet Mask . . . . . . . . . . . : ${a.mask ?? "0.0.0.0"}`, `   Default Gateway . . . . . . . . . : ${a.gateway ?? ""}`)
  if (all) {
    rows.push(`   DHCP Server . . . . . . . . . . . : ${a.lease === "bound" ? F.server : ""}`, `   DNS Servers . . . . . . . . . . . : ${a.dns.join(", ")}`)
    if (a.lease === "bound") rows.push("   Lease Obtained. . . . . . . . . . : October 19, 2026 09:00:00", "   Lease Expires . . . . . . . . . . : October 20, 2026 09:00:00")
  }
  return rows.join("\n")
}
function ipconfig(state: DhcpState, args: string[]): CommandResult<DhcpState> {
  const result = (output: string, status: CommandResult<DhcpState>["status"] = "info", next = state) => ({state:next,output,status})
  if (!args.length) return result(configuration(state))
  const option = args[0].toLowerCase()
  if (["/renew6","/release6","/allcompartments","/registerdns","/setclassid","/showclassid"].includes(option)) return result(`Simulator limitation: ${option} is not implemented in this IPv4 scenario.`, "error")
  if (option === "/release" || option === "/renew") {
    if (args.length > 2) return result(syntax, "error")
    if (args.length === 2 && !adapterMatches(args[1],state.adapter.name)) return result(`Windows IP Configuration\n\nNo adapter matching "${args[1]}" was found.`, "error")
    const next = transitionDhcp(state,{type:option === "/release" ? "release" : "renew",adapter:F.adapter})
    return result(configuration(next), "success", next)
  }
  if (args.length !== 1) return result(syntax,"error")
  if (option === "/all") return result(configuration(state,true))
  if (option === "/?") return result(HELP)
  if (option === "/flushdns") return result("Windows IP Configuration\n\nSuccessfully flushed the DNS Resolver Cache.","success",transitionDhcp(state,{type:"flush-dns"}))
  if (option === "/displaydns") return result("Windows IP Configuration\n\n" + (state.dnsCache.length ? state.dnsCache.map(e=>`${e.name}\n----------------------------------------\n    Record Name . . . . . : ${e.name}\n    Record Type . . . . . : 1\n    Time To Live  . . . . : 300\n    Data Length . . . . . : 4\n    Section . . . . . . . : Answer\n    A (Host) Record . . . : ${e.address}`).join("\n\n") : "Could not display the DNS Resolver Cache."))
  return result(syntax,"error")
}
function ping(state: DhcpState, args: string[]): CommandResult<DhcpState> {
  const fail = (output: string): CommandResult<DhcpState> => ({state,output,status:"error"})
  if (args.length === 1 && args[0] === "/?") return {state,output:HELP,status:"info"}
  let count = 4, target = "", seenCount = false, seenV4 = false
  for (let i=0;i<args.length;i++) {
    const arg = args[i].toLowerCase()
    if (arg === "-6" || arg.includes(":")) return fail("Simulator limitation: IPv6 is not implemented in this scenario.")
    if (arg === "-4" && !seenV4) {seenV4=true;continue}
    if (arg === "-n" && !seenCount) {
      seenCount=true
      if (!/^[1-4]$/.test(args[++i] ?? "")) return fail("Simulator limit: ping -n accepts a count from 1 to 4.")
      count=Number(args[i]);continue
    }
    if (arg.startsWith("-") || target) return fail("Simulator limitation: use ping [-4] [-n count] host; other options are not implemented.")
    target=arg
  }
  if (!target) return fail("Usage: ping [-4] [-n count] host")
  let next=state, address=target
  if (target === "localhost") address="127.0.0.1"
  else if (target === "inventory.office.test") {
    const cached=state.dnsCache.find(e=>e.name===target)
    if (cached) address=cached.address
    else if (state.adapter.lease === "bound" && state.adapter.dns.length) {
      address=F.inventory
      next={...state,dnsCache:[...state.dnsCache,{name:target,address}]}
    } else return fail(`Ping request could not find host ${target}. Please check the name and try again.`)
  } else if (!/^(?:\d{1,3}\.){3}\d{1,3}$/.test(target) || target.split(".").some(o=>Number(o)>255)) {
    return fail(`Ping request could not find host ${target}.\nSimulator: only localhost, inventory.office.test and IPv4 fixture destinations can be resolved.`)
  }
  const loopback=address.startsWith("127.")
  const own=address===state.adapter.ipv4
  const healthy=state.adapter.lease === "bound"
  const reachable=loopback || own || (healthy && [F.gateway,F.server,F.dns,F.inventory].some(ip=>ip===address))
  const unreachable=!loopback && !own && !healthy
  const line=reachable ? `Reply from ${address}: bytes=32 time<1ms TTL=128` : unreachable ? `Reply from ${state.adapter.ipv4 ?? "0.0.0.0"}: Destination host unreachable.` : "Request timed out."
  const display=address===target ? address : `${target} [${address}]`
  const received=reachable || unreachable ? count : 0
  const output=[`Pinging ${display} with 32 bytes of data:`,...Array.from({length:count},()=>line),"",`Ping statistics for ${address}:`,`    Packets: Sent = ${count}, Received = ${received}, Lost = ${count-received} (${Math.round((count-received)/count*100)}% loss),`,...(reachable ? ["Approximate round trip times in milli-seconds:","    Minimum = 0ms, Maximum = 0ms, Average = 0ms"] : [])].join("\n")
  return {state:next,output,status:reachable?"info":"error"}
}
export function executeDhcpCommand(state: DhcpState, input: string): DhcpState {
  if (!input.trim()) return state
  const parsed=tokenizeCommandPrompt(input)
  let result: CommandResult<DhcpState>
  if (parsed.error !== undefined) result={state,output:parsed.error,status:"error"}
  else {
    const [first="",...args]=parsed.tokens
    const cmd=first.toLowerCase()
    if (cmd === "ipconfig" || cmd === "ipconfig.exe") result=ipconfig(state,args)
    else if (cmd === "ping" || cmd === "ping.exe") result=ping(state,args)
    else if (cmd === "help" && (args.length===0 || (args.length===1 && ["ipconfig","ping","cls"].includes(args[0].toLowerCase())))) result={state,output:HELP,status:"info"}
    else if (cmd === "cls" && !args.length) result={state,output:"",status:"info",clear:true}
    else if (cmd === "help" || cmd === "cls") result={state,output:syntax,status:"error"}
    else result={state,output:`Simulator limitation: "${first}" is not implemented.\nThis is an isolated Command Prompt simulation, not a host shell. Type help for supported commands.`,status:"error"}
  }
  return appendConsole(state,input,result)
}
