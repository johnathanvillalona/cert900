import { EXAMS } from "@/data/index"
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

export const GUIDE_META: Record<"aplus" | "nplus" | "pbq", GuideMeta> = {
  aplus: {
    path: "/comptia-a-plus-practice-test",
    title: "Free CompTIA A+ Practice Test (220-1201 & 220-1202) | Cert900",
    description:
      "Free CompTIA A+ practice tests for Core 1 (220-1201) and Core 2 (220-1202): 621 original questions, 40 performance-based questions, timed 90-minute exam simulation scored on the real 100 to 900 scale. No signup.",
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
        "Yes. All 621 A+ questions, all 42 PBQs, and the full exam simulator are free with no account required. Progress saves in your browser; an optional Google sign-in syncs it across devices.",
      ],
    ],
  },
  nplus: {
    path: "/network-plus-practice-test",
    title: "Free CompTIA Network+ Practice Test (N10-009) | Cert900",
    description:
      "Free CompTIA Network+ N10-009 practice: 315 original questions, 20 performance-based questions including simulated CLI and network diagrams, timed exam simulation on the 100 to 900 scale. No signup.",
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
    description:
      "Practice CompTIA performance-based questions free: simulated terminals, router config panels, network diagram hotspots, and drag-to-connect cabling for A+ and Network+. 62 PBQs, no signup.",
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
  const exam = EXAMS[examId]
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
    <main className="mx-auto max-w-3xl" data-testid="guide-page">
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
  const c1 = EXAMS["220-1201"]
  const c2 = EXAMS["220-1202"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          The CompTIA A+ is two exams: Core 1 (220-1201) covers hardware, mobile devices, networking basics,
          virtualization, and troubleshooting; Core 2 (220-1202) covers operating systems, security, software
          troubleshooting, and operational procedures. This site gives you {c1.questions.length + c2.questions.length} original
          practice questions and {c1.pbqs.length + c2.pbqs.length} performance-based questions across both cores, free and
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
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Try three sample questions</h2>
        <Sample n={1} q={{ code: "220-1201 · Hardware", stem: "A technician is upgrading a laptop's mechanical hard drive to a faster component that has no moving parts. Which drive is being installed?", options: ["An SSD", "A second HDD", "An optical drive", "A power supply"], answer: 0, why: "A solid-state drive (SSD) has no moving parts, is faster and more shock-resistant than an HDD, and is a common laptop upgrade." }} />
        <Sample n={2} q={{ code: "220-1201 · Mobile Devices", stem: "An organization needs to enforce passcodes and remotely wipe company smartphones if they are lost. Which solution provides this?", options: ["MDM", "DHCP", "NAT", "RAID"], answer: 0, why: "Mobile device management (MDM) centrally enforces policy, deploys apps, and can remotely lock or wipe enrolled devices." }} />
        <Sample n={3} q={{ code: "220-1202 · Operating Systems", stem: "Which partition style must be used on a boot drive larger than 2 TB with a UEFI system?", options: ["MBR", "GPT", "Dynamic", "Extended"], answer: 1, why: "GPT (GUID Partition Table) supports drives over 2 TB and is required for UEFI booting; MBR is limited to 2 TB and 4 primary partitions." }} />
        <p className="text-muted-foreground text-sm">
          The full bank has {c1.questions.length} Core 1 and {c2.questions.length} Core 2 questions, weighted to the
          official domain split, plus simulated PBQs: terminals, configuration panels, and drag-to-connect cabling.
        </p>
        <Cta label="Practice all of them free" onGo={() => onStart("220-1201")} testid="guide-cta-2" />
      </section>
    </GuideShell>
  )
}

export function NPlusGuide({ onStart }: { onStart: (examId: string) => void }) {
  const meta = GUIDE_META.nplus
  const nx = EXAMS["n10-009"]
  return (
    <GuideShell meta={meta}>
      <section className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          The CompTIA Network+ (N10-009) tests networking concepts, implementation, operations, security, and
          troubleshooting. This site gives you {nx.questions.length} original practice questions and {nx.pbqs.length} performance-based
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
        <Sample n={1} q={{ code: "N10-009 · Concepts", stem: "Which OSI layer is responsible for logical addressing and routing between different networks?", options: ["Layer 3 (Network)", "Layer 2 (Data Link)", "Layer 4 (Transport)", "Layer 7 (Application)"], answer: 0, why: "Layer 3, the Network layer, handles logical (IP) addressing and routing between networks." }} />
        <Sample n={2} q={{ code: "N10-009 · Ports", stem: "Which port does HTTPS use for encrypted web traffic?", options: ["443", "80", "22", "25"], answer: 0, why: "HTTPS uses TCP port 443; HTTP uses port 80." }} />
        <Sample n={3} q={{ code: "N10-009 · Standards", stem: "Which Ethernet standard provides 1 Gbps over twisted-pair copper?", options: ["1000BASE-T", "10BASE-T", "100BASE-TX", "10GBASE-SR"], answer: 0, why: "1000BASE-T delivers 1 Gbps over Cat 5e or better copper up to 100 meters." }} />
        <Cta label="Practice all 315 free" onGo={() => onStart("n10-009")} testid="guide-cta-2" />
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
  const total = ["220-1201", "220-1202", "n10-009"].reduce((a, id) => a + EXAMS[id].pbqs.length, 0)
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
