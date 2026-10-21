# Results entry scroll repair

## Scope and baseline

- Branch: `codex/results-scroll-fix`.
- Worktree: `/home/sorannex/Claude Projects/cert900/results-scroll-worktree`.
- Based directly on freshly fetched GitHub main `977819f527ddd340b7016c92ad140f5928ec119c`.
- Baseline main and release worktrees were clean; original branches/worktrees are preserved.
- No push, merge into main, deployment, advertising activation, or GA4 setting change.
- Existing dependencies installed using `npm ci --ignore-scripts --no-audit --no-fund`.
  No lifecycle script was approved, dependency updated, or runtime dependency added.

## Reproduction and cause

Playwright reproduced the issue against a production build of the unchanged main
in a fresh anonymous local browser. Starting A+ Core 1, scrolling to **End exam &
score**, and confirming preserved the quiz document's scroll offset on Results.
The timed-exam score card was entirely above the viewport at desktop and mobile
widths. The new desktop regression failed on the unchanged baseline with
`Expected: 0; Received: 1076` before the implementation was applied.

`Quiz` already produces the outcome and progress/analytics callbacks exactly once.
`App` then replaces its quiz view and history URL with Results. This is an in-place
React screen change, not a full document navigation. That path did not reset scroll
or move focus to the new screen, so the window retained its quiz offset and focus
fell back to the body. Results itself had no entry-positioning behavior.

## Minimal correction

Only `src/screens/Results.tsx` changes learner runtime behavior:

- A mount-only layout effect runs after the Results DOM commits, before paint.
- It focuses the existing semantic Results H1 using `preventScroll`, then moves
  the document to top-left with explicit `behavior: "instant"`.
- Both Exam results and Session results headings get `tabIndex=-1`: focusable
  programmatically without adding a tab stop. No visible label/layout is changed.
- The jump does not animate or inherit CSS smooth scrolling, including for users
  with reduced motion. Screen-reader context changes only on entry.
- Review scrolling, theme/consent/progress rerenders and active-question grading
  do not rerun the effect. Each subsequent completed attempt mounts a fresh Results
  screen and is positioned independently, including automatic timer expiry.

No global navigation effect, history listener, scroll-restoration override, timer,
quiz-session action, scoring, analytics event, synchronization or question content
was changed. Existing Results URLs remain memory-only and keep the pre-existing
history/cold-load menu fallback. This repair does not add Results rehydration.

## Before / after measurements

All screenshots use the same deterministic anonymous attempt, 900px viewport
height, light theme and reduced motion; no real account or production resources.

| Width | Before scroll Y | Before score top | After scroll Y | After score top | After focus |
| --- | ---: | ---: | ---: | ---: | --- |
| 1440px | 1076 | -987px | 0 | 89px | Results H1 |
| 390px | 1213 | -1068px | 0 | 145px | Results H1 |

- [Desktop before](screenshots/results-scroll/before-1440.png)
- [Desktop after](screenshots/results-scroll/after-1440.png)
- [Mobile before](screenshots/results-scroll/before-390.png)
- [Mobile after](screenshots/results-scroll/after-390.png)

## Regression coverage

`tests/pbq/results-scroll.spec.ts` covers:

- All five widths: 320, 375, 390, 768 and 1440px; full score card below the header,
  top scroll offset, Results heading focus, no page overflow, one instant entry jump.
- Both reduced and ordinary motion, including a CSS smooth-scroll rule.
- Manual exam completion, practice/PBQ completion and synthetic timer expiry.
- No Results scroll during intermediate grading, answer selection or timer ticks.
- User review position/focus retained through theme and consent changes.
- Repeat attempts each start Results at the top.
- SPA popstate adds no scroll override/history entries; native static guide/hub
  back/forward restores the reader's previous 400px/700px positions.

The first history test initially assumed the existing SPA returned to its earlier
nonzero menu offset. A direct comparison of the preserved main preview (port 4230)
and repaired preview (4240) showed both return to zero on that particular menu →
privacy → back flow, with native restoration still `auto`. Existing navigation
scrolls before writing its history entry. That pre-existing behavior is unchanged;
the regression asserts no new reset/history mutation and separately verifies native
static-document restoration. A broader SPA routing/history change is outside scope.

## Validation

Baseline: 553 unit tests passed; production build passed; both npm audits zero.
The first sandboxed build could not open tsx's local IPC pipe; the identical build
passed with local IPC permitted. This was an environment restriction, not a source
or dependency failure.

Final results (Node 24.21.0, npm 11.19.0, installed Chrome 155.0.8059.39,
Playwright 1.64.1 on Ubuntu):

| Check | Result |
| --- | --- |
| Full unit/integration suite, question banks and scoring | 553 passed, 35 files |
| Full production browser suite | 155 passed: 62 + 43 + 50 in complete shards |
| New Results browser regressions | All 14 passed within that full suite |
| Separate simulator hook/performance suite | 7 passed, run after the browser suite |
| Isolated Worker authentication/progress/D1 checks | 13 groups passed; zero outbound Worker requests |
| Production build | Passed: TypeScript, CSS, prerendered guides/hubs and sitemap |
| Full / production-only npm audits | 0 / 0 findings |
| Dependency tree | npm ls --all passed |
| Protected source and diff hygiene | Unchanged / passed |

The first long browser command ended with SIGTERM after 110 passing tests,
without an assertion failure. Its orphaned local server was stopped, and every
browser test was rerun in three complete shards with successful exit codes.
Independent shards used separate local servers, databases and output directories;
no test was omitted and no existing screenshot baseline was updated. The separate
performance suite ran serially after all shards finished. The build retains its
pre-existing entry-chunk-size warning.

The only runtime change is Results.tsx. App routing, Quiz, all libraries/hooks,
question banks, simulator implementations, Worker source, package manifests,
lockfile and Wrangler configuration match the verified main baseline.

## Files changed

- `src/screens/Results.tsx` — mount-only scroll/focus handling and H1 refs.
- `tests/pbq/results-scroll.spec.ts` — desktop/mobile completion and regression tests.
- `docs/results-scroll-fix.md` — this report and manual review instructions.
- `docs/screenshots/results-scroll/before-1440.png`
- `docs/screenshots/results-scroll/after-1440.png`
- `docs/screenshots/results-scroll/before-390.png`
- `docs/screenshots/results-scroll/after-390.png`

## Manual preview

The isolated preview is running at:

<http://127.0.0.1:4240/exam/220-1201>

Choose Full Exam, scroll down to End exam & score, then confirm. The score summary
should immediately appear below the header. Scroll through the review, toggle the
theme or edit analytics preferences, and confirm the view is not forced back up.
Retake and finish again to verify a fresh Results entry.

To restart the preview after stopping the existing process:

```sh
cd '/home/sorannex/Claude Projects/cert900/results-scroll-worktree'
node tools/qa/isolated-worker.mjs --serve --port=4240
```

It uses fresh local D1 and synthetic configuration, with integrations blocked. Do
not rebuild while it is running; stop/restart it around a new build. No production
account login is needed. Physical phone and assistive-technology review remain
manual; desktop/mobile Chromium emulation does not establish those.
