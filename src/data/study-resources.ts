import { EXAM_IDS } from "./exam-ids"
import { GUIDE_META } from "./guide-meta"
import { GUIDE_PATHS, studyPath, type GuideKey } from "./routes"
import { EXAM_META } from "./meta"

/** Discovery metadata only: no banks, answers, session state or simulator imports. */
export interface StudyResource {
  readonly id: string
  readonly kind: "guide" | "reference"
  readonly page: GuideKey
  readonly examIds: readonly string[]
  readonly primary?: boolean
}

const primaryGuides: Readonly<Record<string, GuideKey>> = {
  "220-1201": "aplus1", "220-1202": "aplus2", "n10-009": "nplus", "sy0-701": "secplus",
  "ccna-200-301": "ccna", "aif-c01": "aif", "clf-c02": "clf", "saa-c03": "saa",
  "az-900": "az900", "sc-900": "sc900", "az-104": "az104",
}

export const STUDY_RESOURCES: readonly StudyResource[] = Object.freeze(([
  ...Object.entries(primaryGuides).map(([examId, page]) => ({
    id: `guide:${examId}`, kind: "guide" as const, page, examIds: [examId], primary: true,
  })),
  { id: "guide:aplus", kind: "guide", page: "aplus", examIds: ["220-1201", "220-1202"] },
  // The current PBQ overview explicitly covers these three exams.
  { id: "guide:pbq", kind: "guide", page: "pbq", examIds: ["220-1201", "220-1202", "n10-009"] },
  { id: "reference:ports", kind: "reference", page: "ports", examIds: ["n10-009", "sy0-701"] },
  { id: "reference:ccnacli", kind: "reference", page: "ccnacli", examIds: ["ccna-200-301"] },
  { id: "reference:cables", kind: "reference", page: "cables", examIds: ["220-1201"] },
  { id: "reference:cloudsvc", kind: "reference", page: "cloudsvc", examIds: ["clf-c02", "saa-c03", "az-900", "az-104"] },
] satisfies StudyResource[]).map(resource => Object.freeze({ ...resource, examIds: Object.freeze(resource.examIds) })))

/** Fail a build on invalid authoring rather than publish a misleading Study link. */
export function validateStudyResources(resources: readonly StudyResource[] = STUDY_RESOURCES): void {
  const ids = new Set<string>()
  for (const resource of resources) {
    if (!resource.id || ids.has(resource.id)) throw new Error(`Duplicate or empty study resource: ${resource.id}`)
    ids.add(resource.id)
    const meta = GUIDE_META[resource.page]
    if (!meta || meta.path !== GUIDE_PATHS[resource.page] || !meta.title.trim()) throw new Error(`Unavailable study page: ${resource.page}`)
    if (!resource.examIds.length || new Set(resource.examIds).size !== resource.examIds.length || resource.examIds.some(id => !EXAM_IDS.includes(id))) {
      throw new Error(`Invalid study exam binding: ${resource.id}`)
    }
    if (resource.primary && resource.kind !== "guide") throw new Error(`Primary resource must be a guide: ${resource.id}`)
  }
  for (const examId of EXAM_IDS) {
    if (resources.filter(resource => resource.primary && resource.examIds.includes(examId)).length !== 1) {
      throw new Error(`Expected exactly one primary study guide: ${examId}`)
    }
  }
}
validateStudyResources()

export function resolveStudyResource(resource: StudyResource) {
  const meta = GUIDE_META[resource.page]
  return { ...resource, path: meta.path, title: meta.title, heading: meta.h1, description: meta.description }
}

export function studyResourcesForExam(examId: string) {
  const resources = EXAM_IDS.includes(examId) ? STUDY_RESOURCES.filter(resource => resource.examIds.includes(examId)) : []
  return {
    primary: resources.find(resource => resource.primary),
    references: resources.filter(resource => resource.kind === "reference"),
  }
}

export function primaryGuideForExam(examId: string) {
  const primary = studyResourcesForExam(examId).primary
  return primary ? resolveStudyResource(primary) : null
}

/** Hub metadata composes the existing catalog; it is not a second resource list. */
export function studyHubForExam(examId: string) {
  if (!EXAM_IDS.includes(examId)) return null
  const exam = EXAM_META[examId]
  const name = `${exam.cert} ${exam.name}`.trim()
  return {
    examId,
    path: studyPath(examId),
    heading: `${name} Study Hub`,
    title: `${name} (${exam.code}) Study Hub | Cert900`,
    description: `Plan your ${exam.code} study around ${Object.keys(exam.domains).length} exam domains. Find the existing ${name} guide, topic videos, relevant references and free practice tools in one place.`,
  }
}

export function relatedGuidesForExam(examId: string) {
  return EXAM_IDS.includes(examId)
    ? STUDY_RESOURCES.filter(resource => resource.kind === "guide" && !resource.primary && resource.examIds.includes(examId)).map(resolveStudyResource)
    : []
}

export function studyHubsForPage(page: GuideKey) {
  const ids = new Set(STUDY_RESOURCES.filter(resource => resource.page === page).flatMap(resource => resource.examIds))
  return [...ids].map(id => studyHubForExam(id)!)
}

export function studySearchLabel(page: GuideKey): string {
  const resource = STUDY_RESOURCES.find(resource => resource.page === page)
  return resource?.kind === "reference" ? "Study reference sheet · Cheat sheet" : resource ? "Study guide" : "Educational page"
}
