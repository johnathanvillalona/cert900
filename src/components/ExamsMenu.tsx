import { Check, ChevronDown, GraduationCap } from "lucide-react"
import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import { examShortName } from "@/data/labels"
import { VENDORS, VENDOR_ORDER } from "@/data/vendors"
import { useProgress } from "@/hooks/useProgress"
import { Button } from "@/components/ui/button"
import { ExamEmblem } from "@/components/exam-art"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

/**
 * The prominent "Exams" nav entry: a vendor-grouped panel of every exam.
 * Used in both the app-shell header and the landing header. The trigger keeps
 * the legacy `switch-exam` testid so existing drivers stay green.
 *
 * Layout is CSS multi-column with unbreakable vendor groups, so the panel
 * rebalances itself as exams are added instead of growing ever taller. Below
 * `sm` it collapses to one column so 360px phones still work.
 */
export function ExamsMenu({ currentId, onChoose }: { currentId?: string | null; onChoose: (id: string) => void }) {
  const store = useProgress()
  const groups = VENDOR_ORDER.map((v) => ({
    v,
    exams: EXAM_ORDER.map((id) => EXAM_META[id]).filter((ex) => ex.vendor === v),
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
      <DropdownMenuContent
        align="end"
        collisionPadding={12}
        data-testid="exams-menu"
        className="w-[min(calc(100vw-2rem),21rem)] p-2 sm:w-[33rem] sm:columns-2 sm:gap-4 sm:[column-rule:1px_solid_var(--border)] [&>*]:break-inside-avoid"
      >
        {groups.map((g) => (
          <DropdownMenuGroup key={g.v} aria-labelledby={`exams-${g.v}-label`} className="mb-2 last:mb-0">
            <DropdownMenuLabel
              id={`exams-${g.v}-label`}
              className="text-muted-foreground font-mono text-[11px] font-semibold tracking-wider uppercase"
            >
              {VENDORS[g.v].short}
            </DropdownMenuLabel>
            {g.exams.map((ex) => {
              const p = store.all[ex.id]
              const answered = p ? Object.values(p.topics).reduce((a, s) => a + s.t, 0) : 0
              const current = ex.id === currentId
              const name = examShortName(ex)
              return (
                <DropdownMenuItem
                  key={ex.id}
                  data-testid={`exams-item-${ex.id}`}
                  // Without textValue, typeahead would match the concatenated
                  // two-line text ("A+ Core 1220-1201").
                  textValue={name}
                  aria-current={current ? "true" : undefined}
                  onSelect={() => onChoose(ex.id)}
                  className="cursor-pointer items-start gap-2.5 py-1.5"
                >
                  <ExamEmblem
                    examId={ex.id}
                    className={cn("mt-0.5 size-4", current ? "text-brand" : VENDORS[g.v].tintClass)}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm">{name}</span>
                    <span className="text-muted-foreground block font-mono text-[10px] tabular-nums">{ex.code}</span>
                  </span>
                  {current ? (
                    <Check className="text-brand mt-0.5 size-4 shrink-0" strokeWidth={2.5} aria-label="Current exam" />
                  ) : answered > 0 ? (
                    <span className="text-brand mt-1 shrink-0 font-mono text-[10px] tabular-nums">{answered}</span>
                  ) : null}
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
