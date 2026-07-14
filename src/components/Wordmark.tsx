import { cn } from "@/lib/utils"

/**
 * Brand mark (terminal prompt tile, same art as the favicon) + "cert900"
 * wordmark. Put `.brand-link` on the clickable parent to get the
 * blinking-cursor hover; text color follows the parent (hover:text-brand).
 */
export function Wordmark({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-mono font-semibold tracking-wide", className)}>
      <svg viewBox="0 0 64 64" className={cn("size-5 shrink-0", iconClassName)} aria-hidden>
        <rect width="64" height="64" rx="14" fill="#151b29" stroke="var(--border)" strokeWidth="3" />
        <path d="M19 21 L33 32 L19 43" fill="none" stroke="#f2b27c" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
        <path className="wm-cursor" d="M37 43 H47" fill="none" stroke="#f2b27c" strokeWidth="6.5" strokeLinecap="round" />
      </svg>
      cert900
    </span>
  )
}
