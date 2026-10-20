import {test,expect} from '@playwright/test'
import {fileURLToPath} from 'node:url'
import {openWindows,addWindows,fillWindows,windowsTraffic} from './windows-helpers'
import {settled} from './helpers'
const stylePath=fileURLToPath(new URL('./firewall-screenshot.css',import.meta.url))
for(const width of [320,375,390,768,1440])test.describe(`Windows workflow ${width}px`,()=>{
  test.use({viewport:{width,height:900},hasTouch:width<768,reducedMotion:'reduce'})
  test('configure, edit, inspect and grade in both themes without overflow',async({page})=>{
    const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',e=>{if(e.type()==='error')errors.push(e.text())});await page.route('**/*',r=>['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname)?r.continue():r.abort())
    await openWindows(page)
    if(width<1024){await page.getByTestId('firewall-work-order-toggle').click();await expect(page.getByText('Service request',{exact:true})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth)).toBe(true);await page.getByTestId('firewall-work-order-toggle').click()}
    const name='Warehouse inventory application exception with a deliberately descriptive name'
    await addWindows(page,{name})
    for(const theme of ['light','dark']){
      await page.evaluate(t=>document.documentElement.classList.toggle('dark',t==='dark'),theme);await settled(page)
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth)).toBe(true)
      if(width<1280){await expect(page.getByTestId('windows-rule-card')).toHaveCount(1);await expect(page.getByRole('table',{name:'Windows inbound rules'})).toHaveCount(0)}else await expect(page.getByRole('table',{name:'Windows inbound rules'})).toBeVisible()
      for(const control of await page.getByTestId('firewall-workspace').getByRole('button').all()){const b=await control.boundingBox();if(b){expect(b.width).toBeGreaterThanOrEqual(44);expect(b.height).toBeGreaterThanOrEqual(44)}}
      await expect(page.getByTestId('firewall-workspace')).toHaveScreenshot(`windows-rules-${width}-${theme}.png`,{animations:'disabled',stylePath})
      await page.getByRole('button',{name:`Edit rule: ${name}`,exact:true}).click();await fillWindows(page,{kind:'port',protocol:'udp',localPorts:'65536',remotePorts:'65535'});await page.getByTestId('windows-apply-rule').click();await expect(page.getByLabel('Local ports',{exact:true})).toBeFocused()
      expect(await page.getByLabel('Local ports',{exact:true}).evaluate(e=>parseFloat(getComputedStyle(e).fontSize))).toBeGreaterThanOrEqual(16);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth)).toBe(true)
      await expect(page.getByTestId('windows-rule-editor')).toHaveScreenshot(`windows-editor-${width}-${theme}.png`,{animations:'disabled'})
      await page.getByRole('button',{name:'Cancel',exact:true}).click();await expect(await windowsTraffic(page,{profile:'private',protocol:'udp'})).toContainText('Allow');
      const clippedOptions=await page.getByTestId('windows-traffic').locator('select').evaluateAll(controls=>controls.flatMap(control=>{
        const el=control as HTMLSelectElement,style=getComputedStyle(el),canvas=document.createElement('canvas'),ctx=canvas.getContext('2d')!;ctx.font=style.font;
        const available=el.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight)-20;
        return [...el.options].filter(o=>ctx.measureText(o.text).width>available).map(o=>o.text)
      }));expect(clippedOptions).toEqual([]);
      await expect(page.getByTestId('firewall-workspace')).toHaveScreenshot(`windows-traffic-${width}-${theme}.png`,{animations:'disabled',stylePath});await page.getByTestId('firewall-nav-inbound').click()
    }
    if(width<768){await page.setViewportSize({width,height:400});await page.getByRole('button',{name:`Edit rule: ${name}`,exact:true}).click();const input=page.getByLabel('Rule name',{exact:true});await input.focus();await input.scrollIntoViewIfNeeded();const b=(await input.boundingBox())!;expect(b.y).toBeGreaterThanOrEqual(0);expect(b.y+b.height).toBeLessThanOrEqual(400);await page.getByRole('button',{name:'Cancel',exact:true}).click();await page.setViewportSize({width,height:900})}
    await page.getByTestId('check-pbq').click();await expect(page.getByTestId('feedback')).toContainText('100% correct');expect(errors).toEqual([])
  })
})
test('320px touch creates, inspects, disables, edits, deletes and resets Windows policy',async({browser,baseURL})=>{
  const context=await browser.newContext({baseURL,viewport:{width:320,height:740},hasTouch:true,reducedMotion:'reduce'}),page=await context.newPage();await page.route('**/*',r=>['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname)?r.continue():r.abort())
  await openWindows(page);await page.getByTestId('firewall-nav-inbound').tap();await page.getByTestId('windows-add-rule').tap();await fillWindows(page,{name:'Touch exception',application:'inventory',public:false});await page.getByTestId('windows-apply-rule').tap();await expect(await windowsTraffic(page)).toContainText('Allow');await page.getByTestId('firewall-nav-inbound').tap();await page.getByRole('switch',{name:'Enable rule: Touch exception',exact:true}).tap();await expect(await windowsTraffic(page)).toContainText('Block');await page.getByTestId('firewall-nav-inbound').tap();await page.getByRole('button',{name:'Edit rule: Touch exception',exact:true}).tap();await fillWindows(page,{name:'Renamed touch'});await page.getByTestId('windows-apply-rule').tap();await page.getByRole('button',{name:'Delete rule: Renamed touch',exact:true}).tap();await page.getByTestId('windows-confirm-delete').tap();await page.getByTestId('windows-reset').tap();await page.getByTestId('check-pbq').tap();await expect(page.getByTestId('feedback')).toContainText('0% correct');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth)).toBe(true);await context.close()
})
