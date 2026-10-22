# SEO Phase 3A: AWS AI Practitioner educational review

## Scope and baseline

AWS-only expansion from `e3959e42acbf7071d64bbedb493a1b1f597bcfd8` on
`codex/seo-phase-3-aif`. Canonical guide:
<https://cert900.com/aws-ai-practitioner-practice-test>. No Azure lesson, new
route, question-bank edit, scoring change, dependency change or runtime service.
Advertising and Grow remain disabled. No production or Google settings changed.

Sources reviewed **October 21, 2026**. AWS's current revision history lists
AIF-C01 guide **1.1, April 30, 2026**. AWS says revisions generally precede exam
changes by approximately one month, not a guaranteed exact activation date.
This guide provides foundational instruction, not a complete certification course
or an assertion that every possible exam topic is covered.

## Completed curriculum map

The task references below are the official task statements, not proprietary exam
questions or a claim about Cert900's grading. Detailed objectives live on the
linked AWS domain pages; the page and lessons use independent curriculum records,
not the practice engine's `examSplit` configuration.

| Official task | Instruction and observable teaching material | Lessons |
| --- | --- | --- |
| 1.1 Basic AI concepts and terminology | AI/ML/deep learning, learning approaches, data, inference and system patterns | 1 |
| 1.2 Practical AI use cases | Rules versus prediction/generation, technique selection and service fit | 1, 4 |
| 1.3 AI/ML development lifecycle | Data splits, training, deployment, monitoring, performance and business measures | 2, 3 |
| 2.1 Generative AI concepts | Foundation models, tokens, context, embeddings, context engineering, agent concepts | 4, 5, 7 |
| 2.2 Capabilities and limitations | Model selection, hallucinations, cost/latency and business constraints | 4 |
| 2.3 AWS GenAI infrastructure and technologies | Bedrock, SageMaker AI, managed capabilities and current agent/assistant terminology | 4 |
| 3.1 Foundation-model application design | Retrieval, customization tradeoffs, tools and agent design | 6, 7 |
| 3.2 Prompt engineering | Instructions, examples, context boundaries, parameters, risks and versioning | 5 |
| 3.3 FM training and fine-tuning | Pretraining, fine-tuning, continued pretraining, distillation and data requirements | 6 |
| 3.4 FM evaluation | Metrics, representative tests, human/judge evaluation, safety and business outcomes | 3, 7 |
| 4.1 Responsible AI | Representation, fairness, robustness, oversight and legal/safety risks | 8 |
| 4.2 Transparency and explainability | Model explanations, documentation, limits and human-centered decisions | 8 |
| 5.1 Secure AI systems | IAM, encryption, access boundaries, prompt injection, grounding and validation | 9 |
| 5.2 Governance and compliance | Audit evidence, data lifecycle, residency, retention and review responsibilities | 9 |

Official domain weights are 20/24/28/14/14. They are labeled separately from
Cert900's practice allocation. Existing eight generated samples and their Quiz
schema remain a separate, unchanged resource. Knowledge checks are original
unscored teaching prompts; no answers, attempts or progress are submitted/saved.

## Editorial decisions

- Explain Bedrock as a managed foundation-model application platform and
  SageMaker AI as ML building/training/deployment tooling. These capabilities
  overlap; do not describe them as mutually exclusive or claim Bedrock cannot
  customize models. Distinguish SageMaker AI from the broader SageMaker platform.
- Distinguish tokens, context, embeddings, retrieval and training. RAG supplies
  retrieved context without itself changing weights; it is not a guarantee of
  correct answers. The diagram illustrates one common vector-based RAG design,
  not a requirement that every RAG system use vectors or a particular database.
- Lower temperature generally reduces variation; it guarantees neither identical
  output nor truth. Prompt instructions and retrieved documents are not security
  boundaries; external content can carry prompt injection.
- Use current Amazon Quick terminology and explain historical Q Business names.
  Q Business stopped accepting new customers July 31, 2026. Older videos and
  bank examples may use historical names; do not silently relabel those records.
