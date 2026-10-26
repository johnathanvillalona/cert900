# Monetization sprint QA evidence

Regression run October 24, 2026; unchanged final application units, build, audits and production baseline rechecked October 26, with a focused browser recheck that day (America/New_York). This folder contains public-site/local-test evidence only. Private publisher screens, contact records and analytics exports remain in ignored `.publisher-private/`.

## Results

| Check | Result | Evidence |
|---|---|---|
| Full units | 670 passing, 44 files | `unit.log`; fresh October 26 run |
| Production build / app + Worker TypeScript | Pass | `build.log`; fresh October 26 run |
| Full browser regression | 216 passing, 14.3 minutes | `browser.log`; October 24 |
| Focused browser recheck | 40 passing, 1.1 minutes | `focused-recheck.log`; October 26 |
| Simulator hooks/scoring/isolation/performance | Seven passing | `simulations.log` |
| Isolated Worker/auth/session/local progress/D1 | 13 passing groups; zero outbound Worker attempts | `worker.log` |
| Sitemap/metadata | 36 URLs, 11 hubs, initial/DOM canonicals and visible JSON-LD parity | Existing full browser specs and `public-seo.json` |
| Production dependency audit | Zero findings | `security.json` |
| Full root audit | Three unchanged dev findings: Undici high, Miniflare/Wrangler moderate | `security.json` |
| Resolved Zod | 4.6.6 | `security.json` |
| Dependency tree | Zero problems in dependency-owning checkout | `security.json`; see caveat below |
| Protected functionality/dependencies | Unchanged relative to production parent | `validation.json` |

The new full build emitted the same **45 content-addressed code asset names** as the October 24 browser-tested build. There were no subsequent application-source changes. The build's daily question/feed can reflect the build date; no bank/scoring data was edited. Existing historical screenshot baselines/evidence were restored exactly after tests; nothing was approved by updating a screenshot baseline.

The **October 26 focused recheck passed all 40 cases in 1.1 minutes**, covering learning destinations, technical SEO, analytics consent, disabled/mocked advertising and ads.txt. It ran in an isolated Chrome test profile with synthetic local Worker resources. It did not reconnect the owner's persistent browser, inspect fresh publisher dashboards or complete the interrupted temporary-tab cleanup.

The first sandbox build attempt could not create a local tsx IPC socket. The identical build succeeded with local socket permission. This was not an application failure or source correction.

## Responsive and visual review

`home-{320,375,390,768,1440}-{light,dark}.png` records the new homepage at asserted **actual CSS viewport widths**, 1000 CSS pixels high. Both themes showed no horizontal page overflow, clipped new controls or advertising resources in the reviewed page. Native navigation checks cover all 11 guides, practice destinations, PBQ discovery, touch targets, keyboard focus and static links with JavaScript disabled.

Chrome's existing localhost zoom was 80%, and was preserved. Requests of 256/300/312/615/1152 pixels produced CSS widths 320/375/390/768/1440. Initial uncalibrated images were replaced; a request of 614 produced 767 and was not accepted as 768. PNG pixel dimensions are not the viewport assertion. Native browser regression tests separately use exact viewport dimensions in an isolated profile. The live baseline screenshots were captured on the production host at its existing 100% zoom, so their pixel scale differs from the localhost screenshots; they are labeled by measured CSS width, not presented as pixel-identical comparisons.

Before/after links:

- [Desktop before](home-before-1440-light.png) / [desktop after](home-1440-light.png)
- [Mobile before](home-before-320-light.png) / [mobile after](home-320-light.png)
- [Dark desktop](home-1440-dark.png) / [dark mobile](home-320-dark.png)

No screenshot was altered to conceal an error. The localhost preview is **http://127.0.0.1:4298/** using `tools/qa/isolated-worker.mjs --serve --port=4298`, synthetic credentials, fresh local databases, blocked external integrations and no production configuration.

## Consent, advertising and data safety

The full suite includes analytics rejection/allow/withdrawal, exactly-once sanitized events, no advertising scripts/requests in all public/static and learning routes, mock advertising consent/withdrawal/races/blockers, auth/progress protections, exam grading/Results scroll and all featured simulations. No real advertisement impressions or clicks were generated. Connected Chrome's production homepage consent was already Decline; the sprint did not grant it or produce a new consented debug session.

No provider runtime adapter is registered in the new neutral contract. Mock-readiness tests cannot establish a real provider's CMP compliance, SDK behavior, approval or signed terms. Those remain future gates. No private evidence or LMS page is included in `dist/`.

## Dependency inspection caveat

The worktree reuses `node_modules` from `/home/sorannex/Claude Projects/cert900/hotfix-zod-production-worktree` without installing anything. `npm ls --all` through that symlink produced thousands of false extraneous/missing associations. The dependency-owning checkout reports zero problems, with byte-identical package.json and package-lock.json. Tests/build use the same actual package files. No upgrade or lockfile edit was made to address this inspection artifact. Native-mobile remains untouched and not re-audited; prior findings, including its reported critical finding, remain separate.

## Manual checks and external limits

Owner visual review, physical mobile browsers, screen readers and device-specific virtual keyboards cannot be established by emulation alone. Automated checks verify measurable structure, focus and layout behavior. Publisher approval, contract/format/consent compatibility and replies received after the dated account inspection need authorized follow-up. No revenue or approval timing is guaranteed.

Later October 26: a fresh instance of the installed official MCP server authenticated automatically using the owner-authorized private extension configuration. Local navigation, DOM inspection, scrolling and screenshot capture passed. Its one newly created QA tab was reused for an authenticated AdSense read-only check and closed afterward. The earlier client's tab group is not visible, so its interrupted cleanup remains unverified. AdSense now says “Your account wasn't approved”; the focused regression run itself did not establish that account status. No resubmission, checkbox or settings change was made. No credentials are in this repository.

[Validation summary](validation.json) · [Security summary](security.json) · [Exact changed files](CHANGED-FILES.txt) · [Sprint report](../../monetization-sprint.md)
