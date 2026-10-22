import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { AZ900_CURRICULUM, AZ900_LESSONS, AZ900_REVIEWED_ON, AZ900_SKILLS_EFFECTIVE, AZ900_SOURCES, az900SourcesForLesson } from '@/data/az900-lessons'
import { AZ900_LESSON_CONTENT, azureLearningResources } from './az900'
import { LearningLesson } from '@/components/GuideLearningContent'
import { Az900Guide } from '@/screens/Guides'
import { StudyHub } from '@/screens/StudyHub'
import { selectGuideSamples } from '@/lib/guide-sample-selection'
import { GUIDE_SAMPLES } from '@/data/guide-samples'

// Independent coverage checks support editorial review; they don't certify a
// teaching voice or claim that the guide is a complete course.
const coverage = [
  ['az900-cloud-changes', ['consumption', 'public cloud', 'private cloud', 'hybrid cloud', 'scalability', 'elasticity', 'availability', 'reliability', 'predictability', 'manageability', 'serverless']],
  ['az900-shared-responsibility', ['IaaS', 'PaaS', 'SaaS', 'guest operating system', 'App Service', 'Microsoft 365', 'devices']],
  ['az900-regions-reliability', ['region', 'datacenter', 'availability zone', 'sovereign', 'not all', 'zone-redundant', 'availability set', 'backup', 'recovery point']],
  ['az900-resource-hierarchy', ['resource group', 'subscription', 'management group', 'tenant', 'inherited', 'Resource Manager', 'tags', 'different regions']],
  ['az900-choose-compute', ['virtual machine', 'Scale Sets', 'App Service', 'Container Instances', 'Container Apps', 'Kubernetes', 'Functions', 'Virtual Desktop', 'public IP address is optional']],
  ['az900-network-connectivity', ['VNet', 'subnet', 'DNS', 'peering', 'VPN Gateway', 'ExpressRoute', 'private endpoint', 'public endpoint', 'not transitive', 'authorization']],
  ['az900-storage-migration', ['Blob', 'Files', 'Queue', 'Table', 'managed disks', 'Hot', 'Cool', 'Cold', 'Archive', 'rehydration', 'LRS', 'ZRS', 'GRS', 'GZRS', 'asynchronous', 'backup', 'AzCopy', 'Storage Explorer', 'File Sync', 'Migrate', 'Data Box']],
  ['az900-identity-access', ['Entra ID', 'authentication', 'authorization', 'SSO', 'MFA', 'Passwordless', 'Conditional Access', 'RBAC', 'External identities', 'Zero Trust', 'Defense in depth', 'Domain Services', 'Defender for Cloud']],
  ['az900-cost-governance', ['pricing calculator', 'budget', 'doesn’t stop', 'Policy', 'RBAC', 'tags', 'Purview', 'locks', 'Cloud Shell', 'CLI', 'PowerShell', 'infrastructure as code', 'ARM templates', 'Arc', 'control-plane', 'data-plane']],
  ['az900-monitor-health', ['Monitor', 'metrics', 'logs', 'Log Analytics', 'Application Insights', 'Alerts', 'Service Health', 'Resource Health', 'Advisor', 'planned maintenance', 'diagnostic settings']],
] as const
const text = (html: string) => html.replace(/<[^>]*>/g, ' ').replaceAll('&#x27;', "'").replaceAll('&amp;', '&').replace(/\s+/g, ' ').trim()

