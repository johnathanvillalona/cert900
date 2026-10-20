import { expect, type Page } from '@playwright/test'

export async function openLab(page: Page, code = '220-1201') {
  await page.addInitScript(() => {
    let seed = 246813579
    Math.random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296 }
    localStorage.setItem('trainer-theme', 'light')
  })
  await page.goto('/')
  await page.getByTestId('exam-row').filter({ hasText: code }).click()
  await page.getByTestId('mode-pbq').click()
  await expect(page.getByTestId('qcard')).toBeVisible()
}
export async function findQuestion(page: Page, title: string) {
  for (let n = 0; n < 25; n++) {
    if ((await page.getByTestId('qcard').innerText()).includes(title)) return
    await page.getByTestId('check-pbq').click()
    const next = page.getByTestId('next')
    if (!(await next.count())) break
    await next.click()
  }
  throw new Error(`Question not found in lab: ${title}`)
}
export async function workstation(page: Page) {
  await openLab(page)
  await findQuestion(page, 'Provision the Sales Workstation')
}
export async function place(page: Page, item: string, zone: string) {
  await page.getByTestId(`item-${item}`).click()
  await page.getByTestId(`zone-${zone}`).click()
}
export async function settled(page: Page) {
  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all([...document.images].map(i => i.decode().catch(() => {})))
  })
}
