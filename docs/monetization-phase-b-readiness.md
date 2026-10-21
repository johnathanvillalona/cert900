# Phase B final readiness: ads.txt and GA4

2026-10-21. Follow-up to accepted commit
`65f8d6aecf937c5ce795fa79b7faaed943b714ba` on
`codex/monetization-phase-b`, in `monetization-phase-b-worktree`.

## Google-supplied ads.txt

Read directly from the authorized AdSense **cert900.com → Verify site ownership
→ Ads.txt snippet** screen:

```text
google.com, pub-7887703829224685, DIRECT, f08c47fec0942fa0
```

The publisher matches the site's verified ownership meta tag and existing
disabled advertising policy. `public/ads.txt` is exactly this one record with
a final LF, no BOM, no additional sellers. No private credentials are involved.
Build output `dist/ads.txt` has the same SHA-256 as the source:
`beca759b774254aa992949df3e427dceea90f575c7a174ed21818028a0f37a37`.

The actual isolated Worker serves GET/HEAD `/ads.txt` as HTTP 200,
`text/plain; charset=utf-8`; HEAD has no body. Local direct runtime dispatch
verifies the canonical HTTPS host and www's existing HTTP 301 redirect to
`https://cert900.com/ads.txt`, without resolving or contacting public hosts.
Unit tests additionally preserve the HTTP-to-HTTPS canonical redirect.
Chrome renders the exact file at all five requested widths, with no scripts.
No Worker routing, CSP, configuration or application changes are necessary.

AdSense currently says **Getting ready**, **Review requested**, ownership
verified, **Ads.txt: Not found**. This is not site approval. The new file is
unreleased, so Google cannot yet crawl it. Live apex `/ads.txt` still returns
404; www redirects to the apex. Recheck the public asset after an approved
release; dashboard crawl/status updates need not be immediate. No recheck,
review request, CMP publication or account setting was submitted.

