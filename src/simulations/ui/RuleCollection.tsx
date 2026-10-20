import { ArrowDown, ArrowUp, ArrowUpRight, Ban, Pencil, Plus, Trash2 } from "lucide-react"
import type { AclRule } from "../firewall/acl"
import { cn } from "../../lib/utils"

export function ActionBadge({action}:{action:'allow'|'deny'}) {
  const Icon=action==='allow'?ArrowUpRight:Ban
  return <span className={cn("inline-flex items-center gap-1 rounded border px-2 py-1 text-sm font-medium",action==='allow'?"border-sky-500/30 bg-sky-500/10 text-sky-800 dark:text-sky-200":"border-border bg-muted text-foreground")}><Icon className="size-3.5" aria-hidden/>{action==='allow'?'Allow':'Deny'}</span>
}
interface Props {
  rules: readonly AclRule[]; locked: boolean; max: number
  onAdd:()=>void; onEdit:(id:number)=>void; onDelete:(id:number)=>void; onToggle:(id:number)=>void; onMove:(id:number,delta:-1|1)=>void
}
export function RuleCollection({rules,locked,max,onAdd,onEdit,onDelete,onToggle,onMove}:Props) {
  const actions=(r:AclRule,i:number)=><div className="grid grid-cols-2 gap-1" aria-label={`Actions for ${r.name}`}>
    {([
      [Pencil,`Edit rule: ${r.name}`,()=>onEdit(r.id),false],
      [Trash2,`Delete rule: ${r.name}`,()=>onDelete(r.id),false],
      [ArrowUp,`Move up: ${r.name}`,()=>onMove(r.id,-1),i===0],
      [ArrowDown,`Move down: ${r.name}`,()=>onMove(r.id,1),i===rules.length-1],
    ] as const).map(([Icon,label,click,boundary])=><button type="button" key={label} onClick={click} disabled={locked||boundary} aria-label={label} title={label} className="inline-flex size-11 items-center justify-center rounded-md border bg-background outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-35"><Icon className="size-4" aria-hidden/></button>)}
  </div>
  const identity=(r:AclRule)=><div className="min-w-0 space-y-2"><p className="break-words font-semibold [overflow-wrap:anywhere]">{r.name}</p><div className="flex flex-wrap items-center gap-1"><button type="button" role="switch" aria-checked={r.enabled} onClick={()=>onToggle(r.id)} disabled={locked} aria-label={`Enable rule: ${r.name}`} className="inline-flex size-11 shrink-0 items-center justify-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-45"><span aria-hidden className={cn("relative h-5 w-9 rounded-full border",r.enabled?'border-sky-600 bg-sky-600':'border-slate-400 bg-slate-300 dark:bg-slate-600')}><span className={cn("absolute top-0.5 size-3.5 rounded-full bg-slate-50",r.enabled?'right-0.5':'left-0.5')}/></span></button><span className="text-sm text-muted-foreground">{r.enabled?'Enabled':'Disabled'}</span></div></div>
  const service=(r:AclRule)=><><span className="font-medium">{r.protocol==='any'?'Any IPv4':r.protocol.toUpperCase()}</span><span className="block break-all font-mono text-sm text-muted-foreground">{r.protocol==='tcp'||r.protocol==='udp'?r.ports.text:'No port filter'}</span></>
  return <div className="min-w-0" data-testid="rule-collection">
    <div className="mb-4 flex flex-wrap items-start justify-between gap-3"><div><h3 className="text-base font-semibold">Inbound access policy</h3><p className="mt-1 text-sm text-muted-foreground">{rules.length} of {max} rules · Evaluated from top to bottom</p></div>
      <button id="acl-add-rule" type="button" onClick={onAdd} disabled={locked||rules.length>=max} className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-3 text-sm font-semibold text-primary-foreground outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-45" data-testid="acl-add-rule"><Plus className="size-4" aria-hidden/>Add rule</button></div>
    {rules.length===0?<div className="rounded-lg border border-dashed bg-muted/15 p-5 text-sm leading-6" data-testid="acl-empty"><p className="font-semibold">No editable rules</p><p className="mt-1 text-muted-foreground">The default policy denies inbound traffic. Add a rule to define an exception.</p></div>:<>
      <div className="hidden lg:block"><table className="w-full table-fixed border-collapse text-left text-sm" aria-label="Ordered inbound firewall rules">
        <colgroup><col className="w-10"/><col/><col className="w-[17%]"/><col className="w-[17%]"/><col className="w-[14%]"/><col className="w-20"/><col className="w-[92px]"/></colgroup>
        <thead><tr className="border-y bg-muted/50 text-muted-foreground">{['#','Rule','Source','Destination','Service','Action','Manage'].map(h=><th key={h} scope="col" className="px-1.5 py-3 font-medium">{h}</th>)}</tr></thead>
        <tbody>{rules.map((r,i)=><tr key={r.id} className="border-b align-top" data-testid="acl-rule-row"><td className="px-1.5 py-4 font-mono text-muted-foreground">{i+1}</td><td className="px-1.5 py-3">{identity(r)}</td><td className="break-all px-1.5 py-4 font-mono">{r.source.text}</td><td className="break-all px-1.5 py-4 font-mono">{r.destination.text}</td><td className="px-1.5 py-4">{service(r)}</td><td className="px-1 py-3"><ActionBadge action={r.action}/></td><td className="py-2">{actions(r,i)}</td></tr>)}</tbody>
      </table></div>
      <div className="space-y-3 lg:hidden" data-testid="acl-rule-cards">{rules.map((r,i)=><article key={r.id} className="min-w-0 rounded-lg border bg-background p-3" aria-label={`Priority ${i+1}: ${r.name}`} data-testid="acl-rule-card">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2"><span className="font-mono text-sm text-muted-foreground">Priority {i+1}</span><ActionBadge action={r.action}/></div>
        {identity(r)}<dl className="my-4 grid min-w-0 gap-3 text-sm sm:grid-cols-3">{[['Source',r.source.text],['Destination',r.destination.text],['Service',`${r.protocol==='any'?'Any IPv4':r.protocol.toUpperCase()} · ${r.protocol==='tcp'||r.protocol==='udp'?r.ports.text:'No port filter'}`]].map(([label,value])=><div key={label} className="min-w-0"><dt className="text-muted-foreground">{label}</dt><dd className="mt-1 break-all font-mono">{value}</dd></div>)}</dl>
        <div className="flex justify-end">{actions(r,i)}</div></article>)}</div>
    </>}
    <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-muted/40 p-3 text-sm" data-testid="acl-default-policy"><div><p className="font-semibold">Default policy</p><p className="mt-1 text-muted-foreground">Any source → Any destination · Any IPv4 · Always last</p></div><ActionBadge action="deny"/></div>
    <p className="mt-3 text-sm leading-6 text-muted-foreground">Changes apply when you save a rule. Disabled rules are skipped. The default policy cannot be moved or removed.</p>
  </div>
}
