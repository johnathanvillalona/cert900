import { describe, expect, it } from "vitest"
import { renderToStaticMarkup } from "react-dom/server"
import { EXAM_ORDER } from "@/data/meta"
import { vendorList } from "@/lib/copy"
import { CONTACT_EMAIL } from "@/lib/site"
import { MethodPage } from "./InfoPages"

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
})
