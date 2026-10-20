# B3B: Warehouse Windows Firewall simulator

Isolated branch `codex/pbq-firewall-b3b`, based on accepted B3A
`9921615826f2c3de85ebc8248d162df6b5ea70df`. Original worktrees are preserved.
No bank, engine/session API, backend, schema, production configuration or
runtime dependency change is required.

## Approved rubric and educational purpose

Three equal instructional objectives represent Domain application availability,
Private application availability, and isolation through program exceptions.
They are Cert900 educational weights, not proprietary exam scoring.

1. Across supported inbound TCP/UDP flows on Domain: Inventory is allowed at
   every port, and no other application is exposed.
2. The same effective policy on Private.
3. Public inbound remains blocked, other applications remain unexposed, no
   enabled inbound Port/Predefined Allow exists, and at least some trusted-profile
   Inventory traffic functions. Deny-all earns no free isolation credit.

Names, row order, creation history, drafts and traffic tests are unscored.
Combined or split profile program exceptions are equivalent. Disabled rules
have no effect. Block rules can prevent access but do not violate the structural
program-exception policy. Enabled inbound Port/Predefined Allows violate that
explicit requirement even when shadowed. No new egress requirement is scored.
Initial/reset empty policy earns zero, the approved change from the legacy
worksheet's initial 1/6. Unregistered/native rendering remains unchanged.

Incomplete means missing required access. Insecure means unauthorized exposure
or violation of the explicit program-exception requirement. Both may coexist.
Post-grade explanations distinguish them; equal percentages can mean different
repairs. Domain only earns 2/3; correct trusted access plus Public exposure earns
2/3; broad All-program Allow earns zero; the constrained complete policy earns 1.

## Separate Windows semantics and exactness

For the active profile/direction/application/protocol/local-and-remote ports,
any enabled matching Block overrides all matching Allows, otherwise a matching
Allow wins, otherwise the fixed default applies. Inbound Block / outbound Allow,
firewall On for all three profiles. There is no first-match ordering.

Application identities are the fixture's Inventory, Diagnostics Helper and
Remote Desktop, plus All programs. An unmatched Other equivalence class is
available to traffic analysis, never as an editable complement matcher.
Paths are synthetic display metadata, not a typed-path grading requirement or
filesystem access. Program rules cover TCP/UDP and all local/remote ports.
Port rules support TCP/UDP and Any, single or inclusive 0..65535 intervals on
both local and remote ports. The bounded Predefined Remote Desktop template
uses its service identity, TCP and destination port 3389 (local inbound, remote
outbound). Outbound decisions are operational but unscored. Tests report
firewall admission, not end-to-end connectivity or reply traffic.

Exact analysis partitions both port axes at every rule interval boundary.
All predicates are constant per cell, across all three profiles, four app
classes and two protocols. Twelve rules yield at most 15,000 cells / 180,000
rule visits. Hard ceilings 65,536 cells / 1,000,000 visits never truncate or
approximate analysis. Rules, draft, revision, traffic form and latest 20
revision-tagged results remain in one authoritative session answer.

IPv6, ICMP, addresses, service-specific wildcards, IPsec, connection tracking,
GPO/MDM policy merging and authenticated bypass are outside this bounded pilot.
No real firewall commands, host shell, filesystem or network changes occur.

## Baseline and foundation checkpoint

Scripts-disabled lockfile installation; 412 baseline tests; build and dependency
tree pass. Fresh full and production-only audits each report one pre-existing
moderate finding for Vite 7.3.6, GHSA-698v-4r3x-3vcv. Its Oct 20 update covers
Windows development editor command escaping, patched in Vite 7.3.7. This Ubuntu
static/Worker deployment does not use the Windows editor endpoint. Vite is a
build/development tool even though an optional peer path retains it in npm's
production-only tree. No advisory is suppressed and no dependency is changed.
Source: https://github.com/advisories/GHSA-698v-4r3x-3vcv .

Foundation validation: 443 unit tests pass, including unchanged bank integrity,
DHCP and ACL suites; production build passes (existing chunk-size warning).
Definition registered but learner opt-in waits for the workspace checkpoint.

Foundation checkpoint: `75570fb2582662026bc34a56f7ccd3d9e05393aa`.

## Workspace and reuse

