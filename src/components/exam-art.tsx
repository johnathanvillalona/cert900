/* Original per-exam emblems. Same house style as pbq-art.tsx: flat, 1.5
   stroke, theme-aware via currentColor and design tokens, every emblem drawn
   inside a 0 0 24 24 viewBox so they read as one family at any size.

   These are ORIGINAL marks, deliberately not the vendors' logos. CompTIA
   licenses its certification logos only to certified individuals and delivery
   partners, and AWS's trademark guidance limits third-party use to plain text
   with no logos. cert900 is an unaffiliated study site (see the footer
   disclaimer), so it draws its own iconography and refers to the vendors by
   name only. Don't swap these for official marks. */

import { cn } from "@/lib/utils"

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
}
const body = "var(--muted)"
/** Interior detail sits a step lighter so the silhouette stays readable at 16px. */
const detail = { ...stroke, strokeWidth: 1 }

/**
 * Callers must pass an explicit `size-*`: DropdownMenuItem's base CSS carries
 * `[&_svg:not([class*='size-'])]:size-4`, which would otherwise capture these.
 */
export function ExamEmblem({ examId, className }: { examId: string; className?: string }) {
  const cls = cn("shrink-0", className)
  switch (examId) {
    // A+ Core 1 — hardware: a board with a chip and pin rows.
    case "220-1201":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <rect {...stroke} fill={body} x={3.5} y={3.5} width={17} height={17} rx={2} />
          <rect {...stroke} x={8.5} y={8.5} width={7} height={7} rx={1} />
          {[10.5, 12, 13.5].map((v) => (
            <g key={v}>
              <line {...detail} x1={v} y1={3.5} x2={v} y2={8.5} />
              <line {...detail} x1={v} y1={15.5} x2={v} y2={20.5} />
            </g>
          ))}
          {[10.5, 13.5].map((v) => (
            <g key={v}>
              <line {...detail} x1={3.5} y1={v} x2={8.5} y2={v} />
              <line {...detail} x1={15.5} y1={v} x2={20.5} y2={v} />
            </g>
          ))}
        </svg>
      )

    // A+ Core 2 — operating systems: an app window with a command caret.
    case "220-1202":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <rect {...stroke} fill={body} x={3} y={4.5} width={18} height={15} rx={2} />
          <line {...stroke} x1={3} y1={9} x2={21} y2={9} />
          {[6, 8.25, 10.5].map((x) => (
            <circle key={x} fill="currentColor" cx={x} cy={6.75} r={0.7} />
          ))}
          <path {...stroke} d="M7.5 12.75l2.25 2.25-2.25 2.25" />
          <line {...stroke} x1={12} y1={17.25} x2={16.5} y2={17.25} />
        </svg>
      )

    // Network+ — three linked nodes.
    case "n10-009":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <line {...stroke} x1={12} y1={7.5} x2={6} y2={16} />
          <line {...stroke} x1={12} y1={7.5} x2={18} y2={16} />
          <line {...stroke} x1={6} y1={16.5} x2={18} y2={16.5} />
          <circle {...stroke} fill={body} cx={12} cy={5.5} r={2.75} />
          <circle {...stroke} fill={body} cx={5.5} cy={17.5} r={2.75} />
          <circle {...stroke} fill={body} cx={18.5} cy={17.5} r={2.75} />
        </svg>
      )

    // Security+ — shield with a keyhole. Kept distinct from pbq-art's plain
    // `shield` glyph by the keyhole and the flatter shoulder line.
    case "sy0-701":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path {...stroke} fill={body} d="M12 3l7 2.5v6c0 4.2-2.9 7.6-7 9.5-4.1-1.9-7-5.3-7-9.5v-6z" />
          <circle {...stroke} strokeWidth={1.3} cx={12} cy={11} r={1.9} />
          <path {...stroke} strokeWidth={1.3} d="M12 12.9v3.1" />
        </svg>
      )

    // AWS AI Practitioner — a node cluster with a spark.
    case "aif-c01":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <line {...detail} x1={7} y1={8} x2={13.5} y2={6} />
          <line {...detail} x1={7} y1={8} x2={12} y2={13} />
          <line {...detail} x1={7} y1={8} x2={8} y2={16} />
          <line {...detail} x1={12} y1={13} x2={8} y2={16} />
          <line {...detail} x1={12} y1={13} x2={13.5} y2={6} />
          <circle {...stroke} fill={body} cx={6.5} cy={8} r={2.1} />
          <circle {...stroke} fill={body} cx={12.2} cy={13.4} r={1.9} />
          <circle {...stroke} fill={body} cx={8} cy={16.8} r={1.6} />
          <path {...stroke} d="M17.5 4.5l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1z" />
        </svg>
      )

    // AWS Cloud Practitioner — a cloud over a base rail.
    case "clf-c02":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path
            {...stroke}
            fill={body}
            d="M7.5 14.5a3.5 3.5 0 0 1 .4-7 5 5 0 0 1 9.4 1.2 3 3 0 0 1-.3 5.8z"
          />
          <line {...stroke} x1={5} y1={18.5} x2={19} y2={18.5} />
          {[8, 12, 16].map((x) => (
            <line key={x} {...detail} x1={x} y1={16.5} x2={x} y2={18.5} />
          ))}
        </svg>
      )

    // SC-900 — security, compliance & identity: a shield with a compliance check.
    case "sc-900":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path {...stroke} fill={body} d="M12 3l7 2.5v6c0 4.2-2.9 7.6-7 9.5-4.1-1.9-7-5.3-7-9.5v-6z" />
          <path {...stroke} strokeWidth={1.3} d="M8.8 11.6l2.2 2.2 4.2-4.4" />
        </svg>
      )

    // Azure Fundamentals — a cloud over stacked resource blocks.
    case "az-900":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path
            {...stroke}
            fill={body}
            d="M8 11.5a3 3 0 0 1 .3-6 4.4 4.4 0 0 1 8.2 1 2.6 2.6 0 0 1-.3 5z"
          />
          <rect {...stroke} x={4} y={14.5} width={6} height={5.5} rx={1} />
          <rect {...stroke} x={14} y={14.5} width={6} height={5.5} rx={1} />
          <line {...detail} x1={10} y1={17.25} x2={14} y2={17.25} />
        </svg>
      )

    // Fallback so a newly added exam renders a neutral seal instead of a hole.
    default:
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <circle {...stroke} fill={body} cx={12} cy={10} r={6.5} />
          <path {...stroke} strokeWidth={1.3} d="M9 10.2l2 2 4-4.2" />
          <path {...stroke} d="M9 16.4l-1 5 4-2 4 2-1-5" />
        </svg>
      )
  }
}
