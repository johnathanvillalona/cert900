import type { ReactNode } from "react"
import { SiteFooter } from "@/components/SiteFooter"
import { Wordmark } from "@/components/Wordmark"
import { LearningDestinations } from "@/components/LearningDestinations"

/** Complete document chrome shared by prerendered guides and Study Hubs. */
export function StaticContentShell({ children }: { children: ReactNode }) {
  return <div className="flex min-h-[100dvh] flex-col">
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:border focus:bg-background focus:px-3 focus:py-2 text-sm">
      Skip to content
    </a>
    <header className="border-b">
      <nav aria-label="Primary" className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-1 px-4 py-2 min-[375px]:flex-row min-[375px]:items-center min-[375px]:gap-3">
        <a href="/" className="brand-link flex min-h-11 items-center rounded-md text-sm" aria-label="cert900 home" data-testid="brand">
          <Wordmark className="text-sm" />
        </a>
        <LearningDestinations />
      </nav>
    </header>
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-16 pt-8">{children}</div>
    <SiteFooter />
  </div>
}
