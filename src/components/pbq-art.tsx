import type { ConnectorGlyph } from "@/data/types"

/* Illustrated, theme-aware SVG art for drag-connect PBQs. Flat style,
   consistent 1.5 stroke, colors from the design tokens via currentColor
   and CSS variables. Every glyph draws inside a 0 0 24 24 viewBox. */

export function Glyph({ g, className }: { g: ConnectorGlyph; className?: string }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const }
  const body = "var(--muted)"
  switch (g) {
    case "rj45":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...stroke} fill={body} d="M5 4h14v10h-3v3h-8v-3H5z" />
          {[7.5, 9.5, 11.5, 13.5, 15.5].map((x) => (
            <line key={x} {...stroke} strokeWidth={1} x1={x} y1={6} x2={x} y2={10} />
          ))}
          <path {...stroke} d="M10 17v3h4v-3" />
        </svg>
      )
    case "rj11":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...stroke} fill={body} d="M7 5h10v9h-2.5v3h-5v-3H7z" />
          {[10, 12, 14].map((x) => (
            <line key={x} {...stroke} strokeWidth={1} x1={x} y1={7} x2={x} y2={10} />
          ))}
          <path {...stroke} d="M10.5 17v2.5h3V17" />
        </svg>
      )
    case "usb-a":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect {...stroke} fill={body} x={5} y={8} width={14} height={8} rx={1} />
          <rect {...stroke} strokeWidth={1} x={8} y={10.5} width={8} height={3} />
          <path {...stroke} d="M19 10.5h1.5v3H19" />
        </svg>
      )
    case "usb-c":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect {...stroke} fill={body} x={4.5} y={9} width={15} height={6} rx={3} />
          <rect {...stroke} strokeWidth={1} x={7.5} y={11} width={9} height={2} rx={1} />
        </svg>
      )
    case "hdmi":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...stroke} fill={body} d="M4.5 9h15v4l-2 2.5h-11l-2-2.5z" />
          <line {...stroke} strokeWidth={1} x1={7.5} y1={11.5} x2={16.5} y2={11.5} />
        </svg>
      )
    case "vga":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...stroke} fill={body} d="M5 8.5h14l-1.5 7h-11z" />
          {[8, 10.5, 13, 15.5].map((x) => (
            <circle key={x} cx={x} cy={10.8} r={0.55} fill="currentColor" />
          ))}
          {[9.2, 11.8, 14.3].map((x) => (
            <circle key={x} cx={x} cy={13} r={0.55} fill="currentColor" />
          ))}
        </svg>
      )
    case "dp":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...stroke} fill={body} d="M5 9h12.5l1.5 1.5V15H5z" />
          <line {...stroke} strokeWidth={1} x1={7.5} y1={11.8} x2={16} y2={11.8} />
        </svg>
      )
    case "audio":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle {...stroke} fill={body} cx={12} cy={12} r={5.5} />
          <circle {...stroke} strokeWidth={1} cx={12} cy={12} r={1.6} />
        </svg>
      )
    case "coax":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle {...stroke} fill={body} cx={12} cy={12} r={6} />
          <circle {...stroke} strokeWidth={1} cx={12} cy={12} r={3.2} />
          <circle cx={12} cy={12} r={0.9} fill="currentColor" />
        </svg>
      )
    case "lc-fiber":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect {...stroke} fill={body} x={6} y={5} width={5} height={14} rx={1} />
          <rect {...stroke} fill={body} x={13} y={5} width={5} height={14} rx={1} />
          <circle cx={8.5} cy={9} r={1} fill="currentColor" />
          <circle cx={15.5} cy={9} r={1} fill="currentColor" />
        </svg>
      )
    case "power":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...stroke} fill={body} d="M6 7h12v10H6z" />
          <line {...stroke} x1={9.5} y1={10} x2={9.5} y2={14} />
          <line {...stroke} x1={14.5} y1={10} x2={14.5} y2={14} />
          <line {...stroke} strokeWidth={1} x1={12} y1={12} x2={12} y2={14.5} />
        </svg>
      )
    case "lock":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect {...stroke} fill={body} x={6.5} y={10.5} width={11} height={8} rx={1.5} />
          <path {...stroke} d="M9 10.5V8a3 3 0 0 1 6 0v2.5" />
        </svg>
      )
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...stroke} fill={body} d="M12 4.5 18.5 7v5c0 4-2.8 6.6-6.5 8-3.7-1.4-6.5-4-6.5-8V7z" />
        </svg>
      )
    case "badge":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect {...stroke} fill={body} x={6} y={5} width={12} height={15} rx={1.5} />
          <circle {...stroke} strokeWidth={1} cx={12} cy={10} r={2} />
          <line {...stroke} strokeWidth={1} x1={9} y1={15.5} x2={15} y2={15.5} />
        </svg>
      )
    case "blocker":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect {...stroke} fill={body} x={5} y={9} width={9} height={6} rx={1} />
          <rect {...stroke} x={14} y={10} width={5} height={4} />
          <line {...stroke} x1={7} y1={17.5} x2={17} y2={6.5} />
        </svg>
      )
  }
}

