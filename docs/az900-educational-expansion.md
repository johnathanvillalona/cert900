# AZ-900 educational expansion: owner review

## Checkpoint and scope

- Accepted parent: `f70234776b516cb5f9856e50e07b3878ff3be9b9`.
- Branch: `codex/seo-phase-3-az900`.
- Worktree: `/home/sorannex/Claude Projects/cert900/seo-phase-3-az900-worktree`.
- Editorial/source review date: **2026-10-21**, America/New_York.
- Microsoft skills version: **July 20, 2026**. The reviewed official change log lists no later skills version or forthcoming dated replacement. Recheck before release.
- Existing canonical: `/azure-fundamentals-practice-test`; no new pages or sitemap entries.

Ten original beginner lessons reuse `LearningLesson`, `LessonConcept`,
`TeachingSteps`, `ComparisonTable`, `LearningDiagram`, native disclosures and the
accepted typography/theme system. The descriptor module contains navigation,
objective bindings and sources only. It introduces no learning state or runtime
engine. Both Azure and AWS remain study guides, not complete certification courses.

## Curriculum and coverage matrix

Microsoft publishes **named skill groups**. The reference keys below are Cert900
editorial keys, not purported official numbered task IDs. The approved ten lessons
cover all eleven groups at an introductory level. Mentioning a capability is not
hands-on mastery or a promise of complete exam preparation.

| Official skill group | Local key | Lesson and teaching coverage | Depth/location |
|---|---|---|---|
| Cloud computing | `cloud-computing` | 1: network-delivered services; public/private/hybrid and use cases; consumption and pricing models. 2: shared responsibility. | Core examples; serverless and pricing depth in disclosures. |
| Benefits of cloud services | `cloud-benefits` | 1: availability, scaling, elasticity, reliability, cost/performance predictability, security/governance and manageability. 3: failure boundaries and recovery. | Shop scenario plus core/extension; no claim that cloud automatically lowers cost. |
| Cloud service types | `service-types` | 2: IaaS/PaaS/SaaS and appropriate choices for an expense application. | Visible definitions, original responsibility matrix, practical comparison and check. |
| Core Azure architecture | `architecture` | 3: datacenters, regions, sovereign environments, region pairs and zones. 4: resources, groups, subscriptions, management groups and hierarchy. | Two visuals, booking recovery and development/production examples. |
| Compute and networking | `compute-networking` | 5: VMs, scale sets, availability sets, Virtual Desktop, VM supporting resources, web apps, containers and functions. 6: VNet, subnet, peering, DNS, VPN Gateway, ExpressRoute, public/private endpoints. | Hosting comparison, original network path and request troubleshooting. Availability-set detail also appears in lesson 3. |
| Azure storage | `storage` | 7: Blob/Files/Queue/Table, managed disks, storage accounts/types, tiers, redundancy; AzCopy, Storage Explorer, File Sync; Migrate and Data Box. | Visible decision narrative and storage table; account/redundancy combinations and tier caveats in extension. |
| Identity, access and security | `identity-security` | 8: Entra ID and Domain Services; SSO, MFA/passwordless; external identities, Conditional Access, RBAC, Zero Trust, defense in depth and Defender for Cloud. | Support-engineer access walkthrough; legacy directory and posture depth in extension. |
| Cost management | `cost` | 9: cost factors, pricing calculator, Cost Management, budgets, tags. | Training-lab example; commitment/Spot caveats in extension. |
| Governance and compliance | `governance` | 9: Purview, Policy and resource locks, distinguished from RBAC and tags. | Visible control comparison; audit/remediation and control-plane/data-plane caveats in extension. |
| Managing and deploying resources | `deployment` | 9: portal, CLI, PowerShell, Cloud Shell, IaC, ARM/templates and Arc. | Repeatable-lab scenario; Arc's actual management boundary in extension. |
| Monitoring tools | `monitoring` | 10: Advisor, Service Health, Monitor, Log Analytics, alerts and Application Insights. | Slow-booking investigation, tool comparison and telemetry planning extension. |

