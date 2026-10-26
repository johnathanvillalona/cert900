# Cert900 monetization, UX and SEO sprint

Prepared October 26, 2026 (America/New_York). Publisher outreach and traffic observations below are dated **October 24**. AdSense onboarding was rechecked read-only on **October 26** and has changed; no fresh inbox inspection was performed. No publisher application or email was repeated during continuation.

## Local candidate and production boundary

- Branch: `codex/monetization-ux-seo-m1`.
- Worktree: `/home/sorannex/Claude Projects/cert900/monetization-ux-seo-m1-worktree`.
- Direct production parent: `8f64becefa1575a97a69e2bb959306bf3ac9f73a`.
- October 26 read-only verification: remote main still matches that parent. Cloudflare deployment `0e3b3986-4329-443b-a0d7-9fdc5af033d0` still routes **100%** to `4ba3782a-89ef-4e8e-997b-20b023934875`.
- This sprint made no push, merge, Cloudflare version upload, staging deployment, traffic change, account-setting change, purchase or database migration.
- The local commit containing this report identifies the candidate; obtain its full SHA with `git rev-parse HEAD`. It is not an uploaded Worker version.

The unfinished LMS lineage is excluded. Its accepted worktree remains clean at `322b7a03f395d1859c01d044d9981a09ef074534`. Exact media paths, hashes, incomplete Windows requirements and restart commands are in [LMS-RESUME.md](../LMS-RESUME.md).

## Completed publisher workflows

| Provider | Actual result (October 24 unless dated otherwise) | Confirmation | Remaining gate |
|---|---|---|---|
| Carbon Ads | One nonbinding invitation request submitted | **Thank you! Our team will be in touch.** No numeric reference supplied | Await response. No account, exclusive agreement or ad activation was accepted. |
| Media.net | One nonbinding publisher-sales inquiry sent | Gmail **Message sent**; a narrowly scoped Sent search contains the outgoing message | Await eligibility, placement, consent and commercial response. Email is not publisher approval/enrollment. |
| Infolinks | One nonbinding eligibility inquiry sent; registration paused as instructed | Gmail **Message sent**, corroborated by the scoped Sent search | Owner declined service-agreement acceptance. Ask provider for an application-only path and manual/static-only compatibility. |
| Journey | Contact step reached the required Google/GA4 connection; owner deferred further work | Captured OAuth gate, **not** a submitted application | Measured traffic below current premium-session threshold, unreviewed OAuth scope and incompatible-looking automated placements. |
| AdSense | Existing account/site preserved; **October 26** read-only onboarding recheck | **Your account wasn't approved**; **You need to fix some issues before you can use AdSense** | The screen requests program-policy compliance confirmation and offers Resubmit, but gives no specific violation. Neither control was used. October 24 ads.txt recognition remains historical. |

Private workflow tracker: `.publisher-private/tracker.json`. Evidence includes Carbon's confirmation, the two-email scoped Sent snapshot, the Journey gate, AdSense status and analytics reports. This directory is Git-ignored and absent from public build output. No credentials, browser tokens, payment details or identity documents are stored. The Infolinks toast expired before a later evaluation; the scoped Sent evidence is its durable corroboration. Do not resend an inquiry because a transient toast is no longer visible.

Routine contact disclosure and the exact two outgoing email summaries were explicitly owner-approved after automatic approval review required destination/payload confirmation. Infolinks contract acceptance remained declined. Journey OAuth was not granted. No CAPTCHA, MFA, certificate warning or account-security restriction was bypassed.

### Terms and suitability

See the [dated official-source terms review](monetization-sprint-provider-terms.md) for revenue share, thresholds, payment timing, duration, termination, formats and privacy findings. These are public observations, not signed offers or legal assurances.

- Infolinks' current www agreement materially differs from the old sites0001 version. Annual renewal, written termination, unpaid-balance and data-reuse provisions prevented routine signup under the owner's boundaries.
- Journey needs qualifying premium-market sessions and programmatic exclusivity. Grow is currently optional. Published automated-placement restrictions conflict with assuming one manually controlled static placement and no learning-app SDK; written compatibility would be required even after traffic qualifies.
- Carbon's invitation form did not itself ask for an exclusive contract. Joining the network does require exclusivity; no such arrangement was accepted.
- Media.net's official publisher-inquiry email was used instead of guessing a required business region or accepting a marketing opt-in in the general contact form. Its service agreement needs a separate material-terms review before enrollment.

Provider replies after October 24 have not been inspected in this report. No approval, rejection or delivery to a provider's inbox is inferred from Gmail's sent confirmation.

**October 26 connection follow-up:** With explicit owner authorization, the profile-specific extension authentication was saved privately in the existing user-level MCP configuration. A fresh instance of the already-installed official Playwright MCP 0.0.83 connected automatically without an approval dialog. No packages, browser cookies or extension security settings changed; no credential was displayed or committed. Localhost navigation, DOM inspection, scrolling and screenshot capture passed. The same newly created QA tab was reused for the read-only AdSense check and then closed; the connection remains available. This separate client cannot see the earlier client's tab group, so that earlier interrupted cleanup remains unverified. Preserve original tabs; do not claim all Chrome tabs were cleaned. No inbox was inspected or application repeated. The previously loaded Codex MCP process may need a one-time reload/restart to use its saved environment; automatic authentication itself was tested successfully.

