import type { AdvertisingConsent } from "./advertising-consent"
import { advertisingConfigEnabled } from "./advertising-core"

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

/** Two gates that must settle before any consent subscription or SDK load. */
export interface AdvertisingGate {
  /** The Worker-served runtime switch; only `{ enabled: true }` continues. */
  config: () => Promise<unknown>
  /** The certified consent-manager bootstrap; a rejection stops everything. */
  bootstrap: () => Promise<void>
}

export interface GateOptions {
  /** `false` runs the gates (so Google's preferences UI can open) without ever starting the SDK. */
  serve?: boolean
  /** Called once both gates passed, before the SDK lifecycle begins. */
  ready?: () => void
}

/** Sequence: eligible → runtime config → consent-manager bootstrap → consent
 * subscription → SDK load after permission → one request. Any rejection,
 * disabled config, lost eligibility or an early stop ends the sequence with
 * no further step; nothing is retried.
 */
export function startGatedAdvertising(runtime: AdvertisingRuntime & AdvertisingGate, options: GateOptions = {}): () => void {
  if (!runtime.eligible()) return () => {}
  let live = true
  let stop: (() => void) | undefined
  void (async () => {
    let allowed = false
    try { allowed = advertisingConfigEnabled(await runtime.config()) } catch { allowed = false }
    if (!live || !allowed || !runtime.eligible()) return
    try { await runtime.bootstrap() } catch { return }
    if (!live || !runtime.eligible()) return
    options.ready?.()
    if (options.serve === false || !live) return
    stop = startAdvertising(runtime)
  })()
  return () => {
    if (!live) return
    live = false
    stop?.()
  }
}
