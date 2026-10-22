// Review evidence only. Uses a fresh browser, loopback requests and no account/session exports.
import { chromium } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const phase = process.argv[2];
const origin = new URL(process.argv[3] ?? 'http://127.0.0.1:4211');
if (!['before', 'after'].includes(phase) || !['127.0.0.1', 'localhost'].includes(origin.hostname)) {
  throw new Error('Use before|after and a loopback preview URL');
}
const repo = fileURLToPath(new URL('../..', import.meta.url));
const output = path.join(repo, 'docs/qa/educational-ux-aif', phase);
mkdirSync(output, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', args: ['--disable-background-networking', '--disable-sync'] });
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  await context.route('**/*', route => ['127.0.0.1', 'localhost'].includes(new URL(route.request().url()).hostname) ? route.continue() : route.abort());
  const page = await context.newPage();
  const guide = '/aws-ai-practitioner-practice-test';
  await page.goto(new URL(guide, origin).href);
  const metrics = await page.getByTestId('learning-lesson').evaluateAll(lessons => lessons.map(lesson => {
    const words = text => (text ?? '').trim().split(/\s+/).filter(Boolean).length;
    const explanation = lesson.querySelector('[data-testid="lesson-explanation"]');
    const narrative = explanation?.cloneNode(true);
    narrative?.querySelectorAll('figure').forEach(figure => figure.remove());
    const optional = lesson.querySelector('[data-testid="lesson-advanced"]');
    return {
      id: lesson.getAttribute('aria-labelledby'),
      coreWords: words(narrative?.textContent),
      maxParagraphWords: Math.max(...[...(narrative?.querySelectorAll('p') ?? [])].map(p => words(p.textContent)), 0),
      coreSubheadings: explanation?.querySelectorAll('h3').length ?? 0,
      optionalWords: words(optional?.textContent),
      totalWords: words(lesson.textContent),
      checks: lesson.querySelectorAll('[data-testid="lesson-check"]').length,
    };
  }));
  writeFileSync(path.join(output, 'reading-metrics.json'), JSON.stringify(metrics, null, 2) + '\n');
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.evaluate(() => document.documentElement.classList.remove('dark'));
    for (const id of ['aif-ai-ml-approaches', 'aif-model-performance', 'aif-retrieval-customization']) {
      await page.goto(new URL(`${guide}#${id}`, origin).href);
      await page.locator(`#${id}`).evaluate(element => element.scrollIntoView({ block: 'start' }));
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(output, `${id}-${width}.png`) });
    }
  }
  if (phase === 'after') {
    await page.setViewportSize({ width: 320, height: 1000 });
    await page.evaluate(() => document.documentElement.classList.add('dark'));
    for (const kind of ['precision-recall', 'service-choice', 'responsible-review', 'security-boundaries']) {
      await page.locator(`[data-diagram="${kind}"]`).screenshot({ path: path.join(output, `${kind}-320-dark.png`) });
    }
    await page.setViewportSize({ width: 390, height: 1000 });
    await page.evaluate(() => document.documentElement.classList.remove('dark'));
    const scenario = page.getByTestId('learning-lesson').nth(2).getByTestId('lesson-scenario');
    await scenario.locator('..').screenshot({ path: path.join(output, 'worked-example-390.png') });
  }
  console.log(JSON.stringify({ phase, screenshots: phase === 'after' ? 11 : 6, metrics }, null, 2));
  await context.close();
} finally { await browser.close(); }
