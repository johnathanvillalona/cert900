// aif-c01 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "aif-c01",
  questions: [
  {
    "t": "feature-engineering",
    "x": "A retail analytics team has a raw column holding purchase timestamps. To help a demand model learn weekly rhythms, an engineer derives separate columns for day of week and hour of day. What is this activity called?",
    "o": [
      "Feature engineering",
      "Hyperparameter tuning",
      "Model quantization",
      "Data replication"
    ],
    "a": 0,
    "e": "Creating new, more informative inputs from raw fields is feature engineering, and calendar parts extracted from a timestamp are a classic example. Hyperparameter tuning is attractive because it also happens before final training, but it adjusts settings such as depth or learning rate rather than the inputs themselves."
  },
  {
    "t": "feature-engineering",
    "x": "An engineer notices that one input measured in dollars spans 5 to 900,000 while another spans 0 to 1, and the training algorithm keeps favoring the larger column. Which preparation step addresses this?",
    "o": [
      "Normalizing the numeric inputs to a common range",
      "Increasing the number of training epochs",
      "Adding more rows to the training dataset",
      "Switching the loss function to cross-entropy"
    ],
    "a": 0,
    "e": "Scaling inputs onto a comparable range keeps a wide-magnitude column from dominating distance and gradient calculations. Adding more rows sounds helpful but does nothing about the mismatch in units, because the imbalance is in the scale of the columns rather than the amount of data."
  },
  {
    "t": "feature-engineering",
    "x": "A model cannot consume a column that stores shipping method as the words ground, air, or freight. Which transformation makes this column usable by the algorithm?",
    "o": [
      "One-hot encoding of the category values",
      "Random shuffling of the row order",
      "Splitting the data into train and test sets",
      "Removing the column from the dataset"
    ],
    "a": 0,
    "e": "Algorithms need numbers, so categorical text is expanded into indicator columns through one-hot encoding. Dropping the column is tempting as a shortcut, but shipping method may carry real predictive signal and discarding it throws that signal away."
  },
  {
    "t": "feature-engineering",
    "x": "A team is preparing tabular sensor data before training a maintenance model. Which activities count as feature engineering? (Select TWO.)",
    "o": [
      "Deriving a rolling seven-day average from raw readings",
      "Choosing how many layers the neural network will have",
      "Combining height and weight into a single ratio column",
      "Provisioning larger instances for the training cluster",
      "Setting the learning rate used by the optimizer"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Both keys create new input columns out of existing data, which is exactly what feature engineering means. Layer count and learning rate are model hyperparameters, and instance sizing is infrastructure, so none of those three change the inputs the model sees."
  },
  {
    "t": "feature-engineering",
    "x": "A credit model uses 400 input columns, many of them redundant, and training has become slow and unstable. Which technique most directly reduces the number of inputs while retaining useful signal?",
    "o": [
      "Feature selection",
      "Data augmentation",
      "Label smoothing",
      "Batch inferencing"
    ],
    "a": 0,
    "e": "Feature selection keeps the columns that contribute predictive value and discards the rest, cutting training time and noise. Data augmentation is a plausible-looking choice because it also reshapes the dataset, but it adds synthetic examples rather than trimming columns."
  },
  {
    "t": "inferencing-types",
    "x": "A hospital triage app must return a risk score to the clinician's screen within about 200 milliseconds of a nurse submitting vitals. Which inference pattern should the team deploy?",
    "o": [
      "A real-time endpoint that responds per request",
      "A scheduled job that scores files overnight",
      "An asynchronous queue drained once per hour",
      "A manual export reviewed by an analyst weekly"
    ],
    "a": 0,
    "e": "An interactive, sub-second requirement calls for a persistent real-time endpoint that answers each request as it arrives. An hourly queue is a reasonable pattern for heavy payloads, but a delay measured in minutes or hours cannot support a clinician waiting at the bedside."
  },
  {
    "t": "inferencing-types",
    "x": "A marketing department scores 40 million customer records for propensity once each month and writes the output to a data warehouse. Which characteristic makes batch inference attractive here?",
    "o": [
      "Compute runs only while the job executes",
      "Each record gets a sub-second response",
      "A persistent endpoint stays warm continuously",
      "Predictions update the instant data changes"
    ],
    "a": 0,
    "e": "Batch jobs spin up resources, process the whole dataset, and shut down, so nothing is billed between monthly runs. A continuously warm endpoint is the opposite trade-off and would cost money for the 30 days when no scoring is happening."
  },
  {
    "t": "inferencing-types",
    "x": "An ML team deployed a persistent endpoint for a model that is invoked only twice a day, and the monthly bill is far higher than expected. What is the most likely explanation?",
    "o": [
      "The endpoint is billed for idle uptime",
      "The model artifacts are stored in S3",
      "The training data contains duplicate rows",
      "The model has too few input features"
    ],
    "a": 0,
    "e": "A dedicated endpoint bills for the hours it is provisioned, not for the handful of requests it serves, so low traffic on an always-on host is expensive. Artifact storage is a real cost but a trivial one compared with continuously running inference hosts."
  },
  {
    "t": "inferencing-types",
    "x": "An architect is weighing deployment options for a genomics scoring workload that has no interactive users and very large input files. Which factors favor a batch approach? (Select TWO.)",
    "o": [
      "Results are not needed until the next morning",
      "Every prediction must return in under a second",
      "Millions of records are processed in one pass",
      "Users expect a response inside a web form",
      "The application calls the model on each click"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Tolerance for delay and high per-run volume are the two signals that batch processing fits. The other three describe interactive traffic, where a user or a page is waiting, and those requirements point to a real-time endpoint instead."
  },
  {
    "t": "inferencing-types",
    "x": "A video platform generates captions for uploads, users accept waiting several minutes on a long file, and request payloads vary wildly in size. Which option handles large payloads without holding an open connection?",
    "o": [
      "Asynchronous inference",
      "Synchronous inference",
      "Interactive inference",
      "Streaming ingestion"
    ],
    "a": 0,
    "e": "Asynchronous inference queues each request, processes large payloads in the background, and notifies the caller when the result is ready. Synchronous inference is the intuitive default, but it keeps the connection open and imposes tight payload and timeout limits."
  },
  {
    "t": "ml-algorithms",
    "x": "A utility wants to estimate tomorrow's peak electricity demand in megawatts from weather and calendar inputs. Which algorithm family fits this output?",
    "o": [
      "Regression",
      "Classification",
      "Clustering",
      "Tokenization"
    ],
    "a": 0,
    "e": "The target is a continuous quantity on a numeric scale, which is the definition of a regression problem. Classification is a common mix-up here, but it assigns each case to a discrete category rather than producing a measured amount."
  },
  {
    "t": "ml-algorithms",
    "x": "A logistics firm wants to group 60,000 delivery routes into similar families so it can design new service tiers, and no route has ever been tagged by a human. Which technique applies?",
    "o": [
      "Clustering",
      "Regression",
      "Binary classification",
      "Reinforcement learning"
    ],
    "a": 0,
    "e": "With no existing labels and a goal of discovering natural groupings, clustering is the right unsupervised technique. Binary classification looks plausible because it also sorts records, but it requires labeled examples of each class before it can be trained."
  },
  {
    "t": "ml-algorithms",
    "x": "An insurer must sort each incoming claim into one of five handling queues based on its text and metadata. Which problem type describes this task?",
    "o": [
      "Multiclass classification",
      "Linear regression",
      "Anomaly detection",
      "Dimensionality reduction"
    ],
    "a": 0,
    "e": "Assigning every case to exactly one of several known categories is multiclass classification. Anomaly detection is superficially similar because it also inspects each record, but it flags unusual outliers rather than routing every claim into a defined queue."
  },
  {
    "t": "ml-algorithms",
    "x": "A data scientist is labeling problem types across a project backlog. Which items are regression problems? (Select TWO.)",
    "o": [
      "Forecasting next quarter's revenue in dollars",
      "Deciding whether a photo shows a defect",
      "Estimating a home's resale price from its attributes",
      "Routing a ticket to one of six support teams",
      "Grouping unlabeled sensors by behavior patterns"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Both keys predict a continuous numeric value, which is what regression does. The defect check and the ticket routing are classification, and grouping unlabeled sensors is clustering, so none of those three produce a number on a continuous scale."
  },
  {
    "t": "ml-algorithms",
    "x": "A security team wants to surface network sessions that differ markedly from normal traffic, without maintaining a list of known attack signatures. Which approach fits?",
    "o": [
      "Anomaly detection",
      "Multiclass classification",
      "Linear regression",
      "Prompt engineering"
    ],
    "a": 0,
    "e": "Anomaly detection learns a profile of normal behavior and flags departures from it, which is what the team needs when no signature list exists. Multiclass classification would require labeled examples of each attack type in advance, defeating the stated goal."
  },
  {
    "t": "overfitting-underfitting",
    "x": "A team plots training error dropping steadily while validation error begins to climb after a certain epoch. Which remedy is most appropriate?",
    "o": [
      "Stop training earlier",
      "Remove the validation split",
      "Increase the model depth",
      "Extend training much longer"
    ],
    "a": 0,
    "e": "Diverging curves mean the model has started memorizing the training set, and halting at the point where validation error bottoms out preserves generalization. Training longer feels productive because training error keeps falling, but it drives the gap wider."
  },
  {
    "t": "overfitting-underfitting",
    "x": "A very small decision tree gives mediocre results on both the training split and the holdout split of a rich dataset. Which term describes this situation?",
    "o": [
      "Underfitting",
      "Overfitting",
      "Data leakage",
      "Class imbalance"
    ],
    "a": 0,
    "e": "Poor performance everywhere means the model is too simple to capture the structure in the data, which is underfitting. Overfitting is the reflexive answer whenever results disappoint, but it produces strong training scores alongside weak holdout scores."
  },
  {
    "t": "overfitting-underfitting",
    "x": "An engineer wants an honest estimate of generalization from a limited dataset by rotating which slice is held out across several rounds. Which practice is described?",
    "o": [
      "Cross-validation",
      "Feature scaling",
      "Early stopping",
      "Batch inference"
    ],
    "a": 0,
    "e": "Cross-validation rotates the holdout portion across folds and averages the results, which squeezes a reliable estimate out of scarce data. Early stopping is also a generalization safeguard, but it decides when to halt a single run rather than how to score one."
  },
  {
    "t": "overfitting-underfitting",
    "x": "A model memorizes its training set and performs badly on new records. Which changes would help reduce this behavior? (Select TWO.)",
    "o": [
      "Apply regularization during training",
      "Train for many additional epochs",
      "Gather more diverse training examples",
      "Add more parameters to the network",
      "Evaluate only on the training split"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Regularization penalizes overly complex fits and broader data gives the model less room to memorize, so both push toward generalization. Extra epochs and extra parameters increase capacity to memorize, and evaluating only on training data hides the problem entirely."
  },
  {
    "t": "training-data-types",
    "x": "A team exports rows from a relational database where every column has a defined type and a documented meaning. How is this data best described?",
    "o": [
      "Structured data",
      "Unstructured data",
      "Streaming data",
      "Synthetic data"
    ],
    "a": 0,
    "e": "A fixed schema with typed columns is the definition of structured data, and it is the easiest form to feed into classic tabular algorithms. Streaming data describes how records arrive over time rather than how they are organized, so it answers a different question."
  },
  {
    "t": "training-data-types",
    "x": "An archive holds scanned contracts, call recordings, and marketing photographs with no fixed schema. Which category does this content fall into?",
    "o": [
      "Unstructured data",
      "Structured data",
      "Tabular data",
      "Time-series data"
    ],
    "a": 0,
    "e": "Documents, audio, and images carry no predefined field layout, which makes them unstructured and typically the input to services such as Textract, Transcribe, or Rekognition. Tabular data is the direct opposite, organized into rows and typed columns."
  },
  {
    "t": "training-data-types",
    "x": "A retailer holds one million product photographs, of which 5,000 carry a human-assigned category tag. What is the correct description of the remaining images?",
    "o": [
      "Unlabeled data",
      "Labeled data",
      "Validation data",
      "Encrypted data"
    ],
    "a": 0,
    "e": "Images with no assigned target value are unlabeled, and they cannot train a supervised model until annotation work is done. Validation data is a tempting pick, but a validation set is a labeled slice deliberately held back for scoring."
  },
  {
    "t": "training-data-types",
    "x": "A practitioner must explain to stakeholders why a supervised project needs annotation work. Which statements about labeled data are accurate? (Select TWO.)",
    "o": [
      "It pairs each example with a known target value",
      "It removes the need for any model evaluation",
      "It is usually costlier to obtain than raw data",
      "It guarantees the model will not overfit",
      "It is required before clustering can be run"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Labels attach the ground-truth answer to each example, and producing them takes human effort that raw collection does not. Labels neither prevent overfitting nor replace evaluation, and clustering is unsupervised, so it runs on unlabeled data by design."
  },
  {
    "t": "training-data-types",
    "x": "A dataset arrives as JSON documents whose fields vary between records but still carry consistent tags and nesting. Which description applies?",
    "o": [
      "Semi-structured data",
      "Fully structured data",
      "Unstructured media",
      "Reinforcement signal"
    ],
    "a": 0,
    "e": "Self-describing formats such as JSON and XML carry organizational markers without enforcing a rigid schema, which places them between the two extremes. Fully structured is the near miss, because it implies every record shares an identical column layout."
  },
  {
    "t": "ai-ml-basics",
    "x": "A new hire asks why a neural network with many hidden layers can work directly on raw pixels while a classic algorithm usually needs hand-built inputs. What is the reason?",
    "o": [
      "The network learns its own representations",
      "The network needs far less training data",
      "The network is guaranteed to be interpretable",
      "The network avoids any need for evaluation"
    ],
    "a": 0,
    "e": "Stacked layers learn increasingly abstract representations from raw input, which is why deep learning reduces manual feature construction. Needing less data is the common misconception, since deep networks generally require far more examples, not fewer."
  },
  {
    "t": "data-prep",
    "x": "Before training a hiring model, an auditor finds that applicants from one region make up 90 percent of the rows although they represent 20 percent of real applicants. What issue must be addressed?",
    "o": [
      "Sampling bias in the dataset",
      "Insufficient compute capacity",
      "An overly small learning rate",
      "Missing model version control"
    ],
    "a": 0,
    "e": "When the collected data does not reflect the population it will serve, the model inherits that skew as sampling bias and will underperform for the underrepresented groups. Compute capacity is unrelated, because the problem lies in which records were gathered."
  },
  {
    "t": "learning-types",
    "x": "A radiology group has 300 labeled X-ray images and 40,000 unlabeled ones, and wants to use both during training to improve accuracy. Which learning approach does this describe?",
    "o": [
      "Semi-supervised learning",
      "Purely supervised learning",
      "Reinforcement learning",
      "Unsupervised learning"
    ],
    "a": 0,
    "e": "Combining a small labeled set with a much larger unlabeled pool is semi-supervised learning, and it is common where expert annotation is expensive. Purely supervised learning would ignore the 40,000 unlabeled images and waste most of the available data."
  },
  {
    "t": "ml-lifecycle",
    "x": "After a model goes live, an operations team wants an automated alert when the statistical profile of incoming requests drifts away from the profile of the data used to train it. Which practice provides this?",
    "o": [
      "Model monitoring",
      "Feature encoding",
      "Hyperparameter search",
      "Data anonymization"
    ],
    "a": 0,
    "e": "Monitoring compares live input and prediction distributions against a training baseline and raises alerts when drift crosses a threshold. Hyperparameter search is a development-time activity and cannot detect anything about production traffic."
  },
  {
    "t": "ml-services",
    "x": "A retail chain is cataloging fully managed AI services that need no model training. Which statements are correct? (Select TWO.)",
    "o": [
      "Amazon Textract extracts text and tables from documents",
      "Amazon Polly converts recorded speech into written text",
      "Amazon Lex builds conversational voice and chat bots",
      "Amazon Kendra renders synthetic speech from text input",
      "Amazon Rekognition forecasts future retail demand"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Textract pulls structured content out of scanned documents and Lex powers conversational interfaces, both without any training work. The distractors swap roles: Polly synthesizes speech rather than transcribing it, Kendra is enterprise search, and Rekognition analyzes images and video."
  },
  {
    "t": "ml-use-cases",
    "x": "An airline wants to spot which spare parts will fail soon by learning from millions of historical sensor readings that no engineer could inspect by hand. What makes this a good candidate for machine learning?",
    "o": [
      "Patterns are complex and hidden in volume",
      "The business rules are simple and fixed",
      "The output must never change over time",
      "Every case is covered by written policy"
    ],
    "a": 0,
    "e": "Machine learning earns its keep when relationships are too subtle and the data too large for a person to encode as rules. Simple fixed rules point the other way, because a deterministic program is cheaper and easier to audit when the logic is already known."
  },
  {
    "t": "model-evaluation",
    "x": "A logistics analyst is choosing evaluation metrics for a model that predicts parcel delivery cost as a dollar amount. Which metrics suit this model? (Select TWO.)",
    "o": [
      "Mean absolute error",
      "F1 score",
      "Root mean squared error",
      "Confusion matrix",
      "Area under the ROC curve"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Both keys measure how far numeric predictions land from the true values, which is what a regression model needs. F1, a confusion matrix, and area under the ROC curve all summarize classification outcomes and have no meaning for a continuous dollar target."
  },
  {
    "t": "sagemaker",
    "x": "A team wants SageMaker AI to try many hyperparameter combinations and converge on the best-scoring configuration without a person launching each run. Which capability does this?",
    "o": [
      "Automatic model tuning",
      "Ground Truth labeling",
      "Feature Store retrieval",
      "Model card generation"
    ],
    "a": 0,
    "e": "Automatic model tuning launches and evaluates training jobs across a search space and returns the configuration with the best objective score. Ground Truth is a strong-sounding option but it orchestrates human data annotation, not hyperparameter search."
  },
  {
    "t": "amazon-q",
    "x": "A software engineering group wants an assistant inside the IDE that suggests code, writes unit tests, and explains unfamiliar functions. Which offering is designed for that?",
    "o": [
      "Amazon Q Developer",
      "Amazon Q Business",
      "Amazon Comprehend",
      "Amazon SageMaker Canvas"
    ],
    "a": 0,
    "e": "Amazon Q Developer is the coding-focused assistant that integrates with popular IDEs and the command line. Amazon Q Business is the plausible sibling, but it answers questions over enterprise content rather than generating and explaining source code."
  },
  {
    "t": "amazon-q",
    "x": "A business intelligence team wants dashboard viewers to ask questions in plain English and receive narrative summaries of the visuals. Which capability provides this?",
    "o": [
      "Amazon Q in QuickSight",
      "Amazon Q Developer",
      "Amazon Kendra",
      "Amazon Athena"
    ],
    "a": 0,
    "e": "Amazon Q in QuickSight adds natural-language question answering and executive summaries directly to dashboards. Athena is an attractive distractor for analytics work, but it is a SQL query engine and produces no narrative or visual summary."
  },
  {
    "t": "amazon-q",
    "x": "A contact center supervisor wants agents to see suggested responses and relevant knowledge articles drawn from company content while a call is still in progress. Which capability fits?",
    "o": [
      "Amazon Q in Connect",
      "Amazon Q Developer",
      "Amazon Polly",
      "Amazon Translate"
    ],
    "a": 0,
    "e": "Amazon Q in Connect listens to the live interaction and surfaces recommended answers and articles to the agent in real time. Polly is tempting in a voice setting, but it only converts text into spoken audio and offers no recommendations."
  },
  {
    "t": "amazon-q",
    "x": "An enterprise is planning a rollout and needs an accurate briefing on Amazon Q Business. Which statements are correct? (Select TWO.)",
    "o": [
      "It connects to enterprise data through managed connectors",
      "It replaces the need for any identity provider",
      "It respects the access permissions of each user",
      "It requires customers to train a model first",
      "It only works with data stored in a single bucket"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Built-in connectors index content from common enterprise systems, and answers are filtered so each person sees only what they are already entitled to read. It integrates with an identity provider rather than replacing one, and no customer model training is involved."
  },
  {
    "t": "amazon-q",
    "x": "A finance manager asks whether an assistant can answer questions about last quarter's internal board deck sitting on a company file share. What determines whether it can?",
    "o": [
      "Whether a connector indexes that source",
      "Whether the model was trained on it",
      "Whether the file is smaller than one megabyte",
      "Whether the user has an AWS root account"
    ],
    "a": 0,
    "e": "Retrieval-based assistants answer from indexed content, so the deciding factor is whether that repository has been connected and crawled. Assuming the model must have been trained on the document is the classic misconception, since no weights are changed by indexing."
  },
  {
    "t": "amazon-q",
    "x": "A team migrating a legacy Java service wants automated help upgrading language versions and refactoring dependencies across a large repository. Which capability targets that work?",
    "o": [
      "Amazon Q Developer transformation",
      "Amazon Q Business retrieval",
      "Amazon Bedrock Guardrails",
      "Amazon SageMaker JumpStart"
    ],
    "a": 0,
    "e": "Amazon Q Developer includes agents that perform multi-file code transformations such as language version upgrades. JumpStart is a reasonable-sounding pick for automation, but it publishes pretrained models and solution templates rather than modernizing application code."
  },
  {
    "t": "context-windows",
    "x": "A developer keeps appending chat history to every request until the model starts returning errors about length. Which model property has been exceeded?",
    "o": [
      "The context window",
      "The training epoch",
      "The batch size",
      "The embedding count"
    ],
    "a": 0,
    "e": "The context window caps how many tokens a model can hold at once, and an ever-growing transcript eventually crosses it. Batch size is a training-time setting that has no bearing on how much text a single inference request may carry."
  },
  {
    "t": "context-windows",
    "x": "Before indexing a 900-page policy manual for retrieval, an engineer splits it into overlapping passages of a few hundred tokens each. Why is the overlap used?",
    "o": [
      "To avoid cutting sentences that span boundaries",
      "To reduce the total storage the index needs",
      "To make each passage exactly the same length",
      "To remove the need for an embedding model"
    ],
    "a": 0,
    "e": "Overlap keeps ideas that straddle a split point intact in at least one passage, so retrieval does not lose the answer at a boundary. Overlap actually increases index size because content is duplicated, so the storage-savings option has it backwards."
  },
  {
    "t": "context-windows",
    "x": "A team notices that when passages are too small, retrieved snippets lack enough surrounding detail for the model to answer well. What should they adjust?",
    "o": [
      "The chunk size used at indexing",
      "The number of model parameters",
      "The temperature setting at inference",
      "The instance type of the endpoint"
    ],
    "a": 0,
    "e": "Chunk size controls how much surrounding context travels with each retrieved passage, so enlarging it restores the missing detail. Temperature only alters how randomly the model words its reply and cannot supply information that was never retrieved."
  },
  {
    "t": "context-windows",
    "x": "An architect is documenting for a design review how context length affects a chat application. Which statements are correct? (Select TWO.)",
    "o": [
      "Prompt and response share the same window budget",
      "A larger window always lowers the cost per call",
      "Longer prompts generally increase request latency",
      "The window resets the model's learned weights",
      "Window size is set by retraining the tokenizer"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Input and generated output are counted together against the window, and pushing more tokens through takes more time to process. A bigger window tends to raise cost rather than lower it, and the window is a property of the model, unrelated to weights or tokenizer retraining."
  },
  {
    "t": "context-windows",
    "x": "A support bot must reference a 60-page troubleshooting guide that comfortably fits inside the chosen model's limit. Which approach is simplest for a one-off question?",
    "o": [
      "Paste the guide into the prompt",
      "Fine-tune the model on the guide",
      "Pre-train a new model from scratch",
      "Convert the guide into training labels"
    ],
    "a": 0,
    "e": "When the source material fits within the window, including it directly in the prompt is the fastest and cheapest path and needs no training pipeline. Fine-tuning is a heavier answer that costs time and money without helping a single ad hoc question."
  },
  {
    "t": "context-windows",
    "x": "An assistant given a very long document consistently answers using material near the beginning and the end while ignoring the middle. Which mitigation is most practical?",
    "o": [
      "Retrieve only the relevant passages",
      "Raise the temperature parameter",
      "Increase the maximum output tokens",
      "Shuffle the document order randomly"
    ],
    "a": 0,
    "e": "Narrowing the input to the passages that actually matter keeps the important content from being buried in a long stretch of text. Raising the output token limit lets the model write more but does nothing about which parts of the input it attends to."
  },
  {
    "t": "diffusion-models",
    "x": "A game studio needs concept art generated from written briefs. Which Amazon Titan capability supports that?",
    "o": [
      "Titan Image Generator",
      "Titan Text Embeddings",
      "Titan Text Express",
      "Titan Multimodal Embeddings"
    ],
    "a": 0,
    "e": "Titan Image Generator turns text descriptions into original images and supports editing and variation of existing artwork. Titan Multimodal Embeddings is the near miss, since it encodes images and text into vectors for search rather than creating new pictures."
  },
  {
    "t": "diffusion-models",
    "x": "In simple terms, what does the reverse process of a diffusion model do when creating a picture?",
    "o": [
      "It removes noise step by step",
      "It compresses the image for storage",
      "It labels objects found in the frame",
      "It converts pixels into a text caption"
    ],
    "a": 0,
    "e": "Diffusion models learn to undo added noise, so generation starts from random static and denoises it into a coherent image guided by the prompt. Labeling objects describes computer vision analysis, which reads an existing image rather than synthesizing one."
  },
  {
    "t": "diffusion-models",
    "x": "A retailer wants shoppers to upload a photo and receive similar catalog items ranked by visual likeness, using one shared vector space for pictures and words. Which capability supports this?",
    "o": [
      "Multimodal embeddings",
      "Text summarization",
      "Speech synthesis",
      "Named entity recognition"
    ],
    "a": 0,
    "e": "Multimodal embeddings place images and text into the same vector space so a photo can be matched against catalog entries by meaning. Named entity recognition works only on text and cannot compare a submitted photograph to product images."
  },
  {
    "t": "diffusion-models",
    "x": "A creative agency is scoping image generation work on AWS. Which considerations genuinely apply to these models? (Select TWO.)",
    "o": [
      "Output can vary between runs from one prompt",
      "Every generated image is unique by guarantee",
      "Watermarking helps identify synthetic content",
      "The model returns the closest stock photo found",
      "Generation is always cheaper than photography"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Generation is stochastic, so identical prompts can yield different pictures, and invisible watermarks help downstream systems recognize machine-made images. The model synthesizes new pixels rather than retrieving stock photos, and no guarantee of uniqueness or lower cost exists."
  },
  {
    "t": "diffusion-models",
    "x": "A publisher is evaluating multimodal foundation models for archive work. Which tasks can such a model handle? (Select TWO.)",
    "o": [
      "Writing a caption for a supplied photograph",
      "Physically printing the archive to paper",
      "Answering a question about a chart image",
      "Rewiring the network switches in a rack",
      "Guaranteeing every fact in its response"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "A multimodal model accepts an image alongside text and returns language, so captioning and visual question answering are both in scope. Printing and rewiring are physical acts, and no model can guarantee factual accuracy, which is why human review still matters."
  },
  {
    "t": "diffusion-models",
    "x": "An art director asks how to steer a generated image toward a specific mood without retraining anything. What is the most direct lever?",
    "o": [
      "Refine the wording of the prompt",
      "Increase the model parameter count",
      "Add more layers to the network",
      "Re-index the vector database"
    ],
    "a": 0,
    "e": "The prompt is the primary control surface for style, subject, and mood, and iterating on it costs nothing but time. Changing parameter count or layers means building a different model altogether, which the question explicitly rules out."
  },
  {
    "t": "genai-cost-tradeoffs",
    "x": "A steady, high-volume assistant runs around the clock, and the team wants guaranteed throughput with committed pricing on Amazon Bedrock. Which purchasing option fits?",
    "o": [
      "Provisioned Throughput",
      "On-Demand invocation",
      "Spot training capacity",
      "Reserved storage tiers"
    ],
    "a": 0,
    "e": "Provisioned Throughput reserves model capacity for a committed term, which suits predictable heavy traffic and guarantees a throughput level. On-Demand is the sensible default for bursty or experimental workloads but offers no capacity guarantee or committed discount."
  },
  {
    "t": "genai-cost-tradeoffs",
    "x": "An internal tool sends the same lengthy system instructions with every single request, and token charges now dominate the bill. Which technique reduces the repeated cost?",
    "o": [
      "Prompt caching",
      "Vector indexing",
      "Model quantization",
      "Instance rightsizing"
    ],
    "a": 0,
    "e": "Prompt caching lets a repeated prefix be reused across calls so the unchanged portion is not reprocessed and recharged each time. Vector indexing helps retrieval quality but does nothing about a fixed instruction block resent on every request."
  },
  {
    "t": "genai-cost-tradeoffs",
    "x": "A nightly job condenses 200,000 archived tickets, and nobody looks at the results before morning. Which choice most reduces spend versus calling the model one request at a time?",
    "o": [
      "Batch inference",
      "Provisioned Throughput",
      "A larger flagship model",
      "A longer context window"
    ],
    "a": 0,
    "e": "Batch processing of a large offline workload is billed at a discount compared with individual on-demand calls, and the overnight window makes latency irrelevant. Provisioned Throughput suits sustained interactive traffic and would sit idle most of the day here."
  },
  {
    "t": "genai-cost-tradeoffs",
    "x": "A product owner wants lower per-call spend on a summarization feature without rewriting the application. Which adjustments reduce cost? (Select TWO.)",
    "o": [
      "Trim unnecessary text out of each prompt",
      "Raise the temperature toward its maximum",
      "Cap the maximum number of output tokens",
      "Switch to a larger flagship-tier model",
      "Add a second copy of the instructions"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Billing follows tokens in and tokens out, so shrinking the prompt and bounding the response both cut the bill directly. Temperature changes wording style at no cost difference, while a larger model or duplicated instructions would raise spending."
  },
  {
    "t": "genai-cost-tradeoffs",
    "x": "A voice assistant must begin speaking within half a second of the user finishing a sentence. Which model choice best supports that requirement?",
    "o": [
      "A smaller distilled model",
      "The largest available model",
      "A model with a huge window",
      "A model fine-tuned on images"
    ],
    "a": 0,
    "e": "Smaller distilled models generate tokens faster and are the usual answer when latency is the binding constraint. The largest model may answer more capably, but its extra computation per token works against a strict half-second budget."
  },
  {
    "t": "genai-cost-tradeoffs",
    "x": "A finance lead asks what drives the invoice for a serverless foundation model API used by an internal wiki search feature. What is charged?",
    "o": [
      "Input and output tokens processed",
      "Hours the console stays open",
      "Number of users in the directory",
      "Gigabytes stored in the wiki"
    ],
    "a": 0,
    "e": "Serverless model APIs meter the tokens sent in and generated back, so usage rather than provisioned time drives the invoice. Counting directory users resembles seat-based software licensing, which is not how consumption-priced model APIs bill."
  },
  {
    "t": "genai-limitations",
    "x": "A compliance officer must explain why a foundation model cannot describe a regulation published two weeks ago. Which limitation is the cause?",
    "o": [
      "A fixed knowledge cutoff",
      "An undersized context window",
      "An overly low temperature",
      "A missing tokenizer vocabulary"
    ],
    "a": 0,
    "e": "Model weights capture only what existed when training ended, so anything published afterward is simply unknown to the model. A small context window would limit how much text fits in one request, not whether recent events are represented in the weights."
  },
  {
    "t": "genai-limitations",
    "x": "A newsroom trials an assistant that produces fluent copy but occasionally invents quotes attributed to real officials. Which safeguard most directly addresses the risk?",
    "o": [
      "Human review before publication",
      "Raising the maximum token limit",
      "Switching to a bigger vector store",
      "Increasing the temperature value"
    ],
    "a": 0,
    "e": "Fabricated content is best caught by a person verifying claims before anything ships, which is why human oversight is standard for public-facing generative output. Raising temperature increases variety and would make invented details more likely, not less."
  },
  {
    "t": "genai-limitations",
    "x": "A team wants a model's answers grounded in verifiable company sources so reviewers can check each claim. Which design choice supports that goal?",
    "o": [
      "Return citations with retrieved passages",
      "Increase the number of sampling steps",
      "Disable logging of user interactions",
      "Train on a larger public web corpus"
    ],
    "a": 0,
    "e": "Surfacing the retrieved passages alongside the answer lets a reviewer trace every statement back to an internal source. Training on a bigger public corpus adds general knowledge but provides no link between an answer and a company document."
  },
  {
    "t": "genai-limitations",
    "x": "A governance board is listing inherent weaknesses of large language models for a policy memo. Which items belong on that list? (Select TWO.)",
    "o": [
      "Fluent text can still be factually wrong",
      "Answers are always reproducible by default",
      "Training data biases can surface in output",
      "Sources are always cited automatically",
      "Knowledge updates itself continuously"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Confident phrasing is no proof of accuracy, and prejudices present in training data can appear in generated text. Sampling makes repeated answers vary, citations appear only when the system is built to provide them, and knowledge is frozen at the training cutoff."
  },
  {
    "t": "genai-limitations",
    "x": "An auditor asks why an assistant gave two different recommendations to two employees who typed identical questions. What is the underlying cause?",
    "o": [
      "Sampling introduces randomness",
      "The model retrained overnight",
      "The employees used separate accounts",
      "The prompt exceeded the token cap"
    ],
    "a": 0,
    "e": "Text generation samples from a probability distribution over next tokens, so the same input can produce different wording each time. Deployed foundation models do not retrain themselves between requests, so overnight retraining cannot explain the difference."
  },
  {
    "t": "genai-limitations",
    "x": "An insurer's assistant recommends a coverage limit that no policy actually offers, yet states it with complete confidence. Which characteristic of the technology explains that tone?",
    "o": [
      "Confidence is unrelated to correctness",
      "The model verified an internal database",
      "The temperature was set to zero",
      "The answer came from a cached response"
    ],
    "a": 0,
    "e": "A language model optimizes for plausible-sounding text, and its assured phrasing carries no signal about whether the content is true. Setting temperature to zero makes output more repeatable but does not make a fabricated figure correct."
  },
  {
    "t": "transformer-architecture",
    "x": "Compared with earlier recurrent networks, what practical advantage does the transformer design bring when training on very large text corpora?",
    "o": [
      "Tokens can be processed in parallel",
      "Models need no training data",
      "Outputs become fully deterministic",
      "Memory usage drops to near zero"
    ],
    "a": 0,
    "e": "Transformers examine a whole sequence at once instead of stepping through it token by token, which lets training scale across many accelerators. Recurrent models were bottlenecked precisely because each step waited on the previous one."
  },
  {
    "t": "transformer-architecture",
    "x": "A transformer receives all tokens at once rather than one after another, so it needs some way to know word order. Which component supplies that information?",
    "o": [
      "Positional encoding",
      "Dropout regularization",
      "Gradient clipping",
      "Batch normalization"
    ],
    "a": 0,
    "e": "Positional encodings inject sequence position into each token representation so the model can distinguish word order. Dropout and gradient clipping are training stabilizers and carry no information about where a token sits in the sentence."
  },
  {
    "t": "transformer-architecture",
    "x": "While generating text, the model weighs how strongly each earlier token should influence the one it emits next. What is this weighting called?",
    "o": [
      "Attention",
      "Backpropagation",
      "Quantization",
      "Normalization"
    ],
    "a": 0,
    "e": "Attention assigns relevance scores across the sequence so the most pertinent prior tokens shape the next prediction. Backpropagation is a plausible-sounding pick, but it is the training procedure for updating weights rather than a runtime weighting of tokens."
  },
  {
    "t": "transformer-architecture",
    "x": "An architect is briefing engineers on why transformers underpin modern language models. Which claims are accurate? (Select TWO.)",
    "o": [
      "Self-attention relates every token to others",
      "Recurrence is required at each time step",
      "Training scales well across many accelerators",
      "Only fixed four-word inputs are supported",
      "The design removes the need for embeddings"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Self-attention compares each token against the rest of the sequence, and because that work is parallel it distributes efficiently over large clusters. Transformers replaced recurrence rather than requiring it, accept variable-length input, and still rely on embeddings."
  },
  {
    "t": "transformer-architecture",
    "x": "Before a transformer can compute anything, incoming words must become numeric vectors. Which layer performs that first conversion?",
    "o": [
      "The embedding layer",
      "The output softmax",
      "The optimizer state",
      "The evaluation harness"
    ],
    "a": 0,
    "e": "The embedding layer maps each token identifier to a dense vector that the rest of the network can operate on. The output softmax sits at the opposite end of the stack, turning final scores into probabilities over the vocabulary."
  },
  {
    "t": "genai-aws-stack",
    "x": "A platform team is mapping the AWS generative AI stack for a design review. Which pairings are correct? (Select TWO.)",
    "o": [
      "Bedrock offers managed access to foundation models",
      "SageMaker Canvas hosts the Bedrock control plane",
      "Amazon Q delivers ready-made business assistants",
      "Amazon Polly serves as the vector database layer",
      "Amazon Textract fine-tunes foundation model weights"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Bedrock sits in the middle layer as a serverless gateway to models from several providers, while Amazon Q sits at the application layer as a packaged assistant. Canvas is a no-code ML workspace, Polly synthesizes speech, and Textract reads documents, so none of those three match."
  },
  {
    "t": "genai-lifecycle",
    "x": "A team has a working prototype and now needs to compare three candidate models on its own task using a repeatable scoring run before committing to one. Which Bedrock capability supports that step?",
    "o": [
      "Model evaluation",
      "Prompt caching",
      "Agent orchestration",
      "Provisioned Throughput"
    ],
    "a": 0,
    "e": "Bedrock model evaluation runs automatic or human-scored comparisons across candidate models on a chosen dataset, producing the evidence needed to select one. Provisioned Throughput is a capacity purchase and belongs after the selection decision, not during it."
  },
  {
    "t": "partyrock",
    "x": "A teacher wants students to build small AI apps in a browser during a one-hour class without anyone creating cloud accounts or writing code. Which offering suits the lesson?",
    "o": [
      "PartyRock",
      "Amazon Bedrock",
      "SageMaker Studio",
      "Amazon Q Developer"
    ],
    "a": 0,
    "e": "PartyRock is a free, browser-based playground where anyone can assemble and share generative apps with no AWS account and no code. Amazon Bedrock is the underlying model service but requires an AWS account and development work to build anything comparable."
  },
  {
    "t": "bedrock-inference-modes",
    "x": "A logistics company generates 400,000 shipment descriptions each night from a file staged in Amazon S3, and the output is not needed until the following morning. Which Amazon Bedrock invocation mode keeps the cost of this workload lowest?",
    "o": [
      "Batch inference on records staged in Amazon S3",
      "On-demand invocation for each individual record",
      "Provisioned Throughput with a six-month commitment",
      "Provisioned Throughput purchased with no commitment"
    ],
    "a": 0,
    "e": "Batch inference reads records asynchronously from Amazon S3 and is priced below the standard per-token rate, which suits work that tolerates delay. Provisioned Throughput is billed hourly for reserved capacity, so it would sit idle for the many hours outside the nightly window and cost far more."
  },
  {
    "t": "bedrock-inference-modes",
    "x": "A trading platform must sustain a fixed request rate during market hours and cannot tolerate throttling at the busiest moments. Which purchasing option reserves dedicated model capacity for it?",
    "o": [
      "Provisioned Throughput measured in model units",
      "On-demand pricing billed per input and output token",
      "Batch inference driven by manifests in Amazon S3",
      "Savings Plans purchased for Amazon EC2 instances"
    ],
    "a": 0,
    "e": "Provisioned Throughput reserves capacity in model units, giving a guaranteed and predictable rate of tokens for the application. On-demand shares a pool across tenants and is subject to service quotas and throttling, so it cannot promise a floor during a traffic peak."
  },
  {
    "t": "bedrock-inference-modes",
    "x": "A team has just finished a customization job in Amazon Bedrock and wants to begin sending production traffic to the resulting model. What has to happen first?",
    "o": [
      "Provision throughput for the customized model before use",
      "Submit the customized model to the provider for approval",
      "Rebuild the dataset in Amazon Redshift and rerun the job",
      "Enable cross-Region replication on the training bucket"
    ],
    "a": 0,
    "e": "A model produced by a customization job is private to the account and needs dedicated capacity allocated to it before it will serve inference requests. No provider approval is involved, because the customized weights never leave the customer's account or enter the shared catalog."
  },
  {
    "t": "bedrock-inference-modes",
    "x": "A startup is weighing on-demand against reserved capacity for a new feature whose traffic is spiky and averages only a few hundred calls per day. Which points argue for the on-demand choice? (Select TWO.)",
    "o": [
      "Charges accrue only for the tokens actually processed",
      "Idle periods incur no hourly capacity charge",
      "It guarantees a fixed number of tokens per minute",
      "A one-month or six-month term must be committed",
      "It is the only mode that supports streaming output"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "On-demand bills per token consumed and charges nothing while the application is quiet, which matches low and unpredictable volume. Guaranteed token rates and term commitments describe Provisioned Throughput, and streaming responses are available regardless of the pricing mode."
  },
  {
    "t": "bedrock-inference-modes",
    "x": "Which factor most directly determines how many model units a team should purchase when reserving capacity?",
    "o": [
      "The tokens per minute the application must sustain",
      "The number of IAM users who invoke the model",
      "The size of the bucket holding prompt logs",
      "The count of AWS Regions enabled in the account"
    ],
    "a": 0,
    "e": "A model unit represents a defined throughput of input and output tokens, so sizing follows from the peak token rate the workload needs. Identity counts, log storage, and Region enablement have no bearing on how much inference throughput is reserved."
  },
  {
    "t": "continued-pretraining",
    "x": "A legal-tech firm ran continued pre-training over 40 GB of case law, yet the model still ignores the firm's mandatory citation layout. What best explains this outcome?",
    "o": [
      "Continued pre-training builds domain knowledge, not task behavior",
      "Continued pre-training only works on models under seven billion parameters",
      "The corpus must be stored in Amazon EFS rather than in Amazon S3",
      "Citation formats can only be changed by raising temperature"
    ],
    "a": 0,
    "e": "Continued pre-training exposes the model to more domain text so it absorbs vocabulary and concepts, but it never shows the model what a correct response should look like. Teaching a required output shape calls for supervised fine-tuning on paired examples or a detailed prompt template."
  },
  {
    "t": "continued-pretraining",
    "x": "What kind of training data does a continued pre-training job in Amazon Bedrock expect?",
    "o": [
      "Unlabeled text passages from the target domain",
      "Prompt and completion pairs written by experts",
      "Ranked preference comparisons from reviewers",
      "Labeled image and caption pairs from a catalog"
    ],
    "a": 0,
    "e": "Continued pre-training extends the original self-supervised objective, so it consumes plain unlabeled text and needs no annotation effort. Prompt and completion pairs belong to fine-tuning, and ranked preference data belongs to reinforcement learning from human feedback."
  },
  {
    "t": "continued-pretraining",
    "x": "A pharmaceutical company has finished continued pre-training on its internal research writing. Which outcomes should the team expect? (Select TWO.)",
    "o": [
      "The model's weights are updated by the training job",
      "Domain terminology becomes better represented",
      "Answers automatically cite the source documents",
      "The corpus can be edited without any retraining",
      "The shared base model in the catalog is altered"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "The job produces a new private model whose parameters have shifted toward the supplied corpus, which is why specialized terminology is handled more fluently. Citations come from retrieval workflows rather than from training, and the provider's catalog model is untouched because customization always yields a separate copy."
  },
  {
    "t": "continued-pretraining",
    "x": "A regional bank already has 8,000 example replies written in a strict five-section layout and wants its assistant to reproduce that layout on every answer. Which customization approach fits, and why?",
    "o": [
      "Fine-tuning, because labeled examples teach the behavior",
      "Continued pre-training, because raw text sets the format",
      "Continued pre-training, because it needs no compute budget",
      "Fine-tuning, because it removes the need for any prompt"
    ],
    "a": 0,
    "e": "Paired examples of a desired response shape are exactly what supervised fine-tuning consumes, and the tuned model then reproduces the pattern without lengthy instructions. Continued pre-training would only deepen subject knowledge, since unlabeled text carries no signal about the response structure that is required."
  },
  {
    "t": "continued-pretraining",
    "x": "Compared with a fine-tuning job on the same base model, what does a continued pre-training run generally demand?",
    "o": [
      "A much larger volume of text and more training time",
      "Fewer training tokens and a noticeably shorter run",
      "A labeled validation split for every training epoch",
      "A separate reward model trained by human annotators"
    ],
    "a": 0,
    "e": "Absorbing a domain requires broad exposure, so continued pre-training typically ingests far more tokens and runs longer than a targeted tuning job on a few thousand examples. Reward models belong to reinforcement learning from human feedback, which is a different customization path entirely."
  },
  {
    "t": "human-evaluation",
    "x": "A children's education startup needs to learn whether an assistant's explanations come across as age-appropriate and encouraging. Automated scoring has not surfaced the problem. What should the team put in place?",
    "o": [
      "A human evaluation scored against a written rubric",
      "An automatic evaluation on a public benchmark set",
      "A perplexity measurement over a validation corpus",
      "A latency benchmark across candidate model sizes"
    ],
    "a": 0,
    "e": "Judgments about tone and suitability for an audience are subjective, so trained reviewers applying an agreed rubric are the appropriate instrument. A public benchmark measures general capability and says nothing about whether a particular voice lands well with young learners."
  },
  {
    "t": "human-evaluation",
    "x": "In an Amazon Bedrock model evaluation job that uses human reviewers, who is able to perform the reviews?",
    "o": [
      "Employees on a work team you define or an AWS managed team",
      "Only AWS support engineers assigned to the account",
      "Only staff employed by the foundation model provider",
      "Any anonymous internet visitor holding the job link"
    ],
    "a": 0,
    "e": "Bedrock lets a customer route responses to its own work team of subject-matter experts or to a managed team supplied by AWS. Reviews are never opened to anonymous visitors, and support engineers and model providers have no role in scoring a customer's evaluation."
  },
  {
    "t": "human-evaluation",
    "x": "A retailer is designing a review exercise to compare two candidate models for its help center. Which practices make the results more reliable? (Select TWO.)",
    "o": [
      "Have several reviewers rate each response separately",
      "Hide which model produced each response",
      "Let every reviewer invent personal scoring criteria",
      "Show the vendor name beside every generated answer",
      "Score only the responses the product team preferred"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Multiple independent raters let disagreement be measured instead of hidden, and blinding the source keeps brand reputation from coloring the score. Ad hoc criteria and cherry-picked samples both introduce bias that makes the comparison unusable."
  },
  {
    "t": "human-evaluation",
    "x": "A team wants an early read on how a candidate model handles broad knowledge and reasoning before investing in its own domain tests. Which resource serves that purpose?",
    "o": [
      "A public benchmark dataset with published results",
      "A random sample of unlabeled production traffic",
      "A synthetic dataset written by the same model",
      "A list of the request parameters the model accepts"
    ],
    "a": 0,
    "e": "Standard benchmarks come with reference answers and comparable published figures, which makes them a fast screening tool across candidates. Data generated by the model under test is circular and will flatter it, so it cannot support an unbiased first look."
  },
  {
    "t": "human-evaluation",
    "x": "An engineering lead proposes dropping reviewer sign-off because automated scoring already runs on every release. What is the strongest argument against relying on scores alone?",
    "o": [
      "They miss qualities such as tone, helpfulness, and nuance",
      "They cannot be computed without a dedicated GPU cluster",
      "They require a labeled test set for every generation task",
      "They are unavailable for models hosted on Amazon Bedrock"
    ],
    "a": 0,
    "e": "Automated measures compare surface features against references and cannot tell whether an answer is genuinely useful, respectful, or on-brand. They are cheap and repeatable, which is why the practical answer is to pair them with periodic reviewer sampling rather than replace one with the other."
  },
  {
    "t": "knowledge-bases",
    "x": "A city government points a Bedrock knowledge base at an S3 prefix holding permit guidance, and staff upload revised guidance every week. What has to occur before the new files can be retrieved?",
    "o": [
      "A data source sync job must ingest and index them",
      "The base model must be fine-tuned on the new files",
      "The vector store must be rebuilt from scratch",
      "The agent action group schema must be republished"
    ],
    "a": 0,
    "e": "Ingestion is what chunks the documents, generates embeddings, and writes them into the vector index, so nothing added to the bucket is searchable until a sync runs. Model weights are never involved, which is precisely why this pattern handles frequently changing content well."
  },
  {
    "t": "knowledge-bases",
    "x": "A team wants its knowledge base to hand back matching passages only, so its own application code can assemble the final prompt. Which API call fits?",
    "o": [
      "Retrieve",
      "RetrieveAndGenerate",
      "StartIngestionJob",
      "InvokeAgent"
    ],
    "a": 0,
    "e": "Retrieve performs the semantic search and returns the ranked passages, leaving prompt construction and model invocation to the caller. RetrieveAndGenerate would take those steps as well, which removes the control this team explicitly wants to keep."
  },
  {
    "t": "knowledge-bases",
    "x": "Which decisions made while setting up a knowledge base have a direct effect on how well passages are retrieved? (Select TWO.)",
    "o": [
      "The chunking strategy applied to source documents",
      "The embeddings model chosen to vectorize the text",
      "The trust policy principal named in the IAM role",
      "The storage class assigned to the raw source files",
      "The consolidated billing setting on the AWS account"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "How documents are split determines whether a chunk carries enough context to answer a question, and the embeddings model determines how well meaning is captured in vector space. Permissions, storage tiers, and billing arrangements affect access and cost, never the relevance ranking."
  },
  {
    "t": "knowledge-bases",
    "x": "A publisher's assistant is pulling passages from every business unit, but each user should only see material from their own division. Which capability enforces that at query time?",
    "o": [
      "Metadata filtering applied to the retrieval request",
      "A larger chunk size configured during ingestion",
      "A higher temperature set on the generation call",
      "A longer maximum token budget for each response"
    ],
    "a": 0,
    "e": "Attributes attached to each document during ingestion can be used as filters so a query only searches the subset a user is entitled to. Chunk size and generation settings change how text is split or worded and provide no boundary between audiences."
  },
  {
    "t": "knowledge-bases",
    "x": "After ingesting 300-page technical manuals, a team notices that returned excerpts routinely stop partway through a procedure. Which ingestion setting deserves attention first?",
    "o": [
      "The chunking strategy and the chunk size",
      "The replica count of the vector store",
      "The Region where the source bucket resides",
      "The number of sync jobs allowed to run at once"
    ],
    "a": 0,
    "e": "Fixed splits that ignore document structure will cut a multi-step procedure in half, so a hierarchical or semantic strategy with a larger window keeps related steps together. Replica counts and Region placement affect availability and latency but never where a document is divided."
  },
  {
    "t": "model-metrics",
    "x": "Which characteristic distinguishes ROUGE from BLEU?",
    "o": [
      "ROUGE leans on recall of the reference, BLEU on precision",
      "ROUGE applies only to images, BLEU only to text",
      "ROUGE needs no reference text, BLEU needs one",
      "ROUGE measures latency, BLEU measures throughput"
    ],
    "a": 0,
    "e": "ROUGE asks how much of the reference content the candidate managed to cover, which suits summarization, while BLEU asks how much of the candidate appears in the reference and adds a brevity penalty, which suits translation. Both require reference text and both operate on language, not on images or system performance."
  },
  {
    "t": "model-metrics",
    "x": "A localization team is shipping a Spanish to English feature and needs an automated score against professional reference translations. Which metric is the conventional pick?",
    "o": [
      "BLEU",
      "ROUGE-L",
      "Perplexity",
      "Mean squared error"
    ],
    "a": 0,
    "e": "BLEU was designed for machine translation and rewards precise n-gram agreement with one or more reference translations. ROUGE-L is oriented toward recall of reference content and is the customary choice for summarization rather than translation."
  },
  {
    "t": "model-metrics",
    "x": "An evaluation lead is picking measures for a paraphrasing feature where good outputs often share very few exact words with the references. Which measures are appropriate? (Select TWO.)",
    "o": [
      "BERTScore computed with contextual embeddings",
      "Human ratings collected against a shared rubric",
      "Exact string match against the reference text",
      "BLEU using four-gram precision overlap",
      "The token count of each generated response"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "BERTScore compares embeddings, so it credits a rewording that preserves meaning, and reviewer ratings capture the same judgment directly. Exact match and n-gram precision both punish valid paraphrases, and response length says nothing about quality."
  },
  {
    "t": "model-metrics",
    "x": "A team offers a model's perplexity on a held-out corpus as proof that it will answer customer questions correctly. Why is that reasoning unsound?",
    "o": [
      "Perplexity gauges text prediction, not task correctness",
      "Perplexity can be computed only for image models",
      "Perplexity needs a labeled test set of question pairs",
      "Perplexity always rises when a model is fine-tuned"
    ],
    "a": 0,
    "e": "Perplexity reflects how confidently a model predicts the next token in sample text, so a fluent model can score well while still producing wrong answers. Demonstrating correctness needs task-level measurement against references or reviewer judgment."
  },
  {
    "t": "model-metrics",
    "x": "A ticket router sorts messages into eight categories, and the team wants a single figure that balances false positives against false negatives. Which measure fits?",
    "o": [
      "F1 score",
      "BLEU",
      "ROUGE-N",
      "Perplexity"
    ],
    "a": 0,
    "e": "F1 is the harmonic mean of precision and recall, so it drops when either error type grows and gives one number for classification quality. The overlap metrics assume generated text compared with reference text and do not apply to a label assignment task."
  },
  {
    "t": "prompt-risks",
    "x": "A summarization tool accepts customer-supplied PDFs, and one file hides text telling the model to reveal its configuration. Which control most directly limits the damage?",
    "o": [
      "Keep document text separated from system instructions",
      "Raise the temperature so summaries vary each run",
      "Increase the maximum token budget for each summary",
      "Move the workload to a larger model in the catalog"
    ],
    "a": 0,
    "e": "Content that arrives from outside must be framed as data to be summarized, using clear delimiters and instructions that untrusted text is never to be obeyed. Sampling settings and model size change wording and capability but leave the instruction boundary just as porous."
  },
  {
    "t": "prompt-risks",
    "x": "A tester constructs an elaborate role-play scenario that talks a chatbot into producing content its safety policy forbids. Which term names this attack?",
    "o": [
      "Jailbreaking",
      "Model inversion",
      "Data poisoning",
      "Membership inference"
    ],
    "a": 0,
    "e": "Jailbreaking is the deliberate circumvention of a model's safety behavior through crafted framing such as fictional roles or hypothetical scenarios. Model inversion and membership inference target training data through the model's outputs, and poisoning corrupts data before training rather than at request time."
  },
  {
    "t": "prompt-risks",
    "x": "A team is building an agent that calls internal APIs on a user's behalf. Which measures reduce the blast radius if an injection succeeds? (Select THREE.)",
    "o": [
      "Scope the action group to the minimum operations needed",
      "Require human confirmation before irreversible actions",
      "Apply Amazon Bedrock Guardrails to inputs and outputs",
      "Store the API credentials inside the system prompt",
      "Increase top-p so the agent explores more phrasings"
    ],
    "a": 0,
    "as": [
      0,
      1,
      2
    ],
    "e": "Least privilege caps what a hijacked agent can even attempt, approval gates stop destructive calls, and guardrails filter both the incoming text and the produced response. Placing credentials in the prompt hands them to anyone who extracts it, and widening sampling only makes behavior less predictable."
  },
  {
    "t": "prompt-risks",
    "x": "A public assistant must decline any discussion of competitor pricing and must mask account numbers that users type into the chat. Which Amazon Bedrock feature enforces both rules without editing the prompt?",
    "o": [
      "Amazon Bedrock Guardrails",
      "Amazon Bedrock Knowledge Bases",
      "Provisioned Throughput",
      "Model evaluation jobs"
    ],
    "a": 0,
    "e": "Guardrails apply denied topics, word filters, and sensitive information handling to requests and responses as a policy layer independent of prompt text. Knowledge Bases supply grounding content and evaluation jobs measure quality, so neither blocks a topic or masks an identifier at runtime."
  },
  {
    "t": "prompt-risks",
    "x": "A team hardens its chatbot by validating and escaping whatever a user types before it is inserted into the prompt template. Which failure does this practice mainly address?",
    "o": [
      "User text being interpreted as new instructions",
      "The model exceeding its context window limit",
      "Slow first-token latency during peak traffic",
      "Uneven token pricing between AWS Regions"
    ],
    "a": 0,
    "e": "Sanitizing and clearly delimiting the untrusted portion of a prompt reduces the chance that supplied text is read as a command that overrides configured behavior. Context limits, latency, and pricing are unrelated operational concerns that input handling does not touch."
  },
  {
    "t": "prompt-techniques",
    "x": "A developer submits the single instruction to label a product review as positive, negative, or neutral, attaching no samples of any kind. Which prompting approach is in use?",
    "o": [
      "Zero-shot prompting",
      "Few-shot prompting",
      "Chain-of-thought prompting",
      "Self-consistency prompting"
    ],
    "a": 0,
    "e": "Asking the model to perform a task purely from an instruction, with no demonstrations, is zero-shot prompting and relies on knowledge already in the model. Few-shot prompting would embed several labeled samples in the request to establish the pattern first."
  },
  {
    "t": "prompt-techniques",
    "x": "An assistant needs accurate answers on multi-step logic puzzles, and the team accepts longer replies and slower responses in exchange. Which technique fits best?",
    "o": [
      "Chain-of-thought prompting",
      "Zero-shot prompting with a terse instruction",
      "Reducing the maximum response length",
      "Lowering top-k to a single candidate token"
    ],
    "a": 0,
    "e": "Prompting the model to work through intermediate steps before committing to a result reliably improves multi-step reasoning, at the cost of extra output tokens and latency. Shortening the response or narrowing sampling constrains the very reasoning the task depends on."
  },
  {
    "t": "prompt-techniques",
    "x": "A team samples several independent reasoning paths for one question and keeps the answer that appears most often. Which statements about the technique are correct? (Select TWO.)",
    "o": [
      "It is known as self-consistency",
      "It raises inference cost per question",
      "It removes the need for any reference data",
      "It lowers the number of output tokens used",
      "It changes the model's underlying weights"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Self-consistency samples multiple chains of reasoning and takes a majority vote, trading extra invocations for steadier answers. Because every path is generated in full, token usage and cost climb rather than fall, and nothing about the model itself is modified."
  },
  {
    "t": "prompt-techniques",
    "x": "A support desk attaches five worked samples to every request so replies follow an internal style guide, and the token bill grows sharply as volume rises. Which change preserves the style while shrinking each request?",
    "o": [
      "Fine-tune the model on the examples, then shorten prompts",
      "Raise the temperature and drop the formatting rules",
      "Move the examples into a knowledge base for retrieval",
      "Increase the maximum token budget on each request"
    ],
    "a": 0,
    "e": "Once the pattern is baked into the weights through fine-tuning, the demonstrations no longer need to travel with every call, which cuts input tokens at steady volume. Retrieving the same samples still injects them into the prompt, so the per-request cost stays roughly where it was."
  },
  {
    "t": "prompt-techniques",
    "x": "A request opens by telling the model it is a veteran air traffic controller briefing a trainee. Which prompt element is being applied?",
    "o": [
      "A persona instruction",
      "A stop sequence",
      "A temperature setting",
      "A token budget"
    ],
    "a": 0,
    "e": "Assigning a role shapes vocabulary, depth, and tone by giving the model a point of view to write from. Stop sequences, temperature, and token limits are inference controls passed alongside the prompt rather than instructions written inside it."
  },
  {
    "t": "rag-datastores",
    "x": "A team is hand-configuring an OpenSearch Serverless collection to back a Bedrock knowledge base. Which detail has to line up with the embeddings model they picked?",
    "o": [
      "The dimension count of the vector field",
      "The name of the data access policy",
      "The refresh interval of the index",
      "The number of shards in the collection"
    ],
    "a": 0,
    "e": "Each embeddings model emits vectors of a fixed width, and the index field must declare exactly that width or ingestion will fail. Access policies and index tuning matter operationally but carry no dependency on which embeddings model was selected."
  },
  {
    "t": "rag-datastores",
    "x": "An enterprise already operates Aurora PostgreSQL and wants embeddings held next to its relational records. Which capability makes that workable?",
    "o": [
      "The pgvector extension",
      "The AWS Glue crawler",
      "The Aurora backtrack feature",
      "The RDS Proxy connection pool"
    ],
    "a": 0,
    "e": "pgvector adds a vector column type and similarity operators to PostgreSQL, letting embeddings and business rows share one database and one transaction boundary. Glue catalogs data, backtrack rewinds a cluster in time, and RDS Proxy manages connections, so none of them add similarity search."
  },
  {
    "t": "rag-datastores",
    "x": "An architect is reviewing how a pipeline turns documents into numeric vectors before they are indexed. Which characteristics of those vectors hold true? (Select TWO.)",
    "o": [
      "Similar meanings map to nearby points in the space",
      "Queries and documents must use the same model",
      "The original text can be recovered from the vector",
      "The dimension is chosen freely at query time",
      "Vectors are regenerated on every model invocation"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Embeddings place semantically related text close together, which is what makes nearest-neighbor search meaningful, and comparisons are only valid inside one model's vector space. A vector is a lossy numeric projection rather than the text itself, and stored document vectors are computed once at ingestion."
  },
  {
    "t": "rag-datastores",
    "x": "Which measure do vector stores commonly use to rank how close a query vector sits to the stored ones?",
    "o": [
      "Cosine similarity",
      "Alphabetical ordering",
      "Term frequency counts",
      "Row insertion timestamp"
    ],
    "a": 0,
    "e": "Cosine similarity compares the angle between two vectors, so it measures shared direction of meaning independently of magnitude. Alphabetical order and insertion time ignore content entirely, and term frequency is a keyword statistic rather than a vector distance."
  },
  {
    "t": "rag-datastores",
    "x": "An assistant leaves out details that clearly exist in the corpus, and logs show only two passages reach the model on each call. Which retrieval setting should the team change?",
    "o": [
      "The number of results returned for each query",
      "The stop sequence list used by the model",
      "The denied topics list in the guardrail",
      "The schedule frequency of the sync job"
    ],
    "a": 0,
    "e": "If too few passages are pulled back, relevant supporting material never reaches the context window and the answer looks incomplete. Raising the count improves coverage until context length or noise becomes the limit, whereas stop sequences and sync cadence do not govern how much evidence is supplied."
  },
  {
    "t": "agents",
    "x": "A field-service agent must find a part number, verify warehouse stock, and raise a dispatch ticket, but the dispatch step has to pause for a person to approve it. Which agent capability hands that step back to the calling application?",
    "o": [
      "Return of control for the action invocation",
      "A larger context window on the base model",
      "A second knowledge base attached to the agent",
      "A provisioned throughput commitment term"
    ],
    "a": 0,
    "e": "Return of control makes the agent surface the intended action and its parameters to the application instead of executing it, which is where an approval gate belongs. Context size, extra grounding sources, and capacity purchases affect what the agent knows or how fast it runs, not who authorizes a step."
  },
  {
    "t": "agents",
    "x": "A support agent sometimes invents order statuses when a backend lookup comes back empty. Which changes reduce that behavior? (Select TWO.)",
    "o": [
      "Instruct the agent to say when a lookup finds nothing",
      "Ground replies in a knowledge base of order policy",
      "Raise the temperature for more creative wording",
      "Remove the action group so no lookup is attempted",
      "Increase the maximum tokens allowed per response"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Telling the agent that an empty result is a valid answer gives it a truthful path instead of a plausible guess, and grounding in real policy text supplies verifiable material to draw on. More randomness encourages invention, and removing the lookup would leave the agent with nothing but its own priors."
  },
  {
    "t": "fm-evaluation",
    "x": "A team must decide whether a summarization feature is ready to ship. Which body of evidence gives the most complete picture?",
    "o": [
      "Automated scores on a held-out set plus human sampling",
      "Automated scores alone across the training corpus",
      "Human review of only the ten longest generated outputs",
      "Latency measurements gathered during a load test"
    ],
    "a": 0,
    "e": "Automated scores on data the model never trained on give repeatable coverage, and periodic human sampling catches the tone and usefulness problems those scores are blind to. Scoring against the training corpus measures memorization, and load figures describe performance rather than output quality."
  },
  {
    "t": "fine-tuning",
    "x": "A team is formatting its fine-tuning dataset for Amazon Bedrock. What must each training record carry?",
    "o": [
      "A prompt and its desired completion",
      "A prompt and a numeric quality score",
      "An unlabeled paragraph of source text",
      "A ranked list of three candidate replies"
    ],
    "a": 0,
    "e": "Supervised fine-tuning learns from paired input and target output, so every record supplies the request and the response the model should have produced. Unlabeled passages feed continued pre-training, while scores and rankings feed preference-based training methods."
  },
  {
    "t": "model-selection",
    "x": "A regulated broker must keep every inference call inside one AWS Region and needs the model provider's usage terms cleared by counsel before launch. Which criteria dominate the choice here?",
    "o": [
      "Regional availability and licensing terms",
      "Parameter count and training data size",
      "Token generation speed under heavy load",
      "The number of languages the model supports"
    ],
    "a": 0,
    "e": "Compliance constraints narrow the field before capability does, since a model unavailable in the required Region or carrying unacceptable terms cannot be used at all. Size, speed, and language coverage matter when comparing the models that remain eligible."
  },
  {
    "t": "dataset-bias",
    "x": "A grocery chain trains a demand-forecasting model using only transaction records captured during the six weeks before winter holidays, then runs it all year. Which characteristic of the training data explains the poor spring performance?",
    "o": [
      "The sample period does not represent the conditions the model meets in production",
      "The model has too many parameters relative to the number of records it was given",
      "The learning rate used during the training job was set far too high for the volume",
      "The evaluation metric chosen for the training job rewards precision over recall"
    ],
    "a": 0,
    "e": "Sampling only one seasonal window produces a dataset that is unrepresentative of the year-round population the model must serve, so accuracy collapses outside that window. Overfitting from excess parameters is a plausible-sounding alternative, but here the model would fail on new spring data even with a modest parameter count, because the pattern simply was never observed."
  },
  {
    "t": "dataset-bias",
    "x": "An annotation vendor working in a single country labeled every image in a wildlife-classification dataset, and reviewers later find that local naming habits shaped the labels themselves. Which flaw entered the pipeline?",
    "o": [
      "Bias introduced by the human annotators during labeling",
      "Bias caused by an overly small validation split at train time",
      "Bias arising from a mismatch in numeric feature scaling steps",
      "Bias produced by randomizing the order of the training batches"
    ],
    "a": 0,
    "e": "When the ground truth itself reflects the assumptions of one group of labelers, the model learns those assumptions rather than the real world. A small validation split affects how reliably you can measure performance, but it does not corrupt the labels the model trains on."
  },
  {
    "t": "dataset-bias",
    "x": "A telecommunications provider discovers that its churn dataset holds ten times more records for postpaid subscribers than for prepaid subscribers. Which two actions directly improve how well that dataset reflects the customer base? (Select TWO.)",
    "o": [
      "Collect additional prepaid subscriber records from underrepresented regions",
      "Apply resampling so the two subscriber groups carry comparable weight",
      "Increase the number of training epochs until the loss curve flattens out",
      "Switch the optimizer from stochastic gradient descent to a momentum variant",
      "Deploy the finished model behind a private endpoint inside the company VPC"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Representativeness is a property of the data, so it is fixed by gathering more of the scarce group or by rebalancing what already exists. Training longer or changing the optimizer only tunes how the model fits an already skewed sample, and a private endpoint is a network control that has nothing to do with balance."
  },
  {
    "t": "dataset-bias",
    "x": "A data science team must quantify class imbalance across demographic groups in a tabular dataset held in Amazon S3, and needs those numbers while the project is still at the data-preparation stage. Which capability reports them?",
    "o": [
      "SageMaker Clarify pre-training bias analysis",
      "SageMaker Model Monitor data quality baseline",
      "SageMaker Feature Store offline ingestion",
      "SageMaker Ground Truth labeling workflow"
    ],
    "a": 0,
    "e": "SageMaker Clarify computes bias metrics directly on a raw dataset, before any model exists, which is exactly what a data-preparation review needs. Model Monitor is attractive because it also reports on data, but it baselines a live endpoint and therefore requires a deployed model."
  },
  {
    "t": "dataset-bias",
    "x": "An auto insurer removes gender from its pricing model, yet quoted premiums still diverge sharply by gender. Investigators find that one retained feature correlates strongly with it. What does this outcome illustrate?",
    "o": [
      "A proxy variable can reintroduce a removed attribute",
      "A validation split that is too small distorts the metric",
      "A regularization penalty was applied to the wrong layer",
      "A pricing model cannot be evaluated for fairness at all"
    ],
    "a": 0,
    "e": "Deleting a sensitive column does not remove the information if a correlated feature carries the same signal, so the disparity survives. The idea that fairness cannot be assessed is wrong: outcome disparities remain measurable across groups even when the attribute is not an input."
  },
  {
    "t": "environmental-impact",
    "x": "A media company serves millions of daily summarization requests and wants to cut the energy consumed per request without rebuilding its application. Which change delivers the largest reduction?",
    "o": [
      "Move the workload to a smaller distilled model that meets quality targets",
      "Raise the maximum output token limit configured on every request",
      "Add a second copy of the same large model behind a load balancer",
      "Increase the temperature setting used for each generation call"
    ],
    "a": 0,
    "e": "Compute per inference scales with model size, so serving a smaller distilled model that still hits the quality bar cuts energy on every single call. Adding a second copy of the large model raises capacity but consumes more energy overall, and temperature changes randomness rather than cost."
  },
  {
    "t": "environmental-impact",
    "x": "A sustainability officer at a logistics firm is asked why repeated full retraining of a very large model is discouraged. Which two practices lower the energy demand of the training stage? (Select TWO.)",
    "o": [
      "Fine-tune an existing foundation model instead of pretraining a new one",
      "Apply early stopping so jobs end once validation gains have stalled",
      "Duplicate the training job across three Regions for later comparison",
      "Store every intermediate checkpoint in a separate archive storage tier",
      "Raise the batch size until the accelerator runs out of device memory"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Starting from pretrained weights avoids the enormous cost of learning general language or vision knowledge again, and early stopping ends a run as soon as it stops improving. Duplicating a job across Regions multiplies energy use, and checkpoint archiving is a storage decision that does not change compute at all."
  },
  {
    "t": "environmental-impact",
    "x": "An architect argues that for a chatbot answering thousands of questions per minute for years, one-time model creation is not where most lifetime energy goes. Which statement supports that argument?",
    "o": [
      "Cumulative inference can exceed the energy of the initial training run",
      "Inference always runs on hardware that draws no measurable power",
      "Training a model consumes energy only when checkpoints are written",
      "Energy use is fixed per account regardless of total request volume"
    ],
    "a": 0,
    "e": "Training is a large one-off cost, but a high-volume production system repeats inference constantly, so the accumulated serving cost can surpass it over the life of the workload. The claim that inference draws no measurable power is simply false, since every generated token consumes accelerator time."
  },
  {
    "t": "environmental-impact",
    "x": "A European retailer asks which infrastructure decision helps lower the emissions attributable to its AI workloads. Which action is appropriate?",
    "o": [
      "Choose an AWS Region supplied by cleaner energy sources",
      "Provision reserved GPU capacity that idles between jobs",
      "Keep development notebooks running outside working hours",
      "Copy the training dataset into every available AWS Region"
    ],
    "a": 0,
    "e": "The carbon intensity of the electricity powering a Region varies, so placing workloads thoughtfully changes the emissions of identical compute. Reserving capacity that sits idle wastes energy, and replicating datasets everywhere adds storage and transfer with no benefit."
  },
  {
    "t": "environmental-impact",
    "x": "A startup routes every user request, including simple keyword lookups, to the largest foundation model available to it. Which efficiency practice should the team adopt?",
    "o": [
      "Route each request to the smallest model that satisfies the task",
      "Increase the provisioned throughput on the largest model",
      "Cache nothing so that responses are always freshly generated",
      "Pad each prompt with extra context to improve accuracy"
    ],
    "a": 0,
    "e": "Matching model capability to task difficulty avoids spending large-model compute on trivial work, which is the core of efficient inference design. Raising provisioned throughput scales the same wasteful pattern, and padding prompts increases token count and therefore energy per call."
  },
  {
    "t": "human-centered-design",
    "x": "A content-moderation pipeline at a video platform sends borderline clips to trained reviewers whenever the model score falls in a middle band. What is the primary purpose of this design?",
    "o": [
      "It keeps a person accountable for the ambiguous decisions",
      "It removes the need to monitor the model after launch",
      "It guarantees the model will never misclassify any clip",
      "It converts the model from supervised to unsupervised"
    ],
    "a": 0,
    "e": "Routing low-confidence cases to people places human judgment exactly where the model is least reliable, preserving accountability for hard calls. It does not eliminate ongoing monitoring, because the model can still drift on the cases it handles automatically."
  },
  {
    "t": "human-centered-design",
    "x": "A bank is designing the customer-facing interface for an AI assistant that suggests budget actions. Which two interface choices support informed user decisions? (Select TWO.)",
    "o": [
      "Disclose clearly that the suggestions come from an automated system",
      "Show the confidence or supporting reason behind each suggestion",
      "Hide the assistant's limitations so customers are not discouraged",
      "Present every suggestion as a final instruction the customer must follow",
      "Remove the option to contact a human representative from the screen"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "People can only calibrate their trust when they know an automated system produced the output and can see why it was produced. Concealing limitations or removing the escalation path pushes users toward blind reliance, which is the opposite of human-centered design."
  },
  {
    "t": "human-centered-design",
    "x": "After launch, a recruitment tool's suggestions are corrected by hiring managers on a regular basis, but nobody captures those corrections anywhere. What opportunity is the organization losing?",
    "o": [
      "A structured signal for improving the system over time",
      "The ability to encrypt the model artifacts while at rest",
      "The option to run the workload on managed infrastructure",
      "A method for reducing network latency to the endpoint"
    ],
    "a": 0,
    "e": "Human overrides are labeled evidence of where the model is wrong, and recording them feeds retraining and evaluation. Encryption remains fully available whether or not feedback is collected, so it is unaffected by this gap."
  },
  {
    "t": "human-centered-design",
    "x": "A rail operator debates whether a predictive maintenance model should schedule repairs by itself. Engineers will keep making the final call, and the model will present supporting evidence. Which role does the system play?",
    "o": [
      "A decision-support aid rather than an autonomous actor",
      "A fully autonomous agent with delegated scheduling authority",
      "A replacement for the existing asset management platform",
      "A batch reporting job that operates without any interface"
    ],
    "a": 0,
    "e": "Because a qualified person retains the authority to act, the model informs the decision instead of making it, which is the defining trait of decision support. Delegated autonomy would mean the model commits the schedule without review, which the operator explicitly rejected."
  },
  {
    "t": "human-centered-design",
    "x": "Regulators ask a utility company how a household can contest an automated service-shutoff recommendation produced by a model. What must the company be able to demonstrate?",
    "o": [
      "A documented path for a person to review and reverse the outcome",
      "A benchmark score comparing the model against competing vendors",
      "A record of the compute hours consumed by the training job",
      "A signed agreement covering the software license of the model"
    ],
    "a": 0,
    "e": "Contestability requires a real appeal route in which a human reviews the case and can overturn the automated result. Benchmark scores and licensing paperwork describe the model as a product but give an affected household no way to challenge a decision about it."
  },
  {
    "t": "transparency-tools",
    "x": "A product manager wants to publish, alongside a released computer-vision model, a short document stating what it was built for and where it should not be applied. Which artifact carries that information?",
    "o": [
      "An Amazon SageMaker model card",
      "An Amazon CloudWatch dashboard",
      "An AWS Artifact compliance report",
      "An Amazon S3 bucket policy record"
    ],
    "a": 0,
    "e": "SageMaker model cards are the built-in place to record a model's intended use, limitations, and evaluation details in a standard format. An AWS Artifact report is tempting because it is also formal documentation, but it covers AWS compliance programs rather than a customer's own model."
  },
  {
    "t": "transparency-tools",
    "x": "An engineer asks who authors the responsible-AI documentation for a managed service such as Amazon Transcribe, and what that documentation contains. Which answer is correct?",
    "o": [
      "AWS publishes it and covers intended uses and design choices",
      "Customers write it and submit it to AWS for formal approval",
      "It is generated automatically from each customer's usage logs",
      "It lists the exact training data records used by the service"
    ],
    "a": 0,
    "e": "AWS AI Service Cards are written and published by AWS to describe how a managed AI service is meant to be used, its limitations, and the responsible design work behind it. They are not derived from customer telemetry, and they do not disclose the underlying training records."
  },
  {
    "t": "transparency-tools",
    "x": "An auditor reviews the model card attached to a deployed credit-scoring system. Which two kinds of information does that document appropriately record? (Select TWO.)",
    "o": [
      "The evaluation results observed across relevant population groups",
      "The intended uses and known limitations of the model",
      "The private key material protecting the inference endpoint",
      "The billing account owner for the production workload",
      "The physical rack location of the training hardware"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Model cards exist to communicate purpose, boundaries, and measured behavior so reviewers can judge whether a deployment is appropriate. Secret key material must never be written into shared documentation, and billing or facility details belong to other systems entirely."
  },
  {
    "t": "transparency-tools",
    "x": "A team argues that publishing thorough documentation removes any need to test their model for disparate outcomes. Why is that reasoning flawed?",
    "o": [
      "Documentation describes a system but does not measure its behavior",
      "Documentation is only required for models sold to the general public",
      "Testing for disparate outcomes is handled entirely by the AWS Region",
      "Publishing a document automatically triggers a bias evaluation job"
    ],
    "a": 0,
    "e": "Transparency and fairness testing solve different problems: one communicates what a system is, the other produces evidence about how it actually performs across groups. Nothing about writing a document runs an evaluation, so the measurement work still has to be done separately."
  },
  {
    "t": "transparency-tools",
    "x": "Procurement staff compare two third-party foundation models offered through a marketplace listing. One provider shares nothing about evaluation results or limitations. What risk does choosing that provider create?",
    "o": [
      "The buyer cannot judge whether the model suits its context",
      "The buyer will be unable to encrypt data sent to the model",
      "The buyer must host the model on its own physical servers",
      "The buyer loses access to standard AWS support agreements"
    ],
    "a": 0,
    "e": "Without published evaluation and limitation information, the buyer has no basis for deciding whether the model behaves acceptably for its users and its regulatory setting. Encryption and support arrangements are unrelated to whether a provider documents model behavior."
  },
  {
    "t": "explainability",
    "x": "An analytics lead needs to know which features drive a deployed model's predictions overall, rather than the reasoning behind any single prediction. Which output should the lead request?",
    "o": [
      "A global feature attribution summary across the dataset",
      "A per-record attribution report for one named customer",
      "A confusion matrix restricted to the validation fold",
      "A latency percentile chart for the inference endpoint"
    ],
    "a": 0,
    "e": "Global attribution aggregates feature importance over many records and answers what matters to the model in general. A per-record report is the local view, which is the right tool when someone must explain one specific decision but not overall behavior."
  },
  {
    "t": "guardrails",
    "x": "A travel booking assistant built on Amazon Bedrock must strip passport numbers and phone numbers out of model responses before they reach the traveler's screen. Which guardrail feature handles this?",
    "o": [
      "The sensitive information filter",
      "The denied topics configuration",
      "The contextual grounding check",
      "The word filter for profanity"
    ],
    "a": 0,
    "e": "Bedrock Guardrails can detect and redact personally identifiable information in inputs and outputs, which is exactly the removal being described. Denied topics is a close-sounding option, but it refuses whole subject areas rather than masking identifiers inside an otherwise acceptable answer."
  },
  {
    "t": "iam-for-ai",
    "x": "A data scientist hardcoded long-lived access keys into a notebook so a training job could read an S3 bucket. What should replace that arrangement?",
    "o": [
      "An IAM role attached to the notebook execution environment",
      "A second set of access keys rotated every ninety days",
      "A bucket policy that allows anonymous reads from the internet",
      "A shared password stored in the notebook's environment file"
    ],
    "a": 0,
    "e": "Roles supply short-lived credentials automatically, so no secret is ever written into code that might be copied or committed. Rotating a second key pair still leaves a static secret in the notebook, which is the actual weakness here."
  },
  {
    "t": "iam-for-ai",
    "x": "A platform team must ensure that one business unit can invoke only two approved foundation models while a different unit invokes a separate set. How should that access be expressed?",
    "o": [
      "IAM policies scoped to specific model resources per unit",
      "One administrator policy shared by both business units",
      "Separate encryption keys assigned to each business unit",
      "A network access control list applied to each subnet"
    ],
    "a": 0,
    "e": "Model invocation is an API action on a named resource, so resource-scoped IAM policies express exactly which models each unit may call. Encryption keys protect stored data and do not decide which model an identity is permitted to invoke."
  },
  {
    "t": "iam-for-ai",
    "x": "An audit of an AI platform account finds several identities holding broad administrative permissions that they never exercise. Which two remedies align with least privilege? (Select TWO.)",
    "o": [
      "Grant only the actions each identity actually uses",
      "Use temporary credentials from roles instead of static user keys",
      "Attach the same administrator policy to every identity for consistency",
      "Move all identities into a single group that carries unrestricted access",
      "Disable logging so that permission changes are not recorded anywhere"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Least privilege means trimming permissions down to observed need and preferring credentials that expire on their own. Standardizing on an administrator policy or one unrestricted group widens the blast radius, and disabling logging destroys the evidence needed to review access at all."
  },
  {
    "t": "iam-for-ai",
    "x": "A partner organization in a separate AWS account needs read access to inference results held in a company bucket, and no user may be created inside the company's account. What enables this?",
    "o": [
      "A role the partner assumes with an appropriate trust policy",
      "An IAM user created for each partner employee individually",
      "A public bucket setting that allows unauthenticated reads",
      "A support ticket opened with AWS to link the two accounts"
    ],
    "a": 0,
    "e": "Cross-account role assumption lets identities from the partner account receive temporary credentials without any long-lived principal existing locally. Creating individual users is precisely what the constraint forbids, and public access would expose the data to everyone."
  },
  {
    "t": "data-encryption-ai",
    "x": "A regulated broker must ensure that storage volumes attached to its SageMaker training jobs, along with the resulting model artifacts, stay unreadable if the underlying media is ever accessed. What should be configured?",
    "o": [
      "AWS KMS encryption for the job volumes and the output location",
      "A security group that blocks inbound traffic to the job",
      "An S3 lifecycle rule that archives artifacts after one year",
      "A CloudWatch alarm that watches for unusual disk activity"
    ],
    "a": 0,
    "e": "Encryption at rest with KMS renders both the attached volumes and the written artifacts unusable without the key, which is what protection of physical media requires. An alarm on disk activity might reveal an incident after the fact but does nothing to keep the bytes unreadable."
  },
  {
    "t": "data-encryption-ai",
    "x": "A security architect wants a control under which even an operator able to list objects in a bucket still cannot read fine-tuned model outputs. Which mechanism achieves that separation?",
    "o": [
      "A KMS key policy that excludes the operator from decrypt",
      "An S3 versioning setting applied to the whole bucket",
      "A tag-based cost allocation scheme across the account",
      "A CloudFront distribution placed in front of the bucket"
    ],
    "a": 0,
    "e": "Because reading an encrypted object requires both object access and permission to use the key, withholding decrypt rights blocks the operator even when listing succeeds. Versioning preserves object history but grants no additional confidentiality against someone who can already read."
  },
  {
    "t": "data-encryption-ai",
    "x": "A legal technology firm sends contract text to a foundation model and must protect that content while it moves and while it rests. Which two controls apply? (Select TWO.)",
    "o": [
      "TLS on the connection between the application and the service",
      "Server-side encryption with KMS on the S3 objects holding the text",
      "A larger instance type for the application server hosting the client",
      "A longer maximum token limit configured on each model request",
      "A second copy of the contracts kept in an unencrypted bucket"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Data in transit is protected by TLS on the API connection, and data at rest is protected by server-side encryption on the stored objects, so together they cover both states named in the requirement. Instance sizing and token limits are performance settings, and an unencrypted duplicate actively undermines the goal."
  },
  {
    "t": "data-encryption-ai",
    "x": "Before a marketing dataset is used for fine-tuning, a privacy officer must learn whether it contains payment card numbers or national identifiers buried in free-text columns. Which service performs that discovery?",
    "o": [
      "Amazon Macie",
      "Amazon Athena",
      "AWS Glue DataBrew",
      "Amazon QuickSight"
    ],
    "a": 0,
    "e": "Macie uses machine learning and pattern matching to find sensitive data inside Amazon S3 and report what it discovered. Glue DataBrew is a reasonable-looking choice because it also profiles data, but its profiling targets quality and shape rather than classifying regulated identifiers."
  },
  {
    "t": "regulatory-compliance",
    "x": "Under privacy law in its market, a subscription service must delete an individual's personal records on request, including copies pulled into training sets. Which capability must the team maintain?",
    "o": [
      "A way to trace and delete that person's records wherever they were copied",
      "A contract clause transferring the obligation to the cloud provider",
      "An agreement that exempts machine learning data from deletion",
      "A backup schedule that retains every dataset version forever"
    ],
    "a": 0,
    "e": "Honoring a deletion request depends on knowing every place the data travelled, which is why lineage and inventory practices underpin this right. Contracts do not move the obligation to a provider, because the company remains the controller of the personal data it collected."
  },
  {
    "t": "regulatory-compliance",
    "x": "A vendor selling an AI system that screens job applicants in the European market learns the system falls into a category carrying extra obligations. What does that classification most directly require?",
    "o": [
      "Stricter documentation, oversight, and testing before deployment",
      "Immediate removal of the product from every global market",
      "Transfer of the model weights to a government repository",
      "A permanent ban on collecting applicant data of any kind"
    ],
    "a": 0,
    "e": "Risk-tiered AI regulation attaches heavier conformity duties, including record keeping, human oversight, and pre-market evaluation, to systems used in consequential settings such as employment. It does not outlaw the product or require handing over proprietary weights."
  },
  {
    "t": "regulatory-compliance",
    "x": "A payments company plans to run a fraud-scoring model inside an environment that stores cardholder data. Which requirement follows from the card industry standard governing that data?",
    "o": [
      "The environment must meet defined control requirements and be assessed",
      "The model must be trained only on synthetic transaction records",
      "The company must publish its fraud rules to cardholders yearly",
      "All scoring must occur on hardware owned by the card networks"
    ],
    "a": 0,
    "e": "PCI DSS applies to any system component in the cardholder data environment, so the model's hosting environment inherits those controls and the associated validation. Nothing in the standard forbids training on real transactions or mandates network-owned hardware."
  },
  {
    "t": "regulatory-compliance",
    "x": "A multinational manufacturer runs AI workloads in several countries whose data protection laws differ. Which two obligations does the manufacturer carry? (Select TWO.)",
    "o": [
      "Determining which laws apply to each dataset and use case",
      "Configuring its own workloads to satisfy those requirements",
      "Certifying the physical security of AWS data centers",
      "Writing the audit standards used by external assessors",
      "Operating the hypervisor that isolates its instances"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Legal applicability and the configuration of customer-controlled resources sit squarely with the customer under the shared responsibility model. Data center security and hypervisor operation belong to AWS, and audit standards are set by the bodies that publish them rather than by a regulated company."
  },
  {
    "t": "data-cataloging",
    "x": "New parquet files land in a data lake prefix every night, and analysts complain that table definitions go stale. Which component keeps those definitions current automatically?",
    "o": [
      "An AWS Glue crawler scheduled to run each night",
      "An Amazon EventBridge rule that emails the analysts",
      "An Amazon S3 lifecycle policy on the same prefix",
      "An AWS Batch job that copies files between buckets"
    ],
    "a": 0,
    "e": "A Glue crawler inspects the storage location on a schedule and updates schemas and partitions in the catalog without manual work. An EventBridge notification tells people something changed but leaves the metadata itself just as stale as before."
  },
  {
    "t": "data-cataloging",
    "x": "A retail analytics group wants to know which downstream tables and reports would break if a source column were dropped. What does maintaining lineage metadata give them?",
    "o": [
      "Visibility into how data flows between assets",
      "A guarantee that no column can ever be dropped",
      "Automatic rewriting of the affected report queries",
      "Encryption of the source table at rest and in transit"
    ],
    "a": 0,
    "e": "Lineage records the upstream and downstream relationships among datasets, jobs, and outputs, which is what makes impact analysis possible. It documents dependencies rather than enforcing them, so it neither prevents the change nor repairs anything automatically."
  },
  {
    "t": "data-cataloging",
    "x": "A governance lead asks how teams should mark which catalog tables hold regulated customer attributes, so that downstream owners can see the designation. What is the appropriate step?",
    "o": [
      "Apply metadata tags to the tables in the catalog",
      "Rename each table to include a warning prefix",
      "Move regulated tables to a separate AWS account",
      "Delete the regulated columns from the catalog"
    ],
    "a": 0,
    "e": "Tagging attaches durable, queryable classification metadata that travels with the table and can drive access decisions later. Renaming conveys the same idea informally but breaks existing queries and cannot be enforced or filtered on reliably."
  },
  {
    "t": "data-cataloging",
    "x": "An enterprise standardizes on a central technical metadata store for its lake. Which two things does the AWS Glue Data Catalog hold? (Select TWO.)",
    "o": [
      "Table schemas and column data types",
      "Partition information for the underlying storage",
      "The raw rows of each source file",
      "The IAM credentials of every analyst",
      "The billing records for each query run"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "The catalog stores metadata that describes data, notably schemas, column types, and partition layout, so engines can interpret files in place. It never holds the records themselves, which remain in Amazon S3, and it is not a credential or billing store."
  },
  {
    "t": "data-querying",
    "x": "An ML engineer wants to run occasional SQL against curated files sitting in Amazon S3 without loading them into a database or managing any servers. Which service fits?",
    "o": [
      "Amazon Athena",
      "Amazon Neptune",
      "AWS Data Exchange",
      "Amazon Kinesis"
    ],
    "a": 0,
    "e": "Athena is serverless and queries S3 data in place using standard SQL, matching both the no-loading and no-servers constraints. Neptune is a graph database that would require ingesting the data first, which is exactly what the engineer wants to avoid."
  },
  {
    "t": "data-querying",
    "x": "Analysts query lake tables through Amazon Athena, and policy says two salary columns must remain hidden from most of them. Where should that restriction be enforced?",
    "o": [
      "In Lake Formation permissions on the table columns",
      "In each analyst's saved query text inside the console",
      "In the S3 bucket policy for the prefix holding the files",
      "In a CloudWatch metric filter watching the query logs"
    ],
    "a": 0,
    "e": "Lake Formation applies column-level permissions centrally, so the restriction holds no matter how an analyst writes a query. A bucket policy is coarse and can only allow or deny whole objects, which cannot hide two columns while exposing the rest of the table."
  },
  {
    "t": "data-querying",
    "x": "A finance department runs heavy repeated joins and aggregations over years of structured records and needs consistently fast response times for dashboards. Which service suits that pattern best?",
    "o": [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon DynamoDB",
      "Amazon OpenSearch Service"
    ],
    "a": 0,
    "e": "A data warehouse is optimized for repeated complex analytical queries at predictable speed, which is what recurring dashboard workloads need. Athena is attractive for its simplicity, but it targets ad hoc exploration and does not offer the same tuned performance for constant heavy joins."
  },
  {
    "t": "data-governance",
    "x": "As the number of lake tables grows past a thousand, granting access table by table becomes unmanageable for a governance team. Which Lake Formation approach scales better?",
    "o": [
      "Tag-based access control applied to resources and principals",
      "One named grant per table for each individual principal",
      "A separate data lake per department with copied tables",
      "Public read access with an approval workflow afterward"
    ],
    "a": 0,
    "e": "Assigning tags to resources and writing policies against those tags decouples the number of rules from the number of tables, so growth no longer multiplies administrative work. Copying tables into departmental lakes duplicates data and creates new consistency and governance problems."
  },
  {
    "t": "ai-security",
    "x": "An assistant summarizes customer-submitted documents, and one document contains hidden text instructing the model to reveal its system instructions. Which mitigation most directly addresses this threat?",
    "o": [
      "Filter untrusted input and constrain what the model may disclose",
      "Increase the size of the model's configured context window",
      "Enable versioning on the bucket that stores the documents",
      "Rotate the account access keys on a monthly schedule"
    ],
    "a": 0,
    "e": "Prompt injection arrives through content the model reads, so defenses combine sanitizing or isolating untrusted text with guardrails that block disclosure of protected material. Key rotation is sound hygiene but protects credentials, and the attacker here never needed any credential."
  },
  {
    "t": "audit-monitoring",
    "x": "Six months after launch, a churn model's accuracy quietly degrades as customer behavior changes. Which two measures give the team early warning? (Select TWO.)",
    "o": [
      "Schedule SageMaker Model Monitor to compare live data with a baseline",
      "Set alarms on the monitoring metrics so staff are paged on drift",
      "Retrain the model on the same historical dataset every week",
      "Raise the endpoint instance count during business hours",
      "Archive old inference payloads to a lower storage tier"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Detecting silent degradation requires measuring live traffic against a known baseline and then routing those findings to someone through alarms. Retraining on the same stale historical data reproduces the old behavior, and instance counts or storage tiers change cost and capacity rather than accuracy."
  },
  {
    "t": "shared-responsibility",
    "x": "A CIO asks for a single sentence that helps staff decide who handles a given control when the company uses AWS AI services. Which rule is accurate?",
    "o": [
      "AWS secures the cloud itself while customers secure their use of it",
      "AWS handles every control once a managed service has been selected",
      "Customers handle every control including facility physical security",
      "Responsibility depends on the Region rather than the service model"
    ],
    "a": 0,
    "e": "The model splits duties between security of the cloud, which AWS owns, and security in the cloud, which the customer owns through configuration, identity, and data decisions. Choosing a managed service shifts where the line sits but never removes the customer's side of it."
  }
],
}
