# Combined analytics and Study Hub release candidate

## Candidate and production checkpoints

Prepared on 2026-10-21. **Preparation only; no upload, staging, promotion, push or merge.**

- Branch: `codex/release-analytics-study-rc`.
- Worktree: `/home/sorannex/Claude Projects/cert900/analytics-study-release-worktree`.
- Accepted application source: `fc39d823c4817f756090a7326d4ec06df2a74d37`.
- Release checkpoint: the documentation-only commit containing this report; see Git HEAD.
- Freshly fetched GitHub main: `f20717a6dc7634f6a9533ca6060c553be65cf0aa`.
- Account: `1b1616577db046499059fc8a612da241`.
- Worker: `comptia-practice-trainer`, default production environment.
- Active production/rollback version: `1fc39b02-f078-441c-a147-6a1a7326082c`, **100%**.
- Active deployment: `7157f986-95e7-4ff6-91b4-00d7d2391444`.
- Activated: `2026-10-21T05:55:55.342710Z` (01:55:55 America/New_York).
- Version uploaded: `2026-10-21T05:44:48.775190Z`.
- Its version annotation identifies source `f20717a6dc7634f6a9533ca6060c553be65cf0aa`.
- Older PBQ/security fallback remains available: `83256be4-c934-4718-9497-48c2212b8624`.

Live main JavaScript and CSS were downloaded without executing them and matched
the recorded production-build artifacts byte for byte:

| Asset | SHA-256 |
| --- | --- |
| `index-CrXpt5F9.js` | `b24742424acf622d486ba23daafe0e56591808421b4f0e38778476f40d22d59f` |
| `index-IyZvHvGG.css` | `83274e51215cbf2ab508ab216263b27225cdba6df256eacbc87102c654e8de85` |

This corroborates the recorded production source. Main alone was not used as
evidence of the deployed version. The public apex answers successfully and www
redirects to the canonical apex.

The final read-only deployment check returned the same active UUID/allocation.
Version history showed no uploads during preparation; its newest existing upload
was `d390af19-54fe-4960-8883-d4ab8ae7be70` at `2026-10-21T12:14:46.541944Z`,
before this inspection. That inactive prior upload is not this release candidate.

## Ancestry and inclusion

No integration commits were missing; no merge or cherry-pick was necessary.
All the following commits are ancestors of the accepted Phase B source:

| Milestone | Commit |
| --- | --- |
| Security batches 1/2/3/4 | `efb7c17`, `07e18bd`, `ca175d7`, `9155df9` |
| Workstation integration | `3fb230f` |
| Disclosure, interaction and mobile repairs | `1e3fc24`, `ee4beba` |
| B1 simulator foundation | `8c39a69` |
| B2 DHCP Command Prompt | `f5f8fb1` |
| B3A Network+ ACL | `9921615` |
| B3B Windows Firewall | `bc3fc13` |
| Vite security patch | `43ae9d2` |
| Prior release and AdSense readiness | `308d960`, `f20717a` |
| Analytics/consent and verified configuration | `7d14c40`, `0a538da` |
| Guide duplication repair | `0ec1e01` |
| Study Discovery A | `9f7462e` |
| Study Hubs B | `fc39d82` |

Original workstation checkpoint `b8f59b7` has the same stable patch ID as its
integrated `3fb230f` counterpart: `c3393ec3678d6c150b2e4db6f3969a1d8bb5a9af`.
It must not be cherry-picked again. Historical `react-migration` work is not part
of this release. Existing worktrees and feature branches were preserved.

## Exact change boundary from production

[The complete 67-file accepted-feature diff](release-analytics-study-files.txt)
lists every added/modified path between `f20717a` and `fc39d82`, including tests,
reports and prior screenshots. This release checkpoint adds only this report,
that inventory and eight fresh review screenshots. No application changes were
made during release preparation.

The functional changes are:

1. `src/lib/analytics.ts`, `src/lib/consent.ts`, the public analytics config and
   `src/content-client.ts`: optional GA4, persistent choices, sanitized pageviews
   and attempt events, and progressive enhancement for static documents.
