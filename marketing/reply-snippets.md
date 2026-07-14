# Reply templates for scanner leads

The Monday cron collects threads asking about practice tests and PBQs into
the `leads` table. Read them:

    npx wrangler d1 execute comptia-trainer --remote --command "SELECT subreddit, title, url FROM leads ORDER BY created_at DESC LIMIT 20"

Rules of engagement: answer the actual question FIRST, mention the site
second, disclose you built it every time, skip threads where a link adds
nothing, and never post the same wording twice in a week. Aim for at most
2-3 of these per week; the 90/10 rule applies to your whole account.

## 1. "Where can I practice PBQs?"

PBQs are usually 3 to 6 questions at the start, and partial credit is real,
so do not panic-skip them; flag and come back if the timer worries you.

For practice: I built a free site with simulated PBQs (working terminal,
router config panels, drag-to-connect cabling, network diagram hotspots) for
A+ and Network+: cert900.com. No signup. Full disclosure, it is my project,
so feedback welcome.

## 2. "Best free practice tests for [exam]?"

The classics: Professor Messer's course + his pop quizzes, and ExamCompass
for MCQs.

Adding mine to the list with the disclosure that I built it: cert900.com.
936 original questions across both A+ cores and Network+, adaptive drills
that repeat what you miss, a 90-minute exam sim scored 100 to 900, and
simulated PBQs, which is the part most free sites skip. Free, no account.

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
