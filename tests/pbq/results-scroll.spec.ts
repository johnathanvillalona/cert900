import { test, expect, type Page } from '@playwright/test'

type ScrollWindow = Window & { __resultsScrollCalls: unknown[][] }

test.beforeEach(async ({ context, page }) => {
  await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname)
    ? route.continue() : route.abort())
  await page.addInitScript(() => {
    let seed = 246813579
    Math.random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296 }
    const w = window as ScrollWindow
    w.__resultsScrollCalls = []
    const original = window.scrollTo
    window.scrollTo = (...args: unknown[]) => {
      w.__resultsScrollCalls.push(args)
      Reflect.apply(original, window, args)
    }
  })
})

const calls = (page: Page) => page.evaluate(() => (window as ScrollWindow).__resultsScrollCalls)
const clearCalls = (page: Page) => page.evaluate(() => { (window as ScrollWindow).__resultsScrollCalls = [] })

async function startExam(page: Page) {
  await page.goto('/exam/220-1201')
  await page.getByTestId('mode-exam').click()
  await expect(page.getByTestId('qcard')).toBeVisible()
}

async function endExam(page: Page) {
  // The real end control is below the question: clicking it reproduces the old
  // scrolled completion flow, including the modal's focus restoration.
  await page.getByRole('button', { name: 'End exam & score', exact: true }).click()
  expect(await page.evaluate(() => scrollY)).toBeGreaterThan(100)
  await clearCalls(page)
  await page.getByTestId('confirm-end').click()
}

async function expectTop(page: Page, heading = 'Exam results') {
  await expect(page.getByTestId('score-hero')).toBeVisible()
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0)
  await expect(page.getByRole('heading', { name: heading, exact: true })).toBeFocused()
  const box = (await page.getByTestId('score-hero').boundingBox())!
  const header = (await page.getByRole('banner').boundingBox())!
  expect(box.y).toBeGreaterThanOrEqual(header.y + header.height)
  expect(box.y + box.height).toBeLessThanOrEqual(page.viewportSize()!.height)
  expect((await calls(page)).filter(args => (args[0] as ScrollToOptions)?.behavior === 'instant'))
    .toEqual([[{ top: 0, left: 0, behavior: 'instant' }]])
}

for (const width of [320, 375, 390, 768, 1440]) {
  test(`fresh exam results show the score and focus the heading at ${width}px`, async ({ page }, info) => {
    await page.setViewportSize({ width, height: 900 })
    await startExam(page)
    // An instant jump must not inherit a future/global smooth-scroll rule.
    await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'smooth' })
    await endExam(page)
    await expectTop(page)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await page.screenshot({ path: info.outputPath(`results-top-${width}.png`) })
  })
}

test('normal motion also uses an immediate Results entry, without animated scrolling', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await startExam(page)
  await endExam(page)
  await expectTop(page)
})

for (const mode of ['practice', 'pbq'] as const) {
  test(`${mode}: grading stays in place; only finishing enters the summary at the top`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 })
    await page.goto('/exam/220-1201')
    await page.getByTestId(`mode-${mode === 'practice' ? 'drill' : 'pbq'}`).click()
    if (mode === 'practice') await page.getByTestId('start-drill').click()
    await expect(page.getByTestId('qcard')).toBeVisible()
    await clearCalls(page)
    for (let n = 0; n < 25; n++) {
      if (mode === 'pbq') await page.getByTestId('check-pbq').click()
      else {
        await page.getByTestId('option').first().click()
        const check = page.getByTestId('check-multi')
        if (await check.count()) {
          const options = page.getByTestId('option')
          for (let i = 1; i < await options.count() && !await check.isEnabled(); i++) await options.nth(i).click()
          await check.click()
        }
      }
      await expect(page.getByTestId('score-hero')).toHaveCount(0)
      expect(await calls(page)).toEqual([])
      if (await page.getByTestId('finish').count()) break
      await page.getByTestId('next').click()
    }
    await page.getByTestId('finish').click()
    await expectTop(page, 'Session results')
  })
}

