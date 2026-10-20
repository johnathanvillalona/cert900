# Dependency security checkpoint — 2026-10-20

## Isolation and scope

- Worktree: `/home/sorannex/Claude Projects/cert900/security-worktree`.
- Branch: `codex/security-dependency-updates`.
- Verified production baseline (`origin/main`):
  `5e25e23c458ec25914cb61f9d13ebcfedec80d0d`.
- PBQ work remains separate and clean on `codex/pbq-workstation-pilot`, at
  `b8f59b7622865439133d3357e373ec743d0b2667`. Its three pilot files are not
  included in this branch.
- No authentication, grading, question-bank, application logic, or production
  configuration changes. No deployments, pushes, merges, automatic audit fixes,
  advisory suppression, credential access, or script approvals.

## Batch 1: remove the shadcn CLI

Commit: `efb7c17560bf1ecba810dae0f7b6607fbcf70802`.

Removed the unused `shadcn@4.13.0` CLI dependency, but retained its required
Tailwind stylesheet locally. See `src/styles/vendor/README.md` for the verified
npm archive integrity, upstream provenance, MIT license, hashes, and CSS
dependency review. The stylesheet and original license are byte-for-byte
copies. `src/index.css` imports the local copy, with no rule changes. The exact
MIT license is also shipped as `public/licenses/shadcn-MIT.txt`, because the
existing CSS build strips comments. No UI components were removed.

The lockfile removes 258 package entries with no additions or retained package
version changes. npm also normalizes some dependency flags.

Headless Chrome landing-page checks at 1440×1100 and 390×844 showed the expected
layout, typography, buttons, and question card. Generated CSS is byte-for-byte
identical to baseline (SHA-256
`e0ad4d007d387fa6f6e768e1423c13b4a029326e55c347ef4891fa774d6babac`).
Screenshots differ due to animation timing and shuffled answers; they are not
pixel-identical. This is a light-theme landing-page smoke check, not an
exhaustive browser, route, theme, or interaction test.
The static preview had no Worker running: `/api/config` and
`/api/auth/get-session` could not connect to localhost:8787. Authentication and
backend behavior were therefore not browser-verified in this smoke check.

## Batch 2: supported Vitest upgrade

Pinned Vitest from installed `3.2.7` to `4.1.12`. All seven installed `@vitest/*`
packages move to `4.1.12`. Supporting changes: Chai `5.3.3 → 6.3.0`,
es-module-lexer `1.7.0 → 2.3.2`, std-env `3.10.0 → 4.3.0`,
tinyexec `0.3.2 → 1.3.1`, and tinyrainbow `2.0.0 → 3.2.0`.
The supported pool implementation removes Tinypool entirely, together with
obsolete test-runner dependencies. No overrides or test/configuration edits
were needed. Vite remains `7.3.6`; Wrangler remains `4.110.0`.

Node `24.21.0` and npm `11.19.0` were used. Vitest 4 accepts Node 24 and Vite 7.
Better Auth `1.6.23` accepts Vitest 4 through its optional peer range
`^2.0.0 || ^3.0.0 || ^4.0.0`. Its authentication packages are unchanged.

## Validation

| Stage | Tests | Production build | Full audit | Audit omitting dev |
| --- | --- | --- | --- | --- |
| Baseline | 263 / 18 files pass | Pass | 28: 3 critical, 18 high, 7 moderate | 6: 2 critical, 2 high, 2 moderate |
| Batch 1 | 263 / 18 files pass | Pass | 12: 2 critical, 7 high, 3 moderate | 6: 2 critical, 2 high, 2 moderate |
| Batch 2 | 263 / 18 files pass | Pass | 9: 0 critical, 7 high, 2 moderate | 3: 0 critical, 2 high, 1 moderate |

Batch 2 was tested after a reproducible `npm ci --ignore-scripts --no-audit
--no-fund` installation. Commands: `npm test`, `npm run build`, `npm audit`,
and `npm audit --omit=dev`. Audits return exit status 1 because findings remain;
that is not a clean audit. The existing >500 kB bundle warning remains.
The final build also verifies inclusion of the exact static MIT license.

`npm install-scripts ls` still reports unapproved scripts for esbuild `0.28.1`,
sharp `0.34.5`, and workerd `1.20260708.1`. None were approved or executed during
installation. Current tests/build work without approval. Do not approve these
scripts merely to silence warnings; reassess the exact updated scripts if a
specific platform/runtime check needs them.

