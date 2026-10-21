import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { EXAM_IDS } from "@/data/exam-ids"
import { primaryGuideForExam, studyHubForExam, studyResourcesForExam, resolveStudyResource } from "@/data/study-resources"
import { StudyGuideAction, StudyLinks } from "./StudyLinks"

describe("free study discovery controls", () => {
  for (const id of EXAM_IDS) {
    it(`${id}: native canonical links, accessible action and relevant reference visibility`, () => {
      const primary = primaryGuideForExam(id)!
      const action = renderToStaticMarkup(<StudyGuideAction examId={id} />)
      expect(action).toContain(`href="${studyHubForExam(id)!.path}"`)
      expect(action).toContain('aria-label="')
      expect(action).toContain("Study Hub")
      expect(action).not.toMatch(/<button|<script|target=/)
      const html = renderToStaticMarkup(<StudyLinks examId={id} />)
      expect(html).toContain('data-testid="primary-study-guide"')
      expect(html).toContain('data-testid="primary-study-hub"')
      expect(html).toContain(`href="${primary.path}"`)
      const references = studyResourcesForExam(id).references
      expect(html.match(/data-testid="study-reference"/g) ?? []).toHaveLength(references.length)
      for (const ref of references) expect(html).toContain(`href="${resolveStudyResource(ref).path}"`)
      const results = renderToStaticMarkup(<StudyLinks examId={id} references={false} />)
      expect(results).toContain(`href="${primary.path}"`)
      expect(results).not.toContain('data-testid="study-reference"')
      expect(results).not.toContain("Reference sheets")
    })
  }
  it("renders nothing for an unknown exam", () => {
    expect(renderToStaticMarkup(<StudyGuideAction examId="missing" />)).toBe("")
    expect(renderToStaticMarkup(<StudyLinks examId="missing" />)).toBe("")
  })
})
