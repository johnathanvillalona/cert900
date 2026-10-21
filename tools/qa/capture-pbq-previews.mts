/** Capture real, ungraded local PBQ renderers. Never connects to production. */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { chromium, type Page } from '@playwright/test'
import { findQuestion, openLab, settled, workstation } from '../../tests/pbq/helpers.ts'
import { openAcl } from '../../tests/pbq/firewall-helpers.ts'
import { openWindows } from '../../tests/pbq/windows-helpers.ts'

const origin = new URL(process.argv.find(arg => arg.startsWith('--base-url='))?.slice(11) ?? 'http://127.0.0.1:4197')
assert(origin.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(origin.hostname), 'Only an isolated loopback Worker is allowed')
assert(origin.pathname === '/' && !origin.search && !origin.hash && !origin.username && !origin.password)
const recordBefore = process.argv.includes('--record-before')
const qaDirectory = resolve('docs/qa/seo-phase-1')
const publicDirectory = resolve('public/pbq-previews')
mkdirSync(qaDirectory, { recursive: true })
mkdirSync(publicDirectory, { recursive: true })
const sha256 = (bytes: Uint8Array) => createHash('sha256').update(bytes).digest('hex')
const style = 'header:not([data-testid="firewall-banner"]) { visibility: hidden !important; }'
const sources = [
  { id: 'dhcp', title: 'Fix a Stale DHCP Lease', exam: '220-1201', target: 'command-prompt-workspace',
    state: 'Ungraded APIPA adapter diagnostics only; ipconfig /all does not earn credit.',
    open: async (page: Page) => {
      await openLab(page)
      await findQuestion(page, 'Fix a Stale DHCP Lease')
      await page.getByTestId('terminal-input').fill('ipconfig /all')
      await page.getByTestId('terminal-run').click()
      await page.getByRole('log').getByText('169.254.42.17', { exact: false }).first().waitFor()
      await page.getByTestId('terminal-input').blur()
    } },
  { id: 'network-acl', title: 'Build the Edge ACL', exam: 'n10-009', target: 'firewall-workspace',
    state: 'Ungraded initial policy; no allow rules have been added.', open: openAcl },
  { id: 'windows-firewall', title: 'Windows Defender Firewall: Allow the App', exam: '220-1202', target: 'firewall-workspace',
    state: 'Ungraded initial firewall overview; no application exception has been added.', open: openWindows },
  { id: 'workstation', title: 'Provision the Sales Workstation', exam: '220-1201', target: 'dragconnect',
    state: 'Ungraded initial workstation; every connection target is empty.', open: workstation },
]
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: [
  '--disable-background-networking', '--disable-sync',
  '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE localhost, EXCLUDE 127.0.0.1',
] })
const captures: Array<Record<string, unknown>> = []
const blockedOrigins = new Set<string>()
try {
  for (const width of [1440, 390]) {
    const context = await browser.newContext({ baseURL: origin.origin, viewport: { width, height: 1000 },
      deviceScaleFactor: 1, colorScheme: 'light', reducedMotion: 'reduce', serviceWorkers: 'block' })
    await context.route('**/*', route => {
      const url = new URL(route.request().url())
      if (url.origin === origin.origin) return route.continue()
      blockedOrigins.add(url.origin)
      return route.abort()
    })
    for (const source of sources) {
      const page = await context.newPage()
      const errors: string[] = [], failures: string[] = []
      page.on('pageerror', error => errors.push(error.message))
      page.on('response', response => {
        if (new URL(response.url()).origin === origin.origin && response.status() >= 400) failures.push(`${response.status()} ${new URL(response.url()).pathname}`)
      })
      await source.open(page)
      await settled(page)
      assert.equal(await page.getByTestId('feedback').count(), 0, 'A preview must never show grading feedback')
      assert.equal(await page.getByTestId('simulation-objectives').count(), 0, 'A preview must not reveal rubric milestones')
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Page overflow')
      const target = page.getByTestId(source.target)
      await target.scrollIntoViewIfNeeded()
      const destination = width === 1440 ? resolve(publicDirectory, `${source.id}.png`) : resolve(qaDirectory, `${source.id}-390.png`)
      const image = await target.screenshot({ path: destination, animations: 'disabled', caret: 'hide', style })
      assert.deepEqual(errors, [])
      assert.deepEqual(failures, [])
      const file = destination.slice(process.cwd().length + 1)
      captures.push({ file, title: source.title, exam: source.exam, state: source.state,
        viewport: { width, height: 1000 }, target: `[data-testid="${source.target}"]`,
        intrinsicWidth: image.readUInt32BE(16), intrinsicHeight: image.readUInt32BE(20), sha256: sha256(image) })
      console.log(`${file}: ${image.readUInt32BE(16)}×${image.readUInt32BE(20)}`)
      await page.close()
    }
    await context.close()
  }
  if (recordBefore) {
    for (const width of [320, 1440]) {
      const destination = resolve(qaDirectory, `pbq-guide-before-${width}.png`)
      assert(!existsSync(destination), 'Refusing to overwrite an existing before screenshot')
      const context = await browser.newContext({ baseURL: origin.origin, viewport: { width, height: 1000 }, deviceScaleFactor: 1,
        reducedMotion: 'reduce', colorScheme: 'light', serviceWorkers: 'block' })
      await context.route('**/*', route => new URL(route.request().url()).origin === origin.origin ? route.continue() : route.abort())
      const page = await context.newPage()
      await page.goto('/comptia-pbq-practice')
      await settled(page)
      const image = await page.screenshot({ path: destination, fullPage: true, animations: 'disabled', caret: 'hide' })
      captures.push({ file: destination.slice(process.cwd().length + 1), kind: 'before', path: '/comptia-pbq-practice',
        viewport: { width, height: 1000 }, intrinsicWidth: image.readUInt32BE(16), intrinsicHeight: image.readUInt32BE(20), sha256: sha256(image) })
      await context.close()
    }
  }
  writeFileSync(resolve(qaDirectory, 'preview-provenance.json'), JSON.stringify({
    capturedAt: new Date().toISOString(), sourceCommit: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
    browser: browser.version(), platform: process.platform, deviceScaleFactor: 1, theme: 'light', reducedMotion: 'reduce',
    capture: 'Native PNG screenshots of actual ungraded renderers. No image editing or composites.',
    isolatedPreview: origin.origin, buildManifestSha256: sha256(readFileSync('dist/.vite/manifest.json')),
    networkPolicy: 'Only the isolated loopback origin is allowed. All other browser requests and DNS are blocked; Worker outbound services are blocked by the maintained isolated harness.',
    blockedOrigins: [...blockedOrigins], captures,
    photoCredits: {
      file: 'public/pbq/CREDITS.md', url: '/pbq/CREDITS.md', sha256: sha256(readFileSync('public/pbq/CREDITS.md')),
      requiredAttribution: 'Workstation preview includes Wikimedia Commons photographs. Preserve the author/source/license links in the existing credits alongside the public preview.',
      rearPanel: { title: 'Computer ports.JPG', author: 'The High Fin Sperm Whale', license: 'CC BY-SA 3.0',
        source: 'https://commons.wikimedia.org/wiki/File:Computer_ports.JPG' },
    },
  }, null, 2) + '\n')
} finally {
  await browser.close()
}
