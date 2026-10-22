type DiagramKind = "ai-map" | "lifecycle" | "rag" | "agent" | "precision-recall" | "service-choice" | "responsible-review" | "security-boundaries"
type Step = readonly [title: string, detail: string]

const descriptions: Record<DiagramKind, readonly [string, string]> = {
  "ai-map": ["How AI, machine learning, and deep learning relate", "Machine learning is one approach within AI, and deep learning is an approach within machine learning. The smaller boxes show those relationships. Beside them, you can see what generative AI does and how an agent is organized."],
  lifecycle: ["A machine learning lifecycle", "Start with the decision the business needs to improve, then follow the steps through to everyday use. What you learn during evaluation or monitoring may send you back to an earlier step."],
  rag: ["How a RAG assistant can find information before answering", "This example has two parts: preparing a searchable index and finding permitted information for a question. It uses vectors to find similar content, but other RAG designs can retrieve information differently."],
  agent: ["An agent working within a permission boundary", "Follow what happens when a user asks an agent to do something. The agent can choose a next step, but its tools must still respect access rules and any required approvals."],
  "precision-recall": ["Two questions about the same scam detector", "Of 1,000 messages, 20 are scams. The detector raises 25 alerts, but only 15 are actual scams; the other 10 are ordinary messages. It also misses 5 scams."],
  "service-choice": ["Choose a service from the work you need to do", "Start with the job your team needs to do. These options can overlap, so use them as starting points and check the particular features and operating needs."],
  "responsible-review": ["Check who experiences the errors", "A good overall result can hide a worse experience for some people. Follow the steps below to investigate the difference, try an improvement and check whether it helped."],
  "security-boundaries": ["Keep data and actions inside the user's permissions", "In this assistant example, access is checked before information is shared or an action is taken. A private connection protects the network path, but doesn’t decide who may read a document or use a tool."],
}

