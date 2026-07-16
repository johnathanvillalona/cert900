# Mobile App Roadmap — cert900 companion (Expo / React Native)

> Status: **scaffold built.** Phase 0 (backend) is done and the Expo app scaffold in
> [`mobile/`](../mobile) bundles and runs on Expo Go — see `mobile/README.md`. Remaining:
> native Google OAuth config, EAS builds + store submission, and native PBQ simulations.

## Built so far (this pass)

- **Backend is mobile-ready.** `worker/auth.ts` now runs the Better Auth `expo()` plugin and
  trusts the `cert900://` app scheme (plus `exp://` in dev). The mobile data path —
  `/api/progress` authenticated with the session cookie the Expo client captures
  (`getCookie()`) — is verified end-to-end with curl (empty GET → PUT → GET round-trip → 401
  without auth). No CORS was needed: React Native's fetch is not subject to browser CORS, and
  the app targets the apex host directly. (A Bearer plugin was evaluated and dropped — the
  cookie path is the documented, working Expo pattern.)
- **App scaffold** in `mobile/`: Expo SDK 57 / React Native, `cert900` scheme,
  `com.cert900.app` bundle id. Runs a 10-question multiple-choice drill offline, persists
  progress on-device (AsyncStorage, same `comptia-trainer-v1` shape), and reuses the web
  engine/sync/data. Sign-in + sync are wired (`@better-auth/expo` + SecureStore); Google
  sign-in needs the native OAuth client configured to complete (see `mobile/README.md`).
- **Code reuse:** the app imports `@/lib/engine`, `@/lib/sync`, `@/lib/progress`, and `@/data`
  from a build-time copy of `../src/{lib,data}` (`mobile/scripts/sync-shared.js` → `vendor/`).
  Direct `../src` imports fail because Metro's Windows crawler can't hash a sibling watchFolder
  under this repo's parenthesized path; vendoring keeps `../src` the single source of truth.

---

> Original plan of record below (kept for the phases not yet done).

## 1. Goal & approach

Ship a native **iOS + Android** app, built with **Expo / React Native (TypeScript)**, that
lets a user drill CompTIA questions on their phone and keep progress in sync with the web
app. Google sign-in is what links a device to an account; anonymous use stays local-only,
exactly like the web.

Why Expo/React Native: it lets us reuse the web app's TypeScript directly — the progress
model, the sync/merge algorithm, and the question banks are plain TS with no DOM
dependency, so the hard-won data logic ships to mobile unchanged. The only parts that must
be rebuilt natively are the UI and the PBQ simulations.

**Guiding principle:** the backend is the source of truth for the sync *contract*. Reuse it;
change it as little as possible; keep all last-writer-wins logic on the client (as it is
today).

## 2. What is reusable as-is

These web modules are DOM-free and portable to React Native with little or no change:

- **Progress model & types** — [`src/lib/progress.ts`](../src/lib/progress.ts).
  `ExamProgress { topics, exams, seen, sessions? }`, `TopicStat { c, t }`,
  `ProgressAll = Record<examId, ExamProgress>`. Storage keys `comptia-trainer-v1` (the blob)
  and `comptia-trainer-updated-at` (the per-exam timestamp map, kept separate and *not* part
  of the blob). On device, swap `localStorage` for AsyncStorage/MMKV behind the same
  read/write helpers; the shapes and validation (`validateProgressAll`, `isExamProgress`)
  carry over verbatim.
- **Merge algorithm** — [`src/lib/sync.ts`](../src/lib/sync.ts) `mergeCloudLocal()`.
  Last-writer-wins **per exam** (whole-blob replacement, no field-level merge); cloud wins on
  ties and whenever there is no local timestamp (fresh-device rule). The `CloudProgress`
  (`{ [examId]: { data, updatedAt } }`) and `pushExam(examId, data, updatedAt)` wire shapes
  are the mobile client's contract too. `mergeCloudLocal` is unit-tested
  ([`src/lib/sync.test.ts`](../src/lib/sync.test.ts)) — those tests should move into the
  shared package so both platforms are covered by one suite.
