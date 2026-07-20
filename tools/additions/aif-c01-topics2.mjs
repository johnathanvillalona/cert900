// AIF-C01 sub-topics, each anchored to the freeCodeCamp chapter that covers
// it. The course has 16 chapters behind 33 topics already, so this continues
// the bank's existing pattern of finer topics against one trusted source.
// Anchoring to the chapter START means no timestamp can be wrong.
const V = "https://www.youtube.com/watch?v=WZeZZ8_W-M4"
const CH = {
  fundamentals: 1068,
  data: 4607,
  genaiPrimer: 5508,
  bedrock: 7342,
  datastores: 26160,
  sagemaker: 29326,
  evaluations: 34904,
  devTools: 36398,
  managedMl: 37814,
  genaiSecurity: 47970,
  athena: 48918,
  glue: 49875,
  opensearch: 52386,
  lakeFormation: 53772,
}
const v = (k, n, d, t) => [k, { n: `freeCodeCamp: ${n}`, u: `${V}&t=${t}s`, d }]

export default {
  examId: "aif-c01",
  videos: Object.fromEntries([
    // --- 1. Fundamentals of AI and ML (20%) ---
    v("ml-algorithms", "Classification, Regression, and Clustering", 1, CH.fundamentals),
    v("inferencing-types", "Batch and Real-Time Inferencing", 1, CH.fundamentals),
    v("training-data-types", "Labeled, Unlabeled, and Structured Data", 1, CH.data),
    v("feature-engineering", "Feature Engineering", 1, CH.data),
    v("overfitting-underfitting", "Overfitting, Underfitting, and Bias-Variance", 1, CH.evaluations),

    // --- 2. Fundamentals of GenAI (24%) ---
    v("transformer-architecture", "Transformers and Attention", 2, CH.genaiPrimer),
    v("diffusion-models", "Diffusion and Multimodal Models", 2, CH.genaiPrimer),
    v("genai-limitations", "Hallucination and Nondeterminism", 2, CH.genaiPrimer),
    v("context-windows", "Context Windows and Chunking", 2, CH.genaiPrimer),
    v("genai-cost-tradeoffs", "Cost and Latency Trade-offs", 2, CH.bedrock),
    v("amazon-q", "Amazon Q", 2, CH.devTools),

    // --- 3. Applications of Foundation Models (28%) ---
    v("prompt-techniques", "Zero-shot, Few-shot, and Chain-of-Thought", 3, CH.bedrock),
    v("prompt-risks", "Prompt Injection and Jailbreaking", 3, CH.bedrock),
    v("bedrock-inference-modes", "On-Demand and Provisioned Throughput", 3, CH.bedrock),
    v("continued-pretraining", "Continued Pre-training and Domain Adaptation", 3, CH.bedrock),
    v("knowledge-bases", "Bedrock Knowledge Bases", 3, CH.datastores),
    v("rag-datastores", "Vector Stores for Retrieval", 3, CH.opensearch),
    v("model-metrics", "ROUGE, BLEU, and BERTScore", 3, CH.evaluations),
    v("human-evaluation", "Human Evaluation and Benchmarking", 3, CH.evaluations),

    // --- 4. Guidelines for Responsible AI (14%) ---
    v("dataset-bias", "Dataset Bias and Representativeness", 4, CH.evaluations),
    v("transparency-tools", "Model Cards and AI Service Cards", 4, CH.sagemaker),
    v("human-centered-design", "Human-Centered Design and Oversight", 4, CH.genaiSecurity),
    v("environmental-impact", "Sustainability and Model Efficiency", 4, CH.genaiSecurity),

    // --- 5. Security, Compliance, and Governance (14%) ---
    v("iam-for-ai", "IAM for AI Workloads", 5, CH.genaiSecurity),
    v("data-encryption-ai", "Encryption and Data Protection", 5, CH.genaiSecurity),
    v("regulatory-compliance", "Regulatory and Industry Compliance", 5, CH.genaiSecurity),
    v("data-cataloging", "Data Cataloging and Lineage", 5, CH.glue),
    v("data-querying", "Querying Governed Data", 5, CH.athena),
  ]),
}
