import type { GuideLessonDescriptor } from './guide-lessons'

/** Navigation and citations only. Lesson bodies stay in the static guide build. */
export const AZ900_REVIEWED_ON = '2026-10-21'
export const AZ900_SKILLS_EFFECTIVE = '2026-07-20'
export const AZ900_SOURCES = {
  curriculum: { title: 'AZ-900 skills measured and change log', url: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900' },
  exam: { title: 'Azure Fundamentals certification and assessment information', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/' },
  cloud: { title: 'Describe cloud computing', url: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/' },
  responsibility: { title: 'Shared responsibility in the cloud', url: 'https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility' },
  regions: { title: 'Azure regions overview', url: 'https://learn.microsoft.com/en-us/azure/reliability/regions-overview' },
  zones: { title: 'Availability zones and deployment choices', url: 'https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview' },
  hierarchy: { title: 'Azure management groups', url: 'https://learn.microsoft.com/en-us/azure/governance/management-groups/overview' },
  resourceGroups: { title: 'Manage Azure resource groups', url: 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal' },
  compute: { title: 'Choose an Azure compute service', url: 'https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree' },
  networking: { title: 'Azure Virtual Network', url: 'https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview' },
  endpoints: { title: 'Private endpoints', url: 'https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview' },
  storage: { title: 'Storage account options', url: 'https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview' },
  redundancy: { title: 'Azure Storage redundancy', url: 'https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy' },
  tiers: { title: 'Blob access tiers', url: 'https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview' },
  transfer: { title: 'Copy data with AzCopy', url: 'https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10' },
  migration: { title: 'Azure Migrate', url: 'https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview' },
  entra: { title: 'Microsoft Entra identity services', url: 'https://learn.microsoft.com/en-us/entra/fundamentals/what-is-entra' },
  authentication: { title: 'Microsoft Entra authentication', url: 'https://learn.microsoft.com/en-us/entra/identity/authentication/overview-authentication' },
  conditionalAccess: { title: 'Conditional Access', url: 'https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview' },
  rbac: { title: 'Azure role-based access control', url: 'https://learn.microsoft.com/en-us/azure/role-based-access-control/overview' },
  domainServices: { title: 'Microsoft Entra Domain Services', url: 'https://learn.microsoft.com/en-us/entra/identity/domain-services/overview' },
  defender: { title: 'Microsoft Defender for Cloud', url: 'https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction' },
  storageMigration: { title: 'Azure Storage migration guidance', url: 'https://learn.microsoft.com/en-us/azure/storage/common/storage-migration-overview' },
  budgets: { title: 'Cost Management budgets and alerts', url: 'https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets' },
  policy: { title: 'Azure Policy', url: 'https://learn.microsoft.com/en-us/azure/governance/policy/overview' },
  locks: { title: 'Azure resource locks', url: 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources' },
  purview: { title: 'Microsoft Purview', url: 'https://learn.microsoft.com/en-us/purview/purview' },
  arm: { title: 'Azure Resource Manager', url: 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview' },
  arc: { title: 'Azure Arc', url: 'https://learn.microsoft.com/en-us/azure/azure-arc/overview' },
  monitor: { title: 'Azure Monitor', url: 'https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview' },
  health: { title: 'Azure Service Health', url: 'https://learn.microsoft.com/en-us/azure/service-health/overview' },
  advisor: { title: 'Azure Advisor', url: 'https://learn.microsoft.com/en-us/azure/advisor/advisor-overview' },
} as const

// Microsoft publishes named skill groups, not these IDs. These local reference
// keys make the editorial mapping stable without inventing official task numbers.
export const AZ900_CURRICULUM = [
  { domain: 1, title: 'Cloud concepts', weightRange: '25–30%', skills: ['cloud-computing', 'cloud-benefits', 'service-types'] },
  { domain: 2, title: 'Azure architecture and services', weightRange: '35–40%', skills: ['architecture', 'compute-networking', 'storage', 'identity-security'] },
  { domain: 3, title: 'Azure management and governance', weightRange: '30–35%', skills: ['cost', 'governance', 'deployment', 'monitoring'] },
] as const

export const AZ900_LESSONS = [
  { id: 'az900-cloud-changes', title: '1. What cloud computing changes', objective: 'explain what changes when a team rents computing services instead of running everything itself.', objectiveRefs: ['cloud-computing', 'cloud-benefits'], domains: [1], sourceIds: ['curriculum', 'cloud'] },
  { id: 'az900-shared-responsibility', title: '2. Share the work with IaaS, PaaS and SaaS', objective: 'choose a service model and explain which jobs your team still needs to do.', objectiveRefs: ['service-types', 'cloud-computing'], domains: [1], sourceIds: ['responsibility', 'compute'] },
  { id: 'az900-regions-reliability', title: '3. Plan for failures with regions and zones', objective: 'explain how locations affect reliability and which protections you need to configure.', objectiveRefs: ['architecture', 'cloud-benefits'], domains: [2, 1], sourceIds: ['regions', 'zones'] },
  { id: 'az900-resource-hierarchy', title: '4. Organize Azure resources', objective: 'follow the management hierarchy and place a new application in a sensible scope.', objectiveRefs: ['architecture'], domains: [2], sourceIds: ['hierarchy', 'resourceGroups', 'arm'] },
  { id: 'az900-choose-compute', title: '5. Choose where your code will run', objective: 'compare virtual machines, web apps, containers and functions using the work your application needs to do.', objectiveRefs: ['compute-networking'], domains: [2], sourceIds: ['compute', 'responsibility'] },
  { id: 'az900-network-connectivity', title: '6. Connect an Azure application', objective: 'trace an application request and distinguish private networking from permission to use a service.', objectiveRefs: ['compute-networking'], domains: [2], sourceIds: ['networking', 'endpoints'] },
  { id: 'az900-storage-migration', title: '7. Choose storage and move your data', objective: 'choose a storage service, plan for failures and find a suitable way to move existing data.', objectiveRefs: ['storage'], domains: [2], sourceIds: ['storage', 'redundancy', 'tiers', 'transfer', 'migration', 'storageMigration'] },
  { id: 'az900-identity-access', title: '8. Check identity and control access', objective: 'explain how Microsoft Entra ID verifies a user and how permissions limit what that user can do.', objectiveRefs: ['identity-security'], domains: [2], sourceIds: ['entra', 'authentication', 'conditionalAccess', 'rbac', 'domainServices', 'defender'] },
  { id: 'az900-cost-governance', title: '9. Manage cost, rules and deployments', objective: 'estimate costs, set useful guardrails and repeat a deployment without relying on memory.', objectiveRefs: ['cost', 'governance', 'deployment'], domains: [3], sourceIds: ['budgets', 'policy', 'locks', 'purview', 'arm', 'arc'] },
  { id: 'az900-monitor-health', title: '10. Find out what needs attention', objective: 'choose the right Azure tool to investigate an application problem, a service incident or an improvement.', objectiveRefs: ['monitoring'], domains: [3], sourceIds: ['monitor', 'health', 'advisor'] },
] as const satisfies readonly GuideLessonDescriptor[]

export type Az900LessonId = (typeof AZ900_LESSONS)[number]['id']
export function az900SourcesForLesson(lesson: GuideLessonDescriptor) {
  return lesson.sourceIds.map(id => {
    if (!Object.hasOwn(AZ900_SOURCES, id)) throw new Error(`Unknown learning source: ${id}`)
    return AZ900_SOURCES[id as keyof typeof AZ900_SOURCES]
  })
}
