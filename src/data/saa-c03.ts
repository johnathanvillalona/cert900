// AWS Certified Solutions Architect - Associate (SAA-C03) bank. aws vendor.
// 65 questions, 130 min, scaled 100-1000, pass 720. Multiple choice and
// multiple response ONLY -- the real SAA-C03 has NO interactive items (same as
// CLF-C02), so examPBQ/pbqs stay 0 ON PURPOSE; do not "add" PBQs. Topics link
// chapters of freeCodeCamp's free SAA-C03 full course (youtube c3Cn4xYfxJY).
import type { ExamDef } from "./types"

export const exam: ExamDef = {
 "id": "saa-c03",
 "vendor": "aws",
 "scale": {
  "max": 1000,
  "pass": 720
 },
 "cert": "AWS Certified",
 "name": "Solutions Architect Associate",
 "code": "SAA-C03",
 "blurb": "Design secure, resilient, high-performing, and cost-optimized architectures on AWS.",
 "domains": {
  "1": "Design Secure Architectures",
  "2": "Design Resilient Architectures",
  "3": "Design High-Performing Architectures",
  "4": "Design Cost-Optimized Architectures"
 },
 "examSplit": {
  "1": 0.3,
  "2": 0.26,
  "3": 0.24,
  "4": 0.2
 },
 "examMC": 65,
 "examPBQ": 0,
 "examMinutes": 130,
 "videos": {
  "iam-users-groups-policies": {
   "n": "freeCodeCamp SAA-C03: IAM users, groups & policies",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=63222s",
   "d": 1
  },
  "iam-roles-sts": {
   "n": "freeCodeCamp SAA-C03: IAM roles & STS",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=63222s",
   "d": 1
  },
  "identity-vs-resource-policies": {
   "n": "freeCodeCamp SAA-C03: Identity vs resource policies",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=63222s",
   "d": 1
  },
  "cross-account-access": {
   "n": "freeCodeCamp SAA-C03: Cross-account access",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=63222s",
   "d": 1
  },
  "organizations-scps": {
   "n": "freeCodeCamp SAA-C03: Organizations & SCPs",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=63222s",
   "d": 1
  },
  "iam-identity-center": {
   "n": "freeCodeCamp SAA-C03: IAM Identity Center & federation",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=63222s",
   "d": 1
  },
  "root-account-mfa": {
   "n": "freeCodeCamp SAA-C03: Root account & MFA",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=63222s",
   "d": 1
  },
  "cognito-app-identity": {
   "n": "freeCodeCamp SAA-C03: Cognito user & identity pools",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=169137s",
   "d": 1
  },
  "vpc-security-groups-nacls": {
   "n": "freeCodeCamp SAA-C03: Security groups & network ACLs",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=44392s",
   "d": 1
  },
  "vpc-subnet-segmentation": {
   "n": "freeCodeCamp SAA-C03: Subnet segmentation & NAT",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=44392s",
   "d": 1
  },
  "secrets-manager": {
   "n": "freeCodeCamp SAA-C03: Secrets Manager",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=172417s",
   "d": 1
  },
  "kms-encryption-at-rest": {
   "n": "freeCodeCamp SAA-C03: KMS encryption at rest",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=166905s",
   "d": 1
  },
  "acm-tls-in-transit": {
   "n": "freeCodeCamp SAA-C03: ACM & TLS in transit",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=168023s",
   "d": 1
  },
  "waf-shield-ddos": {
   "n": "freeCodeCamp SAA-C03: WAF & Shield",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=178409s",
   "d": 1
  },
  "guardduty-macie": {
   "n": "freeCodeCamp SAA-C03: GuardDuty & Macie",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=179170s",
   "d": 1
  },
  "s3-security-bucket-policies": {
   "n": "freeCodeCamp SAA-C03: S3 bucket policies & Block Public Access",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=3158s",
   "d": 1
  },
  "sqs-decoupling": {
   "n": "freeCodeCamp SAA-C03: SQS decoupling",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=99785s",
   "d": 2
  },
  "sns-pub-sub": {
   "n": "freeCodeCamp SAA-C03: SNS pub/sub",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=97329s",
   "d": 2
  },
  "eventbridge-events": {
   "n": "freeCodeCamp SAA-C03: EventBridge",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=106804s",
   "d": 2
  },
  "api-gateway": {
   "n": "freeCodeCamp SAA-C03: API Gateway",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=150249s",
   "d": 2
  },
  "lambda-serverless": {
   "n": "freeCodeCamp SAA-C03: Lambda",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=108996s",
   "d": 2
  },
  "step-functions": {
   "n": "freeCodeCamp SAA-C03: Step Functions",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=114591s",
   "d": 2
  },
  "ecs-fargate": {
   "n": "freeCodeCamp SAA-C03: ECS & Fargate",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=164358s",
   "d": 2
  },
  "eks-kubernetes": {
   "n": "freeCodeCamp SAA-C03: EKS",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=165747s",
   "d": 2
  },
  "ec2-auto-scaling-groups": {
   "n": "freeCodeCamp SAA-C03: EC2 Auto Scaling groups",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=77830s",
   "d": 2
  },
  "elastic-load-balancing": {
   "n": "freeCodeCamp SAA-C03: Elastic Load Balancing",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=78614s",
   "d": 2
  },
  "route53-dns-failover": {
   "n": "freeCodeCamp SAA-C03: Route 53 routing & failover",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=79040s",
   "d": 2
  },
  "rds-multi-az": {
   "n": "freeCodeCamp SAA-C03: RDS Multi-AZ",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=150069s",
   "d": 2
  },
  "aurora-ha-replicas": {
   "n": "freeCodeCamp SAA-C03: Aurora replicas & failover",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=154579s",
   "d": 2
  },
  "dynamodb-global-tables": {
   "n": "freeCodeCamp SAA-C03: DynamoDB global tables",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=160151s",
   "d": 2
  },
  "s3-cross-region-replication": {
   "n": "freeCodeCamp SAA-C03: S3 versioning & cross-region replication",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=3158s",
   "d": 2
  },
  "disaster-recovery-strategies": {
   "n": "freeCodeCamp SAA-C03: DR strategies",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=82464s",
   "d": 2
  },
  "s3-performance": {
   "n": "freeCodeCamp SAA-C03: S3 performance",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=3158s",
   "d": 3
  },
  "ebs-volume-types": {
   "n": "freeCodeCamp SAA-C03: EBS volume types & IOPS",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=81024s",
   "d": 3
  },
  "efs-shared-storage": {
   "n": "freeCodeCamp SAA-C03: EFS",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=81934s",
   "d": 3
  },
  "fsx-file-systems": {
   "n": "freeCodeCamp SAA-C03: FSx",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=82238s",
   "d": 3
  },
  "ec2-instance-types": {
   "n": "freeCodeCamp SAA-C03: EC2 instance types",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=69243s",
   "d": 3
  },
  "elasticache-caching": {
   "n": "freeCodeCamp SAA-C03: ElastiCache",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=125992s",
   "d": 3
  },
  "cloudfront-cdn": {
   "n": "freeCodeCamp SAA-C03: CloudFront",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=80460s",
   "d": 3
  },
  "global-accelerator": {
   "n": "freeCodeCamp SAA-C03: Global Accelerator",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=80369s",
   "d": 3
  },
  "rds-read-replicas": {
   "n": "freeCodeCamp SAA-C03: RDS read replicas",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=150069s",
   "d": 3
  },
  "dynamodb-performance": {
   "n": "freeCodeCamp SAA-C03: DynamoDB performance & DAX",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=160151s",
   "d": 3
  },
  "redshift-warehouse": {
   "n": "freeCodeCamp SAA-C03: Redshift",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=134363s",
   "d": 3
  },
  "kinesis-streaming": {
   "n": "freeCodeCamp SAA-C03: Kinesis streaming",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=135470s",
   "d": 3
  },
  "glue-athena-lake": {
   "n": "freeCodeCamp SAA-C03: Glue & Athena",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=149224s",
   "d": 3
  },
  "direct-connect-vpn": {
   "n": "freeCodeCamp SAA-C03: Direct Connect & VPN",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=44392s",
   "d": 3
  },
  "datasync-migration": {
   "n": "freeCodeCamp SAA-C03: DataSync",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=83735s",
   "d": 3
  },
  "s3-storage-classes": {
   "n": "freeCodeCamp SAA-C03: S3 storage classes",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=3158s",
   "d": 4
  },
  "s3-lifecycle-intelligent-tiering": {
   "n": "freeCodeCamp SAA-C03: S3 lifecycle & Intelligent-Tiering",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=3158s",
   "d": 4
  },
  "storage-gateway-hybrid": {
   "n": "freeCodeCamp SAA-C03: Storage Gateway",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=83227s",
   "d": 4
  },
  "ec2-pricing-models": {
   "n": "freeCodeCamp SAA-C03: EC2 pricing models",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=180655s",
   "d": 4
  },
  "savings-plans": {
   "n": "freeCodeCamp SAA-C03: Savings Plans vs Reserved",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=180655s",
   "d": 4
  },
  "spot-instances": {
   "n": "freeCodeCamp SAA-C03: Spot Instances",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=180655s",
   "d": 4
  },
  "cost-explorer-budgets": {
   "n": "freeCodeCamp SAA-C03: Cost Explorer & Budgets",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=180655s",
   "d": 4
  },
  "nat-gateway-cost": {
   "n": "freeCodeCamp SAA-C03: NAT gateway cost",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=44392s",
   "d": 4
  },
  "vpc-endpoints-data-transfer": {
   "n": "freeCodeCamp SAA-C03: VPC endpoints & data transfer",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=44392s",
   "d": 4
  },
  "aurora-serverless-cost": {
   "n": "freeCodeCamp SAA-C03: Aurora Serverless cost",
   "u": "https://www.youtube.com/watch?v=c3Cn4xYfxJY&t=154579s",
   "d": 4
  }
 },
 "questions": [
  {
   "id": 1,
   "t": "iam-users-groups-policies",
   "x": "A company has 30 new developers who all need the same permissions to launch EC2 instances and read from an S3 bucket. What is the MOST efficient way to manage their permissions?",
   "o": [
    "Add each developer as a separate statement in the target S3 bucket policy",
    "Create an IAM group with the needed policies and add the developers to it",
    "Attach an identical inline policy to each of the 30 individual IAM users",
    "Create one IAM role and share a set of long-term access keys with everyone"
   ],
   "a": 1,
   "e": "An IAM group lets you attach policies once and manage many users together; changing the group updates all members. Inline policies per user and shared long-term keys are error-prone and violate best practice.",
   "d": 1
  },
  {
   "id": 2,
   "t": "iam-users-groups-policies",
   "x": "An IAM user has one policy that allows s3:GetObject on a bucket and a separate attached policy that explicitly denies s3:GetObject on that same bucket. What is the effective result when the user reads an object?",
   "o": [
    "The request is denied because an explicit deny overrides any allow",
    "The request is allowed because the two conflicting policies cancel out",
    "The request is allowed because an explicit allow overrides a deny",
    "The request is denied only if the deny policy was attached most recently"
   ],
   "a": 0,
   "e": "In IAM evaluation, an explicit Deny always wins regardless of any Allow. Ordering and recency do not matter, and conflicting statements do not cancel out.",
   "d": 1
  },
  {
   "id": 3,
   "t": "iam-users-groups-policies",
   "x": "A security team must confirm that IAM roles across all accounts hold only the access their workloads actually need and that no stale sign-in secrets remain active. Which actions support this effort? Choose TWO.",
   "o": [
    "Attach the ReadOnlyAccess managed policy to every role as a safer baseline",
    "Use IAM Access Analyzer to find unused roles and permissions",
    "Enable Amazon GuardDuty and review its findings in each account",
    "Consolidate workloads onto a single shared service role to simplify reviews",
    "Generate IAM credential reports to review password and key age"
   ],
   "a": 1,
   "e": "IAM Access Analyzer identifies roles and permissions that are never used so policies can be scoped down, and credential reports list each user's password and access-key age so stale secrets can be disabled. GuardDuty detects active threats rather than over-broad policies, attaching ReadOnlyAccess everywhere grants unneeded read access instead of removing it, and a shared service role broadens access rather than narrowing it.",
   "d": 1,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 4,
   "t": "iam-users-groups-policies",
   "x": "A company wants an IAM policy that grants access only under certain request conditions. Which condition keys can enforce such context-based restrictions? Choose TWO.",
   "o": [
    "aws:MultiFactorAuthPresent to require MFA on the request",
    "aws:SourceIp to restrict by the caller's IP address",
    "aws:CurrentTime placed inside the policy Principal element",
    "s3:GetObject supplied as the policy's Principal value",
    "ec2:RunInstances specified as a policy condition key"
   ],
   "a": 0,
   "e": "aws:SourceIp and aws:MultiFactorAuthPresent are global condition keys used in a Condition block to gate access. Service actions are not condition keys, and condition keys do not belong in the Principal element.",
   "d": 1,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 5,
   "t": "iam-users-groups-policies",
   "x": "An administrator must let an auditors team view billing and have read-only access to all resources without any ability to modify them. Which approach follows AWS best practice MOST closely?",
   "o": [
    "Give each auditor the AWS account root user credentials to sign in",
    "Create access keys for each auditor with full administrative rights",
    "Attach an inline policy that allows all actions on all resources",
    "Attach the AWS managed ReadOnlyAccess policy to an auditors group"
   ],
   "a": 3,
   "e": "The AWS managed ReadOnlyAccess policy grants broad view-only access without modification rights, which matches an auditor role. Root credentials and admin-level policies grant far more than needed.",
   "d": 1
  },
  {
   "id": 6,
   "t": "iam-users-groups-policies",
   "x": "A developer attached a permissions boundary to an IAM role, and the boundary is more restrictive than the role's identity policy. What effect does the permissions boundary have on the role?",
   "o": [
    "The boundary is ignored because boundaries apply only to IAM users",
    "The role receives the union of both the boundary and the identity policy",
    "The identity policy is replaced entirely by the permissions boundary settings",
    "Effective permissions become the intersection of the boundary and identity policy"
   ],
   "a": 3,
   "e": "A permissions boundary caps the maximum permissions, so the effective set is the intersection of the boundary and the identity policy. Boundaries apply to both users and roles and do not replace or add permissions.",
   "d": 1
  },
  {
   "id": 7,
   "t": "iam-roles-sts",
   "x": "An application running on an EC2 instance needs to read objects from an S3 bucket. What is the MOST secure way to grant this access?",
   "o": [
    "Store static access keys in a file on the instance root volume",
    "Embed IAM access keys directly in the application source code",
    "Attach an IAM role to the EC2 instance with an S3 read policy",
    "Pass long-term credentials through EC2 user data at launch time"
   ],
   "a": 2,
   "e": "An instance profile role delivers automatically rotated, short-lived credentials with no secrets to manage. Embedding or storing long-term keys risks exposure and is discouraged.",
   "d": 1
  },
  {
   "id": 8,
   "t": "iam-roles-sts",
   "x": "A Lambda function must publish messages to an Amazon SNS topic. How should permissions be granted to the function following AWS best practice?",
   "o": [
    "Configure the function to run under the AWS account root credentials",
    "Hardcode an IAM user's secret access key in an environment variable",
    "Assign an IAM execution role to the function that allows sns:Publish",
    "Attach the SNS topic's access keys to the deployed function package"
   ],
   "a": 2,
   "e": "A Lambda execution role provides temporary credentials scoped to just the needed actions such as sns:Publish. Hardcoded keys and root credentials are insecure and unnecessary.",
   "d": 1
  },
  {
   "id": 9,
   "t": "iam-roles-sts",
   "x": "An architect needs temporary security credentials issued by AWS STS for federation and cross-account scenarios. Which STS operations return temporary security credentials? Choose TWO.",
   "o": [
    "AssumeRole",
    "GetSessionToken",
    "DescribeInstances",
    "CreateAccessKey",
    "PutRolePolicy"
   ],
   "a": 0,
   "e": "AssumeRole and GetSessionToken are STS calls that return short-lived credentials. CreateAccessKey issues long-term IAM keys, while PutRolePolicy and DescribeInstances do not return credentials.",
   "d": 1,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 10,
   "t": "iam-roles-sts",
   "x": "Instances in an Auto Scaling group need rotating, short-lived credentials to call DynamoDB with no embedded secrets. Which mechanism provides this automatically?",
   "o": [
    "A hardcoded IAM user access key baked directly into the AMI",
    "A Secrets Manager secret that stores static long-term keys",
    "An IAM role delivered through the instance metadata service",
    "A shared credentials file distributed through EC2 user data"
   ],
   "a": 2,
   "e": "An IAM role surfaces temporary credentials via the instance metadata service, and they rotate automatically. Baked-in keys and static secrets defeat the purpose and add rotation burden.",
   "d": 1
  },
  {
   "id": 11,
   "t": "iam-roles-sts",
   "x": "A workload on Amazon EKS needs fine-grained AWS permissions per Kubernetes service account rather than one identity per node. Which feature should the architect use?",
   "o": [
    "Long-lived IAM access keys stored in Kubernetes secrets",
    "A single node instance role shared by all pods on the node",
    "IAM roles for service accounts using an OIDC provider",
    "The EKS cluster control plane security group as the identity"
   ],
   "a": 2,
   "e": "IAM roles for service accounts (IRSA) map an IAM role to a Kubernetes service account through an OIDC provider, giving each pod least-privilege access. A shared node role or stored keys is coarse and less secure.",
   "d": 1
  },
  {
   "id": 12,
   "t": "iam-roles-sts",
   "x": "An architect is reviewing how an IAM role's trust policy behaves. Which statement about an IAM role trust policy is correct?",
   "o": [
    "It sets the maximum session duration for every AWS service call",
    "It lists the specific resources the role is permitted to access",
    "It encrypts the temporary credentials that STS returns to callers",
    "It defines which principals are allowed to call sts:AssumeRole for the role"
   ],
   "a": 3,
   "e": "A trust policy is a resource-based policy on the role specifying who may assume it. The role's permissions come from its identity policies, not the trust policy.",
   "d": 1
  },
  {
   "id": 13,
   "t": "iam-roles-sts",
   "x": "A company runs an on-premises application that must call AWS APIs without storing long-term keys. Which approaches let the app obtain temporary AWS credentials? Choose TWO.",
   "o": [
    "Create a fresh access key manually for every API call",
    "Federate through SAML and call AssumeRoleWithSAML",
    "Use IAM Roles Anywhere with an X.509 certificate",
    "Store the AWS account root keys in the application vault",
    "Copy an IAM user access key into the app config file"
   ],
   "a": 1,
   "e": "IAM Roles Anywhere uses trusted X.509 certificates to hand out temporary credentials, and SAML federation with AssumeRoleWithSAML does the same for identity-provider users. The other options rely on static or root keys.",
   "d": 1,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 14,
   "t": "identity-vs-resource-policies",
   "x": "An architect must let a role read from an S3 bucket and also force every request to use encryption in transit. Where is the aws:SecureTransport condition most appropriately enforced?",
   "o": [
    "In an inbound rule on the security group protecting the workload",
    "In the trust policy attached to the IAM role that reads the bucket",
    "In an S3 bucket policy that denies requests when aws:SecureTransport is false",
    "In a service control policy applied to the developer's AWS account"
   ],
   "a": 2,
   "e": "A bucket policy that denies requests where aws:SecureTransport is false enforces TLS at the resource for all callers. Trust policies, SCPs, and security groups do not evaluate that request condition on S3 objects.",
   "d": 1
  },
  {
   "id": 15,
   "t": "identity-vs-resource-policies",
   "x": "An architect is explaining the core distinction between IAM policy types. What is the primary difference between an identity-based policy and a resource-based policy?",
   "o": [
    "Resource policies can only allow actions and can never specify a principal",
    "Identity policies attach to a resource; resource policies attach to an IAM user or group",
    "Both policy types must always be attached to the very same IAM group object",
    "Identity policies attach to a principal; resource policies attach to a resource and name a principal"
   ],
   "a": 3,
   "e": "Identity-based policies are attached to users, groups, or roles, while resource-based policies live on the resource and include a Principal element. This lets resource policies grant cross-account access directly.",
   "d": 1
  },
  {
   "id": 16,
   "t": "identity-vs-resource-policies",
   "x": "An S3 bucket must trigger an event that sends messages to an SQS queue when new objects arrive. Which policy grants Amazon S3 permission to send messages to that queue?",
   "o": [
    "A resource-based policy on the SQS queue allowing the S3 service principal",
    "A permissions boundary configured on the destination SQS queue",
    "A service control policy on the account that owns the S3 bucket",
    "An identity-based policy attached to the source S3 bucket resource"
   ],
   "a": 0,
   "e": "SQS uses a queue policy, a resource-based policy, to allow the S3 service principal to call SendMessage. S3 is not a principal you attach identity policies to, and boundaries or SCPs do not grant this.",
   "d": 1
  },
  {
   "id": 17,
   "t": "identity-vs-resource-policies",
   "x": "An architect is listing which AWS resources support resource-based policies that can grant cross-account access directly. Which resources qualify? Choose TWO.",
   "o": [
    "Amazon EC2 instances",
    "Amazon EBS volumes",
    "Amazon CloudWatch dashboards",
    "AWS Lambda functions",
    "Amazon S3 buckets"
   ],
   "a": 3,
   "e": "S3 buckets and Lambda functions expose resource-based policies that name a principal and can grant cross-account access. EBS volumes, EC2 instances, and CloudWatch dashboards do not have resource policies.",
   "d": 1,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 18,
   "t": "identity-vs-resource-policies",
   "x": "A KMS customer managed key does not reference an IAM role in its key policy, and no IAM-based delegation is configured. What happens when that same-account role tries to use the key?",
   "o": [
    "The request fails because the key policy must grant access for KMS keys",
    "The request succeeds because IAM policies always override any key policy",
    "The request fails because KMS keys ignore all IAM permission settings",
    "The request succeeds because same-account key access is fully automatic"
   ],
   "a": 0,
   "e": "KMS requires the key policy to allow access, either directly or by delegating to IAM. Without either path, a same-account principal is denied; access is not automatic and IAM alone cannot override a key policy.",
   "d": 1
  },
  {
   "id": 19,
   "t": "identity-vs-resource-policies",
   "x": "An architect wants to grant another AWS account permission to invoke a Lambda function. Which configuration achieves this with the LEAST operational overhead?",
   "o": [
    "Share an IAM user's access keys with the other account's team",
    "Create a NAT gateway to route invocations between the accounts",
    "Add a resource-based policy on the function granting the other account",
    "Copy the function code into the other account and redeploy it"
   ],
   "a": 2,
   "e": "A Lambda resource-based policy can grant a specific external account permission to invoke the function with a single statement. Sharing keys, adding a NAT gateway, or duplicating code adds risk and effort.",
   "d": 1
  },
  {
   "id": 20,
   "t": "cross-account-access",
   "x": "A central logging account must let a production account write logs into a shared S3 bucket owned by the logging account. What is the recommended way to grant this cross-account write access?",
   "o": [
    "Add a bucket policy in the logging account allowing the production account principal",
    "Create duplicate buckets in both accounts and sync them each hour",
    "Attach an SCP to the production account that allows s3:PutObject",
    "Share the logging account root credentials with the production team"
   ],
   "a": 0,
   "e": "A bucket policy on the shared bucket that names the production account grants scoped cross-account writes. SCPs only restrict permissions, and sharing root or duplicating buckets is insecure or wasteful.",
   "d": 1
  },
  {
   "id": 21,
   "t": "cross-account-access",
   "x": "A company wants engineers in a development account to deploy to a production account without any long-term credentials in production. Which pattern should the architect use?",
   "o": [
    "Generate one production access key and share it among all the engineers",
    "Create IAM users in production and email the passwords to each engineer",
    "Peer the two VPCs so development engineers inherit production permissions",
    "Create a role in production that trusts the development account for engineers to assume"
   ],
   "a": 3,
   "e": "A cross-account role in production, trusting the development account, lets engineers assume it for temporary credentials. Shared users, keys, or VPC peering do not grant IAM permissions and are insecure.",
   "d": 1
  },
  {
   "id": 22,
   "t": "cross-account-access",
   "x": "An architect is designing cross-account role assumption for a third-party vendor. Which controls make this arrangement more secure? Choose TWO.",
   "o": [
    "Require an external ID in the role's trust policy",
    "Keep the role's ARN confidential and share it only over an encrypted channel",
    "Add an MFA condition to the assume-role request",
    "Issue the vendor long-term IAM user access keys instead of temporary role sessions",
    "Rotate the role's ARN on a fixed schedule so stale references stop working"
   ],
   "a": 0,
   "e": "An external ID prevents the confused-deputy problem, and an MFA condition adds a second factor to the assume-role call. Role ARNs are identifiers rather than secrets, so keeping them confidential or rotating them provides no real protection, and long-term vendor access keys are weaker than short-lived role sessions.",
   "d": 1,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 23,
   "t": "cross-account-access",
   "x": "An engineer assumes a cross-account role but receives an access-denied error, even though the destination role already carries the needed permissions. Which element is MOST likely misconfigured?",
   "o": [
    "The trust policy on the destination role does not permit the calling principal",
    "The destination role's permissions policy is missing an sts:AssumeRole statement",
    "The engineer's long-term access keys have not been rotated recently",
    "The destination role is not associated with an EC2 instance profile"
   ],
   "a": 0,
   "e": "Cross-account AssumeRole must be allowed by the destination role's trust policy, so a trust policy that omits the calling principal is the likely gap when the role's permissions are otherwise correct. The role's own permissions policy, including any sts:AssumeRole statement in it, controls what the role can do after assumption rather than who may assume it; key age does not block API calls, and instance profiles matter only when attaching a role to EC2.",
   "d": 1
  },
  {
   "id": 24,
   "t": "cross-account-access",
   "x": "A SaaS provider needs each customer to grant it scoped, temporary access to that customer's AWS account. Which AWS feature is designed for delegating this kind of third-party access?",
   "o": [
    "A VPC peering connection from the provider to each customer",
    "A cross-account IAM role secured with an external ID",
    "A shared IAM user created inside every customer account",
    "A public S3 bucket that holds copies of customer credentials"
   ],
   "a": 1,
   "e": "A cross-account IAM role with an external ID lets customers delegate temporary, scoped access to a SaaS vendor safely. Shared users, VPC peering, or public credential storage do not provide secure delegation.",
   "d": 1
  },
  {
   "id": 25,
   "t": "cross-account-access",
   "x": "A company plans to use AWS Resource Access Manager to share infrastructure across accounts in its organization. Which resource types can be shared through RAM? Choose TWO.",
   "o": [
    "IAM user passwords across member accounts",
    "VPC subnets from a central networking account",
    "EC2 instance store volumes between Regions",
    "The organization management account root user",
    "Transit Gateways for shared connectivity"
   ],
   "a": 1,
   "e": "RAM can share resources such as VPC subnets and Transit Gateways so multiple accounts use centrally managed networking. Passwords, root users, and instance store volumes cannot be shared with RAM.",
   "d": 1,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 26,
   "t": "organizations-scps",
   "x": "A company must ensure that no account in a specific organizational unit can create resources outside the eu-west-1 Region. Which AWS Organizations feature enforces this guardrail?",
   "o": [
    "A service control policy that denies actions outside eu-west-1",
    "A resource-based policy attached to each EC2 instance created",
    "An IAM group applied uniformly to every account in the OU",
    "A Route 53 geolocation routing policy for the affected accounts"
   ],
   "a": 0,
   "e": "An SCP with a Region condition can deny actions outside eu-west-1 across all accounts in the OU as a guardrail. IAM groups, resource policies, and Route 53 routing cannot enforce an org-wide Region restriction.",
   "d": 1
  },
  {
   "id": 27,
   "t": "organizations-scps",
   "x": "An SCP denies s3:DeleteBucket at the organization root, but a member account administrator later attaches an IAM policy allowing s3:DeleteBucket. Can a user in that account delete a bucket?",
   "o": [
    "No, because an SCP deny cannot be overridden by an IAM allow",
    "Yes, but only when the requesting user has MFA enabled",
    "Yes, because IAM policies always take precedence over any SCP",
    "No, unless the target bucket happens to be empty at deletion"
   ],
   "a": 0,
   "e": "SCPs set the permission ceiling, so an action denied by an SCP is blocked no matter what IAM policies allow. IAM cannot exceed the SCP boundary, and MFA or bucket contents do not change that.",
   "d": 1
  },
  {
   "id": 28,
   "t": "organizations-scps",
   "x": "An architect is validating team assumptions about how service control policies behave in AWS Organizations. Which statements about SCPs are accurate? Choose TWO.",
   "o": [
    "SCPs can add permissions that IAM policies do not allow",
    "SCPs remove the need for IAM policies in member accounts",
    "SCPs set the maximum available permissions for member accounts",
    "SCPs do not grant any permissions on their own",
    "SCPs restrict the organization management account root user"
   ],
   "a": 2,
   "e": "SCPs define the permission ceiling but never grant access by themselves; IAM policies still grant the actual permissions. SCPs do not affect the management account and cannot add permissions beyond IAM.",
   "d": 1,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 29,
   "t": "organizations-scps",
   "x": "A finance team wants one consolidated bill and volume pricing discounts across dozens of AWS accounts. Which AWS Organizations feature provides this?",
   "o": [
    "Consolidated billing across all member accounts",
    "Cross-account IAM roles used only for reading invoices",
    "Per-account Savings Plans that cannot be shared between accounts",
    "A separate credit card attached to each individual account"
   ],
   "a": 0,
   "e": "Consolidated billing rolls member account usage into one bill and aggregates usage for volume discounts and shared commitments. Separate cards or unshared plans miss the aggregation benefit.",
   "d": 1
  },
  {
   "id": 30,
   "t": "organizations-scps",
   "x": "An organization must prevent member accounts from disabling AWS CloudTrail, even when the action is attempted by an account administrator. Which control is MOST appropriate?",
   "o": [
    "An SCP that denies cloudtrail:StopLogging and cloudtrail:DeleteTrail",
    "A bucket policy on the S3 bucket that stores the CloudTrail logs",
    "A GuardDuty detector enabled inside each member account",
    "An IAM permissions boundary applied to the central audit team"
   ],
   "a": 0,
   "e": "An SCP denying the CloudTrail stop and delete actions blocks even account admins from turning off logging. Permissions boundaries, bucket policies, and GuardDuty do not stop an admin from disabling a trail.",
   "d": 1
  },
  {
   "id": 31,
   "t": "organizations-scps",
   "x": "A company is onboarding many new AWS accounts and wants automated provisioning with preconfigured guardrails and a landing zone. Which AWS service should the architect recommend?",
   "o": [
    "AWS Trusted Advisor",
    "AWS Config used on its own",
    "AWS Control Tower",
    "AWS Systems Manager Session Manager"
   ],
   "a": 2,
   "e": "Control Tower sets up a multi-account landing zone with account factory and guardrails built on Organizations. Config, Session Manager, and Trusted Advisor address monitoring or access, not account provisioning.",
   "d": 1
  },
  {
   "id": 32,
   "t": "iam-identity-center",
   "x": "A company with a corporate identity provider wants employees to sign in once and reach multiple AWS accounts with role-based permissions. Which service provides this centralized single sign-on?",
   "o": [
    "Amazon Cognito user pools for the workforce",
    "AWS IAM Identity Center",
    "Separate IAM users created in every account",
    "AWS Directory Service Simple AD by itself"
   ],
   "a": 1,
   "e": "IAM Identity Center provides workforce single sign-on across many AWS accounts and applications with centrally managed permission sets. Per-account IAM users and Cognito are not built for workforce SSO.",
   "d": 1
  },
  {
   "id": 33,
   "t": "iam-identity-center",
   "x": "An administrator using IAM Identity Center wants to define a reusable set of permissions that can be assigned to groups across many accounts. Which Identity Center construct is used?",
   "o": [
    "A resource-based policy configured for every account",
    "A Route 53 hosted zone dedicated to each group",
    "An IAM user group created inside each target account",
    "A permission set mapped to accounts and groups"
   ],
   "a": 3,
   "e": "A permission set is a reusable collection of policies that Identity Center provisions into accounts as roles for assigned groups. Per-account IAM groups or resource policies do not offer this central assignment.",
   "d": 1
  },
  {
   "id": 34,
   "t": "iam-identity-center",
   "x": "An enterprise is replacing individual IAM users with IAM Identity Center. Which of the following are valid identity sources for Identity Center? Choose TWO.",
   "o": [
    "A DynamoDB table holding usernames and roles",
    "The built-in Identity Center directory",
    "An external SAML 2.0 identity provider",
    "An EC2 instance running a custom login script",
    "An Amazon S3 bucket that lists user records"
   ],
   "a": 1,
   "e": "Identity Center can use its own built-in directory or connect to an external identity provider such as one supporting SAML 2.0, as well as Active Directory. S3, DynamoDB, and EC2 are not identity sources.",
   "d": 1,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 35,
   "t": "iam-identity-center",
   "x": "A company wants federated users to automatically receive AWS credentials when they access accounts through IAM Identity Center. How are these credentials best characterized?",
   "o": [
    "They are the AWS account root credentials shared through a secure channel",
    "They are static keys that are rotated once per year by an administrator",
    "They are short-lived and issued per session rather than long-term keys",
    "They are permanent access keys saved in each user's local profile"
   ],
   "a": 2,
   "e": "Identity Center hands out temporary, session-based credentials each time a user selects an account and role. There are no long-term keys to store or rotate for these federated sessions.",
   "d": 1
  },
  {
   "id": 36,
   "t": "iam-identity-center",
   "x": "An organization already uses Microsoft Entra ID for its workforce and wants those identities to govern AWS access centrally. What is the recommended integration?",
   "o": [
    "Connect Entra ID as the identity source for IAM Identity Center",
    "Use Amazon Cognito identity pools to handle workforce login",
    "Store Entra ID passwords inside AWS Secrets Manager for lookup",
    "Recreate every employee as an IAM user in each AWS account"
   ],
   "a": 0,
   "e": "Identity Center integrates with external providers like Entra ID so existing workforce identities and groups govern AWS access. Recreating IAM users or storing passwords is unmanageable and insecure.",
   "d": 1
  },
  {
   "id": 37,
   "t": "root-account-mfa",
   "x": "Following AWS security best practices, how should the AWS account root user be handled after initial account setup is complete?",
   "o": [
    "Create access keys for it so deployment pipelines can automate changes",
    "Enable MFA on it, secure the credentials, and avoid using it for daily tasks",
    "Use it for all administrative tasks to keep access simple for the team",
    "Share its password with the operations team for on-call convenience"
   ],
   "a": 1,
   "e": "Best practice is to protect the root user with MFA, lock away its credentials, and perform routine work with IAM identities. Creating root access keys or sharing the password greatly increases risk.",
   "d": 1
  },
  {
   "id": 38,
   "t": "root-account-mfa",
   "x": "A team is documenting which operations require the AWS account root user. Which task can ONLY be performed by the root user and not by an IAM administrator?",
   "o": [
    "Changing the account support plan and closing the AWS account",
    "Launching EC2 instances in a newly enabled AWS Region",
    "Creating an S3 bucket that has object versioning enabled",
    "Attaching a managed IAM policy to a developer user group"
   ],
   "a": 0,
   "e": "Certain actions such as changing the support plan and closing the account are reserved for the root user. Launching instances, creating buckets, and attaching policies can be delegated to IAM administrators.",
   "d": 1
  },
  {
   "id": 39,
   "t": "root-account-mfa",
   "x": "A security lead is hardening the root user of a newly created AWS account. Which measures follow AWS recommendations? Choose TWO.",
   "o": [
    "Delete any existing access keys belonging to the root user",
    "Publish the root user email address in public documentation",
    "Enable a hardware or virtual MFA device on the root user",
    "Use the root user for routine daily console sign-ins",
    "Embed root access keys in the CI pipeline for automation"
   ],
   "a": 0,
   "e": "Adding MFA and removing root access keys are core hardening steps for a new account. Embedding root keys, using root daily, or exposing its email all increase the risk of compromise.",
   "d": 1,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 40,
   "t": "root-account-mfa",
   "x": "A company wants to be notified whenever the AWS account root user signs in to the console. Which two components combine to detect and alert on this activity? Choose TWO.",
   "o": [
    "A Route 53 health check aimed at the sign-in endpoint",
    "A CloudWatch alarm triggered by a root sign-in metric filter",
    "An S3 lifecycle policy applied to the log storage bucket",
    "A NAT gateway with VPC flow logs on the root subnet",
    "A CloudTrail trail that records console sign-in events"
   ],
   "a": 1,
   "e": "CloudTrail captures console sign-in events, and a CloudWatch metric filter with an alarm raises a notification on a root login. Lifecycle rules, NAT gateways, and health checks do not detect authentication.",
   "d": 1,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 41,
   "t": "cognito-app-identity",
   "x": "A mobile app needs to let users sign up, sign in, and manage profiles, with support for social identity providers. Which AWS service provides this user directory and authentication?",
   "o": [
    "AWS IAM Identity Center",
    "AWS Directory Service",
    "Amazon Cognito user pools",
    "Amazon RDS with a custom users table"
   ],
   "a": 2,
   "e": "Cognito user pools are a managed user directory that handles sign-up, sign-in, and social federation for app end users. Identity Center targets workforce SSO, and RDS or Directory Service are not app auth services.",
   "d": 1
  },
  {
   "id": 42,
   "t": "cognito-app-identity",
   "x": "After users authenticate, a mobile app must give them temporary, scoped AWS credentials to upload files directly to S3. Which Cognito capability provides these AWS credentials?",
   "o": [
    "Cognito identity pools exchanging tokens for temporary credentials",
    "A hardcoded IAM access key compiled into the mobile binary",
    "An EC2 instance role attached to every user's mobile device",
    "Cognito user pools acting directly as an S3 bucket policy"
   ],
   "a": 0,
   "e": "Cognito identity pools exchange a validated identity token for temporary AWS credentials mapped to an IAM role. User pools authenticate but do not themselves issue AWS credentials, and hardcoded keys are unsafe.",
   "d": 1
  },
  {
   "id": 43,
   "t": "cognito-app-identity",
   "x": "A web application wants to authenticate users with their existing Google and Facebook logins without managing any passwords. Which Cognito capability supports this?",
   "o": [
    "A site-to-site VPN connection to each social provider",
    "A DynamoDB table that stores plaintext social passwords",
    "User pool federation with external social identity providers",
    "IAM users created individually for each social account"
   ],
   "a": 2,
   "e": "Cognito user pools can federate with social identity providers so users sign in with Google or Facebook and the app never handles passwords. IAM users and password tables are not the right tools for app end users.",
   "d": 1
  },
  {
   "id": 44,
   "t": "cognito-app-identity",
   "x": "An architect is designing authentication for a public web app using Amazon Cognito. Which statements about Cognito are accurate? Choose TWO.",
   "o": [
    "User pools store a long-term IAM access key for each user",
    "Identity pools grant temporary AWS credentials to users",
    "Identity pools remove the need for any authentication step",
    "User pools provide sign-up and sign-in and issue JWT tokens",
    "User pools require a running EC2 instance to issue tokens"
   ],
   "a": 1,
   "e": "User pools handle authentication and return JWT tokens, while identity pools trade those tokens for temporary AWS credentials. They are fully managed and do not store IAM keys or require EC2.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 45,
   "t": "cognito-app-identity",
   "x": "A company needs its API Gateway REST API to authorize requests using tokens issued by its Cognito user pool. Which integration achieves this MOST directly?",
   "o": [
    "A Route 53 alias record that points at the Cognito user pool",
    "An S3 bucket policy that validates each incoming API token",
    "A NAT gateway that routes bearer tokens to the backend service",
    "A Cognito user pool authorizer configured on the API Gateway method"
   ],
   "a": 3,
   "e": "API Gateway supports a native Cognito user pool authorizer that validates the pool's JWT tokens before the request reaches the backend. NAT gateways, bucket policies, and DNS records do not authorize tokens.",
   "d": 1
  },
  {
   "id": 46,
   "t": "cognito-app-identity",
   "x": "A gaming app expects millions of players and needs a managed identity store that scales automatically for authentication. Why is Amazon Cognito a better fit than self-managed IAM users?",
   "o": [
    "IAM users cannot be created through an API, so player sign-ups could not be automated",
    "IAM users are meant for AWS account access and hit a hard limit, unlike Cognito for end users",
    "Cognito issues each player permanent credentials, so the app never handles token expiry or refresh",
    "IAM users require a hardware MFA device for each principal, which is impractical at player scale"
   ],
   "a": 1,
   "e": "IAM users represent principals in the AWS account itself and are subject to a per-account quota, while Cognito user pools are built to hold millions of application identities. IAM users can in fact be created programmatically and do not require hardware MFA, and Cognito issues short-lived tokens that must be refreshed rather than permanent credentials.",
   "d": 1
  },
  {
   "id": 47,
   "t": "vpc-security-groups-nacls",
   "x": "A web server in a public subnet accepts inbound HTTPS from the internet. After allowing inbound port 443 in the security group, an administrator asks whether a matching outbound rule is required for the replies. What is the correct behavior?",
   "o": [
    "Security groups are stateful, so return traffic for the allowed connection is permitted automatically",
    "An outbound rule covering the ephemeral port range must be added or replies are dropped",
    "Return traffic flows only if a network ACL also permits the ephemeral port range",
    "The implicit outbound deny blocks responses until a matching rule is created"
   ],
   "a": 0,
   "e": "Security groups are stateful, so a reply to an allowed inbound request is permitted automatically regardless of outbound rules. NACLs are stateless and would need ephemeral-port rules, but that does not apply to security groups.",
   "d": 1
  },
  {
   "id": 48,
   "t": "vpc-security-groups-nacls",
   "x": "A company must block one specific malicious IP address from reaching every instance across an entire subnet while leaving all other traffic unaffected. Which control meets this requirement MOST directly?",
   "o": [
    "Add a deny rule for that IP in the subnet's network ACL",
    "Create an IAM policy that denies the IP address",
    "Add the IP to a Route 53 Resolver blocklist",
    "Add a deny rule for that IP in each instance's security group"
   ],
   "a": 0,
   "e": "Network ACLs support explicit deny rules and apply to the whole subnet, making them ideal for blocking a single IP. Security groups only permit allow rules, so they cannot deny an address.",
   "d": 1
  },
  {
   "id": 49,
   "t": "vpc-security-groups-nacls",
   "x": "An architect is documenting how security groups differ from network ACLs for a VPC design review. Which two statements are accurate? Choose TWO.",
   "o": [
    "Security groups apply at the subnet boundary rather than the ENI",
    "Security groups can contain explicit deny rules for blocked hosts",
    "Network ACLs are stateless and evaluate rules in number order",
    "Security groups are stateful and automatically allow return traffic",
    "Network ACLs are attached directly to individual EC2 instances"
   ],
   "a": 2,
   "e": "Security groups are stateful and attach to ENIs, allowing return traffic automatically, while NACLs are stateless, attach to subnets, and evaluate numbered rules in order. Security groups cannot deny, and NACLs are not attached to instances.",
   "d": 1,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 50,
   "t": "vpc-security-groups-nacls",
   "x": "An application tier must accept traffic only from the web tier, and both tiers scale in and out frequently with changing private IPs. How should the application tier's inbound rule be configured MOST maintainably?",
   "o": [
    "List each web instance's private IP in the inbound rule",
    "Reference the web tier subnet CIDR as the inbound source",
    "Reference the web tier's security group as the inbound source",
    "Allow the entire VPC CIDR range on the application port"
   ],
   "a": 2,
   "e": "Referencing the source security group lets membership change dynamically as instances scale, with no IP list to maintain. Hardcoding IPs or broad CIDRs is brittle and wider than required.",
   "d": 1
  },
  {
   "id": 51,
   "t": "vpc-security-groups-nacls",
   "x": "After replacing the default network ACL with a custom one that allows inbound HTTP on port 80, users report that responses from the web servers never arrive. What must be added to restore connectivity?",
   "o": [
    "An inbound rule permitting the ephemeral port range from clients",
    "A rule allowing all ICMP traffic in both directions",
    "An outbound rule permitting the ephemeral port range back to clients",
    "A stateful tracking rule that mirrors the inbound entry"
   ],
   "a": 2,
   "e": "NACLs are stateless, so the outbound response on ephemeral ports must be explicitly allowed. There is no stateful tracking in a NACL, unlike a security group.",
   "d": 1
  },
  {
   "id": 52,
   "t": "vpc-security-groups-nacls",
   "x": "A newly created security group with no rules added is attached to an EC2 instance. Which statement describes the instance's default connectivity?",
   "o": [
    "All inbound and all outbound traffic is allowed by default",
    "All inbound is allowed while all outbound is denied by default",
    "All inbound traffic is denied and all outbound traffic is allowed",
    "All inbound and all outbound traffic is denied by default"
   ],
   "a": 2,
   "e": "A new security group has no inbound rules, so inbound is denied, while the default outbound rule allows all egress until it is changed.",
   "d": 1
  },
  {
   "id": 53,
   "t": "vpc-subnet-segmentation",
   "x": "EC2 instances in a private subnet must download OS patches from the internet but must never be reachable from the internet. Which solution meets this requirement with the LEAST operational overhead?",
   "o": [
    "Attach an internet gateway route to the private subnet",
    "Route the private subnet's outbound traffic through a NAT gateway",
    "Deploy and self-manage a NAT instance in a public subnet for egress",
    "Assign Elastic IPs to the private instances for patching"
   ],
   "a": 1,
   "e": "A managed NAT gateway allows outbound-only internet access with no servers to manage, and instances stay unreachable inbound. A NAT instance works but adds patching and high-availability overhead.",
   "d": 1
  },
  {
   "id": 54,
   "t": "vpc-subnet-segmentation",
   "x": "In a standard VPC design, what distinguishes a public subnet from a private subnet?",
   "o": [
    "A public subnet automatically encrypts traffic to the internet",
    "A public subnet has a route to an internet gateway in its route table",
    "A public subnet is defined by attaching a NAT gateway to it",
    "A public subnet uses a larger CIDR block than a private subnet"
   ],
   "a": 1,
   "e": "The defining factor is a route to an internet gateway in the associated route table. CIDR size and NAT placement do not determine whether a subnet is public or private.",
   "d": 1
  },
  {
   "id": 55,
   "t": "vpc-subnet-segmentation",
   "x": "A three-tier application should isolate the database tier from direct internet exposure while allowing the web tier to serve users. Which two design choices support this segmentation? Choose TWO.",
   "o": [
    "Route database outbound traffic directly through an internet gateway",
    "Assign public IP addresses to the database instances for management",
    "Place the web servers in public subnets behind a load balancer",
    "Place database instances in private subnets with no IGW route",
    "Place the database instances in public subnets with restrictive NACLs"
   ],
   "a": 2,
   "e": "Databases belong in private subnets with no internet gateway route, while web servers sit in public subnets fronted by a load balancer. Public subnets or public IPs on the database tier defeat the isolation.",
   "d": 1,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 56,
   "t": "vpc-subnet-segmentation",
   "x": "Instances in a private subnet must access Amazon S3 without their traffic traversing the public internet or a NAT gateway. Which solution meets this requirement MOST cost-effectively?",
   "o": [
    "Deploy an interface VPC endpoint with an hourly charge for S3",
    "Peer the VPC with an AWS-managed S3 VPC",
    "Create a gateway VPC endpoint for S3 and add it to the route table",
    "Route S3 traffic through a NAT gateway in a public subnet"
   ],
   "a": 2,
   "e": "S3 gateway endpoints are free and keep traffic on the AWS network via route-table entries, avoiding NAT gateway data charges. Interface endpoints for S3 exist but incur hourly and processing costs.",
   "d": 1
  },
  {
   "id": 57,
   "t": "vpc-subnet-segmentation",
   "x": "An architect wants a single subnet to span two Availability Zones for high availability. Why is this design not possible?",
   "o": [
    "A subnet is confined to exactly one Availability Zone",
    "A subnet can span zones only within a Local Zone",
    "Subnets can span zones only when IPv6 is enabled",
    "Subnets span zones only if placed in a shared VPC"
   ],
   "a": 0,
   "e": "Each subnet resides in exactly one Availability Zone, so spanning zones requires multiple subnets. High availability comes from placing subnets in different zones, not from stretching one subnet.",
   "d": 1
  },
  {
   "id": 58,
   "t": "vpc-subnet-segmentation",
   "x": "Two VPCs in the same Region must exchange traffic privately using their private IP addresses without any internet path. Which two facts about VPC peering apply? Choose TWO.",
   "o": [
    "Peered VPCs route to each other using private IP addresses",
    "VPC peering supports transitive routing through an intermediate VPC",
    "Peering encrypts all cross-VPC traffic with a customer-managed key",
    "Peered VPCs must reside in the same Availability Zone",
    "The two VPCs must have non-overlapping CIDR blocks"
   ],
   "a": 0,
   "e": "VPC peering enables private IP routing between VPCs but requires non-overlapping CIDRs and is not transitive. It does not add encryption keys or require a shared Availability Zone.",
   "d": 1,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 59,
   "t": "secrets-manager",
   "x": "An application stores database credentials in plaintext configuration files, and the security team now requires automatic credential rotation every 30 days. Which service meets this with the LEAST custom code?",
   "o": [
    "Store the credentials in an encrypted S3 object with a lifecycle rule",
    "Store the credentials in an environment variable encrypted with KMS",
    "Store the credentials in AWS Secrets Manager with automatic rotation enabled",
    "Store the credentials in Systems Manager Parameter Store standard tier"
   ],
   "a": 2,
   "e": "Secrets Manager natively rotates RDS and other supported credentials on a schedule using managed Lambda functions. Parameter Store standard tier has no built-in rotation, and the other options require custom logic.",
   "d": 1
  },
  {
   "id": 60,
   "t": "secrets-manager",
   "x": "A team needs to store a small, rarely changing API token, wants to encrypt the value, and wants to avoid per-secret monthly charges. Which option is MOST cost-effective?",
   "o": [
    "Store it in AWS Secrets Manager with rotation disabled",
    "Store it in AWS Secrets Manager standard configuration",
    "Store it as a SecureString in Systems Manager Parameter Store",
    "Store it in a dedicated AWS KMS custom key store"
   ],
   "a": 2,
   "e": "Parameter Store SecureString parameters are encrypted with KMS at no per-secret monthly charge, unlike Secrets Manager which bills per secret. Rotation is not needed here, so Parameter Store is cheaper.",
   "d": 1
  },
  {
   "id": 61,
   "t": "secrets-manager",
   "x": "An organization is moving hardcoded credentials into AWS Secrets Manager. Which two capabilities does the service provide natively? Choose TWO.",
   "o": [
    "Fine-grained access control through IAM resource policies",
    "Free unlimited secret storage with no per-secret cost",
    "Automatic conversion of secrets into IAM roles",
    "Built-in DDoS protection for the applications reading secrets",
    "Scheduled automatic rotation for supported database engines"
   ],
   "a": 0,
   "e": "Secrets Manager offers managed rotation for supported databases and IAM-based access control through resource policies. It does not convert secrets to roles, is not free per secret, and provides no DDoS protection.",
   "d": 1,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 62,
   "t": "secrets-manager",
   "x": "A Lambda function must retrieve a secret at runtime without embedding any credentials in the deployment package. What is the recommended approach?",
   "o": [
    "Embed an IAM access key in an environment variable for the function",
    "Store the secret in the function's code and encrypt the package",
    "Pass the secret as a plaintext invocation parameter each call",
    "Grant the function's execution role permission to read the secret"
   ],
   "a": 3,
   "e": "The Lambda execution role should be granted secretsmanager:GetSecretValue so the function reads the secret at runtime with no embedded credentials. Long-lived keys or in-code secrets violate best practice.",
   "d": 1
  },
  {
   "id": 63,
   "t": "secrets-manager",
   "x": "How does AWS Secrets Manager perform automatic rotation of a supported Amazon RDS database secret?",
   "o": [
    "It runs a managed Lambda function that updates the secret and database",
    "It restarts the RDS instance to force a new password each interval",
    "It relies on the RDS engine to push new credentials to the secret",
    "It requires an EC2 worker that polls the secret hourly"
   ],
   "a": 0,
   "e": "Rotation runs a Lambda function that generates a new credential, updates the database, and stores the new version. RDS does not push credentials, and no self-managed worker is needed.",
   "d": 1
  },
  {
   "id": 64,
   "t": "secrets-manager",
   "x": "A multi-Region application needs the same secret available in a second Region for disaster recovery with minimal management. Which Secrets Manager feature supports this?",
   "o": [
    "Multi-Region replication of the secret to the DR Region",
    "Relying on one secret to be served in all Regions",
    "A gateway VPC endpoint that shares the secret globally",
    "Attaching the secret to a global Auto Scaling group"
   ],
   "a": 0,
   "e": "Secrets Manager can replicate a secret to additional Regions for disaster recovery and keep replicas in sync. Secrets are Regional resources, so a single secret is not automatically served everywhere.",
   "d": 1
  },
  {
   "id": 65,
   "t": "kms-encryption-at-rest",
   "x": "A compliance mandate requires the organization to control its own key rotation policy and to audit every key use for an S3 dataset. Which KMS option meets this requirement?",
   "o": [
    "Encrypt the data with an AWS managed KMS key",
    "Encrypt the data with an AWS owned key",
    "Encrypt the data with SSE-S3 default encryption",
    "Encrypt the data with a customer managed KMS key"
   ],
   "a": 3,
   "e": "Customer managed keys let you define rotation, key policies, and grants while logging every use in CloudTrail. AWS managed and owned keys do not expose the same configurable control.",
   "d": 1
  },
  {
   "id": 66,
   "t": "kms-encryption-at-rest",
   "x": "In AWS KMS envelope encryption, how is a large data object protected efficiently?",
   "o": [
    "The KMS key directly encrypts the entire object over the network",
    "A data key encrypts the object, and KMS encrypts that data key",
    "The object is hashed and the hash is stored inside KMS",
    "KMS stores a full copy of the object alongside the key"
   ],
   "a": 1,
   "e": "KMS generates a data key that encrypts the object locally, and the KMS key encrypts only the small data key. KMS never encrypts large payloads directly or stores the object.",
   "d": 1
  },
  {
   "id": 67,
   "t": "kms-encryption-at-rest",
   "x": "A security architect is evaluating AWS KMS for a new workload. Which two statements about KMS keys are correct? Choose TWO.",
   "o": [
    "Key usage is recorded in AWS CloudTrail for auditing",
    "AWS managed keys allow fully custom key policies",
    "KMS exports the raw key material for on-premises storage",
    "Customer managed keys support automatic annual key rotation",
    "KMS keys can encrypt objects of unlimited size directly"
   ],
   "a": 0,
   "e": "Customer managed keys support automatic yearly rotation and all key usage is logged in CloudTrail. KMS has a small direct-encrypt limit, AWS managed keys have fixed policies, and standard key material cannot be exported.",
   "d": 1,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 68,
   "t": "kms-encryption-at-rest",
   "x": "An architect must ensure all data on EBS volumes attached to a fleet of EC2 instances is encrypted at rest with minimal configuration. What is the simplest approach?",
   "o": [
    "Snapshot each volume to an encrypted S3 bucket nightly",
    "Manually run disk encryption software on each instance",
    "Enable EBS encryption by default for the Region",
    "Route EBS traffic through a KMS proxy appliance"
   ],
   "a": 2,
   "e": "Enabling EBS encryption by default automatically encrypts new volumes with KMS at no operational effort. Host-based tooling or snapshot workarounds add unnecessary complexity.",
   "d": 1
  },
  {
   "id": 69,
   "t": "kms-encryption-at-rest",
   "x": "An S3 bucket encrypted with SSE-KMS is generating high KMS request costs from millions of small-object operations. Which feature reduces these KMS API calls MOST effectively?",
   "o": [
    "Move all objects to S3 Glacier Deep Archive",
    "Enable S3 Bucket Keys for the bucket",
    "Switch every object to a unique customer managed key",
    "Disable encryption on frequently accessed objects"
   ],
   "a": 1,
   "e": "S3 Bucket Keys generate a bucket-level data key that sharply reduces KMS requests and cost. Unique keys per object would increase calls, and disabling encryption is unacceptable.",
   "d": 1
  },
  {
   "id": 70,
   "t": "kms-encryption-at-rest",
   "x": "A team plans to use a KMS customer managed key to encrypt an Amazon RDS database and its automated backups. Which two facts should they account for? Choose TWO.",
   "o": [
    "Encryption can be removed from an existing encrypted snapshot in place",
    "The KMS key is Regional and must exist in the database's Region",
    "A single KMS key automatically works across all AWS Regions",
    "Snapshots inherit encryption from the key used on the source volume",
    "KMS keys replicate to every Region without any configuration"
   ],
   "a": 1,
   "e": "KMS customer managed keys are Regional, and encrypted snapshots inherit the source encryption. You cannot decrypt an encrypted snapshot in place, and keys do not span Regions automatically.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 71,
   "t": "acm-tls-in-transit",
   "x": "A company wants to serve its public website over HTTPS on an Application Load Balancer without paying for certificates or renewing them manually. Which solution meets this requirement?",
   "o": [
    "Purchase a certificate from a third party and upload it yearly",
    "Enable TLS by opening port 443 on the ALB security group",
    "Generate a self-signed certificate and install it on the ALB",
    "Provision a public ACM certificate and attach it to the ALB"
   ],
   "a": 3,
   "e": "ACM issues free public certificates and renews them automatically when used with an ALB. Third-party or self-signed certificates require manual renewal or are untrusted by browsers.",
   "d": 1
  },
  {
   "id": 72,
   "t": "acm-tls-in-transit",
   "x": "An architect wants to place an ACM public certificate directly onto a standalone EC2 web server's local TLS stack. Why is this not supported?",
   "o": [
    "EC2 instances are unable to terminate TLS connections at all",
    "ACM certificates expire within 24 hours on EC2",
    "ACM public certificates cannot be exported for use elsewhere",
    "ACM certificates only work with DynamoDB tables"
   ],
   "a": 2,
   "e": "The private keys of ACM public certificates cannot be exported, so they are used with integrated services like ALB, CloudFront, and API Gateway. To terminate TLS on EC2 you would import your own certificate instead.",
   "d": 1
  },
  {
   "id": 73,
   "t": "acm-tls-in-transit",
   "x": "A team wants to terminate TLS using ACM-managed public certificates. Which two services integrate directly with them? Choose TWO.",
   "o": [
    "Amazon SQS queues",
    "Amazon EBS volumes",
    "Amazon EC2 instance store volumes",
    "Amazon CloudFront distributions",
    "Application Load Balancers"
   ],
   "a": 3,
   "e": "ACM public certificates integrate with CloudFront, Application Load Balancers, API Gateway, and similar endpoints that terminate TLS. EBS, SQS, and instance stores do not handle HTTPS traffic.",
   "d": 1,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 74,
   "t": "acm-tls-in-transit",
   "x": "To ensure an ACM certificate renews automatically without manual steps, which validation method should be chosen when requesting it?",
   "o": [
    "Manual validation by uploading a token to the web server",
    "Phone validation confirmed with the registrar",
    "DNS validation using a CNAME record in Route 53",
    "Email validation sent to the domain administrator"
   ],
   "a": 2,
   "e": "DNS validation lets ACM renew certificates automatically as long as the CNAME record stays in place. Email validation can require manual action at renewal time.",
   "d": 1
  },
  {
   "id": 75,
   "t": "acm-tls-in-transit",
   "x": "A regulated workload requires traffic to stay encrypted from the client all the way to the backend EC2 targets, not only to the load balancer. How should the Application Load Balancer be configured?",
   "o": [
    "Enable the strictest TLS security policy on the HTTPS listener and turn on access logging",
    "Use HTTPS listeners and register targets over HTTPS to the instances",
    "Replace the ALB with a Network Load Balancer configured for TLS passthrough",
    "Terminate TLS at the ALB with an ACM certificate and forward to the target group on port 80"
   ],
   "a": 1,
   "e": "Encrypting both hops means an HTTPS listener for clients plus target registration over HTTPS to the instances. A strict TLS security policy on the listener secures only the client-to-ALB hop, forwarding to the target group on port 80 leaves the final hop in the clear, and swapping in an NLB does not answer how the ALB itself should be configured.",
   "d": 1
  },
  {
   "id": 76,
   "t": "waf-shield-ddos",
   "x": "A public web application on an Application Load Balancer is receiving SQL injection and cross-site scripting attempts. Which service should be deployed to filter these malicious HTTP requests?",
   "o": [
    "Amazon GuardDuty threat detection",
    "AWS WAF with managed rule groups",
    "AWS Shield Standard on the load balancer",
    "AWS Network Firewall in every subnet"
   ],
   "a": 1,
   "e": "AWS WAF inspects HTTP and HTTPS requests and blocks SQL injection and XSS using managed or custom rules at the ALB, CloudFront, or API Gateway. Shield addresses DDoS, and GuardDuty only detects.",
   "d": 1
  },
  {
   "id": 77,
   "t": "waf-shield-ddos",
   "x": "An enterprise requires enhanced DDoS mitigation with 24/7 access to a specialist response team and financial protection against scaling charges incurred during an attack. Which service meets this requirement?",
   "o": [
    "Amazon CloudFront",
    "AWS WAF with rate-based rules",
    "AWS Shield Standard",
    "AWS Shield Advanced"
   ],
   "a": 3,
   "e": "Shield Advanced adds enhanced DDoS mitigation, 24/7 access to the Shield Response Team, and cost protection for scaling caused by an attack. Shield Standard is the always-on baseline included with every account but offers neither response-team access nor billing protection, and WAF rate-based rules only throttle layer 7 request floods.",
   "d": 1
  },
  {
   "id": 78,
   "t": "waf-shield-ddos",
   "x": "A site is being overwhelmed by a high volume of requests from a small set of IP addresses hitting a login endpoint. Which AWS WAF feature MOST directly limits this abuse?",
   "o": [
    "A rate-based rule that blocks IPs over a threshold",
    "A geo-match rule that blocks an entire continent",
    "A size-constraint rule on the response body",
    "A managed rule group for known bad inputs"
   ],
   "a": 0,
   "e": "Rate-based rules count requests per IP over a time window and block sources that exceed the threshold, ideal for HTTP floods. Geo or size rules do not target request rate.",
   "d": 1
  },
  {
   "id": 79,
   "t": "waf-shield-ddos",
   "x": "An architect compares the AWS Shield tiers for a customer-facing application. Which two statements are correct? Choose TWO.",
   "o": [
    "Shield Standard is enabled automatically at no additional cost",
    "Shield Advanced replaces the need for any security groups",
    "Shield Advanced provides cost protection for attack-related scaling",
    "Shield Standard inspects application-layer HTTP request bodies",
    "Shield Standard includes 24/7 access to the Shield Response Team"
   ],
   "a": 0,
   "e": "Shield Standard is free and automatic at the network and transport layers, while Shield Advanced adds cost protection and Response Team access. Standard does no layer-7 inspection, and Shield does not replace security groups.",
   "d": 1,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 80,
   "t": "waf-shield-ddos",
   "x": "With which of the following can an AWS WAF web ACL be directly associated to inspect incoming requests?",
   "o": [
    "An Amazon RDS database instance",
    "An EC2 instance store volume",
    "An Amazon CloudFront distribution",
    "An Amazon EBS volume"
   ],
   "a": 2,
   "e": "WAF web ACLs attach to CloudFront, Application Load Balancers, API Gateway, and AppSync among a few others. EBS, RDS, and instance stores do not process HTTP requests through WAF.",
   "d": 1
  },
  {
   "id": 81,
   "t": "guardduty-macie",
   "x": "A security team wants continuous threat detection that analyzes VPC Flow Logs, DNS logs, and CloudTrail events without deploying agents on instances. Which service meets this requirement?",
   "o": [
    "AWS Trusted Advisor",
    "Amazon GuardDuty",
    "Amazon Macie",
    "AWS Config"
   ],
   "a": 1,
   "e": "GuardDuty is an agentless threat-detection service that continuously analyzes CloudTrail, VPC Flow Logs, and DNS logs for malicious activity. Macie classifies data, and Config tracks configuration.",
   "d": 1
  },
  {
   "id": 82,
   "t": "guardduty-macie",
   "x": "A company must automatically discover and classify sensitive personal information such as credit card numbers stored across many S3 buckets. Which service is purpose-built for this?",
   "o": [
    "Amazon Macie",
    "Amazon GuardDuty",
    "AWS Security Hub",
    "Amazon Inspector"
   ],
   "a": 0,
   "e": "Macie uses machine learning to discover and classify sensitive data like PII and financial data in S3. GuardDuty detects threats, and Inspector scans workloads for software vulnerabilities.",
   "d": 1
  },
  {
   "id": 83,
   "t": "guardduty-macie",
   "x": "An organization enables Amazon GuardDuty across its accounts. Which two outcomes can they expect? Choose TWO.",
   "o": [
    "Detection of EC2 instances contacting malicious hosts",
    "Automatic patching of vulnerable operating system packages",
    "Alerts on anomalous IAM credential usage patterns",
    "Encryption of all EBS volumes across the accounts",
    "Automatic classification of sensitive data inside S3 objects"
   ],
   "a": 0,
   "e": "GuardDuty detects threats such as instances contacting malicious hosts and unusual IAM behavior. Data classification is Macie's role, patching is not a GuardDuty function, and it does not encrypt volumes.",
   "d": 1,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 84,
   "t": "guardduty-macie",
   "x": "A team needs to scan EC2 instances and container images for software vulnerabilities and unintended network exposure. Which service is designed for this assessment?",
   "o": [
    "Amazon GuardDuty",
    "Amazon Inspector",
    "Amazon Macie",
    "AWS Certificate Manager"
   ],
   "a": 1,
   "e": "Amazon Inspector continuously scans EC2 and container images for known CVEs and network reachability issues. Macie classifies data and GuardDuty detects active threats, not vulnerabilities.",
   "d": 1
  },
  {
   "id": 85,
   "t": "guardduty-macie",
   "x": "An organization wants a single console that aggregates and prioritizes findings from GuardDuty, Inspector, and Macie against security standards. Which service provides this?",
   "o": [
    "AWS Trusted Advisor",
    "AWS Security Hub",
    "Amazon Detective",
    "AWS Config"
   ],
   "a": 1,
   "e": "Security Hub centralizes and prioritizes findings from GuardDuty, Inspector, Macie, and others while checking against standards such as CIS. Config tracks configuration and Detective aids investigation.",
   "d": 1
  },
  {
   "id": 86,
   "t": "guardduty-macie",
   "x": "A compliance officer evaluates Amazon Macie for protecting data stored in Amazon S3. Which two capabilities does Macie provide? Choose TWO.",
   "o": [
    "Continuous vulnerability scanning of EC2 operating systems",
    "Automated discovery of sensitive data such as PII in buckets",
    "Distributed denial-of-service mitigation for public endpoints",
    "Real-time blocking of SQL injection attacks against web applications",
    "Alerts when buckets become publicly accessible or unencrypted"
   ],
   "a": 1,
   "e": "Macie discovers sensitive data and flags risky S3 bucket posture such as public or unencrypted buckets. WAF handles SQL injection, Inspector handles vulnerabilities, and Shield handles DDoS.",
   "d": 1,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 87,
   "t": "s3-security-bucket-policies",
   "x": "After an audit found an S3 bucket accidentally exposed to the internet, the team wants to guarantee that no object in the account's buckets can be made public. Which setting enforces this MOST reliably?",
   "o": [
    "Enable S3 Block Public Access at the account level",
    "Disable static website hosting on the buckets",
    "Set every object's ACL to private individually",
    "Add a deny-all bucket policy to each bucket manually"
   ],
   "a": 0,
   "e": "Account-level S3 Block Public Access overrides ACLs and policies that would grant public access, covering current and future buckets. Manual policies or per-object ACLs are error-prone and easy to miss.",
   "d": 1
  },
  {
   "id": 88,
   "t": "s3-security-bucket-policies",
   "x": "A bucket must be reachable only through a specific VPC gateway endpoint and denied from anywhere else. Which mechanism enforces this restriction?",
   "o": [
    "A bucket policy with an aws:SourceVpce condition",
    "A security group attached to the S3 bucket",
    "A network ACL applied to the bucket's subnet",
    "An IAM user policy limiting the console login IP"
   ],
   "a": 0,
   "e": "A bucket policy using the aws:SourceVpce condition allows access only from the named endpoint and denies others. S3 buckets are not protected by security groups or NACLs.",
   "d": 1
  },
  {
   "id": 89,
   "t": "s3-security-bucket-policies",
   "x": "A security standard requires that all requests to an S3 bucket use HTTPS and that plaintext HTTP requests are rejected. Which bucket policy condition enforces this?",
   "o": [
    "Allow requests only from the us-east-1 Region",
    "Deny requests larger than a set object size",
    "Deny requests where aws:SecureTransport is false",
    "Allow requests only during business hours"
   ],
   "a": 2,
   "e": "A bucket policy that denies when aws:SecureTransport is false blocks all non-HTTPS requests, enforcing encryption in transit. Region or size conditions do not address transport security.",
   "d": 1
  },
  {
   "id": 90,
   "t": "s3-security-bucket-policies",
   "x": "An architect needs to grant a partner AWS account read access to specific objects in an S3 bucket. Which two mechanisms can accomplish cross-account access? Choose TWO.",
   "o": [
    "A KMS key grant that removes the need for any bucket policy at all",
    "A security group rule referencing the partner account",
    "A bucket policy granting the partner account read access",
    "A network ACL entry allowing the partner's IP range",
    "An IAM role in the bucket owner account that the partner assumes"
   ],
   "a": 2,
   "e": "Cross-account S3 access is granted through a bucket policy naming the partner principal or through an assumable IAM role. Security groups and NACLs do not apply to S3, and a KMS grant only affects key use.",
   "d": 1,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 91,
   "t": "s3-security-bucket-policies",
   "x": "A company wants to reject any object upload to an S3 bucket that does not request server-side encryption with a specific KMS key. Which approach enforces this at upload time?",
   "o": [
    "A bucket policy that denies PutObject lacking the encryption header",
    "An S3 lifecycle rule that encrypts objects after seven days",
    "An IAM permission boundary on the bucket resource",
    "A CloudWatch alarm that emails when unencrypted objects appear"
   ],
   "a": 0,
   "e": "A bucket policy can deny PutObject requests that lack the required server-side-encryption header or key, blocking noncompliant uploads. Lifecycle rules and alarms only act after the fact.",
   "d": 1
  },
  {
   "id": 92,
   "t": "s3-security-bucket-policies",
   "x": "A team is choosing a server-side encryption option for data at rest in Amazon S3. Which two options encrypt objects using keys managed within AWS services? Choose TWO.",
   "o": [
    "No encryption with reliance on bucket ACLs alone",
    "SSE-C where the customer supplies keys on every request",
    "Client-side encryption performed before upload",
    "SSE-S3 using keys that Amazon S3 manages",
    "SSE-KMS using keys managed in AWS KMS"
   ],
   "a": 3,
   "e": "SSE-S3 and SSE-KMS both use keys managed within AWS services. SSE-C requires customer-provided keys on each request, and client-side encryption happens outside AWS before upload.",
   "d": 1,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 93,
   "t": "sqs-decoupling",
   "x": "A web application submits image-processing jobs to a fleet of backend workers. During traffic spikes the workers fall behind and requests are dropped. Which service decouples the tiers so jobs are buffered until workers can process them?",
   "o": [
    "Amazon MQ",
    "Amazon Kinesis Data Firehose",
    "Amazon SQS",
    "AWS Batch"
   ],
   "a": 2,
   "e": "SQS is a fully managed queue that buffers jobs so producers and consumers scale independently; Firehose delivers streaming data to stores rather than acting as a work queue.",
   "d": 2
  },
  {
   "id": 94,
   "t": "sqs-decoupling",
   "x": "An order-processing pipeline requires that messages be handled in the exact sequence they are sent and that a message is never processed twice. Which queue type meets this requirement?",
   "o": [
    "A Kinesis Data Streams shard",
    "An SQS standard queue",
    "An SQS FIFO queue",
    "An SNS standard topic"
   ],
   "a": 2,
   "e": "FIFO queues guarantee strict ordering and exactly-once processing; standard queues provide only best-effort ordering with at-least-once delivery.",
   "d": 2
  },
  {
   "id": 95,
   "t": "sqs-decoupling",
   "x": "Consumers polling an SQS queue often receive empty responses, which drives up ReceiveMessage request charges. Which change reduces these empty responses most cost-effectively?",
   "o": [
    "Increase the queue visibility timeout",
    "Attach a dead-letter queue to it",
    "Enable long polling on the receive calls",
    "Convert the queue into a FIFO queue"
   ],
   "a": 2,
   "e": "Long polling waits for a message to arrive before returning, cutting empty receives and cost; visibility timeout only governs redelivery, not polling behavior.",
   "d": 2
  },
  {
   "id": 96,
   "t": "sqs-decoupling",
   "x": "A team must prevent messages that repeatedly fail processing from blocking an SQS queue while keeping the rest of the buffered workload flowing. Which two actions achieve this? Choose TWO.",
   "o": [
    "Convert the queue to a FIFO queue",
    "Configure a dead-letter queue with a maxReceiveCount",
    "Enable server-side encryption on the queue",
    "Reduce the message retention period to one hour",
    "Set a visibility timeout that matches the processing time"
   ],
   "a": 1,
   "e": "A dead-letter queue isolates poison messages after maxReceiveCount retries, and a correct visibility timeout stops other consumers from grabbing an in-flight message; encryption and retention do not address failed processing.",
   "d": 2,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 97,
   "t": "sqs-decoupling",
   "x": "An application reads SQS messages in groups, and each message can take up to ten minutes of work to complete. Which two configurations reduce duplicate processing and improve throughput? Choose TWO.",
   "o": [
    "Replace the queue with a standard SNS topic",
    "Disable long polling so consumers poll more often",
    "Retrieve up to ten messages per batch receive",
    "Set message retention to the minimum of sixty seconds",
    "Set the visibility timeout longer than the maximum processing time"
   ],
   "a": 2,
   "e": "A visibility timeout longer than processing time hides a message until work finishes, and batch receive amortizes request cost; short retention or disabling long polling would hurt reliability and cost.",
   "d": 2,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 98,
   "t": "sns-pub-sub",
   "x": "A single event must be delivered at the same time to three separate SQS queues owned by different microservices. Which architecture accomplishes this with the least custom code?",
   "o": [
    "Connect two queues with EventBridge Pipes",
    "Have each service poll one shared source queue",
    "Publish to an SNS topic with the three queues subscribed",
    "Write a Lambda that copies every message to three queues"
   ],
   "a": 2,
   "e": "SNS fan-out pushes each published message to all subscribed SQS queues automatically; polling one queue from three consumers would consume messages, not duplicate them.",
   "d": 2
  },
  {
   "id": 99,
   "t": "sns-pub-sub",
   "x": "A notification system must send order confirmations to customers by both SMS text and email without the company operating any mail or messaging servers. Which service delivers these natively?",
   "o": [
    "Amazon Connect",
    "Amazon SQS",
    "Amazon SNS",
    "AWS Step Functions"
   ],
   "a": 2,
   "e": "SNS supports SMS and email subscription endpoints directly; SQS is only a queue and cannot deliver to phones or inboxes.",
   "d": 2
  },
  {
   "id": 100,
   "t": "sns-pub-sub",
   "x": "Subscribers to an SNS topic should each receive only the messages relevant to their region instead of every published message. Which SNS feature accomplishes this?",
   "o": [
    "One separate topic created for every region",
    "Subscription filter policies on message attributes",
    "A dead-letter redrive policy",
    "Message deduplication IDs"
   ],
   "a": 1,
   "e": "Filter policies evaluate message attributes so each subscription receives only matching messages; creating many topics adds operational overhead and undermines fan-out.",
   "d": 2
  },
  {
   "id": 101,
   "t": "sns-pub-sub",
   "x": "A banking ledger workflow publishes events that must preserve strict ordering and deduplication when fanned out to a downstream queue. Which SNS configuration is required?",
   "o": [
    "An SNS topic with delivery status logging enabled",
    "An SNS standard topic using long polling",
    "An SNS FIFO topic subscribed to an SQS FIFO queue",
    "An SNS standard topic with a filter policy"
   ],
   "a": 2,
   "e": "SNS FIFO topics preserve ordering and deduplication and must pair with an SQS FIFO queue subscriber; standard topics offer no ordering guarantee.",
   "d": 2
  },
  {
   "id": 102,
   "t": "sns-pub-sub",
   "x": "A company wants SNS notifications encrypted at rest and wants failed deliveries to a subscriber endpoint captured in a durable location for later inspection. Which two features should they enable? Choose TWO.",
   "o": [
    "Server-side encryption with an AWS KMS key",
    "SMS monthly spend limits on the account",
    "Cross-Region replication of the topic",
    "A shorter message retention on the topic",
    "A dead-letter queue on the subscription"
   ],
   "a": 0,
   "e": "KMS server-side encryption protects messages at rest, and a subscription dead-letter queue captures deliveries that fail after retries; SNS topics have no cross-Region replication feature.",
   "d": 2,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 103,
   "t": "eventbridge-events",
   "x": "A security team needs to automatically invoke a Lambda function whenever an EC2 instance transitions to the stopped state, without any polling. Which service routes this AWS event?",
   "o": [
    "AWS Config rules",
    "Amazon EventBridge",
    "Amazon SNS",
    "Amazon SQS"
   ],
   "a": 1,
   "e": "EventBridge receives AWS service events such as EC2 state changes and routes them to targets like Lambda; SQS has no native source of AWS state-change events.",
   "d": 2
  },
  {
   "id": 104,
   "t": "eventbridge-events",
   "x": "A company runs a dedicated EC2 instance solely to fire a nightly cron job that generates a report, and it wants to eliminate that instance. Which serverless option triggers the job on a schedule?",
   "o": [
    "An Auto Scaling scheduled action set to zero",
    "An SQS delay queue",
    "An EventBridge Scheduler schedule",
    "A Route 53 health check"
   ],
   "a": 2,
   "e": "EventBridge Scheduler runs targets on cron or rate expressions without any server; a delay queue only postpones message visibility and does not schedule tasks.",
   "d": 2
  },
  {
   "id": 105,
   "t": "eventbridge-events",
   "x": "An application must ingest events emitted by a third-party SaaS provider and route them to internal targets. Which EventBridge capability supports this integration directly?",
   "o": [
    "A custom Lambda webhook poller",
    "A partner event bus",
    "An SQS cross-account queue",
    "A VPC peering connection"
   ],
   "a": 1,
   "e": "EventBridge partner event buses receive events directly from integrated SaaS providers; building a webhook poller adds undifferentiated code and servers to maintain.",
   "d": 2
  },
  {
   "id": 106,
   "t": "eventbridge-events",
   "x": "After an outage, engineers need to resend a set of past events to a target to reproduce a bug. Which pair of EventBridge features lets them capture and replay those events?",
   "o": [
    "Event archive and replay",
    "Schema registry and discovery",
    "Input transformer and dead-letter queue",
    "Global endpoints and failover"
   ],
   "a": 0,
   "e": "EventBridge archives store matched events so they can later be replayed to targets; the schema registry documents event structure but cannot resend events.",
   "d": 2
  },
  {
   "id": 107,
   "t": "eventbridge-events",
   "x": "A team decoupling a monolith with EventBridge wants to reshape event payloads before delivery and to ensure that deliveries which exhaust retries are not lost. Which two features apply? Choose TWO.",
   "o": [
    "Provisioned concurrency on the bus",
    "A dead-letter queue on the rule target",
    "A Route 53 latency record for the target",
    "An input transformer on the target",
    "A NAT gateway for the event bus"
   ],
   "a": 1,
   "e": "Input transformers reshape the event before it reaches the target, and a target dead-letter queue captures deliveries that exhaust retries; NAT gateways and Route 53 records are unrelated to event routing.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 108,
   "t": "api-gateway",
   "x": "A serverless REST API backed by Lambda must shield the backend from traffic bursts by capping requests per second. Which API Gateway feature enforces this limit?",
   "o": [
    "A larger Lambda memory allocation",
    "Throttling limits on the stage or method",
    "CloudFront geographic restriction",
    "An SQS queue placed in front of Lambda"
   ],
   "a": 1,
   "e": "API Gateway throttling caps request rate and burst to protect the backend; raising Lambda memory does not limit inbound request volume.",
   "d": 2
  },
  {
   "id": 109,
   "t": "api-gateway",
   "x": "A chat feature requires the server to push messages to connected clients in real time over a persistent connection. Which API Gateway API type supports this pattern?",
   "o": [
    "A REST API",
    "An HTTP API",
    "A WebSocket API",
    "An AppSync REST proxy"
   ],
   "a": 2,
   "e": "API Gateway WebSocket APIs maintain a persistent bidirectional connection that lets the server initiate messages; REST and HTTP APIs are request-response only.",
   "d": 2
  },
  {
   "id": 110,
   "t": "api-gateway",
   "x": "Responses from an API Gateway endpoint are identical for many callers and the backend integration is expensive to invoke. Which feature reduces backend calls most directly?",
   "o": [
    "Turn on X-Ray tracing",
    "Add reserved concurrency to the backend",
    "Enable API Gateway stage caching",
    "Switch to a Network Load Balancer"
   ],
   "a": 2,
   "e": "Stage caching serves repeated responses from the cache and lowers backend invocations; reserved concurrency limits Lambda scaling but caches nothing.",
   "d": 2
  },
  {
   "id": 111,
   "t": "api-gateway",
   "x": "A company exposes a REST API to external developers and must both authenticate callers and meter each client's usage. Which two API Gateway features meet these needs? Choose TWO.",
   "o": [
    "A Lambda or Cognito authorizer",
    "API keys tied to usage plans",
    "Server-side encryption on a queue",
    "A gateway VPC endpoint for S3",
    "A NAT gateway in each subnet"
   ],
   "a": 0,
   "e": "Usage plans with API keys meter and throttle each client, and an authorizer validates caller identity; NAT gateways and S3 endpoints do not authenticate API callers.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 112,
   "t": "api-gateway",
   "x": "An internal API must be reachable only from within a VPC and must never traverse the public internet. Which two configurations produce a private API? Choose TWO.",
   "o": [
    "Use the private REST API endpoint type",
    "Enable an edge-optimized CloudFront distribution",
    "Assign an Elastic IP to the API",
    "Front the API with a public Application Load Balancer",
    "Attach an interface VPC endpoint for execute-api"
   ],
   "a": 0,
   "e": "A private API endpoint combined with an execute-api interface VPC endpoint keeps traffic inside the VPC; edge-optimized and public load balancer paths expose the API to the internet.",
   "d": 2,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 113,
   "t": "lambda-serverless",
   "x": "A latency-sensitive Lambda function suffers slow first invocations after idle periods. Which feature keeps execution environments initialized to remove this cold-start delay?",
   "o": [
    "Reserved concurrency",
    "An SQS event source mapping",
    "A larger deployment package",
    "Provisioned concurrency"
   ],
   "a": 3,
   "e": "Provisioned concurrency pre-initializes execution environments so requests avoid cold starts; reserved concurrency only caps the maximum number of concurrent executions.",
   "d": 2
  },
  {
   "id": 114,
   "t": "lambda-serverless",
   "x": "A Lambda function must query an Amazon RDS database that has no public endpoint. Which configuration lets the function reach the database privately?",
   "o": [
    "Attach the function to the database VPC subnets",
    "Give the function a public IP address",
    "Add an internet gateway to the function",
    "Turn on RDS Proxy public access"
   ],
   "a": 0,
   "e": "Placing the function in the database VPC subnets with the right security group grants private connectivity; Lambda functions cannot be assigned public IPs directly.",
   "d": 2
  },
  {
   "id": 115,
   "t": "lambda-serverless",
   "x": "One Lambda function consumes so much account concurrency that other functions in the account are throttled. Which setting guarantees capacity remains for the other functions?",
   "o": [
    "Set reserved concurrency on the noisy function",
    "Move the function to a larger memory tier",
    "Increase the noisy function's timeout",
    "Enable provisioned concurrency on the noisy function"
   ],
   "a": 0,
   "e": "Reserved concurrency caps a function's maximum concurrency and reserves the account remainder for others; provisioned concurrency would not limit its total usage.",
   "d": 2
  },
  {
   "id": 116,
   "t": "lambda-serverless",
   "x": "A Lambda function should run every time an object is uploaded to an S3 bucket in order to generate a thumbnail. Which mechanism connects the upload to the function?",
   "o": [
    "An S3 event notification to Lambda",
    "A DynamoDB stream",
    "A CloudWatch metric alarm",
    "An SQS delay queue"
   ],
   "a": 0,
   "e": "S3 event notifications invoke Lambda on object-created events; DynamoDB streams fire on table changes, not on S3 uploads.",
   "d": 2
  },
  {
   "id": 117,
   "t": "lambda-serverless",
   "x": "A Lambda function needs database credentials at runtime without hardcoding them, and both the stored secret and the function's environment variables must be encrypted at rest. Which two approaches meet these requirements? Choose TWO.",
   "o": [
    "Retrieve the secret from AWS Secrets Manager at runtime",
    "Fetch the credentials from a Parameter Store String parameter at runtime",
    "Encrypt environment variables with an AWS KMS key",
    "Have the CI pipeline inject the credentials into the function code as build-time constants",
    "Store the database password in an AWS CloudHSM cluster for the function to query"
   ],
   "a": 0,
   "e": "Secrets Manager keeps the secret encrypted with KMS and serves it to the function at runtime, and a KMS key satisfies the encryption requirement for environment variables. A Parameter Store String parameter stores its value unencrypted because only SecureString parameters are KMS-encrypted, constants injected at build time still hardcode the value into the code, and CloudHSM manages cryptographic keys rather than serving application passwords.",
   "d": 2,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 118,
   "t": "step-functions",
   "x": "A business process chains several Lambda functions with conditional branching, automatic retries, and error handling. Which service orchestrates this with the least custom glue code?",
   "o": [
    "Amazon SQS",
    "AWS Batch",
    "Amazon EventBridge Pipes",
    "AWS Step Functions"
   ],
   "a": 3,
   "e": "Step Functions coordinates multi-step workflows with built-in retries, branching, and error catching; SQS only passes messages and has no orchestration logic.",
   "d": 2
  },
  {
   "id": 119,
   "t": "step-functions",
   "x": "A workflow must pause until a person approves a request by clicking a link, then resume, possibly days later. Which Step Functions pattern supports this?",
   "o": [
    "An Express workflow with a short timeout",
    "Wait for a task token callback",
    "A Choice state that polls a database",
    "A fixed Wait state of several days"
   ],
   "a": 1,
   "e": "The task-token callback pattern pauses the state machine until an external caller returns the token, which fits human approval; a fixed Wait cannot key off an approval event.",
   "d": 2
  },
  {
   "id": 120,
   "t": "step-functions",
   "x": "A high-volume workflow runs millions of short executions per day and needs the lowest cost per run, with no long-duration or exactly-once needs. Which workflow type fits best?",
   "o": [
    "Nested Standard workflows",
    "Express workflows",
    "Activity worker workflows",
    "Standard workflows"
   ],
   "a": 1,
   "e": "Express workflows are billed by execution count and duration and suit high-volume short runs; Standard workflows cost more per state transition and target long-running processes.",
   "d": 2
  },
  {
   "id": 121,
   "t": "step-functions",
   "x": "A Step Functions state machine invokes a Lambda that intermittently returns throttling errors. Which built-in capability retries these transient failures automatically?",
   "o": [
    "A separate SQS retry queue",
    "Retry configuration on the task state",
    "A CloudWatch alarm that restarts the machine",
    "Manual re-execution from the console"
   ],
   "a": 1,
   "e": "Retry blocks on a task state re-attempt on specified errors with backoff, handling transient throttling; an external queue would require custom orchestration.",
   "d": 2
  },
  {
   "id": 122,
   "t": "step-functions",
   "x": "An orchestration must fan work out to process many items in parallel and keep running even when some branches fail, while recording which ones errored. Which two Step Functions features apply? Choose TWO.",
   "o": [
    "Provisioned concurrency on the state machine",
    "A NAT gateway for each branch",
    "An SNS FIFO topic between states",
    "A Catch block to handle branch errors",
    "A Map state for parallel iteration"
   ],
   "a": 3,
   "e": "The Map state iterates over items in parallel and a Catch block routes failed branches to error handling; state machines have no NAT or provisioned-concurrency settings.",
   "d": 2,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 123,
   "t": "ecs-fargate",
   "x": "A team wants to run Docker containers without provisioning, patching, or scaling any EC2 host instances. Which ECS launch type meets this with the least operational overhead?",
   "o": [
    "ECS on EC2 with an Auto Scaling group",
    "ECS on EC2 Spot Instances",
    "ECS Anywhere on-premises",
    "AWS Fargate"
   ],
   "a": 3,
   "e": "Fargate runs containers serverlessly with no host to manage; the EC2 launch types still require you to operate and scale the underlying instances.",
   "d": 2
  },
  {
   "id": 124,
   "t": "ecs-fargate",
   "x": "A container task must read and write objects in one specific S3 bucket. Which mechanism grants the task least-privilege access to that bucket?",
   "o": [
    "An ECS task IAM role",
    "A bucket policy that allows public access",
    "The EC2 instance profile shared by every task",
    "IAM user access keys baked into the image"
   ],
   "a": 0,
   "e": "A task role grants scoped, temporary credentials to just that task; embedding user keys or sharing the instance profile violates least privilege.",
   "d": 2
  },
  {
   "id": 125,
   "t": "ecs-fargate",
   "x": "An ECS service on Fargate must add tasks automatically when average CPU utilization rises above a chosen target. Which feature provides this behavior?",
   "o": [
    "A Network Load Balancer health check",
    "Service Auto Scaling with a target-tracking policy",
    "An EventBridge scheduled rule",
    "A larger task memory reservation"
   ],
   "a": 1,
   "e": "ECS Service Auto Scaling with target tracking adds or removes tasks to hold a CPU target; increasing memory does not change task count under load.",
   "d": 2
  },
  {
   "id": 126,
   "t": "ecs-fargate",
   "x": "A team runs containers on AWS Fargate around the clock and wants to lower the compute bill for this steady usage in exchange for a one-year commitment. Which purchasing option applies?",
   "o": [
    "Reserved Instances for the tasks",
    "A Compute Savings Plan",
    "On-Demand pricing with no commitment",
    "Spot capacity for the tasks"
   ],
   "a": 1,
   "e": "Compute Savings Plans discount steady Fargate usage for a one- or three-year commitment; Reserved Instances do not apply to Fargate, and Spot targets interruptible work.",
   "d": 2
  },
  {
   "id": 127,
   "t": "ecs-fargate",
   "x": "An ECS on Fargate service must give each task its own elastic network interface and register with an Application Load Balancer for HTTP traffic. Which two elements are required? Choose TWO.",
   "o": [
    "The bridge network mode",
    "The awsvpc network mode",
    "A target group associated with the service",
    "A NAT instance for each task",
    "A Classic Load Balancer with EC2 registration"
   ],
   "a": 1,
   "e": "Fargate requires awsvpc mode, giving each task its own ENI, and the service registers into an ALB target group; bridge mode and Classic Load Balancers are not used with Fargate.",
   "d": 2,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 128,
   "t": "eks-kubernetes",
   "x": "An organization already maintains Kubernetes manifests and wants a managed control plane on AWS without operating the master nodes itself. Which service fits?",
   "o": [
    "Amazon EKS",
    "AWS Fargate on its own",
    "Amazon ECS",
    "AWS App Runner"
   ],
   "a": 0,
   "e": "EKS provides a managed Kubernetes control plane compatible with standard manifests; ECS is AWS's proprietary orchestrator and does not run Kubernetes.",
   "d": 2
  },
  {
   "id": 129,
   "t": "eks-kubernetes",
   "x": "A team running Amazon EKS wants to schedule pods without managing any EC2 worker nodes at all. Which option provides serverless pods?",
   "o": [
    "A Karpenter provisioner backed by EC2",
    "A managed EC2 node group",
    "An EKS Fargate profile",
    "A self-managed node group"
   ],
   "a": 2,
   "e": "A Fargate profile schedules matching pods onto Fargate with no worker nodes to manage; every node-group option still requires EC2 instances.",
   "d": 2
  },
  {
   "id": 130,
   "t": "eks-kubernetes",
   "x": "Pods in an EKS cluster must call AWS APIs with fine-grained, per-service-account permissions instead of sharing the worker node role. Which feature enables this?",
   "o": [
    "A single cluster-wide admin role",
    "IAM roles for service accounts",
    "A shared EC2 instance profile",
    "Access keys stored in a ConfigMap"
   ],
   "a": 1,
   "e": "IRSA maps a Kubernetes service account to an IAM role so each pod receives scoped credentials; sharing the node instance profile over-grants permissions to all pods.",
   "d": 2
  },
  {
   "id": 131,
   "t": "eks-kubernetes",
   "x": "An EKS cluster must add worker capacity automatically when pods cannot be scheduled and must expose services to the internet through AWS load balancers. Which two components help? Choose TWO.",
   "o": [
    "Cluster Autoscaler or Karpenter for node scaling",
    "Amazon Macie for traffic routing",
    "A NAT gateway used as the ingress point",
    "The AWS Load Balancer Controller",
    "An SQS queue placed in front of the pods"
   ],
   "a": 0,
   "e": "Cluster Autoscaler or Karpenter add nodes when pods are unschedulable, and the AWS Load Balancer Controller provisions ALBs or NLBs for services; NAT gateways and Macie do not route pod ingress.",
   "d": 2,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 132,
   "t": "eks-kubernetes",
   "x": "A company wants to cut EKS worker node cost for fault-tolerant batch pods that tolerate being interrupted and restarted. Which EC2 purchasing option is most cost-effective?",
   "o": [
    "On-Demand Instances only",
    "Reserved Instances with no flexibility",
    "Spot Instances in a managed node group",
    "Dedicated Hosts"
   ],
   "a": 2,
   "e": "Spot Instances offer the deepest discount and suit interruption-tolerant batch pods; On-Demand and Dedicated Hosts cost far more for the same fault-tolerant work.",
   "d": 2
  },
  {
   "id": 133,
   "t": "ec2-auto-scaling-groups",
   "x": "A web tier runs on EC2 instances in a single Availability Zone behind an Auto Scaling group. The company wants the tier to survive the loss of an entire Availability Zone with no manual intervention. What should the solutions architect change?",
   "o": [
    "Attach an Elastic IP address to each instance in the group",
    "Configure the Auto Scaling group across multiple Availability Zones in the Region",
    "Move the group into a cluster placement group for tighter packing",
    "Increase the desired capacity of the group within the current Availability Zone"
   ],
   "a": 1,
   "e": "Spreading the Auto Scaling group over several Availability Zones lets it launch replacement instances in a healthy zone when one zone fails. Adding capacity in one zone or using a cluster placement group keeps every instance inside a single failure domain.",
   "d": 2
  },
  {
   "id": 134,
   "t": "ec2-auto-scaling-groups",
   "x": "During scale-in an Auto Scaling group should remove the instances that have been running the longest so the fleet stays on the newest launch template. Which termination policy achieves this?",
   "o": [
    "ClosestToNextInstanceHour",
    "OldestInstance",
    "AllocationStrategy",
    "NewestInstance"
   ],
   "a": 1,
   "e": "The OldestInstance termination policy removes the longest-running instances first, which helps when refreshing to a newer launch template. NewestInstance would keep the oldest instances and discard the newest ones instead.",
   "d": 2
  },
  {
   "id": 135,
   "t": "ec2-auto-scaling-groups",
   "x": "A solutions architect must ensure an Auto Scaling group replaces instances that fail application-level checks, not just host status checks. Which actions accomplish this? Choose TWO.",
   "o": [
    "Register the instances in a target group that runs an HTTP health check",
    "Attach a CloudWatch agent that reports instance memory metrics",
    "Rely only on EC2 status checks and raise the health check grace period",
    "Set the Auto Scaling group health check type to ELB",
    "Configure a scheduled action that recycles instances every night"
   ],
   "a": 0,
   "e": "Setting the health check type to ELB makes the group honor the load balancer's application-layer health checks, which reach the instances through a target group. EC2 status checks alone detect only host or network problems, not a hung application.",
   "d": 2,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 136,
   "t": "ec2-auto-scaling-groups",
   "x": "An application must copy logs off each EC2 instance before Auto Scaling finishes terminating it during scale-in. Which feature lets the instance complete that work before termination proceeds?",
   "o": [
    "Instance scale-in protection enabled on every instance",
    "A target tracking policy tied to average CPU utilization",
    "A scheduled scaling action set for off-peak hours",
    "A termination lifecycle hook on the Auto Scaling group"
   ],
   "a": 3,
   "e": "A termination lifecycle hook holds the instance in a waiting state so a script can flush logs before the instance is removed. Scale-in protection would block termination entirely rather than allow a graceful drain.",
   "d": 2
  },
  {
   "id": 137,
   "t": "ec2-auto-scaling-groups",
   "x": "A retail site sees demand that ramps up every morning and falls each night in a repeatable pattern. The team wants capacity provisioned ahead of the surge to avoid latency during the ramp. Which scaling approach fits best?",
   "o": [
    "Simple scaling triggered after CPU crosses a threshold",
    "Manual adjustment of the desired capacity each morning",
    "Predictive scaling on the Auto Scaling group",
    "A step scaling policy keyed to network throughput"
   ],
   "a": 2,
   "e": "Predictive scaling forecasts demand from historical patterns and adds capacity before the surge arrives, avoiding the lag of reactive policies. Simple and step scaling only respond after a metric has already breached a threshold.",
   "d": 2
  },
  {
   "id": 138,
   "t": "elastic-load-balancing",
   "x": "A company must expose a TCP-based game server to the internet using a fixed set of static IP addresses that partners can allowlist in their firewalls. Which load balancer meets this requirement?",
   "o": [
    "An Application Load Balancer",
    "A Network Load Balancer",
    "A Classic Load Balancer",
    "A Gateway Load Balancer"
   ],
   "a": 1,
   "e": "A Network Load Balancer works at layer 4, handles TCP at high scale, and provides a static IP per Availability Zone that partners can allowlist. An Application Load Balancer works at layer 7 and does not offer fixed IP addresses.",
   "d": 2
  },
  {
   "id": 139,
   "t": "elastic-load-balancing",
   "x": "A microservices platform serves requests to /images from one backend and /api from another, both under the same hostname. Which load balancer capability routes each path to the correct target group?",
   "o": [
    "Application Load Balancer listener rules with path conditions",
    "Network Load Balancer flow hashing on the source port",
    "CloudFront origin groups keyed to the request URL",
    "Route 53 weighted records defined per path prefix"
   ],
   "a": 0,
   "e": "An Application Load Balancer inspects HTTP requests and uses listener rules with path-based conditions to send /images and /api to different target groups. A Network Load Balancer cannot read URL paths because it operates at layer 4.",
   "d": 2
  },
  {
   "id": 140,
   "t": "elastic-load-balancing",
   "x": "A solutions architect wants an Application Load Balancer to distribute requests evenly even when Availability Zones hold different instance counts, and to let in-flight requests finish on a target that is being removed. Which two settings apply? Choose TWO.",
   "o": [
    "Proxy protocol version 2 on the target group",
    "Deregistration delay on the target group",
    "A weighted target group returning a fixed response",
    "Cross-zone load balancing",
    "Sticky sessions using a duration-based cookie"
   ],
   "a": 1,
   "e": "Cross-zone load balancing spreads requests across all healthy targets regardless of per-zone counts, and deregistration delay lets active requests complete before a target is removed. Sticky sessions would instead pin a client to one target.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 141,
   "t": "elastic-load-balancing",
   "x": "A solutions architect is tuning an Application Load Balancer target group so failing instances stop receiving traffic quickly. Which two health check settings directly control when a target is marked unhealthy? Choose TWO.",
   "o": [
    "The load balancer idle timeout",
    "The target group slow start duration",
    "The health check interval and timeout",
    "The unhealthy threshold count",
    "The Auto Scaling group desired capacity"
   ],
   "a": 2,
   "e": "The unhealthy threshold sets how many consecutive failed checks mark a target unhealthy, and the interval and timeout govern how often and how long each check runs. Idle timeout and slow start affect connections and ramp-up, not the health decision.",
   "d": 2,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 142,
   "t": "elastic-load-balancing",
   "x": "A company needs to terminate TLS, inspect HTTP headers for routing, and attach an AWS WAF web ACL directly to the load balancer. Which option supports all of these together?",
   "o": [
    "Application Load Balancer",
    "Network Load Balancer",
    "A managed NAT gateway",
    "Gateway Load Balancer"
   ],
   "a": 0,
   "e": "An Application Load Balancer terminates TLS, reads HTTP headers for routing decisions, and supports a directly associated AWS WAF web ACL. A Network Load Balancer cannot host a web ACL because it does not process layer 7 traffic.",
   "d": 2
  },
  {
   "id": 143,
   "t": "route53-dns-failover",
   "x": "A company runs a primary web stack in us-east-1 and a standby stack in us-west-2. If the primary becomes unhealthy, DNS should automatically direct users to the standby. Which Route 53 configuration meets this?",
   "o": [
    "Weighted routing records split evenly between the two Regions",
    "Simple routing that returns multiple IP values at once",
    "Failover routing records with a health check on the primary",
    "Geolocation routing keyed to the user's continent"
   ],
   "a": 2,
   "e": "Failover routing pairs a primary and secondary record with a health check, so Route 53 serves the secondary only while the primary is unhealthy. Weighted routing would send a share of traffic to both stacks at all times.",
   "d": 2
  },
  {
   "id": 144,
   "t": "route53-dns-failover",
   "x": "A global API is deployed in three Regions, and the company wants each user directed to the Region that gives them the lowest network latency. Which Route 53 routing policy should be used?",
   "o": [
    "Weighted routing",
    "Failover routing",
    "Latency-based routing",
    "Multivalue answer routing"
   ],
   "a": 2,
   "e": "Latency-based routing sends each user to the Region that provides the lowest measured latency for their location. Failover routing only chooses between a primary and a standby and ignores latency.",
   "d": 2
  },
  {
   "id": 145,
   "t": "route53-dns-failover",
   "x": "A team wants Route 53 to hand back several healthy web server addresses at random and to drop any address whose endpoint is failing. Which two elements make this possible? Choose TWO.",
   "o": [
    "An alias record that points at one load balancer",
    "A Route 53 health check associated with each record",
    "Multivalue answer routing records",
    "Geoproximity routing configured with a bias value",
    "A CNAME record placed at the zone apex"
   ],
   "a": 1,
   "e": "Multivalue answer routing returns up to eight healthy records chosen at random, and a health check on each record lets Route 53 withhold failing endpoints. An alias to a single load balancer would not give the client several addresses to spread across.",
   "d": 2,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 146,
   "t": "route53-dns-failover",
   "x": "A company must point the root domain example.com at an Application Load Balancer, but the DNS standard forbids a CNAME at a zone apex. Which Route 53 record type solves this?",
   "o": [
    "A TXT record that stores the load balancer name",
    "An alias record that targets the load balancer",
    "A plain CNAME record created at the apex",
    "An MX record configured for the domain root"
   ],
   "a": 1,
   "e": "A Route 53 alias record maps a zone apex directly to an AWS resource such as an ALB without breaking the CNAME-at-apex restriction. A standard CNAME cannot be created at the zone apex at all.",
   "d": 2
  },
  {
   "id": 147,
   "t": "route53-dns-failover",
   "x": "During a Regional outage a company wants example.com to serve a static maintenance page from Amazon S3 instead of returning errors to visitors. Which Route 53 approach delivers this?",
   "o": [
    "A geolocation record created for every country in scope",
    "A failover record whose secondary points to an S3 website endpoint",
    "A latency record measured between the app and the bucket",
    "A weighted record that always favors the S3 bucket target"
   ],
   "a": 1,
   "e": "A failover configuration can set the S3 static website endpoint as the secondary target so Route 53 serves the maintenance page when the primary health check fails. Weighted routing would send some users to the maintenance page even during normal operation.",
   "d": 2
  },
  {
   "id": 148,
   "t": "rds-multi-az",
   "x": "A team enables Multi-AZ on an Amazon RDS for PostgreSQL database. What availability benefit does this configuration provide?",
   "o": [
    "Automatic sharding of large tables across Availability Zones",
    "Distribution of read traffic across several read replicas",
    "Cross-Region disaster recovery using asynchronous copies",
    "Automatic failover to a synchronous standby in another Availability Zone"
   ],
   "a": 3,
   "e": "RDS Multi-AZ keeps a synchronous standby in a second Availability Zone and fails over to it automatically if the primary fails. Scaling read traffic is the job of read replicas, which serve a different purpose.",
   "d": 2
  },
  {
   "id": 149,
   "t": "rds-multi-az",
   "x": "A database is hitting CPU limits because of heavy reporting queries running against the primary instance. The team wants to offload those read-only queries elsewhere. Which RDS feature should they add?",
   "o": [
    "Storage auto scaling on the volume",
    "A longer backup retention window",
    "A Multi-AZ standby instance",
    "One or more read replicas"
   ],
   "a": 3,
   "e": "Read replicas accept read-only traffic such as reporting queries and relieve load on the primary. A Multi-AZ standby cannot serve reads because it exists solely to take over during a failover.",
   "d": 2
  },
  {
   "id": 150,
   "t": "rds-multi-az",
   "x": "A solutions architect is documenting when Amazon RDS performs an automatic Multi-AZ failover. Which two events trigger a failover to the standby? Choose TWO.",
   "o": [
    "The primary database instance class is modified",
    "A read replica in another Region is manually promoted",
    "The Availability Zone hosting the primary becomes unavailable",
    "The backup retention period is increased",
    "A manual snapshot is copied to another account"
   ],
   "a": 0,
   "e": "An outage of the primary's Availability Zone and certain maintenance operations such as changing the instance class trigger an automatic Multi-AZ failover. Promoting a cross-Region read replica is a manual DR action rather than an automatic failover.",
   "d": 2,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 151,
   "t": "rds-multi-az",
   "x": "A company must keep a recoverable copy of an RDS for MySQL database in a second Region to satisfy a disaster recovery mandate. Which feature provides that cross-Region copy?",
   "o": [
    "A cross-Region read replica",
    "A Multi-AZ standby in the same Region",
    "A larger allocated storage setting",
    "An RDS Proxy connection endpoint"
   ],
   "a": 0,
   "e": "A cross-Region read replica continuously copies data to another Region and can be promoted to a standalone database during a disaster. A Multi-AZ standby stays inside one Region and cannot protect against a full Regional failure.",
   "d": 2
  },
  {
   "id": 152,
   "t": "rds-multi-az",
   "x": "After an RDS Multi-AZ failover an application suffers a burst of connection errors because it holds many open database connections. Which managed service pools connections and reduces failover disruption?",
   "o": [
    "Amazon RDS Proxy",
    "Amazon Route 53 Resolver",
    "AWS Global Accelerator",
    "Amazon ElastiCache for Redis"
   ],
   "a": 0,
   "e": "RDS Proxy pools and shares database connections and holds client connections during a failover, which cuts failover times and connection errors. ElastiCache caches data but does not manage database connection failover.",
   "d": 2
  },
  {
   "id": 153,
   "t": "aurora-ha-replicas",
   "x": "An Amazon Aurora cluster has a writer and several Aurora Replicas. The company wants one specific replica promoted first if the writer fails. Which mechanism controls that order?",
   "o": [
    "The cluster storage auto scaling policy",
    "A Route 53 weighted record created per replica",
    "Failover priority tiers assigned to each replica",
    "The backup retention setting on each replica"
   ],
   "a": 2,
   "e": "Aurora promotes the replica with the highest failover priority tier, breaking ties by instance size, so setting tiers controls promotion order. Backup retention has no effect on which replica is chosen during failover.",
   "d": 2
  },
  {
   "id": 154,
   "t": "aurora-ha-replicas",
   "x": "An application should spread its read-only queries across all Aurora Replicas in a cluster without tracking each instance endpoint separately. Which endpoint should it use?",
   "o": [
    "The cluster reader endpoint",
    "A custom endpoint scoped to the writer only",
    "Each individual instance endpoint in turn",
    "The cluster writer endpoint"
   ],
   "a": 0,
   "e": "The reader endpoint automatically load-balances connections across the available Aurora Replicas. The writer endpoint always points to the primary instance and would not distribute read traffic.",
   "d": 2
  },
  {
   "id": 155,
   "t": "aurora-ha-replicas",
   "x": "A company plans to deploy an Amazon Aurora Global Database that spans two Regions. Which two benefits should the solutions architect expect from this design? Choose TWO.",
   "o": [
    "Fast cross-Region disaster recovery by promoting a secondary",
    "Complete elimination of the need for database backups",
    "Writes committed synchronously in both Regions at once",
    "Low-latency reads served from the secondary Region",
    "Automatic sharding of tables by their primary key"
   ],
   "a": 0,
   "e": "An Aurora Global Database replicates with typically sub-second lag, giving local reads in the secondary Region and quick DR by promoting that Region. Replication to the secondary is asynchronous, so writes are not committed synchronously in both Regions.",
   "d": 2,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 156,
   "t": "aurora-ha-replicas",
   "x": "A development database has unpredictable, spiky usage with long idle periods, and the team wants capacity to scale automatically without managing instance sizes. Which option fits best?",
   "o": [
    "A fixed, large provisioned Aurora instance",
    "Amazon Aurora Serverless v2",
    "Amazon RDS purchased as a Reserved Instance",
    "A self-managed database on EC2 Spot Instances"
   ],
   "a": 1,
   "e": "Aurora Serverless v2 scales capacity up and down automatically to match spiky, unpredictable demand without manual instance sizing. A fixed provisioned instance would sit over-provisioned during the long idle periods.",
   "d": 2
  },
  {
   "id": 157,
   "t": "aurora-ha-replicas",
   "x": "How does an Amazon Aurora cluster keep its replicas consistent with the writer so that adding a replica does not copy the entire dataset each time?",
   "o": [
    "Each replica holds its own independent full copy of the data",
    "All instances share a single distributed cluster storage volume",
    "The writer streams binary logs to each replica's local disk",
    "Replicas synchronize by restoring nightly snapshots"
   ],
   "a": 1,
   "e": "Aurora separates compute from storage, so the writer and all replicas read from the same shared, distributed storage volume, which makes replica creation fast. Aurora specifically avoids the per-replica full copies used by traditional replication.",
   "d": 2
  },
  {
   "id": 158,
   "t": "dynamodb-global-tables",
   "x": "A mobile app needs a DynamoDB table that accepts low-latency writes from users in North America, Europe, and Asia while keeping every Region in sync. Which feature provides this?",
   "o": [
    "A DynamoDB local secondary index in every Region",
    "DynamoDB global tables with multi-Region replication",
    "On-demand backups copied out to each Region",
    "A single-Region table fronted by a DAX cluster"
   ],
   "a": 1,
   "e": "Global tables replicate data across the chosen Regions and accept writes in each one, giving local low-latency access with automatic multi-Region synchronization. DAX only caches reads within a single Region.",
   "d": 2
  },
  {
   "id": 159,
   "t": "dynamodb-global-tables",
   "x": "In a multi-Region DynamoDB global table, two Regions update the same item at nearly the same instant. How does DynamoDB resolve the resulting conflict?",
   "o": [
    "It applies last-writer-wins reconciliation based on timestamps",
    "It merges the differing attribute values from both writes",
    "It locks the item until an administrator intervenes",
    "It rejects both writes and returns an exception to callers"
   ],
   "a": 0,
   "e": "DynamoDB global tables use last-writer-wins conflict resolution and keep the most recent write by timestamp. It does not merge attribute values or block the item for manual resolution.",
   "d": 2
  },
  {
   "id": 160,
   "t": "dynamodb-global-tables",
   "x": "Before converting an existing DynamoDB table into a global table across Regions, which two requirements must be satisfied? Choose TWO.",
   "o": [
    "A provisioned Multi-AZ standby must be attached first",
    "The table must add a local secondary index per Region",
    "Point-in-time recovery must be turned off beforehand",
    "The table must use an identical key schema in every Region",
    "DynamoDB Streams must be enabled on the table"
   ],
   "a": 3,
   "e": "Global tables rely on DynamoDB Streams for replication and require the same key schema and table name in each participating Region. DynamoDB has no Multi-AZ standby concept because it is already spread across Availability Zones by design.",
   "d": 2,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 161,
   "t": "dynamodb-global-tables",
   "x": "An application reads from a DynamoDB global table in its local Region immediately after another Region wrote the same item. Which read behavior should the developers expect?",
   "o": [
    "Automatic strong consistency once streams are enabled",
    "Reads blocked until every Region confirms the write",
    "Eventually consistent reads across Regions",
    "Strongly consistent reads across all Regions"
   ],
   "a": 2,
   "e": "Cross-Region replication in global tables is asynchronous, so a read in another Region is eventually consistent and may briefly return stale data. DynamoDB does not offer strongly consistent reads across Regions.",
   "d": 2
  },
  {
   "id": 162,
   "t": "dynamodb-global-tables",
   "x": "A team must be able to restore a DynamoDB table to any second within the past 35 days after an accidental bulk delete. Which feature should they enable?",
   "o": [
    "Point-in-time recovery on the table",
    "Provisioned capacity with auto scaling",
    "A global secondary index on the sort key",
    "DynamoDB Accelerator in front of the table"
   ],
   "a": 0,
   "e": "Point-in-time recovery lets you restore a table to any second within the trailing 35 days, protecting against accidental writes or deletes. A global secondary index changes query options rather than providing recovery.",
   "d": 2
  },
  {
   "id": 163,
   "t": "s3-cross-region-replication",
   "x": "A compliance rule requires that objects uploaded to an S3 bucket be automatically copied to a bucket in a different AWS Region. Which S3 feature satisfies this?",
   "o": [
    "Cross-Region Replication",
    "S3 Transfer Acceleration",
    "Same-Region Replication",
    "S3 Lifecycle expiration rules"
   ],
   "a": 0,
   "e": "Cross-Region Replication asynchronously copies new objects to a destination bucket in another Region for compliance and disaster recovery. Same-Region Replication keeps copies inside one Region and would not satisfy a cross-Region requirement.",
   "d": 2
  },
  {
   "id": 164,
   "t": "s3-cross-region-replication",
   "x": "A solutions architect is enabling S3 replication, but the feature will not turn on for the bucket. Which prerequisite is most likely missing?",
   "o": [
    "The source and destination buckets must share the same storage class",
    "The destination bucket must remain empty at all times",
    "A NAT gateway must be attached to the source bucket",
    "Versioning must be enabled on the source and destination buckets"
   ],
   "a": 3,
   "e": "S3 replication requires versioning enabled on both the source and destination buckets. Matching storage classes and an empty destination are not requirements, and S3 buckets do not use NAT gateways.",
   "d": 2
  },
  {
   "id": 165,
   "t": "s3-cross-region-replication",
   "x": "A company is evaluating Amazon S3 Cross-Region Replication for a global workload. Which two goals does this feature directly help achieve? Choose TWO.",
   "o": [
    "Rotating a customer-managed key on a fixed schedule",
    "Serving objects through a single global anycast IP",
    "Meeting Regional data-residency and disaster recovery needs",
    "Compressing stored objects to reduce storage cost",
    "Lowering read latency for users near the destination Region"
   ],
   "a": 2,
   "e": "Cross-Region Replication keeps a copy in another Region for DR and residency and can place data closer to users in that Region to reduce read latency. It does not compress objects or provide anycast delivery of content.",
   "d": 2,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 166,
   "t": "s3-cross-region-replication",
   "x": "After turning on S3 replication, a team notices that objects uploaded before the rule existed were never copied to the destination. Which approach replicates those pre-existing objects?",
   "o": [
    "Toggle Transfer Acceleration on the bucket",
    "Add a lifecycle rule to expire old versions",
    "Run an S3 Batch Replication job",
    "Re-enable versioning on the source bucket"
   ],
   "a": 2,
   "e": "S3 Batch Replication replicates existing objects that predate a replication rule, because live replication only acts on new uploads. Transfer Acceleration merely speeds up uploads and does not backfill older objects.",
   "d": 2
  },
  {
   "id": 167,
   "t": "s3-cross-region-replication",
   "x": "A financial firm needs a predictable, contractual replication time for objects copied between S3 buckets in two Regions. Which option provides an SLA-backed replication window?",
   "o": [
    "S3 Replication Time Control",
    "S3 Intelligent-Tiering",
    "S3 Object Lock in governance mode",
    "S3 Transfer Acceleration"
   ],
   "a": 0,
   "e": "S3 Replication Time Control replicates most objects within 15 minutes and is backed by a service level agreement. Object Lock enforces retention on objects but says nothing about how quickly they replicate.",
   "d": 2
  },
  {
   "id": 168,
   "t": "disaster-recovery-strategies",
   "x": "A company keeps a minimal copy of its core database replicated and running in a second Region while its application servers stay switched off until a failover is needed. Which disaster recovery strategy is this?",
   "o": [
    "Multi-site active-active",
    "Pilot light",
    "Backup and restore",
    "Warm standby"
   ],
   "a": 1,
   "e": "Pilot light keeps critical core elements such as the database replicated and running while the rest of the environment is provisioned only during a failover. Warm standby differs by keeping a scaled-down but fully functional copy always running.",
   "d": 2
  },
  {
   "id": 169,
   "t": "disaster-recovery-strategies",
   "x": "A workload can tolerate several hours of downtime after a disaster, and management wants the least expensive disaster recovery approach. Which strategy best fits?",
   "o": [
    "Pilot light",
    "Warm standby",
    "Multi-site active-active",
    "Backup and restore"
   ],
   "a": 3,
   "e": "Backup and restore is the lowest-cost strategy and suits long recovery time objectives because infrastructure is recreated only after a disaster strikes. Active-active is the most costly because full capacity runs continuously in every Region.",
   "d": 2
  },
  {
   "id": 170,
   "t": "disaster-recovery-strategies",
   "x": "A solutions architect is selecting a disaster recovery strategy based on two objectives. Which two statements correctly describe recovery point objective and recovery time objective? Choose TWO.",
   "o": [
    "RTO is the maximum amount of data loss the business can tolerate after an outage",
    "RPO is the maximum time allowed to bring the service back online after an outage",
    "RTO is the maximum time allowed to restore service after an outage",
    "RPO is the maximum data loss allowed, expressed as a time span",
    "RTO is determined by the interval between successive backups of the workload"
   ],
   "a": 2,
   "e": "RTO caps how long service restoration may take, and RPO caps how much data, measured as a span of time, may be lost. The reversed definitions are the classic trap: maximum tolerable data loss is RPO rather than RTO, and the backup interval drives RPO, not RTO.",
   "d": 2,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 171,
   "t": "disaster-recovery-strategies",
   "x": "A business wants a scaled-down but fully working copy of its production stack always running in another Region so it can scale up quickly during a failover. Which strategy describes this?",
   "o": [
    "Backup and restore",
    "Pilot light",
    "Cold archival storage",
    "Warm standby"
   ],
   "a": 3,
   "e": "Warm standby keeps a smaller but functional version of the environment always running and ready to scale to full capacity during a failover. Pilot light keeps only core pieces running and must provision the application tier during recovery.",
   "d": 2
  },
  {
   "id": 172,
   "t": "disaster-recovery-strategies",
   "x": "A company adopts a multi-site active-active disaster recovery model spread across two Regions. Which two characteristics apply to this model? Choose TWO.",
   "o": [
    "Application servers stay powered off until a failover occurs",
    "It offers the lowest RTO and RPO of the common strategies",
    "It is the cheapest strategy to operate day to day",
    "Recovery always requires restoring data from backups first",
    "Both Regions serve live production traffic at the same time"
   ],
   "a": 1,
   "e": "Multi-site active-active runs full production in multiple Regions simultaneously, giving near-zero RTO and RPO. It is the most expensive strategy precisely because complete capacity runs everywhere all the time.",
   "d": 2,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 173,
   "t": "s3-performance",
   "x": "A team uploads large 50 GB backup files to S3 over unreliable long-distance networks and wants faster, more resilient uploads. Which techniques should they use? Choose TWO.",
   "o": [
    "Switch the bucket to S3 One Zone-Infrequent Access",
    "Enable S3 Transfer Acceleration to route uploads over the edge network",
    "Apply an S3 Object Lock retention policy to the files",
    "Enable requester pays on the destination bucket",
    "Use multipart upload to parallelize and retry parts independently"
   ],
   "a": 1,
   "e": "Multipart upload splits big files into parts uploaded in parallel with per-part retries, and Transfer Acceleration uses edge locations to speed long-distance transfers. Storage class and Object Lock do not affect upload speed.",
   "d": 3,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 174,
   "t": "s3-performance",
   "x": "An application performs frequent reads of the same S3 objects and wants to serve those hot objects with lower latency by adding a caching layer in front of the bucket. Which service does this?",
   "o": [
    "Amazon S3 Select",
    "Amazon CloudFront",
    "S3 Batch Operations",
    "Amazon S3 Storage Lens"
   ],
   "a": 1,
   "e": "CloudFront caches S3 objects at edge locations, cutting latency for repeated reads and offloading the origin. S3 Select filters object contents and Storage Lens is analytics, neither caches.",
   "d": 3
  },
  {
   "id": 175,
   "t": "s3-performance",
   "x": "A data lake query engine repeatedly retrieves only a few columns from large CSV objects in S3. Which feature reduces data scanned and transferred per request MOST cost-effectively?",
   "o": [
    "S3 Select to return only the needed rows and columns",
    "Downloading each full object and filtering in the application",
    "Enabling cross-Region replication of the bucket",
    "Converting the bucket to Intelligent-Tiering"
   ],
   "a": 0,
   "e": "S3 Select pushes filtering into S3 so only the needed subset of an object is returned, cutting transfer and cost. Downloading whole objects moves far more data than necessary.",
   "d": 3
  },
  {
   "id": 176,
   "t": "ebs-volume-types",
   "x": "A relational database on EC2 needs sustained high IOPS with consistent sub-millisecond latency, up to 256,000 IOPS on a single volume. Which EBS volume type fits BEST?",
   "o": [
    "gp2",
    "st1",
    "sc1",
    "io2 Block Express"
   ],
   "a": 3,
   "e": "io2 Block Express delivers up to 256,000 IOPS with sub-millisecond latency for the most demanding databases. st1 and sc1 are throughput-optimized HDDs unsuited to transactional IOPS.",
   "d": 3
  },
  {
   "id": 177,
   "t": "ebs-volume-types",
   "x": "A workload needs a general-purpose SSD volume that provides a baseline 3,000 IOPS and 125 MB/s independent of size, with the option to provision more. Which type meets this at the LOWEST cost?",
   "o": [
    "io2",
    "gp3",
    "gp2",
    "io1"
   ],
   "a": 1,
   "e": "gp3 includes a 3,000 IOPS and 125 MB/s baseline regardless of volume size and lets you provision more independently, at lower cost than provisioned IOPS SSDs. gp2 ties IOPS to volume size.",
   "d": 3
  },
  {
   "id": 178,
   "t": "ebs-volume-types",
   "x": "A big-data job sequentially scans large log files and needs high throughput measured in MB/s rather than random IOPS, at low cost. Which EBS volume type is MOST appropriate?",
   "o": [
    "st1",
    "gp3",
    "io2",
    "sc1"
   ],
   "a": 0,
   "e": "st1 is a throughput-optimized HDD tuned for large sequential streaming workloads at low cost. sc1 is cheaper but aimed at cold, rarely accessed data with lower throughput.",
   "d": 3
  },
  {
   "id": 179,
   "t": "ebs-volume-types",
   "x": "An architect must design EBS storage for a mission-critical database needing high durability plus the ability to attach one volume to several instances in a cluster. Which options apply? Choose TWO.",
   "o": [
    "Disable EBS encryption to reduce write latency",
    "Use io2 for 99.999 percent volume durability",
    "Enable EBS Multi-Attach to share the volume across Nitro instances",
    "Use an sc1 cold HDD volume for the data files",
    "Store the data on an ephemeral instance store volume"
   ],
   "a": 1,
   "e": "io2 offers 99.999 percent durability, and Multi-Attach lets a single io2 volume attach to multiple Nitro instances in one Availability Zone. Instance store is ephemeral and sc1 is too slow for a database.",
   "d": 3,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 180,
   "t": "ebs-volume-types",
   "x": "A team wants to convert an existing gp2 volume to gp3 to cut cost while keeping equivalent performance, with no downtime. What is the recommended approach?",
   "o": [
    "Snapshot the volume, delete it, and restore to a new gp3 volume",
    "Modify the volume type in place to gp3 using Elastic Volumes",
    "Detach the volume and reattach it as gp3",
    "Launch a replacement instance from a gp3-based AMI"
   ],
   "a": 1,
   "e": "Elastic Volumes lets you change the volume type to gp3 while it stays attached and in use, with no downtime. Snapshot-and-restore works but is slower and disruptive.",
   "d": 3
  },
  {
   "id": 181,
   "t": "efs-shared-storage",
   "x": "A fleet of Linux EC2 instances across multiple Availability Zones must share one POSIX file system that scales automatically. Which service meets this with the LEAST operational overhead?",
   "o": [
    "Amazon S3",
    "Amazon EFS",
    "Amazon EBS",
    "Amazon FSx for Windows File Server"
   ],
   "a": 1,
   "e": "EFS is a managed elastic NFS file system mountable by thousands of instances across AZs at once, with no capacity to manage. EBS attaches within a single AZ and lacks native multi-AZ sharing.",
   "d": 3
  },
  {
   "id": 182,
   "t": "efs-shared-storage",
   "x": "A massively parallel analytics workload runs thousands of instances against one EFS file system and needs the highest aggregate throughput, tolerating slightly higher per-operation latency. Which performance mode fits?",
   "o": [
    "General Purpose performance mode",
    "Bursting throughput mode",
    "Elastic throughput mode",
    "Max I/O performance mode"
   ],
   "a": 3,
   "e": "Max I/O scales to higher aggregate throughput and IOPS for highly parallel workloads at the cost of slightly higher latency per operation. General Purpose gives lower latency but caps at fewer operations per second.",
   "d": 3
  },
  {
   "id": 183,
   "t": "efs-shared-storage",
   "x": "A company must make an EFS file system resilient for disaster recovery and cost-optimized for a workload that spans two Regions. Which measures apply? Choose TWO.",
   "o": [
    "Switch the mount targets to iSCSI block access",
    "Keep the primary copy on a single One Zone class for durability",
    "Use the EFS file system as the instance boot volume",
    "Enable EFS Replication to a second Region for DR",
    "Enable Lifecycle Management to tier infrequently accessed data"
   ],
   "a": 3,
   "e": "EFS Replication keeps a read-only copy in another Region for DR, and Lifecycle Management lowers cost by tiering cold data to IA. EFS is file storage, not block, and cannot serve as a boot volume.",
   "d": 3,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 184,
   "t": "efs-shared-storage",
   "x": "An application must control which EC2 instances may mount an EFS file system and must encrypt data in transit. What should a solutions architect implement to meet both requirements?",
   "o": [
    "A security group on the mount targets allowing NFS only from the application subnet",
    "File system encryption at rest with a KMS customer managed key",
    "NFS export rules on the file system restricting mounts to approved client IP addresses",
    "EFS access points with IAM authorization and TLS mount encryption"
   ],
   "a": 3,
   "e": "Access points with IAM authorization govern which principals and instances may use the file system, and mounting with TLS encrypts the NFS traffic in transit. A subnet-scoped security group restricts reachability but leaves traffic unencrypted, KMS encryption at rest protects stored data rather than data in transit, and EFS does not support traditional NFS export rules.",
   "d": 3
  },
  {
   "id": 185,
   "t": "fsx-file-systems",
   "x": "A Windows application requires a fully managed shared file system supporting the SMB protocol, NTFS permissions, and Active Directory integration. Which service is the BEST fit?",
   "o": [
    "Amazon EFS",
    "Amazon S3 File Gateway",
    "Amazon FSx for Windows File Server",
    "Amazon FSx for Lustre"
   ],
   "a": 2,
   "e": "FSx for Windows File Server provides native SMB, NTFS ACLs, and AD integration for Windows workloads. FSx for Lustre targets high-performance Linux compute, and EFS speaks only NFS.",
   "d": 3
  },
  {
   "id": 186,
   "t": "fsx-file-systems",
   "x": "A high-performance computing cluster needs a file system delivering hundreds of GB/s of throughput and sub-millisecond latency, tightly integrated with S3 for input datasets. Which service meets this?",
   "o": [
    "Amazon FSx for Lustre",
    "Amazon EFS",
    "Amazon FSx for NetApp ONTAP",
    "Amazon FSx for Windows File Server"
   ],
   "a": 0,
   "e": "FSx for Lustre is built for HPC and machine learning, offering massive throughput and low latency with native S3 linkage for datasets. Windows File Server and EFS cannot reach Lustre-class performance.",
   "d": 3
  },
  {
   "id": 187,
   "t": "fsx-file-systems",
   "x": "A company migrating from on-premises NetApp storage wants a managed AWS file system supporting NFS, SMB, and iSCSI with snapshots and deduplication. Which service should they choose?",
   "o": [
    "Amazon EFS",
    "Amazon FSx for Lustre",
    "Amazon FSx for NetApp ONTAP",
    "Amazon S3"
   ],
   "a": 2,
   "e": "FSx for NetApp ONTAP offers multi-protocol access over NFS, SMB, and iSCSI plus ONTAP features like snapshots and deduplication, easing NetApp migrations. Lustre and EFS lack multi-protocol and ONTAP capabilities.",
   "d": 3
  },
  {
   "id": 188,
   "t": "fsx-file-systems",
   "x": "An FSx for Lustre file system is linked to an S3 bucket, and the team wants processed results written back to S3 automatically. Which capability provides this?",
   "o": [
    "An S3 lifecycle policy on the linked bucket",
    "Cross-Region replication of the file system",
    "Enabling S3 Transfer Acceleration on the linked bucket",
    "A data repository association that exports changes to S3"
   ],
   "a": 3,
   "e": "FSx for Lustre data repository associations synchronize the file system with S3, importing input data and exporting new or changed results back to the bucket. Transfer Acceleration and lifecycle rules do not sync the file system.",
   "d": 3
  },
  {
   "id": 189,
   "t": "fsx-file-systems",
   "x": "An organization needs a managed Windows file share that is highly available across Availability Zones and cost-optimized for redundant data. Which FSx for Windows features should be used? Choose TWO.",
   "o": [
    "Deploy the file system in a Multi-AZ configuration",
    "Disable automatic backups to save on cost",
    "Use HDD storage for latency-sensitive transactional workloads",
    "Enable data deduplication to reduce storage consumption",
    "Mount the file system over NFS from Linux clients"
   ],
   "a": 0,
   "e": "Multi-AZ FSx for Windows replicates across AZs with automatic failover, and deduplication cuts storage cost for redundant data. FSx for Windows uses SMB rather than NFS, and HDD suits throughput, not latency-sensitive work.",
   "d": 3,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 190,
   "t": "ec2-instance-types",
   "x": "A memory-intensive in-memory database needs the highest RAM-to-vCPU ratio available. Which EC2 instance family is MOST appropriate?",
   "o": [
    "Memory optimized R family",
    "Compute optimized C family",
    "General purpose T family",
    "Storage optimized I family"
   ],
   "a": 0,
   "e": "R-family instances are memory optimized, giving a high RAM-to-vCPU ratio for in-memory databases and caches. C-family favors CPU and I-family favors local NVMe storage.",
   "d": 3
  },
  {
   "id": 191,
   "t": "ec2-instance-types",
   "x": "A batch video-encoding workload is CPU-bound and runs steadily around the clock. Which EC2 instance family delivers the BEST price-performance for this compute-heavy job?",
   "o": [
    "Memory optimized X family",
    "General purpose M family",
    "Storage optimized D family",
    "Compute optimized C family"
   ],
   "a": 3,
   "e": "C-family compute-optimized instances provide high CPU performance per dollar, ideal for encoding and batch compute. X-family and D-family target large memory and dense HDD storage respectively.",
   "d": 3
  },
  {
   "id": 192,
   "t": "ec2-instance-types",
   "x": "A NoSQL database needs very high random IOPS from low-latency storage directly attached to the instance. Which EC2 instance family fits BEST?",
   "o": [
    "Burstable T family",
    "Compute optimized C family",
    "General purpose M family",
    "Storage optimized I family with local NVMe"
   ],
   "a": 3,
   "e": "I-family storage-optimized instances include high-IOPS local NVMe SSDs suited to NoSQL and transactional databases. M, C, and T families lack the dense local NVMe these workloads require.",
   "d": 3
  },
  {
   "id": 193,
   "t": "ec2-instance-types",
   "x": "A development web server sees low, occasional traffic with brief spikes, and the team wants the LOWEST cost while keeping burst capability. Which instance type is MOST cost-effective?",
   "o": [
    "Burstable T family using CPU credits",
    "Accelerated computing P family",
    "Compute optimized C family",
    "Memory optimized R family"
   ],
   "a": 0,
   "e": "T-family burstable instances accrue CPU credits while idle and spend them on spikes, giving low baseline cost for bursty, low-average workloads. R, C, and P families cost more and target sustained or specialized loads.",
   "d": 3
  },
  {
   "id": 194,
   "t": "ec2-instance-types",
   "x": "A machine-learning team needs EC2 capacity to train deep neural networks and, separately, to run cost-efficient inference. Which instance families address these needs? Choose TWO.",
   "o": [
    "General purpose M family for GPU training",
    "Accelerated P family GPUs for model training",
    "Dense storage D family for model training",
    "Burstable T family for both training and inference",
    "Inferentia-based Inf family for low-cost inference"
   ],
   "a": 1,
   "e": "P-family GPU instances accelerate training, while Inf-family instances with AWS Inferentia chips deliver cost-efficient inference. T, D, and M families lack the accelerators these ML tasks require.",
   "d": 3,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 195,
   "t": "elasticache-caching",
   "x": "A read-heavy application repeatedly queries the same RDS rows, and the team wants a managed cache with replication, persistence, and automatic failover. Which service and engine BEST fit?",
   "o": [
    "DynamoDB Accelerator",
    "ElastiCache for Memcached",
    "Amazon CloudFront",
    "ElastiCache for Redis"
   ],
   "a": 3,
   "e": "ElastiCache for Redis supports replication, persistence, and Multi-AZ automatic failover, making it a resilient read cache in front of RDS. Memcached lacks replication and persistence, and DAX only fronts DynamoDB.",
   "d": 3
  },
  {
   "id": 196,
   "t": "elasticache-caching",
   "x": "A team needs a simple, multi-threaded in-memory cache that scales horizontally by adding nodes and requires no persistence or replication. Which ElastiCache engine is MOST suitable?",
   "o": [
    "Amazon RDS Proxy",
    "ElastiCache for Memcached",
    "Amazon DynamoDB",
    "ElastiCache for Redis"
   ],
   "a": 1,
   "e": "Memcached is a simple multi-threaded cache that scales out by adding nodes and suits transient caching without persistence. Redis adds replication and durability features this workload does not need.",
   "d": 3
  },
  {
   "id": 197,
   "t": "elasticache-caching",
   "x": "To cut read latency on a DynamoDB table from single-digit milliseconds to microseconds without changing application API calls, which service should be added?",
   "o": [
    "DynamoDB Accelerator",
    "ElastiCache for Memcached",
    "DynamoDB Streams",
    "DynamoDB global tables"
   ],
   "a": 0,
   "e": "DynamoDB Accelerator is an in-memory cache purpose-built for DynamoDB that delivers microsecond reads through the same DynamoDB API, so the application code stays unchanged. ElastiCache for Memcached can cache reads but forces the application to add its own cache-management logic, while DynamoDB Streams captures item changes and global tables replicate data across Regions; neither reduces read latency.",
   "d": 3
  },
  {
   "id": 198,
   "t": "elasticache-caching",
   "x": "An application uses ElastiCache for Redis and must survive a node failure while also scaling read throughput. Which configurations help? Choose TWO.",
   "o": [
    "Switch the engine to Memcached for better durability",
    "Add read replicas to distribute read traffic",
    "Enable Multi-AZ with automatic failover to a replica",
    "Keep the only copy of session data on a single node",
    "Disable automatic backups to improve read latency"
   ],
   "a": 1,
   "e": "Multi-AZ with automatic failover promotes a replica if the primary fails, and read replicas spread read load. Memcached is not more durable, and a single node is a single point of failure.",
   "d": 3,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 199,
   "t": "cloudfront-cdn",
   "x": "A global website serves static assets from S3 and wants to reduce latency for users worldwide while lowering origin load. Which service should front the bucket?",
   "o": [
    "Amazon Route 53 latency-based routing",
    "AWS Global Accelerator",
    "Amazon CloudFront",
    "Elastic Load Balancing"
   ],
   "a": 2,
   "e": "CloudFront caches content at edge locations near users, cutting latency and offloading requests from the S3 origin. Global Accelerator improves the network path but does not cache content.",
   "d": 3
  },
  {
   "id": 200,
   "t": "cloudfront-cdn",
   "x": "A company must ensure its S3 origin is reachable only through the CloudFront distribution and never directly. Which mechanism enforces this?",
   "o": [
    "An S3 bucket ACL granting public read",
    "A public bucket policy allowing all principals",
    "Origin Access Control on the distribution",
    "A CloudFront signed cookie for viewers"
   ],
   "a": 2,
   "e": "Origin Access Control lets only the CloudFront distribution read the bucket, blocking direct S3 access. Making the bucket public would defeat the restriction entirely.",
   "d": 3
  },
  {
   "id": 201,
   "t": "cloudfront-cdn",
   "x": "A media service must deliver premium video through CloudFront only to authenticated paying users for a limited time window. Which feature provides this restriction?",
   "o": [
    "An S3 lifecycle policy on the origin",
    "CloudFront signed URLs",
    "CloudFront Origin Access Control",
    "A Route 53 failover record"
   ],
   "a": 1,
   "e": "Signed URLs grant time-limited access to specific CloudFront content for authorized viewers. OAC restricts origin access rather than viewer authorization, and lifecycle policies manage storage tiers.",
   "d": 3
  },
  {
   "id": 202,
   "t": "cloudfront-cdn",
   "x": "A team wants to improve both performance and security of a CloudFront-fronted dynamic web application. Which measures apply? Choose TWO.",
   "o": [
    "Serve all content from a single edge location",
    "Disable HTTPS on the distribution to reduce handshake overhead",
    "Attach AWS WAF to the distribution to filter malicious requests",
    "Set the default TTL to zero for every path including static assets",
    "Use a custom origin with connection reuse and tuned cache behaviors"
   ],
   "a": 2,
   "e": "WAF on the distribution blocks malicious traffic, and tuning cache behaviors with connection reuse improves dynamic delivery. Zero TTL everywhere and disabling HTTPS hurt performance and security.",
   "d": 3,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 203,
   "t": "cloudfront-cdn",
   "x": "Viewers in several countries must be blocked from content served by a CloudFront distribution for licensing reasons. Which built-in feature achieves this MOST simply?",
   "o": [
    "CloudFront geographic restrictions",
    "A network ACL on the origin subnet",
    "An IAM policy attached to the distribution",
    "Route 53 geolocation routing to a sink endpoint"
   ],
   "a": 0,
   "e": "CloudFront geographic restrictions allow or deny viewers by country at the edge with no extra infrastructure. Network ACLs and IAM policies do not filter viewers by country.",
   "d": 3
  },
  {
   "id": 204,
   "t": "global-accelerator",
   "x": "A gaming company runs UDP-based servers in multiple Regions and needs low-latency static anycast IP addresses that route players to the nearest healthy endpoint. Which service meets this?",
   "o": [
    "Elastic Load Balancing",
    "Amazon Route 53 weighted routing",
    "AWS Global Accelerator",
    "Amazon CloudFront"
   ],
   "a": 2,
   "e": "Global Accelerator provides static anycast IPs and routes TCP and UDP traffic over the AWS backbone to the closest healthy Regional endpoint, ideal for real-time gaming. CloudFront caches HTTP content and is not for UDP traffic.",
   "d": 3
  },
  {
   "id": 205,
   "t": "global-accelerator",
   "x": "An enterprise wants two fixed IP addresses that stay constant while backend endpoints change across Regions, with fast failover for a non-HTTP application. Which service provides this?",
   "o": [
    "Amazon API Gateway",
    "Amazon CloudFront",
    "AWS Global Accelerator",
    "AWS Direct Connect"
   ],
   "a": 2,
   "e": "Global Accelerator gives two static anycast IPs that stay stable as endpoints are added or removed, with health-based failover for TCP and UDP apps. CloudFront is HTTP-focused and Direct Connect is a private link.",
   "d": 3
  },
  {
   "id": 206,
   "t": "global-accelerator",
   "x": "Compared with routing users through the public internet, how does Global Accelerator improve performance for a latency-sensitive multi-Region API?",
   "o": [
    "It removes the need for load balancers in each Region",
    "It caches API responses at edge locations to avoid origin calls",
    "It enters the AWS backbone at the nearest edge, reducing latency and jitter",
    "It compresses request payloads to reduce transfer size"
   ],
   "a": 2,
   "e": "Global Accelerator ingests traffic at the closest edge and carries it over the congestion-controlled AWS backbone, lowering latency and jitter. It does not cache responses or replace Regional load balancers.",
   "d": 3
  },
  {
   "id": 207,
   "t": "global-accelerator",
   "x": "An architect is deciding between CloudFront and Global Accelerator for different requirements. Which statements correctly guide the choice? Choose TWO.",
   "o": [
    "Both services require the origin to reside in a single Region",
    "Global Accelerator caches static objects at edge locations",
    "CloudFront suits cacheable HTTP and HTTPS content served from edge caches",
    "Global Accelerator suits non-HTTP TCP and UDP workloads needing static IPs",
    "CloudFront provides two static anycast IP addresses by default"
   ],
   "a": 2,
   "e": "Global Accelerator is best for non-HTTP protocols and static IP needs, while CloudFront excels at caching web content at the edge. Global Accelerator does not cache, and CloudFront does not hand out static anycast IPs.",
   "d": 3,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 208,
   "t": "rds-read-replicas",
   "x": "A company runs an Amazon RDS for PostgreSQL database that serves a transactional web application. A new analytics team runs heavy read-only reporting queries that slow down customer transactions. Which solution offloads the reporting workload MOST cost-effectively?",
   "o": [
    "Create a read replica and point the reporting queries at its endpoint",
    "Take an automated snapshot and query it directly with Amazon Athena",
    "Enable a Multi-AZ deployment and send reporting queries to the standby",
    "Increase the primary instance to a larger instance class each morning"
   ],
   "a": 0,
   "e": "Read replicas serve read-only traffic from a separate instance, isolating reporting load from the primary. A Multi-AZ standby cannot serve reads, and snapshots are not directly queryable.",
   "d": 3
  },
  {
   "id": 209,
   "t": "rds-read-replicas",
   "x": "A solutions architect is documenting how Amazon RDS read replicas behave for a design review. Which TWO statements about RDS read replicas are correct? Choose TWO.",
   "o": [
    "A read replica fails over automatically to become the primary in an outage",
    "Read replicas provide synchronous, zero-lag copies of the primary",
    "A read replica can be promoted to a standalone writable database",
    "Read replicas cannot be created in a different AWS Region",
    "Read replicas use asynchronous replication and can lag the primary"
   ],
   "a": 2,
   "e": "Read replicas replicate asynchronously and can be promoted to standalone databases. Automatic failover is a Multi-AZ feature, replication is not zero-lag, and cross-Region replicas are supported.",
   "d": 3,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 210,
   "t": "rds-read-replicas",
   "x": "A retailer requires its Amazon RDS for MySQL database to fail over automatically to another Availability Zone within minutes if the primary instance fails. Which configuration meets this requirement?",
   "o": [
    "Enable storage auto scaling on the primary instance",
    "Deploy the database in a Multi-AZ configuration",
    "Create three read replicas in different Availability Zones",
    "Schedule automated snapshots every five minutes"
   ],
   "a": 1,
   "e": "Multi-AZ keeps a synchronous standby in another AZ and fails over automatically. Read replicas are for read scaling and need manual promotion, and snapshots do not provide automatic failover.",
   "d": 3
  },
  {
   "id": 211,
   "t": "rds-read-replicas",
   "x": "A company's Amazon RDS database is in us-east-1, but a growing user base in Europe experiences high read latency. Leadership wants European users to read from a local copy without changing the write path. Which approach is BEST?",
   "o": [
    "Enable Multi-AZ so a standby instance exists in Europe",
    "Move the primary database instance to eu-west-1",
    "Create a cross-Region read replica in eu-west-1 for European reads",
    "Place an Amazon RDS Proxy in front of the primary database"
   ],
   "a": 2,
   "e": "A cross-Region read replica puts a readable copy near European users while writes continue to the primary. Multi-AZ standbys stay in one Region and RDS Proxy only pools connections.",
   "d": 3
  },
  {
   "id": 212,
   "t": "rds-read-replicas",
   "x": "An application on Amazon Aurora MySQL sees unpredictable spikes in read traffic during flash sales. The team wants the number of read-serving instances to grow and shrink automatically with load. Which feature should they use?",
   "o": [
    "Aurora Auto Scaling for Aurora Replicas",
    "Manual creation of read replicas before each sale",
    "Aurora Global Database with a secondary Region",
    "A single larger Aurora writer instance"
   ],
   "a": 0,
   "e": "Aurora Auto Scaling adds and removes Aurora Replicas automatically based on a target metric such as CPU. A larger writer does not scale reads horizontally, and Global Database targets cross-Region DR.",
   "d": 3
  },
  {
   "id": 213,
   "t": "dynamodb-performance",
   "x": "A gaming leaderboard on Amazon DynamoDB receives millions of repeated reads of the same popular items, and the team wants microsecond read latency without rewriting application logic. Which solution meets this need with the LEAST effort?",
   "o": [
    "Add an Amazon DynamoDB Accelerator cluster in front of the table",
    "Enable DynamoDB Streams and cache the results in the application",
    "Increase the table's provisioned read capacity units tenfold",
    "Move the hot items into Amazon ElastiCache for Memcached"
   ],
   "a": 0,
   "e": "DAX is a managed in-memory cache for DynamoDB that delivers microsecond reads and is API-compatible, so no rewrite is needed. Raising RCUs does not reach microsecond latency, and the other options require custom caching code.",
   "d": 3
  },
  {
   "id": 214,
   "t": "dynamodb-performance",
   "x": "A DynamoDB table storing sensor data uses the current date as its partition key, so all writes for a given day hit one partition and cause throttling. Which change BEST resolves the throttling?",
   "o": [
    "Raise the write capacity units on the existing table",
    "Add a local secondary index on the timestamp attribute",
    "Switch the table to on-demand capacity mode only",
    "Choose a high-cardinality partition key such as the sensor ID"
   ],
   "a": 3,
   "e": "A hot partition is fixed by picking a high-cardinality partition key so writes spread across partitions. On-demand and more WCUs do not help if traffic still concentrates on one key, and an LSI shares the same partition key.",
   "d": 3
  },
  {
   "id": 215,
   "t": "dynamodb-performance",
   "x": "A company needs a DynamoDB deployment that supports low-latency reads and writes for users spread across multiple AWS Regions. Which TWO characteristics describe DynamoDB global tables? Choose TWO.",
   "o": [
    "They store the table data exclusively in Amazon S3 for cross-Region access",
    "They provide multi-Region, active-active replication of table data",
    "They replicate data only to Availability Zones inside a single Region",
    "They use last-writer-wins to resolve conflicting concurrent writes",
    "They require a manual promotion step to enable writes in a second Region"
   ],
   "a": 1,
   "e": "Global tables give multi-Region active-active replication and resolve conflicts with last-writer-wins. No manual promotion is required, and replication spans Regions rather than staying in one.",
   "d": 3,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 216,
   "t": "dynamodb-performance",
   "x": "A team expects highly variable and unpredictable request rates on a new DynamoDB table and wants to avoid throttling without over-provisioning. Which TWO capacity approaches are appropriate? Choose TWO.",
   "o": [
    "Purchase reserved capacity sized to the traffic peak",
    "Disable request metering and rely only on burst capacity",
    "Use provisioned capacity mode with auto scaling",
    "Set a very high fixed provisioned throughput and never lower it",
    "Use on-demand capacity mode"
   ],
   "a": 2,
   "e": "On-demand mode and provisioned mode with auto scaling both adapt to variable traffic while limiting waste. A fixed high setting over-provisions, reserved capacity assumes steady usage, and burst capacity alone cannot absorb sustained spikes.",
   "d": 3,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 217,
   "t": "dynamodb-performance",
   "x": "A DynamoDB table stores session records that are only useful for 24 hours, but old records accumulate and raise storage costs. Which native feature removes expired items automatically at no extra request cost?",
   "o": [
    "A scheduled Lambda function that scans and deletes items",
    "Time to Live on an expiry timestamp attribute",
    "A global secondary index on the creation time",
    "DynamoDB Streams paired with a deletion consumer"
   ],
   "a": 1,
   "e": "TTL deletes expired items automatically based on a timestamp attribute without consuming write capacity. A scan-and-delete Lambda consumes capacity, and streams or indexes do not delete data on their own.",
   "d": 3
  },
  {
   "id": 218,
   "t": "redshift-warehouse",
   "x": "A company wants to run complex analytical SQL queries and joins across petabytes of historical sales data using standard business-intelligence tools. Which AWS service is PURPOSE-BUILT for this data warehousing workload?",
   "o": [
    "Amazon ElastiCache for Redis",
    "Amazon RDS for PostgreSQL",
    "Amazon Redshift",
    "Amazon DynamoDB"
   ],
   "a": 2,
   "e": "Redshift is a columnar, massively parallel data warehouse designed for petabyte-scale analytical queries. DynamoDB is a key-value store, RDS targets transactions, and ElastiCache is an in-memory cache.",
   "d": 3
  },
  {
   "id": 219,
   "t": "redshift-warehouse",
   "x": "A data team using Amazon Redshift wants to join warehouse tables with large volumes of infrequently accessed data kept in Amazon S3, without first loading that S3 data into the cluster. Which capability enables this?",
   "o": [
    "Redshift Spectrum",
    "Redshift concurrency scaling",
    "Redshift workload management queues",
    "Redshift cross-Region snapshots"
   ],
   "a": 0,
   "e": "Redshift Spectrum queries data directly in S3 and joins it with warehouse tables, avoiding a load step. Concurrency scaling adds query capacity, and WLM and snapshots do not query external S3 data.",
   "d": 3
  },
  {
   "id": 220,
   "t": "redshift-warehouse",
   "x": "During month-end close, an Amazon Redshift cluster faces a surge of concurrent user queries that queue and slow down. The team wants extra query capacity added automatically only during these bursts. Which feature addresses this?",
   "o": [
    "Cross-Region snapshot replication",
    "A larger single leader node",
    "Concurrency scaling",
    "Elastic resize to more nodes permanently"
   ],
   "a": 2,
   "e": "Concurrency scaling automatically adds transient capacity for bursts of concurrent queries and removes it afterward. Permanent resizing wastes capacity off-peak, and snapshots are for backup and DR.",
   "d": 3
  },
  {
   "id": 221,
   "t": "redshift-warehouse",
   "x": "A company runs an Amazon Redshift cluster only during business hours and wants to cut costs when it sits idle. Which TWO actions help lower Redshift spending? Choose TWO.",
   "o": [
    "Disable automated snapshots to reduce compute charges",
    "Enable a public IP address on every compute node",
    "Purchase reserved nodes for the steady baseline capacity",
    "Store all query results permanently on the leader node",
    "Pause the cluster on nights and weekends when it is idle"
   ],
   "a": 2,
   "e": "Pausing an idle cluster stops compute billing, and reserved nodes cut the rate for steady usage. Storing results on the leader node, public IPs, and disabling snapshots do not reduce cost, and the last harms durability.",
   "d": 3,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 222,
   "t": "redshift-warehouse",
   "x": "An engineer needs to bulk load hundreds of gigabytes of CSV files from Amazon S3 into an Amazon Redshift table as fast as possible. Which method is the recommended, most efficient approach?",
   "o": [
    "Query the files with Athena and export one row at a time",
    "Run individual INSERT statements for each row",
    "Use the Redshift COPY command to load the files in parallel",
    "Restore the files from an RDS snapshot into Redshift"
   ],
   "a": 2,
   "e": "The COPY command loads data from S3 in parallel across slices and is the recommended high-throughput method. Row-by-row INSERTs are slow, and the other options are unrelated to bulk loading.",
   "d": 3
  },
  {
   "id": 223,
   "t": "kinesis-streaming",
   "x": "A company must ingest a continuous stream of clickstream events in real time and let several independent applications process the same records, with the ability to replay data from the last 24 hours. Which service fits BEST?",
   "o": [
    "AWS Batch",
    "An Amazon SQS standard queue",
    "An Amazon SNS topic",
    "Amazon Kinesis Data Streams"
   ],
   "a": 3,
   "e": "Kinesis Data Streams retains records for replay and lets multiple consumers read the same stream independently. SQS deletes messages after consumption, SNS is pub/sub without replay, and Batch runs batch jobs.",
   "d": 3
  },
  {
   "id": 224,
   "t": "kinesis-streaming",
   "x": "A team wants to deliver streaming log data into Amazon S3 and Amazon Redshift with automatic buffering, no servers to manage, and no consumer code to maintain. Which service meets this with the LEAST operational overhead?",
   "o": [
    "Amazon MSK with a Kafka Connect cluster",
    "Amazon EC2 instances running a polling script",
    "Amazon Kinesis Data Streams with a custom consumer",
    "Amazon Data Firehose"
   ],
   "a": 3,
   "e": "Amazon Data Firehose is fully managed and delivers streaming data to destinations like S3 and Redshift with built-in buffering and no code. The other options require managing consumers, clusters, or servers.",
   "d": 3
  },
  {
   "id": 225,
   "t": "kinesis-streaming",
   "x": "A producer application is hitting the write throughput limit of an Amazon Kinesis Data Streams stream. Which TWO actions help increase the stream's write capacity? Choose TWO.",
   "o": [
    "Use a high-cardinality partition key to spread records evenly",
    "Enable server-side encryption on the stream",
    "Route every record through one partition key value",
    "Increase the number of shards in the stream",
    "Lengthen the data retention period to 168 hours"
   ],
   "a": 0,
   "e": "Write throughput scales with shard count, and a high-cardinality partition key spreads records so no shard is overloaded. Retention and encryption do not add throughput, and one partition key concentrates load.",
   "d": 3,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 226,
   "t": "kinesis-streaming",
   "x": "A solutions architect is comparing Amazon Kinesis Data Streams with an Amazon SQS standard queue for a new pipeline. Which TWO capabilities are specific to Kinesis Data Streams? Choose TWO.",
   "o": [
    "Each message is deleted immediately after one consumer reads it",
    "It can only ever have one consumer at a time",
    "Multiple consumers can read the same records independently",
    "Records can be re-read within the retention window for replay",
    "It guarantees that records within a partition have no ordering"
   ],
   "a": 2,
   "e": "Kinesis supports multiple independent consumers and replay within the retention window. An SQS standard queue deletes a message after consumption and offers no replay, which is the opposite behavior.",
   "d": 3,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 227,
   "t": "kinesis-streaming",
   "x": "A pipeline uses Amazon Data Firehose to land streaming JSON records in Amazon S3, but analysts want the data stored in a columnar layout to reduce Athena scan costs. Which built-in Firehose capability achieves this?",
   "o": [
    "An SQS dead-letter queue on the delivery stream",
    "A Kinesis Client Library checkpointing consumer",
    "Record format conversion from JSON to Apache Parquet",
    "Cross-Region replication of the delivery stream"
   ],
   "a": 2,
   "e": "Firehose can convert incoming JSON records to columnar Parquet before writing to S3, cutting Athena scan costs. The other options are unrelated to Firehose format conversion.",
   "d": 3
  },
  {
   "id": 228,
   "t": "glue-athena-lake",
   "x": "A company keeps large volumes of log files in Amazon S3 and wants analysts to run ad hoc SQL queries directly against them without provisioning or managing any servers. Which service meets this requirement?",
   "o": [
    "Amazon RDS for MySQL",
    "Amazon Redshift on dense compute nodes",
    "Amazon EMR with a persistent cluster",
    "Amazon Athena"
   ],
   "a": 3,
   "e": "Athena is serverless and runs SQL directly on data in S3 with no infrastructure to manage. Redshift and EMR require provisioned clusters, and RDS is a relational database, not an S3 query engine.",
   "d": 3
  },
  {
   "id": 229,
   "t": "glue-athena-lake",
   "x": "Before analysts can query files in an Amazon S3 data lake with Amazon Athena, the team needs a metadata catalog with table definitions inferred automatically from the files. Which AWS service provides this?",
   "o": [
    "An AWS Glue crawler populating the Glue Data Catalog",
    "An Amazon DynamoDB table listing the file names",
    "An Amazon RDS instance holding the schema definitions",
    "An AWS Config rule scanning the bucket"
   ],
   "a": 0,
   "e": "A Glue crawler infers schema and populates the Glue Data Catalog, which Athena uses as its table metadata store. RDS, DynamoDB, and Config do not provide Athena's catalog.",
   "d": 3
  },
  {
   "id": 230,
   "t": "glue-athena-lake",
   "x": "A data engineering team needs to run serverless, Apache Spark based extract-transform-load jobs to clean and join datasets without managing any cluster infrastructure. Which service is designed for this?",
   "o": [
    "Amazon Kinesis Data Streams",
    "AWS Glue",
    "AWS Data Pipeline on EC2",
    "Amazon Athena"
   ],
   "a": 1,
   "e": "AWS Glue provides serverless Spark ETL jobs with no cluster to manage. Athena is for interactive queries, Data Pipeline orchestrates managed resources, and Kinesis handles streaming ingestion.",
   "d": 3
  },
  {
   "id": 231,
   "t": "glue-athena-lake",
   "x": "A company wants to reduce the amount of data Amazon Athena scans per query to lower costs on its S3 data lake. Which TWO techniques achieve this? Choose TWO.",
   "o": [
    "Store every dataset as a single uncompressed CSV file",
    "Query the raw data through a NAT gateway to filter rows",
    "Enable S3 Transfer Acceleration on the source bucket",
    "Store the data in a columnar format such as Apache Parquet",
    "Partition the data in S3 by frequently filtered columns like date"
   ],
   "a": 3,
   "e": "Columnar formats let Athena read only needed columns, and partitioning lets it skip irrelevant data, both cutting scanned bytes. Single uncompressed CSVs increase scans, and NAT gateways and Transfer Acceleration do not reduce scanned data.",
   "d": 3,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 232,
   "t": "glue-athena-lake",
   "x": "An organization storing analytics datasets in Amazon S3 needs to grant analysts fine-grained, column-level access permissions centrally across Athena and Redshift Spectrum. Which service centralizes this permission management?",
   "o": [
    "AWS IAM",
    "AWS Lake Formation",
    "AWS Glue Data Catalog resource policies",
    "Amazon S3 bucket policies"
   ],
   "a": 1,
   "e": "Lake Formation centrally manages fine-grained, column- and row-level permissions on tables queried through Athena and Redshift Spectrum. AWS Glue Data Catalog resource policies only control catalog access down to databases and tables, and AWS IAM and S3 bucket policies operate at the API, bucket, or object level, so none of them can restrict individual columns.",
   "d": 3
  },
  {
   "id": 233,
   "t": "direct-connect-vpn",
   "x": "A company transfers large data volumes between its on-premises data center and AWS and needs consistent, predictable network performance that is not affected by public internet congestion. Which connectivity option is BEST?",
   "o": [
    "An internet gateway with a public subnet",
    "A Site-to-Site VPN over the public internet",
    "AWS Direct Connect",
    "A NAT gateway inside the VPC"
   ],
   "a": 2,
   "e": "Direct Connect provides a dedicated, private physical link with consistent bandwidth and latency, unaffected by internet congestion. A VPN traverses the public internet, and gateways do not provide dedicated connectivity.",
   "d": 3
  },
  {
   "id": 234,
   "t": "direct-connect-vpn",
   "x": "A small business needs an encrypted connection between its office network and an Amazon VPC that can be running within hours and can tolerate variable internet latency. Which solution fits MOST cost-effectively?",
   "o": [
    "AWS Direct Connect with a dedicated 10 Gbps port",
    "AWS Direct Connect with a hosted 1 Gbps connection",
    "An AWS Site-to-Site VPN",
    "AWS PrivateLink pointed at the office network"
   ],
   "a": 2,
   "e": "A Site-to-Site VPN sets up quickly over the existing internet with IPsec encryption at low cost. Direct Connect requires provisioning a physical circuit that takes weeks, and PrivateLink exposes services rather than site links.",
   "d": 3
  },
  {
   "id": 235,
   "t": "direct-connect-vpn",
   "x": "A company relies on a single AWS Direct Connect connection and wants to improve the resilience of its hybrid connectivity. Which TWO approaches increase availability? Choose TWO.",
   "o": [
    "Attach additional Elastic IP addresses to the virtual private gateway",
    "Replace the connection with a public internet gateway",
    "Route all traffic through a single NAT gateway for redundancy",
    "Provision a second Direct Connect connection at a different location",
    "Configure a Site-to-Site VPN as a backup path to the VPC"
   ],
   "a": 3,
   "e": "A second Direct Connect link and a backup Site-to-Site VPN both remove the single point of failure in hybrid connectivity. NAT gateways, internet gateways, and Elastic IPs do not provide Direct Connect redundancy.",
   "d": 3,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 236,
   "t": "direct-connect-vpn",
   "x": "A regulated company uses AWS Direct Connect but must also encrypt data in transit between its data center and AWS. Which solution adds encryption while keeping the private connection?",
   "o": [
    "Place a NAT gateway between the router and the VPC",
    "Run an IPsec Site-to-Site VPN over the Direct Connect link",
    "Rely on Direct Connect, which encrypts all traffic by default",
    "Enable S3 server-side encryption on the destination bucket"
   ],
   "a": 1,
   "e": "Direct Connect is private but not encrypted, so running an IPsec VPN over it adds encryption in transit. Server-side encryption protects data at rest, and a NAT gateway does not encrypt traffic.",
   "d": 3
  },
  {
   "id": 237,
   "t": "direct-connect-vpn",
   "x": "An enterprise has dozens of VPCs and several on-premises sites joined by VPN, and managing the mesh of connections has become complex. Which service centralizes and simplifies this connectivity?",
   "o": [
    "VPC peering between every pair of VPCs",
    "AWS Transit Gateway",
    "An Application Load Balancer in each VPC",
    "A separate internet gateway for each VPC"
   ],
   "a": 1,
   "e": "Transit Gateway acts as a hub that connects many VPCs and on-premises VPNs through one central point, replacing a complex peering mesh. Full-mesh peering scales poorly, and gateways or load balancers do not interconnect networks.",
   "d": 3
  },
  {
   "id": 238,
   "t": "direct-connect-vpn",
   "x": "A company with an AWS Direct Connect connection wants to reach Amazon S3 public endpoints over the private circuit instead of the public internet. Which Direct Connect construct should it configure?",
   "o": [
    "A NAT instance in a public subnet",
    "A VPC gateway endpoint for DynamoDB",
    "A public virtual interface",
    "A private virtual interface to the VPC"
   ],
   "a": 2,
   "e": "A public virtual interface lets Direct Connect reach AWS public service endpoints such as S3 over the dedicated link. A private virtual interface reaches VPC resources, and NAT instances and gateway endpoints are unrelated to Direct Connect interfaces.",
   "d": 3
  },
  {
   "id": 239,
   "t": "datasync-migration",
   "x": "A company wants to migrate 200 TB of files from an on-premises NFS server to Amazon S3 over its network connection, with automated, scheduled, and validated transfers. Which service is purpose-built for this?",
   "o": [
    "AWS Snowball Edge shipped to AWS",
    "Manual uploads through the S3 console",
    "Amazon S3 Transfer Acceleration by itself",
    "AWS DataSync"
   ],
   "a": 3,
   "e": "DataSync is designed for automated, scheduled, and validated online transfers from NFS and SMB sources to AWS storage. Snowball is offline, console uploads are manual, and Transfer Acceleration only speeds uploads.",
   "d": 3
  },
  {
   "id": 240,
   "t": "datasync-migration",
   "x": "A firm must move 500 TB to AWS within two weeks but has only a slow, low-bandwidth internet link that would take months to transfer online. Which approach meets the deadline?",
   "o": [
    "Set up a Site-to-Site VPN and copy the files across",
    "Enable S3 Transfer Acceleration for the uploads",
    "Use AWS DataSync over the existing internet link",
    "Ship the data using AWS Snowball Edge devices"
   ],
   "a": 3,
   "e": "When bandwidth is too limited for an online transfer to finish in time, Snowball Edge physically ships the data to AWS. DataSync, Transfer Acceleration, and VPN all still depend on the slow link.",
   "d": 3
  },
  {
   "id": 241,
   "t": "datasync-migration",
   "x": "A solutions architect is evaluating AWS DataSync for an upcoming data migration project. Which TWO statements about DataSync are accurate? Choose TWO.",
   "o": [
    "It cannot preserve file metadata during the copy",
    "It requires shipping physical appliances back to AWS to finish",
    "It performs data integrity validation during the transfer",
    "It can copy data between on-premises storage and AWS storage services",
    "It only supports transfers between two Amazon S3 buckets"
   ],
   "a": 2,
   "e": "DataSync moves data between on-premises and AWS storage and validates integrity as it transfers. It is an online service that ships no appliances, supports many source and destination types, and preserves metadata.",
   "d": 3,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 242,
   "t": "datasync-migration",
   "x": "An enterprise is moving user file shares from an on-premises Windows SMB server to Amazon FSx for Windows File Server and needs the transfer to preserve NTFS permissions. Which service handles this migration?",
   "o": [
    "AWS DataSync",
    "AWS Database Migration Service",
    "AWS Glue",
    "Amazon Data Firehose"
   ],
   "a": 0,
   "e": "DataSync transfers SMB file shares to FSx for Windows and preserves file metadata such as NTFS permissions. DMS migrates databases, Firehose streams data, and Glue performs ETL, none of which move SMB file shares.",
   "d": 3
  },
  {
   "id": 243,
   "t": "datasync-migration",
   "x": "A company wants to migrate an on-premises Oracle database to Amazon RDS with minimal downtime by continuously replicating changes during the cutover. Which service is intended for this database migration?",
   "o": [
    "Amazon S3 Transfer Acceleration",
    "AWS Database Migration Service",
    "AWS Snowcone",
    "AWS DataSync"
   ],
   "a": 1,
   "e": "AWS DMS migrates databases and supports ongoing change replication for minimal-downtime cutovers. DataSync moves files rather than live databases, and the other options are unrelated to database replication.",
   "d": 3
  },
  {
   "id": 244,
   "t": "s3-storage-classes",
   "x": "A company stores financial records that auditors read only a few times a year but must retrieve within milliseconds when a review is requested. Storage cost is the priority. Which S3 storage class meets the requirement MOST cost-effectively?",
   "o": [
    "S3 Glacier Flexible Retrieval",
    "S3 Glacier Deep Archive",
    "S3 Standard",
    "S3 Standard-Infrequent Access"
   ],
   "a": 3,
   "e": "Standard-IA gives millisecond retrieval at a lower per-GB price than Standard for data read only occasionally. The Glacier classes add retrieval latency that is unsuitable for immediate audit access.",
   "d": 4
  },
  {
   "id": 245,
   "t": "s3-storage-classes",
   "x": "A media team keeps one copy of rendered thumbnails that can be regenerated if lost, and all workloads run in a single Region. Which class minimizes storage cost while accepting reduced resilience against the loss of an Availability Zone?",
   "o": [
    "S3 Standard-Infrequent Access",
    "S3 One Zone-Infrequent Access",
    "S3 Glacier Instant Retrieval",
    "S3 Standard"
   ],
   "a": 1,
   "e": "One Zone-IA keeps data in a single Availability Zone at a lower price, which suits easily reproducible objects. The other classes replicate across three Availability Zones and cost more.",
   "d": 4
  },
  {
   "id": 246,
   "t": "s3-storage-classes",
   "x": "Regulatory data must be retained for seven years and is almost never read. The team wants the lowest possible storage price and can tolerate a retrieval time of up to 12 hours. Which class fits best?",
   "o": [
    "S3 Glacier Flexible Retrieval",
    "S3 Glacier Deep Archive",
    "S3 Glacier Instant Retrieval",
    "S3 Standard-Infrequent Access"
   ],
   "a": 1,
   "e": "Deep Archive is the cheapest S3 storage with retrievals that complete in up to 12 hours. Flexible and Instant Retrieval cost more per GB, and Standard-IA is far pricier for cold data.",
   "d": 4
  },
  {
   "id": 247,
   "t": "s3-storage-classes",
   "x": "An engineer sees unexpectedly high charges after repeatedly writing objects to S3 Standard-Infrequent Access and deleting them after only a few days. What BEST explains the extra cost?",
   "o": [
    "Standard-IA enforces a 30-day minimum storage duration per object",
    "Standard-IA applies no minimum storage charge to objects",
    "Standard-IA prevents you from storing objects smaller than 128 KB",
    "Standard-IA charges a higher per-GB storage rate than S3 Standard"
   ],
   "a": 0,
   "e": "Standard-IA bills a 30-day minimum duration plus a retrieval fee, so short-lived objects are costly. Its per-GB storage rate is lower than Standard, not higher.",
   "d": 4
  },
  {
   "id": 248,
   "t": "s3-storage-classes",
   "x": "A research group archives large datasets accessed once or twice a year and can tolerate retrieval times ranging from minutes to several hours. Which class offers low archive pricing with expedited and bulk retrieval options?",
   "o": [
    "S3 Standard-Infrequent Access",
    "S3 Glacier Deep Archive",
    "S3 Glacier Instant Retrieval",
    "S3 Glacier Flexible Retrieval"
   ],
   "a": 3,
   "e": "Glacier Flexible Retrieval provides expedited, standard, and bulk retrievals from minutes to hours at low storage cost. Instant Retrieval costs more per GB and Deep Archive can take up to 12 hours.",
   "d": 4
  },
  {
   "id": 249,
   "t": "s3-storage-classes",
   "x": "An architect is evaluating S3 One Zone-Infrequent Access for a batch of reproducible derived files. Which TWO statements about this storage class are correct? Choose TWO.",
   "o": [
    "It provides the lowest storage price of all S3 classes",
    "It costs less than S3 Standard-Infrequent Access",
    "It cannot be used as a lifecycle transition target",
    "It replicates objects across three Availability Zones",
    "It stores data in a single Availability Zone"
   ],
   "a": 1,
   "e": "One Zone-IA keeps a single copy in one Availability Zone at roughly 20 percent less than Standard-IA. It is not multi-AZ, is not the cheapest class overall, and is a valid lifecycle target.",
   "d": 4,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 250,
   "t": "s3-storage-classes",
   "x": "A team is comparing the archive tiers in Amazon S3 for a mix of rarely and never-read data. Which TWO statements about the S3 Glacier storage classes are correct? Choose TWO.",
   "o": [
    "Glacier Deep Archive is the lowest-cost class and retrieves in hours",
    "Glacier Deep Archive supports real-time random reads",
    "Glacier Instant Retrieval provides millisecond access to rarely used data",
    "Glacier Flexible Retrieval always returns data in milliseconds",
    "Glacier Instant Retrieval is the most expensive S3 class per GB"
   ],
   "a": 0,
   "e": "Instant Retrieval gives millisecond access at archive pricing, and Deep Archive is the cheapest class with multi-hour retrieval. Flexible Retrieval takes minutes to hours and Deep Archive is not real-time.",
   "d": 4,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 251,
   "t": "s3-lifecycle-intelligent-tiering",
   "x": "A team wants objects moved automatically from S3 Standard to a cheaper class after 30 days and deleted after one year, with no changes to the application. Which capability achieves this?",
   "o": [
    "S3 Cross-Region Replication",
    "S3 Intelligent-Tiering",
    "S3 Object Lock",
    "An S3 Lifecycle configuration"
   ],
   "a": 3,
   "e": "A Lifecycle configuration defines transition and expiration actions based on object age. Intelligent-Tiering moves data by access pattern but does not delete, and Object Lock and Replication serve other purposes.",
   "d": 4
  },
  {
   "id": 252,
   "t": "s3-lifecycle-intelligent-tiering",
   "x": "A dataset has unpredictable access that shifts over time, and the team wants to cut cost automatically with no retrieval charges as objects move between frequent and infrequent tiers. Which option needs the LEAST management effort?",
   "o": [
    "S3 Standard-Infrequent Access with scheduled lifecycle rules",
    "Manual transitions driven by S3 Batch Operations",
    "S3 Intelligent-Tiering",
    "S3 One Zone-Infrequent Access"
   ],
   "a": 2,
   "e": "Intelligent-Tiering monitors access and shifts objects between tiers with no retrieval fees. The alternatives require predicting access patterns or ongoing manual work and can add retrieval costs.",
   "d": 4
  },
  {
   "id": 253,
   "t": "s3-lifecycle-intelligent-tiering",
   "x": "A lifecycle rule should transition objects to S3 Glacier Deep Archive, but only for objects that carry a specific tag rather than the whole bucket. How can the rule be scoped?",
   "o": [
    "Enable Intelligent-Tiering across the entire bucket",
    "Use a bucket policy to move the tagged objects",
    "Apply a lifecycle rule filtered by object tag",
    "Configure replication with a tag-based filter"
   ],
   "a": 2,
   "e": "Lifecycle rules can be filtered by prefix or object tag, so only matching objects transition. Bucket policies and replication do not change an object's storage class.",
   "d": 4
  },
  {
   "id": 254,
   "t": "s3-lifecycle-intelligent-tiering",
   "x": "A versioning-enabled bucket should have its noncurrent object versions removed 90 days after they become noncurrent. Which lifecycle action accomplishes this?",
   "o": [
    "An abort incomplete multipart upload action",
    "A current version transition action",
    "A noncurrent version expiration action",
    "An Intelligent-Tiering archive configuration"
   ],
   "a": 2,
   "e": "Lifecycle supports expiring noncurrent versions after a set number of days. Transition actions change storage class rather than delete, and the multipart action cleans up unfinished uploads.",
   "d": 4
  },
  {
   "id": 255,
   "t": "s3-lifecycle-intelligent-tiering",
   "x": "An architect is documenting how S3 Intelligent-Tiering behaves before enabling it across a large bucket. Which TWO statements are accurate? Choose TWO.",
   "o": [
    "It can move objects to archive tiers after long inactivity",
    "It stores data in only one Availability Zone",
    "It charges a retrieval fee each time an object is read",
    "It charges a small monthly monitoring and automation fee per object",
    "It requires you to define object age transition rules"
   ],
   "a": 0,
   "e": "Intelligent-Tiering adds a per-object monitoring fee and can shift cold objects to optional archive tiers. It has no retrieval fees, needs no age-based rules, and stores data across three Availability Zones.",
   "d": 4,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 256,
   "t": "s3-lifecycle-intelligent-tiering",
   "x": "A team is reviewing which operations an S3 Lifecycle configuration can carry out on stored objects. Which TWO actions can a lifecycle rule perform? Choose TWO.",
   "o": [
    "Compress objects to shrink their storage footprint",
    "Transition objects to a different storage class after a set time",
    "Expire and delete objects after a set number of days",
    "Replicate objects to a bucket in another Region",
    "Encrypt objects with a new KMS key on a schedule"
   ],
   "a": 1,
   "e": "Lifecycle rules transition objects between classes and expire them by age. Encryption, cross-Region replication, and compression are handled by other S3 features, not by lifecycle rules.",
   "d": 4,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 257,
   "t": "storage-gateway-hybrid",
   "x": "An on-premises application must read and write files over NFS or SMB while the data is stored durably as objects in Amazon S3. Which AWS Storage Gateway type fits?",
   "o": [
    "Tape Gateway",
    "Volume Gateway in cached mode",
    "Amazon S3 File Gateway",
    "Volume Gateway in stored mode"
   ],
   "a": 2,
   "e": "S3 File Gateway presents NFS and SMB file shares while persisting files as native S3 objects. Volume Gateway offers block iSCSI volumes and Tape Gateway emulates a tape library.",
   "d": 4
  },
  {
   "id": 258,
   "t": "storage-gateway-hybrid",
   "x": "A company wants to retire its physical backup tapes while keeping its existing backup software, archiving instead to Amazon S3 and Glacier through a virtual tape library over iSCSI. Which gateway type is appropriate?",
   "o": [
    "Amazon FSx File Gateway",
    "Amazon S3 File Gateway",
    "Tape Gateway",
    "Volume Gateway in cached mode"
   ],
   "a": 2,
   "e": "Tape Gateway emulates a virtual tape library over iSCSI so existing backup applications can archive to S3 and Glacier. File and Volume gateways do not present a tape interface.",
   "d": 4
  },
  {
   "id": 259,
   "t": "storage-gateway-hybrid",
   "x": "An application needs low-latency access to frequently used block data on premises while the complete dataset lives in AWS and only hot blocks are cached locally. Which configuration meets this?",
   "o": [
    "Amazon S3 File Gateway",
    "Tape Gateway",
    "Volume Gateway in cached mode",
    "Volume Gateway in stored mode"
   ],
   "a": 2,
   "e": "Cached volumes keep the primary dataset in S3 and cache frequently accessed blocks locally for low latency. Stored volumes keep the entire dataset on premises with asynchronous backup to AWS.",
   "d": 4
  },
  {
   "id": 260,
   "t": "storage-gateway-hybrid",
   "x": "A business must keep all primary block data on premises for the lowest local access latency but wants asynchronous point-in-time backups saved as EBS snapshots in AWS. Which option fits?",
   "o": [
    "Amazon S3 File Gateway",
    "Volume Gateway in cached mode",
    "Amazon FSx File Gateway",
    "Volume Gateway in stored mode"
   ],
   "a": 3,
   "e": "Stored volumes retain the full dataset locally and asynchronously back up to AWS as EBS snapshots. Cached mode keeps the primary data in S3 rather than on premises.",
   "d": 4
  },
  {
   "id": 261,
   "t": "storage-gateway-hybrid",
   "x": "On-premises users need low-latency access to fully managed Windows file shares hosted in AWS over SMB with Active Directory integration. Which gateway provides a local cache for these shares?",
   "o": [
    "Amazon S3 File Gateway",
    "Volume Gateway in cached mode",
    "Amazon FSx File Gateway",
    "Tape Gateway"
   ],
   "a": 2,
   "e": "Amazon FSx File Gateway caches the managed Windows file shares locally while preserving SMB access and Active Directory integration for on-premises users. Amazon S3 File Gateway also serves SMB but maps files to S3 objects rather than a managed Windows file system, and Volume Gateway and Tape Gateway present block volumes and virtual tapes, not file shares.",
   "d": 4
  },
  {
   "id": 262,
   "t": "storage-gateway-hybrid",
   "x": "An architect is confirming the behavior of the different AWS Storage Gateway types before a hybrid deployment. Which TWO statements are correct? Choose TWO.",
   "o": [
    "S3 File Gateway stores files as native S3 objects",
    "File Gateway can only be reached through a REST API",
    "Volume Gateway exposes NFS file shares to clients",
    "Storage Gateway needs no local cache for any gateway type",
    "Tape Gateway lets existing backup software archive to Glacier"
   ],
   "a": 0,
   "e": "S3 File Gateway writes files as S3 objects and Tape Gateway integrates with backup software to archive to Glacier. Volume Gateway uses iSCSI block volumes, not NFS, and gateways rely on a local cache.",
   "d": 4,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 263,
   "t": "ec2-pricing-models",
   "x": "A stateless batch image-processing job can be interrupted and restarted at any time and runs whenever spare capacity is cheapest. Which EC2 purchasing option minimizes cost?",
   "o": [
    "On-Demand Instances",
    "Dedicated Hosts",
    "Standard Reserved Instances",
    "Spot Instances"
   ],
   "a": 3,
   "e": "Spot Instances offer the deepest discount for fault-tolerant, interruptible work. On-Demand costs far more, while Reserved Instances and Dedicated Hosts suit steady or compliance-bound usage.",
   "d": 4
  },
  {
   "id": 264,
   "t": "ec2-pricing-models",
   "x": "A production database runs continuously with steady, predictable demand on one instance family in a single Region for the next three years. Which option delivers the largest savings in exchange for a commitment?",
   "o": [
    "On-Demand Instances",
    "Standard Reserved Instances",
    "Spot Instances",
    "Dedicated Hosts"
   ],
   "a": 1,
   "e": "Standard RIs give the deepest discount for stable, unchanging usage over a one- or three-year term. Convertible RIs and On-Demand cost more, and Spot cannot guarantee continuous uptime.",
   "d": 4
  },
  {
   "id": 265,
   "t": "ec2-pricing-models",
   "x": "A team spins up short-lived development servers for a few hours each day, wants no long-term commitment, and cannot tolerate a sudden interruption. Which pricing model suits this best?",
   "o": [
    "On-Demand Instances",
    "Standard Reserved Instances",
    "Compute Savings Plans",
    "Spot Instances"
   ],
   "a": 0,
   "e": "On-Demand bills per second with no commitment and no interruption risk, which fits spiky short-term usage. Spot can be reclaimed, and Reserved Instances and Savings Plans require commitments.",
   "d": 4
  },
  {
   "id": 266,
   "t": "ec2-pricing-models",
   "x": "Software licensing requires binding to physical sockets and cores with visibility into the underlying server hardware. Which EC2 option satisfies this compliance need?",
   "o": [
    "Dedicated Instances",
    "Dedicated Hosts",
    "Spot Instances",
    "On-Demand Instances"
   ],
   "a": 1,
   "e": "Dedicated Hosts provide a physical server with visibility into sockets and cores for socket-based licensing. Dedicated Instances isolate hardware but do not expose host-level socket detail.",
   "d": 4
  },
  {
   "id": 267,
   "t": "ec2-pricing-models",
   "x": "To reduce the impact of Spot interruptions on a flexible but important workload while keeping most of the Spot discount, which strategy helps MOST?",
   "o": [
    "Turn off capacity rebalancing on the fleet",
    "Request all Spot capacity within one Availability Zone",
    "Diversify the Spot fleet across many instance types and Availability Zones",
    "Move the whole workload onto a single Spot instance type"
   ],
   "a": 2,
   "e": "Spreading a Spot fleet across instance types and Availability Zones lowers the chance of simultaneous reclamation and improves capacity. Concentrating on one type or zone raises interruption risk.",
   "d": 4
  },
  {
   "id": 268,
   "t": "ec2-pricing-models",
   "x": "A platform team is deciding which workloads to place on EC2 Spot Instances. Which TWO workloads are well suited to Spot? Choose TWO.",
   "o": [
    "A primary transactional database requiring constant uptime",
    "A domain controller that must hold a fixed address indefinitely",
    "A licensing server that must never be reclaimed",
    "Stateless web workers behind a queue that tolerate node loss",
    "Fault-tolerant containerized batch jobs that resume after interruption"
   ],
   "a": 3,
   "e": "Spot fits interruptible, stateless workloads that recover from reclamation. Databases, license servers, and domain controllers need continuous availability that Spot cannot guarantee.",
   "d": 4,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 269,
   "t": "ec2-pricing-models",
   "x": "A company runs a stable 24/7 baseline plus unpredictable traffic spikes and wants to lower EC2 cost without risking the ability to serve peaks. Which TWO choices form the MOST cost-effective combination? Choose TWO.",
   "o": [
    "Absorb the unpredictable spikes with On-Demand Instances",
    "Serve the variable spike capacity from Dedicated Hosts",
    "Purchase Reserved Instances sized for peak demand",
    "Run the entire workload on Spot to guarantee peak uptime",
    "Cover the steady baseline with a Savings Plan or Reserved Instances"
   ],
   "a": 0,
   "e": "Committing to the baseline with Savings Plans or RIs captures the deepest discount while On-Demand absorbs spikes. Sizing reservations for peak wastes money and Spot cannot guarantee uptime.",
   "d": 4,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 270,
   "t": "savings-plans",
   "x": "A company wants a discount on EC2 usage in return for a one- or three-year hourly spend commitment while keeping the freedom to change instance family, size, operating system, and Region. Which option fits?",
   "o": [
    "On-Demand Capacity Reservations",
    "EC2 Instance Savings Plans",
    "Compute Savings Plans",
    "Standard Reserved Instances"
   ],
   "a": 2,
   "e": "Compute Savings Plans apply across instance family, size, operating system, Region, and even Fargate and Lambda for a committed hourly spend. EC2 Instance Savings Plans and Standard RIs are narrower.",
   "d": 4
  },
  {
   "id": 271,
   "t": "savings-plans",
   "x": "A team is willing to commit to one instance family in a single Region for three years and wants the deepest Savings Plans discount available. Which plan gives the largest reduction?",
   "o": [
    "EC2 Instance Savings Plans",
    "On-Demand Instances",
    "Compute Savings Plans",
    "On-Demand Capacity Reservations"
   ],
   "a": 0,
   "e": "EC2 Instance Savings Plans give a larger discount than Compute Savings Plans in return for locking to an instance family in a Region. Compute plans trade some discount for broad flexibility.",
   "d": 4
  },
  {
   "id": 272,
   "t": "savings-plans",
   "x": "An architect wants to know which compute usage a Compute Savings Plan can discount before making a commitment. Which TWO services does it cover? Choose TWO.",
   "o": [
    "Amazon S3 storage",
    "Amazon RDS instance hours",
    "AWS Fargate usage",
    "Amazon DynamoDB capacity",
    "AWS Lambda duration"
   ],
   "a": 2,
   "e": "Compute Savings Plans cover EC2, Fargate, and Lambda usage. RDS, DynamoDB, and S3 are not covered and rely on their own pricing or reservation models.",
   "d": 4,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 273,
   "t": "savings-plans",
   "x": "An architect is comparing Savings Plans with Standard Reserved Instances for steady-state compute usage. Which statement about Savings Plans is accurate?",
   "o": [
    "They discount matching usage automatically up to an hourly spend commitment",
    "They provide a capacity reservation within an Availability Zone",
    "They lock the discount to one instance type and size for the term",
    "They allow the hourly commitment to be lowered at any time during the term"
   ],
   "a": 0,
   "e": "Savings Plans apply their discount to any matching usage up to the committed hourly spend with no per-reservation management. They never reserve capacity in an Availability Zone, the hourly commitment cannot be lowered mid-term, and even EC2 Instance Savings Plans flex across instance sizes rather than locking a single type and size.",
   "d": 4
  },
  {
   "id": 274,
   "t": "savings-plans",
   "x": "A workload's steady baseline is covered by a Savings Plan, but occasional bursts push usage above the committed hourly amount. How is the usage beyond the commitment billed?",
   "o": [
    "At standard On-Demand rates for the amount above the commitment",
    "The excess is charged at the current Spot market price",
    "The excess usage is blocked until the next billing hour",
    "The commitment automatically grows to absorb the overage"
   ],
   "a": 0,
   "e": "Usage beyond the committed hourly amount is billed at normal On-Demand rates. Savings Plans discount only up to the commitment and neither cap nor automatically expand it.",
   "d": 4
  },
  {
   "id": 275,
   "t": "spot-instances",
   "x": "A company runs a stateless batch image-processing job that can be interrupted and resumed at any time. The work must finish within 48 hours but has no fixed hourly deadline. Which EC2 purchasing option meets the requirement at the lowest cost?",
   "o": [
    "On-Demand Instances",
    "A 3-year All Upfront Reserved Instance",
    "Spot Instances",
    "A 1-year Standard Reserved Instance"
   ],
   "a": 2,
   "e": "Spot Instances offer up to 90% off On-Demand for fault-tolerant, interruptible work like batch processing. Reserved Instances lower cost but require a long commitment and suit steady-state usage, not short interruptible jobs.",
   "d": 4
  },
  {
   "id": 276,
   "t": "spot-instances",
   "x": "A company wants a fault-tolerant web fleet behind an Application Load Balancer using an EC2 Auto Scaling group, mixing purchasing options to cut cost while keeping a stable baseline of capacity. Which practices help meet the goal? Choose TWO.",
   "o": [
    "Purchase Convertible Reserved Instances for the entire fleet",
    "Use a mixed-instances policy with an On-Demand base plus additional Spot capacity",
    "Enable Capacity Rebalance so the group replaces Spot Instances before interruption",
    "Disable health checks to avoid replacing interrupted instances",
    "Set the group to 100% Spot using a single instance type"
   ],
   "a": 1,
   "e": "A mixed-instances policy provides an On-Demand baseline plus cheaper Spot, and Capacity Rebalance proactively replaces at-risk Spot capacity. A single Spot instance type raises interruption risk, and disabling health checks breaks recovery.",
   "d": 4,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 277,
   "t": "spot-instances",
   "x": "A machine learning team needs GPU capacity for training runs that checkpoint every few minutes and can restart from the last checkpoint. They want the lowest price and accept interruptions. Which option is BEST?",
   "o": [
    "EC2 Dedicated Hosts",
    "EC2 On-Demand Instances",
    "EC2 Spot Instances",
    "A Compute Savings Plan with On-Demand fallback"
   ],
   "a": 2,
   "e": "Frequent checkpointing makes the training interruption-tolerant, so Spot delivers the deepest discount. Dedicated Hosts and On-Demand cost far more, and a Savings Plan commits spend without matching Spot's discount for this pattern.",
   "d": 4
  },
  {
   "id": 278,
   "t": "spot-instances",
   "x": "A team's Spot Instances are being reclaimed and they want an advance warning so the application can drain connections and save state before an instance is terminated. Which mechanism provides this warning?",
   "o": [
    "An SNS topic subscribed to AWS Health scheduled maintenance events",
    "A CloudWatch billing alarm on Spot spend",
    "The EC2 Spot interruption notice from instance metadata and EventBridge",
    "An Auto Scaling lifecycle hook triggered on scale-in"
   ],
   "a": 2,
   "e": "AWS issues a Spot interruption notice about two minutes ahead through instance metadata and an EventBridge event, letting the app react. Billing alarms and Health maintenance events do not signal individual Spot reclamations.",
   "d": 4
  },
  {
   "id": 279,
   "t": "spot-instances",
   "x": "An architect is selecting workloads to move onto Spot Instances to reduce cost. Which workloads are appropriate for Spot? Choose TWO.",
   "o": [
    "A containerized batch rendering pipeline that retries failed tasks",
    "A single primary relational database with no replica",
    "A licensed application pinned to one long-lived server",
    "A stateful session store holding the only copy of user carts",
    "A stateless CI build farm that can requeue interrupted jobs"
   ],
   "a": 0,
   "e": "Fault-tolerant, stateless, retry-friendly work like rendering and CI builds tolerates Spot reclamation. A sole database, a pinned licensed host, and the only copy of session state cannot survive sudden termination.",
   "d": 4,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 280,
   "t": "spot-instances",
   "x": "A company runs a fault-tolerant queue-worker fleet and wants to lower interruption frequency by broadening the pools AWS can draw Spot capacity from. Which configuration BEST achieves this?",
   "o": [
    "Use lowest-price allocation limited to a single instance type",
    "Restrict the group to one instance type in one Availability Zone",
    "Launch all workers as Dedicated Instances in one subnet",
    "Diversify across many instance types and Availability Zones with capacity-optimized allocation"
   ],
   "a": 3,
   "e": "Diversifying instance types and Availability Zones with the capacity-optimized strategy lets Spot draw from the deepest pools, reducing interruptions. Narrowing to one type or one zone shrinks available capacity and raises interruption risk.",
   "d": 4
  },
  {
   "id": 281,
   "t": "cost-explorer-budgets",
   "x": "A finance team wants an email alert when the company's monthly AWS spend is forecast to exceed $10,000, before the month actually ends. Which AWS feature meets this requirement MOST directly?",
   "o": [
    "AWS Budgets with a forecasted cost budget and an alert threshold",
    "A CloudWatch alarm on the EstimatedCharges metric",
    "An AWS Cost and Usage Report delivered to Amazon S3",
    "AWS Cost Explorer daily reports"
   ],
   "a": 0,
   "e": "AWS Budgets supports forecasted-cost budgets that alert when projected spend will cross a threshold. Cost Explorer and the CUR are analysis tools without proactive forecast alerts, and the EstimatedCharges alarm fires only on actual spend.",
   "d": 4
  },
  {
   "id": 282,
   "t": "cost-explorer-budgets",
   "x": "An architect needs to analyze the last 12 months of spend to identify which services and linked accounts drive cost, and to visualize the trends interactively. Which tool is BEST suited?",
   "o": [
    "AWS Budgets",
    "AWS Cost Explorer",
    "AWS Compute Optimizer",
    "AWS Trusted Advisor"
   ],
   "a": 1,
   "e": "Cost Explorer provides interactive charts and filters over up to 12 months of historical cost and usage by service and account. Budgets tracks thresholds, Trusted Advisor gives checks, and Compute Optimizer recommends right-sizing.",
   "d": 4
  },
  {
   "id": 283,
   "t": "cost-explorer-budgets",
   "x": "A company wants automated governance so teams cannot accidentally overspend and so owners learn early when usage climbs. Which AWS Budgets capabilities support this? Choose TWO.",
   "o": [
    "A hard cap that stops all AWS API calls at the limit",
    "A budget action that applies a restrictive IAM policy when a threshold is breached",
    "Cost and usage budget alerts sent to Amazon SNS and email",
    "Reserved Instance coverage enforced across every account",
    "A Savings Plan purchased automatically when spend rises"
   ],
   "a": 1,
   "e": "AWS Budgets can trigger budget actions such as attaching a restrictive policy, and it can notify through SNS and email at thresholds. Budgets cannot buy Savings Plans automatically or impose a hard stop on all API calls.",
   "d": 4,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 284,
   "t": "cost-explorer-budgets",
   "x": "A company needs highly detailed line-item billing data with resource-level granularity and cost allocation tags, delivered to Amazon S3 for querying in Amazon Athena. Which source provides this?",
   "o": [
    "An AWS Cost Explorer CSV export",
    "The AWS Billing console PDF invoice",
    "An AWS Budgets report",
    "The AWS Cost and Usage Report"
   ],
   "a": 3,
   "e": "The Cost and Usage Report delivers the most granular hourly, resource-level line items with cost allocation tags to S3 for Athena or Redshift analysis. Cost Explorer exports and invoices are summarized and lack that granularity.",
   "d": 4
  },
  {
   "id": 285,
   "t": "cost-explorer-budgets",
   "x": "A company wants right-sizing recommendations that estimate the savings from moving underutilized EC2 instances to smaller sizes. Which AWS tool provides these EC2 right-sizing recommendations?",
   "o": [
    "The AWS Cost and Usage Report",
    "AWS Cost Explorer rightsizing recommendations",
    "AWS Config rules",
    "AWS Budgets alerts"
   ],
   "a": 1,
   "e": "Cost Explorer surfaces rightsizing recommendations that flag idle or underutilized instances and estimate savings from downsizing. Budgets and the CUR track spend but do not recommend sizes, and Config evaluates compliance.",
   "d": 4
  },
  {
   "id": 286,
   "t": "cost-explorer-budgets",
   "x": "An organization using AWS Organizations wants centralized cost visibility and controls across all member accounts. Which statements are correct? Choose TWO.",
   "o": [
    "AWS Budgets can be created at the organization level to track consolidated spend",
    "Cost Explorer in the management account can break down costs by member account",
    "Each member account must be invoiced separately with no consolidation",
    "Consolidated billing prevents volume pricing tiers from being shared",
    "Cost allocation tags cannot be activated once an account joins an organization"
   ],
   "a": 0,
   "e": "With consolidated billing, the management account's Cost Explorer breaks down spend by member account, and organization-level budgets track combined usage. Consolidation aggregates usage for volume tiers under a single invoice.",
   "d": 4,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 287,
   "t": "nat-gateway-cost",
   "x": "Private subnet instances download large operating-system patches from the internet through a NAT gateway, and NAT data-processing charges are high. The only external target is Amazon S3. Which change reduces cost MOST while keeping the traffic private?",
   "o": [
    "Create a gateway VPC endpoint for Amazon S3",
    "Replace the NAT gateway with a NAT instance on a larger type",
    "Route the S3 traffic through an internet gateway directly",
    "Add a second NAT gateway in another Availability Zone"
   ],
   "a": 0,
   "e": "A gateway VPC endpoint for S3 routes traffic over the AWS network with no per-GB endpoint charge and avoids NAT data-processing fees. NAT instances and extra gateways still incur processing costs, and private instances cannot use an internet gateway directly.",
   "d": 4
  },
  {
   "id": 288,
   "t": "nat-gateway-cost",
   "x": "A startup keeps everything in a single Availability Zone to control cost but wants outbound internet access for private instances at the lowest ongoing charge, accepting reduced availability. Which option is MOST cost-effective?",
   "o": [
    "A NAT gateway paired with AWS Global Accelerator",
    "A single NAT gateway in the one Availability Zone",
    "An egress-only internet gateway for IPv4 traffic",
    "One NAT gateway per Availability Zone"
   ],
   "a": 1,
   "e": "For a single-AZ, cost-sensitive design, one NAT gateway minimizes hourly and processing charges. Per-AZ gateways add cost for availability the startup is not seeking, and egress-only internet gateways serve IPv6, not IPv4.",
   "d": 4
  },
  {
   "id": 289,
   "t": "nat-gateway-cost",
   "x": "An architect reviews a bill dominated by NAT gateway charges. Which actions can legitimately lower those costs without losing needed connectivity? Choose TWO.",
   "o": [
    "Use interface VPC endpoints for frequently called AWS APIs so calls avoid the NAT path",
    "Add gateway VPC endpoints for Amazon S3 and DynamoDB to keep that traffic off the NAT gateway",
    "Move the NAT gateway into a public subnet to lower its hourly rate",
    "Delete route table entries so private instances lose all egress",
    "Attach an Elastic IP to each private instance for direct internet access"
   ],
   "a": 0,
   "e": "Gateway endpoints for S3 and DynamoDB and interface endpoints for AWS APIs divert traffic away from the NAT gateway, cutting data-processing charges. The gateway's rate is not lowered by subnet placement, and the other options break the private design.",
   "d": 4,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 290,
   "t": "nat-gateway-cost",
   "x": "A high-throughput application in private subnets pushes many terabytes each month to varied third-party internet endpoints through a NAT gateway, and per-GB processing charges dominate the bill. Which approach can reduce cost while preserving functionality?",
   "o": [
    "Enable NAT gateway connection draining",
    "Switch the private subnets to an egress-only internet gateway",
    "Add more NAT gateways to spread the same traffic",
    "Replace the NAT gateway with a right-sized self-managed NAT instance"
   ],
   "a": 3,
   "e": "At very high sustained volume a right-sized NAT instance can cost less than NAT gateway per-GB processing, at the price of managing it yourself. Extra gateways do not lower total processing charges, and egress-only internet gateways only handle IPv6.",
   "d": 4
  },
  {
   "id": 291,
   "t": "nat-gateway-cost",
   "x": "A VPC has private subnets in three Availability Zones all sharing one NAT gateway in a single zone. The team wants to remove the cross-AZ data transfer charges this design incurs. What should they do?",
   "o": [
    "Consolidate all workloads into the Availability Zone that hosts the NAT gateway",
    "Deploy a NAT gateway in each Availability Zone and route each subnet to its local gateway",
    "Enable cross-zone load balancing on the NAT gateway",
    "Replace the NAT gateway with a transit gateway"
   ],
   "a": 1,
   "e": "Routing each AZ's private subnets to a NAT gateway in the same AZ eliminates inter-AZ data transfer charges for outbound traffic. Consolidating zones harms availability, and NAT gateways have no cross-zone load balancing feature.",
   "d": 4
  },
  {
   "id": 292,
   "t": "nat-gateway-cost",
   "x": "An architect must choose between a NAT gateway and a NAT instance for a production VPC that needs reliable, low-maintenance outbound access. Which statement BEST justifies choosing the NAT gateway?",
   "o": [
    "It is always cheaper than a NAT instance at every traffic level",
    "It automatically fails over across all Availability Zones from one deployment",
    "It is a managed service that scales automatically and needs no patching",
    "It can double as a bastion host to save the cost of a separate jump box"
   ],
   "a": 2,
   "e": "A NAT gateway is fully managed, scales bandwidth automatically, and needs no OS patching, which suits production. A NAT instance can serve as a bastion and may be cheaper only at very high volume, and a single NAT gateway is zonal, not multi-AZ.",
   "d": 4
  },
  {
   "id": 293,
   "t": "nat-gateway-cost",
   "x": "An IPv6-only workload in private subnets needs outbound-only internet access, and the team wants to avoid NAT gateway charges entirely. Which resource meets the requirement?",
   "o": [
    "An egress-only internet gateway",
    "A NAT gateway",
    "An internet gateway with a public IPv6 address on each instance",
    "A NAT instance"
   ],
   "a": 0,
   "e": "An egress-only internet gateway provides outbound-only IPv6 connectivity at no NAT charge and blocks inbound-initiated traffic. NAT gateways and NAT instances are for IPv4, and public IPv6 on every instance would permit inbound access.",
   "d": 4
  },
  {
   "id": 294,
   "t": "vpc-endpoints-data-transfer",
   "x": "An application in a private subnet makes frequent Amazon S3 API calls, and the team wants to avoid both NAT gateway data-processing charges and any per-GB endpoint charge for this traffic. Which endpoint type should they use?",
   "o": [
    "An interface VPC endpoint for Amazon S3",
    "An AWS PrivateLink connection to a partner service",
    "A gateway VPC endpoint for Amazon S3",
    "A NAT gateway with an S3 prefix list route"
   ],
   "a": 2,
   "e": "Gateway VPC endpoints for S3 and DynamoDB carry no hourly or per-GB endpoint charge and keep traffic off the NAT gateway. Interface endpoints bill per hour and per GB, so they cost more for this S3 use case.",
   "d": 4
  },
  {
   "id": 295,
   "t": "vpc-endpoints-data-transfer",
   "x": "A team wants private access to Amazon S3 from a VPC at the lowest possible endpoint cost. Which statement about gateway VPC endpoints is correct and supports this choice?",
   "o": [
    "A gateway endpoint adds a route entry and carries no per-hour or per-GB charge",
    "A gateway endpoint is billed per hour and per gigabyte like an interface endpoint",
    "A gateway endpoint can be reached from on-premises networks over Direct Connect",
    "A gateway endpoint uses an elastic network interface with a private IP address"
   ],
   "a": 0,
   "e": "Gateway VPC endpoints for S3 add a route table entry with no endpoint charge, making them the cheapest private path. Interface endpoints, not gateway endpoints, bill per hour and per GB, use ENIs, and are reachable from on-premises.",
   "d": 4
  },
  {
   "id": 296,
   "t": "vpc-endpoints-data-transfer",
   "x": "A company pays significant cross-AZ transfer and NAT charges because private instances call AWS APIs such as Amazon EC2 and AWS KMS over the internet path. They want these calls to stay on the AWS network. Which change is MOST appropriate?",
   "o": [
    "Create a gateway VPC endpoint for each of those services",
    "Route the API traffic through an internet gateway",
    "Create interface VPC endpoints for the AWS services the instances call",
    "Establish a VPC peering connection to a shared services VPC"
   ],
   "a": 2,
   "e": "Interface VPC endpoints keep calls to AWS APIs like EC2 and KMS on the AWS network, avoiding the internet and NAT path. Gateway endpoints exist only for S3 and DynamoDB, so they cannot serve these APIs.",
   "d": 4
  },
  {
   "id": 297,
   "t": "vpc-endpoints-data-transfer",
   "x": "A large volume of traffic flows from EC2 instances to Amazon DynamoDB in the same Region through a NAT gateway, and the team wants to remove the NAT data-processing cost for that traffic at no added endpoint fee. What should they configure?",
   "o": [
    "DynamoDB Accelerator in front of the table",
    "A gateway VPC endpoint for Amazon DynamoDB",
    "An interface VPC endpoint for Amazon DynamoDB",
    "A VPC peering connection to DynamoDB"
   ],
   "a": 1,
   "e": "DynamoDB is supported by gateway VPC endpoints, which add a route with no endpoint charge and remove the NAT processing cost. An interface endpoint would add per-GB charges, and DAX is a cache, not a private connectivity path.",
   "d": 4
  },
  {
   "id": 298,
   "t": "vpc-endpoints-data-transfer",
   "x": "An organization wants to expose an internal application it hosts to a consumer VPC privately, without VPC peering and without concern for overlapping CIDR ranges. Which AWS building blocks enable this? Choose TWO.",
   "o": [
    "Create a gateway VPC endpoint pointing at the provider's application",
    "Publish the service behind a Network Load Balancer as an AWS PrivateLink endpoint service",
    "Use a Direct Connect gateway between the two VPCs",
    "Configure Route 53 latency routing to reach the other VPC",
    "Have the consumer VPC create an interface VPC endpoint to that service"
   ],
   "a": 1,
   "e": "AWS PrivateLink lets a provider expose a service behind an NLB as an endpoint service that consumers reach through an interface endpoint, avoiding peering and CIDR overlap. Gateway endpoints only serve S3 and DynamoDB.",
   "d": 4,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 299,
   "t": "aurora-serverless-cost",
   "x": "A development database receives sporadic traffic during business hours and is idle overnight and on weekends. The team wants to pay for capacity only when it is used, with automatic scaling. Which option is MOST cost-effective?",
   "o": [
    "Amazon Aurora Serverless v2",
    "An Amazon RDS Multi-AZ db.r6g.large instance",
    "An Amazon Redshift provisioned cluster",
    "A provisioned Amazon Aurora cluster sized for peak"
   ],
   "a": 0,
   "e": "Aurora Serverless v2 scales capacity automatically with load and suits intermittent, unpredictable usage, avoiding payment for idle provisioned capacity. A peak-sized cluster or fixed RDS instance bills continuously regardless of use.",
   "d": 4
  },
  {
   "id": 300,
   "t": "aurora-serverless-cost",
   "x": "A company runs an application with unpredictable spikes several times a day and long quiet periods between them. They want an Aurora option that scales in fine-grained increments in response to demand without managing instance sizes. Which choice fits BEST?",
   "o": [
    "A fleet of manually resized provisioned Aurora replicas",
    "Aurora Global Database spanning two Regions",
    "Aurora provisioned with a fixed large instance class",
    "Aurora Serverless v2 with a configured minimum and maximum ACU range"
   ],
   "a": 3,
   "e": "Aurora Serverless v2 scales in fine ACU increments between a configured minimum and maximum, matching capacity to spiky demand automatically. Manual resizing and fixed instances cannot track rapid spikes, and Global Database targets multi-Region replication.",
   "d": 4
  },
  {
   "id": 301,
   "t": "aurora-serverless-cost",
   "x": "An architect evaluates Aurora Serverless v2 for cost efficiency. Which statements are accurate? Choose TWO.",
   "o": [
    "You configure a minimum and maximum capacity to bound how it scales",
    "It cannot run in the same Aurora cluster as provisioned instances",
    "Capacity is measured in Aurora Capacity Units billed per second while running",
    "It always costs less than provisioned Aurora at steady high utilization",
    "It requires stopping the cluster manually to avoid charges when idle"
   ],
   "a": 0,
   "e": "Aurora Serverless v2 bills ACUs per second and scales within a configured minimum and maximum. At steady high load provisioned or Reserved capacity can be cheaper, and Serverless v2 scales down automatically and can mix with provisioned instances.",
   "d": 4,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 302,
   "t": "aurora-serverless-cost",
   "x": "A steady production database runs 24/7 at predictable high capacity for the next three years, and the team wants the lowest cost for this constant workload. Which option is MOST cost-effective?",
   "o": [
    "Amazon Aurora Serverless v2 scaling on demand",
    "A provisioned Amazon Aurora cluster covered by a Reserved Instance",
    "An On-Demand provisioned Aurora cluster with no commitment",
    "Amazon RDS for MySQL on On-Demand pricing"
   ],
   "a": 1,
   "e": "For steady, predictable, always-on load, a provisioned Aurora cluster with a Reserved Instance gives the deepest discount for the commitment. Serverless v2 and On-Demand pricing cost more when capacity is continuously high and does not vary.",
   "d": 4
  },
  {
   "id": 303,
   "t": "aurora-serverless-cost",
   "x": "A team wants an Aurora deployment that can automatically pause and resume for a rarely used test database so they pay almost nothing when it is inactive. Which Aurora option supports automatic pause during inactivity?",
   "o": [
    "Aurora Serverless v2 with a minimum of 2 ACUs",
    "Aurora Serverless v1",
    "A provisioned Aurora cluster stopped on a schedule",
    "Aurora Global Database with a secondary Region"
   ],
   "a": 0,
   "e": "Aurora Serverless v1 can pause automatically after a period of inactivity and resume on the next connection, so a rarely used test database costs almost nothing while idle. A Serverless v2 cluster pinned to a 2-ACU minimum keeps that capacity billed continuously, and a provisioned cluster stopped on a schedule needs custom automation and cannot restart itself when a connection arrives. Aurora Global Database targets cross-Region disaster recovery, not idle-time cost.",
   "d": 4
  },
  {
   "id": 304,
   "t": "aurora-serverless-cost",
   "x": "A company is deciding between Aurora Serverless and provisioned Aurora to control cost. Which scenarios favor Aurora Serverless v2? Choose TWO.",
   "o": [
    "An infrequently used internal reporting database with long idle gaps",
    "A latency-critical cache layer replacing Amazon ElastiCache",
    "A database running near peak capacity continuously all year",
    "A new application with unknown, variable traffic patterns",
    "A stable, well-understood baseline suited to Reserved pricing"
   ],
   "a": 0,
   "e": "Serverless v2 shines for unpredictable or intermittent workloads where capacity should track demand, such as new apps and rarely used reporting databases. Continuous peak and stable baseline workloads are cheaper on provisioned or Reserved capacity, and a cache is not a database use case.",
   "d": 4,
   "as": [
    0,
    3
   ]
  }
 ],
 "pbqs": []
}
