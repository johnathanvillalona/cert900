import { EXAM_META } from "@/data/meta"
import { ArrowRight, Check } from "lucide-react"

/**
 * SEO guide pages. These components are prerendered to static HTML at build
 * time (tools/prerender.tsx), so they must stay hook-free and context-free:
 * plain props, static EXAMS data, native <details> for interactivity.
 * FAQ content is exported so the prerenderer can emit matching JSON-LD.
 */

export interface GuideMeta {
  path: string
  title: string
  description: string
  h1: string
  faq: [string, string][]
}

/**
 * Inventory counts for a set of exams, for copy that quotes them.
 *
 * These are OUR question totals, not exam facts, so they move every time a bank
 * grows: the A+ description shipped "621 questions" against 715 and Network+
 * "315" against 355. Never retype them.
 */
const inventory = (...ids: string[]) => ({
  q: ids.reduce((a, id) => a + EXAM_META[id].questionCount, 0),
  pbq: ids.reduce((a, id) => a + EXAM_META[id].pbqCount, 0),
})
const APLUS = inventory("220-1201", "220-1202")
const NPLUS = inventory("n10-009")
const COMPTIA_PBQ = inventory("220-1201", "220-1202", "n10-009")

export const GUIDE_META: Record<"aplus" | "aplus1" | "aplus2" | "nplus" | "pbq" | "secplus" | "aif" | "clf" | "az900" | "sc900" | "ccna" | "az104" | "saa", GuideMeta> = {
  secplus: {
    path: "/comptia-security-plus-practice-test",
    title: "Free CompTIA Security+ Practice Test (SY0-701) | Cert900",
    description:
      "Free CompTIA Security+ SY0-701 practice: original questions plus performance-based questions with hardening panels, incident-response ordering, and network hotspots, timed 90-minute exam simulation on the 100 to 900 scale. Every topic links to a free Professor Messer video. No signup.",
    h1: "Free CompTIA Security+ (SY0-701) practice test",
    faq: [
      [
        "How many questions are on the Security+ exam?",
        "The SY0-701 exam has a maximum of 90 questions in 90 minutes, mixing multiple choice with performance-based questions. The passing score is 750 on a 100 to 900 scale.",
      ],
      [
        "Do I need Network+ before Security+?",
        "No, but CompTIA recommends Network+ plus about two years of IT administration with a security focus. Security+ leans on networking fundamentals, so comfort with ports, protocols, and topologies helps a lot.",
      ],
      [
        "What does SY0-701 cover?",
        "Five domains: General Security Concepts (12%), Threats, Vulnerabilities & Mitigations (22%), Security Architecture (18%), Security Operations (28%), and Security Program Management & Oversight (20%). Our drills track your accuracy in each domain separately.",
      ],
      [
        "Is this actually free?",
        "Yes. Every question, every PBQ, and the full exam simulator are free with no account. Every topic links to the matching video in Professor Messer's free SY0-701 course.",
      ],
    ],
  },
  clf: {
    path: "/aws-cloud-practitioner-practice-test",
    title: "Free AWS Cloud Practitioner Practice Test (CLF-C02) | Cert900",
    description:
      "Free AWS Certified Cloud Practitioner (CLF-C02) practice: original multiple-choice and multiple-response questions, timed 90-minute exam simulation scored 100 to 1,000. Every topic links to a free video. No signup.",
    h1: "Free AWS Cloud Practitioner (CLF-C02) practice test",
    faq: [
      [
        "How many questions are on the CLF-C02 exam?",
        "65 questions in 90 minutes: 50 scored plus 15 unscored. The exam uses multiple-choice and multiple-response questions, and passing requires a scaled score of 700 on a 100 to 1,000 range.",
      ],
      [
        "Is Cloud Practitioner worth it before an associate cert?",
        "It's the standard on-ramp: it proves cloud literacy for less technical roles and builds the vocabulary the associate exams assume. If you already administer AWS daily, some people skip straight to Solutions Architect Associate.",
      ],
      [
        "What are the CLF-C02 domains?",
        "Cloud Concepts (24%), Security and Compliance (30%), Cloud Technology and Services (34%), and Billing, Pricing, and Support (12%). Our drills track your accuracy in each domain separately.",
      ],
    ],
  },
  az900: {
    path: "/azure-fundamentals-practice-test",
    title: "Free Azure Fundamentals Practice Test (AZ-900) | Cert900",
    description:
      "Free Microsoft Azure Fundamentals (AZ-900) practice: original questions plus drag-and-drop and build-list items in Microsoft's own formats, timed exam simulation scored to 1,000. Every topic links to a free John Savill video. No signup.",
    h1: "Free Microsoft Azure Fundamentals (AZ-900) practice test",
    faq: [
      [
        "How many questions are on the AZ-900 exam?",
        "Typically 40 to 60 questions with about 45 minutes of exam time. Most are multiple choice and multiple select, with occasional drag-and-drop and build-list items. Passing requires 700 on a scale up to 1,000.",
      ],
      [
        "Does AZ-900 expire?",
        "No. Fundamentals certifications like AZ-900 don't expire, so it's a one-time investment that stays on your transcript.",
      ],
      [
        "What does AZ-900 cover?",
        "Three skill areas: cloud concepts (25-30%), Azure architecture and services (35-40%), and Azure management and governance (30-35%). Every topic here links to the matching video in John Savill's free AZ-900 course.",
      ],
    ],
  },
  sc900: {
    path: "/microsoft-sc-900-practice-test",
    title: "Free Microsoft SC-900 Practice Test (Security, Compliance & Identity) | Cert900",
    description:
      "Free Microsoft SC-900 (Security, Compliance, and Identity Fundamentals) practice: original questions plus drag-and-drop and matching items in Microsoft's own formats, timed exam simulation scored to 1,000. Every topic links to a free John Savill video. No signup.",
    h1: "Free Microsoft SC-900 (Security, Compliance, and Identity) practice test",
    faq: [
      [
        "How many questions are on the SC-900 exam?",
        "SC-900 typically has 40 to 60 questions in about 45 minutes, mostly multiple choice with some drag-and-drop and matching. Passing requires 700 on a scale up to 1,000.",
      ],
      [
        "Is SC-900 worth taking?",
        "It is the standard entry point for Microsoft security, compliance, and identity. Fundamentals certifications don't expire, and it builds the vocabulary the role-based SC-200 and SC-300 exams assume.",
      ],
      [
        "What does SC-900 cover?",
        "Four areas: security, compliance, and identity concepts (10-15%), the capabilities of Microsoft Entra (25-30%), Microsoft security solutions (35-40%), and Microsoft compliance solutions (20-25%). Our drills track your accuracy in each separately.",
      ],
      [
        "Is this actually free?",
        "Yes. Every question, every interactive item, and the exam simulator are free with no account. Every topic links to the matching chapter of John Savill's free SC-900 study video.",
      ],
    ],
  },
  ccna: {
    path: "/cisco-ccna-practice-test",
    title: "Free Cisco CCNA 200-301 Practice Test | Cert900",
    description:
      "Free Cisco CCNA 200-301 practice: original questions plus simulated IOS configuration labs, network-diagram hotspots, matching, and ordering. Timed exam simulation. Every topic links to a free Jeremy's IT Lab video. No signup.",
    h1: "Free Cisco CCNA (200-301) practice test",
    faq: [
      [
        "How many questions are on the CCNA exam?",
        "The CCNA 200-301 is a 120-minute exam with roughly 90 to 120 items, mixing multiple choice, multiple response, and hands-on simulations (sims and simlets). Cisco does not publish the exact count or cut score; a scaled score around 825 of 1,000 is widely cited to pass.",
      ],
      [
        "Do I need a prerequisite for CCNA?",
        "No. CCNA has no formal prerequisites, though Cisco suggests about a year of hands-on networking experience. It is the standard associate-level networking certification.",
      ],
      [
        "What does CCNA 200-301 cover?",
        "Six domains: Network Fundamentals (20%), Network Access (20%), IP Connectivity (25%), IP Services (10%), Security Fundamentals (15%), and Automation and Programmability (10%). Our drills track your accuracy in each domain separately.",
      ],
      [
        "Is this actually free?",
        "Yes. Every question, every simulation, and the exam simulator are free with no account. Every topic links to the matching Day lesson in Jeremy's IT Lab's free CCNA 200-301 course.",
      ],
    ],
  },
  az104: {
    path: "/azure-administrator-az-104-practice-test",
    title: "Free Microsoft AZ-104 Practice Test (Azure Administrator) | Cert900",
    description:
      "Free Microsoft AZ-104 (Azure Administrator Associate) practice: original questions plus drag-and-drop and build-list items in Microsoft's own formats, timed exam simulation scored to 1,000. Every topic links to a free John Savill video. No signup.",
    h1: "Free Microsoft AZ-104 (Azure Administrator) practice test",
    faq: [
      [
        "How many questions are on the AZ-104 exam?",
        "AZ-104 typically has 40 to 60 questions in about 100 minutes, including multiple choice, multiple response, and drag-and-drop, sometimes with a case study. Passing requires 700 on a scale up to 1,000.",
      ],
      [
        "Do I need AZ-900 before AZ-104?",
        "No. AZ-900 (Fundamentals) is a helpful primer but is not required. AZ-104 is the associate-level exam and assumes hands-on Azure administration experience.",
      ],
      [
        "What does AZ-104 cover?",
        "Five areas: manage identities and governance (20-25%), implement and manage storage (15-20%), deploy and manage compute (20-25%), implement and manage virtual networking (15-20%), and monitor and maintain resources (10-15%). Our drills track your accuracy in each separately.",
      ],
      [
        "Is this actually free?",
        "Yes. Every question, every interactive item, and the exam simulator are free with no account. Every topic links to the matching chapter of John Savill's free AZ-104 study video.",
      ],
    ],
  },
  saa: {
    path: "/aws-solutions-architect-associate-practice-test",
    title: "Free AWS Solutions Architect Associate Practice Test (SAA-C03) | Cert900",
    description:
      "Free AWS Certified Solutions Architect Associate (SAA-C03) practice: original scenario questions in the real multiple-choice and multiple-response formats, timed exam simulation scored 100 to 1,000. Every topic links to a free video. No signup.",
    h1: "Free AWS Solutions Architect Associate (SAA-C03) practice test",
    faq: [
      [
        "How many questions are on the SAA-C03 exam?",
        "65 questions in 130 minutes: 50 scored plus 15 unscored. The exam uses multiple-choice and multiple-response questions only, and passing requires a scaled score of 720 on a 100 to 1,000 range.",
      ],
      [
        "How hard is SAA-C03 compared to Cloud Practitioner?",
        "Substantially harder. Where Cloud Practitioner tests cloud literacy, SAA-C03 tests designing real architectures: choosing between services for security, resilience, performance, and cost under scenario constraints.",
      ],
      [
        "What does SAA-C03 cover?",
        "Four domains: Design Secure Architectures (30%), Design Resilient Architectures (26%), Design High-Performing Architectures (24%), and Design Cost-Optimized Architectures (20%). Our drills track your accuracy in each separately.",
      ],
      [
        "Is this actually free?",
        "Yes. Every question and the exam simulator are free with no account. Every topic links into Andrew Brown's free SAA-C03 course on freeCodeCamp's YouTube channel.",
      ],
    ],
  },
  aif: {
    path: "/aws-ai-practitioner-practice-test",
    title: "Free AWS AI Practitioner Practice Test (AIF-C01) | Cert900",
    description:
      "Free AWS Certified AI Practitioner (AIF-C01) practice: original questions in the real formats (multiple response, ordering, matching), timed exam simulation scored 100 to 1,000. Every topic links to a free video. No signup.",
    h1: "Free AWS Certified AI Practitioner (AIF-C01) practice test",
    faq: [
      [
        "How many questions are on the AIF-C01 exam?",
        "65 questions in 90 minutes: 50 scored plus 15 unscored questions AWS evaluates for future exams. Formats include multiple choice, multiple response, ordering, and matching. Our simulator mirrors all four.",
      ],
      [
        "What score do I need to pass?",
        "AWS reports a scaled score from 100 to 1,000 with a minimum passing score of 700. Scoring is compensatory: you pass on the overall exam, not on each section.",
      ],
      [
        "Do I need AWS experience first?",
        "AWS recommends up to six months of exposure to AI and ML workloads on AWS. The target candidate uses AI services rather than builds models; no coding or data-science background is required.",
      ],
      [
        "Is this actually free?",
        "Yes. Every question, the exam simulator, and progress tracking are free with no account. Topic reviews link to Andrew Brown's free 15-hour AIF-C01 course on freeCodeCamp's YouTube channel.",
      ],
    ],
  },
  aplus: {
    path: "/comptia-a-plus-practice-test",
    title: "Free CompTIA A+ Practice Test (220-1201 & 220-1202) | Cert900",
    description: `Free CompTIA A+ practice tests for Core 1 (220-1201) and Core 2 (220-1202): ${APLUS.q} original questions, ${APLUS.pbq} performance-based questions, timed 90-minute exam simulation scored on the real 100 to 900 scale. No signup.`,
    h1: "Free CompTIA A+ practice test: Core 1 and Core 2",
    faq: [
      [
        "How many questions are on the real A+ exam?",
        "Each A+ core exam (220-1201 and 220-1202) has a maximum of 90 questions in 90 minutes, mixing multiple choice with performance-based questions. You need both cores to earn the A+ certification.",
      ],
      [
        "What score do I need to pass the A+?",
        "CompTIA scores on a 100 to 900 scale. Core 1 (220-1201) requires 675 and Core 2 (220-1202) requires 700. Our simulator uses the same scale so your practice scores read like the real thing.",
      ],
      [
        "Is this actually free?",
        `Yes. All ${APLUS.q} A+ questions, all ${APLUS.pbq} PBQs, and the full exam simulator are free with no account required. Progress saves in your browser; an optional sign-in syncs it across devices.`,
      ],
    ],
  },
  aplus1: {
    path: "/comptia-a-plus-core-1-practice-test",
    title: "Free CompTIA A+ Core 1 Practice Test (220-1201) | Cert900",
    description:
      "Free CompTIA A+ Core 1 (220-1201) practice: original questions on hardware, mobile devices, networking, virtualization, and troubleshooting, plus simulated PBQs, timed 90-minute exam simulation scored on the real 100 to 900 scale. No signup.",
    h1: "Free CompTIA A+ Core 1 (220-1201) practice test",
    faq: [
      [
        "How many questions are on the 220-1201 exam?",
        "Core 1 has a maximum of 90 questions in 90 minutes, mixing multiple choice with performance-based questions. The passing score is 675 on a 100 to 900 scale.",
      ],
      [
        "What does 220-1201 cover?",
        "Five domains: mobile devices, networking, hardware, virtualization and cloud computing, and hardware and network troubleshooting. Hardware and troubleshooting carry the most weight, so hands-on familiarity matters.",
      ],
      [
        "Should I take Core 1 or Core 2 first?",
        "Most candidates sit Core 1 (220-1201) first because its hardware and networking material underpins Core 2's operating system and security topics, but CompTIA allows either order. You need both to earn the A+.",
      ],
      [
        "Is this actually free?",
        "Yes. Every Core 1 question, every PBQ, and the full exam simulator are free with no account. Every topic links to the matching video in Professor Messer's free 220-1201 course.",
      ],
    ],
  },
  aplus2: {
    path: "/comptia-a-plus-core-2-practice-test",
    title: "Free CompTIA A+ Core 2 Practice Test (220-1202) | Cert900",
    description:
      "Free CompTIA A+ Core 2 (220-1202) practice: original questions on operating systems, security, software troubleshooting, and operational procedures, plus simulated PBQs, timed 90-minute exam simulation scored on the real 100 to 900 scale. No signup.",
    h1: "Free CompTIA A+ Core 2 (220-1202) practice test",
    faq: [
      [
        "How many questions are on the 220-1202 exam?",
        "Core 2 has a maximum of 90 questions in 90 minutes, mixing multiple choice with performance-based questions. The passing score is 700 on a 100 to 900 scale, slightly higher than Core 1's 675.",
      ],
      [
        "What does 220-1202 cover?",
        "Four domains: operating systems, security, software troubleshooting, and operational procedures. Windows administration and security together dominate the exam, so command-line and settings fluency pay off.",
      ],
      [
        "Do I need to pass Core 1 before Core 2?",
        "No. CompTIA lets you take the two core exams in either order; you just need to pass both within the same series to earn the A+ certification.",
      ],
      [
        "Is this actually free?",
        "Yes. Every Core 2 question, every PBQ, and the full exam simulator are free with no account. Every topic links to the matching video in Professor Messer's free 220-1202 course.",
      ],
    ],
  },
  nplus: {
    path: "/network-plus-practice-test",
    title: "Free CompTIA Network+ Practice Test (N10-009) | Cert900",
    description: `Free CompTIA Network+ N10-009 practice: ${NPLUS.q} original questions, ${NPLUS.pbq} performance-based questions including simulated CLI and network diagrams, timed exam simulation on the 100 to 900 scale. No signup.`,
    h1: "Free CompTIA Network+ (N10-009) practice test",
    faq: [
      [
        "How many questions are on the Network+ exam?",
        "The N10-009 exam has a maximum of 90 questions in 90 minutes, combining multiple choice and performance-based questions. The passing score is 720 on a 100 to 900 scale.",
      ],
      [
        "Do I need A+ before Network+?",
        "No, A+ is recommended but not required. If you already work with networks or are comfortable with hardware basics, starting at Network+ is common and completely allowed.",
      ],
      [
        "What topics does N10-009 cover?",
        "Five domains: networking concepts (23%), network implementation (20%), network operations (19%), network security (14%), and network troubleshooting (24%). Our drills track your accuracy in each domain separately.",
      ],
    ],
  },
  pbq: {
    path: "/comptia-pbq-practice",
    title: "Free CompTIA PBQ Practice: Simulated Performance-Based Questions | Cert900",
    description: `Practice CompTIA performance-based questions free: simulated terminals, router config panels, network diagram hotspots, and drag-to-connect cabling for A+ and Network+. ${COMPTIA_PBQ.pbq} PBQs, no signup.`,
    h1: "CompTIA PBQ practice: real simulations, free",
    faq: [
      [
        "What is a PBQ?",
        "A performance-based question asks you to do a task instead of picking an answer: type commands in a terminal, configure a router, or drag components into place. CompTIA uses them to test hands-on skill.",
      ],
      [
        "How many PBQs are on the exam?",
        "CompTIA does not publish an exact count, but most candidates see roughly 3 to 6, usually at the start of the exam. They take longer than multiple choice, so practicing the format matters.",
      ],
      [
        "Do PBQs get partial credit?",
        "Yes. CompTIA confirms PBQs may be scored with partial credit. Our simulator grades the same way: complete 3 of 4 objectives and you earn 75% for that question.",
      ],
      [
        "Should I do PBQs first or skip them?",
        "Common advice is to flag PBQs and return after finishing multiple choice, so the timer never strands you. Practice both ways here and see which suits you; the simulator has the same flag-and-return controls.",
      ],
    ],
  },
}

