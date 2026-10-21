import { test, expect, type Page } from '@playwright/test'
import { EXAM_META } from '../../src/data/meta'
import { GUIDE_PATHS, type GuideKey } from '../../src/data/routes'
import { settled } from './helpers'

// Independent resource oracle: a mistaken registry binding must fail the browser test.
const guides: Record<string, GuideKey> = {
  '220-1201': 'aplus1', '220-1202': 'aplus2', 'n10-009': 'nplus', 'sy0-701': 'secplus',
  'ccna-200-301': 'ccna', 'aif-c01': 'aif', 'clf-c02': 'clf', 'saa-c03': 'saa',
  'az-900': 'az900', 'sc-900': 'sc900', 'az-104': 'az104',
}
const references: Record<string, GuideKey[]> = {
  '220-1201': ['cables'], '220-1202': [], 'n10-009': ['ports'], 'sy0-701': ['ports'],
  'ccna-200-301': ['ccnacli'], 'aif-c01': [], 'clf-c02': ['cloudsvc'], 'saa-c03': ['cloudsvc'],
  'az-900': ['cloudsvc'], 'sc-900': [], 'az-104': ['cloudsvc'],
}
const related: Record<string, GuideKey[]> = {
  '220-1201': ['aplus', 'pbq'], '220-1202': ['aplus', 'pbq'], 'n10-009': ['pbq'],
}
const widths = [320, 375, 390, 768, 1440]
const local = (url: string) => ['127.0.0.1', 'localhost'].includes(new URL(url).hostname)
const adHosts = /googlesyndication|doubleclick|googleadservices|grow\.me|ethicalads/

test.beforeEach(async ({ context }) => {
  await context.route('**/*', r => local(r.request().url()) ? r.continue() : r.abort())
})

async function assertHub(page: Page, id: string) {
  const meta = EXAM_META[id]
  const hub = page.getByTestId('study-hub')
  await expect(hub).toHaveAttribute('data-exam-id', id)
  await expect(hub.locator('h1')).toHaveCount(1)
  await expect(hub.getByTestId('hub-primary-guide')).toHaveAttribute('href', GUIDE_PATHS[guides[id]])
  expect(await hub.getByTestId('hub-reference').evaluateAll(links => links.map(a => a.getAttribute('href')))).toEqual(references[id].map(key => GUIDE_PATHS[key]))
  expect(await hub.getByTestId('hub-related').evaluateAll(links => links.map(a => a.getAttribute('href')))).toEqual((related[id] ?? []).map(key => GUIDE_PATHS[key]))
  await expect(hub.getByTestId('hub-practice-menu')).toHaveAttribute('href', `/exam/${id}`)
  await expect(hub.getByTestId('hub-drills')).toHaveAttribute('href', `/exam/${id}/drill`)
  await expect(hub.getByTestId('hub-plan')).toHaveAttribute('href', `/exam/${id}/plan`)
  await expect(hub.getByTestId('hub-progress')).toHaveAttribute('href', `/exam/${id}/stats`)
  await expect(hub.getByTestId('hub-lab')).toHaveCount(meta.pbqCount ? 1 : 0)
  if (meta.pbqCount) await expect(hub.getByTestId('hub-lab')).toHaveAttribute('href', `/exam/${id}`)
  await expect(hub.getByTestId('hub-domain')).toHaveCount(Object.keys(meta.domains).length)
  await expect(hub.getByTestId('hub-video')).toHaveCount(Object.keys(meta.videos).length)
  expect(await page.locator('html').getAttribute('class') ?? '').not.toContain('spa')
  await expect(page.getByRole('heading', { name: 'How to use this to pass', exact: true })).toHaveCount(0)
  await expect(page.locator('script[src*="adsbygoogle"], ins.adsbygoogle')).toHaveCount(0)
}

