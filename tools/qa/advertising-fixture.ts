// Test-only entry, bundled in memory by the browser regression. Never built by
// production Vite inputs. The fake unit and CMP are always intercepted locally.
import { mountGuideAdvertising } from "../../src/lib/advertising-browser"
mountGuideAdvertising({
  enabled: true, siteApproved: true, cmpVerified: true,
  publisher: "ca-pub-0000000000000000",
  placements: { "guide-primary": { enabled: true, slot: "0000000000" }, "guide-secondary": { enabled: !!document.querySelector('[data-guide-ad="guide-secondary"]'), slot: "1111111111" } },
})
