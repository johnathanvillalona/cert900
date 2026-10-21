import { describe, expect, it } from "vitest"
import { EXAM_IDS } from "./exam-ids"
import { GUIDE_META } from "./guide-meta"
import { GUIDE_PATHS, isKnownPath, type GuideKey } from "./routes"
import { STUDY_RESOURCES, primaryGuideForExam, resolveStudyResource, studyResourcesForExam, studySearchLabel, validateStudyResources } from "./study-resources"

const expected: Record<string, GuideKey> = {
  "220-1201": "aplus1", "220-1202": "aplus2", "n10-009": "nplus", "sy0-701": "secplus",
  "ccna-200-301": "ccna", "aif-c01": "aif", "clf-c02": "clf", "saa-c03": "saa",
  "az-900": "az900", "sc-900": "sc900", "az-104": "az104",
}
const references: Record<string, readonly string[]> = {
  "220-1201": ["cables"], "220-1202": [], "n10-009": ["ports"], "sy0-701": ["ports"],
  "ccna-200-301": ["ccnacli"], "aif-c01": [], "clf-c02": ["cloudsvc"], "saa-c03": ["cloudsvc"],
  "az-900": ["cloudsvc"], "sc-900": [], "az-104": ["cloudsvc"],
}

describe("verified study resource registry", () => {
  it("covers exactly the supported exams, with valid immutable resources", () => {
    expect(Object.keys(expected).sort()).toEqual([...EXAM_IDS].sort())
    expect(() => validateStudyResources()).not.toThrow()
    expect(Object.isFrozen(STUDY_RESOURCES)).toBe(true)
    for (const resource of STUDY_RESOURCES) {
      expect(Object.isFrozen(resource)).toBe(true)
      expect(Object.isFrozen(resource.examIds)).toBe(true)
      expect(isKnownPath(resolveStudyResource(resource).path)).toBe(true)
    }
  })
  for (const id of EXAM_IDS) {
    it(`${id}: resolves one canonical primary guide and only verified references`, () => {
      const primary = primaryGuideForExam(id)!
      expect(primary.page).toBe(expected[id])
      expect(primary.path).toBe(GUIDE_PATHS[expected[id]])
      expect(primary.title).toBe(GUIDE_META[expected[id]].title)
      expect(primary.heading).toBe(GUIDE_META[expected[id]].h1)
      expect(STUDY_RESOURCES.filter(r => r.primary && r.examIds.includes(id))).toHaveLength(1)
      expect(studyResourcesForExam(id).references.map(r => r.page)).toEqual(references[id])
    })
  }
  it("fails safely for unknown exams without constructing fallback resource URLs", () => {
    for (const id of ["", "missing", "../../privacy"]) {
      expect(primaryGuideForExam(id)).toBeNull()
      expect(studyResourcesForExam(id)).toEqual({ primary: undefined, references: [] })
    }
  })
  it("rejects duplicate, missing, unavailable and invalid authoring", () => {
    const first = STUDY_RESOURCES[0]
    expect(() => validateStudyResources([...STUDY_RESOURCES, first])).toThrow(/Duplicate/)
    expect(() => validateStudyResources(STUDY_RESOURCES.filter(r => r.id !== first.id))).toThrow(/exactly one/)
    expect(() => validateStudyResources([...STUDY_RESOURCES, { ...first, id: "extra", primary: false, examIds: ["missing"] }])).toThrow(/Invalid study exam/)
    expect(() => validateStudyResources([...STUDY_RESOURCES, { ...first, id: "extra", primary: false, examIds: [] }])).toThrow(/Invalid study exam/)
    expect(() => validateStudyResources([...STUDY_RESOURCES, { ...first, id: "extra", primary: false, examIds: ["220-1201", "220-1201"] }])).toThrow(/Invalid study exam/)
    expect(() => validateStudyResources([...STUDY_RESOURCES, { ...first, id: "extra", primary: false, page: "missing" as GuideKey }])).toThrow(/Unavailable/)
    expect(() => validateStudyResources([...STUDY_RESOURCES, { ...first, id: "extra", kind: "reference" }])).toThrow(/must be a guide/)
    expect(() => validateStudyResources([...STUDY_RESOURCES, { ...first, id: "extra" }])).toThrow(/exactly one/)
  })
  it("adds discoverable search language without inventing a content destination", () => {
    expect(studySearchLabel("aplus1")).toBe("Study guide")
    expect(studySearchLabel("ports")).toContain("Cheat sheet")
    expect(studySearchLabel("method")).toBe("Educational page")
  })
})
