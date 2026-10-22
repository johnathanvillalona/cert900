/** Lightweight navigation and source records. No lesson bodies, banks or session imports. */
export interface GuideLessonDescriptor {
  readonly id: string
  readonly title: string
  readonly objective: string
  readonly objectiveRefs: readonly string[]
  readonly domains: readonly number[]
  readonly sourceIds: readonly string[]
}

export const AIF_REVIEWED_ON = "2026-10-21"
const certification = "https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/"
export const AIF_SOURCES = {
  curriculum: { title: "AIF-C01 exam guide", url: `${certification}ai-practitioner-01.html` },
  revisions: { title: "Exam guide revision history", url: `${certification}aif-01-revisions.html` },
  domain1: { title: "Domain 1: AI and ML fundamentals", url: `${certification}ai-practitioner-01-domain1.html` },
  domain2: { title: "Domain 2: Generative AI", url: `${certification}ai-practitioner-01-domain2.html` },
  domain3: { title: "Domain 3: Foundation model applications", url: `${certification}ai-practitioner-01-domain3.html` },
  domain4: { title: "Domain 4: Responsible AI", url: `${certification}ai-practitioner-01-domain4.html` },
  domain5: { title: "Domain 5: Security and governance", url: `${certification}ai-practitioner-01-domain5.html` },
  sagemaker: { title: "Amazon SageMaker AI and the broader SageMaker platform", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html" },
  bedrock: { title: "What is Amazon Bedrock?", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html" },
  quick: { title: "What is Amazon Quick?", url: "https://docs.aws.amazon.com/quick/latest/userguide/what-is.html" },
  qHistory: { title: "Amazon Q Business availability notice", url: "https://aws.amazon.com/q/business/" },
  prompts: { title: "Amazon Bedrock Prompt Management", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html" },
  customization: { title: "Customize models in Amazon Bedrock", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html" },
  clarify: { title: "SageMaker Clarify capabilities and availability", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-explainability.html" },
  agentsClassic: { title: "Bedrock Agents Classic availability", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html" },
  developerHistory: { title: "Amazon Q Developer history and Kiro CLI naming", url: "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/doc-history.html" },
  modelCards: { title: "Amazon SageMaker Model Cards", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html" },
  securityScope: { title: "AWS Generative AI Security Scoping Matrix", url: "https://docs.aws.amazon.com/whitepapers/latest/navigating-security-landscape-genai/scoping-generative-ai-use-cases.html" },
  rag: { title: "How Bedrock Knowledge Bases work", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/kb-how-it-works.html" },
  inference: { title: "Bedrock inference parameters", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html" },
  agents: { title: "Amazon Bedrock AgentCore", url: "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html" },
  evaluation: { title: "Evaluating models with Amazon Bedrock", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html" },
  privacy: { title: "Data protection in Amazon Bedrock", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html" },
  guardrails: { title: "Amazon Bedrock Guardrails", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html" },
} as const

export const AIF_CURRICULUM = [
  { domain: 1, title: "Fundamentals of AI and ML", weight: 20, tasks: ["1.1", "1.2", "1.3"] },
  { domain: 2, title: "Fundamentals of GenAI", weight: 24, tasks: ["2.1", "2.2", "2.3"] },
  { domain: 3, title: "Applications of Foundation Models", weight: 28, tasks: ["3.1", "3.2", "3.3", "3.4"] },
  { domain: 4, title: "Guidelines for Responsible AI", weight: 14, tasks: ["4.1", "4.2"] },
  { domain: 5, title: "Security, Compliance, and Governance for AI Solutions", weight: 14, tasks: ["5.1", "5.2"] },
] as const

export const AIF_LESSONS = [
  { id: "aif-ai-ml-approaches", title: "1. Choose the right approach for an AI task", objective: "choose an approach by looking at the result you need and the examples you have.", objectiveRefs: ["1.1", "1.2"], domains: [1], sourceIds: ["domain1"] },
  { id: "aif-ml-lifecycle", title: "2. Take a model from an idea to everyday use", objective: "explain how a team develops a model, checks its work and keeps it useful after launch.", objectiveRefs: ["1.3"], domains: [1], sourceIds: ["domain1", "sagemaker"] },
  { id: "aif-model-performance", title: "3. Understand what a model’s performance tells you", objective: "explain what false alarms and missed problems tell you about a detector’s performance.", objectiveRefs: ["1.3", "3.4"], domains: [1, 3], sourceIds: ["domain1", "domain3", "evaluation"] },
  { id: "aif-foundation-models-services", title: "4. Choose foundation models and AWS services", objective: "compare AWS capabilities by starting with the work your team needs to do.", objectiveRefs: ["1.2", "2.1", "2.2", "2.3"], domains: [2], sourceIds: ["domain1", "domain2", "bedrock", "sagemaker", "quick", "qHistory", "developerHistory"] },
  { id: "aif-prompting-context", title: "5. Write useful prompts and provide the right context", objective: "give a model clear instructions and choose the information it needs to answer well.", objectiveRefs: ["2.1", "3.2"], domains: [3], sourceIds: ["domain2", "domain3", "inference", "prompts"] },
  { id: "aif-retrieval-customization", title: "6. Decide when to use RAG or customize a model", objective: "decide when to retrieve current information and when training might help change a model’s behavior.", objectiveRefs: ["3.1", "3.3"], domains: [3], sourceIds: ["domain3", "rag", "customization"] },
  { id: "aif-agents-evaluation", title: "7. Follow an AI agent’s actions and check its work", objective: "follow an agent’s steps and check whether its tools completed the task the user authorized.", objectiveRefs: ["2.1", "3.1", "3.4"], domains: [3], sourceIds: ["domain2", "domain3", "agents", "agentsClassic", "evaluation"] },
  { id: "aif-responsible-ai", title: "8. Put responsible AI into practice", objective: "recognize uneven or unsafe outcomes and plan human review that can make a difference.", objectiveRefs: ["4.1", "4.2"], domains: [4], sourceIds: ["domain4", "guardrails", "clarify", "modelCards"] },
  { id: "aif-security-governance", title: "9. Protect data and govern an AI application", objective: "explain how to keep an assistant’s data and actions within the user’s permissions.", objectiveRefs: ["5.1", "5.2"], domains: [5], sourceIds: ["domain5", "privacy", "guardrails", "agents", "securityScope"] },
] as const satisfies readonly GuideLessonDescriptor[]

export type AifLessonId = (typeof AIF_LESSONS)[number]["id"]
export type AifSourceId = keyof typeof AIF_SOURCES

/** Resolve only reviewed lesson sources; unknown IDs fail authoring rather than publish broken references. */
export function aifSourcesForLesson(lesson: GuideLessonDescriptor) {
  return lesson.sourceIds.map(id => {
    if (!Object.hasOwn(AIF_SOURCES, id)) throw new Error(`Unknown learning source: ${id}`)
    return AIF_SOURCES[id as AifSourceId]
  })
}
