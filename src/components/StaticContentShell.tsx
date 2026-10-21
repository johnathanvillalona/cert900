import type { ReactNode } from "react"
import { SiteFooter } from "@/components/SiteFooter"
import { Wordmark } from "@/components/Wordmark"

/** Complete document chrome shared by prerendered guides and Study Hubs. */
export function StaticContentShell({ children }: { children: ReactNode }) {
  return <div className="flex min-h-[100dvh] flex-col">
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:border focus:bg-background focus:px-3 focus:py-2 text-sm">
      Skip to content
    </a>
    <header className="border-b">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
        <a href="/" className="brand-link flex min-h-11 items-center rounded-md text-sm" aria-label="cert900 home" data-testid="brand">
          <Wordmark className="text-sm" />
        </a>
        <a href="/" className="inline-flex min-h-11 items-center text-sm text-muted-foreground underline-offset-2 hover:text-foreground hover:underline">All exams</a>
      </nav>
    </header>
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-16 pt-8">{children}</div>
    <SiteFooter />
  </div>
}
