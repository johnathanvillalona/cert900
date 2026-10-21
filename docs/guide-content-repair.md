# Static guide study-path repair

## Scope and verified baseline

Date: 2026-10-21 (America/New_York).
Branch: `codex/monetization-phase-a`.
Worktree: `monetization-phase-a-worktree`.
Starting checkpoint: `0a538da911701550b0c3bb579e57d6a288786f27`, clean.

No dependencies, question banks, grading, simulations, authentication, Worker
configuration, Google Analytics settings or production resources were changed.
The Phase A consent/analytics implementation and verified public ID are preserved.

## Reproduction and root cause

Playwright MCP inspected `/comptia-pbq-practice` on both the isolated preview and
the live canonical website. Each had **12** “How to use this to pass” headings
in delivered HTTP HTML, the DOM, and the visible rendered page. There was only
one guide/root. The first two blocks were identical Core 1 instructions; the
remaining blocks reused the same five steps with different exams' numeric facts.

`PbqGuide` explicitly rendered all 12 `StudyPath` instances consecutively in
`src/screens/Guides.tsx`. Git blame locates those calls in
`8c4bc8d1c6473af0a36bbe4e8e61515e83726c5c` (2026-07-28). The existing component
comment and that commit's description specify a closing study path on each exam
guide. The calls had instead all been placed on the PBQ overview, leaving the
12 exam-guide pages without their closing instructions.

The entire Guides source file was unchanged between production source
`f20717a6dc7634f6a9533ca6060c553be65cf0aa` and the Phase A starting checkpoint.
Prerendering serialized the faulty component tree faithfully. Phase A's content
entry only initializes consent and page analytics; it neither hydrates React nor
inserts article content. Analytics did not cause or amplify this defect.

### Scope of the inventory

- All **21 generated static guides** were inspected for repeated H2 headings.
- Only the PBQ overview had duplicate headings; it contained the 12 misplaced
  study sections. All other guides initially contained zero study sections.
- Live HTTP checks confirmed the missing sections on A+ hub/Core 1/Core 2,
  Network+, Security+, AWS AI Practitioner, CCNA and the ports reference.
- Representative local checks also included AWS Cloud Practitioner and Azure.

## Correction and preservation

The shared `GuideArticle` now uses the existing `guideExamsForPath` mapping to
render **one** closing `StudyPath` for the guide's primary exam. The 12 explicit
calls were removed from `PbqGuide`.

| Page type | Before | After |
| --- | --- | --- |
| PBQ overview | 12 misplaced sections | 0; its PBQ formats, CLI example, FAQ and resources remain |
| Each of the 12 exam guides | 0 | 1 relevant closing study section |
| Eight informational/reference guides | 0 | 0 |

The A+ combined guide uses Core 1, matching its existing primary CTA; the Core 2
guide retains the separate Core 2 instructions. No instructional wording or
exam-specific facts were rewritten. There is no CSS hiding or client-side dedupe.

Content-preservation verification compared the generated HTML before and after:

- The multiset of all **12 complete study-section HTML fragments** is identical,
  checked using SHA-256 fingerprints (including the two Core 1 uses on separate
  pages). Every distinct instructional block survives.
- Removing those moved sections from the comparison leaves **byte-identical main
  article HTML on all 21 pages**. Headings, sample questions, explanations, links,
  FAQ, learning resources and accessibility markup are otherwise unchanged.

## Exact changed files

- `src/screens/Guides.tsx`: one shared placement based on existing exam bindings;
  remove the misplaced PBQ instances.
- `src/screens/Guides.test.tsx`: actual static component-tree coverage for all 21
  pages, section counts, unique headings, five intact steps and exam-specific facts.
- `tests/pbq/guide-content.spec.ts`: HTTP/DOM parity with JavaScript on/off,
  complete guide coverage, refresh/link/back/forward behavior, consent persistence
  and withdrawal, five widths in both themes, errors, overflow and screenshots.
- `docs/guide-content-repair.md`: this investigation and validation record.
- Four screenshots in `docs/screenshots/guide-content-repair/`:
  `pbq-before-320.png`, `pbq-after-320.png`,
  `pbq-before-1440.png`, `pbq-after-1440.png`.

## Validation

The new unit regression was run **before** correcting the source: it failed for
all 12 exam guides plus the PBQ overview (13 failures), demonstrating that it
detects the original bug. All cases passed after the correction.

| Check | Result |
| --- | --- |
| Full unit suite | **510 passed**, including 22 new guide tests |
| Focused new browser tests | **8 passed** |
| Complete browser regressions | **115 passed** (62 + 53); existing screenshot baselines unchanged |
| Simulator hook/performance suite | **7 passed** |
| Production build | Passed: TypeScript, CSS, 21 static guides and sitemap |
| Full / production-only npm audit | **0 / 0 findings** |
| `npm ls --all` | No dependency conflicts |
| `git diff --check` | Passed |
| Isolated Worker | **13 groups passed**, zero outbound Worker requests |
| Mobile / desktop | 320, 375, 390, 768, 1440px, light and dark |
| HTTP/DOM parity | All 21 guides, JavaScript on and off |
| Navigation | Initial load, refresh, real guide links, back and forward passed |
| Consent | Allow, persistence, Change preferences and withdrawal passed |
| Console / HTTP errors / overflow | None in focused guide checks |

Playwright MCP rechecked the restarted local PBQ page: delivered HTML and DOM
both contain **zero misplaced sections**, with no page overflow or Google scripts.
Production still has the original defect because this repair is not deployed.

## Screenshots and manual preview

| Viewport | Before | After |
| --- | --- | --- |
| 320px | [Before](screenshots/guide-content-repair/pbq-before-320.png) | [After](screenshots/guide-content-repair/pbq-after-320.png) |
| 1440px | [Before](screenshots/guide-content-repair/pbq-before-1440.png) | [After](screenshots/guide-content-repair/pbq-after-1440.png) |

Current preview: **http://127.0.0.1:4196/comptia-pbq-practice**.
Check `/network-plus-practice-test` or `/comptia-a-plus-core-1-practice-test` to
see the relevant study section once, after the practice questions and before FAQ.

To restart after another build:

```sh
cd '/home/sorannex/Claude Projects/cert900/monetization-phase-a-worktree'
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4196
```

Stop the existing local preview first. The harness uses a fresh local D1 database,
synthetic configuration and blocked external integrations. Never use production
secrets for these checks. Physical-device and assistive-technology review remain
manual requirements; the automated checks are browser emulation.

No push, merge, Worker upload, deployment, advertising activation or GA4-setting
change occurred. Production release requires separate approval.
