import { test, expect } from '@playwright/test'
import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { GUIDE_EXAMS, GUIDE_META } from '../../src/data/guide-meta'
import { GUIDE_KEYS, GUIDE_PATHS, STUDY_PATHS, LEGAL_PATHS } from '../../src/data/routes'
import { LEGAL_EFFECTIVE_DATE } from '../../src/screens/Legal'
import { settled } from './helpers'

test.beforeEach(async ({ context }) => {
  await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname)
    ? route.continue() : route.abort())
})

test('delivered Quiz schema matches the actual public questions, answers and options on every guide', async ({ page }) => {
  for (const key of GUIDE_KEYS) {
    await page.goto(GUIDE_META[key].path)
    const result = await page.evaluate(() => {
      const nodes = [...document.querySelectorAll('script[type="application/ld+json"]')]
        .flatMap(script => {
          const data = JSON.parse(script.textContent!)
          return data['@graph'] ?? [data]
        })
      const quiz = nodes.find(node => node['@type'] === 'Quiz')
      const clean = (text: string) => text.replace(/\s+/g, ' ').trim()
      const samples = [...document.querySelectorAll('[data-testid="guide-sample"]')].map(sample => ({
        question: clean(sample.querySelector('[data-testid="guide-sample-question"]')!.textContent!),
        answer: clean(sample.querySelector('[data-testid="guide-sample-answer"]')!.textContent!).replace(/^[A-D]\. /, ''),
        options: [...sample.querySelectorAll('ol li')].map(option => clean(option.textContent!).replace(/^[A-D]/, '').trim()),
      }))
      return {
        samples,
        schema: quiz?.hasPart.map((question: { text: string; acceptedAnswer: { text: string }; suggestedAnswer: { text: string }[] }) => ({
          question: clean(question.text), answer: clean(question.acceptedAnswer.text),
          distractors: question.suggestedAnswer.map(answer => clean(answer.text)),
        })) ?? [],
      }
    })
    expect(result.samples.length, key).toBe(GUIDE_EXAMS[key].length ? 8 : 0)
    expect(result.schema.length, key).toBe(result.samples.length)
    for (let i = 0; i < result.samples.length; i++) {
      const sample = result.samples[i]
      expect(result.schema[i], `${key} sample ${i + 1}`).toEqual({
        question: sample.question, answer: sample.answer,
        distractors: sample.options.filter(option => option !== sample.answer),
      })
    }
    if (key === 'aplus') {
      expect(await page.getByTestId('guide-sample').evaluateAll(samples => samples.map(sample =>
        sample.querySelector('p')!.textContent!.includes('220-1201') ? '220-1201' : '220-1202')))
        .toEqual(['220-1201', '220-1202', '220-1201', '220-1202', '220-1201', '220-1202', '220-1201', '220-1202'])
    }
  }
})

test('sitemap preserves every URL and uses lastmod only for tracked legal dates; all educational links resolve', async ({ page, request }) => {
  await page.goto(GUIDE_PATHS.pbq)
  const sitemap = await request.get('/sitemap.xml')
  expect(sitemap.status()).toBe(200)
  const entries = await page.evaluate(xml => {
    const doc = new DOMParser().parseFromString(xml, 'text/xml')
    return [...doc.querySelectorAll('url')].map(url => ({
      url: url.querySelector('loc')!.textContent!, lastmod: url.querySelector('lastmod')?.textContent ?? null,
    }))
  }, await sitemap.text())
  const paths = ['/', ...Object.values(GUIDE_PATHS), ...STUDY_PATHS, ...LEGAL_PATHS]
  expect(entries.map(entry => entry.url).sort()).toEqual(paths.map(path => `https://cert900.com${path}`).sort())
  expect(entries).toHaveLength(36)
  expect(entries.filter(entry => entry.url.includes('/study/'))).toHaveLength(11)
  for (const entry of entries) {
    const path = new URL(entry.url).pathname
    expect(entry.lastmod, path).toBe(LEGAL_PATHS.includes(path as typeof LEGAL_PATHS[number]) ? LEGAL_EFFECTIVE_DATE : null)
    expect((await request.get(path)).status(), path).toBe(200)
  }
  const internal = new Set<string>()
  for (const path of [...Object.values(GUIDE_PATHS), ...STUDY_PATHS]) {
    const response = await page.goto(path)
    expect(response!.status(), path).toBe(200)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://cert900.com${path}`)
    const links = await page.locator('main a[href]').evaluateAll(anchors => anchors.map(anchor => anchor.getAttribute('href')!))
    for (const href of links) {
      if (href.startsWith('/') && !href.startsWith('//')) internal.add(href.split('#')[0])
    }
  }
  for (const path of internal) expect((await request.get(path)).status(), path).toBe(200)
})

