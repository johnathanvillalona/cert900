# Lean analytics and consent — Phase A

## Isolation and scope

Branch: `codex/monetization-phase-a`, based on GitHub main
`f20717a6dc7634f6a9533ca6060c553be65cf0aa`.
Worktree: `monetization-phase-a-worktree`.

No advertising code, publisher SDK, Google advertising CMP, affiliate activation,
KV namespace, database, dependency, subscription, or production change is added.
Cloudflare Web Analytics and existing learning/session/scoring behavior remain intact.
All new analytics code is first-party and uses existing project dependencies.

## Changed files

| Purpose | Files |
| --- | --- |
| Consent and analytics | `src/lib/consent.ts`, `src/lib/analytics.ts`, `public/analytics-config.json` |
| Page/attempt boundaries | `src/App.tsx`, `src/screens/Quiz.tsx` |
| Footer controls and disclosures | `src/components/SiteFooter.tsx`, `src/screens/Legal.tsx` |
| Static progressive entry/build | `src/content-client.ts`, `vite.config.ts`, `tools/prerender.tsx` |
| Narrow analytics CSP permissions | `worker/index.ts` |
| New tests | `src/lib/analytics.test.ts`, `tests/pbq/analytics.spec.ts` |
| Report and screenshots | `docs/monetization-phase-a.md`, `docs/screenshots/monetization-phase-a/consent-{320,390,1440}.png` |

The static progressive entry and its shared dependency total about 7.4 KB
uncompressed and do not import React. Package manifests/lockfile, question banks,
simulation implementations, quiz-session reducer and grading engine are unchanged.

## Configuration and Google setup

`public/analytics-config.json` contains only public configuration. An empty
`measurementId` disables collection. Hostnames are an explicit allowlist; local
previews cannot send events to a production property. Never put an API secret,
access token, account credential, or Measurement Protocol secret in this file.

The authorized browser inspection opened an unrelated existing Analytics property.
An email-preferences prompt required owner action; the owner dismissed it and
reported no visible Cert900 property. No unrelated reports or account settings
were inspected or changed. A Cert900 measurement ID remains an owner setup item
unless subsequently supplied and independently verified.

Use the free Standard GA4 service, not Analytics 360:

1. In Google Analytics Admin, create/select a dedicated **Cert900** property.
   Select **America/New_York** reporting timezone and **USD** currency. The owner
   handles any business-information questions or terms acceptance.
2. Add a **Web** stream for `https://cert900.com`, named **Cert900 Web**.
3. Turn **Enhanced measurement OFF**, including automatic history pageviews,
   forms, site search, video, downloads and outbound interactions. This
   integration owns pageviews and the two learning events.
4. Keep Google Signals, advertising personalization, User-ID, Ads audiences,
   cross-domain tracking, and advertising product links disabled. Do not enable
   a second Google tag or Tag Manager installation.
5. Set event-data retention to **2 months**. Aggregated reports have different
   retention. Review Google data-sharing choices and the applicable processing
   terms; do not enable optional sharing without owner review.
6. Confirm the stream URL and public `G-…` **Measurement ID**. Put only that ID
   in `public/analytics-config.json`, retaining production host restrictions.
7. Register event-scoped custom dimensions **certification** and **mode**.
   Mark `learning_attempt_complete` as a key event if desired; do not mark a
   result as a paid conversion or send scores to Google.
8. Use GA4 reports for views, sessions, total users, country, device category,
   and the two learning events. Continue using Search Console for organic search
   queries/clicks/impressions and Cloudflare for broad cookieless trends and CWV.

Do not claim that Cloudflare visits are GA4 sessions, or that GA4 browser-based
users are exact unique people. Do not add the two systems' counts together.
Consented/blocker-free cohorts are incomplete and can be biased.

## Consent and event behavior

- The footer offers **Allow analytics**, **Decline**, and **Change preferences**
  with equally usable controls. It is in document flow, never an exam overlay.
- Missing, expired, corrupt or unsupported consent defaults off. Both decisions
  persist for 180 days in `cert900-analytics-consent-v1`; storage failures fall
  back to the current document (including SPA navigation) only. Reloading or
  leaving that document returns to the safe off-state. No choice authorizes advertising.
- No GA tag, config request or GA event occurs before consent. The same-origin
  public config is fetched after consent and validated before loading the tag.
- GA4 also requires an allowed hostname and valid measurement ID. Missing setup,
  offline connectivity and blockers fail safely without breaking learning.
- Withdrawal sets Google's per-property `ga-disable-…` flag, discards pending
  first-party events and expires this integration's `_ga` cookies. It does not
  remove progress, theme, authentication data, or previously collected Google
  records. Already-transmitted requests cannot be recalled.
- Storage events synchronize choices across tabs; restored pages refresh choices.
  Preference editing does not itself grant consent or reload a timed attempt.
