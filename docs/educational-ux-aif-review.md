# AWS educational UX refinement: owner review

## Scope and checkpoint

Accepted parent: `9a8ae4a912f450feb74cc5e486e117d0408708b3` on
`codex/seo-phase-3-aif`. This isolated revision uses
`codex/educational-ux-aif` in `aif-refinement-worktree`.

Canonical URL remains `/aws-ai-practitioner-practice-test`. There are nine lessons,
fourteen task references, five official domains and eight unchanged generated
sample questions. This is still an introductory study guide, not a complete
course. Azure, bank errata, simulations and production work remain outside scope.

No dependencies, paid services, learner state or external account changes were
introduced. No push, merge, Worker upload, staging or deployment was performed.

## What made the accepted page hard to read

The original main explanation for each lesson contained 412–582 words before its
scenario, without internal concept headings. Its longest paragraphs contained
81–121 words. Concepts, specialist terms, service catalogs and implementation
qualifications competed at the same level. There was no explicit takeaway or
separate optional technical extension.

The new presentation starts with an ordinary-language goal and a short
introduction. Each lesson has three named concept sections, a concrete three-step
scenario, a visible caution and takeaway, and a native unscored self-check.
Optional technical extensions remain in the initial HTML under accurately named
native disclosures. Important warnings and the central explanation remain visible.

The four original diagrams are retained and moved earlier. Four new original
HTML/CSS visuals explain precision/recall, service selection, responsible-AI review
and security boundaries. Alternatives use parallel cards; actual processes use
numbered steps. No visualization dependency, animation or runtime script is added.

## Permanent standard

[Educational content standard](educational-content-standard.md) applies to guides,
Study Hub instruction, lessons, diagrams, checks, future courses, video/animation
scripts and transcripts. Root `AGENTS.md` and the existing `CLAUDE.md` point future
coding work to it. It requires prerequisites, plain definitions, short connected
paragraphs, progressive disclosure, meaningful visuals, realistic examples,
source verification, coverage mapping and owner review.

This does not authorize automatic rewrites of other guides. Apply the standard
when those resources next enter an approved editorial scope.

## Coverage comparison

The task IDs, domain grouping, source bindings and lesson anchors are unchanged.
Only the learner-facing goal wording in the descriptor was simplified. Existing
sample catalog, sample selection, FAQ/Quiz schema inputs and routes are unchanged.

