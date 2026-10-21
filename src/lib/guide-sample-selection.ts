import { GUIDE_SAMPLES, type GuideSample } from "../data/guide-samples"

/**
 * Select the public guide samples in the same order for HTML and structured
 * data. Multi-exam guides alternate between exams instead of filling the
 * limit from the first exam. The generated sample catalog stays unchanged.
 */
export function selectGuideSamples(
  examIds: readonly string[],
  limit = 8,
): { examId: string; sample: GuideSample }[] {
  const lanes = examIds.map((examId) =>
    (GUIDE_SAMPLES[examId] ?? []).map((sample) => ({ examId, sample })),
  )
  const selected: { examId: string; sample: GuideSample }[] = []
  for (let index = 0; selected.length < limit; index++) {
    let added = false
    for (const lane of lanes) {
      if (selected.length >= limit) break
      if (index < lane.length) {
        selected.push(lane[index])
        added = true
      }
    }
    if (!added) break
  }
  return selected
}
