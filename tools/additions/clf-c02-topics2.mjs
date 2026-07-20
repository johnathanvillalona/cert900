// CLF-C02 sub-topics, each anchored to the freeCodeCamp chapter that covers
// it. The course's 29 chapters are already nearly all used (27), so growing
// the bank means finer topics against the same trusted source rather than a
// new channel -- the pattern aif-c01 already follows. Anchoring to the
// chapter START means no timestamp can be wrong.
//
// Domain 2 (Security and Compliance) is the urgent one: it carries 30% of the
// exam on only 4 topics today, so a 320-question bank would stack ~24
// questions per topic and run straight into the near-duplicate gate.
const V = "https://www.youtube.com/watch?v=7HKot-brXFE"
const CH = {
  cloudConcepts: 530,
  globalInfra: 5214,
  mgmtTools: 9332,
  compute: 15629,
  storage: 18736,
  databases: 21167,
  networking: 23311,
  identity: 28860,
  appIntegration: 31562,
  containers: 32583,
  governance: 33232,
  serverless: 36245,
  windows: 36515,
  wellArchitected: 40360,
  billing: 42476,
  security: 45785,
}
const v = (k, n, d, t) => [k, { n: `freeCodeCamp: ${n}`, u: `${V}&t=${t}s`, d }]

export default {
  examId: "clf-c02",
  videos: Object.fromEntries([
    // --- 1. Cloud Concepts (24%) ---
    v("cloud-deployment-models", "Cloud Deployment Models", 1, CH.cloudConcepts),
    v("economies-of-scale", "Economies of Scale and Agility", 1, CH.cloudConcepts),
    v("well-architected-pillars", "Well-Architected Framework Pillars", 1, CH.wellArchitected),

    // --- 2. Security and Compliance (30%) ---
    v("iam-policies-roles", "IAM Policies and Roles", 2, CH.identity),
    v("iam-root-mfa", "Root Account Protection and MFA", 2, CH.identity),
    v("cognito-directory", "Cognito and Directory Services", 2, CH.identity),
    v("kms-encryption", "KMS and Encryption at Rest", 2, CH.security),
    v("secrets-manager", "Secrets Manager and Parameter Store", 2, CH.security),
    v("waf-shield", "WAF and Shield", 2, CH.security),
    v("guardduty-inspector", "GuardDuty and Inspector", 2, CH.security),
    v("macie-detective", "Macie and Detective", 2, CH.security),
    v("organizations-scp", "Organizations and Service Control Policies", 2, CH.governance),
    v("control-tower", "Control Tower and Landing Zones", 2, CH.governance),
    v("config-cloudtrail", "Config and CloudTrail", 2, CH.governance),
    v("artifact-compliance", "Artifact and Compliance Programs", 2, CH.governance),

    // --- 3. Cloud Technology and Services (34%) ---
    v("regions-az-edge", "Regions, Availability Zones, and Edge Locations", 3, CH.globalInfra),
    v("outposts-local-zones", "Outposts, Local Zones, and Wavelength", 3, CH.globalInfra),
    v("sdk-cli-console", "Console, CLI, and SDKs", 3, CH.mgmtTools),
    v("cloudformation-iac", "CloudFormation and Infrastructure as Code", 3, CH.mgmtTools),
    v("auto-scaling", "Auto Scaling", 3, CH.compute),
    v("elastic-beanstalk", "Elastic Beanstalk", 3, CH.compute),
    v("lightsail", "Lightsail", 3, CH.compute),
    v("windows-on-aws", "Windows Workloads on AWS", 3, CH.windows),
    v("lambda", "Lambda and Event-Driven Compute", 3, CH.serverless),
    v("s3-storage-classes", "S3 Storage Classes and Lifecycle", 3, CH.storage),
    v("ebs-efs", "EBS and EFS", 3, CH.storage),
    v("storage-gateway", "Storage Gateway", 3, CH.storage),
    v("snow-family", "Snow Family and Bulk Transfer", 3, CH.storage),
    v("rds-aurora", "RDS and Aurora", 3, CH.databases),
    v("dynamodb-nosql", "DynamoDB and NoSQL", 3, CH.databases),
    v("redshift-warehousing", "Redshift and Data Warehousing", 3, CH.databases),
    v("vpc-subnets", "VPC, Subnets, and Security Groups", 3, CH.networking),
    v("route53-dns", "Route 53 and DNS", 3, CH.networking),
    v("cloudfront-cdn", "CloudFront and Edge Caching", 3, CH.networking),
    v("direct-connect-vpn", "Direct Connect and VPN", 3, CH.networking),
    v("load-balancing", "Elastic Load Balancing", 3, CH.networking),
    v("sqs-sns", "SQS and SNS", 3, CH.appIntegration),
    v("eventbridge-stepfunctions", "EventBridge and Step Functions", 3, CH.appIntegration),
    v("ecs-eks-fargate", "ECS, EKS, and Fargate", 3, CH.containers),

    // --- 4. Billing, Pricing, and Support (12%) ---
    v("free-tier", "AWS Free Tier", 4, CH.billing),
    v("savings-plans-reserved", "Savings Plans and Reserved Instances", 4, CH.billing),
    v("cost-explorer-budgets", "Cost Explorer and Budgets", 4, CH.billing),
    v("consolidated-billing", "Consolidated Billing", 4, CH.billing),
    v("trusted-advisor", "Trusted Advisor", 4, CH.billing),
  ]),
}
