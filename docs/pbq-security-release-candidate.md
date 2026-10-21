# Cert900 PBQ and security release candidate

## Release identity and approval boundary

- Branch: `codex/release-pbq-security-rc`.
- Worktree: `/home/sorannex/Claude Projects/cert900/release-candidate-worktree`.
- Application/test checkpoint: `43ae9d279ac68230fb04cc4519a00cefda3fceb0`.
- This branch adds only this release report to that already consolidated tree.
  Obtain the final report-inclusive commit with `git rev-parse HEAD`; its exact
  SHA is also supplied in the release handoff.
- **STOP before push, merge into main, deployment or production modification.**
  This candidate is for review. Production release needs separate explicit approval.

## Production source and rollback evidence

Fresh `git fetch --no-tags origin main` confirms both `origin/main` and local
`main` at **`5e25e23c458ec25914cb61f9d13ebcfedec80d0d`**. GitHub's read-only
check-run metadata records **Workers Builds: comptia-practice-trainer** as
successful for that exact SHA on **2026-09-06 06:24:23 UTC**, build
`b2dd0b9a-ed53-4fa7-9a0c-b43df2cf52f5`. The two GitHub smoke/handoff checks also
succeeded. GitHub's deployment collection is empty.

That is a verified source checkpoint with a successful production build,
**not proof of the currently active Cloudflare version**. The public site
responds but exposes no inspected Git-revision metadata/header. No authenticated
Cloudflare metadata or credentials were accessed. Before any release, the
operator must record the active deployment ID, version ID and associated Git
commit from Cloudflare. If it differs, review the delta before proceeding.
Never substitute a Git SHA for the Cloudflare version ID required by rollback.

## Accepted history: every milestone included

The application checkpoint is 15 commits above the refreshed source baseline.
All accepted changes are already in its ancestry; no merge/cherry-pick is needed.

| Accepted milestone | Included commit |
|---|---|
| shadcn CLI removal; exact vendored CSS and MIT attribution | `efb7c17560bf1ecba810dae0f7b6607fbcf70802` |
| Vitest update and supported Tinypool removal | `07e18bd22dfe70257ad69b884ec9bc8a342c9c11` |
| Wrangler/Cloudflare dependency remediation | `ca175d7000faa6b4a9eab36a275e9d0b1cfe721f` |
| Remaining compatible transitive security updates | `9155df986bfb4e70ae49005a02c6f770193ae235` |
| Integrated workstation pilot | `3fb230fae3d97d16254d5b2bd782dfa5c0142393` |
| Isolated Worker and Chrome PBQ testing foundation | `f8f1f84fa608151f54ea6d2258b3be766962091f` |
| Pregrade disclosure and drag cancellation repairs | `1e3fc24cdafb13de3d96154328d76e13b5b94312` |
| Shared responsive/mobile/keyboard accessibility repairs | `ee4beba8f525e5c23ead280cb63f9d2c1a7650f5` |
| B1 authoritative simulator/session foundation | `8c39a6948d238eac48f329d379bce6dec09cfae5` |
| B2 Windows DHCP command console | `f5f8fb10f450c14da68a0b87fd64b31c30a73e93` |
| B3A exact ACL evaluator and grading foundation | `fc16c667c5823b596c3a99099c6fb31f4af501c4` |
| B3A Network+ administration workspace | `9921615826f2c3de85ebc8248d162df6b5ea70df` |
| B3B separate Windows policy foundation | `75570fb2582662026bc34a56f7ccd3d9e05393aa` |
| B3B Windows application firewall workspace | `bc3fc13e6f5f401c3c8452f244df206e59bf74b5` |
| Final Vite security patch | `43ae9d279ac68230fb04cc4519a00cefda3fceb0` |

Original workstation checkpoint `b8f59b7622865439133d3357e373ec743d0b2667`
is not an ancestor because it was cherry-picked as `3fb230f`. Their stable
patch IDs are identical: `c3393ec3678d6c150b2e4db6f3969a1d8bb5a9af`.
Do not apply it twice. The historical WIP subject does not indicate missing work.
All other feature branches have zero additional unique commits. No accepted
upgrade is missing, and no extra feature-branch work needs consolidation.