- **Sync lifecycle to port** — [`src/hooks/useProgress.ts`](../src/hooks/useProgress.ts).
  On sign-in: `fetchCloud()` → `mergeCloudLocal()` → upload the `toUpload` set. On each
  answer: mark the exam dirty, **2s debounce**, then per-exam `pushExam()`. Flush in-flight
  writes on `pagehide`. On mobile, replace `pagehide` with `AppState` background/inactive
  events; keep the debounce + dirty-set discipline (it's what prevents multi-device clobber).
- **Question banks & engine** — [`src/data/*`](../src/data) and
  [`src/lib/engine.ts`](../src/lib/engine.ts) (adaptive selection, PBQ scoring, 100–900
  scale) are pure TS and reusable. `qotd.ts`, `stats.ts` likewise.
- **API contract** — `GET/PUT/DELETE /api/progress`
  ([`worker/index.ts`](../worker/index.ts) `handleProgress`). GET returns `CloudProgress`;
  PUT upserts one exam blob (server does a **blind upsert** — no timestamp comparison — and
  caps the serialized blob at **512 KB/exam** → 413); DELETE wipes all of a user's exams.
  Everything under `/api/progress` requires a valid session.

## 3. The blocker: the API is not mobile-ready yet

The data contract is clean, but **auth is browser-shaped**:

- **Cookie-based sessions.** The worker authenticates every `/api/progress` call by reading
  the Better Auth **session cookie** from request headers
  ([`worker/auth.ts`](../worker/auth.ts), [`worker/index.ts`](../worker/index.ts)); the web
  client sends `credentials: "include"`. There is **no bearer-token path**. A native HTTP
  client has no shared browser cookie jar, so it cannot authenticate today.
- **Browser-redirect Google OAuth.** `signIn.social({ provider: "google" })`
  ([`src/lib/auth-client.ts`](../src/lib/auth-client.ts), `AccountMenu.tsx`) assumes a
  full-page browser redirect back to the web origin. Native needs a system-browser /
  `expo-auth-session` flow with a deep-link callback.
- **No CORS.** There are zero `Access-Control-*` headers in `worker/`; the web app never
  needed them (same origin).
- **Empty `trustedOrigins` in production** and a **canonical-host 301 redirect** that bounces
  anything other than the apex `cert900.com`. Mobile must call `https://cert900.com` directly
  and any new callback origin/scheme must be added to `trustedOrigins`.

Resolving auth is Phase 0 and gates everything else.

## 4. Phase 0 — make the backend mobile-ready (prerequisite) — ✅ DONE

What actually shipped (differs slightly from the original sketch below it):

- Added the Better Auth **`expo()` plugin** and the `cert900://` scheme (+ dev `exp://`) to
  `trustedOrigins` in `worker/auth.ts`.
- **No CORS added, no Bearer plugin.** React Native's fetch isn't subject to browser CORS, so
  the data path just replays the session **cookie** the Expo client captured
  (`authClient.getCookie()` → `Cookie` header), which the existing `getSession` reads. A Bearer
  plugin was tried; it didn't authenticate through the direct `getSession` call and the cookie
  path is the documented Expo pattern, so it was dropped.
- Session persisted on device with **Expo SecureStore**; the app targets the **apex host**.

**Verified:** with a local `wrangler dev`, sign-up → capture cookie → `GET /api/progress` (200,
empty) → `PUT` → `GET` (returns the exam + `updatedAt`) → unauth `GET` (401). Web build + 62
tests still green.

**Remaining user step:** register a **native Google OAuth** client (iOS + Android) for
`com.cert900.app` in Google Cloud Console so `signIn.social` completes on device. Server side is
already done.

## 5. Phase 1 — shared core package

Extract the reusable TS (Section 2) into a package both web and app import, so sync logic
never forks:

- Start with `progress.ts`, `sync.ts`, `data/types.ts`, and the question banks; add
  `engine.ts`, `qotd.ts`, `stats.ts` as they're needed by app screens.
- Abstract the one platform seam — storage — behind a tiny interface (`get/set/remove`) so
  web binds `localStorage` and app binds SecureStore/MMKV.
- **Open decision: monorepo vs separate repo.** Recommendation: a workspaces monorepo
  (`packages/core`, `apps/web`, `apps/mobile`) so the shared suite (including
  `sync.test.ts`) guards both platforms in one CI. Record the decision here once made.

## 6. Phases 2–4 — the app itself

- **Phase 2 — shell, auth, offline store.** Expo app scaffold, navigation, theme, the
  SecureStore token store, and the ported sync lifecycle (Section 2) driven by `AppState`
  events. Deliverable: sign in, pull cloud progress, drill a plain multiple-choice set
  offline, and see it sync to the web.
- **Phase 3 — quiz + PBQ simulations.** The MC quiz is a straightforward RN rebuild. **PBQs
  are the largest effort:** the web sims are DOM/SVG/View-Transition based
  ([`src/components/pbq-sims.tsx`](../src/components/pbq-sims.tsx),
  [`pbq-art.tsx`](../src/components/pbq-art.tsx)) across six interaction kinds — match, order,
  terminal, config, hotspot, dragconnect — and must be reimplemented with native
  gesture/SVG primitives. The **scoring** (`engine.ts`, partial credit) is reused unchanged;
  only the interaction layer is new. Since PBQs are the product's differentiator, budget the
  most design/QA time here.
- **Phase 4 — polish & ship.** Push notifications (study reminders / streaks), app icons and
  store assets, and App Store / Play Store submission.

## 7. Risks & decisions to carry forward

- **Concurrent-edit loss.** LWW-per-exam means two devices editing the *same* exam
  concurrently lose one side's changes — this is already true on web and is accepted; the app
  must keep the same debounce/dirty discipline to minimize the window. Field-level merge is
  out of scope unless it becomes a real complaint.
- **Native PBQ rebuild** is the schedule risk — plan it as its own milestone with design
  review, don't fold it into "the quiz screen."
- **Account deletion is client-orchestrated** (`DELETE /api/progress`, then Better Auth
  `deleteUser()` — see `AccountMenu.tsx`). The app must replicate **both** steps, or a
  "deleted" account still leaves progress rows.
- **Content parity.** Question banks live in the shared package; a content edit must ship to
  both platforms together (mobile bundles the banks, so an app release is required to pick up
  new questions — decide whether banks stay bundled or move to a fetched manifest later).
- **Secrets on device:** tokens in SecureStore only; never log them.
