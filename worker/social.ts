// Cron-driven marketing automation: daily question-of-the-day posts to X and
// Bluesky, a weekly read-only Reddit opportunity scan into D1, and a weekly
// IndexNow ping. All platform credentials are optional secrets; anything
// unconfigured is skipped with a log line so one platform never blocks another.
import type { Env } from "./auth"

interface FeedEntry {
  code: string
  cert: string
  stem: string
  options: string[]
}

const SITE = "https://cert900.com"
const QOTD_LINK = `${SITE}/?utm_source=%SRC%&utm_medium=social&utm_campaign=qotd`

/** Same pick math as src/lib/qotd.ts: feed order mirrors qotdPool(). */
async function todaysQuestion(env: Env): Promise<FeedEntry | null> {
  const res = await env.ASSETS.fetch("https://assets.local/qotd-feed.json")
  if (!res.ok) return null
  const feed = (await res.json()) as FeedEntry[]
  if (!feed.length) return null
  const dayIndex = Math.floor(Date.now() / 86_400_000)
  return feed[((dayIndex % feed.length) + feed.length) % feed.length]
}

/** Compose the post under `limit` chars; drop options, then truncate, to fit. */
function composePost(q: FeedEntry, link: string, linkLen: number, limit: number): string {
  const tag = q.cert.includes("Network") ? "#NetworkPlus" : "#CompTIAAPlus"
  const head = `Free CompTIA question of the day (${q.code}):`
  const opts = q.options.map((o, i) => `${"ABCD"[i]}) ${o}`).join("\n")
  const tail = `Answer + explanation: ${link}\n#CompTIA ${tag}`
  const tailLen = tail.length - link.length + linkLen
  const full = `${head}\n\n${q.stem}\n\n${opts}\n\n${tail}`
  if (full.length - link.length + linkLen <= limit) return full
  const noOpts = `${head}\n\n${q.stem}\n\n${tail}`
  if (noOpts.length - link.length + linkLen <= limit) return noOpts
  const room = limit - tailLen - head.length - 5
  return `${head}\n\n${q.stem.slice(0, Math.max(40, room))}…\n\n${tail}`
}

// ---------- X (OAuth 1.0a user context, HMAC-SHA1 via WebCrypto) ----------

function pctEncode(s: string): string {
  return encodeURIComponent(s).replace(/[!*'()]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase())
}

async function hmacSha1(key: string, base: string): Promise<string> {
  const k = await crypto.subtle.importKey("raw", new TextEncoder().encode(key), { name: "HMAC", hash: "SHA-1" }, false, ["sign"])
  const sig = await crypto.subtle.sign("HMAC", k, new TextEncoder().encode(base))
  return btoa(String.fromCharCode(...new Uint8Array(sig)))
}

async function postToX(env: Env, text: string): Promise<void> {
  if (!env.X_API_KEY || !env.X_API_SECRET || !env.X_ACCESS_TOKEN || !env.X_ACCESS_SECRET) {
    console.log("qotd: X skipped (secrets not set)")
    return
  }
  const url = "https://api.x.com/2/tweets"
  const oauth: Record<string, string> = {
    oauth_consumer_key: env.X_API_KEY,
    oauth_nonce: crypto.randomUUID().replaceAll("-", ""),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: String(Math.floor(Date.now() / 1000)),
    oauth_token: env.X_ACCESS_TOKEN,
    oauth_version: "1.0",
  }
  const paramStr = Object.keys(oauth)
    .sort()
    .map((k) => `${pctEncode(k)}=${pctEncode(oauth[k])}`)
    .join("&")
  const base = `POST&${pctEncode(url)}&${pctEncode(paramStr)}`
  const signingKey = `${pctEncode(env.X_API_SECRET)}&${pctEncode(env.X_ACCESS_SECRET)}`
  oauth.oauth_signature = await hmacSha1(signingKey, base)
  const header =
    "OAuth " +
    Object.keys(oauth)
      .sort()
      .map((k) => `${pctEncode(k)}="${pctEncode(oauth[k])}"`)
      .join(", ")

  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: header, "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  })
  console.log(`qotd: X -> ${res.status}${res.ok ? "" : " " + (await res.text()).slice(0, 200)}`)
}

// ---------- Bluesky (app password session + link facet) ----------

async function postToBluesky(env: Env, text: string, link: string): Promise<void> {
  if (!env.BSKY_IDENTIFIER || !env.BSKY_APP_PASSWORD) {
    console.log("qotd: Bluesky skipped (secrets not set)")
    return
  }
  const session = await fetch("https://bsky.social/xrpc/com.atproto.server.createSession", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier: env.BSKY_IDENTIFIER, password: env.BSKY_APP_PASSWORD }),
  })
  if (!session.ok) {
    console.log(`qotd: Bluesky session -> ${session.status}`)
    return
  }
  const { accessJwt, did } = (await session.json()) as { accessJwt: string; did: string }
  const linkBytes = new TextEncoder().encode(link)
  const byteStart = text.indexOf(link) === -1 ? -1 : new TextEncoder().encode(text.slice(0, text.indexOf(link))).length
  const record: Record<string, unknown> = {
    $type: "app.bsky.feed.post",
    text,
    createdAt: new Date().toISOString(),
  }
  if (byteStart >= 0) {
    record.facets = [
      {
        index: { byteStart, byteEnd: byteStart + linkBytes.length },
        features: [{ $type: "app.bsky.richtext.facet#link", uri: link }],
      },
    ]
  }
  const res = await fetch("https://bsky.social/xrpc/com.atproto.repo.createRecord", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessJwt}` },
    body: JSON.stringify({ repo: did, collection: "app.bsky.feed.post", record }),
  })
  console.log(`qotd: Bluesky -> ${res.status}${res.ok ? "" : " " + (await res.text()).slice(0, 200)}`)
}

export async function dailySocialPost(env: Env): Promise<void> {
  const q = await todaysQuestion(env)
  if (!q) {
    console.log("qotd: no feed entry")
    return
  }
  const xLink = QOTD_LINK.replace("%SRC%", "x")
  const bskyLink = QOTD_LINK.replace("%SRC%", "bluesky")
  // X wraps links to 23 chars; Bluesky counts graphemes of the raw text.
  const xText = composePost(q, xLink, 23, 280)
  const bskyText = composePost(q, bskyLink, bskyLink.length, 300)
  await Promise.allSettled([postToX(env, xText), postToBluesky(env, bskyText, bskyLink)])
}

// ---------- Weekly: Reddit opportunity scan (read-only) + IndexNow ----------

const SCAN_SUBS = "CompTIA+ITCareerQuestions+CompTIA_Cert+ccna+AWSCertifications+AzureCertification"
const SCAN_QUERY = '"practice test" OR "practice exam" OR PBQ OR "exam simulator"'
const SCAN_UA = "web:com.cert900.lead-scan:v1.0 (free study site; contact johnathanv16@gmail.com)"

/** Anonymous .json endpoints 403 from cloud IPs; use app-only OAuth (read-only). */
async function redditToken(env: Env): Promise<string | null> {
  if (!env.REDDIT_CLIENT_ID || !env.REDDIT_CLIENT_SECRET) return null
  const res = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${env.REDDIT_CLIENT_ID}:${env.REDDIT_CLIENT_SECRET}`),
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": SCAN_UA,
    },
    body: "grant_type=client_credentials",
  })
  if (!res.ok) {
    console.log(`leads: reddit token -> ${res.status}`)
    return null
  }
  const data = (await res.json()) as { access_token?: string }
  return data.access_token ?? null
}

