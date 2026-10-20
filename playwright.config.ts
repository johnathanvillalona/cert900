import { defineConfig } from '@playwright/test'

// A dedicated port lets the reviewed preview keep running during validation.
const port = Number(process.env.CERT900_TEST_PORT ?? 4174)
if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error('Invalid test port')
export default defineConfig({
  testDir: './tests/pbq',
  fullyParallel: false,
  workers: 1,
  timeout: 120_000,
  expect: { timeout: 8000, toHaveScreenshot: { maxDiffPixelRatio: 0.002 } },
  outputDir: '/tmp/cert900-pbq-playwright-results',
  reporter: [['list']],
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    channel: 'chrome',
    viewport: { width: 1440, height: 1000 },
    reducedMotion: 'reduce',
    colorScheme: 'light',
    trace: 'retain-on-failure',
    launchOptions: { args: ['--disable-background-networking', '--disable-sync',
      '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE localhost, EXCLUDE 127.0.0.1'] },
  },
  webServer: {
    command: `node tools/qa/isolated-worker.mjs --serve --port=${port}`,
    url: `http://127.0.0.1:${port}/api/config`,
    timeout: 180_000,
    reuseExistingServer: false,
    gracefulShutdown: { signal: 'SIGTERM', timeout: 15_000 },
  },
})
