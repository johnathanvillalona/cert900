# AdSense ownership readiness

## Scope and source

Isolated branch `codex/adsense-readiness`, based on production source
`308d960fdd9def82998e51eb83c9357c1c20031b`.

The official Microsoft Playwright MCP extension connection was verified after
the VS Code restart. Only Cert900's AdSense site details were inspected. The
site is **Requires review**. Its live account interface offers the AdSense code
snippet, ads.txt snippet, and Meta tag methods. The selected Meta tag method
supplies this public ownership identifier:

```html
<meta name="google-adsense-account" content="ca-pub-7887703829224685">
```

The account identifier is intended for public HTML, not an authentication
credential. No cookies, tokens, payment information, or identity details were
exported or inspected. Neither **Verify** nor **Request review** was submitted.

## What changes

- The exact account-supplied meta tag is in the HTML head. The existing build
  propagates it into all prerendered pages and the app shell. It does not load
  Google's ad client, request an advertisement, or enable Auto ads.
- Grow is paused by setting its existing public site ID configuration to an
  empty string, explicitly approved by the owner on October 21, 2026. Its
  previous ID is preserved in Git history. This supersedes the old Journey
  continuity instruction; no third-party account is deleted.
- Privacy disclosures describe actual authentication/local storage, optional
  newsletter/email processing, hosting, and the inactive advertising state.
  Unsupported cookie-count, hosting-region, and backup guarantees are removed.
  These are source-grounded disclosures, not a blanket legal-compliance claim.
- About and Contact sections use the existing public methodology page. Contact
  remains the configured public email; there is no new form, endpoint, or
  invented operator identity. The unsupported public-audit-report claim is
  corrected. A footer link makes the About section easy to find.
- The results support message preserves free access without promising that ads
  can never be introduced. No learning interaction or scoring changes.
- Legal effective dates and generated sitemap entries agree.

No new packages, advertising scripts, CMP, placements, authentication changes,
D1 migrations, Worker settings, or secrets are introduced. The existing ad
component remains disabled.

## Google requirements and decisions

Google permits ownership verification by a meta tag independently of its ad
loader. Ownership verification and requesting review are separate actions.
Ads may serve only after the site reaches Ready status. Google reviews the
whole site; neither this patch nor a successful ownership check guarantees
approval or a particular review time.

