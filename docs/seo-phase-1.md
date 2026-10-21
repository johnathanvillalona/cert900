# SEO Phase 1: accuracy and PBQ discovery

## Isolation and scope

- Branch: `codex/seo-phase-1`.
- Worktree: `/home/sorannex/Claude Projects/cert900/seo-phase-1-worktree`.
- Freshly verified GitHub main and starting commit:
  `39b6f13480c957d4a2d2628df864d92ee810a2b5`.
- No push, merge, Cloudflare upload/deployment, Search Console submission, Google
  setting change or advertising activation is part of this change.

Question banks, generated bank/sample metadata, scoring, session state,
simulators, authentication, progress, analytics/consent, advertising policy,
Worker code/configuration and dependency manifests are unchanged.

## Changes

### Existing PBQ landing page

`/comptia-pbq-practice` now explains the existing Windows DHCP Command Prompt,
Network+ Edge ACL, Windows Defender Firewall and Sales Workstation exercises.
It retains the six interaction types and DHCP worked example. Links go to
supported exam menus and Study Hubs; the copy tells learners to choose PBQ Lab
from the menu rather than promising an unsupported question deep link.

Four native PNG screenshots show actual ungraded renderers. DHCP shows only
unscored `ipconfig /all`; the firewalls and workstation retain their initial
configurations. Images have intrinsic dimensions, lazy loading, descriptive alt
text, noninteractive-preview captions and full-size links. The workstation
preview links to the existing photo authors, sources and licenses.

See [capture provenance and reproduction](qa/seo-phase-1/README.md) and
`qa/seo-phase-1/preview-provenance.json`. Public images total about 705 KB; lazy
loading avoids requesting every image on initial entry. There are no embeds,
new runtime packages or external screenshot services.

### Accuracy

- Methodology body, metadata and FAQ describe documented internal review and
  corrections without promising complete/independent verification or an error
  rate. The report's multiple-choice answer-key statistic did not account for
  its separately listed PBQ corrections and is no longer generalized publicly.
- The FAQ no longer promises public history for private internal records.
- Published thresholds are distinguished from Cert900 practice scoring, including
  the explicitly nonofficial CCNA practice threshold. No scoring number changed.
- Guide tables and Study Hub percentages identify Cert900 practice allocations.
  Illustrative domain counts are not presented as measured bank inventory.

### Samples and sitemap

`selectGuideSamples` is a pure, shared round-robin selector over the existing
generated catalog. Visible examples and Quiz JSON-LD use the same ordered
questions, answers and distractors. Combined A+ still displays four examples
from each core; neither the sample catalog nor question banks changed.

The sitemap retains all 36 URLs, including all 11 Study Hubs. Homepage, guides
and hubs omit `lastmod` because no reliable per-page content-modification date
is tracked. The three legal routes retain their explicitly tracked effective
date. Canonicals and route definitions are unchanged. The previously identified
legal-page canonical issue is outside this bounded milestone.

## Validation

Baseline before edits: scripts-disabled locked installation; 582 unit tests;
production build; full and production-only audits with zero findings; dependency
tree and whitespace checks passed. The sandbox's local IPC restriction required
the standard local build permission; it was not an application build failure.

Final validation:

| Check | Result |
|---|---|
| Full unit suite | 594 tests passed in 37 files |
| Complete production-browser suite | 174 passed in 9.6 minutes, including all seven new SEO checks |
| Production build | Passed app/Worker typechecks, Vite and static prerendering |
| Simulator hook/performance browser suite | 7 passed |
| Isolated Worker suite | All 13 groups passed; zero outbound Worker requests |
| Full npm audit | Zero findings |
| Production-only npm audit | Zero findings |
| Dependency tree | `npm ls --all --json` exited 0; no conflicts |
| Public screenshot integrity | All four hashes and intrinsic dimensions match provenance |
| Protected code and manifests | No changes to banks, engines, sessions, Worker, consent or dependencies |

The complete run passed without updating any existing screenshot baseline.

The maintained browser suite uses installed Chrome, isolated synthetic local D1
and blocked external integrations. Advertising/CMP and GA4 regression tests use
stubs; they do not produce live impressions, clicks or analytics events.
Existing application screenshot baselines are not updated.

Reproduction commands after the production build:

```sh
npm test
CERT900_TEST_PORT=4198 npm run test:browser -- --output=/tmp/cert900-seo-phase1-browser
npm run test:simulations
npm run test:worker
npm audit
npm audit --omit=dev
npm ls --all
git diff --check
```

