import {expect,type Page} from '@playwright/test'
import {openLab,findQuestion} from './helpers'
export const windowsTitle='Windows Defender Firewall: Allow the App'
export type WindowsValues={name?:string;kind?:string;application?:string;direction?:string;action?:string;protocol?:string;localPorts?:string;remotePorts?:string;domain?:boolean;private?:boolean;public?:boolean}
export async function openWindows(page:Page){await openLab(page,'220-1202');await findQuestion(page,windowsTitle);await expect(page.getByTestId('windows-overview')).toBeVisible()}
export async function fillWindows(page:Page,values:WindowsValues){
  const dialog=page.getByTestId('windows-rule-editor')
  const labels={name:'Rule name',kind:'Rule type',application:'Application',direction:'Direction',action:'Action',protocol:'Protocol',localPorts:'Local ports',remotePorts:'Remote ports'}
  for(const key of ['name','kind','direction','application','action','protocol','localPorts','remotePorts'] as const){const value=values[key];if(value===undefined)continue;const control=dialog.getByLabel(labels[key],{exact:true});if(['name','localPorts','remotePorts'].includes(key))await control.fill(value);else await control.selectOption(value)}
  for(const key of ['domain','private','public'] as const)if(values[key]!==undefined)await dialog.getByLabel(`${key[0].toUpperCase()+key.slice(1)} profile`,{exact:true}).setChecked(values[key]!)
}
export async function addWindows(page:Page,values:WindowsValues={}){
  await page.getByTestId(values.direction==='outbound'?'firewall-nav-outbound':'firewall-nav-inbound').click()
  await page.getByTestId('windows-add-rule').click()
  await fillWindows(page,{name:'Inventory exception',application:values.kind&&values.kind!=='program'?undefined:'inventory',public:false,...values})
  await page.getByTestId('windows-apply-rule').click()
  await expect(page.getByTestId('windows-rule-editor')).toHaveCount(0)
}
export async function windowsTraffic(page:Page,values:Partial<Record<'application'|'profile'|'direction'|'protocol'|'localPort'|'remotePort',string>>={}){
  await page.getByTestId('firewall-nav-traffic').click()
  const panel=page.getByTestId('windows-traffic'),labels={application:'Application',profile:'Active profile',direction:'Traffic direction',protocol:'Traffic protocol',localPort:'Local port',remotePort:'Remote port'}
  for(const [key,value]of Object.entries({application:'inventory',profile:'domain',direction:'inbound',protocol:'tcp',localPort:'9000',remotePort:'55000',...values})){const control=panel.getByLabel(labels[key as keyof typeof labels],{exact:true});if(key==='localPort'||key==='remotePort')await control.fill(value);else await control.selectOption(value)}
  await page.getByTestId('windows-run-traffic').click()
  return page.getByRole('log',{name:'Windows traffic test history'}).getByRole('article').first()
}
