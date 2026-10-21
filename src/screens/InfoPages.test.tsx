import { describe, expect, it } from "vitest"
import { renderToStaticMarkup } from "react-dom/server"
import { EXAM_META, EXAM_ORDER } from "@/data/meta"
import { GUIDE_META } from "@/data/guide-meta"
import { vendorList } from "@/lib/copy"
import { CONTACT_EMAIL } from "@/lib/site"
import { HubPage, MethodPage, ScoresPage } from "./InfoPages"

const text = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/&#x27;/g, "'").replace(/&ndash;/g, "–").replace(/\s+/g, " ").trim()

describe("methodology page trust information", () => {
  const html = renderToStaticMarkup(<MethodPage />)

  it("renders a public About section with derived coverage and the simulation boundary", () => {
    const about = html.match(/<section id="about"[^>]*>([\s\S]*?)<\/section>/)?.[1]
    expect(about).toBeDefined()
    expect(about).toContain("About Cert900")
    expect(about).toContain("independent, free study resource")
    expect(about).toContain(vendorList())
    expect(about).toContain(`covering ${EXAM_ORDER.length} exams`)
    expect(about).toContain("Practice is available without an account")
    expect(about).toContain("simulated scenario state only")
    expect(about).toContain("without running operating-system")
    expect(about).toContain("original study exercises")
    expect(about).toContain("not official exam questions")
  })

  it("renders a Contact anchor and the configured public email without a form", () => {
    const contact = html.match(/<section id="contact"[^>]*>([\s\S]*?)<\/section>/)?.[1]
    expect(contact).toBeDefined()
    expect(contact).toContain('id="contact-cert900-heading"')
    expect(contact).toContain(`href="mailto:${CONTACT_EMAIL}"`)
    expect(contact).toContain(CONTACT_EMAIL)
    expect(contact).toContain("privacy questions")
    expect(contact).toContain("Report button")
    expect(contact).not.toContain("<form")
  })

  it("describes the audit record without promising a public report", () => {
    expect(html).toContain("internal review records")
    expect(html).not.toContain("public history")
    expect(html).not.toContain("The full report, with citations, ships")
  })

  it("qualifies internal review consistently in the article, description and FAQ", () => {
    const body = text(html)
    const faq = GUIDE_META.method.faq.find(([question]) => question === "How do you know the answers are correct?")![1]
    for (const content of [body, faq]) {
      expect(content).toContain("internal review records")
      expect(content).toContain("August 2026 review")
      expect(content).toMatch(/do not guarantee (?:that every answer is correct|accuracy)/)
      expect(content).not.toMatch(/exactly three|0\.08%|25% stratified|public in the site's history|independent reviewers/)
    }
    expect(GUIDE_META.method.title).toContain("Reviewed")
    expect(GUIDE_META.method.description).toContain("documented internal review")
    expect(GUIDE_META.method.description).not.toMatch(/931|verification of every bank|138/)
    expect(body).toContain("Report button")
  })
})

describe("educational practice and scoring disclosures", () => {
  it("labels configured session counts and avoids official scoring equivalence in the directory", () => {
    const body = text(renderToStaticMarkup(<HubPage />))
    expect(body).toContain("Practice items")
    expect(body).toContain("Practice time")
    expect(body).toContain("Cert900's instructional model")
    expect(body).toContain("do not promise a particular real-exam question count or mix")
    expect(GUIDE_META.hub.faq.find(([question]) => question === "How close is the simulation to the real exam?")![1])
      .toContain("Cert900's practice model")
    expect(body).not.toContain("scored on the real scale against the real cut line")
  })

  it("retains thresholds while distinguishing practice rubrics from vendor scoring", () => {
    const html = renderToStaticMarkup(<ScoresPage />)
    const body = text(html)
    const rows = [...html.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(match => text(match[1]))
    for (const id of EXAM_ORDER) {
      const exam = EXAM_META[id]
      expect(rows.find(row => row.includes(exam.code)), exam.code).toContain(`100–${exam.scale.max} ${exam.scale.pass}`)
    }
    expect(body).toContain("825 threshold above is a Cert900 practice setting")
    expect(body).toContain("not an official Cisco requirement")
    expect(body).toContain("own practice scoring formula")
    expect(body).toContain("Cert900 instructional settings")
    expect(body).toContain("Vendor exams may use different scoring rules")
    expect(body).not.toMatch(/practice score is scored the way the real one will be|On CompTIA and Cisco exams, simulations carry more weight/)
    expect(GUIDE_META.scores.description).toContain("Cisco does not publish a CCNA passing score")
    expect(GUIDE_META.ccna.faq[0][1]).toContain("not an official Cisco cut score")
  })

  it("describes available PBQ exercises without inventing proprietary credit rules or fixed counts", () => {
    expect(GUIDE_META.pbq.description).toContain("Windows command troubleshooting")
    expect(GUIDE_META.pbq.description).toContain("firewall configuration")
    expect(GUIDE_META.pbq.description).toContain("photo-backed cabling")
    expect(GUIDE_META.pbq.faq.find(([question]) => question === "Do PBQs get partial credit?")![1])
      .toContain("equally weighted objectives")
    expect(GUIDE_META.pbq.faq.find(([question]) => question === "Do PBQs get partial credit?")![1])
      .toContain("not CompTIA's proprietary scoring rules")
    expect(GUIDE_META.pbq.faq.find(([question]) => question === "How many PBQs are on the exam?")![1])
      .toContain("does not publish a fixed PBQ count")
  })
})
