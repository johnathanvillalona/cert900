# CompTIA Practice Trainer v2 — Project Context

## What this is
A free practice-exam platform for **eleven certifications** - CompTIA A+ Core 1
(220-1201), A+ Core 2 (220-1202), Network+ (N10-009), and Security+ (SY0-701)
with Messer videos and PBQs; **Cisco CCNA 200-301** (new `cisco` vendor) with
Jeremy's IT Lab per-topic "Day N" videos and CLI-sim PBQs; AWS AI Practitioner
(AIF-C01), Cloud Practitioner (CLF-C02), and **Solutions Architect Associate
(SAA-C03)** with freeCodeCamp chapter-timestamp videos; Azure Fundamentals
(AZ-900), **Administrator (AZ-104)**, and **Security, Compliance & Identity
Fundamentals (SC-900)** with John Savill videos. Security+ scale.pass
= 750 (its real cut score); SY0-701 targeted because SY0-801 doesn't reach GA
until ~Nov 2026 and 701 stays valid into 2027. Vendor-native formats per vendors.ts VENDOR_FORMATS
(AWS: ordering/matching all-or-nothing weight-1 interleaved; Azure: drag-and-
drop/build-list, 45-min fundamentals sims (Microsoft Learn 2026 duration; the
85-min figure was pre-2021); CompTIA: PBQs, partial credit, 2x, fronted).
CompTIA scale.pass is per-exam REAL pass lines: Core 1 675, Core 2 700,
N10-009 720. AI-900 NOT built: Microsoft retired it Apr 2026 (AI-901
deferred until good free resources exist - user decision 2026-07-19).
**Bank sizes (2026-07-26)**: 220-1201 348+21, 220-1202 367+21, n10-009 355+20,
sy0-701 433+16, ccna-200-301 328+12, aif-c01 321+16, clf-c02 354+0, saa-c03
304+0, az-900 285+12, sc-900 259+8, az-104 312+12 = **3,804 items** (11 exams,
3,666 Q + 138 PBQs). Gap-fill (2026-07-26) lifted every thin (1-2 Q) sub-
objective in the six pre-2026-07-26 banks to a floor of 4 questions (+277 Q),
adversarially refuter-verified with 0 errors. **clf-c02 AND saa-c03 have zero
interactive items ON PURPOSE** - the real CLF-C02 and SAA-C03 use only MC and
multiple-response (AWS shipped ordering/matching to AI Practitioner and ML
Engineer Associate, not the foundational/associate architect exams). Do not
"fix" either. CCNA sims use the `cisco` VENDOR_FORMATS: terminal/hotspot/order/
match, partial credit, weight-2, fronted (like CompTIA); engine `pbqCredit`
grants partial credit to comptia + cisco.
Content pipeline: author agents (anti-test-wiseness rules, one per exam domain,
briefed with the domain's existing stems) -> `tools/prep-batch.mjs` (checks
EVERY build-failing rule before a bank is touched, since add-content is
all-or-nothing) -> `tools/add-content.mjs` -> `npm test` -> content-lint ->
**`tools/gen-meta.mjs` (mandatory, data.test fails on drift)** -> linkcheck ->
adversarial refuter agents -> `tools/apply-fixes.mjs`. All banks fully
refuter-verified. Topics are added with `tools/add-topics.mjs` (validates the
per-vendor URL contract; run linkcheck after). `tools/replace-pbqs.mjs` swaps
already-merged PBQs by title, since add-content only ever appends.
Anti-tell lint: `node tools/content-lint.mjs` (long-answer,
lone-parenthetical acronym, near-dupe stems, config freebies) must report 0
flags; `tools/apply-fixes.mjs` merges agent fix batches by question id.
**2026-08 audit: the WHOLE corpus is verified** (tools/fixes/audit-2026-08/
REPORT.md): all 3,666 MC + all 138 PBQs through finder -> refuter +
blind-key verification (sample, then cloud sweep, then circle-back sweep).
44 defects fixed total; only 3 were answer-key class (0.08%). The pipeline
(audit-sample.mts complement chunks -> mc-sample-audit workflow ->
apply-fixes -> gen-meta -> test -> lint) is repeatable for future re-audits.
social.ts now shuffles options before posting (stored keys are position-
biased; that post was the one surface rendering stored order).
**Explanations must never name an option by position** ("the second option") -
every runtime path shuffles, so the reference points at a random distractor.
**Stored answer keys must stay positionally unbiased**: authors default to
putting the key first (one batch landed 127/127 at index 0), so run
`tools/debias-answers.mjs <exam> <minId> --apply` after a batch. Nothing leaks
today (web/mobile/QOTD all shuffle) but `worker/social.ts` renders options in
stored order.
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
**Repo**: private GitHub `johnathanvillalona/cert900` (renamed from comptia-practice-trainer 2026-09-05; old URL redirects). Commits
must use the GitHub noreply email (set in local git config).