2. `src/App.tsx`, `src/screens/Quiz.tsx`: analytics calls at existing page and
   exactly-once attempt boundaries. Session/scoring/timer implementation is unchanged.
3. `SiteFooter.tsx` and `Legal.tsx`: consent controls and accurate privacy disclosures.
4. `worker/index.ts`: only the approved CSP additions for Google Analytics script,
   image and collection hosts. No API, authentication, database or cron logic changes.
5. `Guides.tsx`: correctly placed instructional closing sections and relevant hub
   backlinks. The live PBQ overview currently has 12 erroneous repeated closing
   sections; the candidate has none there, as intended for an overview. Exam guides
   have exactly one relevant closing section; distinct educational content remains.
6. The existing resource registry, StudyLinks, homepage/picker/menu/results/search
   and InfoPages: study discovery and relevant references without duplicate catalogs.
7. `StudyHub.tsx`, shared static shell, routes and prerendering: 11 static hubs,
   783 existing topic-video mappings, relevant guides/references and safe links to
   existing learning tools. CLF-C02/SAA-C03 show no unavailable interactive lab.
8. `vite.config.ts` and prerendering: the small static consent entry, canonical
   metadata, CollectionPage/BreadcrumbList schema and sitemap additions.

Question banks, vendor rules, grading engine, quiz-session reducer, simulation
implementations, auth implementation, D1 schema, package manifests/lockfile and
Wrangler configuration are byte-identical to the production source. All 11 hubs
retain the original guides' canonical addresses; no full guide content is copied.

## Analytics and privacy readiness

Read-only authenticated Google inspection confirmed:

- Cert900 property `559949129`, Cert900 Web stream `16174995362`.
- Stream URL `https://cert900.com`; public Measurement ID **`G-BBMQ8EC9G6`**,
  matching the tracked config and production-host allowlist.
- Enhanced Measurement **off** (the actual switch state was read).
- Event/user retention both **2 months**, reset on new activity **off**, Save disabled.
- Google currently reports no data received. The integration has not been deployed.

The client disables Google Signals/ad-personalization signals and denies all
advertising consent categories. Google advertising and Grow remain disabled;
the ownership meta tag is not an advertising loader. Existing Cloudflare Web
Analytics is preserved and disclosed separately.

Fresh unit/browser tests confirmed no GA4 config fetch, tag or event before
consent; persistent Allow/Decline and withdrawal; cookie removal/disable handling;
path sanitization and duplicate prevention; exactly-once starts/completions; no
retrospective completion without a consented start; and no ads/Grow requests.
Payloads accept only known certification IDs, modes and sanitized page context,
never accounts, answers, scores, question text or console transcripts. All 11
hub paths are included in the analytics allowlist and use the same controls.

**No owner setup or new privacy choice is outstanding.** Actual Google SDK
transport/Realtime ingestion is still a post-approval check. Automated transport
tests use a stub; local previews cannot collect against the real property because
their hosts are excluded. Do not enable Enhanced Measurement or install another tag.
After an approved promotion, verify one genuine consented visit in GA4 Realtime
and later check the two learning events as real activity arrives.

## Fresh combined validation

Node 24.21.0, npm 11.19.0, installed Chrome 155.0.8059.39 on Ubuntu.
Dependencies installed with `npm ci --ignore-scripts --no-audit --no-fund`.
No lifecycle scripts were approved and no dependencies were changed.

| Check | Result |
| --- | --- |
| Full unit/integration suite, bank integrity and scoring | **553 passed**, 35 files |
| Complete production-browser regressions | **141 passed** (62 + 38 + 41) |
| Simulator hook/performance checks, run serially afterwards | **7 passed** |
| Production build | Passed; TypeScript, CSS, 21 guides + 11 hubs |
| Full / production-only npm audit | **0 / 0 findings** |
| Dependency tree | `npm ls --all` passed without conflicts |
| Isolated Worker | **13 groups passed**, zero outbound Worker requests |
| Generated routing/SEO sweep | 32 single-H1 documents with their own canonicals, 36 unique sitemap URLs, 81 valid internal destinations |
| Wrangler upload dry run | Passed locally; `--dry-run: exiting now`; no upload |
| Diff hygiene and protected-source checks | Passed |