- Static guides keep their complete prerendered HTML and receive a small
  content entry. They do not hydrate the React app. Article-to-app navigation
  remains a full document navigation. The footer works without JavaScript as
  an explicit off-state notice.
- Public pageviews use known route paths only, without query strings/fragments,
  a generic title, and an origin-only initial referrer. Unknown/admin/API and
  deletion paths are excluded. SPA state effects deduplicate repeated paths;
  back/forward and results replacement navigation remain measurable.
- `learning_attempt_start` occurs after the actual session mounts. A ref guards
  React Strict Mode. Completion uses the existing exactly-once finish boundary.
  The callback accepts only a certification ID and mode (`exam`, `practice`,
  `pbq`), never an answer/session/outcome object.
- An attempt started without consent is not backfilled when consent is granted
  later. Completion requires a consented start and consent at completion.
  Consent loss/blockers can still make a measured cohort incomplete.
- No name, email, user ID, answer, score, question text, CLI transcript,
  authentication information or arbitrary event payload is accepted.
- Google Signals and ad-personalization signals are disabled in the tag.
  Advertising consent defaults denied. Google's future advertising CMP remains
  separate and must not be replaced by this analytics-only control.

## Local review and validation

Validated on Ubuntu with Node 24.21.0 and installed Chrome:

| Check | Result |
| --- | --- |
| Scripts-disabled clean `npm ci` | Passed; locked dependency files unchanged |
| Baseline unit tests / build / audits | 462 passed / build passed / 0 full and production findings |
| Final unit tests | **488 passed** (26 new analytics/privacy cases) |
| Complete production-browser suite | **107 passed** (93 existing + 14 new); no baseline screenshot updates |
| Simulator hook/performance browser suite | **7 passed** |
| Production build | Passed, including TypeScript, CSS, 21 static guides and sitemap |
| Full / production-only npm audit | **0 / 0** findings |
| `npm ls --all` / `git diff --check` | No conflicts / passed |
| Isolated Worker | **13 groups passed**, zero outbound Worker requests |
| Consent responsive review | 320/375/390/768/1440px, light/dark; keyboard and 320px touch passed |
| Existing learning/regression review | DHCP, both firewalls, workstation and legacy PBQs passed |

Playwright MCP also inspected the real loopback guide/privacy pages: controls,
navigation persistence and withdrawal worked; no Google advertising/Grow loaders,
failed resources or page overflow were observed. The final preview was restarted
after the final build to refresh the local Worker asset manifest.

Review artifacts (consent region captured at the specified viewport width):
[320px](screenshots/monetization-phase-a/consent-320.png),
[390px](screenshots/monetization-phase-a/consent-390.png),
[1440px](screenshots/monetization-phase-a/consent-1440.png).

**Outstanding setup:** the measurement ID is deliberately empty. Real GA4
ingestion, its remote property settings and reporting are not validated. Automated
Google-tag transport checks use a stub, not the real Google SDK. No inactive
Cloudflare version was necessary; no upload, push, merge or deployment occurred.

```sh
cd '/home/sorannex/Claude Projects/cert900/monetization-phase-a-worktree'
npm ci --ignore-scripts --no-audit --no-fund
npm test
npm run build
npm audit
npm audit --omit=dev
npm ls --all
CERT900_TEST_PORT=4194 npm run test:browser
npm run test:simulations
npm run test:worker
node tools/qa/isolated-worker.mjs --serve --port=4196
```

Preview: `http://127.0.0.1:4196/`, with a fresh synthetic local database and
external integrations disabled. The production ID is not enabled on loopback.
For guide controls visit `/common-network-ports`; use the footer on both pages.

New browser tests fulfill the public config with a synthetic ID and serve a local
Google-tag transport double through Playwright routing. They never contact Google,
generate ad impressions or modify production data. This proves application
gating/payloads/lifecycle, not actual GA ingestion or the remote property's settings.
Real consented collection/GA reporting must be verified after an approved release;
do not create artificial advertising traffic for validation.

Existing PBQ screenshot baselines must not be updated. New consent screenshots
are review artifacts, not replacements for the existing learner UI baselines.
Physical-device browser/storage behavior and assistive-technology review remain
manual requirements. The nonintrusive footer requires scrolling to make a choice;
users who never choose remain untracked by GA4.

## Minimal proposed Phase B — separate approval

Prepare one disabled manual AdSense unit in a selected static guide, using a
small placement allowlist, reserved responsive dimensions and a clear label.
Reuse the content entry; do not add a dashboard/homepage/results placement,
Auto ads, ad refresh, KV controls, paid software or another analytics service.
Do not load Google's advertising SDK in that disabled infrastructure milestone.

Actual activation requires the site to be **Ready**, verified publisher/unit
information and ads.txt, reviewed free Google CMP behavior on content pages,
consent/CSP/route-isolation checks, and separate production approval. Keep all
active learning and account contexts free of advertising. If free tools cannot
meet those requirements, leave advertising off and report the limitation.
