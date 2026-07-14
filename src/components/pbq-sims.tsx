import { useRef, useState } from "react"
import { Check, ChevronRight } from "lucide-react"
import type { PBQConfig, PBQDragConnect, PBQHotspot, PBQTerminal, HotspotIcon } from "@/data/types"
import type { QuizSession } from "@/hooks/useQuizSession"
import { commandMatches } from "@/lib/engine"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Glyph, Scene, SCENE_HEIGHT } from "@/components/pbq-art"
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
                value={values[i] === -1 ? undefined : String(values[i])}
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

export function DragConnectView({ p, session, graded }: { p: PBQDragConnect; session: QuizSession; graded: boolean }) {
  const placed = session.answers[session.idx] as Record<string, string>
  const [heldItem, setHeldItem] = useState<string | null>(null)
  const [drag, setDrag] = useState<{ id: string; x: number; y: number } | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const H = SCENE_HEIGHT[p.scene]

  const itemById = Object.fromEntries(p.items.map((i) => [i.id, i]))
  const zoneOf = (itemId: string) => Object.keys(placed).find((z) => placed[z] === itemId)
  const trayItems = p.items.filter((i) => !zoneOf(i.id))

  const svgPoint = (clientX: number, clientY: number) => {
    const rect = svgRef.current!.getBoundingClientRect()
    return { x: ((clientX - rect.left) / rect.width) * 100, y: ((clientY - rect.top) / rect.height) * H }
  }
  const zoneAt = (x: number, y: number) => p.zones.find((z) => x >= z.x && x <= z.x + z.w && y >= z.y && y <= z.y + z.h)

  const dropAt = (clientX: number, clientY: number, itemId: string) => {
    const pt = svgPoint(clientX, clientY)
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

  return (
    <div className="mt-3" data-testid="dragconnect">
      <p className="text-sm font-medium">{p.prompt}</p>
      <p className="text-muted-foreground mt-0.5 text-xs">
        Drag a connector onto a port, or tap a connector then tap its port. Tap a placed connector to remove it.
      </p>

      <svg
        ref={svgRef}
        viewBox={`0 0 100 ${H}`}
        className="mt-3 w-full touch-none rounded-md border bg-muted/30"
        data-testid="dragconnect-scene"
        onPointerMove={(e) => drag && setDrag({ ...drag, x: e.clientX, y: e.clientY })}
        onPointerUp={(e) => {
          if (drag) {
            dropAt(e.clientX, e.clientY, drag.id)
            setDrag(null)
          }
        }}
      >
        <Scene scene={p.scene} />
        {p.zones.map((z) => {
          const itemId = placed[z.id]
          const ok = graded && itemId === p.answer[z.id]
          const stroke = graded ? (ok ? "var(--success)" : "var(--destructive)") : heldItem ? "var(--brand)" : "var(--muted-foreground)"
          return (
            <g
              key={z.id}
              role="button"
              tabIndex={graded ? -1 : 0}
              aria-label={`Port zone${itemId ? `, contains ${itemById[itemId].label}` : ", empty"}`}
              data-testid={`zone-${z.id}`}
              className="cursor-pointer outline-none focus-visible:opacity-80"
              onClick={() => place(z.id)}
              onKeyDown={(e) => {
                if (!graded && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault()
                  place(z.id)
                }
              }}
            >
              <rect x={z.x} y={z.y} width={z.w} height={z.h} rx={1} fill={itemId ? "var(--card)" : "var(--background)"} stroke={stroke} strokeWidth={0.7} strokeDasharray={itemId ? undefined : "1.6 1.2"} />
              {itemId && (
                <foreignObject x={z.x + z.w / 2 - 2.6} y={z.y + z.h / 2 - 2.6} width={5.2} height={5.2}>
                  <span className="text-foreground block size-full"><Glyph g={itemById[itemId].glyph} className="size-full" /></span>
                </foreignObject>
              )}
              {graded && (
                <text x={z.x + z.w / 2} y={z.y + z.h + 2.6} textAnchor="middle" fontSize={2.1} fontFamily="var(--font-mono)" fill={ok ? "var(--success)" : "var(--destructive)"}>
                  {z.label}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {/* tray */}
      <div className="mt-3 flex flex-wrap gap-2" data-testid="dragconnect-tray">
        {trayItems.length === 0 && <p className="text-muted-foreground text-xs">All connectors placed.</p>}
        {trayItems.map((it) => (
          <button
            key={it.id}
            disabled={graded}
            data-testid={`item-${it.id}`}
            aria-pressed={heldItem === it.id}
            className={cn(
              "pressable flex cursor-grab touch-none items-center gap-2 rounded-md border bg-card px-2.5 py-1.5 text-xs font-medium",
              heldItem === it.id && "border-brand ring-2 ring-ring/50",
              drag?.id === it.id && "opacity-40",
            )}
            onClick={() => !graded && setHeldItem(heldItem === it.id ? null : it.id)}
            onPointerDown={(e) => {
              if (graded) return
              ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
              setDrag({ id: it.id, x: e.clientX, y: e.clientY })
            }}
            onPointerUp={(e) => {
              if (drag && svgRef.current) {
                const r = svgRef.current.getBoundingClientRect()
                if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
                  dropAt(e.clientX, e.clientY, drag.id)
                }
                setDrag(null)
              }
            }}
          >
            <span className="size-5 text-foreground"><Glyph g={it.glyph} className="size-full" /></span>
            {it.label}
          </button>
        ))}
      </div>

      {/* drag ghost */}
      {drag && (
        <div
          className="pointer-events-none fixed z-50 flex items-center gap-1.5 rounded-md border bg-card px-2 py-1 text-xs shadow-md"
          style={{ transform: `translate(${drag.x + 8}px, ${drag.y + 8}px)`, top: 0, left: 0 }}
          aria-hidden
        >
          <span className="size-4"><Glyph g={itemById[drag.id].glyph} className="size-full" /></span>
          {itemById[drag.id].label}
        </div>
      )}
    </div>
  )
}