interface SampleQ {
  code: string
  stem: string
  options: string[]
  answer: number
  why: string
}

function Sample({ q, n }: { q: SampleQ; n: number }) {
  return (
    <div className="rounded-lg border bg-card p-5">
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        Sample question {n} · {q.code}
      </p>
      <p className="mt-2 font-medium leading-snug">{q.stem}</p>
      <ol className="mt-3 flex flex-col gap-1.5 text-sm">
        {q.options.map((o, i) => (
          <li key={i} className="flex items-start gap-2.5 rounded-md border px-3 py-2">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border font-mono text-[11px] font-semibold">
              {"ABCD"[i]}
            </span>
            {o}
          </li>
        ))}
      </ol>
      <details className="group mt-3">
        <summary className="cursor-pointer list-none font-medium text-brand underline-offset-4 hover:underline [&::-webkit-details-marker]:hidden">
          Show answer and explanation
        </summary>
        <div className="mt-2 rounded-md border border-success/50 bg-success/10 p-3 text-sm">
          <p className="flex items-center gap-1.5 font-semibold text-success">
            <Check className="size-4" strokeWidth={2.5} /> {"ABCD"[q.answer]}. {q.options[q.answer]}
          </p>
          <p className="text-muted-foreground mt-1">{q.why}</p>
        </div>
      </details>
    </div>
  )
}