### Published weights and unchanged practice allocation

| Domain | Microsoft published range | Cert900 practice allocation (unchanged) |
|---|---|---|
| Cloud concepts | 25–30% | 28% |
| Azure architecture and services | 35–40% | 37% |
| Azure management and governance | 30–35% | 35% |

Ranges aren't exact quotas for an individual exam. The public guide now explicitly
separates Microsoft's weighting/scaled pass requirement from Cert900's own
instructional allocation and scoring. No formula or allocation value changed.

## Accuracy decisions and important qualifications

- Shared responsibility retains customer data/account/access obligations in all models. The current Microsoft table describes SaaS device capabilities as shared, while retaining customer endpoint-protection responsibilities. The original matrix reflects that nuance and distinguishes application configuration from provider operation.
- Zones can contain one or more datacenters. The three-zone drawing is an example, not a universal region or service topology. Zonal placement is not automatic replication/failover.
- Pairing does not automatically deploy or recover an application. Geographic selection alone does not certify legal compliance.
- Resource groups are lifecycle/management scopes, not network boundaries; group location stores metadata and does not pin every resource to that region.
- VM public IPs are optional. Managed hosting, containers and functions have different operational boundaries and limits.
- A private endpoint's interface is in the VNet; the managed database service remains outside it. Public network access, DNS and authorization require separate configuration. ExpressRoute privacy is not automatic end-to-end encryption.
- Geo-replication is asynchronous. Redundancy is not a full backup plan. Archive requires rehydration; account/region/tier compatibility varies. Smart tier and Storage Mover are labeled supporting depth, not new required objective groups.
- Entra ID is distinguished from Domain Services and from Azure management RBAC. MFA verifies sign-in rather than granting a restart permission. Passwordless methods vary in assurance and policy support.
- Budgets notify rather than cap consumption. Locks are management controls, not universal data-plane protection. Policy assessment is not automatic remediation or a compliance certificate.
- Monitor, Service Health, Resource Health and Advisor answer different questions. Not all telemetry is collected automatically, and logs need retention/access/cost planning.

See [separate bank errata](az900-bank-errata.md). The bank and its samples are
unchanged; the notes distinguish verified comment inconsistency from explanations
that need qualifications and historical content that is already labeled.

## Official source inventory

All references below were read on **2026-10-21**. Lesson-linked records also live
in `src/data/az900-lessons.ts`; supplementary sources resolve the particular
qualifications noted above. No copyrighted training text or exam questions were
copied. The explanations and diagrams are original.

