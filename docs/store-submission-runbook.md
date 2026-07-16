# cert900 mobile — store submission runbook

Complete, ordered path to get the Expo app in [`mobile/`](../mobile) onto the **App
Store** and **Google Play**, from Windows (no Mac). Verified against Apple, Google,
and Expo docs (July 2026). Steps marked **(you)** need your accounts/credentials or a
physical device and can't be scripted here; everything else is already done in the repo.

---

## TL;DR — the one thing that drives your timeline

**Google Play is the long pole, not the code.** A *personal* Play developer account
must run a **closed test with at least 12 testers for 14 continuous days** before it can
apply for production. (It was 20 testers; Google reduced it to **12** on Dec 11, 2024.)
So the winning sequence is:

1. Build the binaries (§C) — a day.
2. **Start the Android 12-tester / 14-day clock immediately** (§D) — this is the bottleneck.
3. **While those 14 days run, do the entire iOS submission** (§E) — iOS review is ~1–3 days.
4. Around day 15–16, apply for Play production.

Realistic end-to-end: **iOS live in ~1 week; Android live in ~3–4 weeks**, gated by the
tester window. Nothing about the app blocks this — it's account/policy latency.

---

## Accounts & costs
- **Apple Developer Program** — $99/year (you have it).
- **Google Play Console** — $25 one-time (you have it). Personal accounts must complete
  **identity verification** (1–3 days) before publishing.
- **Expo / EAS** — free tier is fine. Cloud builds mean **no Mac needed**.

## Already done for you (in the repo, committed)
- `mobile/eas.json` — build profiles (development/preview/production) + submit config.
- `mobile/app.json` — `cert900://` scheme, `com.cert900.app` id, `buildNumber`/`versionCode`,
  branded **splash screen**, `usesNonExemptEncryption: false` (skips the iOS export-compliance
  prompt), `supportsTablet: false` (so **no iPad screenshots are required** for v1).
- **App icon** `mobile/assets/icon.png` — 1024, **no alpha** (App Store compliant).
- **Play feature graphic** `mobile/assets/play-feature-graphic.png` — 1024×500, no alpha.
- `mobile/store.config.json` — Apple listing text for `eas metadata:push`.
- Listing copy for both stores — [`store-listing-copy.md`](./store-listing-copy.md).
- Backend: worker already trusts the app scheme for Google sign-in.

**You still must provide (needs a device):** phone **screenshots** (§F).

---

