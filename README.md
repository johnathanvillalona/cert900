# CompTIA Practice Trainer

**Live at: https://comptia-practice-trainer.johnathanv16.workers.dev**

A free, single-file practice-exam web app for three CompTIA certifications:

| Exam | Version | Bank |
|---|---|---|
| A+ Core 1 | 220-1201 | growing toward ~250 Q |
| A+ Core 2 | 220-1202 | 250 Q, 8 PBQs |
| Network+ | N10-009 | growing toward ~250 Q |

Everything lives in `index.html` — no build step, no dependencies, vanilla JS.
Features: timed full-exam simulation on the 900-point scale, performance-based
questions (matching/ordering), adaptive practice drills, per-topic mastery
tracking, and a Professor Messer video link for every topic missed.

Progress is stored in the browser via `localStorage`, tracked separately per exam.

## Development

- Architecture and conventions: see `CLAUDE.md`.
- After any content or engine change, run the validator:

  ```
  node tools/validate.js
  ```

  It parses `index.html`, builds all three exam banks, verifies every question's
  topic key resolves to a video, checks answer indices and PBQ choice indices,
  and drives a full exam flow (select → pick → score → progress) per exam.

## Deployment

Hosted on Cloudflare (Workers static assets) from this private repo — every push
to `main` auto-deploys to the URL above. `wrangler.jsonc` serves the repo root as
static assets; `.assetsignore` restricts what is publicly served to the app itself
(docs, tools, and config are excluded).

## Legal

Free to use; all rights reserved (not open source). All questions are original.
Not affiliated with or endorsed by CompTIA or Professor Messer. CompTIA A+ and
Network+ are registered trademarks of CompTIA. Video links point to Professor
Messer's free official training site.
