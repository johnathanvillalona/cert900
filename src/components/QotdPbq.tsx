import { useMemo, useState } from "react"
import { ArrowRight, Check, X } from "lucide-react"
import type { QotdPbqEntry } from "@/data/qotd-pool"
import { pbqCredit, shuffledIndices } from "@/lib/engine"
import { cn } from "@/lib/utils"

/**
 * A match or order PBQ, answerable inline in the landing hero.
 *
 * Deliberately standalone rather than reusing the quiz's PBQ views: those are
 * driven by the quiz-session reducer, and the hero has no session. Only these
 * two kinds are ever put in the QOTD pool (see tools/gen-meta.mjs) because the
 * other four sim kinds — terminal, config, hotspot, dragconnect — need the full
 * simulator UI. Grading matches the real thing: per-item fraction through
 * `pbqCredit`, which gives CompTIA and Cisco partial credit and makes AWS and
 * Azure all-or-nothing.
 */
export function QotdPbq({ pick, onGraded }: { pick: QotdPbqEntry; onGraded?: () => void }) {
  const { pbq, vendor } = pick
  return pbq.kind === "match" ? (
    <MatchPbq pbq={pbq} vendor={vendor} onGraded={onGraded} />
  ) : (
    <OrderPbq pbq={pbq} vendor={vendor} onGraded={onGraded} />
  )
}

function Verdict({ frac, vendor }: { frac: number; vendor: string }) {
  const credit = pbqCredit(vendor, frac)
  const perfect = frac === 1
  return (
    <p className="font-semibold">
      {perfect ? "Correct." : credit > 0 ? `Partly right. ${Math.round(credit * 100)}% credit.` : "Not quite."}
    </p>
  )
}

function MatchPbq({
  pbq,
  vendor,
  onGraded,
}: {
  pbq: Extract<QotdPbqEntry["pbq"], { kind: "match" }>
  vendor: string
  onGraded?: () => void
}) {
  // Choice order is shuffled so the dropdown never lists answers in key order.
  const order = useMemo(() => shuffledIndices(pbq.choices.length), [pbq])
  const [picked, setPicked] = useState<Record<number, number>>({})
  const [graded, setGraded] = useState(false)
  const done = pbq.items.every((_, i) => picked[i] !== undefined)
  const right = pbq.items.filter((it, i) => picked[i] === it.a).length
  const frac = right / pbq.items.length

  return (
    <>
      <p className="text-muted-foreground mt-2 text-sm leading-snug">{pbq.scen}</p>
      <div className="mt-3 flex flex-col gap-2">
        {pbq.items.map((item, i) => {
          const state = graded ? (picked[i] === item.a ? "correct" : "wrong") : "idle"
          return (
            <div key={item.l} className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "min-w-32 flex-1 rounded-md border px-3 py-2 text-sm",
                  state === "correct" && "border-success bg-success/10",
                  state === "wrong" && "border-destructive bg-destructive/10",
                )}
              >
                {item.l}
              </span>
              <select
                disabled={graded}
                value={picked[i] ?? ""}
                onChange={(e) => setPicked((p) => ({ ...p, [i]: Number(e.target.value) }))}
                aria-label={`Match for ${item.l}`}
                className="min-w-40 flex-1 cursor-pointer rounded-md border bg-background px-2 py-2 text-sm"
              >
                <option value="" disabled>
                  Choose…
                </option>
                {order.map((ci) => (
                  <option key={ci} value={ci}>
                    {pbq.choices[ci]}
                  </option>
                ))}
              </select>
            </div>
          )
        })}
      </div>
      {!graded ? (
        <button
          disabled={!done}
          onClick={() => {
            setGraded(true)
            onGraded?.()
          }}
          className="pressable mt-3 w-full cursor-pointer rounded-md border px-3 py-2 text-sm font-medium transition-colors duration-200 enabled:hover:border-primary enabled:hover:bg-accent disabled:opacity-50"
        >
          {done ? "Check answers" : "Match every item to continue"}
        </button>
      ) : (
        <div className="enter-fade-rise mt-3 border-t pt-3 text-sm">
          <Verdict frac={frac} vendor={vendor} />
          <p className="text-muted-foreground mt-1">
            {right} of {pbq.items.length} matched correctly.
            {frac < 1 && ` The correct pairs: ${pbq.items.map((it) => `${it.l} → ${pbq.choices[it.a]}`).join("; ")}.`}
          </p>
        </div>
      )}
    </>
  )
}

