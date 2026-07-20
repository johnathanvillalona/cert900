// John Savill AZ-900 playlist videos the bank did not yet cover, verified
// against the live playlist (65 entries; the bank already used 41). Skipped:
// Introduction, Closing Thoughts, and the standalone Study Cram, none of which
// map to an objective.
//
// Several of these close real coverage holes -- Key Vault, Sentinel, Azure
// Firewall, DDoS Protection, NSGs and SLAs had no questions at all.
const v = (id, n, d) => [n.k, { n: `John Savill: ${n.t}`, u: `https://www.youtube.com/watch?v=${id}`, d }]
const t = (k, t) => ({ k, t })

export default {
  examId: "az-900",
  videos: Object.fromEntries([
    // --- 1. Describe cloud concepts ---
    v("KH8NH76h2vc", t("service-type-selection", "Identify the Right Service Type"), 1),

    // --- 2. Describe Azure architecture and services ---
    v("b7RuB4Bymgc", t("marketplace", "Azure Marketplace"), 2),
    v("22z9ARaKlbU", t("iot-services", "Azure IoT Services"), 2),
    v("LSVewE4mKfE", t("big-data-analytics", "Big Data and Analytics Services"), 2),
    v("lgcpRpV3HPc", t("ai-services", "Azure AI Services"), 2),
    v("RnNqmTH9xok", t("dedicated-hosts", "Azure Dedicated Hosts"), 2),
    v("flCoRc1uv9o", t("nsgs", "Network Security Groups"), 2),
    v("1-_cqpUISg4", t("azure-firewall", "Azure Firewall"), 2),
    v("6cv-wdo9TJw", t("ddos-protection", "Azure DDoS Protection"), 2),
    v("ZBXVAD4S0Tc", t("key-vault", "Azure Key Vault"), 2),
    v("xaqiPXL6tz0", t("sentinel", "Microsoft Sentinel"), 2),
    v("GA-yNu6aFMk", t("authentication-authorization", "Authentication and Authorization"), 2),

    // --- 3. Describe Azure management and governance ---
    v("-acpNiCa0qY", t("devops-technologies", "DevOps Technologies"), 3),
    v("ge8r_Z0LKxM", t("governance-hierarchy", "Governance Hierarchy Constructs"), 3),
    v("SJbDcvkySCY", t("blueprints", "Azure Blueprints"), 3),
    v("VHQxbIynlN4", t("cloud-adoption-framework", "Cloud Adoption Framework"), 3),
    v("5mqroH3E3gw", t("privacy-statement", "Privacy Statement, OST, and DPA"), 3),
    v("QkVlogulVX4", t("trust-center", "Trust Center and Compliance Documentation"), 3),
    v("PdAEPAnT2uI", t("sovereign-regions", "Azure Sovereign Regions"), 3),
    v("3QIVbgnNrR0", t("service-level-agreements", "Service Level Agreements"), 3),
    v("NJ9-S7C0pY4", t("service-lifecycle", "Service Lifecycle in Azure"), 3),
  ]),
}
