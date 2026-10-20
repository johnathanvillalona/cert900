import { test,expect } from '@playwright/test'
test('ACL Apply and repeated grading in one event use committed rules and notify once',async({page})=>{
  await page.route('**/*',r=>['127.0.0.1','localhost'].includes(new URL(r.request().url()).hostname)?r.continue():r.abort())
  await page.goto('/tests/simulations/acl-session.html')
  await expect(page.getByTestId('acl-snapshot')).toContainText('editingId')
  await page.getByRole('button',{name:'Apply and grade twice'}).click()
  const snapshot=()=>page.getByTestId('acl-snapshot').evaluate(e=>JSON.parse(e.textContent!))
  await expect.poll(async()=>(await snapshot()).events).toEqual([2/3])
  expect((await snapshot()).graded).toBe(2/3)
  await page.getByRole('button',{name:'Reset',exact:true}).click()
  await page.getByRole('button',{name:'Apply and grade twice'}).click()
  expect((await snapshot()).answer.state.rules).toHaveLength(1)
  expect((await snapshot()).events).toEqual([2/3])
})
