import { useId, useState, type ReactNode } from "react"
import { ChevronDown, FlaskConical, ListOrdered, RotateCcw, ShieldCheck, type LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

export type AdministrationPage = "policy" | "traffic" | "overview" | "inbound" | "outbound"
export function AdministrationWorkspace({ device, title, description, revision, locked, page, onPage, onReset, workOrder, children, navigation, workOrderLabel = "Work order & topology", resetTestId = "acl-reset" }: {
  navigation?: readonly (readonly [AdministrationPage, string, LucideIcon])[]; workOrderLabel?: string; resetTestId?: string
  title: string; description: string
  device: string; revision: number; locked: boolean; page: AdministrationPage; onPage: (page: AdministrationPage) => void
  onReset: () => void; workOrder: ReactNode; children: ReactNode
}) {
  const [instructionsOpen, setInstructionsOpen] = useState(false)
  const instructionsId = useId()
  return <section className="mt-5 min-w-0 overflow-hidden rounded-xl border bg-background shadow-sm" aria-label="Virtual firewall administration" data-testid="firewall-workspace"
    onKeyDown={e => { if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(e.key)) e.stopPropagation() }}>
    <header className="border-b bg-slate-900 px-4 py-4 text-slate-100 sm:px-5" data-testid="firewall-banner">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3"><span className="rounded-lg border border-slate-600 bg-slate-800 p-2.5"><ShieldCheck className="size-6 text-sky-300" aria-hidden/></span>
          <div className="min-w-0"><p className="break-all font-mono text-sm text-slate-300">{device}</p><h2 className="text-lg font-semibold">{title}</h2></div></div>
        <span className="inline-flex min-h-7 items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-2.5 text-sm"><span className="size-2 rounded-full bg-sky-300" aria-hidden/>Local simulation</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </header>
    <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-muted/40 px-3 py-2 sm:px-5">
      <nav className="flex flex-wrap gap-1" aria-label="Firewall workspace">
        {(navigation ?? ([['policy','Access policy',ListOrdered],['traffic','Traffic tests',FlaskConical]] as const)).map(([id,label,Icon])=><button key={id} type="button" onClick={()=>onPage(id)} aria-current={page===id?'page':undefined}
          className={cn("inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring",page===id?"bg-background text-foreground shadow-sm ring-1 ring-border":"text-muted-foreground hover:bg-background/70")}
          data-testid={`firewall-nav-${id}`}><Icon className="size-4" aria-hidden/>{label}</button>)}
      </nav>
      <button type="button" disabled={locked} onClick={onReset} data-testid={resetTestId} className="inline-flex min-h-11 items-center gap-2 rounded-md border bg-background px-3 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-45"><RotateCcw className="size-4" aria-hidden/>Reset simulation</button>
    </div>
    <div className="grid min-w-0 lg:grid-cols-[180px_minmax(0,1fr)]">
      <aside className="min-w-0 border-b bg-muted/20 lg:border-r lg:border-b-0">
        <button type="button" className="flex min-h-12 w-full items-center justify-between gap-2 p-4 text-left text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring lg:hidden" onClick={()=>setInstructionsOpen(v=>!v)} aria-expanded={instructionsOpen} aria-controls={instructionsId} data-testid="firewall-work-order-toggle">{workOrderLabel}<ChevronDown className="size-4 shrink-0" aria-hidden/></button>
        <div id={instructionsId} className={cn("space-y-5 p-4 text-sm leading-6",instructionsOpen?'block':'hidden','lg:block')}>{workOrder}</div>
      </aside>
      <div className="min-w-0 p-3 sm:p-4">{children}</div>
    </div>
    <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t bg-muted/20 px-4 py-3 text-sm text-muted-foreground">
      <span>{locked?'Submission locked':`Applied policy · Revision ${revision}`}</span><span>No live devices or network traffic</span>
    </footer>
  </section>
}
