import { test, expect } from '@playwright/test'
import { workstation, place } from './helpers'

test('real PBQ session: placement, reset, zero grade and locking', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  // Tests must never contact non-local services.
  await page.route('**/*', route => {
    const url = new URL(route.request().url())
    return ['127.0.0.1', 'localhost'].includes(url.hostname) ? route.continue() : route.abort()
  })
  await workstation(page)
  await place(page, 'vga', 'zvga')
  await expect(page.getByTestId('zone-zvga')).toHaveAccessibleName(/contains Analog monitor cable/)
  await page.getByTestId('dragconnect-reset').click()
  await expect(page.getByTestId('dragconnect-status')).toHaveText('0 of 4 ports connected.')
  await page.getByTestId('check-pbq').click()
  await expect(page.getByTestId('feedback')).toContainText('0% correct')
  await expect(page.getByTestId('item-vga')).toBeDisabled()
  await expect(page.getByTestId('dragconnect-reset')).toBeDisabled()
  expect(errors).toEqual([])
})