Worker checks include synthetic authentication/session issuance/invalidation,
anonymous restrictions, progress writes/reads, D1 initialization and persistence
after restart. No production database or integrations were used. Tests cover
practice, PBQ Lab and exam modes, all four featured simulations and legacy PBQs,
five widths (320/375/390/768/1440px), both themes, keyboard/touch, reset/isolation,
navigation/refresh, consent, duplicate instructional sections and disabled ads.
Existing screenshot baselines were not changed.

The build retains its pre-existing entry-chunk size warning. Physical-device and
screen-reader verification remain manual, and third-party video availability was
not exhaustively re-probed. Existing mappings and HTTPS syntax are verified.

## Non-blocking usability finding

**Low severity, pre-existing:** finishing an exam from a scrolled position can
retain that position on Results, putting the score and study links above the
viewport. A fresh 390x1100 synthetic flow reproduced this in the preserved
production build (`scrollY=1607`, score top `-1462px`) and candidate
(`scrollY=1113`, score top `-968px`). The unchanged finish handler has no scroll reset.
Grading and controls remain functional; scrolling to the top reveals them.
This release adds no fix. A bounded follow-up could reset scroll when Results
opens, subject to separate approval. The results screenshot is scrolled to the
top for inspection. No release-blocking regression was found.

## Preview and review evidence

Running isolated preview: **http://127.0.0.1:4230/study/220-1201**.
Homepage: `http://127.0.0.1:4230/`. Repaired overview:
`http://127.0.0.1:4230/comptia-pbq-practice`. Do not rebuild while this preview runs;
restart it after rebuilding so its asset manifest matches.

```sh
cd '/home/sorannex/Claude Projects/cert900/analytics-study-release-worktree'
node tools/qa/isolated-worker.mjs --serve --port=4230
```

Fresh screenshots in `docs/screenshots/release-analytics-study/`:

- [Desktop hub](screenshots/release-analytics-study/hub-1440.png)
- [Mobile hub](screenshots/release-analytics-study/hub-390.png)
- [Desktop consent](screenshots/release-analytics-study/consent-1440.png)
- [Mobile consent](screenshots/release-analytics-study/consent-390.png)
- [Repaired guide](screenshots/release-analytics-study/repaired-pbq-guide-390.png)
- [Reference](screenshots/release-analytics-study/reference-390.png)
- [Exam menu](screenshots/release-analytics-study/menu-390.png)
- [Synthetic results, scrolled to top](screenshots/release-analytics-study/results-390.png)

Playwright MCP also inspected the actual local hub at 320px: one hub, no overflow,
visible Allow/Decline, no loaded GA4 or advertising script. Installed-Chrome
automation provides screenshots; the extension's screenshot stability wait has
previously timed out. The temporary baseline-comparison preview was stopped.

## Production configuration and controlled procedure

Read-only Wrangler and dashboard checks confirmed the active account/Worker,
bindings/types, D1 identity, assets behavior, runtime date `2026-07-14`, and
`nodejs_compat`. Plain bindings match tracked configuration (values not printed).
Custom domains are `cert900.com` and `www.cert900.com`; workers.dev and preview
URLs exist. Raw schedule API expressions match the repository: `30 14 * * *`
and `0 15 * * 1`. The dashboard's weekly human-readable label said Sunday;
the authoritative API expression matches the tracked Monday schedule.

No bindings, secret values, schema changes, migrations, custom-domain changes,
cron changes or new external-service setup are required. Existing secret names:
`APPLE_CLIENT_ID`, `APPLE_CLIENT_SECRET`, `BETTER_AUTH_SECRET`, `BSKY_APP_PASSWORD`,
`BSKY_IDENTIFIER`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `RESEND_API_KEY`,
`X_ACCESS_SECRET`, `X_ACCESS_TOKEN`, `X_API_KEY`, `X_API_SECRET`. Required non-secret
bindings remain `ASSETS`, `DB`, `EMAIL`, `ADMIN_EMAILS`, `AUTH_EMAIL_FROM`,
`BETTER_AUTH_URL`. Secret values were not accessed or displayed.