function OrderPbq({
  pbq,
  vendor,
  onGraded,
}: {
  pbq: Extract<QotdPbqEntry["pbq"], { kind: "order" }>
  vendor: string
  onGraded?: () => void
}) {
  // Starts deranged: shuffledIndices never returns the identity permutation, so
  // the presented order is never already the answer.
  const [seq, setSeq] = useState(() => shuffledIndices(pbq.steps.length))
  const [graded, setGraded] = useState(false)
  const right = seq.filter((s, i) => s === i).length
  const frac = right / pbq.steps.length

  const move = (from: number, to: number) => {
    if (to < 0 || to >= seq.length) return
    setSeq((cur) => {
      const next = cur.slice()
      ;[next[from], next[to]] = [next[to], next[from]]
      return next
    })
  }

  return (
    <>
      <p className="text-muted-foreground mt-2 text-sm leading-snug">{pbq.scen}</p>
      <ol className="mt-3 flex flex-col gap-1.5">
        {seq.map((stepIdx, pos) => {
          const state = graded ? (stepIdx === pos ? "correct" : "wrong") : "idle"
          return (
            <li
              key={stepIdx}
              className={cn(
                "flex items-center gap-2 rounded-md border px-3 py-2 text-sm",
                state === "correct" && "border-success bg-success/10",
                state === "wrong" && "border-destructive bg-destructive/10",
              )}
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border font-mono text-[11px] font-semibold">
                {state === "correct" ? (
                  <Check className="pop-in size-3.5" strokeWidth={2.5} />
                ) : state === "wrong" ? (
                  <X className="pop-in size-3.5" strokeWidth={2.5} />
                ) : (
                  pos + 1
                )}
              </span>
              <span className="flex-1">{pbq.steps[stepIdx]}</span>
              {!graded && (
                <span className="flex shrink-0 gap-1">
                  <button
                    onClick={() => move(pos, pos - 1)}
                    disabled={pos === 0}
                    aria-label={`Move "${pbq.steps[stepIdx]}" up`}
                    className="pressable size-6 cursor-pointer rounded border text-xs transition-colors duration-200 enabled:hover:bg-accent disabled:opacity-30"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => move(pos, pos + 1)}
                    disabled={pos === seq.length - 1}
                    aria-label={`Move "${pbq.steps[stepIdx]}" down`}
                    className="pressable size-6 cursor-pointer rounded border text-xs transition-colors duration-200 enabled:hover:bg-accent disabled:opacity-30"
                  >
                    ↓
                  </button>
                </span>
              )}
            </li>
          )
        })}
      </ol>
      {!graded ? (
        <button
          onClick={() => {
            setGraded(true)
            onGraded?.()
          }}
          className="pressable mt-3 w-full cursor-pointer rounded-md border px-3 py-2 text-sm font-medium transition-colors duration-200 hover:border-primary hover:bg-accent"
        >
          Check order
        </button>
      ) : (
        <div className="enter-fade-rise mt-3 border-t pt-3 text-sm">
          <Verdict frac={frac} vendor={vendor} />
          <p className="text-muted-foreground mt-1">
            {right} of {pbq.steps.length} steps in the right place.
            {frac < 1 && ` The correct order: ${pbq.steps.map((s, i) => `${i + 1}. ${s}`).join(" ")}`}
          </p>
        </div>
      )}
    </>
  )
}

/** Shared footer for a graded PBQ: the same video link the MC card shows. */
export function QotdPbqFooter({ pick }: { pick: QotdPbqEntry }) {
  return (
    <a
      href={pick.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand underline-offset-4 hover:underline"
    >
      Watch: {pick.vendor === "comptia" ? `Professor Messer, ${pick.videoName}` : pick.videoName}
      <ArrowRight className="size-3.5" strokeWidth={2} />
    </a>
  )
}
