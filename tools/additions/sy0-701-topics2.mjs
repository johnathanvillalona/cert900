// The 57 Professor Messer SY0-701 lessons the bank did not yet cover.
// Domains follow Messer's own section numbering, which tracks the CompTIA
// objective domains exactly (section 1 -> domain 1, and so on).
const u = (slug) => `https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/${slug}-sy0-701/`
const v = (slug, n, d) => [slug, { n, u: u(slug), d }]

export default {
  examId: "sy0-701",
  videos: Object.fromEntries([
    // --- 1. General Security Concepts ---
    v("non-repudiation", "Non-repudiation", 1),
    v("authentication-authorization-and-accounting", "Authentication, Authorization, and Accounting", 1),
    v("gap-analysis", "Gap Analysis", 1),
    v("deception-and-disruption", "Deception and Disruption", 1),
    v("technical-change-management", "Technical Change Management", 1),
    v("key-exchange", "Key Exchange", 1),
    v("encryption-technologies", "Encryption Technologies", 1),
    v("obfuscation", "Obfuscation", 1),
    v("blockchain-technology", "Blockchain Technology", 1),

    // --- 2. Threats, Vulnerabilities, and Mitigations ---
    v("impersonation", "Impersonation", 2),
    v("watering-hole-attacks", "Watering Hole Attacks", 2),
    v("memory-injections", "Memory Injections", 2),
    v("buffer-overflows", "Buffer Overflows", 2),
    v("race-conditions", "Race Conditions", 2),
    v("malicious-updates", "Malicious Updates", 2),
    v("operating-system-vulnerabilities", "Operating System Vulnerabilities", 2),
    v("hardware-vulnerabilities", "Hardware Vulnerabilities", 2),
    v("virtualization-vulnerabilities", "Virtualization Vulnerabilities", 2),
    v("cloud-specific-vulnerabilities", "Cloud-specific Vulnerabilities", 2),
    v("misconfiguration-vulnerabilities", "Misconfiguration Vulnerabilities", 2),
    v("mobile-device-vulnerabilities", "Mobile Device Vulnerabilities", 2),
    v("viruses-and-worms", "Viruses and Worms", 2),
    v("spyware-and-bloatware", "Spyware and Bloatware", 2),
    v("physical-attacks", "Physical Attacks", 2),
    v("dns-attacks", "DNS Attacks", 2),
    v("wireless-attacks", "Wireless Attacks", 2),
    v("replay-attacks", "Replay Attacks", 2),
    v("malicious-code", "Malicious Code", 2),
    v("application-attacks", "Application Attacks", 2),
    v("cryptographic-attacks", "Cryptographic Attacks", 2),
    v("segmentation-and-access-control", "Segmentation and Access Control", 2),
    v("mitigation-techniques", "Mitigation Techniques", 2),

    // --- 3. Security Architecture ---
    v("other-infrastructure-concepts", "Other Infrastructure Concepts", 3),
    v("infrastructure-considerations", "Infrastructure Considerations", 3),
    v("port-security", "Port Security", 3),
    v("states-of-data", "States of Data", 3),
    v("capacity-planning", "Capacity Planning", 3),
    v("recovery-testing", "Recovery Testing", 3),
    v("power-resiliency", "Power Resiliency", 3),

    // --- 4. Security Operations ---
    v("securing-wireless-and-mobile", "Securing Wireless and Mobile", 4),
    v("asset-management", "Asset Management", 4),
    v("threat-intelligence", "Threat Intelligence", 4),
    v("analyzing-vulnerabilities", "Analyzing Vulnerabilities", 4),
    v("vulnerability-remediation", "Vulnerability Remediation", 4),
    v("security-tools", "Security Tools", 4),
    v("web-filtering", "Web Filtering", 4),
    v("operating-system-security", "Operating System Security", 4),
    v("monitoring-data", "Monitoring Data", 4),
    v("password-security", "Password Security", 4),
    v("scripting-and-automation", "Scripting and Automation", 4),
    v("incident-planning", "Incident Planning", 4),

    // --- 5. Security Program Management and Oversight ---
    v("security-procedures", "Security Procedures", 5),
    v("security-considerations", "Security Considerations", 5),
    v("risk-management-strategies", "Risk Management Strategies", 5),
    v("privacy", "Privacy", 5),
    v("penetration-tests", "Penetration Tests", 5),
    v("user-training", "User Training", 5),
  ]),
}
