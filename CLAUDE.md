# CompTIA Practice Trainer v2 — Project Context

## What this is
A free practice-exam platform for **three CompTIA certifications** — A+ Core 1
(220-1201, 291 Q / 12 PBQs), A+ Core 2 (220-1202, 330 Q / 13 PBQs), Network+
(N10-009, 315 Q / 12 PBQs). All exam versions current as of 2026. Every question
links to its Professor Messer video.

**Live**: https://comptia-practice-trainer.johnathanv16.workers.dev
**Repo**: private GitHub `johnathanvillalona/comptia-practice-trainer`. Commits
must use the GitHub noreply email (set in local git config).

## Stack
React 19 + Vite 7 + TypeScript + Tailwind v4 + shadcn (radix-vega style), deployed
as a **Cloudflare Worker with static assets**: `worker/index.ts` serves `/api/*`
(Better Auth at `/api/auth/*`, progress sync at `/api/progress`) and falls through
to `dist/` assets (SPA mode). D1 (`comptia-trainer`) stores auth + synced progress.

## Layout
- `src/data/` — question banks as typed modules (`220-1201.ts`, `220-1202.ts`,
  `n10-009.ts`, `types.ts`, `index.ts`). **These are the source of truth now**;
  edit them directly for content work. `legacy/index.html` is the frozen v1 app
  (was the extraction source; don't grow it).
- `src/lib/` — `engine.ts` (adaptive selection, PBQ scoring, 900-scale),
  `progress.ts` (localStorage, key `comptia-trainer-v1`, legacy migration),
  `sync.ts` (cloud merge rules), `stats.ts` (dashboard aggregations), `auth-client.ts`.
- `src/hooks/` — `useProgress` (store + cloud sync), `useQuizSession` (reducer),
  `useTheme` (`trainer-theme`, pre-paint boot script in `index.html`).
- `src/screens/` — Landing (smart hero: new-visitor pitch with a LIVE answerable
  question vs returning-user continue cards), ExamPicker, Home, DrillSetup, Quiz
  (MC + PBQ match/order, palette, flags, timer), Results, ProgressScreen (stat
  tiles + charts + mastery map).
- `worker/` — `index.ts` (router), `auth.ts` (Better Auth config; Google provider;
  email/password ONLY when BETTER_AUTH_URL contains localhost), `schema.sql`.

## Commands
- `npm run dev` + `npm run dev:worker` (two terminals; Vite proxies `/api` → :8787)
- `npm run build` — typechecks app + worker, builds `dist/`
- `npm test` — Vitest (55+ tests: data parity, engine, sync merge, stats)
- `node tools/linkcheck.js` — HTTP-checks all video URLs in `src/data` (214/214 OK)
- Local D1: `npx wrangler d1 execute comptia-trainer --local --file=worker/schema.sql`;
  copy `.dev.vars.example` → `.dev.vars` for local auth.

## Design system (approved via ui-ux-pro-max + design-taste-frontend skills)
- Type: **Geist** (display+body), **Geist Mono** (labels, numbers — always
  `tabular-nums`). Self-hosted via fontsource.
- Color: cool slate neutrals; **brand accent = pale orange** (`--primary` fills
  with dark text; `--brand` = text-safe burnt orange in light mode). **Semantic
  tokens are separate**: `--success` green for correct answers, `--destructive`
  red for wrong, sky for exam flags. Never use red/green as chart series; charts
  are single-hue `--chart-1` (validated with the dataviz-skill palette script).
- Both themes; `.dark` class stamped pre-paint; toggle persists to `trainer-theme`.
- Taste-skill rules in force: zero em-dashes in UI strings, eyebrow budget,
  no pure black/white, one CTA label per intent ("Start practicing" / "Continue").

## Auth & sync
- Optional Google sign-in (Better Auth). Anonymous = localStorage only.
- Sync: pull+merge on sign-in (per-exam newest `updatedAt` wins; local-only exams
  upload), debounced push after answers, status in the account menu.
- Secrets (set via `wrangler secret put`): GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
  BETTER_AUTH_SECRET. `BETTER_AUTH_URL` is a plain var in wrangler.jsonc.
- Account deletion removes D1 progress + Better Auth user.

## Conventions / gotchas
- Every question/PBQ topic key MUST exist in its exam's `videos` map (Vitest
  enforces). Answer index `a` must be valid into `o`. `examSplit` sums to 1.0.
- Content batch flow: edit `src/data/*.ts` → `npm test` → `node tools/linkcheck.js`
  (spot-check new slugs) → commit → push (CI deploys).
- Professor Messer slugs: verify against the live course index before adding.
- Progress shape is backward-compatible with v1; never break `comptia-trainer-v1`.
- QA driver: `scratchpad qa/drive-v3.js` pattern (testids are the contract —
  keep `data-testid` attributes stable).

## Deploy
- `npx wrangler deploy` builds nothing — run `npm run build` first.
- Git-connected CI (Workers Builds): build command must be
  `npm ci && npm run build`, deploy `npx wrangler deploy`.
- After deploy, cache-bust when verifying (`?v=` query) — CF edge caches assets.

## Next tasks
- Phase G round 1 done (2026-07-14): banks at 291/330/315 Q, 12/13/12 PBQs.
  Add content via tools/additions/*.mjs + tools/add-content.mjs (validates
  topics/ids/duplicates, derives id and d automatically).
- Consider Security+ (SY0-701) as a fourth exam using the same data shape.