for (const width of [320, 375, 390, 768, 1440]) {
  test(`PBQ previews, navigation and consent remain usable in both themes at ${width}px`, async ({ page }, testInfo) => {
    const errors: string[] = [], tracking: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${new URL(response.url()).pathname}`) })
    page.on('request', request => { if (/google-analytics|googletagmanager|googlesyndication|doubleclick|grow\.me/.test(request.url())) tracking.push(request.url()) })
    await page.setViewportSize({ width, height: 900 })
    for (const theme of ['light', 'dark']) {
      await page.addInitScript(theme => localStorage.setItem('trainer-theme', theme), theme)
      await page.goto(GUIDE_PATHS.pbq)
      await expect(page.getByTestId('pbq-preview')).toHaveCount(4)
      for (const image of await page.locator('main img').all()) {
        await image.scrollIntoViewIfNeeded()
        await expect(image).toBeVisible()
        await image.evaluate((element: HTMLImageElement) => element.decode())
        const dimensions = await image.evaluate((element: HTMLImageElement) => ({
          loaded: element.complete && element.naturalWidth > 0,
          actual: [element.naturalWidth, element.naturalHeight],
          declared: [Number(element.getAttribute('width')), Number(element.getAttribute('height'))],
          alt: element.alt,
        }))
        expect(dimensions.loaded).toBe(true)
        expect(dimensions.declared).toEqual(dimensions.actual)
        expect(dimensions.alt.length).toBeGreaterThan(30)
      }
      await settled(page)
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
      for (const link of await page.locator('nav[aria-label="PBQ practice by certification"] a').all()) {
        expect((await link.boundingBox())!.height).toBeGreaterThanOrEqual(44)
        await link.focus()
        await expect(link).toBeFocused()
      }
      const changePreferences = page.getByRole('button', { name: 'Change preferences', exact: true })
      if (await changePreferences.isVisible()) await changePreferences.click()
      await page.getByRole('button', { name: 'Decline', exact: true }).click()
      await expect(page.getByRole('status')).toHaveText('Analytics declined.')
      await page.reload()
      await expect(page.getByRole('status')).toHaveText('Analytics declined.')
      await expect(page.locator('script[src*="adsbygoogle"],ins.adsbygoogle,iframe[src*="doubleclick"]')).toHaveCount(0)
      if ([320, 390, 1440].includes(width)) {
        // Lazy images intentionally stay unloaded away from the viewport. Visit
        // each preview before capturing the whole document, including reloads.
        for (const image of await page.locator('main img').all()) {
          await image.scrollIntoViewIfNeeded()
          await image.evaluate((element: HTMLImageElement) => element.decode())
        }
        await settled(page)
        await page.evaluate(() => window.scrollTo(0, 0))
        const directory = resolve('docs/qa/seo-phase-1')
        mkdirSync(directory, { recursive: true })
        const screenshot = `pbq-guide-after-${width}-${theme}.png`
        await page.screenshot({ path: resolve(directory, screenshot), fullPage: true, animations: 'disabled' })
        await testInfo.attach(screenshot, { path: resolve(directory, screenshot), contentType: 'image/png' })
      }
    }
    expect(errors).toEqual([])
    expect(tracking).toEqual([])
  })
}