function Flow({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className="space-y-3">
      {steps.map(([title, detail], index) => (
        <li key={title} className="relative flex min-w-0 gap-3">
          <div className="flex w-7 shrink-0 flex-col items-center">
            <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-sm font-semibold">{index + 1}</span>
            {index < steps.length - 1 && <span aria-hidden="true" className="mt-1 flex flex-1 items-end text-base text-brand">↓</span>}
          </div>
          <div className="min-w-0 flex-1 rounded-lg border bg-background px-3 py-2.5">
            <p className="text-base font-semibold leading-snug">{title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function LearningDiagram({ kind }: { kind: DiagramKind }) {
  const [title, description] = descriptions[kind]
  return (
    <figure data-testid="learning-diagram" data-diagram={kind} className="my-6 min-w-0 rounded-xl border bg-card p-4 text-foreground sm:p-5">
      <figcaption className="mb-5">
        <p className="font-heading text-lg font-semibold leading-snug">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </figcaption>
      {kind === "ai-map" && (
        <div className="grid min-w-0 gap-4 md:grid-cols-2">
          <div className="min-w-0 rounded-lg border border-brand/40 bg-brand/5 p-3">
            <p className="text-base font-semibold">1. Artificial intelligence (AI)</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">AI is the broad field. It includes methods that learn from data as well as other approaches.</p>
            <div className="mt-3 rounded-lg border border-brand/40 bg-card p-3">
              <p className="text-base font-semibold">2. Machine learning (ML)</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Machine learning builds models by learning patterns from data.</p>
              <div className="mt-3 rounded-lg border border-brand/40 bg-brand/10 p-3">
                <p className="text-base font-semibold">3. Deep learning (DL)</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Deep learning is machine learning that uses neural networks with many layers.</p>
              </div>
            </div>
          </div>
          <dl className="space-y-4 rounded-lg border bg-muted/30 p-4">
            <div><dt className="text-base font-semibold">Generative AI: a capability</dt><dd className="mt-1 text-sm leading-relaxed text-muted-foreground">Generative AI creates content, such as text or images. Modern systems often use deep learning to do this.</dd></div>
            <div><dt className="text-base font-semibold">Agent: a system pattern</dt><dd className="mt-1 text-sm leading-relaxed text-muted-foreground">An agent chooses steps toward a goal and may use tools. A generative model can help it decide what to do next.</dd></div>
            <div><dt className="text-base font-semibold">How to read the boxes</dt><dd className="mt-1 text-sm leading-relaxed text-muted-foreground">Each smaller box sits within a broader field. Generating content and organizing an agent describe different aspects of a system, so they appear beside that hierarchy.</dd></div>
          </dl>
        </div>
      )}
      {kind === "lifecycle" && (
        <div>
          <Flow steps={[
            ["Business goal", "Decide what should improve, how you’ll measure success and whether ML fits the problem."],
            ["Data", "Collect data you’re allowed to use, check its quality and keep separate examples for training and evaluation."],
            ["Train", "Use the training data and chosen method to teach the model useful patterns."],
            ["Evaluate", "Check how well the model works, what risks remain and whether it meets the business goal."],
            ["Deploy", "Make the approved model available, with the controls needed to run it safely and reliably."],
            ["Monitor", "Watch its quality, changing data, cost and effects as people use it."],
          ]} />
          <p className="mt-4 rounded-lg border border-dashed border-brand/40 bg-brand/5 p-3 text-sm leading-relaxed"><span className="font-semibold">Feedback loop ↶</span> What you observe may lead you back to the goal, data, training or deployment. Investigate the cause first, then retrain and evaluate again if the evidence supports that choice.</p>
        </div>
      )}
      {kind === "rag" && (
        <div className="grid min-w-0 gap-5 md:grid-cols-2">
          <div className="min-w-0">
            <p className="mb-3 text-base font-semibold text-brand">A. Prepare the documents for search</p>
            <Flow steps={[
              ["Documents", "Choose trusted documents and keep track of who is allowed to read them."],
              ["Chunks", "Split each document into passages while keeping a reference to its source."],
              ["Embeddings", "Represent each passage as a vector—a list of numbers used to find similar content."],
              ["Index", "Store the vectors with references to the text and the information needed to enforce access."],
            ]} />
          </div>
          <div className="min-w-0">
            <p className="mb-3 text-base font-semibold text-brand">B. Find evidence and answer a question</p>
            <Flow steps={[
              ["Question", "Represent the question as a vector too, so it can be compared with the indexed passages."],
              ["Retrieve permitted context", "Search the index for relevant passages, and include only material the requester is allowed to read."],
              ["Model", "Give the model the question and the retrieved passages so it can use them while answering."],
              ["Answer with citations", "Include source references so the reader can check the answer. A citation is helpful, but it isn’t proof that the answer is correct."],
            ]} />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-2">The answer uses the index prepared in part A. Giving the model these passages doesn’t retrain it, so you still need to choose reliable sources and check that they support the answer.</p>
        </div>
      )}
      {kind === "agent" && (
        <div>
          <Flow steps={[
            ["User request", "The user explains what they want to achieve and any limits on the task."],
            ["Agent", "The agent chooses a next step within the instructions and permissions it has been given."],
            ["Permitted tool", "The application checks permission before the tool acts and obtains any required approval for a high-impact action."],
            ["Tool result", "The tool returns information or an action result. Check that result before deciding what should happen next."],
            ["Response", "The assistant explains what happened, what supports that conclusion and whether anything remains unfinished."],
          ]} />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <p className="rounded-lg border border-brand/40 bg-brand/5 p-3 text-sm leading-relaxed"><span className="block text-base font-semibold">Approval boundary</span> Before a high-impact action, such as sending a payment, the application must obtain any required approval.</p>
            <p className="rounded-lg border bg-muted/30 p-3 text-sm leading-relaxed"><span className="block text-base font-semibold">Memory is context</span> Remembered information can help the agent understand a request. It cannot give permission or approval to use a tool.</p>
          </div>
        </div>
      )}
      {kind === "precision-recall" && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-background p-4">
            <p className="text-base font-semibold">Precision: how often is an alert right?</p>
            <p className="mt-3 text-base leading-relaxed">15 real scams ÷ 25 alerts = <strong>60%</strong></p>
            <div aria-hidden="true" className="my-3 h-3 overflow-hidden rounded-full bg-muted"><div className="h-full w-3/5 bg-brand" /></div>
            <p className="text-sm leading-relaxed text-muted-foreground">Ten of the alerts are false alarms. Precision tells you how much you can trust an alert: a higher value means a smaller share of alerts are false alarms.</p>
          </div>
          <div className="rounded-lg border bg-background p-4">
            <p className="text-base font-semibold">Recall: how many scams did I find?</p>
            <p className="mt-3 text-base leading-relaxed">15 found ÷ 20 actual scams = <strong>75%</strong></p>
            <div aria-hidden="true" className="my-3 h-3 overflow-hidden rounded-full bg-muted"><div className="h-full w-3/4 bg-brand" /></div>
            <p className="text-sm leading-relaxed text-muted-foreground">Five of the actual scams slipped through. Recall tells you how many scams you found: a higher value means fewer of the real scams were missed.</p>
          </div>
        </div>
      )}
      {kind === "service-choice" && (
        <dl className="grid gap-3 lg:grid-cols-3">
          {[
            ["Build an application with foundation models", "Amazon Bedrock", "Bedrock gives your application access to foundation models and related capabilities without your team having to operate the underlying model infrastructure."],
            ["Develop, train and run a model", "Amazon SageMaker AI", "SageMaker AI provides tools across the machine-learning lifecycle when your team needs to develop and operate a model."],
            ["Give staff a connected business workspace", "Amazon Quick", "Quick gives people a business workspace where they can find connected information, analyze it and take supported actions."],
          ].map(([job, service, detail]) => (
            <div key={service} className="min-w-0 rounded-lg border bg-background p-4">
              <dt className="text-base leading-snug"><span className="block font-semibold">{job}</span><span className="mt-3 block font-semibold text-brand">{service}</span></dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</dd>
            </div>
          ))}
        </dl>
      )}
      {kind === "responsible-review" && (
        <Flow steps={[
          ["Compare relevant outcomes", "Compare false alarms and missed cases for the groups relevant to the task, while protecting people’s privacy."],
          ["Investigate the gap", "Look at the examples, data coverage, labels and decision involved. A difference is a reason to investigate; it doesn’t tell you the cause by itself."],
          ["Improve and evaluate again", "Try changes to the data, design or working process, then check the overall results and the results for relevant groups again."],
          ["Give people a way to challenge mistakes", "Make important decisions reviewable, and give affected people a practical way to challenge an error."],
        ]} />
      )}
      {kind === "security-boundaries" && (
        <Flow steps={[
          ["Identify the requester", "Check who the user is, then find out what they’re allowed to do."],
          ["Retrieve permitted information", "Check document permissions before text reaches the model. Don’t pass in restricted passages and expect the model to hide them."],
          ["Check generated output", "Check the proposed response before relying on it; it may contain mistakes or unsafe instructions."],
          ["Authorize the tool action", "Give the tool only the access it needs, and obtain any required approval before a high-impact action."],
          ["Keep protected evidence", "Keep useful records of access and actions, while protecting sensitive prompts and following the rules for how long information is retained."],
        ]} />
      )}
    </figure>
  )
}
