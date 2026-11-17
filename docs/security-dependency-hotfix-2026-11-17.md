# Dependency security hotfix — 2026-11-17

Branch `feature/security-deps-2026-11-17` from `main` at `43ef0de`, worktree
`security-hotfix-2026-11-17-worktree`. Dependency versions only; no source,
schema, configuration or test change.

## What changed

| Package | Before | After | Advisory |
|---|---|---|---|
| `better-auth` (+ `@better-auth/*` adapters) | 1.6.23 | 1.7.25 | Critical: device-login approval did not show the requesting client or permissions; low: adapter rate-limit race |
| `@better-auth/expo` | 1.6.23 | 1.7.25 | Kept in step with `better-auth` |
| `vite` | 7.3.7 | 7.3.8 | Patch pulled in by `npm audit fix` |
| `picomatch` (transitive) | 4.0.5 | 4.0.7 | ReDoS through repeated extglobs (advisory still lists every published version; build-time only, not in the Worker bundle) |

`package.json` ranges: `better-auth` and `@better-auth/expo` now `^1.7.25`.
Commands: `npm audit fix` followed by
`npm install --ignore-scripts better-auth@^1.7.25 @better-auth/expo@^1.7.25`.

## Not changed, and why

- `wrangler` 4.151.3 → 4.164.0 would clear the dev-only `undici`/`miniflare`
  advisories but fails on the pinned `@cloudflare/workers-types` peer
  (ERESOLVE). Bumping the types package is a separate change with Worker type
  review; left for a follow-up.
- `picomatch` has no published version outside the advisory range; `npm audit
  fix --force` would downgrade or major-bump `vite`/`vitest`. Build-time risk
  only.

Remaining `npm audit --omit=dev`: 5 high (picomatch chain through vite/vitest,
which npm still lists under the production flag). Remaining full audit: 8
(adds dev-only undici/miniflare/wrangler). The critical finding is gone.

## Validation (fresh `npm ci --ignore-scripts`)

- `npm test`: 748 passed / 49 files.
- `npm run build`: clean; dist pilot carries no advertising markup.
- `npm run test:worker`: 16 groups passed, 0 outbound attempts, including the
  Better Auth signup, session, sign-in, sign-out and D1 persistence groups.
- `npm run test:browser`: 237 passed, 1 failed on first run
  (`seo-phase-1.spec.ts`, scroll position 2907 vs 2906 after a back navigation
  at 320px); the spec re-run twice passed 16/16, so the first failure was a timing flake.
- `npm run test:simulations` (with `CHOKIDAR_USEPOLLING=1` because the host's
  inotify watches are consumed by VS Code): 7 passed.

## Release and rollback

Same controlled procedure as the advertising-readiness release: inactive upload
with `--keep-vars`, staging at 0% with a version override on cert900.com (check
`/api/auth/get-session` → 200 `null`, `/api/config`, `/advertising-config.json`,
the sign-in page and one guide), then promotion. Rollback: deploy the previous
version (`5cacc29c-4715-43a8-9229-f66249a27368`) at 100%. To undo locally,
revert this commit and run `npm ci --ignore-scripts --no-audit --no-fund`.
