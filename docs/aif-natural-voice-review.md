# AWS natural-voice editorial review

## Checkpoint and scope

Accepted parent: `593b22243059e4eaceb7b4ea8c34501f5ec7a69f`.
Branch: `codex/aif-natural-voice`.
Worktree: `/home/sorannex/Claude Projects/cert900/aif-editorial-worktree`.

This is an editorial pass over the nine accepted AWS lessons and their teaching
surfaces. The accepted layout, original diagrams, stable lesson anchors, objective
mappings and resources are retained. The canonical remains
`/aws-ai-practitioner-practice-test`. Azure implementation is deferred.

No question bank, generated sample catalog/selection, scoring, timer, simulator,
authentication, progress, analytics/consent, advertising, dependency or production
configuration changes are included. No push, merge, Cloudflare upload, staging,
deployment or external-account setting change was performed.

## Permanent natural-voice standard

The updated [educational content standard](educational-content-standard.md) now
explicitly applies its voice guidance to diagram captions, help text and
instructional UI as well as guides, hubs, lessons, checks, courses and future
scripts/transcripts. Existing `AGENTS.md` and `CLAUDE.md` already link to that
standard, so their instructions continue to apply without duplicate rule sets.

It asks for the voice of a knowledgeable, patient instructor: context before
abstraction, connected sentences, meaningful transitions, varied rhythm and
explanations a beginner can follow on first hearing. It distinguishes clear short
labels from clipped explanatory prose. Contractions are allowed where natural;
there is no quota, generic humanizer or synonym-replacement rule.

The narration guidance now addresses spoken delivery, explaining diagrams as they
appear, pauses, terminology, demonstrations and faithful transcripts. No audio,
video engine, LMS, subscription or new package was added.

## Textual read-aloud assessment

Reviewed **October 21, 2026**. Every lesson was assessed in sequence, including its
title/goal, concept headings, main prose, worked example, diagram or numbered
visual, comparison tables, check question and answer, caution, takeaway,
optional detail and study/reference help. This was a textual assessment, not audio
production or a claim that a readability score measures teaching quality.

Short labels that already work (such as “Training” or “Tool result”) remain short.
Longer explanations now connect the situation, action and reason. Technical names,
qualifiers and numerical examples were checked against the accepted teaching
content and retained AWS reference records. No new service-availability or
curriculum-refresh claim is made by this wording pass.

| Lesson | Read-aloud findings and response | Meaning retained |
| --- | --- | --- |
| 1. AI approach | Category/number shorthand and disconnected definitions became ticket and repair explanations. Data/inference table cells now read as useful examples. | Learning approaches, labels, training/inference, data types, delivery/hosting choices and overlapping AI terminology. |
| 2. Lifecycle | Abstract business framing, test-set shorthand and “believable evidence” labels were rewritten around the bakery’s decision and records. | Splits, independent testing, leakage, drift, preparation, MLOps, hosting responsibilities and AWS roles. |
| 3. Performance | Denominator-first phrasing and terse advice became two questions about alerts, plus a clear review/deletion consequence. | Confusion-matrix outcomes, all example counts, precision/recall/accuracy/F1, thresholds, fit, baselines and business costs. |
| 4. Foundation models | Token/context definitions, service catalogs and slash-separated capabilities became connected explanations with explicit service names. | Model/context limits, modalities, service overlaps, current/historical terminology, token arithmetic and total workflow costs. |
| 5. Prompts/context | Definition fragments and security commands became a warranty task, useful context and an explanation of external permission enforcement. | Shot examples, templates, context selection, generation settings, versioned tests, reasoning limits and attack types. |
| 6. RAG/customization | Three glossary-like statements now explain what each technique contributes; retrieval failure and training choices are walked through. | Retrieval versus parameter changes, permissions/citations, chunks/embeddings/stores, all customization methods and costs. |
| 7. Agents | Component fragments, MCP abstractions and “bound actions” advice became a booking workflow and concrete outcome checks. | Model/tool/memory roles, permissions/approval, workflows, traces, agent patterns/services and all evaluation approaches. |
| 8. Responsible AI | Definition lists and “provide evidence” commands became explanations of people’s experience and reviewers’ ability to correct mistakes. | Fairness, inclusivity, transparency/explainability, subgroup evidence, causation limits, safeguards, IP and sustainability. |
| 9. Security/governance | Identity/permission shorthand and dense noun lists became a staff-assistant example with responsibilities and reasons for each check. | Least privilege, connection versus authorization, validation, shared responsibility, AWS controls, data lifecycle and audit evidence. |

