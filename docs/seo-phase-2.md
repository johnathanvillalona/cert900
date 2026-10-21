# SEO Phase 2 — technical metadata repair

## Isolation and scope

- Branch: `codex/seo-phase-2`.
- Worktree: `/home/sorannex/Claude Projects/cert900/seo-phase-2-worktree`.
- Freshly verified main/baseline: `ed4266879574ba9ccfe5b4cc9425be54fc5e2fcd`.
- Read-only production checkpoint: Worker `comptia-practice-trainer`, version
  `318a5dae-3110-4d0e-a6f2-ed7a0346f213`, 100% traffic, deployment
  `7386d283-8ce3-4d60-bbc9-2e0413648596`.
- No push, merge, upload, staging, deployment, Google setting change, indexing
  request or sitemap resubmission was performed for this work.
- No dependencies, legal text/effective dates, question banks, scoring, simulator
  state, authentication, progress, analytics/consent, advertising policy, Worker
  configuration, bindings, database schema or scheduled tasks changed.

## Confirmed defects and correction

The production audit inspected the initial HTTP response and rendered Chrome DOM
on 47 routes: the 36 sitemap entries plus representative application and unknown
paths. Evidence: [production-before.json](qa/seo-phase-2/production-before.json).

1. Legal URLs fell back to the homepage shell. React changed only `document.title`.
   Their raw title was wrong, and both raw and rendered canonical, description,
   Open Graph and Twitter metadata described the homepage.
2. Application routes inherited indexable homepage metadata, including progress,
   plans, admin and exam routes. Existing unknown routes correctly returned 404
   and a `noindex` header but still advertised the homepage canonical/description.
3. The homepage FAQ/ItemList JSON-LD also appeared on legal and application pages.
4. `/privacy/` returned a shell instead of redirecting to the extensionless legal
   URL. Existing www/HTTP redirects already preserved paths correctly.

### Implementation

One small metadata policy supplies legal and application head tags to both the
Worker and SPA. The Worker replaces only its owned metadata on non-API HTML
responses. It strips unrelated homepage FAQ/list markup and sends `X-Robots-Tag:
noindex` on application/unknown pages. API/authentication handlers are unchanged.
The DOM adapter replaces tags on existing SPA navigation without adding history,
scroll/focus, session or analytics behavior.

The build now prerenders the **existing** three legal components, including their
unchanged content. They are readable without JavaScript. They retain the existing
SPA entry for normal internal navigation and consent controls, without adding the
separate static-content bootstrap. Cloudflare Assets supplies the same canonical
trailing-slash redirects used by other prerendered pages. No route refactor or
production configuration change is required.

### Indexing policy

| Page type | Policy |
| --- | --- |
| Homepage, guides/references, directory, all 11 hubs | Indexable; existing self-canonical educational URLs preserved |
| `/privacy`, `/terms` | Indexable public policies; self-canonical |
| `/delete-account` | Indexable public help instructions; self-canonical |
| Exam menus/attempts/results/stats/plans, `/exams`, `/plan`, `/progress`, `/admin` | `noindex, follow`; no canonical or `og:url` advertising private/application URLs |
| Unknown/auth-looking paths | Existing 404 retained; safe 404 metadata and `noindex`; no homepage canonical |
| `/api/` | Existing robots.txt restriction and authentication behavior unchanged |

Account deletion was reviewed explicitly. `/delete-account` contains public
instructions, not an authenticated deletion operation or private account data.
Keeping this help discoverable helps users find data-removal instructions and
preserves its existing sitemap entry. This is an editorial choice, not a claim
that a public help URL must be indexed. Actual account operations remain protected
by existing authentication. `noindex` itself is **not** access control.

### Before/after examples

For all three legal pages, production raw HTML previously contained:

```html
<title>Cert900 — Free CompTIA, Cisco, AWS &amp; Azure Practice Exams</title>
<link rel="canonical" href="https://cert900.com/">
<meta property="og:url" content="https://cert900.com/">
```

The privacy page now delivers this in initial HTML, with the same values in the DOM:

```html
<title>Privacy policy | Cert900</title>
<meta name="description" content="How Cert900 handles local study progress, optional accounts, analytics consent, cookies and data deletion. Read our privacy policy and contact information.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://cert900.com/privacy">
<meta property="og:url" content="https://cert900.com/privacy">
```

