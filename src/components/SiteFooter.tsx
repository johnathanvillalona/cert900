import { Heart } from "lucide-react"
import { CONTACT_EMAIL, DONATE_URL } from "@/lib/site"
import { Wordmark } from "@/components/Wordmark"
import { GUIDE_META } from "@/screens/Guides"

/**
 * Quiet legal footer used on the landing page and the app shell.
 * `full` adds the trademark disclaimer paragraph (landing only).
 */
export function SiteFooter({ full = false, onNavigate }: { full?: boolean; onNavigate: (path: string) => void }) {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {full && (
          <p className="text-muted-foreground max-w-3xl text-xs leading-relaxed">
            A free community study resource. Not affiliated with, endorsed by, or sponsored by CompTIA or Professor
            Messer. CompTIA A+<sup>®</sup> and Network+<sup>®</sup> are registered trademarks of CompTIA, Inc. All
            practice questions are original. Video links open Professor Messer's free official training courses.
          </p>
        )}
        <nav className={full ? "mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs" : "flex flex-wrap items-center gap-x-5 gap-y-2 text-xs"} aria-label="Study guides">
          {(["aplus", "nplus", "pbq"] as const).map((k) => (
            <a
              key={k}
              href={GUIDE_META[k].path}
              onClick={(e) => { e.preventDefault(); onNavigate(GUIDE_META[k].path) }}
              className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              {k === "aplus" ? "A+ practice test" : k === "nplus" ? "Network+ practice test" : "PBQ practice"}
            </a>
          ))}
        </nav>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Wordmark className="text-xs text-muted-foreground" iconClassName="size-4" />
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <button
              onClick={() => onNavigate("/privacy")}
              data-testid="footer-privacy"
              className="text-muted-foreground cursor-pointer underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              Privacy
            </button>
            <button
              onClick={() => onNavigate("/terms")}
              data-testid="footer-terms"
              className="text-muted-foreground cursor-pointer underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              Terms
            </button>
            <a
              className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
              href={`mailto:${CONTACT_EMAIL}?subject=CompTIA%20Practice%20Trainer%20feedback`}
            >
              Contact
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
      </div>
    </footer>
  )
}
