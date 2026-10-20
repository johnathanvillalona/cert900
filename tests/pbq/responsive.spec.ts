import { test, expect } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import { exam as core1 } from '../../src/data/220-1201'
import { exam as core2 } from '../../src/data/220-1202'
import { exam as security } from '../../src/data/sy0-701'
import { openLab, findQuestion, settled, workstation } from './helpers'

const samples = [
  { kind: 'dragconnect', code: core1.code, title: 'Provision the Sales Workstation' },
  { kind: 'match', code: core1.code, title: core1.pbqs.find(p => p.kind === 'match')!.title },
  { kind: 'order', code: core1.code, title: core1.pbqs.find(p => p.kind === 'order')!.title },
  { kind: 'terminal', code: core1.code, title: 'Fix a Stale DHCP Lease' },
  { kind: 'config', code: core2.code, title: 'Windows Defender Firewall: Allow the App' },
  { kind: 'hotspot', code: security.code, title: 'Build the Screened Subnet' },
]

test.beforeEach(async ({ page }) => {
  await page.route('**/*', r => ['127.0.0.1', 'localhost'].includes(new URL(r.request().url()).hostname) ? r.continue() : r.abort())
})
for (const sample of samples) {
  test(`${sample.kind}: five widths, both themes, readable controls and visual candidates`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', e => errors.push(e.message))
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
    await openLab(page, sample.code)
    await findQuestion(page, sample.title)
    await settled(page)
    for (const width of [320,375,390,768,1440]) {
      await page.setViewportSize({ width, height: 1000 })
      for (const theme of ['light', 'dark']) {
        await page.evaluate(theme => document.documentElement.classList.toggle('dark', theme === 'dark'), theme)
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
        if (sample.kind === 'dragconnect') {
          for (const control of await page.locator('[data-testid^="port-"]').all()) {
            const r = (await control.boundingBox())!
            expect(r.width).toBeGreaterThanOrEqual(44)
            expect(r.height).toBeGreaterThanOrEqual(44)
          }
          // The legend must never become part of the photo's measured plane.
          const scene = page.getByTestId('dragconnect-scene')
          const image = scene.getByRole('img')
          expect(Math.abs((await scene.boundingBox())!.height - (await image.boundingBox())!.height)).toBeLessThanOrEqual(2)
        }
        if (sample.kind === 'terminal') {
          expect(await page.getByTestId('terminal-input').evaluate(e => parseFloat(getComputedStyle(e).fontSize))).toBeGreaterThanOrEqual(16)
          await expect(page.getByRole('log', { name: 'Terminal history' })).toHaveAttribute('tabindex','0')
        }
        if (sample.kind === 'order') {
          for (const control of await page.getByRole('button', { name: /^Move (up|down):/ }).all()) {
            expect((await control.boundingBox())!.height).toBeGreaterThanOrEqual(44)
          }
          await expect(page.getByTestId('order-handle').first()).toHaveAttribute('tabindex', '-1')
        }
        if (sample.kind === 'hotspot') {
          const controls = page.locator('[data-testid^="hotspot-control-"]')
          expect(await controls.count()).toBeGreaterThan(0)
          for (const control of await controls.all()) expect((await control.boundingBox())!.height).toBeGreaterThanOrEqual(44)
          const contained = await page.getByTestId('hotspot-diagram').evaluate(svg => {
            const s = svg as unknown as SVGSVGElement
            const v = s.viewBox.baseVal
            return [...s.querySelectorAll('rect')].every(r => {
              const b = r.getBBox()
              return b.x - 1 >= v.x && b.y - 1 >= v.y && b.x + b.width + 1 <= v.x + v.width && b.y + b.height + 1 <= v.y + v.height
            })
          })
          expect(contained).toBe(true)
        }
        if ([320,1440].includes(width)) {
          await expect(page.getByTestId('qcard')).toHaveScreenshot(`${sample.kind}-${width}-${theme}.png`, { animations: 'disabled', stylePath: fileURLToPath(new URL('./screenshot.css', import.meta.url)) })
        }
      }
    }
    expect(errors).toEqual([])
  })
}

test('both 320px headers retain all six accessible actions with 44px targets', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 })
  await page.goto('/')
  for (const testId of ['landing', 'application']) {
    const header = page.locator('header').first()
    const buttons = header.getByRole('button')
    await expect(buttons).toHaveCount(7) // brand plus six actions
    for (const button of await buttons.all()) {
      const r = (await button.boundingBox())!
      expect(r.width).toBeGreaterThanOrEqual(44)
      expect(r.height).toBeGreaterThanOrEqual(44)
      expect(await button.getAttribute('aria-label') || await button.innerText()).toBeTruthy()
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(320)
    await page.evaluate(() => window.scrollTo(0,0))
    await settled(page)
    expect((await header.boundingBox())!.height).toBeGreaterThanOrEqual(100)
    await expect(header).toHaveScreenshot(`header-${testId}-320.png`)
    if (testId === 'landing') {
      await page.getByTestId('exam-row').filter({ hasText:'220-1201' }).click()
      await expect(page.getByTestId('mode-pbq')).toBeVisible()
      await page.evaluate(() => window.scrollTo(0,0))
    }
  }
})

test('keyboard connector selection targets the full-size control; Escape clears selection', async ({ page }) => {
  await workstation(page)
  await page.getByTestId('item-vga').focus()
  await page.keyboard.press('Enter')
  await expect(page.getByTestId('port-zvga')).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.getByTestId('zone-zvga')).toHaveAccessibleName(/contains Analog monitor cable/)
  await page.getByTestId('item-rj45').focus()
  await page.keyboard.press('Space')
  await page.keyboard.press('Escape')
  await expect(page.getByTestId('item-rj45')).toHaveAttribute('aria-pressed','false')
  await page.getByTestId('port-zvga').click()
  await expect(page.getByTestId('zone-zvga')).toHaveAccessibleName(/empty/)
})
