// Pushes the generated store listing to Google Play.
//
// Uses the Google Play Developer API (androidpublisher v3) with a service
// account, so the listing can be updated without opening the Play Console.
// Auth is a self-signed JWT exchanged for an access token — no googleapis
// dependency, which keeps this a zero-install script.
//
//   node tools/gen-store-listing.mjs                      # regenerate the copy
//   node tools/play-listing.mjs --key <path-to-sa.json>   # dry run: show a diff
//   node tools/play-listing.mjs --key <path> --commit     # actually publish
//
// The key is a live publishing credential: keep it OUTSIDE this repo.
// Setup instructions: docs/store-api-setup.md
//
// What this CANNOT do (Play Console only, by Google's design): App content
// declarations (data safety, content rating, target audience, ads), identity
// verification, and applying for production access.
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"
import crypto from "node:crypto"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const PACKAGE = "com.cert900.app"
const LOCALE = "en-US"
const API = "https://androidpublisher.googleapis.com/androidpublisher/v3"

/** Google enforces these server-side and 400s on overflow. */
const LIMITS = { title: 30, shortDescription: 80, fullDescription: 4000 }

const args = process.argv.slice(2)
const keyPath = args[args.indexOf("--key") + 1]
const commit = args.includes("--commit")
if (!keyPath || keyPath.startsWith("--")) {
  console.error("usage: node tools/play-listing.mjs --key <service-account.json> [--commit]")
  process.exit(1)
}

const b64url = (buf) => Buffer.from(buf).toString("base64url")

/** Service-account JWT -> OAuth access token (RS256, no external deps). */
async function accessToken(sa) {
  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }))
  const claims = b64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: "https://www.googleapis.com/auth/androidpublisher",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  )
  const signer = crypto.createSign("RSA-SHA256")
  signer.update(`${header}.${claims}`)
  const jwt = `${header}.${claims}.${b64url(signer.sign(sa.private_key))}`

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: jwt }),
  })
  const body = await res.json()
  if (!res.ok) throw new Error(`token exchange failed (${res.status}): ${JSON.stringify(body)}`)
  return body.access_token
}

async function api(token, method, url, body) {
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  if (!res.ok) {
    // Translate the failures that actually happen into the fix for each.
    if (res.status === 403 || text.includes("PERMISSION_DENIED")) {
      throw new Error(
        `${res.status} permission denied.\n` +
          `The service account needs the "Manage store presence" permission on ${PACKAGE}\n` +
          `(Play Console > Users and permissions > the service account > App permissions).\n` +
          `Release permissions are NOT what grants listing edits. Newly granted permissions\n` +
          `can take a while to propagate.\n\n${text}`,
      )
    }
    if (res.status === 404) {
      throw new Error(
        `${res.status} not found. Either the package name is wrong, or this service account\n` +
          `is not invited to the developer account that owns ${PACKAGE}. Google returns 404\n` +
          `rather than 403 for an app you cannot see at all.\n\n${text}`,
      )
    }
    if (res.status === 429) throw new Error(`${res.status} rate limited by Google; retry shortly.\n${text}`)
    throw new Error(`${method} ${url} -> ${res.status}\n${text}`)
  }
  return text ? JSON.parse(text) : {}
}

/** Fail before opening an edit rather than eating a 400 mid-transaction. */
function checkLimits(listing) {
  const over = Object.entries(LIMITS)
    .filter(([f, max]) => [...(listing[f] ?? "")].length > max)
    .map(([f, max]) => `  ${f}: ${[...listing[f]].length}/${max}`)
  if (over.length) {
    console.error(`Listing exceeds Google's limits:\n${over.join("\n")}`)
    console.error("Shorten the copy in tools/gen-store-listing.mjs and regenerate.")
    process.exit(1)
  }
}

/** Show what would change, field by field, before anything is written. */
function diff(current, next) {
  let changed = false
  for (const field of ["title", "shortDescription", "fullDescription"]) {
    const before = (current?.[field] ?? "").trim()
    const after = next[field].trim()
    if (before === after) {
      console.log(`  = ${field} (unchanged, ${after.length} chars)`)
      continue
    }
    changed = true
    console.log(`  ~ ${field}: ${before.length} -> ${after.length} chars`)
    console.log(`      before: ${before.slice(0, 120).replace(/\n/g, " ⏎ ") || "(empty)"}`)
    console.log(`      after:  ${after.slice(0, 120).replace(/\n/g, " ⏎ ")}`)
  }
  return changed
}

const sa = JSON.parse(readFileSync(keyPath, "utf8"))
const listing = JSON.parse(readFileSync(path.join(ROOT, "tools", "store-listing.json"), "utf8"))
checkLimits(listing)

const token = await accessToken(sa)
console.log(`authenticated as ${sa.client_email}`)

// Every write goes through an "edit" that is only applied on commit, so a dry
// run can read the live listing through the same transaction and discard it.
// Note: an account may have only ONE edit open at a time, and creating a new
// one invalidates any existing edit — including one the Play Console UI has
// open. Do not run this while editing the listing by hand.
const edit = await api(token, "POST", `${API}/applications/${PACKAGE}/edits`, {})
console.log(`opened edit ${edit.id}`)

let committed = false
try {
  let current = null
  try {
    current = await api(token, "GET", `${API}/applications/${PACKAGE}/edits/${edit.id}/listings/${LOCALE}`)
  } catch {
    console.log("no existing listing for this locale (first publish)")
  }

  console.log(`\nlisting diff for ${LOCALE}:`)
  const changed = diff(current, listing)
  if (!changed) {
    console.log("\nnothing to do: the live listing already matches.")
  } else if (!commit) {
    console.log("\nDRY RUN. Re-run with --commit to publish these changes.")
  } else {
    // PUT replaces the whole Listing resource, and `video` is a field on it, so
    // send the current value back rather than silently clearing a promo video.
    await api(token, "PUT", `${API}/applications/${PACKAGE}/edits/${edit.id}/listings/${LOCALE}`, {
      language: LOCALE,
      title: listing.title,
      shortDescription: listing.shortDescription,
      fullDescription: listing.fullDescription,
      ...(current?.video ? { video: current.video } : {}),
    })
    // changesInReviewBehavior is the important one. Its DEFAULT is
    // CANCEL_IN_REVIEW_AND_SUBMIT, which would silently cancel whatever is
    // currently in review and submit this instead. ERROR_IF_IN_REVIEW makes the
    // call fail loudly instead, which is the only safe default for a script.
    const url = new URL(`${API}/applications/${PACKAGE}/edits/${edit.id}:commit`)
    url.searchParams.set("changesInReviewBehavior", "ERROR_IF_IN_REVIEW")
    await api(token, "POST", url.toString())
    committed = true
    console.log("\ncommitted. Store listing changes go through Google's review before they appear.")
  }
} finally {
  // Abandon the edit unless it was committed, so a failed or dry run never
  // leaves a dangling transaction that blocks the next one.
  if (!committed) {
    try {
      await api(token, "DELETE", `${API}/applications/${PACKAGE}/edits/${edit.id}`)
      console.log(`\ndiscarded edit ${edit.id}`)
    } catch {
      /* already invalidated or expired */
    }
  }
}
