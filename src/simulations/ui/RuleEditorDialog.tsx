import { useEffect, useId, useRef, type ReactNode } from "react"
import { RotateCcw, X } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../components/ui/dialog"

export const adminInputClass="h-12 w-full min-w-0 rounded-md border bg-background px-3 text-base text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring aria-invalid:border-destructive"
export function AdminField({label,error,hint,children}:{label:string;error?:string;hint?:string;children:(props:{id:string;'aria-invalid':boolean;'aria-describedby':string})=>ReactNode}) {
  const id=useId()
  return <div className="min-w-0 space-y-2"><label htmlFor={id} className="block text-sm font-medium">{label}</label>{children({id,'aria-invalid':!!error,'aria-describedby':`${id}-help`})}
    <p id={`${id}-help`} className={error?'text-sm leading-5 text-destructive':'text-sm leading-5 text-muted-foreground'}>{error??hint}</p></div>
}
export function RuleEditorDialog({open,title,description,children,errors,onApply,onCancel,onReset,onRestoreFocus}:{
  open:boolean;title:string;description:string;children:ReactNode;errors:Readonly<Record<string,string>>;onApply:()=>void;onCancel:()=>void;onReset:()=>void;onRestoreFocus:()=>void
}) {
  const form=useRef<HTMLFormElement>(null)
  useEffect(()=>{
    if(!Object.keys(errors).length)return
    const invalid=form.current?.querySelector<HTMLElement>('[aria-invalid="true"]')
    invalid?.focus()
    invalid?.parentElement?.scrollIntoView({block:'center'})
  },[errors])
  useEffect(()=>{
    if(!open)return
    let frame=0
    const reveal=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{
      if(document.activeElement instanceof HTMLElement&&form.current?.contains(document.activeElement)) document.activeElement.parentElement?.scrollIntoView({block:'center'})
    })}
    window.visualViewport?.addEventListener('resize',reveal)
    return()=>{window.visualViewport?.removeEventListener('resize',reveal);cancelAnimationFrame(frame)}
  },[open])
  return <Dialog open={open} onOpenChange={value=>{if(!value)onCancel()}}>
    <DialogContent showCloseButton={false} onOpenAutoFocus={e=>{e.preventDefault();form.current?.querySelector<HTMLElement>('input, select')?.focus({preventScroll:true})}} onCloseAutoFocus={e=>{e.preventDefault();onRestoreFocus()}}
      className="top-0 left-0 flex h-dvh max-h-dvh w-full max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none p-0 sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[90dvh] sm:max-w-2xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl" data-testid="acl-rule-editor">
      <div className="flex shrink-0 items-start justify-between gap-3 border-b p-4 sm:p-5"><div className="min-w-0"><DialogTitle className="text-lg font-semibold leading-6">{title}</DialogTitle><DialogDescription className="mt-1 leading-6">{description}</DialogDescription></div>
        <button type="button" onClick={onCancel} aria-label="Cancel rule editor" className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"><X className="size-4" aria-hidden/></button></div>
      <form ref={form} className="flex min-h-0 flex-1 flex-col" onSubmit={e=>{e.preventDefault();onApply()}} noValidate>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5"><div className="grid min-w-0 gap-5 sm:grid-cols-2">{children}</div>
          {Object.keys(errors).length>0&&<p role="alert" className="mt-4 text-sm text-destructive">Rule not applied. Correct the marked fields.</p>}</div>
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t bg-muted/20 p-3 pb-[max(.75rem,env(safe-area-inset-bottom))] sm:p-4">
          <button type="button" onClick={onReset} className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm text-muted-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring" data-testid="rule-editor-reset"><RotateCcw className="size-4" aria-hidden/>Reset simulation</button>
          <div className="flex flex-wrap gap-2"><button type="button" onClick={onCancel} className="min-h-11 rounded-md border bg-background px-4 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring">Cancel</button><button type="submit" className="min-h-11 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring" data-testid="acl-apply-rule">Apply rule</button></div>
        </div>
      </form>
    </DialogContent>
  </Dialog>
}
