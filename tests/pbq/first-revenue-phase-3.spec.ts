import { test, expect } from '@playwright/test'
import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { GUIDE_META } from '../../src/data/guide-meta'
import { GUIDE_PATHS } from '../../src/data/routes'

test.beforeEach(async ({ context }) => {
  await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname)
    ? route.continue() : route.abort())
})

test('support is a native optional link after teaching, not a payment widget', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, javaScriptEnabled: false })
  await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname) ? route.continue() : route.abort())
  try {
    const page = await context.newPage()
    const response = await page.goto(GUIDE_PATHS.pbq)
    expect(await response!.text()).toContain('data-testid="guide-support"')
    const support = page.getByTestId('guide-support')
    await expect(support).toHaveCount(1)
    const link = support.getByRole('link', { name: /Support Cert900/ })
    await expect(link).toHaveAttribute('href', 'https://buymeacoffee.com/sorannex')
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    await expect(support.locator('script, iframe, form, button')).toHaveCount(0)
    await expect(support).toContainText('Every exam and study guide stays free.')
    expect(await support.evaluate(element => {
      const faq = [...document.querySelectorAll('h2')].find(h => h.textContent === 'Common questions')!
      return Boolean(faq.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING)
    })).toBe(true)
    // Test link semantics without visiting a checkout or generating payment activity.
    await link.focus()
    await expect(link).toBeFocused()
  } finally { await context.close() }
})

test('contextual preview links reach existing Study Hub resource anchors', async ({ page }) => {
  await page.goto(GUIDE_PATHS.pbq)
  const links = page.getByTestId('pbq-preview-study')
  await expect(links).toHaveCount(4)
  const hrefs = await links.evaluateAll(links => links.map(link => link.getAttribute('href')!))
  for (const href of new Set(hrefs)) {
    await page.goto(href)
    await expect(page.getByTestId('study-hub')).toBeVisible()
    await expect(page.locator('#resources')).toBeInViewport()
    await expect(page.getByTestId('guide-support')).toHaveCount(0)
  }
})

test('revised snippets match delivered and rendered metadata without moving canonical URLs', async ({ page }) => {
  for (const meta of [GUIDE_META.pbq, GUIDE_META.aplus]) {
    const response = await page.goto(meta.path)
    expect(response!.status()).toBe(200)
    await expect(page).toHaveTitle(meta.title)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', meta.description)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://cert900.com${meta.path}`)
    const original = await page.evaluate(html => {
      const doc = new DOMParser().parseFromString(html, 'text/html')
      return { title: doc.title, description: doc.querySelector('meta[name="description"]')?.getAttribute('content') }
    }, await response!.text())
    expect(original).toEqual({ title: meta.title, description: meta.description })
  }
})

for (const width of [320, 375, 390, 768, 1440]) {
  test(`optional support and contextual links stay accessible at ${width}px in both themes`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 })
    const errors: string[] = [], external: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('request', request => { if (!['127.0.0.1', 'localhost'].includes(new URL(request.url()).hostname)) external.push(request.url()) })
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${new URL(response.url()).pathname}`) })
    for (const theme of ['light', 'dark']) {
      await page.addInitScript(value => localStorage.setItem('trainer-theme', value), theme)
      await page.goto(GUIDE_PATHS.pbq)
      expect(await page.evaluate(() => innerWidth)).toBe(width)
      await expect(page.locator('html')).toHaveClass(theme === 'dark' ? /dark/ : /^(?!.*\bdark\b)/)
      const support = page.getByTestId('guide-support')
      await support.scrollIntoViewIfNeeded()
      const link = support.getByRole('link', { name: /Support Cert900/ })
      await link.focus()
      await expect(link).toBeFocused()
      const box = await link.boundingBox()
      expect(box!.height).toBeGreaterThanOrEqual(44)
      expect(box!.x).toBeGreaterThanOrEqual(0)
      expect(box!.x + box!.width).toBeLessThanOrEqual(width)
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false)
      const directory = resolve(testInfo.config.rootDir, '../../docs/qa/first-revenue-phase-3')
      mkdirSync(directory, { recursive: true })
      await page.screenshot({ path: resolve(directory, `support-${width}-${theme}.png`) })
      const previewImage = page.getByTestId('pbq-preview').first().locator('img')
      await previewImage.scrollIntoViewIfNeeded()
      await expect.poll(() => previewImage.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true)
      await page.getByTestId('pbq-preview-study').first().scrollIntoViewIfNeeded()
      await page.screenshot({ path: resolve(directory, `pbq-links-${width}-${theme}.png`) })
      for (const path of ['/', '/exam/220-1201', '/exam/220-1201/drill', '/exam/220-1201/results', '/progress', '/study/220-1201']) {
        await page.goto(path)
        await expect(page.getByTestId('guide-support')).toHaveCount(0)
      }
    }
    expect(errors).toEqual([])
    expect(external).toEqual([])
  })
}
