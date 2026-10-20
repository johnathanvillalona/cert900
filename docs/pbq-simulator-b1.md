# B1: simulator foundation and DHCP rubric review

## Status and isolation

B1 implements internal contracts, the opt-in session/grading seam and the DHCP
model/rubric. **It does not enable a new learner-facing CLI.** The professional
console, parser, command handlers and web opt-in are B2, after this review gate.
No other pilot is enabled.

Branch: `codex/pbq-simulator-foundation`.
Worktree: `/home/sorannex/Claude Projects/cert900/simulator-worktree`.
Checkpoint/base: `ee4beba8f525e5c23ead280cb63f9d2c1a7650f5` (reviewed Plan A).
The repair, integration, security and preserved PBQ branches/worktrees remain
unchanged. No push, merge, deployment, install-script approval or dependency
change was performed. Question banks, authentication, backend, D1 schemas and
production configuration are unchanged.

## Implemented architecture

- `src/simulations/core/contracts.ts`: generic, versioned scenario definitions,
  JSON runtime answers/actions, bindings and objective/legacy grading adapters.
- `core/transition.ts`: validated, deeply frozen state, fresh initial factories,
  deterministic transitions and version-frozen compiled adapters. Invalid foreign
  or unsupported-version envelopes cannot fall back to terminal regex scoring.
- `core/grading.ts`: objective weights or projection of committed legacy values.
  CLI outcomes use explicit objective evaluation, never invented canonical
  command strings. Legacy projection retains existing scoring and initial credit.
- `registry.ts`: metadata-only registrations with lazy imports. Explicit opt-in
  is required; `prepareSimulationBindings(exam, ids)` must resolve before mounting
  the session/starting the timer. Tests bind the tuple (exam, kind, topic, title)
  uniquely to the actual bank question.
- `scenarios/dhcp-lease.ts`: deterministic APIPA/healthy-adapter/DNS fixture and
  ordered outcome rubric. B1 exposes internal model actions, not command syntax.
- `src/lib/engine.ts`: optional definition context on `pbqScore` and
  `pbqAnswerBlank`; existing calls/legacy answers remain supported.
- `src/lib/quiz-session.ts`: optional fifth bindings argument; per-question
  definitions frozen for an attempt; `dispatchSimulation`, `resetSimulation` and
  current/per-question definition access. Only the simulation envelope in
  `session.answers` owns runtime state. There is no mirrored mutable answer array.
- `src/screens/Quiz.tsx`: passes definition context in palette/feedback scoring.
  No renderer or screen enables a scenario yet.
- `mobile/scripts/sync-shared.js`: copies portable `simulations/core` alongside
  existing lib/data. Scenario modules and React workspace code stay web-only.
  This preserves legacy native callers; native simulator parity is deferred.

State flow remains:

`session action -> authoritative answer -> pbqScore -> vendor credit -> existing weighting/scaling -> existing progress folding`

Simulation actions are applied synchronously by the reducer. Grading reads that
committed state, even when an action and grading are queued in the same event.
Notifications for simulation grades run once after commit; repeated grading and
Strict Mode effect replay cannot duplicate result callbacks. Existing PBQ
notifications also reject repeated calls within a render. Exam completion still
uses the existing Quiz completion/progress path.

Reset restores the active question's whole initial state, including history,
and respects post-grade/post-finish locking. Navigation preserves virtual state;
a fresh attempt initializes fresh objects. Replacing binding props does not
reinterpret an attempt. Stale actions from another question are ignored.

## DHCP rubric, version 1

Binding: Core 1 / terminal / `troubleshooting-networks` / **Fix a Stale DHCP Lease**.
The original bank's scenario, prompts, accepted regexes and answer data are
unchanged; unregistered callers continue using them.

| Objective | Weight | Evidence |
|---|---:|---|
| Release | 1 | The virtual adapter's broken lease was released. |
| Renew | 1 | A successful renewal followed that release, and the adapter currently has the healthy fixture configuration. |
| Flush DNS | 1 | Cache clearing followed the successful renewal, with the healthy adapter still configured. |

Raw credit: 0, 1/3, 2/3, 1. Existing CompTIA partial credit, weight 2, scaled
scores and progress thresholds remain unchanged. Other vendors retain their
existing partial versus all-or-nothing policy at the same scoring entry point.

Explicit edge cases for review before B2:

- Early renewal changes the virtual adapter but does not earn ordered credit.
- Flushing before renewal clears the cache but does not earn the third objective;
  the candidate can flush again after renewal.
- Wrong adapters/unsupported internal actions do not mutate the model.
- Repeating a successful renewal does not undo completed valid work.
- Releasing again starts a recovery cycle and invalidates renewal/flush credit
  until the adapter is recovered again; release credit remains.
- A fresh DNS lookup after flushing must not remove earned credit. Diagnostic
  commands can populate a healthy cache without changing the scored milestones.
