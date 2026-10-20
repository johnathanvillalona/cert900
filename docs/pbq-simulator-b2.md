# B2 — Windows Command Prompt DHCP pilot

## Scope and fairness review

Branch: `codex/pbq-simulator-foundation`, based on approved B1 checkpoint
`8c39a6948d238eac48f329d379bce6dec09cfae5`.
Worktree: `/home/sorannex/Claude Projects/cert900/simulator-worktree`.

The original **Fix a Stale DHCP Lease** scenario has a broad connectivity-repair
summary, but its three task prompts explicitly request giving up the lease,
requesting a fresh lease, and clearing cached DNS. The existing terminal renderer
instructs candidates to complete objectives in order. B2 retains that procedural
instruction and the approved B1 release → renew → flush rubric. No question,
accepted-answer regex, scoring weight, vendor credit rule or progress formula
changed. This is not an open-ended repair rubric: early renewal repairs the
adapter but does not satisfy the ordered work order.

Diagnostics never remove earned credit, including a fresh DNS lookup that
repopulates the cache after flushing. A new release deliberately begins a new
recovery cycle, as approved in B1. Pre-grade UI shows operational adapter/cache
facts and original task instructions, never rubric results or milestone ticks.

## Delivered implementation

- `src/simulations/cli/command-prompt.ts`: bounded double-quote tokenizer,
  asterisk adapter matching, transcript/recall and display-clearing primitives.
- `cli/CommandPromptWorkspace.tsx`: reusable console presentation, Enter/Run,
  Up/Down recall (including unsent draft restoration), scrollable live log,
  authoritative Reset, post-grade locking, and mobile work-order/evidence panel.
  Only input draft, recall position and panel visibility are local presentation
  state. Console data and adapter state come directly from the session envelope.
- `scenarios/dhcp-model.ts`: deterministic synthetic adapter/cache fixture and
  existing domain transitions, separated from the scenario definition.
- `scenarios/dhcp-commands.ts`: stateful `ipconfig`, `/all`, `/displaydns`,
  `/release [adapter]`, `/renew [adapter]`, `/flushdns`, `/?`, `help`, bounded
  IPv4 `ping`, and `cls`. Case, whitespace, double-quoted adapter, `*` matching,
  `.exe` aliases, `ping -4` and `-n 1..4` are supported. Unsupported utilities,
  IPv6, pipelines, redirection, expansion and scripts explicitly report limits.
- `scenarios/dhcp-lease.ts` / `registry.ts`: scenario **version 2** adds console
  metadata and stable transcript IDs; envelope schema remains 1. B1 objective
  evaluation and initial-credit rules are unchanged. No in-flight state migration
  is needed: attempts are memory-local and freeze their resolved definition.
- `scenarios/DhcpWorkspace.tsx` / `ui/contracts.ts`: original task prompts,
  live operational evidence, post-grade objective feedback and session actions.
- `src/screens/Quiz.tsx`: lazy, Core-1-only web opt-in for PBQ lab/exam. Resolve
  the definition and UI before mounting the session or starting its timer;
  cancellation cannot start a hidden attempt. Practice stays MC-only; every
  unregistered question retains its existing renderer. Only the active simulator
  card gets reduced padding on small screens. Console scrolling keys do not
  trigger exam navigation.

`cls` hides the transcript/banner without changing system state, milestones or
recall. Reset uses the existing `resetSimulation` action and atomically restores
adapter, DNS cache, transcript, recall and display. Navigation preserves the
committed transcript/system; unsent input is intentionally presentation-only.
History retains the most recent **200 commands** to bound memory usage.

No host shell, subprocess, real ping/DNS, external services, new dependencies,
authentication/backend changes, native Expo simulator, or other scenarios were
introduced. Native callers continue using legacy renderers.

## Validation and evidence

Clean B1 baseline before editing: 287 tests, build, both zero-finding audits.

- Full unit suite: **355 tests / 20 files pass**. Focused simulator/grading
  selection: **118 tests / 3 files pass**, including 68 new parser/model tests.
  Existing question-bank integrity tests remain intact.