/* ---- Scenes: each renders inside viewBox 0 0 100 <H> and exposes its height
   so zones (0-100 coords) can be positioned by the DragConnect view. ---- */

export const SCENE_HEIGHT: Record<string, number> = {
  "pc-rear": 56,
  "patch-panel": 42,
  rack: 66,
  desk: 56,
}

const line = { stroke: "var(--border)", strokeWidth: 0.6, fill: "none" }
const panel = { fill: "var(--muted)", stroke: "var(--border)", strokeWidth: 0.6 }
const dark = { fill: "var(--background)", stroke: "var(--border)", strokeWidth: 0.5 }
const label = { fontSize: 2.6, fill: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }

export function Scene({ scene }: { scene: string }) {
  if (scene === "pc-rear")
    return (
      <g>
        <rect x={18} y={2} width={64} height={52} rx={2} {...panel} />
        <text x={50} y={7.6} textAnchor="middle" {...label}>REAR I/O PANEL</text>
        {/* fan grille */}
        <circle cx={68} cy={20} r={8.5} {...dark} />
        {[0, 30, 60, 90, 120, 150].map((a) => (
          <line key={a} x1={68 - 7 * Math.cos((a * Math.PI) / 180)} y1={20 - 7 * Math.sin((a * Math.PI) / 180)} x2={68 + 7 * Math.cos((a * Math.PI) / 180)} y2={20 + 7 * Math.sin((a * Math.PI) / 180)} {...line} />
        ))}
        {/* screw holes */}
        <circle cx={21.5} cy={5} r={0.9} {...dark} />
        <circle cx={78.5} cy={51} r={0.9} {...dark} />
      </g>
    )
  if (scene === "patch-panel")
    return (
      <g>
        <rect x={4} y={8} width={92} height={26} rx={1.5} {...panel} />
        <text x={50} y={13.4} textAnchor="middle" {...label}>PATCH PANEL · 1U</text>
        <circle cx={7} cy={21} r={1.1} {...dark} />
        <circle cx={93} cy={21} r={1.1} {...dark} />
      </g>
    )
  if (scene === "rack")
    return (
      <g>
        <rect x={14} y={2} width={72} height={62} rx={1.5} {...panel} />
        <text x={50} y={7} textAnchor="middle" {...label}>NETWORK RACK</text>
        {/* switch unit */}
        <rect x={18} y={10} width={64} height={12} rx={1} {...dark} />
        <text x={20} y={14} {...label}>SWITCH</text>
        {/* modem unit */}
        <rect x={18} y={26} width={64} height={12} rx={1} {...dark} />
        <text x={20} y={30} {...label}>MODEM</text>
        {/* PDU unit */}
        <rect x={18} y={42} width={64} height={12} rx={1} {...dark} />
        <text x={20} y={46} {...label}>PDU</text>
      </g>
    )
  if (scene === "desk")
    return (
      <g>
        <rect x={2} y={40} width={96} height={4} {...panel} />
        <text x={50} y={5} textAnchor="middle" {...label}>FRONT DESK · PUBLIC LOBBY</text>
        {/* monitor */}
        <rect x={38} y={12} width={24} height={16} rx={1} {...dark} />
        <rect x={47} y={28} width={6} height={4} {...panel} />
        {/* laptop */}
        <rect x={8} y={30} width={18} height={10} rx={1} {...dark} />
        {/* door */}
        <rect x={84} y={10} width={12} height={30} rx={1} {...dark} />
        <text x={90} y={26} textAnchor="middle" {...label}>DOOR</text>
      </g>
    )
  return null
}
