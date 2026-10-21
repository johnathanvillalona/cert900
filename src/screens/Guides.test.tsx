import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { GUIDE_EXAMS, GUIDE_META } from "@/data/guide-meta"
import { EXAM_META } from "@/data/meta"
import { GUIDE_KEYS, type GuideKey } from "@/data/routes"
import * as Guides from "./Guides"
import * as Info from "./InfoPages"

// Exercise the actual page trees used by the prerenderer, including the PBQ
// overview where misplaced StudyPath calls previously accumulated unnoticed.
const pages = {
  aplus: Guides.APlusGuide, aplus1: Guides.APlusCore1Guide, aplus2: Guides.APlusCore2Guide,
  nplus: Guides.NPlusGuide, secplus: Guides.SecplusGuide, pbq: Guides.PbqGuide,
  aif: Guides.AifGuide, clf: Guides.ClfGuide, az900: Guides.Az900Guide,
  sc900: Guides.Sc900Guide, ccna: Guides.CcnaGuide, az104: Guides.Az104Guide, saa: Guides.SaaGuide,
  hub: Info.HubPage, scores: Info.ScoresPage, order: Info.OrderPage, method: Info.MethodPage,
  ports: Info.PortsPage, ccnacli: Info.CcnaCliPage, cables: Info.CablesPage, cloudsvc: Info.CloudSvcPage,
} satisfies Record<GuideKey, () => React.JSX.Element>

const text = (html: string) => html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim()

describe("static guide instructional content", () => {
  it("covers every prerendered guide", () => {
    expect(Object.keys(pages).sort()).toEqual([...GUIDE_KEYS].sort())
  })

  for (const key of GUIDE_KEYS) {
    it(`${key}: renders one relevant study path, unique headings and intact instructions`, () => {
      const html = renderToStaticMarkup(createElement(pages[key]))
      const headings = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map(m => text(m[1]))
      expect(new Set(headings).size, `${GUIDE_META[key].path}: duplicate headings`).toBe(headings.length)
      const studyPaths = [...html.matchAll(/<section><h2\b[^>]*>How to use this to pass<\/h2>[\s\S]*?<\/section>/g)]
      const primaryExam = GUIDE_EXAMS[key][0]
      expect(studyPaths, `${key}: section belongs only on exam guides`).toHaveLength(primaryExam ? 1 : 0)
      if (primaryExam) {
        const exam = EXAM_META[primaryExam]
        const instructions = text(studyPaths[0][0])
        expect(instructions).toContain(`${exam.examMC} questions`)
        expect(instructions).toContain(`${exam.examMinutes} minutes`)
        expect(instructions).toContain(`${exam.scale.max}-point scale with the actual ${exam.scale.pass} cut line`)
        expect(instructions).toContain(`${Object.keys(exam.videos).length} topics`)
        expect(studyPaths[0][0].match(/<li>/g)).toHaveLength(5)
        for (const step of ["Drill the weak domains.", "Clear the review queue.", "Watch the linked video for each miss."]) {
          expect(instructions.split(step)).toHaveLength(2)
        }
      }
    })
  }
})
