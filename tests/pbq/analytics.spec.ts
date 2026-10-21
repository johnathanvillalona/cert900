import { test, expect, type Page } from '@playwright/test'
import { CONSENT_KEY, consentRecord } from '../../src/lib/consent'
import { settled } from './helpers'

const id = 'G-TEST900123'
const adHosts = /googlesyndication|doubleclick|googleadservices|grow\.me|ethicalads/
const calls = (page: Page) => page.evaluate(() => (window as unknown as { __gaCalls?: unknown[][] }).__gaCalls ?? [])
const events = async (page: Page, name: string) => (await calls(page)).filter(c => c[0] === 'event' && c[1] === name)

async function mockAnalytics(page: Page, blocked = false) {
  await page.route('**/*', async route => {
    const url = new URL(route.request().url())
    if (url.pathname === '/analytics-config.json') return route.fulfill({ json: { measurementId: id, hosts: ['127.0.0.1'] } })
    if (url.hostname === 'www.googletagmanager.com') {
      if (blocked) return route.abort()
      // This transport double never contacts Google or creates an advertising impression.
      return route.fulfill({ contentType: 'application/javascript', body: `
        window.__gaCalls = [];
        window.gtag = function() {
          if (!window['ga-disable-${id}']) window.__gaCalls.push(Array.from(arguments));
        };
        for (const args of window.dataLayer || []) window.gtag(...Array.from(args));
      ` })
    }
    return ['127.0.0.1', 'localhost'].includes(url.hostname) ? route.continue() : route.abort()
  })
}
async function allow(page: Page) {
  await page.getByRole('button', { name: 'Allow analytics', exact: true }).click()
  await expect.poll(() => events(page, 'page_view').then(e => e.length)).toBe(1)
}

test('no GA4 before choice; decline persists; withdrawal removes GA cookies without touching progress', async ({ page }) => {
  await mockAnalytics(page)
  const requests: string[] = []
  page.on('request', r => { if (/google-analytics|googletagmanager|analytics-config/.test(r.url())) requests.push(r.url()) })
  await page.goto('/')
  await expect(page.getByRole('button', { name: 'Allow analytics' })).toBeVisible()
  expect(requests).toEqual([])
  await page.getByRole('button', { name: 'Decline', exact: true }).click()
  await page.reload()
  await expect(page.getByRole('status').filter({ hasText: 'Analytics declined.' })).toBeVisible()
  expect(requests).toEqual([])
  await page.getByRole('button', { name: 'Change preferences' }).click()
  await allow(page)
  await page.evaluate(() => {
    localStorage.setItem('cert900-test-progress', 'unchanged')
    document.cookie = '_ga=test; path=/'
    document.cookie = '_ga_TEST900123=test; path=/'
  })
  await page.getByRole('button', { name: 'Change preferences' }).click()
  await page.getByRole('button', { name: 'Decline', exact: true }).click()
  const count = (await calls(page)).length
  await page.getByTestId('exam-row').filter({ hasText: '220-1201' }).click()
  expect((await calls(page)).length).toBe(count)
  expect(await page.evaluate(() => localStorage.getItem('cert900-test-progress'))).toBe('unchanged')
  expect(await page.evaluate(() => document.cookie.split(';').some(v => v.trim().startsWith('_ga')))).toBe(false)
})

test('static articles and the SPA share consent without hydrating guide content or duplicating views', async ({ page }) => {
  await mockAnalytics(page)
  await page.goto('/common-network-ports?email=do-not-send@example.com#https')
  await allow(page)
  const first = JSON.stringify(await calls(page))
  expect(first).not.toContain('do-not-send')
  expect(first).not.toContain('#https')
  expect(await page.locator('html').getAttribute('class') ?? '').not.toContain('spa')
  await page.goto('/')
  await expect.poll(() => events(page, 'page_view').then(e => e.length)).toBe(1)
  await page.getByTestId('exam-row').filter({ hasText: '220-1201' }).click()
  await expect.poll(() => events(page, 'page_view').then(e => e.length)).toBe(2)
  await page.goBack()
  await expect.poll(() => events(page, 'page_view').then(e => e.length)).toBe(3)
  expect(await page.locator('script[data-cert900-ga4]').count()).toBe(1)
})

test('cross-tab withdrawal and storage clearing stop collection in an already-open tab', async ({ page, context }) => {
  await mockAnalytics(page)
  await page.goto('/'); await allow(page)
  const other = await context.newPage()
  await mockAnalytics(other)
  await other.goto('/common-network-ports')
  await expect.poll(() => events(other, 'page_view').then(e => e.length)).toBe(1)
  await page.getByRole('button', { name: 'Change preferences' }).click()
  await page.getByRole('button', { name: 'Decline', exact: true }).click()
  await expect(other.locator('[data-analytics-status]')).toHaveText('Analytics declined.')
  expect(await other.evaluate(id => Reflect.get(window, `ga-disable-${id}`), id)).toBe(true)
  await page.evaluate(key => localStorage.removeItem(key), CONSENT_KEY)
  await expect(other.locator('[data-analytics-status]')).toContainText('off until you allow')
  await other.close()
})

