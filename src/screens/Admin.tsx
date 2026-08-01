import { useCallback, useEffect, useState } from "react"
import { Check, Copy, LoaderCircle } from "lucide-react"
import { toast } from "sonner"
import { EXAM_META } from "@/data/meta"
import { loadBank } from "@/data/banks"
import type { Question } from "@/data/types"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

/** One (exam, question) pair, however many people reported it. */
interface ReportRow {
  examId: string
  ref: string
  reports: number
  open: number
  firstAt: number
  lastAt: number
}

/** What the ref points at, once the exam's bank has been fetched. */
type Resolved =
  | { kind: "mc"; q: Question }
  | { kind: "pbq"; title: string; scen: string }
  | { kind: "missing" }

const day = (ms: number) => new Date(ms).toISOString().slice(0, 10)

/**
 * Owner-only triage for reported questions.
 *
 * Reports have been arriving since launch and were only ever readable through
 * `wrangler d1 execute`, which meant nobody read them. The API returns just the
 * (exam, ref) pairs and their counts; the question text is resolved HERE, from
 * the bank the client already knows how to load, because the worker has no copy
 * of the content and should not grow one.
 */
export function Admin({ onHome }: { onHome: () => void }) {
  const [status, setStatus] = useState<"open" | "resolved">("open")
  const [rows, setRows] = useState<ReportRow[] | null>(null)
  const [denied, setDenied] = useState(false)
  const [failed, setFailed] = useState(false)

  const load = useCallback(async () => {
    setRows(null)
    setDenied(false)
    setFailed(false)
    try {
      const res = await fetch(`/api/admin/reports?status=${status}`)
      // The endpoint 404s rather than 403s for non-admins, so it does not
      // confirm it exists. Both mean the same thing here.
      if (res.status === 404) return setDenied(true)
      if (!res.ok) return setFailed(true)
      const body = (await res.json()) as { reports: ReportRow[] }
      setRows(body.reports)
    } catch {
      setFailed(true)
    }
  }, [status])

  useEffect(() => {
    void load()
  }, [load])

  if (denied) {
    return (
      <main>
        <h1 className="font-heading text-3xl font-semibold tracking-tight">Not authorized</h1>
        <p className="text-muted-foreground mt-3 max-w-md">
          Nothing to see here. If you were looking for practice questions, the exams are this way.
        </p>
        <Button className="mt-5" onClick={onHome}>Go to cert900</Button>
      </main>
    )
  }

  return (
    <main>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-semibold tracking-tight">Reported questions</h1>
          <p className="text-muted-foreground mt-2 max-w-lg text-sm">
            Grouped by question. Several reports on one item is the signal worth acting on; a single
            report is often someone disagreeing with a correct answer.
          </p>
        </div>
        <div className="flex gap-1.5" role="group" aria-label="Filter reports">
          {(["open", "resolved"] as const).map((s) => (
            <Button
              key={s}
              size="sm"
              variant={status === s ? "secondary" : "ghost"}
              onClick={() => setStatus(s)}
              data-testid={`admin-filter-${s}`}
            >
              {s === "open" ? "Open" : "Resolved"}
            </Button>
          ))}
        </div>
      </div>

      {failed && (
        <Card className="mt-6 flex flex-col items-start gap-3 p-6">
          <p className="font-medium">Could not load reports.</p>
          <Button size="sm" onClick={() => void load()}>Try again</Button>
        </Card>
      )}

      {!rows && !failed && (
        <div className="flex justify-center py-24" role="status" aria-label="Loading reports">
          <LoaderCircle className="size-6 animate-spin text-muted-foreground" strokeWidth={2} />
        </div>
      )}

      {rows?.length === 0 && (
        <Card className="mt-6 p-6">
          <p className="font-medium">{status === "open" ? "Nothing open." : "Nothing resolved yet."}</p>
          <p className="text-muted-foreground mt-1 text-sm">
            {status === "open"
              ? "Every reported question has been handled."
              : "Resolved items will collect here."}
          </p>
        </Card>
      )}

      <div className="mt-6 flex flex-col gap-3">
        {rows?.map((r, i) => (
          <ReportCard
            key={`${r.examId}:${r.ref}`}
            row={r}
            style={{ "--i": i } as React.CSSProperties}
            onResolved={() => setRows((cur) => cur?.filter((x) => !(x.examId === r.examId && x.ref === r.ref)) ?? null)}
          />
        ))}
      </div>
    </main>
  )
}

