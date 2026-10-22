type DiagramKind = "ai-map" | "lifecycle" | "rag" | "agent"
type Step = readonly [title: string, detail: string]

const descriptions: Record<DiagramKind, readonly [string, string]> = {
  "ai-map": ["How AI, machine learning, and deep learning relate", "Read inward: AI contains machine learning, which contains deep learning. Generative AI describes a capability; an agent describes a system design."],
  lifecycle: ["A machine learning lifecycle", "Follow the numbered steps from a business goal to monitoring. Feedback can send work back to an earlier step; retraining depends on the evidence."],
  rag: ["A common vector retrieval augmented generation pattern", "Prepare a searchable index first, then retrieve permitted context for each question. This is one common RAG design; RAG does not always require vectors."],
  agent: ["An agent working within a permission boundary", "Follow a request through an agent, an allowed tool, its result, and a response. Tool access and approval rules apply throughout the flow."],
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
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">The broad field; includes learning methods and other approaches.</p>
            <div className="mt-3 rounded-lg border border-brand/40 bg-card p-3">
              <p className="text-base font-semibold">2. Machine learning (ML)</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">An AI approach that learns patterns from data.</p>
              <div className="mt-3 rounded-lg border border-brand/40 bg-brand/10 p-3">
                <p className="text-base font-semibold">3. Deep learning (DL)</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">ML using multilayer neural networks.</p>
              </div>
            </div>
          </div>
          <dl className="space-y-4 rounded-lg border bg-muted/30 p-4">
            <div><dt className="text-base font-semibold">Generative AI: a capability</dt><dd className="mt-1 text-sm leading-relaxed text-muted-foreground">Creates content such as text or images. Modern systems often use deep learning.</dd></div>
            <div><dt className="text-base font-semibold">Agent: a system pattern</dt><dd className="mt-1 text-sm leading-relaxed text-muted-foreground">Selects steps toward a goal and may use tools. It can use a generative model.</dd></div>
            <div><dt className="text-base font-semibold">Read the relationships</dt><dd className="mt-1 text-sm leading-relaxed text-muted-foreground">The three nested boxes show subsets. Capability and system design are separate dimensions, so they are shown beside the boxes.</dd></div>
          </dl>
        </div>
      )}
      {kind === "lifecycle" && (
        <div>
          <Flow steps={[
            ["Business goal", "Define the decision, success measure, constraints, and whether ML fits."],
            ["Data", "Collect permitted data, check quality, and prepare training and evaluation splits."],
            ["Train", "Fit a model using the training data and chosen method."],
            ["Evaluate", "Check performance, relevant risks, and the business success measure."],
            ["Deploy", "Release an approved model with appropriate operating controls."],
            ["Monitor", "Observe quality, drift, cost, and impact as conditions change."],
          ]} />
          <p className="mt-4 rounded-lg border border-dashed border-brand/40 bg-brand/5 p-3 text-sm leading-relaxed"><span className="font-semibold">Feedback loop ↶</span> Monitoring or evaluation may lead back to the goal, data, training, or deployment. Investigate first; retrain and re-evaluate when justified.</p>
        </div>
      )}
      {kind === "rag" && (
        <div className="grid min-w-0 gap-5 md:grid-cols-2">
          <div className="min-w-0">
            <p className="mb-3 text-base font-semibold text-brand">A. Ingestion: prepare the knowledge</p>
            <Flow steps={[
              ["Documents", "Choose trusted sources and retain their access rules."],
              ["Chunks", "Split content into passages and keep source references."],
              ["Embeddings", "Represent each passage as a vector for similarity search."],
              ["Index", "Store vectors, source text references, and access metadata for retrieval."],
            ]} />
          </div>
          <div className="min-w-0">
            <p className="mb-3 text-base font-semibold text-brand">B. Query time: answer a question</p>
            <Flow steps={[
              ["Question", "Embed the question for this vector search example."],
              ["Retrieve permitted context", "Search the prepared index and enforce the requester's access rules."],
              ["Model", "Provide the question and retrieved passages as context to generate a response."],
              ["Answer with citations", "Return source references so the reader can check support. Citations alone do not prove accuracy."],
            ]} />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-2">The query uses the index prepared during ingestion. Supplying retrieved context does not itself retrain the model; source selection and answer checking still matter.</p>
        </div>
      )}
      {kind === "agent" && (
        <div>
          <Flow steps={[
            ["User request", "State the goal and relevant constraints."],
            ["Agent", "Choose a next step within the system's instructions and permissions."],
            ["Permitted tool", "Check access before execution. Require approval at the boundary before a high impact action."],
            ["Tool result", "Return data or an action result; validate it before deciding whether another step is needed."],
            ["Response", "Explain the outcome, supporting evidence, and any unfinished work."],
          ]} />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <p className="rounded-lg border border-brand/40 bg-brand/5 p-3 text-sm leading-relaxed"><span className="block text-base font-semibold">Approval boundary</span> A high impact action, such as sending a payment, waits for required approval before the tool acts.</p>
            <p className="rounded-lg border bg-muted/30 p-3 text-sm leading-relaxed"><span className="block text-base font-semibold">Memory is context</span> Remembered information can inform a decision. It does not grant tool permissions or approval.</p>
          </div>
        </div>
      )}
    </figure>
  )
}
