import { test, expect } from '@playwright/test'
import { LEGAL_PATHS, GUIDE_PATHS, STUDY_PATHS } from '../../src/data/routes'
import { LEGAL_METADATA, metadataForPath } from '../../src/lib/page-metadata'
import { LEGAL_EFFECTIVE_DATE } from '../../src/screens/Legal'

test.beforeEach(async ({ context }) => {
  await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname)
    ? route.continue() : route.abort())
})

function head(html?: string) {
  const doc = html === undefined ? document : new DOMParser().parseFromString(html, 'text/html')
  const values = (selector: string) => [...doc.querySelectorAll(selector)].map(e => e.getAttribute('content') ?? e.getAttribute('href') ?? e.textContent)
  return {
    title: values('head title'), description: values('head meta[name="description"]'),
    canonical: values('head link[rel="canonical"]'), robots: values('head meta[name="robots"]'),
    ogTitle: values('head meta[property="og:title"]'), ogDescription: values('head meta[property="og:description"]'), ogUrl: values('head meta[property="og:url"]'),
    twitterTitle: values('head meta[name="twitter:title"]'), twitterDescription: values('head meta[name="twitter:description"]'),
    // Site identity schema is valid everywhere. The homepage FAQ/list is not.
    homeGraphs: doc.querySelectorAll('script[data-home-jsonld]').length,
    h1: [...doc.querySelectorAll('main h1')].map(e => e.textContent),
    legalText: doc.querySelector('[data-testid="legal-page"]')?.textContent?.replace(/\s+/g, ' ').trim() ?? null,
  }
}

test('all 36 sitemap URLs have unique, self-canonical, coherent initial and rendered metadata', async ({ page, request }) => {
  await page.goto('/')
  const xml = await (await request.get('/sitemap.xml')).text()
  const entries = await page.evaluate(xml => [...new DOMParser().parseFromString(xml, 'application/xml').querySelectorAll('url')].map(e => ({
    path: new URL(e.querySelector('loc')!.textContent!).pathname,
    lastmod: e.querySelector('lastmod')?.textContent ?? null,
  })), xml)
  expect(entries).toHaveLength(36)
  expect(entries.filter(e => e.path.startsWith('/study/'))).toHaveLength(11)
  const titles = new Set<string>()
  for (const { path, lastmod } of entries) {
    const response = await page.goto(path)
    expect(response!.status(), path).toBe(200)
    expect(response!.headers()['x-robots-tag'] ?? '', path).not.toContain('noindex')
    const raw = await page.evaluate(head, await response!.text())
    await expect(page.locator('h1').first()).toBeVisible()
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'index, follow')
    const rendered = await page.evaluate(head)
    // Root <noscript> is intentionally replaced by the interactive homepage.
    expect({ ...rendered, h1: [], legalText: null }, path).toEqual({ ...raw, h1: [], legalText: null })
    expect(raw.title, path).toHaveLength(1)
    expect(raw.description, path).toHaveLength(1)
    expect(raw.description[0]!.length, path).toBeGreaterThan(50)
    expect(raw.canonical, path).toEqual([`https://cert900.com${path}`])
    expect(raw.ogUrl, path).toEqual(raw.canonical)
    expect(raw.ogTitle, path).toEqual(raw.title)
    expect(raw.twitterTitle, path).toEqual(raw.title)
    expect(raw.ogDescription, path).toEqual(raw.description)
    expect(raw.twitterDescription, path).toEqual(raw.description)
    expect(titles.has(raw.title[0]!), path).toBe(false)
    titles.add(raw.title[0]!)
    expect(lastmod, path).toBe((LEGAL_PATHS as readonly string[]).includes(path) ? LEGAL_EFFECTIVE_DATE : null)
    if ((LEGAL_PATHS as readonly string[]).includes(path)) {
      expect(rendered.legalText, path).toBe(raw.legalText)
      expect(raw.h1, path).toHaveLength(1)
      expect(raw.homeGraphs, path).toBe(0)
    }
  }
})

test('public legal pages deliver their unchanged content and metadata without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, javaScriptEnabled: false })
  await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname) ? route.continue() : route.abort())
  const page = await context.newPage()
  for (const path of LEGAL_PATHS) {
    await page.goto(path)
    await expect(page).toHaveTitle(LEGAL_METADATA[path].title)
    await expect(page.getByTestId('legal-page')).toContainText('Effective October 21, 2026')
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', LEGAL_METADATA[path].canonical)
    await expect(page.getByRole('link', { name: 'cert900 home', exact: true })).toHaveAttribute('href', '/')
    await expect(page.getByRole('heading', { name: 'Optional analytics' })).toBeVisible()
    expect(await page.locator('main h1').count()).toBe(1)
  }
  await context.close()
})