`scenarios/WindowsFirewallWorkspace.tsx` supplies the original Windows-style
administration surface: three profile status cards, Overview/Inbound/Outbound/
Traffic navigation, local policy status, read-only defaults and post-grade
review. Mobile uses rule cards and full-screen scrolling editors; desktop uses
a table. Program scope shows the installed fixture identity/path. Port and
Predefined alternatives remain functional, with explicit local/remote port
orientation. Editing, Apply/Cancel, enabled state and delete confirmation work.
Traffic inspection can select app, profile, direction, protocol and both ports,
and records the deciding Block/Allow/default plus revision. No live connection
is made. No Windows artwork, screenshots or proprietary exam assets are copied.

The B3A `AdministrationWorkspace`, `AdminField` and `RuleEditorDialog` are
reused with optional navigation, instruction label and test-ID props; their ACL
defaults remain unchanged. `WindowsRuleCollection` shares presentation patterns
but intentionally has no priorities or move controls. Its evaluator does not
import or reuse the ACL first-match evaluator. Microsoft documents explicit
Block precedence over conflicting Allows:
https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/rules .

The lazy scenario registration binds only A+ Core 2 / Configuring Windows
Firewall (domain 1 Operating Systems) / `Windows Defender Firewall: Allow the
App`. The web opt-in is restricted to PBQ Lab and timed exam, resolving modules
before the timer. MC practice and unregistered questions keep legacy behavior.
The existing shared engine remains the single grading boundary; existing vendor
credit, scaling, progress callbacks and session stale/lock guards are unchanged.
Only nav, dialog focus and pending deletion are local presentation state. Drafts,
applied policy and traffic history are authoritative session state. Reset uses
`session.resetSimulation()`, including from an open editor, and clears that
question's full scenario state. Browser reload persistence is not implemented.

The generic configuration keyboard regression now uses unregistered **Harden
the Local Sign-In**, keeping genuine legacy coverage. The four existing Windows
worksheet snapshots intentionally become the new Windows Overview candidates.
All other pre-existing screenshots, particularly DHCP and Network ACL, must pass
unchanged. Thirty additional Windows candidates cover rule cards/table, editor
validation and traffic at five widths in both themes. Candidates require user
review; generating baselines does not establish human approval.

### Grading examples

| Policy | Credit | Feedback |
|---|---:|---|
| Empty / outbound exception only | 0 | Incomplete |
| Inventory program, Domain only | 2/3 | Incomplete, secure isolation |
| Inventory program, Domain + Private | 1 | Meets work order |
| Separate equivalent trusted-profile program rules | 1 | Meets work order |
| Correct trusted exception plus Public Inventory Allow | 2/3 | Insecure |
| All programs allowed on trusted profiles | 0 | Insecure |
| Inventory allowed, conflicting Domain Block | 2/3 | Incomplete |
| Correct trusted policy, Public raw Allow masked by Block | 2/3 | Insecure construction, no effective exposure |
| Inventory allowed plus raw UDP opening on trusted profiles | 0 | Insecure; both exact trusted objectives fail |
| Correct exception plus disabled broad Allow | 1 | Meets work order |

No milestones or satisfied-objective badges appear before grading. Work-order
requirements and operational admission results are visible; these are task
facts and user-requested diagnostics, not answer-key feedback.

## Local preview and manual review

```sh
cd '/home/sorannex/Claude Projects/cert900/firewall-b3b-worktree'
# Only if dependencies are absent:
# npm ci --ignore-scripts --no-audit --no-fund
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4179
```

Open **http://127.0.0.1:4179** → **A+ Core 2 (220-1202)** → **PBQ Lab** →
**Windows Defender Firewall: Allow the App**. The lab is shuffled; Check/Next
passes other questions. Full Exam also uses the simulator when selected.
The preview uses only fresh synthetic local resources. Keep its process running
and stop it before rebuilding; asset manifests are loaded when it starts.

Reproduce checks (installed Chrome, no browser downloads or script approvals):

```sh
npm test
npm run build
npm run test:simulations
CERT900_TEST_PORT=4177 npm run test:browser
npm run test:worker
npm audit
npm audit --omit=dev
npm ls --all
```

Screenshot candidates:

- [Desktop rules](../tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-1440-light-linux.png)
- [320px rules](../tests/pbq/windows-responsive.spec.ts-snapshots/windows-rules-320-light-linux.png)
- [390px editor validation](../tests/pbq/windows-responsive.spec.ts-snapshots/windows-editor-390-dark-linux.png)
- [375px traffic](../tests/pbq/windows-responsive.spec.ts-snapshots/windows-traffic-375-dark-linux.png)
- [Desktop Overview](../tests/pbq/responsive.spec.ts-snapshots/config-1440-light-linux.png)

