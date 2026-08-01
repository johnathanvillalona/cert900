// Cron-driven marketing automation: daily question-of-the-day posts to X and
// Bluesky, a weekly read-only Reddit opportunity scan into D1, and a weekly
// IndexNow ping. All platform credentials are optional secrets; anything
// unconfigured is skipped with a log line so one platform never blocks another.
import type { Env } from "./auth"
import { GUIDE_PATHS } from "../src/data/routes"

interface FeedEntry {
  code: string
  cert: string
  vendor: string
  stem: string
  options: string[]
}

/**
 * Hashtags per vendor, most specific first.
 *
 * The daily post used to hardcode `#CompTIA` plus a Network+/A+ guess off the
 * cert string, so every CCNA, AWS, and Azure question went out captioned "Free
 * CompTIA question of the day" under #CompTIAAPlus. The pool spans all eleven
 * exams, so the caption has to follow the exam.
 */
const VENDOR_TAGS: Record<string, string> = {
  comptia: "#CompTIA",
  cisco: "#Cisco #CCNA",
  aws: "#AWS #AWSCertified",
  azure: "#Azure #MicrosoftLearn",
}

/** Exam-specific tag where one is well known, so posts are findable. */
function examTag(code: string): string {
  const c = code.toUpperCase()
  if (c.startsWith("220-12")) return "#CompTIAAPlus"
  if (c.startsWith("N10-")) return "#NetworkPlus"
  if (c.startsWith("SY0-")) return "#SecurityPlus"
  if (c.startsWith("AZ-") || c.startsWith("SC-")) return `#${c.replace("-", "")}`
  return ""
}

const SITE = "https://cert900.com"
const QOTD_LINK = `${SITE}/?utm_source=%SRC%&utm_medium=social&utm_campaign=qotd`

/**
 * Same pick math as src/lib/qotd.ts. The feed is the multiple-choice subset of
 * the pool (PBQs cannot be posted as lettered options), so it is shorter and
 * the post will usually differ from what the site's hero shows that day.
 */
export async function todaysQuestion(env: Env): Promise<FeedEntry | null> {
  const res = await env.ASSETS.fetch("https://assets.local/qotd-feed.json")
  if (!res.ok) return null
  const feed = (await res.json()) as FeedEntry[]
  if (!feed.length) return null
  const dayIndex = Math.floor(Date.now() / 86_400_000)
  return feed[((dayIndex % feed.length) + feed.length) % feed.length]
}

/** Compose the post under `limit` chars; drop options, then truncate, to fit. */
export function composePost(q: FeedEntry, link: string, linkLen: number, limit: number): string {
  const tags = [VENDOR_TAGS[q.vendor] ?? "", examTag(q.code)].filter(Boolean).join(" ")
  const head = `Free ${q.cert} question of the day (${q.code}):`
  const opts = q.options.map((o, i) => `${"ABCD"[i]}) ${o}`).join("\n")
  const tail = `Answer + explanation: ${link}\n${tags}`
  const tailLen = tail.length - link.length + linkLen
  const full = `${head}\n\n${q.stem}\n\n${opts}\n\n${tail}`
  if (full.length - link.length + linkLen <= limit) return full
  const noOpts = `${head}\n\n${q.stem}\n\n${tail}`
  if (noOpts.length - link.length + linkLen <= limit) return noOpts
  const room = limit - tailLen - head.length - 5
  return `${head}\n\n${q.stem.slice(0, Math.max(40, room))}…\n\n${tail}`
}

// ---------- X: REMOVED 2026-08-01 ----------
//
// X's API answered every post with `402 credits depleted`: the free tier can no
// longer write. Promise.allSettled meant it failed silently for weeks. Rather
// than keep ~45 lines of OAuth 1.0a signing warm for an endpoint that cannot
// succeed, the whole path is gone; `git show 7f57c1e:worker/social.ts` has it
// intact if a paid plan ever makes it worth restoring.
//
// The X_* secrets are still set on the Worker and are now unused. Remove them
// with `npx wrangler secret delete X_API_KEY` (and the other three).

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

export async function dailySocialPost(env: Env, q: FeedEntry | null): Promise<void> {
  if (!q) {
    console.log("qotd: no feed entry")
    return
  }
  const bskyLink = QOTD_LINK.replace("%SRC%", "bluesky")
  // Bluesky counts graphemes of the raw text, so the link costs its full length.
  await postToBluesky(env, composePost(q, bskyLink, bskyLink.length, 300), bskyLink)
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
      // Home + every prerendered guide slug, from the shared route table so a
      // new exam's guide is pinged without editing this list.
      urlList: [`${SITE}/`, ...Object.values(GUIDE_PATHS).map((p) => `${SITE}${p}`)],
    }),
  })
  console.log(`indexnow -> ${res.status}`)
}
