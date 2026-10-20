import {test,expect} from '@playwright/test'
import {exam} from '../../src/data/220-1202'
import {addWindows,fillWindows,openWindows,windowsTitle,windowsTraffic,type WindowsValues} from './windows-helpers'
test.beforeEach(async({page})=>{await page.route('**/*',r=>['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname)?r.continue():r.abort())})
for(const [name,rules,percent,diagnosis]of [
  ['empty',[],0,'Incomplete configuration'],
  ['program exception',[{}],100,'Policy meets the work order'],
  ['split equivalent rules',[{private:false},{name:'Private exception',domain:false}],100,'Policy meets the work order'],
  ['Domain only',[{private:false}],67,'Incomplete configuration'],
  ['Public exposed',[{public:true}],67,'Insecure configuration'],
  ['all programs',[{application:'any'}],0,'Insecure configuration'],
  ['conflicting Domain Block',[{},{name:'Domain block',action:'block',private:false}],67,'Incomplete configuration'],
  ['raw port exposure',[{},{name:'Raw port',kind:'port',protocol:'udp',localPorts:'65535',remotePorts:'65535'}],0,'Insecure configuration'],
  ['masked raw port violation',[{},{name:'Public port',kind:'port',protocol:'udp',domain:false,private:false,public:true,localPorts:'53'},{name:'Public block',kind:'port',protocol:'udp',action:'block',domain:false,private:false,public:true,localPorts:'53'}],67,'Insecure configuration'],
  ['outbound only',[{direction:'outbound'}],0,'Incomplete configuration'],
] as [string,WindowsValues[],number,string][]){test(`Windows grading: ${name}`,async({page})=>{await openWindows(page);for(const rule of rules)await addWindows(page,rule);await expect(page.getByTestId('windows-graded-review')).toHaveCount(0);await page.getByTestId('check-pbq').click();await expect(page.getByTestId('feedback')).toContainText(`${percent}% correct`);await expect(page.getByTestId('windows-graded-review')).toContainText(diagnosis);await expect(page.getByTestId('windows-reset')).toBeDisabled();await page.getByTestId('firewall-nav-inbound').click();await expect(page.getByTestId('windows-add-rule')).toBeDisabled()})}
test('Windows traffic uses Block precedence, profiles, application identity, defaults and retained revisions',async({page})=>{
  await openWindows(page);await addWindows(page)
  await expect(await windowsTraffic(page)).toContainText('Allow')
  await expect(await windowsTraffic(page,{profile:'private',protocol:'udp',localPort:'65535',remotePort:'0'})).toContainText('Allow')
  await expect(await windowsTraffic(page,{profile:'public'})).toContainText('Block')
  await expect(await windowsTraffic(page,{application:'other'})).toContainText('Block')
  await expect(await windowsTraffic(page,{direction:'outbound',application:'other'})).toContainText('Profile default')
  await addWindows(page,{name:'Conflicting block',action:'block',private:false})
  await expect(await windowsTraffic(page)).toContainText('Explicit Block takes precedence')
  await page.getByTestId('firewall-nav-inbound').click();await page.getByRole('switch',{name:'Enable rule: Conflicting block',exact:true}).click()
  await expect(await windowsTraffic(page)).toContainText('Allow')
  await expect(page.getByTestId('windows-traffic-history')).toContainText('Earlier policy')
  await page.getByTestId('check-pbq').click();await expect(page.getByTestId('feedback')).toContainText('100% correct')
})
test('Windows draft validation, cancel, escaped names, editing, deletion and reset are functional',async({page})=>{
  await openWindows(page);await page.getByTestId('firewall-nav-inbound').click();await page.getByTestId('windows-add-rule').click();await page.getByTestId('windows-apply-rule').click()
  await expect(page.getByRole('alert')).toContainText('Rule not applied');await expect(page.getByLabel('Rule name',{exact:true})).toBeFocused()
  await fillWindows(page,{name:'<img src=x onerror=alert(1)>',application:'inventory',domain:false,private:false,public:false});await page.getByTestId('windows-apply-rule').click();await expect(page.getByLabel('Domain profile',{exact:true})).toBeFocused()
  await fillWindows(page,{domain:true,private:true});await page.getByTestId('windows-apply-rule').click()
  await expect(page.getByTestId('windows-rule-collection')).toContainText('<img src=x onerror=alert(1)>');await expect(page.locator('img[src="x"]')).toHaveCount(0)
  await page.getByRole('button',{name:'Edit rule: <img src=x onerror=alert(1)>',exact:true}).click();await fillWindows(page,{kind:'port',protocol:'tcp',localPorts:'65536'});await page.getByTestId('windows-apply-rule').click();await expect(page.getByLabel('Local ports',{exact:true})).toBeFocused();await page.keyboard.press('Escape');await expect(page.getByTestId('windows-rule-editor')).toHaveCount(0)
  await expect(await windowsTraffic(page)).toContainText('Allow')
  await page.getByTestId('firewall-nav-inbound').click();await page.getByRole('button',{name:'Delete rule: <img src=x onerror=alert(1)>',exact:true}).click();await page.getByRole('button',{name:'Cancel',exact:true}).click();await expect(page.getByRole('switch')).toHaveCount(1)
  await page.getByRole('button',{name:'Delete rule: <img src=x onerror=alert(1)>',exact:true}).click();await page.getByTestId('windows-confirm-delete').click();await expect(page.getByRole('switch')).toHaveCount(0)
  await addWindows(page);await page.getByTestId('windows-add-rule').click();await fillWindows(page,{name:'Pending'});await page.getByTestId('rule-editor-reset').click();await expect(page.getByTestId('windows-overview')).toBeVisible();await page.getByTestId('firewall-nav-traffic').click();await expect(page.getByTestId('windows-traffic-history')).toContainText('No tests yet');await page.getByTestId('check-pbq').click();await expect(page.getByTestId('feedback')).toContainText('0% correct')
})
test('Windows keyboard-only rule creation, focus return and disabled broad rule preserve full credit',async({page})=>{
  await openWindows(page);await page.getByTestId('firewall-nav-inbound').focus();await page.keyboard.press('Enter');await page.getByTestId('windows-add-rule').focus();await page.keyboard.press('Enter')
  await expect(page.getByLabel('Rule name',{exact:true})).toBeFocused();await page.keyboard.type('Keyboard exception');await page.keyboard.press('Tab');await expect(page.getByLabel('Rule type',{exact:true})).toBeFocused();await page.keyboard.press('Tab');await expect(page.getByLabel('Direction',{exact:true})).toBeFocused();await page.keyboard.press('Tab');await page.keyboard.press('Home');await page.keyboard.press('ArrowDown');await page.keyboard.press('Tab');await expect(page.getByLabel('Action',{exact:true})).toBeFocused();await page.keyboard.press('Tab');await page.keyboard.press('Tab');await page.keyboard.press('Tab');await expect(page.getByLabel('Public profile',{exact:true})).toBeFocused();await page.keyboard.press('Space');await page.keyboard.press('Tab');await page.keyboard.press('Tab');await page.keyboard.press('Tab');await expect(page.getByTestId('windows-apply-rule')).toBeFocused();await page.keyboard.press('Enter');await expect(page.getByTestId('windows-add-rule')).toBeFocused()
  await addWindows(page,{name:'Disabled broad',application:'any'});await page.getByRole('switch',{name:'Enable rule: Disabled broad',exact:true}).press('Space');await page.getByTestId('check-pbq').click();await expect(page.getByTestId('feedback')).toContainText('100% correct')
})
test('Windows predefined template, local/remote ports and maximum rule limit remain bounded',async({page})=>{
  await openWindows(page);await addWindows(page,{name:'Remote Desktop',kind:'predefined',application:undefined})
  await expect(await windowsTraffic(page,{application:'rdp',localPort:'3389'})).toContainText('Allow');await expect(await windowsTraffic(page,{application:'inventory',localPort:'3389'})).toContainText('Block')
  for(let i=0;i<11;i++)await addWindows(page,{name:`Rule ${i}`})
  await expect(page.getByTestId('windows-add-rule')).toBeDisabled();await expect(page.getByTestId('windows-default-policy')).toContainText('Read-only');await expect(page.getByRole('button',{name:/Move (up|down)/})).toHaveCount(0)
})
test('Windows exam retains rules, draft and traffic across navigation; reset changes authoritative final grade',async({page})=>{
  await page.goto('/');await page.getByTestId('exam-row').filter({hasText:exam.code}).click()
  await page.evaluate(({length,index})=>{let call=0,seed=13579;Math.random=()=>{if(++call<=length-1)return call===length-index?0:0.999999;seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}},{length:exam.pbqs.length,index:exam.pbqs.findIndex(p=>p.title===windowsTitle)})
  await page.getByTestId('mode-exam').click();await expect(page.getByTestId('qcard')).toContainText(windowsTitle);await expect(page.getByTestId('check-pbq')).toHaveCount(0)
  await addWindows(page);await windowsTraffic(page);await page.getByTestId('next').click();await expect(page.getByTestId('windows-rule-editor')).toHaveCount(0);await page.getByRole('button',{name:'Previous',exact:true}).click();await page.getByTestId('firewall-nav-traffic').click();await expect(page.getByTestId('windows-traffic-history')).toContainText('Test 1')
  await page.getByTestId('firewall-nav-inbound').click();await page.getByTestId('windows-add-rule').click();await fillWindows(page,{name:'Pending navigation'});await page.keyboard.press('Escape')
  await page.getByTestId('windows-reset').click();await page.getByTestId('next').click();await page.getByRole('button',{name:'Previous',exact:true}).click();await expect(page.getByTestId('windows-status')).toContainText('0 enabled rules');await page.getByRole('button',{name:'End exam & score',exact:true}).click();await page.getByTestId('confirm-end').click();await expect(page.getByText(windowsTitle,{exact:true}).locator('..')).toContainText('PBQ 0%')
})
test('Windows module failure prevents timer/session start and retains safe navigation',async({page})=>{
  await page.addInitScript(()=>sessionStorage.setItem('chunk-reload-at',String(Date.now())))
  await page.route('**/assets/WindowsFirewallWorkspace-*.js',r=>r.abort())
  await page.goto('/');await page.getByTestId('exam-row').filter({hasText:exam.code}).click();await page.getByTestId('mode-exam').click()
  await expect(page.getByTestId('simulation-loading').getByRole('alert')).toContainText('could not be loaded');await expect(page.getByTestId('timer')).toHaveCount(0);await expect(page.getByTestId('qcard')).toHaveCount(0)
  await page.getByRole('button',{name:'Retry',exact:true}).click();await expect(page.getByTestId('simulation-loading').getByRole('alert')).toBeVisible();await page.getByRole('button',{name:'Back to exam selection',exact:true}).click();await expect(page.getByTestId('mode-pbq')).toBeVisible()
})