All eight diagram captions/label groups were reviewed. The prompting lesson uses
numbered instructional steps instead of a ninth diagram. Comparison tables and all nine
extensions were read; no technical section was dropped merely to shorten it.

## Meaningful before/after examples

Each example below was checked for its meaning, beginner comprehension and fit
with the surrounding lesson. The complete source diff records the remaining
sentence-level revisions; these examples show the recurring editorial decisions.

### 1. Approach selection

**Before:** A category calls for classification: is this ticket urgent or routine? A number calls for regression: how many repair hours will this job take?

**After:** When you sort a support ticket into an urgent or routine queue, you’re solving a classification problem. If you need to estimate how many hours a repair will take, regression helps you predict that number.

**Meaning check:** Classification still predicts a category; regression predicts a number. The ticket/repair example now introduces the distinction.

### 2. AI relationship caption

**Before:** Read inward: AI contains machine learning, which contains deep learning. Generative AI describes a capability; an agent describes a system design.

**After:** Machine learning is one approach within AI, and deep learning is an approach within machine learning. The smaller boxes show those relationships. Beside them, you can see what generative AI does and how an agent is organized.

**Meaning check:** The subset relationship is unchanged. Generative capability and agent design remain distinct aspects, rather than levels inside that hierarchy.

### 3. Check help text

**Before:** Unscored self-check. Nothing is submitted or saved.

**After:** This is just for practice. It isn’t graded, and your answer isn’t collected or saved.

**Meaning check:** The check remains optional, ungraded and without answer collection or storage. No control or session behavior changed.

### 4. Lifecycle introduction

**Before:** An ML project begins with a decision you want to improve. The question is not just “Can we train a model?” It is “Will its predictions help someone make that decision in time?”

**After:** A useful ML project starts with a decision someone needs to make. For a bakery ordering tomorrow’s ingredients, a forecast only helps if it arrives before the order is placed. That practical need should guide the model’s development.

**Meaning check:** The business decision and timing requirement still guide development. The bakery example makes that requirement concrete.

### 5. Independent testing

**Before:** Repeatedly choosing changes from test results makes that set less useful as an independent check.

**After:** If you keep changing the model to improve its test results, you’re also learning from the test set. It becomes less useful as an independent check of how the model will perform on new data.

**Meaning check:** Reusing test results to choose changes still weakens the test set’s independence; the revision explains why.

### 6. Performance interpretation

**Before:** Read the denominator before trusting the percentage

**After:** Ask what each percentage is counting

**Meaning check:** The heading still directs attention to what a percentage counts, without expecting a beginner to think first in mathematical terminology.

### 7. Error consequences

**Before:** A quick staff review may tolerate extra false alarms. Automatic deletion makes those false alarms more damaging.

**After:** If a staff member reviews each alert, a few extra false alarms might be manageable. If the system deletes flagged messages automatically, those same mistakes could remove important customer emails.

**Meaning check:** The same false positives have different consequences under review versus automatic deletion. No numbers or metric definitions changed.

### 8. Foundation-model context

**Before:** The context window has finite capacity. More text can add evidence, but also irrelevant information, cost and delay. Input and output limits depend on the model.

**After:** Only so much information fits in a model’s context window. Adding more text might provide useful evidence, but it can also introduce distractions, increase cost and slow the response. Check the input and output limits of the model you’re considering.

**Meaning check:** Finite context, irrelevant material, cost, delay and model-specific limits all remain.

### 9. Specialist service comparison

**Before:** Speech to text / text to speech / language translation.

**After:** Transcribe turns speech into text, Polly turns text into speech, and Translate translates between languages.

