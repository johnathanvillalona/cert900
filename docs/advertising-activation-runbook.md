# Advertising activation runbook

How the single AdSense placement on `/network-plus-practice-test` is switched
on, verified, and switched off. Everything described here ships disabled.
Activation, every production step and every account action need their own
explicit owner approval; nothing in this document is an authorization.

## Architecture: five independent gates, all fail closed

| Gate | Where | Default | What it controls |
|---|---|---|---|
| Source policy | `src/lib/advertising-core.ts` `ADVERTISING` | every field off | Whether a unit renders at all. `enabled`, `siteApproved`, `cmpVerified`, a 10-digit slot and the publisher ID must all pass `placementForGuide`. Only `ADVERTISING_GUIDE_PATH` is ever eligible. |
| Regions | `ADVERTISING.regions` | `tcf-only` | `tcf-only`: a request needs an explicit Google-CMP TCF consent (EEA/UK/CH). `tcf-and-non-tcf`: documents where the CMP reports TCF does not apply may also request, unless Global Privacy Control is set, Google's US state message reports an opt-out, or consent-mode ad values are not GRANTED. |
| Runtime switch | Cloudflare variable `ADVERTISING_RUNTIME` (`wrangler.jsonc` vars, committed `"off"`) | off | The Worker serves `GET /advertising-config.json` → `{"enabled": true}` only for the exact value `on` (`Cache-Control: no-store`). While off, the Worker also strips `script[data-cert900-advertising-entry]` and `aside[data-guide-ad]` from the pilot document (`worker/csp.ts` `shouldStripAdvertising`) and refuses conditional requests for it so a cached copy cannot revalidate. |
| Content Security Policy | `worker/csp.ts` `ADVERTISING_GUIDE_CSP` | guide policy | Google ad and consent hosts are added only on the exact pilot path, only while the runtime switch is `on`, and only when the source policy would render a unit (`advertisingPilotActive`). Every other document keeps `CSP`, `HOME_CSP` or `GUIDE_CSP` unchanged. |
| Browser sequence | `src/lib/advertising-browser.ts` → `startGatedAdvertising` | — | eligible document → fetch runtime config → load Google Privacy & messaging (`src/lib/advertising-cmp.ts`) → subscribe to consent signals → load `adsbygoogle.js` only after permission → one `push` per unit. Any failure stops the chain; nothing retries. The "Advertising privacy choices" control is enabled only after the consent manager loaded. |

Analytics consent (`src/lib/consent.ts`) is a separate system and never
authorizes advertising. The SPA, Study Hubs, exams, PBQs, simulations, Results,
sign-in, account and progress screens never import or receive advertising code.

## Preconditions (owner-only unless noted)

1. AdSense account approved and the site shown as **Ready** in the dashboard.
   Record the exact status wording and date in the private tracker.
2. One **manual display unit** created for the pilot; Auto ads, anchors,
   vignettes and automatic optimisation of existing units are off. Record the
   10-digit slot ID.
