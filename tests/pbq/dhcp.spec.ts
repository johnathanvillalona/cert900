import { test, expect, type Page } from '@playwright/test'
import { exam as core1 } from '../../src/data/220-1201'
import { openLab, findQuestion, settled } from './helpers'

const title = 'Fix a Stale DHCP Lease'
async function command(page: Page, text: string, run = false) {
  const input = page.getByTestId('terminal-input')
  await input.fill(text)
  if (run) await page.getByTestId('terminal-run').click()
  else await input.press('Enter')
  await expect(input).toHaveValue('')
}
async function pilot(page: Page) {
  await openLab(page)
  await findQuestion(page, title)
  await expect(page.getByTestId('command-prompt-workspace')).toBeVisible()
}
test.beforeEach(async ({ page }) => {
  await page.route('**/*', r => ['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname) ? r.continue() : r.abort())
})

for (const cancel of [false,true]) {
  test(`scenario loading precedes the timer; cancellation=${cancel}`, async ({ page }) => {
    let requested=false
    let release!:()=>void
    const gate=new Promise<void>(resolve=>{release=resolve})
    await page.route('**/assets/DhcpWorkspace-*.js',async route=>{
      requested=true
      await gate
      await route.continue()
    })
    await page.goto('/')
    await page.getByTestId('exam-row').filter({hasText:core1.code}).click()
    await page.getByTestId('mode-exam').click()
    try {
      await expect.poll(()=>requested).toBe(true)
      await expect(page.getByTestId('simulation-loading')).toContainText('timer has not started')
      await expect(page.getByTestId('timer')).toHaveCount(0)
      await expect(page.getByTestId('qcard')).toHaveCount(0)
      if(cancel) await page.getByRole('button',{name:'Back to exam selection'}).click()
    } finally {release()}
    if(cancel) {
      await expect(page.getByTestId('mode-pbq')).toBeVisible()
      await expect(page.getByTestId('timer')).toHaveCount(0)
    } else {
      await expect(page.getByTestId('qcard')).toBeVisible()
      await expect(page.getByTestId('timer')).toBeVisible()
    }
  })
}

test('stateful diagnostics, recall, cls, authoritative reset and post-grade locking', async ({ page }) => {
  await pilot(page)
  const input = page.getByTestId('terminal-input')
  const log = page.getByRole('log')
  await command(page, 'ipconfig /all', true)
  await expect(log).toContainText('169.254.42.17')
  await expect(log).toContainText('CERT900-LT01')
  await expect(page.getByTestId('simulation-objectives')).toHaveCount(0)
  await expect(page.getByTestId('command-prompt-workspace')).not.toContainText('Not met')
  await command(page, 'whoami')
  await expect(log).toContainText('Simulator limitation')
  await input.fill('unfinished draft')
  await input.press('ArrowUp'); await expect(input).toHaveValue('whoami')
  await input.press('ArrowUp'); await expect(input).toHaveValue('ipconfig /all')
  await input.press('ArrowDown'); await expect(input).toHaveValue('whoami')
  await input.press('ArrowDown'); await expect(input).toHaveValue('unfinished draft')
  for (const text of ['IPCONFIG.EXE /RELEASE "Ethernet0"','ipconfig /renew Ether*','ipconfig /flushdns']) await command(page, text)
  await command(page, 'ping inventory.office.test')
  await expect(log).toContainText('192.168.10.20')
  await command(page, 'cls')
  await expect(page.getByTestId('console-entry')).toHaveCount(0)
  await expect(log).not.toContainText('Cert900 Virtual Workstation')
  await input.press('ArrowUp'); await expect(input).toHaveValue('cls')
  await input.press('ArrowUp'); await expect(input).toHaveValue('ping inventory.office.test')
  await command(page, 'ipconfig')
  await expect(log).toContainText('192.168.10.87')
  await page.getByTestId('simulation-reset').click()
  await expect(page.getByTestId('console-entry')).toHaveCount(0)
  await expect(log).toContainText('Cert900 Virtual Workstation')
  await input.press('ArrowUp'); await expect(input).toHaveValue('')
  await input.fill('unsent'); await page.getByTestId('simulation-reset').click()
  await expect(input).toHaveValue('')
  await command(page, 'ipconfig')
  await expect(log).toContainText('169.254.42.17')
  await page.getByTestId('check-pbq').click()
  await expect(page.getByTestId('feedback')).toContainText('0% correct')
  await expect(input).toBeDisabled()
  await expect(page.getByTestId('simulation-reset')).toBeDisabled()
})

for (const [commands, percent] of [
  [['ipconfig /renew','ipconfig /flushdns'],0],
  [['ipconfig /release'],33],
  [['ipconfig /release','ipconfig /renew'],67],
  [['ipconfig /release','ipconfig /renew','ipconfig /flushdns','ping inventory.office.test','ipconfig /displaydns'],100],
] as const) {
  test(`approved objective grading ${percent}% through actual commands`, async ({ page }) => {
    await pilot(page)
    for(const text of commands) await command(page,text)
    await page.getByTestId('check-pbq').click()
    await expect(page.getByTestId('feedback')).toContainText(`${percent}% correct`)
    await expect(page.getByTestId('terminal-input')).toBeDisabled()
  })
}

test('exam navigation preserves transcript and system; reset and stale draft stay isolated', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('exam-row').filter({hasText:core1.code}).click()
  const index=core1.pbqs.findIndex(p=>p.title===title)
  await page.evaluate(({length,index})=>{
    let call=0,seed=13579
    Math.random=()=>{
      if(++call<=length-1) return call===length-index?0:0.999999
      seed=(seed*1664525+1013904223)>>>0
      return seed/4294967296
    }
  },{length:core1.pbqs.length,index})
  await page.getByTestId('mode-exam').click()
  await expect(page.getByTestId('qcard')).toContainText(title)
  await expect(page.getByTestId('check-pbq')).toHaveCount(0)
  for(const text of ['ipconfig /release','ipconfig /renew','ipconfig /flushdns']) await command(page,text)
  await page.getByTestId('terminal-input').fill('unsubmitted command')
  await page.getByTestId('next').click()
  await expect(page.getByTestId('command-prompt-workspace')).toHaveCount(0)
  await page.getByRole('button',{name:'Previous',exact:true}).click()
  await expect(page.getByTestId('console-entry')).toHaveCount(3)
  await expect(page.getByTestId('terminal-input')).toHaveValue('')
  await command(page,'ipconfig')
  await expect(page.getByRole('log')).toContainText('192.168.10.87')
  await page.getByRole('log').focus()
  await page.keyboard.press('ArrowRight')
  await expect(page.getByTestId('qcard')).toContainText(title)
  await page.keyboard.press('ArrowLeft')
  await expect(page.getByTestId('qcard')).toContainText(title)
  await expect(page.getByTestId('simulation-objectives')).toHaveCount(0)
  await page.getByTestId('simulation-reset').click()
  await page.getByTestId('next').click()
  await page.getByRole('button',{name:'Previous',exact:true}).click()
  await expect(page.getByTestId('console-entry')).toHaveCount(0)
  await command(page,'ipconfig')
  await expect(page.getByRole('log')).toContainText('169.254.42.17')
  await page.getByRole('button',{name:'End exam & score',exact:true}).click()
  await page.getByTestId('confirm-end').click()
  await expect(page.getByTestId('score-hero')).toBeVisible()
  await expect(page.getByText(title,{exact:true}).locator('..')).toContainText('PBQ 0%')
})

test('five responsive widths: readable console, touch targets, output scrolling and screenshots', async ({ page }) => {
  const errors:string[]=[]
  page.on('pageerror',e=>errors.push(e.message))
  page.on('console',e=>{if(e.type()==='error') errors.push(e.text())})
  await pilot(page)
  await command(page,'ipconfig /all')
  for(const width of [320,375,390,768,1440]) {
    await page.setViewportSize({width,height:900})
    await settled(page)
    const toggle=page.getByTestId('simulation-panel-toggle')
    if(width<1024) {
      await expect(toggle).toBeVisible()
      await toggle.click()
      await expect(page.getByText('Adapter evidence',{exact:true})).toBeVisible()
      await toggle.click()
    }
    for(const theme of ['light','dark']) {
      await page.evaluate(t=>document.documentElement.classList.toggle('dark',t==='dark'),theme)
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth)).toBe(true)
      const input=page.getByTestId('terminal-input')
      expect(await input.evaluate(e=>parseFloat(getComputedStyle(e).fontSize))).toBeGreaterThanOrEqual(16)
      for(const id of ['terminal-run','simulation-reset']) expect((await page.getByTestId(id).boundingBox())!.height).toBeGreaterThanOrEqual(44)
      const log=page.getByRole('log')
      await log.focus(); await log.press('Home')
      if(width<768) expect(await log.evaluate(e=>e.scrollWidth>e.clientWidth)).toBe(true)
      await page.getByTestId('command-prompt-workspace').screenshot({path:`/tmp/cert900-b2-${width}-${theme}.png`,animations:'disabled',style:'header { visibility: hidden !important; }'})
    }
  }
  // Approximate keyboard-constrained layout. Actual device keyboard remains a manual check.
  await page.setViewportSize({width:375,height:360})
  await page.getByTestId('terminal-input').focus()
  await page.evaluate(()=>window.visualViewport?.dispatchEvent(new Event('resize')))
  await expect.poll(async()=>{
    const b=(await page.getByTestId('terminal-input').boundingBox())!
    return b.y>=0 && b.y+b.height<=360
  }).toBe(true)
  await command(page,'help',true)
  await expect(page.getByRole('log')).toContainText('IPCONFIG')
  expect(errors).toEqual([])
})

test('touch keyboard alternative uses Run and Reset at 320px', async ({ browser,baseURL }) => {
  const context=await browser.newContext({baseURL,viewport:{width:320,height:740},hasTouch:true,reducedMotion:'reduce'})
  const page=await context.newPage()
  await page.route('**/*',r=>['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname)?r.continue():r.abort())
  await pilot(page)
  await page.getByTestId('simulation-panel-toggle').tap()
  await expect(page.getByText('Work order',{exact:true})).toBeVisible()
  await page.getByTestId('terminal-input').fill('ipconfig /all')
  await page.getByTestId('terminal-run').tap()
  await expect(page.getByRole('log')).toContainText('169.254.42.17')
  await page.getByTestId('simulation-reset').tap()
  await expect(page.getByTestId('console-entry')).toHaveCount(0)
  expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBe(320)
  await context.close()
})
