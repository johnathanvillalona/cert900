# cert900 mobile (Expo / React Native)

Companion app for [cert900.com](https://cert900.com): all seven certification
banks with timed exams and drills, offline, progress synced across devices
against the same Cloudflare Worker + D1 backend the web app uses.

## Run it (Expo Go)

```bash
cd mobile
npm install
npm start        # runs the vendor sync, then `expo start`
```

Then open the **Expo Go** app on your phone (App Store / Play Store) and scan the
QR code. The app reloads on save. `npm run android` / `npm run ios` target an
emulator/simulator if you have one.

> First run only: `npm install` pulls the Expo SDK (a few minutes).

## What works now

- **All seven exams** — CompTIA A+ Core 1 / Core 2, Network+, Security+; AWS
  Cloud Practitioner and AI Practitioner; Azure Fundamentals.
- **Timed full-exam mode** scored on each exam's real scale and cut line, plus
  short adaptive drills. Multiple-response questions and match/order
  performance-based questions are graded natively.
- **Review-your-misses queue** with spaced repetition, and a **progress screen**
  with a readiness estimate and per-domain accuracy — all on the same shared
  engine as the web (`@/lib/engine`, `@/lib/quiz-session`, `@/lib/stats`,
  `@/lib/review`), so scoring never forks.
- **Progress persists** on the device (AsyncStorage) with the same
  `comptia-trainer-v1` shape as the web, and every question links to its free
  training video.
- **Sign-in + sync** via `@better-auth/expo` + SecureStore: **Google** on both
  platforms, **Sign in with Apple** on iOS. The data path (`/api/progress` with
  the session cookie) is verified end-to-end. Sign-in is optional; anonymous use
  stays fully local, exactly like the web.
- **In-app account deletion** on the Account screen, as both stores require.

## Google sign-in

Sign-in uses a **browser-based** OAuth flow against the deployed worker (not a
native Google SDK): the app opens the system browser to the worker, Google
redirects back to the worker's existing web callback, and the `expo()` plugin
deep-links the session back to `cert900://`. The worker already trusts that
scheme (`worker/auth.ts`), so **it should complete on-device as-is** — test it on
your phone. Google only ever sees the already-registered web redirect URI; no
native client is required. `API_BASE` in `src/config.ts` selects the backend
(defaults to the live worker; use `http://<your-LAN-ip>:8787` for `wrangler dev`).

See [`../docs/store-submission-runbook.md`](../docs/store-submission-runbook.md)
for the full path to the App Store and Google Play (EAS builds, listings, submit).

## How shared code is reused

The app imports the web app's dependency-free logic — the question banks
(`@/data`), the selection/scoring engine (`@/lib/engine`), the merge rules
(`@/lib/sync`), and the progress types (`@/lib/progress`) — via the `@` alias.

Because Metro can't hash files across a sibling folder under this repo's
parenthesized, spaced path, `scripts/sync-shared.js` copies `../src/lib` and
`../src/data` into `mobile/vendor/` (git-ignored) as a prebuild step, and the `@`
alias points there. **`../src` stays the single source of truth** — never edit
`mobile/vendor`. Every `npm start` / `npm run export` / `npm run typecheck`
re-syncs first.

## Layout

```
mobile/
  App.tsx              root: progress provider + React Navigation stack
  src/
    config.ts          API base URL + app scheme
    auth.ts            Better Auth Expo client (SecureStore session)
    apple-auth.tsx     Sign in with Apple (native idToken, iOS-only)
    api.ts             /api/progress transport (cookie from getCookie())
    storage.ts         AsyncStorage-backed progress persistence
    progress-store.ts  sync lifecycle hook (writes the shared foldAnswers)
    navigation.ts      typed stack param list
    ErrorBoundary.tsx  recoverable error screen
    ui.tsx             shared button/pill/brand
    screens/
      HomeScreen.tsx        exam list
      ExamHomeScreen.tsx    per-exam menu (review / drill / exam / progress)
      DrillScreen.tsx       adaptive drill (MC + multiple-response)
      ExamScreen.tsx        timed full exam (+ match/order PBQs)
      ResultsScreen.tsx     scored results, redo-your-misses
      ProgressScreen.tsx    readiness band + per-domain accuracy
      AccountScreen.tsx     sign-in, sync status, account deletion
  scripts/sync-shared.js
  vendor/              generated copy of ../src/{lib,data}
```

## Submitting to the stores

The full ordered path (EAS builds, listings, screenshots, the 12-tester Play
requirement, Apple sign-in secrets) is in
[`../docs/store-submission-runbook.md`](../docs/store-submission-runbook.md) —
its checklist at the top lists everything that is still left to do.
