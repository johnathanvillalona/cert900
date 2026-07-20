// Microsoft Azure Fundamentals (AZ-900) bank. Fundamentals exams are
// knowledge-based: multiple choice/response plus occasional drag-and-drop
// (match) and build-list (order) items; 40-60 Q, 85 min, scaled to 1000,
// pass 700 (skills measured as of July 20, 2026). Topics link John
// Savill per-topic AZ-900 course videos (playlist
// PLlVtbbG169nED0_vMEniWBQjSoxTsBYS3, Apr 2025 refresh).
import type { ExamDef } from "./types"

export const exam: ExamDef = {
 "id": "az-900",
 "vendor": "azure",
 "scale": {
  "max": 1000,
  "pass": 700
 },
 "cert": "Microsoft Certified",
 "name": "Azure Fundamentals",
 "code": "AZ-900",
 "blurb": "Cloud concepts, core Azure architecture and services, and Azure management and governance.",
 "domains": {
  "1": "Describe cloud concepts",
  "2": "Describe Azure architecture and services",
  "3": "Describe Azure management and governance"
 },
 "examSplit": {
  "1": 0.28,
  "2": 0.37,
  "3": 0.35
 },
 "examMC": 40,
 "examPBQ": 5,
 "examMinutes": 45,
 "videos": {
  "capex-opex": {
   "n": "John Savill: CapEx, OpEx, and Consumption-Based",
   "u": "https://www.youtube.com/watch?v=WiwV9wb0GMo",
   "d": 1
  },
  "cloud-benefits": {
   "n": "John Savill: High Availability and Scalability",
   "u": "https://www.youtube.com/watch?v=JRbhGzGzoOA",
   "d": 1
  },
  "cloud-models": {
   "n": "John Savill: Types of Cloud Computing",
   "u": "https://www.youtube.com/watch?v=7dlCrF2wmXU",
   "d": 1
  },
  "reliability": {
   "n": "John Savill: Reliability and Predictability",
   "u": "https://www.youtube.com/watch?v=kD2YqdDaO1w",
   "d": 1
  },
  "service-type-selection": {
   "n": "John Savill: Identify the Right Service Type",
   "u": "https://www.youtube.com/watch?v=KH8NH76h2vc",
   "d": 1
  },
  "service-types": {
   "n": "John Savill: Cloud Service Categories (IaaS, PaaS, SaaS)",
   "u": "https://www.youtube.com/watch?v=IqQC1EOQqeU",
   "d": 1
  },
  "ai-services": {
   "n": "John Savill: Azure AI Services",
   "u": "https://www.youtube.com/watch?v=lgcpRpV3HPc",
   "d": 2
  },
  "authentication-authorization": {
   "n": "John Savill: Authentication and Authorization",
   "u": "https://www.youtube.com/watch?v=GA-yNu6aFMk",
   "d": 2
  },
  "availability-zones": {
   "n": "John Savill: Availability Zones",
   "u": "https://www.youtube.com/watch?v=h0enGb17lnw",
   "d": 2
  },
  "azure-firewall": {
   "n": "John Savill: Azure Firewall",
   "u": "https://www.youtube.com/watch?v=1-_cqpUISg4",
   "d": 2
  },
  "big-data-analytics": {
   "n": "John Savill: Big Data and Analytics Services",
   "u": "https://www.youtube.com/watch?v=LSVewE4mKfE",
   "d": 2
  },
  "compute-resources": {
   "n": "John Savill: Core Compute Resources",
   "u": "https://www.youtube.com/watch?v=yKDSAYDLGrI",
   "d": 2
  },
  "conditional-access-mfa": {
   "n": "John Savill: Conditional Access, MFA, and SSO",
   "u": "https://www.youtube.com/watch?v=DFwERh9Xxk0",
   "d": 2
  },
  "data-migration": {
   "n": "John Savill: Data Movement and Migration Options",
   "u": "https://www.youtube.com/watch?v=jNBcXnMTo9s",
   "d": 2
  },
  "databases": {
   "n": "John Savill: Database Resources",
   "u": "https://www.youtube.com/watch?v=4sQOF9fSOAU",
   "d": 2
  },
  "ddos-protection": {
   "n": "John Savill: Azure DDoS Protection",
   "u": "https://www.youtube.com/watch?v=6cv-wdo9TJw",
   "d": 2
  },
  "dedicated-hosts": {
   "n": "John Savill: Azure Dedicated Hosts",
   "u": "https://www.youtube.com/watch?v=RnNqmTH9xok",
   "d": 2
  },
  "defender-cloud": {
   "n": "John Savill: Microsoft Defender for Cloud",
   "u": "https://www.youtube.com/watch?v=eWcoMi_nQt4",
   "d": 2
  },
  "defense-in-depth": {
   "n": "John Savill: Defense in Depth",
   "u": "https://www.youtube.com/watch?v=CHKS2FcEMek",
   "d": 2
  },
  "directory-services": {
   "n": "John Savill: Azure Directory Services",
   "u": "https://www.youtube.com/watch?v=E4__JBVE25I",
   "d": 2
  },
  "endpoints": {
   "n": "John Savill: Public and Private Endpoints",
   "u": "https://www.youtube.com/watch?v=bPNkXwRFsek",
   "d": 2
  },
  "entra-id": {
   "n": "John Savill: Microsoft Entra Overview",
   "u": "https://www.youtube.com/watch?v=bSIF_GjaCmo",
   "d": 2
  },
  "external-identities": {
   "n": "John Savill: Azure External Identities",
   "u": "https://www.youtube.com/watch?v=G5_z4PFgn2o",
   "d": 2
  },
  "iot-services": {
   "n": "John Savill: Azure IoT Services",
   "u": "https://www.youtube.com/watch?v=22z9ARaKlbU",
   "d": 2
  },
  "key-vault": {
   "n": "John Savill: Azure Key Vault",
   "u": "https://www.youtube.com/watch?v=ZBXVAD4S0Tc",
   "d": 2
  },
  "management-groups": {
   "n": "John Savill: Management Groups",
   "u": "https://www.youtube.com/watch?v=bPdDiEtCVhM",
   "d": 2
  },
  "marketplace": {
   "n": "John Savill: Azure Marketplace",
   "u": "https://www.youtube.com/watch?v=b7RuB4Bymgc",
   "d": 2
  },
  "networking-resources": {
   "n": "John Savill: Core Network Resources",
   "u": "https://www.youtube.com/watch?v=aNK0C9Oj2sg",
   "d": 2
  },
  "nsgs": {
   "n": "John Savill: Network Security Groups",
   "u": "https://www.youtube.com/watch?v=flCoRc1uv9o",
   "d": 2
  },
  "rbac": {
   "n": "John Savill: Role-Based Access Control",
   "u": "https://www.youtube.com/watch?v=0iVyJBG06fM",
   "d": 2
  },
  "regions": {
   "n": "John Savill: Regions and Region Pairs",
   "u": "https://www.youtube.com/watch?v=4RjPOAN54AE",
   "d": 2
  },
  "resource-groups": {
   "n": "John Savill: Resource Groups",
   "u": "https://www.youtube.com/watch?v=g6thrYZhPZY",
   "d": 2
  },
  "sentinel": {
   "n": "John Savill: Microsoft Sentinel",
   "u": "https://www.youtube.com/watch?v=xaqiPXL6tz0",
   "d": 2
  },
  "serverless": {
   "n": "John Savill: Serverless Technologies",
   "u": "https://www.youtube.com/watch?v=-xeJGiMw5OE",
   "d": 2
  },
  "storage-accounts": {
   "n": "John Savill: Storage Account Resources",
   "u": "https://www.youtube.com/watch?v=AI2XoRFwqYE",
   "d": 2
  },
  "subscriptions": {
   "n": "John Savill: Subscriptions",
   "u": "https://www.youtube.com/watch?v=9vKAYW_WkLo",
   "d": 2
  },
  "vm-resources": {
   "n": "John Savill: Resources Required for Virtual Machines",
   "u": "https://www.youtube.com/watch?v=PP5BWZ0cAJo",
   "d": 2
  },
  "zero-trust": {
   "n": "John Savill: The Concept of Zero Trust",
   "u": "https://www.youtube.com/watch?v=JX3w4to-qgo",
   "d": 2
  },
  "advisor": {
   "n": "John Savill: Azure Advisor",
   "u": "https://www.youtube.com/watch?v=nqH4NboyEl0",
   "d": 3
  },
  "arm": {
   "n": "John Savill: Azure Resource Manager",
   "u": "https://www.youtube.com/watch?v=g4u0NL2-3XM",
   "d": 3
  },
  "arm-templates": {
   "n": "John Savill: ARM Templates and Infrastructure as Code",
   "u": "https://www.youtube.com/watch?v=loxcA5MUf-I",
   "d": 3
  },
  "azure-arc": {
   "n": "John Savill: Azure Arc",
   "u": "https://www.youtube.com/watch?v=cW6_rvDYSHg",
   "d": 3
  },
  "azure-policy": {
   "n": "John Savill: Azure Policy",
   "u": "https://www.youtube.com/watch?v=z7WMqHE3R8g",
   "d": 3
  },
  "blueprints": {
   "n": "John Savill: Azure Blueprints",
   "u": "https://www.youtube.com/watch?v=SJbDcvkySCY",
   "d": 3
  },
  "cloud-adoption-framework": {
   "n": "John Savill: Cloud Adoption Framework",
   "u": "https://www.youtube.com/watch?v=VHQxbIynlN4",
   "d": 3
  },
  "cost-factors": {
   "n": "John Savill: Factors That Affect Costs",
   "u": "https://www.youtube.com/watch?v=fMShW_RGcxY",
   "d": 3
  },
  "cost-management": {
   "n": "John Savill: Azure Cost Management",
   "u": "https://www.youtube.com/watch?v=FoBjC9CAF08",
   "d": 3
  },
  "cost-reduction": {
   "n": "John Savill: Factors to Reduce Cost",
   "u": "https://www.youtube.com/watch?v=B5yiKE2DLH8",
   "d": 3
  },
  "devops-technologies": {
   "n": "John Savill: DevOps Technologies",
   "u": "https://www.youtube.com/watch?v=-acpNiCa0qY",
   "d": 3
  },
  "governance-hierarchy": {
   "n": "John Savill: Governance Hierarchy Constructs",
   "u": "https://www.youtube.com/watch?v=ge8r_Z0LKxM",
   "d": 3
  },
  "monitor": {
   "n": "John Savill: Azure Monitor",
   "u": "https://www.youtube.com/watch?v=v68jL-l9Fww",
   "d": 3
  },
  "portal-tools": {
   "n": "John Savill: Azure Management Solutions (Portal, CLI, PowerShell)",
   "u": "https://www.youtube.com/watch?v=6xp-K60ChAk",
   "d": 3
  },
  "pricing-calculator": {
   "n": "John Savill: Pricing and TCO Calculators",
   "u": "https://www.youtube.com/watch?v=pE-bf8i5blU",
   "d": 3
  },
  "privacy-statement": {
   "n": "John Savill: Privacy Statement, OST, and DPA",
   "u": "https://www.youtube.com/watch?v=5mqroH3E3gw",
   "d": 3
  },
  "purview": {
   "n": "John Savill: Microsoft Purview",
   "u": "https://www.youtube.com/watch?v=nfP7t8jy0aE",
   "d": 3
  },
  "resource-locks": {
   "n": "John Savill: Resource Locks",
   "u": "https://www.youtube.com/watch?v=eF_KilJRxbE",
   "d": 3
  },
  "service-health": {
   "n": "John Savill: Azure Service Health",
   "u": "https://www.youtube.com/watch?v=M1xPK4T4Vls",
   "d": 3
  },
  "service-level-agreements": {
   "n": "John Savill: Service Level Agreements",
   "u": "https://www.youtube.com/watch?v=3QIVbgnNrR0",
   "d": 3
  },
  "service-lifecycle": {
   "n": "John Savill: Service Lifecycle in Azure",
   "u": "https://www.youtube.com/watch?v=NJ9-S7C0pY4",
   "d": 3
  },
  "sovereign-regions": {
   "n": "John Savill: Azure Sovereign Regions",
   "u": "https://www.youtube.com/watch?v=PdAEPAnT2uI",
   "d": 3
  },
  "tags": {
   "n": "John Savill: Tags",
   "u": "https://www.youtube.com/watch?v=eaf63hE_6SQ",
   "d": 3
  },
  "trust-center": {
   "n": "John Savill: Trust Center and Compliance Documentation",
   "u": "https://www.youtube.com/watch?v=QkVlogulVX4",
   "d": 3
  }
 },
 "questions": [
  {
   "id": 1,
   "t": "cloud-benefits",
   "x": "A new hire on the IT team asks what cloud computing actually is. Which description is accurate?",
   "o": [
    "Running virtual machines on hypervisors in a company-owned datacenter",
    "Outsourcing hardware repairs to a nearby colocation facility",
    "Delivering computing services such as servers and storage over the internet",
    "Streaming desktop applications from a server on the office network"
   ],
   "a": 2,
   "e": "Cloud computing is the delivery of computing services, including servers, storage, databases, and networking, over the internet with pay-as-you-go pricing. The other options describe on-premises or colocation arrangements where the organization still owns and operates the underlying infrastructure.",
   "d": 1
  },
  {
   "id": 2,
   "t": "cloud-benefits",
   "x": "During month-end processing a reporting VM runs out of CPU, so an administrator resizes it to a larger SKU with more cores. Which concept does this change illustrate?",
   "o": [
    "Horizontal scaling",
    "Vertical scaling",
    "Elasticity",
    "High availability"
   ],
   "a": 1,
   "e": "Increasing the power of a single instance, such as giving it more CPU or RAM, is vertical scaling (scaling up). Horizontal scaling would add more instances instead, and elasticity refers to capacity adjusting automatically as demand changes rather than a manual resize.",
   "d": 1
  },
  {
   "id": 3,
   "t": "cloud-benefits",
   "x": "An online store automatically adds VM instances ahead of holiday traffic and removes them when demand falls, without any administrator action. Which cloud characteristic is at work?",
   "o": [
    "Vertical scaling",
    "High availability",
    "Disaster recovery",
    "Elasticity"
   ],
   "a": 3,
   "e": "Elasticity is the ability to expand and contract capacity automatically as demand changes, so the store pays for extra instances only while they are needed. High availability concerns surviving failures, not tracking demand, and vertical scaling changes the size of one instance rather than the count.",
   "d": 1
  },
  {
   "id": 4,
   "t": "cloud-benefits",
   "x": "A company deploys an application using a cloud service model in which its administrators must apply guest operating system patches themselves. Which model is the company using?",
   "o": [
    "Infrastructure as a service",
    "Platform as a service",
    "Software as a service",
    "Serverless computing"
   ],
   "a": 0,
   "e": "With infrastructure as a service, the provider manages physical hosts and networking while the customer manages the operating system and everything above it. In PaaS, SaaS, and serverless models, operating system maintenance shifts to the provider.",
   "d": 1
  },
  {
   "id": 5,
   "t": "cloud-benefits",
   "x": "A security lead is reviewing the shared responsibility model across IaaS, PaaS, and SaaS deployments. Which responsibilities always remain with the customer, regardless of service model? (Select THREE.)",
   "o": [
    "Patching the hypervisors that run the compute fleet",
    "Managing user accounts and sign-in identities",
    "Securing the laptops and phones employees connect with",
    "Controlling physical access to datacenter buildings",
    "Classifying and safeguarding company information and data"
   ],
   "a": 1,
   "e": "In every service model the customer keeps ownership of its data, its identities, and the devices that connect to cloud services. Datacenter facilities and host-level infrastructure such as hypervisors are always the cloud provider's responsibility.",
   "d": 1,
   "as": [
    1,
    2,
    4
   ]
  },
  {
   "id": 6,
   "t": "cloud-benefits",
   "x": "A developer needs code to run whenever a message lands in a queue, with the platform allocating all compute and charging only for execution time. Which computing model fits this need?",
   "o": [
    "Reserved virtual machine instances",
    "Infrastructure as a service",
    "Serverless computing",
    "Private cloud hosting"
   ],
   "a": 2,
   "e": "Serverless computing runs event-driven code while the provider handles all server provisioning and scaling, billing only for actual execution. IaaS and reserved VMs both require the customer to size and manage instances that accrue charges the whole time they are allocated.",
   "d": 1
  },
  {
   "id": 7,
   "t": "cloud-benefits",
   "x": "A compliance officer asks how adopting the cloud can strengthen governance over IT resources. Which capability best supports that goal?",
   "o": [
    "Encrypting traffic between users and web applications",
    "Enforcing organizational standards on resources as they are deployed",
    "Spreading application instances across multiple sites",
    "Charging departments only for the resources they consume"
   ],
   "a": 1,
   "e": "Cloud governance benefits come from applying and auditing organizational standards automatically as resources are created, keeping deployments compliant at scale. Encryption is a security control, multi-site deployment supports availability, and per-use charging is a billing characteristic.",
   "d": 1
  },
  {
   "id": 8,
   "t": "cloud-benefits",
   "x": "An architect is classifying recent capacity changes across several workloads. Which changes are examples of vertical scaling? (Select TWO.)",
   "o": [
    "A web farm grew from four instances to nine to absorb more traffic",
    "A database was moved to a higher service tier with more memory",
    "A cache cluster was expanded by adding two nodes to its ring",
    "An application server’s memory allocation was doubled from 16 GB to 32 GB",
    "An application was replicated into a second region for resilience"
   ],
   "a": 1,
   "e": "Vertical scaling changes the power of a single resource, such as giving one VM more vCPUs or one database more memory. Adding instances, nodes, or regional copies increases the number of resources, which is horizontal scaling.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 9,
   "t": "capex-opex",
   "x": "A finance analyst is sorting the IT budget into capital and operating expenditures. Which line item is a capital expenditure?",
   "o": [
    "Monthly charges for cloud virtual machines",
    "The annual renewal of a productivity software subscription",
    "The electric bill for the on-premises server room",
    "The purchase of new storage arrays for the datacenter"
   ],
   "a": 3,
   "e": "Capital expenditures are upfront purchases of physical assets, like storage hardware, that are then depreciated over time. Cloud consumption charges, software subscriptions, and utility bills are all recurring operating expenditures.",
   "d": 1
  },
  {
   "id": 10,
   "t": "capex-opex",
   "x": "A newly funded startup cannot justify large upfront infrastructure purchases but expects rapid, uneven growth. Which financial characteristic of the public cloud most directly addresses this situation?",
   "o": [
    "Hardware costs are depreciated over a fixed multi-year schedule",
    "Infrastructure capacity is purchased in advance at a discount",
    "Infrastructure is paid for as an operating expense as it is used",
    "Spending is locked to a flat rate regardless of monthly usage"
   ],
   "a": 2,
   "e": "Public cloud shifts infrastructure from capital purchases to operating expenses that track actual usage, so a startup can begin small and grow without a big initial outlay. Depreciation schedules and advance capacity purchases are traits of the on-premises capital model.",
   "d": 1
  },
  {
   "id": 11,
   "t": "capex-opex",
   "x": "Which statement describes how customers are charged under the consumption-based model?",
   "o": [
    "Paying a flat monthly fee that covers any level of usage",
    "Paying for the resources actually used during each billing cycle",
    "Prepaying for a fixed block of capacity at the start of the year",
    "Depreciating purchased assets over their expected useful life"
   ],
   "a": 1,
   "e": "The consumption-based model bills for what is actually used in each period, so costs rise and fall with usage. Flat fees and prepaid capacity blocks decouple cost from usage, and depreciation applies to owned assets, not cloud services.",
   "d": 1
  },
  {
   "id": 12,
   "t": "capex-opex",
   "x": "Which workload would gain the most financial benefit from consumption-based pricing?",
   "o": [
    "A ticketing site that sees brief, extreme surges when events go on sale",
    "A payroll system that runs the same steady load every day",
    "A factory control system that operates disconnected from the internet",
    "An internal wiki with a small, constant number of users"
   ],
   "a": 0,
   "e": "Consumption-based pricing rewards workloads whose demand varies sharply, because capacity bought for rare peaks would otherwise sit idle. Steady workloads see far less advantage, and a disconnected factory system is not a cloud candidate at all.",
   "d": 1
  },
  {
   "id": 13,
   "t": "capex-opex",
   "x": "A CIO shuts down an aging datacenter and moves its workloads onto cloud virtual machines billed monthly. How does the organization's IT spending profile change?",
   "o": [
    "Operating expenses largely convert into capital expenses",
    "All infrastructure spending becomes a one-time migration charge",
    "Hardware depreciation begins accruing on the cloud resources",
    "Capital expenses largely convert into operating expenses"
   ],
   "a": 3,
   "e": "Replacing owned hardware with monthly cloud charges shifts spending from capital expenditure to operating expenditure. Cloud resources are not owned assets, so there is nothing to depreciate, and consumption billing continues for as long as the workloads run.",
   "d": 1
  },
  {
   "id": 14,
   "t": "capex-opex",
   "x": "A procurement team is evaluating the consumption-based model before approving a cloud migration. Which characteristics should they expect? (Select TWO.)",
   "o": [
    "Unused reserved capacity is invoiced at the end of each quarter",
    "No upfront infrastructure purchase is needed to start using services",
    "Hardware must be sized in advance for projected peak demand",
    "Monthly spending stays level no matter how demand shifts",
    "Charges stop accruing once a resource is deprovisioned"
   ],
   "a": 1,
   "e": "Under the consumption-based model there is no upfront purchase, and billing ends when a resource is deleted or deallocated. Sizing for peak demand and paying for idle capacity are burdens of the capital, on-premises approach.",
   "d": 1,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 15,
   "t": "capex-opex",
   "x": "An IT director keeps a small on-premises footprint after a partial cloud migration. Which of the remaining datacenter costs is an operating expenditure?",
   "o": [
    "The electricity that powers and cools the server racks",
    "The purchase of a replacement blade chassis for the cluster",
    "The buildout of an additional room to house new racks",
    "The one-time acquisition of higher-capacity core switches"
   ],
   "a": 0,
   "e": "Utility costs recur month after month and are expensed as they are incurred, making them operating expenditures. Purchasing hardware or constructing facilities creates owned assets, which is capital expenditure.",
   "d": 1
  },
  {
   "id": 16,
   "t": "capex-opex",
   "x": "A regulated firm decides to build a private cloud inside its own facility rather than use a public provider. Which statement about the cost implications is accurate?",
   "o": [
    "Infrastructure spending converts entirely into usage-based fees",
    "Significant capital investment in hardware is still required",
    "Capacity planning for peak load is no longer necessary",
    "Hardware refresh costs transfer to an outside service provider"
   ],
   "a": 1,
   "e": "A private cloud delivers self-service and automation, but the organization still buys, houses, and refreshes the underlying hardware, so heavy capital expenditure remains. Usage-based fees and provider-owned refresh cycles are traits of the public cloud.",
   "d": 1
  },
  {
   "id": 17,
   "t": "reliability",
   "x": "A patient-scheduling application must stay usable even when an individual server fails. Running duplicate instances across fault-isolated locations primarily addresses which design goal?",
   "o": [
    "High availability",
    "Disaster recovery",
    "Vertical scalability",
    "Cost optimization"
   ],
   "a": 0,
   "e": "High availability keeps a service running through the failure of individual components by providing redundancy across isolated locations. Disaster recovery instead covers restoring service after a large-scale event such as the loss of an entire site.",
   "d": 1
  },
  {
   "id": 18,
   "t": "reliability",
   "x": "Which statement captures what reliability means when designing a cloud workload?",
   "o": [
    "The workload can add capacity quickly when demand rises",
    "The workload's monthly charges can be forecast in advance",
    "The workload can recover from failures and continue functioning",
    "The workload restricts access to approved users and devices"
   ],
   "a": 2,
   "e": "Reliability is a system's ability to recover from failures and keep working, typically achieved through decentralized design and redundancy. Rapid capacity growth is scalability, forecastable charges are cost predictability, and access restriction is a security concern.",
   "d": 1
  },
  {
   "id": 19,
   "t": "reliability",
   "x": "An operations lead notes that load balancing and autoscaling keep response times consistent for users even during sudden demand spikes. Which cloud benefit is being described?",
   "o": [
    "Cost predictability",
    "Performance predictability",
    "Shared responsibility",
    "Vertical scalability"
   ],
   "a": 1,
   "e": "Performance predictability means users get a consistent experience because capacity adjusts and traffic is distributed as demand changes. Cost predictability concerns forecasting spend, which load balancing does not address.",
   "d": 1
  },
  {
   "id": 20,
   "t": "reliability",
   "x": "A finance manager wants confidence in what the next quarter's cloud bill will be. Which approach best supports cost predictability?",
   "o": [
    "Distributing application replicas across separate physical sites",
    "Allowing each team to deploy any resource size on demand",
    "Restoring services from an offsite copy after an outage",
    "Estimating spend in advance and tracking usage against budgets"
   ],
   "a": 3,
   "e": "Cost predictability comes from forecasting expected spend before deployment and then monitoring real usage against those estimates. Replica distribution and offsite restores support availability and recovery, and unconstrained deployment sizes make spending harder to forecast.",
   "d": 1
  },
  {
   "id": 21,
   "t": "reliability",
   "x": "A design review flags that a single-VM deployment carries too much downtime risk. Which changes most directly increase the application's availability? (Select TWO.)",
   "o": [
    "Resize the VM to a SKU with faster processors",
    "Run a second copy of the application behind a load balancer",
    "Schedule the VM to restart automatically every night",
    "Spread duplicate instances across isolated racks or sites",
    "Move the VM's disks to a lower-cost storage tier"
   ],
   "a": 1,
   "e": "Availability rises when single points of failure are removed, so redundant copies that can take over during a failure are the direct fix. Faster processors improve performance rather than uptime, and a nightly restart actually adds planned downtime.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 22,
   "t": "reliability",
   "x": "An architecture board is reviewing proposals to make a customer-facing workload more reliable. Which practices support that goal? (Select TWO.)",
   "o": [
    "Configure automatic failover between duplicated instances",
    "Keep every service in a single zone to minimize network latency",
    "Add redundancy so the loss of one component does not cause an outage",
    "Assign each service a dedicated host for steady performance",
    "Scale instance counts down during off-peak hours to cut cost"
   ],
   "a": 0,
   "e": "Reliability grows from redundancy and automatic failover, which let the workload absorb failures and keep running. Concentrating everything in one zone or on dedicated hosts preserves single points of failure, and off-peak scale-down is a cost measure, not a resilience one.",
   "d": 1,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 23,
   "t": "reliability",
   "x": "A flood knocks an entire facility offline, and an application resumes service from a copy maintained in a distant location. Which capability did the organization exercise?",
   "o": [
    "High availability",
    "Elasticity",
    "Disaster recovery",
    "Horizontal scaling"
   ],
   "a": 2,
   "e": "Disaster recovery restores service after a large-scale event, such as losing a whole site, by failing over to resources kept in a separate location. High availability protects against smaller component-level failures within a running deployment.",
   "d": 1
  },
  {
   "id": 24,
   "t": "service-types",
   "x": "In the shared responsibility model, which cloud service type has the customer managing only applications and data, while the provider manages the operating system and runtime?",
   "o": [
    "Software as a service",
    "Platform as a service",
    "Infrastructure as a service",
    "On-premises hosting"
   ],
   "a": 1,
   "e": "In PaaS the provider runs the platform layers, including the OS and runtime, and the customer brings applications and data. IaaS leaves the guest OS to the customer, and SaaS hands over the application itself.",
   "d": 1
  },
  {
   "id": 25,
   "t": "service-types",
   "x": "A development team wants to publish its web application by pushing code, while server provisioning, runtime patching, and load balancing happen automatically. The team still chooses the runtime stack and configuration settings. Which Azure offering should they evaluate first?",
   "o": [
    "Azure Virtual Machines",
    "Azure App Service",
    "Azure Kubernetes Service",
    "Virtual machine scale sets"
   ],
   "a": 1,
   "e": "App Service is PaaS: developers deploy code while the platform runs the servers, patches the runtime, and balances traffic. Virtual machines and scale sets leave OS care to the team, and AKS still requires operating the cluster and its nodes.",
   "d": 1
  },
  {
   "id": 26,
   "t": "service-types",
   "x": "Which offering is a typical example of software as a service?",
   "o": [
    "Microsoft 365",
    "Azure App Service",
    "Azure Virtual Machines",
    "Azure SQL Database"
   ],
   "a": 0,
   "e": "Microsoft 365 delivers complete applications that users simply sign in to, with the provider running everything underneath. App Service and Azure SQL Database are PaaS building blocks, and Virtual Machines are IaaS, because customers still deploy workloads onto them.",
   "d": 1
  },
  {
   "id": 27,
   "t": "service-types",
   "x": "A database administrator migrating to Azure needs to sign in to the operating system, install third-party monitoring agents, and decide exactly when engine patches are applied. Which option meets these needs?",
   "o": [
    "Azure SQL Database",
    "Azure SQL Managed Instance",
    "Azure Database for MySQL",
    "SQL Server on Azure Virtual Machines"
   ],
   "a": 3,
   "e": "The virtual machine option is IaaS, so the customer keeps OS access and full control of patch timing. The managed database services handle the OS and engine updates themselves, which rules out installing OS-level agents.",
   "d": 1
  },
  {
   "id": 28,
   "t": "service-types",
   "x": "A company is moving a workload from infrastructure as a service to software as a service. Which responsibilities transfer FROM the company TO the provider as part of this move? (Select TWO.)",
   "o": [
    "Classifying the data the organization stores",
    "Patching the operating system",
    "Deciding which employees receive accounts",
    "Maintaining the application code",
    "Choosing what information users put into the system"
   ],
   "a": 1,
   "e": "Moving up the service-model ladder shifts platform work to the provider: OS patching and application maintenance stop being the customer’s job under SaaS. Data classification, account decisions, and information usage always remain with the customer.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 29,
   "t": "service-types",
   "x": "An engineering firm must keep running a legacy application that depends on a specific operating system build with custom kernel modules. Which Azure service can host it?",
   "o": [
    "Azure App Service",
    "Azure Virtual Machines",
    "Azure Functions",
    "Azure Logic Apps"
   ],
   "a": 1,
   "e": "Kernel-level customization requires control of the guest OS, which an IaaS service such as Virtual Machines provides. App Service, Functions, and Logic Apps are managed platforms that do not expose the operating system to the customer.",
   "d": 1
  },
  {
   "id": 30,
   "t": "service-types",
   "x": "A workload consists of a short script that should run only when a new file arrives in storage, and the team wants to be billed just for the time the code executes. Which compute option is the best match?",
   "o": [
    "An always-on Azure virtual machine",
    "Azure Kubernetes Service",
    "Azure Functions",
    "Azure App Service on a dedicated plan"
   ],
   "a": 2,
   "e": "Event-triggered code with per-execution billing is the serverless pattern that Functions is built for. Virtual machines, AKS node pools, and dedicated App Service plans bill for allocated capacity whether or not the code is running.",
   "d": 1
  },
  {
   "id": 31,
   "t": "service-types",
   "x": "Moving a web workload from Azure Virtual Machines to Azure App Service shifts which responsibility from the customer to Microsoft?",
   "o": [
    "Applying operating system updates",
    "Writing and deploying the application code",
    "Deciding which users can reach the application",
    "Ensuring stored business data is accurate"
   ],
   "a": 0,
   "e": "App Service is PaaS, so the platform maintains the OS and runtime the app sits on. Code, access decisions, and data quality stay with the customer in every service model.",
   "d": 1
  },
  {
   "id": 32,
   "t": "service-types",
   "x": "A small nonprofit with no dedicated IT staff needs email, calendars, and shared documents working this week, with minimal ongoing administration. Which approach fits best?",
   "o": [
    "Deploy a mail server on Azure virtual machines",
    "Build a collaboration portal on a managed app platform",
    "Run open-source groupware in a colocation facility",
    "Subscribe to a hosted productivity suite"
   ],
   "a": 3,
   "e": "A ready-made SaaS suite needs no infrastructure work and is usable almost immediately, which matches both the timeline and the staffing reality. The other approaches all require building or operating servers and software.",
   "d": 1
  },
  {
   "id": 33,
   "t": "service-types",
   "x": "Which scenarios are a good fit for platform as a service? (Select TWO.)",
   "o": [
    "Deploying a team-built web API where the runtime and web server come preconfigured",
    "Migrating a server that requires a heavily customized operating system image",
    "Subscribing to a ready-made customer relationship management product",
    "Renting raw virtual machines from a provider to install any software stack",
    "Running a database engine whose backups and updates the provider performs"
   ],
   "a": 0,
   "e": "PaaS suits custom applications and managed data services where the platform supplies the OS and runtime. A custom OS image and raw rented VMs call for IaaS, while a finished CRM product is SaaS.",
   "d": 1,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 34,
   "t": "service-types",
   "x": "Which statement correctly contrasts infrastructure as a service with platform as a service?",
   "o": [
    "In PaaS the customer administers the operating system; in IaaS the provider does, while the customer keeps the apps and data",
    "In IaaS the customer administers the operating system; in PaaS the provider does, while the customer keeps the apps and data",
    "IaaS supplies finished end-user applications, while PaaS supplies virtual machines for the customer to configure",
    "IaaS and PaaS differ mainly in how usage is billed rather than in what the provider manages"
   ],
   "a": 1,
   "e": "The dividing line between the two models is the operating system: customers run it under IaaS and consume it under PaaS. Reversing that split, or reducing the difference to billing, misstates both models.",
   "d": 1
  },
  {
   "id": 35,
   "t": "cloud-models",
   "x": "Which deployment model describes services built on infrastructure that a provider owns and offers openly for purchase over the internet?",
   "o": [
    "Private cloud",
    "Hybrid cloud",
    "Public cloud",
    "Community cloud"
   ],
   "a": 2,
   "e": "Public cloud resources are provider-owned, shared across many tenants, and open to any paying customer. A private cloud serves a single organization, and hybrid connects that private capacity to public services.",
   "d": 1
  },
  {
   "id": 36,
   "t": "cloud-models",
   "x": "A bank operates a self-service virtualization platform in its own datacenters, used exclusively by its internal departments. Which model is it using?",
   "o": [
    "Private cloud",
    "Public cloud",
    "Hybrid cloud",
    "Multicloud"
   ],
   "a": 0,
   "e": "Cloud-style capabilities dedicated to one organization define the private model, whether hosted in-house or by a third party. It would become hybrid only once those systems were connected with public cloud services.",
   "d": 1
  },
  {
   "id": 37,
   "t": "cloud-models",
   "x": "A retailer keeps its inventory database in an on-site server room for latency reasons, while its seasonal web storefront runs on Azure, and the two operate as one connected system. Which model describes this?",
   "o": [
    "Public cloud",
    "Private cloud",
    "Multicloud",
    "Hybrid cloud"
   ],
   "a": 3,
   "e": "On-premises infrastructure working together with public cloud services is the definition of hybrid. Multicloud would mean a second public provider, and neither pure model covers a split like this.",
   "d": 1
  },
  {
   "id": 38,
   "t": "cloud-models",
   "x": "A newly founded company wants to reach customers in several countries at launch, avoid buying hardware, and add capacity as demand grows. Which deployment model aligns with these goals?",
   "o": [
    "Private cloud",
    "Public cloud",
    "Hybrid cloud",
    "Community cloud"
   ],
   "a": 1,
   "e": "Public cloud offers global regions, no capital purchases, and elastic capacity, exactly what a hardware-free startup needs. Private and hybrid both require owning or hosting equipment somewhere.",
   "d": 1
  },
  {
   "id": 39,
   "t": "cloud-models",
   "x": "Which characteristics are typical of a private cloud deployment? (Select TWO.)",
   "o": [
    "Capacity is drawn on demand from a pool shared with other companies",
    "Spending shifts almost entirely to usage-based operating expense",
    "The organization controls which hardware runs its workloads and where it sits",
    "Significant up-front spending on equipment and the staff to operate it",
    "Anyone with a payment method can sign up for the service"
   ],
   "a": 2,
   "e": "Private cloud trades money and effort for control: the organization picks the hardware and location but must buy and run that infrastructure. Shared on-demand pools, pay-as-you-go economics, and open sign-up describe the public model.",
   "d": 1,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 40,
   "t": "cloud-models",
   "x": "A media company runs its streaming service in Azure and its data analytics on another provider's public cloud, with no on-premises systems at all. What is this strategy called?",
   "o": [
    "Hybrid cloud",
    "Community cloud",
    "Multicloud",
    "Private cloud"
   ],
   "a": 2,
   "e": "Consuming two or more public cloud providers side by side is multicloud. Hybrid requires a private or on-premises component, which this company does not have.",
   "d": 1
  },
  {
   "id": 41,
   "t": "cloud-models",
   "x": "A defense contractor must run sensitive workloads on infrastructure shared with no other tenant, while still giving project teams self-service provisioning. Which model meets both needs?",
   "o": [
    "Private cloud",
    "Public cloud",
    "Hybrid cloud",
    "Multicloud"
   ],
   "a": 0,
   "e": "A private cloud delivers self-service and elasticity on single-tenant infrastructure, which satisfies the isolation requirement. Public and multicloud approaches place workloads on shared provider infrastructure, and hybrid still includes a public component.",
   "d": 1
  },
  {
   "id": 42,
   "t": "cloud-models",
   "x": "An insurer keeps its policy system in its own datacenter connected to workloads in Azure, and it also runs analytics on a second public cloud provider. Which term describes the on-premises-plus-Azure portion of this environment?",
   "o": [
    "Multicloud",
    "Public cloud",
    "Private cloud",
    "Hybrid cloud"
   ],
   "a": 3,
   "e": "Infrastructure that spans a private datacenter and a public cloud, working together, is hybrid cloud. Running two public providers is what makes the OVERALL estate multicloud, but the on-premises-to-Azure relationship itself is hybrid.",
   "d": 1
  },
  {
   "id": 43,
   "t": "cloud-models",
   "x": "Which situations point toward a hybrid cloud approach? (Select THREE.)",
   "o": [
    "Certain records must stay in the company datacenter while other systems move to Azure",
    "A brand-new company with no existing servers is launching its first product entirely in Azure",
    "A legacy system that cannot leave the building must integrate with new cloud-hosted services",
    "A firm standardizes on two public cloud providers to reduce dependence on either one",
    "Baseline load runs on owned equipment, with overflow sent to a public provider during peaks"
   ],
   "a": 0,
   "e": "Hybrid fits whenever something must remain on-premises, for residency, legacy, or cost reasons, while still working with public cloud capacity. A greenfield launch is a pure public cloud case, and two public providers describe multicloud.",
   "d": 1,
   "as": [
    0,
    2,
    4
   ]
  },
  {
   "id": 44,
   "t": "cloud-models",
   "x": "Which statement about the public cloud model is accurate?",
   "o": [
    "Each customer receives dedicated physical servers reserved for its exclusive use",
    "The provider owns and operates the infrastructure, which many customers share",
    "Customers supply the virtualization layer while the provider supplies power and buildings",
    "Access to the services is restricted to users connecting from a corporate network"
   ],
   "a": 1,
   "e": "Provider-owned, multitenant infrastructure is what makes public cloud economical and elastic. Dedicated single-tenant hardware describes private hosting, and the provider, not the customer, operates the virtualization layer.",
   "d": 1
  },
  {
   "id": 45,
   "t": "cloud-models",
   "x": "A company weighs hosting a private cloud in a third-party provider’s facility instead of its own datacenter. Which cost effect should it expect from that choice?",
   "o": [
    "The environment becomes free once hardware is amortized",
    "The provider takes on facility and hardware operations for a contracted fee",
    "Costs become identical to consumption-based public cloud pricing",
    "All security responsibilities transfer to the hosting provider"
   ],
   "a": 1,
   "e": "A hosted private cloud keeps the dedicated-infrastructure model but moves facility and hardware operations to the host under contract. Dedicated capacity still costs money when idle, so pricing does not behave like consumption-based public cloud.",
   "d": 1
  },
  {
   "id": 46,
   "t": "regions",
   "x": "Which statement most accurately describes an Azure region?",
   "o": [
    "One or more datacenters connected through a low-latency network within a geographic area",
    "A billing construct that groups subscriptions by the currency used for invoicing",
    "A logical container used to group virtual machines that share the same lifecycle",
    "A physically separate location within an Azure region with independent power, cooling, and networking"
   ],
   "a": 0,
   "e": "A region is one or more datacenters placed within a latency-defined perimeter and linked by a dedicated low-latency network. The isolated-location description fits an availability zone, and lifecycle grouping describes a resource group.",
   "d": 2
  },
  {
   "id": 47,
   "t": "regions",
   "x": "A US defense agency needs to run workloads in a cloud instance that is physically and logically separated from the public Azure cloud and operated by screened personnel. Which offering meets these requirements?",
   "o": [
    "An Azure region pair located within the United States",
    "An availability zone in a US-based Azure region",
    "A resource group protected by a read-only lock",
    "Azure Government"
   ],
   "a": 3,
   "e": "Azure Government is a sovereign cloud: a physically isolated instance of Azure operated by screened US personnel for government workloads. Region pairs and availability zones exist inside the public cloud, so they cannot provide the required separation.",
   "d": 2
  },
  {
   "id": 48,
   "t": "regions",
   "x": "An architect is explaining why most Azure regions are paired with a second region in the same geography. Which capabilities do region pairs provide? (Select TWO.)",
   "o": [
    "Automatic distribution of user traffic across both members of the pair",
    "Sequential rollout of planned platform updates so both members are not taken offline together",
    "Replication of every deployed resource to the partner location by default",
    "Prioritized restoration of at least one member if a widespread outage affects both",
    "A shared physical campus that lowers network latency between the two locations"
   ],
   "a": 1,
   "e": "Paired regions receive platform updates sequentially, and when a large outage hits multiple regions Microsoft prioritizes recovering one region of each pair first. Traffic distribution and cross-region replication are not automatic; they require services such as Front Door or GRS storage that you configure yourself.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 49,
   "t": "regions",
   "x": "A healthcare provider is legally required to keep patient records on infrastructure physically located in Germany. Which deployment decision satisfies this obligation?",
   "o": [
    "Turn on geo-redundant storage to keep an extra copy of each record",
    "Create all resources in one resource group so their data stays together",
    "Select an Azure region whose datacenters reside within that country",
    "Use a management group to prevent users outside the country from signing in"
   ],
   "a": 2,
   "e": "Data residency is controlled by region selection: choosing a region inside the required country keeps data on infrastructure there. Resource groups and management groups are organizational containers and do not determine where data is physically stored.",
   "d": 2
  },
  {
   "id": 50,
   "t": "availability-zones",
   "x": "Within a supported Azure region, what does an availability zone consist of?",
   "o": [
    "One or more datacenters with independent power, cooling, and networking",
    "A partner region kept at least 300 miles away for disaster recovery",
    "A server rack dedicated to one customer's virtual machines and disks",
    "A grouping of subscriptions with shared policy and access settings"
   ],
   "a": 0,
   "e": "Each availability zone is made up of one or more datacenters with independent power, cooling, and networking, so a facility-level failure does not take down the whole region. The distant-partner description refers to region pairs rather than zones.",
   "d": 2
  },
  {
   "id": 51,
   "t": "availability-zones",
   "x": "An operations team runs a customer-facing web application on two Azure virtual machines. Management wants the app to keep running even if an entire datacenter in the region loses power, without moving the workload to another region. What should the team do?",
   "o": [
    "Move both virtual machines into separate resource groups",
    "Deploy the virtual machines across different availability zones",
    "Convert the storage account from LRS to GRS replication",
    "Register the workload in a second subscription for redundancy"
   ],
   "a": 1,
   "e": "Availability zones place instances in physically separate datacenters within the same region, so a power failure in one facility leaves the other zone running. Resource groups and subscriptions are logical containers and do not change where the machines physically run.",
   "d": 2
  },
  {
   "id": 52,
   "t": "availability-zones",
   "x": "A workload is deployed across three availability zones in one region. Which event would still disrupt it?",
   "o": [
    "A hardware fault affecting one rack in one of the region's datacenters",
    "A cooling outage that shuts down one datacenter",
    "Scheduled maintenance on a single zone's power systems",
    "A natural disaster that disables the entire region"
   ],
   "a": 3,
   "e": "Zones protect against failures isolated to one facility, such as power, cooling, or hardware faults, because each zone has independent infrastructure. A disaster large enough to take out the whole region defeats zone redundancy, which is why cross-region options such as paired regions exist.",
   "d": 2
  },
  {
   "id": 53,
   "t": "availability-zones",
   "x": "A cloud consultant tells a client that a particular Azure region supports availability zones. What is the minimum number of zones the region provides?",
   "o": [
    "One",
    "Two",
    "Three",
    "Four"
   ],
   "a": 2,
   "e": "Regions that support availability zones provide a minimum of three separate zones, each with independent power, cooling, and networking. This lets platform services maintain quorum and survive the loss of any single zone.",
   "d": 2
  },
  {
   "id": 54,
   "t": "resource-groups",
   "x": "In the Azure resource hierarchy, what is the primary purpose of a resource group?",
   "o": [
    "To combine subscriptions and their resources under one governance scope",
    "To define the billing boundary where invoices are generated",
    "To isolate workloads in physically separate datacenters",
    "To hold related resources that share a common lifecycle"
   ],
   "a": 3,
   "e": "A resource group is a logical container for resources that are typically deployed, updated, and deleted together. Combining subscriptions is the job of management groups, and billing is scoped to the subscription.",
   "d": 2
  },
  {
   "id": 55,
   "t": "resource-groups",
   "x": "A developer finishes a proof-of-concept that used a virtual machine, a storage account, and a database, all deployed into a resource group named poc-rg. What is the fastest way to remove every one of these assets at once?",
   "o": [
    "Delete each of the three assets one at a time",
    "Cancel the subscription that the project runs in",
    "Delete poc-rg, which removes everything it holds",
    "Remove the tags from poc-rg so its contents expire"
   ],
   "a": 2,
   "e": "Deleting a resource group removes all resources inside it in one operation, which is exactly why short-lived projects are grouped this way. Canceling the subscription would also remove everything else billed under it, and tags have no effect on resource lifetime.",
   "d": 2
  },
  {
   "id": 56,
   "t": "resource-groups",
   "x": "A resource group named app-rg was created in the West Europe region. A team member wants to add a virtual machine located in East US to app-rg. What will happen?",
   "o": [
    "The request succeeds because a group's members can run in any region",
    "The request fails because members must match the group's region",
    "The virtual machine is automatically relocated to West Europe",
    "The group's metadata moves to East US to match the newest member"
   ],
   "a": 0,
   "e": "A resource group's region only determines where the group's metadata is stored; the resources inside it can be deployed to any region. This makes it possible to manage a globally distributed application as a single unit.",
   "d": 2
  },
  {
   "id": 57,
   "t": "resource-groups",
   "x": "Which statements accurately describe how resource groups behave? (Select TWO.)",
   "o": [
    "A resource may belong to only one group at any given moment",
    "Groups can be nested several levels deep to model an org chart",
    "Members of a single group can be spread across multiple regions",
    "Deleting a group leaves its member resources running unattached",
    "A group's members are required to share one common pricing tier"
   ],
   "a": 0,
   "e": "Each resource lives in exactly one resource group at a time, though it can be moved, and a group can hold resources deployed to different regions. Groups cannot be nested, and deleting one removes the resources it holds rather than orphaning them.",
   "d": 2,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 58,
   "t": "subscriptions",
   "x": "An IT department wants a clear line where usage charges are aggregated onto a single invoice. Which level of the Azure hierarchy provides this?",
   "o": [
    "Management group",
    "Subscription",
    "Resource group",
    "Resource"
   ],
   "a": 1,
   "e": "Billing is scoped to the subscription: usage across all its resources is aggregated and invoiced at that level. Management groups organize subscriptions for governance, but invoices are not generated there.",
   "d": 2
  },
  {
   "id": 59,
   "t": "subscriptions",
   "x": "A software company runs production and development workloads under one subscription and finds that development experiments keep consuming money intended for production. Which change gives each environment its own spending report and invoice?",
   "o": [
    "Place development workloads in a second subscription",
    "Move development resources into a separate resource group",
    "Tag every development resource with a cost-center label",
    "Create a management group above the current subscription"
   ],
   "a": 0,
   "e": "Invoices are generated per subscription, so separating the environments into different subscriptions cleanly divides both billing and reporting. Resource groups and tags can categorize costs within an invoice but do not produce separate invoices.",
   "d": 2
  },
  {
   "id": 60,
   "t": "subscriptions",
   "x": "Which statement about the relationship between Microsoft Entra tenants and Azure subscriptions is accurate?",
   "o": [
    "Each tenant is limited to one subscription, while a subscription can trust many tenants",
    "Each subscription trusts exactly one tenant, while a tenant can be linked to many subscriptions",
    "Subscriptions and tenants are interchangeable names for the same underlying billing construct",
    "A subscription has to be re-created each time an additional user joins the tenant"
   ],
   "a": 1,
   "e": "A subscription trusts a single Entra tenant for identity, and one tenant commonly holds many subscriptions. The mirrored claim reverses the actual relationship, and tenants handle identity rather than billing.",
   "d": 2
  },
  {
   "id": 61,
   "t": "subscriptions",
   "x": "A growing company currently keeps everything in one Azure subscription. Which situations are solid reasons to create an additional subscription? (Select TWO.)",
   "o": [
    "A workload must be deployed into a region the company has not used before",
    "A business unit needs its charges to appear on a separate invoice",
    "An application requires several virtual machines with the same lifecycle",
    "A team wants to group its resources under a shared set of tags",
    "A regulated workload calls for its own access-control boundary"
   ],
   "a": 1,
   "e": "Subscriptions act as both billing boundaries and access-management boundaries, so separate invoicing and strong access separation each justify a new one. Any existing subscription can already deploy to new regions, and shared lifecycle or tagging needs point to resource groups and tags instead.",
   "d": 2,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 62,
   "t": "management-groups",
   "x": "What is the primary function of Azure management groups?",
   "o": [
    "Bundling virtual machines that should be started and stopped together",
    "Aggregating diagnostic logs from every resource into one workspace",
    "Organizing subscriptions into a hierarchy for shared governance",
    "Scheduling maintenance windows across paired regions"
   ],
   "a": 2,
   "e": "Management groups sit above subscriptions and let you apply policy and role assignments once, inheriting down to every subscription beneath. Starting and stopping machines together relates to resource lifecycle, not governance scope.",
   "d": 2
  },
  {
   "id": 63,
   "t": "management-groups",
   "x": "A governance lead must ensure that 40 subscriptions used by different departments all block the creation of resources outside approved regions, without configuring each subscription individually. What is the most efficient approach?",
   "o": [
    "Apply a read-only lock at the root of every affected subscription",
    "Add a location tag to each resource group in the subscriptions",
    "Enable Defender for Cloud recommendations across the tenant",
    "Assign an Azure Policy to a management group that contains the subscriptions"
   ],
   "a": 3,
   "e": "A policy assigned at a management group is inherited by every subscription under it, which achieves the restriction in one step. Locks prevent changes rather than filter locations, and tags are labels with no enforcement power.",
   "d": 2
  },
  {
   "id": 64,
   "t": "management-groups",
   "x": "Which statement about the management group hierarchy is accurate?",
   "o": [
    "A subscription can sit under two parent management groups at once",
    "The hierarchy supports up to six levels of depth below the root group",
    "Resource groups attach directly to management groups, bypassing subscriptions",
    "Each Microsoft Entra directory contains several separate root management groups"
   ],
   "a": 1,
   "e": "The tree allows six levels of depth, not counting the root management group or the subscription level. Each management group and subscription has exactly one parent, and each directory has a single root group.",
   "d": 2
  },
  {
   "id": 65,
   "t": "management-groups",
   "x": "Which statements about Azure management groups are accurate? (Select TWO.)",
   "o": [
    "Individual resources such as virtual machines are placed directly inside them",
    "A subscription may appear under several management groups simultaneously",
    "A management group can contain other management groups as children",
    "They are intended to replace resource groups in newer deployments",
    "An Azure Policy assigned to one is inherited by every subscription beneath it"
   ],
   "a": 2,
   "e": "Management groups nest to form a hierarchy, and policy or role assignments made at a group flow down to all child groups and subscriptions. Resources live in resource groups, and every subscription has exactly one parent group.",
   "d": 2,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 66,
   "t": "vm-resources",
   "x": "A company places two virtual machines in an availability set within a single Azure region. Which risk does this configuration reduce?",
   "o": [
    "Both machines being unavailable during an outage that affects the entire region",
    "Slow response times for users connecting from distant geographies",
    "Data loss caused when an administrator deletes the parent resource group",
    "Both machines going down at once during host maintenance or a rack-level hardware fault"
   ],
   "a": 3,
   "e": "An availability set spreads the machines across fault domains and update domains inside a datacenter, so a single rack failure or planned host maintenance cannot take down every instance at once. It offers no protection against a full region outage, which requires availability zones or a multi-region design.",
   "d": 2
  },
  {
   "id": 67,
   "t": "compute-resources",
   "x": "A developer has packaged a batch job as a Docker image and wants it to run in Azure within seconds, without provisioning servers or standing up an orchestration cluster. Which service offers the quickest path?",
   "o": [
    "Azure Kubernetes Service",
    "Azure Virtual Machines",
    "Azure Container Instances",
    "Azure App Service"
   ],
   "a": 2,
   "e": "Azure Container Instances runs individual containers on demand with per-second billing and no cluster or server management, making it the fastest way to launch a single containerized job. Azure Kubernetes Service targets the same container workloads but requires deploying and operating a cluster first.",
   "d": 2
  },
  {
   "id": 68,
   "t": "networking-resources",
   "x": "A small business needs to connect its only office to an Azure virtual network. The link must be encrypted and may ride over the office's existing internet connection to keep costs down. Which option satisfies these requirements?",
   "o": [
    "A site-to-site VPN gateway connection",
    "An ExpressRoute circuit",
    "Virtual network peering",
    "An Azure DNS private zone"
   ],
   "a": 0,
   "e": "A site-to-site VPN builds an encrypted IPsec tunnel between the office's VPN device and an Azure VPN gateway, traveling over the existing internet circuit at low cost. ExpressRoute provides a separate private circuit through a connectivity provider, which avoids the internet but adds cost the scenario is trying to avoid.",
   "d": 2
  },
  {
   "id": 69,
   "t": "endpoints",
   "x": "A developer provisions an Azure SQL database and leaves the networking settings at their defaults. How do client applications reach the new database?",
   "o": [
    "Through a public endpoint with a name resolvable from the internet",
    "Through a private IP address drawn from the developer's virtual network",
    "Through a VPN tunnel that Azure creates during provisioning",
    "Only from virtual machines inside the same resource group"
   ],
   "a": 0,
   "e": "Azure platform services expose a public endpoint by default, so clients connect to an internet-resolvable address and are then checked against authentication and firewall rules. Getting a private IP inside a virtual network only happens when someone deliberately adds a private endpoint.",
   "d": 2
  },
  {
   "id": 70,
   "t": "serverless",
   "x": "Whenever a message lands in a queue, a short piece of code must run to process it. The developer wants to pay only for execution time and avoid maintaining any servers. Which service matches this model?",
   "o": [
    "Azure Virtual Machines",
    "Azure Functions",
    "Azure Container Instances",
    "Azure App Service"
   ],
   "a": 1,
   "e": "Azure Functions is event-driven compute that fires in response to triggers such as queue messages and, on the consumption plan, bills only for the time the code runs. Azure Container Instances also bills granularly, but it runs containers you start yourself rather than code launched automatically by a trigger.",
   "d": 2
  },
  {
   "id": 71,
   "t": "vm-resources",
   "x": "A team migrates an on-premises application onto Azure virtual machines. Under the shared responsibility model, which tasks remain with the team after the move? (Select TWO.)",
   "o": [
    "Replacing failed physical disks in the hosts that run the machines",
    "Applying operating system security updates to the guest OS",
    "Maintaining power and cooling for the datacenter facilities",
    "Configuring the guest firewall and the installed applications",
    "Patching the hypervisor software on the underlying hosts"
   ],
   "a": 1,
   "e": "With infrastructure as a service, Microsoft maintains the physical hosts, facility, and hypervisor, while the customer keeps everything inside the guest: the operating system, its updates, firewall configuration, and installed applications. Hardware repair and hypervisor patching are cloud-provider duties, so they do not transfer to the team.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 72,
   "t": "compute-resources",
   "x": "An engineering group operates about 40 containerized microservices that need automated placement, self-healing, rolling upgrades, and scaling across a shared pool of compute. Which service is purpose-built for orchestrating this workload?",
   "o": [
    "Azure Container Instances",
    "Azure Kubernetes Service",
    "Azure App Service",
    "Azure Functions"
   ],
   "a": 1,
   "e": "Azure Kubernetes Service delivers managed Kubernetes, whose core job is orchestration: scheduling containers onto nodes, restarting failed ones, and rolling out upgrades across a fleet. Azure Container Instances runs containers one at a time and lacks the scheduling and self-healing features a large microservice estate needs.",
   "d": 2
  },
  {
   "id": 73,
   "t": "networking-resources",
   "x": "A hospital transfers large medical-imaging datasets to Azure and must use a connection that does not traverse the public internet while providing consistent, high throughput. Which connectivity option should it select?",
   "o": [
    "A point-to-site VPN",
    "A site-to-site VPN",
    "Virtual network peering",
    "An ExpressRoute circuit"
   ],
   "a": 3,
   "e": "ExpressRoute is a dedicated private connection established through a connectivity provider, so traffic bypasses the public internet and bandwidth is predictable, which suits large recurring transfers. Both VPN options encrypt traffic but still send it across the public internet, failing the no-internet requirement.",
   "d": 2
  },
  {
   "id": 74,
   "t": "endpoints",
   "x": "After a security review, an insurer must ensure that traffic from its application servers to Azure Key Vault stays off the public internet, and that the vault stops accepting connections from public addresses. What should be deployed?",
   "o": [
    "A network security group rule permitting outbound HTTPS from the servers",
    "A read-only resource lock on the vault",
    "A private endpoint for the vault in the application subnet",
    "A private DNS zone that resolves the vault's name to an internal address"
   ],
   "a": 2,
   "e": "A private endpoint gives Key Vault a network interface with a private IP inside the virtual network, so traffic travels the Microsoft backbone and public network access can then be turned off. A private DNS zone only changes how the name resolves; on its own it creates no private path and does nothing to block public connections.",
   "d": 2
  },
  {
   "id": 75,
   "t": "serverless",
   "x": "An IoT platform processes sensor readings that arrive in unpredictable bursts, with hours of silence in between. Management wants compute charges to drop to zero during the quiet periods. Which behavior of the Azure Functions consumption plan supports this?",
   "o": [
    "Reserved capacity is purchased up front in exchange for a discounted hourly rate",
    "A flat monthly fee covers an unlimited number of function executions",
    "Instances scale out as events arrive and billing stops when nothing is running",
    "Charges accrue per core allocated to a dedicated virtual machine each hour"
   ],
   "a": 2,
   "e": "The consumption plan allocates instances only while events are being processed and bills by execution count and duration, so idle hours cost nothing. Prepaid reserved capacity and per-core hourly charges describe commitment-based or infrastructure-style billing, both of which keep costing money while the workload sits idle.",
   "d": 2
  },
  {
   "id": 76,
   "t": "vm-resources",
   "x": "A retail site's web tier runs on a fleet of identical servers in Azure. Traffic triples during holiday promotions and drops off afterward, and the operations team wants instances added and removed automatically based on demand. Which service should host the web tier?",
   "o": [
    "Availability sets",
    "Virtual Machine Scale Sets",
    "Azure Dedicated Host",
    "Azure Virtual Desktop"
   ],
   "a": 1,
   "e": "Virtual Machine Scale Sets manage a group of load-balanced, identically configured instances and can grow or shrink the group automatically using autoscale rules tied to demand. Availability sets improve resilience by spreading instances across fault and update domains but have no mechanism for changing instance count.",
   "d": 2
  },
  {
   "id": 77,
   "t": "compute-resources",
   "x": "Which Azure compute services let a team run application code without managing the underlying operating system? (Select THREE.)",
   "o": [
    "Azure Virtual Machines",
    "Azure Functions",
    "Azure Dedicated Host",
    "Azure App Service",
    "Azure Container Instances"
   ],
   "a": 1,
   "e": "Functions, App Service, and Container Instances are managed platforms: the team supplies code or a container image and Microsoft maintains and patches the operating system underneath. Azure Virtual Machines and Azure Dedicated Host are infrastructure offerings where the customer administers the guest operating system directly.",
   "d": 2,
   "as": [
    1,
    3,
    4
   ]
  },
  {
   "id": 78,
   "t": "networking-resources",
   "x": "A company registers example-branding.com through a third-party registrar. The operations team wants to host the zone in Azure so its records are managed with the same tooling, credentials, and APIs as their other resources. Which service should they use?",
   "o": [
    "Azure Traffic Manager",
    "Azure Front Door",
    "Azure DNS",
    "Azure Load Balancer"
   ],
   "a": 2,
   "e": "Azure DNS hosts zones and answers record queries from Azure's global name-server infrastructure, managed through the same portal, roles, and APIs as other Azure resources. Azure Traffic Manager also works at the name-resolution layer, but it steers users among application endpoints rather than hosting a purchased domain's zone.",
   "d": 2
  },
  {
   "id": 79,
   "t": "endpoints",
   "x": "A team creates a private endpoint for a storage account and then disables the account's public network access. What is the resulting connectivity behavior?",
   "o": [
    "Every connection attempt fails until a service endpoint is also added to the subnet",
    "Clients that present a valid account key continue connecting from any location",
    "The account switches to read-only mode for every client that connects",
    "Requests from the internet are refused, but clients on the connected network still reach the account"
   ],
   "a": 3,
   "e": "Network rules are evaluated before authorization, so once public access is off, internet-sourced requests are rejected even when they carry valid credentials, while traffic arriving through the private endpoint continues normally. Valid account keys cannot override the network restriction, which is exactly the protection this design provides.",
   "d": 2
  },
  {
   "id": 80,
   "t": "serverless",
   "x": "In Azure, what does the term serverless most accurately describe?",
   "o": [
    "Code that executes in each client's browser rather than in a datacenter",
    "Compute where the platform provisions and scales the machines behind the scenes as events demand",
    "Applications that run directly on network hardware without an operating system",
    "Workloads hosted on customer-owned hardware racked inside a Microsoft facility"
   ],
   "a": 1,
   "e": "Servers still exist in serverless computing, but the cloud provider handles provisioning, scaling, and maintenance invisibly while the customer supplies code and pays per use. Customer-owned hardware in a provider facility describes colocation, which is close to the opposite of handing infrastructure concerns to the platform.",
   "d": 2
  },
  {
   "id": 81,
   "t": "vm-resources",
   "x": "A consultancy hires seasonal contractors who work from personal laptops. IT must deliver a complete corporate Windows session, with company apps preinstalled, streamed from the cloud to any device. Which service provides this?",
   "o": [
    "Azure Virtual Desktop",
    "Azure Bastion",
    "Azure App Service",
    "Virtual Machine Scale Sets"
   ],
   "a": 0,
   "e": "Azure Virtual Desktop streams full Windows sessions and published apps from cloud-hosted session hosts to any device, which fits equipping contractors on personal laptops. Azure Bastion also provides remote access, but it is an administrative browser gateway for reaching your own machines over RDP or SSH, not a managed desktop-delivery platform.",
   "d": 2
  },
  {
   "id": 82,
   "t": "compute-resources",
   "x": "A startup needs to host a customer-facing web application and its REST API. The team wants built-in TLS certificates, custom domains, and autoscale, without administering an operating system. Which option fits?",
   "o": [
    "Azure Virtual Machines",
    "Azure Virtual Desktop",
    "Azure Container Instances",
    "Azure App Service"
   ],
   "a": 3,
   "e": "Azure App Service is a managed web-hosting platform that bundles TLS certificates, custom domain binding, and autoscaling while Microsoft maintains the underlying operating system. Azure Container Instances can run a web workload in a container, but it lacks those integrated web-hosting features and autoscale rules.",
   "d": 2
  },
  {
   "id": 83,
   "t": "networking-resources",
   "x": "Which statements about Azure virtual networks and their subnets are accurate? (Select TWO.)",
   "o": [
    "A virtual network automatically spans every region within its geography",
    "Resources in different subnets of the same virtual network can communicate by default",
    "Traffic between two subnets in one virtual network is routed over the public internet",
    "Each subnet can be placed in a different region from its parent virtual network",
    "Peering can connect virtual networks in different regions across the Microsoft backbone"
   ],
   "a": 1,
   "e": "Within a single virtual network, subnets exchange traffic by default and that traffic stays on Azure's private network, never touching the public internet. A virtual network and all of its subnets live in one region, and global virtual network peering is what links networks in different regions privately over the Microsoft backbone.",
   "d": 2,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 84,
   "t": "endpoints",
   "x": "Which statements accurately compare public and private endpoints for Azure platform services? (Select TWO.)",
   "o": [
    "A public endpoint exposes the service at an address reachable over the internet",
    "A public endpoint requires an ExpressRoute circuit before clients can connect",
    "A private endpoint routes its traffic through a VPN gateway deployed in the network",
    "A private endpoint places a network interface for the service inside a subnet you choose",
    "A public endpoint restricts connections to resources in the service's own region"
   ],
   "a": 0,
   "e": "A public endpoint is an internet-reachable address that any authorized client can use from anywhere, while a private endpoint injects a network interface with a private IP into a subnet you select, connecting the service through Private Link. Neither type depends on an ExpressRoute circuit or a VPN gateway to function.",
   "d": 2,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 85,
   "t": "serverless",
   "x": "Which workload is the strongest candidate for Azure Functions?",
   "o": [
    "Generating a thumbnail whenever a new photo lands in a storage container",
    "Hosting a stateful legacy client-server application that requires a specific OS build",
    "Streaming full Windows desktop sessions to remote employees",
    "Running a database engine that must stay warm around the clock"
   ],
   "a": 0,
   "e": "Short, stateless tasks that fire in response to an event, like producing a thumbnail after each upload, are exactly what Functions is designed for. A database engine that must stay continuously warm defeats the pay-per-execution model, and workloads needing a specific operating system build belong on virtual machines.",
   "d": 2
  },
  {
   "id": 86,
   "t": "storage-accounts",
   "x": "A hospital must retain diagnostic imaging files for ten years to meet regulations. The files are almost never opened, and staff can wait until the next business day when one is requested. Which Blob Storage access tier holds this data at the lowest cost?",
   "o": [
    "Hot",
    "Cool",
    "Cold",
    "Archive"
   ],
   "a": 3,
   "e": "Archive is an offline tier with the lowest storage price, intended for rarely accessed data that can tolerate rehydration taking up to several hours. Cold is the cheapest online tier, but paying for instant access is wasted on files that are read this rarely.",
   "d": 2
  },
  {
   "id": 87,
   "t": "storage-accounts",
   "x": "An insurance platform must keep serving reads from its primary region even if one availability zone there goes down, and it also needs an asynchronous copy in the paired secondary region for disaster recovery. Which redundancy option satisfies both requirements?",
   "o": [
    "Locally redundant storage (LRS)",
    "Geo-zone-redundant storage (GZRS)",
    "Geo-redundant storage (GRS)",
    "Zone-redundant storage (ZRS)"
   ],
   "a": 1,
   "e": "GZRS synchronously spreads copies across three availability zones in the primary region and also replicates asynchronously to the paired region. GRS replicates to the secondary region but keeps all primary copies in a single physical location, so a zone outage disrupts the primary.",
   "d": 2
  },
  {
   "id": 88,
   "t": "storage-accounts",
   "x": "A company is moving an aging line-of-business application onto Azure virtual machines. The app reads shared configuration from an SMB path that several servers mount at the same time. Which storage service is built for this?",
   "o": [
    "Azure Files",
    "Azure Blob Storage",
    "Azure Queue Storage",
    "Azure Disk Storage"
   ],
   "a": 0,
   "e": "Azure Files provides fully managed file shares reachable over SMB, which multiple virtual machines can mount simultaneously. A managed disk attaches to a VM as block storage for that one server rather than acting as a common network location.",
   "d": 2
  },
  {
   "id": 89,
   "t": "databases",
   "x": "A mobile game studio needs to store flexible JSON player profiles and deliver single-digit-millisecond reads to players in North America, Europe, and Asia by replicating to regions near each audience. Which service fits best?",
   "o": [
    "Azure SQL Database",
    "Azure Database for MySQL",
    "Azure Synapse Analytics",
    "Azure Cosmos DB"
   ],
   "a": 3,
   "e": "Azure Cosmos DB is a globally distributed NoSQL database with turnkey multi-region replication and latency guarantees for reads. Azure SQL Database can geo-replicate for regional reads, but it is a relational service centered on fixed schemas rather than schemaless JSON documents.",
   "d": 2
  },
  {
   "id": 90,
   "t": "databases",
   "x": "A retail company wants to move its on-premises SQL Server databases to a service where the platform handles operating system patching, backups, and high availability while developers continue writing T-SQL. Which option should it choose?",
   "o": [
    "SQL Server on Azure Virtual Machines",
    "Azure Database for PostgreSQL",
    "Azure SQL Database",
    "Azure Cosmos DB"
   ],
   "a": 2,
   "e": "Azure SQL Database delivers the SQL Server engine as a PaaS offering, so patching, backups, and availability are handled by the platform. SQL Server on Azure Virtual Machines relocates the workload to the cloud but leaves the guest OS and database maintenance with the customer.",
   "d": 2
  },
  {
   "id": 91,
   "t": "data-migration",
   "x": "A media company needs to move 120 TB of raw footage into Azure Storage within two weeks, but its office uplink tops out at 100 Mbps. What is the most practical transfer approach?",
   "o": [
    "Order an Azure Data Box appliance for offline shipment",
    "Run AzCopy over the existing internet link",
    "Deploy Azure File Sync on the studio servers",
    "Upload the footage with Azure Storage Explorer"
   ],
   "a": 0,
   "e": "At 100 Mbps, 120 TB would take on the order of months to upload, so shipping a Data Box appliance that Microsoft ingests directly into the storage account is the practical route. AzCopy and Storage Explorer are capable tools but remain limited by the link's bandwidth.",
   "d": 2
  },
  {
   "id": 92,
   "t": "data-migration",
   "x": "Before committing to a cloud move, an IT director wants an inventory of the company's on-premises VMware virtual machines, a readiness rating for each one, and estimated monthly run costs. Which service provides this assessment?",
   "o": [
    "Azure Advisor",
    "Azure Migrate",
    "Azure Site Recovery",
    "Azure Arc"
   ],
   "a": 1,
   "e": "Azure Migrate discovers on-premises servers, rates each machine's readiness for Azure, and projects monthly costs before any move happens. Azure Advisor only analyzes resources that already exist in Azure, and Site Recovery replicates workloads for disaster recovery rather than assessing them.",
   "d": 2
  },
  {
   "id": 93,
   "t": "data-migration",
   "x": "An administrator needs to upload a few hundred gigabytes of files from an on-premises server into a blob container over the internet. Which two tools are designed for this job? (Select TWO.)",
   "o": [
    "Azure Data Box",
    "AzCopy",
    "Azure Import/Export",
    "Azure Storage Explorer",
    "Azure Site Recovery"
   ],
   "a": 1,
   "e": "AzCopy is a command-line utility built for high-throughput copies into Azure storage, and Storage Explorer offers a graphical way to perform the same network transfers. Data Box and Import/Export move information by shipping physical devices, which is unnecessary for a few hundred gigabytes on a working link.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 94,
   "t": "entra-id",
   "x": "A new administrator asks what Microsoft Entra ID provides for the organization. Which description is accurate?",
   "o": [
    "A managed domain service that supplies Group Policy and domain join",
    "A cloud-based identity and access management service for users and applications",
    "A firewall service that filters traffic reaching virtual networks",
    "An advisory service that recommends ways to reduce spending"
   ],
   "a": 1,
   "e": "Entra ID is Microsoft's cloud identity and access management platform, covering sign-in, single sign-on, and access control for users and apps. The managed domain description matches Entra Domain Services, a separate offering aimed at legacy authentication protocols.",
   "d": 2
  },
  {
   "id": 95,
   "t": "entra-id",
   "x": "Employees complain about maintaining separate passwords for Microsoft 365, Salesforce, and an internal HR portal. The identity team connects all three applications to Microsoft Entra ID. Which capability eliminates the extra credentials?",
   "o": [
    "Multifactor authentication",
    "Self-service password reset",
    "Single sign-on",
    "Conditional Access"
   ],
   "a": 2,
   "e": "With single sign-on, one Entra ID authentication opens every connected application, so users stop juggling separate credentials per app. Self-service password reset only helps when a password is forgotten; it does not reduce how many passwords exist.",
   "d": 2
  },
  {
   "id": 96,
   "t": "directory-services",
   "x": "A company is lifting a legacy application onto Azure VMs. The app requires Kerberos authentication and machines joined to an Active Directory domain, but the team does not want to deploy or patch domain controllers. What should they use?",
   "o": [
    "Microsoft Entra ID",
    "Microsoft Entra Domain Services",
    "Domain controllers installed on Azure virtual machines",
    "Microsoft Entra External ID"
   ],
   "a": 1,
   "e": "Entra Domain Services provides managed domain controllers with Kerberos, NTLM, LDAP, and Group Policy, and Microsoft patches and maintains them. Standing up domain controllers on Azure VMs would satisfy the application but returns the maintenance burden the team wants to avoid, and Entra ID alone does not offer Kerberos or domain join for legacy apps.",
   "d": 2
  },
  {
   "id": 97,
   "t": "external-identities",
   "x": "A manufacturer wants engineers at a partner firm to open documents in its SharePoint Online sites by signing in with the partner's own credentials, without the manufacturer issuing passwords for them. What should the identity team do?",
   "o": [
    "Create member accounts for each engineer in the manufacturer's tenant",
    "Sync the partner's directory through Microsoft Entra Domain Services",
    "Invite the engineers as B2B collaboration guests",
    "Set up one shared account for the whole partner team"
   ],
   "a": 2,
   "e": "B2B collaboration invites external users as guests who authenticate with their home organization's identity, so the manufacturer never issues or stores passwords for them. Member accounts in the manufacturer's tenant would create a second identity each engineer must maintain.",
   "d": 2
  },
  {
   "id": 98,
   "t": "conditional-access-mfa",
   "x": "The security team wants sign-ins to the payroll app to require an additional verification prompt only when users connect from outside the corporate offices; sign-ins from inside should proceed normally. Which Entra capability implements this location-based rule?",
   "o": [
    "Conditional Access",
    "Security defaults",
    "Network security groups",
    "Azure role-based access control"
   ],
   "a": 0,
   "e": "Conditional Access evaluates signals such as network location during sign-in and can demand extra verification only under the conditions you define. Security defaults turn on baseline protections tenant-wide with no ability to exempt trusted office locations.",
   "d": 2
  },
  {
   "id": 99,
   "t": "conditional-access-mfa",
   "x": "An organization wants to remove the password from daily sign-in entirely. Which three authentication methods support this in Microsoft Entra ID? (Select THREE.)",
   "o": [
    "An SMS code entered after the account password",
    "Windows Hello for Business",
    "Security questions and answers",
    "FIDO2 security keys",
    "The Microsoft Authenticator app"
   ],
   "a": 1,
   "e": "Windows Hello for Business, the Microsoft Authenticator app, and FIDO2 security keys replace the password with biometrics, a device PIN, or a hardware-backed key. An SMS code after a password is standard multifactor authentication that still depends on the password, and security questions support account recovery rather than sign-in.",
   "d": 2,
   "as": [
    1,
    3,
    4
   ]
  },
  {
   "id": 100,
   "t": "rbac",
   "x": "An operations engineer must be able to start, stop, and restart the virtual machines in one resource group, without gaining the right to give other people access. Which assignment follows the principle of least privilege?",
   "o": [
    "Assign the Owner role for the subscription",
    "Assign the Virtual Machine Administrator Login role for the subscription",
    "Add the engineer to a Conditional Access policy",
    "Assign the Virtual Machine Contributor role for that resource group"
   ],
   "a": 3,
   "e": "Virtual Machine Contributor scoped to the one resource group permits managing the VMs there while withholding the right to create role assignments. Owner at the subscription level grants everything, including the ability to delegate access, which far exceeds what the engineer needs.",
   "d": 2
  },
  {
   "id": 101,
   "t": "rbac",
   "x": "A compliance auditor is granted the Reader role at the organization's top-level management group. What can the auditor now view?",
   "o": [
    "Settings of the management group itself, but nothing beneath it",
    "Only resources created after the role was assigned",
    "A single subscription of the auditor's choosing",
    "Every subscription, resource group, and resource under the management group"
   ],
   "a": 3,
   "e": "Role assignments flow down the hierarchy, so Reader at a management group is inherited by every subscription, resource group, and resource beneath it. No approval or opt-in occurs at lower levels, and the assignment covers existing resources as well as ones created later.",
   "d": 2
  },
  {
   "id": 102,
   "t": "zero-trust",
   "x": "A security architect is briefing leadership on adopting a Zero Trust model. Which two principles belong in the briefing? (Select TWO.)",
   "o": [
    "Concentrate protections at the network perimeter",
    "Treat traffic that originates on the corporate LAN as safe",
    "Verify each request explicitly using identity, device, and location signals",
    "Grant broad standing permissions so users face fewer prompts",
    "Design controls as though an intruder already operates inside the environment"
   ],
   "a": 2,
   "e": "Zero Trust rests on verifying every request explicitly, granting least-privilege access, and assuming breach. Trusting internal traffic or leaning on a perimeter reflects the older castle-and-moat model that Zero Trust is designed to replace.",
   "d": 2,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 103,
   "t": "defense-in-depth",
   "x": "An architect protects a web application with several controls at once: DDoS protection at the network edge, network security groups on the subnet, encryption for stored data, and MFA on admin accounts. Which security strategy does this combination illustrate?",
   "o": [
    "Perimeter security",
    "The shared responsibility model",
    "Defense in depth",
    "Zero Trust"
   ],
   "a": 2,
   "e": "Defense in depth stations independent controls at many layers, from the network edge through identity and data, so one failed control does not expose the application. The shared responsibility model divides duties between Microsoft and the customer; it does not describe stacking safeguards.",
   "d": 2
  },
  {
   "id": 104,
   "t": "defender-cloud",
   "x": "A security lead enables Microsoft Defender for Cloud across the company's subscriptions. Which two capabilities does the service deliver? (Select TWO.)",
   "o": [
    "Automatic MFA registration for every user in the tenant",
    "Alerts when suspicious activity is detected against protected workloads",
    "Replication of virtual machines to a secondary region",
    "A secure score with prioritized hardening recommendations",
    "A consolidated view of spending across subscriptions"
   ],
   "a": 1,
   "e": "Defender for Cloud pairs security posture management, surfacing a secure score with prioritized recommendations, with threat protection that raises alerts on suspicious activity. Spending analysis belongs to Cost Management, and cross-region VM replication is handled by Azure Site Recovery.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 105,
   "t": "cost-factors",
   "x": "A team deploys identical D4s v5 virtual machines to two different Azure regions and notices the monthly compute charge differs between them. What explains the difference?",
   "o": [
    "A reservation discount was applied automatically in one region",
    "Bandwidth egress charges are folded into the compute meter",
    "Meter rates for the same VM size differ from region to region",
    "One region's hardware generation carries a billing surcharge"
   ],
   "a": 2,
   "e": "Azure prices each meter per region, so the same VM size can cost more where local infrastructure and energy are pricier. Reservations are only applied after you purchase them, and egress is billed on its own networking meters rather than inside compute.",
   "d": 3
  },
  {
   "id": 106,
   "t": "cost-factors",
   "x": "An application hosted in Azure streams large video files to viewers worldwide. Uploads into Azure are free, yet a networking line item on the bill keeps growing with viewership. What is being billed?",
   "o": [
    "Inbound data transfer from users into Azure",
    "Outbound data transfer from Azure to the internet",
    "Per-transaction request charges on blob storage",
    "Traffic between resources inside the same virtual network"
   ],
   "a": 1,
   "e": "Data leaving Azure is metered as outbound (egress) transfer, so the charge grows as more viewers download the videos. Inbound transfer is free, which is why uploads produce no matching line item on the bill.",
   "d": 3
  },
  {
   "id": 107,
   "t": "cost-factors",
   "x": "An administrator stops and deallocates a virtual machine at the end of each workday. Which charge continues to accrue while the VM is deallocated?",
   "o": [
    "Compute time for the vCPUs assigned to the VM",
    "The Windows Server license bundled in the hourly rate",
    "The temporary disk on the underlying host",
    "Storage for the VM's managed disks"
   ],
   "a": 3,
   "e": "Deallocating releases the compute hardware, so vCPU time and the bundled license charge stop, but the managed disks still occupy storage and keep billing. The temporary disk lives on the host and is discarded at deallocation, so it carries no separate storage charge.",
   "d": 3
  },
  {
   "id": 108,
   "t": "cost-factors",
   "x": "For a single Azure service, which factors change the amount that appears on the monthly bill? (Select TWO.)",
   "o": [
    "The number of tags applied to the resource",
    "The region chosen for the deployment",
    "The display name given to the resource",
    "The amount of metered usage the service records",
    "Which resource group contains the resource"
   ],
   "a": 1,
   "e": "Region determines the meter rate, and consumption determines how many units of that meter are billed. Tags, names, and resource group membership organize and track resources but have no effect on the price of the service itself.",
   "d": 3,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 109,
   "t": "cost-reduction",
   "x": "A company runs a database virtual machine around the clock and expects to keep it for at least three years. Which purchasing option lowers its compute cost the most while the workload keeps running continuously?",
   "o": [
    "Deploy the workload on spot virtual machines",
    "Deallocate the VM outside of business hours",
    "Purchase a reservation for that VM size and region",
    "Move the subscription to a pay-as-you-go offer"
   ],
   "a": 2,
   "e": "A reservation trades a one- or three-year commitment for a large discount, which fits a workload that runs continuously for years. Spot pricing is cheaper per hour, but a spot VM can be evicted whenever Azure needs the capacity, which a production database cannot tolerate.",
   "d": 3
  },
  {
   "id": 110,
   "t": "cost-reduction",
   "x": "An organization owns Windows Server licenses covered by active Software Assurance. Which program lets it apply those licenses to Azure virtual machines to lower the compute rate?",
   "o": [
    "Azure Reservations",
    "Azure Hybrid Benefit",
    "Azure Dev/Test pricing",
    "Microsoft Cost Management"
   ],
   "a": 1,
   "e": "Azure Hybrid Benefit lets you bring Windows Server or SQL Server licenses with Software Assurance to Azure so you pay only the base compute rate. Reservations also reduce compute cost, but they do it through a term commitment, not through licenses you already own.",
   "d": 3
  },
  {
   "id": 111,
   "t": "cost-reduction",
   "x": "A research team needs to run a large batch-processing job that can be interrupted and resumed without losing data. The budget is tight and the completion date is flexible. Which compute option fits best?",
   "o": [
    "Spot virtual machines",
    "Reserved virtual machine instances",
    "Virtual machines with Azure Hybrid Benefit",
    "Virtual machines in an availability set"
   ],
   "a": 0,
   "e": "Spot VMs sell unused Azure capacity at a steep discount in exchange for possible eviction, which suits interruptible batch work with a flexible deadline. Reservations lower cost only through a long-term commitment, and availability sets address resiliency rather than price.",
   "d": 3
  },
  {
   "id": 112,
   "t": "cost-reduction",
   "x": "After reviewing utilization data, an administrator finds several virtual machines averaging under 10 percent CPU. Which actions directly reduce spend on these workloads? (Select TWO.)",
   "o": [
    "Resize the VMs to smaller sizes that match the observed load",
    "Move the VMs into a single dedicated resource group",
    "Deallocate the VMs during the hours they sit idle",
    "Apply a CanNotDelete lock to each VM",
    "Tag the VMs with their owning cost center"
   ],
   "a": 0,
   "e": "Right-sizing to a smaller SKU and deallocating during idle hours both cut the metered compute the VMs consume. Regrouping, locking, or tagging the VMs changes how they are organized and protected, not how much they cost.",
   "d": 3,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 113,
   "t": "pricing-calculator",
   "x": "A team is scoping a brand-new workload and needs a cost estimate for specific Azure services, tiers, and regions before anything is deployed or any bill exists. Which tool produces this estimate?",
   "o": [
    "The Azure pricing calculator",
    "Cost analysis in Microsoft Cost Management",
    "Azure Advisor",
    "Azure Monitor metrics"
   ],
   "a": 0,
   "e": "The pricing calculator models costs from planned service selections before deployment. Cost analysis and Monitor report on resources that already exist, and Advisor recommends improvements to running environments.",
   "d": 3
  },
  {
   "id": 114,
   "t": "pricing-calculator",
   "x": "A solution architect is designing a new workload that will use App Service, Azure SQL Database, and a storage account. Before anything is deployed, the architect needs an estimate of the monthly charges for the chosen configuration. Which tool should be used?",
   "o": [
    "Azure Advisor cost recommendations",
    "The Azure pricing calculator",
    "Cost analysis in Microsoft Cost Management",
    "Azure Migrate"
   ],
   "a": 1,
   "e": "The pricing calculator produces a pre-deployment estimate from the planned services and tiers. Advisor and Cost Management work on resources that already exist and spend that has already accrued, and Azure Migrate assesses existing workloads for migration.",
   "d": 3
  },
  {
   "id": 115,
   "t": "pricing-calculator",
   "x": "An architect is building a pre-deployment estimate in the Azure pricing calculator. Which inputs drive the estimate? (Select TWO.)",
   "o": [
    "The services and tiers planned for the solution",
    "Invoice history from an existing subscription",
    "The regions where the resources will run",
    "Utilization metrics collected by Azure Monitor",
    "The tenant’s current Advisor recommendations"
   ],
   "a": 0,
   "e": "Pricing-calculator estimates come from what you plan to deploy: the services, their tiers and sizes, and the regions that host them. Invoices, live metrics, and Advisor data describe existing environments and play no part in a pre-deployment estimate.",
   "d": 3,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 116,
   "t": "cost-management",
   "x": "A department head wants an email notification when subscription spending reaches 80 percent of a set monthly amount, without any resources being stopped. What should be configured?",
   "o": [
    "A spending limit applied to the subscription",
    "A policy assignment that denies new deployments",
    "A read-only lock at the subscription scope",
    "A budget with an alert rule in Cost Management"
   ],
   "a": 3,
   "e": "A Cost Management budget can send alert emails at defined thresholds while leaving every resource untouched. A spending limit disables resources when the cap is reached, so it fails the requirement, and policies and locks govern deployments and changes rather than spending notifications.",
   "d": 3
  },
  {
   "id": 117,
   "t": "cost-management",
   "x": "Finance asks which service consumed the most spend last month and how the total trended by resource group. Where can this breakdown be viewed?",
   "o": [
    "Cost analysis in Microsoft Cost Management",
    "The Azure pricing calculator",
    "Azure Service Health",
    "Metrics explorer in Azure Monitor"
   ],
   "a": 0,
   "e": "Cost analysis breaks accrued spend down by service, resource group, region, tag, and time, which answers both questions directly. The pricing calculator only forecasts future configurations and has no view of what a subscription actually spent.",
   "d": 3
  },
  {
   "id": 118,
   "t": "cost-management",
   "x": "Which capabilities does Microsoft Cost Management provide? (Select THREE.)",
   "o": [
    "Create budgets that trigger alerts at spending thresholds",
    "Automatically resize virtual machines that are underutilized",
    "Analyze accrued costs grouped by service, region, or tag",
    "Estimate the cost of replacing an on-premises datacenter",
    "Export cost data on a schedule for external analysis"
   ],
   "a": 0,
   "e": "Cost Management covers budgets with alerts, cost analysis by dimensions such as service or tag, and scheduled exports. It does not resize resources, and estimating a datacenter replacement is migration-planning work, not a Cost Management feature.",
   "d": 3,
   "as": [
    0,
    2,
    4
   ]
  },
  {
   "id": 119,
   "t": "cost-management",
   "x": "A subscription owner sets a budget of 5,000 dollars in Cost Management, and spending reaches that amount in the middle of the month. What happens to the subscription's resources?",
   "o": [
    "The subscription is disabled until the next billing period",
    "Alert notifications are sent and resources continue running",
    "New resource deployments are blocked automatically",
    "Running virtual machines are deallocated to stop charges"
   ],
   "a": 1,
   "e": "Budgets are informational: they raise alerts at the thresholds you define but take no action against resources on their own. Disabling services when credit runs out is the behavior of a spending limit, which is a separate mechanism on credit-based offers.",
   "d": 3
  },
  {
   "id": 120,
   "t": "tags",
   "x": "A company runs resources for several internal departments in a single subscription. Finance wants the monthly charges broken down by department. What is the most direct way to enable this?",
   "o": [
    "Create a separate management group for each internal department",
    "Embed the department name in every resource's naming convention",
    "Tag each resource by department and group costs on that tag",
    "Assign each department a separate directory role in Microsoft Entra ID"
   ],
   "a": 2,
   "e": "A department tag travels with each resource and becomes a grouping dimension in cost analysis, giving finance a per-department breakdown inside one subscription. Management groups organize whole subscriptions, and naming conventions are not a dimension billing tools can aggregate on.",
   "d": 3
  },
  {
   "id": 121,
   "t": "tags",
   "x": "Which statement about resource tags in Azure is accurate?",
   "o": [
    "Tags applied to a subscription propagate to every resource it contains",
    "Resources do not automatically inherit tags applied to their resource group",
    "A single resource can carry no more than one tag name and value",
    "Tags must be assigned when a resource is first created"
   ],
   "a": 1,
   "e": "Tags apply only at the scope where they are set; resources do not pick up tags from their parent resource group or subscription unless a policy copies them down. A resource supports up to 50 tag pairs, and tags can be added or changed at any time after creation.",
   "d": 3
  },
  {
   "id": 122,
   "t": "tags",
   "x": "An operations team wants every newly deployed resource to carry a costCenter tag, and deployments missing it should be flagged or blocked. Which service enforces this requirement?",
   "o": [
    "Role-based access control",
    "Resource locks",
    "Microsoft Cost Management",
    "Azure Policy"
   ],
   "a": 3,
   "e": "Azure Policy can audit or deny resource deployments that lack a required tag, making it the enforcement mechanism for tagging standards. RBAC decides who can perform actions, locks prevent deletion or modification, and Cost Management reports on spend without enforcing anything.",
   "d": 3
  },
  {
   "id": 123,
   "t": "azure-policy",
   "x": "Riverton Insurance must ensure that every new storage account created in any of its 40 subscriptions is deployed only to the Sweden Central region, and it wants non-conforming requests stopped before the account is created. What should the governance team do?",
   "o": [
    "Add a location tag to every subscription and review it quarterly",
    "Assign a policy definition that restricts allowed locations at a management group",
    "Apply a ReadOnly lock to each of the subscriptions",
    "Grant administrators the Contributor role scoped to the Sweden Central region"
   ],
   "a": 1,
   "e": "An Azure Policy allowed-locations rule denies non-compliant deployments before the resource exists, and assigning it at a management group covers every subscription underneath. RBAC controls who can act rather than where resources may be placed, and role assignments cannot be scoped to a region.",
   "d": 3
  },
  {
   "id": 124,
   "t": "azure-policy",
   "x": "An engineer with the Contributor role deploys virtual machines into a subscription regularly. Today one deployment fails with an error stating that the requested VM size is not allowed in this subscription, although other sizes still deploy successfully. What is the most likely cause?",
   "o": [
    "The engineer's role assignment expired partway through the deployment",
    "A resource lock on the subscription is blocking new virtual machines",
    "An Azure Policy assignment restricts the VM SKUs that can be deployed",
    "The subscription has exhausted its total vCPU quota for that region"
   ],
   "a": 2,
   "e": "Azure Policy governs resource properties such as VM SKU and denies non-compliant requests even when the user holds sufficient RBAC permissions. A quota problem would return a quota-exceeded error, and a lock would block every deployment rather than a single size.",
   "d": 3
  },
  {
   "id": 125,
   "t": "azure-policy",
   "x": "A governance lead is reviewing the possible outcomes when Azure Policy evaluates something that fails its conditions. Which outcomes can occur? (Select TWO.)",
   "o": [
    "A new deployment is stopped before the resource is created",
    "An existing resource is reported as non-compliant but left unchanged",
    "The offending resource is deleted after a remediation deadline",
    "The containing subscription is suspended until remediation",
    "The resource is moved into a quarantine resource group"
   ],
   "a": 0,
   "e": "Deny-style effects stop non-compliant deployments, and audit-style effects mark existing resources as non-compliant in compliance reports without altering them. Azure Policy does not delete resources, relocate them, or suspend subscriptions on its own.",
   "d": 3,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 126,
   "t": "resource-locks",
   "x": "After a production storage account was accidentally removed, an operations manager wants administrators to keep adjusting the account's configuration while making sure it cannot be removed again. What should the manager apply?",
   "o": [
    "A ReadOnly lock on the storage account",
    "A CanNotDelete lock on the storage account",
    "The Reader role for all administrators",
    "A mandatory tag on the storage account"
   ],
   "a": 1,
   "e": "A CanNotDelete lock blocks deletion while still permitting configuration changes. A ReadOnly lock would also stop administrators from modifying settings, and tags attach metadata without enforcing anything.",
   "d": 3
  },
  {
   "id": 127,
   "t": "resource-locks",
   "x": "Administrators can still view a storage account's configuration and metrics in the portal, but attempts to regenerate its access keys now fail, and no role assignments have changed recently. What is the most likely cause?",
   "o": [
    "A CanNotDelete lock was applied at the resource group level",
    "The storage account was recently moved to a different subscription",
    "A ReadOnly lock was applied at the resource group level",
    "The account's replication was changed to geo-redundant storage"
   ],
   "a": 2,
   "e": "A ReadOnly lock inherited from the resource group blocks any operation that changes state, and regenerating keys is such an operation, while plain reads keep working. A CanNotDelete lock stops only deletion, so key regeneration would still succeed.",
   "d": 3
  },
  {
   "id": 128,
   "t": "resource-locks",
   "x": "A subscription Owner attempts to delete an unused resource group and the operation is refused, even though the Owner role assignment is confirmed as active. What best explains the refusal?",
   "o": [
    "The Owner role grants access management but not resource removal rights",
    "The resource group inherits a lock applied at the subscription scope",
    "An Azure Policy audit assignment flagged the resource group as non-compliant",
    "A virtual machine inside the group is deallocated and must be started first"
   ],
   "a": 1,
   "e": "Locks restrict operations on top of RBAC, so even an Owner is blocked until the lock is removed, and locks are inherited by child scopes. Audit effects only report compliance, and the power state of contained resources does not prevent group deletion.",
   "d": 3
  },
  {
   "id": 129,
   "t": "purview",
   "x": "Which Microsoft service is designed to map an organization's data estate, catalog data sources, and classify sensitive information across on-premises systems, other clouds, and SaaS applications?",
   "o": [
    "Azure Monitor",
    "Azure Data Factory",
    "Microsoft Defender for Cloud",
    "Microsoft Purview"
   ],
   "a": 3,
   "e": "Purview provides unified data governance, including automated scanning, a searchable catalog, and sensitivity classification across hybrid and multicloud estates. Data Factory moves and transforms data but does not govern or catalog it.",
   "d": 3
  },
  {
   "id": 130,
   "t": "purview",
   "x": "A retailer must locate every place customer payment card numbers are stored across Azure SQL databases, Azure Storage, and an Amazon S3 bucket, and then apply sensitivity labels to what is found. Which service fits this requirement?",
   "o": [
    "Microsoft Purview",
    "Azure Policy",
    "Microsoft Defender for Cloud",
    "Azure Advisor"
   ],
   "a": 0,
   "e": "Purview scans data sources inside and outside Azure, detects sensitive content such as card numbers, and applies classification labels. Azure Policy evaluates resource configurations, not the data stored inside those resources.",
   "d": 3
  },
  {
   "id": 131,
   "t": "arm",
   "x": "A virtual machine can be created from the portal, the CLI, PowerShell, or an SDK, and in every case the request is received by the same underlying service, which authenticates and authorizes it before carrying it out. Which service performs this role?",
   "o": [
    "Microsoft Entra ID",
    "Azure Cloud Shell",
    "Azure Monitor",
    "Azure Resource Manager"
   ],
   "a": 3,
   "e": "Azure Resource Manager is the management layer that every tool and SDK calls, handling authentication, authorization, and routing for each request. Microsoft Entra ID supplies the identities involved but does not receive and execute deployment operations itself.",
   "d": 3
  },
  {
   "id": 132,
   "t": "arm",
   "x": "One engineer automates deployments with the Azure CLI while a teammate uses Azure PowerShell. A security reviewer asks whether the two tools are subject to different permission and compliance checks. What is the accurate answer?",
   "o": [
    "Each tool calls a separate endpoint, so the checks applied can differ between them",
    "The portal applies the full set of checks, while command-line tools apply a reduced set",
    "Both tools submit requests to the same management layer, so the checks are identical",
    "The checks vary with the operating system on which each tool is installed and run"
   ],
   "a": 2,
   "e": "All management requests flow through Azure Resource Manager, which applies RBAC and Azure Policy uniformly no matter which client sent the request. Neither the choice of tool nor its host operating system changes what is enforced.",
   "d": 3
  },
  {
   "id": 133,
   "t": "arm",
   "x": "Every Azure service, from virtual machines to databases, is administered through a single shared control layer. Which capability does this design make possible?",
   "o": [
    "Applying uniform governance, such as tags and access control, to any resource type",
    "Querying data stored in one service directly from any other Azure service",
    "Running every service in all Azure regions at an identical hourly price",
    "Sharing spare compute capacity between unrelated customer subscriptions"
   ],
   "a": 0,
   "e": "Because Azure Resource Manager fronts every service, cross-cutting controls like RBAC, locks, tags, and policy behave consistently across resource types. The control layer standardizes management operations; it does not unify data access, pricing, or capacity.",
   "d": 3
  },
  {
   "id": 134,
   "t": "arm-templates",
   "x": "Which statement describes how an ARM template expresses the infrastructure it deploys?",
   "o": [
    "It declares the intended end state and the platform determines the operations to reach it",
    "It replays a recorded sequence of administrator commands in their original order",
    "It clones a disk image captured from a previously deployed environment",
    "It stores the sign-in credentials needed to configure each resource afterward"
   ],
   "a": 0,
   "e": "Templates are declarative, describing what should exist rather than how to build it, and Resource Manager works out ordering and parallelism. A recorded command sequence describes an imperative script, which is the opposite approach.",
   "d": 3
  },
  {
   "id": 135,
   "t": "arm-templates",
   "x": "A QA team rebuilds an identical five-VM test environment every sprint by following a portal checklist, and small differences keep creeping in between builds. Which change would best eliminate the inconsistencies?",
   "o": [
    "Apply resource locks so the finished environment cannot drift",
    "Assign one senior administrator to perform every rebuild",
    "Review Azure Advisor recommendations after each rebuild completes",
    "Define the environment in a template and deploy from that file each sprint"
   ],
   "a": 3,
   "e": "An infrastructure-as-code definition produces the same result on every deployment, removing the manual variation that causes drift between builds. Locks only freeze what has already been built and cannot make two hand-built environments match.",
   "d": 3
  },
  {
   "id": 136,
   "t": "arm-templates",
   "x": "An operations team that builds infrastructure by hand in the portal is adopting template-based deployments. Which benefits should the team expect? (Select TWO.)",
   "o": [
    "Resources cost less when they are provisioned this way",
    "Environments can be recreated repeatedly with matching results",
    "Role-based access control is no longer required for the deployed resources",
    "Definitions can be code-reviewed and kept under version control",
    "Each provisioning step is entered interactively while the deployment runs"
   ],
   "a": 1,
   "e": "Declarative files give repeatable, consistent deployments and can be versioned and reviewed like any other code. Pricing and access-control requirements are unaffected by how a resource is provisioned, and declarative deployments avoid interactive step-by-step input rather than requiring it.",
   "d": 3,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 137,
   "t": "azure-arc",
   "x": "Contoso runs virtual machines in another public cloud and physical servers in its own datacenter. The IT director wants to apply Azure Policy assignments and role-based access control to these machines alongside native Azure resources, without relocating any workloads. Which service enables this?",
   "o": [
    "Azure Migrate",
    "Azure ExpressRoute",
    "Azure Arc",
    "Azure Site Recovery"
   ],
   "a": 2,
   "e": "Azure Arc projects external servers into Azure Resource Manager so governance and access controls apply to them where they already run. Azure Migrate assesses and moves workloads into Azure, which is exactly the relocation the director wants to avoid.",
   "d": 3
  },
  {
   "id": 138,
   "t": "azure-arc",
   "x": "Which of the following can be brought under Azure governance and management by connecting them through Azure Arc? (Select THREE.)",
   "o": [
    "Linux machines running in a company-owned datacenter",
    "Kubernetes clusters hosted with another cloud provider",
    "Microsoft 365 user mailboxes",
    "SQL Server instances on hardware outside Azure",
    "Power BI reports published to a workspace"
   ],
   "a": 0,
   "e": "Arc extends Azure's control plane to machines, Kubernetes clusters, and SQL Server instances running outside Azure, so tools like Azure Policy and RBAC apply to them. Microsoft 365 and Power BI content is administered through those services' own portals, not through Resource Manager.",
   "d": 3,
   "as": [
    0,
    1,
    3
   ]
  },
  {
   "id": 139,
   "t": "portal-tools",
   "x": "While working at a client office, a consultant needs to run several Azure PowerShell cmdlets, but the client's laptop does not allow any software installation. What is the most practical option?",
   "o": [
    "Install the Az module from the PowerShell Gallery on the laptop",
    "Launch Cloud Shell in the portal and select the PowerShell environment",
    "Install the Azure CLI and translate each cmdlet into an az command",
    "Open Azure Storage Explorer and run the cmdlets from its interface"
   ],
   "a": 1,
   "e": "Cloud Shell runs in the browser with the Az module preinstalled and already authenticated, so nothing touches the local machine. Both installation routes conflict with the laptop's restrictions, and Storage Explorer is a desktop app that does not execute cmdlets.",
   "d": 3
  },
  {
   "id": 140,
   "t": "portal-tools",
   "x": "An administrator prefers managing resources with commands that start with az, such as az group create, and wants the same experience on a Windows desktop and a macOS laptop. Which tool provides this?",
   "o": [
    "Azure PowerShell",
    "Azure Resource Manager",
    "Azure Storage Explorer",
    "Azure CLI"
   ],
   "a": 3,
   "e": "The Azure CLI is the cross-platform command-line tool whose commands begin with az. Azure PowerShell also runs on both operating systems but uses Verb-Noun cmdlets such as New-AzResourceGroup instead.",
   "d": 3
  },
  {
   "id": 141,
   "t": "portal-tools",
   "x": "Which tools let an administrator manage Azure resources from a web browser on a borrowed computer, with nothing installed locally? (Select TWO.)",
   "o": [
    "Az PowerShell module",
    "Azure Cloud Shell",
    "Azure Storage Explorer",
    "Azure portal",
    "Azure CLI"
   ],
   "a": 1,
   "e": "The portal and Cloud Shell are both delivered entirely through the browser, and Cloud Shell even includes CLI and PowerShell tooling pre-authenticated. The Az module, the standalone CLI, and Storage Explorer all require installation on the local machine.",
   "d": 3,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 142,
   "t": "advisor",
   "x": "An administrator reviews the recommendations that Azure Advisor has generated for a subscription. Which set of categories organizes those recommendations?",
   "o": [
    "Plan, Ready, Adopt, Govern, and Manage",
    "Compute, Networking, Storage, Databases, and Identity",
    "Cost, Security, Reliability, Operational excellence, and Performance",
    "Ideate, Prototype, Deploy, Operate, and Optimize"
   ],
   "a": 2,
   "e": "Advisor groups its best-practice findings into five categories: cost, security, reliability, operational excellence, and performance. The other lists describe Cloud Adoption Framework stages or Azure service families, which are not how Advisor organizes its output.",
   "d": 3
  },
  {
   "id": 143,
   "t": "service-health",
   "x": "Which tool informs an administrator about active Azure incidents, upcoming planned maintenance, and advisories that are relevant to the subscriptions they manage?",
   "o": [
    "Azure Monitor",
    "Azure Advisor",
    "Azure Service Health",
    "Azure Resource Health"
   ],
   "a": 2,
   "e": "Service Health tracks platform-level events, including service issues, planned maintenance, and health and security advisories, scoped to the services and regions a subscription uses. Resource Health is the near-miss; it reports the availability of one specific resource rather than platform-wide events.",
   "d": 3
  },
  {
   "id": 144,
   "t": "monitor",
   "x": "A team wants a single service that collects metrics, logs, and diagnostic data from its resources and supports dashboards and alerting on that data. Which service fills this role?",
   "o": [
    "Azure Advisor",
    "Azure Service Health",
    "Azure Arc",
    "Azure Monitor"
   ],
   "a": 3,
   "e": "Azure Monitor is the platform's telemetry pipeline; it gathers metrics and logs from resources and applications and powers visualizations and alerts. Azure Arc projects non-Azure machines into Azure management but does not itself collect and analyze telemetry.",
   "d": 3
  },
  {
   "id": 145,
   "t": "advisor",
   "x": "A finance team wants to find underutilized virtual machines that could be resized or shut down to lower monthly spending. Which tool surfaces these suggestions automatically?",
   "o": [
    "Microsoft Cost Management",
    "Azure Advisor",
    "Azure Monitor",
    "Azure Service Health"
   ],
   "a": 1,
   "e": "Advisor's cost category flags underutilized resources, such as virtual machines that could be resized or deallocated. Cost Management is the tempting alternative, but it analyzes and reports what you spend rather than generating right-sizing suggestions.",
   "d": 3
  },
  {
   "id": 146,
   "t": "service-health",
   "x": "A single virtual machine has become unavailable while identical machines in the same region keep running. Which tool shows whether the Azure platform or a user action caused this specific machine's outage?",
   "o": [
    "Azure Resource Health",
    "Azure Service Health",
    "The Azure status page",
    "Azure Advisor"
   ],
   "a": 0,
   "e": "Resource Health reports the availability of an individual resource and distinguishes platform-initiated problems from user-initiated ones, with a history of past events. Service Health covers service- or region-wide incidents, so it would show nothing for a problem isolated to one machine.",
   "d": 3
  },
  {
   "id": 147,
   "t": "monitor",
   "x": "An engineer must search two weeks of collected virtual machine event logs for a specific error code and chart how often it appeared each day. Where should the engineer perform this search?",
   "o": [
    "In a Log Analytics workspace, using the Kusto Query Language",
    "In Azure Monitor metrics explorer, using a chart filter",
    "In Azure Resource Health, using the availability history view",
    "In the activity log, using the portal's event filter"
   ],
   "a": 0,
   "e": "Collected log data lands in a Log Analytics workspace, where Kusto Query Language can filter on an error code and summarize occurrences by day. Metrics explorer handles numeric time-series values only, and the activity log records control-plane operations rather than in-guest events.",
   "d": 3
  },
  {
   "id": 148,
   "t": "advisor",
   "x": "Azure Advisor flags several virtual machines that do not have backup configured. Under which category does this recommendation appear?",
   "o": [
    "Cost",
    "Performance",
    "Operational excellence",
    "Reliability"
   ],
   "a": 3,
   "e": "Findings that improve resiliency, such as enabling backup or adding redundancy, fall under reliability. Operational excellence is the near-miss; it covers process, deployment, and manageability guidance rather than protection against data loss or downtime.",
   "d": 3
  },
  {
   "id": 149,
   "t": "service-health",
   "x": "How does Azure Service Health differ from the public Azure status page?",
   "o": [
    "It reports the global status of every Azure service for every customer worldwide",
    "It becomes available after a support plan is purchased for the subscription",
    "It publishes incident details only after the incident has been resolved",
    "It scopes incident information to the services and regions a subscription uses"
   ],
   "a": 3,
   "e": "The public status page shows the same global view to everyone; Service Health filters that information to what a subscription actually deploys and supports configurable alerts. It is included at no extra cost and reports incidents while they are still ongoing.",
   "d": 3
  },
  {
   "id": 150,
   "t": "monitor",
   "x": "A development team instruments a web application with Application Insights. Which questions can this telemetry answer? (Select TWO.)",
   "o": [
    "Whether the subscription will stay under its monthly spending limit",
    "Which server-side operations fail most often for users",
    "Whether Microsoft has scheduled maintenance in the hosting region",
    "How long its calls to the backing database typically take",
    "Which resource groups contain resources that sit idle"
   ],
   "a": 1,
   "e": "Application Insights captures request and dependency telemetry, so it can rank failing operations and measure how long database calls take. Spending forecasts come from Cost Management, and maintenance notices arrive through Service Health, not from application telemetry.",
   "d": 3,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 151,
   "t": "advisor",
   "x": "Which operational question is Azure Advisor designed to answer?",
   "o": [
    "Whether deployed resources follow recommended cost, security, and resiliency practices",
    "Whether any Azure region in use is currently experiencing a platform incident",
    "What events an application wrote to its logs during the previous day",
    "Which users signed in from unfamiliar locations during the past week"
   ],
   "a": 0,
   "e": "Advisor continuously evaluates deployed resources against best practices across its five categories and suggests improvements. Questions about active platform incidents belong to Service Health, and log or sign-in investigations belong to Azure Monitor and Entra ID tooling.",
   "d": 3
  },
  {
   "id": 152,
   "t": "service-health",
   "x": "A company runs production workloads in one Azure region. The operations team wants an email whenever Microsoft schedules platform work that could affect those workloads. What should the team configure?",
   "o": [
    "An Azure Monitor metric alert on host CPU utilization",
    "A Service Health alert that notifies an action group",
    "A Microsoft Cost Management budget alert on the subscription",
    "An Azure Advisor recommendation digest delivered weekly"
   ],
   "a": 1,
   "e": "Service Health alerts fire on planned maintenance, service issues, and advisories for the regions and services you select, and the linked action group delivers email or other notifications. Metric alerts respond to resource telemetry, not to Microsoft's maintenance schedule.",
   "d": 3
  },
  {
   "id": 153,
   "t": "monitor",
   "x": "When average CPU on a production virtual machine stays above 90 percent for ten minutes, an on-call engineer should receive an SMS and a webhook should open a ticket. What should be configured?",
   "o": [
    "An activity log alert scoped to the machine's resource group",
    "A metric alert rule that notifies an action group",
    "A Service Health alert filtered to the machine's region",
    "A Resource Health alert on the machine's availability state"
   ],
   "a": 1,
   "e": "Metric alert rules evaluate telemetry such as CPU against a threshold and hand off notifications and automation, including SMS and webhooks, to an action group. The other alert types react to control-plane events, platform incidents, or availability changes rather than performance thresholds.",
   "d": 3
  },
  {
   "id": 154,
   "t": "advisor",
   "x": "How does Azure Advisor behave? (Select TWO.)",
   "o": [
    "It requires an agent on each virtual machine before analysis can begin",
    "It bills the subscription a fee for each recommendation it generates",
    "It provides personalized suggestions based on configuration and usage patterns",
    "It modifies resource configurations on its own as soon as findings appear",
    "Its security findings come from an integration with Microsoft Defender for Cloud"
   ],
   "a": 2,
   "e": "Advisor analyzes configuration and usage telemetry at no extra charge and without agents, and its security category surfaces findings from Defender for Cloud. It presents recommendations for review; administrators decide whether to remediate, postpone, or dismiss each one.",
   "d": 3,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 155,
   "t": "service-health",
   "x": "Which events would appear in Azure Service Health for a company's subscription? (Select TWO.)",
   "o": [
    "A virtual machine that an administrator deallocated during troubleshooting",
    "Notification that upcoming maintenance will restart some virtual machines",
    "A spike in unhandled exceptions recorded by a web application's telemetry",
    "A suggestion to move rarely accessed blobs to a cooler storage tier",
    "An ongoing platform incident affecting databases in a region the company uses"
   ],
   "a": 1,
   "e": "Service Health surfaces Microsoft-side events: active service issues, planned maintenance, and advisories relevant to your deployments. Actions taken by your own administrators, application exceptions, and optimization suggestions belong to Resource Health, Application Insights, and Advisor respectively.",
   "d": 3,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 156,
   "t": "monitor",
   "x": "Which of the following are capabilities of Azure Monitor? (Select THREE.)",
   "o": [
    "Collecting platform metrics from resources as soon as they are deployed",
    "Recommending reserved capacity purchases to reduce compute spending",
    "Running log queries against data stored in a Log Analytics workspace",
    "Publishing advance notice of upcoming maintenance for a region",
    "Routing alert notifications to email, SMS, and webhooks through action groups"
   ],
   "a": 0,
   "e": "Azure Monitor automatically collects platform metrics, stores log data for Kusto queries in Log Analytics, and fires alerts that action groups turn into notifications or automation. Purchase recommendations come from Advisor, and maintenance notices come from Service Health.",
   "d": 3,
   "as": [
    0,
    2,
    4
   ]
  },
  {
   "id": 157,
   "t": "advisor",
   "x": "An operations lead wants proactive, personalized recommendations for reducing spend, improving reliability, and tightening security across a subscription’s existing resources. Which Azure tool is built for this?",
   "o": [
    "Azure Advisor",
    "Azure Service Health",
    "Azure Monitor alerts",
    "The Azure pricing calculator"
   ],
   "a": 0,
   "e": "Advisor analyzes deployed resources and issues recommendations across cost, security, reliability, operational excellence, and performance. Service Health reports platform incidents, Monitor alerts fire on metrics you define, and the pricing calculator estimates future deployments.",
   "d": 3
  },
  {
   "id": 158,
   "t": "service-health",
   "x": "Microsoft announces that an API version used by one of a company's deployed services will retire next year, and customers must migrate before that date. Under which Service Health category does this appear?",
   "o": [
    "A service issue",
    "Planned maintenance",
    "A health advisory",
    "A security advisory"
   ],
   "a": 2,
   "e": "Health advisories communicate changes that require customer action, such as feature or API retirements, when nothing is actively broken. A service issue is an ongoing incident, and planned maintenance is scheduled platform work with a defined window.",
   "d": 3
  },
  {
   "id": 159,
   "t": "monitor",
   "x": "After a slow afternoon for a customer-facing web app, the operations team asks two questions: how did the application itself behave, and was there an Azure-side problem at the time? Which pairing addresses both?",
   "o": [
    "Service Health for application behavior; Application Insights for platform incidents",
    "Azure Advisor for application behavior; Resource Health for platform incidents",
    "Application Insights for application behavior; Service Health history for platform incidents",
    "Azure Policy for application behavior; the activity log for platform incidents"
   ],
   "a": 2,
   "e": "Application Insights records request durations, failures, and dependency calls over the slow period, while Service Health's history shows whether a platform incident overlapped it. The reversed pairing is the trap: Service Health knows nothing about application-level performance.",
   "d": 3
  },
  {
   "id": 160,
   "t": "capex-opex",
   "x": "A university research department receives grant funding that may only be spent on tangible equipment the department will own outright and depreciate over several years. How should an accountant classify that spending?",
   "o": [
    "A capital expenditure",
    "An operating expenditure",
    "A consumption-based charge",
    "A deferred subscription fee"
   ],
   "a": 0,
   "e": "Buying an asset the organization owns and writes down across its useful life is capital expenditure. Operating expenditure covers the ongoing cost of using something someone else owns, such as a monthly cloud bill, so it does not describe a one-time purchase of owned equipment.",
   "d": 1
  },
  {
   "id": 161,
   "t": "capex-opex",
   "x": "The CFO of a freight carrier reviews the first month of pay-as-you-go cloud invoices and asks how this style of billing actually behaves. Which two statements are accurate? (Select TWO.)",
   "o": [
    "Compute charges stop once a virtual machine is deallocated",
    "Usage is metered in small units such as seconds or gigabytes",
    "A fixed annual fee is owed whether or not any resource runs",
    "Hardware depreciation for the provider's servers appears as a line item",
    "Capacity must be bought in multi-year blocks before it can be used"
   ],
   "a": 0,
   "e": "Consumption-based billing meters what is actually used and stops charging for compute once a machine is deallocated, which is why the fine-grained units matter. Prepaid multi-year capacity and flat annual fees belong to the traditional purchase model, and the provider's own hardware depreciation is never passed to the customer as a line item.",
   "d": 1,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 162,
   "t": "capex-opex",
   "x": "A sports streaming platform sees traffic triple for six weeks around a tournament and then settle back to normal. Under consumption-based pricing, how does its infrastructure cost behave compared with owning enough servers to cover the peak all year?",
   "o": [
    "It rises during the tournament and falls again afterward",
    "It stays level because peak capacity is reserved in advance",
    "It drops during the tournament as volume discounts take over",
    "It is locked for the year at the highest month recorded"
   ],
   "a": 0,
   "e": "Consumption pricing tracks usage, so the cost curve follows the traffic curve up and then back down. Owning peak-sized hardware means paying for the peak in all fifty-two weeks of the year, which is exactly the waste this model removes; discounts change the price per unit but not the shape of the curve.",
   "d": 1
  },
  {
   "id": 163,
   "t": "capex-opex",
   "x": "An accountant compares a five-year on-site hardware refresh against a monthly subscription to a hosted payroll product. Which comparison is correct?",
   "o": [
    "Hardware is depreciated across its useful life while the subscription is expensed as incurred",
    "Both are capitalized and depreciated on identical schedules over five years",
    "The subscription is capitalized while the hardware is expensed at once",
    "Neither the hardware nor the subscription reaches the operating budget"
   ],
   "a": 0,
   "e": "Owned hardware is a capital purchase carried on the balance sheet and written down over time, while a subscription is an operating cost recognized in the period it is consumed. Capitalizing the subscription and expensing the hardware immediately reverses both treatments, which is the trap in this item.",
   "d": 1
  },
  {
   "id": 164,
   "t": "capex-opex",
   "x": "A retail chain's controller reports that total IT spend fell after migrating, yet each month's invoice differs from the last, which makes budgeting harder than it was under fixed hardware leases. What explains the variation?",
   "o": [
    "Charges follow the resources actually consumed each month",
    "Providers revise their published list prices every week",
    "Depreciation schedules are recalculated every billing period",
    "Support contracts are invoiced only after the fiscal year closes"
   ],
   "a": 0,
   "e": "Consumption-based billing converts a flat, predictable payment into a variable one that mirrors real usage, so a quiet month costs less and a busy month costs more. Published prices are stable, and depreciation no longer applies to resources the customer does not own, so neither accounts for the swing.",
   "d": 1
  },
  {
   "id": 165,
   "t": "cloud-benefits",
   "x": "A game studio finds its matchmaking tier is processor bound, so engineers place forty more identical nodes behind the load balancer rather than moving to larger machines. Which approach did they take?",
   "o": [
    "Scaling out",
    "Scaling up",
    "Failover clustering",
    "Geo-replication"
   ],
   "a": 0,
   "e": "Adding more instances of the same size spreads work horizontally, which is scaling out. Scaling up would mean replacing each node with a more powerful one, and clustering or replication address component failure and data placement rather than added throughput.",
   "d": 1
  },
  {
   "id": 166,
   "t": "cloud-benefits",
   "x": "One operations team files a change request every quarter to add servers before demand grows. Another has rules that add servers as a queue builds and release them overnight, with nobody involved. Which characteristic does only the second team demonstrate?",
   "o": [
    "Elasticity",
    "Scalability",
    "High availability",
    "Fault tolerance"
   ],
   "a": 0,
   "e": "Both teams can grow capacity, so both environments are scalable; only the second grows and shrinks automatically in response to live demand, which is elasticity. Availability and fault tolerance describe surviving failures, not matching capacity to load.",
   "d": 1
  },
  {
   "id": 167,
   "t": "cloud-benefits",
   "x": "An architect separates two goals for a claims portal: keeping requests answered while one server dies mid-transaction, and bringing the service back in another region after a fire destroys the primary facility. Which goal does the second one describe?",
   "o": [
    "Disaster recovery",
    "High availability",
    "Elastic scaling",
    "Cost predictability"
   ],
   "a": 0,
   "e": "High availability keeps a service responding through small, local failures using redundancy that users never notice. Restoring service in a different location after an entire site is lost is disaster recovery, which accepts some downtime and possible data loss in exchange for surviving a far larger event.",
   "d": 1
  },
  {
   "id": 168,
   "t": "cloud-benefits",
   "x": "A grocery chain runs its checkout API as a single instance in one datacenter. A reliability engineer proposes changes so no single hardware fault can interrupt checkout. Which two proposals serve that purpose? (Select TWO.)",
   "o": [
    "Run several instances spread across separate fault-isolated locations",
    "Put the instances behind a load balancer that removes unhealthy ones",
    "Move the instance to a machine with twice the memory and cores",
    "Increase the disk size so more transactions can be cached locally",
    "Schedule nightly restarts of the instance during low traffic hours"
   ],
   "a": 0,
   "e": "Availability comes from redundancy plus something that routes traffic away from a failed component, so multiple instances in separate fault domains behind a health-aware load balancer eliminates the single point of failure. A bigger machine or a bigger disk is still one machine, and restarts do nothing once that machine is gone.",
   "d": 1,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 169,
   "t": "cloud-benefits",
   "x": "Shoppers in Singapore report slow page loads for a storefront whose servers all sit in one North American region, while shoppers near that region see no delay. Which change most directly addresses the complaint?",
   "o": [
    "Deploy copies of the workload in regions near those shoppers",
    "Add processor cores to the existing web servers",
    "Turn on automatic operating system patching for the fleet",
    "Purchase a one-year reserved capacity commitment"
   ],
   "a": 0,
   "e": "The symptom is distance-driven latency, so the fix is serving those users from infrastructure closer to them, which a provider's global region footprint makes practical. Adding cores helps a server short on capacity, and patching or reservations change neither the network path nor the round-trip time.",
   "d": 1
  },
  {
   "id": 170,
   "t": "cloud-benefits",
   "x": "A platform lead wants every new environment created from a template, with configuration enforced automatically instead of applied by hand from a checklist. Which cloud benefit is she pursuing?",
   "o": [
    "Manageability",
    "Elasticity",
    "Multitenancy",
    "Disaster recovery"
   ],
   "a": 0,
   "e": "Template-driven deployment and automated configuration enforcement are manageability benefits: the environment is administered through code and policy rather than manual steps. Elasticity concerns capacity tracking demand, and an environment can be perfectly elastic while still being built and maintained entirely by hand.",
   "d": 1
  },
  {
   "id": 171,
   "t": "cloud-models",
   "x": "A logistics firm runs the same containerized workloads on two competing public providers so it never depends on either one. A rival splits a single workload between its own racks and one provider. Which terms name the two arrangements in that order?",
   "o": [
    "Multi-cloud, then hybrid cloud",
    "Hybrid cloud, then multi-cloud",
    "Private cloud, then public cloud",
    "Multi-cloud, then community cloud"
   ],
   "a": 0,
   "e": "Spreading work across two or more public providers is multi-cloud, while combining infrastructure the organization owns with a public provider as one connected environment is hybrid. The rival's setup includes hardware it owns, so neither half of it is purely public.",
   "d": 1
  },
  {
   "id": 172,
   "t": "cloud-models",
   "x": "An auditor asks a school district who owns and maintains the physical servers that its public cloud workloads execute on. Which answer is correct?",
   "o": [
    "The provider owns and maintains that hardware",
    "The district owns it and the provider only hosts it",
    "Ownership is divided evenly between the two parties",
    "A regulator holds title while the provider operates it"
   ],
   "a": 0,
   "e": "In the public cloud the provider owns, houses, powers, and maintains all physical infrastructure, and customers rent capacity on it. Customer-owned hardware sitting in someone else's building describes colocation or a hosted private cloud instead.",
   "d": 1
  },
  {
   "id": 173,
   "t": "cloud-models",
   "x": "A board member argues that moving to a private cloud will end the need to forecast capacity years ahead. Why is that argument wrong?",
   "o": [
    "The pool is still bounded by hardware the organization buys and installs",
    "Private clouds are unable to pool resources through virtualization",
    "Private clouds bill only for the minutes each workload actually runs",
    "Private clouds require one physical host for every workload deployed"
   ],
   "a": 0,
   "e": "A private cloud gives internal teams self-service access to a pool of resources, but that pool is only as large as the hardware already purchased and racked, so long-lead capacity planning does not go away. Pay-per-minute economics and effectively unlimited headroom are public cloud properties.",
   "d": 1
  },
  {
   "id": 174,
   "t": "cloud-models",
   "x": "A government agency must keep citizen identity records on infrastructure it controls, while a public statistics site it also operates has to absorb unpredictable traffic surges. Which statements about the resulting arrangement are correct? (Select TWO.)",
   "o": [
    "The sensitive records can remain on agency-controlled infrastructure",
    "The public site can draw extra capacity from the provider as load grows",
    "Every workload must move to the provider within a set migration window",
    "The agency gives up the ability to set security policy on its own systems",
    "Both environments have to run identical server hardware to interoperate"
   ],
   "a": 0,
   "e": "A hybrid arrangement exists precisely so data with residency or control requirements stays where it is while bursty workloads draw on provider capacity. Nothing about hybrid forces a full migration, surrenders policy control over systems the agency still owns, or demands matching hardware on both sides.",
   "d": 1,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 175,
   "t": "cloud-models",
   "x": "Two clinics in one health network each keep patient systems in their own buildings but subscribe to the same imaging analysis service in Azure. Which property lets both use shared provider infrastructure without exposing data to each other?",
   "o": [
    "Multitenancy with logical isolation between customers",
    "Dedicated single-tenant hardware assigned per customer",
    "A physical air gap maintained between customer racks",
    "A shared administrator account scoped to the network"
   ],
   "a": 0,
   "e": "Public cloud economics come from many tenants sharing the same physical infrastructure while the platform keeps each tenant's compute, storage, and identity logically separated. Dedicated hardware and air gaps describe the opposite arrangement, and a shared administrator account would defeat isolation entirely.",
   "d": 1
  },
  {
   "id": 176,
   "t": "cloud-models",
   "x": "Before approving a design, a CIO asks how fast each option can hand a project team a working environment: a private cloud the company would build, or subscriptions with a public provider. Which expectation is realistic?",
   "o": [
    "The public option delivers capacity in minutes; the private option waits on procurement",
    "Both options deliver new capacity in minutes once the design is approved",
    "The private option is always faster because no internet link is involved",
    "Neither option supports teams provisioning their own environments"
   ],
   "a": 0,
   "e": "Once a public subscription exists, capacity is a request away, whereas a private cloud can only hand out what has already been bought, delivered, racked, and configured. Self-service provisioning is a defining trait of both models, so the option denying it is wrong on its face.",
   "d": 1
  },
  {
   "id": 177,
   "t": "cloud-models",
   "x": "A retailer already established with one public provider begins deploying selected workloads to a second one. Which motivations legitimately justify that strategy? (Select TWO.)",
   "o": [
    "Reducing dependence on a single vendor's pricing and roadmap",
    "Consuming a capability that only the second provider offers",
    "Guaranteeing that resource names carry over unchanged",
    "Removing the need to manage identities in either environment",
    "Eliminating monitoring work because providers cover each other"
   ],
   "a": 0,
   "e": "Organizations adopt a second provider to avoid lock-in or to reach a capability the first one lacks. The strategy adds operational work rather than removing it: identity, monitoring, and naming now have to be handled twice, in two portals with different terminology.",
   "d": 1,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 178,
   "t": "reliability",
   "x": "During a design review an engineer notes that a request travels through two components in series and that a fault in either one breaks the request. What does that structure imply about the path?",
   "o": [
    "It is less reliable than either component measured alone",
    "It is exactly as reliable as its strongest component",
    "Its reliability is unchanged because the parts are independent",
    "It becomes reliable as soon as monitoring is switched on"
   ],
   "a": 0,
   "e": "Chained dependencies compound risk: the request succeeds only when both parts work, so the path is less reliable than either part on its own. Monitoring shortens the time to notice a fault without preventing one, and a series dependency is the definition of parts that are not independent.",
   "d": 1
  },
  {
   "id": 179,
   "t": "reliability",
   "x": "A retailer writes nightly backups to a storage array standing in the same building as the production servers. An auditor calls the arrangement inadequate. What is the auditor's point?",
   "o": [
    "One site-wide event can destroy the data and the copies together",
    "Nightly backups are impossible to restore onto virtual machines",
    "Backups only count as protection once they are encrypted at rest",
    "Reliability standards require backup jobs to run hourly not nightly"
   ],
   "a": 0,
   "e": "Keeping the only copy inside the same failure domain as the original means a fire, flood, or power event takes both, so the backup offers nothing against the event most likely to require it. Encryption and job frequency matter for other reasons but neither addresses the shared location.",
   "d": 1
  },
  {
   "id": 180,
   "t": "reliability",
   "x": "A parcel delivery platform states it can afford to lose no more than fifteen minutes of shipment data and must be serving customers again within one hour of an outage. Which pair of terms captures those two limits in that order?",
   "o": [
    "Recovery point objective, then recovery time objective",
    "Recovery time objective, then recovery point objective",
    "Mean time between failures, then mean time to repair",
    "Fault domain tolerance, then update domain tolerance"
   ],
   "a": 0,
   "e": "The tolerable quantity of lost data is the recovery point objective, and the deadline for being back in service is the recovery time objective. Reversing the two is the common mistake; the mean-time measures describe how often hardware fails and how long repairs take, not what the business will accept.",
   "d": 1
  },
  {
   "id": 181,
   "t": "reliability",
   "x": "After two outages cost a brokerage several trading hours, the board asks what the phrase designing for failure means in day-to-day practice. Which statements reflect that principle? (Select TWO.)",
   "o": [
    "Assume components will fail and build automatic recovery paths",
    "Rehearse failure scenarios deliberately instead of awaiting real ones",
    "Concentrate the workload on one premium server with better parts",
    "Prevent every failure by requiring stricter approval for changes",
    "Treat redundancy as optional once the provider publishes uptime figures"
   ],
   "a": 0,
   "e": "Designing for failure accepts that individual components will break and puts automatic recovery plus deliberate failure testing in place so users are unaffected. Better hardware, tighter change approval, and published uptime figures reduce or describe risk without giving the system any way to keep working when something does break.",
   "d": 1,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 182,
   "t": "reliability",
   "x": "An application answers quickly on ordinary weekdays but times out every payday when volume triples, and administrators only add servers by hand hours later, so users experience wildly different response times depending on the day. Which quality is this deployment missing?",
   "o": [
    "Predictable performance as load changes",
    "Durable storage of transaction records",
    "Compliance with data residency rules",
    "Role-based control of administrative access"
   ],
   "a": 0,
   "e": "Predictability means users get consistent behaviour whether demand is ordinary or exceptional, which normally comes from load balancing and autoscaling reacting in time rather than hours later. The other qualities matter for their own reasons but none of them would smooth out the payday experience.",
   "d": 1
  },
  {
   "id": 183,
   "t": "service-type-selection",
   "x": "A hospital's imaging vendor ships its product as a container image and asks the hospital to supply only a managed runtime that scales on its own plus a managed database endpoint. Which service category is the hospital being asked to provide?",
   "o": [
    "Platform as a service",
    "Infrastructure as a service",
    "Software as a service",
    "Desktop as a service"
   ],
   "a": 0,
   "e": "A managed runtime and a managed database engine are platform services: the provider operates the operating system, the scaling, and the engine while the customer supplies the workload. Infrastructure as a service would instead hand the hospital virtual machines it has to patch and configure itself.",
   "d": 1
  },
  {
   "id": 184,
   "t": "service-type-selection",
   "x": "A city transit agency runs signal-timing software that its vendor certifies against exactly one Windows Server build, and its engineers install a proprietary driver and pick their own reboot windows. Which category supports these constraints?",
   "o": [
    "Infrastructure as a service",
    "Platform as a service",
    "Software as a service",
    "Function as a service"
   ],
   "a": 0,
   "e": "Pinning an operating system build, loading a driver, and controlling reboot timing all require administrative ownership of the guest operating system, which only infrastructure as a service provides. Platform and function offerings deliberately hide the operating system, so the provider decides its version and patch window.",
   "d": 1
  },
  {
   "id": 185,
   "t": "service-type-selection",
   "x": "A migration team sorts requirements by how much provider abstraction each one tolerates. Which requirements can be satisfied only by infrastructure as a service? (Select TWO.)",
   "o": [
    "Installing a kernel-level agent that the software vendor requires",
    "Choosing the exact hour the guest operating system reboots for updates",
    "Publishing a web application by pushing source code to a managed runtime",
    "Receiving new product features automatically on the vendor's schedule",
    "Letting the provider decide which database engine version is running"
   ],
   "a": 0,
   "e": "Kernel-level agents and control over reboot timing both demand administrative access to the guest, which is unique to infrastructure as a service. The remaining three describe exactly what platform and software offerings take over, so they argue against needing virtual machines rather than for it.",
   "d": 1,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 186,
   "t": "service-type-selection",
   "x": "A tax-filing service runs flat out for ten weeks each spring and nearly idles the rest of the year. The team keeps its own web application code, does not want to rewrite it, and wants the smallest possible operations burden. Which option fits best?",
   "o": [
    "A managed application platform with autoscaling enabled",
    "A fixed fleet of virtual machines left running year-round",
    "A subscription to a finished tax product from a vendor",
    "Physical servers installed in a colocation facility"
   ],
   "a": 0,
   "e": "Keeping their own code rules out buying finished software, and wanting no server maintenance rules out virtual machines and colocated hardware. A managed platform hosts the code, patches everything beneath it, and scales down between filing seasons so the idle months cost far less.",
   "d": 1
  },
  {
   "id": 187,
   "t": "service-type-selection",
   "x": "A team selected a finished subscription product for a workflow that has to execute the company's own code inside the application's request pipeline. Why is that selection a poor fit?",
   "o": [
    "Subscribers cannot deploy arbitrary code into a finished application",
    "Subscription products cannot be reached across the public internet",
    "Subscribers would have to patch the vendor's application servers",
    "Subscription products are not permitted to store customer records"
   ],
   "a": 0,
   "e": "Software as a service arrives complete, so customers configure and integrate but cannot inject their own code into the vendor's runtime; a platform offering is the right category when custom code must run. Internet delivery, vendor-side patching, and customer data storage are all normal parts of the model, not obstacles.",
   "d": 1
  },
  {
   "id": 188,
   "t": "service-type-selection",
   "x": "A review board weighs two proposals for an aging ERP: proposal A replaces it with the vendor's hosted subscription, and proposal B rehosts the current system on cloud virtual machines. How do the ongoing customer duties compare?",
   "o": [
    "Proposal A ends operating system maintenance; proposal B keeps it in-house",
    "Both proposals move operating system patching to the cloud provider",
    "Proposal B ends application upgrade work for the customer entirely",
    "Neither proposal changes who is accountable for patching the guest"
   ],
   "a": 0,
   "e": "Rehosting on virtual machines changes where the system runs, not who administers it, so the customer keeps patching and maintaining the guest operating system. Moving to the vendor's hosted subscription hands the operating system, the application, and its upgrade cycle to the vendor.",
   "d": 1
  },
  {
   "id": 189,
   "t": "service-types",
   "x": "Two engineers at a startup spend most of every sprint patching servers, renewing certificates, and resizing disks rather than building features. They still need somewhere to deploy their own application code. Which category removes most of that overhead?",
   "o": [
    "Platform as a service",
    "Infrastructure as a service",
    "Software as a service",
    "Storage as a service"
   ],
   "a": 0,
   "e": "Platform offerings absorb the operating system, runtime, patching, and certificate plumbing while the team continues deploying its own code. Software as a service would remove even more work but leaves nowhere to run the code the startup writes.",
   "d": 1
  },
  {
   "id": 190,
   "t": "service-types",
   "x": "A school subscribes to a ready-made gradebook it reaches through a browser and writes no code at all. A neighbouring school instead builds its own gradebook and deploys the code to a provider-managed runtime. Which categories describe them in that order?",
   "o": [
    "Software as a service, then platform as a service",
    "Platform as a service, then software as a service",
    "Infrastructure as a service, then platform as a service",
    "Software as a service, then infrastructure as a service"
   ],
   "a": 0,
   "e": "Consuming a finished application over the web is software as a service, while deploying your own code onto a runtime the provider operates is platform as a service. Neither school manages virtual machines, so infrastructure as a service belongs in neither half of the answer.",
   "d": 1
  },
  {
   "id": 191,
   "t": "service-types",
   "x": "An operations manager is drawing the responsibility line for a workload that runs on provider-hosted virtual machines. Which duties stay with the customer? (Select TWO.)",
   "o": [
    "Installing and updating the guest operating system",
    "Configuring the network security rules around the machine",
    "Replacing failed physical disks inside the datacenter",
    "Keeping the hypervisor patched and supported",
    "Securing the building where the servers are racked"
   ],
   "a": 0,
   "e": "With infrastructure as a service the provider's duties stop at the hypervisor, so everything from the guest operating system upward, including the network rules the customer defines, belongs to the customer. Physical hardware, the virtualization layer, and datacenter security never transfer in any service model.",
   "d": 1,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 192,
   "t": "service-types",
   "x": "A manufacturer discovers that its chosen application receives new features and interface changes on the vendor's schedule, with no option to defer an upgrade. Which service category behaves this way?",
   "o": [
    "Software as a service",
    "Platform as a service",
    "Infrastructure as a service",
    "On-premises licensing"
   ],
   "a": 0,
   "e": "In software as a service the vendor operates one current version for every tenant, so upgrade timing is the vendor's decision and no customer stays behind. Traditional on-premises licensing is the opposite: the customer owns the installation and can keep an older release running for years.",
   "d": 1
  },
  {
   "id": 193,
   "t": "service-types",
   "x": "A retailer rehosts fifty existing servers as cloud virtual machines with no changes to the applications. What remains true after the move?",
   "o": [
    "The retailer still owns patching for all fifty guest operating systems",
    "The provider now takes over application configuration for the retailer",
    "Existing software licensing obligations end at the moment of migration",
    "The migrated servers can no longer be resized after they are created"
   ],
   "a": 0,
   "e": "A lift-and-shift migration changes where servers run, not who administers them, so operating system patching, application configuration, and licensing all stay with the customer. Resizing actually becomes easier after the move, since a virtual machine can be changed to a different size on demand.",
   "d": 1
  },
  {
   "id": 194,
   "t": "marketplace",
   "x": "A hospital's IT team wants to deploy a preconfigured third-party firewall appliance image published by a vendor rather than building one from scratch. Where should they obtain the image?",
   "o": [
    "Azure Marketplace",
    "Azure Advisor",
    "Azure Arc",
    "Azure Resource Manager templates"
   ],
   "a": 0,
   "e": "Azure Marketplace is the online store where Microsoft and independent software vendors publish certified images, containers, and managed applications that deploy straight into a subscription. Azure Arc is unrelated: it projects on-premises and other-cloud machines into Azure for management, and it does not distribute vendor software.",
   "d": 2
  },
  {
   "id": 195,
   "t": "marketplace",
   "x": "A procurement officer asks how charges for a partner solution obtained through Azure Marketplace are handled.",
   "o": [
    "They appear on the customer's existing Azure invoice",
    "They must be wired directly to the publisher each month",
    "They are absorbed by Microsoft and never charged",
    "They require a separate Microsoft 365 billing account"
   ],
   "a": 0,
   "e": "Purchases transacted through Azure Marketplace are billed on the same Azure invoice as the customer's other consumption, which is a major reason organizations buy there. Paying the publisher directly is what happens outside Marketplace, and it is exactly the separate procurement path Marketplace is meant to avoid.",
   "d": 2
  },
  {
   "id": 196,
   "t": "marketplace",
   "x": "Which kinds of offerings can a customer find listed in Azure Marketplace? (Select TWO.)",
   "o": [
    "Virtual machine images published by software vendors",
    "Managed applications and container offers from partners",
    "Physical networking hardware shipped to the customer",
    "Credits that reduce Microsoft Entra ID license costs",
    "Refunds issued for unused reserved instance capacity"
   ],
   "a": 0,
   "e": "Marketplace listings are software and services that deploy into Azure, including vendor VM images, containers, managed applications, and solution templates. Physical hardware is not sold there, and billing artifacts such as license credits or reservation refunds are handled in the Azure portal's cost and billing experiences, not as catalog listings.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 197,
   "t": "iot-services",
   "x": "A wind-farm operator needs bidirectional communication with sensors on 50,000 turbines, with a unique identity per device and secure telemetry ingestion. Which service is built for this?",
   "o": [
    "Azure IoT Hub",
    "Azure Event Grid",
    "Azure Service Bus",
    "Azure Notification Hubs"
   ],
   "a": 0,
   "e": "Azure IoT Hub is the managed cloud gateway for device-to-cloud and cloud-to-device messaging, and it maintains a per-device identity registry so each turbine authenticates separately. Azure Event Grid also moves events, but it is an event routing service with no device registry, provisioning, or device twin concept.",
   "d": 2
  },
  {
   "id": 198,
   "t": "iot-services",
   "x": "A facilities company with no software developers wants a hosted application where staff connect building sensors and view dashboards and rules through a browser. Which option fits?",
   "o": [
    "Azure IoT Central",
    "Azure IoT Hub",
    "Azure Sphere",
    "Azure Digital Twins"
   ],
   "a": 0,
   "e": "Azure IoT Central is a software-as-a-service IoT application platform with prebuilt dashboards, rules, and device templates, so a team without developers can run a solution from a browser. Azure IoT Hub is the underlying platform service and would require the company to build the application layer itself.",
   "d": 2
  },
  {
   "id": 199,
   "t": "iot-services",
   "x": "Shop-floor devices at a plant with a metered uplink must have telemetry filtered and aggregated locally so only summarized results travel upward. Which approach addresses this?",
   "o": [
    "Deploy Azure IoT Edge modules on the on-site gateway",
    "Move every device onto Azure IoT Central dashboards",
    "Write all raw readings into Azure Blob Storage first",
    "Replace the gateway with an Azure Virtual WAN hub"
   ],
   "a": 0,
   "e": "Azure IoT Edge runs containerized modules on local hardware so filtering, aggregation, and even AI inference happen before data leaves the site. Writing raw readings to Blob Storage first does nothing for the constrained link, because the full volume still has to cross it.",
   "d": 2
  },
  {
   "id": 200,
   "t": "big-data-analytics",
   "x": "A retailer wants a single analytics service where analysts run familiar T-SQL queries over petabytes of historical sales alongside big-data processing. Which service should it use?",
   "o": [
    "Azure Synapse Analytics",
    "Azure Cosmos DB",
    "Azure Data Lake Storage",
    "Azure Table storage"
   ],
   "a": 0,
   "e": "Azure Synapse Analytics unifies enterprise data warehousing and big-data analytics, exposing both dedicated SQL pools and Spark over very large datasets. Azure Data Lake Storage is an attractive distractor because it holds the same data cheaply, but it is storage and provides no query engine of its own.",
   "d": 2
  },
  {
   "id": 201,
   "t": "big-data-analytics",
   "x": "A data science group already writes Apache Spark notebooks and wants a managed collaborative Spark workspace on Azure. Which service matches that preference?",
   "o": [
    "Azure Databricks",
    "Azure Data Factory",
    "Azure Stream Analytics",
    "Azure Machine Learning"
   ],
   "a": 0,
   "e": "Azure Databricks is the Apache Spark based analytics platform on Azure, offering shared notebooks and managed clusters tuned for collaborative data engineering and data science. Azure Data Factory is the orchestration and data movement service and does not provide an interactive Spark notebook workspace.",
   "d": 2
  },
  {
   "id": 202,
   "t": "big-data-analytics",
   "x": "A logistics team is documenting the analytics services it plans to adopt. Which descriptions are accurate? (Select TWO.)",
   "o": [
    "Azure Data Factory moves and orchestrates data as pipelines",
    "Azure Synapse Analytics queries data-warehouse scale datasets",
    "Azure HDInsight stores encryption keys for analytics workloads",
    "Azure Databricks is a managed relational transaction database",
    "Azure Data Lake Storage sends push alerts to mobile clients"
   ],
   "a": 0,
   "e": "Data Factory is the cloud extract, transform, and load and orchestration service, while Synapse Analytics is the warehouse-scale query and analytics platform. HDInsight is a managed open-source cluster service for Hadoop, Spark, and Kafka, not a key store, and Databricks is a Spark analytics platform rather than a transactional database.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 203,
   "t": "ai-services",
   "x": "A travel booking site wants an assistant that understands typed questions in several languages and answers conversationally, using prebuilt models reached over an API. Which family fits?",
   "o": [
    "Azure AI Services",
    "Azure Synapse Analytics",
    "Azure Logic Apps",
    "Azure Machine Learning"
   ],
   "a": 0,
   "e": "Azure AI Services provide prebuilt language, speech, vision, and decision models that developers call through APIs without training anything. Azure Machine Learning is the tempting alternative, but it is the workspace for building and training custom models, which this team does not need.",
   "d": 2
  },
  {
   "id": 204,
   "t": "ai-services",
   "x": "An insurer scans handwritten claim forms and needs the printed and written text pulled out into structured fields for processing. Which capability applies?",
   "o": [
    "Azure AI Document Intelligence",
    "Azure AI Speech",
    "Azure AI Search",
    "Azure AI Content Safety"
   ],
   "a": 0,
   "e": "Azure AI Document Intelligence extracts text, key-value pairs, and tables from forms and documents, returning structured output an application can consume. Azure AI Search indexes content so users can find it, which is a neighboring problem but does not perform the extraction from scanned pages.",
   "d": 2
  },
  {
   "id": 205,
   "t": "ai-services",
   "x": "A team is separating custom model work from ready-made artificial intelligence. Which statements are accurate? (Select TWO.)",
   "o": [
    "Azure Machine Learning trains and deploys custom models",
    "Azure AI Services expose prebuilt models through APIs",
    "Azure AI Services require customer training data upfront",
    "Azure Machine Learning handles image classification only",
    "Both services run solely on customer-owned physical servers"
   ],
   "a": 0,
   "e": "Azure Machine Learning is the end-to-end platform for training, tracking, and deploying models a team builds itself, while Azure AI Services deliver models Microsoft already trained behind simple API calls. Requiring training data before any use describes the custom path, not the prebuilt one, so that option is reversed.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 206,
   "t": "dedicated-hosts",
   "x": "A financial firm's compliance policy forbids its virtual machines from sharing physical server hardware with any other Azure customer. Which option satisfies that rule?",
   "o": [
    "Azure Dedicated Host",
    "Azure availability sets",
    "Azure Reserved VM Instances",
    "Azure proximity placement groups"
   ],
   "a": 0,
   "e": "Azure Dedicated Host provides physical servers dedicated to one subscription, giving hardware isolation from other tenants. Reserved VM Instances look similar because both involve committing to capacity, but a reservation is purely a billing discount and leaves the VMs on shared hardware.",
   "d": 2
  },
  {
   "id": 207,
   "t": "dedicated-hosts",
   "x": "An administrator using a dedicated host wants patching of the underlying server to line up with the company's approved change window. What does the service allow?",
   "o": [
    "Choosing a maintenance window for the host",
    "Disabling Microsoft maintenance permanently",
    "Relocating the host to another region live",
    "Converting hosted VMs into serverless code"
   ],
   "a": 0,
   "e": "Because the customer controls the physical host, Azure lets an administrator select a maintenance window so platform updates land at a predictable time. Maintenance cannot be switched off altogether, since the platform still has to keep the underlying hardware and firmware current.",
   "d": 2
  },
  {
   "id": 208,
   "t": "dedicated-hosts",
   "x": "An infrastructure architect briefs colleagues on how a dedicated host is charged and who owns its upkeep. Which points belong in that briefing? (Select TWO.)",
   "o": [
    "Billing applies to the host rather than each hosted VM",
    "The physical server is reserved for one customer only",
    "The service patches guest operating systems for you",
    "Hosts move between regions while their VMs keep running",
    "Only Linux virtual machines can be placed on a host"
   ],
   "a": 0,
   "e": "A dedicated host is charged per host, so the price does not change as VMs are added up to its capacity, and the hardware serves a single customer. Guest operating system patching stays a customer responsibility under the shared responsibility model, exactly as it does for ordinary infrastructure as a service VMs.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 209,
   "t": "nsgs",
   "x": "A network engineer must stop inbound TCP port 3389 from reaching any virtual machine in an application subnet while still permitting HTTPS. Which resource applies that rule most directly?",
   "o": [
    "A network security group on the subnet",
    "Azure Firewall placed in a hub network",
    "Azure DDoS Protection on the network",
    "A route table on the gateway subnet"
   ],
   "a": 0,
   "e": "Network security groups hold allow and deny rules matched on source, destination, port, and protocol, and they attach to a subnet or a network interface, which is precisely this requirement. Azure Firewall could also filter the traffic, but it is a separate managed appliance and far more than is needed for simple port control inside one subnet.",
   "d": 2
  },
  {
   "id": 210,
   "t": "nsgs",
   "x": "An administrator finds a custom allow rule at priority 300 and a deny rule covering the same traffic at priority 200 in one network security group. Which rule takes effect?",
   "o": [
    "The rule at priority 200, since lower numbers win",
    "The rule at priority 300, since higher numbers win",
    "Neither, since conflicting rules cancel each other",
    "Both, so traffic is allowed in but denied outbound"
   ],
   "a": 0,
   "e": "Network security group rules are processed in priority order from lowest number to highest, and the first match stops evaluation, so the deny at 200 applies. Assuming higher numbers override is a common reversal, but priority in Azure means order of evaluation, not precedence by size.",
   "d": 2
  },
  {
   "id": 211,
   "t": "nsgs",
   "x": "A junior engineer is learning where a network security group can be attached and what it inspects. Which facts should the engineer take away? (Select TWO.)",
   "o": [
    "They attach to a subnet or a network interface",
    "They filter on source, destination, port, and protocol",
    "They inspect application payloads for malware",
    "They can filter outbound traffic by domain name",
    "They remove the need for role assignments"
   ],
   "a": 0,
   "e": "A network security group is a basic packet filter that can be associated at the subnet or NIC level and evaluates traffic against five-tuple rules. Payload inspection and fully qualified domain name filtering belong to Azure Firewall, which is the managed stateful service built for those deeper controls.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 212,
   "t": "azure-firewall",
   "x": "An enterprise wants a managed stateful service in its hub network that limits outbound traffic to an approved list of fully qualified domain names and logs centrally for all spokes. Which service should it deploy?",
   "o": [
    "Azure Firewall",
    "Network security groups on each spoke",
    "Azure DDoS Protection Standard",
    "Azure Private Link"
   ],
   "a": 0,
   "e": "Azure Firewall is a managed, stateful, cloud network security service that supports application rules with FQDN filtering and sends unified logs to Azure Monitor. Network security groups cannot match on domain names at all, so they cannot express an approved website list.",
   "d": 2
  },
  {
   "id": 213,
   "t": "azure-firewall",
   "x": "A team compares Azure Firewall against network security groups while designing a hub-and-spoke topology. Which statement describes the difference correctly?",
   "o": [
    "Azure Firewall adds threat intelligence and FQDN filtering",
    "Network security groups can filter traffic by domain name",
    "Azure Firewall must be installed on every virtual machine",
    "Network security groups are billed per gigabyte processed"
   ],
   "a": 0,
   "e": "Azure Firewall is a full managed firewall service with threat intelligence based filtering, application rules by domain name, and centralized policy. Network security groups are a free feature of the virtual network that only match on addresses, ports, and protocols.",
   "d": 2
  },
  {
   "id": 214,
   "t": "azure-firewall",
   "x": "Leadership asks why Azure Firewall was selected instead of running a vendor firewall appliance on a pair of virtual machines. What is the strongest justification?",
   "o": [
    "It is delivered as a service with built-in high availability",
    "It removes the need for any routing changes in the network",
    "It is included at no charge with every Azure subscription",
    "It encrypts all data held in the company's storage accounts"
   ],
   "a": 0,
   "e": "As a platform service, Azure Firewall provides high availability and elastic scale without the customer building clusters, sizing VMs, or patching an appliance. Traffic still has to be steered to it with user-defined routes, so claiming no routing changes are required is inaccurate.",
   "d": 2
  },
  {
   "id": 215,
   "t": "ddos-protection",
   "x": "A public voting portal expects politically motivated volumetric floods intended to exhaust its bandwidth and take it offline. Which Azure capability is designed to keep it available?",
   "o": [
    "Azure DDoS Protection",
    "Azure Key Vault",
    "Microsoft Sentinel",
    "Azure Private Link"
   ],
   "a": 0,
   "e": "Azure DDoS Protection defends availability by detecting and scrubbing volumetric, protocol, and resource-layer attacks before they overwhelm the service. Microsoft Sentinel would surface the attack in incidents and alerts, but a SIEM analyzes signals rather than absorbing the flood.",
   "d": 2
  },
  {
   "id": 216,
   "t": "ddos-protection",
   "x": "A startup asks which distributed denial-of-service defense every subscription receives with no configuration and no additional charge. What is accurate?",
   "o": [
    "Infrastructure-level protection is always on for free",
    "Azure Firewall runs by default in every virtual network",
    "Microsoft Sentinel ingests all logs at no cost to you",
    "Web application firewall rules apply to every endpoint"
   ],
   "a": 0,
   "e": "Azure DDoS infrastructure protection is enabled by default on the platform for all customers at no cost, protecting the shared infrastructure. Azure Firewall and web application firewall are separate paid resources that an administrator must explicitly deploy and configure.",
   "d": 2
  },
  {
   "id": 217,
   "t": "ddos-protection",
   "x": "A retailer subscribes to the DDoS Network Protection tier. Which benefits does the paid tier add over the platform default? (Select TWO.)",
   "o": [
    "Attack analytics and mitigation reports for resources",
    "Cost protection credits for scale-out during an attack",
    "Automatic blocking of traffic from outside the country",
    "Encryption of virtual machine managed disks at rest",
    "Free replication of workloads into a paired region"
   ],
   "a": 0,
   "e": "The paid tier adds tuned per-resource mitigation with telemetry, alerting, attack reports, rapid response support, and cost protection for scale-out charges incurred during a documented attack. Blocking traffic by country and encrypting disks are unrelated controls handled by other services.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 218,
   "t": "key-vault",
   "x": "Developers currently keep database connection strings and API tokens inside configuration files that get committed to source control. Which Azure service should hold those values instead?",
   "o": [
    "Azure Key Vault",
    "An Azure storage account",
    "Microsoft Entra ID",
    "Azure App Configuration"
   ],
   "a": 0,
   "e": "Azure Key Vault is the managed store for secrets, keys, and certificates, with access policies or role assignments plus full audit logging of every retrieval. Azure App Configuration is nearby in purpose but holds non-sensitive application settings and defers actual secrets to Key Vault.",
   "d": 2
  },
  {
   "id": 219,
   "t": "key-vault",
   "x": "Which items is Azure Key Vault designed to store and manage? (Select THREE.)",
   "o": [
    "Passwords and connection strings",
    "Cryptographic keys for applications",
    "TLS certificates and renewals",
    "Virtual machine disk images",
    "Routing tables used by subnets"
   ],
   "a": 0,
   "e": "Key Vault has three object types: secrets such as passwords, keys used for cryptographic operations, and certificates whose lifecycle it can manage. Disk images live in a compute gallery or storage, and route tables are virtual network resources, so neither belongs in a vault.",
   "d": 2,
   "as": [
    0,
    1,
    2
   ]
  },
  {
   "id": 220,
   "t": "key-vault",
   "x": "An auditor asks how code running on an Azure virtual machine can read a vault secret without any credential being stored on that machine. What is the answer?",
   "o": [
    "Assign a managed identity and grant it vault access",
    "Embed the vault access key in the configuration file",
    "Place the machine and the vault in one resource group",
    "Enable public network access so any client can connect"
   ],
   "a": 0,
   "e": "A managed identity gives the virtual machine an identity in Microsoft Entra ID that Azure maintains, so the app requests a token at runtime and no secret is ever written to disk. Sharing a resource group grants nothing by itself, because resource groups organize resources and do not confer permissions.",
   "d": 2
  },
  {
   "id": 221,
   "t": "sentinel",
   "x": "A security operations center wants one cloud-native platform that gathers logs from Azure, on-premises servers, and third-party software as a service apps, correlates them into incidents, and runs automated response. Which service should it adopt?",
   "o": [
    "Microsoft Sentinel",
    "Microsoft Defender for Cloud",
    "Azure Monitor alerts",
    "Azure Policy"
   ],
   "a": 0,
   "e": "Microsoft Sentinel is the cloud-native security information and event management and security orchestration, automation, and response platform, built for broad log collection, correlation, hunting, and playbook-driven response. Defender for Cloud is the closest distractor, but its focus is posture management and workload protection rather than enterprise-wide log analytics.",
   "d": 2
  },
  {
   "id": 222,
   "t": "sentinel",
   "x": "An analyst asks how Microsoft Sentinel and Microsoft Defender for Cloud differ in purpose. Which statement is accurate?",
   "o": [
    "Sentinel investigates incidents across many signal sources",
    "Sentinel takes the place of network security group rules",
    "Defender for Cloud is a query language used for hunting",
    "Defender for Cloud protects only on-premises physical servers"
   ],
   "a": 0,
   "e": "Sentinel is the SIEM layer that ingests and correlates signals from across the estate so analysts can investigate and respond. Defender for Cloud sits beneath it, scoring security posture and protecting workloads in Azure, other clouds, and on-premises, so limiting it to physical servers is wrong.",
   "d": 2
  },
  {
   "id": 223,
   "t": "sentinel",
   "x": "A retail bank's security operations staff are drowning in alerts arriving separately from firewalls, Entra ID sign-in logs, and a third-party endpoint agent. They want one place to correlate everything and react without manual triage. What would Microsoft Sentinel give them? (Select TWO.)",
   "o": [
    "Automated playbooks that respond to an incident",
    "Data connectors that ingest many signal sources",
    "Encryption key storage for application secrets",
    "Physical access control for Microsoft facilities",
    "Automatic patching of guest operating systems"
   ],
   "a": 0,
   "e": "Sentinel ships with data connectors for Microsoft and third-party sources and with playbooks built on Azure Logic Apps that automate response when an incident fires. Secret storage belongs to Key Vault, and datacenter physical security is entirely Microsoft's responsibility under the shared responsibility model.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 224,
   "t": "authentication-authorization",
   "x": "A new hire asks a mentor to explain the distinction between authentication and authorization. Which statement is correct?",
   "o": [
    "Authentication proves identity and authorization grants rights",
    "Authentication assigns roles and authorization checks passwords",
    "The two terms describe the same single step at sign-in time",
    "Authorization always happens before authentication completes"
   ],
   "a": 0,
   "e": "Authentication answers who you are by validating credentials, and authorization then answers what you may do by evaluating role assignments and policy. The reversed option swaps the two definitions, which is the mistake this question is designed to catch.",
   "d": 2
  },
  {
   "id": 225,
   "t": "authentication-authorization",
   "x": "An employee signs in successfully but then receives a permission error when opening a storage account. Which process denied that request?",
   "o": [
    "Authorization, because no suitable role was assigned",
    "Authentication, because the credentials were rejected",
    "Multifactor authentication, because a factor was skipped",
    "Federation, because the identity came from elsewhere"
   ],
   "a": 0,
   "e": "The successful sign-in proves authentication worked, so the failure occurred at the authorization step where Azure evaluates role-based access control assignments. Blaming authentication contradicts the scenario, since a rejected credential would have blocked the sign-in itself.",
   "d": 2
  },
  {
   "id": 226,
   "t": "authentication-authorization",
   "x": "A company is documenting its identity flow for an audit. Which statements are accurate? (Select TWO.)",
   "o": [
    "Role-based access control decides what an identity may do",
    "Multifactor authentication strengthens proof of who a user is",
    "Resource groups decide which permissions an app receives",
    "Availability zones authenticate requests from partner firms",
    "Azure Policy issues the access tokens applications present"
   ],
   "a": 0,
   "e": "Role-based access control is the authorization mechanism that scopes what an authenticated principal can do, while multifactor authentication hardens the identity proof itself. Azure Policy governs resource configuration compliance and never issues tokens, and availability zones are a physical resiliency construct with no identity role.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 227,
   "t": "defender-cloud",
   "x": "An operations lead opens Microsoft Defender for Cloud and sees one percentage summarizing how closely subscriptions follow the security recommendations. What is that figure called?",
   "o": [
    "Secure score",
    "Compliance rating",
    "Advisor index",
    "Sentinel workbook"
   ],
   "a": 0,
   "e": "Secure score is the Defender for Cloud measurement that converts outstanding recommendations into a single percentage teams can track over time. Azure Advisor also produces recommendations, but its guidance spans cost, reliability, and performance, and it does not publish this security percentage.",
   "d": 2
  },
  {
   "id": 228,
   "t": "defender-cloud",
   "x": "A hybrid estate includes Amazon Web Services accounts and servers in a company datacenter alongside Azure resources. Which characteristic of Defender for Cloud applies here?",
   "o": [
    "It can assess and protect resources outside Azure",
    "It only watches virtual machines created after setup",
    "It is limited to a single subscription per tenant",
    "It removes the need for endpoint antivirus software"
   ],
   "a": 0,
   "e": "Defender for Cloud is multicloud and hybrid, onboarding AWS and Google Cloud connectors and non-Azure machines through Azure Arc for unified posture and workload protection. It complements rather than replaces endpoint protection, so treating it as an antivirus substitute misstates its role.",
   "d": 2
  },
  {
   "id": 229,
   "t": "defense-in-depth",
   "x": "An architect sketches the layered model for a new platform and marks the innermost ring, the one safeguarded by encryption at rest and in transit. Which ring is it?",
   "o": [
    "The data layer",
    "The perimeter layer",
    "The identity layer",
    "The physical layer"
   ],
   "a": 0,
   "e": "Defense in depth places data at the center, because information is what attackers ultimately want, and encryption protects it even if outer layers are breached. The perimeter layer sits far outside and deals with distributed denial-of-service filtering and edge firewalls.",
   "d": 2
  },
  {
   "id": 230,
   "t": "defense-in-depth",
   "x": "A review notes that locked cages, badge readers, and on-site guards at the facility housing the servers form one ring of the layered model. Which ring do these controls belong to?",
   "o": [
    "Physical security",
    "Network security",
    "Compute security",
    "Application security"
   ],
   "a": 0,
   "e": "Cages, badges, and guards are physical controls that restrict who can touch the hardware, which is the outermost layer of the defense in depth model. Network security is the adjacent layer, but it covers segmentation and traffic filtering rather than access to the building.",
   "d": 2
  },
  {
   "id": 231,
   "t": "directory-services",
   "x": "An administrator compares Microsoft Entra ID with on-premises Active Directory Domain Services. Which statement is accurate?",
   "o": [
    "Entra ID uses SAML and OAuth rather than Kerberos and LDAP",
    "Entra ID organizes objects into forests, trees, and units",
    "Active Directory Domain Services is a cloud-only service",
    "Entra ID needs a domain controller in every region used"
   ],
   "a": 0,
   "e": "Microsoft Entra ID is an internet-scale identity provider built on modern web protocols such as SAML, OAuth, and OpenID Connect, and it has a flat structure rather than a forest hierarchy. Organizational units, trees, and forests belong to on-premises Active Directory, which is why that option is a tempting mix-up.",
   "d": 2
  },
  {
   "id": 232,
   "t": "directory-services",
   "x": "A retail chain keeps staff accounts in its on-premises directory and wants the same usernames and passwords to work for Microsoft 365. Which tool copies those accounts to the cloud?",
   "o": [
    "Microsoft Entra Connect",
    "Microsoft Entra Domain Services",
    "Microsoft Entra ID Protection",
    "Microsoft Entra Permissions Management"
   ],
   "a": 0,
   "e": "Microsoft Entra Connect synchronizes identities from an on-premises directory into Entra ID so users keep one set of credentials. Microsoft Entra Domain Services solves the opposite problem, offering a managed domain in Azure for workloads that still need Kerberos and LDAP.",
   "d": 2
  },
  {
   "id": 233,
   "t": "external-identities",
   "x": "A design agency brings freelance illustrators into its internal review portal and wants them signing in with credentials their own employers already issued. Which capability supports that?",
   "o": [
    "Business-to-business collaboration with guests",
    "Business-to-customer sign-up for consumer apps",
    "Privileged Identity Management for admin roles",
    "Conditional Access for device compliance checks"
   ],
   "a": 0,
   "e": "Business-to-business collaboration in Microsoft Entra External ID adds the freelancers as guest objects that authenticate against their home directory, so the agency issues no passwords. Business-to-customer scenarios target large consumer audiences signing up for a product, which is a different external identity pattern.",
   "d": 2
  },
  {
   "id": 234,
   "t": "external-identities",
   "x": "A gaming studio launches a consumer mobile title and wants players registering with personal email or social accounts on branded sign-up screens. Which identity approach fits?",
   "o": [
    "An external tenant for customer identity",
    "A guest invitation into the corporate tenant",
    "A hybrid join applied to each player device",
    "A management group created per player region"
   ],
   "a": 0,
   "e": "Customer-facing sign-up with social providers and customizable branding is handled by an external tenant in Microsoft Entra External ID, which is designed for consumer scale. Guest invitations suit a handful of named partners and would be unworkable for an open consumer audience.",
   "d": 2
  },
  {
   "id": 235,
   "t": "zero-trust",
   "x": "After adopting the model, a company stops treating its corporate office network as inherently trustworthy. What changes in day-to-day practice?",
   "o": [
    "Every request is verified no matter where it starts",
    "Only remote staff must complete extra verification",
    "Office devices skip policy checks to reduce friction",
    "Firewalls become the sole control guarding resources"
   ],
   "a": 0,
   "e": "Verify explicitly means authenticating and authorizing each request on all available signals, whether it comes from a coffee shop or a desk in headquarters. Exempting the office would recreate the implicit trust boundary that the model is intended to remove.",
   "d": 2
  },
  {
   "id": 236,
   "t": "zero-trust",
   "x": "A design assumes an attacker will eventually obtain a valid credential and get inside. Which control most directly limits how far that intruder can travel?",
   "o": [
    "Segmenting access so identities reach only what they need",
    "Extending the password expiry interval for all accounts",
    "Publishing more internal services to the public internet",
    "Granting standing administrator rights to avoid delays"
   ],
   "a": 0,
   "e": "Assume breach pairs with least privilege and segmentation so a compromised account unlocks a narrow slice of the estate instead of the whole environment. Standing administrator rights do the opposite, handing an intruder broad control the moment a privileged credential is stolen.",
   "d": 2
  },
  {
   "id": 237,
   "t": "databases",
   "x": "A startup needs a relational database that speaks the PostgreSQL protocol while Microsoft handles patching, backups, and scaling of the engine. Which service should it pick?",
   "o": [
    "Azure Database for PostgreSQL",
    "Azure SQL Managed Instance",
    "Azure Cosmos DB for NoSQL",
    "Azure Database Migration Service"
   ],
   "a": 0,
   "e": "Azure Database for PostgreSQL is the managed platform service for that open-source engine, so the team keeps its drivers and queries while Microsoft runs the infrastructure. Azure SQL Managed Instance is also fully managed but runs the SQL Server engine, which would force a rewrite.",
   "d": 2
  },
  {
   "id": 238,
   "t": "governance-hierarchy",
   "x": "Northwind Traders has 12 subscriptions and wants one policy assignment to apply across all of them at once, without repeating the assignment in each. At which level should the assignment be made?",
   "o": [
    "A management group containing all 12 subscriptions",
    "One resource group inside each of the subscriptions",
    "The largest subscription, from which the others inherit",
    "Every individual resource that the rule affects"
   ],
   "a": 0,
   "e": "Management groups sit above subscriptions, and an assignment made there is inherited by every subscription beneath it, so a single assignment covers all 12. Assigning at each resource group would work technically but requires dozens of repeated assignments and misses anything created outside those groups. Subscriptions do not inherit from one another, so designating a primary subscription achieves nothing.",
   "d": 3
  },
  {
   "id": 239,
   "t": "governance-hierarchy",
   "x": "An architect is explaining how settings flow through Azure's four scope levels to a new hire. Which statements are accurate? (Select TWO.)",
   "o": [
    "A resource belongs to exactly one resource group at any time",
    "Resource groups may be nested inside other resource groups",
    "Management groups sit one level below subscriptions",
    "Resources must always match the region of their resource group",
    "Permissions assigned at a subscription flow down to its resource groups"
   ],
   "a": 4,
   "e": "Scopes nest as management group, subscription, resource group, resource, and permissions granted higher up are inherited by everything below, so a subscription-level assignment reaches its resource groups. Each resource lives in exactly one resource group, though it can be moved to another. Resource groups cannot be nested, management groups sit above subscriptions rather than below, and a resource group holds resources from any region because the group's own region only stores its metadata.",
   "d": 3,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 240,
   "t": "governance-hierarchy",
   "x": "During a quarterly cleanup, an engineer deletes a resource group that held a test web app, its App Service plan, and a storage account. What happens to those three items?",
   "o": [
    "Only the web app is deleted and the rest remain",
    "They stay until each one is deleted individually",
    "All three are deleted along with the resource group",
    "They are moved to the subscription's default group"
   ],
   "a": 2,
   "e": "Deleting a resource group deletes every resource inside it, which is why the group is treated as a lifecycle boundary for resources that are created, managed, and retired together. There is no default group that orphaned resources fall into. This is also the reason a CanNotDelete lock is often placed on groups holding production workloads.",
   "d": 3
  },
  {
   "id": 241,
   "t": "blueprints",
   "x": "A managed services provider must stand up a new client environment that always includes the same resource groups, role assignments, policy assignments, and ARM templates as a single repeatable package. Which Azure feature is designed to bundle those artifacts together?",
   "o": [
    "Azure Migrate",
    "Azure Blueprints",
    "Azure Automation",
    "Azure Lighthouse"
   ],
   "a": 1,
   "e": "Azure Blueprints packages multiple artifact types into one definition that can be assigned repeatedly to produce consistent environments. Azure Automation runs runbooks and configuration tasks but does not compose governance artifacts into a deployable package. Azure Lighthouse handles cross-tenant delegated management, which is a different problem from environment provisioning.",
   "d": 3
  },
  {
   "id": 242,
   "t": "blueprints",
   "x": "Which items can be included as artifacts inside an Azure blueprint definition? (Select TWO.)",
   "o": [
    "Microsoft Entra ID user accounts",
    "Role assignments",
    "Policy assignments",
    "Virtual machine backup snapshots",
    "Cost Management budget alerts"
   ],
   "a": 1,
   "e": "A blueprint definition supports four artifact types: resource groups, ARM templates, role assignments, and policy assignments. Backup snapshots are operational data produced after deployment, not something a definition declares. Budget alerts and directory user accounts are configured in Cost Management and Microsoft Entra ID respectively and sit outside the blueprint artifact model.",
   "d": 3,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 243,
   "t": "blueprints",
   "x": "A compliance officer asks whether a deployed environment can be traced back to the definition that produced it, so that drift from the approved standard becomes visible. Which characteristic of Azure Blueprints supports this?",
   "o": [
    "Each deployment writes its own copy and then detaches",
    "Blueprints convert every artifact into a static export",
    "Blueprints run only once and cannot be updated later",
    "Deployed assignments stay connected to the blueprint definition"
   ],
   "a": 3,
   "e": "A blueprint assignment keeps an active relationship with its definition, so the environment that was deployed can be compared against the standard it came from and audited over time. A plain ARM template deployment behaves like the detached option: once it finishes, nothing links the result back to the source. Definitions can also be versioned and reassigned, so the idea that they run only once is wrong.",
   "d": 3
  },
  {
   "id": 244,
   "t": "cloud-adoption-framework",
   "x": "A steering committee asks the IT director what the Microsoft Cloud Adoption Framework actually is before it approves any budget line for it. Which description is accurate?",
   "o": [
    "An automated engine that moves servers into Azure",
    "A compliance certification that customers must earn",
    "Guidance and documented best practices offered at no cost",
    "A paid Azure service billed per subscription each month"
   ],
   "a": 2,
   "e": "The Cloud Adoption Framework is free documentation, tooling, and proven practice guidance published by Microsoft, so there is nothing to purchase or provision. The migration engine option describes Azure Migrate, an actual service that discovers and moves workloads. Confusing guidance with a deployable service is the most common trap on this objective.",
   "d": 3
  },
  {
   "id": 245,
   "t": "cloud-adoption-framework",
   "x": "A manufacturer is at the earliest stages of its cloud journey and has not yet chosen any workloads to move. Which Cloud Adoption Framework activities belong to this early phase? (Select TWO.)",
   "o": [
    "Decommissioning the last on-premises datacenter",
    "Tuning autoscale rules on production workloads",
    "Running a post-migration cost optimization review",
    "Defining business justification and expected outcomes",
    "Building a prioritized digital estate inventory"
   ],
   "a": 3,
   "e": "The Strategy and Plan methodologies come first: agree why the move is happening and what success looks like, then inventory and rank the estate so a migration backlog exists. Retiring a datacenter, tuning autoscale, and reviewing spend after the fact all assume workloads already run in Azure, so they sit in later methodologies such as Migrate and Manage.",
   "d": 3,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 246,
   "t": "cloud-adoption-framework",
   "x": "A hospital group has already migrated several workloads but has no consistent approach to policy, cost control, or security baselines across its teams. Which part of the Cloud Adoption Framework speaks directly to establishing those controls?",
   "o": [
    "The Govern methodology",
    "The Migrate methodology",
    "The Innovate methodology",
    "The Strategy methodology"
   ],
   "a": 0,
   "e": "The Govern methodology addresses guardrails such as cost management, security baselines, resource consistency, and deployment acceleration, which is exactly the gap described. Migrate covers moving existing workloads and Innovate covers building new cloud-native applications, neither of which establishes ongoing controls. Strategy was the phase this organization has already passed.",
   "d": 3
  },
  {
   "id": 247,
   "t": "privacy-statement",
   "x": "A legal analyst wants to know exactly what categories of personal data Microsoft collects from individuals, how that information is used, and what choices people have over it. Which document covers this?",
   "o": [
    "The Data Protection Addendum",
    "The Azure Service Level Agreement",
    "The Microsoft Product Terms",
    "The Microsoft Privacy Statement"
   ],
   "a": 3,
   "e": "The Microsoft Privacy Statement is the public document describing what personal data is collected, why, how it is used, and the controls available to the individual. The Data Protection Addendum is a contractual document about how Microsoft handles an enterprise customer's data as a processor, which is a narrower and different audience. The SLA covers availability commitments and has nothing to do with privacy.",
   "d": 3
  },
  {
   "id": 248,
   "t": "privacy-statement",
   "x": "Which topics are addressed by the Microsoft Data Protection Addendum for enterprise customers? (Select TWO.)",
   "o": [
    "How Microsoft processes and safeguards customer data",
    "Obligations Microsoft accepts regarding data transfers",
    "The uptime percentage guaranteed for each Azure service",
    "The regions where preview features are released first",
    "Discount levels available under a reserved instance"
   ],
   "a": 0,
   "e": "The Data Protection Addendum sets out Microsoft's contractual duties as a data processor, including security measures, breach notification, and the terms governing international data transfers. Uptime guarantees belong to the SLA, preview availability is described in service lifecycle material, and reservation discounts are commercial pricing terms. Each of those lives in a separate document.",
   "d": 3,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 249,
   "t": "privacy-statement",
   "x": "A procurement officer needs the licensing terms and service-specific conditions that govern an organization's use of Microsoft online services, including the security commitments attached to them. Which document should be consulted?",
   "o": [
    "The Well-Architected Framework",
    "The Microsoft Product Terms",
    "The Microsoft Privacy Statement",
    "The Azure support plan comparison"
   ],
   "a": 1,
   "e": "The Microsoft Product Terms, formerly published as the Online Services Terms, carries the licensing conditions and service-specific provisions for commercial online services. The Privacy Statement explains data handling to individuals rather than setting contractual licensing terms. The Well-Architected Framework is technical design guidance and is not a contract at all.",
   "d": 3
  },
  {
   "id": 250,
   "t": "trust-center",
   "x": "An auditor for a regional bank asks for Microsoft's most recent SOC 2 and ISO 27001 audit reports covering Azure. Where can a customer download those reports?",
   "o": [
    "The Service Trust Portal",
    "The Azure Monitor workbook gallery",
    "The Azure Marketplace listings page",
    "The Microsoft Entra admin center"
   ],
   "a": 0,
   "e": "The Service Trust Portal is the repository for independent audit reports, penetration test summaries, and compliance guides that customers can download under their agreement. Azure Monitor workbooks visualize telemetry from a customer's own resources and contain no third-party audit evidence. The Marketplace lists purchasable offers, not attestation documents.",
   "d": 3
  },
  {
   "id": 251,
   "t": "trust-center",
   "x": "Which resources does the Microsoft Trust Center make available to organizations evaluating Azure? (Select TWO.)",
   "o": [
    "A per-subscription list of unattached managed disks",
    "Live incident tickets opened by Microsoft support",
    "Explanations of how Microsoft secures customer data",
    "Region-by-region compliance offering coverage",
    "Real-time CPU metrics from deployed virtual machines"
   ],
   "a": 2,
   "e": "The Trust Center is a public site presenting Microsoft's security, privacy, and compliance posture, including which certifications apply to which services and geographies. Live CPU metrics and unattached disk inventories describe a specific tenant's estate and come from Azure Monitor and Azure Advisor. Support tickets are visible in the Azure portal, not on a public trust site.",
   "d": 3,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 252,
   "t": "trust-center",
   "x": "A public sector customer must confirm whether Azure holds a specific national compliance certification before signing a contract. Which statement about compliance offerings is accurate?",
   "o": [
    "Certifications apply only to preview services",
    "Compliance coverage is decided per subscription",
    "Coverage varies by service and by region",
    "Every Azure service carries every certification"
   ],
   "a": 2,
   "e": "Certifications are earned per service and per geography, so a given attestation may cover some Azure services in some regions and not others, which is why the compliance offering pages break coverage down that way. Assuming blanket coverage across the platform is the classic mistake. Preview services are typically excluded from certifications rather than being the only ones included.",
   "d": 3
  },
  {
   "id": 253,
   "t": "sovereign-regions",
   "x": "A United States federal agency requires cloud workloads to run in datacenters that are physically isolated from the commercial platform and operated by screened personnel holding US citizenship. Which offering meets this requirement?",
   "o": [
    "A private endpoint on a commercial region",
    "Azure Government",
    "A paired region in the same geography",
    "An availability zone within a US region"
   ],
   "a": 1,
   "e": "Azure Government is a sovereign cloud with physically and logically separated infrastructure, its own portal and endpoints, and personnel screening requirements for operations staff. Region pairs and availability zones are resiliency constructs inside the commercial cloud and provide no separation of operators. A private endpoint changes network reachability but leaves the workload in commercial infrastructure.",
   "d": 3
  },
  {
   "id": 254,
   "t": "sovereign-regions",
   "x": "A multinational retailer plans to sell inside mainland China and learns that the local Azure environment is operated by a partner company rather than by Microsoft directly. Which statement about that environment is accurate?",
   "o": [
    "It is a separate cloud with its own accounts and endpoints",
    "It shares subscriptions and identities with global Azure",
    "It is a set of availability zones inside global Azure",
    "It mirrors global Azure with identical service coverage"
   ],
   "a": 0,
   "e": "Azure operated by 21Vianet is physically separated from global Azure, uses distinct portal and API endpoints, and requires its own accounts and subscriptions rather than reusing global ones. Because it is a separate instance run under Chinese regulation, its catalog of available services and feature versions also differs from global Azure. Treating it as just another region of the global cloud leads directly to failed deployments.",
   "d": 3
  },
  {
   "id": 255,
   "t": "sovereign-regions",
   "x": "An engineer notices that a service offered in West Europe is unavailable in a sovereign cloud. What is the most accurate explanation?",
   "o": [
    "Sovereign clouds only host storage and networking",
    "Services reach sovereign clouds first by design",
    "Sovereign clouds require a separate Arc license",
    "Sovereign clouds carry a different service catalog"
   ],
   "a": 3,
   "e": "Sovereign clouds run on separate infrastructure with their own release cadence and regulatory constraints, so their service catalogs lag or diverge from the commercial platform. They offer far more than storage and networking, and features generally arrive there after commercial availability rather than before. Azure Arc licensing is unrelated to which services a cloud instance offers.",
   "d": 3
  },
  {
   "id": 256,
   "t": "service-level-agreements",
   "x": "A web tier with a 99.9 percent SLA calls a database tier that also carries a 99.9 percent SLA, and the application fails if either one is unavailable. What is true of the combined figure the customer can expect?",
   "o": [
    "It rises to about 99.99 percent",
    "It equals the average of the two",
    "It is lower than 99.9 percent",
    "It stays at exactly 99.9 percent"
   ],
   "a": 2,
   "e": "When components are chained so that the whole depends on every part, their individual figures multiply, and 99.9 percent times 99.9 percent gives roughly 99.8 percent. Adding a dependency therefore reduces the composite commitment rather than leaving it unchanged. Availability only improves when redundancy is added in parallel, which is a different arrangement from this dependency chain.",
   "d": 3
  },
  {
   "id": 257,
   "t": "service-level-agreements",
   "x": "An architect wants the strongest availability commitment Microsoft offers for a virtual machine workload. Which deployment approach achieves it?",
   "o": [
    "Attach a second network interface to one instance",
    "Spread two or more instances across availability zones",
    "Place two instances in a single availability set",
    "Run one instance on premium solid-state disks"
   ],
   "a": 1,
   "e": "Distributing instances across two or more availability zones earns the highest tier because the zones are physically separate facilities within the region. An availability set only separates instances across fault and update domains inside one datacenter, so it earns a lower tier. A single instance on premium disks qualifies for the lowest tier, and extra network interfaces have no bearing on the commitment at all.",
   "d": 3
  },
  {
   "id": 258,
   "t": "service-level-agreements",
   "x": "A customer suffers downtime that falls below the promised availability level for a paid Azure service. What does the agreement entitle the customer to claim?",
   "o": [
    "A credit applied against future service charges",
    "A cash refund deposited to a bank account",
    "Free premium support for the following year",
    "Reimbursement for lost business revenue"
   ],
   "a": 0,
   "e": "The remedy is a service credit, a percentage of the affected service's charges applied to a future invoice, and the customer normally has to submit a claim to receive it. Microsoft does not issue cash payments, upgrade support plans, or compensate for consequential losses such as lost sales. Understanding that the credit is the sole remedy is the point of the objective.",
   "d": 3
  },
  {
   "id": 259,
   "t": "service-level-agreements",
   "x": "A startup deploys a workload onto a free tier offering while evaluating Azure and asks which availability commitment applies. What should the answer be?",
   "o": [
    "The standard 99.9 percent tier applies",
    "A 99.95 percent commitment applies",
    "The commitment matches the paid tier",
    "No financially backed commitment applies"
   ],
   "a": 3,
   "e": "Free tiers and preview features are excluded from financially backed agreements, so no service credit remedy exists for them regardless of how much downtime occurs. Paid tiers of the same service do carry published figures, which is one practical reason to move off a free tier before production. Assuming the free tier inherits the paid commitment is the trap here.",
   "d": 3
  },
  {
   "id": 260,
   "t": "service-level-agreements",
   "x": "A reliability engineer is reviewing what changes the availability commitment for a single virtual machine. Which factors are relevant? (Select TWO.)",
   "o": [
    "The number of tags applied to the machine",
    "The resource group the machine was created in",
    "The subscription's monthly spending budget",
    "The number of instances and how they are distributed",
    "The disk type attached to the operating system"
   ],
   "a": 3,
   "e": "Instance count and placement across zones or fault domains determine which tier applies, and a lone instance only qualifies for a commitment when its operating system and data disks use premium solid-state or ultra storage. Tags, resource group membership, and budgets are organizational and financial constructs that never affect an availability figure. This distinction between resiliency design and bookkeeping is what the objective tests.",
   "d": 3,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 261,
   "t": "service-lifecycle",
   "x": "A platform team is considering a new Azure capability that Microsoft labels as being in public preview. What should the team expect?",
   "o": [
    "It is billed at double the generally available rate",
    "It may change and is not covered by an availability commitment",
    "It carries the same commitments as a released feature",
    "It is available only to customers with a support contract"
   ],
   "a": 1,
   "e": "Preview features are offered for evaluation, may change or be withdrawn before release, and are excluded from financially backed availability commitments and often from standard support. Anyone can opt into a public preview, so a support contract is not a gate. Previews are frequently free or discounted rather than priced above the released rate.",
   "d": 3
  },
  {
   "id": 262,
   "t": "service-lifecycle",
   "x": "Where should an engineer look to track which Azure features have recently reached general availability and which are still being trialed?",
   "o": [
    "The Azure updates page",
    "The Azure status history archive",
    "The Azure resource health blade",
    "The Azure quota request form"
   ],
   "a": 0,
   "e": "The Azure updates page publishes announcements of new capabilities and shows where each one sits in the lifecycle, from preview through release and eventual retirement. The status history archive records past platform incidents rather than feature milestones. Resource health reports on one deployed resource, so it says nothing about the roadmap.",
   "d": 3
  },
  {
   "id": 263,
   "t": "service-lifecycle",
   "x": "A product manager wants a small group of selected customers to test an unreleased Azure feature under a non-disclosure arrangement before wider testing opens. Which stage describes this?",
   "o": [
    "Public preview",
    "General availability",
    "Retirement",
    "Private preview"
   ],
   "a": 3,
   "e": "Private preview is the invitation-only stage where a limited set of customers evaluates a capability, usually under confidentiality terms. Public preview opens the same capability to anyone who wants to try it, and general availability marks the released, supported state. Retirement is the opposite end of the lifecycle, when a capability is withdrawn.",
   "d": 3
  },
  {
   "id": 264,
   "t": "devops-technologies",
   "x": "A software team wants source control, work item tracking, and automated build and release pipelines delivered as one Microsoft-hosted suite. Which offering provides them?",
   "o": [
    "Azure Logic Apps",
    "Azure Data Factory",
    "Azure DevOps",
    "Azure Automation"
   ],
   "a": 2,
   "e": "Azure DevOps bundles Repos for source control, Boards for work tracking, and Pipelines for build and release, along with Test Plans and Artifacts. Azure Automation runs operational runbooks against existing infrastructure and has no repository or backlog features. Logic Apps and Data Factory orchestrate business workflows and data movement respectively, which are runtime concerns rather than development lifecycle tooling.",
   "d": 3
  },
  {
   "id": 265,
   "t": "devops-technologies",
   "x": "Which capabilities are associated with GitHub Actions when it is used to deliver Azure workloads? (Select TWO.)",
   "o": [
    "Physical hardware maintenance in Azure datacenters",
    "Issuing service credits for missed availability",
    "Classifying sensitive records in a data estate",
    "Workflows triggered by repository events",
    "Automated deployment to Azure services"
   ],
   "a": 3,
   "e": "GitHub Actions runs workflows in response to repository events such as a push or a pull request, and those workflows commonly build artifacts and deploy them into Azure. Datacenter hardware upkeep is Microsoft's responsibility under the shared responsibility model and is never a customer pipeline task. Service credits come from the SLA claim process and data classification belongs to Microsoft Purview.",
   "d": 3,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 266,
   "t": "devops-technologies",
   "x": "A development group needs disposable sandbox environments that follow preset policies and shut down automatically each evening so testers do not leave machines running overnight. Which Azure offering targets this scenario?",
   "o": [
    "Azure DevTest Labs",
    "Azure Site Recovery",
    "Azure Container Registry",
    "Azure Batch"
   ],
   "a": 0,
   "e": "Azure DevTest Labs creates governed lab environments with quotas, allowed image lists, and automatic shutdown schedules so test infrastructure does not accumulate cost. Site Recovery replicates workloads for disaster recovery and does not provision sandboxes. Container Registry stores images and Azure Batch schedules large compute jobs, neither of which manages environment lifecycle or spending guardrails.",
   "d": 3
  },
  {
   "id": 267,
   "t": "arm",
   "x": "A deployment request submitted through the Azure CLI is rejected because the caller lacks permission. Which layer evaluated the role assignment before the request could reach a resource provider?",
   "o": [
    "Azure Monitor",
    "Azure Advisor",
    "Azure Arc",
    "Azure Resource Manager"
   ],
   "a": 3,
   "e": "Azure Resource Manager is the single control plane that receives every management request, authenticates the caller, and applies role assignments and policy before handing work to the relevant resource provider. Azure Monitor observes what happens afterwards and never authorizes anything. Advisor produces recommendations, and Arc extends the same control plane to machines outside Azure rather than performing the check itself.",
   "d": 3
  },
  {
   "id": 268,
   "t": "arm-templates",
   "x": "A finance department requires that a data science environment be recreated in a second region matching the configuration already running in the first. Which approach makes the rebuild reliable?",
   "o": [
    "Copy the first region's virtual disks by hand",
    "Export the billing statement and match the SKUs",
    "Deploy from the same declarative template file",
    "Repeat the portal steps from a written runbook"
   ],
   "a": 2,
   "e": "A declarative template records the desired end state and can be deployed repeatedly with only the region parameter changed, so both environments are provably identical. A written runbook still depends on a person clicking accurately every time, which is where small differences creep in. Copying disks reproduces machines but not networking, identity, or policy configuration, and a billing statement records charges rather than configuration.",
   "d": 3
  },
  {
   "id": 269,
   "t": "azure-arc",
   "x": "A hospital laboratory network runs SQL Server on physical hardware at three sites and wants one inventory of those servers alongside its Azure resources, with the same tagging scheme applied. Which service extends Azure management to them?",
   "o": [
    "Azure Automanage",
    "Azure Arc",
    "Azure Migrate",
    "Azure Site Recovery"
   ],
   "a": 1,
   "e": "Azure Arc projects servers, Kubernetes clusters, and data services from outside Azure into Azure Resource Manager so they appear as resources that can be tagged, governed, and inventoried together. Azure Migrate assesses and relocates workloads, which the laboratory explicitly does not want. Site Recovery handles replication for failover, a resiliency concern rather than a management plane extension.",
   "d": 3
  },
  {
   "id": 270,
   "t": "azure-arc",
   "x": "After connecting an on-premises Kubernetes cluster to Azure, an administrator finds it listed in the portal. Which capability now becomes available for that cluster?",
   "o": [
    "Azure Policy assignments can target it",
    "Its nodes are relocated into an Azure region",
    "Microsoft assumes responsibility for its hardware",
    "It receives the same SLA as a managed cluster"
   ],
   "a": 0,
   "e": "Once a cluster is projected into Azure Resource Manager it becomes a first-class resource, so policy assignments, role-based access control, and tags apply to it just as they would to a native resource. Nothing physically moves, and the customer keeps ownership of the underlying hardware and its maintenance. Availability commitments still depend on the customer's own infrastructure rather than on Microsoft.",
   "d": 3
  },
  {
   "id": 271,
   "t": "azure-policy",
   "x": "A university IT board wants a report showing which existing virtual machines lack disk encryption, but it does not want any deployment blocked while the gap is investigated. Which policy effect fits?",
   "o": [
    "Deny",
    "Modify",
    "DeployIfNotExists",
    "Audit"
   ],
   "a": 3,
   "e": "The Audit effect records non-compliant resources in the compliance dashboard without interfering with any request, which is exactly what a fact-finding exercise needs. Deny would stop deployments the board wants left running. Modify and DeployIfNotExists both change the environment by altering resources or provisioning remediation, going further than a read-only assessment.",
   "d": 3
  },
  {
   "id": 272,
   "t": "azure-policy",
   "x": "A cloud architect is separating three governance controls: one decides who may act, one decides what may be created, and one prevents removal. Which statements are correct? (Select TWO.)",
   "o": [
    "Role-based access control blocks non-compliant regions",
    "Azure Policy evaluates resource properties against rules",
    "Role-based access control grants permissions to identities",
    "Resource locks assign permissions to security groups",
    "Azure Policy removes the need for role assignments"
   ],
   "a": 1,
   "e": "Azure Policy inspects the properties of a resource and allows, denies, or audits based on rules, while role-based access control decides which identities hold which permissions. Locks restrict delete or write operations on a resource and grant nothing to anyone, so they are not a permission mechanism. The two systems are complementary, and neither policy nor role assignments can substitute for the other.",
   "d": 3,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 273,
   "t": "resource-locks",
   "x": "A shared services team applies a CanNotDelete lock to a virtual network used by several projects. An engineer then tries to add a new subnet to that network. What is the result?",
   "o": [
    "The whole virtual network is placed in read-only mode",
    "The subnet is added successfully",
    "The request fails until the lock is removed",
    "The request succeeds only for subscription Owners"
   ],
   "a": 1,
   "e": "A CanNotDelete lock permits reading and modifying a resource and blocks only deletion, so adding a subnet proceeds normally. The read-only outcome describes the ReadOnly lock type, which would have blocked the change. Lock behavior does not vary by role, which is precisely why an Owner is stopped by a lock just as any other user would be.",
   "d": 3
  },
  {
   "id": 274,
   "t": "resource-locks",
   "x": "Which behaviors describe how locks interact with other Azure controls? (Select TWO.)",
   "o": [
    "Locks placed on a parent scope are inherited by children",
    "Locks are evaluated only for users outside the tenant",
    "A lock can grant a user permission to redeploy a resource",
    "Locks expire automatically after thirty days",
    "A lock applies regardless of a user's role assignment"
   ],
   "a": 4,
   "e": "Locks sit outside the permission model and stop the operation for every caller, including subscription Owners, which is why they protect against accidental deletion by administrators. They also flow down from a subscription or resource group to everything beneath, so the most restrictive inherited lock wins. Locks never grant rights and never expire on their own, so someone with the appropriate permission has to remove them explicitly.",
   "d": 3,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 275,
   "t": "tags",
   "x": "A resource group carries an environment tag set to production. A new virtual machine is created inside that group with no tags specified. Which tags does the machine end up with?",
   "o": [
    "The environment tag, copied at creation time",
    "The environment tag, but only in billing reports",
    "All tags from the group and the subscription",
    "None, because tags are not inherited automatically"
   ],
   "a": 3,
   "e": "Tags applied to a resource group do not flow down to the resources inside it, so the new machine starts with none. Organizations that want inheritance typically use an Azure Policy definition with the Modify effect to stamp the tag onto child resources. Assuming automatic inheritance leads to cost reports with large untagged buckets.",
   "d": 3
  },
  {
   "id": 276,
   "t": "purview",
   "x": "An energy utility must show auditors where a regulatory reporting dataset originated and every system it passed through along the way. Which Microsoft Purview capability provides this view?",
   "o": [
    "Resource health",
    "Log Analytics",
    "Data lineage",
    "Cost analysis"
   ],
   "a": 2,
   "e": "Purview's lineage view traces data from its source through the transformations and pipelines that moved it, which is what an auditor asking about provenance needs. Cost analysis reports spending in Microsoft Cost Management and describes money rather than data. Resource health and Log Analytics report on infrastructure state and telemetry, neither of which explains where a dataset came from.",
   "d": 3
  },
  {
   "id": 277,
   "t": "purview",
   "x": "A records manager needs automated classification of documents holding national identification numbers, spanning both Microsoft 365 content and Azure Storage. Which platform handles this?",
   "o": [
    "Azure Blueprints",
    "Microsoft Purview",
    "Microsoft Entra ID",
    "Azure Monitor"
   ],
   "a": 1,
   "e": "Microsoft Purview scans across cloud, on-premises, and software as a service estates, applies built-in classifiers for identifiers such as national ID numbers, and attaches sensitivity labels to what it finds. Microsoft Entra ID manages identities and access rather than inspecting file content. Azure Monitor collects operational telemetry and Blueprints package deployment artifacts, so neither examines data.",
   "d": 3
  },
  {
   "id": 278,
   "t": "portal-tools",
   "x": "A new administrator must apply one identical tag to 200 existing resources and finds clicking through each blade far too slow. Which approach suits a change of this size?",
   "o": [
    "Script the change with Azure PowerShell",
    "Open each resource blade one at a time",
    "File a support request with Microsoft",
    "Submit a quota increase for the subscription"
   ],
   "a": 0,
   "e": "Command-line tools such as Azure PowerShell and the Azure CLI let a single loop apply the same change to hundreds of resources, and the script can be reviewed and rerun later. The graphical portal is well suited to exploration and one-off work but scales poorly to repetitive bulk edits. Support requests and quota increases address entitlement problems, not the effort of making a change.",
   "d": 3
  },
  {
   "id": 279,
   "t": "pricing-calculator",
   "x": "A CFO wants a side-by-side comparison of what a datacenter refresh would cost over five years versus running the same workloads in Azure, counting power, cooling, and hardware. Which tool produces this comparison?",
   "o": [
    "Microsoft Cost Management analysis",
    "Azure Advisor cost recommendations",
    "The Azure reservations dashboard",
    "The total cost of ownership calculator"
   ],
   "a": 3,
   "e": "The total cost of ownership calculator is built for exactly this comparison, modelling on-premises expenses such as hardware refresh, electricity, cooling, and labor against the equivalent Azure spend over several years. Microsoft Cost Management analyses charges already incurred in Azure and has no view of a physical datacenter. Advisor recommends savings on resources that are already deployed.",
   "d": 3
  }
 ],
 "pbqs": [
  {
   "kind": "order",
   "t": "management-groups",
   "title": "Build the Governance Hierarchy",
   "scen": "A new enterprise tenant needs its governance scopes arranged from the broadest level down to the narrowest. Arrange the four levels from top to bottom.",
   "steps": [
    "Management group",
    "Subscription",
    "Resource group",
    "Resource"
   ]
  },
  {
   "kind": "match",
   "t": "service-types",
   "title": "Pick the Service Model",
   "scen": "Five workloads, three service models. Assign each workload to the model it represents.",
   "choices": [
    "Infrastructure as a service",
    "Platform as a service",
    "Software as a service"
   ],
   "items": [
    {
     "l": "Migrated servers where your team still manages the operating system",
     "a": 0
    },
    {
     "l": "A managed database engine where patching and backups are handled for you",
     "a": 1
    },
    {
     "l": "A subscription email suite your staff simply signs in to",
     "a": 2
    },
    {
     "l": "A web app you deploy as code without touching the underlying hosts",
     "a": 1
    },
    {
     "l": "A CRM product you configure but never host or update",
     "a": 2
    }
   ]
  },
  {
   "kind": "match",
   "t": "cloud-models",
   "title": "Choose the Deployment Model",
   "scen": "Match each organization’s situation to the cloud deployment model it calls for.",
   "choices": [
    "Public cloud",
    "Private cloud",
    "Hybrid cloud"
   ],
   "items": [
    {
     "l": "A startup wants zero upfront hardware spend on shared provider infrastructure",
     "a": 0
    },
    {
     "l": "A defense contractor requires infrastructure dedicated solely to its own use",
     "a": 1
    },
    {
     "l": "A hospital keeps patient records on-premises but hosts its public site in Azure",
     "a": 2
    },
    {
     "l": "A retailer keeps steady workloads in its datacenter and bursts seasonal peaks to Azure",
     "a": 2
    }
   ]
  },
  {
   "kind": "match",
   "t": "azure-policy",
   "title": "Governance Tool for the Job",
   "scen": "Four governance requirements, four different tools. Assign each requirement to the feature that enforces it.",
   "choices": [
    "Azure Policy",
    "Role-based access control",
    "Resource locks",
    "Tags"
   ],
   "items": [
    {
     "l": "Ensure only approved VM sizes can ever be deployed",
     "a": 0
    },
    {
     "l": "Give the finance team read-only visibility into a subscription",
     "a": 1
    },
    {
     "l": "Stop anyone from accidentally deleting the production resource group",
     "a": 2
    },
    {
     "l": "Attribute every resource’s spend to the right cost center",
     "a": 3
    }
   ]
  },
  {
   "kind": "match",
   "t": "monitor",
   "title": "Which Tool Answers the Question?",
   "scen": "Three operational questions came up this week. Match each to the Azure tool built to answer it.",
   "choices": [
    "Azure Advisor",
    "Azure Monitor",
    "Azure Service Health"
   ],
   "items": [
    {
     "l": "Where are we overspending, and which resources are underused?",
     "a": 0
    },
    {
     "l": "Why did our web app’s response time spike at 2 a.m.?",
     "a": 1
    },
    {
     "l": "Is the region outage on Azure’s side, and when is the planned maintenance?",
     "a": 2
    }
   ]
  },
  {
   "kind": "match",
   "t": "storage-accounts",
   "title": "Match the Redundancy",
   "scen": "Three datasets, three durability requirements. Choose the least expensive redundancy option that satisfies each.",
   "choices": [
    "Locally redundant storage",
    "Zone-redundant storage",
    "Geo-redundant storage"
   ],
   "items": [
    {
     "l": "Re-creatable build artifacts that only need protection inside one datacenter",
     "a": 0
    },
    {
     "l": "Records that must survive a whole datacenter failure within the region",
     "a": 1
    },
    {
     "l": "Compliance archives that must survive the loss of the entire primary region",
     "a": 2
    }
   ]
  },
  {
   "kind": "order",
   "t": "cost-management",
   "title": "Get Ahead of the Cloud Bill",
   "scen": "A department is moving its first workload to Azure and the finance lead wants spending controlled from day one. Put the steps in the order the team should take them.",
   "steps": [
    "Estimate the monthly charge for the planned resources with the Azure pricing calculator",
    "Set a Microsoft Cost Management budget with an alert at that estimated amount",
    "Deploy the resources, applying a cost center tag to each one",
    "Break down the first month's actual charges by that tag in cost analysis",
    "Act on Azure Advisor's cost recommendations to resize or remove what is underused"
   ]
  },
  {
   "kind": "order",
   "t": "authentication-authorization",
   "title": "Trace a Sign-In",
   "scen": "An employee opens a finance app protected by Microsoft Entra ID. Arrange the stages in the order the platform performs them for that one sign-in.",
   "steps": [
    "The employee submits a username and password to Microsoft Entra ID",
    "Microsoft Entra ID verifies the credential against the directory",
    "A Conditional Access policy evaluates the sign-in signals and demands a second factor",
    "The employee approves the multifactor prompt on a registered device",
    "Microsoft Entra ID issues a token carrying the employee's group memberships",
    "Azure RBAC checks that token against the role assignment on the finance resources"
   ]
  },
  {
   "kind": "order",
   "t": "arm-templates",
   "title": "Deploy the Web Tier",
   "scen": "A team is deploying its first Azure web application into a fresh environment and wants it repeatable. Put the deployment steps in order.",
   "steps": [
    "Create a resource group in the region where the application will run",
    "Author a template describing the web app and its database",
    "Submit the template to Azure Resource Manager, targeting that resource group",
    "Azure Resource Manager validates the request against the policies assigned to the scope",
    "Apply a delete lock to the resource group once the resources are running"
   ]
  },
  {
   "kind": "match",
   "t": "defense-in-depth",
   "title": "Answer the Design Review",
   "scen": "Five security concerns came out of a design review. Match each concern to the Azure service that addresses it. Not every service will be used.",
   "choices": [
    "Microsoft Defender for Cloud",
    "Microsoft Sentinel",
    "Azure Firewall",
    "Network security groups",
    "Azure DDoS Protection",
    "Azure Key Vault"
   ],
   "items": [
    {
     "l": "The team wants a continuously scored view of how far the environment has drifted from security best practice",
     "a": 0
    },
    {
     "l": "Alerts from every subscription need to be collected in one place and investigated as incidents",
     "a": 1
    },
    {
     "l": "Subnets need simple allow and deny rules based on address, port, and protocol",
     "a": 3
    },
    {
     "l": "Traffic from thousands of hosts is trying to exhaust the public endpoint",
     "a": 4
    },
    {
     "l": "Application secrets and TLS certificates are sitting in configuration files",
     "a": 5
    }
   ]
  },
  {
   "kind": "match",
   "t": "compute-resources",
   "title": "Size the Compute",
   "scen": "Four teams describe what they need to run in Azure. Match each to the compute option that fits. Not all options will be used.",
   "choices": [
    "Azure Virtual Machines",
    "Azure App Service",
    "Azure Functions",
    "Azure Container Instances",
    "Azure Kubernetes Service",
    "Azure Virtual Desktop"
   ],
   "items": [
    {
     "l": "A legacy application that needs a specific operating system build and full administrator rights",
     "a": 0
    },
    {
     "l": "A short routine that should run only when a message lands on a queue, billed per execution",
     "a": 2
    },
    {
     "l": "Dozens of containerized microservices needing orchestration, scaling, and self-healing",
     "a": 4
    },
    {
     "l": "Remote staff who need a full Windows desktop delivered from the cloud to any device",
     "a": 5
    }
   ]
  },
  {
   "kind": "match",
   "t": "cost-reduction",
   "title": "Follow the Money",
   "scen": "Five cost questions arrive from different parts of the business. Match each to the Azure tool or feature that answers it. Not every option will be used.",
   "choices": [
    "Azure pricing calculator",
    "Total Cost of Ownership calculator",
    "Microsoft Cost Management",
    "Azure Advisor",
    "Azure reservations",
    "Azure Hybrid Benefit"
   ],
   "items": [
    {
     "l": "What will this design charge us per month before we deploy any of it?",
     "a": 0
    },
    {
     "l": "How does running our current datacenter compare with running the same workload in Azure?",
     "a": 1
    },
    {
     "l": "Can the owner be alerted the moment this month's actual spend passes a threshold?",
     "a": 2
    },
    {
     "l": "What discount do we get for committing to a three-year term on this VM size?",
     "a": 4
    },
    {
     "l": "Can our existing Windows Server licenses with Software Assurance cut the VM rate?",
     "a": 5
    }
   ]
  }
 ]
}
