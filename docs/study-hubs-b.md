# Study Hubs — Phase B

## Isolation and scope

- Branch: `codex/study-hubs-b`.
- Worktree: `/home/sorannex/Claude Projects/cert900/study-hubs-worktree`.
- Accepted parent: `9f7462e1b13c647eb7f59fded2a8509833391952`.
- Final commit: recorded in the completion response after validation.

This branch adds static resource hubs and navigation to existing learning tools.
It preserves the analytics, Study Discovery Phase A, production and simulator
branches/worktrees. It includes the parent's unreleased analytics/consent and
guide repairs; production release requires review of the combined changes.
No push, merge, Worker upload, deployment, Google Analytics setting change,
production-data access or advertising activation belongs to this phase.

## Resources and navigation

All 11 supported exams have a complete, prerendered `/study/<exam-id>` document.
Each hub contains its existing primary guide, approved references, related
guides, domain-organized external video links and links to existing practice,
Study Plan and progress screens. Study Resources are distinguished from the
separate scheduling function of Study Plans.

The Phase A registry still contains the same **17 resources**: 11 primary guides,
the combined A+ overview, the PBQ overview and four reference sheets. Hub metadata
and backlinks compose that registry; no second resource catalog was introduced.
Titles, descriptions and canonical guide paths resolve from existing metadata.

| Hub | Original primary guide | References |
| --- | --- | --- |
| `/study/220-1201` | `/comptia-a-plus-core-1-practice-test` | `/a-plus-cables-and-connectors` |
| `/study/220-1202` | `/comptia-a-plus-core-2-practice-test` | None |
| `/study/n10-009` | `/network-plus-practice-test` | `/common-network-ports` |
| `/study/sy0-701` | `/comptia-security-plus-practice-test` | `/common-network-ports` |
| `/study/ccna-200-301` | `/cisco-ccna-practice-test` | `/ccna-cli-commands` |
| `/study/aif-c01` | `/aws-ai-practitioner-practice-test` | None |
| `/study/clf-c02` | `/aws-cloud-practitioner-practice-test` | `/aws-azure-service-comparison` |
| `/study/saa-c03` | `/aws-solutions-architect-associate-practice-test` | `/aws-azure-service-comparison` |
| `/study/az-900` | `/azure-fundamentals-practice-test` | `/aws-azure-service-comparison` |
| `/study/sc-900` | `/microsoft-sc-900-practice-test` | None |
| `/study/az-104` | `/azure-administrator-az-104-practice-test` | `/aws-azure-service-comparison` |

The hubs expose **783 existing topic-video links**, grouped by each exam's current
domains. These are topic mappings, not 783 distinct videos: some topics share a
lesson or course chapter. External links are labeled with their provider and
new-tab behavior. No remote video is embedded or loaded merely by opening a hub.

Lab cards use existing vendor labels: CompTIA **PBQ Lab**, Cisco **Simulations &
Labs**, AWS **Ordering & Matching**, and Azure **Interactive Formats**. CLF-C02
and SAA-C03 have no interactive items and show no lab card. Lab/timed-exam links
open the existing exam menu; drills open setup. No question or attempt starts
automatically, and no unsupported question/simulator deep link was added.

Homepage, picker, returning-user, menu and results Study actions now lead to
hubs. Original guides remain one click away in resource panels and hubs. Search
includes hubs while retaining guide, reference and topic-drill discovery. Guides
and reference sheets link back only to their registered exams' hubs.

## SEO, HTML and analytics boundaries

All hubs have unique titles/descriptions, their own canonical and social metadata,
semantic HTML, and CollectionPage/BreadcrumbList structured data. Hubs do not
copy complete guide articles or claim FAQ/Quiz structured data. The sitemap has
36 URLs, including all 11 hubs; homepage no-JavaScript discovery includes them.
Existing guide URLs and canonical metadata remain unchanged.

Static pages retain their document boundary: no React hydration or application
entry bundle replaces their content. Native links and domain disclosure controls
work without JavaScript. Only the existing small consent/analytics client enhances
the documents. Hub paths join its known-path allowlist; query/hash data remains
excluded. Hubs retain the strict CSP and emit no Grow or advertising script.
Question banks, scoring, session state, simulations, authentication and progress
logic are unchanged.

## Exact changed files

