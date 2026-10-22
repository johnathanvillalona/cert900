import { test, expect, type BrowserContext, type Page } from '@playwright/test'
import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { GUIDE_META } from '../../src/data/guide-meta'
import { GUIDE_PATHS } from '../../src/data/routes'
import { selectGuideSamples } from '../../src/lib/guide-sample-selection'
import { settled } from './helpers'

const guidePath = GUIDE_PATHS.aif
const hubPath = '/study/aif-c01'
const canonical = `https://cert900.com${guidePath}`
const lessonIds = [
  'aif-ai-ml-approaches',
  'aif-ml-lifecycle',
  'aif-model-performance',
  'aif-foundation-models-services',
  'aif-prompting-context',
  'aif-retrieval-customization',
  'aif-agents-evaluation',
  'aif-responsible-ai',
  'aif-security-governance',
] as const
const domainLessons = [lessonIds.slice(0, 3), lessonIds.slice(3, 4), lessonIds.slice(4, 7), lessonIds.slice(7, 8), lessonIds.slice(8, 9)]
const selectedSamples = selectGuideSamples(['aif-c01'])
const clean = (text: string) => text.replace(/\s+/g, ' ').trim()
const local = (url: string) => ['127.0.0.1', 'localhost'].includes(new URL(url).hostname)
const advertising = /googlesyndication|doubleclick|googleadservices|fundingchoices|grow\.me|ethicalads/i
const analytics = /googletagmanager|google-analytics/i

async function localRequestsOnly(context: BrowserContext) {
  await context.route('**/*', route => local(route.request().url()) ? route.continue() : route.abort())
}

test.beforeEach(async ({ context }) => { await localRequestsOnly(context) })

function observe(page: Page) {
  const errors: string[] = []
  const ads: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => {
    if (message.type() !== 'error') return
    const source = message.location().url
    // The harness deliberately blocks the existing Cloudflare beacon. Keep
    // every other console error, including failures from local app resources.
    if (/^https:\/\/(?:static\.)?cloudflareinsights\.com\//.test(source) && /net::ERR_/.test(message.text())) return
    errors.push(message.text())
  })
  page.on('response', response => {
    if (response.status() >= 400) errors.push(`${response.status()} ${new URL(response.url()).pathname}`)
  })
  page.on('request', request => { if (advertising.test(request.url())) ads.push(request.url()) })
  return { errors, ads }
}

interface SchemaNode {
  '@type'?: string
  '@id'?: string
  name?: string
  text?: string
  url?: string
  explanation?: string
  learningResourceType?: string
  hasPart?: SchemaNode[]
  mainEntity?: SchemaNode[]
  acceptedAnswer?: SchemaNode
  suggestedAnswer?: SchemaNode[]
}

