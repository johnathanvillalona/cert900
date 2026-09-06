# cert900

**Live at: https://cert900.com**

A free practice-exam platform for eleven certifications across CompTIA (A+ Core 1
and Core 2, Network+, Security+), Cisco (CCNA 200-301), AWS (AI Practitioner, Cloud
Practitioner, Solutions Architect Associate) and Microsoft Azure (AZ-900, AZ-104,
SC-900): timed simulations on each vendor's real scoring scale, performance-based
questions in the vendor's native formats, adaptive drills, per-topic mastery,
study plans, and a free video link for every topic missed. The exam registry and
bank sizes live in `src/data/`; `CLAUDE.md` is the authoritative project context.

Stack: React + Vite + TypeScript + Tailwind + shadcn, served by a Cloudflare Worker
with static assets and a D1 database. Optional Google (and, on iOS, Apple) sign-in
syncs progress across devices; anonymous use works fully with browser-local
progress. An Expo app in `mobile/` shares the same engine and banks.

Progress is tracked separately per exam: browser-local by default, cloud-synced when signed in.

## Development

- Architecture and conventions: see `CLAUDE.md`.
- After any content or engine change, run the validator:

  ```
  npm test
  ```

- Dev: `npm run dev` + `npm run dev:worker` (Vite proxies /api to wrangler).
- Tests: `npm test` (data parity, engine, sync, stats).
- Links: `node tools/linkcheck.js` checks every video URL in `src/data`.

## Deployment

Cloudflare Worker + static assets (`dist/`) + D1, from this private repo.
`npm run build` then `npx wrangler deploy`, or push to `main` (CI build command:
`npm ci && npm run build`). Secrets via `wrangler secret put`.

## Legal

Free to use; all rights reserved (not open source). All questions are original.
Not affiliated with or endorsed by CompTIA, Cisco, Amazon Web Services, Microsoft,
or any of the instructors linked. CompTIA A+, Network+ and Security+ are registered
trademarks of CompTIA; CCNA is a trademark of Cisco; AWS is a trademark of Amazon
Web Services; Azure is a trademark of Microsoft. Video links point to the
instructors' free public courses (Professor Messer, Jeremy's IT Lab, freeCodeCamp,
John Savill).