Run simulator performance checks serially with port 4175 free. Browser capture
and regression tests use fresh profiles and synthetic data, not the owner's
authenticated Chrome session. All five required widths and both themes are
covered; new SEO checks verify actual HTML/schema parity, 36 sitemap entries,
32 educational self-canonicals, internal links, image dimensions and consent.

## Changed files

Implementation:

```text
src/data/guide-meta.ts
src/screens/Guides.tsx
src/screens/InfoPages.tsx
src/screens/StudyHub.tsx
src/lib/guide-sample-selection.ts
tools/prerender.tsx
```

Regression and capture tooling:

```text
src/data/guides.test.ts
src/screens/Guides.test.tsx
src/screens/InfoPages.test.tsx
src/screens/StudyHub.test.tsx
tests/pbq/seo-phase-1.spec.ts
tools/qa/capture-pbq-previews.mts
```

Public screenshot assets:

```text
public/pbq-previews/dhcp.png
public/pbq-previews/network-acl.png
public/pbq-previews/windows-firewall.png
public/pbq-previews/workstation.png
```

Documentation and QA evidence:

```text
docs/seo-phase-1.md
docs/qa/seo-phase-1/README.md
docs/qa/seo-phase-1/preview-provenance.json
docs/qa/seo-phase-1/dhcp-390.png
docs/qa/seo-phase-1/network-acl-390.png
docs/qa/seo-phase-1/windows-firewall-390.png
docs/qa/seo-phase-1/workstation-390.png
docs/qa/seo-phase-1/pbq-guide-before-320.png
docs/qa/seo-phase-1/pbq-guide-before-1440.png
docs/qa/seo-phase-1/visual-320-light.png
docs/qa/seo-phase-1/visual-320-dark.png
docs/qa/seo-phase-1/visual-1440-light.png
docs/qa/seo-phase-1/visual-1440-dark.png
docs/qa/seo-phase-1/pbq-guide-after-320-light.png
docs/qa/seo-phase-1/pbq-guide-after-320-dark.png
docs/qa/seo-phase-1/pbq-guide-after-390-light.png
docs/qa/seo-phase-1/pbq-guide-after-390-dark.png
docs/qa/seo-phase-1/pbq-guide-after-1440-light.png
docs/qa/seo-phase-1/pbq-guide-after-1440-dark.png
```

## Local review

The completed build can be reviewed at:

`http://127.0.0.1:4199/comptia-pbq-practice`

To restart the isolated preview from this worktree:

```sh
node tools/qa/isolated-worker.mjs --serve --port=4199
```

Stop that preview before rebuilding. If a fresh dependency installation is
needed, use the existing lockfile and disabled lifecycle scripts:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run build
```

Review the PBQ page, `/how-our-questions-are-made`,
`/it-certification-passing-scores`, `/comptia-a-plus-practice-test` and
`/study/az-900`. Screenshots are review evidence, not automated proof of
screen-reader or physical-device keyboard behavior. These remain manual checks.

## Search Console discovery: prepared, not submitted

Canonical sitemap: **https://cert900.com/sitemap.xml**.

The live sitemap was read-only checked and lists 36 canonical entries, including:

```text
/study/220-1201
/study/220-1202
/study/n10-009
/study/sy0-701
/study/ccna-200-301
/study/aif-c01
/study/clf-c02
/study/saa-c03
/study/az-900
/study/sc-900
/study/az-104
```

After separate owner authorization:

1. Open Google Search Console and select the `cert900.com` domain property.
2. Open **Indexing → Sitemaps**.
3. Enter `https://cert900.com/sitemap.xml` and choose **Submit**.
4. Confirm processing status and subsequently inspect discovery/indexing for
   the educational URLs. Successful submission does not guarantee indexing.

No submission, indexing request or Google settings change was made here. A
default Python HTTP client received 403 during inspection; a standard browser
user agent received the sitemap with HTTP 200. This is not evidence of a general
site outage or proof that Googlebot is blocked.

## Review boundary

Known review limitations: the page is long because it includes four complete
workspace previews. Screenshot-internal text is small inline on phones; readable
HTML descriptions and full-size image links accompany every preview. Physical
device and screen-reader checks remain manual. Existing third-party training
video destinations were not recrawled; internal educational destinations are
covered by the local browser checks. Search visibility and indexing improvements
cannot be established until a separately approved release is recrawled.

Commit the scoped change locally after validation and stop for manual review.
Any production release uses the separately approved inactive-version staging
process. Preserve current production and rollback checkpoints. No recurring cost
or advertising activation is introduced.