// This function runs against an independently parsed HTTP response as well as
// the live DOM, so JavaScript cannot be its own source of truth.
function guideDocument(html?: string) {
  const doc = html === undefined ? document : new DOMParser().parseFromString(html, 'text/html')
  const main = doc.querySelector('[data-testid="guide-page"]')!
  const normalize = (text: string | null | undefined) => (text ?? '').replace(/\s+/g, ' ').trim()
  const graph: SchemaNode[] = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(script => {
    const value = JSON.parse(script.textContent!)
    return value['@graph'] ?? [value]
  })
  const faqSection = [...main.querySelectorAll('section')].find(section =>
    normalize(section.querySelector(':scope > h2')?.textContent) === 'Common questions')!
  return {
    text: normalize(main.textContent),
    canonical: [...doc.querySelectorAll('link[rel="canonical"]')].map(link => link.getAttribute('href')),
    headings: [...main.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(heading => ({ id: heading.id, text: normalize(heading.textContent) })),
    ids: [...doc.querySelectorAll('[id]')].map(node => node.id),
    lessons: [...main.querySelectorAll('[data-testid="learning-lesson"]')].map(lesson => ({
      tag: lesson.tagName,
      id: lesson.id,
      labelledBy: lesson.getAttribute('aria-labelledby'),
      headings: [...lesson.querySelectorAll('h2')].map(heading => ({ id: heading.id, text: normalize(heading.textContent) })),
      text: normalize(lesson.textContent),
      checks: [...lesson.querySelectorAll('[data-testid="lesson-check"]')].map(check => ({
        tag: check.tagName,
        summaries: [...check.querySelectorAll(':scope > summary')].map(summary => normalize(summary.textContent)),
        body: normalize([...check.children].filter(node => node.tagName !== 'SUMMARY').map(node => node.textContent).join(' ')),
      })),
      sources: [...lesson.querySelectorAll('a[href^="https:"]')].map(link => ({ tag: link.tagName, href: link.getAttribute('href')!, text: normalize(link.textContent) })),
    })),
    toc: [...main.querySelectorAll('nav[aria-label="AWS lesson contents"] a')].map(link => ({ tag: link.tagName, href: link.getAttribute('href'), text: normalize(link.textContent) })),
    figures: [...main.querySelectorAll('[data-testid="learning-diagram"]')].map(figure => ({ tag: figure.tagName, caption: normalize(figure.querySelector('figcaption')?.textContent) })),
    samples: [...main.querySelectorAll('[data-testid="guide-sample"]')].map(sample => {
      const answer = sample.querySelector('[data-testid="guide-sample-answer"]')!
      return {
        question: normalize(sample.querySelector('[data-testid="guide-sample-question"]')?.textContent),
        options: [...sample.querySelectorAll('ol li')].map(option => {
          const copy = option.cloneNode(true) as Element
          copy.querySelector('span')?.remove()
          return normalize(copy.textContent)
        }),
        answer: normalize(answer.textContent).replace(/^[A-D]\. /, ''),
        explanation: normalize(answer.nextElementSibling?.textContent),
      }
    }),
    faq: [...faqSection.querySelectorAll('details')].map(details => ({
      question: normalize(details.querySelector('summary')?.textContent),
      answer: normalize(details.querySelector('p')?.textContent),
    })),
    graph,
  }
}

type GuideDocument = ReturnType<typeof guideDocument>

function assertGuideDocument(info: GuideDocument) {
  expect(info.canonical).toEqual([canonical])
  expect(info.lessons).toHaveLength(9)
  expect(info.figures).toHaveLength(4)
  expect(info.figures.every(figure => figure.tag === 'FIGURE' && figure.caption.length > 20)).toBe(true)
  expect(new Set(info.ids).size, 'duplicate document IDs').toBe(info.ids.length)
  const headingNames = info.headings.map(heading => heading.text)
  expect(new Set(headingNames).size, 'duplicate headings').toBe(headingNames.length)
  expect(info.headings.filter(heading => heading.text === GUIDE_META.aif.h1)).toHaveLength(1)
  expect(info.toc.map(link => link.href)).toEqual(lessonIds.map(id => `#${id}`))
  expect(info.toc.every(link => link.tag === 'A' && link.text.length > 0)).toBe(true)
  for (const [index, lesson] of info.lessons.entries()) {
    const id = lessonIds[index]
    expect(lesson.tag, id).toBe('SECTION')
    expect(lesson.headings, id).toHaveLength(1)
    expect(lesson.headings[0].id, id).toBeTruthy()
    expect(lesson.labelledBy, id).toBe(lesson.headings[0].id)
    expect([lesson.id, lesson.headings[0].id], id).toContain(id)
    expect(lesson.checks, id).toHaveLength(1)
    expect(lesson.checks[0].tag, id).toBe('DETAILS')
    expect(lesson.checks[0].summaries, id).toHaveLength(1)
    expect(lesson.checks[0].summaries[0].length, id).toBeGreaterThan(10)
    expect(lesson.checks[0].body.length, id).toBeGreaterThan(40)
    expect(lesson.sources.length, `${id}: official references`).toBeGreaterThan(0)
    for (const source of lesson.sources) {
      const url = new URL(source.href)
      expect(source.tag, id).toBe('A')
      expect(url.protocol, id).toBe('https:')
      expect(['docs.aws.amazon.com', 'aws.amazon.com'], source.href).toContain(url.hostname)
      expect(source.text.length, source.href).toBeGreaterThan(5)
    }
  }

  // The new lessons and checks must preserve all eight existing bank samples.
  expect(info.samples).toEqual(selectedSamples.map(({ sample }) => ({
    question: clean(sample.x), options: sample.o.map(clean),
    answer: clean(sample.o[sample.a]), explanation: clean(sample.e),
  })))
  expect(info.samples).toHaveLength(8)
  const quizzes = info.graph.filter(node => node['@type'] === 'Quiz')
  expect(quizzes).toHaveLength(1)
  expect(quizzes[0].url).toBe(canonical)
  expect(quizzes[0].hasPart).toHaveLength(8)
  expect(quizzes[0].hasPart!.map(question => ({
    type: question['@type'], name: question.name, text: question.text,
    answerType: question.acceptedAnswer?.['@type'], answer: question.acceptedAnswer?.text,
    explanation: question.acceptedAnswer?.explanation,
    distractors: question.suggestedAnswer?.map(answer => answer.text),
  }))).toEqual(selectedSamples.map(({ sample }) => ({
    type: 'Question', name: sample.x, text: sample.x, answerType: 'Answer',
    answer: sample.o[sample.a], explanation: sample.e,
    distractors: sample.o.filter((_, index) => index !== sample.a),
  })))

  const resources = info.graph.filter(node => node['@type'] === 'LearningResource' && node.learningResourceType === 'Study guide')
  expect(resources).toHaveLength(1)
  expect(resources[0].url).toBe(canonical)
  expect(resources[0].hasPart).toHaveLength(9)
  expect(resources[0].hasPart!.map(part => ({ type: part['@type'], name: part.name, anchor: part.url ?? part['@id'] })))
    .toEqual(info.lessons.map((lesson, index) => ({ type: 'LearningResource', name: lesson.headings[0].text, anchor: `${canonical}#${lessonIds[index]}` })))

  const faqs = info.graph.filter(node => node['@type'] === 'FAQPage')
  expect(faqs).toHaveLength(1)
  const expectedFaq = GUIDE_META.aif.faq.map(([question, answer]) => ({ question: clean(question), answer: clean(answer) }))
  expect(info.faq).toEqual(expectedFaq)
  expect(faqs[0].mainEntity?.map(question => ({ question: question.name, answer: question.acceptedAnswer?.text }))).toEqual(expectedFaq)
}

async function expectGuide(page: Page) {
  await expect(page.getByTestId('learning-lesson')).toHaveCount(9)
  await expect(page.getByTestId('lesson-check')).toHaveCount(9)
  await expect(page.getByTestId('learning-diagram')).toHaveCount(4)
  await expect(page.getByTestId('guide-sample')).toHaveCount(8)
  await expect(page.locator('script[src*="adsbygoogle"], ins.adsbygoogle')).toHaveCount(0)
}

for (const javaScriptEnabled of [false, true]) {
  test(`AWS lessons, native checks, diagrams and schema are present in initial HTML; JavaScript=${javaScriptEnabled}`, async ({ browser, baseURL }) => {
    const context = await browser.newContext({ baseURL, javaScriptEnabled })
    try {
      await localRequestsOnly(context)
      const page = await context.newPage()
      const observed = observe(page)
      const response = await page.goto(guidePath)
      expect(response?.status()).toBe(200)
      const delivered = await page.evaluate(guideDocument, await response!.text())
      await expectGuide(page)
      const rendered = await page.evaluate(guideDocument)
      expect(rendered).toEqual(delivered)
      assertGuideDocument(delivered)
      await page.reload()
      await expectGuide(page)
      expect(await page.evaluate(guideDocument)).toEqual(delivered)
      expect(observed.errors).toEqual([])
      expect(observed.ads).toEqual([])
    } finally { await context.close() }
  })

  test(`AWS Hub lesson links, keyboard contents and native disclosures survive refresh and history; JavaScript=${javaScriptEnabled}`, async ({ browser, baseURL }) => {
    const context = await browser.newContext({ baseURL, javaScriptEnabled })
    try {
      await localRequestsOnly(context)
      const page = await context.newPage()
      const observed = observe(page)
      const response = await page.goto(hubPath)
      expect(response?.status()).toBe(200)
      const htmlLinks = await page.evaluate(html => {
        const doc = new DOMParser().parseFromString(html, 'text/html')
        return [...doc.querySelectorAll('[data-testid="hub-guide-lesson"]')].map(link => ({
          tag: link.tagName, href: link.getAttribute('href'), domain: link.closest('[data-testid="hub-domain"]')?.id,
        }))
      }, await response!.text())
      const expectedLinks = domainLessons.flatMap((ids, index) => ids.map(id => ({ tag: 'A', href: `${guidePath}#${id}`, domain: `domain-${index + 1}` })))
      expect(htmlLinks).toEqual(expectedLinks)
      await expect(page.getByTestId('hub-guide-lesson')).toHaveCount(9)
      expect(await page.getByTestId('hub-guide-lesson').evaluateAll(links => links.map(link => ({
        tag: link.tagName, href: link.getAttribute('href'), domain: link.closest('[data-testid="hub-domain"]')?.id,
      })))).toEqual(expectedLinks)

      for (const index of [0, 8]) {
        const domain = page.locator(`#domain-${index === 0 ? 1 : 5}`)
        const domainSummary = domain.locator(':scope > summary')
        await domainSummary.focus()
        await page.keyboard.press('Enter')
        await expect(domain).toHaveAttribute('open', '')
        const link = domain.locator(`a[href="${guidePath}#${lessonIds[index]}"]`)
        await link.focus()
        await expect(link).toBeFocused()
        await page.keyboard.press('Enter')
        await expect(page).toHaveURL(url => url.pathname === guidePath && url.hash === `#${lessonIds[index]}`)
        await expectGuide(page)
        await page.reload()
        await expectGuide(page)
        await expect(page).toHaveURL(url => url.hash === `#${lessonIds[index]}`)
        await page.goBack()
        await expect(page).toHaveURL(url => url.pathname === hubPath)
        await expect(page.getByTestId('hub-guide-lesson')).toHaveCount(9)
        await page.goForward()
        await expectGuide(page)
        await expect(page).toHaveURL(url => url.hash === `#${lessonIds[index]}`)
        await page.locator(`[data-testid="guide-study-hub"][href="${hubPath}"]`).click()
        await expect(page.getByTestId('study-hub')).toHaveAttribute('data-exam-id', 'aif-c01')
      }

      await page.getByTestId('hub-primary-guide').click()
      const contents = page.getByRole('navigation', { name: 'AWS lesson contents', exact: true })
      const links = contents.getByRole('link')
      await links.first().focus()
      await page.keyboard.press('Tab')
      await expect(links.nth(1)).toBeFocused()
      await page.keyboard.press('Enter')
      await expect(page).toHaveURL(url => url.hash === `#${lessonIds[1]}`)
      const target = page.locator(`#${lessonIds[1]}`)
      expect(await target.evaluate(element => {
        const top = element.getBoundingClientRect().top
        return top >= 0 && top < innerHeight
      })).toBe(true)
      const lesson = page.getByTestId('learning-lesson').nth(1)
      const check = lesson.getByTestId('lesson-check')
      const summary = check.locator(':scope > summary')
      await summary.focus()
      await expect(summary).toBeFocused()
      await page.keyboard.press('Space')
      await expect(check).toHaveAttribute('open', '')
      await expect(summary).toBeFocused()
      await page.keyboard.press('Enter')
      await expect(check).not.toHaveAttribute('open', '')
      await expect(summary).toBeFocused()
      await expectGuide(page)
      expect(observed.errors).toEqual([])
      expect(observed.ads).toEqual([])
    } finally { await context.close() }
  })
}

for (const width of [320, 375, 390, 768, 1440]) {
  test(`AWS lessons and open disclosures are readable without overflow at ${width}px in both themes`, async ({ page }) => {
    const observed = observe(page)
    await page.setViewportSize({ width, height: 1000 })
    for (const theme of ['light', 'dark']) {
      await page.addInitScript(theme => localStorage.setItem('trainer-theme', theme), theme)
      await page.goto(guidePath)
      await page.evaluate(theme => document.documentElement.classList.toggle('dark', theme === 'dark'), theme)
      await expectGuide(page)
      expect(await page.locator('html').evaluate(element => element.classList.contains('dark'))).toBe(theme === 'dark')
      await page.evaluate(() => document.querySelectorAll('main details').forEach(details => details.setAttribute('open', '')))
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${width}/${theme}: page overflow`).toBe(true)
      for (const link of await page.getByRole('navigation', { name: 'AWS lesson contents', exact: true }).getByRole('link').all()) {
        expect((await link.boundingBox())!.height, `${width}/${theme}: contents link target`).toBeGreaterThanOrEqual(44)
      }
      for (const lesson of await page.getByTestId('learning-lesson').all()) {
        expect(await lesson.evaluate(element => element.scrollWidth <= element.clientWidth + 1), `${width}/${theme}: lesson overflow`).toBe(true)
        const body = lesson.locator('[data-testid="lesson-explanation"] p, [data-testid="lesson-explanation"] li, [data-testid="lesson-scenario"] p, [data-testid="lesson-scenario"] li')
        expect(await body.count(), 'lesson paragraphs').toBeGreaterThan(0)
        for (const paragraph of await body.all()) {
          expect(await paragraph.evaluate(element => parseFloat(getComputedStyle(element).fontSize)), `${width}/${theme}: lesson body font`).toBeGreaterThanOrEqual(16)
        }
        for (const summary of await lesson.locator('summary').all()) {
          expect((await summary.boundingBox())!.height, `${width}/${theme}: disclosure target`).toBeGreaterThanOrEqual(44)
          await summary.focus()
          await expect(summary).toBeFocused()
        }
        for (const supporting of await lesson.locator('p, li, figcaption, th, td, a, small').all()) {
          expect(await supporting.evaluate(element => parseFloat(getComputedStyle(element).fontSize)), `${width}/${theme}: supporting font`).toBeGreaterThanOrEqual(14)
        }
      }
      for (const figure of await page.getByTestId('learning-diagram').all()) {
        expect(await figure.evaluate(element => element.scrollWidth <= element.clientWidth + 1), `${width}/${theme}: diagram overflow`).toBe(true)
      }
      for (const comparison of await page.getByTestId('learning-lesson').getByRole('region').all()) {
        await comparison.focus()
        await expect(comparison).toBeFocused()
      }
      // Evidence images are separate from the established screenshot baselines.
      if ([320, 390, 1440].includes(width)) {
        const directory = resolve(process.cwd(), 'docs/qa/seo-phase-3-aif')
        mkdirSync(directory, { recursive: true })
        await settled(page)
        await page.getByRole('navigation', { name: 'AWS lesson contents', exact: true }).screenshot({ path: resolve(directory, `aif-toc-${width}-${theme}.png`) })
        await page.getByTestId('learning-lesson').first().screenshot({ path: resolve(directory, `aif-lesson-${width}-${theme}.png`) })
        await page.getByTestId('learning-diagram').first().screenshot({ path: resolve(directory, `aif-diagram-${width}-${theme}.png`) })
      }
      await page.goto(hubPath)
      await page.evaluate(() => document.querySelectorAll('main details').forEach(details => details.setAttribute('open', '')))
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${width}/${theme}: Hub overflow`).toBe(true)
      await expect(page.getByTestId('hub-guide-lesson')).toHaveCount(9)
      for (const summary of await page.getByTestId('hub-domain').locator(':scope > summary').all()) {
        expect((await summary.boundingBox())!.height).toBeGreaterThanOrEqual(44)
      }
    }
    expect(observed.errors).toEqual([])
    expect(observed.ads).toEqual([])
  })
}