### Included behavior and exact boundaries

- Workstation: clearer targets, connector selection, pointer/tap/keyboard
  placement, feedback and authoritative answer reset; original four-zone map,
  distractors and quarter-point credit retained.
- Shared PBQ repairs: neutral ungraded connector names, scene descriptions,
  numbered photo targets and complete external controls, safe drag cancellation,
  44px ordering controls, hotspot padding/HTML alternatives, responsive forms,
  terminal readability and bounded mobile headers.
- B1/B2: one authoritative versioned session answer, deterministic allowlisted
  Windows commands, history/recall/cls/reset, navigation persistence and the
  existing single score/progress boundary. No host commands run.
- B3A: first-match ACL, exact interval analysis, default deny, rule editing,
  ordering, traffic testing and responsive administration UI.
- B3B: independent Windows Block-over-Allow policy evaluation, application
  identities, profiles, inbound/outbound rules, dialogs and traffic inspection.
- Legacy renderers remain for unregistered questions. MC practice remains MC.
  The three registered web pilots have accepted scenario-specific rubrics:
  DHCP ordered release/renew/flush thirds; ACL exact HTTPS/management SSH/least
  privilege thirds; Windows Domain/Private/isolation plus program-exception
  thirds. Windows initial/reset zero is an explicitly approved change from
  the legacy worksheet's initial 1/6. Existing vendor credit/scaling and
  exactly-once progress updates remain the shared path.
- Security: removed unused shadcn CLI, preserved its stylesheet/license,
  upgraded Vitest and Cloudflare tooling, patched compatible transitives and
  Vite. No new learner-runtime dependency was introduced for simulators.

Compared with the source baseline, the application/test tree changes **179
files, 7,647 insertions and 4,925 deletions**. The report is one additional
administrative file. The complete application file manifest is appended below.

There is no diff in question banks, Worker/backend, schema, authentication,
progress storage/folding, vendor definitions, production Wrangler config,
GitHub workflow, route definitions, HTML entry or prerender implementation.
The mobile sync script copies the portable core contracts; native simulator
interfaces remain deferred. Existing monetization code is baseline-only and
unchanged. No AdSense or new monetization feature is added.

## Validation

All checks below passed on the dedicated release worktree, using Node 24.21.0,
npm 11.19.0 and installed Chrome 155.0.8059.39 on Ubuntu x86_64. No browser
was downloaded and no lifecycle script was approved.

| Release check | Result |
|---|---|
| Reproducible lockfile installation | `npm ci --ignore-scripts --no-audit --no-fund` passes; package files exactly match 43ae9d2 |
| Unit/integration/bank/scoring suite | **445 tests / 27 files pass** |
| Production PBQ browser regressions | **84 pass**, no screenshot update flag; all 86 tracked baselines unchanged |
| Simulator real-hook/performance browser suite | **7 pass** |
| App/Worker type checks, CSS/build/prerender | Pass; 21 rendered guides and 25 sitemap URLs generated |
| Full / production-only npm audits | **0 / 0 findings**, including no remaining Vite advisory |
| Installed dependency consistency | `npm ls --all` passes; no conflicts |
| Isolated Worker suite | **13 groups pass**, zero outbound requests |
| Supplemental release smoke suite | **9 groups pass**, detailed below |
| Whitespace and code-boundary checks | Pass; no source/config/package diff from 43ae9d2 |

Additional release-only checks used temporary scripts and a second fresh local
Worker on port 4182; that test server was stopped and closure verified:

- All **21 guides**, **25 sitemap URLs**, **42 JSON-LD blocks**, plus legal SEO
  metadata, canonical/OG consistency and readable prerendered content pass.
- **40 hashed assets + six metadata/icon assets** pass MIME/cache checks; missing
  assets do not masquerade as successful HTML. Local referenced fonts/images
  and styles load correctly.
- **73 valid HTTP deep routes + three genuine 404/noindex cases** pass.
- Browser cold loading of **18 exam routes**, refresh of **six general routes**,
  exam-menu fallback for memory-only attempts/results, and back/forward pass.
- Additional Core 2 and Network+ MC practice checks pass, complementing the
  existing Core 1 practice regression.