Terms now uses `Terms of use | Cert900` and `/terms`; deletion instructions use
`Delete your account | Cert900` and `/delete-account`. Their own descriptions also
match Open Graph and Twitter descriptions. All 36 indexable titles are unique.
Application routes have coherent public descriptions with no query-string,
account or attempt data. The deliberately generic admin title remains `Cert900`.

## Sitemap, schema and links

- `https://cert900.com/sitemap.xml`: unchanged, **36** canonical URLs including
  **11** Study Hubs and the three public legal pages. Byte-for-byte identical to
  the prior release's generated sitemap.
- No artificial modification dates: only the unchanged, tracked legal effective
  date is emitted. Educational entries continue to omit `lastmod`.
- robots.txt remains unchanged: `Allow: /`, `Disallow: /api/`, canonical sitemap.
- All 36 pages parse as JSON-LD. Hub CollectionPage names match visible headings;
  breadcrumb destinations match each page's canonical URL. Legal pages no longer
  claim the homepage FAQ/ItemList. Site-wide Organization/WebSite identity stays.
- Existing browser checks verify every guide's Quiz samples against visible
  questions/options/answers, and resolve educational/internal resource links.
- Optional practice-problem rich-result fields were not added. Search Console
  reports zero invalid items, five valid items and 12 optional-field warning
  categories. These are not confirmed technical indexing blockers.

Evidence: [structured-data.json](qa/seo-phase-2/structured-data.json) and
[local-after.json](qa/seo-phase-2/local-after.json).

## Search Console findings — 2026-10-21

Authorized cached reports only; no settings, sitemap submission or individual
indexing requests were changed. Full URL-specific observations are in
[search-console.json](qa/seo-phase-2/search-console.json).

| URLs | Observed status |
| --- | --- |
| Nine hubs: 220-1201, 220-1202, n10-009, sy0-701, ccna-200-301, aif-c01, clf-c02, az-900, az-104 | Discovered — currently not indexed; no recorded crawl |
| Two hubs: saa-c03, sc-900 | URL is unknown to Google |
| `/network-plus-practice-test` | Discovered — currently not indexed; no recorded crawl |
| `/cisco-ccna-practice-test` | Crawled — currently not indexed |

CCNA's recorded crawl was September 18, 2026 at 9:46:01 PM (as displayed by Google),
using Googlebot smartphone. Crawl allowed: Yes; fetch: Successful; indexing
allowed: Yes; declared canonical: the CCNA guide; Google-selected canonical:
Inspected URL. The current public guide and hubs return HTTP 200 with correct
self-canonicals and no blocking robots directive.

The sitemap report still shows **Success**, submitted/read October 21, 2026,
**36 discovered pages**, zero videos. The aggregate Pages report lists nine
indexed and five excluded pages: four redirects and one crawled/not indexed.
Aggregate reports lag URL inspections and do not represent every new hub yet.

No verified technical blocker for the hubs or Network+/CCNA guide was identified.
Discovery delays are consistent with newly submitted pages; Google's decision to
exclude crawled CCNA content does not establish a fetch/canonical failure. This
repair does not guarantee indexing or explain that editorial indexing decision.
Review cached reports after 7–14 days and again after 30 days; do not repeatedly
submit the sitemap or bulk-request indexing. Content improvements, if needed,
belong in a separately approved phase.

## Changed files

| File | Purpose |
| --- | --- |
| `src/lib/page-metadata.ts` | Shared legal/application metadata and indexing policy, escaped markup |
| `src/lib/document-head.ts` | Replace SPA metadata; remove unrelated homepage schema |
| `src/App.tsx` | Use shared metadata during existing navigation |
| `tools/prerender.tsx` | Prerender legal content and matching metadata; identify homepage-only schema |
| `worker/index.ts` | Apply safe metadata/noindex to initial non-API HTML |
| `src/lib/page-metadata.test.ts` | Policy, isolation, escaping and route coverage |
| `worker/assets.test.ts` | Canonical-host redirects preserve legal paths |
| `tests/pbq/technical-seo.spec.ts` | HTTP/DOM parity, no-JS legal content, history/consent, responsive regressions |
| `docs/seo-phase-2.md`, `docs/qa/seo-phase-2/*` | Audit, screenshots, validation and review evidence |

## Validation

