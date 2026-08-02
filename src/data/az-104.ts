// Microsoft AZ-104 (Azure Administrator Associate) bank. azure vendor.
// 40-60 items, 100 min, scaled to 1000, pass 700 (skills measured as of
// April 17, 2026). Topics link chapters of John Savill's free "AZ-104 Study
// Cram v2" (youtube 0Knf9nub4-k) plus three dedicated backup/DR videos.
import type { ExamDef } from "./types"

export const exam: ExamDef = {
 "id": "az-104",
 "vendor": "azure",
 "scale": {
  "max": 1000,
  "pass": 700
 },
 "cert": "Microsoft Certified",
 "name": "Azure Administrator Associate",
 "code": "AZ-104",
 "blurb": "Manage Azure identities and governance, storage, compute resources, virtual networking, and monitoring.",
 "domains": {
  "1": "Manage Azure identities and governance",
  "2": "Implement and manage storage",
  "3": "Deploy and manage Azure compute resources",
  "4": "Implement and manage virtual networking",
  "5": "Monitor and maintain Azure resources"
 },
 "examSplit": {
  "1": 0.24,
  "2": 0.19,
  "3": 0.24,
  "4": 0.19,
  "5": 0.14
 },
 "examMC": 50,
 "examPBQ": 6,
 "examMinutes": 100,
 "videos": {
  "entra-users-groups-create": {
   "n": "John Savill AZ-104 Study Cram v2: Users",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=668s",
   "d": 1
  },
  "entra-user-group-properties": {
   "n": "John Savill AZ-104 Study Cram v2: Groups",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=951s",
   "d": 1
  },
  "entra-licenses": {
   "n": "John Savill AZ-104 Study Cram v2: Licenses",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=1248s",
   "d": 1
  },
  "entra-external-users": {
   "n": "John Savill AZ-104 Study Cram v2: Tenant & External Identities",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=479s",
   "d": 1
  },
  "entra-sspr": {
   "n": "John Savill AZ-104 Study Cram v2: SSPR",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=1407s",
   "d": 1
  },
  "rbac-builtin-roles": {
   "n": "John Savill AZ-104 Study Cram v2: RBAC",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=3549s",
   "d": 1
  },
  "rbac-role-assignment-scopes": {
   "n": "John Savill AZ-104 Study Cram v2: RBAC (scopes)",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=3549s",
   "d": 1
  },
  "rbac-interpret-access": {
   "n": "John Savill AZ-104 Study Cram v2: RBAC (access review)",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=3549s",
   "d": 1
  },
  "azure-policy": {
   "n": "John Savill AZ-104 Study Cram v2: Azure Policy",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=3275s",
   "d": 1
  },
  "resource-locks": {
   "n": "John Savill AZ-104 Study Cram v2: Resource Locking",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=4016s",
   "d": 1
  },
  "resource-tags": {
   "n": "John Savill AZ-104 Study Cram v2: Tags",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=3080s",
   "d": 1
  },
  "resource-groups": {
   "n": "John Savill AZ-104 Study Cram v2: Resource Groups",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=2611s",
   "d": 1
  },
  "subscriptions": {
   "n": "John Savill AZ-104 Study Cram v2: Subscriptions & Management Groups",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=2088s",
   "d": 1
  },
  "cost-management": {
   "n": "John Savill AZ-104 Study Cram v2: Cost Analysis and Budgets",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=2354s",
   "d": 1
  },
  "management-groups": {
   "n": "John Savill AZ-104 Study Cram v2: Management Groups",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=2088s",
   "d": 1
  },
  "storage-firewalls-vnets": {
   "n": "John Savill AZ-104 Study Cram v2: Storage Accounts (firewalls)",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=9110s",
   "d": 2
  },
  "storage-sas-tokens": {
   "n": "John Savill AZ-104 Study Cram v2: Storage Accounts (SAS)",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=9110s",
   "d": 2
  },
  "storage-stored-access-policies": {
   "n": "John Savill AZ-104 Study Cram v2: Storage Accounts (access policies)",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=9110s",
   "d": 2
  },
  "storage-access-keys": {
   "n": "John Savill AZ-104 Study Cram v2: Storage Accounts (access keys)",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=9110s",
   "d": 2
  },
  "files-identity-access": {
   "n": "John Savill AZ-104 Study Cram v2: Azure Files Access",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=10601s",
   "d": 2
  },
  "storage-accounts-create": {
   "n": "John Savill AZ-104 Study Cram v2: Storage Accounts",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=9110s",
   "d": 2
  },
  "storage-redundancy": {
   "n": "John Savill AZ-104 Study Cram v2: Storage Accounts (redundancy)",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=9110s",
   "d": 2
  },
  "storage-object-replication": {
   "n": "John Savill AZ-104 Study Cram v2: Object Replication",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=10222s",
   "d": 2
  },
  "storage-encryption": {
   "n": "John Savill AZ-104 Study Cram v2: Encryption",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=10830s",
   "d": 2
  },
  "storage-explorer-azcopy": {
   "n": "John Savill AZ-104 Study Cram v2: Storage Tools",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=9727s",
   "d": 2
  },
  "files-share": {
   "n": "John Savill AZ-104 Study Cram v2: Azure Files",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=10365s",
   "d": 2
  },
  "blob-container": {
   "n": "John Savill AZ-104 Study Cram v2: Blob Containers",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=9110s",
   "d": 2
  },
  "blob-storage-tiers": {
   "n": "John Savill AZ-104 Study Cram v2: Blob Tiering",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=9860s",
   "d": 2
  },
  "blob-soft-delete": {
   "n": "John Savill AZ-104 Study Cram v2: Blob Data Protection",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=9110s",
   "d": 2
  },
  "files-snapshots-soft-delete": {
   "n": "John Savill AZ-104 Study Cram v2: Azure Files (snapshots)",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=10365s",
   "d": 2
  },
  "blob-lifecycle-management": {
   "n": "John Savill AZ-104 Study Cram v2: Lifecycle Management",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=10145s",
   "d": 2
  },
  "blob-versioning": {
   "n": "John Savill AZ-104 Study Cram v2: Blob Versioning",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=10145s",
   "d": 2
  },
  "arm-bicep-interpret": {
   "n": "John Savill AZ-104 Study Cram v2: Provisioning Resources",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=11421s",
   "d": 3
  },
  "arm-template-modify": {
   "n": "John Savill AZ-104 Study Cram v2: ARM Templates",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=11421s",
   "d": 3
  },
  "bicep-modify": {
   "n": "John Savill AZ-104 Study Cram v2: Bicep",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=11421s",
   "d": 3
  },
  "arm-bicep-deploy": {
   "n": "John Savill AZ-104 Study Cram v2: Deploy with ARM/Bicep",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=11421s",
   "d": 3
  },
  "arm-export-convert-bicep": {
   "n": "John Savill AZ-104 Study Cram v2: Export & Convert to Bicep",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=11421s",
   "d": 3
  },
  "vm-create": {
   "n": "John Savill AZ-104 Study Cram v2: Virtual Machines",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=11945s",
   "d": 3
  },
  "vm-encryption-at-host": {
   "n": "John Savill AZ-104 Study Cram v2: VM Encryption at Host",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=11945s",
   "d": 3
  },
  "vm-move": {
   "n": "John Savill AZ-104 Study Cram v2: Move a VM",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=11945s",
   "d": 3
  },
  "vm-sizes": {
   "n": "John Savill AZ-104 Study Cram v2: VM Sizes",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=11945s",
   "d": 3
  },
  "vm-disks": {
   "n": "John Savill AZ-104 Study Cram v2: Managed Disks",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=10974s",
   "d": 3
  },
  "vm-availability": {
   "n": "John Savill AZ-104 Study Cram v2: Availability Sets and Zones",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=12491s",
   "d": 3
  },
  "vmss": {
   "n": "John Savill AZ-104 Study Cram v2: VM Scale Sets",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=12654s",
   "d": 3
  },
  "container-registry": {
   "n": "John Savill AZ-104 Study Cram v2: Containers (ACR)",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=12875s",
   "d": 3
  },
  "container-instances": {
   "n": "John Savill AZ-104 Study Cram v2: Container Instances",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=12875s",
   "d": 3
  },
  "container-apps": {
   "n": "John Savill AZ-104 Study Cram v2: Container Apps",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=12875s",
   "d": 3
  },
  "container-scaling": {
   "n": "John Savill AZ-104 Study Cram v2: Container Scaling",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=12875s",
   "d": 3
  },
  "appservice-plan": {
   "n": "John Savill AZ-104 Study Cram v2: App Service Plan",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=13354s",
   "d": 3
  },
  "appservice-scaling": {
   "n": "John Savill AZ-104 Study Cram v2: App Service Scaling",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=13354s",
   "d": 3
  },
  "appservice-create": {
   "n": "John Savill AZ-104 Study Cram v2: Create App Service",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=13354s",
   "d": 3
  },
  "appservice-tls-certs": {
   "n": "John Savill AZ-104 Study Cram v2: App Service TLS/Certs",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=13354s",
   "d": 3
  },
  "appservice-custom-dns": {
   "n": "John Savill AZ-104 Study Cram v2: App Service Custom DNS",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=13354s",
   "d": 3
  },
  "appservice-backup": {
   "n": "John Savill AZ-104 Study Cram v2: App Service Backup",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=13354s",
   "d": 3
  },
  "appservice-networking": {
   "n": "John Savill AZ-104 Study Cram v2: App Service Networking",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=13354s",
   "d": 3
  },
  "appservice-deployment-slots": {
   "n": "John Savill AZ-104 Study Cram v2: App Service Deployment Slots",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=13354s",
   "d": 3
  },
  "vnet-subnets": {
   "n": "John Savill AZ-104 Study Cram v2: Virtual Network",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=4215s",
   "d": 4
  },
  "vnet-peering": {
   "n": "John Savill AZ-104 Study Cram v2: Peering",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=4800s",
   "d": 4
  },
  "public-ip": {
   "n": "John Savill AZ-104 Study Cram v2: Public IP Addresses",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=4215s",
   "d": 4
  },
  "user-defined-routes": {
   "n": "John Savill AZ-104 Study Cram v2: User Defined Routes",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=7116s",
   "d": 4
  },
  "network-connectivity-troubleshoot": {
   "n": "John Savill AZ-104 Study Cram v2: Network Watcher",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=14345s",
   "d": 4
  },
  "nsg-asg": {
   "n": "John Savill AZ-104 Study Cram v2: Network Security Group",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=5327s",
   "d": 4
  },
  "nsg-effective-rules": {
   "n": "John Savill AZ-104 Study Cram v2: NSG Effective Rules",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=5327s",
   "d": 4
  },
  "azure-bastion": {
   "n": "John Savill AZ-104 Study Cram v2: Azure Bastion",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=7683s",
   "d": 4
  },
  "service-endpoints": {
   "n": "John Savill AZ-104 Study Cram v2: Service Endpoints",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=7195s",
   "d": 4
  },
  "private-endpoints": {
   "n": "John Savill AZ-104 Study Cram v2: Private Endpoints",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=7490s",
   "d": 4
  },
  "azure-dns": {
   "n": "John Savill AZ-104 Study Cram v2: Azure DNS",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=5921s",
   "d": 4
  },
  "load-balancer": {
   "n": "John Savill AZ-104 Study Cram v2: Azure Load Balancer",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=7923s",
   "d": 4
  },
  "load-balancing-troubleshoot": {
   "n": "John Savill AZ-104 Study Cram v2: Load Balancing",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=7824s",
   "d": 4
  },
  "monitor-metrics": {
   "n": "John Savill AZ-104 Study Cram v2: Monitoring",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=13525s",
   "d": 5
  },
  "monitor-log-settings": {
   "n": "John Savill AZ-104 Study Cram v2: Log Analytics Workspace",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=14097s",
   "d": 5
  },
  "monitor-log-queries": {
   "n": "John Savill AZ-104 Study Cram v2: Log Analytics Queries",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=14097s",
   "d": 5
  },
  "monitor-alerts": {
   "n": "John Savill AZ-104 Study Cram v2: Alerting",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=13848s",
   "d": 5
  },
  "monitor-insights": {
   "n": "John Savill AZ-104 Study Cram v2: Monitor Insights",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=13525s",
   "d": 5
  },
  "network-watcher": {
   "n": "John Savill AZ-104 Study Cram v2: Network Watcher",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k&t=14345s",
   "d": 5
  },
  "recovery-services-vault": {
   "n": "John Savill: Azure Master Class v2 - Module 4 Resiliency",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k",
   "d": 5
  },
  "backup-vault": {
   "n": "John Savill: Azure Master Class v2 - Module 4 Resiliency",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k",
   "d": 5
  },
  "backup-policy": {
   "n": "John Savill: Azure Master Class v2 - Module 4 Resiliency",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k",
   "d": 5
  },
  "azure-backup-restore": {
   "n": "John Savill: Azure Master Class v2 - Module 4 Resiliency",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k",
   "d": 5
  },
  "site-recovery-configure": {
   "n": "John Savill: Azure Site Recovery Overview",
   "u": "https://www.youtube.com/watch?v=ErYUPsyGazA",
   "d": 5
  },
  "site-recovery-failover": {
   "n": "John Savill: Disaster Recovery in Microsoft Azure",
   "u": "https://www.youtube.com/watch?v=8fvO3WArG-Y",
   "d": 5
  },
  "backup-reports-alerts": {
   "n": "John Savill: Azure Master Class v2 - Module 4 Resiliency",
   "u": "https://www.youtube.com/watch?v=0Knf9nub4-k",
   "d": 5
  }
 },
 "questions": [
  {
   "id": 1,
   "t": "entra-users-groups-create",
   "x": "An administrator must create a group that also provisions a shared mailbox and a SharePoint site for a project team. Which group type meets this need?",
   "o": [
    "Mail-enabled security group",
    "Microsoft 365 group",
    "Security group",
    "Distribution list"
   ],
   "a": 1,
   "e": "Microsoft 365 groups provide a shared mailbox, calendar, and SharePoint site for collaboration. A security group only manages access to resources and does not create a mailbox.",
   "d": 1
  },
  {
   "id": 2,
   "t": "entra-users-groups-create",
   "x": "Users in the Sales department should be added to a group automatically whenever their department attribute is set to Sales. Which membership type supports this?",
   "o": [
    "Dynamic User",
    "Dynamic Device",
    "Assigned",
    "Owner-managed"
   ],
   "a": 0,
   "e": "Dynamic User membership evaluates a rule against user attributes such as department and updates membership automatically. Assigned membership requires manually adding each user.",
   "d": 1
  },
  {
   "id": 3,
   "t": "entra-users-groups-create",
   "x": "A team owner is setting up a new Microsoft 365 group. Which two membership options are available to choose? Choose TWO.",
   "o": [
    "Dynamic Device",
    "Assigned",
    "Nested inheritance",
    "Rule-based device",
    "Dynamic User"
   ],
   "a": 1,
   "e": "Microsoft 365 groups support Assigned and Dynamic User membership. Dynamic Device membership is available only for security groups, not for Microsoft 365 groups.",
   "d": 1,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 4,
   "t": "entra-users-groups-create",
   "x": "A help desk technician needs to add 200 new employees to Microsoft Entra ID at once from a spreadsheet. Which method should they use?",
   "o": [
    "Bulk create users from a CSV template",
    "Invite each new hire as a guest user",
    "Run a New-MgGroup batch command",
    "Enable a self-service sign-up flow"
   ],
   "a": 0,
   "e": "Bulk create uses a downloadable CSV template to add many users in a single operation. Guest invitations are for external collaborators, not internal employee accounts.",
   "d": 1
  },
  {
   "id": 5,
   "t": "entra-users-groups-create",
   "x": "Which Microsoft Graph PowerShell cmdlet creates a new cloud user account in Microsoft Entra ID?",
   "o": [
    "New-MgGroup",
    "New-AzUserAssignedIdentity",
    "Set-MgUser",
    "New-MgUser"
   ],
   "a": 3,
   "e": "New-MgUser creates a user object in Microsoft Entra ID. Set-MgUser only updates an existing user, and New-MgGroup creates a group rather than a user.",
   "d": 1
  },
  {
   "id": 6,
   "t": "entra-users-groups-create",
   "x": "An administrator uses assigned membership for a security group. Which two object types can be added directly as members? Choose TWO.",
   "o": [
    "Management groups",
    "Resource groups",
    "Subscriptions",
    "Devices",
    "Users"
   ],
   "a": 3,
   "e": "Assigned security groups can contain users, devices, groups, and service principals. Management groups, subscriptions, and resource groups are governance scopes, not directory members.",
   "d": 1,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 7,
   "t": "entra-user-group-properties",
   "x": "An employee is going on extended leave and their access must be suspended, while the account and its data are retained. What should the administrator configure?",
   "o": [
    "Remove the user's licenses",
    "Reset the password to a random value",
    "Set Block sign-in to Yes",
    "Remove the user's role assignments"
   ],
   "a": 2,
   "e": "Setting Block sign-in to Yes suspends all authentication for the account while keeping the object, its data, and its assignments intact. Resetting the password to a random value does not revoke existing sessions and the user could regain entry through self-service password reset, while removing licenses or role assignments limits what the account can reach without actually suspending it.",
   "d": 1
  },
  {
   "id": 8,
   "t": "entra-user-group-properties",
   "x": "Which user property serves as the primary sign-in identifier in Microsoft Entra ID?",
   "o": [
    "Employee ID number",
    "Alternate email address",
    "User principal name",
    "Directory object ID"
   ],
   "a": 2,
   "e": "The user principal name is the sign-in name, formatted like an email address. The object ID is a system identifier and an alternate email is not used to sign in.",
   "d": 1
  },
  {
   "id": 9,
   "t": "entra-user-group-properties",
   "x": "A department lead is set as the owner of a security group. What can the owner do that a plain member cannot?",
   "o": [
    "Add and remove group members",
    "Change the tenant name",
    "Create management groups",
    "Assign Azure subscriptions"
   ],
   "a": 0,
   "e": "A group owner can manage the group's membership and some settings. Managing subscriptions or the tenant requires directory or resource roles, not group ownership.",
   "d": 1
  },
  {
   "id": 10,
   "t": "entra-user-group-properties",
   "x": "Which two attributes can an administrator edit directly on a Microsoft Entra user profile? Choose TWO.",
   "o": [
    "Object ID",
    "Job title",
    "Account creation date",
    "Usage location",
    "On-premises sync status"
   ],
   "a": 1,
   "e": "Usage location and job title are editable profile attributes. Object ID, sync status, and creation date are system-managed values that cannot be changed manually.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 11,
   "t": "entra-user-group-properties",
   "x": "An administrator changes a group's membership type from Assigned to Dynamic. What happens to the members that were added manually?",
   "o": [
    "Members keep their access permanently",
    "Members are converted into group owners",
    "Members are removed and rebuilt from the rule",
    "Members are copied into a new group"
   ],
   "a": 2,
   "e": "Switching to dynamic membership discards manually assigned members and rebuilds the group from the rule. Only objects matching the rule remain in the group.",
   "d": 1
  },
  {
   "id": 12,
   "t": "entra-licenses",
   "x": "Which capability requires at least a Microsoft Entra ID P1 license for the users it protects?",
   "o": [
    "Global administrator role assignment",
    "Security defaults",
    "Password hash synchronization",
    "Conditional Access policies"
   ],
   "a": 3,
   "e": "Conditional Access requires Entra ID P1. Security defaults, role assignments, and password hash synchronization are available without a premium license.",
   "d": 1
  },
  {
   "id": 13,
   "t": "entra-licenses",
   "x": "Group-based licensing, which assigns product licenses through group membership, requires which minimum license edition?",
   "o": [
    "Microsoft Entra ID Free",
    "Microsoft Entra ID P1",
    "Microsoft 365 E5 only",
    "Microsoft Entra ID P2"
   ],
   "a": 1,
   "e": "Group-based licensing requires Entra ID P1 for the tenant. The free edition allows only per-user license assignment, not automatic assignment through groups.",
   "d": 1
  },
  {
   "id": 14,
   "t": "entra-licenses",
   "x": "A security team plans to use just-in-time role activation and identity risk detection. Which two premium features are gated behind the P2 tier? Choose TWO.",
   "o": [
    "Privileged Identity Management",
    "Dynamic membership groups",
    "Conditional Access policies",
    "Identity Protection",
    "Group-based licensing"
   ],
   "a": 0,
   "e": "Privileged Identity Management and Identity Protection require Entra ID P2. Conditional Access, group-based licensing, and dynamic groups are included with P1.",
   "d": 1,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 15,
   "t": "entra-licenses",
   "x": "An administrator attempts to assign a license to a new user, but the assignment fails with an error. Which user property must be set first?",
   "o": [
    "Employee hire date",
    "Office location",
    "Manager",
    "Usage location"
   ],
   "a": 3,
   "e": "A usage location must be set before licenses can be assigned because Microsoft restricts some services by country. Office location is an informational profile field with no effect on licensing, and hire date and manager likewise do not gate license assignment.",
   "d": 1
  },
  {
   "id": 16,
   "t": "entra-licenses",
   "x": "A company wants new hires added to a group to automatically receive Microsoft 365 licenses without manual steps. Which approach fits best?",
   "o": [
    "Group-based licensing",
    "A scheduled PowerShell script",
    "A bulk CSV license import",
    "Per-user license assignment"
   ],
   "a": 0,
   "e": "Group-based licensing assigns and removes licenses automatically as membership changes. Per-user assignment and scripts require ongoing manual work to stay current.",
   "d": 1
  },
  {
   "id": 17,
   "t": "entra-external-users",
   "x": "A partner from another organization needs access to a shared application in your tenant. What is the standard way to grant this access?",
   "o": [
    "Add them as a member account",
    "Enroll their device in Intune",
    "Create a B2C consumer tenant",
    "Invite them as a B2B guest user"
   ],
   "a": 3,
   "e": "Microsoft Entra B2B collaboration invites external partners as guest users while they keep their own credentials. B2C is for customer-facing consumer identities, not partner collaboration.",
   "d": 1
  },
  {
   "id": 18,
   "t": "entra-external-users",
   "x": "After an external partner accepts an invitation, what value is stored in the UserType property of their directory object?",
   "o": [
    "Guest",
    "Member",
    "Federated",
    "External"
   ],
   "a": 0,
   "e": "Invited collaborators are created with a UserType of Guest by default. Member is used for internal users, and External is not a valid UserType value.",
   "d": 1
  },
  {
   "id": 19,
   "t": "entra-external-users",
   "x": "Which two methods can bring an external user into a Microsoft Entra tenant? Choose TWO.",
   "o": [
    "Applying an Azure Policy",
    "Enabling self-service sign-up",
    "Creating a management group",
    "Sending a B2B email invitation",
    "Assigning a resource lock"
   ],
   "a": 1,
   "e": "A B2B email invitation and self-service sign-up user flows both onboard external users. Azure Policy, management groups, and locks are governance controls that do not create users.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 20,
   "t": "entra-external-users",
   "x": "An administrator wants to limit what invited guests can see about other users and groups in the directory. Where is this configured?",
   "o": [
    "External collaboration settings",
    "Azure Policy definitions",
    "Resource group access control",
    "Conditional Access named locations"
   ],
   "a": 0,
   "e": "Guest permission restrictions are set in External collaboration settings under External Identities. Conditional Access controls sign-in conditions, not directory visibility for guests.",
   "d": 1
  },
  {
   "id": 21,
   "t": "entra-external-users",
   "x": "The security team must periodically re-certify that external guests still need their access and remove those who do not. Which feature automates this?",
   "o": [
    "Self-service password reset",
    "Identity Protection",
    "Company branding",
    "Access reviews"
   ],
   "a": 3,
   "e": "Access reviews let reviewers recertify guest access on a recurring schedule and remove stale accounts. Identity Protection detects risk but does not run recertification campaigns.",
   "d": 1
  },
  {
   "id": 22,
   "t": "entra-sspr",
   "x": "Self-service password reset should update passwords for accounts synchronized from an on-premises Active Directory. Which capability makes this possible?",
   "o": [
    "Password writeback through Microsoft Entra Connect",
    "The Network Policy Server extension",
    "Pass-through authentication agents",
    "Active Directory Federation Services"
   ],
   "a": 0,
   "e": "Password writeback in Microsoft Entra Connect sends cloud password resets back to on-premises Active Directory. The NPS extension is for RADIUS MFA, not SSPR writeback.",
   "d": 1
  },
  {
   "id": 23,
   "t": "entra-sspr",
   "x": "Which two authentication methods can an administrator enable for users to verify identity during self-service password reset? Choose TWO.",
   "o": [
    "Security questions",
    "Email address",
    "Smart card certificate",
    "Windows Hello for Business",
    "FIDO2 security key"
   ],
   "a": 0,
   "e": "Email and security questions are valid SSPR verification methods. FIDO2 keys, Windows Hello, and smart cards are sign-in methods that are not supported for password reset.",
   "d": 1,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 24,
   "t": "entra-sspr",
   "x": "An identity admin is configuring the SSPR policy in the Microsoft Entra admin center. Which two options appear on that policy blade? Choose TWO.",
   "o": [
    "Require registration at next sign-in",
    "Virtual machine disk encryption",
    "Number of methods required to reset",
    "Windows account lockout threshold",
    "Storage account replication"
   ],
   "a": 0,
   "e": "The SSPR policy blade lets you set the number of methods required to reset and whether registration is enforced at sign-in. Lockout, disk encryption, and replication are unrelated.",
   "d": 1,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 25,
   "t": "entra-sspr",
   "x": "How does self-service password reset behave for accounts holding administrator roles compared with standard users?",
   "o": [
    "They must use two methods and never security questions",
    "They must always call the internal help desk",
    "They may reset using a single email method only",
    "They are fully exempt from all reset requirements"
   ],
   "a": 0,
   "e": "Microsoft enforces a stricter policy on admin accounts, always requiring two methods and disallowing security questions. Standard users can be set to use fewer methods.",
   "d": 1
  },
  {
   "id": 26,
   "t": "entra-sspr",
   "x": "An administrator enables SSPR for the Selected option instead of All. Which users can then reset their own passwords?",
   "o": [
    "Members of a specified group",
    "Only global administrators",
    "Every user in the tenant",
    "Guest users exclusively"
   ],
   "a": 0,
   "e": "The Selected scope enables SSPR only for members of a chosen group, allowing a phased rollout. Choosing All would enable it for the entire tenant at once.",
   "d": 1
  },
  {
   "id": 27,
   "t": "subscriptions",
   "x": "An administrator needs an existing subscription to inherit the policy and role assignments applied at a particular management group. What should the administrator do?",
   "o": [
    "Move the subscription into the target management group",
    "Assign the same policies directly at the subscription scope",
    "Change the tenant's default management group setting",
    "Transfer billing ownership of the subscription"
   ],
   "a": 0,
   "e": "Placing the subscription under the target management group causes it to inherit that group's policy and role assignments, both now and as they change later. Assigning the same policies directly at the subscription scope reproduces today's rules but creates no inheritance, and the default management group setting only controls where newly created subscriptions land.",
   "d": 1
  },
  {
   "id": 28,
   "t": "subscriptions",
   "x": "Each Azure subscription establishes a trust relationship with exactly one of which object for authentication?",
   "o": [
    "A storage account",
    "A Microsoft Entra tenant",
    "A resource group",
    "A management group"
   ],
   "a": 1,
   "e": "A subscription trusts a single Microsoft Entra tenant to authenticate users and services. Management groups organize subscriptions but are not the identity trust boundary.",
   "d": 1
  },
  {
   "id": 29,
   "t": "subscriptions",
   "x": "Which two statements accurately describe the role of an Azure subscription? Choose TWO.",
   "o": [
    "It stores user passwords directly",
    "It acts as a billing boundary for usage",
    "It defines network firewall rules",
    "It replaces the need for resource groups",
    "It is a scope for role assignments"
   ],
   "a": 1,
   "e": "A subscription is both a billing container and a scope where RBAC roles and policies apply. It does not store credentials or replace resource groups, which live inside it.",
   "d": 1,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 30,
   "t": "subscriptions",
   "x": "A team wants to be alerted and take action when spending on a subscription approaches a monthly threshold. Which tool should they configure?",
   "o": [
    "A Cost Management budget",
    "An Azure Policy deny rule",
    "A network security group",
    "A resource lock"
   ],
   "a": 0,
   "e": "Cost Management budgets trigger alerts and automation when spending nears a set amount. Resource locks prevent changes and deletion but do not track spending.",
   "d": 1
  },
  {
   "id": 31,
   "t": "subscriptions",
   "x": "In the Azure resource hierarchy, which scope sits directly above a resource group?",
   "o": [
    "Individual resource",
    "Management group",
    "Subscription",
    "Tenant root group"
   ],
   "a": 2,
   "e": "A resource group belongs directly to a subscription. Management groups and the tenant root sit above subscriptions, not immediately above a resource group.",
   "d": 1
  },
  {
   "id": 32,
   "t": "management-groups",
   "x": "At the top of every management group hierarchy, which built-in group contains all other management groups and subscriptions?",
   "o": [
    "The primary resource group",
    "The tenant root group",
    "The default subscription",
    "The global administrator group"
   ],
   "a": 1,
   "e": "The tenant root group is the top-level management group that all others descend from. Subscriptions and resource groups are lower scopes within that hierarchy.",
   "d": 1
  },
  {
   "id": 33,
   "t": "management-groups",
   "x": "Excluding the root level and the subscription level, how many levels deep can a management group hierarchy be nested?",
   "o": [
    "Ten levels",
    "Unlimited levels",
    "Two levels",
    "Six levels"
   ],
   "a": 3,
   "e": "Management groups support up to six levels of depth below the root, not counting the root or subscriptions. This limit keeps the governance hierarchy manageable.",
   "d": 1
  },
  {
   "id": 34,
   "t": "management-groups",
   "x": "Which two governance items can be assigned at the management group scope to affect all child subscriptions? Choose TWO.",
   "o": [
    "Network security groups",
    "RBAC role assignments",
    "Azure Policy assignments",
    "Storage lifecycle rules",
    "Resource locks"
   ],
   "a": 1,
   "e": "Azure Policy and RBAC role assignments can target management groups and cascade to child subscriptions. Resource locks and NSGs apply only at subscription scope or lower.",
   "d": 1,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 35,
   "t": "management-groups",
   "x": "Before an administrator can create child management groups, which permission or role must they hold at the appropriate scope?",
   "o": [
    "Resource Policy Contributor",
    "Management Group Reader",
    "Management Group Contributor",
    "Hierarchy Settings Administrator"
   ],
   "a": 2,
   "e": "Creating and managing management groups requires the Management Group Contributor role at the parent scope. Management Group Reader can only view the hierarchy, Hierarchy Settings Administrator manages settings such as the default management group rather than creating groups, and Resource Policy Contributor works with policy definitions and assignments.",
   "d": 1
  },
  {
   "id": 36,
   "t": "management-groups",
   "x": "What is the primary purpose of introducing management groups above your subscriptions?",
   "o": [
    "To apply governance across many subscriptions at once",
    "To replace resource groups entirely",
    "To manage per-user billing invoices",
    "To organize resources inside one subscription"
   ],
   "a": 0,
   "e": "Management groups let you apply policy and access governance to multiple subscriptions together. Organizing resources within a single subscription is the job of resource groups.",
   "d": 1
  },
  {
   "id": 37,
   "t": "rbac-builtin-roles",
   "x": "An administrator must let a user create and manage every resource type in a resource group but must not allow them to grant other users access to those resources. Which built-in role fits?",
   "o": [
    "User Access Administrator",
    "Contributor",
    "Owner",
    "Reader"
   ],
   "a": 1,
   "e": "Contributor can manage all resources but cannot create role assignments, while Owner also grants the ability to manage access.",
   "d": 1
  },
  {
   "id": 38,
   "t": "rbac-builtin-roles",
   "x": "Which built-in role lets an administrator manage other users' access to Azure resources without granting the ability to manage the resources themselves?",
   "o": [
    "User Access Administrator",
    "Contributor",
    "Owner",
    "Storage Account Contributor"
   ],
   "a": 0,
   "e": "User Access Administrator manages access assignments only; Contributor manages resources but cannot assign roles to others.",
   "d": 1
  },
  {
   "id": 39,
   "t": "rbac-builtin-roles",
   "x": "A user with the Contributor role on a storage account gets an authorization error when opening blob contents in the portal. Which role grants the missing data-plane read access?",
   "o": [
    "Contributor",
    "Storage Blob Data Reader",
    "Storage Account Contributor",
    "Reader"
   ],
   "a": 1,
   "e": "Blob data access is a separate data-plane permission that Storage Blob Data Reader grants, while management roles like Contributor do not.",
   "d": 1
  },
  {
   "id": 40,
   "t": "rbac-builtin-roles",
   "x": "An administrator needs roles that are able to create role assignments for other security principals. Which two built-in roles can do this? Choose TWO.",
   "o": [
    "Virtual Machine Contributor",
    "User Access Administrator",
    "Contributor",
    "Reader",
    "Owner"
   ],
   "a": 1,
   "e": "Owner and User Access Administrator hold the authorization write permission needed to assign roles; Contributor and the others cannot manage access.",
   "d": 1,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 41,
   "t": "rbac-builtin-roles",
   "x": "A help-desk engineer must manage virtual machines but must be denied access to the virtual networks and storage accounts those machines connect to. Which built-in role is appropriate?",
   "o": [
    "Contributor",
    "Network Contributor",
    "Virtual Machine Contributor",
    "Storage Account Contributor"
   ],
   "a": 2,
   "e": "Virtual Machine Contributor manages VMs but not the connected network or storage; Contributor would grant far broader access.",
   "d": 1
  },
  {
   "id": 42,
   "t": "rbac-role-assignment-scopes",
   "x": "At which scope should a role be assigned so it applies to every existing and future resource group within one subscription?",
   "o": [
    "The subscription",
    "A management group",
    "An individual resource",
    "Each resource group separately"
   ],
   "a": 0,
   "e": "A subscription-scoped assignment is inherited by all resource groups and resources under it, including ones created later.",
   "d": 1
  },
  {
   "id": 43,
   "t": "rbac-role-assignment-scopes",
   "x": "A role is assigned at the management group scope. How does this assignment affect the subscriptions contained in that management group?",
   "o": [
    "It is ignored below the management group level",
    "It must be recreated on each subscription",
    "It is inherited by all subscriptions beneath it",
    "It applies only to the management group object"
   ],
   "a": 2,
   "e": "Assignments flow downward through the hierarchy, so a management group assignment is inherited by every child subscription and resource.",
   "d": 1
  },
  {
   "id": 44,
   "t": "rbac-role-assignment-scopes",
   "x": "An administrator is reviewing where RBAC role assignments may be applied. Which two of the following are valid assignment scopes? Choose TWO.",
   "o": [
    "Azure region",
    "Resource group",
    "Resource tag",
    "Management group",
    "Network security group"
   ],
   "a": 1,
   "e": "The four RBAC scopes are management group, subscription, resource group, and resource; a region, tag, or NSG is not a scope.",
   "d": 1,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 45,
   "t": "rbac-role-assignment-scopes",
   "x": "What is the lowest level in the Azure hierarchy at which an RBAC role assignment can be created?",
   "o": [
    "A management group",
    "A subscription",
    "A resource group",
    "An individual resource"
   ],
   "a": 3,
   "e": "Role assignments can be scoped as narrowly as a single resource, which is the most granular scope available.",
   "d": 1
  },
  {
   "id": 46,
   "t": "rbac-role-assignment-scopes",
   "x": "A role is assigned at one resource group. Which resources does that single assignment govern?",
   "o": [
    "Only resources created before the assignment",
    "Only that resource group and the resources in it",
    "All resources in the management group",
    "Every resource group in the subscription"
   ],
   "a": 1,
   "e": "A resource-group-scoped assignment applies to that group and its resources; sibling resource groups are unaffected.",
   "d": 1
  },
  {
   "id": 47,
   "t": "rbac-interpret-access",
   "x": "A user has Contributor at the subscription scope, but a deny assignment blocks delete operations on one resource group. Can the user delete resources in that group?",
   "o": [
    "No, the deny assignment overrides the allow",
    "Yes, because Contributor always permits deletion",
    "Only if the user is also granted the Reader role",
    "Yes, since the role sits at a higher scope"
   ],
   "a": 0,
   "e": "Deny assignments are evaluated before allow assignments, so the block wins even though Contributor normally permits deletion.",
   "d": 1
  },
  {
   "id": 48,
   "t": "rbac-interpret-access",
   "x": "An administrator wants to see the effective permissions a specific user holds on a resource. Which feature provides this on the resource's Access control blade?",
   "o": [
    "The Check access feature",
    "The Diagnostic settings pane",
    "The user's profile in Microsoft Entra ID",
    "The Activity log"
   ],
   "a": 0,
   "e": "Check access on the Access control blade reports the effective role assignments a chosen user, group, or principal has on that resource.",
   "d": 1
  },
  {
   "id": 49,
   "t": "rbac-interpret-access",
   "x": "A user belongs to two Microsoft Entra groups. One group holds Reader on a subscription; the other group has no role assignments. What access does the user have?",
   "o": [
    "No access, because one group lacks a role",
    "None, unless the role is assigned directly to the user",
    "Reader, inherited through the assigned group",
    "Owner, granted to all group members by default"
   ],
   "a": 2,
   "e": "RBAC assignments to a group apply to its members, so membership in the Reader group grants the user Reader access.",
   "d": 1
  },
  {
   "id": 50,
   "t": "rbac-interpret-access",
   "x": "An administrator is explaining how Azure RBAC evaluates access. Which two statements are correct? Choose TWO.",
   "o": [
    "A principal needs an assignment at every scope",
    "The most restrictive allow assignment wins",
    "Allow permissions across assignments are additive",
    "A deny assignment overrides a matching allow",
    "Assignments never inherit to child scopes"
   ],
   "a": 2,
   "e": "RBAC allow permissions are cumulative across assignments, and deny assignments override matching allows; there is no most-restrictive-wins rule among allows.",
   "d": 1,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 51,
   "t": "rbac-interpret-access",
   "x": "A user is granted Reader at a subscription and Owner at a resource group inside it. What is their effective access on resources in that resource group?",
   "o": [
    "Reader, because the higher scope wins",
    "Only the permissions common to both roles",
    "Owner, because allow permissions are cumulative",
    "No access, because the assignments conflict"
   ],
   "a": 2,
   "e": "Allow permissions from different scopes combine, so the Owner assignment on the group grants full access to its resources.",
   "d": 1
  },
  {
   "id": 52,
   "t": "azure-policy",
   "x": "Which Azure Policy effect blocks a non-compliant resource from being created in the first place?",
   "o": [
    "Append",
    "DeployIfNotExists",
    "Deny",
    "Audit"
   ],
   "a": 2,
   "e": "The Deny effect stops a non-compliant create or update request; Audit only records non-compliance without blocking it.",
   "d": 1
  },
  {
   "id": 53,
   "t": "azure-policy",
   "x": "An organization wants existing non-compliant resources flagged in compliance reports but does not want deployments blocked. Which policy effect suits this?",
   "o": [
    "Modify",
    "Audit",
    "Deny",
    "Disabled"
   ],
   "a": 1,
   "e": "Audit marks resources as non-compliant for reporting without preventing their creation; Deny would block them outright.",
   "d": 1
  },
  {
   "id": 54,
   "t": "azure-policy",
   "x": "Which policy effect can automatically provision a related resource, such as a missing diagnostic setting, after evaluation?",
   "o": [
    "Audit",
    "DeployIfNotExists",
    "Deny",
    "AuditIfNotExists"
   ],
   "a": 1,
   "e": "DeployIfNotExists deploys a remediation template when the condition is met; AuditIfNotExists only reports on the missing related resource.",
   "d": 1
  },
  {
   "id": 55,
   "t": "azure-policy",
   "x": "An administrator is planning remediation tasks. Which two policy effects require a managed identity to make changes? Choose TWO.",
   "o": [
    "Append",
    "Deny",
    "Modify",
    "DeployIfNotExists",
    "AuditIfNotExists"
   ],
   "a": 2,
   "e": "DeployIfNotExists and Modify change resources during remediation and need a managed identity with proper permissions; AuditIfNotExists and Deny make no changes.",
   "d": 1,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 56,
   "t": "azure-policy",
   "x": "Several related policy definitions must be assigned together and their compliance tracked as one group. What should the administrator create?",
   "o": [
    "A management group",
    "A budget alert",
    "A policy initiative",
    "A resource lock"
   ],
   "a": 2,
   "e": "An initiative, also called a policy set, bundles multiple definitions so they can be assigned and reported on together.",
   "d": 1
  },
  {
   "id": 57,
   "t": "azure-policy",
   "x": "An administrator reviews which effects can alter a resource request rather than only report on it. Which two effects modify or add to a resource? Choose TWO.",
   "o": [
    "Deny",
    "Append",
    "Modify",
    "Audit",
    "Disabled"
   ],
   "a": 1,
   "e": "Append adds fields such as an IP range, and Modify adds, updates, or removes properties and tags; Audit and Deny do not change the resource.",
   "d": 1,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 58,
   "t": "resource-locks",
   "x": "Which resource lock type permits reading a resource but prevents any modification or deletion of it?",
   "o": [
    "ReadOnly",
    "Delete",
    "ReadWrite",
    "CanNotDelete"
   ],
   "a": 0,
   "e": "A ReadOnly lock allows viewing but blocks changes and deletion; CanNotDelete still allows modifications.",
   "d": 1
  },
  {
   "id": 59,
   "t": "resource-locks",
   "x": "A CanNotDelete lock is applied to a resource group. What can users with proper roles still do to resources in that group?",
   "o": [
    "Delete them but not modify them",
    "Read them only, with no modifications",
    "Read and modify but not delete them",
    "Neither read, modify, nor delete them"
   ],
   "a": 2,
   "e": "CanNotDelete blocks deletion only; reading and modifying resources remain allowed for users with the right permissions.",
   "d": 1
  },
  {
   "id": 60,
   "t": "resource-locks",
   "x": "An Owner is unable to delete a virtual machine that carries a delete lock. What must happen before the deletion can succeed?",
   "o": [
    "The user must become Global Administrator",
    "The Owner role must be reassigned",
    "The lock must be removed first",
    "The VM must be moved to another subscription"
   ],
   "a": 2,
   "e": "Locks apply regardless of RBAC, so even an Owner must remove the lock before deleting the protected resource.",
   "d": 1
  },
  {
   "id": 61,
   "t": "resource-locks",
   "x": "An administrator plans where to place resource locks. At which two scopes can a lock be applied? Choose TWO.",
   "o": [
    "An individual resource",
    "A resource tag",
    "An availability zone",
    "A management group",
    "A subscription"
   ],
   "a": 0,
   "e": "Locks can be set at the subscription, resource group, and resource scopes; management groups, zones, and tags are not lock scopes.",
   "d": 1,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 62,
   "t": "resource-locks",
   "x": "Which built-in role includes the authorization permissions needed to create and delete resource locks?",
   "o": [
    "Reader",
    "Virtual Machine Contributor",
    "Backup Operator",
    "Owner"
   ],
   "a": 3,
   "e": "Managing locks needs the Microsoft.Authorization/locks actions, which Owner and User Access Administrator hold but Reader and lesser roles do not.",
   "d": 1
  },
  {
   "id": 63,
   "t": "resource-tags",
   "x": "By default, do Azure resources inherit tags from the resource group that contains them?",
   "o": [
    "No, tags must be applied to each resource directly",
    "Yes, all child resources inherit them automatically",
    "Yes, but only tags related to cost",
    "Only resources created after the tag is added"
   ],
   "a": 0,
   "e": "Tags are not inherited by default; Azure Policy with a Modify or inherit-tag effect is used to propagate them to resources.",
   "d": 1
  },
  {
   "id": 64,
   "t": "resource-tags",
   "x": "Which Azure Policy effect is commonly used to add or update a required tag on resources that are missing it?",
   "o": [
    "Modify",
    "Disabled",
    "Deny",
    "Audit"
   ],
   "a": 0,
   "e": "The Modify effect adds or updates tags during remediation; Audit would only report the missing tag without fixing it.",
   "d": 1
  },
  {
   "id": 65,
   "t": "resource-tags",
   "x": "An administrator wants Cost analysis to group spending by the department that owns each resource. Which feature should label the resources?",
   "o": [
    "Resource locks",
    "Management groups",
    "Availability zones",
    "Resource tags"
   ],
   "a": 3,
   "e": "Tags carry metadata such as a department name and can be used to filter and group costs in Cost analysis.",
   "d": 1
  },
  {
   "id": 66,
   "t": "resource-tags",
   "x": "Before a tagging rollout, which two facts about Azure resource tags are accurate? Choose TWO.",
   "o": [
    "Tags can organize costs in billing reports",
    "A resource is limited to five tags",
    "A resource can hold up to 50 tag pairs",
    "Child resources inherit tags automatically",
    "Every resource type supports tags"
   ],
   "a": 0,
   "e": "A resource supports up to 50 name-value tag pairs and tags can organize billing; not all resource types support tags and inheritance is not automatic.",
   "d": 1,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 67,
   "t": "resource-tags",
   "x": "Which Azure service can enforce that all resources within a scope carry a specific required tag?",
   "o": [
    "Cost analysis",
    "Management groups",
    "Azure Policy",
    "Resource locks"
   ],
   "a": 2,
   "e": "Azure Policy can audit or enforce required tags across a scope; locks and cost tools do not enforce tag presence.",
   "d": 1
  },
  {
   "id": 68,
   "t": "resource-groups",
   "x": "How many resource groups can a single Azure resource belong to at the same time?",
   "o": [
    "One for each region it uses",
    "Up to two for redundancy",
    "Exactly one",
    "There is no fixed limit"
   ],
   "a": 2,
   "e": "Every resource lives in exactly one resource group at a time, though it can later be moved to another group.",
   "d": 1
  },
  {
   "id": 69,
   "t": "resource-groups",
   "x": "What happens to the resources contained in a resource group when that resource group is deleted?",
   "o": [
    "Only tagged resources are removed",
    "All resources in the group are deleted",
    "They move to a default group",
    "They are kept but stopped"
   ],
   "a": 1,
   "e": "Deleting a resource group permanently deletes every resource inside it, so the action must be done carefully.",
   "d": 1
  },
  {
   "id": 70,
   "t": "resource-groups",
   "x": "A resource group is assigned a location during creation. What is the main purpose of that location?",
   "o": [
    "To set the billing currency",
    "To store the group's metadata in that region",
    "To force all its resources into that region",
    "To define a default virtual network"
   ],
   "a": 1,
   "e": "The location stores the group's metadata; the resources inside can still reside in other regions.",
   "d": 1
  },
  {
   "id": 71,
   "t": "resource-groups",
   "x": "Which two of the following correctly describe how Azure resource groups work? Choose TWO.",
   "o": [
    "Resource groups can be nested within each other",
    "A resource can be moved to a different group",
    "A group must be empty before it can be deleted",
    "A resource can belong to two groups at once",
    "A group can contain resources from multiple regions"
   ],
   "a": 1,
   "e": "A resource group can hold resources from many regions and resources can be moved between groups; groups cannot be nested and need not be emptied first.",
   "d": 1,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 72,
   "t": "cost-management",
   "x": "Does creating a budget in Cost Management automatically stop resource usage once the limit is reached?",
   "o": [
    "Yes, it deallocates all running resources",
    "Only if a resource lock is also added",
    "No, a budget only triggers alerts",
    "Yes, it blocks any new deployment"
   ],
   "a": 2,
   "e": "Budgets are for monitoring and trigger alerts or automation, but they do not by themselves halt spending.",
   "d": 1
  },
  {
   "id": 73,
   "t": "cost-management",
   "x": "Which tool gives an estimated monthly cost for Azure services before they are deployed?",
   "o": [
    "Azure Advisor",
    "The Total Cost of Ownership calculator",
    "The Pricing calculator",
    "Cost analysis"
   ],
   "a": 2,
   "e": "The Pricing calculator estimates costs pre-deployment; the TCO calculator compares on-premises expenses to Azure instead.",
   "d": 1
  },
  {
   "id": 74,
   "t": "cost-management",
   "x": "Which Azure service recommends ways to lower spending, such as resizing or shutting down underused virtual machines?",
   "o": [
    "Azure Policy",
    "Azure Blueprints",
    "Azure Advisor",
    "Azure Monitor"
   ],
   "a": 2,
   "e": "Azure Advisor produces cost recommendations, including right-sizing idle VMs; Monitor and Policy serve other functions.",
   "d": 1
  },
  {
   "id": 75,
   "t": "cost-management",
   "x": "An administrator wants to lower ongoing Azure compute charges. Which two options help reduce those costs? Choose TWO.",
   "o": [
    "Enabling a ReadOnly lock",
    "Creating a management group",
    "Purchasing reserved instances",
    "Adding resource tags",
    "Applying Azure Hybrid Benefit"
   ],
   "a": 2,
   "e": "Reservations and Azure Hybrid Benefit lower compute costs; locks, tags, and management groups organize resources but do not cut the bill.",
   "d": 1,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 76,
   "t": "cost-management",
   "x": "An administrator needs to define a spending budget in Cost Management. At which two scopes can a budget be created? Choose TWO.",
   "o": [
    "An availability zone",
    "A resource group",
    "A subscription",
    "An individual resource",
    "A network security group"
   ],
   "a": 1,
   "e": "Budgets can be scoped to management groups, subscriptions, and resource groups; a single resource, zone, or NSG is not a budget scope.",
   "d": 1,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 77,
   "t": "storage-firewalls-vnets",
   "x": "An administrator sets the storage firewall default action to Deny. Which rule still allows traffic from a specific subnet?",
   "o": [
    "A public access level of Container set on the subnet",
    "A Storage Blob Data Reader assignment on the subnet identity",
    "A stored access policy that grants the subnet blob read access",
    "A virtual network rule tied to the subnet's service endpoint"
   ],
   "a": 3,
   "e": "A VNet rule paired with the Microsoft.Storage service endpoint on the subnet passes the firewall. Stored access policies and RBAC roles do not affect network-level firewall decisions.",
   "d": 2
  },
  {
   "id": 78,
   "t": "storage-firewalls-vnets",
   "x": "Which configuration exposes a storage account over a private IP inside a VNet while blocking public internet access?",
   "o": [
    "A private endpoint with public network access disabled",
    "A service endpoint with the default action set to Allow",
    "A virtual network rule scoped to the gateway subnet",
    "A firewall IP rule covering the entire VNet range"
   ],
   "a": 0,
   "e": "A private endpoint gives the account a private VNet IP and, with public access disabled, cuts off internet paths. A service endpoint still targets the public storage endpoint over the Azure backbone.",
   "d": 2
  },
  {
   "id": 79,
   "t": "storage-firewalls-vnets",
   "x": "A firewalled storage account must be reachable by Azure Backup. Which firewall exception should the administrator enable?",
   "o": [
    "Add 0.0.0.0/0 to the IP firewall allow list",
    "Allow trusted Microsoft services to access the account",
    "Grant the Contributor role to the Backup resource",
    "Set the default network action to Allow"
   ],
   "a": 1,
   "e": "The trusted Microsoft services exception lets first-party services like Backup bypass the firewall. Opening 0.0.0.0/0 or defaulting to Allow would expose the account to every network.",
   "d": 2
  },
  {
   "id": 80,
   "t": "storage-firewalls-vnets",
   "x": "An administrator builds storage firewall network rules. Which two entries are valid to permit access? Choose TWO.",
   "o": [
    "A Microsoft Entra ID security group object ID",
    "A stored access policy identifier string",
    "A public IP address range in CIDR notation",
    "A subnet enabled for the storage service endpoint",
    "A blob container display name"
   ],
   "a": 2,
   "e": "Storage firewall rules accept VNet subnet rules and public IP ranges. Entra groups, access policy names, and container names are not firewall rule types.",
   "d": 2,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 81,
   "t": "storage-sas-tokens",
   "x": "Which shared access signature is signed with Microsoft Entra ID credentials instead of a storage account key?",
   "o": [
    "An ad hoc SAS",
    "A user delegation SAS",
    "An account SAS",
    "A service SAS"
   ],
   "a": 1,
   "e": "A user delegation SAS is signed with a key obtained through Entra ID, making it more secure than key-signed tokens. Account, service, and ad hoc SAS are all signed with the account key.",
   "d": 2
  },
  {
   "id": 82,
   "t": "storage-sas-tokens",
   "x": "An administrator must grant a partner read access to one blob for 24 hours without sharing keys or Entra identities. What fits best?",
   "o": [
    "A service SAS scoped to that single blob",
    "One of the two account access keys",
    "An Owner role assignment at blob scope",
    "The full account connection string"
   ],
   "a": 0,
   "e": "A service SAS can grant read on a single blob with an expiry, avoiding key or credential exposure. Sharing keys or the connection string would grant full account access.",
   "d": 2
  },
  {
   "id": 83,
   "t": "storage-sas-tokens",
   "x": "An ad hoc SAS that is not tied to any policy leaks before it expires. What is the fastest way to invalidate that token?",
   "o": [
    "Regenerate the account key that signed it",
    "Lower the signed expiry value in the token",
    "Remove the user delegation key from Entra ID",
    "Delete the stored access policy it references"
   ],
   "a": 0,
   "e": "An ad hoc SAS is signed by an account key, so rotating that key invalidates every SAS it produced. There is no policy to delete, and an issued token's fields cannot be edited.",
   "d": 2
  },
  {
   "id": 84,
   "t": "storage-sas-tokens",
   "x": "Which two constraints are encoded directly inside a SAS token string? Choose TWO.",
   "o": [
    "The account replication configuration",
    "The firewall default action",
    "The signed expiry time",
    "The allowed permissions such as read or write",
    "The target blob's access tier"
   ],
   "a": 2,
   "e": "A SAS token carries its permissions and start and expiry times in the query string. Replication, tiering, and firewall settings are account or blob properties, not token fields.",
   "d": 2,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 85,
   "t": "storage-stored-access-policies",
   "x": "What does binding a service SAS to a stored access policy give an administrator over an ad hoc SAS?",
   "o": [
    "Complete removal of the storage account key",
    "The ability to revoke or change it after issuance",
    "Automatic upgrade of the account to zone redundancy",
    "The option to sign it with Entra ID credentials"
   ],
   "a": 1,
   "e": "Because the constraints live server-side in the policy, a policy-based SAS can be revoked or modified without rotating keys. It is still key-signed, so keys remain in use.",
   "d": 2
  },
  {
   "id": 86,
   "t": "storage-stored-access-policies",
   "x": "What is the maximum number of stored access policies that can exist on one blob container at a time?",
   "o": [
    "Unlimited",
    "Five",
    "Ten",
    "Two"
   ],
   "a": 1,
   "e": "A container supports at most five stored access policies simultaneously. This cap is why policies group SAS tokens rather than serving one token per user.",
   "d": 2
  },
  {
   "id": 87,
   "t": "storage-stored-access-policies",
   "x": "An administrator needs to instantly revoke every SAS issued under a container policy without rotating account keys. Which action works?",
   "o": [
    "Delete or rename the stored access policy",
    "Disable public network access on the account",
    "Change the container's public access level",
    "Regenerate both of the account access keys"
   ],
   "a": 0,
   "e": "Deleting or renaming the referenced policy immediately invalidates all SAS bound to it. Key rotation also revokes tokens but affects every key-signed SAS, which is broader than needed.",
   "d": 2
  },
  {
   "id": 88,
   "t": "storage-stored-access-policies",
   "x": "Which two constraints can a container's stored access policy define for the SAS that reference it? Choose TWO.",
   "o": [
    "The start and expiry time window",
    "The permitted permissions such as read or delete",
    "The container's public access level",
    "The storage account redundancy setting",
    "The minimum TLS version for the account"
   ],
   "a": 0,
   "e": "A stored access policy sets permissions and a validity window that referencing SAS inherit. Redundancy, public access level, and TLS settings are unrelated account or container properties.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 89,
   "t": "storage-access-keys",
   "x": "An administrator suspects account key1 is compromised. What is the recommended way to rotate it with no downtime?",
   "o": [
    "Regenerate both keys at the same time",
    "Delete and recreate the storage account",
    "Move clients to key2, then regenerate key1",
    "Disable key1 without regenerating it"
   ],
   "a": 2,
   "e": "Two keys exist so clients can switch to the second key while the exposed key is regenerated, avoiding an outage. Keys cannot be individually disabled, only regenerated.",
   "d": 2
  },
  {
   "id": 90,
   "t": "storage-access-keys",
   "x": "Which approach removes hard-coded account keys from application code by authenticating with Microsoft Entra ID?",
   "o": [
    "Add the application's public IP to the firewall",
    "Assign data-plane RBAC roles to a managed identity",
    "Issue shared access signatures signed with key1",
    "Create stored access policies on each container"
   ],
   "a": 1,
   "e": "Entra data-plane role assignments let apps use managed identities and RBAC instead of embedded keys. SAS and stored access policies still depend on the account key.",
   "d": 2
  },
  {
   "id": 91,
   "t": "storage-access-keys",
   "x": "Which two credentials, if leaked, grant full control over all data in a storage account? Choose TWO.",
   "o": [
    "The account connection string",
    "An account access key",
    "A service SAS for a single blob",
    "A user delegation SAS for one container",
    "A stored access policy on a container"
   ],
   "a": 0,
   "e": "Account access keys, and the connection string that embeds them, authorize every operation on all data in the account. A service SAS or user delegation SAS is bounded by the specific blob or container it was signed for regardless of the permissions it carries, and a stored access policy only defines constraints for SAS tokens issued against its own container.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 92,
   "t": "storage-accounts-create",
   "x": "An administrator picks Standard general-purpose v2 for a mixed workload. Which two capabilities does that account provide? Choose TWO.",
   "o": [
    "A fixed five-gigabyte capacity ceiling",
    "Guaranteed single-digit millisecond latency",
    "SSD-backed premium throughput by default",
    "Support for blobs, files, queues, and tables",
    "Hot, cool, cold, and archive access tiers"
   ],
   "a": 3,
   "e": "GPv2 supports all four storage services and every access tier. Premium SSD latency and throughput belong to premium account kinds, and there is no small fixed capacity cap.",
   "d": 2,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 93,
   "t": "storage-accounts-create",
   "x": "A transaction-heavy application needs the lowest possible latency for many small, frequently accessed objects. Which storage account choice is appropriate?",
   "o": [
    "Premium performance with the page blob kind",
    "Standard performance with the hot default tier",
    "Premium performance with the block blob kind",
    "Standard performance with the cool default tier"
   ],
   "a": 2,
   "e": "Premium block blob accounts use SSD-backed storage built for high transaction rates and consistently low latency on object data. Premium page blob accounts serve page blob and disk-style workloads rather than general object traffic, and standard accounts on the hot or cool tier are HDD-backed and cannot match premium latency.",
   "d": 2
  },
  {
   "id": 94,
   "t": "storage-accounts-create",
   "x": "When creating a storage account, which property is permanent and cannot be changed later?",
   "o": [
    "The minimum TLS version",
    "The default blob access tier",
    "The account name",
    "The redundancy configuration"
   ],
   "a": 2,
   "e": "The globally unique account name is fixed at creation; changing it means a new account and data migration. Tier, redundancy, and TLS settings can all be adjusted afterward.",
   "d": 2
  },
  {
   "id": 95,
   "t": "storage-accounts-create",
   "x": "Which minimum TLS setting should an administrator enforce so a new storage account rejects legacy protocols?",
   "o": [
    "TLS 1.0",
    "SSL 3.0",
    "TLS 1.2",
    "TLS 1.1"
   ],
   "a": 2,
   "e": "Setting the minimum to TLS 1.2 blocks older, weaker protocols on inbound connections. TLS 1.0, TLS 1.1, and SSL 3.0 are deprecated and insecure.",
   "d": 2
  },
  {
   "id": 96,
   "t": "storage-redundancy",
   "x": "Which redundancy option stores three copies in a single datacenter at the lowest cost?",
   "o": [
    "Locally redundant storage",
    "Geo-redundant storage",
    "Read-access geo-redundant storage",
    "Zone-redundant storage"
   ],
   "a": 0,
   "e": "LRS keeps three synchronous copies in one facility, the cheapest but least resilient choice. ZRS, GRS, and RA-GRS spread copies across zones or regions.",
   "d": 2
  },
  {
   "id": 97,
   "t": "storage-redundancy",
   "x": "An administrator needs data to survive an entire datacenter failure while staying inside the primary region. Which redundancy fits?",
   "o": [
    "Locally redundant storage",
    "Geo-zone-redundant storage",
    "Geo-redundant storage",
    "Zone-redundant storage"
   ],
   "a": 3,
   "e": "ZRS synchronously replicates across three availability zones in one region, surviving a single datacenter loss. LRS cannot, and GRS and GZRS also copy to a second region.",
   "d": 2
  },
  {
   "id": 98,
   "t": "storage-redundancy",
   "x": "Which redundancy option lets applications read from the secondary region before any failover occurs?",
   "o": [
    "Locally redundant storage",
    "Geo-redundant storage",
    "Read-access geo-redundant storage",
    "Zone-redundant storage"
   ],
   "a": 2,
   "e": "RA-GRS exposes the secondary region endpoint for reads at any time. Plain GRS keeps the secondary unreachable until Microsoft triggers a failover.",
   "d": 2
  },
  {
   "id": 99,
   "t": "storage-redundancy",
   "x": "Which two redundancy options copy data to a paired secondary region? Choose TWO.",
   "o": [
    "Geo-redundant storage",
    "Premium file storage",
    "Locally redundant storage",
    "Geo-zone-redundant storage",
    "Zone-redundant storage"
   ],
   "a": 0,
   "e": "GRS and GZRS both replicate to a secondary region far from the primary. LRS and ZRS stay within one region, and premium file storage is a performance tier, not a redundancy type.",
   "d": 2,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 100,
   "t": "storage-encryption",
   "x": "By default, how is data at rest protected in an Azure storage account?",
   "o": [
    "Left unencrypted until an admin enables it",
    "Encrypted with Microsoft-managed 256-bit AES keys",
    "Encrypted only when a private endpoint exists",
    "Encrypted only with customer-managed Key Vault keys"
   ],
   "a": 1,
   "e": "Storage service encryption is always on using Microsoft-managed 256-bit AES keys. Customers may switch to customer-managed keys, but encryption itself cannot be turned off.",
   "d": 2
  },
  {
   "id": 101,
   "t": "storage-encryption",
   "x": "An administrator must own and rotate the encryption keys for a storage account using their own key material. What should be configured?",
   "o": [
    "A shared access signature per container",
    "Microsoft-managed keys with auto-rotation",
    "Customer-managed keys in Azure Key Vault",
    "Infrastructure encryption turned off"
   ],
   "a": 2,
   "e": "Customer-managed keys let the organization store and rotate keys in Key Vault while Azure performs the encryption. Microsoft-managed keys are controlled by Azure, not the customer.",
   "d": 2
  },
  {
   "id": 102,
   "t": "storage-encryption",
   "x": "Which feature adds a second, separate layer of encryption beneath the standard storage service encryption?",
   "o": [
    "Infrastructure encryption",
    "Transport layer security 1.2",
    "Client-side field masking",
    "A second firewall rule set"
   ],
   "a": 0,
   "e": "Infrastructure encryption applies an extra 256-bit AES layer for defense in depth and must be enabled at account creation. It cannot be added to an existing account.",
   "d": 2
  },
  {
   "id": 103,
   "t": "storage-encryption",
   "x": "Which two statements about Azure Storage encryption are correct? Choose TWO.",
   "o": [
    "Encryption requires the premium performance tier",
    "Keys must be placed in the connection string",
    "Every account encrypts data at rest automatically",
    "Customer-managed keys are held in Azure Key Vault",
    "Encryption can be disabled for cool-tier blobs"
   ],
   "a": 2,
   "e": "All accounts encrypt at rest by default, and customer-managed keys live in Key Vault. Encryption cannot be disabled, is tier-independent, and never requires keys in connection strings.",
   "d": 2,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 104,
   "t": "storage-explorer-azcopy",
   "x": "Which utility is a command-line tool optimized for fast, resumable bulk transfers of blobs and files?",
   "o": [
    "The portal upload blade",
    "Storage Explorer",
    "AzCopy",
    "The Cloud Shell editor"
   ],
   "a": 2,
   "e": "AzCopy is a CLI built for parallel, resumable transfers of large datasets. Storage Explorer is a GUI and portal uploads are not meant for bulk migration.",
   "d": 2
  },
  {
   "id": 105,
   "t": "storage-explorer-azcopy",
   "x": "An administrator wants a graphical desktop app to browse containers, queues, and file shares across subscriptions. Which tool fits?",
   "o": [
    "The AzCopy command line",
    "Azure Storage Explorer",
    "Azure Resource Graph",
    "Azure Monitor Workbooks"
   ],
   "a": 1,
   "e": "Storage Explorer is a cross-platform GUI for managing blobs, queues, tables, and files across accounts. AzCopy is command-line only with no browse tree.",
   "d": 2
  },
  {
   "id": 106,
   "t": "storage-explorer-azcopy",
   "x": "Which two authentication methods can AzCopy use to reach a storage account? Choose TWO.",
   "o": [
    "A stored access policy name alone",
    "A shared access signature token",
    "A Microsoft Entra ID sign-in",
    "A network security group rule",
    "The account redundancy setting"
   ],
   "a": 1,
   "e": "AzCopy authenticates with a SAS appended to the URL or an Entra ID login backed by RBAC roles. Policy names, redundancy, and NSG rules are not authentication methods.",
   "d": 2,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 107,
   "t": "files-identity-access",
   "x": "An administrator wants users synced from on-premises Active Directory to access an Azure file share over SMB with single sign-on from Microsoft Entra joined devices that have no line of sight to any domain controllers. Which authentication method should be enabled on the storage account?",
   "o": [
    "On-premises Active Directory Domain Services",
    "Storage account key authentication",
    "Microsoft Entra Kerberos authentication",
    "Microsoft Entra Domain Services with a managed domain"
   ],
   "a": 2,
   "e": "Microsoft Entra Kerberos issues Kerberos tickets directly from Entra ID, so Entra joined clients get single sign-on to the share without contacting any domain controllers. Entra Domain Services and on-premises AD DS both require the client to reach domain controllers during authentication, and storage account keys provide no per-user identity or single sign-on.",
   "d": 2
  },
  {
   "id": 108,
   "t": "files-identity-access",
   "x": "Which built-in RBAC role grants share-level read and write access to mount an Azure file share but does not allow modifying NTFS-level ACLs?",
   "o": [
    "Storage File Data SMB Share Elevated Contributor",
    "Storage File Data SMB Share Contributor",
    "Storage Blob Data Contributor",
    "Storage File Data SMB Share Reader"
   ],
   "a": 1,
   "e": "Storage File Data SMB Share Contributor grants read, write, and delete at the share level. Elevated Contributor additionally allows modifying NTFS ACLs, Reader is read-only, and the Blob role targets a different service.",
   "d": 2
  },
  {
   "id": 109,
   "t": "files-identity-access",
   "x": "Azure Files identity-based authentication over SMB enforces permissions at two levels. Which description is correct?",
   "o": [
    "Share access is set with Windows ACLs, and file access is set with Azure RBAC roles",
    "Both share and file access are configured only with Azure RBAC roles",
    "Share access is set with Azure RBAC roles, and file access is set with Windows ACLs",
    "Both share and file access are configured only with Windows NTFS ACLs"
   ],
   "a": 2,
   "e": "Azure Files enforces share-level access through Azure RBAC roles and directory or file access through Windows NTFS ACLs. The other choices reverse or collapse these two independent permission layers.",
   "d": 2
  },
  {
   "id": 110,
   "t": "files-identity-access",
   "x": "An administrator is enabling identity-based authentication for Azure Files. Which identity sources are supported for SMB authentication? Choose TWO.",
   "o": [
    "Local users defined on the storage account",
    "Third-party LDAP directory servers",
    "Microsoft Entra Domain Services",
    "On-premises Active Directory Domain Services",
    "Anonymous SMB guest access"
   ],
   "a": 2,
   "e": "Azure Files supports on-premises AD DS and Microsoft Entra Domain Services for SMB identity-based authentication, alongside Entra Kerberos. Local storage-account users, anonymous guests, and third-party LDAP are not valid SMB identity sources.",
   "d": 2,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 111,
   "t": "files-share",
   "x": "Which protocol option for an Azure file share requires a premium FileStorage account and is unavailable on standard general-purpose v2 accounts?",
   "o": [
    "NFS 4.1",
    "SMB 3.1.1",
    "REST through the Files data plane",
    "SMB 2.1"
   ],
   "a": 0,
   "e": "NFS 4.1 file shares require a premium FileStorage account and are not offered on standard general-purpose v2 accounts. SMB dialects and REST access are available on standard accounts.",
   "d": 2
  },
  {
   "id": 112,
   "t": "files-share",
   "x": "A standard SMB file share on a storage account created this year must grow to hold 60 TiB of data. What should the administrator configure so the share can reach that size?",
   "o": [
    "Enable large file shares on the account",
    "Raise the share quota in the share properties",
    "Convert the account to premium provisioned throughput",
    "Enable the hierarchical namespace"
   ],
   "a": 1,
   "e": "All standard pay-as-you-go file shares on current storage accounts can grow to 100 TiB, so raising the share quota is the only change needed. Large file shares is a legacy setting that mattered only on old accounts predating the feature, converting to premium abandons the required standard share, and hierarchical namespace applies to Data Lake blob storage rather than file shares.",
   "d": 2
  },
  {
   "id": 113,
   "t": "files-share",
   "x": "Which access tier for a standard Azure file share gives the lowest storage cost with higher transaction fees, fitting infrequently touched backup data?",
   "o": [
    "Hot",
    "Premium",
    "Transaction optimized",
    "Cool"
   ],
   "a": 3,
   "e": "The Cool tier for standard file shares has the lowest storage cost with higher transaction charges, fitting infrequently accessed backup data. Hot and transaction optimized cost more to store, and premium is a separate account type.",
   "d": 2
  },
  {
   "id": 114,
   "t": "files-snapshots-soft-delete",
   "x": "What is the primary characteristic of an Azure Files share snapshot?",
   "o": [
    "A read-only incremental point-in-time copy of the share",
    "A writable full clone stored in a separate account",
    "A continuous replica updated in real time",
    "A compressed export written to an archive tier"
   ],
   "a": 0,
   "e": "A share snapshot is a read-only, incremental point-in-time copy that bills only for changed data. It is not a writable clone, a live replica, or an archive-tier export.",
   "d": 2
  },
  {
   "id": 115,
   "t": "files-snapshots-soft-delete",
   "x": "Soft delete is enabled on a file share with a 14-day retention period, and a share is accidentally deleted on day 3. What can the administrator do?",
   "o": [
    "Restore the share from the storage account within the retention window",
    "Nothing, because deleted shares are purged immediately",
    "Recover it only by opening a support ticket with Microsoft",
    "Rebuild it automatically from a geo-redundant secondary"
   ],
   "a": 0,
   "e": "With file share soft delete enabled, a deleted share can be restored from the storage account any time within the configured retention period. It is not purged immediately and needs no support ticket.",
   "d": 2
  },
  {
   "id": 116,
   "t": "blob-container",
   "x": "A container's public access level is set to Blob. What does this configuration allow?",
   "o": [
    "Anonymous read of blobs but no listing of the container's contents",
    "No anonymous access to any blob in the container",
    "Anonymous read and list access to all blobs in the container",
    "Anonymous read and write access to blobs in the container"
   ],
   "a": 0,
   "e": "The Blob public access level permits anonymous read of blobs but not listing of container contents. Container level adds anonymous listing, while Private blocks all anonymous access.",
   "d": 2
  },
  {
   "id": 117,
   "t": "blob-container",
   "x": "An administrator wants to guarantee that no container in a storage account can ever be configured for anonymous public access. Which account-level setting does this?",
   "o": [
    "Apply a read-only lock to the storage account",
    "Set Allow Blob anonymous access to Disabled on the account",
    "Set each container's access level to Private individually",
    "Rotate the storage account access keys"
   ],
   "a": 1,
   "e": "Setting Allow Blob anonymous access to Disabled at the account level prevents any container from being configured for anonymous public access. Per-container settings, locks, and key rotation do not enforce this account-wide.",
   "d": 2
  },
  {
   "id": 118,
   "t": "blob-container",
   "x": "Which blob type is optimized for append operations such as logging, where data is only added to the end of the blob?",
   "o": [
    "Block blob",
    "Snapshot blob",
    "Page blob",
    "Append blob"
   ],
   "a": 3,
   "e": "Append blobs are optimized for append operations such as logging, where data is only added to the end. Block blobs suit general object storage, page blobs back disks, and snapshots are point-in-time copies.",
   "d": 2
  },
  {
   "id": 119,
   "t": "blob-storage-tiers",
   "x": "A blob is stored in the Archive tier. What must happen before its data can be read?",
   "o": [
    "It must have its access level set to Container",
    "It must be rehydrated to the Hot, Cool, or Cold tier",
    "It must be moved to a different storage account",
    "It must be copied to a premium block blob account"
   ],
   "a": 1,
   "e": "Archive is an offline tier, so a blob must be rehydrated to Hot, Cool, or Cold before its data can be read. Copying, access levels, and moving accounts do not make archived data readable.",
   "d": 2
  },
  {
   "id": 120,
   "t": "blob-storage-tiers",
   "x": "Which access tier offers the cheapest storage but charges the most to read data back and enforces a 180-day early-deletion penalty?",
   "o": [
    "Hot",
    "Archive",
    "Cool",
    "Cold"
   ],
   "a": 1,
   "e": "Archive offers the cheapest storage but the highest data retrieval cost and a 180-day early-deletion minimum. Cold, Cool, and Hot progressively raise storage cost while lowering retrieval cost.",
   "d": 2
  },
  {
   "id": 121,
   "t": "blob-storage-tiers",
   "x": "At which scope can the Archive tier be assigned for a blob?",
   "o": [
    "As the default access tier on the storage account",
    "Only at the individual blob level, not as an account default",
    "Only through a lifecycle policy, never manually",
    "Only at the container level for all blobs"
   ],
   "a": 1,
   "e": "The Archive tier can be set only at the individual blob level and cannot be an account default access tier. Only Hot or Cool can serve as the account default.",
   "d": 2
  },
  {
   "id": 122,
   "t": "blob-storage-tiers",
   "x": "Which minimum storage durations apply before early deletion charges are incurred? Choose TWO.",
   "o": [
    "Cold tier has a 30-day minimum",
    "Hot tier has a 30-day minimum",
    "Cool tier has a 90-day minimum",
    "Archive tier has a 180-day minimum",
    "Cool tier has a 30-day minimum"
   ],
   "a": 3,
   "e": "Cool carries a 30-day minimum and Archive a 180-day minimum before early-deletion charges apply. Cold's minimum is 90 days and Hot has no minimum, so the other choices are incorrect.",
   "d": 2,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 123,
   "t": "blob-soft-delete",
   "x": "Blob soft delete is enabled with a 7-day retention period. Which operations does this feature protect against? Choose TWO.",
   "o": [
    "Overwriting a blob's contents",
    "Deleting the parent container",
    "Deleting the entire storage account",
    "Changing the account's redundancy option",
    "Deleting an individual blob"
   ],
   "a": 0,
   "e": "Blob soft delete protects individual blob deletes and overwrites, including snapshots and versions. It does not protect against deleting the container or the account, or changing redundancy, which need other safeguards.",
   "d": 2,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 124,
   "t": "blob-soft-delete",
   "x": "An administrator wants to recover from an accidental deletion of an entire blob container. Which feature must be enabled beforehand?",
   "o": [
    "Container soft delete",
    "Point-in-time restore",
    "Blob versioning",
    "Blob soft delete"
   ],
   "a": 0,
   "e": "Container soft delete is the feature that allows recovery of an accidentally deleted container within its retention window. Blob soft delete, versioning, and point-in-time restore do not recover a deleted container.",
   "d": 2
  },
  {
   "id": 125,
   "t": "blob-soft-delete",
   "x": "For blob soft delete, what recovery window can an administrator configure?",
   "o": [
    "Between 1 and 730 days",
    "Between 1 and 365 days",
    "Between 7 and 90 days",
    "Between 1 and 30 days"
   ],
   "a": 1,
   "e": "Blob soft delete retention can be set from 1 to 365 days. The other ranges understate or overstate the allowed maximum.",
   "d": 2
  },
  {
   "id": 126,
   "t": "blob-lifecycle-management",
   "x": "A lifecycle rule uses daysAfterModificationGreaterThan of 90 with a tierToArchive action. What happens to matching blobs?",
   "o": [
    "Page blobs are compressed after 90 days of inactivity",
    "Block blobs not modified for 90 days move to the Archive tier",
    "Blobs are deleted 90 days after they were created",
    "Blobs are copied to a second storage account after 90 days"
   ],
   "a": 1,
   "e": "The tierToArchive action with daysAfterModificationGreaterThan of 90 moves block blobs not modified for 90 days into Archive. Lifecycle tiering does not delete on creation age, copy across accounts, or compress page blobs.",
   "d": 2
  },
  {
   "id": 127,
   "t": "blob-lifecycle-management",
   "x": "Which condition lets a lifecycle policy act on blobs based on how recently they were read rather than written?",
   "o": [
    "daysAfterLastAccessTimeGreaterThan",
    "daysAfterModificationGreaterThan",
    "daysAfterExpiryTimeGreaterThan",
    "daysAfterCreationGreaterThan"
   ],
   "a": 0,
   "e": "Acting on read recency uses daysAfterLastAccessTimeGreaterThan, which requires last access time tracking to be enabled. The modification and creation conditions key off write or creation time instead.",
   "d": 2
  },
  {
   "id": 128,
   "t": "blob-lifecycle-management",
   "x": "How can an administrator scope a lifecycle rule so it applies only to blobs whose names start with logs/?",
   "o": [
    "Add a prefixMatch filter to the rule",
    "Assign the rule an RBAC scope of the logs path",
    "Add a container-level lock to the logs path",
    "Create a separate storage account for the logs path"
   ],
   "a": 0,
   "e": "A prefixMatch filter scopes a lifecycle rule to blobs whose names begin with a given path such as logs/. Locks, RBAC scopes, and separate accounts are not lifecycle rule filters.",
   "d": 2
  },
  {
   "id": 129,
   "t": "blob-lifecycle-management",
   "x": "Which actions can a blob lifecycle management policy perform automatically? Choose TWO.",
   "o": [
    "Replicate a blob to another storage account",
    "Rotate the storage account access keys",
    "Change a container's public access level",
    "Move a blob to the Cool tier after inactivity",
    "Delete a blob a set number of days after creation"
   ],
   "a": 3,
   "e": "Lifecycle policies can tier blobs to Cool after inactivity and delete blobs a set number of days after creation. Cross-account replication, access-level changes, and key rotation are outside lifecycle management.",
   "d": 2,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 130,
   "t": "blob-versioning",
   "x": "With blob versioning enabled, how does an application read an earlier state of a blob?",
   "o": [
    "By restoring the entire storage account",
    "By specifying the version ID of the desired version",
    "By setting the container access level to Blob",
    "By rehydrating the blob from the Archive tier"
   ],
   "a": 1,
   "e": "With versioning enabled, an application reads an earlier state by specifying that version's version ID. Access levels, rehydration, and account restore are unrelated to selecting a prior version.",
   "d": 2
  },
  {
   "id": 131,
   "t": "blob-versioning",
   "x": "An administrator is evaluating blob versioning for a storage account. Which two facts about it are accurate? Choose TWO.",
   "o": [
    "It is enabled at the storage account level",
    "It requires blobs to be in the Archive tier",
    "It must be enabled separately on each container",
    "A new version is created on every write or delete",
    "Versions are stored in a separate storage account"
   ],
   "a": 0,
   "e": "Blob versioning is enabled at the storage account level and creates a new version on every write or delete. It is not per-container, does not use a separate account, and does not require the Archive tier.",
   "d": 2,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 132,
   "t": "blob-versioning",
   "x": "An administrator needs automatic protection of prior blob states plus a way to tier older versions to Cool to control cost. Which combination should be used?",
   "o": [
    "Container soft delete combined with object replication",
    "A resource lock combined with a read-only SAS token",
    "Blob versioning with a lifecycle policy targeting previous versions",
    "Access keys combined with stored access policies"
   ],
   "a": 2,
   "e": "Combining blob versioning with a lifecycle policy that targets previous versions preserves prior states and tiers older versions to Cool for cost control. The other pairings do not provide automatic version retention plus tiering.",
   "d": 2
  },
  {
   "id": 133,
   "t": "storage-object-replication",
   "x": "Object replication asynchronously copies which kind of data between a source and destination storage account?",
   "o": [
    "Page blobs",
    "Block blobs",
    "Queue messages",
    "File shares"
   ],
   "a": 1,
   "e": "Object replication asynchronously copies block blobs from a source to a destination account. File shares, page blobs, and queue messages are not replicated by this feature.",
   "d": 2
  },
  {
   "id": 134,
   "t": "storage-object-replication",
   "x": "Which prerequisites must be met to configure object replication between two storage accounts? Choose TWO.",
   "o": [
    "Blob versioning must be enabled on source and destination",
    "A private endpoint must connect the two storage accounts",
    "The source and destination must reside in the same region",
    "Change feed must be enabled on the source account",
    "Both accounts must use the Archive access tier for blobs"
   ],
   "a": 0,
   "e": "Object replication requires blob versioning on both source and destination and change feed on the source. It does not require the Archive tier, the same region, or a private endpoint between accounts.",
   "d": 2,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 135,
   "t": "storage-object-replication",
   "x": "In an object replication policy, what does the destination account hold after replication completes?",
   "o": [
    "A writable primary that the source syncs from",
    "A synchronous mirror updated within the same transaction",
    "A read-consistent asynchronous copy of the filtered block blobs",
    "A compressed archive of the source account's blobs"
   ],
   "a": 2,
   "e": "After replication the destination holds a read-consistent asynchronous copy of the filtered block blobs from the source. It is not a synchronous mirror, a writable primary, or a compressed archive.",
   "d": 2
  },
  {
   "id": 136,
   "t": "arm-bicep-interpret",
   "x": "An administrator reviews a Bicep file containing the line output storageId string = stg.id. What does declaring this output accomplish?",
   "o": [
    "It defines a required value the caller must supply before deployment",
    "It prevents the storage account from being deleted after deployment",
    "It creates a new storage account named stg during the deployment",
    "It returns the storage account resource ID for reuse by other deployments"
   ],
   "a": 3,
   "e": "Outputs surface values such as a resource ID after deployment for reuse by scripts or parent modules. A value the caller supplies is a parameter, and outputs neither create resources nor apply delete locks.",
   "d": 3
  },
  {
   "id": 137,
   "t": "arm-bicep-interpret",
   "x": "An administrator sees resourceId('Microsoft.Network/virtualNetworks', parameters('vnetName')) inside an ARM template. What does this function return?",
   "o": [
    "The private IP address assigned to the virtual network gateway",
    "The provisioning state of the virtual network at deployment time",
    "The fully qualified resource ID of the named virtual network",
    "The Azure region string of the resource group hosting the network"
   ],
   "a": 2,
   "e": "resourceId builds the fully qualified ID for a resource, defaulting to the current subscription and resource group. It does not return runtime properties such as an IP address, provisioning state, or location.",
   "d": 3
  },
  {
   "id": 138,
   "t": "arm-bicep-interpret",
   "x": "An administrator wants to know which elements make Azure provision one resource before another in a Bicep file. Which two factors create a deployment dependency? Choose TWO.",
   "o": [
    "Two resources declared in the same target scope",
    "A resource referencing another's symbolic name in a property",
    "An explicit dependsOn array naming another resource",
    "Two resources sharing an identical tags object",
    "Two resources sharing the same location parameter value"
   ],
   "a": 1,
   "e": "Referencing a symbolic name creates an implicit dependency and dependsOn creates an explicit one. Sharing a location, tags, or scope does not by itself affect provisioning order.",
   "d": 3,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 139,
   "t": "arm-template-modify",
   "x": "An administrator must deploy five identically configured network security groups from one ARM template without repeating the resource block. Which template feature should be added?",
   "o": [
    "A copy element with a count to iterate the resource",
    "A nested outputs section listing each security group",
    "A variables object holding the five group names",
    "A condition property set permanently to true"
   ],
   "a": 0,
   "e": "The copy element repeats a resource block a set number of times to create multiple instances. Outputs only return values, a condition toggles a single deployment, and a variables list alone creates nothing.",
   "d": 3
  },
  {
   "id": 140,
   "t": "arm-template-modify",
   "x": "While editing an ARM template, an administrator needs a parameter to accept only Standard_LRS, Standard_GRS, or Premium_LRS. Which parameter constraint enforces this?",
   "o": [
    "A minLength property on the parameter definition",
    "A metadata description listing the accepted values",
    "An allowedValues array on the parameter definition",
    "A defaultValue of Standard_LRS on the parameter"
   ],
   "a": 2,
   "e": "allowedValues restricts a parameter to a fixed list and rejects anything else during validation. A default only supplies a fallback, minLength constrains string length, and metadata is descriptive only.",
   "d": 3
  },
  {
   "id": 141,
   "t": "arm-template-modify",
   "x": "An administrator edits an ARM template so one resource deploys only when a boolean parameter is true. Which resource property should be added?",
   "o": [
    "An outputs property that returns the boolean parameter",
    "A copy property that counts the boolean parameter",
    "A condition property that evaluates the boolean parameter",
    "A dependsOn property that lists the boolean parameter"
   ],
   "a": 2,
   "e": "The condition property controls whether a resource deploys based on an expression. copy repeats a resource, dependsOn orders resources, and outputs only return values.",
   "d": 3
  },
  {
   "id": 142,
   "t": "bicep-modify",
   "x": "An administrator wants a Bicep parameter limited to three approved environment names. Which decorator restricts the parameter to a specific set of values?",
   "o": [
    "The @allowed decorator listing the permitted values",
    "The @secure decorator hiding the value from logs",
    "The @description decorator documenting the parameter",
    "The @minLength decorator setting a character floor"
   ],
   "a": 0,
   "e": "@allowed constrains a Bicep parameter to an explicit list of values. @secure hides sensitive input, @minLength governs string length, and @description only adds documentation.",
   "d": 3
  },
  {
   "id": 143,
   "t": "bicep-modify",
   "x": "An administrator needs a Bicep file to reference a storage account that already exists in the resource group instead of creating it. Which keyword should the declaration use?",
   "o": [
    "The module keyword pointing at a separate file",
    "The import keyword bringing in a namespace",
    "The existing keyword on the resource declaration",
    "The output keyword returning the account name"
   ],
   "a": 2,
   "e": "Declaring a resource with the existing keyword references an already-deployed resource without redeploying it. module composes other files, import brings in extensions, and output only returns values.",
   "d": 3
  },
  {
   "id": 144,
   "t": "bicep-modify",
   "x": "An administrator refactors a large Bicep file into reusable modules. Which two statements about Bicep modules are accurate? Choose TWO.",
   "o": [
    "A module is invoked with the module keyword and a path",
    "A module always deploys to a different subscription",
    "A module must be authored in ARM JSON rather than in Bicep",
    "A module can expose outputs the parent file consumes",
    "A module cannot accept parameters from the parent file"
   ],
   "a": 0,
   "e": "Modules are called with the module keyword, accept parameters, and return outputs to the parent. They can be Bicep files and deploy to the same scope unless another scope is set.",
   "d": 3,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 145,
   "t": "arm-bicep-deploy",
   "x": "An administrator runs a template deployment and wants a preview of exactly which resources will change before committing. Which option should be used?",
   "o": [
    "The complete deployment mode flag on the command",
    "The what-if operation on the deployment command",
    "The no-wait parameter on the command",
    "The rollback-on-error switch on the command"
   ],
   "a": 1,
   "e": "what-if previews the changes a deployment would make without applying them. Complete mode governs deletion of unlisted resources, rollback reverts to a prior deployment, and no-wait only returns control early.",
   "d": 3
  },
  {
   "id": 146,
   "t": "arm-bicep-deploy",
   "x": "An administrator deploys a template in incremental mode to a resource group that already contains a public IP not defined in the template. What happens to that public IP?",
   "o": [
    "It blocks the deployment from completing successfully",
    "It is left in place because incremental mode keeps it",
    "It is moved to a different resource group automatically",
    "It is deleted because it is absent from the template body"
   ],
   "a": 1,
   "e": "Incremental mode only adds or updates resources named in the template and leaves others untouched. Complete mode is what deletes resources not present in the template.",
   "d": 3
  },
  {
   "id": 147,
   "t": "arm-bicep-deploy",
   "x": "An administrator plans to submit a Bicep file as a resource-group deployment. Which two commands can start this deployment? Choose TWO.",
   "o": [
    "Set-AzResourceGroup with the template file",
    "New-AzResourceGroupDeployment with the template file",
    "az deployment group create with the Bicep file path",
    "az bicep build with a deployment flag",
    "az group create with the Bicep file path"
   ],
   "a": 1,
   "e": "az deployment group create and New-AzResourceGroupDeployment both submit resource-group deployments and accept Bicep. az group create only makes a group, Set-AzResourceGroup edits group metadata, and az bicep build only compiles to JSON.",
   "d": 3,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 148,
   "t": "arm-export-convert-bicep",
   "x": "An administrator has an ARM JSON template and wants an equivalent Bicep file. Which command converts the JSON into Bicep?",
   "o": [
    "az bicep publish referencing the JSON file",
    "az bicep build referencing the JSON file",
    "az deployment group export referencing the JSON file",
    "az bicep decompile referencing the JSON file"
   ],
   "a": 3,
   "e": "az bicep decompile converts an ARM JSON template into Bicep. az bicep build does the reverse, export retrieves a deployed template, and publish uploads a module to a registry.",
   "d": 3
  },
  {
   "id": 149,
   "t": "arm-export-convert-bicep",
   "x": "An administrator wants to capture the current configuration of an existing resource group as a template for reuse. Which portal action generates it?",
   "o": [
    "The Delete lock option on the resource group",
    "The Move option on the resource group",
    "The Redeploy option on the last deployment",
    "The Export template option on the resource group"
   ],
   "a": 3,
   "e": "Export template produces an ARM template representing the resource group's current resources. Redeploy reuses a prior deployment, Move relocates resources, and a delete lock only prevents removal.",
   "d": 3
  },
  {
   "id": 150,
   "t": "arm-export-convert-bicep",
   "x": "An administrator reviews a Bicep file produced by decompiling an ARM template. Which two cleanup actions are commonly needed on decompiled output? Choose TWO.",
   "o": [
    "Replace verbose resourceId calls with symbolic references",
    "Delete every parameter because Bicep forbids parameters",
    "Rename auto-generated symbolic names to meaningful identifiers",
    "Convert all strings to integers to satisfy Bicep typing",
    "Remove the target scope so the file has no scope"
   ],
   "a": 0,
   "e": "Decompiled Bicep often needs readable symbolic names and simplified references. Bicep fully supports parameters, keeps native string types, and requires a valid target scope.",
   "d": 3,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 151,
   "t": "vm-create",
   "x": "An administrator uses Azure CLI to create a Linux VM and wants Azure to generate an SSH key pair automatically. Which az vm create option requests this?",
   "o": [
    "The --generate-ssh-keys option",
    "The --authentication-type password option",
    "The --disable-key-generation option",
    "The --admin-password option"
   ],
   "a": 0,
   "e": "--generate-ssh-keys creates and stores an SSH key pair when one is not found. Password authentication and --admin-password rely on passwords, and there is no such disable-key-generation flag.",
   "d": 3
  },
  {
   "id": 152,
   "t": "vm-create",
   "x": "An administrator provisions a Windows VM and must supply the resource that gives it network connectivity. Which resource must exist or be created for the VM?",
   "o": [
    "A network interface attached to a subnet",
    "An application security group used as the connection",
    "A storage account dedicated to boot diagnostics",
    "A route table assigned to the resource group"
   ],
   "a": 0,
   "e": "A VM needs a network interface bound to a subnet to communicate. A route table is optional, a storage account only supports diagnostics, and an application security group groups NICs rather than connecting the VM.",
   "d": 3
  },
  {
   "id": 153,
   "t": "vm-create",
   "x": "An administrator enables a system-assigned managed identity when creating several VMs. What effect does enabling this identity have?",
   "o": [
    "Azure encrypts the OS disk with a customer-managed key",
    "Azure enrolls the VM into a scale set automatically",
    "Azure creates a Microsoft Entra service principal for the VM",
    "Azure assigns the VM a static public IP address at creation"
   ],
   "a": 2,
   "e": "A system-assigned managed identity creates a Microsoft Entra service principal whose lifecycle matches the VM. It does not assign IP addresses, join a scale set, or configure disk encryption.",
   "d": 3
  },
  {
   "id": 154,
   "t": "vm-create",
   "x": "An administrator prepares an az vm create command for a new virtual machine. Which two inputs are required for the command to provision the VM? Choose TWO.",
   "o": [
    "A pre-created external load balancer",
    "The target resource group name",
    "A configured Azure Policy assignment",
    "An existing Recovery Services vault",
    "The virtual machine name"
   ],
   "a": 1,
   "e": "A resource group and a VM name are required to create a VM. A load balancer, backup vault, and policy assignment are optional and unrelated to basic provisioning.",
   "d": 3,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 155,
   "t": "vm-encryption-at-host",
   "x": "An administrator wants VM temp disks and disk caches encrypted on the Azure host without any in-guest encryption software. Which feature meets this requirement?",
   "o": [
    "Storage service encryption on a blob container",
    "Azure Disk Encryption using in-guest BitLocker",
    "Encryption at host on the virtual machine",
    "Transparent data encryption on the OS disk"
   ],
   "a": 2,
   "e": "Encryption at host encrypts temp disks and caches on the host with no in-guest agent. Azure Disk Encryption uses in-guest BitLocker or DM-Crypt, TDE protects databases, and storage service encryption applies to blob and file data.",
   "d": 3
  },
  {
   "id": 156,
   "t": "vm-encryption-at-host",
   "x": "An administrator finds the encryption at host option unavailable in the subscription. What is the most likely required first step?",
   "o": [
    "Assign the virtual machine a public IP address",
    "Register the EncryptionAtHost feature for the subscription",
    "Move the virtual machine into an availability set",
    "Enable soft delete on the associated key vault"
   ],
   "a": 1,
   "e": "Encryption at host requires registering the EncryptionAtHost feature on the subscription before it becomes available. A public IP, availability set, or key vault soft delete are unrelated prerequisites.",
   "d": 3
  },
  {
   "id": 157,
   "t": "vm-encryption-at-host",
   "x": "An administrator weighs two protection methods for virtual machine data. Which two statements about encryption at host are accurate? Choose TWO.",
   "o": [
    "It requires the subscription feature to be registered before use",
    "It runs a BitLocker agent inside the guest operating system",
    "It encrypts temp disks and caches that in-guest encryption may miss",
    "It disables platform-managed keys for the disks entirely",
    "It applies only to unmanaged disks in a storage account"
   ],
   "a": 0,
   "e": "Encryption at host covers temp disks and caches and needs its feature registered first. It runs on the host without an in-guest agent, works with managed disks, and does not remove platform key options.",
   "d": 3,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 158,
   "t": "vm-move",
   "x": "An administrator must relocate several VMs from the East US region to West US while preserving their configuration. Which Azure service is designed for this cross-region move?",
   "o": [
    "Azure Backup restore",
    "Azure Resource Mover",
    "Azure Migrate assessment",
    "Azure Site Recovery failover"
   ],
   "a": 1,
   "e": "Azure Resource Mover orchestrates moving resources such as VMs across regions while tracking dependencies. Site Recovery targets DR failover, Migrate assesses workloads, and Backup restores data rather than relocating live resources.",
   "d": 3
  },
  {
   "id": 159,
   "t": "vm-move",
   "x": "An administrator relocates a VM into another resource group in the same subscription. What is true about the VM afterward?",
   "o": [
    "Its resource IDs change and its dependencies may move too",
    "Its managed disks are deleted and then recreated as empty",
    "Its operating system is reimaged from a fresh gallery image",
    "Its Azure region changes to match the destination group"
   ],
   "a": 0,
   "e": "Moving to another resource group updates the resource IDs and often requires dependent resources to move together. The move does not change region, wipe disks, or reimage the operating system.",
   "d": 3
  },
  {
   "id": 160,
   "t": "vm-move",
   "x": "An administrator prepares to move a VM between two subscriptions. Which two considerations apply to that move operation? Choose TWO.",
   "o": [
    "The VM's private IP is converted to a public IP automatically",
    "The move upgrades the VM to the newest size series available",
    "The operating system must be reinstalled once the move finishes",
    "The source and destination are locked during validation and the move",
    "Dependent resources such as disks and NICs usually must move together"
   ],
   "a": 3,
   "e": "Moves require dependent resources to travel together and lock the resources during the operation. The move does not swap IP types, resize the VM, or reinstall the operating system.",
   "d": 3,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 161,
   "t": "vm-sizes",
   "x": "An administrator runs a development workload that sits idle most of the time and wants low-cost VMs able to burst CPU when needed. Which VM series fits best?",
   "o": [
    "The N-series",
    "The H-series",
    "The B-series",
    "The D-series"
   ],
   "a": 2,
   "e": "B-series VMs accumulate CPU credits while idle and spend them to burst when demand spikes, making them the low-cost fit for mostly idle development workloads. D-series VMs deliver constant full-performance general-purpose compute that costs more when sitting idle, and the N-series and H-series target GPU and high-performance computing workloads respectively.",
   "d": 3
  },
  {
   "id": 162,
   "t": "vm-sizes",
   "x": "An administrator must resize a running VM to a size hosted on different underlying hardware than the current one. What is required to complete the resize?",
   "o": [
    "The VM must be stopped and deallocated before resizing",
    "The VM must be converted to unmanaged disks",
    "The VM must first join an availability zone",
    "The VM must have encryption at host disabled"
   ],
   "a": 0,
   "e": "Resizing to a size on different underlying hardware requires deallocating the VM first. Availability zones, encryption at host, and disk type do not gate this resize.",
   "d": 3
  },
  {
   "id": 163,
   "t": "vm-sizes",
   "x": "An administrator needs VMs with a high memory-to-vCPU ratio to host an in-memory database. Which VM series should be selected?",
   "o": [
    "The E-series",
    "The F-series",
    "The B-series",
    "The A-series"
   ],
   "a": 0,
   "e": "The E-series is Azure's memory-optimized family, giving the high memory-to-vCPU ratio an in-memory database needs. The F-series is compute-optimized with the opposite ratio, the B-series is burstable for intermittent light workloads, and the A-series targets entry-level test and development use.",
   "d": 3
  },
  {
   "id": 164,
   "t": "vm-disks",
   "x": "An administrator needs the managed disk type with the lowest latency and IOPS configurable independently of disk size for a demanding database. Which disk type should be chosen?",
   "o": [
    "Premium SSD",
    "Standard SSD",
    "Standard HDD",
    "Ultra Disk"
   ],
   "a": 3,
   "e": "Ultra Disks deliver the lowest latency and let you configure IOPS and throughput independently of size. Premium SSD, Standard SSD, and Standard HDD are lower tiers without that tunability.",
   "d": 3
  },
  {
   "id": 165,
   "t": "vm-disks",
   "x": "An administrator wants a point-in-time copy of a VM's managed data disk to use as a baseline for creating new disks. Which resource should be created?",
   "o": [
    "A shared image in a gallery",
    "A managed disk snapshot",
    "A backup recovery point",
    "A blob storage container"
   ],
   "a": 1,
   "e": "A snapshot is a read-only point-in-time copy of a managed disk that can seed new disks. A container stores blobs, a recovery point restores VMs, and a shared image captures a generalized VM rather than one data disk.",
   "d": 3
  },
  {
   "id": 166,
   "t": "vm-disks",
   "x": "An administrator sees a VM's OS disk host caching set to None and wants better read performance for the operating system. Which caching setting is recommended for an OS disk?",
   "o": [
    "No host caching at all",
    "Read-only caching with writes blocked",
    "Read/write host caching",
    "Write-only host caching"
   ],
   "a": 2,
   "e": "Read/write is the recommended host caching mode for a typical OS disk. None disables caching, and write-only or write-blocked modes are not appropriate defaults for an operating system disk.",
   "d": 3
  },
  {
   "id": 167,
   "t": "vm-disks",
   "x": "An administrator plans disk configuration for a new VM. Which two statements about Azure managed disks are correct? Choose TWO.",
   "o": [
    "The OS disk and data disks can use different performance tiers",
    "A snapshot provides a point-in-time copy of a managed disk",
    "Managed disks require you to create a storage account first",
    "Standard HDD offers the lowest latency of every disk tier",
    "Ultra Disk is the default tier for every new virtual machine"
   ],
   "a": 0,
   "e": "OS and data disks can use different tiers, and snapshots are point-in-time copies. Managed disks need no storage account, Ultra is not the default, and Standard HDD has the highest latency.",
   "d": 3,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 168,
   "t": "vm-availability",
   "x": "An administrator must protect a multi-VM application against a single datacenter failure within one region. Which deployment choice gives the strongest protection?",
   "o": [
    "Place all of the VMs in a single availability set",
    "Spread the VMs across multiple availability zones in the region",
    "Place all of the VMs into one fault domain",
    "Deploy all of the VMs to one proximity placement group"
   ],
   "a": 1,
   "e": "Availability zones are physically separate datacenters within a region, so spreading VMs across zones survives a datacenter failure. An availability set protects within one datacenter, a single fault domain shares hardware, and a proximity placement group co-locates VMs.",
   "d": 3
  },
  {
   "id": 169,
   "t": "vm-availability",
   "x": "An administrator configures an availability set and wants to understand the purpose of update domains. What do update domains isolate?",
   "o": [
    "Groups of VMs that must be placed in different Azure regions",
    "Groups of VMs that share a single power source and network switch",
    "Groups of VMs that are attached to one shared managed disk",
    "Groups of VMs that can be rebooted together during planned maintenance"
   ],
   "a": 3,
   "e": "Update domains group VMs so planned maintenance reboots only one group at a time. Fault domains, not update domains, isolate shared power and network hardware, and neither spans regions nor shares a disk.",
   "d": 3
  },
  {
   "id": 170,
   "t": "vm-availability",
   "x": "An administrator evaluates high-availability constructs for Azure VMs. Which two statements about availability sets are correct? Choose TWO.",
   "o": [
    "They guarantee zero downtime for a single VM",
    "They span multiple Azure regions by design",
    "They distribute VMs across multiple update domains",
    "They distribute VMs across multiple fault domains",
    "They remove the need for managed disks"
   ],
   "a": 2,
   "e": "Availability sets spread VMs across fault and update domains within one region. They do not span regions, cannot protect a single VM, and do not remove the need for disks.",
   "d": 3,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 171,
   "t": "vmss",
   "x": "An administrator wants a VM scale set to add instances whenever average processor utilization exceeds a threshold, without manual intervention. Which feature should be configured?",
   "o": [
    "A scheduled scale rule that adds instances at fixed times",
    "Automatic instance repair enabled on the scale set",
    "A larger VM size applied to the scale set profile",
    "An autoscale rule based on a CPU metric"
   ],
   "a": 3,
   "e": "A metric-based autoscale rule grows the scale set when average CPU crosses the defined threshold. A scheduled scale rule changes capacity at preset times regardless of actual load, automatic instance repair only replaces unhealthy instances, and applying a larger VM size scales up rather than adding instances.",
   "d": 3
  },
  {
   "id": 172,
   "t": "vmss",
   "x": "An administrator creates a scale set and needs an orchestration mode that allows mixed VM sizes and adding standalone VMs to the set. Which mode should be selected?",
   "o": [
    "Manual orchestration",
    "Uniform orchestration",
    "Proximity orchestration",
    "Flexible orchestration"
   ],
   "a": 3,
   "e": "Flexible orchestration allows mixed VM sizes and adding standalone VMs to the set. Uniform uses identical instances from one model, and manual and proximity are not orchestration modes.",
   "d": 3
  },
  {
   "id": 173,
   "t": "vmss",
   "x": "An administrator reviews upgrade policy options for a Uniform scale set. Which two modes control how instances receive an updated model? Choose TWO.",
   "o": [
    "Regional upgrades spread across two regions",
    "Automatic upgrades applied by the platform",
    "Proximity upgrades applied within one rack",
    "Snapshot upgrades taken from a disk copy",
    "Rolling upgrades applied in batches"
   ],
   "a": 1,
   "e": "Uniform scale sets support manual, automatic, and rolling upgrade modes; rolling applies in batches while automatic lets the platform apply changes. Regional, snapshot, and proximity are not upgrade policy modes.",
   "d": 3,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 174,
   "t": "container-registry",
   "x": "Which two capabilities are available only in the Premium tier of Azure Container Registry? Choose TWO.",
   "o": [
    "Storing images in repositories",
    "Private endpoint connectivity",
    "Geo-replication across multiple regions",
    "Authenticating with the admin user account",
    "Pushing images with the Docker CLI"
   ],
   "a": 1,
   "e": "Geo-replication and private endpoints are Premium-only features of Azure Container Registry. Repository storage, admin-user authentication, and Docker push work in every tier.",
   "d": 3,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 175,
   "t": "container-registry",
   "x": "An administrator wants to build a container image directly in Azure Container Registry without a local Docker daemon. Which command should they run?",
   "o": [
    "az acr build",
    "az acr import",
    "az acr login",
    "az acr repository show"
   ],
   "a": 0,
   "e": "az acr build uses ACR Tasks to build the image in the cloud, so no local Docker engine is needed. az acr import copies an existing image and az acr login only authenticates.",
   "d": 3
  },
  {
   "id": 176,
   "t": "container-registry",
   "x": "A registry was created with the admin account disabled. Which identity approach lets an Azure Container Instances deployment pull images securely?",
   "o": [
    "The registry admin username and password",
    "A shared access signature token",
    "A storage account access key from the registry",
    "A managed identity granted the AcrPull role"
   ],
   "a": 3,
   "e": "Assigning a managed identity the AcrPull role lets the workload authenticate without stored credentials. The admin account is discouraged, and ACR does not use SAS tokens or storage-style access keys.",
   "d": 3
  },
  {
   "id": 177,
   "t": "container-instances",
   "x": "An administrator needs a container to restart only when its process exits with an error, but not after a successful exit. Which restart policy meets this requirement?",
   "o": [
    "Manual",
    "OnFailure",
    "Always",
    "Never"
   ],
   "a": 1,
   "e": "OnFailure restarts a container only when it exits with a nonzero code. Always restarts regardless of exit code, Never leaves it stopped, and Manual is not a valid ACI restart policy.",
   "d": 3
  },
  {
   "id": 178,
   "t": "container-instances",
   "x": "Which storage option lets an Azure Container Instances deployment persist data beyond the container lifecycle?",
   "o": [
    "An Azure Files share mounted as a volume",
    "A managed disk attached to the group",
    "The container's writable layer",
    "A blob container mounted at runtime"
   ],
   "a": 0,
   "e": "ACI supports mounting an Azure Files share as a volume for persistent data. The writable layer is ephemeral, managed disks cannot attach to a container group, and blob containers are not natively mountable.",
   "d": 3
  },
  {
   "id": 179,
   "t": "container-apps",
   "x": "An administrator deploying microservices to Azure Container Apps wants built-in service discovery and pub/sub messaging. Which integrated component provides this?",
   "o": [
    "Helm",
    "Dapr",
    "KEDA",
    "Envoy"
   ],
   "a": 1,
   "e": "Dapr provides service invocation, state, and pub/sub for Container Apps. KEDA handles event-driven scaling, Envoy powers ingress, and Helm is not an integrated Container Apps component.",
   "d": 3
  },
  {
   "id": 180,
   "t": "container-apps",
   "x": "Several container apps must share the same virtual network boundary and Log Analytics workspace. Into what should they be deployed?",
   "o": [
    "The same revision",
    "The same Container Apps environment",
    "The same container group",
    "The same App Service plan"
   ],
   "a": 1,
   "e": "A Container Apps environment is the secure boundary that groups apps sharing a virtual network and Log Analytics workspace. Revisions are versions of one app, and container groups or App Service plans belong to other services.",
   "d": 3
  },
  {
   "id": 181,
   "t": "container-apps",
   "x": "Which two mechanisms does Azure Container Apps use to manage application versions and route traffic between them? Choose TWO.",
   "o": [
    "Scale sets with rolling upgrade policies",
    "Traffic splitting across revisions by percentage",
    "Revisions that represent immutable app versions",
    "Deployment slots swapped between staging and production",
    "Availability sets spread across fault domains"
   ],
   "a": 1,
   "e": "Container Apps uses immutable revisions and can split traffic across them by percentage. Deployment slots, availability sets, and scale sets belong to App Service and VM services, not Container Apps.",
   "d": 3,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 182,
   "t": "container-scaling",
   "x": "An administrator wants an Azure Container App to run no instances when idle and add replicas as incoming requests arrive. Which scale configuration meets the requirement?",
   "o": [
    "A minimum replica count of 1 with an HTTP scale rule",
    "A minimum replica count of 1 with a CPU scale rule",
    "A minimum replica count of 0 with a CPU scale rule",
    "A minimum replica count of 0 with an HTTP scale rule"
   ],
   "a": 3,
   "e": "Idle shutdown requires a minimum replica count of 0 together with an HTTP or event-driven scale rule that adds replicas as requests arrive. CPU and memory scale rules cannot take a Container App down to no instances even when the minimum is set to 0, and any minimum of 1 keeps a replica running while idle.",
   "d": 3
  },
  {
   "id": 183,
   "t": "container-scaling",
   "x": "Which scaling engine underpins the event-driven scale rules in Azure Container Apps?",
   "o": [
    "The Horizontal Pod Autoscaler alone",
    "Azure Monitor autoscale",
    "KEDA",
    "Dapr"
   ],
   "a": 2,
   "e": "Container Apps uses KEDA to evaluate event-driven scale rules such as queue length. Dapr handles microservice concerns, and Azure Monitor autoscale drives VM and App Service scaling instead.",
   "d": 3
  },
  {
   "id": 184,
   "t": "container-scaling",
   "x": "A container app must add replicas based on the number of messages waiting in an Azure Service Bus queue. Which scale rule type should the administrator configure?",
   "o": [
    "A schedule-based rule",
    "A CPU utilization rule",
    "An HTTP concurrency rule",
    "A custom KEDA scaler for the queue"
   ],
   "a": 3,
   "e": "A custom KEDA scaler can watch Service Bus queue length and scale on it. HTTP and CPU rules react to request load or processor use, not queue depth.",
   "d": 3
  },
  {
   "id": 185,
   "t": "appservice-plan",
   "x": "An administrator must run an App Service in a fully isolated, single-tenant environment with dedicated compute. Which pricing tier is required?",
   "o": [
    "Standard",
    "Basic",
    "Isolated v2",
    "Premium v3"
   ],
   "a": 2,
   "e": "The Isolated v2 tier runs apps in an App Service Environment on dedicated, single-tenant compute. Premium v3 and lower tiers run on shared multi-tenant infrastructure.",
   "d": 3
  },
  {
   "id": 186,
   "t": "appservice-plan",
   "x": "Two web apps in the same App Service plan are competing for CPU. Without changing the tier, how can an administrator give one app more resources?",
   "o": [
    "Move the app to a separate App Service plan",
    "Switch the app to a consumption plan",
    "Add a deployment slot to the app",
    "Enable Always On for the busier app"
   ],
   "a": 0,
   "e": "Apps in one plan share its compute, so moving an app to a separate plan isolates its resources. Always On and slots do not change how the shared plan's CPU is divided.",
   "d": 3
  },
  {
   "id": 187,
   "t": "appservice-plan",
   "x": "Which two features require at least the Standard App Service plan tier? Choose TWO.",
   "o": [
    "Scheduled site backups",
    "Mapping a custom domain name",
    "Serving the app over HTTPS",
    "Automatic horizontal scaling by metrics",
    "Deploying the app from a Git repository"
   ],
   "a": 0,
   "e": "Autoscale and scheduled backups both begin at the Standard tier. HTTPS is available on every tier, custom domains start at Basic, and Git deployment works on all tiers.",
   "d": 3,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 188,
   "t": "appservice-plan",
   "x": "A Free tier App Service plan is hosting a test site. Which limitation applies to that tier?",
   "o": [
    "The app can schedule daily backups",
    "The app supports autoscale up to two instances",
    "The app is limited to three deployment slots",
    "The app cannot use a custom domain name"
   ],
   "a": 3,
   "e": "The Free tier runs on shared infrastructure and supports no custom domains, no slots, no autoscale, and no backups. Those capabilities require Basic or Standard tiers and above.",
   "d": 3
  },
  {
   "id": 189,
   "t": "appservice-scaling",
   "x": "An administrator wants an App Service to add instances automatically when average CPU exceeds 70 percent. What should they configure?",
   "o": [
    "The Always On setting on the app",
    "A larger pricing tier for the plan",
    "An autoscale rule with a CPU metric threshold",
    "A deployment slot for overflow traffic"
   ],
   "a": 2,
   "e": "An autoscale rule triggered by a CPU metric threshold scales the plan out by adding instances. Changing the tier is scaling up, and Always On and slots do not react to load.",
   "d": 3
  },
  {
   "id": 190,
   "t": "appservice-scaling",
   "x": "What distinguishes scaling up from scaling out an App Service plan?",
   "o": [
    "Scaling up changes the tier while scaling out adds instances",
    "Scaling up adds instances while scaling out changes the tier",
    "Both actions move the plan to a larger region",
    "Both actions increase the number of running instances"
   ],
   "a": 0,
   "e": "Scaling up moves to a larger pricing tier with more CPU and memory, while scaling out adds more instances of the current tier. The two operations address different bottlenecks.",
   "d": 3
  },
  {
   "id": 191,
   "t": "appservice-scaling",
   "x": "An administrator needs extra App Service instances to run only during weekday business hours. Which autoscale configuration achieves this?",
   "o": [
    "A single default rule with no schedule",
    "A larger plan tier applied each morning",
    "A manual scale set to the maximum instances",
    "A recurrence profile with a fixed instance count"
   ],
   "a": 3,
   "e": "A scheduled recurrence profile sets a specific instance count during defined hours and reverts afterward. A default rule ignores time, and manual scaling does not follow a schedule.",
   "d": 3
  },
  {
   "id": 192,
   "t": "appservice-create",
   "x": "An administrator is creating a Linux App Service to host a prebuilt container image. Which publish option should they select?",
   "o": [
    "Function app",
    "Static content",
    "Code",
    "Docker Container"
   ],
   "a": 3,
   "e": "Choosing the Docker Container publish option lets App Service pull and run a container image. The Code option deploys application source directly, and a function app is a separate resource type.",
   "d": 3
  },
  {
   "id": 193,
   "t": "appservice-create",
   "x": "Which Azure CLI command creates a new web app inside an existing App Service plan?",
   "o": [
    "az webapp create",
    "az webapp restart",
    "az webapp config set",
    "az appservice plan create"
   ],
   "a": 0,
   "e": "az webapp create provisions a web app inside a named plan and resource group. az appservice plan create makes the hosting plan, config set changes settings, and restart cycles an existing app.",
   "d": 3
  },
  {
   "id": 194,
   "t": "appservice-create",
   "x": "When you create an App Service, which two properties are fixed and cannot be changed afterward? Choose TWO.",
   "o": [
    "The number of scaled-out instances",
    "The operating system, Windows or Linux",
    "The runtime stack version",
    "The pricing tier of the plan",
    "The name that forms the default hostname"
   ],
   "a": 1,
   "e": "An app's operating system and its name, which forms the azurewebsites.net hostname, are set at creation and cannot change later. Tier, runtime version, and instance count can all be adjusted afterward.",
   "d": 3,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 195,
   "t": "appservice-tls-certs",
   "x": "An administrator needs a free, auto-renewing TLS certificate for a custom domain on an App Service. Which option should they choose?",
   "o": [
    "An App Service certificate purchased in Azure",
    "An uploaded PFX certificate",
    "A self-signed certificate",
    "An App Service managed certificate"
   ],
   "a": 3,
   "e": "The App Service managed certificate is free and renews automatically for a validated custom domain. Uploaded PFX and purchased certificates involve cost or manual steps, and self-signed certs are untrusted.",
   "d": 3
  },
  {
   "id": 196,
   "t": "appservice-tls-certs",
   "x": "Which TLS binding type lets multiple App Service custom domains share one IP address using the requested hostname?",
   "o": [
    "End-to-end SSL",
    "SNI SSL",
    "Mutual TLS",
    "IP-based SSL"
   ],
   "a": 1,
   "e": "SNI SSL uses Server Name Indication so many hostnames share a single IP. IP-based SSL reserves a dedicated IP per certificate, and mutual TLS concerns client authentication.",
   "d": 3
  },
  {
   "id": 197,
   "t": "appservice-tls-certs",
   "x": "An administrator stored a certificate in Azure Key Vault. How can App Service use it for a TLS binding?",
   "o": [
    "Import the certificate from Key Vault into the app",
    "Copy the private key into the app settings",
    "Enable an admin account on the vault",
    "Mount the vault as a file share"
   ],
   "a": 0,
   "e": "App Service can import a certificate directly from Key Vault and then create a binding. Pasting private keys into app settings or mounting the vault as a share are not supported approaches.",
   "d": 3
  },
  {
   "id": 198,
   "t": "appservice-tls-certs",
   "x": "Which two actions help enforce encrypted traffic to an App Service? Choose TWO.",
   "o": [
    "Disable the default azurewebsites.net hostname",
    "Set the minimum TLS version to 1.2",
    "Enable the HTTPS Only setting on the app",
    "Remove the SNI SSL binding from the domain",
    "Turn off the Always On feature"
   ],
   "a": 1,
   "e": "HTTPS Only redirects plain HTTP to HTTPS, and raising the minimum TLS version blocks weak protocols. Removing bindings or the default hostname would break access rather than secure it.",
   "d": 3,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 199,
   "t": "appservice-custom-dns",
   "x": "An administrator maps www.contoso.com to an App Service. Which DNS record type points the subdomain at the app's default azurewebsites.net hostname?",
   "o": [
    "An A record",
    "A TXT record",
    "A CNAME record",
    "An NS record"
   ],
   "a": 2,
   "e": "A CNAME record maps one DNS name to another, pointing www.contoso.com at the app's azurewebsites.net hostname. An A record resolves a name to an IP address rather than another hostname, while TXT records hold text values and NS records delegate a zone.",
   "d": 3
  },
  {
   "id": 200,
   "t": "appservice-custom-dns",
   "x": "App Service requires proof of domain control before binding a custom name. Which record provides that ownership verification?",
   "o": [
    "A CAA record",
    "A PTR record",
    "A TXT record",
    "An A record"
   ],
   "a": 2,
   "e": "App Service checks for a TXT record at asuid.<subdomain> holding the domain verification ID, which proves control of the name. An A record maps the name to an IP for routing but does not prove ownership, PTR serves reverse DNS, and CAA only restricts which certificate authorities may issue for the domain.",
   "d": 3
  },
  {
   "id": 201,
   "t": "appservice-custom-dns",
   "x": "An administrator must map the apex domain contoso.com, which cannot use a CNAME, to an App Service. Which record type points it to the app?",
   "o": [
    "An MX record referencing the app hostname",
    "An A record referencing the app's inbound IP address",
    "A CNAME record referencing the app hostname",
    "An NS record referencing the app hostname"
   ],
   "a": 1,
   "e": "Because apex domains cannot use CNAME records, an A record pointing to the App Service inbound IP is used together with a TXT verification record. CNAME, MX, and NS records do not map an apex to the app.",
   "d": 3
  },
  {
   "id": 202,
   "t": "appservice-backup",
   "x": "Scheduled backup for an App Service is missing from the portal. Which is the most likely cause?",
   "o": [
    "The app has HTTPS Only disabled",
    "The app runs on a tier below Standard",
    "The app is missing a managed identity",
    "The app has no deployment slots configured"
   ],
   "a": 1,
   "e": "The Backup feature requires Standard, Premium, or Isolated tiers, so a lower tier hides it. Slots, managed identity, and HTTPS Only are unrelated to backup availability.",
   "d": 3
  },
  {
   "id": 203,
   "t": "appservice-backup",
   "x": "Where does the App Service Backup feature write its backup files?",
   "o": [
    "In an Azure Storage account container",
    "In an Azure Recovery Services vault",
    "In the app's local scratch storage",
    "In an Azure Files premium share only"
   ],
   "a": 0,
   "e": "App Service backups are written to a container in an Azure Storage account you specify. Recovery Services vaults protect VMs and other workloads, not App Service sites in this way.",
   "d": 3
  },
  {
   "id": 204,
   "t": "appservice-backup",
   "x": "Which two items can be included in a custom App Service backup? Choose TWO.",
   "o": [
    "The App Service plan definition",
    "The underlying virtual machine image",
    "The regional network security groups",
    "The app content and configuration",
    "A linked Azure SQL or MySQL database"
   ],
   "a": 3,
   "e": "A custom backup can capture the app content and configuration plus a connected Azure SQL or MySQL database. The host VM, plan definition, and network security groups are not part of an app backup.",
   "d": 3,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 205,
   "t": "appservice-networking",
   "x": "An administrator needs an App Service to reach resources inside a virtual network over their private IPs for outbound calls. Which feature should they enable?",
   "o": [
    "A public IP on the app",
    "A private endpoint on the app",
    "Regional VNet integration",
    "A service endpoint on the subnet"
   ],
   "a": 2,
   "e": "Regional VNet integration routes an app's outbound traffic into a delegated subnet to reach private resources. A private endpoint provides inbound private access, which solves the opposite direction.",
   "d": 3
  },
  {
   "id": 206,
   "t": "appservice-networking",
   "x": "A security policy forbids any public inbound access to a web app; clients must connect through an internal address only. Which feature accomplishes this?",
   "o": [
    "An access restriction allow rule",
    "Regional VNet integration",
    "A private endpoint for the app",
    "A hybrid connection"
   ],
   "a": 2,
   "e": "A private endpoint gives the app a private IP in the VNet and removes public inbound access. VNet integration handles outbound calls, and hybrid connections tunnel to specific hosts.",
   "d": 3
  },
  {
   "id": 207,
   "t": "appservice-networking",
   "x": "Which two methods can restrict which clients are able to reach an App Service? Choose TWO.",
   "o": [
    "Increasing the minimum TLS version",
    "Enabling Always On for the app",
    "A private endpoint that removes public access",
    "Access restriction rules based on IP ranges",
    "Adding a second deployment slot"
   ],
   "a": 2,
   "e": "IP-based access restriction rules and private endpoints both control which clients can reach the app. Always On, slots, and TLS version affect availability and encryption, not source filtering.",
   "d": 3,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 208,
   "t": "appservice-deployment-slots",
   "x": "An administrator wants to deploy to a staging slot, validate it, then move it to production with no downtime. Which operation should they use?",
   "o": [
    "A slot swap between staging and production",
    "A redeploy directly to production",
    "A scale-out of the production slot",
    "A restart of the production slot"
   ],
   "a": 0,
   "e": "A slot swap exchanges staging and production after warm-up, giving a zero-downtime release. Scaling, restarting, or deploying straight to production do not provide the same safe cutover.",
   "d": 3
  },
  {
   "id": 209,
   "t": "appservice-deployment-slots",
   "x": "Deployment slots are unavailable on an App Service. Which change makes them available?",
   "o": [
    "Assign a managed identity to the app",
    "Add a custom domain to the app",
    "Enable Always On for the app",
    "Move the plan to at least the Standard tier"
   ],
   "a": 3,
   "e": "Deployment slots require Standard or higher, with Standard allowing five slots and Premium up to twenty. Always On, managed identity, and custom domains do not unlock slots.",
   "d": 3
  },
  {
   "id": 210,
   "t": "appservice-deployment-slots",
   "x": "Which two behaviors describe how deployment slot configuration is handled during a swap? Choose TWO.",
   "o": [
    "Slots are forced to share one identical configuration set",
    "Slot settings marked as sticky remain with their slot on swap",
    "Unmarked application settings swap along with the app content",
    "A completed swap automatically deletes the source slot",
    "Every configuration value is always sticky to its own slot"
   ],
   "a": 1,
   "e": "Configuration marked as a slot setting is sticky and stays with its slot, while unmarked settings swap along with the content. Slots keep independent configuration and are not deleted by a swap.",
   "d": 3,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 211,
   "t": "vnet-subnets",
   "x": "When an administrator creates a subnet in an Azure virtual network, how many IP addresses does Azure reserve and make unavailable for resources?",
   "o": [
    "Two",
    "Three",
    "Five",
    "One"
   ],
   "a": 2,
   "e": "Azure reserves five addresses in every subnet: the network address, the default gateway, two for Azure DNS mapping, and the broadcast address, so a /24 yields 251 usable addresses.",
   "d": 4
  },
  {
   "id": 212,
   "t": "vnet-subnets",
   "x": "An administrator wants to define the smallest possible IPv4 subnet in an Azure virtual network. Which CIDR prefix length should be used?",
   "o": [
    "/29",
    "/32",
    "/30",
    "/24"
   ],
   "a": 0,
   "e": "The smallest supported IPv4 subnet is /29, which provides three usable addresses after Azure reserves five. Prefixes such as /30 and /32 cannot be created as Azure subnets.",
   "d": 4
  },
  {
   "id": 213,
   "t": "vnet-subnets",
   "x": "An administrator is preparing a virtual network for a VPN gateway. What must the dedicated subnet holding the gateway be named?",
   "o": [
    "GatewaySubnet",
    "GatewaySubnet01",
    "VpnGatewaySubnet",
    "AzureGatewaySubnet"
   ],
   "a": 0,
   "e": "A VPN or ExpressRoute gateway requires a subnet named exactly GatewaySubnet. Azure uses this reserved name to place the gateway, and a /27 or larger range is recommended.",
   "d": 4
  },
  {
   "id": 214,
   "t": "vnet-subnets",
   "x": "An administrator tries to add a subnet whose range overlaps an existing subnet in the same virtual network. What happens?",
   "o": [
    "Azure automatically shrinks the older subnet to fit",
    "The newer subnet silently replaces the older subnet",
    "Both subnets simply share the overlapping addresses",
    "The operation is rejected; subnet ranges cannot overlap"
   ],
   "a": 3,
   "e": "Subnet address ranges within a virtual network must be unique and cannot overlap. Azure rejects any subnet whose CIDR range conflicts with an existing subnet.",
   "d": 4
  },
  {
   "id": 215,
   "t": "vnet-subnets",
   "x": "Which two configurations can an administrator apply directly to a subnet in an Azure virtual network? Choose TWO.",
   "o": [
    "A DNS zone record set",
    "A network security group association",
    "A storage account access tier",
    "A delegation to an Azure service",
    "A load balancer SKU assignment"
   ],
   "a": 1,
   "e": "Subnets support NSG associations and delegation to services such as Azure SQL Managed Instance. Load balancer SKUs, storage access tiers, and DNS record sets are not subnet-level settings.",
   "d": 4,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 216,
   "t": "vnet-peering",
   "x": "VNet A is peered with hub VNet B, and VNet B is peered with VNet C. Why can resources in VNet A not reach VNet C by default?",
   "o": [
    "The address spaces are automatically merged",
    "Peering allows only one connection per VNet",
    "Global peering blocks all multi-hop traffic",
    "Virtual network peering is not transitive"
   ],
   "a": 3,
   "e": "Peering is non-transitive, so A and C cannot communicate through B unless a gateway or an NVA with user-defined routes forwards the traffic in the hub.",
   "d": 4
  },
  {
   "id": 217,
   "t": "vnet-peering",
   "x": "An administrator needs to connect two virtual networks that reside in different Azure regions using peering. Which capability makes this possible?",
   "o": [
    "Local virtual network peering",
    "Global virtual network peering",
    "Cross-region service endpoints",
    "A VNet-to-VNet VPN only"
   ],
   "a": 1,
   "e": "Global VNet peering connects virtual networks across different regions over the Microsoft backbone. Regional peering only joins VNets in the same region.",
   "d": 4
  },
  {
   "id": 218,
   "t": "vnet-peering",
   "x": "Peering between two virtual networks fails to create. Which condition most likely prevents it from succeeding?",
   "o": [
    "Each virtual network has a network security group",
    "The virtual networks are in the same subscription",
    "The virtual networks have overlapping address spaces",
    "Both virtual networks use Standard SKU public IPs"
   ],
   "a": 2,
   "e": "Peered virtual networks must have non-overlapping IP address spaces. NSGs, a shared subscription, and Standard public IPs do not block peering.",
   "d": 4
  },
  {
   "id": 219,
   "t": "vnet-peering",
   "x": "In a hub-and-spoke topology, which two peering settings let spoke virtual networks use a VPN gateway located in the hub? Choose TWO.",
   "o": [
    "Allow gateway transit on the hub peering",
    "Enable BGP on every spoke subnet",
    "Use remote gateways on the spoke peering",
    "Disable the gateway in the hub network",
    "Allow forwarded traffic on the spoke only"
   ],
   "a": 0,
   "e": "The hub peering enables Allow gateway transit and each spoke peering enables Use remote gateways, so spokes reach on-premises through the hub gateway without deploying their own.",
   "d": 4,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 220,
   "t": "public-ip",
   "x": "An administrator assigns a Standard SKU public IP address to a VM network interface. What is the default inbound access behavior?",
   "o": [
    "Inbound traffic is allowed only for the first 24 hours",
    "Inbound RDP and SSH are automatically opened for you",
    "Inbound traffic is blocked until an NSG rule allows it",
    "Inbound traffic is permitted from any internet source"
   ],
   "a": 2,
   "e": "Standard SKU public IPs are secure by default and require an NSG rule to permit inbound traffic. The retired Basic SKU was open by default.",
   "d": 4
  },
  {
   "id": 221,
   "t": "public-ip",
   "x": "Which allocation method is used for a Standard SKU public IP address in Azure?",
   "o": [
    "Either static or dynamic, chosen at creation",
    "Dynamic that converts to static after assignment",
    "Dynamic allocation only",
    "Static allocation only"
   ],
   "a": 3,
   "e": "Standard SKU public IP addresses always use static allocation, so the address does not change. Only the legacy Basic SKU offered a dynamic option.",
   "d": 4
  },
  {
   "id": 222,
   "t": "public-ip",
   "x": "An administrator adds a public IP to a Standard load balancer frontend. Which requirement must the public IP meet?",
   "o": [
    "It must use dynamic allocation",
    "It must be a Basic SKU public IP",
    "It must also be a Standard SKU public IP",
    "It must be in a different region than the load balancer"
   ],
   "a": 2,
   "e": "The public IP SKU must match the load balancer SKU, so a Standard load balancer requires a Standard public IP. Mismatched SKUs are not permitted.",
   "d": 4
  },
  {
   "id": 223,
   "t": "user-defined-routes",
   "x": "An administrator wants subnet traffic to flow through a network virtual appliance firewall. Which next hop type should the user-defined route specify?",
   "o": [
    "None",
    "Internet",
    "Virtual network gateway",
    "Virtual appliance"
   ],
   "a": 3,
   "e": "A route with next hop type Virtual appliance forwards traffic to the appliance's private IP. The NVA must also have IP forwarding enabled to pass the packets.",
   "d": 4
  },
  {
   "id": 224,
   "t": "user-defined-routes",
   "x": "When Azure selects a route for outbound traffic on a matching prefix, which type takes precedence over system routes and BGP routes?",
   "o": [
    "BGP-learned routes",
    "Service endpoint routes",
    "System routes",
    "User-defined routes"
   ],
   "a": 3,
   "e": "For matching prefixes Azure prefers user-defined routes, then BGP routes, then system routes. Longest prefix match is evaluated first across all sources.",
   "d": 4
  },
  {
   "id": 225,
   "t": "user-defined-routes",
   "x": "An administrator creates a user-defined route for a destination prefix and sets the next hop to None. What is the effect on matching traffic?",
   "o": [
    "The traffic is load balanced",
    "The traffic is mirrored to Network Watcher",
    "The traffic is dropped",
    "The traffic is sent to the internet"
   ],
   "a": 2,
   "e": "A next hop of None causes Azure to drop traffic matching that route's prefix, which is useful for blackholing specific destinations.",
   "d": 4
  },
  {
   "id": 226,
   "t": "user-defined-routes",
   "x": "An administrator forces all internet-bound traffic from a subnet through an NVA. Which two elements are required for this to work? Choose TWO.",
   "o": [
    "A public IP prefix assigned to the whole subnet",
    "A service endpoint for Microsoft.Network on the subnet",
    "A 0.0.0.0/0 user-defined route with next hop Virtual appliance",
    "IP forwarding enabled on the NVA network interface",
    "Gateway transit enabled on the subnet peering"
   ],
   "a": 2,
   "e": "Forcing egress through an NVA needs a 0.0.0.0/0 route pointing at the appliance and IP forwarding enabled on the appliance's NIC so it can relay traffic it does not own.",
   "d": 4,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 227,
   "t": "nsg-asg",
   "x": "Two NSG security rules could match the same packet. Which rule does Azure apply based on the priority values?",
   "o": [
    "The rule that was created most recently",
    "The rule with the higher priority number",
    "The rule with the lower priority number",
    "The rule listed last alphabetically"
   ],
   "a": 2,
   "e": "NSG rules are processed in priority order from the lowest number to the highest, and the first match wins. Valid custom priorities range from 100 to 4096.",
   "d": 4
  },
  {
   "id": 228,
   "t": "nsg-asg",
   "x": "How does an application security group simplify NSG rule management for an administrator?",
   "o": [
    "It assigns static public IP addresses to grouped machines",
    "It automatically opens every port on the grouped machines",
    "It removes the need for a network security group entirely",
    "Rules can reference a named group of NICs instead of IP lists"
   ],
   "a": 3,
   "e": "An ASG groups network interfaces so NSG rules can use the ASG as source or destination, removing the need to maintain IP address lists as VMs scale.",
   "d": 4
  },
  {
   "id": 229,
   "t": "nsg-asg",
   "x": "A single network security group can be associated to which of the following scopes?",
   "o": [
    "A subnet or a network interface",
    "A virtual network or a region",
    "A resource group or a subscription",
    "A storage account or a NIC"
   ],
   "a": 0,
   "e": "NSGs attach to subnets and to individual network interfaces. When both are present, a packet must be allowed by both to reach the VM.",
   "d": 4
  },
  {
   "id": 230,
   "t": "nsg-asg",
   "x": "Which default NSG rule blocks inbound traffic that no higher-priority rule has explicitly allowed?",
   "o": [
    "DenyVNetOutBound",
    "DenyAllInBound",
    "AllowAzureLoadBalancerInBound",
    "AllowVNetInBound"
   ],
   "a": 1,
   "e": "The lowest-priority default inbound rule, DenyAllInBound at priority 65500, blocks any inbound traffic not permitted by an earlier custom or default rule.",
   "d": 4
  },
  {
   "id": 231,
   "t": "nsg-asg",
   "x": "Which two statements about NSG rules and application security groups are correct? Choose TWO.",
   "o": [
    "An ASG can span network interfaces across two regions",
    "NSG user rule priorities may be any value up to 65000",
    "A single NSG rule can specify at most one port number",
    "Service tags such as VirtualNetwork work as a rule endpoint",
    "All NICs in one ASG must be in the same virtual network"
   ],
   "a": 3,
   "e": "Service tags can be used as rule endpoints, and all NICs in an ASG must share one virtual network. User rule priorities top out at 4096, rules can list many ports, and ASGs cannot span regions.",
   "d": 4,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 232,
   "t": "nsg-effective-rules",
   "x": "A VM subnet NSG allows port 443, but the NIC NSG has no allow rule for 443. Can inbound HTTPS reach the VM?",
   "o": [
    "No, subnet NSGs deny all inbound traffic by default",
    "No, both the subnet and NIC NSGs must permit the traffic",
    "Yes, the subnet NSG rule overrides the NIC NSG here",
    "Yes, NIC NSGs only ever affect outbound traffic flows"
   ],
   "a": 1,
   "e": "When NSGs exist on both the subnet and the NIC, inbound traffic must be permitted by both. The NIC NSG's implicit deny blocks the connection here.",
   "d": 4
  },
  {
   "id": 233,
   "t": "nsg-effective-rules",
   "x": "Which feature shows the combined, evaluated NSG rules that actually apply to a running VM network interface?",
   "o": [
    "Route table export",
    "Connection troubleshoot",
    "Effective security rules",
    "Service tag discovery"
   ],
   "a": 2,
   "e": "The effective security rules view aggregates subnet and NIC NSG rules into the list Azure actually enforces. The VM must be running to compute them.",
   "d": 4
  },
  {
   "id": 234,
   "t": "nsg-effective-rules",
   "x": "An administrator opens the effective security rules view but sees no results. What is the most likely cause?",
   "o": [
    "The network security group has under five rules",
    "The subnet has no route table associated with it",
    "The virtual machine is stopped or deallocated",
    "The attached public IP is a legacy Basic SKU"
   ],
   "a": 2,
   "e": "Effective rules are calculated from the running VM's network interface, so a stopped or deallocated VM returns no effective rule data.",
   "d": 4
  },
  {
   "id": 235,
   "t": "nsg-effective-rules",
   "x": "Which two facts about evaluating effective NSG rules are correct? Choose TWO.",
   "o": [
    "Effective rules are shown even when the VM is deallocated",
    "The NIC NSG only affects traffic within the same subnet",
    "Effective rules ignore any NSG attached to the subnet",
    "Inbound traffic hits the subnet NSG before the NIC NSG",
    "IP flow verify can test whether a specific flow is allowed"
   ],
   "a": 3,
   "e": "Inbound packets pass the subnet NSG then the NIC NSG, and IP flow verify tests a specific 5-tuple. Effective rules include the subnet NSG and require the VM to be running.",
   "d": 4,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 236,
   "t": "azure-bastion",
   "x": "How does Azure Bastion let an administrator connect to a virtual machine over RDP or SSH?",
   "o": [
    "Through an always-on site-to-site VPN tunnel connection",
    "Over TLS from the Azure portal with no public IP on the VM",
    "By assigning a short-lived public IP to the target VM",
    "By opening RDP port 3389 to the internet on the VM"
   ],
   "a": 1,
   "e": "Bastion brokers RDP and SSH over TLS from the portal, so the target VM needs no public IP and its NSG need not expose 3389 or 22 to the internet.",
   "d": 4
  },
  {
   "id": 237,
   "t": "azure-bastion",
   "x": "Azure Bastion requires a dedicated subnet in the virtual network. What must that subnet be named and sized?",
   "o": [
    "BastionSubnet, /29 or larger",
    "AzureBastionSubnet, /26 or larger",
    "AzureBastionSubnet, /30 or larger",
    "GatewaySubnet, /27 or larger"
   ],
   "a": 1,
   "e": "Bastion deploys into a subnet named exactly AzureBastionSubnet that must be /26 or larger. A different name or a smaller range is rejected.",
   "d": 4
  },
  {
   "id": 238,
   "t": "azure-bastion",
   "x": "An administrator wants to connect to VMs through Bastion using the native Windows RDP client instead of the browser. Which Bastion SKU is required?",
   "o": [
    "Developer",
    "Consumption",
    "Standard",
    "Basic"
   ],
   "a": 2,
   "e": "The native client and IP-based connections require the Standard SKU. The Basic and Developer SKUs support only browser-based sessions.",
   "d": 4
  },
  {
   "id": 239,
   "t": "service-endpoints",
   "x": "An administrator enables a service endpoint for Microsoft.Storage on a subnet. What happens to the source address of virtual machine traffic reaching the storage account?",
   "o": [
    "It changes from the private IP to a Microsoft-owned public IP",
    "It is replaced by the storage account's private endpoint IP",
    "It is masked behind a NAT gateway attached to the subnet",
    "It changes from the public IP to the subnet's private IP address"
   ],
   "a": 3,
   "e": "A service endpoint moves traffic onto the Azure backbone and presents the VM's private IP as the source, so the storage firewall can allow that specific subnet. No private endpoint or NAT translation is involved.",
   "d": 4
  },
  {
   "id": 240,
   "t": "service-endpoints",
   "x": "At which scope does an administrator configure an Azure service endpoint when securing traffic to Azure SQL Database?",
   "o": [
    "On the individual network interface of each VM",
    "On the Azure SQL Database firewall only",
    "On the virtual network gateway resource",
    "On the subnet within the virtual network"
   ],
   "a": 3,
   "e": "Service endpoints are enabled per service on a subnet. They are not set on a NIC or gateway, although the target service firewall must still allow that subnet.",
   "d": 4
  },
  {
   "id": 241,
   "t": "service-endpoints",
   "x": "A team must ensure a subnet with a storage service endpoint can reach only two approved storage accounts and no others. Which feature enforces this restriction?",
   "o": [
    "A user-defined route to the storage service",
    "A network security group rule",
    "Service endpoint policies",
    "An Azure Private DNS zone"
   ],
   "a": 2,
   "e": "Service endpoint policies filter service endpoint traffic down to specific Azure Storage accounts. NSGs filter by IP or service tag but cannot pin to individual accounts, and DNS does not restrict access.",
   "d": 4
  },
  {
   "id": 242,
   "t": "service-endpoints",
   "x": "Why can on-premises hosts not benefit from a virtual network service endpoint that secures an Azure storage account?",
   "o": [
    "Service endpoints apply only to traffic originating inside the virtual network",
    "Service endpoints require the storage account to be in the client's region",
    "Service endpoints are limited to a single subnet per region",
    "Service endpoints encrypt traffic that on-premises firewalls cannot decrypt"
   ],
   "a": 0,
   "e": "A service endpoint only changes routing for VMs inside the VNet subnet, so on-premises clients over VPN or ExpressRoute still arrive through the public endpoint. A private endpoint is the option for on-premises reach.",
   "d": 4
  },
  {
   "id": 243,
   "t": "service-endpoints",
   "x": "Which statements accurately describe Azure virtual network service endpoints? Choose TWO.",
   "o": [
    "Traffic to the service travels over the Azure backbone rather than the public internet",
    "They require a dedicated gateway subnet in order to function",
    "They are billed per gigabyte of data that is processed",
    "They inject a private IP for the service into the chosen subnet",
    "The service keeps a public endpoint but can be restricted to selected subnets"
   ],
   "a": 0,
   "e": "Service endpoints keep traffic on the Microsoft backbone and let the service firewall allow specific subnets while the service still exposes a public endpoint. They add no private IP, need no gateway subnet, and carry no extra charge.",
   "d": 4,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 244,
   "t": "private-endpoints",
   "x": "An administrator creates a private endpoint for an Azure Key Vault. What does the private endpoint provision inside the selected subnet?",
   "o": [
    "A dedicated route table for the Key Vault",
    "A new service endpoint entry on that subnet",
    "A public IP mapped to the Key Vault firewall",
    "A network interface with a private IP from the subnet range"
   ],
   "a": 3,
   "e": "A private endpoint deploys a NIC that receives a private IP from the subnet, mapping the service into the VNet through Azure Private Link. No public IP is created for it.",
   "d": 4
  },
  {
   "id": 245,
   "t": "private-endpoints",
   "x": "After deploying a private endpoint for a storage account, clients still resolve the account name to its public IP. What must be configured for correct name resolution?",
   "o": [
    "A public DNS A record pointing to the private endpoint IP",
    "A Private DNS zone such as privatelink.blob.core.windows.net linked to the VNet",
    "A conditional access policy scoped to the storage account",
    "A service endpoint policy referencing the storage account"
   ],
   "a": 1,
   "e": "Private endpoints rely on a privatelink Private DNS zone linked to the VNet so the FQDN resolves to the private IP. Without it, the public CNAME chain returns the public address.",
   "d": 4
  },
  {
   "id": 246,
   "t": "private-endpoints",
   "x": "A private endpoint created against a service in another subscription shows a connection state of Pending. What is required before traffic can flow?",
   "o": [
    "The subnet must have a service endpoint enabled for the service",
    "The resource owner must approve the private endpoint connection",
    "A global VNet peering must be established first",
    "The private endpoint must move to the service's region"
   ],
   "a": 1,
   "e": "Cross-subscription private endpoints start in Pending and need manual approval by the target resource owner. Peering and service endpoints are unrelated to the approval workflow.",
   "d": 4
  },
  {
   "id": 247,
   "t": "private-endpoints",
   "x": "By default, network security group rules do not filter traffic to a subnet's private endpoints. Which setting must an administrator change to enforce NSG rules on them?",
   "o": [
    "Enable private endpoint network policies on the subnet",
    "Disable the subnet's service endpoint for Private Link",
    "Set the private endpoint to a static allocation method",
    "Attach an application security group to the endpoint NIC"
   ],
   "a": 0,
   "e": "Private endpoint network policies are off by default, which bypasses NSGs. Turning the policy on lets NSG and route rules apply to private endpoint traffic.",
   "d": 4
  },
  {
   "id": 248,
   "t": "private-endpoints",
   "x": "Which characteristics distinguish an Azure private endpoint from a service endpoint? Choose TWO.",
   "o": [
    "It removes the need for any DNS configuration at all",
    "It maps a single instance of a PaaS resource rather than a whole namespace",
    "It is enabled directly on the subnet with no additional resource",
    "It changes the source address of outbound VM traffic to a private IP",
    "It gives the service a private IP reachable from on-premises over VPN or ExpressRoute"
   ],
   "a": 1,
   "e": "A private endpoint gives a specific resource a private IP reachable from connected on-premises networks and targets one resource instance. Service endpoints instead are subnet settings that rewrite the source IP for the whole service.",
   "d": 4,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 249,
   "t": "azure-dns",
   "x": "An administrator hosts a company's public domain in an Azure public DNS zone. What must be updated at the domain registrar to make Azure authoritative?",
   "o": [
    "An A record must be added for the zone apex",
    "The registrar must enable DNSSEC for the zone",
    "A TXT record must be created to verify zone ownership",
    "The domain's name server records must point to the Azure name servers"
   ],
   "a": 3,
   "e": "Delegation requires changing the registrar's NS records to the Azure-assigned name servers so queries reach the Azure zone. A or TXT records inside the zone do not delegate authority.",
   "d": 4
  },
  {
   "id": 250,
   "t": "azure-dns",
   "x": "In an Azure Private DNS zone, which setting causes VM hostnames to be registered automatically as A records?",
   "o": [
    "Adding a conditional forwarder to the zone",
    "Enabling auto-registration on the virtual network link",
    "Creating an alias record set for each VM",
    "Linking the zone to a route table"
   ],
   "a": 1,
   "e": "A virtual network link with auto-registration writes and updates A records for VMs in that VNet. Without it, the link only provides resolution and not registration.",
   "d": 4
  },
  {
   "id": 251,
   "t": "azure-dns",
   "x": "Which Azure DNS feature lets a zone apex record reference an Azure public IP resource and update itself if that IP changes?",
   "o": [
    "An SRV record",
    "A CNAME record",
    "A secondary zone",
    "An alias record set"
   ],
   "a": 3,
   "e": "Alias records point at Azure resources such as a public IP or Traffic Manager profile and track changes automatically. A CNAME cannot be used at the apex and does not reference Azure resources directly.",
   "d": 4
  },
  {
   "id": 252,
   "t": "azure-dns",
   "x": "A Private DNS zone must resolve names for workloads spread across three separate virtual networks. What is the supported approach?",
   "o": [
    "Peer the three networks and link the zone to only one of them",
    "Add the zone as a custom DNS server on each subnet",
    "Create a virtual network link from the zone to each of the three networks",
    "Deploy a separate Private DNS zone inside every network"
   ],
   "a": 2,
   "e": "Each VNet that needs resolution must have its own virtual network link to the Private DNS zone. Peering alone does not share private zone resolution, and duplicating the zone is unnecessary.",
   "d": 4
  },
  {
   "id": 253,
   "t": "azure-dns",
   "x": "Which statements about record management in an Azure public DNS zone are correct? Choose TWO.",
   "o": [
    "The zone apex can use an alias record in place of an unsupported CNAME",
    "Every record set requires an explicit reverse lookup entry",
    "TTL values can only be set at the zone level, never per record set",
    "Records that share a name and type are grouped into one record set",
    "A single CNAME record set may hold several target host names"
   ],
   "a": 0,
   "e": "Records sharing a name and type form a record set, and alias records solve the apex CNAME restriction. TTL is set per record set, a CNAME set holds exactly one target, and reverse lookups are optional.",
   "d": 4,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 254,
   "t": "load-balancer",
   "x": "An administrator needs an Azure Load Balancer that supports availability zones and a published SLA. Which SKU meets both requirements?",
   "o": [
    "Gateway",
    "Basic",
    "Standard",
    "Classic"
   ],
   "a": 2,
   "e": "Only the Standard Load Balancer SKU offers zone redundancy and a 99.99% SLA. Basic has no SLA and no zone support, and Gateway LB serves a different appliance-insertion purpose.",
   "d": 4
  },
  {
   "id": 255,
   "t": "load-balancer",
   "x": "What is the role of a health probe attached to an Azure Load Balancer rule?",
   "o": [
    "It rewrites the destination port of every incoming packet",
    "It encrypts traffic between the frontend and the backend pool",
    "It determines which backend instances may receive new connections",
    "It assigns public IP addresses to healthy backend instances"
   ],
   "a": 2,
   "e": "Health probes test backend endpoints and remove unhealthy instances from rotation so only healthy members get new flows. They do not encrypt, assign IPs, or rewrite ports.",
   "d": 4
  },
  {
   "id": 256,
   "t": "load-balancer",
   "x": "A three-tier application must balance traffic from its web tier to an application tier that must not be reachable from the internet. Which configuration fits?",
   "o": [
    "A gateway load balancer deployed in front of the application tier",
    "An internal load balancer with a private frontend IP",
    "A public load balancer with an inbound NAT rule",
    "A NAT gateway associated with the application tier subnet"
   ],
   "a": 1,
   "e": "An internal load balancer's private frontend IP distributes web-to-application traffic entirely inside the VNet. A gateway load balancer exists to chain traffic through network virtual appliances rather than to balance an application tier, a NAT gateway handles only outbound connectivity, and a public load balancer's frontend would make the tier internet-reachable.",
   "d": 4
  },
  {
   "id": 257,
   "t": "load-balancer",
   "x": "An administrator wants to reach one specific backend VM over RDP through the load balancer's public IP on port 50001. Which feature provides this?",
   "o": [
    "A load balancing rule",
    "A health probe",
    "An inbound NAT rule",
    "An outbound rule"
   ],
   "a": 2,
   "e": "Inbound NAT rules forward a specific frontend port to one backend instance, which is how per-VM RDP or SSH access is published. Load balancing rules spread traffic across the whole pool instead.",
   "d": 4
  },
  {
   "id": 258,
   "t": "load-balancer",
   "x": "Which capabilities are available with the Standard SKU Azure Load Balancer but not the Basic SKU? Choose TWO.",
   "o": [
    "Traffic is blocked by default unless a network security group allows it",
    "Public IP addresses are auto-assigned to every backend VM",
    "TLS offload is performed for HTTPS listeners",
    "Backend pools can span multiple availability zones",
    "The frontend is limited to a single availability set"
   ],
   "a": 0,
   "e": "Standard Load Balancer is closed to inbound traffic until an NSG permits it and supports zone-spanning backend pools. TLS offload belongs to Application Gateway, and neither SKU auto-assigns public IPs to backends.",
   "d": 4,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 259,
   "t": "load-balancer",
   "x": "Which options can an administrator configure on an Azure Load Balancer to influence how individual flows are handled? Choose TWO.",
   "o": [
    "Cookie-based session affinity for HTTP requests",
    "Path-based URL routing to different backend pools",
    "Web application firewall rules on the frontend",
    "Session persistence based on source IP affinity",
    "Floating IP for direct server return scenarios"
   ],
   "a": 3,
   "e": "A Layer 4 load balancer supports source IP session persistence and Floating IP for direct server return. Path-based routing, cookie affinity, and WAF are Application Gateway features instead.",
   "d": 4,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 260,
   "t": "load-balancing-troubleshoot",
   "x": "Backend VMs behind a load balancer are all marked unhealthy even though the application works when tested locally on each VM. Which cause should be checked first?",
   "o": [
    "The frontend uses a private address instead of a public one",
    "The load balancing rule uses the wrong distribution mode",
    "The backend pool references the wrong availability zone",
    "The service is not listening on the port the health probe checks"
   ],
   "a": 3,
   "e": "If nothing answers on the probe port, every instance is judged unhealthy and pulled from rotation. Distribution mode and frontend type do not affect probe health results.",
   "d": 4
  },
  {
   "id": 261,
   "t": "load-balancing-troubleshoot",
   "x": "Health probes keep failing for a Standard Load Balancer backend pool. Which network security group rule is required for the probes to succeed?",
   "o": [
    "An outbound allow rule for the Internet service tag",
    "An outbound allow rule for the AzureLoadBalancer service tag",
    "An inbound allow rule for the AzureLoadBalancer service tag on the probe port",
    "An inbound deny rule for the VirtualNetwork service tag"
   ],
   "a": 2,
   "e": "Probes originate from the AzureLoadBalancer source and must be allowed inbound to the backend on the probe port. Standard LB blocks by default, so the explicit allow rule is required.",
   "d": 4
  },
  {
   "id": 262,
   "t": "load-balancing-troubleshoot",
   "x": "A newly deployed VM receives no traffic from the load balancer while its peers do. What is the most likely configuration gap?",
   "o": [
    "The VM's network interface was never added to the backend pool",
    "The VM has accelerated networking left disabled",
    "The load balancer SKU was recently changed to Standard",
    "The VM is missing a user-defined route to the frontend IP"
   ],
   "a": 0,
   "e": "A backend instance receives traffic only if its NIC or IP configuration is a member of the backend pool. Routes and accelerated networking do not gate pool membership.",
   "d": 4
  },
  {
   "id": 263,
   "t": "load-balancing-troubleshoot",
   "x": "Outbound connections from load-balanced VMs to an external API intermittently time out under heavy load. Which condition is the likely cause?",
   "o": [
    "The health probe interval is set far too high",
    "The frontend IP was assigned a dynamic address",
    "The backend pool has session persistence enabled",
    "SNAT port exhaustion on the load balancer's outbound path"
   ],
   "a": 3,
   "e": "Too many concurrent outbound flows can exhaust the allocated SNAT ports, so new connections fail until ports free up. Probe interval and persistence do not produce SNAT timeouts.",
   "d": 4
  },
  {
   "id": 264,
   "t": "load-balancing-troubleshoot",
   "x": "An administrator is diagnosing why load balancer backend instances report as unhealthy. Which two factors can independently cause this result? Choose TWO.",
   "o": [
    "The application on the backend has stopped responding on the probe port",
    "The load balancer is using a public frontend IP address",
    "A network security group is blocking the probe port on the backend subnet",
    "Session persistence is set to source IP affinity",
    "The backend VMs are spread across two availability zones"
   ],
   "a": 0,
   "e": "Probes fail when an NSG blocks the probe port or when the backend service is not answering there, both of which mark instances unhealthy. Public frontends, multi-zone pools, and persistence do not affect probe outcomes.",
   "d": 4,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 265,
   "t": "network-connectivity-troubleshoot",
   "x": "An administrator suspects a security rule is dropping traffic to a VM. Which Network Watcher tool confirms whether a specific packet would be allowed or denied?",
   "o": [
    "IP flow verify",
    "Topology",
    "NSG flow logs",
    "Connection monitor"
   ],
   "a": 0,
   "e": "IP flow verify evaluates NSG rules for a given source, destination, port, and protocol and reports allow or deny plus the matching rule. Flow logs record traffic after the fact rather than testing a hypothetical packet.",
   "d": 4
  },
  {
   "id": 266,
   "t": "network-connectivity-troubleshoot",
   "x": "Traffic from a VM keeps reaching the wrong next hop, and an administrator wants to see every system and custom route applied to the interface. What should be examined?",
   "o": [
    "The effective security rules on the subnet",
    "The effective routes on the VM's network interface",
    "The service tags listed in the route table",
    "The DNS settings of the virtual network"
   ],
   "a": 1,
   "e": "Effective routes show the merged result of system routes, user-defined routes, and BGP for a NIC, revealing the actual next hop. Effective security rules cover NSGs, not routing.",
   "d": 4
  },
  {
   "id": 267,
   "t": "network-connectivity-troubleshoot",
   "x": "Two virtual networks are peered, yet resources in a third peered network cannot reach each other through the hub. Which statements explain this behavior? Choose TWO.",
   "o": [
    "A Private DNS zone is required before any peered traffic can flow",
    "Peering automatically forwards traffic between all connected networks",
    "Global peering blocks all spoke-to-spoke IP connectivity",
    "VNet peering is not transitive by default",
    "Spoke-to-spoke traffic requires a routed appliance or gateway transit in the hub"
   ],
   "a": 3,
   "e": "Peering connects only the two directly peered VNets, so spoke-to-spoke traffic through a hub needs an NVA or gateway with routing. It is not transitive, but it does not inherently block traffic or require DNS.",
   "d": 4,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 268,
   "t": "network-connectivity-troubleshoot",
   "x": "An administrator must verify end-to-end reachability and latency between a VM and an external endpoint over time. Which Network Watcher capabilities apply? Choose TWO.",
   "o": [
    "IP flow verify for measuring round-trip latency",
    "NSG flow logs for changing the VM's next hop",
    "Topology for blocking unwanted traffic flows",
    "Connection troubleshoot for an on-demand path test",
    "Connection monitor for ongoing reachability and latency metrics"
   ],
   "a": 3,
   "e": "Connection monitor tracks reachability and latency continuously, while connection troubleshoot runs a one-time path check. IP flow verify only evaluates allow or deny, and topology and flow logs neither measure latency nor alter routing.",
   "d": 4,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 269,
   "t": "monitor-metrics",
   "x": "An administrator wants to view near real-time CPU utilization for a virtual machine over the last hour at one-minute granularity. Which Azure Monitor tool should they open?",
   "o": [
    "Service Health",
    "Activity log",
    "Log Analytics workspace",
    "Metrics Explorer"
   ],
   "a": 3,
   "e": "Metrics Explorer plots platform metrics such as Percentage CPU in near real-time at one-minute granularity. Log Analytics is for query-based log data, not the default numeric metric stream.",
   "d": 5
  },
  {
   "id": 270,
   "t": "monitor-metrics",
   "x": "How long does Azure Monitor retain platform metrics by default before they must be exported to persist longer?",
   "o": [
    "7 days",
    "30 days",
    "93 days",
    "365 days"
   ],
   "a": 2,
   "e": "Platform metrics are kept for 93 days by default. To retain them longer you route them to a Log Analytics workspace or storage account through a diagnostic setting.",
   "d": 5
  },
  {
   "id": 271,
   "t": "monitor-metrics",
   "x": "Which metric aggregation adds together all sampled values within the selected time granularity?",
   "o": [
    "Sum",
    "Count",
    "Average",
    "Maximum"
   ],
   "a": 0,
   "e": "The Sum aggregation totals every value in the granularity interval. Count returns the number of samples collected rather than the total of their values.",
   "d": 5
  },
  {
   "id": 272,
   "t": "monitor-metrics",
   "x": "An administrator must keep virtual machine platform metrics beyond the default retention period. Which two diagnostic setting destinations support long-term storage? Choose TWO.",
   "o": [
    "The Activity log",
    "A metric alert rule",
    "A Log Analytics workspace",
    "An action group",
    "An Azure Storage account"
   ],
   "a": 2,
   "e": "Diagnostic settings can route platform metrics to a Log Analytics workspace or a storage account for retention past 93 days. Alert rules and action groups react to metrics but do not store them.",
   "d": 5,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 273,
   "t": "monitor-log-settings",
   "x": "Resource logs from an Azure resource are not appearing in Log Analytics. What must an administrator create to begin collecting them?",
   "o": [
    "A diagnostic setting",
    "An action group",
    "A metric alert",
    "A saved log query"
   ],
   "a": 0,
   "e": "Resource logs are not collected by default. A diagnostic setting defines which log categories are emitted and to which destination, such as a Log Analytics workspace.",
   "d": 5
  },
  {
   "id": 274,
   "t": "monitor-log-settings",
   "x": "Which two destinations can a diagnostic setting stream Azure resource logs to? Choose TWO.",
   "o": [
    "An availability set",
    "An Event Hubs namespace",
    "A network security group",
    "A Log Analytics workspace",
    "A Recovery Services vault"
   ],
   "a": 1,
   "e": "Diagnostic settings support Log Analytics workspaces, storage accounts, Event Hubs, and partner solutions. NSGs, vaults, and availability sets are not log destinations.",
   "d": 5,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 275,
   "t": "monitor-log-settings",
   "x": "What is the maximum number of diagnostic settings that can be attached to a single Azure resource?",
   "o": [
    "1",
    "3",
    "5",
    "10"
   ],
   "a": 2,
   "e": "A resource supports up to five diagnostic settings, letting you fan logs out to different destinations. Going beyond five requires consolidating destinations within a setting.",
   "d": 5
  },
  {
   "id": 276,
   "t": "monitor-log-queries",
   "x": "Which KQL operator filters rows in a Log Analytics query based on a condition?",
   "o": [
    "where",
    "summarize",
    "render",
    "project"
   ],
   "a": 0,
   "e": "The where operator filters rows by a predicate. project selects columns, summarize aggregates rows, and render controls the visualization.",
   "d": 5
  },
  {
   "id": 277,
   "t": "monitor-log-queries",
   "x": "An administrator needs a grouped count of events per computer in a KQL query. Which operator produces the aggregated totals?",
   "o": [
    "distinct",
    "extend",
    "summarize",
    "sort"
   ],
   "a": 2,
   "e": "summarize with a by clause aggregates rows into groups such as count() by Computer. extend only adds calculated columns without aggregating.",
   "d": 5
  },
  {
   "id": 278,
   "t": "monitor-log-queries",
   "x": "Which KQL function returns records from a relative time window such as the trailing 24 hours?",
   "o": [
    "The format_datetime function",
    "The startofday function",
    "The ago function",
    "The datetime_add function"
   ],
   "a": 2,
   "e": "Filtering with TimeGenerated > ago(24h) selects the trailing 24-hour window. The startofday and datetime_add functions manipulate specific timestamps rather than relative ranges.",
   "d": 5
  },
  {
   "id": 279,
   "t": "monitor-log-queries",
   "x": "An administrator wants a query to output only two chosen columns and cap the result set at 100 rows. Which two operators accomplish this? Choose TWO.",
   "o": [
    "project",
    "render",
    "join",
    "parse",
    "take"
   ],
   "a": 0,
   "e": "project selects the desired columns and take limits the number of rows returned. render only affects chart output and join combines separate tables.",
   "d": 5,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 280,
   "t": "monitor-alerts",
   "x": "Which Azure Monitor component defines the notifications and actions triggered when an alert rule fires?",
   "o": [
    "Diagnostic setting",
    "Alert rule condition",
    "Metric namespace",
    "Action group"
   ],
   "a": 3,
   "e": "An action group is a reusable set of notifications and actions such as email or a webhook. The alert rule references the action group to invoke it when its condition is met.",
   "d": 5
  },
  {
   "id": 281,
   "t": "monitor-alerts",
   "x": "An administrator wants alert thresholds to adjust automatically to a metric's normal fluctuating pattern. Which threshold type should they select?",
   "o": [
    "Dynamic thresholds",
    "Manual baseline threshold",
    "Fixed percentage threshold",
    "Static threshold"
   ],
   "a": 0,
   "e": "Dynamic thresholds use machine learning to derive boundaries from the metric's historical pattern. A static threshold requires you to hard-code a single value that never adapts.",
   "d": 5
  },
  {
   "id": 282,
   "t": "monitor-alerts",
   "x": "Which Azure Monitor alert severity level represents the most critical condition?",
   "o": [
    "Sev 4",
    "Sev 0",
    "Sev 5",
    "Sev 2"
   ],
   "a": 1,
   "e": "Alert severities range from Sev 0 for critical down to Sev 4 for verbose. Sev 0 is the highest priority and there is no Sev 5.",
   "d": 5
  },
  {
   "id": 283,
   "t": "monitor-alerts",
   "x": "Which two signal types can an Azure Monitor alert rule evaluate? Choose TWO.",
   "o": [
    "An RBAC role assignment",
    "A platform metric",
    "A Log Analytics query result",
    "A virtual network peering",
    "A resource lock"
   ],
   "a": 1,
   "e": "Alert rules can evaluate metric signals or log query results, as well as activity log events. Locks, role assignments, and peerings are configuration objects, not alert signals.",
   "d": 5,
   "as": [
    1,
    2
   ]
  },
  {
   "id": 284,
   "t": "monitor-insights",
   "x": "Which Azure Monitor insight provides a dependency map and performance charts for virtual machines?",
   "o": [
    "Application Insights",
    "Network insights",
    "Storage insights",
    "VM insights"
   ],
   "a": 3,
   "e": "VM insights collects performance and process dependency data through the Azure Monitor Agent. Application Insights targets application-level telemetry, not VM guest performance.",
   "d": 5
  },
  {
   "id": 285,
   "t": "monitor-insights",
   "x": "An administrator needs to track request rates, response times, and exceptions for a web application. Which insight should they enable?",
   "o": [
    "Container insights",
    "Application Insights",
    "Network Watcher",
    "VM insights"
   ],
   "a": 1,
   "e": "Application Insights is an application performance monitoring service capturing requests, dependencies, and exceptions. VM insights measures the host machine, not the application code.",
   "d": 5
  },
  {
   "id": 286,
   "t": "monitor-insights",
   "x": "Which two Azure Monitor insights store their collected data in a Log Analytics workspace? Choose TWO.",
   "o": [
    "Container insights",
    "VM insights",
    "Azure Advisor",
    "Azure Resource Graph",
    "Azure Service Health"
   ],
   "a": 0,
   "e": "VM insights and Container insights both write performance and inventory data to a Log Analytics workspace queried with KQL. Advisor and Service Health are separate services that do not use insights workspaces.",
   "d": 5,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 287,
   "t": "network-watcher",
   "x": "An administrator must determine whether an NSG rule is allowing or blocking traffic to a VM on a given port. Which Network Watcher tool applies?",
   "o": [
    "IP flow verify",
    "Next hop",
    "Topology",
    "Packet capture"
   ],
   "a": 0,
   "e": "IP flow verify checks whether a packet is allowed or denied to a VM and names the responsible NSG rule. Next hop shows routing decisions rather than NSG allow or deny outcomes.",
   "d": 5
  },
  {
   "id": 288,
   "t": "network-watcher",
   "x": "Which Network Watcher feature reveals the routing path and gateway a packet uses when leaving a VM?",
   "o": [
    "Connection monitor",
    "Next hop",
    "Flow logs",
    "IP flow verify"
   ],
   "a": 1,
   "e": "Next hop returns the next hop type and IP for a destination, useful for diagnosing user-defined routes. IP flow verify instead evaluates NSG allow or deny for a specific packet.",
   "d": 5
  },
  {
   "id": 289,
   "t": "network-watcher",
   "x": "An administrator wants to record IP traffic through an NSG to a storage account for later analysis. Which Network Watcher capability provides this?",
   "o": [
    "NSG flow logs",
    "Effective security rules",
    "IP flow verify",
    "Connection troubleshoot"
   ],
   "a": 0,
   "e": "NSG flow logs capture ingress and egress IP traffic metadata to a storage account for traffic analytics. Effective security rules only display the aggregated rule set, not live traffic.",
   "d": 5
  },
  {
   "id": 290,
   "t": "network-watcher",
   "x": "A connection fails and the administrator suspects the network security configuration. Which two Network Watcher features reveal the effective allow or deny outcome? Choose TWO.",
   "o": [
    "Packet capture",
    "Topology",
    "IP flow verify",
    "Usage and quotas",
    "Effective security rules"
   ],
   "a": 2,
   "e": "IP flow verify tests a specific packet against NSG rules and effective security rules shows the combined rules applied to a NIC. Topology and packet capture do not evaluate allow or deny decisions.",
   "d": 5,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 291,
   "t": "recovery-services-vault",
   "x": "Which resource must exist before you can protect an Azure virtual machine with classic Azure VM backup?",
   "o": [
    "A storage account",
    "A Recovery Services vault",
    "An Azure Backup vault",
    "A Log Analytics workspace"
   ],
   "a": 1,
   "e": "Azure VM backup jobs store recovery points in a Recovery Services vault. The newer Backup vault covers workloads like Azure Disks, blobs, and PostgreSQL rather than classic VM backup.",
   "d": 5
  },
  {
   "id": 292,
   "t": "recovery-services-vault",
   "x": "Which Recovery Services vault storage redundancy option is required to enable Cross Region Restore?",
   "o": [
    "Zone-redundant storage",
    "Read-access geo-zone-redundant storage",
    "Geo-redundant storage",
    "Locally redundant storage"
   ],
   "a": 2,
   "e": "Cross Region Restore relies on geo-redundant storage, which replicates backup data to the paired secondary region. Locally and zone-redundant options keep data within the primary region only.",
   "d": 5
  },
  {
   "id": 293,
   "t": "recovery-services-vault",
   "x": "By default, how many days does Recovery Services vault soft delete retain deleted backup data at no additional cost?",
   "o": [
    "14 days",
    "7 days",
    "90 days",
    "30 days"
   ],
   "a": 0,
   "e": "Soft delete keeps deleted backup items for 14 days at no charge, allowing recovery from accidental or malicious deletion. The window can be extended but 14 days is the default.",
   "d": 5
  },
  {
   "id": 294,
   "t": "recovery-services-vault",
   "x": "Which two workloads can be protected using a Recovery Services vault? Choose TWO.",
   "o": [
    "Azure Cosmos DB accounts",
    "Azure DNS zones",
    "On-premises files and folders",
    "Azure virtual machines",
    "Azure Key Vault secrets"
   ],
   "a": 2,
   "e": "A Recovery Services vault protects Azure VMs and on-premises files and folders through the MARS agent, among others. Cosmos DB, Key Vault, and DNS zones are not Azure Backup workloads.",
   "d": 5,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 295,
   "t": "backup-vault",
   "x": "An administrator must back up Azure managed disks and Azure Blobs. Which vault type supports these newer datasources?",
   "o": [
    "Backup vault",
    "Recovery Services vault",
    "Storage account",
    "Key vault"
   ],
   "a": 0,
   "e": "The Backup vault supports newer datasources such as Azure Disks, Blobs, PostgreSQL, and AKS. The Recovery Services vault handles VMs and MARS agent backups instead.",
   "d": 5
  },
  {
   "id": 296,
   "t": "backup-vault",
   "x": "Which database service can be protected directly by an Azure Backup vault?",
   "o": [
    "Azure SQL Database",
    "Azure Cosmos DB",
    "Azure Database for PostgreSQL",
    "Azure Cache for Redis"
   ],
   "a": 2,
   "e": "The Backup vault supports Azure Database for PostgreSQL. Azure SQL Database and Cosmos DB rely on their own built-in backup and restore features rather than a Backup vault.",
   "d": 5
  },
  {
   "id": 297,
   "t": "backup-vault",
   "x": "An organization adopts the Backup vault for its modern workloads. Which two resource types can it protect? Choose TWO.",
   "o": [
    "Azure managed disks",
    "Classic cloud services",
    "Azure Traffic Manager profiles",
    "Azure Kubernetes Service clusters",
    "Azure Bastion hosts"
   ],
   "a": 0,
   "e": "Backup vault datasources include Azure Disks and AKS, along with Blobs and PostgreSQL. Traffic Manager, Bastion, and classic cloud services are not Backup vault workloads.",
   "d": 5,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 298,
   "t": "backup-policy",
   "x": "Which Azure VM backup policy type is required to protect a Trusted Launch VM and allows multiple backups per day?",
   "o": [
    "Legacy policy",
    "Basic policy",
    "Enhanced policy",
    "Standard policy"
   ],
   "a": 2,
   "e": "The Enhanced backup policy supports hourly backups and Trusted Launch VMs. The Standard policy allows only one scheduled backup per day and does not cover Trusted Launch machines.",
   "d": 5
  },
  {
   "id": 299,
   "t": "backup-policy",
   "x": "A virtual machine backup policy defines which two aspects of the backup lifecycle? Choose TWO.",
   "o": [
    "The NSG rules for the VM",
    "The backup schedule frequency",
    "The vault storage redundancy",
    "The VM availability zone",
    "The recovery point retention range"
   ],
   "a": 1,
   "e": "A backup policy specifies when backups run and how long recovery points are retained. Storage redundancy is a vault property, while NSG rules and zones are unrelated to the policy.",
   "d": 5,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 300,
   "t": "backup-policy",
   "x": "An administrator wants VM snapshots kept for fast local restore for five days. Which backup policy setting should they change?",
   "o": [
    "Yearly retention point count",
    "Soft delete duration",
    "Weekly backup frequency",
    "Instant restore snapshot retention"
   ],
   "a": 3,
   "e": "Instant restore keeps local snapshots for one to five days for quick restores before data transfers to the vault. Yearly retention governs long-term vault recovery points instead.",
   "d": 5
  },
  {
   "id": 301,
   "t": "azure-backup-restore",
   "x": "An Azure VM is healthy and must stay untouched, but an administrator needs two configuration files from last night's recovery point. Which restore option should be used?",
   "o": [
    "Restore disks",
    "File recovery",
    "Create a new VM",
    "Replace existing disks"
   ],
   "a": 1,
   "e": "File recovery mounts the selected recovery point as a local drive so individual items can be copied off without altering the VM. Restore disks and Create a new VM provision full disk or machine resources just to reach two items, and Replace existing disks would overwrite the healthy VM's current disks.",
   "d": 5
  },
  {
   "id": 302,
   "t": "azure-backup-restore",
   "x": "During an Azure VM restore, which option provisions a brand-new virtual machine from the recovery point?",
   "o": [
    "Replace existing",
    "Create new VM",
    "Restore disks only",
    "File-level recovery"
   ],
   "a": 1,
   "e": "The Create new VM option builds a fresh VM from the selected recovery point. Replace existing overwrites the source VM disks and file-level recovery copies individual files.",
   "d": 5
  },
  {
   "id": 303,
   "t": "azure-backup-restore",
   "x": "Which Recovery Services vault feature restores a VM into the paired secondary region during a primary outage without performing a failover?",
   "o": [
    "Zone-redundant restore",
    "Cross Region Restore",
    "Instant restore",
    "Soft delete recovery"
   ],
   "a": 1,
   "e": "Cross Region Restore uses the geo-redundant secondary copy to restore into the paired region on demand. Instant restore relies on local snapshots in the primary region only.",
   "d": 5
  },
  {
   "id": 304,
   "t": "azure-backup-restore",
   "x": "An administrator is restoring an Azure VM from a recovery point. Which two restore options does Azure Backup provide? Choose TWO.",
   "o": [
    "Create a new VM",
    "Merge two recovery points into one",
    "Convert the VM to a scale set",
    "Replace existing VM disks",
    "Redeploy the VM to another subscription"
   ],
   "a": 0,
   "e": "Azure Backup can replace an existing VM's disks or create a new VM from a recovery point. It cannot convert a VM to a scale set or merge recovery points as a restore action.",
   "d": 5,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 305,
   "t": "site-recovery-configure",
   "x": "Which Azure service orchestrates replication and failover of VMs to a secondary region for disaster recovery?",
   "o": [
    "Azure Migrate",
    "Azure Traffic Manager",
    "Azure Site Recovery",
    "Azure Backup"
   ],
   "a": 2,
   "e": "Azure Site Recovery replicates VMs and orchestrates failover to a secondary region. Azure Backup creates point-in-time recovery points but does not run a coordinated DR failover.",
   "d": 5
  },
  {
   "id": 306,
   "t": "site-recovery-configure",
   "x": "Which Azure Site Recovery construct sequences the failover order of multiple VMs and can run scripts?",
   "o": [
    "Replication policy",
    "Backup policy",
    "Action group",
    "Recovery plan"
   ],
   "a": 3,
   "e": "A recovery plan groups VMs and defines their order, scripts, and manual actions during failover. A replication policy only controls recovery point and snapshot frequency settings.",
   "d": 5
  },
  {
   "id": 307,
   "t": "site-recovery-configure",
   "x": "Which two settings are defined in an Azure Site Recovery replication policy? Choose TWO.",
   "o": [
    "Recovery plan script order",
    "Cache storage account name",
    "Target VM size",
    "App-consistent snapshot frequency",
    "Recovery point retention period"
   ],
   "a": 3,
   "e": "A replication policy sets how long recovery points are retained and how often app-consistent snapshots are taken. VM size, cache account, and plan ordering are configured elsewhere.",
   "d": 5,
   "as": [
    3,
    4
   ]
  },
  {
   "id": 308,
   "t": "site-recovery-failover",
   "x": "Which Azure Site Recovery failover type validates DR readiness without disrupting ongoing production replication?",
   "o": [
    "Test failover",
    "Failback",
    "Unplanned failover",
    "Planned failover"
   ],
   "a": 0,
   "e": "Test failover spins up VMs in an isolated network without affecting ongoing replication or production. Planned and unplanned failovers actually move the workload to the target region.",
   "d": 5
  },
  {
   "id": 309,
   "t": "site-recovery-failover",
   "x": "After failing VMs over to the secondary region, which action must an administrator perform before failing back to the primary?",
   "o": [
    "Disable soft delete",
    "Delete the recovery plan",
    "Reprotect the VMs",
    "Recreate the Recovery Services vault"
   ],
   "a": 2,
   "e": "Reprotect reverses the replication direction so changes flow from the secondary back to the primary, which is required before failback. Deleting the plan or vault would remove the DR configuration.",
   "d": 5
  },
  {
   "id": 310,
   "t": "site-recovery-failover",
   "x": "During failover, which recovery point option minimizes data loss but may only be crash-consistent?",
   "o": [
    "Custom",
    "Latest",
    "Latest processed",
    "Latest app-consistent"
   ],
   "a": 1,
   "e": "The Latest recovery point processes all data in the log for the lowest RPO but may be crash-consistent rather than application-consistent. Latest app-consistent trades some data loss for guaranteed app consistency.",
   "d": 5
  },
  {
   "id": 311,
   "t": "backup-reports-alerts",
   "x": "To build Azure Backup reports spanning multiple vaults, backup data must first flow to which destination?",
   "o": [
    "A second backup vault",
    "A Log Analytics workspace",
    "A storage account",
    "An Event Hubs namespace"
   ],
   "a": 1,
   "e": "Backup reports are powered by data routed to a Log Analytics workspace through the vault's diagnostic settings. A workbook then aggregates jobs and storage across vaults.",
   "d": 5
  },
  {
   "id": 312,
   "t": "backup-reports-alerts",
   "x": "Which centralized Azure interface lets an administrator manage and monitor backups across all vaults and subscriptions?",
   "o": [
    "Azure Monitor metrics",
    "Network Watcher",
    "Azure Business Continuity Center",
    "Recovery Services vault overview"
   ],
   "a": 2,
   "e": "Azure Business Continuity Center, the successor to the retired Backup center, is the single pane for managing jobs, policies, and alerts across vaults and subscriptions. A single vault overview blade shows only that one vault, and Azure Monitor metrics and Network Watcher do not manage backups.",
   "d": 5
  }
 ],
 "pbqs": [
  {
   "kind": "match",
   "t": "storage-redundancy",
   "title": "Match each storage redundancy option to its behavior",
   "scen": "A storage administrator is choosing replication for several accounts. Match each redundancy option to what it does.",
   "choices": [
    "LRS",
    "ZRS",
    "GRS",
    "RA-GRS"
   ],
   "items": [
    {
     "l": "Three copies within a single datacenter, lowest cost",
     "a": 0
    },
    {
     "l": "Copies spread across availability zones in one region",
     "a": 1
    },
    {
     "l": "Replicated to a paired secondary region, no read access there",
     "a": 2
    },
    {
     "l": "Paired secondary region with read access to the replica",
     "a": 3
    }
   ]
  },
  {
   "kind": "match",
   "t": "storage-sas-tokens",
   "title": "Match each storage access method to its use",
   "scen": "Match each way of granting access to Azure Storage to the scenario it best fits.",
   "choices": [
    "Shared access signature",
    "Account access key",
    "Stored access policy",
    "Identity-based access"
   ],
   "items": [
    {
     "l": "A time-boxed, delegated URL to specific resources",
     "a": 0
    },
    {
     "l": "Full control of the account using one of two keys",
     "a": 1
    },
    {
     "l": "A server-side rule to constrain or revoke signatures",
     "a": 2
    },
    {
     "l": "Access governed by a Microsoft Entra identity and RBAC",
     "a": 3
    }
   ]
  },
  {
   "kind": "match",
   "t": "vm-availability",
   "title": "Match each compute resiliency option to its guarantee",
   "scen": "Match each virtual machine resiliency and scale option to what it provides.",
   "choices": [
    "Single VM",
    "Availability set",
    "Availability zones",
    "VM Scale Set"
   ],
   "items": [
    {
     "l": "One instance with no multi-instance SLA",
     "a": 0
    },
    {
     "l": "Spreads VMs across fault and update domains in a datacenter",
     "a": 1
    },
    {
     "l": "Spreads VMs across physically separate datacenters in a region",
     "a": 2
    },
    {
     "l": "Automatically scales a fleet of identical VMs to demand",
     "a": 3
    }
   ]
  },
  {
   "kind": "match",
   "t": "vm-create",
   "title": "Match each Azure compute service to its best fit",
   "scen": "Match each Azure compute option to the workload it suits best.",
   "choices": [
    "Virtual Machine",
    "VM Scale Set",
    "Container Instances",
    "Container Apps",
    "App Service"
   ],
   "items": [
    {
     "l": "Full control of a persistent IaaS operating system",
     "a": 0
    },
    {
     "l": "A fleet of identical VMs that autoscales",
     "a": 1
    },
    {
     "l": "A single container with no orchestration",
     "a": 2
    },
    {
     "l": "Serverless containers with scaling and microservices features",
     "a": 3
    },
    {
     "l": "Managed PaaS hosting for web apps and APIs",
     "a": 4
    }
   ]
  },
  {
   "kind": "match",
   "t": "nsg-asg",
   "title": "Match each Azure networking feature to its role",
   "scen": "Match each Azure virtual-networking feature to its primary purpose.",
   "choices": [
    "Network security group",
    "Azure Firewall",
    "User-defined route",
    "Service endpoint",
    "Private endpoint",
    "Azure Bastion"
   ],
   "items": [
    {
     "l": "Allow or deny traffic by five-tuple at a subnet or NIC",
     "a": 0
    },
    {
     "l": "A managed stateful firewall with FQDN and threat rules",
     "a": 1
    },
    {
     "l": "Override system routes to force traffic through an appliance",
     "a": 2
    },
    {
     "l": "Reach a PaaS service from the VNet over the Azure backbone",
     "a": 3
    },
    {
     "l": "Give a PaaS service a private IP inside the VNet",
     "a": 4
    },
    {
     "l": "Private RDP and SSH to VMs that have no public IP",
     "a": 5
    }
   ]
  },
  {
   "kind": "match",
   "t": "azure-policy",
   "title": "Match each governance control to its purpose",
   "scen": "Match each Azure governance control to what it is designed to do.",
   "choices": [
    "Azure Policy",
    "RBAC role assignment",
    "Resource lock",
    "Resource tag",
    "Management group"
   ],
   "items": [
    {
     "l": "Enforce or audit configuration standards at scale",
     "a": 0
    },
    {
     "l": "Grant a principal permission to act on resources",
     "a": 1
    },
    {
     "l": "Prevent accidental deletion or change of a resource",
     "a": 2
    },
    {
     "l": "Attach metadata for cost attribution and organization",
     "a": 3
    },
    {
     "l": "Group subscriptions to apply policy and access above them",
     "a": 4
    }
   ]
  },
  {
   "kind": "match",
   "t": "load-balancer",
   "title": "Match each name-resolution or load-balancing service to its use",
   "scen": "Match each Azure service to the scenario it addresses.",
   "choices": [
    "Azure DNS",
    "Azure Private DNS zone",
    "Azure Load Balancer",
    "Application Gateway",
    "Traffic Manager"
   ],
   "items": [
    {
     "l": "Host public DNS records for a domain",
     "a": 0
    },
    {
     "l": "Resolve names privately within linked virtual networks",
     "a": 1
    },
    {
     "l": "Layer 4 distribution across backend virtual machines",
     "a": 2
    },
    {
     "l": "Layer 7 balancing with URL path routing and a WAF",
     "a": 3
    },
    {
     "l": "DNS-based global routing across regions",
     "a": 4
    }
   ]
  },
  {
   "kind": "match",
   "t": "monitor-metrics",
   "title": "Match each monitoring or protection tool to its function",
   "scen": "Match each Azure Monitor and resiliency tool to what it does.",
   "choices": [
    "Azure Monitor Metrics",
    "Log Analytics",
    "Alert with action group",
    "Azure Backup",
    "Azure Site Recovery"
   ],
   "items": [
    {
     "l": "Near-real-time numeric time-series telemetry",
     "a": 0
    },
    {
     "l": "Query logs across resources with KQL",
     "a": 1
    },
    {
     "l": "Notify or act automatically when a condition is met",
     "a": 2
    },
    {
     "l": "Back up and restore a VM or file share",
     "a": 3
    },
    {
     "l": "Replicate and fail a workload over to another region",
     "a": 4
    }
   ]
  },
  {
   "kind": "order",
   "t": "vm-create",
   "title": "Order the steps to deploy a VM into a new network",
   "scen": "Put the steps to stand up a virtual machine in a brand-new network in the correct order.",
   "steps": [
    "Create the resource group",
    "Create the virtual network and subnet",
    "Create the network security group and its rules",
    "Create the network interface",
    "Create the virtual machine",
    "Connect securely through Azure Bastion"
   ]
  },
  {
   "kind": "order",
   "t": "arm-bicep-deploy",
   "title": "Order an infrastructure-as-code deployment",
   "scen": "Put the steps to deploy resources with Bicep or an ARM template in the correct order.",
   "steps": [
    "Author or modify the Bicep or ARM template",
    "Validate the template syntax",
    "Run a what-if to preview the changes",
    "Deploy the template to the resource group",
    "Verify the deployed resources"
   ]
  },
  {
   "kind": "order",
   "t": "vnet-peering",
   "title": "Order the steps to peer two virtual networks",
   "scen": "Put the steps to connect two virtual networks with peering in the correct order.",
   "steps": [
    "Create virtual network A",
    "Create virtual network B",
    "Configure the peering from A to B",
    "Configure the peering from B to A",
    "Verify connectivity between the networks"
   ]
  },
  {
   "kind": "order",
   "t": "azure-backup-restore",
   "title": "Order the steps to protect a VM with Azure Backup",
   "scen": "Put the steps to back up a virtual machine with Azure Backup in the correct order.",
   "steps": [
    "Create a Recovery Services vault",
    "Define a backup policy",
    "Enable backup on the virtual machine",
    "Run the initial backup",
    "Validate a restore point"
   ]
  }
 ]
}
