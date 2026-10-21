import { test, expect, type Page } from '@playwright/test'
import { build } from 'vite'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { AdSlot } from '../../src/components/AdSlot'
import { ADVERTISING, ADVERTISING_GUIDE_PATH } from '../../src/lib/advertising-policy'
import { GUIDE_META } from '../../src/data/guide-meta'
import { STUDY_PATHS } from '../../src/data/routes'
import { settled } from './helpers'

const policy = { ...ADVERTISING, enabled: true, siteApproved: true, cmpVerified: true,
  publisher: 'ca-pub-0000000000000000',
  placements: { 'guide-primary': { enabled: true, slot: '0000000000' }, 'guide-secondary': { enabled: false, slot: '' } } }
const markup = renderToStaticMarkup(React.createElement(AdSlot, { path: ADVERTISING_GUIDE_PATH, policy }))
const original = readFileSync(resolve('dist', `${ADVERTISING_GUIDE_PATH.slice(1)}.html`), 'utf8')
const insertion = '<section class="mt-12"><h2 class="font-heading text-2xl font-semibold tracking-tight">More free practice tests</h2>'
let bundle = ''
test.beforeAll(async () => {
  const output = await build({ configFile: false, envDir: false, envPrefix: [], logLevel: 'silent', resolve: { alias: { '@': resolve('src') } },
    build: { write: false, minify: false, lib: { entry: resolve('tools/qa/advertising-fixture.ts'), name: 'AdvertisingFixture', formats: ['iife'] } } })
  const result = Array.isArray(output) ? output[0] : output
  if (!('output' in result)) throw new Error('Missing fixture output')
  bundle = result.output.filter(chunk => chunk.type === 'chunk').map(chunk => chunk.code).join('\n')
})

// Every synthetic HTTPS document and SDK response is fulfilled by Playwright.
// Chrome has no external DNS. No Google code, real ads, or production data.
async function fixture(page: Page, blocked = false, bootGate: Promise<void> = Promise.resolve(), withSecondary = false) {
  const requests: string[] = []
  await page.addInitScript(() => {
    const host = window as unknown as Record<string, any>
    let callback: ((data: object, success: boolean) => void) | undefined
    const granted = () => sessionStorage.getItem('mock-ad-choice') === 'grant'
    const emit = (eventStatus = 'useractioncomplete') => callback?.({ cmpId: 300, cmpStatus: 'loaded', gdprApplies: true, eventStatus, listenerId: 12,
      purpose: { consents: Object.fromEntries([1, 2, 3, 4, 7, 9, 10].map(id => [id, granted()])) }, vendor: { consents: { 755: granted() } } }, true)
    host.__mockAdDialog = () => emit('cmpuishown')
    host.__mockAdChoice = (choice: string) => { sessionStorage.setItem('mock-ad-choice', choice); emit() }
    host.__tcfapi = (command: string, _version: number, fn: typeof callback) => { if (command === 'addEventListener') { callback = fn; emit() } }
    host.googlefc = { callbackQueue: { push: (entry: Record<string, () => void>) => Object.values(entry).forEach(fn => fn()) },
      ConsentModePurposeStatusEnum: { GRANTED: 1 },
      getGoogleConsentModeValues: () => ({ adStoragePurposeConsentStatus: granted() ? 1 : 2, adUserDataPurposeConsentStatus: granted() ? 1 : 2, adPersonalizationPurposeConsentStatus: granted() ? 1 : 2 }),
      showRevocationMessage: () => { host.__preferencesOpened = true; host.__mockAdChoice('deny') } }
  })
  await page.route('**/*', async route => {
    const url = new URL(route.request().url())
    if (url.hostname === 'pagead2.googlesyndication.com') {
      requests.push(url.pathname)
      if (blocked) return route.abort()
      return route.fulfill({ contentType: 'application/javascript', body: `window.__mockLoads=(window.__mockLoads||0)+1;
        window.adsbygoogle={push:function(){window.__mockRequests=(window.__mockRequests||0)+1;
        const el=document.querySelector('ins.adsbygoogle'); el.innerHTML='<div style="height:250px;display:grid;place-items:center;font:14px system-ui">Mock advertisement · no network</div>';}};` })
    }
    if (url.origin === 'https://cert900.com') {
      if (url.pathname.startsWith('/assets/') && /^\/assets\/[\w.-]+$/.test(url.pathname)) {
        const mime = url.pathname.endsWith('.css') ? 'text/css' : url.pathname.endsWith('.js') ? 'application/javascript' : 'font/woff2'
        return route.fulfill({ contentType: mime, body: readFileSync(resolve('dist', url.pathname.slice(1))) })
      }
      if (url.pathname === '/__mock-ad-fixture.js') { await bootGate; return route.fulfill({ contentType: 'application/javascript', body: bundle }) }
      if (url.pathname === '/analytics-config.json') return route.fulfill({ json: { measurementId: '', hosts: [] } })
      if (route.request().isNavigationRequest()) {
        if (!original.includes(insertion)) throw new Error('Missing reviewed fixture insertion point')
        const extra = withSecondary ? renderToStaticMarkup(React.createElement(AdSlot, {
          path: ADVERTISING_GUIDE_PATH, placement: 'guide-secondary',
          policy: { ...policy, placements: { ...policy.placements, 'guide-secondary': { enabled: true, slot: '1111111111' } } },
        })) : ''
        const html = original.replace(insertion, `${markup}${extra}${insertion}`).replace('</body>', '<script src="/__mock-ad-fixture.js"></script></body>')
        return route.fulfill({ contentType: 'text/html', body: html })
      }
      return route.fulfill({ status: 204, body: '' })
    }
    return route.abort()
  })
  return requests
}
const choose = (page: Page, choice: string) => page.evaluate(choice => (window as unknown as { __mockAdChoice: (choice: string) => void }).__mockAdChoice(choice), choice)
const unitRequests = (page: Page) => page.evaluate(() => (window as unknown as { __mockRequests?: number }).__mockRequests ?? 0)