function DomainTable({ examId }: { examId: string }) {
  const exam = EXAM_META[examId]
  return (
    <div className="overflow-x-auto">
      <table className="mt-3 w-full min-w-105 border-collapse text-sm">
        <thead>
          <tr className="border-b text-left">
            <th className="py-2 pr-4 font-semibold">{exam.code} domain</th>
            <th className="py-2 font-mono font-semibold">Exam weight</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(exam.domains).map((dk) => (
            <tr key={dk} className="border-b">
              <td className="py-2 pr-4">{exam.domains[Number(dk)]}</td>
              <td className="py-2 font-mono tabular-nums">{Math.round((exam.examSplit[Number(dk)] ?? 0) * 100)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function GuideShell({ meta, children }: { meta: GuideMeta; children: React.ReactNode }) {
  return (
    <main className="ambient ambient-still mx-auto max-w-3xl" data-testid="guide-page">
      <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">{meta.h1}</h1>
      <div className="mt-6 flex flex-col gap-10">{children}</div>
      <section className="mt-12">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Common questions</h2>
        <div className="mt-4 border-t">
          {meta.faq.map(([q, a]) => (
            <details key={q} className="group border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-base font-semibold [&::-webkit-details-marker]:hidden">
                {q}
                <ArrowRight className="size-4 shrink-0 text-brand transition-transform duration-200 group-open:rotate-90" strokeWidth={2.5} />
              </summary>
              <p className="text-muted-foreground -mt-1 pb-4 text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Crawlable internal links: guide -> sibling guides + home. Real <a>
          hrefs (unlike the in-app CTA buttons) so search crawlers can walk the
          whole guide set from any single page. */}
      <section className="mt-12">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">More free practice tests</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {Object.values(GUIDE_META)
            .filter((g) => g.path !== meta.path)
            .map((g) => (
              <li key={g.path}>
                <a href={g.path} className="text-brand underline-offset-4 hover:underline">
                  {g.title.replace(" | Cert900", "")}
                </a>
              </li>
            ))}
        </ul>
        <p className="mt-4 text-sm">
          <a href="/" className="text-brand underline-offset-4 hover:underline">
            Back to all cert900 exams
          </a>
        </p>
      </section>
    </main>
  )
}

function Cta({ label, onGo, testid }: { label: string; onGo: () => void; testid: string }) {
  return (
    <button
      onClick={onGo}
      data-testid={testid}
      className="pressable inline-flex cursor-pointer items-center gap-2 self-start rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-[transform,background-color] duration-200 hover:bg-primary/90"
    >
      {label}
      <ArrowRight className="size-4" strokeWidth={2} />
    </button>
  )
}

export function APlusGuide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.aplus
  const c1 = EXAM_META["220-1201"]
  const c2 = EXAM_META["220-1202"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          The CompTIA A+ is two exams: Core 1 (220-1201) covers hardware, mobile devices, networking basics,
          virtualization, and troubleshooting; Core 2 (220-1202) covers operating systems, security, software
          troubleshooting, and operational procedures. This site gives you {c1.questionCount + c2.questionCount} original
          practice questions and {c1.pbqCount + c2.pbqCount} performance-based questions across both cores, free and
          without an account.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Practice two ways: adaptive drills that repeat your weak topics more often and explain every answer, or a full
          exam simulation with {c1.examMC} questions plus {c1.examPBQ} PBQs in {c1.examMinutes} minutes, scored on the
          real 100 to 900 scale. Every topic links to the matching free Professor Messer video.
        </p>
        <Cta label="Start the free A+ practice test" onGo={() => onStart("220-1201")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What each core exam covers</h2>
        <DomainTable examId="220-1201" />
        <DomainTable examId="220-1202" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: up to 90 questions per core, 90 minutes each, passing score 675 for Core 1 and 700 for Core 2.
          Studying one core at a time? There is a dedicated{" "}
          <a href={GUIDE_META.aplus1.path} className="text-brand underline-offset-4 hover:underline">
            Core 1 (220-1201) practice test
          </a>{" "}
          and{" "}
          <a href={GUIDE_META.aplus2.path} className="text-brand underline-offset-4 hover:underline">
            Core 2 (220-1202) practice test
          </a>{" "}
          page for each.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "220-1201 · Hardware", stem: "A technician is upgrading a laptop's mechanical hard drive to a faster component that has no moving parts. Which drive is being installed?", options: ["A second HDD", "An optical drive", "An SSD", "A power supply"], answer: 2, why: "A solid-state drive (SSD) has no moving parts, is faster and more shock-resistant than an HDD, and is a common laptop upgrade." }} />
        <Sample n={2} q={{ code: "220-1201 · Mobile Devices", stem: "An organization needs to enforce passcodes and remotely wipe company smartphones if they are lost. Which solution provides this?", options: ["DHCP", "MDM", "NAT", "RAID"], answer: 1, why: "Mobile device management (MDM) centrally enforces policy, deploys apps, and can remotely lock or wipe enrolled devices." }} />
        <Sample n={3} q={{ code: "220-1202 · Operating Systems", stem: "Which partition style must be used on a boot drive larger than 2 TB with a UEFI system?", options: ["MBR", "Dynamic", "Extended", "GPT"], answer: 3, why: "GPT (GUID Partition Table) supports drives over 2 TB and is required for UEFI booting; MBR is limited to 2 TB and 4 primary partitions." }} />
        <p className="text-muted-foreground text-sm">
          The full bank has {c1.questionCount} Core 1 and {c2.questionCount} Core 2 questions, weighted to the
          official domain split, plus simulated PBQs: terminals, configuration panels, and drag-to-connect cabling.
        </p>
        <Cta label="Practice all of them free" onGo={() => onStart("220-1201")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function APlusCore1Guide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.aplus1
  const ex = EXAM_META["220-1201"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          CompTIA A+ Core 1 (220-1201) covers the hands-on half of the A+: hardware, mobile devices, networking
          fundamentals, virtualization and cloud basics, and hardware and network troubleshooting. This site gives you{" "}
          {ex.questionCount} original Core 1 practice questions and {ex.pbqCount} performance-based questions, free and
          without an account.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Practice two ways: adaptive drills that repeat your weak topics more often and explain every answer, or a
          full exam simulation with {ex.examMC} questions plus {ex.examPBQ} PBQs in {ex.examMinutes} minutes, scored on
          the real 100 to 900 scale with Core 1's actual 675 pass line. Every topic links to the matching free
          Professor Messer video.
        </p>
        <Cta label="Start the free Core 1 practice test" onGo={() => onStart("220-1201")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What 220-1201 covers</h2>
        <DomainTable examId="220-1201" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: up to 90 questions, 90 minutes, passing score 675 on the 100 to 900 scale. Preparing for
          both cores? The combined{" "}
          <a href={GUIDE_META.aplus.path} className="text-brand underline-offset-4 hover:underline">
            A+ practice test
          </a>{" "}
          page covers Core 1 and Core 2 together, and Core 2 has its own{" "}
          <a href={GUIDE_META.aplus2.path} className="text-brand underline-offset-4 hover:underline">
            220-1202 practice test
          </a>{" "}
          page.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "220-1201 · Hardware", stem: "A technician is upgrading a laptop's mechanical hard drive to a faster component that has no moving parts. Which drive is being installed?", options: ["A second HDD", "An optical drive", "An SSD", "A power supply"], answer: 2, why: "A solid-state drive (SSD) has no moving parts, is faster and more shock-resistant than an HDD, and is a common laptop upgrade." }} />
        <Sample n={2} q={{ code: "220-1201 · Mobile Devices", stem: "An organization needs to enforce passcodes and remotely wipe company smartphones if they are lost. Which solution provides this?", options: ["DHCP", "MDM", "NAT", "RAID"], answer: 1, why: "Mobile device management (MDM) centrally enforces policy, deploys apps, and can remotely lock or wipe enrolled devices." }} />
        <Sample n={3} q={{ code: "220-1201 · Networking", stem: "A technician needs to connect a workstation to a network jack 80 meters away. Which cable type fits within spec?", options: ["Cat 6 twisted pair", "USB 3.0", "HDMI", "Thunderbolt"], answer: 0, why: "Twisted-pair Ethernet like Cat 6 is rated to 100 meters per run; USB, HDMI, and Thunderbolt are limited to a few meters." }} />
        <p className="text-muted-foreground text-sm">
          The full Core 1 bank is weighted to the official domain split and includes simulated PBQs: terminals,
          configuration panels, and drag-to-connect cabling.
        </p>
        <Cta label="Practice all of them free" onGo={() => onStart("220-1201")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function APlusCore2Guide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.aplus2
  const ex = EXAM_META["220-1202"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          CompTIA A+ Core 2 (220-1202) covers the software half of the A+: operating systems, security, software
          troubleshooting, and operational procedures. This site gives you {ex.questionCount} original Core 2 practice
          questions and {ex.pbqCount} performance-based questions, free and without an account.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Practice two ways: adaptive drills that repeat your weak topics more often and explain every answer, or a
          full exam simulation with {ex.examMC} questions plus {ex.examPBQ} PBQs in {ex.examMinutes} minutes, scored on
          the real 100 to 900 scale with Core 2's actual 700 pass line. Every topic links to the matching free
          Professor Messer video.
        </p>
        <Cta label="Start the free Core 2 practice test" onGo={() => onStart("220-1202")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What 220-1202 covers</h2>
        <DomainTable examId="220-1202" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: up to 90 questions, 90 minutes, passing score 700 on the 100 to 900 scale. Preparing for
          both cores? The combined{" "}
          <a href={GUIDE_META.aplus.path} className="text-brand underline-offset-4 hover:underline">
            A+ practice test
          </a>{" "}
          page covers Core 1 and Core 2 together, and Core 1 has its own{" "}
          <a href={GUIDE_META.aplus1.path} className="text-brand underline-offset-4 hover:underline">
            220-1201 practice test
          </a>{" "}
          page.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "220-1202 · Operating Systems", stem: "Which partition style must be used on a boot drive larger than 2 TB with a UEFI system?", options: ["MBR", "Dynamic", "Extended", "GPT"], answer: 3, why: "GPT (GUID Partition Table) supports drives over 2 TB and is required for UEFI booting; MBR is limited to 2 TB and 4 primary partitions." }} />
        <Sample n={2} q={{ code: "220-1202 · Security", stem: "A user reports pop-ups claiming their PC is infected and urging them to call a support number. What kind of threat is this?", options: ["A scareware social-engineering scam", "A failing hard drive", "A Windows Update prompt", "A DHCP misconfiguration"], answer: 0, why: "Fake infection warnings with a phone number are scareware, pressuring victims into paying or granting remote access. Legitimate OS messages never include support phone numbers." }} />
        <Sample n={3} q={{ code: "220-1202 · Software Troubleshooting", stem: "Windows boots to a black screen after a driver update. Which startup option lets the technician load Windows with only essential drivers to remove it?", options: ["Safe Mode", "BitLocker recovery", "Disk Cleanup", "Fast startup"], answer: 0, why: "Safe Mode loads a minimal driver set, letting you roll back or uninstall a bad driver. BitLocker recovery handles encryption keys, not driver failures." }} />
        <p className="text-muted-foreground text-sm">
          The full Core 2 bank is weighted to the official domain split and includes simulated PBQs: terminals,
          configuration panels, and hardening screens.
        </p>
        <Cta label="Practice all of them free" onGo={() => onStart("220-1202")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function AifGuide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.aif
  const ex = EXAM_META["aif-c01"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          The AWS Certified AI Practitioner (AIF-C01) validates a foundational understanding of AI, machine learning,
          and generative AI on AWS: what the technologies are, when to apply them, and how to use them responsibly and
          securely. This site gives you {ex.questionCount} original practice questions plus {ex.pbqCount} interactive
          items in the exam's own formats, free and without an account.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          AIF-C01 is not just multiple choice: the real exam also uses multiple-response ("Select TWO"), ordering, and
          matching questions. Our simulator reproduces all four formats, runs {ex.examMinutes} timed minutes, and scores
          on the real 100 to 1,000 scale with the 700 pass line. Every topic links into the free 15-hour freeCodeCamp
          course at the matching chapter.
        </p>
        <Cta label="Start the free AIF-C01 practice test" onGo={() => onStart("aif-c01")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What AIF-C01 covers</h2>
        <DomainTable examId="aif-c01" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: 65 questions (50 scored, 15 unscored), 90 minutes, scaled 100 to 1,000, passing score 700.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "AIF-C01 · Generative AI", stem: "A chatbot confidently describes a product feature that has never existed. What is this failure mode called?", options: ["Overfitting", "Hallucination", "Data drift", "Underfitting"], answer: 1, why: "Hallucination is a generative model producing fluent, confident output that is factually wrong; it is a core limitation the exam expects you to recognize." }} />
        <Sample n={2} q={{ code: "AIF-C01 · Foundation Models", stem: "A support assistant must answer from internal policy documents that change weekly, without retraining the model. Which approach fits best?", options: ["Fine-tuning", "Continued pre-training", "Retrieval-Augmented Generation", "Raising the temperature"], answer: 2, why: "RAG retrieves current documents at query time and grounds the response in them; fine-tuning and pre-training bake knowledge into weights and would need constant retraining." }} />
        <Sample n={3} q={{ code: "AIF-C01 · Security & Governance", stem: "A compliance officer needs AWS's SOC and ISO audit reports for a vendor review. Which service provides them on demand?", options: ["AWS Config", "Amazon Inspector", "AWS CloudTrail", "AWS Artifact"], answer: 3, why: "AWS Artifact is the self-service portal for AWS compliance reports and agreements; Config tracks resource configuration and CloudTrail records API activity." }} />
        <p className="text-muted-foreground text-sm">
          The full bank is weighted to the official domain split and includes multiple-response, ordering, and matching
          items just like the real exam.
        </p>
        <Cta label="Practice all of them free" onGo={() => onStart("aif-c01")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function ClfGuide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.clf
  const ex = EXAM_META["clf-c02"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          The AWS Certified Cloud Practitioner (CLF-C02) validates cloud literacy: what the cloud is good for, how AWS
          secures and prices it, and which core services solve which problems. This site gives you{" "}
          {ex.questionCount} original practice questions in the exam's real formats, free and without an account.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The real exam is multiple choice and multiple response only, and so is our simulator: {ex.examMC} questions in{" "}
          {ex.examMinutes} timed minutes, scored on the real 100 to 1,000 scale with the 700 pass line. Every topic
          links into the free 13-hour freeCodeCamp course at the matching chapter.
        </p>
        <Cta label="Start the free CLF-C02 practice test" onGo={() => onStart("clf-c02")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What CLF-C02 covers</h2>
        <DomainTable examId="clf-c02" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: 65 questions (50 scored, 15 unscored), 90 minutes, scaled 100 to 1,000, passing score 700.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "CLF-C02 · Security", stem: "A company wants continuous monitoring of its AWS accounts for malicious activity and unauthorized behavior, using a managed threat-detection service. Which service fits?", options: ["AWS WAF", "Amazon Inspector", "AWS Shield", "Amazon GuardDuty"], answer: 3, why: "GuardDuty analyzes CloudTrail, VPC Flow Logs, and DNS logs for threats. WAF filters web requests, Inspector scans workloads for vulnerabilities, and Shield mitigates DDoS." }} />
        <Sample n={2} q={{ code: "CLF-C02 · Billing", stem: "A workload runs steadily around the clock for the next three years. Which purchasing option offers the largest discount over on-demand?", options: ["Spot Instances", "A three-year Savings Plan", "A second on-demand instance", "The AWS Free Tier"], answer: 1, why: "Long-term commitments trade flexibility for the deepest discounts on steady workloads. Spot is cheap but interruptible, which doesn't suit an always-on system." }} />
        <Sample n={3} q={{ code: "CLF-C02 · Cloud Concepts", stem: "Which advantage of cloud computing lets a startup provision resources in minutes and stop paying the moment it deletes them?", options: ["Data sovereignty", "Vendor lock-in", "Pay-as-you-go agility", "Colocation"], answer: 2, why: "On-demand self-service plus consumption-based billing means capacity appears in minutes and costs stop when usage stops - a core cloud value proposition." }} />
        <Cta label="Practice all of them free" onGo={() => onStart("clf-c02")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function Az900Guide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.az900
  const ex = EXAM_META["az-900"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          Microsoft Azure Fundamentals (AZ-900) proves you can describe cloud concepts, core Azure architecture and
          services, and the tools Azure gives you for management and governance. This site gives you{" "}
          {ex.questionCount} original questions plus {ex.pbqCount} drag-and-drop and build-list items in
          Microsoft's own interactive formats, free and without an account.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The simulator runs {ex.examMinutes} timed minutes on the real scale (pass line 700 of 1,000), grades
          interactive items all-or-nothing the way Microsoft does, and links every topic to the matching video in John
          Savill's free per-topic AZ-900 course.
        </p>
        <Cta label="Start the free AZ-900 practice test" onGo={() => onStart("az-900")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What AZ-900 covers</h2>
        <DomainTable examId="az-900" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: typically 40-60 questions, about 45 minutes, scaled to 1,000 with a 700 pass line. The
          certification never expires.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "AZ-900 · Cloud Concepts", stem: "A retailer wants to keep its steady baseline workloads on-premises but burst into Azure during holiday traffic spikes. Which cloud model is this?", options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"], answer: 2, why: "Combining on-premises infrastructure with public cloud capacity, and moving load between them, is the defining hybrid pattern." }} />
        <Sample n={2} q={{ code: "AZ-900 · Architecture & Services", stem: "An auditor asks which construct guarantees that resources in one Azure datacenter failing won't take down the copies running in another datacenter in the same region. What provides this?", options: ["Resource groups", "Availability zones", "Region pairs", "Management groups"], answer: 1, why: "Availability zones are physically separate datacenters within a region; spreading instances across them protects against a single-datacenter failure. Region pairs protect against whole-region loss." }} />
        <Sample n={3} q={{ code: "AZ-900 · Management & Governance", stem: "A governance lead must prevent any team from creating virtual machines in unapproved regions, across every current and future subscription. Which tool enforces this?", options: ["Role-based access control", "Resource locks", "Azure Advisor", "Management-group Azure Policy"], answer: 3, why: "Policy evaluates and blocks non-compliant deployments, and assigning it at a management group cascades the rule to every subscription beneath it. RBAC controls who can act, not what configurations are allowed." }} />
        <Cta label="Practice all of them free" onGo={() => onStart("az-900")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function Sc900Guide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.sc900
  const ex = EXAM_META["sc-900"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          Microsoft SC-900 (Security, Compliance, and Identity Fundamentals) proves you can describe core security and
          compliance concepts and the capabilities of Microsoft Entra, Microsoft security solutions, and Microsoft
          compliance solutions. This site gives you {ex.questionCount} original questions plus {ex.pbqCount}{" "}
          drag-and-drop and matching items in Microsoft's own interactive formats, free and without an account.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The simulator runs {ex.examMinutes} timed minutes on the real scale (pass line 700 of 1,000), grades
          interactive items all-or-nothing the way Microsoft does, and links every topic to the matching chapter of John
          Savill's free SC-900 study video.
        </p>
        <Cta label="Start the free SC-900 practice test" onGo={() => onStart("sc-900")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What SC-900 covers</h2>
        <DomainTable examId="sc-900" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: typically 40-60 questions, about 45 minutes, scaled to 1,000 with a 700 pass line. The
          certification never expires.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "SC-900 · Security concepts", stem: "Which Zero Trust guiding principle means you authenticate and authorize on every available signal for each request, rather than trusting anything by default?", options: ["Verify explicitly", "Assume breach", "Use least privilege access", "Defense in depth"], answer: 0, why: "Verify explicitly is the Zero Trust principle of always authenticating and authorizing on all available signals. Assume breach limits blast radius, and least privilege restricts access scope." }} />
        <Sample n={2} q={{ code: "SC-900 · Microsoft Entra", stem: "An administrator wants to require multifactor authentication only when a user signs in from an unmanaged device. Which Microsoft Entra feature enforces that?", options: ["Access reviews", "Conditional Access", "Privileged Identity Management", "Microsoft Entra Connect"], answer: 1, why: "Conditional Access evaluates signals like device state and applies controls such as requiring MFA. PIM grants just-in-time admin roles, and access reviews recertify access over time." }} />
        <Sample n={3} q={{ code: "SC-900 · Compliance solutions", stem: "Which Microsoft Purview capability blocks users from emailing documents that contain credit card numbers to external recipients?", options: ["Sensitivity labels", "eDiscovery", "Data loss prevention", "Records management"], answer: 2, why: "Data loss prevention inspects content and blocks or restricts sharing of sensitive information. Sensitivity labels classify and protect content, and eDiscovery finds content for legal cases." }} />
        <Cta label="Practice all of them free" onGo={() => onStart("sc-900")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function CcnaGuide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.ccna
  const ex = EXAM_META["ccna-200-301"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          The Cisco CCNA (200-301) is the foundational networking certification: it covers network fundamentals, network
          access, IP connectivity, IP services, security fundamentals, and automation and programmability. This site
          gives you {ex.questionCount} original practice questions and {ex.pbqCount} hands-on simulations for it, free
          and without an account.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          CCNA leans hard on the command line and applied skills: subnetting under time, reading show output, and
          configuring VLANs, OSPF, ACLs, and NAT. The simulation lab here reproduces those formats, including a device
          terminal that accepts real IOS commands and clickable network diagrams. Every topic links to the matching free
          Jeremy's IT Lab video.
        </p>
        <Cta label="Start the free CCNA practice test" onGo={() => onStart("ccna-200-301")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What CCNA 200-301 covers</h2>
        <DomainTable examId="ccna-200-301" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: 120 minutes, roughly 90 to 120 items including sims and simlets. A scaled score near 825 of
          1,000 is widely cited to pass; Cisco does not publish an official cut score.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "200-301 · Network Fundamentals", stem: "A /27 subnet provides how many usable host addresses?", options: ["62", "30", "32", "14"], answer: 1, why: "A /27 leaves 5 host bits, so 2^5 = 32 addresses, minus the network and broadcast addresses = 30 usable hosts." }} />
        <Sample n={2} q={{ code: "200-301 · IP Connectivity", stem: "Two directly connected OSPFv2 routers are stuck in the EXSTART/EXCHANGE state. Which mismatch most commonly causes this?", options: ["Different OSPF process IDs", "An MTU mismatch on the link", "Mismatched interface descriptions", "Different device hostnames"], answer: 1, why: "An MTU mismatch stalls OSPF in EXSTART/EXCHANGE. Process IDs are locally significant, and hello or dead timer mismatches stop the neighbors from ever reaching the two-way state." }} />
        <Sample n={3} q={{ code: "200-301 · Security Fundamentals", stem: "Following Cisco's design guidance, where should a standard ACL be applied?", options: ["Close to the source", "Inbound on every interface", "Close to the destination", "Only on the core router"], answer: 2, why: "A standard ACL matches on source address only, so placing it close to the destination avoids unintentionally filtering traffic elsewhere. Extended ACLs go close to the source." }} />
        <Cta label="Practice all of them free" onGo={() => onStart("ccna-200-301")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function Az104Guide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.az104
  const ex = EXAM_META["az-104"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          Microsoft AZ-104 (Azure Administrator Associate) validates that you can manage Azure identities and
          governance, storage, compute resources, virtual networking, and monitoring. This site gives you{" "}
          {ex.questionCount} original practice questions plus {ex.pbqCount} drag-and-drop and matching items in
          Microsoft's own interactive formats, free and without an account.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The simulator runs {ex.examMinutes} timed minutes on the real scale (pass line 700 of 1,000), grades
          interactive items all-or-nothing the way Microsoft does, and links every topic to the matching chapter of John
          Savill's free AZ-104 study video.
        </p>
        <Cta label="Start the free AZ-104 practice test" onGo={() => onStart("az-104")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What AZ-104 covers</h2>
        <DomainTable examId="az-104" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: typically 40-60 questions, about 100 minutes, scaled to 1,000 with a 700 pass line. Hands-on
          Azure administration experience is assumed.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "AZ-104 · Identities & governance", stem: "An administrator must let a team manage all resources in a resource group but not grant access to others. Which built-in role fits best?", options: ["Owner", "Contributor", "Reader", "User Access Administrator"], answer: 1, why: "Contributor can create and manage all resource types but cannot grant access to others. Owner can grant access, and User Access Administrator only manages access assignments." }} />
        <Sample n={2} q={{ code: "AZ-104 · Storage", stem: "A workload needs its data to survive a full Azure region failure and allow read access to the replica at all times. Which storage redundancy option meets this?", options: ["RA-GRS", "GRS", "ZRS", "LRS"], answer: 0, why: "RA-GRS replicates to a paired secondary region and allows reads from the secondary at any time. GRS replicates but the secondary is not readable until failover; ZRS and LRS stay within one region." }} />
        <Sample n={3} q={{ code: "AZ-104 · Virtual networking", stem: "Which Azure service lets an administrator connect to a VM over RDP or SSH without assigning the VM a public IP address?", options: ["VPN Gateway", "Public IP address", "Azure Bastion", "Application Gateway"], answer: 2, why: "Azure Bastion provides browser-based RDP and SSH to VMs over TLS using the VM's private IP, so no public IP is needed on the VM itself." }} />
        <Cta label="Practice all of them free" onGo={() => onStart("az-104")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function SaaGuide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.saa
  const ex = EXAM_META["saa-c03"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          The AWS Certified Solutions Architect - Associate (SAA-C03) validates that you can design secure, resilient,
          high-performing, and cost-optimized architectures on AWS. This site gives you {ex.questionCount} original
          scenario questions in the exam's real formats, free and without an account.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The real exam is multiple choice and multiple response only, and so is our simulator: {ex.examMC} questions in{" "}
          {ex.examMinutes} timed minutes, scored on the real 100 to 1,000 scale with the 720 pass line. Every topic links
          into Andrew Brown's free freeCodeCamp course at the matching chapter.
        </p>
        <Cta label="Start the free SAA-C03 practice test" onGo={() => onStart("saa-c03")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What SAA-C03 covers</h2>
        <DomainTable examId="saa-c03" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: 65 questions (50 scored, 15 unscored), 130 minutes, scaled 100 to 1,000, passing score 720.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "SAA-C03 · Design Resilient", stem: "A critical MySQL database on Amazon RDS must fail over automatically to a standby if the primary instance fails, with no application code changes. What should the architect enable?", options: ["RDS Multi-AZ", "An RDS read replica", "DynamoDB global tables", "An EC2 Auto Scaling group"], answer: 0, why: "RDS Multi-AZ keeps a synchronous standby and fails over automatically behind the same endpoint. A read replica is for read scaling and requires a manual promotion." }} />
        <Sample n={2} q={{ code: "SAA-C03 · Design Cost-Optimized", stem: "Compliance data must be kept for seven years, is almost never accessed, and a retrieval time of up to 12 hours is acceptable. Which S3 storage class is most cost-effective?", options: ["S3 Standard-IA", "S3 Glacier Deep Archive", "S3 Standard", "S3 Glacier Instant Retrieval"], answer: 1, why: "Glacier Deep Archive is the lowest-cost class for long-term archives where multi-hour retrieval is acceptable. Standard-IA and Instant Retrieval cost far more for rarely accessed data." }} />
        <Sample n={3} q={{ code: "SAA-C03 · Design Resilient", stem: "A web tier must hand image-processing jobs to a fleet of workers so a spike in uploads never overwhelms them. Which service decouples the tiers with the least effort?", options: ["Amazon SNS", "Amazon Kinesis Data Streams", "Amazon SQS", "AWS Step Functions"], answer: 2, why: "An SQS queue buffers jobs so workers pull at their own pace, absorbing spikes. SNS is pub/sub fan-out with no buffering, and Kinesis targets high-throughput streaming analytics." }} />
        <Cta label="Practice all of them free" onGo={() => onStart("saa-c03")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function NPlusGuide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.nplus
  const nx = EXAM_META["n10-009"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          The CompTIA Network+ (N10-009) tests networking concepts, implementation, operations, security, and
          troubleshooting. This site gives you {nx.questionCount} original practice questions and {nx.pbqCount} performance-based
          questions for it, free and without an account: adaptive drills with an explanation after every answer, and a
          full {nx.examMinutes}-minute exam simulation with {nx.examMC} questions plus {nx.examPBQ} PBQs on the real 100
          to 900 scale.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Network+ leans hard on applied skills: reading topology diagrams, knowing ports cold, and working subnetting
          under time. The PBQ lab here simulates those formats, including a command-line terminal and clickable network
          diagrams. Every topic links to the matching free Professor Messer video.
        </p>
        <Cta label="Start the free Network+ practice test" onGo={() => onStart("n10-009")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What N10-009 covers</h2>
        <DomainTable examId="n10-009" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: up to 90 questions, 90 minutes, passing score 720 on the 100 to 900 scale.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "N10-009 · Concepts", stem: "Which OSI layer is responsible for logical addressing and routing between different networks?", options: ["Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)", "Layer 7 (Application)"], answer: 1, why: "Layer 3, the Network layer, handles logical (IP) addressing and routing between networks." }} />
        <Sample n={2} q={{ code: "N10-009 · Ports", stem: "Which port does HTTPS use for encrypted web traffic?", options: ["80", "22", "443", "25"], answer: 2, why: "HTTPS uses TCP port 443; HTTP uses port 80." }} />
        <Sample n={3} q={{ code: "N10-009 · Standards", stem: "Which Ethernet standard provides 1 Gbps over twisted-pair copper?", options: ["10BASE-T", "100BASE-TX", "10GBASE-SR", "1000BASE-T"], answer: 3, why: "1000BASE-T delivers 1 Gbps over Cat 5e or better copper up to 100 meters." }} />
        <Cta label={`Practice all ${NPLUS.q} free`} onGo={() => onStart("n10-009")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function SecplusGuide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.secplus
  const sx = EXAM_META["sy0-701"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          The CompTIA Security+ (SY0-701) is the standard entry-level security certification: it covers core security
          concepts, threats and mitigations, security architecture, day-to-day operations, and governance. This site
          gives you {sx.questionCount} original practice questions and {sx.pbqCount} performance-based questions
          for it, free and without an account.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Practice two ways: adaptive drills that repeat your weak topics more often and explain every answer, or a full
          {" "}{sx.examMinutes}-minute exam simulation with {sx.examMC} questions plus {sx.examPBQ} PBQs, scored on the
          real 100 to 900 scale. The PBQ lab simulates the exam's hands-on formats: hardening configuration panels,
          incident-response ordering, and clickable network diagrams. Every topic links to the matching free Professor
          Messer video.
        </p>
        <Cta label="Start the free Security+ practice test" onGo={() => onStart("sy0-701")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What SY0-701 covers</h2>
        <DomainTable examId="sy0-701" />
        <p className="text-muted-foreground mt-3 text-sm">
          Real exam facts: up to 90 questions, 90 minutes, passing score 750 on the 100 to 900 scale. CompTIA recommends
          Network+ and about two years of security-focused IT administration.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "SY0-701 · General Security Concepts", stem: "A company posts warning signs and installs visible cameras at its entrances to discourage tailgating. Which control type do these represent?", options: ["Preventive", "Deterrent", "Corrective", "Compensating"], answer: 1, why: "A deterrent control discourages an attacker without physically stopping them; signage and visible cameras are the classic examples. A preventive control (like a locked door) actually blocks the action." }} />
        <Sample n={2} q={{ code: "SY0-701 · Threats & Mitigations", stem: "An attacker registers a domain that differs from a bank's real domain by a single character, hoping users mistype it. Which technique is this?", options: ["Typosquatting", "Pretexting", "Watering hole", "Credential stuffing"], answer: 0, why: "Typosquatting (URL hijacking) registers look-alike domains to catch users who mistype an address. A watering hole compromises a site the target already visits." }} />
        <Sample n={3} q={{ code: "SY0-701 · Security Operations", stem: "During a response, the team disconnects an infected host from the network to stop the malware spreading before removing it. Which phase is this?", options: ["Eradication", "Recovery", "Containment", "Preparation"], answer: 2, why: "Containment limits the damage and stops the spread; isolating the host fits here. Eradication (removing the malware) and recovery (restoring service) come afterward." }} />
        <Cta label="Practice all of them free" onGo={() => onStart("sy0-701")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

const PBQ_KINDS: [string, string][] = [
  ["Simulated terminal", "A working command line with objectives to complete. Type ipconfig /release, renew a DHCP lease, trace a route. Multiple command forms are accepted, and correct commands print realistic output."],
  ["Configuration panels", "Router and OS settings screens with dropdowns, toggles, and text fields. Some settings start misconfigured, exactly like the exam's simulated interfaces."],
  ["Network diagram hotspots", "A topology diagram where you click the device that answers the scenario: find the loop, place the firewall, spot the failed switch."],
  ["Drag-to-connect cabling", "Drag connectors (RJ45, HDMI, USB-C, fiber) onto an illustrated PC rear panel, patch panel, or rack. Distractor connectors included."],
  ["Matching", "Match terms to definitions or tools to tasks, the classic drag-and-drop PBQ format."],
  ["Ordering", "Put troubleshooting or procedure steps into the correct sequence."],
]

export function PbqGuide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.pbq
  const total = ["220-1201", "220-1202", "n10-009"].reduce((a, id) => a + EXAM_META[id].pbqCount, 0)
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          Performance-based questions are where most CompTIA candidates lose points, and where most free practice sites
          offer nothing. PBQs ask you to do the task: type the command, fix the config, cable the workstation. This site
          has {total} free PBQs across A+ Core 1, Core 2, and Network+, in six interaction styles modeled on the formats
          CompTIA describes: simulations, virtual environments, and drag-and-drop.
        </p>
        <Cta label="Open the free PBQ lab" onGo={() => onStart("220-1201")} testid="guide-cta" />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Six PBQ formats you can practice here</h2>
        <div className="mt-4 flex flex-col gap-3">
          {PBQ_KINDS.map(([name, body]) => (
            <div key={name} className="rounded-lg border bg-card p-4">
              <p className="font-heading font-semibold">{name}</p>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">What a terminal PBQ looks like</h2>
        <p className="text-muted-foreground leading-relaxed">
          A real example from the Core 1 bank. Scenario: a laptop shows a 169.254.x.x address after sleeping through a
          DHCP outage. The server is healthy again; refresh the client. Three objectives:
        </p>
        <div className="rounded-lg border bg-card p-4 font-mono text-sm">
          <p className="text-muted-foreground"># Objective 1: give up the broken lease</p>
          <p>C:\Users\tech&gt; ipconfig /release</p>
          <p className="text-muted-foreground mt-2"># Objective 2: request a fresh one</p>
          <p>C:\Users\tech&gt; ipconfig /renew</p>
          <p className="text-muted-foreground mt-2"># Objective 3: clear stale name resolution</p>
          <p>C:\Users\tech&gt; ipconfig /flushdns</p>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          In the simulator you type these yourself, each correct command prints realistic output, and partial credit is
          scored per objective, the same way CompTIA says PBQs are graded.
        </p>
        <Cta label="Try it yourself, free" onGo={() => onStart("220-1201")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}
