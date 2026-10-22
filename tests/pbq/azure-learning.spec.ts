import { test, expect } from '@playwright/test'
import { AZ900_LESSONS } from '../../src/data/az900-lessons'
import { GUIDE_SAMPLES } from '../../src/data/guide-samples'
import { GUIDE_META } from '../../src/data/guide-meta'

const path = '/azure-fundamentals-practice-test'
const local = (url: string) => ['127.0.0.1', 'localhost'].includes(new URL(url).hostname)
const collection = /googletagmanager|google-analytics|googlesyndication|doubleclick|googleadservices|fundingchoices|grow\.me/i
test.beforeEach(async ({ context }) => {
  await context.route('**/*', route => local(route.request().url()) ? route.continue() : route.abort())
})

test('all ten Azure lessons, four visuals and eight original samples work without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, javaScriptEnabled: false })
  try {
    await context.route('**/*', route => local(route.request().url()) ? route.continue() : route.abort())
    const page = await context.newPage()
    const response = await page.goto(path)
    expect(response!.status()).toBe(200)
    const html = await response!.text()
    expect(html.match(/data-testid="learning-lesson"/g)).toHaveLength(10)
    await expect(page.getByTestId('learning-lesson')).toHaveCount(10)
    await expect(page.getByTestId('learning-diagram')).toHaveCount(4)
    await expect(page.getByTestId('guide-sample')).toHaveCount(8)
    for (const [i, sample] of GUIDE_SAMPLES['az-900'].slice(0, 8).entries()) {
      await expect(page.getByTestId('guide-sample-question').nth(i)).toHaveText(sample.x)
    }
    for (const lesson of AZ900_LESSONS) {
      await page.locator(`a[href="#${lesson.id}"]`).first().focus()
      await page.keyboard.press('Enter')
      await expect(page.locator(`#${lesson.id}`)).toBeInViewport()
    }
    const check = page.getByTestId('lesson-check').first()
    await check.locator('summary').focus()
    await page.keyboard.press('Space')
    await expect(check).toHaveAttribute('open', '')
    await expect(check.getByTestId('lesson-check-note')).toBeVisible()
    await page.keyboard.press('Enter')
    await expect(check).not.toHaveAttribute('open')
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://cert900.com' + path)
  } finally { await context.close() }
})

test('checks and extensions do not change progress, consent or emit collection requests', async ({ page }) => {
  const requests: string[] = []
  page.on('request', request => { if (collection.test(request.url())) requests.push(request.url()) })
  await page.goto(path)
  await page.getByRole('button', { name: 'Decline', exact: true }).click()
  const stored = await page.evaluate(() => ({ ...localStorage }))
  for (const lesson of await page.getByTestId('learning-lesson').all()) {
    for (const id of ['lesson-check', 'lesson-advanced']) {
      const details = lesson.getByTestId(id)
      await details.locator('summary').focus()
      await page.keyboard.press('Enter')
      await expect(details).toHaveAttribute('open', '')
      await page.keyboard.press('Enter')
      await expect(details).not.toHaveAttribute('open')
    }
  }
  expect(await page.evaluate(() => ({ ...localStorage }))).toEqual(stored)
  await expect(page.getByRole('status')).toHaveText('Analytics declined.')
  expect(requests).toEqual([])
  await expect(page.locator('ins.adsbygoogle, script[src*="adsbygoogle"]')).toHaveCount(0)
})

test('Azure hub and guide retain native anchors through refresh and history navigation', async ({ page, request }) => {
  await page.goto('/study/az-900')
  await expect(page.getByTestId('hub-guide-lesson')).toHaveCount(10)
  for (const lesson of AZ900_LESSONS) {
    const response = await request.get(path)
    expect(await response.text()).toContain(`id="${lesson.id}"`)
    await expect(page.locator(`#domain-${lesson.domains[0]}`)).toHaveCount(1)
  }
  await page.locator('#domain-2 > summary').click()
  await page.getByTestId('hub-guide-lesson').nth(6).click()
  await expect(page).toHaveURL(new RegExp(path + '#az900-storage-migration$'))
  await expect(page.getByRole('heading', { name: '7. Choose storage and move your data', exact: true })).toBeInViewport()
  await page.reload()
  await expect(page.getByTestId('learning-lesson')).toHaveCount(10)
  await page.goBack()
  await expect(page.getByTestId('study-hub')).toBeVisible()
  await page.goForward()
  await expect(page.getByTestId('learning-lesson')).toHaveCount(10)
  await expect(page.getByRole('heading', { name: 'How to use this to pass', exact: true })).toHaveCount(1)
})