The saved production build command is `npm ci && npm run build`; deploy command
is **`npx wrangler versions upload`**, verified in the freshly loaded dashboard.
No Builds API retries or settings changes were made. Main is not pushed in this
phase. Recheck the build configuration/queue before any later main synchronization.

The following commands are proposals for separate approval, **not executed**.
Use installed Wrangler 4.151.3 and the default environment, not ordinary `wrangler deploy`.
Cloudflare documents [upload/deployment separation](https://developers.cloudflare.com/workers/versions-and-deployments/)
and [100%/0% version-override staging](https://developers.cloudflare.com/workers/versions-and-deployments/version-overrides/).

### Approved-upload stage, only after authorization

```sh
cd '/home/sorannex/Claude Projects/cert900/analytics-study-release-worktree'
git status --short
git rev-parse HEAD
sha256sum -c /tmp/cert900-combined-build-sha256.txt
export CLOUDFLARE_ACCOUNT_ID=1b1616577db046499059fc8a612da241
export CLOUDFLARE_LOAD_DEV_VARS_FROM_DOT_ENV=false
export WRANGLER_SEND_METRICS=false
npx --no-install wrangler deployments list --name comptia-practice-trainer --json
npx --no-install wrangler versions upload --name comptia-practice-trainer \
  --keep-vars --tag cert900-analytics-study \
  --message "Approved combined analytics/study release; inactive pending staging"
```

Stop if the expected production allocation changed, the worktree/artifacts changed,
or a binding/configuration difference appears. Record the new UUID; read back its
configuration and confirm it is inactive. Do not pass a secrets file or invoke
commands that reconcile triggers/domains. Preserve the existing versions.

### Approved 0% staging, only after authorization

```sh
# Set this only to the uploaded UUID whose source/configuration was verified.
: "${CANDIDATE_VERSION_UUID:?Set to the verified candidate UUID}"
npx --no-install wrangler versions deploy \
  1fc39b02-f078-441c-a147-6a1a7326082c@100 "${CANDIDATE_VERSION_UUID}@0" \
  --name comptia-practice-trainer --yes --message "Approved 0% candidate staging"
```

Read back the allocation. Test on the canonical domain with
`Cloudflare-Workers-Version-Overrides: comptia-practice-trainer="<candidate UUID>"`
on **every same-origin HTML, JavaScript, CSS, font and image request**. Disable
browser cache in the test context. Prove selection using the new hub's HTML,
candidate-only analytics CSP and exact candidate asset hashes; a plain 200 is
insufficient because invalid overrides fall back to ordinary production.
Use read-only public/anonymous checks and decline analytics during automated
production staging. Do not create accounts, write D1, invoke cron or send email.

### Approved promotion, only after successful staging and authorization

```sh
: "${CANDIDATE_VERSION_UUID:?Set to the verified candidate UUID}"
npx --no-install wrangler versions deploy "${CANDIDATE_VERSION_UUID}@100" \
  --name comptia-practice-trainer --yes --message "Approved combined release promotion"
```

Verify the active UUID/allocation; both domains; homepage, hubs/guides/references,
sitemap/assets; public API restrictions; exam/lab initialization; all simulations;
mobile/console/HTTP errors; consent/withdrawal and absence of ad requests. Check
available metrics immediately and after a short follow-up. Detailed logs and
actual GA4 ingestion remain deployment-stage checks, not claims from local tests.

### Rollback after a verified release-critical regression

```sh
npx --no-install wrangler versions deploy \
  1fc39b02-f078-441c-a147-6a1a7326082c@100 \
  --name comptia-practice-trainer --yes --message "Rollback combined release"
npx --no-install wrangler deployments list --name comptia-practice-trainer --json
```

Confirm the restored UUID at 100% and basic functionality in a fresh browser
context. No database rollback is necessary. Do not roll back for the known
pre-existing scroll issue or an uncorroborated test-harness timeout.

**Stop here. Upload, staging, promotion and main synchronization each remain
outside this preparation's authorization. Advertising activation is excluded.**