## Remaining audit findings and exposure

| Package | Installed version | Severity | Dependency path / affected context |
| --- | --- | --- | --- |
| Wrangler | 4.110.0 | High, inherited | Development/build toolchain |
| Miniflare | 4.20260708.1 | High, inherited | Wrangler local emulator |
| sharp | 0.34.5 | High | Wrangler → Miniflare; native image parsers |
| undici | 7.28.0 | High | Wrangler → Miniflare; HTTP/WebSocket behavior |
| browserslist | 4.28.6 | High | React Vite plugin → Babel compilation targets |
| baseline-browser-mapping | 2.10.43 | Moderate | browserslist; invalid input process termination |
| nanoid | 3.3.16 | High | Vite → PostCSS; custom generator zero-size loop |
| PostCSS | 8.5.19 | Moderate | Vite; untrusted source-map processing |
| source-map-js | 1.2.1 | High | PostCSS / Tailwind node compiler; malformed indexed maps |

The last three are also reported by `--omit=dev`. `npm explain postcss` confirms
the optional-peer path Better Auth → Vitest → Vite → PostCSS; the lockfile marks
these entries `devOptional`. This explains their inclusion in that audit, and
does not establish that they execute in the deployed Worker.

An in-memory esbuild analysis of the actual `worker/index.ts` graph (595 inputs)
contains none of the nine remaining audited packages, Vitest, Tinypool, or
Better Auth test-utils. No confirmed deployed runtime exploit path was found.
This is bundle evidence, not a live deployment or comprehensive exploit test.
Development and CI tools still have real exposure when processing hostile
source, configuration, maps, images, network responses, or untrusted changes.
Do not expose development servers publicly or run privileged builds on
untrusted inputs while the remaining fixes are pending.

## Batch 3 approval checkpoint — not implemented

Proposed exact upstream versions, verified from public npm metadata:

| Package | Proposed version |
| --- | --- |
| Wrangler | 4.151.3 |
| @cloudflare/workers-types | 5.20261019.1 |
| Miniflare (Wrangler dependency) | 5.20261019.1-beta |
| workerd (toolchain dependency) | 1.20261019.1 |
| sharp (Miniflare dependency) | 0.35.5 |
| undici (Miniflare dependency) | 7.29.1 |
| esbuild (Wrangler dependency) | 0.28.2 |

These are proposed package versions, not an installed/resolved full lockfile.
Wrangler's stable release directly depends on Miniflare 5 beta:
https://github.com/cloudflare/workers-sdk/releases/tag/wrangler%404.151.3

Wrangler/Miniflare require Node >=22, satisfied locally. The major prerelease
emulator transition and newer workerd/sharp warrant compatibility checks for
local D1 persistence, binding behavior, assets, routing, Node compatibility,
and authentication endpoints. No application or production configuration
changes have been identified as necessary. Stop for approval if any become
necessary; do not force transitive upgrades with overrides.

After approval: install the pinned toolchain with scripts disabled, inspect
the complete dependency diff, reproduce installation, rerun all tests/builds
and both audits, then run isolated local Worker checks. A temporary standalone
Wrangler config, dummy local-only auth settings, local D1 initialized from the
tracked schema, separate state/config directories, sanitized child environment,
disabled dotenv loading, localhost binding, and no remote bindings can avoid
production credentials. Do not use the normal `.dev.vars` or user Cloudflare
config. Do not trigger scheduled/social/email jobs. Verify assets, safe API
responses, local D1, and auth routing; real OAuth, email delivery, and production
Cloudflare integration remain outside that check. Worker runtime checks have
not yet been executed at this checkpoint.

Later compatible transitive refreshes remain pending: PostCSS `8.5.31`, nanoid
`3.3.20`, source-map-js `1.2.2`, browserslist `4.29.4`, and
baseline-browser-mapping `2.11.30`. Reverify advisories and supported ranges
before installing; no such updates were included in Batches 1–2.

## Rollback

Both batches are local commits on the isolated branch. Revert the Vitest batch
first, then `efb7c17560bf1ecba810dae0f7b6607fbcf70802` if required, and run
`npm ci --ignore-scripts --no-audit --no-fund` followed by tests and build. Use
revert commits rather than resetting or discarding work. The PBQ checkpoint and
production branch are unaffected.
