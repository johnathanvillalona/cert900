# cert900 mobile (Expo / React Native)

Companion app for [cert900.com](https://cert900.com). This is the first scaffold:
multiple-choice drills that work offline today, progress saved on-device, and the
sync + Google sign-in wiring in place against the same Cloudflare Worker + D1
backend the web app uses.

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

- **Pick an exam** (A+ Core 1 / Core 2, Network+) and run a 10-question drill.
- **Adaptive selection + scoring** use the exact same engine as the web app
  (`@/lib/engine`), so weak topics surface more often.
- **Progress persists** on the device (AsyncStorage) with the same
  `comptia-trainer-v1` shape as the web, and missed topics link to the
  Professor Messer video.
- **Sync + sign-in are wired** (`@better-auth/expo` + SecureStore). The data path
  (`/api/progress` with the session cookie) is verified end-to-end.

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
  App.tsx              root: progress provider + Home/Drill switch
  src/
    config.ts          API base URL + app scheme
    auth.ts            Better Auth Expo client (SecureStore session)
    api.ts             /api/progress transport (cookie from getCookie())
    storage.ts         AsyncStorage-backed progress persistence
    progress-store.ts  sync lifecycle hook (port of the web useProgress)
    ui.tsx             shared button/pill
    screens/
      HomeScreen.tsx   exam picker, sign-in, sync status
      DrillScreen.tsx  MC drill + per-set summary
  scripts/sync-shared.js
  vendor/              generated copy of ../src/{lib,data}
```

## Next

EAS build config + store submission, then native PBQ simulations. See
`../docs/mobile-app-roadmap.md`.
