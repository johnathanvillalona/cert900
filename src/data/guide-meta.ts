/**
 * Metadata for the SEO guide pages: slugs, titles, meta descriptions, FAQs.
 *
 * Split out of Guides.tsx so the guide COMPONENTS can be lazy-loaded. App.tsx
 * and the search palette need the titles and paths synchronously for routing,
 * and importing them from the component module statically pinned ~60KB of
 * embedded practice questions into the entry chunk that every quiz-taker
 * downloads. Data here, JSX there.
 */
import { GUIDE_PATHS, type GuideKey } from "@/data/routes"
import { REF_SHEETS } from "@/data/ref-sheets"
import { vendorList } from "@/lib/copy"

export interface GuideMeta {
  path: string
  title: string
  description: string
  h1: string
  faq: [string, string][]
}

/**
 * Descriptions and FAQs never quote Cert900's own question counts. Exam facts
 * (length, time limit, passing score) are fine; bank inventory is not.
 */
const EXAM_GUIDE_META: Record<Exclude<GuideKey, InfoKey>, GuideMeta> = {
  secplus: {
    path: GUIDE_PATHS.secplus,
    title: "Free CompTIA Security+ Practice Test (SY0-701) | Cert900",
    description:
      "Practice for the CompTIA Security+ (SY0-701) exam with original questions, performance-based exercises, and a timed 90-minute practice exam. Each topic links to Professor Messer's free course.",
    h1: "Free CompTIA Security+ (SY0-701) practice test",
    faq: [
      [
        "How many questions are on the Security+ exam?",
        "The SY0-701 exam has a maximum of 90 questions in 90 minutes, mixing multiple choice with performance-based questions. The passing score is 750 on a 100 to 900 scale.",
      ],
      [
        "Do I need Network+ before Security+?",
        "No. CompTIA recommends Network+ and about two years of IT administration with a security focus. Security+ builds on networking fundamentals, so knowing ports, protocols, and topologies helps.",
      ],
      [
        "What does SY0-701 cover?",
        "Five domains: General Security Concepts (12%), Threats, Vulnerabilities & Mitigations (22%), Security Architecture (18%), Security Operations (28%), and Security Program Management & Oversight (20%). Cert900 reports your accuracy for each domain.",
      ],
      [
        "How long is the Security+ certification valid?",
        "Three years. You can renew it by earning continuing education units through CompTIA or by passing a higher-level CompTIA certification.",
      ],
    ],
  },
  clf: {
    path: GUIDE_PATHS.clf,
    title: "Free AWS Cloud Practitioner Practice Test (CLF-C02) | Cert900",
    description:
      "Practice for the AWS Certified Cloud Practitioner (CLF-C02) exam with original multiple-choice and multiple-response questions and a timed 90-minute practice exam scored from 100 to 1,000.",
    h1: "Free AWS Cloud Practitioner (CLF-C02) practice test",
    faq: [
      [
        "How many questions are on the CLF-C02 exam?",
        "65 questions in 90 minutes: 50 scored plus 15 unscored. The exam uses multiple-choice and multiple-response questions, and passing requires a scaled score of 700 on a 100 to 1,000 range.",
      ],
      [
        "Is Cloud Practitioner worth it before an associate cert?",
        "It is a common first step. It validates cloud literacy for less technical roles and builds the vocabulary the associate exams assume. If you already work with AWS every day, you can go straight to Solutions Architect - Associate.",
      ],
      [
        "What are the CLF-C02 domains?",
        "Cloud Concepts (24%), Security and Compliance (30%), Cloud Technology and Services (34%), and Billing, Pricing, and Support (12%). Cert900 reports your accuracy for each domain.",
      ],
    ],
  },
  az900: {
    path: GUIDE_PATHS.az900,
    title: "Free Azure Fundamentals Practice Test (AZ-900) | Cert900",
    description:
      "Learn Azure fundamentals with ten beginner lessons, practical examples, and original diagrams. Then try eight sample questions, timed AZ-900 practice, and topic practice.",
    h1: "Free Microsoft Azure Fundamentals (AZ-900) practice test",
    faq: [
      [
        "How many questions are on the AZ-900 exam?",
        "Microsoft lists 45 minutes for the AZ-900 assessment. Question counts and formats can vary. A score of 700 or greater is required to pass; Cert900 practice uses its own instructional scoring and does not reproduce the official scoring model.",
      ],
      [
        "Does AZ-900 expire?",
        "No. Microsoft Fundamentals certifications, including AZ-900, do not expire.",
      ],
      [
        "What does AZ-900 cover?",
        "Three skill areas: cloud concepts (25-30%), Azure architecture and services (35-40%), and Azure management and governance (30-35%). The ten lessons introduce those ideas, with links to existing John Savill videos and official Microsoft references. Older videos may use earlier names or omit current objectives.",
      ],
    ],
  },
  sc900: {
    path: GUIDE_PATHS.sc900,
    title: "Free Microsoft SC-900 Practice Test (Security, Compliance & Identity) | Cert900",
    description:
      "Practice for Microsoft SC-900 (Security, Compliance, and Identity Fundamentals) with original questions, drag-and-drop and matching items, and a timed practice exam. Each topic links to John Savill's free video.",
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
        "Four areas: security, compliance, and identity concepts (10-15%), the capabilities of Microsoft Entra (25-30%), Microsoft security solutions (35-40%), and Microsoft compliance solutions (20-25%). Cert900 reports your accuracy for each domain.",
      ],
      [
        "Do I need technical experience for SC-900?",
        "No. Microsoft designed SC-900 for people who are getting familiar with security, compliance, and identity. General familiarity with Azure and Microsoft 365 is helpful.",
      ],
    ],
  },
  ccna: {
    path: GUIDE_PATHS.ccna,
    title: "Free Cisco CCNA 200-301 Practice Test | Cert900",
    description:
      "Practice for the Cisco CCNA (200-301) exam with original questions, simulated IOS configuration labs, network diagram exercises, and a timed practice exam. Each topic links to Jeremy's IT Lab.",
    h1: "Free Cisco CCNA (200-301) practice test",
    faq: [
      [
        "How many questions are on the CCNA exam?",
        "The CCNA 200-301 is a 120-minute exam with multiple-choice, multiple-response and hands-on items. Cisco does not publish a fixed question count or passing score. Cert900 uses 825 of 1,000 as its practice threshold; this is not an official Cisco cut score.",
      ],
      [
        "Do I need a prerequisite for CCNA?",
        "No. CCNA has no formal prerequisites, though Cisco suggests about a year of hands-on networking experience. It is the standard associate-level networking certification.",
      ],
      [
        "What does CCNA 200-301 cover?",
        "Six domains: Network Fundamentals (20%), Network Access (20%), IP Connectivity (25%), IP Services (10%), Security Fundamentals (15%), and Automation and Programmability (10%). Cert900 reports your accuracy for each domain.",
      ],
      [
        "How long is the CCNA certification valid?",
        "Three years. You can recertify by passing an eligible exam or by earning Cisco Continuing Education credits.",
      ],
    ],
  },
  az104: {
    path: GUIDE_PATHS.az104,
    title: "Free Microsoft AZ-104 Practice Test (Azure Administrator) | Cert900",
    description:
      "Practice for Microsoft AZ-104 (Azure Administrator Associate) with original questions, drag-and-drop and build-list items, and a timed practice exam. Each topic links to John Savill's free video.",
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
        "Five areas: manage identities and governance (20-25%), implement and manage storage (15-20%), deploy and manage compute (20-25%), implement and manage virtual networking (15-20%), and monitor and maintain resources (10-15%). Cert900 reports your accuracy for each domain.",
      ],
      [
        "Does AZ-104 expire?",
        "Yes. Role-based Microsoft certifications such as AZ-104 are valid for one year. You can renew for free by passing an online renewal assessment in the six months before it expires.",
      ],
    ],
  },
  saa: {
    path: GUIDE_PATHS.saa,
    title: "Free AWS Solutions Architect Associate Practice Test (SAA-C03) | Cert900",
    description:
      "Practice for the AWS Certified Solutions Architect - Associate (SAA-C03) exam with original scenario questions and a timed 130-minute practice exam scored from 100 to 1,000.",
    h1: "Free AWS Solutions Architect Associate (SAA-C03) practice test",
    faq: [
      [
        "How many questions are on the SAA-C03 exam?",
        "65 questions in 130 minutes: 50 scored plus 15 unscored. The exam uses multiple-choice and multiple-response questions only, and passing requires a scaled score of 720 on a 100 to 1,000 range.",
      ],
      [
        "How hard is SAA-C03 compared to Cloud Practitioner?",
        "It is considerably harder. Cloud Practitioner tests cloud literacy, while SAA-C03 tests architecture design: choosing services for security, resilience, performance, and cost under scenario constraints.",
      ],
      [
        "What does SAA-C03 cover?",
        "Four domains: Design Secure Architectures (30%), Design Resilient Architectures (26%), Design High-Performing Architectures (24%), and Design Cost-Optimized Architectures (20%). Cert900 reports your accuracy for each domain.",
      ],
      [
        "How long is the Solutions Architect - Associate certification valid?",
        "Three years. You can recertify by passing the current version of the exam or by earning a higher-level AWS certification.",
      ],
    ],
  },
  aif: {
    path: GUIDE_PATHS.aif,
    title: "Free AWS AI Practitioner Practice Test (AIF-C01) | Cert900",
    description:
      "Learn the AIF-C01 foundations with nine free lessons on AI, AWS services, prompting, RAG, agents, and responsible AI, then practice with original questions.",
    h1: "Free AWS Certified AI Practitioner (AIF-C01) practice test",
    faq: [
      [
        "How many questions are on the AIF-C01 exam?",
        "65 questions in 90 minutes: 50 scored plus 15 unscored questions AWS evaluates for future exams. Formats include multiple choice, multiple response, ordering, and matching. Our simulator mirrors all four.",
      ],
      [
        "What score do I need to pass?",
        "AWS reports a scaled score from 100 to 1,000 with a minimum passing score of 700. Scoring is compensatory: you pass on the overall exam, not on each section. Cert900 uses its own instructional practice scoring; its results do not reproduce AWS's proprietary scoring or predict an official score.",
      ],
      [
        "Do I need AWS experience first?",
        "AWS recommends up to six months of exposure to AI and ML workloads on AWS. The target candidate uses AI services rather than builds models; no coding or data-science background is required.",
      ],
      [
        "How long is the AI Practitioner certification valid?",
        "Three years, like other AWS certifications. You can recertify by passing the current version of the exam.",
      ],
    ],
  },
  aplus: {
    path: GUIDE_PATHS.aplus,
    title: "Free CompTIA A+ Practice Test (220-1201 & 220-1202) | Cert900",
    description: "Free CompTIA A+ Core 1 (220-1201) and Core 2 (220-1202) practice tests, eight explained sample questions, and links to both Study Hubs.",
    h1: "Free CompTIA A+ practice test: Core 1 and Core 2",
    faq: [
      [
        "How many questions are on the real A+ exam?",
        "Each A+ core exam (220-1201 and 220-1202) has a maximum of 90 questions in 90 minutes, mixing multiple choice with performance-based questions. You need both cores to earn the A+ certification.",
      ],
      [
        "What score do I need to pass the A+?",
        "CompTIA scores on a 100 to 900 scale. Core 1 (220-1201) requires 675 and Core 2 (220-1202) requires 700. Cert900 uses those published ranges and thresholds with its own practice scoring formula; practice results do not predict an official score.",
      ],
      [
        "How long is CompTIA A+ valid?",
        "Three years. You can renew it through the CompTIA continuing education program or by earning a higher-level CompTIA certification.",
      ],
    ],
  },
  aplus1: {
    path: GUIDE_PATHS.aplus1,
    title: "Free CompTIA A+ Core 1 Practice Test (220-1201) | Cert900",
    description:
      "Practice for CompTIA A+ Core 1 (220-1201) with original hardware, mobile, networking, virtualization, and troubleshooting questions, simulated PBQs, and a timed 90-minute exam.",
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
        "How should I study for Core 1?",
        "Start with a timed practice exam to find your weakest domains. Then practice those topics and watch the linked Professor Messer video for each topic you miss.",
      ],
    ],
  },
  aplus2: {
    path: GUIDE_PATHS.aplus2,
    title: "Free CompTIA A+ Core 2 Practice Test (220-1202) | Cert900",
    description:
      "Practice for CompTIA A+ Core 2 (220-1202) with original operating system, security, troubleshooting, and operational procedure questions, simulated PBQs, and a timed 90-minute exam.",
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
        "No. CompTIA lets you take the two core exams in either order. You need to pass both exams in the same series to earn the A+ certification.",
      ],
      [
        "How should I study for Core 2?",
        "Spend extra time on Windows command-line tools and settings, then use topic practice for security and troubleshooting. Each topic links to Professor Messer's free 220-1202 video.",
      ],
    ],
  },
  nplus: {
    path: GUIDE_PATHS.nplus,
    title: "Free CompTIA Network+ Practice Test (N10-009) | Cert900",
    description: "Practice for the CompTIA Network+ (N10-009) exam with original questions, performance-based exercises with a simulated command line and network diagrams, and a timed 90-minute exam.",
    h1: "Free CompTIA Network+ (N10-009) practice test",
    faq: [
      [
        "How many questions are on the Network+ exam?",
        "The N10-009 exam has a maximum of 90 questions in 90 minutes, combining multiple choice and performance-based questions. The passing score is 720 on a 100 to 900 scale.",
      ],
      [
        "Do I need A+ before Network+?",
        "No. CompTIA recommends A+ but does not require it. If you already work with networks or are comfortable with hardware basics, starting with Network+ is common.",
      ],
      [
        "What topics does N10-009 cover?",
        "Five domains: networking concepts (23%), network implementation (20%), network operations (19%), network security (14%), and network troubleshooting (24%). Cert900 reports your accuracy for each domain.",
      ],
    ],
  },
  pbq: {
    path: GUIDE_PATHS.pbq,
    title: "Free CompTIA PBQ Practice Labs: A+ & Network+ | Cert900",
    description: "Practice A+ and Network+ PBQs: Windows command troubleshooting, firewall configuration, ACL simulation, and photo-backed cabling. No account is required.",
    h1: "Free CompTIA PBQ practice labs for A+ and Network+",
    faq: [
      [
        "What is a PBQ?",
        "A performance-based question asks you to do a task instead of picking an answer: type commands in a terminal, configure a router, or drag components into place. CompTIA uses them to test hands-on skill.",
      ],
      [
        "How many PBQs are on the exam?",
        "CompTIA does not publish a fixed PBQ count. The number and task types can vary. Cert900's PBQ labs offer individual exercises, and its practice exams use a configured sample rather than predicting the items on your real exam.",
      ],
      [
        "Do PBQs get partial credit?",
        "CompTIA says PBQs may offer partial credit. Cert900 uses its own explicit instructional rubrics: for example, three of four equally weighted objectives earns 75% for that exercise. Requirements and weights vary by exercise; these are not CompTIA's proprietary scoring rules.",
      ],
      [
        "Should I do PBQs first or skip them?",
        "If a task is taking too long, consider flagging it and returning after other questions. Cert900's timed practice exams support flagging and returning so you can try different time-management approaches.",
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
 * three are built from data the site already owns (real cut scores, scales,
 * question counts, and time limits for every exam) rather than being thin
 * doorway pages restating the guides.
 */

type InfoKey = "hub" | "scores" | "order" | "method" | "ports" | "ccnacli" | "cables" | "cloudsvc"

const INFO_META: Record<InfoKey, GuideMeta> = {
  hub: {
    path: GUIDE_PATHS.hub,
    title: "Free IT Certification Practice Tests (CompTIA, Cisco, AWS, Azure) | Cert900",
    description: "Free practice tests for CompTIA A+, Network+, and Security+, Cisco CCNA, AWS Cloud Practitioner, AI Practitioner, and Solutions Architect, and Microsoft AZ-900, SC-900, and AZ-104.",
    h1: "Free IT certification practice tests",
    faq: [
      [
        "Are the practice tests on Cert900 free?",
        "Yes. Every practice test on Cert900 is free, and your progress saves in your browser without an account.",
      ],
      [
        "Are these real exam questions?",
        "No. Every question on Cert900 is original and written from the current published exam objectives. Sites that share actual exam content violate the vendors' candidate agreements, and using them can lead to a revoked certification.",
      ],
      [
        "How close is the simulation to the real exam?",
        "Cert900 offers timed practice with original questions, interactive exercises and exam-specific settings. Published durations, score ranges and passing scores inform those settings where available. Question counts, mixes and grading are Cert900's practice model, not a reproduction of a proprietary exam or a prediction of your result.",
      ],
      [
        "Which certification should I start with?",
        "It depends on the track. CompTIA A+ is the usual first step for IT support, CCNA for networking, and the cloud vendors have their own fundamentals exams. The page on which certification to take first covers each track.",
      ],
    ],
  },
  scores: {
    path: GUIDE_PATHS.scores,
    title: "IT Certification Passing Scores: CompTIA, Cisco, AWS & Azure | Cert900",
    description: `Published passing scores and Cert900 practice thresholds for ${vendorList()} certification exams. Compare score ranges and time limits. Cisco does not publish a CCNA passing score.`,
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
        "Cert900 gives CompTIA and Cisco interactive items twice the weight of one multiple-choice item and awards rubric-based partial credit. Its AWS and Azure interactive items use all-or-nothing credit and the same weight as one multiple-choice item. These are Cert900 instructional settings, not disclosed vendor scoring formulas.",
      ],
      [
        "Does Cisco publish the CCNA passing score?",
        "No. Cisco does not publish a fixed passing score or question count for the CCNA 200-301. Cert900 uses 825 of 1,000 as a practice threshold; it must not be treated as an official Cisco requirement.",
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
        "No. CompTIA recommends that order but has no prerequisites, so you can take them in any order. If you already work in IT, starting with Network+ or Security+ is common.",
      ],
      [
        "Is A+ worth it if I already work in IT?",
        "If you already do the job, A+ mostly confirms skills you have. It still helps with HR screening and some government roles, but Network+ or Security+ is usually more valuable for someone already working in IT.",
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
    title: "How Our Practice Questions Are Made and Reviewed | Cert900",
    description: "How Cert900 writes and checks its original practice questions: published exam objectives, automated checks, documented internal review, and learner reports. Learn how to report an error.",
    h1: "How our practice questions are made",
    faq: [
      [
        "Are these real exam questions?",
        "No. Every question is original work written for Cert900 from each exam's published objectives. Using leaked exam content (braindumps) violates the vendors' agreements, can void your certification, and teaches recall instead of understanding.",
      ],
      [
        "How do you know the answers are correct?",
        "Automated checks validate structure and consistency, and internal review records document an August 2026 review and subsequent corrections. These checks reduce errors but do not guarantee accuracy. Use the Report control if you find a questionable answer or explanation.",
      ],
      [
        "What happens when I report a question?",
        "Reports land in a triage queue that the site's maintainer reviews. A confirmed problem gets fixed in the bank itself, and because the site deploys from a single source, the fix reaches everyone at once. Reports are anonymous.",
      ],
      [
        "Why is this free?",
        "Serving practice questions costs very little, and certification study is already expensive. Cert900 is supported by donations and may show an ad on a study guide page. The practice tools stay free and do not require an account.",
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
      "The Cisco IOS commands the CCNA 200-301 simulations grade: mode navigation, the show commands that answer real troubleshooting questions, base switch and router configuration in order, VLANs and trunking, and the abbreviations engineers type.",
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