## Verified traffic and measurement gaps

Authenticated GA4 property: **Cert900**, public Measurement ID `G-BBMQ8EC9G6`. No tracking configuration changed and no controlled consented debug session was generated during this sprint.

| Report and period | Observed result |
|---|---|
| GA4 traffic acquisition, **September 24–October 23, 2026** | **13 sessions**, 9 engaged sessions, 69.23% engagement rate, average engagement time 6m 24s, 112 events |
| Same acquisition report | Direct 9 sessions; Organic Search 4 sessions |
| GA4 Home last-30-days card | **5 active users, 60 views**, 112 events |
| GA4 Home country card, separately labeled last 7 days | US 4 active users; Poland 1. This is a user count, not premium-session geography. |
| Search Console, **July 23–October 22, 2026**, Web | **176 clicks, 3.97K impressions as displayed, 4.4% CTR, average position 55.2** |

GA4 was introduced recently and is consent/blocker dependent. These figures are a small measured cohort, not proof of complete monthly visitors or unique people; earlier owner/QA activity may be included. Do not extrapolate a mature monthly audience or income. The 28-day acquisition snapshot is retained separately; it must not be mislabeled as the final 30-day report. The Media.net inquiry truthfully used the earlier September 26–October 23 snapshot, which also showed 13 sessions.

Carbon's lowest traffic bracket was selected from measured GA4 views. The form did not provide a free-text qualifier; explain the consented-data limitation if the team asks for complete traffic. No traffic was inflated. No Cloudflare HTTP request total was presented as sessions or pageviews, and no unverified audience-geography percentage was submitted.

### Search evidence supporting focused discovery work

| Search Console landing page, same three-month period | Clicks | Impressions |
|---|---:|---:|
| Homepage | 127 | 321 |
| PBQ overview | 22 | 465 |
| AWS AI Practitioner guide | 7 | 482 |
| Combined A+ guide | 6 | 832 |
| A+ Core 1 guide | 5 | 213 |
| Security+ guide | 4 | 164 |
| AWS Solutions Architect guide | 3 | 667 |
| AWS Cloud Practitioner guide | 2 | 181 |
| Azure Fundamentals guide | 1 | 1,199 |

Top displayed query evidence included `cert900` (86 clicks/128 impressions), `az 900 practice test` (0/53), `aws ai practitioner practice test` (0/51), and `aws certified ai practitioner practice exam` (0/50). These are observed results, not keyword-volume estimates. New lessons were published only recently; a three-month report cannot isolate their effect. No ranking or revenue lift is promised from navigation changes.

## Homepage and navigation implementation

- Two clear primary destinations: **Practice exams** → existing `/exams`; **Study guides** → existing canonical certification directory `/it-certification-practice-tests`.
- **Explore PBQ labs** is secondary and leads to the existing substantive PBQ overview, with its established practice links.
- Existing certification cards retain Practice and Study Hub actions for all 11 exams. Certification selection appears before optional app promotion.
- Static guides, hubs and informational pages share native Practice exams/Study guides header links. They remain usable without JavaScript.
- Corrected one unsupported homepage scoring-equivalence statement. Actual scoring, values, timers and exam behavior are unchanged.

The live homepage is not redesigned by this task. Review the local candidate at **http://127.0.0.1:4298/**. It uses the existing synthetic isolated Worker/fresh local resources; it does not read or write production accounts or progress.

[Desktop after](qa/monetization-sprint/home-1440-light.png) · [Desktop before](qa/monetization-sprint/home-before-1440-light.png) · [Mobile after](qa/monetization-sprint/home-320-light.png) · [Mobile before](qa/monetization-sprint/home-before-320-light.png). Both themes and all five measured widths are in that evidence directory.

## Advertising integration readiness

The [provider-neutral preparation contract](publisher-integration-readiness.md) reuses the existing resource registry and generic `startAdvertising` lifecycle. All global, provider, site-approval, terms, consent and placement gates are **false**. The adapter registry is intentionally empty. The only proposed placement remains the existing substantive Network+ guide insertion point; hubs, references and new registry items never opt in automatically.

The existing responsive reserved space, Advertisement label and mocked consent/request/withdrawal tests remain intact. No ad renderer, bootstrap, provider SDK URL, CSP expansion or custom CMP was added. No neutral policy can bypass the existing AdSense unit/approval/CMP gates. Provider-specific adapters and verified current consent signals are **future implementation gates**, not completed integrations. Analytics consent is never ad consent.

Emergency source controls: keep `PUBLISHER_POLICY.enabled` and `ADVERTISING.enabled` false. A future deployed flag change needs the controlled release process; it is not a remote instant kill switch. An immediate incident response would restore the verified ad-free Worker under appropriate release authority. No KV control system or new service was introduced.

