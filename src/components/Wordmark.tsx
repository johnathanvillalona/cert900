import { cn } from "@/lib/utils"

/**
 * Brand mark (dial-9: a gauge arc that resolves into the "9" of 900, the
 * perfect CompTIA score) + "cert900" wordmark ("900" set in Geist Mono).
 * Put `.brand-link` on the clickable parent to get the arc-draw hover; text
 * color follows the parent (hover:text-brand). Reduced-motion draws instantly.
 *
 * ALIGN CALLERS WITH `items-center`, NEVER `items-baseline`. This root is a
 * flex container whose first item is the replaced <svg>, and a flex container
 * exports its first item's baseline. An SVG has no text baseline, so the UA
 * synthesises one from its bottom edge (~20px at size-5) rather than the
 * wordmark's text baseline (~14px) — under `items-baseline` any adjacent text
 * drops ~5px. (This shipped once, as the misaligned "· CLF-C02" in the app
 * header.) Fixing it inside this component is worse: making the root
 * `items-baseline` would shove the mark up instead.
 */
export function Wordmark({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-semibold tracking-tight", className)}>
      <svg viewBox="0 0 64 64" className={cn("size-5 shrink-0", iconClassName)} aria-hidden>
        <rect width="64" height="64" rx="14" fill="#151b29" stroke="var(--border)" strokeWidth="3" />
        <path
          className="wm-arc"
          pathLength={100}
          strokeDasharray={100}
          d="M 44.02 19.11 A 13 13 0 1 1 38.7 14.32"
          fill="none"
          stroke="#f2b27c"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          className="wm-arc"
          pathLength={100}
          strokeDasharray={100}
          d="M 44.02 19.11 C 46.02 29.11, 35 46, 27.5 48.5"
          fill="none"
          stroke="#f2b27c"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <span>
        cert<span className="font-mono tabular-nums text-brand">900</span>
      </span>
    </span>
  )
}
