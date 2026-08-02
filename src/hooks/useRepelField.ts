import { useEffect, useRef } from "react"

/**
 * Pointer-repel for the landing hero's decorative icon field: icons within
 * ~140px of the cursor ease away like the poles of a weak magnet, then settle
 * home. The second sanctioned rAF in the motion system (useCountUp is the
 * first, and for the same reason: CSS cannot express this).
 *
 * Rules this follows, and why:
 * - ZERO layout reads in the loop. Icon centers are config-derived
 *   (percent coords x the host rect); the rect is cached and refreshed
 *   lazily after scroll/resize, never queried per icon per frame.
 * - No React state. Targets and positions live in refs; the loop writes
 *   style.transform directly. A re-render during the lerp would be waste.
 * - The loop parks itself when every icon has settled (restarted by the next
 *   pointer event) and disengages entirely while the hero is off-screen.
 * - Skips outright under prefers-reduced-motion -- the global CSS policy
 *   cannot reach JS-driven inline transforms -- and on (hover: none)
 *   devices, where a "hover" repel is meaningless and touch gets drift only.
 * - Everything registers in ONE effect with complete cleanup: StrictMode
 *   mounts effects twice in dev, and a leaked frame means two lerp loops
 *   fighting over the same style writes.
 */
export function useRepelField(centers: { x: number; y: number }[]): {
  fieldRef: React.RefObject<HTMLDivElement | null>
  itemRefs: React.MutableRefObject<(HTMLElement | null)[]>
} {
  const fieldRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const field = fieldRef.current
    // The field is a child of the hero section; the section is the pointer
    // surface, so moving over the headline or the QOTD card also repels.
    const host = field?.parentElement
    if (!field || !host) return
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia?.("(hover: none)").matches) return

    const RADIUS = 140
    const MAX_PUSH = 28
    const LERP = 0.12
    const n = centers.length
    const tx = new Float32Array(n)
    const ty = new Float32Array(n)
    const cx = new Float32Array(n)
    const cy = new Float32Array(n)

    let rect: DOMRect | null = null
    let rectDirty = true
    let frame = 0
    let running = false
    let visible = true

    const tick = () => {
      let live = false
      for (let i = 0; i < n; i++) {
        cx[i] += (tx[i] - cx[i]) * LERP
        cy[i] += (ty[i] - cy[i]) * LERP
        if (Math.abs(tx[i] - cx[i]) > 0.05 || Math.abs(ty[i] - cy[i]) > 0.05) live = true
        const el = itemRefs.current[i]
        if (el) el.style.transform = `translate3d(${cx[i]}px, ${cy[i]}px, 0)`
      }
      if (live) frame = requestAnimationFrame(tick)
      else running = false
    }
    const ensureRunning = () => {
      if (running) return
      running = true
      frame = requestAnimationFrame(tick)
    }

    const onMove = (e: PointerEvent) => {
      if (!visible) return
      if (rectDirty || !rect) {
        rect = host.getBoundingClientRect()
        rectDirty = false
      }
      for (let i = 0; i < n; i++) {
        const ix = rect.left + (centers[i].x / 100) * rect.width
        const iy = rect.top + (centers[i].y / 100) * rect.height
        const dx = ix - e.clientX
        const dy = iy - e.clientY
        const dist = Math.hypot(dx, dy)
        if (dist < RADIUS && dist > 0.001) {
          const push = (1 - dist / RADIUS) ** 2 * MAX_PUSH
          tx[i] = (dx / dist) * push
          ty[i] = (dy / dist) * push
        } else {
          tx[i] = 0
          ty[i] = 0
        }
      }
      ensureRunning()
    }
    const rest = () => {
      tx.fill(0)
      ty.fill(0)
      ensureRunning()
    }
    const markDirty = () => {
      rectDirty = true
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (!visible) rest()
    })
    io.observe(host)
    const ro = new ResizeObserver(markDirty)
    ro.observe(host)

    host.addEventListener("pointermove", onMove, { passive: true })
    host.addEventListener("pointerleave", rest, { passive: true })
    window.addEventListener("scroll", markDirty, { passive: true })

    return () => {
      host.removeEventListener("pointermove", onMove)
      host.removeEventListener("pointerleave", rest)
      window.removeEventListener("scroll", markDirty)
      io.disconnect()
      ro.disconnect()
      cancelAnimationFrame(frame)
      running = false
      for (const el of itemRefs.current) if (el) el.style.transform = ""
    }
    // centers is a module-level constant at the call site; index identity is
    // stable for the life of the page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { fieldRef, itemRefs }
}
