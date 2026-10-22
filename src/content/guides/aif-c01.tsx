import { AIF_LESSONS, type AifLessonId } from '@/data/guide-lessons'
import { ComparisonTable, LearningLesson, LessonConcept, TeachingSteps, type LessonContent } from '@/components/GuideLearningContent'
import { LearningDiagram } from '@/components/GuideLearningDiagrams'

// Core teaching stays visible. Extensions retain depth without repeating the lesson.
export const AIF_LESSON_CONTENT: Readonly<Record<AifLessonId, LessonContent>> = {
  'aif-ai-ml-approaches': {
    intro: <p>Artificial intelligence (AI) helps computers do tasks such as recognizing speech or making predictions. Machine learning (ML) is an AI approach that learns patterns from examples. Start by asking what result you need.</p>,
    diagram: <LearningDiagram kind="ai-map" />,
    explanation: <>
      <LessonConcept title="First decide what the answer should look like">
        <p>A category calls for <strong>classification</strong>: is this ticket urgent or routine? A number calls for <strong>regression</strong>: how many repair hours will this job take?</p>
        <p><strong>Clustering</strong> discovers groups without predefined categories. <strong>Generative AI</strong> creates content, such as a draft reply. An exact tax calculation usually needs a rule or formula, not a prediction.</p>
      </LessonConcept>
      <LessonConcept title="Then ask what examples you have">
        <p>A <strong>label</strong> is a known answer attached to an example. Supervised learning uses labeled examples; unsupervised learning looks for structure without those answer labels.</p>
        <p>Reinforcement learning uses rewards from actions in an environment. A warehouse robot might learn which actions avoid collisions. Rewards describe outcomes instead of supplying a correct answer for every input.</p>
      </LessonConcept>
      <LessonConcept title="Learning and using a model are different jobs">
        <p><strong>Training</strong> creates or adjusts a model: a learned system that turns inputs into predictions or other outputs. <strong>Inference</strong> uses that model on a new input. An estimate during repair booking is inference, not another training run.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'three requests at a repair shop',
    scenario: <TeachingSteps steps={[
      { title: 'Calculate an invoice', body: <p>Finance has an exact sales-tax rule. Apply it consistently instead of adding model uncertainty.</p> },
      { title: 'Estimate labor hours', body: <p>Past jobs include their final hours. Those labeled examples support supervised regression.</p> },
      { title: 'Discover customer groups', body: <p>Marketing has service histories but no approved categories. Start with clustering; use a separate generative task if staff also need written summaries.</p> },
    ]} />,
    misconception: 'An AI project does not automatically need a generative model. Choose from the required result, available evidence and cost of an error.',
    takeaway: 'Name the output first: an exact result, a category, a number, a discovered group or new content.',
    check: { prompt: 'You have customer histories but no category labels. How could you discover groups?', explanation: <p>Use clustering to find similar patterns. If you later receive trustworthy labels and want to predict them for new customers, that becomes supervised classification.</p> },
    advanced: { title: 'data types, prediction timing and overlapping AI terms', content: <>
      <LessonConcept title="Recognize the shape and quality of the data">
        <p>Structured data follows a schema, such as order-date and price columns. Unstructured material, such as a complaint letter, lacks that fixed table layout. Inputs can also be time series, images or audio.</p>
        <p>Check whether examples represent expected users and conditions. More records do not fix missing populations or inaccurate labels.</p>
      </LessonConcept>
      <ComparisonTable caption="Choose when a prediction must arrive" columns={['Delivery choice', 'When it fits']} rows={[
        ['Real-time inference', 'An estimate is needed during booking.'], ['Batch inference', 'A collected set can be processed overnight.'],
        ['Asynchronous inference', 'A long document job can finish later.'], ['Serverless inference', 'Managed compute scales without your team maintaining an always running server. This is a hosting choice, not a synonym for batch.'],
      ]} />
      <p>Compare latency, traffic patterns, payload size and cost. Traditional ML can fit narrow structured predictions; foundation models can fit varied language or image tasks. Regulatory requirements, explainability and operating constraints matter too.</p>
      <p>Deep learning uses multilayer neural networks. Computer vision works with images or video; natural language processing (NLP) works with human language. A large language model (LLM) supports language tasks.</p>
      <p>An agent uses a decision-and-action process, often combining a generative model with tools. These are overlapping ideas, not competing labels for the same level of a hierarchy.</p>
    </> },
  },
  'aif-ml-lifecycle': {
    intro: <p>An ML project begins with a decision you want to improve. The question is not just “Can we train a model?” It is “Will its predictions help someone make that decision in time?”</p>,
    diagram: <LearningDiagram kind="lifecycle" />,
    explanation: <>
      <LessonConcept title="Keep some examples out of training">
        <p>Training data helps the model learn. Validation data helps the team compare choices. A held-back test set checks the selected approach on examples not used for those decisions.</p>
        <p>Repeatedly choosing changes from test results makes that set less useful as an independent check.</p>
      </LessonConcept>
      <LessonConcept title="Use only information available at decision time">
        <p><strong>Data leakage</strong> happens when development uses information the real prediction would not have. A model predicting late deliveries must not see the final delivery date.</p>
        <p>A realistic evaluation imitates actual use. For a forecast, testing on later weeks can expose problems a random mix of old records might hide.</p>
      </LessonConcept>
      <LessonConcept title="Keep watching after launch">
        <p>Monitor errors, response time, cost and business outcomes. If conditions change, investigate before retraining. A newly trained model still needs evaluation before replacing the current one.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'forecasting sandwiches for a bakery',
    scenario: <TeachingSteps steps={[
      { title: 'Define useful success', body: <p>The forecast must arrive before ingredient orders. Success means less waste without more stockouts.</p> },
      { title: 'Prepare believable evidence', body: <p>Use earlier sales and information available before the deadline. A closed shop and a shop that sold out have unusual sales records for different reasons.</p> },
      { title: 'Test, then monitor', body: <p>Evaluate on later weeks. If nearby office attendance changes, investigate rising errors and compare a revised model before release.</p> },
    ]} />,
    misconception: 'Deployment does not finish an ML project. Users, data and business conditions can change.',
    takeaway: 'Define success, separate learning from evaluation, and use monitoring evidence to guide controlled updates.',
    check: { prompt: 'A churn model uses a cancellation confirmation email to predict next month’s cancellations. What is wrong?', explanation: <p>The email reveals an outcome unavailable at prediction time. Remove that leaked information and evaluate using only inputs available before the decision.</p> },
    advanced: { title: 'preparation, drift and repeatable operations', content: <>
      <ComparisonTable caption="Distinguish preparation from training" columns={['Work', 'Purpose']} rows={[
        ['Exploratory data analysis', 'Inspect distributions, missing values, unusual records and relationships.'], ['Preprocessing', 'Correct or transform inputs into a usable form.'],
        ['Feature engineering', 'Create useful inputs, such as days since the last purchase.'], ['Training', 'Learn model parameters. Hyperparameters, such as learning rate, guide training instead of being learned in the same way.'],
      ]} />
      <p><strong>Data drift</strong> means the input population changed. <strong>Concept drift</strong> means the relationship between inputs and the target changed. Investigate either signal before deciding whether retraining is appropriate.</p>
      <p>Machine learning operations (MLOps) makes development and operation repeatable. Record datasets, code, model versions, settings, evaluations and approvals. Repeatable pipelines help reduce manual errors, rework and technical debt.</p>
      <p>A managed API reduces model-serving infrastructure work. Self-hosting gives control and adds capacity, patching, scaling and availability responsibilities. Open models still need license, security and suitability review; training from scratch needs much more data and compute.</p>
      <p>Amazon SageMaker AI offers development, training, deployment and monitoring tools. Amazon S3 stores datasets and artifacts. Amazon Bedrock provides managed foundation-model access without requiring the application team to operate model servers.</p>
    </> },
  },
  'aif-model-performance': {
    intro: <p>A detector can be correct most of the time and still miss important cases. Ask two questions: “Can we trust its alerts?” and “How many real problems did it find?”</p>,
    diagram: <LearningDiagram kind="precision-recall" />,
    explanation: <>
      <LessonConcept title="Give each kind of mistake a name">
        <p>Here, positive means “scam.” A true positive is a scam correctly flagged. A false positive is an ordinary message flagged by mistake.</p>
        <p>A false negative is a missed scam; a true negative is an ordinary message correctly left alone. These four counts form a <strong>confusion matrix</strong>.</p>
      </LessonConcept>
      <LessonConcept title="Read the denominator before trusting the percentage">
        <p><strong>Precision</strong> starts with the alerts: 15 genuine scams out of 25 alerts, or 60%. <strong>Recall</strong> starts with all actual scams: 15 found out of 20, or 75%.</p>
        <p>Accuracy counts every correct prediction. This detector gets 985 of 1,000 correct, or 98.5%. Calling every message ordinary would already score 98%, because scams are rare.</p>
      </LessonConcept>
      <LessonConcept title="Choose the measure that fits the action">
        <p>Missing a scam and deleting an ordinary message have different costs. A <strong>decision threshold</strong> is the score cutoff for raising an alert. Moving it can trade more false alarms for fewer misses; judge that tradeoff in the actual workflow.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'reviewing alerts versus deleting messages',
    scenario: <TeachingSteps steps={[
      { title: 'Count the outcomes', body: <p>Of 1,000 messages, 20 are scams. The 25 alerts contain 15 scams and 10 ordinary messages. The detector misses 5 scams and correctly leaves 970 ordinary messages alone.</p> },
      { title: 'Consider the consequence', body: <p>A quick staff review may tolerate extra false alarms. Automatic deletion makes those false alarms more damaging.</p> },
      { title: 'Compare useful results', body: <p>Check missed scams, unnecessary work and customer impact at different thresholds. A higher headline accuracy is not enough.</p> },
    ]} />,
    misconception: 'A high overall score can hide failure on rare events or a smaller user group.',
    takeaway: 'Precision starts with alerts. Recall starts with real problems. Choose metrics and thresholds from the consequences of mistakes.',
    check: { prompt: 'A damage detector raises few false alarms but misses many damaged items. Which measure exposes that?', explanation: <p>Recall exposes the misses. A more sensitive threshold may increase false positives, so also check precision and the resulting review work.</p> },
    advanced: { title: 'F1, model fit and business evaluation', content: <>
      <p><strong>F1</strong> combines precision and recall using their harmonic mean: 2 × precision × recall ÷ (precision + recall). With 0.60 and 0.75, F1 is about 0.667, or 66.7%. It does not encode the organization’s actual costs for different mistakes.</p>
      <ComparisonTable caption="Diagnose whether a model generalizes" columns={['Concept', 'Meaning']} rows={[
        ['Generalization', 'Useful performance on new examples, not just development data.'], ['Overfitting', 'Strong training but weak validation performance can signal training-specific patterns.'],
        ['Underfitting', 'The model misses useful patterns even in training.'], ['Statistical bias and variance', 'Bias concerns simplifying assumptions that can create systematic error; variance concerns sensitivity to the training sample. Fairness needs separate analysis.'],
      ]} />
      <p>Use a useful baseline and consistent task definitions, labels and operating conditions. Check difficult cases and relevant subgroups. An unreliable label cannot provide a reliable evaluation target.</p>
      <p>Business measures include staff effort, customer feedback, development and operating costs, cost per user and return on investment (ROI). A more accurate model can still fail if it arrives too late or creates too much review work.</p>
    </> },
  },
  'aif-foundation-models-services': {
    intro: <p>A foundation model is trained broadly to support many later tasks. You can often use an existing model instead of training a new one. Decide whether the team needs model access, model-development tools or a ready-made business application.</p>,
    diagram: <LearningDiagram kind="service-choice" />,
    explanation: <>
      <LessonConcept title="Understand what the model receives">
        <p>A <strong>token</strong> is a unit a model processes: perhaps part of a word, a word or punctuation. <strong>Context</strong> is the information available for a request, including instructions, history and references.</p>
        <p>The context window has finite capacity. More text can add evidence, but also irrelevant information, cost and delay. Input and output limits depend on the model.</p>
      </LessonConcept>
      <LessonConcept title="Match the model to the material">
        <p>A language-only model does not automatically understand photos. A <strong>multimodal</strong> model supports more than one kind of input or output, such as text and images.</p>
        <p>Compare quality, language support, context capacity, response time and cost on representative work. Also check regional availability and data-handling requirements.</p>
      </LessonConcept>
      <LessonConcept title="Check whether a smaller service solves the job">
        <p>Speech-to-text may only need Amazon Transcribe. Varied report writing may need a foundation model. A narrow tabular prediction may fit traditional ML better than a large language model.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'helping a technician explain a repair',
    scenario: <TeachingSteps steps={[
      { title: 'Identify the inputs', body: <p>Notes and damage photos need image support. Text benchmarks alone do not establish that capability.</p> },
      { title: 'Send useful evidence', body: <p>Select relevant service history instead of every old record. Compare whether candidates preserve repair findings and answer in time.</p> },
      { title: 'Choose the service category', body: <p>Bedrock is a candidate for model access inside the application. Quick suits a business workspace; SageMaker AI suits developing and operating a specialized model.</p> },
    ]} />,
    misconception: 'Bedrock and SageMaker AI have overlapping capabilities. These are decision clues, not rules that only one service can support a task.',
    takeaway: 'Choose from the work the team must do. Then compare the complete workflow’s quality, delay and cost.',
    check: { prompt: 'A cheap text model handles tickets well. Does that establish that it can interpret damage photos?', explanation: <p>No. Verify image support and evaluate that task. Compare a suitable multimodal model or separate image-analysis component across the complete workflow.</p> },
    advanced: { title: 'model types, service names and token costs', content: <>
      <p>A large language model (LLM) is a language-focused foundation model, commonly using transformer architecture. Diffusion models learn a denoising process used for generation, often of images. An embedding represents content numerically to support comparisons such as similarity search.</p>
      <p>Foundation-model development includes data/model selection, evaluation, deployment and feedback. Pretraining creates broad capabilities; customization can adapt them. Applications can often begin with instructions and context rather than new training.</p>
      <ComparisonTable caption="AWS capabilities beyond the initial choice" columns={['Capability', 'Role or availability note']} rows={[
        ['SageMaker AI and JumpStart', 'SageMaker AI supports ML workflows; JumpStart offers model and solution starting points. SageMaker also names a broader data, analytics and AI platform.'],
        ['Quick and historical Q Business', 'Amazon Quick combines connected information, research, analysis and automation. Quick Sight is its business intelligence feature. Q Business closed to new customers July 31, 2026.'],
        ['Q Developer, Kiro, Strands, AgentCore', 'Q Developer and Kiro assist development; Q Developer CLI is now Kiro CLI. Strands is an agent framework; AgentCore provides agent operating services.'],
        ['Transcribe / Polly / Translate', 'Speech to text / text to speech / language translation.'], ['Comprehend / Lex', 'Text analysis / conversational interfaces.'], ['Rekognition / Textract', 'Image and video analysis / document text and structure extraction.'],
      ]} />
      <p>In a hypothetical pricing exercise, 2,000 input tokens at $1 per million cost $0.002. Another 500 output tokens at $4 per million cost $0.002. Total: $0.004 before other charges; these are teaching rates, not AWS prices.</p>
      <p>Retrieval, storage, hosting, tools, retries and repeated agent calls add costs. Prompt caching or batch options may change economics where supported. Provisioned capacity has different commitments from paying per request; the cheapest token rate need not give the cheapest useful result.</p>
    </> },
  },
  'aif-prompting-context': {
    intro: <p>A model needs a clear task and useful information. Prompt engineering shapes the request. Context engineering decides which instructions, documents, conversation history and tool results should accompany it.</p>,
    explanation: <>
      <LessonConcept title="Build a request a reader could follow too">
        <TeachingSteps steps={[
          { title: 'State the task', body: <p>Ask for a customer’s warranty summary rather than “Help with this.”</p> },
          { title: 'Supply useful evidence', body: <p>Provide current approved warranty terms and relevant purchase details.</p> },
          { title: 'Describe the output', body: <p>Request coverage, a supporting citation and missing information. Say how to handle insufficient evidence.</p> },
        ]} />
      </LessonConcept>
      <LessonConcept title="Use examples to clarify a pattern">
        <p><strong>Zero-shot</strong> prompting gives no worked example. One-shot gives one; few-shot gives several. Examples can clarify a format or distinction, but consume context and need representative cases.</p>
        <p>A prompt template keeps stable instructions while inserting changing information. Identify the model, prompt and settings so you can compare changes on the same cases.</p>
      </LessonConcept>
      <LessonConcept title="Instructions do not enforce permissions">
        <p>A retrieved document might command the assistant to ignore the policy. This is a <strong>prompt-injection</strong> risk: untrusted content tries to redirect the application.</p>
        <p>Limit accessible data and tools, treat external text as evidence, and validate outputs. Asking the model to resist attacks cannot enforce authorization.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'a warranty bot meets a misleading forum post',
    scenario: <TeachingSteps steps={[
      { title: 'Set a bounded task', body: <p>Use approved terms, cite a passage and identify missing details. Examples demonstrate the expected fields.</p> },
      { title: 'Keep enforcement outside the model', body: <p>A forum post claims every repair is free. The backend selects the authorized policy and gives this assistant no refund-issuing permission.</p> },
      { title: 'Evaluate a revision', body: <p>Compare a shorter prompt on the same cases. Check citations, missing information, format, token use and misleading inputs before adoption.</p> },
    ]} />,
    misconception: 'A low temperature cannot fix stale facts or missing permissions. It can make a wrong answer more consistent.',
    takeaway: 'Define the task, select current permitted context and test the result. Enforce access in trusted application services.',
    check: { prompt: 'An assistant cites last year’s policy even at a low temperature. What should you inspect first?', explanation: <p>Inspect retrieval, policy-version selection and context assembly. Consistent sampling cannot make an outdated source current.</p> },
    advanced: { title: 'generation settings, versions and attack types', content: <>
      <p>Temperature changes the sampling distribution; lower values usually favor more predictable choices. Top-p and top-k limit token candidates where supported. Maximum output tokens limits the generated response, not supplied input; names and ranges vary by model.</p>
      <p>Negative instructions describe unwanted behavior and need testing with positive instructions. Examples can introduce bias if they cover only easy cases. Select useful history, tool descriptions/results and memory while preserving source details and leaving capacity for the answer.</p>
      <p>Reasoning-oriented techniques, sometimes called chain-of-thought prompting, encourage intermediate problem solving. Ask for useful conclusions, assumptions and concise justifications. A long explanation does not establish correctness.</p>
      <p>Amazon Bedrock Prompt Management supports reusable prompts, variables, variants and versions. Record the evaluated prompt, model and inference configuration together. Include difficult, ordinary and unsafe requests in a stable test set.</p>
      <ComparisonTable caption="Recognize prompt-related risks" columns={['Risk', 'Meaning']} rows={[
        ['Injection or hijacking', 'Untrusted input redirects the application, including through retrieved material or tool responses.'], ['Jailbreaking', 'Attempts to bypass intended restrictions.'], ['Exposure', 'Instructions or sensitive information are revealed.'], ['Poisoning', 'Information the system relies on is contaminated.'],
      ]} />
    </> },
  },
  'aif-retrieval-customization': {
    intro: <p>A support assistant needs this month’s repair policy. You can retrieve that policy when it answers instead of repeatedly training it to memorize updates. That is the central idea of Retrieval Augmented Generation (RAG).</p>,
    diagram: <LearningDiagram kind="rag" />,
    explanation: <>
      <LessonConcept title="Separate instructions, information and learned behavior">
        <p><strong>Prompting</strong> tells the model what to do. <strong>RAG</strong> supplies retrieved evidence. <strong>Fine-tuning</strong> trains an existing model on examples, changing its learned parameters.</p>
        <p>The techniques can work together: a repair assistant might use a prompt for its task, RAG for current manuals and fine-tuning for a specialized response pattern.</p>
      </LessonConcept>
      <LessonConcept title="Check the source before judging the wording">
        <p>A fluent answer can faithfully repeat the wrong manual. Retrieval must find relevant, current material that this user may access.</p>
        <p>Then check that evidence supports the answer. RAG can reduce hallucinations, but neither retrieved text nor citations guarantees correctness.</p>
      </LessonConcept>
      <LessonConcept title="Choose the change the application needs">
        <p>Changing facts suggest better retrieval. A repeatable output format suggests trying a template and examples first. If that behavior remains unreliable, evaluate whether training justifies its data, compute and maintenance costs.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'finding the correct equipment manual',
    scenario: <TeachingSteps steps={[
      { title: 'Retrieve current facts', body: <p>Index manuals with product IDs and revision dates. Staff need a source for each maintenance instruction.</p> },
      { title: 'Find the failure', body: <p>The assistant retrieves an older product generation. Fix product/revision selection; greater fluency cannot repair the evidence.</p> },
      { title: 'Handle a separate behavior need', body: <p>Staff want a standard repair-note format. Test a template, then evaluate fine-tuning if needed while keeping retrieval for current facts.</p> },
    ]} />,
    misconception: 'Fine-tuning does not create a reliably current, source-cited document database. Retrieval and training address different needs.',
    takeaway: 'Retrieve current evidence. Consider training for learned behavior, and evaluate both parts of the application.',
    check: { prompt: 'A benefits bot writes well but must cite policies that change monthly. What addresses that need?', explanation: <p>Use RAG for current evidence and sources. Maintain versions, dates, permissions and index updates, then verify the retrieved passages support the answer.</p> },
    advanced: { title: 'retrieval stores and customization methods', content: <>
      <p>A common vector pipeline divides documents into chunks and stores embeddings, numerical representations used for similarity search. Tiny chunks can lose context; large chunks can add irrelevant material. Keep source IDs, effective dates, citations and access metadata.</p>
      <p>Amazon Bedrock Knowledge Bases supports RAG. Vector options include Amazon OpenSearch Service and supported Aurora/RDS for PostgreSQL capabilities. Amazon Neptune supports graph-based retrieval; vector support depends on the offering and integration.</p>
      <ComparisonTable caption="Compare model-customization methods" columns={['Method', 'What changes']} rows={[
        ['In-context learning', 'Instructions/examples supplied at inference; they consume context and tokens.'], ['Fine-tuning / instruction tuning', 'Existing parameters learn from curated task or instruction/response examples.'],
        ['Continued pretraining', 'An existing model receives additional domain material; check broader capability changes.'], ['Pretraining from scratch', 'A base model is learned from a broad corpus; substantial data, expertise and compute are needed.'], ['Distillation', 'A smaller student learns from teacher knowledge or outputs; compare quality and lower serving requirements.'],
      ]} />
      <p>Transfer learning reuses previously learned capabilities. Reinforcement learning from human feedback (RLHF) uses human preferences to help align behavior. Neither removes the need for evaluation and safeguards.</p>
      <p>Curate permitted, representative training data and an independent evaluation set. Check labels or target responses when the method needs them. Compare preparation, training, hosting, retrieval and maintenance costs; provide an insufficient-evidence response and escalation path.</p>
    </> },
  },
  'aif-agents-evaluation': {
    intro: <p>An agent can choose steps and use tools to pursue a goal. A booking assistant might look up a reservation and call a change-booking tool. Saying a booking changed is different from confirming that the authorized change succeeded.</p>,
    diagram: <LearningDiagram kind="agent" />,
    explanation: <>
      <LessonConcept title="Give the agent’s parts different jobs">
        <p>The model helps choose a next step. A tool performs a defined lookup or action. Memory supplies selected information from this interaction or earlier ones.</p>
        <p><strong>Model Context Protocol (MCP)</strong> lets compatible clients discover and use capabilities exposed by servers. It grants no permission or safety guarantee; authentication and authorization still apply.</p>
      </LessonConcept>
      <LessonConcept title="Use autonomy only where it helps">
        <p>A workflow defines an expected sequence. An agent can choose some steps from observations. More agents or freedom also add coordination, delay, cost and opportunities for mistakes.</p>
      </LessonConcept>
      <LessonConcept title="Check the completed task, not only the final sentence">
        <p>Check tool selection, arguments, permissions and resulting state. A <strong>trace</strong> records intermediate steps so you can find a failure.</p>
        <p>Measure correct task completion, user satisfaction, escalation and cost per completed task. A polished response or judge score cannot establish that the right action happened.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'a flight change that never happened',
    scenario: <TeachingSteps steps={[
      { title: 'Define the authorized change', body: <p>Retrieve fare rules, look up permitted booking details and obtain confirmation for the proposed change.</p> },
      { title: 'Inspect the result', body: <p>The tool returns an error, but the agent says the flight changed. The message sounds good; the booking remains unchanged.</p> },
      { title: 'Test real outcomes', body: <p>Add timeouts, unavailable flights and unauthorized bookings. Verify confirmed state changes, not just convincing messages.</p> },
    ]} />,
    misconception: 'Memory supplies context, not permission. A remembered preference cannot authorize a tool action.',
    takeaway: 'Bound actions and verify what tools actually did. Evaluate the workflow against the user’s authorized goal.',
    check: { prompt: 'An agent writes excellent answers but submits the wrong order quantity. What should you test?', explanation: <p>Check tool arguments and the created order against the confirmed request. Include ambiguous units and approval cases; inspect traces and correct completion.</p> },
    advanced: { title: 'agent services, memory and evaluation methods', content: <>
      <p>Multi-agent patterns include supervisor delegation, sequential specialist handoffs and parallel workers combining results. Define inputs, outputs and disagreement handling. Compare communication and context costs with a simpler design.</p>
      <p>Short-term memory supports an interaction; long-term memory retains selected information across interactions. Both need ownership, access rules and retention decisions.</p>
      <p>Strands Agents is a development framework. Amazon Bedrock AgentCore offers runtime, memory, gateway, identity and observability services. Its Gateway can expose tools through MCP-compatible interfaces.</p>
      <p>Bedrock Agents Classic is closed to new customers; existing customers continue, and AWS points to AgentCore for similar capabilities. Distinguish the model, orchestration, tool connection and hosting even when a product combines them.</p>
      <ComparisonTable caption="Use different evaluation evidence for different failures" columns={['Method', 'Evidence and limit']} rows={[
        ['ROUGE / BLEU', 'Reference-text overlap signals, often for summaries / translation; not proof of factual correctness.'], ['BERTScore', 'Semantic similarity using learned representations; similarity is not truth.'],
        ['Human evaluation', 'Task/domain judgment with representative examples and explicit criteria.'], ['LLM-as-a-judge', 'A second model scores against a rubric; validate errors, preferences and wording sensitivity.'], ['Application evaluation', 'Retrieval relevance, evidence coverage, groundedness, citations, safe tool actions and completed tasks.'],
      ]} />
      <p>Amazon Bedrock evaluations supports automated, human and model-judge approaches. Keep cases and model/prompt versions comparable; monitor new failures. Consider latency, productivity, satisfaction and cost per interaction alongside safety, completion and unnecessary escalation.</p>
    </> },
  },
  'aif-responsible-ai': {
    intro: <p>Responsible AI asks how a system affects people who use it or are judged by it. Look beyond an overall score: who experiences errors, and how can they get a mistake corrected?</p>,
    diagram: <LearningDiagram kind="responsible-review" />,
    explanation: <>
      <LessonConcept title="Look for people hidden by an average">
        <p><strong>Fairness</strong> concerns unjust differences in treatment or outcomes. <strong>Inclusivity</strong> asks whether varied users and needs are represented.</p>
        <p>Inspect data coverage, labels and relevant group error rates. More data or equal group counts alone cannot establish fairness.</p>
      </LessonConcept>
      <LessonConcept title="Explain the system and the decision">
        <p><strong>Transparency</strong> describes purpose, development, limitations and operation. <strong>Explainability</strong> concerns factors behind behavior or a prediction.</p>
        <p>Documentation can help without explaining every decision. A feature that influenced a prediction is not automatically its real-world cause.</p>
      </LessonConcept>
      <LessonConcept title="Give human review a way to change outcomes">
        <p>Provide evidence, time and authority to reviewers. Explain appropriate use and limitations, offer accessible feedback paths, and assign someone to investigate problems.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'urgent messages in a less common language',
    scenario: <TeachingSteps steps={[
      { title: 'Find the unequal error', body: <p>A support classifier looks accurate overall but misses urgent messages in a less common language.</p> },
      { title: 'Investigate the evidence', body: <p>Qualified reviewers find too few examples and unreliable urgency labels. Audit labels and compare missed-urgency rates across language groups.</p> },
      { title: 'Improve and allow correction', body: <p>Test representative data and suitable language support. Let staff override wrong priorities and customers request review; document remaining limits.</p> },
    ]} />,
    misconception: 'A model card, an open license or a fairness tool does not certify appropriate treatment of every user.',
    takeaway: 'Measure who experiences errors, investigate why, and give people a practical route to correct the outcome.',
    check: { prompt: 'Similar accuracy, but more errors for a smaller language group: what should the team examine?', explanation: <p>Investigate representation, labels, language support and consequences. Compare relevant group results and improvements with qualified reviewers instead of selecting from the overall average.</p> },
    advanced: { title: 'responsibility measures, documentation and safeguards', content: <>
      <p>Robustness concerns difficult or changed conditions; safety concerns harmful effects; veracity concerns truthful, supportable information. Bias can enter through collection, historical decisions, labels, features or deployment. Curated diverse sources and human audits provide evidence, not guarantees.</p>
      <p>Amazon SageMaker Model Cards documents intended use, evaluation and risks. SageMaker Clarify provides bias and prediction-explanation capabilities, but is closed to new customers while existing customers continue. Feature attribution supports investigation without establishing causation.</p>
      <p>Bedrock evaluations compares behavior; Bedrock Guardrails provides configurable filtering and other safeguards. Neither guarantees every output is safe or fair. Open models still need license, training-information, intended-use and evidence review.</p>
      <p>Balance performance, interpretability, safety and usefulness. Generative AI raises intellectual-property, hallucination, biased-output, reliance and trust risks. Check permitted input/output uses and establish review before publishing or acting.</p>
      <p>Sustainability includes model size, compute and unnecessary inference. Test whether a smaller model or simpler approach meets required quality with fewer resources. Human-centered design also needs accessible explanations, feedback and correction mechanisms.</p>
    </> },
  },
  'aif-security-governance': {
    intro: <p>A policy assistant should read only documents its user may see and perform only permitted actions. Security enforces those boundaries. Governance assigns people, rules and evidence to keep those controls working over time.</p>,
    diagram: <LearningDiagram kind="security-boundaries" />,
    explanation: <>
      <LessonConcept title="Start with identity and permission">
        <p><strong>Authentication</strong> checks identity. <strong>Authorization</strong> checks permission. Preserve the requesting user’s boundaries when retrieving documents or using tools.</p>
        <p><strong>Least privilege</strong> means granting only needed actions and data. A model interpreting a request cannot replace a trusted permission check.</p>
      </LessonConcept>
      <LessonConcept title="Protect more than the connection">
        <p>Encryption protects stored or transmitted data. Private connectivity controls the network path. Neither decides whether an employee may read a salary record.</p>
        <p>Validate inputs, retrieved material and tool results. Check important claims against authorized sources, then validate arguments before another action.</p>
      </LessonConcept>
      <LessonConcept title="Make responsibility and evidence explicit">
        <p>Assign owners for access, retention, incidents and regular review. Keep protected evidence of versions, sources, access decisions and actions so the team can investigate problems.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'keeping payroll out of a staff assistant',
    scenario: <TeachingSteps steps={[
      { title: 'Enforce document access', body: <p>Staff may read the handbook but not salary records. Filter retrieval by employee permissions before passages reach the model.</p> },
      { title: 'Limit possible actions', body: <p>A malicious document asks the bot to email its sources outside. Give this assistant approved search access, not email-sending capability.</p> },
      { title: 'Keep protected evidence', body: <p>Record access decisions and versions under a retention policy. An owner checks that withdrawing a source removes it from future retrieval.</p> },
    ]} />,
    misconception: 'Encryption, a private endpoint and provider reports do not make an application automatically authorized or compliant.',
    takeaway: 'Enforce access before information reaches the model or tools act. Assign owners and keep protected review evidence.',
    check: { prompt: 'An encrypted, privately connected bot shows an employee restricted documents. Which boundary failed?', explanation: <p>Authorization failed in data access or retrieval. Enforce employee permissions before content reaches the model; encryption and private transport cannot supply that decision.</p> },
    advanced: { title: 'AWS controls, data protection and governance evidence', content: <>
      <p>Under shared responsibility, AWS protects cloud infrastructure; customers control content, access configuration and application use. AWS Identity and Access Management (IAM) roles/policies enforce service permissions. AgentCore Identity supports identity/credentials; Policy in AgentCore can apply agent-tool rules.</p>
      <ComparisonTable caption="Match a control to its actual boundary" columns={['Capability', 'Purpose and limit']} rows={[
        ['Encryption / TLS', 'Protect stored data / data in transit with suitable key controls; do not determine document rights.'], ['AWS PrivateLink', 'Private connectivity to supported services; identity and document permissions still apply.'],
        ['Amazon Macie', 'Sensitive-data discovery in Amazon S3; configure protection and permissions separately.'], ['Bedrock Guardrails', 'Configured filtering and grounding checks; independently validate important claims/actions.'],
        ['AWS CloudTrail / AWS Config', 'Supported API activity / resource configuration history and compliance-rule evaluation. Complete conversation logs need deliberate configuration.'], ['Amazon Inspector', 'Vulnerability findings for supported workloads, not every model behavior.'], ['AWS Artifact / Trusted Advisor', 'Provider reports and agreements / supported best-practice checks, supporting the customer’s own compliance process.'],
      ]} />
      <p>Minimize personal information in data, prompts, memory and logs. Masking, redaction or pseudonymization may help; linkable data still needs protection. Add access restrictions, integrity checks and review of relevant privacy requirements.</p>
      <p>Data lineage records origins and transformations. Catalogs, citations, source/model versions and documentation support investigation. Governance defines permitted uses, approvals, review cadence, incident processes and training, including data location, retention and deletion rules.</p>
      <p>The AWS Generative AI Security Scoping Matrix distinguishes external application use from increasingly customized systems. More control creates more responsibility. Review configuration, including cross-Region processing, with appropriate specialists when sources or tools change.</p>
      <p>Grounding compares output with evidence; output validation checks claims or structured fields. Test confidence signals against actual outcomes: a confident tone or self-reported score is not proof. Prevent prompt injection and data leakage with multiple controls rather than one instruction.</p>
    </> },
  },
}

export function AifLessons() {
  return <>{AIF_LESSONS.map(lesson => <LearningLesson key={lesson.id} lesson={lesson} content={AIF_LESSON_CONTENT[lesson.id]} />)}</>
}
