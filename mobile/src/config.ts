// Backend the app syncs with. To exercise the sync round-trip against a local
// `wrangler dev` from a real phone, set this to http://<your-LAN-ip>:8787 and
// restart Expo. Production is the live worker.
export const API_BASE = "https://cert900.com"

// Deep-link scheme, matched in app.json and the worker's trustedOrigins. The
// Google OAuth redirect comes back to the app on this scheme.
export const APP_SCHEME = "cert900"