test('Azure initial HTML, JSON-LD, internal links and headings agree', async ({ page, request }) => {
  await page.goto(path)
  const info = await page.locator('main').evaluate(main => ({
    headings: [...main.querySelectorAll('h2,h3')].map(h => h.textContent),
    ids: [...document.querySelectorAll('[id]')].map(e => e.id),
    hrefs: [...main.querySelectorAll('a[href]')].map(a => a.getAttribute('href')!),
    samples: [...main.querySelectorAll('[data-testid="guide-sample"]')].map(sample => {
      const answer = sample.querySelector('[data-testid="guide-sample-answer"]')!
      const clean = (text: string | null) => (text ?? '').replace(/\s+/g, ' ').trim()
      return {
        question: clean(sample.querySelector('[data-testid="guide-sample-question"]')!.textContent),
        options: [...sample.querySelectorAll('ol li')].map(option => {
          const copy = option.cloneNode(true) as Element
          copy.querySelector('span')?.remove()
          return clean(copy.textContent)
        }),
        answer: clean(answer.textContent).replace(/^[A-D]\. /, ''),
        explanation: clean(answer.nextElementSibling!.textContent),
      }
    }),
    faq: [...main.querySelectorAll('section')].find(section => section.querySelector(':scope > h2')?.textContent === 'Common questions')?.textContent,
    schema: [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(e => {
      const data = JSON.parse(e.textContent!)
      return Array.isArray(data) ? data : data['@graph'] ?? [data]
    }),
  }))
  expect(new Set(info.headings).size).toBe(info.headings.length)
  expect(new Set(info.ids).size).toBe(info.ids.length)
  const quiz = info.schema.find(row => row['@type'] === 'Quiz')
  const normalize = (value: string) => value.replace(/\s+/g, ' ').trim()
  const samples = GUIDE_SAMPLES['az-900'].slice(0, 8)
  expect(info.samples).toEqual(samples.map(sample => ({ question: normalize(sample.x), options: sample.o.map(normalize), answer: normalize(sample.o[sample.a]), explanation: normalize(sample.e) })))
  expect(quiz.hasPart.map((row: { name: string; acceptedAnswer: { text: string; explanation: string } }) => ({ question: row.name, answer: row.acceptedAnswer.text, explanation: row.acceptedAnswer.explanation }))).toEqual(samples.map(sample => ({ question: sample.x, answer: sample.o[sample.a], explanation: sample.e })))
  const faq = info.schema.find(row => row['@type'] === 'FAQPage')
  expect(faq.mainEntity.map((row: { name: string; acceptedAnswer: { text: string } }) => [row.name, row.acceptedAnswer.text])).toEqual(GUIDE_META.az900.faq)
  for (const [question, answer] of GUIDE_META.az900.faq) {
    expect(info.faq).toContain(question)
    expect(info.faq).toContain(answer)
  }
  for (const href of new Set(info.hrefs)) {
    if (href.startsWith('#')) await expect(page.locator(`[id="${href.slice(1)}"]`)).toHaveCount(1)
    if (href.startsWith('/')) {
      const response = await request.get(href.split('#')[0])
      expect(response.status(), href).toBe(200)
      if (href.includes('#')) expect(await response.text(), href).toContain(`id="${href.split('#')[1]}"`)
    }
  }
})

for (const width of [320, 375, 390, 768, 1440]) {
  test(`Azure reading and all disclosures fit ${width}px in both themes`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    await page.setViewportSize({ width, height: 800 })
    await page.goto(path)
    for (const theme of ['light', 'dark']) {
      await page.evaluate(theme => document.documentElement.classList.toggle('dark', theme === 'dark'), theme)
      for (const open of [false, true]) {
        await page.getByTestId('learning-lesson').locator('details').evaluateAll((items, open) => {
          items.forEach(item => { (item as HTMLDetailsElement).open = open })
        }, open)
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
        for (const diagram of await page.getByTestId('learning-diagram').all()) {
          expect(await diagram.evaluate(el => el.scrollWidth <= el.clientWidth + 1)).toBe(true)
          for (const label of await diagram.locator('p,dt,dd').all()) expect(await label.evaluate(el => parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThanOrEqual(14)
        }
        for (const paragraph of await page.getByTestId('lesson-explanation').locator('p').all()) {
          const inFigure = await paragraph.evaluate(el => !!el.closest('figure'))
          expect(await paragraph.evaluate(el => parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThanOrEqual(inFigure ? 14 : 16)
        }
      }
      const check = page.getByTestId('lesson-check').first()
      await check.locator('summary').click()
      await expect(check).not.toHaveAttribute('open')
      await check.locator('summary').click()
      await expect(check).toHaveAttribute('open', '')
      for (const summary of await page.getByTestId('learning-lesson').locator('summary').all()) expect((await summary.boundingBox())!.height).toBeGreaterThanOrEqual(44)
      for (const reference of await page.getByTestId('learning-lesson').locator('details li a').all()) expect((await reference.boundingBox())!.height).toBeGreaterThanOrEqual(44)
    }
    expect(errors).toEqual([])
  })
}

test('a touch-only phone can use the contents and unscored check', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, hasTouch: true, viewport: { width: 320, height: 740 } })
  try {
    await context.route('**/*', route => local(route.request().url()) ? route.continue() : route.abort())
    const page = await context.newPage()
    await page.goto(path)
    await page.locator('a[href="#az900-shared-responsibility"]').first().tap()
    await expect(page.locator('#az900-shared-responsibility')).toBeInViewport()
    const check = page.getByTestId('learning-lesson').nth(1).getByTestId('lesson-check')
    await check.locator('summary').tap()
    await expect(check).toHaveAttribute('open', '')
    await expect(check.getByTestId('lesson-check-note')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  } finally { await context.close() }
})
