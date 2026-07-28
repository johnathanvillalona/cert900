import { GUIDE_KEYS, GUIDE_LABELS, GUIDE_PATHS } from "@/data/routes"
import { Button } from "@/components/ui/button"

/**
 * Real 404 body. The worker serves this shell with an HTTP 404 and a noindex
 * header for any unknown path; before that, every mistyped URL rendered the
 * landing page with a 200, which told crawlers the whole URL space was real.
 */
export function NotFound({ onHome, onNavigate }: { onHome: () => void; onNavigate: (path: string) => void }) {
  return (
    <main className="ambient" data-testid="not-found">
      <p className="font-mono text-xs uppercase tracking-wider text-brand">404</p>
      <h1 className="font-heading mt-2 text-3xl font-semibold tracking-tight">
        That page is not here
      </h1>
      <p className="text-muted-foreground mt-3 max-w-lg text-sm leading-relaxed">
        The link may be old or mistyped. Everything on the site is free and needs no account,
        so pick an exam and start practicing.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button onClick={onHome}>Start practicing</Button>
      </div>

      <section className="mt-10 border-t pt-6">
        <h2 className="font-heading text-lg font-semibold">Free practice tests</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {GUIDE_KEYS.map((k) => (
            <li key={k}>
              <a
                href={GUIDE_PATHS[k]}
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate(GUIDE_PATHS[k])
                }}
                className="text-sm text-brand underline-offset-4 hover:underline"
              >
                {GUIDE_LABELS[k]}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
