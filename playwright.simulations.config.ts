import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './tests/simulations', workers: 1,
  outputDir: '/tmp/cert900-b1-browser-results',
  use: { channel: 'chrome', baseURL: 'http://127.0.0.1:4175',
    launchOptions: { args: ['--disable-background-networking', '--disable-sync', '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE localhost, EXCLUDE 127.0.0.1'] },
  },
  webServer: { command: 'node tools/qa/simulation-harness.mjs', url: 'http://127.0.0.1:4175/tests/simulations/harness.html', timeout: 60_000,
    gracefulShutdown: { signal:'SIGTERM',timeout:10000 }, reuseExistingServer:false },
})
