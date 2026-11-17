import { Smartphone } from "lucide-react"
import { APP } from "@/lib/site"

/**
 * Mobile-app promo. Renders "coming soon" copy until APP.iosUrl/androidUrl are
 * set in src/lib/site.ts, then flips to real store links (the same
 * inert-until-configured pattern as ads/affiliate). Placements: one card on
 * the landing page (below the hero) and one line on Results. Never in the
 * quiz and never in the landing hero.
 */
export function AppPromo({ variant = "card" }: { variant?: "card" | "line" }) {
  const live = APP.iosUrl || APP.androidUrl

  const links = (
    <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
      {APP.iosUrl && (
        <a className="text-brand font-medium underline-offset-2 hover:underline" href={APP.iosUrl} target="_blank" rel="noopener noreferrer">
          App Store
        </a>
      )}
      {APP.androidUrl && (
        <a className="text-brand font-medium underline-offset-2 hover:underline" href={APP.androidUrl} target="_blank" rel="noopener noreferrer">
          Google Play
        </a>
      )}
    </span>
  )

  if (variant === "line") {
    return (
      <p className="text-muted-foreground text-sm" data-testid="app-promo-line">
        <Smartphone className="text-brand mr-1.5 inline size-4 align-[-2px]" strokeWidth={2} />
        {live ? <>Practice on your phone: get the Cert900 app for {links}.</> : "The Cert900 app for iOS and Android is coming soon."}
      </p>
    )
  }

  return (
    <div className="rounded-lg border bg-card p-5" data-testid="app-promo">
      <div className="flex items-start gap-4">
        <Smartphone className="text-brand mt-0.5 size-5 shrink-0" strokeWidth={2} />
        <div className="min-w-0">
          <p className="font-heading font-semibold">Cert900 mobile app</p>
          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
            {live ? (
              <>Practice on your phone with timed exams and synced progress. Get the app on {links}.</>
            ) : (
              <>
                The Cert900 app for iOS and Android is <span className="text-foreground font-medium">coming soon</span>.
                It will include timed exams and synced progress, and it will work offline.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
