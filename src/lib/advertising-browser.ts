import { ADVERTISING, ADVERTISING_CONFIG_PATH, GUIDE_PLACEMENTS, advertisingDocument, placementForGuide, type AdvertisingPolicy } from "./advertising-policy"
import { googleAdvertisingConsent, type PrivacyWindow } from "./advertising-consent"
import { createPrivacyMessagingLoader } from "./advertising-cmp"
import { startGatedAdvertising } from "./advertising"

// Separate static entry: never imported by App, content-client, or shared shell.
// The prerenderer emits this entry only for a fully configured allowlisted unit.
export function mountGuideAdvertising(policy: AdvertisingPolicy = ADVERTISING) {
  const url = new URL(location.href)
  const units = GUIDE_PLACEMENTS.flatMap(placement => {
    const unit = placementForGuide(url.pathname, placement, policy)
    const container = document.querySelector<HTMLElement>(`[data-guide-ad="${placement}"]`)
    const ins = container?.querySelector<HTMLElement>("ins.adsbygoogle")
    return unit && container && ins && ins.dataset.adClient === unit.publisher && ins.dataset.adSlot === unit.slot
      ? [{ ...unit, container, ins }] : []
  })
  const valid = (unit: (typeof units)[number]) => unit.container.isConnected && unit.ins.isConnected &&
    unit.ins.dataset.adClient === unit.publisher && unit.ins.dataset.adSlot === unit.slot
  const eligible = () => advertisingDocument(new URL(location.href)) && units.some(valid) &&
    !!document.querySelector('[data-testid="guide-page"]') && !document.documentElement.classList.contains("spa")

  if (!eligible()) return
  const consent = googleAdvertisingConsent(window as unknown as PrivacyWindow, policy.regions)
  let script: HTMLScriptElement | undefined
  let leaving = false
  let preferencesVisit = false
  try {
    preferencesVisit = sessionStorage.getItem("cert900-ad-preferences") === "open"
    sessionStorage.removeItem("cert900-ad-preferences")
  } catch { /* Unavailable storage never grants consent. */ }
  const buttons = units.flatMap(unit => {
    const button = unit.container.querySelector<HTMLButtonElement>("[data-ad-preferences]")
    return button ? [button] : []
  })
  // Order: Worker runtime switch, then Google's certified consent manager,
  // then the consent subscription; the ad SDK loads only after permission.
  const stop = startGatedAdvertising({
    eligible, consent,
    config: () => fetch(ADVERTISING_CONFIG_PATH, { credentials: "omit", cache: "no-store" }).then(res => res.ok ? res.json() : null),
    bootstrap: createPrivacyMessagingLoader(document, policy.publisher),
    load: () => new Promise<void>((resolve, reject) => {
      script = document.createElement("script")
      script.async = true
      script.crossOrigin = "anonymous"
      script.dataset.cert900Advertising = "manual"
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${policy.publisher}`
      script.onload = () => resolve()
      script.onerror = () => reject(new Error("Advertising unavailable"))
      document.head.appendChild(script)
    }),
    request: () => {
      if (!eligible()) return
      // At most one push for each of the two known placement keys. Only the
      // primary has an insertion point; secondary remains disabled for now.
      const host = window as unknown as { adsbygoogle?: { push: (request: object) => void } }
      for (const unit of units.filter(valid)) {
        if (unit.ins.dataset.cert900Requested) continue
        unit.ins.dataset.cert900Requested = "true"
        try { (host.adsbygoogle ??= [] as object[]).push({}) } catch { /* Blockers must not affect study. */ }
      }
    },
    clear: () => { script?.remove(); for (const unit of units) unit.ins.replaceChildren() },
    unload: () => {
      // Reload unloads an executed SDK. An in-flight tag can also race removal,
      // so always unload after consent revocation, not only after onload.
      if (!leaving) location.reload()
    },
  }, {
    // A preferences visit runs both gates so Google's own UI can open, but
    // never starts the SDK in that document.
    serve: !preferencesVisit,
    ready: () => {
      // Privacy choices become available only once the consent manager exists.
      for (const button of buttons) button.disabled = false
      if (preferencesVisit) consent.openPreferences()
    },
  })
  for (const button of buttons) {
    button.addEventListener("click", () => {
      if (preferencesVisit) { consent.openPreferences(); return }
      // This flag requests Google's UI only; never a consent grant. Stop the
      // SDK before opening preferences in a clean, advertising-blocked visit.
      try { sessionStorage.setItem("cert900-ad-preferences", "open") }
      catch {
        // Without session storage, clear Google's consent first and unload.
        consent.openPreferences()
        stop()
        location.reload()
        return
      }
      stop()
      location.reload()
    })
  }
  window.addEventListener("pagehide", () => { leaving = true; stop() }, { once: true })
  window.addEventListener("pageshow", event => { if (event.persisted) location.reload() })
  // Static pages use normal links. Defensive history changes fail closed.
  window.addEventListener("popstate", () => { if (!eligible()) stop() })
}
