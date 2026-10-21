import { ADVERTISING, GUIDE_PLACEMENTS, advertisingDocument, placementForGuide, type AdvertisingPolicy } from "./advertising-policy"
import { googleAdvertisingConsent, type PrivacyWindow } from "./advertising-consent"
import { startAdvertising } from "./advertising"

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

  if (eligible()) {
    const consent = googleAdvertisingConsent(window as unknown as PrivacyWindow)
    let script: HTMLScriptElement | undefined
    let leaving = false
    let preferencesVisit = false
    try {
      preferencesVisit = sessionStorage.getItem("cert900-ad-preferences") === "open"
      sessionStorage.removeItem("cert900-ad-preferences")
    } catch { /* Unavailable storage never grants consent. */ }
    const stop = preferencesVisit ? () => {} : startAdvertising({
      eligible, consent,
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
    })
    for (const unit of units) {
      const button = unit.container.querySelector<HTMLButtonElement>("[data-ad-preferences]")
      if (!button) continue
      button.disabled = false
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
    if (preferencesVisit) consent.openPreferences()
    window.addEventListener("pagehide", () => { leaving = true; stop() }, { once: true })
    window.addEventListener("pageshow", event => { if (event.persisted) location.reload() })
    // Static pages use normal links. Defensive history changes fail closed.
    window.addEventListener("popstate", () => { if (!eligible()) stop() })
  }
}
