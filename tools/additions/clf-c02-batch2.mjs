// clf-c02 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "clf-c02",
  questions: [
  {
    "t": "cloud-deployment-models",
    "x": "A defense contractor runs virtualization, self-service provisioning, and automated resource pooling entirely inside a facility it owns and operates, with no provider-managed capacity involved anywhere in the design. Which deployment model describes this arrangement?",
    "o": [
      "Hybrid cloud deployment",
      "Cloud-native deployment",
      "On-premises private cloud",
      "Colocation hosting model"
    ],
    "a": 2,
    "e": "Running cloud-style capabilities such as pooling and self-service on hardware the organization owns and operates is the on-premises deployment model, often called a private cloud. It is not hybrid, because hybrid requires resources in a provider environment connected to the owned facility, and here no provider capacity is used at all."
  },
  {
    "t": "cloud-deployment-models",
    "x": "A three-person legal-tech startup has never owned a server; the database, the mobile back end, and the document pipeline all sit on managed AWS services. Which deployment model does the startup use?",
    "o": [
      "Cloud-native deployment",
      "Hybrid cloud deployment",
      "On-premises private cloud",
      "Colocation hosting model"
    ],
    "a": 0,
    "e": "When every component of a workload lives in the provider environment, the deployment is fully cloud, also described as cloud-native. Hybrid is wrong because there is no owned infrastructure to connect to, and colocation still involves the company buying and racking its own equipment in someone else's building."
  },
  {
    "t": "cloud-deployment-models",
    "x": "An automotive plant needs a machine-vision inspection workload beside the robots because they cannot tolerate the round-trip delay to a Region, yet the engineers want the same AWS APIs they already use. Which deployment approach meets both needs?",
    "o": [
      "Cloud deployment with edge caching only",
      "On-premises deployment with no AWS use",
      "Cloud deployment in a single Region",
      "Hybrid deployment using AWS Outposts"
    ],
    "a": 3,
    "e": "Placing AWS-managed infrastructure inside the customer facility while keeping the Region for everything else is a hybrid deployment, and Outposts is the service that extends AWS APIs to that facility. A purely regional deployment cannot remove the network round trip, and a plain on-premises build would abandon the consistent AWS tooling the team asked for."
  },
  {
    "t": "cloud-deployment-models",
    "x": "A payroll processor keeps its steady month-round load on equipment it already paid for, then adds temporary capacity in AWS during the two-day window when nearly every client files at once. Which deployment model results?",
    "o": [
      "A colocation deployment",
      "A hybrid deployment",
      "A fully cloud deployment",
      "An on-premises deployment"
    ],
    "a": 1,
    "e": "Baseline capacity in an owned facility plus overflow capacity in a provider environment is the classic hybrid pattern, sometimes described as bursting. It is not a fully cloud deployment, because the steady-state load never leaves the equipment the processor already owns."
  },
  {
    "t": "cloud-deployment-models",
    "x": "A regional bank is designing an arrangement in which some systems remain in its own data center while others run in AWS. Which statements about this kind of design are accurate? (Select TWO.)",
    "o": [
      "AWS assumes responsibility for the bank's physical hardware",
      "Direct Connect or a VPN can link the two environments",
      "The bank no longer operates any physical infrastructure",
      "Systems can be moved gradually rather than all at once",
      "All AWS Regions must be disabled except a single one"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Hybrid designs depend on private network connectivity between the two environments, and they let an organization move systems in waves instead of in one cutover. The claim that no physical infrastructure remains is wrong by definition here, since part of the estate deliberately stays in the bank's own facility."
  },
  {
    "t": "cloud-deployment-models",
    "x": "A film post-production house keeps its editing workstations and shared scratch storage in the studio for throughput, but replicates finished projects to Amazon S3 for long-term retention. How is this environment best classified?",
    "o": [
      "A fully cloud environment",
      "An on-premises-only setup",
      "A hybrid environment",
      "A multi-cloud environment"
    ],
    "a": 2,
    "e": "Active work stays on studio equipment while archival copies live in AWS, so resources are split across an owned facility and a provider, which is hybrid. Multi-cloud would require services from two or more providers, and only one provider appears here."
  },
  {
    "t": "cloud-deployment-models",
    "x": "A European insurer must store claim documents inside a facility it controls to satisfy a national regulator, yet it wants AWS analytics for the rest of its portfolio. Which deployment model lets it meet both obligations?",
    "o": [
      "Cloud only",
      "Hybrid cloud",
      "On-premises only",
      "Colocation only"
    ],
    "a": 1,
    "e": "A regulatory constraint that pins one dataset to a controlled facility while other workloads run in AWS is exactly what hybrid exists to handle. Choosing on-premises only would forfeit the analytics capability the insurer wants, and cloud only would violate the regulator's placement requirement for the documents."
  },
  {
    "t": "cloud-deployment-models",
    "x": "A publisher built an internal private cloud with self-service portals, but teams still wait in a queue whenever the shared pool of physical hosts is fully allocated. Which limitation of that model does the wait illustrate?",
    "o": [
      "Chargeback reporting cannot be produced for internal teams",
      "Virtual machines cannot be created without a public Region",
      "Capacity is bounded by hardware the publisher already bought",
      "Self-service provisioning is impossible in this model"
    ],
    "a": 2,
    "e": "A private cloud can offer a self-service experience, but the pool it draws from is finite because someone had to purchase the hosts in advance. Self-service is clearly not impossible here, since the portals exist and work until the pool is exhausted."
  },
  {
    "t": "cloud-deployment-models",
    "x": "A logistics firm has finished closing its last server room and now runs every application on AWS. Which statements describe its current model? (Select TWO.)",
    "o": [
      "Capacity can be adjusted through APIs rather than purchase orders",
      "The firm must still refresh its hardware on a three-year cycle",
      "Application code becomes the responsibility of AWS",
      "Only one Availability Zone may be used per account",
      "The firm no longer maintains its own physical servers"
    ],
    "a": 0,
    "as": [
      0,
      4
    ],
    "e": "An all-in cloud deployment removes the hardware ownership burden and turns capacity changes into API calls instead of procurement cycles. AWS never takes responsibility for customer application code, and nothing about a cloud deployment restricts an account to a single Availability Zone."
  },
  {
    "t": "economies-of-scale",
    "x": "A procurement lead asks why AWS can price object storage per gigabyte below what her company achieves buying disk arrays for its own racks. What is the main reason?",
    "o": [
      "AWS charges a separate annual membership fee for storage access",
      "AWS resells surplus capacity purchased from a single vendor",
      "AWS limits each customer to a fixed quantity of stored data",
      "AWS aggregates demand from many customers and buys at enormous volume"
    ],
    "a": 3,
    "e": "Massive aggregated demand gives a hyperscale provider purchasing power and operational efficiency that no single buyer can reproduce, which is what economies of scale means. There is no membership fee involved, and per-customer storage is not capped in a way that would explain the price difference."
  },
  {
    "t": "economies-of-scale",
    "x": "At a textile manufacturer, standing up a test environment used to require a requisition, a four-week equipment lead time, and a change window. On AWS the equivalent environment appears in minutes. Which advantage of cloud computing is this?",
    "o": [
      "Increased speed and agility",
      "Massive economies of scale",
      "Improved regulatory compliance",
      "Reduced application complexity"
    ],
    "a": 0,
    "e": "Collapsing weeks of procurement and scheduling into a few minutes of provisioning is the speed and agility advantage. Economies of scale is a pricing effect from aggregated demand, and it does not describe how quickly an environment can be created."
  },
  {
    "t": "economies-of-scale",
    "x": "A dairy cooperative's data team wants to trial five different recommendation algorithms, each needing its own cluster for a single weekend. Why is that easier to justify on AWS than in the cooperative's server room?",
    "o": [
      "Experimental workloads are provided at no charge by AWS",
      "Failed experiments can be shut down and stop generating charges",
      "AWS reserves dedicated hardware for every trial account",
      "Compute used for testing is billed at a flat annual rate"
    ],
    "a": 1,
    "e": "Because billing follows consumption, the downside of an experiment that does not pan out is limited to the hours it actually ran, which lowers the cost of trying ideas. Experiments are not free, and there is no flat annual testing rate that would make the comparison work."
  },
  {
    "t": "economies-of-scale",
    "x": "An executive asks what her teams should notice within the first year of building on AWS instead of ordering equipment. Which two changes are reasonable to expect? (Select TWO.)",
    "o": [
      "Software defects will be corrected automatically by AWS",
      "Every workload will run cheaper than any alternative",
      "Ideas can reach a working prototype far sooner",
      "Staff will no longer need to monitor their applications",
      "Unsuccessful projects can wind down without stranded equipment"
    ],
    "a": 2,
    "as": [
      2,
      4
    ],
    "e": "Faster time to a working prototype and the ability to stop a project without leaving unused equipment behind are direct consequences of on-demand provisioning. Blanket claims that every workload gets cheaper are false, and monitoring and application quality remain the customer's job."
  },
  {
    "t": "economies-of-scale",
    "x": "A language-learning app based in Lisbon signs its first large customer in Brazil and must serve lessons there without opening a facility in that country. Which cloud advantage makes this practical?",
    "o": [
      "Trading variable expense for fixed expense",
      "Eliminating the shared responsibility model",
      "Guaranteeing zero latency for all users",
      "Reaching new geographies in minutes"
    ],
    "a": 3,
    "e": "Deploying into an existing Region lets a company serve a distant market almost immediately instead of financing a local build-out. The expense option is backwards, since cloud adoption trades fixed expense for variable, and no provider can guarantee zero latency."
  },
  {
    "t": "economies-of-scale",
    "x": "An auditor notes that the company's owned servers average 12 percent utilization because each was sized for a once-a-year peak. How does consumption-based pricing change this picture?",
    "o": [
      "Charges track the capacity actually consumed rather than the peak",
      "Charges are calculated from the highest utilization reached each year",
      "Charges are fixed once the first workload has been deployed",
      "Charges are waived for any resource below 20 percent utilization"
    ],
    "a": 0,
    "e": "Paying for what is used means idle headroom stops being a sunk purchase, which is the fix for chronic over-provisioning. Billing from an annual high-water mark would recreate the same problem, and no discount is granted simply for low utilization."
  },
  {
    "t": "economies-of-scale",
    "x": "A finance analyst is documenting why unit prices on AWS have fallen over the past decade with no renegotiation on her employer's part. Which factors explain that trend? (Select TWO.)",
    "o": [
      "Each customer negotiates its own rate card with a regional sales team",
      "Hardware and operational efficiencies are passed back as price reductions",
      "Prices drop automatically whenever a customer exceeds a spending tier",
      "AWS spreads infrastructure investment across a very large customer base",
      "AWS matches the published list price of the nearest competitor daily"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Spreading fixed infrastructure investment across an enormous customer base lowers unit cost, and the resulting efficiency gains have historically been returned as published price reductions. Individual rate negotiation is not what drives these across-the-board reductions, and there is no automatic competitor price match."
  },
  {
    "t": "economies-of-scale",
    "x": "A ski resort's booking site sits idle all summer and saturates during the week lift passes go on sale, and its old servers were bought for that one week. What does AWS let the resort stop doing?",
    "o": [
      "Monitoring how its application performs",
      "Encrypting data that customers submit",
      "Estimating peak demand years in advance",
      "Publishing a maintenance schedule to users"
    ],
    "a": 2,
    "e": "Elastic provisioning removes the need to forecast a peak and buy against it long before the traffic arrives. Monitoring and encryption remain customer responsibilities regardless of where the workload runs, so neither disappears with the move."
  },
  {
    "t": "economies-of-scale",
    "x": "A university IT director argues that his institution could match AWS pricing simply by buying more equipment at once. Which factor most weakens that argument?",
    "o": [
      "One campus buys a tiny fraction of the volume AWS buys",
      "Campus equipment is taxed at a higher rate than cloud services",
      "Universities are prohibited from operating their own servers",
      "Equipment discounts are identical for every buyer worldwide"
    ],
    "a": 0,
    "e": "Volume discounts and operational efficiency scale with total purchasing, and a single campus operates orders of magnitude below hyperscale volume. The claim that discounts are identical for all buyers is simply untrue, which is the whole basis of the scale advantage."
  },
  {
    "t": "well-architected-pillars",
    "x": "A trading platform replaces one very large server with a fleet of smaller instances spread across three Availability Zones, so losing any single instance removes only a slice of total capacity. Which pillar's design principle is being applied?",
    "o": [
      "Performance Efficiency",
      "Reliability",
      "Cost Optimization",
      "Operational Excellence"
    ],
    "a": 1,
    "e": "Scaling horizontally to reduce the impact of any one failure is a named design principle of the reliability pillar. Performance efficiency is about using resources effectively as demand and technology change, not about limiting the blast radius of a component failure."
  },
  {
    "t": "well-architected-pillars",
    "x": "A media group cannot tell which of its eight business units generated last month's AWS invoice, so it introduces tagging and per-unit chargeback reporting. Which pillar covers this practice?",
    "o": [
      "Operational Excellence",
      "Performance Efficiency",
      "Cost Optimization",
      "Sustainability"
    ],
    "a": 2,
    "e": "Attributing expenditure to the teams that incur it is a design principle of the cost optimization pillar and the foundation of cloud financial management. Operational excellence covers how the organization runs and improves workloads, not how spending is allocated back to business units."
  },
  {
    "t": "well-architected-pillars",
    "x": "A seed catalog company wants image recognition in its plant-identification app but employs no researchers, so it consumes a managed AWS service rather than building models in house. Which pillar's design principle does this follow?",
    "o": [
      "Performance Efficiency",
      "Operational Excellence",
      "Security",
      "Reliability"
    ],
    "a": 0,
    "e": "Democratizing advanced technologies, meaning consuming them as a service instead of acquiring rare expertise, is a design principle of the performance efficiency pillar. Operational excellence would speak to how the team deploys and supports the app rather than how it obtains the capability."
  },
  {
    "t": "well-architected-pillars",
    "x": "An environmental officer reviews a workload and asks for two changes that align with the sustainability pillar. Which recommendations qualify? (Select TWO.)",
    "o": [
      "Keep spare instances running continuously in case of a spike",
      "Right-size instances so provisioned capacity matches real demand",
      "Copy every object to four Regions regardless of access patterns",
      "Adopt managed services that share infrastructure across customers",
      "Choose the largest available instance family for every service"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Maximizing utilization and using managed services with high shared efficiency are both sustainability design principles, because they reduce the resources needed per unit of work. Holding idle spare instances and replicating data nobody reads increase provisioned resources without delivering value, so they work against the pillar."
  },
  {
    "t": "well-architected-pillars",
    "x": "A credit union grants each analyst a role limited to the exact actions the job requires and revisits those permissions every quarter. Which pillar's design principle is this?",
    "o": [
      "Reliability",
      "Cost Optimization",
      "Sustainability",
      "Security"
    ],
    "a": 3,
    "e": "Implementing a strong identity foundation with least privilege is a design principle of the security pillar. Reliability concerns recovering from failure and meeting availability targets, and permission scoping does not address either of those outcomes."
  },
  {
    "t": "well-architected-pillars",
    "x": "A hospital network's platform team wants its release process to reflect the operational excellence pillar. Which two practices support that goal? (Select TWO.)",
    "o": [
      "Define infrastructure in templates and deploy it through pipelines",
      "Apply configuration changes by hand on production servers first",
      "Run a blameless review after each incident and update the runbooks",
      "Batch a quarter of changes into one large release window",
      "Restrict monitoring dashboards to the on-call engineer only"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Performing operations as code and learning from every operational failure are two of the pillar's stated design principles. Batching a quarter of changes into one window contradicts the principle of making frequent, small, reversible changes, which limits the damage any single release can do."
  },
  {
    "t": "well-architected-pillars",
    "x": "A payments company deliberately terminates production components twice a year to verify that automatic failover restores service inside the documented recovery time objective. Which pillar's design principle is this?",
    "o": [
      "Security",
      "Performance Efficiency",
      "Reliability",
      "Operational Excellence"
    ],
    "a": 2,
    "e": "Testing recovery procedures instead of assuming they work is a design principle of the reliability pillar, and a recovery time objective is a reliability target. Operational excellence is a tempting choice because rehearsals are procedural, but the objective being validated here is the workload's ability to recover."
  },
  {
    "t": "well-architected-pillars",
    "x": "A genomics lab's batch jobs are constrained by disk throughput, so the team evaluates volume types and instance families to find the combination that finishes runs fastest. Which pillar guides this evaluation?",
    "o": [
      "Cost Optimization",
      "Performance Efficiency",
      "Reliability",
      "Sustainability"
    ],
    "a": 1,
    "e": "Selecting resource types that fit the workload's actual bottleneck is core to the performance efficiency pillar. Cost optimization overlaps in practice, but the stated goal here is completion time rather than reducing what the lab is billed."
  },
  {
    "t": "well-architected-pillars",
    "x": "A charity's finance and engineering leads meet monthly to forecast AWS spend, set a budget per project, and act on variance. Which pillar names this discipline as a design principle?",
    "o": [
      "Security",
      "Cost Optimization",
      "Reliability",
      "Operational Excellence"
    ],
    "a": 1,
    "e": "Implementing cloud financial management, which includes forecasting, budgeting, and acting on variance, is a design principle of the cost optimization pillar. Operational excellence covers running and improving workloads and does not address financial governance."
  },
  {
    "t": "well-architected-pillars",
    "x": "During a review, a team lead states that performing operations as code is one of the six pillars. What correction should the reviewer make?",
    "o": [
      "It is a seventh pillar added to the framework more recently",
      "It is a lens that replaces the operational excellence pillar",
      "It is a design principle within the operational excellence pillar",
      "It is a design principle within the reliability pillar"
    ],
    "a": 2,
    "e": "The six pillars are operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability; performing operations as code is a design principle inside the first of those. Lenses are separate guidance for specific workload types and never replace a pillar."
  },
  {
    "t": "benefits-of-cloud",
    "x": "A researcher at a marine biology institute needs a GPU instance at two in the morning on a Sunday and creates it herself through the console, with no request submitted to a vendor. Which characteristic of cloud computing is shown?",
    "o": [
      "Broad network access",
      "Measured multi-tenancy",
      "On-demand self-service",
      "Guaranteed capacity reservation"
    ],
    "a": 2,
    "e": "Provisioning resources unilaterally, at any hour, without human interaction from the provider is the on-demand self-service characteristic. Broad network access describes reaching those resources over standard networks from varied devices, which is not what the scenario emphasizes."
  },
  {
    "t": "benefits-of-cloud",
    "x": "A four-person team compares self-hosting a message queue on instances it maintains against using a managed AWS equivalent. Which advantages does the managed option provide? (Select TWO.)",
    "o": [
      "Patching of the underlying infrastructure is handled by AWS",
      "Message delivery becomes impossible to monitor or measure",
      "The service can be used without procuring or racking equipment",
      "The team's application logic is written and maintained by AWS",
      "The service is provided free of charge to small organizations"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Managed services remove both the hardware acquisition step and the maintenance of the underlying platform, which is why small teams can run capabilities that would otherwise need dedicated staff. AWS never authors or maintains customer application logic, and managed services are billed rather than donated to small organizations."
  },
  {
    "t": "cloud-architecture",
    "x": "An esports statistics site doubles capacity by launching additional identical instances behind a load balancer rather than moving to a bigger instance type. What is this approach called?",
    "o": [
      "Vertical scaling",
      "Horizontal scaling",
      "Vertical partitioning",
      "Static provisioning"
    ],
    "a": 1,
    "e": "Adding more instances of the same size to share the load is horizontal scaling, or scaling out. Vertical scaling is the alternative that was explicitly rejected, since it means replacing a resource with a larger one rather than adding peers."
  },
  {
    "t": "cloud-architecture",
    "x": "An orchestra's ticket sales platform must keep taking orders when one server or one facility becomes unavailable. Which measures support that outcome? (Select TWO.)",
    "o": [
      "Consolidate the workload onto one larger instance",
      "Store order records only on a single instance volume",
      "Spread instances across multiple Availability Zones",
      "Perform failover manually during business hours",
      "Replace instances that fail health checks automatically"
    ],
    "a": 2,
    "as": [
      2,
      4
    ],
    "e": "Redundancy across Availability Zones survives the loss of a facility, and automatic replacement of unhealthy instances survives the loss of a server. Consolidating onto one larger instance does the opposite by concentrating the workload into a single point of failure."
  },
  {
    "t": "cloud-concepts",
    "x": "A team rents virtual machines, block storage, and networking from AWS, then installs and patches the operating systems and middleware itself. Which service model is described?",
    "o": [
      "Platform as a service",
      "Software as a service",
      "Infrastructure as a service",
      "Desktop as a service"
    ],
    "a": 2,
    "e": "Renting fundamental compute, storage, and network building blocks while retaining responsibility for the operating system is infrastructure as a service. Under platform as a service the provider would manage the operating system and runtime, leaving the team responsible only for its code and data."
  },
  {
    "t": "digital-transformation",
    "x": "A retailer's transformation office must establish risk management, application portfolio management, and cloud financial management practices before scaling its migration. Which AWS Cloud Adoption Framework perspective groups these capabilities?",
    "o": [
      "Platform",
      "Governance",
      "Operations",
      "Business"
    ],
    "a": 1,
    "e": "The governance perspective gathers the capabilities that orchestrate cloud initiatives while managing risk and maximizing benefit, including portfolio and cloud financial management. The platform perspective is a tempting alternative but it covers building and modernizing the technical environment, not the oversight practices described here."
  },
  {
    "t": "digital-transformation",
    "x": "A machinery maker replaces quarterly release windows with small daily deployments and gives each product team ownership of the services it builds. Which change does this represent?",
    "o": [
      "A shift from OpEx back to CapEx",
      "A shift in hardware refresh cycles",
      "A shift in operating model and culture",
      "A shift to a private deployment model"
    ],
    "a": 2,
    "e": "Changing how often the organization ships and who owns each service is a change to its operating model and culture, which is the human side of digital transformation. It is not a spending shift, since deployment cadence and team ownership say nothing about how the infrastructure is purchased."
  },
  {
    "t": "migration-tco",
    "x": "During an application portfolio assessment, a utility discovers 40 servers running a reporting tool that no business unit has opened in two years. Which of the seven migration strategies applies?",
    "o": [
      "Retain",
      "Rehost",
      "Retire",
      "Repurchase"
    ],
    "a": 2,
    "e": "Decommissioning applications that no longer deliver value is the retire strategy, and it usually yields the fastest savings in a portfolio assessment. Retain means consciously keeping something as it is for now, which would be wrong here because nobody is using the tool at all."
  },
  {
    "t": "migration-tco",
    "x": "A mainframe scheduling system cannot move until its vendor support agreement ends in 18 months, so the team leaves it where it is and revisits the decision later. Which strategy is this?",
    "o": [
      "Relocate",
      "Retain",
      "Retire",
      "Replatform"
    ],
    "a": 1,
    "e": "Deliberately postponing an application and keeping it in place, often called revisit, is the retain strategy. Retire would mean shutting it down, but the system is still needed and only its move is being deferred."
  },
  {
    "t": "well-architected",
    "x": "A platform team wants a structured questionnaire it can answer about a workload, producing a prioritized list of improvement items plus a report to share with leadership. Which AWS offering provides this?",
    "o": [
      "AWS Trusted Advisor",
      "AWS Compute Optimizer",
      "AWS Service Catalog",
      "AWS Well-Architected Tool"
    ],
    "a": 3,
    "e": "The AWS Well-Architected Tool walks a team through pillar-based questions about a workload and returns an improvement plan and report. Trusted Advisor is an attractive distractor because it also produces recommendations, but it runs automated checks on an account rather than guiding a structured architectural review."
  },
  {
    "t": "iam-policies-roles",
    "x": "A logistics startup runs a nightly batch job on an EC2 instance that must upload processed shipment files to Amazon S3. Developers currently paste long-lived access keys into the instance user data script. What should replace that practice?",
    "o": [
      "Store the access keys in an environment variable on the instance",
      "Create an IAM user for the instance and rotate its keys every 90 days",
      "Attach an IAM role to the instance so the application receives temporary credentials",
      "Move the access keys into a private S3 bucket the instance reads at startup"
    ],
    "a": 2,
    "e": "An IAM role attached to the instance supplies short-lived credentials that AWS rotates automatically, so no static key ever sits on disk. Creating an IAM user with a 90-day rotation schedule still leaves a durable secret on the host between rotations, which is exactly the exposure the auditor would flag."
  },
  {
    "t": "iam-policies-roles",
    "x": "A finance department needs read-only reporting permissions, and the security team wants that permission set defined once and reused as new finance hires arrive. Which IAM construct is built to be attached to many identities?",
    "o": [
      "An inline policy",
      "A managed policy",
      "An access key pair",
      "A permissions boundary"
    ],
    "a": 1,
    "e": "A managed policy is a standalone document that can be attached to any number of users, groups, and roles, so one edit updates every identity that uses it. An inline policy is embedded in a single identity and would have to be recreated for each new hire."
  },
  {
    "t": "iam-policies-roles",
    "x": "A media company is writing its first customer managed IAM policy for an internal tool. Which statements about how IAM evaluates permissions are correct? (Select TWO.)",
    "o": [
      "An explicit deny in any applicable policy overrides any allow",
      "An explicit allow overrides an explicit deny when both are present",
      "Requests are denied by default when no policy explicitly allows them",
      "Permissions granted to an IAM group are inherited only by the newest member",
      "A policy attached directly to a user replaces the policies attached to groups"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "IAM starts from an implicit deny and grants access only when some policy allows it, and any explicit deny anywhere in the evaluation wins. The reverse claim that an allow beats a deny is the classic trap; deny always takes precedence, and group policies add to rather than replace user policies."
  },
  {
    "t": "iam-root-mfa",
    "x": "During an internal review, a reviewer finds that the email address tied to the AWS account owner belongs to an employee who left the firm last quarter. Why does this matter so much for the root user specifically?",
    "o": [
      "The root user cannot sign in without a verified email alias",
      "Billing reports are only visible to the address on file",
      "Support cases can only be opened from that mailbox",
      "Password recovery for the root user is sent to that address"
    ],
    "a": 3,
    "e": "The root credential is recovered through the account email address, so whoever controls that mailbox can eventually take over the account. Billing visibility is controlled separately through IAM and account settings, which makes it a distraction rather than the real risk here."
  },
  {
    "t": "iam-root-mfa",
    "x": "A small design agency wants the strongest sign-in protection available for its account owner credential, and it must survive a lost phone without locking the agency out. Which combination does AWS recommend?",
    "o": [
      "Enable MFA on the root user and register a backup MFA device",
      "Enable MFA on the root user and store the seed in a shared document",
      "Disable MFA on the root user and use a very long password instead",
      "Enable MFA on one IAM administrator and skip it for the root user"
    ],
    "a": 0,
    "e": "AWS supports registering multiple MFA devices on the root user, which preserves recovery if one device is lost while keeping the second factor in force. Copying the seed into a shared document defeats the second factor entirely, since anyone with the document can generate valid codes."
  },
  {
    "t": "iam-root-mfa",
    "x": "Which action in an AWS account still requires signing in with the account owner credentials rather than an administrator identity?",
    "o": [
      "Creating an Amazon S3 bucket",
      "Launching an EC2 instance in a new Region",
      "Closing the AWS account",
      "Attaching a managed policy to an IAM group"
    ],
    "a": 2,
    "e": "A short list of account-level tasks, including closing the account and changing the account name or email, is reserved for the root user. Routine resource work such as launching instances or editing IAM policies should be delegated to administrative identities so the root credential stays locked away."
  },
  {
    "t": "cognito-directory",
    "x": "A gaming studio is launching a mobile title and wants players to register, sign in, and then call a backend API with tokens that prove who they are. Which AWS service handles that end-user identity layer?",
    "o": [
      "AWS Directory Service",
      "Amazon Cognito",
      "AWS IAM Identity Center",
      "AWS Certificate Manager"
    ],
    "a": 1,
    "e": "Amazon Cognito provides user pools that register and authenticate application end users and issue tokens the backend can validate. IAM Identity Center is aimed at workforce access to AWS accounts and internal applications, not at millions of consumer accounts belonging to a game."
  },
  {
    "t": "cognito-directory",
    "x": "A manufacturing firm runs Windows file servers and .NET applications on EC2 instances that must join a managed Microsoft Active Directory domain hosted in AWS. Which service supplies that domain?",
    "o": [
      "Amazon Cognito",
      "AWS IAM Identity Center",
      "AWS Resource Access Manager",
      "AWS Directory Service"
    ],
    "a": 3,
    "e": "AWS Directory Service runs managed Microsoft Active Directory in the cloud so domain-joined Windows workloads keep working without self-managed domain controllers. Amazon Cognito authenticates application users and has no concept of a Windows domain join."
  },
  {
    "t": "cognito-directory",
    "x": "An enterprise is consolidating workforce sign-in across dozens of AWS accounts. Which outcomes does AWS IAM Identity Center support? (Select TWO.)",
    "o": [
      "Single sign-on access to multiple AWS accounts from one portal",
      "Sign-up and password reset flows for a public retail app",
      "Automatic patching of operating systems on member accounts",
      "Federation with an existing external identity provider",
      "Encryption key rotation for Amazon EBS volumes"
    ],
    "a": 0,
    "as": [
      0,
      3
    ],
    "e": "IAM Identity Center gives employees one portal that grants permission sets across many accounts, and it can source those employees from an external identity provider instead of duplicating them. Public consumer sign-up flows belong to Amazon Cognito, and patching or key rotation are unrelated functions."
  },
  {
    "t": "kms-encryption",
    "x": "A bank must prove exactly who used a particular encryption key and when, and it also requires that the key material never leave AWS in plaintext. Which pairing of services produces that evidence?",
    "o": [
      "AWS KMS with Amazon Macie",
      "AWS Secrets Manager with Amazon Inspector",
      "AWS KMS with AWS CloudTrail",
      "AWS Certificate Manager with AWS Config"
    ],
    "a": 2,
    "e": "AWS KMS keeps key material inside validated hardware and never releases it in plaintext, while CloudTrail records each cryptographic API call with the caller identity and timestamp. Macie discovers sensitive data in Amazon S3 and produces no record of key usage, so it cannot supply the audit trail."
  },
  {
    "t": "kms-encryption",
    "x": "An analytics team turns on default encryption for a new Amazon S3 bucket and is unsure what this means for applications that already write objects there. What is the effect on those writers?",
    "o": [
      "New objects are encrypted automatically with no application changes",
      "Every object must be re-uploaded through a separate encryption endpoint",
      "Applications must call a client library before every write succeeds",
      "Existing readers lose access until they are granted a new key pair"
    ],
    "a": 0,
    "e": "Server-side encryption is applied by Amazon S3 as objects arrive, so writers keep using the same API calls and readers keep the same permissions. The idea that clients must encrypt data themselves describes client-side encryption, which is a separate choice the customer can make but is not what default bucket encryption does."
  },
  {
    "t": "kms-encryption",
    "x": "A retailer asks who controls permissions on the customer managed key that protects its order database. Which statement describes the arrangement accurately?",
    "o": [
      "AWS defines the key policy and the customer requests exceptions",
      "The customer defines the key policy while AWS operates the hardware",
      "The key policy is fixed by the compliance program the customer selects",
      "Permissions are inherited automatically from the database resource policy"
    ],
    "a": 1,
    "e": "With a customer managed key the customer authors the key policy that decides which principals may encrypt, decrypt, or administer it, while AWS runs and maintains the underlying hardware security modules. Compliance programs describe how AWS operates the service; they never write the key policy for a specific customer."
  },
  {
    "t": "secrets-manager",
    "x": "A payments team hardcoded a database password in application source, and an auditor now demands that the credential change on a fixed schedule without any code being redeployed. Which service is purpose-built for that?",
    "o": [
      "AWS Systems Manager Parameter Store",
      "AWS Key Management Service",
      "AWS Certificate Manager",
      "AWS Secrets Manager"
    ],
    "a": 3,
    "e": "AWS Secrets Manager stores the credential, hands it to the application at runtime, and rotates it automatically on a schedule for supported databases. Parameter Store can hold a secure string but does not perform built-in credential rotation, which is the specific requirement in this scenario."
  },
  {
    "t": "secrets-manager",
    "x": "A developer needs somewhere to keep a plain configuration value such as an application log level, and the team wants the lowest cost option that still offers versioning and access control. Which choice fits?",
    "o": [
      "A standard parameter in AWS Systems Manager Parameter Store",
      "A secret in AWS Secrets Manager with rotation enabled",
      "An object in an Amazon S3 bucket with public read access",
      "An environment variable baked into the machine image"
    ],
    "a": 0,
    "e": "Standard parameters in Parameter Store are offered at no additional charge and still give version history plus IAM-controlled access, which suits non-secret configuration. Secrets Manager charges per secret and adds rotation machinery that a log level does not need."
  },
  {
    "t": "secrets-manager",
    "x": "An engineer argues that keeping an API token inside a private Git repository is safe enough for production. Which weakness does a managed secret store address that the repository does not?",
    "o": [
      "The repository cannot enforce encryption of data in transit",
      "Git repositories cannot store text longer than a few kilobytes",
      "Anyone who clones the repository gains the credential permanently",
      "Source control systems do not support access logging of any kind"
    ],
    "a": 2,
    "e": "A cloned repository carries the token into every developer laptop and every fork of the history, so the credential spreads and cannot be revoked centrally. A managed store keeps one copy behind IAM permissions and can rotate it, which is why the repository habit fails a security review."
  },
  {
    "t": "waf-shield",
    "x": "A ticketing site is receiving SQL injection attempts aimed at its search form, and the security lead wants those requests filtered before they reach the application. Which service inspects HTTP requests for such patterns?",
    "o": [
      "AWS Shield Standard",
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Network Firewall"
    ],
    "a": 1,
    "e": "AWS WAF operates on layer 7 and matches request bodies, headers, and query strings against rules that block injection attempts. Shield Standard mitigates volumetric denial of service traffic and has no visibility into the content of an individual HTTP request."
  },
  {
    "t": "waf-shield",
    "x": "A news publisher subscribes to AWS Shield Advanced ahead of an election night traffic surge. Beyond broader attack coverage, what does the subscription add?",
    "o": [
      "Access to the AWS Shield Response Team during an event",
      "Automatic blocking of all requests from outside one country",
      "A dedicated physical firewall appliance in the customer rack",
      "Free data transfer for all traffic leaving the application"
    ],
    "a": 0,
    "e": "Shield Advanced adds expert support from the Shield Response Team, detailed attack diagnostics, and cost protection for scaling caused by an attack. Geographic blocking is something the publisher would configure itself as a WAF rule, and no physical appliance is ever shipped to a customer."
  },
  {
    "t": "waf-shield",
    "x": "A university portal must stop a flood of requests from one IP address hammering its login page while staying available during a large network layer attack. Which statements are accurate? (Select TWO.)",
    "o": [
      "AWS WAF encrypts the portal database at rest by default",
      "AWS WAF rate-based rules can throttle requests from a single source",
      "AWS Shield rewrites application URLs to hide the origin server",
      "AWS Shield defends against volumetric network layer attacks",
      "AWS WAF replaces the need for authentication on the login page"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Rate-based rules in AWS WAF count requests per source and block sources that exceed a threshold, while Shield absorbs volumetric floods aimed at the network and transport layers. Neither service encrypts databases nor substitutes for authenticating users, which remain separate customer responsibilities."
  },
  {
    "t": "guardduty-inspector",
    "x": "An operations engineer receives an alert that one of the firm EC2 instances has been communicating with a known cryptocurrency mining pool. Which service most likely produced that finding?",
    "o": [
      "Amazon Inspector",
      "AWS Config",
      "Amazon GuardDuty",
      "AWS Trusted Advisor"
    ],
    "a": 2,
    "e": "Amazon GuardDuty analyzes account activity, DNS queries, and network flows against threat intelligence, and mining pool communication is one of its signature detections. Amazon Inspector looks for vulnerable software packages and would not observe an active outbound connection."
  },
  {
    "t": "guardduty-inspector",
    "x": "A development group pushes container images to Amazon ECR many times each day and wants every image evaluated against published vulnerability data as soon as it lands. Which service performs that scan?",
    "o": [
      "Amazon GuardDuty",
      "Amazon Macie",
      "AWS Audit Manager",
      "Amazon Inspector"
    ],
    "a": 3,
    "e": "Amazon Inspector continuously scans EC2 instances, container images in Amazon ECR, and Lambda functions for known vulnerabilities and reports severity. GuardDuty watches for active threats and malicious behavior rather than cataloguing which packages carry published flaws."
  },
  {
    "t": "guardduty-inspector",
    "x": "A security manager asks whether Amazon GuardDuty requires software to be installed on every EC2 instance before detection begins. How does the service obtain what it needs?",
    "o": [
      "It analyzes existing log and telemetry sources without an agent",
      "It requires an agent installed on each monitored instance",
      "It depends on a hardware appliance placed in every subnet",
      "It reads only findings that administrators submit manually"
    ],
    "a": 0,
    "e": "GuardDuty consumes sources such as CloudTrail events, VPC flow logs, and DNS logs directly from AWS, so it can be enabled with no deployment on workloads. Assuming an agent is required confuses it with tools that inspect the inside of a host."
  },
  {
    "t": "macie-detective",
    "x": "After a suspicious API call is flagged, an incident responder needs to pivot through weeks of related activity and see how one compromised credential moved around the environment. Which service is built for that analysis?",
    "o": [
      "Amazon GuardDuty",
      "Amazon Detective",
      "AWS Config",
      "Amazon Inspector"
    ],
    "a": 1,
    "e": "Amazon Detective builds a linked graph from log data so responders can follow an entity across time and understand the scope of an event. GuardDuty raises the original finding but stops short of the interactive investigation workflow the responder is describing."
  },
  {
    "t": "macie-detective",
    "x": "A legal team suspects that engineers have uploaded spreadsheets holding national identification numbers into shared object storage. Which service can locate that content automatically?",
    "o": [
      "Amazon Macie",
      "Amazon Detective",
      "AWS Artifact",
      "AWS Firewall Manager"
    ],
    "a": 0,
    "e": "Amazon Macie inspects objects in Amazon S3 and classifies personally identifiable and other sensitive data types, reporting where they were found. Amazon Detective analyzes security findings and never opens a file to look at what kind of data it contains."
  },
  {
    "t": "macie-detective",
    "x": "A retailer wants to know both where its customer files sit in object storage and how a flagged security event unfolded over time. Which statements describe those two services correctly? (Select TWO.)",
    "o": [
      "Amazon Macie blocks malicious traffic before it reaches the bucket",
      "Amazon Detective encrypts objects that contain personal information",
      "Amazon Macie classifies sensitive objects stored in Amazon S3",
      "Amazon Macie issues compliance certificates for auditors to review",
      "Amazon Detective builds linked visualizations from security findings"
    ],
    "a": 2,
    "as": [
      2,
      4
    ],
    "e": "Macie answers the discovery question by scanning and classifying S3 objects, while Detective answers the investigation question by correlating findings into a navigable graph. Neither one filters traffic or encrypts data, and compliance certificates come from AWS Artifact instead."
  },
  {
    "t": "organizations-scp",
    "x": "A developer holds an identity policy granting full Amazon DynamoDB access, but a service control policy above the account denies every DynamoDB action. What happens when the developer makes the call?",
    "o": [
      "The request succeeds because identity policies outrank organization policies",
      "The request succeeds but is logged as a policy conflict for review",
      "The request is queued until an administrator approves the exception",
      "The request is denied because the account maximum permissions exclude it"
    ],
    "a": 3,
    "e": "A service control policy defines the ceiling of what any principal in the account may do, so an action it does not permit cannot be granted by an identity policy underneath. Identity policies never override that ceiling, which is why the developer sees an access denied error."
  },
  {
    "t": "organizations-scp",
    "x": "A parent organization wants an assurance that nobody, including administrators inside a member account, can turn off logging there. Which control enforces that ceiling?",
    "o": [
      "A service control policy that denies the logging actions",
      "An IAM group with a read-only policy in each account",
      "A permissions boundary applied to the root user of each account",
      "A tag policy that marks logging resources as protected"
    ],
    "a": 0,
    "e": "A service control policy attached above the account restricts every principal in it, so even an account administrator cannot perform the denied action. An IAM group only limits the users placed in it and can be edited by any administrator in that account, so it provides no real guarantee."
  },
  {
    "t": "organizations-scp",
    "x": "An architect is introducing AWS Organizations to a team that has only ever worked in a single account. Which statements are true? (Select TWO.)",
    "o": [
      "Accounts can be grouped into organizational units for policy targeting",
      "A service control policy grants permissions to users on its own",
      "Organizations replaces the need for IAM policies inside each account",
      "A service control policy sets the maximum permissions for an account",
      "Organizational units can contain only one account each"
    ],
    "a": 0,
    "as": [
      0,
      3
    ],
    "e": "Organizational units let similar accounts be managed together, and a service control policy applied to one bounds what those accounts may do. The common misunderstanding is that an SCP grants access; it only filters, so IAM policies inside each account are still required to allow anything."
  },
  {
    "t": "control-tower",
    "x": "A platform team must hand each new project group a preconfigured AWS account within a day instead of the two weeks manual setup consumes. Which AWS Control Tower feature automates that provisioning?",
    "o": [
      "Trusted Advisor checks",
      "Account Factory",
      "Cost anomaly detection",
      "Elastic Beanstalk environments"
    ],
    "a": 1,
    "e": "Account Factory creates new accounts from a standard blueprint with the baseline controls and network configuration already applied. Trusted Advisor evaluates an existing environment against best practices and does not create accounts at all."
  },
  {
    "t": "control-tower",
    "x": "A reviewer notices that one workload account no longer matches the baseline AWS Control Tower applied at creation because someone edited a governed resource by hand. What is this condition called?",
    "o": [
      "Drift",
      "Throttling",
      "Federation",
      "Deprecation"
    ],
    "a": 0,
    "e": "Control Tower reports drift when a governed account or resource diverges from the landing zone baseline, and it offers a path to bring the account back into line. Throttling refers to rate limiting on API calls and has nothing to do with governance state."
  },
  {
    "t": "control-tower",
    "x": "A regional bank must guarantee that every account it creates automatically sends its audit records to a central, tightly restricted archive. How does a landing zone satisfy that requirement?",
    "o": [
      "It stores all logs inside the management account by default",
      "It requires each team to configure its own log destination",
      "It creates dedicated log archive and audit accounts during setup",
      "It disables logging until an administrator approves each account"
    ],
    "a": 2,
    "e": "The AWS Control Tower landing zone provisions separate log archive and audit accounts and directs governed account logs there from the start. Leaving log destinations to each team is the manual pattern the landing zone exists to eliminate."
  },
  {
    "t": "config-cloudtrail",
    "x": "Two auditors disagree about which log answers their question. One wants to know who invoked an API, the other wants to know what a resource looked like last Tuesday. Which service answers the second auditor?",
    "o": [
      "AWS CloudTrail",
      "Amazon CloudWatch Logs",
      "AWS X-Ray",
      "AWS Config"
    ],
    "a": 3,
    "e": "AWS Config keeps a versioned inventory of resource configurations, so it can show the exact state of a resource on a past date. CloudTrail answers the first auditor by recording the identity, time, and source of each API call, but it does not store resource state."
  },
  {
    "t": "config-cloudtrail",
    "x": "A newly hired administrator asks how far back API activity can be reviewed in the CloudTrail console when nobody has configured anything yet. Which statement is accurate?",
    "o": [
      "Nothing is recorded until a trail is created by an administrator",
      "Recent management events are viewable for the past 90 days",
      "All events are retained indefinitely at no additional charge",
      "Only events from the current calendar month are available"
    ],
    "a": 1,
    "e": "Event history captures management events automatically and keeps them viewable for 90 days without any setup. Longer retention requires creating a trail that delivers events to Amazon S3, which is why assuming indefinite free retention leads to gaps during an investigation."
  },
  {
    "t": "config-cloudtrail",
    "x": "A compliance program demands both a record of every configuration change and proof of which identity initiated it. Which statements about these two services are correct? (Select TWO.)",
    "o": [
      "AWS Config blocks changes that violate a rule automatically",
      "AWS Config records resource configuration changes over time",
      "AWS CloudTrail scans instances for missing security patches",
      "AWS Config encrypts all data stored in Amazon S3 buckets",
      "AWS CloudTrail records the API calls made in the account"
    ],
    "a": 1,
    "as": [
      1,
      4
    ],
    "e": "Config tracks what resources look like and how that changed, while CloudTrail tracks who called which API and when, so together they satisfy both halves of the requirement. Config evaluates and can trigger remediation but does not prevent a change from happening, and patch scanning belongs to Amazon Inspector."
  },
  {
    "t": "artifact-compliance",
    "x": "A prospective enterprise buyer asks a software vendor to demonstrate that the underlying infrastructure holds an ISO 27001 certification. Where does the vendor retrieve that evidence about AWS?",
    "o": [
      "AWS Audit Manager",
      "AWS Config",
      "AWS Artifact",
      "AWS Trusted Advisor"
    ],
    "a": 2,
    "e": "AWS Artifact is the self-service portal for AWS audit reports and certifications, including ISO and SOC documents. Audit Manager helps a customer collect evidence about its own workload against a framework, so it does not supply AWS certification documents."
  },
  {
    "t": "artifact-compliance",
    "x": "A payment processor must attest that cardholder data it handles on AWS follows PCI DSS. Which division of duty is accurate?",
    "o": [
      "AWS certifies its infrastructure while the customer certifies its workload",
      "AWS certifies the entire environment including customer applications",
      "The customer inherits certification for anything deployed on AWS",
      "Certification is granted by the AWS Support plan the customer buys"
    ],
    "a": 0,
    "e": "Compliance is inherited only for the layers AWS operates; the application, its configuration, and how cardholder data is handled remain in scope for the customer assessment. Believing that deployment on AWS confers certification automatically is the misconception that causes failed audits."
  },
  {
    "t": "artifact-compliance",
    "x": "A vendor risk questionnaire arrives at a startup running entirely on AWS. Which items can the startup satisfy directly through AWS Artifact? (Select TWO.)",
    "o": [
      "Producing an application penetration test of the startup own code",
      "Downloading the current SOC 1 report for AWS infrastructure",
      "Listing the IAM users that exist in the startup AWS account",
      "Retrieving AWS agreements such as the business associate addendum",
      "Certifying that the startup staff completed security training"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Artifact publishes AWS audit reports on demand and hosts the legal agreements customers accept, such as the HIPAA business associate addendum. Testing the startup own application and training its staff are customer obligations that no AWS report can answer."
  },
  {
    "t": "shared-responsibility",
    "x": "A retailer engineering team configures a security group that accidentally exposes a database port to the entire internet. Who is accountable for that misconfiguration?",
    "o": [
      "AWS, because the networking layer belongs to the provider",
      "The customer, because security group rules are customer configured",
      "Both parties equally, because the rule spans infrastructure and data",
      "The Region operator, because rules are enforced at the facility"
    ],
    "a": 1,
    "e": "Security group rules are firewall settings the customer defines, which places them squarely on the security in the cloud side of the model. AWS operates the infrastructure that enforces the rule but never decides which ports a customer chooses to open."
  },
  {
    "t": "shared-responsibility",
    "x": "A hotel chain runs a booking system on Amazon EC2 with its reservation data in Amazon RDS. Which duties belong to AWS in that arrangement? (Select TWO.)",
    "o": [
      "Replacing failed disks in the data center hosting the instances",
      "Configuring the parameter group settings the application needs",
      "Applying patches to the underlying RDS database engine host",
      "Choosing which users receive access to the booking database",
      "Deciding the backup retention window for the booking data"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "AWS maintains the physical hardware and, for a managed database, patches the host and engine software beneath the service. Parameter tuning, access decisions, and retention settings stay with the hotel chain because they express business intent rather than infrastructure upkeep."
  },
  {
    "t": "shared-responsibility",
    "x": "A furniture retailer keeps product photography in Amazon S3. Who guarantees the physical destruction of decommissioned storage media that once held those objects?",
    "o": [
      "The customer must schedule destruction through a support case",
      "The customer must run a wipe utility before releasing the storage",
      "Neither party, because object storage never reuses physical media",
      "AWS handles media decommissioning as part of its facility controls"
    ],
    "a": 3,
    "e": "Media decommissioning happens inside the data center, which is entirely on the AWS side of the model, and it follows a documented destruction process. Customers have no access to the physical disks and therefore cannot wipe or schedule destruction themselves."
  },
  {
    "t": "shared-responsibility",
    "x": "A logistics firm swaps a self-managed message broker running on EC2 for Amazon SQS and asks what leaves its plate as a result. Which obligation disappears for the firm?",
    "o": [
      "Patching the operating system that runs the messaging software",
      "Deciding which applications may send and receive messages",
      "Choosing whether message payloads are encrypted at rest",
      "Setting the access policy that governs the queue"
    ],
    "a": 0,
    "e": "Moving to a fully managed service transfers host and platform maintenance to AWS, so nobody at the firm patches an operating system for messaging anymore. Access decisions and encryption choices continue to reflect the firm requirements and stay with the customer regardless of service model."
  },
  {
    "t": "identity-iam",
    "x": "A contractor needs console access for a two-week engagement, and the access must expire on its own rather than depending on someone remembering to remove it. Which approach fits best?",
    "o": [
      "An IAM user with a password and a calendar reminder to delete it",
      "A shared administrator login handed to the contractor",
      "Federated access through a role with a session that expires",
      "An access key stored in the contractor password manager"
    ],
    "a": 2,
    "e": "Federated role access issues a session that ends after a defined duration, so the credential stops working with no cleanup task required. Creating an IAM user relies on a manual deletion step, which is exactly the failure mode that leaves orphaned accounts behind."
  },
  {
    "t": "identity-iam",
    "x": "An auditor asks a startup to show which IAM users still hold unused passwords and access keys older than a year. Which IAM feature produces that list?",
    "o": [
      "The billing dashboard",
      "The credential report",
      "The service quota console",
      "The organization trail"
    ],
    "a": 1,
    "e": "The IAM credential report is a downloadable file listing every user together with password and access key status, age, and last use. The billing dashboard summarizes spending and reveals nothing about the state of individual credentials."
  },
  {
    "t": "identity-iam",
    "x": "A support engineer must read CloudWatch metrics in the production account while signed in to her own account, and she should not need a second password. Which elements make that possible? (Select TWO.)",
    "o": [
      "A permanent access key copied from the production account",
      "A second IAM user created for her in the production account",
      "A role in the production account that trusts her account",
      "A root user password shared between the two accounts",
      "Temporary credentials issued when she assumes the role"
    ],
    "a": 2,
    "as": [
      2,
      4
    ],
    "e": "Cross-account access works by creating a role in the target account whose trust policy names the other account, then assuming it to receive short-lived credentials. Creating a duplicate user or copying a long-lived key reintroduces the second credential the design is meant to avoid."
  },
  {
    "t": "security-services",
    "x": "A team must present TLS certificates on a public Application Load Balancer and wants renewal to happen without anyone tracking expiry dates. Which service issues and renews those certificates?",
    "o": [
      "AWS Key Management Service",
      "AWS Secrets Manager",
      "Amazon Route 53",
      "AWS Certificate Manager"
    ],
    "a": 3,
    "e": "AWS Certificate Manager provisions public certificates for integrated services such as load balancers and renews them automatically before expiry. KMS manages encryption keys for data at rest and does not issue the certificates a browser validates."
  },
  {
    "t": "security-services",
    "x": "A small team with no dedicated security engineer wants automated checks that surface issues like buckets open to the public and access keys that have never been rotated. Which service provides those built-in checks?",
    "o": [
      "AWS Trusted Advisor",
      "AWS Artifact",
      "Amazon Detective",
      "AWS Resource Access Manager"
    ],
    "a": 0,
    "e": "Trusted Advisor evaluates an account against best practice checks across security, cost, performance, and other categories and highlights items to fix. AWS Artifact only distributes compliance documents and never inspects how a customer account is configured."
  },
  {
    "t": "security-services",
    "x": "A company plans an authorized penetration test against the EC2 instances it operates. What does AWS policy permit?",
    "o": [
      "Testing only after a support engineer schedules the window",
      "Testing of any AWS service including shared infrastructure",
      "Testing permitted services without prior approval from AWS",
      "Testing is prohibited on all customer workloads in AWS"
    ],
    "a": 2,
    "e": "AWS publishes a list of services customers may test against their own resources without requesting permission first, provided the activity stays within the policy. Testing is not open ended, though, since probing shared infrastructure or other tenants remains off limits."
  },
  {
    "t": "governance",
    "x": "A finance leader wants every resource labeled with a cost center so that spending and access reviews can be grouped by department. Which practice supports that goal?",
    "o": [
      "Creating one AWS account for every individual employee",
      "Applying a consistent tagging strategy across resources",
      "Storing an inventory spreadsheet outside of AWS",
      "Naming every resource after the engineer who created it"
    ],
    "a": 1,
    "e": "Tags attach metadata to resources so reports, policies, and reviews can filter by attributes such as cost center or environment. An external spreadsheet drifts from reality as soon as someone launches a resource without updating it."
  },
  {
    "t": "governance",
    "x": "A regulated insurer is defining how its AWS environment will be governed as more teams begin building. Which practices align with AWS guidance? (Select TWO.)",
    "o": [
      "Share one administrator credential among the operations staff",
      "Grant permissions that match the minimum a task requires",
      "Disable logging in development accounts to reduce noise",
      "Grant every engineer administrator access to avoid delays",
      "Record configuration changes so drift can be reviewed later"
    ],
    "a": 1,
    "as": [
      1,
      4
    ],
    "e": "Least privilege and a durable record of configuration change are foundational governance practices that make review and incident response possible. Sharing credentials destroys attribution, and turning off logging in lower environments removes the evidence needed when something goes wrong there."
  },
  {
    "t": "regions-az-edge",
    "x": "An architect must place a workload so that a fire in one building cannot take the whole application offline, yet replication between the copies still has to finish in milliseconds. How are Availability Zones built to support that pairing of goals?",
    "o": [
      "Zones are single racks inside one shared building, wired to a common power feed",
      "Zones are caching sites placed in major cities to shorten distance to end users",
      "Zones are isolated data center groups in a Region, joined by high-speed private links",
      "Zones are separate AWS accounts that partition billing for a workload"
    ],
    "a": 2,
    "e": "An Availability Zone is one or more discrete data centers with independent power, cooling, and physical security, spaced far enough apart to avoid a shared disaster but joined by private high-bandwidth links so replication stays fast. Caching sites placed near end users describe edge locations, and zones have nothing to do with account or billing boundaries."
  },
  {
    "t": "regions-az-edge",
    "x": "A video streaming platform based in Toronto is deciding where to place its infrastructure and how to shorten playback start times for viewers abroad. Which statements about Regions and edge locations are correct? (Select TWO.)",
    "o": [
      "Every Region contains exactly one Availability Zone dedicated to caching",
      "A Region is a physical area of the world that contains multiple isolated Availability Zones",
      "Edge locations replace Availability Zones when a Region is unavailable",
      "Edge locations cache content closer to viewers and are far more numerous than Regions",
      "Regions are automatically linked so data replicates between them by default"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "A Region is a geographic area made up of multiple isolated Availability Zones, and edge locations form a much larger network of caching sites that sit close to viewers. Regions are not replicated to one another by default; copying data across Regions is something the customer chooses to configure."
  },
  {
    "t": "outposts-local-zones",
    "x": "A hospital's imaging application has to stay physically inside the hospital building to satisfy regulators, but the operations staff want to keep managing it with the same AWS APIs and console they already use. Which offering meets both conditions?",
    "o": [
      "AWS Local Zones",
      "AWS Outposts",
      "AWS Direct Connect",
      "Amazon CloudFront"
    ],
    "a": 1,
    "e": "AWS Outposts ships AWS-managed racks into the customer's own facility, so the workload runs on premises while the team keeps the familiar AWS control plane and tooling. Local Zones sit in AWS-operated metro sites rather than the customer's building, and Direct Connect supplies only a private network link."
  },
  {
    "t": "outposts-local-zones",
    "x": "A game studio needs single-digit millisecond response for players connecting over home broadband in one large metropolitan area, but the nearest Region adds too much delay. Which AWS option places compute nearer to those players?",
    "o": [
      "AWS Outposts",
      "AWS Wavelength",
      "Amazon Route 53",
      "AWS Local Zones"
    ],
    "a": 3,
    "e": "Local Zones extend a Region into a metropolitan area so latency-sensitive workloads sit close to end users while staying under the same AWS control plane. Wavelength targets traffic reaching devices on 5G carrier networks, and Outposts would force the studio to host hardware in its own facility."
  },
  {
    "t": "sdk-cli-console",
    "x": "A systems administrator has to schedule a nightly shell script on a Linux workstation that finds and terminates untagged development instances. Which AWS access method suits an unattended, scripted task like this?",
    "o": [
      "AWS Management Console",
      "AWS Software Development Kit for Java",
      "AWS Command Line Interface",
      "AWS Systems Manager Session Manager"
    ],
    "a": 2,
    "e": "The AWS CLI issues service calls straight from a terminal or shell script, which is exactly what an unattended nightly job needs. The console is interactive and cannot be scheduled, and reaching for an SDK would mean building and maintaining an application instead of a short script."
  },
  {
    "t": "sdk-cli-console",
    "x": "A newly hired engineer at a logistics firm is comparing the ways that people and programs talk to AWS services. Which statements about these access methods are correct? (Select TWO.)",
    "o": [
      "The Management Console offers a browser-based graphical interface for AWS services",
      "The CLI can only be used from Amazon EC2 instances, not from a laptop",
      "The console is required to create resources, while the CLI can only read them",
      "An SDK lets application code call AWS services in languages such as Python or Java",
      "SDKs are available exclusively for mobile operating systems"
    ],
    "a": 0,
    "as": [
      0,
      3
    ],
    "e": "The console is the graphical, browser-based entry point, and SDKs let programs invoke AWS services from languages like Python or Java. The CLI runs anywhere it is installed, including a laptop, and it can create resources just as readily as it reads them."
  },
  {
    "t": "cloudformation-iac",
    "x": "An auditor asks a bank how it can prove that its staging environment matches production. The bank builds both from one declarative template file kept in version control. What is this practice called?",
    "o": [
      "Continuous integration",
      "Infrastructure as code",
      "Blue/green deployment",
      "Horizontal scaling"
    ],
    "a": 1,
    "e": "Defining environments in machine-readable template files held in source control is infrastructure as code, and it is what makes two environments provably identical. Continuous integration concerns building and testing application code rather than provisioning the resources underneath it."
  },
  {
    "t": "cloudformation-iac",
    "x": "A template deployment fails partway through, leaving some resources created and others not. The engineer wants no leftover pieces to clean up by hand. What does AWS CloudFormation do by default in this situation?",
    "o": [
      "It leaves partially created resources in place for manual cleanup",
      "It converts the stack into a read-only snapshot for later review",
      "It migrates the stack to another Region and retries the deployment",
      "It rolls the stack back to the previous state automatically"
    ],
    "a": 3,
    "e": "CloudFormation treats a stack as one unit, so a failed create or update triggers an automatic rollback that removes or restores the affected resources. Orphaned half-built resources are precisely the problem that managing infrastructure as a stack is meant to eliminate."
  },
  {
    "t": "auto-scaling",
    "x": "A ticketing website sees traffic climb sharply for about two hours after each concert announcement and drop back afterward. The operations lead wants capacity to follow that curve with nobody watching a dashboard. What should be configured?",
    "o": [
      "A larger instance type provisioned to handle the highest expected peak",
      "A second Region running an identical copy of the fleet at all times",
      "An Auto Scaling group with a target tracking policy on CPU utilization",
      "A scheduled nightly restart of the existing instances in the fleet"
    ],
    "a": 2,
    "e": "Target tracking holds a chosen metric such as average CPU near a set value, adding and removing instances as demand moves. Permanently oversizing for the peak wastes money for the other twenty-two hours of the day, and restarting instances does nothing about capacity."
  },
  {
    "t": "auto-scaling",
    "x": "A monitoring alert shows that one member of a fleet has stopped passing its health checks while the rest keep serving traffic normally. What action does the Auto Scaling group take?",
    "o": [
      "It reboots the failing instance and keeps it in service regardless",
      "It terminates the failing instance and launches a replacement",
      "It pauses all scaling activity until an operator investigates",
      "It moves the failing instance into a separate quarantine subnet"
    ],
    "a": 1,
    "e": "Auto Scaling replaces instances that fail health checks: the unhealthy one is terminated and a fresh instance is launched to hold the group at its desired count. It never waits for a human, and it has no repair or quarantine function."
  },
  {
    "t": "elastic-beanstalk",
    "x": "A university department has a Java application packaged as a WAR file and nobody on staff with infrastructure background. It wants AWS to create the servers, load balancer, and scaling rules straight from that uploaded package. Which service does this?",
    "o": [
      "AWS CloudFormation",
      "Amazon Lightsail",
      "AWS Elastic Beanstalk",
      "AWS Fargate"
    ],
    "a": 2,
    "e": "Elastic Beanstalk accepts an application package and builds the compute, load balancing, and scaling behind it, which suits people who do not want to design infrastructure. CloudFormation would still require the department to describe every resource itself in a template."
  },
  {
    "t": "elastic-beanstalk",
    "x": "A finance team reviewing an invoice asks what portion of an Elastic Beanstalk environment's charge is the fee for Beanstalk itself. What is the correct answer?",
    "o": [
      "A flat monthly platform fee applies in addition to resource charges",
      "A percentage surcharge is added to every underlying resource charge",
      "An hourly orchestration fee applies whenever an environment is running",
      "Nothing, because charges cover only the resources the environment uses"
    ],
    "a": 3,
    "e": "Elastic Beanstalk carries no additional charge of its own; customers pay only for the EC2 instances, load balancers, and storage the environment provisions. The other choices describe fee structures that this service simply does not have."
  },
  {
    "t": "lightsail",
    "x": "A neighborhood bakery wants a simple online store on a preconfigured stack, billed at a flat monthly rate it can budget for, and set up through a simplified interface instead of the full AWS console. Which offering targets this customer?",
    "o": [
      "Amazon EC2",
      "Amazon Lightsail",
      "AWS Elastic Beanstalk",
      "Amazon WorkSpaces"
    ],
    "a": 1,
    "e": "Lightsail bundles compute, storage, and data transfer into fixed-price plans behind a simplified console, which fits a small business that wants a predictable bill. EC2 prices each component separately and exposes far more configuration than this customer needs to see."
  },
  {
    "t": "lightsail",
    "x": "A consultant advises two clients: one runs a low-traffic company blog, the other runs a fluctuating analytics platform spread over several Availability Zones. Which statements about Amazon Lightsail apply here? (Select TWO.)",
    "o": [
      "Lightsail is the stronger fit for the analytics platform's variable architecture",
      "Lightsail suits the blog because its plans bundle compute, storage, and transfer",
      "Lightsail requires a three-year commitment before any instance can be launched",
      "Lightsail instances can only run container images, never a full operating system",
      "Lightsail plans carry a fixed monthly price rather than per-component billing"
    ],
    "a": 1,
    "as": [
      1,
      4
    ],
    "e": "Lightsail is built for small, predictable workloads such as a company blog, and its defining trait is a bundled fixed monthly plan. A fluctuating analytics platform spanning multiple Availability Zones belongs on EC2 and related services, where each component scales and is priced on its own."
  },
  {
    "t": "windows-on-aws",
    "x": "A manufacturer runs a .NET application against SQL Server and wants both moved to AWS without changing the operating system or negotiating separate Windows licensing. What is the usual approach?",
    "o": [
      "Rewrite the application for Linux before any migration can begin",
      "Run the application only on AWS Fargate with a Windows base image",
      "Launch Windows EC2 instances with licensing included in the hourly rate",
      "Host the workload on Amazon Lightsail, which is Windows only"
    ],
    "a": 2,
    "e": "AWS offers Windows Server EC2 instances whose license cost is folded into the hourly rate, so the application moves as-is. Rewriting for Linux is an optional modernization decision rather than a prerequisite, and Lightsail is not a Windows-only service."
  },
  {
    "t": "windows-on-aws",
    "x": "An IT group must give 300 remote staff a managed Windows desktop reachable from home laptops and thin clients, with no physical PCs to ship or track. Which AWS service delivers that?",
    "o": [
      "Amazon AppStream 2.0",
      "Amazon EC2 Windows instances",
      "AWS Directory Service",
      "Amazon WorkSpaces"
    ],
    "a": 3,
    "e": "Amazon WorkSpaces provides persistent managed Windows desktops streamed to any supported client device. AppStream 2.0 streams individual applications rather than a whole desktop, and Directory Service only supplies the identity layer that such desktops authenticate against."
  },
  {
    "t": "lambda",
    "x": "A charity's donation page calls a small function to validate postal addresses. Volumes are unpredictable, and the trustees refuse to pay for idle servers between gifts. Which billing behavior makes Lambda attractive here?",
    "o": [
      "Charges are fixed per month regardless of invocation count",
      "Charges accrue only while function code is executing",
      "Charges begin when the function is deployed and run continuously",
      "Charges depend on the number of instances reserved in advance"
    ],
    "a": 1,
    "e": "Lambda bills on the number of requests and the duration each invocation runs, so a function that nobody calls costs nothing. Simply deploying a function accrues no charge until it is invoked, and that is what separates the model from keeping servers running."
  },
  {
    "t": "lambda",
    "x": "A logistics firm plans a REST endpoint backed by serverless business logic and needs a managed front door that handles request routing, throttling, and authorization before the code runs. Which service completes that pairing?",
    "o": [
      "Elastic Load Balancing",
      "AWS Direct Connect",
      "Amazon API Gateway",
      "Amazon Route 53"
    ],
    "a": 2,
    "e": "API Gateway is the managed entry point for serverless APIs, applying routing, throttling, and authorization before invoking the function behind it. Route 53 resolves domain names but performs none of that per-request control."
  },
  {
    "t": "lambda",
    "x": "An engineering manager is sorting jobs into those worth moving to Lambda and those better left on instances. Which workload traits point toward Lambda? (Select TWO.)",
    "o": [
      "A process that must run for eight uninterrupted hours per execution",
      "Software licensed per physical socket on dedicated hardware",
      "Short bursts of processing triggered by events such as file uploads",
      "A legacy application that requires a persistent local disk between runs",
      "Traffic that is intermittent and hard to forecast from day to day"
    ],
    "a": 2,
    "as": [
      2,
      4
    ],
    "e": "Lambda fits event-driven bursts and unpredictable traffic because it scales per request and bills only for execution time. An eight-hour single execution exceeds the function timeout, and socket-licensed or disk-dependent software needs long-lived instances instead."
  },
  {
    "t": "s3-storage-classes",
    "x": "A research group uploads sensor readings whose access pattern nobody can predict: some files get read daily for months, others are never opened again. The group wants AWS to shift each object between frequent and infrequent tiers on its own. Which storage class fits?",
    "o": [
      "S3 One Zone-Infrequent Access",
      "S3 Glacier Deep Archive",
      "S3 Standard",
      "S3 Intelligent-Tiering"
    ],
    "a": 3,
    "e": "Intelligent-Tiering monitors each object and moves it between access tiers automatically, which is the whole point when the pattern is unknown. S3 Standard never tiers on its own, and Deep Archive would make the frequently read files slow and costly to retrieve."
  },
  {
    "t": "s3-storage-classes",
    "x": "A studio keeps rendering caches that are read a few times a month and can be regenerated from source if they are ever lost. Which class costs least while still returning objects in milliseconds?",
    "o": [
      "S3 Standard-Infrequent Access",
      "S3 Glacier Instant Retrieval",
      "S3 One Zone-Infrequent Access",
      "S3 Standard"
    ],
    "a": 2,
    "e": "One Zone-Infrequent Access stores data in a single Availability Zone and prices below Standard-IA, which is acceptable when the data can be recreated. Glacier Instant Retrieval targets archives touched roughly once a quarter and adds retrieval charges that monthly reads would keep triggering."
  },
  {
    "t": "s3-storage-classes",
    "x": "Regulators require a bank to keep transaction ledgers for ten years. Anyone asking for one would likely wait up to 48 hours, and most files will never be requested. Which class gives the lowest storage price?",
    "o": [
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Deep Archive",
      "S3 Standard-Infrequent Access",
      "S3 Intelligent-Tiering"
    ],
    "a": 1,
    "e": "Deep Archive is the least expensive S3 class and is meant for long-term retention where retrieval measured in hours is acceptable. Glacier Flexible Retrieval costs more per gigabyte because it exists for archives that must come back within minutes to a few hours."
  },
  {
    "t": "s3-storage-classes",
    "x": "A publisher wants to cut its object storage bill without touching the application code that reads the bucket. Which statements about S3 lifecycle configuration are correct? (Select TWO.)",
    "o": [
      "Rules can transition objects to a cheaper class after a set number of days",
      "Rules move objects between Regions to reduce cross-border latency",
      "Rules apply only to objects uploaded through the AWS Management Console",
      "Rules require an application change to take effect on existing objects",
      "Rules can expire and delete objects once they reach a defined age"
    ],
    "a": 0,
    "as": [
      0,
      4
    ],
    "e": "Lifecycle rules act on object age, either transitioning objects into a lower-cost class or expiring them entirely, with no application change involved. Moving data between Regions is the job of S3 replication, which is a separate feature from lifecycle rules."
  },
  {
    "t": "ebs-efs",
    "x": "A database administrator needs persistent block storage attached to one EC2 instance, plus point-in-time snapshots held durably so a corrupted volume can be restored later. Which service provides that?",
    "o": [
      "Amazon EFS",
      "Amazon S3 Glacier",
      "Amazon EBS",
      "EC2 instance store"
    ],
    "a": 2,
    "e": "EBS supplies persistent block volumes for a single instance and supports snapshots stored durably in Amazon S3 for restore. Instance store is ephemeral and vanishes when the instance stops, so it cannot back a database expected to survive a restart."
  },
  {
    "t": "ebs-efs",
    "x": "An architect is documenting when colleagues should reach for Amazon EFS rather than Amazon EBS. Which characteristics belong to EFS? (Select TWO.)",
    "o": [
      "It attaches to exactly one instance and one Availability Zone",
      "It can be mounted by many Linux instances at the same time",
      "It is billed by provisioning a fixed volume size in advance",
      "Its capacity grows and shrinks as files are added and removed",
      "It stores data as objects addressed through a web request"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "EFS is a shared file system that many Linux instances can mount concurrently, and it expands and contracts elastically with no preprovisioning. Attaching to a single instance in one Availability Zone and being sized ahead of time describes EBS instead."
  },
  {
    "t": "storage-gateway",
    "x": "A film archive keeps writing to on-premises tape drives through backup software the team refuses to replace, but management wants those tapes to land in AWS instead of a vault across town. Which service presents a virtual tape library to that software?",
    "o": [
      "AWS Snowball Edge",
      "AWS Storage Gateway",
      "Amazon FSx",
      "AWS DataSync"
    ],
    "a": 1,
    "e": "The tape gateway in AWS Storage Gateway looks like a virtual tape library to existing backup applications while writing the data into Amazon S3 and Glacier. Snowball moves bulk data as a one-time physical shipment and offers no ongoing tape interface."
  },
  {
    "t": "storage-gateway",
    "x": "Branch offices need fast local reads of shared files while the durable copy lives in Amazon S3, and the arrangement has to be permanent rather than a one-time migration. Which service is designed for that hybrid pattern?",
    "o": [
      "AWS Snowcone",
      "Amazon EBS",
      "AWS Outposts",
      "AWS Storage Gateway"
    ],
    "a": 3,
    "e": "Storage Gateway holds a local cache at each site for fast reads while keeping the authoritative data in AWS, which is exactly what an ongoing hybrid storage link means. Snowcone is a small transfer and edge device, not a permanent bridge into S3."
  },
  {
    "t": "snow-family",
    "x": "A seismic survey company holds 300 terabytes of field data at a remote site whose internet link would need months to push it all. Which approach gets the data into AWS soonest?",
    "o": [
      "Upload the data through an S3 multipart transfer",
      "Establish an AWS Site-to-Site VPN and copy the data",
      "Ship the data on an AWS Snowball device",
      "Replicate the data through Amazon CloudFront"
    ],
    "a": 2,
    "e": "Snowball devices are shipped to the site, loaded over the local network, and returned to AWS, which beats any network path when the circuit cannot carry the volume in reasonable time. A VPN still rides that same slow internet link, so it does not address the constraint."
  },
  {
    "t": "snow-family",
    "x": "A geologist gathers readings from a portable rig in a desert with no dependable connectivity and needs a rugged device light enough to carry that can also run limited processing on site. Which Snow Family member fits?",
    "o": [
      "AWS Snowball Edge Storage Optimized",
      "AWS Snowcone",
      "AWS Transfer Family",
      "AWS Storage Gateway"
    ],
    "a": 1,
    "e": "Snowcone is the smallest and most portable Snow Family device, rugged enough for field use and able to run edge computing before the data is shipped or synced to AWS. Snowball Edge devices hold far more data but are too large and heavy for one person to carry into the field."
  },
  {
    "t": "rds-aurora",
    "x": "An accounting package requires a Microsoft SQL Server backend with automated backups and patching, and the vendor will not certify any other engine. Which AWS service should host that database?",
    "o": [
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon ElastiCache",
      "Amazon RDS"
    ],
    "a": 3,
    "e": "Amazon RDS runs managed instances of commercial and open-source engines including SQL Server, taking over backups and patching. DynamoDB is a NoSQL key-value store and cannot run a SQL Server workload at all, certified or otherwise."
  },
  {
    "t": "rds-aurora",
    "x": "A payroll database must survive the loss of an entire Availability Zone by promoting a standby copy on its own, with no change to how the application connects. Which RDS feature provides that?",
    "o": [
      "A read replica in another Region",
      "An automated daily snapshot",
      "A Multi-AZ deployment",
      "A larger instance class"
    ],
    "a": 2,
    "e": "Multi-AZ keeps a synchronous standby in a second Availability Zone and fails over to it automatically behind the same endpoint, so connection strings never change. A read replica serves read traffic and requires a manual promotion, which fails the automatic requirement."
  },
  {
    "t": "rds-aurora",
    "x": "Reporting queries are overwhelming the primary database of an online pharmacy, and the team is weighing RDS read replicas. Which statements about read replicas are correct? (Select TWO.)",
    "o": [
      "They offload read-only queries from the primary database instance",
      "They accept write traffic in parallel with the primary instance",
      "They replace the need for backups of the primary database",
      "They can be created in a different Region from the primary",
      "They are billed as a free add-on to the primary instance"
    ],
    "a": 0,
    "as": [
      0,
      3
    ],
    "e": "Read replicas take read-only traffic off the primary and can be placed in another Region for reporting or disaster recovery. They cannot accept writes, and because they track current data rather than preserving history, they are no substitute for backups."
  },
  {
    "t": "dynamodb-nosql",
    "x": "A shopping cart service stores each item under a unique key, never joins tables, and sees traffic swing wildly during promotions. The team wants a database with no servers to size. Which option fits?",
    "o": [
      "Amazon RDS for MySQL",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Neptune"
    ],
    "a": 1,
    "e": "DynamoDB is a serverless key-value store that scales throughput on demand, which suits key-based access with volatile traffic. A relational engine such as RDS for MySQL would still leave the team choosing and managing instance sizes for those swings."
  },
  {
    "t": "dynamodb-nosql",
    "x": "A gaming backend engineer is weighing DynamoDB against a relational engine for leaderboard data. Which statements about DynamoDB are accurate? (Select TWO.)",
    "o": [
      "It executes complex joins across normalized tables like a SQL engine",
      "It stores items as key-value and document structures with no fixed schema",
      "It is fully managed, with no database instances for the team to patch",
      "It requires a provisioned storage volume to be sized before use",
      "It is designed primarily for petabyte-scale analytical reporting"
    ],
    "a": 1,
    "as": [
      1,
      2
    ],
    "e": "DynamoDB holds schemaless key-value and document items and is fully managed, so nothing needs patching. Joins across normalized tables are a relational capability, and petabyte-scale analytical reporting is what Amazon Redshift is built for."
  },
  {
    "t": "redshift-warehousing",
    "x": "A supermarket chain loads nightly point-of-sale extracts into one central repository and wants a columnar engine tuned for scanning billions of rows per query. Which service should the chain deploy?",
    "o": [
      "Amazon RDS for PostgreSQL",
      "Amazon DocumentDB",
      "Amazon Redshift",
      "Amazon ElastiCache"
    ],
    "a": 2,
    "e": "Redshift is a columnar data warehouse built to scan and aggregate very large tables for analytics. RDS for PostgreSQL stores data by row and is optimized for transactions, so the same aggregations would take far longer to return."
  },
  {
    "t": "redshift-warehousing",
    "x": "A telecom analyst must decide where order entry belongs and where quarterly trend analysis belongs. Which distinction correctly separates a data warehouse from an operational database?",
    "o": [
      "A warehouse is optimized for high-volume single-row inserts and updates",
      "A warehouse stores only unstructured files with no schema at all",
      "A warehouse must be refreshed manually before each individual query",
      "A warehouse is optimized for analytical queries over historical data"
    ],
    "a": 3,
    "e": "Data warehouses are tuned for large analytical reads across accumulated history, while operational databases handle frequent small transactions. High-volume single-row writes describe the transactional side of that split, which is where order entry belongs."
  },
  {
    "t": "vpc-subnets",
    "x": "An application server has to download operating system updates from the internet but must never accept a connection started from outside. Where should it sit, and what should carry its outbound traffic?",
    "o": [
      "A public subnet, with an Elastic IP address assigned directly",
      "A private subnet, with outbound traffic through a NAT gateway",
      "A private subnet, with an internet gateway attached to the instance",
      "A public subnet, with a network ACL denying all inbound entries"
    ],
    "a": 1,
    "e": "A private subnet has no route in from the internet, and a NAT gateway lets instances there open outbound connections while inbound attempts still fail. An internet gateway attaches to the VPC and routes for a subnet, so it cannot be bolted onto one instance in a private subnet."
  },
  {
    "t": "vpc-subnets",
    "x": "A network engineer is sketching the boundary of a new virtual network before a single instance is launched. What does a VPC actually give the company?",
    "o": [
      "A physical data center building reserved for one customer's hardware",
      "A managed domain name service for resolving public hostnames",
      "A logically isolated section of the AWS Cloud with its own address range",
      "A dedicated fiber circuit between the company office and AWS"
    ],
    "a": 2,
    "e": "A VPC is a logically isolated network inside AWS where the customer controls the IP address range, subnets, route tables, and gateways. A dedicated fiber circuit describes Direct Connect, which can terminate into a VPC but is a different thing entirely."
  },
  {
    "t": "vpc-subnets",
    "x": "During a security review at a fintech startup, an engineer has to explain how security groups and network ACLs differ. Which statements are correct? (Select TWO.)",
    "o": [
      "A security group can contain explicit deny rules for an IP range",
      "A security group is stateful and is applied at the instance level",
      "A network ACL is evaluated only for traffic leaving the VPC",
      "A network ACL is stateless and is applied at the subnet level",
      "Both are configured once per Region and cannot be changed later"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Security groups attach to instances and automatically permit return traffic, while network ACLs sit at the subnet boundary and evaluate each direction separately. Only network ACLs support explicit deny entries; security groups hold allow rules only."
  },
  {
    "t": "route53-dns",
    "x": "A nonprofit has just bought a domain name and needs something to translate that name into its load balancer address, plus health checks so visitors stop being sent to a failed endpoint. Which service covers both jobs?",
    "o": [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "Elastic Load Balancing",
      "Amazon Route 53"
    ],
    "a": 3,
    "e": "Route 53 is the managed DNS service, and it can run health checks so records stop resolving to an unhealthy target. CloudFront caches content at the edge but does not own the domain's records or perform name resolution for it."
  },
  {
    "t": "route53-dns",
    "x": "A retailer wants a small share of visitors steered to a redesigned site while everyone else keeps reaching the current one, controlled purely at the name resolution layer. Which routing policy achieves that?",
    "o": [
      "Failover routing",
      "Geolocation routing",
      "Weighted routing",
      "Simple routing"
    ],
    "a": 2,
    "e": "Weighted routing assigns a proportion of queries to each record, which is how a gradual rollout is steered through DNS. Failover routing switches only when a primary endpoint becomes unhealthy, so it cannot split traffic by percentage."
  },
  {
    "t": "cloudfront-cdn",
    "x": "A university streams recorded lectures to students on three continents. Bandwidth charges at the origin bucket keep climbing and playback stalls for distant viewers. What does adding a content delivery network accomplish?",
    "o": [
      "The origin bucket is replicated into every Region automatically",
      "Cached copies are served from edge locations, cutting origin requests",
      "Video files are compressed permanently to a smaller size at rest",
      "Student devices are given a private link into the AWS network"
    ],
    "a": 1,
    "e": "CloudFront caches objects at edge locations, so repeat requests are answered close to the viewer instead of travelling back to the origin, which lowers both latency and origin traffic. It neither replicates the bucket into every Region nor alters the stored files."
  },
  {
    "t": "cloudfront-cdn",
    "x": "An online magazine is planning a CloudFront distribution in front of static assets and an API. Which capabilities does CloudFront provide? (Select TWO.)",
    "o": [
      "Caching of content at edge locations near viewers",
      "Automatic conversion of images into a different file format",
      "Permanent primary storage for the origin's object data",
      "Delivery over HTTPS using a certificate for the site's domain",
      "Relational query processing for the magazine's article database"
    ],
    "a": 0,
    "as": [
      0,
      3
    ],
    "e": "CloudFront caches at edge locations and terminates HTTPS using a certificate for the customer's domain. It never becomes the system of record: the origin, such as an S3 bucket, still holds the authoritative copy of every object."
  },
  {
    "t": "direct-connect-vpn",
    "x": "A brokerage firm needs consistent, predictable network performance between its trading floor and AWS and will not accept the variability of routing over the public internet. Which connectivity option should it order?",
    "o": [
      "AWS Site-to-Site VPN",
      "AWS Transit Gateway",
      "AWS Direct Connect",
      "AWS Client VPN"
    ],
    "a": 2,
    "e": "Direct Connect provisions a dedicated private circuit into AWS, which is what delivers steady throughput and latency. A Site-to-Site VPN is encrypted but still travels the public internet, so its performance moves with internet conditions."
  },
  {
    "t": "direct-connect-vpn",
    "x": "A regional charity has to link its small office network to a VPC within a few days on a modest budget. Encryption in transit is mandatory, but bandwidth needs are light. What should it set up?",
    "o": [
      "A dedicated 10 Gbps Direct Connect port at a colocation facility",
      "An AWS Site-to-Site VPN over the existing internet circuit",
      "An AWS Outposts rack installed in the charity's office",
      "A public S3 bucket used to exchange files between sites"
    ],
    "a": 1,
    "e": "A Site-to-Site VPN builds an encrypted tunnel over the office's existing internet connection and can be running the same day at low cost. Ordering a Direct Connect port involves a physical cross-connect with lead times measured in weeks, which the deadline rules out."
  },
  {
    "t": "load-balancing",
    "x": "A web tier runs on several instances across two Availability Zones, and the team wants incoming HTTPS requests spread over the healthy ones with routing decided by URL path. Which load balancer type fits?",
    "o": [
      "Network Load Balancer",
      "Gateway Load Balancer",
      "Classic Load Balancer",
      "Application Load Balancer"
    ],
    "a": 3,
    "e": "An Application Load Balancer works at the HTTP layer, so it can route on path or host header. A Network Load Balancer operates at the connection layer and has no visibility into the URL at all."
  },
  {
    "t": "load-balancing",
    "x": "A multiplayer voice service handles millions of TCP connections per second, demands the lowest achievable latency, and needs a static IP address per Availability Zone. Which load balancer should be chosen?",
    "o": [
      "Application Load Balancer",
      "Gateway Load Balancer",
      "Network Load Balancer",
      "Amazon CloudFront"
    ],
    "a": 2,
    "e": "The Network Load Balancer runs at layer 4, sustains extreme connection rates with very low latency, and supports a static IP per Availability Zone. An Application Load Balancer parses HTTP, adding overhead this workload cannot absorb."
  },
  {
    "t": "load-balancing",
    "x": "An operations lead is describing what Elastic Load Balancing contributes to a three-tier retail application. Which benefits are accurate? (Select TWO.)",
    "o": [
      "It stores user session data so instances can be replaced freely",
      "It stops sending requests to targets that fail health checks",
      "It spreads incoming traffic across targets in multiple Availability Zones",
      "It reduces the per-hour price of the instances behind it",
      "It encrypts the application's data at rest in attached volumes"
    ],
    "a": 1,
    "as": [
      1,
      2
    ],
    "e": "Load balancers distribute requests over healthy targets in more than one Availability Zone and pull failing targets out of rotation. They hold no session state, which is why that data belongs in a shared store such as ElastiCache or DynamoDB."
  },
  {
    "t": "sqs-sns",
    "x": "When an insurance claim is approved, four independent downstream systems each need their own copy of that notification at the same moment. Which messaging pattern and service deliver it?",
    "o": [
      "Point-to-point queuing with Amazon SQS",
      "Publish and subscribe with Amazon SNS",
      "Workflow orchestration with AWS Step Functions",
      "Stream ingestion with Amazon Kinesis Data Firehose"
    ],
    "a": 1,
    "e": "SNS fans a published message out to every subscriber, so each downstream system receives its own copy. An SQS queue hands a message to a single consumer, which would leave the four systems competing for the same message."
  },
  {
    "t": "sqs-sns",
    "x": "A video pipeline's upload component briefly produces work faster than the encoder can consume it, and no job may be lost during those bursts. Which characteristic of Amazon SQS addresses that?",
    "o": [
      "Messages are discarded if no consumer is listening at that moment",
      "Messages are pushed simultaneously to every registered endpoint",
      "Messages are converted into a state machine with retry logic",
      "Messages are stored durably until a consumer processes and deletes them"
    ],
    "a": 3,
    "e": "SQS retains messages durably until a consumer receives and deletes them, letting a slower downstream component catch up without dropping work. Pushing to every registered endpoint describes SNS, and state machines with retries describe Step Functions."
  },
  {
    "t": "sqs-sns",
    "x": "A brokerage is breaking apart a tightly coupled trade-settlement monolith and wants asynchronous communication between the new pieces. Which outcomes does putting a message queue between them provide? (Select TWO.)",
    "o": [
      "A failure in the consumer does not immediately stop the producer",
      "Message delivery becomes synchronous and blocking by design",
      "The components must be deployed together in one release",
      "Total compute cost is fixed regardless of message volume",
      "Each component can scale independently of the others"
    ],
    "a": 0,
    "as": [
      0,
      4
    ],
    "e": "A queue buffers work so a failing or slow consumer does not halt the producer, and each side scales on its own schedule. Decoupling makes communication asynchronous rather than blocking, which is the opposite of the synchronous option listed."
  },
  {
    "t": "eventbridge-stepfunctions",
    "x": "A bank's loan approval path involves sequential decisions, pauses for human sign-off, and branches that depend on what the previous step returned. Leadership wants that logic visualized and maintained outside the function code. Which service should coordinate it?",
    "o": [
      "Amazon SQS",
      "AWS Batch",
      "AWS Step Functions",
      "Amazon EventBridge"
    ],
    "a": 2,
    "e": "Step Functions expresses multi-step logic as a visual state machine with branching, waits, and error handling held outside the application code. EventBridge routes individual events to targets but keeps no state for a long-running process."
  },
  {
    "t": "eventbridge-stepfunctions",
    "x": "An operations team wants a small cleanup routine to fire automatically at 02:00 daily, with no always-on server left holding a cron entry. Which capability provides that trigger?",
    "o": [
      "An SNS topic subscription",
      "An EventBridge scheduled rule",
      "An SQS delay queue",
      "A CloudFront cache invalidation"
    ],
    "a": 1,
    "e": "EventBridge scheduled rules fire on a cron or rate expression and invoke a target such as a Lambda function, removing the need for a scheduling host. An SQS delay queue postpones an individual message but cannot originate a recurring daily trigger."
  },
  {
    "t": "ecs-eks-fargate",
    "x": "A startup packages its services as Docker images and wants AWS to run them without anyone choosing, patching, or scaling host machines. Which launch type satisfies that?",
    "o": [
      "The EC2 launch type",
      "Amazon EC2 Auto Scaling",
      "AWS Elastic Beanstalk",
      "AWS Fargate"
    ],
    "a": 3,
    "e": "Fargate is the serverless launch type for ECS and EKS: AWS provisions and maintains the compute, so the team only defines the task. The EC2 launch type leaves the cluster instances under the customer's care, which is what the startup wants to avoid."
  },
  {
    "t": "ecs-eks-fargate",
    "x": "An architect at a healthcare vendor is choosing between Amazon ECS and Amazon EKS for a new container platform. Which statements are correct? (Select TWO.)",
    "o": [
      "Only ECS can run containers, while EKS handles virtual machines",
      "EKS runs upstream Kubernetes, so existing manifests keep working",
      "ECS is an AWS-native orchestrator with its own task definition format",
      "Both services require the customer to manage the control plane",
      "Neither service can use Fargate as its compute engine"
    ],
    "a": 1,
    "as": [
      1,
      2
    ],
    "e": "EKS is managed upstream Kubernetes, so existing manifests and kubectl tooling carry over, while ECS is AWS's own orchestrator built around task definitions. AWS operates the control plane for both, and either one can place tasks on Fargate."
  },
  {
    "t": "free-tier",
    "x": "A student opens a personal AWS account and wants to run a small Linux server for study without paying anything during the first year. Which Free Tier category covers that usage?",
    "o": [
      "An always-free offer with no expiration date",
      "A short-term trial that begins when a service is first used",
      "A 12-month free offer available to new accounts",
      "A credit applied to the account after the first invoice"
    ],
    "a": 2,
    "e": "The monthly allowance of small Linux EC2 instance hours falls under the 12-month offers, which start the day a new account is created. Always-free offers such as a monthly Lambda request allowance never expire and form a separate category."
  },
  {
    "t": "free-tier",
    "x": "A hobbyist worries about a surprise invoice after leaving a resource running past its allowance. What happens once a monthly Free Tier limit is exceeded?",
    "o": [
      "The account is suspended until the next billing month begins",
      "The resources are deleted automatically to prevent charges",
      "The overage is waived for accounts less than 12 months old",
      "Standard pay-as-you-go rates apply to the additional usage"
    ],
    "a": 3,
    "e": "Passing a Free Tier allowance simply moves the extra usage onto normal on-demand pricing; nothing is suspended or deleted on the customer's behalf. Because AWS keeps the resource running, a budget or billing alarm is the practical way to catch this early."
  },
  {
    "t": "free-tier",
    "x": "A team evaluating a paid AWS service is given free usage for a limited window that starts the moment the service is first activated. Which Free Tier category is that?",
    "o": [
      "12-month offers",
      "Trials",
      "Always free",
      "Volume discounts"
    ],
    "a": 1,
    "e": "Short-term trials begin when a particular service is first activated and run for a fixed period, unlike 12-month offers that are tied to when the account was opened. Volume discounts are a pricing mechanism and are not part of the Free Tier at all."
  },
  {
    "t": "free-tier",
    "x": "A bootcamp instructor asks the class which Free Tier example keeps its allowance no matter how old the account is. Which one is correct?",
    "o": [
      "750 monthly hours of a small EC2 instance",
      "5 GB of Amazon S3 standard storage for new accounts",
      "A monthly allowance of AWS Lambda requests",
      "750 monthly hours of an RDS database instance"
    ],
    "a": 2,
    "e": "The Lambda monthly request and compute allowance is an always-free offer with no expiration date. EC2 hours, S3 storage, and RDS hours in the Free Tier are 12-month offers that stop a year after the account is opened."
  },
  {
    "t": "savings-plans-reserved",
    "x": "A publisher wants a discount on a specific instance family in one Availability Zone and also wants assurance that the capacity will actually be there at launch time. Which purchase provides that guarantee?",
    "o": [
      "A regional Reserved Instance",
      "A Compute Savings Plan",
      "A Spot Instance request",
      "A zonal Reserved Instance"
    ],
    "a": 3,
    "e": "Reserved Instances scoped to a specific Availability Zone include a capacity reservation alongside the billing discount. Regional Reserved Instances and Savings Plans lower the rate but make no promise that capacity will be free in a particular zone."
  },
  {
    "t": "savings-plans-reserved",
    "x": "A finance director asks how paying a three-year commitment entirely in advance compares with spreading it out. What is the general relationship between payment option and discount?",
    "o": [
      "Payment timing has no effect on the discount",
      "Paying more upfront yields a larger discount",
      "Paying nothing upfront yields the largest discount",
      "Discounts apply only to monthly payment plans"
    ],
    "a": 1,
    "e": "AWS offers All Upfront, Partial Upfront, and No Upfront terms, and the discount grows as more of the commitment is paid in advance. No Upfront still beats on-demand pricing, but it produces the smallest of the three reductions."
  },
  {
    "t": "savings-plans-reserved",
    "x": "An analytics group will stay on the same instance family in one Region for the coming year and wants the deepest commitment-based discount available for that fixed choice. Which option should it buy?",
    "o": [
      "A Compute Savings Plan",
      "An On-Demand Capacity Reservation",
      "An EC2 Instance Savings Plan",
      "A Spot Fleet request"
    ],
    "a": 2,
    "e": "EC2 Instance Savings Plans lock the buyer to one instance family in one Region and return the largest discount of the Savings Plan types. Compute Savings Plans stay flexible across families, Regions, Lambda, and Fargate, and that flexibility comes at a smaller discount."
  },
  {
    "t": "savings-plans-reserved",
    "x": "A cloud economics team is briefing engineers on commitment-based pricing ahead of the annual budget cycle. Which statements are accurate? (Select TWO.)",
    "o": [
      "Savings Plans commit to an hourly dollar amount for one or three years",
      "Savings Plans guarantee capacity in a chosen Availability Zone",
      "Standard Reserved Instances can be sold in the Reserved Instance Marketplace",
      "Reserved Instances can be cancelled at any time for a full refund",
      "Commitment discounts apply only to Amazon S3 storage charges"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Savings Plans are a commitment to a steady hourly spend over a one-year or three-year term, and Standard Reserved Instances can be resold through the Reserved Instance Marketplace. Savings Plans reserve no capacity, and a commitment cannot be cancelled for a refund."
  },
  {
    "t": "cost-explorer-budgets",
    "x": "An engineering manager must learn within hours if a runaway test harness pushes a department past its agreed spending limit. Which capability raises that alert?",
    "o": [
      "A Cost Explorer saved report",
      "An AWS Budgets threshold with a notification",
      "A Cost and Usage Report delivery",
      "An AWS Pricing Calculator estimate"
    ],
    "a": 1,
    "e": "AWS Budgets watches spend against a defined limit and sends a notification when actual or forecast usage crosses a threshold. Cost Explorer is an analysis console someone has to open, so it cannot proactively notify anyone."
  },
  {
    "t": "cost-explorer-budgets",
    "x": "A department head wants to see whether last month's Reserved Instance purchases were actually used and where rightsizing could trim spend. Which tool surfaces those recommendations?",
    "o": [
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Cost Anomaly Detection",
      "AWS Cost Explorer"
    ],
    "a": 3,
    "e": "Cost Explorer includes reservation utilization and coverage reports plus rightsizing recommendations derived from past usage. Budgets only compares spend against a limit and raises alerts; it performs no efficiency analysis."
  },
  {
    "t": "cost-explorer-budgets",
    "x": "Overnight, an unfamiliar service starts accruing charges far outside an account's normal pattern, and nobody had set a threshold in advance. Which capability uses machine learning to flag that unusual spend?",
    "o": [
      "AWS Budgets",
      "AWS Cost and Usage Report",
      "AWS Cost Anomaly Detection",
      "AWS Trusted Advisor"
    ],
    "a": 2,
    "e": "Cost Anomaly Detection learns an account's normal spending shape and raises an alert when charges deviate from it, which works even though nobody defined a limit. Budgets can only compare spend against a threshold that someone configured beforehand."
  },
  {
    "t": "cost-explorer-budgets",
    "x": "Ahead of a quarterly review, a controller at a manufacturing firm is deciding which AWS cost tool answers which question. Which pairings are correct? (Select TWO.)",
    "o": [
      "AWS Pricing Calculator for reporting actual charges already incurred",
      "Cost Explorer for visualizing spending trends over time",
      "Cost and Usage Report for setting a monthly spending cap",
      "AWS Budgets for alerting when spend passes a defined limit",
      "Trusted Advisor for producing the monthly invoice"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Cost Explorer visualizes historical and forecast spend, while Budgets exists specifically to alert on thresholds. The Pricing Calculator estimates costs before anything is deployed, so it never reports charges that have already been billed."
  },
  {
    "t": "consolidated-billing",
    "x": "Four subsidiaries each keep roughly 30 TB in Amazon S3 under separate member accounts of one organization. How does aggregating their usage affect the rate they pay per gigabyte?",
    "o": [
      "Each account is priced independently at its own tier",
      "Storage charges are split evenly among all member accounts",
      "Combined usage can reach tiered pricing thresholds sooner",
      "The management account absorbs all storage charges as a credit"
    ],
    "a": 2,
    "e": "Consolidated billing adds up usage across member accounts, so the organization reaches volume pricing tiers faster than any single account would on its own. Pricing each account independently is what happens without an organization, and that is the saving being given up."
  },
  {
    "t": "consolidated-billing",
    "x": "A group finance office wants one invoice covering every subsidiary while still being able to see which subsidiary generated each charge. Which arrangement delivers both?",
    "o": [
      "A single shared account used by all subsidiaries",
      "Consolidated billing with per-account cost breakdowns",
      "Separate payment methods registered in each account",
      "A Cost and Usage Report replacing the monthly invoice"
    ],
    "a": 1,
    "e": "Consolidated billing produces one bill for the organization while preserving per-account detail so charges can still be attributed. Merging every subsidiary into one shared account would blend the usage together and destroy exactly that visibility."
  },
  {
    "t": "consolidated-billing",
    "x": "A holding company is told that placing its five existing AWS accounts under one organization will not change how engineers work day to day. Which statement about that move is accurate?",
    "o": [
      "All resources are merged into the management account",
      "Member accounts must share one set of IAM users",
      "Existing workloads must be redeployed into the organization",
      "Each account keeps its own resources and access controls"
    ],
    "a": 3,
    "e": "Joining an organization changes how accounts are billed and governed, not where resources live: every member account keeps its own resources, IAM identities, and isolation boundary. Nothing is merged or redeployed when consolidated billing is enabled."
  },
  {
    "t": "trusted-advisor",
    "x": "An operations review needs to find idle load balancers and underused EC2 instances that are still being billed each month. Which service scans the account and recommends those savings?",
    "o": [
      "AWS Config",
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS Systems Manager"
    ],
    "a": 1,
    "e": "Trusted Advisor inspects an account and reports cost optimization findings such as idle load balancers and low-utilization instances. AWS Config records configuration changes for compliance purposes and makes no spending recommendations."
  },
  {
    "t": "trusted-advisor",
    "x": "A team is approaching the maximum number of VPCs permitted in a Region and wants warning before new deployments start failing. Which Trusted Advisor category covers that?",
    "o": [
      "Performance",
      "Security",
      "Fault tolerance",
      "Service limits"
    ],
    "a": 3,
    "e": "The service limits category compares current usage against account quotas and warns as a threshold is approached. Fault tolerance covers redundancy findings such as missing backups or single-zone deployments rather than quota headroom."
  },
  {
    "t": "trusted-advisor",
    "x": "A newly hired security analyst opens Trusted Advisor on an account that carries only Basic Support and expects the full check list. What is available at that level?",
    "o": [
      "Every check across all five categories",
      "No checks at all until a support plan is purchased",
      "A limited set of core checks, including some security items",
      "Only checks in the cost optimization category"
    ],
    "a": 2,
    "e": "Basic and Developer Support include a core subset of Trusted Advisor checks, notably several security checks and the service limit checks. Unlocking the complete set across all five categories requires Business Support or higher."
  },
  {
    "t": "trusted-advisor",
    "x": "An auditor at a legal firm asks which areas of an AWS account Trusted Advisor evaluates. Which categories does it report on? (Select TWO.)",
    "o": [
      "Employee training",
      "Security",
      "Vendor contract terms",
      "Fault tolerance",
      "Physical data center access"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Trusted Advisor reports across five categories: cost optimization, performance, security, fault tolerance, and service limits. Staff training, vendor contracts, and physical facility access are not things it can inspect inside an AWS account."
  }
],
}
