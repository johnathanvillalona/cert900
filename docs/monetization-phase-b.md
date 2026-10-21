# Monetization Phase B: disabled manual AdSense infrastructure

## Release boundary

Branch: `codex/monetization-phase-b`, based directly on verified GitHub main
`f31a07d297c34ea06a35e1ad69c431de0f46e863`.
Worktree: `/home/sorannex/Claude Projects/cert900/monetization-phase-b-worktree`.

This is a disabled infrastructure milestone, not an advertising launch. No
packages, subscriptions, Google settings, Cloudflare settings, production data,
or analytics configuration were changed. No real advertising SDK was executed
in testing. Nothing was pushed, uploaded, staged, merged, or deployed.

## Authorized read-only external inspection (2026-10-21)

- AdSense cert900.com: **Getting ready**, **Review requested**. Ownership has a
  verification check. This is not AdSense approval.
- Ads.txt status: **Not found**. No seller record was invented or added. Obtain
  Google's account-specific recommended record before an activation release.
- Onboarding: **Nice work, you've completed all the steps**. No additional
  approval blocker was shown there. Policy-center navigation returned to
  onboarding; this is not proof of a clean account-wide policy review.
- Privacy & messaging is available. Both European and US state message lists
  show their initial creation instructions, with no published messages listed.
  European advertising consent mode is unchecked. Google message-coverage
  fallback is checked; this does not establish that a configured message or
  usable consent is available. No messages or settings were changed.
- GA4 property 559949129: Realtime shows zero users/events. Events report is
  empty both for its default Sep 23–Oct 20 range and **Today, Oct 21**. Prior
  events are **not confirmed ingested**. No additional events were generated
  and no GA4 settings changed. The report-snapshot page has no selected
  template; selecting one is unnecessary for this inspection.
- Google documents possible processing delays. Empty reports alone do not
  identify the cause. Recheck after processing; investigate measurement ID,
  transport and filters separately if it remains empty. HTTP 204 from a
  collector is not proof of reporting ingestion.

