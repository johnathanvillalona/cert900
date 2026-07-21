// Microsoft SC-900 (Security, Compliance, and Identity Fundamentals) bank.
// Fundamentals exam: multiple choice/response plus drag-and-drop (match) and
// build-list (order) items; ~40-60 Q, 45 min, scaled to 1000, pass 700 (skills
// measured as of July 28, 2026). Topics link chapters of John Savill's free
// "SC-900 Study Cram V2" (youtube -FJqb60wPSY).
import type { ExamDef } from "./types"

export const exam: ExamDef = {
 "id": "sc-900",
 "vendor": "azure",
 "scale": {
  "max": 1000,
  "pass": 700
 },
 "cert": "Microsoft Certified",
 "name": "Security, Compliance, and Identity Fundamentals",
 "code": "SC-900",
 "blurb": "Concepts of security, compliance, and identity, plus the capabilities of Microsoft Entra, Microsoft security solutions, and Microsoft compliance solutions.",
 "domains": {
  "1": "Describe security, compliance, and identity concepts",
  "2": "Describe the capabilities of Microsoft Entra",
  "3": "Describe the capabilities of Microsoft security solutions",
  "4": "Describe the capabilities of Microsoft compliance solutions"
 },
 "examSplit": {
  "1": 0.13,
  "2": 0.274,
  "3": 0.37,
  "4": 0.226
 },
 "examMC": 40,
 "examPBQ": 5,
 "examMinutes": 45,
 "videos": {
  "shared-responsibility-model": {
   "n": "SC-900 Study Cram V2: Shared responsibility",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=154s",
   "d": 1
  },
  "defense-in-depth": {
   "n": "SC-900 Study Cram V2: Defense in depth",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=459s",
   "d": 1
  },
  "zero-trust-model": {
   "n": "SC-900 Study Cram V2: Zero Trust",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=714s",
   "d": 1
  },
  "encryption-and-hashing": {
   "n": "SC-900 Study Cram V2: Encryption & hashing",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=1008s",
   "d": 1
  },
  "governance-risk-compliance": {
   "n": "SC-900 Study Cram V2: GRC concepts",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=1513s",
   "d": 1
  },
  "identity-as-primary-perimeter": {
   "n": "SC-900 Study Cram V2: Identity as the perimeter",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=1629s",
   "d": 1
  },
  "authentication": {
   "n": "SC-900 Study Cram V2: Authentication",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=1812s",
   "d": 1
  },
  "authorization": {
   "n": "SC-900 Study Cram V2: Authorization",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=3079s",
   "d": 1
  },
  "identity-providers": {
   "n": "SC-900 Study Cram V2: Identity providers",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=1812s",
   "d": 1
  },
  "directory-services-active-directory": {
   "n": "SC-900 Study Cram V2: Active Directory Domain Services",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=2056s",
   "d": 1
  },
  "federation": {
   "n": "SC-900 Study Cram V2: Federation",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=2177s",
   "d": 1
  },
  "microsoft-entra-id": {
   "n": "SC-900 Study Cram V2: Microsoft Entra ID",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=1629s",
   "d": 2
  },
  "identity-types-agent-id": {
   "n": "SC-900 Study Cram V2: Types of identity",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=2377s",
   "d": 2
  },
  "hybrid-identity": {
   "n": "SC-900 Study Cram V2: Hybrid identity",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=2377s",
   "d": 2
  },
  "authentication-methods": {
   "n": "SC-900 Study Cram V2: Authentication methods",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=2621s",
   "d": 2
  },
  "multifactor-authentication": {
   "n": "SC-900 Study Cram V2: MFA",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=2712s",
   "d": 2
  },
  "password-protection-management": {
   "n": "SC-900 Study Cram V2: Password protection",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=2712s",
   "d": 2
  },
  "conditional-access": {
   "n": "SC-900 Study Cram V2: Conditional Access",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=3079s",
   "d": 2
  },
  "entra-roles-rbac": {
   "n": "SC-900 Study Cram V2: Entra roles & RBAC",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=3079s",
   "d": 2
  },
  "entra-id-governance": {
   "n": "SC-900 Study Cram V2: Entra ID Governance",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=3383s",
   "d": 2
  },
  "access-reviews": {
   "n": "SC-900 Study Cram V2: Access reviews",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=3383s",
   "d": 2
  },
  "privileged-identity-management": {
   "n": "SC-900 Study Cram V2: Privileged Identity Management",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=3383s",
   "d": 2
  },
  "entra-id-protection": {
   "n": "SC-900 Study Cram V2: Entra ID Protection",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=3383s",
   "d": 2
  },
  "azure-ddos-protection": {
   "n": "SC-900 Study Cram V2: Azure DDoS Protection",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=3963s",
   "d": 3
  },
  "azure-firewall": {
   "n": "SC-900 Study Cram V2: Azure Firewall",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4059s",
   "d": 3
  },
  "azure-web-application-firewall": {
   "n": "SC-900 Study Cram V2: Azure WAF",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4113s",
   "d": 3
  },
  "network-segmentation-vnets": {
   "n": "SC-900 Study Cram V2: VNet segmentation",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4219s",
   "d": 3
  },
  "network-security-groups": {
   "n": "SC-900 Study Cram V2: Network security groups",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4219s",
   "d": 3
  },
  "azure-bastion": {
   "n": "SC-900 Study Cram V2: Azure Bastion",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4459s",
   "d": 3
  },
  "azure-key-vault": {
   "n": "SC-900 Study Cram V2: Azure Key Vault",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4578s",
   "d": 3
  },
  "microsoft-defender-for-cloud": {
   "n": "SC-900 Study Cram V2: Defender for Cloud",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4700s",
   "d": 3
  },
  "cloud-security-posture-management": {
   "n": "SC-900 Study Cram V2: CSPM",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4700s",
   "d": 3
  },
  "security-policies-recommendations": {
   "n": "SC-900 Study Cram V2: Security policies & recommendations",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4700s",
   "d": 3
  },
  "cloud-workload-protection": {
   "n": "SC-900 Study Cram V2: Cloud workload protection",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4700s",
   "d": 3
  },
  "siem-soar-concepts": {
   "n": "SC-900 Study Cram V2: SIEM & SOAR",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4952s",
   "d": 3
  },
  "sentinel-threat-detection": {
   "n": "SC-900 Study Cram V2: Microsoft Sentinel",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=4952s",
   "d": 3
  },
  "microsoft-defender-xdr": {
   "n": "SC-900 Study Cram V2: Microsoft Defender XDR",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5184s",
   "d": 3
  },
  "defender-for-office-365": {
   "n": "SC-900 Study Cram V2: Defender for Office 365",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5184s",
   "d": 3
  },
  "defender-for-endpoint": {
   "n": "SC-900 Study Cram V2: Defender for Endpoint",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5184s",
   "d": 3
  },
  "defender-for-cloud-apps": {
   "n": "SC-900 Study Cram V2: Defender for Cloud Apps",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5184s",
   "d": 3
  },
  "defender-for-identity": {
   "n": "SC-900 Study Cram V2: Defender for Identity",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5184s",
   "d": 3
  },
  "defender-vulnerability-management": {
   "n": "SC-900 Study Cram V2: Defender Vulnerability Management",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5184s",
   "d": 3
  },
  "defender-threat-intelligence": {
   "n": "SC-900 Study Cram V2: Defender Threat Intelligence",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5184s",
   "d": 3
  },
  "microsoft-defender-portal": {
   "n": "SC-900 Study Cram V2: Microsoft Defender portal",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5184s",
   "d": 3
  },
  "service-trust-portal": {
   "n": "SC-900 Study Cram V2: Service Trust Portal",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5387s",
   "d": 4
  },
  "microsoft-privacy-principles": {
   "n": "SC-900 Study Cram V2: Microsoft privacy principles",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5387s",
   "d": 4
  },
  "microsoft-purview-portal": {
   "n": "SC-900 Study Cram V2: Microsoft Purview portal",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5803s",
   "d": 4
  },
  "compliance-manager": {
   "n": "SC-900 Study Cram V2: Compliance Manager",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5880s",
   "d": 4
  },
  "compliance-score": {
   "n": "SC-900 Study Cram V2: Compliance score",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=5880s",
   "d": 4
  },
  "data-classification": {
   "n": "SC-900 Study Cram V2: Data classification",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=6033s",
   "d": 4
  },
  "content-and-activity-explorer": {
   "n": "SC-900 Study Cram V2: Content & Activity explorer",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=6033s",
   "d": 4
  },
  "sensitivity-labels-policies": {
   "n": "SC-900 Study Cram V2: Sensitivity labels",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=6033s",
   "d": 4
  },
  "data-loss-prevention": {
   "n": "SC-900 Study Cram V2: Data loss prevention",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=6033s",
   "d": 4
  },
  "records-management": {
   "n": "SC-900 Study Cram V2: Records management",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=6033s",
   "d": 4
  },
  "retention-policies-labels": {
   "n": "SC-900 Study Cram V2: Retention policies & labels",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=6033s",
   "d": 4
  },
  "insider-risk-management": {
   "n": "SC-900 Study Cram V2: Insider risk management",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=6455s",
   "d": 4
  },
  "ediscovery": {
   "n": "SC-900 Study Cram V2: eDiscovery",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=6524s",
   "d": 4
  },
  "audit-solutions": {
   "n": "SC-900 Study Cram V2: Audit solutions",
   "u": "https://www.youtube.com/watch?v=-FJqb60wPSY&t=6629s",
   "d": 4
  }
 },
 "questions": [
  {
   "id": 1,
   "t": "shared-responsibility-model",
   "x": "A company adopts a SaaS email service. Under the cloud shared responsibility model, which task remains the customer's responsibility?",
   "o": [
    "Securing the network switches and routers",
    "Managing user accounts and access permissions",
    "Patching the underlying server operating system",
    "Maintaining the physical datacenter hardware"
   ],
   "a": 1,
   "e": "In SaaS the provider handles the operating system, hardware, and network, while the customer always keeps responsibility for accounts, identities, and data. Patching the host operating system belongs to the provider, not the customer.",
   "d": 1
  },
  {
   "id": 2,
   "t": "shared-responsibility-model",
   "x": "An organization runs virtual machines on an IaaS platform. Which security duty shifts to the customer that would not apply in a SaaS deployment?",
   "o": [
    "Patching the guest operating system",
    "Guarding the hypervisor hosting the tenants",
    "Protecting the cloud region's facilities",
    "Replacing failed disks in storage arrays"
   ],
   "a": 0,
   "e": "IaaS gives the customer the guest operating system, so patching it becomes their job, whereas SaaS keeps that with the provider. The hypervisor and physical facilities stay with the provider at every service tier.",
   "d": 1
  },
  {
   "id": 3,
   "t": "shared-responsibility-model",
   "x": "Regardless of whether a workload uses IaaS, PaaS, or SaaS, which responsibility is retained by the customer in every model?",
   "o": [
    "Servicing the physical host machines",
    "Protecting its own data and identities",
    "Operating the cloud storage fabric",
    "Maintaining the datacenter power supply"
   ],
   "a": 1,
   "e": "Data, identities, and access management stay with the customer across all service models. Physical infrastructure and the host fabric are always the provider's duty.",
   "d": 1
  },
  {
   "id": 4,
   "t": "defense-in-depth",
   "x": "A security architect layers physical controls, network firewalls, and data encryption so one failed control does not expose everything. Which strategy is being applied?",
   "o": [
    "Defense in depth",
    "Least privilege",
    "Zero standing access",
    "Single sign-on"
   ],
   "a": 0,
   "e": "Defense in depth uses multiple independent layers so a breach of one does not compromise the whole system. Least privilege limits permissions but is only one such layer, not the layering strategy itself.",
   "d": 1
  },
  {
   "id": 5,
   "t": "defense-in-depth",
   "x": "Within the defense in depth layers, which layer focuses specifically on antivirus, patching, and hardening of individual machines?",
   "o": [
    "The perimeter layer",
    "The identity layer",
    "The physical layer",
    "The compute layer"
   ],
   "a": 3,
   "e": "In the defense in depth model the compute layer covers securing virtual machines and endpoints through patching and antimalware. The perimeter layer instead protects the network edge with firewalls and DDoS controls.",
   "d": 1
  },
  {
   "id": 6,
   "t": "defense-in-depth",
   "x": "An administrator places sensitive files behind access controls and encryption as the innermost safeguard. Which defense in depth layer is described?",
   "o": [
    "The perimeter layer",
    "The network layer",
    "The application layer",
    "The data layer"
   ],
   "a": 3,
   "e": "Encrypting and controlling access to the information itself is the data layer, the innermost layer protecting the asset attackers ultimately want. The application layer instead secures the software that handles that data.",
   "d": 1
  },
  {
   "id": 7,
   "t": "zero-trust-model",
   "x": "A firm moves to a model where no request is trusted by default and every access is verified regardless of network location. Which model is this?",
   "o": [
    "Perimeter security",
    "Defense in depth",
    "Zero Trust",
    "Shared responsibility"
   ],
   "a": 2,
   "e": "Zero Trust assumes breach and verifies every request explicitly, never trusting based on network position. Traditional perimeter security instead trusts anything already inside the corporate network.",
   "d": 1
  },
  {
   "id": 8,
   "t": "zero-trust-model",
   "x": "Which statement best reflects the Zero Trust guiding principle of assume breach?",
   "o": [
    "Rely on the firewall as the only line of defense",
    "Trust every device once it joins the internal network",
    "Segment access to limit the blast radius of a breach",
    "Grant broad standing permissions to reduce login friction"
   ],
   "a": 2,
   "e": "Assume breach means designing as though an attacker is already inside, so you minimize blast radius through segmentation and least privilege. Trusting internal devices contradicts the principle entirely.",
   "d": 1
  },
  {
   "id": 9,
   "t": "zero-trust-model",
   "x": "The Zero Trust principle of verify explicitly requires that authentication and authorization decisions be based on what?",
   "o": [
    "All available signals like identity, device, and location",
    "Only the source address of the connection request",
    "A one-time password entered at the initial login",
    "Whether the account sits inside the corporate perimeter"
   ],
   "a": 0,
   "e": "Verify explicitly means each access decision draws on all available signals, including identity, device health, and location, not one factor alone. Relying only on the perimeter is exactly what Zero Trust rejects.",
   "d": 1
  },
  {
   "id": 10,
   "t": "encryption-and-hashing",
   "x": "A developer needs the same secret key to both encrypt and decrypt a stored file. Which type of encryption is being used?",
   "o": [
    "Asymmetric encryption",
    "Public key encryption",
    "Symmetric encryption",
    "Certificate pinning"
   ],
   "a": 2,
   "e": "Symmetric encryption uses one shared key for both encryption and decryption. Asymmetric encryption instead uses a public and private key pair, so the same key is not used for both operations.",
   "d": 1
  },
  {
   "id": 11,
   "t": "encryption-and-hashing",
   "x": "A system stores a fixed-length fingerprint of each password that cannot be reversed back to the original text. Which technique produces this value?",
   "o": [
    "Asymmetric encryption",
    "Symmetric encryption",
    "Hashing",
    "Tokenization"
   ],
   "a": 2,
   "e": "Hashing creates a one-way, fixed-length value that cannot be converted back to the input, which is ideal for storing passwords. Encryption is reversible with a key, so it does not fit a non-reversible fingerprint.",
   "d": 1
  },
  {
   "id": 12,
   "t": "encryption-and-hashing",
   "x": "An auditor asks how information is protected while it moves between a browser and a web server. Which protection specifically addresses this case?",
   "o": [
    "Hashing of stored records",
    "Encryption at rest",
    "Disk-level encryption",
    "Encryption in transit"
   ],
   "a": 3,
   "e": "Encryption in transit protects data as it travels across a network, such as TLS between a browser and server. Encryption at rest instead protects stored data on disk, not data actively in motion.",
   "d": 1
  },
  {
   "id": 13,
   "t": "governance-risk-compliance",
   "x": "An organization writes policies defining how employees must handle customer data and who approves exceptions. Which discipline does this represent?",
   "o": [
    "Compliance",
    "Governance",
    "Authentication",
    "Risk assessment"
   ],
   "a": 1,
   "e": "Governance is the set of policies, roles, and processes that direct how an organization operates and manages its data. Compliance instead measures adherence to external laws and standards, not the internal rule-setting.",
   "d": 1
  },
  {
   "id": 14,
   "t": "governance-risk-compliance",
   "x": "A healthcare provider must demonstrate that it meets the requirements of an external regulation such as HIPAA. This obligation falls under which area?",
   "o": [
    "Authorization",
    "Governance",
    "Compliance",
    "Risk management"
   ],
   "a": 2,
   "e": "Compliance is meeting the requirements of external laws, regulations, and standards that apply to the organization. Governance sets internal policy but does not itself constitute the external adherence being demonstrated.",
   "d": 1
  },
  {
   "id": 15,
   "t": "governance-risk-compliance",
   "x": "A team identifies threats to a new application, rates their likelihood and impact, and decides which to mitigate first. Which process is this?",
   "o": [
    "Data classification",
    "Compliance auditing",
    "Identity governance",
    "Risk management"
   ],
   "a": 3,
   "e": "Risk management is the process of identifying, assessing, and prioritizing threats so resources address the most serious first. Compliance auditing checks conformance to rules and does not itself rank threats by likelihood and impact.",
   "d": 1
  },
  {
   "id": 16,
   "t": "identity-as-primary-perimeter",
   "x": "With staff working from home and apps hosted in the cloud, a firm can no longer rely on the network edge as its main boundary. What is now the primary security perimeter?",
   "o": [
    "Identity",
    "The office network",
    "The VPN concentrator",
    "The corporate firewall"
   ],
   "a": 0,
   "e": "As users and resources move outside the traditional network, identity becomes the primary perimeter because access decisions center on verifying who is connecting. The firewall and office network no longer enclose all resources.",
   "d": 1
  },
  {
   "id": 17,
   "t": "identity-as-primary-perimeter",
   "x": "Because modern resources are reached from any device and location, which element must be verified before granting access in an identity-centric approach?",
   "o": [
    "The brand of the network firewall in use",
    "The speed of the internet connection",
    "The physical location of the office building",
    "The identity behind each access request"
   ],
   "a": 3,
   "e": "When identity is the perimeter, verifying who or what is requesting access is the control that gates resources, regardless of network. Physical location no longer defines the trust boundary.",
   "d": 1
  },
  {
   "id": 18,
   "t": "identity-as-primary-perimeter",
   "x": "A CISO explains that securing accounts and credentials is now more central than defending the office LAN. Which shift in security thinking does this describe?",
   "o": [
    "Identity as the primary perimeter",
    "The shared responsibility model",
    "The defense in depth model",
    "The principle of least privilege"
   ],
   "a": 0,
   "e": "Treating accounts and credentials as the main line of defense reflects identity becoming the primary perimeter in cloud and mobile environments. Least privilege is a supporting practice, not this overall shift.",
   "d": 1
  },
  {
   "id": 19,
   "t": "authentication",
   "x": "During sign-in a user first proves who they claim to be by entering valid credentials. Which security process is taking place at this step?",
   "o": [
    "Authorization",
    "Auditing",
    "Authentication",
    "Accounting"
   ],
   "a": 2,
   "e": "Authentication is the process of proving a claimed identity, typically with credentials. Authorization is a separate step that decides what the verified user is allowed to do.",
   "d": 1
  },
  {
   "id": 20,
   "t": "authentication",
   "x": "To strengthen login, an app requires a password plus a code from a phone authenticator. What security control does combining these factors provide?",
   "o": [
    "Multifactor authentication",
    "Role-based access control",
    "Conditional data encryption",
    "Single sign-on access"
   ],
   "a": 0,
   "e": "Requiring two different factor types, something you know and something you have, is multifactor authentication, which greatly reduces credential-theft risk. Single sign-on reduces logins but does not by itself add a second factor.",
   "d": 1
  },
  {
   "id": 21,
   "t": "authentication",
   "x": "A fingerprint scan used to unlock a corporate laptop is an example of which authentication factor category?",
   "o": [
    "Something you have",
    "Something you know",
    "Somewhere you are",
    "Something you are"
   ],
   "a": 3,
   "e": "A fingerprint is a biometric trait, which falls under the something you are factor. A password would be something you know, and a token would be something you have.",
   "d": 1
  },
  {
   "id": 22,
   "t": "authorization",
   "x": "After a user successfully signs in, the system checks which files and features that account is permitted to use. Which process governs this decision?",
   "o": [
    "Authorization",
    "Authentication",
    "Provisioning",
    "Federation"
   ],
   "a": 0,
   "e": "Authorization determines what an authenticated identity is allowed to access or do. Authentication only confirms the identity; it does not grant or restrict specific permissions.",
   "d": 1
  },
  {
   "id": 23,
   "t": "authorization",
   "x": "An organization grants permissions by assigning employees to job-based roles such as billing clerk rather than to each person individually. Which access model is this?",
   "o": [
    "Role-based access control",
    "Discretionary access control",
    "Mandatory access control",
    "Attribute-based access control"
   ],
   "a": 0,
   "e": "Role-based access control assigns permissions to roles that users are placed into, simplifying administration for groups with the same needs. Attribute-based control instead evaluates dynamic attributes rather than fixed roles.",
   "d": 1
  },
  {
   "id": 24,
   "t": "authorization",
   "x": "A policy states that each account should receive only the minimum permissions required to do its job and nothing more. Which principle is being enforced?",
   "o": [
    "Defense in depth",
    "Least privilege",
    "Separation of duties",
    "Implicit trust"
   ],
   "a": 1,
   "e": "Least privilege limits every identity to the minimum access needed, reducing the damage a compromised account can cause. Separation of duties splits sensitive tasks among people but does not itself minimize each account's rights.",
   "d": 1
  },
  {
   "id": 25,
   "t": "identity-providers",
   "x": "Several cloud apps rely on one central service to authenticate users and issue security tokens on their behalf. What is this central service called?",
   "o": [
    "An identity provider",
    "A domain controller",
    "A load balancer",
    "A certificate authority"
   ],
   "a": 0,
   "e": "An identity provider authenticates users and issues tokens that applications trust, centralizing sign-in. A certificate authority issues digital certificates and does not perform user sign-in.",
   "d": 1
  },
  {
   "id": 26,
   "t": "identity-providers",
   "x": "Which Microsoft cloud service acts as an identity provider that authenticates users and manages access to SaaS and internal apps?",
   "o": [
    "Microsoft Entra ID",
    "Microsoft Purview compliance",
    "Microsoft Defender for Cloud",
    "Microsoft Sentinel analytics"
   ],
   "a": 0,
   "e": "Microsoft Entra ID, formerly Azure Active Directory, is the cloud identity provider that authenticates users and controls access to applications. Defender and Sentinel are security tooling, not the identity provider.",
   "d": 1
  },
  {
   "id": 27,
   "t": "identity-providers",
   "x": "A company connects all its applications to a single identity provider. Which benefit does this arrangement most directly deliver?",
   "o": [
    "Central management of users and single sign-on",
    "Elimination of the need to patch applications",
    "Automatic physical security of the datacenter",
    "Guaranteed encryption of every stored database"
   ],
   "a": 0,
   "e": "A central identity provider gives one place to manage identities and enables single sign-on across connected apps. It does not handle datacenter physical security or application patching.",
   "d": 1
  },
  {
   "id": 28,
   "t": "directory-services-active-directory",
   "x": "An on-premises Windows network uses a database of users, computers, and groups managed by domain controllers. Which service provides this?",
   "o": [
    "Windows Defender Firewall",
    "Active Directory Domain Services",
    "Microsoft Entra ID",
    "Azure Blob Storage"
   ],
   "a": 1,
   "e": "Active Directory Domain Services stores and manages on-premises users, computers, and groups through domain controllers. Microsoft Entra ID is the cloud identity service and does not use traditional domain controllers.",
   "d": 1
  },
  {
   "id": 29,
   "t": "directory-services-active-directory",
   "x": "How does traditional Active Directory Domain Services differ from Microsoft Entra ID in the way clients communicate with it?",
   "o": [
    "It uses Kerberos and LDAP instead of web-based protocols",
    "It runs only as a cloud-hosted managed service",
    "It stores no user or group objects at all",
    "It uses SAML and OAuth instead of directory protocols"
   ],
   "a": 0,
   "e": "On-premises Active Directory communicates using Kerberos and LDAP, while Entra ID uses modern web protocols such as SAML, OAuth, and OpenID Connect. Entra ID is not simply a hosted copy of traditional Active Directory.",
   "d": 1
  },
  {
   "id": 30,
   "t": "directory-services-active-directory",
   "x": "In an on-premises directory, which server component authenticates logins and enforces group policy across the domain?",
   "o": [
    "The domain controller",
    "The reverse proxy",
    "The identity provider",
    "The public key server"
   ],
   "a": 0,
   "e": "A domain controller is the server that authenticates logins and applies group policy within an Active Directory domain. An identity provider serves that role in cloud identity, not the on-premises domain.",
   "d": 1
  },
  {
   "id": 31,
   "t": "federation",
   "x": "A user signs in with their own company account to reach a partner organization's application without a separate password. Which trust arrangement enables this?",
   "o": [
    "Delegation of control",
    "Single sign-on",
    "Federation",
    "Multifactor authentication"
   ],
   "a": 2,
   "e": "Federation establishes trust between separate identity systems so users authenticate with their home organization to reach another's resources. Single sign-on reduces logins within one trust domain but does not by itself link two organizations.",
   "d": 1
  },
  {
   "id": 32,
   "t": "federation",
   "x": "Two universities agree that each will accept the other's authenticated identities so researchers can share resources. What is this cross-boundary relationship called?",
   "o": [
    "A password vault",
    "A federation trust",
    "A domain migration",
    "A network bridge"
   ],
   "a": 1,
   "e": "A federation trust lets each organization accept identities authenticated by the other, enabling cross-boundary access. A domain migration moves objects between directories and does not establish ongoing cross-organization trust.",
   "d": 1
  },
  {
   "id": 33,
   "t": "federation",
   "x": "How does federation differ from single sign-on when a person accesses an application belonging to a different organization?",
   "o": [
    "Federation replaces the need for any authentication",
    "Federation only works inside a single company",
    "Federation always requires a shared password database",
    "Federation extends trust between different organizations"
   ],
   "a": 3,
   "e": "Federation extends authentication trust across organizational boundaries, so a user's home identity is honored elsewhere. It does not merge password databases or remove the need to authenticate.",
   "d": 1
  },
  {
   "id": 34,
   "t": "federation",
   "x": "Which open standards are commonly used to exchange authentication information between federated identity systems? Select TWO.",
   "o": [
    "Kerberos",
    "OpenID Connect",
    "SAML",
    "SMTP",
    "LDAP"
   ],
   "a": 1,
   "e": "SAML and OpenID Connect are widely used web standards for passing authentication and identity claims between federated systems. LDAP and Kerberos are on-premises directory protocols, and SMTP handles email.",
   "d": 1,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 35,
   "t": "microsoft-entra-id",
   "x": "A company wants a cloud service that manages user sign-in and controls access to Microsoft 365 and other SaaS apps. Which Microsoft offering fills this role?",
   "o": [
    "Microsoft Defender for Cloud",
    "Microsoft Purview",
    "Microsoft Entra ID",
    "Microsoft Intune"
   ],
   "a": 2,
   "e": "Microsoft Entra ID is the cloud identity and access management service that authenticates users and governs access to apps. Intune manages devices rather than identities.",
   "d": 2
  },
  {
   "id": 36,
   "t": "microsoft-entra-id",
   "x": "An administrator notices that Azure Active Directory now appears under a new name in the portal. What is the current name for this identity service?",
   "o": [
    "Microsoft Entra ID",
    "Microsoft Entra Domain Services",
    "Microsoft Entra Permissions Management",
    "Microsoft Entra Verified ID"
   ],
   "a": 0,
   "e": "Azure Active Directory was renamed Microsoft Entra ID, and the capability itself is unchanged. Verified ID and Permissions Management are separate products in the Entra family.",
   "d": 2
  },
  {
   "id": 37,
   "t": "microsoft-entra-id",
   "x": "In Microsoft Entra ID, what term describes the dedicated, isolated instance of the directory an organization receives when it signs up for a Microsoft cloud service?",
   "o": [
    "A management group",
    "A tenant",
    "A subscription",
    "A resource group"
   ],
   "a": 1,
   "e": "A tenant is the organization's dedicated Entra ID instance holding its users and app registrations. A subscription is a billing container for Azure resources, not the directory itself.",
   "d": 2
  },
  {
   "id": 38,
   "t": "microsoft-entra-id",
   "x": "A user signs in once and then reaches many connected applications without re-entering credentials. Which Microsoft Entra ID capability enables this experience?",
   "o": [
    "Single sign-on",
    "Smart lockout",
    "Password writeback",
    "Continuous access evaluation"
   ],
   "a": 0,
   "e": "Single sign-on lets a user authenticate once and then access multiple integrated apps. Smart lockout instead protects accounts from brute-force password guessing.",
   "d": 2
  },
  {
   "id": 39,
   "t": "microsoft-entra-id",
   "x": "Contoso wants to invite partner staff from another organization to collaborate on shared apps while those partners keep using their own credentials. Which Entra ID capability supports this?",
   "o": [
    "Password hash synchronization",
    "Business-to-business collaboration",
    "Privileged Identity Management",
    "Conditional Access"
   ],
   "a": 1,
   "e": "B2B collaboration lets external guests sign in with their home credentials to reach shared resources. Privileged Identity Management instead governs just-in-time activation of admin roles.",
   "d": 2
  },
  {
   "id": 40,
   "t": "identity-types-agent-id",
   "x": "An application needs its own identity in Microsoft Entra ID so it can be assigned permissions to call an API. Which object represents the app's identity in the tenant?",
   "o": [
    "An administrative unit",
    "A security group",
    "A dynamic device",
    "A service principal"
   ],
   "a": 3,
   "e": "A service principal is the local representation of an application used to grant it access and permissions. A security group organizes users, not application identities.",
   "d": 2
  },
  {
   "id": 41,
   "t": "identity-types-agent-id",
   "x": "A developer wants an Azure app to reach a database without storing any secrets or credentials in code. Which Entra identity type is designed for this?",
   "o": [
    "A guest user account",
    "A federated credential store",
    "A managed identity",
    "A synchronized device object"
   ],
   "a": 2,
   "e": "A managed identity gives an Azure resource an automatically handled identity so no credentials live in code. Guest accounts represent external people, not Azure services.",
   "d": 2
  },
  {
   "id": 42,
   "t": "identity-types-agent-id",
   "x": "Which statement correctly describes a system-assigned managed identity in Microsoft Entra ID?",
   "o": [
    "It is tied to one resource and deleted when that resource is removed",
    "It represents an external partner invited from another tenant",
    "It must be renewed manually with a fresh client secret each month",
    "It is created standalone and shared across many different resources"
   ],
   "a": 0,
   "e": "A system-assigned managed identity shares the lifecycle of its resource and is removed along with it. A user-assigned identity, by contrast, is standalone and can be shared.",
   "d": 2
  },
  {
   "id": 43,
   "t": "identity-types-agent-id",
   "x": "An organization joins laptops to Entra ID so Conditional Access can evaluate machine state during sign-in. What kind of identity object does this create?",
   "o": [
    "A workload identity",
    "A managed identity",
    "A device identity",
    "A service principal"
   ],
   "a": 2,
   "e": "Joining or registering a machine creates a device identity in Entra ID that policies can reference. A service principal instead represents an application.",
   "d": 2
  },
  {
   "id": 44,
   "t": "identity-types-agent-id",
   "x": "Microsoft Entra introduced identities so autonomous AI agents can authenticate and be governed like other principals. What are these called?",
   "o": [
    "Verified credentials",
    "Access packages",
    "Agent identities",
    "Named locations"
   ],
   "a": 2,
   "e": "Agent ID gives AI agents distinct, governable identities so their access can be managed and audited. Access packages instead bundle resources together for entitlement management.",
   "d": 2
  },
  {
   "id": 45,
   "t": "identity-types-agent-id",
   "x": "In Microsoft Entra ID, which term describes an internal employee account that belongs to the organization's own tenant?",
   "o": [
    "A managed identity",
    "A service principal",
    "A guest user",
    "A member user"
   ],
   "a": 3,
   "e": "Member users are the organization's own internal accounts, while guest users are external collaborators invited into the tenant. Service principals represent apps rather than people.",
   "d": 2
  },
  {
   "id": 46,
   "t": "hybrid-identity",
   "x": "An enterprise keeps its accounts in on-premises Active Directory but wants those same users to sign in to Microsoft 365. Which tool synchronizes the accounts to Entra ID?",
   "o": [
    "Microsoft Intune",
    "Microsoft Entra Connect",
    "Microsoft Entra Permissions Management",
    "Microsoft Entra Verified ID"
   ],
   "a": 1,
   "e": "Microsoft Entra Connect synchronizes on-premises AD accounts into Entra ID to create hybrid identities. Verified ID handles decentralized credentials, not directory sync.",
   "d": 2
  },
  {
   "id": 47,
   "t": "hybrid-identity",
   "x": "Which hybrid identity method sends a hash of the on-premises password to Entra ID so users sign in to the cloud with the same password?",
   "o": [
    "Password hash synchronization",
    "Pass-through authentication",
    "Certificate-based authentication",
    "Federated single sign-on"
   ],
   "a": 0,
   "e": "Password hash synchronization stores a hash of the user's password hash in Entra ID so the cloud can validate sign-ins. Pass-through authentication instead validates against on-premises AD in real time.",
   "d": 2
  },
  {
   "id": 48,
   "t": "hybrid-identity",
   "x": "A security team wants cloud sign-ins validated directly against on-premises Active Directory in real time, with no password hashes kept in the cloud. Which method meets this need?",
   "o": [
    "Pass-through authentication",
    "Business-to-business collaboration",
    "Self-service password reset",
    "Password hash synchronization"
   ],
   "a": 0,
   "e": "Pass-through authentication validates the password against on-premises AD at sign-in time using a lightweight agent. Password hash synchronization instead keeps a password hash in the cloud.",
   "d": 2
  },
  {
   "id": 49,
   "t": "hybrid-identity",
   "x": "An organization requires that all authentication happen through its existing AD FS servers rather than in Entra ID. Which hybrid identity approach does this describe?",
   "o": [
    "Password hash synchronization",
    "Managed identity",
    "Federation",
    "Cloud-only identity"
   ],
   "a": 2,
   "e": "Federation hands authentication to an external identity provider such as AD FS, with Entra ID trusting the tokens it issues. A cloud-only identity has no on-premises component at all.",
   "d": 2
  },
  {
   "id": 50,
   "t": "hybrid-identity",
   "x": "What best describes a hybrid identity in the Microsoft Entra context?",
   "o": [
    "A user account created only in the cloud with no local copy",
    "A temporary account that expires after just one sign-in",
    "A single account synchronized to both on-premises AD and the cloud",
    "A shared account used by several employees at the same time"
   ],
   "a": 2,
   "e": "A hybrid identity is one account represented in both on-premises AD and Entra ID through directory synchronization. A cloud-only account has no on-premises counterpart.",
   "d": 2
  },
  {
   "id": 51,
   "t": "hybrid-identity",
   "x": "Which lightweight alternative to the Entra Connect Sync application uses a cloud-managed agent to synchronize accounts from multiple disconnected AD forests?",
   "o": [
    "Microsoft Entra Domain Services",
    "Microsoft Entra Private Access",
    "Microsoft Entra Connect cloud sync",
    "Microsoft Entra Verified ID"
   ],
   "a": 2,
   "e": "Entra Connect cloud sync uses a lightweight, cloud-managed provisioning agent well suited to multiple or disconnected forests. Domain Services instead provides managed domain controllers in Azure.",
   "d": 2
  },
  {
   "id": 52,
   "t": "authentication-methods",
   "x": "A company wants employees to sign in without any password by tapping a hardware key that supports the WebAuthn standard. Which authentication method is this?",
   "o": [
    "Static security questions",
    "Temporary Access Pass",
    "FIDO2 security keys",
    "SMS text message codes"
   ],
   "a": 2,
   "e": "FIDO2 security keys are phishing-resistant, passwordless credentials based on the WebAuthn standard. SMS codes still rely on a password plus a texted number.",
   "d": 2
  },
  {
   "id": 53,
   "t": "authentication-methods",
   "x": "Which passwordless method lets a user sign in to a Windows device with a PIN or biometric that is bound to that specific device?",
   "o": [
    "OATH hardware token",
    "Windows Hello for Business",
    "Password hash synchronization",
    "Voice call verification"
   ],
   "a": 1,
   "e": "Windows Hello for Business ties a PIN or biometric gesture to the device using asymmetric keys, so no password travels the network. An OATH token only produces a numeric code.",
   "d": 2
  },
  {
   "id": 54,
   "t": "authentication-methods",
   "x": "Microsoft Authenticator can now store a phishing-resistant, passwordless credential that follows the FIDO2 standard on the user's phone. What is this credential called?",
   "o": [
    "A recovery code",
    "A passkey",
    "A security question",
    "A password"
   ],
   "a": 1,
   "e": "A passkey is a FIDO2 credential, storable in Authenticator, that signs in without a password and resists phishing. A recovery code is only a one-time fallback.",
   "d": 2
  },
  {
   "id": 55,
   "t": "authentication-methods",
   "x": "A government agency issues smart cards holding X.509 certificates and wants staff to authenticate to Entra ID directly with them. Which method supports this?",
   "o": [
    "Voice call phone verification",
    "Text message code verification",
    "Certificate-based authentication",
    "Self-service password reset"
   ],
   "a": 2,
   "e": "Certificate-based authentication lets users present an X.509 certificate, such as one on a smart card, straight to Entra ID. Self-service password reset instead helps users recover their passwords.",
   "d": 2
  },
  {
   "id": 56,
   "t": "authentication-methods",
   "x": "A new employee has no credentials yet and needs a time-limited passcode to register a passwordless method during first sign-in. Which method provides this?",
   "o": [
    "FIDO2 security key",
    "OATH software token",
    "Temporary Access Pass",
    "Windows Hello for Business"
   ],
   "a": 2,
   "e": "A Temporary Access Pass is a time-limited passcode that lets a user onboard or recover by registering other methods. A FIDO2 key is a permanent credential, not a bootstrap code.",
   "d": 2
  },
  {
   "id": 57,
   "t": "authentication-methods",
   "x": "Which method lets a user approve a sign-in by tapping Approve on a notification sent to an app on their phone?",
   "o": [
    "A push notification in Authenticator",
    "A certificate on a smart card",
    "A one-time printed backup code",
    "A password typed at each sign-in"
   ],
   "a": 0,
   "e": "The Microsoft Authenticator app can send a push notification the user approves to verify a sign-in. A printed backup code must instead be typed in manually.",
   "d": 2
  },
  {
   "id": 58,
   "t": "multifactor-authentication",
   "x": "Multifactor authentication requires evidence from at least two different categories. Which set lists three valid authentication factor categories?",
   "o": [
    "Something you know, something you have, and something you are",
    "Somewhere you live, someone you know, and something you own",
    "Something you buy, something you sell, and something you rent",
    "Something you know, something you read, and something you write"
   ],
   "a": 0,
   "e": "MFA combines factors from distinct categories: knowledge, possession, and inherence. Using two passwords would still be a single category and not true MFA.",
   "d": 2
  },
  {
   "id": 59,
   "t": "multifactor-authentication",
   "x": "A user enters a correct password and is then prompted to approve a notification on a registered phone. Which security control does the second prompt represent?",
   "o": [
    "Password writeback",
    "Directory synchronization",
    "Multifactor authentication",
    "Single sign-on"
   ],
   "a": 2,
   "e": "Requiring a second, possession-based factor after the password is multifactor authentication. Single sign-on reduces prompts rather than adding a verification step.",
   "d": 2
  },
  {
   "id": 60,
   "t": "multifactor-authentication",
   "x": "Which free baseline in Entra ID automatically enforces MFA registration for all users and blocks legacy authentication without custom policies?",
   "o": [
    "Conditional Access",
    "Privileged Identity Management",
    "Security defaults",
    "Entitlement management"
   ],
   "a": 2,
   "e": "Security defaults provide preconfigured protections, including required MFA registration, at no extra cost. Conditional Access instead offers granular, customizable rules.",
   "d": 2
  },
  {
   "id": 61,
   "t": "multifactor-authentication",
   "x": "An administrator wants to require MFA only when users sign in from outside the corporate network. Which Entra ID feature applies this kind of targeted rule?",
   "o": [
    "Self-service password reset",
    "Security defaults",
    "Entra Password Protection",
    "Conditional Access"
   ],
   "a": 3,
   "e": "Conditional Access evaluates signals such as location and can require MFA under specific conditions. Security defaults apply broadly and cannot be scoped this precisely.",
   "d": 2
  },
  {
   "id": 62,
   "t": "multifactor-authentication",
   "x": "In an MFA prompt, scanning a fingerprint satisfies which category of authentication factor?",
   "o": [
    "Something you have",
    "Something you know",
    "Somewhere you are",
    "Something you are"
   ],
   "a": 3,
   "e": "A fingerprint is a biometric trait, so it belongs to the something you are category. A hardware token would instead be something you have.",
   "d": 2
  },
  {
   "id": 63,
   "t": "multifactor-authentication",
   "x": "Why does enabling MFA reduce the risk that a single stolen password leads to a breach?",
   "o": [
    "An attacker still lacks the user's second factor to finish sign-in",
    "The password is automatically changed after every login attempt",
    "The account is permanently disabled once a password is entered",
    "All future passwords become impossible for the user to reset"
   ],
   "a": 0,
   "e": "Even with a valid password, an attacker cannot pass the second factor the legitimate user holds. MFA does not rotate the password on each attempt.",
   "d": 2
  },
  {
   "id": 64,
   "t": "password-protection-management",
   "x": "An organization wants users to reset forgotten passwords themselves after verifying identity, cutting help-desk tickets. Which Entra ID feature enables this?",
   "o": [
    "Self-service password reset",
    "Password hash synchronization",
    "Smart lockout",
    "Conditional Access"
   ],
   "a": 0,
   "e": "Self-service password reset lets users securely reset or unlock their own accounts after verification. Smart lockout instead throttles brute-force guessing.",
   "d": 2
  },
  {
   "id": 65,
   "t": "password-protection-management",
   "x": "Which Entra ID capability blocks users from choosing weak or common passwords by checking them against global and custom banned lists?",
   "o": [
    "Self-service password reset",
    "Temporary Access Pass",
    "Conditional Access",
    "Microsoft Entra Password Protection"
   ],
   "a": 3,
   "e": "Entra Password Protection enforces global and custom banned-password lists to stop weak choices. A Temporary Access Pass instead onboards users to passwordless methods.",
   "d": 2
  },
  {
   "id": 66,
   "t": "password-protection-management",
   "x": "Which feature protects accounts by temporarily locking sign-ins after repeated bad password attempts while distinguishing the real user from attackers?",
   "o": [
    "Password writeback",
    "Smart lockout",
    "Single sign-on",
    "Federation"
   ],
   "a": 1,
   "e": "Smart lockout locks sign-ins after too many failures and uses familiarity signals to avoid punishing the genuine user. Password writeback instead syncs cloud password changes back to on-premises AD.",
   "d": 2
  },
  {
   "id": 67,
   "t": "password-protection-management",
   "x": "In a hybrid environment, which capability sends a password change made through cloud self-service reset back to on-premises Active Directory?",
   "o": [
    "Pass-through authentication",
    "Conditional Access",
    "Password writeback",
    "Smart lockout"
   ],
   "a": 2,
   "e": "Password writeback ensures a cloud self-service password change is written back to on-premises AD, keeping both in sync. Pass-through authentication instead validates sign-ins against on-premises AD.",
   "d": 2
  },
  {
   "id": 68,
   "t": "password-protection-management",
   "x": "A company wants to block its own brand name and local sports teams from being used in passwords across the tenant. Which option supports this?",
   "o": [
    "An access review",
    "A named location policy",
    "A custom banned password list",
    "A dynamic group rule"
   ],
   "a": 2,
   "e": "A custom banned password list lets an organization add its own terms to the words Entra Password Protection rejects. A named location instead defines trusted IP ranges for Conditional Access.",
   "d": 2
  },
  {
   "id": 69,
   "t": "password-protection-management",
   "x": "Before a user can rely on self-service password reset, what must they typically complete first?",
   "o": [
    "Move their account into a separate cloud tenant",
    "Register one or more authentication methods for verification",
    "Delete their existing password from the directory",
    "Turn off multifactor authentication on the account"
   ],
   "a": 1,
   "e": "Users must register verification methods, such as a phone or the Authenticator app, before they can complete a self-service reset. Disabling MFA is not required and would weaken security.",
   "d": 2
  },
  {
   "id": 70,
   "t": "conditional-access",
   "x": "An administrator wants to require multifactor authentication only when a sign-in comes from outside the corporate network. Which Conditional Access element evaluates the connection location?",
   "o": [
    "An access review that recertifies group members",
    "A signal such as network location or IP range",
    "A grant control that resets the user password",
    "A lifecycle workflow that offboards the user"
   ],
   "a": 1,
   "e": "Conditional Access collects signals like user, device, location, and risk before deciding. Access reviews recertify existing access rather than evaluating a live sign-in.",
   "d": 2
  },
  {
   "id": 71,
   "t": "conditional-access",
   "x": "A Conditional Access policy determines that a sign-in meets its assignment conditions. What does the policy produce next to control the sign-in outcome?",
   "o": [
    "A permanent role assignment for the account",
    "An eligible role the user can later activate",
    "A risk report summarizing past detections",
    "A decision to block or to grant with requirements"
   ],
   "a": 3,
   "e": "After matching conditions, the policy makes a decision: block access or grant it with controls like MFA. Eligible roles belong to Privileged Identity Management, not Conditional Access.",
   "d": 2
  },
  {
   "id": 72,
   "t": "conditional-access",
   "x": "Company policy states that a finance web app may be opened only from managed, compliant devices. Which Conditional Access grant control enforces this?",
   "o": [
    "Require the user to complete an access review",
    "Require the group owner to renew membership",
    "Require the device to be marked compliant",
    "Require a Global Administrator to approve it"
   ],
   "a": 2,
   "e": "Grant controls can require a compliant or hybrid-joined device before allowing access. Access reviews and group renewals are governance tasks, not sign-in grant controls.",
   "d": 2
  },
  {
   "id": 73,
   "t": "conditional-access",
   "x": "An organization wants signed-in users of a sensitive app to have limited browser sessions with no ability to download files. Which Conditional Access capability applies these in-app restrictions?",
   "o": [
    "A risk-based user classification from reports",
    "A just-in-time activation of a privileged role",
    "A session control that enforces app-enforced restrictions",
    "A built-in directory role assigned to the user"
   ],
   "a": 2,
   "e": "Session controls let a policy limit the experience inside a cloud app, such as blocking downloads. Directory roles grant permissions but do not shape the live session.",
   "d": 2
  },
  {
   "id": 74,
   "t": "conditional-access",
   "x": "Conditional Access is often called the identity-centric enforcement point of a Zero Trust approach. What does a policy combine to reach an enforcement outcome?",
   "o": [
    "A catalog of access packages for external guests",
    "A set of eligible assignments needing activation",
    "User and app assignments, conditions, and controls",
    "A schedule of quarterly recertification campaigns"
   ],
   "a": 2,
   "e": "A Conditional Access policy joins assignments, conditions, and access controls into an if-then rule. Access packages and recertification are entitlement management and access review features.",
   "d": 2
  },
  {
   "id": 75,
   "t": "conditional-access",
   "x": "A help desk sets a rule so that every administrator role holder must pass multifactor authentication on each sign-in. This if-then enforcement is delivered by which Entra capability?",
   "o": [
    "A lifecycle workflow provisioning trigger",
    "A Conditional Access policy control",
    "An access review recertification campaign",
    "An entitlement management access package"
   ],
   "a": 1,
   "e": "Conditional Access expresses if-then rules such as requiring MFA for admins. Entitlement management provisions access packages and does not enforce sign-in-time MFA.",
   "d": 2
  },
  {
   "id": 76,
   "t": "entra-roles-rbac",
   "x": "A new employee only needs to reset passwords and manage basic user accounts in Entra. Following least privilege, which built-in role best fits this responsibility?",
   "o": [
    "Security Reader",
    "User Administrator",
    "Global Administrator",
    "Application Developer"
   ],
   "a": 1,
   "e": "User Administrator grants user and password management without broad tenant control. Global Administrator would over-provision the person far beyond the stated need.",
   "d": 2
  },
  {
   "id": 77,
   "t": "entra-roles-rbac",
   "x": "Which statement best describes the Global Administrator role in Microsoft Entra ID?",
   "o": [
    "It can activate eligible roles but not change settings",
    "It is limited to one application registration",
    "It only allows reading sign-in and audit logs",
    "It grants broad rights over nearly all tenant settings"
   ],
   "a": 3,
   "e": "Global Administrator holds the broadest privileges over the tenant, so it should be tightly limited. A read-only scope describes roles like Security Reader instead.",
   "d": 2
  },
  {
   "id": 78,
   "t": "entra-roles-rbac",
   "x": "Why does Microsoft Entra provide role-based access control with built-in administrator roles?",
   "o": [
    "To grant administrators only the permissions their job requires",
    "To remove the need for any user authentication",
    "To replace Conditional Access sign-in policies",
    "To store passwords for all cloud applications"
   ],
   "a": 0,
   "e": "Role-based access control assigns scoped permissions so admins get just what they need. It does not replace authentication or Conditional Access enforcement.",
   "d": 2
  },
  {
   "id": 79,
   "t": "entra-roles-rbac",
   "x": "An administrator assigns the Helpdesk Administrator role but wants it to apply only to one administrative unit rather than the whole tenant. What makes this possible?",
   "o": [
    "Converting the role into an access package request",
    "Scoping the role assignment to an administrative unit",
    "Publishing the role inside a lifecycle workflow",
    "Turning the role into a Conditional Access grant"
   ],
   "a": 1,
   "e": "Roles can be scoped to an administrative unit so permissions cover only that subset of the directory. Access packages and workflows are separate governance features.",
   "d": 2
  },
  {
   "id": 80,
   "t": "entra-roles-rbac",
   "x": "A compliance analyst must view security configurations and reports but must never change them. Which built-in role satisfies this requirement?",
   "o": [
    "Security Administrator",
    "Global Administrator",
    "Security Reader",
    "Privileged Role Administrator"
   ],
   "a": 2,
   "e": "Security Reader gives read-only visibility into security features and reports. Security Administrator and the others allow changes the analyst should not make.",
   "d": 2
  },
  {
   "id": 81,
   "t": "entra-roles-rbac",
   "x": "Which built-in role is specifically designed to manage role assignments and configure Privileged Identity Management settings?",
   "o": [
    "Guest Inviter",
    "Privileged Role Administrator",
    "Reports Reader",
    "Groups Administrator"
   ],
   "a": 1,
   "e": "Privileged Role Administrator manages role assignments and PIM configuration. Reports Reader and Guest Inviter hold narrow, unrelated permissions.",
   "d": 2
  },
  {
   "id": 82,
   "t": "entra-id-governance",
   "x": "A project team frequently adds contractors who each need the same collection of groups, apps, and SharePoint sites. Which Entra ID Governance feature bundles these resources for streamlined assignment?",
   "o": [
    "Entitlement management access packages",
    "Conditional Access session controls",
    "Password protection banned-password lists",
    "Entra ID Protection risk policies"
   ],
   "a": 0,
   "e": "Entitlement management groups related resources into access packages users can request. The other features address sign-in enforcement or password hygiene, not access bundling.",
   "d": 2
  },
  {
   "id": 83,
   "t": "entra-id-governance",
   "x": "An organization wants access to be provisioned automatically when employees are hired and removed when they leave. Which governance concept addresses this joiner-mover-leaver flow?",
   "o": [
    "Identity lifecycle management",
    "Self-service password reset",
    "Conditional Access reporting",
    "Multifactor authentication registration"
   ],
   "a": 0,
   "e": "Identity lifecycle management automates provisioning and deprovisioning as people join, move, and leave. Password reset and MFA registration handle authentication, not lifecycle access.",
   "d": 2
  },
  {
   "id": 84,
   "t": "entra-id-governance",
   "x": "What primary goal does Microsoft Entra ID Governance help organizations achieve?",
   "o": [
    "Blocking malware from reaching managed user devices",
    "Ensuring appropriate access to the right resources",
    "Encrypting all network traffic between branch offices",
    "Storing application secrets inside a hardware module"
   ],
   "a": 1,
   "e": "Identity governance ensures appropriate access to resources and can audit that access over time. Encryption and malware defense are handled by other security tools.",
   "d": 2
  },
  {
   "id": 85,
   "t": "entra-id-governance",
   "x": "When a user requests an access package, an administrator wants a manager to approve it and the access to expire after 90 days. Which capability provides these request policies?",
   "o": [
    "Password protection smart lockout thresholds",
    "Entitlement management policies on the access package",
    "Conditional Access location-based conditions",
    "Entra ID Protection sign-in risk policies"
   ],
   "a": 1,
   "e": "Access package policies define who can request, who approves, and how long access lasts. Risk and lockout features protect authentication rather than govern request approval.",
   "d": 2
  },
  {
   "id": 86,
   "t": "entra-id-governance",
   "x": "An HR team wants automated tasks such as sending a welcome email and enabling accounts to run on an employee's first day. Which feature schedules these tasks around lifecycle events?",
   "o": [
    "Security defaults",
    "Lifecycle workflows",
    "Access reviews",
    "Conditional Access policies"
   ],
   "a": 1,
   "e": "Lifecycle workflows automate onboarding and offboarding tasks tied to joiner, mover, and leaver events. Access reviews recertify existing access instead of running these tasks.",
   "d": 2
  },
  {
   "id": 87,
   "t": "entra-id-governance",
   "x": "A company routinely shares an access package with partners from another business so those guests can request resources. Which entitlement management concept represents that external partner?",
   "o": [
    "A connected organization",
    "A Conditional Access named location",
    "A dynamic membership rule",
    "A named administrative unit"
   ],
   "a": 0,
   "e": "Connected organizations let entitlement management extend access packages to external partners' users. Named locations and dynamic rules serve different, unrelated purposes.",
   "d": 2
  },
  {
   "id": 88,
   "t": "access-reviews",
   "x": "A security team must periodically confirm that only current members of a sensitive group still need their membership. Which Entra governance feature automates this recurring recertification?",
   "o": [
    "Access reviews",
    "Conditional Access",
    "Password protection",
    "Security defaults"
   ],
   "a": 0,
   "e": "Access reviews let organizations recertify group memberships, app access, and role assignments on a schedule. Conditional Access enforces sign-ins but does not recertify membership.",
   "d": 2
  },
  {
   "id": 89,
   "t": "access-reviews",
   "x": "When configuring an access review, an administrator can choose who evaluates whether access should continue. Which option is a valid reviewer choice?",
   "o": [
    "The Conditional Access engine deciding automatically",
    "The tenant billing contact by default",
    "Group owners, chosen reviewers, or the users themselves",
    "An anonymous external auditor with no account"
   ],
   "a": 2,
   "e": "Access reviews can be assigned to owners, designated reviewers, or the users themselves via self-review. A service cannot subjectively decide continued business need.",
   "d": 2
  },
  {
   "id": 90,
   "t": "access-reviews",
   "x": "An organization wants to regularly verify that external guest users still require access to shared groups and applications. How do access reviews help here?",
   "o": [
    "They encrypt the data guests are allowed to open",
    "They recertify guest access and remove stale guest accounts",
    "They assign guests permanent administrator roles",
    "They block all guests from signing in immediately"
   ],
   "a": 1,
   "e": "Access reviews are commonly used to recertify guest access and clean up stale external accounts. They do not encrypt data or grant admin roles.",
   "d": 2
  },
  {
   "id": 91,
   "t": "access-reviews",
   "x": "After an access review finishes, an administrator wants denied access to be revoked automatically without manual steps. Which setting delivers this behavior?",
   "o": [
    "Auto-apply results to resources when the review ends",
    "Escalate all decisions to a Global Administrator",
    "Trigger a Conditional Access block for everyone",
    "Convert the review into an access package request"
   ],
   "a": 0,
   "e": "Access reviews can auto-apply results so removals happen automatically when a review completes. Converting to an access package is unrelated to applying review outcomes.",
   "d": 2
  },
  {
   "id": 92,
   "t": "access-reviews",
   "x": "Which of the following can be the target of an Entra access review?",
   "o": [
    "Only the connected devices' firmware versions",
    "Only the configured password complexity rules",
    "Group memberships, app access, and directory roles",
    "Only the tenant's registered public DNS records"
   ],
   "a": 2,
   "e": "Access reviews can cover group memberships, access to applications, and privileged role assignments. DNS and firmware are outside the identity governance scope.",
   "d": 2
  },
  {
   "id": 93,
   "t": "access-reviews",
   "x": "A governance lead wants to periodically confirm that people holding privileged directory roles still require them. Which approach supports recurring recertification of these role holders?",
   "o": [
    "Self-service password reset for administrators",
    "Password protection paired with smart lockout",
    "Access reviews configured for privileged roles",
    "Security defaults applied to all users"
   ],
   "a": 2,
   "e": "Access reviews can recertify privileged role assignments, often alongside PIM, to remove standing access. Password and lockout tools do not recertify role membership.",
   "d": 2
  },
  {
   "id": 94,
   "t": "privileged-identity-management",
   "x": "An organization wants administrators to hold no standing privileges and instead request elevated access only when a task requires it. Which capability provides this just-in-time access?",
   "o": [
    "Self-service password reset",
    "Conditional Access session controls",
    "Privileged Identity Management",
    "Entra ID Protection risk policies"
   ],
   "a": 2,
   "e": "Privileged Identity Management provides just-in-time, time-bound access to privileged roles. It reduces standing access that attackers could exploit.",
   "d": 2
  },
  {
   "id": 95,
   "t": "privileged-identity-management",
   "x": "In Privileged Identity Management, a user is assigned a role as eligible rather than active. What must the user do to use the role's permissions?",
   "o": [
    "Wait for the role to expire automatically",
    "Reset the account password before signing in",
    "Activate the role to gain time-bound access",
    "Request that a brand-new tenant be created"
   ],
   "a": 2,
   "e": "An eligible assignment requires the user to activate the role, granting time-bound access, rather than holding it permanently. Active assignments already carry the permissions.",
   "d": 2
  },
  {
   "id": 96,
   "t": "privileged-identity-management",
   "x": "When a user activates an eligible role in Privileged Identity Management, an administrator can require extra steps before access is granted. Which requirements can PIM enforce at activation?",
   "o": [
    "Multifactor authentication, a justification, and approval",
    "Deletion of the user's other role assignments",
    "A permanent change to the tenant's domain name",
    "A full re-registration of the user's device"
   ],
   "a": 0,
   "e": "PIM can require MFA, a business justification, and approval when a role is activated. These controls add oversight to temporary elevation.",
   "d": 2
  },
  {
   "id": 97,
   "t": "privileged-identity-management",
   "x": "A company activates administrative roles only for the few hours needed to complete maintenance. Which Privileged Identity Management characteristic makes elevated access temporary?",
   "o": [
    "Permanent membership that never expires at all",
    "Automatic promotion to Global Administrator",
    "Anonymous access without any sign-in required",
    "Time-bound assignments with a start and expiration"
   ],
   "a": 3,
   "e": "PIM grants time-bound access that expires automatically, limiting the window of privilege. Permanent membership is exactly what PIM is designed to reduce.",
   "d": 2
  },
  {
   "id": 98,
   "t": "privileged-identity-management",
   "x": "A security manager needs a record of who activated privileged roles and when, plus alerts for suspicious activations. Which Privileged Identity Management feature provides this oversight?",
   "o": [
    "Publishing roles as public access packages",
    "Automatic deletion of all sign-in log data",
    "Audit history and access alerts for role activity",
    "Disabling multifactor authentication for admins"
   ],
   "a": 2,
   "e": "PIM keeps an audit history of activations and can alert on risky or excessive activity. Disabling MFA or deleting logs would reduce, not improve, oversight.",
   "d": 2
  },
  {
   "id": 99,
   "t": "privileged-identity-management",
   "x": "Privileged Identity Management can manage just-in-time access for which kinds of assignments?",
   "o": [
    "Only Conditional Access named locations",
    "Only external guest user invitations",
    "Entra roles and Azure resource roles",
    "Only self-service password resets"
   ],
   "a": 2,
   "e": "PIM governs eligible and active assignments for Microsoft Entra roles and Azure resource roles. Password resets and named locations are outside its scope.",
   "d": 2
  },
  {
   "id": 100,
   "t": "entra-id-protection",
   "x": "Entra ID Protection flags a sign-in that originates from an anonymous IP address as potentially compromised. What is this flagged event an example of?",
   "o": [
    "An access package request",
    "A risk detection",
    "A role activation approval",
    "A lifecycle workflow task"
   ],
   "a": 1,
   "e": "Entra ID Protection generates risk detections such as anonymous IP or atypical travel sign-ins. Access packages and workflows are governance features, not risk signals.",
   "d": 2
  },
  {
   "id": 101,
   "t": "entra-id-protection",
   "x": "Entra ID Protection separates user risk from sign-in risk. What does sign-in risk primarily measure?",
   "o": [
    "The count of roles a user can activate",
    "The number of groups a user belongs to",
    "The chance a sign-in is not the legitimate user",
    "The remaining days left on an access package"
   ],
   "a": 2,
   "e": "Sign-in risk estimates the probability that a given sign-in attempt is not the real account owner. User risk instead reflects the chance an account is compromised overall.",
   "d": 2
  },
  {
   "id": 102,
   "t": "entra-id-protection",
   "x": "An administrator wants users flagged with high risk to be forced automatically to reset their password or complete MFA. How is this remediation commonly enforced?",
   "o": [
    "A risk-based Conditional Access policy",
    "An eligible PIM role assignment",
    "A lifecycle workflow leaver task",
    "A quarterly access review campaign"
   ],
   "a": 0,
   "e": "Entra ID Protection risk signals feed risk-based Conditional Access policies that require MFA or password reset. Access reviews and workflows do not respond to live risk.",
   "d": 2
  },
  {
   "id": 103,
   "t": "entra-id-protection",
   "x": "Which of the following is a typical risk detection surfaced by Entra ID Protection?",
   "o": [
    "An owner approving a group membership",
    "Atypical travel between distant sign-in locations",
    "An administrator scoping a role assignment",
    "A user requesting a new access package"
   ],
   "a": 1,
   "e": "Detections such as atypical travel, leaked credentials, and unfamiliar sign-in properties indicate possible compromise. The other items are routine governance actions.",
   "d": 2
  },
  {
   "id": 104,
   "t": "entra-id-protection",
   "x": "What is the primary purpose of Microsoft Entra ID Protection?",
   "o": [
    "To provide just-in-time elevation for admin roles",
    "To bundle resources into requestable access packages",
    "To detect, investigate, and remediate identity-based risks",
    "To schedule recurring recertification of group members"
   ],
   "a": 2,
   "e": "Entra ID Protection detects identity risks, helps investigate them, and can automate remediation. Access packages, reviews, and elevation belong to other Entra features.",
   "d": 2
  },
  {
   "id": 105,
   "t": "azure-ddos-protection",
   "x": "A public-facing web service is being overwhelmed by a flood of traffic from thousands of sources trying to exhaust its bandwidth. Which Azure service is designed to absorb and mitigate this kind of attack?",
   "o": [
    "Azure Key Vault",
    "Azure DDoS Protection",
    "Azure Bastion",
    "Azure Policy"
   ],
   "a": 1,
   "e": "Azure DDoS Protection detects and mitigates volumetric denial-of-service attacks aimed at public IP resources. Azure Key Vault stores secrets and does not filter network floods.",
   "d": 3
  },
  {
   "id": 106,
   "t": "azure-ddos-protection",
   "x": "An organization enables the paid DDoS Network Protection plan on a virtual network. Which capability does this add beyond the always-on platform defenses?",
   "o": [
    "Adaptive real-time tuning with attack metrics and alerts",
    "Automatic patching of guest operating systems",
    "Encryption of data at rest inside storage accounts",
    "Centralized storage of TLS certificates for web apps"
   ],
   "a": 0,
   "e": "The paid plan adds adaptive tuning, telemetry, alerting, and cost protection for protected public IPs. OS patching and certificate storage are unrelated to DDoS mitigation.",
   "d": 3
  },
  {
   "id": 107,
   "t": "azure-ddos-protection",
   "x": "At which layers of the network stack does Azure DDoS Protection primarily focus its mitigation of attacks?",
   "o": [
    "The physical and data-link layers",
    "The session and application layers",
    "The network and transport layers",
    "The application and presentation layers"
   ],
   "a": 2,
   "e": "Azure DDoS Protection defends against layer 3 and layer 4 volumetric and protocol attacks. Application-layer web exploits are instead handled by a Web Application Firewall.",
   "d": 3
  },
  {
   "id": 108,
   "t": "azure-ddos-protection",
   "x": "Which statement about the always-on platform level of Azure DDoS Protection is accurate?",
   "o": [
    "It must be purchased separately for every subscription",
    "It is enabled for all Azure resources at no extra charge",
    "It requires a support ticket to activate per resource",
    "It only protects on-premises datacenters, not Azure"
   ],
   "a": 1,
   "e": "Basic infrastructure-level DDoS protection is built into the Azure platform for free. The enhanced telemetry and tuning features require the paid protection plan.",
   "d": 3
  },
  {
   "id": 109,
   "t": "azure-firewall",
   "x": "A team needs a centrally managed, stateful firewall to filter both inbound and outbound traffic across many virtual networks. Which service fits this requirement?",
   "o": [
    "Azure Bastion",
    "Azure Key Vault",
    "Azure Firewall",
    "Microsoft Defender for Cloud"
   ],
   "a": 2,
   "e": "Azure Firewall is a managed, stateful network firewall service that centrally governs traffic across virtual networks. Bastion only brokers secure administrative sessions to VMs.",
   "d": 3
  },
  {
   "id": 110,
   "t": "azure-firewall",
   "x": "An administrator wants to allow outbound traffic only to a specific list of fully qualified domain names. Which Azure Firewall rule type supports this?",
   "o": [
    "Access reviews",
    "DNAT rules",
    "Application rules",
    "Route tables"
   ],
   "a": 2,
   "e": "Application rules in Azure Firewall filter outbound traffic by fully qualified domain name. Route tables direct traffic paths but do not perform name-based filtering.",
   "d": 3
  },
  {
   "id": 111,
   "t": "azure-firewall",
   "x": "Azure Firewall can automatically block traffic to and from IP addresses and domains known to be malicious. What is this capability called?",
   "o": [
    "Threat intelligence based filtering",
    "Just-in-time VM access",
    "Conditional Access",
    "Adaptive application controls"
   ],
   "a": 0,
   "e": "Threat intelligence based filtering uses Microsoft feeds to alert on or deny traffic tied to known bad addresses and domains. Conditional Access governs identity sign-ins, not network traffic.",
   "d": 3
  },
  {
   "id": 112,
   "t": "azure-firewall",
   "x": "Which characteristic distinguishes a stateful firewall like Azure Firewall from a simple packet filter?",
   "o": [
    "It tracks the state of active connections before allowing traffic",
    "It encrypts every single packet that happens to pass through it",
    "It cannot scale automatically even as network traffic keeps growing",
    "It inspects only the first packet and then ignores the rest of them"
   ],
   "a": 0,
   "e": "A stateful firewall keeps context about established connections, so return traffic for an allowed session is permitted. Azure Firewall also scales automatically with demand.",
   "d": 3
  },
  {
   "id": 113,
   "t": "azure-firewall",
   "x": "An enterprise needs a single place to create and enforce firewall rules across multiple regions and instances. Which tool helps administer this at scale?",
   "o": [
    "Azure Monitor",
    "Azure Advisor",
    "Azure Blueprints",
    "Azure Firewall Manager"
   ],
   "a": 3,
   "e": "Azure Firewall Manager provides central policy and route management for many firewall deployments. Azure Monitor collects telemetry but does not author firewall rules.",
   "d": 3
  },
  {
   "id": 114,
   "t": "azure-web-application-firewall",
   "x": "A public website keeps getting probed with SQL injection and cross-site scripting attempts. Which Azure service is built to block these common web exploits?",
   "o": [
    "Azure Web Application Firewall",
    "Azure DDoS Protection",
    "Azure Bastion",
    "Azure Key Vault"
   ],
   "a": 0,
   "e": "A Web Application Firewall inspects HTTP requests and blocks common attacks such as SQL injection and cross-site scripting. DDoS Protection handles volumetric floods, not application-layer exploits.",
   "d": 3
  },
  {
   "id": 115,
   "t": "azure-web-application-firewall",
   "x": "On which Azure services can a Web Application Firewall be deployed to protect web workloads?",
   "o": [
    "Application Gateway and Azure Front Door",
    "Policy and Blueprints",
    "Key Vault and managed identities",
    "Bastion and VPN Gateway"
   ],
   "a": 0,
   "e": "WAF is available on Application Gateway, Azure Front Door, and CDN to guard web apps. Key Vault and Bastion serve entirely different security functions.",
   "d": 3
  },
  {
   "id": 116,
   "t": "azure-web-application-firewall",
   "x": "A Web Application Firewall is often configured with a managed rule set that addresses the most frequent web vulnerabilities. Which rule set is commonly applied?",
   "o": [
    "The OWASP core rule set",
    "The PCI cardholder schema",
    "The NIST password baseline",
    "The CIS hardened images"
   ],
   "a": 0,
   "e": "WAF policies commonly apply the OWASP Core Rule Set to detect and block the top web application threats. The other options are unrelated standards or images.",
   "d": 3
  },
  {
   "id": 117,
   "t": "azure-web-application-firewall",
   "x": "At which layer of network traffic does a Web Application Firewall inspect requests to protect an application?",
   "o": [
    "The data-link layer where MAC frames are read",
    "The application layer where HTTP requests are evaluated",
    "The transport layer where only ports are examined",
    "The physical layer where signals are measured"
   ],
   "a": 1,
   "e": "A WAF operates at the application layer, examining the content of HTTP and HTTPS requests. Port-level filtering alone cannot detect payload-based web exploits.",
   "d": 3
  },
  {
   "id": 118,
   "t": "network-segmentation-vnets",
   "x": "A company wants to keep its database tier isolated from its web tier so that a breach in one does not easily reach the other. Which approach supports this design?",
   "o": [
    "Placing every resource on one flat public subnet",
    "Disabling all network security rules for simplicity",
    "Assigning all servers the same public IP address",
    "Segmenting resources into separate virtual networks and subnets"
   ],
   "a": 3,
   "e": "Segmenting workloads into distinct virtual networks and subnets limits lateral movement between tiers. A single flat public network would remove those boundaries entirely.",
   "d": 3
  },
  {
   "id": 119,
   "t": "network-segmentation-vnets",
   "x": "What is the primary security benefit of dividing an Azure environment into isolated network segments?",
   "o": [
    "It removes the ongoing need for any identity authentication at all",
    "It limits how far an attacker can move laterally after a compromise",
    "It guarantees unlimited outbound bandwidth for every workload here",
    "It automatically encrypts all data stored across the environment"
   ],
   "a": 1,
   "e": "Segmentation contains a breach by limiting how far an attacker can spread across the environment. It does not replace identity controls or provide encryption on its own.",
   "d": 3
  },
  {
   "id": 120,
   "t": "network-segmentation-vnets",
   "x": "Two virtual networks in Azure need to communicate privately over the Microsoft backbone without traversing the public internet. Which feature enables this?",
   "o": [
    "A shared access signature",
    "Virtual network peering",
    "An internet-facing DNS zone",
    "A public load balancer"
   ],
   "a": 1,
   "e": "VNet peering connects two virtual networks so traffic stays on the Microsoft backbone. A public load balancer distributes internet traffic rather than privately linking networks.",
   "d": 3
  },
  {
   "id": 121,
   "t": "network-segmentation-vnets",
   "x": "Within a single virtual network, how are resources typically grouped so different security controls can apply to each group?",
   "o": [
    "By giving them identical private addresses",
    "By placing them into separate subnets",
    "By assigning them one shared network interface",
    "By removing them from the virtual network"
   ],
   "a": 1,
   "e": "Subnets partition a virtual network so distinct controls can be applied to each group of resources. Identical addressing or a shared interface would defeat the purpose of segmentation.",
   "d": 3
  },
  {
   "id": 122,
   "t": "network-security-groups",
   "x": "An administrator wants to permit traffic on port 443 but deny it on port 3389 for a subnet. Which Azure feature enforces these allow and deny rules?",
   "o": [
    "Azure Key Vault",
    "Azure DDoS Protection",
    "Azure Bastion",
    "A network security group"
   ],
   "a": 3,
   "e": "A network security group contains rules that allow or deny traffic based on port, protocol, and address. Bastion brokers admin sessions and does not define subnet filtering rules.",
   "d": 3
  },
  {
   "id": 123,
   "t": "network-security-groups",
   "x": "Which set of properties does a network security group rule use to decide whether to allow or deny a packet?",
   "o": [
    "Username, password, and multifactor status",
    "Certificate thumbprint and expiry date",
    "Secret name and vault version",
    "Source, destination, port, protocol, and direction"
   ],
   "a": 3,
   "e": "NSG rules match on a five-tuple of source, destination, port, protocol, and direction. Identity and certificate attributes are handled by other services, not NSG filtering.",
   "d": 3
  },
  {
   "id": 124,
   "t": "network-security-groups",
   "x": "When multiple network security group rules could apply to the same traffic, how does Azure decide which one wins?",
   "o": [
    "The rule with the lowest priority number is applied first",
    "Deny rules are always ignored in favor of allow rules",
    "Rules are evaluated in random order each time",
    "The rule created most recently always overrides others"
   ],
   "a": 0,
   "e": "NSG rules are processed in priority order, and the lowest priority number is evaluated first. Once a match is found, that rule determines the outcome.",
   "d": 3
  },
  {
   "id": 125,
   "t": "network-security-groups",
   "x": "A network security group can be associated with which of the following to control traffic?",
   "o": [
    "A user's sign-in session",
    "A subnet or a network interface",
    "A resource group tag only",
    "A Key Vault secret or key"
   ],
   "a": 1,
   "e": "An NSG can be attached to a subnet or to a VM network interface to filter traffic. It does not attach to secrets or to identity sign-in sessions.",
   "d": 3
  },
  {
   "id": 126,
   "t": "network-security-groups",
   "x": "To simplify rules, an administrator wants to group several virtual machines by workload and reference that group by name instead of by IP. Which feature supports this?",
   "o": [
    "Conditional Access policies",
    "Application security groups",
    "Shared access signatures",
    "Managed identities"
   ],
   "a": 1,
   "e": "Application security groups let you group VMs logically and write NSG rules against the group name. Managed identities and SAS tokens address authentication, not traffic grouping.",
   "d": 3
  },
  {
   "id": 127,
   "t": "azure-bastion",
   "x": "An administrator wants to reach a virtual machine using RDP or SSH without giving it a public IP address or opening those ports to the internet. Which service provides this?",
   "o": [
    "Azure Bastion",
    "Azure Firewall",
    "Azure Policy",
    "Azure Key Vault"
   ],
   "a": 0,
   "e": "Azure Bastion provides secure RDP and SSH connectivity to VMs over TLS with no public IP on the VM. A firewall filters traffic but does not broker these sessions.",
   "d": 3
  },
  {
   "id": 128,
   "t": "azure-bastion",
   "x": "How does a user typically start a session to a virtual machine through Azure Bastion?",
   "o": [
    "Through a secure connection in the web browser over TLS",
    "By assigning the VM a public IP and opening port 3389",
    "By installing a heavy VPN client on the workstation",
    "By copying a private key into a public storage account"
   ],
   "a": 0,
   "e": "Bastion delivers RDP and SSH sessions inside the browser over TLS, keeping the VM off the public internet. Opening 3389 with a public IP is exactly what Bastion is meant to avoid.",
   "d": 3
  },
  {
   "id": 129,
   "t": "azure-bastion",
   "x": "What is the main security advantage of adopting Azure Bastion for administrative access to virtual machines?",
   "o": [
    "Outbound internet traffic from the machine is completely blocked",
    "All stored application secrets are rotated on every single login",
    "Virtual machines no longer need public IP addresses on the internet",
    "Virtual machines are automatically encrypted from end to end on disk"
   ],
   "a": 2,
   "e": "By brokering sessions through the platform, Bastion removes the need to expose VMs with public IPs or open management ports. It does not perform disk encryption or secret rotation.",
   "d": 3
  },
  {
   "id": 130,
   "t": "azure-bastion",
   "x": "Deploying Azure Bastion reduces exposure to which type of threat against management ports?",
   "o": [
    "Data leakage through printed and photocopied documents",
    "Port scanning and brute-force attempts against RDP and SSH",
    "Physical theft of on-premises server hardware from a rack",
    "Cross-site scripting inside a public-facing web application"
   ],
   "a": 1,
   "e": "Because RDP and SSH ports are never exposed publicly, Bastion cuts off internet-based scanning and brute-force attacks on them. Web-layer and physical threats are outside its scope.",
   "d": 3
  },
  {
   "id": 131,
   "t": "azure-key-vault",
   "x": "An application team needs a centralized, secure place to store API keys, connection strings, and passwords instead of hard-coding them. Which Azure service should they use?",
   "o": [
    "Azure Monitor",
    "Azure Bastion",
    "Azure Key Vault",
    "Azure Firewall"
   ],
   "a": 2,
   "e": "Azure Key Vault centrally stores and controls access to secrets such as passwords, keys, and connection strings. Bastion and Firewall address connectivity, not secret storage.",
   "d": 3
  },
  {
   "id": 132,
   "t": "azure-key-vault",
   "x": "Besides secrets, which additional items can Azure Key Vault manage for an organization?",
   "o": [
    "Virtual machine disk images",
    "Subscription billing invoices",
    "Cryptographic keys and TLS certificates",
    "Network security group rules"
   ],
   "a": 2,
   "e": "Key Vault manages secrets, cryptographic keys, and certificates in one governed service. VM images and NSG rules are managed by other Azure features.",
   "d": 3
  },
  {
   "id": 133,
   "t": "azure-key-vault",
   "x": "For heightened protection, certain Key Vault tiers back cryptographic keys with dedicated tamper-resistant hardware. What is this hardware called?",
   "o": [
    "A network interface card",
    "A hardware security module",
    "A solid-state cache",
    "A content delivery network"
   ],
   "a": 1,
   "e": "A hardware security module provides validated tamper-resistant protection for keys in the premium Key Vault tier. The other options are unrelated pieces of infrastructure.",
   "d": 3
  },
  {
   "id": 134,
   "t": "azure-key-vault",
   "x": "What is the recommended way for an Azure virtual machine to retrieve a secret from Key Vault without storing any credential itself?",
   "o": [
    "Publish the secret to a public storage container",
    "Use a managed identity granted access to the vault",
    "Email the secret to each developer on the team",
    "Embed the vault password inside the application code"
   ],
   "a": 1,
   "e": "A managed identity lets the VM authenticate to Key Vault without any embedded credential. Hard-coding or publishing secrets would undermine the reason for using a vault.",
   "d": 3
  },
  {
   "id": 135,
   "t": "azure-key-vault",
   "x": "How does storing secrets in Azure Key Vault improve an organization's security posture compared with placing them in source code?",
   "o": [
    "The application no longer needs any authentication",
    "Secrets become impossible to ever read again",
    "Access can be centrally governed and audited through policies",
    "Every secret is automatically shared with all users"
   ],
   "a": 2,
   "e": "Key Vault centralizes secrets so access is controlled by policy or RBAC and every use can be logged. Secrets in source code are exposed to anyone who can read the repository.",
   "d": 3
  },
  {
   "id": 136,
   "t": "microsoft-defender-for-cloud",
   "x": "An organization wants one tool that assesses the security configuration of its cloud resources and also protects running workloads from threats. Which service provides both?",
   "o": [
    "Azure Key Vault",
    "Azure DDoS Protection",
    "Azure Bastion",
    "Microsoft Defender for Cloud"
   ],
   "a": 3,
   "e": "Microsoft Defender for Cloud combines posture management with workload threat protection across cloud resources. Bastion and Key Vault each address only a narrow function.",
   "d": 3
  },
  {
   "id": 137,
   "t": "microsoft-defender-for-cloud",
   "x": "Microsoft Defender for Cloud expresses an organization's overall security posture as a single measurable percentage. What is this measure called?",
   "o": [
    "Sign-in risk",
    "Compliance token",
    "Secure score",
    "Threat weight"
   ],
   "a": 2,
   "e": "Secure score summarizes posture as a percentage that rises as recommendations are remediated. It is not a sign-in risk level or a compliance token.",
   "d": 3
  },
  {
   "id": 138,
   "t": "microsoft-defender-for-cloud",
   "x": "How can Microsoft Defender for Cloud help an organization demonstrate adherence to standards such as ISO 27001 or PCI DSS?",
   "o": [
    "By deleting resources that fail a check",
    "Through its regulatory compliance dashboard",
    "By issuing certificates from a public authority",
    "By blocking all inbound network traffic"
   ],
   "a": 1,
   "e": "The regulatory compliance dashboard maps controls to standards and shows where an environment is compliant or not. Defender for Cloud does not delete resources or issue public certificates.",
   "d": 3
  },
  {
   "id": 139,
   "t": "microsoft-defender-for-cloud",
   "x": "Which environments can Microsoft Defender for Cloud assess and protect beyond native Azure resources?",
   "o": [
    "Workloads running in other clouds and on-premises",
    "Only resources inside a single Azure subscription",
    "Only email messages inside a mailbox",
    "Only desktop applications on end-user laptops"
   ],
   "a": 0,
   "e": "Defender for Cloud extends posture and workload protection to AWS, Google Cloud, and on-premises servers. It is not limited to a single Azure subscription.",
   "d": 3
  },
  {
   "id": 140,
   "t": "microsoft-defender-for-cloud",
   "x": "When Defender for Cloud finds a weakness such as a storage account allowing public access, how does it guide the fix?",
   "o": [
    "It automatically cancels the subscription",
    "It emails the finding to the public internet",
    "It presents a prioritized recommendation with steps to remediate",
    "It silently ignores the finding until an audit occurs"
   ],
   "a": 2,
   "e": "Defender for Cloud surfaces actionable recommendations that describe the issue and how to remediate it, improving secure score when addressed. It never cancels subscriptions or exposes findings publicly.",
   "d": 3
  },
  {
   "id": 141,
   "t": "cloud-security-posture-management",
   "x": "An organization wants to continuously discover misconfigurations and weak settings across its cloud resources and track improvement over time. Which capability addresses this?",
   "o": [
    "Browser-based VM connectivity",
    "Just-in-time VM access",
    "Cloud security posture management",
    "Denial-of-service mitigation"
   ],
   "a": 2,
   "e": "Cloud security posture management continuously assesses configurations, surfaces recommendations, and tracks posture through secure score. The other options address narrow, unrelated functions.",
   "d": 3
  },
  {
   "id": 142,
   "t": "cloud-security-posture-management",
   "x": "In Microsoft Defender for Cloud, which metric most directly reflects the outcome of posture management activities?",
   "o": [
    "The secure score percentage",
    "The number of virtual networks",
    "The size of the largest VM disk",
    "The count of storage accounts"
   ],
   "a": 0,
   "e": "Secure score rises as posture recommendations are remediated, making it the clearest indicator of posture management progress. Resource counts do not measure security posture.",
   "d": 3
  },
  {
   "id": 143,
   "t": "cloud-security-posture-management",
   "x": "Which posture management features are available in Microsoft Defender for Cloud without enabling any paid plan?",
   "o": [
    "Advanced threat detection for every workload type",
    "Automatic incident response for all alerts",
    "Continuous assessment, recommendations, and secure score",
    "Dedicated hardware security modules for keys"
   ],
   "a": 2,
   "e": "Foundational CSPM, including assessment, recommendations, and secure score, is available at no cost. Advanced workload threat detection requires enabling the paid Defender plans.",
   "d": 3
  },
  {
   "id": 144,
   "t": "cloud-security-posture-management",
   "x": "How does acting on posture management recommendations reduce organizational risk?",
   "o": [
    "It disables logging to save on storage costs",
    "It increases the number of open management ports",
    "It hardens configurations and shrinks the attack surface",
    "It removes the need to monitor workloads"
   ],
   "a": 2,
   "e": "Remediating posture recommendations tightens configurations and reduces the overall attack surface. It complements, rather than replaces, ongoing workload monitoring.",
   "d": 3
  },
  {
   "id": 145,
   "t": "security-policies-recommendations",
   "x": "Recommendations in Microsoft Defender for Cloud are generated by comparing resources against a defined set of security controls. What is this default set called?",
   "o": [
    "The Azure billing agreement",
    "The Microsoft cloud security benchmark",
    "The shared responsibility contract",
    "The standard service level agreement"
   ],
   "a": 1,
   "e": "The Microsoft cloud security benchmark is the default standard whose controls drive Defender for Cloud recommendations. A billing agreement or SLA governs cost and uptime, not security controls.",
   "d": 3
  },
  {
   "id": 146,
   "t": "security-policies-recommendations",
   "x": "Which Azure service is used to author and enforce rules that keep resources compliant, such as requiring encryption or blocking certain regions?",
   "o": [
    "Azure Front Door",
    "Azure Policy",
    "Azure Key Vault",
    "Azure Bastion"
   ],
   "a": 1,
   "e": "Azure Policy defines and enforces organizational rules and can audit or deny non-compliant resource configurations. Bastion and Key Vault do not evaluate resource compliance.",
   "d": 3
  },
  {
   "id": 147,
   "t": "security-policies-recommendations",
   "x": "An administrator wants Defender for Cloud to also measure resources against an external framework in addition to the default benchmark. What can they do?",
   "o": [
    "Remove all of the resources from the affected subscription",
    "Add a regulatory compliance standard to the environment",
    "Turn off secure score entirely across the subscription",
    "Delete the default security benchmark from Azure permanently"
   ],
   "a": 1,
   "e": "Additional standards such as ISO 27001 or PCI DSS can be added so resources are evaluated against them too. Removing the default benchmark or disabling secure score would reduce visibility, not add it.",
   "d": 3
  },
  {
   "id": 148,
   "t": "security-policies-recommendations",
   "x": "After Defender for Cloud lists a security recommendation, what is the intended next step for the organization?",
   "o": [
    "Forward it to every external partner",
    "Ignore it because recommendations are optional labels",
    "Immediately delete the affected resource",
    "Remediate the finding to improve compliance and secure score"
   ],
   "a": 3,
   "e": "Recommendations are meant to be remediated, which raises secure score and improves compliance against the applied standards. Deleting resources is rarely the intended remediation.",
   "d": 3
  },
  {
   "id": 149,
   "t": "cloud-workload-protection",
   "x": "An organization wants active threat detection and alerts for its servers, databases, and storage accounts running in the cloud. Which capability of Defender for Cloud provides this?",
   "o": [
    "Certificate management",
    "Network segmentation",
    "Secure score reporting",
    "Cloud workload protection"
   ],
   "a": 3,
   "e": "Cloud workload protection delivers threat detection and security alerts for specific resource types through the Defender plans. Secure score measures posture but does not detect active threats.",
   "d": 3
  },
  {
   "id": 150,
   "t": "cloud-workload-protection",
   "x": "How are the workload protection features in Microsoft Defender for Cloud typically turned on?",
   "o": [
    "By deleting the free posture management features first",
    "By enabling the relevant paid Defender plan for each resource type",
    "By disabling all network security groups",
    "By removing managed identities from the tenant"
   ],
   "a": 1,
   "e": "Workload protection is activated by enabling the appropriate paid Defender plan, such as Defender for Servers or Defender for Storage. Posture management remains available alongside it for free.",
   "d": 3
  },
  {
   "id": 151,
   "t": "cloud-workload-protection",
   "x": "When Defender for Servers detects suspicious activity on a virtual machine, what does it produce to notify the security team?",
   "o": [
    "A security alert describing the detected threat",
    "A new public IP address for the machine",
    "A fresh copy of the virtual network",
    "An invoice for additional compute hours"
   ],
   "a": 0,
   "e": "Defender for Cloud generates security alerts that describe detected threats and suggest response steps. It does not respond by provisioning IPs or duplicating networks.",
   "d": 3
  },
  {
   "id": 152,
   "t": "cloud-workload-protection",
   "x": "Which pairing correctly describes how Defender for Cloud combines its two broad areas of protection?",
   "o": [
    "Posture management strengthens configuration while workload protection detects threats",
    "Posture management encrypts disks while workload protection prints reports",
    "Both areas focus solely on billing optimization",
    "Both areas only manage user passwords and nothing else"
   ],
   "a": 0,
   "e": "Posture management hardens configurations and raises secure score, while workload protection detects and alerts on active threats. Together they cover prevention and detection.",
   "d": 3
  },
  {
   "id": 153,
   "t": "siem-soar-concepts",
   "x": "Which capability best describes the core purpose of a SIEM solution?",
   "o": [
    "Provisioning user identities and enforcing multifactor authentication",
    "Encrypting sensitive data at rest across storage and databases",
    "Aggregating and correlating security logs from many sources to surface threats",
    "Automating incident response through predefined playbooks and workflows"
   ],
   "a": 2,
   "e": "A SIEM aggregates and correlates security log data from many sources so analysts can detect and investigate potential threats across the environment.",
   "d": 3
  },
  {
   "id": 154,
   "t": "siem-soar-concepts",
   "x": "What is the main goal of a SOAR platform?",
   "o": [
    "Orchestrating and automating incident response with reusable playbooks",
    "Classifying and labeling sensitive documents across the tenant",
    "Scanning virtual machines for missing operating system patches",
    "Aggregating raw log data from endpoints and network devices"
   ],
   "a": 0,
   "e": "SOAR focuses on orchestrating and automating incident response, often using reusable playbooks to react to alerts quickly and consistently.",
   "d": 3
  },
  {
   "id": 155,
   "t": "siem-soar-concepts",
   "x": "How does SOAR extend the value that a SIEM alone provides?",
   "o": [
    "It performs discovery of shadow SaaS applications used by staff",
    "It replaces log collection with manual review by security analysts",
    "It adds automated orchestration and response to the alerts a SIEM raises",
    "It stores compliance evidence for long-term regulatory audits"
   ],
   "a": 2,
   "e": "SOAR builds on a SIEM by adding automated orchestration and response actions to the alerts the SIEM produces, reducing manual effort.",
   "d": 3
  },
  {
   "id": 156,
   "t": "siem-soar-concepts",
   "x": "How is Microsoft Sentinel best categorized among security tooling?",
   "o": [
    "An on-premises antivirus engine that scans files on managed devices",
    "A cloud-native SIEM and SOAR platform for enterprise-wide threat management",
    "A hardware appliance that inspects traffic at the network perimeter",
    "A cloud access security broker focused on SaaS application controls"
   ],
   "a": 1,
   "e": "Microsoft Sentinel is a cloud-native platform that combines SIEM and SOAR capabilities to collect, detect, investigate, and respond at enterprise scale.",
   "d": 3
  },
  {
   "id": 157,
   "t": "siem-soar-concepts",
   "x": "What is the role of data connectors in a SIEM such as Microsoft Sentinel?",
   "o": [
    "They isolate a compromised device from the rest of the network",
    "They ingest logs and signals from cloud and third-party sources",
    "They quarantine phishing messages discovered in user mailboxes",
    "They remediate missing patches on scanned servers automatically"
   ],
   "a": 1,
   "e": "Data connectors bring logs and signals from cloud services, on-premises systems, and third-party products into the SIEM for analysis.",
   "d": 3
  },
  {
   "id": 158,
   "t": "sentinel-threat-detection",
   "x": "In Microsoft Sentinel, what do analytics rules primarily do?",
   "o": [
    "Deploy operating system updates to enrolled endpoints",
    "Detect suspicious activity in ingested data and generate alerts and incidents",
    "Provision new user accounts and assign directory roles",
    "Store long-term log archives for regulatory retention requirements"
   ],
   "a": 1,
   "e": "Analytics rules inspect ingested data for suspicious patterns and generate alerts, which Sentinel can group into incidents for investigation.",
   "d": 3
  },
  {
   "id": 159,
   "t": "sentinel-threat-detection",
   "x": "What does a Microsoft Sentinel incident represent to an analyst?",
   "o": [
    "A grouping of related alerts that reflects a potential threat",
    "A connector that pulls telemetry from an external data source",
    "A compliance report summarizing data residency for auditors",
    "A saved query used to visualize trends on a dashboard tile"
   ],
   "a": 0,
   "e": "A Sentinel incident aggregates related alerts into a single case so analysts can triage and respond to a potential threat as a unit.",
   "d": 3
  },
  {
   "id": 160,
   "t": "sentinel-threat-detection",
   "x": "What is the main purpose of workbooks in Microsoft Sentinel?",
   "o": [
    "Automatically remediating alerts without any analyst review",
    "Blocking malicious email attachments before they are delivered",
    "Discovering unsanctioned cloud apps used across the organization",
    "Visualizing and monitoring ingested data through interactive dashboards"
   ],
   "a": 3,
   "e": "Workbooks provide interactive dashboards and visualizations that help teams monitor and explore the data collected in the workspace.",
   "d": 3
  },
  {
   "id": 161,
   "t": "sentinel-threat-detection",
   "x": "Which Microsoft Sentinel feature lets analysts proactively search data for undetected threats?",
   "o": [
    "Watchlists that store reference lists of known entities",
    "Data connectors that onboard new log sources into the workspace",
    "Hunting queries that explore data before an alert is ever raised",
    "Automation rules that assign incidents to specific analysts"
   ],
   "a": 2,
   "e": "Hunting lets analysts proactively query collected data to look for threats that have not yet triggered any alert.",
   "d": 3
  },
  {
   "id": 162,
   "t": "sentinel-threat-detection",
   "x": "How does Microsoft Sentinel carry out automated response to threats?",
   "o": [
    "Through playbooks and automation rules that run predefined response actions",
    "Through data loss prevention rules applied to shared documents",
    "Through antivirus signatures that clean infected files on devices",
    "Through conditional access policies that gate application sign-in"
   ],
   "a": 0,
   "e": "Sentinel uses playbooks and automation rules to run predefined actions automatically, helping standardize and speed up incident response.",
   "d": 3
  },
  {
   "id": 163,
   "t": "microsoft-defender-xdr",
   "x": "What does Microsoft Defender XDR provide across an organization?",
   "o": [
    "A coordinated defense across endpoints, identities, email, and apps",
    "A single antivirus scanner limited to Windows client devices",
    "A key management vault for encryption keys and certificates",
    "A firewall service that filters inbound traffic at the network edge"
   ],
   "a": 0,
   "e": "Defender XDR unifies protection by correlating signals across endpoints, identities, email, and cloud apps into a coordinated defense.",
   "d": 3
  },
  {
   "id": 164,
   "t": "microsoft-defender-xdr",
   "x": "How does Microsoft Defender XDR help analysts see the full scope of an attack?",
   "o": [
    "It stores each alert separately so teams review them one by one",
    "It forwards raw logs to an external archive for later analysis",
    "It scans documents for sensitive data and applies labels",
    "It correlates alerts from multiple workloads into a single incident"
   ],
   "a": 3,
   "e": "By correlating alerts from multiple workloads into one incident, Defender XDR shows the full scope of an attack instead of isolated events.",
   "d": 3
  },
  {
   "id": 165,
   "t": "microsoft-defender-xdr",
   "x": "Microsoft Defender XDR is built to defend during which stages of an attack?",
   "o": [
    "Only while a device is disconnected from corporate networks",
    "Both before a breach and after a breach across the attack lifecycle",
    "Only during the initial email delivery of a phishing message",
    "Only after data has already been exfiltrated from the tenant"
   ],
   "a": 1,
   "e": "Defender XDR is designed for both pre-breach prevention and post-breach detection and response across the attack lifecycle.",
   "d": 3
  },
  {
   "id": 166,
   "t": "microsoft-defender-xdr",
   "x": "Which set of services is unified under Microsoft Defender XDR?",
   "o": [
    "Azure Firewall, Key Vault, Bastion, and DDoS Protection",
    "Sentinel workbooks, hunting, watchlists, and connectors",
    "Defender for Endpoint, Office 365, Identity, and Cloud Apps",
    "Entra ID, Intune, Purview, and Priva compliance tools"
   ],
   "a": 2,
   "e": "The core Defender XDR workloads are Defender for Endpoint, Defender for Office 365, Defender for Identity, and Defender for Cloud Apps.",
   "d": 3
  },
  {
   "id": 167,
   "t": "microsoft-defender-xdr",
   "x": "What does automated investigation and response in Defender XDR do?",
   "o": [
    "It examines alerts and can automatically remediate detected threats",
    "It manually assigns every alert to a named analyst for triage",
    "It provisions new endpoints and enrolls them into management",
    "It generates quarterly compliance attestations for auditors"
   ],
   "a": 0,
   "e": "Automated investigation and response inspects alerts and can automatically take remediation steps, reducing the load on analysts.",
   "d": 3
  },
  {
   "id": 168,
   "t": "defender-for-office-365",
   "x": "Which asset does Defender for Office 365 mainly safeguard?",
   "o": [
    "Domain controllers against on-premises identity attacks",
    "Email and collaboration tools against phishing and malware",
    "Managed laptops and servers against malware infections",
    "Sanctioned and unsanctioned SaaS applications in use"
   ],
   "a": 1,
   "e": "Defender for Office 365 protects email and collaboration content from phishing, malware, and other message-based threats.",
   "d": 3
  },
  {
   "id": 169,
   "t": "defender-for-office-365",
   "x": "What does the Safe Attachments capability in Defender for Office 365 do?",
   "o": [
    "Scores each device with an exposure and configuration rating",
    "Isolates an infected endpoint from the corporate network",
    "Reveals SaaS apps that employees use without approval",
    "Detonates email attachments in a sandbox to catch unknown malware"
   ],
   "a": 3,
   "e": "Safe Attachments opens email attachments in an isolated sandbox to detect malware that signature-based scanning might miss.",
   "d": 3
  },
  {
   "id": 170,
   "t": "defender-for-office-365",
   "x": "What does the Safe Links feature check when a user clicks a URL?",
   "o": [
    "Whether the device has the latest operating system patches",
    "Whether an on-premises account shows signs of compromise",
    "Whether the destination is malicious at the moment of the click",
    "Whether a SaaS app meets the organization's compliance bar"
   ],
   "a": 2,
   "e": "Safe Links rewrites and verifies URLs at time of click, protecting against malicious links delivered in email and documents.",
   "d": 3
  },
  {
   "id": 171,
   "t": "defender-for-office-365",
   "x": "Beyond email, which workloads can Defender for Office 365 help protect?",
   "o": [
    "Windows and Linux servers running in a private datacenter",
    "On-premises domain controllers and Active Directory forests",
    "Third-party SaaS apps discovered through cloud traffic logs",
    "Microsoft Teams, SharePoint, and OneDrive collaboration content"
   ],
   "a": 3,
   "e": "Beyond email, Defender for Office 365 can help protect collaboration content in Microsoft Teams, SharePoint, and OneDrive.",
   "d": 3
  },
  {
   "id": 172,
   "t": "defender-for-office-365",
   "x": "A user reports a suspected phishing email. Which service is designed to protect against that threat?",
   "o": [
    "Microsoft Defender for Identity",
    "Microsoft Defender for Endpoint",
    "Microsoft Defender for Cloud Apps",
    "Microsoft Defender for Office 365"
   ],
   "a": 3,
   "e": "Phishing arrives through email, so Defender for Office 365 is the workload designed to detect and block that threat.",
   "d": 3
  },
  {
   "id": 173,
   "t": "defender-for-endpoint",
   "x": "What is the central protection focus of Defender for Endpoint?",
   "o": [
    "Protecting mailboxes from phishing and malicious attachments",
    "Governing access to sanctioned and unsanctioned SaaS apps",
    "Monitoring on-premises Active Directory for compromised accounts",
    "Protecting devices such as laptops, servers, and mobile endpoints"
   ],
   "a": 3,
   "e": "Defender for Endpoint focuses on protecting devices such as laptops, desktops, servers, and mobile endpoints from threats.",
   "d": 3
  },
  {
   "id": 174,
   "t": "defender-for-endpoint",
   "x": "Which capability does Defender for Endpoint provide to detect and respond on devices?",
   "o": [
    "Sandbox detonation of email attachments before delivery",
    "Endpoint detection and response with automated investigation",
    "Discovery of shadow IT cloud applications on the network",
    "Signal analysis of on-premises domain controller traffic"
   ],
   "a": 1,
   "e": "Defender for Endpoint provides endpoint detection and response along with automated investigation to identify and contain device threats.",
   "d": 3
  },
  {
   "id": 175,
   "t": "defender-for-endpoint",
   "x": "During an investigation, which response action is characteristic of Defender for Endpoint?",
   "o": [
    "Isolating a compromised device from the network to contain it",
    "Quarantining a suspicious email message in a user mailbox",
    "Revoking session tokens for a risky SaaS application login",
    "Alerting on suspicious changes to an on-premises AD group"
   ],
   "a": 0,
   "e": "Isolating a compromised device from the network is a characteristic containment action available in Defender for Endpoint.",
   "d": 3
  },
  {
   "id": 176,
   "t": "defender-for-endpoint",
   "x": "Which statement about Defender for Endpoint platform support is accurate?",
   "o": [
    "It supports only Windows client and server operating systems",
    "It protects only mailboxes hosted in Exchange Online",
    "It covers only SaaS applications reached through a browser",
    "It supports Windows, macOS, Linux, iOS, and Android devices"
   ],
   "a": 3,
   "e": "Defender for Endpoint supports multiple platforms, including Windows, macOS, Linux, iOS, and Android devices.",
   "d": 3
  },
  {
   "id": 177,
   "t": "defender-for-endpoint",
   "x": "A managed laptop shows signs of a malware infection. Which service is built to detect and respond to that?",
   "o": [
    "Microsoft Defender for Identity",
    "Microsoft Defender for Endpoint",
    "Microsoft Defender for Office 365",
    "Microsoft Defender for Cloud Apps"
   ],
   "a": 1,
   "e": "A malware-infected device is squarely within Defender for Endpoint's scope of detection and response.",
   "d": 3
  },
  {
   "id": 178,
   "t": "defender-for-cloud-apps",
   "x": "What overall role does Defender for Cloud Apps fill in a security program?",
   "o": [
    "A cloud access security broker governing SaaS app usage and data",
    "An endpoint detection and response agent installed on devices",
    "An email security service that filters phishing and malware",
    "A sensor that monitors on-premises Active Directory activity"
   ],
   "a": 0,
   "e": "Defender for Cloud Apps is a cloud access security broker that provides visibility and governance over SaaS application usage and data.",
   "d": 3
  },
  {
   "id": 179,
   "t": "defender-for-cloud-apps",
   "x": "Which capability of Defender for Cloud Apps helps uncover shadow IT?",
   "o": [
    "Detecting pass-the-hash attacks against domain controllers",
    "Discovering unsanctioned SaaS apps from network and log traffic",
    "Detonating email attachments in an isolated sandbox",
    "Isolating a compromised laptop from the corporate network"
   ],
   "a": 1,
   "e": "Defender for Cloud Apps discovers shadow IT by analyzing network and log traffic to reveal unsanctioned cloud apps in use.",
   "d": 3
  },
  {
   "id": 180,
   "t": "defender-for-cloud-apps",
   "x": "How can Defender for Cloud Apps control activity inside a SaaS session?",
   "o": [
    "By deploying operating system patches to enrolled servers",
    "By applying real-time session policies such as blocking downloads",
    "By sandboxing links inside inbound email messages",
    "By collecting domain controller logs for identity analysis"
   ],
   "a": 1,
   "e": "Session policies in Defender for Cloud Apps can control activity in real time, such as blocking downloads inside a SaaS session.",
   "d": 3
  },
  {
   "id": 181,
   "t": "defender-for-cloud-apps",
   "x": "Security wants visibility into unsanctioned cloud apps employees use. Which service addresses this?",
   "o": [
    "Microsoft Defender for Identity",
    "Microsoft Defender for Cloud Apps",
    "Microsoft Defender for Endpoint",
    "Microsoft Defender for Office 365"
   ],
   "a": 1,
   "e": "Uncovering unsanctioned cloud app usage is a core function of Defender for Cloud Apps, the broker in the Defender family.",
   "d": 3
  },
  {
   "id": 182,
   "t": "defender-for-cloud-apps",
   "x": "What does the cloud app catalog in Defender for Cloud Apps provide?",
   "o": [
    "Signatures used to remove malware from infected client devices",
    "A sandbox that detonates suspicious inbound email attachments",
    "A log of on-premises Active Directory sign-in anomalies",
    "Risk scores for many SaaS apps based on security and compliance factors"
   ],
   "a": 3,
   "e": "The cloud app catalog rates thousands of SaaS apps by security and compliance factors to help judge their risk.",
   "d": 3
  },
  {
   "id": 183,
   "t": "defender-for-identity",
   "x": "What does Defender for Identity keep watch over?",
   "o": [
    "Managed endpoints for malware and suspicious processes",
    "SaaS applications for unsanctioned usage and data exposure",
    "On-premises Active Directory signals to detect identity-based threats",
    "Mailboxes in Exchange Online for phishing and malware"
   ],
   "a": 2,
   "e": "Defender for Identity uses on-premises Active Directory signals to detect compromised identities and identity-based attacks.",
   "d": 3
  },
  {
   "id": 184,
   "t": "defender-for-identity",
   "x": "How does Defender for Identity collect the data it analyzes?",
   "o": [
    "Through a proxy that inspects outbound SaaS app traffic",
    "Through connectors that read Exchange Online message logs",
    "Through an antivirus agent installed on user laptops",
    "Through sensors installed on domain controllers and AD servers"
   ],
   "a": 3,
   "e": "Defender for Identity relies on sensors installed on domain controllers and AD servers to collect the signals it analyzes.",
   "d": 3
  },
  {
   "id": 185,
   "t": "defender-for-identity",
   "x": "Which type of activity is Defender for Identity designed to detect?",
   "o": [
    "Downloads of sensitive files from a SaaS application",
    "Missing security patches on internet-facing servers",
    "Lateral movement and credential attacks like pass-the-hash",
    "Malicious attachments delivered through inbound email"
   ],
   "a": 2,
   "e": "Defender for Identity detects lateral movement and credential-theft techniques such as pass-the-hash against Active Directory.",
   "d": 3
  },
  {
   "id": 186,
   "t": "defender-for-identity",
   "x": "Analysts suspect an attacker is moving laterally using compromised on-premises AD credentials. Which service targets this?",
   "o": [
    "Microsoft Defender for Identity",
    "Microsoft Defender for Cloud Apps",
    "Microsoft Defender for Endpoint",
    "Microsoft Defender for Office 365"
   ],
   "a": 0,
   "e": "Lateral movement using on-premises AD credentials is exactly what Defender for Identity is built to detect.",
   "d": 3
  },
  {
   "id": 187,
   "t": "defender-for-identity",
   "x": "Which environment is the primary scope of Defender for Identity?",
   "o": [
    "Managed mobile and desktop endpoint devices",
    "Cloud-hosted mailboxes and collaboration tools",
    "On-premises Active Directory Domain Services",
    "Third-party software-as-a-service applications"
   ],
   "a": 2,
   "e": "Defender for Identity centers on on-premises Active Directory Domain Services rather than cloud, endpoint, or SaaS scenarios.",
   "d": 3
  },
  {
   "id": 188,
   "t": "defender-vulnerability-management",
   "x": "What is the core purpose of Defender Vulnerability Management for an organization?",
   "o": [
    "Orchestrating automated response playbooks against raised alerts",
    "Correlating alerts from many workloads into single incidents",
    "Filtering phishing and malicious content from user mailboxes",
    "Finding and prioritizing device weaknesses and misconfigurations to fix them"
   ],
   "a": 3,
   "e": "Defender Vulnerability Management discovers device weaknesses and misconfigurations and prioritizes them so teams can remediate effectively.",
   "d": 3
  },
  {
   "id": 189,
   "t": "defender-vulnerability-management",
   "x": "Which capability does Defender Vulnerability Management give security teams?",
   "o": [
    "Sandbox detonation of attachments in inbound email",
    "Real-time session controls over SaaS application downloads",
    "A continuous inventory of installed software and known vulnerabilities",
    "Sensor-based monitoring of on-premises domain controllers"
   ],
   "a": 2,
   "e": "The service maintains a continuous inventory of installed software and associated known vulnerabilities across assets.",
   "d": 3
  },
  {
   "id": 190,
   "t": "defender-vulnerability-management",
   "x": "How does Defender Vulnerability Management help focus remediation work?",
   "o": [
    "By prioritizing vulnerabilities according to risk and active exploitation",
    "By quarantining suspicious email until an analyst reviews it",
    "By discovering unsanctioned cloud apps across the organization",
    "By isolating an infected endpoint from the rest of the network"
   ],
   "a": 0,
   "e": "By ranking vulnerabilities according to risk and active exploitation, the service helps teams remediate the most important issues first.",
   "d": 3
  },
  {
   "id": 191,
   "t": "defender-vulnerability-management",
   "x": "An organization wants to know which devices have unpatched software and weak configurations. Which service provides this?",
   "o": [
    "Microsoft Defender for Office 365",
    "Microsoft Defender for Cloud Apps",
    "Microsoft Defender for Identity",
    "Microsoft Defender Vulnerability Management"
   ],
   "a": 3,
   "e": "Identifying unpatched software and weak configurations across devices is the purpose of Defender Vulnerability Management.",
   "d": 3
  },
  {
   "id": 192,
   "t": "defender-threat-intelligence",
   "x": "What kind of context does Defender Threat Intelligence deliver?",
   "o": [
    "Sandbox analysis of attachments contained in inbound email",
    "Real-time governance over sanctioned SaaS application usage",
    "A prioritized list of unpatched software on managed devices",
    "Context on threat actors, their tools, and malicious infrastructure"
   ],
   "a": 3,
   "e": "Defender Threat Intelligence gives security teams context about threat actors, their tools, and the infrastructure they use.",
   "d": 3
  },
  {
   "id": 193,
   "t": "defender-threat-intelligence",
   "x": "Which type of analysis does Defender Threat Intelligence support?",
   "o": [
    "Analyzing internet infrastructure to track adversary activity",
    "Assigning risk scores to devices for remediation planning",
    "Detecting pass-the-hash attacks on domain controllers",
    "Isolating a compromised laptop during an active investigation"
   ],
   "a": 0,
   "e": "Defender Threat Intelligence analyzes internet infrastructure to help track and understand adversary activity and campaigns.",
   "d": 3
  },
  {
   "id": 194,
   "t": "defender-threat-intelligence",
   "x": "A threat hunter wants background on a known adversary group and its infrastructure. Which service helps?",
   "o": [
    "Microsoft Defender Threat Intelligence",
    "Microsoft Defender for Endpoint",
    "Microsoft Defender for Office 365",
    "Microsoft Defender Vulnerability Management"
   ],
   "a": 0,
   "e": "For researching a known adversary group and its infrastructure, Defender Threat Intelligence is the appropriate resource.",
   "d": 3
  },
  {
   "id": 195,
   "t": "defender-threat-intelligence",
   "x": "How can Defender Threat Intelligence help during an investigation?",
   "o": [
    "By quarantining phishing messages found in mailboxes",
    "By deploying patches to close vulnerabilities on servers",
    "By blocking downloads within an active SaaS session",
    "By supplying indicators of compromise linked to known threats"
   ],
   "a": 3,
   "e": "Defender Threat Intelligence supplies indicators of compromise tied to known threats, adding context during investigations.",
   "d": 3
  },
  {
   "id": 196,
   "t": "microsoft-defender-portal",
   "x": "What best describes the Microsoft Defender portal for analysts?",
   "o": [
    "An agent that provides antivirus scanning on endpoints",
    "A unified console for managing Defender XDR incidents and alerts",
    "A sensor package installed on on-premises domain controllers",
    "An email gateway that filters inbound phishing messages"
   ],
   "a": 1,
   "e": "The Microsoft Defender portal is the unified console where teams manage Defender XDR incidents, alerts, and investigations.",
   "d": 3
  },
  {
   "id": 197,
   "t": "microsoft-defender-portal",
   "x": "What does the incidents queue in the Microsoft Defender portal show?",
   "o": [
    "Correlated incidents and alerts from across Defender workloads",
    "A catalog of SaaS apps ranked by their risk scores",
    "Detonation verdicts for individual email attachments only",
    "A list of installed software and their known vulnerabilities"
   ],
   "a": 0,
   "e": "The incidents queue in the portal shows correlated incidents and alerts gathered from across the Defender workloads.",
   "d": 3
  },
  {
   "id": 198,
   "t": "microsoft-defender-portal",
   "x": "Where do analysts primarily work with Microsoft Defender XDR?",
   "o": [
    "In the Microsoft Purview compliance portal",
    "In the Microsoft Defender portal at security.microsoft.com",
    "In the Microsoft Entra admin center",
    "In the Microsoft Intune device management console"
   ],
   "a": 1,
   "e": "Analysts primarily work with Defender XDR in the Microsoft Defender portal, reached at security.microsoft.com.",
   "d": 3
  },
  {
   "id": 199,
   "t": "microsoft-defender-portal",
   "x": "How has the Microsoft Defender portal grown to cover more tools?",
   "o": [
    "It became the only place to manage user identities and roles",
    "It replaced all endpoint antivirus agents with a cloud scanner",
    "It brings Microsoft Sentinel and Defender XDR into one experience",
    "It took over encryption key storage for the whole tenant"
   ],
   "a": 2,
   "e": "The Microsoft Defender portal has expanded to bring Microsoft Sentinel and Defender XDR together in a single experience.",
   "d": 3
  },
  {
   "id": 200,
   "t": "service-trust-portal",
   "x": "An auditor asks your team for Microsoft's independent SOC 2 audit report for a cloud service. Where can you download it?",
   "o": [
    "The Microsoft Entra admin center",
    "The Microsoft 365 admin center",
    "The Service Trust Portal",
    "The Azure pricing calculator"
   ],
   "a": 2,
   "e": "The Service Trust Portal hosts Microsoft's independent audit reports such as SOC and ISO, so compliance teams can download them. The admin centers manage tenant settings, not third-party audit documents.",
   "d": 4
  },
  {
   "id": 201,
   "t": "service-trust-portal",
   "x": "A compliance analyst wants to save documents in the Service Trust Portal and be notified whenever those documents are updated. Which feature supports this?",
   "o": [
    "Content explorer",
    "My Library",
    "Compliance Manager assessments",
    "Activity explorer"
   ],
   "a": 1,
   "e": "My Library lets users pin Service Trust Portal documents and get notified when they change. Assessments and the explorers belong to Microsoft Purview, not the portal's saved-document experience.",
   "d": 4
  },
  {
   "id": 202,
   "t": "service-trust-portal",
   "x": "Which statement best describes what the Service Trust Portal offers to customers?",
   "o": [
    "It applies retention labels to user mailboxes",
    "It publishes Microsoft's security and compliance guides",
    "It reviews risky user sign-ins across the directory",
    "It builds data loss prevention policies for your tenant"
   ],
   "a": 1,
   "e": "The Service Trust Portal centralizes Microsoft's audit reports, whitepapers, and compliance guidance. DLP, sign-in risk, and retention are configured elsewhere in Purview or Entra.",
   "d": 4
  },
  {
   "id": 203,
   "t": "service-trust-portal",
   "x": "An organization in a regulated industry needs Microsoft resources tailored to regional laws such as GDPR. Which portal area provides these?",
   "o": [
    "Industry and regional resources in the Service Trust Portal",
    "Improvement actions in Compliance Manager",
    "Sensitivity labels in information protection",
    "Trainable classifiers in data classification"
   ],
   "a": 0,
   "e": "The Service Trust Portal groups documents by industry and region, including GDPR references. The other options are Purview capabilities that do not host regulatory reference documents.",
   "d": 4
  },
  {
   "id": 204,
   "t": "microsoft-privacy-principles",
   "x": "How many foundational privacy principles guide Microsoft's handling of customer data?",
   "o": [
    "Ten",
    "Four",
    "Six",
    "Three"
   ],
   "a": 2,
   "e": "Microsoft's approach to privacy rests on six principles, including control, transparency, and security. The other counts do not match the published framework.",
   "d": 4
  },
  {
   "id": 205,
   "t": "microsoft-privacy-principles",
   "x": "Microsoft states it does not use customer email, chat, or files to target advertising. Which privacy principle reflects this commitment?",
   "o": [
    "Benefits to you",
    "Strong legal protections",
    "No content-based targeting",
    "Transparency"
   ],
   "a": 2,
   "e": "The no content-based targeting principle means Microsoft does not mine customer content to serve ads. Transparency concerns being open about data practices, a different commitment.",
   "d": 4
  },
  {
   "id": 206,
   "t": "microsoft-privacy-principles",
   "x": "A customer wants assurance that they decide who can access their data and how it is used. Which privacy principle addresses this?",
   "o": [
    "Strong legal protections",
    "Security",
    "Control",
    "Transparency"
   ],
   "a": 2,
   "e": "The control principle puts customers in charge of their data and who can access it. Security concerns protecting data with encryption and safeguards, which is separate.",
   "d": 4
  },
  {
   "id": 207,
   "t": "microsoft-privacy-principles",
   "x": "Which privacy principle commits Microsoft to being open about where data is stored and how it is handled?",
   "o": [
    "Control",
    "Benefits to you",
    "Transparency",
    "No content-based targeting"
   ],
   "a": 2,
   "e": "Transparency is the commitment to clearly communicate how data is collected, stored, and used. Control is about who can access data, not the openness of communication.",
   "d": 4
  },
  {
   "id": 208,
   "t": "microsoft-purview-portal",
   "x": "Microsoft Purview brings governance, protection, and compliance capabilities together into one console. What is that console called?",
   "o": [
    "The Microsoft Purview portal",
    "The Azure portal",
    "The Microsoft Defender portal",
    "The Microsoft Entra admin center"
   ],
   "a": 0,
   "e": "The Microsoft Purview portal is the unified console for data governance, protection, and compliance. The Defender portal focuses on threat protection, a different domain.",
   "d": 4
  },
  {
   "id": 209,
   "t": "microsoft-purview-portal",
   "x": "An administrator needs to configure sensitivity labels and retention policies from a single compliance console. Which portal should they open?",
   "o": [
    "The Power Platform admin center",
    "The Exchange admin center",
    "The Microsoft 365 apps admin center",
    "The Microsoft Purview portal"
   ],
   "a": 3,
   "e": "Sensitivity labels and retention policies are managed in the Microsoft Purview portal. The Exchange admin center handles mail flow, not the full compliance toolset.",
   "d": 4
  },
  {
   "id": 210,
   "t": "microsoft-purview-portal",
   "x": "Which of the following is a compliance solution you would find inside the Microsoft Purview portal?",
   "o": [
    "Privileged Identity Management",
    "Data Lifecycle Management",
    "Conditional Access",
    "Network security groups"
   ],
   "a": 1,
   "e": "Data Lifecycle Management is a Purview solution for retaining and disposing of content. Conditional Access and Privileged Identity Management are Microsoft Entra features.",
   "d": 4
  },
  {
   "id": 211,
   "t": "microsoft-purview-portal",
   "x": "The former Microsoft Purview compliance portal experience is now delivered through which unified interface?",
   "o": [
    "The Microsoft Sentinel workspace",
    "The Microsoft Intune admin center",
    "The Microsoft Purview portal",
    "The Microsoft Teams admin center"
   ],
   "a": 2,
   "e": "Compliance capabilities are now surfaced in the unified Microsoft Purview portal. Intune manages devices and is not the home for compliance solutions.",
   "d": 4
  },
  {
   "id": 212,
   "t": "compliance-manager",
   "x": "Which Microsoft Purview tool helps you manage regulatory requirements through assessments and recommended actions?",
   "o": [
    "Compliance Manager",
    "Records management",
    "Activity explorer",
    "Content explorer"
   ],
   "a": 0,
   "e": "Compliance Manager provides assessments, controls, and improvement actions to manage regulatory obligations. Content explorer only shows where classified data resides.",
   "d": 4
  },
  {
   "id": 213,
   "t": "compliance-manager",
   "x": "In Compliance Manager, what are the recommended tasks that help reduce risk and raise your score called?",
   "o": [
    "Improvement actions",
    "Trainable classifiers",
    "Sensitive information types",
    "Retention labels"
   ],
   "a": 0,
   "e": "Improvement actions are the recommended tasks in Compliance Manager that reduce risk when completed. Sensitive information types are pattern detectors used for classification.",
   "d": 4
  },
  {
   "id": 214,
   "t": "compliance-manager",
   "x": "An organization wants to evaluate its posture against a regulation such as ISO 27001 using a prebuilt template. Which Compliance Manager feature provides this?",
   "o": [
    "Communication compliance policies",
    "eDiscovery cases",
    "Sensitivity labels",
    "Assessments"
   ],
   "a": 3,
   "e": "Assessments use templates mapped to regulations such as ISO 27001 to measure compliance. Sensitivity labels classify content and are not evaluation templates.",
   "d": 4
  },
  {
   "id": 215,
   "t": "compliance-manager",
   "x": "Compliance Manager separates controls that Microsoft is responsible for from those the customer owns. What are the customer-owned ones generally called?",
   "o": [
    "Shared assessments",
    "Your controls",
    "Default templates",
    "Microsoft-managed controls"
   ],
   "a": 1,
   "e": "Customer-owned controls are labeled your controls, reflecting the shared responsibility model. Microsoft-managed controls are the ones Microsoft handles on your behalf.",
   "d": 4
  },
  {
   "id": 216,
   "t": "compliance-manager",
   "x": "Besides tracking progress, Compliance Manager can assign improvement actions to specific users for follow-up. What capability does this describe?",
   "o": [
    "Threat vulnerability scanning",
    "Sign-in risk scoring",
    "Automatic data classification",
    "Workflow and task assignment"
   ],
   "a": 3,
   "e": "Compliance Manager supports workflow by assigning improvement actions to users so completion can be tracked. Data classification and risk scoring are handled by other services.",
   "d": 4
  },
  {
   "id": 217,
   "t": "compliance-score",
   "x": "What does the compliance score in Compliance Manager represent?",
   "o": [
    "The number of users with multifactor authentication enabled",
    "Your progress in completing recommended improvement actions",
    "The count of devices enrolled in mobile management",
    "The volume of encrypted email sent each month"
   ],
   "a": 1,
   "e": "The compliance score reflects progress toward completing improvement actions that reduce risk. It is not a count of MFA users or enrolled devices.",
   "d": 4
  },
  {
   "id": 218,
   "t": "compliance-score",
   "x": "When an organization first opens Compliance Manager, its starting score is derived from what?",
   "o": [
    "The count of created sensitivity labels",
    "The total size of stored mailboxes",
    "The Microsoft data protection baseline",
    "The number of licensed administrators"
   ],
   "a": 2,
   "e": "Compliance Manager provides an initial score based on the Microsoft data protection baseline of common recommendations. Mailbox size and label counts do not set the score.",
   "d": 4
  },
  {
   "id": 219,
   "t": "compliance-score",
   "x": "A manager asks what a higher compliance score indicates for the organization. What is the best answer?",
   "o": [
    "Lower data protection risk from completed actions",
    "Faster network throughput to cloud services",
    "Fewer administrators required to run the tenant",
    "More storage capacity available in the tenant"
   ],
   "a": 0,
   "e": "A higher compliance score means more improvement actions are complete, which lowers data protection risk. It has nothing to do with throughput or storage.",
   "d": 4
  },
  {
   "id": 220,
   "t": "compliance-score",
   "x": "Points that make up the compliance score come from Microsoft-managed actions and which other source?",
   "o": [
    "Documents pinned in My Library",
    "Emails scanned by anti-malware",
    "Actions your organization completes",
    "Audit reports downloaded from the portal"
   ],
   "a": 2,
   "e": "The score combines points from Microsoft-managed actions and the actions your organization completes. Downloading audit reports does not add points.",
   "d": 4
  },
  {
   "id": 221,
   "t": "data-classification",
   "x": "Which classification capability uses predefined patterns like credit card or passport number formats to detect sensitive data?",
   "o": [
    "Retention policies",
    "Insider risk indicators",
    "Trainable classifiers",
    "Sensitive information types"
   ],
   "a": 3,
   "e": "Sensitive information types detect data by matching known patterns such as credit card numbers. Trainable classifiers rely on machine learning examples instead of fixed patterns.",
   "d": 4
  },
  {
   "id": 222,
   "t": "data-classification",
   "x": "An organization wants to identify documents by subject matter, such as contracts, by teaching the system with sample files. Which capability fits?",
   "o": [
    "Exact data match",
    "Sensitive information types",
    "Trainable classifiers",
    "Sensitivity label policies"
   ],
   "a": 2,
   "e": "Trainable classifiers learn from sample content to recognize categories like contracts. Sensitive information types match fixed patterns and cannot be taught with examples.",
   "d": 4
  },
  {
   "id": 223,
   "t": "data-classification",
   "x": "Which statement about trainable classifiers in Microsoft Purview is accurate?",
   "o": [
    "They work without any Microsoft Purview licensing",
    "They detect data only with fixed regular expressions",
    "They are limited to scanning email message headers",
    "Some are prebuilt while others can be custom trained"
   ],
   "a": 3,
   "e": "Trainable classifiers include ready-to-use built-in options and custom ones you train with samples. They use machine learning rather than only regular expressions.",
   "d": 4
  },
  {
   "id": 224,
   "t": "data-classification",
   "x": "Why would an organization enable data classification in Microsoft Purview?",
   "o": [
    "To manage software update rings for devices",
    "To route incoming email through a spam filter",
    "To block malicious sign-ins from unknown locations",
    "To discover and label sensitive data across the environment"
   ],
   "a": 3,
   "e": "Data classification discovers and categorizes sensitive information so it can be protected. Sign-in blocking and update management are handled by other services.",
   "d": 4
  },
  {
   "id": 225,
   "t": "data-classification",
   "x": "A company needs to detect its own employee ID values precisely by matching against a database of real values. Which method is designed for this?",
   "o": [
    "A trainable classifier",
    "A sensitivity label",
    "Exact data match",
    "A generic keyword list"
   ],
   "a": 2,
   "e": "Exact data match compares content against a customer-supplied table of real values for precise detection. A generic keyword list cannot verify against a specific dataset.",
   "d": 4
  },
  {
   "id": 226,
   "t": "content-and-activity-explorer",
   "x": "Which tool gives a current snapshot showing where labeled and sensitive items are stored across your organization?",
   "o": [
    "Activity explorer",
    "Service Trust Portal",
    "Content explorer",
    "Compliance Manager"
   ],
   "a": 2,
   "e": "Content explorer shows a current view of where classified and labeled content lives. Activity explorer instead reports on actions taken over time.",
   "d": 4
  },
  {
   "id": 227,
   "t": "content-and-activity-explorer",
   "x": "Which tool shows the history of actions performed on labeled content, such as label changes or downgrades?",
   "o": [
    "My Library",
    "Content explorer",
    "Activity explorer",
    "Assessments"
   ],
   "a": 2,
   "e": "Activity explorer surfaces the history of actions on labeled data, including label changes. Content explorer only shows where the data currently resides, not activities.",
   "d": 4
  },
  {
   "id": 228,
   "t": "content-and-activity-explorer",
   "x": "A data officer needs to see exactly which files currently contain classified information and their locations. Which explorer should they open?",
   "o": [
    "Improvement actions page",
    "Activity explorer",
    "Trainable classifier console",
    "Content explorer"
   ],
   "a": 3,
   "e": "Content explorer answers where classified data resides right now. Activity explorer focuses on the timeline of actions rather than current locations.",
   "d": 4
  },
  {
   "id": 229,
   "t": "content-and-activity-explorer",
   "x": "An auditor wants a record of when sensitivity labels were applied or removed from documents over the past week. Which explorer meets this need?",
   "o": [
    "Activity explorer",
    "Compliance score dashboard",
    "Content explorer",
    "Records management console"
   ],
   "a": 0,
   "e": "Activity explorer tracks label-related activities such as applications and removals over time. Content explorer shows current placement, not a timeline of changes.",
   "d": 4
  },
  {
   "id": 230,
   "t": "sensitivity-labels-policies",
   "x": "What does a sensitivity label in Microsoft Purview apply to a document?",
   "o": [
    "A compliance score that rates the tenant security posture",
    "A classification with optional protection like encryption and marking",
    "A quarantine action that blocks the file from being shared",
    "A retention period that deletes the file after a set time"
   ],
   "a": 1,
   "e": "Sensitivity labels classify content and can enforce protection such as encryption and visual markings. Retention and deletion are handled by retention policies, not labels.",
   "d": 4
  },
  {
   "id": 231,
   "t": "sensitivity-labels-policies",
   "x": "A firm wants labeled files to automatically add a Confidential watermark and header. Which capability provides this?",
   "o": [
    "A retention label that marks the item as a record",
    "An insider risk management alert on the document",
    "Content marking configured in the sensitivity label",
    "A data loss prevention policy tip shown to the user"
   ],
   "a": 2,
   "e": "Sensitivity labels can apply content markings such as watermarks, headers, and footers. DLP policy tips only warn users and do not stamp the document itself.",
   "d": 4
  },
  {
   "id": 232,
   "t": "sensitivity-labels-policies",
   "x": "Where do administrators make published sensitivity labels available to users in Office apps?",
   "o": [
    "In an audit policy that assigns labels to mailboxes",
    "In a label policy that assigns labels to users and groups",
    "In a retention policy that assigns labels to locations",
    "In a DLP policy that assigns labels to match conditions"
   ],
   "a": 1,
   "e": "Label policies determine which users and groups can see and apply published sensitivity labels. Retention and DLP policies serve entirely different purposes.",
   "d": 4
  },
  {
   "id": 233,
   "t": "sensitivity-labels-policies",
   "x": "Which statement best describes automatic labeling with sensitivity labels?",
   "o": [
    "Content is labeled based on the user's email signature settings",
    "Content is labeled only after a user manually selects a label",
    "Content is labeled automatically when it matches defined conditions",
    "Content is labeled automatically whenever a file is deleted"
   ],
   "a": 2,
   "e": "Automatic and recommended labeling applies a label when content matches conditions such as sensitive info types or trainable classifiers, not only through manual selection.",
   "d": 4
  },
  {
   "id": 234,
   "t": "sensitivity-labels-policies",
   "x": "A sensitivity label encrypts files and restricts who can open them. Where does that protection travel?",
   "o": [
    "Only inside the SharePoint site where the file was stored",
    "Only while the file remains on the corporate network",
    "With the file itself, so restrictions persist wherever it goes",
    "Only until the label policy is next republished by an admin"
   ],
   "a": 2,
   "e": "Because encryption is embedded in the labeled file, the protection and usage rights follow the document even when it leaves the organization.",
   "d": 4
  },
  {
   "id": 235,
   "t": "data-loss-prevention",
   "x": "What is the main purpose of a Microsoft Purview data loss prevention policy?",
   "o": [
    "To archive old files into an immutable records vault",
    "To assign trainable classifiers to individual user accounts",
    "To detect and help prevent the sharing of sensitive information",
    "To encrypt every mailbox in the organization by default"
   ],
   "a": 2,
   "e": "DLP policies identify sensitive content and can block or warn on risky sharing. Encryption and records management are handled by other Purview features.",
   "d": 4
  },
  {
   "id": 236,
   "t": "data-loss-prevention",
   "x": "A DLP policy warns a user that a message contains credit card numbers but lets them proceed. What feature is this?",
   "o": [
    "An eDiscovery legal hold notice sent to custodians",
    "A policy tip that offers a business-justified override",
    "An insider risk management triage alert for review",
    "A retention label awaiting a disposition decision"
   ],
   "a": 1,
   "e": "Policy tips notify users of a DLP match and can allow an override with justification. The other items belong to different compliance solutions.",
   "d": 4
  },
  {
   "id": 237,
   "t": "data-loss-prevention",
   "x": "Across which locations can Microsoft Purview DLP policies enforce controls?",
   "o": [
    "Only on-premises file servers and network print queues",
    "Exchange, SharePoint, OneDrive, Teams, and endpoint devices",
    "Only third-party SaaS apps hosted outside Microsoft 365",
    "Only the tenant's Azure virtual machines and disks"
   ],
   "a": 1,
   "e": "DLP spans Microsoft 365 services and managed endpoints. It is not limited to on-premises servers or non-Microsoft workloads.",
   "d": 4
  },
  {
   "id": 238,
   "t": "data-loss-prevention",
   "x": "Which building block does a DLP policy use to recognize passport or tax ID numbers in content?",
   "o": [
    "Records management disposition review stages",
    "Audit log retention windows applied to mailboxes",
    "Sensitive information types that define matching patterns",
    "Adaptive protection risk levels assigned to users"
   ],
   "a": 2,
   "e": "Sensitive information types define the patterns, such as passport or tax numbers, that DLP evaluates. The other options are unrelated compliance functions.",
   "d": 4
  },
  {
   "id": 239,
   "t": "data-loss-prevention",
   "x": "What can a DLP policy do when a highly sensitive document is shared externally?",
   "o": [
    "Permanently delete the document from all locations",
    "Reclassify the tenant to a higher compliance score",
    "Grant the external recipient elevated access rights",
    "Block the action and notify administrators of the match"
   ],
   "a": 3,
   "e": "DLP can block or restrict the action and generate alerts for administrators. It does not delete content or change access rights as a response.",
   "d": 4
  },
  {
   "id": 240,
   "t": "records-management",
   "x": "In Microsoft Purview records management, what happens when content is declared a record?",
   "o": [
    "The content is shared with external compliance auditors",
    "The content is copied into every user's personal mailbox",
    "The content is immediately encrypted with a sensitivity label",
    "Restrictions are placed on editing and deleting to preserve it"
   ],
   "a": 3,
   "e": "Declaring an item a record enforces restrictions so it cannot be freely edited or deleted. Encryption and sharing are separate, unrelated concerns.",
   "d": 4
  },
  {
   "id": 241,
   "t": "records-management",
   "x": "Which capability lets an organization prove records were managed under a defined lifecycle?",
   "o": [
    "A sensitivity label content-marking activity log",
    "A DLP policy tip history captured for each user",
    "A file plan with retention and disposition tracking",
    "An insider risk severity score per individual employee"
   ],
   "a": 2,
   "e": "Records management provides a file plan and disposition records that document the retention lifecycle. The other logs do not serve records compliance.",
   "d": 4
  },
  {
   "id": 242,
   "t": "records-management",
   "x": "What distinguishes a regulatory record from a standard record in Purview?",
   "o": [
    "Its label cannot be changed or removed once applied",
    "Any user may relabel or unmark it at any time",
    "It is excluded from all retention and hold settings",
    "It is deleted automatically after only thirty days"
   ],
   "a": 0,
   "e": "A regulatory record applies the strictest controls, preventing label changes or removal. Standard records allow more flexibility in managing the item.",
   "d": 4
  },
  {
   "id": 243,
   "t": "records-management",
   "x": "Why would a business declare documents as records rather than only applying retention?",
   "o": [
    "To speed up search indexing across SharePoint sites",
    "To enforce immutability and support regulatory obligations",
    "To automatically translate the documents for global teams",
    "To increase the tenant's overall secure score rating"
   ],
   "a": 1,
   "e": "Marking items as records enforces the immutability required for regulatory compliance. Retention alone does not lock content in the same way.",
   "d": 4
  },
  {
   "id": 244,
   "t": "retention-policies-labels",
   "x": "Which statement best describes what a retention policy does?",
   "o": [
    "It assigns sensitivity labels based on the user's role",
    "It encrypts content using rights management protection",
    "It scans connected endpoints for malware signatures",
    "It keeps or deletes content for a specified period"
   ],
   "a": 3,
   "e": "Retention policies retain content and then delete it after a set period. Encryption and labeling are functions of other Purview solutions.",
   "d": 4
  },
  {
   "id": 245,
   "t": "retention-policies-labels",
   "x": "A retention label keeps items for seven years and then deletes them. What is this configuration?",
   "o": [
    "A sensitivity marking defined on the label",
    "A retention and deletion setting defined on the label",
    "An insider risk threshold defined on the label",
    "A DLP exception rule defined on the label"
   ],
   "a": 1,
   "e": "Retention labels define how long to keep content and what to do afterward, such as delete after seven years. The other options are not label settings.",
   "d": 4
  },
  {
   "id": 246,
   "t": "retention-policies-labels",
   "x": "How do retention policies differ from retention labels in scope?",
   "o": [
    "Policies encrypt items while labels only classify them by type",
    "Policies apply broadly to locations while labels apply to specific items",
    "Policies delete audit logs while labels retain those logs",
    "Policies work only on endpoints while labels work in the cloud"
   ],
   "a": 1,
   "e": "Retention policies are assigned at the location level, whereas retention labels are applied to individual items or folders for finer, item-level control.",
   "d": 4
  },
  {
   "id": 247,
   "t": "retention-policies-labels",
   "x": "What happens to a file during its retention period if a user tries to delete it?",
   "o": [
    "A copy is preserved so the content is not lost",
    "It is hidden permanently from the compliance administrator",
    "It is stripped of its assigned sensitivity label",
    "It is exported automatically into an eDiscovery case"
   ],
   "a": 0,
   "e": "Retention preserves a copy of content for the required period even after a user deletes it. It does not remove labels or auto-export to cases.",
   "d": 4
  },
  {
   "id": 248,
   "t": "insider-risk-management",
   "x": "What does insider risk management in Microsoft Purview help organizations detect?",
   "o": [
    "Misconfigured firewall rules at the network edge",
    "Expired TLS certificates on public-facing websites",
    "Malware infections spreading between external web servers",
    "Potentially risky activity by users inside the organization"
   ],
   "a": 3,
   "e": "Insider risk management identifies risky internal behaviors such as data theft or leaks. It is not a network, malware, or certificate monitoring tool.",
   "d": 4
  },
  {
   "id": 249,
   "t": "insider-risk-management",
   "x": "Insider risk management builds its policies from what to surface alerts?",
   "o": [
    "Sensitive information types shared with external users",
    "Audit log retention windows configured for mailboxes",
    "Immutable records placed within a records file plan",
    "Templates that define risk indicators and triggering events"
   ],
   "a": 3,
   "e": "Insider risk policies start from templates with configurable indicators and triggers that generate alerts for review. The other items belong to different features.",
   "d": 4
  },
  {
   "id": 250,
   "t": "insider-risk-management",
   "x": "To protect privacy, how can users be shown by default in insider risk alerts?",
   "o": [
    "Their full home addresses are displayed to reviewers",
    "Their identities can be pseudonymized for reviewers",
    "Their account passwords are shown for verification",
    "Their manager must approve each alert before it is created"
   ],
   "a": 1,
   "e": "Insider risk management supports pseudonymization to protect user privacy during investigations. It never exposes credentials or personal home addresses.",
   "d": 4
  },
  {
   "id": 251,
   "t": "insider-risk-management",
   "x": "A departing employee downloads large volumes of files before resigning. Which solution flags this pattern?",
   "o": [
    "eDiscovery Standard search",
    "Records management file plan",
    "Audit Standard log search",
    "Insider risk management"
   ],
   "a": 3,
   "e": "Insider risk management combines signals like a resignation event and mass downloads to raise an alert. Records and eDiscovery serve retention and investigation, not risk detection.",
   "d": 4
  },
  {
   "id": 252,
   "t": "ediscovery",
   "x": "Why would a legal team rely on eDiscovery in Microsoft Purview?",
   "o": [
    "To encrypt mailboxes for ongoing regulatory compliance",
    "To apply visual watermarks to confidential documents",
    "To find and manage content for legal or investigative cases",
    "To detect risky insider behavior in near real time"
   ],
   "a": 2,
   "e": "eDiscovery identifies, holds, and exports content relevant to legal matters. Encryption, insider risk, and content marking are handled by other solutions.",
   "d": 4
  },
  {
   "id": 253,
   "t": "ediscovery",
   "x": "Which capability is available in eDiscovery Premium but not in Standard?",
   "o": [
    "The ability to run a basic content search",
    "The ability to place content on a legal hold",
    "Custodian management and review sets for case analysis",
    "The ability to export search results for review"
   ],
   "a": 2,
   "e": "eDiscovery Premium adds custodian management, review sets, and advanced analytics. Standard supports content search, hold, and export only.",
   "d": 4
  },
  {
   "id": 254,
   "t": "ediscovery",
   "x": "What does placing a legal hold in eDiscovery accomplish?",
   "o": [
    "It flags the content for an insider risk review",
    "It encrypts the content with a new sensitivity label",
    "It preserves content relevant to a case from deletion",
    "It deletes the content once the case is closed"
   ],
   "a": 2,
   "e": "A hold preserves potentially relevant content so it cannot be permanently removed during a legal matter. It does not encrypt or delete that content.",
   "d": 4
  },
  {
   "id": 255,
   "t": "ediscovery",
   "x": "An organization needs advanced analytics and machine learning to reduce review volume in a lawsuit. Which tool fits?",
   "o": [
    "Audit Standard search",
    "eDiscovery Standard",
    "eDiscovery Premium",
    "Content search alone"
   ],
   "a": 2,
   "e": "eDiscovery Premium provides analytics such as near-duplicate detection and predictive coding to cut review volume. Standard and content search lack these features.",
   "d": 4
  },
  {
   "id": 256,
   "t": "audit-solutions",
   "x": "What do audit solutions in Microsoft Purview mainly provide?",
   "o": [
    "Real-time blocking of risky external file sharing",
    "A record of user and admin activities for investigations",
    "Classification of documents with trainable classifiers",
    "Automatic encryption of all outgoing email messages"
   ],
   "a": 1,
   "e": "Audit logs capture activities across services for security and compliance investigations. Encryption, classification, and blocking are other Purview features.",
   "d": 4
  },
  {
   "id": 257,
   "t": "audit-solutions",
   "x": "How does Audit Premium differ from Audit Standard in log retention?",
   "o": [
    "It stops logging administrator activity entirely",
    "It disables mailbox auditing for all licensed users",
    "It retains audit logs for a longer default period",
    "It removes the ability to search the audit log"
   ],
   "a": 2,
   "e": "Audit Premium extends default log retention beyond the Standard period and adds access to more event types. It does not reduce auditing capability.",
   "d": 4
  },
  {
   "id": 258,
   "t": "audit-solutions",
   "x": "Which additional value does Audit Premium offer during an investigation?",
   "o": [
    "Encryption of the audit log using a customer key",
    "Automatic deletion of all suspicious activity records",
    "Access to high-value crucial events and intelligent insights",
    "Real-time blocking of every flagged user session"
   ],
   "a": 2,
   "e": "Audit Premium surfaces higher-value events, such as items accessed in a mailbox, to aid forensic investigations. It does not block sessions or delete logs.",
   "d": 4
  },
  {
   "id": 259,
   "t": "audit-solutions",
   "x": "A security team must find which admin changed a mailbox setting last month. Which solution should they use?",
   "o": [
    "Records management file plan",
    "Sensitivity label auto-labeling",
    "Audit search in Microsoft Purview",
    "Insider risk management triage"
   ],
   "a": 2,
   "e": "The unified audit log records admin actions such as mailbox configuration changes and lets teams search them. The other tools do not provide this activity history.",
   "d": 4
  }
 ],
 "pbqs": [
  {
   "kind": "match",
   "t": "microsoft-defender-xdr",
   "title": "Match each Defender XDR workload to what it protects",
   "scen": "Microsoft Defender XDR bundles several workloads, each defending a different part of the estate. Match each Defender service to the assets it primarily protects.",
   "choices": [
    "Endpoints such as laptops and servers",
    "Email and Microsoft 365 collaboration",
    "SaaS cloud apps, as a CASB",
    "On-premises Active Directory identity signals"
   ],
   "items": [
    {
     "l": "Microsoft Defender for Endpoint",
     "a": 0
    },
    {
     "l": "Microsoft Defender for Office 365",
     "a": 1
    },
    {
     "l": "Microsoft Defender for Cloud Apps",
     "a": 2
    },
    {
     "l": "Microsoft Defender for Identity",
     "a": 3
    }
   ]
  },
  {
   "kind": "match",
   "t": "microsoft-purview-portal",
   "title": "Match each Microsoft Purview solution to its purpose",
   "scen": "A compliance team is mapping Microsoft Purview solutions to the outcomes they deliver. Match each solution to what it does.",
   "choices": [
    "Stops sensitive data from being shared inappropriately",
    "Classifies and marks content by sensitivity",
    "Finds and holds content for a legal case",
    "Keeps or deletes content on a defined schedule"
   ],
   "items": [
    {
     "l": "Data loss prevention (DLP)",
     "a": 0
    },
    {
     "l": "Sensitivity labels",
     "a": 1
    },
    {
     "l": "eDiscovery",
     "a": 2
    },
    {
     "l": "Records management",
     "a": 3
    }
   ]
  },
  {
   "kind": "match",
   "t": "entra-id-governance",
   "title": "Match each Microsoft Entra capability to its scenario",
   "scen": "Match each Microsoft Entra identity-governance and protection capability to the scenario it best addresses.",
   "choices": [
    "Grant access only when conditions like device or location are met",
    "Give an admin role just-in-time and time-bound",
    "Periodically recertify who still needs access",
    "Detect and respond to risky sign-ins automatically"
   ],
   "items": [
    {
     "l": "Conditional Access",
     "a": 0
    },
    {
     "l": "Privileged Identity Management",
     "a": 1
    },
    {
     "l": "Access reviews",
     "a": 2
    },
    {
     "l": "Microsoft Entra ID Protection",
     "a": 3
    }
   ]
  },
  {
   "kind": "match",
   "t": "azure-firewall",
   "title": "Match each Azure network security service to its role",
   "scen": "An architect is documenting the Azure network security services in use. Match each service to its primary role.",
   "choices": [
    "Filters traffic by allow and deny rules at a subnet or NIC",
    "Stateful, centrally managed firewall for a virtual network",
    "Protects web apps from exploits such as SQL injection",
    "Absorbs volumetric attacks against public endpoints",
    "Stores secrets, keys, and certificates with controlled access",
    "Gives private RDP and SSH to VMs without public IP addresses"
   ],
   "items": [
    {
     "l": "Network security group",
     "a": 0
    },
    {
     "l": "Azure Firewall",
     "a": 1
    },
    {
     "l": "Azure Web Application Firewall",
     "a": 2
    },
    {
     "l": "Azure DDoS Protection",
     "a": 3
    },
    {
     "l": "Azure Key Vault",
     "a": 4
    },
    {
     "l": "Azure Bastion",
     "a": 5
    }
   ]
  },
  {
   "kind": "match",
   "t": "authentication",
   "title": "Match each core security concept to its definition",
   "scen": "Match each foundational security and identity concept to the statement that defines it.",
   "choices": [
    "Proving who a user or service is",
    "Determining what an identity is allowed to do",
    "Layering controls so one failure is not fatal",
    "Assuming no implicit trust and verifying every request"
   ],
   "items": [
    {
     "l": "Authentication",
     "a": 0
    },
    {
     "l": "Authorization",
     "a": 1
    },
    {
     "l": "Defense in depth",
     "a": 2
    },
    {
     "l": "Zero Trust",
     "a": 3
    }
   ]
  },
  {
   "kind": "match",
   "t": "zero-trust-model",
   "title": "Match each Zero Trust guiding principle to its meaning",
   "scen": "The Zero Trust model rests on three guiding principles. Match each principle to what it means in practice.",
   "choices": [
    "Authenticate and authorize on all available signals",
    "Limit access with just-enough and just-in-time rights",
    "Minimize blast radius and verify end to end"
   ],
   "items": [
    {
     "l": "Verify explicitly",
     "a": 0
    },
    {
     "l": "Use least privilege access",
     "a": 1
    },
    {
     "l": "Assume breach",
     "a": 2
    }
   ]
  },
  {
   "kind": "order",
   "t": "data-classification",
   "title": "Order the Microsoft Purview information protection flow",
   "scen": "Microsoft describes protecting data as a lifecycle. Put the stages in the order Microsoft presents them.",
   "steps": [
    "Know your data by discovering and classifying it",
    "Protect your data by applying sensitivity labels",
    "Prevent data loss with DLP policies",
    "Govern your data with retention and records management"
   ]
  },
  {
   "kind": "order",
   "t": "conditional-access",
   "title": "Order how a Conditional Access policy is evaluated",
   "scen": "A user signs in and a Conditional Access policy applies. Put the evaluation steps in the correct order.",
   "steps": [
    "Collect signals such as user, location, device, and risk",
    "Evaluate the policy conditions against those signals",
    "Make a decision to allow, block, or grant with controls",
    "Enforce the decision, for example by requiring MFA"
   ]
  }
 ]
}