test('private application, auth-looking and unknown routes have safe initial metadata, with no homepage FAQ', async ({ page }) => {
  for (const path of ['/progress', '/plan', '/exams', '/admin', '/exam/220-1201', '/exam/220-1201/quiz', '/exam/220-1201/results', '/exam/n10-009/stats', '/login', '/account', '/auth/callback', '/seo2-unknown']) {
    const response = await page.goto(`${path}?token=DO_NOT_ECHO#private`)
    const raw = await page.evaluate(head, await response!.text())
    const meta = metadataForPath(path)!
    expect(response!.headers()['x-robots-tag'], path).toBe('noindex')
    expect(raw.title, path).toEqual([meta.title])
    expect(raw.description, path).toEqual([meta.description])
    expect(raw.canonical, path).toEqual([])
    expect(raw.ogUrl, path).toEqual([])
    expect(raw.robots, path).toEqual(['noindex, follow'])
    expect(raw.homeGraphs, path).toBe(0)
    expect(JSON.stringify(raw), path).not.toContain('DO_NOT_ECHO')
    await expect(page.locator('h1').first()).toBeVisible()
    await expect(page).toHaveTitle(meta.title)
    const rendered = await page.evaluate(head)
    expect({ ...rendered, h1: [], legalText: null }, path).toEqual({ ...raw, h1: [], legalText: null })
  }
})

test('SPA footer, home, refresh and Back/Forward replace metadata once without changing history or consent', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Decline', exact: true }).click()
  const initialHome = await page.evaluate(head)
  await page.getByTestId('footer-privacy').click()
  await expect(page).toHaveTitle(LEGAL_METADATA['/privacy'].title)
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', LEGAL_METADATA['/privacy'].canonical)
  expect((await page.evaluate(head)).homeGraphs).toBe(0)
  const entries = await page.evaluate(() => history.length)
  await page.goBack()
  await expect(page).toHaveTitle(initialHome.title[0]!)
  expect((await page.evaluate(head)).homeGraphs).toBe(1)
  await page.goForward()
  await expect(page).toHaveTitle(LEGAL_METADATA['/privacy'].title)
  expect(await page.evaluate(() => history.length)).toBe(entries)
  await page.reload()
  await expect(page).toHaveTitle(LEGAL_METADATA['/privacy'].title)
  await expect(page.getByRole('status')).toHaveText('Analytics declined.')
  await page.getByTestId('footer-terms').click()
  await expect(page).toHaveTitle(LEGAL_METADATA['/terms'].title)
  await page.getByTestId('brand').click()
  await expect(page).toHaveURL('/')
  await expect(page).toHaveTitle(initialHome.title[0]!)
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://cert900.com/')
  expect(await page.locator('head title').count()).toBe(1)
  expect(await page.locator('meta[name="description"]').count()).toBe(1)
})

test('redirects, robots.txt and all educational links retain canonical destinations', async ({ page, request }) => {
  for (const path of [...LEGAL_PATHS, ...STUDY_PATHS, ...Object.values(GUIDE_PATHS)]) {
    // Canonical-host redirects are tested without network in worker/assets.test.ts.
    const slash = await request.get(`${path}/`)
    expect(slash.status(), path).toBe(200)
    expect(new URL(slash.url()).pathname, path).toBe(path)
  }
  const robots = await (await request.get('/robots.txt')).text()
  expect(robots).toContain('Disallow: /api/')
  expect(robots).toContain('Sitemap: https://cert900.com/sitemap.xml')
  await page.goto('/privacy')
  const links = await page.locator('main a[href]').evaluateAll(a => a.map(e => e.getAttribute('href')!).filter(h => h.startsWith('/')))
  for (const link of new Set(links)) expect((await request.get(link)).status(), link).toBe(200)
})

for (const width of [320, 375, 390, 768, 1440]) {
  test(`legal metadata/content, keyboard links and consent at ${width}px in both themes`, async ({ page }, info) => {
    const errors: string[] = [], ads: string[] = []
    page.on('pageerror', e => errors.push(e.message))
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()) })
    page.on('request', r => { if (/googlesyndication|doubleclick|fundingchoices|grow\.me/.test(r.url())) ads.push(r.url()) })
    await page.setViewportSize({ width, height: 900 })
    for (const theme of ['light', 'dark']) {
      await page.addInitScript(t => localStorage.setItem('trainer-theme', t), theme)
      for (const path of LEGAL_PATHS) {
        await page.goto(path)
        await expect(page).toHaveTitle(LEGAL_METADATA[path].title)
        await expect(page.getByTestId('legal-page')).toBeVisible()
        const headings = await page.locator('main h2').allTextContents()
        expect(new Set(headings).size).toBe(headings.length)
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
        const contact = page.locator('main a[href^="mailto:"]').first()
        await contact.focus()
        await expect(contact).toBeFocused()
        if (path === '/privacy' && theme === 'light' && [320, 390, 1440].includes(width)) {
          await page.evaluate(() => document.fonts.ready)
          // Keyboard focus above intentionally scrolls to the contact link.
          // Capture from the top so the sticky header stays at the page top.
          await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }))
          await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)
          await page.screenshot({ path: info.outputPath(`legal-after-${width}.png`), fullPage: true })
        }
      }
    }
    expect(errors).toEqual([])
    expect(ads).toEqual([])
  })
}