| Lesson and unchanged task references | Visible learning path | Preserved technical depth in extension |
| --- | --- | --- |
| 1. Approach selection — 1.1, 1.2 | AI/ML relationship; rules, classification, regression, clustering and generation; labels; supervised, unsupervised and reinforcement learning; training versus inference; repair-shop choices | Structured/unstructured data, time series/images/audio, quality/representation; real-time, batch, async and serverless distinctions; latency/cost; deep learning, NLP, LLM and agent relationships |
| 2. ML lifecycle — 1.3 | Goal-to-monitoring diagram; training/validation/test separation; leakage and time-aware evaluation; bakery forecast and controlled updates | Exploratory analysis, preprocessing, feature engineering, parameters/hyperparameters; data/concept drift; MLOps/version evidence; managed versus self-hosted/open models; S3, SageMaker AI and Bedrock |
| 3. Model performance — 1.3, 3.4 | Four confusion-matrix outcomes; precision/recall with denominators; rare-event accuracy baseline; thresholds and error consequences; review versus deletion | F1 formula and limits; generalization, over/underfitting, statistical bias/variance; subgroup/label checks; ROI and operating/business outcomes |
| 4. Foundation models/services — 1.2, 2.1, 2.2, 2.3 | Bedrock/SageMaker AI/Quick choice cards; tokens/context window; multimodal support; narrow-service fit; technician-report scenario | Transformers, diffusion, embeddings; model lifecycle/customization; broader SageMaker, JumpStart and service catalog; current/historical names; hypothetical token arithmetic, caching, batching and provisioned capacity |
| 5. Prompt/context design — 2.1, 3.2 | Task/evidence/output steps; zero/one/few-shot examples; templates and evaluation; injection and external enforcement; warranty scenario | Temperature, top-p/top-k, output limits; negative instructions/example bias; context/memory assembly; reasoning techniques and limitations; Prompt Management versions; injection/jailbreaking/exposure/poisoning |
| 6. Retrieval/customization — 3.1, 3.3 | RAG ingestion/query diagram; prompting versus retrieved evidence versus fine-tuning; citations/access/current sources; manual-revision scenario | Chunks, embeddings, index metadata; Bedrock Knowledge Bases, OpenSearch, supported Aurora/RDS PostgreSQL and Neptune distinctions; in-context learning, fine/instruction tuning, continued/from-scratch pretraining, distillation, transfer learning and RLHF; data/evaluation/cost controls |
| 7. Agents/evaluation — 2.1, 3.1, 3.4 | Tool/approval flow; model/tool/memory roles; MCP limits; workflow versus agent; tool arguments, traces and actual state; failed-booking scenario | Multi-agent patterns; short/long-term memory/access/retention; Strands and AgentCore; Agents Classic availability; overlap/similarity metrics, human/model-judge/application evaluation; operational/business measures |
| 8. Responsible AI — 4.1, 4.2 | Fairness/inclusivity; transparency versus explainability; group errors and investigation; meaningful human review/correction; language-priority scenario | Robustness, safety, veracity and sources of bias; Model Cards, Clarify availability, evaluation/Guardrails limits; licenses/IP, hallucination/trust risks; sustainability and accessible human-centered design |
| 9. Security/governance — 5.1, 5.2 | Identity/retrieval/output/tool/evidence boundaries; authentication/authorization; least privilege; encryption versus permission; owners/retention; payroll scenario | Shared responsibility, IAM/AgentCore controls, TLS/PrivateLink, Macie, Guardrails, CloudTrail/Config, Inspector, Artifact/Trusted Advisor; minimization/redaction, lineage, residency/retention/deletion, Security Scoping Matrix, cross-Region processing, grounding/confidence limits |

The new unit coverage oracle checks concept families, not only lesson counts.
That guard cannot prove instructional completeness by itself: the owner should
review this map and the actual explanations. Repeated prose and duplicate table
examples were consolidated; concepts were not intentionally removed.

## Beginner rewrite examples

### Model evaluation

Before: one paragraph introduced accuracy, precision, recall, F1 and the harmonic
mean together, followed by another paragraph on rare classes and thresholds.

After: the learner first sees two questions about one scam detector:

- **Trust an alert:** 15 actual scams / 25 alerts = 60% precision.
- **Find the scams:** 15 found / 20 actual scams = 75% recall.

Short concept sections then name the four outcomes and explain why an all-ordinary
classifier already scores 98%. The scenario compares staff review with automatic
deletion. F1 and model-fit terminology remain available in the technical extension.

### RAG and customization

Before: the main path interleaved retrieval mechanics, vector storage choices,
customization methods and operational qualifications.

After: “A support assistant needs this month’s repair policy. You can retrieve
that policy when it answers instead of repeatedly training it to memorize updates.”
The diagram separates preparing an index from answering a request. Three short
concept sections distinguish instructions, evidence and learned parameters.
Database choices and training-method comparisons remain in the extension.

### Choosing an approach

Before: successive long paragraphs introduced overlapping AI terms, three learning
approaches, data types and four inference/hosting choices before the worked case.

After: the learner names the desired output, asks what labeled examples exist,
then separates training from inference. A repair-shop walkthrough chooses a tax
formula, repair-hours regression and customer clustering. Hosting choices and
specialist terminology follow as optional depth.

## Measured reading structure

