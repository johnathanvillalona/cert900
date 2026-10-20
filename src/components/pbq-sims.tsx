import { useRef, useState } from "react"
import { AlertCircle, Check, ChevronRight, RotateCcw } from "lucide-react"
import type { PBQConfig, PBQDragConnect, PBQHotspot, PBQTerminal, HotspotIcon, ConnectorGlyph } from "@/data/types"
import type { QuizSession } from "@/lib/quiz-session"
import { commandMatches } from "@/lib/engine"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Glyph, Scene, SCENE_HEIGHT } from "@/components/pbq-art"
import { SCENE_IMG, GLYPH_IMG } from "@/components/pbq-images"
import { cn } from "@/lib/utils"
import { Router, Network, Shield, Wifi, Monitor, Server, Printer, Cloud, Phone } from "lucide-react"

/* ============================= terminal ============================= */

export function TerminalView({ p, session, graded }: { p: PBQTerminal; session: QuizSession; graded: boolean }) {
  const answers = session.answers[session.idx] as string[]
  const [draft, setDraft] = useState("")
  const [log, setLog] = useState<{ cmd: string; out: string; ok: boolean }[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  const doneFlags = p.tasks.map((task, i) => commandMatches(answers[i] ?? "", task.accept))
  const activeTask = doneFlags.indexOf(false)

  const submit = () => {
    if (!draft.trim() || graded || activeTask === -1) return
    const task = p.tasks[activeTask]
    const ok = commandMatches(draft, task.accept)
    setLog((l) => [...l, { cmd: draft, out: ok ? task.output : "The command ran, but it does not complete the current objective.", ok }])
    if (ok) session.setTerminal(activeTask, draft)
    setDraft("")
    requestAnimationFrame(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight }))
  }

  return (
    <div className="mt-3">
      <div className="rounded-md border">
        <div className="flex flex-col gap-1 border-b p-3">
          {p.tasks.map((task, i) => (
            <p key={i} className={cn("flex items-start gap-2 text-sm", doneFlags[i] && "text-muted-foreground line-through decoration-success/60")}>
              {doneFlags[i] ? (
                <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={2.5} />
              ) : (
                <ChevronRight className={cn("mt-0.5 size-4 shrink-0", i === activeTask ? "text-brand" : "text-muted-foreground/50")} strokeWidth={2} />
              )}
              {task.prompt}
              {graded && !doneFlags[i] && (
                <span className="font-mono text-xs text-success">try: {task.accept[0].replace(/\\/g, "").replace(/\(\?:|\)/g, "").split("|")[0]}</span>
              )}
            </p>
          ))}
        </div>
        <div ref={scrollRef} className="max-h-56 overflow-y-auto bg-slate-950 p-3 font-mono text-xs leading-relaxed text-slate-100" data-testid="terminal-screen">
          <p className="text-slate-400">Simulated terminal. Complete the objectives above in order.</p>
          {log.map((entry, i) => (
            <div key={i} className="mt-2">
              <p>
                <span className="text-emerald-400">{p.host}</span> {entry.cmd}
              </p>
              <p className={cn("whitespace-pre-line", entry.ok ? "text-slate-300" : "text-amber-300")}>{entry.out}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t p-2">
          <span className="pl-1 font-mono text-xs text-success">{p.host}</span>
          <Input
            value={draft}
            disabled={graded || activeTask === -1}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder={activeTask === -1 ? "All objectives complete" : "Type a command and press Enter"}
            aria-label="Terminal command input"
            autoComplete="off"
            spellCheck={false}
            className="h-8 border-none font-mono text-xs shadow-none focus-visible:ring-0"
            data-testid="terminal-input"
          />
        </div>
      </div>
    </div>
  )
}

/* ============================== config ============================== */

export function ConfigView({ p, session, graded }: { p: PBQConfig; session: QuizSession; graded: boolean }) {
  const values = session.answers[session.idx] as (number | boolean | string)[]

  const fieldOk = (i: number) => {
    const f = p.fields[i]
    const v = values[i]
    if (f.type === "select") return v === f.answer
    if (f.type === "toggle") return v === f.answer
    return typeof v === "string" && commandMatches(v, f.answer as string[])
  }

  return (
    <div className="mt-3 overflow-hidden rounded-md border" data-testid="config-panel">
      <p className="border-b bg-muted/60 px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider">{p.panel}</p>
      <div className="divide-y">
        {p.fields.map((f, i) => (
          <div
            key={f.id}
            className={cn(
              "flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3",
              graded && (fieldOk(i) ? "bg-success/10" : "bg-destructive/10"),
            )}
          >
            <div className="min-w-40">
              <p className="text-sm font-medium">{f.label}</p>
              {f.note && <p className="text-muted-foreground text-xs">{f.note}</p>}
              {graded && !fieldOk(i) && (
                <p className="text-xs font-medium text-success">
                  Correct: {f.type === "select" ? f.options![f.answer as number] : f.type === "toggle" ? ((f.answer as boolean) ? "On" : "Off") : (f.answer as string[])[0].replace(/\\/g, "")}
                </p>
              )}
            </div>
            {f.type === "select" && (
              <Select
                disabled={graded}
                // "" not undefined — see MatchView: undefined makes this
                // uncontrolled and leaks Radix's selection into the next question.
                value={values[i] === -1 ? "" : String(values[i])}
                onValueChange={(v) => session.setConfigField(i, Number(v))}
              >
                <SelectTrigger className="w-52" aria-label={f.label} data-testid="config-select">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {f.options!.map((o, oi) => (
                    <SelectItem key={oi} value={String(oi)}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            {f.type === "toggle" && (
              <Switch
                disabled={graded}
                checked={values[i] as boolean}
                onCheckedChange={(v) => session.setConfigField(i, v)}
                aria-label={f.label}
                data-testid="config-toggle"
              />
            )}
            {f.type === "text" && (
              <Input
                disabled={graded}
                value={values[i] as string}
                onChange={(e) => session.setConfigField(i, e.target.value)}
                aria-label={f.label}
                autoComplete="off"
                spellCheck={false}
                className="w-52 font-mono text-sm"
                data-testid="config-text"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ============================== hotspot ============================== */

const NODE_ICONS: Record<HotspotIcon, typeof Router> = {
  router: Router,
  switch: Network,
  firewall: Shield,
  ap: Wifi,
  pc: Monitor,
  server: Server,
  printer: Printer,
  cloud: Cloud,
  phone: Phone,
}

export function HotspotView({ p, session, graded }: { p: PBQHotspot; session: QuizSession; graded: boolean }) {
  const selected = session.answers[session.idx] as string[]
  const max = p.maxSelect ?? p.targets.length
  const nodeById = Object.fromEntries(p.nodes.map((n) => [n.id, n]))

  return (
    <div className="mt-3">
      <p className="text-sm font-medium">{p.prompt}</p>
      <p className="text-muted-foreground mt-0.5 text-xs">
        Select {max === 1 ? "one item" : `up to ${max} items`} on the diagram. Tap again to deselect.
      </p>
      <svg viewBox="0 0 100 62" className="mt-3 w-full rounded-md border bg-muted/30" data-testid="hotspot-diagram" role="group" aria-label="Network diagram">
        {p.edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodeById[a].x}
            y1={nodeById[a].y}
            x2={nodeById[b].x}
            y2={nodeById[b].y}
            stroke="var(--border)"
            strokeWidth={0.7}
          />
        ))}
        {p.nodes.map((n) => {
          const Icon = NODE_ICONS[n.icon]
          const isSel = selected.includes(n.id)
          const isTarget = p.targets.includes(n.id)
          const stroke = graded ? (isTarget ? "var(--success)" : isSel ? "var(--destructive)" : "var(--border)") : isSel ? "var(--brand)" : "var(--border)"
          return (
            <g
              key={n.id}
              role="button"
              tabIndex={graded ? -1 : 0}
              aria-pressed={isSel}
              aria-label={`${n.label}${n.sub ? `, ${n.sub}` : ""}`}
              data-testid={`hotspot-${n.id}`}
              className={cn("cursor-pointer outline-none", !graded && "focus-visible:opacity-80")}
              onClick={() => !graded && session.toggleHotspot(n.id, max)}
              onKeyDown={(e) => {
                if (!graded && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault()
                  session.toggleHotspot(n.id, max)
                }
              }}
            >
              <rect x={n.x - 8} y={n.y - 7} width={16} height={14} rx={1.5} fill="var(--card)" stroke={stroke} strokeWidth={isSel || (graded && isTarget) ? 1.2 : 0.7} />
              <foreignObject x={n.x - 3} y={n.y - 5.5} width={6} height={6}>
                <Icon className="size-full" style={{ color: stroke === "var(--border)" ? "var(--muted-foreground)" : stroke }} strokeWidth={2} />
              </foreignObject>
              <text x={n.x} y={n.y + 3.4} textAnchor="middle" fontSize={2.4} fontFamily="var(--font-mono)" fill="var(--foreground)">
                {n.label}
              </text>
              {n.sub && (
                <text x={n.x} y={n.y + 6} textAnchor="middle" fontSize={1.9} fontFamily="var(--font-mono)" fill="var(--muted-foreground)">
                  {n.sub}
                </text>
              )}
              {isSel && !graded && <circle cx={n.x + 7} cy={n.y - 6} r={1.6} fill="var(--brand)" />}
              {graded && isTarget && <circle cx={n.x + 7} cy={n.y - 6} r={1.6} fill="var(--success)" />}
              {graded && isSel && !isTarget && <circle cx={n.x + 7} cy={n.y - 6} r={1.6} fill="var(--destructive)" />}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

/* ============================ dragconnect ============================ */

/** Item thumbnail: real photo when available, illustrated glyph fallback. */
function ItemThumb({ glyph, className }: { glyph: ConnectorGlyph; className?: string }) {
  const src = GLYPH_IMG[glyph]
  return (
    <span className={cn("flex items-center justify-center overflow-hidden rounded bg-white", className)}>
      {src ? (
        <img src={src} alt="" className="size-full object-contain" draggable={false} />
      ) : (
        <span className="text-slate-700 block size-3/4 p-0.5"><Glyph g={glyph} className="size-full" /></span>
      )}
    </span>
  )
}

export function DragConnectView({ p, session, graded }: { p: PBQDragConnect; session: QuizSession; graded: boolean }) {
  const placed = session.answers[session.idx] as Record<string, string>
  const [heldItem, setHeldItem] = useState<string | null>(null)
  const [drag, setDrag] = useState<{ id: string; x: number; y: number } | null>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const zoneRefs = useRef<(HTMLButtonElement | null)[]>([])
  const img = SCENE_IMG[p.scene]
  const H = img ? (100 * img.h) / img.w : SCENE_HEIGHT[p.scene]

  const itemById = Object.fromEntries(p.items.map((i) => [i.id, i]))
  const zoneById = Object.fromEntries(p.zones.map((z) => [z.id, z]))
  const zoneOf = (itemId: string) => Object.keys(placed).find((z) => placed[z] === itemId)

  const scenePoint = (clientX: number, clientY: number) => {
    const rect = sceneRef.current!.getBoundingClientRect()
    return { x: ((clientX - rect.left) / rect.width) * 100, y: ((clientY - rect.top) / rect.height) * H }
  }
  const zoneAt = (x: number, y: number) => p.zones.find((z) => x >= z.x && x <= z.x + z.w && y >= z.y && y <= z.y + z.h)

  const dropAt = (clientX: number, clientY: number, itemId: string) => {
    const pt = scenePoint(clientX, clientY)
    const zone = zoneAt(pt.x, pt.y)
    session.placeItem(zone ? zone.id : null, itemId)
  }

  const place = (zoneId: string) => {
    if (graded) return
    if (heldItem) {
      session.placeItem(zoneId, heldItem)
      setHeldItem(null)
    } else if (placed[zoneId]) {
      session.placeItem(null, placed[zoneId])
    }
  }

  const reset = () => {
    if (graded || !Object.keys(placed).length) return
    // Clear the authoritative quiz-session answer through its existing API.
    // Each item is removed from whichever zone currently contains it.
    for (const item of p.items) session.placeItem(null, item.id)
    setHeldItem(null)
    setDrag(null)
  }

  const pct = (v: number) => `${v}%`
  const pctY = (v: number) => `${(v / H) * 100}%`

  return (
    <div
      className="mt-4 space-y-4"
      data-testid="dragconnect"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setHeldItem(null)
          setDrag(null)
        }
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg border bg-muted/30 p-3 sm:p-4">
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Work order · Peripheral setup</p>
          <p className="mt-1 text-sm font-semibold">{p.prompt}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Select a connector, then choose a labeled port. You can also drag a connector onto a port. Press Escape to clear a selection.
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          disabled={graded || !Object.keys(placed).length}
          className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-md border bg-background px-3 text-xs font-semibold transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-45"
          data-testid="dragconnect-reset"
        >
          <RotateCcw className="size-3.5" aria-hidden />
          Reset connections
        </button>
        <p role="status" aria-live="polite" className="sr-only" data-testid="dragconnect-status">
          {graded
            ? `${p.zones.filter((z) => placed[z.id] === p.answer[z.id]).length} of ${p.zones.length} connections correct.`
            : heldItem
              ? `${itemById[heldItem].label} selected. Choose a labeled port.`
              : `${Object.keys(placed).length} of ${p.zones.length} ports connected.`}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
        {/* scene */}
        <div
          ref={sceneRef}
          className="relative w-full touch-none self-start overflow-hidden rounded-lg border bg-slate-950 shadow-sm"
          data-testid="dragconnect-scene"
          onPointerMove={(e) => drag && setDrag({ ...drag, x: e.clientX, y: e.clientY })}
          onPointerUp={(e) => {
            if (drag) {
              dropAt(e.clientX, e.clientY, drag.id)
              setDrag(null)
            }
          }}
        >
          {img ? (
            <img src={img.src} alt="Rear panel of a workstation computer with ports for the required connections." className="block w-full select-none" draggable={false} />
          ) : (
            <svg viewBox={`0 0 100 ${H}`} className="block w-full" role="img" aria-label="Illustrated workstation connection scene">
              <Scene scene={p.scene} />
            </svg>
          )}

          {p.zones.map((z, zi) => {
            const itemId = placed[z.id]
            const ok = graded && itemId === p.answer[z.id]
            const state = graded ? (ok ? "ok" : "bad") : itemId ? "filled" : heldItem ? "ready" : "empty"
            return (
              <button
                key={z.id}
                ref={(node) => { zoneRefs.current[zi] = node }}
                disabled={graded}
                data-testid={`zone-${z.id}`}
                aria-label={`Port ${zi + 1}: ${z.label}${itemId ? `, contains ${itemById[itemId].label}` : ", empty"}${graded ? ok ? ", correct placement" : ", incorrect or empty" : ""}`}
                className={cn(
                  "absolute flex cursor-pointer items-center justify-center rounded-md border-2 outline-none transition-[background-color,border-color,box-shadow] duration-150 focus-visible:z-20 focus-visible:ring-4 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  state === "empty" && "border-dashed border-white/90 bg-slate-900/35 hover:bg-slate-900/60",
                  state === "ready" && "border-amber-300 border-dashed bg-amber-300/20 shadow-[0_0_0_3px_rgba(0,0,0,0.35)]",
                  state === "filled" && "border-sky-300 bg-slate-900/65",
                  state === "ok" && "border-emerald-300 bg-emerald-950/70",
                  state === "bad" && "border-rose-300 bg-rose-950/70",
                )}
                style={{ left: pct(z.x), top: pctY(z.y), width: pct(z.w), height: pctY(z.h) }}
                onClick={() => place(z.id)}
              >
                {itemId && (
                  <span className="pbq-pop pointer-events-none flex max-h-full max-w-full items-center justify-center p-0.5">
                    {graded ? ok ? <Check className="size-5 text-emerald-200 sm:size-7" aria-hidden /> : <AlertCircle className="size-5 text-rose-200 sm:size-7" aria-hidden /> : <ItemThumb glyph={itemById[itemId].glyph} className="size-7 max-h-full shadow-md sm:size-9" />}
                  </span>
                )}
              </button>
            )
          })}

          {/* always-visible target labels */}
          {p.zones.map((z, zi) => {
            const itemId = placed[z.id]
            const ok = graded && itemId === p.answer[z.id]
            return (
              <span
                key={`label-${z.id}`}
                aria-hidden
                className={cn(
                  "pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-md border px-1.5 py-0.5 text-center font-mono text-[8px] leading-tight font-semibold whitespace-normal shadow-md sm:px-2 sm:text-[10px]",
                  graded
                    ? ok
                      ? "border-emerald-200 bg-emerald-950 text-emerald-50"
                      : "border-rose-200 bg-rose-950 text-rose-50"
                    : heldItem
                      ? "border-amber-300 bg-amber-50 text-slate-950"
                      : "border-slate-300 bg-white text-slate-950",
                )}
                style={{ left: pct(z.x + z.w / 2), top: pctY(z.y + z.h), maxWidth: "46%" }}
              >
                {zi + 1}. {z.label}
              </span>
            )
          })}
        </div>

        {/* inventory */}
        <div className="min-w-0 rounded-lg border bg-muted/20 p-3 sm:p-4" data-testid="dragconnect-tray">
          <div className="mb-3 flex items-center justify-between gap-2">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Parts inventory</p>
              <p className="mt-0.5 text-sm font-semibold">Available connectors</p>
            </div>
            <span className="rounded-full border bg-background px-2 py-1 font-mono text-[10px] tabular-nums text-muted-foreground">{p.items.length} items</span>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {p.items.map((it) => {
            const inZone = zoneOf(it.id)
            const held = heldItem === it.id
            const correct = graded && !!inZone && placed[inZone] === p.answer[inZone]
            const isDistractor = !Object.values(p.answer).includes(it.id)
            return (
              <button
                key={it.id}
                disabled={graded}
                data-testid={`item-${it.id}`}
                aria-pressed={held}
                aria-label={`${it.label}${inZone ? `, connected to ${zoneById[inZone].label}` : isDistractor ? ", unused distractor" : ", not connected"}${held ? ", selected" : ""}`}
                className={cn(
                  "pressable flex min-h-14 w-full cursor-grab touch-none items-center gap-3 rounded-md border bg-card p-2.5 text-left text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  held && "border-amber-500 bg-amber-50 ring-2 ring-amber-500/40 dark:bg-amber-950/30",
                  inZone && !graded && "border-sky-300/80",
                  correct && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/25",
                  graded && inZone && !correct && "border-rose-400 bg-rose-50 dark:bg-rose-950/25",
                  drag?.id === it.id && "opacity-40",
                )}
                onClick={(e) => {
                  if (graded) return
                  if (inZone) session.placeItem(null, it.id)
                  else {
                    setHeldItem(held ? null : it.id)
                    if (!held && e.detail === 0) requestAnimationFrame(() => zoneRefs.current[0]?.focus())
                  }
                }}
                onPointerDown={(e) => {
                  if (graded || inZone) return
                  ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
                  setDrag({ id: it.id, x: e.clientX, y: e.clientY })
                }}
                onPointerUp={(e) => {
                  if (drag && sceneRef.current) {
                    const r = sceneRef.current.getBoundingClientRect()
                    if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
                      dropAt(e.clientX, e.clientY, drag.id)
                    }
                    setDrag(null)
                  }
                }}
              >
                <ItemThumb glyph={it.glyph} className="size-12 shrink-0 border bg-white" />
                <span className="min-w-0 flex-1">
                  <span className="block leading-snug">{it.label}</span>
                  <span className={cn("mt-1 block text-[10px] leading-snug", held ? "font-semibold text-amber-800 dark:text-amber-200" : inZone ? "text-sky-700 dark:text-sky-300" : "text-muted-foreground")}>
                    {graded
                      ? correct ? `Correct · ${zoneById[inZone!].label}` : inZone ? `Check · ${zoneById[inZone].label}` : isDistractor ? "Unused distractor" : "Not connected"
                      : inZone ? `Connected · ${zoneById[inZone].label}` : held ? "Selected · choose a port" : "Available"}
                  </span>
                </span>
                {held && <span className="rounded-full bg-amber-200 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-amber-950 dark:bg-amber-900 dark:text-amber-50">Selected</span>}
                {graded && (correct ? <Check className="size-4 shrink-0 text-emerald-700 dark:text-emerald-300" aria-hidden /> : inZone ? <AlertCircle className="size-4 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden /> : null)}
              </button>
            )
          })}
          </div>
        </div>
      </div>

      {/* drag ghost */}
      {drag && (
        <div
          className="pointer-events-none fixed z-50 flex items-center gap-1.5 rounded-md border bg-card px-2 py-1 text-xs shadow-md"
          style={{ transform: `translate(${drag.x + 8}px, ${drag.y + 8}px)`, top: 0, left: 0 }}
          aria-hidden
        >
          <ItemThumb glyph={itemById[drag.id].glyph} className="size-6" />
          {itemById[drag.id].label}
        </div>
      )}
    </div>
  )
}