Physical iOS/Android virtual-keyboard behavior, screen readers, IME and actual
Windows administration fidelity beyond the published bounded model remain
manual review requirements. This is an instructional policy simulator, not a
complete Windows computer. Profiles stay On with fixed defaults; no OS writes,
external commands, managed policy merging or packet/connection stack exists.

Stop after B3B for user review. No B3C, push, merge or deployment is authorized.
Rollback: keep this isolated branch/worktree and resume from accepted B3A or
the foundation checkpoint in a separate disposable worktree. Do not reset or
clean preserved branches to roll back. Dependencies and lockfile are unchanged.

## Final validation

| Check | Result |
|---|---|
| Scripts-disabled reproducible installation | Pass; lockfile/manifest unchanged |
| Full unit suite / bank integrity | 445 tests, 27 files pass (baseline 412) |
| Full production PBQ Chrome suite | 84 pass (baseline 62 + 22 Windows checks) |
| Real-hook / throttled performance Chrome suite | 7 pass, including existing DHCP/ACL |
| Production build / CSS / prerendered assets | Pass; existing >500kB chunk warning |
| Full npm audit | 1 moderate, 0 high/critical; unchanged from fresh baseline |
| `npm audit --omit=dev` | Same 1 moderate Vite finding |
| `npm ls --all` | Pass; no dependency conflicts |
| Browser and fixture TypeScript check | Pass with project aliases and Node/DOM types |
| Isolated Worker checks | 13 groups pass, zero outbound attempts |
| Staged diff whitespace check | Pass |
| Isolated review preview | http://127.0.0.1:4179 serves HTTP 200 |

The final production browser run uses fixed baselines, with no update flag.
Thirty new Windows candidates and four intentional Windows Overview replacements
are included. Every other prior snapshot, including all DHCP/ACL images, passes
unchanged. Reviewed candidates show full labels, bounded tables/cards and mobile
scrolling editors. The generic Overview regression masks headers during capture;
the dedicated Windows screenshots retain the actual administration banner.
Human screenshot approval remains the user's next checkpoint.

Tests cover equivalent split rules, Block precedence, incorrect apps/profiles,
Public exposure, raw-port exposure and masked construction violations, explicit
outbound behavior, defaults, disabled rules, all port boundaries, overlapping
intervals, invalid drafts, Cancel/Apply, editing/deletion, escaped names, rule
limits, revision-tagged diagnostics, bounded history, keyboard focus, touch,
authoritative reset and exam-navigation isolation. Module-load failures stay
before the timer. Batched Apply/grade reads committed policy and notifies once.
Locked/reset/finished behavior uses the existing session guards.

Complete workflows run at 320, 375, 390, 768 and 1440px, in both themes and with
reduced motion, long names and visible validation errors. They check no page
overflow/browser errors, 44px actions, 16px inputs, native option text widths,
keyboard-only creation and reduced-height editor viewports. Browser emulation
is not a substitute for the physical-device/accessibility checks noted above.

Worst-boundary exact grading: 15,000 cells / 180,000 rule visits. Five warm-ups
precede each measurement. Serial Node runtime grading, 25 samples: p95 11.92ms,
max 12.12ms. Installed Chrome at 4x CPU, 10 samples: p95/max 34.00ms. Both are
below the 250ms Node / 750ms browser targets. Environment: Ubuntu x86_64,
Node 24.21.0, npm 11.19.0, Chrome 155.0.8059.39. No approximation or truncation.

The Worker harness uses temporary configuration/home/cache and fresh local D1,
synthetic auth only, and disables OAuth, email/external integrations and remote
bindings. Static/CSS assets, API routing/errors, synthetic authentication/session
handling, D1 initialization/read/write/restart persistence and disabled outbound
integrations all pass. No existing secret/env files or production services are
used. Lifecycle scripts are not approved; no dependencies were changed.

Preserved worktrees were rechecked clean: PBQ b8f59b7, security 9155df9,
integration 3fb230f, repairs ee4beba, B2 f5f8fb1 and B3A 9921615. The security
and accepted B2 commits remain ancestors. No question bank, engine/session API,
authentication/Worker code, database schema, production config, package manifest
or lockfile has a B3B diff. No push, merge or deployment occurred.

Remaining security work is a separate compatible Vite patch review: the new
advisory affects development editor launching on Windows under the conditions
listed in its source. Vite 7.3.7 is the advisory's patched 7.x release. The
production-only audit path remains `better-auth` optional Vitest peer → Vite;
the application/Worker runtime does not import the development editor service.
No findings are suppressed, and this milestone does not claim a clean audit.