export async function weeklyRedditScan(env: Env): Promise<void> {
  const token = await redditToken(env)
  if (!token) {
    console.log("leads: skipped (REDDIT_CLIENT_ID/SECRET not set)")
    return
  }
  const url =
    `https://oauth.reddit.com/r/${SCAN_SUBS}/search?` +
    new URLSearchParams({ q: SCAN_QUERY, restrict_sr: "on", sort: "new", t: "week", limit: "50", raw_json: "1" })
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}`, "User-Agent": SCAN_UA },
  })
  if (!res.ok) {
    console.log(`leads: reddit -> ${res.status}`)
    return
  }
  const data = (await res.json()) as { data?: { children?: { data: { name: string; subreddit: string; title: string; permalink: string; created_utc: number } }[] } }
  const posts = data.data?.children ?? []
  let added = 0
  for (const { data: p } of posts) {
    const r = await env.DB.prepare(
      "INSERT OR IGNORE INTO leads (id, subreddit, title, url, created_at, found_at) VALUES (?, ?, ?, ?, ?, ?)",
    )
      .bind(p.name, p.subreddit, p.title.slice(0, 300), `https://www.reddit.com${p.permalink}`, Math.floor(p.created_utc * 1000), Date.now())
      .run()
    if (r.meta.changes > 0) added++
  }
  console.log(`leads: scanned ${posts.length}, new ${added}`)
}

export const INDEXNOW_KEY = "c900e5f1a2b34d67890fedcba9871234"

export async function weeklyIndexNow(): Promise<void> {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: "cert900.com",
      key: INDEXNOW_KEY,
      keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
      // Home + every prerendered guide slug. Keep in sync with the guide set
      // (src/screens/Guides.tsx GUIDE_META) and public/sitemap.xml; each new
      // exam's integration adds its slug here.
      urlList: [
        `${SITE}/`,
        `${SITE}/comptia-a-plus-practice-test`,
        `${SITE}/network-plus-practice-test`,
        `${SITE}/comptia-security-plus-practice-test`,
        `${SITE}/comptia-pbq-practice`,
        `${SITE}/cisco-ccna-practice-test`,
        `${SITE}/aws-ai-practitioner-practice-test`,
        `${SITE}/aws-cloud-practitioner-practice-test`,
        `${SITE}/aws-solutions-architect-associate-practice-test`,
        `${SITE}/azure-fundamentals-practice-test`,
        `${SITE}/azure-administrator-az-104-practice-test`,
        `${SITE}/microsoft-sc-900-practice-test`,
      ],
    }),
  })
  console.log(`indexnow -> ${res.status}`)
}
