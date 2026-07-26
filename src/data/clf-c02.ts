// AWS Certified Cloud Practitioner (CLF-C02) bank. Real exam format is
// multiple choice + multiple response only (no interactive items), 65 Q /
// 90 min. Topics anchor into the freeCodeCamp/ExamPro 2026 course (video
// 7HKot-brXFE) via chapter timestamps from the video description.
import type { ExamDef } from "./types"

export const exam: ExamDef = {
 "id": "clf-c02",
 "vendor": "aws",
 "scale": {
  "max": 1000,
  "pass": 700
 },
 "cert": "AWS Certified",
 "name": "Cloud Practitioner",
 "code": "CLF-C02",
 "blurb": "Cloud concepts, AWS security and compliance, core technology and services, and billing, pricing, and support.",
 "domains": {
  "1": "Cloud Concepts",
  "2": "Security and Compliance",
  "3": "Cloud Technology and Services",
  "4": "Billing, Pricing, and Support"
 },
 "examSplit": {
  "1": 0.24,
  "2": 0.3,
  "3": 0.34,
  "4": 0.12
 },
 "examMC": 65,
 "examPBQ": 0,
 "examMinutes": 90,
 "videos": {
  "benefits-of-cloud": {
   "n": "freeCodeCamp: The Benefits of Cloud",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=5001s",
   "d": 1
  },
  "cloud-architecture": {
   "n": "freeCodeCamp: Cloud Architecture",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=7930s",
   "d": 1
  },
  "cloud-concepts": {
   "n": "freeCodeCamp: Cloud Concepts",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=530s",
   "d": 1
  },
  "cloud-deployment-models": {
   "n": "freeCodeCamp: Cloud Deployment Models",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=530s",
   "d": 1
  },
  "digital-transformation": {
   "n": "freeCodeCamp: Digital Transformation",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=4448s",
   "d": 1
  },
  "economies-of-scale": {
   "n": "freeCodeCamp: Economies of Scale and Agility",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=530s",
   "d": 1
  },
  "migration-tco": {
   "n": "freeCodeCamp: TCO and Migration",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=41662s",
   "d": 1
  },
  "well-architected": {
   "n": "freeCodeCamp: AWS Well-Architected Framework",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=40360s",
   "d": 1
  },
  "well-architected-pillars": {
   "n": "freeCodeCamp: Well-Architected Framework Pillars",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=40360s",
   "d": 1
  },
  "artifact-compliance": {
   "n": "freeCodeCamp: Artifact and Compliance Programs",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=33232s",
   "d": 2
  },
  "cognito-directory": {
   "n": "freeCodeCamp: Cognito and Directory Services",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=28860s",
   "d": 2
  },
  "config-cloudtrail": {
   "n": "freeCodeCamp: Config and CloudTrail",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=33232s",
   "d": 2
  },
  "control-tower": {
   "n": "freeCodeCamp: Control Tower and Landing Zones",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=33232s",
   "d": 2
  },
  "governance": {
   "n": "freeCodeCamp: Governance",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=33232s",
   "d": 2
  },
  "guardduty-inspector": {
   "n": "freeCodeCamp: GuardDuty and Inspector",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=45785s",
   "d": 2
  },
  "iam-policies-roles": {
   "n": "freeCodeCamp: IAM Policies and Roles",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=28860s",
   "d": 2
  },
  "iam-root-mfa": {
   "n": "freeCodeCamp: Root Account Protection and MFA",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=28860s",
   "d": 2
  },
  "identity-iam": {
   "n": "freeCodeCamp: Identity",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=28860s",
   "d": 2
  },
  "kms-encryption": {
   "n": "freeCodeCamp: KMS and Encryption at Rest",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=45785s",
   "d": 2
  },
  "macie-detective": {
   "n": "freeCodeCamp: Macie and Detective",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=45785s",
   "d": 2
  },
  "organizations-scp": {
   "n": "freeCodeCamp: Organizations and Service Control Policies",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=33232s",
   "d": 2
  },
  "secrets-manager": {
   "n": "freeCodeCamp: Secrets Manager and Parameter Store",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=45785s",
   "d": 2
  },
  "security-services": {
   "n": "freeCodeCamp: Security",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=45785s",
   "d": 2
  },
  "shared-responsibility": {
   "n": "freeCodeCamp: Shared Responsibility Model",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=14492s",
   "d": 2
  },
  "waf-shield": {
   "n": "freeCodeCamp: WAF and Shield",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=45785s",
   "d": 2
  },
  "account-basics": {
   "n": "freeCodeCamp: Getting Started",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=2663s",
   "d": 3
  },
  "app-integration": {
   "n": "freeCodeCamp: Application Integration",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=31562s",
   "d": 3
  },
  "auto-scaling": {
   "n": "freeCodeCamp: Auto Scaling",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=15629s",
   "d": 3
  },
  "cloudformation-iac": {
   "n": "freeCodeCamp: CloudFormation and Infrastructure as Code",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=9332s",
   "d": 3
  },
  "cloudfront-cdn": {
   "n": "freeCodeCamp: CloudFront and Edge Caching",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=23311s",
   "d": 3
  },
  "compute": {
   "n": "freeCodeCamp: Compute",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=15629s",
   "d": 3
  },
  "containers": {
   "n": "freeCodeCamp: Containers",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=32583s",
   "d": 3
  },
  "databases": {
   "n": "freeCodeCamp: Databases",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=21167s",
   "d": 3
  },
  "direct-connect-vpn": {
   "n": "freeCodeCamp: Direct Connect and VPN",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=23311s",
   "d": 3
  },
  "dynamodb-nosql": {
   "n": "freeCodeCamp: DynamoDB and NoSQL",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=21167s",
   "d": 3
  },
  "ebs-efs": {
   "n": "freeCodeCamp: EBS and EFS",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=18736s",
   "d": 3
  },
  "ec2": {
   "n": "freeCodeCamp: EC2",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=24619s",
   "d": 3
  },
  "ecs-eks-fargate": {
   "n": "freeCodeCamp: ECS, EKS, and Fargate",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=32583s",
   "d": 3
  },
  "elastic-beanstalk": {
   "n": "freeCodeCamp: Elastic Beanstalk",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=15629s",
   "d": 3
  },
  "eventbridge-stepfunctions": {
   "n": "freeCodeCamp: EventBridge and Step Functions",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=31562s",
   "d": 3
  },
  "global-infrastructure": {
   "n": "freeCodeCamp: AWS Global Infrastructure",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=5214s",
   "d": 3
  },
  "lambda": {
   "n": "freeCodeCamp: Lambda and Event-Driven Compute",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=36245s",
   "d": 3
  },
  "lightsail": {
   "n": "freeCodeCamp: Lightsail",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=15629s",
   "d": 3
  },
  "load-balancing": {
   "n": "freeCodeCamp: Elastic Load Balancing",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=23311s",
   "d": 3
  },
  "logging-monitoring": {
   "n": "freeCodeCamp: Logging",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=37037s",
   "d": 3
  },
  "mgmt-dev-tools": {
   "n": "freeCodeCamp: Management and Development Tools",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=9332s",
   "d": 3
  },
  "ml-ai-analytics": {
   "n": "freeCodeCamp: ML, AI, and Big Data",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=37870s",
   "d": 3
  },
  "networking": {
   "n": "freeCodeCamp: Networking",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=23311s",
   "d": 3
  },
  "outposts-local-zones": {
   "n": "freeCodeCamp: Outposts, Local Zones, and Wavelength",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=5214s",
   "d": 3
  },
  "provisioning": {
   "n": "freeCodeCamp: Provisioning",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=34990s",
   "d": 3
  },
  "rds-aurora": {
   "n": "freeCodeCamp: RDS and Aurora",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=21167s",
   "d": 3
  },
  "redshift-warehousing": {
   "n": "freeCodeCamp: Redshift and Data Warehousing",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=21167s",
   "d": 3
  },
  "regions-az-edge": {
   "n": "freeCodeCamp: Regions, Availability Zones, and Edge Locations",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=5214s",
   "d": 3
  },
  "route53-dns": {
   "n": "freeCodeCamp: Route 53 and DNS",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=23311s",
   "d": 3
  },
  "s3-storage-classes": {
   "n": "freeCodeCamp: S3 Storage Classes and Lifecycle",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=18736s",
   "d": 3
  },
  "sdk-cli-console": {
   "n": "freeCodeCamp: Console, CLI, and SDKs",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=9332s",
   "d": 3
  },
  "serverless": {
   "n": "freeCodeCamp: Serverless Services",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=36245s",
   "d": 3
  },
  "snow-family": {
   "n": "freeCodeCamp: Snow Family and Bulk Transfer",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=18736s",
   "d": 3
  },
  "sqs-sns": {
   "n": "freeCodeCamp: SQS and SNS",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=31562s",
   "d": 3
  },
  "storage": {
   "n": "freeCodeCamp: Storage",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=18736s",
   "d": 3
  },
  "storage-gateway": {
   "n": "freeCodeCamp: Storage Gateway",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=18736s",
   "d": 3
  },
  "vpc-subnets": {
   "n": "freeCodeCamp: VPC, Subnets, and Security Groups",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=23311s",
   "d": 3
  },
  "windows-on-aws": {
   "n": "freeCodeCamp: Windows Workloads on AWS",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=36515s",
   "d": 3
  },
  "billing-tools": {
   "n": "freeCodeCamp: Billing, Pricing, and Support",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=42476s",
   "d": 4
  },
  "consolidated-billing": {
   "n": "freeCodeCamp: Consolidated Billing",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=42476s",
   "d": 4
  },
  "cost-explorer-budgets": {
   "n": "freeCodeCamp: Cost Explorer and Budgets",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=42476s",
   "d": 4
  },
  "free-tier": {
   "n": "freeCodeCamp: AWS Free Tier",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=42476s",
   "d": 4
  },
  "pricing-models": {
   "n": "freeCodeCamp: EC2 Pricing Models",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=27721s",
   "d": 4
  },
  "savings-plans-reserved": {
   "n": "freeCodeCamp: Savings Plans and Reserved Instances",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=42476s",
   "d": 4
  },
  "support-plans": {
   "n": "freeCodeCamp: Billing, Pricing, and Support",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=42476s",
   "d": 4
  },
  "trusted-advisor": {
   "n": "freeCodeCamp: Trusted Advisor",
   "u": "https://www.youtube.com/watch?v=7HKot-brXFE&t=42476s",
   "d": 4
  }
 },
 "questions": [
  {
   "id": 1,
   "t": "cloud-concepts",
   "x": "A retail company currently buys servers every three years and pays for them up front. After moving its workloads to AWS, how does the company's cost structure change?",
   "o": [
    "Compute costs become a fixed annual fee that is set at migration",
    "Hardware costs shift into per-user software licensing charges",
    "Large capital purchases are replaced by operational expenses that vary with usage",
    "Variable operating costs are consolidated into a single upfront capital payment"
   ],
   "a": 2,
   "e": "Moving to AWS trades capital expense for variable operational expense: the company pays for what it uses instead of buying hardware years in advance. Costs are not fixed annually and do not become an upfront payment; they track actual consumption.",
   "d": 1
  },
  {
   "id": 2,
   "t": "cloud-concepts",
   "x": "Which statement best describes cloud computing?",
   "o": [
    "Leasing dedicated hardware in a colocation facility under a long-term contract",
    "On-demand delivery of IT resources over the internet with pay-as-you-go pricing",
    "Running virtual machines on servers a company owns in its local data center",
    "Contracting a service provider to develop and maintain custom applications"
   ],
   "a": 1,
   "e": "Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing. Colocation leases and company-owned virtualization still tie the business to fixed hardware, which is exactly what the cloud model removes.",
   "d": 1
  },
  {
   "id": 3,
   "t": "cloud-concepts",
   "x": "A hospital keeps its patient records system in its own data center to satisfy internal policy, while running its public website and analytics workloads on AWS. The two environments are connected through AWS Direct Connect. Which cloud deployment model is this?",
   "o": [
    "Private cloud",
    "Multicloud",
    "Cloud-native",
    "Hybrid cloud"
   ],
   "a": 3,
   "e": "Connecting on-premises infrastructure to workloads running on AWS is a hybrid deployment. Multicloud means using more than one cloud provider, and a private cloud would keep everything inside the hospital's own facilities.",
   "d": 1
  },
  {
   "id": 4,
   "t": "cloud-concepts",
   "x": "A solutions architect is comparing the total cost of ownership (TCO) of an on-premises data center with AWS. Which cost category disappears as a separate expense after moving to AWS?",
   "o": [
    "Compute capacity for the application servers",
    "Power, cooling, and physical facility space",
    "Storage consumed by database backups",
    "Data transfer between geographic locations"
   ],
   "a": 1,
   "e": "Facility costs such as power, cooling, and rack space are absorbed into AWS service pricing, so customers stop paying for them directly. Compute, storage, and data transfer remain visible usage-based line items on the AWS bill.",
   "d": 1
  },
  {
   "id": 5,
   "t": "cloud-concepts",
   "x": "A two-person startup wants to run a relational database but has no time for patching, backups, or failover setup. Which aspect of the AWS value proposition addresses this need most directly?",
   "o": [
    "Reserved pricing that lowers the hourly cost of database instances",
    "Global infrastructure that places read replicas near end users",
    "Managed services that shift routine maintenance work to AWS",
    "Consolidated billing that combines charges across linked accounts"
   ],
   "a": 2,
   "e": "Managed services such as Amazon RDS handle patching, backups, and failover so a small team can focus on its application. Pricing models and billing features reduce cost or administrative overhead, but they do not remove operational tasks.",
   "d": 1
  },
  {
   "id": 6,
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
   "e": "AWS is pay-as-you-go: you are charged for what you consume, and commitment options such as Savings Plans and Reserved Instances lower unit prices for steady usage. No contract, flat rate, or hardware prepayment is required to start using services.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 7,
   "t": "cloud-concepts",
   "x": "A company retires its self-hosted email servers and subscribes to a web-based email product that it only configures and uses, with no access to the underlying infrastructure. Which cloud service model is the company adopting?",
   "o": [
    "Infrastructure as a service (IaaS)",
    "Platform as a service (PaaS)",
    "Function as a service (FaaS)",
    "Software as a service (SaaS)"
   ],
   "a": 3,
   "e": "A complete application consumed over the web with no infrastructure management is SaaS. IaaS provides raw compute and storage that you manage yourself, and PaaS provides a managed environment for deploying your own code.",
   "d": 1
  },
  {
   "id": 8,
   "t": "benefits-of-cloud",
   "x": "Which capability of the AWS Cloud lets an application automatically add resources during a traffic spike and release them when demand falls?",
   "o": [
    "Durability",
    "High availability",
    "Elasticity",
    "Agility"
   ],
   "a": 2,
   "e": "Elasticity means matching resource supply to demand by scaling out and back in automatically. Agility describes how quickly teams can provision and experiment, and high availability describes staying operational through failures.",
   "d": 1
  },
  {
   "id": 9,
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
   "e": "Global reach comes from deploying into Regions worldwide on demand and from edge locations that cache content close to users. A single central Availability Zone cannot deliver low latency worldwide, accounts are not tied to countries, and AWS does not host customer-owned servers in its data centers.",
   "d": 1,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 10,
   "t": "benefits-of-cloud",
   "x": "An on-premises team must order hardware months before each product launch and usually ends up over-provisioned or short of capacity. What changes when the launch runs on AWS instead?",
   "o": [
    "Peak capacity still has to be purchased ahead of the event at a set size",
    "Capacity estimates become binding once the first resources are launched",
    "Hardware requests are fulfilled by AWS within the usual procurement lead times",
    "Capacity can be provisioned to match live demand and adjusted afterward"
   ],
   "a": 3,
   "e": "One core cloud benefit is that you stop guessing capacity: provision what current demand requires and scale up or down in minutes. There is no procurement lead time and no lock-in to an initial estimate.",
   "d": 1
  },
  {
   "id": 11,
   "t": "benefits-of-cloud",
   "x": "An engineering director is listing reasons to build new projects on AWS instead of expanding the company data center. Which statements are accurate? (Select TWO.)",
   "o": [
    "Applications on AWS no longer need to account for individual component failures",
    "AWS assumes responsibility for patching guest operating systems on Amazon EC2 instances",
    "Test environments can be created in minutes instead of waiting on procurement",
    "Hosting in the cloud removes the need for ongoing performance monitoring",
    "Demand aggregated across many customers yields lower prices than one company could negotiate"
   ],
   "a": 2,
   "e": "Agility (environments in minutes) and economies of scale (lower prices from aggregated demand) are core cloud advantages. Customers still design for failure, monitor performance, and configure their own workloads to meet compliance requirements.",
   "d": 1,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 12,
   "t": "benefits-of-cloud",
   "x": "A news site keeps serving readers during the loss of an entire data center because its architecture spans multiple Availability Zones. Which benefit of the AWS Cloud does this illustrate?",
   "o": [
    "Elasticity",
    "High availability",
    "Pay-as-you-go pricing",
    "Agility"
   ],
   "a": 1,
   "e": "Running across multiple Availability Zones keeps an application operational when one location fails, which is high availability. Elasticity concerns scaling with demand, not surviving failures, and agility concerns speed of provisioning and experimentation.",
   "d": 1
  },
  {
   "id": 13,
   "t": "benefits-of-cloud",
   "x": "Over several years, a company notices the hourly price of the same instance type has been reduced several times without any action on its side. Which cloud economics principle explains these reductions?",
   "o": [
    "Spot pricing that reflects unused capacity at a given moment",
    "Reserved capacity discounts that are applied by default",
    "Volume discounts driven by the company's own growing usage",
    "Economies of scale from usage aggregated across the AWS customer base"
   ],
   "a": 3,
   "e": "AWS aggregates demand from a very large customer base, which lowers its unit costs, and it has repeatedly passed those savings on as price cuts. Spot and Reserved pricing are models a customer must actively choose, and the reductions do not depend on one company's own volume.",
   "d": 1
  },
  {
   "id": 14,
   "t": "digital-transformation",
   "x": "An executive team wants product ideas to reach customers sooner by eliminating the wait for infrastructure approval and setup. Which outcome of cloud adoption addresses this goal?",
   "o": [
    "Greater business agility through on-demand provisioning",
    "Lower spending through longer hardware refresh cycles",
    "Stronger isolation through dedicated physical servers",
    "Simpler audits through a single annual billing statement"
   ],
   "a": 0,
   "e": "Agility is the transformation driver here: teams provision resources on demand and ship experiments in days instead of waiting on procurement cycles. The other options describe cost or infrastructure details that do not shorten time to market.",
   "d": 1
  },
  {
   "id": 15,
   "t": "digital-transformation",
   "x": "A company must vacate its data center in 90 days and plans to move 200 virtual machines to AWS with as few changes as possible, deferring modernization until later. Which migration strategy fits this plan?",
   "o": [
    "Refactor",
    "Rehost",
    "Retain",
    "Repurchase"
   ],
   "a": 1,
   "e": "Rehost (lift and shift) moves servers largely as-is, which is the fastest path under a hard deadline. Refactor redesigns applications and takes far longer, repurchase replaces them with different products, and retain would leave them in the data center being vacated.",
   "d": 1
  },
  {
   "id": 16,
   "t": "digital-transformation",
   "x": "While migrating, a team moves its application servers to Amazon EC2 without modification but swaps its self-managed MySQL database for Amazon RDS to reduce administration. Which strategy describes the database change?",
   "o": [
    "Replatform",
    "Rehost",
    "Refactor",
    "Relocate"
   ],
   "a": 0,
   "e": "Replatforming ('lift, tinker, and shift') keeps the core architecture but adopts a managed service for part of the stack, such as moving a database to Amazon RDS. A rehost would change nothing about how the database is run, and a refactor would redesign the application itself.",
   "d": 1
  },
  {
   "id": 17,
   "t": "digital-transformation",
   "x": "A CIO wants a structured way to evaluate the organization's readiness for cloud adoption across business, people, and governance dimensions before a large migration. Which AWS resource serves this purpose?",
   "o": [
    "AWS Well-Architected Framework",
    "AWS Pricing Calculator",
    "AWS Cloud Adoption Framework",
    "AWS Trusted Advisor"
   ],
   "a": 2,
   "e": "The AWS CAF organizes cloud transformation guidance into perspectives spanning business, people, governance, platform, security, and operations. The Well-Architected Framework reviews individual workload architectures already in the cloud, not organizational readiness.",
   "d": 1
  },
  {
   "id": 18,
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
   "e": "Cloud adoption drives transformation by making experiments cheap to try and by putting advanced capabilities such as analytics and machine learning within reach on demand. Customers still run their own on-call and release processes, and cloud spending varies with usage rather than staying flat.",
   "d": 1,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 19,
   "t": "digital-transformation",
   "x": "A leadership team frames its transformation goal as spending engineering time on features customers see rather than on racking servers and patching operating systems. Which cloud adoption concept matches this goal?",
   "o": [
    "Trading operational expense for capital expense",
    "Consolidating workloads onto dedicated physical hosts",
    "Standardizing on a single Availability Zone to simplify operations",
    "Offloading undifferentiated heavy lifting to AWS"
   ],
   "a": 3,
   "e": "Infrastructure chores that do not set a business apart are undifferentiated heavy lifting, and handing them to AWS frees teams for product work. The expense trade runs the other direction (capital toward operational), and dedicated hosts or a single zone would not reduce maintenance effort.",
   "d": 1
  },
  {
   "id": 20,
   "t": "cloud-architecture",
   "x": "A development team wants to limit the impact that a failure in one part of an application has on the other parts. Which design approach supports this goal?",
   "o": [
    "Run every part of the application on one large instance",
    "Keep shared session state in each instance's local memory",
    "Connect the parts through a managed message queue",
    "Reference each part by a fixed private IP address"
   ],
   "a": 2,
   "e": "A queue such as Amazon SQS buffers requests between components, so a slow or failed consumer does not break the producer. Fixed instance references and locally held state tie components together, spreading failures instead of containing them.",
   "d": 1
  },
  {
   "id": 21,
   "t": "cloud-architecture",
   "x": "An operations team patches long-running EC2 instances by hand, and server configurations have drifted apart over time. Which cloud design principle addresses this problem?",
   "o": [
    "Resize the instances to larger types so fewer servers need attention",
    "Replace instances from a standard image instead of updating them in place",
    "Reserve instance capacity so the fleet stays the same for a full term",
    "Move session data to a cache so instances restart more quickly"
   ],
   "a": 1,
   "e": "Treating servers as disposable resources means terminating drifted instances and launching fresh ones from a common template such as an AMI, which keeps the fleet consistent. Larger instance types and reserved capacity change sizing and billing, not configuration drift.",
   "d": 1
  },
  {
   "id": 22,
   "t": "cloud-architecture",
   "x": "An online retailer sees traffic increase tenfold during flash sales and return to normal within a few hours. Which approach handles this pattern at the lowest cost?",
   "o": [
    "Run enough instances for peak load at all times",
    "Move the application to a larger instance type before each sale",
    "Copy the existing instances into a second Region for each event",
    "Add instances automatically during the spike and remove them afterward"
   ],
   "a": 3,
   "e": "Elastic horizontal scaling with EC2 Auto Scaling matches capacity to demand, so the retailer pays for extra instances only while the sale runs. Provisioning for peak or resizing before each event leaves capacity idle once traffic drops.",
   "d": 1
  },
  {
   "id": 23,
   "t": "cloud-architecture",
   "x": "An application adds servers during peak traffic and releases them when demand falls. Which cloud characteristic does this demonstrate?",
   "o": [
    "Resources are added and released automatically as demand rises and falls",
    "Workloads continue operating when an individual component fails",
    "New test environments can be provisioned within minutes",
    "Capacity is committed in advance in exchange for lower pricing"
   ],
   "a": 0,
   "e": "Elasticity is the ability to grow and shrink resources with demand, typically through Auto Scaling. Surviving component failure describes high availability, and fast provisioning of new environments describes agility.",
   "d": 1
  },
  {
   "id": 24,
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
   "e": "SQS queues messages between producers and consumers, and SNS fans out notifications to subscribers, so components interact without direct dependencies on each other. EBS provides block storage, Direct Connect provides private network links, and Inspector scans workloads for vulnerabilities.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 25,
   "t": "cloud-architecture",
   "x": "A web application runs on EC2 instances behind a load balancer, and users lose their shopping carts whenever scaling activity terminates an instance. What should the architect change?",
   "o": [
    "Enable sticky sessions so each user is routed to the same instance",
    "Increase the instance size so scale-in events happen less often",
    "Store session data in an external cache or database service",
    "Snapshot each instance's volume on a frequent schedule"
   ],
   "a": 2,
   "e": "Keeping instances stateless by moving session data to a shared store such as ElastiCache or DynamoDB lets any instance serve any request, so scale-in no longer discards carts. Sticky sessions still lose the cart when the pinned instance is the one that terminates.",
   "d": 1
  },
  {
   "id": 26,
   "t": "well-architected",
   "x": "Which of the following is a pillar of the AWS Well-Architected Framework?",
   "o": [
    "Scalability",
    "Sustainability",
    "Availability",
    "Elasticity"
   ],
   "a": 1,
   "e": "The six pillars are operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. Scalability, availability, and elasticity are cloud benefits and design outcomes rather than named pillars.",
   "d": 1
  },
  {
   "id": 27,
   "t": "well-architected",
   "x": "An architecture review finds test servers running around the clock and several instances sized far larger than their workloads need. Which Well-Architected pillar do these findings fall under?",
   "o": [
    "Reliability",
    "Performance efficiency",
    "Security",
    "Cost optimization"
   ],
   "a": 3,
   "e": "Idle resources and oversized instances mean the company is paying for capacity it does not use, which the cost optimization pillar addresses through rightsizing and eliminating waste. Performance efficiency concerns meeting requirements with well-chosen resource types, not reducing spend on unused ones.",
   "d": 1
  },
  {
   "id": 28,
   "t": "well-architected",
   "x": "A workload detects failed instances and replaces them without operator involvement, and the team regularly rehearses its recovery procedures. Which pillar do these practices support?",
   "o": [
    "Reliability",
    "Operational excellence",
    "Performance efficiency",
    "Cost optimization"
   ],
   "a": 0,
   "e": "Automatic recovery from failure and testing recovery procedures are design principles of the reliability pillar. Operational excellence covers running and improving workload processes, which makes it tempting, but recovering from disruption is reliability's core concern.",
   "d": 1
  },
  {
   "id": 29,
   "t": "well-architected",
   "x": "A team manages its infrastructure as code, deploys small reversible changes frequently, and refines its runbooks after every incident. Which pillar guides these practices?",
   "o": [
    "Security",
    "Reliability",
    "Operational excellence",
    "Sustainability"
   ],
   "a": 2,
   "e": "Performing operations as code, making frequent small reversible changes, and learning from operational events are design principles of operational excellence. Reliability focuses on withstanding and recovering from failures rather than on how daily operations are run and improved.",
   "d": 1
  },
  {
   "id": 30,
   "t": "well-architected",
   "x": "A team routinely tries new instance families and adopts managed serverless services so its workload keeps meeting requirements as technology evolves. Which pillar encourages this behavior?",
   "o": [
    "Cost optimization",
    "Performance efficiency",
    "Operational excellence",
    "Reliability"
   ],
   "a": 1,
   "e": "Performance efficiency promotes using computing resources efficiently as demand and technologies change, with design principles such as adopting serverless architectures and experimenting more often. Cost optimization can benefit from these choices but is centered on spending, not on selecting the best-performing resource types.",
   "d": 1
  },
  {
   "id": 31,
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
   "e": "Least-privilege access and protecting data in transit and at rest are core security pillar principles. Standby capacity supports reliability, cost allocation tags support cost optimization, and version-controlled deployments support operational excellence.",
   "d": 1,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 32,
   "t": "well-architected",
   "x": "A company wants to shrink the environmental footprint of its workloads by retiring idle capacity and choosing more efficient hardware and Regions. Which pillar addresses this goal?",
   "o": [
    "Cost optimization",
    "Operational excellence",
    "Sustainability",
    "Performance efficiency"
   ],
   "a": 2,
   "e": "The sustainability pillar focuses on minimizing the energy and environmental impact of workloads, including maximizing utilization and selecting efficient hardware. Cost savings often follow from the same actions, but the stated goal here is environmental impact rather than the bill.",
   "d": 1
  },
  {
   "id": 33,
   "t": "migration-tco",
   "x": "A company runs a large VMware environment and wants to move it to AWS as-is, keeping its existing hypervisor tooling and team skills. Which migration strategy is this?",
   "o": [
    "Relocate",
    "Refactor",
    "Repurchase",
    "Retire"
   ],
   "a": 0,
   "e": "Relocate moves an environment such as VMware to AWS without changing the platform or retraining the team. Refactoring rewrites the application, repurchasing swaps it for a different product, and retiring shuts it down.",
   "d": 1
  },
  {
   "id": 34,
   "t": "migration-tco",
   "x": "A company decommissions its self-hosted CRM system and subscribes to a cloud-based SaaS CRM product instead. Which migration strategy describes this?",
   "o": [
    "Rehost",
    "Refactor",
    "Replatform",
    "Repurchase"
   ],
   "a": 3,
   "e": "Repurchase (drop and shop) replaces an existing application with a different, typically SaaS, product. Rehost and replatform keep the same application, and refactor rewrites it.",
   "d": 1
  },
  {
   "id": 35,
   "t": "migration-tco",
   "x": "A company rewrites its monolithic order system as event-driven serverless functions to gain capabilities its current architecture cannot support. Which migration strategy is being used?",
   "o": [
    "Replatform",
    "Refactor",
    "Rehost",
    "Relocate"
   ],
   "a": 1,
   "e": "Refactoring, also called re-architecting, changes how the application is built to take advantage of cloud-native features, and it carries the highest effort of the migration strategies. Replatforming makes only targeted optimizations without altering the core architecture.",
   "d": 1
  },
  {
   "id": 36,
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
   "e": "Moving to AWS converts large capital purchases of hardware and facility costs like power and cooling into pay-as-you-go operating expense. Data transfer and running-instance charges appear on the AWS bill instead, and retained software subscriptions continue either way.",
   "d": 1,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 37,
   "t": "migration-tco",
   "x": "A migration readiness review flags a gap in staff cloud skills and training plans. Which AWS Cloud Adoption Framework perspective addresses this area?",
   "o": [
    "People",
    "Platform",
    "Security",
    "Operations"
   ],
   "a": 0,
   "e": "The CAF People perspective covers culture, organizational structure, and workforce skills development. Platform covers technology architecture, and Operations covers running workloads day to day.",
   "d": 1
  },
  {
   "id": 38,
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
   "e": "The Cloud Adoption Framework's six perspectives are business, people, governance, platform, security, and operations. Reliability, cost optimization, and sustainability are pillars of the Well-Architected Framework, a frequent point of confusion between the two frameworks.",
   "d": 1,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 39,
   "t": "shared-responsibility",
   "x": "Under the AWS shared responsibility model, which task remains an AWS responsibility no matter which service a customer uses?",
   "o": [
    "Applying security patches to guest operating systems",
    "Configuring bucket policies that restrict object access",
    "Controlling physical access to data center facilities",
    "Rotating the access keys assigned to IAM users"
   ],
   "a": 2,
   "e": "AWS is responsible for security OF the cloud, which includes the physical facilities, hardware, and global infrastructure. Guest OS patching, bucket policies, and credential rotation all sit with the customer because they involve what the customer runs and configures in the cloud.",
   "d": 2
  },
  {
   "id": 40,
   "t": "identity-iam",
   "x": "An application on an Amazon EC2 instance needs to read objects from an S3 bucket. What is the recommended way to grant this access?",
   "o": [
    "Create an IAM user for the application and store its access keys on the instance",
    "Attach an IAM role to the instance so it obtains temporary credentials",
    "Add the instance's public IP address to the bucket policy as a trusted source",
    "Sign the application in through IAM Identity Center with a permission set"
   ],
   "a": 1,
   "e": "An instance role delivers automatically rotated temporary credentials, so nothing long-lived is stored on the server. Placing IAM user access keys on the instance creates a static secret that can leak, and IAM Identity Center is designed for human workforce sign-in rather than application access.",
   "d": 2
  },
  {
   "id": 41,
   "t": "governance",
   "x": "A compliance officer needs a copy of AWS's most recent SOC 2 report to share with an external auditor. Where can this document be downloaded on demand?",
   "o": [
    "AWS Config",
    "AWS Trusted Advisor",
    "AWS Audit Manager",
    "AWS Artifact"
   ],
   "a": 3,
   "e": "AWS Artifact provides self-service access to AWS's audit artifacts, such as SOC and PCI reports, plus select agreements. AWS Audit Manager helps assess a customer's own environment against frameworks; it does not distribute AWS's third-party attestation reports.",
   "d": 2
  },
  {
   "id": 42,
   "t": "shared-responsibility",
   "x": "A vulnerability scan flags an outdated kernel on an Amazon EC2 instance running a company's web application. Under the shared responsibility model, who must remediate this finding?",
   "o": [
    "The customer, because the guest operating system is theirs to maintain",
    "The customer, but only if the instance was launched from a custom AMI",
    "AWS, because the hypervisor and host kernel are part of the managed platform",
    "AWS Support, provided the account subscribes to a Business plan"
   ],
   "a": 0,
   "e": "Anything installed inside an EC2 instance, including the operating system and its kernel, is customer-managed. AWS maintains the hypervisor and physical hosts underneath, and the choice of AMI does not transfer ongoing patch duties to AWS.",
   "d": 2
  },
  {
   "id": 43,
   "t": "identity-iam",
   "x": "A team of ten analysts joins a company, and all of them need identical permissions to the same set of AWS resources. Which approach keeps ongoing permission management simplest?",
   "o": [
    "Attach an inline policy to each analyst's IAM user individually",
    "Place the analysts' IAM users in a group that has the required policy attached",
    "Provision one IAM user with the needed policy for the whole team to sign in with",
    "Apply a service control policy to the account that lists the required actions"
   ],
   "a": 1,
   "e": "A group lets one policy attachment govern every member, so permission changes happen in a single place. Inline per-user policies multiply maintenance work, a shared sign-in destroys individual accountability, and SCPs restrict maximum permissions rather than granting any.",
   "d": 2
  },
  {
   "id": 44,
   "t": "governance",
   "x": "A security engineer wants a timeline showing how a security group's inbound rules have changed over the past six months. Which service keeps this configuration history?",
   "o": [
    "AWS CloudTrail",
    "Amazon CloudWatch",
    "AWS Config",
    "Amazon Inspector"
   ],
   "a": 2,
   "e": "AWS Config records point-in-time configuration snapshots of resources and lets you review how a setting looked at any moment in its history. CloudTrail logs the API calls that made the changes, which tells you who acted but does not reconstruct a resource's full configuration state over time.",
   "d": 2
  },
  {
   "id": 45,
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
   "e": "Customers configure access to and protection of their data, which covers bucket policies and encryption choices. The physical layer, including drive replacement, media disposal, and facility power, is secured by AWS as part of security of the cloud.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 46,
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
   "e": "AWS recommends adding MFA to the root user and using it only for the few operations that demand it, doing daily work with other identities instead. IAM permissions policies cannot limit the root user, root access keys expand rather than shrink the attack surface, and the root user is not managed through IAM Identity Center.",
   "d": 2,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 47,
   "t": "governance",
   "x": "A growing company plans to expand from one AWS account to a multi-account environment and wants the setup preconfigured with recommended guardrails from day one. Which service is designed for this?",
   "o": [
    "AWS Service Catalog",
    "AWS CloudFormation",
    "AWS Control Tower",
    "AWS Systems Manager"
   ],
   "a": 2,
   "e": "AWS Control Tower automates the creation of a landing zone: a multi-account environment built on Organizations with preventive and detective controls already applied. CloudFormation and Service Catalog can deploy templated resources, but neither establishes a governed multi-account structure on its own.",
   "d": 2
  },
  {
   "id": 48,
   "t": "shared-responsibility",
   "x": "A company migrates a self-managed PostgreSQL database from an Amazon EC2 instance to Amazon RDS. Which responsibility moves from the company to AWS as a result?",
   "o": [
    "Patching the operating system that the database engine runs on",
    "Deciding which users and applications can query the data",
    "Designing table schemas and tuning inefficient queries",
    "Classifying the sensitivity of the records stored in the tables"
   ],
   "a": 0,
   "e": "With RDS, AWS operates the underlying instance and applies OS and engine maintenance, which the company previously handled itself on EC2. Data access decisions, schema design, and data classification stay with the customer under every service model.",
   "d": 2
  },
  {
   "id": 49,
   "t": "identity-iam",
   "x": "An enterprise wants its 2,000 employees to reach AWS accounts using the credentials they already have in the corporate directory, without creating a separate IAM user for each person. Which capability supports this?",
   "o": [
    "Cross-account resource sharing with AWS RAM",
    "Service control policies applied to each member account",
    "Identity federation through IAM Identity Center",
    "Multi-factor authentication enforced on each IAM user"
   ],
   "a": 2,
   "e": "Federation lets an external identity provider, such as the corporate directory, authenticate people who then assume roles in AWS, and IAM Identity Center manages this across accounts. SCPs and MFA harden access but still presuppose existing identities, and AWS RAM shares resources rather than sign-ins.",
   "d": 2
  },
  {
   "id": 50,
   "t": "governance",
   "x": "A healthcare company must show a regulator that its patient portal hosted on AWS meets industry requirements. Which statement reflects how compliance works in this situation?",
   "o": [
    "Workloads inherit the compliance status of the AWS services they run on, so no separate assessment is needed",
    "AWS attests to the infrastructure, while the company must show its own workload handles data compliantly",
    "The regulator must obtain permission from AWS before it can audit a workload hosted in an AWS Region",
    "Responsibility for meeting the requirements transfers to AWS once the company signs the applicable agreement"
   ],
   "a": 1,
   "e": "Compliance is shared: AWS provides attestations for the cloud infrastructure, and customers remain accountable for configuring and operating their workloads to meet the applicable requirements. Running on certified infrastructure does not by itself make an application compliant.",
   "d": 2
  },
  {
   "id": 51,
   "t": "shared-responsibility",
   "x": "A team rebuilds a reporting job as an AWS Lambda function. Which item is still on the team's side of the shared responsibility model?",
   "o": [
    "Patching the language runtime that executes the function",
    "Maintaining the servers that host function invocations",
    "Isolating the function's compute environment from other tenants",
    "Granting the function only the permissions its code needs"
   ],
   "a": 3,
   "e": "Even in serverless designs, customers own their code, its data, and the IAM permissions attached to it. AWS manages the runtime patching, fleet capacity, and tenant isolation that come with operating the Lambda service.",
   "d": 2
  },
  {
   "id": 52,
   "t": "identity-iam",
   "x": "An administrator attaches a service control policy to an organizational unit that denies the use of a specific AWS Region. What happens in the member accounts under that OU?",
   "o": [
    "No principal in those accounts can act in that Region, even ones with administrator permissions",
    "IAM users keep their Region access until each account's administrator accepts the policy",
    "Root users of the member accounts are exempt, while other identities lose access to the Region",
    "Existing resources in that Region are removed, and new ones are prevented from launching"
   ],
   "a": 0,
   "e": "SCPs are guardrails that cap what any identity in a member account can do, including account administrators and the member account's root user. They do not grant access, require acceptance, or remove resources that already exist.",
   "d": 2
  },
  {
   "id": 53,
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
   "e": "Control Tower builds on Organizations to standardize account creation through Account Factory and to enforce both preventive and detective controls across enrolled accounts. Threat detection, OS patching, and audit-report distribution belong to GuardDuty, Systems Manager, and AWS Artifact respectively.",
   "d": 2,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 54,
   "t": "shared-responsibility",
   "x": "Which control is described as shared, meaning AWS applies it to the infrastructure while customers apply it to their own layer?",
   "o": [
    "Physical and environmental controls",
    "Client-side data encryption",
    "Edge location hardware maintenance",
    "Patch management"
   ],
   "a": 3,
   "e": "Patch management is a shared control: AWS patches the infrastructure and managed platforms, while customers patch their guest operating systems and applications. Physical and edge hardware controls belong wholly to AWS, and client-side encryption is wholly the customer's.",
   "d": 2
  },
  {
   "id": 55,
   "t": "identity-iam",
   "x": "What is an IAM role in AWS identity management?",
   "o": [
    "A collection of IAM users that receive permissions through a single attachment",
    "A JSON document that lists allowed and denied actions on specified resources",
    "An assumable identity that provides temporary credentials for a session",
    "An organization-wide guardrail that limits the maximum permissions in an account"
   ],
   "a": 2,
   "e": "A role is an identity that trusted users, applications, or AWS services assume to receive short-lived credentials. Groups gather users, policies are the JSON permission documents themselves, and SCPs are organizational guardrails rather than identities.",
   "d": 2
  },
  {
   "id": 56,
   "t": "governance",
   "x": "A governance team wants to be alerted whenever an S3 bucket in the account drifts from the required setting that blocks public access. Which service continuously evaluates resources against rules like this?",
   "o": [
    "AWS CloudTrail",
    "Amazon Macie",
    "AWS Config",
    "AWS Artifact"
   ],
   "a": 2,
   "e": "AWS Config rules continuously evaluate resource configurations against desired settings and flag noncompliant resources. Macie discovers sensitive data in S3 rather than checking configuration rules, and CloudTrail records API activity without judging compliance.",
   "d": 2
  },
  {
   "id": 57,
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
   "e": "AWS secures everything from the hypervisor down, including the virtualization software and the physical data centers. Guest OS updates, security group rules, and application credentials are configuration inside the cloud, which the customer controls.",
   "d": 2,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 58,
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
   "e": "Least-privilege access and MFA for privileged users are core IAM recommendations. A shared IAM user removes individual accountability, root access keys should be deleted rather than kept on a rotation schedule, and per-user policy attachment scales worse than groups without adding security.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 59,
   "t": "governance",
   "x": "A company already manages several accounts with AWS Organizations. What additional value would adopting AWS Control Tower bring?",
   "o": [
    "An orchestrated landing zone with prebuilt controls and a governance dashboard",
    "A lower combined bill through volume discounts across the accounts",
    "The ability to attach service control policies to organizational units",
    "Programmatic creation of new member accounts through an API call"
   ],
   "a": 0,
   "e": "Control Tower layers opinionated governance on top of Organizations: an automated landing zone, prebuilt preventive and detective controls, and a dashboard showing compliance across enrolled accounts. Consolidated billing discounts, SCP attachment, and account-creation APIs are already available from Organizations alone.",
   "d": 2
  },
  {
   "id": 60,
   "t": "shared-responsibility",
   "x": "As a company adopts services ranging from EC2 to fully managed offerings like DynamoDB, which responsibility stays with the company across all of them?",
   "o": [
    "Replacing failed hardware that the services run on",
    "Applying database engine updates for the managed offerings",
    "Operating the network fabric that connects Availability Zones",
    "Managing who can access the data the services store"
   ],
   "a": 3,
   "e": "Customers retain ownership of their data and control of who may access it under every service model, from IaaS to fully managed. Hardware replacement, managed engine maintenance, and inter-AZ networking are AWS responsibilities regardless of service type.",
   "d": 2
  },
  {
   "id": 61,
   "t": "identity-iam",
   "x": "A security policy requires that signing in to the AWS Management Console involve both a password and a one-time code from a device the user carries. Which IAM feature satisfies this?",
   "o": [
    "A stricter password policy",
    "Multi-factor authentication",
    "Access key rotation",
    "Permissions boundaries"
   ],
   "a": 1,
   "e": "MFA combines something the user knows, the password, with something the user has, such as a hardware token or authenticator app. Password policies only strengthen the knowledge factor, while key rotation and permissions boundaries govern programmatic credentials and permission limits rather than sign-in factors.",
   "d": 2
  },
  {
   "id": 62,
   "t": "governance",
   "x": "In AWS Control Tower, what distinguishes a preventive control from a detective control?",
   "o": [
    "Preventive controls monitor activity in CloudTrail logs, while detective controls block noncompliant API calls",
    "Preventive controls apply only in the management account, while detective controls run in member accounts",
    "Preventive controls come with paid support plans, while detective controls are included for every account",
    "Preventive controls block disallowed actions, while detective controls flag resources that drift out of compliance"
   ],
   "a": 3,
   "e": "Preventive controls, implemented largely through service control policies, keep disallowed actions from happening at all, while detective controls monitor for and surface noncompliance after resources exist. Neither category is scoped by account type or tied to a support plan.",
   "d": 2
  },
  {
   "id": 63,
   "t": "security-services",
   "x": "A security team wants continuous monitoring that analyzes VPC Flow Logs, DNS query logs, and account activity to detect compromised EC2 instances and unusual API calls. Which service meets this need?",
   "o": [
    "Amazon Inspector",
    "Amazon Macie",
    "Amazon GuardDuty",
    "AWS Shield"
   ],
   "a": 2,
   "e": "GuardDuty is a threat detection service that continuously analyzes VPC Flow Logs, DNS logs, and CloudTrail events to flag malicious or anomalous behavior. Inspector looks for software vulnerabilities in workloads rather than analyzing activity logs for active threats.",
   "d": 2
  },
  {
   "id": 64,
   "t": "identity-iam",
   "x": "A new financial analyst needs to view reports stored in a single S3 bucket and nothing else. Which permissions approach follows the principle of least privilege?",
   "o": [
    "A policy that allows read actions on all S3 buckets",
    "A policy that allows read actions on that specific bucket",
    "A policy that allows full S3 actions on that specific bucket",
    "The AWS managed AdministratorAccess policy"
   ],
   "a": 1,
   "e": "Least privilege means granting only the actions and resources a task requires, which here is read access to one bucket. Widening the resource scope to every bucket, or adding write and delete actions, exceeds what the analyst's job needs.",
   "d": 2
  },
  {
   "id": 65,
   "t": "security-services",
   "x": "Before a compliance review, a team must identify EC2 instances and container images that contain software packages with known vulnerabilities. Which service performs this assessment automatically?",
   "o": [
    "Amazon GuardDuty",
    "Amazon Inspector",
    "AWS Security Hub",
    "AWS CloudTrail"
   ],
   "a": 1,
   "e": "Inspector continuously scans EC2 instances and container images for known software vulnerabilities and unintended network exposure. GuardDuty detects active threats by analyzing logs, so it would not report an unpatched package that no one has exploited yet.",
   "d": 2
  },
  {
   "id": 66,
   "t": "shared-responsibility",
   "x": "Which task is AWS responsible for under the shared responsibility model?",
   "o": [
    "Maintaining the physical network equipment inside its data centers",
    "Setting bucket policies that limit access to objects in Amazon S3",
    "Rotating the credentials an application uses to reach its database",
    "Choosing which data is encrypted before being uploaded"
   ],
   "a": 0,
   "e": "AWS secures the infrastructure that runs cloud services, including facilities, hardware, and physical networking. Access policies, credential management, and decisions about encrypting content all involve security in the cloud, so they stay with the customer.",
   "d": 2
  },
  {
   "id": 67,
   "t": "identity-iam",
   "x": "An AWS Lambda function must write records to an Amazon DynamoDB table. What is the recommended way to grant the function this access?",
   "o": [
    "Embed an IAM user’s access keys in the function’s environment variables",
    "Make the table publicly writable so no credentials are needed",
    "Assign the function an execution role with the required DynamoDB permissions",
    "Use the account root user’s credentials inside the code"
   ],
   "a": 2,
   "e": "Lambda execution roles supply temporary, automatically rotated credentials scoped to what the function needs. Embedded keys and root credentials are long-lived secrets waiting to leak, and a public table removes access control entirely.",
   "d": 2
  },
  {
   "id": 68,
   "t": "security-services",
   "x": "Which capability is included with AWS Shield Standard for every AWS customer?",
   "o": [
    "Rule-based filtering of web requests for SQL injection patterns",
    "Vulnerability scanning of internet-facing EC2 instances",
    "Access to a specialized team during severe attack events",
    "Automatic defense against common network and transport layer DDoS attacks"
   ],
   "a": 3,
   "e": "Shield Standard is enabled automatically at no extra cost and mitigates the most common layer 3 and layer 4 DDoS attacks. The Shield Response Team requires a Shield Advanced subscription, and filtering individual web requests is the job of AWS WAF.",
   "d": 2
  },
  {
   "id": 69,
   "t": "shared-responsibility",
   "x": "A team moves its containers from self-managed Amazon EC2 hosts to AWS Fargate. Which responsibility shifts from the team to AWS after the move?",
   "o": [
    "Choosing the container images that tasks run",
    "Defining CPU and memory sizes for each task",
    "Provisioning and patching the servers that run the containers",
    "Managing IAM permissions for the tasks"
   ],
   "a": 2,
   "e": "Fargate is serverless container compute: AWS owns the underlying hosts, including provisioning and patching. The team still owns its images, task sizing, and access control.",
   "d": 2
  },
  {
   "id": 70,
   "t": "identity-iam",
   "x": "A company has just created a new AWS account. Which practices protect the account's root user? (Select THREE.)",
   "o": [
    "Reserve the root user for tasks that specifically require it",
    "Set a strong root password and skip MFA, since the root user is rarely used",
    "Enable multi-factor authentication for the root user",
    "Delete or deactivate any root user access keys",
    "Sign in as the root user for day-to-day resource administration"
   ],
   "a": 0,
   "e": "Root protections center on adding MFA, removing long-lived access keys, and using root only for the few tasks that demand it. Sharing the password widely or signing in with root for routine work expands the damage possible if those credentials are exposed.",
   "d": 2,
   "as": [
    0,
    2,
    3
   ]
  },
  {
   "id": 71,
   "t": "security-services",
   "x": "An online retailer wants enhanced DDoS mitigation with attack visibility for its public site, and it must also block requests to its login page that match known bad-bot signatures. Which services should it use together? (Select TWO.)",
   "o": [
    "Amazon Inspector",
    "AWS Shield Advanced",
    "Amazon Macie",
    "AWS WAF",
    "AWS Key Management Service"
   ],
   "a": 1,
   "e": "Shield Advanced adds expanded DDoS mitigation, attack diagnostics, and response support beyond the free standard tier, while WAF blocks web requests that match rules such as bot signatures. Inspector and Macie find vulnerabilities and sensitive data; neither one filters or absorbs attack traffic.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 72,
   "t": "shared-responsibility",
   "x": "No matter which AWS service a company adopts, which security responsibility always stays with the company?",
   "o": [
    "Patching the hypervisors that host workloads",
    "Managing access to its own data and content",
    "Maintaining the hardware behind the service",
    "Securing the buildings where servers operate"
   ],
   "a": 1,
   "e": "Customers retain ownership of their data in every service model, including deciding who may access it, from EC2 through fully managed offerings. Hypervisors, hardware, and physical facilities are handled by AWS in all cases.",
   "d": 2
  },
  {
   "id": 73,
   "t": "identity-iam",
   "x": "What does enabling multi-factor authentication add to an IAM sign-in?",
   "o": [
    "A second verification step beyond the password",
    "Automatic rotation of the user's password",
    "Encryption of the user's stored credentials",
    "A restriction on which IP addresses can sign in"
   ],
   "a": 0,
   "e": "MFA requires something the user has, such as a code from a device, in addition to something the user knows. It does not rotate passwords or encrypt credentials; it adds another factor an attacker would also need to steal.",
   "d": 2
  },
  {
   "id": 74,
   "t": "security-services",
   "x": "Which service uses machine learning to discover sensitive data, such as personally identifiable information, stored in Amazon S3 buckets?",
   "o": [
    "Amazon Macie",
    "Amazon GuardDuty",
    "AWS Config",
    "Amazon Inspector"
   ],
   "a": 0,
   "e": "Macie automatically examines S3 objects to find and report sensitive data such as PII. GuardDuty is the tempting mix-up, but it monitors logs for threat activity and never inspects the contents of stored objects.",
   "d": 2
  },
  {
   "id": 75,
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
   "e": "Server-side encryption for S3 and EBS volume encryption both protect stored data, which is what at-rest encryption means. TLS protects data while it moves over the network, and GuardDuty and CloudTrail detect threats and record activity without encrypting anything.",
   "d": 2,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 76,
   "t": "identity-iam",
   "x": "Fifty users already belong to an IAM group for the analytics team. The whole team now also needs access to a new service. What is the least-effort way to grant it?",
   "o": [
    "Attach the new policy to each user individually",
    "Recreate every user with an updated inline policy",
    "Attach the additional policy to the existing group",
    "Share one privileged IAM user for the new service"
   ],
   "a": 2,
   "e": "Policies attached to a group apply to every member at once, so one attachment updates all fifty users. Per-user attachments multiply effort, and shared credentials destroy accountability.",
   "d": 2
  },
  {
   "id": 77,
   "t": "security-services",
   "x": "A company wants a managed service for creating and controlling the encryption material that integrated services such as Amazon S3 and Amazon EBS use to protect stored data. Which service should it choose?",
   "o": [
    "AWS Secrets Manager",
    "AWS Certificate Manager",
    "AWS Key Management Service",
    "Amazon Macie"
   ],
   "a": 2,
   "e": "KMS creates and manages the cryptographic keys that many AWS services use for server-side encryption. Secrets Manager stores and rotates credentials rather than supplying keys to other services, and ACM handles TLS certificates for encrypting connections. In other words: AWS KMS.",
   "d": 2
  },
  {
   "id": 78,
   "t": "shared-responsibility",
   "x": "A company runs a public web application behind an Application Load Balancer. Which configuration protects customer data while it travels between users' browsers and the application?",
   "o": [
    "Applying default encryption to the EBS volumes on the web servers",
    "Enabling versioning on the S3 bucket that stores uploaded files",
    "Adding AWS Shield Advanced protection to the load balancer",
    "Serving traffic over HTTPS with a certificate from AWS Certificate Manager"
   ],
   "a": 3,
   "e": "HTTPS uses TLS to encrypt data in transit between clients and the application, and ACM supplies and renews the certificates that make this possible. Volume encryption is the tempting distractor, but it protects data at rest, not data crossing the network.",
   "d": 2
  },
  {
   "id": 79,
   "t": "identity-iam",
   "x": "A startup’s consumer mobile app needs sign-up and sign-in for millions of end customers, including social identity providers such as Google and Apple. Which service is designed for this?",
   "o": [
    "Amazon Cognito",
    "AWS IAM Identity Center",
    "AWS Directory Service",
    "AWS Organizations"
   ],
   "a": 0,
   "e": "Cognito handles customer-facing identity: sign-up, sign-in, and federation with social providers at consumer scale. IAM Identity Center is for workforce access to AWS accounts, not app customers.",
   "d": 2
  },
  {
   "id": 80,
   "t": "security-services",
   "x": "A security operations team reviews findings from GuardDuty, Inspector, and Macie in three separate consoles. They want one place that collects these findings and scores the environment against recognized benchmarks. Which service provides this?",
   "o": [
    "AWS Trusted Advisor",
    "AWS Security Hub",
    "Amazon Detective",
    "AWS Artifact"
   ],
   "a": 1,
   "e": "Security Hub aggregates findings from AWS security services into a single view and runs automated checks against standards such as the CIS benchmarks. Trusted Advisor offers account-level best-practice checks but does not collect findings from other security tools.",
   "d": 2
  },
  {
   "id": 81,
   "t": "shared-responsibility",
   "x": "A company refactors an application from EC2 instances to AWS Lambda functions. Which task that the company previously handled becomes an AWS responsibility?",
   "o": [
    "Patching the operating system where the code runs",
    "Writing and testing the function code",
    "Assigning execution permissions to each function",
    "Classifying the data the functions process"
   ],
   "a": 0,
   "e": "With Lambda, AWS manages the underlying compute environment, including operating system and runtime patching. Code quality, IAM permissions for each function, and data classification stay with the customer in every service model.",
   "d": 2
  },
  {
   "id": 82,
   "t": "identity-iam",
   "x": "An application in a development account needs temporary access to read a DynamoDB table in the production account. Which approach should the team use?",
   "o": [
    "Create an IAM role in the production account for the application to assume",
    "Create an IAM user in the production account and distribute its access keys",
    "Store the production administrator credentials in the development account",
    "Add the development team's users to an IAM group in the production account"
   ],
   "a": 0,
   "e": "Cross-account access is granted by creating a role in the account that owns the resource and letting the other account assume it, which yields short-lived credentials. Distributing access keys or admin credentials creates standing secrets that must be rotated and can leak, and groups cannot contain users from another account.",
   "d": 2
  },
  {
   "id": 83,
   "t": "security-services",
   "x": "During an audit, a company must show which IAM identity deleted a production database table, when the call was made, and from which source IP address. Which service records this information?",
   "o": [
    "Amazon CloudWatch",
    "AWS Config",
    "Amazon GuardDuty",
    "AWS CloudTrail"
   ],
   "a": 3,
   "e": "CloudTrail logs API activity across an account, including the caller identity, timestamp, and source IP, which makes it the record of who did what. Config is the close distractor because it tracks how resource configurations change over time, but the API-call audit trail itself comes from CloudTrail.",
   "d": 2
  },
  {
   "id": 84,
   "t": "shared-responsibility",
   "x": "In the shared responsibility model, which control is a shared control, where AWS provides it for the infrastructure and the customer must also provide it for their own use of the services?",
   "o": [
    "Physical facility security",
    "Customer data classification",
    "Awareness and training",
    "Edge location hardware upkeep"
   ],
   "a": 2,
   "e": "Awareness and training is a shared control: AWS trains its own employees on the infrastructure, and the customer must train its staff on the workloads it builds. Facility and hardware controls are inherited from AWS, and data classification is customer-only.",
   "d": 2
  },
  {
   "id": 85,
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
   "e": "Least privilege means granting only what a task needs and trimming access as needs change, so tightly scoped policies and removal of unused permissions both qualify. Broad or frozen permission sets quietly accumulate unnecessary access over time.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 86,
   "t": "global-infrastructure",
   "x": "Which statement describes an Availability Zone within the AWS global infrastructure?",
   "o": [
    "A geographic area that contains several independent AWS Regions",
    "A logically isolated section of a network defined inside a VPC",
    "One or more discrete data centers with independent power inside a Region",
    "A worldwide set of caching endpoints used for content delivery"
   ],
   "a": 2,
   "e": "An Availability Zone consists of one or more discrete data centers with independent power, cooling, and networking inside a Region. Regions contain Availability Zones, not the reverse, and the caching-endpoint description refers to edge locations.",
   "d": 3
  },
  {
   "id": 87,
   "t": "global-infrastructure",
   "x": "A hospital group in Germany is legally required to keep patient records inside the country. When the group selects an AWS Region for its records system, which factor settles the decision?",
   "o": [
    "Whether the Region offers the lowest On-Demand compute prices",
    "Whether the Region keeps stored data within the required jurisdiction",
    "Whether the Region sits closest to the company's development team",
    "Whether the Region was among the most recently opened by AWS"
   ],
   "a": 1,
   "e": "When a law dictates where data must live, compliance drives Region choice: data placed in a Region stays there unless the customer replicates it elsewhere, so picking a Region inside Germany satisfies the mandate. Price and team proximity are valid selection factors, but neither can override a legal residency requirement.",
   "d": 3
  },
  {
   "id": 88,
   "t": "global-infrastructure",
   "x": "A news site stores article images in an S3 bucket in us-east-1. Readers in Australia and India report slow image loading. Which service speeds up delivery by serving the images from locations near the readers?",
   "o": [
    "AWS Direct Connect",
    "Amazon ElastiCache",
    "AWS Global Accelerator",
    "Amazon CloudFront"
   ],
   "a": 3,
   "e": "CloudFront copies the images to edge locations around the world, so distant readers fetch them from a nearby point of presence instead of us-east-1. Global Accelerator improves routing onto the AWS backbone but does not store content at the edge, and ElastiCache speeds up database reads inside a Region rather than global delivery.",
   "d": 3
  },
  {
   "id": 89,
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
   "e": "Every Region contains multiple isolated Availability Zones, and AWS operates hundreds of edge locations, far outnumbering its Regions. An Availability Zone can span one or more data centers, each zone has independent power and cooling, and inter-Region traffic rides the private AWS global backbone.",
   "d": 3,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 90,
   "t": "compute",
   "x": "A small team wants to launch a Node.js web app by uploading its code and having capacity provisioning, load balancing, and health monitoring handled automatically, while keeping the ability to log in to the underlying instances. Which service should the team use?",
   "o": [
    "AWS Elastic Beanstalk",
    "AWS CloudFormation",
    "AWS CodeDeploy",
    "Amazon Lightsail"
   ],
   "a": 0,
   "e": "Elastic Beanstalk takes uploaded code and manages provisioning, load balancing, scaling, and health monitoring while leaving the underlying EC2 instances visible and accessible. CloudFormation requires the team to author infrastructure templates itself, and CodeDeploy only ships code onto servers that already exist.",
   "d": 3
  },
  {
   "id": 91,
   "t": "compute",
   "x": "A freelance designer with little cloud experience wants to host a WordPress portfolio on a small virtual server with bundled storage, networking, and a predictable monthly price. Which service matches this need?",
   "o": [
    "Amazon EC2",
    "AWS Elastic Beanstalk",
    "Amazon Lightsail",
    "AWS Amplify"
   ],
   "a": 2,
   "e": "Lightsail offers preconfigured virtual private servers, including a WordPress blueprint, with storage, networking, and a flat monthly price aimed at users new to AWS. EC2 can run the same site but requires assembling networking, storage, and pricing choices piece by piece.",
   "d": 3
  },
  {
   "id": 92,
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
   "e": "Lambda executes short event-driven code without server management, and EC2 gives the customer full administrative control over each instance's operating system. Fargate deliberately hides the underlying servers, Lightsail targets simple workloads rather than cluster orchestration, and edge caching is CloudFront's job.",
   "d": 3,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 93,
   "t": "compute",
   "x": "A rendering job needs a GPU and runs continuously for about six hours each night with steady resource usage. Which compute service is the appropriate choice?",
   "o": [
    "AWS Lambda",
    "Amazon EC2",
    "AWS Fargate",
    "Amazon Lightsail"
   ],
   "a": 1,
   "e": "EC2 provides GPU-equipped instance families and places no cap on how long a job runs, which suits a sustained six-hour workload. Lambda limits each invocation to 15 minutes and offers no GPUs, and Lightsail's fixed bundles are not built for accelerated rendering.",
   "d": 3
  },
  {
   "id": 94,
   "t": "ec2",
   "x": "A genomics lab runs analysis jobs that checkpoint constantly and can be interrupted and restarted without losing progress. The lab wants the deepest possible discount on EC2 capacity. Which purchasing option fits?",
   "o": [
    "Spot Instances",
    "On-Demand Instances",
    "Standard Reserved Instances",
    "Dedicated Hosts"
   ],
   "a": 0,
   "e": "Spot Instances sell spare EC2 capacity at discounts of up to 90 percent, with the trade-off that AWS can reclaim the capacity on short notice, which interruption-tolerant jobs absorb easily. Reserved Instances discount steady long-term usage through a one- or three-year commitment rather than rewarding interruptibility.",
   "d": 3
  },
  {
   "id": 95,
   "t": "ec2",
   "x": "An internal inventory application will run on the same EC2 instance type around the clock for at least three years. Which purchasing approach produces the lowest cost for this usage pattern?",
   "o": [
    "On-Demand Instances",
    "Spot Instances",
    "Dedicated Hosts",
    "Standard Reserved Instances"
   ],
   "a": 3,
   "e": "A steady, predictable workload with a multi-year horizon is exactly what Reserved Instances discount, and three-year terms deliver the largest savings over On-Demand rates. Spot pricing is cheaper per hour but the capacity can be reclaimed at any time, which an always-on application cannot tolerate.",
   "d": 3
  },
  {
   "id": 96,
   "t": "ec2",
   "x": "Which component supplies the operating system and preinstalled software that an EC2 instance starts from when it launches?",
   "o": [
    "An instance type",
    "An Amazon Machine Image",
    "An EC2 launch template",
    "An Amazon EBS snapshot"
   ],
   "a": 1,
   "e": "The AMI is the boot package containing the operating system and any preinstalled software for a new instance. A launch template bundles launch settings and merely references an AMI, while the instance type defines only CPU, memory, and network capacity.",
   "d": 3
  },
  {
   "id": 97,
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
   "e": "EC2 Auto Scaling grows and shrinks the fleet to match demand and terminates and replaces instances that become unhealthy. Spreading requests across instances is Elastic Load Balancing's role, and scheduled OS patching belongs to Systems Manager Patch Manager.",
   "d": 3,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 98,
   "t": "containers",
   "x": "A platform team runs Kubernetes on-premises and wants to move its clusters to AWS while continuing to use its existing manifests, kubectl workflows, and add-ons. Which service should the team evaluate first?",
   "o": [
    "Amazon EKS",
    "Amazon ECS",
    "AWS Fargate",
    "AWS Elastic Beanstalk"
   ],
   "a": 0,
   "e": "EKS runs upstream Kubernetes with a managed control plane, so existing manifests and tooling carry over directly. ECS is AWS's own orchestrator with a different task-definition model, and Fargate is a way to run containers without managing servers rather than an orchestrator itself.",
   "d": 3
  },
  {
   "id": 99,
   "t": "containers",
   "x": "A startup runs its Amazon ECS cluster on the EC2 launch type and wants to stop patching, scaling, and right-sizing the cluster's instances while keeping the same containers and task definitions. What should the startup do?",
   "o": [
    "Resize the cluster to use fewer, larger EC2 instances",
    "Migrate the workload to Amazon EKS on EC2 worker nodes",
    "Move the tasks to the Fargate launch type",
    "Push the container images to Amazon ECR"
   ],
   "a": 2,
   "e": "Fargate runs ECS tasks on capacity that AWS provisions, patches, and scales, so the instance-management work disappears while the task definitions stay largely the same. Moving to EKS on EC2 swaps orchestrators but still leaves worker nodes for the team to maintain.",
   "d": 3
  },
  {
   "id": 100,
   "t": "containers",
   "x": "A build pipeline needs a managed AWS service to hold versioned Docker images so that Amazon EKS clusters can pull them at deployment time. Which service provides this?",
   "o": [
    "AWS CodeArtifact",
    "Amazon ECS",
    "Amazon S3",
    "Amazon Elastic Container Registry"
   ],
   "a": 3,
   "e": "ECR stores, versions, and serves container images to ECS, EKS, and other runtimes, with tight IAM integration for push and pull permissions. CodeArtifact holds language package dependencies such as npm and Maven artifacts, and ECS runs containers rather than storing their images.",
   "d": 3
  },
  {
   "id": 101,
   "t": "serverless",
   "x": "Each time a customer uploads a photo to an S3 bucket, a company must generate a thumbnail within a few seconds and wants to pay only for the compute time each generation consumes. Which service is built for this pattern?",
   "o": [
    "Amazon EC2",
    "AWS Lambda",
    "AWS Elastic Beanstalk",
    "Amazon EKS"
   ],
   "a": 1,
   "e": "Lambda runs code directly in response to S3 events and bills per millisecond of execution, so nothing is charged between uploads. An EC2 or Beanstalk environment keeps instances running, and billing, even when no photos arrive.",
   "d": 3
  },
  {
   "id": 102,
   "t": "serverless",
   "x": "A data team is evaluating AWS Lambda for an overnight file-transformation job. Which characteristic of the job would make Lambda unsuitable?",
   "o": [
    "A single run takes roughly four hours to finish",
    "The transformation code is written in Python",
    "The job must start automatically on a schedule",
    "The input files are read from Amazon S3"
   ],
   "a": 0,
   "e": "A Lambda invocation can run for at most 15 minutes, so a four-hour single run exceeds the limit and points toward EC2, ECS, or AWS Batch instead. Python is a supported runtime, scheduled starts work through Amazon EventBridge, and reading from S3 is a routine integration.",
   "d": 3
  },
  {
   "id": 103,
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
   "e": "Lambda and Fargate are serverless: AWS provisions, patches, and scales the underlying capacity invisibly. Elastic Beanstalk and Lightsail simplify setup but still place EC2 instances or virtual servers in the customer's care, and EC2 is entirely customer-managed.",
   "d": 3,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 104,
   "t": "storage",
   "x": "A media company keeps quarterly compliance reports in Amazon S3. The files are read only a few times per year, must be available within milliseconds when requested, and must survive the loss of an Availability Zone. Which storage class fits at the lowest cost?",
   "o": [
    "S3 Standard",
    "S3 One Zone-Infrequent Access",
    "S3 Glacier Flexible Retrieval",
    "S3 Standard-Infrequent Access"
   ],
   "a": 3,
   "e": "S3 Standard-IA offers millisecond access at a lower storage price for infrequently read data and replicates objects across multiple Availability Zones. One Zone-IA is cheaper still but stores data in a single AZ, and Glacier Flexible Retrieval takes minutes to hours to return objects.",
   "d": 3
  },
  {
   "id": 105,
   "t": "storage",
   "x": "A hospital must retain medical imaging archives for seven years. After 90 days the images are almost never viewed, and when an auditor requests one, a turnaround of up to 12 hours is acceptable. Which lifecycle transition target minimizes storage cost?",
   "o": [
    "S3 Standard-Infrequent Access",
    "S3 Intelligent-Tiering",
    "S3 Glacier Deep Archive",
    "S3 Glacier Flexible Retrieval"
   ],
   "a": 2,
   "e": "Glacier Deep Archive is the lowest-priced S3 class, and its standard retrieval completes within 12 hours, which matches the stated tolerance. Glacier Flexible Retrieval restores faster but costs more per gigabyte, so its speed is paid for without being needed.",
   "d": 3
  },
  {
   "id": 106,
   "t": "storage",
   "x": "A rendering farm of Linux EC2 instances must read and write the same project directory at the same time using standard file system paths. Which service provides this shared storage?",
   "o": [
    "Amazon EBS",
    "Amazon EFS",
    "EC2 instance store",
    "Amazon S3"
   ],
   "a": 1,
   "e": "EFS is a managed NFS file system that many instances can mount and use concurrently with normal file paths. EBS is block storage that attaches to an instance within one Availability Zone, and S3 is object storage without a native file system interface.",
   "d": 3
  },
  {
   "id": 107,
   "t": "storage",
   "x": "An analytics job writes large temporary scratch files that need very fast disk throughput. The data is regenerated from source on every run and can be discarded if the instance is stopped. Which storage option matches this workload?",
   "o": [
    "Amazon EBS Provisioned IOPS volume",
    "Amazon EFS",
    "Amazon S3 Standard",
    "EC2 instance store"
   ],
   "a": 3,
   "e": "Instance store is disk physically attached to the host, delivering high throughput for temporary data, and its contents do not persist when the instance stops or terminates. A Provisioned IOPS EBS volume persists data durably, which adds cost the disposable scratch files do not need.",
   "d": 3
  },
  {
   "id": 108,
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
   "e": "EBS replicates volume data within a single Availability Zone, and snapshots stored in S3 let you recreate a volume in another AZ. A volume can only attach to instances in its own AZ, data persists across reboots, and serving objects over HTTPS describes S3, not block storage.",
   "d": 3,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 109,
   "t": "databases",
   "x": "A SaaS provider needs a MySQL-compatible relational database with higher throughput than standard MySQL, storage that grows automatically, and six copies of data kept across three Availability Zones. Which service provides this?",
   "o": [
    "Amazon Aurora",
    "Amazon RDS for MySQL",
    "Amazon DynamoDB",
    "Amazon Redshift"
   ],
   "a": 0,
   "e": "Aurora offers MySQL and PostgreSQL compatibility with substantially higher throughput, auto-scaling storage, and six-way replication across three Availability Zones. RDS for MySQL is also managed but runs standard MySQL storage and replication rather than Aurora's distributed storage layer.",
   "d": 3
  },
  {
   "id": 110,
   "t": "databases",
   "x": "A mobile game stores millions of small player-session records and needs single-digit millisecond reads and writes that scale automatically as the player count grows. Which database is designed for this profile?",
   "o": [
    "Amazon Aurora",
    "Amazon DynamoDB",
    "Amazon Neptune",
    "Amazon Redshift"
   ],
   "a": 1,
   "e": "DynamoDB is a serverless key-value database built for consistent single-digit millisecond performance at virtually any request volume. Aurora is a relational engine, Neptune targets graph relationships, and Redshift is tuned for analytical queries rather than high-volume key lookups.",
   "d": 3
  },
  {
   "id": 111,
   "t": "databases",
   "x": "An insurance firm wants business analysts to run complex SQL aggregations across years of claims history totaling hundreds of terabytes, feeding BI dashboards. Which service targets this workload?",
   "o": [
    "Amazon RDS for PostgreSQL",
    "Amazon DynamoDB",
    "Amazon ElastiCache",
    "Amazon Redshift"
   ],
   "a": 3,
   "e": "Redshift is a columnar data warehouse built for analytical SQL over very large datasets and integrates with BI tools. RDS for PostgreSQL handles transactional relational workloads well but is not designed for warehouse-scale aggregation across hundreds of terabytes.",
   "d": 3
  },
  {
   "id": 112,
   "t": "databases",
   "x": "During traffic spikes, an e-commerce site's product pages repeatedly issue the same reads against a relational product database, and page latency is rising. The team wants an in-memory layer that serves these repeated reads in microseconds. Which service fits?",
   "o": [
    "Amazon ElastiCache",
    "Amazon DynamoDB Accelerator",
    "Amazon RDS read replicas",
    "Amazon Redshift"
   ],
   "a": 0,
   "e": "ElastiCache provides managed Redis or Memcached caching in front of a database, serving repeated reads from memory at microsecond speed. Read replicas spread query load but still answer from disk-backed storage at millisecond latency, and DAX only accelerates DynamoDB tables.",
   "d": 3
  },
  {
   "id": 113,
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
   "e": "RDS is a managed service, so AWS takes over the infrastructure layer, including host hardware and engine patching. Schema design, query tuning, database user management, and data-classification decisions remain customer responsibilities under the shared responsibility model.",
   "d": 3,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 114,
   "t": "networking",
   "x": "An administrator adds an inbound rule allowing TCP 443 to a web server's security group but defines no outbound rule for the responses. Clients connect successfully and receive responses. Why does the return traffic flow?",
   "o": [
    "Network ACLs generate matching outbound entries when inbound rules change",
    "The internet gateway opens response ports for each established session",
    "Security groups are stateful, so replies to allowed connections are permitted",
    "The subnet route table forwards established sessions past rule evaluation"
   ],
   "a": 2,
   "e": "Security groups track connection state, so traffic allowed in one direction automatically permits its return traffic. Network ACLs are stateless and would require explicit rules in both directions; neither gateways nor route tables create firewall openings per session.",
   "d": 3
  },
  {
   "id": 115,
   "t": "networking",
   "x": "After identifying a hostile IP range scanning its application, a company wants to block that range for every instance in a subnet using a rule that explicitly denies the traffic. Which VPC feature supports this?",
   "o": [
    "Security group",
    "Network ACL",
    "VPC Flow Logs",
    "Internet gateway"
   ],
   "a": 1,
   "e": "Network ACLs operate at the subnet boundary and evaluate numbered rules that can either allow or deny traffic, making them the right place to block a source range. Security groups support only allow rules, and Flow Logs record traffic rather than filter it.",
   "d": 3
  },
  {
   "id": 116,
   "t": "networking",
   "x": "A company serves its web application from two Regions and wants DNS lookups to send each user to whichever Region answers fastest for that user. Which Route 53 routing policy should be used?",
   "o": [
    "Failover routing",
    "Weighted routing",
    "Latency-based routing",
    "Simple routing"
   ],
   "a": 2,
   "e": "Latency-based routing answers each DNS query with the endpoint that historically delivers the lowest latency for that user's location. Weighted routing splits traffic by fixed percentages, and failover routing serves an active-passive disaster recovery pattern instead.",
   "d": 3
  },
  {
   "id": 117,
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
   "e": "A Site-to-Site VPN is quick to set up and encrypts traffic that still traverses the internet, while Direct Connect uses a dedicated private connection for more consistent bandwidth and latency. VPC peering connects VPCs to each other, not to on-premises networks, and CloudFront is a content delivery network.",
   "d": 3,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 118,
   "t": "networking",
   "x": "Two subnets in the same VPC share the same network ACL, yet instances in only one of them can be reached from the internet. What most likely makes that subnet public?",
   "o": [
    "It is placed in the first Availability Zone of the Region",
    "It uses a larger CIDR block than the other subnet",
    "It sends outbound traffic through a NAT gateway",
    "Its route table contains a route to an internet gateway"
   ],
   "a": 3,
   "e": "A subnet is public when its route table directs internet-bound traffic to an internet gateway, allowing two-way connectivity for instances with public IPs. A NAT gateway provides outbound-only access for private subnets and does not accept inbound connections; AZ placement and CIDR size do not affect reachability.",
   "d": 3
  },
  {
   "id": 119,
   "t": "account-basics",
   "x": "Under the shared responsibility model, which task remains the customer's job when running a database on Amazon RDS?",
   "o": [
    "Patching the operating system on the database host",
    "Creating database accounts and granting their permissions",
    "Replacing failed storage hardware in the facility",
    "Maintaining physical access controls at the data center"
   ],
   "a": 1,
   "e": "Customers remain responsible for security in the cloud, which for RDS includes database users, permissions, and the data itself. AWS handles the host operating system, engine patching, hardware replacement, and physical facility security for managed database services.",
   "d": 3
  },
  {
   "id": 120,
   "t": "account-basics",
   "x": "A security audit finds that an S3 bucket holding client records is readable by anyone on the internet. Under the shared responsibility model, who is accountable for this exposure?",
   "o": [
    "AWS, because protecting data stored in its facilities falls under security of the cloud",
    "AWS Support, because permission reviews are included with paid support plans",
    "The customer, because bucket access settings are configured by the account owner",
    "Both parties jointly, because storage access controls are administered together"
   ],
   "a": 2,
   "e": "Configuring who can access an S3 bucket is security in the cloud, which belongs to the customer. AWS secures the underlying storage infrastructure, and tools like Trusted Advisor can flag open buckets, but the access configuration and its consequences rest with the account owner.",
   "d": 3
  },
  {
   "id": 121,
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
   "e": "Consolidated billing produces a single invoice for the organization and aggregates usage across accounts, which can reach volume pricing tiers and share Reserved Instance and Savings Plans discounts. Accounts keep their own resources, networks, and support plans; nothing is merged or relocated.",
   "d": 3,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 122,
   "t": "app-integration",
   "x": "An online store's checkout service sends each order to a fulfillment service. During flash sales the fulfillment service falls behind and orders are dropped. Which service should sit between the two so that orders are retained until the fulfillment service can work through them?",
   "o": [
    "Amazon SNS",
    "Amazon SQS",
    "AWS Step Functions",
    "Amazon EventBridge"
   ],
   "a": 1,
   "e": "SQS is a message queue that stores messages durably until a consumer polls and processes them, so it absorbs traffic spikes and lets a slow consumer catch up. SNS pushes messages to subscribers immediately, so a lagging fulfillment service would still be overwhelmed instead of buffered.",
   "d": 3
  },
  {
   "id": 123,
   "t": "ml-ai-analytics",
   "x": "A data analyst wants to run standard SQL queries against CSV files that already sit in an S3 bucket, without loading them into a database or managing any servers. Which service should the analyst use?",
   "o": [
    "Amazon RDS",
    "Amazon QuickSight",
    "Amazon Athena",
    "Amazon Redshift"
   ],
   "a": 2,
   "e": "Athena is a serverless query service that runs standard SQL directly against data stored in S3. Redshift is a data warehouse that typically requires loading data into a cluster first, and QuickSight visualizes query results rather than acting as the query engine.",
   "d": 3
  },
  {
   "id": 124,
   "t": "mgmt-dev-tools",
   "x": "An operations engineer manages 200 EC2 instances and needs to apply operating system patches and run the same shell command across the whole fleet without logging in to each instance. Which service provides these capabilities?",
   "o": [
    "AWS Config",
    "AWS Trusted Advisor",
    "Amazon Inspector",
    "AWS Systems Manager"
   ],
   "a": 3,
   "e": "Systems Manager includes Patch Manager and Run Command, which operate on entire fleets of managed instances at scale. Inspector scans instances for vulnerabilities and Config records configuration history, but neither one applies patches or executes commands.",
   "d": 3
  },
  {
   "id": 125,
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
   "e": "Because a template describes the whole environment as a text file, the same stack can be stood up consistently in other Regions or accounts, and changes can be version-controlled and reviewed like application code. CloudFormation itself is free but does not discount the resources it creates, and right-sizing guidance comes from tools such as Compute Optimizer.",
   "d": 3,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 126,
   "t": "logging-monitoring",
   "x": "A sysadmin wants to receive an alert whenever the average CPU utilization of an EC2 instance stays above 80 percent for five minutes. Which service provides both the metric and the alarm?",
   "o": [
    "AWS CloudTrail",
    "AWS X-Ray",
    "AWS Config",
    "Amazon CloudWatch"
   ],
   "a": 3,
   "e": "CloudWatch collects performance metrics such as CPU utilization and can fire alarms when a metric breaches a threshold over a period. CloudTrail records API activity for auditing and plays no role in performance monitoring.",
   "d": 3
  },
  {
   "id": 127,
   "t": "app-integration",
   "x": "A media company processes uploaded videos through several stages: transcode, generate thumbnails, run a quality check, and publish. Each stage is a separate Lambda function, and failed stages need automatic retries. Which service should orchestrate this workflow?",
   "o": [
    "Amazon SQS",
    "Amazon SNS",
    "AWS Step Functions",
    "Amazon EventBridge"
   ],
   "a": 2,
   "e": "Step Functions coordinates multi-step workflows as state machines with built-in sequencing, branching, error handling, and retries. EventBridge routes individual events to targets but does not track the state of a multi-stage process from start to finish.",
   "d": 3
  },
  {
   "id": 128,
   "t": "ml-ai-analytics",
   "x": "Business analysts at a retailer want interactive dashboards showing sales trends and regional performance, built from data in the company's data lake and shared with executives. Which service fits this need?",
   "o": [
    "Amazon QuickSight",
    "Amazon CloudWatch",
    "Amazon Athena",
    "Amazon SageMaker"
   ],
   "a": 0,
   "e": "QuickSight is the business-intelligence service for building and sharing interactive dashboards and visualizations from business data. CloudWatch dashboards display operational metrics such as CPU and request counts, not sales analytics for executives.",
   "d": 3
  },
  {
   "id": 129,
   "t": "mgmt-dev-tools",
   "x": "A developer is writing a Python application that must create S3 buckets and publish messages from within its own program logic. Which access method should the application use to call AWS services?",
   "o": [
    "An AWS SDK",
    "The AWS CLI",
    "The AWS Management Console",
    "AWS CloudShell"
   ],
   "a": 0,
   "e": "The AWS SDKs provide language-specific libraries, including one for Python, so application code can call AWS APIs directly. The CLI and CloudShell are built for interactive or scripted terminal use, and the console is a browser interface for humans rather than for program logic.",
   "d": 3
  },
  {
   "id": 130,
   "t": "provisioning",
   "x": "A development team wants to define its cloud infrastructure in TypeScript instead of writing JSON or YAML templates by hand, while still deploying through CloudFormation. Which tool supports this?",
   "o": [
    "AWS CodeDeploy",
    "AWS Elastic Beanstalk",
    "AWS CDK",
    "AWS CodeCommit"
   ],
   "a": 2,
   "e": "The AWS Cloud Development Kit lets teams describe infrastructure in familiar programming languages such as TypeScript or Python and synthesizes CloudFormation templates for deployment. CodeDeploy releases application code onto compute targets and does not define infrastructure.",
   "d": 3
  },
  {
   "id": 131,
   "t": "logging-monitoring",
   "x": "An S3 bucket was deleted from a production account last week, and the security team must determine which IAM identity made the deletion call and when it happened. Where should the team look?",
   "o": [
    "Amazon CloudWatch metrics",
    "AWS X-Ray traces",
    "AWS CloudTrail event history",
    "AWS Trusted Advisor checks"
   ],
   "a": 2,
   "e": "CloudTrail records API calls in the account, including the identity that made each call, the time, and the source, which is exactly what this audit requires. CloudWatch metrics show how resources behaved but cannot tell you who issued a specific API call.",
   "d": 3
  },
  {
   "id": 132,
   "t": "app-integration",
   "x": "A company receives events from a third-party SaaS monitoring product and wants to route each one to a different AWS target depending on fields in the event payload. Which service is designed for this?",
   "o": [
    "Amazon SQS",
    "AWS Step Functions",
    "Amazon SNS",
    "Amazon EventBridge"
   ],
   "a": 3,
   "e": "EventBridge is an event bus that ingests events from AWS services and SaaS partners and applies rules that match event content to route them to targets. SNS can filter on message attributes for its subscribers, but it does not offer native SaaS partner event sources or content-based bus routing.",
   "d": 3
  },
  {
   "id": 133,
   "t": "ml-ai-analytics",
   "x": "A data-science team needs to build, train, and deploy its own machine learning model using the company's proprietary dataset. Which service provides the managed environment for this work?",
   "o": [
    "Amazon Rekognition",
    "Amazon Comprehend",
    "Amazon Translate",
    "Amazon SageMaker"
   ],
   "a": 3,
   "e": "SageMaker is the managed platform for building, training, and deploying custom machine learning models. Rekognition, Comprehend, and Translate are pre-trained AI services that expose ready-made capabilities through an API rather than a place to train your own models.",
   "d": 3
  },
  {
   "id": 134,
   "t": "mgmt-dev-tools",
   "x": "Company policy forbids opening inbound SSH ports on EC2 instances, yet administrators still need occasional interactive shell sessions for troubleshooting. Which capability satisfies both requirements?",
   "o": [
    "Amazon EC2 key pairs",
    "AWS Systems Manager Session Manager",
    "AWS Client VPN",
    "AWS Direct Connect"
   ],
   "a": 1,
   "e": "Session Manager provides interactive shell access through the Systems Manager agent's outbound connection, so no inbound ports need to be opened at all. Client VPN or Direct Connect still requires the instances to accept inbound SSH from the connected network, and key pairs merely authenticate SSH sessions.",
   "d": 3
  },
  {
   "id": 135,
   "t": "provisioning",
   "x": "For disaster-recovery drills, a company must stand up a complete copy of its test environment, including a VPC, subnets, EC2 instances, and an RDS database, in a second Region on demand. Which service provisions all of these resources together in a repeatable way?",
   "o": [
    "AWS Elastic Beanstalk",
    "AWS CloudFormation",
    "AWS Backup",
    "AWS Systems Manager"
   ],
   "a": 1,
   "e": "CloudFormation provisions a full set of related resources as a stack from a template, which can be deployed on demand in any Region. AWS Backup copies data such as snapshots between Regions but does not create networking or compute infrastructure.",
   "d": 3
  },
  {
   "id": 136,
   "t": "logging-monitoring",
   "x": "Users of a microservices application report slow checkouts. The developers want to follow an individual request as it passes through API Gateway, several Lambda functions, and DynamoDB to find which hop adds the delay. Which service should they use?",
   "o": [
    "AWS CloudTrail",
    "AWS X-Ray",
    "Amazon Inspector",
    "AWS Config"
   ],
   "a": 1,
   "e": "X-Ray traces requests end to end across distributed services and shows where time is spent, which pinpoints latency bottlenecks. CloudTrail logs which API calls occurred for auditing but does not measure how long a request spends at each service hop.",
   "d": 3
  },
  {
   "id": 137,
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
   "e": "SNS is a publish/subscribe service that pushes each published message to all of its subscribers and supports endpoints such as SMS, email, Lambda, and SQS, which covers both alerting and fan-out. Queue-style buffering for a single polling worker is SQS, and multi-step workflow coordination belongs to Step Functions.",
   "d": 3,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 138,
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
   "e": "Polly (text to speech) and Rekognition (image and video analysis) are pre-trained AI services that developers call through an API without building or training models. SageMaker targets teams that develop their own models, while QuickSight and EMR are analytics services rather than ready-made AI APIs.",
   "d": 3,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 139,
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
   "e": "CloudWatch collects metrics and fires alarms on thresholds, and CloudWatch Logs aggregates log data from applications and AWS services in one place. API-call audit history is CloudTrail's job, request tracing belongs to X-Ray, and configuration assessment is handled by AWS Config.",
   "d": 3,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 140,
   "t": "pricing-models",
   "x": "A media company runs a nightly video-transcoding job that checkpoints its work and can be stopped and restarted without losing progress. The team wants the lowest possible compute cost and can tolerate interruptions. Which EC2 purchasing option fits this workload?",
   "o": [
    "On-Demand Instances",
    "Standard Reserved Instances",
    "Spot Instances",
    "Dedicated Hosts"
   ],
   "a": 2,
   "e": "Spot Instances offer the deepest discounts in exchange for the possibility that AWS reclaims the capacity, which suits interruptible batch jobs that save their progress. On-Demand avoids commitment but costs far more, and Reserved Instances reward steady long-term usage rather than a cost-sensitive nightly job.",
   "d": 4
  },
  {
   "id": 141,
   "t": "billing-tools",
   "x": "A finance analyst wants an interactive view of the past 12 months of AWS spend, grouped by service, along with a forecast of the next three months. Which tool should the analyst use?",
   "o": [
    "AWS Pricing Calculator",
    "AWS Cost Explorer",
    "AWS Budgets",
    "AWS Cost and Usage Report"
   ],
   "a": 1,
   "e": "Cost Explorer provides interactive charts of historical spend with grouping, filtering, and built-in forecasting. The Pricing Calculator estimates planned workloads that are not running yet, Budgets sends threshold alerts, and the Cost and Usage Report is a raw data export rather than a visualization tool.",
   "d": 4
  },
  {
   "id": 142,
   "t": "support-plans",
   "x": "A company is moving its production e-commerce site to AWS and wants 24/7 phone and chat access to cloud support engineers, with a response within one hour if the production system goes down. Which is the lowest-cost AWS Support plan that meets these needs?",
   "o": [
    "Developer",
    "Basic",
    "Business",
    "Enterprise"
   ],
   "a": 2,
   "e": "Business is the least expensive plan with 24/7 phone and chat access to cloud support engineers and a one-hour response target when a production system is down. Developer offers business-hours email support only, and Enterprise adds faster critical response and a Technical Account Manager at a much higher price.",
   "d": 4
  },
  {
   "id": 143,
   "t": "pricing-models",
   "x": "A company commits to a consistent hourly spend on EC2 for three years but expects to shift workloads across instance families and Regions, and to move some services to AWS Fargate. Which purchasing option applies its discount to all of that usage without requiring exchanges or modifications?",
   "o": [
    "Compute Savings Plans",
    "Convertible Reserved Instances",
    "EC2 Instance Savings Plans",
    "Standard Reserved Instances"
   ],
   "a": 0,
   "e": "Compute Savings Plans automatically apply to any instance family, size, OS, tenancy, or Region, and also cover Fargate and Lambda usage. Convertible Reserved Instances can change attributes only through a manual exchange, and EC2 Instance Savings Plans are locked to one instance family in one Region.",
   "d": 4
  },
  {
   "id": 144,
   "t": "billing-tools",
   "x": "A DevOps lead wants an email notification whenever a project's month-to-date charges are forecast to exceed $500. Which service provides this capability with the least setup?",
   "o": [
    "AWS Budgets",
    "AWS Cost Explorer",
    "AWS Cost and Usage Report",
    "AWS Trusted Advisor"
   ],
   "a": 0,
   "e": "Budgets lets you set a spending threshold and trigger alerts on actual or forecasted costs in a few clicks. Cost Explorer can display forecasts but does not send threshold notifications on its own, and the Cost and Usage Report is a data export with no alerting.",
   "d": 4
  },
  {
   "id": 145,
   "t": "support-plans",
   "x": "Which AWS Support plan includes a designated Technical Account Manager who provides proactive guidance and coordinates access to AWS subject-matter experts?",
   "o": [
    "Developer",
    "Business",
    "Enterprise On-Ramp",
    "Enterprise"
   ],
   "a": 3,
   "e": "Enterprise Support assigns a designated Technical Account Manager to the account. Enterprise On-Ramp provides consultative access to a shared pool of technical account managers rather than a named individual, and Business and Developer include no TAM at all.",
   "d": 4
  },
  {
   "id": 146,
   "t": "pricing-models",
   "x": "An enterprise must run commercial software licensed per physical socket, and its auditors need to verify that instances stay on specific physical servers. Which EC2 option meets these requirements?",
   "o": [
    "Dedicated Instances",
    "Spot Instances",
    "Reserved Instances",
    "Dedicated Hosts"
   ],
   "a": 3,
   "e": "Dedicated Hosts allocate an entire physical server and expose socket and core counts, which supports server-bound BYOL licensing and placement auditing. Dedicated Instances also run on single-tenant hardware but do not give visibility into or control over the specific underlying host.",
   "d": 4
  },
  {
   "id": 147,
   "t": "billing-tools",
   "x": "An accounting team needs the most granular billing data available, with hourly line items delivered automatically to an S3 bucket for analysis in an external reporting system. What should the team enable?",
   "o": [
    "AWS Cost Explorer",
    "AWS Budgets reports",
    "AWS Cost and Usage Report",
    "AWS Pricing Calculator"
   ],
   "a": 2,
   "e": "The Cost and Usage Report delivers the most detailed billing data AWS offers, down to hourly line items, into an S3 bucket for downstream analytics. Cost Explorer is an interactive console view, and Budgets reports summarize budget performance rather than raw usage.",
   "d": 4
  },
  {
   "id": 148,
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
   "e": "Every account, even on Basic Support, gets 24/7 customer service for account and billing matters plus the core Trusted Advisor checks, documentation, and the AWS Health Dashboard. Technical support cases start at the Developer tier, while TAMs and 15-minute response targets belong to the Enterprise tiers.",
   "d": 4,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 149,
   "t": "pricing-models",
   "x": "A startup is launching a brand-new application with no usage history to forecast traffic. Leadership wants to pay for compute by the hour or second with no long-term commitment while they learn how the workload behaves. Which pricing model should they choose?",
   "o": [
    "Spot Instances",
    "On-Demand Instances",
    "Standard Reserved Instances",
    "EC2 Instance Savings Plans"
   ],
   "a": 1,
   "e": "On-Demand pricing charges only for capacity actually used, with no term commitment, which fits a workload whose pattern is still unknown. Reserved Instances and Savings Plans require a one- or three-year commitment, and Spot capacity can be reclaimed by AWS, a poor fit for a customer-facing launch.",
   "d": 4
  },
  {
   "id": 150,
   "t": "billing-tools",
   "x": "Before migrating an on-premises application, a company wants to model what the workload would cost on AWS using specific instance types, storage volumes, and data transfer amounts. Which tool is designed for this task?",
   "o": [
    "AWS Cost Explorer",
    "AWS Trusted Advisor",
    "AWS Cost and Usage Report",
    "AWS Pricing Calculator"
   ],
   "a": 3,
   "e": "The Pricing Calculator builds cost estimates for workloads before they run, based on the services and configurations you plan to deploy. Cost Explorer and the Cost and Usage Report only reflect usage that has already been billed, and Trusted Advisor evaluates resources that already exist.",
   "d": 4
  },
  {
   "id": 151,
   "t": "support-plans",
   "x": "An engineer experimenting in a sandbox account occasionally wants to ask AWS technical questions by email during business hours. Nothing in the account serves production traffic. Which support plan matches this situation at the lowest cost?",
   "o": [
    "Basic",
    "Developer",
    "Business",
    "Enterprise On-Ramp"
   ],
   "a": 1,
   "e": "The Developer plan adds business-hours email access to cloud support, with responses in under 24 hours for general guidance and under 12 for impaired systems. Basic includes no technical case support, while Business and Enterprise On-Ramp add 24/7 access this scenario does not need.",
   "d": 4
  },
  {
   "id": 152,
   "t": "pricing-models",
   "x": "Which statements accurately describe the AWS Free Tier? (Select TWO.)",
   "o": [
    "Free allowances unlock after the account's first Reserved Instance purchase",
    "New accounts can receive up to 00 in AWS credits under the free account plan",
    "Free usage is limited to accounts subscribed to a paid support plan",
    "Some services include a monthly allowance that stays free beyond the first year",
    "Allowance sizes grow automatically as an account's total monthly spend increases"
   ],
   "a": 1,
   "e": "The current Free Tier gives new accounts a credit-based free plan (up to 00 in credits), and separately some services carry always-free monthly allowances that continue indefinitely. Free usage is not tied to support plans, purchases, or spend levels.",
   "d": 4,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 153,
   "t": "billing-tools",
   "x": "A finance team wants to analyze last year's AWS spending and estimate what the next quarter will cost. Which capabilities does Cost Explorer provide? (Select TWO.)",
   "o": [
    "Visualizing historical spend with filtering and grouping",
    "Automatically stopping resources that exceed a threshold",
    "Forecasting future costs from past usage patterns",
    "Negotiating custom pricing with AWS on your behalf",
    "Applying spending caps that block new resource launches"
   ],
   "a": 0,
   "e": "Cost Explorer is the visualization and analysis tool: it charts historical usage and spend with filters and grouping, and produces forecasts from past patterns. It never takes enforcement actions; AWS Budgets sends alerts, and nothing in the billing tools stops or blocks resources on its own.",
   "d": 4,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 154,
   "t": "support-plans",
   "x": "A growing company wants a 30-minute response target for business-critical system down cases and consultative access to technical account management, but the full Enterprise plan is beyond its budget. Which AWS Support plan should it choose?",
   "o": [
    "Enterprise On-Ramp",
    "Business",
    "Enterprise",
    "Developer"
   ],
   "a": 0,
   "e": "Enterprise On-Ramp offers a 30-minute response target for business-critical system down cases and access to a pool of technical account managers at a lower price than Enterprise, which targets 15 minutes and assigns a designated TAM. Business tops out at a one-hour target for production system down cases.",
   "d": 4
  },
  {
   "id": 155,
   "t": "pricing-models",
   "x": "A solutions architect is estimating network charges for a workload hosted in a single AWS Region. Which type of traffic is typically not billed?",
   "o": [
    "Data transferred in from the internet",
    "Data transferred out to the internet",
    "Data transferred between AWS Regions",
    "Data transferred out to an on-premises data center"
   ],
   "a": 0,
   "e": "Inbound data transfer from the internet is free in nearly all cases, so it rarely factors into estimates. Outbound traffic to the internet, cross-Region replication, and transfers back to on-premises sites are all billed and usually drive the networking line of a cost model.",
   "d": 4
  },
  {
   "id": 156,
   "t": "billing-tools",
   "x": "Three internal departments share a single AWS account, and finance needs to attribute each month's charges to the department that generated them. What is the most direct way to accomplish this?",
   "o": [
    "Move each department into consolidated billing under AWS Organizations",
    "Tag resources by department and activate cost allocation tags",
    "Purchase a separate Savings Plan for each department",
    "Estimate each department's share with the AWS Pricing Calculator"
   ],
   "a": 1,
   "e": "Once activated in the Billing console, cost allocation tags let Cost Explorer and the Cost and Usage Report break down charges by tag values such as a department name. Consolidated billing addresses multi-account structures, and Savings Plans change the rate paid rather than how spend is attributed.",
   "d": 4
  },
  {
   "id": 157,
   "t": "support-plans",
   "x": "A cloud administrator wants the complete set of AWS Trusted Advisor checks, including the cost optimization and fault tolerance categories. What is the minimum support plan that unlocks them?",
   "o": [
    "Developer",
    "Basic",
    "Business",
    "Enterprise On-Ramp"
   ],
   "a": 2,
   "e": "The full range of Trusted Advisor checks becomes available at the Business tier and above. Accounts on Basic or Developer see only the core security and service quota checks, and although Enterprise On-Ramp also includes every check, it is not the lowest tier that does.",
   "d": 4
  },
  {
   "id": 158,
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
   "e": "Reserved Instances and Savings Plans both exchange a one- or three-year commitment for significant discounts over On-Demand rates. On-Demand and Spot are pay-as-you-go with no term, and Dedicated Instances describe single-tenant placement, which can be billed under several different models.",
   "d": 4,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 159,
   "t": "billing-tools",
   "x": "One account in an organization purchases Reserved Instances but does not use all of the reserved capacity during a given hour. With consolidated billing and default settings, what happens to the unused discount?",
   "o": [
    "It applies to matching usage in other accounts in the organization",
    "It is forfeited and cannot be applied that hour",
    "It converts to a credit on the next month's invoice",
    "It is refunded to the purchasing account at the On-Demand rate"
   ],
   "a": 0,
   "e": "Under consolidated billing, Reserved Instance and Savings Plans discounts are shared by default, so unused reservation hours apply to matching usage anywhere in the organization. The discount is not forfeited, converted to credits, or refunded, though sharing can be turned off per account.",
   "d": 4
  },
  {
   "id": 160,
   "t": "cloud-deployment-models",
   "x": "A defense contractor runs virtualization, self-service provisioning, and automated resource pooling entirely inside a facility it owns and operates, with no provider-managed capacity involved anywhere in the design. Which deployment model describes this arrangement?",
   "o": [
    "Cloud-native deployment",
    "On-premises private cloud",
    "Colocation hosting model",
    "Hybrid cloud deployment"
   ],
   "a": 1,
   "e": "Running cloud-style capabilities such as pooling and self-service on hardware the organization owns and operates is the on-premises deployment model, often called a private cloud. It is not hybrid, because hybrid requires resources in a provider environment connected to the owned facility, and here no provider capacity is used at all.",
   "d": 1
  },
  {
   "id": 161,
   "t": "cloud-deployment-models",
   "x": "A three-person legal-tech startup has never owned a server; the database, the mobile back end, and the document pipeline all sit on managed AWS services. Which deployment model does the startup use?",
   "o": [
    "Colocation hosting model",
    "On-premises private cloud",
    "Cloud-native deployment",
    "Hybrid cloud deployment"
   ],
   "a": 2,
   "e": "When every component of a workload lives in the provider environment, the deployment is fully cloud, also described as cloud-native. Hybrid is wrong because there is no owned infrastructure to connect to, and colocation still involves the company buying and racking its own equipment in someone else's building.",
   "d": 1
  },
  {
   "id": 162,
   "t": "cloud-deployment-models",
   "x": "An automotive plant needs a machine-vision inspection workload beside the robots because they cannot tolerate the round-trip delay to a Region, yet the engineers want the same AWS APIs they already use. Which deployment approach meets both needs?",
   "o": [
    "Cloud deployment with edge caching only",
    "Hybrid deployment using AWS Outposts",
    "On-premises deployment with no AWS use",
    "Cloud deployment in a single Region"
   ],
   "a": 1,
   "e": "Placing AWS-managed infrastructure inside the customer facility while keeping the Region for everything else is a hybrid deployment, and Outposts is the service that extends AWS APIs to that facility. A purely regional deployment cannot remove the network round trip, and a plain on-premises build would abandon the consistent AWS tooling the team asked for.",
   "d": 1
  },
  {
   "id": 163,
   "t": "cloud-deployment-models",
   "x": "A payroll processor keeps its steady month-round load on equipment it already paid for, then adds temporary capacity in AWS during the two-day window when nearly every client files at once. Which deployment model results?",
   "o": [
    "A colocation deployment",
    "A hybrid deployment",
    "An on-premises deployment",
    "A fully cloud deployment"
   ],
   "a": 1,
   "e": "Baseline capacity in an owned facility plus overflow capacity in a provider environment is the classic hybrid pattern, sometimes described as bursting. It is not a fully cloud deployment, because the steady-state load never leaves the equipment the processor already owns.",
   "d": 1
  },
  {
   "id": 164,
   "t": "cloud-deployment-models",
   "x": "A regional bank is designing an arrangement in which some systems remain in its own data center while others run in AWS. Which statements about this kind of design are accurate? (Select TWO.)",
   "o": [
    "Systems can be moved gradually rather than all at once",
    "The bank no longer operates any physical infrastructure",
    "All AWS Regions must be disabled except a single one",
    "Direct Connect or a VPN can link the two environments",
    "AWS assumes responsibility for the bank's physical hardware"
   ],
   "a": 0,
   "e": "Hybrid designs depend on private network connectivity between the two environments, and they let an organization move systems in waves instead of in one cutover. The claim that no physical infrastructure remains is wrong by definition here, since part of the estate deliberately stays in the bank's own facility.",
   "d": 1,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 165,
   "t": "cloud-deployment-models",
   "x": "A film post-production house keeps its editing workstations and shared scratch storage in the studio for throughput, but replicates finished projects to Amazon S3 for long-term retention. How is this environment best classified?",
   "o": [
    "A multi-cloud environment",
    "A fully cloud environment",
    "A hybrid environment",
    "An on-premises-only setup"
   ],
   "a": 2,
   "e": "Active work stays on studio equipment while archival copies live in AWS, so resources are split across an owned facility and a provider, which is hybrid. Multi-cloud would require services from two or more providers, and only one provider appears here.",
   "d": 1
  },
  {
   "id": 166,
   "t": "cloud-deployment-models",
   "x": "A European insurer must store claim documents inside a facility it controls to satisfy a national regulator, yet it wants AWS analytics for the rest of its portfolio. Which deployment model lets it meet both obligations?",
   "o": [
    "Hybrid cloud",
    "Colocation only",
    "Cloud only",
    "On-premises only"
   ],
   "a": 0,
   "e": "A regulatory constraint that pins one dataset to a controlled facility while other workloads run in AWS is exactly what hybrid exists to handle. Choosing on-premises only would forfeit the analytics capability the insurer wants, and cloud only would violate the regulator's placement requirement for the documents.",
   "d": 1
  },
  {
   "id": 167,
   "t": "cloud-deployment-models",
   "x": "A publisher built an internal private cloud with self-service portals, but teams still wait in a queue whenever the shared pool of physical hosts is fully allocated. Which limitation of that model does the wait illustrate?",
   "o": [
    "Chargeback reporting cannot be produced for internal teams",
    "Virtual machines cannot be created without a public Region",
    "Self-service provisioning is impossible in this model",
    "Capacity is bounded by hardware the publisher already bought"
   ],
   "a": 3,
   "e": "A private cloud can offer a self-service experience, but the pool it draws from is finite because someone had to purchase the hosts in advance. Self-service is clearly not impossible here, since the portals exist and work until the pool is exhausted.",
   "d": 1
  },
  {
   "id": 168,
   "t": "cloud-deployment-models",
   "x": "A logistics firm has finished closing its last server room and now runs every application on AWS. Which statements describe its current model? (Select TWO.)",
   "o": [
    "Capacity can be adjusted through APIs rather than purchase orders",
    "Application code becomes the responsibility of AWS",
    "The firm must still refresh its hardware on a three-year cycle",
    "Only one Availability Zone may be used per account",
    "The firm no longer maintains its own physical servers"
   ],
   "a": 0,
   "e": "An all-in cloud deployment removes the hardware ownership burden and turns capacity changes into API calls instead of procurement cycles. AWS never takes responsibility for customer application code, and nothing about a cloud deployment restricts an account to a single Availability Zone.",
   "d": 1,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 169,
   "t": "economies-of-scale",
   "x": "A procurement lead asks why AWS can price object storage per gigabyte below what her company achieves buying disk arrays for its own racks. What is the main reason?",
   "o": [
    "AWS limits each customer to a fixed quantity of stored data",
    "AWS resells surplus capacity purchased from a single vendor",
    "AWS aggregates demand from many customers and buys at enormous volume",
    "AWS charges a separate annual membership fee for storage access"
   ],
   "a": 2,
   "e": "Massive aggregated demand gives a hyperscale provider purchasing power and operational efficiency that no single buyer can reproduce, which is what economies of scale means. There is no membership fee involved, and per-customer storage is not capped in a way that would explain the price difference.",
   "d": 1
  },
  {
   "id": 170,
   "t": "economies-of-scale",
   "x": "At a textile manufacturer, standing up a test environment used to require a requisition, a four-week equipment lead time, and a change window. On AWS the equivalent environment appears in minutes. Which advantage of cloud computing is this?",
   "o": [
    "Massive economies of scale",
    "Improved regulatory compliance",
    "Increased speed and agility",
    "Reduced application complexity"
   ],
   "a": 2,
   "e": "Collapsing weeks of procurement and scheduling into a few minutes of provisioning is the speed and agility advantage. Economies of scale is a pricing effect from aggregated demand, and it does not describe how quickly an environment can be created.",
   "d": 1
  },
  {
   "id": 171,
   "t": "economies-of-scale",
   "x": "A dairy cooperative's data team wants to trial five different recommendation algorithms, each needing its own cluster for a single weekend. Why is that easier to justify on AWS than in the cooperative's server room?",
   "o": [
    "AWS reserves dedicated hardware for every trial account",
    "Failed experiments can be shut down and stop generating charges",
    "Compute used for testing is billed at a flat annual rate",
    "Experimental workloads are provided at no charge by AWS"
   ],
   "a": 1,
   "e": "Because billing follows consumption, the downside of an experiment that does not pan out is limited to the hours it actually ran, which lowers the cost of trying ideas. Experiments are not free, and there is no flat annual testing rate that would make the comparison work.",
   "d": 1
  },
  {
   "id": 172,
   "t": "economies-of-scale",
   "x": "An executive asks what her teams should notice within the first year of building on AWS instead of ordering equipment. Which two changes are reasonable to expect? (Select TWO.)",
   "o": [
    "Staff will no longer need to monitor their applications",
    "Every workload will run cheaper than any alternative",
    "Ideas can reach a working prototype far sooner",
    "Unsuccessful projects can wind down without stranded equipment",
    "Software defects will be corrected automatically by AWS"
   ],
   "a": 2,
   "e": "Faster time to a working prototype and the ability to stop a project without leaving unused equipment behind are direct consequences of on-demand provisioning. Blanket claims that every workload gets cheaper are false, and monitoring and application quality remain the customer's job.",
   "d": 1,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 173,
   "t": "economies-of-scale",
   "x": "A language-learning app based in Lisbon signs its first large customer in Brazil and must serve lessons there without opening a facility in that country. Which cloud advantage makes this practical?",
   "o": [
    "Eliminating the shared responsibility model",
    "Reaching new geographies in minutes",
    "Guaranteeing zero latency for all users",
    "Trading variable expense for fixed expense"
   ],
   "a": 1,
   "e": "Deploying into an existing Region lets a company serve a distant market almost immediately instead of financing a local build-out. The expense option is backwards, since cloud adoption trades fixed expense for variable, and no provider can guarantee zero latency.",
   "d": 1
  },
  {
   "id": 174,
   "t": "economies-of-scale",
   "x": "An auditor notes that the company's owned servers average 12 percent utilization because each was sized for a once-a-year peak. How does consumption-based pricing change this picture?",
   "o": [
    "Charges are calculated from the highest utilization reached each year",
    "Charges track the capacity actually consumed rather than the peak",
    "Charges are fixed once the first workload has been deployed",
    "Charges are waived for any resource below 20 percent utilization"
   ],
   "a": 1,
   "e": "Paying for what is used means idle headroom stops being a sunk purchase, which is the fix for chronic over-provisioning. Billing from an annual high-water mark would recreate the same problem, and no discount is granted simply for low utilization.",
   "d": 1
  },
  {
   "id": 175,
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
   "e": "Spreading fixed infrastructure investment across an enormous customer base lowers unit cost, and the resulting efficiency gains have historically been returned as published price reductions. Individual rate negotiation is not what drives these across-the-board reductions, and there is no automatic competitor price match.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 176,
   "t": "economies-of-scale",
   "x": "A ski resort's booking site sits idle all summer and saturates during the week lift passes go on sale, and its old servers were bought for that one week. What does AWS let the resort stop doing?",
   "o": [
    "Encrypting data that customers submit",
    "Estimating peak demand years in advance",
    "Publishing a maintenance schedule to users",
    "Monitoring how its application performs"
   ],
   "a": 1,
   "e": "Elastic provisioning removes the need to forecast a peak and buy against it long before the traffic arrives. Monitoring and encryption remain customer responsibilities regardless of where the workload runs, so neither disappears with the move.",
   "d": 1
  },
  {
   "id": 177,
   "t": "economies-of-scale",
   "x": "A university IT director argues that his institution could match AWS pricing simply by buying more equipment at once. Which factor most weakens that argument?",
   "o": [
    "Equipment discounts are identical for every buyer worldwide",
    "One campus buys a tiny fraction of the volume AWS buys",
    "Campus equipment is taxed at a higher rate than cloud services",
    "Universities are prohibited from operating their own servers"
   ],
   "a": 1,
   "e": "Volume discounts and operational efficiency scale with total purchasing, and a single campus operates orders of magnitude below hyperscale volume. The claim that discounts are identical for all buyers is simply untrue, which is the whole basis of the scale advantage.",
   "d": 1
  },
  {
   "id": 178,
   "t": "well-architected-pillars",
   "x": "A trading platform replaces one very large server with a fleet of smaller instances spread across three Availability Zones, so losing any single instance removes only a slice of total capacity. Which pillar's design principle is being applied?",
   "o": [
    "Performance Efficiency",
    "Reliability",
    "Cost Optimization",
    "Operational Excellence"
   ],
   "a": 1,
   "e": "Scaling horizontally to reduce the impact of any one failure is a named design principle of the reliability pillar. Performance efficiency is about using resources effectively as demand and technology change, not about limiting the blast radius of a component failure.",
   "d": 1
  },
  {
   "id": 179,
   "t": "well-architected-pillars",
   "x": "A media group cannot tell which of its eight business units generated last month's AWS invoice, so it introduces tagging and per-unit chargeback reporting. Which pillar covers this practice?",
   "o": [
    "Sustainability",
    "Operational Excellence",
    "Performance Efficiency",
    "Cost Optimization"
   ],
   "a": 3,
   "e": "Attributing expenditure to the teams that incur it is a design principle of the cost optimization pillar and the foundation of cloud financial management. Operational excellence covers how the organization runs and improves workloads, not how spending is allocated back to business units.",
   "d": 1
  },
  {
   "id": 180,
   "t": "well-architected-pillars",
   "x": "A seed catalog company wants image recognition in its plant-identification app but employs no researchers, so it consumes a managed AWS service rather than building models in house. Which pillar's design principle does this follow?",
   "o": [
    "Operational Excellence",
    "Performance Efficiency",
    "Security",
    "Reliability"
   ],
   "a": 1,
   "e": "Democratizing advanced technologies, meaning consuming them as a service instead of acquiring rare expertise, is a design principle of the performance efficiency pillar. Operational excellence would speak to how the team deploys and supports the app rather than how it obtains the capability.",
   "d": 1
  },
  {
   "id": 181,
   "t": "well-architected-pillars",
   "x": "An environmental officer reviews a workload and asks for two changes that align with the sustainability pillar. Which recommendations qualify? (Select TWO.)",
   "o": [
    "Choose the largest available instance family for every service",
    "Right-size instances so provisioned capacity matches real demand",
    "Keep spare instances running continuously in case of a spike",
    "Copy every object to four Regions regardless of access patterns",
    "Adopt managed services that share infrastructure across customers"
   ],
   "a": 1,
   "e": "Maximizing utilization and using managed services with high shared efficiency are both sustainability design principles, because they reduce the resources needed per unit of work. Holding idle spare instances and replicating data nobody reads increase provisioned resources without delivering value, so they work against the pillar.",
   "d": 1,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 182,
   "t": "well-architected-pillars",
   "x": "A credit union grants each analyst a role limited to the exact actions the job requires and revisits those permissions every quarter. Which pillar's design principle is this?",
   "o": [
    "Cost Optimization",
    "Sustainability",
    "Security",
    "Reliability"
   ],
   "a": 2,
   "e": "Implementing a strong identity foundation with least privilege is a design principle of the security pillar. Reliability concerns recovering from failure and meeting availability targets, and permission scoping does not address either of those outcomes.",
   "d": 1
  },
  {
   "id": 183,
   "t": "well-architected-pillars",
   "x": "A hospital network's platform team wants its release process to reflect the operational excellence pillar. Which two practices support that goal? (Select TWO.)",
   "o": [
    "Batch a quarter of changes into one large release window",
    "Run a blameless review after each incident and update the runbooks",
    "Restrict monitoring dashboards to the on-call engineer only",
    "Define infrastructure in templates and deploy it through pipelines",
    "Apply configuration changes by hand on production servers first"
   ],
   "a": 1,
   "e": "Performing operations as code and learning from every operational failure are two of the pillar's stated design principles. Batching a quarter of changes into one window contradicts the principle of making frequent, small, reversible changes, which limits the damage any single release can do.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 184,
   "t": "well-architected-pillars",
   "x": "A payments company deliberately terminates production components twice a year to verify that automatic failover restores service inside the documented recovery time objective. Which pillar's design principle is this?",
   "o": [
    "Operational Excellence",
    "Reliability",
    "Performance Efficiency",
    "Security"
   ],
   "a": 1,
   "e": "Testing recovery procedures instead of assuming they work is a design principle of the reliability pillar, and a recovery time objective is a reliability target. Operational excellence is a tempting choice because rehearsals are procedural, but the objective being validated here is the workload's ability to recover.",
   "d": 1
  },
  {
   "id": 185,
   "t": "well-architected-pillars",
   "x": "A genomics lab's batch jobs are constrained by disk throughput, so the team evaluates volume types and instance families to find the combination that finishes runs fastest. Which pillar guides this evaluation?",
   "o": [
    "Reliability",
    "Sustainability",
    "Cost Optimization",
    "Performance Efficiency"
   ],
   "a": 3,
   "e": "Selecting resource types that fit the workload's actual bottleneck is core to the performance efficiency pillar. Cost optimization overlaps in practice, but the stated goal here is completion time rather than reducing what the lab is billed.",
   "d": 1
  },
  {
   "id": 186,
   "t": "well-architected-pillars",
   "x": "A charity's finance and engineering leads meet monthly to forecast AWS spend, set a budget per project, and act on variance. Which pillar names this discipline as a design principle?",
   "o": [
    "Security",
    "Operational Excellence",
    "Reliability",
    "Cost Optimization"
   ],
   "a": 3,
   "e": "Implementing cloud financial management, which includes forecasting, budgeting, and acting on variance, is a design principle of the cost optimization pillar. Operational excellence covers running and improving workloads and does not address financial governance.",
   "d": 1
  },
  {
   "id": 187,
   "t": "well-architected-pillars",
   "x": "During a review, a team lead states that performing operations as code is one of the six pillars. What correction should the reviewer make?",
   "o": [
    "It is a design principle within the operational excellence pillar",
    "It is a lens that replaces the operational excellence pillar",
    "It is a seventh pillar added to the framework more recently",
    "It is a design principle within the reliability pillar"
   ],
   "a": 0,
   "e": "The six pillars are operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability; performing operations as code is a design principle inside the first of those. Lenses are separate guidance for specific workload types and never replace a pillar.",
   "d": 1
  },
  {
   "id": 188,
   "t": "benefits-of-cloud",
   "x": "A researcher at a marine biology institute needs a GPU instance at two in the morning on a Sunday and creates it herself through the console, with no request submitted to a vendor. Which characteristic of cloud computing is shown?",
   "o": [
    "Guaranteed capacity reservation",
    "On-demand self-service",
    "Measured multi-tenancy",
    "Broad network access"
   ],
   "a": 1,
   "e": "Provisioning resources unilaterally, at any hour, without human interaction from the provider is the on-demand self-service characteristic. Broad network access describes reaching those resources over standard networks from varied devices, which is not what the scenario emphasizes.",
   "d": 1
  },
  {
   "id": 189,
   "t": "benefits-of-cloud",
   "x": "A four-person team compares self-hosting a message queue on instances it maintains against using a managed AWS equivalent. Which advantages does the managed option provide? (Select TWO.)",
   "o": [
    "Patching of the underlying infrastructure is handled by AWS",
    "The team's application logic is written and maintained by AWS",
    "The service can be used without procuring or racking equipment",
    "Message delivery becomes impossible to monitor or measure",
    "The service is provided free of charge to small organizations"
   ],
   "a": 0,
   "e": "Managed services remove both the hardware acquisition step and the maintenance of the underlying platform, which is why small teams can run capabilities that would otherwise need dedicated staff. AWS never authors or maintains customer application logic, and managed services are billed rather than donated to small organizations.",
   "d": 1,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 190,
   "t": "cloud-architecture",
   "x": "An esports statistics site doubles capacity by launching additional identical instances behind a load balancer rather than moving to a bigger instance type. What is this approach called?",
   "o": [
    "Vertical scaling",
    "Horizontal scaling",
    "Static provisioning",
    "Vertical partitioning"
   ],
   "a": 1,
   "e": "Adding more instances of the same size to share the load is horizontal scaling, or scaling out. Vertical scaling is the alternative that was explicitly rejected, since it means replacing a resource with a larger one rather than adding peers.",
   "d": 1
  },
  {
   "id": 191,
   "t": "cloud-architecture",
   "x": "An orchestra's ticket sales platform must keep taking orders when one server or one facility becomes unavailable. Which measures support that outcome? (Select TWO.)",
   "o": [
    "Store order records only on a single instance volume",
    "Spread instances across multiple Availability Zones",
    "Replace instances that fail health checks automatically",
    "Perform failover manually during business hours",
    "Consolidate the workload onto one larger instance"
   ],
   "a": 1,
   "e": "Redundancy across Availability Zones survives the loss of a facility, and automatic replacement of unhealthy instances survives the loss of a server. Consolidating onto one larger instance does the opposite by concentrating the workload into a single point of failure.",
   "d": 1,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 192,
   "t": "cloud-concepts",
   "x": "A team rents virtual machines, block storage, and networking from AWS, then installs and patches the operating systems and middleware itself. Which service model is described?",
   "o": [
    "Desktop as a service",
    "Infrastructure as a service",
    "Software as a service",
    "Platform as a service"
   ],
   "a": 1,
   "e": "Renting fundamental compute, storage, and network building blocks while retaining responsibility for the operating system is infrastructure as a service. Under platform as a service the provider would manage the operating system and runtime, leaving the team responsible only for its code and data.",
   "d": 1
  },
  {
   "id": 193,
   "t": "digital-transformation",
   "x": "A retailer's transformation office must establish risk management, application portfolio management, and cloud financial management practices before scaling its migration. Which AWS Cloud Adoption Framework perspective groups these capabilities?",
   "o": [
    "Platform",
    "Business",
    "Operations",
    "Governance"
   ],
   "a": 3,
   "e": "The governance perspective gathers the capabilities that orchestrate cloud initiatives while managing risk and maximizing benefit, including portfolio and cloud financial management. The platform perspective is a tempting alternative but it covers building and modernizing the technical environment, not the oversight practices described here.",
   "d": 1
  },
  {
   "id": 194,
   "t": "digital-transformation",
   "x": "A machinery maker replaces quarterly release windows with small daily deployments and gives each product team ownership of the services it builds. Which change does this represent?",
   "o": [
    "A shift from OpEx back to CapEx",
    "A shift in operating model and culture",
    "A shift to a private deployment model",
    "A shift in hardware refresh cycles"
   ],
   "a": 1,
   "e": "Changing how often the organization ships and who owns each service is a change to its operating model and culture, which is the human side of digital transformation. It is not a spending shift, since deployment cadence and team ownership say nothing about how the infrastructure is purchased.",
   "d": 1
  },
  {
   "id": 195,
   "t": "migration-tco",
   "x": "During an application portfolio assessment, a utility discovers 40 servers running a reporting tool that no business unit has opened in two years. Which of the seven migration strategies applies?",
   "o": [
    "Retire",
    "Rehost",
    "Repurchase",
    "Retain"
   ],
   "a": 0,
   "e": "Decommissioning applications that no longer deliver value is the retire strategy, and it usually yields the fastest savings in a portfolio assessment. Retain means consciously keeping something as it is for now, which would be wrong here because nobody is using the tool at all.",
   "d": 1
  },
  {
   "id": 196,
   "t": "migration-tco",
   "x": "A mainframe scheduling system cannot move until its vendor support agreement ends in 18 months, so the team leaves it where it is and revisits the decision later. Which strategy is this?",
   "o": [
    "Replatform",
    "Relocate",
    "Retire",
    "Retain"
   ],
   "a": 3,
   "e": "Deliberately postponing an application and keeping it in place, often called revisit, is the retain strategy. Retire would mean shutting it down, but the system is still needed and only its move is being deferred.",
   "d": 1
  },
  {
   "id": 197,
   "t": "well-architected",
   "x": "A platform team wants a structured questionnaire it can answer about a workload, producing a prioritized list of improvement items plus a report to share with leadership. Which AWS offering provides this?",
   "o": [
    "AWS Trusted Advisor",
    "AWS Compute Optimizer",
    "AWS Well-Architected Tool",
    "AWS Service Catalog"
   ],
   "a": 2,
   "e": "The AWS Well-Architected Tool walks a team through pillar-based questions about a workload and returns an improvement plan and report. Trusted Advisor is an attractive distractor because it also produces recommendations, but it runs automated checks on an account rather than guiding a structured architectural review.",
   "d": 1
  },
  {
   "id": 198,
   "t": "iam-policies-roles",
   "x": "A logistics startup runs a nightly batch job on an EC2 instance that must upload processed shipment files to Amazon S3. Developers currently paste long-lived access keys into the instance user data script. What should replace that practice?",
   "o": [
    "Create an IAM user for the instance and rotate its keys every 90 days",
    "Store the access keys in an environment variable on the instance",
    "Attach an IAM role to the instance so the application receives temporary credentials",
    "Move the access keys into a private S3 bucket the instance reads at startup"
   ],
   "a": 2,
   "e": "An IAM role attached to the instance supplies short-lived credentials that AWS rotates automatically, so no static key ever sits on disk. Creating an IAM user with a 90-day rotation schedule still leaves a durable secret on the host between rotations, which is exactly the exposure the auditor would flag.",
   "d": 2
  },
  {
   "id": 199,
   "t": "iam-policies-roles",
   "x": "A finance department needs read-only reporting permissions, and the security team wants that permission set defined once and reused as new finance hires arrive. Which IAM construct is built to be attached to many identities?",
   "o": [
    "An access key pair",
    "A managed policy",
    "An inline policy",
    "A permissions boundary"
   ],
   "a": 1,
   "e": "A managed policy is a standalone document that can be attached to any number of users, groups, and roles, so one edit updates every identity that uses it. An inline policy is embedded in a single identity and would have to be recreated for each new hire.",
   "d": 2
  },
  {
   "id": 200,
   "t": "iam-policies-roles",
   "x": "A media company is writing its first customer managed IAM policy for an internal tool. Which statements about how IAM evaluates permissions are correct? (Select TWO.)",
   "o": [
    "Permissions granted to an IAM group are inherited only by the newest member",
    "An explicit allow overrides an explicit deny when both are present",
    "A policy attached directly to a user replaces the policies attached to groups",
    "An explicit deny in any applicable policy overrides any allow",
    "Requests are denied by default when no policy explicitly allows them"
   ],
   "a": 3,
   "e": "IAM starts from an implicit deny and grants access only when some policy allows it, and any explicit deny anywhere in the evaluation wins. The reverse claim that an allow beats a deny is the classic trap; deny always takes precedence, and group policies add to rather than replace user policies.",
   "d": 2,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 201,
   "t": "iam-root-mfa",
   "x": "During an internal review, a reviewer finds that the email address tied to the AWS account owner belongs to an employee who left the firm last quarter. Why does this matter so much for the root user specifically?",
   "o": [
    "Support cases can only be opened from that mailbox",
    "The root user cannot sign in without a verified email alias",
    "Billing reports are only visible to the address on file",
    "Password recovery for the root user is sent to that address"
   ],
   "a": 3,
   "e": "The root credential is recovered through the account email address, so whoever controls that mailbox can eventually take over the account. Billing visibility is controlled separately through IAM and account settings, which makes it a distraction rather than the real risk here.",
   "d": 2
  },
  {
   "id": 202,
   "t": "iam-root-mfa",
   "x": "A small design agency wants the strongest sign-in protection available for its account owner credential, and it must survive a lost phone without locking the agency out. Which combination does AWS recommend?",
   "o": [
    "Enable MFA on one IAM administrator and skip it for the root user",
    "Enable MFA on the root user and register a backup MFA device",
    "Disable MFA on the root user and use a very long password instead",
    "Enable MFA on the root user and store the seed in a shared document"
   ],
   "a": 1,
   "e": "AWS supports registering multiple MFA devices on the root user, which preserves recovery if one device is lost while keeping the second factor in force. Copying the seed into a shared document defeats the second factor entirely, since anyone with the document can generate valid codes.",
   "d": 2
  },
  {
   "id": 203,
   "t": "iam-root-mfa",
   "x": "Which action in an AWS account still requires signing in with the account owner credentials rather than an administrator identity?",
   "o": [
    "Creating an Amazon S3 bucket",
    "Launching an EC2 instance in a new Region",
    "Attaching a managed policy to an IAM group",
    "Closing the AWS account"
   ],
   "a": 3,
   "e": "A short list of account-level tasks, including closing the account and changing the account name or email, is reserved for the root user. Routine resource work such as launching instances or editing IAM policies should be delegated to administrative identities so the root credential stays locked away.",
   "d": 2
  },
  {
   "id": 204,
   "t": "cognito-directory",
   "x": "A gaming studio is launching a mobile title and wants players to register, sign in, and then call a backend API with tokens that prove who they are. Which AWS service handles that end-user identity layer?",
   "o": [
    "AWS Certificate Manager",
    "AWS IAM Identity Center",
    "AWS Directory Service",
    "Amazon Cognito"
   ],
   "a": 3,
   "e": "Amazon Cognito provides user pools that register and authenticate application end users and issue tokens the backend can validate. IAM Identity Center is aimed at workforce access to AWS accounts and internal applications, not at millions of consumer accounts belonging to a game.",
   "d": 2
  },
  {
   "id": 205,
   "t": "cognito-directory",
   "x": "A manufacturing firm runs Windows file servers and .NET applications on EC2 instances that must join a managed Microsoft Active Directory domain hosted in AWS. Which service supplies that domain?",
   "o": [
    "AWS Directory Service",
    "AWS IAM Identity Center",
    "Amazon Cognito",
    "AWS Resource Access Manager"
   ],
   "a": 0,
   "e": "AWS Directory Service runs managed Microsoft Active Directory in the cloud so domain-joined Windows workloads keep working without self-managed domain controllers. Amazon Cognito authenticates application users and has no concept of a Windows domain join.",
   "d": 2
  },
  {
   "id": 206,
   "t": "cognito-directory",
   "x": "An enterprise is consolidating workforce sign-in across dozens of AWS accounts. Which outcomes does AWS IAM Identity Center support? (Select TWO.)",
   "o": [
    "Sign-up and password reset flows for a public retail app",
    "Encryption key rotation for Amazon EBS volumes",
    "Automatic patching of operating systems on member accounts",
    "Single sign-on access to multiple AWS accounts from one portal",
    "Federation with an existing external identity provider"
   ],
   "a": 3,
   "e": "IAM Identity Center gives employees one portal that grants permission sets across many accounts, and it can source those employees from an external identity provider instead of duplicating them. Public consumer sign-up flows belong to Amazon Cognito, and patching or key rotation are unrelated functions.",
   "d": 2,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 207,
   "t": "kms-encryption",
   "x": "A bank must prove exactly who used a particular encryption key and when, and it also requires that the key material never leave AWS in plaintext. Which pairing of services produces that evidence?",
   "o": [
    "AWS Secrets Manager with Amazon Inspector",
    "AWS Certificate Manager with AWS Config",
    "AWS KMS with Amazon Macie",
    "AWS KMS with AWS CloudTrail"
   ],
   "a": 3,
   "e": "AWS KMS keeps key material inside validated hardware and never releases it in plaintext, while CloudTrail records each cryptographic API call with the caller identity and timestamp. Macie discovers sensitive data in Amazon S3 and produces no record of key usage, so it cannot supply the audit trail.",
   "d": 2
  },
  {
   "id": 208,
   "t": "kms-encryption",
   "x": "An analytics team turns on default encryption for a new Amazon S3 bucket and is unsure what this means for applications that already write objects there. What is the effect on those writers?",
   "o": [
    "New objects are encrypted automatically with no application changes",
    "Existing readers lose access until they are granted a new key pair",
    "Every object must be re-uploaded through a separate encryption endpoint",
    "Applications must call a client library before every write succeeds"
   ],
   "a": 0,
   "e": "Server-side encryption is applied by Amazon S3 as objects arrive, so writers keep using the same API calls and readers keep the same permissions. The idea that clients must encrypt data themselves describes client-side encryption, which is a separate choice the customer can make but is not what default bucket encryption does.",
   "d": 2
  },
  {
   "id": 209,
   "t": "kms-encryption",
   "x": "A retailer asks who controls permissions on the customer managed key that protects its order database. Which statement describes the arrangement accurately?",
   "o": [
    "The key policy is fixed by the compliance program the customer selects",
    "Permissions are inherited automatically from the database resource policy",
    "The customer defines the key policy while AWS operates the hardware",
    "AWS defines the key policy and the customer requests exceptions"
   ],
   "a": 2,
   "e": "With a customer managed key the customer authors the key policy that decides which principals may encrypt, decrypt, or administer it, while AWS runs and maintains the underlying hardware security modules. Compliance programs describe how AWS operates the service; they never write the key policy for a specific customer.",
   "d": 2
  },
  {
   "id": 210,
   "t": "secrets-manager",
   "x": "A payments team hardcoded a database password in application source, and an auditor now demands that the credential change on a fixed schedule without any code being redeployed. Which service is purpose-built for that?",
   "o": [
    "AWS Secrets Manager",
    "AWS Systems Manager Parameter Store",
    "AWS Key Management Service",
    "AWS Certificate Manager"
   ],
   "a": 0,
   "e": "AWS Secrets Manager stores the credential, hands it to the application at runtime, and rotates it automatically on a schedule for supported databases. Parameter Store can hold a secure string but does not perform built-in credential rotation, which is the specific requirement in this scenario.",
   "d": 2
  },
  {
   "id": 211,
   "t": "secrets-manager",
   "x": "A developer needs somewhere to keep a plain configuration value such as an application log level, and the team wants the lowest cost option that still offers versioning and access control. Which choice fits?",
   "o": [
    "An object in an Amazon S3 bucket with public read access",
    "A secret in AWS Secrets Manager with rotation enabled",
    "A standard parameter in AWS Systems Manager Parameter Store",
    "An environment variable baked into the machine image"
   ],
   "a": 2,
   "e": "Standard parameters in Parameter Store are offered at no additional charge and still give version history plus IAM-controlled access, which suits non-secret configuration. Secrets Manager charges per secret and adds rotation machinery that a log level does not need.",
   "d": 2
  },
  {
   "id": 212,
   "t": "secrets-manager",
   "x": "An engineer argues that keeping an API token inside a private Git repository is safe enough for production. Which weakness does a managed secret store address that the repository does not?",
   "o": [
    "The repository cannot enforce encryption of data in transit",
    "Source control systems do not support access logging of any kind",
    "Anyone who clones the repository gains the credential permanently",
    "Git repositories cannot store text longer than a few kilobytes"
   ],
   "a": 2,
   "e": "A cloned repository carries the token into every developer laptop and every fork of the history, so the credential spreads and cannot be revoked centrally. A managed store keeps one copy behind IAM permissions and can rotate it, which is why the repository habit fails a security review.",
   "d": 2
  },
  {
   "id": 213,
   "t": "waf-shield",
   "x": "A ticketing site is receiving SQL injection attempts aimed at its search form, and the security lead wants those requests filtered before they reach the application. Which service inspects HTTP requests for such patterns?",
   "o": [
    "AWS Shield Standard",
    "Amazon GuardDuty",
    "AWS WAF",
    "AWS Network Firewall"
   ],
   "a": 2,
   "e": "AWS WAF operates on layer 7 and matches request bodies, headers, and query strings against rules that block injection attempts. Shield Standard mitigates volumetric denial of service traffic and has no visibility into the content of an individual HTTP request.",
   "d": 2
  },
  {
   "id": 214,
   "t": "waf-shield",
   "x": "A news publisher subscribes to AWS Shield Advanced ahead of an election night traffic surge. Beyond broader attack coverage, what does the subscription add?",
   "o": [
    "Free data transfer for all traffic leaving the application",
    "A dedicated physical firewall appliance in the customer rack",
    "Automatic blocking of all requests from outside one country",
    "Access to the AWS Shield Response Team during an event"
   ],
   "a": 3,
   "e": "Shield Advanced adds expert support from the Shield Response Team, detailed attack diagnostics, and cost protection for scaling caused by an attack. Geographic blocking is something the publisher would configure itself as a WAF rule, and no physical appliance is ever shipped to a customer.",
   "d": 2
  },
  {
   "id": 215,
   "t": "waf-shield",
   "x": "A university portal must stop a flood of requests from one IP address hammering its login page while staying available during a large network layer attack. Which statements are accurate? (Select TWO.)",
   "o": [
    "AWS WAF replaces the need for authentication on the login page",
    "AWS WAF encrypts the portal database at rest by default",
    "AWS Shield defends against volumetric network layer attacks",
    "AWS WAF rate-based rules can throttle requests from a single source",
    "AWS Shield rewrites application URLs to hide the origin server"
   ],
   "a": 2,
   "e": "Rate-based rules in AWS WAF count requests per source and block sources that exceed a threshold, while Shield absorbs volumetric floods aimed at the network and transport layers. Neither service encrypts databases nor substitutes for authenticating users, which remain separate customer responsibilities.",
   "d": 2,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 216,
   "t": "guardduty-inspector",
   "x": "An operations engineer receives an alert that one of the firm EC2 instances has been communicating with a known cryptocurrency mining pool. Which service most likely produced that finding?",
   "o": [
    "AWS Trusted Advisor",
    "Amazon GuardDuty",
    "AWS Config",
    "Amazon Inspector"
   ],
   "a": 1,
   "e": "Amazon GuardDuty analyzes account activity, DNS queries, and network flows against threat intelligence, and mining pool communication is one of its signature detections. Amazon Inspector looks for vulnerable software packages and would not observe an active outbound connection.",
   "d": 2
  },
  {
   "id": 217,
   "t": "guardduty-inspector",
   "x": "A development group pushes container images to Amazon ECR many times each day and wants every image evaluated against published vulnerability data as soon as it lands. Which service performs that scan?",
   "o": [
    "Amazon Macie",
    "Amazon GuardDuty",
    "Amazon Inspector",
    "AWS Audit Manager"
   ],
   "a": 2,
   "e": "Amazon Inspector continuously scans EC2 instances, container images in Amazon ECR, and Lambda functions for known vulnerabilities and reports severity. GuardDuty watches for active threats and malicious behavior rather than cataloguing which packages carry published flaws.",
   "d": 2
  },
  {
   "id": 218,
   "t": "guardduty-inspector",
   "x": "A security manager asks whether Amazon GuardDuty requires software to be installed on every EC2 instance before detection begins. How does the service obtain what it needs?",
   "o": [
    "It reads only findings that administrators submit manually",
    "It depends on a hardware appliance placed in every subnet",
    "It analyzes existing log and telemetry sources without an agent",
    "It requires an agent installed on each monitored instance"
   ],
   "a": 2,
   "e": "GuardDuty consumes sources such as CloudTrail events, VPC flow logs, and DNS logs directly from AWS, so it can be enabled with no deployment on workloads. Assuming an agent is required confuses it with tools that inspect the inside of a host.",
   "d": 2
  },
  {
   "id": 219,
   "t": "macie-detective",
   "x": "After a suspicious API call is flagged, an incident responder needs to pivot through weeks of related activity and see how one compromised credential moved around the environment. Which service is built for that analysis?",
   "o": [
    "Amazon GuardDuty",
    "Amazon Detective",
    "Amazon Inspector",
    "AWS Config"
   ],
   "a": 1,
   "e": "Amazon Detective builds a linked graph from log data so responders can follow an entity across time and understand the scope of an event. GuardDuty raises the original finding but stops short of the interactive investigation workflow the responder is describing.",
   "d": 2
  },
  {
   "id": 220,
   "t": "macie-detective",
   "x": "A legal team suspects that engineers have uploaded spreadsheets holding national identification numbers into shared object storage. Which service can locate that content automatically?",
   "o": [
    "AWS Firewall Manager",
    "AWS Artifact",
    "Amazon Macie",
    "Amazon Detective"
   ],
   "a": 2,
   "e": "Amazon Macie inspects objects in Amazon S3 and classifies personally identifiable and other sensitive data types, reporting where they were found. Amazon Detective analyzes security findings and never opens a file to look at what kind of data it contains.",
   "d": 2
  },
  {
   "id": 221,
   "t": "macie-detective",
   "x": "A retailer wants to know both where its customer files sit in object storage and how a flagged security event unfolded over time. Which statements describe those two services correctly? (Select TWO.)",
   "o": [
    "Amazon Detective builds linked visualizations from security findings",
    "Amazon Macie issues compliance certificates for auditors to review",
    "Amazon Detective encrypts objects that contain personal information",
    "Amazon Macie classifies sensitive objects stored in Amazon S3",
    "Amazon Macie blocks malicious traffic before it reaches the bucket"
   ],
   "a": 0,
   "e": "Macie answers the discovery question by scanning and classifying S3 objects, while Detective answers the investigation question by correlating findings into a navigable graph. Neither one filters traffic or encrypts data, and compliance certificates come from AWS Artifact instead.",
   "d": 2,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 222,
   "t": "organizations-scp",
   "x": "A developer holds an identity policy granting full Amazon DynamoDB access, but a service control policy above the account denies every DynamoDB action. What happens when the developer makes the call?",
   "o": [
    "The request is queued until an administrator approves the exception",
    "The request succeeds but is logged as a policy conflict for review",
    "The request succeeds because identity policies outrank organization policies",
    "The request is denied because the account maximum permissions exclude it"
   ],
   "a": 3,
   "e": "A service control policy defines the ceiling of what any principal in the account may do, so an action it does not permit cannot be granted by an identity policy underneath. Identity policies never override that ceiling, which is why the developer sees an access denied error.",
   "d": 2
  },
  {
   "id": 223,
   "t": "organizations-scp",
   "x": "A parent organization wants an assurance that nobody, including administrators inside a member account, can turn off logging there. Which control enforces that ceiling?",
   "o": [
    "A tag policy that marks logging resources as protected",
    "An IAM group with a read-only policy in each account",
    "A permissions boundary applied to the root user of each account",
    "A service control policy that denies the logging actions"
   ],
   "a": 3,
   "e": "A service control policy attached above the account restricts every principal in it, so even an account administrator cannot perform the denied action. An IAM group only limits the users placed in it and can be edited by any administrator in that account, so it provides no real guarantee.",
   "d": 2
  },
  {
   "id": 224,
   "t": "organizations-scp",
   "x": "An architect is introducing AWS Organizations to a team that has only ever worked in a single account. Which statements are true? (Select TWO.)",
   "o": [
    "A service control policy sets the maximum permissions for an account",
    "A service control policy grants permissions to users on its own",
    "Organizational units can contain only one account each",
    "Organizations replaces the need for IAM policies inside each account",
    "Accounts can be grouped into organizational units for policy targeting"
   ],
   "a": 0,
   "e": "Organizational units let similar accounts be managed together, and a service control policy applied to one bounds what those accounts may do. The common misunderstanding is that an SCP grants access; it only filters, so IAM policies inside each account are still required to allow anything.",
   "d": 2,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 225,
   "t": "control-tower",
   "x": "A platform team must hand each new project group a preconfigured AWS account within a day instead of the two weeks manual setup consumes. Which AWS Control Tower feature automates that provisioning?",
   "o": [
    "Cost anomaly detection",
    "Elastic Beanstalk environments",
    "Trusted Advisor checks",
    "Account Factory"
   ],
   "a": 3,
   "e": "Account Factory creates new accounts from a standard blueprint with the baseline controls and network configuration already applied. Trusted Advisor evaluates an existing environment against best practices and does not create accounts at all.",
   "d": 2
  },
  {
   "id": 226,
   "t": "control-tower",
   "x": "A reviewer notices that one workload account no longer matches the baseline AWS Control Tower applied at creation because someone edited a governed resource by hand. What is this condition called?",
   "o": [
    "Throttling",
    "Deprecation",
    "Drift",
    "Federation"
   ],
   "a": 2,
   "e": "Control Tower reports drift when a governed account or resource diverges from the landing zone baseline, and it offers a path to bring the account back into line. Throttling refers to rate limiting on API calls and has nothing to do with governance state.",
   "d": 2
  },
  {
   "id": 227,
   "t": "control-tower",
   "x": "A regional bank must guarantee that every account it creates automatically sends its audit records to a central, tightly restricted archive. How does a landing zone satisfy that requirement?",
   "o": [
    "It creates dedicated log archive and audit accounts during setup",
    "It requires each team to configure its own log destination",
    "It stores all logs inside the management account by default",
    "It disables logging until an administrator approves each account"
   ],
   "a": 0,
   "e": "The AWS Control Tower landing zone provisions separate log archive and audit accounts and directs governed account logs there from the start. Leaving log destinations to each team is the manual pattern the landing zone exists to eliminate.",
   "d": 2
  },
  {
   "id": 228,
   "t": "config-cloudtrail",
   "x": "Two auditors disagree about which log answers their question. One wants to know who invoked an API, the other wants to know what a resource looked like last Tuesday. Which service answers the second auditor?",
   "o": [
    "AWS Config",
    "Amazon CloudWatch Logs",
    "AWS X-Ray",
    "AWS CloudTrail"
   ],
   "a": 0,
   "e": "AWS Config keeps a versioned inventory of resource configurations, so it can show the exact state of a resource on a past date. CloudTrail answers the first auditor by recording the identity, time, and source of each API call, but it does not store resource state.",
   "d": 2
  },
  {
   "id": 229,
   "t": "config-cloudtrail",
   "x": "A newly hired administrator asks how far back API activity can be reviewed in the CloudTrail console when nobody has configured anything yet. Which statement is accurate?",
   "o": [
    "Nothing is recorded until a trail is created by an administrator",
    "All events are retained indefinitely at no additional charge",
    "Recent management events are viewable for the past 90 days",
    "Only events from the current calendar month are available"
   ],
   "a": 2,
   "e": "Event history captures management events automatically and keeps them viewable for 90 days without any setup. Longer retention requires creating a trail that delivers events to Amazon S3, which is why assuming indefinite free retention leads to gaps during an investigation.",
   "d": 2
  },
  {
   "id": 230,
   "t": "config-cloudtrail",
   "x": "A compliance program demands both a record of every configuration change and proof of which identity initiated it. Which statements about these two services are correct? (Select TWO.)",
   "o": [
    "AWS Config encrypts all data stored in Amazon S3 buckets",
    "AWS Config records resource configuration changes over time",
    "AWS Config blocks changes that violate a rule automatically",
    "AWS CloudTrail records the API calls made in the account",
    "AWS CloudTrail scans instances for missing security patches"
   ],
   "a": 1,
   "e": "Config tracks what resources look like and how that changed, while CloudTrail tracks who called which API and when, so together they satisfy both halves of the requirement. Config evaluates and can trigger remediation but does not prevent a change from happening, and patch scanning belongs to Amazon Inspector.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 231,
   "t": "artifact-compliance",
   "x": "A prospective enterprise buyer asks a software vendor to demonstrate that the underlying infrastructure holds an ISO 27001 certification. Where does the vendor retrieve that evidence about AWS?",
   "o": [
    "AWS Trusted Advisor",
    "AWS Artifact",
    "AWS Audit Manager",
    "AWS Config"
   ],
   "a": 1,
   "e": "AWS Artifact is the self-service portal for AWS audit reports and certifications, including ISO and SOC documents. Audit Manager helps a customer collect evidence about its own workload against a framework, so it does not supply AWS certification documents.",
   "d": 2
  },
  {
   "id": 232,
   "t": "artifact-compliance",
   "x": "A payment processor must attest that cardholder data it handles on AWS follows PCI DSS. Which division of duty is accurate?",
   "o": [
    "Certification is granted by the AWS Support plan the customer buys",
    "AWS certifies its infrastructure while the customer certifies its workload",
    "AWS certifies the entire environment including customer applications",
    "The customer inherits certification for anything deployed on AWS"
   ],
   "a": 1,
   "e": "Compliance is inherited only for the layers AWS operates; the application, its configuration, and how cardholder data is handled remain in scope for the customer assessment. Believing that deployment on AWS confers certification automatically is the misconception that causes failed audits.",
   "d": 2
  },
  {
   "id": 233,
   "t": "artifact-compliance",
   "x": "A vendor risk questionnaire arrives at a startup running entirely on AWS. Which items can the startup satisfy directly through AWS Artifact? (Select TWO.)",
   "o": [
    "Retrieving AWS agreements such as the business associate addendum",
    "Downloading the current SOC 1 report for AWS infrastructure",
    "Certifying that the startup staff completed security training",
    "Producing an application penetration test of the startup own code",
    "Listing the IAM users that exist in the startup AWS account"
   ],
   "a": 0,
   "e": "Artifact publishes AWS audit reports on demand and hosts the legal agreements customers accept, such as the HIPAA business associate addendum. Testing the startup own application and training its staff are customer obligations that no AWS report can answer.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 234,
   "t": "shared-responsibility",
   "x": "A retailer engineering team configures a security group that accidentally exposes a database port to the entire internet. Who is accountable for that misconfiguration?",
   "o": [
    "The customer, because security group rules are customer configured",
    "Both parties equally, because the rule spans infrastructure and data",
    "AWS, because the networking layer belongs to the provider",
    "The Region operator, because rules are enforced at the facility"
   ],
   "a": 0,
   "e": "Security group rules are firewall settings the customer defines, which places them squarely on the security in the cloud side of the model. AWS operates the infrastructure that enforces the rule but never decides which ports a customer chooses to open.",
   "d": 2
  },
  {
   "id": 235,
   "t": "shared-responsibility",
   "x": "A hotel chain runs a booking system on Amazon EC2 with its reservation data in Amazon RDS. Which duties belong to AWS in that arrangement? (Select TWO.)",
   "o": [
    "Deciding the backup retention window for the booking data",
    "Choosing which users receive access to the booking database",
    "Applying patches to the underlying RDS database engine host",
    "Replacing failed disks in the data center hosting the instances",
    "Configuring the parameter group settings the application needs"
   ],
   "a": 2,
   "e": "AWS maintains the physical hardware and, for a managed database, patches the host and engine software beneath the service. Parameter tuning, access decisions, and retention settings stay with the hotel chain because they express business intent rather than infrastructure upkeep.",
   "d": 2,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 236,
   "t": "shared-responsibility",
   "x": "A furniture retailer keeps product photography in Amazon S3. Who guarantees the physical destruction of decommissioned storage media that once held those objects?",
   "o": [
    "AWS handles media decommissioning as part of its facility controls",
    "The customer must schedule destruction through a support case",
    "The customer must run a wipe utility before releasing the storage",
    "Neither party, because object storage never reuses physical media"
   ],
   "a": 0,
   "e": "Media decommissioning happens inside the data center, which is entirely on the AWS side of the model, and it follows a documented destruction process. Customers have no access to the physical disks and therefore cannot wipe or schedule destruction themselves.",
   "d": 2
  },
  {
   "id": 237,
   "t": "shared-responsibility",
   "x": "A logistics firm swaps a self-managed message broker running on EC2 for Amazon SQS and asks what leaves its plate as a result. Which obligation disappears for the firm?",
   "o": [
    "Deciding which applications may send and receive messages",
    "Patching the operating system that runs the messaging software",
    "Setting the access policy that governs the queue",
    "Choosing whether message payloads are encrypted at rest"
   ],
   "a": 1,
   "e": "Moving to a fully managed service transfers host and platform maintenance to AWS, so nobody at the firm patches an operating system for messaging anymore. Access decisions and encryption choices continue to reflect the firm requirements and stay with the customer regardless of service model.",
   "d": 2
  },
  {
   "id": 238,
   "t": "identity-iam",
   "x": "A contractor needs console access for a two-week engagement, and the access must expire on its own rather than depending on someone remembering to remove it. Which approach fits best?",
   "o": [
    "Federated access through a role with a session that expires",
    "An access key stored in the contractor password manager",
    "An IAM user with a password and a calendar reminder to delete it",
    "A shared administrator login handed to the contractor"
   ],
   "a": 0,
   "e": "Federated role access issues a session that ends after a defined duration, so the credential stops working with no cleanup task required. Creating an IAM user relies on a manual deletion step, which is exactly the failure mode that leaves orphaned accounts behind.",
   "d": 2
  },
  {
   "id": 239,
   "t": "identity-iam",
   "x": "An auditor asks a startup to show which IAM users still hold unused passwords and access keys older than a year. Which IAM feature produces that list?",
   "o": [
    "The credential report",
    "The service quota console",
    "The organization trail",
    "The billing dashboard"
   ],
   "a": 0,
   "e": "The IAM credential report is a downloadable file listing every user together with password and access key status, age, and last use. The billing dashboard summarizes spending and reveals nothing about the state of individual credentials.",
   "d": 2
  },
  {
   "id": 240,
   "t": "identity-iam",
   "x": "A support engineer must read CloudWatch metrics in the production account while signed in to her own account, and she should not need a second password. Which elements make that possible? (Select TWO.)",
   "o": [
    "A root user password shared between the two accounts",
    "Temporary credentials issued when she assumes the role",
    "A role in the production account that trusts her account",
    "A second IAM user created for her in the production account",
    "A permanent access key copied from the production account"
   ],
   "a": 1,
   "e": "Cross-account access works by creating a role in the target account whose trust policy names the other account, then assuming it to receive short-lived credentials. Creating a duplicate user or copying a long-lived key reintroduces the second credential the design is meant to avoid.",
   "d": 2,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 241,
   "t": "security-services",
   "x": "A team must present TLS certificates on a public Application Load Balancer and wants renewal to happen without anyone tracking expiry dates. Which service issues and renews those certificates?",
   "o": [
    "AWS Certificate Manager",
    "AWS Secrets Manager",
    "AWS Key Management Service",
    "Amazon Route 53"
   ],
   "a": 0,
   "e": "AWS Certificate Manager provisions public certificates for integrated services such as load balancers and renews them automatically before expiry. KMS manages encryption keys for data at rest and does not issue the certificates a browser validates.",
   "d": 2
  },
  {
   "id": 242,
   "t": "security-services",
   "x": "A small team with no dedicated security engineer wants automated checks that surface issues like buckets open to the public and access keys that have never been rotated. Which service provides those built-in checks?",
   "o": [
    "AWS Trusted Advisor",
    "AWS Artifact",
    "AWS Resource Access Manager",
    "Amazon Detective"
   ],
   "a": 0,
   "e": "Trusted Advisor evaluates an account against best practice checks across security, cost, performance, and other categories and highlights items to fix. AWS Artifact only distributes compliance documents and never inspects how a customer account is configured.",
   "d": 2
  },
  {
   "id": 243,
   "t": "security-services",
   "x": "A company plans an authorized penetration test against the EC2 instances it operates. What does AWS policy permit?",
   "o": [
    "Testing is prohibited on all customer workloads in AWS",
    "Testing only after a support engineer schedules the window",
    "Testing permitted services without prior approval from AWS",
    "Testing of any AWS service including shared infrastructure"
   ],
   "a": 2,
   "e": "AWS publishes a list of services customers may test against their own resources without requesting permission first, provided the activity stays within the policy. Testing is not open ended, though, since probing shared infrastructure or other tenants remains off limits.",
   "d": 2
  },
  {
   "id": 244,
   "t": "governance",
   "x": "A finance leader wants every resource labeled with a cost center so that spending and access reviews can be grouped by department. Which practice supports that goal?",
   "o": [
    "Naming every resource after the engineer who created it",
    "Applying a consistent tagging strategy across resources",
    "Storing an inventory spreadsheet outside of AWS",
    "Creating one AWS account for every individual employee"
   ],
   "a": 1,
   "e": "Tags attach metadata to resources so reports, policies, and reviews can filter by attributes such as cost center or environment. An external spreadsheet drifts from reality as soon as someone launches a resource without updating it.",
   "d": 2
  },
  {
   "id": 245,
   "t": "governance",
   "x": "A regulated insurer is defining how its AWS environment will be governed as more teams begin building. Which practices align with AWS guidance? (Select TWO.)",
   "o": [
    "Disable logging in development accounts to reduce noise",
    "Grant permissions that match the minimum a task requires",
    "Share one administrator credential among the operations staff",
    "Record configuration changes so drift can be reviewed later",
    "Grant every engineer administrator access to avoid delays"
   ],
   "a": 1,
   "e": "Least privilege and a durable record of configuration change are foundational governance practices that make review and incident response possible. Sharing credentials destroys attribution, and turning off logging in lower environments removes the evidence needed when something goes wrong there.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 246,
   "t": "regions-az-edge",
   "x": "An architect must place a workload so that a fire in one building cannot take the whole application offline, yet replication between the copies still has to finish in milliseconds. How are Availability Zones built to support that pairing of goals?",
   "o": [
    "Zones are caching sites placed in major cities to shorten distance to end users",
    "Zones are single racks inside one shared building, wired to a common power feed",
    "Zones are isolated data center groups in a Region, joined by high-speed private links",
    "Zones are separate AWS accounts that partition billing for a workload"
   ],
   "a": 2,
   "e": "An Availability Zone is one or more discrete data centers with independent power, cooling, and physical security, spaced far enough apart to avoid a shared disaster but joined by private high-bandwidth links so replication stays fast. Caching sites placed near end users describe edge locations, and zones have nothing to do with account or billing boundaries.",
   "d": 3
  },
  {
   "id": 247,
   "t": "regions-az-edge",
   "x": "A video streaming platform based in Toronto is deciding where to place its infrastructure and how to shorten playback start times for viewers abroad. Which statements about Regions and edge locations are correct? (Select TWO.)",
   "o": [
    "Regions are automatically linked so data replicates between them by default",
    "Every Region contains exactly one Availability Zone dedicated to caching",
    "A Region is a physical area of the world that contains multiple isolated Availability Zones",
    "Edge locations cache content closer to viewers and are far more numerous than Regions",
    "Edge locations replace Availability Zones when a Region is unavailable"
   ],
   "a": 2,
   "e": "A Region is a geographic area made up of multiple isolated Availability Zones, and edge locations form a much larger network of caching sites that sit close to viewers. Regions are not replicated to one another by default; copying data across Regions is something the customer chooses to configure.",
   "d": 3,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 248,
   "t": "outposts-local-zones",
   "x": "A hospital's imaging application has to stay physically inside the hospital building to satisfy regulators, but the operations staff want to keep managing it with the same AWS APIs and console they already use. Which offering meets both conditions?",
   "o": [
    "Amazon CloudFront",
    "AWS Direct Connect",
    "AWS Outposts",
    "AWS Local Zones"
   ],
   "a": 2,
   "e": "AWS Outposts ships AWS-managed racks into the customer's own facility, so the workload runs on premises while the team keeps the familiar AWS control plane and tooling. Local Zones sit in AWS-operated metro sites rather than the customer's building, and Direct Connect supplies only a private network link.",
   "d": 3
  },
  {
   "id": 249,
   "t": "outposts-local-zones",
   "x": "A game studio needs single-digit millisecond response for players connecting over home broadband in one large metropolitan area, but the nearest Region adds too much delay. Which AWS option places compute nearer to those players?",
   "o": [
    "AWS Wavelength",
    "AWS Local Zones",
    "Amazon Route 53",
    "AWS Outposts"
   ],
   "a": 1,
   "e": "Local Zones extend a Region into a metropolitan area so latency-sensitive workloads sit close to end users while staying under the same AWS control plane. Wavelength targets traffic reaching devices on 5G carrier networks, and Outposts would force the studio to host hardware in its own facility.",
   "d": 3
  },
  {
   "id": 250,
   "t": "sdk-cli-console",
   "x": "A systems administrator has to schedule a nightly shell script on a Linux workstation that finds and terminates untagged development instances. Which AWS access method suits an unattended, scripted task like this?",
   "o": [
    "AWS Software Development Kit for Java",
    "AWS Management Console",
    "AWS Command Line Interface",
    "AWS Systems Manager Session Manager"
   ],
   "a": 2,
   "e": "The AWS CLI issues service calls straight from a terminal or shell script, which is exactly what an unattended nightly job needs. The console is interactive and cannot be scheduled, and reaching for an SDK would mean building and maintaining an application instead of a short script.",
   "d": 3
  },
  {
   "id": 251,
   "t": "sdk-cli-console",
   "x": "A newly hired engineer at a logistics firm is comparing the ways that people and programs talk to AWS services. Which statements about these access methods are correct? (Select TWO.)",
   "o": [
    "The CLI can only be used from Amazon EC2 instances, not from a laptop",
    "An SDK lets application code call AWS services in languages such as Python or Java",
    "The console is required to create resources, while the CLI can only read them",
    "SDKs are available exclusively for mobile operating systems",
    "The Management Console offers a browser-based graphical interface for AWS services"
   ],
   "a": 1,
   "e": "The console is the graphical, browser-based entry point, and SDKs let programs invoke AWS services from languages like Python or Java. The CLI runs anywhere it is installed, including a laptop, and it can create resources just as readily as it reads them.",
   "d": 3,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 252,
   "t": "cloudformation-iac",
   "x": "An auditor asks a bank how it can prove that its staging environment matches production. The bank builds both from one declarative template file kept in version control. What is this practice called?",
   "o": [
    "Infrastructure as code",
    "Horizontal scaling",
    "Continuous integration",
    "Blue/green deployment"
   ],
   "a": 0,
   "e": "Defining environments in machine-readable template files held in source control is infrastructure as code, and it is what makes two environments provably identical. Continuous integration concerns building and testing application code rather than provisioning the resources underneath it.",
   "d": 3
  },
  {
   "id": 253,
   "t": "cloudformation-iac",
   "x": "A template deployment fails partway through, leaving some resources created and others not. The engineer wants no leftover pieces to clean up by hand. What does AWS CloudFormation do by default in this situation?",
   "o": [
    "It converts the stack into a read-only snapshot for later review",
    "It migrates the stack to another Region and retries the deployment",
    "It leaves partially created resources in place for manual cleanup",
    "It rolls the stack back to the previous state automatically"
   ],
   "a": 3,
   "e": "CloudFormation treats a stack as one unit, so a failed create or update triggers an automatic rollback that removes or restores the affected resources. Orphaned half-built resources are precisely the problem that managing infrastructure as a stack is meant to eliminate.",
   "d": 3
  },
  {
   "id": 254,
   "t": "auto-scaling",
   "x": "A ticketing website sees traffic climb sharply for about two hours after each concert announcement and drop back afterward. The operations lead wants capacity to follow that curve with nobody watching a dashboard. What should be configured?",
   "o": [
    "An Auto Scaling group with a target tracking policy on CPU utilization",
    "A second Region running an identical copy of the fleet at all times",
    "A larger instance type provisioned to handle the highest expected peak",
    "A scheduled nightly restart of the existing instances in the fleet"
   ],
   "a": 0,
   "e": "Target tracking holds a chosen metric such as average CPU near a set value, adding and removing instances as demand moves. Permanently oversizing for the peak wastes money for the other twenty-two hours of the day, and restarting instances does nothing about capacity.",
   "d": 3
  },
  {
   "id": 255,
   "t": "auto-scaling",
   "x": "A monitoring alert shows that one member of a fleet has stopped passing its health checks while the rest keep serving traffic normally. What action does the Auto Scaling group take?",
   "o": [
    "It moves the failing instance into a separate quarantine subnet",
    "It terminates the failing instance and launches a replacement",
    "It reboots the failing instance and keeps it in service regardless",
    "It pauses all scaling activity until an operator investigates"
   ],
   "a": 1,
   "e": "Auto Scaling replaces instances that fail health checks: the unhealthy one is terminated and a fresh instance is launched to hold the group at its desired count. It never waits for a human, and it has no repair or quarantine function.",
   "d": 3
  },
  {
   "id": 256,
   "t": "elastic-beanstalk",
   "x": "A university department has a Java application packaged as a WAR file and nobody on staff with infrastructure background. It wants AWS to create the servers, load balancer, and scaling rules straight from that uploaded package. Which service does this?",
   "o": [
    "AWS Fargate",
    "AWS CloudFormation",
    "AWS Elastic Beanstalk",
    "Amazon Lightsail"
   ],
   "a": 2,
   "e": "Elastic Beanstalk accepts an application package and builds the compute, load balancing, and scaling behind it, which suits people who do not want to design infrastructure. CloudFormation would still require the department to describe every resource itself in a template.",
   "d": 3
  },
  {
   "id": 257,
   "t": "elastic-beanstalk",
   "x": "A finance team reviewing an invoice asks what portion of an Elastic Beanstalk environment's charge is the fee for Beanstalk itself. What is the correct answer?",
   "o": [
    "A percentage surcharge is added to every underlying resource charge",
    "Nothing, because charges cover only the resources the environment uses",
    "A flat monthly platform fee applies in addition to resource charges",
    "An hourly orchestration fee applies whenever an environment is running"
   ],
   "a": 1,
   "e": "Elastic Beanstalk carries no additional charge of its own; customers pay only for the EC2 instances, load balancers, and storage the environment provisions. The other choices describe fee structures that this service simply does not have.",
   "d": 3
  },
  {
   "id": 258,
   "t": "lightsail",
   "x": "A neighborhood bakery wants a simple online store on a preconfigured stack, billed at a flat monthly rate it can budget for, and set up through a simplified interface instead of the full AWS console. Which offering targets this customer?",
   "o": [
    "Amazon WorkSpaces",
    "Amazon Lightsail",
    "Amazon EC2",
    "AWS Elastic Beanstalk"
   ],
   "a": 1,
   "e": "Lightsail bundles compute, storage, and data transfer into fixed-price plans behind a simplified console, which fits a small business that wants a predictable bill. EC2 prices each component separately and exposes far more configuration than this customer needs to see.",
   "d": 3
  },
  {
   "id": 259,
   "t": "lightsail",
   "x": "A consultant advises two clients: one runs a low-traffic company blog, the other runs a fluctuating analytics platform spread over several Availability Zones. Which statements about Amazon Lightsail apply here? (Select TWO.)",
   "o": [
    "Lightsail instances can only run container images, never a full operating system",
    "Lightsail requires a three-year commitment before any instance can be launched",
    "Lightsail plans carry a fixed monthly price rather than per-component billing",
    "Lightsail is the stronger fit for the analytics platform's variable architecture",
    "Lightsail suits the blog because its plans bundle compute, storage, and transfer"
   ],
   "a": 2,
   "e": "Lightsail is built for small, predictable workloads such as a company blog, and its defining trait is a bundled fixed monthly plan. A fluctuating analytics platform spanning multiple Availability Zones belongs on EC2 and related services, where each component scales and is priced on its own.",
   "d": 3,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 260,
   "t": "windows-on-aws",
   "x": "A manufacturer runs a .NET application against SQL Server and wants both moved to AWS without changing the operating system or negotiating separate Windows licensing. What is the usual approach?",
   "o": [
    "Launch Windows EC2 instances with licensing included in the hourly rate",
    "Run the application only on AWS Fargate with a Windows base image",
    "Host the workload on Amazon Lightsail, which is Windows only",
    "Rewrite the application for Linux before any migration can begin"
   ],
   "a": 0,
   "e": "AWS offers Windows Server EC2 instances whose license cost is folded into the hourly rate, so the application moves as-is. Rewriting for Linux is an optional modernization decision rather than a prerequisite, and Lightsail is not a Windows-only service.",
   "d": 3
  },
  {
   "id": 261,
   "t": "windows-on-aws",
   "x": "An IT group must give 300 remote staff a managed Windows desktop reachable from home laptops and thin clients, with no physical PCs to ship or track. Which AWS service delivers that?",
   "o": [
    "Amazon EC2 Windows instances",
    "Amazon WorkSpaces",
    "Amazon AppStream 2.0",
    "AWS Directory Service"
   ],
   "a": 1,
   "e": "Amazon WorkSpaces provides persistent managed Windows desktops streamed to any supported client device. AppStream 2.0 streams individual applications rather than a whole desktop, and Directory Service only supplies the identity layer that such desktops authenticate against.",
   "d": 3
  },
  {
   "id": 262,
   "t": "lambda",
   "x": "A charity's donation page calls a small function to validate postal addresses. Volumes are unpredictable, and the trustees refuse to pay for idle servers between gifts. Which billing behavior makes Lambda attractive here?",
   "o": [
    "Charges are fixed per month regardless of invocation count",
    "Charges depend on the number of instances reserved in advance",
    "Charges begin when the function is deployed and run continuously",
    "Charges accrue only while function code is executing"
   ],
   "a": 3,
   "e": "Lambda bills on the number of requests and the duration each invocation runs, so a function that nobody calls costs nothing. Simply deploying a function accrues no charge until it is invoked, and that is what separates the model from keeping servers running.",
   "d": 3
  },
  {
   "id": 263,
   "t": "lambda",
   "x": "A logistics firm plans a REST endpoint backed by serverless business logic and needs a managed front door that handles request routing, throttling, and authorization before the code runs. Which service completes that pairing?",
   "o": [
    "AWS Direct Connect",
    "Amazon Route 53",
    "Amazon API Gateway",
    "Elastic Load Balancing"
   ],
   "a": 2,
   "e": "API Gateway is the managed entry point for serverless APIs, applying routing, throttling, and authorization before invoking the function behind it. Route 53 resolves domain names but performs none of that per-request control.",
   "d": 3
  },
  {
   "id": 264,
   "t": "lambda",
   "x": "An engineering manager is sorting jobs into those worth moving to Lambda and those better left on instances. Which workload traits point toward Lambda? (Select TWO.)",
   "o": [
    "Software licensed per physical socket on dedicated hardware",
    "Short bursts of processing triggered by events such as file uploads",
    "A process that must run for eight uninterrupted hours per execution",
    "Traffic that is intermittent and hard to forecast from day to day",
    "A legacy application that requires a persistent local disk between runs"
   ],
   "a": 1,
   "e": "Lambda fits event-driven bursts and unpredictable traffic because it scales per request and bills only for execution time. An eight-hour single execution exceeds the function timeout, and socket-licensed or disk-dependent software needs long-lived instances instead.",
   "d": 3,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 265,
   "t": "s3-storage-classes",
   "x": "A research group uploads sensor readings whose access pattern nobody can predict: some files get read daily for months, others are never opened again. The group wants AWS to shift each object between frequent and infrequent tiers on its own. Which storage class fits?",
   "o": [
    "S3 One Zone-Infrequent Access",
    "S3 Standard",
    "S3 Intelligent-Tiering",
    "S3 Glacier Deep Archive"
   ],
   "a": 2,
   "e": "Intelligent-Tiering monitors each object and moves it between access tiers automatically, which is the whole point when the pattern is unknown. S3 Standard never tiers on its own, and Deep Archive would make the frequently read files slow and costly to retrieve.",
   "d": 3
  },
  {
   "id": 266,
   "t": "s3-storage-classes",
   "x": "A studio keeps rendering caches that are read a few times a month and can be regenerated from source if they are ever lost. Given that monthly read frequency, which class produces the lowest total bill while still returning objects in milliseconds?",
   "o": [
    "S3 Glacier Instant Retrieval",
    "S3 Standard-Infrequent Access",
    "S3 One Zone-Infrequent Access",
    "S3 Standard"
   ],
   "a": 2,
   "e": "One Zone-Infrequent Access keeps a single Availability Zone copy and, for data read several times a month, comes out cheapest of the millisecond-retrieval classes once retrieval fees are counted; losing a zone is tolerable because the caches can be rebuilt. Glacier Instant Retrieval advertises a lower per-gigabyte storage rate, but it is priced for archives touched roughly once a quarter and its far higher retrieval charge swamps that saving at this read frequency.",
   "d": 3
  },
  {
   "id": 267,
   "t": "s3-storage-classes",
   "x": "Regulators require a bank to keep transaction ledgers for ten years. Anyone asking for one would likely wait up to 48 hours, and most files will never be requested. Which class gives the lowest storage price?",
   "o": [
    "S3 Intelligent-Tiering",
    "S3 Standard-Infrequent Access",
    "S3 Glacier Flexible Retrieval",
    "S3 Glacier Deep Archive"
   ],
   "a": 3,
   "e": "Deep Archive is the least expensive S3 class and is meant for long-term retention where retrieval measured in hours is acceptable. Glacier Flexible Retrieval costs more per gigabyte because it exists for archives that must come back within minutes to a few hours.",
   "d": 3
  },
  {
   "id": 268,
   "t": "s3-storage-classes",
   "x": "A publisher wants to cut its object storage bill without touching the application code that reads the bucket. Which statements about S3 lifecycle configuration are correct? (Select TWO.)",
   "o": [
    "Rules apply only to objects uploaded through the AWS Management Console",
    "Rules can expire and delete objects once they reach a defined age",
    "Rules require an application change to take effect on existing objects",
    "Rules move objects between Regions to reduce cross-border latency",
    "Rules can transition objects to a cheaper class after a set number of days"
   ],
   "a": 1,
   "e": "Lifecycle rules act on object age, either transitioning objects into a lower-cost class or expiring them entirely, with no application change involved. Moving data between Regions is the job of S3 replication, which is a separate feature from lifecycle rules.",
   "d": 3,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 269,
   "t": "ebs-efs",
   "x": "A database administrator needs persistent block storage attached to one EC2 instance, plus point-in-time snapshots held durably so a corrupted volume can be restored later. Which service provides that?",
   "o": [
    "EC2 instance store",
    "Amazon EBS",
    "Amazon S3 Glacier",
    "Amazon EFS"
   ],
   "a": 1,
   "e": "EBS supplies persistent block volumes for a single instance and supports snapshots stored durably in Amazon S3 for restore. Instance store is ephemeral and vanishes when the instance stops, so it cannot back a database expected to survive a restart.",
   "d": 3
  },
  {
   "id": 270,
   "t": "ebs-efs",
   "x": "An architect is documenting when colleagues should reach for Amazon EFS rather than Amazon EBS. Which characteristics belong to EFS? (Select TWO.)",
   "o": [
    "It can be mounted by many Linux instances at the same time",
    "Its capacity grows and shrinks as files are added and removed",
    "It stores data as objects addressed through a web request",
    "It attaches to exactly one instance and one Availability Zone",
    "It is billed by provisioning a fixed volume size in advance"
   ],
   "a": 0,
   "e": "EFS is a shared file system that many Linux instances can mount concurrently, and it expands and contracts elastically with no preprovisioning. Attaching to a single instance in one Availability Zone and being sized ahead of time describes EBS instead.",
   "d": 3,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 271,
   "t": "storage-gateway",
   "x": "A film archive keeps writing to on-premises tape drives through backup software the team refuses to replace, but management wants those tapes to land in AWS instead of a vault across town. Which service presents a virtual tape library to that software?",
   "o": [
    "AWS Snowball Edge",
    "Amazon FSx",
    "AWS Storage Gateway",
    "AWS DataSync"
   ],
   "a": 2,
   "e": "The tape gateway in AWS Storage Gateway looks like a virtual tape library to existing backup applications while writing the data into Amazon S3 and Glacier. Snowball moves bulk data as a one-time physical shipment and offers no ongoing tape interface.",
   "d": 3
  },
  {
   "id": 272,
   "t": "storage-gateway",
   "x": "Branch offices need fast local reads of shared files while the durable copy lives in Amazon S3, and the arrangement has to be permanent rather than a one-time migration. Which service is designed for that hybrid pattern?",
   "o": [
    "AWS Storage Gateway",
    "AWS Snowcone",
    "AWS Outposts",
    "Amazon EBS"
   ],
   "a": 0,
   "e": "Storage Gateway holds a local cache at each site for fast reads while keeping the authoritative data in AWS, which is exactly what an ongoing hybrid storage link means. Snowcone is a small transfer and edge device, not a permanent bridge into S3.",
   "d": 3
  },
  {
   "id": 273,
   "t": "snow-family",
   "x": "A seismic survey company holds 300 terabytes of field data at a remote site whose internet link would need months to push it all. Which approach gets the data into AWS soonest?",
   "o": [
    "Upload the data through an S3 multipart transfer",
    "Ship the data on an AWS Snowball device",
    "Establish an AWS Site-to-Site VPN and copy the data",
    "Replicate the data through Amazon CloudFront"
   ],
   "a": 1,
   "e": "Snowball devices are shipped to the site, loaded over the local network, and returned to AWS, which beats any network path when the circuit cannot carry the volume in reasonable time. A VPN still rides that same slow internet link, so it does not address the constraint.",
   "d": 3
  },
  {
   "id": 274,
   "t": "snow-family",
   "x": "A geologist gathers readings from a portable rig in a desert with no dependable connectivity and needs a rugged device light enough to carry that can also run limited processing on site. Which Snow Family member fits?",
   "o": [
    "AWS Snowball Edge Storage Optimized",
    "AWS Storage Gateway",
    "AWS Snowcone",
    "AWS Transfer Family"
   ],
   "a": 2,
   "e": "Snowcone is the smallest and most portable Snow Family device, rugged enough for field use and able to run edge computing before the data is shipped or synced to AWS. Snowball Edge devices hold far more data but are too large and heavy for one person to carry into the field. Snowcone remains CLF-C02 vocabulary, though AWS closed it to new orders in November 2024 and now steers field deployments toward Outposts or partner devices.",
   "d": 3
  },
  {
   "id": 275,
   "t": "rds-aurora",
   "x": "An accounting package requires a Microsoft SQL Server backend with automated backups and patching, and the vendor will not certify any other engine. Which AWS service should host that database?",
   "o": [
    "Amazon Redshift",
    "Amazon RDS",
    "Amazon DynamoDB",
    "Amazon ElastiCache"
   ],
   "a": 1,
   "e": "Amazon RDS runs managed instances of commercial and open-source engines including SQL Server, taking over backups and patching. DynamoDB is a NoSQL key-value store and cannot run a SQL Server workload at all, certified or otherwise.",
   "d": 3
  },
  {
   "id": 276,
   "t": "rds-aurora",
   "x": "A payroll database must survive the loss of an entire Availability Zone by promoting a standby copy on its own, with no change to how the application connects. Which RDS feature provides that?",
   "o": [
    "A read replica in another Region",
    "A Multi-AZ deployment",
    "A larger instance class",
    "An automated daily snapshot"
   ],
   "a": 1,
   "e": "Multi-AZ keeps a synchronous standby in a second Availability Zone and fails over to it automatically behind the same endpoint, so connection strings never change. A read replica serves read traffic and requires a manual promotion, which fails the automatic requirement.",
   "d": 3
  },
  {
   "id": 277,
   "t": "rds-aurora",
   "x": "Reporting queries are overwhelming the primary database of an online pharmacy, and the team is weighing RDS read replicas. Which statements about read replicas are correct? (Select TWO.)",
   "o": [
    "They can be created in a different Region from the primary",
    "They accept write traffic in parallel with the primary instance",
    "They replace the need for backups of the primary database",
    "They offload read-only queries from the primary database instance",
    "They are billed as a free add-on to the primary instance"
   ],
   "a": 0,
   "e": "Read replicas take read-only traffic off the primary and can be placed in another Region for reporting or disaster recovery. They cannot accept writes, and because they track current data rather than preserving history, they are no substitute for backups.",
   "d": 3,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 278,
   "t": "dynamodb-nosql",
   "x": "A shopping cart service stores each item under a unique key, never joins tables, and sees traffic swing wildly during promotions. The team wants a database with no servers to size. Which option fits?",
   "o": [
    "Amazon Neptune",
    "Amazon DynamoDB",
    "Amazon RDS for MySQL",
    "Amazon Redshift"
   ],
   "a": 1,
   "e": "DynamoDB is a serverless key-value store that scales throughput on demand, which suits key-based access with volatile traffic. A relational engine such as RDS for MySQL would still leave the team choosing and managing instance sizes for those swings.",
   "d": 3
  },
  {
   "id": 279,
   "t": "dynamodb-nosql",
   "x": "A gaming backend engineer is weighing DynamoDB against a relational engine for leaderboard data. Which statements about DynamoDB are accurate? (Select TWO.)",
   "o": [
    "It executes complex joins across normalized tables like a SQL engine",
    "It is fully managed, with no database instances for the team to patch",
    "It requires a provisioned storage volume to be sized before use",
    "It is designed primarily for petabyte-scale analytical reporting",
    "It stores items as key-value and document structures with no fixed schema"
   ],
   "a": 1,
   "e": "DynamoDB holds schemaless key-value and document items and is fully managed, so nothing needs patching. Joins across normalized tables are a relational capability, and petabyte-scale analytical reporting is what Amazon Redshift is built for.",
   "d": 3,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 280,
   "t": "redshift-warehousing",
   "x": "A supermarket chain loads nightly point-of-sale extracts into one central repository and wants a columnar engine tuned for scanning billions of rows per query. Which service should the chain deploy?",
   "o": [
    "Amazon Redshift",
    "Amazon DocumentDB",
    "Amazon ElastiCache",
    "Amazon RDS for PostgreSQL"
   ],
   "a": 0,
   "e": "Redshift is a columnar data warehouse built to scan and aggregate very large tables for analytics. RDS for PostgreSQL stores data by row and is optimized for transactions, so the same aggregations would take far longer to return.",
   "d": 3
  },
  {
   "id": 281,
   "t": "redshift-warehousing",
   "x": "A telecom analyst must decide where order entry belongs and where quarterly trend analysis belongs. Which distinction correctly separates a data warehouse from an operational database?",
   "o": [
    "A warehouse is optimized for high-volume single-row inserts and updates",
    "A warehouse is optimized for analytical queries over historical data",
    "A warehouse must be refreshed manually before each individual query",
    "A warehouse stores only unstructured files with no schema at all"
   ],
   "a": 1,
   "e": "Data warehouses are tuned for large analytical reads across accumulated history, while operational databases handle frequent small transactions. High-volume single-row writes describe the transactional side of that split, which is where order entry belongs.",
   "d": 3
  },
  {
   "id": 282,
   "t": "vpc-subnets",
   "x": "An application server has to download operating system updates from the internet but must never accept a connection started from outside. Where should it sit, and what should carry its outbound traffic?",
   "o": [
    "A private subnet, with outbound traffic through a NAT gateway",
    "A public subnet, with an Elastic IP address assigned directly",
    "A public subnet, with a network ACL denying all inbound entries",
    "A private subnet, with an internet gateway attached to the instance"
   ],
   "a": 0,
   "e": "A private subnet has no route in from the internet, and a NAT gateway lets instances there open outbound connections while inbound attempts still fail. An internet gateway attaches to the VPC and routes for a subnet, so it cannot be bolted onto one instance in a private subnet.",
   "d": 3
  },
  {
   "id": 283,
   "t": "vpc-subnets",
   "x": "A network engineer is sketching the boundary of a new virtual network before a single instance is launched. What does a VPC actually give the company?",
   "o": [
    "A physical data center building reserved for one customer's hardware",
    "A logically isolated section of the AWS Cloud with its own address range",
    "A dedicated fiber circuit between the company office and AWS",
    "A managed domain name service for resolving public hostnames"
   ],
   "a": 1,
   "e": "A VPC is a logically isolated network inside AWS where the customer controls the IP address range, subnets, route tables, and gateways. A dedicated fiber circuit describes Direct Connect, which can terminate into a VPC but is a different thing entirely.",
   "d": 3
  },
  {
   "id": 284,
   "t": "vpc-subnets",
   "x": "During a security review at a fintech startup, an engineer has to explain how security groups and network ACLs differ. Which statements are correct? (Select TWO.)",
   "o": [
    "A network ACL is evaluated only for traffic leaving the VPC",
    "A security group is stateful and is applied at the instance level",
    "Both are configured once per Region and cannot be changed later",
    "A network ACL is stateless and is applied at the subnet level",
    "A security group can contain explicit deny rules for an IP range"
   ],
   "a": 1,
   "e": "Security groups attach to instances and automatically permit return traffic, while network ACLs sit at the subnet boundary and evaluate each direction separately. Only network ACLs support explicit deny entries; security groups hold allow rules only.",
   "d": 3,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 285,
   "t": "route53-dns",
   "x": "A nonprofit has just bought a domain name and needs something to translate that name into its load balancer address, plus health checks so visitors stop being sent to a failed endpoint. Which service covers both jobs?",
   "o": [
    "Elastic Load Balancing",
    "Amazon CloudFront",
    "Amazon Route 53",
    "AWS Global Accelerator"
   ],
   "a": 2,
   "e": "Route 53 is the managed DNS service, and it can run health checks so records stop resolving to an unhealthy target. CloudFront caches content at the edge but does not own the domain's records or perform name resolution for it.",
   "d": 3
  },
  {
   "id": 286,
   "t": "route53-dns",
   "x": "A retailer wants a small share of visitors steered to a redesigned site while everyone else keeps reaching the current one, controlled purely at the name resolution layer. Which routing policy achieves that?",
   "o": [
    "Failover routing",
    "Geolocation routing",
    "Simple routing",
    "Weighted routing"
   ],
   "a": 3,
   "e": "Weighted routing assigns a proportion of queries to each record, which is how a gradual rollout is steered through DNS. Failover routing switches only when a primary endpoint becomes unhealthy, so it cannot split traffic by percentage.",
   "d": 3
  },
  {
   "id": 287,
   "t": "cloudfront-cdn",
   "x": "A university streams recorded lectures to students on three continents. Bandwidth charges at the origin bucket keep climbing and playback stalls for distant viewers. What does adding a content delivery network accomplish?",
   "o": [
    "The origin bucket is replicated into every Region automatically",
    "Cached copies are served from edge locations, cutting origin requests",
    "Student devices are given a private link into the AWS network",
    "Video files are compressed permanently to a smaller size at rest"
   ],
   "a": 1,
   "e": "CloudFront caches objects at edge locations, so repeat requests are answered close to the viewer instead of travelling back to the origin, which lowers both latency and origin traffic. It neither replicates the bucket into every Region nor alters the stored files.",
   "d": 3
  },
  {
   "id": 288,
   "t": "cloudfront-cdn",
   "x": "An online magazine is planning a CloudFront distribution in front of static assets and an API. Which capabilities does CloudFront provide? (Select TWO.)",
   "o": [
    "Permanent primary storage for the origin's object data",
    "Delivery over HTTPS using a certificate for the site's domain",
    "Caching of content at edge locations near viewers",
    "Relational query processing for the magazine's article database",
    "Automatic conversion of images into a different file format"
   ],
   "a": 1,
   "e": "CloudFront caches at edge locations and terminates HTTPS using a certificate for the customer's domain. It never becomes the system of record: the origin, such as an S3 bucket, still holds the authoritative copy of every object.",
   "d": 3,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 289,
   "t": "direct-connect-vpn",
   "x": "A brokerage firm needs consistent, predictable network performance between its trading floor and AWS and will not accept the variability of routing over the public internet. Which connectivity option should it order?",
   "o": [
    "AWS Site-to-Site VPN",
    "AWS Transit Gateway",
    "AWS Direct Connect",
    "AWS Client VPN"
   ],
   "a": 2,
   "e": "Direct Connect provisions a dedicated private circuit into AWS, which is what delivers steady throughput and latency. A Site-to-Site VPN is encrypted but still travels the public internet, so its performance moves with internet conditions.",
   "d": 3
  },
  {
   "id": 290,
   "t": "direct-connect-vpn",
   "x": "A regional charity has to link its small office network to a VPC within a few days on a modest budget. Encryption in transit is mandatory, but bandwidth needs are light. What should it set up?",
   "o": [
    "An AWS Outposts rack installed in the charity's office",
    "A public S3 bucket used to exchange files between sites",
    "An AWS Site-to-Site VPN over the existing internet circuit",
    "A dedicated 10 Gbps Direct Connect port at a colocation facility"
   ],
   "a": 2,
   "e": "A Site-to-Site VPN builds an encrypted tunnel over the office's existing internet connection and can be running the same day at low cost. Ordering a Direct Connect port involves a physical cross-connect with lead times measured in weeks, which the deadline rules out.",
   "d": 3
  },
  {
   "id": 291,
   "t": "load-balancing",
   "x": "A web tier runs on several instances across two Availability Zones, and the team wants incoming HTTPS requests spread over the healthy ones with routing decided by URL path. Which load balancer type fits?",
   "o": [
    "Gateway Load Balancer",
    "Network Load Balancer",
    "Application Load Balancer",
    "Classic Load Balancer"
   ],
   "a": 2,
   "e": "An Application Load Balancer works at the HTTP layer, so it can route on path or host header. A Network Load Balancer operates at the connection layer and has no visibility into the URL at all.",
   "d": 3
  },
  {
   "id": 292,
   "t": "load-balancing",
   "x": "A multiplayer voice service handles millions of TCP connections per second, demands the lowest achievable latency, and needs a static IP address per Availability Zone. Which load balancer should be chosen?",
   "o": [
    "Network Load Balancer",
    "Amazon CloudFront",
    "Application Load Balancer",
    "Gateway Load Balancer"
   ],
   "a": 0,
   "e": "The Network Load Balancer runs at layer 4, sustains extreme connection rates with very low latency, and supports a static IP per Availability Zone. An Application Load Balancer parses HTTP, adding overhead this workload cannot absorb.",
   "d": 3
  },
  {
   "id": 293,
   "t": "load-balancing",
   "x": "An operations lead is describing what Elastic Load Balancing contributes to a three-tier retail application. Which benefits are accurate? (Select TWO.)",
   "o": [
    "It stops sending requests to targets that fail health checks",
    "It stores user session data so instances can be replaced freely",
    "It encrypts the application's data at rest in attached volumes",
    "It reduces the per-hour price of the instances behind it",
    "It spreads incoming traffic across targets in multiple Availability Zones"
   ],
   "a": 0,
   "e": "Load balancers distribute requests over healthy targets in more than one Availability Zone and pull failing targets out of rotation. They hold no session state, which is why that data belongs in a shared store such as ElastiCache or DynamoDB.",
   "d": 3,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 294,
   "t": "sqs-sns",
   "x": "When an insurance claim is approved, four independent downstream systems each need their own copy of that notification at the same moment. Which messaging pattern and service deliver it?",
   "o": [
    "Publish and subscribe with Amazon SNS",
    "Stream ingestion with Amazon Kinesis Data Firehose",
    "Point-to-point queuing with Amazon SQS",
    "Workflow orchestration with AWS Step Functions"
   ],
   "a": 0,
   "e": "SNS fans a published message out to every subscriber, so each downstream system receives its own copy. An SQS queue hands a message to a single consumer, which would leave the four systems competing for the same message.",
   "d": 3
  },
  {
   "id": 295,
   "t": "sqs-sns",
   "x": "A video pipeline's upload component briefly produces work faster than the encoder can consume it, and no job may be lost during those bursts. Which characteristic of Amazon SQS addresses that?",
   "o": [
    "Messages are discarded if no consumer is listening at that moment",
    "Messages are pushed simultaneously to every registered endpoint",
    "Messages are stored durably until a consumer processes and deletes them",
    "Messages are converted into a state machine with retry logic"
   ],
   "a": 2,
   "e": "SQS retains messages durably until a consumer receives and deletes them, letting a slower downstream component catch up without dropping work. Pushing to every registered endpoint describes SNS, and state machines with retries describe Step Functions.",
   "d": 3
  },
  {
   "id": 296,
   "t": "sqs-sns",
   "x": "A brokerage is breaking apart a tightly coupled trade-settlement monolith and wants asynchronous communication between the new pieces. Which outcomes does putting a message queue between them provide? (Select TWO.)",
   "o": [
    "The components must be deployed together in one release",
    "Message delivery becomes synchronous and blocking by design",
    "Total compute cost is fixed regardless of message volume",
    "A failure in the consumer does not immediately stop the producer",
    "Each component can scale independently of the others"
   ],
   "a": 3,
   "e": "A queue buffers work so a failing or slow consumer does not halt the producer, and each side scales on its own schedule. Decoupling makes communication asynchronous rather than blocking, which is the opposite of the synchronous option listed.",
   "d": 3,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 297,
   "t": "eventbridge-stepfunctions",
   "x": "A bank's loan approval path involves sequential decisions, pauses for human sign-off, and branches that depend on what the previous step returned. Leadership wants that logic visualized and maintained outside the function code. Which service should coordinate it?",
   "o": [
    "AWS Step Functions",
    "Amazon SQS",
    "AWS Batch",
    "Amazon EventBridge"
   ],
   "a": 0,
   "e": "Step Functions expresses multi-step logic as a visual state machine with branching, waits, and error handling held outside the application code. EventBridge routes individual events to targets but keeps no state for a long-running process.",
   "d": 3
  },
  {
   "id": 298,
   "t": "eventbridge-stepfunctions",
   "x": "An operations team wants a small cleanup routine to fire automatically at 02:00 daily, with no always-on server left holding a cron entry. Which capability provides that trigger?",
   "o": [
    "A CloudFront cache invalidation",
    "An SQS delay queue",
    "An SNS topic subscription",
    "An EventBridge scheduled rule"
   ],
   "a": 3,
   "e": "EventBridge scheduled rules fire on a cron or rate expression and invoke a target such as a Lambda function, removing the need for a scheduling host. An SQS delay queue postpones an individual message but cannot originate a recurring daily trigger.",
   "d": 3
  },
  {
   "id": 299,
   "t": "ecs-eks-fargate",
   "x": "A startup packages its services as Docker images and wants AWS to run them without anyone choosing, patching, or scaling host machines. Which launch type satisfies that?",
   "o": [
    "The EC2 launch type",
    "AWS Elastic Beanstalk",
    "AWS Fargate",
    "Amazon EC2 Auto Scaling"
   ],
   "a": 2,
   "e": "Fargate is the serverless launch type for ECS and EKS: AWS provisions and maintains the compute, so the team only defines the task. The EC2 launch type leaves the cluster instances under the customer's care, which is what the startup wants to avoid.",
   "d": 3
  },
  {
   "id": 300,
   "t": "ecs-eks-fargate",
   "x": "An architect at a healthcare vendor is choosing between Amazon ECS and Amazon EKS for a new container platform. Which statements are correct? (Select TWO.)",
   "o": [
    "ECS is an AWS-native orchestrator with its own task definition format",
    "EKS runs upstream Kubernetes, so existing manifests keep working",
    "Neither service can use Fargate as its compute engine",
    "Both services require the customer to manage the control plane",
    "Only ECS can run containers, while EKS handles virtual machines"
   ],
   "a": 0,
   "e": "EKS is managed upstream Kubernetes, so existing manifests and kubectl tooling carry over, while ECS is AWS's own orchestrator built around task definitions. AWS operates the control plane for both, and either one can place tasks on Fargate.",
   "d": 3,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 301,
   "t": "free-tier",
   "x": "A student opens a personal AWS account and wants to run a small Linux server for study without paying anything during the first year. Which Free Tier category covers that usage?",
   "o": [
    "A credit applied to the account after the first invoice",
    "An always-free offer with no expiration date",
    "A short-term trial that begins when a service is first used",
    "A 12-month free offer available to new accounts"
   ],
   "a": 3,
   "e": "The monthly allowance of small Linux EC2 instance hours falls under the 12-month offers, which start the day a new account is created. Always-free offers such as a monthly Lambda request allowance never expire and form a separate category.",
   "d": 4
  },
  {
   "id": 302,
   "t": "free-tier",
   "x": "A hobbyist worries about a surprise invoice after leaving a resource running past its allowance. What happens once a monthly Free Tier limit is exceeded?",
   "o": [
    "The resources are deleted automatically to prevent charges",
    "The account is suspended until the next billing month begins",
    "The overage is waived for accounts less than 12 months old",
    "Standard pay-as-you-go rates apply to the additional usage"
   ],
   "a": 3,
   "e": "Passing a Free Tier allowance simply moves the extra usage onto normal on-demand pricing; nothing is suspended or deleted on the customer's behalf. Because AWS keeps the resource running, a budget or billing alarm is the practical way to catch this early.",
   "d": 4
  },
  {
   "id": 303,
   "t": "free-tier",
   "x": "A team evaluating a paid AWS service is given free usage for a limited window that starts the moment the service is first activated. Which Free Tier category is that?",
   "o": [
    "Trials",
    "12-month offers",
    "Always free",
    "Volume discounts"
   ],
   "a": 0,
   "e": "Short-term trials begin when a particular service is first activated and run for a fixed period, unlike 12-month offers that are tied to when the account was opened. Volume discounts are a pricing mechanism and are not part of the Free Tier at all.",
   "d": 4
  },
  {
   "id": 304,
   "t": "free-tier",
   "x": "A bootcamp instructor asks the class which Free Tier example keeps its allowance no matter how old the account is. Which one is correct?",
   "o": [
    "750 monthly hours of an RDS database instance",
    "5 GB of Amazon S3 standard storage for new accounts",
    "750 monthly hours of a small EC2 instance",
    "A monthly allowance of AWS Lambda requests"
   ],
   "a": 3,
   "e": "The Lambda monthly request and compute allowance is an always-free offer with no expiration date. EC2 hours, S3 storage, and RDS hours in the Free Tier are 12-month offers that stop a year after the account is opened.",
   "d": 4
  },
  {
   "id": 305,
   "t": "savings-plans-reserved",
   "x": "A publisher wants a discount on a specific instance family in one Availability Zone and also wants assurance that the capacity will actually be there at launch time. Which purchase provides that guarantee?",
   "o": [
    "A Spot Instance request",
    "A zonal Reserved Instance",
    "A regional Reserved Instance",
    "A Compute Savings Plan"
   ],
   "a": 1,
   "e": "Reserved Instances scoped to a specific Availability Zone include a capacity reservation alongside the billing discount. Regional Reserved Instances and Savings Plans lower the rate but make no promise that capacity will be free in a particular zone.",
   "d": 4
  },
  {
   "id": 306,
   "t": "savings-plans-reserved",
   "x": "A finance director asks how paying a three-year commitment entirely in advance compares with spreading it out. What is the general relationship between payment option and discount?",
   "o": [
    "Paying more upfront yields a larger discount",
    "Paying nothing upfront yields the largest discount",
    "Discounts apply only to monthly payment plans",
    "Payment timing has no effect on the discount"
   ],
   "a": 0,
   "e": "AWS offers All Upfront, Partial Upfront, and No Upfront terms, and the discount grows as more of the commitment is paid in advance. No Upfront still beats on-demand pricing, but it produces the smallest of the three reductions.",
   "d": 4
  },
  {
   "id": 307,
   "t": "savings-plans-reserved",
   "x": "An analytics group will stay on the same instance family in one Region for the coming year and wants the deepest commitment-based discount available for that fixed choice. Which option should it buy?",
   "o": [
    "A Spot Fleet request",
    "An EC2 Instance Savings Plan",
    "An On-Demand Capacity Reservation",
    "A Compute Savings Plan"
   ],
   "a": 1,
   "e": "EC2 Instance Savings Plans lock the buyer to one instance family in one Region and return the largest discount of the Savings Plan types. Compute Savings Plans stay flexible across families, Regions, Lambda, and Fargate, and that flexibility comes at a smaller discount.",
   "d": 4
  },
  {
   "id": 308,
   "t": "savings-plans-reserved",
   "x": "A cloud economics team is briefing engineers on commitment-based pricing ahead of the annual budget cycle. Which statements are accurate? (Select TWO.)",
   "o": [
    "Commitment discounts apply only to Amazon S3 storage charges",
    "Savings Plans commit to an hourly dollar amount for one or three years",
    "Savings Plans guarantee capacity in a chosen Availability Zone",
    "Reserved Instances can be cancelled at any time for a full refund",
    "Standard Reserved Instances can be sold in the Reserved Instance Marketplace"
   ],
   "a": 1,
   "e": "Savings Plans are a commitment to a steady hourly spend over a one-year or three-year term, and Standard Reserved Instances can be resold through the Reserved Instance Marketplace. Savings Plans reserve no capacity, and a commitment cannot be cancelled for a refund.",
   "d": 4,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 309,
   "t": "cost-explorer-budgets",
   "x": "An engineering manager must learn within hours if a runaway test harness pushes a department past its agreed spending limit. Which capability raises that alert?",
   "o": [
    "A Cost and Usage Report delivery",
    "An AWS Budgets threshold with a notification",
    "A Cost Explorer saved report",
    "An AWS Pricing Calculator estimate"
   ],
   "a": 1,
   "e": "AWS Budgets watches spend against a defined limit and sends a notification when actual or forecast usage crosses a threshold. Cost Explorer is an analysis console someone has to open, so it cannot proactively notify anyone.",
   "d": 4
  },
  {
   "id": 310,
   "t": "cost-explorer-budgets",
   "x": "A department head wants to see whether last month's Reserved Instance purchases were actually used and where rightsizing could trim spend. Which tool surfaces those recommendations?",
   "o": [
    "AWS Cost Explorer",
    "AWS Budgets",
    "AWS Cost Anomaly Detection",
    "AWS Pricing Calculator"
   ],
   "a": 0,
   "e": "Cost Explorer includes reservation utilization and coverage reports plus rightsizing recommendations derived from past usage. Budgets only compares spend against a limit and raises alerts; it performs no efficiency analysis.",
   "d": 4
  },
  {
   "id": 311,
   "t": "cost-explorer-budgets",
   "x": "Overnight, an unfamiliar service starts accruing charges far outside an account's normal pattern, and nobody had set a threshold in advance. Which capability uses machine learning to flag that unusual spend?",
   "o": [
    "AWS Trusted Advisor",
    "AWS Budgets",
    "AWS Cost and Usage Report",
    "AWS Cost Anomaly Detection"
   ],
   "a": 3,
   "e": "Cost Anomaly Detection learns an account's normal spending shape and raises an alert when charges deviate from it, which works even though nobody defined a limit. Budgets can only compare spend against a threshold that someone configured beforehand.",
   "d": 4
  },
  {
   "id": 312,
   "t": "cost-explorer-budgets",
   "x": "Ahead of a quarterly review, a controller at a manufacturing firm is deciding which AWS cost tool answers which question. Which pairings are correct? (Select TWO.)",
   "o": [
    "AWS Budgets for alerting when spend passes a defined limit",
    "AWS Pricing Calculator for reporting actual charges already incurred",
    "Cost and Usage Report for setting a monthly spending cap",
    "Trusted Advisor for producing the monthly invoice",
    "Cost Explorer for visualizing spending trends over time"
   ],
   "a": 0,
   "e": "Cost Explorer visualizes historical and forecast spend, while Budgets exists specifically to alert on thresholds. The Pricing Calculator estimates costs before anything is deployed, so it never reports charges that have already been billed.",
   "d": 4,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 313,
   "t": "consolidated-billing",
   "x": "Four subsidiaries each keep roughly 30 TB in Amazon S3 under separate member accounts of one organization. How does aggregating their usage affect the rate they pay per gigabyte?",
   "o": [
    "The management account absorbs all storage charges as a credit",
    "Storage charges are split evenly among all member accounts",
    "Combined usage can reach tiered pricing thresholds sooner",
    "Each account is priced independently at its own tier"
   ],
   "a": 2,
   "e": "Consolidated billing adds up usage across member accounts, so the organization reaches volume pricing tiers faster than any single account would on its own. Pricing each account independently is what happens without an organization, and that is the saving being given up.",
   "d": 4
  },
  {
   "id": 314,
   "t": "consolidated-billing",
   "x": "A group finance office wants one invoice covering every subsidiary while still being able to see which subsidiary generated each charge. Which arrangement delivers both?",
   "o": [
    "Consolidated billing with per-account cost breakdowns",
    "A Cost and Usage Report replacing the monthly invoice",
    "Separate payment methods registered in each account",
    "A single shared account used by all subsidiaries"
   ],
   "a": 0,
   "e": "Consolidated billing produces one bill for the organization while preserving per-account detail so charges can still be attributed. Merging every subsidiary into one shared account would blend the usage together and destroy exactly that visibility.",
   "d": 4
  },
  {
   "id": 315,
   "t": "consolidated-billing",
   "x": "A holding company is told that placing its five existing AWS accounts under one organization will not change how engineers work day to day. Which statement about that move is accurate?",
   "o": [
    "Each account keeps its own resources and access controls",
    "Existing workloads must be redeployed into the organization",
    "All resources are merged into the management account",
    "Member accounts must share one set of IAM users"
   ],
   "a": 0,
   "e": "Joining an organization changes how accounts are billed and governed, not where resources live: every member account keeps its own resources, IAM identities, and isolation boundary. Nothing is merged or redeployed when consolidated billing is enabled.",
   "d": 4
  },
  {
   "id": 316,
   "t": "trusted-advisor",
   "x": "An operations review needs to find idle load balancers and underused EC2 instances that are still being billed each month. Which service scans the account and recommends those savings?",
   "o": [
    "AWS Config",
    "AWS Trusted Advisor",
    "AWS Systems Manager",
    "Amazon Inspector"
   ],
   "a": 1,
   "e": "Trusted Advisor inspects an account and reports cost optimization findings such as idle load balancers and low-utilization instances. AWS Config records configuration changes for compliance purposes and makes no spending recommendations.",
   "d": 4
  },
  {
   "id": 317,
   "t": "trusted-advisor",
   "x": "A team is approaching the maximum number of VPCs permitted in a Region and wants warning before new deployments start failing. Which Trusted Advisor category covers that?",
   "o": [
    "Service limits",
    "Security",
    "Performance",
    "Fault tolerance"
   ],
   "a": 0,
   "e": "The service limits category compares current usage against account quotas and warns as a threshold is approached. Fault tolerance covers redundancy findings such as missing backups or single-zone deployments rather than quota headroom.",
   "d": 4
  },
  {
   "id": 318,
   "t": "trusted-advisor",
   "x": "A newly hired security analyst opens Trusted Advisor on an account that carries only Basic Support and expects the full check list. What is available at that level?",
   "o": [
    "A limited set of core checks, including some security items",
    "Only checks in the cost optimization category",
    "Every check that Trusted Advisor offers in all categories",
    "No checks at all until a support plan is purchased"
   ],
   "a": 0,
   "e": "Basic and Developer Support include a core subset of Trusted Advisor checks, notably several security checks and the full set of service limit checks. Opening the complete catalogue of checks across every category requires Business Support or higher.",
   "d": 4
  },
  {
   "id": 319,
   "t": "trusted-advisor",
   "x": "An auditor at a legal firm asks which areas of an AWS account Trusted Advisor evaluates. Which categories does it report on? (Select TWO.)",
   "o": [
    "Vendor contract terms",
    "Employee training",
    "Physical data center access",
    "Fault tolerance",
    "Security"
   ],
   "a": 3,
   "e": "Trusted Advisor reports on security and fault tolerance, alongside cost optimization, performance, service limits, and operational excellence. Staff training, vendor contract terms, and physical facility access are not things it can inspect inside an AWS account.",
   "d": 4,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 320,
   "t": "auto-scaling",
   "x": "A web application team wants its EC2 fleet to add capacity when average processor use rises and shed it when demand falls, holding utilization near a chosen figure. Which scaling approach does that?",
   "o": [
    "A fixed reserved count that never changes with demand",
    "A manual capacity change made whenever an engineer notices load",
    "A target tracking scaling policy that adjusts capacity toward a metric goal",
    "A one-time launch of extra instances left running permanently"
   ],
   "a": 2,
   "e": "Target tracking scaling adds or removes instances to keep a metric such as average CPU near a set target. Manual changes and fixed counts do not respond automatically to shifting demand.",
   "d": 3
  },
  {
   "id": 321,
   "t": "auto-scaling",
   "x": "A company is weighing whether to adopt EC2 Auto Scaling for its variable web tier. Which benefits does Auto Scaling provide? Choose TWO.",
   "o": [
    "It controls cost by matching running capacity to actual demand",
    "It provides a fully managed relational database engine",
    "It keeps the application available by replacing instances that fail health checks",
    "It removes every networking charge from the monthly bill",
    "It encrypts all data stored on attached volumes automatically"
   ],
   "a": 0,
   "e": "Auto Scaling improves availability by replacing unhealthy instances and reduces waste by scaling capacity to demand. It does not handle disk encryption, waive networking charges, or supply a database service.",
   "d": 3,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 322,
   "t": "cloudformation-iac",
   "x": "A team is estimating what adopting AWS CloudFormation will add to its monthly bill. What does AWS charge for using CloudFormation to provision resources?",
   "o": [
    "A percentage surcharge added on top of every provisioned resource",
    "A fee per line of template code processed during deployment",
    "A flat monthly subscription regardless of how many stacks exist",
    "Nothing for CloudFormation itself; you pay only for the resources it creates"
   ],
   "a": 3,
   "e": "CloudFormation has no additional charge; you pay only for the AWS resources a stack provisions. There is no per-template, per-stack, or surcharge fee for the service.",
   "d": 3
  },
  {
   "id": 323,
   "t": "cloudformation-iac",
   "x": "A developer is about to write their first infrastructure template for AWS CloudFormation. In which two formats can these templates be authored? Choose TWO.",
   "o": [
    "JSON",
    "XML",
    "CSV",
    "A plain shell script",
    "YAML"
   ],
   "a": 0,
   "e": "CloudFormation templates are written in either YAML or JSON. XML, CSV, and shell scripts are not supported template formats.",
   "d": 3,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 324,
   "t": "cloudfront-cdn",
   "x": "A retailer serving its site through Amazon CloudFront wants to filter out common web exploits such as SQL injection before requests reach the origin. Which service integrates with CloudFront to do that?",
   "o": [
    "AWS WAF",
    "AWS Config",
    "Amazon Inspector",
    "Amazon Macie"
   ],
   "a": 0,
   "e": "AWS WAF integrates with CloudFront to block malicious HTTP requests at the edge. Inspector assesses instance vulnerabilities, Macie classifies sensitive data, and Config tracks resource changes.",
   "d": 3
  },
  {
   "id": 325,
   "t": "cloudfront-cdn",
   "x": "A media company delivers paid video through CloudFront and needs each stream reachable only by subscribers, with access expiring after a set time. Which CloudFront feature restricts content that way?",
   "o": [
    "Adding more edge locations to the network",
    "Enabling gzip compression on responses",
    "A longer cache time-to-live setting",
    "Signed URLs and signed cookies"
   ],
   "a": 3,
   "e": "Signed URLs and signed cookies grant time-limited access to specific CloudFront content. Cache settings, edge count, and compression affect delivery performance, not who is allowed to view the content.",
   "d": 3
  },
  {
   "id": 326,
   "t": "direct-connect-vpn",
   "x": "A company has established an AWS Site-to-Site VPN between its office and a VPC. Over which network does the traffic travel, and how is it kept confidential?",
   "o": [
    "Over the public internet with no encryption applied",
    "Over a dedicated private fiber line installed by AWS",
    "Over an AWS backbone reserved exclusively for that customer",
    "Over the public internet, protected by IPsec encryption"
   ],
   "a": 3,
   "e": "Site-to-Site VPN sends traffic across the public internet inside an encrypted IPsec tunnel. A dedicated private line describes Direct Connect, and VPN traffic is encrypted rather than sent in the clear.",
   "d": 3
  },
  {
   "id": 327,
   "t": "direct-connect-vpn",
   "x": "An architect is comparing AWS Direct Connect with Site-to-Site VPN for a new hybrid setup. Which two statements are accurate? Choose TWO.",
   "o": [
    "Direct Connect encrypts all of its traffic by default",
    "Site-to-Site VPN encrypts its traffic as it crosses the public internet",
    "A VPN delivers more consistent bandwidth than Direct Connect",
    "Direct Connect provides a dedicated private physical connection to AWS",
    "Direct Connect can be provisioned in minutes with no physical work"
   ],
   "a": 1,
   "e": "Direct Connect is a dedicated private link and VPN encrypts traffic over the internet. Direct Connect is not encrypted by default, offers steadier performance than a VPN, and takes time to provision physically.",
   "d": 3,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 328,
   "t": "dynamodb-nosql",
   "x": "An engineer is reading AWS documentation about Amazon DynamoDB. Which statement describes a defining characteristic of the service?",
   "o": [
    "It is a columnar engine built mainly for large analytical queries",
    "It centers its access model on complex multi-table SQL joins",
    "It requires you to provision and patch the underlying database servers",
    "It delivers consistent single-digit millisecond latency at any scale"
   ],
   "a": 3,
   "e": "DynamoDB is a fully managed key-value and document database offering single-digit millisecond latency at scale. It needs no server management, is not a columnar analytics engine, and is not built around SQL joins.",
   "d": 3
  },
  {
   "id": 329,
   "t": "dynamodb-nosql",
   "x": "A gaming company needs its DynamoDB player data replicated across several AWS Regions so users everywhere get fast local reads and writes. Which DynamoDB feature provides that?",
   "o": [
    "Read replicas",
    "Multi-AZ failover",
    "Global tables",
    "On-demand backups"
   ],
   "a": 2,
   "e": "DynamoDB global tables replicate a table across multiple Regions for low-latency local access worldwide. Read replicas and Multi-AZ failover are relational-database concepts, and backups protect data rather than replicate it regionally.",
   "d": 3
  },
  {
   "id": 330,
   "t": "ebs-efs",
   "x": "A database administrator takes regular Amazon EBS snapshots and wants to understand how repeated snapshots of the same volume are stored to keep costs down. How does EBS store them?",
   "o": [
    "Incrementally, saving only blocks changed since the previous snapshot, into Amazon S3",
    "As a temporary cache that is discarded when the instance stops",
    "As a complete full copy of the volume every time, kept on the volume itself",
    "As uncompressed mirror volumes kept in every Availability Zone"
   ],
   "a": 0,
   "e": "EBS snapshots are incremental and stored in Amazon S3, capturing only blocks changed since the last snapshot. They are not full copies each time, not temporary caches, and not mirrored volumes in every zone.",
   "d": 3
  },
  {
   "id": 331,
   "t": "ebs-efs",
   "x": "An engineer launches an EC2 instance in one Availability Zone and wants to attach an existing Amazon EBS volume to it. What condition must be met?",
   "o": [
    "The volume can be attached from any Region without restriction",
    "The volume must first be converted into an EFS file system",
    "The volume must reside in the same Availability Zone as the instance",
    "The volume must sit in a different zone for redundancy"
   ],
   "a": 2,
   "e": "An EBS volume can only attach to an instance in the same Availability Zone. It cannot span zones or Regions directly, and it does not need conversion to EFS to be usable.",
   "d": 3
  },
  {
   "id": 332,
   "t": "ecs-eks-fargate",
   "x": "A company already runs Kubernetes on-premises and wants a managed AWS service that runs upstream Kubernetes so its existing manifests and tooling keep working. Which service fits?",
   "o": [
    "AWS Lambda",
    "Amazon EKS",
    "Amazon ECS",
    "AWS Elastic Beanstalk"
   ],
   "a": 1,
   "e": "Amazon EKS runs standard Kubernetes as a managed service, so existing Kubernetes tooling works unchanged. ECS is AWS's own orchestrator, Lambda runs functions, and Beanstalk deploys web apps.",
   "d": 3
  },
  {
   "id": 333,
   "t": "ecs-eks-fargate",
   "x": "Before deploying its containers, a team needs a private, managed place inside AWS to store and version its Docker images. Which service provides that registry?",
   "o": [
    "Amazon ECR",
    "Amazon ECS",
    "Amazon S3 Glacier",
    "AWS CodeBuild"
   ],
   "a": 0,
   "e": "Amazon ECR is the managed private registry for storing and versioning container images. ECS runs containers, Glacier is archival object storage, and CodeBuild compiles source code.",
   "d": 3
  },
  {
   "id": 334,
   "t": "elastic-beanstalk",
   "x": "A developer using AWS Elastic Beanstalk is concerned about losing access to the EC2 instances and other resources it provisions. What level of control does Beanstalk give over those resources?",
   "o": [
    "No access at all, since AWS fully hides the resources",
    "Read-only visibility, with changes requiring an AWS support case",
    "Control only during business hours in the primary Region",
    "Full access to and control over the underlying AWS resources it creates"
   ],
   "a": 3,
   "e": "Elastic Beanstalk provisions resources on your behalf but leaves you full access to and control over them. The resources are not hidden, read-only, or time-restricted.",
   "d": 3
  },
  {
   "id": 335,
   "t": "eventbridge-stepfunctions",
   "x": "A company wants a service that receives events from AWS services and third-party SaaS applications and routes them to targets like Lambda according to rules it defines. Which service does that?",
   "o": [
    "Amazon EventBridge",
    "Amazon Athena",
    "AWS Step Functions",
    "AWS Batch"
   ],
   "a": 0,
   "e": "Amazon EventBridge is an event bus that routes events from many sources to targets based on rules. Step Functions orchestrates workflows, Athena queries data in S3, and Batch runs batch compute jobs.",
   "d": 3
  },
  {
   "id": 336,
   "t": "eventbridge-stepfunctions",
   "x": "A pipeline made of several Lambda functions keeps failing without the team knowing which step broke, and they want built-in retries plus a visible record of each step's outcome. Which service adds that?",
   "o": [
    "AWS CloudTrail",
    "AWS Step Functions",
    "Amazon SQS",
    "Amazon EventBridge"
   ],
   "a": 1,
   "e": "Step Functions coordinates steps as a state machine with built-in retry, error handling, and a visual view of each step's result. EventBridge routes events, SQS queues messages, and CloudTrail logs API calls.",
   "d": 3
  },
  {
   "id": 337,
   "t": "lightsail",
   "x": "A small business owner is drawn to Amazon Lightsail after hearing about its pricing model. Which statement describes how Lightsail is typically billed?",
   "o": [
    "Compute, storage, and a data-transfer allowance are bundled into a fixed monthly price",
    "Only outbound data transfer is charged, and compute is free",
    "It is free for any workload during the first three years",
    "Each resource is metered separately per second with no bundling"
   ],
   "a": 0,
   "e": "Lightsail bundles an instance, storage, and a data-transfer allowance into a predictable flat monthly price. It is not purely per-second, not free for years, and does not charge for data transfer alone.",
   "d": 3
  },
  {
   "id": 338,
   "t": "lightsail",
   "x": "A user wants to stand up a WordPress site on Lightsail quickly, without manually installing the web server, database, and PHP runtime. What does Lightsail offer to make this fast?",
   "o": [
    "A petabyte-scale data warehouse engine",
    "Preconfigured blueprints that bundle popular application stacks",
    "Managed Kubernetes clusters for container orchestration",
    "A serverless function runtime billed per request"
   ],
   "a": 1,
   "e": "Lightsail provides preconfigured blueprints such as WordPress and LAMP that install the full stack automatically. Kubernetes, serverless functions, and data warehousing are not what Lightsail blueprints deliver.",
   "d": 3
  },
  {
   "id": 339,
   "t": "outposts-local-zones",
   "x": "A mobile game developer wants the lowest possible latency for players on 5G networks by placing compute inside telecom carriers' data centers at the network edge. Which AWS offering targets that need?",
   "o": [
    "AWS Local Zones",
    "AWS Outposts",
    "AWS Wavelength",
    "Amazon CloudFront"
   ],
   "a": 2,
   "e": "AWS Wavelength embeds compute and storage within telecom providers' 5G networks for ultra-low mobile latency. Outposts runs in your own facility, Local Zones sit near metro areas, and CloudFront caches content.",
   "d": 3
  },
  {
   "id": 340,
   "t": "outposts-local-zones",
   "x": "An operations manager planning an AWS Outposts deployment asks who is responsible for delivering and maintaining the physical racks installed on site. What is the correct answer?",
   "o": [
    "A third-party colocation provider owns and services the equipment",
    "The customer must purchase and rack its own compatible servers",
    "AWS delivers, installs, and manages the Outposts hardware in the customer facility",
    "The hardware ships once and then receives no further maintenance"
   ],
   "a": 2,
   "e": "With Outposts, AWS delivers, installs, and manages fully AWS-owned hardware in the customer's location. Customers do not supply their own servers, and AWS maintains the equipment over its life.",
   "d": 3
  },
  {
   "id": 341,
   "t": "redshift-warehousing",
   "x": "A Redshift user wants to run queries directly against large datasets sitting in Amazon S3 without first loading them into the cluster. Which capability makes that possible?",
   "o": [
    "AWS Elastic Beanstalk",
    "Redshift snapshots",
    "DynamoDB Streams",
    "Redshift Spectrum"
   ],
   "a": 3,
   "e": "Redshift Spectrum lets Redshift query data in Amazon S3 without loading it into the cluster first. Snapshots are backups, DynamoDB Streams track item changes, and Beanstalk deploys applications.",
   "d": 3
  },
  {
   "id": 342,
   "t": "redshift-warehousing",
   "x": "A team wants to run analytics in Amazon Redshift but prefers not to size or manage cluster capacity, paying only when queries actually run. Which option meets that preference?",
   "o": [
    "A reserved dense-storage cluster",
    "An always-on single-node cluster",
    "A manually provisioned multi-node cluster",
    "Amazon Redshift Serverless"
   ],
   "a": 3,
   "e": "Redshift Serverless runs analytics without provisioning or managing clusters and charges based on usage. The other options all require you to provision and pay for cluster capacity you manage.",
   "d": 3
  },
  {
   "id": 343,
   "t": "regions-az-edge",
   "x": "A company must keep its stored data physically within one country to satisfy a data-residency law. Which AWS concept lets it control where that data resides?",
   "o": [
    "Routing traffic through an edge location",
    "Choosing the AWS Region in which to deploy",
    "Selecting a particular Availability Zone",
    "Picking a specific EC2 instance type"
   ],
   "a": 1,
   "e": "Selecting an AWS Region determines the geographic location where resources and data reside, which governs data residency. Availability Zones, edge locations, and instance types do not set the country of residence.",
   "d": 3
  },
  {
   "id": 344,
   "t": "regions-az-edge",
   "x": "A company is deciding which AWS Region to deploy a new workload in. Which factors should influence that choice? Choose TWO.",
   "o": [
    "Latency between the Region and the workload's end users",
    "The color theme selected in the console",
    "Compliance and data-governance requirements",
    "The naming convention used for resources",
    "The number of IAM users in the account"
   ],
   "a": 0,
   "e": "Region choice should weigh user latency and compliance or data-governance rules, alongside cost and service availability. IAM user counts, naming conventions, and console themes have no bearing on Region selection.",
   "d": 3,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 345,
   "t": "route53-dns",
   "x": "A company runs identical copies of its application in two Regions and wants each visitor sent to whichever Region gives them the fastest response. Which Route 53 routing policy achieves that?",
   "o": [
    "Latency-based routing",
    "Geolocation routing",
    "Weighted routing",
    "Simple routing"
   ],
   "a": 0,
   "e": "Latency-based routing directs each user to the Region that offers the lowest latency for them. Weighted splits traffic by proportion, geolocation routes by user location, and simple maps to a single resource.",
   "d": 3
  },
  {
   "id": 346,
   "t": "route53-dns",
   "x": "Beyond translating domain names into resource addresses, what additional capability does Amazon Route 53 provide to its customers?",
   "o": [
    "Caching static content at edge locations",
    "Registering new domain names",
    "Encrypting data stored in Amazon S3",
    "Distributing load across EC2 instances"
   ],
   "a": 1,
   "e": "Route 53 is also a domain registrar, so customers can buy and register domains directly. Content caching is CloudFront, S3 encryption is a storage feature, and load balancing is handled by ELB.",
   "d": 3
  },
  {
   "id": 347,
   "t": "sdk-cli-console",
   "x": "A developer is writing a Python application that must upload objects to Amazon S3 programmatically from within the application's own code. Which AWS access method should they use?",
   "o": [
    "The AWS Management Console",
    "The AWS Billing dashboard",
    "The AWS Personal Health Dashboard",
    "The AWS SDK"
   ],
   "a": 3,
   "e": "The AWS SDK lets developers call AWS services from within application code in languages like Python. The console is a manual web interface, and the billing and health dashboards report cost and status, not programmatic calls.",
   "d": 3
  },
  {
   "id": 348,
   "t": "sdk-cli-console",
   "x": "A new employee wants to explore AWS services and create resources by pointing and clicking in a web browser rather than typing commands. Which access method is that?",
   "o": [
    "The AWS SDK",
    "The AWS Command Line Interface",
    "The AWS Management Console",
    "An IAM access key pair"
   ],
   "a": 2,
   "e": "The AWS Management Console is the browser-based graphical interface for working with AWS by pointing and clicking. The CLI and SDK are command and code interfaces, and an access key is a credential, not an interface.",
   "d": 3
  },
  {
   "id": 349,
   "t": "snow-family",
   "x": "A company is shipping an AWS Snowball device full of data back to AWS and asks how that data is protected while in transit. What safeguards apply?",
   "o": [
    "Data is left unencrypted so it can be read faster on arrival",
    "Encryption stays off unless a support ticket enables it",
    "Protection depends entirely on the shipping courier's handling",
    "Data is automatically encrypted and the device is tamper-resistant"
   ],
   "a": 3,
   "e": "Snowball automatically encrypts data and uses tamper-resistant hardware with a Trusted Platform Module. Data is never left unencrypted, and protection does not rely on the courier or a support request.",
   "d": 3
  },
  {
   "id": 350,
   "t": "snow-family",
   "x": "A factory wants to run analytics on collected data locally before shipping the device to AWS, needing substantial onboard compute beyond what a small device offers. Which Snow Family option fits?",
   "o": [
    "AWS DataSync",
    "AWS Snowcone",
    "Amazon S3 Transfer Acceleration",
    "AWS Snowball Edge Compute Optimized"
   ],
   "a": 3,
   "e": "Snowball Edge Compute Optimized provides significant local compute for edge processing before data ships to AWS. Snowcone is the smallest device, while DataSync and Transfer Acceleration are online transfer services.",
   "d": 3
  },
  {
   "id": 351,
   "t": "storage-gateway",
   "x": "An on-premises application needs block storage presented over iSCSI, with its data backed up as point-in-time snapshots to AWS. Which Storage Gateway type provides that?",
   "o": [
    "Tape Gateway",
    "AWS Direct Connect",
    "Volume Gateway",
    "File Gateway"
   ],
   "a": 2,
   "e": "Volume Gateway presents cloud-backed block storage over iSCSI and can snapshot volumes to AWS. Tape Gateway emulates tape libraries, File Gateway serves files over NFS or SMB, and Direct Connect is a network link.",
   "d": 3
  },
  {
   "id": 352,
   "t": "storage-gateway",
   "x": "A company wants its on-premises applications to reach virtually unlimited cloud storage while frequently used data stays cached locally for fast access. What is the primary purpose of AWS Storage Gateway?",
   "o": [
    "To migrate relational databases between AWS Regions",
    "To distribute web content through a global cache network",
    "To run containerized workloads at remote edge sites",
    "To bridge on-premises applications to AWS storage with local caching"
   ],
   "a": 3,
   "e": "Storage Gateway connects on-premises environments to AWS storage while caching hot data locally for low-latency access. Database migration, edge container hosting, and content distribution are other services' roles.",
   "d": 3
  },
  {
   "id": 353,
   "t": "windows-on-aws",
   "x": "A company runs Windows applications on EC2 and needs a fully managed shared file system that speaks the SMB protocol and joins their Active Directory. Which AWS service fits?",
   "o": [
    "Amazon Elastic File System",
    "Amazon Elastic Block Store volumes",
    "Amazon FSx for Windows File Server",
    "AWS Storage Gateway File Gateway"
   ],
   "a": 2,
   "e": "Amazon FSx for Windows File Server provides native Windows shared storage over SMB with Active Directory integration. Amazon EFS uses the NFS protocol aimed at Linux workloads, so it cannot present a Windows SMB share.",
   "d": 3
  },
  {
   "id": 354,
   "t": "windows-on-aws",
   "x": "As part of moving Windows servers to AWS, an administrator wants a managed directory built on real Microsoft Active Directory so machines can perform a domain join and receive Group Policy. Which option provides that?",
   "o": [
    "Amazon Cognito user pools",
    "AWS Managed Microsoft AD",
    "AWS Identity and Access Management",
    "AWS Resource Access Manager"
   ],
   "a": 1,
   "e": "AWS Managed Microsoft AD, a tier of AWS Directory Service, runs actual Microsoft Active Directory, enabling domain join and Group Policy for Windows workloads. IAM governs access to AWS APIs and the console rather than Windows domain membership.",
   "d": 3
  }
 ],
 "pbqs": []
}