These numbers describe main explanation prose, excluding diagrams, the scenario,
links and extensions. They are evidence of chunking, not a learning-outcome claim.
All scenarios, diagrams, caveats and takeaway text are also visible by default.

| Lesson | Before / after main prose words | Before / after longest main paragraph | Concept headings before / after |
| --- | --- | --- | --- |
| 1 | 473 / 189 | 91 / 36 | 0 / 3 |
| 2 | 417 / 160 | 83 / 33 | 0 / 3 |
| 3 | 412 / 181 | 81 / 39 | 0 / 3 |
| 4 | 582 / 178 | 121 / 38 | 0 / 3 |
| 5 | 454 / 173 | 90 / 28 | 0 / 3 |
| 6 | 470 / 163 | 90 / 34 | 0 / 3 |
| 7 | 517 / 173 | 90 / 38 | 0 / 3 |
| 8 | 439 / 137 | 91 / 32 | 0 / 3 |
| 9 | 524 / 143 | 87 / 33 | 0 / 3 |

Machine-readable measurements are saved with the screenshots. The paragraph guard
also covers optional text; the 65-word review ceiling does not replace editing for
natural flow, definitions or the preferred one-to-three sentence pacing.

## Editorial accuracy

Reviewed **October 21, 2026** against the accepted coverage map and its official
AWS references. Refreshed checks included the current [Domain 1 objectives](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01-domain1.html),
[Knowledge Bases flow](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-how-it-works.html),
[model and RAG evaluation](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html),
[Amazon Quick](https://docs.aws.amazon.com/quick/latest/userguide/what-is.html),
[Clarify availability](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-explainability.html)
and [Agents Classic availability](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html).
All 24 existing source records and per-lesson reference bindings are retained.

The numerical example remains internally consistent: 15 true positives, 10 false
positives, 5 false negatives and 970 true negatives; precision 60%, recall 75%,
accuracy 98.5%, F1 approximately 66.7%. Hypothetical token costs still total $0.004;
these are not quoted AWS prices. New bars use the same denominators as the text.

The original diagrams were reviewed for subset versus capability relationships,
training/evaluation boundaries, retrieval permissions and tool approvals. They
remain conceptual examples. In particular, RAG need not use vectors, service
capabilities overlap, citations are not proof, fairness checks are not guarantees,
and network privacy does not authorize document access.

Historical naming/availability qualifications and the original separate bank
errata remain in [the accepted AWS review](seo-phase-3-content-review.md). No
question-bank correction is included here, and no old video is asserted to cover
all current objectives.

## Screenshot review

Original accepted assets in `docs/qa/seo-phase-3-aif/` are preserved unchanged.
Existing application screenshot baselines are not updated.

This revision adds review evidence under `docs/qa/educational-ux-aif/`:

- `before/` and `after/`: lessons 1, 3 and 6 at 390px and 1440px, light theme.
- `after/`: four new figures at 320px in dark theme, plus the worked-example
  presentation at 390px.
- `before/reading-metrics.json` and `after/reading-metrics.json`.

| Lesson | Before, mobile | After, mobile | Before, desktop | After, desktop |
| --- | --- | --- | --- | --- |
| Approach selection | [390px](qa/educational-ux-aif/before/aif-ai-ml-approaches-390.png) | [390px](qa/educational-ux-aif/after/aif-ai-ml-approaches-390.png) | [1440px](qa/educational-ux-aif/before/aif-ai-ml-approaches-1440.png) | [1440px](qa/educational-ux-aif/after/aif-ai-ml-approaches-1440.png) |
| Performance | [390px](qa/educational-ux-aif/before/aif-model-performance-390.png) | [390px](qa/educational-ux-aif/after/aif-model-performance-390.png) | [1440px](qa/educational-ux-aif/before/aif-model-performance-1440.png) | [1440px](qa/educational-ux-aif/after/aif-model-performance-1440.png) |
| RAG/customization | [390px](qa/educational-ux-aif/before/aif-retrieval-customization-390.png) | [390px](qa/educational-ux-aif/after/aif-retrieval-customization-390.png) | [1440px](qa/educational-ux-aif/before/aif-retrieval-customization-1440.png) | [1440px](qa/educational-ux-aif/after/aif-retrieval-customization-1440.png) |

New 320px dark-theme figures: [precision/recall](qa/educational-ux-aif/after/precision-recall-320-dark.png),
[service selection](qa/educational-ux-aif/after/service-choice-320-dark.png),
[responsible review](qa/educational-ux-aif/after/responsible-review-320-dark.png),
[security boundaries](qa/educational-ux-aif/after/security-boundaries-320-dark.png).
[Worked example at 390px](qa/educational-ux-aif/after/worked-example-390.png).

Before captures came from the accepted baseline build before rebuilding this
worktree. After captures use the final refinement build. Both use installed
Chrome, equal viewport sizes and fresh local contexts with external requests
blocked. These are local synthetic test views, with no account data or credentials.

Reproduce screenshots after starting the isolated preview:

```sh
node tools/qa/capture-lesson-review.mjs after http://127.0.0.1:4211
```

Do not run `before` against the revised build; that would replace the preserved
comparison evidence with the wrong source version.

## Validation

Baseline before source edits: **617 unit tests in 39 files**, production build,
zero findings in both audits and a valid dependency tree. Dependencies were
installed with lifecycle scripts disabled; manifests and lockfile remain unchanged.

Final-build validation:

- **628 unit tests in 40 files passed**, including eleven new editorial/coverage checks.
- Production build, TypeScript, CSS and prerender passed.
- Full and production-only audits: **0 / 0 findings**.
- `npm ls --all` and `git diff --check` passed.
- **13 isolated Worker groups passed**, with zero outbound Worker attempts. Synthetic
  authentication, session/progress persistence and local D1 checks use no production data.
- Final generated HTML contains nine lessons, nine checks, nine extensions, eight
  figures and eight samples. Canonical is unchanged; sitemap retains 36 URLs,
  including all eleven Study Hubs.

- **202 production-browser regressions passed in 13.0 minutes**, including all
  seventeen AWS checks (the ten existing checks plus seven new UX checks).
- **7 simulator hook/performance checks passed**. Chrome 4× CPU p95: ACL maximum
  boundary case **33.3ms**, Windows effective-policy case **16.2ms**. Existing
  performance limits and scoring were preserved.
- All five widths (320, 375, 390, 768, 1440) passed in light and dark themes, with
  extensions closed and open. Primary text is at least 16px and supporting labels
  at least 14px; native disclosures/contents targets are at least 44px.
- No duplicate headings/IDs, local HTTP failures, unexpected page errors, new
  analytics events or advertising requests were found in the AWS checks. Existing
  exam, PBQ, Results, consent and Study Hub regressions passed.
- Both the established application screenshot baselines and accepted AWS review
  images are unchanged. Seventeen new review images are separate evidence.

A first audit attempt timed out at the npm registry. Completed bounded retries
returned zero findings in both modes; no advisory was suppressed and no package
changed. The accepted parent worktree remains clean at `9a8ae4a`.

Reproduction commands:

```sh
npm test
npm run build
CERT900_TEST_PORT=4212 npm run test:browser
npm run test:simulations
npm run test:worker
npm audit --fetch-timeout=30000 --fetch-retries=0
npm audit --omit=dev --fetch-timeout=30000 --fetch-retries=0
npm ls --all
git diff --check
```

All automated browser contexts close after testing. The manual-review preview
returns HTTP 200 with nine lessons and remains running on port 4211.

Test environment: Ubuntu/Linux, Node **24.21.0**, npm **11.19.0**, installed Chrome
**155.0.8059.39**. The generated guide is 200,911 bytes (35,510-byte gzip estimate);
this is a payload description, not a measured performance claim.

## Exact changed files

- `AGENTS.md`
- `CLAUDE.md`
- `docs/educational-content-standard.md`
- `docs/educational-ux-aif-review.md`
- `docs/qa/educational-ux-aif/after/aif-ai-ml-approaches-1440.png`
- `docs/qa/educational-ux-aif/after/aif-ai-ml-approaches-390.png`
- `docs/qa/educational-ux-aif/after/aif-model-performance-1440.png`
- `docs/qa/educational-ux-aif/after/aif-model-performance-390.png`
- `docs/qa/educational-ux-aif/after/aif-retrieval-customization-1440.png`
- `docs/qa/educational-ux-aif/after/aif-retrieval-customization-390.png`
- `docs/qa/educational-ux-aif/after/precision-recall-320-dark.png`
- `docs/qa/educational-ux-aif/after/reading-metrics.json`
- `docs/qa/educational-ux-aif/after/responsible-review-320-dark.png`
- `docs/qa/educational-ux-aif/after/security-boundaries-320-dark.png`
- `docs/qa/educational-ux-aif/after/service-choice-320-dark.png`
- `docs/qa/educational-ux-aif/after/worked-example-390.png`
- `docs/qa/educational-ux-aif/before/aif-ai-ml-approaches-1440.png`
- `docs/qa/educational-ux-aif/before/aif-ai-ml-approaches-390.png`
- `docs/qa/educational-ux-aif/before/aif-model-performance-1440.png`
- `docs/qa/educational-ux-aif/before/aif-model-performance-390.png`
- `docs/qa/educational-ux-aif/before/aif-retrieval-customization-1440.png`
- `docs/qa/educational-ux-aif/before/aif-retrieval-customization-390.png`
- `docs/qa/educational-ux-aif/before/reading-metrics.json`
- `src/components/GuideLearningContent.tsx`
- `src/components/GuideLearningDiagrams.tsx`
- `src/content/guides/aif-c01.tsx`
- `src/content/guides/aif-educational-ux.test.tsx`
- `src/data/guide-lessons.test.tsx`
- `src/data/guide-lessons.ts`
- `tests/pbq/educational-ux.spec.ts`
- `tests/pbq/guide-learning.spec.ts`
- `tools/qa/capture-lesson-review.mjs`

## Local owner preview

<http://127.0.0.1:4211/aws-ai-practitioner-practice-test#aif-lesson-contents>

Fresh local Worker configuration disables external integrations and uses synthetic
configuration and a new local database. It does not read project secret files.
Start it again if this session's process has stopped:

```sh
cd '/home/sorannex/Claude Projects/cert900/aif-refinement-worktree'
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4211
```

Use a free port if 4211 is already serving another project; do not kill unrelated
previews. No AWS account, API call or paid service is needed to read these lessons.

## Remaining manual review and Azure reuse

- Review comprehension and pacing with actual beginners; screenshots and automated
  checks do not establish learning outcomes.
- Physical mobile devices, browser zoom/OS text settings and assistive technologies
  still need owner testing. Browser keyboard and width checks cover a useful subset.
- This is a long reference guide with nine chapters. Optional depth reduces the
  default reading load; it is not a complete LMS, saved course or mastery tracker.
- Technical comparison tables retain their labeled, keyboard-focusable internal
  horizontal scrolling when necessary; the page itself must not overflow.
- User Chrome tabs and sessions are preserved. Fresh automated browser contexts
  close at completion; the isolated local preview remains available for review.

For AZ-900, reuse the plain goal, `LessonConcept`, `TeachingSteps`, takeaway,
native check and technical-extension pattern. Begin with a small business moving
one workload to the cloud, then separate service models, responsibility and Azure
architecture into teachable decisions. Use parallel cards for alternatives and
numbered flows for processes. Verify Azure objectives and write its own examples
and diagrams; do not copy AWS text or silently rewrite other guides. Azure still
requires the next implementation approval.
