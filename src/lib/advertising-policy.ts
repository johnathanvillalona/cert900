import { GUIDE_META } from "../data/guide-meta"
import { primaryGuideForExam } from "../data/study-resources"
import { ADVERTISING_GUIDE_PATH } from "./advertising-core"

/** Application-facing policy module. The policy itself lives in
 * advertising-core.ts so the Worker can read it without the exam registry;
 * this file adds the startup assertion that the allowlisted path is still the
 * registered primary Network+ guide.
 */
export * from "./advertising-core"

// One substantive pilot only. Adding a resource never opts it into advertising.
const pilot = primaryGuideForExam("n10-009")
if (!pilot || !pilot.primary || pilot.kind !== "guide" || pilot.path !== GUIDE_META.nplus.path || pilot.path !== ADVERTISING_GUIDE_PATH) {
  throw new Error("Unavailable advertising pilot guide")
}
