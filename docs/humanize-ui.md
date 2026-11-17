# Light-only UI and copy refresh, 2026-11-17

Branch `feature/humanize-ui` from `main` at `b8360a0`. Front-end, copy, test and
documentation changes only. No question-bank, grading, scoring, authentication,
consent, advertising-policy, Worker or mobile change. `data-testid` values are
unchanged.

## What changed

### Light mode only

- The theme toggle, the boot script in `index.html`, `useTheme` and
  `ThemeIcon` are removed. The header has one fewer control.
- Every `dark:` and `not-dark:` utility is removed; the unprefixed light value
  stays. `src/index.css` no longer defines a `dark` variant or `.dark` tokens.
- `next-themes` is removed; the toaster is fixed to the light theme.
- `src/data/copy.test.ts` fails if a `dark:` utility, the `trainer-theme` key
  or a theme boot script comes back.

### Typography

| Role | Family | Notes |
|---|---|---|
| Headings and body | Commissioner (variable, weight axis only) | Hierarchy from size and weight: body 400, labels 500, h2 and h3 600, h1 700 |
| Exam codes, CLI, timer, scores | Red Hat Mono (variable) | Unchanged call sites through `font-mono` |

- Both families are self-hosted through Fontsource, so the CSP
  (`font-src 'self'`) is unchanged. Only the two Latin files are preloaded;
  other subsets load on demand through `unicode-range`.
- `tools/prerender.tsx` now fails the build if either preload file is missing.
- Static guides and hubs set body text at 17px with a 1.6 line height and
  limit plain paragraphs and list items to 38rem, about 75 characters per
  line (`.guide-prose`). Bordered and tinted boxes keep their full width.
  Headings use `text-wrap: balance`.
- Guide introductions, FAQ answers and exam fact values use the body text
  color (about 17:1 contrast) instead of the muted gray (about 7:1), which
  read light at Commissioner's regular weight. Notes and disclaimers stay
  muted.
- The site uses no italics, so the weight-only build loses nothing.
- Commissioner's figures are proportional and the shipped file has no
  tabular-figure feature, so `tabular-nums` has no effect on it. Numbers that
  change in place (exam timer, score, readiness range) already use Red Hat
  Mono, whose digits are all the same width. Keep new live counters in
  `font-mono`.

### Question counts removed

- The landing-page stats strip and the count-up animation are gone.
- Exam cards, the exam picker, search results, the PBQ guide, guide intros,
  meta descriptions, FAQs, the hub table and the Open Graph images no longer
  quote how many questions, PBQs or videos Cert900 has.
- The cards keep the number of exam domains and the learner's own progress.
- `src/data/meta.ts` and `tools/gen-meta.mjs` are unchanged; the counts still
  exist for tests and internal checks.

### Layout

- The drifting icon field, grid and aurora backgrounds and scroll-reveal
  animations are removed from the landing page and results screen.
- Uppercase monospace eyebrows are now sentence-case labels. Monospace is used
  only for exam codes, command-line text and live numbers.
- Buttons no longer carry arrow icons. The header "Exams" control is a plain
  ghost button with the same menu.
- Vendor headings on the landing page are `h3`, so the outline reads
  h1 > h2 > h3.

### Copy

Site text follows the voice of the CompTIA and AWS certification pages:

- Sentence-case headings; full credential name first, short form after.
- Exam facts as label and value lines (new `ExamFacts` block on each guide:
  number of questions, duration and passing score).
- Present-simple statements and short imperative buttons ("Start practicing",
  "Take a practice exam"). No exclamation marks, no em dashes, no "actually".
- Each guide has its own introduction. The repeated "Is this actually free?"
  FAQ is replaced on each guide by an exam-specific question (validity period,
  renewal, experience required or how to study). The free-access question
  stays on the homepage and hub page.
- Site title: "Free CompTIA, Cisco, AWS & Azure practice exams | Cert900".

`src/data/copy.test.ts` and `src/data/guides.test.ts` enforce the house rules:
no em dashes in UI strings, no inventory counts in descriptions, and no
"actually", "completely", "really" or "simply".

### Open Graph images

`tools/gen-og.mts` replaces `tools/gen-og-data.mts`. It renders
`public/og.png` and one card per guide with the new fonts embedded, offline,
through the installed Chrome. Run it manually after changing a guide title:

```
npx tsx tools/gen-og.mts
```

### Repository hygiene

- Project conventions are in `AGENTS.md`. Editor-specific configuration is kept
  out of the repository.
- The Ubuntu handoff script and its document are removed, with the matching
  steps in `.github/workflows/linux-smoke.yml`.
- Absolute workstation paths in committed reports are replaced with
  `<workspace>`.
- `src/data/repo-hygiene.test.ts` scans tracked file names and text for
  editor and assistant tool names.

## Screenshot baselines

The 42 dark-mode baselines are deleted. The light baselines for
`responsive`, `firewall-responsive` and `windows-responsive` were regenerated
after the change. Before and after sheets for review:

- `docs/qa/humanize-ui/baselines-320-responsive.png`
- `docs/qa/humanize-ui/baselines-320-firewall-responsive.png`
- `docs/qa/humanize-ui/baselines-320-windows-responsive.png`

Page comparisons, live site (before) and this branch (after), at 390px and
1440px:

- `docs/qa/humanize-ui/home-390-before-after.png`
- `docs/qa/humanize-ui/home-1440-before-after.png`
- `docs/qa/humanize-ui/network-plus-390-before-after.png`
- `docs/qa/humanize-ui/network-plus-1440-before-after.png`

## Validation

See `docs/qa/humanize-ui/results.json` for the run summary.

## Release and rollback

No upload, deploy or promotion is part of this change. Release follows the
standard procedure: inactive upload with `--keep-vars`, staging with a version
override on cert900.com, then promotion. Rollback: deploy the previous version
at 100%. To undo locally, revert the commit and run
`npm ci --ignore-scripts --no-audit --no-fund` (the font packages and
`next-themes` change).