test('unavailable storage and blocked SDK never break practice or create advertising requests', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => { throw new DOMException('Unavailable', 'SecurityError') }
    Storage.prototype.getItem = () => { throw new DOMException('Unavailable', 'SecurityError') }
  })
  await mockAnalytics(page, true)
  const ads: string[] = []
  page.on('request', r => { if (adHosts.test(new URL(r.url()).hostname)) ads.push(r.url()) })
  await page.goto('/')
  await page.getByRole('button', { name: 'Allow analytics', exact: true }).click()
  await expect(page.locator('[data-analytics-status]')).toContainText('for this page only')
  await page.getByTestId('exam-row').filter({ hasText: '220-1201' }).click()
  await page.getByTestId('mode-pbq').click()
  await expect(page.getByTestId('qcard')).toBeVisible()
  expect(ads).toEqual([])
})

for (const mode of ['exam', 'practice', 'pbq'] as const) {
  test(`${mode}: consented attempt start and completion occur once and contain only approved fields`, async ({ page }) => {
    await mockAnalytics(page)
    await page.goto('/'); await allow(page)
    await page.getByTestId('exam-row').filter({ hasText: '220-1201' }).click()
    await page.getByTestId(`mode-${mode === 'practice' ? 'drill' : mode}`).click()
    if (mode === 'practice') await page.getByTestId('start-drill').click()
    await expect(page.getByTestId('qcard')).toBeVisible()
    await expect.poll(() => events(page, 'learning_attempt_start').then(e => e.length)).toBe(1)
    if (mode === 'exam') {
      await page.getByRole('button', { name: 'End exam & score', exact: true }).click()
      await page.getByTestId('confirm-end').click()
    } else {
      for (let n = 0; n < 25 && !(await page.getByTestId('finish').count()); n++) {
        if (mode === 'pbq') await page.getByTestId('check-pbq').click()
        else {
          await page.getByTestId('option').first().click()
          if (await page.getByTestId('check-multi').count()) {
            const options = page.getByTestId('option')
            for (let i = 1; i < await options.count() && !await page.getByTestId('check-multi').isEnabled(); i++) await options.nth(i).click()
            await page.getByTestId('check-multi').click()
          }
        }
        if (await page.getByTestId('finish').count()) break
        await page.getByTestId('next').click()
      }
      await page.getByTestId('finish').click()
    }
    await expect.poll(() => events(page, 'learning_attempt_complete').then(e => e.length)).toBe(1)
    const payload = (await events(page, 'learning_attempt_complete'))[0][2] as object
    expect(Object.keys(payload).sort()).toEqual(['certification', 'mode', 'page_location', 'page_referrer', 'page_title'])
    expect(payload).toMatchObject({ certification: '220-1201', mode })
    await page.getByRole('button', { name: 'Change preferences' }).click()
    expect((await events(page, 'learning_attempt_complete')).length).toBe(1)
    expect(await page.locator('script[src*="adsbygoogle"], ins.adsbygoogle').count()).toBe(0)
  })
}

for (const width of [320, 375, 390, 768, 1440]) {
  test(`consent controls: keyboard, static/SPA, light/dark at ${width}px`, async ({ page }, info) => {
    await mockAnalytics(page)
    await page.setViewportSize({ width, height: 900 })
    const errors: string[] = []
    page.on('pageerror', e => errors.push(e.message))
    for (const path of ['/', '/common-network-ports']) {
      await page.goto(path)
      for (const theme of ['light', 'dark']) {
        await page.evaluate(theme => document.documentElement.classList.toggle('dark', theme === 'dark'), theme)
        const change = page.getByRole('button', { name: 'Change preferences' })
        if (await change.isVisible()) await change.click()
        const button = page.getByRole('button', { name: 'Decline', exact: true })
        await button.scrollIntoViewIfNeeded()
        await button.focus(); await page.keyboard.press('Enter')
        await expect(page.locator('[data-analytics-status]')).toHaveText('Analytics declined.')
        await change.click()
        for (const control of await page.locator('[data-analytics-choice]').all()) expect((await control.boundingBox())!.height).toBeGreaterThanOrEqual(44)
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
        await settled(page)
        await page.locator('[data-analytics-preferences]').screenshot({ path: info.outputPath(`consent-${path === '/' ? 'app' : 'guide'}-${width}-${theme}.png`) })
      }
    }
    expect(errors).toEqual([])
  })
}

test('320px touch controls grant, edit and withdraw without an overlay or page overflow', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, viewport: { width: 320, height: 740 }, hasTouch: true, isMobile: true })
  try {
    const page = await context.newPage()
    await mockAnalytics(page)
    await page.goto('/')
    await page.getByRole('button', { name: 'Allow analytics', exact: true }).tap()
    await expect.poll(() => events(page, 'page_view').then(e => e.length)).toBe(1)
    await page.getByRole('button', { name: 'Change preferences' }).tap()
    await page.getByRole('button', { name: 'Decline', exact: true }).tap()
    await expect(page.locator('[data-analytics-status]')).toHaveText('Analytics declined.')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    expect(await page.locator('[data-analytics-preferences]').evaluate(e => getComputedStyle(e).position)).toBe('static')
  } finally { await context.close() }
})

test('expired choices and disabled production configuration remain safely off', async ({ page }) => {
  await page.route('**/*', r => ['127.0.0.1', 'localhost'].includes(new URL(r.request().url()).hostname) ? r.continue() : r.abort())
  await page.addInitScript(({ key, record }) => localStorage.setItem(key, record), { key: CONSENT_KEY, record: consentRecord('allow', Date.now() - 181 * 86400000) })
  await page.goto('/')
  await expect(page.getByRole('button', { name: 'Allow analytics' })).toBeVisible()
  await page.getByRole('button', { name: 'Allow analytics' }).click()
  expect(await page.locator('script[data-cert900-ga4]').count()).toBe(0)
})
