import { expect, type Page } from '@playwright/test'
import { openLab,findQuestion } from './helpers'
export const webRule={name:'Public HTTPS',source:'Any',destination:'192.0.2.80',protocol:'tcp',ports:'443',action:'allow'}
export const sshRule={name:'Management SSH',source:'10.20.30.0/24',destination:'Any',protocol:'tcp',ports:'22',action:'allow'}
export type Form=typeof webRule
export async function openAcl(page:Page) {
  await openLab(page,'N10-009')
  await findQuestion(page,'Build the Edge ACL')
  await expect(page.getByTestId('firewall-workspace')).toBeVisible()
}
export async function fillRule(page:Page,values:Partial<Form>) {
  const dialog=page.getByTestId('acl-rule-editor')
  const labels={name:'Rule name',source:'Source address',destination:'Destination address',protocol:'Protocol',ports:'Destination ports',action:'Action'}
  for(const field of ['name','action','protocol','source','destination','ports'] as const) {
    if(values[field]===undefined) continue
    const control=dialog.getByLabel(labels[field],{exact:true})
    if(field==='action'||field==='protocol') await control.selectOption(values[field]!)
    else if(await control.isEnabled()) await control.fill(values[field]!)
  }
}
export async function addRule(page:Page,values:Partial<Form>) {
  await page.getByTestId('firewall-nav-policy').click()
  await page.getByTestId('acl-add-rule').click()
  await fillRule(page,{...webRule,...values})
  await page.getByTestId('acl-apply-rule').click()
  await expect(page.getByTestId('acl-rule-editor')).toHaveCount(0)
}
export async function traffic(page:Page,values:{source?:string;destination?:string;protocol?:string;port?:string}={}) {
  await page.getByTestId('firewall-nav-traffic').click()
  const panel=page.getByTestId('traffic-tester')
  await panel.getByLabel('Source IPv4 address',{exact:true}).fill(values.source??'198.51.100.25')
  await panel.getByLabel('Destination IPv4 address',{exact:true}).fill(values.destination??'192.0.2.80')
  await panel.getByLabel('Packet protocol',{exact:true}).selectOption(values.protocol??'tcp')
  if(!values.protocol||['tcp','udp'].includes(values.protocol)) await panel.getByLabel('Destination port',{exact:true}).fill(values.port??'443')
  await page.getByTestId('acl-test-traffic').click()
  return page.getByTestId('traffic-result').first()
}
