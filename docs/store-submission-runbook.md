# cert900 mobile — store submission runbook

Steps to get the Expo app in [`mobile/`](../mobile) onto the App Store and Google
Play. Steps marked **(you)** need your accounts/credentials and can't be scripted
here; everything else is already configured in the repo.

## Accounts / costs
- **Apple Developer Program** — $99/year (you have it). Needed for App Store + TestFlight.
- **Google Play Console** — $25 one-time (you have it). Needed for Play.
- **Expo / EAS** — free tier is fine to start. Cloud builds mean **no Mac required**.

## 0. One-time EAS setup **(you)**
```bash
cd mobile
npm install
npx eas-cli login              # create a free Expo account if needed
npx eas-cli init               # creates the project, writes extra.eas.projectId into app.json
```
`eas.json` (build profiles: development / preview / production) is already committed.
Commit the `projectId` change `eas init` makes to app.json.

## 1. Google sign-in — verify on device first
Good news: the app uses a **browser-based** OAuth flow against the deployed worker,
not a native Google SDK. The worker already (a) runs the Better Auth `expo()` plugin
and (b) trusts the `cert900://` scheme (shipped in commit `2e77e91`). Google only ever
sees the existing **web** redirect URI (`https://cert900.com/api/auth/callback/google`),
which is already registered.

So: **test sign-in on your phone via Expo Go first** (`npm start`). It should complete
without any Google Cloud change. Only if Google rejects the redirect do you need to:
- **(you)** Google Cloud Console → your OAuth consent screen is in **Production**.
- **(you)** Confirm `https://cert900.com/api/auth/callback/google` is in the web client's
  Authorized redirect URIs.

(A separate native iOS/Android Google client is **not** required for this flow.)

## 2. Build installable binaries **(you)** — EAS cloud
```bash
# quick internal test builds (APK + iOS simulator/registered device)
npx eas-cli build --profile preview --platform android
npx eas-cli build --profile preview --platform ios

# store-ready builds
npx eas-cli build --profile production --platform android
npx eas-cli build --profile production --platform ios
```
EAS provisions signing automatically (Android keystore, iOS distribution cert +
provisioning profile) — accept the prompts. iOS production requires your Apple
Developer login. Each build returns a download/QR link.

## 3. Store listings **(you)**
Prepare once, reused for both stores:
- **Screenshots** — capture the drill + home screens on a phone (or simulator). Play
  needs phone screenshots; App Store needs 6.7" and 6.1" sizes.
- **Copy** — reuse the web positioning: free CompTIA practice with real PBQ simulations,
  A+ / Network+, no signup. Privacy policy + terms already live at
  `https://cert900.com/privacy` and `/terms` (link them in both consoles).
- **Icon** — the 1024 `mobile/assets/icon.png` (cert900 mark) is the store icon.

## 4. Submit **(you)**
```bash
npx eas-cli submit --profile production --platform android   # needs a Play service-account JSON
npx eas-cli submit --profile production --platform ios       # needs App Store Connect API key / Apple login
```
- **Android:** first submission must be uploaded manually in Play Console to create the
  app entry; after that `eas submit` works. Create a Play **service account** and download
  its JSON for automated submits.
- **iOS:** `eas submit` uploads to App Store Connect; then submit for review there.

## Versioning
`app.json` starts at version `1.0.0`, iOS `buildNumber` `1`, Android `versionCode` `1`.
The production EAS profile has `autoIncrement`, so build numbers bump automatically. Bump
the user-facing `version` in `app.json` for each release.

## What's still app-side before a real v1 (recommended, not blocking)
- Native **PBQ simulations** (the differentiator) — currently MC drills only.
- Exam mode + drill-length options; a small progress/stats screen.
- A branded splash screen (asset exists at `assets/splash-icon.png`).
See [`mobile-app-roadmap.md`](./mobile-app-roadmap.md) for the phased plan.
