import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { AIF_CURRICULUM, AIF_LESSONS, AIF_REVIEWED_ON, AIF_SOURCES, aifSourcesForLesson } from "./guide-lessons"
import { AifGuide, Az900Guide } from "@/screens/Guides"
import { StudyHub } from "@/screens/StudyHub"
import { GUIDE_SAMPLES } from "./guide-samples"
import { selectGuideSamples } from "@/lib/guide-sample-selection"

describe("reviewed AIF-C01 learning content", () => {
  it("covers the fourteen current task statements without coupling official weights to practice scoring", () => {
    const expectedTasks = ["1.1", "1.2", "1.3", "2.1", "2.2", "2.3", "3.1", "3.2", "3.3", "3.4", "4.1", "4.2", "5.1", "5.2"]
    expect(AIF_CURRICULUM.flatMap(domain => [...domain.tasks])).toEqual(expectedTasks)
    expect([...new Set(AIF_LESSONS.flatMap(lesson => [...lesson.objectiveRefs]))].sort()).toEqual(expectedTasks)
    expect(AIF_CURRICULUM.map(domain => domain.weight)).toEqual([20, 24, 28, 14, 14])
    expect(AIF_CURRICULUM.reduce((sum, domain) => sum + domain.weight, 0)).toBe(100)
    expect(AIF_LESSONS).toHaveLength(9)
    expect(new Set(AIF_LESSONS.map(lesson => lesson.id)).size).toBe(9)
    for (const lesson of AIF_LESSONS) {
      expect(lesson.id).toMatch(/^aif-[a-z]+(?:-[a-z]+)*$/)
      expect(lesson.objective.length).toBeGreaterThan(40)
      for (const domain of lesson.domains) expect(AIF_CURRICULUM.some(row => row.domain === domain)).toBe(true)
      for (const task of lesson.objectiveRefs) expect(expectedTasks).toContain(task)
      expect(aifSourcesForLesson(lesson).length).toBeGreaterThan(0)
    }
  })

  it("records dated, official references and rejects missing source bindings", () => {
    expect(AIF_REVIEWED_ON).toBe("2026-10-21")
    for (const source of Object.values(AIF_SOURCES)) {
      const url = new URL(source.url)
      expect(url.protocol).toBe("https:")
      expect(["aws.amazon.com", "docs.aws.amazon.com"]).toContain(url.hostname)
    }
    expect(() => aifSourcesForLesson({ ...AIF_LESSONS[0], sourceIds: ["unknown"] })).toThrow("Unknown learning source")
    expect(() => aifSourcesForLesson({ ...AIF_LESSONS[0], sourceIds: ["__proto__"] })).toThrow("Unknown learning source")
  })

  it("renders complete native lessons, diagrams, scenarios and self-checks without a client runtime", () => {
    const html = renderToStaticMarkup(createElement(AifGuide))
    expect(html.match(/data-testid="learning-lesson"/g)).toHaveLength(9)
    expect(html.match(/data-testid="lesson-scenario"/g)).toHaveLength(9)
    expect(html.match(/data-testid="lesson-check"/g)).toHaveLength(9)
    expect(html.match(/data-testid="learning-diagram"/g)).toHaveLength(8)
    expect(html.match(/data-testid="lesson-check-note"/g)).toHaveLength(9)
    expect(html.match(/It isn’t graded, and your answer isn’t collected or saved\./g)).toHaveLength(9)
    expect(html).toContain("not a complete certification course")
    expect(html).toContain("Official AIF-C01 domain weights")
    expect(html).toContain("Practice allocation")
    expect(html).toContain("Amazon SageMaker AI")
    expect(html).toContain("Amazon Quick")
    expect(html).not.toContain("scores on the real")
    expect(html).not.toMatch(/<script|<iframe|<form|onClick=|\?topic=/)
    for (const lesson of AIF_LESSONS) {
      expect(html).toContain(`id="${lesson.id}"`)
      expect(html).toContain(`aria-labelledby="${lesson.id}"`)
      expect(html).toContain(`href="#${lesson.id}"`)
    }
  })

  it("retains all eight existing generated sample questions in the same selection order", () => {
    const selected = selectGuideSamples(["aif-c01"])
    expect(selected.map(row => row.sample)).toEqual(GUIDE_SAMPLES["aif-c01"].slice(0, 8))
    const html = renderToStaticMarkup(createElement(AifGuide))
    expect(html.match(/data-testid="guide-sample"/g)).toHaveLength(8)
    const escape = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#x27;")
    for (const { sample } of selected) expect(html).toContain(escape(sample.x))
    expect(html.match(/How to use this to pass/g)).toHaveLength(1)
  })

  it("links all lessons from the AWS hub without adding lessons to other certifications", () => {
    const aws = renderToStaticMarkup(createElement(StudyHub, { examId: "aif-c01" }))
    expect(aws.match(/data-testid="hub-guide-lesson"/g)).toHaveLength(9)
    for (const lesson of AIF_LESSONS) expect(aws).toContain(`href="/aws-ai-practitioner-practice-test#${lesson.id}"`)
    for (const id of ["az-900", "clf-c02", "220-1201"]) {
      expect(renderToStaticMarkup(createElement(StudyHub, { examId: id }))).not.toContain('data-testid="hub-guide-lesson"')
    }
    expect(renderToStaticMarkup(createElement(Az900Guide))).not.toContain('data-testid="learning-lesson"')
  })

  it("keeps authored lessons out of the synchronous descriptor and static consent entry", () => {
    const metadata = readFileSync(new URL("./guide-lessons.ts", import.meta.url), "utf8")
    expect(metadata).not.toMatch(/from\s+["'][^"']*(?:content\/guides|GuideLearning|data\/aif-c01)|<p>|<section|quiz-session|analytics/)
    const contentEntry = readFileSync(new URL("../content-client.ts", import.meta.url), "utf8")
    expect(contentEntry).not.toMatch(/guide-lessons|GuideLearning|aif-c01|hydrate/)
  })
})
