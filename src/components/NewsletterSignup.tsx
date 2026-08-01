import { useEffect, useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Whether this deploy can actually take signups.
 *
 * Same gate as email sign-in: no mail transport means no confirmation email,
 * and a form that quietly swallows addresses is worse than no form at all.
 */
export function useNewsletterEnabled(): boolean {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    let live = true
    fetch("/api/config")
      .then((r) => (r.ok ? r.json() : { newsletter: false }))
      .then((c) => live && setEnabled(Boolean(c.newsletter)))
      .catch(() => {
        /* offline or blocked: no form, which is the safe default */
      })
    return () => {
      live = false
    }
  }, [])
  return enabled
}

/**
 * One-field signup for the daily question.
 *
 * Deliberately placed only after someone has answered the question of the day,
 * i.e. once they have seen exactly what they would be subscribing to. No modal,
 * no interstitial, and nothing here gates a question.
 */
export function NewsletterSignup() {
  const enabled = useNewsletterEnabled()
  const [email, setEmail] = useState("")
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle")
  if (!enabled) return null

  if (state === "sent") {
    return (
      <p className="text-muted-foreground mt-3 border-t pt-3 text-sm" data-testid="newsletter-sent">
        Check your inbox and click the link to confirm. Nothing is sent until you do.
      </p>
    )
  }

  return (
    <form
      className="mt-3 border-t pt-3"
      data-testid="newsletter-form"
      onSubmit={async (e) => {
        e.preventDefault()
        setState("sending")
        try {
          const res = await fetch("/api/newsletter/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          })
          setState(res.ok ? "sent" : "error")
        } catch {
          setState("error")
        }
      }}
    >
      <label htmlFor="nl-email" className="text-muted-foreground flex items-center gap-1.5 text-sm">
        <Mail className="size-3.5" strokeWidth={2} />
        Get one of these by email each morning.
      </label>
      <div className="mt-2 flex flex-wrap gap-2">
        <Input
          id="nl-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          className="h-9 max-w-64 flex-1"
        />
        <Button type="submit" size="sm" className="h-9" disabled={state === "sending"}>
          {state === "sending" ? "Sending" : "Subscribe"}
        </Button>
      </div>
      {state === "error" && (
        <p className="text-destructive mt-2 text-xs">That did not go through. Try again in a minute.</p>
      )}
      <p className="text-muted-foreground mt-2 text-xs">
        One question a day. Unsubscribe from any email in one click.
      </p>
    </form>
  )
}
