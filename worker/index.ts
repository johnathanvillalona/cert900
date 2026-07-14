import { createAuth, type Env } from "./auth"

const JSON_HEADERS = { "Content-Type": "application/json" }

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS })
}

/** Progress payload guard: per-exam progress blobs, size-capped. */
function isReasonableProgress(data: unknown): boolean {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false
  const o = data as Record<string, unknown>
  return typeof o.topics === "object" && o.topics !== null && Array.isArray(o.exams)
}

async function handleProgress(req: Request, env: Env): Promise<Response> {
  const auth = createAuth(env)
  const session = await auth.api.getSession({ headers: req.headers })
  if (!session) return json({ error: "unauthorized" }, 401)
  const userId = session.user.id

  if (req.method === "GET") {
    const rows = await env.DB.prepare(
      "SELECT exam_id, data, updated_at FROM progress WHERE user_id = ?",
    )
      .bind(userId)
      .all<{ exam_id: string; data: string; updated_at: number }>()
    const out: Record<string, { data: unknown; updatedAt: number }> = {}
    for (const r of rows.results) {
      try {
        out[r.exam_id] = { data: JSON.parse(r.data), updatedAt: r.updated_at }
      } catch {
        /* skip corrupted row */
      }
    }
    return json(out)
  }

  if (req.method === "PUT") {
    let body: { examId?: string; data?: unknown; updatedAt?: number }
    try {
      body = await req.json()
    } catch {
      return json({ error: "bad json" }, 400)
    }
    const { examId, data } = body
    const updatedAt = typeof body.updatedAt === "number" ? body.updatedAt : Date.now()
    if (!examId || typeof examId !== "string" || examId.length > 32 || !isReasonableProgress(data))
      return json({ error: "bad payload" }, 400)
    const raw = JSON.stringify(data)
    if (raw.length > 512_000) return json({ error: "payload too large" }, 413)

    await env.DB.prepare(
      `INSERT INTO progress (user_id, exam_id, data, updated_at) VALUES (?, ?, ?, ?)
       ON CONFLICT(user_id, exam_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`,
    )
      .bind(userId, examId, raw, updatedAt)
      .run()
    return json({ ok: true, updatedAt })
  }

  if (req.method === "DELETE") {
    await env.DB.prepare("DELETE FROM progress WHERE user_id = ?").bind(userId).run()
    return json({ ok: true })
  }

  return json({ error: "method not allowed" }, 405)
}

/** One-way hash of the client IP; stored instead of the IP itself. */
async function ipHash(req: Request): Promise<string> {
  const ip = req.headers.get("CF-Connecting-IP") ?? "unknown"
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`report:${ip}`))
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("")
}

/** Anonymous question reports, rate limited per IP and globally. */
async function handleReport(req: Request, env: Env): Promise<Response> {
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405)

  let body: { examId?: unknown; ref?: unknown }
  try {
    body = await req.json()
  } catch {
    return json({ error: "bad json" }, 400)
  }
  const { examId, ref } = body
  if (
    typeof examId !== "string" || !examId || examId.length > 32 ||
    typeof ref !== "string" || !ref || ref.length > 200
  ) {
    return json({ error: "bad payload" }, 400)
  }

  const hash = await ipHash(req)
  const dayAgo = Date.now() - 86_400_000
  const counts = await env.DB.prepare(
    "SELECT COUNT(*) AS total, SUM(ip_hash = ?1) AS mine FROM reports WHERE created_at > ?2",
  )
    .bind(hash, dayAgo)
    .first<{ total: number; mine: number | null }>()
  if ((counts?.mine ?? 0) >= 20 || (counts?.total ?? 0) >= 1000) {
    return json({ error: "rate limited" }, 429)
  }

  await env.DB.prepare(
    "INSERT INTO reports (exam_id, ref, ip_hash, created_at) VALUES (?, ?, ?, ?)",
  )
    .bind(examId, ref, hash, Date.now())
    .run()
  return json({ ok: true })
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url)

    if (url.pathname.startsWith("/api/auth/")) {
      return createAuth(env).handler(req)
    }
    if (url.pathname === "/api/progress") {
      return handleProgress(req, env)
    }
    if (url.pathname === "/api/report") {
      return handleReport(req, env)
    }
    if (url.pathname.startsWith("/api/")) {
      return json({ error: "not found" }, 404)
    }
    return env.ASSETS.fetch(req)
  },
} satisfies ExportedHandler<Env>
