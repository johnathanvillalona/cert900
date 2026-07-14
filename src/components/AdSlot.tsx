import { ADS } from "@/lib/site"

/**
 * The only two ad placements the site will ever have: below the Results
 * actions and below the Dashboard. Never inside the quiz flow or landing
 * hero. Renders nothing until a network is chosen and ADS.enabled flips.
 */
export function AdSlot({ slot }: { slot: "results" | "dashboard" }) {
  if (!ADS.enabled) return null
  return (
    <div
      className="text-muted-foreground mt-6 flex min-h-24 items-center justify-center rounded-lg border border-dashed font-mono text-xs"
      data-testid={`ad-${slot}`}
      data-ad-slot={slot}
      data-ad-provider={ADS.provider}
    >
      {/* Provider embed goes here when a network is chosen. */}
      Advertisement
    </div>
  )
}