| Lesson source | Official page | Review date |
|---|---|---|
| `curriculum` | [AZ-900 skills measured and change log](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900) | 2026-10-21 |
| `exam` | [Azure Fundamentals certification and assessment information](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/) | 2026-10-21 |
| `cloud` | [Describe cloud computing](https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/) | 2026-10-21 |
| `responsibility` | [Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) | 2026-10-21 |
| `regions` | [Azure regions overview](https://learn.microsoft.com/en-us/azure/reliability/regions-overview) | 2026-10-21 |
| `zones` | [Availability zones and deployment choices](https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview) | 2026-10-21 |
| `hierarchy` | [Azure management groups](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview) | 2026-10-21 |
| `resourceGroups` | [Manage Azure resource groups](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) | 2026-10-21 |
| `compute` | [Choose an Azure compute service](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree) | 2026-10-21 |
| `networking` | [Azure Virtual Network](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) | 2026-10-21 |
| `endpoints` | [Private endpoints](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview) | 2026-10-21 |
| `storage` | [Storage account options](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview) | 2026-10-21 |
| `redundancy` | [Azure Storage redundancy](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy) | 2026-10-21 |
| `tiers` | [Blob access tiers](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview) | 2026-10-21 |
| `transfer` | [Copy data with AzCopy](https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10) | 2026-10-21 |
| `migration` | [Azure Migrate](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview) | 2026-10-21 |
| `entra` | [Microsoft Entra identity services](https://learn.microsoft.com/en-us/entra/fundamentals/what-is-entra) | 2026-10-21 |
| `authentication` | [Microsoft Entra authentication](https://learn.microsoft.com/en-us/entra/identity/authentication/overview-authentication) | 2026-10-21 |
| `conditionalAccess` | [Conditional Access](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview) | 2026-10-21 |
| `rbac` | [Azure role-based access control](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview) | 2026-10-21 |
| `domainServices` | [Microsoft Entra Domain Services](https://learn.microsoft.com/en-us/entra/identity/domain-services/overview) | 2026-10-21 |
| `defender` | [Microsoft Defender for Cloud](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction) | 2026-10-21 |
| `storageMigration` | [Azure Storage migration guidance](https://learn.microsoft.com/en-us/azure/storage/common/storage-migration-overview) | 2026-10-21 |
| `budgets` | [Cost Management budgets and alerts](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets) | 2026-10-21 |
| `policy` | [Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/overview) | 2026-10-21 |
| `locks` | [Azure resource locks](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources) | 2026-10-21 |
| `purview` | [Microsoft Purview](https://learn.microsoft.com/en-us/purview/purview) | 2026-10-21 |
| `arm` | [Azure Resource Manager](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview) | 2026-10-21 |
| `arc` | [Azure Arc](https://learn.microsoft.com/en-us/azure/azure-arc/overview) | 2026-10-21 |
| `monitor` | [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview) | 2026-10-21 |
| `health` | [Azure Service Health](https://learn.microsoft.com/en-us/azure/service-health/overview) | 2026-10-21 |
| `advisor` | [Azure Advisor](https://learn.microsoft.com/en-us/azure/advisor/advisor-overview) | 2026-10-21 |

Supplementary accuracy checks:

- [Pricing calculator](https://azure.microsoft.com/en-us/pricing/calculator/), reviewed 2026-10-21.
- [Savings plans and commitment tradeoffs](https://learn.microsoft.com/en-us/azure/cost-management-billing/savings-plan/savings-plan-overview), reviewed 2026-10-21.
- [Spot VM interruption behavior](https://learn.microsoft.com/en-us/azure/virtual-machines/spot-vms), reviewed 2026-10-21.
- [Azure File Sync and optional cloud tiering](https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-introduction), reviewed 2026-10-21.
- [ExpressRoute encryption boundary](https://learn.microsoft.com/en-us/azure/expressroute/expressroute-about-encryption), reviewed 2026-10-21.
- [Region pairs and nonpaired regions](https://learn.microsoft.com/en-us/azure/reliability/regions-paired), reviewed 2026-10-21.
- [VNet peering behavior](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview), reviewed 2026-10-21.
- [Microsoft exam scoring](https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports), reviewed 2026-10-21.

## Human-voice editorial review

All ten lessons received a dedicated textual read-aloud assessment after drafting,
covering titles, goals, introductions, explanations, scenarios, comparisons,
figure captions/labels, misconceptions, takeaways, answer reasoning, extensions
and study-link help. No audio generation, humanizer, synonym substitution tool or
readability score was used. The following is an editorial assessment for owner
review, not a claim that automated tests establish instructional quality.

| Lesson | Reading assessment and refinement |
|---|---|
| 1 | Starts with a shop's practical need before cloud-model labels; connects growth to a database bottleneck; retains cost/reliability caveats. |
| 2 | Compares three ways to obtain an expense application. Definitions precede the responsibility matrix so the learner doesn't have to decode unexplained service-model initials. |
| 3 | Moves from a server failure to a zone failure and a regional recovery. The diagram follows the definitions it relies on. No automatic-resilience promise. |
| 4 | Defines scope in ordinary language before using the hierarchy; distinguishes identity, placement and billing with a test/production example. The graphic follows those explanations. |
| 5 | Uses the code's actual requirements to select hosting; explains each choice's operating work, rather than presenting an unexplained product list. |
| 6 | Follows finding, reaching and authorizing a destination. Defines VNet, DNS and endpoint concepts before the visual. The caption explains where the managed database actually sits. |
| 7 | Starts with how people use files and images; explains retrieval delay and recovery consequences; keeps large reference combinations optional. |
| 8 | Uses the new employee's two access questions, then follows one support engineer's sign-in and permissions. Expands new abbreviations and preserves licensing/assurance nuance. |
| 9 | Follows a temporary lab from estimate to cleanup. Explains why an alert needs a human/process response and why each management control solves a different problem. |
| 10 | Starts with a slow customer page, then chooses evidence. Explains the meaning of a chart, an incident and a recommendation without implying one proves the others. |

### Twelve examples of the final instructional voice

These are actual passages, rather than invented learner testimonials or promises
about passing an examination.

1. **A familiar starting point:** “A small shop needs a website, but buying a server would mean finding space for it, maintaining it and planning for busy days.” This gives the cloud decision a concrete reason.
2. **Explain a consequence:** “Stored data and other services can still incur charges after the traffic falls.” The learner can see why scaling down is only one part of cost control.
3. **Make responsibility practical:** “Before choosing IaaS, the team agrees who will patch it.” This turns a model definition into a decision someone must own.
4. **Teach a failure boundary:** “A zonal virtual machine still runs in its selected zone; it doesn’t automatically move itself elsewhere if that zone fails.” This preserves a necessary technical caveat in spoken English.
5. **Connect organization to real work:** “Before grouping resources together, ask whether the team really intends to remove them together.” The lifecycle concept becomes a useful question.
6. **Avoid complexity for its own sake:** “You don’t need to choose the most complicated option to build something useful.” The surrounding explanation still covers all required compute choices.
7. **Separate diagnoses:** “Fixing a DNS record won’t repair a missing database permission.” A short concrete sentence connects networking to authorization.
8. **Give a storage decision a deadline:** “It doesn’t suit a document that someone needs to open immediately.” This explains Archive's limitation rather than asking for a memorized label.
9. **Define identity through everyday questions:** “When a new employee signs in, two questions need answers: ‘Who are you?’ and ‘What may you do?’” The following sentences name authentication and authorization.
10. **Keep the learner's protection intact:** “The team should check the role assignment and other applicable restrictions rather than weakening authentication.” The answer reasoning explains the safe direction of investigation.
11. **Explain what automation does not do:** “A budget notification doesn’t stop resources or cap the bill.” The example then gives someone responsibility for responding.
12. **Connect monitoring to an observable result:** “After an approved change, it measures the customer-facing response time again and improves its alerting if needed.” This closes the troubleshooting loop.

The final Chrome DOM has a longest lesson paragraph of 51 words. This is a review safeguard, not a target or a readability score. Core paragraphs and extension paragraphs are checked against the 65-word guard.
Essential text stays visible. Native checks say explicitly that they aren't graded,
collected or saved. The comparison tables have named, focusable internal scroll
regions; diagrams stack instead of shrinking their labels.

## Preserved material and architecture

- All eight AZ-900 sample records, selection order, options, correct-answer fields and explanations remain unchanged; visible samples and Quiz JSON-LD are compared in browser tests.
- AWS source/descriptors and authored content remain unchanged. The generated `<main>` HTML for both AWS guide and hub matches the accepted build byte-for-byte, including its nine lessons and eight figures. The production CSS filename/hash is also identical (`index-BYVUu0g1.css`).
- No question bank, generated catalog, engine, session, simulation, timer, result, progress, authentication, analytics, consent, advertising, Worker, schema, prerender, route or package file changed.
- The sitemap remains 36 canonical URLs with all 11 Study Hubs. No artificial modification dates, new route or full-content duplicate was added.
- The AZ-900 hub lists ten native lesson links under their primary existing domains. Links to videos, practice menus and drill setup use supported routes; no invented topic-filter links or claims of current video completeness.
- No new runtime or development dependency and no new recurring cost.

## Validation

Implementation began October 21; final browser validation continued October 22.
Source review dates above record the actual research date.

Final results are recorded below after the complete run. Initial baseline:
**631 units**, production build and both zero-finding audits passed. Scripts were
disabled for `npm ci`. The sandbox initially denied tsx's local IPC and npm DNS;
rerunning those approved checks with the needed execution access succeeded.

The first new navigation test tried clicking a link in a closed hub disclosure.
It was corrected to open the domain before clicking, and the focused recheck
passed. No application change was needed for that harness error.

| Check | Final result |
|---|---|
| Full unit suite | **646 passed**, 42 files (631 at baseline) |
| Full browser regression suite | **212 passed**, 14.2 minutes; all existing application screenshot baselines preserved |
| Final Azure + inherited AWS reading checks | **27 passed**, 4.3 minutes; rerun after the Azure-only reference-link target adjustment |
| Additional sample/FAQ schema recheck | **1 passed** with the strengthened exact-answer/explanation/FAQ assertions |
| Simulator hook/performance suite | **7 passed**, 5.9 seconds |
| Final isolated Worker suite | **13 groups passed**, completed; **0 outbound integration attempts** |
| Production build | TypeScript app/Worker, Vite, CSS and all prerendered assets passed |
| Full / production-only audits | **0 / 0 findings**, no advisory suppressions or dependency changes |
| Dependency tree | `npm ls --all` passed, no conflicts |
| Diff checks | `git diff --check` passed |
| Initial HTML | 10 lessons, 4 figures, 10 unscored checks, 8 original samples; no JS needed for instruction/disclosures |
| Routing/SEO | All 11 hubs and all 36 sitemap URLs tested; sample/FAQ schema parity and original canonicals preserved |
| Responsive/accessibility | 320/375/390/768/1440, both themes, open/closed disclosures, keyboard and touch checks passed |

The full regression run preceded the final Azure-only reference-link touch-target
adjustment. All affected Azure reading paths and the inherited AWS lesson tests
were rerun afterwards (27 checks), along with the final unit/build/Worker checks.
The AWS guide/hub HTML and production CSS remained identical to the accepted
baseline. This is a presentation option on the existing `LearningResources`
contract, not a new lesson architecture or session API.

Final performance evidence (Linux x86_64, Node 24.21.0, installed Chrome 154):
Chrome with 4× CPU throttling, 10 samples, ACL boundary p95 **33.6ms** (43,740
cells; 524,814 rule visits), overlap **8.1ms**, complete policy **21.3ms**.
Windows runtime p95 **16.4ms** (15,000 cells; 180,000 visits). Existing ceilings
and exact scoring behavior were retained.

Playwright MCP review found **zero console errors/warnings**, no advertising or
analytics collection requests in the declined-consent QA session and no page or
diagram overflow in the five-width/two-theme/open-and-closed matrix. Azure
reference links also have at least 44px targets, verified in final Chrome and
browser tests; AWS retains its accepted presentation. The temporary QA tab was
closed, the original Cloudflare tab preserved and the recorded viewport restored.
The isolated preview remains running for owner review.

Commands from the worktree:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm test
npm run build
CERT900_TEST_PORT=4216 npm run test:browser
npm run test:simulations
npm run test:worker
npm audit
npm audit --omit=dev
npm ls --all
git diff --check
```

Browser regressions use installed Chrome, external-request stubs/blocks and fresh
local contexts. Worker tests use synthetic configuration, a fresh local D1 and
blocked integrations, not production resources or real credentials. Performance
runs must be serial with the main browser suite to avoid CPU contention.

## Screenshots and local preview

Maintained owner-review evidence in `docs/qa/az900-education/`:

- `desktop-1440.png`: lesson navigation and the beginning of the reading path.
- `mobile-390.png`: actual beginner text at a phone width.
- `responsibility-1440.png` and `responsibility-320.png`: service-model responsibility comparison. The latter captures the complete vertically stacked figure, not one phone-height viewport.
- `hierarchy-320-dark.png`: management scope relationships.
- `regions-320-dark.png`: zones within one region and separate recovery region.
- `network-320-dark.png`: public web/private database boundaries.

Captured with Playwright MCP in one temporary localhost QA tab. The existing
Cloudflare tab was preserved. No account settings, cookies, sessions or browser
extensions were changed. One long-element capture initially caught the wrong
scroll position; it was recaptured after explicitly aligning the element and
visually checked, without changing the application.

The review server uses synthetic local resources:

- Azure: http://127.0.0.1:4215/azure-fundamentals-practice-test?review=az900-final-v2#az900-lesson-contents
- Azure Hub: http://127.0.0.1:4215/study/az-900
- AWS: http://127.0.0.1:4215/aws-ai-practitioner-practice-test?review=az900-final#aif-lesson-contents

If it has stopped, run from this worktree:

```sh
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4215
```

A fresh `review` query avoids reusing an old same-URL browser document. It does not
enable tracking or alter application behavior.

## Exact changed-file manifest

- `docs/az900-bank-errata.md`
- `docs/az900-educational-expansion.md`
- `docs/educational-content-standard.md`
- `docs/qa/az900-education/desktop-1440.png`
- `docs/qa/az900-education/hierarchy-320-dark.png`
- `docs/qa/az900-education/mobile-390.png`
- `docs/qa/az900-education/network-320-dark.png`
- `docs/qa/az900-education/regions-320-dark.png`
- `docs/qa/az900-education/responsibility-1440.png`
- `docs/qa/az900-education/responsibility-320.png`
- `src/components/GuideLearningContent.tsx`
- `src/components/GuideLearningDiagrams.tsx`
- `src/content/guides/az900.test.tsx`
- `src/content/guides/az900.tsx`
- `src/data/az900-lessons.ts`
- `src/data/guide-lessons.test.tsx`
- `src/data/guide-meta.ts`
- `src/screens/Guides.tsx`
- `src/screens/StudyHub.tsx`
- `tests/pbq/azure-learning.spec.ts`

## Limitations and proposed combined release

- Owner review of educational voice, lesson length and teaching quality remains the acceptance gate. A beginner's observation or read-through is useful evidence beyond tests.
- Physical-device browser behavior, zoom with a real mobile keyboard, high contrast and a screen reader still need manual checks. Chrome emulation alone doesn't establish assistive-technology quality. The stacked responsibility comparison is intentionally long on a phone so its labels remain readable; owner review should assess that reading tradeoff.
- This is conceptual instruction, not a live Azure lab or complete course. Knowledge checks have no stored answer/progress. No Azure resources are provisioned or real commands executed.
- Service availability, price, licensing and objectives can change. Sources are dated; recheck before release rather than claiming permanent freshness.
- Bank notes remain separately authorized work. Existing older video links are preserved and accurately qualified, not presented as coverage of all current objectives.
- The Azure branch descends directly from the accepted AWS natural-voice checkpoint, so a combined candidate already includes both expansions. Do not cherry-pick the AWS chain a second time.
- After acceptance, verify then-current GitHub main and actual production UUID/configuration. Prepare a separate combined release candidate; stop for any unexpected history/configuration differences.
- Repeat required release checks, preserve the real active rollback UUID and use the existing inactive-version upload/override process only with separate approval. Promotion and main synchronization remain separate owner decisions.
- No push, merge, Cloudflare upload/stage/deployment, Google setting change, ad activation or Azure expansion beyond these ten lessons occurred in this task.
