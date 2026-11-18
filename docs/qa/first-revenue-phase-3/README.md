# First Revenue Phase 3 — validation evidence

October 26, 2026. Local worktree: `first-revenue-phase-3-worktree`.
Branch: `feature/first-revenue-phase-3`. Base: `87f1099d33e15eabc800420a8e0bdb0192b1e437`.

## Results

| Check | Result | Evidence |
|---|---|---|
| Before editing: unit suite | 670 passed | `baseline-unit.log` |
| Before editing: production build | Passed | `baseline-build.log` |
| Final full unit suite | 674 passed, 45 files | `unit.log` |
| Final production build/typechecks/prerender | Passed | `build.log` |
| Full browser regressions | 224 passed, 15.9 minutes | `browser.log` |
| Final focused browser rerun | 8 passed, 25.1 seconds | `browser-focused.log` |
| Simulator checks | 7 passed | `simulations.log` |
| Isolated Worker/auth/progress/route groups | 13 passed; zero outbound attempts | `worker.log` |
| Root production-only npm audit | 0 vulnerabilities | `audit-production.json` |
| Full root npm audit | 3 existing development-tool findings: 1 high, 2 moderate | `audit-full.json` |
| Dependency tree | No problems; root Zod 4.6.6 | `dependencies.json` |
| Static metadata | 36 URLs, 11 hubs; one canonical/H1, unique IDs, no ad loader | `static-seo.json` |
| Diff whitespace | Passed | final `git diff --check` |

The full browser suite covers existing grading/Results, PBQs, authentication
restrictions, legal metadata, guide samples/JSON-LD, all Study Hubs, consent,
withdrawal, SPA navigation and disabled advertising. All new support tests block
external requests; no checkout is followed. No production data is used.

The focused rerun adds an explicit wait for lazy-loaded preview images before
capturing the contextual-link screenshots. This corrects a capture-timing issue,
not application behavior. Existing screenshot assertion baselines were not
updated. The inherited SEO test writes six historical QA capture artifacts; those
were restored byte-for-byte from the accepted baseline after the full run.

## Screenshots and accessibility

For each width **320, 375, 390, 768 and 1440**, in both **light and dark** themes:

- `support-<width>-<theme>.png`: invitation after FAQ, visible keyboard focus.
- `pbq-links-<width>-<theme>.png`: original screenshot and contextual resource link.

Twenty screenshots are included. Native Playwright asserts the actual CSS viewport
width, no horizontal page overflow, a minimum 44px support target and visible
focus. Representative 320/390 mobile and 1440 desktop captures were visually
inspected; the narrow screenshot remains an enlargement link rather than trying
to make terminal text readable at thumbnail size. The new link labels remain
readable and the support block does not overlap content.

The authenticated official Playwright extension was used for account/report
inspection and the local DOM. Its resize requests of 312 and 1152 produced actual
CSS widths of 390 and 1440 because the existing Chrome zoom was 80%; those values
were measured, not assumed. See `mcp-mobile-viewport.json` and
`mcp-desktop-viewport.json`. Extension screenshots were blank despite visible,
focused DOM and valid element rectangles. Those blank PNGs were discarded;
`mcp-capture-limitation.json` records the observation. Native isolated Playwright
captures above are the visual evidence. No unsupported cause or app defect is
inferred. No browser setting/security restriction was changed to work around it.

The task-created Chrome review tab was closed after operations finished. Existing
user tabs and extension state were preserved; the MCP connection remained
responsive. The local isolated preview server remains running for owner review.

Automated checks are not a physical-device or screen-reader audit. No new
accessibility package or dependency was installed.

## Security and execution limitations

Dependencies were reused without installation from the existing dependency-owning
hotfix checkout. Its package lockfile matches this worktree exactly, its complete
`npm ls --all` reports no problems, and all resolved Zod instances are 4.6.6.
Audits ran from that checkout to avoid misleading symlink-tree diagnostics.

The three full-audit findings are Undici (high) through Miniflare and Wrangler
(moderate dependent findings), with advisory details in the audit JSON. They are
not root production dependencies. No blanket upgrade was attempted. A focused
Wrangler/Miniflare/Undici maintenance task is recommended separately. The unchanged
native-mobile lockfile was not re-audited here; its previously recorded findings,
including a critical finding, remain separate and unresolved. The repository as a
whole is not claimed vulnerability-free.

The first sandboxed baseline build could not open tsx's temporary local IPC pipe.
The same build passed with approved local execution. Browser and Worker suites
used the isolated local harness with synthetic D1 and blocked remote outbound
requests, never production bindings. No Cloudflare version was uploaded.

No package/lockfile, mobile, Worker, question bank, scoring, consent, analytics,
ad-policy, LMS or runtime-configuration file changed. Private business/account
records remain under ignored `.publisher-private/` and are not in this commit.
See [exact file list](CHANGED-FILES.txt).
