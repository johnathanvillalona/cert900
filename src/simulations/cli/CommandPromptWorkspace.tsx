import { useEffect, useId, useRef, useState, type ReactNode } from "react"
import { ChevronDown, CornerDownLeft, RotateCcw, TerminalSquare } from "lucide-react"
import { cn } from "../../lib/utils"
import { MAX_COMMAND_LENGTH, type ConsoleEntry, type ConsoleState } from "./command-prompt"

interface Props {
  host: string
  history: readonly ConsoleEntry[]
  console: ConsoleState
  locked: boolean
  tasks: ReactNode
  evidence: ReactNode
  results?: ReactNode
  onExecute: (command: string) => void
  onReset: () => void
}
/** Presentation state only: authoritative console/model data always comes from the session. */
export function CommandPromptWorkspace({host,history,console:display,locked,tasks,evidence,results,onExecute,onReset}:Props) {
  const [draft,setDraft]=useState("")
  const [cursor,setCursor]=useState<number|null>(null)
  const [panelOpen,setPanelOpen]=useState(false)
  const recalledDraft=useRef("")
  const input=useRef<HTMLInputElement>(null)
  const scroll=useRef<HTMLDivElement>(null)
  const panelId=useId()
  const inputId=useId()
  const visible=history.filter(e=>e.id>display.visibleAfter)
  const last=history.at(-1)
  useEffect(()=>{
    scroll.current?.scrollTo({top:scroll.current.scrollHeight})
  },[history,display.visibleAfter])
  useEffect(()=>{
    if(history.length===0) {setDraft("");setCursor(null);recalledDraft.current=""}
  },[history.length])
  // VisualViewport resize is emitted when a phone keyboard reduces the visible
  // area. Scroll only while the command input owns focus; clean up on unmount.
  useEffect(()=>{
    const viewport=window.visualViewport
    let frame=0
    const reveal=()=>{
      cancelAnimationFrame(frame)
      frame=requestAnimationFrame(()=>{
        if(document.activeElement===input.current) input.current?.scrollIntoView({block:"nearest",behavior:"instant"})
      })
    }
    viewport?.addEventListener("resize",reveal)
    return ()=>{viewport?.removeEventListener("resize",reveal);cancelAnimationFrame(frame)}
  },[])
  const submit=()=>{
    if(locked || !draft.trim()) return
    onExecute(draft)
    setDraft("");setCursor(null);recalledDraft.current=""
    input.current?.focus({preventScroll:true})
  }
  return <div className="mt-4 min-w-0 space-y-3" data-testid="command-prompt-workspace">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="min-w-0"><p className="text-sm font-semibold">Virtual workstation</p>
        <p className="text-sm text-muted-foreground">Command Prompt · Isolated IPv4 network</p><p className="mt-1 text-sm text-muted-foreground">Complete the work-order tasks in order.</p></div>
      <button type="button" onClick={()=>{onReset();setDraft("");setCursor(null);recalledDraft.current="";input.current?.focus({preventScroll:true})}} disabled={locked}
        className="inline-flex min-h-11 items-center gap-2 rounded-md border px-3 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-45"
        aria-describedby={`${inputId}-reset`} data-testid="simulation-reset"><RotateCcw className="size-4" aria-hidden/>Reset simulation</button>
      <p id={`${inputId}-reset`} className="sr-only">Restore the initial adapter, DNS cache, console display and command history for this question.</p>
    </div>
    <div className="grid min-w-0 gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start">
      <aside className="min-w-0 rounded-lg border bg-muted/25">
        <button type="button" onClick={()=>setPanelOpen(v=>!v)} aria-expanded={panelOpen} aria-controls={panelId}
          className="flex min-h-11 w-full items-center justify-between gap-2 rounded-lg p-3 text-left text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          data-testid="simulation-panel-toggle">Work order & evidence<ChevronDown className={cn("size-4 transition-transform motion-reduce:transition-none",panelOpen&&"rotate-180")} aria-hidden/></button>
        <div id={panelId} className={cn("min-w-0 divide-y",panelOpen?"block":"hidden","lg:block")}>
          <section className="p-4"><h3 className="text-sm font-semibold">Work order</h3>{tasks}</section>
          <section className="p-4"><h3 className="text-sm font-semibold">Adapter evidence</h3>{evidence}</section>
          {results && <section className="p-4" data-testid="simulation-objectives"><h3 className="text-sm font-semibold">Graded objectives</h3>{results}</section>}
        </div>
      </aside>
      <section className="min-w-0 overflow-hidden rounded-lg border border-slate-700 bg-[#101216] text-slate-100 shadow-lg" aria-label="Simulated Command Prompt">
        <div className="flex min-h-11 flex-wrap items-center justify-between gap-2 border-b border-slate-700 bg-[#20242b] px-4 py-2 text-sm">
          <span className="flex items-center gap-2 font-medium"><TerminalSquare className="size-4 text-slate-300" aria-hidden/>Command Prompt</span>
          <span className="font-mono text-sm text-slate-300">CERT900-LT01</span>
        </div>
        <div ref={scroll} tabIndex={0} role="log" aria-label="Terminal history" aria-live="polite" aria-relevant="additions" aria-atomic="false"
          onKeyDown={e=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","PageUp","PageDown"].includes(e.key)) e.stopPropagation()}}
          className="h-[min(44svh,24rem)] min-h-44 overflow-auto p-3 font-mono text-sm leading-6 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-300 sm:p-4 lg:h-96" data-testid="terminal-screen">
          {display.showBanner && <pre className="mb-5 w-max min-w-full text-sm leading-6">{"Cert900 Virtual Workstation [Version 1.0]\nCommand Prompt simulation. Type help for supported commands."}</pre>}
          {visible.map(entry=><div key={entry.id} className="mb-5 w-max min-w-full" data-testid="console-entry">
            <p className="whitespace-pre"><span className="text-slate-400">{host}</span>{entry.command}</p>
            {entry.output && <pre className={cn("mt-1 whitespace-pre font-mono text-sm leading-6",entry.status==="error"?"text-amber-200":"text-slate-100")}>{entry.output}</pre>}
          </div>)}
          <p className="whitespace-pre text-slate-400" aria-hidden>{host}<span className="ml-1 inline-block h-4 w-2 bg-slate-400 align-middle"/></p>
        </div>
        <form className="border-t border-slate-700 bg-[#161a20] p-3 sm:p-4" onSubmit={e=>{e.preventDefault();submit()}}>
          <label htmlFor={inputId} className="mb-2 flex flex-wrap items-center justify-between gap-2 font-mono text-sm text-slate-300"><span>{host}</span><span className="font-sans text-sm">{locked?"Submission locked":"Command input"}</span></label>
          <div className="flex min-w-0 gap-2">
            <input id={inputId} ref={input} value={draft} disabled={locked} maxLength={MAX_COMMAND_LENGTH} aria-label="Terminal command input"
              aria-describedby={`${inputId}-help`} autoCapitalize="none" autoCorrect="off" autoComplete="off" spellCheck={false} enterKeyHint="send"
              onChange={e=>{setDraft(e.target.value);setCursor(null)}}
              onKeyDown={e=>{
                if(e.nativeEvent.isComposing || (e.key!=="ArrowUp" && e.key!=="ArrowDown")) return
                e.preventDefault()
                if(!history.length) return
                if(e.key==="ArrowUp") {
                  if(cursor===null) recalledDraft.current=draft
                  const next=cursor===null?history.length-1:Math.max(0,cursor-1)
                  setCursor(next);setDraft(history[next].command)
                } else if(cursor!==null) {
                  const next=cursor+1
                  setCursor(next<history.length?next:null);setDraft(next<history.length?history[next].command:recalledDraft.current)
                }
              }}
              className="h-12 min-w-0 flex-1 rounded-md border border-slate-500 bg-[#0d1014] px-3 font-mono text-base text-slate-100 outline-none focus-visible:border-sky-300 focus-visible:ring-2 focus-visible:ring-sky-300 disabled:opacity-60"
              placeholder={locked?"Submission locked":"Enter a command"} data-testid="terminal-input"/>
            <button type="submit" disabled={locked || !draft.trim()} className="inline-flex min-h-12 min-w-16 shrink-0 items-center justify-center gap-2 rounded-md bg-slate-200 px-3 text-sm font-semibold text-slate-950 outline-none hover:bg-slate-300 focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-40" data-testid="terminal-run">Run<CornerDownLeft className="hidden size-4 sm:block" aria-hidden/></button>
          </div>
          <p id={`${inputId}-help`} className="mt-2 text-sm text-slate-400">Enter to run · ↑ ↓ command history · <span className="font-mono">help</span> for supported commands</p>
        </form>
      </section>
    </div>
    <p className="text-sm text-muted-foreground">Simulation only. Commands affect this virtual workstation; no operating-system commands or network requests run.</p>
    <p role="status" aria-live="polite" className="sr-only" data-testid="command-feedback">{locked?"Submission locked.":last?`${last.command}: ${last.status==="error"?"Command error. ":""}${last.output.split("\n").find(Boolean) || "Console display cleared."}`:"Console ready."}</p>
  </div>
}