- Explain context engineering as assembling useful instructions, documents,
  conversation/tool state and other context within constraints. Explain MCP as a
  tool/context integration protocol, not a model, permission grant or assurance
  that a tool is safe. Applications still enforce access and approval.
- Separate classification metrics, text-overlap/similarity metrics, human review,
  judge-model assessments, safety checks and business outcomes. A single metric
  does not establish correctness. All numerical scenarios are fictional teaching
  examples, not claims about AWS pricing or model performance.
- Independent review checked the confusion-matrix arithmetic (970 true negatives;
  accuracy 98.5%, precision 60%, recall 75%, F1 approximately 66.7%) and hypothetical
  token-price calculation ($0.002 + $0.002 = $0.004). It prompted a clarification
  that labels or target responses are needed only when the training method calls
  for them; unsupervised learning and pretraining are not mislabeled.
- Responsible AI includes subgroup evaluation, representativeness, oversight,
  explainability and transparency; neither balance nor guardrails guarantees
  fairness. AWS's service compliance evidence does not establish a customer's
  legal compliance. Avoid absolute data-retention/privacy promises.
- Do not recommend buying services or provisioning cloud resources. Workflows
  are conceptual and entirely static; no AWS API, model, tool or shell executes.

### Official-source inconsistencies and limitations

The revisions table mentions Amazon Q where the current Domain 1 examples use
Amazon Quick, and includes Clarify under 4.2.2 while the current Domain 4 example
list omits it. Clarify's service documentation also restricts new-customer
availability. Teach the capability with context rather than treating every
revision example as an unrestricted current deployment recommendation.

Bedrock's current agents documentation identifies Agents Classic as closed to
new customers and points to AgentCore for similar capabilities. Q Developer CLI
is now named Kiro CLI. The lessons distinguish those transitions from a claim
that all existing customer services have stopped operating.

Some objective wording is awkward (for example, "task engineering"); authored
lessons explain concrete business outcomes rather than reproduce ambiguous
wording. In-scope example lists are not exhaustive. Older course chapters were
not asserted to cover the new context-engineering/agent objectives.

## Separate bank errata: no bank changes authorized here

| Existing material | Concern | Follow-up |
| --- | --- | --- |
| Interactive item **Dial In the Summarizer**, first requirement | Temperature is presented as producing the same faithful summary every run. This overstates both repeatability and factual reliability. | Separately review wording/accepted mapping; preserve it unchanged in this release. |
| Amazon Q Business / Q in QuickSight examples, including Q194–198 | Historical service names and availability can mislead readers considering a new implementation. Core conceptual answers are not automatically wrong. | Separate dated terminology/availability review; no silent key or bank changes. |
| SageMaker and Clarify references | Mixed historical naming and current availability context. | Separate editorial review with official service notices; no blanket replacement of the broader SageMaker name. |

The original public AWS scoring copy was corrected to describe Cert900's own
instructional scoring. Numeric scale similarity does not reproduce AWS's
proprietary scaled-score calculation. Existing scoring code remains untouched.

## Sources

Canonical clickable source records are also published with the lessons in
`src/data/guide-lessons.ts` and native reference disclosures.

