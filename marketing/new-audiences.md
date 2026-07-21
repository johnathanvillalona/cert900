# New-audience outreach (AWS, Azure, Cisco)

cert900 started CompTIA-first (see `reddit-launch.md`, `discord-intro.md`), but
the catalog now spans AWS, Azure, and Cisco too. Those audiences do NOT live in
r/CompTIA, and cross-posting CompTIA copy to them reads as spam. This file is
the per-vendor playbook: where each audience is, what to say, and when.

## Ground rules (same as the CompTIA playbook)

- One genuine share per community, from an aged account, with a mod's blessing
  where the rules ask for it. Then only helpful replies in other people's
  threads. Answer the question first, disclose you built it every time.
- **Post per exam, not per site.** Someone in r/AWSCertifications wants an AWS
  answer, not a seven-exam pitch. Lead with the exam that matches the sub; the
  rest of the catalog is a one-line footnote at most.
- **Stagger.** Launch a sub's post when that exam's bank is actually live and
  filled, not before. A thin bank gets torn apart in comments.
- Link the matching guide slug, not the homepage, so the landing page answers
  the exact query (and the SEO page gets the traffic signal).

## AWS — r/AWSCertifications (primary), r/AWS_certifications, r/aws

The most PBQ-agnostic, most exam-dump-wary cert audience on Reddit. They value
"original questions, explained, mapped to the exam guide" and hate braindumps.

- **Cloud Practitioner (CLF-C02)** and **AI Practitioner (AIF-C01)** are live
  now. **Solutions Architect Associate (SAA-C03)** ships in this wave.
- Angle: free, original, in the real formats (multiple-response, ordering,
  matching), scored on the real 100-1,000 scale with the 700 line, every topic
  linked to the matching chapter of the free freeCodeCamp course.
- Reply snippet ("best free SAA-C03 practice?"): "Free, original, and mapped to
  the SAA-C03 exam guide: cert900.com/aws-solutions-architect-associate-practice-test.
  Full disclosure, I built it. No dumps, no signup; every topic links to the
  matching chapter of Andrew Brown's free freeCodeCamp course."
- Creator tie-in: freeCodeCamp forum + the ExamPro/Andrew Brown community.
  Frame it as "practice to go with the free course," never as a replacement.

## Azure — r/AzureCertification (primary), r/Azure, r/microsoft, r/AZURE

- **Azure Fundamentals (AZ-900)** is live. **Azure Administrator (AZ-104)** and
  **Security/Compliance/Identity Fundamentals (SC-900)** ship in this wave.
- Angle: Microsoft's own interactive formats (drag-and-drop, build-list),
  all-or-nothing graded the way Microsoft grades them, real scale + 700 line,
  every topic linked to the matching John Savill video.
- Reply snippet ("studying for SC-900 / AZ-104, free practice?"): "cert900.com
  has a free SC-900 (and AZ-104) bank, original questions in Microsoft's
  drag-and-drop/build-list formats, every topic linked to John Savill's free
  videos. I built it; no signup, no paywall. [guide link]"
- Creator tie-in: John Savill's community/Discord and the r/AzureCertification
  wiki. Savill's cram videos are the anchor; say so.

## Cisco — r/ccna (primary), r/Cisco, r/networking (reply-only)

The single biggest untapped audience for us, and the one that most values a
working simulator (CCNA is famous for its sims/simlets).

- **CCNA 200-301** ships in this wave (new vendor).
- Angle: free, original, six-domain coverage on the current v1.1 blueprint,
  simulated CLI/config PBQs and topology hotspots (the sim practice people
  actually want), every topic linked to the matching "Day N" video from
  Jeremy's IT Lab's free complete course.
- Reply snippet ("free CCNA practice questions / sims?"): "cert900.com has a
  free CCNA 200-301 bank, original questions across all six domains plus
  simulated CLI-config and topology questions, each linked to the matching
  Jeremy's IT Lab 'Day N' video. I built it; no signup. [guide link]"
- Creator tie-in: Jeremy's IT Lab Discord (huge, active) and r/ccna's wiki.
  Jeremy's course is the anchor for every topic; lead with that respect.
- r/networking: reply-only, and only to explicit "how do I study for CCNA"
  threads. It is not a cert-promo sub.

## Discords / creator communities (one resources post each, with mod OK)

- Jeremy's IT Lab Discord (CCNA)
- John Savill's Technical Training community (Azure)
- freeCodeCamp forum + ExamPro community (AWS)
- disboard.org: search "CCNA", "AWS", "Azure" study Discords; same read-rules,
  ask-a-mod, post-once-in-resources playbook as the CompTIA Discords.

## Automated lead scan

`worker/social.ts` `weeklyRedditScan` already logs practice-test threads to the
D1 `leads` table. Extend its subreddit list to `AWSCertifications`,
`AzureCertification`, and `ccna` so the Monday scan surfaces leads for the new
audiences too (dedupe is automatic). Read leads with:

    npx wrangler d1 execute comptia-trainer --remote --command "SELECT subreddit, title, url FROM leads ORDER BY created_at DESC LIMIT 30"