- Synthetic local signup, real UI PBQ grading, a single stored grade contribution,
  fresh-browser cloud pull, UI sign-out and subsequent unauthorized API response
  all pass. The test accounts/cookies/passwords remain synthetic and unreported.
- DHCP, ACL and Windows Firewall each retain full credit through actual exam
  submission, progress folding and missed-question review. Pregrade rubric
  results remain hidden.
- Eight fresh screenshots (each pilot at 320/1440px) were inspected. Browser
  checks attempted zero external requests. The suite initially corrected two
  QA assumptions: the existing cloud debounce can lag local counters, and
  Results intentionally lists misses rather than correct simulator questions.
  No application fix was needed and no new application bug was established.

Temporary extra evidence lives at `/tmp/cert900-release-focused-qa/report.json`
and `/tmp/cert900-release-focused-qa/screenshots/`. Persistent baselines linked
below remain the reproducible visual evidence. The main browser suite exercises
all five required widths, both themes, keyboard/touch, reset and navigation,
including representative matching, ordering, terminal, config, hotspot and
photo connection PBQs; no new console/page errors were observed.

Installed security toolchain: Vite **7.3.7**, Vitest **4.1.12**, Wrangler
**4.151.3**, Workers types **5.20261019.1**, Miniflare **5.20261019.1-beta**,
workerd **1.20261019.1**, sharp **0.35.5**, undici **7.29.1**, esbuild **0.28.2**,
browserslist **4.29.4**, baseline-browser-mapping **2.11.30**, nanoid **3.3.20**,
postcss **8.5.31**, source-map-js **1.2.2**, Playwright **1.64.1**. Historical
milestone reports retain their earlier audit results; this release's current
zero-finding audits supersede their pre-Vite-patch warning.

