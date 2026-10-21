/** Analytics preferences only. This is not an advertising CMP. */
export const CONSENT_KEY = "cert900-analytics-consent-v1"
export const CONSENT_LIFETIME = 180 * 24 * 60 * 60 * 1000
export type AnalyticsConsent = "allow" | "decline" | "unknown"

export function readConsent(raw: string | null, now = Date.now()): AnalyticsConsent {
  try {
    const value = JSON.parse(raw ?? "null")
    if (value?.version === 1 && (value.choice === "allow" || value.choice === "decline") &&
      Number.isFinite(value.expires) && value.expires > now && value.expires <= now + CONSENT_LIFETIME) return value.choice
  } catch { /* Missing/corrupt/unavailable storage never grants consent. */ }
  return "unknown"
}

export function consentRecord(choice: Exclude<AnalyticsConsent, "unknown">, now = Date.now()): string {
  return JSON.stringify({ version: 1, choice, expires: now + CONSENT_LIFETIME })
}

let choice: AnalyticsConsent = "unknown"
let initialized = false
let persistent = true
let editing = false
let listener: (choice: AnalyticsConsent) => void = () => {}

function storedChoice(): AnalyticsConsent {
  if (!persistent) return choice
  try { return readConsent(localStorage.getItem(CONSENT_KEY)) }
  catch { persistent = false; return choice }
}

export function refreshConsentUI() {
  const latest = storedChoice()
  if (latest !== choice) { choice = latest; listener(choice) }
  for (const region of document.querySelectorAll<HTMLElement>("[data-analytics-preferences]")) {
    const controls = region.querySelector<HTMLElement>("[data-analytics-controls]")!
    controls.hidden = false
    const fallback = region.querySelector<HTMLElement>("[data-analytics-fallback]")!
    fallback.hidden = true
    const selecting = editing || choice === "unknown"
    for (const button of region.querySelectorAll<HTMLElement>("[data-analytics-choice]")) button.hidden = !selecting
    region.querySelector<HTMLElement>("[data-analytics-change]")!.hidden = selecting
    const status = region.querySelector<HTMLElement>("[data-analytics-status]")!
    const message = choice === "allow"
      ? `Analytics allowed${persistent ? "." : " for this page only; your browser could not save this preference."}`
      : choice === "decline" ? `Analytics declined${persistent ? "." : " for this page only; your browser could not save this preference."}`
        : "Optional analytics is off until you allow it."
    if (status.textContent !== message) status.textContent = message
  }
}

/** Idempotent across React Strict Mode; no overlay, timer changes or focus theft. */
export function initConsent(onChange: (choice: AnalyticsConsent) => void) {
  listener = onChange
  if (!initialized) {
    initialized = true
    choice = storedChoice()
    document.addEventListener("click", event => {
      const button = (event.target as Element | null)?.closest<HTMLButtonElement>("[data-analytics-choice], [data-analytics-change]")
      if (!button) return
      if (button.hasAttribute("data-analytics-change")) {
        editing = true
        refreshConsentUI()
        button.closest("[data-analytics-preferences]")?.querySelector<HTMLButtonElement>("[data-analytics-choice]")?.focus()
        return
      }
      const next = button.dataset.analyticsChoice
      if (next !== "allow" && next !== "decline") return
      choice = next
      editing = false
      try { localStorage.setItem(CONSENT_KEY, consentRecord(next)); persistent = true }
      catch { persistent = false }
      listener(choice)
      // Do not re-read unavailable/non-persistent storage immediately after a choice.
      renderChoice()
      button.closest("[data-analytics-preferences]")?.querySelector<HTMLButtonElement>("[data-analytics-change]")?.focus()
    })
    window.addEventListener("storage", event => {
      if (event.key === CONSENT_KEY || event.key === null) {
        persistent = true
        choice = readConsent(event.newValue); editing = false; listener(choice); renderChoice()
      }
    })
    window.addEventListener("pageshow", () => { choice = storedChoice(); listener(choice); renderChoice() })
  }
  choice = storedChoice()
  listener(choice)
  renderChoice()
}

function renderChoice() {
  // refreshConsentUI also checks expiry. Unavailable storage uses the in-memory choice.
  refreshConsentUI()
}
