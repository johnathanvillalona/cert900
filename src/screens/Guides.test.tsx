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
        expect(instructions).toContain(`${exam.scale.max}-point scale and a ${exam.scale.pass} practice threshold`)
        expect(instructions).toContain("not an official result or a prediction of passing")
        expect(instructions).toContain(`${Object.keys(exam.videos).length} topics`)
        expect(studyPaths[0][0].match(/<li>/g)).toHaveLength(5)
        for (const step of ["Drill the weak domains.", "Clear the review queue.", "Watch the linked video for each miss."]) {
          expect(instructions.split(step)).toHaveLength(2)
        }
      }
    })
  }

  it("showcases the four real PBQ workspaces without changing the six interaction types", () => {
    const html = renderToStaticMarkup(<Guides.PbqGuide />)
    for (const name of ["Windows DHCP Command Prompt", "Network+ Edge ACL", "Windows Defender Firewall", "Provision the Sales Workstation"]) {
      expect(html).toContain(name)
    }
    expect(html.match(/data-testid="pbq-preview"/g)).toHaveLength(4)
    expect(html.match(/aria-label="Enlarge [^"<>]+ screenshot"/g)).toHaveLength(4)
    expect(html).toContain("Tap or click the screenshot to enlarge; use Back to return.")
    for (const id of ["dhcp", "network-acl", "windows-firewall", "workstation"]) {
      expect(html).toContain(`src="/pbq-previews/${id}.png"`)
    }
    for (const kind of ["Simulated terminal", "Configuration panels", "Network diagram hotspots", "Drag-to-connect cabling", "Matching", "Ordering"]) {
      expect(html).toContain(kind)
    }
    expect(html).toContain("noninteractive previews")
    expect(html).toContain("not official CompTIA questions")
    expect(html).toContain("instructional rubrics, not proprietary exam scoring")
    expect(html).toContain('href="/pbq/CREDITS.md"')
    expect(html).not.toContain("most CompTIA candidates lose points")
    expect(html).not.toContain("most free practice sites")
    expect(html).not.toContain("the same way CompTIA says PBQs are graded")
    for (const id of ["220-1201", "220-1202", "n10-009"]) {
      expect(html).toContain(`href="/study/${id}"`)
      expect(html).toContain(`href="/exam/${id}"`)
    }
  })

  it("labels derived domain percentages and counts as instructional allocations", () => {
    const html = renderToStaticMarkup(<Guides.Az900Guide />)
    expect(html).toContain("Practice allocation")
    expect(html).toContain("Illustrative count")
    expect(html).toContain("not measured domain totals")
    expect(html).not.toContain(">Exam weight<")
    expect(html).not.toContain(">Questions here<")
    for (const share of Object.values(EXAM_META["az-900"].examSplit)) {
      expect(html).toContain(`${Math.round(share * 100)}%`)
    }
  })
})
