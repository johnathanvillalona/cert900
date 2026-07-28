import { useEffect, useState } from "react"
import { toast } from "sonner"
import { authClient, signIn } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Email + password sign-in, shown only when the deploy actually has
 * transactional mail configured (`GET /api/config` → `emailAuth`).
 *
 * The gate matters: without mail there is no password reset, so rendering this
 * form would let someone create an account they can be permanently locked out
 * of. See worker/mail.ts.
 */
export function useEmailAuthEnabled(): boolean {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    let live = true
    fetch("/api/config")
      .then((r) => (r.ok ? r.json() : { emailAuth: false }))
      .then((c) => live && setEnabled(Boolean(c.emailAuth)))
      .catch(() => {
        /* offline or blocked: leave the social buttons as the only path */
      })
    return () => {
      live = false
    }
  }, [])
  return enabled
}

type Mode = "sign-in" | "sign-up" | "forgot"

export function EmailAuthForm() {
  const [mode, setMode] = useState<Mode>("sign-in")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [busy, setBusy] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    try {
      if (mode === "forgot") {
        // Always reports success: a different message for "no such account"
        // would turn this into an address-enumeration oracle.
        await authClient.requestPasswordReset({ email, redirectTo: "/" })
        toast("Check your email", { description: "If that address has an account, a reset link is on its way." })
        setMode("sign-in")
        return
      }
      const res =
        mode === "sign-up"
          ? await authClient.signUp.email({ email, password, name: email.split("@")[0] })
          : await signIn.email({ email, password })
      if (res?.error) {
        toast(mode === "sign-up" ? "Could not create the account" : "Could not sign in", {
          description: res.error.message ?? "Check the address and password and try again.",
        })
      }
    } catch {
      toast("Something went wrong", { description: "Check your connection and try again." })
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-2" data-testid="email-auth">
      <Input
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {mode !== "forgot" && (
        <Input
          type="password"
          required
          minLength={8}
          autoComplete={mode === "sign-up" ? "new-password" : "current-password"}
          placeholder={mode === "sign-up" ? "Password (8 characters or more)" : "Password"}
          aria-label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
      <Button type="submit" disabled={busy} data-testid="email-auth-submit">
        {busy
          ? "Working"
          : mode === "sign-up"
            ? "Create account"
            : mode === "forgot"
              ? "Send reset link"
              : "Sign in"}
      </Button>
      <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-xs">
        <button
          type="button"
          onClick={() => setMode(mode === "sign-up" ? "sign-in" : "sign-up")}
          className="text-muted-foreground cursor-pointer underline-offset-2 hover:text-foreground hover:underline"
        >
          {mode === "sign-up" ? "I already have an account" : "Create an account"}
        </button>
        {mode !== "forgot" && (
          <button
            type="button"
            onClick={() => setMode("forgot")}
            className="text-muted-foreground cursor-pointer underline-offset-2 hover:text-foreground hover:underline"
          >
            Forgot password?
          </button>
        )}
      </div>
    </form>
  )
}
