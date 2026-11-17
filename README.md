# cert900

**Live at: https://cert900.com**

A free practice-exam site for CompTIA (A+ Core 1 and Core 2, Network+, Security+),
Cisco (CCNA 200-301), AWS (AI Practitioner, Cloud Practitioner, Solutions Architect -
Associate) and Microsoft Azure (AZ-900, AZ-104, SC-900) certifications. It offers
timed practice exams, performance-based questions, topic practice, study plans, and
a free training video for each exam topic. The exam registry lives in `src/data/`;
`AGENTS.md` is the project guide.

Stack: React + Vite + TypeScript + Tailwind + shadcn, served by a Cloudflare Worker
with static assets and a D1 database. Optional Google (and, on iOS, Apple) sign-in
syncs progress across devices; anonymous use works fully with browser-local
progress. An Expo app in `mobile/` shares the same engine and banks.

Progress is tracked separately per exam: browser-local by default, cloud-synced when signed in.

## Development

- Architecture and conventions: see `AGENTS.md`.
- After any content or engine change, run the validator:

  ```
  npm test
  ```

- Dev: `npm run dev` + `npm run dev:worker` (Vite proxies /api to wrangler).
- Tests: `npm test` (data parity, engine, sync, stats).
- Links: `node tools/linkcheck.js` checks every video URL in `src/data`.

## Deployment

Cloudflare Worker + static assets (`dist/`) + D1, from this private repo. Pushes to
`main` upload an inactive Worker version; promotion is a separate, manual step
(`wrangler versions deploy`). See `docs/advertising-activation-runbook.md` for the
release procedure. Secrets via `wrangler secret put`.

## Legal

Free to use; all rights reserved (not open source). All questions are original.
Not affiliated with or endorsed by CompTIA, Cisco, Amazon Web Services, Microsoft,
or any of the instructors linked. CompTIA A+, Network+ and Security+ are registered
trademarks of CompTIA; CCNA is a trademark of Cisco; AWS is a trademark of Amazon
Web Services; Azure is a trademark of Microsoft. Video links point to the
instructors' free public courses (Professor Messer, Jeremy's IT Lab, freeCodeCamp,
John Savill).