Scripts-disabled `npm ci --ignore-scripts --no-audit --no-fund` reproduced the locked
dependencies without changing the manifest/lockfile or approving lifecycle scripts.
Baseline: 594 unit tests passed, production build passed, both audits zero.

| Check | Result |
| --- | --- |
| Full unit tests | 611 passed, 38 files |
| Production build | Passed, including legal/static prerendering and CSS |
| Focused technical SEO browser checks | 10 passed |
| Complete production-browser regressions | All 185 passed (10.4 minutes); no baseline updates |
| Simulator hook/performance checks | All 7 passed |
| Isolated Worker smoke checks | All 13 groups passed; zero outbound Worker attempts |
| Full / production-only npm audits | 0 / 0 findings |
| `npm ls --all` | Passed; no conflicts |
| Raw HTTP versus DOM | All 47 routes match; zero browser errors or advertising requests |
| Mobile/tablet/desktop | New legal checks at 320, 375, 390, 768, 1440px, both themes |
| `git diff --check` | Passed |

Browser environment: installed Chrome 155.0.8059.39 on Ubuntu/Linux; Node 24.21.0.
Serial Chrome 4× CPU checks measured ACL worst-case p95 **40.9ms** (43,740 cells,
524,814 rule visits) and Windows policy p95 **20ms**, below existing 750ms targets.
Tests use synthetic local configuration, fresh isolated D1 databases, disabled
OAuth/email/external integrations and stubbed optional analytics. No production
account, progress or database records were written. Existing screenshot baselines
were not updated. Physical-device keyboards and assistive-technology behavior
remain manual checks; browser emulation does not establish those results.

Reproduction commands (browser tests use a separate port from the review preview):

```sh
npm test
npm run build
CERT900_TEST_PORT=4202 npm run test:browser
npm run test:simulations
npm run test:worker
npm audit
npm audit --omit=dev
npm ls --all
git diff --check
```

## Screenshots and local review

- [Before privacy, mobile](qa/seo-phase-2/before-privacy-390.png)
- [After privacy, mobile](qa/seo-phase-2/after-privacy-390.png)
- [After privacy, desktop](qa/seo-phase-2/after-privacy-1440.png)
- [After privacy, 320px](qa/seo-phase-2/after-privacy-320.png)
- Before/after Terms and deletion instructions are in the same evidence directory.

Preview: `http://127.0.0.1:4203/privacy`, `/terms`, `/delete-account`, `/progress`
and any existing guide or Study Hub. Inspect View Source as well as DevTools.

To restart the isolated preview:

```sh
cd '/home/sorannex/Claude Projects/cert900/seo-phase-2-worktree'
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4203
```

Stop that preview before rebuilding its `dist` files. Keep ordinary development
credentials/configuration out of the isolated harness. The harness uses only local
synthetic settings and blocks external Worker integrations.

## Proposed release procedure — not executed

After manual review and separate staging approval:

1. Reverify GitHub main and active Cloudflare deployment; preserve the current
   production UUID. Stop on unexpected source/configuration/traffic differences.
2. Build the exact reviewed commit from a clean worktree, rerun required checks,
   and use the established `wrangler versions upload` workflow. Never use ordinary
   `wrangler deploy` for this staging step.
3. Stage the verified previous UUID at 100% and the uploaded candidate at 0% with
   `wrangler versions deploy PREVIOUS_UUID@100 CANDIDATE_UUID@0 --yes` for
   `comptia-practice-trainer`. Check metadata through supported version overrides
   on both HTML and assets. Verify the runtime `HTMLRewriter`, all canonicals,
   legal no-JS content, private noindex, schema, sitemap, exams and consent.
4. Stop for explicit production promotion approval. Then deploy only the tested
   candidate UUID at 100%; do not rebuild or replace it. Repeat live smoke checks.
5. If a release-critical regression is verified, restore
   `318a5dae-3110-4d0e-a6f2-ed7a0346f213@100` using `wrangler versions deploy`,
   provided it is still the freshly verified previous production checkpoint.
   Confirm recovery and traffic allocation immediately.
6. Synchronize GitHub only after separate authorization, a clean fast-forward and
   verified upload-only Cloudflare Builds configuration. Preserve all branches.

No migration, new secret, binding, subscription, analytics change, consent change
or advertising activation is needed. The new Cloudflare HTML transformation is
validated locally in Workerd; deployed version-override validation remains a
separate approval gate. Production still has the original metadata defects until
this reviewed repair is separately released.
