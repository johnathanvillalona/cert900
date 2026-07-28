// Pushes the generated store listing to the App Store, the Apple counterpart to
// tools/play-listing.mjs.
//
//   node tools/gen-store-listing.mjs                                  # regenerate
//   node tools/appstore-listing.mjs --key <AuthKey_XXX.p8>            # dry run
//   node tools/appstore-listing.mjs --key <path> --commit             # publish
//
// Also needs the Issuer ID and Key ID, either as flags or as env vars:
//   ASC_ISSUER_ID (a UUID)   ASC_KEY_ID (10 chars, also in the .p8 filename)
//
// The .p8 is a live publishing credential and can only be downloaded once from
// Apple: keep it OUTSIDE this repo. Setup instructions: docs/store-api-setup.md
//
// Apple splits the listing across TWO resources, which is the thing to
// understand before reading the code:
//   appInfoLocalizations          -> name, subtitle, privacy policy
//   appStoreVersionLocalizations  -> description, keywords, promotional text,
//                                    what's new, marketing/support URLs
// The first is app-level identity; the second belongs to a specific version.
// That is why updating a description needs an editable version to exist and
// updating the subtitle does not.
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"
import crypto from "node:crypto"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const BUNDLE_ID = "com.cert900.app"
const LOCALE = "en-US"
const API = "https://api.appstoreconnect.apple.com/v1"

/** Apple enforces these; the API rejects overflow. */
const LIMITS = { name: 30, subtitle: 30, promotionalText: 170, keywords: 100, description: 4000 }

const args = process.argv.slice(2)
const flag = (name) => {
  const i = args.indexOf(name)
  return i !== -1 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : undefined
}
const keyPath = flag("--key")
const issuerId = flag("--issuer") ?? process.env.ASC_ISSUER_ID
const keyId = flag("--key-id") ?? process.env.ASC_KEY_ID ?? keyPath?.match(/AuthKey_([A-Z0-9]+)\.p8$/i)?.[1]
const commit = args.includes("--commit")

if (!keyPath || !issuerId || !keyId) {
  console.error("usage: node tools/appstore-listing.mjs --key <AuthKey_XXXXXXXXXX.p8> [--commit]")
  console.error("  --issuer <uuid>   or ASC_ISSUER_ID   (App Store Connect > Users and Access > Integrations)")
  console.error("  --key-id <id>     or ASC_KEY_ID      (defaults to the id in the .p8 filename)")
  process.exit(1)
}

/**
 * App Store Connect JWT: ES256, and the token is rejected if it lives longer
 * than 20 minutes. `aud` is the fixed string "appstoreconnect-v1", never a URL.
 * (`bid` belongs to the separate App Store Server API, not this one.)
 */
function ascToken() {
  const now = Math.floor(Date.now() / 1000)
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url")
  const header = b64({ alg: "ES256", kid: keyId, typ: "JWT" })
  const payload = b64({ iss: issuerId, iat: now, exp: now + 15 * 60, aud: "appstoreconnect-v1" })
  const key = crypto.createPrivateKey(readFileSync(keyPath, "utf8"))
  // Apple wants the raw r||s JOSE signature, not the DER encoding Node emits by
  // default. `dsaEncoding` is what makes this a valid ES256 JWT.
  const sig = crypto.sign("sha256", Buffer.from(`${header}.${payload}`), { key, dsaEncoding: "ieee-p1363" })
  return `${header}.${payload}.${sig.toString("base64url")}`
}

const token = ascToken()

async function api(method, urlPath, body) {
  const url = urlPath.startsWith("http") ? urlPath : `${API}${urlPath}`
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      // Mandatory on PATCH/POST; without it Apple returns 415.
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  if (!res.ok) {
    if (res.status === 401) {
      throw new Error(
        `401 unauthorized. The JWT was rejected. Check that ASC_ISSUER_ID matches the\n` +
          `Issuer ID shown on the Integrations page, that the Key ID matches this .p8,\n` +
          `and that the key has not been revoked.\n\n${text}`,
      )
    }
    if (res.status === 403) {
      throw new Error(
        `403 forbidden. The API key's role cannot edit app metadata.\n` +
          `App Manager is the usual minimum; Developer is build-upload oriented and is\n` +
          `not enough for listing text.\n\n${text}`,
      )
    }
    if (res.status === 409) {
      throw new Error(
        `409 conflict. Apple rejects edits to a field that is locked in the version's\n` +
          `current state — for example description and keywords once a version is\n` +
          `Waiting for Review. Promotional text stays editable at any time.\n\n${text}`,
      )
    }
    throw new Error(`${method} ${url} -> ${res.status}\n${text}`)
  }
  return text ? JSON.parse(text) : {}
}

function checkLimits(fields) {
  const over = Object.entries(LIMITS)
    .filter(([f, max]) => fields[f] !== undefined && [...fields[f]].length > max)
    .map(([f, max]) => `  ${f}: ${[...fields[f]].length}/${max}`)
  if (over.length) {
    console.error(`Listing exceeds Apple's limits:\n${over.join("\n")}`)
    process.exit(1)
  }
}

function diffField(label, before, after) {
  const b = (before ?? "").trim()
  const a = (after ?? "").trim()
  if (b === a) {
    console.log(`  = ${label} (unchanged, ${a.length} chars)`)
    return false
  }
  console.log(`  ~ ${label}: ${b.length} -> ${a.length} chars`)
  console.log(`      before: ${b.slice(0, 110).replace(/\n/g, " ⏎ ") || "(empty)"}`)
  console.log(`      after:  ${a.slice(0, 110).replace(/\n/g, " ⏎ ")}`)
  return true
}

