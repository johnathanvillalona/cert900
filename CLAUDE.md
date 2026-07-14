# CompTIA Practice Trainer — Project Context

## What this is
A single-file HTML practice-exam app (`index.html`) covering
**three CompTIA certifications**, chosen from a landing menu:

- **A+ Core 1** — 220-1201 (239 questions, 5 PBQs)
- **A+ Core 2** — 220-1202 (281 questions, 8 PBQs)
- **Network+** — N10-009 (264 questions, 6 PBQs)

Picker order is `EXAM_ORDER` (Core 1 → Core 2 → Network+), not definition order.

All exam versions are current as of 2026. No build step, no dependencies —
everything (CSS, data, engine) lives in the one file. Vanilla JS only.

**Live**: https://comptia-practice-trainer.johnathanv16.workers.dev
**Repo**: private GitHub `johnathanvillalona/comptia-practice-trainer`; push to
`main` auto-deploys via Cloudflare Workers static assets (`wrangler.jsonc`,
`.assetsignore` limits public files to the app). Commits must use the GitHub
noreply email (set in local git config) — the account blocks email-exposing pushes.

## File structure (top to bottom)
1. **HTML + CSS** — light "workbench" theme. Colors: paper `#F4F6F8`, ink `#16202B`,
   cobalt accent `#2145D6`. Screens: `scr-exams` (picker), `scr-home`, `scr-setup`,
   `scr-quiz`, `scr-results`, `scr-progress`. Topbar `#brand` + `#switch-exam-btn`
   update as you enter/leave an exam.
2. **Multi-exam framework** — `EXAMS` registry. `beginExam(cfg)` starts an exam and
   sets the builder target `_CUR`; then `V()`, `q()`, `pbq()` add to the current
   exam. Each exam object carries its own `videos`, `questions`, `pbqs`, `domains`,
   `examSplit`, `examMC`, `examPBQ`, `examMinutes`, plus `id`, `cert`, `name`,
   `code`, `pmBase`, `pmSuffix`, `blurb`.
3. **Three exam blocks** — each is `beginExam({...})` + `_CUR.videos={...}` +
   `q(...)` calls (grouped by domain) + `pbq(...)` calls. Core 2 is first (largest),
   then Core 1, then Network+.
4. **Engine** — exam selection, modes, scoring, persistence, rendering.

## Video links (Professor Messer)
- `V(title, slug, domain)` builds the URL as `pmBase + slug + pmSuffix + "/"`.
  Store the **bare** slug (no version suffix); the suffix comes from `pmSuffix`.
  - Core 2: `.../220-1202/220-1202-video/{slug}-220-1202/`
  - Core 1: `.../220-1201/220-1201-video/{slug}-220-1201/`
  - Network+: `.../network-plus/n10-009/n10-009-video/{slug}-n10-009/`
- All slugs were pulled from Professor Messer's live course indexes and spot-checked.
  When adding videos for a new topic, verify the slug against the real page — a
  wrong slug is a broken "review this topic" link.

## Key mechanics
- **Active exam**: `setExam(id)` points module-level `A`, `VIDEOS`, `DOMAINS`,
  `QUESTIONS`, `PBQS`, and `progress` at the chosen exam's data, so the whole engine
  reads the current bank. `chooseExam(id)` (from the picker) → home; `goExams()`
  returns to the picker. `domNums()` = `Object.keys(A.domains).map(Number)`.
- **Persistence**: `localStorage` key `comptia-trainer-v1`, holding
  `progressAll = { examId: {topics, exams, seen} }` — progress is tracked
  **separately per exam**. On first load it migrates old single-exam data from
  `aplus1202-progress-v1` into `"220-1202"`. Falls back to in-memory (warning toast)
  only if localStorage throws.
- **Adaptive selection**: weighted random — unseen-topic boost, weakness boost
  (×4 in weak-focus drills), seen-count decay. Unchanged by the refactor.
- **Full Exam mode**: `pickExamMC` distributes `min(A.examMC, bank size)` questions
  across domains by `A.examSplit`, adds `min(A.examPBQ, bank size)` PBQs, timer =
  `A.examMinutes`. Scaled score `100 + pct*800`, pass 700; PBQs graded with
  fractional partial credit and weighted 2×. Works for both 4- and 5-domain exams.
- **Practice Drill / PBQ Lab / Progress**: unchanged in behavior; all now key off the
  active exam. Progress "block map" and weak-topics list iterate `A.videos` / `domNums()`.

## Conventions / gotchas
- Every question/PBQ topic (`t`) MUST exist as a key in its exam's `videos` map —
  `q()` reads `_CUR.videos[t].d` and throws otherwise. This is the fastest way to
  catch a typo'd topic key.
- `examSplit` should sum to 1.0 across the exam's domains.
- Answer index `a` must be a valid index into `o`; explanations `e` show in review/drills.
- To add a new exam: `beginExam({...})`, define `_CUR.videos`, then `q()`/`pbq()`.
  It auto-appears on the picker (`renderExamPicker` iterates `EXAMS`).
- Vanilla JS, single file.

## Validation
- `tools/validate.js` — stubs the DOM, builds all exams, and drives a full flow per
  exam (select → pick → all-correct full exam → progress). Run `node tools/validate.js`
  after EVERY content/engine edit — it flags bad topic keys, invalid answer indices,
  and runtime errors. Must pass before each commit.
- `tools/linkcheck.js` — HTTP-checks every video URL in all banks (last full run:
  214/214 OK). Run before releases and after adding video topics.

## Likely next tasks
- Continue growing banks in verified batches (author → validate → linkcheck new
  slugs → commit), keeping domain balance per `examSplit`.
- More PBQs across all three exams.
- Consider a Security+ (SY0-701) exam block using the same framework.
