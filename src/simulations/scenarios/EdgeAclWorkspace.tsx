import { useMemo, useRef, useState } from "react"
import { Check, CircleX, Globe2, Server, Shield } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../components/ui/dialog"
import type { SimulationViewProps } from "../ui/contracts"
import { isSimulationAnswer } from "../core/transition"
import { AdministrationWorkspace, type AdministrationPage } from "../ui/AdministrationWorkspace"
import { RuleCollection } from "../ui/RuleCollection"
import { AdminField, adminInputClass, RuleEditorDialog } from "../ui/RuleEditorDialog"
import { TrafficTester } from "../ui/TrafficTester"
import { analyzePolicy } from "../firewall/partition"
import { address, formatIPv4 } from "../firewall/primitives"
import { MAX_RULES, type Packet, type RuleForm } from "../firewall/acl"
import { isAclState, type AclAction, type AclState } from "./edge-acl"

export const edgeAclScenarioText = "Configure the branch edge router’s inbound policy: permit public HTTPS to the web server, permit SSH from the management network to any destination, and deny all other inbound traffic. Equivalent applied policies are accepted; rule names, count and creation order are not scored."
function WorkOrder() {
  return <><section><h3 className="font-semibold">Work order</h3><ol className="mt-2 list-inside list-decimal space-y-3">
    <li>Allow public HTTPS to the web server.</li><li>Allow SSH from management sources, to any destination.</li><li>Deny all other inbound traffic.</li></ol></section>
    <section><h3 className="font-semibold">Network inventory</h3><dl className="mt-2 space-y-3"><div><dt className="text-muted-foreground">Management network</dt><dd className="break-all font-mono">10.20.30.0/24</dd></div><div><dt className="text-muted-foreground">Web server</dt><dd className="break-all font-mono">192.0.2.80</dd></div></dl></section>
    <section aria-label="Branch topology" className="space-y-2 rounded-md border bg-background p-3">{[[Globe2,'Inbound traffic'],[Shield,'Branch edge'],[Server,'Web server']] .map(([Icon,label])=><div key={String(label)} className="flex items-center gap-2"><Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden/><span>{String(label)}</span></div>)}</section>
    <section><h3 className="font-semibold">Scope</h3><p className="mt-1 text-muted-foreground">Stateless IPv4 admission only. No NAT, routing, IPv6 or live connections. Any IPv4 includes other IP protocols.</p><p className="mt-2 text-muted-foreground">Up to 12 rules. Source ports are unrestricted.</p></section></>
}
const describePacket = (p:Packet) => `${formatIPv4(p.source)} → ${formatIPv4(p.destination)}, ${p.protocol.toUpperCase()}${p.protocol==='tcp'||p.protocol==='udp'?` destination port ${p.port}`:''}`
export function EdgeAclWorkspace(props:SimulationViewProps) {
  const answer=props.session.answers[props.session.idx]
  if(!isSimulationAnswer(answer)||!isAclState(answer.state)) return <p role="alert">The firewall state could not be opened. Return to exam selection and start a fresh attempt.</p>
  return <AclWorkspace {...props} state={answer.state}/>
}
function AclWorkspace({session,graded,state}:{state:AclState}&SimulationViewProps) {
  const [page,setPage]=useState<AdministrationPage>('policy')
  const [deleting,setDeleting]=useState<number|null>(null)
  const origin=useRef<HTMLElement|null>(null)
  const locked=graded||session.finished
  const dispatch=(action:AclAction)=>session.dispatchSimulation(action)
  const restoreFocus=()=>{const target=origin.current?.isConnected?origin.current:document.getElementById('acl-add-rule');target?.focus({preventScroll:true})}
  const edit=(id:number|null)=>{origin.current=document.activeElement as HTMLElement;dispatch({type:'edit',id})}
  const reset=()=>{session.resetSimulation();setDeleting(null);setPage('policy')}
  const result=useMemo(()=>graded?analyzePolicy(state.rules):null,[graded,state.rules])
  const deletingRule=state.rules.find(r=>r.id===deleting)
  const form=state.draft?.form
  const field=(key:keyof RuleForm,value:string)=>dispatch({type:'draft-field',field:key,value})
  return <>
    <AdministrationWorkspace device="BR-EDGE-01" title="Edge policy manager" description="Inbound IPv4 access control · First match wins · Default deny" revision={state.revision} locked={locked} page={page} onPage={setPage} onReset={reset} workOrder={<WorkOrder/>}>
      <p role="status" className="mb-4 rounded-md border border-sky-500/20 bg-sky-500/5 px-3 py-2 text-sm leading-6" data-testid="acl-policy-status">{locked?'Submission locked. Applied rules are read-only.':`Revision ${state.revision} active. ${state.rules.filter(r=>r.enabled).length} enabled rule${state.rules.filter(r=>r.enabled).length===1?'':'s'}; unmatched packets are denied.`}</p>
      {page==='policy'?<RuleCollection rules={state.rules} locked={locked} max={MAX_RULES} onAdd={()=>edit(null)} onEdit={edit} onToggle={id=>dispatch({type:'toggle',id})} onDelete={id=>{origin.current=document.activeElement as HTMLElement;setDeleting(id)}} onMove={(id,delta)=>dispatch({type:'move',id,delta})}/>:
        <TrafficTester form={state.traffic} errors={state.trafficErrors} history={state.history} revision={state.revision} locked={locked} onField={(field,value)=>dispatch({type:'traffic-field',field,value})} onTest={()=>dispatch({type:'test'})}/>}
      {result&&<section className="mt-5 space-y-3 rounded-lg border bg-muted/20 p-4 text-sm leading-6" aria-label="Graded policy review" data-testid="acl-graded-review">
        <h3 className="font-semibold">{result.incomplete&&result.insecure?'Incomplete and insecure':result.incomplete?'Incomplete configuration':result.insecure?'Insecure configuration':'Policy meets the work order'}</h3>
        <ul className="space-y-3">{[[result.https,'Public HTTPS is limited to the web server'],[result.ssh,'SSH is limited to management sources'],[result.leastPrivilege,'No unrelated exposure, with authorized access functioning']].map(([met,label])=><li key={String(label)} className="flex gap-2">{met?<Check className="mt-1 size-4 shrink-0 text-success" aria-hidden/>:<CircleX className="mt-1 size-4 shrink-0 text-destructive" aria-hidden/>}<span>{String(label)}<span className="block font-medium">{met?'Met':'Not met'}</span></span></li>)}</ul>
        {result.missingExample&&<p><strong>Required access missing:</strong> <span className="break-all font-mono">{describePacket(result.missingExample)}</span></p>}
        {result.exposureExample&&<p><strong>Unwanted exposure:</strong> <span className="break-all font-mono">{describePacket(result.exposureExample)}</span></p>}
        <p className="text-muted-foreground">Each objective earns one third. The criteria assess public-service access, restricted administration and least privilege. Tests, rule names and draft changes do not earn credit.</p>
      </section>}
    </AdministrationWorkspace>
    <RuleEditorDialog open={!!form&&!locked} title={state.draft?.editingId===null?'Add inbound rule':'Edit inbound rule'} description="BR-EDGE-01 · Inbound IPv4 ACL. Draft changes are not active until applied." errors={state.errors} onApply={()=>dispatch({type:'apply'})} onCancel={()=>dispatch({type:'cancel'})} onReset={reset} onRestoreFocus={restoreFocus}>
      {form&&<>
        <div className="sm:col-span-2"><AdminField label="Rule name" error={state.errors.name} hint="A descriptive name, up to 80 characters. Names do not affect traffic matching.">{props=><input {...props} autoComplete="off" value={form.name} onChange={e=>field('name',e.target.value)} maxLength={80} className={adminInputClass}/>}</AdminField></div>
        <AdminField label="Action" error={state.errors.action} hint="The first matching rule decides the packet outcome.">{props=><select {...props} value={form.action} onChange={e=>field('action',e.target.value)} className={adminInputClass}><option value="allow">Allow</option><option value="deny">Deny</option></select>}</AdminField>
        <AdminField label="Protocol" error={state.errors.protocol} hint="Any IPv4 includes TCP, UDP, ICMP and other IP protocols.">{props=><select {...props} value={form.protocol} onChange={e=>field('protocol',e.target.value)} className={adminInputClass}><option value="tcp">TCP</option><option value="udp">UDP</option><option value="icmp">ICMP</option><option value="any">Any IPv4</option></select>}</AdminField>
        {(['source','destination'] as const).map(key=>{const normalized=address(form[key]);return <AdminField key={key} label={key==='source'?'Source address':'Destination address'} error={state.errors[key]} hint={normalized&&normalized.text!==form[key].trim()?`Will apply as ${normalized.text}.`:'Any, IPv4 host, or CIDR /0–/32. No hostnames or IPv6.'}>{props=><input {...props} value={form[key]} onChange={e=>field(key,e.target.value)} maxLength={120} spellCheck={false} autoComplete="off" className={adminInputClass}/>}</AdminField>})}
        <div className="sm:col-span-2"><AdminField label="Destination ports" error={state.errors.ports} hint={form.protocol==='tcp'||form.protocol==='udp'?'Any, one port, or an inclusive range from 0 to 65535.':'No port filter for this protocol.'}>{props=><input {...props} value={form.ports} onChange={e=>field('ports',e.target.value)} disabled={form.protocol!=='tcp'&&form.protocol!=='udp'} maxLength={120} spellCheck={false} className={adminInputClass}/>}</AdminField></div>
      </>}
    </RuleEditorDialog>
    <Dialog open={!!deletingRule&&!locked} onOpenChange={open=>{if(!open)setDeleting(null)}}><DialogContent showCloseButton={false} className="max-h-[90dvh] overflow-y-auto sm:max-w-lg" onCloseAutoFocus={e=>{e.preventDefault();restoreFocus()}}>
      <DialogTitle className="text-lg font-semibold">Delete inbound rule?</DialogTitle><DialogDescription className="break-words text-sm leading-6 [overflow-wrap:anywhere]">Delete “{deletingRule?.name}” from the applied policy. The default deny remains in place.</DialogDescription>
      <div className="flex flex-wrap justify-end gap-2"><button type="button" onClick={()=>setDeleting(null)} className="min-h-11 rounded-md border px-4 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring">Cancel</button><button type="button" onClick={()=>{if(deleting!==null)dispatch({type:'delete',id:deleting});setDeleting(null)}} className="min-h-11 rounded-md bg-destructive px-4 text-sm font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-ring" data-testid="acl-confirm-delete">Delete rule</button></div>
    </DialogContent></Dialog>
  </>
}