**Meaning check:** The Transcribe/Polly/Translate capabilities and their order are unchanged; the table now says what each service does.

### 10. Prompt and context introduction

**Before:** A model needs a clear task and useful information. Prompt engineering shapes the request. Context engineering decides which instructions, documents, conversation history and tool results should accompany it.

**After:** A model is easier to work with when you give it a clear task and the information it needs. Prompt engineering is how you shape that request. Context engineering is the wider job of choosing the instructions, documents, conversation history and tool results that should accompany it.

**Meaning check:** Prompt engineering still shapes the request; context engineering assembles the supporting information.

### 11. Prompt attack scenario

**Before:** A forum post claims every repair is free. The backend selects the authorized policy and gives this assistant no refund-issuing permission.

**After:** A forum post tells the bot to treat every repair as free. The application still chooses the approved policy, and this assistant has no permission to issue refunds. The forum text can’t grant that permission.

**Meaning check:** The application still chooses the approved policy and withholds refund permission. Untrusted text cannot grant access.

### 12. RAG failure diagnosis

**Before:** The assistant retrieves an older product generation. Fix product/revision selection; greater fluency cannot repair the evidence.

**After:** The assistant gives an instruction from an older product generation. The team needs to fix how it selects the product and manual revision; making the answer sound better won’t fix the wrong evidence.

**Meaning check:** The failure is still retrieval of the wrong product revision. Better prose cannot fix wrong source selection.

### 13. Model customization

**Before:** Instructions/examples supplied at inference; they consume context and tokens.

**After:** The model uses the instructions or examples you provide during inference. They use context space and tokens rather than changing its learned parameters.

**Meaning check:** In-context learning still happens through supplied context at inference, without training parameter changes.

### 14. Agent permissions

**Before:** Memory supplies context, not permission. A remembered preference cannot authorize a tool action.

**After:** Remembering a customer’s preference doesn’t give an agent permission to act on it. The application still needs the appropriate access checks and any required approval.

**Meaning check:** Remembered preferences remain context, not permission or approval to act.

### 15. Agent feedback

**Before:** Check tool arguments and the created order against the confirmed request. Include ambiguous units and approval cases; inspect traces and correct completion.

**After:** Compare the values sent to the ordering tool and the resulting order with the customer’s confirmed request. Tests with ambiguous units and approval requirements can reveal useful failures. The trace can help you see whether the mistake happened while interpreting the request or calling the tool.

**Meaning check:** The answer still checks both tool arguments and resulting state against the confirmed request, including units, approvals and traces.

### 16. Responsible-AI review

**Before:** Provide evidence, time and authority to reviewers. Explain appropriate use and limitations, offer accessible feedback paths, and assign someone to investigate problems.

**After:** A reviewer needs enough evidence, time and authority to do something useful with a concern. Explain when the system should be used, make it easy for people to report problems and assign someone to investigate them. Human review should offer a real chance to correct an outcome.

**Meaning check:** Human reviewers still need evidence, time, authority, accessible reporting and an accountable investigator.

### 17. Fairness feedback

**Before:** Investigate representation, labels, language support and consequences. Compare relevant group results and improvements with qualified reviewers instead of selecting from the overall average.

**After:** Look at the examples available for that group, the quality of their labels and the model’s language support. Review the consequences of its mistakes with people who understand the language and task. Then compare group results when testing improvements, rather than relying on the overall average.

**Meaning check:** The same data representation, label quality, language support, consequences and subgroup evaluation remain, with a connected explanation.

### 18. Identity and permissions

**Before:** Authentication checks identity. Authorization checks permission. Preserve the requesting user’s boundaries when retrieving documents or using tools.

**After:** Authentication checks who someone is. Authorization checks what they’re allowed to do. When an assistant retrieves a document or calls a tool for a user, those same permissions need to apply.

**Meaning check:** Authentication still establishes identity; authorization still establishes permission, including retrieval and tool use.

### 19. Governance ownership

**Before:** Assign owners for access, retention, incidents and regular review. Keep protected evidence of versions, sources, access decisions and actions so the team can investigate problems.

