import { test, expect } from '@playwright/test'
import { exam as core1 } from '../../src/data/220-1201'
import { exam as core2 } from '../../src/data/220-1202'
import { exam as security } from '../../src/data/sy0-701'
import { exam as aws } from '../../src/data/aif-c01'
import { openLab, findQuestion } from './helpers'

test.beforeEach(async ({ page }) => {
  await page.route('**/*', r => ['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname) ? r.continue() : r.abort())
})

for (const exam of [core1, aws]) {
  test(`${exam.code}: matching keyboard selection, shuffled choices, grading and question isolation`, async ({ page }) => {
    await openLab(page, exam.code)
    const p = exam.pbqs.find(p => p.kind === 'match')!
    if (p.kind !== 'match') throw new Error('fixture')
    await findQuestion(page, p.title)
    await page.mouse.move(0,0)
    const controls = page.getByTestId('match-select')
    for (let i=0; i<p.items.length; i++) {
      await expect(controls.nth(i)).toContainText('Choose')
      await controls.nth(i).focus()
      await page.keyboard.press('Enter')
      await expect.poll(() => page.evaluate(() => !!document.activeElement?.closest('[role="listbox"]'))).toBe(true)
      const labels = await page.getByRole('option').allTextContents()
      expect(labels).not.toEqual(p.choices)
      const target = labels.indexOf(p.choices[p.items[i].a])
      await page.keyboard.press('Home')
      await expect(page.getByRole('option').first()).toBeFocused()
      for(let n=0;n<target;n++) {
        await page.keyboard.press('ArrowDown')
        await expect(page.getByRole('option').nth(n+1)).toBeFocused()
      }
      await page.keyboard.press('Enter')
      await expect(controls.nth(i)).toContainText(p.choices[p.items[i].a])
      await expect(page.getByRole('listbox')).toHaveCount(0)
      await expect(controls.nth(i)).toBeFocused()
    }
    await page.getByTestId('check-pbq').click()
    await expect(page.getByTestId('feedback')).toContainText(exam.vendor === 'comptia' ? '100% correct' : 'Correct')
    await expect(controls.first()).toBeDisabled()
    // The next matching question must open empty, never inherit Radix state.
    for(let n=0;n<22;n++) {
      if (!(await page.getByTestId('next').count())) break
      await page.getByTestId('next').click()
      if (await page.getByTestId('match-select').count()) {
        for(const control of await page.getByTestId('match-select').all()) await expect(control).toContainText('Choose')
        return
      }
      await page.getByTestId('check-pbq').click()
    }
    throw new Error('No subsequent matching fixture')
  })
}

test('configuration keyboard selections grade correctly and retain complete labels', async ({ page }) => {
  await openLab(page, core2.code)
  const p = core2.pbqs.find(p => p.kind === 'config' && p.title !== 'Windows Defender Firewall: Allow the App')!
  if(p.kind !== 'config') throw new Error('fixture')
  await findQuestion(page, p.title)
  await page.mouse.move(0,0)
  for (const f of p.fields) {
    const control = page.getByRole(f.type === 'toggle' ? 'switch' : f.type === 'text' ? 'textbox' : 'combobox', { name: f.label, exact: true })
    if (f.type === 'select') {
      await control.focus(); await page.keyboard.press('Enter')
      await expect.poll(() => page.evaluate(() => !!document.activeElement?.closest('[role="listbox"]'))).toBe(true)
      await page.keyboard.press('Home')
      await expect(page.getByRole('option').first()).toBeFocused()
      for(let n=0;n<Number(f.answer);n++) {
        await page.keyboard.press('ArrowDown')
        await expect(page.getByRole('option').nth(n+1)).toBeFocused()
      }
      await page.keyboard.press('Enter')
      await expect(control).toContainText(f.options![Number(f.answer)])
      await expect(page.getByRole('listbox')).toHaveCount(0)
      await expect(control).toBeFocused()
    } else if (f.type === 'toggle') {
      if((await control.getAttribute('aria-checked')) !== String(f.answer)) await control.press('Space')
    } else throw new Error('Unexpected text fixture; provide a concrete accepted input')
  }
  await page.getByTestId('check-pbq').click()
  await expect(page.getByTestId('feedback')).toContainText('100% correct')
})

test('hotspot HTML and diagram share selection, limits, wrong penalties and locking', async ({ page }) => {
  await openLab(page, security.code)
  const p = security.pbqs.find(p => p.title === 'Build the Screened Subnet')!
  if(p.kind !== 'hotspot') throw new Error('fixture')
  await findQuestion(page, p.title)
  const max = p.maxSelect ?? p.targets.length
  const wrong = p.nodes.find(n => !p.targets.includes(n.id))!
  const selected = [p.targets[0], wrong.id].slice(0, max)
  for(const id of selected) await page.getByTestId(`hotspot-control-${id}`).press('Space')
  const extra = p.nodes.find(n => !selected.includes(n.id))!
  if(selected.length === max) {
    await page.getByTestId(`hotspot-control-${extra.id}`).click()
    await expect(page.getByTestId(`hotspot-control-${extra.id}`)).toHaveAttribute('aria-pressed','false')
  }
  await page.getByTestId(`hotspot-${selected[0]}`).click()
  await expect(page.getByTestId(`hotspot-control-${selected[0]}`)).toHaveAttribute('aria-pressed','false')
  await page.getByTestId(`hotspot-control-${selected[0]}`).press('Enter')
  await page.getByTestId('check-pbq').click()
  const score = Math.round(Math.max(0, selected.filter(id => p.targets.includes(id)).length - selected.filter(id => !p.targets.includes(id)).length) / p.targets.length * 100)
  await expect(page.getByTestId('feedback')).toContainText(`${score}% correct`)
  await expect(page.getByTestId(`hotspot-control-${wrong.id}`)).toBeDisabled()
})

test('unregistered terminal retains sequential acceptance, generic diagnostics and scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 540 })
  await openLab(page)
  await findQuestion(page, 'First Response at the Command Line')
  const input = page.getByTestId('terminal-input')
  await input.fill('ipconfig'); await input.press('Enter')
  await expect(page.getByRole('log')).toContainText('does not complete the current objective')
  for(const cmd of ['ipconfig /all','ping 192.168.10.1','nslookup comptia.org','tracert 8.8.8.8']) {
    await input.fill(cmd); await input.press('Enter')
  }
  await expect(input).toBeDisabled()
  await page.getByRole('log').focus()
  await page.keyboard.press('Home')
  await page.getByTestId('check-pbq').click()
  await expect(page.getByTestId('feedback')).toContainText('100% correct')
})

test('timed exam: navigation isolation, authoritative reset and no premature grading', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('exam-row').filter({ hasText: core1.code }).click()
  // Deterministically draw the workstation first, with the rest of the bank
  // unchanged. This controls only randomness; no answer/session internals.
  const index = core1.pbqs.findIndex(p => p.title === 'Provision the Sales Workstation')
  await page.evaluate(({ length, index }) => {
    let call = 0
    let seed = 13579
    Math.random = () => {
      call++
      if (call <= length - 1) return call === length - index ? 0 : 0.999999
      seed = (seed * 1664525 + 1013904223) >>> 0
      return seed / 4294967296
    }
  }, { length: core1.pbqs.length, index })
  await page.getByTestId('mode-exam').click()
  await expect(page.getByTestId('qcard')).toContainText('Provision the Sales Workstation')
  await expect(page.getByTestId('check-pbq')).toHaveCount(0)
  await page.getByTestId('item-vga').click()
  await page.getByTestId('port-zvga').click()
  await page.getByTestId('item-rj45').click()
  await page.getByTestId('next').click()
  await expect(page.getByTestId('dragconnect-ghost')).toHaveCount(0)
  await page.getByRole('button', { name:'Previous', exact:true }).click()
  await expect(page.getByTestId('zone-zvga')).toHaveAccessibleName(/contains Analog monitor cable/)
  await expect(page.getByTestId('item-rj45')).toHaveAttribute('aria-pressed','false')
  await page.getByTestId('dragconnect-reset').click()
  await page.getByTestId('next').click()
  await page.getByRole('button', { name:'Previous', exact:true }).click()
  await expect(page.getByTestId('zone-zvga')).toHaveAccessibleName(/empty/)
  await expect(page.getByTestId('dragconnect-status')).toHaveText('0 of 4 ports connected.')
  await page.getByRole('button', { name:'End exam & score', exact:true }).click()
  await page.getByTestId('confirm-end').click()
  await expect(page.getByTestId('score-hero')).toBeVisible()
  await expect(page.getByText('Provision the Sales Workstation', {exact:true}).locator('..')).toContainText('PBQ 0%')
})

