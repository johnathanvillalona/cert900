import { ADVERTISING, placementForGuide, type AdvertisingPolicy, type GuidePlacement } from "../lib/advertising-policy"

/** Static guide markup only. No hooks, scripts, request, or consent UI.
 * Disabled units render nothing, including no empty advertising whitespace.
 * Fixed responsive geometry prevents a late creative from moving the article.
 */
export function AdSlot({ path, placement = "guide-primary", policy = ADVERTISING }: {
  path: string; placement?: GuidePlacement; policy?: AdvertisingPolicy
}) {
  const unit = placementForGuide(path, placement, policy)
  if (!unit) return null
  return <aside aria-label="Advertisement" data-guide-ad={placement} className="guide-ad">
    <span className="guide-ad-label">Advertisement</span>
    <div className="guide-ad-surface">
      <ins className="adsbygoogle" data-ad-client={unit.publisher} data-ad-slot={unit.slot}
        data-full-width-responsive="false" />
    </div>
    <button type="button" data-ad-preferences disabled className="guide-ad-preferences">Advertising privacy choices</button>
  </aside>
}
