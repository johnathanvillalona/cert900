import { test, expect, type Page } from '@playwright/test'
import { EXAM_META } from '../../src/data/meta'
import { GUIDE_PATHS, type GuideKey } from '../../src/data/routes'
import { settled } from './helpers'

// Independent expectations: do not use the registry as its own navigation oracle.
const guides: Record<string, GuideKey> = {
  '220-1201': 'aplus1', '220-1202': 'aplus2', 'n10-009': 'nplus', 'sy0-701': 'secplus',
  'ccna-200-301': 'ccna', 'aif-c01': 'aif', 'clf-c02': 'clf', 'saa-c03': 'saa',
  'az-900': 'az900', 'sc-900': 'sc900', 'az-104': 'az104',
}
const references: Record<string, GuideKey[]> = {
  '220-1201': ['cables'], '220-1202': [], 'n10-009': ['ports'], 'sy0-701': ['ports'],
  'ccna-200-301': ['ccnacli'], 'aif-c01': [], 'clf-c02': ['cloudsvc'], 'saa-c03': ['cloudsvc'],
  'az-900': ['cloudsvc'], 'sc-900': [], 'az-104': ['cloudsvc'],
}

test.beforeEach(async ({ context }) => {
  await context.route('**/*', r => ['127.0.0.1', 'localhost'].includes(new URL(r.request().url()).hostname) ? r.continue() : r.abort())
})

async function checkMenu(page: Page, id: string) {
  await expect(page).toHaveURL(new RegExp(`/exam/${id}$`))
  const study = page.getByTestId('study-resources')
  await expect(study.getByTestId('primary-study-guide')).toHaveAttribute('href', GUIDE_PATHS[guides[id]])
  await expect(study.getByTestId('study-reference')).toHaveCount(references[id].length)
  for (const key of references[id]) await expect(study.locator(`a[href="${GUIDE_PATHS[key]}"]`)).toBeVisible()
  await expect(page.getByTestId('mode-exam')).toBeVisible()
  await expect(page.getByTestId('mode-drill')).toBeVisible()
  await expect(page.getByTestId('mode-progress')).toBeVisible()
  await expect(page.getByTestId('open-plan')).toBeVisible()
  await expect(page.getByTestId('mode-pbq')).toHaveCount(EXAM_META[id].pbqCount ? 1 : 0)
  await expect(page.getByTestId('qcard')).toHaveCount(0)
}

for (const [path, practiceId] of [['/', 'exam-row'], ['/exams', 'exam-card']]) {
  test(`${path}: all 11 cards expose independent canonical Study Guide and unchanged Practice actions`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', e => errors.push(e.message))
    for (const [id, key] of Object.entries(guides)) {
      await page.goto(path)
      await expect(page.getByTestId('certification-entry')).toHaveCount(11)
      const card = page.locator(`[data-testid="certification-entry"][data-exam-id="${id}"]`)
      const study = card.getByTestId('study-guide-action')
      await expect(study).toHaveAccessibleName(`${EXAM_META[id].code} Study Guide`)
      await expect(study).toHaveAttribute('href', GUIDE_PATHS[key])
      expect(await study.evaluate(e => e.closest('button') === null && !e.querySelector('button,a'))).toBe(true)
      await study.focus()
      await page.keyboard.press('Enter')
      await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS[key]}$`))
      await expect(page.getByTestId('guide-page')).toBeVisible()
      await expect(page.getByRole('heading', { name: 'How to use this to pass', exact: true })).toHaveCount(1)
      await page.reload()
      await expect(page.getByTestId('guide-page')).toBeVisible()
      await page.goBack()
      await expect(page).toHaveURL(new RegExp(path === '/' ? '/$' : '/exams$'))
      await page.locator(`[data-testid="certification-entry"][data-exam-id="${id}"]`).getByTestId(practiceId).click()
      await checkMenu(page, id)
    }
    expect(errors).toEqual([])
  })
}

test('every registered guide and reference is delivered at its existing canonical URL', async ({ request, page }) => {
  const paths = [...new Set([...Object.values(guides).map(key => GUIDE_PATHS[key]), ...Object.values(references).flat().map(key => GUIDE_PATHS[key])])]
  for (const path of paths) {
    const response = await request.get(path)
    expect(response.status(), path).toBe(200)
    const html = await response.text()
    const canonical = await page.evaluate(html => new DOMParser().parseFromString(html, 'text/html').querySelector('link[rel=canonical]')?.getAttribute('href'), html)
    expect(canonical).toBe(`https://cert900.com${path}`)
  }
})

