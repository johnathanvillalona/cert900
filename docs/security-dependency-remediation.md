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
| Batch 3 | 263 / 18 files pass | Pass | 5: 0 critical, 3 high, 2 moderate | 3: 0 critical, 2 high, 1 moderate |

Batch 2 was tested after a reproducible `npm ci --ignore-scripts --no-audit
--no-fund` installation. Commands: `npm test`, `npm run build`, `npm audit`,
and `npm audit --omit=dev`. Audits return exit status 1 because findings remain;
that is not a clean audit. The existing >500 kB bundle warning remains.
The final build also verifies inclusion of the exact static MIT license.

After Batch 2, `npm install-scripts ls` reported unapproved scripts for esbuild `0.28.1`,
sharp `0.34.5`, and workerd `1.20260708.1`. None were approved or executed during
installation. Current tests/build work without approval. Do not approve these
scripts merely to silence warnings; reassess the exact updated scripts if a
specific platform/runtime check needs them.

## Audit findings after Batch 2 (historical)

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

## Batch 3: Cloudflare toolchain upgrade

The user approved this batch after the Batches 1–2 checkpoint. The requested
releases, Node engines, Wrangler peer range, and published dependency constraints
were reverified against the public npm registry before installation.

| Package | Actual resolved version |
| --- | --- |
| Wrangler | 4.151.3 |
| @cloudflare/workers-types | 5.20261019.1 |
| Miniflare (Wrangler dependency) | 5.20261019.1-beta |
| workerd (toolchain dependency) | 1.20261019.1 |
| sharp (Miniflare dependency) | 0.35.5 |
| undici (Miniflare dependency) | 7.29.1 |
| esbuild (Wrangler dependency) | 0.28.2 |

Wrangler and Workers types are pinned exactly. The remaining versions come from
Wrangler's published dependency tree, with no overrides. The lockfile also
updates platform binaries, sharp's libvips packages (`1.3.4`), unenv-preset
(`2.16.2`), emnapi/runtime (`1.11.3`), and speed-highlight/core (`1.2.24`), and
hoists the existing cookie dependency. Vite `7.3.6`, Vitest `4.1.12`, and all
Better Auth `1.6.23` packages remain unchanged. Wrangler's stable release directly
depends on Miniflare 5 beta:
https://github.com/cloudflare/workers-sdk/releases/tag/wrangler%404.151.3

Validation after the lockfile upgrade:

- `npm ci --ignore-scripts --no-audit --no-fund`: passed (283 installed packages).
- `npm test`: 263 tests across 18 files passed.
- `npm run build`: both TypeScript checks, Vite, and 21-page prerender passed;
  existing large-chunk warning remains.
- `npm ls --all --json`: no root or nested dependency problems.
- `npm audit`: 5 findings, detailed below; exit 1 because findings remain.
- `npm audit --omit=dev`: 3 findings; exit 1 because findings remain.
- esbuild works in production builds; workerd works in local Worker checks;
  sharp `0.35.5` successfully creates/resizes/encodes a synthetic PNG using
  libvips `8.18.7`, all without lifecycle script approval.
- `npm install-scripts ls` now lists only esbuild `0.28.2` and workerd
  `1.20261019.1` as unapproved. sharp `0.35.5` no longer declares an install
  script. No scripts were approved; no binary workaround was necessary.

### Isolated Worker verification

All 13 smoke-check groups passed using Wrangler's `unstable_startWorker` API
and the actual unmodified `worker/index.ts`. Temporary harness:
`/tmp/cert900-batch3-worker-smoke.mjs`. Final redacted summary:
`/tmp/cert900-batch3-AGkqiS/report.json`. These are local scratch artifacts,
not application files. Running the harness again creates another fresh
temporary database/configuration.

Safety isolation:

- Child process receives a constructed environment, not the parent environment.
  HOME, XDG config/cache, Wrangler logs/registry, and persistence use fresh
  temporary directories. No real account ID or credentials are supplied.
- Explicit temporary Wrangler config and an empty temporary env-file override
  prevent loading project `.dev.vars` or environment files. Dotenv loading,
  process-env injection, and telemetry are disabled.
- Config uses the unchanged production compatibility date `2026-07-14` and
  `nodejs_compat`, built local assets, and a fresh local-only D1 binding. No
  remote bindings, production database IDs, routes, or cron triggers are used.
