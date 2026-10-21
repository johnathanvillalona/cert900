# Phase B validation evidence

2026-10-21. Ubuntu; Node 24.21.0, npm 11.19.0, installed Chrome
155.0.8059.39, Playwright 1.64.1. Scripts-disabled reproducible installation;
package.json and package-lock.json are unchanged. No lifecycle-script approvals,
browser downloads, new runtime dependencies or paid services.

## Results

| Check | Result |
|---|---|
| Full unit suite | 578 passed across 36 files (baseline: 553 / 35) |
| Production build | Passed: app/Worker typechecks, CSS, assets, prerender, 36 sitemap URLs |
| Full browser regressions | 166 passed (57 + 59 + 50, three isolated shards; 155 existing + 11 new) |
| Simulator hook/performance browser checks | 7 passed |
| Isolated Worker checks | 13 groups passed; zero outbound Worker requests |
| npm audit | 0 findings |
| npm audit --omit=dev | 0 findings |
| npm ls --all | Passed; no conflicts |
| git diff --check | Passed |
| Existing screenshot baselines | Unchanged |

Browser checks include all existing PBQ types, DHCP, Network ACL, Windows
Firewall, Results scroll repair, practice/exam/PBQ modes, reset/session isolation,
all 11 hubs, canonical/link/sitemap integrity, duplicate-guide repair, and
analytics consent/events/withdrawal. Mobile checks cover 320, 375, 390, 768 and
1440px, both themes, keyboard and a 320px touch context.

Eleven new browser tests cover disabled HTML and import-graph isolation across
all static pages; mocked consent/rejection/withdrawal; exactly-once unit
requests; blocked SDK; ineligible routes and SPA markers; initial SSR and
post-request geometry; accessible privacy controls; and a synthetic future
second slot with one SDK load. Existing learning application and content-client
module graphs cannot reach the advertising entry or former EthicalAds loader.
All advertising responses are local doubles. No real ad code or impressions.

Chrome 4x CPU performance (10 samples): ACL boundary p95 32.2ms, overlap 8.9ms,
complete-policy 24.2ms; Windows grading p95 18.3ms. These are local regression
measurements, not physical-mobile guarantees.

The actual preview was also inspected through the authenticated Playwright MCP
connection: one guide, zero ad containers/scripts/network hosts, no overflow,
and analytics choice controls present. No consent was granted in that check.

## Screenshots

Ordinary disabled output (no advertising whitespace):

- [Desktop, 1440px](disabled-guide-1440.png)
- [Mobile, 375px](disabled-guide-375.png)

Mock placement only, not an activated ad or normal preview:

- [Desktop, 1440px](mock-guide-1440-light.png)
- [Mobile, 375px](mock-guide-375-light.png)

The tests also capture 320, 390 and 768px and both themes under
`/tmp/cert900-phase-b-release-browser-1`. Existing baseline files were not updated.

## Preview and release limits

Local preview: http://127.0.0.1:4260/network-plus-practice-test

If it has stopped:

```sh
cd '/home/sorannex/Claude Projects/cert900/monetization-phase-b-worktree'
node tools/qa/isolated-worker.mjs --serve --port=4260
```

AdSense is **Getting ready / Review requested**, not approved. Ads.txt is
**Not found**. Google European and US consent messages have not been published;
advertising consent mode is off. GA4 Today and Realtime reports show no events;
ingestion is unconfirmed. No account setting was changed.

Activation requires a separately approved real unit, verified Google CMP
bootstrap and regional behavior, guide-only CSP changes and accurate serving
disclosures. Unsupported consent paths currently fail closed. Real SDK/CMP,
cross-tab withdrawal, physical devices and assistive technology remain unverified;
mock checks do not certify compliance. Global and placement flags remain false.
See [the runbook](../../monetization-phase-b.md) for activation, emergency disable,
and the proposed controlled release procedure. Nothing has been pushed or deployed.

## Exact changed files

- `CLAUDE.md`
- `docs/monetization-phase-b.md`
- `docs/qa/monetization-phase-b/README.md`
- `docs/qa/monetization-phase-b/disabled-guide-1440.png`
- `docs/qa/monetization-phase-b/disabled-guide-375.png`
- `docs/qa/monetization-phase-b/mock-guide-1440-light.png`
- `docs/qa/monetization-phase-b/mock-guide-375-light.png`
- `src/advertising-client.ts`
- `src/components/AdSlot.tsx`
- `src/index.css`
- `src/lib/advertising-browser.ts`
- `src/lib/advertising-consent.ts`
- `src/lib/advertising-policy.ts`
- `src/lib/advertising.test.tsx`
- `src/lib/advertising.ts`
- `src/lib/site-readiness.test.tsx`
- `src/lib/site.ts`
- `src/screens/Dashboard.tsx`
- `src/screens/Guides.tsx`
- `src/screens/Legal.tsx`
- `tests/pbq/advertising.spec.ts`
- `tools/prerender.tsx`
- `tools/qa/advertising-fixture.ts`
- `vite.config.ts`
