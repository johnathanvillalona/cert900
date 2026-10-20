import { test, expect } from '@playwright/test'
import { exam as core1 } from '../../src/data/220-1201'
import { exam as core2 } from '../../src/data/220-1202'
import { exam as network } from '../../src/data/n10-009'
import { openLab, findQuestion, workstation, place } from './helpers'

test.beforeEach(async ({ page }) => {
  await page.route('**/*', r => ['127.0.0.1', 'localhost'].includes(new URL(r.request().url()).hostname) ? r.continue() : r.abort())
})

for (const exam of [core1, core2, network]) {
  for (const p of exam.pbqs.filter(p => p.kind === 'dragconnect')) {
    test(`${exam.id}: neutral accessible inventory and correct scene: ${p.title}`, async ({ page }) => {
      await openLab(page, exam.code)
      await findQuestion(page, p.title)
      for (const item of p.items) {
        await expect(page.getByTestId(`item-${item.id}`)).toHaveAccessibleName(`${item.label}, not connected`)
      }
      const scene = page.getByTestId('dragconnect-scene').getByRole('img')
      await expect(scene).toHaveAttribute('alt', /.+/)
      if (p.scene !== 'pc-rear') await expect(scene).not.toHaveAttribute('alt', /workstation computer with peripheral ports/)
      await page.setViewportSize({width:320,height:740})
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
      for (const zone of p.zones) {
        const control = page.getByTestId(`port-${zone.id}`)
        await expect(control).toHaveAccessibleName(new RegExp(zone.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
        expect((await control.boundingBox())!.height).toBeGreaterThanOrEqual(44)
      }
    })
  }
}

test('connector drag cleanup on outside release, pointercancel and Escape; real drop still places once', async ({ page }) => {
  await workstation(page)
  const item = page.getByTestId('item-vga')
  for (const action of ['outside', 'cancel', 'escape']) {
    await item.scrollIntoViewIfNeeded()
    const a = (await item.boundingBox())!
    await page.mouse.move(a.x + 10, a.y + 10)
    await page.mouse.down()
    await expect(page.getByTestId('dragconnect-ghost')).toBeAttached()
    await page.mouse.move(2, 150)
    if (action === 'cancel') await page.locator('body').dispatchEvent('pointercancel', { pointerId: 1 })
    if (action === 'escape') await page.keyboard.press('Escape')
    await page.mouse.up()
    await expect(page.getByTestId('dragconnect-ghost')).toHaveCount(0)
    await expect(page.getByTestId('dragconnect-status')).toHaveText('0 of 4 ports connected.')
  }
  await item.scrollIntoViewIfNeeded()
  const a = (await item.boundingBox())!
  const z = (await page.getByTestId('zone-zvga').boundingBox())!
  await page.mouse.move(a.x + 10, a.y + 10)
  await page.mouse.down()
  await page.mouse.move(z.x + z.width / 2, z.y + z.height / 2, { steps: 8 })
  await page.mouse.up()
  await expect(page.getByTestId('zone-zvga')).toHaveAccessibleName(/contains Analog monitor cable/)
  await expect(page.getByTestId('dragconnect-status')).toHaveText('1 of 4 ports connected.')
  await expect(page.getByTestId('dragconnect-ghost')).toHaveCount(0)
})

test('ordering pointer cancellation preserves the actual answer and normal drag commits', async ({ page }) => {
  await openLab(page)
  const p = core1.pbqs.find(p => p.kind === 'order')!
  await findQuestion(page, p.title)
  const rows = page.getByTestId('order-row')
  const before = await rows.allTextContents()
  const handle = page.getByTestId('order-handle').first()
  await handle.scrollIntoViewIfNeeded()
  const a = (await handle.boundingBox())!
  const b = (await rows.nth(1).boundingBox())!
  await page.mouse.move(a.x + a.width / 2, a.y + a.height / 2)
  await page.mouse.down()
  await page.mouse.move(a.x + a.width / 2, b.y + b.height, { steps: 6 })
  await handle.dispatchEvent('pointercancel', { pointerId: 1 })
  await page.mouse.up()
  expect(await rows.allTextContents()).toEqual(before)
  // A second, completed pointer drag must still update the session.
  await page.mouse.move(a.x + a.width / 2, a.y + a.height / 2)
  await page.mouse.down()
  await page.mouse.move(a.x + a.width / 2, b.y + b.height, { steps: 6 })
  await page.mouse.up()
  expect(await rows.allTextContents()).not.toEqual(before)
})

for (const [name, placements, score] of [
  ['full', [['vga','zvga'],['rj45','zlan'],['usb','zusb'],['aud','zaud']], 100],
  ['partial', [['vga','zvga'],['rj45','zlan']], 50],
  ['distractors', [['hdmi','zvga'],['rj11','zlan'],['pwr','zusb']], 0],
] as const) {
  test(`workstation ${name} grade and post-grade locking`, async ({ page }) => {
    await workstation(page)
    for (const [item, zone] of placements) await place(page, item, zone)
    await page.getByTestId('check-pbq').click()
    await expect(page.getByTestId('feedback')).toContainText(`${score}% correct`)
    await expect(page.getByTestId('item-vga')).toBeDisabled()
    await expect(page.getByTestId('dragconnect-reset')).toBeDisabled()
  })
}