- Worker binds `127.0.0.1`; remote development and remote authentication are
  disabled. Wrangler's outbound-service hook rejects every Worker network
  request. An undici MockAgent blocks non-loopback controller requests.
- No Google/Apple, mail, social, or other integration credentials or mail
  bindings are provided. OAuth/callback and scheduled endpoints are not invoked.
  Email and newsletter remain disabled; recorded outbound Worker attempts: zero.

Verified behavior:

1. `wrangler d1 execute DB --local` initializes the fresh D1 database from the
   existing tracked schema; no remote SQL is executed.
2. Wrangler starts the Worker and serves HTML, security headers, compiled CSS,
   immutable asset caching, and the exact vendored MIT license.
3. `/api/config` returns `{ emailAuth: false, newsletter: false }` and expected
   cache headers. Local password testing remains available through the
   application's existing localhost-only behavior; no auth code was changed.
4. Unknown API 404, malformed/invalid report 400, unsupported report method 405,
   signed-out progress 401, disabled newsletter 503, and unknown HTML page 404
   with `noindex` all pass. Authenticated malformed progress JSON also returns 400.
5. Synthetic email/password signup issues session cookies; session reads pass
   both normally and with `disableCookieCache=true` to exercise D1-backed lookup.
6. Authenticated progress writes/reads pass against local D1. After disposing the
   Worker, an independent Wrangler local SQL query confirms the synthetic user,
   session, and progress rows.
7. A completely restarted Worker using the same temporary persistence directory
   reads the existing progress and authenticates the existing session, including
   a cookie-cache-bypassing session lookup.
8. Progress deletion, sign-out, cleared-cookie handling, database-backed session
   revocation, wrong-password rejection, and valid local password sign-in pass.

The initial smoke harness incorrectly reused cookies that sign-out cleared.
Only the temporary client harness was corrected to consume `Set-Cookie` like a
browser; cache-bypassing revocation checks were added. No authentication or
application changes were required. The final run passed, and Worker processes
were disposed after testing.

### Remaining findings after Batch 3

| Package | Installed | Severity | `--omit=dev` |
| --- | --- | --- | --- |
| browserslist | 4.28.6 | High | No |
| baseline-browser-mapping | 2.10.43 | Moderate | No |
| nanoid | 3.3.16 | High | Yes |
| PostCSS | 8.5.19 | Moderate | Yes |
| source-map-js | 1.2.1 | High | Yes |

The four Cloudflare-toolchain findings (Wrangler, Miniflare, sharp, undici) are
absent from the new audit. The optional Better Auth → Vitest → Vite → PostCSS
path still explains the last three production-only entries. Their versions and
application import paths were not changed in this batch. Repeated in-memory
esbuild analysis of the current Worker (595 inputs) found none of the five
remaining audited packages in its import graph. Development/CI input-processing
risks remain until Batch 4. No advisories were suppressed.

### Compatibility limits

Node >=22 is required by the updated Wrangler/Miniflare, satisfied by local
Node `24.21.0`. Miniflare 5 is still beta; successful local checks do not establish
compatibility on every platform. Migration/reuse of an existing Miniflare 4 local
database was not tested because this validation intentionally used a fresh
database. Real OAuth providers, email delivery, external integrations, scheduled
jobs, remote D1, and the deployed Cloudflare runtime were not exercised. They
were kept inactive or outside the test; no production validation is claimed.
No application/authentication logic, question content, grading, deployment
configuration, production resources, or preserved PBQ work were changed.

Later compatible transitive refreshes remain pending: PostCSS `8.5.31`, nanoid
`3.3.20`, source-map-js `1.2.2`, browserslist `4.29.4`, and
baseline-browser-mapping `2.11.30`. Reverify advisories and supported ranges
before installing; no such updates were included in Batches 1–3. Batch 4 requires
the user's next approval.

## Rollback

All batches are local commits on the isolated branch. To undo Batch 3, revert
its commit and run `npm ci --ignore-scripts --no-audit --no-fund`, tests, and
build. To also undo earlier batches, revert Vitest commit `07e18bd` next, then
`efb7c17560bf1ecba810dae0f7b6607fbcf70802` if required, and run
`npm ci --ignore-scripts --no-audit --no-fund` followed by tests and build. Use
revert commits rather than resetting or discarding work. The PBQ checkpoint and
production branch are unaffected.