test('all 11 hubs cold-load, refresh, link natively to canonical guides and return without duplication', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', e => errors.push(e.message))
  for (const [id, key] of Object.entries(guides)) {
    await page.goto(`/study/${id}`)
    await assertHub(page, id)
    await page.reload()
    await assertHub(page, id)
    await page.getByTestId('hub-primary-guide').focus()
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS[key]}$`))
    await expect(page.getByRole('heading', { name: 'How to use this to pass', exact: true })).toHaveCount(1)
    await expect(page.locator(`[data-testid="guide-study-hub"][href="/study/${id}"]`)).toHaveCount(1)
    await page.goBack()
    await assertHub(page, id)
    await page.goForward()
    await expect(page.getByTestId('guide-page')).toBeVisible()
  }
  expect(errors).toEqual([])
})

test('all hub HTML, canonical URLs, sitemap and internal resource destinations are valid', async ({ request, page }) => {
  const sitemap = await request.get('/sitemap.xml')
  expect(sitemap.status()).toBe(200)
  const xml = await sitemap.text()
  const internal = new Set<string>()
  const descriptions = new Set<string>()
  for (const id of Object.keys(guides)) {
    const path = `/study/${id}`
    const response = await request.get(path)
    expect(response.status(), path).toBe(200)
    const html = await response.text()
    const info = await page.evaluate(html => {
      const doc = new DOMParser().parseFromString(html, 'text/html')
      return {
        hubCount: doc.querySelectorAll('[data-testid="study-hub"]').length,
        canonical: doc.querySelector('link[rel="canonical"]')?.getAttribute('href'),
        description: doc.querySelector('meta[name="description"]')?.getAttribute('content'),
        h1Count: doc.querySelectorAll('main h1').length,
        links: [...doc.querySelectorAll('main a[href]')].map(a => a.getAttribute('href')!),
      }
    }, html)
    expect(info.hubCount).toBe(1)
    expect(info.h1Count).toBe(1)
    expect(info.canonical).toBe(`https://cert900.com${path}`)
    expect(info.description?.length).toBeGreaterThan(40)
    descriptions.add(info.description!)
    expect(xml.match(new RegExp(`<loc>https://cert900\\.com${path}</loc>`, 'g')), path).toHaveLength(1)
    for (const href of info.links) if (href.startsWith('/')) internal.add(href.split(/[?#]/, 1)[0])
  }
  expect(descriptions.size).toBe(11)
  for (const path of internal) expect((await request.get(path)).status(), path).toBe(200)
})

test('topic videos remain exactly the existing domain mappings with safe external-link labeling', async ({ page }) => {
  for (const id of Object.keys(guides)) {
    await page.goto(`/study/${id}`)
    for (const domain of await page.getByTestId('hub-domain').all()) {
      await domain.locator('summary').click()
      const summary = (await domain.locator('summary').innerText()).trim()
      const domainId = Object.keys(EXAM_META[id].domains).find(key => summary.includes(EXAM_META[id].domains[key]))
      expect(domainId, `${id}: ${summary}`).toBeTruthy()
      const expected = Object.values(EXAM_META[id].videos).filter(video => String(video.d) === domainId)
      expect(await domain.getByTestId('hub-video').evaluateAll(links => links.map(a => a.getAttribute('href')))).toEqual(expected.map(video => video.u))
      for (const video of await domain.getByTestId('hub-video').all()) {
        await expect(video).toHaveAttribute('target', '_blank')
        await expect(video).toHaveAttribute('rel', /noopener/)
        await expect(video).toHaveAttribute('rel', /noreferrer/)
        await expect(video).toContainText(/external|opens.*tab/i)
      }
    }
  }
})

test('all 11 hubs and guide backlinks remain usable without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, javaScriptEnabled: false })
  try {
    await context.route('**/*', r => local(r.request().url()) ? r.continue() : r.abort())
    const page = await context.newPage()
    for (const [id, key] of Object.entries(guides)) {
      await page.goto(`/study/${id}`)
      await expect(page.getByTestId('study-hub')).toBeVisible()
      const domain = page.getByTestId('hub-domain').first()
      await domain.locator('summary').focus()
      await page.keyboard.press('Enter')
      await expect(domain).toHaveAttribute('open', '')
      await expect(domain.getByTestId('hub-video').first()).toBeVisible()
      await page.getByTestId('hub-primary-guide').focus()
      await page.keyboard.press('Enter')
      await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS[key]}$`))
      const back = page.locator(`[data-testid="guide-study-hub"][href="/study/${id}"]`)
      await expect(back).toBeVisible()
      await back.click()
      await expect(page.getByTestId('study-hub')).toHaveAttribute('data-exam-id', id)
    }
  } finally { await context.close() }
})

test('hub practice, drills, plan, progress and available lab links open the correct exam without starting an attempt', async ({ page }) => {
  for (const id of ['220-1201', 'clf-c02']) {
    for (const [testId, suffix, visibleId] of [
      ['hub-practice-menu', '', 'mode-exam'],
      ['hub-drills', '/drill', 'start-drill'],
      ['hub-plan', '/plan', 'plan-header'],
      ['hub-progress', '/stats', 'readiness'],
    ]) {
      await page.goto(`/study/${id}`)
      await page.getByTestId(testId).click()
      await expect(page).toHaveURL(new RegExp(`/exam/${id}${suffix}$`))
      await expect(page.getByTestId(visibleId)).toBeVisible()
      await expect(page.getByTestId('brand')).toContainText(EXAM_META[id].code)
      await expect(page.getByTestId('qcard')).toHaveCount(0)
      await page.goBack()
      await expect(page.getByTestId('study-hub')).toHaveAttribute('data-exam-id', id)
    }
    await expect(page.getByTestId('hub-lab')).toHaveCount(id === '220-1201' ? 1 : 0)
    if (id === '220-1201') {
      await page.getByTestId('hub-lab').click()
      await expect(page).toHaveURL(/\/exam\/220-1201$/)
      await expect(page.getByTestId('mode-pbq')).toBeVisible()
      await expect(page.getByTestId('qcard')).toHaveCount(0)
    }
  }
})

for (const width of widths) {
  test(`hubs at ${width}px: all exams, both themes, complete domain controls and no overflow`, async ({ page }, info) => {
    const errors: string[] = []
    page.on('pageerror', e => errors.push(e.message))
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()) })
    await page.setViewportSize({ width, height: 900 })
    for (const theme of ['light', 'dark']) {
      await page.addInitScript(theme => localStorage.setItem('trainer-theme', theme), theme)
      for (const id of Object.keys(guides)) {
        await page.goto(`/study/${id}`)
        await page.evaluate(theme => document.documentElement.classList.toggle('dark', theme === 'dark'), theme)
        expect(await page.locator('html').evaluate(e => e.classList.contains('dark'))).toBe(theme === 'dark')
        await assertHub(page, id)
        await page.evaluate(() => document.querySelectorAll('details[data-testid="hub-domain"]').forEach(e => e.setAttribute('open', '')))
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
        const hub = page.getByTestId('study-hub')
        expect(await hub.evaluate(e => [...e.querySelectorAll('h1,h2,h3,p,a,summary')].every(node => node.scrollWidth <= node.clientWidth + 1))).toBe(true)
        expect(await hub.evaluate(e => !e.querySelector('a a,a button,button a,button button'))).toBe(true)
        for (const testId of ['hub-primary-guide', 'hub-practice-menu', 'hub-drills', 'hub-plan', 'hub-progress']) {
          const control = hub.getByTestId(testId)
          await control.focus()
          await expect(control).toBeFocused()
          expect((await control.boundingBox())!.height).toBeGreaterThanOrEqual(44)
        }
        for (const summary of await hub.locator('summary').all()) expect((await summary.boundingBox())!.height).toBeGreaterThanOrEqual(44)
        if (id === '220-1201' && [320, 390, 1440].includes(width)) {
          await page.evaluate(() => document.querySelectorAll('details').forEach(e => e.removeAttribute('open')))
          await settled(page)
          await page.screenshot({ path: info.outputPath(`hub-${width}-${theme}.png`), fullPage: true })
        }
      }
    }
    expect(errors).toEqual([])
  })
}

test('320px touch: decline, native hub/guide navigation and preferences retain consent without advertising', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, viewport: { width: 320, height: 740 }, hasTouch: true, isMobile: true })
  try {
    await context.route('**/*', r => local(r.request().url()) ? r.continue() : r.abort())
    const page = await context.newPage()
    const optional: string[] = []
    page.on('request', r => { if (/googletagmanager|google-analytics|analytics-config|googlesyndication|doubleclick|grow\.me/.test(r.url())) optional.push(r.url()) })
    await page.goto('/study/220-1201')
    await page.getByRole('button', { name: 'Decline', exact: true }).tap()
    await page.getByTestId('hub-domain').first().locator('summary').tap()
    await expect(page.getByTestId('hub-domain').first().getByTestId('hub-video').first()).toBeVisible()
    await page.getByTestId('hub-primary-guide').tap()
    await expect(page.locator('[data-analytics-status]')).toHaveText('Analytics declined.')
    await page.locator('[data-testid="guide-study-hub"][href="/study/220-1201"]').tap()
    await expect(page.locator('[data-analytics-status]')).toHaveText('Analytics declined.')
    await page.getByRole('button', { name: 'Change preferences' }).tap()
    await expect(page.getByRole('button', { name: 'Allow analytics', exact: true })).toBeVisible()
    await page.getByRole('button', { name: 'Decline', exact: true }).tap()
    expect(optional).toEqual([])
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  } finally { await context.close() }
})

test('consented hub analytics emits one sanitized pageview and stops after withdrawal; no advertising requests', async ({ page }) => {
  const id = 'G-TEST900123'
  const ads: string[] = []
  const requests: string[] = []
  page.on('request', r => {
    if (adHosts.test(new URL(r.url()).hostname)) ads.push(r.url())
    if (/googletagmanager|google-analytics|analytics-config/.test(r.url())) requests.push(r.url())
  })
  await page.route('**/*', route => {
    const url = new URL(route.request().url())
    if (url.pathname === '/analytics-config.json') return route.fulfill({ json: { measurementId: id, hosts: ['127.0.0.1'] } })
    if (url.hostname === 'www.googletagmanager.com') return route.fulfill({ contentType: 'application/javascript', body: `
      window.__gaCalls = [];
      window.gtag = function() { if (!window['ga-disable-${id}']) window.__gaCalls.push(Array.from(arguments)); };
      for (const args of window.dataLayer || []) window.gtag(...Array.from(args));
    ` })
    return local(route.request().url()) ? route.continue() : route.abort()
  })
  const calls = () => page.evaluate(() => (window as unknown as { __gaCalls?: unknown[][] }).__gaCalls ?? [])
  const views = async () => (await calls()).filter(call => call[0] === 'event' && call[1] === 'page_view')
  await page.goto('/study/220-1201?email=do-not-send@example.com#private-note')
  await expect(page.getByRole('button', { name: 'Allow analytics', exact: true })).toBeVisible()
  expect(requests).toEqual([])
  await page.getByRole('button', { name: 'Allow analytics', exact: true }).click()
  await expect.poll(async () => (await views()).length).toBe(1)
  expect((await views())[0][2]).toMatchObject({ page_location: 'https://cert900.com/study/220-1201' })
  expect(JSON.stringify(await calls())).not.toMatch(/do-not-send|private-note/)
  await page.getByTestId('hub-domain').first().locator('summary').click()
  expect((await views()).length).toBe(1)
  await page.reload()
  await expect.poll(async () => (await views()).length).toBe(1)
  await page.getByRole('button', { name: 'Change preferences' }).click()
  await page.getByRole('button', { name: 'Decline', exact: true }).click()
  const count = (await calls()).length
  await page.getByTestId('hub-domain').first().locator('summary').click()
  expect((await calls()).length).toBe(count)
  expect(await page.evaluate(id => Reflect.get(window, `ga-disable-${id}`), id)).toBe(true)
  expect(ads).toEqual([])
})
