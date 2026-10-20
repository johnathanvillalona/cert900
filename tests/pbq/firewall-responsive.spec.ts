import {test,expect} from '@playwright/test'
import {addRule,fillRule,openAcl,sshRule,traffic,webRule} from './firewall-helpers'
import {settled} from './helpers'
import {fileURLToPath} from 'node:url'
const shotStyle='header:not([data-testid="firewall-banner"]) { visibility: hidden !important; }'
const stylePath=fileURLToPath(new URL('./firewall-screenshot.css',import.meta.url))
for(const width of [320,375,390,768,1440]) {
  test.describe(`ACL complete workflow at ${width}px`,()=>{
    test.use({viewport:{width,height:900},hasTouch:width<768,reducedMotion:'reduce'})
    test('read, configure, inspect traffic, edit, cancel, grade and review in both themes',async({page})=>{
      const errors:string[]=[]
      page.on('pageerror',e=>errors.push(e.message))
      page.on('console',e=>{if(e.type()==='error')errors.push(e.text())})
      await page.route('**/*',r=>['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname)?r.continue():r.abort())
      await openAcl(page)
      const toggle=page.getByTestId('firewall-work-order-toggle')
      if(width<1024) {
        await toggle.click()
        await expect(page.getByText('Management network',{exact:true})).toBeVisible()
        await expect(page.getByText('10.20.30.0/24',{exact:true})).toBeVisible()
        expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth)).toBe(true)
        await page.getByTestId('firewall-workspace').screenshot({path:`/tmp/cert900-b3a-work-order-${width}.png`,style:shotStyle})
        await toggle.click()
      }
      const longName='Warehouse inventory public access policy with a deliberately descriptive name'
      await addRule(page,{...webRule,name:longName})
      await addRule(page,sshRule)
      await settled(page)
      for(const theme of ['light','dark']) {
        await page.evaluate(t=>document.documentElement.classList.toggle('dark',t==='dark'),theme)
        expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth)).toBe(true)
        if(width<1024) {
          await expect(page.getByTestId('acl-rule-card')).toHaveCount(2)
          await expect(page.getByRole('table',{name:'Ordered inbound firewall rules'})).toHaveCount(0)
        } else await expect(page.getByRole('table',{name:'Ordered inbound firewall rules'})).toBeVisible()
        const workspace=page.getByTestId('firewall-workspace')
        for(const button of await workspace.getByRole('button').all()) {
          const box=await button.boundingBox()
          if(box) {expect(box.height).toBeGreaterThanOrEqual(44);expect(box.width).toBeGreaterThanOrEqual(44)}
        }
        await expect(workspace).toHaveScreenshot(`acl-policy-${width}-${theme}.png`,{animations:'disabled',stylePath})
        await page.getByRole('button',{name:`Edit rule: ${longName}`,exact:true}).click()
        await fillRule(page,{destination:'255.255.255.255/32',ports:'65536'})
        await page.getByTestId('acl-apply-rule').click()
        await expect(page.getByRole('alert')).toContainText('Rule not applied')
        const input=page.getByLabel('Destination ports',{exact:true})
        expect(await input.evaluate(e=>parseFloat(getComputedStyle(e).fontSize))).toBeGreaterThanOrEqual(16)
        await expect(input).toBeFocused()
        expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth)).toBe(true)
        await expect(page.getByTestId('acl-rule-editor')).toHaveScreenshot(`acl-editor-${width}-${theme}.png`,{animations:'disabled'})
        await page.getByRole('button',{name:'Cancel',exact:true}).click()
        await expect(await traffic(page)).toContainText('Allow')
        await expect(page.getByTestId('firewall-workspace')).toHaveScreenshot(`acl-traffic-${width}-${theme}.png`,{animations:'disabled',stylePath})
        await page.getByTestId('firewall-nav-policy').click()
      }
      // Small visible viewport approximates a virtual keyboard, without claiming a physical-device result.
      if(width<768) {
        await page.setViewportSize({width,height:400})
        await page.getByRole('button',{name:'Edit rule: Management SSH',exact:true}).click()
        const input=page.getByLabel('Destination ports',{exact:true})
        await input.focus();await input.scrollIntoViewIfNeeded()
        const box=(await input.boundingBox())!
        expect(box.y).toBeGreaterThanOrEqual(0);expect(box.y+box.height).toBeLessThanOrEqual(400)
        await page.getByRole('button',{name:'Cancel',exact:true}).click()
        await page.setViewportSize({width,height:900})
      }
      await page.getByTestId('check-pbq').click()
      await expect(page.getByTestId('feedback')).toContainText('100% correct')
      await expect(page.getByTestId('acl-graded-review')).toContainText('Policy meets the work order')
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth)).toBe(true)
      expect(errors).toEqual([])
    })
  })
}
test('320px touch can add, apply, move, test, delete and reset',async({browser,baseURL})=>{
  const context=await browser.newContext({baseURL,viewport:{width:320,height:740},hasTouch:true,reducedMotion:'reduce'})
  const page=await context.newPage()
  await page.route('**/*',r=>['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname)?r.continue():r.abort())
  await openAcl(page)
  await page.getByTestId('acl-add-rule').tap();await fillRule(page,webRule);await page.getByTestId('acl-apply-rule').tap()
  await page.getByTestId('acl-add-rule').tap();await fillRule(page,sshRule);await page.getByTestId('acl-apply-rule').tap()
  await page.getByRole('button',{name:'Move up: Management SSH',exact:true}).tap()
  await expect(page.getByTestId('acl-rule-card').first()).toContainText('Management SSH')
  await expect(await traffic(page)).toContainText('Allow')
  await page.getByTestId('firewall-nav-policy').tap()
  await page.getByRole('button',{name:'Delete rule: Public HTTPS',exact:true}).tap()
  await page.getByTestId('acl-confirm-delete').tap()
  await expect(page.getByTestId('acl-rule-card')).toHaveCount(1)
  await page.getByTestId('acl-reset').tap()
  await expect(page.getByTestId('acl-empty')).toBeVisible()
  await page.getByTestId('check-pbq').tap()
  await expect(page.getByTestId('feedback')).toContainText('0% correct')
  await context.close()
})
