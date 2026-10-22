import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { AIF_LESSONS } from '@/data/guide-lessons'
import { AIF_LESSON_CONTENT } from './aif-c01'
import { LearningLesson } from '@/components/GuideLearningContent'

// An independent coverage oracle prevents the shorter reading path from silently
// removing the accepted technical scope. Editorial review still checks meaning.
const coverage = [
  ['aif-ai-ml-approaches', ['classification', 'regression', 'clustering', 'generative AI', 'supervised', 'unsupervised', 'reinforcement', 'training', 'inference', 'structured', 'unstructured', 'serverless', 'deep learning']],
  ['aif-ml-lifecycle', ['validation', 'test set', 'data leakage', 'monitor', 'preprocessing', 'feature engineering', 'hyperparameters', 'data drift', 'concept drift', 'MLOps', 'self-hosting']],
  ['aif-model-performance', ['true positive', 'false positive', 'false negative', 'true negative', 'confusion matrix', 'precision', 'recall', 'accuracy', 'F1', 'overfitting', 'underfitting', 'variance', 'ROI']],
  ['aif-foundation-models-services', ['foundation model', 'token', 'context window', 'multimodal', 'Bedrock', 'SageMaker AI', 'Amazon Quick', 'diffusion', 'transformer', 'embedding', 'JumpStart', 'Transcribe', 'Polly', 'Textract', '$0.004']],
  ['aif-prompting-context', ['prompt engineering', 'context engineering', 'zero-shot', 'one-shot', 'few-shot', 'template', 'prompt-injection', 'authorization', 'temperature', 'top-p', 'top-k', 'maximum output tokens', 'jailbreaking', 'poisoning']],
  ['aif-retrieval-customization', ['RAG', 'fine-tuning', 'parameters', 'citations', 'chunks', 'embeddings', 'OpenSearch', 'Neptune', 'in-context learning', 'continued pretraining', 'distillation', 'transfer learning', 'RLHF']],
  ['aif-agents-evaluation', ['tool', 'memory', 'MCP', 'authorization', 'trace', 'multi-agent', 'short-term', 'long-term', 'Strands', 'AgentCore', 'ROUGE', 'BLEU', 'BERTScore', 'human evaluation', 'LLM-as-a-judge']],
  ['aif-responsible-ai', ['fairness', 'inclusivity', 'transparency', 'explainability', 'human review', 'robustness', 'veracity', 'Model Cards', 'Clarify', 'Guardrails', 'intellectual-property', 'sustainability']],
  ['aif-security-governance', ['authentication', 'authorization', 'least privilege', 'encryption', 'governance', 'IAM', 'PrivateLink', 'Macie', 'CloudTrail', 'AWS Config', 'Inspector', 'Artifact', 'Trusted Advisor', 'lineage', 'retention', 'Scoping Matrix', 'cross-Region']],
] as const
const text = (html: string) => html.replace(/<[^>]*>/g, ' ').replace(/&#x27;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()

describe('beginner AWS lesson structure and preserved depth', () => {
  it('keeps the same nine stable lessons and fourteen task references', () => {
    expect(Object.keys(AIF_LESSON_CONTENT)).toEqual(coverage.map(([id]) => id))
    expect(AIF_LESSONS.map(lesson => lesson.objectiveRefs)).toEqual([
      ['1.1', '1.2'], ['1.3'], ['1.3', '3.4'], ['1.2', '2.1', '2.2', '2.3'], ['2.1', '3.2'], ['3.1', '3.3'], ['2.1', '3.1', '3.4'], ['4.1', '4.2'], ['5.1', '5.2'],
    ])
  })

  for (const [id, terms] of coverage) {
    it(`${id}: retains technical concepts alongside a substantive visible lesson`, () => {
      const descriptor = AIF_LESSONS.find(lesson => lesson.id === id)!
      const content = AIF_LESSON_CONTENT[id]
      const html = renderToStaticMarkup(createElement(LearningLesson, { lesson: descriptor, content }))
      const full = text(html).toLowerCase()
      for (const term of terms) expect(full, `${id}: ${term}`).toContain(term.toLowerCase())
      const core = renderToStaticMarkup(createElement('div', null, content.intro, content.explanation))
      expect(core.match(/data-testid="lesson-concept"/g)).toHaveLength(3)
      expect(text(core).split(/\s+/).length).toBeGreaterThan(140)
      expect(html).toContain('data-testid="lesson-takeaway"')
      expect(html).toContain('data-testid="lesson-advanced"')
      expect(html).not.toMatch(/<details[^>]*\sopen(?:[\s=>])/)
      expect(text(renderToStaticMarkup(createElement('div', null, content.scenario)))).toContain(' ')
      expect(renderToStaticMarkup(createElement('div', null, content.scenario))).toContain('<ol')
      expect(html.match(/data-testid="lesson-check"/g)).toHaveLength(1)
      expect(html).toContain('data-testid="lesson-check-note"')
      expect(html).toContain('It isn’t graded, and your answer isn’t collected or saved.')
      expect(html).not.toMatch(/<script|<iframe|<form|<input|onClick=|onToggle=/)
      // A guard against dense paragraphs, not a target word count for authors.
      for (const paragraph of html.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g)) {
        expect(text(paragraph[1]).split(/\s+/).length, `${id}: ${text(paragraph[1])}`).toBeLessThanOrEqual(65)
      }
    })
  }

  it('uses matching precision/recall denominators and preserves the baseline comparison', () => {
    const html = renderToStaticMarkup(createElement('div', null, AIF_LESSON_CONTENT['aif-model-performance'].diagram))
    const explanation = text(html)
    expect(explanation).toContain('15 real scams ÷ 25 alerts = 60%')
    expect(explanation).toContain('15 found ÷ 20 actual scams = 75%')
    const full = text(renderToStaticMarkup(createElement('div', null, AIF_LESSON_CONTENT['aif-model-performance'].explanation)))
    expect(full).toContain('985 of 1,000')
    expect(full).toContain('98.5%')
    expect(full).toContain('98%')
  })
})
