# CompTIA Practice Trainer v2 — Project Context

## What this is
A free practice-exam platform for **seven certifications** - CompTIA A+ Core 1
(220-1201), A+ Core 2 (220-1202), Network+ (N10-009), and Security+ (SY0-701)
with Messer videos and PBQs; AWS AI Practitioner (AIF-C01) and Cloud
Practitioner (CLF-C02) with freeCodeCamp chapter-timestamp videos; Azure
Fundamentals (AZ-900) with John Savill per-topic videos. Security+ scale.pass
= 750 (its real cut score); SY0-701 targeted because SY0-801 doesn't reach GA
until ~Nov 2026 and 701 stays valid into 2027. Vendor-native formats per vendors.ts VENDOR_FORMATS
(AWS: ordering/matching all-or-nothing weight-1 interleaved; Azure: drag-and-
drop/build-list, 45-min fundamentals sims (Microsoft Learn 2026 duration; the
85-min figure was pre-2021); CompTIA: PBQs, partial credit, 2x, fronted).
CompTIA scale.pass is per-exam REAL pass lines: Core 1 675, Core 2 700,
N10-009 720. AI-900 NOT built: Microsoft retired it Apr 2026 (AI-901
deferred until good free resources exist - user decision 2026-07-19).
Content pipeline: author agents (anti-test-wiseness rules) -> exam-assemble
-> add-content -> adversarial verify workflow -> fixes. All banks fully
refuter-verified. Anti-tell lint: `node tools/content-lint.mjs` (long-answer,
lone-parenthetical acronym, near-dupe stems, config freebies) must report 0
flags; `tools/apply-fixes.mjs` merges agent fix batches by question id.
Answer randomization contract: MC options shuffle per session (optOrder),
match dropdowns shuffle via choiceOrder, order items start deranged
(engine `shuffledIndices` never returns identity), config panels open with
>=2 fields needing work (decoy keep-as-is fields allowed, data.test rule). PBQs span six interaction kinds: match, order, and
CompTIA-simulation styles **terminal** (CLI tasks with regex-accepted commands),
**config** (device settings panels), **hotspot** (network-diagram selection),
**dragconnect** (photoreal "bench": Wikimedia-Commons photo scenes + connector
thumbnails in `public/pbq/` with attribution in `public/pbq/CREDITS.md`
(footer "Photo credits" link is REQUIRED by the CC licenses); registry
`src/components/pbq-images.ts`; bench view in `pbq-sims.tsx` with
always-visible labeled targets + tap-or-drag; zone x/y/w/h are 0-100 x 0-H
coords over the photo, H = 100*imgH/imgW; SVG `pbq-art.tsx` Glyph/Scene kept
as fallback for glyphs without photos, e.g. shield). Zone labels must name
the LOCATION without leaking the pairing answer. Landing hero shows a
deterministic **question of the day** (`src/lib/qotd.ts`, rotates midnight UTC). All exam versions current as of 2026. Every question
links to its Professor Messer video.

**Live**: https://cert900.com (Cloudflare Registrar, same account; workers.dev
URL 301s here; www redirects to apex via worker CANONICAL_HOST logic)
**Repo**: private GitHub `johnathanvillalona/comptia-practice-trainer`. Commits
must use the GitHub noreply email (set in local git config).

## Stack
React 19 + Vite 7 + TypeScript + Tailwind v4 + shadcn (radix-vega style), deployed
as a **Cloudflare Worker with static assets**: `worker/index.ts` serves `/api/*`
(Better Auth at `/api/auth/*`, progress sync at `/api/progress`, anonymous
question reports at `/api/report`) and falls through to `dist/` assets (SPA
mode). D1 (`comptia-trainer`) stores auth + synced progress + reports.
Every response gets security headers (HSTS 1y incl. subdomains, nosniff,
X-Frame DENY, Referrer-Policy, Permissions-Policy; CSP on HTML only -
allows self + inline scripts + static.cloudflareinsights.com; update CSP if
index.html gains external resources). http->https 301 reads CF-Visitor, NOT
url.protocol (wrangler dev simulates the route host and would loop).