describe('AZ-900 beginner lessons and approved boundaries', () => {
  it('covers all eleven named skill groups with stable local references and official ranges', () => {
    expect(AZ900_LESSONS.map(row => row.id)).toEqual(coverage.map(([id]) => id))
    expect(Object.keys(AZ900_LESSON_CONTENT)).toEqual(coverage.map(([id]) => id))
    const groups = AZ900_CURRICULUM.flatMap(row => [...row.skills])
    expect(groups).toHaveLength(11)
    expect([...new Set(AZ900_LESSONS.flatMap(row => [...row.objectiveRefs]))].sort()).toEqual([...groups].sort())
    expect(AZ900_CURRICULUM.map(row => row.weightRange)).toEqual(['25–30%', '35–40%', '30–35%'])
    expect(AZ900_LESSONS.map(row => [...row.objectiveRefs])).toEqual([
      ['cloud-computing', 'cloud-benefits'], ['service-types', 'cloud-computing'], ['architecture', 'cloud-benefits'], ['architecture'], ['compute-networking'], ['compute-networking'], ['storage'], ['identity-security'], ['cost', 'governance', 'deployment'], ['monitoring'],
    ])
    for (const lesson of AZ900_LESSONS) for (const domain of lesson.domains) expect([1, 2, 3]).toContain(domain)
  })

  it('binds dated official sources and rejects missing or prototype source IDs', () => {
    expect(AZ900_REVIEWED_ON).toBe('2026-10-21')
    expect(AZ900_SKILLS_EFFECTIVE).toBe('2026-07-20')
    for (const source of Object.values(AZ900_SOURCES)) expect(new URL(source.url).origin).toBe('https://learn.microsoft.com')
    for (const lesson of AZ900_LESSONS) expect(az900SourcesForLesson(lesson).length).toBeGreaterThan(1)
    for (const id of ['unknown', '__proto__']) expect(() => az900SourcesForLesson({ ...AZ900_LESSONS[0], sourceIds: [id] })).toThrow('Unknown learning source')
  })

  for (const [id, terms] of coverage) {
    it(`${id}: keeps a substantive visible lesson and accessible optional depth`, () => {
      const descriptor = AZ900_LESSONS.find(row => row.id === id)!
      const content = AZ900_LESSON_CONTENT[id]
      const html = renderToStaticMarkup(createElement(LearningLesson, { lesson: descriptor, content, resources: azureLearningResources }))
      const full = text(html).toLowerCase()
      for (const term of terms) expect(full, term).toContain(term.toLowerCase())
      const core = renderToStaticMarkup(createElement('div', null, content.intro, content.explanation))
      expect(text(core).split(/\s+/).length).toBeGreaterThan(160)
      expect(core).not.toContain('<details')
      for (const paragraph of html.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g)) expect(text(paragraph[1]).split(/\s+/).length, text(paragraph[1])).toBeLessThanOrEqual(65)
      expect(html).toContain('data-testid="lesson-takeaway"')
      expect(html).toContain('data-testid="lesson-scenario"')
      expect(html).toContain('It isn’t graded, and your answer isn’t collected or saved.')
      expect(html).not.toMatch(/<form|<input|<script|<iframe|onClick=|onToggle=|<details[^>]*\sopen[\s=>]/)
    })
  }

  it('renders ten lessons, four captioned diagrams and unique headings in static HTML', () => {
    const html = renderToStaticMarkup(createElement(Az900Guide))
    for (const name of ['learning-lesson', 'lesson-check', 'lesson-advanced']) expect(html.match(new RegExp(`data-testid="${name}"`, 'g'))).toHaveLength(10)
    expect(html.match(/data-testid="learning-diagram"/g)).toHaveLength(4)
    expect(html.match(/<figcaption\b/g)).toHaveLength(4)
    expect(html.match(/<h1\b/g)).toHaveLength(1)
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1])
    expect(new Set(ids).size).toBe(ids.length)
    const headings = [...html.matchAll(/<h[23][^>]*>(.*?)<\/h[23]>/g)].map(match => text(match[1]))
    expect(new Set(headings).size).toBe(headings.length)
    expect(html).toContain('Practice allocation')
    expect(html).toContain('Official AZ-900 domain weight ranges')
    expect(html).not.toContain('all-or-nothing the way Microsoft does')
    for (const lesson of AZ900_LESSONS) expect(html).toContain(`href="#${lesson.id}"`)
    expect(html.match(/How to use this to pass/g)).toHaveLength(1)
  })

  it('preserves all eight original samples and maps every lesson to a real hub domain', () => {
    expect(selectGuideSamples(['az-900']).map(row => row.sample)).toEqual(GUIDE_SAMPLES['az-900'].slice(0, 8))
    const html = renderToStaticMarkup(createElement(Az900Guide))
    expect(html.match(/data-testid="guide-sample"/g)).toHaveLength(8)
    const hub = renderToStaticMarkup(createElement(StudyHub, { examId: 'az-900' }))
    expect(hub.match(/data-testid="hub-guide-lesson"/g)).toHaveLength(10)
    for (const lesson of AZ900_LESSONS) {
      expect(hub).toContain(`href="/azure-fundamentals-practice-test#${lesson.id}"`)
      expect(hub).toContain(`id="domain-${lesson.domains[0]}"`)
    }
  })

  it('keeps authored content out of the browser entry and lightweight descriptors', () => {
    const metadata = readFileSync(new URL('../../data/az900-lessons.ts', import.meta.url), 'utf8')
    expect(metadata).not.toMatch(/from\s+["'][^"']*(?:content\/guides|GuideLearning|data\/az-900)|<p>|quiz-session|analytics/)
    const entry = readFileSync(new URL('../../content-client.ts', import.meta.url), 'utf8')
    expect(entry).not.toMatch(/az900|GuideLearning|hydrate/)
  })
})
