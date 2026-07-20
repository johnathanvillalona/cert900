// az-900 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "az-900",
  questions: [
  {
    "t": "capex-opex",
    "x": "A university research department receives grant funding that may only be spent on tangible equipment the department will own outright and depreciate over several years. How should an accountant classify that spending?",
    "o": [
      "A capital expenditure",
      "An operating expenditure",
      "A consumption-based charge",
      "A deferred subscription fee"
    ],
    "a": 0,
    "e": "Buying an asset the organization owns and writes down across its useful life is capital expenditure. Operating expenditure covers the ongoing cost of using something someone else owns, such as a monthly cloud bill, so it does not describe a one-time purchase of owned equipment."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "Consumption-based billing meters what is actually used and stops charging for compute once a machine is deallocated, which is why the fine-grained units matter. Prepaid multi-year capacity and flat annual fees belong to the traditional purchase model, and the provider's own hardware depreciation is never passed to the customer as a line item."
  },
  {
    "t": "capex-opex",
    "x": "A sports streaming platform sees traffic triple for six weeks around a tournament and then settle back to normal. Under consumption-based pricing, how does its infrastructure cost behave compared with owning enough servers to cover the peak all year?",
    "o": [
      "It rises during the tournament and falls again afterward",
      "It stays level because peak capacity is reserved in advance",
      "It drops during the tournament as volume discounts take over",
      "It is locked for the year at the highest month recorded"
    ],
    "a": 0,
    "e": "Consumption pricing tracks usage, so the cost curve follows the traffic curve up and then back down. Owning peak-sized hardware means paying for the peak in all fifty-two weeks of the year, which is exactly the waste this model removes; discounts change the price per unit but not the shape of the curve."
  },
  {
    "t": "capex-opex",
    "x": "An accountant compares a five-year on-site hardware refresh against a monthly subscription to a hosted payroll product. Which comparison is correct?",
    "o": [
      "Hardware is depreciated across its useful life while the subscription is expensed as incurred",
      "Both are capitalized and depreciated on identical schedules over five years",
      "The subscription is capitalized while the hardware is expensed at once",
      "Neither the hardware nor the subscription reaches the operating budget"
    ],
    "a": 0,
    "e": "Owned hardware is a capital purchase carried on the balance sheet and written down over time, while a subscription is an operating cost recognized in the period it is consumed. Capitalizing the subscription and expensing the hardware immediately reverses both treatments, which is the trap in this item."
  },
  {
    "t": "capex-opex",
    "x": "A retail chain's controller reports that total IT spend fell after migrating, yet each month's invoice differs from the last, which makes budgeting harder than it was under fixed hardware leases. What explains the variation?",
    "o": [
      "Charges follow the resources actually consumed each month",
      "Providers revise their published list prices every week",
      "Depreciation schedules are recalculated every billing period",
      "Support contracts are invoiced only after the fiscal year closes"
    ],
    "a": 0,
    "e": "Consumption-based billing converts a flat, predictable payment into a variable one that mirrors real usage, so a quiet month costs less and a busy month costs more. Published prices are stable, and depreciation no longer applies to resources the customer does not own, so neither accounts for the swing."
  },
  {
    "t": "cloud-benefits",
    "x": "A game studio finds its matchmaking tier is processor bound, so engineers place forty more identical nodes behind the load balancer rather than moving to larger machines. Which approach did they take?",
    "o": [
      "Scaling out",
      "Scaling up",
      "Failover clustering",
      "Geo-replication"
    ],
    "a": 0,
    "e": "Adding more instances of the same size spreads work horizontally, which is scaling out. Scaling up would mean replacing each node with a more powerful one, and clustering or replication address component failure and data placement rather than added throughput."
  },
  {
    "t": "cloud-benefits",
    "x": "One operations team files a change request every quarter to add servers before demand grows. Another has rules that add servers as a queue builds and release them overnight, with nobody involved. Which characteristic does only the second team demonstrate?",
    "o": [
      "Elasticity",
      "Scalability",
      "High availability",
      "Fault tolerance"
    ],
    "a": 0,
    "e": "Both teams can grow capacity, so both environments are scalable; only the second grows and shrinks automatically in response to live demand, which is elasticity. Availability and fault tolerance describe surviving failures, not matching capacity to load."
  },
  {
    "t": "cloud-benefits",
    "x": "An architect separates two goals for a claims portal: keeping requests answered while one server dies mid-transaction, and bringing the service back in another region after a fire destroys the primary facility. Which goal does the second one describe?",
    "o": [
      "Disaster recovery",
      "High availability",
      "Elastic scaling",
      "Cost predictability"
    ],
    "a": 0,
    "e": "High availability keeps a service responding through small, local failures using redundancy that users never notice. Restoring service in a different location after an entire site is lost is disaster recovery, which accepts some downtime and possible data loss in exchange for surviving a far larger event."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "Availability comes from redundancy plus something that routes traffic away from a failed component, so multiple instances in separate fault domains behind a health-aware load balancer eliminates the single point of failure. A bigger machine or a bigger disk is still one machine, and restarts do nothing once that machine is gone."
  },
  {
    "t": "cloud-benefits",
    "x": "Shoppers in Singapore report slow page loads for a storefront whose servers all sit in one North American region, while shoppers near that region see no delay. Which change most directly addresses the complaint?",
    "o": [
      "Deploy copies of the workload in regions near those shoppers",
      "Add processor cores to the existing web servers",
      "Turn on automatic operating system patching for the fleet",
      "Purchase a one-year reserved capacity commitment"
    ],
    "a": 0,
    "e": "The symptom is distance-driven latency, so the fix is serving those users from infrastructure closer to them, which a provider's global region footprint makes practical. Adding cores helps a server short on capacity, and patching or reservations change neither the network path nor the round-trip time."
  },
  {
    "t": "cloud-benefits",
    "x": "A platform lead wants every new environment created from a template, with configuration enforced automatically instead of applied by hand from a checklist. Which cloud benefit is she pursuing?",
    "o": [
      "Manageability",
      "Elasticity",
      "Multitenancy",
      "Disaster recovery"
    ],
    "a": 0,
    "e": "Template-driven deployment and automated configuration enforcement are manageability benefits: the environment is administered through code and policy rather than manual steps. Elasticity concerns capacity tracking demand, and an environment can be perfectly elastic while still being built and maintained entirely by hand."
  },
  {
    "t": "cloud-models",
    "x": "A logistics firm runs the same containerized workloads on two competing public providers so it never depends on either one. A rival splits a single workload between its own racks and one provider. Which terms name the two arrangements in that order?",
    "o": [
      "Multi-cloud, then hybrid cloud",
      "Hybrid cloud, then multi-cloud",
      "Private cloud, then public cloud",
      "Multi-cloud, then community cloud"
    ],
    "a": 0,
    "e": "Spreading work across two or more public providers is multi-cloud, while combining infrastructure the organization owns with a public provider as one connected environment is hybrid. The rival's setup includes hardware it owns, so neither half of it is purely public."
  },
  {
    "t": "cloud-models",
    "x": "An auditor asks a school district who owns and maintains the physical servers that its public cloud workloads execute on. Which answer is correct?",
    "o": [
      "The provider owns and maintains that hardware",
      "The district owns it and the provider only hosts it",
      "Ownership is divided evenly between the two parties",
      "A regulator holds title while the provider operates it"
    ],
    "a": 0,
    "e": "In the public cloud the provider owns, houses, powers, and maintains all physical infrastructure, and customers rent capacity on it. Customer-owned hardware sitting in someone else's building describes colocation or a hosted private cloud instead."
  },
  {
    "t": "cloud-models",
    "x": "A board member argues that moving to a private cloud will end the need to forecast capacity years ahead. Why is that argument wrong?",
    "o": [
      "The pool is still bounded by hardware the organization buys and installs",
      "Private clouds are unable to pool resources through virtualization",
      "Private clouds bill only for the minutes each workload actually runs",
      "Private clouds require one physical host for every workload deployed"
    ],
    "a": 0,
    "e": "A private cloud gives internal teams self-service access to a pool of resources, but that pool is only as large as the hardware already purchased and racked, so long-lead capacity planning does not go away. Pay-per-minute economics and effectively unlimited headroom are public cloud properties."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "A hybrid arrangement exists precisely so data with residency or control requirements stays where it is while bursty workloads draw on provider capacity. Nothing about hybrid forces a full migration, surrenders policy control over systems the agency still owns, or demands matching hardware on both sides."
  },
  {
    "t": "cloud-models",
    "x": "Two clinics in one health network each keep patient systems in their own buildings but subscribe to the same imaging analysis service in Azure. Which property lets both use shared provider infrastructure without exposing data to each other?",
    "o": [
      "Multitenancy with logical isolation between customers",
      "Dedicated single-tenant hardware assigned per customer",
      "A physical air gap maintained between customer racks",
      "A shared administrator account scoped to the network"
    ],
    "a": 0,
    "e": "Public cloud economics come from many tenants sharing the same physical infrastructure while the platform keeps each tenant's compute, storage, and identity logically separated. Dedicated hardware and air gaps describe the opposite arrangement, and a shared administrator account would defeat isolation entirely."
  },
  {
    "t": "cloud-models",
    "x": "Before approving a design, a CIO asks how fast each option can hand a project team a working environment: a private cloud the company would build, or subscriptions with a public provider. Which expectation is realistic?",
    "o": [
      "The public option delivers capacity in minutes; the private option waits on procurement",
      "Both options deliver new capacity in minutes once the design is approved",
      "The private option is always faster because no internet link is involved",
      "Neither option supports teams provisioning their own environments"
    ],
    "a": 0,
    "e": "Once a public subscription exists, capacity is a request away, whereas a private cloud can only hand out what has already been bought, delivered, racked, and configured. Self-service provisioning is a defining trait of both models, so the option denying it is wrong on its face."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "Organizations adopt a second provider to avoid lock-in or to reach a capability the first one lacks. The strategy adds operational work rather than removing it: identity, monitoring, and naming now have to be handled twice, in two portals with different terminology."
  },
  {
    "t": "reliability",
    "x": "During a design review an engineer notes that a request travels through two components in series and that a fault in either one breaks the request. What does that structure imply about the path?",
    "o": [
      "It is less reliable than either component measured alone",
      "It is exactly as reliable as its strongest component",
      "Its reliability is unchanged because the parts are independent",
      "It becomes reliable as soon as monitoring is switched on"
    ],
    "a": 0,
    "e": "Chained dependencies compound risk: the request succeeds only when both parts work, so the path is less reliable than either part on its own. Monitoring shortens the time to notice a fault without preventing one, and a series dependency is the definition of parts that are not independent."
  },
  {
    "t": "reliability",
    "x": "A retailer writes nightly backups to a storage array standing in the same building as the production servers. An auditor calls the arrangement inadequate. What is the auditor's point?",
    "o": [
      "One site-wide event can destroy the data and the copies together",
      "Nightly backups are impossible to restore onto virtual machines",
      "Backups only count as protection once they are encrypted at rest",
      "Reliability standards require backup jobs to run hourly not nightly"
    ],
    "a": 0,
    "e": "Keeping the only copy inside the same failure domain as the original means a fire, flood, or power event takes both, so the backup offers nothing against the event most likely to require it. Encryption and job frequency matter for other reasons but neither addresses the shared location."
  },
  {
    "t": "reliability",
    "x": "A parcel delivery platform states it can afford to lose no more than fifteen minutes of shipment data and must be serving customers again within one hour of an outage. Which pair of terms captures those two limits in that order?",
    "o": [
      "Recovery point objective, then recovery time objective",
      "Recovery time objective, then recovery point objective",
      "Mean time between failures, then mean time to repair",
      "Fault domain tolerance, then update domain tolerance"
    ],
    "a": 0,
    "e": "The tolerable quantity of lost data is the recovery point objective, and the deadline for being back in service is the recovery time objective. Reversing the two is the common mistake; the mean-time measures describe how often hardware fails and how long repairs take, not what the business will accept."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "Designing for failure accepts that individual components will break and puts automatic recovery plus deliberate failure testing in place so users are unaffected. Better hardware, tighter change approval, and published uptime figures reduce or describe risk without giving the system any way to keep working when something does break."
  },
  {
    "t": "reliability",
    "x": "An application answers quickly on ordinary weekdays but times out every payday when volume triples, and administrators only add servers by hand hours later, so users experience wildly different response times depending on the day. Which quality is this deployment missing?",
    "o": [
      "Predictable performance as load changes",
      "Durable storage of transaction records",
      "Compliance with data residency rules",
      "Role-based control of administrative access"
    ],
    "a": 0,
    "e": "Predictability means users get consistent behaviour whether demand is ordinary or exceptional, which normally comes from load balancing and autoscaling reacting in time rather than hours later. The other qualities matter for their own reasons but none of them would smooth out the payday experience."
  },
  {
    "t": "service-type-selection",
    "x": "A hospital's imaging vendor ships its product as a container image and asks the hospital to supply only a managed runtime that scales on its own plus a managed database endpoint. Which service category is the hospital being asked to provide?",
    "o": [
      "Platform as a service",
      "Infrastructure as a service",
      "Software as a service",
      "Desktop as a service"
    ],
    "a": 0,
    "e": "A managed runtime and a managed database engine are platform services: the provider operates the operating system, the scaling, and the engine while the customer supplies the workload. Infrastructure as a service would instead hand the hospital virtual machines it has to patch and configure itself."
  },
  {
    "t": "service-type-selection",
    "x": "A city transit agency runs signal-timing software that its vendor certifies against exactly one Windows Server build, and its engineers install a proprietary driver and pick their own reboot windows. Which category supports these constraints?",
    "o": [
      "Infrastructure as a service",
      "Platform as a service",
      "Software as a service",
      "Function as a service"
    ],
    "a": 0,
    "e": "Pinning an operating system build, loading a driver, and controlling reboot timing all require administrative ownership of the guest operating system, which only infrastructure as a service provides. Platform and function offerings deliberately hide the operating system, so the provider decides its version and patch window."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "Kernel-level agents and control over reboot timing both demand administrative access to the guest, which is unique to infrastructure as a service. The remaining three describe exactly what platform and software offerings take over, so they argue against needing virtual machines rather than for it."
  },
  {
    "t": "service-type-selection",
    "x": "A tax-filing service runs flat out for ten weeks each spring and nearly idles the rest of the year. The team keeps its own web application code, does not want to rewrite it, and wants the smallest possible operations burden. Which option fits best?",
    "o": [
      "A managed application platform with autoscaling enabled",
      "A fixed fleet of virtual machines left running year-round",
      "A subscription to a finished tax product from a vendor",
      "Physical servers installed in a colocation facility"
    ],
    "a": 0,
    "e": "Keeping their own code rules out buying finished software, and wanting no server maintenance rules out virtual machines and colocated hardware. A managed platform hosts the code, patches everything beneath it, and scales down between filing seasons so the idle months cost far less."
  },
  {
    "t": "service-type-selection",
    "x": "A team selected a finished subscription product for a workflow that has to execute the company's own code inside the application's request pipeline. Why is that selection a poor fit?",
    "o": [
      "Subscribers cannot deploy arbitrary code into a finished application",
      "Subscription products cannot be reached across the public internet",
      "Subscribers would have to patch the vendor's application servers",
      "Subscription products are not permitted to store customer records"
    ],
    "a": 0,
    "e": "Software as a service arrives complete, so customers configure and integrate but cannot inject their own code into the vendor's runtime; a platform offering is the right category when custom code must run. Internet delivery, vendor-side patching, and customer data storage are all normal parts of the model, not obstacles."
  },
  {
    "t": "service-type-selection",
    "x": "A review board weighs two proposals for an aging ERP: proposal A replaces it with the vendor's hosted subscription, and proposal B rehosts the current system on cloud virtual machines. How do the ongoing customer duties compare?",
    "o": [
      "Proposal A ends operating system maintenance; proposal B keeps it in-house",
      "Both proposals move operating system patching to the cloud provider",
      "Proposal B ends application upgrade work for the customer entirely",
      "Neither proposal changes who is accountable for patching the guest"
    ],
    "a": 0,
    "e": "Rehosting on virtual machines changes where the system runs, not who administers it, so the customer keeps patching and maintaining the guest operating system. Moving to the vendor's hosted subscription hands the operating system, the application, and its upgrade cycle to the vendor."
  },
  {
    "t": "service-types",
    "x": "Two engineers at a startup spend most of every sprint patching servers, renewing certificates, and resizing disks rather than building features. They still need somewhere to deploy their own application code. Which category removes most of that overhead?",
    "o": [
      "Platform as a service",
      "Infrastructure as a service",
      "Software as a service",
      "Storage as a service"
    ],
    "a": 0,
    "e": "Platform offerings absorb the operating system, runtime, patching, and certificate plumbing while the team continues deploying its own code. Software as a service would remove even more work but leaves nowhere to run the code the startup writes."
  },
  {
    "t": "service-types",
    "x": "A school subscribes to a ready-made gradebook it reaches through a browser and writes no code at all. A neighbouring school instead builds its own gradebook and deploys the code to a provider-managed runtime. Which categories describe them in that order?",
    "o": [
      "Software as a service, then platform as a service",
      "Platform as a service, then software as a service",
      "Infrastructure as a service, then platform as a service",
      "Software as a service, then infrastructure as a service"
    ],
    "a": 0,
    "e": "Consuming a finished application over the web is software as a service, while deploying your own code onto a runtime the provider operates is platform as a service. Neither school manages virtual machines, so infrastructure as a service belongs in neither half of the answer."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "With infrastructure as a service the provider's duties stop at the hypervisor, so everything from the guest operating system upward, including the network rules the customer defines, belongs to the customer. Physical hardware, the virtualization layer, and datacenter security never transfer in any service model."
  },
  {
    "t": "service-types",
    "x": "A manufacturer discovers that its chosen application receives new features and interface changes on the vendor's schedule, with no option to defer an upgrade. Which service category behaves this way?",
    "o": [
      "Software as a service",
      "Platform as a service",
      "Infrastructure as a service",
      "On-premises licensing"
    ],
    "a": 0,
    "e": "In software as a service the vendor operates one current version for every tenant, so upgrade timing is the vendor's decision and no customer stays behind. Traditional on-premises licensing is the opposite: the customer owns the installation and can keep an older release running for years."
  },
  {
    "t": "service-types",
    "x": "A retailer rehosts fifty existing servers as cloud virtual machines with no changes to the applications. What remains true after the move?",
    "o": [
      "The retailer still owns patching for all fifty guest operating systems",
      "The provider now takes over application configuration for the retailer",
      "Existing software licensing obligations end at the moment of migration",
      "The migrated servers can no longer be resized after they are created"
    ],
    "a": 0,
    "e": "A lift-and-shift migration changes where servers run, not who administers them, so operating system patching, application configuration, and licensing all stay with the customer. Resizing actually becomes easier after the move, since a virtual machine can be changed to a different size on demand."
  },
  {
    "t": "marketplace",
    "x": "A hospital's IT team wants to deploy a preconfigured third-party firewall appliance image published by a vendor rather than building one from scratch. Where should they obtain the image?",
    "o": [
      "Azure Marketplace",
      "Azure Advisor",
      "Azure Arc",
      "Azure Resource Manager templates"
    ],
    "a": 0,
    "e": "Azure Marketplace is the online store where Microsoft and independent software vendors publish certified images, containers, and managed applications that deploy straight into a subscription. Azure Arc is unrelated: it projects on-premises and other-cloud machines into Azure for management, and it does not distribute vendor software."
  },
  {
    "t": "marketplace",
    "x": "A procurement officer asks how charges for a partner solution obtained through Azure Marketplace are handled.",
    "o": [
      "They appear on the customer's existing Azure invoice",
      "They must be wired directly to the publisher each month",
      "They are absorbed by Microsoft and never charged",
      "They require a separate Microsoft 365 billing account"
    ],
    "a": 0,
    "e": "Purchases transacted through Azure Marketplace are billed on the same Azure invoice as the customer's other consumption, which is a major reason organizations buy there. Paying the publisher directly is what happens outside Marketplace, and it is exactly the separate procurement path Marketplace is meant to avoid."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "Marketplace listings are software and services that deploy into Azure, including vendor VM images, containers, managed applications, and solution templates. Physical hardware is not sold there, and billing artifacts such as license credits or reservation refunds are handled in the Azure portal's cost and billing experiences, not as catalog listings."
  },
  {
    "t": "iot-services",
    "x": "A wind-farm operator needs bidirectional communication with sensors on 50,000 turbines, with a unique identity per device and secure telemetry ingestion. Which service is built for this?",
    "o": [
      "Azure IoT Hub",
      "Azure Event Grid",
      "Azure Service Bus",
      "Azure Notification Hubs"
    ],
    "a": 0,
    "e": "Azure IoT Hub is the managed cloud gateway for device-to-cloud and cloud-to-device messaging, and it maintains a per-device identity registry so each turbine authenticates separately. Azure Event Grid also moves events, but it is an event routing service with no device registry, provisioning, or device twin concept."
  },
  {
    "t": "iot-services",
    "x": "A facilities company with no software developers wants a hosted application where staff connect building sensors and view dashboards and rules through a browser. Which option fits?",
    "o": [
      "Azure IoT Central",
      "Azure IoT Hub",
      "Azure Sphere",
      "Azure Digital Twins"
    ],
    "a": 0,
    "e": "Azure IoT Central is a software-as-a-service IoT application platform with prebuilt dashboards, rules, and device templates, so a team without developers can run a solution from a browser. Azure IoT Hub is the underlying platform service and would require the company to build the application layer itself."
  },
  {
    "t": "iot-services",
    "x": "Shop-floor devices at a plant with a metered uplink must have telemetry filtered and aggregated locally so only summarized results travel upward. Which approach addresses this?",
    "o": [
      "Deploy Azure IoT Edge modules on the on-site gateway",
      "Move every device onto Azure IoT Central dashboards",
      "Write all raw readings into Azure Blob Storage first",
      "Replace the gateway with an Azure Virtual WAN hub"
    ],
    "a": 0,
    "e": "Azure IoT Edge runs containerized modules on local hardware so filtering, aggregation, and even AI inference happen before data leaves the site. Writing raw readings to Blob Storage first does nothing for the constrained link, because the full volume still has to cross it."
  },
  {
    "t": "big-data-analytics",
    "x": "A retailer wants a single analytics service where analysts run familiar T-SQL queries over petabytes of historical sales alongside big-data processing. Which service should it use?",
    "o": [
      "Azure Synapse Analytics",
      "Azure Cosmos DB",
      "Azure Data Lake Storage",
      "Azure Table storage"
    ],
    "a": 0,
    "e": "Azure Synapse Analytics unifies enterprise data warehousing and big-data analytics, exposing both dedicated SQL pools and Spark over very large datasets. Azure Data Lake Storage is an attractive distractor because it holds the same data cheaply, but it is storage and provides no query engine of its own."
  },
  {
    "t": "big-data-analytics",
    "x": "A data science group already writes Apache Spark notebooks and wants a managed collaborative Spark workspace on Azure. Which service matches that preference?",
    "o": [
      "Azure Databricks",
      "Azure Data Factory",
      "Azure Stream Analytics",
      "Azure Machine Learning"
    ],
    "a": 0,
    "e": "Azure Databricks is the Apache Spark based analytics platform on Azure, offering shared notebooks and managed clusters tuned for collaborative data engineering and data science. Azure Data Factory is the orchestration and data movement service and does not provide an interactive Spark notebook workspace."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "Data Factory is the cloud extract, transform, and load and orchestration service, while Synapse Analytics is the warehouse-scale query and analytics platform. HDInsight is a managed open-source cluster service for Hadoop, Spark, and Kafka, not a key store, and Databricks is a Spark analytics platform rather than a transactional database."
  },
  {
    "t": "ai-services",
    "x": "A travel booking site wants an assistant that understands typed questions in several languages and answers conversationally, using prebuilt models reached over an API. Which family fits?",
    "o": [
      "Azure AI Services",
      "Azure Synapse Analytics",
      "Azure Logic Apps",
      "Azure Machine Learning"
    ],
    "a": 0,
    "e": "Azure AI Services provide prebuilt language, speech, vision, and decision models that developers call through APIs without training anything. Azure Machine Learning is the tempting alternative, but it is the workspace for building and training custom models, which this team does not need."
  },
  {
    "t": "ai-services",
    "x": "An insurer scans handwritten claim forms and needs the printed and written text pulled out into structured fields for processing. Which capability applies?",
    "o": [
      "Azure AI Document Intelligence",
      "Azure AI Speech",
      "Azure AI Search",
      "Azure AI Content Safety"
    ],
    "a": 0,
    "e": "Azure AI Document Intelligence extracts text, key-value pairs, and tables from forms and documents, returning structured output an application can consume. Azure AI Search indexes content so users can find it, which is a neighboring problem but does not perform the extraction from scanned pages."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "Azure Machine Learning is the end-to-end platform for training, tracking, and deploying models a team builds itself, while Azure AI Services deliver models Microsoft already trained behind simple API calls. Requiring training data before any use describes the custom path, not the prebuilt one, so that option is reversed."
  },
  {
    "t": "dedicated-hosts",
    "x": "A financial firm's compliance policy forbids its virtual machines from sharing physical server hardware with any other Azure customer. Which option satisfies that rule?",
    "o": [
      "Azure Dedicated Host",
      "Azure availability sets",
      "Azure Reserved VM Instances",
      "Azure proximity placement groups"
    ],
    "a": 0,
    "e": "Azure Dedicated Host provides physical servers dedicated to one subscription, giving hardware isolation from other tenants. Reserved VM Instances look similar because both involve committing to capacity, but a reservation is purely a billing discount and leaves the VMs on shared hardware."
  },
  {
    "t": "dedicated-hosts",
    "x": "An administrator using a dedicated host wants patching of the underlying server to line up with the company's approved change window. What does the service allow?",
    "o": [
      "Choosing a maintenance window for the host",
      "Disabling Microsoft maintenance permanently",
      "Relocating the host to another region live",
      "Converting hosted VMs into serverless code"
    ],
    "a": 0,
    "e": "Because the customer controls the physical host, Azure lets an administrator select a maintenance window so platform updates land at a predictable time. Maintenance cannot be switched off altogether, since the platform still has to keep the underlying hardware and firmware current."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "A dedicated host is charged per host, so the price does not change as VMs are added up to its capacity, and the hardware serves a single customer. Guest operating system patching stays a customer responsibility under the shared responsibility model, exactly as it does for ordinary infrastructure as a service VMs."
  },
  {
    "t": "nsgs",
    "x": "A network engineer must stop inbound TCP port 3389 from reaching any virtual machine in an application subnet while still permitting HTTPS. Which resource applies that rule most directly?",
    "o": [
      "A network security group on the subnet",
      "Azure Firewall placed in a hub network",
      "Azure DDoS Protection on the network",
      "A route table on the gateway subnet"
    ],
    "a": 0,
    "e": "Network security groups hold allow and deny rules matched on source, destination, port, and protocol, and they attach to a subnet or a network interface, which is precisely this requirement. Azure Firewall could also filter the traffic, but it is a separate managed appliance and far more than is needed for simple port control inside one subnet."
  },
  {
    "t": "nsgs",
    "x": "An administrator finds a custom allow rule at priority 300 and a deny rule covering the same traffic at priority 200 in one network security group. Which rule takes effect?",
    "o": [
      "The rule at priority 200, since lower numbers win",
      "The rule at priority 300, since higher numbers win",
      "Neither, since conflicting rules cancel each other",
      "Both, so traffic is allowed in but denied outbound"
    ],
    "a": 0,
    "e": "Network security group rules are processed in priority order from lowest number to highest, and the first match stops evaluation, so the deny at 200 applies. Assuming higher numbers override is a common reversal, but priority in Azure means order of evaluation, not precedence by size."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "A network security group is a basic packet filter that can be associated at the subnet or NIC level and evaluates traffic against five-tuple rules. Payload inspection and fully qualified domain name filtering belong to Azure Firewall, which is the managed stateful service built for those deeper controls."
  },
  {
    "t": "azure-firewall",
    "x": "An enterprise wants a managed stateful service in its hub network that limits outbound traffic to an approved list of fully qualified domain names and logs centrally for all spokes. Which service should it deploy?",
    "o": [
      "Azure Firewall",
      "Network security groups on each spoke",
      "Azure DDoS Protection Standard",
      "Azure Private Link"
    ],
    "a": 0,
    "e": "Azure Firewall is a managed, stateful, cloud network security service that supports application rules with FQDN filtering and sends unified logs to Azure Monitor. Network security groups cannot match on domain names at all, so they cannot express an approved website list."
  },
  {
    "t": "azure-firewall",
    "x": "A team compares Azure Firewall against network security groups while designing a hub-and-spoke topology. Which statement describes the difference correctly?",
    "o": [
      "Azure Firewall adds threat intelligence and FQDN filtering",
      "Network security groups can filter traffic by domain name",
      "Azure Firewall must be installed on every virtual machine",
      "Network security groups are billed per gigabyte processed"
    ],
    "a": 0,
    "e": "Azure Firewall is a full managed firewall service with threat intelligence based filtering, application rules by domain name, and centralized policy. Network security groups are a free feature of the virtual network that only match on addresses, ports, and protocols."
  },
  {
    "t": "azure-firewall",
    "x": "Leadership asks why Azure Firewall was selected instead of running a vendor firewall appliance on a pair of virtual machines. What is the strongest justification?",
    "o": [
      "It is delivered as a service with built-in high availability",
      "It removes the need for any routing changes in the network",
      "It is included at no charge with every Azure subscription",
      "It encrypts all data held in the company's storage accounts"
    ],
    "a": 0,
    "e": "As a platform service, Azure Firewall provides high availability and elastic scale without the customer building clusters, sizing VMs, or patching an appliance. Traffic still has to be steered to it with user-defined routes, so claiming no routing changes are required is inaccurate."
  },
  {
    "t": "ddos-protection",
    "x": "A public voting portal expects politically motivated volumetric floods intended to exhaust its bandwidth and take it offline. Which Azure capability is designed to keep it available?",
    "o": [
      "Azure DDoS Protection",
      "Azure Key Vault",
      "Microsoft Sentinel",
      "Azure Private Link"
    ],
    "a": 0,
    "e": "Azure DDoS Protection defends availability by detecting and scrubbing volumetric, protocol, and resource-layer attacks before they overwhelm the service. Microsoft Sentinel would surface the attack in incidents and alerts, but a SIEM analyzes signals rather than absorbing the flood."
  },
  {
    "t": "ddos-protection",
    "x": "A startup asks which distributed denial-of-service defense every subscription receives with no configuration and no additional charge. What is accurate?",
    "o": [
      "Infrastructure-level protection is always on for free",
      "Azure Firewall runs by default in every virtual network",
      "Microsoft Sentinel ingests all logs at no cost to you",
      "Web application firewall rules apply to every endpoint"
    ],
    "a": 0,
    "e": "Azure DDoS infrastructure protection is enabled by default on the platform for all customers at no cost, protecting the shared infrastructure. Azure Firewall and web application firewall are separate paid resources that an administrator must explicitly deploy and configure."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "The paid tier adds tuned per-resource mitigation with telemetry, alerting, attack reports, rapid response support, and cost protection for scale-out charges incurred during a documented attack. Blocking traffic by country and encrypting disks are unrelated controls handled by other services."
  },
  {
    "t": "key-vault",
    "x": "Developers currently keep database connection strings and API tokens inside configuration files that get committed to source control. Which Azure service should hold those values instead?",
    "o": [
      "Azure Key Vault",
      "An Azure storage account",
      "Microsoft Entra ID",
      "Azure App Configuration"
    ],
    "a": 0,
    "e": "Azure Key Vault is the managed store for secrets, keys, and certificates, with access policies or role assignments plus full audit logging of every retrieval. Azure App Configuration is nearby in purpose but holds non-sensitive application settings and defers actual secrets to Key Vault."
  },
  {
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
    "as": [
      0,
      1,
      2
    ],
    "e": "Key Vault has three object types: secrets such as passwords, keys used for cryptographic operations, and certificates whose lifecycle it can manage. Disk images live in a compute gallery or storage, and route tables are virtual network resources, so neither belongs in a vault."
  },
  {
    "t": "key-vault",
    "x": "An auditor asks how code running on an Azure virtual machine can read a vault secret without any credential being stored on that machine. What is the answer?",
    "o": [
      "Assign a managed identity and grant it vault access",
      "Embed the vault access key in the configuration file",
      "Place the machine and the vault in one resource group",
      "Enable public network access so any client can connect"
    ],
    "a": 0,
    "e": "A managed identity gives the virtual machine an identity in Microsoft Entra ID that Azure maintains, so the app requests a token at runtime and no secret is ever written to disk. Sharing a resource group grants nothing by itself, because resource groups organize resources and do not confer permissions."
  },
  {
    "t": "sentinel",
    "x": "A security operations center wants one cloud-native platform that gathers logs from Azure, on-premises servers, and third-party software as a service apps, correlates them into incidents, and runs automated response. Which service should it adopt?",
    "o": [
      "Microsoft Sentinel",
      "Microsoft Defender for Cloud",
      "Azure Monitor alerts",
      "Azure Policy"
    ],
    "a": 0,
    "e": "Microsoft Sentinel is the cloud-native security information and event management and security orchestration, automation, and response platform, built for broad log collection, correlation, hunting, and playbook-driven response. Defender for Cloud is the closest distractor, but its focus is posture management and workload protection rather than enterprise-wide log analytics."
  },
  {
    "t": "sentinel",
    "x": "An analyst asks how Microsoft Sentinel and Microsoft Defender for Cloud differ in purpose. Which statement is accurate?",
    "o": [
      "Sentinel investigates incidents across many signal sources",
      "Sentinel takes the place of network security group rules",
      "Defender for Cloud is a query language used for hunting",
      "Defender for Cloud protects only on-premises physical servers"
    ],
    "a": 0,
    "e": "Sentinel is the SIEM layer that ingests and correlates signals from across the estate so analysts can investigate and respond. Defender for Cloud sits beneath it, scoring security posture and protecting workloads in Azure, other clouds, and on-premises, so limiting it to physical servers is wrong."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "Sentinel ships with data connectors for Microsoft and third-party sources and with playbooks built on Azure Logic Apps that automate response when an incident fires. Secret storage belongs to Key Vault, and datacenter physical security is entirely Microsoft's responsibility under the shared responsibility model."
  },
  {
    "t": "authentication-authorization",
    "x": "A new hire asks a mentor to explain the distinction between authentication and authorization. Which statement is correct?",
    "o": [
      "Authentication proves identity and authorization grants rights",
      "Authentication assigns roles and authorization checks passwords",
      "The two terms describe the same single step at sign-in time",
      "Authorization always happens before authentication completes"
    ],
    "a": 0,
    "e": "Authentication answers who you are by validating credentials, and authorization then answers what you may do by evaluating role assignments and policy. The reversed option swaps the two definitions, which is the mistake this question is designed to catch."
  },
  {
    "t": "authentication-authorization",
    "x": "An employee signs in successfully but then receives a permission error when opening a storage account. Which process denied that request?",
    "o": [
      "Authorization, because no suitable role was assigned",
      "Authentication, because the credentials were rejected",
      "Multifactor authentication, because a factor was skipped",
      "Federation, because the identity came from elsewhere"
    ],
    "a": 0,
    "e": "The successful sign-in proves authentication worked, so the failure occurred at the authorization step where Azure evaluates role-based access control assignments. Blaming authentication contradicts the scenario, since a rejected credential would have blocked the sign-in itself."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "Role-based access control is the authorization mechanism that scopes what an authenticated principal can do, while multifactor authentication hardens the identity proof itself. Azure Policy governs resource configuration compliance and never issues tokens, and availability zones are a physical resiliency construct with no identity role."
  },
  {
    "t": "defender-cloud",
    "x": "An operations lead opens Microsoft Defender for Cloud and sees one percentage summarizing how closely subscriptions follow the security recommendations. What is that figure called?",
    "o": [
      "Secure score",
      "Compliance rating",
      "Advisor index",
      "Sentinel workbook"
    ],
    "a": 0,
    "e": "Secure score is the Defender for Cloud measurement that converts outstanding recommendations into a single percentage teams can track over time. Azure Advisor also produces recommendations, but its guidance spans cost, reliability, and performance, and it does not publish this security percentage."
  },
  {
    "t": "defender-cloud",
    "x": "A hybrid estate includes Amazon Web Services accounts and servers in a company datacenter alongside Azure resources. Which characteristic of Defender for Cloud applies here?",
    "o": [
      "It can assess and protect resources outside Azure",
      "It only watches virtual machines created after setup",
      "It is limited to a single subscription per tenant",
      "It removes the need for endpoint antivirus software"
    ],
    "a": 0,
    "e": "Defender for Cloud is multicloud and hybrid, onboarding AWS and Google Cloud connectors and non-Azure machines through Azure Arc for unified posture and workload protection. It complements rather than replaces endpoint protection, so treating it as an antivirus substitute misstates its role."
  },
  {
    "t": "defense-in-depth",
    "x": "An architect sketches the layered model for a new platform and marks the innermost ring, the one safeguarded by encryption at rest and in transit. Which ring is it?",
    "o": [
      "The data layer",
      "The perimeter layer",
      "The identity layer",
      "The physical layer"
    ],
    "a": 0,
    "e": "Defense in depth places data at the center, because information is what attackers ultimately want, and encryption protects it even if outer layers are breached. The perimeter layer sits far outside and deals with distributed denial-of-service filtering and edge firewalls."
  },
  {
    "t": "defense-in-depth",
    "x": "A review notes that locked cages, badge readers, and on-site guards at the facility housing the servers form one ring of the layered model. Which ring do these controls belong to?",
    "o": [
      "Physical security",
      "Network security",
      "Compute security",
      "Application security"
    ],
    "a": 0,
    "e": "Cages, badges, and guards are physical controls that restrict who can touch the hardware, which is the outermost layer of the defense in depth model. Network security is the adjacent layer, but it covers segmentation and traffic filtering rather than access to the building."
  },
  {
    "t": "directory-services",
    "x": "An administrator compares Microsoft Entra ID with on-premises Active Directory Domain Services. Which statement is accurate?",
    "o": [
      "Entra ID uses SAML and OAuth rather than Kerberos and LDAP",
      "Entra ID organizes objects into forests, trees, and units",
      "Active Directory Domain Services is a cloud-only service",
      "Entra ID needs a domain controller in every region used"
    ],
    "a": 0,
    "e": "Microsoft Entra ID is an internet-scale identity provider built on modern web protocols such as SAML, OAuth, and OpenID Connect, and it has a flat structure rather than a forest hierarchy. Organizational units, trees, and forests belong to on-premises Active Directory, which is why that option is a tempting mix-up."
  },
  {
    "t": "directory-services",
    "x": "A retail chain keeps staff accounts in its on-premises directory and wants the same usernames and passwords to work for Microsoft 365. Which tool copies those accounts to the cloud?",
    "o": [
      "Microsoft Entra Connect",
      "Microsoft Entra Domain Services",
      "Microsoft Entra ID Protection",
      "Microsoft Entra Permissions Management"
    ],
    "a": 0,
    "e": "Microsoft Entra Connect synchronizes identities from an on-premises directory into Entra ID so users keep one set of credentials. Microsoft Entra Domain Services solves the opposite problem, offering a managed domain in Azure for workloads that still need Kerberos and LDAP."
  },
  {
    "t": "external-identities",
    "x": "A design agency brings freelance illustrators into its internal review portal and wants them signing in with credentials their own employers already issued. Which capability supports that?",
    "o": [
      "Business-to-business collaboration with guests",
      "Business-to-customer sign-up for consumer apps",
      "Privileged Identity Management for admin roles",
      "Conditional Access for device compliance checks"
    ],
    "a": 0,
    "e": "Business-to-business collaboration in Microsoft Entra External ID adds the freelancers as guest objects that authenticate against their home directory, so the agency issues no passwords. Business-to-customer scenarios target large consumer audiences signing up for a product, which is a different external identity pattern."
  },
  {
    "t": "external-identities",
    "x": "A gaming studio launches a consumer mobile title and wants players registering with personal email or social accounts on branded sign-up screens. Which identity approach fits?",
    "o": [
      "An external tenant for customer identity",
      "A guest invitation into the corporate tenant",
      "A hybrid join applied to each player device",
      "A management group created per player region"
    ],
    "a": 0,
    "e": "Customer-facing sign-up with social providers and customizable branding is handled by an external tenant in Microsoft Entra External ID, which is designed for consumer scale. Guest invitations suit a handful of named partners and would be unworkable for an open consumer audience."
  },
  {
    "t": "zero-trust",
    "x": "After adopting the model, a company stops treating its corporate office network as inherently trustworthy. What changes in day-to-day practice?",
    "o": [
      "Every request is verified no matter where it starts",
      "Only remote staff must complete extra verification",
      "Office devices skip policy checks to reduce friction",
      "Firewalls become the sole control guarding resources"
    ],
    "a": 0,
    "e": "Verify explicitly means authenticating and authorizing each request on all available signals, whether it comes from a coffee shop or a desk in headquarters. Exempting the office would recreate the implicit trust boundary that the model is intended to remove."
  },
  {
    "t": "zero-trust",
    "x": "A design assumes an attacker will eventually obtain a valid credential and get inside. Which control most directly limits how far that intruder can travel?",
    "o": [
      "Segmenting access so identities reach only what they need",
      "Extending the password expiry interval for all accounts",
      "Publishing more internal services to the public internet",
      "Granting standing administrator rights to avoid delays"
    ],
    "a": 0,
    "e": "Assume breach pairs with least privilege and segmentation so a compromised account unlocks a narrow slice of the estate instead of the whole environment. Standing administrator rights do the opposite, handing an intruder broad control the moment a privileged credential is stolen."
  },
  {
    "t": "databases",
    "x": "A startup needs a relational database that speaks the PostgreSQL protocol while Microsoft handles patching, backups, and scaling of the engine. Which service should it pick?",
    "o": [
      "Azure Database for PostgreSQL",
      "Azure SQL Managed Instance",
      "Azure Cosmos DB for NoSQL",
      "Azure Database Migration Service"
    ],
    "a": 0,
    "e": "Azure Database for PostgreSQL is the managed platform service for that open-source engine, so the team keeps its drivers and queries while Microsoft runs the infrastructure. Azure SQL Managed Instance is also fully managed but runs the SQL Server engine, which would force a rewrite."
  },
  {
    "t": "governance-hierarchy",
    "x": "Northwind Traders has 12 subscriptions and wants one policy assignment to apply across all of them at once, without repeating the assignment in each. At which level should the assignment be made?",
    "o": [
      "A management group containing all 12 subscriptions",
      "One resource group inside each of the subscriptions",
      "The largest subscription, from which the others inherit",
      "Every individual resource that the rule affects"
    ],
    "a": 0,
    "e": "Management groups sit above subscriptions, and an assignment made there is inherited by every subscription beneath it, so a single assignment covers all 12. Assigning at each resource group would work technically but requires dozens of repeated assignments and misses anything created outside those groups. Subscriptions do not inherit from one another, so designating a primary subscription achieves nothing."
  },
  {
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
    "as": [
      0,
      4
    ],
    "e": "Scopes nest as management group, subscription, resource group, resource, and permissions granted higher up are inherited by everything below, so a subscription-level assignment reaches its resource groups. Each resource lives in exactly one resource group, though it can be moved to another. Resource groups cannot be nested, management groups sit above subscriptions rather than below, and a resource group holds resources from any region because the group's own region only stores its metadata."
  },
  {
    "t": "governance-hierarchy",
    "x": "During a quarterly cleanup, an engineer deletes a resource group that held a test web app, its App Service plan, and a storage account. What happens to those three items?",
    "o": [
      "Only the web app is deleted and the rest remain",
      "They stay until each one is deleted individually",
      "All three are deleted along with the resource group",
      "They are moved to the subscription's default group"
    ],
    "a": 2,
    "e": "Deleting a resource group deletes every resource inside it, which is why the group is treated as a lifecycle boundary for resources that are created, managed, and retired together. There is no default group that orphaned resources fall into. This is also the reason a CanNotDelete lock is often placed on groups holding production workloads."
  },
  {
    "t": "blueprints",
    "x": "A managed services provider must stand up a new client environment that always includes the same resource groups, role assignments, policy assignments, and ARM templates as a single repeatable package. Which Azure feature is designed to bundle those artifacts together?",
    "o": [
      "Azure Migrate",
      "Azure Blueprints",
      "Azure Automation",
      "Azure Lighthouse"
    ],
    "a": 1,
    "e": "Azure Blueprints packages multiple artifact types into one definition that can be assigned repeatedly to produce consistent environments. Azure Automation runs runbooks and configuration tasks but does not compose governance artifacts into a deployable package. Azure Lighthouse handles cross-tenant delegated management, which is a different problem from environment provisioning."
  },
  {
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
    "as": [
      1,
      2
    ],
    "e": "A blueprint definition supports four artifact types: resource groups, ARM templates, role assignments, and policy assignments. Backup snapshots are operational data produced after deployment, not something a definition declares. Budget alerts and directory user accounts are configured in Cost Management and Microsoft Entra ID respectively and sit outside the blueprint artifact model."
  },
  {
    "t": "blueprints",
    "x": "A compliance officer asks whether a deployed environment can be traced back to the definition that produced it, so that drift from the approved standard becomes visible. Which characteristic of Azure Blueprints supports this?",
    "o": [
      "Each deployment writes its own copy and then detaches",
      "Blueprints convert every artifact into a static export",
      "Blueprints run only once and cannot be updated later",
      "Deployed assignments stay connected to the blueprint definition"
    ],
    "a": 3,
    "e": "A blueprint assignment keeps an active relationship with its definition, so the environment that was deployed can be compared against the standard it came from and audited over time. A plain ARM template deployment behaves like the detached option: once it finishes, nothing links the result back to the source. Definitions can also be versioned and reassigned, so the idea that they run only once is wrong."
  },
  {
    "t": "cloud-adoption-framework",
    "x": "A steering committee asks the IT director what the Microsoft Cloud Adoption Framework actually is before it approves any budget line for it. Which description is accurate?",
    "o": [
      "An automated engine that moves servers into Azure",
      "A compliance certification that customers must earn",
      "Guidance and documented best practices offered at no cost",
      "A paid Azure service billed per subscription each month"
    ],
    "a": 2,
    "e": "The Cloud Adoption Framework is free documentation, tooling, and proven practice guidance published by Microsoft, so there is nothing to purchase or provision. The migration engine option describes Azure Migrate, an actual service that discovers and moves workloads. Confusing guidance with a deployable service is the most common trap on this objective."
  },
  {
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
    "as": [
      3,
      4
    ],
    "e": "The Strategy and Plan methodologies come first: agree why the move is happening and what success looks like, then inventory and rank the estate so a migration backlog exists. Retiring a datacenter, tuning autoscale, and reviewing spend after the fact all assume workloads already run in Azure, so they sit in later methodologies such as Migrate and Manage."
  },
  {
    "t": "cloud-adoption-framework",
    "x": "A hospital group has already migrated several workloads but has no consistent approach to policy, cost control, or security baselines across its teams. Which part of the Cloud Adoption Framework speaks directly to establishing those controls?",
    "o": [
      "The Govern methodology",
      "The Migrate methodology",
      "The Innovate methodology",
      "The Strategy methodology"
    ],
    "a": 0,
    "e": "The Govern methodology addresses guardrails such as cost management, security baselines, resource consistency, and deployment acceleration, which is exactly the gap described. Migrate covers moving existing workloads and Innovate covers building new cloud-native applications, neither of which establishes ongoing controls. Strategy was the phase this organization has already passed."
  },
  {
    "t": "privacy-statement",
    "x": "A legal analyst wants to know exactly what categories of personal data Microsoft collects from individuals, how that information is used, and what choices people have over it. Which document covers this?",
    "o": [
      "The Data Protection Addendum",
      "The Azure Service Level Agreement",
      "The Microsoft Product Terms",
      "The Microsoft Privacy Statement"
    ],
    "a": 3,
    "e": "The Microsoft Privacy Statement is the public document describing what personal data is collected, why, how it is used, and the controls available to the individual. The Data Protection Addendum is a contractual document about how Microsoft handles an enterprise customer's data as a processor, which is a narrower and different audience. The SLA covers availability commitments and has nothing to do with privacy."
  },
  {
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
    "as": [
      0,
      1
    ],
    "e": "The Data Protection Addendum sets out Microsoft's contractual duties as a data processor, including security measures, breach notification, and the terms governing international data transfers. Uptime guarantees belong to the SLA, preview availability is described in service lifecycle material, and reservation discounts are commercial pricing terms. Each of those lives in a separate document."
  },
  {
    "t": "privacy-statement",
    "x": "A procurement officer needs the licensing terms and service-specific conditions that govern an organization's use of Microsoft online services, including the security commitments attached to them. Which document should be consulted?",
    "o": [
      "The Well-Architected Framework",
      "The Microsoft Product Terms",
      "The Microsoft Privacy Statement",
      "The Azure support plan comparison"
    ],
    "a": 1,
    "e": "The Microsoft Product Terms, formerly published as the Online Services Terms, carries the licensing conditions and service-specific provisions for commercial online services. The Privacy Statement explains data handling to individuals rather than setting contractual licensing terms. The Well-Architected Framework is technical design guidance and is not a contract at all."
  },
  {
    "t": "trust-center",
    "x": "An auditor for a regional bank asks for Microsoft's most recent SOC 2 and ISO 27001 audit reports covering Azure. Where can a customer download those reports?",
    "o": [
      "The Service Trust Portal",
      "The Azure Monitor workbook gallery",
      "The Azure Marketplace listings page",
      "The Microsoft Entra admin center"
    ],
    "a": 0,
    "e": "The Service Trust Portal is the repository for independent audit reports, penetration test summaries, and compliance guides that customers can download under their agreement. Azure Monitor workbooks visualize telemetry from a customer's own resources and contain no third-party audit evidence. The Marketplace lists purchasable offers, not attestation documents."
  },
  {
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
    "as": [
      2,
      3
    ],
    "e": "The Trust Center is a public site presenting Microsoft's security, privacy, and compliance posture, including which certifications apply to which services and geographies. Live CPU metrics and unattached disk inventories describe a specific tenant's estate and come from Azure Monitor and Azure Advisor. Support tickets are visible in the Azure portal, not on a public trust site."
  },
  {
    "t": "trust-center",
    "x": "A public sector customer must confirm whether Azure holds a specific national compliance certification before signing a contract. Which statement about compliance offerings is accurate?",
    "o": [
      "Certifications apply only to preview services",
      "Compliance coverage is decided per subscription",
      "Coverage varies by service and by region",
      "Every Azure service carries every certification"
    ],
    "a": 2,
    "e": "Certifications are earned per service and per geography, so a given attestation may cover some Azure services in some regions and not others, which is why the compliance offering pages break coverage down that way. Assuming blanket coverage across the platform is the classic mistake. Preview services are typically excluded from certifications rather than being the only ones included."
  },
  {
    "t": "sovereign-regions",
    "x": "A United States federal agency requires cloud workloads to run in datacenters that are physically isolated from the commercial platform and operated by screened personnel holding US citizenship. Which offering meets this requirement?",
    "o": [
      "A private endpoint on a commercial region",
      "Azure Government",
      "A paired region in the same geography",
      "An availability zone within a US region"
    ],
    "a": 1,
    "e": "Azure Government is a sovereign cloud with physically and logically separated infrastructure, its own portal and endpoints, and personnel screening requirements for operations staff. Region pairs and availability zones are resiliency constructs inside the commercial cloud and provide no separation of operators. A private endpoint changes network reachability but leaves the workload in commercial infrastructure."
  },
  {
    "t": "sovereign-regions",
    "x": "A multinational retailer plans to sell inside mainland China and learns that the local Azure environment is operated by a partner company rather than by Microsoft directly. Which statement about that environment is accurate?",
    "o": [
      "It is a separate cloud with its own accounts and endpoints",
      "It shares subscriptions and identities with global Azure",
      "It is a set of availability zones inside global Azure",
      "It mirrors global Azure with identical service coverage"
    ],
    "a": 0,
    "e": "Azure operated by 21Vianet is physically separated from global Azure, uses distinct portal and API endpoints, and requires its own accounts and subscriptions rather than reusing global ones. Because it is a separate instance run under Chinese regulation, its catalog of available services and feature versions also differs from global Azure. Treating it as just another region of the global cloud leads directly to failed deployments."
  },
  {
    "t": "sovereign-regions",
    "x": "An engineer notices that a service offered in West Europe is unavailable in a sovereign cloud. What is the most accurate explanation?",
    "o": [
      "Sovereign clouds only host storage and networking",
      "Services reach sovereign clouds first by design",
      "Sovereign clouds require a separate Arc license",
      "Sovereign clouds carry a different service catalog"
    ],
    "a": 3,
    "e": "Sovereign clouds run on separate infrastructure with their own release cadence and regulatory constraints, so their service catalogs lag or diverge from the commercial platform. They offer far more than storage and networking, and features generally arrive there after commercial availability rather than before. Azure Arc licensing is unrelated to which services a cloud instance offers."
  },
  {
    "t": "service-level-agreements",
    "x": "A web tier with a 99.9 percent SLA calls a database tier that also carries a 99.9 percent SLA, and the application fails if either one is unavailable. What is true of the combined figure the customer can expect?",
    "o": [
      "It rises to about 99.99 percent",
      "It equals the average of the two",
      "It is lower than 99.9 percent",
      "It stays at exactly 99.9 percent"
    ],
    "a": 2,
    "e": "When components are chained so that the whole depends on every part, their individual figures multiply, and 99.9 percent times 99.9 percent gives roughly 99.8 percent. Adding a dependency therefore reduces the composite commitment rather than leaving it unchanged. Availability only improves when redundancy is added in parallel, which is a different arrangement from this dependency chain."
  },
  {
    "t": "service-level-agreements",
    "x": "An architect wants the strongest availability commitment Microsoft offers for a virtual machine workload. Which deployment approach achieves it?",
    "o": [
      "Attach a second network interface to one instance",
      "Spread two or more instances across availability zones",
      "Place two instances in a single availability set",
      "Run one instance on premium solid-state disks"
    ],
    "a": 1,
    "e": "Distributing instances across two or more availability zones earns the highest tier because the zones are physically separate facilities within the region. An availability set only separates instances across fault and update domains inside one datacenter, so it earns a lower tier. A single instance on premium disks qualifies for the lowest tier, and extra network interfaces have no bearing on the commitment at all."
  },
  {
    "t": "service-level-agreements",
    "x": "A customer suffers downtime that falls below the promised availability level for a paid Azure service. What does the agreement entitle the customer to claim?",
    "o": [
      "A credit applied against future service charges",
      "A cash refund deposited to a bank account",
      "Free premium support for the following year",
      "Reimbursement for lost business revenue"
    ],
    "a": 0,
    "e": "The remedy is a service credit, a percentage of the affected service's charges applied to a future invoice, and the customer normally has to submit a claim to receive it. Microsoft does not issue cash payments, upgrade support plans, or compensate for consequential losses such as lost sales. Understanding that the credit is the sole remedy is the point of the objective."
  },
  {
    "t": "service-level-agreements",
    "x": "A startup deploys a workload onto a free tier offering while evaluating Azure and asks which availability commitment applies. What should the answer be?",
    "o": [
      "The standard 99.9 percent tier applies",
      "A 99.95 percent commitment applies",
      "The commitment matches the paid tier",
      "No financially backed commitment applies"
    ],
    "a": 3,
    "e": "Free tiers and preview features are excluded from financially backed agreements, so no service credit remedy exists for them regardless of how much downtime occurs. Paid tiers of the same service do carry published figures, which is one practical reason to move off a free tier before production. Assuming the free tier inherits the paid commitment is the trap here."
  },
  {
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
    "as": [
      3,
      4
    ],
    "e": "Instance count and placement across zones or fault domains determine which tier applies, and a lone instance only qualifies for a commitment when its operating system and data disks use premium solid-state or ultra storage. Tags, resource group membership, and budgets are organizational and financial constructs that never affect an availability figure. This distinction between resiliency design and bookkeeping is what the objective tests."
  },
  {
    "t": "service-lifecycle",
    "x": "A platform team is considering a new Azure capability that Microsoft labels as being in public preview. What should the team expect?",
    "o": [
      "It is billed at double the generally available rate",
      "It may change and is not covered by an availability commitment",
      "It carries the same commitments as a released feature",
      "It is available only to customers with a support contract"
    ],
    "a": 1,
    "e": "Preview features are offered for evaluation, may change or be withdrawn before release, and are excluded from financially backed availability commitments and often from standard support. Anyone can opt into a public preview, so a support contract is not a gate. Previews are frequently free or discounted rather than priced above the released rate."
  },
  {
    "t": "service-lifecycle",
    "x": "Where should an engineer look to track which Azure features have recently reached general availability and which are still being trialed?",
    "o": [
      "The Azure updates page",
      "The Azure status history archive",
      "The Azure resource health blade",
      "The Azure quota request form"
    ],
    "a": 0,
    "e": "The Azure updates page publishes announcements of new capabilities and shows where each one sits in the lifecycle, from preview through release and eventual retirement. The status history archive records past platform incidents rather than feature milestones. Resource health reports on one deployed resource, so it says nothing about the roadmap."
  },
  {
    "t": "service-lifecycle",
    "x": "A product manager wants a small group of selected customers to test an unreleased Azure feature under a non-disclosure arrangement before wider testing opens. Which stage describes this?",
    "o": [
      "Public preview",
      "General availability",
      "Retirement",
      "Private preview"
    ],
    "a": 3,
    "e": "Private preview is the invitation-only stage where a limited set of customers evaluates a capability, usually under confidentiality terms. Public preview opens the same capability to anyone who wants to try it, and general availability marks the released, supported state. Retirement is the opposite end of the lifecycle, when a capability is withdrawn."
  },
  {
    "t": "devops-technologies",
    "x": "A software team wants source control, work item tracking, and automated build and release pipelines delivered as one Microsoft-hosted suite. Which offering provides them?",
    "o": [
      "Azure Logic Apps",
      "Azure Data Factory",
      "Azure DevOps",
      "Azure Automation"
    ],
    "a": 2,
    "e": "Azure DevOps bundles Repos for source control, Boards for work tracking, and Pipelines for build and release, along with Test Plans and Artifacts. Azure Automation runs operational runbooks against existing infrastructure and has no repository or backlog features. Logic Apps and Data Factory orchestrate business workflows and data movement respectively, which are runtime concerns rather than development lifecycle tooling."
  },
  {
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
    "as": [
      3,
      4
    ],
    "e": "GitHub Actions runs workflows in response to repository events such as a push or a pull request, and those workflows commonly build artifacts and deploy them into Azure. Datacenter hardware upkeep is Microsoft's responsibility under the shared responsibility model and is never a customer pipeline task. Service credits come from the SLA claim process and data classification belongs to Microsoft Purview."
  },
  {
    "t": "devops-technologies",
    "x": "A development group needs disposable sandbox environments that follow preset policies and shut down automatically each evening so testers do not leave machines running overnight. Which Azure offering targets this scenario?",
    "o": [
      "Azure DevTest Labs",
      "Azure Site Recovery",
      "Azure Container Registry",
      "Azure Batch"
    ],
    "a": 0,
    "e": "Azure DevTest Labs creates governed lab environments with quotas, allowed image lists, and automatic shutdown schedules so test infrastructure does not accumulate cost. Site Recovery replicates workloads for disaster recovery and does not provision sandboxes. Container Registry stores images and Azure Batch schedules large compute jobs, neither of which manages environment lifecycle or spending guardrails."
  },
  {
    "t": "arm",
    "x": "A deployment request submitted through the Azure CLI is rejected because the caller lacks permission. Which layer evaluated the role assignment before the request could reach a resource provider?",
    "o": [
      "Azure Monitor",
      "Azure Advisor",
      "Azure Arc",
      "Azure Resource Manager"
    ],
    "a": 3,
    "e": "Azure Resource Manager is the single control plane that receives every management request, authenticates the caller, and applies role assignments and policy before handing work to the relevant resource provider. Azure Monitor observes what happens afterwards and never authorizes anything. Advisor produces recommendations, and Arc extends the same control plane to machines outside Azure rather than performing the check itself."
  },
  {
    "t": "arm-templates",
    "x": "A finance department requires that a data science environment be recreated in a second region matching the configuration already running in the first. Which approach makes the rebuild reliable?",
    "o": [
      "Copy the first region's virtual disks by hand",
      "Export the billing statement and match the SKUs",
      "Deploy from the same declarative template file",
      "Repeat the portal steps from a written runbook"
    ],
    "a": 2,
    "e": "A declarative template records the desired end state and can be deployed repeatedly with only the region parameter changed, so both environments are provably identical. A written runbook still depends on a person clicking accurately every time, which is where small differences creep in. Copying disks reproduces machines but not networking, identity, or policy configuration, and a billing statement records charges rather than configuration."
  },
  {
    "t": "azure-arc",
    "x": "A hospital laboratory network runs SQL Server on physical hardware at three sites and wants one inventory of those servers alongside its Azure resources, with the same tagging scheme applied. Which service extends Azure management to them?",
    "o": [
      "Azure Automanage",
      "Azure Arc",
      "Azure Migrate",
      "Azure Site Recovery"
    ],
    "a": 1,
    "e": "Azure Arc projects servers, Kubernetes clusters, and data services from outside Azure into Azure Resource Manager so they appear as resources that can be tagged, governed, and inventoried together. Azure Migrate assesses and relocates workloads, which the laboratory explicitly does not want. Site Recovery handles replication for failover, a resiliency concern rather than a management plane extension."
  },
  {
    "t": "azure-arc",
    "x": "After connecting an on-premises Kubernetes cluster to Azure, an administrator finds it listed in the portal. Which capability now becomes available for that cluster?",
    "o": [
      "Azure Policy assignments can target it",
      "Its nodes are relocated into an Azure region",
      "Microsoft assumes responsibility for its hardware",
      "It receives the same SLA as a managed cluster"
    ],
    "a": 0,
    "e": "Once a cluster is projected into Azure Resource Manager it becomes a first-class resource, so policy assignments, role-based access control, and tags apply to it just as they would to a native resource. Nothing physically moves, and the customer keeps ownership of the underlying hardware and its maintenance. Availability commitments still depend on the customer's own infrastructure rather than on Microsoft."
  },
  {
    "t": "azure-policy",
    "x": "A university IT board wants a report showing which existing virtual machines lack disk encryption, but it does not want any deployment blocked while the gap is investigated. Which policy effect fits?",
    "o": [
      "Deny",
      "Modify",
      "DeployIfNotExists",
      "Audit"
    ],
    "a": 3,
    "e": "The Audit effect records non-compliant resources in the compliance dashboard without interfering with any request, which is exactly what a fact-finding exercise needs. Deny would stop deployments the board wants left running. Modify and DeployIfNotExists both change the environment by altering resources or provisioning remediation, going further than a read-only assessment."
  },
  {
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
    "as": [
      1,
      2
    ],
    "e": "Azure Policy inspects the properties of a resource and allows, denies, or audits based on rules, while role-based access control decides which identities hold which permissions. Locks restrict delete or write operations on a resource and grant nothing to anyone, so they are not a permission mechanism. The two systems are complementary, and neither policy nor role assignments can substitute for the other."
  },
  {
    "t": "resource-locks",
    "x": "A shared services team applies a CanNotDelete lock to a virtual network used by several projects. An engineer then tries to add a new subnet to that network. What is the result?",
    "o": [
      "The whole virtual network is placed in read-only mode",
      "The subnet is added successfully",
      "The request fails until the lock is removed",
      "The request succeeds only for subscription Owners"
    ],
    "a": 1,
    "e": "A CanNotDelete lock permits reading and modifying a resource and blocks only deletion, so adding a subnet proceeds normally. The read-only outcome describes the ReadOnly lock type, which would have blocked the change. Lock behavior does not vary by role, which is precisely why an Owner is stopped by a lock just as any other user would be."
  },
  {
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
    "as": [
      0,
      4
    ],
    "e": "Locks sit outside the permission model and stop the operation for every caller, including subscription Owners, which is why they protect against accidental deletion by administrators. They also flow down from a subscription or resource group to everything beneath, so the most restrictive inherited lock wins. Locks never grant rights and never expire on their own, so someone with the appropriate permission has to remove them explicitly."
  },
  {
    "t": "tags",
    "x": "A resource group carries an environment tag set to production. A new virtual machine is created inside that group with no tags specified. Which tags does the machine end up with?",
    "o": [
      "The environment tag, copied at creation time",
      "The environment tag, but only in billing reports",
      "All tags from the group and the subscription",
      "None, because tags are not inherited automatically"
    ],
    "a": 3,
    "e": "Tags applied to a resource group do not flow down to the resources inside it, so the new machine starts with none. Organizations that want inheritance typically use an Azure Policy definition with the Modify effect to stamp the tag onto child resources. Assuming automatic inheritance leads to cost reports with large untagged buckets."
  },
  {
    "t": "purview",
    "x": "An energy utility must show auditors where a regulatory reporting dataset originated and every system it passed through along the way. Which Microsoft Purview capability provides this view?",
    "o": [
      "Resource health",
      "Log Analytics",
      "Data lineage",
      "Cost analysis"
    ],
    "a": 2,
    "e": "Purview's lineage view traces data from its source through the transformations and pipelines that moved it, which is what an auditor asking about provenance needs. Cost analysis reports spending in Microsoft Cost Management and describes money rather than data. Resource health and Log Analytics report on infrastructure state and telemetry, neither of which explains where a dataset came from."
  },
  {
    "t": "purview",
    "x": "A records manager needs automated classification of documents holding national identification numbers, spanning both Microsoft 365 content and Azure Storage. Which platform handles this?",
    "o": [
      "Azure Blueprints",
      "Microsoft Purview",
      "Microsoft Entra ID",
      "Azure Monitor"
    ],
    "a": 1,
    "e": "Microsoft Purview scans across cloud, on-premises, and software as a service estates, applies built-in classifiers for identifiers such as national ID numbers, and attaches sensitivity labels to what it finds. Microsoft Entra ID manages identities and access rather than inspecting file content. Azure Monitor collects operational telemetry and Blueprints package deployment artifacts, so neither examines data."
  },
  {
    "t": "portal-tools",
    "x": "A new administrator must apply one identical tag to 200 existing resources and finds clicking through each blade far too slow. Which approach suits a change of this size?",
    "o": [
      "Script the change with Azure PowerShell",
      "Open each resource blade one at a time",
      "File a support request with Microsoft",
      "Submit a quota increase for the subscription"
    ],
    "a": 0,
    "e": "Command-line tools such as Azure PowerShell and the Azure CLI let a single loop apply the same change to hundreds of resources, and the script can be reviewed and rerun later. The graphical portal is well suited to exploration and one-off work but scales poorly to repetitive bulk edits. Support requests and quota increases address entitlement problems, not the effort of making a change."
  },
  {
    "t": "pricing-calculator",
    "x": "A CFO wants a side-by-side comparison of what a datacenter refresh would cost over five years versus running the same workloads in Azure, counting power, cooling, and hardware. Which tool produces this comparison?",
    "o": [
      "Microsoft Cost Management analysis",
      "Azure Advisor cost recommendations",
      "The Azure reservations dashboard",
      "The total cost of ownership calculator"
    ],
    "a": 3,
    "e": "The total cost of ownership calculator is built for exactly this comparison, modelling on-premises expenses such as hardware refresh, electricity, cooling, and labor against the equivalent Azure spend over several years. Microsoft Cost Management analyses charges already incurred in Azure and has no view of a physical datacenter. Advisor recommends savings on resources that are already deployed."
  }
],
}