| File | Purpose |
| --- | --- |
| `src/data/study-resources.ts` | Hub metadata, existing resource descriptions, related-guide/backlink selectors |
| `src/data/routes.ts` | Eleven validated static hub routes |
| `src/data/routes.test.ts` | Hub route/CSP classification and malformed-path regression coverage |
| `src/components/StaticContentShell.tsx` | Shared static guide/hub document chrome |
| `src/components/StudyLinks.tsx` | Hub discovery actions plus direct original-guide access |
| `src/components/StudyLinks.test.tsx` | Updated hub/guide mappings and labels |
| `src/components/SearchPalette.tsx` | Searchable hub entries |
| `src/screens/StudyHub.tsx` | Reusable static hub renderer |
| `src/screens/StudyHub.test.tsx` | All 11 resource/domain/lab mappings and safe navigation |
| `src/screens/Guides.tsx` | Shared chrome and relevant hub backlinks |
| `src/lib/analytics.ts` | Hub pageview allowlist only |
| `src/lib/analytics.test.ts` | Hub path sanitization and invalid-path exclusions |
| `tools/prerender.tsx` | Hub documents, metadata/schema, sitemap and discovery links |
| `tests/pbq/study-discovery.spec.ts` | Existing discovery regressions updated for hub destinations |
| `tests/pbq/study-hubs.spec.ts` | Hub navigation, HTML/SEO, accessibility, mobile and consent regressions |
| `docs/study-hubs-b.md` | This report |

Ten review screenshots are in `docs/screenshots/study-hubs-b/`:
`core1-320-light.png`, `core1-390-light.png`, `core1-390-dark.png`,
`core1-1440-light.png`, `core1-1440-dark.png`, `domain-390-light.png`,
`domain-390-dark.png`, `domain-1440-light.png`, `domain-1440-dark.png`,
and `cloud-practitioner-390.png`. Existing screenshot baselines were not updated.

## Validation

Environment: Ubuntu, Chrome 155.0.8059.39, Node 24.21.0, npm 11.19.0. Installation uses
`npm ci --ignore-scripts --no-audit --no-fund`; no dependency or lockfile changes.

| Check | Result |
| --- | --- |
| Accepted baseline | 537 unit tests, production build, audits 0 / 0 |
| Final unit suite | **553 passed** |
| Production build | **Passed:** TypeScript, CSS, 32 static documents, 36 sitemap URLs |
| Full / production-only audits | **0 / 0 findings** |
| Dependency tree | `npm ls --all` passed without conflicts |
| Initial focused browser run | **25 passed** |
| Final full browser suite | **141 passed** (62 + 38 + 41), including all 26 discovery/hub cases and the added complete learner workflow |
| Simulator hook/performance checks | **7 passed**, run serially after the full browser suite |
| Isolated Worker checks | **13 groups passed**, including synthetic authentication, progress/D1 persistence and disabled external integrations; zero outbound Worker requests |
| Guide preservation | All 21 main article bodies identical to the accepted parent after removing only the intentional Related Study Hubs navigation; final build rechecked |

Browser coverage includes all hubs, cold loads, refresh/back, original guides,
relevant references, lab availability, no-JavaScript HTML, keyboard/touch, both
themes, and widths **320, 375, 390, 768 and 1440px**. Consent tests retain event
sanitization and no-before-consent/no-advertising requests. Existing PBQ and
simulator browser regressions are retained.

## Preview and review limitations

Final local preview: **http://127.0.0.1:4207/study/220-1201**.
Other hubs use the paths in the table above. The preview uses fresh local D1 and
synthetic configuration, with external Worker integrations blocked.

```sh
cd '/home/sorannex/Claude Projects/cert900/study-hubs-worktree'
npm ci --ignore-scripts --no-audit --no-fund
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4207
```

Stop this worktree's previous preview before restarting. Rebuilding requires a
restart so the local asset manifest matches. Other worktree previews are preserved.

Physical-device keyboards and screen-reader behavior require manual review.
The build retains its existing Vite warning about an entry chunk above 500 kB;
no new package or learner-runtime dependency was added.
Existing external-video URL syntax and mappings were checked; availability of
every third-party video was not independently established. Playwright MCP inspected
the correct local hub DOM at 390px without overflow; its screenshot font wait
timed out, so installed-Chrome automation provides the screenshots and interaction
evidence. No application change was made to work around that extension limitation.

Phase B stops here for manual review. Objective-level review links or new learning
content remain later work requiring separate approval.