References: [Google data freshness](https://support.google.com/analytics/answer/11198161?hl=en),
[Google certified CMP requirements](https://support.google.com/adsense/answer/13554116?hl=en),
[Google Privacy & messaging API](https://developers.google.com/funding-choices/fc-api-docs).

## Policy and inventory

`src/lib/advertising-policy.ts` is the sole enablement policy. Global enablement,
confirmed site approval, verified CMP integration, per-placement enablement,
valid publisher ID and a real manual-unit slot ID are all required. Every gate
is false, and both slot IDs are empty in this commit. No remote control plane.

Only `/network-plus-practice-test` is eligible for the pilot. Selection is
validated against the existing primary Network+ resource and guide metadata.
Adding study resources never opts them into advertising. This guide combines
original exam-domain material, explained practice questions and original FAQ/
study guidance; it is a more suitable candidate than a tool or thin index.
Google still decides content eligibility.

The initial insertion point is **after the entire Common questions section**,
before the more-resources links, with 64px vertical separation. No placement
appears beside sample-question answers, practice CTAs or quiz controls. The
secondary placement is a supported component/policy key, disabled and not
inserted anywhere. Adding its actual location requires a separate review.

All other guides, references, home, hubs, legal/contact/about pages and the
entire learning application are excluded. The dormant EthicalAds Dashboard
loader was removed, replacing its renderer with a hook-free static-guide unit.
Grow remains paused. No Auto ads setup, automatic refresh, overlays, anchors,
vignettes, ad-block recovery or access restrictions were added.

## Loading and layout

- Disabled units render no markup and reserve no blank advertising space.
- A configured unit reserves a fixed 250px creative surface at the available
  article width (maximum 728px). The label and preferences control have their
  own space. No full-width creative expansion, absolute positioning or motion.
- `src/advertising-client.ts` is a separate entry, never imported by the SPA,
  analytics client or shared static shell. Prerendering emits its script only
  for a configured allowlisted unit. Disabled HTML never references it.
- Runtime additionally requires the exact canonical HTTPS document, matching
  client/slot markup, a static-guide marker and no SPA marker. Query/fragment
  URLs fail closed. No unit request API accepts quiz or account data.
- SDK loading is asynchronous, only after permission; one manual-unit push per
  configured placement per document (currently only the primary), no retries or refresh. Failed/blocked scripts leave studying usable.
- Normal guide-to-app links perform a new document navigation. Pagehide disposes
  the listener; restoring a former advertising document from BFCache reloads it
  to avoid restoring a stale executing SDK.

## Consent: compatible seam, activation remains blocked

No custom advertising dialog, consent cookie or homemade CMP was built.
`advertising-consent.ts` reads Google Privacy & messaging callbacks and TCF
signals. It does not interpret analytics Allow as advertising permission or
change the analytics consent store. A small session flag requests Google's
preferences UI after a clean reload; it is never a consent grant.

The conservative reader currently supports **explicit TCF consent from Google
LLC CMP (ID 300)** only. Google Advertising Products (vendor 755), consent
purposes and flexible-purpose permissions are checked, along with Google's
three advertising consent-mode values. Unknown, denied, not configured and
not applicable values do not grant permission. GPC blocks advertising. No
limited-ad or NPA fallback is used. Non-TCF regions, including ordinary US
traffic, remain blocked. This is deliberately narrower than Google's complete
regional ad-serving behavior; do not remove that restriction without reviewing
GPP/US opt-outs and other applicable regional requirements.

Withdrawal stops owned requests and unloads the document. Removing a script
alone cannot stop an already executing SDK, so the browser adapter reloads.
Opening our advertising choices first enters an ad-blocked preferences visit,
where Google's own revocation API displays its UI. Requests already transmitted
cannot be recalled. Mocked lifecycle coverage is not proof of real Google SDK,
cross-tab or geographic compliance.

**Current blockers:** no published verified Google CMP/bootstrap, no confirmed
site approval or real slot, unsupported regional paths, and no AdSense/CMP CSP
permissions. The present Worker CSP was intentionally not widened. In particular,
this phase does not load the AdSense tag merely to obtain consent. A separately
reviewed official CMP bootstrap must obtain usable signals before the ad SDK is
loaded. If the free Google setup cannot satisfy this sequence, keep ads off.
Existing dormant Grow/EthicalAds CSP allowances are unchanged; they do not load
those products. No permissive advertising policy was added to the application.

## Activation prerequisites (separate owner approval)

1. Dashboard-confirmed **Ready/approved** site and resolution of applicable
   account/site policy requirements; verify the exact official ads.txt record.
2. Create one manual display unit and record its public slot ID. Verify Auto ads
   and all automatic/overlay formats are off in the account, including automatic
   optimization of existing units. Merely using a manual push is not sufficient
   proof of dashboard Auto ads settings.
3. Review and explicitly authorize free Google Privacy & messaging configuration
   and publication. Provide reject/manage/withdraw paths, privacy URL, regions,
   partners and applicable opt-outs. Do not authorize analytics storage through
   that message; preserve the existing independent analytics choice.
4. Obtain/verify Google's official bootstrap for that published message. Confirm
   it collects consent without loading an advertising SDK/request first. Add it
   only to eligible static documents, never to the SPA or generic content entry.
5. Validate real Google consent events, default revocation links, cross-tab
   withdrawal, unknown/error states, GPC and regional coverage. Unsupported
   traffic must stay blocked; expanding it requires reviewed code/tests.
6. Review actual CMP/SDK/creative CSP needs and add only the necessary permissions
   on the allowlisted guide. Preserve the application's strict policy. Update
   privacy disclosures for actual serving and choices before activation.
7. Set the approved policy gates/primary slot in a separate reviewed commit;
   retain secondary=false. Validate using mocks, then perform only necessary
   owner-approved real SDK/CMP verification without artificial impressions.
8. Use the controlled inactive-version/override/promotion workflow. Activation
   and production promotion each require explicit owner approval.

Google's tools are the planned free CMP; no paid CMP or service is needed for
this disabled milestone. Certification is not a guarantee of legal compliance.

## Emergency disable and controlled release

Set `ADVERTISING.enabled = false`, build/test and release via the existing
controlled Cloudflare workflow. This removes the entry and placement from every
HTML document regardless of individual slot settings. Per-placement false is
available for narrower removal. Source-controlled switches are **not instant
remote switches** and cannot stop already-open documents by themselves.

For an incident after a future activation, the fastest approved procedure is to
restore the most recent verified **ads-disabled Worker version to 100%**, then
ship the disabled source. Verify the current rollback version immediately
before any future release; the owner-provided current checkpoint for this task
is `d3ea883d-161f-46d7-be54-294355efd8c2`.

For this disabled release: review this commit/screenshots, then separately
approve an exact version upload, safe override tests while old traffic remains
100%, and promotion with rollback readiness. GitHub main synchronization follows
successful promotion and verification that automatic builds are upload-only.
No migrations, bindings, secrets, routes, domains or GA4 changes are required.

## Local preview and validation

```sh
cd '/home/sorannex/Claude Projects/cert900/monetization-phase-b-worktree'
npm ci --ignore-scripts --no-audit --no-fund
npm test
npm run build
npm audit
npm audit --omit=dev
npm ls --all
npm run test:browser
npm run test:simulations
npm run test:worker
node tools/qa/isolated-worker.mjs --serve --port=4260
```

Open `http://127.0.0.1:4260/network-plus-practice-test` or `/study/n10-009`.
The ordinary preview has **no ads and no empty slot**. Mock placement screenshots
are test fixtures, not the normal preview or real ad creatives.

`tests/pbq/advertising.spec.ts` builds the test-only fixture in memory using
Vite with env loading disabled. It routes synthetic `https://cert900.com` and
SDK responses locally; Chrome external DNS is blocked. No request reaches
Google/production. The fixture is absent from production inputs. Existing
analytics tests also use local doubles. Screenshot baselines were not updated.

Validation results and screenshots: see `qa/monetization-phase-b/README.md`.
Physical-device browsers/virtual keyboards, screen readers and real published
CMP/SDK behavior remain manual activation requirements.
