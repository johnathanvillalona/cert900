// sc-900 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "sc-900",
  questions: [
  {
    "t": "shared-responsibility-model",
    "x": "A company adopts a SaaS email service. Under the cloud shared responsibility model, which task remains the customer's responsibility?",
    "o": [
      "Managing user accounts and access permissions",
      "Patching the underlying server operating system",
      "Maintaining the physical datacenter hardware",
      "Securing the network switches and routers"
    ],
    "a": 0,
    "e": "In SaaS the provider handles the operating system, hardware, and network, while the customer always keeps responsibility for accounts, identities, and data. Patching the host operating system belongs to the provider, not the customer."
  },
  {
    "t": "shared-responsibility-model",
    "x": "An organization runs virtual machines on an IaaS platform. Which security duty shifts to the customer that would not apply in a SaaS deployment?",
    "o": [
      "Patching the guest operating system",
      "Protecting the cloud region's facilities",
      "Guarding the hypervisor hosting the tenants",
      "Replacing failed disks in storage arrays"
    ],
    "a": 0,
    "e": "IaaS gives the customer the guest operating system, so patching it becomes their job, whereas SaaS keeps that with the provider. The hypervisor and physical facilities stay with the provider at every service tier."
  },
  {
    "t": "shared-responsibility-model",
    "x": "Regardless of whether a workload uses IaaS, PaaS, or SaaS, which responsibility is retained by the customer in every model?",
    "o": [
      "Protecting its own data and identities",
      "Maintaining the datacenter power supply",
      "Servicing the physical host machines",
      "Operating the cloud storage fabric"
    ],
    "a": 0,
    "e": "Data, identities, and access management stay with the customer across all service models. Physical infrastructure and the host fabric are always the provider's duty."
  },
  {
    "t": "defense-in-depth",
    "x": "A security architect layers physical controls, network firewalls, and data encryption so one failed control does not expose everything. Which strategy is being applied?",
    "o": [
      "Defense in depth",
      "Least privilege",
      "Zero standing access",
      "Single sign-on"
    ],
    "a": 0,
    "e": "Defense in depth uses multiple independent layers so a breach of one does not compromise the whole system. Least privilege limits permissions but is only one such layer, not the layering strategy itself."
  },
  {
    "t": "defense-in-depth",
    "x": "Within the defense in depth layers, which layer focuses specifically on antivirus, patching, and hardening of individual machines?",
    "o": [
      "The compute layer",
      "The perimeter layer",
      "The physical layer",
      "The identity layer"
    ],
    "a": 0,
    "e": "In the defense in depth model the compute layer covers securing virtual machines and endpoints through patching and antimalware. The perimeter layer instead protects the network edge with firewalls and DDoS controls."
  },
  {
    "t": "defense-in-depth",
    "x": "An administrator places sensitive files behind access controls and encryption as the innermost safeguard. Which defense in depth layer is described?",
    "o": [
      "The data layer",
      "The application layer",
      "The network layer",
      "The perimeter layer"
    ],
    "a": 0,
    "e": "Encrypting and controlling access to the information itself is the data layer, the innermost layer protecting the asset attackers ultimately want. The application layer instead secures the software that handles that data."
  },
  {
    "t": "zero-trust-model",
    "x": "A firm moves to a model where no request is trusted by default and every access is verified regardless of network location. Which model is this?",
    "o": [
      "Zero Trust",
      "Defense in depth",
      "Perimeter security",
      "Shared responsibility"
    ],
    "a": 0,
    "e": "Zero Trust assumes breach and verifies every request explicitly, never trusting based on network position. Traditional perimeter security instead trusts anything already inside the corporate network."
  },
  {
    "t": "zero-trust-model",
    "x": "Which statement best reflects the Zero Trust guiding principle of assume breach?",
    "o": [
      "Segment access to limit the blast radius of a breach",
      "Trust every device once it joins the internal network",
      "Grant broad standing permissions to reduce login friction",
      "Rely on the firewall as the only line of defense"
    ],
    "a": 0,
    "e": "Assume breach means designing as though an attacker is already inside, so you minimize blast radius through segmentation and least privilege. Trusting internal devices contradicts the principle entirely."
  },
  {
    "t": "zero-trust-model",
    "x": "The Zero Trust principle of verify explicitly requires that authentication and authorization decisions be based on what?",
    "o": [
      "All available signals like identity, device, and location",
      "Only the source address of the connection request",
      "Whether the account sits inside the corporate perimeter",
      "A one-time password entered at the initial login"
    ],
    "a": 0,
    "e": "Verify explicitly means each access decision draws on all available signals, including identity, device health, and location, not one factor alone. Relying only on the perimeter is exactly what Zero Trust rejects."
  },
  {
    "t": "encryption-and-hashing",
    "x": "A developer needs the same secret key to both encrypt and decrypt a stored file. Which type of encryption is being used?",
    "o": [
      "Symmetric encryption",
      "Asymmetric encryption",
      "Public key encryption",
      "Certificate pinning"
    ],
    "a": 0,
    "e": "Symmetric encryption uses one shared key for both encryption and decryption. Asymmetric encryption instead uses a public and private key pair, so the same key is not used for both operations."
  },
  {
    "t": "encryption-and-hashing",
    "x": "A system stores a fixed-length fingerprint of each password that cannot be reversed back to the original text. Which technique produces this value?",
    "o": [
      "Hashing",
      "Symmetric encryption",
      "Asymmetric encryption",
      "Tokenization"
    ],
    "a": 0,
    "e": "Hashing creates a one-way, fixed-length value that cannot be converted back to the input, which is ideal for storing passwords. Encryption is reversible with a key, so it does not fit a non-reversible fingerprint."
  },
  {
    "t": "encryption-and-hashing",
    "x": "An auditor asks how information is protected while it moves between a browser and a web server. Which protection specifically addresses this case?",
    "o": [
      "Encryption in transit",
      "Encryption at rest",
      "Hashing of stored records",
      "Disk-level encryption"
    ],
    "a": 0,
    "e": "Encryption in transit protects data as it travels across a network, such as TLS between a browser and server. Encryption at rest instead protects stored data on disk, not data actively in motion."
  },
  {
    "t": "governance-risk-compliance",
    "x": "An organization writes policies defining how employees must handle customer data and who approves exceptions. Which discipline does this represent?",
    "o": [
      "Governance",
      "Compliance",
      "Risk assessment",
      "Authentication"
    ],
    "a": 0,
    "e": "Governance is the set of policies, roles, and processes that direct how an organization operates and manages its data. Compliance instead measures adherence to external laws and standards, not the internal rule-setting."
  },
  {
    "t": "governance-risk-compliance",
    "x": "A healthcare provider must demonstrate that it meets the requirements of an external regulation such as HIPAA. This obligation falls under which area?",
    "o": [
      "Compliance",
      "Governance",
      "Risk management",
      "Authorization"
    ],
    "a": 0,
    "e": "Compliance is meeting the requirements of external laws, regulations, and standards that apply to the organization. Governance sets internal policy but does not itself constitute the external adherence being demonstrated."
  },
  {
    "t": "governance-risk-compliance",
    "x": "A team identifies threats to a new application, rates their likelihood and impact, and decides which to mitigate first. Which process is this?",
    "o": [
      "Risk management",
      "Compliance auditing",
      "Identity governance",
      "Data classification"
    ],
    "a": 0,
    "e": "Risk management is the process of identifying, assessing, and prioritizing threats so resources address the most serious first. Compliance auditing checks conformance to rules and does not itself rank threats by likelihood and impact."
  },
  {
    "t": "identity-as-primary-perimeter",
    "x": "With staff working from home and apps hosted in the cloud, a firm can no longer rely on the network edge as its main boundary. What is now the primary security perimeter?",
    "o": [
      "Identity",
      "The corporate firewall",
      "The office network",
      "The VPN concentrator"
    ],
    "a": 0,
    "e": "As users and resources move outside the traditional network, identity becomes the primary perimeter because access decisions center on verifying who is connecting. The firewall and office network no longer enclose all resources."
  },
  {
    "t": "identity-as-primary-perimeter",
    "x": "Because modern resources are reached from any device and location, which element must be verified before granting access in an identity-centric approach?",
    "o": [
      "The identity behind each access request",
      "The physical location of the office building",
      "The brand of the network firewall in use",
      "The speed of the internet connection"
    ],
    "a": 0,
    "e": "When identity is the perimeter, verifying who or what is requesting access is the control that gates resources, regardless of network. Physical location no longer defines the trust boundary."
  },
  {
    "t": "identity-as-primary-perimeter",
    "x": "A CISO explains that securing accounts and credentials is now more central than defending the office LAN. Which shift in security thinking does this describe?",
    "o": [
      "Identity as the primary perimeter",
      "The shared responsibility model",
      "The principle of least privilege",
      "The defense in depth model"
    ],
    "a": 0,
    "e": "Treating accounts and credentials as the main line of defense reflects identity becoming the primary perimeter in cloud and mobile environments. Least privilege is a supporting practice, not this overall shift."
  },
  {
    "t": "authentication",
    "x": "During sign-in a user first proves who they claim to be by entering valid credentials. Which security process is taking place at this step?",
    "o": [
      "Authentication",
      "Authorization",
      "Auditing",
      "Accounting"
    ],
    "a": 0,
    "e": "Authentication is the process of proving a claimed identity, typically with credentials. Authorization is a separate step that decides what the verified user is allowed to do."
  },
  {
    "t": "authentication",
    "x": "To strengthen login, an app requires a password plus a code from a phone authenticator. What security control does combining these factors provide?",
    "o": [
      "Multifactor authentication",
      "Single sign-on access",
      "Role-based access control",
      "Conditional data encryption"
    ],
    "a": 0,
    "e": "Requiring two different factor types, something you know and something you have, is multifactor authentication, which greatly reduces credential-theft risk. Single sign-on reduces logins but does not by itself add a second factor."
  },
  {
    "t": "authentication",
    "x": "A fingerprint scan used to unlock a corporate laptop is an example of which authentication factor category?",
    "o": [
      "Something you are",
      "Something you know",
      "Something you have",
      "Somewhere you are"
    ],
    "a": 0,
    "e": "A fingerprint is a biometric trait, which falls under the something you are factor. A password would be something you know, and a token would be something you have."
  },
  {
    "t": "authorization",
    "x": "After a user successfully signs in, the system checks which files and features that account is permitted to use. Which process governs this decision?",
    "o": [
      "Authorization",
      "Authentication",
      "Federation",
      "Provisioning"
    ],
    "a": 0,
    "e": "Authorization determines what an authenticated identity is allowed to access or do. Authentication only confirms the identity; it does not grant or restrict specific permissions."
  },
  {
    "t": "authorization",
    "x": "An organization grants permissions by assigning employees to job-based roles such as billing clerk rather than to each person individually. Which access model is this?",
    "o": [
      "Role-based access control",
      "Discretionary access control",
      "Attribute-based access control",
      "Mandatory access control"
    ],
    "a": 0,
    "e": "Role-based access control assigns permissions to roles that users are placed into, simplifying administration for groups with the same needs. Attribute-based control instead evaluates dynamic attributes rather than fixed roles."
  },
  {
    "t": "authorization",
    "x": "A policy states that each account should receive only the minimum permissions required to do its job and nothing more. Which principle is being enforced?",
    "o": [
      "Least privilege",
      "Separation of duties",
      "Defense in depth",
      "Implicit trust"
    ],
    "a": 0,
    "e": "Least privilege limits every identity to the minimum access needed, reducing the damage a compromised account can cause. Separation of duties splits sensitive tasks among people but does not itself minimize each account's rights."
  },
  {
    "t": "identity-providers",
    "x": "Several cloud apps rely on one central service to authenticate users and issue security tokens on their behalf. What is this central service called?",
    "o": [
      "An identity provider",
      "A certificate authority",
      "A load balancer",
      "A domain controller"
    ],
    "a": 0,
    "e": "An identity provider authenticates users and issues tokens that applications trust, centralizing sign-in. A certificate authority issues digital certificates and does not perform user sign-in."
  },
  {
    "t": "identity-providers",
    "x": "Which Microsoft cloud service acts as an identity provider that authenticates users and manages access to SaaS and internal apps?",
    "o": [
      "Microsoft Entra ID",
      "Microsoft Defender for Cloud",
      "Microsoft Purview compliance",
      "Microsoft Sentinel analytics"
    ],
    "a": 0,
    "e": "Microsoft Entra ID, formerly Azure Active Directory, is the cloud identity provider that authenticates users and controls access to applications. Defender and Sentinel are security tooling, not the identity provider."
  },
  {
    "t": "identity-providers",
    "x": "A company connects all its applications to a single identity provider. Which benefit does this arrangement most directly deliver?",
    "o": [
      "Central management of users and single sign-on",
      "Automatic physical security of the datacenter",
      "Elimination of the need to patch applications",
      "Guaranteed encryption of every stored database"
    ],
    "a": 0,
    "e": "A central identity provider gives one place to manage identities and enables single sign-on across connected apps. It does not handle datacenter physical security or application patching."
  },
  {
    "t": "directory-services-active-directory",
    "x": "An on-premises Windows network uses a database of users, computers, and groups managed by domain controllers. Which service provides this?",
    "o": [
      "Active Directory Domain Services",
      "Microsoft Entra ID",
      "Azure Blob Storage",
      "Windows Defender Firewall"
    ],
    "a": 0,
    "e": "Active Directory Domain Services stores and manages on-premises users, computers, and groups through domain controllers. Microsoft Entra ID is the cloud identity service and does not use traditional domain controllers."
  },
  {
    "t": "directory-services-active-directory",
    "x": "How does traditional Active Directory Domain Services differ from Microsoft Entra ID in the way clients communicate with it?",
    "o": [
      "It uses Kerberos and LDAP instead of web-based protocols",
      "It uses SAML and OAuth instead of directory protocols",
      "It stores no user or group objects at all",
      "It runs only as a cloud-hosted managed service"
    ],
    "a": 0,
    "e": "On-premises Active Directory communicates using Kerberos and LDAP, while Entra ID uses modern web protocols such as SAML, OAuth, and OpenID Connect. Entra ID is not simply a hosted copy of traditional Active Directory."
  },
  {
    "t": "directory-services-active-directory",
    "x": "In an on-premises directory, which server component authenticates logins and enforces group policy across the domain?",
    "o": [
      "The domain controller",
      "The public key server",
      "The reverse proxy",
      "The identity provider"
    ],
    "a": 0,
    "e": "A domain controller is the server that authenticates logins and applies group policy within an Active Directory domain. An identity provider serves that role in cloud identity, not the on-premises domain."
  },
  {
    "t": "federation",
    "x": "A user signs in with their own company account to reach a partner organization's application without a separate password. Which trust arrangement enables this?",
    "o": [
      "Federation",
      "Single sign-on",
      "Multifactor authentication",
      "Delegation of control"
    ],
    "a": 0,
    "e": "Federation establishes trust between separate identity systems so users authenticate with their home organization to reach another's resources. Single sign-on reduces logins within one trust domain but does not by itself link two organizations."
  },
  {
    "t": "federation",
    "x": "Two universities agree that each will accept the other's authenticated identities so researchers can share resources. What is this cross-boundary relationship called?",
    "o": [
      "A federation trust",
      "A domain migration",
      "A password vault",
      "A network bridge"
    ],
    "a": 0,
    "e": "A federation trust lets each organization accept identities authenticated by the other, enabling cross-boundary access. A domain migration moves objects between directories and does not establish ongoing cross-organization trust."
  },
  {
    "t": "federation",
    "x": "How does federation differ from single sign-on when a person accesses an application belonging to a different organization?",
    "o": [
      "Federation extends trust between different organizations",
      "Federation always requires a shared password database",
      "Federation replaces the need for any authentication",
      "Federation only works inside a single company"
    ],
    "a": 0,
    "e": "Federation extends authentication trust across organizational boundaries, so a user's home identity is honored elsewhere. It does not merge password databases or remove the need to authenticate."
  },
  {
    "t": "federation",
    "x": "Which open standards are commonly used to exchange authentication information between federated identity systems? Select TWO.",
    "o": [
      "SAML",
      "OpenID Connect",
      "LDAP",
      "Kerberos",
      "SMTP"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "SAML and OpenID Connect are widely used web standards for passing authentication and identity claims between federated systems. LDAP and Kerberos are on-premises directory protocols, and SMTP handles email."
  },
  {
    "t": "microsoft-entra-id",
    "x": "A company wants a cloud service that manages user sign-in and controls access to Microsoft 365 and other SaaS apps. Which Microsoft offering fills this role?",
    "o": [
      "Microsoft Entra ID",
      "Microsoft Intune",
      "Microsoft Defender for Cloud",
      "Microsoft Purview"
    ],
    "a": 0,
    "e": "Microsoft Entra ID is the cloud identity and access management service that authenticates users and governs access to apps. Intune manages devices rather than identities."
  },
  {
    "t": "microsoft-entra-id",
    "x": "An administrator notices that Azure Active Directory now appears under a new name in the portal. What is the current name for this identity service?",
    "o": [
      "Microsoft Entra ID",
      "Microsoft Entra Verified ID",
      "Microsoft Entra Permissions Management",
      "Microsoft Entra Domain Services"
    ],
    "a": 0,
    "e": "Azure Active Directory was renamed Microsoft Entra ID, and the capability itself is unchanged. Verified ID and Permissions Management are separate products in the Entra family."
  },
  {
    "t": "microsoft-entra-id",
    "x": "In Microsoft Entra ID, what term describes the dedicated, isolated instance of the directory an organization receives when it signs up for a Microsoft cloud service?",
    "o": [
      "A tenant",
      "A subscription",
      "A management group",
      "A resource group"
    ],
    "a": 0,
    "e": "A tenant is the organization's dedicated Entra ID instance holding its users and app registrations. A subscription is a billing container for Azure resources, not the directory itself."
  },
  {
    "t": "microsoft-entra-id",
    "x": "A user signs in once and then reaches many connected applications without re-entering credentials. Which Microsoft Entra ID capability enables this experience?",
    "o": [
      "Single sign-on",
      "Smart lockout",
      "Password writeback",
      "Continuous access evaluation"
    ],
    "a": 0,
    "e": "Single sign-on lets a user authenticate once and then access multiple integrated apps. Smart lockout instead protects accounts from brute-force password guessing."
  },
  {
    "t": "microsoft-entra-id",
    "x": "Contoso wants to invite partner staff from another organization to collaborate on shared apps while those partners keep using their own credentials. Which Entra ID capability supports this?",
    "o": [
      "Business-to-business collaboration",
      "Conditional Access",
      "Privileged Identity Management",
      "Password hash synchronization"
    ],
    "a": 0,
    "e": "B2B collaboration lets external guests sign in with their home credentials to reach shared resources. Privileged Identity Management instead governs just-in-time activation of admin roles."
  },
  {
    "t": "identity-types-agent-id",
    "x": "An application needs its own identity in Microsoft Entra ID so it can be assigned permissions to call an API. Which object represents the app's identity in the tenant?",
    "o": [
      "A service principal",
      "A security group",
      "A dynamic device",
      "An administrative unit"
    ],
    "a": 0,
    "e": "A service principal is the local representation of an application used to grant it access and permissions. A security group organizes users, not application identities."
  },
  {
    "t": "identity-types-agent-id",
    "x": "A developer wants an Azure app to reach a database without storing any secrets or credentials in code. Which Entra identity type is designed for this?",
    "o": [
      "A managed identity",
      "A guest user account",
      "A federated credential store",
      "A synchronized device object"
    ],
    "a": 0,
    "e": "A managed identity gives an Azure resource an automatically handled identity so no credentials live in code. Guest accounts represent external people, not Azure services."
  },
  {
    "t": "identity-types-agent-id",
    "x": "Which statement correctly describes a system-assigned managed identity in Microsoft Entra ID?",
    "o": [
      "It is tied to one resource and deleted when that resource is removed",
      "It is created standalone and shared across many different resources",
      "It represents an external partner invited from another tenant",
      "It must be renewed manually with a fresh client secret each month"
    ],
    "a": 0,
    "e": "A system-assigned managed identity shares the lifecycle of its resource and is removed along with it. A user-assigned identity, by contrast, is standalone and can be shared."
  },
  {
    "t": "identity-types-agent-id",
    "x": "An organization joins laptops to Entra ID so Conditional Access can evaluate machine state during sign-in. What kind of identity object does this create?",
    "o": [
      "A device identity",
      "A service principal",
      "A managed identity",
      "A workload identity"
    ],
    "a": 0,
    "e": "Joining or registering a machine creates a device identity in Entra ID that policies can reference. A service principal instead represents an application."
  },
  {
    "t": "identity-types-agent-id",
    "x": "Microsoft Entra introduced identities so autonomous AI agents can authenticate and be governed like other principals. What are these called?",
    "o": [
      "Agent identities",
      "Verified credentials",
      "Access packages",
      "Named locations"
    ],
    "a": 0,
    "e": "Agent ID gives AI agents distinct, governable identities so their access can be managed and audited. Access packages instead bundle resources together for entitlement management."
  },
  {
    "t": "identity-types-agent-id",
    "x": "In Microsoft Entra ID, which term describes an internal employee account that belongs to the organization's own tenant?",
    "o": [
      "A member user",
      "A guest user",
      "A service principal",
      "A managed identity"
    ],
    "a": 0,
    "e": "Member users are the organization's own internal accounts, while guest users are external collaborators invited into the tenant. Service principals represent apps rather than people."
  },
  {
    "t": "hybrid-identity",
    "x": "An enterprise keeps its accounts in on-premises Active Directory but wants those same users to sign in to Microsoft 365. Which tool synchronizes the accounts to Entra ID?",
    "o": [
      "Microsoft Entra Connect",
      "Microsoft Entra Verified ID",
      "Microsoft Entra Permissions Management",
      "Microsoft Intune"
    ],
    "a": 0,
    "e": "Microsoft Entra Connect synchronizes on-premises AD accounts into Entra ID to create hybrid identities. Verified ID handles decentralized credentials, not directory sync."
  },
  {
    "t": "hybrid-identity",
    "x": "Which hybrid identity method sends a hash of the on-premises password to Entra ID so users sign in to the cloud with the same password?",
    "o": [
      "Password hash synchronization",
      "Pass-through authentication",
      "Federated single sign-on",
      "Certificate-based authentication"
    ],
    "a": 0,
    "e": "Password hash synchronization stores a hash of the user's password hash in Entra ID so the cloud can validate sign-ins. Pass-through authentication instead validates against on-premises AD in real time."
  },
  {
    "t": "hybrid-identity",
    "x": "A security team wants cloud sign-ins validated directly against on-premises Active Directory in real time, with no password hashes kept in the cloud. Which method meets this need?",
    "o": [
      "Pass-through authentication",
      "Password hash synchronization",
      "Business-to-business collaboration",
      "Self-service password reset"
    ],
    "a": 0,
    "e": "Pass-through authentication validates the password against on-premises AD at sign-in time using a lightweight agent. Password hash synchronization instead keeps a password hash in the cloud."
  },
  {
    "t": "hybrid-identity",
    "x": "An organization requires that all authentication happen through its existing AD FS servers rather than in Entra ID. Which hybrid identity approach does this describe?",
    "o": [
      "Federation",
      "Password hash synchronization",
      "Cloud-only identity",
      "Managed identity"
    ],
    "a": 0,
    "e": "Federation hands authentication to an external identity provider such as AD FS, with Entra ID trusting the tokens it issues. A cloud-only identity has no on-premises component at all."
  },
  {
    "t": "hybrid-identity",
    "x": "What best describes a hybrid identity in the Microsoft Entra context?",
    "o": [
      "A single account synchronized to both on-premises AD and the cloud",
      "A user account created only in the cloud with no local copy",
      "A shared account used by several employees at the same time",
      "A temporary account that expires after just one sign-in"
    ],
    "a": 0,
    "e": "A hybrid identity is one account represented in both on-premises AD and Entra ID through directory synchronization. A cloud-only account has no on-premises counterpart."
  },
  {
    "t": "hybrid-identity",
    "x": "Which lightweight alternative to the Entra Connect Sync application uses a cloud-managed agent to synchronize accounts from multiple disconnected AD forests?",
    "o": [
      "Microsoft Entra Connect cloud sync",
      "Microsoft Entra Domain Services",
      "Microsoft Entra Verified ID",
      "Microsoft Entra Private Access"
    ],
    "a": 0,
    "e": "Entra Connect cloud sync uses a lightweight, cloud-managed provisioning agent well suited to multiple or disconnected forests. Domain Services instead provides managed domain controllers in Azure."
  },
  {
    "t": "authentication-methods",
    "x": "A company wants employees to sign in without any password by tapping a hardware key that supports the WebAuthn standard. Which authentication method is this?",
    "o": [
      "FIDO2 security keys",
      "SMS text message codes",
      "Static security questions",
      "Temporary Access Pass"
    ],
    "a": 0,
    "e": "FIDO2 security keys are phishing-resistant, passwordless credentials based on the WebAuthn standard. SMS codes still rely on a password plus a texted number."
  },
  {
    "t": "authentication-methods",
    "x": "Which passwordless method lets a user sign in to a Windows device with a PIN or biometric that is bound to that specific device?",
    "o": [
      "Windows Hello for Business",
      "Password hash synchronization",
      "OATH hardware token",
      "Voice call verification"
    ],
    "a": 0,
    "e": "Windows Hello for Business ties a PIN or biometric gesture to the device using asymmetric keys, so no password travels the network. An OATH token only produces a numeric code."
  },
  {
    "t": "authentication-methods",
    "x": "Microsoft Authenticator can now store a phishing-resistant, passwordless credential that follows the FIDO2 standard on the user's phone. What is this credential called?",
    "o": [
      "A passkey",
      "A password",
      "A recovery code",
      "A security question"
    ],
    "a": 0,
    "e": "A passkey is a FIDO2 credential, storable in Authenticator, that signs in without a password and resists phishing. A recovery code is only a one-time fallback."
  },
  {
    "t": "authentication-methods",
    "x": "A government agency issues smart cards holding X.509 certificates and wants staff to authenticate to Entra ID directly with them. Which method supports this?",
    "o": [
      "Certificate-based authentication",
      "Text message code verification",
      "Self-service password reset",
      "Voice call phone verification"
    ],
    "a": 0,
    "e": "Certificate-based authentication lets users present an X.509 certificate, such as one on a smart card, straight to Entra ID. Self-service password reset instead helps users recover their passwords."
  },
  {
    "t": "authentication-methods",
    "x": "A new employee has no credentials yet and needs a time-limited passcode to register a passwordless method during first sign-in. Which method provides this?",
    "o": [
      "Temporary Access Pass",
      "FIDO2 security key",
      "Windows Hello for Business",
      "OATH software token"
    ],
    "a": 0,
    "e": "A Temporary Access Pass is a time-limited passcode that lets a user onboard or recover by registering other methods. A FIDO2 key is a permanent credential, not a bootstrap code."
  },
  {
    "t": "authentication-methods",
    "x": "Which method lets a user approve a sign-in by tapping Approve on a notification sent to an app on their phone?",
    "o": [
      "A push notification in Authenticator",
      "A one-time printed backup code",
      "A certificate on a smart card",
      "A password typed at each sign-in"
    ],
    "a": 0,
    "e": "The Microsoft Authenticator app can send a push notification the user approves to verify a sign-in. A printed backup code must instead be typed in manually."
  },
  {
    "t": "multifactor-authentication",
    "x": "Multifactor authentication requires evidence from at least two different categories. Which set lists three valid authentication factor categories?",
    "o": [
      "Something you know, something you have, and something you are",
      "Something you know, something you read, and something you write",
      "Somewhere you live, someone you know, and something you own",
      "Something you buy, something you sell, and something you rent"
    ],
    "a": 0,
    "e": "MFA combines factors from distinct categories: knowledge, possession, and inherence. Using two passwords would still be a single category and not true MFA."
  },
  {
    "t": "multifactor-authentication",
    "x": "A user enters a correct password and is then prompted to approve a notification on a registered phone. Which security control does the second prompt represent?",
    "o": [
      "Multifactor authentication",
      "Single sign-on",
      "Password writeback",
      "Directory synchronization"
    ],
    "a": 0,
    "e": "Requiring a second, possession-based factor after the password is multifactor authentication. Single sign-on reduces prompts rather than adding a verification step."
  },
  {
    "t": "multifactor-authentication",
    "x": "Which free baseline in Entra ID automatically enforces MFA registration for all users and blocks legacy authentication without custom policies?",
    "o": [
      "Security defaults",
      "Conditional Access",
      "Privileged Identity Management",
      "Entitlement management"
    ],
    "a": 0,
    "e": "Security defaults provide preconfigured protections, including required MFA registration, at no extra cost. Conditional Access instead offers granular, customizable rules."
  },
  {
    "t": "multifactor-authentication",
    "x": "An administrator wants to require MFA only when users sign in from outside the corporate network. Which Entra ID feature applies this kind of targeted rule?",
    "o": [
      "Conditional Access",
      "Security defaults",
      "Entra Password Protection",
      "Self-service password reset"
    ],
    "a": 0,
    "e": "Conditional Access evaluates signals such as location and can require MFA under specific conditions. Security defaults apply broadly and cannot be scoped this precisely."
  },
  {
    "t": "multifactor-authentication",
    "x": "In an MFA prompt, scanning a fingerprint satisfies which category of authentication factor?",
    "o": [
      "Something you are",
      "Something you have",
      "Something you know",
      "Somewhere you are"
    ],
    "a": 0,
    "e": "A fingerprint is a biometric trait, so it belongs to the something you are category. A hardware token would instead be something you have."
  },
  {
    "t": "multifactor-authentication",
    "x": "Why does enabling MFA reduce the risk that a single stolen password leads to a breach?",
    "o": [
      "An attacker still lacks the user's second factor to finish sign-in",
      "The password is automatically changed after every login attempt",
      "The account is permanently disabled once a password is entered",
      "All future passwords become impossible for the user to reset"
    ],
    "a": 0,
    "e": "Even with a valid password, an attacker cannot pass the second factor the legitimate user holds. MFA does not rotate the password on each attempt."
  },
  {
    "t": "password-protection-management",
    "x": "An organization wants users to reset forgotten passwords themselves after verifying identity, cutting help-desk tickets. Which Entra ID feature enables this?",
    "o": [
      "Self-service password reset",
      "Smart lockout",
      "Conditional Access",
      "Password hash synchronization"
    ],
    "a": 0,
    "e": "Self-service password reset lets users securely reset or unlock their own accounts after verification. Smart lockout instead throttles brute-force guessing."
  },
  {
    "t": "password-protection-management",
    "x": "Which Entra ID capability blocks users from choosing weak or common passwords by checking them against global and custom banned lists?",
    "o": [
      "Microsoft Entra Password Protection",
      "Self-service password reset",
      "Temporary Access Pass",
      "Conditional Access"
    ],
    "a": 0,
    "e": "Entra Password Protection enforces global and custom banned-password lists to stop weak choices. A Temporary Access Pass instead onboards users to passwordless methods."
  },
  {
    "t": "password-protection-management",
    "x": "Which feature protects accounts by temporarily locking sign-ins after repeated bad password attempts while distinguishing the real user from attackers?",
    "o": [
      "Smart lockout",
      "Password writeback",
      "Single sign-on",
      "Federation"
    ],
    "a": 0,
    "e": "Smart lockout locks sign-ins after too many failures and uses familiarity signals to avoid punishing the genuine user. Password writeback instead syncs cloud password changes back to on-premises AD."
  },
  {
    "t": "password-protection-management",
    "x": "In a hybrid environment, which capability sends a password change made through cloud self-service reset back to on-premises Active Directory?",
    "o": [
      "Password writeback",
      "Smart lockout",
      "Pass-through authentication",
      "Conditional Access"
    ],
    "a": 0,
    "e": "Password writeback ensures a cloud self-service password change is written back to on-premises AD, keeping both in sync. Pass-through authentication instead validates sign-ins against on-premises AD."
  },
  {
    "t": "password-protection-management",
    "x": "A company wants to block its own brand name and local sports teams from being used in passwords across the tenant. Which option supports this?",
    "o": [
      "A custom banned password list",
      "A named location policy",
      "An access review",
      "A dynamic group rule"
    ],
    "a": 0,
    "e": "A custom banned password list lets an organization add its own terms to the words Entra Password Protection rejects. A named location instead defines trusted IP ranges for Conditional Access."
  },
  {
    "t": "password-protection-management",
    "x": "Before a user can rely on self-service password reset, what must they typically complete first?",
    "o": [
      "Register one or more authentication methods for verification",
      "Delete their existing password from the directory",
      "Turn off multifactor authentication on the account",
      "Move their account into a separate cloud tenant"
    ],
    "a": 0,
    "e": "Users must register verification methods, such as a phone or the Authenticator app, before they can complete a self-service reset. Disabling MFA is not required and would weaken security."
  },
  {
    "t": "conditional-access",
    "x": "An administrator wants to require multifactor authentication only when a sign-in comes from outside the corporate network. Which Conditional Access element evaluates the connection location?",
    "o": [
      "A signal such as network location or IP range",
      "A grant control that resets the user password",
      "An access review that recertifies group members",
      "A lifecycle workflow that offboards the user"
    ],
    "a": 0,
    "e": "Conditional Access collects signals like user, device, location, and risk before deciding. Access reviews recertify existing access rather than evaluating a live sign-in."
  },
  {
    "t": "conditional-access",
    "x": "A Conditional Access policy determines that a sign-in meets its assignment conditions. What does the policy produce next to control the sign-in outcome?",
    "o": [
      "A decision to block or to grant with requirements",
      "A permanent role assignment for the account",
      "A risk report summarizing past detections",
      "An eligible role the user can later activate"
    ],
    "a": 0,
    "e": "After matching conditions, the policy makes a decision: block access or grant it with controls like MFA. Eligible roles belong to Privileged Identity Management, not Conditional Access."
  },
  {
    "t": "conditional-access",
    "x": "Company policy states that a finance web app may be opened only from managed, compliant devices. Which Conditional Access grant control enforces this?",
    "o": [
      "Require the device to be marked compliant",
      "Require the user to complete an access review",
      "Require a Global Administrator to approve it",
      "Require the group owner to renew membership"
    ],
    "a": 0,
    "e": "Grant controls can require a compliant or hybrid-joined device before allowing access. Access reviews and group renewals are governance tasks, not sign-in grant controls."
  },
  {
    "t": "conditional-access",
    "x": "An organization wants signed-in users of a sensitive app to have limited browser sessions with no ability to download files. Which Conditional Access capability applies these in-app restrictions?",
    "o": [
      "A session control that enforces app-enforced restrictions",
      "A built-in directory role assigned to the user",
      "A risk-based user classification from reports",
      "A just-in-time activation of a privileged role"
    ],
    "a": 0,
    "e": "Session controls let a policy limit the experience inside a cloud app, such as blocking downloads. Directory roles grant permissions but do not shape the live session."
  },
  {
    "t": "conditional-access",
    "x": "Conditional Access is often called the identity-centric enforcement point of a Zero Trust approach. What does a policy combine to reach an enforcement outcome?",
    "o": [
      "User and app assignments, conditions, and controls",
      "A schedule of quarterly recertification campaigns",
      "A catalog of access packages for external guests",
      "A set of eligible assignments needing activation"
    ],
    "a": 0,
    "e": "A Conditional Access policy joins assignments, conditions, and access controls into an if-then rule. Access packages and recertification are entitlement management and access review features."
  },
  {
    "t": "conditional-access",
    "x": "A help desk sets a rule so that every administrator role holder must pass multifactor authentication on each sign-in. This if-then enforcement is delivered by which Entra capability?",
    "o": [
      "A Conditional Access policy control",
      "An entitlement management access package",
      "An access review recertification campaign",
      "A lifecycle workflow provisioning trigger"
    ],
    "a": 0,
    "e": "Conditional Access expresses if-then rules such as requiring MFA for admins. Entitlement management provisions access packages and does not enforce sign-in-time MFA."
  },
  {
    "t": "entra-roles-rbac",
    "x": "A new employee only needs to reset passwords and manage basic user accounts in Entra. Following least privilege, which built-in role best fits this responsibility?",
    "o": [
      "User Administrator",
      "Global Administrator",
      "Security Reader",
      "Application Developer"
    ],
    "a": 0,
    "e": "User Administrator grants user and password management without broad tenant control. Global Administrator would over-provision the person far beyond the stated need."
  },
  {
    "t": "entra-roles-rbac",
    "x": "Which statement best describes the Global Administrator role in Microsoft Entra ID?",
    "o": [
      "It grants broad rights over nearly all tenant settings",
      "It only allows reading sign-in and audit logs",
      "It is limited to one application registration",
      "It can activate eligible roles but not change settings"
    ],
    "a": 0,
    "e": "Global Administrator holds the broadest privileges over the tenant, so it should be tightly limited. A read-only scope describes roles like Security Reader instead."
  },
  {
    "t": "entra-roles-rbac",
    "x": "Why does Microsoft Entra provide role-based access control with built-in administrator roles?",
    "o": [
      "To grant administrators only the permissions their job requires",
      "To remove the need for any user authentication",
      "To replace Conditional Access sign-in policies",
      "To store passwords for all cloud applications"
    ],
    "a": 0,
    "e": "Role-based access control assigns scoped permissions so admins get just what they need. It does not replace authentication or Conditional Access enforcement."
  },
  {
    "t": "entra-roles-rbac",
    "x": "An administrator assigns the Helpdesk Administrator role but wants it to apply only to one administrative unit rather than the whole tenant. What makes this possible?",
    "o": [
      "Scoping the role assignment to an administrative unit",
      "Converting the role into an access package request",
      "Turning the role into a Conditional Access grant",
      "Publishing the role inside a lifecycle workflow"
    ],
    "a": 0,
    "e": "Roles can be scoped to an administrative unit so permissions cover only that subset of the directory. Access packages and workflows are separate governance features."
  },
  {
    "t": "entra-roles-rbac",
    "x": "A compliance analyst must view security configurations and reports but must never change them. Which built-in role satisfies this requirement?",
    "o": [
      "Security Reader",
      "Security Administrator",
      "Global Administrator",
      "Privileged Role Administrator"
    ],
    "a": 0,
    "e": "Security Reader gives read-only visibility into security features and reports. Security Administrator and the others allow changes the analyst should not make."
  },
  {
    "t": "entra-roles-rbac",
    "x": "Which built-in role is specifically designed to manage role assignments and configure Privileged Identity Management settings?",
    "o": [
      "Privileged Role Administrator",
      "Reports Reader",
      "Groups Administrator",
      "Guest Inviter"
    ],
    "a": 0,
    "e": "Privileged Role Administrator manages role assignments and PIM configuration. Reports Reader and Guest Inviter hold narrow, unrelated permissions."
  },
  {
    "t": "entra-id-governance",
    "x": "A project team frequently adds contractors who each need the same collection of groups, apps, and SharePoint sites. Which Entra ID Governance feature bundles these resources for streamlined assignment?",
    "o": [
      "Entitlement management access packages",
      "Conditional Access session controls",
      "Entra ID Protection risk policies",
      "Password protection banned-password lists"
    ],
    "a": 0,
    "e": "Entitlement management groups related resources into access packages users can request. The other features address sign-in enforcement or password hygiene, not access bundling."
  },
  {
    "t": "entra-id-governance",
    "x": "An organization wants access to be provisioned automatically when employees are hired and removed when they leave. Which governance concept addresses this joiner-mover-leaver flow?",
    "o": [
      "Identity lifecycle management",
      "Multifactor authentication registration",
      "Self-service password reset",
      "Conditional Access reporting"
    ],
    "a": 0,
    "e": "Identity lifecycle management automates provisioning and deprovisioning as people join, move, and leave. Password reset and MFA registration handle authentication, not lifecycle access."
  },
  {
    "t": "entra-id-governance",
    "x": "What primary goal does Microsoft Entra ID Governance help organizations achieve?",
    "o": [
      "Ensuring appropriate access to the right resources",
      "Encrypting all network traffic between branch offices",
      "Blocking malware from reaching managed user devices",
      "Storing application secrets inside a hardware module"
    ],
    "a": 0,
    "e": "Identity governance ensures appropriate access to resources and can audit that access over time. Encryption and malware defense are handled by other security tools."
  },
  {
    "t": "entra-id-governance",
    "x": "When a user requests an access package, an administrator wants a manager to approve it and the access to expire after 90 days. Which capability provides these request policies?",
    "o": [
      "Entitlement management policies on the access package",
      "Entra ID Protection sign-in risk policies",
      "Conditional Access location-based conditions",
      "Password protection smart lockout thresholds"
    ],
    "a": 0,
    "e": "Access package policies define who can request, who approves, and how long access lasts. Risk and lockout features protect authentication rather than govern request approval."
  },
  {
    "t": "entra-id-governance",
    "x": "An HR team wants automated tasks such as sending a welcome email and enabling accounts to run on an employee's first day. Which feature schedules these tasks around lifecycle events?",
    "o": [
      "Lifecycle workflows",
      "Conditional Access policies",
      "Access reviews",
      "Security defaults"
    ],
    "a": 0,
    "e": "Lifecycle workflows automate onboarding and offboarding tasks tied to joiner, mover, and leaver events. Access reviews recertify existing access instead of running these tasks."
  },
  {
    "t": "entra-id-governance",
    "x": "A company routinely shares an access package with partners from another business so those guests can request resources. Which entitlement management concept represents that external partner?",
    "o": [
      "A connected organization",
      "A named administrative unit",
      "A Conditional Access named location",
      "A dynamic membership rule"
    ],
    "a": 0,
    "e": "Connected organizations let entitlement management extend access packages to external partners' users. Named locations and dynamic rules serve different, unrelated purposes."
  },
  {
    "t": "access-reviews",
    "x": "A security team must periodically confirm that only current members of a sensitive group still need their membership. Which Entra governance feature automates this recurring recertification?",
    "o": [
      "Access reviews",
      "Conditional Access",
      "Password protection",
      "Security defaults"
    ],
    "a": 0,
    "e": "Access reviews let organizations recertify group memberships, app access, and role assignments on a schedule. Conditional Access enforces sign-ins but does not recertify membership."
  },
  {
    "t": "access-reviews",
    "x": "When configuring an access review, an administrator can choose who evaluates whether access should continue. Which option is a valid reviewer choice?",
    "o": [
      "Group owners, chosen reviewers, or the users themselves",
      "The Conditional Access engine deciding automatically",
      "The tenant billing contact by default",
      "An anonymous external auditor with no account"
    ],
    "a": 0,
    "e": "Access reviews can be assigned to owners, designated reviewers, or the users themselves via self-review. A service cannot subjectively decide continued business need."
  },
  {
    "t": "access-reviews",
    "x": "An organization wants to regularly verify that external guest users still require access to shared groups and applications. How do access reviews help here?",
    "o": [
      "They recertify guest access and remove stale guest accounts",
      "They block all guests from signing in immediately",
      "They assign guests permanent administrator roles",
      "They encrypt the data guests are allowed to open"
    ],
    "a": 0,
    "e": "Access reviews are commonly used to recertify guest access and clean up stale external accounts. They do not encrypt data or grant admin roles."
  },
  {
    "t": "access-reviews",
    "x": "After an access review finishes, an administrator wants denied access to be revoked automatically without manual steps. Which setting delivers this behavior?",
    "o": [
      "Auto-apply results to resources when the review ends",
      "Escalate all decisions to a Global Administrator",
      "Convert the review into an access package request",
      "Trigger a Conditional Access block for everyone"
    ],
    "a": 0,
    "e": "Access reviews can auto-apply results so removals happen automatically when a review completes. Converting to an access package is unrelated to applying review outcomes."
  },
  {
    "t": "access-reviews",
    "x": "Which of the following can be the target of an Entra access review?",
    "o": [
      "Group memberships, app access, and directory roles",
      "Only the tenant's registered public DNS records",
      "Only the configured password complexity rules",
      "Only the connected devices' firmware versions"
    ],
    "a": 0,
    "e": "Access reviews can cover group memberships, access to applications, and privileged role assignments. DNS and firmware are outside the identity governance scope."
  },
  {
    "t": "access-reviews",
    "x": "A governance lead wants to periodically confirm that people holding privileged directory roles still require them. Which approach supports recurring recertification of these role holders?",
    "o": [
      "Access reviews configured for privileged roles",
      "Password protection paired with smart lockout",
      "Security defaults applied to all users",
      "Self-service password reset for administrators"
    ],
    "a": 0,
    "e": "Access reviews can recertify privileged role assignments, often alongside PIM, to remove standing access. Password and lockout tools do not recertify role membership."
  },
  {
    "t": "privileged-identity-management",
    "x": "An organization wants administrators to hold no standing privileges and instead request elevated access only when a task requires it. Which capability provides this just-in-time access?",
    "o": [
      "Privileged Identity Management",
      "Conditional Access session controls",
      "Entra ID Protection risk policies",
      "Self-service password reset"
    ],
    "a": 0,
    "e": "Privileged Identity Management provides just-in-time, time-bound access to privileged roles. It reduces standing access that attackers could exploit."
  },
  {
    "t": "privileged-identity-management",
    "x": "In Privileged Identity Management, a user is assigned a role as eligible rather than active. What must the user do to use the role's permissions?",
    "o": [
      "Activate the role to gain time-bound access",
      "Wait for the role to expire automatically",
      "Request that a brand-new tenant be created",
      "Reset the account password before signing in"
    ],
    "a": 0,
    "e": "An eligible assignment requires the user to activate the role, granting time-bound access, rather than holding it permanently. Active assignments already carry the permissions."
  },
  {
    "t": "privileged-identity-management",
    "x": "When a user activates an eligible role in Privileged Identity Management, an administrator can require extra steps before access is granted. Which requirements can PIM enforce at activation?",
    "o": [
      "Multifactor authentication, a justification, and approval",
      "A full re-registration of the user's device",
      "Deletion of the user's other role assignments",
      "A permanent change to the tenant's domain name"
    ],
    "a": 0,
    "e": "PIM can require MFA, a business justification, and approval when a role is activated. These controls add oversight to temporary elevation."
  },
  {
    "t": "privileged-identity-management",
    "x": "A company activates administrative roles only for the few hours needed to complete maintenance. Which Privileged Identity Management characteristic makes elevated access temporary?",
    "o": [
      "Time-bound assignments with a start and expiration",
      "Permanent membership that never expires at all",
      "Anonymous access without any sign-in required",
      "Automatic promotion to Global Administrator"
    ],
    "a": 0,
    "e": "PIM grants time-bound access that expires automatically, limiting the window of privilege. Permanent membership is exactly what PIM is designed to reduce."
  },
  {
    "t": "privileged-identity-management",
    "x": "A security manager needs a record of who activated privileged roles and when, plus alerts for suspicious activations. Which Privileged Identity Management feature provides this oversight?",
    "o": [
      "Audit history and access alerts for role activity",
      "Automatic deletion of all sign-in log data",
      "Disabling multifactor authentication for admins",
      "Publishing roles as public access packages"
    ],
    "a": 0,
    "e": "PIM keeps an audit history of activations and can alert on risky or excessive activity. Disabling MFA or deleting logs would reduce, not improve, oversight."
  },
  {
    "t": "privileged-identity-management",
    "x": "Privileged Identity Management can manage just-in-time access for which kinds of assignments?",
    "o": [
      "Entra roles and Azure resource roles",
      "Only external guest user invitations",
      "Only self-service password resets",
      "Only Conditional Access named locations"
    ],
    "a": 0,
    "e": "PIM governs eligible and active assignments for Microsoft Entra roles and Azure resource roles. Password resets and named locations are outside its scope."
  },
  {
    "t": "entra-id-protection",
    "x": "Entra ID Protection flags a sign-in that originates from an anonymous IP address as potentially compromised. What is this flagged event an example of?",
    "o": [
      "A risk detection",
      "An access package request",
      "A lifecycle workflow task",
      "A role activation approval"
    ],
    "a": 0,
    "e": "Entra ID Protection generates risk detections such as anonymous IP or atypical travel sign-ins. Access packages and workflows are governance features, not risk signals."
  },
  {
    "t": "entra-id-protection",
    "x": "Entra ID Protection separates user risk from sign-in risk. What does sign-in risk primarily measure?",
    "o": [
      "The chance a sign-in is not the legitimate user",
      "The number of groups a user belongs to",
      "The remaining days left on an access package",
      "The count of roles a user can activate"
    ],
    "a": 0,
    "e": "Sign-in risk estimates the probability that a given sign-in attempt is not the real account owner. User risk instead reflects the chance an account is compromised overall."
  },
  {
    "t": "entra-id-protection",
    "x": "An administrator wants users flagged with high risk to be forced automatically to reset their password or complete MFA. How is this remediation commonly enforced?",
    "o": [
      "A risk-based Conditional Access policy",
      "A quarterly access review campaign",
      "A lifecycle workflow leaver task",
      "An eligible PIM role assignment"
    ],
    "a": 0,
    "e": "Entra ID Protection risk signals feed risk-based Conditional Access policies that require MFA or password reset. Access reviews and workflows do not respond to live risk."
  },
  {
    "t": "entra-id-protection",
    "x": "Which of the following is a typical risk detection surfaced by Entra ID Protection?",
    "o": [
      "Atypical travel between distant sign-in locations",
      "A user requesting a new access package",
      "An owner approving a group membership",
      "An administrator scoping a role assignment"
    ],
    "a": 0,
    "e": "Detections such as atypical travel, leaked credentials, and unfamiliar sign-in properties indicate possible compromise. The other items are routine governance actions."
  },
  {
    "t": "entra-id-protection",
    "x": "What is the primary purpose of Microsoft Entra ID Protection?",
    "o": [
      "To detect, investigate, and remediate identity-based risks",
      "To bundle resources into requestable access packages",
      "To schedule recurring recertification of group members",
      "To provide just-in-time elevation for admin roles"
    ],
    "a": 0,
    "e": "Entra ID Protection detects identity risks, helps investigate them, and can automate remediation. Access packages, reviews, and elevation belong to other Entra features."
  },
  {
    "t": "azure-ddos-protection",
    "x": "A public-facing web service is being overwhelmed by a flood of traffic from thousands of sources trying to exhaust its bandwidth. Which Azure service is designed to absorb and mitigate this kind of attack?",
    "o": [
      "Azure DDoS Protection",
      "Azure Key Vault",
      "Azure Bastion",
      "Azure Policy"
    ],
    "a": 0,
    "e": "Azure DDoS Protection detects and mitigates volumetric denial-of-service attacks aimed at public IP resources. Azure Key Vault stores secrets and does not filter network floods."
  },
  {
    "t": "azure-ddos-protection",
    "x": "An organization enables the paid DDoS Network Protection plan on a virtual network. Which capability does this add beyond the always-on platform defenses?",
    "o": [
      "Adaptive real-time tuning with attack metrics and alerts",
      "Automatic patching of guest operating systems",
      "Encryption of data at rest inside storage accounts",
      "Centralized storage of TLS certificates for web apps"
    ],
    "a": 0,
    "e": "The paid plan adds adaptive tuning, telemetry, alerting, and cost protection for protected public IPs. OS patching and certificate storage are unrelated to DDoS mitigation."
  },
  {
    "t": "azure-ddos-protection",
    "x": "At which layers of the network stack does Azure DDoS Protection primarily focus its mitigation of attacks?",
    "o": [
      "The network and transport layers",
      "The application and presentation layers",
      "The physical and data-link layers",
      "The session and application layers"
    ],
    "a": 0,
    "e": "Azure DDoS Protection defends against layer 3 and layer 4 volumetric and protocol attacks. Application-layer web exploits are instead handled by a Web Application Firewall."
  },
  {
    "t": "azure-ddos-protection",
    "x": "Which statement about the always-on platform level of Azure DDoS Protection is accurate?",
    "o": [
      "It is enabled for all Azure resources at no extra charge",
      "It must be purchased separately for every subscription",
      "It only protects on-premises datacenters, not Azure",
      "It requires a support ticket to activate per resource"
    ],
    "a": 0,
    "e": "Basic infrastructure-level DDoS protection is built into the Azure platform for free. The enhanced telemetry and tuning features require the paid protection plan."
  },
  {
    "t": "azure-firewall",
    "x": "A team needs a centrally managed, stateful firewall to filter both inbound and outbound traffic across many virtual networks. Which service fits this requirement?",
    "o": [
      "Azure Firewall",
      "Azure Bastion",
      "Azure Key Vault",
      "Microsoft Defender for Cloud"
    ],
    "a": 0,
    "e": "Azure Firewall is a managed, stateful network firewall service that centrally governs traffic across virtual networks. Bastion only brokers secure administrative sessions to VMs."
  },
  {
    "t": "azure-firewall",
    "x": "An administrator wants to allow outbound traffic only to a specific list of fully qualified domain names. Which Azure Firewall rule type supports this?",
    "o": [
      "Application rules",
      "DNAT rules",
      "Route tables",
      "Access reviews"
    ],
    "a": 0,
    "e": "Application rules in Azure Firewall filter outbound traffic by fully qualified domain name. Route tables direct traffic paths but do not perform name-based filtering."
  },
  {
    "t": "azure-firewall",
    "x": "Azure Firewall can automatically block traffic to and from IP addresses and domains known to be malicious. What is this capability called?",
    "o": [
      "Threat intelligence based filtering",
      "Just-in-time VM access",
      "Adaptive application controls",
      "Conditional Access"
    ],
    "a": 0,
    "e": "Threat intelligence based filtering uses Microsoft feeds to alert on or deny traffic tied to known bad addresses and domains. Conditional Access governs identity sign-ins, not network traffic."
  },
  {
    "t": "azure-firewall",
    "x": "Which characteristic distinguishes a stateful firewall like Azure Firewall from a simple packet filter?",
    "o": [
      "It tracks the state of active connections before allowing traffic",
      "It inspects only the first packet and then ignores the rest of them",
      "It cannot scale automatically even as network traffic keeps growing",
      "It encrypts every single packet that happens to pass through it"
    ],
    "a": 0,
    "e": "A stateful firewall keeps context about established connections, so return traffic for an allowed session is permitted. Azure Firewall also scales automatically with demand."
  },
  {
    "t": "azure-firewall",
    "x": "An enterprise needs a single place to create and enforce firewall rules across multiple regions and instances. Which tool helps administer this at scale?",
    "o": [
      "Azure Firewall Manager",
      "Azure Monitor",
      "Azure Blueprints",
      "Azure Advisor"
    ],
    "a": 0,
    "e": "Azure Firewall Manager provides central policy and route management for many firewall deployments. Azure Monitor collects telemetry but does not author firewall rules."
  },
  {
    "t": "azure-web-application-firewall",
    "x": "A public website keeps getting probed with SQL injection and cross-site scripting attempts. Which Azure service is built to block these common web exploits?",
    "o": [
      "Azure Web Application Firewall",
      "Azure DDoS Protection",
      "Azure Bastion",
      "Azure Key Vault"
    ],
    "a": 0,
    "e": "A Web Application Firewall inspects HTTP requests and blocks common attacks such as SQL injection and cross-site scripting. DDoS Protection handles volumetric floods, not application-layer exploits."
  },
  {
    "t": "azure-web-application-firewall",
    "x": "On which Azure services can a Web Application Firewall be deployed to protect web workloads?",
    "o": [
      "Application Gateway and Azure Front Door",
      "Key Vault and managed identities",
      "Bastion and VPN Gateway",
      "Policy and Blueprints"
    ],
    "a": 0,
    "e": "WAF is available on Application Gateway, Azure Front Door, and CDN to guard web apps. Key Vault and Bastion serve entirely different security functions."
  },
  {
    "t": "azure-web-application-firewall",
    "x": "A Web Application Firewall is often configured with a managed rule set that addresses the most frequent web vulnerabilities. Which rule set is commonly applied?",
    "o": [
      "The OWASP core rule set",
      "The NIST password baseline",
      "The CIS hardened images",
      "The PCI cardholder schema"
    ],
    "a": 0,
    "e": "WAF policies commonly apply the OWASP Core Rule Set to detect and block the top web application threats. The other options are unrelated standards or images."
  },
  {
    "t": "azure-web-application-firewall",
    "x": "At which layer of network traffic does a Web Application Firewall inspect requests to protect an application?",
    "o": [
      "The application layer where HTTP requests are evaluated",
      "The transport layer where only ports are examined",
      "The data-link layer where MAC frames are read",
      "The physical layer where signals are measured"
    ],
    "a": 0,
    "e": "A WAF operates at the application layer, examining the content of HTTP and HTTPS requests. Port-level filtering alone cannot detect payload-based web exploits."
  },
  {
    "t": "network-segmentation-vnets",
    "x": "A company wants to keep its database tier isolated from its web tier so that a breach in one does not easily reach the other. Which approach supports this design?",
    "o": [
      "Segmenting resources into separate virtual networks and subnets",
      "Placing every resource on one flat public subnet",
      "Assigning all servers the same public IP address",
      "Disabling all network security rules for simplicity"
    ],
    "a": 0,
    "e": "Segmenting workloads into distinct virtual networks and subnets limits lateral movement between tiers. A single flat public network would remove those boundaries entirely."
  },
  {
    "t": "network-segmentation-vnets",
    "x": "What is the primary security benefit of dividing an Azure environment into isolated network segments?",
    "o": [
      "It limits how far an attacker can move laterally after a compromise",
      "It automatically encrypts all data stored across the environment",
      "It removes the ongoing need for any identity authentication at all",
      "It guarantees unlimited outbound bandwidth for every workload here"
    ],
    "a": 0,
    "e": "Segmentation contains a breach by limiting how far an attacker can spread across the environment. It does not replace identity controls or provide encryption on its own."
  },
  {
    "t": "network-segmentation-vnets",
    "x": "Two virtual networks in Azure need to communicate privately over the Microsoft backbone without traversing the public internet. Which feature enables this?",
    "o": [
      "Virtual network peering",
      "A public load balancer",
      "An internet-facing DNS zone",
      "A shared access signature"
    ],
    "a": 0,
    "e": "VNet peering connects two virtual networks so traffic stays on the Microsoft backbone. A public load balancer distributes internet traffic rather than privately linking networks."
  },
  {
    "t": "network-segmentation-vnets",
    "x": "Within a single virtual network, how are resources typically grouped so different security controls can apply to each group?",
    "o": [
      "By placing them into separate subnets",
      "By giving them identical private addresses",
      "By removing them from the virtual network",
      "By assigning them one shared network interface"
    ],
    "a": 0,
    "e": "Subnets partition a virtual network so distinct controls can be applied to each group of resources. Identical addressing or a shared interface would defeat the purpose of segmentation."
  },
  {
    "t": "network-security-groups",
    "x": "An administrator wants to permit traffic on port 443 but deny it on port 3389 for a subnet. Which Azure feature enforces these allow and deny rules?",
    "o": [
      "A network security group",
      "Azure Bastion",
      "Azure Key Vault",
      "Azure DDoS Protection"
    ],
    "a": 0,
    "e": "A network security group contains rules that allow or deny traffic based on port, protocol, and address. Bastion brokers admin sessions and does not define subnet filtering rules."
  },
  {
    "t": "network-security-groups",
    "x": "Which set of properties does a network security group rule use to decide whether to allow or deny a packet?",
    "o": [
      "Source, destination, port, protocol, and direction",
      "Username, password, and multifactor status",
      "Certificate thumbprint and expiry date",
      "Secret name and vault version"
    ],
    "a": 0,
    "e": "NSG rules match on a five-tuple of source, destination, port, protocol, and direction. Identity and certificate attributes are handled by other services, not NSG filtering."
  },
  {
    "t": "network-security-groups",
    "x": "When multiple network security group rules could apply to the same traffic, how does Azure decide which one wins?",
    "o": [
      "The rule with the lowest priority number is applied first",
      "The rule created most recently always overrides others",
      "Rules are evaluated in random order each time",
      "Deny rules are always ignored in favor of allow rules"
    ],
    "a": 0,
    "e": "NSG rules are processed in priority order, and the lowest priority number is evaluated first. Once a match is found, that rule determines the outcome."
  },
  {
    "t": "network-security-groups",
    "x": "A network security group can be associated with which of the following to control traffic?",
    "o": [
      "A subnet or a network interface",
      "A Key Vault secret or key",
      "A resource group tag only",
      "A user's sign-in session"
    ],
    "a": 0,
    "e": "An NSG can be attached to a subnet or to a VM network interface to filter traffic. It does not attach to secrets or to identity sign-in sessions."
  },
  {
    "t": "network-security-groups",
    "x": "To simplify rules, an administrator wants to group several virtual machines by workload and reference that group by name instead of by IP. Which feature supports this?",
    "o": [
      "Application security groups",
      "Shared access signatures",
      "Managed identities",
      "Conditional Access policies"
    ],
    "a": 0,
    "e": "Application security groups let you group VMs logically and write NSG rules against the group name. Managed identities and SAS tokens address authentication, not traffic grouping."
  },
  {
    "t": "azure-bastion",
    "x": "An administrator wants to reach a virtual machine using RDP or SSH without giving it a public IP address or opening those ports to the internet. Which service provides this?",
    "o": [
      "Azure Bastion",
      "Azure Firewall",
      "Azure Key Vault",
      "Azure Policy"
    ],
    "a": 0,
    "e": "Azure Bastion provides secure RDP and SSH connectivity to VMs over TLS with no public IP on the VM. A firewall filters traffic but does not broker these sessions."
  },
  {
    "t": "azure-bastion",
    "x": "How does a user typically start a session to a virtual machine through Azure Bastion?",
    "o": [
      "Through a secure connection in the web browser over TLS",
      "By installing a heavy VPN client on the workstation",
      "By assigning the VM a public IP and opening port 3389",
      "By copying a private key into a public storage account"
    ],
    "a": 0,
    "e": "Bastion delivers RDP and SSH sessions inside the browser over TLS, keeping the VM off the public internet. Opening 3389 with a public IP is exactly what Bastion is meant to avoid."
  },
  {
    "t": "azure-bastion",
    "x": "What is the main security advantage of adopting Azure Bastion for administrative access to virtual machines?",
    "o": [
      "Virtual machines no longer need public IP addresses on the internet",
      "Virtual machines are automatically encrypted from end to end on disk",
      "All stored application secrets are rotated on every single login",
      "Outbound internet traffic from the machine is completely blocked"
    ],
    "a": 0,
    "e": "By brokering sessions through the platform, Bastion removes the need to expose VMs with public IPs or open management ports. It does not perform disk encryption or secret rotation."
  },
  {
    "t": "azure-bastion",
    "x": "Deploying Azure Bastion reduces exposure to which type of threat against management ports?",
    "o": [
      "Port scanning and brute-force attempts against RDP and SSH",
      "Physical theft of on-premises server hardware from a rack",
      "Cross-site scripting inside a public-facing web application",
      "Data leakage through printed and photocopied documents"
    ],
    "a": 0,
    "e": "Because RDP and SSH ports are never exposed publicly, Bastion cuts off internet-based scanning and brute-force attacks on them. Web-layer and physical threats are outside its scope."
  },
  {
    "t": "azure-key-vault",
    "x": "An application team needs a centralized, secure place to store API keys, connection strings, and passwords instead of hard-coding them. Which Azure service should they use?",
    "o": [
      "Azure Key Vault",
      "Azure Bastion",
      "Azure Firewall",
      "Azure Monitor"
    ],
    "a": 0,
    "e": "Azure Key Vault centrally stores and controls access to secrets such as passwords, keys, and connection strings. Bastion and Firewall address connectivity, not secret storage."
  },
  {
    "t": "azure-key-vault",
    "x": "Besides secrets, which additional items can Azure Key Vault manage for an organization?",
    "o": [
      "Cryptographic keys and TLS certificates",
      "Virtual machine disk images",
      "Network security group rules",
      "Subscription billing invoices"
    ],
    "a": 0,
    "e": "Key Vault manages secrets, cryptographic keys, and certificates in one governed service. VM images and NSG rules are managed by other Azure features."
  },
  {
    "t": "azure-key-vault",
    "x": "For heightened protection, certain Key Vault tiers back cryptographic keys with dedicated tamper-resistant hardware. What is this hardware called?",
    "o": [
      "A hardware security module",
      "A content delivery network",
      "A network interface card",
      "A solid-state cache"
    ],
    "a": 0,
    "e": "A hardware security module provides validated tamper-resistant protection for keys in the premium Key Vault tier. The other options are unrelated pieces of infrastructure."
  },
  {
    "t": "azure-key-vault",
    "x": "What is the recommended way for an Azure virtual machine to retrieve a secret from Key Vault without storing any credential itself?",
    "o": [
      "Use a managed identity granted access to the vault",
      "Embed the vault password inside the application code",
      "Publish the secret to a public storage container",
      "Email the secret to each developer on the team"
    ],
    "a": 0,
    "e": "A managed identity lets the VM authenticate to Key Vault without any embedded credential. Hard-coding or publishing secrets would undermine the reason for using a vault."
  },
  {
    "t": "azure-key-vault",
    "x": "How does storing secrets in Azure Key Vault improve an organization's security posture compared with placing them in source code?",
    "o": [
      "Access can be centrally governed and audited through policies",
      "Secrets become impossible to ever read again",
      "The application no longer needs any authentication",
      "Every secret is automatically shared with all users"
    ],
    "a": 0,
    "e": "Key Vault centralizes secrets so access is controlled by policy or RBAC and every use can be logged. Secrets in source code are exposed to anyone who can read the repository."
  },
  {
    "t": "microsoft-defender-for-cloud",
    "x": "An organization wants one tool that assesses the security configuration of its cloud resources and also protects running workloads from threats. Which service provides both?",
    "o": [
      "Microsoft Defender for Cloud",
      "Azure Bastion",
      "Azure Key Vault",
      "Azure DDoS Protection"
    ],
    "a": 0,
    "e": "Microsoft Defender for Cloud combines posture management with workload threat protection across cloud resources. Bastion and Key Vault each address only a narrow function."
  },
  {
    "t": "microsoft-defender-for-cloud",
    "x": "Microsoft Defender for Cloud expresses an organization's overall security posture as a single measurable percentage. What is this measure called?",
    "o": [
      "Secure score",
      "Sign-in risk",
      "Compliance token",
      "Threat weight"
    ],
    "a": 0,
    "e": "Secure score summarizes posture as a percentage that rises as recommendations are remediated. It is not a sign-in risk level or a compliance token."
  },
  {
    "t": "microsoft-defender-for-cloud",
    "x": "How can Microsoft Defender for Cloud help an organization demonstrate adherence to standards such as ISO 27001 or PCI DSS?",
    "o": [
      "Through its regulatory compliance dashboard",
      "By deleting resources that fail a check",
      "By blocking all inbound network traffic",
      "By issuing certificates from a public authority"
    ],
    "a": 0,
    "e": "The regulatory compliance dashboard maps controls to standards and shows where an environment is compliant or not. Defender for Cloud does not delete resources or issue public certificates."
  },
  {
    "t": "microsoft-defender-for-cloud",
    "x": "Which environments can Microsoft Defender for Cloud assess and protect beyond native Azure resources?",
    "o": [
      "Workloads running in other clouds and on-premises",
      "Only resources inside a single Azure subscription",
      "Only desktop applications on end-user laptops",
      "Only email messages inside a mailbox"
    ],
    "a": 0,
    "e": "Defender for Cloud extends posture and workload protection to AWS, Google Cloud, and on-premises servers. It is not limited to a single Azure subscription."
  },
  {
    "t": "microsoft-defender-for-cloud",
    "x": "When Defender for Cloud finds a weakness such as a storage account allowing public access, how does it guide the fix?",
    "o": [
      "It presents a prioritized recommendation with steps to remediate",
      "It silently ignores the finding until an audit occurs",
      "It automatically cancels the subscription",
      "It emails the finding to the public internet"
    ],
    "a": 0,
    "e": "Defender for Cloud surfaces actionable recommendations that describe the issue and how to remediate it, improving secure score when addressed. It never cancels subscriptions or exposes findings publicly."
  },
  {
    "t": "cloud-security-posture-management",
    "x": "An organization wants to continuously discover misconfigurations and weak settings across its cloud resources and track improvement over time. Which capability addresses this?",
    "o": [
      "Cloud security posture management",
      "Just-in-time VM access",
      "Denial-of-service mitigation",
      "Browser-based VM connectivity"
    ],
    "a": 0,
    "e": "Cloud security posture management continuously assesses configurations, surfaces recommendations, and tracks posture through secure score. The other options address narrow, unrelated functions."
  },
  {
    "t": "cloud-security-posture-management",
    "x": "In Microsoft Defender for Cloud, which metric most directly reflects the outcome of posture management activities?",
    "o": [
      "The secure score percentage",
      "The number of virtual networks",
      "The count of storage accounts",
      "The size of the largest VM disk"
    ],
    "a": 0,
    "e": "Secure score rises as posture recommendations are remediated, making it the clearest indicator of posture management progress. Resource counts do not measure security posture."
  },
  {
    "t": "cloud-security-posture-management",
    "x": "Which posture management features are available in Microsoft Defender for Cloud without enabling any paid plan?",
    "o": [
      "Continuous assessment, recommendations, and secure score",
      "Advanced threat detection for every workload type",
      "Automatic incident response for all alerts",
      "Dedicated hardware security modules for keys"
    ],
    "a": 0,
    "e": "Foundational CSPM, including assessment, recommendations, and secure score, is available at no cost. Advanced workload threat detection requires enabling the paid Defender plans."
  },
  {
    "t": "cloud-security-posture-management",
    "x": "How does acting on posture management recommendations reduce organizational risk?",
    "o": [
      "It hardens configurations and shrinks the attack surface",
      "It increases the number of open management ports",
      "It removes the need to monitor workloads",
      "It disables logging to save on storage costs"
    ],
    "a": 0,
    "e": "Remediating posture recommendations tightens configurations and reduces the overall attack surface. It complements, rather than replaces, ongoing workload monitoring."
  },
  {
    "t": "security-policies-recommendations",
    "x": "Recommendations in Microsoft Defender for Cloud are generated by comparing resources against a defined set of security controls. What is this default set called?",
    "o": [
      "The Microsoft cloud security benchmark",
      "The Azure billing agreement",
      "The standard service level agreement",
      "The shared responsibility contract"
    ],
    "a": 0,
    "e": "The Microsoft cloud security benchmark is the default standard whose controls drive Defender for Cloud recommendations. A billing agreement or SLA governs cost and uptime, not security controls."
  },
  {
    "t": "security-policies-recommendations",
    "x": "Which Azure service is used to author and enforce rules that keep resources compliant, such as requiring encryption or blocking certain regions?",
    "o": [
      "Azure Policy",
      "Azure Bastion",
      "Azure Key Vault",
      "Azure Front Door"
    ],
    "a": 0,
    "e": "Azure Policy defines and enforces organizational rules and can audit or deny non-compliant resource configurations. Bastion and Key Vault do not evaluate resource compliance."
  },
  {
    "t": "security-policies-recommendations",
    "x": "An administrator wants Defender for Cloud to also measure resources against an external framework in addition to the default benchmark. What can they do?",
    "o": [
      "Add a regulatory compliance standard to the environment",
      "Delete the default security benchmark from Azure permanently",
      "Turn off secure score entirely across the subscription",
      "Remove all of the resources from the affected subscription"
    ],
    "a": 0,
    "e": "Additional standards such as ISO 27001 or PCI DSS can be added so resources are evaluated against them too. Removing the default benchmark or disabling secure score would reduce visibility, not add it."
  },
  {
    "t": "security-policies-recommendations",
    "x": "After Defender for Cloud lists a security recommendation, what is the intended next step for the organization?",
    "o": [
      "Remediate the finding to improve compliance and secure score",
      "Ignore it because recommendations are optional labels",
      "Immediately delete the affected resource",
      "Forward it to every external partner"
    ],
    "a": 0,
    "e": "Recommendations are meant to be remediated, which raises secure score and improves compliance against the applied standards. Deleting resources is rarely the intended remediation."
  },
  {
    "t": "cloud-workload-protection",
    "x": "An organization wants active threat detection and alerts for its servers, databases, and storage accounts running in the cloud. Which capability of Defender for Cloud provides this?",
    "o": [
      "Cloud workload protection",
      "Secure score reporting",
      "Network segmentation",
      "Certificate management"
    ],
    "a": 0,
    "e": "Cloud workload protection delivers threat detection and security alerts for specific resource types through the Defender plans. Secure score measures posture but does not detect active threats."
  },
  {
    "t": "cloud-workload-protection",
    "x": "How are the workload protection features in Microsoft Defender for Cloud typically turned on?",
    "o": [
      "By enabling the relevant paid Defender plan for each resource type",
      "By deleting the free posture management features first",
      "By disabling all network security groups",
      "By removing managed identities from the tenant"
    ],
    "a": 0,
    "e": "Workload protection is activated by enabling the appropriate paid Defender plan, such as Defender for Servers or Defender for Storage. Posture management remains available alongside it for free."
  },
  {
    "t": "cloud-workload-protection",
    "x": "When Defender for Servers detects suspicious activity on a virtual machine, what does it produce to notify the security team?",
    "o": [
      "A security alert describing the detected threat",
      "A new public IP address for the machine",
      "An invoice for additional compute hours",
      "A fresh copy of the virtual network"
    ],
    "a": 0,
    "e": "Defender for Cloud generates security alerts that describe detected threats and suggest response steps. It does not respond by provisioning IPs or duplicating networks."
  },
  {
    "t": "cloud-workload-protection",
    "x": "Which pairing correctly describes how Defender for Cloud combines its two broad areas of protection?",
    "o": [
      "Posture management strengthens configuration while workload protection detects threats",
      "Both areas only manage user passwords and nothing else",
      "Both areas focus solely on billing optimization",
      "Posture management encrypts disks while workload protection prints reports"
    ],
    "a": 0,
    "e": "Posture management hardens configurations and raises secure score, while workload protection detects and alerts on active threats. Together they cover prevention and detection."
  },
  {
    "t": "siem-soar-concepts",
    "x": "Which capability best describes the core purpose of a SIEM solution?",
    "o": [
      "Aggregating and correlating security logs from many sources to surface threats",
      "Automating incident response through predefined playbooks and workflows",
      "Encrypting sensitive data at rest across storage and databases",
      "Provisioning user identities and enforcing multifactor authentication"
    ],
    "a": 0,
    "e": "A SIEM aggregates and correlates security log data from many sources so analysts can detect and investigate potential threats across the environment."
  },
  {
    "t": "siem-soar-concepts",
    "x": "What is the main goal of a SOAR platform?",
    "o": [
      "Orchestrating and automating incident response with reusable playbooks",
      "Aggregating raw log data from endpoints and network devices",
      "Scanning virtual machines for missing operating system patches",
      "Classifying and labeling sensitive documents across the tenant"
    ],
    "a": 0,
    "e": "SOAR focuses on orchestrating and automating incident response, often using reusable playbooks to react to alerts quickly and consistently."
  },
  {
    "t": "siem-soar-concepts",
    "x": "How does SOAR extend the value that a SIEM alone provides?",
    "o": [
      "It adds automated orchestration and response to the alerts a SIEM raises",
      "It replaces log collection with manual review by security analysts",
      "It stores compliance evidence for long-term regulatory audits",
      "It performs discovery of shadow SaaS applications used by staff"
    ],
    "a": 0,
    "e": "SOAR builds on a SIEM by adding automated orchestration and response actions to the alerts the SIEM produces, reducing manual effort."
  },
  {
    "t": "siem-soar-concepts",
    "x": "How is Microsoft Sentinel best categorized among security tooling?",
    "o": [
      "A cloud-native SIEM and SOAR platform for enterprise-wide threat management",
      "An on-premises antivirus engine that scans files on managed devices",
      "A hardware appliance that inspects traffic at the network perimeter",
      "A cloud access security broker focused on SaaS application controls"
    ],
    "a": 0,
    "e": "Microsoft Sentinel is a cloud-native platform that combines SIEM and SOAR capabilities to collect, detect, investigate, and respond at enterprise scale."
  },
  {
    "t": "siem-soar-concepts",
    "x": "What is the role of data connectors in a SIEM such as Microsoft Sentinel?",
    "o": [
      "They ingest logs and signals from cloud and third-party sources",
      "They isolate a compromised device from the rest of the network",
      "They remediate missing patches on scanned servers automatically",
      "They quarantine phishing messages discovered in user mailboxes"
    ],
    "a": 0,
    "e": "Data connectors bring logs and signals from cloud services, on-premises systems, and third-party products into the SIEM for analysis."
  },
  {
    "t": "sentinel-threat-detection",
    "x": "In Microsoft Sentinel, what do analytics rules primarily do?",
    "o": [
      "Detect suspicious activity in ingested data and generate alerts and incidents",
      "Store long-term log archives for regulatory retention requirements",
      "Provision new user accounts and assign directory roles",
      "Deploy operating system updates to enrolled endpoints"
    ],
    "a": 0,
    "e": "Analytics rules inspect ingested data for suspicious patterns and generate alerts, which Sentinel can group into incidents for investigation."
  },
  {
    "t": "sentinel-threat-detection",
    "x": "What does a Microsoft Sentinel incident represent to an analyst?",
    "o": [
      "A grouping of related alerts that reflects a potential threat",
      "A saved query used to visualize trends on a dashboard tile",
      "A connector that pulls telemetry from an external data source",
      "A compliance report summarizing data residency for auditors"
    ],
    "a": 0,
    "e": "A Sentinel incident aggregates related alerts into a single case so analysts can triage and respond to a potential threat as a unit."
  },
  {
    "t": "sentinel-threat-detection",
    "x": "What is the main purpose of workbooks in Microsoft Sentinel?",
    "o": [
      "Visualizing and monitoring ingested data through interactive dashboards",
      "Automatically remediating alerts without any analyst review",
      "Blocking malicious email attachments before they are delivered",
      "Discovering unsanctioned cloud apps used across the organization"
    ],
    "a": 0,
    "e": "Workbooks provide interactive dashboards and visualizations that help teams monitor and explore the data collected in the workspace."
  },
  {
    "t": "sentinel-threat-detection",
    "x": "Which Microsoft Sentinel feature lets analysts proactively search data for undetected threats?",
    "o": [
      "Hunting queries that explore data before an alert is ever raised",
      "Automation rules that assign incidents to specific analysts",
      "Data connectors that onboard new log sources into the workspace",
      "Watchlists that store reference lists of known entities"
    ],
    "a": 0,
    "e": "Hunting lets analysts proactively query collected data to look for threats that have not yet triggered any alert."
  },
  {
    "t": "sentinel-threat-detection",
    "x": "How does Microsoft Sentinel carry out automated response to threats?",
    "o": [
      "Through playbooks and automation rules that run predefined response actions",
      "Through antivirus signatures that clean infected files on devices",
      "Through conditional access policies that gate application sign-in",
      "Through data loss prevention rules applied to shared documents"
    ],
    "a": 0,
    "e": "Sentinel uses playbooks and automation rules to run predefined actions automatically, helping standardize and speed up incident response."
  },
  {
    "t": "microsoft-defender-xdr",
    "x": "What does Microsoft Defender XDR provide across an organization?",
    "o": [
      "A coordinated defense across endpoints, identities, email, and apps",
      "A single antivirus scanner limited to Windows client devices",
      "A firewall service that filters inbound traffic at the network edge",
      "A key management vault for encryption keys and certificates"
    ],
    "a": 0,
    "e": "Defender XDR unifies protection by correlating signals across endpoints, identities, email, and cloud apps into a coordinated defense."
  },
  {
    "t": "microsoft-defender-xdr",
    "x": "How does Microsoft Defender XDR help analysts see the full scope of an attack?",
    "o": [
      "It correlates alerts from multiple workloads into a single incident",
      "It stores each alert separately so teams review them one by one",
      "It forwards raw logs to an external archive for later analysis",
      "It scans documents for sensitive data and applies labels"
    ],
    "a": 0,
    "e": "By correlating alerts from multiple workloads into one incident, Defender XDR shows the full scope of an attack instead of isolated events."
  },
  {
    "t": "microsoft-defender-xdr",
    "x": "Microsoft Defender XDR is built to defend during which stages of an attack?",
    "o": [
      "Both before a breach and after a breach across the attack lifecycle",
      "Only after data has already been exfiltrated from the tenant",
      "Only during the initial email delivery of a phishing message",
      "Only while a device is disconnected from corporate networks"
    ],
    "a": 0,
    "e": "Defender XDR is designed for both pre-breach prevention and post-breach detection and response across the attack lifecycle."
  },
  {
    "t": "microsoft-defender-xdr",
    "x": "Which set of services is unified under Microsoft Defender XDR?",
    "o": [
      "Defender for Endpoint, Office 365, Identity, and Cloud Apps",
      "Azure Firewall, Key Vault, Bastion, and DDoS Protection",
      "Entra ID, Intune, Purview, and Priva compliance tools",
      "Sentinel workbooks, hunting, watchlists, and connectors"
    ],
    "a": 0,
    "e": "The core Defender XDR workloads are Defender for Endpoint, Defender for Office 365, Defender for Identity, and Defender for Cloud Apps."
  },
  {
    "t": "microsoft-defender-xdr",
    "x": "What does automated investigation and response in Defender XDR do?",
    "o": [
      "It examines alerts and can automatically remediate detected threats",
      "It manually assigns every alert to a named analyst for triage",
      "It generates quarterly compliance attestations for auditors",
      "It provisions new endpoints and enrolls them into management"
    ],
    "a": 0,
    "e": "Automated investigation and response inspects alerts and can automatically take remediation steps, reducing the load on analysts."
  },
  {
    "t": "defender-for-office-365",
    "x": "Which asset does Defender for Office 365 mainly safeguard?",
    "o": [
      "Email and collaboration tools against phishing and malware",
      "Domain controllers against on-premises identity attacks",
      "Managed laptops and servers against malware infections",
      "Sanctioned and unsanctioned SaaS applications in use"
    ],
    "a": 0,
    "e": "Defender for Office 365 protects email and collaboration content from phishing, malware, and other message-based threats."
  },
  {
    "t": "defender-for-office-365",
    "x": "What does the Safe Attachments capability in Defender for Office 365 do?",
    "o": [
      "Detonates email attachments in a sandbox to catch unknown malware",
      "Isolates an infected endpoint from the corporate network",
      "Scores each device with an exposure and configuration rating",
      "Reveals SaaS apps that employees use without approval"
    ],
    "a": 0,
    "e": "Safe Attachments opens email attachments in an isolated sandbox to detect malware that signature-based scanning might miss."
  },
  {
    "t": "defender-for-office-365",
    "x": "What does the Safe Links feature check when a user clicks a URL?",
    "o": [
      "Whether the destination is malicious at the moment of the click",
      "Whether the device has the latest operating system patches",
      "Whether an on-premises account shows signs of compromise",
      "Whether a SaaS app meets the organization's compliance bar"
    ],
    "a": 0,
    "e": "Safe Links rewrites and verifies URLs at time of click, protecting against malicious links delivered in email and documents."
  },
  {
    "t": "defender-for-office-365",
    "x": "Beyond email, which workloads can Defender for Office 365 help protect?",
    "o": [
      "Microsoft Teams, SharePoint, and OneDrive collaboration content",
      "On-premises domain controllers and Active Directory forests",
      "Windows and Linux servers running in a private datacenter",
      "Third-party SaaS apps discovered through cloud traffic logs"
    ],
    "a": 0,
    "e": "Beyond email, Defender for Office 365 can help protect collaboration content in Microsoft Teams, SharePoint, and OneDrive."
  },
  {
    "t": "defender-for-office-365",
    "x": "A user reports a suspected phishing email. Which service is designed to protect against that threat?",
    "o": [
      "Microsoft Defender for Office 365",
      "Microsoft Defender for Endpoint",
      "Microsoft Defender for Identity",
      "Microsoft Defender for Cloud Apps"
    ],
    "a": 0,
    "e": "Phishing arrives through email, so Defender for Office 365 is the workload designed to detect and block that threat."
  },
  {
    "t": "defender-for-endpoint",
    "x": "What is the central protection focus of Defender for Endpoint?",
    "o": [
      "Protecting devices such as laptops, servers, and mobile endpoints",
      "Protecting mailboxes from phishing and malicious attachments",
      "Monitoring on-premises Active Directory for compromised accounts",
      "Governing access to sanctioned and unsanctioned SaaS apps"
    ],
    "a": 0,
    "e": "Defender for Endpoint focuses on protecting devices such as laptops, desktops, servers, and mobile endpoints from threats."
  },
  {
    "t": "defender-for-endpoint",
    "x": "Which capability does Defender for Endpoint provide to detect and respond on devices?",
    "o": [
      "Endpoint detection and response with automated investigation",
      "Sandbox detonation of email attachments before delivery",
      "Discovery of shadow IT cloud applications on the network",
      "Signal analysis of on-premises domain controller traffic"
    ],
    "a": 0,
    "e": "Defender for Endpoint provides endpoint detection and response along with automated investigation to identify and contain device threats."
  },
  {
    "t": "defender-for-endpoint",
    "x": "During an investigation, which response action is characteristic of Defender for Endpoint?",
    "o": [
      "Isolating a compromised device from the network to contain it",
      "Quarantining a suspicious email message in a user mailbox",
      "Revoking session tokens for a risky SaaS application login",
      "Alerting on suspicious changes to an on-premises AD group"
    ],
    "a": 0,
    "e": "Isolating a compromised device from the network is a characteristic containment action available in Defender for Endpoint."
  },
  {
    "t": "defender-for-endpoint",
    "x": "Which statement about Defender for Endpoint platform support is accurate?",
    "o": [
      "It supports Windows, macOS, Linux, iOS, and Android devices",
      "It supports only Windows client and server operating systems",
      "It protects only mailboxes hosted in Exchange Online",
      "It covers only SaaS applications reached through a browser"
    ],
    "a": 0,
    "e": "Defender for Endpoint supports multiple platforms, including Windows, macOS, Linux, iOS, and Android devices."
  },
  {
    "t": "defender-for-endpoint",
    "x": "A managed laptop shows signs of a malware infection. Which service is built to detect and respond to that?",
    "o": [
      "Microsoft Defender for Endpoint",
      "Microsoft Defender for Office 365",
      "Microsoft Defender for Cloud Apps",
      "Microsoft Defender for Identity"
    ],
    "a": 0,
    "e": "A malware-infected device is squarely within Defender for Endpoint's scope of detection and response."
  },
  {
    "t": "defender-for-cloud-apps",
    "x": "What overall role does Defender for Cloud Apps fill in a security program?",
    "o": [
      "A cloud access security broker governing SaaS app usage and data",
      "An endpoint detection and response agent installed on devices",
      "An email security service that filters phishing and malware",
      "A sensor that monitors on-premises Active Directory activity"
    ],
    "a": 0,
    "e": "Defender for Cloud Apps is a cloud access security broker that provides visibility and governance over SaaS application usage and data."
  },
  {
    "t": "defender-for-cloud-apps",
    "x": "Which capability of Defender for Cloud Apps helps uncover shadow IT?",
    "o": [
      "Discovering unsanctioned SaaS apps from network and log traffic",
      "Detonating email attachments in an isolated sandbox",
      "Isolating a compromised laptop from the corporate network",
      "Detecting pass-the-hash attacks against domain controllers"
    ],
    "a": 0,
    "e": "Defender for Cloud Apps discovers shadow IT by analyzing network and log traffic to reveal unsanctioned cloud apps in use."
  },
  {
    "t": "defender-for-cloud-apps",
    "x": "How can Defender for Cloud Apps control activity inside a SaaS session?",
    "o": [
      "By applying real-time session policies such as blocking downloads",
      "By deploying operating system patches to enrolled servers",
      "By sandboxing links inside inbound email messages",
      "By collecting domain controller logs for identity analysis"
    ],
    "a": 0,
    "e": "Session policies in Defender for Cloud Apps can control activity in real time, such as blocking downloads inside a SaaS session."
  },
  {
    "t": "defender-for-cloud-apps",
    "x": "Security wants visibility into unsanctioned cloud apps employees use. Which service addresses this?",
    "o": [
      "Microsoft Defender for Cloud Apps",
      "Microsoft Defender for Endpoint",
      "Microsoft Defender for Office 365",
      "Microsoft Defender for Identity"
    ],
    "a": 0,
    "e": "Uncovering unsanctioned cloud app usage is a core function of Defender for Cloud Apps, the broker in the Defender family."
  },
  {
    "t": "defender-for-cloud-apps",
    "x": "What does the cloud app catalog in Defender for Cloud Apps provide?",
    "o": [
      "Risk scores for many SaaS apps based on security and compliance factors",
      "Signatures used to remove malware from infected client devices",
      "A sandbox that detonates suspicious inbound email attachments",
      "A log of on-premises Active Directory sign-in anomalies"
    ],
    "a": 0,
    "e": "The cloud app catalog rates thousands of SaaS apps by security and compliance factors to help judge their risk."
  },
  {
    "t": "defender-for-identity",
    "x": "What does Defender for Identity keep watch over?",
    "o": [
      "On-premises Active Directory signals to detect identity-based threats",
      "Mailboxes in Exchange Online for phishing and malware",
      "Managed endpoints for malware and suspicious processes",
      "SaaS applications for unsanctioned usage and data exposure"
    ],
    "a": 0,
    "e": "Defender for Identity uses on-premises Active Directory signals to detect compromised identities and identity-based attacks."
  },
  {
    "t": "defender-for-identity",
    "x": "How does Defender for Identity collect the data it analyzes?",
    "o": [
      "Through sensors installed on domain controllers and AD servers",
      "Through an antivirus agent installed on user laptops",
      "Through connectors that read Exchange Online message logs",
      "Through a proxy that inspects outbound SaaS app traffic"
    ],
    "a": 0,
    "e": "Defender for Identity relies on sensors installed on domain controllers and AD servers to collect the signals it analyzes."
  },
  {
    "t": "defender-for-identity",
    "x": "Which type of activity is Defender for Identity designed to detect?",
    "o": [
      "Lateral movement and credential attacks like pass-the-hash",
      "Malicious attachments delivered through inbound email",
      "Downloads of sensitive files from a SaaS application",
      "Missing security patches on internet-facing servers"
    ],
    "a": 0,
    "e": "Defender for Identity detects lateral movement and credential-theft techniques such as pass-the-hash against Active Directory."
  },
  {
    "t": "defender-for-identity",
    "x": "Analysts suspect an attacker is moving laterally using compromised on-premises AD credentials. Which service targets this?",
    "o": [
      "Microsoft Defender for Identity",
      "Microsoft Defender for Office 365",
      "Microsoft Defender for Endpoint",
      "Microsoft Defender for Cloud Apps"
    ],
    "a": 0,
    "e": "Lateral movement using on-premises AD credentials is exactly what Defender for Identity is built to detect."
  },
  {
    "t": "defender-for-identity",
    "x": "Which environment is the primary scope of Defender for Identity?",
    "o": [
      "On-premises Active Directory Domain Services",
      "Cloud-hosted mailboxes and collaboration tools",
      "Managed mobile and desktop endpoint devices",
      "Third-party software-as-a-service applications"
    ],
    "a": 0,
    "e": "Defender for Identity centers on on-premises Active Directory Domain Services rather than cloud, endpoint, or SaaS scenarios."
  },
  {
    "t": "defender-vulnerability-management",
    "x": "What is the core purpose of Defender Vulnerability Management for an organization?",
    "o": [
      "Finding and prioritizing device weaknesses and misconfigurations to fix them",
      "Filtering phishing and malicious content from user mailboxes",
      "Correlating alerts from many workloads into single incidents",
      "Orchestrating automated response playbooks against raised alerts"
    ],
    "a": 0,
    "e": "Defender Vulnerability Management discovers device weaknesses and misconfigurations and prioritizes them so teams can remediate effectively."
  },
  {
    "t": "defender-vulnerability-management",
    "x": "Which capability does Defender Vulnerability Management give security teams?",
    "o": [
      "A continuous inventory of installed software and known vulnerabilities",
      "Real-time session controls over SaaS application downloads",
      "Sandbox detonation of attachments in inbound email",
      "Sensor-based monitoring of on-premises domain controllers"
    ],
    "a": 0,
    "e": "The service maintains a continuous inventory of installed software and associated known vulnerabilities across assets."
  },
  {
    "t": "defender-vulnerability-management",
    "x": "How does Defender Vulnerability Management help focus remediation work?",
    "o": [
      "By prioritizing vulnerabilities according to risk and active exploitation",
      "By quarantining suspicious email until an analyst reviews it",
      "By isolating an infected endpoint from the rest of the network",
      "By discovering unsanctioned cloud apps across the organization"
    ],
    "a": 0,
    "e": "By ranking vulnerabilities according to risk and active exploitation, the service helps teams remediate the most important issues first."
  },
  {
    "t": "defender-vulnerability-management",
    "x": "An organization wants to know which devices have unpatched software and weak configurations. Which service provides this?",
    "o": [
      "Microsoft Defender Vulnerability Management",
      "Microsoft Defender for Office 365",
      "Microsoft Defender for Identity",
      "Microsoft Defender for Cloud Apps"
    ],
    "a": 0,
    "e": "Identifying unpatched software and weak configurations across devices is the purpose of Defender Vulnerability Management."
  },
  {
    "t": "defender-threat-intelligence",
    "x": "What kind of context does Defender Threat Intelligence deliver?",
    "o": [
      "Context on threat actors, their tools, and malicious infrastructure",
      "A prioritized list of unpatched software on managed devices",
      "Real-time governance over sanctioned SaaS application usage",
      "Sandbox analysis of attachments contained in inbound email"
    ],
    "a": 0,
    "e": "Defender Threat Intelligence gives security teams context about threat actors, their tools, and the infrastructure they use."
  },
  {
    "t": "defender-threat-intelligence",
    "x": "Which type of analysis does Defender Threat Intelligence support?",
    "o": [
      "Analyzing internet infrastructure to track adversary activity",
      "Isolating a compromised laptop during an active investigation",
      "Detecting pass-the-hash attacks on domain controllers",
      "Assigning risk scores to devices for remediation planning"
    ],
    "a": 0,
    "e": "Defender Threat Intelligence analyzes internet infrastructure to help track and understand adversary activity and campaigns."
  },
  {
    "t": "defender-threat-intelligence",
    "x": "A threat hunter wants background on a known adversary group and its infrastructure. Which service helps?",
    "o": [
      "Microsoft Defender Threat Intelligence",
      "Microsoft Defender Vulnerability Management",
      "Microsoft Defender for Endpoint",
      "Microsoft Defender for Office 365"
    ],
    "a": 0,
    "e": "For researching a known adversary group and its infrastructure, Defender Threat Intelligence is the appropriate resource."
  },
  {
    "t": "defender-threat-intelligence",
    "x": "How can Defender Threat Intelligence help during an investigation?",
    "o": [
      "By supplying indicators of compromise linked to known threats",
      "By deploying patches to close vulnerabilities on servers",
      "By quarantining phishing messages found in mailboxes",
      "By blocking downloads within an active SaaS session"
    ],
    "a": 0,
    "e": "Defender Threat Intelligence supplies indicators of compromise tied to known threats, adding context during investigations."
  },
  {
    "t": "microsoft-defender-portal",
    "x": "What best describes the Microsoft Defender portal for analysts?",
    "o": [
      "A unified console for managing Defender XDR incidents and alerts",
      "An email gateway that filters inbound phishing messages",
      "A sensor package installed on on-premises domain controllers",
      "An agent that provides antivirus scanning on endpoints"
    ],
    "a": 0,
    "e": "The Microsoft Defender portal is the unified console where teams manage Defender XDR incidents, alerts, and investigations."
  },
  {
    "t": "microsoft-defender-portal",
    "x": "What does the incidents queue in the Microsoft Defender portal show?",
    "o": [
      "Correlated incidents and alerts from across Defender workloads",
      "A catalog of SaaS apps ranked by their risk scores",
      "A list of installed software and their known vulnerabilities",
      "Detonation verdicts for individual email attachments only"
    ],
    "a": 0,
    "e": "The incidents queue in the portal shows correlated incidents and alerts gathered from across the Defender workloads."
  },
  {
    "t": "microsoft-defender-portal",
    "x": "Where do analysts primarily work with Microsoft Defender XDR?",
    "o": [
      "In the Microsoft Defender portal at security.microsoft.com",
      "In the Microsoft Purview compliance portal",
      "In the Microsoft Entra admin center",
      "In the Microsoft Intune device management console"
    ],
    "a": 0,
    "e": "Analysts primarily work with Defender XDR in the Microsoft Defender portal, reached at security.microsoft.com."
  },
  {
    "t": "microsoft-defender-portal",
    "x": "How has the Microsoft Defender portal grown to cover more tools?",
    "o": [
      "It brings Microsoft Sentinel and Defender XDR into one experience",
      "It replaced all endpoint antivirus agents with a cloud scanner",
      "It became the only place to manage user identities and roles",
      "It took over encryption key storage for the whole tenant"
    ],
    "a": 0,
    "e": "The Microsoft Defender portal has expanded to bring Microsoft Sentinel and Defender XDR together in a single experience."
  },
  {
    "t": "service-trust-portal",
    "x": "An auditor asks your team for Microsoft's independent SOC 2 audit report for a cloud service. Where can you download it?",
    "o": [
      "The Service Trust Portal",
      "The Microsoft 365 admin center",
      "The Azure pricing calculator",
      "The Microsoft Entra admin center"
    ],
    "a": 0,
    "e": "The Service Trust Portal hosts Microsoft's independent audit reports such as SOC and ISO, so compliance teams can download them. The admin centers manage tenant settings, not third-party audit documents."
  },
  {
    "t": "service-trust-portal",
    "x": "A compliance analyst wants to save documents in the Service Trust Portal and be notified whenever those documents are updated. Which feature supports this?",
    "o": [
      "My Library",
      "Compliance Manager assessments",
      "Content explorer",
      "Activity explorer"
    ],
    "a": 0,
    "e": "My Library lets users pin Service Trust Portal documents and get notified when they change. Assessments and the explorers belong to Microsoft Purview, not the portal's saved-document experience."
  },
  {
    "t": "service-trust-portal",
    "x": "Which statement best describes what the Service Trust Portal offers to customers?",
    "o": [
      "It publishes Microsoft's security and compliance guides",
      "It builds data loss prevention policies for your tenant",
      "It reviews risky user sign-ins across the directory",
      "It applies retention labels to user mailboxes"
    ],
    "a": 0,
    "e": "The Service Trust Portal centralizes Microsoft's audit reports, whitepapers, and compliance guidance. DLP, sign-in risk, and retention are configured elsewhere in Purview or Entra."
  },
  {
    "t": "service-trust-portal",
    "x": "An organization in a regulated industry needs Microsoft resources tailored to regional laws such as GDPR. Which portal area provides these?",
    "o": [
      "Industry and regional resources in the Service Trust Portal",
      "Improvement actions in Compliance Manager",
      "Trainable classifiers in data classification",
      "Sensitivity labels in information protection"
    ],
    "a": 0,
    "e": "The Service Trust Portal groups documents by industry and region, including GDPR references. The other options are Purview capabilities that do not host regulatory reference documents."
  },
  {
    "t": "microsoft-privacy-principles",
    "x": "How many foundational privacy principles guide Microsoft's handling of customer data?",
    "o": [
      "Six",
      "Three",
      "Four",
      "Ten"
    ],
    "a": 0,
    "e": "Microsoft's approach to privacy rests on six principles, including control, transparency, and security. The other counts do not match the published framework."
  },
  {
    "t": "microsoft-privacy-principles",
    "x": "Microsoft states it does not use customer email, chat, or files to target advertising. Which privacy principle reflects this commitment?",
    "o": [
      "No content-based targeting",
      "Strong legal protections",
      "Transparency",
      "Benefits to you"
    ],
    "a": 0,
    "e": "The no content-based targeting principle means Microsoft does not mine customer content to serve ads. Transparency concerns being open about data practices, a different commitment."
  },
  {
    "t": "microsoft-privacy-principles",
    "x": "A customer wants assurance that they decide who can access their data and how it is used. Which privacy principle addresses this?",
    "o": [
      "Control",
      "Security",
      "Transparency",
      "Strong legal protections"
    ],
    "a": 0,
    "e": "The control principle puts customers in charge of their data and who can access it. Security concerns protecting data with encryption and safeguards, which is separate."
  },
  {
    "t": "microsoft-privacy-principles",
    "x": "Which privacy principle commits Microsoft to being open about where data is stored and how it is handled?",
    "o": [
      "Transparency",
      "Control",
      "No content-based targeting",
      "Benefits to you"
    ],
    "a": 0,
    "e": "Transparency is the commitment to clearly communicate how data is collected, stored, and used. Control is about who can access data, not the openness of communication."
  },
  {
    "t": "microsoft-purview-portal",
    "x": "Microsoft Purview brings governance, protection, and compliance capabilities together into one console. What is that console called?",
    "o": [
      "The Microsoft Purview portal",
      "The Microsoft Defender portal",
      "The Microsoft Entra admin center",
      "The Azure portal"
    ],
    "a": 0,
    "e": "The Microsoft Purview portal is the unified console for data governance, protection, and compliance. The Defender portal focuses on threat protection, a different domain."
  },
  {
    "t": "microsoft-purview-portal",
    "x": "An administrator needs to configure sensitivity labels and retention policies from a single compliance console. Which portal should they open?",
    "o": [
      "The Microsoft Purview portal",
      "The Microsoft 365 apps admin center",
      "The Power Platform admin center",
      "The Exchange admin center"
    ],
    "a": 0,
    "e": "Sensitivity labels and retention policies are managed in the Microsoft Purview portal. The Exchange admin center handles mail flow, not the full compliance toolset."
  },
  {
    "t": "microsoft-purview-portal",
    "x": "Which of the following is a compliance solution you would find inside the Microsoft Purview portal?",
    "o": [
      "Data Lifecycle Management",
      "Conditional Access",
      "Network security groups",
      "Privileged Identity Management"
    ],
    "a": 0,
    "e": "Data Lifecycle Management is a Purview solution for retaining and disposing of content. Conditional Access and Privileged Identity Management are Microsoft Entra features."
  },
  {
    "t": "microsoft-purview-portal",
    "x": "The former Microsoft Purview compliance portal experience is now delivered through which unified interface?",
    "o": [
      "The Microsoft Purview portal",
      "The Microsoft Intune admin center",
      "The Microsoft Sentinel workspace",
      "The Microsoft Teams admin center"
    ],
    "a": 0,
    "e": "Compliance capabilities are now surfaced in the unified Microsoft Purview portal. Intune manages devices and is not the home for compliance solutions."
  },
  {
    "t": "compliance-manager",
    "x": "Which Microsoft Purview tool helps you manage regulatory requirements through assessments and recommended actions?",
    "o": [
      "Compliance Manager",
      "Content explorer",
      "Activity explorer",
      "Records management"
    ],
    "a": 0,
    "e": "Compliance Manager provides assessments, controls, and improvement actions to manage regulatory obligations. Content explorer only shows where classified data resides."
  },
  {
    "t": "compliance-manager",
    "x": "In Compliance Manager, what are the recommended tasks that help reduce risk and raise your score called?",
    "o": [
      "Improvement actions",
      "Sensitive information types",
      "Trainable classifiers",
      "Retention labels"
    ],
    "a": 0,
    "e": "Improvement actions are the recommended tasks in Compliance Manager that reduce risk when completed. Sensitive information types are pattern detectors used for classification."
  },
  {
    "t": "compliance-manager",
    "x": "An organization wants to evaluate its posture against a regulation such as ISO 27001 using a prebuilt template. Which Compliance Manager feature provides this?",
    "o": [
      "Assessments",
      "Sensitivity labels",
      "eDiscovery cases",
      "Communication compliance policies"
    ],
    "a": 0,
    "e": "Assessments use templates mapped to regulations such as ISO 27001 to measure compliance. Sensitivity labels classify content and are not evaluation templates."
  },
  {
    "t": "compliance-manager",
    "x": "Compliance Manager separates controls that Microsoft is responsible for from those the customer owns. What are the customer-owned ones generally called?",
    "o": [
      "Your controls",
      "Microsoft-managed controls",
      "Shared assessments",
      "Default templates"
    ],
    "a": 0,
    "e": "Customer-owned controls are labeled your controls, reflecting the shared responsibility model. Microsoft-managed controls are the ones Microsoft handles on your behalf."
  },
  {
    "t": "compliance-manager",
    "x": "Besides tracking progress, Compliance Manager can assign improvement actions to specific users for follow-up. What capability does this describe?",
    "o": [
      "Workflow and task assignment",
      "Automatic data classification",
      "Sign-in risk scoring",
      "Threat vulnerability scanning"
    ],
    "a": 0,
    "e": "Compliance Manager supports workflow by assigning improvement actions to users so completion can be tracked. Data classification and risk scoring are handled by other services."
  },
  {
    "t": "compliance-score",
    "x": "What does the compliance score in Compliance Manager represent?",
    "o": [
      "Your progress in completing recommended improvement actions",
      "The number of users with multifactor authentication enabled",
      "The volume of encrypted email sent each month",
      "The count of devices enrolled in mobile management"
    ],
    "a": 0,
    "e": "The compliance score reflects progress toward completing improvement actions that reduce risk. It is not a count of MFA users or enrolled devices."
  },
  {
    "t": "compliance-score",
    "x": "When an organization first opens Compliance Manager, its starting score is derived from what?",
    "o": [
      "The Microsoft data protection baseline",
      "The number of licensed administrators",
      "The total size of stored mailboxes",
      "The count of created sensitivity labels"
    ],
    "a": 0,
    "e": "Compliance Manager provides an initial score based on the Microsoft data protection baseline of common recommendations. Mailbox size and label counts do not set the score."
  },
  {
    "t": "compliance-score",
    "x": "A manager asks what a higher compliance score indicates for the organization. What is the best answer?",
    "o": [
      "Lower data protection risk from completed actions",
      "Faster network throughput to cloud services",
      "More storage capacity available in the tenant",
      "Fewer administrators required to run the tenant"
    ],
    "a": 0,
    "e": "A higher compliance score means more improvement actions are complete, which lowers data protection risk. It has nothing to do with throughput or storage."
  },
  {
    "t": "compliance-score",
    "x": "Points that make up the compliance score come from Microsoft-managed actions and which other source?",
    "o": [
      "Actions your organization completes",
      "Audit reports downloaded from the portal",
      "Emails scanned by anti-malware",
      "Documents pinned in My Library"
    ],
    "a": 0,
    "e": "The score combines points from Microsoft-managed actions and the actions your organization completes. Downloading audit reports does not add points."
  },
  {
    "t": "data-classification",
    "x": "Which classification capability uses predefined patterns like credit card or passport number formats to detect sensitive data?",
    "o": [
      "Sensitive information types",
      "Trainable classifiers",
      "Retention policies",
      "Insider risk indicators"
    ],
    "a": 0,
    "e": "Sensitive information types detect data by matching known patterns such as credit card numbers. Trainable classifiers rely on machine learning examples instead of fixed patterns."
  },
  {
    "t": "data-classification",
    "x": "An organization wants to identify documents by subject matter, such as contracts, by teaching the system with sample files. Which capability fits?",
    "o": [
      "Trainable classifiers",
      "Sensitive information types",
      "Exact data match",
      "Sensitivity label policies"
    ],
    "a": 0,
    "e": "Trainable classifiers learn from sample content to recognize categories like contracts. Sensitive information types match fixed patterns and cannot be taught with examples."
  },
  {
    "t": "data-classification",
    "x": "Which statement about trainable classifiers in Microsoft Purview is accurate?",
    "o": [
      "Some are prebuilt while others can be custom trained",
      "They detect data only with fixed regular expressions",
      "They are limited to scanning email message headers",
      "They work without any Microsoft Purview licensing"
    ],
    "a": 0,
    "e": "Trainable classifiers include ready-to-use built-in options and custom ones you train with samples. They use machine learning rather than only regular expressions."
  },
  {
    "t": "data-classification",
    "x": "Why would an organization enable data classification in Microsoft Purview?",
    "o": [
      "To discover and label sensitive data across the environment",
      "To block malicious sign-ins from unknown locations",
      "To manage software update rings for devices",
      "To route incoming email through a spam filter"
    ],
    "a": 0,
    "e": "Data classification discovers and categorizes sensitive information so it can be protected. Sign-in blocking and update management are handled by other services."
  },
  {
    "t": "data-classification",
    "x": "A company needs to detect its own employee ID values precisely by matching against a database of real values. Which method is designed for this?",
    "o": [
      "Exact data match",
      "A generic keyword list",
      "A trainable classifier",
      "A sensitivity label"
    ],
    "a": 0,
    "e": "Exact data match compares content against a customer-supplied table of real values for precise detection. A generic keyword list cannot verify against a specific dataset."
  },
  {
    "t": "content-and-activity-explorer",
    "x": "Which tool gives a current snapshot showing where labeled and sensitive items are stored across your organization?",
    "o": [
      "Content explorer",
      "Activity explorer",
      "Compliance Manager",
      "Service Trust Portal"
    ],
    "a": 0,
    "e": "Content explorer shows a current view of where classified and labeled content lives. Activity explorer instead reports on actions taken over time."
  },
  {
    "t": "content-and-activity-explorer",
    "x": "Which tool shows the history of actions performed on labeled content, such as label changes or downgrades?",
    "o": [
      "Activity explorer",
      "Content explorer",
      "My Library",
      "Assessments"
    ],
    "a": 0,
    "e": "Activity explorer surfaces the history of actions on labeled data, including label changes. Content explorer only shows where the data currently resides, not activities."
  },
  {
    "t": "content-and-activity-explorer",
    "x": "A data officer needs to see exactly which files currently contain classified information and their locations. Which explorer should they open?",
    "o": [
      "Content explorer",
      "Activity explorer",
      "Trainable classifier console",
      "Improvement actions page"
    ],
    "a": 0,
    "e": "Content explorer answers where classified data resides right now. Activity explorer focuses on the timeline of actions rather than current locations."
  },
  {
    "t": "content-and-activity-explorer",
    "x": "An auditor wants a record of when sensitivity labels were applied or removed from documents over the past week. Which explorer meets this need?",
    "o": [
      "Activity explorer",
      "Content explorer",
      "Compliance score dashboard",
      "Records management console"
    ],
    "a": 0,
    "e": "Activity explorer tracks label-related activities such as applications and removals over time. Content explorer shows current placement, not a timeline of changes."
  },
  {
    "t": "sensitivity-labels-policies",
    "x": "What does a sensitivity label in Microsoft Purview apply to a document?",
    "o": [
      "A classification with optional protection like encryption and marking",
      "A retention period that deletes the file after a set time",
      "A quarantine action that blocks the file from being shared",
      "A compliance score that rates the tenant security posture"
    ],
    "a": 0,
    "e": "Sensitivity labels classify content and can enforce protection such as encryption and visual markings. Retention and deletion are handled by retention policies, not labels."
  },
  {
    "t": "sensitivity-labels-policies",
    "x": "A firm wants labeled files to automatically add a Confidential watermark and header. Which capability provides this?",
    "o": [
      "Content marking configured in the sensitivity label",
      "A data loss prevention policy tip shown to the user",
      "An insider risk management alert on the document",
      "A retention label that marks the item as a record"
    ],
    "a": 0,
    "e": "Sensitivity labels can apply content markings such as watermarks, headers, and footers. DLP policy tips only warn users and do not stamp the document itself."
  },
  {
    "t": "sensitivity-labels-policies",
    "x": "Where do administrators make published sensitivity labels available to users in Office apps?",
    "o": [
      "In a label policy that assigns labels to users and groups",
      "In a retention policy that assigns labels to locations",
      "In a DLP policy that assigns labels to match conditions",
      "In an audit policy that assigns labels to mailboxes"
    ],
    "a": 0,
    "e": "Label policies determine which users and groups can see and apply published sensitivity labels. Retention and DLP policies serve entirely different purposes."
  },
  {
    "t": "sensitivity-labels-policies",
    "x": "Which statement best describes automatic labeling with sensitivity labels?",
    "o": [
      "Content is labeled automatically when it matches defined conditions",
      "Content is labeled only after a user manually selects a label",
      "Content is labeled automatically whenever a file is deleted",
      "Content is labeled based on the user's email signature settings"
    ],
    "a": 0,
    "e": "Automatic and recommended labeling applies a label when content matches conditions such as sensitive info types or trainable classifiers, not only through manual selection."
  },
  {
    "t": "sensitivity-labels-policies",
    "x": "A sensitivity label encrypts files and restricts who can open them. Where does that protection travel?",
    "o": [
      "With the file itself, so restrictions persist wherever it goes",
      "Only inside the SharePoint site where the file was stored",
      "Only while the file remains on the corporate network",
      "Only until the label policy is next republished by an admin"
    ],
    "a": 0,
    "e": "Because encryption is embedded in the labeled file, the protection and usage rights follow the document even when it leaves the organization."
  },
  {
    "t": "data-loss-prevention",
    "x": "What is the main purpose of a Microsoft Purview data loss prevention policy?",
    "o": [
      "To detect and help prevent the sharing of sensitive information",
      "To encrypt every mailbox in the organization by default",
      "To archive old files into an immutable records vault",
      "To assign trainable classifiers to individual user accounts"
    ],
    "a": 0,
    "e": "DLP policies identify sensitive content and can block or warn on risky sharing. Encryption and records management are handled by other Purview features."
  },
  {
    "t": "data-loss-prevention",
    "x": "A DLP policy warns a user that a message contains credit card numbers but lets them proceed. What feature is this?",
    "o": [
      "A policy tip that offers a business-justified override",
      "An insider risk management triage alert for review",
      "A retention label awaiting a disposition decision",
      "An eDiscovery legal hold notice sent to custodians"
    ],
    "a": 0,
    "e": "Policy tips notify users of a DLP match and can allow an override with justification. The other items belong to different compliance solutions."
  },
  {
    "t": "data-loss-prevention",
    "x": "Across which locations can Microsoft Purview DLP policies enforce controls?",
    "o": [
      "Exchange, SharePoint, OneDrive, Teams, and endpoint devices",
      "Only on-premises file servers and network print queues",
      "Only the tenant's Azure virtual machines and disks",
      "Only third-party SaaS apps hosted outside Microsoft 365"
    ],
    "a": 0,
    "e": "DLP spans Microsoft 365 services and managed endpoints. It is not limited to on-premises servers or non-Microsoft workloads."
  },
  {
    "t": "data-loss-prevention",
    "x": "Which building block does a DLP policy use to recognize passport or tax ID numbers in content?",
    "o": [
      "Sensitive information types that define matching patterns",
      "Adaptive protection risk levels assigned to users",
      "Records management disposition review stages",
      "Audit log retention windows applied to mailboxes"
    ],
    "a": 0,
    "e": "Sensitive information types define the patterns, such as passport or tax numbers, that DLP evaluates. The other options are unrelated compliance functions."
  },
  {
    "t": "data-loss-prevention",
    "x": "What can a DLP policy do when a highly sensitive document is shared externally?",
    "o": [
      "Block the action and notify administrators of the match",
      "Permanently delete the document from all locations",
      "Reclassify the tenant to a higher compliance score",
      "Grant the external recipient elevated access rights"
    ],
    "a": 0,
    "e": "DLP can block or restrict the action and generate alerts for administrators. It does not delete content or change access rights as a response."
  },
  {
    "t": "records-management",
    "x": "In Microsoft Purview records management, what happens when content is declared a record?",
    "o": [
      "Restrictions are placed on editing and deleting to preserve it",
      "The content is immediately encrypted with a sensitivity label",
      "The content is copied into every user's personal mailbox",
      "The content is shared with external compliance auditors"
    ],
    "a": 0,
    "e": "Declaring an item a record enforces restrictions so it cannot be freely edited or deleted. Encryption and sharing are separate, unrelated concerns."
  },
  {
    "t": "records-management",
    "x": "Which capability lets an organization prove records were managed under a defined lifecycle?",
    "o": [
      "A file plan with retention and disposition tracking",
      "A DLP policy tip history captured for each user",
      "An insider risk severity score per individual employee",
      "A sensitivity label content-marking activity log"
    ],
    "a": 0,
    "e": "Records management provides a file plan and disposition records that document the retention lifecycle. The other logs do not serve records compliance."
  },
  {
    "t": "records-management",
    "x": "What distinguishes a regulatory record from a standard record in Purview?",
    "o": [
      "Its label cannot be changed or removed once applied",
      "Any user may relabel or unmark it at any time",
      "It is deleted automatically after only thirty days",
      "It is excluded from all retention and hold settings"
    ],
    "a": 0,
    "e": "A regulatory record applies the strictest controls, preventing label changes or removal. Standard records allow more flexibility in managing the item."
  },
  {
    "t": "records-management",
    "x": "Why would a business declare documents as records rather than only applying retention?",
    "o": [
      "To enforce immutability and support regulatory obligations",
      "To increase the tenant's overall secure score rating",
      "To automatically translate the documents for global teams",
      "To speed up search indexing across SharePoint sites"
    ],
    "a": 0,
    "e": "Marking items as records enforces the immutability required for regulatory compliance. Retention alone does not lock content in the same way."
  },
  {
    "t": "retention-policies-labels",
    "x": "Which statement best describes what a retention policy does?",
    "o": [
      "It keeps or deletes content for a specified period",
      "It encrypts content using rights management protection",
      "It scans connected endpoints for malware signatures",
      "It assigns sensitivity labels based on the user's role"
    ],
    "a": 0,
    "e": "Retention policies retain content and then delete it after a set period. Encryption and labeling are functions of other Purview solutions."
  },
  {
    "t": "retention-policies-labels",
    "x": "A retention label keeps items for seven years and then deletes them. What is this configuration?",
    "o": [
      "A retention and deletion setting defined on the label",
      "A sensitivity marking defined on the label",
      "A DLP exception rule defined on the label",
      "An insider risk threshold defined on the label"
    ],
    "a": 0,
    "e": "Retention labels define how long to keep content and what to do afterward, such as delete after seven years. The other options are not label settings."
  },
  {
    "t": "retention-policies-labels",
    "x": "How do retention policies differ from retention labels in scope?",
    "o": [
      "Policies apply broadly to locations while labels apply to specific items",
      "Policies encrypt items while labels only classify them by type",
      "Policies delete audit logs while labels retain those logs",
      "Policies work only on endpoints while labels work in the cloud"
    ],
    "a": 0,
    "e": "Retention policies are assigned at the location level, whereas retention labels are applied to individual items or folders for finer, item-level control."
  },
  {
    "t": "retention-policies-labels",
    "x": "What happens to a file during its retention period if a user tries to delete it?",
    "o": [
      "A copy is preserved so the content is not lost",
      "It is hidden permanently from the compliance administrator",
      "It is exported automatically into an eDiscovery case",
      "It is stripped of its assigned sensitivity label"
    ],
    "a": 0,
    "e": "Retention preserves a copy of content for the required period even after a user deletes it. It does not remove labels or auto-export to cases."
  },
  {
    "t": "insider-risk-management",
    "x": "What does insider risk management in Microsoft Purview help organizations detect?",
    "o": [
      "Potentially risky activity by users inside the organization",
      "Malware infections spreading between external web servers",
      "Expired TLS certificates on public-facing websites",
      "Misconfigured firewall rules at the network edge"
    ],
    "a": 0,
    "e": "Insider risk management identifies risky internal behaviors such as data theft or leaks. It is not a network, malware, or certificate monitoring tool."
  },
  {
    "t": "insider-risk-management",
    "x": "Insider risk management builds its policies from what to surface alerts?",
    "o": [
      "Templates that define risk indicators and triggering events",
      "Sensitive information types shared with external users",
      "Immutable records placed within a records file plan",
      "Audit log retention windows configured for mailboxes"
    ],
    "a": 0,
    "e": "Insider risk policies start from templates with configurable indicators and triggers that generate alerts for review. The other items belong to different features."
  },
  {
    "t": "insider-risk-management",
    "x": "To protect privacy, how can users be shown by default in insider risk alerts?",
    "o": [
      "Their identities can be pseudonymized for reviewers",
      "Their full home addresses are displayed to reviewers",
      "Their account passwords are shown for verification",
      "Their manager must approve each alert before it is created"
    ],
    "a": 0,
    "e": "Insider risk management supports pseudonymization to protect user privacy during investigations. It never exposes credentials or personal home addresses."
  },
  {
    "t": "insider-risk-management",
    "x": "A departing employee downloads large volumes of files before resigning. Which solution flags this pattern?",
    "o": [
      "Insider risk management",
      "Records management file plan",
      "eDiscovery Standard search",
      "Audit Standard log search"
    ],
    "a": 0,
    "e": "Insider risk management combines signals like a resignation event and mass downloads to raise an alert. Records and eDiscovery serve retention and investigation, not risk detection."
  },
  {
    "t": "ediscovery",
    "x": "Why would a legal team rely on eDiscovery in Microsoft Purview?",
    "o": [
      "To find and manage content for legal or investigative cases",
      "To encrypt mailboxes for ongoing regulatory compliance",
      "To detect risky insider behavior in near real time",
      "To apply visual watermarks to confidential documents"
    ],
    "a": 0,
    "e": "eDiscovery identifies, holds, and exports content relevant to legal matters. Encryption, insider risk, and content marking are handled by other solutions."
  },
  {
    "t": "ediscovery",
    "x": "Which capability is available in eDiscovery Premium but not in Standard?",
    "o": [
      "Custodian management and review sets for case analysis",
      "The ability to run a basic content search",
      "The ability to place content on a legal hold",
      "The ability to export search results for review"
    ],
    "a": 0,
    "e": "eDiscovery Premium adds custodian management, review sets, and advanced analytics. Standard supports content search, hold, and export only."
  },
  {
    "t": "ediscovery",
    "x": "What does placing a legal hold in eDiscovery accomplish?",
    "o": [
      "It preserves content relevant to a case from deletion",
      "It encrypts the content with a new sensitivity label",
      "It flags the content for an insider risk review",
      "It deletes the content once the case is closed"
    ],
    "a": 0,
    "e": "A hold preserves potentially relevant content so it cannot be permanently removed during a legal matter. It does not encrypt or delete that content."
  },
  {
    "t": "ediscovery",
    "x": "An organization needs advanced analytics and machine learning to reduce review volume in a lawsuit. Which tool fits?",
    "o": [
      "eDiscovery Premium",
      "eDiscovery Standard",
      "Content search alone",
      "Audit Standard search"
    ],
    "a": 0,
    "e": "eDiscovery Premium provides analytics such as near-duplicate detection and predictive coding to cut review volume. Standard and content search lack these features."
  },
  {
    "t": "audit-solutions",
    "x": "What do audit solutions in Microsoft Purview mainly provide?",
    "o": [
      "A record of user and admin activities for investigations",
      "Automatic encryption of all outgoing email messages",
      "Classification of documents with trainable classifiers",
      "Real-time blocking of risky external file sharing"
    ],
    "a": 0,
    "e": "Audit logs capture activities across services for security and compliance investigations. Encryption, classification, and blocking are other Purview features."
  },
  {
    "t": "audit-solutions",
    "x": "How does Audit Premium differ from Audit Standard in log retention?",
    "o": [
      "It retains audit logs for a longer default period",
      "It stops logging administrator activity entirely",
      "It removes the ability to search the audit log",
      "It disables mailbox auditing for all licensed users"
    ],
    "a": 0,
    "e": "Audit Premium extends default log retention beyond the Standard period and adds access to more event types. It does not reduce auditing capability."
  },
  {
    "t": "audit-solutions",
    "x": "Which additional value does Audit Premium offer during an investigation?",
    "o": [
      "Access to high-value crucial events and intelligent insights",
      "Automatic deletion of all suspicious activity records",
      "Real-time blocking of every flagged user session",
      "Encryption of the audit log using a customer key"
    ],
    "a": 0,
    "e": "Audit Premium surfaces higher-value events, such as items accessed in a mailbox, to aid forensic investigations. It does not block sessions or delete logs."
  },
  {
    "t": "audit-solutions",
    "x": "A security team must find which admin changed a mailbox setting last month. Which solution should they use?",
    "o": [
      "Audit search in Microsoft Purview",
      "Insider risk management triage",
      "Records management file plan",
      "Sensitivity label auto-labeling"
    ],
    "a": 0,
    "e": "The unified audit log records admin actions such as mailbox configuration changes and lets teams search them. The other tools do not provide this activity history."
  }
],
}
