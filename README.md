# CompTIA Practice Trainer

**Live at: https://comptia-practice-trainer.johnathanv16.workers.dev**

A free, single-file practice-exam web app for three CompTIA certifications:

| Exam | Version | Bank |
|---|---|---|
| A+ Core 1 | 220-1201 | growing toward ~250 Q |
| A+ Core 2 | 220-1202 | 250 Q, 8 PBQs |
| Network+ | N10-009 | growing toward ~250 Q |

v2: React + Vite + TypeScript + Tailwind + shadcn, served by a Cloudflare Worker
with static assets and a D1 database. Optional Google sign-in syncs progress
across devices; anonymous use works fully with browser-local progress.
Features: timed full-exam simulation on the 900-point scale, performance-based
questions (matching/ordering), adaptive practice drills, per-topic mastery
tracking, and a Professor Messer video link for every topic missed.

Progress is tracked separately per exam: browser-local by default, cloud-synced when signed in.

## Development

- Architecture and conventions: see `CLAUDE.md`.
- After any content or engine change, run the validator:

  ```
  npm test
  ```

- Dev: `npm run dev` + `npm run dev:worker` (Vite proxies /api to wrangler).
- Tests: `npm test` (data parity, engine, sync, stats).
- Links: `node tools/linkcheck.js` checks every Professor Messer URL.

## Deployment

Cloudflare Worker + static assets (`dist/`) + D1, from this private repo.
`npm run build` then `npx wrangler deploy`, or push to `main` (CI build command:
`npm ci && npm run build`). Secrets via `wrangler secret put`.

## Legal

Free to use; all rights reserved (not open source). All questions are original.
Not affiliated with or endorsed by CompTIA or Professor Messer. CompTIA A+ and
Network+ are registered trademarks of CompTIA. Video links point to Professor
Messer's free official training site.
