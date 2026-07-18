import { Fragment } from "react"
import { Check, ChevronDown, GraduationCap } from "lucide-react"
import { EXAMS, EXAM_ORDER } from "@/data/index"
import { VENDORS, VENDOR_ORDER } from "@/data/vendors"
import { useProgress } from "@/hooks/useProgress"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

/**
 * The prominent "Exams" nav entry: a vendor-grouped dropdown of every exam.
 * Used in both the app-shell header and the landing header. The trigger keeps
 * the legacy `switch-exam` testid so existing drivers stay green.
 */
export function ExamsMenu({ currentId, onChoose }: { currentId?: string | null; onChoose: (id: string) => void }) {
  const store = useProgress()
  const groups = VENDOR_ORDER.map((v) => ({
    v,
    exams: EXAM_ORDER.map((id) => EXAMS[id]).filter((ex) => ex.vendor === v),
  })).filter((g) => g.exams.length > 0)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          data-testid="switch-exam"
          aria-label="Exams"
          className="border-brand/50 text-brand hover:text-brand gap-1.5 font-medium"
        >
          <GraduationCap className="size-4 sm:hidden" strokeWidth={2} />
          <span className="hidden sm:inline">Exams</span>
          <ChevronDown className="hidden size-3.5 opacity-70 sm:inline" strokeWidth={2} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72" data-testid="exams-menu">
        {groups.map((g, gi) => (
          <Fragment key={g.v}>
            {gi > 0 && <DropdownMenuSeparator />}
            <DropdownMenuLabel className="text-muted-foreground font-mono text-[11px] font-semibold tracking-wider uppercase">
              {VENDORS[g.v].short}
            </DropdownMenuLabel>
            {g.exams.map((ex) => {
              const p = store.all[ex.id]
              const answered = p ? Object.values(p.topics).reduce((a, s) => a + s.t, 0) : 0
              const label = `${ex.cert} ${ex.name}`.replace(new RegExp(`^${VENDORS[g.v].short}\\s*`), "").trim() || ex.name
              return (
                <DropdownMenuItem
                  key={ex.id}
                  data-testid={`exams-item-${ex.id}`}
                  onSelect={() => onChoose(ex.id)}
                  className="cursor-pointer gap-2.5"
                >
                  <span className="text-muted-foreground w-[4.5rem] shrink-0 font-mono text-xs tabular-nums">{ex.code}</span>
                  <span className="flex-1 truncate text-sm">{label}</span>
                  {ex.id === currentId ? (
                    <Check className="text-brand size-4 shrink-0" strokeWidth={2.5} aria-label="Current exam" />
                  ) : answered > 0 ? (
                    <span className="text-brand shrink-0 font-mono text-[10px] tabular-nums">{answered}</span>
                  ) : null}
                </DropdownMenuItem>
              )
            })}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
