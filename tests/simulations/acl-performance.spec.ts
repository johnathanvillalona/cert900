import { test, expect } from '@playwright/test'
test('exact ACL grading stays bounded at 4x CPU throttling',async({page})=>{
  await page.route('**/*',r=>['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname)?r.continue():r.abort())
  const cdp=await page.context().newCDPSession(page)
  await cdp.send('Emulation.setCPUThrottlingRate',{rate:4})
  await page.goto('/tests/simulations/acl-performance.html')
  await page.getByRole('button',{name:'Measure exact grading'}).click()
  await expect(page.locator('#report')).not.toHaveText('')
  const results=JSON.parse((await page.locator('#report').textContent())!) as {name:string;p95:number;max:number;cells:number;ruleVisits:number}[]
  console.log('ACL Chrome 4x CPU performance:',JSON.stringify(results))
  expect(results).toHaveLength(3)
  for(const result of results){expect(result.p95).toBeLessThanOrEqual(750);expect(result.cells).toBeLessThanOrEqual(43740);expect(result.ruleVisits).toBeLessThanOrEqual(524880)}
})