test('search discovers study guides and cheat sheets while topic selection still starts a drill', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('open-search').click()
  await page.getByTestId('search-input').fill('study guide core 1')
  const guide = page.getByTestId('search-hit-page').filter({ hasText: GUIDE_PATHS.aplus1 })
  await expect(guide).toBeVisible()
  await guide.click()
  await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS.aplus1}$`))
  await page.goBack()
  await page.getByTestId('open-search').click()
  await page.getByTestId('search-input').fill('cheat sheet ports')
  await page.getByTestId('search-hit-page').filter({ hasText: GUIDE_PATHS.ports }).click()
  await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS.ports}$`))
  await page.goBack()
  await page.getByTestId('open-search').click()
  await page.getByTestId('search-input').fill('troubleshooting networks 220-1201')
  await page.getByTestId('search-hit-topic').first().click()
  await expect(page.getByTestId('qcard')).toBeVisible()
  await expect(page).toHaveURL(/\/exam\/220-1201\/quiz$/)
  await expect(page.getByTestId('study-resources')).toHaveCount(0)
})

for (const mode of ['exam', 'practice', 'pbq'] as const) {
  test(`${mode}: completed results expose the free guide beside the score, never during an attempt`, async ({ page }) => {
    await page.goto('/exam/220-1201')
    await page.getByTestId(`mode-${mode === 'practice' ? 'drill' : mode}`).click()
    if (mode === 'practice') await page.getByTestId('start-drill').click()
    await expect(page.getByTestId('qcard')).toBeVisible()
    await expect(page.getByTestId('study-resources')).toHaveCount(0)
    if (mode === 'exam') {
      await page.getByRole('button', { name: 'End exam & score', exact: true }).click()
      await page.getByTestId('confirm-end').click()
    } else {
      for (let n = 0; n < 25 && !await page.getByTestId('finish').count(); n++) {
        if (mode === 'pbq') await page.getByTestId('check-pbq').click()
        else {
          await page.getByTestId('option').first().click()
          if (await page.getByTestId('check-multi').count()) {
            const options = page.getByTestId('option')
            for (let i = 1; i < await options.count() && !await page.getByTestId('check-multi').isEnabled(); i++) await options.nth(i).click()
            await page.getByTestId('check-multi').click()
          }
        }
        if (await page.getByTestId('finish').count()) break
        await page.getByTestId('next').click()
      }
      await page.getByTestId('finish').click()
    }
    await expect(page).toHaveURL(/\/exam\/220-1201\/results$/)
    await expect(page.getByTestId('primary-study-guide')).toHaveAttribute('href', GUIDE_PATHS.aplus1)
    expect(await page.getByTestId('study-resources').evaluate(e => e.previousElementSibling?.getAttribute('data-testid'))).toBe('score-hero')
    await page.getByTestId('primary-study-guide').focus()
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS.aplus1}$`))
  })
}

for (const width of [320, 375, 390, 768, 1440]) {
  test(`discovery at ${width}px: both themes, all exam cards and menus, complete labels and non-overlapping controls`, async ({ page }, info) => {
    const errors: string[] = []
    page.on('pageerror', e => errors.push(e.message))
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()) })
    await page.setViewportSize({ width, height: 900 })
    for (const theme of ['light', 'dark']) {
      await page.addInitScript(theme => localStorage.setItem('trainer-theme', theme), theme)
      for (const path of ['/', '/exams']) {
        await page.goto(path)
        await expect(page.getByTestId('certification-entry')).toHaveCount(11)
        for (const card of await page.getByTestId('certification-entry').all()) {
          const study = card.getByTestId('study-guide-action')
          await study.focus()
          await expect(study).toBeFocused()
          const a = (await study.boundingBox())!
          const b = (await card.getByRole('button').boundingBox())!
          expect(a.height).toBeGreaterThanOrEqual(44)
          expect(a.width).toBeGreaterThanOrEqual(44)
          expect(b.height).toBeGreaterThanOrEqual(44)
          expect(a.x + a.width <= b.x + 1 || b.x + b.width <= a.x + 1 || a.y + a.height <= b.y + 1 || b.y + b.height <= a.y + 1).toBe(true)
          expect(await card.evaluate(e => !e.querySelector('button a,button button,a button,a a'))).toBe(true)
          expect(await card.evaluate(e => [...e.querySelectorAll('span,a')].every(x => x.scrollWidth <= x.clientWidth + 1))).toBe(true)
        }
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
        if (theme === 'light' && [320, 390, 1440].includes(width)) {
          await settled(page)
          await page.getByTestId('certification-entry').first().screenshot({ path: info.outputPath(`${path === '/' ? 'landing' : 'picker'}-${width}.png`) })
        }
      }
      for (const id of Object.keys(guides)) {
        await page.goto(`/exam/${id}`)
        await checkMenu(page, id)
        const study = page.getByTestId('study-resources')
        await study.getByTestId('primary-study-guide').focus()
        await expect(study.getByTestId('primary-study-guide')).toBeFocused()
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
        expect(await study.evaluate(e => [...e.querySelectorAll('a,p,h2,h3')].every(x => x.scrollWidth <= x.clientWidth + 1))).toBe(true)
        if (id === '220-1201' && theme === 'light' && [320, 390, 1440].includes(width)) {
          await settled(page)
          await page.screenshot({ path: info.outputPath(`menu-${width}.png`), fullPage: true })
        }
      }
    }
    expect(errors).toEqual([])
  })
}

test('320px touch follows Study Guide without starting practice and preserves consent across documents', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, viewport: { width: 320, height: 740 }, hasTouch: true })
  try {
    const google: string[] = []
    await context.route('**/*', r => ['127.0.0.1', 'localhost'].includes(new URL(r.request().url()).hostname) ? r.continue() : r.abort())
    const page = await context.newPage()
    page.on('request', r => { if (/googletagmanager|google-analytics|googlesyndication|doubleclick|grow\.me/.test(r.url())) google.push(r.url()) })
    await page.goto('/')
    await page.getByRole('button', { name: 'Decline', exact: true }).tap()
    const card = page.locator('[data-testid="certification-entry"][data-exam-id="220-1201"]')
    await card.getByTestId('study-guide-action').tap()
    await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS.aplus1}$`))
    await expect(page.locator('[data-analytics-status]')).toHaveText('Analytics declined.')
    await page.goBack()
    await page.locator('[data-testid="certification-entry"][data-exam-id="220-1201"]').getByTestId('exam-row').tap()
    await checkMenu(page, '220-1201')
    await page.getByTestId('study-reference').tap()
    await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS.cables}$`))
    await expect(page.getByRole('heading', { name: 'How to use this to pass', exact: true })).toHaveCount(0)
    expect(google).toEqual([])
  } finally { await context.close() }
})

test('returning-user cards expose Study Guide at every width and preserve earned local progress', async ({ page }, info) => {
  // Earn real synthetic local progress through the existing practice flow.
  await page.goto('/exam/220-1201')
  await page.getByTestId('mode-drill').click()
  await page.getByTestId('start-drill').click()
  for (let n = 0; n < 25 && !await page.getByTestId('finish').count(); n++) {
    await page.getByTestId('option').first().click()
    if (await page.getByTestId('check-multi').count()) {
      const options = page.getByTestId('option')
      for (let i = 1; i < await options.count() && !await page.getByTestId('check-multi').isEnabled(); i++) await options.nth(i).click()
      await page.getByTestId('check-multi').click()
    }
    if (await page.getByTestId('finish').count()) break
    await page.getByTestId('next').click()
  }
  await page.getByTestId('finish').click()
  await expect(page.getByTestId('score-hero')).toBeVisible()
  const progress = await page.evaluate(() => localStorage.getItem('comptia-trainer-v1'))
  expect(progress).toBeTruthy()
  for (const width of [320, 375, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const theme of ['light', 'dark']) {
      await page.addInitScript(theme => localStorage.setItem('trainer-theme', theme), theme)
      await page.goto('/')
      await expect(page.getByRole('heading', { name: 'Welcome back', exact: true })).toBeVisible()
      const card = page.getByTestId('continue-entry').filter({ hasText: '220-1201' })
      await expect(card.getByTestId('continue-practice')).toBeVisible()
      const study = card.getByTestId('study-guide-action')
      await expect(study).toHaveAttribute('href', GUIDE_PATHS.aplus1)
      expect((await study.boundingBox())!.height).toBeGreaterThanOrEqual(44)
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
      expect(await card.evaluate(e => !e.querySelector('button a,button button,a button,a a'))).toBe(true)
      if (theme === 'light' && [320, 1440].includes(width)) {
        await settled(page)
        await card.screenshot({ path: info.outputPath(`returning-${width}.png`) })
      }
      await study.focus()
      await page.keyboard.press('Enter')
      await expect(page).toHaveURL(new RegExp(`${GUIDE_PATHS.aplus1}$`))
      expect(await page.evaluate(() => localStorage.getItem('comptia-trainer-v1'))).toBe(progress)
      await page.goBack()
      await page.getByTestId('continue-entry').getByTestId('continue-practice').click()
      await expect(page).toHaveURL(/\/exam\/220-1201$/)
      expect(await page.evaluate(() => localStorage.getItem('comptia-trainer-v1'))).toBe(progress)
    }
  }
})