// ---- what we are pushing -------------------------------------------------
// store.config.json is the Apple-shaped copy that gen-store-listing.mjs writes.
const cfg = JSON.parse(readFileSync(path.join(ROOT, "mobile", "store.config.json"), "utf8"))
const info = cfg.apple.info["en-US"]
const want = {
  name: info.title,
  subtitle: info.subtitle,
  promotionalText: info.promoText,
  description: info.description,
  keywords: Array.isArray(info.keywords) ? info.keywords.join(",") : info.keywords,
}
checkLimits(want)

// ---- resolve the app -----------------------------------------------------
const apps = await api("GET", `/apps?filter[bundleId]=${encodeURIComponent(BUNDLE_ID)}`)
const app = apps.data?.[0]
if (!app) {
  console.error(`No app found for bundle id ${BUNDLE_ID}. Has the app record been created in App Store Connect?`)
  process.exit(1)
}
console.log(`app: ${app.attributes?.name} (${app.id})`)

let changed = false

// ---- app-level identity: name + subtitle ---------------------------------
// An app carries several appInfo records; the editable one is whichever is not
// in a terminal state. Filtering client-side keeps this resilient to Apple
// renaming state fields (appStoreState -> state).
const appInfos = await api("GET", `/apps/${app.id}/appInfos`)
const LIVE = ["READY_FOR_SALE", "REPLACED_WITH_NEW_INFO", "REJECTED", "DEVELOPER_REMOVED_FROM_SALE"]
const editableInfo =
  appInfos.data?.find((i) => {
    const s = i.attributes?.state ?? i.attributes?.appStoreState
    return s && !LIVE.includes(s)
  }) ?? appInfos.data?.[0]

if (editableInfo) {
  const locs = await api("GET", `/appInfos/${editableInfo.id}/appInfoLocalizations`)
  const loc = locs.data?.find((l) => l.attributes?.locale === LOCALE)
  if (loc) {
    console.log(`\napp info (${LOCALE}), state ${editableInfo.attributes?.state ?? editableInfo.attributes?.appStoreState ?? "unknown"}:`)
    const dirty =
      [
        diffField("name", loc.attributes?.name, want.name),
        diffField("subtitle", loc.attributes?.subtitle, want.subtitle),
      ].some(Boolean)
    changed ||= dirty
    if (dirty && commit) {
      await api("PATCH", `/appInfoLocalizations/${loc.id}`, {
        data: {
          type: "appInfoLocalizations",
          id: loc.id,
          attributes: { name: want.name, subtitle: want.subtitle },
        },
      })
      console.log("  -> updated name/subtitle")
    }
  }
}

// ---- version-level copy: description, keywords, promotional text ---------
const versions = await api("GET", `/apps/${app.id}/appStoreVersions?limit=10`)
const editableVersion = versions.data?.find((v) => {
  const s = v.attributes?.appVersionState ?? v.attributes?.appStoreState
  return s && !LIVE.includes(s)
})

if (!editableVersion) {
  console.log(
    `\nNo editable App Store version. Description, keywords, and promotional text live on a\n` +
      `version, so they can only be pushed once one exists in App Store Connect (create the\n` +
      `version, or wait for the current one to leave a locked state). Name and subtitle above\n` +
      `are app-level and are unaffected.`,
  )
} else {
  const state = editableVersion.attributes?.appVersionState ?? editableVersion.attributes?.appStoreState
  const locs = await api("GET", `/appStoreVersions/${editableVersion.id}/appStoreVersionLocalizations`)
  const loc = locs.data?.find((l) => l.attributes?.locale === LOCALE)
  if (loc) {
    // Apple freezes description and keywords once a version is submitted, but
    // promotional text stays editable at any time. Patching the frozen fields
    // would 409 and take the whole request down with it, including the field
    // that WAS allowed, so narrow the patch to match the state.
    const FREE_EDIT = ["PREPARE_FOR_SUBMISSION", "DEVELOPER_REJECTED", "REJECTED", "METADATA_REJECTED", "INVALID_BINARY"]
    const frozen = !FREE_EDIT.includes(state)

    console.log(`\nversion ${editableVersion.attributes?.versionString} (${state}), ${LOCALE}:`)
    if (frozen) {
      console.log("  ! submitted for review: only promotional text is editable in this state")
    }

    const fields = frozen
      ? { promotionalText: want.promotionalText }
      : { description: want.description, keywords: want.keywords, promotionalText: want.promotionalText }

    const dirty = Object.entries(fields)
      .map(([f, v]) => diffField(f, loc.attributes?.[f], v))
      .some(Boolean)
    if (frozen) {
      // Still show what is waiting, so it is obvious why the push is partial.
      for (const f of ["description", "keywords"]) {
        if ((loc.attributes?.[f] ?? "").trim() !== (want[f] ?? "").trim()) {
          console.log(`  - ${f}: differs, but locked until the version leaves ${state}`)
        }
      }
    }
    changed ||= dirty
    if (dirty && commit) {
      await api("PATCH", `/appStoreVersionLocalizations/${loc.id}`, {
        data: { type: "appStoreVersionLocalizations", id: loc.id, attributes: fields },
      })
      console.log(`  -> updated ${Object.keys(fields).join(", ")}`)
    }
  }
}

if (!changed) console.log("\nnothing to do: App Store Connect already matches.")
else if (!commit) console.log("\nDRY RUN. Re-run with --commit to push these changes.")
else console.log("\ndone. Metadata changes are reviewed with the next submission.")
