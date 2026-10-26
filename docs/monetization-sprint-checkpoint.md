# Monetization sprint continuation checkpoint

Updated October 26, 2026 (America/New_York). This is the existing sprint, not a new application campaign.

## Do not repeat completed external actions

- Carbon Ads: one nonbinding invitation request submitted October 24. The site confirmed **“Thank you! Our team will be in touch.”** No numeric reference was supplied. No exclusivity agreement accepted.
- Media.net: one owner-approved nonbinding inquiry sent to official publisher sales October 24. Gmail confirmed **Message sent**. It is not a completed publisher enrollment or approval.
- Infolinks: one owner-approved nonbinding inquiry sent October 24. Gmail confirmed **Message sent** and a narrowly scoped Sent search verified both outgoing inquiries. Registration remains paused; do not accept its service agreement.
- Journey: contact step reached the mandatory Google/GA4 connection. Owner explicitly deferred the workflow until traffic qualifies. No OAuth permission, application completion or Grow installation.
- AdSense: **October 26** authenticated onboarding now says **Your account wasn't approved** and **You need to fix some issues before you can use AdSense**. The main screen gives no specific rejection reason. Program-policy confirmation remains unchecked; Resubmit was not clicked. Preserve the historical October 24 Getting ready / Review requested and ads.txt observations; do not treat them as current approval/review status. No duplicate account/site/review submission.

Private tracker and confirmation evidence: `.publisher-private/tracker.json` and the same directory's screenshots, JSON and scoped Sent snapshots. This directory is ignored and must never be copied to `public/` or `dist/`. An expired toast capture is not the primary Infolinks proof; use `sent-inquiries.yml`/JSON/screenshot. Do not resend because the later toast evaluation was empty.

## Development checkpoints

- Production parent: `8f64becefa1575a97a69e2bb959306bf3ac9f73a`.
- Branch: `codex/monetization-ux-seo-m1`.
- Validated implementation checkpoint: `5d5176b83335805a037410751ea0ea1ea2571ec3`; subsequent report-only follow-up records browser reconnection and changed AdSense status.
- Worktree: `/home/sorannex/Claude Projects/cert900/monetization-ux-seo-m1-worktree`.
- LMS stays clean and paused at `322b7a03f395d1859c01d044d9981a09ef074534`, `codex/m8c-windows-first`. See root `LMS-RESUME.md`. Do not merge this lineage.
- No push, merge, upload, deployment, traffic change, database migration, analytics/consent change or ad activation is authorized.

## Completed implementation and validation

Two prominent homepage destinations; native static-page navigation; PBQs secondary; certification cards before app promotion; narrowly corrected scoring-equivalence text. Disabled provider-neutral policy, empty adapters, all approval/terms/consent/placement gates off; existing AdSense behavior unchanged.

October 24 regression run: **670 unit tests**, production build, **216 browser tests**, **7 simulator tests**, **13 isolated Worker groups**, zero outbound Worker attempts. Historical screenshot baselines/evidence restored; new screenshots live only in `docs/qa/monetization-sprint/`.

October 26 continuation: full units/build rechecked successfully; audits refreshed (production zero, same three development findings). `npm ls --all` must run in the dependency-owning hotfix checkout: the new worktree reuses its `node_modules` by symlink. The owning checkout has zero dependency-tree problems and identical manifest/lockfile hashes. Running npm tree traversal through the symlink produces false extraneous/missing reports; do not upgrade packages to address that artifact.

October 26 focused browser recheck: **40 cases passed in 1.1 minutes**, covering learning destinations, technical SEO, analytics consent, disabled/mocked advertising and ads.txt. Evidence: `docs/qa/monetization-sprint/focused-recheck.log`. This used an isolated local Chrome profile and synthetic Worker resources. That local run did not establish authenticated account status. A later October 26 fresh official MCP connection succeeded automatically, and AdSense was rechecked separately as recorded above. Earlier-client cleanup and inbox checks remain unverified.

Browser screenshots use actual measured CSS widths **320, 375, 390, 768, 1440**. Existing localhost zoom is 80%; requested window sizes differ. The initial uncalibrated screenshots were replaced. Request 615 pixels to obtain actual 768 on this connection, then assert `innerWidth`; never infer the viewport from the filename or PNG dimensions. Both themes passed with no overflow or advertising resources.

## Safe continuation order

1. Read Git status and this checkpoint; preserve all committed work and private application evidence.
2. Implementation and regression evidence are committed at the checkpoint above. Do not include private publisher records, `node_modules`, generated masters or LMS source in any follow-up.
3. Automatic browser authentication is configured privately and verified using a fresh official MCP stdio instance. No token is in this repository. Root's current local bridge session is 72945; `/tmp/cert900-playwright-private-bridge.py` uses the already-installed pinned server without installing anything or printing credentials. It retains only its connection page; its newly created localhost/AdSense QA tab was closed. The earlier client group is not visible, so do not close unknown original tabs or claim its interrupted cleanup completed. A one-time Codex MCP reload/restart may be needed for the built-in stale process. Do not read connection-page content or copy connection URLs containing private authentication. No inbox recheck has occurred.
4. Keep the isolated synthetic local preview at `http://127.0.0.1:4298/` available for review. If it exited, restart with `node tools/qa/isolated-worker.mjs --serve --port=4298` after checking the port. Never use the production Wrangler configuration for local tests.
5. Confirm the local report-only follow-up is clean, then deliver the changed AdSense status and connection outcome. Do not check the policy attestation or resubmit automatically. Future rejection investigation, staging and promotion require their appropriate approval; do not restart completed publisher outreach.

October 26 read-only recheck: remote main still `8f64becefa1575a97a69e2bb959306bf3ac9f73a`; deployment `0e3b3986-4329-443b-a0d7-9fdc5af033d0` still routes 100% to `4ba3782a-89ef-4e8e-997b-20b023934875`. No new Worker version was uploaded by this sprint.
