import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import { GUIDE_META } from "@/data/guide-meta"
import { REF_SHEETS } from "@/data/ref-sheets"
import { GUIDE_PATHS } from "@/data/routes"
import { VENDORS, VENDOR_ORDER } from "@/data/vendors"
import type { Vendor } from "@/data/types"
import { vendorList } from "@/lib/copy"
import { CONTACT_EMAIL } from "@/lib/site"
import { Cta, GuideShell } from "@/screens/Guides"
import { primaryGuideForExam } from "@/data/study-resources"

/**
 * Informational pages, prerendered alongside the exam guides.
 *
 * These target the query classes a per-exam guide cannot: the generic "IT
 * certification practice test" head term, and the two questions candidates ask
 * before they pick an exam ("what score do I need" and "which one first").
 * Practice settings come from the exam registry. Published exam facts still
 * need editorial review when vendors update them. Keep these pages hook-free
 * because they are rendered to static HTML.
 */

const exams = () => EXAM_ORDER.map((id) => EXAM_META[id])
const byVendor = (v: Vendor) => exams().filter((e) => e.vendor === v)

/** Full inventory table: one row per exam, every column from the registry. */
function ExamTable({ showScores = false }: { showScores?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="mt-3 w-full min-w-160 border-collapse text-sm">
        <thead>
          <tr className="border-b text-left">
            <th className="py-2 pr-4 font-semibold">Exam</th>
            <th className="py-2 pr-4 font-mono font-semibold">Code</th>
            {showScores ? (
              <>
                <th className="py-2 pr-4 font-mono font-semibold">Practice scale</th>
                <th className="py-2 pr-4 font-mono font-semibold">Pass / practice threshold</th>
              </>
            ) : (
              <th className="py-2 pr-4 font-mono font-semibold">Questions here</th>
            )}
            <th className="py-2 pr-4 font-mono font-semibold">Practice items</th>
            <th className="py-2 font-mono font-semibold">Practice time</th>
          </tr>
        </thead>
        <tbody>
          {VENDOR_ORDER.flatMap((v) =>
            byVendor(v).map((e) => (
              <tr key={e.id} className="border-b">
                <td className="py-2 pr-4">
                  <a href={guidePathFor(e.id)} className="text-brand underline-offset-4 hover:underline">
                    {e.cert} {e.name}
                  </a>
                </td>
                <td className="py-2 pr-4 font-mono text-xs tabular-nums">{e.code}</td>
                {showScores ? (
                  <>
                    <td className="py-2 pr-4 font-mono tabular-nums">100&ndash;{e.scale.max}</td>
                    <td className="py-2 pr-4 font-mono font-semibold tabular-nums">{e.scale.pass}</td>
                  </>
                ) : (
                  <td className="py-2 pr-4 font-mono tabular-nums">
                    {e.questionCount}
                    {e.pbqCount > 0 && ` + ${e.pbqCount}`}
                  </td>
                )}
                <td className="py-2 pr-4 font-mono tabular-nums">
                  {e.examMC}
                  {e.examPBQ > 0 && ` + ${e.examPBQ}`}
                </td>
                <td className="py-2 font-mono tabular-nums">{e.examMinutes} min</td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  )
}

/** The guide slug for an exam id, so the tables link into the right page. */
function guidePathFor(examId: string): string {
  return primaryGuideForExam(examId)?.path ?? "/"
}

export function HubPage() {
  const meta = GUIDE_META.hub
  const all = exams()
  const totalQ = all.reduce((a, e) => a + e.questionCount, 0)
  const totalPbq = all.reduce((a, e) => a + e.pbqCount, 0)
  const totalVideos = new Set(all.flatMap((e) => Object.values(e.videos).map((v) => v.u))).size

  return (
    <GuideShell meta={meta}>
      <section>
        <p className="text-lg leading-relaxed">
          {totalQ} original practice questions and {totalPbq} performance-based and interactive items
          across {all.length} certification exams, free with no account. Every exam runs as a timed
          practice session with exam-specific settings, and every question links to a free training
          video for its topic. Question mixes and scoring use Cert900's instructional model.
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Nothing here is a copy of a real exam. Every question is written from the current published
          objectives, which is the only version of this that is both legal and useful: memorising
          leaked items teaches you the items, not the material, and the vendors revoke certifications
          over it.
        </p>
        <div className="mt-6">
          <Cta label="Start practicing" examId="220-1201" testid="hub-cta" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Every exam covered</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          "Questions here" is this site's inventory. "Practice items" and "Practice time" describe
          Cert900's configured sessions; they do not promise a particular real-exam question count or mix.
        </p>
        <ExamTable />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">By vendor</h2>
        <div className="mt-4 flex flex-col gap-6">
          {VENDOR_ORDER.map((v) => {
            const group = byVendor(v)
            if (!group.length) return null
            return (
              <div key={v}>
                <h3 className="font-heading text-lg font-semibold">{VENDORS[v].name}</h3>
                <ul className="mt-2 flex flex-col gap-1.5 text-sm">
                  {group.map((e) => (
                    <li key={e.id}>
                      <a href={guidePathFor(e.id)} className="text-brand underline-offset-4 hover:underline">
                        {e.cert} {e.name} ({e.code})
                      </a>
                      <span className="text-muted-foreground"> — {e.blurb}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What you get on every exam</h2>
        <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed">
          <li>Timed practice with original questions, exam-specific settings and Cert900's instructional scoring.</li>
          <li>Adaptive drills that weight your weakest topics and explain every answer as you go.</li>
          <li>A spaced-repetition review queue that brings back what you missed until it sticks.</li>
          <li>Per-domain accuracy and a readiness band, shown as a range rather than a promise.</li>
          <li>{totalVideos} free training videos, one linked from every topic.</li>
          <li>Offline practice on the phone app, with optional sync. No account required anywhere.</li>
        </ul>
      </section>
    </GuideShell>
  )
}

export function ScoresPage() {
  const meta = GUIDE_META.scores
  return (
    <GuideShell meta={meta}>
      <section>
        <p className="text-lg leading-relaxed">
          Many certification exams report a scaled score instead of a percentage. This table brings
          together published passing scores where available and the thresholds used by Cert900's
          practice sessions, alongside their configured item counts and time limits.
        </p>
        <ExamTable showScores />
        <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
          Cisco does not publish a fixed CCNA passing score or question count. The 825 threshold above
          is a Cert900 practice setting, not an official Cisco requirement. Other passing scores use
          published vendor thresholds. Practice item counts are Cert900 settings.
        </p>
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
          Cert900 uses its own practice scoring formula. Vendors use proprietary scoring, so a practice
          score is learning feedback rather than an official result or a prediction of your exam score.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Why it is not a percentage</h2>
        <p className="mt-3 leading-relaxed">
          Different candidates see different question sets, and questions differ in difficulty. A raw
          count would therefore mean something different on every version of the exam. Scaling
          converts your raw performance onto a common range so that the same scaled score represents
          the same level of knowledge whichever form you sat.
        </p>
        <p className="mt-3 leading-relaxed">
          Two consequences catch people out. The scale starts at 100, not zero, so a 675 out of 900 is
          not "75 percent". And the conversion is not linear, which is why CompTIA publishes a cut
          score but no corresponding percentage of questions.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">How Cert900 scores interactive practice</h2>
        <p className="mt-3 leading-relaxed">
          In Cert900's CompTIA and Cisco practice sessions, each interactive item carries twice the
          weight of one multiple-choice question and can earn rubric-based partial credit. For example,
          completing three of four equally weighted fields correctly earns three quarters of that item. Some
          exercises instead assess the effective configuration against their stated requirements.
        </p>
        <p className="mt-3 leading-relaxed">
          Cert900's AWS and Azure interactive items use all-or-nothing credit and the same weight as
          one multiple-choice item. These are Cert900 instructional settings. Vendor exams may use
          different scoring rules, which are not reproduced or inferred from these practice scores.
        </p>
        <div className="mt-6">
          <Cta label="See where you would land today" examId="sy0-701" testid="scores-cta" />
        </div>
      </section>
    </GuideShell>
  )
}

export function OrderPage() {
  const meta = GUIDE_META.order
  const e = (id: string) => EXAM_META[id]
  return (
    <GuideShell meta={meta}>
      <section>
        <p className="text-lg leading-relaxed">
          There is no single right first certification, but there is a right first certification for a
          given track. None of these exams has an enforced prerequisite, so the order below is about
          what makes the next exam easier, not about what you are allowed to sit.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">IT support and security: CompTIA</h2>
        <ol className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
          <li>
            <a href={GUIDE_PATHS.aplus} className="font-semibold text-brand underline-offset-4 hover:underline">
              A+ ({e("220-1201").code} and {e("220-1202").code})
            </a>{" "}
            — two exams, both required. The usual entry point for help desk and desktop support, and
            the one most often named in job postings for a first IT role.
          </li>
          <li>
            <a href={GUIDE_PATHS.nplus} className="font-semibold text-brand underline-offset-4 hover:underline">
              Network+ ({e("n10-009").code})
            </a>{" "}
            — the vocabulary every later exam assumes: addressing, routing, ports, and topologies. Skip
            it only if you already work with networks daily.
          </li>
          <li>
            <a href={GUIDE_PATHS.secplus} className="font-semibold text-brand underline-offset-4 hover:underline">
              Security+ ({e("sy0-701").code})
            </a>{" "}
            — the baseline security certification, and the one that satisfies the US DoD 8140 baseline
            for many roles. It leans hard on networking, which is why it sits after Network+.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Networking: Cisco</h2>
        <p className="mt-3 leading-relaxed">
          <a href={GUIDE_PATHS.ccna} className="font-semibold text-brand underline-offset-4 hover:underline">
            CCNA ({e("ccna-200-301").code})
          </a>{" "}
          is a single exam with no prerequisite, and it goes deeper than Network+ on routing, switching,
          and IOS configuration. Network+ first is a gentler ramp and is vendor-neutral; going straight
          to CCNA is normal if networking is the actual goal. Expect hands-on simulations: the exam runs{" "}
          {e("ccna-200-301").examMinutes} minutes and the configuration items are a large part of it.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Cloud: AWS and Microsoft</h2>
        <p className="mt-3 leading-relaxed">
          Both vendors put a cheap, non-expiring fundamentals exam in front of their role-based ones,
          and both are worth it if the vocabulary is new to you.
        </p>
        <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
          <li>
            <a href={GUIDE_PATHS.clf} className="font-semibold text-brand underline-offset-4 hover:underline">
              AWS Cloud Practitioner ({e("clf-c02").code})
            </a>{" "}
            then{" "}
            <a href={GUIDE_PATHS.saa} className="font-semibold text-brand underline-offset-4 hover:underline">
              Solutions Architect Associate ({e("saa-c03").code})
            </a>
            . The associate exam is a large step up: {e("saa-c03").examMinutes} minutes of scenario
            questions where several answers work and you pick the one that best fits the stated
            constraint.
          </li>
          <li>
            <a href={GUIDE_PATHS.aif} className="font-semibold text-brand underline-offset-4 hover:underline">
              AWS AI Practitioner ({e("aif-c01").code})
            </a>{" "}
            sits beside Cloud Practitioner rather than after it, and covers generative AI, foundation
            models, and responsible AI on AWS.
          </li>
          <li>
            <a href={GUIDE_PATHS.az900} className="font-semibold text-brand underline-offset-4 hover:underline">
              Azure Fundamentals ({e("az-900").code})
            </a>{" "}
            then{" "}
            <a href={GUIDE_PATHS.az104} className="font-semibold text-brand underline-offset-4 hover:underline">
              Azure Administrator ({e("az-104").code})
            </a>
            .{" "}
            <a href={GUIDE_PATHS.sc900} className="font-semibold text-brand underline-offset-4 hover:underline">
              SC-900
            </a>{" "}
            is the security, compliance, and identity counterpart to AZ-900 and can be taken in either
            order.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">A shortcut that actually works</h2>
        <p className="mt-3 leading-relaxed">
          Sit a timed practice exam cold before you buy anything. It costs nothing here and gives you
          feedback using Cert900's practice model: if you are
          already near the cut line, start higher up the ladder.
        </p>
        <div className="mt-6">
          <Cta label="Take a timed exam now" examId="220-1201" testid="order-cta" />
        </div>
      </section>
    </GuideShell>
  )
}

/**
 * The trust page describes original content, automated checks, retained internal
 * review records and learner reports. Records document review activity; they do
 * not establish an independent guarantee of accuracy or review completeness.
 */
export function MethodPage() {
  const meta = GUIDE_META.method
  const totalQ = exams().reduce((a, e) => a + e.questionCount, 0)
  const totalPbq = exams().reduce((a, e) => a + e.pbqCount, 0)
  return (
    <GuideShell meta={meta}>
      <section id="about" aria-labelledby="about-cert900-heading" className="scroll-mt-6">
        <h2 id="about-cert900-heading" className="font-heading text-2xl font-semibold tracking-tight">About Cert900</h2>
        <p className="mt-3 leading-relaxed">
          Cert900 is an independent, free study resource for {vendorList()} certification candidates,
          covering {exams().length} exams. Practice is available without an account; optional sign-in
          adds progress sync across devices.
        </p>
        <p className="mt-3 leading-relaxed">
          The interactive labs model troubleshooting and configuration in a virtual workspace.
          Commands and settings change simulated scenario state only, without running operating-system
          commands on your computer or changing real devices. These are original study exercises, not
          official exam questions or certification vendors' software.
        </p>
      </section>

      <section>
        <p className="text-lg leading-relaxed">
          This site currently holds {totalQ.toLocaleString()} multiple-choice questions and {totalPbq}{" "}
          performance-based and interactive questions across {exams().length} certification exams.
          Every one of them is original work written against the exam's published objectives. None of
          it comes from real exams: braindumps violate the vendors' agreements, can void a
          certification, and train recall instead of understanding.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">How a question gets written</h2>
        <p className="mt-3 leading-relaxed">
          Questions are drafted per exam domain against the official objective list, then held to a
          fixed item-writing standard: one defensibly correct answer, distractors that are plausible
          to someone who half-knows the topic, no all-of-the-above patterns, and an explanation that
          argues for the right answer and against the wrong ones. Every question links to a free
          training video covering its exact topic.
        </p>
        <p className="mt-3 leading-relaxed">
          The same standard bans what test-takers call test-wiseness tells: the longest option being
          the answer, stem words echoed only in the key, grammatical giveaways, or negatives hidden in
          lowercase. An automated lint checks the measurable ones on every change, and the build fails
          if a bank violates the structural rules.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">How questions are checked</h2>
        <p className="mt-3 leading-relaxed">
          Automated checks validate question structure and consistency. Internal review looks for
          incorrect keys, defensible distractors, unclear wording and explanations that need correction.
          Those checks help identify problems; they do not guarantee that every answer is correct.
        </p>
        <p className="mt-3 leading-relaxed">
          The project's internal review records document an August 2026 review and subsequent
          corrections, including answer keys, explanations and product references. These records
          describe the work performed; they are not an independent certification of accuracy. Product
          changes can also make previously correct material out of date, so learner reports remain
          an important part of maintenance.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">When something is still wrong</h2>
        <p className="mt-3 leading-relaxed">
          Every question carries a report button. Reports are anonymous, land in a triage queue, and a
          confirmed problem is fixed in the bank itself, so the correction reaches everyone at once.
          If a question here cost you a point unfairly, that is the fastest way to make it cost nobody
          else one.
        </p>
        <div className="mt-6">
          <Cta label="Start practicing" examId="sy0-701" testid="method-cta" />
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-cert900-heading" className="scroll-mt-6">
        <h2 id="contact-cert900-heading" className="font-heading text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 leading-relaxed">
          For feedback, site support or privacy questions, email{" "}
          <a className="break-all text-brand underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . For a question-specific correction, use its Report button so the report includes the
          relevant question reference.
        </p>
      </section>
    </GuideShell>
  )
}

/**
 * Reference sheets: printable, table-first pages rendered from
 * src/data/ref-sheets.ts (authored + adversarially fact-checked 2026-08).
 * One shared renderer so all four stay visually identical; the FAQ lives in
 * GUIDE_META (rendered by GuideShell) so it also ships as FAQPage JSON-LD.
 */
function RefSheetBody({ sheetKey, ctaLabel, ctaExam, testid }: { sheetKey: keyof typeof REF_SHEETS; ctaLabel: string; ctaExam: string; testid: string }) {
  const sheet = REF_SHEETS[sheetKey]
  return (
    <>
      <section>
        <p className="text-lg leading-relaxed">{sheet.intro}</p>
      </section>
      {sheet.sections.map((sec) => (
        <section key={sec.heading}>
          <h2 className="font-heading text-2xl font-semibold tracking-tight">{sec.heading}</h2>
          <div className="overflow-x-auto">
            <table className="mt-3 w-full min-w-160 border-collapse text-sm">
              <thead>
                <tr className="border-b text-left">
                  {sec.columns.map((c) => (
                    <th key={c} className="py-2 pr-4 font-semibold">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sec.rows.map((row, i) => (
                  <tr key={i} className="border-b align-top">
                    {row.map((cell, j) => (
                      <td key={j} className={j === 0 ? "py-2 pr-4 font-mono text-xs font-semibold tabular-nums whitespace-nowrap" : "py-2 pr-4"}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {sec.note && <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{sec.note}</p>}
        </section>
      ))}
      <section>
        <p className="leading-relaxed">
          Reading a sheet is recognition; the exam tests recall. The fastest way to make this stick is
          answering questions that use it.
        </p>
        <div className="mt-6">
          <Cta label={ctaLabel} examId={ctaExam} testid={testid} />
        </div>
      </section>
    </>
  )
}

export function PortsPage() {
  return (
    <GuideShell meta={GUIDE_META.ports}>
      <RefSheetBody sheetKey="ports" ctaLabel="Drill ports until they stick" ctaExam="n10-009" testid="ports-cta" />
    </GuideShell>
  )
}

export function CcnaCliPage() {
  return (
    <GuideShell meta={GUIDE_META.ccnacli}>
      <RefSheetBody sheetKey="ccnacli" ctaLabel="Practice CCNA questions and CLI sims" ctaExam="ccna-200-301" testid="ccnacli-cta" />
    </GuideShell>
  )
}

export function CablesPage() {
  return (
    <GuideShell meta={GUIDE_META.cables}>
      <RefSheetBody sheetKey="cables" ctaLabel="Practice A+ Core 1 questions" ctaExam="220-1201" testid="cables-cta" />
    </GuideShell>
  )
}

export function CloudSvcPage() {
  return (
    <GuideShell meta={GUIDE_META.cloudsvc}>
      <RefSheetBody sheetKey="cloudsvc" ctaLabel="Practice AWS and Azure questions" ctaExam="clf-c02" testid="cloudsvc-cta" />
    </GuideShell>
  )
}
