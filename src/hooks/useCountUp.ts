import { useEffect, useRef, useState } from "react"

/**
 * Counts a number up once, the first time it scrolls into view.
 *
 * Deliberately not the pure-CSS `@property` + `counter()` trick, despite the
 * rest of the motion system being CSS-only. That renders the digits into a
 * pseudo-element's `content`, where they cannot be selected, copied, or read
 * reliably by assistive tech -- and `animation-timeline: view()` runs in reverse
 * when you scroll back up, so the numbers would count DOWN. A real text node is
 * worth the few lines.
 *
 * Returns the final value immediately under prefers-reduced-motion, and on any
 * browser without IntersectionObserver, so the figure is never missing.
 */
export function useCountUp(to: number, durationMs = 900): { value: number; ref: React.RefObject<HTMLParagraphElement | null> } {
  const ref = useRef<HTMLParagraphElement>(null)
  const [value, setValue] = useState(() => (shouldSkip() ? to : 0))

  useEffect(() => {
    if (shouldSkip()) {
      setValue(to)
      return
    }
    const el = ref.current
    if (!el) return

    let frame = 0
    const run = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs)
        // Ease-out: most of the distance is covered early, so the number lands
        // rather than crawling to a stop.
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        // Once only. Re-running on every scroll past would turn a fact into a
        // fidget.
        obs.disconnect()
        run()
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to, durationMs])

  return { value, ref }
}

function shouldSkip(): boolean {
  if (typeof window === "undefined") return true
  if (typeof IntersectionObserver === "undefined") return true
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
}
