import { useEffect, useState } from "react"

/**
 * Whether the signed-in session is the site owner, plus how many reported
 * questions are waiting.
 *
 * The allowlist lives in a Worker var and must stay there, so the client cannot
 * work this out for itself. `/api/admin/whoami` answers 200 for an admin and
 * 404 for everyone else, which is the same shape the rest of `/api/admin/*`
 * uses and tells a non-admin nothing.
 *
 * `signedIn` gates the request so a signed-out visitor never makes it at all.
 */
export function useAdmin(signedIn: boolean): { admin: boolean; open: number } {
  const [state, setState] = useState({ admin: false, open: 0 })

  useEffect(() => {
    if (!signedIn) {
      setState({ admin: false, open: 0 })
      return
    }
    let live = true
    fetch("/api/admin/whoami")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => live && d?.admin && setState({ admin: true, open: Number(d.open) || 0 }))
      .catch(() => {
        /* offline, or simply not an admin: no menu item, which is the default */
      })
    return () => {
      live = false
    }
  }, [signedIn])

  return state
}
