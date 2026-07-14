import { createAuthClient } from "better-auth/react"

/** Same-origin in production and in dev (vite proxies /api to wrangler). */
export const authClient = createAuthClient()

export const { useSession, signIn, signOut, deleteUser } = authClient
