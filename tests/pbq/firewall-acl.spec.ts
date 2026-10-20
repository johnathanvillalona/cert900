import {test,expect} from '@playwright/test'
import {exam} from '../../src/data/n10-009'
import {addRule,fillRule,openAcl,sshRule,traffic,webRule,type Form} from './firewall-helpers'
test.beforeEach(async({page})=>{
  await page.route('**/*',r=>['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname)?r.continue():r.abort())
})

test('draft validation, Cancel, normalized selectors, escaped names and keyboard focus',async({page})=>{
  await openAcl(page)
  await expect(page.getByTestId('acl-graded-review')).toHaveCount(0)
  await page.getByTestId('acl-add-rule').focus();await page.keyboard.press('Enter')
  await expect(page.getByLabel('Rule name',{exact:true})).toBeFocused()
  await page.getByTestId('acl-apply-rule').click()
  await expect(page.getByRole('alert')).toContainText('Rule not applied')
  await expect(page.getByLabel('Rule name',{exact:true})).toBeFocused()
  await fillRule(page,{name:'draft',source:'::1',ports:'65536'})
  await page.getByTestId('acl-apply-rule').click()
  await expect(page.getByLabel('Source address',{exact:true})).toBeFocused()
  await page.getByRole('button',{name:'Cancel',exact:true}).click()
  await expect(page.getByTestId('acl-add-rule')).toBeFocused()
  await expect(page.getByTestId('acl-empty')).toBeVisible()
  await page.getByTestId('acl-add-rule').click()
  const name='<img src=x onerror=alert(1)> inventory policy'
  await fillRule(page,{...webRule,name,source:'10.20.30.42/24'})
  await expect(page.getByText('Will apply as 10.20.30.0/24.')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByTestId('acl-empty')).toBeVisible()
  await addRule(page,{name,source:'10.20.30.42/24'})
  await expect(page.getByTestId('rule-collection')).toContainText(name)
  await expect(page.locator('img[src="x"]')).toHaveCount(0)
  await expect(page.getByTestId('rule-collection')).toContainText('10.20.30.0/24')
  await page.getByRole('button',{name:`Edit rule: ${name}`,exact:true}).click()
  await fillRule(page,{destination:'Any',ports:'Any'})
  await page.getByRole('button',{name:'Cancel',exact:true}).click()
  const result=await traffic(page,{source:'10.20.30.44'})
  await expect(result).toContainText('Allow')
  await expect(result).toContainText('First matching rule: ID 1')
})

for(const [label,rules,percent,diagnosis] of [
  ['empty',[],0,'Incomplete configuration'],
  ['HTTPS only',[webRule],67,'Incomplete configuration'],
  ['SSH only',[sshRule],67,'Incomplete configuration'],
  ['equivalent reversed policy',[sshRule,webRule],100,'Policy meets the work order'],
  ['allow everything',[{...webRule,destination:'Any',protocol:'any',ports:'Any'}],0,'Insecure configuration'],
  ['extra UDP exposure',[webRule,sshRule,{...webRule,name:'DNS opening',destination:'Any',protocol:'udp',ports:'53'}],67,'Insecure configuration'],
  ['public SSH',[webRule,{...sshRule,source:'Any'}],33,'Insecure configuration'],
  ['missing SSH and extra UDP',[webRule,{...webRule,name:'Unwanted UDP',destination:'Any',protocol:'udp',ports:'53'}],33,'Incomplete and insecure'],
  ['shadowed required rules',[{...webRule,name:'Stop all',protocol:'any',ports:'Any',destination:'Any',action:'deny'},webRule,sshRule],0,'Incomplete configuration'],
] as [string,Form[],number,string][]) {
  test(`applied policy grading: ${label}`,async({page})=>{
    await openAcl(page)
    for(const rule of rules)await addRule(page,rule)
    await expect(page.getByTestId('acl-graded-review')).toHaveCount(0)
    await page.getByTestId('check-pbq').click()
    await expect(page.getByTestId('feedback')).toContainText(`${percent}% correct`)
    await expect(page.getByTestId('acl-graded-review')).toContainText(diagnosis)
    await expect(page.getByTestId('acl-add-rule')).toBeDisabled()
    await expect(page.getByTestId('acl-reset')).toBeDisabled()
    await page.getByTestId('firewall-nav-traffic').click()
    await expect(page.getByTestId('acl-test-traffic')).toBeDisabled()
  })
}

test('rule priority, disable/enable, editing, delete confirmation and revisioned traffic decisions',async({page})=>{
  await openAcl(page)
  await addRule(page,webRule);await addRule(page,sshRule)
  await addRule(page,{name:'Catch-all deny',destination:'Any',protocol:'any',ports:'Any',action:'deny'})
  await expect(await traffic(page)).toContainText('Allow')
  await expect(await traffic(page,{source:'10.20.30.255',destination:'203.0.113.99',port:'22'})).toContainText('Allow')
  await expect(await traffic(page,{protocol:'udp',port:'53'})).toContainText('Deny')
  await page.getByTestId('firewall-nav-policy').click()
  await page.getByRole('button',{name:'Move up: Catch-all deny',exact:true}).press('Enter')
  await page.getByRole('button',{name:'Move up: Catch-all deny',exact:true}).press('Enter')
  await expect(await traffic(page)).toContainText('Deny')
  await page.getByTestId('firewall-nav-policy').click()
  await page.getByRole('button',{name:'Edit rule: Catch-all deny',exact:true}).click()
  await fillRule(page,{protocol:'udp',ports:'53'})
  await page.getByTestId('acl-apply-rule').click()
  await page.getByRole('switch',{name:'Enable rule: Public HTTPS',exact:true}).press('Space')
  await expect(await traffic(page)).toContainText('Deny')
  await page.getByTestId('firewall-nav-policy').click()
  await page.getByRole('switch',{name:'Enable rule: Public HTTPS',exact:true}).press('Space')
  await page.getByRole('button',{name:'Delete rule: Management SSH',exact:true}).click()
  await page.getByRole('dialog').getByRole('button',{name:'Cancel',exact:true}).click()
  await expect(page.getByRole('button',{name:'Delete rule: Management SSH',exact:true})).toBeFocused()
  await page.getByRole('button',{name:'Delete rule: Management SSH',exact:true}).click()
  await page.getByTestId('acl-confirm-delete').click()
  await expect(page.getByTestId('acl-add-rule')).toBeFocused()
  await expect(await traffic(page)).toContainText('Allow')
  await expect(page.getByTestId('traffic-results')).toContainText('Earlier policy')
  await page.getByTestId('check-pbq').click()
  await expect(page.getByTestId('feedback')).toContainText('67% correct')
  await expect(page.getByTestId('acl-graded-review')).toContainText('Incomplete configuration')
})

test('reset from an open editor clears applied rules, draft, traffic and actual grading',async({page})=>{
  await openAcl(page);await addRule(page,webRule);await addRule(page,sshRule)
  await traffic(page)
  await page.getByTestId('firewall-nav-policy').click()
  await page.getByTestId('acl-add-rule').click();await fillRule(page,{name:'unfinished'})
  await page.getByTestId('rule-editor-reset').click()
  await expect(page.getByTestId('acl-rule-editor')).toHaveCount(0)
  await expect(page.getByTestId('acl-empty')).toBeVisible()
  await page.getByTestId('firewall-nav-traffic').click()
  await expect(page.getByTestId('traffic-result')).toHaveCount(0)
  await expect(page.getByLabel('Source IPv4 address',{exact:true})).toHaveValue('')
  await page.getByTestId('check-pbq').click()
  await expect(page.getByTestId('feedback')).toContainText('0% correct')
})

test('exam navigation preserves rules and history, isolates other questions and scores reset state',async({page})=>{
  await page.goto('/')
  await page.getByTestId('exam-row').filter({hasText:exam.code}).click()
  const index=exam.pbqs.findIndex(p=>p.title==='Build the Edge ACL')
  await page.evaluate(({length,index})=>{
    let call=0,seed=13579
    Math.random=()=>{if(++call<=length-1)return call===length-index?0:0.999999;seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}
  },{length:exam.pbqs.length,index})
  await page.getByTestId('mode-exam').click()
  await expect(page.getByTestId('qcard')).toContainText('Build the Edge ACL')
  await expect(page.getByTestId('check-pbq')).toHaveCount(0)
  await addRule(page,webRule);await traffic(page)
  await page.getByTestId('next').click()
  await expect(page.getByTestId('firewall-workspace')).toHaveCount(0)
  await page.getByRole('button',{name:'Previous',exact:true}).click()
  await expect(page.getByRole('button',{name:'Edit rule: Public HTTPS',exact:true})).toBeVisible()
  await page.getByRole('button',{name:'Edit rule: Public HTTPS',exact:true}).focus()
  await page.keyboard.press('ArrowRight')
  await expect(page.getByTestId('qcard')).toContainText('Build the Edge ACL')
  await page.getByTestId('firewall-nav-traffic').click()
  await expect(page.getByTestId('traffic-result')).toHaveCount(1)
  await expect(page.getByTestId('acl-graded-review')).toHaveCount(0)
  await page.getByTestId('acl-reset').click()
  await page.getByTestId('next').click();await page.getByRole('button',{name:'Previous',exact:true}).click()
  await expect(page.getByTestId('acl-empty')).toBeVisible()
  await page.getByRole('button',{name:'End exam & score',exact:true}).click()
  await page.getByTestId('confirm-end').click()
  await expect(page.getByText('Build the Edge ACL',{exact:true}).locator('..')).toContainText('PBQ 0%')
})

test('module failure stays before the timer and can return safely to exam selection',async({page})=>{
  // Preserve the app's existing one-time chunk reload. Exercise the guarded
  // error path that remains after that reload, rather than changing recovery.
  await page.addInitScript(()=>sessionStorage.setItem('chunk-reload-at',String(Date.now())))
  await page.route('**/assets/EdgeAclWorkspace-*.js',r=>r.abort())
  await page.goto('/')
  await page.getByTestId('exam-row').filter({hasText:exam.code}).click()
  await page.getByTestId('mode-exam').click()
  await expect(page.getByTestId('simulation-loading').getByRole('alert')).toContainText('could not be loaded')
  await expect(page.getByTestId('timer')).toHaveCount(0)
  await expect(page.getByTestId('qcard')).toHaveCount(0)
  await page.getByRole('button',{name:'Retry',exact:true}).click()
  await expect(page.getByTestId('simulation-loading').getByRole('alert')).toBeVisible()
  await page.getByRole('button',{name:'Back to exam selection',exact:true}).click()
  await expect(page.getByTestId('mode-pbq')).toBeVisible()
})

test('maximum rules keep edits available, prevent a thirteenth rule and preserve immutable default deny',async({page})=>{
  await openAcl(page)
  for(let i=1;i<=12;i++)await addRule(page,{name:`Audit deny ${i}`,source:`10.${i}.0.0/16`,destination:'Any',protocol:'any',ports:'Any',action:'deny'})
  await expect(page.getByTestId('acl-add-rule')).toBeDisabled()
  await expect(page.getByTestId('rule-collection')).toContainText('12 of 12 rules')
  await expect(page.getByTestId('acl-default-policy').getByRole('button')).toHaveCount(0)
  await page.getByRole('button',{name:'Edit rule: Audit deny 1',exact:true}).click()
  await fillRule(page,{name:'Renamed deny'})
  await page.getByTestId('acl-apply-rule').click()
  await page.getByRole('button',{name:'Delete rule: Audit deny 12',exact:true}).click()
  await page.getByTestId('acl-confirm-delete').click()
  await expect(page.getByTestId('acl-add-rule')).toBeEnabled()
  await page.getByTestId('acl-reset').click()
  await expect(page.getByTestId('acl-default-policy')).toContainText('Deny')
})

test('keyboard-only rule creation and submission retain complete focus alternatives',async({page})=>{
  await openAcl(page)
  await page.getByTestId('acl-add-rule').focus();await page.keyboard.press('Enter')
  await expect(page.getByLabel('Rule name',{exact:true})).toBeFocused()
  await page.keyboard.insertText('Keyboard web rule')
  await page.keyboard.press('Tab');await expect(page.getByLabel('Action',{exact:true})).toBeFocused()
  await page.keyboard.press('Tab');await expect(page.getByLabel('Protocol',{exact:true})).toBeFocused()
  await page.keyboard.press('Tab');await expect(page.getByLabel('Source address',{exact:true})).toBeFocused()
  await page.keyboard.press('Tab');await expect(page.getByLabel('Destination address',{exact:true})).toBeFocused()
  await page.keyboard.press('ControlOrMeta+A');await page.keyboard.insertText('192.0.2.80')
  await page.keyboard.press('Tab');await expect(page.getByLabel('Destination ports',{exact:true})).toBeFocused()
  await page.keyboard.insertText('443')
  await page.keyboard.press('Tab');await expect(page.getByTestId('rule-editor-reset')).toBeFocused()
  await page.keyboard.press('Tab');await expect(page.getByRole('button',{name:'Cancel',exact:true})).toBeFocused()
  await page.keyboard.press('Tab');await expect(page.getByTestId('acl-apply-rule')).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.getByTestId('acl-add-rule')).toBeFocused()
  await page.getByTestId('check-pbq').focus();await page.keyboard.press('Enter')
  await expect(page.getByTestId('feedback')).toContainText('67% correct')
})