**Dev machine (since 2026-09-05)**: Ubuntu 24.04, repo at `~/cert900` (moved off
a Windows laptop; the stand-up runbook is `docs/handoff-ubuntu.md`, the script
`docs/handoff/setup-ubuntu.sh`). Publishing keys live in `~/secure` (App Store
Connect TEAM key `AuthKey_AAD22D8LBT.p8`, Play service account
`grimoire-publishing-*.json`, see `docs/store-api-setup.md`); `mobile/eas.json`
points at `./AuthKey_AAD22D8LBT.p8`, a gitignored symlink into `~/secure` - never
copy a key into the tree. Local worker secrets: `.dev.vars` (gitignored). Line
endings are pinned LF by `.gitattributes`; Node 24 via `.nvmrc`.

## Stack

**Monetization readiness, owner-approved 2026-10-21:** AdSense ownership is
verified and review is requested; site approval is still pending. The public `google-adsense-account` meta tag verifies
ownership only; it must not be replaced with an advertising loader during
readiness. `ADVERTISING.enabled` in `src/lib/advertising-policy.ts` remains
false. The owner explicitly paused Grow by
clearing `GROW.siteId`, superseding the earlier Journey continuity instruction
below. No new consent-dependent advertising requests are enabled. A future
ads launch requires separate approval, accurate disclosures, and appropriate
consent handling; Google review submission and production promotion each
require approval. See `docs/adsense-readiness.md`.

React 19 + Vite 7 + TypeScript + Tailwind v4 + shadcn (radix-vega style), deployed
as a **Cloudflare Worker with static assets**: `worker/index.ts` serves `/api/*`
(Better Auth at `/api/auth/*`, progress sync at `/api/progress`, anonymous
question reports at `/api/report`, owner-only triage at `/api/admin/*`,
newsletter at `/api/newsletter/*`) and falls through to `dist/` assets (SPA
mode). D1 (`comptia-trainer`) stores auth + synced progress + reports +
subscribers.
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
  `sync.ts` (cloud merge rules), `stats.ts` (dashboard aggregations +
  `readiness()`), `review.ts` (Leitner), `auth-client.ts`.
  **Per-question history** (2026-07-20): `ExamProgress.q?` maps question id ->
  `[right, wrong, lastDay, box]`, additive and optional exactly like
  `sessions?` (worker `isReasonableProgress` and `isExamProgress` are
  presence-checks, so old blobs keep working and the field survives sync
  untouched). Boxes 1-5, intervals `[_,0,1,3,7,21]` days INDEXED BY BOX. A
  miss drops to box 1; a question leaves the review queue at box 3 (two
  correct since the last miss). Readers must tolerate short tuples
  (`s[3] ?? 1`). Written only by `store.recordAnswers()`, which folds a whole
  batch in ONE update - finishing a 90-question exam used to re-serialize the
  entire blob 90 times. MC only; PBQs have no numeric id.
  **Readiness** = `examSplit`-weighted domain accuracy over *covered* domains,
  RENORMALIZED not zero-filled (an unstudied domain is not a failed one),
  through a Wilson interval (z=1.2816) and `scaledScore`. Gated at 25 answers
  and 50% coverage. Always render the BAND, never a point; never say "ready",
  "will pass", or "guaranteed".
- `src/hooks/` — `useProgress` (store + cloud sync), `useQuizSession` (reducer),
  `useTheme` (`trainer-theme`, pre-paint boot script in `index.html`).
- `src/screens/` — Landing (smart hero: new-visitor pitch with a LIVE answerable
  question vs returning-user continue cards + FAQ), ExamPicker, Home, DrillSetup,
  Quiz (MC + PBQ match/order, palette, flags, timer), Results, ProgressScreen
  (stat tiles + charts + mastery map; **lazy-loaded** so recharts stays out of
  the entry chunk), Legal (`Privacy`/`Terms`; deep-linkable at `/privacy` and
  `/terms` via minimal pushState routing in App — the only real URLs besides `/`).
  **Study plans (2026-08-03)**: `/plan` is the hub (`Plans.tsx`) — it lists
  active plans via the shared `components/PlanCard.tsx` and renders
  `PlanWizard.tsx` when you have none or press "New study plan"; the
  week-by-week plan itself stays at `/exam/:id/plan` (`StudyPlan.tsx`).
  A plan is **active when `examDate` OR `planStartedOn` is set** (`activePlans`
  in `lib/plan.ts`), because the wizard's no-date path would otherwise leave no
  trace. `buildPlan` takes a structural `PlanExam` (like `readiness`), so
  EXAM_META feeds it and the hub never loads a bank. `Dashboard` shows the same
  cards under "Plans in progress" and its zero-progress early return yields to
  an active plan, exactly as it already yields to a passed exam.
