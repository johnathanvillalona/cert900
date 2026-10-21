# Study Discovery — Phase A

## Isolation and scope

Branch: `codex/study-discovery-a`.
Worktree: `/home/sorannex/Claude Projects/cert900/study-discovery-worktree`.
Parent: `0ec1e0146748a35b17238eb6451900f8f2515e52` (clean repaired Phase A baseline).
The parent analytics branch/worktree and local/remote-tracking main were preserved.

This release exposes existing educational content. It adds no Study Hub routes,
articles, packages, advertising, analytics events, API/session changes, database
changes or production settings. It includes the parent's unreleased analytics and
guide repairs; any production release still requires combined review and approval.

## Learner-facing changes

- Homepage certification cards and the exam picker show distinct **Practice** and
  **Study Guide** controls for all 11 exams. Controls are siblings, never nested.
- Returning learners also see **Study Guide** beside the existing Continue/Review
  action. Those actions still open the existing exam menu.
- Exam menus show a prominent free study-resource panel with the primary guide
  and only the verified reference sheets for that exam.
- Exam, practice and PBQ results show the free guide directly below the score,
  rather than below a potentially long list of missed questions.
- Search recognizes “study guide,” “reference sheet” and “cheat sheet.” Existing
  topic results still start the same topic drill.
- Native guide links open the existing complete static documents in the same tab.
  Existing practice, labs, study plans, progress and browser-history behavior remain.

## Resource registry

`src/data/study-resources.ts` contains typed discovery records pointing at existing
`GuideKey` entries. Titles, headings and paths resolve from the existing guide
metadata; they are not copied into a second URL/title catalog.

There are 17 registered resources: 11 primary guides, the combined A+ guide, the
existing PBQ overview, and four references. Primary selection is exactly one
guide per supported exam. The combined/PBQ guides remain searchable related
resources, without replacing any exam's primary guide.

| Exam | Primary guide key | Reference key |
| --- | --- | --- |
| 220-1201 | aplus1 | cables |
| 220-1202 | aplus2 | None |
| n10-009 | nplus | ports |
| sy0-701 | secplus | ports |
| ccna-200-301 | ccna | ccnacli |
| aif-c01 | aif | None |
| clf-c02 | clf | cloudsvc |
| saa-c03 | saa | cloudsvc |
| az-900 | az900 | cloudsvc |
| sc-900 | sc900 | None |
| az-104 | az104 | cloudsvc |

The registry validates identities, page metadata/canonical path consistency,
supported exam IDs, duplicate bindings and primary-guide cardinality. It fails
the build on invalid authoring. Unknown runtime exam IDs return no links.
Catalog records and exam-binding arrays are frozen. No bank, answer map, grading
engine or simulation runtime is imported into the registry.

`GUIDE_EXAMS`, existing guide metadata, the repaired `GuideArticle` placement,
routes and prerenderer are unchanged. The informational directory now resolves
its links through the shared primary-guide selector, replacing its private map.

## Exact changed files

| File | Purpose |
| --- | --- |
| `src/data/study-resources.ts` | New registry, validation and selectors |
| `src/data/study-resources.test.ts` | All 11 primary/reference mappings and invalid-authoring cases |
| `src/components/StudyLinks.tsx` | Reusable native guide action and resource panel |
| `src/components/StudyLinks.test.tsx` | All 11 rendered mappings, reference visibility and safe unknown IDs |
| `src/components/SearchPalette.tsx` | Study/reference search descriptions |
| `src/screens/Landing.tsx` | Homepage and returning-user discovery actions |
| `src/screens/ExamPicker.tsx` | Practice/Study Guide sibling actions |
| `src/screens/Home.tsx` | Exam-specific resource panel |
| `src/screens/Results.tsx` | Free guide immediately below both results variants' score cards |
| `src/screens/InfoPages.tsx` | Reuse central primary-guide selector |
| `tests/pbq/study-discovery.spec.ts` | Navigation, search, results, responsiveness, touch and progress regression tests |
| `docs/study-discovery-a.md` | This report |

Review screenshots in `docs/screenshots/study-discovery-a/`:

- `homepage-320.png`, `homepage-390.png`, `homepage-1440.png`
- `picker-320.png`, `picker-390.png`, `picker-1440.png`
- `menu-320.png`, `menu-390.png`, `menu-1440.png`
- `returning-320.png`, `returning-1440.png`