- [Connect a site](https://support.google.com/adsense/answer/7584263?hl=en)
- [Site management and review](https://support.google.com/adsense/answer/12131223?hl=en)
- [Ads.txt guide](https://support.google.com/adsense/answer/12171612?hl=en-EN)

Ads.txt is recommended but not mandatory and is not needed for the selected
meta-tag method. No placeholder or unverified seller records are added. Before
ads are enabled, obtain the account's actual current ads.txt record and publish
only approved records at the root with the correct plain-text response.

The inert ownership tag does not require an advertising-consent implementation
to function. Pausing Grow avoids adding its optional SDK while consent is
unresolved. Before any live advertising, separately review regional privacy
obligations, audience/minor handling, disclosures, opt-outs, and consent. For
personalized ads in the EEA, UK, and Switzerland, Google requires a certified
CMP integrated with IAB TCF. A custom cookie banner is not a substitute.
Non-personalized advertising must not be assumed to eliminate consent duties.

- [Google publisher privacy disclosures](https://support.google.com/publisherpolicies/answer/10437794?hl=en)
- [Certified CMP requirements](https://support.google.com/adsense/answer/13554116?hl=en)
- [EU user consent policy](https://www.google.com/about/company/user-consent-policy/)

Recommended first live placement, after approval and consent review: a single
manually controlled unit within substantive static study guides, away from
answer controls and navigation. Keep exams, practice questions, PBQ Lab,
simulators, and configuration dialogs free of advertising. Do not enable broad
Auto ads, anchors, or interstitials as part of readiness.

## Validation and local preview

Baseline: clean source at `308d960`, scripts-disabled reproducible installation,
445 unit tests passing, production build passing, both audits zero, dependency
tree valid. No lifecycle scripts were approved.

From this worktree:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm test
npm run build
CERT900_TEST_PORT=4187 npm run test:browser
npm run test:simulations
npm run test:worker
npm audit
npm audit --omit=dev
npm ls --all
git diff --check

# Start only after building; uses a fresh local database and synthetic auth.
node tools/qa/isolated-worker.mjs --serve --port=4188
```

Preview `http://127.0.0.1:4188/privacy` and
`http://127.0.0.1:4188/how-our-questions-are-made#about`.
The isolated harness blocks outbound Worker integrations and does not read
production secret files or connect to production D1. Browser regressions block
external requests and use installed Chrome without downloading browsers.

New checks cover delivered ownership metadata on every guide/legal/exam-menu
route, absent ad/Grow loaders, no-JavaScript About/Contact content, legal/footer
navigation and refresh, and 320/375/390/768/1440px layouts in both themes.
Existing simulator screenshots are compared without updating baselines.
Physical devices, screen readers, and Google's crawler/review remain separate
checks; browser emulation does not establish those outcomes.

### Completed validation, October 21, 2026

- Node 24.21.0, npm 11.19.0, installed Chrome 155.0.8059.39 on Ubuntu.
- Reproducible `npm ci --ignore-scripts --no-audit --no-fund` passed.
- **462 unit tests passed**: the existing 445 plus 17 readiness cases.
- **93 production-Worker browser tests passed**: the existing 84 plus nine
  readiness cases. All existing screenshot baselines were preserved.
- All seven simulator hook/performance browser tests passed.
- All 13 isolated Worker check groups passed, including local authentication,
  progress, D1 persistence, API restrictions and static assets. No outbound
  integration attempts occurred.
- Production type checks/build/prerender, both audits (zero findings), complete
  dependency tree, and `git diff --check` passed.
- Wrangler `versions upload --dry-run` compiled successfully without upload.
- Native Playwright MCP inspected local 320px privacy and desktop About pages;
  ownership metadata was present, advertising/Grow loaders absent, and there
  was no horizontal page overflow. The nine automated readiness cases cover
  every requested width in light and dark themes.
- No changes to dependencies, question banks, simulation/session/scoring
  modules, authentication, Worker code, schema, or `wrangler.jsonc`.

Review screenshots:
`/tmp/codex-playwright-mcp/cert900-adsense-privacy-320.png` and
`/tmp/codex-playwright-mcp/cert900-adsense-about-1440.png`.
Build hashes are recorded in `/tmp/cert900-adsense-assets-manifest.json`.

## Release boundaries and rollback

Verified production before readiness:

- Worker `comptia-practice-trainer`.
- Active version `83256be4-c934-4718-9497-48c2212b8624`, 100% traffic.
- Deployment `23188be0-776a-4e47-b20e-9c1af91491d7`.
- Previous rollback version `2e67b382-5d16-48bd-a4cc-7ea15c4de716` remains available.
- GitHub main is `308d960fdd9def82998e51eb83c9357c1c20031b`.

Preserve the installed Wrangler version and production configuration. The
approved preparation command is **versions upload**, never ordinary deploy:

```sh
./node_modules/.bin/wrangler versions upload \
  --config wrangler.jsonc --env-file /dev/null --keep-vars \
  --tag cert900-adsense-readiness \
  --message 'AdSense ownership readiness only; inactive pending approval'
```

Run from this isolated worktree with the existing authenticated account.
Disable environment-file auto-loading and metrics; never supply secret files
or variable overrides. Read version metadata back and compare binding names,
types/identities, runtime compatibility, and effective asset settings. Verify
the production deployment/allocation and settings remain unchanged before and
after upload. Uploading a version does not authorize a traffic deployment.

The existing canonical-host redirect means the workers.dev version URL is not
proof of the candidate's rendered pages: it redirects to live cert900.com.
Full production-origin version-override testing requires a separate approved
staging step. Do not mistake the redirected live HTML for the inactive build.

Next approval: review the patch/privacy text and authorize the controlled
production staging/promotion. After approved deployment, recheck delivered
metadata with normal public requests, then use AdSense's checkbox and Verify.
Present the final readiness assessment and request separate approval before
Request review. If Google asks for a security/identity challenge, the owner must
complete it personally. No payment settings are part of this task.

No main push, production promotion, Google review submission, DNS change,
database write, or external email is authorized by this preparation step.
Before promotion, rollback is simply to leave production untouched. After a
separately approved promotion, return the preserved current version to 100%
with the reviewed versions-deploy procedure; no reverse migration is needed.
