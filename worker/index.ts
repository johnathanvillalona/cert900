import { createAuth, type Env } from "./auth"
import { dailySocialPost, weeklyRedditScan, weeklyIndexNow } from "./social"

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

const CANONICAL_HOST = "cert900.com"

// CSP allows exactly what index.html ships: self-hosted assets, the two inline
// scripts (theme boot + beacon loader), and Cloudflare Web Analytics.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' https://cloudflareinsights.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://accounts.google.com",
  "object-src 'none'",
].join("; ")

/** Security headers on every response; CSP only on HTML documents. */
function withSecurityHeaders(res: Response): Response {
  const out = new Response(res.body, res)
  out.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
  out.headers.set("X-Content-Type-Options", "nosniff")
  out.headers.set("X-Frame-Options", "DENY")
  out.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  out.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
  if ((out.headers.get("content-type") ?? "").includes("text/html")) {
    out.headers.set("Content-Security-Policy", CSP)
  }
  return out
}

async function route(req: Request, env: Env): Promise<Response> {
  const url = new URL(req.url)

  // Canonical-host + TLS redirect: http, old workers.dev links, and www all
  // land on https://cert900.com. The http check reads CF-Visitor (set only by
  // the Cloudflare edge) because wrangler dev simulates the route host in
  // request.url, which would loop local dev if we trusted url.protocol.
  const wrongHost = url.hostname === `www.${CANONICAL_HOST}` || url.hostname.endsWith(".workers.dev")
  let visitorScheme: string | undefined
  try {
    visitorScheme = JSON.parse(req.headers.get("cf-visitor") ?? "{}").scheme
  } catch {
    /* malformed header: treat as unknown */
  }
  const wrongProto = visitorScheme === "http" && url.hostname === CANONICAL_HOST
  if (wrongHost || wrongProto) {
    url.hostname = CANONICAL_HOST
    url.protocol = "https:"
    const status = req.method === "GET" || req.method === "HEAD" ? 301 : 308
    return Response.redirect(url.toString(), status)
  }

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
  // Vite content-hashes everything under /assets/ (js, css, fonts), so those
  // files never change in place: let browsers keep them for a year instead of
  // revalidating on every visit. HTML keeps the platform default
  // (max-age=0, must-revalidate) so deploys land on the next navigation.
  // The text/html guard matters: missing asset paths fall through to the SPA
  // index.html with a 200, which must never be cached as immutable.
  const res = await env.ASSETS.fetch(req)
  const type = res.headers.get("content-type") ?? ""
  if (
    url.pathname.startsWith("/assets/") &&
    (res.ok || res.status === 304) &&
    !type.includes("text/html")
  ) {
    const out = new Response(res.body, res)
    out.headers.set("cache-control", "public, max-age=31536000, immutable")
    return out
  }
  return res
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    return withSecurityHeaders(await route(req, env))
  },

  // Marketing automation. "30 14 * * *" = daily question-of-the-day post;
  // "0 15 * * 1" = Monday lead scan + IndexNow ping.
  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    if (controller.cron === "30 14 * * *") {
      ctx.waitUntil(dailySocialPost(env))
    } else {
      ctx.waitUntil(Promise.allSettled([weeklyRedditScan(env), weeklyIndexNow()]))
    }
  },
} satisfies ExportedHandler<Env>
