import { test, expect } from '@playwright/test'
import { GUIDE_PATHS, LEGAL_PATHS } from '../../src/data/routes'
import { EXAM_IDS } from '../../src/data/exam-ids'
import { CONTACT_EMAIL } from '../../src/lib/site'
import { findQuestion, openLab, settled } from './helpers'

const publisher = 'ca-pub-7887703829224685'
const advertisingHost = /(^|\.)(googlesyndication\.com|doubleclick\.net|googleadservices\.com|grow\.me|ethicalads\.io)$/

test.beforeEach(async ({ page }) => {
  await page.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname)
    ? route.continue() : route.abort())
})

test('every delivered public HTML head verifies only the approved publisher; no ad or Grow loader', async ({ page, request }) => {
  const paths = ['/', ...Object.values(GUIDE_PATHS), ...LEGAL_PATHS, ...EXAM_IDS.map(id => `/exam/${id}`)]
  for (const path of paths) {
    const response = await request.get(path)
    expect(response.status(), path).toBe(200)
    expect(response.headers()['content-type'], path).toContain('text/html')
    const html = await response.text()
    const delivered = await page.evaluate(html => {
      const doc = new DOMParser().parseFromString(html, 'text/html')
      return {
        meta: [...doc.querySelectorAll('head meta[name="google-adsense-account"]')].map(e => e.getAttribute('content')),
        allMeta: doc.querySelectorAll('meta[name="google-adsense-account"]').length,
        adClient: [...doc.scripts].some(e => /adsbygoogle|googlesyndication|doubleclick/.test(e.src + e.textContent)),
        grow: doc.querySelectorAll('[data-grow-initializer], [data-grow-home]').length,
        units: doc.querySelectorAll('ins.adsbygoogle, [data-ad-slot], [data-ea-publisher]').length,
      }
    }, html)
    expect(delivered, path).toEqual({ meta: [publisher], allMeta: 1, adClient: false, grow: 0, units: 0 })
    expect(html, path).not.toContain('https://faves.grow.me/main.js')
  }
})

test('about and contact are usable without JavaScript; privacy and sitemap dates are current', async ({ browser, baseURL, request }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL })
  try {
    await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname)
      ? route.continue() : route.abort())
    const page = await context.newPage()
    await page.goto(`${GUIDE_PATHS.method}#about`)
    await expect(page.getByRole('heading', { name: 'About Cert900', exact: true })).toBeVisible()
    await expect(page.locator('#contact')).toContainText(CONTACT_EMAIL)
    await expect(page.locator('#contact').getByRole('link')).toHaveAttribute('href', `mailto:${CONTACT_EMAIL}`)
    await expect(page.locator('head meta[name="google-adsense-account"]')).toHaveAttribute('content', publisher)
  } finally { await context.close() }
  const sitemap = await (await request.get('/sitemap.xml')).text()
  for (const path of LEGAL_PATHS) {
    expect(sitemap).toContain(`<loc>https://cert900.com${path}</loc><lastmod>2026-10-21</lastmod>`)
  }
})

test('footer navigation and privacy refresh expose current disclosures without advertising', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('footer-privacy').click()
  await expect(page).toHaveURL(/\/privacy$/)
  await expect(page.getByRole('heading', { name: 'Privacy policy', exact: true })).toBeVisible()
  await page.reload()
  await expect(page.getByTestId('legal-page')).toContainText('October 21, 2026')
  await expect(page.getByTestId('legal-page')).toContainText('newsletter')
  await expect(page.getByTestId('legal-page')).toContainText('AdSense')
  await page.getByRole('link', { name: 'About Cert900', exact: true }).click()
  await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS.method}#about$`))
  await expect(page.getByRole('heading', { name: 'About Cert900', exact: true })).toBeVisible()
  await page.goBack()
  await expect(page.getByRole('heading', { name: 'Privacy policy', exact: true })).toBeVisible()
  await page.getByTestId('footer-terms').focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('heading', { name: 'Terms of use', exact: true })).toBeVisible()
})

for (const width of [320, 375, 390, 768, 1440]) {
  test(`readiness pages at ${width}px in both themes: complete text, links, no overflow`, async ({ page }, testInfo) => {
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
    await page.setViewportSize({ width, height: 900 })
    for (const theme of ['light', 'dark']) {
      await page.addInitScript(theme => localStorage.setItem('trainer-theme', theme), theme)
      for (const path of ['/privacy', `${GUIDE_PATHS.method}#about`]) {
        await page.goto(path)
        await settled(page)
        await expect(page.locator('h1')).toBeVisible()
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${path}/${theme}`).toBe(true)
        const contact = page.locator('a[href^="mailto:"]').first()
        expect(await contact.getAttribute('href')).toMatch(`mailto:${CONTACT_EMAIL}`)
        await contact.focus()
        await expect(contact).toBeFocused()
        // Human-review artifacts only; existing simulator screenshot baselines are untouched.
        if (theme === 'light' && [320, 390, 1440].includes(width)) {
          await page.screenshot({ path: testInfo.outputPath(`${path.startsWith('/privacy') ? 'privacy' : 'about'}-${width}.png`), fullPage: true })
        }
      }
    }
    expect(errors).toEqual([])
  })
}

test('active practice and all four featured PBQs never load an advertising SDK', async ({ page }) => {
  const advertisingRequests: string[] = []
  page.on('request', request => { if (advertisingHost.test(new URL(request.url()).hostname)) advertisingRequests.push(new URL(request.url()).hostname) })
  for (const [code, title] of [
    ['220-1201', 'Provision the Sales Workstation'],
    ['220-1201', 'Fix a Stale DHCP Lease'],
    ['N10-009', 'Build the Edge ACL'],
    ['220-1202', 'Windows Defender Firewall: Allow the App'],
  ]) {
    await openLab(page, code)
    await findQuestion(page, title)
    await expect(page.locator('head meta[name="google-adsense-account"]')).toHaveAttribute('content', publisher)
    await expect(page.locator('script[src*="adsbygoogle"], script[src*="grow.me"], ins.adsbygoogle, [data-ad-slot]')).toHaveCount(0)
  }
  expect(advertisingRequests).toEqual([])
})