Reproduce the maintained checks without production credentials:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm test
npm run build
npm run test:simulations
CERT900_TEST_PORT=4177 npm run test:browser
npm run test:worker
npm audit
npm audit --omit=dev
npm ls --all
git diff --check
```

Stop the preview before any rebuild; browser tests use a separate port. All
Worker checks use temporary configuration/home/cache and fresh local D1, with
synthetic authentication, no remote binding, no cron and blocked outbound access.

## Preview and visual review

The prepared preview is already running at http://127.0.0.1:4181. Use the
following commands only when restarting it after stopping the previous process.

```sh
cd '/home/sorannex/Claude Projects/cert900/release-candidate-worktree'
# Only if dependencies are absent:
# npm ci --ignore-scripts --no-audit --no-fund
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4181
```

Open **http://127.0.0.1:4181**. Select A+ Core 1 for **Provision the Sales
Workstation** and **Fix a Stale DHCP Lease**; Network+ for **Build the Edge ACL**;
A+ Core 2 for **Windows Defender Firewall: Allow the App**. Choose PBQ Lab and
use Check/Next to reach each shuffled item. Full Exam includes its registered
pilot when drawn. Preview uses synthetic local configuration and fresh D1;
keep it running and stop it before rebuilding.

Existing screenshot baselines are preserved. Review representative candidates:

| Workspace | Desktop | Mobile |
|---|---|---|
| Workstation | [1440px](../tests/pbq/responsive.spec.ts-snapshots/dragconnect-1440-light-linux.png) | [320px](../tests/pbq/responsive.spec.ts-snapshots/dragconnect-320-light-linux.png) |
| DHCP console | [1440px](../tests/pbq/responsive.spec.ts-snapshots/terminal-1440-light-linux.png) | [320px](../tests/pbq/responsive.spec.ts-snapshots/terminal-320-light-linux.png) |
| Network ACL | [1440px](../tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-1440-light-linux.png) | [320px](../tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-320-light-linux.png) |
| Windows Firewall | [1440px](../tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-1440-light-linux.png) | [320px](../tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-320-light-linux.png) |

Mobile editor examples: [ACL validation](../tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-320-light-linux.png)
and [Windows validation](../tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-390-dark-linux.png).
Automated workflows cover 320/375/390/768/1440px, both themes and reduced motion;
86 tracked baseline images cover the various states. Generic captures mask
headers; dedicated firewall captures retain the administration banner.

## Outstanding risks and limitations

No new application bug was established by the release checks. These are
deployment gates, manual checks and existing limitations.

| Severity | Item | Required treatment |
|---|---|---|
| High deployment gate | Active Cloudflare version/configuration and exact rollback version are unverified | Record and confirm before deployment approval/execution; stop on drift |
| Medium manual validation | Production Google/Apple OAuth, email and optional external services are not exercised with real credentials | Approved operator smoke test after authorized deployment; preserve existing config |
| Medium manual validation | Physical iOS/Android keyboard, IME, screen readers and non-Chrome engines are not established by emulation | Human review; do not claim automated physical-device/accessibility approval |
| Low known behavior | Attempts/transcripts persist within navigation, not browser reload | Refresh returns active quiz/results to exam menu, as documented; no new persistence feature |
| Low known photo geometry | Legacy rear-panel photo/metadata height convention is preserved; photo targets remain small on narrow screens | Use the complete 44px port-control alternatives; original SVG/zoom hardware work remains deferred |
| Low existing build warning | A production chunk exceeds 500kB | Warning remains; no unrelated bundling refactor |
| Low development compatibility | Miniflare 5 beta remains in approved toolchain | Isolated Worker tests validate this release; it is not the deployed Worker runtime |
| Informational | Native Expo simulator UI is deferred | This is a web release; no native package/store deployment |

Any newly confirmed release bug will be recorded with severity here; no new
application behavior is introduced to make validation pass.

## Environment, services and migrations

All names below are existing contracts; no secret or variable values are
included or exported.

| Purpose | Existing names |
|---|---|
| Cloudflare resources | `DB` (existing D1), `ASSETS` (`dist/`) |
| Plain configuration | `BETTER_AUTH_URL`, `ADMIN_EMAILS`, `AUTH_EMAIL_FROM` |
| Core authentication secrets | `BETTER_AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` |
| Optional native Apple sign-in | `APPLE_CLIENT_ID`, `APPLE_CLIENT_SECRET` |
| Optional email | `RESEND_API_KEY`, or `EMAIL` binding; `AUTH_EMAIL_FROM` also required |
| Optional Bluesky | `BSKY_IDENTIFIER`, `BSKY_APP_PASSWORD` |
| Optional Reddit | `REDDIT_CLIENT_ID`, `REDDIT_CLIENT_SECRET` |

No new binding, D1 migration, schema application, infrastructure setting or
secret is required. Do not reapply historical schema/migration comments.
Google OAuth, optional Apple, email transport, Bluesky, Reddit and IndexNow are
existing integrations. Existing daily 14:30 UTC and Monday 15:00 UTC schedules
remain; the scheduled IndexNow request is unconditional in existing code.
Isolated tests remove triggers and block outbound requests. No cron, real
OAuth/email/social action is part of this validation. Existing Analytics/Grow
behavior remains unchanged; no monetization integration is added.

## Deployment procedure — not executed

After explicit production approval, use one controlled deployment path. A push
to main can trigger Workers Builds automatically; do not combine that with a
manual deployment and accidentally release twice. The documented CI uses plain
`npm ci`; preserve it during this task and prefer the validated scripts-disabled
manual path for this release.

1. Record active Cloudflare deployment/version IDs and linked commit. Confirm
   existing DB/assets, routes, bindings, variables and schedules match the
   expected unchanged configuration. Stop on drift or missing required names.
2. Verify the exact approved release SHA and clean worktree. Reproduce the
   scripts-disabled installation/build and release checks if the tree changes.
3. Keep the previously recorded version available for rollback. With approved
   operator authentication, deploy the existing Worker configuration:

   ```sh
   cert900_release_sha=$(git rev-parse HEAD)
   ./node_modules/.bin/wrangler deploy \
     --config wrangler.jsonc \
     --keep-vars \
     --strict \
     --message "Cert900 PBQ/security release $cert900_release_sha"
   ```

`--keep-vars` retains dashboard-only variables; secrets are preserved by
Wrangler. Configured keys remain authoritative. `--strict` blocks conflicting
remote changes; do not bypass it, auto-confirm, upload secret files, create
resources or run migrations. These flags were verified in pinned Wrangler
4.151.3 and [Cloudflare's deployment documentation](https://developers.cloudflare.com/workers/wrangler/commands/workers/#deploy).

## Rollback procedure — not executed

The source rollback checkpoint is `5e25e23c458ec25914cb61f9d13ebcfedec80d0d`,
subject to confirming the actual active deployment before release. Preserve all
current worktrees and commits. For an approved emergency rollback, use the
recorded Cloudflare version ID, not the Git hash:

```sh
: "${cert900_previous_version_id:?Set the recorded previous Cloudflare version ID first}"
./node_modules/.bin/wrangler rollback "$cert900_previous_version_id" \
  --name comptia-practice-trainer
