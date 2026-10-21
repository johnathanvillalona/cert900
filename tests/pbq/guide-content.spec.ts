import { test, expect, type Page } from '@playwright/test'
import { GUIDE_EXAMS } from '../../src/data/guide-meta'
import { GUIDE_PATHS, type GuideKey } from '../../src/data/routes'

const title = 'How to use this to pass'
const guides = Object.entries(GUIDE_PATHS) as [GuideKey, string][]
const representative = ['pbq', 'aplus', 'aplus1', 'nplus', 'secplus', 'clf', 'az900', 'ccna'] as const
const countFor = (key: GuideKey) => GUIDE_EXAMS[key].length ? 1 : 0

test.beforeEach(async ({ context }) => {
  await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname)
    ? route.continue() : route.abort())
})

async function expectStudyPath(page: Page, key: GuideKey) {
  await expect(page.getByRole('heading', { name: title, exact: true })).toHaveCount(countFor(key))
  if (countFor(key)) await expect(page.getByRole('heading', { name: title, exact: true })).toBeVisible()
}

for (const javaScriptEnabled of [false, true]) {
  test(`all static guides match delivered HTML, without duplicate headings; JavaScript=${javaScriptEnabled}`, async ({ browser, baseURL }) => {
    const context = await browser.newContext({ baseURL, javaScriptEnabled })
    try {
      await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname)
        ? route.continue() : route.abort())
      const page = await context.newPage()
      const errors: string[] = []
      page.on('pageerror', error => errors.push(error.message))
      page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
      page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${new URL(response.url()).pathname}`) })
      for (const [key, path] of guides) {
        const response = await page.goto(path)
        expect(response?.status(), path).toBe(200)
        const html = await response!.text()
        // Use an independent parsed HTTP document, never the rendered DOM as
        // its own oracle. evaluate still works in a JS-disabled test context.
        const delivered = await page.evaluate(html => {
          const main = new DOMParser().parseFromString(html, 'text/html').querySelector('main')!
          return {
            text: main.textContent!.replace(/\s+/g, ' ').trim(),
            headings: [...main.querySelectorAll('h1,h2')].map(h => h.textContent!.trim()),
          }
        }, html)
        const rendered = await page.getByTestId('guide-page').evaluate(main => ({
          text: main.textContent!.replace(/\s+/g, ' ').trim(),
          headings: [...main.querySelectorAll('h1,h2')].map(h => h.textContent!.trim()),
        }))
        expect(rendered, path).toEqual(delivered)
        expect(new Set(delivered.headings).size, `${path}: duplicate headings`).toBe(delivered.headings.length)
        expect(delivered.headings.filter(h => h === title), path).toHaveLength(countFor(key))
        await expectStudyPath(page, key)
        await expect(page.getByTestId('guide-page')).toHaveCount(1)
        expect(rendered.text.split('Drill the weak domains.').length - 1, path).toBe(countFor(key))
        expect(rendered.text.split('Clear the review queue.').length - 1, path).toBe(countFor(key))
      }
      expect(errors).toEqual([])
    } finally { await context.close() }
  })
}

test('refresh, real guide links and back/forward preserve section counts and consent', async ({ page }) => {
  const errors: string[] = []
  const googleRequests: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('request', request => { if (/google-analytics|googletagmanager|googlesyndication|doubleclick|grow\.me/.test(request.url())) googleRequests.push(request.url()) })
  await page.goto(GUIDE_PATHS.pbq)
  await expectStudyPath(page, 'pbq')
  await page.getByRole('button', { name: 'Allow analytics', exact: true }).click()
  await expect(page.getByRole('status')).toHaveText('Analytics allowed.')
  await page.locator(`main a[href="${GUIDE_PATHS.nplus}"]`).click()
  await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS.nplus}$`))
  await expectStudyPath(page, 'nplus')
  await expect(page.getByRole('status')).toHaveText('Analytics allowed.')
  await page.reload()
  await expectStudyPath(page, 'nplus')
  await page.goBack()
  await expectStudyPath(page, 'pbq')
  await page.goForward()
  await expectStudyPath(page, 'nplus')
  await page.getByRole('button', { name: 'Change preferences', exact: true }).click()
  await page.getByRole('button', { name: 'Decline', exact: true }).click()
  await expect(page.getByRole('status')).toHaveText('Analytics declined.')
  await page.reload()
  await expectStudyPath(page, 'nplus')
  await expect(page.getByRole('status')).toHaveText('Analytics declined.')
  expect(errors).toEqual([])
  expect(googleRequests).toEqual([])
})

for (const width of [320, 375, 390, 768, 1440]) {
  test(`guide instructions remain readable and unique at ${width}px`, async ({ page }, testInfo) => {
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
    await page.setViewportSize({ width, height: 900 })
    for (const theme of ['light', 'dark']) {
      await page.addInitScript(theme => localStorage.setItem('trainer-theme', theme), theme)
      for (const key of representative) {
        await page.goto(GUIDE_PATHS[key])
        await expectStudyPath(page, key)
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${key}/${width}/${theme}`).toBe(true)
        const headings = page.locator('main h1, main h2')
        for (const heading of await headings.all()) {
          expect(await heading.evaluate(e => getComputedStyle(e).fontSize).then(parseFloat)).toBeGreaterThanOrEqual(14)
        }
        // Opening native disclosures must not insert or duplicate instructions.
        await page.locator('main details summary').last().click()
        await expectStudyPath(page, key)
        if (key === 'pbq' && theme === 'light' && [320, 1440].includes(width)) {
          await page.evaluate(() => document.fonts.ready)
          await page.screenshot({ path: testInfo.outputPath(`pbq-after-${width}.png`), fullPage: true })
        }
      }
    }
    expect(errors).toEqual([])
  })
}
