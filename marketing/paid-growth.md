# Paid growth plan (scaled)

The organic playbook (Reddit launch, community replies, Discords, the daily
social cron, SEO) is the foundation and stays the majority of effort — it is
free and compounding. This file is the **paid** layer on top: capped,
measurable, and killed fast when a channel does not pay back.

Guiding principles, non-negotiable:

- **Every dollar is capped and dated.** No open-ended campaigns.
- **Every campaign has a kill/scale rule** checked against Cloudflare Web
  Analytics before more money goes in.
- **No tracking pixels on cert900 itself.** The site stays cookieless and
  consent-banner-free (a real differentiator and a privacy promise). Ad
  platforms measure clicks on their side; we measure sessions/quiz-starts on
  ours via UTMs. See "Measurement" below.
- **Send paid clicks to the matching guide slug**, never the homepage — the
  guide answers the exact query and already carries the SEO/schema.

## Measurement (do this first — you cannot manage what you cannot see)

1. **UTM taxonomy** (consistent across every paid link):
   `?utm_source={reddit|google|meta}&utm_medium=cpc&utm_campaign={exam}-{angle}`
   e.g. `...&utm_campaign=ccna-sims`, `...&utm_campaign=secplus-pbq`.
2. **The real conversion is a started quiz, not a pageview.** Add a lightweight,
   cookieless "quiz_started" beacon (a single `navigator.sendBeacon` to a
   `/api/ev` worker route that increments a D1 counter keyed by day + utm, no
   IP, no cookie) so you can compare *sessions started* per campaign, not just
   clicks. Until that exists, use CF Analytics "pages per visit" and the
   guide→app bounce as a proxy. (This beacon is the one small code change this
   plan needs; everything else is account-side.)
3. **Weekly review**: one row per campaign — spend, clicks, CPC, quiz-starts,
   cost per quiz-start. Kill anything above the per-channel ceiling below.

## Tier 1 — Reddit Ads (primary paid channel)

Reddit is where the intent and the communities already are, and community
targeting is tight. Scale the $20 message test (`reddit-ads.md`) into a
standing, per-community set once a winning angle is known.

- **Budget**: ~$150-300/month total, split into **one campaign per community**
  so you can see which audience converts:
  - r/CompTIA + r/CompTIA_Cert → `/comptia-pbq-practice` (PBQ angle)
  - r/ccna → `/cisco-ccna-practice-test` (sims angle)
  - r/AWSCertifications → the matching AWS guide (original-questions angle)
  - r/AzureCertification → the matching Azure guide
- **Settings**: Objective Traffic, Feed placement, US (expand to CA/UK/AU/IN if
  a campaign is efficient), automatic bid, each campaign dated with a hard
  monthly cap.
- **Creative**: reuse the winning headline from the $20 test per audience; the
  angles are in `reddit-ads.md` (PBQ/sims) and `new-audiences.md` (per vendor).
- **Kill/scale rule** (per community, checked weekly): keep and add budget if
  **CTR > ~0.8%** AND **cost per quiz-start is under ~$0.75**. Pause any
  community that misses both for two weeks running; move its budget to the best
  performer.

## Tier 2 — Google Search Ads (high-intent long-tail)

People search "free <exam> practice test" with clear intent. "Free" queries
carry lower CPCs than commercial terms, so a small budget goes far.

- **Budget**: start **$10/day capped ($300/mo ceiling)**; do not raise until
  Tier 1 is dialed in.
- **Structure**: one ad group per exam, **exact + phrase match only** (no broad
  — it burns budget on junk). Seed keywords:
  - `free security+ practice test`, `sy0-701 practice questions`
  - `free network+ practice test`, `n10-009 practice questions`
  - `free ccna practice test`, `ccna 200-301 practice questions`
  - `free sc-900 practice test`, `az-104 practice questions`
  - `aws solutions architect associate practice exam free`
- **Negatives**: `dump`, `braindump`, `pdf`, `answers`, `free download` (filters
  cheaters and freeloaders who never convert).
- **Landing page**: the matching guide slug. **Ad copy must say "free, no
  signup"** — it is the whole edge over paid competitors bidding the same terms.
- **Kill/scale rule**: pause any keyword with clicks but zero quiz-starts after
  ~40 clicks; scale the keywords that produce quiz-starts under ~$0.75 each.
- Note: Google may show limited impressions for a brand-new free site with no
  conversion history. That is expected; let it learn for 2 weeks before judging.

## Tier 3 — App Store Optimization (free, high-leverage, do regardless)

The mobile app just shipped; treat the stores as an acquisition channel, not a
byproduct.

- Keep the store listing keywords current (`mobile/store.config.json`) — the
  exam codes people search (sy0-701, n10-009, ccna, az-104, sc-900, saa-c03)
  are prime ASO terms; add the new exams' codes as they ship.
- **Web ↔ app cross-promotion**: a subtle "also on iOS/Android" link on
  Results/Dashboard (never the quiz or landing hero) turns web traffic into app
  installs, which lift store ranking, which drive organic installs — a loop that
  costs nothing.
- Ask satisfied users for a rating after a passed practice exam (a one-line,
  dismissible prompt on a strong Results screen — not nagging). Ratings are the
  single biggest ASO lever.

## Explicitly NOT doing (and why)

- **No display/retargeting pixels (Meta Pixel, Google remarketing tags) on
  cert900.** They would force a cookie-consent banner and break the cookieless
  privacy posture that is part of the brand promise. If Meta/Reddit conversion
  tracking is ever wanted, it stays on the ad-platform side (their click
  attribution), never as a tag on our pages.
- **No AdSense.** Same reason (tracking + consent cost); monetization stays
  EthicalAds (privacy-first) + affiliate + donate, per `CLAUDE.md`.

## Suggested ramp

1. **Now**: run the $20 Reddit message test (`reddit-ads.md`); ship the
   quiz-started beacon; keep organic going.
2. **Once an angle wins (~2 weeks)**: stand up Tier 1 per-community Reddit
   campaigns at ~$150/mo; add the ASO cross-promo link.
3. **Once Tier 1 shows a channel under the cost-per-quiz-start ceiling**: add
   Tier 2 Google Search at $10/day.
4. **Review monthly**: shift budget to the best cost-per-quiz-start channel;
   never raise a channel that misses its kill rule two reviews in a row.
