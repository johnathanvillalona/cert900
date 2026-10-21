import { Heart } from "lucide-react"
import { AFFILIATE, CONTACT_EMAIL, DONATE_URL } from "@/lib/site"
import { AFFILIATE_DISCLOSURE, AMAZON_DISCLOSURE } from "@/lib/affiliate"
import { Wordmark } from "@/components/Wordmark"
import { GUIDE_KEYS, GUIDE_LABELS, GUIDE_PATHS } from "@/data/routes"

/**
 * Quiet legal footer used on the landing page, the app shell, and the static
 * guide pages.
 * `full` adds the trademark disclaimer paragraph (landing only).
 * `onNavigate` is optional: the SPA passes it for client-side transitions; the
 * prerendered guides omit it and every link falls back to a real href, which is
 * the whole point of a page that ships no JavaScript.
 */
export function SiteFooter({ full = false, onNavigate }: { full?: boolean; onNavigate?: (path: string) => void }) {
  // Legal pages are SPA screens, so they take the client-side transition when
  // one is offered. Guide links never do: a guide is ALWAYS the static
  // prerendered page now, so those stay plain hrefs even inside the app --
  // otherwise the SPA would render its own copy of the guide and the static
  // page's whole point (speed, and later ad containment) quietly disappears.
  const go = onNavigate
    ? (path: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        onNavigate(path)
      }
    : () => undefined
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {full && (
          <p className="text-muted-foreground max-w-3xl text-xs leading-relaxed">
            A free community study resource. Not affiliated with, endorsed by, or sponsored by CompTIA, Cisco, Amazon
            Web Services, Microsoft, Professor Messer, or any video creator linked here. CompTIA A+<sup>®</sup>,
            Network+<sup>®</sup>, and Security+<sup>®</sup> are registered trademarks of CompTIA, Inc. Cisco<sup>®</sup>
            and CCNA<sup>®</sup> are registered trademarks of Cisco Systems, Inc. AWS<sup>®</sup> is a trademark of
            Amazon.com, Inc. or its affiliates. Microsoft<sup>®</sup> and Azure<sup>®</sup> are trademarks of the
            Microsoft group of companies. All practice questions are original. Video links open each creator's free
            training content.
          </p>
        )}
        <nav className={full ? "mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs" : "flex flex-wrap items-center gap-x-5 gap-y-2 text-xs"} aria-label="Study guides">
          {/* Keys and labels come from src/data/routes.ts, so a new guide shows
              up here without editing a parallel array and a ternary chain. */}
          {GUIDE_KEYS.map((k) => (
            <a
              key={k}
              href={GUIDE_PATHS[k]}
              className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              {GUIDE_LABELS[k]}
            </a>
          ))}
        </nav>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Wordmark className="text-xs text-muted-foreground" iconClassName="size-4" />
          <nav aria-label="Legal and contact" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <a
              href={`${GUIDE_PATHS.method}#about`}
              className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              About Cert900
            </a>
            {/* Real <a> elements, not buttons: on the static guide pages there
                is no JavaScript, so a button with a handler would be dead. */}
            <a
              href="/privacy"
              onClick={go("/privacy")}
              data-testid="footer-privacy"
              className="text-muted-foreground cursor-pointer underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              Privacy
            </a>
            <a
              href="/terms"
              onClick={go("/terms")}
              data-testid="footer-terms"
              className="text-muted-foreground cursor-pointer underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              Terms
            </a>
            {/* Public deletion URL; Google Play's Data safety form requires one
                reachable without installing the app. */}
            <a
              href="/delete-account"
              onClick={go("/delete-account")}
              data-testid="footer-delete-account"
              className="text-muted-foreground cursor-pointer underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              Delete account
            </a>
            <a
              className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
              href={`mailto:${CONTACT_EMAIL}?subject=cert900%20feedback`}
            >
              Contact
            </a>
            <a
              className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
              href="/pbq/CREDITS.md"
              target="_blank"
              rel="noreferrer"
            >
              Photo credits
            </a>
            {DONATE_URL && (
              <a
                className="inline-flex items-center gap-1 text-brand underline-offset-2 transition-colors hover:underline"
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="size-3" strokeWidth={2.5} />
                Support this project
              </a>
            )}
          </nav>
        </div>
        {/* Required whenever affiliate links are live, and gated so it does not
            appear before any of them are configured. Amazon's wording is
            prescribed by their operating agreement, so it stays verbatim and
            separate from the generic one. */}
        {AFFILIATE.amazonTag && (
          <p className="text-muted-foreground mt-4 text-xs">{AMAZON_DISCLOSURE}</p>
        )}
        {(AFFILIATE.measureUpUrl || AFFILIATE.tutorialsDojoUrl) && (
          <p className="text-muted-foreground mt-2 text-xs">{AFFILIATE_DISCLOSURE}</p>
        )}
      </div>
    </footer>
  )
}
