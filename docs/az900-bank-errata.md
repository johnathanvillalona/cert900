# AZ-900 bank review notes kept separate from the guide

Reviewed 2026-10-21 for the educational expansion. This is a targeted comparison,
not a complete bank audit. No bank, sample, answer key, explanation, video mapping,
scoring rule or session code was changed.

| Location | Evidence and concern | Proposed separate follow-up |
|---|---|---|
| `src/data/az-900.ts`, opening comment | The comment says 85 minutes, while the actual `examMinutes` is 45 and Microsoft's current certification page says 45 minutes. Runtime behavior is already consistent with the official page. | Correct the comment in a separately authorized bank-maintenance change. |
| Question 48, `regions` | The stem says “most” regions are paired. Current Microsoft guidance emphasizes that many regions are unpaired. The selected benefits of an existing region pair remain described by Microsoft; this review has not established a reversed answer key. | Avoid the unnecessary prevalence claim in a future wording review; retain service-specific recovery qualifications. |
| Question 49, `regions` | Selecting an appropriate region is the sensible answer among the options, but the explanation implies that this alone guarantees country-level data residency. Cross-region replication, service-specific data handling and nonregional services also need review. | Qualify the explanation without claiming that a region choice establishes legal compliance. No key change is proposed here. |
| Questions 241–242 and the `blueprints` video topic | They describe a historical feature. Question 241 already warns about phased retirement and recommends modern alternatives, which is useful context rather than a newly discovered incorrect key. Blueprints is not named in the current AZ-900 objective list. | Review continued relevance separately. Do not teach it as the normal new-deployment choice or silently remove these items. |

## Official evidence

- [Current AZ-900 skills and change log](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900).
- [Azure Fundamentals assessment information](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/): 45 minutes.
- [Paired and nonpaired regions](https://learn.microsoft.com/en-us/azure/reliability/regions-paired): pairing does not automatically provide application recovery.
- [Azure regions](https://learn.microsoft.com/en-us/azure/reliability/regions-overview): location, multiregion and data-residency considerations.
- [Azure Blueprints overview](https://learn.microsoft.com/en-us/azure/governance/blueprints/overview): the currently published notice says phased retirement began July 31, 2026, with final retirement January 31, 2027. This supersedes older dates found elsewhere; it does not mean the service is already fully retired on this review date.

These notes require separate approval before any bank edits. They do not prevent
reviewing the new guide, which explains the applicable qualifications directly.
