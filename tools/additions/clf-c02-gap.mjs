// clf-c02 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "clf-c02",
  questions: [
  {
    "t": "auto-scaling",
    "x": "A web application team wants its EC2 fleet to add capacity when average processor use rises and shed it when demand falls, holding utilization near a chosen figure. Which scaling approach does that?",
    "o": [
      "A target tracking scaling policy that adjusts capacity toward a metric goal",
      "A manual capacity change made whenever an engineer notices load",
      "A fixed reserved count that never changes with demand",
      "A one-time launch of extra instances left running permanently"
    ],
    "a": 0,
    "e": "Target tracking scaling adds or removes instances to keep a metric such as average CPU near a set target. Manual changes and fixed counts do not respond automatically to shifting demand."
  },
  {
    "t": "auto-scaling",
    "x": "A company is weighing whether to adopt EC2 Auto Scaling for its variable web tier. Which benefits does Auto Scaling provide? Choose TWO.",
    "o": [
      "It keeps the application available by replacing instances that fail health checks",
      "It controls cost by matching running capacity to actual demand",
      "It encrypts all data stored on attached volumes automatically",
      "It removes every networking charge from the monthly bill",
      "It provides a fully managed relational database engine"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Auto Scaling improves availability by replacing unhealthy instances and reduces waste by scaling capacity to demand. It does not handle disk encryption, waive networking charges, or supply a database service."
  },
  {
    "t": "cloudformation-iac",
    "x": "A team is estimating what adopting AWS CloudFormation will add to its monthly bill. What does AWS charge for using CloudFormation to provision resources?",
    "o": [
      "Nothing for CloudFormation itself; you pay only for the resources it creates",
      "A flat monthly subscription regardless of how many stacks exist",
      "A fee per line of template code processed during deployment",
      "A percentage surcharge added on top of every provisioned resource"
    ],
    "a": 0,
    "e": "CloudFormation has no additional charge; you pay only for the AWS resources a stack provisions. There is no per-template, per-stack, or surcharge fee for the service."
  },
  {
    "t": "cloudformation-iac",
    "x": "A developer is about to write their first infrastructure template for AWS CloudFormation. In which two formats can these templates be authored? Choose TWO.",
    "o": [
      "YAML",
      "JSON",
      "XML",
      "CSV",
      "A plain shell script"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "CloudFormation templates are written in either YAML or JSON. XML, CSV, and shell scripts are not supported template formats."
  },
  {
    "t": "cloudfront-cdn",
    "x": "A retailer serving its site through Amazon CloudFront wants to filter out common web exploits such as SQL injection before requests reach the origin. Which service integrates with CloudFront to do that?",
    "o": [
      "AWS WAF",
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Config"
    ],
    "a": 0,
    "e": "AWS WAF integrates with CloudFront to block malicious HTTP requests at the edge. Inspector assesses instance vulnerabilities, Macie classifies sensitive data, and Config tracks resource changes."
  },
  {
    "t": "cloudfront-cdn",
    "x": "A media company delivers paid video through CloudFront and needs each stream reachable only by subscribers, with access expiring after a set time. Which CloudFront feature restricts content that way?",
    "o": [
      "Signed URLs and signed cookies",
      "A longer cache time-to-live setting",
      "Adding more edge locations to the network",
      "Enabling gzip compression on responses"
    ],
    "a": 0,
    "e": "Signed URLs and signed cookies grant time-limited access to specific CloudFront content. Cache settings, edge count, and compression affect delivery performance, not who is allowed to view the content."
  },
  {
    "t": "direct-connect-vpn",
    "x": "A company has established an AWS Site-to-Site VPN between its office and a VPC. Over which network does the traffic travel, and how is it kept confidential?",
    "o": [
      "Over the public internet, protected by IPsec encryption",
      "Over a dedicated private fiber line installed by AWS",
      "Over the public internet with no encryption applied",
      "Over an AWS backbone reserved exclusively for that customer"
    ],
    "a": 0,
    "e": "Site-to-Site VPN sends traffic across the public internet inside an encrypted IPsec tunnel. A dedicated private line describes Direct Connect, and VPN traffic is encrypted rather than sent in the clear."
  },
  {
    "t": "direct-connect-vpn",
    "x": "An architect is comparing AWS Direct Connect with Site-to-Site VPN for a new hybrid setup. Which two statements are accurate? Choose TWO.",
    "o": [
      "Direct Connect provides a dedicated private physical connection to AWS",
      "Site-to-Site VPN encrypts its traffic as it crosses the public internet",
      "Direct Connect encrypts all of its traffic by default",
      "A VPN delivers more consistent bandwidth than Direct Connect",
      "Direct Connect can be provisioned in minutes with no physical work"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Direct Connect is a dedicated private link and VPN encrypts traffic over the internet. Direct Connect is not encrypted by default, offers steadier performance than a VPN, and takes time to provision physically."
  },
  {
    "t": "dynamodb-nosql",
    "x": "An engineer is reading AWS documentation about Amazon DynamoDB. Which statement describes a defining characteristic of the service?",
    "o": [
      "It delivers consistent single-digit millisecond latency at any scale",
      "It requires you to provision and patch the underlying database servers",
      "It is a columnar engine built mainly for large analytical queries",
      "It centers its access model on complex multi-table SQL joins"
    ],
    "a": 0,
    "e": "DynamoDB is a fully managed key-value and document database offering single-digit millisecond latency at scale. It needs no server management, is not a columnar analytics engine, and is not built around SQL joins."
  },
  {
    "t": "dynamodb-nosql",
    "x": "A gaming company needs its DynamoDB player data replicated across several AWS Regions so users everywhere get fast local reads and writes. Which DynamoDB feature provides that?",
    "o": [
      "Global tables",
      "Read replicas",
      "Multi-AZ failover",
      "On-demand backups"
    ],
    "a": 0,
    "e": "DynamoDB global tables replicate a table across multiple Regions for low-latency local access worldwide. Read replicas and Multi-AZ failover are relational-database concepts, and backups protect data rather than replicate it regionally."
  },
  {
    "t": "ebs-efs",
    "x": "A database administrator takes regular Amazon EBS snapshots and wants to understand how repeated snapshots of the same volume are stored to keep costs down. How does EBS store them?",
    "o": [
      "Incrementally, saving only blocks changed since the previous snapshot, into Amazon S3",
      "As a complete full copy of the volume every time, kept on the volume itself",
      "As a temporary cache that is discarded when the instance stops",
      "As uncompressed mirror volumes kept in every Availability Zone"
    ],
    "a": 0,
    "e": "EBS snapshots are incremental and stored in Amazon S3, capturing only blocks changed since the last snapshot. They are not full copies each time, not temporary caches, and not mirrored volumes in every zone."
  },
  {
    "t": "ebs-efs",
    "x": "An engineer launches an EC2 instance in one Availability Zone and wants to attach an existing Amazon EBS volume to it. What condition must be met?",
    "o": [
      "The volume must reside in the same Availability Zone as the instance",
      "The volume must sit in a different zone for redundancy",
      "The volume can be attached from any Region without restriction",
      "The volume must first be converted into an EFS file system"
    ],
    "a": 0,
    "e": "An EBS volume can only attach to an instance in the same Availability Zone. It cannot span zones or Regions directly, and it does not need conversion to EFS to be usable."
  },
  {
    "t": "ecs-eks-fargate",
    "x": "A company already runs Kubernetes on-premises and wants a managed AWS service that runs upstream Kubernetes so its existing manifests and tooling keep working. Which service fits?",
    "o": [
      "Amazon EKS",
      "Amazon ECS",
      "AWS Lambda",
      "AWS Elastic Beanstalk"
    ],
    "a": 0,
    "e": "Amazon EKS runs standard Kubernetes as a managed service, so existing Kubernetes tooling works unchanged. ECS is AWS's own orchestrator, Lambda runs functions, and Beanstalk deploys web apps."
  },
  {
    "t": "ecs-eks-fargate",
    "x": "Before deploying its containers, a team needs a private, managed place inside AWS to store and version its Docker images. Which service provides that registry?",
    "o": [
      "Amazon ECR",
      "Amazon ECS",
      "Amazon S3 Glacier",
      "AWS CodeBuild"
    ],
    "a": 0,
    "e": "Amazon ECR is the managed private registry for storing and versioning container images. ECS runs containers, Glacier is archival object storage, and CodeBuild compiles source code."
  },
  {
    "t": "elastic-beanstalk",
    "x": "A developer using AWS Elastic Beanstalk is concerned about losing access to the EC2 instances and other resources it provisions. What level of control does Beanstalk give over those resources?",
    "o": [
      "Full access to and control over the underlying AWS resources it creates",
      "No access at all, since AWS fully hides the resources",
      "Read-only visibility, with changes requiring an AWS support case",
      "Control only during business hours in the primary Region"
    ],
    "a": 0,
    "e": "Elastic Beanstalk provisions resources on your behalf but leaves you full access to and control over them. The resources are not hidden, read-only, or time-restricted."
  },
  {
    "t": "eventbridge-stepfunctions",
    "x": "A company wants a service that receives events from AWS services and third-party SaaS applications and routes them to targets like Lambda according to rules it defines. Which service does that?",
    "o": [
      "Amazon EventBridge",
      "AWS Step Functions",
      "Amazon Athena",
      "AWS Batch"
    ],
    "a": 0,
    "e": "Amazon EventBridge is an event bus that routes events from many sources to targets based on rules. Step Functions orchestrates workflows, Athena queries data in S3, and Batch runs batch compute jobs."
  },
  {
    "t": "eventbridge-stepfunctions",
    "x": "A pipeline made of several Lambda functions keeps failing without the team knowing which step broke, and they want built-in retries plus a visible record of each step's outcome. Which service adds that?",
    "o": [
      "AWS Step Functions",
      "Amazon EventBridge",
      "Amazon SQS",
      "AWS CloudTrail"
    ],
    "a": 0,
    "e": "Step Functions coordinates steps as a state machine with built-in retry, error handling, and a visual view of each step's result. EventBridge routes events, SQS queues messages, and CloudTrail logs API calls."
  },
  {
    "t": "lightsail",
    "x": "A small business owner is drawn to Amazon Lightsail after hearing about its pricing model. Which statement describes how Lightsail is typically billed?",
    "o": [
      "Compute, storage, and a data-transfer allowance are bundled into a fixed monthly price",
      "Each resource is metered separately per second with no bundling",
      "It is free for any workload during the first three years",
      "Only outbound data transfer is charged, and compute is free"
    ],
    "a": 0,
    "e": "Lightsail bundles an instance, storage, and a data-transfer allowance into a predictable flat monthly price. It is not purely per-second, not free for years, and does not charge for data transfer alone."
  },
  {
    "t": "lightsail",
    "x": "A user wants to stand up a WordPress site on Lightsail quickly, without manually installing the web server, database, and PHP runtime. What does Lightsail offer to make this fast?",
    "o": [
      "Preconfigured blueprints that bundle popular application stacks",
      "Managed Kubernetes clusters for container orchestration",
      "A serverless function runtime billed per request",
      "A petabyte-scale data warehouse engine"
    ],
    "a": 0,
    "e": "Lightsail provides preconfigured blueprints such as WordPress and LAMP that install the full stack automatically. Kubernetes, serverless functions, and data warehousing are not what Lightsail blueprints deliver."
  },
  {
    "t": "outposts-local-zones",
    "x": "A mobile game developer wants the lowest possible latency for players on 5G networks by placing compute inside telecom carriers' data centers at the network edge. Which AWS offering targets that need?",
    "o": [
      "AWS Wavelength",
      "AWS Outposts",
      "AWS Local Zones",
      "Amazon CloudFront"
    ],
    "a": 0,
    "e": "AWS Wavelength embeds compute and storage within telecom providers' 5G networks for ultra-low mobile latency. Outposts runs in your own facility, Local Zones sit near metro areas, and CloudFront caches content."
  },
  {
    "t": "outposts-local-zones",
    "x": "An operations manager planning an AWS Outposts deployment asks who is responsible for delivering and maintaining the physical racks installed on site. What is the correct answer?",
    "o": [
      "AWS delivers, installs, and manages the Outposts hardware in the customer facility",
      "The customer must purchase and rack its own compatible servers",
      "A third-party colocation provider owns and services the equipment",
      "The hardware ships once and then receives no further maintenance"
    ],
    "a": 0,
    "e": "With Outposts, AWS delivers, installs, and manages fully AWS-owned hardware in the customer's location. Customers do not supply their own servers, and AWS maintains the equipment over its life."
  },
  {
    "t": "redshift-warehousing",
    "x": "A Redshift user wants to run queries directly against large datasets sitting in Amazon S3 without first loading them into the cluster. Which capability makes that possible?",
    "o": [
      "Redshift Spectrum",
      "Redshift snapshots",
      "DynamoDB Streams",
      "AWS Elastic Beanstalk"
    ],
    "a": 0,
    "e": "Redshift Spectrum lets Redshift query data in Amazon S3 without loading it into the cluster first. Snapshots are backups, DynamoDB Streams track item changes, and Beanstalk deploys applications."
  },
  {
    "t": "redshift-warehousing",
    "x": "A team wants to run analytics in Amazon Redshift but prefers not to size or manage cluster capacity, paying only when queries actually run. Which option meets that preference?",
    "o": [
      "Amazon Redshift Serverless",
      "A reserved dense-storage cluster",
      "A manually provisioned multi-node cluster",
      "An always-on single-node cluster"
    ],
    "a": 0,
    "e": "Redshift Serverless runs analytics without provisioning or managing clusters and charges based on usage. The other options all require you to provision and pay for cluster capacity you manage."
  },
  {
    "t": "regions-az-edge",
    "x": "A company must keep its stored data physically within one country to satisfy a data-residency law. Which AWS concept lets it control where that data resides?",
    "o": [
      "Choosing the AWS Region in which to deploy",
      "Selecting a particular Availability Zone",
      "Routing traffic through an edge location",
      "Picking a specific EC2 instance type"
    ],
    "a": 0,
    "e": "Selecting an AWS Region determines the geographic location where resources and data reside, which governs data residency. Availability Zones, edge locations, and instance types do not set the country of residence."
  },
  {
    "t": "regions-az-edge",
    "x": "A company is deciding which AWS Region to deploy a new workload in. Which factors should influence that choice? Choose TWO.",
    "o": [
      "Latency between the Region and the workload's end users",
      "Compliance and data-governance requirements",
      "The number of IAM users in the account",
      "The naming convention used for resources",
      "The color theme selected in the console"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Region choice should weigh user latency and compliance or data-governance rules, alongside cost and service availability. IAM user counts, naming conventions, and console themes have no bearing on Region selection."
  },
  {
    "t": "route53-dns",
    "x": "A company runs identical copies of its application in two Regions and wants each visitor sent to whichever Region gives them the fastest response. Which Route 53 routing policy achieves that?",
    "o": [
      "Latency-based routing",
      "Weighted routing",
      "Geolocation routing",
      "Simple routing"
    ],
    "a": 0,
    "e": "Latency-based routing directs each user to the Region that offers the lowest latency for them. Weighted splits traffic by proportion, geolocation routes by user location, and simple maps to a single resource."
  },
  {
    "t": "route53-dns",
    "x": "Beyond translating domain names into resource addresses, what additional capability does Amazon Route 53 provide to its customers?",
    "o": [
      "Registering new domain names",
      "Caching static content at edge locations",
      "Encrypting data stored in Amazon S3",
      "Distributing load across EC2 instances"
    ],
    "a": 0,
    "e": "Route 53 is also a domain registrar, so customers can buy and register domains directly. Content caching is CloudFront, S3 encryption is a storage feature, and load balancing is handled by ELB."
  },
  {
    "t": "sdk-cli-console",
    "x": "A developer is writing a Python application that must upload objects to Amazon S3 programmatically from within the application's own code. Which AWS access method should they use?",
    "o": [
      "The AWS SDK",
      "The AWS Management Console",
      "The AWS Billing dashboard",
      "The AWS Personal Health Dashboard"
    ],
    "a": 0,
    "e": "The AWS SDK lets developers call AWS services from within application code in languages like Python. The console is a manual web interface, and the billing and health dashboards report cost and status, not programmatic calls."
  },
  {
    "t": "sdk-cli-console",
    "x": "A new employee wants to explore AWS services and create resources by pointing and clicking in a web browser rather than typing commands. Which access method is that?",
    "o": [
      "The AWS Management Console",
      "The AWS Command Line Interface",
      "The AWS SDK",
      "An IAM access key pair"
    ],
    "a": 0,
    "e": "The AWS Management Console is the browser-based graphical interface for working with AWS by pointing and clicking. The CLI and SDK are command and code interfaces, and an access key is a credential, not an interface."
  },
  {
    "t": "snow-family",
    "x": "A company is shipping an AWS Snowball device full of data back to AWS and asks how that data is protected while in transit. What safeguards apply?",
    "o": [
      "Data is automatically encrypted and the device is tamper-resistant",
      "Data is left unencrypted so it can be read faster on arrival",
      "Protection depends entirely on the shipping courier's handling",
      "Encryption stays off unless a support ticket enables it"
    ],
    "a": 0,
    "e": "Snowball automatically encrypts data and uses tamper-resistant hardware with a Trusted Platform Module. Data is never left unencrypted, and protection does not rely on the courier or a support request."
  },
  {
    "t": "snow-family",
    "x": "A factory wants to run analytics on collected data locally before shipping the device to AWS, needing substantial onboard compute beyond what a small device offers. Which Snow Family option fits?",
    "o": [
      "AWS Snowball Edge Compute Optimized",
      "AWS Snowcone",
      "AWS DataSync",
      "Amazon S3 Transfer Acceleration"
    ],
    "a": 0,
    "e": "Snowball Edge Compute Optimized provides significant local compute for edge processing before data ships to AWS. Snowcone is the smallest device, while DataSync and Transfer Acceleration are online transfer services."
  },
  {
    "t": "storage-gateway",
    "x": "An on-premises application needs block storage presented over iSCSI, with its data backed up as point-in-time snapshots to AWS. Which Storage Gateway type provides that?",
    "o": [
      "Volume Gateway",
      "Tape Gateway",
      "File Gateway",
      "AWS Direct Connect"
    ],
    "a": 0,
    "e": "Volume Gateway presents cloud-backed block storage over iSCSI and can snapshot volumes to AWS. Tape Gateway emulates tape libraries, File Gateway serves files over NFS or SMB, and Direct Connect is a network link."
  },
  {
    "t": "storage-gateway",
    "x": "A company wants its on-premises applications to reach virtually unlimited cloud storage while frequently used data stays cached locally for fast access. What is the primary purpose of AWS Storage Gateway?",
    "o": [
      "To bridge on-premises applications to AWS storage with local caching",
      "To migrate relational databases between AWS Regions",
      "To run containerized workloads at remote edge sites",
      "To distribute web content through a global cache network"
    ],
    "a": 0,
    "e": "Storage Gateway connects on-premises environments to AWS storage while caching hot data locally for low-latency access. Database migration, edge container hosting, and content distribution are other services' roles."
  },
  {
    "t": "windows-on-aws",
    "x": "A company runs Windows applications on EC2 and needs a fully managed shared file system that speaks the SMB protocol and joins their Active Directory. Which AWS service fits?",
    "o": [
      "Amazon FSx for Windows File Server",
      "Amazon Elastic File System",
      "AWS Storage Gateway File Gateway",
      "Amazon Elastic Block Store volumes"
    ],
    "a": 0,
    "e": "Amazon FSx for Windows File Server provides native Windows shared storage over SMB with Active Directory integration. Amazon EFS uses the NFS protocol aimed at Linux workloads, so it cannot present a Windows SMB share."
  },
  {
    "t": "windows-on-aws",
    "x": "As part of moving Windows servers to AWS, an administrator wants a managed directory built on real Microsoft Active Directory so machines can perform a domain join and receive Group Policy. Which option provides that?",
    "o": [
      "AWS Managed Microsoft AD",
      "AWS Identity and Access Management",
      "Amazon Cognito user pools",
      "AWS Resource Access Manager"
    ],
    "a": 0,
    "e": "AWS Managed Microsoft AD, a tier of AWS Directory Service, runs actual Microsoft Active Directory, enabling domain join and Group Policy for Windows workloads. IAM governs access to AWS APIs and the console rather than Windows domain membership."
  }
],
}
