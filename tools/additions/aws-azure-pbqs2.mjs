// Interactive items: aif-c01 4 match + 4 order, az-900 3 match + 3 order.
//
// AWS calls these Ordering and Matching questions; Azure calls them Build list
// and Drag and drop. Both vendors grade them all-or-nothing, so every item here
// is written to have exactly one defensible arrangement: no two match items can
// take the same choice unless that is intended, and no two adjacent order steps
// are interchangeable — each consumes the output of the one before it.
//
// Topics are drawn from the maps expanded in 50ad82e, favouring keys no PBQ
// used yet so the mastery map spreads instead of stacking.

export const aif = {
  examId: "aif-c01",
  pbqs: [
    // ---------------------------------------------------------------- order
    {
      kind: "order",
      t: "fm-evaluation",
      title: "Shortlist a Foundation Model",
      scen: "A media company needs a model to draft article summaries and has budget for one. Arrange the selection process in the order the team should run it.",
      steps: [
        "Define the task, the quality bar, and the hard limits on latency and cost per request",
        "Narrow the Amazon Bedrock catalog to the models that fit those limits",
        "Benchmark the shortlisted models against a held-out set of real prompts",
        "Have subject-matter experts rank the two top-scoring models side by side",
        "Roll the winner out behind a canary deployment and watch quality in production",
      ],
    },
    {
      kind: "order",
      t: "human-centered-design",
      title: "Clear the Responsible AI Review",
      scen: "A lending assistant cannot ship until it passes the internal responsible AI review. Put the review activities in the order the governance board expects them.",
      steps: [
        "Document the intended use, the people affected, and the ways the system could cause harm",
        "Inspect the training data for groups under-represented relative to the applicant population",
        "Measure accuracy separately for each of those groups to expose disparate performance",
        "Apply mitigations such as rebalancing the data or narrowing the model's scope",
        "Publish a model card recording the residual limitations and the approved use cases",
        "Once the system is live, route every adverse decision to a human reviewer",
      ],
    },
    {
      kind: "order",
      t: "data-cataloging",
      title: "Govern the Analytics Corpus",
      scen: "Marketing drops raw campaign exports into Amazon S3 every night, and analysts want to query them without ever seeing customer identifiers. Put the pipeline steps in order.",
      steps: [
        "Land the nightly exports in an Amazon S3 bucket with encryption at rest enabled",
        "Run an AWS Glue crawler to infer the schema and register the tables in the Data Catalog",
        "Build an AWS Glue job that strips the customer identifiers out of the registered tables",
        "Grant the analyst role column-level access to the cleaned tables with AWS Lake Formation",
        "Let the analysts query the governed tables with Amazon Athena",
      ],
    },
    {
      kind: "order",
      t: "agents",
      title: "Trace an Agent Request",
      scen: "A travel assistant built on Amazon Bedrock Agents is asked to rebook a flight. Arrange the stages in the order the agent works through them for that single request.",
      steps: [
        "Receive the traveler's request together with the stored session context",
        "Reason over the request to produce a plan of the actions required",
        "Invoke the action group's Lambda function with the parameters the model extracted",
        "Feed the booking system's response back to the model as an observation",
        "Return the confirmed itinerary to the traveler in natural language",
      ],
    },

    // ---------------------------------------------------------------- match
    {
      kind: "match",
      t: "ml-algorithms",
      title: "Frame the Modeling Problem",
      scen: "Four analytics requests reached the data science team this quarter. Match each request to the kind of model that fits it. Not all options will be used.",
      choices: [
        "Binary classification",
        "Multi-class classification",
        "Linear regression",
        "Clustering",
        "Anomaly detection",
        "Time-series forecasting",
      ],
      items: [
        { l: "Decide whether an incoming email is spam", a: 0 },
        { l: "Route each support ticket to exactly one of seven named queues", a: 1 },
        { l: "Predict the sale price of a house from its square footage and age", a: 2 },
        { l: "Discover natural segments among tickets when no categories have been defined", a: 3 },
      ],
    },
    {
      kind: "match",
      t: "model-metrics",
      title: "Score the Right Way",
      scen: "An evaluation report covers four different models and each needs the metric normally reported for its task. Match each task to that metric. Not all metrics will be used.",
      choices: [
        "ROUGE",
        "BLEU",
        "F1 score",
        "Root mean squared error",
        "Perplexity",
        "Accuracy",
      ],
      items: [
        { l: "Measuring how much of a reference summary the generated summary recovers", a: 0 },
        { l: "Measuring a machine translation against a professional human translation", a: 1 },
        { l: "Measuring a fraud detector where both false alarms and misses are costly and 0.2% of rows are fraud", a: 2 },
        { l: "Measuring how far predicted shipping costs land from the actual dollar amounts", a: 3 },
      ],
    },
    {
      kind: "match",
      t: "transparency-tools",
      title: "Answer the Auditor",
      scen: "An external auditor raises four findings against a deployed credit-risk model. Match each finding to the AWS capability that resolves it. Not every capability will be used.",
      choices: [
        "Amazon SageMaker Clarify",
        "Amazon SageMaker Model Cards",
        "AWS AI Service Cards",
        "Amazon SageMaker Model Monitor",
        "Amazon Bedrock Guardrails",
      ],
      items: [
        { l: "Nobody can say which applicant attributes pushed one specific decision the way it went", a: 0 },
        { l: "There is no single record of this model's training data, intended use, and known limits", a: 1 },
        { l: "The managed AWS service the workflow also calls has no published fairness documentation", a: 2 },
        { l: "Prediction quality has drifted since launch and no one was alerted", a: 3 },
      ],
    },
    {
      kind: "match",
      t: "ai-security",
      title: "Secure the Bedrock Workload",
      scen: "Five security requirements landed on a new generative AI application. Match each requirement to the AWS service that satisfies it. Not all options will be used.",
      choices: [
        "AWS IAM",
        "AWS KMS",
        "AWS PrivateLink",
        "AWS CloudTrail",
        "Amazon Macie",
        "AWS Secrets Manager",
      ],
      items: [
        { l: "Restrict which employees are permitted to invoke one specific foundation model", a: 0 },
        { l: "Encrypt the uploaded customization dataset under a key your team controls and can revoke", a: 1 },
        { l: "Keep model invocation traffic on the AWS network instead of the public internet", a: 2 },
        { l: "Produce an auditable record of who called the model and when", a: 3 },
        { l: "Discover personal data sitting in the S3 bucket before it is used for training", a: 4 },
      ],
    },
  ],
}