**After:** Decide who manages access, how long information is kept, who handles incidents and when controls are reviewed. Protect records of the versions, sources, access decisions and actions involved. Those records help the team understand what happened when something goes wrong.

**Meaning check:** Ownership, retention, incident handling, periodic review and protected versions/access/action evidence are preserved.

## Curriculum comparison and protected boundaries

| Lesson | Unchanged task references | Unchanged visual/example |
| --- | --- | --- |
| 1 | 1.1, 1.2 | AI relationship boxes; repair-shop decisions |
| 2 | 1.3 | Lifecycle/feedback; bakery forecast |
| 3 | 1.3, 3.4 | Precision/recall bars; scam detector and review/deletion |
| 4 | 1.2, 2.1, 2.2, 2.3 | Service-choice cards; technician report/photos |
| 5 | 2.1, 3.2 | Prompt steps; warranty assistant and malicious forum text |
| 6 | 3.1, 3.3 | RAG ingestion/query flow; wrong manual revision |
| 7 | 2.1, 3.1, 3.4 | Agent/tool approval flow; failed booking change |
| 8 | 4.1, 4.2 | Group-review process; less common language |
| 9 | 5.1, 5.2 | Security boundaries; payroll/document access |

The detailed concept inventory from the [accepted coverage review](educational-ux-aif-review.md#coverage-comparison)
remains applicable. Existing concept-presence tests still pass, and the new
editorial boundary test freezes the complete per-lesson IDs, task references,
domains and source IDs. These are coverage safeguards, not a substitute for the
meaning review above.

Preserved: **nine lessons, fourteen task references, five domains, eight diagrams,
nine ungraded native checks, nine technical extensions, all 24 source records,
and eight unchanged generated sample questions**. Official domain weights remain
20/24/28/14/14, separate from Cert900’s practice allocation.

The scam example still has 15 true positives, 10 false positives, 5 false negatives
and 970 true negatives: precision 60%, recall 75%, accuracy 98.5%, F1 about 66.7%.
The hypothetical token calculation still totals $0.004 and is explicitly not an
AWS price quote. RAG does not itself train parameters; citations, guardrails,
private connections and remembered preferences still do not confer the guarantees
or permissions warned against in the accepted lessons.

The native check note is now conversational but has the same boundary: ungraded,
no answer collection/storage. Its extra test ID supports assertions only; no
handler, form, input, mutable answer state or event emitter was introduced. The worked examples and
checks remain original Cert900 teaching material, separate from the existing bank
samples.

## Browser review with the authorized Playwright connection

Connected through the installed Playwright MCP extension. The owner selected the
existing Cloudflare tab; that page was preserved without navigation or changes.
One new localhost QA tab was used for the guide review. No Google, Cloudflare or
payment/account settings were inspected or changed during this pass.

The first navigation after restarting the local preview retained the old cached
page. A fresh QA URL confirmed the new heading and check note. This was a local
preview navigation/cache issue; no application repair was needed. The owner preview
URL below includes that fresh-query marker.

Direct MCP layout checks passed at **320, 375, 390, 768 and 1440px**, in light and
dark themes, with disclosures both closed and open: no page/diagram overflow and
16px minimum primary teaching text. MCP confirmed nine lessons/checks and eight
figures. Across all lesson paragraphs, including technical details and captions,
the longest contained **56 words**. This is a readability guard, not a prose target.

The first native check was opened in Chrome and its actual question, new note and
answer explanation inspected through the accessibility snapshot. The existing
regression suite separately checks keyboard controls, persistent consent and
unchanged learner storage.

Review screenshots, captured through Playwright MCP rather than a separate
browser driver:

| Width | Before | After |
| --- | --- | --- |
| 390px | [Accepted wording](qa/aif-natural-voice/before-390.png) | [Revised wording](qa/aif-natural-voice/after-390.png) |
| 1440px | [Accepted wording](qa/aif-natural-voice/before-1440.png) | [Revised wording](qa/aif-natural-voice/after-1440.png) |

[Open practice check at 320px, dark theme](qa/aif-natural-voice/check-320-dark.png).
Original accepted screenshots and application screenshot baselines are preserved.

## Validation

Baseline: scripts-disabled installation of the existing lockfile; **628 tests in
40 files passed**, production build passed, both audits returned zero findings
(after a registry retry), and no dependency manifests changed.

Final-build validation:

- **631 unit tests in 41 files passed**, including three new editorial boundary tests.
- Production build, TypeScript checks, CSS generation and static prerender passed.
- Both final npm audits returned **zero findings**. Initial registry timeouts
  cleared on bounded retries; no advisories were suppressed or packages changed.
- Dependency tree (`npm ls --all`) passed.
- **13 isolated Worker groups passed**, with zero outbound Worker attempts. The
  checks use synthetic authentication/progress data and fresh local D1 resources.
- Direct Playwright MCP checks passed across all five widths, both themes and open
  and closed disclosures, as recorded above.

- **202 browser regressions passed in 12.6 minutes**, including all seventeen AWS
  guide checks. This covers initial HTML/DOM and schema parity, all widths and
  themes, native controls, consent, Study Hubs, exam modes and legacy/featured PBQs.
- **7 simulator hook/performance checks passed**. At Chrome 4× CPU throttling,
  ACL boundary p95 was **30.7ms** and Windows runtime p95 was **17.7ms**, within
  their existing limits. Scoring, session isolation and exactly-once notifications
  remain unchanged.
- `git diff --check` passed; accepted screenshot baselines and QA assets are
  unchanged. Source comparison confirms unchanged presentation classes in the
  shared lesson and diagram components; no stylesheet rules changed.
- Playwright MCP reported **zero local QA console errors/warnings**. Its QA tab
  was closed after operations completed, and the original Cloudflare tab and
  connection were preserved. The QA viewport was restored to its initial size.

No technical blocker was found. Human voice/comprehension still requires owner
review; the tests establish content and behavior safeguards, not an editorial score.

Reproduction commands (use a free test port):

```sh
npm test
npm run build
CERT900_TEST_PORT=4214 npm run test:browser
npm run test:simulations
npm run test:worker
npm audit --fetch-timeout=30000 --fetch-retries=0
npm audit --omit=dev --fetch-timeout=30000 --fetch-retries=0
npm ls --all
git diff --check
```

## Exact changed files

- `docs/aif-natural-voice-review.md`
- `docs/educational-content-standard.md`
- `docs/qa/aif-natural-voice/after-1440.png`
- `docs/qa/aif-natural-voice/after-390.png`
- `docs/qa/aif-natural-voice/before-1440.png`
- `docs/qa/aif-natural-voice/before-390.png`
- `docs/qa/aif-natural-voice/check-320-dark.png`
- `src/components/GuideLearningContent.tsx`
- `src/components/GuideLearningDiagrams.tsx`
- `src/content/guides/aif-c01.tsx`
- `src/content/guides/aif-educational-ux.test.tsx`
- `src/content/guides/aif-natural-voice.test.tsx`
- `src/data/guide-lessons.test.tsx`
- `src/data/guide-lessons.ts`
- `tests/pbq/educational-ux.spec.ts`

## Local preview

<http://127.0.0.1:4213/aws-ai-practitioner-practice-test?review=natural-voice-v1#aif-lesson-contents>

The isolated local Worker uses synthetic configuration and a fresh database, with
external integrations disabled. Start it again if the preview process has ended:

```sh
cd '/home/sorannex/Claude Projects/cert900/aif-editorial-worktree'
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4213
```

Keep the fresh-query marker or refresh the document if an already-open tab shows
accepted wording. Do not stop unrelated previews if the port is in use.

## Remaining review

- The owner’s reading review, beginner feedback, physical devices and assistive
  technologies remain valuable; tests cannot certify that writing sounds human.
- This pass does not resolve the separate bank errata recorded in the original
  AWS review, update old video chapters or turn the guide into a complete course.
- No unresolved technical meaning change is intended. Azure Phase 3B remains
  deferred until this editorial checkpoint receives owner approval.