## Layout
- `src/data/` — question banks as typed modules (`220-1201.ts`, `220-1202.ts`,
  `n10-009.ts`, `sy0-701.ts`, `types.ts`, `index.ts`, `vendors.ts`). **These are the source
  of truth now**; edit them directly for content work. `legacy/index.html` is
  the frozen v1 app (was the extraction source; don't grow it). **index.ts is
  hand-maintained — NEVER re-run tools/extract-data.mjs (retired); it would
  clobber non-CompTIA exams.** Multi-vendor platform (2026-07-18): ExamDef
  carries `vendor` ("comptia"|"aws"|"azure") + `scale` {max, pass} (CompTIA
  900/700; AWS/Azure exams will use 1000/700); Question carries optional
  `as?: number[]` for multiple-response ("Choose TWO", graded exact-set
  all-or-nothing via engine `mcCorrect`; `a` must equal one of `as`). Video
  URL contract is per-vendor (data.test): comptia -> professormesser.com;
  aws/azure -> youtube watch URLs (freeCodeCamp timestamps / John Savill).
  linkcheck v2 probes YouTube via oEmbed (dead videos 404 there). Exams nav =
  `ExamsMenu` (vendor-grouped dropdown, both headers; trigger keeps the
  `switch-exam` testid, items `exams-item-{id}`).
- `src/lib/` — `engine.ts` (adaptive selection, PBQ scoring, 900-scale),
  `progress.ts` (localStorage, key `comptia-trainer-v1`, legacy migration),
  `sync.ts` (cloud merge rules), `stats.ts` (dashboard aggregations), `auth-client.ts`.
- `src/hooks/` — `useProgress` (store + cloud sync), `useQuizSession` (reducer),
  `useTheme` (`trainer-theme`, pre-paint boot script in `index.html`).
- `src/screens/` — Landing (smart hero: new-visitor pitch with a LIVE answerable
  question vs returning-user continue cards + FAQ), ExamPicker, Home, DrillSetup,
  Quiz (MC + PBQ match/order, palette, flags, timer), Results, ProgressScreen
  (stat tiles + charts + mastery map; **lazy-loaded** so recharts stays out of
  the entry chunk), Legal (`Privacy`/`Terms`; deep-linkable at `/privacy` and
  `/terms` via minimal pushState routing in App — the only real URLs besides `/`).
- `worker/` — `index.ts` (router), `auth.ts` (Better Auth config; Google provider;
  email/password ONLY when BETTER_AUTH_URL contains localhost), `schema.sql`.
- Platform pieces: `ErrorBoundary` (wraps App in main.tsx), `SiteFooter`
  (Privacy/Terms/Contact + optional donate link; landing gets `full` disclaimer),
  `ReportButton` (drill/PBQ feedback + exam review; POST `/api/report`,
  20/day/IP + 1k/day global rate limit), `AdSlot` (inert until `ADS.enabled`
  in `src/lib/site.ts`; only placements: Results bottom, Dashboard bottom).
  `src/lib/site.ts` holds SITE_URL/CONTACT_EMAIL/DONATE_URL/ADS.
- `public/` — favicon.svg, PWA manifest + icons, og.png, robots.txt, sitemap.xml,
  IndexNow key file. Icons/og are RENDERED artifacts: regenerate with scratchpad
  `qa/brand-render.js` (dial-9 mark, slate #151b29 + amber #f2b27c). Brand mark
  = the "dial-9": a gauge arc that resolves into the 9 of 900 (the perfect
  CompTIA score). Same path data lives in `public/favicon.svg`,
  `src/components/Wordmark.tsx`, and the render scripts — keep all in sync.
  Mobile icons: scratchpad `qa/mobile-icons.js` -> `mobile/assets/*.png`;
  RN mark in `mobile/src/mark.tsx`. Wordmark = "cert900" with "900" in Geist Mono.
- SEO guides: `src/screens/Guides.tsx` (3 pages: /comptia-a-plus-practice-test,
  /network-plus-practice-test, /comptia-pbq-practice; hook-free so they SSR).
  `tools/prerender.tsx` (runs in `npm run build` via tsx) writes static
  `dist/<slug>.html` (unique title/canonical/FAQPage JSON-LD, real asset tags)
  + `dist/qotd-feed.json` (worker cron input). Guide FAQ/meta live in
  GUIDE_META; footer links to all three on every page.
- `marketing/` — Reddit launch post + reply snippets + Discord/wiki outreach +
  $20 Reddit Ads spec (week 3). Manual channels stay manual: NEVER automate
  Reddit/Discord posting.
- Worker crons (`wrangler.jsonc` triggers + `worker/social.ts`): daily 14:30
  UTC QOTD post to X (OAuth1 HMAC-SHA1) + Bluesky; Monday 15:00 UTC Reddit
  lead scan (app-only OAuth, read-only -> D1 `leads`) + IndexNow ping. All
  platform secrets optional; unset = graceful skip. Leads:
  `npx wrangler d1 execute comptia-trainer --remote --command "SELECT subreddit, title, url FROM leads ORDER BY created_at DESC LIMIT 20"`

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
- **Motion system** (emil-design-eng + improve-animations skills; CSS-only, no
  motion lib): tokens `--ease-out-strong`/`--ease-in-out-strong` (Tailwind
  `ease-out-strong` etc.); `.pressable` (scale .98 @160ms), `.enter-fade-rise`
  (feedback panels, @starting-style), `.stagger-item` (--i * 40ms),
  `.verdict-pop/.verdict-line/.bar-fill/.ring-pulse` (results reveal), PBQ
  reorder via View Transitions (no-op in Firefox). Reduced-motion policy in
  index.css: movement removed, opacity/color kept, spinners exempt. Never
  animate keyboard-triggered actions; UI motion stays under 300ms.
- **Quiz keyboard map**: A-D/1-4 answer, Enter/ArrowRight next, ArrowLeft prev
  (exam), F flag (exam). Hints under the quiz nav; drive-v3 tests these.

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
- Content batch flow: edit `src/data/*.ts` → `npm test` →
  `node tools/content-lint.mjs` (must be 0 flags) → `node tools/linkcheck.js`
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
- Marketing user steps: remote D1 migration for `leads` (schema.sql command),
  X dev account -> 4 secrets (X_API_KEY/SECRET, X_ACCESS_TOKEN/SECRET),
  Bluesky app password -> BSKY_IDENTIFIER + BSKY_APP_PASSWORD, Reddit script
  app -> REDDIT_CLIENT_ID/SECRET (all via `wrangler secret put`; crons skip
  gracefully until set). Google Search Console verify + submit sitemap.
  Post marketing/reddit-launch.md manually. Week 3: marketing/reddit-ads.md
  ($20 cap). OAuth consent screen to Production if not yet done.
- Done 2026-07-14: cert900.com cutover, reports migration, donate link,
  analytics beacon (prod-hostname gated), cert900 wordmark rebrand, SEO
  guides + prerender, worker cron automation scaffold.
- Done 2026-07-19: answer-randomization fixes (match choiceOrder, order
  derangement), landing header Exams+Progress on phones, six-exam copy
  (FAQ/how-it-works/meta/manifest/og), security headers + TLS redirect,
  content-lint + acronym pre-pass + long-answer/dupe sweep across all banks,
  real CompTIA pass lines, AZ-900 45-min timer, mobile drill shuffle +
  MR-question exclusion.
- Done 2026-07-20: Security+ SY0-701 added as the 7th exam (166 original Q +
  8 PBQs: 2 match / 2 order / 2 config hardening panels / 2 network hotspots;
  63 Messer video topics; scale 900/750). Authored via 10 domain-scoped
  agents -> assemble -> add-content -> content-lint (0 tells) -> 8-agent
  refuter verify (0 rejects). Full integration: registry, ExamsMenu (CompTIA
  group), guide /comptia-security-plus-practice-test, sitemap, footer,
  prerender, EXPECTED floor. data.test now enforces anti-tell rules
  (long-answer, lone-parenthetical, near-dupe) on every bank.
- Monetization ladder (decided 2026-07-14): donate link → EthicalAds/Carbon
  single unit → affiliates on Results. AdSlot placements are already scaffolded;
  never add slots inside quiz/landing hero.
- Add content via tools/additions/*.mjs + tools/add-content.mjs (validates
  topics/ids/duplicates, derives id and d automatically).
- Security+ (SY0-701) SHIPPED 2026-07-20. AI-901 still deferred. Future exam
  ideas welcome; the pipeline (scaffold -> author agents -> assemble ->
  add-content -> content-lint -> refuter verify -> integrate) is repeatable.