## Validation

Environment: Ubuntu, project Node 24, installed Chrome. Installation used
`npm ci --ignore-scripts --no-audit --no-fund`; package manifests and lockfile
are unchanged. No lifecycle scripts were approved.

| Check | Result |
| --- | --- |
| Baseline | 510 unit tests, production build passed; both audits zero findings |
| Final unit suite | **537 passed** (27 new registry/component tests) |
| Focused discovery browser tests | **14 passed**, also covered in the complete suite |
| Final complete browser suite | **129 passed** (46 + 45 + 38), including 14 discovery cases |
| Simulator hook/performance suite | **7 passed**, run serially after browser validation |
| Production build | Passed: TypeScript, CSS, 21 static guides, 25 sitemap URLs |
| Full / production-only npm audit | **0 / 0 findings** |
| Dependency tree | `npm ls --all` passed without conflicts |
| Isolated Worker | **13 groups passed** on the final build; zero outbound Worker requests |
| Guide preservation | All 21 repaired static main article bodies byte-identical to baseline |
| Protected source | No changes to banks, scoring, session, simulations, authentication, Worker, analytics/consent or public GA4 config |
| `git diff --check` | Passed |

Discovery tests cover all 11 cards on both homepage and picker, canonical HTTP
destinations, keyboard activation, refresh/back navigation, exam-menu references,
all three results modes and absence of the resource panel in active attempts.
They verify 44px targets, non-overlapping sibling controls, complete labels and
no page overflow at **320, 375, 390, 768 and 1440px**, in light and dark themes.
The returning-user case earns real synthetic local progress, navigates through
guides at every width/theme, and confirms the stored progress is unchanged.

The complete suite retains the guide-duplication, PBQ, simulator, consent,
sanitization, exactly-once event and no-advertising-request regressions. Existing
screenshot baselines were not updated.

Independent installed-Chrome checks also passed normal-motion Study Guide clicks
at 320px and 1440px. MCP inspected the correct local controls and resource links;
its connected-browser click/screenshot stability waits timed out in this session.
Interaction validation therefore uses the installed-Chrome test contexts, rather
than changing the application to accommodate that extension limitation.

## Preview and screenshots

Running preview: **http://127.0.0.1:4206/**.

- Exam picker: `http://127.0.0.1:4206/exams`
- Exam menu: `http://127.0.0.1:4206/exam/220-1201`
- Search: “study guide core 1” or “cheat sheet ports”
- Existing guide: `http://127.0.0.1:4206/comptia-a-plus-core-1-practice-test`

| Surface | 320px | 1440px |
| --- | --- | --- |
| Homepage | [Mobile](screenshots/study-discovery-a/homepage-320.png) | [Desktop](screenshots/study-discovery-a/homepage-1440.png) |
| Exam picker | [Mobile](screenshots/study-discovery-a/picker-320.png) | [Desktop](screenshots/study-discovery-a/picker-1440.png) |
| Exam menu | [Mobile](screenshots/study-discovery-a/menu-320.png) | [Desktop](screenshots/study-discovery-a/menu-1440.png) |
| Returning learner | [Mobile](screenshots/study-discovery-a/returning-320.png) | [Desktop](screenshots/study-discovery-a/returning-1440.png) |

Restart instructions (stop this worktree's existing preview first):

```sh
cd '/home/sorannex/Claude Projects/cert900/study-discovery-worktree'
npm ci --ignore-scripts --no-audit --no-fund
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4206
```

The preview uses fresh local D1 and synthetic configuration, with external Worker
integrations blocked. No production credentials or data are needed. Rebuilding
requires restarting this preview so its asset manifest matches the build.

## Remaining review and Phase B

Physical-device and screen-reader verification remain manual. Tablet cards stack
their controls intentionally; no dense desktop table is forced onto a small screen.
Reference sheets retain their existing internal table scrolling. This phase adds
no topic articles, direct lab URLs, objectives crosswalk or advertising placements.

After manual acceptance, the next separately approved milestone can add the
prerendered `/study/<exam-id>` hubs using this registry and the existing topic/video
metadata. No full hub implementation belongs in this branch.

No push, merge, deployment, Worker upload, advertising activation or GA4-setting
change occurred. Stop after final validation and commit for manual review.
