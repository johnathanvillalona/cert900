/** Loader for Google's Privacy & messaging bootstrap, the certified consent
 * manager (TCF CMP ID 300) whose signals advertising-consent.ts reads.
 *
 * Runs only on the allowlisted document, only after the Worker runtime switch
 * permits advertising, and always before the ad SDK. It never collects
 * consent itself, never retries, and a failed load keeps advertising off.
 * Activation must confirm in the AdSense Privacy & messaging screen that this
 * standalone tag delivers the published messages for this publisher; see the
 * runbook for the alternative if Google only serves them through the ad tag.
 */
export const PRIVACY_MESSAGING_HOST = "https://fundingchoicesmessages.google.com"

/** `https://fundingchoicesmessages.google.com/i/pub-…?ers=1`, or null for an
 * unrecognised publisher so nothing is ever requested for malformed policy.
 */
export function privacyMessagingUrl(publisher: string): string | null {
  const match = /^ca-(pub-\d{16})$/.exec(publisher)
  return match ? `${PRIVACY_MESSAGING_HOST}/i/${match[1]}?ers=1` : null
}

export const PRIVACY_MESSAGING_SCRIPT_SELECTOR = 'script[data-cert900-cmp="google-privacy-messaging"]'
export const PRIVACY_MESSAGING_FRAME_NAME = "googlefcPresent"

/** Single-shot bootstrap. Appends Google's async message script plus the
 * hidden `googlefcPresent` frame the script uses to detect its host document
 * (the TypeScript equivalent of Google's inline `signalGooglefcPresent`).
 * Resolves on load, rejects on error, and never appends twice.
 */
export function createPrivacyMessagingLoader(doc: Document, publisher: string): () => Promise<void> {
  let pending: Promise<void> | undefined
  return () => pending ??= new Promise<void>((resolve, reject) => {
    const src = privacyMessagingUrl(publisher)
    if (!src) { reject(new Error("Consent manager unavailable")); return }
    if (doc.querySelector(PRIVACY_MESSAGING_SCRIPT_SELECTOR)) { resolve(); return }
    if (!doc.querySelector(`iframe[name="${PRIVACY_MESSAGING_FRAME_NAME}"]`)) {
      const frame = doc.createElement("iframe")
      frame.name = PRIVACY_MESSAGING_FRAME_NAME
      frame.setAttribute("aria-hidden", "true")
      frame.tabIndex = -1
      frame.style.cssText = "width:0;height:0;border:none;z-index:-1000;left:-1000px;top:-1000px;position:absolute;display:none"
      doc.body.appendChild(frame)
    }
    const script = doc.createElement("script")
    script.async = true
    script.dataset.cert900Cmp = "google-privacy-messaging"
    script.src = src
    script.onload = () => resolve()
    script.onerror = () => { script.remove(); reject(new Error("Consent manager unavailable")) }
    doc.head.appendChild(script)
  })
}