export const az = {
  examId: "az-900",
  pbqs: [
    // ---------------------------------------------------------------- order
    {
      kind: "order",
      t: "cost-management",
      title: "Get Ahead of the Cloud Bill",
      scen: "A department is moving its first workload to Azure and the finance lead wants spending controlled from day one. Put the steps in the order the team should take them.",
      steps: [
        "Estimate the monthly charge for the planned resources with the Azure pricing calculator",
        "Set a Microsoft Cost Management budget with an alert at that estimated amount",
        "Deploy the resources, applying a cost center tag to each one",
        "Break down the first month's actual charges by that tag in cost analysis",
        "Act on Azure Advisor's cost recommendations to resize or remove what is underused",
      ],
    },
    {
      kind: "order",
      t: "authentication-authorization",
      title: "Trace a Sign-In",
      scen: "An employee opens a finance app protected by Microsoft Entra ID. Arrange the stages in the order the platform performs them for that one sign-in.",
      steps: [
        "The employee submits a username and password to Microsoft Entra ID",
        "Microsoft Entra ID verifies the credential against the directory",
        "A Conditional Access policy evaluates the sign-in signals and demands a second factor",
        "The employee approves the multifactor prompt on a registered device",
        "Microsoft Entra ID issues a token carrying the employee's group memberships",
        // Azure RBAC authorizes operations on Azure resources through Resource
        // Manager; it does not gate access to an application. App-level access
        // comes from the roles carried in the token.
        "The application grants access based on the roles carried in that token",
      ],
    },
    {
      kind: "order",
      t: "arm-templates",
      title: "Deploy the Web Tier",
      scen: "A team is deploying its first Azure web application into a fresh environment and wants it repeatable. Put the deployment steps in order.",
      // Every step consumes the previous one's result. An earlier draft opened
      // with "create a resource group" then "author a template", which are
      // genuinely interchangeable -- authoring a file offline does not depend
      // on the group existing -- and these grade all-or-nothing.
      steps: [
        "Author a template describing the web app and its database",
        "Submit the template to Azure Resource Manager, naming a new resource group as the target",
        "Azure Resource Manager validates the request against the policies assigned to that scope",
        "Azure Resource Manager creates the resources in dependency order",
        "Apply a delete lock to the resource group once the resources are running",
      ],
    },

    // ---------------------------------------------------------------- match
    {
      kind: "match",
      t: "defense-in-depth",
      title: "Answer the Design Review",
      scen: "Five security concerns came out of a design review. Match each concern to the Azure service that addresses it. Not every service will be used.",
      choices: [
        "Microsoft Defender for Cloud",
        "Microsoft Sentinel",
        "Azure Firewall",
        "Network security groups",
        "Azure DDoS Protection",
        "Azure Key Vault",
      ],
      items: [
        { l: "The team wants a continuously scored view of how far the environment has drifted from security best practice", a: 0 },
        { l: "Alerts from every subscription need to be collected in one place and investigated as incidents", a: 1 },
        { l: "Subnets need simple allow and deny rules based on address, port, and protocol", a: 3 },
        { l: "Traffic from thousands of hosts is trying to exhaust the public endpoint", a: 4 },
        { l: "Application secrets and TLS certificates are sitting in configuration files", a: 5 },
      ],
    },
    {
      kind: "match",
      t: "compute-resources",
      title: "Size the Compute",
      scen: "Four teams describe what they need to run in Azure. Match each to the compute option that fits. Not all options will be used.",
      choices: [
        "Azure Virtual Machines",
        "Azure App Service",
        "Azure Functions",
        "Azure Container Instances",
        "Azure Kubernetes Service",
        "Azure Virtual Desktop",
      ],
      items: [
        { l: "A legacy application that needs a specific operating system build and full administrator rights", a: 0 },
        { l: "A short routine that should run only when a message lands on a queue, billed per execution", a: 2 },
        { l: "Dozens of containerized microservices needing orchestration, scaling, and self-healing", a: 4 },
        { l: "Remote staff who need a full Windows desktop delivered from the cloud to any device", a: 5 },
      ],
    },
    {
      kind: "match",
      t: "cost-reduction",
      title: "Follow the Money",
      scen: "Five cost questions arrive from different parts of the business. Match each to the Azure tool or feature that answers it. Not every option will be used.",
      choices: [
        "Azure pricing calculator",
        // Microsoft retired the standalone TCO Calculator in July 2025; the
        // documented replacement for on-premises vs Azure comparison is the
        // Azure Migrate business case, which is still a named AZ-900 objective.
        "Azure Migrate business case",
        "Microsoft Cost Management",
        "Azure Advisor",
        "Azure reservations",
        "Azure Hybrid Benefit",
      ],
      items: [
        { l: "What will this design charge us per month before we deploy any of it?", a: 0 },
        { l: "How does running our current datacenter compare with running the same workload in Azure?", a: 1 },
        { l: "Can the owner be alerted the moment this month's actual spend passes a threshold?", a: 2 },
        { l: "What discount do we get for committing to a three-year term on this VM size?", a: 4 },
        { l: "Can our existing Windows Server licenses with Software Assurance cut the VM rate?", a: 5 },
      ],
    },
  ],
}

export default aif