References: [Google's ads.txt instructions](https://support.google.com/adsense/answer/12171612?hl=en),
[serving and crawl troubleshooting](https://support.google.com/adsense/answer/7679060?hl=en).

## GA4 diagnosis: ingestion now confirmed, historical cause unproven

Read-only dashboard inspection confirmed:

- Account 195570903; **Cert900**, property 559949129.
- **Cert900 Web**, stream 16174995362, URL `https://cert900.com`, measurement ID
  **G-BBMQ8EC9G6**. This exactly matches public production configuration.
- Enhanced measurement is off, avoiding automatic duplicate page/form events.
- The only data filter is **Internal Traffic / Exclude / Testing**. No active
  developer, internal or hostname exclusion filter is listed.
- The tag's internal-traffic rule list is empty. Neither analytics nor ads
  consent-default override checkbox is selected. No settings were changed.
- Stream diagnostics initially said no data in 48 hours. The tag's single
  urgent diagnostic concerned **0% advertising consent**, including outside
  the EEA. Advertising consent is intentionally denied; that diagnostic does
  not demonstrate a failure of analytics consent or justify granting ads.

One controlled consented production session was used, on the public PBQ guide.
There were no requests to GA4/Google tag manager before **Allow analytics**.
Only one pageview and one explicitly debug-marked `cert900_debug_check` event
were sent. The latter was temporary browser instrumentation, not shipped code
or a new permanent event. No accounts, progress records or exam answers were
created or changed. No advertising SDK/request ran.

Evidence:

| Check | Observed |
|---|---|
| Tag SDK | `www.googletagmanager.com/gtag/js`, HTTP 200 |
| Collector | `www.google-analytics.com/g/collect`, HTTP 204 for both requests |
| Destination | `tid=G-BBMQ8EC9G6` |
| Analytics storage | `granted`; transport `gcs=G101`, `gcd=13p3t3p3p7l1` |
| Advertising storage/user data/personalization | All three denied |
| Pageview fields | Known canonical guide URL, title `Cert900`, empty referrer; no custom parameters |
| Diagnostic fields | Same safe page context plus `debug_mode=true` only |
| DebugView | `cert900_debug_check`, count 1 |
| Realtime | Active users 1, views 1, `page_view` 1, `cert900_debug_check` 1, automatic `first_visit`/`session_start` each 1 |
| Duplicate pageviews | None: one app pageview and one reported pageview |
| Withdrawal | `ga-disable-G-BBMQ8EC9G6=true`; no further collector calls |
| Withdrawal + reload | No GA4 script, no GA4/tag-manager or advertising requests |

Only allowlisted transport fields were retained for the inspection. Browser
cookies, client/session identifiers, authentication headers and account data
were not exported. Diagnostic instrumentation was cleared by reloading with
consent declined. The aggregate-only [Realtime screenshot](qa/monetization-readiness/ga4-realtime-events.png)
excludes account controls and the geographic map.

A Google `/td` diagnostic request was blocked by the existing CSP. The SDK,
collector, DebugView and Realtime all worked despite it. No CSP permissions
were widened to accommodate that optional request. A global debug setting did
not mark the first pageview as debug; the single explicit debug event was
confirmed in DebugView. This is a diagnostic-method limitation, not evidence
that ordinary pageviews are broken.

**Conclusion:** the production collection path and reporting ingestion work
under explicit analytics consent. No source/config defect is established, so
analytics code and Google settings remain unchanged. The precise cause of the
earlier empty reports is unresolved; do not attribute it to filters, ad consent,
processing delay or traffic volume without further evidence. Historical
standard-report backfill and real-visitor learning-event totals remain
unverified. Revisit processed reports after Google's normal processing window,
without creating more synthetic visits or weakening privacy controls.

References: [data filters](https://support.google.com/analytics/answer/13296761),
[DebugView](https://support.google.com/analytics/answer/7201382?hl=en),
[report freshness](https://support.google.com/analytics/answer/11198161?hl=en).

## Advertising safeguards

Global enablement, site approval, CMP verification and both placements remain
false; both unit IDs remain empty. The only eligible page remains the Network+
guide, after its complete FAQ and before resource links. No Auto ads, ad
scripts, advertising consent grants, new CMP messages or paid services.
The learning application, hubs, all other guides, legal and account pages
remain excluded. Analytics choice remains independent of advertising consent.

## Validation

Environment: Ubuntu, Node 24.21.0, npm 11.19.0, installed Chrome 155.0.8059.39,
Playwright 1.64.1. No packages, manifests, lockfiles or lifecycle approvals changed.

| Check | Result |
|---|---|
| Full unit suite | **582 passed**, 37 files (578 accepted + four routing cases) |
| Production build | Passed app/Worker typechecks, CSS/assets/prerender, 36 sitemap URLs |
| Existing browser regressions | **166 passed**, three isolated shards |
| New ads.txt browser check | **1 passed**, exact body/MIME, GET/HEAD, five widths, no scripts/ad requests |
| Simulator hook/performance browser checks | **7 passed** |
| Isolated Worker | **13 groups passed**, zero outbound attempts; assets/canonical redirects, synthetic authentication/progress, D1 reads/writes/restart persistence |
| Full npm audit | **0 findings** |
| Production-only npm audit | **0 findings** |
| npm ls --all | Passed, no conflicts |
| git diff --check | Passed |
| Existing screenshot baselines | Unchanged |

The initial new Chrome assertion trimmed the expected final newline while
Chrome preserved it; it failed correctly. The assertion now compares the exact
LF-terminated file, and its focused rerun passes. The original three-shard run
passed all 166 existing cases (57 + 59 + 50); the corrected new case passed
separately. No application repair or screenshot-baseline change was needed.
An early build also caught compiler-scope issues in the newly added test;
keeping Worker-only imports in the Worker test scope resolved them without
changing compiler configuration or runtime code. The final full build passes.

Browser coverage includes all 11 hubs and guides, duplicate-content repair,
navigation, all PBQ types, DHCP/ACL/Windows simulators, grading, Results focus/
scroll, attempt isolation/reset, all three learning modes, analytics event
privacy/deduplication/withdrawal, and mocked advertising deny/withdrawal. Mobile
workflows cover **320, 375, 390, 768 and 1440px**, both themes and touch controls;
no new overlap, page overflow or uncaught page errors were reported.

Serial Chrome 4× CPU, ten samples: ACL p95 boundary **34.5ms**, overlap **9.4ms**,
complete **23.3ms**; Windows p95 **17.8ms**. These are local regression timings,
not physical-device guarantees. Browser ad responses are mocks, and Worker
tests use fresh local synthetic D1 with outbound services blocked.

Fresh evidence:

- [Disabled guide, desktop](qa/monetization-readiness/disabled-guide-1440.png)
- [Disabled guide, mobile](qa/monetization-readiness/disabled-guide-375.png)
- [Plain-text asset, 320px](qa/monetization-readiness/ads-txt-320.png)
- [Google Realtime event counts](qa/monetization-readiness/ga4-realtime-events.png)

The actual isolated preview was additionally inspected through Playwright MCP:
HTTP 200 and `text/plain; charset=utf-8` for the exact asset, no scripts in that
document, no ad containers/scripts or page overflow on the guide, and all three
analytics choice controls present. Physical-device keyboards and screen-reader
review, real published CMP behavior, and actual ad SDK behavior remain manual
requirements for a future activation; no real ads were tested here.

### Files changed in this follow-up

- `public/ads.txt`: Google's verified public seller record.
- `worker/assets.test.ts`: asset pass-through and canonical redirect unit cases.
- `tests/pbq/ads-txt.spec.ts`: built asset/HTTP/browser regression at five widths.
- `tools/qa/isolated-worker.mjs`: actual local asset GET/HEAD and apex/www dispatch.
- `docs/monetization-phase-b-readiness.md`: evidence, limitations and release plan.
- `docs/monetization-phase-b.md`, `docs/qa/monetization-phase-b/README.md`:
  links distinguishing the original inspection from these new findings.
- Four evidence PNGs in `docs/qa/monetization-readiness/` listed above.

No question banks, grading, simulations, authentication, consent/analytics
implementation, advertising flags, runtime Worker or production configuration
changed.

## Preview and controlled release proposal

```sh
cd '/home/sorannex/Claude Projects/cert900/monetization-phase-b-worktree'
node tools/qa/isolated-worker.mjs --serve --port=4260
```

- Asset: `http://127.0.0.1:4260/ads.txt`
- Disabled guide: `http://127.0.0.1:4260/network-plus-practice-test`
- Study Hub: `http://127.0.0.1:4260/study/n10-009`

After separate release approval, verify clean exact source, current production
allocation/configuration and rollback availability. The owner-provided current
rollback checkpoint is **d3ea883d-161f-46d7-be54-294355efd8c2**; it was not
revalidated through Cloudflare in this task. Build the reviewed source, use the
existing `wrangler versions upload` workflow, and record the inactive UUID.
Keep previous production at 100% and candidate at 0%; test canonical-domain
version overrides, matching HTML/assets, `/ads.txt` and www redirect, consent,
anonymous APIs and representative learning flows with no real user writes.
Promote only with explicit approval and passing staging, using
`wrangler versions deploy <candidate-uuid>@100%` for
`comptia-practice-trainer` in the verified existing account. Rollback restores
the verified previous UUID with the same versions-deploy workflow, then checks
allocation/assets/learning flows. Do not change bindings, routes, secrets,
migrations or Google settings. GitHub synchronization follows successful
production verification and a fresh check that automatic builds are upload-only.

No push, merge, Cloudflare upload/stage/promotion, deployment, account-setting
change or advertising activation occurred here. This release only makes the
verified seller record publicly available while preserving disabled ads.

Activation still requires dashboard-confirmed AdSense approval; a real manual
unit; separately authorized free Google CMP publication/bootstrap and regional
consent/withdrawal validation; eligible-guide-only CSP review; updated serving
disclosures; and explicit activation approval. See the [Phase B runbook](monetization-phase-b.md).
