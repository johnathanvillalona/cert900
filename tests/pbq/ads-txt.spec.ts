import { test, expect } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { ADVERTISING } from '../../src/lib/advertising-policy'

const record = readFileSync('public/ads.txt', 'utf8')

test('ads.txt is a real plain-text asset on GET and HEAD, without advertising requests', async ({ page, request }, info) => {
  expect(record).toBe('google.com, pub-7887703829224685, DIRECT, f08c47fec0942fa0\n')
  expect(record.split(', ')[1]).toBe(ADVERTISING.publisher.replace(/^ca-/, ''))
  expect(ADVERTISING.enabled).toBe(false)
  expect(ADVERTISING.placements['guide-primary'].enabled).toBe(false)
  expect(ADVERTISING.placements['guide-secondary'].enabled).toBe(false)
  for (const method of ['GET', 'HEAD']) {
    const response = await request.fetch('/ads.txt', { method })
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toMatch(/^text\/plain(?:;|$)/)
    expect(await response.text()).toBe(method === 'GET' ? record : '')
  }
  const ads: string[] = []
  page.on('request', req => { if (/googlesyndication|doubleclick|googleadservices|fundingchoices|grow\.me/.test(req.url())) ads.push(new URL(req.url()).hostname) })
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  for (const width of [320, 375, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    const response = await page.goto('/ads.txt')
    expect(response!.status()).toBe(200)
    expect(await page.locator('body').innerText()).toBe(record)
    expect(await page.locator('script').count()).toBe(0)
    await page.screenshot({ path: info.outputPath(`ads-txt-${width}.png`) })
  }
  expect(errors).toEqual([])
  expect(ads).toEqual([])
})
