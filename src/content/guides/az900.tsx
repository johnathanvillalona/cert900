import { AZ900_LESSONS, az900SourcesForLesson, type Az900LessonId } from '@/data/az900-lessons'
import { ComparisonTable, LearningLesson, LessonConcept, TeachingSteps, type LearningResources, type LessonContent } from '@/components/GuideLearningContent'
import { LearningDiagram } from '@/components/GuideLearningDiagrams'

export const azureLearningResources: LearningResources = {
  examId: 'az-900', contentsId: 'az900-lesson-contents', providerLabel: 'Microsoft',
  taskLabel: 'Skill-group references (Cert900 keys, not official task numbers)',
  videoNotice: 'The linked videos are existing resources; older recordings may use earlier service names or omit current objectives.',
  referenceLinkClassName: 'inline-flex min-h-11 items-center gap-1',
  resolveSources: az900SourcesForLesson,
}

/** Original, static instruction. No learner answers, progress or runtime state. */
export const AZ900_LESSON_CONTENT: Readonly<Record<Az900LessonId, LessonContent>> = {
  'az900-cloud-changes': {
    intro: <p>A small shop needs a website, but buying a server would mean finding space for it, maintaining it and planning for busy days. Cloud computing lets the shop use computing services over a network instead. The provider runs the underlying infrastructure, while the shop chooses the services it needs.</p>,
    explanation: <>
      <LessonConcept title="Pay for capacity as you need it">
        <p>With a consumption-based model, cost depends on what you provision or use, according to each service’s pricing. You can start small without buying equipment for a possible future peak. That flexibility also means someone needs to watch usage and remove resources that are no longer needed.</p>
        <p>Some charges follow running time, some follow stored data or requests, and others involve commitments or licenses. Cloud services can reduce a large upfront purchase, called capital expenditure. They often move spending toward ongoing operating expenditure, but they don’t guarantee a lower bill.</p>
      </LessonConcept>
      <LessonConcept title="Choose where the services will live">
        <p>A <strong>public cloud</strong> offers services to many customers using provider infrastructure, with controls that separate customers. A <strong>private cloud</strong> serves one organization. It can be hosted on the organization’s premises or elsewhere; a room full of ordinary servers isn’t automatically a private cloud.</p>
        <p>A <strong>hybrid cloud</strong> connects private and public environments so they can work together. For example, a factory could keep a local system near its machines while using Azure to analyze selected records. The connection and the division of work need to be designed.</p>
      </LessonConcept>
      <LessonConcept title="Distinguish growing from staying available">
        <p><strong>Scalability</strong> is the ability to handle more work by adding capacity. <strong>Elasticity</strong> means adjusting that capacity as demand changes. A shop might add web instances for a sale and remove them afterward. Autoscaling needs suitable settings; it isn’t a promise that every service will scale itself.</p>
        <p><strong>High availability</strong> keeps a service accessible through expected failures. <strong>Reliability</strong> is its ability to keep working and recover when things go wrong. Extra capacity alone doesn’t provide either: you also need to consider failures, backups and how traffic reaches healthy instances.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'a shop preparing for a seasonal sale',
    scenario: <TeachingSteps steps={[
      { title: 'Start with an ordinary week', body: <p>The shop estimates its usual traffic and starts with enough capacity to serve it. It checks the bill and response times instead of assuming that cloud hosting is automatically cheaper.</p> },
      { title: 'Prepare for the busy day', body: <p>The team tests scaling limits and failure recovery before the sale. It also checks that the database can handle extra work, because adding web servers won’t fix every bottleneck.</p> },
      { title: 'Scale back and review', body: <p>When the sale ends, the team removes unneeded capacity and reviews costs. Stored data and other services can still incur charges after the traffic falls.</p> },
    ]} />,
    misconception: 'Moving to the cloud doesn’t hand every operating decision to the provider. You still choose the design, access rules, recovery approach and spending controls.',
    takeaway: 'Cloud computing changes how you obtain and manage capacity. Start with the work you need to support, then plan cost, growth and failure recovery together.',
    check: { prompt: 'A shop adds more web instances, but all of them depend on one failing database. Has it solved availability?', explanation: <p>No. It has added web capacity, but the database is still a shared failure point. The team needs to examine the whole application and plan how each important dependency stays available or recovers.</p> },
    advanced: { title: 'predictability, management and serverless', content: <>
      <p>Performance predictability means understanding the capacity and response times you can expect. Cost predictability means estimating and watching spending. Tests, pricing tools, monitoring and well-chosen limits help with both; a variable bill doesn’t become predictable just because it comes from a cloud provider.</p>
      <p>Cloud manageability includes configuring resources and observing them through tools and automation. Shared governance and security services can help a team apply consistent rules, but those rules still need owners who choose, review and maintain them.</p>
      <p><strong>Serverless</strong> means the provider handles server provisioning and much of the capacity management for your code. Servers still exist. Execution limits, networking, permissions and pricing still matter, and the amount of automatic scaling depends on the service and plan.</p>
    </> },
  },
  'az900-shared-responsibility': {
    intro: <p>Suppose your team wants an expense application. You could run it on a virtual machine, deploy your own code to a managed platform, or subscribe to a finished product. Each choice gives you a different amount of control and leaves you with different jobs to do.</p>,
    explanation: <>
      <LessonConcept title="IaaS gives you a machine to manage">
        <p><strong>Infrastructure as a service (IaaS)</strong> gives you resources such as virtual machines, disks and networks. With Azure Virtual Machines, Microsoft maintains the physical hosts. Your team still manages the guest operating system, installs patches and looks after its applications.</p>
        <p>This can suit an existing application that needs particular operating-system settings. The extra control comes with work: someone must secure, monitor and maintain the software inside the virtual machine.</p>
      </LessonConcept>
      <LessonConcept title="PaaS lets you focus on an application">
        <p><strong>Platform as a service (PaaS)</strong> provides a managed environment for your application or data. For example, Azure App Service can host your web application without making your team patch the underlying operating system. You still maintain your code and configure the application’s access and settings.</p>
        <p>That’s a useful trade when the supported platform fits your needs. You give up some control over the underlying machine, so check runtime support and service limits before choosing it.</p>
      </LessonConcept>
      <LessonConcept title="SaaS provides the finished application">
        <p><strong>Software as a service (SaaS)</strong> provides an application people can use, such as Microsoft 365. The provider runs the application and its platform. Your organization still decides who receives access, how information is shared and which settings meet its needs.</p>
        <p>In every model, you remain responsible for using your data appropriately and protecting your accounts and user devices. Shared responsibility doesn’t mean each job is split in half. It means you need to know who handles each part of the service you chose.</p>
      </LessonConcept>
    </>,
    comparison: <LearningDiagram kind="azure-responsibility" />,
    scenarioTitle: 'choosing an expense system',
    scenario: <>
      <p>If a finished expense product meets the team’s needs, SaaS may avoid unnecessary development. If the team needs its own approval workflow and can use a supported web runtime, App Service offers a PaaS option.</p>
      <p>An older application that requires specific system software may need a virtual machine. Before choosing IaaS, the team agrees who will patch it. In all three cases, someone must still remove access when an employee leaves.</p>
    </>,
    misconception: 'A managed service doesn’t make your data, application settings or access decisions the provider’s responsibility. Check the particular service rather than treating the diagram as a contract.',
    takeaway: 'Choose the amount of control you need, then identify the work your team will still own. Less infrastructure work doesn’t mean there is no security work.',
    check: { prompt: 'You deploy your own web application to Azure App Service. Who maintains its code and decides which users may access it?', explanation: <p>Your team does. App Service manages the hosting platform, but it doesn’t decide whether your code is safe or whether a particular employee should have access. That distinction is part of the shared responsibility model.</p> },
    advanced: { title: 'why a real application can use several models', content: <>
      <p>A company can use a SaaS email product, a PaaS database and an IaaS application server together. Classify each service rather than assigning one label to the entire company. Operating-system control, supported features and the division of security work differ across those services.</p>
      <p>In an on-premises environment, the organization handles the physical infrastructure too. Even there, responsibilities may be divided between internal teams and contractors. The cloud model explains an operating boundary; it doesn’t remove the need to check agreements and service documentation.</p>
    </> },
  },
  'az900-regions-reliability': {
    intro: <p>A service can fail even when its application code is correct. A server might break, a datacenter might lose power or a wider incident might affect a region. Azure’s locations help you plan for those different failures, but you need to choose how your application uses them.</p>,
    explanation: <>
      <LessonConcept title="Choose a region for the workload">
        <p>An <strong>Azure region</strong> is a geographic area containing datacenters connected by a low-latency network. A datacenter is a physical facility containing computing equipment. When you create a regional resource, you choose where it will run, subject to that service’s availability.</p>
        <p>Consider the distance to users, data residency requirements, service availability and cost. A closer region can reduce network delay, but location alone doesn’t establish compliance. Sovereign cloud environments, such as Azure Government, provide separate environments for particular requirements and have their own availability and access conditions.</p>
      </LessonConcept>
      <LessonConcept title="Use zones to limit a local failure">
        <p>An <strong>availability zone</strong> groups one or more datacenters within a region, with independent power, cooling and networking. Separate zones help isolate a failure. A zonal virtual machine still runs in its selected zone; it doesn’t automatically move itself elsewhere if that zone fails.</p>
        <p>Some services offer a zone-redundant configuration that distributes work or data across zones. Others need you to place separate instances and configure recovery. Check the service, region and tier: support for zones and the number used by a resource can differ.</p>
      </LessonConcept>
      <LearningDiagram kind="azure-regions" />
      <LessonConcept title="Plan recovery beyond one region">
        <p>Multiple zones in one region don’t protect against every regional incident. Some regions are paired with another region, but not all are. A region pair doesn’t automatically copy your application or provide its failover plan.</p>
        <p>Decide what data must be replicated, how much recent work you could lose and how users will reach the recovered service. Backups protect a recoverable history; live replicas help with availability. A good recovery plan often needs both.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'keeping a booking service available',
    scenario: <TeachingSteps steps={[
      { title: 'Identify what an outage would interrupt', body: <p>The company lists the website, booking data and network entry point. Protecting only the web servers would leave the booking database as a possible point of failure.</p> },
      { title: 'Choose service-specific zone protection', body: <p>The team configures supported resources for zone resilience and tests how traffic reaches healthy instances. It doesn’t assume that selecting a region makes every resource zone-redundant.</p> },
      { title: 'Rehearse a regional recovery', body: <p>The team checks its replicated data and backups, then practices recovery to another region. It records the recovery time and possible data loss instead of assuming the region pair handles everything.</p> },
    ]} />,
    misconception: 'A zone isn’t a region, a datacenter isn’t always a whole zone, and a region pair isn’t an application disaster-recovery configuration.',
    takeaway: 'Match the protection to the failure you want to survive. Verify what the service does automatically and test the parts your team must configure.',
    check: { prompt: 'A team puts one virtual machine in zone 1. Will Azure automatically run another copy in zone 2?', explanation: <p>No. A zonal virtual machine is placed in the selected zone. The team needs an appropriate multi-instance design or a service with suitable managed zone redundancy, along with the networking and data protection that design requires.</p> },
    advanced: { title: 'availability sets, recovery targets and service commitments', content: <>
      <p>An availability set spreads virtual machines across fault domains and update domains to reduce shared hardware and maintenance risks. It isn’t the same as spreading them across availability zones. Choose the mechanism appropriate to the service and the failure you are addressing.</p>
      <p>A recovery time objective describes how soon a service should be restored. A recovery point objective describes how much recent data loss is acceptable, measured in time. These are planning targets; test your recovery process to find out whether it meets them.</p>
      <p>A service-level agreement describes a service commitment and its conditions. It isn’t proof that your entire application has that availability. Dependencies, configuration and operating procedures also affect the experience learners or customers receive.</p>
    </> },
  },
  'az900-resource-hierarchy': {
    intro: <><p>When a team creates a website in Azure, it may need a web app, storage and a virtual network. Those are resources. Azure’s management hierarchy helps the team group them, assign access and apply rules without configuring every resource separately.</p><p>A <strong>scope</strong> is the set of resources a management decision applies to. An access assignment at one resource’s scope is narrow; an assignment covering a subscription can reach many resources.</p></>,
    explanation: <>
      <LessonConcept title="Group resources that belong together">
        <p>A <strong>resource group</strong> holds related resources that you want to manage together. For example, a test application’s resources might share a resource group because the team creates and removes them together. Each resource belongs to one resource group at a time.</p>
        <p>A resource group isn’t a network boundary or a folder inside another resource group. Its resources can be in different regions. The resource group’s own location stores its management metadata; it doesn’t force every resource into that region.</p>
      </LessonConcept>
      <LessonConcept title="Use subscriptions and management groups for broader decisions">
        <p>A <strong>subscription</strong> provides a scope for billing, access and resource limits. An organization may separate production and development into different subscriptions. A subscription can contain many resource groups, while each resource group belongs to one subscription.</p>
        <p><strong>Management groups</strong> organize subscriptions so that shared policies and access assignments can apply across them. They can be nested. Rules and permissions assigned at a higher scope may be inherited below it, so always check the parent scopes when investigating access.</p>
      </LessonConcept>
      <LessonConcept title="Keep identity separate from location and billing">
        <p>A Microsoft Entra tenant is an organization’s identity directory. Each Azure subscription trusts one tenant, and one tenant can be associated with multiple subscriptions. The tenant helps identify users; Azure role assignments determine their permissions at a particular resource scope.</p>
        <p>Azure Resource Manager is the service that handles management operations such as creating or updating resources. Whether you use the portal or an automation tool, you still need permission. Creating a resource in a particular region doesn’t give someone access to it.</p>
      </LessonConcept>
    </>,
    comparison: <LearningDiagram kind="azure-hierarchy" />,
    scenarioTitle: 'separating a company’s test and production websites',
    scenario: <>
      <p>The company creates separate subscriptions for production and development, then places each application’s resources in suitable resource groups. A management group lets its platform team apply common rules across both subscriptions.</p>
      <p>A developer receives access to the development resource group without receiving access to production. The team also reviews inherited role assignments: a broader permission at subscription scope could grant more access than the developer’s local assignment suggests.</p>
    </>,
    misconception: 'Putting two resources in the same resource group doesn’t connect their networks or make their application data accessible to one another.',
    takeaway: 'Use the hierarchy to organize management and permissions. Use regions for placement, virtual networks for connectivity and the directory for identity.',
    check: { prompt: 'An organization wants one deployment policy to apply to several subscriptions. Where could it assign that policy?', explanation: <p>A management group containing those subscriptions is a suitable scope. The policy can be inherited by resources below it. A resource group is too narrow because it belongs to a single subscription.</p> },
    advanced: { title: 'tags, lifecycle and inherited controls', content: <>
      <p>A tag is a name-value label, such as Department: Training. Tags help with organization and cost analysis, but they aren’t access permissions. Tags assigned to a resource group aren’t automatically copied to its resources; use an appropriate policy or process if you need consistent resource tags.</p>
      <p>Deleting a resource group normally deletes its resources, subject to protections and service constraints. That makes lifecycle planning important. Before grouping resources together, ask whether the team really intends to remove them together.</p>
      <p>Azure Policy and Azure role-based access control solve different problems. Policy can assess or enforce configuration requirements. Role-based access control determines who can perform actions. Neither the diagram nor a convenient group name replaces those actual controls.</p>
    </> },
  },
  'az900-choose-compute': {
    intro: <p><strong>Compute</strong> is the processing capacity that runs your code. Before choosing an Azure service, ask what the application needs: control of an operating system, a managed web runtime, a packaged container or a short piece of code triggered by an event.</p>,
    explanation: <>
      <LessonConcept title="Use a virtual machine when you need the operating system">
        <p>A virtual machine (VM) behaves like a computer with an operating system you manage. It can suit older software or a workload that needs system-level configuration. You choose its size and image, attach storage, configure networking and keep the guest software maintained.</p>
        <p>A VM needs supporting resources such as disks and a network interface connected to a subnet. A public IP address is optional. Azure Virtual Machine Scale Sets help manage groups of VMs; supported configurations can scale the group as demand changes.</p>
      </LessonConcept>
      <LessonConcept title="Use managed hosting when the platform fits">
        <p>Azure App Service hosts web applications and application programming interfaces (APIs) on a managed platform. Your team deploys its application while Microsoft manages the underlying hosting infrastructure. Check the supported runtime, plan and network features before choosing it.</p>
        <p>A container packages an application and its dependencies while sharing a host operating-system kernel. Azure Container Instances can run containers without managing a cluster. Azure Container Apps provides managed application hosting, while Azure Kubernetes Service suits teams that need Kubernetes orchestration and can manage its added complexity.</p>
      </LessonConcept>
      <LessonConcept title="Use functions for event-driven work">
        <p>Azure Functions runs code in response to events, such as a new uploaded image or a scheduled task. The provider manages the servers. Plan limits, execution behavior and scaling still matter, so don’t assume every long-running application belongs in a function.</p>
        <p>For employees who need remote desktops or published applications, Azure Virtual Desktop addresses a different need. It delivers a desktop experience, rather than simply hosting the public website those employees visit.</p>
      </LessonConcept>
    </>,
    comparison: <ComparisonTable caption="Start with the job your code needs to do" columns={['Need', 'Possible starting point', 'What to check']} rows={[
      ['Control the operating system', 'Azure Virtual Machines', 'Patching, disks, networking and recovery are still operating work.'],
      ['Host a supported web application', 'Azure App Service', 'Runtime support, plan limits and application settings.'],
      ['Run packaged application components', 'A managed container service', 'Whether you need a simple container, application hosting or Kubernetes orchestration.'],
      ['React to an upload or another event', 'Azure Functions', 'Trigger support, execution limits and the hosting plan.'],
    ]} />,
    scenarioTitle: 'an application that processes customer photos',
    scenario: <>
      <p>The team can host its web interface on App Service and use a function to create a thumbnail when a photo arrives. If a specialist processor needs system software unavailable on those platforms, a container or VM may fit that separate component.</p>
      <p>The team tests processing time and memory use before choosing a plan. Using several services is reasonable when each solves a real need; splitting everything into more components would also add operating work.</p>
    </>,
    misconception: 'Containers, functions and web apps aren’t interchangeable labels for the same service. They package and run work differently, and their management responsibilities vary.',
    takeaway: 'Choose a hosting model by the control, execution pattern and operating work the application needs. You don’t need to choose the most complicated option to build something useful.',
    check: { prompt: 'A team has a supported web application and wants to avoid patching its hosting operating system. Must it use a VM?', explanation: <p>No. A managed platform such as App Service may fit. A VM gives more operating-system control, but it also leaves the team responsible for maintaining that operating system. The team should check the application’s requirements before deciding.</p> },
    advanced: { title: 'scaling, VM protection and hosting tradeoffs', content: <>
      <p>Scaling up gives an instance more capacity; scaling out adds instances. Both have limits. Test whether the application can share state and distribute requests before assuming that adding instances will help.</p>
      <p>Availability sets reduce some hardware and maintenance risks for VMs. Availability zones address a different failure boundary. Neither feature removes the need for a working data, network and recovery design.</p>
      <p>Container portability doesn’t mean every container runs unchanged on every host. Operating-system compatibility, network configuration and external dependencies still matter. Similarly, serverless pricing depends on the selected plan, not only on the word “serverless.”</p>
    </> },
  },
  'az900-network-connectivity': {
    intro: <p>A working application needs more than a running server. Users must find it, requests must reach the right component, and private data services should only accept intended connections. Thinking through one request helps you see where Azure’s networking services fit.</p>,
    explanation: <>
      <LessonConcept title="Give resources a network and a name">
        <p>An Azure virtual network (VNet) provides an isolated network for resources such as VMs. A subnet divides its address space into smaller ranges, with IP addresses that identify network interfaces. You can separate application components into subnets and use controls such as network security groups to allow the traffic they need.</p>
        <p>The Domain Name System (DNS) translates a name into information such as an IP address. Azure DNS can host DNS records. Resolving a name doesn’t prove that the destination is reachable or that the requester has permission to use it.</p>
      </LessonConcept>
      <LessonConcept title="Distinguish a public endpoint from a private one">
        <p>A public endpoint can be reached through a public network address, subject to the service’s network and access rules. It doesn’t mean anonymous access is allowed. A private endpoint gives a supported service a private IP address in your VNet through Azure Private Link.</p>
        <p>Creating a private endpoint doesn’t automatically turn off the service’s public endpoint. Review public network access, DNS and authorization separately. A successful private connection still needs whatever identity and permissions the service requires.</p>
      </LessonConcept>
      <LearningDiagram kind="azure-network" />
      <LessonConcept title="Choose how networks connect">
        <p>VNet peering connects virtual networks over Microsoft’s backbone. It doesn’t automatically connect every network beyond them. Azure VPN Gateway can establish encrypted tunnels, including a site-to-site connection over the public internet.</p>
        <p>ExpressRoute provides a private connection through a connectivity provider, rather than an ordinary internet VPN. Private routing doesn’t by itself guarantee end-to-end encryption. Choose protection for the connection and application according to the data and requirements.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'a small application with private database access',
    scenario: <TeachingSteps steps={[
      { title: 'Let visitors reach the web tier', body: <p>The example website has a public entry point. Its DNS record helps visitors find it, and its network controls allow the intended web traffic. Application sign-in remains a separate decision.</p> },
      { title: 'Keep database traffic on the intended path', body: <p>The web tier reaches a database through its private endpoint. The team configures name resolution and database permissions, then separately restricts the database’s public network access.</p> },
      { title: 'Check a request from beginning to end', body: <p>If a connection fails, the team checks the name, address, route, network rules and service permissions. Fixing a DNS record won’t repair a missing database permission.</p> },
    ]} />,
    misconception: 'A private address is a network location, not a user permission. Network access and authorization both need to be right.',
    takeaway: 'Trace how a request finds its destination, reaches it and receives permission. Those are related steps, but each can fail for a different reason.',
    check: { prompt: 'A private endpoint works, but the database still accepts connections through its public endpoint. Has the private endpoint disabled public access?', explanation: <p>No. Private connectivity and public network access are separate settings. The team must configure the supported public-access controls and check both paths. Database authentication and authorization still apply whichever permitted path is used.</p> },
    advanced: { title: 'what the small network diagram leaves out', content: <>
      <p>The diagram teaches connection boundaries, not a complete production design. A real application may also need load balancing, web filtering, resilient compute, private DNS integration and recovery across zones or regions.</p>
      <p>A network security group filters allowed inbound and outbound traffic using rules. Azure Firewall is a managed network security service with broader centralized capabilities. Neither replaces application authorization or the need to keep software secure.</p>
      <p>Peering is not transitive by default: connecting network A to B and B to C doesn’t automatically connect A to C. Plan routing and security for the connections you actually need.</p>
    </> },
  },
  'az900-storage-migration': {
    intro: <p>A company’s photos, shared documents and VM disks are all data, but people use them differently. Start by asking how the application needs to read and change its data. Then choose protection and transfer tools that fit that pattern.</p>,
    explanation: <>
      <LessonConcept title="Choose the right kind of storage">
        <p>Azure Blob Storage stores objects such as images, documents and backups. Azure Files provides managed file shares for applications and users that need shared files. Azure Queue Storage holds messages that let application components pass work to one another.</p>
        <p>Azure Table Storage holds structured, nonrelational key-value data. Azure managed disks provide block storage for VMs. A storage account organizes supported storage services and settings; managed disks are separate Azure resources rather than files you place in an ordinary storage account.</p>
      </LessonConcept>
      <LessonConcept title="Choose access cost and failure protection separately">
        <p>For supported blobs, Hot, Cool and Cold tiers trade storage cost against access cost. Archive is offline storage: retrieving an archived blob requires rehydration before normal access. It doesn’t suit a document that someone needs to open immediately.</p>
        <p>Redundancy keeps copies to survive failures. Locally redundant storage (LRS) keeps copies within one datacenter. Zone-redundant storage (ZRS) distributes copies across availability zones in the primary region. Geo-redundant options also replicate to a secondary region, but that cross-region replication is asynchronous, so recent changes can be lost during failover.</p>
        <p>Replication isn’t a complete backup strategy. An unwanted deletion or change can also be replicated. Plan an appropriate recoverable history, and check recovery features and retention for the service you chose.</p>
      </LessonConcept>
      <LessonConcept title="Match the transfer method to the move">
        <p>AzCopy is a command-line tool for transferring storage data. Azure Storage Explorer provides a graphical interface for supported storage operations. Azure File Sync can keep Windows Server file shares connected to Azure Files, including local caching when cloud tiering is configured.</p>
        <p>For a wider migration, Azure Migrate helps discover, assess and move supported workloads. Azure Data Box supports an offline transfer using physical devices when suitable. Check current device availability and migration guidance before planning a shipment.</p>
      </LessonConcept>
    </>,
    comparison: <ComparisonTable caption="Choose by how the data will be used" columns={['Example', 'Possible service', 'Why it fits']} rows={[
      ['Website images', 'Blob Storage', 'The application reads and writes individual objects.'],
      ['A shared folder for supported clients', 'Azure Files', 'Clients need file-share access, such as Server Message Block (SMB) or Network File System (NFS) where supported.'],
      ['Background processing requests', 'Queue Storage', 'One component leaves messages for another to process.'],
      ['A VM operating-system disk', 'Azure managed disks', 'The VM needs an attached block-storage device.'],
    ]} />,
    scenarioTitle: 'moving a design studio’s project files',
    scenario: <>
      <p>The studio needs a shared file experience, so it evaluates Azure Files. If it also needs local Windows Server caching, it evaluates Azure File Sync. Its public portfolio images are a separate object-storage need that may fit Blob Storage.</p>
      <p>The team checks bandwidth, file compatibility, permissions and the amount of data before choosing a transfer tool. It rehearses a small move and recovery before switching everyday work to the new storage.</p>
    </>,
    misconception: 'The cheapest storage-capacity price isn’t necessarily the cheapest usable option. Retrieval, transactions, minimum retention, network transfer and recovery requirements can change the decision.',
    takeaway: 'Choose storage by access pattern, then choose redundancy, recovery and migration deliberately. Those decisions solve different problems.',
    check: { prompt: 'A document is rarely used, but staff must open it immediately when requested. Is Archive automatically the best tier?', explanation: <p>No. Archive requires rehydration, which can take time. The team should compare an online tier such as Cool or Cold, along with access charges and minimum retention requirements. Rare access alone doesn’t make a delay acceptable.</p> },
    advanced: { title: 'redundancy combinations, account options and tier caveats', content: <>
      <ComparisonTable caption="What changes between redundancy choices" columns={['Choice', 'Primary region', 'Secondary region']} rows={[
        ['LRS', 'Copies in one datacenter', 'No geo-replica'],
        ['ZRS', 'Copies across availability zones', 'No geo-replica'],
        ['GRS', 'Local redundancy', 'Asynchronous replication to a locally redundant secondary'],
        ['GZRS', 'Zone redundancy', 'Asynchronous replication to a locally redundant secondary'],
      ]} />
      <p>Read-access variants, RA-GRS and RA-GZRS, also let clients read the secondary endpoint before failover. They don’t make the secondary an ordinary writable copy. Feature support varies by storage service, account type and region.</p>
      <p>A standard general-purpose v2 account supports several common storage services. Premium account options focus on particular performance and storage needs. Check supported redundancy, access protocols and account type together rather than assuming every combination is available.</p>
      <p>Cool, Cold and Archive can carry early-deletion charges when data is removed or moved before the applicable minimum retention period. Smart tier can automate movement among online tiers for supported data; it doesn’t remove the need to understand pricing and eligibility.</p>
      <p>Azure Storage Mover is another managed option for supported large file migrations. File transfer, server synchronization, application migration and backups are different jobs, even when they involve some of the same files.</p>
    </> },
  },
  'az900-identity-access': {
    intro: <p>When a new employee signs in, two questions need answers: “Who are you?” and “What may you do?” Authentication answers the first. Authorization answers the second. Keeping those questions separate makes Azure access problems much easier to understand.</p>,
    explanation: <>
      <LessonConcept title="Use the directory to identify people and applications">
        <p><strong>Microsoft Entra ID</strong> is a cloud identity and access service. A tenant holds directory identities such as users, groups and application identities. The older name Azure Active Directory still appears in some videos; current guidance calls it Microsoft Entra ID.</p>
        <p>Single sign-on (SSO) lets a user access integrated applications without separately signing in to each one. External identities support appropriate access for people outside the organization. Neither feature means every signed-in person should receive every application or resource permission.</p>
      </LessonConcept>
      <LessonConcept title="Strengthen sign-in without confusing it with permissions">
        <p>Multifactor authentication (MFA) asks for evidence from more than one kind of factor, such as something you know and something you possess. Two passwords aren’t two different factors. Passwordless methods can use a device, key or biometric-based sign-in instead of a typed password.</p>
        <p>Conditional Access uses signals, such as the user, application and device, to decide which access conditions apply. It might require MFA or a compliant device. Available capabilities depend on licensing, and a successful sign-in still doesn’t grant Azure management permissions by itself.</p>
      </LessonConcept>
      <LessonConcept title="Grant only the actions needed at the right scope">
        <p><strong>Azure role-based access control (Azure RBAC)</strong> assigns a role to an identity at a scope, such as a resource group. A Reader can inspect supported resource information without being allowed to change it. A broader role at a parent scope may also be inherited.</p>
        <p>Zero Trust means checking access explicitly, using least privilege and planning as though a breach could occur. Defense in depth adds layers, such as identity controls, network restrictions and application protection, so one failed control isn’t the only thing standing between an attacker and the data.</p>
      </LessonConcept>
    </>,
    scenarioTitle: 'giving a support engineer the access they need',
    scenario: <TeachingSteps steps={[
      { title: 'Confirm the person signing in', body: <p>The engineer authenticates with the organization’s approved method. An applicable Conditional Access policy may require additional evidence or an approved device.</p> },
      { title: 'Assign a suitable role', body: <p>The engineer needs to inspect one test application, so the team considers a narrow Reader assignment. It checks inherited permissions rather than assuming that the visible local role is the person’s only access.</p> },
      { title: 'Check data access separately', body: <p>Reading resource settings doesn’t necessarily allow reading the application’s stored data. Some services distinguish management operations from data operations, so the team checks the actual permission required.</p> },
    ]} />,
    misconception: 'Signing in successfully, reaching a private network and receiving permission to change an Azure resource are separate conditions. Meeting one doesn’t prove the others are satisfied.',
    takeaway: 'Verify identity, apply suitable sign-in conditions and grant the smallest useful permission at the right scope. Check the effective access, including inherited roles.',
    check: { prompt: 'An engineer completes MFA but cannot restart a VM. Does that prove MFA failed?', explanation: <p>No. MFA helps verify the sign-in. Restarting the VM requires an appropriate authorized action at the VM’s scope. The team should check the role assignment and other applicable restrictions rather than weakening authentication.</p> },
    advanced: { title: 'directory roles, legacy protocols and security posture', content: <>
      <p>Microsoft Entra directory roles administer identity-related tasks. Azure RBAC roles manage access to Azure resources. A similarly named role in one system doesn’t automatically grant the same authority in the other.</p>
      <p>Microsoft Entra Domain Services supplies managed domain capabilities for supported legacy needs. These include domain join, group policy, directory lookups through the Lightweight Directory Access Protocol (LDAP) and authentication using Kerberos or NTLM. Microsoft Entra ID itself isn’t a cloud-hosted replacement with every capability of an on-premises domain controller.</p>
      <p>Microsoft Defender for Cloud helps assess security posture and offers workload protection capabilities. It can identify recommendations and risks; it doesn’t automatically make an application compliant or remove the need to fix its access rules.</p>
      <p>Passwordless doesn’t mean every method provides the same assurance. Some methods can satisfy MFA requirements, while others have different properties. Check the method, policy and licensing rather than assuming a single label proves the sign-in is secure.</p>
    </> },
  },
  'az900-cost-governance': {
    intro: <p>A team can deploy an application quickly and still create an expensive, difficult-to-manage system. Good governance gives people useful boundaries: what they may deploy, where it belongs, how costs are reviewed and how the same setup can be created again.</p>,
    explanation: <>
      <LessonConcept title="Estimate before deploying, then watch actual usage">
        <p>The Azure pricing calculator helps estimate a proposed design. Include the region, service tier, capacity, storage, network transfer and licensing assumptions. A small VM estimate doesn’t represent the whole application if it leaves out disks, backups or a database.</p>
        <p>Cost Management helps analyze spending and configure budgets and alerts. A budget notification doesn’t stop resources or cap the bill. If the team needs an automated response, that needs a separately designed and tested process.</p>
      </LessonConcept>
      <LessonConcept title="Use different controls for different rules">
        <p>Azure Policy can assess or enforce configuration requirements, such as allowed regions. Azure RBAC controls who can perform actions. Resource locks can restrict deletion or changes at the management layer. These controls work together, but they aren’t interchangeable.</p>
        <p>Tags help organize resources and attribute costs. Microsoft Purview supports data governance, security and compliance work, including understanding and protecting data. None of these tools can certify compliance just because it has been switched on; people still need evidence and operating procedures.</p>
      </LessonConcept>
      <LessonConcept title="Make deployments repeatable">
        <p>The Azure portal provides a graphical management interface. Azure’s command-line interface (Azure CLI) and Azure PowerShell provide command-based tools. Azure Cloud Shell is a browser-accessible environment for those tools. These are ways to manage resources; they don’t bypass the need for authorization.</p>
        <p>With <strong>infrastructure as code (IaC)</strong>, a team records the intended resources in files it can review and reuse. Azure Resource Manager (ARM) handles deployments and management operations. ARM templates describe resources declaratively; Bicep offers another authoring language that compiles to ARM templates.</p>
      </LessonConcept>
    </>,
    comparison: <ComparisonTable caption="Pick the control that answers your question" columns={['Question', 'Relevant tool or control']} rows={[
      ['Who may change this VM?', 'Azure RBAC'],
      ['Does a proposed resource meet our configuration rules?', 'Azure Policy'],
      ['How can we reduce accidental management deletion?', 'A suitable resource lock'],
      ['Which department is responsible for this cost?', 'Consistent tags and Cost Management analysis'],
      ['How do we repeat the same deployment?', 'Reviewed infrastructure-as-code files'],
    ]} />,
    scenarioTitle: 'a training team launching a temporary lab',
    scenario: <TeachingSteps steps={[
      { title: 'Estimate the whole lab', body: <p>The team includes compute, storage and expected transfer in its estimate. It decides how long the lab will run and who will remove it when training ends.</p> },
      { title: 'Apply practical guardrails', body: <p>The team uses suitable permissions, configuration policies and tags. It sets a budget alert, while recognizing that someone still needs to respond to it.</p> },
      { title: 'Keep a reviewed deployment record', body: <p>The lab’s infrastructure definition makes the next session easier to reproduce. Before deleting the temporary resources, the team checks for shared dependencies and any protected information that must be retained.</p> },
    ]} />,
    misconception: 'A budget isn’t a spending cap, a tag isn’t a permission, and a resource lock isn’t a complete data-protection policy.',
    takeaway: 'Estimate, observe and assign responsibility for cost. Combine permissions, configuration rules and repeatable deployment files according to the problem each one solves.',
    check: { prompt: 'A monthly budget reaches its alert threshold. Will Azure automatically stop the application?', explanation: <p>No. The budget reports spending and can notify the right people, but it doesn’t stop consumption. The team must investigate and take an appropriate action. An automatic shutdown would require a separate process and may be unsuitable for a live service.</p> },
    advanced: { title: 'pricing choices, lock boundaries and hybrid management', content: <>
      <p>Pay-as-you-go pricing supports flexible use. Reservations and savings plans can reduce eligible costs in exchange for a commitment, while Spot capacity offers a discount with interruption risk. Check eligibility, term and workload needs; a discount doesn’t make an unsuitable commitment economical.</p>
      <p>A CanNotDelete lock permits authorized changes but blocks management deletion. A ReadOnly lock also restricts management updates. Locks apply to control-plane operations, not all data-plane actions: protecting a storage account from deletion doesn’t necessarily prevent someone deleting a blob inside it.</p>
      <p>Policies can audit, deny or use other supported effects. An audit finding doesn’t mean the resource has already been repaired. Review scope, exemptions and remediation behavior before relying on a policy as protection.</p>
      <p>Azure Arc brings supported resources outside Azure into Azure management experiences. It can help with governance across on-premises or other-cloud systems; connecting a server through Arc doesn’t move the server or its workload into an Azure region.</p>
    </> },
  },
  'az900-monitor-health': {
    intro: <p>A customer says your application is slow. You need to find out whether your code is struggling, an Azure service has an incident or the design needs more capacity. Azure’s monitoring and health tools answer different parts of that investigation.</p>,
    explanation: <>
      <LessonConcept title="Use Azure Monitor to investigate your workload">
        <p>Azure Monitor collects and analyzes telemetry: evidence about what systems are doing. Metrics are measurements over time, such as response time or processor use. Logs contain recorded events and details that help you investigate what happened.</p>
        <p>Log Analytics helps query collected log data. Application Insights, part of Azure Monitor, helps investigate application behavior such as failed requests and slow dependencies. Alerts can notify people or trigger configured actions when conditions are met; the useful signals still need to be configured.</p>
      </LessonConcept>
      <LessonConcept title="Check Azure’s service health separately">
        <p>Azure Service Health provides information about relevant service incidents, planned maintenance and health advisories. The public Azure status page gives a broader view of major Azure issues. Resource Health helps assess the availability of particular resources.</p>
        <p>A healthy public status page doesn’t prove that your application is working. Your own code, a resource configuration or a dependency can still fail. Likewise, an Azure incident somewhere else may have nothing to do with the problem your customer reported.</p>
      </LessonConcept>
      <LessonConcept title="Use Advisor to look for improvements">
        <p>Azure Advisor examines supported configuration and usage information to recommend improvements. Its categories include reliability, security, performance, cost and operational excellence. It helps identify useful changes, rather than serving as the main record of every application request.</p>
        <p>Review a recommendation in the context of the workload before applying it. A cheaper configuration might not meet an application’s performance or recovery needs. Recommendations are evidence to consider, not permission to change a live system without review.</p>
      </LessonConcept>
    </>,
    comparison: <ComparisonTable caption="Choose the first place to investigate" columns={['Question', 'Useful starting point']} rows={[
      ['Why is this application request failing?', 'Azure Monitor and Application Insights'],
      ['Do our collected logs show a pattern?', 'Log Analytics'],
      ['Is relevant Azure maintenance or an incident affecting us?', 'Azure Service Health'],
      ['Is this particular resource available?', 'Resource Health'],
      ['What supported improvements should we consider?', 'Azure Advisor'],
    ]} />,
    scenarioTitle: 'investigating a slow booking page',
    scenario: <TeachingSteps steps={[
      { title: 'Look at the application evidence', body: <p>The team checks request timings and failed dependencies. The web tier has spare capacity, but requests to the database are slow. Adding web instances would not directly address that evidence.</p> },
      { title: 'Check for a relevant service event', body: <p>The team reviews Service Health for the affected services and regions. It keeps investigating its workload even if there is no matching Azure incident.</p> },
      { title: 'Make and verify a targeted improvement', body: <p>The team reviews the database behavior and any relevant Advisor recommendations. After an approved change, it measures the customer-facing response time again and improves its alerting if needed.</p> },
    ]} />,
    misconception: 'A green service-health indicator doesn’t establish that your application is healthy. Provider health, resource health and application behavior are related but different evidence.',
    takeaway: 'Use Monitor for workload evidence, Service Health for relevant provider events and Advisor for supported improvements. Start with the symptom and verify the effect of any change.',
    check: { prompt: 'You need to find out whether scheduled Azure maintenance may affect your subscription. Would a CPU chart answer that?', explanation: <p>No. Azure Service Health is the appropriate starting point for relevant maintenance information. A CPU chart helps explain resource usage, but it doesn’t replace provider event information.</p> },
    advanced: { title: 'useful telemetry needs planning', content: <>
      <p>Not every useful log is collected automatically. Diagnostic settings, agents or application instrumentation may be needed for particular signals. Decide what to collect, who may read it and how long to retain it; logs can contain sensitive information and incur costs.</p>
      <p>An alert is only useful if someone can respond. Choose a meaningful condition, route the notification appropriately and test the response. Excessive low-value alerts can make genuine incidents easier to miss.</p>
    </> },
  },
}

export function Az900Lessons() {
  return <>{AZ900_LESSONS.map(lesson => <LearningLesson key={lesson.id} lesson={lesson} content={AZ900_LESSON_CONTENT[lesson.id]} resources={azureLearningResources} />)}</>
}