function ReportCard({ row, onResolved, style }: {
  row: ReportRow
  onResolved: () => void
  style?: React.CSSProperties
}) {
  const [item, setItem] = useState<Resolved | null>(null)
  const [busy, setBusy] = useState(false)
  const [copied, setCopied] = useState(false)
  const meta = EXAM_META[row.examId]

  useEffect(() => {
    let live = true
    // Junk rows predating payload validation name exams that never existed, so
    // a failed load is an expected outcome here, not an error to surface.
    loadBank(row.examId)
      .then((exam) => {
        if (!live) return
        if (row.ref.startsWith("q:")) {
          const id = Number(row.ref.slice(2))
          const q = exam.questions.find((x) => x.id === id)
          setItem(q ? { kind: "mc", q } : { kind: "missing" })
        } else {
          const title = row.ref.slice(4)
          const p = exam.pbqs.find((x) => x.title === title)
          setItem(p ? { kind: "pbq", title: p.title, scen: p.scen } : { kind: "missing" })
        }
      })
      .catch(() => live && setItem({ kind: "missing" }))
    return () => {
      live = false
    }
  }, [row.examId, row.ref])

  const resolve = async () => {
    setBusy(true)
    try {
      const res = await fetch("/api/admin/reports/resolve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ examId: row.examId, ref: row.ref }),
      })
      if (!res.ok) throw new Error()
      onResolved()
      toast("Marked resolved.")
    } catch {
      setBusy(false)
      toast("Could not update that report.")
    }
  }

  /**
   * A ready-to-paste entry for tools/apply-fixes.mjs, which merges fix batches
   * by question id. Pre-filling the current text means the edit is the only
   * thing left to do. PBQs have no numeric id, so they go through
   * tools/replace-pbqs.mjs instead and get no snippet.
   */
  const snippet =
    item?.kind === "mc"
      ? JSON.stringify(
          { exam: row.examId, fixes: [{ id: item.q.id, x: item.q.x, o: item.q.o, a: item.q.a, e: item.q.e }] },
          null,
          2,
        )
      : null

  return (
    <Card className="stagger-item flex flex-col gap-3 p-5" style={style} data-testid="admin-report">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span
          className={cn(
            "rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold tabular-nums",
            row.reports > 1 ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground",
          )}
        >
          {row.reports === 1 ? "1 report" : `${row.reports} reports`}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {meta ? `${meta.code} · ${meta.cert} ${meta.name}` : `${row.examId} (unknown exam)`}
        </span>
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {row.firstAt === row.lastAt ? day(row.lastAt) : `${day(row.firstAt)} to ${day(row.lastAt)}`}
        </span>
      </div>

      {!item && <p className="text-muted-foreground text-sm">Loading the question…</p>}

      {item?.kind === "missing" && (
        <p className="text-sm">
          <span className="font-medium">No longer in the bank.</span>{" "}
          <span className="text-muted-foreground font-mono text-xs">{row.ref}</span>
          <span className="text-muted-foreground"> — already rewritten, or junk from before the report endpoint validated its input.</span>
        </p>
      )}

      {item?.kind === "pbq" && (
        <div>
          <p className="font-medium">{item.title}</p>
          <p className="text-muted-foreground mt-1 text-sm">{item.scen}</p>
          <p className="text-muted-foreground mt-2 font-mono text-xs">
            PBQ — swap it with tools/replace-pbqs.mjs (add-content only ever appends).
          </p>
        </div>
      )}

      {item?.kind === "mc" && (
        <div>
          <p className="font-medium leading-snug">{item.q.x}</p>
          <ul className="mt-2 flex flex-col gap-1">
            {item.q.o.map((o, oi) => {
              const key = item.q.as ? item.q.as.includes(oi) : oi === item.q.a
              return (
                <li
                  key={oi}
                  className={cn(
                    "flex items-start gap-2 text-sm",
                    key ? "text-success font-medium" : "text-muted-foreground",
                  )}
                >
                  <span className="font-mono text-xs">{key ? "✓" : "·"}</span>
                  {o}
                </li>
              )
            })}
          </ul>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{item.q.e}</p>
          <p className="text-muted-foreground mt-2 font-mono text-xs tabular-nums">
            id {item.q.id} · topic {item.q.t} · domain {item.q.d}
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" onClick={() => void resolve()} disabled={busy} data-testid="admin-resolve">
          {busy ? "Saving" : "Mark resolved"}
        </Button>
        {snippet && (
          <Button
            size="sm"
            variant="ghost"
            className="gap-1.5"
            onClick={async () => {
              await navigator.clipboard.writeText(snippet)
              setCopied(true)
              setTimeout(() => setCopied(false), 1500)
            }}
          >
            {copied ? <Check className="size-3.5" strokeWidth={2.5} /> : <Copy className="size-3.5" strokeWidth={2} />}
            {copied ? "Copied" : "Copy fix batch"}
          </Button>
        )}
      </div>
    </Card>
  )
}
