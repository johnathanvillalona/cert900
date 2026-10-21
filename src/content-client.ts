// Progressive enhancement only: guides remain complete without React or JavaScript.
import { analytics } from "./lib/analytics"
import { initConsent } from "./lib/consent"

initConsent(analytics.setConsent)
analytics.pageView(location.pathname)
