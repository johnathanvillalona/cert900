/**
 * Metadata for the SEO guide pages: slugs, titles, meta descriptions, FAQs.
 *
 * Split out of Guides.tsx so the guide COMPONENTS can be lazy-loaded. App.tsx
 * and the search palette need the titles and paths synchronously for routing,
 * and importing them from the component module statically pinned ~60KB of
 * embedded practice questions into the entry chunk that every quiz-taker
 * downloads. Data here, JSX there.
 */
import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import { GUIDE_PATHS, type GuideKey } from "@/data/routes"
import { REF_SHEETS } from "@/data/ref-sheets"

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

const EXAM_GUIDE_META: Record<Exclude<GuideKey, InfoKey>, GuideMeta> = {
  secplus: {
    path: GUIDE_PATHS.secplus,
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
    path: GUIDE_PATHS.clf,
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
    path: GUIDE_PATHS.az900,
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
    path: GUIDE_PATHS.sc900,
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
    path: GUIDE_PATHS.ccna,
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
    path: GUIDE_PATHS.az104,
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
    path: GUIDE_PATHS.saa,
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
    path: GUIDE_PATHS.aif,
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
    path: GUIDE_PATHS.aplus,
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
    path: GUIDE_PATHS.aplus1,
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
    path: GUIDE_PATHS.aplus2,
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
    path: GUIDE_PATHS.nplus,
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
    path: GUIDE_PATHS.pbq,
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

/**
 * Which exam bank each guide draws its sample questions from.
 *
 * Single source for two consumers that must agree: the <Samples> block in
 * Guides.tsx and the Quiz structured data the prerenderer emits. If they
 * disagreed, the schema would advertise questions the page does not show.
 * The PBQ guide has no multiple-choice samples, hence the empty list.
 */
const EXAM_GUIDE_EXAMS = {
  aplus: ["220-1201", "220-1202"],
  aplus1: ["220-1201"],
  aplus2: ["220-1202"],
  nplus: ["n10-009"],
  secplus: ["sy0-701"],
  pbq: [],
  ccna: ["ccna-200-301"],
  aif: ["aif-c01"],
  clf: ["clf-c02"],
  saa: ["saa-c03"],
  az900: ["az-900"],
  az104: ["az-104"],
  sc900: ["sc-900"],
}

/**
 * Informational pages.
 *
 * These target query classes the per-exam guides cannot: the generic "IT
 * certification practice test" head term, and the two questions every candidate
 * asks before picking an exam (what score do I need, and which one first). All
 * three are built from data the site already owns — real cut scores, scales,
 * question counts, and time limits for every exam — rather than being thin
 * doorway pages restating the guides.
 */
const N_EXAMS = EXAM_ORDER.length
const TOTAL_Q = EXAM_ORDER.reduce((a, id) => a + EXAM_META[id].questionCount, 0)

type InfoKey = "hub" | "scores" | "order" | "method" | "ports" | "ccnacli" | "cables" | "cloudsvc"

const INFO_META: Record<InfoKey, GuideMeta> = {
  hub: {
    path: GUIDE_PATHS.hub,
    title: "Free IT Certification Practice Tests (CompTIA, Cisco, AWS, Azure) | Cert900",
    description: `Free practice tests for ${N_EXAMS} IT certifications: CompTIA A+, Network+, and Security+, Cisco CCNA, AWS Cloud Practitioner, AI Practitioner, and Solutions Architect, and Microsoft AZ-900, SC-900, and AZ-104. ${TOTAL_Q} original questions, timed exam simulation on each exam's real scale. No signup.`,
    h1: "Free IT certification practice tests",
    faq: [
      [
        "Are these practice tests really free?",
        "Yes, all of them. There is no paywall, no signup wall, and no trial that expires. The full question bank for every exam is open, and progress saves in your browser without an account.",
      ],
      [
        "Are these real exam questions?",
        "No, and you should avoid anyone who says otherwise. Every question here is original, written from the current published exam objectives. Sites distributing actual exam content are violating their agreements with the vendor, and using them can get your certification revoked.",
      ],
      [
        "How close is the simulation to the real exam?",
        "Each timed exam uses that exam's real question count, time limit, question-type mix, and scoring scale, including the actual cut score. A practice score therefore reads the way a real score report does.",
      ],
      [
        "Which certification should I start with?",
        "It depends on the track. CompTIA A+ is the usual first step for IT support, CCNA for networking, and the cloud vendors have their own fundamentals exams. There is a full walkthrough on the which-certification-first page.",
      ],
    ],
  },
  scores: {
    path: GUIDE_PATHS.scores,
    title: "IT Certification Passing Scores: CompTIA, Cisco, AWS & Azure | Cert900",
    description: `Passing scores for ${N_EXAMS} IT certification exams, with each exam's scale, question count, and time limit. CompTIA A+ 675, Network+ 720, Security+ 750 on 100-900; AWS and Azure 700-720 and Cisco about 825 on 100-1,000. Free practice scored on the same scales.`,
    h1: "IT certification passing scores, by exam",
    faq: [
      [
        "Why is the passing score not a percentage?",
        "Most certification exams report a scaled score, not a raw percentage. Questions differ in difficulty and different candidates see different question sets, so the raw count is converted onto a common scale that means the same thing across every version of the exam.",
      ],
      [
        "Does that mean I need 675 out of 900 correct?",
        "No. The scale runs from 100, not zero, and the conversion is not linear. A 675 on CompTIA A+ Core 1 does not correspond to any fixed percentage of questions answered correctly, which is why CompTIA does not publish one.",
      ],
      [
        "Do performance-based questions count for more?",
        "On CompTIA and Cisco exams, yes: simulations carry more weight than a single multiple-choice question and award partial credit for the parts you get right. AWS and Azure interactive items are all-or-nothing and weighted like a normal question.",
      ],
      [
        "Does Cisco publish the CCNA passing score?",
        "No. Cisco does not publish the cut score or the exact question count for the CCNA 200-301, and it can vary between exam forms. A scaled score around 825 of 1,000 is the figure widely reported by candidates, and it is what this site scores against.",
      ],
    ],
  },
  order: {
    path: GUIDE_PATHS.order,
    title: "Which IT Certification Should You Take First? | Cert900",
    description: "Which IT certification to take first, by track: CompTIA A+ then Network+ then Security+ for support and security, Cisco CCNA for networking, and the AWS and Azure fundamentals exams before their associate-level certifications. With free practice tests for each.",
    h1: "Which IT certification should you take first?",
    faq: [
      [
        "Do I need A+ before Network+ or Security+?",
        "No. CompTIA recommends that order but enforces no prerequisites, so you can sit any of them in any order. If you already work in IT, starting at Network+ or Security+ is common and completely allowed.",
      ],
      [
        "Is A+ worth it if I already work in IT?",
        "If you are already doing the job, A+ mostly certifies what you can already do. It still helps for HR filters and government contracting roles, but Network+ or Security+ usually moves the needle more for someone already employed in IT.",
      ],
      [
        "Should I do a cloud fundamentals exam before an associate one?",
        "It is the cheapest way to find out whether the vocabulary is there. Cloud Practitioner and AZ-900 are inexpensive, do not expire, and cover the terminology the associate exams assume. If you already administer that cloud daily, going straight to the associate exam is reasonable.",
      ],
      [
        "Does Security+ expire?",
        "CompTIA certifications are valid for three years and renew through continuing education or a higher certification. Microsoft fundamentals certifications such as AZ-900 and SC-900 do not expire; role-based ones such as AZ-104 renew annually through a free online assessment.",
      ],
    ],
  },
  method: {
    path: GUIDE_PATHS.method,
    title: "How Our Practice Questions Are Made and Verified | Cert900",
    description: `How the ${TOTAL_Q} practice questions on Cert900 are written, reviewed, and kept current: original items only, adversarial verification of every bank, an August 2026 audit of 931 sampled questions and all 138 performance-based questions, and a report button on every question that feeds a real triage queue.`,
    h1: "How our practice questions are made",
    faq: [
      [
        "Are these real exam questions?",
        "No, and that is deliberate. Every question is original work written for this site against each exam's published objectives. Using leaked exam content (braindumps) violates the vendors' agreements, can void your certification, and teaches recall instead of understanding.",
      ],
      [
        "How do you know the answers are correct?",
        "Every bank passes an automated rule suite and an adversarial review in which independent reviewers try to refute each question's keyed answer. In August 2026 we additionally audited a 25% stratified sample of the whole bank plus every performance-based question; the handful of confirmed defects were fixed and the changes are public in the site's history.",
      ],
      [
        "What happens when I report a question?",
        "Reports land in a triage queue that the site's maintainer reviews. A confirmed problem gets fixed in the bank itself, and because the site deploys from a single source, the fix reaches everyone at once. Reports are anonymous.",
      ],
      [
        "Why is this free?",
        "The marginal cost of serving practice questions is near zero, and certification study is expensive enough already. The site runs on donations and, on the article pages only, may eventually carry ads; the practice tool itself stays free and unregistered.",
      ],
    ],
  },
  ports: {
    path: GUIDE_PATHS.ports,
    title: "Common Network Ports & Protocols Cheat Sheet | Cert900",
    description:
      "Every port CompTIA Network+ (N10-009) and Security+ (SY0-701) expect you to know cold: the number, TCP or UDP, what the service does, and the secure replacement for each insecure protocol. With the lookalike ports the exams use as traps.",
    h1: "Common network ports and protocols",
    faq: REF_SHEETS.ports.faq,
  },
  ccnacli: {
    path: GUIDE_PATHS.ccnacli,
    title: "CCNA CLI Commands Quick Reference (200-301) | Cert900",
    description:
      "The Cisco IOS commands the CCNA 200-301 sims actually grade: mode navigation, the show commands that answer real troubleshooting questions, base switch and router configuration in order, VLANs and trunking, and the abbreviations engineers type.",
    h1: "CCNA CLI quick reference",
    faq: REF_SHEETS.ccnacli.faq,
  },
  cables: {
    path: GUIDE_PATHS.cables,
    title: "CompTIA A+ Cables and Connectors Reference | Cert900",
    description:
      "Every cable and connector on the CompTIA A+ Core 1 (220-1201) objectives with exam-accurate speeds and distances: Cat 5e through Cat 8, fiber types and connectors, HDMI vs DisplayPort vs DVI, USB generations and Power Delivery, SATA, M.2, and NVMe.",
    h1: "A+ cables and connectors",
    faq: REF_SHEETS.cables.faq,
  },
  cloudsvc: {
    path: GUIDE_PATHS.cloudsvc,
    title: "AWS vs Azure: Equivalent Services Side by Side | Cert900",
    description:
      "The AWS-to-Azure service map for CLF-C02, SAA-C03, AZ-900, and AZ-104 candidates: compute, storage, networking, database, identity, and governance equivalents in one table, using 2026-current service names on both sides.",
    h1: "AWS and Azure services, side by side",
    faq: REF_SHEETS.cloudsvc.faq,
  },
}

/** Every guide and informational page, keyed exactly like GUIDE_PATHS. */
export const GUIDE_META: Record<GuideKey, GuideMeta> = { ...EXAM_GUIDE_META, ...INFO_META }

/** Informational pages show no sample questions, so they map to no exam. */
export const GUIDE_EXAMS: Record<GuideKey, string[]> = {
  ...EXAM_GUIDE_EXAMS,
  hub: [],
  scores: [],
  order: [],
  method: [],
  ports: [],
  ccnacli: [],
  cables: [],
  cloudsvc: [],
}

/**
 * The exams a guide page covers, looked up by its URL path.
 *
 * GuideShell receives only `meta`, and threading an exam list through 16 call
 * sites for one consumer is churn for nothing -- `meta.path` already identifies
 * the page. Unknown paths return [], which downstream renders as nothing.
 */
const EXAMS_BY_PATH: Record<string, string[]> = Object.fromEntries(
  (Object.keys(GUIDE_EXAMS) as GuideKey[]).map((k) => [GUIDE_PATHS[k], GUIDE_EXAMS[k]]),
)

export function guideExamsForPath(path: string): string[] {
  return EXAMS_BY_PATH[path] ?? []
}