- `worker/` — `index.ts` (router), `auth.ts` (Better Auth config; Google provider;
  email/password ONLY when BETTER_AUTH_URL contains localhost), `schema.sql`.
- Platform pieces: `ErrorBoundary` (wraps App in main.tsx), `SiteFooter`
  (Privacy/Terms/Contact + optional donate link; landing gets `full` disclaimer),
  `ReportButton` (drill/PBQ feedback + exam review; POST `/api/report`,
  20/day/IP + 1k/day global rate limit), `AdSlot` (static-guide-only, disabled manual AdSense infrastructure; see
  `docs/monetization-phase-b.md`; no Dashboard/Results advertising loader).
  `src/lib/site.ts` holds SITE_URL/CONTACT_EMAIL/DONATE_URL.
- `public/` — favicon.svg, PWA manifest + icons, og.png, robots.txt, sitemap.xml,
  IndexNow key file. Icons/og are RENDERED artifacts (dial-9 mark, slate
  #151b29 + amber #f2b27c); their scratchpad renderer `qa/brand-render.js` was
  LOST in the 2026-09-05 temp cleanup, so re-author one from `public/favicon.svg`
  when they next need regenerating. Brand mark = the "dial-9": a gauge arc that
  resolves into the 9 of 900 (the perfect CompTIA score). Same path data lives
  in `public/favicon.svg` and `src/components/Wordmark.tsx` — keep both in sync.
  Mobile icons `mobile/assets/*.png` (renderer `qa/mobile-icons.js` also lost;
  RN mark in `mobile/src/mark.tsx`). Wordmark = "cert900" with "900" in Geist Mono.
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

**Educational content:** follow `docs/educational-content-standard.md` for guides,
lessons, diagrams, Study Hub instruction, checks, walkthroughs and future course,
video/animation script and transcript work. Preserve coverage while teaching
beginners with short explanations, useful visuals and optional technical depth.

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
  (exam), F flag (exam). Hints under the quiz nav (the drive-v3 QA script that
  exercised these was lost with the scratchpad, see Conventions).

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
- **PBQ view state must never outlive its question.** All six PBQ views carry
  `key={session.idx}` (Quiz.tsx PBQView) and any `<Select>` bound to an
  unanswered value uses `""`, NEVER `undefined` — `undefined` makes Radix
  uncontrolled, so its internal selection persists into the next question and
  displays an answer the reducer never recorded (shipped bug, fixed cf147f9:
  match rows looked correctly answered but graded wrong). `src/screens/
  pbq-bindings.test.ts` locks both invariants; the Playwright proof
  `qa/match-repro.js` (answer every match PBQ by visible label, assert 100%)
  was lost with the scratchpad on 2026-09-05 — re-author it on demand.
- Content batch flow: edit `src/data/*.ts` → `npm test` →
  `node tools/content-lint.mjs` (must be 0 flags) → `node tools/linkcheck.js`
  (spot-check new slugs) → commit → push (CI deploys).
- Professor Messer slugs: verify against the live course index before adding.
- Progress shape is backward-compatible with v1; never break `comptia-trainer-v1`.
- QA drivers were Playwright scripts in the session scratchpad (`qa/drive-v3.js`,
  `qa/match-repro.js`, `qa/og-guides.js`, `qa/brand-render.js`,
  `qa/mobile-icons.js`); ALL were lost in the 2026-09-05 temp cleanup. Testids
  remain the contract — keep `data-testid` attributes stable and re-author a
  driver on demand.

## Deploy
- `npx wrangler deploy` builds nothing — run `npm run build` first.
- Git-connected CI (Workers Builds): build command must be
  `npm ci && npm run build`, deploy `npx wrangler deploy`.
- After deploy, cache-bust when verifying (`?v=` query) — CF edge caches assets.

## Admin, monetization, newsletter (2026-08-01)
- **`/admin`** (lazy screen, kept out of `APP_PATHS` but in `KNOWN_PATHS` so it
  resolves) lists reported questions grouped by `(exam_id, ref)`. Gate is
  `ADMIN_EMAILS` (wrangler var) **intersected with `emailVerified`** — passwords
  are on with `requireEmailVerification:false`, so the allowlist alone could be
  claimed by signing up for an unclaimed allowlisted address. Non-admins get
  **404, not 403**. `ip_hash` is never selected. `reports.resolved_at` added.
- `handleReport` now validates `examId` against `EXAM_IDS` and `ref` against
  `q:<id>` / `pbq:<title>`. **This closed a real hole**: `examId:"__auth"` used
  to slip past the rate limiter, which excludes exactly those sentinel rows.
- Monetization: donate ask is a real block **only on a passing exam score** (the
  aha moment); everywhere else stays the quiet line. `DONATE.kofi` beats
  `DONATE.bmc` when set (0% vs 5% on tips). `practiceOffer()` (MeasureUp for
  comptia/azure, Tutorials Dojo for aws) **outranks** the Amazon book and only
  one ever renders. Cisco maps to nothing on purpose. All inert until configured.
  **CompTIA has no affiliate program and its voucher terms forbid resale** — do
  not go looking. The later owner-approved AdSense plan supersedes the
  EthicalAds/Journey direction: advertising remains disabled in
  `advertising-policy.ts`; Grow is paused. See `docs/monetization-phase-b.md`.
- **Guides are STATIC DOCUMENTS (2026-08-01)**: the 16 prerendered pages ship
  zero JS (prerender strips the module script), carry their own header/footer
  via `GuideShell`, and the SPA no longer renders them at all — `openPath`
  falls back to `location.assign` for known-but-not-SPA paths. CLS went 0.35→0.
  `GuideResources` (affiliate block, inline FTC disclosure, `rel=sponsored`)
  renders on exam guides only — never pbq/hub/scores/order/ccna (tests pin it).
  `npm run dev` cannot serve guide routes; use `npm run build && npx vite preview`.
- **Journey by Mediavine on-ramp (decided 2026-08-01)**: `GROW.siteId` in
  site.ts (empty = inert) injects the Grow script via prerender into guide
  HTML plus a hostname+pathname==="/"-gated copy in dist/index.html (added
  2026-08-02: Grow's install verification fetches the domain root). Three
  CSPs in the worker: guides GUIDE_CSP, "/" HOME_CSP (app CSP + grow.me hosts
  + frame-src; keeps form-action accounts.google.com for the landing's
  sign-in — do NOT reuse GUIDE_CSP there), everything else the strict app CSP
  with no frame-src, keep it that way. Grow survives client-side nav off the
  landing, so index.css hides its widget under `html.spa` (stamped by
  main.tsx; guides ship no JS, so they keep the widget).
  Grow serves no ads and starts Journey's mandatory 30-day clock. **The
  ads-on decision is DEFERRED to ~September and gated on**: rewriting four
  privacy claims in Legal.tsx (lines ~26/61/70/81 — "never sell or share" is
  CPRA-load-bearing), fixing the Results donate copy ("no ads... stays that
  way"), updating marketing/paid-growth.md + this file, saying it proactively
  on Reddit, and confirming guides alone clear 1,000 GA4 sessions. Expected
  net at current traffic is only $7-28/mo (70% share, NET-65, $25 floor).
  Placement then = Mediavine Content Hints substituted in prerender (one hint
  disables ALL auto-placement); GUIDE_CSP (not CSP) becomes the loose policy.
- **Newsletter** (`worker/newsletter.ts`): double opt-in, one token per row
  serving as both confirm and unsubscribe, `List-Unsubscribe` +
  `List-Unsubscribe-Post` headers, GET **and** POST unsubscribe. Signup always
  answers 200 (no enumeration) and will not re-send a pending confirm for an
  hour (anti-mailbomb). `DAILY_CAP = 90` because Resend free is 3,000/mo and
  100/day; the cap logs when it bites. Cron reads the feed once and hands it to
  both `dailySocialPost` and `dailyNewsletter`. Capture renders under the QOTD
  card **after** it is answered, gated on `/api/config` → `newsletter`.
- **`X_*` posting is dead**: the API returns `402 credits depleted` (free tier
  can no longer post). Bluesky works. `allSettled` hid this.
- **Do not run `/__scheduled` locally** unless you mean it: `.dev.vars` carries
  the real BSKY/X secrets, so the cron posts to the live accounts.

## Next tasks
- **Done 2026-07-28 (tester feedback + email auth + SEO depth), 8 commits:**
  copy that states counts is now DERIVED (`src/lib/copy.ts`, guard
  `src/data/copy.test.ts`) after shipping "seven exams / three vendors" at 11
  and 4; QOTD switched from a stride to a per-exam quota (SAA-C03 and AZ-900 had
  drawn ZERO slots) and now serves match/order PBQ days; the daily social post
  no longer captions every exam as CompTIA; **unknown URLs return a real 404 +
  noindex** instead of the SPA shell with 200; `src/data/routes.ts` is the ONE
  route table (sitemap, noscript, footer, IndexNow all derive from it — the
  noscript list had drifted to 9 of 13 guides); mobile got a first-launch
  walkthrough, in-app question reporting, and share-a-result; **email/password
  auth is built but gated on `AUTH_EMAIL_FROM`** (worker/mail.ts via the
  Cloudflare Email Service binding, plus 30/15min per-IP throttling on
  `/api/auth/*`, which previously had none); the store listing is generated
  (`tools/gen-store-listing.mjs`) and pushable via the Play API
  (`tools/play-listing.mjs`); the 13 guides carry 8 real bank questions each
  with Quiz schema and went from ~600 to ~1,311 words; 3 informational pages
  added (16 crawlable pages, 20 sitemap URLs).
  **Guides are lazy-loaded and GUIDE_META lives in `src/data/guide-meta.ts`** —
  importing it from `Guides.tsx` pins the whole guide chunk into the entry bundle.
- **SEO phase 2 (not started):** ~48 programmatic per-domain pages from
  `domains`/`examSplit`/`videos`. Wait until phase 1 is indexed. 783 topic keys
  exist but are too thin at that granularity.
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
- Monetization (as built 2026-07-20): **donate** (Buy Me a Coffee, live in
  footer + a soft nudge on Results); **affiliate** study-guide link on Results
  (`src/lib/affiliate.ts` + `StudyGuideLink.tsx`, Amazon Associates, inert until
  `AFFILIATE.amazonTag` set in `site.ts`, FTC disclosure in footer + block);
  Historical EthicalAds Dashboard support was removed in Monetization Phase B;
  no learning-application advertising loader remains. Disabled manual AdSense
  infrastructure is restricted to one allowlisted static guide.
- Add content via tools/additions/*.mjs + tools/add-content.mjs (validates
  topics/ids/duplicates, derives id and d automatically).
- Security+ (SY0-701) SHIPPED 2026-07-20. AI-901 still deferred. Future exam
  ideas welcome; the pipeline (scaffold -> author agents -> assemble ->
  add-content -> content-lint -> refuter verify -> integrate) is repeatable.
- Done 2026-07-20 (bank expansion): the four thin banks roughly doubled to
  ~2,270 items total. Topic maps grew first (sy0-701 63->120 from unused Messer
  lessons, az-900 41->62 from the Savill playlist, clf-c02 27->71 and aif-c01
  33->61 as sub-topics anchored to freeCodeCamp chapter starts - both AWS
  courses are chapter-exhausted, so do NOT go hunting for a second channel).
  Fixed a LIVE account-deletion bug: better-auth's default `freshAge` (24h)
  blocked delete-user for Google-only accounts older than a day, forever;
  `worker/auth.ts` now sets `freshAge: 0` and `worker/auth.test.ts` guards it.
- Done 2026-07-20 (mobile to store scope): the Expo app (`mobile/`) went from a
  two-screen drill to submittable. `src/hooks/useQuizSession.ts` moved to
  `src/lib/quiz-session.ts` and `foldAnswers` to `src/lib/answers.ts` so the
  phone runs the SAME reducer/scoring (sync-shared only vendors `src/lib` +
  `src/data`, never `src/hooks`). New: React Navigation native-stack (fixes
  Android back killing a session), ErrorBoundary + deep-link exam-id guard,
  timed exam mode + results, progress/readiness screen (band only, no chart
  lib), multiple-response drills, match/order PBQs (keyed per question),
  in-app account deletion (DELETE progress -> deleteUser -> signOut, the last
  mandatory or the Expo session cache rehydrates a deleted user), and Sign in
  with Apple (native idToken, iOS-only, worker provider spreads in only when
  both APPLE_CLIENT_ID/SECRET set). The exam timer is now wall-clock (`endsAt`)
  not a tick counter, because RN suspends timers when backgrounded. **native-
  stack does NOT render under react-native-web, so the old `qa/store-shots.js`
  web pipeline is dead - screenshots need a device.** Store metadata (name off
  the trademarks, 7 exams, both providers) in `mobile/store.config.json` +
  `docs/store-listing-copy.md`; blockers + Apple-secret steps in
  `docs/store-submission-runbook.md`. User-side remaining: OAuth consent to
  Production, `.p8` + Apple sign-in key/secret, Play service account, 12
  testers/14 days, fresh screenshots + `.aab`.
