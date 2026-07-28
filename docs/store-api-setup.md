# Store API access

How to give this repo's tooling the same publishing access Codemagic already
has, so store listings can be updated without opening either console.

Two credentials, one per store. **Neither belongs in this repo.** Put them in a
folder outside it (`C:\Users\user\keys\` or similar) and pass the path with
`--key`. Both are live publishing credentials.

Codemagic already holds equivalent credentials. You do **not** have to reuse
them, and you should not try: neither Google nor Apple lets you re-download a
key after creation. Mint a **second** key instead — Google allows 10 keys per
service account and Apple allows multiple team keys — so Codemagic keeps
working untouched and revoking one never breaks the other.

---

## Google Play

### 1. Google Cloud: create the service account

Linking a Cloud project to the Play developer account is **no longer required** —
Google removed that step, which is why most tutorials you'll find are wrong. The
"API access" page has also disappeared for some accounts. The route below works
regardless.

1. <https://console.cloud.google.com/projectcreate> — create or pick any project.
   It does **not** need to be linked to the Play account.
2. Enable the API:
   <https://console.cloud.google.com/apis/library/androidpublisher.googleapis.com>
   → **Enable**.
3. <https://console.cloud.google.com/iam-admin/serviceaccounts> → **Create service
   account**. Name it something like `cert900-listing`.
   When it offers "Grant this service account access to project", **skip it** —
   Cloud IAM roles are irrelevant here; Play has its own permission model.
4. Click the new service account → **Keys** tab → **Add key** → **Create new key**
   → **JSON** → **Create**. The file downloads once and cannot be re-downloaded.
5. Copy the service account's **email** (`...@....iam.gserviceaccount.com`).

### 2. Play Console: grant it access to the app

1. Play Console → **Users and permissions** (the account-level page, not inside
   the app) → **Invite new users**.
2. Paste the service account email.
3. Under **App permissions**, add `com.cert900.app`.
4. Grant **Manage store presence**. That is the exact permission that authorizes
   listing text edits — the release permissions do *not*, and granting Admin is
   more access than this needs.
   Add **Release apps to testing tracks** as well only if you want the tooling to
   manage tracks later.
5. Invite. Permission changes can take a while to propagate; a 403 immediately
   after granting usually means "wait a few minutes", not "wrong permission".

### 3. Use it

```bash
node tools/gen-store-listing.mjs                        # regenerate copy from the exam registry
node tools/play-listing.mjs --key /path/to/sa.json      # dry run: prints a per-field diff
node tools/play-listing.mjs --key /path/to/sa.json --commit
```

Notes that matter:

- The API refuses to touch an app with **no APK/AAB ever uploaded**. cert900 has
  one, so this is fine.
- Only **one edit may be open at a time** per account, and opening a new one
  invalidates any existing edit — including one the Play Console UI has open.
  Don't run this while hand-editing the listing.
- The script commits with `changesInReviewBehavior=ERROR_IF_IN_REVIEW`. Google's
  default is `CANCEL_IN_REVIEW_AND_SUBMIT`, which would silently cancel whatever
  is currently in review. If a submission is in flight the script now fails
  loudly instead of hijacking it.
- Listing changes go through Google's review before they appear.

---

## App Store Connect

### 1. Create the API key

1. <https://appstoreconnect.apple.com> → **Users and Access** → **Integrations**
   tab. It opens on **App Store Connect API**. Choose **Team Keys**.
2. **+** to generate a key. Give it a name and an access role — **App Manager**
   is the usual minimum for editing metadata. (Developer is build-upload
   oriented and cannot edit listing text.)
   Generating a team key requires an Admin/Account Holder account.
3. Download the **`.p8`**. Like Google's, it downloads **once**.
4. Note two ids from that page:
   - **Issuer ID** — a UUID, shown above the key table. One per team.
   - **Key ID** — 10 characters, in the key's row. It's also in the filename:
     `AuthKey_ABCD123456.p8`.

### 2. Use it

```bash
export ASC_ISSUER_ID=57246542-96fe-1a63-e053-0824d011072a
node tools/appstore-listing.mjs --key /path/to/AuthKey_ABCD123456.p8
node tools/appstore-listing.mjs --key /path/to/AuthKey_ABCD123456.p8 --commit
```

The Key ID is read from the filename; override with `--key-id` if you renamed it.

Notes that matter:

- Apple splits the listing across **two** resources, and the script handles both:
  - **name, subtitle** are app-level (`appInfoLocalizations`) and can be edited
    without an in-progress version.
  - **description, keywords, promotional text** belong to a **version**
    (`appStoreVersionLocalizations`). If no editable version exists, the script
    says so and updates only the app-level fields.
- **Promotional text** is the one field editable at any time without submitting a
  new version — useful for a quick change.
- Description and keywords lock once a version is Waiting for Review; the script
  surfaces Apple's 409 with that explanation rather than a raw error.
- Tokens are ES256 and Apple rejects any that live longer than 20 minutes, so the
  script mints a fresh 15-minute one per run.

---

## What still requires the consoles

Neither API can do these, by the vendors' design:

| Task | Where |
|---|---|
| Data safety, content rating, target audience, ads declarations | Play Console → App content |
| Identity/D-U-N-S verification | Play Console / Apple |
| Applying for production access after closed testing | Play Console |
| App privacy answers, age rating questionnaire | App Store Connect |
| Pricing and availability | either console |

---

## Verifying transactional email (separate credential, same spirit)

`AUTH_EMAIL_FROM` in `wrangler.jsonc` turns on email/password sign-in, and it must
stay empty until Cloudflare Email **Sending** is onboarded for cert900.com.

Email **Routing** (receiving) and Email **Sending** (transactional) are different
products that share the `send_email` binding name and both add DNS records. The
domain currently has Routing configured — MX records, an SPF include, and a
`cf2024-1` DKIM key are all live — which makes DNS look correct and makes
`wrangler dev` print an "unrestricted" Send Email binding, while every send still
fails with `destination address is not a verified address`, because Routing only
sends to addresses you have verified.

Onboard Sending at **Cloudflare Dashboard → Compute & AI → Email Service → Email
Sending → Onboard Domain**, then prove it:

```bash
node tools/mail-check.mjs you@example.com
```

That sends one real message through the same binding the Worker uses, without
deploying anything. Only set `AUTH_EMAIL_FROM` once it reports OK and the mail
actually arrives.
