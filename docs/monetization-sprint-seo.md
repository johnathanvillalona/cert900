# Monetization sprint: focused SEO preservation review

Reviewed October 24, 2026 (America/New_York). Production source baseline: `8f64becefa1575a97a69e2bb959306bf3ac9f73a`. This review changes no application content, routes, metadata, Google configuration, sitemap or production settings.

## Confirmed public baseline

Sequential read-only HTTP GETs inspected the sitemap, its 36 pages and robots.txt. No browser, JavaScript, analytics collection, ads, authentication or database writes were used. The final source-only result is `/tmp/cert900-sprint-seo-live.json`; it contains public metadata only. Initial naive quoted-attribute extraction was corrected for embedded apostrophes and HTML entities before the final comparison; those parser mismatches were not application defects.

| Check | Verified result |
|---|---|
| Canonical sitemap | `https://cert900.com/sitemap.xml`, HTTP 200 |
| URL count | 36, unique, exact same ordered URL list as current built sitemap |
| Study Hubs | All 11 supported exams present |
| Public routes | All 36 HTTP 200, `text/html` |
| Titles | One unique title per page |
| Descriptions | One description per page |
| Canonical links | Exactly one self-canonical `https://cert900.com` URL per page |
| Open Graph | Title and description agree with document metadata; URL agrees with canonical |
| Indexability | Every sitemap page has `index, follow`; no conflicting response `X-Robots-Tag: noindex` |
| Primary heading | Exactly one H1 per initial HTML document |
| Built/live metadata comparison | All 36 matched after entity normalization |
| Dates | Only Privacy, Terms and Delete-account contain tracked `2026-10-21` lastmod; no synthetic educational-page dates |
| robots.txt | HTTP 200; canonical sitemap declaration and `/api/` disallow retained |

This proves publicly delivered initial HTML consistency at the observation time. It does not prove Google index inclusion, ranking, a rendered interactive experience, or continuous uptime. Search Console and GA4 account findings must come from the separate authenticated inspection; no clicks, sessions, pageviews, CTR or query metrics are invented here.

### Existing 36-page inventory

- Homepage: `/`.
- Certification guides: `/comptia-a-plus-practice-test`, `/comptia-a-plus-core-1-practice-test`, `/comptia-a-plus-core-2-practice-test`, `/network-plus-practice-test`, `/comptia-security-plus-practice-test`, `/cisco-ccna-practice-test`, `/aws-ai-practitioner-practice-test`, `/aws-cloud-practitioner-practice-test`, `/aws-solutions-architect-associate-practice-test`, `/azure-fundamentals-practice-test`, `/azure-administrator-az-104-practice-test`, `/microsoft-sc-900-practice-test`.
- PBQ overview: `/comptia-pbq-practice`.
- Informational resources: `/it-certification-practice-tests`, `/it-certification-passing-scores`, `/which-it-certification-first`, `/how-our-questions-are-made`.
- References: `/common-network-ports`, `/ccna-cli-commands`, `/a-plus-cables-and-connectors`, `/aws-azure-service-comparison`.
- Study Hubs: `/study/220-1201`, `/study/220-1202`, `/study/n10-009`, `/study/sy0-701`, `/study/ccna-200-301`, `/study/aif-c01`, `/study/clf-c02`, `/study/saa-c03`, `/study/az-900`, `/study/sc-900`, `/study/az-104`.
- Public legal/support: `/privacy`, `/terms`, `/delete-account`.

## Reuse existing regression coverage

No new permanent SEO validator was added. The existing specs already test the requested conditions more thoroughly than a new regex-only utility, and duplicating route lists or HTML parsers would add maintenance risk.

