import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/pbq',
  fullyParallel: false,
  workers: 1,
  timeout: 120_000,
  expect: { timeout: 8000, toHaveScreenshot: { maxDiffPixelRatio: 0.002 } },
  outputDir: '/tmp/cert900-pbq-playwright-results',
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:4174',
    channel: 'chrome',
    viewport: { width: 1440, height: 1000 },
    reducedMotion: 'reduce',
    colorScheme: 'light',
    trace: 'retain-on-failure',
    launchOptions: { args: ['--disable-background-networking', '--disable-sync',
      '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE localhost, EXCLUDE 127.0.0.1'] },
  },
  webServer: {
    command: 'npm run preview:isolated',
    url: 'http://127.0.0.1:4174/api/config',
    timeout: 180_000,
    reuseExistingServer: false,
    gracefulShutdown: { signal: 'SIGTERM', timeout: 15_000 },
  },
})
