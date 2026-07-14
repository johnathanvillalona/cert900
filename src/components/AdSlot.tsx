import { useEffect, useRef } from "react"
import { ADS } from "@/lib/site"

const EA_SCRIPT_ID = "ethicalads-client"
const EA_SRC = "https://media.ethicalads.io/media/client/ethicalads.min.js"

declare global {
  interface Window {
    ethicalads?: { load: () => void }
  }
}

/** Load the EthicalAds client once, then (re)scan for placements. */
function loadEthicalAds() {
  const existing = document.getElementById(EA_SCRIPT_ID)
  if (existing) {
    window.ethicalads?.load()
    return
  }
  const s = document.createElement("script")
  s.id = EA_SCRIPT_ID
  s.async = true
  s.src = EA_SRC
  s.addEventListener("load", () => window.ethicalads?.load())
  document.head.appendChild(s)
}

/**
 * The only two ad placements the site will ever have: below the Results
 * actions and below the Dashboard. Never inside the quiz flow or landing
 * hero. Renders nothing until ADS.enabled flips after network approval.
 */
export function AdSlot({ slot }: { slot: "results" | "dashboard" }) {
  const active = ADS.enabled && ADS.provider === "ethicalads" && ADS.publisherId !== ""
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (active) loadEthicalAds()
  }, [active])

  if (!active) return null
  return (
    <div className="mt-6 flex justify-center" data-testid={`ad-${slot}`} data-ad-slot={slot}>
      <div
        ref={ref}
        data-ea-publisher={ADS.publisherId}
        data-ea-type="image"
        className="flat"
      />
    </div>
  )
}
