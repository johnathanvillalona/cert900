import { AIF_LESSONS, type AifLessonId } from '@/data/guide-lessons';
import { ComparisonTable, LearningLesson, type LessonContent } from '@/components/GuideLearningContent';
import { LearningDiagram } from '@/components/GuideLearningDiagrams';

const content: Record<AifLessonId, LessonContent> = {
  'aif-ai-ml-approaches': {
    explanation: (
      <>
        <p>
          Artificial intelligence (AI) describes systems that perform tasks such as recognizing
          speech, making predictions, or planning actions. Machine learning (ML) is one way to build
          AI: an algorithm learns patterns from examples instead of relying entirely on rules written
          by a person. The trained result is a model. Training changes the model using data;
          inference uses that model to produce an answer for a new input.
        </p>
        <p>
          Deep learning uses neural networks with many layers to learn representations of data.
          Computer vision works with images or video, while natural language processing (NLP) works
          with human language. Generative AI creates content, such as a draft, image, or program.
          A large language model (LLM) is a model suited to language tasks. Agentic AI adds a process
          for pursuing a goal through decisions and actions, often using a generative model and tools.
          These terms overlap: an assistant can use a deep learning language model inside an agent.
        </p>
        <p>
          Start a learning problem by identifying the available evidence and the required output.
          Supervised learning uses labeled examples: an input is paired with a known answer.
          Classification predicts a category, such as a ticket type; regression predicts a number,
          such as tomorrow’s demand. Unsupervised learning finds structure without those answer
          labels, as when clustering similar purchasing patterns. Reinforcement learning learns a
          policy for choosing actions from rewards received through interaction with an environment.
          A reward is feedback about an action’s outcome, rather than a correct answer attached to
          every historical input.
        </p>
        <p>
          Data may be tabular records, a time series, text, images, or audio. Structured data follows
          a defined schema, such as columns for order date and price. Unstructured material, such as
          a complaint letter, does not follow the same fixed table schema. Its structure and quality
          still matter when choosing how to process it.
          Labels can be inaccurate, and a large dataset can still omit important customers or events.
          Decide whether the data represents the people and conditions the system will encounter.
        </p>
        <p>
          The prediction’s timing is another design choice. Real-time inference returns an answer
          during an interaction. Batch inference processes a collected group, such as a nightly list
          of accounts. Asynchronous inference accepts work that can finish later, which suits a long
          document analysis. Serverless inference describes managed compute that scales without
          maintaining an always running server; it is a hosting choice, so it is not simply another
          word for batch processing. Latency, traffic patterns, payload size, and cost determine the
          appropriate combination.
        </p>
        <p>
          AI can help people make decisions, scale analysis, and automate work when patterns and
          uncertainty are part of the problem. A fixed calculation,
          exact policy rule, or small manual workflow may need ordinary software instead. Traditional
          ML can fit a narrow prediction task with structured data and clear evaluation criteria.
          A foundation model can be useful for varied language or image tasks, but its flexibility
          brings different cost, explainability, and control requirements.
        </p>
      </>
    ),
    scenario: (
      <>
        <p>
          A repair business receives three requests. Finance needs the sales tax on each invoice,
          operations wants to predict how many repair hours a job will require, and marketing wants
          to discover groups of customers with similar service histories. The tax calculation has
          an exact rule. A model would add uncertainty to work a formula can already perform.
        </p>
        <p>
          Past repair jobs include their final labor hours, so those labeled examples support
          supervised regression. The customer grouping task has no predefined answer label, so
          clustering is a reasonable starting point. If the business later needs a plain language
          summary of a technician’s notes, a generative model serves that separate task. The
          business does not have to use one model for every request.
        </p>
        <p>
          Job estimates must appear while a customer books a visit, favoring real-time inference.
          Marketing can wait until morning, so its segmentation can run in a batch. The required
          output identifies the technique; the time the answer is needed identifies the delivery
          pattern.
        </p>
      </>
    ),
    comparison: (
      <ComparisonTable
        caption="Match the required result to an approach"
        columns={['Approach', 'What it produces', 'Evidence to look for']}
        rows={[
          ['Rules or a formula', 'An exact result from defined logic', 'The policy can be expressed directly and must be applied consistently.'],
          ['Classification', 'A category or class probability', 'Historical examples have labels such as urgent or routine.'],
          ['Regression', 'A numeric prediction', 'Historical examples have measured quantities such as hours or demand.'],
          ['Clustering', 'Groups of similar examples', 'The goal is to discover structure without predefined group labels.'],
          ['Generative AI', 'New content in response to an input', 'The task involves drafting, summarizing, or creating content.'],
        ]}
      />
    ),
    diagram: <LearningDiagram kind="ai-map" />,
    misconception: 'A task involving AI does not automatically require a generative model. Choose the approach from the required output, available data, and tolerance for uncertainty.',
    check: {
      prompt: 'A store wants to discover shopping patterns without assigning customer categories in advance. Which learning approach fits, and what would change if every customer already had an approved category label?',
      explanation: (
        <p>
          Clustering fits the discovery task because it groups similar records without known answer
          labels. With trustworthy category labels and a goal of predicting those categories for
          new customers, supervised classification becomes appropriate. The presence and purpose of
          the labels change the learning problem.
        </p>
      ),
    },
  },
  'aif-ml-lifecycle': {
    explanation: (
      <>
        <p>
          An ML lifecycle begins with a business decision: what should improve, how will success be
          measured, and what happens when the prediction is wrong? A demand forecast might reduce
          wasted stock, but only if the forecast arrives before orders are placed. Defining that
          use case prevents a technically impressive model from solving the wrong problem.
        </p>
        <p>
          Data collection brings together relevant examples. Exploratory data analysis examines
          distributions, missing values, unusual records, and relationships. Preprocessing corrects
          or transforms inputs into a usable form. Feature engineering creates useful inputs, such
          as days since the last order from a list of purchase dates. These stages differ from
          training, which adjusts a model’s learned parameters. Hyperparameters are settings that
          guide training, such as a learning rate, rather than values the model learns directly.
        </p>
        <p>
          Separate data for training, validation, and testing. Training data teaches the model;
          validation data helps compare choices; a held back test set estimates performance after
          those choices are made. Data leakage occurs when information unavailable at the real
          decision time enters development. Including the final delivery date when predicting
          whether an order will be late gives the model information it would not have in production.
          A good test imitates the conditions of actual use.
        </p>
        <p>
          Deployment makes a selected model usable. A managed API lets the application send inputs
          without operating the model’s serving infrastructure directly. Hosting a model yourself
          gives more infrastructure control and creates work around capacity, patching, scaling,
          and availability. An open model is a possible starting point, but its license, data
          suitability, security, and operating requirements still need review. Training a model
          from scratch is another option, with much greater data and compute demands.
        </p>
        <p>
          Production starts another feedback loop. Monitor response times, failures, costs, input
          changes, and outcomes once labels become available. Data drift means the input population
          has changed; concept drift means the relationship between inputs and the target has
          changed. Either may require investigation. Retraining is a response to evidence, followed
          by evaluation before replacing the current model. A fresh model is not automatically an
          improvement.
        </p>
        <p>
          Machine learning operations (MLOps) makes this work repeatable. Track datasets, code,
          model versions, configuration, evaluation results, and deployment approvals. Repeatable
          pipelines and monitoring reduce manual errors and make a result easier to reproduce.
          Amazon SageMaker AI provides tools across model development, training, deployment, and
          monitoring. Amazon S3 can hold datasets and artifacts. Amazon Bedrock offers managed
          access to foundation models for applications that do not need to operate their own model
          servers. The service choice follows the work the team needs to perform.
        </p>
      </>
    ),
    scenario: (
      <>
        <p>
          A bakery wants to forecast tomorrow’s sandwich demand. It collects sales, store opening
          hours, promotions, and weather information available before the ordering deadline. Looking
          at the records reveals that a closed store has zero sales, while a store that sold out
          may have had more demand than its sales total shows. Those records need different
          interpretations before training begins.
        </p>
        <p>
          The team trains on earlier weeks and evaluates on later weeks to reflect forecasting
          future demand. It excludes the next day’s actual sales and any weather observations that
          would only become known afterward. A model with a slightly weaker development result may
          be the more credible choice if the stronger result depended on leaked future information.
        </p>
        <p>
          After deployment, a nearby office changes its attendance policy and lunch demand shifts.
          Monitoring notices a sustained increase in forecast errors and food waste. The team
          investigates the new pattern, prepares representative data, and evaluates a revised
          model. Its success measure includes reduced waste and fewer stockouts, giving the model
          metrics a clear business purpose.
        </p>
      </>
    ),
    comparison: (
      <ComparisonTable
        caption="Different work happens at each lifecycle stage"
        columns={['Stage', 'Main purpose', 'Example evidence']}
        rows={[
          ['Data preparation', 'Make relevant inputs trustworthy and usable', 'Missing-value checks, documented labels, and features available at prediction time.'],
          ['Training', 'Learn model parameters from examples', 'A model artifact and recorded training configuration.'],
          ['Validation and testing', 'Compare choices and estimate generalization', 'Results on data excluded from the corresponding development decisions.'],
          ['Deployment', 'Make predictions available to an application', 'A managed endpoint, API integration, or scheduled batch job.'],
          ['Monitoring', 'Detect operational and outcome changes', 'Latency, failures, drift signals, costs, and later observed prediction errors.'],
        ]}
      />
    ),
    diagram: <LearningDiagram kind="lifecycle" />,
    misconception: 'Deployment does not finish an ML project. Data, user behavior, and business conditions can change, so monitoring and controlled updates are part of the lifecycle.',
    check: {
      prompt: 'A churn model uses a cancellation confirmation email as an input when predicting which customers will cancel next month. Why is its excellent test result suspect?',
      explanation: (
        <p>
          The email reveals an outcome that would not exist when the prediction is needed. This is
          leakage. Rebuild the dataset using only information available before the decision, then
          evaluate on an appropriate held back set. More training on the leaked data would preserve
          the problem.
        </p>
      ),
    },
  },
  'aif-model-performance': {
    explanation: (
      <>
        <p>
          A model’s score is useful only when its meaning matches the decision. For classification,
          first name the positive class. If positive means a suspicious message, a true positive is
          a suspicious message correctly flagged. A false positive is an ordinary message flagged
          by mistake. A false negative is a suspicious message the model misses. A true negative
          is an ordinary message correctly left alone. These four outcomes form a confusion matrix.
        </p>
        <p>
          Accuracy measures the fraction of all predictions that are correct. Precision asks how
          many predicted positives really are positive. Recall asks how many actual positives were
          found. Precision is useful when acting on a false alarm is costly; recall matters when
          missing a positive is costly. The F1 score combines precision and recall using their
          harmonic mean, so a very weak value for either pulls the combined score down. It does not
          represent a universal business cost calculation.
        </p>
        <p>
          Class balance changes how to interpret the numbers. When rare events are important, a
          model can achieve high accuracy by mostly predicting the common class. Some classifiers
          produce scores that are converted into classes using a threshold. Changing that threshold
          usually changes the balance between false alarms and missed positives. Choose it from
          the consequences of those errors and validate the choice, rather than assuming one
          threshold fits every application.
        </p>
        <p>
          Generalization means performing well on new examples. Overfitting happens when a model
          learns training-specific details that do not carry over; a large gap between strong
          training results and weak validation results is a warning. Underfitting happens when
          the model does not capture useful patterns even in training. Statistical bias concerns
          simplifying assumptions that can create systematic error; variance concerns sensitivity
          to the particular training sample. These ideas help diagnose fit, while fairness bias
          requires additional analysis of who experiences the errors.
        </p>
        <p>
          Evaluate against a useful baseline and keep comparisons consistent. Use the same task,
          representative data, metric definitions, and operating conditions. Analyze subgroups and
          difficult cases because an average can hide poor performance for a smaller population.
          Also check label quality: a model cannot be evaluated reliably against answers that are
          themselves wrong or inconsistently defined.
        </p>
        <p>
          Business measures connect prediction quality to value. Track development and operating
          costs, cost per user, staff effort, customer feedback, and return on investment (ROI).
          A more accurate model may still be unsuitable if it misses the response deadline or
          creates more review work than the team can handle. Describe the expected benefit and the
          cost of errors before choosing the winning model.
        </p>
      </>
    ),
    scenario: (
      <>
        <p>
          In a held back set of 1,000 messages, 20 are scams. A detector flags 25 messages: 15 are
          scams and 10 are ordinary messages. It misses the other 5 scams. That gives 15 true
          positives, 10 false positives, 5 false negatives, and 970 true negatives. Accuracy is
          985 ÷ 1,000, or 98.5%.
        </p>
        <p>
          Precision is 15 ÷ 25, or 60%: four in ten alerts are false alarms. Recall is 15 ÷ 20,
          or 75%: one in four scams is missed. F1 is approximately 66.7%. A detector that labels
          everything ordinary would already reach 98% accuracy, so the attractive accuracy figure
          alone gives little insight into scam detection.
        </p>
        <p>
          A team using alerts for a quick staff review may accept extra false positives to find
          more scams. Automatically deleting flagged messages makes false positives more damaging.
          The same model can therefore need a different threshold, review process, and success
          target depending on what the application does with its prediction.
        </p>
      </>
    ),
    comparison: (
      <ComparisonTable
        caption="Read a classification metric as a specific question"
        columns={['Metric', 'Question it answers', 'What it can hide']}
        rows={[
          ['Accuracy', 'What fraction of all predictions is correct?', 'Poor detection of a rare but important class.'],
          ['Precision', 'Of the positive predictions, how many are correct?', 'Positives the system never detects.'],
          ['Recall', 'Of the actual positives, how many are detected?', 'How much unnecessary action false alarms create.'],
          ['F1 score', 'How do precision and recall combine?', 'The actual financial or human cost of different errors.'],
          ['Business outcome', 'Does the system improve the intended result?', 'Technical failure modes unless model and operational measures are also monitored.'],
        ]}
      />
    ),
    misconception: 'High accuracy does not prove that a model handles the important cases well. Class balance, error costs, and the action taken after a prediction determine which metrics matter.',
    check: {
      prompt: 'An inspection model raises very few false alarms but misses many damaged items. Which metric exposes the missed damage, and what tradeoff could arise when improving it?',
      explanation: (
        <p>
          Recall measures how much actual damage is detected, so low recall exposes the misses.
          A more sensitive operating threshold may increase recall while also flagging more
          undamaged items, reducing precision and increasing review work. Compare both error types
          and their costs before accepting the change.
        </p>
      ),
    },
  },
  'aif-foundation-models-services': {
    explanation: (
      <>
        <p>
          A foundation model (FM) is trained on broad data so it can support many downstream tasks.
          An LLM is a language-focused example, commonly based on a transformer architecture.
          Multimodal models accept or generate more than one modality, such as text and images.
          Diffusion models learn a denoising process used for generation, commonly associated with
          images. Choose the model type from the task; a language-only model does not gain image
          understanding merely because an application attaches an image to its request.
        </p>
        <p>
          An FM application still has a lifecycle: select suitable data and a model, decide whether
          customization is needed, evaluate, deploy, and use feedback to improve it. Pretraining
          creates broad capabilities; an application can often start with an existing model and
          supply instructions or reference information at inference time. This lowers the effort
          needed to experiment, while the team remains responsible for evaluating whether the
          result is suitable for its users.
        </p>
        <p>
          Tokens are the units a model processes. For text, a token may be part of a word, a whole
          word, or punctuation. Token counts are not the same as word counts. Input tokens can
          include instructions, conversation history, retrieved passages, and tool results; output
          tokens cover generated content. Longer context can supply useful evidence and also
          increase cost and processing time. A context window has a finite capacity, with the
          exact input and output limits depending on the model.
        </p>
        <p>
          For a token-priced service, estimate input and output separately using the applicable
          rates, then multiply by expected usage. In a purely hypothetical pricing exercise,
          2,000 input tokens at $1 per million cost $0.002, and 500 output tokens at $4 per million
          cost another $0.002: $0.004 for the call, before other charges. These are teaching rates,
          not AWS prices. Retrieval, storage, tools, hosting, and repeated agent calls can add to
          the total. Prompt caching and batch options may change economics where supported;
          provisioned capacity introduces a different commitment from paying only for each request.
          Extra capacity or redundant components can improve availability while adding expense.
        </p>
        <p>
          Model selection balances task quality, modality, language coverage, context length,
          latency, cost, customization, and operational constraints. A larger model may improve a
          difficult task while increasing delay or spend. A smaller model may be sufficient for a
          narrow extraction task. Check service and model availability in the intended Region,
          along with data handling and compliance requirements. Evaluate candidates on representative
          work rather than assuming the largest model is the best fit.
        </p>
        <p>
          Amazon Bedrock provides managed access to foundation models and supporting generative AI
          capabilities. Amazon SageMaker AI supports building, training, and deploying models with
          more control over the ML workflow; SageMaker JumpStart supplies model and solution starting
          points. Amazon Quick offers a business experience for working with connected information,
          research, analysis, and automation. Quick Sight is its business intelligence feature.
          Amazon Q Business closed to new customers on July 31, 2026, and AWS directs similar new
          use cases toward Quick. Amazon Q Developer and Kiro serve development work; the former
          Q Developer CLI is now Kiro CLI. Strands Agents
          is an agent development framework, while Amazon Bedrock AgentCore supplies services for
          operating agents. These choices sit at different levels of application development.
        </p>
        <p>
          A ready made AI capability can also meet the need. Amazon Transcribe converts speech to
          text, Amazon Polly turns text into speech, Amazon Translate translates language, Amazon
          Comprehend analyzes text, and Amazon Lex supports conversational interfaces. Amazon
          Rekognition analyzes images and video; Amazon Textract extracts text and document
          structure. Identify the required capability before deciding to build a larger generative
          application around it.
        </p>
      </>
    ),
    scenario: (
      <>
        <p>
          A field service company wants a tool that summarizes technician reports and drafts a
          customer explanation. Reports contain both notes and photographs, so the team first
          checks whether candidate models support those inputs. It compares a smaller model and a
          more capable model on the same reports, measuring whether each preserves the repair
          findings and stays within the response deadline.
        </p>
        <p>
          Its first design sends the entire service history on every request. Most of those records
          do not affect the repair in question. Selecting the relevant history reduces input tokens
          and gives the model more focused evidence. The team also caps unnecessary output length
          and measures total cost per useful report, including retrieval and retries. A cheap call
          that frequently needs manual correction may cost more overall.
        </p>
        <p>
          Bedrock is a candidate when developers want model access within their application. If
          the request were instead an employee workspace for searching connected business data,
          Quick would be worth evaluating. If the team needed to train and operate a specialized
          prediction model, SageMaker AI would address a different part of the requirement. The
          wording of the business need determines the service category.
        </p>
      </>
    ),
    comparison: (
      <ComparisonTable
        caption="Choose the AWS service from the work required"
        columns={['Service or tool', 'Typical role', 'Decision clue']}
        rows={[
          ['Amazon Bedrock', 'Use foundation models and managed generative AI features', 'Developers need model capabilities inside an application.'],
          ['Amazon SageMaker AI', 'Build, train, deploy, and manage ML models', 'The team needs control over model development and serving.'],
          ['SageMaker JumpStart', 'Start from available models and solution examples', 'An existing model or solution can accelerate development.'],
          ['Amazon Quick', 'Work with connected business information and automation', 'Employees need a business application for research, insights, and actions.'],
          ['Amazon Q Developer or Kiro', 'Assist software development', 'The work centers on code and application development.'],
          ['Managed AI services', 'Provide a specific speech, text, image, or document capability', 'A defined capability such as transcription already matches the task.'],
        ]}
      />
    ),
    misconception: 'The lowest token price does not automatically produce the lowest application cost. Include useful output quality, context size, retries, tool calls, and operating costs in the comparison.',
    check: {
      prompt: 'A text-only model is inexpensive and performs well on support tickets. Can the team assume it will also interpret customer damage photos?',
      explanation: (
        <p>
          It must verify image support and evaluate the image task separately. Language quality
          does not establish multimodal capability. The team could evaluate a suitable multimodal
          model or a separate image analysis component, then compare the complete workflow’s
          quality, latency, and cost.
        </p>
      ),
    },
  },
  'aif-prompting-context': {
    explanation: (
      <>
        <p>
          Prompt engineering shapes the input that asks a model to perform a task. A useful prompt
          explains the instruction, provides necessary context, identifies the material to work on,
          and specifies the output format. For example, asking for a summary with a maximum length
          and named fields gives the application a clearer target than asking the model to make
          something helpful. Negative instructions describe unwanted behavior, but must be evaluated
          alongside the positive instructions and examples.
        </p>
        <p>
          Zero-shot prompting gives an instruction without worked demonstrations. One-shot prompting
          adds one example; few-shot prompting adds several. Examples can teach a format, tone, or
          distinction that is difficult to explain briefly. They consume context and can introduce
          bias if they represent only easy cases. Prompt templates keep stable instructions while
          inserting variables such as a customer’s question or an approved reference passage.
          Reasoning-oriented techniques, sometimes called chain-of-thought prompting, encourage
          intermediate problem solving. Request useful conclusions, assumptions, and concise
          justifications; a long explanation is not evidence that the conclusion is correct.
        </p>
        <p>
          Context engineering concerns the whole information supply for a model call. It includes
          deciding which instructions, conversation turns, retrieved documents, tool descriptions,
          tool results, and memory belong in the available context. A beautifully written request
          will still fail if the application supplies the wrong policy or leaves out a necessary
          tool result. Select relevant and permitted information, preserve important source details,
          remove stale or unnecessary material, and leave enough capacity for the response.
        </p>
        <p>
          Inference settings influence generation. Temperature changes the sampling distribution:
          lower values usually favor more predictable choices, while higher values allow more
          variation. Top-p and top-k also restrict which token candidates are considered where a
          model supports them. A maximum output token setting limits generated length; it does not
          shorten the supplied input. Parameter names, supported ranges, and interactions vary by
          model. Lower randomness can make a wrong answer more consistent, so factual accuracy
          still needs suitable evidence and evaluation.
        </p>
        <p>
          Treat prompt changes as application changes. Amazon Bedrock Prompt Management supports
          reusable prompts, variables, variants, and versions. Record the prompt version together
          with the model and inference configuration. Compare changes on a stable evaluation set
          containing ordinary requests, difficult examples, and unsafe inputs. An application can
          then reference an evaluated version and investigate regressions against a known previous
          configuration.
        </p>
        <p>
          Prompt injection occurs when untrusted input tries to redirect the application’s
          instructions, including text hidden in a retrieved document or tool response. Jailbreaking
          attempts to bypass intended restrictions. Exposure can reveal instructions or sensitive
          data; poisoning can contaminate information the system relies on. Keep external content
          separate from trusted instructions, limit what data and tools the application can access,
          and validate outputs before using them. A sentence telling the model to ignore attacks
          is only one measure and cannot enforce an authorization policy.
        </p>
      </>
    ),
    scenario: (
      <>
        <p>
          A shop’s warranty assistant receives a vague prompt: “Help this customer.” The team
          replaces it with a defined task: use the supplied, approved warranty terms to state the
          coverage period, cite the supporting passage, and identify any missing purchase details.
          A few examples demonstrate the expected three fields, including an example where the
          available evidence is insufficient to decide coverage.
        </p>
        <p>
          A customer then pastes a forum post claiming that every repair is free and instructing
          the assistant to disregard the shop’s rules. The application labels that text as customer
          supplied material and retrieves the authorized warranty version. Its backend controls
          which documents can be retrieved and does not give this assistant permission to issue
          refunds. These controls limit what an injected instruction could cause, even if a model
          responds imperfectly.
        </p>
        <p>
          The team tries a shorter prompt variant and compares it with the current version on the
          same customer cases. It checks citations, missing-information handling, formatting, token
          usage, and resistance to misleading inputs. Only after this comparison does it adopt the
          new version. A good-looking answer to one friendly example would not establish that the
          change works across the workflow.
        </p>
      </>
    ),
    comparison: (
      <ComparisonTable
        caption="Different changes address different prompt problems"
        columns={['Change', 'What it helps with', 'What to verify']}
        rows={[
          ['Clear instruction and output format', 'An ambiguous task or inconsistent structure', 'The response follows the requested fields on realistic inputs.'],
          ['Few-shot examples', 'A difficult format or decision pattern', 'Examples cover relevant cases without teaching unwanted bias.'],
          ['Better context selection', 'Missing, stale, or irrelevant information', 'Sources are current, relevant, permitted, and within context limits.'],
          ['Inference settings', 'Unwanted variability or excessive output', 'Supported settings improve the task without assuming they ensure truth.'],
          ['Versioned prompts', 'Uncontrolled changes and hard-to-explain regressions', 'The evaluated prompt, model, and configuration can be identified.'],
        ]}
      />
    ),
    misconception: 'A lower temperature can reduce variation, but it cannot supply missing facts, correct a stale policy, or replace access controls.',
    check: {
      prompt: 'An assistant confidently cites last year’s return policy even at a low temperature. Which part of the application should be investigated first?',
      explanation: (
        <p>
          Inspect the information supplied to the model: retrieval, policy version selection, and
          context construction. The application needs the current authorized policy and a way to
          recognize conflicting or outdated material. Sampling the stale policy more consistently
          cannot make it current.
        </p>
      ),
    },
  },
  'aif-retrieval-customization': {
    explanation: (
      <>
        <p>
          Retrieval Augmented Generation (RAG) supplies relevant external information when a model
          answers. It is useful for private documents, changing policies, and answers that need
          traceable sources. The application retrieves evidence and adds it to the model’s context;
          this does not train the retrieved facts into the model’s weights. Updating the searchable
          documents and refreshing their index can therefore change the evidence available without
          retraining the generative model.
        </p>
        <p>
          A common preparation process parses documents, divides them into chunks, creates
          embeddings, and indexes them with source metadata. An embedding represents content as
          a vector of numbers used for similarity comparisons. At request time, the application
          embeds a query, finds relevant chunks, and passes selected passages with the question to
          the model. Chunk size matters: tiny chunks can lose necessary context, while huge chunks
          can bring irrelevant material and consume tokens. Preserve details such as document
          identity, effective date, and permissions.
        </p>
        <p>
          Amazon Bedrock Knowledge Bases supports RAG workflows. AWS options for storing and
          searching vectors include Amazon OpenSearch Service and supported database capabilities
          in Amazon Aurora and Amazon RDS for PostgreSQL; Amazon Neptune supports graph-based
          retrieval use cases, with vector capabilities depending on the particular offering.
          Check the engine, feature, and integration when selecting a store. A familiar database
          name alone does not establish that every configuration supports a required retrieval
          feature.
        </p>
        <p>
          Retrieval quality and answer quality are separate. A semantically similar passage may
          be outdated, belong to another product, or be unavailable to this user. Enforce access
          rules before passages enter the model’s context. Then check whether the answer is
          supported by the retrieved evidence and whether citations actually support its claims.
          RAG can reduce hallucinations, but missing evidence, poor retrieval, and unsupported
          generation can still produce errors. The system needs a useful insufficient-evidence
          response and an escalation path.
        </p>
        <p>
          Customization choices solve different problems. In-context learning teaches through
          instructions or examples during inference. Fine-tuning updates an existing model’s
          parameters using training examples, often to improve a task pattern, response style, or
          domain behavior. Instruction tuning uses examples of instructions and desired responses.
          Continued pretraining exposes an existing model to additional domain material. Training
          an FM from scratch requires broad data and substantial compute. Distillation trains a
          smaller student model using knowledge or outputs from a teacher, trading development
          effort and possible quality differences for lower serving requirements.
        </p>
        <p>
          Training data needs curation, permission to use it, consistent labels or target responses
          when the training method requires them,
          representative coverage, and an independent evaluation set. Transfer learning reuses
          capabilities learned earlier instead of starting from nothing. Reinforcement learning
          from human feedback (RLHF) uses human preference feedback to help align behavior. None of
          these methods removes the need to evaluate errors and safeguards. Compare data preparation,
          training, hosting, retrieval, and ongoing maintenance costs. Fine-tuning and RAG can be
          combined when the application needs both a learned behavior and current evidence.
        </p>
      </>
    ),
    scenario: (
      <>
        <p>
          A parts distributor answers questions about thousands of equipment manuals. Manuals
          change with each product revision, and staff need a reference for any maintenance
          instruction. The team prepares a searchable collection with product identifiers and
          revision dates, then retrieves the relevant manual passages for each request. This makes
          RAG a sensible starting point for the knowledge requirement.
        </p>
        <p>
          During evaluation, the assistant retrieves a manual for the previous product generation.
          The generated answer accurately repeats that manual but gives the wrong maintenance
          interval for the customer’s equipment. The team fixes product and revision selection,
          checks the source mapping, and requires the answer to identify its supporting revision.
          Making the model more fluent would not resolve this retrieval failure.
        </p>
        <p>
          Later, staff need every answer in a specialized repair-note format. The team first tests
          a template and examples. If that behavior remains unreliable across representative
          records, it can evaluate fine-tuning using approved example notes while retaining RAG
          for current manual facts. It compares the added training and serving costs with the
          reduction in staff editing. Each technique has a specific job in the design.
        </p>
      </>
    ),
    comparison: (
      <ComparisonTable
        caption="Choose how to provide knowledge or change behavior"
        columns={['Approach', 'What changes', 'Typical tradeoff']}
        rows={[
          ['Prompting / in-context learning', 'Instructions and examples supplied for a request', 'Fast to try; examples consume context and inference tokens.'],
          ['RAG', 'Evidence retrieved and placed in context', 'Supports changing, cited information; adds indexing, retrieval, and access-control work.'],
          ['Fine-tuning', 'Parameters of an existing model', 'Can improve learned behavior; requires curated training data and evaluation.'],
          ['Continued pretraining', 'An existing model through additional domain training', 'Requires suitable domain material, compute, and checks for broader capability changes.'],
          ['Pretraining from scratch', 'The base model learned from a broad training corpus', 'Offers extensive control with substantial data, expertise, and compute requirements.'],
          ['Distillation', 'A student model trained from teacher knowledge or responses', 'Can lower serving requirements; task quality must be checked after transfer.'],
        ]}
      />
    ),
    diagram: <LearningDiagram kind="rag" />,
    misconception: 'Fine-tuning does not turn a model into a reliably current, source-cited document database. Evaluate retrieval for changing facts and training for the behavior the model needs to learn.',
    check: {
      prompt: 'A benefits assistant has the right writing style but must answer from policies that change monthly and cite the effective version. Which approach addresses the main need?',
      explanation: (
        <p>
          RAG addresses the changing evidence and citation requirement. Keep policy versions,
          effective dates, permissions, and index updates under control, then evaluate whether
          retrieved passages support each answer. Fine-tuning solely to memorize each monthly
          policy would create recurring training work without establishing reliable source use.
        </p>
      ),
    },
  },
  'aif-agents-evaluation': {
    explanation: (
      <>
        <p>
          An AI agent pursues a goal by choosing steps and using available tools. A typical loop
          takes in the request, decides what information or action is needed, calls a tool, inspects
          the result, and decides whether to continue or answer. A model response that merely
          describes a reservation has not actually booked anything. An authorized tool call and a
          verified result are needed to connect generated language with an external action.
        </p>
        <p>
          A workflow defines an expected sequence of steps; an agent can choose parts of its route
          based on observations. Use the degree of autonomy that the task needs. Multi-agent
          systems may use a supervisor that delegates, a sequence of specialist handoffs, or
          parallel workers whose results are combined. Each pattern adds communication, context,
          latency, and coordination costs. Define what each participant receives, what it returns,
          and who may act when outputs disagree.
        </p>
        <p>
          Short-term memory preserves information within an interaction, while long-term memory
          retains selected information across interactions. Both need ownership, access rules,
          and retention decisions. Model Context Protocol (MCP) standardizes interactions through
          which compatible clients can discover and use capabilities exposed by servers. It is
          a connection protocol, not a model or a grant of permission. Authentication, authorization,
          tool validation, and data boundaries still determine what an agent may do.
        </p>
        <p>
          Amazon Bedrock Agents provides managed agent orchestration; its current documentation
          calls it Agents Classic, says it is closed to new customers, and points to AgentCore for
          similar capabilities. Existing customers can continue using it. Strands Agents provides
          a framework for developing agents. Amazon Bedrock AgentCore supplies capabilities such as
          runtime, memory, gateway, identity, and observability for operating agents. AgentCore
          Gateway can expose APIs and other tools through MCP-compatible interfaces. Distinguish
          the model, the orchestration logic, the tool connection, and the hosting services even
          when a product integrates several of them.
        </p>
        <p>
          Evaluate models with representative datasets and explicit criteria. Automatic metrics
          provide repeatable signals. ROUGE compares overlap with reference text, often for
          summaries; BLEU measures matching word sequences, commonly for translation; BERTScore
          uses learned representations to assess semantic similarity. These signals do not prove
          factual correctness. Human evaluation adds task and domain judgment. An LLM used as a
          judge can score many outputs against a rubric, but its preferences, errors, and sensitivity
          to wording also require validation. Amazon Bedrock evaluations supports automated,
          human, and model-judge evaluation approaches.
        </p>
        <p>
          Evaluate the complete application as well as the base model. For RAG, inspect retrieval
          relevance, evidence coverage, grounded answers, and correct citations. For an agent,
          inspect tool selection, arguments, authorized actions, handling of failures, and whether
          the intended task actually finished. Trace intermediate steps to locate failures instead
          of grading only the final sentence. Compare model and prompt changes on a stable set,
          then monitor real use for new failure patterns.
        </p>
        <p>
          Business alignment includes task completion rate, user satisfaction, productivity,
          latency, and cost per interaction or completed task. A system that always escalates to
          a person may avoid some errors while delivering little automation value. A system that
          confidently takes the wrong action may complete many steps while failing its purpose.
          Define success and acceptable errors together, with human review where the action’s
          consequences require it.
        </p>
      </>
    ),
    scenario: (
      <>
        <p>
          A travel company builds an agent that helps staff change a booking. It must retrieve
          the fare rules, look up authorized booking details, calculate the allowed options through
          a tool, and present the proposed change for confirmation. The booking tool enforces
          permissions and records whether the confirmed change actually succeeded.
        </p>
        <p>
          In one evaluation, the agent writes a convincing “Your flight has been changed” message
          after the tool returns an error. A language-quality judge gives the message a high score,
          but the end-to-end test fails because the booking is unchanged. Examining the trace shows
          that the agent failed to interpret the tool result. The remedy targets error handling and
          verification, with another test that checks the actual resulting booking state.
        </p>
        <p>
          The team also tests ambiguous requests, unavailable flights, unauthorized bookings, and
          repeated tool timeouts. It measures successful authorized changes, unnecessary escalations,
          customer satisfaction, and total cost per completed change. If adding three specialist
          agents raises cost without improving those outcomes, the extra coordination has not yet
          demonstrated business value.
        </p>
      </>
    ),
    comparison: (
      <ComparisonTable
        caption="Evaluate the layer where a failure can occur"
        columns={['Layer', 'Useful evidence', 'Failure it can expose']}
        rows={[
          ['Model response', 'Task rubric, reference-based metrics, and human review', 'An inaccurate, incomplete, or unsuitable answer.'],
          ['Retrieval', 'Relevant passages, source versions, and groundedness checks', 'Correct-looking text based on irrelevant or stale evidence.'],
          ['Agent tools', 'Tool traces, argument checks, permissions, and resulting state', 'A wrong action or a claimed action that never succeeded.'],
          ['User outcome', 'Task completion, satisfaction, delay, and escalation rate', 'A technically working system that does not help users finish their work.'],
          ['Economics', 'Total cost per interaction and per completed task', 'Cheap individual calls becoming expensive through retries and coordination.'],
        ]}
      />
    ),
    diagram: <LearningDiagram kind="agent" />,
    misconception: 'A polished final response does not prove an agent completed its task. Verify the authorized tool actions and the resulting application state.',
    check: {
      prompt: 'A new agent receives excellent LLM-judge scores but occasionally submits the wrong order quantity. What should the evaluation add?',
      explanation: (
        <p>
          Check the tool arguments and the actual order created against the user’s authorized
          request. Add cases involving ambiguous units and confirmation requirements, inspect
          traces, and measure correct task completion. A response-quality score alone does not
          evaluate the accuracy of an external action.
        </p>
      ),
    },
  },
  'aif-responsible-ai': {
    explanation: (
      <>
        <p>
          Responsible AI considers how a system affects people throughout its lifecycle. Fairness
          concerns unjust differences in treatment or outcomes. Inclusivity asks whether varied
          users and needs are represented. Robustness concerns performance under changed or
          difficult conditions; safety concerns harmful effects; veracity concerns truthful,
          supportable information. These goals need concrete requirements, evaluation, ownership,
          and monitoring rather than a single label attached to a model.
        </p>
        <p>
          Bias can enter through collection, missing populations, historical decisions, labels,
          feature choices, or deployment conditions. More examples will not fix a dataset that
          repeats the same exclusion. Examine coverage, provenance, label consistency, and relevant
          subgroup outcomes. A balanced dataset can help, but equal record counts alone do not
          establish fairness. Choose fairness measures in the context of the decision, review error
          patterns, and involve people who understand the affected users.
        </p>
        <p>
          Transparency and explainability answer related questions. Transparency concerns what is
          known about a system’s purpose, development, data, limitations, and operation.
          Explainability concerns understanding the factors behind behavior or a particular
          prediction. A model may publish useful documentation while still making a specific
          decision difficult to explain. An open model also needs review of its license, training
          information, intended uses, and evaluation evidence; openness alone does not settle
          whether it is appropriate.
        </p>
        <p>
          Amazon SageMaker Model Cards helps document information such as intended use, evaluation,
          and risk considerations. SageMaker Clarify provides bias and prediction-explanation
          capabilities; its current documentation says it is closed to new customers while
          existing customers can continue using it. Feature attribution can help investigate which
          inputs influenced a prediction, but influence is not proof of causation. Bedrock evaluations
          helps compare model behavior, while Bedrock Guardrails provides configurable filtering
          and other safeguards. Each produces evidence or controls for a particular concern, rather
          than a guarantee that every output is safe or fair.
        </p>
        <p>
          Human-centered design makes limits and decisions understandable to the people using the
          system. Explain the appropriate use, provide accessible feedback and correction paths,
          and assign a person or team to investigate problems. Human review needs enough information,
          time, and authority to change an outcome. Compare accuracy, interpretability, safety,
          and usefulness when choosing a model. A more complex model may improve a score while
          making the required explanation harder to provide.
        </p>
        <p>
          Generative AI also creates risks around intellectual property, harmful or biased output,
          hallucinations, user reliance, and loss of trust. Check rights and permitted uses for
          input data and model outputs, establish a review process for the intended publication or
          action, and document unresolved risks. Environmental considerations include the model
          size, compute required, and volume of unnecessary inference. A smaller model or a simpler
          approach may meet the quality requirement with fewer resources; test that assumption
          against the actual task.
        </p>
      </>
    ),
    scenario: (
      <>
        <p>
          A retailer uses a classifier to identify support messages that need urgent attention.
          Overall results look strong, but staff notice that messages written in a less common
          language are often placed in the routine queue. The development dataset contains few
          such messages, and some urgency labels were assigned by people who could not read them.
        </p>
        <p>
          The team audits label quality with qualified reviewers and compares missed-urgency rates
          across language groups. It adds representative examples, evaluates suitable language
          support, and checks whether the revised process improves the affected cases. A single
          overall accuracy number would have hidden this service problem. The team also examines
          whether a language-related feature has become a shortcut for priority rather than useful
          evidence about the issue.
        </p>
        <p>
          Customers can request a review, and staff see the message details needed to override an
          incorrect priority. The team documents the supported languages, known limitations, review
          owner, and monitoring plan. This combination connects measurement with a way to correct
          actual outcomes; adding a model card alone would not repair the queue’s mistakes.
        </p>
      </>
    ),
    comparison: (
      <ComparisonTable
        caption="Turn responsible AI goals into evidence and actions"
        columns={['Concern', 'Useful evidence or control', 'Limit to remember']}
        rows={[
          ['Fairness and inclusivity', 'Representative data, label audits, and relevant subgroup metrics', 'A good aggregate score can hide unequal error rates.'],
          ['Transparency', 'Documented purpose, data origins, evaluations, and limitations', 'Documentation does not itself explain every prediction.'],
          ['Explainability', 'Interpretable models and appropriate explanation tools', 'Feature influence does not establish a causal relationship.'],
          ['Safety and veracity', 'Grounding, safeguards, evaluation, and effective human review', 'A filter cannot guarantee the absence of harmful or inaccurate output.'],
          ['Human-centered design', 'Accessible explanations, feedback, correction, and escalation', 'Review works only when a reviewer can understand and change the outcome.'],
          ['Sustainability', 'Task-appropriate model size and efficient use of compute', 'Reduced resource use must still meet the required quality.'],
        ]}
      />
    ),
    misconception: 'A model card, an open license, or a fairness tool provides useful information, but none independently certifies that an application is fair, explainable, and appropriate for every user.',
    check: {
      prompt: 'Two models have similar overall accuracy, but one has a much higher error rate for a smaller language group. What should the team examine before selection?',
      explanation: (
        <p>
          Investigate representation, label quality, language support, and the consequences of
          errors for that group. Compare relevant subgroup measures and test improvements with
          qualified reviewers. Document remaining limitations and a correction path; selecting
          only from the overall accuracy would overlook the uneven service quality.
        </p>
      ),
    },
  },
  'aif-security-governance': {
    explanation: (
      <>
        <p>
          AI systems inherit ordinary application security responsibilities and add new data and
          interaction paths. Under the AWS shared responsibility model, AWS protects the cloud
          infrastructure; customers control their content, access configuration, and application
          use. A managed model service does not decide which employee may read a document, which
          tool an agent should be allowed to invoke, or how long an organization should retain
          customer conversations.
        </p>
        <p>
          Apply least privilege with AWS Identity and Access Management (IAM) roles and policies.
          Give a retrieval component access only to the data it needs and an action tool only the
          permissions required for its task. Authenticate the user and preserve that user’s access
          boundaries throughout retrieval and tool use. AgentCore Identity supports agent identity
          and credential management; Policy in AgentCore can apply rules to agent-tool interactions.
          A model’s interpretation of a request is not a substitute for a backend authorization
          decision.
        </p>
        <p>
          Protect stored data with appropriate encryption and key controls, and protect data in
          transit with TLS. AWS PrivateLink provides private connectivity to supported services;
          it does not replace identity or document permissions. Amazon Macie helps discover
          sensitive data in Amazon S3. Minimize unnecessary personal information in datasets,
          prompts, memory, and logs. Privacy-enhancing techniques include removing unnecessary
          identifiers and using masking, redaction, or pseudonymization where appropriate. Combine
          these with access restrictions and integrity checks; transformed data still needs
          protection when it can be linked back to a person.
        </p>
        <p>
          Treat model inputs and outputs as application data that needs validation. Retrieved
          documents and tool responses can contain malicious instructions. Restrict tools, check
          arguments, filter inappropriate or sensitive content, and validate a result before it
          triggers another action. Bedrock Guardrails can help detect or filter configured content
          and check grounding. For hallucinations, compare important claims against authorized
          sources, validate structured fields, and escalate unsupported conclusions. Confidence
          signals must be evaluated against actual outcomes; a confident tone or self-reported
          score does not establish correctness.
        </p>
        <p>
          Data lineage records where data came from and how it was transformed. Cataloging,
          source citations, dataset versions, and model documentation help trace an answer or
          investigate a later issue. Governance defines owners, permitted uses, review cadence,
          release approvals, incident handling, and training requirements. It also addresses data
          location, retention, deletion, and monitoring. Confirm the relevant service configuration,
          including any cross-Region processing, against the organization’s requirements.
        </p>
        <p>
          Know the distinct governance tools. AWS CloudTrail records supported API activity;
          it should not be assumed to contain complete prompt and response bodies. Application
          and model invocation logging need deliberate configuration and protection. AWS Config
          records resource configuration and supports compliance rule evaluation. Amazon Inspector
          finds vulnerabilities in supported workloads. AWS Artifact provides access to AWS
          compliance reports and agreements, while AWS Trusted Advisor provides supported best
          practice checks. These services support an organization’s evidence and controls; no
          single service declares every application compliant.
        </p>
        <p>
          Scope the use case before choosing governance controls. The AWS Generative AI Security
          Scoping Matrix distinguishes using external applications from building increasingly
          customized systems. More control over models and data also creates more responsibility
          for securing them. Review the applicable organizational and regulatory requirements with
          the responsible specialists, retain the evidence they need, and revisit the controls
          when the application, data sources, or tools change.
        </p>
      </>
    ),
    scenario: (
      <>
        <p>
          A company builds an internal policy assistant. General staff can read the employee
          handbook, but only payroll staff may read individual salary records. Placing both
          collections behind a private endpoint does not resolve that distinction. The retrieval
          layer must authenticate the employee and exclude records that employee is not permitted
          to see before any passages enter the model’s context.
        </p>
        <p>
          A malicious document tells the assistant to send its retrieved material to an external
          address. The assistant’s role permits approved document search and has no email-sending
          capability. The application treats document text as untrusted evidence, validates the
          generated answer, and checks citations. These measures address instruction attacks,
          data access, and output handling at their respective boundaries.
        </p>
        <p>
          For an investigation, the team retains the approved prompt and model versions, relevant
          source identifiers, access decisions, and protected operational logs under a defined
          retention policy. It avoids casually copying sensitive document bodies into broadly
          accessible logs. An assigned owner reviews access changes and tests whether deleting or
          withdrawing a source also removes it from future retrieval. Governance makes those
          responsibilities explicit and repeatable.
        </p>
      </>
    ),
    comparison: (
      <ComparisonTable
        caption="Separate the security or governance question from the AWS tool"
        columns={['Question', 'Relevant AWS capability', 'Boundary']}
        rows={[
          ['Who may perform this action?', 'IAM roles and policies; AgentCore Identity and Policy', 'Enforce permissions in trusted services and tool backends.'],
          ['How does traffic reach the service?', 'AWS PrivateLink for supported services', 'Private routing does not establish a user’s document access rights.'],
          ['Where is sensitive stored information?', 'Amazon Macie for Amazon S3', 'Discovery supports protection; data permissions still need configuration.'],
          ['What API activity or configuration changed?', 'AWS CloudTrail and AWS Config', 'Activity records and configuration history are different from complete conversation logs.'],
          ['Are supported workloads vulnerable?', 'Amazon Inspector', 'Vulnerability findings do not evaluate every model behavior.'],
          ['What provider evidence or guidance is available?', 'AWS Artifact and AWS Trusted Advisor', 'Reports and checks support the organization’s own compliance process.'],
        ]}
      />
    ),
    misconception: 'Encryption and a private endpoint protect important boundaries, but they do not decide which documents a particular user may see or make an AI application automatically compliant.',
    check: {
      prompt: 'An encrypted RAG assistant uses a private connection, yet an employee receives another team’s restricted documents. Which control failed?',
      explanation: (
        <p>
          Authorization failed in the data access or retrieval path. Enforce the requesting user’s
          permissions before restricted content reaches the model, then test access boundaries
          across users and teams. Encryption and private connectivity protect storage and transport;
          they cannot supply missing document-level access decisions.
        </p>
      ),
    },
  },
};

export function AifLessons() {
  return (
    <>
      {AIF_LESSONS.map((lesson) => (
        <LearningLesson key={lesson.id} lesson={lesson} content={content[lesson.id]} />
      ))}
    </>
  );
}
