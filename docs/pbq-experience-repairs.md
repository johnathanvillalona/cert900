# PBQ experience repairs: Plan A review

## Isolation and delivery

Repair branch: `codex/pbq-experience-repairs`.
Worktree: `/home/sorannex/Claude Projects/cert900/repairs-worktree`.
Base/checkpoint: `3fb230fae3d97d16254d5b2bd782dfa5c0142393`.

Protected worktrees remain clean and unchanged:

- PBQ pilot: `b8f59b7622865439133d3357e373ec743d0b2667`.
- Security: `9155df986bfb4e70ae49005a02c6f770193ae235`.
- Integration: `3fb230fae3d97d16254d5b2bd782dfa5c0142393`.

Three delivery commits (see `git log -3 --oneline` for the final SHA):

1. `f8f1f84`: installed-Chrome browser foundation and isolated Worker harness.
2. `1e3fc24`: neutral connector names, correct scene descriptions, drag cleanup,
   ordering cancellation and regression tests.
3. Current repair HEAD: responsive and accessibility repairs, review screenshots
   and session/browser regression coverage.

No question-bank data, accepted commands, scoring implementation, session API,
backend, schema, authentication or production configuration changed. No push,
main merge, deployment, install-script approval or browser download was performed.

## Changes

- `src/components/pbq-sims.tsx`: neutral ungraded connector names; global drag
  cleanup; numbered photo references plus full-description controls at least
  44px high; keyboard selection focuses that control list. Both list and photo
  use the existing `session.placeItem` action. Reset still removes each item
  through that action and clears the authoritative answer.
- The same file pads hotspot SVG bounds around authored nodes/strokes and adds
  numbered, full-size HTML selection controls and a live selection count. Limits
  and penalties remain unchanged. Forms wrap labels and selected values; terminal
  history is a focusable live log with preserved spacing and 16px input.
- `src/components/pbq-images.ts`: scene-specific descriptions and an explicit
  comment preserving the legacy coordinate-height convention. No asset or zone
  geometry was changed.
- `src/screens/Quiz.tsx`: cancellation leaves ordering answers unchanged; handles
  and contextual arrow controls are 44px; handles are excluded from keyboard tab
  order because the arrow alternative supplies keyboard operation. Keyboard moves
  do not animate. Matching labels and values wrap.
- `src/App.tsx`, `src/screens/Landing.tsx`: two rows below 640px, with branding
  above the six existing actions. Mobile buttons are at least 44px. Desktop
  layout/actions are preserved.
- Unit checks: `src/screens/pbq-bindings.test.ts`, `src/lib/engine.test.ts`.
- Development tooling: pinned `@playwright/test@1.64.1` (Playwright and core also
  resolve to 1.64.1), `playwright.config.ts`, `tests/pbq/`,
  `tools/qa/isolated-worker.mjs`, and the corresponding package scripts/lockfile.
  No learner-runtime dependency was added.

## Validation evidence

Baseline before edits: clean Git checkpoint; scripts-disabled reproducible
installation; 266 tests; production build; full and production-only audits zero;
no dependency conflicts.

Final checks:

- `npm ci --ignore-scripts --no-audit --no-fund`: passed, 286 installed packages.
- `npm test`: 270 tests in 18 files passed, including bank-integrity checks.
- `npm run build`: app and Worker typechecks, CSS/assets and 21 prerendered pages
  passed. The existing Vite chunk-size warning remains.
- `npm audit`, `npm audit --omit=dev`: zero findings in both modes.
- `npm ls --all`: no dependency conflicts. Browser test/config typecheck passed.
- Browser final comparison: all 30 tests passed without updating baselines.
  All 26 candidate images matched in the recorded reference environment.
- Dropdown focus/selection checks repeated three times: all 9 passed. The driver
  waits for Radix focus restoration between selections; it does not change UI
  state directly.
- `npm run test:worker`: all 13 groups passed. They initialize fresh local D1,
  verify static HTML/CSS/license/security headers, disabled integration config,
  representative API errors, synthetic signup/session/signin/signout, progress
  writes/reads/deletes, independent SQL reads, and persistence across Worker
  restart. No remote resources or existing secret files were used. Worker
  outbound attempts: zero.

Browser coverage includes all seven photo questions; all six PBQ kinds at 320,
375, 390, 768 and 1440px in both themes with reduced motion; accessible names,
44px alternatives, overflow, SVG containment, keyboard and touch placement,
replacement/removal/reset, drag/cancel behavior, positional arrow reordering,
shuffled controlled matching, field grading, hotspot limits/wrong penalties,
terminal legacy acceptance, exam navigation/reset and practice-drill routing.
Workstation grades 0/50/100% are exercised in-browser; exact quarter points and
vendor credit rules are checked in the engine tests. Page/console errors are
checked in the representative browser matrix.

## Screenshots and manual review

Reference environment: Ubuntu 26.04.1 LTS, Node 24.21.0, npm 11.19.0, installed
Google Chrome 155.0.8059.39, device scale 1. The 26 candidate images live in
`tests/pbq/responsive.spec.ts-snapshots/`: each renderer at desktop/mobile in
light/dark themes plus both mobile headers. Representative images were visually
inspected during implementation. **Human acceptance of these candidate baselines
is still pending.** Browser/OS updates may require deliberate screenshot review.

Review locally:

```sh
cd '/home/sorannex/Claude Projects/cert900/repairs-worktree'
npm run build
npm run preview:isolated
```

Wait for `Isolated preview: http://127.0.0.1:4174`, then open that URL. Choose
A+ Core 1 (220-1201), PBQ lab. Use Check answer / Next question to reach
Provision the Sales Workstation (the lab is shuffled). Try connector/port clicks,
keyboard Enter/Space/Escape, pointer dragging, replacement, Reset connections and
Check answer. Repeat with a narrow viewport and the theme toggle. Use Core 2
and Security+ for configuration/hotspot review. Stop with Ctrl+C before rebuilding
and restart afterward. The preview deliberately uses disposable local state.

## Remaining limits and approval gate

- Physical phone keyboards, screen readers, and non-Chrome browsers require
  manual review. Browser emulation does not establish assistive-technology
  conformance or physical mobile behavior.
- The legacy pc-rear photo/metadata height discrepancy remains unchanged. Photo
  targets stay small on narrow screens; the full-size control list is the
  keyboard/touch alternative. Original SVG hardware/zoom is a later pilot.
- Terminal commands still use sequential regex checks and canned output; log
  persistence, command history and virtual system state are deferred to Plan B.
- OAuth/email/external integration delivery and production behavior were not
  exercised; local tests use synthetic configuration and block outbound requests.
- This environment provides no verified Codex credit-usage telemetry. Review
  account usage at this checkpoint before funding the next milestone.

**Stop after Plan A.** Obtain screenshot/manual approval before simulator
contracts, session integration, DHCP rubric implementation or any further pilot.
