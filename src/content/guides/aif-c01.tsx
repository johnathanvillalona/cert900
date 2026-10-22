import { AIF_LESSONS, type AifLessonId } from '@/data/guide-lessons'
import { ComparisonTable, LearningLesson, LessonConcept, TeachingSteps, type LessonContent } from '@/components/GuideLearningContent'
import { LearningDiagram } from '@/components/GuideLearningDiagrams'

// Core teaching stays visible. Extensions retain depth without repeating the lesson.
export const AIF_LESSON_CONTENT: Readonly<Record<AifLessonId, LessonContent>> = {
  'aif-ai-ml-approaches': {
    intro: <p>Artificial intelligence (AI) helps computers recognize speech, make predictions and perform other tasks that usually need human judgment. One way to build AI is machine learning (ML), which learns patterns from examples. Before choosing an approach, think about what you actually want the computer to produce.</p>,
    diagram: <LearningDiagram kind="ai-map" />,
    explanation: <>
      <LessonConcept title="First decide what the answer should look like">
        <p>When you sort a support ticket into an urgent or routine queue, you’re solving a <strong>classification</strong> problem. If you need to estimate how many hours a repair will take, <strong>regression</strong> helps you predict that number.</p>
        <p>Sometimes you want to discover groups without deciding their categories in advance; that’s <strong>clustering</strong>. For a draft reply, <strong>generative AI</strong> can create the content. An exact tax calculation, though, is usually better handled by a rule or formula.</p>
      </LessonConcept>
      <LessonConcept title="Then ask what examples you have">
        <p>A <strong>label</strong> is the known answer attached to an example, such as the final repair time for a past job. Supervised learning learns from these labeled examples. Unsupervised learning looks for patterns when those answer labels aren’t available.</p>
        <p>Reinforcement learning works through actions and rewards. A warehouse robot, for example, might receive rewards for moving safely and penalties for collisions. That feedback helps it learn which actions work well, without a labeled answer for every situation.</p>
      </LessonConcept>
      <LessonConcept title="Learning and using a model are different jobs">
        <p>During <strong>training</strong>, the system learns a model that turns inputs into predictions or other outputs. When a customer books a repair and the model estimates the time, that’s <strong>inference</strong>: using what it has learned on a new input.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'three requests at a repair shop',
    scenario: <TeachingSteps steps={[
      { title: 'Calculate an invoice', body: <p>The finance team already has a sales-tax rule. A formula applies that rule consistently, so there’s no need to introduce the uncertainty of a model.</p> },
      { title: 'Estimate labor hours', body: <p>The shop’s records show how long previous repairs took. Because each job has a known final time, the team can use those examples for supervised regression.</p> },
      { title: 'Discover customer groups', body: <p>The marketing team has service histories but hasn’t defined customer categories. Clustering can help them discover useful groups. If staff also want written summaries, a generative model could handle that separate task.</p> },
    ]} />,
    misconception: 'A generative model isn’t the starting point for every AI project. The right choice depends on the result you need, the evidence you have and what happens if the answer is wrong.',
    takeaway: 'Start with the result you need. Whether it’s an exact calculation, a category, a number, a group or new content will help you choose the right approach.',
    check: { prompt: 'You have customer histories, but no one has assigned customers to categories yet. How could you find useful groups?', explanation: <p>Clustering would help you find customers with similar patterns without needing category labels first. If you later have trustworthy labels and want to predict a category for each new customer, you would use supervised classification.</p> },
    advanced: { title: 'how data, timing and related AI ideas affect your choice', content: <>
      <LessonConcept title="Recognize the shape and quality of the data">
        <p>Structured data follows a defined layout, or schema, such as order-date and price columns. A complaint letter is unstructured because it doesn’t follow that fixed table layout. Your inputs might also include measurements over time, called time series, as well as images or audio.</p>
        <p>Ask whether the examples represent the people and conditions the system will encounter. Adding more records won’t help much if they still leave out important users or contain incorrect labels.</p>
      </LessonConcept>
      <ComparisonTable caption="Choose when a prediction must arrive" columns={['Delivery choice', 'When it fits']} rows={[
        ['Real-time inference', 'The customer needs an estimate while booking a repair.'], ['Batch inference', 'The marketing team can wait while a collected set of records is processed overnight.'],
        ['Asynchronous inference', 'A long document can be accepted now and analyzed later, without making the user wait for the whole job.'], ['Serverless inference', 'The provider manages scaling, so your team doesn’t maintain an always running server. This describes how inference is hosted; it doesn’t mean the work must run in a batch.'],
      ]} />
      <p>You’ll also need to consider response time (latency), traffic patterns, input size and cost. Traditional ML may suit a narrow prediction from structured records, while foundation models can handle varied language or image tasks. Explainability, regulatory requirements and operating limits can affect the choice too.</p>
      <p>Deep learning uses neural networks with many layers. You’ll also encounter computer vision for image or video tasks, and natural language processing (NLP) for work with human language. A large language model (LLM) is one kind of model used for language tasks.</p>
      <p>An agent takes steps toward a goal and may combine a generative model with tools. These ideas can overlap: an agent might use a language model built with deep learning. They describe different aspects of the system.</p>
    </> },
  },
  'aif-ml-lifecycle': {
    intro: <p>A useful ML project starts with a decision someone needs to make. For a bakery ordering tomorrow’s ingredients, a forecast only helps if it arrives before the order is placed. That practical need should guide the model’s development.</p>,
    diagram: <LearningDiagram kind="lifecycle" />,
    explanation: <>
      <LessonConcept title="Keep some examples out of training">
        <p>Use training data to teach the model, then validation data to compare your choices. Once you’ve selected an approach, check it with a held-back test set: examples that weren’t used to make those decisions.</p>
        <p>If you keep changing the model to improve its test results, you’re also learning from the test set. It becomes less useful as an independent check of how the model will perform on new data.</p>
      </LessonConcept>
      <LessonConcept title="Use only information available at decision time">
        <p><strong>Data leakage</strong> happens when development uses information that wouldn’t be available for the real prediction. For example, a model predicting late deliveries mustn’t see the final delivery date: that would give away the outcome.</p>
        <p>Try to make evaluation resemble everyday use. When forecasting future demand, testing on later weeks can reveal problems that a random mix of older records might miss.</p>
      </LessonConcept>
      <LessonConcept title="Keep watching after launch">
        <p>After launch, watch errors, response time, cost and the results that matter to the business. If something changes, investigate the cause before deciding to retrain. A new model still needs to prove it works better before it replaces the current one.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'forecasting sandwiches for a bakery',
    scenario: <TeachingSteps steps={[
      { title: 'Decide what a useful forecast would achieve', body: <p>The bakery needs its forecast before ordering ingredients. A useful result would mean fewer unsold sandwiches without leaving more customers unable to buy lunch.</p> },
      { title: 'Check what the sales records really mean', body: <p>Use earlier sales and information available before the ordering deadline. Zero sales while the shop was closed mean something different from low sales after it ran out of sandwiches. The team needs to account for those differences.</p> },
      { title: 'Test, then monitor', body: <p>Test the forecast on later weeks, then watch it after launch. If fewer people start coming to nearby offices, investigate the rising errors and compare a revised model before releasing it.</p> },
    ]} />,
    misconception: 'Launching a model is only part of the work. The people using it, the incoming data and the business itself can all change.',
    takeaway: 'Know what success means before training starts. Keep evaluation separate from learning, and let the evidence from everyday use guide any updates.',
    check: { prompt: 'A model predicts which customers will cancel next month, but one of its inputs is their cancellation confirmation email. Why is that a problem?', explanation: <p>The email already tells you the customer has canceled. It wouldn’t be available when the prediction is needed, so it leaks the outcome into development. Remove it and evaluate with information you would actually have before the decision.</p> },
    advanced: { title: 'how teams prepare data and keep models running', content: <>
      <ComparisonTable caption="Distinguish preparation from training" columns={['Work', 'Purpose']} rows={[
        ['Exploratory data analysis', 'Explore how the values are spread out, where information is missing and which records or relationships need a closer look.'], ['Preprocessing', 'Clean or transform the inputs so the model can use them.'],
        ['Feature engineering', 'Turn the available data into useful inputs, such as the number of days since a customer’s last purchase.'], ['Training', 'Training learns the model’s parameters. Hyperparameters are settings that guide training, such as the learning rate; they aren’t learned in the same way.'],
      ]} />
      <p>If the kinds of inputs change, that’s <strong>data drift</strong>. If the relationship between inputs and the outcome changes, that’s <strong>concept drift</strong>. Either is a reason to investigate; neither automatically tells you that retraining is the right fix.</p>
      <p>Machine learning operations (MLOps) helps a team repeat this work reliably. Keeping track of datasets, code, model versions, settings, evaluations and approvals makes a result easier to reproduce. Repeatable pipelines also reduce manual errors, rework and technical debt.</p>
      <p>With a managed application programming interface (API), your software can request model results without operating all the serving infrastructure. Self-hosting gives you more control, but your team must manage capacity, patching, scaling and availability. Open models still need license, security and suitability checks; training from scratch takes much more data and computing power.</p>
      <p>On AWS, Amazon SageMaker AI provides tools for developing, training, deploying and monitoring models. Amazon S3 can store the datasets and model files. Amazon Bedrock provides managed access to foundation models, so the application team doesn’t have to operate the model servers.</p>
    </> },
  },
  'aif-model-performance': {
    intro: <p>A scam detector can look impressive on paper and still let important messages slip through. To understand its performance, ask two questions: “How often is an alert right?” and “How many of the real scams did it find?”</p>,
    diagram: <LearningDiagram kind="precision-recall" />,
    explanation: <>
      <LessonConcept title="Give each kind of mistake a name">
        <p>In this example, a “positive” prediction means the detector thinks a message is a scam. A true positive is a scam it correctly flags; a false positive is an ordinary message it flags by mistake.</p>
        <p>A false negative is a scam that slips through. A true negative is an ordinary message correctly left alone. You can arrange these four counts in a table called a <strong>confusion matrix</strong>.</p>
      </LessonConcept>
      <LessonConcept title="Ask what each percentage is counting">
        <p>For <strong>precision</strong>, look at the alerts: 15 of the 25 alerts are genuine scams, so precision is 60%. For <strong>recall</strong>, look at all the real scams: the detector found 15 of 20, so recall is 75%.</p>
        <p>Accuracy includes every correct prediction. This detector gets 985 of 1,000 messages right, or 98.5%. That sounds excellent, but because scams are rare, calling every message ordinary would already give 98% accuracy.</p>
      </LessonConcept>
      <LessonConcept title="Choose the measure that fits the action">
        <p>Missing a scam and deleting an ordinary message have different consequences. The <strong>decision threshold</strong> is the score cutoff for raising an alert. Moving that cutoff can catch more scams while also raising more false alarms, so you need to consider what happens after an alert.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'reviewing alerts versus deleting messages',
    scenario: <TeachingSteps steps={[
      { title: 'Count the outcomes', body: <p>Of the 1,000 messages, 20 are scams. The detector raises 25 alerts: 15 scams and 10 ordinary messages. That leaves 5 missed scams and 970 ordinary messages correctly left alone.</p> },
      { title: 'Consider the consequence', body: <p>If a staff member reviews each alert, a few extra false alarms might be manageable. If the system deletes flagged messages automatically, those same mistakes could remove important customer emails.</p> },
      { title: 'Compare useful results', body: <p>Compare how many scams slip through, how much review work is created and how customers are affected at different thresholds. Those results tell you more than a small increase in headline accuracy.</p> },
    ]} />,
    misconception: 'An overall score can hide a serious weakness. Always check the rare cases and smaller user groups that matter to the decision.',
    takeaway: 'Precision tells you how often an alert is right; recall tells you how many real problems you found. Choose your measures and threshold with the consequences of mistakes in mind.',
    check: { prompt: 'A damage detector rarely raises a false alarm, but it misses many damaged items. Which measure would help you see that weakness?', explanation: <p>Recall would show how many damaged items the detector is finding. Making it more sensitive may catch more damage, but could also create more false positives. You would need to check precision and the extra review work too.</p> },
    advanced: { title: 'how F1, model fit and business results help you evaluate a model', content: <>
      <p><strong>F1</strong> combines precision and recall using their harmonic mean: 2 × precision × recall ÷ (precision + recall). In our example, 0.60 and 0.75 give an F1 of about 0.667, or 66.7%. It’s useful for comparing that balance, but it doesn’t represent the actual business cost of each mistake.</p>
      <ComparisonTable caption="Diagnose whether a model generalizes" columns={['Concept', 'Meaning']} rows={[
        ['Generalization', 'The model continues to work well on new examples, rather than only on the data used during development.'], ['Overfitting', 'The model may have learned patterns peculiar to the training data if it performs well there but poorly on validation data.'],
        ['Underfitting', 'The model hasn’t learned enough useful patterns, even from its training data.'], ['Statistical bias and variance', 'Statistical bias concerns assumptions that can lead to systematic errors. Variance describes how sensitive the model is to its training sample. These ideas don’t replace a separate review of fairness.'],
      ]} />
      <p>Compare the model with a useful baseline under the same task definitions, labels and operating conditions. Include difficult cases and relevant subgroups. If the labels themselves are unreliable, your evaluation won’t give a reliable picture of performance.</p>
      <p>The business also needs to consider staff effort, customer feedback, development and operating costs, cost per user and return on investment (ROI). A more accurate prediction can still be unhelpful if it arrives too late or creates more work than the team can handle.</p>
    </> },
  },
  'aif-foundation-models-services': {
    intro: <p>A foundation model has learned from a broad range of data, so it can be adapted to many tasks. That means you can often start with an existing model. Your next decision is what the team needs around it: access from an application, tools to develop a model, or a business application people can use directly.</p>,
    diagram: <LearningDiagram kind="service-choice" />,
    explanation: <>
      <LessonConcept title="Understand what the model receives">
        <p>Models process text in units called <strong>tokens</strong>, which might be parts of words, whole words or punctuation. The <strong>context</strong> is the information available for a request, including its instructions, conversation history and reference material.</p>
        <p>Only so much information fits in a model’s context window. Adding more text might provide useful evidence, but it can also introduce distractions, increase cost and slow the response. Check the input and output limits of the model you’re considering.</p>
      </LessonConcept>
      <LessonConcept title="Match the model to the material">
        <p>A model that works well with text may not be able to interpret a photo. A <strong>multimodal</strong> model supports more than one kind of input or output, such as text and images. You still need to check which combinations the particular model supports.</p>
        <p>Try candidate models on work that resembles what your users will do. Compare answer quality, language support, context capacity, response time and cost, then check whether regional availability and data-handling rules fit your situation.</p>
      </LessonConcept>
      <LessonConcept title="Consider whether a specialized service is enough">
        <p>If you only need to turn speech into text, Amazon Transcribe may be enough. Writing varied reports may call for a foundation model. For a narrow prediction from table-based records, traditional ML might be a better fit than a large language model.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'helping a technician explain a repair',
    scenario: <TeachingSteps steps={[
      { title: 'Identify the inputs', body: <p>The technician wants help with written notes and damage photos. A model’s performance on text tests won’t tell you whether it can interpret those images, so check image support and test it with representative photos.</p> },
      { title: 'Send useful evidence', body: <p>Include the relevant service history rather than every old record. As you compare models, check whether their reports preserve the repair findings and arrive quickly enough for the technician to use them.</p> },
      { title: 'Choose the service category', body: <p>For model access within the repair application, the team could consider Bedrock. If they need a business workspace, Quick may fit; if they need to develop and operate a specialized model, they could consider SageMaker AI.</p> },
    ]} />,
    misconception: 'Bedrock and SageMaker AI can support some of the same work. Use these examples to guide your investigation, then check the features and responsibilities of the option you choose.',
    takeaway: 'Choose the service around the work your team needs to do, then test the whole workflow. A good model choice still needs to deliver useful results at an acceptable speed and cost.',
    check: { prompt: 'An inexpensive text model handles support tickets well. What would you need to check before using it to interpret damage photos?', explanation: <p>First, check whether the model supports images at all, then evaluate it on the photos and questions users will provide. You could compare a suitable multimodal model with a separate image-analysis component. Judge the complete workflow rather than assuming strong text results will carry over.</p> },
    advanced: { title: 'model types, other AWS services and an example of token costs', content: <>
      <p>A large language model (LLM) is a foundation model focused on language, commonly built with transformer architecture. Diffusion models learn to remove noise and use that process to generate content, often images. An embedding represents content as numbers so a system can compare it with other content, such as during similarity search.</p>
      <p>Developing with a foundation model still involves choosing data and models, evaluating results, deploying the application and learning from feedback. Pretraining gives the model broad capabilities, which customization can adapt. For many applications, it makes sense to try instructions and context before undertaking new training.</p>
      <ComparisonTable caption="Other AWS capabilities you’ll encounter" columns={['Capability', 'What it does and what to check']} rows={[
        ['SageMaker AI and JumpStart', 'SageMaker AI supports the ML workflow, and JumpStart provides models and solutions you can use as starting points. You’ll also see the SageMaker name used for a broader data, analytics and AI platform.'],
        ['Quick and historical Q Business', 'Amazon Quick brings connected information, research, analysis and automation together. Quick Sight is its business intelligence feature. Older resources may mention Q Business, which closed to new customers on July 31, 2026.'],
        ['Q Developer, Kiro, Strands, AgentCore', 'Q Developer and Kiro assist with development; the Q Developer CLI is now Kiro CLI. Strands provides a framework for building agents, while AgentCore provides services for running them.'],
        ['Transcribe / Polly / Translate', 'Transcribe turns speech into text, Polly turns text into speech, and Translate translates between languages.'], ['Comprehend / Lex', 'Comprehend analyzes text, while Lex helps build conversational interfaces.'], ['Rekognition / Textract', 'Rekognition analyzes images and video. Textract extracts text and structure from documents.'],
      ]} />
      <p>For a pricing exercise, suppose input costs $1 per million tokens and output costs $4 per million. Sending 2,000 input tokens would cost $0.002, and generating 500 output tokens would add $0.002. That’s $0.004 before other charges; these are invented teaching rates, not AWS prices.</p>
      <p>Remember to include retrieval, storage, hosting, tools, retries and repeated agent calls in the cost. Prompt caching or batch options may help where they’re supported. Reserving provisioned capacity also involves different commitments from paying per request, so the lowest token price won’t necessarily produce the lowest cost for a useful result.</p>
    </> },
  },
  'aif-prompting-context': {
    intro: <p>A model is easier to work with when you give it a clear task and the information it needs. Prompt engineering is how you shape that request. Context engineering is the wider job of choosing the instructions, documents, conversation history and tool results that should accompany it.</p>,
    explanation: <>
      <LessonConcept title="Make the request clear enough for someone else to follow">
        <TeachingSteps steps={[
          { title: 'State the task', body: <p>Ask for a summary of the customer’s warranty coverage. “Help with this” leaves the model to guess what you want.</p> },
          { title: 'Supply useful evidence', body: <p>Include the current approved warranty terms and the purchase details needed to work out which terms apply.</p> },
          { title: 'Describe the output', body: <p>Ask for the coverage, a citation to the terms and any missing information. Explain what the assistant should do when the evidence isn’t sufficient, rather than leaving it to fill the gaps.</p> },
        ]} />
      </LessonConcept>
      <LessonConcept title="Use examples to clarify a pattern">
        <p>With <strong>zero-shot</strong> prompting, you describe the task without giving a worked example. One-shot prompting adds one example; few-shot prompting adds several. Examples help demonstrate a format or distinction, but they use context space and need to reflect the cases you care about.</p>
        <p>A prompt template lets you reuse the instructions while changing details such as the customer’s purchase. Keep track of the model, prompt and settings you used, so you can compare revisions on the same examples.</p>
      </LessonConcept>
      <LessonConcept title="Instructions do not enforce permissions">
        <p>A document the assistant retrieves might contain an instruction to ignore the policy. That’s a <strong>prompt-injection</strong> risk: text that should be treated as evidence is trying to take control of the task.</p>
        <p>The application needs to limit which data and tools are available and check what the model produces. It should treat external text as evidence to examine. Instructions asking a model to resist attacks can help, but they cannot replace authorization checks.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'a warranty bot meets a misleading forum post',
    scenario: <TeachingSteps steps={[
      { title: 'Explain what the bot should return', body: <p>The bot should use approved terms, cite the relevant passage and point out missing details. A few examples show it how to organize those parts of the answer.</p> },
      { title: 'Keep policy and permissions under application control', body: <p>A forum post tells the bot to treat every repair as free. The application still chooses the approved policy, and this assistant has no permission to issue refunds. The forum text can’t grant that permission.</p> },
      { title: 'Evaluate a revision', body: <p>Before adopting a shorter prompt, compare it on the same test cases. Check its citations, handling of missing information, format and token use, including cases with misleading inputs.</p> },
    ]} />,
    misconception: 'Lowering temperature won’t update an old policy or fix a permission problem. You may simply get the same kind of wrong answer more consistently.',
    takeaway: 'Give the model a clear task and current information the user is allowed to access. Then test its work, while keeping permission checks in trusted parts of the application.',
    check: { prompt: 'You lower the temperature, but the assistant still cites last year’s policy. Where would you look for the problem first?', explanation: <p>Check which policy is being retrieved, how its version is selected and what reaches the model’s context. If the assistant is given an outdated source, a more predictable response won’t make that source current.</p> },
    advanced: { title: 'how generation settings and prompt testing work', content: <>
      <p>Temperature changes how likely the model is to sample different tokens; lower values usually favor more predictable choices. Top-p and top-k narrow the candidate tokens where supported. Maximum output tokens limits the response the model generates, not the input you supply, and the available settings vary by model.</p>
      <p>Negative instructions say what to avoid, but you still need to test them alongside instructions for what to do. Examples covering only easy cases can introduce bias. When choosing history, tool details and memory, keep useful source information and leave enough context capacity for the answer.</p>
      <p>Some reasoning techniques, often called chain-of-thought prompting, encourage intermediate problem solving. For a useful response, ask for conclusions, assumptions and a concise justification you can check. A lengthy explanation can still be wrong.</p>
      <p>Amazon Bedrock Prompt Management lets you maintain reusable prompts with variables, variants and versions. Record the prompt, model and generation settings that you evaluated together. Use a stable test set with ordinary, difficult and unsafe requests so improvements are easier to judge.</p>
      <ComparisonTable caption="Recognize prompt-related risks" columns={['Risk', 'Meaning']} rows={[
        ['Injection or hijacking', 'Text from a user, document or tool response tries to redirect the application away from its intended task.'], ['Jailbreaking', 'Someone tries to get the model to bypass its intended restrictions.'], ['Exposure', 'The system reveals instructions or sensitive information that should have stayed protected.'], ['Poisoning', 'Information the system relies on is deliberately contaminated, which can influence later results.'],
      ]} />
    </> },
  },
  'aif-retrieval-customization': {
    intro: <p>A support assistant needs this month’s repair policy, not the version from last year. Rather than retraining the model whenever the policy changes, you can retrieve the current document when it answers. This is the central idea of Retrieval Augmented Generation (RAG).</p>,
    diagram: <LearningDiagram kind="rag" />,
    explanation: <>
      <LessonConcept title="Decide whether you need instructions, facts or a learned behavior">
        <p>With <strong>prompting</strong>, you tell the model what you want it to do. With <strong>RAG</strong>, you give it evidence retrieved for the request. <strong>Fine-tuning</strong> goes further by training an existing model on examples and changing its learned parameters.</p>
        <p>You can combine these techniques. A repair assistant might follow a prompt for the task, use RAG to find the current manual and use fine-tuning to learn a specialized response pattern.</p>
      </LessonConcept>
      <LessonConcept title="Check the source before judging the wording">
        <p>An answer can sound clear and confident while repeating the wrong manual. Start by checking that retrieval found the right, current material and that the user has permission to see it.</p>
        <p>Next, check whether the retrieved passages actually support the answer. RAG can reduce hallucinations—answers that aren’t supported by the evidence—but adding retrieved text or citations doesn’t guarantee correctness.</p>
      </LessonConcept>
      <LessonConcept title="Work on the part that’s causing the problem">
        <p>If the facts keep changing, work on retrieval first. If you need a consistent output format, try a prompt template and examples. If that behavior is still unreliable, evaluate whether training would improve it enough to justify the data, computing and maintenance costs.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'finding the correct equipment manual',
    scenario: <TeachingSteps steps={[
      { title: 'Retrieve current facts', body: <p>The team indexes manuals with their product IDs and revision dates. Each maintenance instruction should point staff to the source they can check.</p> },
      { title: 'Find the failure', body: <p>The assistant gives an instruction from an older product generation. The team needs to fix how it selects the product and manual revision; making the answer sound better won’t fix the wrong evidence.</p> },
      { title: 'Improve how repair notes are written', body: <p>Staff also want repair notes in a standard format. The team can test a template, then evaluate fine-tuning if needed. Retrieval still supplies the current facts, even if training improves the writing pattern.</p> },
    ]} />,
    misconception: 'Fine-tuning doesn’t turn a model into an always-current document database with reliable source citations. You still need a way to retrieve and check the information used in an answer.',
    takeaway: 'Use retrieval to bring in current evidence, and consider training when you need to change learned behavior. Check both the evidence and the resulting answer.',
    check: { prompt: 'A benefits assistant already writes clear answers, but it needs to cite policies that change every month. Which part of the system would you work on?', explanation: <p>RAG can supply the current policies and their sources. You would keep the versions, dates, permissions and index up to date, then check that each answer is supported by the passages it retrieved. More writing practice for the model wouldn’t solve that need by itself.</p> },
    advanced: { title: 'where retrieved information is stored and how models can be customized', content: <>
      <p>In a common vector-based design, you split documents into chunks and create embeddings: numerical representations used to find similar content. Very small chunks can lose context, while very large ones can bring in unrelated material. Keep the source IDs, effective dates, citations and access information with them.</p>
      <p>Amazon Bedrock Knowledge Bases supports RAG. For vector retrieval, options include Amazon OpenSearch Service and supported Aurora/RDS for PostgreSQL capabilities. Amazon Neptune can support graph-based retrieval; check the particular offering and integration before assuming it supports the vector design you need.</p>
      <ComparisonTable caption="Compare model-customization methods" columns={['Method', 'What changes']} rows={[
        ['In-context learning', 'The model uses the instructions or examples you provide during inference. They use context space and tokens rather than changing its learned parameters.'], ['Fine-tuning / instruction tuning', 'You train an existing model’s parameters with carefully selected task examples or instruction-and-response pairs.'],
        ['Continued pretraining', 'You continue training an existing model with additional material from a domain, then check how that affects its broader capabilities.'], ['Pretraining from scratch', 'You train a base model from a broad collection of material. This requires substantial data, expertise and computing resources.'], ['Distillation', 'A smaller student model learns from a teacher model’s knowledge or outputs. Compare the student’s quality with the reduction in resources needed to run it.'],
      ]} />
      <p>Transfer learning builds on capabilities a model has already learned. Reinforcement learning from human feedback (RLHF) uses people’s preferences to help align its behavior. With either approach, you still need evaluation and safeguards.</p>
      <p>Choose training data you’re allowed to use and that represents the task, and keep an independent evaluation set. Check labels or target responses when the training method needs them. Include preparation, training, hosting, retrieval and maintenance in the cost, and give the assistant a way to acknowledge insufficient evidence and ask for help.</p>
    </> },
  },
  'aif-agents-evaluation': {
    intro: <p>An AI agent can choose steps and use tools to work toward a goal. A booking assistant, for example, might look up your reservation and use a tool to change it. To know whether it did the job, you need to check the booking itself, not just the message it sends you.</p>,
    diagram: <LearningDiagram kind="agent" />,
    explanation: <>
      <LessonConcept title="Understand what the model, tools and memory each do">
        <p>The model helps the agent decide what to do next. Tools let it look things up or carry out particular actions, while memory supplies selected information from the current interaction or earlier ones. Each part has a different job.</p>
        <p><strong>Model Context Protocol (MCP)</strong> is a way for compatible applications to discover and use capabilities provided by servers. Connecting a tool through MCP doesn’t make it safe or give the agent permission to use it. Authentication and authorization checks are still needed.</p>
      </LessonConcept>
      <LessonConcept title="Decide how much freedom the agent needs">
        <p>A workflow follows a sequence the team has defined. An agent can choose some of its next steps from what it observes. That flexibility can be useful, but adding more agents or more freedom also brings coordination work, delay, cost and more chances for mistakes.</p>
      </LessonConcept>
      <LessonConcept title="Check the completed task, not only the final sentence">
        <p>Look at which tool the agent chose, what values it sent, whether it had permission and what actually changed. A <strong>trace</strong> records the intermediate steps, helping you find where a task went wrong.</p>
        <p>You can also measure successful task completion, user satisfaction, how often a person had to take over and the cost per completed task. A well-written response or a high judge score can’t tell you on its own that the right action happened.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'a flight change that never happened',
    scenario: <TeachingSteps steps={[
      { title: 'Confirm what the customer wants to change', body: <p>The assistant looks up the fare rules and the booking details it’s allowed to access. Before making the proposed change, it gets the customer’s confirmation.</p> },
      { title: 'Inspect the result', body: <p>The change-booking tool returns an error, but the agent tells the customer the flight has changed. The message sounds reassuring, yet the reservation is still unchanged.</p> },
      { title: 'Test real outcomes', body: <p>The team adds tests for timeouts, unavailable flights and bookings the user can’t access. Each test checks the booking’s actual state, along with whether the assistant explains the outcome honestly.</p> },
    ]} />,
    misconception: 'Remembering a customer’s preference doesn’t give an agent permission to act on it. The application still needs the appropriate access checks and any required approval.',
    takeaway: 'Give the agent clear limits, then check what its tools actually did. The important result is whether it completed the task the user authorized.',
    check: { prompt: 'An agent gives clear explanations but orders the wrong quantity. What would you check to find out where it went wrong?', explanation: <p>Compare the values sent to the ordering tool and the resulting order with the customer’s confirmed request. Tests with ambiguous units and approval requirements can reveal useful failures. The trace can help you see whether the mistake happened while interpreting the request or calling the tool.</p> },
    advanced: { title: 'AWS agent services, memory and ways to check their work', content: <>
      <p>In a multi-agent system, a supervisor might delegate work, specialists might pass a task along, or parallel workers might combine their results. Decide what each agent receives, what it must return and how disagreements are handled. Then compare the extra communication and context costs with a simpler design.</p>
      <p>Short-term memory helps during an interaction. Long-term memory keeps selected information for later interactions, such as a customer’s stated preferences. For both, decide who owns the information, who can access it and how long it should be kept.</p>
      <p>Strands Agents is a framework for building agents. Amazon Bedrock AgentCore provides services for running them, including runtime, memory, gateway, identity and observability. Its Gateway can make tools available through MCP-compatible interfaces.</p>
      <p>Bedrock Agents Classic is closed to new customers, although existing customers can continue using it. AWS points to AgentCore for similar capabilities. When reading about these products, keep track of which part handles the model, coordinates steps, connects tools or hosts the application.</p>
      <ComparisonTable caption="Choose an evaluation that can reveal the problem" columns={['Method', 'What you can learn from it']} rows={[
        ['ROUGE / BLEU', 'ROUGE and BLEU compare text with reference answers and are often used for summaries and translation. Text overlap alone doesn’t tell you whether an answer is factually correct.'], ['BERTScore', 'BERTScore uses learned representations to compare meaning. Similar wording or meaning still doesn’t establish that a statement is true.'],
        ['Human evaluation', 'People familiar with the task judge representative examples using clear criteria.'], ['LLM-as-a-judge', 'Another model judges answers against a rubric. Check whether its errors, preferences or sensitivity to wording distort the results.'], ['Application evaluation', 'Check whether retrieval finds useful evidence, answers are grounded in it, citations support claims, tools act safely and tasks are completed.'],
      ]} />
      <p>Amazon Bedrock supports automated, human and model-judge evaluations. Compare results using consistent cases and model/prompt versions, and keep watching for new failures. Alongside safety and task completion, consider response time, productivity, satisfaction, cost per interaction and unnecessary handoffs to a person.</p>
    </> },
  },
  'aif-responsible-ai': {
    intro: <p>Responsible AI means paying attention to how a system affects people, including those whose lives or work are shaped by its decisions. An overall score is only a starting point. You also need to ask who experiences the mistakes and how those mistakes can be corrected.</p>,
    diagram: <LearningDiagram kind="responsible-review" />,
    explanation: <>
      <LessonConcept title="Check how different people experience the system">
        <p><strong>Fairness</strong> asks whether people face unjust differences in treatment or outcomes. <strong>Inclusivity</strong> means considering varied users and needs when the system is designed and tested. Both require looking beyond an average result.</p>
        <p>Look at who is represented in the data, how examples were labeled and which groups experience errors. Adding more data or making group counts equal won’t establish fairness on its own.</p>
      </LessonConcept>
      <LessonConcept title="Explain the system and the decision">
        <p>With <strong>transparency</strong>, you explain what the system is for, how it was developed, how it operates and where its limits lie. <strong>Explainability</strong> helps someone understand the factors behind its behavior or a particular prediction.</p>
        <p>Good documentation helps people understand a system, but it may not explain every individual decision. Likewise, finding that an input influenced a prediction doesn’t prove that input caused the outcome in the real world.</p>
      </LessonConcept>
      <LessonConcept title="Make sure reviewers can correct mistakes">
        <p>A reviewer needs enough evidence, time and authority to do something useful with a concern. Explain when the system should be used, make it easy for people to report problems and assign someone to investigate them. Human review should offer a real chance to correct an outcome.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'urgent messages in a less common language',
    scenario: <TeachingSteps steps={[
      { title: 'Look beyond the overall accuracy', body: <p>The support classifier performs well overall, but staff notice that it misses urgent messages in a less common language. Those customers may wait longer even though the headline score looks good.</p> },
      { title: 'Investigate the evidence', body: <p>Reviewers who understand the language find too few examples and unreliable urgency labels. The team checks those labels and compares how often urgent messages are missed in each relevant language group.</p> },
      { title: 'Improve and allow correction', body: <p>The team tests more representative data and suitable language support. Staff can correct a wrong priority, and customers can request a review. The team also documents what the system still struggles with.</p> },
    ]} />,
    misconception: 'Model cards, open licenses and fairness tools can provide useful information, but none can assure you that every user will be treated appropriately. You still need to examine the system in its actual setting.',
    takeaway: 'Find out who experiences the errors and investigate why. Just as importantly, give people a practical way to have a mistaken outcome reviewed and corrected.',
    check: { prompt: 'A model has good overall accuracy but makes more mistakes for a smaller language group. What should the team investigate?', explanation: <p>Look at the examples available for that group, the quality of their labels and the model’s language support. Review the consequences of its mistakes with people who understand the language and task. Then compare group results when testing improvements, rather than relying on the overall average.</p> },
    advanced: { title: 'tools and tradeoffs to consider when using AI responsibly', content: <>
      <p><strong>Robustness</strong> describes how a system handles difficult or changed conditions; <strong>safety</strong> concerns harmful effects; <strong>veracity</strong> concerns truthful, supportable information. Bias can enter through data collection, historical decisions, labels, inputs or deployment. Diverse, carefully chosen sources and human audits help you investigate these risks, but they don’t remove every risk.</p>
      <p>With Amazon SageMaker Model Cards, teams can document intended use, evaluation and risks. SageMaker Clarify offers bias and prediction-explanation capabilities; it’s closed to new customers, while existing customers can continue using it. Its feature attribution can help explain which inputs influenced a prediction, without establishing real-world causation.</p>
      <p>Bedrock evaluations helps compare behavior, while Bedrock Guardrails provides configurable filtering and other safeguards. Neither guarantees that every output will be safe or fair. With an open model, you still need to review its license, available training information, intended use and supporting evidence.</p>
      <p>You may need to balance performance, interpretability, safety and usefulness. Generative AI can create intellectual-property concerns, unsupported answers, biased content and misplaced trust or reliance. Check how inputs and outputs may be used, and decide what review is needed before publishing or acting on a result.</p>
      <p>Sustainability also matters when choosing a model and deciding how often to use it. Test whether a smaller model or simpler approach meets the need with fewer computing resources. A human-centered design should also make explanations, feedback and corrections accessible to the people affected.</p>
    </> },
  },
  'aif-security-governance': {
    intro: <p>A staff policy assistant should only read documents its user is allowed to see, and only take actions that user is allowed to request. Security puts those limits into practice. Governance makes sure someone owns the rules, checks they’re working and keeps the evidence needed to investigate problems.</p>,
    diagram: <LearningDiagram kind="security-boundaries" />,
    explanation: <>
      <LessonConcept title="Start with identity and permission">
        <p><strong>Authentication</strong> checks who someone is. <strong>Authorization</strong> checks what they’re allowed to do. When an assistant retrieves a document or calls a tool for a user, those same permissions need to apply.</p>
        <p><strong>Least privilege</strong> means giving the assistant only the data and actions it needs for its job. A model can help interpret a request, but a trusted part of the application must decide whether that request is permitted.</p>
      </LessonConcept>
      <LessonConcept title="Protect more than the connection">
        <p>Encryption protects data while it’s stored or sent, and private connectivity controls the network path it takes. Those protections matter, but neither decides whether a particular employee is allowed to read a salary record.</p>
        <p>You also need to check what comes into the application and what it produces. Review retrieved material and tool results, verify important claims against authorized sources, and check the values sent to a tool before it takes another action.</p>
      </LessonConcept>
      <LessonConcept title="Decide who looks after the controls">
        <p>Decide who manages access, how long information is kept, who handles incidents and when controls are reviewed. Protect records of the versions, sources, access decisions and actions involved. Those records help the team understand what happened when something goes wrong.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'keeping payroll out of a staff assistant',
    scenario: <TeachingSteps steps={[
      { title: 'Enforce document access', body: <p>Employees can read the staff handbook, but not everyone can read salary records. The retrieval system checks each employee’s permissions before sending passages to the model.</p> },
      { title: 'Limit possible actions', body: <p>A malicious document tells the assistant to email its sources outside the company. This assistant is allowed to search approved documents, but it has no email-sending capability. The document can’t give it a capability or permission it doesn’t have.</p> },
      { title: 'Keep protected evidence', body: <p>The team records access decisions and document versions under a retention policy. When a source is withdrawn, its owner checks that it can no longer appear in future retrieval results.</p> },
    ]} />,
    misconception: 'An encrypted connection, a private endpoint and provider reports are useful parts of the picture. You still have to check the application’s permissions and whether it meets the requirements that apply to your organization.',
    takeaway: 'Check permissions before the model receives information or a tool acts. Give someone responsibility for those controls, and keep protected records that let the team review what happened.',
    check: { prompt: 'An assistant uses encryption and a private connection, but shows an employee a document they aren’t allowed to read. Which control needs attention?', explanation: <p>The authorization check for data access or retrieval has failed. The system needs to enforce the employee’s permissions before the content reaches the model. Encryption and a private connection protect the path, but they don’t decide who may read the document.</p> },
    advanced: { title: 'how AWS controls support your security and governance work', content: <>
      <p>Under shared responsibility, AWS protects the cloud infrastructure, while customers manage their content, access settings and application use. AWS Identity and Access Management (IAM) roles and policies enforce service permissions. AgentCore Identity handles identity and credentials, and Policy in AgentCore can apply rules to agent tool use.</p>
      <ComparisonTable caption="Know which protection each control provides" columns={['Capability', 'What it protects and what it doesn’t']} rows={[
        ['Encryption / TLS', 'Encryption protects stored data, and TLS protects data in transit, with suitable key controls. They don’t decide who has permission to read a document.'], ['AWS PrivateLink', 'PrivateLink gives you private connectivity to supported services. You still need identity checks and document permissions.'],
        ['Amazon Macie', 'Macie helps discover sensitive data in Amazon S3. Finding that data doesn’t configure its protection or permissions for you.'], ['Bedrock Guardrails', 'Guardrails can apply configured filtering and grounding checks. Important claims and actions still need independent validation.'],
        ['AWS CloudTrail / AWS Config', 'CloudTrail records supported API activity; Config tracks resource configuration and evaluates compliance rules. Don’t assume either gives you complete conversation logs without the appropriate configuration.'], ['Amazon Inspector', 'Inspector finds vulnerabilities in supported workloads. It doesn’t evaluate every behavior of an AI model.'], ['AWS Artifact / Trusted Advisor', 'Artifact provides provider reports and agreements; Trusted Advisor provides supported best-practice checks. Both can support your compliance work, but don’t replace your own review.'],
      ]} />
      <p>Keep personal information out of datasets, prompts, memory and logs unless it’s needed. Masking can hide sensitive values, redaction removes sensitive text, and pseudonymization replaces identifiers.</p>
      <p>Information that can still be linked to someone needs protection. Combine these measures with access restrictions, integrity checks and a review of relevant privacy requirements.</p>
      <p>Data lineage records where information came from and how it changed. Catalogs, citations, source and model versions, and documentation help with an investigation. Governance also sets permitted uses, approvals, review schedules, incident processes and staff training, including where data may be processed, how long it’s kept and when it’s deleted.</p>
      <p>The AWS Generative AI Security Scoping Matrix distinguishes using an external application from building increasingly customized systems. As your control grows, so do your responsibilities. When sources or tools change, review the settings—including cross-Region processing—with the appropriate specialists.</p>
      <p>Grounding checks whether an answer is supported by evidence; output validation checks claims or structured fields. Compare confidence signals with actual results, because a confident tone or a model’s own score isn’t proof. Use several controls against prompt injection and data leakage rather than relying on one instruction.</p>
    </> },
  },
}

export function AifLessons() {
  return <>{AIF_LESSONS.map(lesson => <LearningLesson key={lesson.id} lesson={lesson} content={AIF_LESSON_CONTENT[lesson.id]} />)}</>
}
