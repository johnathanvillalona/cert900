# PBQ browser checks

Reference environment: Ubuntu 26.04.1 LTS, Node 24.21.0, npm 11.19.0,
Google Chrome 155.0.8059.39, Playwright 1.64.1, device scale 1.
Use Node 24 and installed Google Chrome on Ubuntu. No browser download or
lifecycle-script approval is needed:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm test
npm run build
npm run test:browser
npm run test:worker
```

Browser checks exercise the production build, real UI and quiz-session actions.
The web server runs the tracked Worker with a temporary configuration, fresh
local D1, synthetic authentication, isolated HOME/configuration and blocked
external Worker requests. It does not load project Wrangler settings, inherited
credentials, env files, remote databases or cron triggers. The browser uses a
fresh profile and resolves only loopback hosts. Test artifacts go to
`/tmp/cert900-pbq-playwright-results`; temporary Worker state/logs stay in `/tmp`.
Do not publish traces: local synthetic session data may be present.

For manual review after building, run `npm run preview:isolated` and open
<http://127.0.0.1:4174>. Wait for the smoke checks and server startup. Stop with
Ctrl+C. Stop the preview before rebuilding `dist/`, then restart it; Workers
asset manifests belong to the build they started with. This preview uses
disposable data, never production resources.

Visual baselines use installed Chrome on Ubuntu, device scale 1, self-hosted
fonts, reduced motion and explicit theme/viewport settings. Record the Chrome
version when reviewing snapshots. Use `npm run test:browser -- --update-snapshots`
only for deliberate changes; inspect each changed image and obtain human review.
Emulated touch/keyboard checks do not replace physical phone or screen-reader
review. No simulator platform or CLI acceptance changes belong in these repairs.
