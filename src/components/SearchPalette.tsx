import { useEffect, useMemo, useRef, useState } from "react"
import { Play, Search, Target } from "lucide-react"
import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import { examShortName } from "@/data/labels"
import { VENDORS } from "@/data/vendors"
import { GUIDE_META } from "@/data/guide-meta"
import { ExamEmblem } from "@/components/exam-art"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type Hit =
  | { kind: "exam"; id: string; title: string; sub: string }
  | { kind: "topic"; id: string; examId: string; topic: string; title: string; sub: string }
  | { kind: "page"; id: string; path: string; title: string; sub: string }

/** Everything searchable, built once from metadata — no bank is loaded. */
function buildIndex(): Hit[] {
  const hits: Hit[] = []
  for (const id of EXAM_ORDER) {
    const ex = EXAM_META[id]
    if (!ex) continue
    hits.push({
      kind: "exam",
      id: `exam:${id}`,
      title: `${ex.cert} ${ex.name}`,
      sub: `${ex.code} · ${ex.questionCount} questions`,
    })
    for (const [topic, v] of Object.entries(ex.videos)) {
      hits.push({
        kind: "topic",
        id: `topic:${id}:${topic}`,
        examId: id,
        topic,
        title: v.n,
        sub: `${ex.code} · ${ex.domains[v.d] ?? ""}`,
      })
    }
  }
  for (const key of Object.keys(GUIDE_META) as (keyof typeof GUIDE_META)[]) {
    const g = GUIDE_META[key]
    hits.push({ kind: "page", id: `page:${g.path}`, path: g.path, title: g.h1, sub: g.path })
  }
  return hits
}

/**
 * Every whitespace-separated token must appear, so "osi mod" finds
 * "Understanding the OSI Model" while "dns" no longer drags in
 * "Motherboard Expansion Slots" (a loose subsequence match did).
 * Lower score sorts first: title matches beat sub-line matches, and
 * earlier positions beat later ones.
 */
function score(hit: Hit, tokens: string[]): number {
  const title = hit.title.toLowerCase()
  const hay = `${title} ${hit.sub.toLowerCase()}`
  let total = 0
  for (const t of tokens) {
    const at = hay.indexOf(t)
    if (at === -1) return -1
    total += title.startsWith(t) ? 0 : title.includes(t) ? 100 + at : 1000 + at
  }
  return total
}

const GROUP_LABEL: Record<Hit["kind"], string> = { exam: "Exams", topic: "Topics", page: "Pages" }

/**
 * ⌘K / Ctrl+K palette over exams, all 378 topics, and the guide pages.
 *
 * Modifier-only shortcut on purpose: single letters and Enter are live answer
 * keys during a quiz, so a bare "/" would fire mid-question. The dialog also
 * renders role="dialog", which Quiz's global key handler already ignores, so
 * typing here can never grade a question.
 */
export function SearchPalette({
  onChooseExam,
  onNavigate,
  onDrillTopic,
}: {
  onChooseExam: (id: string) => void
  onNavigate: (path: string) => void
  onDrillTopic: (examId: string, topic: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState("")
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const index = useMemo(buildIndex, [])

  const results = useMemo(() => {
    const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean)
    if (!tokens.length) return index.filter((h) => h.kind === "exam")
    return index
      .map((h) => ({ h, s: score(h, tokens) }))
      .filter((x) => x.s >= 0)
      .sort((a, b) => a.s - b.s)
      .slice(0, 40)
      .map((x) => x.h)
  }, [q, index])

  useEffect(() => setActive(0), [q])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const run = (hit: Hit) => {
    setOpen(false)
    setQ("")
    if (hit.kind === "exam") onChooseExam(hit.id.slice(5))
    else if (hit.kind === "page") onNavigate(hit.path)
    else onDrillTopic(hit.examId, hit.topic)
  }

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault()
      setActive((a) => {
        const next = e.key === "ArrowDown" ? a + 1 : a - 1
        return Math.max(0, Math.min(results.length - 1, next))
      })
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault()
      run(results[active])
    }
  }

  // Keep the highlighted row in view during arrow navigation.
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('[data-active="true"]')?.scrollIntoView({ block: "nearest" })
  }, [active])

  let lastKind: Hit["kind"] | null = null

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        data-testid="open-search"
        aria-label="Search exams and topics"
        title="Search (Ctrl K)"
      >
        <Search className="size-4" strokeWidth={2} />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="top-[12%] max-w-xl translate-y-0 gap-0 p-0"
          data-testid="search-palette"
          onKeyDown={onListKey}
        >
          <DialogTitle className="sr-only">Search</DialogTitle>
          <DialogDescription className="sr-only">
            Find an exam, a topic to drill, or a guide page.
          </DialogDescription>

          <div className="flex items-center gap-2.5 border-b px-4">
            <Search className="text-muted-foreground size-4 shrink-0" strokeWidth={2} />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search exams and topics"
              aria-label="Search exams and topics"
              data-testid="search-input"
              className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="text-muted-foreground hidden shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] sm:block">
              esc
            </kbd>
          </div>

          <div ref={listRef} className="max-h-[60vh] overflow-y-auto p-2" role="listbox" aria-label="Search results">
            {results.length === 0 && (
              <p className="text-muted-foreground px-3 py-6 text-center text-sm">
                Nothing matches "{q}".
              </p>
            )}
            {results.map((hit, i) => {
              const header = hit.kind !== lastKind ? GROUP_LABEL[hit.kind] : null
              lastKind = hit.kind
              const isActive = i === active
              return (
                <div key={hit.id}>
                  {header && (
                    <p className="text-muted-foreground px-3 pt-2 pb-1 font-mono text-[11px] font-semibold tracking-wider uppercase">
                      {header}
                    </p>
                  )}
                  <button
                    role="option"
                    aria-selected={isActive}
                    data-active={isActive}
                    data-testid={`search-hit-${hit.kind}`}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => run(hit)}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-left",
                      isActive && "bg-accent",
                    )}
                  >
                    {hit.kind === "exam" ? (
                      <ExamEmblem
                        examId={hit.id.slice(5)}
                        className={cn("size-4", VENDORS[EXAM_META[hit.id.slice(5)].vendor].tintClass)}
                      />
                    ) : hit.kind === "topic" ? (
                      <Target className="text-muted-foreground size-4 shrink-0" strokeWidth={2} />
                    ) : (
                      <Play className="text-muted-foreground size-4 shrink-0" strokeWidth={2} />
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm">{hit.title}</span>
                      <span className="text-muted-foreground block truncate font-mono text-[10px]">{hit.sub}</span>
                    </span>
                    {hit.kind === "topic" && isActive && (
                      <span className="text-brand shrink-0 text-[10px] font-medium">Drill</span>
                    )}
                  </button>
                </div>
              )
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

/** Short display name for an exam id, used by callers rendering search results. */
export const searchExamName = (id: string) => {
  const ex = EXAM_META[id]
  return ex ? examShortName(ex) : id
}