3. **Privacy & messaging**: publish the European regulations message (TCF) and
   the US state regulations message. Keep analytics storage out of the message
   purposes. Verify in the Privacy & messaging screen how the message is
   delivered for this account:
   - If Google provides a standalone site tag for the publisher, confirm its URL
     matches `privacyMessagingUrl()` in `src/lib/advertising-cmp.ts` (update the
     builder if Google's tag differs). This is the sequence the code implements.
   - If Google states the messages display only through the AdSense tag
     (`adsbygoogle.js`), the current sequence cannot show the message before the
     SDK. Decide, with a reviewed code change and tests, between (a) loading the
     SDK before consent with the ad request still gated by consent (Google's
     standard pattern) or (b) keeping TCF regions off and serving non-TCF only.
   Do not activate until this is settled and the Playwright mocks reflect the
   real sequence.
4. **Regions decision** recorded: `tcf-only` or `tcf-and-non-tcf`. The owner
   chose `tcf-and-non-tcf` for the activation package on 2026-11-17; it is a
   one-line policy change in the gates commit, covered by existing tests.
5. **CSP host list re-confirmed** against Google's current AdSense and
   Privacy & messaging guidance. First activation runs with
   `Content-Security-Policy-Report-Only` observation in DevTools on the pilot
   page; widen `ADVERTISING_GUIDE_CSP` only for hosts that Google documents.
6. Local validation green on the branch: `npm test`, `npm run build`,
   `npm run test:worker`, `npm run test:browser`, `npm run test:simulations`,
   `npm audit --omit=dev` = 0.

## Gates commit (separately reviewed and approved)

In `src/lib/advertising-core.ts` set `enabled`, `siteApproved`, `cmpVerified`
to true, the primary slot, optionally `regions`, and keep `guide-secondary`
off. Update `LEGAL_EFFECTIVE_DATE` / `LEGAL_EFFECTIVE_LABEL` in
`src/screens/Legal.tsx` (the privacy policy's advertising section switches
automatically to the full Google disclosure when a unit can render) and the
pinned expectations in `src/screens/Legal.test.tsx`, `src/lib/site-readiness.test.tsx`,
`src/lib/advertising.test.tsx`, `tests/pbq/site-readiness.spec.ts` and the
"zero ad-host" assertions in other specs that assume ads are off. Build, then
confirm `dist/network-plus-practice-test.html` is the only document containing
`data-guide-ad` and `data-cert900-advertising-entry`. Never commit
`ADVERTISING_RUNTIME: "on"`.

## Upload, stage, promote

```sh
npm ci --ignore-scripts --no-audit --no-fund && npm test && npm run build
./node_modules/.bin/wrangler versions upload --config wrangler.jsonc --env-file /dev/null \
  --keep-vars --tag cert900-ads-<sha> --message "Advertising gates <sha>; runtime off; inactive"
./node_modules/.bin/wrangler versions view <uuid> --config wrangler.jsonc --env-file /dev/null
```

`--keep-vars` keeps dashboard variables that are absent from `wrangler.jsonc`,
but every variable present in the file is set to the committed value, so each
upload resets `ADVERTISING_RUNTIME` to `off`. Confirm that in `versions view`
before promotion. Stage with a version override on the canonical domain, check
the headers and documents listed under "Activation checks" with the switch
still off, then promote with explicit approval:

```sh
./node_modules/.bin/wrangler versions deploy <uuid>@100% --config wrangler.jsonc --env-file /dev/null
```

Record the previously active version UUID as the rollback checkpoint. Fast-
forward `main` only after promotion and verification.

## Activation (owner action, after promotion)

Cloudflare dashboard → Workers & Pages → `comptia-practice-trainer` →
Settings → Variables and Secrets → `ADVERTISING_RUNTIME` = `on` → Deploy.
This creates a new deployment with the same code; it takes effect within
seconds and needs no rebuild.

### Activation checks (within the first hour)

- `curl -sI https://cert900.com/advertising-config.json` → `cache-control: no-store`,
  body `{"enabled":true}`.
- `curl -sI https://cert900.com/network-plus-practice-test` → the
  `content-security-policy` header now contains `pagead2.googlesyndication.com`
  and `fundingchoicesmessages.google.com`; `/comptia-a-plus-practice-test`,
  `/`, `/privacy` and `/study/n10-009` headers are unchanged.
- `curl -s https://cert900.com/network-plus-practice-test | grep -c 'data-guide-ad'` → 1;
  the same grep on any other document → 0.
- One real visit in DevTools (Network, preserve log): request order is
  `/advertising-config.json` → `fundingchoicesmessages.google.com` → consent
  choice → `pagead2.googlesyndication.com/pagead/js/adsbygoogle.js` → one ad
  request. Rejecting the message leaves the reserved 250px surface empty.
  "Advertising privacy choices" opens Google's own dialog and withdrawing
  reloads the page without ads. No `securitypolicyviolation` entries.
- In a non-TCF region (or with a VPN), with `regions: "tcf-and-non-tcf"`:
  Google's CMP reports `gdprApplies: false` and the unit serves; with Global
  Privacy Control enabled in the browser it does not.
- Zero advertising requests on `/exam/*`, `/study/*`, Results, `/login`,
  `/progress`, the homepage and every other guide.
- Never click the live unit, never generate impressions to test, never buy
  traffic.

## Post-activation verification

| When | Check | Source |
|---|---|---|
| T+24–48 h | Impressions appear for the pilot page; counts are the same order as Cloudflare Web Analytics page views for that path (expect single digits per day at current traffic). No Policy Center issue, no invalid-traffic notice. | AdSense Reports → Pages; Policy Center; Cloudflare Web Analytics |
| T+7 d | Page RPM and estimated earnings visible; impressions/page-view ratio stable; no CSP violations reported by users; mobile layout unchanged at 320/375/390/768/1440. | AdSense Reports; manual spot check |
| T+28 d | Estimated earnings vs the $100 payment threshold; Search Console clicks and Cloudflare visits trend not worse than the 28 days before activation. | AdSense Payments; Search Console; Cloudflare |
| Payout | Payments → verification steps (address/identity PIN) completed by the owner when prompted. | AdSense Payments |

Revenue appears only as "estimated earnings" until Google finalizes a month;
report it as such.

## Emergency disable

1. Cloudflare dashboard → `ADVERTISING_RUNTIME` = `off` → Deploy. Within one
   navigation the pilot document is served without the entry script and the
   unit, the CSP returns to the guide policy, and `/advertising-config.json`
   reports `{"enabled":false}`, so documents already open stop at their next
   load. Verify with the three `curl` checks above.
2. If the dashboard is unreachable, deploy the rollback version:
   `wrangler versions deploy <rollback-uuid>@100%`.
3. Then, if the stop is permanent, revert the gates commit, rebuild, upload
   and promote through the normal procedure so the source matches production.

## Rollback

`wrangler versions deploy <previous-uuid>@100%` restores the last ad-free
build. Keep the UUID of every promoted version in the private tracker.

## Testing the switch locally

```sh
npm run build
npm run test:worker                        # includes the runtime-switch check groups
node tools/qa/isolated-worker.mjs --serve --port=4301                      # switch off
node tools/qa/isolated-worker.mjs --serve --port=4301 --advertising-runtime=on
CERT900_TEST_PORT=4321 npx playwright test tests/pbq/advertising.spec.ts
```

The Playwright spec exercises the full mocked sequence, the kill switch, a
blocked consent manager, non-TCF handling and the advertising CSP with zero
violations; no Google code is ever downloaded.