## Fastest responsible route to first revenue

1. Keep the existing optional support link available without changing payment setup. Its destination is already configured; account/payout health was not inspected, and no new financial capability is claimed.
2. Await the three completed publisher contacts. AdSense is now blocked by the October 26 account-not-approved state: investigate the specific rejection reason before considering any policy attestation or resubmission. Evaluate the first actual compatible offer; do not automatically accept Carbon exclusivity or Infolinks terms to accelerate onboarding.
3. Prefer one manual static educational placement after provider approval, owner contract approval where required, a verified consent/CMP design, provider-specific adapter testing and separate activation/release authorization. Do not activate ads merely by flipping a source flag.
4. Consider one relevant affiliate relationship after its live agreement and eligibility are reviewed. TryHackMe, Hack The Box, Pearson IT Certification and Pluralsight are documented opportunities, **not approved Cert900 relationships**. No affiliate account, contract, tracking link or payment setup was activated. Direct CompTIA voucher affiliate eligibility was not verified; do not resell vouchers.
5. For direct sponsorship, use a short factual media sheet with dated measured traffic, intended audience, one disclosed static placement and no tracking pixel by default. Do not quote a guaranteed reach, sell a placement or sign a term without approval. No bulk outreach was sent.

At the current measured audience, advertising income is unlikely to be substantial. There is no evidence supporting a promised date or amount for first revenue. Useful study content, clear internal navigation and genuine qualified visitors are the next growth levers; more ad density is not the initial strategy. Additional recurring subscriptions remain **$0/month**.

## Validation and remaining limits

See [validation evidence](qa/monetization-sprint/README.md) and machine-readable `validation.json`/`security.json` in that directory. The current candidate preserves all protected application paths, question banks, engines, simulators, auth/session/sync, consent, advertising policies, Worker configuration, mobile files and dependency manifests.

Automated coverage passes: **670 units, 216 browser cases, seven simulator cases, 13 isolated Worker groups**, build/TypeScript, all 36 sitemap URLs/11 hubs, metadata/visible structured-data parity, consent/withdrawal and no-ad requests, keyboard/touch and both themes at five widths. Physical-device, screen-reader and owner visual approval remain manual. Provider agreement/privacy compatibility, actual account approval and SDK behavior cannot be established by mock tests.

The **October 26 focused browser recheck passed 40 cases in 1.1 minutes**: learning destinations, technical SEO, analytics consent, disabled/mocked advertising and ads.txt. [Exact run log](qa/monetization-sprint/focused-recheck.log). This isolated local Chrome run is separate from the October 24 full suite and does not establish a persistent-browser reconnection, temporary-tab cleanup or fresh external publisher/account status. The later authenticated October 26 connection and AdSense check are separate evidence, described above; earlier-client cleanup and inbox follow-up remain unverified.

Root production audit: **zero findings**. Full root audit: **three existing development findings** through Undici/Miniflare/Wrangler. Zod stays **4.6.6**. Native-mobile findings were not remediated or re-audited; do not call the whole repository vulnerability-free. No dependency version changed. `npm ls --all` passes from the dependency-owning checkout; the temporary symlink-traversal artifact is documented.

No confirmed new technical SEO defect was found. The [SEO review](monetization-sprint-seo.md) records 36 public HTTP 200s, unique/self-canonical coherent metadata and legal-only truthful modification dates. No routes, sitemap entries, canonicals, structured-data sources, robots.txt or Search Console settings changed. The source changes improve discovery and one trust statement without generating thin pages.

LMS release blockers remain separate: an authorized Windows source/practical integration, independent verified media backup, owner/accessibility review and hosting/release decisions. Git does not back up ignored masters. This sprint preserves the exact checkpoint and does not try to resolve those blockers by publishing Ubuntu in place of Windows.

Independent October 26 preservation recheck: all **103 protected file hashes and nine video entries** still match the accepted record; the LMS branch/worktree remain clean. This is source/media preservation evidence, not a new media render or a backup claim.

## Controlled release recommendation

Review this local UX candidate independently from advertising activation. After owner approval, recheck main/production, build the exact committed source and use the existing **Wrangler versions upload** workflow to create an inactive version. Do not use ordinary `wrangler deploy` or allow a GitHub build to promote traffic. Preserve `4ba3782a-89ef-4e8e-997b-20b023934875` as the ad-free rollback checkpoint, verify unchanged bindings/settings, and test canonical-domain overrides including assets. Keep the old version at 100% and candidate at 0% during staging. Promotion and main synchronization each require the established separate approval/safety checks.

No database migration, secret, runtime binding, domain, route, schedule, Google setting, new subscription or advertising activation is required by this UX-only candidate. Any provider verification/CMP/SDK integration must be a separately reviewed change. The [continuation checkpoint](monetization-sprint-checkpoint.md) prevents duplicated external actions if work is interrupted again. [Exact changed files](qa/monetization-sprint/CHANGED-FILES.txt) accompany the local commit.
