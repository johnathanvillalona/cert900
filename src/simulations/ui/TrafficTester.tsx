import { FlaskConical } from "lucide-react"
import { AdminField, adminInputClass } from "./RuleEditorDialog"
import { ActionBadge } from "./RuleCollection"
import type { AclState } from "../scenarios/edge-acl"
import type { TrafficForm } from "../firewall/acl"
import { formatIPv4 } from "../firewall/primitives"

export function TrafficTester({form,errors,history,revision,locked,onField,onTest}:{
  form:TrafficForm;errors:Record<string,string>;history:AclState['history'];revision:number;locked:boolean
  onField:(field:keyof TrafficForm,value:string)=>void;onTest:()=>void
}) {
  return <div className="min-w-0 space-y-5" data-testid="traffic-tester">
    <div><h3 className="text-base font-semibold">Traffic inspection</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">Evaluate one synthetic inbound packet against the applied policy. This checks admission, not routing or application availability.</p></div>
    <form className="space-y-4 rounded-lg border bg-muted/15 p-3 sm:p-4" onSubmit={e=>{e.preventDefault();onTest()}} noValidate>
      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        {(['source','destination'] as const).map(field=><AdminField key={field} label={field==='source'?'Source IPv4 address':'Destination IPv4 address'} error={errors[field]} hint="One IPv4 host address.">{props=><input {...props} value={form[field]} onChange={e=>onField(field,e.target.value)} disabled={locked} className={adminInputClass} autoComplete="off" spellCheck={false} maxLength={120}/>}</AdminField>)}
        <AdminField label="Packet protocol" error={errors.protocol} hint="Other IPv4 represents protocols such as GRE; no payload is simulated.">{props=><select {...props} value={form.protocol} onChange={e=>onField('protocol',e.target.value)} disabled={locked} className={adminInputClass}><option value="tcp">TCP</option><option value="udp">UDP</option><option value="icmp">ICMP</option><option value="other">Other IPv4</option></select>}</AdminField>
        <AdminField label="Destination port" error={errors.port} hint={form.protocol==='tcp'||form.protocol==='udp'?'0–65535. Source ports are unrestricted.':'Port matching does not apply to this protocol.'}>{props=><input {...props} value={form.protocol==='tcp'||form.protocol==='udp'?form.port:''} onChange={e=>onField('port',e.target.value)} disabled={locked||(form.protocol!=='tcp'&&form.protocol!=='udp')} inputMode="numeric" className={adminInputClass} maxLength={5}/>}</AdminField>
      </div>
      {Object.keys(errors).length>0&&<p role="alert" className="text-sm text-destructive">Packet not tested. Correct the marked fields.</p>}
      <button type="submit" disabled={locked} className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-45" data-testid="acl-test-traffic"><FlaskConical className="size-4" aria-hidden/>Test traffic</button>
    </form>
    <section aria-label="Traffic test results" role="log" aria-live="polite" aria-relevant="additions" className="space-y-3" data-testid="traffic-results">
      <h4 className="text-sm font-semibold">Inspection history <span className="font-normal text-muted-foreground">· Latest 20 tests</span></h4>
      {history.length===0?<p className="text-sm text-muted-foreground">No packets tested. Tests do not change the applied policy.</p>:[...history].reverse().map(entry=><article key={entry.id} className="min-w-0 rounded-lg border p-3 text-sm" data-testid="traffic-result">
        <div className="flex flex-wrap items-center justify-between gap-2"><ActionBadge action={entry.decision.action}/><span className="text-muted-foreground">Test {entry.id} · Revision {entry.revision}{entry.revision!==revision?' · Earlier policy':''}</span></div>
        <p className="mt-3 break-all font-mono leading-6">{formatIPv4(entry.packet.source)} → {formatIPv4(entry.packet.destination)}</p>
        <p className="mt-1 text-muted-foreground">{entry.packet.protocol.toUpperCase()}{entry.packet.protocol==='tcp'||entry.packet.protocol==='udp'?` · Destination port ${entry.packet.port}`:''}</p>
        <p className="mt-2">{entry.decision.ruleId===null?'No editable rule matched. Default deny applied.':`First matching rule: ID ${entry.decision.ruleId}.`} {entry.decision.checked} enabled rule{entry.decision.checked===1?'':'s'} inspected.</p>
      </article>)}
    </section>
  </div>
}