test('production HTML for all static content contains no inventory or advertising bootstrap', async ({ page, request }, info) => {
  const ads: string[] = []
  page.on('request', r => { if (/googlesyndication|doubleclick|googleadservices|fundingchoices|ethicalads|grow\.me/.test(r.url())) ads.push(r.url()) })
  await page.route('**/*', r => ['127.0.0.1', 'localhost'].includes(new URL(r.request().url()).hostname) ? r.continue() : r.abort())
  const manifest = JSON.parse(readFileSync('dist/.vite/manifest.json', 'utf8'))
  const entry = manifest['src/advertising-client.ts'].file
  for (const root of ['index.html', 'src/content-client.ts']) {
    const seen = new Set<string>()
    const visit = (key: string) => {
      if (seen.has(key)) return
      seen.add(key)
      const asset = manifest[key]
      expect(asset, key).toBeTruthy()
      if (asset.file.endsWith('.js')) {
        const code = readFileSync(resolve('dist', asset.file), 'utf8')
        expect(code, `${root} -> ${key}`).not.toMatch(/pagead2\.googlesyndication\.com|media\.ethicalads\.io/)
      }
      for (const next of [...(asset.imports ?? []), ...(asset.dynamicImports ?? [])]) visit(next)
    }
    visit(root)
    expect(seen.has('src/advertising-client.ts')).toBe(false)
  }
  for (const path of ['/', '/privacy', '/terms', ...Object.values(GUIDE_META).map(g => g.path), ...STUDY_PATHS]) {
    const response = await request.get(path)
    expect(response.ok(), path).toBe(true)
    const html = await response.text()
    expect(html, path).not.toContain('data-guide-ad=')
    expect(html, path).not.toContain(entry)
    expect(html, path).not.toMatch(/<script[^>]+(?:adsbygoogle|fundingchoices|ethicalads)/)
  }
  for (const path of [ADVERTISING_GUIDE_PATH, '/study/n10-009', '/']) { await page.goto(path); await settled(page) }
  expect(ads).toEqual([])
  for (const width of [320, 375, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(ADVERTISING_GUIDE_PATH)
    await settled(page)
    await page.getByRole('heading', { name: 'More free practice tests', exact: true }).scrollIntoViewIfNeeded()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await page.screenshot({ path: info.outputPath(`disabled-guide-${width}.png`) })
  }
})

for (const width of [320, 375, 390, 768, 1440]) {
  test(`mock manual unit: consent, stable layout, withdrawal and accessible controls at ${width}px`, async ({ page }, info) => {
    await page.setViewportSize({ width, height: 900 })
    const errors: string[] = []; page.on('pageerror', error => errors.push(error.message))
    let releaseBoot = () => {}
    const boot = new Promise<void>(resolve => { releaseBoot = resolve })
    const requests = await fixture(page, false, boot)
    const navigation = page.goto(`https://cert900.com${ADVERTISING_GUIDE_PATH}`)
    const unit = page.getByRole('complementary', { name: 'Advertisement', exact: true })
    await expect(unit).toBeVisible()
    await settled(page)
    await expect(page.getByRole('button', { name: 'Advertising privacy choices' })).toBeDisabled()
    const reservedHeight = (await unit.boundingBox())!.height
    releaseBoot(); await navigation
    await expect(page.getByRole('button', { name: 'Advertising privacy choices' })).toBeEnabled()
    expect((await unit.boundingBox())!.height).toBe(reservedHeight)
    expect(requests).toEqual([])
    await choose(page, 'deny'); expect(requests).toEqual([])
    const surface = unit.locator('.guide-ad-surface')
    const before = await surface.boundingBox()
    const afterSection = page.getByRole('heading', { name: 'More free practice tests', exact: true })
    const beforeY = (await afterSection.boundingBox())!.y
    await choose(page, 'grant')
    await expect.poll(() => unitRequests(page)).toBe(1)
    await choose(page, 'grant'); expect(requests).toHaveLength(1)
    expect((await surface.boundingBox())!.height).toBe(250)
    expect((await surface.boundingBox())!.width).toBe(before!.width)
    expect((await afterSection.boundingBox())!.y).toBe(beforeY)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    for (const theme of ['light', 'dark']) {
      await page.evaluate(theme => document.documentElement.classList.toggle('dark', theme === 'dark'), theme)
      await unit.scrollIntoViewIfNeeded()
      await page.screenshot({ path: info.outputPath(`mock-guide-${width}-${theme}.png`) })
    }
    const preferences = page.getByRole('button', { name: 'Advertising privacy choices' })
    expect((await preferences.boundingBox())!.height).toBeGreaterThanOrEqual(44)
    await preferences.focus(); await Promise.all([page.waitForEvent('load'), page.keyboard.press('Enter')])
    await expect.poll(() => page.evaluate(() => !!(window as unknown as { __preferencesOpened?: boolean }).__preferencesOpened)).toBe(true)
    await expect.poll(() => unitRequests(page)).toBe(0)
    expect(requests).toHaveLength(1)
    expect(await page.locator('script[data-cert900-advertising]').count()).toBe(0)
    await choose(page, 'grant'); expect(requests).toHaveLength(1)
    expect(errors).toEqual([])
  })
}

test('CMP withdrawal unloads a loaded SDK and prevents new requests after refresh', async ({ page }) => {
  const requests = await fixture(page)
  await page.goto(`https://cert900.com${ADVERTISING_GUIDE_PATH}`)
  await choose(page, 'grant'); await expect.poll(() => unitRequests(page)).toBe(1)
  await page.evaluate(() => (window as unknown as { __mockAdDialog: () => void }).__mockAdDialog())
  expect(await unitRequests(page)).toBe(1)
  await Promise.all([page.waitForEvent('load'), choose(page, 'deny')])
  await expect.poll(() => unitRequests(page)).toBe(0)
  await expect(page.locator('script[data-cert900-advertising]')).toHaveCount(0)
  await page.reload(); expect(requests).toHaveLength(1)
})

test('unsupported routes and learning SPA marker cannot bootstrap even with a mock enabled policy', async ({ page }) => {
  const requests = await fixture(page)
  for (const path of ['/study/n10-009', '/exam/n10-009/quiz', '/privacy', '/login', '/progress', `${ADVERTISING_GUIDE_PATH}?private=1`]) {
    await page.goto(`https://cert900.com${path}`)
    await choose(page, 'grant')
    expect(requests, path).toEqual([])
  }
  await page.addInitScript(() => document.addEventListener('DOMContentLoaded', () => document.documentElement.classList.add('spa')))
  // The marker must exist before boot; fulfill the fixture with that marker.
  await page.route(`https://cert900.com${ADVERTISING_GUIDE_PATH}`, route => route.fulfill({ contentType: 'text/html', body: original.replace('<html', '<html class="spa"').replace(insertion, `${markup}${insertion}`).replace('</body>', '<script src="/__mock-ad-fixture.js"></script></body>') }))
  await page.goto(`https://cert900.com${ADVERTISING_GUIDE_PATH}`); await choose(page, 'grant')
  expect(requests).toEqual([])
})

test('a blocked advertising SDK never prevents guide navigation or analytics choice', async ({ page }) => {
  const requests = await fixture(page, true)
  await page.goto(`https://cert900.com${ADVERTISING_GUIDE_PATH}`)
  await choose(page, 'grant'); await expect.poll(() => requests.length).toBe(1)
  await page.getByRole('button', { name: 'Decline', exact: true }).click()
  await expect(page.locator('[data-analytics-status]')).toHaveText('Analytics declined.')
  expect(await unitRequests(page)).toBe(0)
  await page.getByTestId('guide-study-hub').click()
  await expect(page).toHaveURL('https://cert900.com/study/n10-009')
  expect(requests).toHaveLength(1)
})

test('320px touch: advertising choices stay reachable and rejection never starts the SDK', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 320, height: 740 }, hasTouch: true, isMobile: true })
  try {
    const page = await context.newPage(); const requests = await fixture(page)
    await page.goto(`https://cert900.com${ADVERTISING_GUIDE_PATH}`)
    await choose(page, 'deny'); expect(requests).toEqual([])
    const preferences = page.getByRole('button', { name: 'Advertising privacy choices' })
    await preferences.scrollIntoViewIfNeeded()
    await Promise.all([page.waitForEvent('load'), preferences.tap()])
    await expect.poll(() => page.evaluate(() => !!(window as unknown as { __preferencesOpened?: boolean }).__preferencesOpened)).toBe(true)
    expect(requests).toEqual([])
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  } finally { await context.close() }
})

// No second insertion point exists in production; this only verifies that the
// reusable controller honors separate future unit keys without duplicate loads.
test('future secondary unit uses one SDK and one request per enabled unit', async ({ page }) => {
  const requests = await fixture(page, false, Promise.resolve(), true)
  await page.goto(`https://cert900.com${ADVERTISING_GUIDE_PATH}`)
  await choose(page, 'grant')
  await expect.poll(() => unitRequests(page)).toBe(2)
  await choose(page, 'grant')
  expect(requests).toHaveLength(1)
  expect(await unitRequests(page)).toBe(2)
})