- Production build passes: application/Worker typechecks, CSS/assets and
  prerenders. Existing Vite >500kB chunk warning remains.
- Full and production-only audits: **0 findings**. `npm ls --all` has no conflicts.
  Package manifest and lockfile are unchanged; no installation scripts approved.
- Real-hook browser suite: **3 pass**, covering authoritative actions, batched
  grade, exactly-once callbacks, reset, stale actions, frozen version, exam
  weighting/progress and locking. B1 fixture tests now reference scenario v2.
- Browser PBQ suite: **40 pass** (30 existing + 10 new). Actual production assets
  run through the isolated Worker in installed Chrome, with external browser
  requests blocked. New cases cover pre-timer loading/cancellation, 0/33/67/100%
  grading, diagnostics, unsupported commands, recall, `cls`, reset, locking,
  exam navigation/persistence, keyboard scroll containment and touch Run/Reset.
  The legacy terminal acceptance test now uses the unregistered **First Response
  at the Command Line**, preserving genuine legacy-renderer coverage.
- Layout checks: **320, 375, 390, 768 and 1440px**, light/dark, reduced motion;
  16px input, ≥44px Run/Reset, readable task controls, internal horizontal output
  scrolling, no page overflow, and no browser errors. A 375×360 viewport plus
  VisualViewport resize checks the keyboard-constrained input remains visible.
- Browser test TypeScript check passes with ES2022/DOM/DOM.Iterable.
- Isolated Worker: **13 groups pass**, fresh local D1 initialization, writes,
  reads/restart persistence, synthetic auth/session/errors, static CSS/assets,
  disabled integrations; **zero outbound Worker attempts**. No existing secret
  files, production credentials or production services accessed.

Only four DHCP terminal screenshot baselines intentionally changed; the other
22 visual baselines remain unchanged. Chrome **155.0.8059.39**, Ubuntu **26.04.1**.
These are candidates for the user's manual visual review:

- [320px light](../tests/pbq/responsive.spec.ts-snapshots/terminal-320-light-linux.png)
- [320px dark](../tests/pbq/responsive.spec.ts-snapshots/terminal-320-dark-linux.png)
- [1440px light](../tests/pbq/responsive.spec.ts-snapshots/terminal-1440-light-linux.png)
- [1440px dark](../tests/pbq/responsive.spec.ts-snapshots/terminal-1440-dark-linux.png)

The new responsive test also captures command-output examples for each width
and theme at `/tmp/cert900-b2-{width}-{theme}.png` on every run.

## Local preview and reproduction

```sh
cd '/home/sorannex/Claude Projects/cert900/simulator-worktree'
# Only if dependencies are absent: npm ci --ignore-scripts --no-audit --no-fund
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4176
```

Open **http://127.0.0.1:4176**, select **A+ Core 1 (220-1201)** → **PBQ Lab** →
**Fix a Stale DHCP Lease**. The lab is shuffled: Check/Next skips other items.
Use `help`, `ipconfig /all`, and the original work-order tasks. Timed exam mode
also includes the pilot when the question is drawn. Keep this preview process
running; Ctrl+C stops it. Stop the preview before rebuilding or using the same
port for automated tests. The isolated preview uses synthetic local resources,
disables external integrations and does not load project environment files.

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

## Review gate, limitations and B3

Browser emulation does not verify physical iOS/Android keyboards, screen readers
or every IME. These remain manual review tasks. This deliberately bounded IPv4
model has one adapter, synthetic fixed lease times/endpoints, no general Windows
filesystem or shell, and no automatic time progression. Unsupported syntax is
reported honestly. State survives navigation only within the active attempt;
page reload persistence was not introduced.

B2 stops here for manual review. Review the task/console hierarchy and touch/
keyboard behavior before approving B3. The proposed next pilot remains the
firewall administrative workspace, reusing contracts/session/grading and
projecting committed values to the six existing fields. It needs separate
approval; no firewall/hardware implementation started. No verified account credit
telemetry is available, so no cost/balance claim is made.