## Phase A — run it on your phone first **(you)**
```powershell
cd mobile
npm install
npm start
```
Open **Expo Go** (App Store / Play Store) and scan the QR. Confirm drills work and
**test Google sign-in** — it should complete against the live backend. (Note: the branded
splash screen only shows in a real build, not Expo Go — that's expected.)

## Phase B — EAS one-time setup **(you)**
```powershell
cd mobile
npm install --global eas-cli      # or prefix every command with: npx eas-cli
eas login                         # free Expo account
eas whoami                        # verify
eas init                          # creates the EAS project + writes extra.eas.projectId into app.json
```
**Commit the app.json change** `eas init` makes — the cloud builder reads the committed
`projectId`, and a missing one fails the build even though it's present locally:
```powershell
git add mobile/app.json ; git commit -m "eas: add projectId"
```

## Phase C — build the binaries **(you)**
```powershell
# Android production bundle (.aab) — EAS offers to generate & store your keystore: say Yes, then BACK IT UP
eas build --profile production --platform android

# iOS production build (.ipa) — runs on Expo's macOS cloud from Windows.
# Prompts for Apple ID + 2FA the first time; EAS then auto-registers the bundle id and
# creates/stores your distribution cert + provisioning profile.
eas build --profile production --platform ios
```
Each prints a build URL; download the `.aab` / `.ipa` from there. Optional: add
`--profile preview` builds first (`.apk` for Android sideload, internal `.ipa`) for quick QA.

---

## Phase D — Google Play (START THIS FIRST; it's the long pole) **(you)**

### D1. Create the app
Play Console → **All apps → Create app**. Name `cert900: CompTIA A+ Net+`, English (US),
**App**, **Free** (⚠️ free→paid is not reversible later). Agree to the policy + export
declarations → **Create app**.

### D2. First AAB upload is MANUAL
The Play API can't create the first release, so **`eas submit` won't work yet**. Do it by hand:
- **Test and release → Testing → Closed testing** → use the default **Alpha** track (or create one).
- **Create new release → upload the `.aab`** from Phase C. Play enrolls you in **Play App
  Signing** and registers your EAS upload key automatically. Add release notes → **Review →
  Start rollout to Closed testing.** (Review is often hours to ~2 days.)

### D3. Start the 12-tester / 14-day clock (the bottleneck — do it now)
- On the Closed track → **Testers** tab: add an **email list** of Gmail addresses (recruit
  **~15–18** to survive dropouts; hard floor is **12**) or link a **Google Group**. Save.
- Copy the **opt-in URL** and send it to testers. Each needs a **real Android device** and a
  **unique Google account** (emulators / duplicate accounts don't count and can get you rejected).
- Tell them to **join, install cert900, actually open it and do a short session, and stay
  opted in for 14 days.** The 14-day clock is **continuous and per-tester** — if someone opts
  out mid-way, their clock resets. Google also checks **real engagement**, not just headcount.
- The clock effectively starts once **≥12 are opted in**, not when you upload. Plan to apply
  around **day 15–16** for margin.

> Internal testing is instant but **does NOT count** toward the requirement — use **Closed**.

### D4. Clear "App content" (required before production)
Under **App content**, complete each:
- **Privacy policy:** `https://cert900.com/privacy`
- **Data safety:** answer **Yes** you collect data → then:
  - **App activity / user-generated content** (quiz answers, progress): Collected **Yes**,
    Shared **No**, purpose **App functionality** + **Account management**.
  - **Email address** (only via optional Google sign-in): Collected **Yes**, Shared **No**,
    purpose **Account management / App functionality**, mark **Optional**.
  - Security: **encrypted in transit = Yes**, **users can request deletion = Yes** (in-app
    account deletion exists).
  - Declare **No ads**, **no third-party sharing**, no location/financial/health/contacts,
    **no device IDs for tracking**.
- **Content rating:** category **Reference/Education**; answer all content questions **No** →
  lands at Everyone / PEGI 3.
- **Target audience:** choose **13+ / adult** brackets (do **not** include under-13 — that
  triggers the stricter Families policy). "Appeals to children" → **No**.
- **Ads:** **No**. **News app:** No. **Government/financial/health:** No.
- **App access:** "All functionality is available without special access" (cert900 works
  anonymously; sign-in is optional).

### D5. Store listing
**Grow → Store presence → Main store listing.** Paste text from
[`store-listing-copy.md`](./store-listing-copy.md). Upload:
- **Feature graphic:** `mobile/assets/play-feature-graphic.png` (required).
- **App icon:** a 512×512 PNG (you can downscale `mobile/assets/icon.png`).
- **Phone screenshots:** minimum 2 (see §F).

### D6. Service account for future automated submits
So releases 2+ can use `eas submit`:
1. Google Cloud Console → enable **Google Play Android Developer API** → create a **service
   account** → **Keys → add JSON key**, download it. **Do not commit it** (it's already
   covered — keep it outside the repo or add to `.gitignore`).
2. Play Console → **Users and permissions → Invite** the service account's `...iam.gserviceaccount.com`
   email; grant **release to testing tracks** + **release to production**.
3. Reference it in `mobile/eas.json` under `submit.production.android.serviceAccountKeyPath`,
   or upload it to EAS credentials. Then `eas submit --profile production --platform android`
   works for every future release.

### D7. Apply for production + go live
Around **day 15–16** (≥12 testers opted in ≥14 continuous days, all App content green):
Play Console **Dashboard → Apply for production access** → fill the questionnaire honestly
(how many testers, how recruited, feedback). Manual review ≈ a few days to ~7. On approval,
**promote** the tested build to Production (or `eas submit` with `track: production`) → **Start
rollout**. Live at `https://play.google.com/store/apps/details?id=com.cert900.app`.

---

## Phase E — Apple App Store (do this during the Android 14-day wait) **(you)**

### E1. One-time credentials
- App Store Connect → **Users and Access → Integrations → App Store Connect API** → generate a
  key (role **App Manager**). **Download the `.p8` once** (unrepeatable); record **Key ID** +
  **Issuer ID**. This lets `eas submit` upload headlessly (no 2FA).
- Confirm **Agreements, Tax, and Banking** shows the **Free Apps** agreement **Active** (a
  pending agreement blocks release even for free apps).

### E2. Create the app record
App Store Connect → **Apps → + New App**: platform **iOS**, name `cert900: CompTIA Practice`,
primary language English (US), **Bundle ID = com.cert900.app** (appears because EAS registered
it during the Phase C build), SKU e.g. `cert900-ios-001`. **App Information → Primary Category
= Education.** Note the numeric **Apple ID** (App Information → General) for `eas.json`.

### E3. Wire submit credentials, then submit to TestFlight
Add to `mobile/eas.json` under `submit.production.ios`: `ascApiKeyPath`, `ascApiKeyIssuerId`,
`ascApiKeyId` (from E1) and `ascAppId` (from E2). Then:
```powershell
eas submit --profile production --platform ios --latest
```
The build lands in **TestFlight** (Processing ~5–30 min). Add your own Apple ID as an
**internal tester** (up to 100, instant, no review) and test cert900 on your iPhone.
`usesNonExemptEncryption: false` is already set, so there's no compliance prompt.

### E4. Fill the listing
Two options:
- **Automated (Apple only):** `eas metadata:push` reads `mobile/store.config.json` (already
  filled) and pushes name/subtitle/description/keywords/promo text/URLs/categories. Requires
  the app record (E2) + a processed build (E3) first. It's a **beta** feature — if `push`
  errors, run `eas metadata:pull` once to reconcile the schema, or just fill the fields in the
  ASC web UI from [`store-listing-copy.md`](./store-listing-copy.md).
- **Manual:** paste from [`store-listing-copy.md`](./store-listing-copy.md).

### E5. Privacy, age rating, pricing
- **App Privacy:** collection **Yes** → **Email Address** (App Functionality, Linked, **not**
  tracking) + **User ID** (App Functionality, Linked, not tracking). No ads, **no tracking**,
  no IDFA, no ATT prompt. Privacy policy URL `https://cert900.com/privacy`. (Anonymous local
  progress is not "collected.")
- **Age Rating** (new 2026 questionnaire — required): answer all None/No → **4+**. Video links
  open in the system browser (`Linking`), so "unrestricted web access" = No.
- **Pricing and Availability:** **Free**, all countries.

### E6. Submit for review
Attach the processed build, confirm all green (≥1 **6.9" iPhone** screenshot set — §F —
description, keywords, support URL, privacy URL, App Privacy, age rating, category, pricing).
**App Review Information:** contact + a note that *all content is usable without signing in*.
Choose **Manual release**. **Add for Review → Submit.** Review ≈ **24–48h** (plan 1–3 days).
On approval, click **Release**.

---

## Phase F — screenshots (both stores need these) **(you — needs a device)**
Capture on a phone or emulator/simulator running a **preview/production** build (or Expo Go):
- **Apple:** **6.9" iPhone** is the required set. Any one of these portrait pixel sizes:
  **1290×2796**, 1260×2736, or 1320×2868 (e.g., iPhone 16 Pro Max / 15 Pro Max). Upload one
  6.9" set and Apple auto-scales the rest. 1–10 shots, **no transparency**. (No iPad set needed
  — `supportsTablet` is false.)
- **Google Play:** **2–8 phone screenshots**, 16:9 or 9:16, each side 320–3840 px.
- Good shots: the **Home** (exam picker) and **Drill** (question + graded answer) screens. Use
  captions from [`store-listing-copy.md`](./store-listing-copy.md).

> Tip: iOS Simulator (needs a Mac) or a physical iPhone gives exact 6.9" pixels; on Windows,
> a physical iPhone 15/16 Pro Max screenshot is simplest. Android: any phone or the emulator.

---

## Ongoing
- **JS-only changes** (copy, logic, styling) can ship over-the-air without re-review via **EAS
  Update** (`npx expo install expo-updates`, then `eas update --branch production -m "..."`).
  The `production` channel is already in `eas.json`.
- **Native changes** (new native module, SDK bump, permission/config change) need a new
  `eas build` + store submission.
- Bump `version` in `app.json` per release; the production profile auto-increments build numbers.

## Command cheat-sheet
```powershell
cd mobile
eas login
eas init                                                   # commit app.json after
eas build   --profile production --platform android        # -> .aab (manual first Play upload)
eas build   --profile production --platform ios            # -> TestFlight-ready .ipa
eas submit  --profile production --platform ios --latest   # iOS: works first time
eas metadata:push                                          # iOS listing text (beta, optional)
eas submit  --profile production --platform android        # Android: only AFTER first manual upload + service account
```

## Verified facts & caveats (from July 2026 docs)
- **Play: 12 testers / 14 continuous days** for personal accounts created after Nov 13, 2023
  (was 20; reduced Dec 11, 2024). Verify on Google's support page the week you start.
- **Play first AAB upload must be manual**; `eas submit` works from release 2 onward.
- **Apple icon must have no alpha** (done). **6.9" iPhone screenshots** are the required set.
- **`eas metadata`** is Apple-only and beta — treat a failed `push` as "fill it in the UI once,"
  not a blocker.
- **Feature graphic** and screenshots must have **no transparency**.
- A few console checkbox labels shift over time; when a label doesn't match exactly, pick the
  option matching the described intent.
