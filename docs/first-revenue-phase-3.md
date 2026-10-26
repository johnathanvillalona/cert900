# First Revenue Phase 3: local support and discovery

## Scope

Isolated branch `feature/first-revenue-phase-3`, based on verified main
`d6b7ba2e231f347ee93f847fc10b5e146c5e425d`.

One optional support invitation follows the PBQ guide FAQ. It uses the existing
`DONATE_URL` as an ordinary HTML link, with an announced new tab, visible focus and
44px target. No widget, checkout, SDK, click tracker or payment infrastructure is
introduced. The footer destination stays unchanged. The new invitation appears
only on `/comptia-pbq-practice`, after useful content; all learner access stays free.

The three SEO improvements are:

1. Clarify the PBQ title, H1 and description using actual A+/Network+ capabilities.
2. Link all four existing PBQ preview cards to their exam's existing Study Hub
   `#resources` section, alongside the unchanged practice-menu links.
3. Clarify the combined A+ description with current core codes, eight existing
   explained examples and both Study Hubs.

These changes preserve educational body content, six PBQ formats, four authentic
screenshots and attribution, sample/JSON-LD parity, canonicals and sitemap URLs.
No question banks, engines, runtime configuration, consent, advertising policy,
analytics, dependencies or LMS files change.

## Exact implementation and tests

- `src/screens/Guides.tsx`: one PBQ-only support aside and contextual resource links.
- `src/data/guide-meta.ts`: two revised descriptions, PBQ title/H1 and removal of
  the now-unused PBQ inventory constant.
- `src/screens/guide-revenue-readiness.test.tsx`: four focused static-render tests.
- `tests/pbq/first-revenue-phase-3.spec.ts`: eight browser cases covering native
  no-JavaScript support semantics, destination links, HTTP/DOM metadata and five
  widths in both themes. No checkout is followed.
- This document and `docs/qa/first-revenue-phase-3/`: validation evidence and
  review screenshots. Private provider/account evidence is ignored by Git.

## Local review

Running isolated preview: http://127.0.0.1:4301/comptia-pbq-practice

Scroll past the FAQ to see the invitation. Review both themes and the four PBQ
preview links. Other useful routes are `/comptia-a-plus-practice-test`,
`/study/220-1201`, `/study/220-1202` and `/study/n10-009`.

To restart after stopping this preview:

```sh
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4301
```

Use this worktree's existing isolated harness. It creates synthetic local data and
blocks remote Worker calls; do not substitute the production Wrangler config.
Dependencies are reused from the existing dependency-owning hotfix checkout;
package and lockfiles match. No installation was performed.

## Review evidence and limitations

See [QA results](qa/first-revenue-phase-3/README.md). Browser checks cover 320, 375,
390, 768 and 1440 CSS pixels in light/dark themes, keyboard focus, meaningful link
names, touch targets, overflow, existing exams/PBQs, consent and disabled ads.
Automated browser checks do not replace a screen-reader or physical-device review.
No new event measures invitation clicks; support conversion attribution remains
unknown by design. Search snippets may be rewritten by Google and observed gains
cannot be guaranteed.

Private account/traffic evidence, five ranked growth opportunities, the factual
media kit and three unsent sponsor drafts live in this worktree's ignored
`.publisher-private/first-revenue-phase-3/`. They are not included in source commits
or public artifacts. No new publisher application or outgoing message was sent.

## Release gate and controlled procedure

Owner-only payout onboarding and a read-only readiness recheck are required before
publishing the new invitation. Local implementation is ready for visual review;
there is no production-release approval in this milestone.

After separate approval:

1. Recheck GitHub main and the active production deployment. Expected current
   production is `b16322ff-da9d-4627-83ef-12c661b32f39`; do not override a changed
   baseline. Confirm upload-only automatic Builds and unchanged runtime settings.
2. Build the approved clean commit, upload only with `wrangler versions upload`,
   record the returned UUID and keep current production at 100%.
3. Validate the inactive candidate through supported version overrides, including
   assets, PBQ/resource links, consent, metadata and absence of ad requests. Never
   submit a payment as a smoke test.
4. Obtain explicit production promotion approval. Preserve the then-active UUID
   and verified `wrangler versions deploy <rollback-uuid>@100` procedure.
5. After promotion, verify routing and public pages before a separately guarded
   fast-forward main synchronization. Compare Search Console after 14/28 complete
   days; no repeated sitemap/indexing requests are needed for these existing URLs.

No upload, staging, deployment, production-data write, main push or merge occurred.
The LMS remains paused at `322b7a03f395d1859c01d044d9981a09ef074534` and its worktree,
media and resumption documentation are preserved.
