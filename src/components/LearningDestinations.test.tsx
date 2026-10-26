import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { EXAM_IDS } from "@/data/exam-ids"
import { GUIDE_PATHS, isKnownPath } from "@/data/routes"
import { primaryGuideForExam } from "@/data/study-resources"
import { HubPage } from "@/screens/InfoPages"
import { HomepageLearningLinks, LearningDestinations } from "./LearningDestinations"
import { StaticContentShell } from "./StaticContentShell"

describe("simple learning destinations", () => {
  for (const prominent of [false, true]) {
    it(`uses two existing native destinations (${prominent ? "hero" : "navigation"})`, () => {
      const html = renderToStaticMarkup(<LearningDestinations prominent={prominent} />)
      expect(html.match(/<a /g)).toHaveLength(2)
      expect(html).toContain('href="/exams"')
      expect(html).toContain(`href="${GUIDE_PATHS.hub}"`)
      expect(html).toContain("Practice exams")
      expect(html).toContain("Study guides")
      expect(html).toContain("min-h-11")
      expect(html).toContain("focus-visible:outline-2")
      expect(html).not.toMatch(/<button|<script|target=|onClick/)
      for (const path of html.matchAll(/href="([^"]+)"/g)) expect(isKnownPath(path[1])).toBe(true)
    })
  }

  it("keeps PBQ discovery secondary to practice and study", () => {
    const html = renderToStaticMarkup(<HomepageLearningLinks />)
    expect(html).toContain('aria-label="Start learning"')
    expect(html).toContain(`href="${GUIDE_PATHS.pbq}"`)
    expect(html.indexOf("Explore PBQ labs")).toBeGreaterThan(html.indexOf("Study guides"))
    expect(html.match(/<a /g)).toHaveLength(3)
    expect(html).not.toMatch(/<button|<script/)
  })

  it("makes both destinations work in static educational headers without JavaScript", () => {
    const html = renderToStaticMarkup(<StaticContentShell><main id="main">A lesson</main></StaticContentShell>)
    const header = html.slice(html.indexOf("<header"), html.indexOf("</header>"))
    expect(header).toContain('aria-label="Primary"')
    expect(header).toContain('aria-label="cert900 home"')
    expect(header).toContain('href="/exams"')
    expect(header).toContain(`href="${GUIDE_PATHS.hub}"`)
    expect(header).not.toMatch(/<button|<script/)
  })

  it("the study destination contains an existing canonical guide for all eleven exams", () => {
    const html = renderToStaticMarkup(<HubPage />)
    expect(EXAM_IDS).toHaveLength(11)
    for (const examId of EXAM_IDS) {
      const guide = primaryGuideForExam(examId)
      expect(guide, examId).not.toBeNull()
      expect(html, examId).toContain(`href="${guide!.path}"`)
    }
  })
})
