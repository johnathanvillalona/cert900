import { test, expect } from '@playwright/test'
import { EXAM_IDS } from '../../src/data/exam-ids'
import { GUIDE_PATHS } from '../../src/data/routes'
import { primaryGuideForExam } from '../../src/data/study-resources'

test.beforeEach(async ({ context }) => {
  await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname)
    ? route.continue() : route.abort())
})

test('homepage practice destination opens the existing eleven-exam picker', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Free practice exams\.\s*Clear study guides\./)
  await expect(page.getByTestId('homepage-learning-links')).toHaveCount(1)
  await expect(page.getByTestId('secondary-pbq-link')).toHaveAttribute('href', GUIDE_PATHS.pbq)
  await page.getByTestId('hero-cta').focus()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/\/exams$/)
  await expect(page.getByTestId('certification-entry')).toHaveCount(11)
  await page.goBack()
  await expect(page.getByTestId('hero-study-guides')).toBeVisible()
})

test('homepage study destination exposes all existing primary guides', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('hero-study-guides').click()
  await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS.hub}$`))
  for (const examId of EXAM_IDS) {
    await expect(page.locator(`main a[href="${primaryGuideForExam(examId)!.path}"]`).first()).toBeVisible()
  }
  await page.goBack()
  await expect(page).toHaveURL(/\/$/)
  await expect(page.getByTestId('certification-entry')).toHaveCount(11)
})

test('static educational navigation works without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, javaScriptEnabled: false })
  try {
    await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname)
      ? route.continue() : route.abort())
    const page = await context.newPage()
    await page.goto('/study/220-1201')
    await expect(page.getByTestId('nav-practice-exams')).toHaveAttribute('href', '/exams')
    await page.getByTestId('nav-study-guides').focus()
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS.hub}$`))
    await page.locator(`main a[href="${GUIDE_PATHS.aplus1}"]`).first().click()
    await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS.aplus1}$`))
  } finally {
    await context.close()
  }
})

test('primary links stay readable and keyboard accessible at all five widths in both themes', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  for (const width of [320, 375, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const theme of ['light', 'dark']) {
      await page.goto('/study/az-900')
      await page.evaluate(value => {
        localStorage.setItem('trainer-theme', value)
        document.documentElement.classList.toggle('dark', value === 'dark')
      }, theme)
      await expect(page.locator('html')).toHaveClass(theme === 'dark' ? /dark/ : /^(?!.*\bdark\b)/)
      const practice = page.getByTestId('nav-practice-exams')
      const study = page.getByTestId('nav-study-guides')
      for (const link of [practice, study]) {
        await expect(link).toBeVisible()
        const box = await link.boundingBox()
        expect(box!.height, `${width}px ${theme} touch target`).toBeGreaterThanOrEqual(44)
        expect(box!.x, `${width}px ${theme} left edge`).toBeGreaterThanOrEqual(0)
        expect(box!.x + box!.width, `${width}px ${theme} right edge`).toBeLessThanOrEqual(width)
      }
      await practice.focus()
      await page.keyboard.press('Tab')
      await expect(study).toBeFocused()
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), `${width}px ${theme} overflow`).toBe(false)
    }
  }
  expect(errors).toEqual([])
})
