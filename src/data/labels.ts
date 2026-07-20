
/**
 * Short display name per exam, for dense surfaces (menu rows, cards, chips).
 *
 * Explicit rather than derived. Stripping the vendor prefix off
 * `${cert} ${name}` with a regex produced "Certified AI Practitioner" for AWS
 * and left Azure as "Microsoft Certified Azure Fundamentals", because `cert`
 * ("AWS Certified", "Microsoft Certified") does not start with the vendor's
 * short name. Falling back to `ex.name` is already right for everything except
 * the two A+ cores, so a newly added exam degrades gracefully.
 */
export const EXAM_SHORT: Record<string, string> = {
  "220-1201": "A+ Core 1",
  "220-1202": "A+ Core 2",
  "n10-009": "Network+",
  "sy0-701": "Security+",
  "aif-c01": "AI Practitioner",
  "clf-c02": "Cloud Practitioner",
  "az-900": "Azure Fundamentals",
}

/** Accepts ExamDef or ExamMeta — only id/name are needed. */
export const examShortName = (ex: { id: string; name: string }): string => EXAM_SHORT[ex.id] ?? ex.name