test('AWS lesson interactions and real Hub navigation preserve consent without advertising requests', async ({ page }) => {
  const observed = observe(page)
  const googleRequests: string[] = []
  page.on('request', request => { if (analytics.test(request.url())) googleRequests.push(request.url()) })
  await page.goto(hubPath)
  await page.getByRole('button', { name: 'Decline', exact: true }).click()
  await expect(page.getByRole('status')).toHaveText('Analytics declined.')
  await page.getByTestId('hub-domain').first().locator('summary').click()
  await page.getByTestId('hub-guide-lesson').first().click()
  await expectGuide(page)
  await expect(page.getByRole('status')).toHaveText('Analytics declined.')
  await page.getByTestId('lesson-check').first().locator('summary').click()
  await page.reload()
  await expectGuide(page)
  await expect(page.getByRole('status')).toHaveText('Analytics declined.')
  await page.getByRole('button', { name: 'Change preferences', exact: true }).click()
  await page.getByRole('button', { name: 'Allow analytics', exact: true }).click()
  await expect(page.getByRole('status')).toHaveText('Analytics allowed.')
  await page.locator(`[data-testid="guide-study-hub"][href="${hubPath}"]`).click()
  await expect(page.getByRole('status')).toHaveText('Analytics allowed.')
  await page.goBack()
  await expectGuide(page)
  await expect(page.getByRole('status')).toHaveText('Analytics allowed.')
  await page.goForward()
  await expect(page.getByRole('status')).toHaveText('Analytics allowed.')
  await page.getByRole('button', { name: 'Change preferences', exact: true }).click()
  await page.getByRole('button', { name: 'Decline', exact: true }).click()
  await page.reload()
  await expect(page.getByRole('status')).toHaveText('Analytics declined.')
  expect(googleRequests).toEqual([])
  expect(observed.errors).toEqual([])
  expect(observed.ads).toEqual([])
})