for (const width of [390, 1440]) {
  test(`Results review and rerenders retain position; a subsequent attempt resets again at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await startExam(page)
    await endExam(page)
    await expectTop(page)
    await page.evaluate(() => window.scrollTo({ top: 600, behavior: 'instant' }))
    const position = await page.evaluate(() => scrollY)
    await clearCalls(page)
    await page.getByRole('button', { name: 'Toggle theme', exact: true }).click()
    expect(await page.evaluate(() => scrollY)).toBe(position)
    expect(await calls(page)).toEqual([])
    await expect(page.getByRole('heading', { name: 'Exam results', exact: true })).not.toBeFocused()
    // Consent UI updates on the already-open Results screen must not steal focus
    // or scroll back to its heading. No analytics is granted by this test.
    await page.getByRole('button', { name: 'Decline', exact: true }).click()
    expect(await calls(page)).toEqual([])
    await expect(page.getByRole('button', { name: 'Change preferences', exact: true })).toBeFocused()
    await page.getByRole('button', { name: 'Retake with fresh questions', exact: true }).click()
    await expect(page.getByTestId('qcard')).toBeVisible()
    await endExam(page)
    await expectTop(page)
  })
}

test('timer updates and answer selection never invoke the Results scroll action', async ({ page }) => {
  await page.goto('/exam/clf-c02') // MC-only exam keeps answer selection explicit.
  await page.getByTestId('mode-exam').click()
  await expect(page.getByTestId('timer')).toBeVisible()
  const time = await page.getByTestId('timer').innerText()
  await clearCalls(page)
  await page.getByTestId('option').first().click()
  await expect.poll(() => page.getByTestId('timer').innerText()).not.toBe(time)
  expect(await calls(page)).toEqual([])
  await expect(page.getByTestId('score-hero')).toHaveCount(0)
})

test('timer expiry enters Results at the top without a manual end action', async ({ page }) => {
  await page.clock.install()
  await page.setViewportSize({ width: 390, height: 900 })
  await startExam(page)
  await page.evaluate(() => window.scrollTo({ top: 600, behavior: 'instant' }))
  expect(await page.evaluate(() => scrollY)).toBeGreaterThan(100)
  await clearCalls(page)
  await page.clock.fastForward(91 * 60 * 1000)
  await expectTop(page)
  await expect(page.getByTestId('score-hero')).toContainText('time expired')
})

test('unrelated SPA back/forward navigation adds no scroll override or history entries', async ({ page }) => {
  await page.goto('/exam/220-1201')
  await expect(page.getByTestId('mode-exam')).toBeVisible()
  await page.evaluate(() => window.scrollTo({ top: 400, behavior: 'instant' }))
  // A plain footer link uses the existing SPA navigation. Its intentional
  // forward-navigation scroll is unchanged; popstate itself must not reset it.
  await page.getByTestId('footer-privacy').click()
  await expect(page).toHaveURL(/\/privacy$/)
  const entries = await page.evaluate(() => history.length)
  await clearCalls(page)
  await page.goBack()
  await expect(page.getByTestId('mode-exam')).toBeVisible()
  expect(await calls(page)).toEqual([])
  expect(await page.evaluate(() => history.scrollRestoration)).toBe('auto')
  expect(await page.evaluate(() => history.length)).toBe(entries)
  await page.goForward()
  await expect(page).toHaveURL(/\/privacy$/)
  expect(await calls(page)).toEqual([])
  expect(await page.evaluate(() => history.length)).toBe(entries)
})

test('static guide and hub back/forward restores the reader’s position', async ({ page }) => {
  await page.goto('/comptia-a-plus-core-1-practice-test')
  await page.evaluate(async () => { await document.fonts.ready; window.scrollTo({ top: 400, behavior: 'instant' }) })
  // Follow a real HTML link without Playwright first scrolling it into view.
  await page.getByTestId('guide-study-hub').evaluate(el => (el as HTMLAnchorElement).click())
  await expect(page.getByTestId('study-hub')).toBeVisible()
  await page.evaluate(async () => { await document.fonts.ready; window.scrollTo({ top: 700, behavior: 'instant' }) })
  await page.goBack()
  await expect(page.getByTestId('guide-page')).toBeVisible()
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(400)
  await page.goForward()
  await expect(page.getByTestId('study-hub')).toBeVisible()
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(700)
  expect(await page.evaluate(() => history.scrollRestoration)).toBe('auto')
})
