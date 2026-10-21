/** Adapter for an independently published, verified Google Privacy & messaging
 * CMP. This reads its signals; it never collects consent, sets preferences,
 * loads a CMP, or uses the site's analytics permission.
 *
 * Deliberately conservative initial coverage: explicit TCF consent only.
 * Non-TCF regions, unknown applicability, errors, limited ads and NPA never
 * imply permission. Regional expansion needs separate review before activation.
 */
export interface TcfData {
  cmpId?: number
  cmpStatus?: string
  eventStatus?: string
  gdprApplies?: boolean
  listenerId?: number
  purpose?: { consents?: Record<string, boolean>; legitimateInterests?: Record<string, boolean> }
  vendor?: { consents?: Record<string, boolean>; legitimateInterests?: Record<string, boolean> }
}
type TcfApi = (command: string, version: number, callback: (data: TcfData, success: boolean) => void, parameter?: number) => void
export interface GooglePrivacyApi {
  callbackQueue: Record<string, () => void>[]
  ConsentModePurposeStatusEnum?: { GRANTED?: number }
  getGoogleConsentModeValues?: () => {
    adStoragePurposeConsentStatus?: number; adUserDataPurposeConsentStatus?: number; adPersonalizationPurposeConsentStatus?: number
  }
  showRevocationMessage?: () => void
}
export interface PrivacyWindow {
  googlefc?: GooglePrivacyApi
  __tcfapi?: TcfApi
  navigator: { globalPrivacyControl?: boolean }
}
export interface AdvertisingConsent {
  subscribe: (listener: (allowed: boolean) => void) => () => void
  openPreferences: () => void
}

export function googleAdvertisingPermission(source: PrivacyWindow, data: TcfData | undefined, success: boolean): boolean {
  try {
    if (source.navigator.globalPrivacyControl === true || !success || data?.cmpId !== 300 ||
      data.cmpStatus !== "loaded" || data.gdprApplies !== true ||
      !["tcloaded", "useractioncomplete"].includes(data.eventStatus ?? "")) return false
    // Google Advertising Products: vendor 755. Purposes that Google requires
    // consent for must be explicitly granted. Flexible purposes may use the
    // legitimate-interest signals supplied by the certified CMP.
    if (data.vendor?.consents?.[755] !== true || ![1, 3, 4].every(id => data.purpose?.consents?.[id] === true)) return false
    if (![2, 7, 9, 10].every(id => data.purpose?.consents?.[id] === true ||
      (data.purpose?.legitimateInterests?.[id] === true && data.vendor?.legitimateInterests?.[755] === true))) return false
    const granted = source.googlefc?.ConsentModePurposeStatusEnum?.GRANTED
    const values = source.googlefc?.getGoogleConsentModeValues?.()
    return granted === 1 && !!values && [values.adStoragePurposeConsentStatus,
      values.adUserDataPurposeConsentStatus, values.adPersonalizationPurposeConsentStatus].every(value => value === granted)
  } catch { return false }
}

export function googleAdvertisingConsent(source: PrivacyWindow): AdvertisingConsent {
  return {
    subscribe(listener) {
      let live = true
      let registered = false
      let latest: TcfData | undefined
      let success = false
      const update = () => { if (live) listener(googleAdvertisingPermission(source, latest, success)) }
      listener(false)
      const api = source.googlefc ?? (source.googlefc = { callbackQueue: [] })
      api.callbackQueue ??= []
      const register = () => {
        if (!live || registered || !source.__tcfapi) return
        registered = true
        try { source.__tcfapi("addEventListener", 2, (data, ok) => {
          if (!live) return
          // Opening Google's own preferences does not itself revoke a prior
          // valid choice. Preserve it only while all previous/current signals
          // still permit advertising; never grant from an initial open dialog.
          if (data?.eventStatus === "cmpuishown" && googleAdvertisingPermission(source, latest, success) &&
            googleAdvertisingPermission(source, { ...data, eventStatus: "tcloaded" }, ok)) return
          latest = data; success = ok; update()
        }) }
        catch { success = false; update() }
      }
      // Google's documented callbacks, including repeated TCF choice changes.
      const callbacks = { CONSENT_MODE_DATA_READY: update, CONSENT_API_READY: register, CONSENT_DATA_READY: register }
      api.callbackQueue.push(callbacks)
      return () => {
        live = false
        const index = Array.isArray(api.callbackQueue) ? api.callbackQueue.indexOf(callbacks) : -1
        if (index >= 0) api.callbackQueue.splice(index, 1)
        if (latest?.listenerId !== undefined) {
          try { source.__tcfapi?.("removeEventListener", 2, () => {}, latest.listenerId) } catch { /* No collection on failure. */ }
        }
      }
    },
    openPreferences() {
      // The caller first disposes ad execution. Never build our own CMP UI.
      source.googlefc?.callbackQueue.push({ CONSENT_API_READY: () => source.googlefc?.showRevocationMessage?.() })
    },
  }
}
