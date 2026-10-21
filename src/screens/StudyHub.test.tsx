import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { StudyHub } from "./StudyHub"
import { EXAM_IDS } from "@/data/exam-ids"
import { EXAM_META } from "@/data/meta"
import { primaryGuideForExam, studyHubForExam, studyHubsForPage, relatedGuidesForExam, studyResourcesForExam } from "@/data/study-resources"
import { GUIDE_PATHS } from "@/data/routes"

describe("static certification Study Hubs", () => {
  it.each(EXAM_IDS)("%s reuses existing resources and exam metadata without starting an attempt", examId => {
    const exam = EXAM_META[examId]
    const hub = studyHubForExam(examId)!
    const html = renderToStaticMarkup(<StudyHub examId={examId} />)
    expect(hub.path).toBe(`/study/${examId}`)
    expect(hub.description).toContain(exam.code)
    expect(hub.description).not.toBe(primaryGuideForExam(examId)!.heading)
    expect(html.match(/<h1\b/g)).toHaveLength(1)
    expect(html.match(/data-testid="hub-domain"/g)).toHaveLength(Object.keys(exam.domains).length)
    expect(html).toContain("configured practice allocation")
    expect(html).toContain("Published exam weight ranges may differ")
    expect(html).not.toContain("exam blueprint weight")
    for (const weight of Object.values(exam.examSplit)) {
      expect(html).toContain(`${Math.round(weight * 100)}% practice allocation`)
    }
    expect(html.match(/data-testid="hub-video"/g)).toHaveLength(Object.keys(exam.videos).length)
    expect(html.match(/data-testid="hub-reference"/g) ?? []).toHaveLength(studyResourcesForExam(examId).references.length)
    expect(html.match(/data-testid="hub-related"/g) ?? []).toHaveLength(relatedGuidesForExam(examId).length)
    expect(html.match(/data-testid="hub-lab"/g) ?? []).toHaveLength(exam.pbqCount ? 1 : 0)
    expect(html).toContain(`href="${primaryGuideForExam(examId)!.path}"`)
    for (const sub of ["drill", "plan", "stats"]) expect(html).toContain(`href="/exam/${examId}/${sub}"`)
    expect(html).not.toMatch(/<script|adsbygoogle|\/quiz|\/results|How to use this to pass/)
    for (const video of Object.values(exam.videos)) {
      expect(exam.domains[video.d]).toBeTruthy()
      const url = new URL(video.u)
      expect(url.protocol).toBe("https:")
    }
  })
  it("provides unique metadata and no guessed resources for unknown exams", () => {
    expect(new Set(EXAM_IDS.map(id => studyHubForExam(id)!.title)).size).toBe(11)
    expect(new Set(EXAM_IDS.map(id => studyHubForExam(id)!.description)).size).toBe(11)
    for (const id of ["unknown", "__proto__", "../../privacy"]) {
      expect(studyHubForExam(id)).toBeNull()
      expect(relatedGuidesForExam(id)).toEqual([])
      expect(() => renderToStaticMarkup(<StudyHub examId={id} />)).toThrow(/Unknown Study Hub/)
    }
  })
  it("links multi-exam guides and references only to their registered hubs", () => {
    expect(studyHubsForPage("aplus").map(hub => hub.examId)).toEqual(["220-1201", "220-1202"])
    expect(studyHubsForPage("ports").map(hub => hub.examId)).toEqual(["n10-009", "sy0-701"])
    expect(studyHubsForPage("cloudsvc").map(hub => hub.examId)).toEqual(["clf-c02", "saa-c03", "az-900", "az-104"])
    expect(studyHubsForPage("method")).toEqual([])
    expect(studyHubsForPage("aplus1")[0].path).not.toBe(GUIDE_PATHS.aplus1)
  })
})
