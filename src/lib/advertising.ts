import type { AdvertisingConsent } from "./advertising-consent"

export interface AdvertisingRuntime {
  eligible: () => boolean
  consent: AdvertisingConsent
  load: () => Promise<void>
  request: () => void
  clear: () => void
  unload: () => void
}

/** One SDK load and request batch per document. No retries, refresh or Auto ads.
 * Cancellation guards cover consent changes while the SDK is in flight.
 */
export function startAdvertising(runtime: AdvertisingRuntime): () => void {
  if (!runtime.eligible()) return () => {}
  let live = true
  let permitted = false
  let attempted = false
  let generation = 0
  const stop = () => {
    if (!live) return
    live = false
    generation++
    runtime.clear()
    // Removing a script does not unload it. The browser adapter reloads the
    // document on revocation so an already executing SDK cannot keep running.
    if (attempted) runtime.unload()
  }
  const unsubscribe = runtime.consent.subscribe(allowed => {
    if (!live) return
    if (!allowed) {
      if (permitted) stop()
      return
    }
    permitted = true
    if (attempted || !runtime.eligible()) return
    attempted = true
    const current = ++generation
    void runtime.load().then(() => {
      if (live && permitted && generation === current && runtime.eligible()) runtime.request()
    }).catch(() => { if (live) runtime.clear() })
  })
  return () => { unsubscribe(); stop() }
}
