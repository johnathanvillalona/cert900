import { test, expect } from '@playwright/test'

const path = '/aws-ai-practitioner-practice-test'
const local = (url: string) => ['127.0.0.1', 'localhost'].includes(new URL(url).hostname)

test.beforeEach(async ({ context }) => {
  // No external requests, analytics collection or advertising impressions.
  await context.route('**/*', route => local(route.request().url()) ? route.continue() : route.abort())
})

test('AWS core lessons, takeaways and technical extensions are delivered without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, javaScriptEnabled: false })
  try {
    await context.route('**/*', route => local(route.request().url()) ? route.continue() : route.abort())
    const page = await context.newPage()
    const response = await page.goto(path)
    const html = await response!.text()
    expect(response!.status()).toBe(200)
    for (const selector of ['lesson-intro', 'lesson-takeaway', 'lesson-advanced', 'lesson-check']) {
      await expect(page.getByTestId(selector)).toHaveCount(9)
      expect(html.match(new RegExp(`data-testid="${selector}"`, 'g'))).toHaveLength(9)
    }
    for (const lesson of await page.getByTestId('learning-lesson').all()) {
      await expect(lesson.getByTestId('lesson-intro')).toBeVisible()
      await expect(lesson.getByTestId('lesson-takeaway')).toBeVisible()
      await expect(lesson.getByTestId('lesson-concepts').getByTestId('lesson-concept')).toHaveCount(3)
      const extension = lesson.getByTestId('lesson-advanced')
      await expect(extension).not.toHaveAttribute('open')
      const summary = extension.locator('summary')
      await summary.focus()
      await page.keyboard.press('Space')
      await expect(extension).toHaveAttribute('open', '')
      await expect(summary).toBeFocused()
      await page.keyboard.press('Enter')
      await expect(extension).not.toHaveAttribute('open')
    }
    expect(html).toContain('F1')
    expect(html).toContain('RLHF')
    expect(html).toContain('Scoping Matrix')
  } finally { await context.close() }
})

test('native lesson checks and extensions leave learner progress and consent unchanged', async ({ page }) => {
  const requests: string[] = []
  page.on('request', request => {
    if (/googletagmanager|google-analytics|googlesyndication|doubleclick|googleadservices|fundingchoices|grow\.me/i.test(request.url())) requests.push(request.url())
  })
  await page.goto(path)
  await page.getByRole('button', { name: 'Decline', exact: true }).click()
  const stored = await page.evaluate(() => ({ ...localStorage }))
  for (const lesson of await page.getByTestId('learning-lesson').all()) {
    for (const testId of ['lesson-check', 'lesson-advanced']) {
      const disclosure = lesson.getByTestId(testId)
      const summary = disclosure.locator('summary')
      await summary.focus()
      await page.keyboard.press('Enter')
      await expect(disclosure).toHaveAttribute('open', '')
      await page.keyboard.press('Enter')
      await expect(disclosure).not.toHaveAttribute('open')
    }
  }
  expect(await page.evaluate(() => ({ ...localStorage }))).toEqual(stored)
  await expect(page.getByRole('status')).toHaveText('Analytics declined.')
  expect(requests).toEqual([])
})

for (const width of [320, 375, 390, 768, 1440]) {
  test(`beginner reading path and all eight visuals fit ${width}px in both themes`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    await page.setViewportSize({ width, height: 800 })
    for (const theme of ['light', 'dark']) {
      await page.goto(path)
      await page.evaluate(theme => document.documentElement.classList.toggle('dark', theme === 'dark'), theme)
      await expect(page.getByTestId('learning-diagram')).toHaveCount(8)
      for (const lesson of await page.getByTestId('learning-lesson').all()) {
        await expect(lesson.getByTestId('lesson-advanced')).not.toHaveAttribute('open')
        const structure = await lesson.evaluate(element => {
          const core = element.querySelector('[data-testid="lesson-explanation"]')!
          const paragraphs = [...core.querySelectorAll('p')].filter(p => !p.closest('figure'))
          return {
            headings: core.querySelectorAll('h3').length,
            maxWords: Math.max(...paragraphs.map(p => p.textContent!.trim().split(/\s+/).length)),
            minFont: Math.min(...paragraphs.map(p => parseFloat(getComputedStyle(p).fontSize))),
          }
        })
        expect(structure.headings).toBe(3)
        expect(structure.maxWords).toBeLessThanOrEqual(65)
        expect(structure.minFont).toBeGreaterThanOrEqual(16)
        await expect(lesson.getByTestId('lesson-takeaway')).toBeVisible()
      }
      for (const figure of await page.getByTestId('learning-diagram').all()) {
        expect(await figure.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true)
        for (const label of await figure.locator('p, dt, dd').all()) {
          expect(await label.evaluate(element => parseFloat(getComputedStyle(element).fontSize))).toBeGreaterThanOrEqual(14)
        }
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    }
    expect(errors).toEqual([])
  })
}