test('practice drill still contains MC questions rather than PBQ changes', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('exam-row').filter({hasText:core1.code}).click()
  await page.getByTestId('mode-drill').click()
  await page.getByTestId('start-drill').click()
  await expect(page.getByTestId('qtext')).toBeVisible()
  await expect(page.getByTestId('option').first()).toBeVisible()
  await expect(page.getByTestId('dragconnect')).toHaveCount(0)
})

test('ordering arrow keyboard alternative reaches the same correct positional answer; boundary moves are safe', async ({ page }) => {
  await openLab(page)
  const p = core1.pbqs.find(p => p.kind === 'order')!
  if(p.kind !== 'order') throw new Error('fixture')
  await findQuestion(page, p.title)
  const first = await page.getByTestId('order-row').first().textContent()
  await page.getByRole('button', { name:/^Move up:/ }).first().press('Enter')
  expect(await page.getByTestId('order-row').first().textContent()).toBe(first)
  for(let target=0;target<p.steps.length;target++) {
    for(let n=0;n<p.steps.length;n++) {
      const row = page.getByTestId('order-row').filter({hasText:p.steps[target]})
      const position = await row.evaluate(e => [...e.parentElement!.children].indexOf(e))
      if(position === target) break
      await row.getByRole('button', {name:`Move up: ${p.steps[target]}`,exact:true}).press('Enter')
    }
  }
  await page.getByRole('button', {name:/^Move down:/}).last().press('Enter')
  await page.getByTestId('check-pbq').click()
  await expect(page.getByTestId('feedback')).toContainText('100% correct')
})

test('mobile touch selects, replaces and resets through external controls without overflow', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ viewport:{width:320,height:740}, hasTouch:true, reducedMotion:'reduce' })
  const page = await context.newPage()
  await page.route('**/*', r => ['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname) ? r.continue() : r.abort())
  // Explicit origin because this independently created context has no baseURL.
  await page.goto(baseURL!)
  await page.getByTestId('exam-row').filter({hasText:core1.code}).tap()
  await page.getByTestId('mode-pbq').tap()
  await findQuestion(page,'Provision the Sales Workstation')
  await page.getByTestId('item-vga').tap()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
  await page.getByTestId('port-zvga').tap()
  await expect(page.getByTestId('zone-zvga')).toHaveAccessibleName(/contains Analog monitor cable/)
  await page.getByTestId('item-hdmi').tap()
  await page.getByTestId('port-zvga').tap()
  await expect(page.getByTestId('zone-zvga')).toHaveAccessibleName(/contains HDMI cable/)
  await page.getByTestId('dragconnect-reset').tap()
  await page.getByTestId('check-pbq').tap()
  await expect(page.getByTestId('feedback')).toContainText('0% correct')
  await context.close()
})
