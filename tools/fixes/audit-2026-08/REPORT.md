# 2026-08 question-bank audit — sample round

**Scope.** Stratified deterministic sample of 931 of 3,666 multiple-choice
questions (25.4%; proportional per exam × domain via `tools/audit-sample.mts`,
force-including every question surfaced publicly in the QOTD pool or the guide
sample blocks), plus **all 138 PBQs**. Standard: factual correctness for 2026
plus a fixed multiple-choice item-writing checklist (clang cues, unflagged
negatives, implausible/heterogeneous distractors, overlapping options,
stem-answerability, explanation/key consistency).

**Method.** Independent finder agents (one per ~65-question chunk, churn-
controlled: only named defect classes count, style preferences excluded) →
adversarial verification: every finding got a refuter defaulting to REJECT;
key changes additionally required a *blind* agent to answer the post-fix
question independently and land on the proposed key; currency/niche claims
required citations, which refuters checked against primary sources. Terminal
PBQ regex claims were executed against the engine's real matcher
(`commandMatches`), never eyeballed. Fixes applied via `tools/apply-fixes.mjs`
(MC) and a byte-preserving parse-rewrite (PBQs), then gated through gen-meta,
the 251-test suite, content-lint (0 flags), and a full build.

## Results

| | audited | flagged | confirmed & fixed | rejected by verification |
|---|---|---|---|---|
| Multiple choice | 931 | 13 | 12 | 1 |
| PBQs | 138 (all) | 8 | 8 | 0 |

**Confirmed MC defects by class:** 1 wrong key (az-104 q112 — the legacy
"large file shares" toggle vs. current 100-TiB standard shares), 7 factual
(2× a Cat 6a explanation crediting optional shielding; 4× AWS 2024-2025
currency on SAA-C03: ACM exportable certs, the Data Firehose rename, S3
Select's closure, FSx File Gateway's closure; 1× Azure Backup center →
Business Continuity Center), 3 item-writing flaws (clang echo, unflagged NOT,
word-category-pickable distractors), 1 garbled explanation.

**Confirmed PBQ defects:** 3 order keys (the N10-009 troubleshooting
methodology stored the six-step A+ list as Network+ canon — objective 5.1 is
seven steps; an ambiguous sibling-branch order; an az-104 sequence that gave a
Bastion-connected VM a public IP), 4 terminal accept-regex sets (false-
rejecting common correct forms; one also false-accepting an impossible
command), 1 hotspot title contradicting its own scenario.

**Fix commits:** 0e36097 (round 1), e6d6729 (round 2), 8e59433 (round 3 /
PBQs). Batches with per-fix rationale and citations live in this directory.

## Projection and recommendation

- **Wrong keys:** 1/931 (0.11%). Projected ~3 in the unsampled 2,735
  (95% CI roughly 0-16). The single wrong key was a 2024-era Azure platform
  change, not an authoring error.
- **All defects:** 12/931 (1.29%) → ~35 projected remaining, most of them
  explanation-quality or currency, not grading errors.
- **The signal is concentrated:** SAA-C03 sampled at 5.2% defective and
  AZ-104 at 2.5% — cloud-currency rot — while the four CompTIA banks sampled
  at ~1% (all minor) and aif-c01/clf-c02/az-900/sc-900/ccna at ~0-1%.

**Recommendation:** a full sweep of the two cloud-professional banks
(saa-c03 + az-104, ~450 unsampled questions, expect ~15-20 currency findings)
is worth it; a whole-corpus sweep of the other nine banks is optional — the
projected remaining defects there are low-severity at ~1% density. Decision
deferred to the owner.

## FINAL STATUS: the whole corpus is audited

As of 2026-08-03 every one of the 3,666 multiple-choice questions and all 138
PBQs across all 11 exams has been through the find → refute → blind-key
pipeline (sample 931 + cloud sweep 460 + circle-back 2,275). Totals:

| phase | audited | confirmed & fixed |
|---|---|---|
| Stratified sample | 931 MC | 12 |
| All PBQs | 138 | 8 |
| Cloud-bank sweep (saa-c03, az-104) | 460 | 7 |
| Circle-back sweep (nine banks) | 2,275 | 17 (1 refuted) |
| **Whole corpus** | **3,666 MC + 138 PBQs** | **44** |

Overall MC defect rate 36/3,666 = **0.98%**, of which only three findings
were in the answer-key class (az-104 q112's wrong key, saa-c03 q303's
impossible keyed configuration, 220-1202 q70's dual-correct distractor) —
**0.08% of the corpus could mis-grade a candidate; everything else was
explanation quality, currency, or distractor polish.** sy0-701, aif-c01, and
sc-900 swept completely clean outside the sample. Circle-back highlights:
an LC connector taught with SC's characteristics, GNU coreutils `dir` as a
second correct Linux answer, a corrupted "$200" free-tier figure, four
superseded product names (AWS Health Dashboard, DDoS Network Protection,
Snowball's 2025 closure, Azure Blueprints' retirement), and a VRRP distractor
made defensible by RFC 9568's master→active rename.

## Cloud-bank full sweep (2026-08-02, owner-approved)

The remaining 460 questions of saa-c03 (227) and az-104 (233) went through
the identical find → refute → blind-key pipeline. **7 found, 7 confirmed,
7 fixed** (1.5% — half the sample's cloud rate, consistent with the sample
having force-included the public questions): one more wrong key (saa-c03
q303 — Aurora Serverless v2 auto-pause requires a 0-ACU minimum, and v1 is
EOL since 2025-03), plus six currency defects (root-user tasks vs. 2022 IAM
support-plan controls, DynamoDB multi-Region strong consistency GA 2025-06,
user-delegation SAS signing, the App Service "Container" publish label, NSG
flow logs retiring in favor of VNet flow logs, and a Trusted Launch backup
policy stem). Batches: `saa-c03-sweep.json`, `az-104-sweep.json`. Both cloud
banks are now 100% audited; the other nine banks remain sampled-only (owner
plans a circle-back sweep).

## Side-finding (not part of this audit's scope)

Stored answer-key positions remain heavily index-0 biased in the pre-debias
banks (220-1201: 284 of 341 single-answer keys at index 0). No user-facing
surface leaks stored order except the daily social post (`worker/social.ts`
renders options as stored). Cheapest correct fix: shuffle options in
social.ts before rendering, rather than churning 341 stored questions.