```

Rollback switches the Worker version and does not undo D1/resource changes.
This release introduces no migration. Recheck site/assets/auth/progress after
rollback. See [Cloudflare rollback documentation](https://developers.cloudflare.com/workers/versions-and-deployments/rollbacks/).

## Post-deployment verification — after separate approval only

- Record new deployment/version ID, release SHA and time; preserve old version.
- Check HTTPS apex, www/HTTP redirects, CSP/security headers and cache-busted
  homepage/hashed assets. Confirm newly deployed asset references, no stale chunks.
- Check all 21 guide/reference pages, 25 sitemap URLs, robots, legal pages,
  canonicals/structured data, deep routes/refresh and genuine 404/noindex behavior.
- Check `/api/config` and expected unauthorized API responses without exposing
  values. An approved operator tests Google sign-in and cross-browser/device
  progress sync using an authorized test account, then signs out.
- Review workstation, DHCP, Network ACL and Windows Firewall at desktop/mobile;
  verify reset/grade/navigation and representative legacy PBQs in Lab/exam.
- Confirm MC practice, timer behavior and progress; check console/network errors.
- Confirm optional integrations and schedules remain as intended; do not trigger
  newsletters/social posts or cron merely to test this release.
- On a material regression, stop rollout and request/execute the separately
  authorized rollback; preserve evidence and notify the operator.

## Exact application/test file manifest against source baseline

Generated by `git diff --name-status 5e25e23..43ae9d2`. This excludes only the
new release report itself. Full code review remains available with the same
Git range; no accepted branch content was selected blindly.

```text
A	docs/pbq-experience-repairs.md
A	docs/pbq-simulator-b1.md
A	docs/pbq-simulator-b2.md
A	docs/pbq-simulator-b3a.md
A	docs/pbq-simulator-b3b.md
A	docs/security-dependency-remediation.md
M	mobile/scripts/sync-shared.js
M	package-lock.json
M	package.json
A	playwright.config.ts
A	playwright.simulations.config.ts
A	public/licenses/shadcn-MIT.txt
M	src/App.tsx
M	src/components/pbq-images.ts
M	src/components/pbq-sims.tsx
M	src/index.css
M	src/lib/engine.test.ts
M	src/lib/engine.ts
M	src/lib/quiz-session.ts
M	src/screens/Landing.tsx
M	src/screens/Quiz.tsx
M	src/screens/pbq-bindings.test.ts
A	src/simulations/cli/CommandPromptWorkspace.tsx
A	src/simulations/cli/command-prompt.test.ts
A	src/simulations/cli/command-prompt.ts
A	src/simulations/core/contracts.ts
A	src/simulations/core/grading.ts
A	src/simulations/core/transition.ts
A	src/simulations/firewall-scenarios.test.ts
A	src/simulations/firewall/acl.test.ts
A	src/simulations/firewall/acl.ts
A	src/simulations/firewall/partition.ts
A	src/simulations/firewall/performance.test.ts
A	src/simulations/firewall/primitives.test.ts
A	src/simulations/firewall/primitives.ts
A	src/simulations/firewall/windows.test.ts
A	src/simulations/firewall/windows.ts
A	src/simulations/foundation.test.ts
A	src/simulations/registry.ts
A	src/simulations/scenarios/DhcpWorkspace.tsx
A	src/simulations/scenarios/EdgeAclWorkspace.tsx
A	src/simulations/scenarios/WindowsFirewallWorkspace.tsx
A	src/simulations/scenarios/dhcp-commands.ts
A	src/simulations/scenarios/dhcp-lease.ts
A	src/simulations/scenarios/dhcp-model.ts
A	src/simulations/scenarios/edge-acl.ts
A	src/simulations/scenarios/windows-firewall.ts
A	src/simulations/ui/AdministrationWorkspace.tsx
A	src/simulations/ui/RuleCollection.tsx
A	src/simulations/ui/RuleEditorDialog.tsx
A	src/simulations/ui/TrafficTester.tsx
A	src/simulations/ui/WindowsRuleCollection.tsx
A	src/simulations/ui/contracts.ts
A	src/simulations/web-registry.test.ts
A	src/simulations/web-registry.ts
A	src/simulations/windows-firewall-scenarios.test.ts
A	src/styles/vendor/README.md
A	src/styles/vendor/shadcn-LICENSE.md
A	src/styles/vendor/shadcn-tailwind.css
A	tests/pbq/README.md
A	tests/pbq/dhcp.spec.ts
A	tests/pbq/firewall-acl.spec.ts
A	tests/pbq/firewall-helpers.ts
A	tests/pbq/firewall-responsive.spec.ts
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-1440-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-1440-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-320-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-320-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-375-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-375-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-390-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-390-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-768-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-768-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-1440-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-1440-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-320-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-320-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-375-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-375-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-390-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-390-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-768-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-768-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-traffic-1440-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-traffic-1440-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-traffic-320-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-traffic-320-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-traffic-375-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-traffic-375-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-traffic-390-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-traffic-390-light-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-traffic-768-dark-linux.png
A	tests/pbq/firewall-responsive.spec.ts-snapshots/acl-traffic-768-light-linux.png
A	tests/pbq/firewall-screenshot.css
A	tests/pbq/firewall-windows.spec.ts
A	tests/pbq/foundation.spec.ts
A	tests/pbq/helpers.ts
A	tests/pbq/interactions.spec.ts
A	tests/pbq/responsive.spec.ts
A	tests/pbq/responsive.spec.ts-snapshots/config-1440-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/config-1440-light-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/config-320-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/config-320-light-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/dragconnect-1440-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/dragconnect-1440-light-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/dragconnect-320-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/dragconnect-320-light-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/header-application-320-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/header-landing-320-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/hotspot-1440-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/hotspot-1440-light-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/hotspot-320-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/hotspot-320-light-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/match-1440-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/match-1440-light-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/match-320-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/match-320-light-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/order-1440-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/order-1440-light-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/order-320-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/order-320-light-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/terminal-1440-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/terminal-1440-light-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/terminal-320-dark-linux.png
A	tests/pbq/responsive.spec.ts-snapshots/terminal-320-light-linux.png
A	tests/pbq/screenshot.css
A	tests/pbq/session.spec.ts
A	tests/pbq/windows-helpers.ts
A	tests/pbq/windows-responsive.spec.ts
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-1440-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-1440-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-320-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-320-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-375-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-375-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-390-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-390-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-768-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-768-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-1440-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-1440-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-320-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-320-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-375-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-375-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-390-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-390-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-768-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-768-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-traffic-1440-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-traffic-1440-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-traffic-320-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-traffic-320-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-traffic-375-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-traffic-375-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-traffic-390-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-traffic-390-light-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-traffic-768-dark-linux.png
A	tests/pbq/windows-responsive.spec.ts-snapshots/windows-traffic-768-light-linux.png
A	tests/simulations/README.md
A	tests/simulations/acl-fixtures.ts
A	tests/simulations/acl-performance.html
A	tests/simulations/acl-performance.spec.ts
A	tests/simulations/acl-performance.ts
A	tests/simulations/acl-session.html
A	tests/simulations/acl-session.spec.ts
A	tests/simulations/acl-session.tsx
A	tests/simulations/foundation.spec.ts
A	tests/simulations/harness.html
A	tests/simulations/harness.tsx
A	tests/simulations/windows-performance.html
A	tests/simulations/windows-performance.spec.ts
A	tests/simulations/windows-performance.ts
A	tests/simulations/windows-session.html
A	tests/simulations/windows-session.spec.ts
A	tests/simulations/windows-session.tsx
A	tools/qa/isolated-worker.mjs
A	tools/qa/simulation-harness.mjs
```
