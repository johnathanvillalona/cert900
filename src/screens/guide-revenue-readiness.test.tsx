import { describe, expect, it } from "vitest"
import { renderToStaticMarkup } from "react-dom/server"
import { GUIDE_META } from "@/data/guide-meta"
import { EXAM_IDS } from "@/data/exam-ids"
import { GuideShell, PbqGuide } from "./Guides"
import { StudyHub } from "./StudyHub"
import { DONATE_URL } from "@/lib/site"

describe("discreet guide support and search readiness", () => {
  it("places one native optional invitation after the PBQ teaching and FAQ", () => {
    const html = renderToStaticMarkup(<PbqGuide />)
    expect(html.match(/data-testid="guide-support"/g)).toHaveLength(1)
    expect(html.indexOf('id="guide-support-heading"')).toBeGreaterThan(html.indexOf("Common questions"))
    expect(html.indexOf('id="guide-support-heading"')).toBeLessThan(html.indexOf("More free practice tests"))
    const invitation = html.match(/<aside[^>]*data-testid="guide-support"[\s\S]*?<\/aside>/)![0]
    expect(invitation).toContain(`href="${DONATE_URL}"`)
    expect(invitation).toContain('target="_blank" rel="noopener noreferrer"')
    expect(invitation).toContain("Support is optional. Every exam and study guide stays free.")
    expect(invitation).not.toMatch(/<script|<iframe|<form|onclick=|position:fixed/)
  })
  it("does not spread the invitation to other guides or any Study Hub", () => {
    for (const meta of Object.values(GUIDE_META).filter(meta => meta !== GUIDE_META.pbq)) {
      expect(renderToStaticMarkup(<GuideShell meta={meta}><p>Existing guide</p></GuideShell>)).not.toContain('data-testid="guide-support"')
    }
    for (const examId of EXAM_IDS) expect(renderToStaticMarkup(<StudyHub examId={examId} />)).not.toContain('data-testid="guide-support"')
  })
  it("links every real preview to its existing exam resources without inventing simulation routes", () => {
    const html = renderToStaticMarkup(<PbqGuide />)
    expect(html.match(/data-testid="pbq-preview-study"/g)).toHaveLength(4)
    for (const id of ["220-1201", "220-1202", "n10-009"]) expect(html).toContain(`href="/study/${id}#resources"`)
    expect(html.match(/data-testid="pbq-preview"/g)).toHaveLength(4)
    expect(html).toContain("Six PBQ formats you can practice here")
    expect(html).not.toContain("/courses/")
  })
  it("keeps the revised search snippets tied to existing resources and URLs", () => {
    expect(GUIDE_META.pbq.path).toBe("/comptia-pbq-practice")
    expect(GUIDE_META.pbq.title).toContain("A+ & Network+")
    expect(GUIDE_META.pbq.description).toMatch(/Windows command.*firewall.*ACL.*cabling/)
    expect(GUIDE_META.aplus.description).toContain("eight explained sample questions")
    for (const meta of [GUIDE_META.pbq, GUIDE_META.aplus]) expect(meta.description.length).toBeLessThanOrEqual(160)
  })
})
