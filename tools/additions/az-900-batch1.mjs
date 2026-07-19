// az-900 initial bank (authored batch 1).
export default {
  examId: "az-900",
  questions: [
  {
    "t": "regions",
    "x": "Which statement most accurately describes an Azure region?",
    "o": [
      "One or more datacenters connected through a low-latency network within a geographic area",
      "A billing construct that groups subscriptions by the currency used for invoicing",
      "A logical container used to group virtual machines that share the same lifecycle",
      "A physically isolated location inside a single datacenter with independent power and cooling"
    ],
    "a": 0,
    "e": "A region is one or more datacenters placed within a latency-defined perimeter and linked by a dedicated low-latency network. The isolated-location description fits an availability zone, and lifecycle grouping describes a resource group."
  },
  {
    "t": "regions",
    "x": "A US defense agency needs to run workloads in a cloud instance that is physically and logically separated from the public Azure cloud and operated by screened personnel. Which offering meets these requirements?",
    "o": [
      "An Azure region pair located within the United States",
      "An availability zone in a US-based Azure region",
      "A resource group protected by a read-only lock",
      "Azure Government"
    ],
    "a": 3,
    "e": "Azure Government is a sovereign cloud: a physically isolated instance of Azure operated by screened US personnel for government workloads. Region pairs and availability zones exist inside the public cloud, so they cannot provide the required separation."
  },
  {
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
    "as": [
      1,
      3
    ],
    "e": "Paired regions receive platform updates sequentially, and when a large outage hits multiple regions Microsoft prioritizes recovering one region of each pair first. Traffic distribution and cross-region replication are not automatic; they require services such as Front Door or GRS storage that you configure yourself."
  },
  {
    "t": "regions",
    "x": "A healthcare provider is legally required to keep patient records on infrastructure physically located in Germany. Which deployment decision satisfies this obligation?",
    "o": [
      "Turn on geo-redundant storage to keep an extra copy of each record",
      "Create all resources in one resource group so their data stays together",
      "Select an Azure region whose datacenters reside within that country",
      "Use a management group to prevent users outside the country from signing in"
    ],
    "a": 2,
    "e": "Data residency is controlled by region selection: choosing a region inside the required country keeps data on infrastructure there. Resource groups and management groups are organizational containers and do not determine where data is physically stored."
  },
  {
    "t": "availability-zones",
    "x": "Within a supported Azure region, what does an availability zone consist of?",
    "o": [
      "One or more datacenters with independent power, cooling, and networking",
      "A partner region kept at least 300 miles away for disaster recovery",
      "A server rack dedicated to one customer's virtual machines and disks",
      "A grouping of subscriptions with shared policy and access settings"
    ],
    "a": 0,
    "e": "Each availability zone is made up of one or more datacenters with independent power, cooling, and networking, so a facility-level failure does not take down the whole region. The distant-partner description refers to region pairs rather than zones."
  },
  {
    "t": "availability-zones",
    "x": "An operations team runs a customer-facing web application on two Azure virtual machines. Management wants the app to keep running even if an entire datacenter in the region loses power, without moving the workload to another region. What should the team do?",
    "o": [
      "Move both virtual machines into separate resource groups",
      "Deploy the virtual machines across different availability zones",
      "Convert the storage account from LRS to GRS replication",
      "Register the workload in a second subscription for redundancy"
    ],
    "a": 1,
    "e": "Availability zones place instances in physically separate datacenters within the same region, so a power failure in one facility leaves the other zone running. Resource groups and subscriptions are logical containers and do not change where the machines physically run."
  },
  {
    "t": "availability-zones",
    "x": "A workload is deployed across three availability zones in one region. Which event would still disrupt it?",
    "o": [
      "A hardware fault affecting one rack in one of the region's datacenters",
      "A cooling outage that shuts down one datacenter",
      "Scheduled maintenance on a single zone's power systems",
      "A natural disaster that disables the entire region"
    ],
    "a": 3,
    "e": "Zones protect against failures isolated to one facility, such as power, cooling, or hardware faults, because each zone has independent infrastructure. A disaster large enough to take out the whole region defeats zone redundancy, which is why cross-region options such as paired regions exist."
  },
  {
    "t": "availability-zones",
    "x": "A cloud consultant tells a client that a particular Azure region supports availability zones. What is the minimum number of zones the region provides?",
    "o": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "a": 2,
    "e": "Regions that support availability zones provide a minimum of three separate zones, each with independent power, cooling, and networking. This lets platform services maintain quorum and survive the loss of any single zone."
  },
  {
    "t": "resource-groups",
    "x": "In the Azure resource hierarchy, what is the primary purpose of a resource group?",
    "o": [
      "To combine subscriptions and their resources under one governance scope",
      "To define the billing boundary where invoices are generated",
      "To isolate workloads in physically separate datacenters",
      "To hold related resources that share a common lifecycle"
    ],
    "a": 3,
    "e": "A resource group is a logical container for resources that are typically deployed, updated, and deleted together. Combining subscriptions is the job of management groups, and billing is scoped to the subscription."
  },
  {
    "t": "resource-groups",
    "x": "A developer finishes a proof-of-concept that used a virtual machine, a storage account, and a database, all deployed into a resource group named poc-rg. What is the fastest way to remove every one of these assets at once?",
    "o": [
      "Delete each of the three assets one at a time",
      "Cancel the subscription that the project runs in",
      "Delete poc-rg, which removes everything it holds",
      "Remove the tags from poc-rg so its contents expire"
    ],
    "a": 2,
    "e": "Deleting a resource group removes all resources inside it in one operation, which is exactly why short-lived projects are grouped this way. Canceling the subscription would also remove everything else billed under it, and tags have no effect on resource lifetime."
  },
  {
    "t": "resource-groups",
    "x": "A resource group named app-rg was created in the West Europe region. A team member wants to add a virtual machine located in East US to app-rg. What will happen?",
    "o": [
      "The request succeeds because a group's members can run in any region",
      "The request fails because members must match the group's region",
      "The virtual machine is automatically relocated to West Europe",
      "The group's metadata moves to East US to match the newest member"
    ],
    "a": 0,
    "e": "A resource group's region only determines where the group's metadata is stored; the resources inside it can be deployed to any region. This makes it possible to manage a globally distributed application as a single unit."
  },
  {
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
    "as": [
      0,
      2
    ],
    "e": "Each resource lives in exactly one resource group at a time, though it can be moved, and a group can hold resources deployed to different regions. Groups cannot be nested, and deleting one removes the resources it holds rather than orphaning them."
  },
  {
    "t": "subscriptions",
    "x": "An IT department wants a clear line where usage charges are aggregated onto a single invoice. Which level of the Azure hierarchy provides this?",
    "o": [
      "Management group",
      "Subscription",
      "Resource group",
      "Resource"
    ],
    "a": 1,
    "e": "Billing is scoped to the subscription: usage across all its resources is aggregated and invoiced at that level. Management groups organize subscriptions for governance, but invoices are not generated there."
  },
  {
    "t": "subscriptions",
    "x": "A software company runs production and development workloads under one subscription and finds that development experiments keep consuming money intended for production. Which change gives each environment its own spending report and invoice?",
    "o": [
      "Place development workloads in a second subscription",
      "Move development resources into a separate resource group",
      "Tag every development resource with a cost-center label",
      "Create a management group above the current subscription"
    ],
    "a": 0,
    "e": "Invoices are generated per subscription, so separating the environments into different subscriptions cleanly divides both billing and reporting. Resource groups and tags can categorize costs within an invoice but do not produce separate invoices."
  },
  {
    "t": "subscriptions",
    "x": "Which statement about the relationship between Microsoft Entra tenants and Azure subscriptions is accurate?",
    "o": [
      "Each tenant is limited to one subscription, while a subscription can trust many tenants",
      "Each subscription trusts exactly one tenant, while a tenant can be linked to many subscriptions",
      "Subscriptions and tenants are interchangeable names for the same underlying billing construct",
      "A subscription has to be re-created each time an additional user joins the tenant"
    ],
    "a": 1,
    "e": "A subscription trusts a single Entra tenant for identity, and one tenant commonly holds many subscriptions. The mirrored claim reverses the actual relationship, and tenants handle identity rather than billing."
  },
  {
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
    "as": [
      1,
      4
    ],
    "e": "Subscriptions act as both billing boundaries and access-management boundaries, so separate invoicing and strong access separation each justify a new one. Any existing subscription can already deploy to new regions, and shared lifecycle or tagging needs point to resource groups and tags instead."
  },
  {
    "t": "management-groups",
    "x": "What is the primary function of Azure management groups?",
    "o": [
      "Bundling virtual machines that should be started and stopped together",
      "Aggregating diagnostic logs from every resource into one workspace",
      "Organizing subscriptions into a hierarchy for shared governance",
      "Scheduling maintenance windows across paired regions"
    ],
    "a": 2,
    "e": "Management groups sit above subscriptions and let you apply policy and role assignments once, inheriting down to every subscription beneath. Starting and stopping machines together relates to resource lifecycle, not governance scope."
  },
  {
    "t": "management-groups",
    "x": "A governance lead must ensure that 40 subscriptions used by different departments all block the creation of resources outside approved regions, without configuring each subscription individually. What is the most efficient approach?",
    "o": [
      "Apply a read-only lock at the root of every affected subscription",
      "Add a location tag to each resource group in the subscriptions",
      "Enable Defender for Cloud recommendations across the tenant",
      "Assign an Azure Policy to a management group that contains the subscriptions"
    ],
    "a": 3,
    "e": "A policy assigned at a management group is inherited by every subscription under it, which achieves the restriction in one step. Locks prevent changes rather than filter locations, and tags are labels with no enforcement power."
  },
  {
    "t": "management-groups",
    "x": "Which statement about the management group hierarchy is accurate?",
    "o": [
      "A subscription can sit under two parent management groups at once",
      "The hierarchy supports up to six levels of depth below the root group",
      "Resource groups attach directly to management groups, bypassing subscriptions",
      "Each Microsoft Entra directory contains several separate root management groups"
    ],
    "a": 1,
    "e": "The tree allows six levels of depth, not counting the root management group or the subscription level. Each management group and subscription has exactly one parent, and each directory has a single root group."
  },
  {
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
    "as": [
      2,
      4
    ],
    "e": "Management groups nest to form a hierarchy, and policy or role assignments made at a group flow down to all child groups and subscriptions. Resources live in resource groups, and every subscription has exactly one parent group."
  },
  {
    "t": "vm-resources",
    "x": "A company places two virtual machines in an availability set within a single Azure region. Which risk does this configuration reduce?",
    "o": [
      "Both machines being unavailable during an outage that affects the entire region",
      "Slow response times for users connecting from distant geographies",
      "Data loss caused when an administrator deletes the parent resource group",
      "Both machines going down at once during host maintenance or a rack-level hardware fault"
    ],
    "a": 3,
    "e": "An availability set spreads the machines across fault domains and update domains inside a datacenter, so a single rack failure or planned host maintenance cannot take down every instance at once. It offers no protection against a full region outage, which requires availability zones or a multi-region design."
  },
  {
    "t": "compute-resources",
    "x": "A developer has packaged a batch job as a Docker image and wants it to run in Azure within seconds, without provisioning servers or standing up an orchestration cluster. Which service offers the quickest path?",
    "o": [
      "Azure Kubernetes Service",
      "Azure Virtual Machines",
      "Azure Container Instances",
      "Azure App Service"
    ],
    "a": 2,
    "e": "Azure Container Instances runs individual containers on demand with per-second billing and no cluster or server management, making it the fastest way to launch a single containerized job. Azure Kubernetes Service targets the same container workloads but requires deploying and operating a cluster first."
  },
  {
    "t": "networking-resources",
    "x": "A small business needs to connect its only office to an Azure virtual network. The link must be encrypted and may ride over the office's existing internet connection to keep costs down. Which option satisfies these requirements?",
    "o": [
      "A site-to-site VPN gateway connection",
      "An ExpressRoute circuit",
      "Virtual network peering",
      "An Azure DNS private zone"
    ],
    "a": 0,
    "e": "A site-to-site VPN builds an encrypted IPsec tunnel between the office's VPN device and an Azure VPN gateway, traveling over the existing internet circuit at low cost. ExpressRoute provides a separate private circuit through a connectivity provider, which avoids the internet but adds cost the scenario is trying to avoid."
  },
  {
    "t": "endpoints",
    "x": "A developer provisions an Azure SQL database and leaves the networking settings at their defaults. How do client applications reach the new database?",
    "o": [
      "Through a public endpoint with a name resolvable from the internet",
      "Through a private IP address drawn from the developer's virtual network",
      "Through a VPN tunnel that Azure creates during provisioning",
      "Only from virtual machines inside the same resource group"
    ],
    "a": 0,
    "e": "Azure platform services expose a public endpoint by default, so clients connect to an internet-resolvable address and are then checked against authentication and firewall rules. Getting a private IP inside a virtual network only happens when someone deliberately adds a private endpoint."
  },
  {
    "t": "serverless",
    "x": "Whenever a message lands in a queue, a short piece of code must run to process it. The developer wants to pay only for execution time and avoid maintaining any servers. Which service matches this model?",
    "o": [
      "Azure Virtual Machines",
      "Azure Functions",
      "Azure Container Instances",
      "Azure App Service"
    ],
    "a": 1,
    "e": "Azure Functions is event-driven compute that fires in response to triggers such as queue messages and, on the consumption plan, bills only for the time the code runs. Azure Container Instances also bills granularly, but it runs containers you start yourself rather than code launched automatically by a trigger."
  },
  {
    "t": "vm-resources",
    "x": "A team migrates an on-premises application onto Azure virtual machines. Under the shared responsibility model, which tasks remain with the team after the move? (Select TWO.)",
    "o": [
      "Replacing failed physical disks in the hosts that run the machines",
      "Applying operating system updates inside each machine",
      "Maintaining power and cooling for the datacenter facilities",
      "Configuring host firewalls and the applications installed on each machine",
      "Patching the hypervisor software on the underlying hosts"
    ],
    "a": 1,
    "as": [
      1,
      3
    ],
    "e": "With infrastructure as a service, Microsoft maintains the physical hosts, facility, and hypervisor, while the customer keeps everything inside the guest: the operating system, its updates, firewall configuration, and installed applications. Hardware repair and hypervisor patching are cloud-provider duties, so they do not transfer to the team."
  },
  {
    "t": "compute-resources",
    "x": "An engineering group operates about 40 containerized microservices that need automated placement, self-healing, rolling upgrades, and scaling across a shared pool of compute. Which service is purpose-built for orchestrating this workload?",
    "o": [
      "Azure Container Instances",
      "Azure Kubernetes Service",
      "Azure App Service",
      "Azure Functions"
    ],
    "a": 1,
    "e": "Azure Kubernetes Service delivers managed Kubernetes, whose core job is orchestration: scheduling containers onto nodes, restarting failed ones, and rolling out upgrades across a fleet. Azure Container Instances runs containers one at a time and lacks the scheduling and self-healing features a large microservice estate needs."
  },
  {
    "t": "networking-resources",
    "x": "A hospital transfers large medical-imaging datasets to Azure and must use a connection that does not traverse the public internet while providing consistent, high throughput. Which connectivity option should it select?",
    "o": [
      "A point-to-site VPN",
      "A site-to-site VPN",
      "Virtual network peering",
      "An ExpressRoute circuit"
    ],
    "a": 3,
    "e": "ExpressRoute is a dedicated private connection established through a connectivity provider, so traffic bypasses the public internet and bandwidth is predictable, which suits large recurring transfers. Both VPN options encrypt traffic but still send it across the public internet, failing the no-internet requirement."
  },
  {
    "t": "endpoints",
    "x": "After a security review, an insurer must ensure that traffic from its application servers to Azure Key Vault stays off the public internet, and that the vault stops accepting connections from public addresses. What should be deployed?",
    "o": [
      "A network security group rule permitting outbound HTTPS from the servers",
      "A read-only resource lock on the vault",
      "A private endpoint for the vault in the application subnet",
      "A private DNS zone that resolves the vault's name to an internal address"
    ],
    "a": 2,
    "e": "A private endpoint gives Key Vault a network interface with a private IP inside the virtual network, so traffic travels the Microsoft backbone and public network access can then be turned off. A private DNS zone only changes how the name resolves; on its own it creates no private path and does nothing to block public connections."
  },
  {
    "t": "serverless",
    "x": "An IoT platform processes sensor readings that arrive in unpredictable bursts, with hours of silence in between. Management wants compute charges to drop to zero during the quiet periods. Which behavior of the Azure Functions consumption plan supports this?",
    "o": [
      "Reserved capacity is purchased up front in exchange for a discounted hourly rate",
      "A flat monthly fee covers an unlimited number of function executions",
      "Instances scale out as events arrive and billing stops when nothing is running",
      "Charges accrue per core allocated to a dedicated virtual machine each hour"
    ],
    "a": 2,
    "e": "The consumption plan allocates instances only while events are being processed and bills by execution count and duration, so idle hours cost nothing. Prepaid reserved capacity and per-core hourly charges describe commitment-based or infrastructure-style billing, both of which keep costing money while the workload sits idle."
  },
  {
    "t": "vm-resources",
    "x": "A retail site's web tier runs on a fleet of identical servers in Azure. Traffic triples during holiday promotions and drops off afterward, and the operations team wants instances added and removed automatically based on demand. Which service should host the web tier?",
    "o": [
      "Availability sets",
      "Virtual Machine Scale Sets",
      "Azure Dedicated Host",
      "Azure Virtual Desktop"
    ],
    "a": 1,
    "e": "Virtual Machine Scale Sets manage a group of load-balanced, identically configured instances and can grow or shrink the group automatically using autoscale rules tied to demand. Availability sets improve resilience by spreading instances across fault and update domains but have no mechanism for changing instance count."
  },
  {
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
    "as": [
      1,
      3,
      4
    ],
    "e": "Functions, App Service, and Container Instances are managed platforms: the team supplies code or a container image and Microsoft maintains and patches the operating system underneath. Azure Virtual Machines and Azure Dedicated Host are infrastructure offerings where the customer administers the guest operating system directly."
  },
  {
    "t": "networking-resources",
    "x": "A company registers example-branding.com through a third-party registrar. The operations team wants to host the zone in Azure so its records are managed with the same tooling, credentials, and APIs as their other resources. Which service should they use?",
    "o": [
      "Azure Traffic Manager",
      "Azure Front Door",
      "Azure DNS",
      "Azure Load Balancer"
    ],
    "a": 2,
    "e": "Azure DNS hosts zones and answers record queries from Azure's global name-server infrastructure, managed through the same portal, roles, and APIs as other Azure resources. Azure Traffic Manager also works at the name-resolution layer, but it steers users among application endpoints rather than hosting a purchased domain's zone."
  },
  {
    "t": "endpoints",
    "x": "A team creates a private endpoint for a storage account and then disables the account's public network access. What is the resulting connectivity behavior?",
    "o": [
      "Every connection attempt fails until a service endpoint is also added to the subnet",
      "Clients that present a valid account key continue connecting from any location",
      "The account switches to read-only mode for every client that connects",
      "Requests from the internet are refused, but clients on the connected network still reach the account"
    ],
    "a": 3,
    "e": "Network rules are evaluated before authorization, so once public access is off, internet-sourced requests are rejected even when they carry valid credentials, while traffic arriving through the private endpoint continues normally. Valid account keys cannot override the network restriction, which is exactly the protection this design provides."
  },
  {
    "t": "serverless",
    "x": "In Azure, what does the term serverless most accurately describe?",
    "o": [
      "Code that executes in each client's browser rather than in a datacenter",
      "Compute where the platform provisions and scales the machines behind the scenes as events demand",
      "Applications that run directly on network hardware without an operating system",
      "Workloads hosted on customer-owned hardware racked inside a Microsoft facility"
    ],
    "a": 1,
    "e": "Servers still exist in serverless computing, but the cloud provider handles provisioning, scaling, and maintenance invisibly while the customer supplies code and pays per use. Customer-owned hardware in a provider facility describes colocation, which is close to the opposite of handing infrastructure concerns to the platform."
  },
  {
    "t": "vm-resources",
    "x": "A consultancy hires seasonal contractors who work from personal laptops. IT must deliver a complete corporate Windows session, with company apps preinstalled, streamed from the cloud to any device. Which service provides this?",
    "o": [
      "Azure Virtual Desktop",
      "Azure Bastion",
      "Azure App Service",
      "Virtual Machine Scale Sets"
    ],
    "a": 0,
    "e": "Azure Virtual Desktop streams full Windows sessions and published apps from cloud-hosted session hosts to any device, which fits equipping contractors on personal laptops. Azure Bastion also provides remote access, but it is an administrative browser gateway for reaching your own machines over RDP or SSH, not a managed desktop-delivery platform."
  },
  {
    "t": "compute-resources",
    "x": "A startup needs to host a customer-facing web application and its REST API. The team wants built-in TLS certificates, custom domains, and autoscale, without administering an operating system. Which option fits?",
    "o": [
      "Azure Virtual Machines",
      "Azure Virtual Desktop",
      "Azure Container Instances",
      "Azure App Service"
    ],
    "a": 3,
    "e": "Azure App Service is a managed web-hosting platform that bundles TLS certificates, custom domain binding, and autoscaling while Microsoft maintains the underlying operating system. Azure Container Instances can run a web workload in a container, but it lacks those integrated web-hosting features and autoscale rules."
  },
  {
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
    "as": [
      1,
      4
    ],
    "e": "Within a single virtual network, subnets exchange traffic by default and that traffic stays on Azure's private network, never touching the public internet. A virtual network and all of its subnets live in one region, and global virtual network peering is what links networks in different regions privately over the Microsoft backbone."
  },
  {
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
    "as": [
      0,
      3
    ],
    "e": "A public endpoint is an internet-reachable address that any authorized client can use from anywhere, while a private endpoint injects a network interface with a private IP into a subnet you select, connecting the service through Private Link. Neither type depends on an ExpressRoute circuit or a VPN gateway to function."
  },
  {
    "t": "serverless",
    "x": "Which workload is the strongest candidate for Azure Functions?",
    "o": [
      "Generating a thumbnail whenever a new photo lands in a storage container",
      "Hosting a stateful legacy client-server application that requires a specific OS build",
      "Streaming full Windows desktop sessions to remote employees",
      "Running a database engine that must stay warm around the clock"
    ],
    "a": 0,
    "e": "Short, stateless tasks that fire in response to an event, like producing a thumbnail after each upload, are exactly what Functions is designed for. A database engine that must stay continuously warm defeats the pay-per-execution model, and workloads needing a specific operating system build belong on virtual machines."
  },
  {
    "t": "storage-accounts",
    "x": "A hospital must retain diagnostic imaging files for ten years to meet regulations. The files are almost never opened, and staff can wait until the next business day when one is requested. Which Blob Storage access tier holds this data at the lowest cost?",
    "o": [
      "Hot",
      "Cool",
      "Cold",
      "Archive"
    ],
    "a": 3,
    "e": "Archive is an offline tier with the lowest storage price, intended for rarely accessed data that can tolerate rehydration taking up to several hours. Cold is the cheapest online tier, but paying for instant access is wasted on files that are read this rarely."
  },
  {
    "t": "storage-accounts",
    "x": "An insurance platform must keep serving reads from its primary region even if one availability zone there goes down, and it also needs an asynchronous copy in the paired secondary region for disaster recovery. Which redundancy option satisfies both requirements?",
    "o": [
      "Locally redundant storage (LRS)",
      "Geo-zone-redundant storage (GZRS)",
      "Geo-redundant storage (GRS)",
      "Zone-redundant storage (ZRS)"
    ],
    "a": 1,
    "e": "GZRS synchronously spreads copies across three availability zones in the primary region and also replicates asynchronously to the paired region. GRS replicates to the secondary region but keeps all primary copies in a single physical location, so a zone outage disrupts the primary."
  },
  {
    "t": "storage-accounts",
    "x": "A company is moving an aging line-of-business application onto Azure virtual machines. The app reads shared configuration from an SMB path that several servers mount at the same time. Which storage service is built for this?",
    "o": [
      "Azure Files",
      "Azure Blob Storage",
      "Azure Queue Storage",
      "Azure Disk Storage"
    ],
    "a": 0,
    "e": "Azure Files provides fully managed file shares reachable over SMB, which multiple virtual machines can mount simultaneously. A managed disk attaches to a VM as block storage for that one server rather than acting as a common network location."
  },
  {
    "t": "databases",
    "x": "A mobile game studio needs to store flexible JSON player profiles and deliver single-digit-millisecond reads to players in North America, Europe, and Asia by replicating to regions near each audience. Which service fits best?",
    "o": [
      "Azure SQL Database",
      "Azure Database for MySQL",
      "Azure Synapse Analytics",
      "Azure Cosmos DB"
    ],
    "a": 3,
    "e": "Azure Cosmos DB is a globally distributed NoSQL database with turnkey multi-region replication and latency guarantees for reads. Azure SQL Database can geo-replicate for regional reads, but it is a relational service centered on fixed schemas rather than schemaless JSON documents."
  },
  {
    "t": "databases",
    "x": "A retail company wants to move its on-premises SQL Server databases to a service where the platform handles operating system patching, backups, and high availability while developers continue writing T-SQL. Which option should it choose?",
    "o": [
      "SQL Server on Azure Virtual Machines",
      "Azure Database for PostgreSQL",
      "Azure SQL Database",
      "Azure Cosmos DB"
    ],
    "a": 2,
    "e": "Azure SQL Database delivers the SQL Server engine as a PaaS offering, so patching, backups, and availability are handled by the platform. SQL Server on Azure Virtual Machines relocates the workload to the cloud but leaves the guest OS and database maintenance with the customer."
  },
  {
    "t": "data-migration",
    "x": "A media company needs to move 120 TB of raw footage into Azure Storage within two weeks, but its office uplink tops out at 100 Mbps. What is the most practical transfer approach?",
    "o": [
      "Order an Azure Data Box appliance for offline shipment",
      "Run AzCopy over the existing internet link",
      "Deploy Azure File Sync on the studio servers",
      "Upload the footage with Azure Storage Explorer"
    ],
    "a": 0,
    "e": "At 100 Mbps, 120 TB would take on the order of months to upload, so shipping a Data Box appliance that Microsoft ingests directly into the storage account is the practical route. AzCopy and Storage Explorer are capable tools but remain limited by the link's bandwidth."
  },
  {
    "t": "data-migration",
    "x": "Before committing to a cloud move, an IT director wants an inventory of the company's on-premises VMware virtual machines, a readiness rating for each one, and estimated monthly run costs. Which service provides this assessment?",
    "o": [
      "Azure Advisor",
      "Azure Migrate",
      "Azure Site Recovery",
      "Azure Arc"
    ],
    "a": 1,
    "e": "Azure Migrate discovers on-premises servers, rates each machine's readiness for Azure, and projects monthly costs before any move happens. Azure Advisor only analyzes resources that already exist in Azure, and Site Recovery replicates workloads for disaster recovery rather than assessing them."
  },
  {
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
    "as": [
      1,
      3
    ],
    "e": "AzCopy is a command-line utility built for high-throughput copies into Azure storage, and Storage Explorer offers a graphical way to perform the same network transfers. Data Box and Import/Export move information by shipping physical devices, which is unnecessary for a few hundred gigabytes on a working link."
  },
  {
    "t": "entra-id",
    "x": "A new administrator asks what Microsoft Entra ID provides for the organization. Which description is accurate?",
    "o": [
      "A managed domain service that supplies Group Policy and domain join",
      "A cloud-based identity and access management service for users and applications",
      "A firewall service that filters traffic reaching virtual networks",
      "An advisory service that recommends ways to reduce spending"
    ],
    "a": 1,
    "e": "Entra ID is Microsoft's cloud identity and access management platform, covering sign-in, single sign-on, and access control for users and apps. The managed domain description matches Entra Domain Services, a separate offering aimed at legacy authentication protocols."
  },
  {
    "t": "entra-id",
    "x": "Employees complain about maintaining separate passwords for Microsoft 365, Salesforce, and an internal HR portal. The identity team connects all three applications to Microsoft Entra ID. Which capability eliminates the extra credentials?",
    "o": [
      "Multifactor authentication",
      "Self-service password reset",
      "Single sign-on",
      "Conditional Access"
    ],
    "a": 2,
    "e": "With single sign-on, one Entra ID authentication opens every connected application, so users stop juggling separate credentials per app. Self-service password reset only helps when a password is forgotten; it does not reduce how many passwords exist."
  },
  {
    "t": "directory-services",
    "x": "A company is lifting a legacy application onto Azure VMs. The app requires Kerberos authentication and machines joined to an Active Directory domain, but the team does not want to deploy or patch domain controllers. What should they use?",
    "o": [
      "Microsoft Entra ID",
      "Microsoft Entra Domain Services",
      "Domain controllers installed on Azure virtual machines",
      "Microsoft Entra External ID"
    ],
    "a": 1,
    "e": "Entra Domain Services provides managed domain controllers with Kerberos, NTLM, LDAP, and Group Policy, and Microsoft patches and maintains them. Standing up domain controllers on Azure VMs would satisfy the application but returns the maintenance burden the team wants to avoid, and Entra ID alone does not offer Kerberos or domain join for legacy apps."
  },
  {
    "t": "external-identities",
    "x": "A manufacturer wants engineers at a partner firm to open documents in its SharePoint Online sites by signing in with the partner's own credentials, without the manufacturer issuing passwords for them. What should the identity team do?",
    "o": [
      "Create member accounts for each engineer in the manufacturer's tenant",
      "Sync the partner's directory through Microsoft Entra Domain Services",
      "Invite the engineers as B2B collaboration guests",
      "Set up one shared account for the whole partner team"
    ],
    "a": 2,
    "e": "B2B collaboration invites external users as guests who authenticate with their home organization's identity, so the manufacturer never issues or stores passwords for them. Member accounts in the manufacturer's tenant would create a second identity each engineer must maintain."
  },
  {
    "t": "conditional-access-mfa",
    "x": "The security team wants sign-ins to the payroll app to require an additional verification prompt only when users connect from outside the corporate offices; sign-ins from inside should proceed normally. Which Entra capability implements this location-based rule?",
    "o": [
      "Conditional Access",
      "Security defaults",
      "Network security groups",
      "Azure role-based access control"
    ],
    "a": 0,
    "e": "Conditional Access evaluates signals such as network location during sign-in and can demand extra verification only under the conditions you define. Security defaults turn on baseline protections tenant-wide with no ability to exempt trusted office locations."
  },
  {
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
    "as": [
      1,
      3,
      4
    ],
    "e": "Windows Hello for Business, the Microsoft Authenticator app, and FIDO2 security keys replace the password with biometrics, a device PIN, or a hardware-backed key. An SMS code after a password is standard multifactor authentication that still depends on the password, and security questions support account recovery rather than sign-in."
  },
  {
    "t": "rbac",
    "x": "An operations engineer must be able to start, stop, and restart the virtual machines in one resource group, without gaining the right to give other people access. Which assignment follows the principle of least privilege?",
    "o": [
      "Assign the Owner role for the subscription",
      "Assign the Virtual Machine Administrator Login role for the subscription",
      "Add the engineer to a Conditional Access policy",
      "Assign the Virtual Machine Contributor role for that resource group"
    ],
    "a": 3,
    "e": "Virtual Machine Contributor scoped to the one resource group permits managing the VMs there while withholding the right to create role assignments. Owner at the subscription level grants everything, including the ability to delegate access, which far exceeds what the engineer needs."
  },
  {
    "t": "rbac",
    "x": "A compliance auditor is granted the Reader role at the organization's top-level management group. What can the auditor now view?",
    "o": [
      "Settings of the management group itself, but nothing beneath it",
      "Only resources created after the role was assigned",
      "A single subscription of the auditor's choosing",
      "Every subscription, resource group, and resource under the management group"
    ],
    "a": 3,
    "e": "Role assignments flow down the hierarchy, so Reader at a management group is inherited by every subscription, resource group, and resource beneath it. No approval or opt-in occurs at lower levels, and the assignment covers existing resources as well as ones created later."
  },
  {
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
    "as": [
      2,
      4
    ],
    "e": "Zero Trust rests on verifying every request explicitly, granting least-privilege access, and assuming breach. Trusting internal traffic or leaning on a perimeter reflects the older castle-and-moat model that Zero Trust is designed to replace."
  },
  {
    "t": "defense-in-depth",
    "x": "An architect protects a web application with several controls at once: DDoS protection at the network edge, network security groups on the subnet, encryption for stored data, and MFA on admin accounts. Which security strategy does this combination illustrate?",
    "o": [
      "Perimeter security",
      "The shared responsibility model",
      "Defense in depth",
      "Zero Trust"
    ],
    "a": 2,
    "e": "Defense in depth stations independent controls at many layers, from the network edge through identity and data, so one failed control does not expose the application. The shared responsibility model divides duties between Microsoft and the customer; it does not describe stacking safeguards."
  },
  {
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
    "as": [
      1,
      3
    ],
    "e": "Defender for Cloud pairs security posture management, surfacing a secure score with prioritized recommendations, with threat protection that raises alerts on suspicious activity. Spending analysis belongs to Cost Management, and cross-region VM replication is handled by Azure Site Recovery."
  },
  {
    "t": "cost-factors",
    "x": "A team deploys identical D4s v5 virtual machines to two different Azure regions and notices the monthly compute charge differs between them. What explains the difference?",
    "o": [
      "A reservation discount was applied automatically in one region",
      "Bandwidth egress charges are folded into the compute meter",
      "Meter rates for the same VM size differ from region to region",
      "One region's hardware generation carries a billing surcharge"
    ],
    "a": 2,
    "e": "Azure prices each meter per region, so the same VM size can cost more where local infrastructure and energy are pricier. Reservations are only applied after you purchase them, and egress is billed on its own networking meters rather than inside compute."
  },
  {
    "t": "cost-factors",
    "x": "An application hosted in Azure streams large video files to viewers worldwide. Uploads into Azure are free, yet a networking line item on the bill keeps growing with viewership. What is being billed?",
    "o": [
      "Inbound data transfer from users into Azure",
      "Outbound data transfer from Azure to the internet",
      "Per-transaction request charges on blob storage",
      "Traffic between resources inside the same virtual network"
    ],
    "a": 1,
    "e": "Data leaving Azure is metered as outbound (egress) transfer, so the charge grows as more viewers download the videos. Inbound transfer is free, which is why uploads produce no matching line item on the bill."
  },
  {
    "t": "cost-factors",
    "x": "An administrator stops and deallocates a virtual machine at the end of each workday. Which charge continues to accrue while the VM is deallocated?",
    "o": [
      "Compute time for the vCPUs assigned to the VM",
      "The Windows Server license bundled in the hourly rate",
      "The temporary disk on the underlying host",
      "Storage for the VM's managed disks"
    ],
    "a": 3,
    "e": "Deallocating releases the compute hardware, so vCPU time and the bundled license charge stop, but the managed disks still occupy storage and keep billing. The temporary disk lives on the host and is discarded at deallocation, so it carries no separate storage charge."
  },
  {
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
    "as": [
      1,
      3
    ],
    "e": "Region determines the meter rate, and consumption determines how many units of that meter are billed. Tags, names, and resource group membership organize and track resources but have no effect on the price of the service itself."
  },
  {
    "t": "cost-reduction",
    "x": "A company runs a database virtual machine around the clock and expects to keep it for at least three years. Which purchasing option lowers its compute cost the most while the workload keeps running continuously?",
    "o": [
      "Deploy the workload on spot virtual machines",
      "Deallocate the VM outside of business hours",
      "Purchase a reservation for that VM size and region",
      "Move the subscription to a pay-as-you-go offer"
    ],
    "a": 2,
    "e": "A reservation trades a one- or three-year commitment for a large discount, which fits a workload that runs continuously for years. Spot pricing is cheaper per hour, but a spot VM can be evicted whenever Azure needs the capacity, which a production database cannot tolerate."
  },
  {
    "t": "cost-reduction",
    "x": "An organization owns Windows Server licenses covered by active Software Assurance. Which program lets it apply those licenses to Azure virtual machines to lower the compute rate?",
    "o": [
      "Azure Reservations",
      "Azure Hybrid Benefit",
      "Azure Dev/Test pricing",
      "Microsoft Cost Management"
    ],
    "a": 1,
    "e": "Azure Hybrid Benefit lets you bring Windows Server or SQL Server licenses with Software Assurance to Azure so you pay only the base compute rate. Reservations also reduce compute cost, but they do it through a term commitment, not through licenses you already own."
  },
  {
    "t": "cost-reduction",
    "x": "A research team needs to run a large batch-processing job that can be interrupted and resumed without losing data. The budget is tight and the completion date is flexible. Which compute option fits best?",
    "o": [
      "Spot virtual machines",
      "Reserved virtual machine instances",
      "Virtual machines with Azure Hybrid Benefit",
      "Virtual machines in an availability set"
    ],
    "a": 0,
    "e": "Spot VMs sell unused Azure capacity at a steep discount in exchange for possible eviction, which suits interruptible batch work with a flexible deadline. Reservations lower cost only through a long-term commitment, and availability sets address resiliency rather than price."
  },
  {
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
    "as": [
      0,
      2
    ],
    "e": "Right-sizing to a smaller SKU and deallocating during idle hours both cut the metered compute the VMs consume. Regrouping, locking, or tagging the VMs changes how they are organized and protected, not how much they cost."
  },
  {
    "t": "pricing-calculator",
    "x": "A company has not yet moved to Azure and wants to compare what its on-premises datacenter spends on hardware, power, and IT labor against running the same workloads in Azure. Which tool provides that comparison?",
    "o": [
      "The Azure pricing calculator",
      "Microsoft Cost Management",
      "Azure Advisor",
      "The Total Cost of Ownership calculator"
    ],
    "a": 3,
    "e": "The TCO calculator takes details of existing on-premises infrastructure, including power, space, and labor, and projects the savings of moving to Azure. The pricing calculator only estimates Azure service charges and has no model of current datacenter spending."
  },
  {
    "t": "pricing-calculator",
    "x": "A solution architect is designing a new workload that will use App Service, Azure SQL Database, and a storage account. Before anything is deployed, the architect needs an estimate of the monthly charges for the chosen configuration. Which tool should be used?",
    "o": [
      "The Total Cost of Ownership calculator",
      "The Azure pricing calculator",
      "Cost analysis in Microsoft Cost Management",
      "Azure Migrate"
    ],
    "a": 1,
    "e": "The pricing calculator builds a pre-deployment estimate from selected services, tiers, regions, and expected usage. Cost analysis reports what deployed resources have actually spent, and the TCO calculator compares on-premises spending with Azure rather than pricing a new design."
  },
  {
    "t": "pricing-calculator",
    "x": "Which input does the Total Cost of Ownership calculator require that the pricing calculator does not?",
    "o": [
      "The Azure services and tiers planned for the solution",
      "Invoice history from an existing Azure subscription",
      "Details of current on-premises servers, storage, and IT labor",
      "Utilization metrics collected by Azure Monitor"
    ],
    "a": 2,
    "e": "The TCO calculator models what the current datacenter costs, so it asks about existing servers, storage, networking, and labor. The pricing calculator starts from planned Azure services instead and needs no information about on-premises assets."
  },
  {
    "t": "cost-management",
    "x": "A department head wants an email notification when subscription spending reaches 80 percent of a set monthly amount, without any resources being stopped. What should be configured?",
    "o": [
      "A spending limit applied to the subscription",
      "A policy assignment that denies new deployments",
      "A read-only lock at the subscription scope",
      "A budget with an alert rule in Cost Management"
    ],
    "a": 3,
    "e": "A Cost Management budget can send alert emails at defined thresholds while leaving every resource untouched. A spending limit disables resources when the cap is reached, so it fails the requirement, and policies and locks govern deployments and changes rather than spending notifications."
  },
  {
    "t": "cost-management",
    "x": "Finance asks which service consumed the most spend last month and how the total trended by resource group. Where can this breakdown be viewed?",
    "o": [
      "Cost analysis in Microsoft Cost Management",
      "The Azure pricing calculator",
      "Azure Service Health",
      "Metrics explorer in Azure Monitor"
    ],
    "a": 0,
    "e": "Cost analysis breaks accrued spend down by service, resource group, region, tag, and time, which answers both questions directly. The pricing calculator only forecasts future configurations and has no view of what a subscription actually spent."
  },
  {
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
    "as": [
      0,
      2,
      4
    ],
    "e": "Cost Management provides budgets with alerts, interactive cost analysis, and scheduled exports of cost data. It reports and forecasts spending but does not resize resources, and estimating a datacenter replacement is the job of the TCO calculator."
  },
  {
    "t": "cost-management",
    "x": "A subscription owner sets a budget of 5,000 dollars in Cost Management, and spending reaches that amount in the middle of the month. What happens to the subscription's resources?",
    "o": [
      "The subscription is disabled until the next billing period",
      "Alert notifications are sent and resources continue running",
      "New resource deployments are blocked automatically",
      "Running virtual machines are deallocated to stop charges"
    ],
    "a": 1,
    "e": "Budgets are informational: they raise alerts at the thresholds you define but take no action against resources on their own. Disabling services when credit runs out is the behavior of a spending limit, which is a separate mechanism on credit-based offers."
  },
  {
    "t": "tags",
    "x": "A company runs resources for several internal departments in a single subscription. Finance wants the monthly charges broken down by department. What is the most direct way to enable this?",
    "o": [
      "Create a separate management group for each internal department",
      "Embed the department name in every resource's naming convention",
      "Tag each resource by department and group costs on that tag",
      "Assign each department a separate directory role in Microsoft Entra ID"
    ],
    "a": 2,
    "e": "A department tag travels with each resource and becomes a grouping dimension in cost analysis, giving finance a per-department breakdown inside one subscription. Management groups organize whole subscriptions, and naming conventions are not a dimension billing tools can aggregate on."
  },
  {
    "t": "tags",
    "x": "Which statement about resource tags in Azure is accurate?",
    "o": [
      "Tags applied to a subscription propagate to every resource it contains",
      "Resources do not automatically inherit tags applied to their resource group",
      "A single resource can carry no more than one tag name and value",
      "Tags must be assigned when a resource is first created"
    ],
    "a": 1,
    "e": "Tags apply only at the scope where they are set; resources do not pick up tags from their parent resource group or subscription unless a policy copies them down. A resource supports up to 50 tag pairs, and tags can be added or changed at any time after creation."
  },
  {
    "t": "tags",
    "x": "An operations team wants every newly deployed resource to carry a costCenter tag, and deployments missing it should be flagged or blocked. Which service enforces this requirement?",
    "o": [
      "Role-based access control",
      "Resource locks",
      "Microsoft Cost Management",
      "Azure Policy"
    ],
    "a": 3,
    "e": "Azure Policy can audit or deny resource deployments that lack a required tag, making it the enforcement mechanism for tagging standards. RBAC decides who can perform actions, locks prevent deletion or modification, and Cost Management reports on spend without enforcing anything."
  },
  {
    "t": "azure-policy",
    "x": "Riverton Insurance must ensure that every new storage account created in any of its 40 subscriptions is deployed only to the Sweden Central region, and it wants non-conforming requests stopped before the account is created. What should the governance team do?",
    "o": [
      "Add a location tag to every subscription and review it quarterly",
      "Assign a policy definition that restricts allowed locations at a management group",
      "Apply a ReadOnly lock to each of the subscriptions",
      "Grant administrators the Contributor role scoped to the Sweden Central region"
    ],
    "a": 1,
    "e": "An Azure Policy allowed-locations rule denies non-compliant deployments before the resource exists, and assigning it at a management group covers every subscription underneath. RBAC controls who can act rather than where resources may be placed, and role assignments cannot be scoped to a region."
  },
  {
    "t": "azure-policy",
    "x": "An engineer with the Contributor role deploys virtual machines into a subscription regularly. Today one deployment fails with an error stating that the requested VM size is not allowed in this subscription, although other sizes still deploy successfully. What is the most likely cause?",
    "o": [
      "The engineer's role assignment expired partway through the deployment",
      "A resource lock on the subscription is blocking new virtual machines",
      "An Azure Policy assignment restricts the VM SKUs that can be deployed",
      "The subscription has exhausted its total vCPU quota for that region"
    ],
    "a": 2,
    "e": "Azure Policy governs resource properties such as VM SKU and denies non-compliant requests even when the user holds sufficient RBAC permissions. A quota problem would return a quota-exceeded error, and a lock would block every deployment rather than a single size."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "Deny-style effects stop non-compliant deployments, and audit-style effects mark existing resources as non-compliant in compliance reports without altering them. Azure Policy does not delete resources, relocate them, or suspend subscriptions on its own."
  },
  {
    "t": "resource-locks",
    "x": "After a production storage account was accidentally removed, an operations manager wants administrators to keep adjusting the account's configuration while making sure it cannot be removed again. What should the manager apply?",
    "o": [
      "A ReadOnly lock on the storage account",
      "A CanNotDelete lock on the storage account",
      "The Reader role for all administrators",
      "A mandatory tag on the storage account"
    ],
    "a": 1,
    "e": "A CanNotDelete lock blocks deletion while still permitting configuration changes. A ReadOnly lock would also stop administrators from modifying settings, and tags attach metadata without enforcing anything."
  },
  {
    "t": "resource-locks",
    "x": "Administrators can still view a storage account's configuration and metrics in the portal, but attempts to regenerate its access keys now fail, and no role assignments have changed recently. What is the most likely cause?",
    "o": [
      "A CanNotDelete lock was applied at the resource group level",
      "The storage account was recently moved to a different subscription",
      "A ReadOnly lock was applied at the resource group level",
      "The account's replication was changed to geo-redundant storage"
    ],
    "a": 2,
    "e": "A ReadOnly lock inherited from the resource group blocks any operation that changes state, and regenerating keys is such an operation, while plain reads keep working. A CanNotDelete lock stops only deletion, so key regeneration would still succeed."
  },
  {
    "t": "resource-locks",
    "x": "A subscription Owner attempts to delete an unused resource group and the operation is refused, even though the Owner role assignment is confirmed as active. What best explains the refusal?",
    "o": [
      "The Owner role grants access management but not resource removal rights",
      "The resource group inherits a lock applied at the subscription scope",
      "An Azure Policy audit assignment flagged the resource group as non-compliant",
      "A virtual machine inside the group is deallocated and must be started first"
    ],
    "a": 1,
    "e": "Locks restrict operations on top of RBAC, so even an Owner is blocked until the lock is removed, and locks are inherited by child scopes. Audit effects only report compliance, and the power state of contained resources does not prevent group deletion."
  },
  {
    "t": "purview",
    "x": "Which Microsoft service is designed to map an organization's data estate, catalog data sources, and classify sensitive information across on-premises systems, other clouds, and SaaS applications?",
    "o": [
      "Azure Monitor",
      "Azure Data Factory",
      "Microsoft Defender for Cloud",
      "Microsoft Purview"
    ],
    "a": 3,
    "e": "Purview provides unified data governance, including automated scanning, a searchable catalog, and sensitivity classification across hybrid and multicloud estates. Data Factory moves and transforms data but does not govern or catalog it."
  },
  {
    "t": "purview",
    "x": "A retailer must locate every place customer payment card numbers are stored across Azure SQL databases, Azure Storage, and an Amazon S3 bucket, and then apply sensitivity labels to what is found. Which service fits this requirement?",
    "o": [
      "Microsoft Purview",
      "Azure Policy",
      "Microsoft Defender for Cloud",
      "Azure Advisor"
    ],
    "a": 0,
    "e": "Purview scans data sources inside and outside Azure, detects sensitive content such as card numbers, and applies classification labels. Azure Policy evaluates resource configurations, not the data stored inside those resources."
  },
  {
    "t": "arm",
    "x": "A virtual machine can be created from the portal, the CLI, PowerShell, or an SDK, and in every case the request is received by the same underlying service, which authenticates and authorizes it before carrying it out. Which service performs this role?",
    "o": [
      "Microsoft Entra ID",
      "Azure Cloud Shell",
      "Azure Monitor",
      "Azure Resource Manager"
    ],
    "a": 3,
    "e": "Azure Resource Manager is the management layer that every tool and SDK calls, handling authentication, authorization, and routing for each request. Microsoft Entra ID supplies the identities involved but does not receive and execute deployment operations itself."
  },
  {
    "t": "arm",
    "x": "One engineer automates deployments with the Azure CLI while a teammate uses Azure PowerShell. A security reviewer asks whether the two tools are subject to different permission and compliance checks. What is the accurate answer?",
    "o": [
      "Each tool calls a separate endpoint, so the checks applied can differ between them",
      "The portal applies the full set of checks, while command-line tools apply a reduced set",
      "Both tools submit requests to the same management layer, so the checks are identical",
      "The checks vary with the operating system on which each tool is installed and run"
    ],
    "a": 2,
    "e": "All management requests flow through Azure Resource Manager, which applies RBAC and Azure Policy uniformly no matter which client sent the request. Neither the choice of tool nor its host operating system changes what is enforced."
  },
  {
    "t": "arm",
    "x": "Every Azure service, from virtual machines to databases, is administered through a single shared control layer. Which capability does this design make possible?",
    "o": [
      "Applying uniform governance, such as tags and access control, to any resource type",
      "Querying data stored in one service directly from any other Azure service",
      "Running every service in all Azure regions at an identical hourly price",
      "Sharing spare compute capacity between unrelated customer subscriptions"
    ],
    "a": 0,
    "e": "Because Azure Resource Manager fronts every service, cross-cutting controls like RBAC, locks, tags, and policy behave consistently across resource types. The control layer standardizes management operations; it does not unify data access, pricing, or capacity."
  },
  {
    "t": "arm-templates",
    "x": "Which statement describes how an ARM template expresses the infrastructure it deploys?",
    "o": [
      "It declares the intended end state and the platform determines the operations to reach it",
      "It replays a recorded sequence of administrator commands in their original order",
      "It clones a disk image captured from a previously deployed environment",
      "It stores the sign-in credentials needed to configure each resource afterward"
    ],
    "a": 0,
    "e": "Templates are declarative, describing what should exist rather than how to build it, and Resource Manager works out ordering and parallelism. A recorded command sequence describes an imperative script, which is the opposite approach."
  },
  {
    "t": "arm-templates",
    "x": "A QA team rebuilds an identical five-VM test environment every sprint by following a portal checklist, and small differences keep creeping in between builds. Which change would best eliminate the inconsistencies?",
    "o": [
      "Apply resource locks so the finished environment cannot drift",
      "Assign one senior administrator to perform every rebuild",
      "Review Azure Advisor recommendations after each rebuild completes",
      "Define the environment in a template and deploy from that file each sprint"
    ],
    "a": 3,
    "e": "An infrastructure-as-code definition produces the same result on every deployment, removing the manual variation that causes drift between builds. Locks only freeze what has already been built and cannot make two hand-built environments match."
  },
  {
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
    "as": [
      1,
      3
    ],
    "e": "Declarative files give repeatable, consistent deployments and can be versioned and reviewed like any other code. Pricing and access-control requirements are unaffected by how a resource is provisioned, and declarative deployments avoid interactive step-by-step input rather than requiring it."
  },
  {
    "t": "azure-arc",
    "x": "Contoso runs virtual machines in another public cloud and physical servers in its own datacenter. The IT director wants to apply Azure Policy assignments and role-based access control to these machines alongside native Azure resources, without relocating any workloads. Which service enables this?",
    "o": [
      "Azure Migrate",
      "Azure ExpressRoute",
      "Azure Arc",
      "Azure Site Recovery"
    ],
    "a": 2,
    "e": "Azure Arc projects external servers into Azure Resource Manager so governance and access controls apply to them where they already run. Azure Migrate assesses and moves workloads into Azure, which is exactly the relocation the director wants to avoid."
  },
  {
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
    "as": [
      0,
      1,
      3
    ],
    "e": "Arc extends Azure's control plane to machines, Kubernetes clusters, and SQL Server instances running outside Azure, so tools like Azure Policy and RBAC apply to them. Microsoft 365 and Power BI content is administered through those services' own portals, not through Resource Manager."
  },
  {
    "t": "portal-tools",
    "x": "While working at a client office, a consultant needs to run several Azure PowerShell cmdlets, but the client's laptop does not allow any software installation. What is the most practical option?",
    "o": [
      "Install the Az module from the PowerShell Gallery on the laptop",
      "Launch Cloud Shell in the portal and select the PowerShell environment",
      "Install the Azure CLI and translate each cmdlet into an az command",
      "Open Azure Storage Explorer and run the cmdlets from its interface"
    ],
    "a": 1,
    "e": "Cloud Shell runs in the browser with the Az module preinstalled and already authenticated, so nothing touches the local machine. Both installation routes conflict with the laptop's restrictions, and Storage Explorer is a desktop app that does not execute cmdlets."
  },
  {
    "t": "portal-tools",
    "x": "An administrator prefers managing resources with commands that start with az, such as az group create, and wants the same experience on a Windows desktop and a macOS laptop. Which tool provides this?",
    "o": [
      "Azure PowerShell",
      "Azure Resource Manager",
      "Azure Storage Explorer",
      "Azure CLI"
    ],
    "a": 3,
    "e": "The Azure CLI is the cross-platform command-line tool whose commands begin with az. Azure PowerShell also runs on both operating systems but uses Verb-Noun cmdlets such as New-AzResourceGroup instead."
  },
  {
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
    "as": [
      1,
      3
    ],
    "e": "The portal and Cloud Shell are both delivered entirely through the browser, and Cloud Shell even includes CLI and PowerShell tooling pre-authenticated. The Az module, the standalone CLI, and Storage Explorer all require installation on the local machine."
  },
  {
    "t": "advisor",
    "x": "An administrator reviews the recommendations that Azure Advisor has generated for a subscription. Which set of categories organizes those recommendations?",
    "o": [
      "Plan, Ready, Adopt, Govern, and Manage",
      "Compute, Networking, Storage, Databases, and Identity",
      "Cost, Security, Reliability, Operational excellence, and Performance",
      "Ideate, Prototype, Deploy, Operate, and Optimize"
    ],
    "a": 2,
    "e": "Advisor groups its best-practice findings into five categories: cost, security, reliability, operational excellence, and performance. The other lists describe Cloud Adoption Framework stages or Azure service families, which are not how Advisor organizes its output."
  },
  {
    "t": "service-health",
    "x": "Which tool informs an administrator about active Azure incidents, upcoming planned maintenance, and advisories that are relevant to the subscriptions they manage?",
    "o": [
      "Azure Monitor",
      "Azure Advisor",
      "Azure Service Health",
      "Azure Resource Health"
    ],
    "a": 2,
    "e": "Service Health tracks platform-level events, including service issues, planned maintenance, and health and security advisories, scoped to the services and regions a subscription uses. Resource Health is the near-miss; it reports the availability of one specific resource rather than platform-wide events."
  },
  {
    "t": "monitor",
    "x": "A team wants a single service that collects metrics, logs, and diagnostic data from its resources and supports dashboards and alerting on that data. Which service fills this role?",
    "o": [
      "Azure Advisor",
      "Azure Service Health",
      "Azure Arc",
      "Azure Monitor"
    ],
    "a": 3,
    "e": "Azure Monitor is the platform's telemetry pipeline; it gathers metrics and logs from resources and applications and powers visualizations and alerts. Azure Arc projects non-Azure machines into Azure management but does not itself collect and analyze telemetry."
  },
  {
    "t": "advisor",
    "x": "A finance team wants to find underutilized virtual machines that could be resized or shut down to lower monthly spending. Which tool surfaces these suggestions automatically?",
    "o": [
      "Microsoft Cost Management",
      "Azure Advisor",
      "Azure Monitor",
      "Azure Service Health"
    ],
    "a": 1,
    "e": "Advisor's cost category flags underutilized resources, such as virtual machines that could be resized or deallocated. Cost Management is the tempting alternative, but it analyzes and reports what you spend rather than generating right-sizing suggestions."
  },
  {
    "t": "service-health",
    "x": "A single virtual machine has become unavailable while identical machines in the same region keep running. Which tool shows whether the Azure platform or a user action caused this specific machine's outage?",
    "o": [
      "Azure Resource Health",
      "Azure Service Health",
      "The Azure status page",
      "Azure Advisor"
    ],
    "a": 0,
    "e": "Resource Health reports the availability of an individual resource and distinguishes platform-initiated problems from user-initiated ones, with a history of past events. Service Health covers service- or region-wide incidents, so it would show nothing for a problem isolated to one machine."
  },
  {
    "t": "monitor",
    "x": "An engineer must search two weeks of collected virtual machine event logs for a specific error code and chart how often it appeared each day. Where should the engineer perform this search?",
    "o": [
      "In a Log Analytics workspace, using the Kusto Query Language",
      "In Azure Monitor metrics explorer, using a chart filter",
      "In Azure Resource Health, using the availability history view",
      "In the activity log, using the portal's event filter"
    ],
    "a": 0,
    "e": "Collected log data lands in a Log Analytics workspace, where Kusto Query Language can filter on an error code and summarize occurrences by day. Metrics explorer handles numeric time-series values only, and the activity log records control-plane operations rather than in-guest events."
  },
  {
    "t": "advisor",
    "x": "Azure Advisor flags several virtual machines that do not have backup configured. Under which category does this recommendation appear?",
    "o": [
      "Cost",
      "Performance",
      "Operational excellence",
      "Reliability"
    ],
    "a": 3,
    "e": "Findings that improve resiliency, such as enabling backup or adding redundancy, fall under reliability. Operational excellence is the near-miss; it covers process, deployment, and manageability guidance rather than protection against data loss or downtime."
  },
  {
    "t": "service-health",
    "x": "How does Azure Service Health differ from the public Azure status page?",
    "o": [
      "It reports the global status of every Azure service for every customer worldwide",
      "It becomes available after a support plan is purchased for the subscription",
      "It publishes incident details only after the incident has been resolved",
      "It scopes incident information to the services and regions a subscription uses"
    ],
    "a": 3,
    "e": "The public status page shows the same global view to everyone; Service Health filters that information to what a subscription actually deploys and supports configurable alerts. It is included at no extra cost and reports incidents while they are still ongoing."
  },
  {
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
    "as": [
      1,
      3
    ],
    "e": "Application Insights captures request and dependency telemetry, so it can rank failing operations and measure how long database calls take. Spending forecasts come from Cost Management, and maintenance notices arrive through Service Health, not from application telemetry."
  },
  {
    "t": "advisor",
    "x": "Which operational question is Azure Advisor designed to answer?",
    "o": [
      "Whether deployed resources follow recommended cost, security, and resiliency practices",
      "Whether any Azure region in use is currently experiencing a platform incident",
      "What events an application wrote to its logs during the previous day",
      "Which users signed in from unfamiliar locations during the past week"
    ],
    "a": 0,
    "e": "Advisor continuously evaluates deployed resources against best practices across its five categories and suggests improvements. Questions about active platform incidents belong to Service Health, and log or sign-in investigations belong to Azure Monitor and Entra ID tooling."
  },
  {
    "t": "service-health",
    "x": "A company runs production workloads in one Azure region. The operations team wants an email whenever Microsoft schedules platform work that could affect those workloads. What should the team configure?",
    "o": [
      "An Azure Monitor metric alert on host CPU utilization",
      "A Service Health alert that notifies an action group",
      "A Microsoft Cost Management budget alert on the subscription",
      "An Azure Advisor recommendation digest delivered weekly"
    ],
    "a": 1,
    "e": "Service Health alerts fire on planned maintenance, service issues, and advisories for the regions and services you select, and the linked action group delivers email or other notifications. Metric alerts respond to resource telemetry, not to Microsoft's maintenance schedule."
  },
  {
    "t": "monitor",
    "x": "When average CPU on a production virtual machine stays above 90 percent for ten minutes, an on-call engineer should receive an SMS and a webhook should open a ticket. What should be configured?",
    "o": [
      "An activity log alert scoped to the machine's resource group",
      "A metric alert rule that notifies an action group",
      "A Service Health alert filtered to the machine's region",
      "A Resource Health alert on the machine's availability state"
    ],
    "a": 1,
    "e": "Metric alert rules evaluate telemetry such as CPU against a threshold and hand off notifications and automation, including SMS and webhooks, to an action group. The other alert types react to control-plane events, platform incidents, or availability changes rather than performance thresholds."
  },
  {
    "t": "advisor",
    "x": "Which statements accurately describe Azure Advisor? (Select TWO.)",
    "o": [
      "It requires an agent on each virtual machine before analysis can begin",
      "It bills the subscription a fee for each recommendation it generates",
      "It provides personalized suggestions based on configuration and usage patterns",
      "It modifies resource configurations on its own as soon as findings appear",
      "Its security findings come from an integration with Microsoft Defender for Cloud"
    ],
    "a": 2,
    "as": [
      2,
      4
    ],
    "e": "Advisor analyzes configuration and usage telemetry at no extra charge and without agents, and its security category surfaces findings from Defender for Cloud. It presents recommendations for review; administrators decide whether to remediate, postpone, or dismiss each one."
  },
  {
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
    "as": [
      1,
      4
    ],
    "e": "Service Health surfaces Microsoft-side events: active service issues, planned maintenance, and advisories relevant to your deployments. Actions taken by your own administrators, application exceptions, and optimization suggestions belong to Resource Health, Application Insights, and Advisor respectively."
  },
  {
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
    "as": [
      0,
      2,
      4
    ],
    "e": "Azure Monitor automatically collects platform metrics, stores log data for Kusto queries in Log Analytics, and fires alerts that action groups turn into notifications or automation. Purchase recommendations come from Advisor, and maintenance notices come from Service Health."
  },
  {
    "t": "advisor",
    "x": "A governance lead wants a single percentage that summarizes how closely a subscription follows best practices, broken down by areas such as cost and reliability. Which feature provides this?",
    "o": [
      "Secure score in Microsoft Defender for Cloud",
      "Advisor score",
      "Azure Monitor workbooks",
      "Cost analysis in Microsoft Cost Management"
    ],
    "a": 1,
    "e": "Advisor score converts outstanding recommendations into an overall percentage plus a score for each category, highlighting where remediation matters most. Secure score is the near-miss; it measures security posture alone and says nothing about cost, reliability, or performance."
  },
  {
    "t": "service-health",
    "x": "Microsoft announces that an API version used by one of a company's deployed services will retire next year, and customers must migrate before that date. Under which Service Health category does this appear?",
    "o": [
      "A service issue",
      "Planned maintenance",
      "A health advisory",
      "A security advisory"
    ],
    "a": 2,
    "e": "Health advisories communicate changes that require customer action, such as feature or API retirements, when nothing is actively broken. A service issue is an ongoing incident, and planned maintenance is scheduled platform work with a defined window."
  },
  {
    "t": "monitor",
    "x": "After a slow afternoon for a customer-facing web app, the operations team asks two questions: how did the application itself behave, and was there an Azure-side problem at the time? Which pairing addresses both?",
    "o": [
      "Service Health for application behavior; Application Insights for platform incidents",
      "Azure Advisor for application behavior; Resource Health for platform incidents",
      "Application Insights for application behavior; Service Health history for platform incidents",
      "Azure Policy for application behavior; the activity log for platform incidents"
    ],
    "a": 2,
    "e": "Application Insights records request durations, failures, and dependency calls over the slow period, while Service Health's history shows whether a platform incident overlapped it. The reversed pairing is the trap: Service Health knows nothing about application-level performance."
  }
],
}
