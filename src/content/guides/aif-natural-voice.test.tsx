import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { AIF_LESSONS } from '@/data/guide-lessons'
import { AifGuide } from '@/screens/Guides'

// These are explicit regression cases from the owner's review, not an automated
// rating of whether prose sounds human. The editorial report records that review.
describe('AWS natural-voice editorial boundaries', () => {
  it('does not restore the three specifically rejected instructional phrases', () => {
    const html = renderToStaticMarkup(createElement(AifGuide))
    for (const phrase of ['A category calls for', 'Read inward:', 'Unscored self-check. Nothing is submitted or saved.']) {
      expect(html).not.toContain(phrase)
    }
  })

  it('keeps every native check explicitly ungraded and without answer collection', () => {
    const html = renderToStaticMarkup(createElement(AifGuide))
    expect(html.match(/data-testid="lesson-check"/g)).toHaveLength(9)
    expect(html.match(/data-testid="lesson-check-note"/g)).toHaveLength(9)
    expect(html.match(/It isn’t graded, and your answer isn’t collected or saved\./g)).toHaveLength(9)
    expect(html).not.toMatch(/<form|<input|<textarea|onToggle=|onClick=/)
  })

  it('changes wording without changing the accepted lesson bindings', () => {
    expect(AIF_LESSONS.map(({ id, objectiveRefs, domains, sourceIds }) => ({ id, objectiveRefs, domains, sourceIds }))).toEqual([
      { id: 'aif-ai-ml-approaches', objectiveRefs: ['1.1', '1.2'], domains: [1], sourceIds: ['domain1'] },
      { id: 'aif-ml-lifecycle', objectiveRefs: ['1.3'], domains: [1], sourceIds: ['domain1', 'sagemaker'] },
      { id: 'aif-model-performance', objectiveRefs: ['1.3', '3.4'], domains: [1, 3], sourceIds: ['domain1', 'domain3', 'evaluation'] },
      { id: 'aif-foundation-models-services', objectiveRefs: ['1.2', '2.1', '2.2', '2.3'], domains: [2], sourceIds: ['domain1', 'domain2', 'bedrock', 'sagemaker', 'quick', 'qHistory', 'developerHistory'] },
      { id: 'aif-prompting-context', objectiveRefs: ['2.1', '3.2'], domains: [3], sourceIds: ['domain2', 'domain3', 'inference', 'prompts'] },
      { id: 'aif-retrieval-customization', objectiveRefs: ['3.1', '3.3'], domains: [3], sourceIds: ['domain3', 'rag', 'customization'] },
      { id: 'aif-agents-evaluation', objectiveRefs: ['2.1', '3.1', '3.4'], domains: [3], sourceIds: ['domain2', 'domain3', 'agents', 'agentsClassic', 'evaluation'] },
      { id: 'aif-responsible-ai', objectiveRefs: ['4.1', '4.2'], domains: [4], sourceIds: ['domain4', 'guardrails', 'clarify', 'modelCards'] },
      { id: 'aif-security-governance', objectiveRefs: ['5.1', '5.2'], domains: [5], sourceIds: ['domain5', 'privacy', 'guardrails', 'agents', 'securityScope'] },
    ])
  })
})
