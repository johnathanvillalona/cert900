import { Check, CircleX } from "lucide-react"
import type { SimulationViewProps } from "../ui/contracts"
import { isSimulationAnswer } from "../core/transition"
import { CommandPromptWorkspace } from "../cli/CommandPromptWorkspace"
import { isDhcpState } from "./dhcp-model"

export function DhcpWorkspace({p,session,graded}:SimulationViewProps) {
  const answer=session.answers[session.idx]
  if(p.kind!=="terminal" || !isSimulationAnswer(answer) || !isDhcpState(answer.state)) return <p role="alert">This simulation could not be opened. Return to the exam selection and start a fresh attempt.</p>
  const state=answer.state
  const result=graded?session.simulation?.grade(answer):undefined
  const evidence=[
    ["Adapter",state.adapter.name], ["IPv4 address",state.adapter.ipv4??"Not assigned"],
    ["Subnet mask",state.adapter.mask??"Not assigned"], ["Default gateway",state.adapter.gateway??"Not assigned"],
    ["DNS server",state.adapter.dns.join(", ")||"Not assigned"], ["Cached DNS records",String(state.dnsCache.length)],
  ]
  return <CommandPromptWorkspace host={p.host} history={state.history} console={state.console} locked={graded||session.finished}
    onExecute={command=>session.dispatchSimulation({type:"execute-command",command})} onReset={session.resetSimulation}
    tasks={<><p className="mt-2 text-sm text-muted-foreground">Complete the following tasks in order.</p><ol className="mt-3 space-y-3 text-sm">{p.tasks.map((task,i)=><li key={i} className="flex gap-2"><span className="font-mono text-muted-foreground">{i+1}.</span><span>{task.prompt}</span></li>)}</ol></>}
    evidence={<dl className="mt-3 space-y-3 text-sm" data-testid="adapter-evidence">{evidence.map(([label,value])=><div key={label}><dt className="text-muted-foreground">{label}</dt><dd className="break-all font-mono">{value}</dd></div>)}</dl>}
    results={result?.kind==="objectives"?<ul className="mt-3 space-y-3 text-sm">{result.objectives.map(o=><li key={o.id} className="flex gap-2">{o.satisfied?<Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden/>:<CircleX className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden/>}<span>{o.label}<span className="block font-medium">{o.satisfied?"Met":"Not met"}</span></span></li>)}</ul>:undefined}/>
}
