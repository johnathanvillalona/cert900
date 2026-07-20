import type { ExamProgress } from "@/lib/progress"
import type { CloudProgress } from "@/lib/sync"
import { authClient } from "./auth"
import { API_BASE } from "./config"

// Mobile transport for the same /api/progress contract the web app uses. The web
// relies on the browser cookie jar (credentials: "include"); native has none, so
// we replay the session cookie the Expo client captured at sign-in. The merge
// logic itself (mergeCloudLocal) is shared, not reimplemented.
function authHeaders(): Record<string, string> {
  const cookie = authClient.getCookie()
  return cookie ? { Cookie: cookie } : {}
}

/**
 * The session cookie the Expo client holds is no longer accepted. Distinct from
 * a network error because the fix is different: sign in again, not retry. The
 * Better Auth session cache can still say "signed in" while this is happening.
 */
export class SyncAuthError extends Error {
  constructor() {
    super("progress sync rejected: not authenticated")
    this.name = "SyncAuthError"
  }
}

export async function fetchCloud(): Promise<CloudProgress | null> {
  const res = await fetch(`${API_BASE}/api/progress`, { headers: authHeaders() })
  if (res.status === 401) return null
  if (!res.ok) throw new Error(`progress fetch failed: ${res.status}`)
  return (await res.json()) as CloudProgress
}

/**
 * Wipes every synced progress row for the signed-in user. 401 is deliberately
 * not fatal: it means this cookie can no longer reach the account, and the
 * delete-user step that follows cascades the same rows anyway (schema.sql
 * declares progress.user_id ON DELETE CASCADE). Failing here would strand the
 * user with an account they asked us to remove.
 */
export async function deleteCloud(): Promise<void> {
  const res = await fetch(`${API_BASE}/api/progress`, { method: "DELETE", headers: authHeaders() })
  if (res.status === 401) return
  if (!res.ok) throw new Error(`progress delete failed: ${res.status}`)
}

export async function pushExam(
  examId: string,
  data: ExamProgress,
  updatedAt: number,
): Promise<void> {
  const res = await fetch(`${API_BASE}/api/progress`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ examId, data, updatedAt }),
  })
  if (res.status === 401) throw new SyncAuthError()
  if (!res.ok) throw new Error(`progress push failed: ${res.status}`)
}