- [Exam guide](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html)
- [Revision history](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/aif-01-revisions.html)
- [Domain 1](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01-domain1.html)
- [Domain 2](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01-domain2.html)
- [Domain 3](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01-domain3.html)
- [Domain 4](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01-domain4.html)
- [Domain 5](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01-domain5.html)
- [Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)
- [SageMaker AI naming](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html)
- [Amazon Quick](https://docs.aws.amazon.com/quick/latest/userguide/what-is.html)
- [Q Business notice](https://aws.amazon.com/q/business/)
- [Knowledge Bases](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-how-it-works.html)
- [Prompt Management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html)
- [Customization](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html)
- [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html)
- [AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html)
- [Agents Classic availability](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html)
- [Q Developer / Kiro CLI history](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/doc-history.html)
- [Model evaluation](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html)
- [Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)
- [Clarify capabilities and availability](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-explainability.html)
- [Model Cards](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html)
- [Data protection](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html)
- [Security Scoping Matrix](https://docs.aws.amazon.com/whitepapers/latest/navigating-security-landscape-genai/scoping-generative-ai-use-cases.html)

## Architecture and reuse

The nine descriptors expose stable lesson IDs, goal text, official task IDs,
domain groupings and source IDs. Long JSX content is imported only by the lazy
guide screen/build-time prerender path, not by synchronous discovery metadata.
Shared presentation accepts resource configuration for another certification;
diagrams are original semantic HTML/CSS with visible captions and text steps.
No React hydration or new content client is introduced.

The AWS Hub links to the lessons by existing canonical guide URL and fragment.
Its existing videos, sample inventory, interactive entry point, plans and progress
links remain. Generic drill URLs do not preselect a topic; instructions explain
the domain choice. Non-AWS guide bodies and bank data remain unchanged.

For Azure, reuse the lesson renderer and source configuration, add a separate
authored content module and descriptors, and validate its own current objectives
and diagrams. Do not use AWS lessons as a generic text template or duplicate
their content. Azure work requires the next approval.

## Validation and preview

Baseline: 611 tests in 38 files passed; production build passed; full and
production-only audits reported zero findings; dependency tree passed. Locked
dependencies were installed with scripts disabled. The sandbox initially blocked
tsx's local IPC socket; the same approved build passed with local socket access.

Final unit validation: **617 tests in 39 files passed**. Production build passed,
including static HTML and CSS generation. Both final audits report **zero
findings**; `npm ls --all` passes with no conflicts. Missing optional binaries for
other operating systems are expected and are not installed-tree conflicts.

The focused browser suite passed all **10 checks**, including their repeat in
the full final-build suite: **195 browser checks passed in 11.6 minutes**. All
**7 simulator hook/performance checks** and
all **13 isolated Worker groups** passed, with **zero outbound Worker attempts**.
Synthetic local authentication, progress writes/reads, session lifecycle and D1
persistence were exercised without production access.

| Final validation | Result |
| --- | --- |
| Unit and bank/grading integrity | 617 passed, 39 files |
| Full production-browser regressions | 195 passed, including 10 new AWS checks |
| Simulator hook and Chrome performance checks | 7 passed |
| Isolated Worker groups | 13 passed, zero outbound Worker attempts |
| Production build / CSS / prerender | Passed |
| Full / production-only npm audits | 0 / 0 findings |
| Dependency tree / diff whitespace | Passed |
| Existing screenshot baselines | Unchanged, all comparisons passed |
| Question banks, samples, engines, auth, consent, ads, Worker config, dependencies | No source changes |

No unexpected console errors or HTTP failures were found in the AWS browser
checks. No new ad or analytics requests were introduced. The new native checks
have no event handlers or application state; existing exam, Results, progress,
grading, DHCP, ACL, Windows Firewall and workstation regressions all pass.

Installed test environment: Ubuntu/Linux, Node **24.21.0**, npm **11.19.0**,
Chrome **155.0.8059.39**. Existing application screenshot baselines were not
updated. New screenshots are evidence of this AWS guide only.

Independent generated-page comparison against the preserved SEO Phase 2 build
found changed main text only on the AWS guide and AWS Hub among **35 static
pages**; the other **33** are unchanged. Sitemap still contains **36 URLs**.
The guide is approximately **195 KB HTML / 40 KB gzip estimate**, including all
lessons, tables, diagrams and existing samples. Its prose is absent from the main
application entry bundle; the existing consent content entry is unchanged. This
is not a measured network-performance or ranking claim.

The raw HTTP/DOM checks verify all nine lessons, nine self-checks, four diagrams,
all eight unchanged bank samples, matching Quiz/FAQ/lesson structured data, and
unique headings and IDs with JavaScript enabled and disabled. Native navigation,
refresh, history, keyboard disclosures, all five widths in both themes, contained
table scrolling, minimum text sizes and touch targets are exercised. The existing
analytics host allowlist keeps localhost measurement disabled; no advertising
requests or additional analytics events are introduced.

### Screenshot evidence

For 320, 390 and 1440 pixels, each in light and dark themes:

- `docs/qa/seo-phase-3-aif/aif-toc-<width>-<theme>.png`
- `docs/qa/seo-phase-3-aif/aif-lesson-<width>-<theme>.png`
- `docs/qa/seo-phase-3-aif/aif-diagram-<width>-<theme>.png`

These 18 original screenshots total approximately 4.3 MB. Automated layouts also
cover 375 and 768 pixels. Desktop contents and 320/390-pixel diagrams were
visually inspected for wrapping, clear hierarchy, contrast and readable labels.

### Reproduction commands

```sh
npm test
npm run build
CERT900_TEST_PORT=4208 npm run test:browser
npm run test:simulations
npm run test:worker
npm audit
npm audit --omit=dev
npm ls --all
git diff --check
```

Stop the review preview before rebuilding its `dist` assets. Browser suites
launch installed Chrome, close their own contexts and stop their own test server.
The MCP audit tab was closed after inspection; the pre-existing browser tab and
connection were preserved. The final isolated preview is retained for review.

Manual limitations: browser emulation does not replace physical-device or screen
reader checks. These are foundational lessons, not service implementation labs
or a complete course. Existing bank errata above remain intentionally unresolved.

Local preview from this worktree, after `npm run build`:

```sh
node tools/qa/isolated-worker.mjs --serve --port=4198
```

Open <http://127.0.0.1:4198/aws-ai-practitioner-practice-test> and
<http://127.0.0.1:4198/study/aif-c01>. The maintained harness uses fresh synthetic
local auth/D1 resources, blocks external Worker integrations and does not load
project secret files or connect to production resources. Browser tests block
external network hosts. The existing analytics host allowlist also prevents GA4
collection on localhost, including after consent.

## Exact changed files

- `docs/qa/seo-phase-3-aif/aif-diagram-1440-dark.png`
- `docs/qa/seo-phase-3-aif/aif-diagram-1440-light.png`
- `docs/qa/seo-phase-3-aif/aif-diagram-320-dark.png`
- `docs/qa/seo-phase-3-aif/aif-diagram-320-light.png`
- `docs/qa/seo-phase-3-aif/aif-diagram-390-dark.png`
- `docs/qa/seo-phase-3-aif/aif-diagram-390-light.png`
- `docs/qa/seo-phase-3-aif/aif-lesson-1440-dark.png`
- `docs/qa/seo-phase-3-aif/aif-lesson-1440-light.png`
- `docs/qa/seo-phase-3-aif/aif-lesson-320-dark.png`
- `docs/qa/seo-phase-3-aif/aif-lesson-320-light.png`
- `docs/qa/seo-phase-3-aif/aif-lesson-390-dark.png`
- `docs/qa/seo-phase-3-aif/aif-lesson-390-light.png`
- `docs/qa/seo-phase-3-aif/aif-toc-1440-dark.png`
- `docs/qa/seo-phase-3-aif/aif-toc-1440-light.png`
- `docs/qa/seo-phase-3-aif/aif-toc-320-dark.png`
- `docs/qa/seo-phase-3-aif/aif-toc-320-light.png`
- `docs/qa/seo-phase-3-aif/aif-toc-390-dark.png`
- `docs/qa/seo-phase-3-aif/aif-toc-390-light.png`
- `docs/seo-phase-3-content-review.md`
- `src/components/GuideLearningContent.tsx`
- `src/components/GuideLearningDiagrams.tsx`
- `src/content/guides/aif-c01.tsx`
- `src/data/guide-lessons.test.tsx`
- `src/data/guide-lessons.ts`
- `src/data/guide-meta.ts`
- `src/screens/Guides.tsx`
- `src/screens/StudyHub.tsx`
- `tests/pbq/guide-learning.spec.ts`
- `tools/prerender.tsx`
