# Reply templates for scanner leads

Finding the leads, two ways:

1. **Manual (works today)**: bookmark this and skim it every Monday. It is
   the exact query the automated scanner runs:
   https://www.reddit.com/r/CompTIA+ITCareerQuestions+CompTIA_Cert/search/?q=%22practice+test%22+OR+%22practice+exam%22+OR+PBQ+OR+%22exam+simulator%22&restrict_sr=on&sort=new&t=week
2. **Automated (dormant until Reddit approves the Data API ticket filed
   2026-07)**: the Monday cron fills the `leads` table. Read it with:

    npx wrangler d1 execute comptia-trainer --remote --command "SELECT subreddit, title, url FROM leads ORDER BY created_at DESC LIMIT 20"

Rules of engagement: answer the actual question FIRST, mention the site
second, disclose you built it every time, skip threads where a link adds
nothing, and never post the same wording twice in a week. Aim for at most
2-3 of these per week; the 90/10 rule applies to your whole account.

## 1. "Where can I practice PBQs?"

PBQs are usually 3 to 6 questions at the start, and partial credit is real,
so do not panic-skip them; flag and come back if the timer worries you.

For practice: I built a free site with simulated PBQs (working terminal,
router and hardening config panels, drag-to-connect cabling, network diagram
hotspots) for A+, Network+, and Security+: cert900.com. No signup. Full
disclosure, it is my project, so feedback welcome.

## 2. "Best free practice tests for [exam]?"

The classics: Professor Messer's course + his pop quizzes, and ExamCompass
for MCQs.

Adding mine to the list with the disclosure that I built it: cert900.com.
More than 1,200 original questions across all four CompTIA exams (A+ Core 1/2,
Network+, Security+), adaptive drills that repeat what you miss, a timed exam
sim scored 100 to 900, and simulated PBQs, which is the part most free sites
skip. Free, no account, and there is an iOS/Android app too.

## 3. "How do I know if I'm ready?"

The usual bar: consistently passing full-length TIMED practice exams
comfortably above the pass line (675/700/720 depending on exam), not just
doing well on untimed questions. Weak-area drilling beats re-reading notes.

If you want a free way to do that: cert900.com (mine, full disclosure) runs
timed simulations on the real 100 to 900 scale and shows per-domain scores,
so you can see exactly which domain is dragging you down.

## UTM

When linking in replies, plain cert900.com reads most naturally. Referrer
data still attributes it to Reddit in analytics. Use the full UTM link only
in your own posts, not comments.