| Existing file | Actual assertions to preserve and rerun |
|---|---|
| `src/data/routes.test.ts` | Route registry equals guide metadata, no duplicate paths, all 11 hubs, known/unknown-route distinctions, exam route validation, app/guide CSP boundaries. |
| `src/data/study-resources.test.ts` | All 11 exams resolve canonical primary guides and verified references. |
| `src/data/guides.test.ts` | Valid sample keys/options/explanations, domain coverage, single shared round-robin A+ selection, no mutation, complete metadata and bank-derived count claims. |
| `src/lib/page-metadata.test.ts` | Public legal metadata and private-route noindex without public canonicals; escaping and unique markup. |
| `tests/pbq/technical-seo.spec.ts` | All 36 sitemap URLs, one unique title/description/canonical, coherent robots/OG/Twitter, initial HTML versus rendered DOM, truthful lastmod, legal no-JavaScript rendering, private and unknown noindex routes, metadata during Back/Forward, canonical redirects, robots and internal links. Five widths in both themes. |
| `tests/pbq/seo-phase-1.spec.ts` | All guides' Quiz JSON-LD matches actual visible questions, answers and options, including alternating A+ samples; exact 36 URLs/11 hubs and legal-only lastmod; educational links resolve. PBQ screenshot enlargement, touch/keyboard and history tests, consent/no-ad requests. |
| `tests/pbq/study-hubs.spec.ts` | All 11 cold loads/refresh/history, native guide/reference links, relevant available resources, canonical/sitemap/internal destinations. |
| `tests/pbq/study-discovery.spec.ts` | Canonical guide/reference destinations and entry-point navigation. |
| `tests/pbq/guide-learning.spec.ts` | AWS initial HTML lessons, learning-resource/Quiz/FAQ schema parity, unique anchors, contents links, keyboard disclosures, hub navigation, responsive typography and consent boundaries. |
| `tests/pbq/azure-learning.spec.ts` | Azure ten lessons/four visuals/eight samples without JavaScript, schema and FAQ parity, unique headings/IDs, destination anchors, touch, both themes and five widths. |
| `tests/pbq/site-readiness.spec.ts` | Public About/Contact access without JavaScript and legal/sitemap effective-date consistency. |
| `worker/assets.test.ts` | Canonical host redirects, actual 404 handling and route asset/metadata behavior without production traffic. |

The sprint's full browser/Worker/unit execution results are recorded in its final validation report. Listing a test here means its assertions were inspected, not that this document alone certifies a fresh pass.

## Focused improvements suitable for this sprint

1. **Clarify the existing two destinations.** Prominent Practice Exams and Study Guides can reduce competing calls to action. Preserve native canonical links to each exam's hub/guide and keep PBQ Labs as an accessible secondary destination. This is a user-discovery improvement; search uplift is unproven until measured.
2. **Keep valuable resources discoverable.** Preserve homepage/hub links to the substantive guides and references. Do not hide the 11 study resources solely behind JavaScript or replace existing native links with action-only controls.
3. **Keep ad readiness separate from SEO content.** New route policy must default off and cannot alter learner pages' crawlable text or insert empty inventory pages. Do not add provider scripts, ads.txt sellers or permissive CSP hosts merely to solicit an application.
4. **Use verified search measurements before changing snippets.** Current source checks found no canonical/title/indexing defect that calls for a metadata rewrite. Only edit a landing-page title/description for a specific measured query/page opportunity and accurate visible promise, not speculative keyword density.
5. **Preserve the current 36 URLs.** No new thin pages, artificial lastmod dates, new canonical structure, sitemap submission or indexing requests are warranted by this source audit.

## Exact remaining coverage limits

- Existing local tests cannot determine Google's current indexing decisions, private query metrics, sitemap-processing status or live Core Web Vitals. They require authorized read-only service inspection and sufficient reporting data.
- DOM link tests establish HTTP 200 and many supported fragments, not every third-party video's availability or every external learning resource's current editorial quality. Do not promise all external content is current from these tests.
- Passing JSON-LD parity establishes consistency with visible samples/FAQ/lesson names, not eligibility for every Google rich result. Do not add deprecated fields merely to remove optional warnings.
- Automated width/keyboard/overflow assertions do not replace a physical-device and screen-reader review. Root's Playwright MCP visual comparison should cover the actual simplified navigation.
- The source-only sweep did not recheck private account behavior, HTTP redirects on all hosts, active exam grading, consent network transport or ad blocking. Existing dedicated regression suites cover these and must pass separately before release preparation.
- Third-party provider approval, consent requirements and inventory restrictions remain independent monetization gates. A provider's application acceptance is not an SEO or production-release approval.

## Release boundary

Preserve canonical URLs, public legal effective dates, the single typed resource registry, shared sample selection, original educational lessons, question banks and disabled advertising. No confirmed new technical SEO defect emerged from the 36-page initial-HTML sweep. Keep this sprint focused on discoverability and safe disabled infrastructure, then review a local candidate before any separately approved release.
