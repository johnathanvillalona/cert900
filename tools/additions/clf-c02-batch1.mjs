// clf-c02 initial bank (authored batch 1).
export default {
  examId: "clf-c02",
  questions: [
  {
    "t": "cloud-concepts",
    "x": "A retail company currently buys servers every three years and pays for them up front. After moving its workloads to AWS, how does the company's cost structure change?",
    "o": [
      "Compute costs become a fixed annual fee that is set at migration",
      "Hardware costs shift into per-user software licensing charges",
      "Large capital purchases are replaced by operational expenses that vary with usage",
      "Variable operating costs are consolidated into a single upfront capital payment"
    ],
    "a": 2,
    "e": "Moving to AWS trades capital expense for variable operational expense: the company pays for what it uses instead of buying hardware years in advance. Costs are not fixed annually and do not become an upfront payment; they track actual consumption."
  },
  {
    "t": "cloud-concepts",
    "x": "Which statement best describes cloud computing?",
    "o": [
      "Leasing dedicated hardware in a colocation facility under a long-term contract",
      "On-demand delivery of IT resources over the internet with pay-as-you-go pricing",
      "Running virtual machines on servers a company owns in its local data center",
      "Contracting a service provider to develop and maintain custom applications"
    ],
    "a": 1,
    "e": "Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing. Colocation leases and company-owned virtualization still tie the business to fixed hardware, which is exactly what the cloud model removes."
  },
  {
    "t": "cloud-concepts",
    "x": "A hospital keeps its patient records system in its own data center to satisfy internal policy, while running its public website and analytics workloads on AWS. The two environments are connected through AWS Direct Connect. Which cloud deployment model is this?",
    "o": [
      "Private cloud",
      "Multicloud",
      "Cloud-native (all-in cloud)",
      "Hybrid cloud"
    ],
    "a": 3,
    "e": "Connecting on-premises infrastructure to workloads running on AWS is a hybrid deployment. Multicloud means using more than one cloud provider, and a private cloud would keep everything inside the hospital's own facilities."
  },
  {
    "t": "cloud-concepts",
    "x": "A solutions architect is comparing the total cost of ownership (TCO) of an on-premises data center with AWS. Which cost category disappears as a separate expense after moving to AWS?",
    "o": [
      "Compute capacity for the application servers",
      "Power, cooling, and physical facility space",
      "Storage consumed by database backups",
      "Data transfer between geographic locations"
    ],
    "a": 1,
    "e": "Facility costs such as power, cooling, and rack space are absorbed into AWS service pricing, so customers stop paying for them directly. Compute, storage, and data transfer remain visible usage-based line items on the AWS bill."
  },
  {
    "t": "cloud-concepts",
    "x": "A two-person startup wants to run a relational database but has no time for patching, backups, or failover setup. Which aspect of the AWS value proposition addresses this need most directly?",
    "o": [
      "Reserved pricing that lowers the hourly cost of database instances",
      "Global infrastructure that places read replicas near end users",
      "Managed services that shift routine maintenance work to AWS",
      "Consolidated billing that combines charges across linked accounts"
    ],
    "a": 2,
    "e": "Managed services such as Amazon RDS handle patching, backups, and failover so a small team can focus on its application. Pricing models and billing features reduce cost or administrative overhead, but they do not remove operational tasks."
  },
  {
    "t": "cloud-concepts",
    "x": "A CFO is reviewing how paying for AWS differs from buying capacity for a company data center. Which statements accurately describe AWS pricing? (Select TWO.)",
    "o": [
      "Multi-year contracts must be signed before any resource can be launched",
      "Charges are based on the resources actually consumed",
      "A flat monthly rate is fixed at the time the account is created",
      "Unit costs can be reduced by committing to a consistent amount of usage",
      "Hardware is prepaid and then installed by AWS on the customer's behalf"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "AWS is pay-as-you-go: you are charged for what you consume, and commitment options such as Savings Plans and Reserved Instances lower unit prices for steady usage. No contract, flat rate, or hardware prepayment is required to start using services."
  },
  {
    "t": "cloud-concepts",
    "x": "A company retires its self-hosted email servers and subscribes to a web-based email product that it only configures and uses, with no access to the underlying infrastructure. Which cloud service model is the company adopting?",
    "o": [
      "Infrastructure as a service (IaaS)",
      "Platform as a service (PaaS)",
      "Function as a service (FaaS)",
      "Software as a service (SaaS)"
    ],
    "a": 3,
    "e": "A complete application consumed over the web with no infrastructure management is SaaS. IaaS provides raw compute and storage that you manage yourself, and PaaS provides a managed environment for deploying your own code."
  },
  {
    "t": "benefits-of-cloud",
    "x": "Which capability of the AWS Cloud lets an application automatically add resources during a traffic spike and release them when demand falls?",
    "o": [
      "Durability",
      "High availability",
      "Elasticity",
      "Agility"
    ],
    "a": 2,
    "e": "Elasticity means matching resource supply to demand by scaling out and back in automatically. Agility describes how quickly teams can provision and experiment, and high availability describes staying operational through failures."
  },
  {
    "t": "benefits-of-cloud",
    "x": "A game studio in Ohio wants to serve players in Europe and Asia with low latency and enter new markets quickly. Which capabilities of the AWS global infrastructure support these goals? (Select TWO.)",
    "o": [
      "Caching game content near players at edge locations around the world",
      "Serving all global traffic from one Availability Zone chosen for its central location",
      "Opening a separate AWS account for each country where players live",
      "Launching infrastructure in additional Regions in days rather than months",
      "Relocating the studio's physical servers into AWS facilities in each market"
    ],
    "a": 0,
    "as": [
      0,
      3
    ],
    "e": "Global reach comes from deploying into Regions worldwide on demand and from edge locations that cache content close to users. A single central Availability Zone cannot deliver low latency worldwide, accounts are not tied to countries, and AWS does not host customer-owned servers in its data centers."
  },
  {
    "t": "benefits-of-cloud",
    "x": "An on-premises team must order hardware months before each product launch and usually ends up over-provisioned or short of capacity. What changes when the launch runs on AWS instead?",
    "o": [
      "Peak capacity still has to be purchased ahead of the event at a set size",
      "Capacity estimates become binding once the first resources are launched",
      "Hardware requests are fulfilled by AWS within the usual procurement lead times",
      "Capacity can be provisioned to match live demand and adjusted afterward"
    ],
    "a": 3,
    "e": "One core cloud benefit is that you stop guessing capacity: provision what current demand requires and scale up or down in minutes. There is no procurement lead time and no lock-in to an initial estimate."
  },
  {
    "t": "benefits-of-cloud",
    "x": "An engineering director is listing reasons to build new projects on AWS instead of expanding the company data center. Which statements are accurate? (Select TWO.)",
    "o": [
      "Applications on AWS no longer need to account for individual component failures",
      "Compliance certifications transfer to workloads at migration with no customer effort",
      "Test environments can be created in minutes instead of waiting on procurement",
      "Hosting in the cloud removes the need for ongoing performance monitoring",
      "Demand aggregated across many customers yields lower prices than one company could negotiate"
    ],
    "a": 2,
    "as": [
      2,
      4
    ],
    "e": "Agility (environments in minutes) and economies of scale (lower prices from aggregated demand) are core cloud advantages. Customers still design for failure, monitor performance, and configure their own workloads to meet compliance requirements."
  },
  {
    "t": "benefits-of-cloud",
    "x": "A news site keeps serving readers during the loss of an entire data center because its architecture spans multiple Availability Zones. Which benefit of the AWS Cloud does this illustrate?",
    "o": [
      "Elasticity",
      "High availability",
      "Pay-as-you-go pricing",
      "Agility"
    ],
    "a": 1,
    "e": "Running across multiple Availability Zones keeps an application operational when one location fails, which is high availability. Elasticity concerns scaling with demand, not surviving failures, and agility concerns speed of provisioning and experimentation."
  },
  {
    "t": "benefits-of-cloud",
    "x": "Over several years, a company notices the hourly price of the same instance type has been reduced several times without any action on its side. Which cloud economics principle explains these reductions?",
    "o": [
      "Spot pricing that reflects unused capacity at a given moment",
      "Reserved capacity discounts that are applied by default",
      "Volume discounts driven by the company's own growing usage",
      "Economies of scale from usage aggregated across the AWS customer base"
    ],
    "a": 3,
    "e": "AWS aggregates demand from a very large customer base, which lowers its unit costs, and it has repeatedly passed those savings on as price cuts. Spot and Reserved pricing are models a customer must actively choose, and the reductions do not depend on one company's own volume."
  },
  {
    "t": "digital-transformation",
    "x": "An executive team wants product ideas to reach customers sooner by eliminating the wait for infrastructure approval and setup. Which outcome of cloud adoption addresses this goal?",
    "o": [
      "Greater business agility through on-demand provisioning",
      "Lower spending through longer hardware refresh cycles",
      "Stronger isolation through dedicated physical servers",
      "Simpler audits through a single annual billing statement"
    ],
    "a": 0,
    "e": "Agility is the transformation driver here: teams provision resources on demand and ship experiments in days instead of waiting on procurement cycles. The other options describe cost or infrastructure details that do not shorten time to market."
  },
  {
    "t": "digital-transformation",
    "x": "A company must vacate its data center in 90 days and plans to move 200 virtual machines to AWS with as few changes as possible, deferring modernization until later. Which migration strategy fits this plan?",
    "o": [
      "Refactor",
      "Rehost",
      "Retain",
      "Repurchase"
    ],
    "a": 1,
    "e": "Rehost (lift and shift) moves servers largely as-is, which is the fastest path under a hard deadline. Refactor redesigns applications and takes far longer, repurchase replaces them with different products, and retain would leave them in the data center being vacated."
  },
  {
    "t": "digital-transformation",
    "x": "While migrating, a team moves its application servers to Amazon EC2 without modification but swaps its self-managed MySQL database for Amazon RDS to reduce administration. Which strategy describes the database change?",
    "o": [
      "Replatform",
      "Rehost",
      "Refactor",
      "Relocate"
    ],
    "a": 0,
    "e": "Replatforming ('lift, tinker, and shift') keeps the core architecture but adopts a managed service for part of the stack, such as moving a database to Amazon RDS. A rehost would change nothing about how the database is run, and a refactor would redesign the application itself."
  },
  {
    "t": "digital-transformation",
    "x": "A CIO wants a structured way to evaluate the organization's readiness for cloud adoption across business, people, and governance dimensions before a large migration. Which AWS resource serves this purpose?",
    "o": [
      "AWS Well-Architected Framework",
      "AWS Pricing Calculator",
      "AWS Cloud Adoption Framework (AWS CAF)",
      "AWS Trusted Advisor"
    ],
    "a": 2,
    "e": "The AWS CAF organizes cloud transformation guidance into perspectives spanning business, people, governance, platform, security, and operations. The Well-Architected Framework reviews individual workload architectures already in the cloud, not organizational readiness."
  },
  {
    "t": "digital-transformation",
    "x": "A board is weighing funding for a company-wide move to AWS. Which outcomes are commonly cited drivers of cloud-enabled digital transformation? (Select TWO.)",
    "o": [
      "Lower staff turnover because on-call rotations are handled by AWS",
      "Faster experimentation because new environments carry little upfront cost",
      "Broader access to analytics and machine learning services on demand",
      "Technology budgets that stay identical from one year to the next",
      "Release schedules that AWS sets and enforces for customer teams"
    ],
    "a": 1,
    "as": [
      1,
      2
    ],
    "e": "Cloud adoption drives transformation by making experiments cheap to try and by putting advanced capabilities such as analytics and machine learning within reach on demand. Customers still run their own on-call and release processes, and cloud spending varies with usage rather than staying flat."
  },
  {
    "t": "digital-transformation",
    "x": "A leadership team frames its transformation goal as spending engineering time on features customers see rather than on racking servers and patching operating systems. Which cloud adoption concept matches this goal?",
    "o": [
      "Trading operational expense for capital expense",
      "Consolidating workloads onto dedicated physical hosts",
      "Standardizing on a single Availability Zone to simplify operations",
      "Offloading undifferentiated heavy lifting to AWS"
    ],
    "a": 3,
    "e": "Infrastructure chores that do not set a business apart are undifferentiated heavy lifting, and handing them to AWS frees teams for product work. The expense trade runs the other direction (capital toward operational), and dedicated hosts or a single zone would not reduce maintenance effort."
  },
  {
    "t": "cloud-architecture",
    "x": "A development team wants to limit the impact that a failure in one part of an application has on the other parts. Which design approach supports this goal?",
    "o": [
      "Run every part of the application on one large instance",
      "Keep shared session state in each instance's local memory",
      "Connect the parts through a managed message queue",
      "Reference each part by a fixed private IP address"
    ],
    "a": 2,
    "e": "A queue such as Amazon SQS buffers requests between components, so a slow or failed consumer does not break the producer. Fixed instance references and locally held state tie components together, spreading failures instead of containing them."
  },
  {
    "t": "cloud-architecture",
    "x": "An operations team patches long-running EC2 instances by hand, and server configurations have drifted apart over time. Which cloud design principle addresses this problem?",
    "o": [
      "Resize the instances to larger types so fewer servers need attention",
      "Replace instances from a standard image instead of updating them in place",
      "Reserve instance capacity so the fleet stays the same for a full term",
      "Move session data to a cache so instances restart more quickly"
    ],
    "a": 1,
    "e": "Treating servers as disposable resources means terminating drifted instances and launching fresh ones from a common template such as an AMI, which keeps the fleet consistent. Larger instance types and reserved capacity change sizing and billing, not configuration drift."
  },
  {
    "t": "cloud-architecture",
    "x": "An online retailer sees traffic increase tenfold during flash sales and return to normal within a few hours. Which approach handles this pattern at the lowest cost?",
    "o": [
      "Run enough instances for peak load at all times",
      "Move the application to a larger instance type before each sale",
      "Copy the existing instances into a second Region for each event",
      "Add instances automatically during the spike and remove them afterward"
    ],
    "a": 3,
    "e": "Elastic horizontal scaling with EC2 Auto Scaling matches capacity to demand, so the retailer pays for extra instances only while the sale runs. Provisioning for peak or resizing before each event leaves capacity idle once traffic drops."
  },
  {
    "t": "cloud-architecture",
    "x": "Which statement describes elasticity in the AWS Cloud?",
    "o": [
      "Resources are added and released automatically as demand rises and falls",
      "Workloads continue operating when an individual component fails",
      "New test environments can be provisioned within minutes",
      "Capacity is committed in advance in exchange for lower pricing"
    ],
    "a": 0,
    "e": "Elasticity is the ability to grow and shrink resources with demand, typically through Auto Scaling. Surviving component failure describes high availability, and fast provisioning of new environments describes agility."
  },
  {
    "t": "cloud-architecture",
    "x": "Which AWS services help an architect decouple the components of a distributed application? (Select TWO.)",
    "o": [
      "Amazon EBS",
      "Amazon SQS",
      "AWS Direct Connect",
      "Amazon SNS",
      "Amazon Inspector"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "SQS queues messages between producers and consumers, and SNS fans out notifications to subscribers, so components interact without direct dependencies on each other. EBS provides block storage, Direct Connect provides private network links, and Inspector scans workloads for vulnerabilities."
  },
  {
    "t": "cloud-architecture",
    "x": "A web application runs on EC2 instances behind a load balancer, and users lose their shopping carts whenever scaling activity terminates an instance. What should the architect change?",
    "o": [
      "Enable sticky sessions so each user is routed to the same instance",
      "Increase the instance size so scale-in events happen less often",
      "Store session data in an external cache or database service",
      "Snapshot each instance's volume on a frequent schedule"
    ],
    "a": 2,
    "e": "Keeping instances stateless by moving session data to a shared store such as ElastiCache or DynamoDB lets any instance serve any request, so scale-in no longer discards carts. Sticky sessions still lose the cart when the pinned instance is the one that terminates."
  },
  {
    "t": "well-architected",
    "x": "Which of the following is a pillar of the AWS Well-Architected Framework?",
    "o": [
      "Scalability",
      "Sustainability",
      "Availability",
      "Elasticity"
    ],
    "a": 1,
    "e": "The six pillars are operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. Scalability, availability, and elasticity are cloud benefits and design outcomes rather than named pillars."
  },
  {
    "t": "well-architected",
    "x": "An architecture review finds test servers running around the clock and several instances sized far larger than their workloads need. Which Well-Architected pillar do these findings fall under?",
    "o": [
      "Reliability",
      "Performance efficiency",
      "Security",
      "Cost optimization"
    ],
    "a": 3,
    "e": "Idle resources and oversized instances mean the company is paying for capacity it does not use, which the cost optimization pillar addresses through rightsizing and eliminating waste. Performance efficiency concerns meeting requirements with well-chosen resource types, not reducing spend on unused ones."
  },
  {
    "t": "well-architected",
    "x": "A workload detects failed instances and replaces them without operator involvement, and the team regularly rehearses its recovery procedures. Which pillar do these practices support?",
    "o": [
      "Reliability",
      "Operational excellence",
      "Performance efficiency",
      "Cost optimization"
    ],
    "a": 0,
    "e": "Automatic recovery from failure and testing recovery procedures are design principles of the reliability pillar. Operational excellence covers running and improving workload processes, which makes it tempting, but recovering from disruption is reliability's core concern."
  },
  {
    "t": "well-architected",
    "x": "A team manages its infrastructure as code, deploys small reversible changes frequently, and refines its runbooks after every incident. Which pillar guides these practices?",
    "o": [
      "Security",
      "Reliability",
      "Operational excellence",
      "Sustainability"
    ],
    "a": 2,
    "e": "Performing operations as code, making frequent small reversible changes, and learning from operational events are design principles of operational excellence. Reliability focuses on withstanding and recovering from failures rather than on how daily operations are run and improved."
  },
  {
    "t": "well-architected",
    "x": "A team routinely tries new instance families and adopts managed serverless services so its workload keeps meeting requirements as technology evolves. Which pillar encourages this behavior?",
    "o": [
      "Cost optimization",
      "Performance efficiency",
      "Operational excellence",
      "Reliability"
    ],
    "a": 1,
    "e": "Performance efficiency promotes using computing resources efficiently as demand and technologies change, with design principles such as adopting serverless architectures and experimenting more often. Cost optimization can benefit from these choices but is centered on spending, not on selecting the best-performing resource types."
  },
  {
    "t": "well-architected",
    "x": "Which practices align with the security pillar of the Well-Architected Framework? (Select TWO.)",
    "o": [
      "Grant identities only the permissions their tasks require",
      "Provision standby capacity in a second Availability Zone",
      "Tag resources so spending can be allocated to teams",
      "Encrypt data at rest and while it moves between systems",
      "Deploy infrastructure changes through version-controlled templates"
    ],
    "a": 0,
    "as": [
      0,
      3
    ],
    "e": "Least-privilege access and protecting data in transit and at rest are core security pillar principles. Standby capacity supports reliability, cost allocation tags support cost optimization, and version-controlled deployments support operational excellence."
  },
  {
    "t": "well-architected",
    "x": "A company wants to shrink the environmental footprint of its workloads by retiring idle capacity and choosing more efficient hardware and Regions. Which pillar addresses this goal?",
    "o": [
      "Cost optimization",
      "Operational excellence",
      "Sustainability",
      "Performance efficiency"
    ],
    "a": 2,
    "e": "The sustainability pillar focuses on minimizing the energy and environmental impact of workloads, including maximizing utilization and selecting efficient hardware. Cost savings often follow from the same actions, but the stated goal here is environmental impact rather than the bill."
  },
  {
    "t": "migration-tco",
    "x": "A company must exit its data center within six months and wants to move dozens of applications to AWS with as little modification as possible. Which migration strategy fits this situation?",
    "o": [
      "Rehost",
      "Refactor",
      "Replatform",
      "Repurchase"
    ],
    "a": 0,
    "e": "Rehosting, often called lift and shift, moves applications onto cloud infrastructure largely unchanged, which is the fastest path when a deadline drives the migration. Replatforming and refactoring introduce changes that add time, and repurchasing means switching to a different product entirely."
  },
  {
    "t": "migration-tco",
    "x": "During a migration, a company keeps its application code largely intact but moves its self-managed database onto Amazon RDS to cut administration work. Which strategy describes this move?",
    "o": [
      "Rehost",
      "Refactor",
      "Replatform",
      "Retain"
    ],
    "a": 2,
    "e": "Replatforming, sometimes called lift, tinker, and shift, makes targeted optimizations such as switching to a managed database while leaving the core architecture alone. A rehost would carry the self-managed database over as-is, and a refactor would redesign the application itself."
  },
  {
    "t": "migration-tco",
    "x": "A company rewrites its monolithic order system as event-driven serverless functions to gain capabilities its current architecture cannot support. Which migration strategy is being used?",
    "o": [
      "Replatform",
      "Refactor",
      "Rehost",
      "Relocate"
    ],
    "a": 1,
    "e": "Refactoring, also called re-architecting, changes how the application is built to take advantage of cloud-native features, and it carries the highest effort of the migration strategies. Replatforming makes only targeted optimizations without altering the core architecture."
  },
  {
    "t": "migration-tco",
    "x": "A company is comparing the total cost of ownership of its on-premises data center with running the same workloads on AWS. Which expense categories are typically reduced or eliminated by the move? (Select TWO.)",
    "o": [
      "Charges for data transferred out to the internet",
      "Purchases of physical servers and periodic hardware refreshes",
      "Compute charges that accrue while instances run",
      "Subscription fees for third-party software the company keeps",
      "Power, cooling, and physical space for equipment"
    ],
    "a": 1,
    "as": [
      1,
      4
    ],
    "e": "Moving to AWS converts large capital purchases of hardware and facility costs like power and cooling into pay-as-you-go operating expense. Data transfer and running-instance charges appear on the AWS bill instead, and retained software subscriptions continue either way."
  },
  {
    "t": "migration-tco",
    "x": "An enterprise preparing for a large migration wants guidance on organizing its people, governance, and technical capabilities before the work begins. Which AWS resource provides this guidance?",
    "o": [
      "AWS Well-Architected Framework",
      "AWS Pricing Calculator",
      "AWS Trusted Advisor",
      "AWS Cloud Adoption Framework"
    ],
    "a": 3,
    "e": "The Cloud Adoption Framework organizes readiness across six perspectives, including business, people, and governance, to plan an adoption effort. The Well-Architected Framework evaluates individual workload architectures rather than an organization's overall readiness."
  },
  {
    "t": "migration-tco",
    "x": "Which of the following are perspectives defined by the AWS Cloud Adoption Framework? (Select TWO.)",
    "o": [
      "Governance",
      "Reliability",
      "Platform",
      "Cost optimization",
      "Sustainability"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "The Cloud Adoption Framework's six perspectives are business, people, governance, platform, security, and operations. Reliability, cost optimization, and sustainability are pillars of the Well-Architected Framework, a frequent point of confusion between the two frameworks."
  },
  {
    "t": "shared-responsibility",
    "x": "Under the AWS shared responsibility model, which task remains an AWS responsibility no matter which service a customer uses?",
    "o": [
      "Applying security patches to guest operating systems",
      "Configuring bucket policies that restrict object access",
      "Controlling physical access to data center facilities",
      "Rotating the access keys assigned to IAM users"
    ],
    "a": 2,
    "e": "AWS is responsible for security OF the cloud, which includes the physical facilities, hardware, and global infrastructure. Guest OS patching, bucket policies, and credential rotation all sit with the customer because they involve what the customer runs and configures in the cloud."
  },
  {
    "t": "identity-iam",
    "x": "An application on an Amazon EC2 instance needs to read objects from an S3 bucket. What is the recommended way to grant this access?",
    "o": [
      "Create an IAM user for the application and store its access keys on the instance",
      "Attach an IAM role to the instance so it obtains temporary credentials",
      "Add the instance's public IP address to the bucket policy as a trusted source",
      "Sign the application in through IAM Identity Center with a permission set"
    ],
    "a": 1,
    "e": "An instance role delivers automatically rotated temporary credentials, so nothing long-lived is stored on the server. Placing IAM user access keys on the instance creates a static secret that can leak, and IAM Identity Center is designed for human workforce sign-in rather than application access."
  },
  {
    "t": "governance",
    "x": "A compliance officer needs a copy of AWS's most recent SOC 2 report to share with an external auditor. Where can this document be downloaded on demand?",
    "o": [
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Audit Manager",
      "AWS Artifact"
    ],
    "a": 3,
    "e": "AWS Artifact provides self-service access to AWS's audit artifacts, such as SOC and PCI reports, plus select agreements. AWS Audit Manager helps assess a customer's own environment against frameworks; it does not distribute AWS's third-party attestation reports."
  },
  {
    "t": "shared-responsibility",
    "x": "A vulnerability scan flags an outdated kernel on an Amazon EC2 instance running a company's web application. Under the shared responsibility model, who must remediate this finding?",
    "o": [
      "The customer, because the guest operating system is theirs to maintain",
      "The customer, but only if the instance was launched from a custom AMI",
      "AWS, because the hypervisor and host kernel are part of the managed platform",
      "AWS Support, provided the account subscribes to a Business plan"
    ],
    "a": 0,
    "e": "Anything installed inside an EC2 instance, including the operating system and its kernel, is customer-managed. AWS maintains the hypervisor and physical hosts underneath, and the choice of AMI does not transfer ongoing patch duties to AWS."
  },
  {
    "t": "identity-iam",
    "x": "A team of ten analysts joins a company, and all of them need identical permissions to the same set of AWS resources. Which approach keeps ongoing permission management simplest?",
    "o": [
      "Attach an inline policy to each analyst's IAM user individually",
      "Place the analysts' IAM users in a group that has the required policy attached",
      "Provision one IAM user with the needed policy for the whole team to sign in with",
      "Apply a service control policy to the account that lists the required actions"
    ],
    "a": 1,
    "e": "A group lets one policy attachment govern every member, so permission changes happen in a single place. Inline per-user policies multiply maintenance work, a shared sign-in destroys individual accountability, and SCPs restrict maximum permissions rather than granting any."
  },
  {
    "t": "governance",
    "x": "A security engineer wants a timeline showing how a security group's inbound rules have changed over the past six months. Which service keeps this configuration history?",
    "o": [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Config",
      "Amazon Inspector"
    ],
    "a": 2,
    "e": "AWS Config records point-in-time configuration snapshots of resources and lets you review how a setting looked at any moment in its history. CloudTrail logs the API calls that made the changes, which tells you who acted but does not reconstruct a resource's full configuration state over time."
  },
  {
    "t": "shared-responsibility",
    "x": "A company stores customer records in Amazon S3. Under the shared responsibility model, which tasks belong to the company? (Select TWO.)",
    "o": [
      "Replacing storage drives that fail inside the facility",
      "Writing bucket policies that determine who can read the records",
      "Maintaining power and network connectivity for the storage fleet",
      "Choosing the encryption settings applied to stored objects and managing the keys",
      "Sanitizing decommissioned hardware that previously held the records"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Customers configure access to and protection of their data, which covers bucket policies and encryption choices. The physical layer, including drive replacement, media disposal, and facility power, is secured by AWS as part of security of the cloud."
  },
  {
    "t": "identity-iam",
    "x": "A startup has just created its first AWS account. Which actions follow AWS guidance for protecting the account's root user? (Select TWO.)",
    "o": [
      "Attach a permissions policy to the root user that narrows it to billing tasks",
      "Enable multi-factor authentication for root user sign-ins",
      "Create access keys for the root user so the console password is rarely typed",
      "Register the root user in IAM Identity Center and manage it with a permission set",
      "Reserve root sign-ins for the small set of tasks that specifically require root"
    ],
    "a": 1,
    "as": [
      1,
      4
    ],
    "e": "AWS recommends adding MFA to the root user and using it only for the few operations that demand it, doing daily work with other identities instead. IAM permissions policies cannot limit the root user, root access keys expand rather than shrink the attack surface, and the root user is not managed through IAM Identity Center."
  },
  {
    "t": "governance",
    "x": "A growing company plans to expand from one AWS account to a multi-account environment and wants the setup preconfigured with recommended guardrails from day one. Which service is designed for this?",
    "o": [
      "AWS Service Catalog",
      "AWS CloudFormation",
      "AWS Control Tower",
      "AWS Systems Manager"
    ],
    "a": 2,
    "e": "AWS Control Tower automates the creation of a landing zone: a multi-account environment built on Organizations with preventive and detective controls already applied. CloudFormation and Service Catalog can deploy templated resources, but neither establishes a governed multi-account structure on its own."
  },
  {
    "t": "shared-responsibility",
    "x": "A company migrates a self-managed PostgreSQL database from an Amazon EC2 instance to Amazon RDS. Which responsibility moves from the company to AWS as a result?",
    "o": [
      "Patching the operating system that the database engine runs on",
      "Deciding which users and applications can query the data",
      "Designing table schemas and tuning inefficient queries",
      "Classifying the sensitivity of the records stored in the tables"
    ],
    "a": 0,
    "e": "With RDS, AWS operates the underlying instance and applies OS and engine maintenance, which the company previously handled itself on EC2. Data access decisions, schema design, and data classification stay with the customer under every service model."
  },
  {
    "t": "identity-iam",
    "x": "An enterprise wants its 2,000 employees to reach AWS accounts using the credentials they already have in the corporate directory, without creating a separate IAM user for each person. Which capability supports this?",
    "o": [
      "Cross-account resource sharing with AWS RAM",
      "Service control policies applied to each member account",
      "Identity federation through IAM Identity Center",
      "Multi-factor authentication enforced on each IAM user"
    ],
    "a": 2,
    "e": "Federation lets an external identity provider, such as the corporate directory, authenticate people who then assume roles in AWS, and IAM Identity Center manages this across accounts. SCPs and MFA harden access but still presuppose existing identities, and AWS RAM shares resources rather than sign-ins."
  },
  {
    "t": "governance",
    "x": "A healthcare company must show a regulator that its patient portal hosted on AWS meets industry requirements. Which statement reflects how compliance works in this situation?",
    "o": [
      "Workloads inherit the compliance status of the AWS services they run on, so no separate assessment is needed",
      "AWS attests to the infrastructure, while the company must show its own workload handles data compliantly",
      "The regulator must obtain permission from AWS before it can audit a workload hosted in an AWS Region",
      "Responsibility for meeting the requirements transfers to AWS once the company signs the applicable agreement"
    ],
    "a": 1,
    "e": "Compliance is shared: AWS provides attestations for the cloud infrastructure, and customers remain accountable for configuring and operating their workloads to meet the applicable requirements. Running on certified infrastructure does not by itself make an application compliant."
  },
  {
    "t": "shared-responsibility",
    "x": "A team rebuilds a reporting job as an AWS Lambda function. Which item is still on the team's side of the shared responsibility model?",
    "o": [
      "Patching the language runtime that executes the function",
      "Maintaining the servers that host function invocations",
      "Isolating the function's compute environment from other tenants",
      "Granting the function only the permissions its code needs"
    ],
    "a": 3,
    "e": "Even in serverless designs, customers own their code, its data, and the IAM permissions attached to it. AWS manages the runtime patching, fleet capacity, and tenant isolation that come with operating the Lambda service."
  },
  {
    "t": "identity-iam",
    "x": "An administrator attaches a service control policy to an organizational unit that denies the use of a specific AWS Region. What happens in the member accounts under that OU?",
    "o": [
      "No principal in those accounts can act in that Region, even ones with administrator permissions",
      "IAM users keep their Region access until each account's administrator accepts the policy",
      "Root users of the member accounts are exempt, while other identities lose access to the Region",
      "Existing resources in that Region are removed, and new ones are prevented from launching"
    ],
    "a": 0,
    "e": "SCPs are guardrails that cap what any identity in a member account can do, including account administrators and the member account's root user. They do not grant access, require acceptance, or remove resources that already exist."
  },
  {
    "t": "governance",
    "x": "Which capabilities does AWS Control Tower provide for a multi-account environment? (Select TWO.)",
    "o": [
      "Provisions new accounts through a standardized account factory",
      "Detects anomalous account activity by analyzing threat intelligence feeds",
      "Applies operating system patches across instances in every account",
      "Applies preventive and detective controls to enrolled accounts",
      "Produces on-demand copies of AWS's third-party audit reports"
    ],
    "a": 0,
    "as": [
      0,
      3
    ],
    "e": "Control Tower builds on Organizations to standardize account creation through Account Factory and to enforce both preventive and detective controls across enrolled accounts. Threat detection, OS patching, and audit-report distribution belong to GuardDuty, Systems Manager, and AWS Artifact respectively."
  },
  {
    "t": "shared-responsibility",
    "x": "Which control is described as shared, meaning AWS applies it to the infrastructure while customers apply it to their own layer?",
    "o": [
      "Physical and environmental controls",
      "Client-side data encryption",
      "Edge location hardware maintenance",
      "Patch management"
    ],
    "a": 3,
    "e": "Patch management is a shared control: AWS patches the infrastructure and managed platforms, while customers patch their guest operating systems and applications. Physical and edge hardware controls belong wholly to AWS, and client-side encryption is wholly the customer's."
  },
  {
    "t": "identity-iam",
    "x": "Which statement best describes an IAM role?",
    "o": [
      "A collection of IAM users that receive permissions through a single attachment",
      "A JSON document that lists allowed and denied actions on specified resources",
      "An assumable identity that provides temporary credentials for a session",
      "An organization-wide guardrail that limits the maximum permissions in an account"
    ],
    "a": 2,
    "e": "A role is an identity that trusted users, applications, or AWS services assume to receive short-lived credentials. Groups gather users, policies are the JSON permission documents themselves, and SCPs are organizational guardrails rather than identities."
  },
  {
    "t": "governance",
    "x": "A governance team wants to be alerted whenever an S3 bucket in the account drifts from the required setting that blocks public access. Which service continuously evaluates resources against rules like this?",
    "o": [
      "AWS CloudTrail",
      "Amazon Macie",
      "AWS Config",
      "AWS Artifact"
    ],
    "a": 2,
    "e": "AWS Config rules continuously evaluate resource configurations against desired settings and flag noncompliant resources. Macie discovers sensitive data in S3 rather than checking configuration rules, and CloudTrail records API activity without judging compliance."
  },
  {
    "t": "shared-responsibility",
    "x": "For a workload running on Amazon EC2, which responsibilities fall to AWS rather than the customer? (Select TWO.)",
    "o": [
      "Applying updates to the guest operating system on each instance",
      "Configuring inbound rules on the security groups the workload uses",
      "Maintaining and patching the hypervisor layer beneath the instances",
      "Managing the credentials the application uses to call other services",
      "Securing the physical facilities where the host hardware runs"
    ],
    "a": 2,
    "as": [
      2,
      4
    ],
    "e": "AWS secures everything from the hypervisor down, including the virtualization software and the physical data centers. Guest OS updates, security group rules, and application credentials are configuration inside the cloud, which the customer controls."
  },
  {
    "t": "identity-iam",
    "x": "Which practices align with AWS recommendations for securing access to an AWS account? (Select TWO.)",
    "o": [
      "Consolidate the team onto one IAM user to reduce the number of credentials in circulation",
      "Grant identities only the permissions their tasks require",
      "Rotate the root user's access keys monthly rather than removing them",
      "Require multi-factor authentication for users with elevated permissions",
      "Attach permissions to each user directly instead of through groups"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Least-privilege access and MFA for privileged users are core IAM recommendations. A shared IAM user removes individual accountability, root access keys should be deleted rather than kept on a rotation schedule, and per-user policy attachment scales worse than groups without adding security."
  },
  {
    "t": "governance",
    "x": "A company already manages several accounts with AWS Organizations. What additional value would adopting AWS Control Tower bring?",
    "o": [
      "An orchestrated landing zone with prebuilt controls and a governance dashboard",
      "A lower combined bill through volume discounts across the accounts",
      "The ability to attach service control policies to organizational units",
      "Programmatic creation of new member accounts through an API call"
    ],
    "a": 0,
    "e": "Control Tower layers opinionated governance on top of Organizations: an automated landing zone, prebuilt preventive and detective controls, and a dashboard showing compliance across enrolled accounts. Consolidated billing discounts, SCP attachment, and account-creation APIs are already available from Organizations alone."
  },
  {
    "t": "shared-responsibility",
    "x": "As a company adopts services ranging from EC2 to fully managed offerings like DynamoDB, which responsibility stays with the company across all of them?",
    "o": [
      "Replacing failed hardware that the services run on",
      "Applying database engine updates for the managed offerings",
      "Operating the network fabric that connects Availability Zones",
      "Managing who can access the data the services store"
    ],
    "a": 3,
    "e": "Customers retain ownership of their data and control of who may access it under every service model, from IaaS to fully managed. Hardware replacement, managed engine maintenance, and inter-AZ networking are AWS responsibilities regardless of service type."
  },
  {
    "t": "identity-iam",
    "x": "A security policy requires that signing in to the AWS Management Console involve both a password and a one-time code from a device the user carries. Which IAM feature satisfies this?",
    "o": [
      "A stricter password policy",
      "Multi-factor authentication",
      "Access key rotation",
      "Permissions boundaries"
    ],
    "a": 1,
    "e": "MFA combines something the user knows, the password, with something the user has, such as a hardware token or authenticator app. Password policies only strengthen the knowledge factor, while key rotation and permissions boundaries govern programmatic credentials and permission limits rather than sign-in factors."
  },
  {
    "t": "governance",
    "x": "In AWS Control Tower, what distinguishes a preventive control from a detective control?",
    "o": [
      "Preventive controls monitor activity in CloudTrail logs, while detective controls block noncompliant API calls",
      "Preventive controls apply only in the management account, while detective controls run in member accounts",
      "Preventive controls come with paid support plans, while detective controls are included for every account",
      "Preventive controls block disallowed actions, while detective controls flag resources that drift out of compliance"
    ],
    "a": 3,
    "e": "Preventive controls, implemented largely through service control policies, keep disallowed actions from happening at all, while detective controls monitor for and surface noncompliance after resources exist. Neither category is scoped by account type or tied to a support plan."
  },
  {
    "t": "security-services",
    "x": "A security team wants continuous monitoring that analyzes VPC Flow Logs, DNS query logs, and account activity to detect compromised EC2 instances and unusual API calls. Which service meets this need?",
    "o": [
      "Amazon Inspector",
      "Amazon Macie",
      "Amazon GuardDuty",
      "AWS Shield"
    ],
    "a": 2,
    "e": "GuardDuty is a threat detection service that continuously analyzes VPC Flow Logs, DNS logs, and CloudTrail events to flag malicious or anomalous behavior. Inspector looks for software vulnerabilities in workloads rather than analyzing activity logs for active threats."
  },
  {
    "t": "identity-iam",
    "x": "A new financial analyst needs to view reports stored in a single S3 bucket and nothing else. Which permissions approach follows the principle of least privilege?",
    "o": [
      "A policy that allows read actions on all S3 buckets",
      "A policy that allows read actions on that specific bucket",
      "A policy that allows full S3 actions on that specific bucket",
      "The AWS managed AdministratorAccess policy"
    ],
    "a": 1,
    "e": "Least privilege means granting only the actions and resources a task requires, which here is read access to one bucket. Widening the resource scope to every bucket, or adding write and delete actions, exceeds what the analyst's job needs."
  },
  {
    "t": "security-services",
    "x": "Before a compliance review, a team must identify EC2 instances and container images that contain software packages with known vulnerabilities. Which service performs this assessment automatically?",
    "o": [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Security Hub",
      "AWS CloudTrail"
    ],
    "a": 1,
    "e": "Inspector continuously scans EC2 instances and container images for known software vulnerabilities and unintended network exposure. GuardDuty detects active threats by analyzing logs, so it would not report an unpatched package that no one has exploited yet."
  },
  {
    "t": "shared-responsibility",
    "x": "Which task is AWS responsible for under the shared responsibility model?",
    "o": [
      "Maintaining the physical network equipment inside its data centers",
      "Setting bucket policies that limit access to objects in Amazon S3",
      "Rotating the credentials an application uses to reach its database",
      "Choosing which data is encrypted before being uploaded"
    ],
    "a": 0,
    "e": "AWS secures the infrastructure that runs cloud services, including facilities, hardware, and physical networking. Access policies, credential management, and decisions about encrypting content all involve security in the cloud, so they stay with the customer."
  },
  {
    "t": "identity-iam",
    "x": "An application running on an EC2 instance must upload objects to an S3 bucket. What is the recommended way to grant the application this access?",
    "o": [
      "Store an IAM user's access keys in the application's configuration file",
      "Allow the instance's public IP address in the bucket policy",
      "Attach an IAM role with the required S3 permissions to the instance",
      "Sign the application in with the account's root user credentials"
    ],
    "a": 2,
    "e": "An IAM role delivers temporary, automatically rotated credentials to the instance, so nothing long-lived sits in code or configuration. Embedding an IAM user's access keys is the tempting alternative, but those keys can leak and must be rotated manually."
  },
  {
    "t": "security-services",
    "x": "Which capability is included with AWS Shield Standard for every AWS customer?",
    "o": [
      "Rule-based filtering of web requests for SQL injection patterns",
      "Vulnerability scanning of internet-facing EC2 instances",
      "Access to a specialized team during severe attack events",
      "Automatic defense against common network and transport layer DDoS attacks"
    ],
    "a": 3,
    "e": "Shield Standard is enabled automatically at no extra cost and mitigates the most common layer 3 and layer 4 DDoS attacks. The Shield Response Team requires a Shield Advanced subscription, and filtering individual web requests is the job of AWS WAF."
  },
  {
    "t": "shared-responsibility",
    "x": "A team migrates a self-managed MySQL database from EC2 instances to Amazon RDS. Which responsibility moves from the team to AWS after the migration?",
    "o": [
      "Granting application users access to the data",
      "Deciding which tables hold sensitive records",
      "Installing patches for the database engine",
      "Enabling encryption for the database storage"
    ],
    "a": 2,
    "e": "RDS is a managed service, so AWS takes over engine patching along with the underlying operating system and infrastructure. Controlling access, classifying data, and choosing to turn on storage encryption remain customer decisions even on managed services."
  },
  {
    "t": "identity-iam",
    "x": "A company has just created a new AWS account. Which practices protect the account's root user? (Select THREE.)",
    "o": [
      "Reserve the root user for tasks that specifically require it",
      "Keep the root password in a shared team vault so any admin can act fast",
      "Enable multi-factor authentication for the root user",
      "Delete or deactivate any root user access keys",
      "Sign in as the root user for day-to-day resource administration"
    ],
    "a": 0,
    "as": [
      0,
      2,
      3
    ],
    "e": "Root protections center on adding MFA, removing long-lived access keys, and using root only for the few tasks that demand it. Sharing the password widely or signing in with root for routine work expands the damage possible if those credentials are exposed."
  },
  {
    "t": "security-services",
    "x": "An online retailer wants enhanced DDoS mitigation with attack visibility for its public site, and it must also block requests to its login page that match known bad-bot signatures. Which services should it use together? (Select TWO.)",
    "o": [
      "Amazon Inspector",
      "AWS Shield Advanced",
      "Amazon Macie",
      "AWS WAF",
      "AWS Key Management Service (AWS KMS)"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Shield Advanced adds expanded DDoS mitigation, attack diagnostics, and response support beyond the free standard tier, while WAF blocks web requests that match rules such as bot signatures. Inspector and Macie find vulnerabilities and sensitive data; neither one filters or absorbs attack traffic."
  },
  {
    "t": "shared-responsibility",
    "x": "No matter which AWS service a company adopts, which security responsibility always stays with the company?",
    "o": [
      "Patching the hypervisors that host workloads",
      "Managing access to its own data and content",
      "Maintaining the hardware behind the service",
      "Securing the buildings where servers operate"
    ],
    "a": 1,
    "e": "Customers retain ownership of their data in every service model, including deciding who may access it, from EC2 through fully managed offerings. Hypervisors, hardware, and physical facilities are handled by AWS in all cases."
  },
  {
    "t": "identity-iam",
    "x": "What does enabling multi-factor authentication add to an IAM sign-in?",
    "o": [
      "A second verification step beyond the password",
      "Automatic rotation of the user's password",
      "Encryption of the user's stored credentials",
      "A restriction on which IP addresses can sign in"
    ],
    "a": 0,
    "e": "MFA requires something the user has, such as a code from a device, in addition to something the user knows. It does not rotate passwords or encrypt credentials; it adds another factor an attacker would also need to steal."
  },
  {
    "t": "security-services",
    "x": "Which service uses machine learning to discover sensitive data, such as personally identifiable information, stored in Amazon S3 buckets?",
    "o": [
      "Amazon Macie",
      "Amazon GuardDuty",
      "AWS Config",
      "Amazon Inspector"
    ],
    "a": 0,
    "e": "Macie automatically examines S3 objects to find and report sensitive data such as PII. GuardDuty is the tempting mix-up, but it monitors logs for threat activity and never inspects the contents of stored objects."
  },
  {
    "t": "shared-responsibility",
    "x": "Under the shared responsibility model, a healthcare company must ensure its patient records are encrypted at rest on AWS. Which actions fulfill this obligation? (Select TWO.)",
    "o": [
      "Turn on server-side encryption for the S3 buckets that hold the data",
      "Require TLS encryption for all connections between clients and the load balancer",
      "Activate Amazon GuardDuty in each Region the workload uses",
      "Deliver API activity logs to AWS CloudTrail for review",
      "Enable encryption on the EBS volumes attached to the application servers"
    ],
    "a": 0,
    "as": [
      0,
      4
    ],
    "e": "Server-side encryption for S3 and EBS volume encryption both protect stored data, which is what at-rest encryption means. TLS protects data while it moves over the network, and GuardDuty and CloudTrail detect threats and record activity without encrypting anything."
  },
  {
    "t": "identity-iam",
    "x": "Twelve developers join a team and all need identical permissions to the same development resources. How should an administrator grant this access with the least ongoing effort?",
    "o": [
      "Attach the required policy separately to each developer's IAM user",
      "Create a single IAM user whose credentials the whole team shares",
      "Provision a dedicated AWS account with full access for each developer",
      "Add the developers to an IAM group that has the required policy attached"
    ],
    "a": 3,
    "e": "A group lets the administrator manage permissions in one place, and adding or removing a member updates their access instantly. Attaching the policy to each user individually works today but multiplies maintenance every time the team or the policy changes."
  },
  {
    "t": "security-services",
    "x": "A company wants a managed service for creating and controlling the encryption material that integrated services such as Amazon S3 and Amazon EBS use to protect stored data. Which service should it choose?",
    "o": [
      "AWS Secrets Manager",
      "AWS Certificate Manager (ACM)",
      "AWS Key Management Service (AWS KMS)",
      "Amazon Macie"
    ],
    "a": 2,
    "e": "KMS creates and manages the cryptographic keys that many AWS services use for server-side encryption. Secrets Manager stores and rotates credentials rather than supplying keys to other services, and ACM handles TLS certificates for encrypting connections."
  },
  {
    "t": "shared-responsibility",
    "x": "A company runs a public web application behind an Application Load Balancer. Which configuration protects customer data while it travels between users' browsers and the application?",
    "o": [
      "Applying default encryption to the EBS volumes on the web servers",
      "Enabling versioning on the S3 bucket that stores uploaded files",
      "Adding AWS Shield Advanced protection to the load balancer",
      "Serving traffic over HTTPS with a certificate from AWS Certificate Manager"
    ],
    "a": 3,
    "e": "HTTPS uses TLS to encrypt data in transit between clients and the application, and ACM supplies and renews the certificates that make this possible. Volume encryption is the tempting distractor, but it protects data at rest, not data crossing the network."
  },
  {
    "t": "identity-iam",
    "x": "A company wants its employees to sign in once with their existing corporate directory credentials and then access several AWS accounts without separate IAM users in each one. Which service enables this?",
    "o": [
      "Amazon Cognito",
      "AWS IAM Identity Center",
      "AWS Directory Service",
      "AWS Resource Access Manager"
    ],
    "a": 1,
    "e": "IAM Identity Center provides workforce single sign-on across multiple AWS accounts and can connect to an existing corporate identity source. Cognito manages sign-in for the customers of a company's own applications, not workforce access to AWS accounts."
  },
  {
    "t": "security-services",
    "x": "A security operations team reviews findings from GuardDuty, Inspector, and Macie in three separate consoles. They want one place that collects these findings and scores the environment against recognized benchmarks. Which service provides this?",
    "o": [
      "AWS Trusted Advisor",
      "AWS Security Hub",
      "Amazon Detective",
      "AWS Artifact"
    ],
    "a": 1,
    "e": "Security Hub aggregates findings from AWS security services into a single view and runs automated checks against standards such as the CIS benchmarks. Trusted Advisor offers account-level best-practice checks but does not collect findings from other security tools."
  },
  {
    "t": "shared-responsibility",
    "x": "A company refactors an application from EC2 instances to AWS Lambda functions. Which task that the company previously handled becomes an AWS responsibility?",
    "o": [
      "Patching the operating system where the code runs",
      "Writing and testing the function code",
      "Assigning execution permissions to each function",
      "Classifying the data the functions process"
    ],
    "a": 0,
    "e": "With Lambda, AWS manages the underlying compute environment, including operating system and runtime patching. Code quality, IAM permissions for each function, and data classification stay with the customer in every service model."
  },
  {
    "t": "identity-iam",
    "x": "An application in a development account needs temporary access to read a DynamoDB table in the production account. Which approach should the team use?",
    "o": [
      "Create an IAM role in the production account for the application to assume",
      "Create an IAM user in the production account and distribute its access keys",
      "Store the production administrator credentials in the development account",
      "Add the development team's users to an IAM group in the production account"
    ],
    "a": 0,
    "e": "Cross-account access is granted by creating a role in the account that owns the resource and letting the other account assume it, which yields short-lived credentials. Distributing access keys or admin credentials creates standing secrets that must be rotated and can leak, and groups cannot contain users from another account."
  },
  {
    "t": "security-services",
    "x": "During an audit, a company must show which IAM identity deleted a production database table, when the call was made, and from which source IP address. Which service records this information?",
    "o": [
      "Amazon CloudWatch",
      "AWS Config",
      "Amazon GuardDuty",
      "AWS CloudTrail"
    ],
    "a": 3,
    "e": "CloudTrail logs API activity across an account, including the caller identity, timestamp, and source IP, which makes it the record of who did what. Config is the close distractor because it tracks how resource configurations change over time, but the API-call audit trail itself comes from CloudTrail."
  },
  {
    "t": "shared-responsibility",
    "x": "In the shared responsibility model, some controls apply to both AWS and the customer. Which is an example of a shared control?",
    "o": [
      "Physical facility security",
      "Customer data classification",
      "Patch management",
      "Edge location hardware upkeep"
    ],
    "a": 2,
    "e": "Patch management is shared: AWS patches the infrastructure and managed service software, while customers patch their guest operating systems and applications. Physical security belongs solely to AWS, and classifying data belongs solely to the customer."
  },
  {
    "t": "identity-iam",
    "x": "Which practices reflect the principle of least privilege in an AWS account? (Select TWO.)",
    "o": [
      "Attach broad administrator policies so work is not interrupted",
      "Remove permissions that access reviews show are no longer used",
      "Grant every new user the same permissions as the longest-tenured admin",
      "Scope each policy to the specific actions a job function requires",
      "Set permissions once at project kickoff and leave them fixed for stability"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Least privilege means granting only what a task needs and trimming access as needs change, so tightly scoped policies and removal of unused permissions both qualify. Broad or frozen permission sets quietly accumulate unnecessary access over time."
  },
  {
    "t": "global-infrastructure",
    "x": "Which statement describes an Availability Zone within the AWS global infrastructure?",
    "o": [
      "A geographic area that contains several independent AWS Regions",
      "A logically isolated section of a network defined inside a VPC",
      "One or more discrete data centers with independent power inside a Region",
      "A worldwide set of caching endpoints used for content delivery"
    ],
    "a": 2,
    "e": "An Availability Zone consists of one or more discrete data centers with independent power, cooling, and networking inside a Region. Regions contain Availability Zones, not the reverse, and the caching-endpoint description refers to edge locations."
  },
  {
    "t": "global-infrastructure",
    "x": "A hospital group in Germany is legally required to keep patient records inside the country. When the group selects an AWS Region for its records system, which factor settles the decision?",
    "o": [
      "Whether the Region offers the lowest On-Demand compute prices",
      "Whether the Region keeps stored data within the required jurisdiction",
      "Whether the Region sits closest to the company's development team",
      "Whether the Region was among the most recently opened by AWS"
    ],
    "a": 1,
    "e": "When a law dictates where data must live, compliance drives Region choice: data placed in a Region stays there unless the customer replicates it elsewhere, so picking a Region inside Germany satisfies the mandate. Price and team proximity are valid selection factors, but neither can override a legal residency requirement."
  },
  {
    "t": "global-infrastructure",
    "x": "A news site stores article images in an S3 bucket in us-east-1. Readers in Australia and India report slow image loading. Which service speeds up delivery by serving the images from locations near the readers?",
    "o": [
      "AWS Direct Connect",
      "Amazon ElastiCache",
      "AWS Global Accelerator",
      "Amazon CloudFront"
    ],
    "a": 3,
    "e": "CloudFront copies the images to edge locations around the world, so distant readers fetch them from a nearby point of presence instead of us-east-1. Global Accelerator improves routing onto the AWS backbone but does not store content at the edge, and ElastiCache speeds up database reads inside a Region rather than global delivery."
  },
  {
    "t": "global-infrastructure",
    "x": "Which statements about the AWS global infrastructure are accurate? (Select TWO.)",
    "o": [
      "A Region is made up of multiple, physically separated Availability Zones",
      "Each Availability Zone maps to exactly one physical data center",
      "Edge locations are far more numerous worldwide than Regions",
      "Availability Zones inside a Region draw from a single shared power source",
      "Traffic between Regions is carried over the public internet"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Every Region contains multiple isolated Availability Zones, and AWS operates hundreds of edge locations, far outnumbering its Regions. An Availability Zone can span one or more data centers, each zone has independent power and cooling, and inter-Region traffic rides the private AWS global backbone."
  },
  {
    "t": "compute",
    "x": "A small team wants to launch a Node.js web app by uploading its code and having capacity provisioning, load balancing, and health monitoring handled automatically, while keeping the ability to log in to the underlying instances. Which service should the team use?",
    "o": [
      "AWS Elastic Beanstalk",
      "AWS CloudFormation",
      "AWS CodeDeploy",
      "Amazon Lightsail"
    ],
    "a": 0,
    "e": "Elastic Beanstalk takes uploaded code and manages provisioning, load balancing, scaling, and health monitoring while leaving the underlying EC2 instances visible and accessible. CloudFormation requires the team to author infrastructure templates itself, and CodeDeploy only ships code onto servers that already exist."
  },
  {
    "t": "compute",
    "x": "A freelance designer with little cloud experience wants to host a WordPress portfolio on a small virtual server with bundled storage, networking, and a predictable monthly price. Which service matches this need?",
    "o": [
      "Amazon EC2",
      "AWS Elastic Beanstalk",
      "Amazon Lightsail",
      "AWS Amplify"
    ],
    "a": 2,
    "e": "Lightsail offers preconfigured virtual private servers, including a WordPress blueprint, with storage, networking, and a flat monthly price aimed at users new to AWS. EC2 can run the same site but requires assembling networking, storage, and pricing choices piece by piece."
  },
  {
    "t": "compute",
    "x": "A consultant is matching AWS compute services to customer requirements. Which pairings are appropriate? (Select TWO.)",
    "o": [
      "AWS Fargate to provide SSH access to the servers running each container",
      "AWS Lambda to run short pieces of code in response to events",
      "Amazon Lightsail to orchestrate large multi-node Kubernetes clusters",
      "AWS Elastic Beanstalk to cache static content at edge locations",
      "Amazon EC2 to retain full control over the guest operating system"
    ],
    "a": 1,
    "as": [
      1,
      4
    ],
    "e": "Lambda executes short event-driven code without server management, and EC2 gives the customer full administrative control over each instance's operating system. Fargate deliberately hides the underlying servers, Lightsail targets simple workloads rather than cluster orchestration, and edge caching is CloudFront's job."
  },
  {
    "t": "compute",
    "x": "A rendering job needs a GPU and runs continuously for about six hours each night with steady resource usage. Which compute service is the appropriate choice?",
    "o": [
      "AWS Lambda",
      "Amazon EC2",
      "AWS Fargate",
      "Amazon Lightsail"
    ],
    "a": 1,
    "e": "EC2 provides GPU-equipped instance families and places no cap on how long a job runs, which suits a sustained six-hour workload. Lambda limits each invocation to 15 minutes and offers no GPUs, and Lightsail's fixed bundles are not built for accelerated rendering."
  },
  {
    "t": "ec2",
    "x": "A genomics lab runs analysis jobs that checkpoint constantly and can be interrupted and restarted without losing progress. The lab wants the deepest possible discount on EC2 capacity. Which purchasing option fits?",
    "o": [
      "Spot Instances",
      "On-Demand Instances",
      "Standard Reserved Instances",
      "Dedicated Hosts"
    ],
    "a": 0,
    "e": "Spot Instances sell spare EC2 capacity at discounts of up to 90 percent, with the trade-off that AWS can reclaim the capacity on short notice, which interruption-tolerant jobs absorb easily. Reserved Instances discount steady long-term usage through a one- or three-year commitment rather than rewarding interruptibility."
  },
  {
    "t": "ec2",
    "x": "An internal inventory application will run on the same EC2 instance type around the clock for at least three years. Which purchasing approach produces the lowest cost for this usage pattern?",
    "o": [
      "On-Demand Instances",
      "Spot Instances",
      "Dedicated Hosts",
      "Standard Reserved Instances"
    ],
    "a": 3,
    "e": "A steady, predictable workload with a multi-year horizon is exactly what Reserved Instances discount, and three-year terms deliver the largest savings over On-Demand rates. Spot pricing is cheaper per hour but the capacity can be reclaimed at any time, which an always-on application cannot tolerate."
  },
  {
    "t": "ec2",
    "x": "Which component supplies the operating system and preinstalled software that an EC2 instance starts from when it launches?",
    "o": [
      "An instance type",
      "An Amazon Machine Image (AMI)",
      "An EC2 launch template",
      "An Amazon EBS snapshot"
    ],
    "a": 1,
    "e": "The AMI is the boot package containing the operating system and any preinstalled software for a new instance. A launch template bundles launch settings and merely references an AMI, while the instance type defines only CPU, memory, and network capacity."
  },
  {
    "t": "ec2",
    "x": "Which capabilities does Amazon EC2 Auto Scaling provide? (Select TWO.)",
    "o": [
      "Distributes incoming requests evenly across a group of instances",
      "Applies operating system patches to running instances on a schedule",
      "Launches additional instances automatically when demand increases",
      "Replaces instances that fail their health checks",
      "Caches frequently accessed data in memory for faster reads"
    ],
    "a": 2,
    "as": [
      2,
      3
    ],
    "e": "EC2 Auto Scaling grows and shrinks the fleet to match demand and terminates and replaces instances that become unhealthy. Spreading requests across instances is Elastic Load Balancing's role, and scheduled OS patching belongs to Systems Manager Patch Manager."
  },
  {
    "t": "containers",
    "x": "A platform team runs Kubernetes on-premises and wants to move its clusters to AWS while continuing to use its existing manifests, kubectl workflows, and add-ons. Which service should the team evaluate first?",
    "o": [
      "Amazon EKS",
      "Amazon ECS",
      "AWS Fargate",
      "AWS Elastic Beanstalk"
    ],
    "a": 0,
    "e": "EKS runs upstream Kubernetes with a managed control plane, so existing manifests and tooling carry over directly. ECS is AWS's own orchestrator with a different task-definition model, and Fargate is a way to run containers without managing servers rather than an orchestrator itself."
  },
  {
    "t": "containers",
    "x": "A startup runs its Amazon ECS cluster on the EC2 launch type and wants to stop patching, scaling, and right-sizing the cluster's instances while keeping the same containers and task definitions. What should the startup do?",
    "o": [
      "Resize the cluster to use fewer, larger EC2 instances",
      "Migrate the workload to Amazon EKS on EC2 worker nodes",
      "Move the tasks to the Fargate launch type",
      "Push the container images to Amazon ECR"
    ],
    "a": 2,
    "e": "Fargate runs ECS tasks on capacity that AWS provisions, patches, and scales, so the instance-management work disappears while the task definitions stay largely the same. Moving to EKS on EC2 swaps orchestrators but still leaves worker nodes for the team to maintain."
  },
  {
    "t": "containers",
    "x": "A build pipeline needs a managed AWS service to hold versioned Docker images so that Amazon EKS clusters can pull them at deployment time. Which service provides this?",
    "o": [
      "AWS CodeArtifact",
      "Amazon ECS",
      "Amazon S3",
      "Amazon Elastic Container Registry (ECR)"
    ],
    "a": 3,
    "e": "ECR stores, versions, and serves container images to ECS, EKS, and other runtimes, with tight IAM integration for push and pull permissions. CodeArtifact holds language package dependencies such as npm and Maven artifacts, and ECS runs containers rather than storing their images."
  },
  {
    "t": "serverless",
    "x": "Each time a customer uploads a photo to an S3 bucket, a company must generate a thumbnail within a few seconds and wants to pay only for the compute time each generation consumes. Which service is built for this pattern?",
    "o": [
      "Amazon EC2",
      "AWS Lambda",
      "AWS Elastic Beanstalk",
      "Amazon EKS"
    ],
    "a": 1,
    "e": "Lambda runs code directly in response to S3 events and bills per millisecond of execution, so nothing is charged between uploads. An EC2 or Beanstalk environment keeps instances running, and billing, even when no photos arrive."
  },
  {
    "t": "serverless",
    "x": "A data team is evaluating AWS Lambda for an overnight file-transformation job. Which characteristic of the job would make Lambda unsuitable?",
    "o": [
      "A single run takes roughly four hours to finish",
      "The transformation code is written in Python",
      "The job must start automatically on a schedule",
      "The input files are read from Amazon S3"
    ],
    "a": 0,
    "e": "A Lambda invocation can run for at most 15 minutes, so a four-hour single run exceeds the limit and points toward EC2, ECS, or AWS Batch instead. Python is a supported runtime, scheduled starts work through Amazon EventBridge, and reading from S3 is a routine integration."
  },
  {
    "t": "serverless",
    "x": "A team wants compute options where AWS manages all underlying server provisioning, patching, and capacity so the team never handles instances directly. Which services fit this model? (Select TWO.)",
    "o": [
      "Amazon EC2",
      "AWS Lambda",
      "AWS Elastic Beanstalk",
      "AWS Fargate",
      "Amazon Lightsail"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Lambda and Fargate are serverless: AWS provisions, patches, and scales the underlying capacity invisibly. Elastic Beanstalk and Lightsail simplify setup but still place EC2 instances or virtual servers in the customer's care, and EC2 is entirely customer-managed."
  },
  {
    "t": "storage",
    "x": "A media company keeps quarterly compliance reports in Amazon S3. The files are read only a few times per year, must be available within milliseconds when requested, and must survive the loss of an Availability Zone. Which storage class fits at the lowest cost?",
    "o": [
      "S3 Standard",
      "S3 One Zone-Infrequent Access",
      "S3 Glacier Flexible Retrieval",
      "S3 Standard-Infrequent Access"
    ],
    "a": 3,
    "e": "S3 Standard-IA offers millisecond access at a lower storage price for infrequently read data and replicates objects across multiple Availability Zones. One Zone-IA is cheaper still but stores data in a single AZ, and Glacier Flexible Retrieval takes minutes to hours to return objects."
  },
  {
    "t": "storage",
    "x": "A hospital must retain medical imaging archives for seven years. After 90 days the images are almost never viewed, and when an auditor requests one, a turnaround of up to 12 hours is acceptable. Which lifecycle transition target minimizes storage cost?",
    "o": [
      "S3 Standard-Infrequent Access",
      "S3 Intelligent-Tiering",
      "S3 Glacier Deep Archive",
      "S3 Glacier Flexible Retrieval"
    ],
    "a": 2,
    "e": "Glacier Deep Archive is the lowest-priced S3 class, and its standard retrieval completes within 12 hours, which matches the stated tolerance. Glacier Flexible Retrieval restores faster but costs more per gigabyte, so its speed is paid for without being needed."
  },
  {
    "t": "storage",
    "x": "A rendering farm of Linux EC2 instances must read and write the same project directory at the same time using standard file system paths. Which service provides this shared storage?",
    "o": [
      "Amazon EBS",
      "Amazon EFS",
      "EC2 instance store",
      "Amazon S3"
    ],
    "a": 1,
    "e": "EFS is a managed NFS file system that many instances can mount and use concurrently with normal file paths. EBS is block storage that attaches to an instance within one Availability Zone, and S3 is object storage without a native file system interface."
  },
  {
    "t": "storage",
    "x": "An analytics job writes large temporary scratch files that need very fast disk throughput. The data is regenerated from source on every run and can be discarded if the instance is stopped. Which storage option matches this workload?",
    "o": [
      "Amazon EBS Provisioned IOPS volume",
      "Amazon EFS",
      "Amazon S3 Standard",
      "EC2 instance store"
    ],
    "a": 3,
    "e": "Instance store is disk physically attached to the host, delivering high throughput for temporary data, and its contents do not persist when the instance stops or terminates. A Provisioned IOPS EBS volume persists data durably, which adds cost the disposable scratch files do not need."
  },
  {
    "t": "storage",
    "x": "A solutions architect is explaining Amazon EBS to a new team. Which statements about EBS volumes are accurate? (Select TWO.)",
    "o": [
      "Data on a volume is replicated within one Availability Zone",
      "A volume can attach at the same time to instances in different Availability Zones",
      "A snapshot can be used to create a new volume in a different Availability Zone",
      "Volume contents are erased each time the attached instance reboots",
      "Objects on a volume are served to clients directly over public HTTPS URLs"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "EBS replicates volume data within a single Availability Zone, and snapshots stored in S3 let you recreate a volume in another AZ. A volume can only attach to instances in its own AZ, data persists across reboots, and serving objects over HTTPS describes S3, not block storage."
  },
  {
    "t": "databases",
    "x": "A SaaS provider needs a MySQL-compatible relational database with higher throughput than standard MySQL, storage that grows automatically, and six copies of data kept across three Availability Zones. Which service provides this?",
    "o": [
      "Amazon Aurora",
      "Amazon RDS for MySQL",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    "a": 0,
    "e": "Aurora offers MySQL and PostgreSQL compatibility with substantially higher throughput, auto-scaling storage, and six-way replication across three Availability Zones. RDS for MySQL is also managed but runs standard MySQL storage and replication rather than Aurora's distributed storage layer."
  },
  {
    "t": "databases",
    "x": "A mobile game stores millions of small player-session records and needs single-digit millisecond reads and writes that scale automatically as the player count grows. Which database is designed for this profile?",
    "o": [
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon Neptune",
      "Amazon Redshift"
    ],
    "a": 1,
    "e": "DynamoDB is a serverless key-value database built for consistent single-digit millisecond performance at virtually any request volume. Aurora is a relational engine, Neptune targets graph relationships, and Redshift is tuned for analytical queries rather than high-volume key lookups."
  },
  {
    "t": "databases",
    "x": "An insurance firm wants business analysts to run complex SQL aggregations across years of claims history totaling hundreds of terabytes, feeding BI dashboards. Which service targets this workload?",
    "o": [
      "Amazon RDS for PostgreSQL",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Amazon Redshift"
    ],
    "a": 3,
    "e": "Redshift is a columnar data warehouse built for analytical SQL over very large datasets and integrates with BI tools. RDS for PostgreSQL handles transactional relational workloads well but is not designed for warehouse-scale aggregation across hundreds of terabytes."
  },
  {
    "t": "databases",
    "x": "During traffic spikes, an e-commerce site's product pages repeatedly issue the same reads against a relational product database, and page latency is rising. The team wants an in-memory layer that serves these repeated reads in microseconds. Which service fits?",
    "o": [
      "Amazon ElastiCache",
      "Amazon DynamoDB Accelerator (DAX)",
      "Amazon RDS read replicas",
      "Amazon Redshift"
    ],
    "a": 0,
    "e": "ElastiCache provides managed Redis or Memcached caching in front of a database, serving repeated reads from memory at microsecond speed. Read replicas spread query load but still answer from disk-backed storage at millisecond latency, and DAX only accelerates DynamoDB tables."
  },
  {
    "t": "databases",
    "x": "A startup is migrating a self-managed PostgreSQL server from an EC2 instance to Amazon RDS. Which operational responsibilities shift to AWS after the migration? (Select TWO.)",
    "o": [
      "Applying database engine patches during the maintenance window",
      "Provisioning and replacing the underlying host hardware",
      "Designing table schemas and tuning slow SQL queries",
      "Creating database users and assigning their privileges",
      "Deciding which application data should be encrypted"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "RDS is a managed service, so AWS takes over the infrastructure layer, including host hardware and engine patching. Schema design, query tuning, database user management, and data-classification decisions remain customer responsibilities under the shared responsibility model."
  },
  {
    "t": "networking",
    "x": "An administrator adds an inbound rule allowing TCP 443 to a web server's security group but defines no outbound rule for the responses. Clients connect successfully and receive responses. Why does the return traffic flow?",
    "o": [
      "Network ACLs generate matching outbound entries when inbound rules change",
      "The internet gateway opens response ports for each established session",
      "Security groups are stateful, so replies to allowed connections are permitted",
      "The subnet route table forwards established sessions past rule evaluation"
    ],
    "a": 2,
    "e": "Security groups track connection state, so traffic allowed in one direction automatically permits its return traffic. Network ACLs are stateless and would require explicit rules in both directions; neither gateways nor route tables create firewall openings per session."
  },
  {
    "t": "networking",
    "x": "After identifying a hostile IP range scanning its application, a company wants to block that range for every instance in a subnet using a rule that explicitly denies the traffic. Which VPC feature supports this?",
    "o": [
      "Security group",
      "Network ACL",
      "VPC Flow Logs",
      "Internet gateway"
    ],
    "a": 1,
    "e": "Network ACLs operate at the subnet boundary and evaluate numbered rules that can either allow or deny traffic, making them the right place to block a source range. Security groups support only allow rules, and Flow Logs record traffic rather than filter it."
  },
  {
    "t": "networking",
    "x": "A company serves its web application from two Regions and wants DNS lookups to send each user to whichever Region answers fastest for that user. Which Route 53 routing policy should be used?",
    "o": [
      "Failover routing",
      "Weighted routing",
      "Latency-based routing",
      "Simple routing"
    ],
    "a": 2,
    "e": "Latency-based routing answers each DNS query with the endpoint that historically delivers the lowest latency for that user's location. Weighted routing splits traffic by fixed percentages, and failover routing serves an active-passive disaster recovery pattern instead."
  },
  {
    "t": "networking",
    "x": "A logistics company is planning connectivity between its data center and a VPC. Which statements about the available options are accurate? (Select TWO.)",
    "o": [
      "AWS Site-to-Site VPN sends encrypted traffic across the public internet",
      "VPC peering links the data center's routers to the VPC through AWS's backbone",
      "AWS Direct Connect provides a dedicated physical link that bypasses the internet",
      "Amazon CloudFront establishes the private circuit between the two sites",
      "An internet gateway terminates the VPN tunnels inside a private subnet"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "A Site-to-Site VPN is quick to set up and encrypts traffic that still traverses the internet, while Direct Connect uses a dedicated private connection for more consistent bandwidth and latency. VPC peering connects VPCs to each other, not to on-premises networks, and CloudFront is a content delivery network."
  },
  {
    "t": "networking",
    "x": "Two subnets in the same VPC share the same network ACL, yet instances in only one of them can be reached from the internet. What most likely makes that subnet public?",
    "o": [
      "It is placed in the first Availability Zone of the Region",
      "It uses a larger CIDR block than the other subnet",
      "It sends outbound traffic through a NAT gateway",
      "Its route table contains a route to an internet gateway"
    ],
    "a": 3,
    "e": "A subnet is public when its route table directs internet-bound traffic to an internet gateway, allowing two-way connectivity for instances with public IPs. A NAT gateway provides outbound-only access for private subnets and does not accept inbound connections; AZ placement and CIDR size do not affect reachability."
  },
  {
    "t": "account-basics",
    "x": "Under the shared responsibility model, which task remains the customer's job when running a database on Amazon RDS?",
    "o": [
      "Patching the operating system on the database host",
      "Creating database accounts and granting their permissions",
      "Replacing failed storage hardware in the facility",
      "Maintaining physical access controls at the data center"
    ],
    "a": 1,
    "e": "Customers remain responsible for security in the cloud, which for RDS includes database users, permissions, and the data itself. AWS handles the host operating system, engine patching, hardware replacement, and physical facility security for managed database services."
  },
  {
    "t": "account-basics",
    "x": "A security audit finds that an S3 bucket holding client records is readable by anyone on the internet. Under the shared responsibility model, who is accountable for this exposure?",
    "o": [
      "AWS, because protecting data stored in its facilities falls under security of the cloud",
      "AWS Support, because permission reviews are included with paid support plans",
      "The customer, because bucket access settings are configured by the account owner",
      "Both parties jointly, because storage access controls are administered together"
    ],
    "a": 2,
    "e": "Configuring who can access an S3 bucket is security in the cloud, which belongs to the customer. AWS secures the underlying storage infrastructure, and tools like Trusted Advisor can flag open buckets, but the access configuration and its consequences rest with the account owner."
  },
  {
    "t": "account-basics",
    "x": "A company with a dozen AWS accounts wants to simplify how it pays for them. Which outcomes does consolidated billing through AWS Organizations provide? (Select TWO.)",
    "o": [
      "One invoice covers the charges from every member account",
      "Usage from all accounts is combined toward volume discount tiers",
      "Member accounts are merged so their resources share one VPC",
      "Each member account's support plan fee is waived by the payer account",
      "Workloads are relocated into the management account's home Region"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Consolidated billing produces a single invoice for the organization and aggregates usage across accounts, which can reach volume pricing tiers and share Reserved Instance and Savings Plans discounts. Accounts keep their own resources, networks, and support plans; nothing is merged or relocated."
  },
  {
    "t": "app-integration",
    "x": "An online store's checkout service sends each order to a fulfillment service. During flash sales the fulfillment service falls behind and orders are dropped. Which service should sit between the two so that orders are retained until the fulfillment service can work through them?",
    "o": [
      "Amazon SNS",
      "Amazon SQS",
      "AWS Step Functions",
      "Amazon EventBridge"
    ],
    "a": 1,
    "e": "SQS is a message queue that stores messages durably until a consumer polls and processes them, so it absorbs traffic spikes and lets a slow consumer catch up. SNS pushes messages to subscribers immediately, so a lagging fulfillment service would still be overwhelmed instead of buffered."
  },
  {
    "t": "ml-ai-analytics",
    "x": "A data analyst wants to run standard SQL queries against CSV files that already sit in an S3 bucket, without loading them into a database or managing any servers. Which service should the analyst use?",
    "o": [
      "Amazon RDS",
      "Amazon QuickSight",
      "Amazon Athena",
      "Amazon Redshift"
    ],
    "a": 2,
    "e": "Athena is a serverless query service that runs standard SQL directly against data stored in S3. Redshift is a data warehouse that typically requires loading data into a cluster first, and QuickSight visualizes query results rather than acting as the query engine."
  },
  {
    "t": "mgmt-dev-tools",
    "x": "An operations engineer manages 200 EC2 instances and needs to apply operating system patches and run the same shell command across the whole fleet without logging in to each instance. Which service provides these capabilities?",
    "o": [
      "AWS Config",
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS Systems Manager"
    ],
    "a": 3,
    "e": "Systems Manager includes Patch Manager and Run Command, which operate on entire fleets of managed instances at scale. Inspector scans instances for vulnerabilities and Config records configuration history, but neither one applies patches or executes commands."
  },
  {
    "t": "provisioning",
    "x": "A startup is adopting AWS CloudFormation for its deployments. Which advantages does this approach provide? (Select TWO.)",
    "o": [
      "Templates automatically right-size EC2 instances based on observed usage",
      "Resources created from a template are billed at a discounted rate",
      "Identical environments can be recreated in another Region from the same template",
      "Stacks can be modified after deployment without IAM permissions",
      "Infrastructure changes can be tracked and peer-reviewed in a source repository"
    ],
    "a": 2,
    "as": [
      2,
      4
    ],
    "e": "Because a template describes the whole environment as a text file, the same stack can be stood up consistently in other Regions or accounts, and changes can be version-controlled and reviewed like application code. CloudFormation itself is free but does not discount the resources it creates, and right-sizing guidance comes from tools such as Compute Optimizer."
  },
  {
    "t": "logging-monitoring",
    "x": "A sysadmin wants to receive an alert whenever the average CPU utilization of an EC2 instance stays above 80 percent for five minutes. Which service provides both the metric and the alarm?",
    "o": [
      "AWS CloudTrail",
      "AWS X-Ray",
      "AWS Config",
      "Amazon CloudWatch"
    ],
    "a": 3,
    "e": "CloudWatch collects performance metrics such as CPU utilization and can fire alarms when a metric breaches a threshold over a period. CloudTrail records API activity for auditing and plays no role in performance monitoring."
  },
  {
    "t": "app-integration",
    "x": "A media company processes uploaded videos through several stages: transcode, generate thumbnails, run a quality check, and publish. Each stage is a separate Lambda function, and failed stages need automatic retries. Which service should orchestrate this workflow?",
    "o": [
      "Amazon SQS",
      "Amazon SNS",
      "AWS Step Functions",
      "Amazon EventBridge"
    ],
    "a": 2,
    "e": "Step Functions coordinates multi-step workflows as state machines with built-in sequencing, branching, error handling, and retries. EventBridge routes individual events to targets but does not track the state of a multi-stage process from start to finish."
  },
  {
    "t": "ml-ai-analytics",
    "x": "Business analysts at a retailer want interactive dashboards showing sales trends and regional performance, built from data in the company's data lake and shared with executives. Which service fits this need?",
    "o": [
      "Amazon QuickSight",
      "Amazon CloudWatch",
      "Amazon Athena",
      "Amazon SageMaker"
    ],
    "a": 0,
    "e": "QuickSight is the business-intelligence service for building and sharing interactive dashboards and visualizations from business data. CloudWatch dashboards display operational metrics such as CPU and request counts, not sales analytics for executives."
  },
  {
    "t": "mgmt-dev-tools",
    "x": "A developer is writing a Python application that must create S3 buckets and publish messages from within its own program logic. Which access method should the application use to call AWS services?",
    "o": [
      "An AWS SDK",
      "The AWS CLI",
      "The AWS Management Console",
      "AWS CloudShell"
    ],
    "a": 0,
    "e": "The AWS SDKs provide language-specific libraries, including one for Python, so application code can call AWS APIs directly. The CLI and CloudShell are built for interactive or scripted terminal use, and the console is a browser interface for humans rather than for program logic."
  },
  {
    "t": "provisioning",
    "x": "A development team wants to define its cloud infrastructure in TypeScript instead of writing JSON or YAML templates by hand, while still deploying through CloudFormation. Which tool supports this?",
    "o": [
      "AWS CodeDeploy",
      "AWS Elastic Beanstalk",
      "AWS CDK",
      "AWS CodeCommit"
    ],
    "a": 2,
    "e": "The AWS Cloud Development Kit lets teams describe infrastructure in familiar programming languages such as TypeScript or Python and synthesizes CloudFormation templates for deployment. CodeDeploy releases application code onto compute targets and does not define infrastructure."
  },
  {
    "t": "logging-monitoring",
    "x": "An S3 bucket was deleted from a production account last week, and the security team must determine which IAM identity made the deletion call and when it happened. Where should the team look?",
    "o": [
      "Amazon CloudWatch metrics",
      "AWS X-Ray traces",
      "AWS CloudTrail event history",
      "AWS Trusted Advisor checks"
    ],
    "a": 2,
    "e": "CloudTrail records API calls in the account, including the identity that made each call, the time, and the source, which is exactly what this audit requires. CloudWatch metrics show how resources behaved but cannot tell you who issued a specific API call."
  },
  {
    "t": "app-integration",
    "x": "A company receives events from a third-party SaaS monitoring product and wants to route each one to a different AWS target depending on fields in the event payload. Which service is designed for this?",
    "o": [
      "Amazon SQS",
      "AWS Step Functions",
      "Amazon SNS",
      "Amazon EventBridge"
    ],
    "a": 3,
    "e": "EventBridge is an event bus that ingests events from AWS services and SaaS partners and applies rules that match event content to route them to targets. SNS can filter on message attributes for its subscribers, but it does not offer native SaaS partner event sources or content-based bus routing."
  },
  {
    "t": "ml-ai-analytics",
    "x": "A data-science team needs to build, train, and deploy its own machine learning model using the company's proprietary dataset. Which service provides the managed environment for this work?",
    "o": [
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Translate",
      "Amazon SageMaker"
    ],
    "a": 3,
    "e": "SageMaker is the managed platform for building, training, and deploying custom machine learning models. Rekognition, Comprehend, and Translate are pre-trained AI services that expose ready-made capabilities through an API rather than a place to train your own models."
  },
  {
    "t": "mgmt-dev-tools",
    "x": "Company policy forbids opening inbound SSH ports on EC2 instances, yet administrators still need occasional interactive shell sessions for troubleshooting. Which capability satisfies both requirements?",
    "o": [
      "Amazon EC2 key pairs",
      "AWS Systems Manager Session Manager",
      "AWS Client VPN",
      "AWS Direct Connect"
    ],
    "a": 1,
    "e": "Session Manager provides interactive shell access through the Systems Manager agent's outbound connection, so no inbound ports need to be opened at all. Client VPN or Direct Connect still requires the instances to accept inbound SSH from the connected network, and key pairs merely authenticate SSH sessions."
  },
  {
    "t": "provisioning",
    "x": "For disaster-recovery drills, a company must stand up a complete copy of its test environment, including a VPC, subnets, EC2 instances, and an RDS database, in a second Region on demand. Which service provisions all of these resources together in a repeatable way?",
    "o": [
      "AWS Elastic Beanstalk",
      "AWS CloudFormation",
      "AWS Backup",
      "AWS Systems Manager"
    ],
    "a": 1,
    "e": "CloudFormation provisions a full set of related resources as a stack from a template, which can be deployed on demand in any Region. AWS Backup copies data such as snapshots between Regions but does not create networking or compute infrastructure."
  },
  {
    "t": "logging-monitoring",
    "x": "Users of a microservices application report slow checkouts. The developers want to follow an individual request as it passes through API Gateway, several Lambda functions, and DynamoDB to find which hop adds the delay. Which service should they use?",
    "o": [
      "AWS CloudTrail",
      "AWS X-Ray",
      "Amazon Inspector",
      "AWS Config"
    ],
    "a": 1,
    "e": "X-Ray traces requests end to end across distributed services and shows where time is spent, which pinpoints latency bottlenecks. CloudTrail logs which API calls occurred for auditing but does not measure how long a request spends at each service hop."
  },
  {
    "t": "app-integration",
    "x": "Which use cases are a good fit for Amazon SNS? (Select TWO.)",
    "o": [
      "Holding messages until a single worker polls and processes them",
      "Sending a text message to on-call engineers when an alert fires",
      "Coordinating a multi-step order workflow with branching logic",
      "Delivering one published message to many subscribed endpoints at once",
      "Running a maintenance task automatically on an hourly schedule"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "SNS is a publish/subscribe service that pushes each published message to all of its subscribers and supports endpoints such as SMS, email, Lambda, and SQS, which covers both alerting and fan-out. Queue-style buffering for a single polling worker is SQS, and multi-step workflow coordination belongs to Step Functions."
  },
  {
    "t": "ml-ai-analytics",
    "x": "A development team with no machine learning experience wants to add AI features to an app by calling pre-trained services through an API. Which services fit this approach? (Select TWO.)",
    "o": [
      "Amazon SageMaker",
      "Amazon Polly",
      "Amazon QuickSight",
      "Amazon EMR",
      "Amazon Rekognition"
    ],
    "a": 1,
    "as": [
      1,
      4
    ],
    "e": "Polly (text to speech) and Rekognition (image and video analysis) are pre-trained AI services that developers call through an API without building or training models. SageMaker targets teams that develop their own models, while QuickSight and EMR are analytics services rather than ready-made AI APIs."
  },
  {
    "t": "logging-monitoring",
    "x": "An operations team is evaluating Amazon CloudWatch. Which capabilities does the service provide? (Select TWO.)",
    "o": [
      "Recording every API call made in the account for auditing",
      "Triggering an alarm when a metric crosses a defined threshold",
      "Tracing a single request as it travels across microservices",
      "Centralizing log files from applications and AWS services",
      "Assessing resource configurations against desired settings"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "CloudWatch collects metrics and fires alarms on thresholds, and CloudWatch Logs aggregates log data from applications and AWS services in one place. API-call audit history is CloudTrail's job, request tracing belongs to X-Ray, and configuration assessment is handled by AWS Config."
  },
  {
    "t": "pricing-models",
    "x": "A media company runs a nightly video-transcoding job that checkpoints its work and can be stopped and restarted without losing progress. The team wants the lowest possible compute cost and can tolerate interruptions. Which EC2 purchasing option fits this workload?",
    "o": [
      "On-Demand Instances",
      "Standard Reserved Instances",
      "Spot Instances",
      "Dedicated Hosts"
    ],
    "a": 2,
    "e": "Spot Instances offer the deepest discounts in exchange for the possibility that AWS reclaims the capacity, which suits interruptible batch jobs that save their progress. On-Demand avoids commitment but costs far more, and Reserved Instances reward steady long-term usage rather than a cost-sensitive nightly job."
  },
  {
    "t": "billing-tools",
    "x": "A finance analyst wants an interactive view of the past 12 months of AWS spend, grouped by service, along with a forecast of the next three months. Which tool should the analyst use?",
    "o": [
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report"
    ],
    "a": 1,
    "e": "Cost Explorer provides interactive charts of historical spend with grouping, filtering, and built-in forecasting. The Pricing Calculator estimates planned workloads that are not running yet, Budgets sends threshold alerts, and the Cost and Usage Report is a raw data export rather than a visualization tool."
  },
  {
    "t": "support-plans",
    "x": "A company is moving its production e-commerce site to AWS and wants 24/7 phone and chat access to cloud support engineers, with a response within one hour if the production system goes down. Which is the lowest-cost AWS Support plan that meets these needs?",
    "o": [
      "Developer",
      "Basic",
      "Business",
      "Enterprise"
    ],
    "a": 2,
    "e": "Business is the least expensive plan with 24/7 phone and chat access to cloud support engineers and a one-hour response target when a production system is down. Developer offers business-hours email support only, and Enterprise adds faster critical response and a Technical Account Manager at a much higher price."
  },
  {
    "t": "pricing-models",
    "x": "A company commits to a consistent hourly spend on EC2 for three years but expects to shift workloads across instance families and Regions, and to move some services to AWS Fargate. Which purchasing option applies its discount to all of that usage without requiring exchanges or modifications?",
    "o": [
      "Compute Savings Plans",
      "Convertible Reserved Instances",
      "EC2 Instance Savings Plans",
      "Standard Reserved Instances"
    ],
    "a": 0,
    "e": "Compute Savings Plans automatically apply to any instance family, size, OS, tenancy, or Region, and also cover Fargate and Lambda usage. Convertible Reserved Instances can change attributes only through a manual exchange, and EC2 Instance Savings Plans are locked to one instance family in one Region."
  },
  {
    "t": "billing-tools",
    "x": "A DevOps lead wants an email notification whenever a project's month-to-date charges are forecast to exceed $500. Which service provides this capability with the least setup?",
    "o": [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Cost and Usage Report",
      "AWS Trusted Advisor"
    ],
    "a": 0,
    "e": "Budgets lets you set a spending threshold and trigger alerts on actual or forecasted costs in a few clicks. Cost Explorer can display forecasts but does not send threshold notifications on its own, and the Cost and Usage Report is a data export with no alerting."
  },
  {
    "t": "support-plans",
    "x": "Which AWS Support plan includes a designated Technical Account Manager who provides proactive guidance and coordinates access to AWS subject-matter experts?",
    "o": [
      "Developer",
      "Business",
      "Enterprise On-Ramp",
      "Enterprise"
    ],
    "a": 3,
    "e": "Enterprise Support assigns a designated Technical Account Manager to the account. Enterprise On-Ramp provides consultative access to a shared pool of technical account managers rather than a named individual, and Business and Developer include no TAM at all."
  },
  {
    "t": "pricing-models",
    "x": "An enterprise must run commercial software licensed per physical socket, and its auditors need to verify that instances stay on specific physical servers. Which EC2 option meets these requirements?",
    "o": [
      "Dedicated Instances",
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts"
    ],
    "a": 3,
    "e": "Dedicated Hosts allocate an entire physical server and expose socket and core counts, which supports server-bound BYOL licensing and placement auditing. Dedicated Instances also run on single-tenant hardware but do not give visibility into or control over the specific underlying host."
  },
  {
    "t": "billing-tools",
    "x": "An accounting team needs the most granular billing data available, with hourly line items delivered automatically to an S3 bucket for analysis in an external reporting system. What should the team enable?",
    "o": [
      "AWS Cost Explorer",
      "AWS Budgets reports",
      "AWS Cost and Usage Report",
      "AWS Pricing Calculator"
    ],
    "a": 2,
    "e": "The Cost and Usage Report delivers the most detailed billing data AWS offers, down to hourly line items, into an S3 bucket for downstream analytics. Cost Explorer is an interactive console view, and Budgets reports summarize budget performance rather than raw usage."
  },
  {
    "t": "support-plans",
    "x": "Which resources are available to every AWS account, including accounts on the Basic Support plan? (Select TWO.)",
    "o": [
      "One-on-one technical cases with cloud support engineers",
      "Customer service for account and billing questions",
      "A Technical Account Manager during onboarding",
      "A 15-minute response target for critical issues",
      "The core set of Trusted Advisor checks"
    ],
    "a": 1,
    "as": [
      1,
      4
    ],
    "e": "Every account, even on Basic Support, gets 24/7 customer service for account and billing matters plus the core Trusted Advisor checks, documentation, and the AWS Health Dashboard. Technical support cases start at the Developer tier, while TAMs and 15-minute response targets belong to the Enterprise tiers."
  },
  {
    "t": "pricing-models",
    "x": "A startup is launching a brand-new application with no usage history to forecast traffic. Leadership wants to pay for compute by the hour or second with no long-term commitment while they learn how the workload behaves. Which pricing model should they choose?",
    "o": [
      "Spot Instances",
      "On-Demand Instances",
      "Standard Reserved Instances",
      "EC2 Instance Savings Plans"
    ],
    "a": 1,
    "e": "On-Demand pricing charges only for capacity actually used, with no term commitment, which fits a workload whose pattern is still unknown. Reserved Instances and Savings Plans require a one- or three-year commitment, and Spot capacity can be reclaimed by AWS, a poor fit for a customer-facing launch."
  },
  {
    "t": "billing-tools",
    "x": "Before migrating an on-premises application, a company wants to model what the workload would cost on AWS using specific instance types, storage volumes, and data transfer amounts. Which tool is designed for this task?",
    "o": [
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "AWS Cost and Usage Report",
      "AWS Pricing Calculator"
    ],
    "a": 3,
    "e": "The Pricing Calculator builds cost estimates for workloads before they run, based on the services and configurations you plan to deploy. Cost Explorer and the Cost and Usage Report only reflect usage that has already been billed, and Trusted Advisor evaluates resources that already exist."
  },
  {
    "t": "support-plans",
    "x": "An engineer experimenting in a sandbox account occasionally wants to ask AWS technical questions by email during business hours. Nothing in the account serves production traffic. Which support plan matches this situation at the lowest cost?",
    "o": [
      "Basic",
      "Developer",
      "Business",
      "Enterprise On-Ramp"
    ],
    "a": 1,
    "e": "The Developer plan adds business-hours email access to cloud support, with responses in under 24 hours for general guidance and under 12 for impaired systems. Basic includes no technical case support, while Business and Enterprise On-Ramp add 24/7 access this scenario does not need."
  },
  {
    "t": "pricing-models",
    "x": "Which statements accurately describe the AWS Free Tier? (Select TWO.)",
    "o": [
      "Free allowances unlock after the account's first Reserved Instance purchase",
      "New accounts receive 12 months of free monthly usage for selected services",
      "Free usage is limited to accounts subscribed to a paid support plan",
      "Some services include a monthly allowance that stays free beyond the first year",
      "Allowance sizes grow automatically as an account's total monthly spend increases"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "The Free Tier combines 12-month offers for new accounts, always-free monthly allowances such as a set number of Lambda requests, and short-term trials. It is available regardless of support plan or purchase history, and allowance sizes are fixed rather than scaling with spend."
  },
  {
    "t": "billing-tools",
    "x": "A company manages 15 AWS accounts under AWS Organizations with consolidated billing enabled. Which billing outcomes does this arrangement provide? (Select TWO.)",
    "o": [
      "The management account receives a single bill covering every member account",
      "Each member account inherits the management account's support plan",
      "Combined usage across accounts reaches volume pricing tiers sooner",
      "Member accounts are blocked from using services outside an approved list",
      "Inter-Region data transfer charges are waived across the organization"
    ],
    "a": 0,
    "as": [
      0,
      2
    ],
    "e": "Consolidated billing rolls every member account's charges into one invoice for the management account and aggregates usage so tiered volume discounts apply across the organization. Restricting services is the job of service control policies, and support plans are purchased separately for each account."
  },
  {
    "t": "support-plans",
    "x": "A growing company wants a 30-minute response target for business-critical system down cases and consultative access to technical account management, but the full Enterprise plan is beyond its budget. Which AWS Support plan should it choose?",
    "o": [
      "Enterprise On-Ramp",
      "Business",
      "Enterprise",
      "Developer"
    ],
    "a": 0,
    "e": "Enterprise On-Ramp offers a 30-minute response target for business-critical system down cases and access to a pool of technical account managers at a lower price than Enterprise, which targets 15 minutes and assigns a designated TAM. Business tops out at a one-hour target for production system down cases."
  },
  {
    "t": "pricing-models",
    "x": "A solutions architect is estimating network charges for a workload hosted in a single AWS Region. Which type of traffic is typically not billed?",
    "o": [
      "Data transferred in from the internet",
      "Data transferred out to the internet",
      "Data transferred between AWS Regions",
      "Data transferred out to an on-premises data center"
    ],
    "a": 0,
    "e": "Inbound data transfer from the internet is free in nearly all cases, so it rarely factors into estimates. Outbound traffic to the internet, cross-Region replication, and transfers back to on-premises sites are all billed and usually drive the networking line of a cost model."
  },
  {
    "t": "billing-tools",
    "x": "Three internal departments share a single AWS account, and finance needs to attribute each month's charges to the department that generated them. What is the most direct way to accomplish this?",
    "o": [
      "Move each department into consolidated billing under AWS Organizations",
      "Tag resources by department and activate cost allocation tags",
      "Purchase a separate Savings Plan for each department",
      "Estimate each department's share with the AWS Pricing Calculator"
    ],
    "a": 1,
    "e": "Once activated in the Billing console, cost allocation tags let Cost Explorer and the Cost and Usage Report break down charges by tag values such as a department name. Consolidated billing addresses multi-account structures, and Savings Plans change the rate paid rather than how spend is attributed."
  },
  {
    "t": "support-plans",
    "x": "A cloud administrator wants the complete set of AWS Trusted Advisor checks, including the cost optimization and fault tolerance categories. What is the minimum support plan that unlocks them?",
    "o": [
      "Developer",
      "Basic",
      "Business",
      "Enterprise On-Ramp"
    ],
    "a": 2,
    "e": "The full range of Trusted Advisor checks becomes available at the Business tier and above. Accounts on Basic or Developer see only the core security and service quota checks, and although Enterprise On-Ramp also includes every check, it is not the lowest tier that does."
  },
  {
    "t": "pricing-models",
    "x": "Which EC2 purchasing options involve a one-year or three-year commitment in exchange for a lower rate? (Select TWO.)",
    "o": [
      "On-Demand Instances",
      "Standard Reserved Instances",
      "Spot Instances",
      "Compute Savings Plans",
      "Dedicated Instances"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "Reserved Instances and Savings Plans both exchange a one- or three-year commitment for significant discounts over On-Demand rates. On-Demand and Spot are pay-as-you-go with no term, and Dedicated Instances describe single-tenant placement, which can be billed under several different models."
  },
  {
    "t": "billing-tools",
    "x": "One account in an organization purchases Reserved Instances but does not use all of the reserved capacity during a given hour. With consolidated billing and default settings, what happens to the unused discount?",
    "o": [
      "It applies to matching usage in other accounts in the organization",
      "It is forfeited and cannot be applied that hour",
      "It converts to a credit on the next month's invoice",
      "It is refunded to the purchasing account at the On-Demand rate"
    ],
    "a": 0,
    "e": "Under consolidated billing, Reserved Instance and Savings Plans discounts are shared by default, so unused reservation hours apply to matching usage anywhere in the organization. The discount is not forfeited, converted to credits, or refunded, though sharing can be turned off per account."
  }
],
}