- Diagnostics alone remain unscored and do not count as nonblank scored progress.
- Config adapters are not forced to zero initial credit; a legacy-projection
  fixture explicitly verifies existing initially correct settings still count.

## Proposed bounded B2 command support

This table is the parser scope to review at the B1 checkpoint; it is not yet
implemented. Microsoft documents optional adapters for release/renew, quoted
adapter names and `*` matching. The pilot will implement a bounded subset of
native syntax, with unsupported syntax clearly identified as a simulator limit.
[Microsoft ipconfig reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig)

| Command | Proposed support | Credit |
|---|---|---|
| `ipconfig` | Current adapter configuration | None |
| `ipconfig /all` | Detailed virtual adapter/lease/DNS evidence | None |
| `ipconfig /displaydns` | Actual virtual cache | None |
| `ipconfig /release [adapter]` | All virtual adapters, `Ethernet0`, quoted name, or `*` pattern matching that adapter | Release |
| `ipconfig /renew [adapter]` | Same bounded adapter selection; deterministic healthy DHCP lease | Ordered renewal |
| `ipconfig /flushdns` | Clear the virtual cache | Ordered cache clearing |
| `ipconfig /?`, `help`, `help ipconfig` | Supported-command help and limitations | None |
| `ping` | Bounded IPv4/local fixture destinations and diagnostic responses; limited count option | None |
| `cls` | Clear console presentation, retain virtual system/objectives and command recall | None |

Command/option case and surrounding whitespace will be accepted, along with
`ipconfig.exe` and `ping.exe` aliases. Quoting and wildcard matching will be allowlisted parsing, with no
host shell, subprocess, eval, real ICMP/network requests, pipelines, redirection,
arbitrary scripts or generated command responses. IPv6 and unimplemented
ipconfig switches will return an explicit simulator limitation.

B2 UI scope: one Command Prompt workspace with task/evidence sidebar, live
adapter/cache evidence, real output/errors from the model, command recall,
persisted transcript, explicit Run button, 16px input, responsive layout,
keyboard/touch operation and authoritative reset. No OS desktop emulation or new
runtime dependencies. Show grades only through the existing submission flow.
Load the pilot before the exam timer starts and retain legacy rendering for all
unregistered questions/modes. B2 needs a separate browser/demo acceptance review.

## Validation

Baseline: scripts-disabled clean install, 270 tests, production build, zero full
and production-only audit findings, and a clean Git checkpoint.

Final evidence:

- 287 unit tests in 19 files pass, including 17 new foundation/model tests and
  existing bank integrity/scoring tests.
- Production build passes (app/Worker typechecks, CSS/assets, 21 prerenders).
  Existing Vite chunk-size warning remains.
- Three installed-Chrome tests exercise the real React hook: batched action +
  grading, exactly-once callbacks/retry/locking; reset/navigation/version freeze;
  exam weighting/scaling and exactly-once progress folding. Fixture uses Strict
  Mode, synthetic in-memory data, no Worker/auth, no env files and no external
  browser requests. `npm run test:simulations` runs these development-only tests.
- Browser fixture TypeScript and portable vendored engine/session/core TypeScript
  checks pass. Full Expo/device validation was not performed; no native pilot is
  enabled and no mobile dependencies were installed.
- Existing 30 browser/screenshot regressions: all pass on :4176, without
  updating the 26 screenshot baselines.
- Isolated Worker checks: all 13 groups pass, including synthetic auth/API,
  fresh D1 initialization/read/write/restart persistence, static CSS/assets and
  disabled integrations. Worker outbound attempts: zero.
- Both audits: zero findings. `npm ls --all`: no dependency conflicts.
- No dependency or lockfile change; only a package script was added.
- The DHCP definition/fixture/registry and developer harness are absent from the
  production JS/assets; no simulator is eagerly loaded or exposed to learners.

Reproduce after building:

```sh
npm test
npm run build
npm run test:simulations
CERT900_TEST_PORT=4176 npm run test:browser
npm run test:worker
npm audit
npm audit --omit=dev
npm ls --all
```

The alternate PBQ test port keeps the previously reviewed preview at :4174
untouched. Screenshot references remain the approved Plan A candidates; this
milestone does not change visual baselines. The hook fixture and its Vite server
are test tooling only and are not copied into production assets.

## B1 approval gate and cost control

Stop here, as required by the milestone table: review foundation scope, the
rubric/accepted variants above and account credit usage before B2. No verified
Codex credit-usage telemetry is available in this environment, so no dollar or
remaining-balance claim is made. No new packages were needed for B1.

The remaining funded pilot is one parser/command-handler set and one console
workspace, followed by deterministic model tests, browser/mobile-layout checks,
audits/build and isolated Worker validation. Uncertainties are realistic error
formatting/adapter wildcard behavior, command-history/display clearing semantics,
and physical keyboard/screen-reader review. Additional dialects, firewall/hardware
pilots and wider migrations require later approval.
