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

export async function fetchCloud(): Promise<CloudProgress | null> {
  const res = await fetch(`${API_BASE}/api/progress`, { headers: authHeaders() })
  if (res.status === 401) return null
  if (!res.ok) throw new Error(`progress fetch failed: ${res.status}`)
  return (await res.json()) as CloudProgress
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
  if (!res.ok) throw new Error(`progress push failed: ${res.status}`)
}
