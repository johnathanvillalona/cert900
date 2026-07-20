// SY0-701 Security+ bank — hand-maintained (authored via the content pipeline).
// Video map: Professor Messer SY0-701 course (slugs verified against the live index).
import type { ExamDef } from "./types"

export const exam: ExamDef = {
 "id": "sy0-701",
 "vendor": "comptia",
 "scale": {
  "max": 900,
  "pass": 750
 },
 "cert": "CompTIA",
 "name": "Security+",
 "code": "SY0-701",
 "blurb": "Security concepts, threats and mitigations, architecture, operations, and program management. The most popular entry security certification.",
 "domains": {
  "1": "General Security Concepts",
  "2": "Threats, Vulnerabilities & Mitigations",
  "3": "Security Architecture",
  "4": "Security Operations",
  "5": "Program Management & Oversight"
 },
 "examSplit": {
  "1": 0.12,
  "2": 0.22,
  "3": 0.18,
  "4": 0.28,
  "5": 0.2
 },
 "examMC": 60,
 "examPBQ": 4,
 "examMinutes": 90,
 "videos": {
  "authentication-authorization-and-accounting": {
   "n": "Authentication, Authorization, and Accounting",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/authentication-authorization-and-accounting-sy0-701/",
   "d": 1
  },
  "blockchain-technology": {
   "n": "Blockchain Technology",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/blockchain-technology-sy0-701/",
   "d": 1
  },
  "certificates": {
   "n": "Certificates",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/certificates-sy0-701/",
   "d": 1
  },
  "change-management": {
   "n": "Change Management",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/change-management-sy0-701/",
   "d": 1
  },
  "deception-and-disruption": {
   "n": "Deception and Disruption",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/deception-and-disruption-sy0-701/",
   "d": 1
  },
  "encrypting-data": {
   "n": "Encrypting Data",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/encrypting-data-sy0-701/",
   "d": 1
  },
  "encryption-technologies": {
   "n": "Encryption Technologies",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/encryption-technologies-sy0-701/",
   "d": 1
  },
  "gap-analysis": {
   "n": "Gap Analysis",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/gap-analysis-sy0-701/",
   "d": 1
  },
  "hashing-and-digital-signatures": {
   "n": "Hashing and Digital Signatures",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hashing-and-digital-signatures-sy0-701/",
   "d": 1
  },
  "key-exchange": {
   "n": "Key Exchange",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/key-exchange-sy0-701/",
   "d": 1
  },
  "non-repudiation": {
   "n": "Non-repudiation",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/non-repudiation-sy0-701/",
   "d": 1
  },
  "obfuscation": {
   "n": "Obfuscation",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/obfuscation-sy0-701/",
   "d": 1
  },
  "physical-security": {
   "n": "Physical Security",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-security-sy0-701/",
   "d": 1
  },
  "public-key-infrastructure": {
   "n": "Public Key Infrastructure",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/public-key-infrastructure-sy0-701/",
   "d": 1
  },
  "security-controls": {
   "n": "Security Controls",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-controls-sy0-701/",
   "d": 1
  },
  "technical-change-management": {
   "n": "Technical Change Management",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/technical-change-management-sy0-701/",
   "d": 1
  },
  "the-cia-triad": {
   "n": "The CIA Triad",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/the-cia-triad-sy0-701/",
   "d": 1
  },
  "zero-trust": {
   "n": "Zero Trust",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/zero-trust-sy0-701/",
   "d": 1
  },
  "an-overview-of-malware": {
   "n": "An Overview of Malware",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/an-overview-of-malware-sy0-701/",
   "d": 2
  },
  "application-attacks": {
   "n": "Application Attacks",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/application-attacks-sy0-701/",
   "d": 2
  },
  "buffer-overflows": {
   "n": "Buffer Overflows",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/buffer-overflows-sy0-701/",
   "d": 2
  },
  "cloud-specific-vulnerabilities": {
   "n": "Cloud-specific Vulnerabilities",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cloud-specific-vulnerabilities-sy0-701/",
   "d": 2
  },
  "common-threat-vectors": {
   "n": "Common Threat Vectors",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/common-threat-vectors-sy0-701/",
   "d": 2
  },
  "cross-site-scripting": {
   "n": "Cross-site Scripting",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cross-site-scripting-sy0-701/",
   "d": 2
  },
  "cryptographic-attacks": {
   "n": "Cryptographic Attacks",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cryptographic-attacks-sy0-701/",
   "d": 2
  },
  "denial-of-service": {
   "n": "Denial of Service",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/denial-of-service-sy0-701/",
   "d": 2
  },
  "dns-attacks": {
   "n": "DNS Attacks",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/dns-attacks-sy0-701/",
   "d": 2
  },
  "hardening-techniques": {
   "n": "Hardening Techniques",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardening-techniques-sy0-701/",
   "d": 2
  },
  "hardware-vulnerabilities": {
   "n": "Hardware Vulnerabilities",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardware-vulnerabilities-sy0-701/",
   "d": 2
  },
  "impersonation": {
   "n": "Impersonation",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/impersonation-sy0-701/",
   "d": 2
  },
  "indicators-of-compromise": {
   "n": "Indicators of Compromise",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/indicators-of-compromise-sy0-701/",
   "d": 2
  },
  "malicious-code": {
   "n": "Malicious Code",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/malicious-code-sy0-701/",
   "d": 2
  },
  "malicious-updates": {
   "n": "Malicious Updates",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/malicious-updates-sy0-701/",
   "d": 2
  },
  "memory-injections": {
   "n": "Memory Injections",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/memory-injections-sy0-701/",
   "d": 2
  },
  "misconfiguration-vulnerabilities": {
   "n": "Misconfiguration Vulnerabilities",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/misconfiguration-vulnerabilities-sy0-701/",
   "d": 2
  },
  "mitigation-techniques": {
   "n": "Mitigation Techniques",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mitigation-techniques-sy0-701/",
   "d": 2
  },
  "mobile-device-vulnerabilities": {
   "n": "Mobile Device Vulnerabilities",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/mobile-device-vulnerabilities-sy0-701/",
   "d": 2
  },
  "on-path-attacks": {
   "n": "On-path Attacks",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/on-path-attacks-sy0-701/",
   "d": 2
  },
  "operating-system-vulnerabilities": {
   "n": "Operating System Vulnerabilities",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/operating-system-vulnerabilities-sy0-701/",
   "d": 2
  },
  "other-malware-types": {
   "n": "Other Malware Types",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-malware-types-sy0-701/",
   "d": 2
  },
  "other-social-engineering-attacks": {
   "n": "Other Social Engineering Attacks",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-social-engineering-attacks-sy0-701/",
   "d": 2
  },
  "password-attacks": {
   "n": "Password Attacks",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/password-attacks-sy0-701/",
   "d": 2
  },
  "phishing": {
   "n": "Phishing",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/phishing-sy0-701/",
   "d": 2
  },
  "physical-attacks": {
   "n": "Physical Attacks",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/physical-attacks-sy0-701/",
   "d": 2
  },
  "race-conditions": {
   "n": "Race Conditions",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/race-conditions-sy0-701/",
   "d": 2
  },
  "replay-attacks": {
   "n": "Replay Attacks",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/replay-attacks-sy0-701/",
   "d": 2
  },
  "segmentation-and-access-control": {
   "n": "Segmentation and Access Control",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/segmentation-and-access-control-sy0-701/",
   "d": 2
  },
  "spyware-and-bloatware": {
   "n": "Spyware and Bloatware",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/spyware-and-bloatware-sy0-701/",
   "d": 2
  },
  "sql-injection": {
   "n": "SQL Injection",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sql-injection-sy0-701/",
   "d": 2
  },
  "supply-chain-vulnerabilities": {
   "n": "Supply Chain Vulnerabilities",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/supply-chain-vulnerabilities-sy0-701/",
   "d": 2
  },
  "threat-actors": {
   "n": "Threat Actors",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-actors-sy0-701/",
   "d": 2
  },
  "virtualization-vulnerabilities": {
   "n": "Virtualization Vulnerabilities",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/virtualization-vulnerabilities-sy0-701/",
   "d": 2
  },
  "viruses-and-worms": {
   "n": "Viruses and Worms",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/viruses-and-worms-sy0-701/",
   "d": 2
  },
  "watering-hole-attacks": {
   "n": "Watering Hole Attacks",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/watering-hole-attacks-sy0-701/",
   "d": 2
  },
  "wireless-attacks": {
   "n": "Wireless Attacks",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/wireless-attacks-sy0-701/",
   "d": 2
  },
  "zero-day-vulnerabilities": {
   "n": "Zero-day Vulnerabilities",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/zero-day-vulnerabilities-sy0-701/",
   "d": 2
  },
  "backups": {
   "n": "Backups",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/backups-sy0-701/",
   "d": 3
  },
  "capacity-planning": {
   "n": "Capacity Planning",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/capacity-planning-sy0-701/",
   "d": 3
  },
  "cloud-infrastructures": {
   "n": "Cloud Infrastructures",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/cloud-infrastructures-sy0-701/",
   "d": 3
  },
  "data-types-and-classifications": {
   "n": "Data Types and Classifications",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-types-and-classifications-sy0-701/",
   "d": 3
  },
  "firewall-types": {
   "n": "Firewall Types",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/firewall-types-sy0-701/",
   "d": 3
  },
  "infrastructure-considerations": {
   "n": "Infrastructure Considerations",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/infrastructure-considerations-sy0-701/",
   "d": 3
  },
  "intrusion-prevention": {
   "n": "Intrusion Prevention",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/intrusion-prevention-sy0-701/",
   "d": 3
  },
  "network-appliances": {
   "n": "Network Appliances",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/network-appliances-sy0-701/",
   "d": 3
  },
  "network-infrastructure-concepts": {
   "n": "Network Infrastructure Concepts",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/network-infrastructure-concepts-sy0-701/",
   "d": 3
  },
  "other-infrastructure-concepts": {
   "n": "Other Infrastructure Concepts",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/other-infrastructure-concepts-sy0-701/",
   "d": 3
  },
  "port-security": {
   "n": "Port Security",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/port-security-sy0-701/",
   "d": 3
  },
  "power-resiliency": {
   "n": "Power Resiliency",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/power-resiliency-sy0-701/",
   "d": 3
  },
  "protecting-data": {
   "n": "Protecting Data",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/protecting-data-sy0-701/",
   "d": 3
  },
  "recovery-testing": {
   "n": "Recovery Testing",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/recovery-testing-sy0-701/",
   "d": 3
  },
  "resiliency": {
   "n": "Resiliency",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/resiliency-sy0-701/",
   "d": 3
  },
  "secure-communication": {
   "n": "Secure Communication",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/secure-communication-sy0-701/",
   "d": 3
  },
  "secure-infrastructures": {
   "n": "Secure Infrastructures",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/secure-infrastructures-sy0-701/",
   "d": 3
  },
  "states-of-data": {
   "n": "States of Data",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/states-of-data-sy0-701/",
   "d": 3
  },
  "access-controls": {
   "n": "Access Controls",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/access-controls-sy0-701/",
   "d": 4
  },
  "analyzing-vulnerabilities": {
   "n": "Analyzing Vulnerabilities",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/analyzing-vulnerabilities-sy0-701/",
   "d": 4
  },
  "application-security": {
   "n": "Application Security",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/application-security-sy0-701/",
   "d": 4
  },
  "asset-management": {
   "n": "Asset Management",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/asset-management-sy0-701/",
   "d": 4
  },
  "digital-forensics": {
   "n": "Digital Forensics",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/digital-forensics-sy0-701/",
   "d": 4
  },
  "email-security": {
   "n": "Email Security",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/email-security-sy0-701/",
   "d": 4
  },
  "endpoint-security": {
   "n": "Endpoint Security",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/endpoint-security-sy0-701/",
   "d": 4
  },
  "firewalls": {
   "n": "Firewalls",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/firewalls-sy0-701/",
   "d": 4
  },
  "hardening-targets": {
   "n": "Hardening Targets",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/hardening-targets-sy0-701/",
   "d": 4
  },
  "identity-and-access-management": {
   "n": "Identity and Access Management",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/identity-and-access-management-sy0-701/",
   "d": 4
  },
  "incident-planning": {
   "n": "Incident Planning",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-planning-sy0-701/",
   "d": 4
  },
  "incident-response": {
   "n": "Incident Response",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/incident-response-sy0-701/",
   "d": 4
  },
  "log-data": {
   "n": "Log Data",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/log-data-sy0-701/",
   "d": 4
  },
  "monitoring-data": {
   "n": "Monitoring Data",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/monitoring-data-sy0-701/",
   "d": 4
  },
  "multifactor-authentication": {
   "n": "Multifactor Authentication",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/multifactor-authentication-sy0-701/",
   "d": 4
  },
  "operating-system-security": {
   "n": "Operating System Security",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/operating-system-security-sy0-701/",
   "d": 4
  },
  "password-security": {
   "n": "Password Security",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/password-security-sy0-701/",
   "d": 4
  },
  "penetration-testing": {
   "n": "Penetration Testing",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-testing-sy0-701/",
   "d": 4
  },
  "scripting-and-automation": {
   "n": "Scripting and Automation",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/scripting-and-automation-sy0-701/",
   "d": 4
  },
  "secure-baselines": {
   "n": "Secure Baselines",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/secure-baselines-sy0-701/",
   "d": 4
  },
  "secure-protocols": {
   "n": "Secure Protocols",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/secure-protocols-sy0-701/",
   "d": 4
  },
  "securing-wireless-and-mobile": {
   "n": "Securing Wireless and Mobile",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/securing-wireless-and-mobile-sy0-701/",
   "d": 4
  },
  "security-monitoring": {
   "n": "Security Monitoring",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-monitoring-sy0-701/",
   "d": 4
  },
  "security-tools": {
   "n": "Security Tools",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-tools-sy0-701/",
   "d": 4
  },
  "threat-intelligence": {
   "n": "Threat Intelligence",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/threat-intelligence-sy0-701/",
   "d": 4
  },
  "vulnerability-remediation": {
   "n": "Vulnerability Remediation",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/vulnerability-remediation-sy0-701/",
   "d": 4
  },
  "vulnerability-scanning": {
   "n": "Vulnerability Scanning",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/vulnerability-scanning-sy0-701/",
   "d": 4
  },
  "web-filtering": {
   "n": "Web Filtering",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/web-filtering-sy0-701/",
   "d": 4
  },
  "wireless-security-settings": {
   "n": "Wireless Security Settings",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/wireless-security-settings-sy0-701/",
   "d": 4
  },
  "agreement-types": {
   "n": "Agreement Types",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/agreement-types-sy0-701/",
   "d": 5
  },
  "audits-and-assessments": {
   "n": "Audits and Assessments",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/audits-and-assessments-sy0-701/",
   "d": 5
  },
  "business-impact-analysis": {
   "n": "Business Impact Analysis",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/business-impact-analysis-sy0-701/",
   "d": 5
  },
  "compliance": {
   "n": "Compliance",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/compliance-sy0-701/",
   "d": 5
  },
  "data-roles-and-responsibilities": {
   "n": "Data Roles and Responsibilities",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/data-roles-and-responsibilities-sy0-701/",
   "d": 5
  },
  "penetration-tests": {
   "n": "Penetration Tests",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/penetration-tests-sy0-701/",
   "d": 5
  },
  "privacy": {
   "n": "Privacy",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/privacy-sy0-701/",
   "d": 5
  },
  "risk-analysis": {
   "n": "Risk Analysis",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/",
   "d": 5
  },
  "risk-management": {
   "n": "Risk Management",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-management-sy0-701/",
   "d": 5
  },
  "risk-management-strategies": {
   "n": "Risk Management Strategies",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-management-strategies-sy0-701/",
   "d": 5
  },
  "security-awareness": {
   "n": "Security Awareness",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-awareness-sy0-701/",
   "d": 5
  },
  "security-considerations": {
   "n": "Security Considerations",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-considerations-sy0-701/",
   "d": 5
  },
  "security-policies": {
   "n": "Security Policies",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-policies-sy0-701/",
   "d": 5
  },
  "security-procedures": {
   "n": "Security Procedures",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-procedures-sy0-701/",
   "d": 5
  },
  "security-standards": {
   "n": "Security Standards",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-standards-sy0-701/",
   "d": 5
  },
  "third-party-risk-assessment": {
   "n": "Third-party Risk Assessment",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/third-party-risk-assessment-sy0-701/",
   "d": 5
  },
  "user-training": {
   "n": "User Training",
   "u": "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/user-training-sy0-701/",
   "d": 5
  }
 },
 "questions": [
  {
   "id": 1,
   "t": "security-controls",
   "x": "An organization documents a formal security policy that dictates how employees must classify and handle sensitive data. Under the CompTIA control categories, this policy is an example of which category?",
   "o": [
    "Technical",
    "Physical",
    "Managerial",
    "Operational"
   ],
   "a": 2,
   "e": "Managerial controls (also called administrative controls) are the policies, procedures, and guidelines that govern how security is designed and enforced. A written data-handling policy is documentation rather than a technology or a human-performed task, so it is managerial. Operational controls are the ones carried out by people, such as security awareness training.",
   "d": 1
  },
  {
   "id": 2,
   "t": "security-controls",
   "x": "A security analyst reviews server logs each morning and discovers an intrusion attempt that occurred during the previous night. Which control type is represented by the log review that surfaced the attempt?",
   "o": [
    "Detective",
    "Preventive",
    "Corrective",
    "Deterrent"
   ],
   "a": 0,
   "e": "Detective controls identify and record that an event has occurred, usually after the fact; log reviews, intrusion detection systems, and video surveillance are examples. A preventive control would have blocked the attempt before it happened, which is not what took place here.",
   "d": 1
  },
  {
   "id": 3,
   "t": "the-cia-triad",
   "x": "A company deploys redundant servers and load balancing so its customer portal stays reachable during traffic spikes and hardware failures. Which element of the CIA triad does this primarily support?",
   "o": [
    "Confidentiality",
    "Integrity",
    "Non-repudiation",
    "Availability"
   ],
   "a": 3,
   "e": "Availability ensures systems and data are accessible when needed, and redundancy, load balancing, and fault tolerance are classic availability measures. Confidentiality concerns keeping data secret and integrity concerns preventing unauthorized changes, neither of which is the goal here.",
   "d": 1
  },
  {
   "id": 4,
   "t": "the-cia-triad",
   "x": "A file's cryptographic hash is calculated before and after it is transferred so the recipient can confirm the contents were not modified in transit. Which element of the CIA triad does this verify?",
   "o": [
    "Confidentiality",
    "Integrity",
    "Availability",
    "Authentication"
   ],
   "a": 1,
   "e": "Integrity assures that data has not been altered, and comparing a hash computed before and after a transfer detects any change to the bits. Confidentiality would require encrypting the data to keep it secret, which hashing alone does not provide.",
   "d": 1
  },
  {
   "id": 5,
   "t": "zero-trust",
   "x": "In a Zero Trust architecture, which component evaluates each access request against configured rules and produces the decision to grant, deny, or revoke access?",
   "o": [
    "Policy engine",
    "Policy enforcement point",
    "Policy administrator",
    "Subject"
   ],
   "a": 0,
   "e": "The policy engine makes the access decision by evaluating the request against policy and threat intelligence. The policy administrator then carries out that decision, and the policy enforcement point is the gateway that actually allows or blocks the connection.",
   "d": 1
  },
  {
   "id": 6,
   "t": "zero-trust",
   "x": "A resource gateway reassesses the user's device health, geographic location, and recent behavior on every request, tightening or loosening access based on the current risk. Which Zero Trust concept does this describe?",
   "o": [
    "Implicit trust",
    "Threat scope reduction",
    "Adaptive identity",
    "Data plane"
   ],
   "a": 2,
   "e": "Adaptive identity uses context such as device posture, location, and behavior to adjust the level of trust and access dynamically rather than relying on a static credential. Zero Trust deliberately removes implicit trust, so that option contradicts the model.",
   "d": 1
  },
  {
   "id": 7,
   "t": "physical-security",
   "x": "A facility installs a small enclosure with two interlocking doors where the second door will not open until the first has closed, allowing only one person to pass at a time. Which physical control is this?",
   "o": [
    "Bollard",
    "Access control vestibule",
    "Proximity badge reader",
    "Video surveillance"
   ],
   "a": 1,
   "e": "An access control vestibule (formerly called a mantrap) uses two interlocking doors to prevent tailgating by ensuring only one person enters at a time. Bollards block vehicles, while badge readers and cameras do not physically restrict how many people pass through.",
   "d": 1
  },
  {
   "id": 8,
   "t": "physical-security",
   "x": "A data center needs to stop a vehicle from being driven through the glass wall next to its lobby entrance. Which physical security control most directly addresses this threat?",
   "o": [
    "Bollards",
    "Motion sensors",
    "Access badges",
    "Security lighting"
   ],
   "a": 0,
   "e": "Bollards are sturdy posts that block vehicles from entering an area while still allowing people to walk through. Motion sensors, badges, and lighting can detect or deter intruders but do not physically stop a moving vehicle.",
   "d": 1
  },
  {
   "id": 9,
   "t": "change-management",
   "x": "As part of change management, a team prepares documented steps to restore systems to their previous state if a deployment causes unexpected problems. What is this documentation called?",
   "o": [
    "Impact analysis",
    "Maintenance window",
    "Standard operating procedure",
    "Backout plan"
   ],
   "a": 3,
   "e": "A backout plan (also called a rollback plan) defines how to reverse a change and return to the last known-good state if something goes wrong. Impact analysis is performed beforehand to predict effects, not to undo a change that has already failed.",
   "d": 1
  },
  {
   "id": 10,
   "t": "change-management",
   "x": "Before approving a proposed firewall firmware upgrade, a change advisory board studies how the update could disrupt dependent services and affect the organization's security posture. Which change management activity is this?",
   "o": [
    "Backout plan",
    "Version control",
    "Impact analysis",
    "Maintenance window"
   ],
   "a": 2,
   "e": "Impact analysis evaluates the potential consequences of a change, including effects on dependencies and security, so decision-makers can weigh the risk before approval. A backout plan addresses recovery after a failure, and a maintenance window is the scheduled time to perform the work.",
   "d": 1
  },
  {
   "id": 11,
   "t": "public-key-infrastructure",
   "x": "A message is encrypted with a recipient's public key. Which key can decrypt that message?",
   "o": [
    "The certificate authority's root key",
    "The recipient's private key",
    "A pre-shared symmetric key",
    "The sender's public key"
   ],
   "a": 1,
   "e": "Asymmetric encryption uses a matched key pair: data encrypted with a public key can only be decrypted with the corresponding private key, which the recipient keeps secret. This lets anyone encrypt a message that only the intended recipient is able to read.",
   "d": 1
  },
  {
   "id": 12,
   "t": "public-key-infrastructure",
   "x": "Within a public key infrastructure, which component accepts certificate requests and verifies the requester's identity before forwarding the request to the certificate authority for issuance?",
   "o": [
    "Registration authority",
    "Certificate authority",
    "Certificate revocation list",
    "Key escrow agent"
   ],
   "a": 0,
   "e": "The registration authority (RA) handles enrollment: it validates the identity of the entity requesting a certificate and then passes the vetted request to the certificate authority, which actually signs and issues the certificate. Splitting the roles lets the CA focus on issuance while the RA handles verification.",
   "d": 1
  },
  {
   "id": 13,
   "t": "public-key-infrastructure",
   "x": "An enterprise wants assurance that it can still recover encrypted files if an employee loses their private key or leaves the company. Which PKI concept provides this capability?",
   "o": [
    "Certificate revocation list",
    "Online Certificate Status Protocol",
    "Certificate pinning",
    "Key escrow"
   ],
   "a": 3,
   "e": "Key escrow stores a copy of private keys with a trusted third party or system so the organization can recover encrypted data when the original key is unavailable. A certificate revocation list and the Online Certificate Status Protocol report whether a certificate is still valid, not how to recover a lost key.",
   "d": 1
  },
  {
   "id": 14,
   "t": "encrypting-data",
   "x": "A company wants a stolen laptop's entire contents, including the operating system and temporary files, to be unreadable without the correct credentials. Which encryption approach meets this requirement?",
   "o": [
    "File-level encryption",
    "Transport encryption",
    "Full-disk encryption",
    "Database encryption"
   ],
   "a": 2,
   "e": "Full-disk encryption (FDE) encrypts everything on the drive, so an attacker who removes or boots the disk cannot read any of it without the key. File-level encryption protects only selected files and leaves the rest of the disk, including many temporary artifacts, exposed.",
   "d": 1
  },
  {
   "id": 15,
   "t": "encrypting-data",
   "x": "Which component built into a computer's motherboard securely generates and stores cryptographic keys and supports drive encryption features such as BitLocker?",
   "o": [
    "Hardware security module",
    "Trusted Platform Module",
    "Key management system",
    "Secure enclave"
   ],
   "a": 1,
   "e": "A Trusted Platform Module (TPM) is a dedicated chip on the motherboard that stores keys and platform integrity measurements and enables full-disk encryption like BitLocker. A hardware security module (HSM) performs similar functions but is a separate, often removable or networked device rather than a built-in motherboard chip.",
   "d": 1
  },
  {
   "id": 16,
   "t": "encrypting-data",
   "x": "A payment application replaces each stored card number with a randomly generated substitute value that has no mathematical link to the original, using a separate secured vault to look up the real number when needed. Which technique is this?",
   "o": [
    "Tokenization",
    "Data masking",
    "Steganography",
    "Key stretching"
   ],
   "a": 0,
   "e": "Tokenization swaps sensitive data for a non-sensitive token, with the mapping kept in a protected vault, so a breach of the application exposes only meaningless tokens. Data masking instead hides part of a value, such as showing only the last four digits, and does not rely on a reversible vault lookup.",
   "d": 1
  },
  {
   "id": 17,
   "t": "hashing-and-digital-signatures",
   "x": "What is the primary security benefit of adding a unique, random salt to each password before it is hashed and stored?",
   "o": [
    "The stored hash can later be decrypted back to the password",
    "The hashing algorithm runs faster on the authentication server",
    "The hash output is shortened to conserve disk space",
    "Identical passwords no longer produce identical stored hashes"
   ],
   "a": 3,
   "e": "A unique salt ensures that two users with the same password produce different hashes, which defeats precomputed rainbow-table attacks and hides the fact that passwords are shared. Hashing is one-way, so salting does not make the hash reversible or smaller.",
   "d": 1
  },
  {
   "id": 18,
   "t": "hashing-and-digital-signatures",
   "x": "A sender creates a digital signature by encrypting the hash of a document with their private key. When the recipient verifies it successfully using the sender's public key, what has been confirmed?",
   "o": [
    "The document's contents are concealed from eavesdroppers",
    "The document will stay available during a network outage",
    "The document is authentic and was not altered after signing",
    "The document was compressed to reduce its transfer size"
   ],
   "a": 2,
   "e": "A valid digital signature confirms integrity, meaning the content did not change, and authentication with non-repudiation, meaning it came from the holder of the private key. It does not provide confidentiality, because the signing process does not encrypt the document itself, so the contents remain readable.",
   "d": 1
  },
  {
   "id": 19,
   "t": "certificates",
   "x": "An administrator needs a single certificate that will secure www, mail, and shop under the same domain without buying a separate certificate for each host. Which certificate type fits this need?",
   "o": [
    "Self-signed certificate",
    "Wildcard certificate",
    "Code-signing certificate",
    "Root certificate"
   ],
   "a": 1,
   "e": "A wildcard certificate secures a domain and all of its immediate subdomains, for example *.example.com, so one certificate covers www, mail, and shop. A self-signed certificate is not trusted by default, and a code-signing certificate is used to sign software rather than to secure web hosts.",
   "d": 1
  },
  {
   "id": 20,
   "t": "certificates",
   "x": "A browser warns that a website's certificate cannot be trusted because it was signed by the same server presenting it instead of by a recognized authority. What kind of certificate is being used?",
   "o": [
    "Wildcard certificate",
    "Extended validation certificate",
    "Intermediate certificate",
    "Self-signed certificate"
   ],
   "a": 3,
   "e": "A self-signed certificate is signed with its own private key rather than by a trusted certificate authority, so clients have no chain of trust to validate it and display a warning. Certificates issued by a recognized CA, including extended validation and intermediate certificates, chain up to a trusted root and avoid this error.",
   "d": 1
  },
  {
   "id": 21,
   "t": "threat-actors",
   "x": "Which threat actor is typically the best funded and most technically sophisticated, usually conducting long-term espionage against government and critical-infrastructure targets?",
   "o": [
    "Hacktivist",
    "Insider threat",
    "Nation-state actor",
    "Unskilled attacker"
   ],
   "a": 2,
   "e": "Nation-state actors, often called advanced persistent threats (APTs), have the deepest funding and highest sophistication, and their goal is usually long-term espionage or strategic disruption. Hacktivists are ideologically driven but far less resourced, and an unskilled attacker relies on tools written by others.",
   "d": 2
  },
  {
   "id": 22,
   "t": "threat-actors",
   "x": "A database administrator who was recently passed over for a promotion uses their legitimate access to copy customer records to a personal drive shortly before resigning. Which type of threat actor does this represent?",
   "o": [
    "Insider threat",
    "Organized crime",
    "Nation-state actor",
    "Unskilled attacker"
   ],
   "a": 0,
   "e": "An insider threat is a current or former member of the organization who misuses authorized access, often motivated by revenge or financial gain. Because the administrator already held legitimate credentials, no external intrusion was needed, which sets this apart from organized crime or nation-state activity.",
   "d": 2
  },
  {
   "id": 23,
   "t": "threat-actors",
   "x": "Which threat actor is primarily driven by a political or social cause rather than by financial gain?",
   "o": [
    "Organized crime group",
    "Hacktivist",
    "Unskilled attacker",
    "Insider threat"
   ],
   "a": 1,
   "e": "Hacktivists carry out attacks such as website defacement or data leaks to advance a political or social agenda, not for profit. Organized crime is financially motivated, and unskilled attackers typically seek notoriety or act out of curiosity using pre-built tools.",
   "d": 2
  },
  {
   "id": 24,
   "t": "common-threat-vectors",
   "x": "An employee finds a USB flash drive in the parking lot and plugs it into a company workstation to view its contents, which silently installs malware. Which threat vector was used?",
   "o": [
    "Removable device",
    "Unsecured network",
    "Default credentials",
    "Open service port"
   ],
   "a": 0,
   "e": "A removable device such as a USB drive is a physical threat vector; malware can auto-run or trick the user into launching it. This baiting technique bypasses network defenses because the device is carried inside and connected directly to a host.",
   "d": 2
  },
  {
   "id": 25,
   "t": "common-threat-vectors",
   "x": "A factory production line depends on a server running an operating system that the vendor no longer supports with security updates. Why does relying on this system create a serious threat vector?",
   "o": [
    "The firewall stops filtering traffic for the host",
    "Multifactor authentication can no longer be enforced",
    "Newly discovered flaws stay open and exploitable",
    "Backups of the server can no longer be scheduled"
   ],
   "a": 2,
   "e": "An unsupported or end-of-life system no longer receives security updates, so any vulnerability discovered after end-of-support remains open permanently and gives attackers a reliable way in. Reaching end of life does not by itself disable firewalls, authentication, or backups.",
   "d": 2
  },
  {
   "id": 26,
   "t": "phishing",
   "x": "A caller claims to be from the company help desk and pressures an employee over the phone into revealing their network password. Which type of attack is this?",
   "o": [
    "Vishing",
    "Smishing",
    "Pharming",
    "Whaling"
   ],
   "a": 0,
   "e": "Vishing, or voice phishing, uses phone calls to trick a target into disclosing sensitive information. Smishing uses text messages, and pharming redirects users to fraudulent websites through DNS or hosts-file manipulation.",
   "d": 2
  },
  {
   "id": 27,
   "t": "phishing",
   "x": "A finance officer receives a personalized email that references a real, ongoing acquisition and appears to come from the CFO, urgently requesting a wire transfer. Which term best describes this tailored message?",
   "o": [
    "Whaling",
    "Shoulder surfing",
    "Credential stuffing",
    "Spear phishing"
   ],
   "a": 3,
   "e": "Spear phishing is a phishing attack crafted for a specific individual, using personal or contextual details to appear credible. Whaling is a subset aimed at senior executives; here the recipient is a staff member, so the broader term spear phishing fits best.",
   "d": 2
  },
  {
   "id": 28,
   "t": "phishing",
   "x": "An attacker registers the domain name micros0ft-support.com, hoping that people will mistype the address or overlook the substituted character. What is this technique called?",
   "o": [
    "Pretexting",
    "Typosquatting",
    "Tailgating",
    "Watering hole attack"
   ],
   "a": 1,
   "e": "Typosquatting, also called URL hijacking, registers domains that resemble legitimate ones through misspellings or character swaps to catch users who mistype or do not look closely. Pretexting invents a false scenario, and a watering hole attack compromises a site the target already trusts.",
   "d": 2
  },
  {
   "id": 29,
   "t": "other-social-engineering-attacks",
   "x": "Instead of contacting employees directly, an attacker compromises a niche industry news site that staff at the target company read every day, planting malware there to infect those visitors. Which attack is described?",
   "o": [
    "Vishing",
    "Dumpster diving",
    "Watering hole attack",
    "Password spraying"
   ],
   "a": 2,
   "e": "In a watering hole attack, the adversary compromises a third-party website the intended victims are known to frequent, then waits for them to be infected. It is indirect: the target is reached through a trusted site rather than contacted directly.",
   "d": 2
  },
  {
   "id": 30,
   "t": "other-social-engineering-attacks",
   "x": "During an election, a network of coordinated fake social media accounts spreads deliberately false narratives to sway public opinion and undermine trust in an institution. Which concept does this represent?",
   "o": [
    "A tailgating attempt",
    "An evil twin",
    "A shoulder-surfing attempt",
    "A disinformation campaign"
   ],
   "a": 3,
   "e": "Disinformation is deliberately false information spread to deceive or manipulate, frequently through coordinated fake accounts that shape opinion and erode trust. It differs from misinformation, which is false information shared without the intent to deceive.",
   "d": 2
  },
  {
   "id": 31,
   "t": "sql-injection",
   "x": "A web application inserts login-form input directly into a database query. An attacker types ' OR '1'='1 into the username field and is logged in without valid credentials. Which vulnerability was exploited?",
   "o": [
    "Cross-site scripting",
    "SQL injection",
    "Buffer overflow",
    "Cross-site request forgery"
   ],
   "a": 1,
   "e": "SQL injection happens when unsanitized input is placed into a database query, letting an attacker change the query's logic; ' OR '1'='1 makes the condition evaluate as true and bypasses authentication. Cross-site scripting instead injects code that runs in a victim's browser.",
   "d": 2
  },
  {
   "id": 32,
   "t": "sql-injection",
   "x": "Which coding practice most effectively prevents SQL injection by ensuring that user-supplied input cannot be executed as part of a database command?",
   "o": [
    "Increasing the database server's memory",
    "Encrypting the network connection with TLS",
    "Using parameterized queries",
    "Renaming the database tables"
   ],
   "a": 2,
   "e": "Parameterized queries, also known as prepared statements, separate the SQL code from user-supplied values so input cannot alter the query's structure. Transport encryption with TLS (Transport Layer Security) or added memory does nothing to stop injection, because the malicious input still reaches the query unchanged.",
   "d": 2
  },
  {
   "id": 33,
   "t": "cross-site-scripting",
   "x": "An attacker submits a forum comment containing malicious code that the server saves. When other users open the page, the code runs in their browsers and steals their session cookies. Which attack is this?",
   "o": [
    "SQL injection",
    "DNS poisoning",
    "ARP spoofing",
    "Stored cross-site scripting"
   ],
   "a": 3,
   "e": "In stored, or persistent, cross-site scripting, the malicious script is saved on the server, so it executes for every user who loads the affected page, commonly to hijack sessions. SQL injection targets the database rather than other users' browsers.",
   "d": 2
  },
  {
   "id": 34,
   "t": "cross-site-scripting",
   "x": "Which control most directly mitigates cross-site scripting by neutralizing script characters before user-supplied content is rendered on a page?",
   "o": [
    "Requiring HTTPS on all pages",
    "Encoding output before it is displayed",
    "Enforcing account lockout thresholds",
    "Disabling unused switch ports"
   ],
   "a": 1,
   "e": "Cross-site scripting is countered by validating input and encoding output so characters like < and > are shown as text instead of running as script. HTTPS (Hypertext Transfer Protocol Secure) protects data in transit but does nothing to stop a script the server itself sends to the browser.",
   "d": 2
  },
  {
   "id": 35,
   "t": "zero-day-vulnerabilities",
   "x": "What defines a zero-day vulnerability?",
   "o": [
    "A flaw that affects only systems older than one year",
    "A flaw that requires physical access to exploit",
    "A flaw exploited before the vendor has released a fix",
    "A flaw that has been patched but not yet deployed"
   ],
   "a": 2,
   "e": "A zero-day vulnerability is one that is unknown to the vendor or has no available patch, so defenders have had zero days to prepare when it is first exploited. The last option describes a patch-deployment gap rather than a zero-day.",
   "d": 2
  },
  {
   "id": 36,
   "t": "zero-day-vulnerabilities",
   "x": "A newly discovered exploit is actively compromising systems, and no vendor patch or detection update exists yet. Why do antivirus tools that depend on known threat definitions struggle to catch it?",
   "o": [
    "The exploit encrypts itself to evade all scanning",
    "No signature exists yet to match the new threat",
    "Antivirus tools only scan files during scheduled downtime",
    "The threat definitions must be purchased separately"
   ],
   "a": 1,
   "e": "A zero-day is unknown to defenders, so no antivirus signature or detection rule has been written for it, and definition-based tools have nothing to match against. Behavior-based or anomaly detection is more effective against previously unseen threats.",
   "d": 2
  },
  {
   "id": 37,
   "t": "supply-chain-vulnerabilities",
   "x": "Attackers insert malicious code into a trusted software vendor's update, which is then digitally signed and automatically pushed to thousands of customers who install it. Which type of vulnerability does this illustrate?",
   "o": [
    "Insider threat",
    "Race condition",
    "Misconfiguration",
    "Supply chain vulnerability"
   ],
   "a": 3,
   "e": "A supply chain vulnerability arises when a trusted third party, such as a software vendor, code library, or hardware supplier, is compromised, letting attackers reach that party's customers. Because the update was legitimately signed and trusted, customers installed the malicious code without suspicion.",
   "d": 2
  },
  {
   "id": 38,
   "t": "supply-chain-vulnerabilities",
   "x": "Which practice most effectively reduces the risk that a compromised third-party supplier introduces vulnerabilities into an organization?",
   "o": [
    "Conducting security assessments of vendors before integration",
    "Requiring longer passwords for internal user accounts",
    "Increasing the frequency of full data backups",
    "Deploying additional guest wireless networks"
   ],
   "a": 0,
   "e": "Vendor due diligence, including assessing a supplier's security posture, reviewing a software bill of materials (SBOM), and verifying code signing before integration, directly addresses supply chain risk. Stronger internal passwords or more frequent backups do not evaluate the trustworthiness of third parties.",
   "d": 2
  },
  {
   "id": 39,
   "t": "an-overview-of-malware",
   "x": "A hospital's file server suddenly shows every document renamed with a .locked extension, and a note left on the desktop demands payment in cryptocurrency to restore access. Which type of malware is responsible?",
   "o": [
    "Worm",
    "Ransomware",
    "Rootkit",
    "Spyware"
   ],
   "a": 1,
   "e": "Ransomware encrypts a victim's files and demands payment, usually in cryptocurrency, in exchange for the decryption key. The renamed, inaccessible files plus an extortion note are its signature, whereas a worm spreads between systems without extortion and spyware quietly harvests data instead of locking files.",
   "d": 2
  },
  {
   "id": 40,
   "t": "an-overview-of-malware",
   "x": "Which characteristic distinguishes a worm from a traditional virus?",
   "o": [
    "It attaches itself to a host file and runs only when that file is opened",
    "It disguises itself as a legitimate application to trick the user",
    "It self-replicates and spreads across a network without user interaction",
    "It encrypts user files and demands a ransom for their recovery"
   ],
   "a": 2,
   "e": "A worm is self-replicating malware that propagates from system to system on its own by exploiting network weaknesses, with no user action required. A traditional virus instead attaches to a host file and runs only when a user opens or executes that file.",
   "d": 2
  },
  {
   "id": 41,
   "t": "an-overview-of-malware",
   "x": "An incident report states that malware ran entirely in memory, abusing PowerShell and other built-in system tools while writing no executable to disk. Which term best describes this technique?",
   "o": [
    "Boot sector virus",
    "Fileless malware",
    "Logic bomb",
    "Bloatware"
   ],
   "a": 1,
   "e": "Fileless malware runs in system memory and abuses trusted, built-in tools such as PowerShell (a Windows scripting framework), leaving no file on disk for signature-based antivirus to detect. A boot sector virus, by contrast, does write itself onto the disk.",
   "d": 2
  },
  {
   "id": 42,
   "t": "other-malware-types",
   "x": "Two weeks after a database administrator was terminated, a hidden script activated at midnight and deleted production tables. Investigators found the code was set to trigger on a specific date. Which type of malware was used?",
   "o": [
    "Rootkit",
    "Keylogger",
    "Worm",
    "Logic bomb"
   ],
   "a": 3,
   "e": "A logic bomb is malicious code that stays dormant until a defined condition is met, such as a specific date, time, or event, and then executes its payload. The date-triggered destruction tied to a disgruntled insider is a classic logic bomb; a worm would instead try to spread to other hosts.",
   "d": 2
  },
  {
   "id": 43,
   "t": "other-malware-types",
   "x": "Malware on a compromised server modifies the operating system kernel so that its files and processes never appear in directory listings or the process table. Which type of malware behaves this way?",
   "o": [
    "Rootkit",
    "Ransomware",
    "Adware",
    "Trojan horse"
   ],
   "a": 0,
   "e": "A rootkit embeds itself deep in the operating system, often at the kernel level, to conceal its files, processes, and activity from users and security tools. That stealth is its defining trait, unlike a Trojan horse, which simply masquerades as legitimate software without necessarily hiding once running.",
   "d": 2
  },
  {
   "id": 44,
   "t": "other-malware-types",
   "x": "A finance employee's banking credentials were stolen even though the password was never shared with anyone. Forensics found a program recording every character the user typed and transmitting the log to an external server. Which malware type matches this finding?",
   "o": [
    "Bloatware",
    "Logic bomb",
    "Keylogger",
    "Rootkit"
   ],
   "a": 2,
   "e": "A keylogger records the user's keystrokes, including passwords and other typed input, and usually sends the captured data to an attacker. That explains how the credentials were stolen without the user disclosing them; bloatware is merely unwanted preinstalled software with no data-theft function.",
   "d": 2
  },
  {
   "id": 45,
   "t": "denial-of-service",
   "x": "An online retailer's website becomes unreachable during a major sale as requests flood in simultaneously from tens of thousands of compromised devices around the world. Which type of attack is occurring?",
   "o": [
    "Structured query language injection",
    "Distributed denial-of-service attack",
    "Man-in-the-middle interception attack",
    "Privilege escalation exploit attempt"
   ],
   "a": 1,
   "e": "A distributed denial-of-service (DDoS) attack uses many compromised systems, typically a botnet, to overwhelm a target with traffic so legitimate users cannot reach it. The flood of simultaneous requests from many distributed sources is the giveaway; a single-source flood would be an ordinary denial-of-service attack.",
   "d": 2
  },
  {
   "id": 46,
   "t": "denial-of-service",
   "x": "An attacker sends small DNS queries with a spoofed source address so that the large responses are all directed at the victim, generating far more traffic than the attacker sent. What is this technique called?",
   "o": [
    "A dictionary attack",
    "A watering hole attack",
    "A downgrade attack",
    "An amplification attack"
   ],
   "a": 3,
   "e": "An amplification (or reflection) attack spoofs the victim's address in requests sent to servers that return much larger responses, such as DNS (Domain Name System) or NTP (Network Time Protocol), so a small amount of attacker bandwidth produces a large flood aimed at the victim. The size gap between request and response is what amplifies the attack.",
   "d": 2
  },
  {
   "id": 47,
   "t": "on-path-attacks",
   "x": "On a local network, an attacker sends forged replies that map the default gateway's IP address to the attacker's own MAC address, so traffic meant for the gateway flows through the attacker first. Which technique enables this?",
   "o": [
    "ARP poisoning",
    "DNS sinkholing",
    "Port mirroring",
    "MAC flooding"
   ],
   "a": 0,
   "e": "Address Resolution Protocol (ARP) poisoning sends spoofed ARP replies so victims associate the gateway's IP address with the attacker's MAC address, inserting the attacker into the traffic path. It is a common way to establish an on-path (man-in-the-middle) position on a local network.",
   "d": 2
  },
  {
   "id": 48,
   "t": "on-path-attacks",
   "x": "Which statement best describes an on-path attack?",
   "o": [
    "The attacker floods a target with traffic until its services become unavailable to users",
    "The attacker tries many stolen username and password pairs against a login page",
    "The attacker secretly positions themselves between two parties to intercept or alter their communication",
    "The attacker embeds malicious script into a trusted website viewed by other users"
   ],
   "a": 2,
   "e": "An on-path attack, formerly called man-in-the-middle, places the attacker within the communication flow between two endpoints so they can eavesdrop on or modify the data in transit. The other options describe a denial-of-service flood, a credential-stuffing password attack, and cross-site scripting.",
   "d": 2
  },
  {
   "id": 49,
   "t": "password-attacks",
   "x": "An attacker attempts to sign in to hundreds of different user accounts, trying only the single common password 'Winter2026!' against each one to avoid triggering account lockouts. What is this attack called?",
   "o": [
    "Password spraying",
    "Brute force",
    "Rainbow table",
    "Pass-the-hash"
   ],
   "a": 0,
   "e": "Password spraying tries one or a few common passwords across many different accounts, staying below each account's lockout threshold instead of hammering a single account. A brute-force attack tries many passwords against one account and is far more likely to trigger lockout.",
   "d": 2
  },
  {
   "id": 50,
   "t": "password-attacks",
   "x": "Which condition allows an attacker to carry out an offline brute-force attack against a set of captured password hashes?",
   "o": [
    "The target account has account lockout set to trigger after three failed attempts",
    "The login page enforces multi-factor authentication for every sign-in attempt",
    "The password database is stored only on an air-gapped server with no network access",
    "The attacker has obtained a copy of the stored password data and can test guesses on their own hardware"
   ],
   "a": 3,
   "e": "An offline attack requires the attacker to already hold the password data, so they can test billions of guesses on their own hardware with no lockout counter or rate limit to slow them down. Online defenses such as account lockout and multi-factor authentication (MFA) only apply when guessing against the live authentication system.",
   "d": 2
  },
  {
   "id": 51,
   "t": "password-attacks",
   "x": "A web application stores its users' passwords as plain unencrypted text. From a security standpoint, why is this practice dangerous?",
   "o": [
    "The passwords will consume significantly more storage space than hashed values",
    "Anyone who gains access to that store immediately obtains every user's usable password",
    "Users will be unable to reset their passwords through the self-service portal",
    "The application will be unable to enforce a minimum password length policy"
   ],
   "a": 1,
   "e": "Storing passwords in plaintext means a single breach of that store exposes every credential in directly usable form. Best practice is to keep only a salted hash of each password, so a stolen database yields values that still must be cracked and identical passwords do not produce identical stored entries.",
   "d": 2
  },
  {
   "id": 52,
   "t": "indicators-of-compromise",
   "x": "A monitoring system flags that one user account signed in from an office in Chicago and then, eight minutes later, authenticated successfully from an IP address in Singapore. Which indicator of compromise does this represent?",
   "o": [
    "Out-of-cycle logging",
    "Resource consumption",
    "Impossible travel",
    "Missing logs"
   ],
   "a": 2,
   "e": "Impossible travel is a login pattern showing two authentications from locations so far apart that one person could not physically travel between them in the elapsed time, a strong sign of stolen or shared credentials. It is surfaced by correlating login geolocation with timestamps.",
   "d": 2
  },
  {
   "id": 53,
   "t": "indicators-of-compromise",
   "x": "While investigating a suspected breach, an analyst finds that the security records for the two-hour window around the intrusion have been wiped, while entries before and after that window remain intact. Which indicator of compromise is this?",
   "o": [
    "Missing logs",
    "Impossible travel",
    "Concurrent session usage",
    "Blocked content"
   ],
   "a": 0,
   "e": "Deleted or missing logs, especially a gap that lines up with suspected malicious activity, is an indicator of compromise, because attackers often clear records to hide their actions. The surrounding entries remaining intact points to deliberate tampering rather than a routine logging failure.",
   "d": 2
  },
  {
   "id": 54,
   "t": "hardening-techniques",
   "x": "A vulnerability scan of a web server reports that Telnet, FTP, and an unused database listener are all reachable, though the application needs none of them. Which hardening step most directly reduces this attack surface?",
   "o": [
    "Increase the server's physical memory allocation",
    "Enable verbose logging on the web application",
    "Schedule more frequent full-disk backups",
    "Disable the protocols the application does not use"
   ],
   "a": 3,
   "e": "Disabling protocols and services the system does not need, and closing their ports, removes listening entry points an attacker could reach and directly shrinks the attack surface. Backups and logging are useful controls but do nothing to reduce the number of exposed services.",
   "d": 2
  },
  {
   "id": 55,
   "t": "hardening-techniques",
   "x": "A security team wants endpoint software that goes beyond matching known malware signatures to also watch process behavior, record host telemetry, and let analysts investigate and isolate threats on the machine. Which solution fits this need?",
   "o": [
    "Endpoint detection and response",
    "Host-based firewall configuration",
    "Full-disk encryption software",
    "Trusted platform module chip"
   ],
   "a": 0,
   "e": "Endpoint detection and response (EDR) goes beyond signature-based antivirus by continuously watching endpoint behavior, recording telemetry, and giving analysts the ability to investigate and contain threats on the host. A host-based firewall only filters network connections and cannot perform that investigation.",
   "d": 2
  },
  {
   "id": 56,
   "t": "hardening-techniques",
   "x": "Before deploying a batch of new IP cameras, a technician logs into each device and replaces the manufacturer's built-in administrator username and password. Which hardening technique is being applied?",
   "o": [
    "Applying full-disk encryption",
    "Changing default credentials",
    "Configuring a screened subnet",
    "Enabling a host-based firewall"
   ],
   "a": 1,
   "e": "Many devices ship with well-known default administrator credentials that attackers try first, so replacing them during deployment is a basic but essential hardening step. Full-disk encryption and firewalls address other risks but do not remove the danger of published default logins.",
   "d": 2
  },
  {
   "id": 57,
   "t": "cloud-infrastructures",
   "x": "An organization moves its corporate email to a software as a service provider. During a review, the team debates who is accountable for deciding which employees can open mailboxes and for enforcing password strength. Under the shared responsibility model, who holds that responsibility?",
   "o": [
    "The provider, because it owns and patches the underlying application",
    "The customer, who administers user accounts and identity in every service model",
    "The provider, since it controls the physical data center hosting the service",
    "A third-party auditor designated in the service contract"
   ],
   "a": 1,
   "e": "Under the shared responsibility model, identity and access management stays with the customer across infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS); the provider secures the platform and physical facility but never decides who your users are or how they authenticate. The provider patching the application does not cover account provisioning.",
   "d": 3
  },
  {
   "id": 58,
   "t": "cloud-infrastructures",
   "x": "Which practice defines virtual networks, servers, and firewall rules in version-controlled template files so that environments can be provisioned the same way every time?",
   "o": [
    "Infrastructure as code",
    "Serverless computing",
    "Continuous integration",
    "Vertical scaling"
   ],
   "a": 0,
   "e": "Infrastructure as code (IaC) describes networks, servers, and security rules in machine-readable template files kept in version control, so environments are built consistently and changes can be peer-reviewed. Continuous integration automates building and testing application code, not the provisioning of infrastructure.",
   "d": 3
  },
  {
   "id": 59,
   "t": "cloud-infrastructures",
   "x": "A development team deploys application functions to a provider that runs each function on demand with no customer-managed servers. What is one security implication of this serverless model?",
   "o": [
    "The customer must harden the underlying server operating system before each run",
    "Perimeter firewalls become unnecessary once functions run in the cloud",
    "The provider patches the operating system, so the customer does not manage the host",
    "Input validation can be skipped because the functions are short-lived"
   ],
   "a": 2,
   "e": "In a serverless, or Function as a Service, model the provider owns and patches the operating system and runtime, so that maintenance burden shifts away from the customer. The customer still writes secure code and validates input; serverless does not remove application-layer defenses.",
   "d": 3
  },
  {
   "id": 60,
   "t": "network-infrastructure-concepts",
   "x": "Which network design has no wired, wireless, or shared connection to any other network, providing complete physical isolation?",
   "o": [
    "Screened subnet",
    "Virtual LAN segmentation",
    "Reverse proxy",
    "Air-gapped network"
   ],
   "a": 3,
   "e": "An air gap physically separates a network so there is no electronic path to other networks, a common choice for sensitive industrial or classified systems. A screened subnet and virtual LANs (VLANs) provide only logical separation over shared physical infrastructure, so they can be bridged and do not meet a true isolation requirement.",
   "d": 3
  },
  {
   "id": 61,
   "t": "network-infrastructure-concepts",
   "x": "In software-defined networking, which plane makes the centralized forwarding decisions that the data plane then carries out?",
   "o": [
    "The control plane",
    "The data plane",
    "The physical plane",
    "The session plane"
   ],
   "a": 0,
   "e": "In software-defined networking (SDN), the control plane decides how traffic should be forwarded and is centralized, while the data plane is the switch hardware that actually moves the packets. Separating them lets administrators reprogram network behavior from a single point.",
   "d": 3
  },
  {
   "id": 62,
   "t": "network-infrastructure-concepts",
   "x": "A hospital keeps medical devices and guest Wi-Fi on the same physical switches but must stop the two groups from reaching each other at Layer 2. Which technique achieves this without adding separate switches?",
   "o": [
    "Port mirroring",
    "Link aggregation",
    "VLANs",
    "Spanning tree"
   ],
   "a": 2,
   "e": "Virtual LANs (VLANs) logically split one physical switch infrastructure into separate broadcast domains, so device groups cannot reach each other at Layer 2 without a router or firewall between them. Port mirroring only copies traffic to a monitor port and does not isolate hosts.",
   "d": 3
  },
  {
   "id": 63,
   "t": "secure-infrastructures",
   "x": "A security team configures an inline appliance and must choose its behavior if it loses power. Compliance rules require that no traffic pass uninspected during a fault. Which failure mode meets this requirement?",
   "o": [
    "Fail-open",
    "Fail-closed",
    "Fail-safe bypass",
    "Active-active failover"
   ],
   "a": 1,
   "e": "A fail-closed, or fail-secure, design blocks all traffic when the device fails, ensuring nothing passes uninspected, which fits regulated or high-security environments. Fail-open keeps traffic flowing to preserve availability, which is the opposite priority.",
   "d": 3
  },
  {
   "id": 64,
   "t": "secure-infrastructures",
   "x": "Disabling unused services, closing open ports, and removing default accounts on a server all serve to reduce what?",
   "o": [
    "The recovery point objective",
    "The false positive rate",
    "The blast radius",
    "The attack surface"
   ],
   "a": 3,
   "e": "The attack surface is the sum of all points where an attacker could try to gain entry, so disabling services, closing ports, and removing default accounts all shrink it. Blast radius refers to how far damage spreads after a compromise, which segmentation limits rather than service hardening.",
   "d": 3
  },
  {
   "id": 65,
   "t": "intrusion-prevention",
   "x": "An intrusion prevention system detects threats only by comparing traffic against a database of previously catalogued attack indicators. What is the main limitation of this detection method?",
   "o": [
    "It relies on a learned network baseline that must be trained first",
    "It flags any deviation from normal behavior as an attack",
    "It cannot detect a brand-new attack that has no matching entry yet",
    "It requires the appliance to run in passive monitoring mode"
   ],
   "a": 2,
   "e": "Signature-based detection compares traffic to a database of known indicators, so a zero-day attack with no matching entry slips through until a signature is written. Anomaly-based detection, which learns a baseline and flags deviations, is the technique better suited to catching novel attacks.",
   "d": 3
  },
  {
   "id": 66,
   "t": "intrusion-prevention",
   "x": "In intrusion detection, an alert raised on benign activity that the system wrongly treats as malicious is known as what?",
   "o": [
    "False positives",
    "False negatives",
    "True positives",
    "True negatives"
   ],
   "a": 0,
   "e": "A false positive is an alert on harmless activity that the system incorrectly flags as an attack, common with anomaly-based detection until the baseline is tuned. A false negative is the opposite: a real attack that goes unreported.",
   "d": 3
  },
  {
   "id": 67,
   "t": "intrusion-prevention",
   "x": "A network engineer notices one detection appliance wired directly into the traffic path while a second only receives copied traffic from a switch mirror port. Why must the first appliance sit directly in the traffic path?",
   "o": [
    "Mirror ports cannot forward broadcast traffic to sensors",
    "It must sit inline to drop malicious packets before they reach the target",
    "Inline placement is needed so it can log traffic for later review",
    "The traffic path is required to decrypt TLS sessions automatically"
   ],
   "a": 1,
   "e": "An intrusion prevention system (IPS) must be inline so it can drop or reset malicious packets before they arrive at the target. An intrusion detection system (IDS) can watch a copy of traffic from a mirror port or tap because it only raises alerts and does not need to interrupt the flow.",
   "d": 3
  },
  {
   "id": 68,
   "t": "network-appliances",
   "x": "Administrators are barred from connecting directly from their workstations to servers in a protected zone. They first log in to one hardened, heavily monitored host and open all administrative sessions from there. What is that host called?",
   "o": [
    "A load balancer",
    "A reverse proxy",
    "A honeypot",
    "A jump server"
   ],
   "a": 3,
   "e": "A jump server, or jump box, is a single hardened and closely audited host that administrators connect through to reach devices in a secure zone, concentrating and logging all administrative access. A reverse proxy fronts servers for external clients and is not an administrative pivot point.",
   "d": 3
  },
  {
   "id": 69,
   "t": "network-appliances",
   "x": "Which appliance sits in front of internal web servers, accepts inbound client connections, often terminates TLS, and forwards the requests to the correct back-end server?",
   "o": [
    "Reverse proxy",
    "Forward proxy",
    "VPN concentrator",
    "Network tap"
   ],
   "a": 0,
   "e": "A reverse proxy sits in front of web servers, accepting client connections, frequently terminating TLS, and passing requests to back-end servers, which adds security and load distribution. A forward proxy does the opposite, sitting in front of internal clients to control their outbound access.",
   "d": 3
  },
  {
   "id": 70,
   "t": "network-appliances",
   "x": "A load balancer spreads traffic across three web servers, but a shopping-cart application fails when a user's later requests land on a different server than the one holding their cart. Which load balancer feature keeps a user pinned to one server?",
   "o": [
    "Round-robin scheduling",
    "Session persistence",
    "Least-connection scheduling",
    "SSL offloading"
   ],
   "a": 1,
   "e": "Session persistence, also called sticky sessions or source affinity, ties a client to the same back-end server for the life of their session, which stateful applications like shopping carts need. Round-robin simply rotates each new connection and would scatter a user's requests across servers.",
   "d": 3
  },
  {
   "id": 71,
   "t": "firewall-types",
   "x": "Which firewall type is designed to inspect HTTP and HTTPS traffic at Layer 7 and block attacks such as SQL injection and cross-site scripting?",
   "o": [
    "A stateless packet-filtering firewall",
    "A network layer firewall",
    "A web application firewall",
    "A host-based firewall"
   ],
   "a": 2,
   "e": "A web application firewall (WAF) inspects application-layer web traffic and blocks web-specific attacks such as SQL injection and cross-site scripting (XSS). Packet-filtering and network-layer firewalls operate at Layers 3 and 4 and do not understand application payloads.",
   "d": 3
  },
  {
   "id": 72,
   "t": "firewall-types",
   "x": "Which firewall type can identify traffic by the specific application in use rather than only by port number, and typically integrates intrusion prevention and deep packet inspection?",
   "o": [
    "Stateless firewall",
    "Screened host firewall",
    "Circuit-level gateway",
    "Next-generation firewall"
   ],
   "a": 3,
   "e": "A next-generation firewall (NGFW) works at Layer 7, controlling traffic by application rather than only by port, and bundles capabilities such as intrusion prevention and deep packet inspection. A stateless firewall filters only on addresses and ports and cannot distinguish applications that share a port.",
   "d": 3
  },
  {
   "id": 73,
   "t": "secure-communication",
   "x": "When an IPsec connection is configured in tunnel mode rather than transport mode, what additional protection does it provide?",
   "o": [
    "The original IP header is encrypted along with the payload",
    "Data integrity is verified using a message authentication code",
    "The connection negotiates keys using a pre-shared secret",
    "Payload contents are compressed before transmission"
   ],
   "a": 0,
   "e": "In tunnel mode, IPsec (Internet Protocol Security) encapsulates and encrypts the entire original packet, including its IP header, and prepends a new outer header, hiding the internal addressing. Transport mode protects only the payload and leaves the original IP header exposed, which is why site-to-site VPNs typically use tunnel mode. Integrity checks and key negotiation happen in both modes, so they are not what distinguishes tunnel mode.",
   "d": 3
  },
  {
   "id": 74,
   "t": "secure-communication",
   "x": "A remote employee needs to reach an internal web application from a hotel kiosk where installing any software is prohibited. Which remote access solution best fits this constraint?",
   "o": [
    "An IPsec VPN configured in tunnel mode",
    "A clientless SSL/TLS VPN accessed through the browser",
    "A full device VPN client installed on the endpoint",
    "A site-to-site VPN linking the two networks"
   ],
   "a": 1,
   "e": "A clientless SSL/TLS (Secure Sockets Layer / Transport Layer Security) VPN (virtual private network) runs entirely inside a standard web browser over HTTPS, so nothing has to be installed on the endpoint. IPsec and full device clients both require installed software, and a site-to-site VPN connects fixed networks rather than an individual roaming user.",
   "d": 3
  },
  {
   "id": 75,
   "t": "secure-communication",
   "x": "Which framework combines wide-area network connectivity with cloud-delivered security functions such as a secure web gateway and zero trust controls into a single integrated offering?",
   "o": [
    "Software-defined wide area network",
    "Network access control quarantine",
    "Virtual private network concentrator",
    "Secure Access Service Edge"
   ],
   "a": 3,
   "e": "SASE (Secure Access Service Edge) merges wide-area networking with cloud-delivered security functions such as secure web gateway, firewall, and zero trust network access into one integrated service. SD-WAN (software-defined wide area network) optimizes connectivity but does not by itself bundle the full security stack, and the other options are single-purpose components.",
   "d": 3
  },
  {
   "id": 76,
   "t": "data-types-and-classifications",
   "x": "A hospital stores patients' names alongside their diagnoses and treatment histories. Under common data classification schemes, this combined record is best categorized as which data type?",
   "o": [
    "Personally identifiable information",
    "Protected health information",
    "Intellectual property records",
    "Trade secret information"
   ],
   "a": 1,
   "e": "Protected health information (PHI) is health data that can be linked to a specific individual, which is exactly what diagnoses and treatment histories tied to a named patient represent. Personally identifiable information (PII) is a broader identity category; because this data is specifically medical, PHI is the more precise classification.",
   "d": 3
  },
  {
   "id": 77,
   "t": "data-types-and-classifications",
   "x": "Cardholder numbers handled by a retailer must be protected according to the Payment Card Industry Data Security Standard. Which data type classification most accurately describes information governed by an external standard or law like this?",
   "o": [
    "Regulated data",
    "Public data",
    "Trade secret data",
    "Non-human-readable data"
   ],
   "a": 0,
   "e": "Regulated data is information whose handling is dictated by an external law, standard, or contractual framework, such as the Payment Card Industry Data Security Standard (PCI DSS) for cardholder data. Public data carries no such restrictions, while trade secret and non-human-readable describe unrelated data types.",
   "d": 3
  },
  {
   "id": 78,
   "t": "data-types-and-classifications",
   "x": "An organization labels its internal product designs so only employees under a nondisclosure agreement may view them, while its press releases are marked freely shareable. Which classification applies to the freely shareable material?",
   "o": [
    "Confidential",
    "Restricted",
    "Public",
    "Critical"
   ],
   "a": 2,
   "e": "Public (or unclassified) data is information approved for open release, like press releases, so its exposure causes no harm to the organization. Confidential, restricted, and critical all denote increasing sensitivity and tighter access limits, the opposite of freely shareable material.",
   "d": 3
  },
  {
   "id": 79,
   "t": "protecting-data",
   "x": "A payment processor replaces stored card numbers with randomly generated surrogate values that have no mathematical relationship to the originals and are meaningless if stolen. Which technique is described?",
   "o": [
    "Encryption",
    "Tokenization",
    "Hashing",
    "Data masking"
   ],
   "a": 1,
   "e": "Tokenization substitutes sensitive values with unrelated surrogate tokens kept in a separate vault, so a stolen token reveals nothing and has no mathematical link to the original data. Encryption is reversible with a key and hashing is mathematically derived from the input, so neither fits the 'no relationship' description, and masking only obscures portions of visible data.",
   "d": 3
  },
  {
   "id": 80,
   "t": "protecting-data",
   "x": "Which of the following describes protecting data in use, as opposed to data at rest or data in transit?",
   "o": [
    "Securing information while it is actively loaded in memory and being processed",
    "Securing information stored on a disk or backup tape",
    "Securing information as it moves across a network link",
    "Securing information archived in long-term cold storage"
   ],
   "a": 0,
   "e": "Data in use is information actively loaded in system memory or being processed by an application, which calls for protections such as secure enclaves or memory encryption. Data at rest sits in storage and data in transit moves across a network, so the other choices describe those two states instead.",
   "d": 3
  },
  {
   "id": 81,
   "t": "protecting-data",
   "x": "A multinational company must ensure that European customers' personal records remain physically stored within the European Union to satisfy regional law. Which concept is the company addressing?",
   "o": [
    "Data masking policies",
    "Full-disk encryption",
    "Data loss prevention",
    "Data sovereignty"
   ],
   "a": 3,
   "e": "Data sovereignty is the principle that data is subject to the laws of the country or region where it is collected or stored, which drives requirements to keep European Union residents' records inside the EU. Masking, encryption, and data loss prevention are protective techniques, not the legal-jurisdiction concept at issue.",
   "d": 3
  },
  {
   "id": 82,
   "t": "resiliency",
   "x": "A company maintains an alternate facility with live, running systems and continuously replicated data so operations can resume within minutes of a disaster. Which recovery site type is this?",
   "o": [
    "Cold site",
    "Hot site",
    "Warm site",
    "Mobile recovery site"
   ],
   "a": 1,
   "e": "A hot site is a fully operational alternate facility with running hardware and continuously replicated data, allowing recovery in minutes. A warm site has equipment but still needs data loaded and configuration finished, and a cold site provides only space and utilities, so both take far longer to bring online.",
   "d": 3
  },
  {
   "id": 83,
   "t": "resiliency",
   "x": "An online service places redundant application servers in two data centers located in different regions so a regional power outage or natural disaster cannot take the whole service offline. Which resiliency strategy does this represent?",
   "o": [
    "Vertical scaling",
    "In-rack clustering",
    "Geographic dispersion",
    "Single-site load balancing"
   ],
   "a": 2,
   "e": "Geographic dispersion places redundant systems in physically separate regions so a localized event, such as a regional outage or natural disaster, cannot disable the entire service. Clustering or load balancing within one location improves availability there but still fails if that whole site is lost, and vertical scaling only adds resources to a single machine.",
   "d": 3
  },
  {
   "id": 84,
   "t": "resiliency",
   "x": "During a utility power failure, which component supplies immediate battery-backed power to keep servers running for the short interval before a generator starts and stabilizes?",
   "o": [
    "Uninterruptible power supply",
    "Managed power distribution unit",
    "Redundant array of disks",
    "Automatic transfer switch"
   ],
   "a": 0,
   "e": "An uninterruptible power supply (UPS) uses batteries to deliver power the instant utility power drops, bridging the seconds or minutes until a generator spins up and takes over the long-term load. A power distribution unit only distributes power, an automatic transfer switch selects the source without storing energy, and RAID (redundant array of independent disks) concerns storage, not power.",
   "d": 3
  },
  {
   "id": 85,
   "t": "backups",
   "x": "A backup job copies only the data that has changed since the last backup of any type, and it clears the archive bit each time it runs. Which backup type is described?",
   "o": [
    "Full backup",
    "Differential backup",
    "Incremental backup",
    "Snapshot backup"
   ],
   "a": 2,
   "e": "An incremental backup captures only data changed since the last backup of any kind and clears the archive bit, making backups fast but restores slower because every increment since the last full backup must be applied. A differential backup instead copies everything changed since the last full backup and leaves the archive bit set.",
   "d": 3
  },
  {
   "id": 86,
   "t": "backups",
   "x": "To follow the 3-2-1 backup rule, an administrator keeps three copies of critical data. Beyond the number of copies, what else does the rule require?",
   "o": [
    "Store the copies on two different media types, with one copy kept offsite",
    "Encrypt two of the copies and leave one in plaintext for fast recovery",
    "Test two copies monthly and retain one copy for a full year",
    "Replicate two copies in real time and snapshot the remaining one nightly"
   ],
   "a": 0,
   "e": "The 3-2-1 rule calls for three copies of the data, stored on two different types of media, with at least one copy kept offsite so a site-wide disaster cannot destroy every copy. The other options invent requirements around encryption, testing cadence, or replication timing that the rule does not specify.",
   "d": 3
  },
  {
   "id": 87,
   "t": "secure-baselines",
   "x": "During configuration management, a security team documents the minimum acceptable security settings that every new server build must meet before it goes into production. What is this documented standard called?",
   "o": [
    "A security baseline",
    "A change advisory board",
    "A recovery point objective",
    "A memorandum of understanding"
   ],
   "a": 0,
   "e": "A secure baseline is the documented set of minimum security settings a system must meet; it is established, deployed to systems, and then maintained as threats change. A change advisory board reviews proposed changes, and a recovery point objective is a backup metric, not a configuration standard.",
   "d": 4
  },
  {
   "id": 88,
   "t": "secure-baselines",
   "x": "After a secure baseline has been deployed across a fleet of workstations, several machines gradually drift from the approved configuration as users install software and change settings. Which phase of the baseline lifecycle is responsible for detecting and correcting this drift?",
   "o": [
    "Establishing the baseline",
    "Deploying the baseline",
    "Maintaining the baseline",
    "Decommissioning the baseline"
   ],
   "a": 2,
   "e": "The secure baseline lifecycle is establish, deploy, and maintain. Maintaining uses continuous monitoring to catch configuration drift and reapply the approved settings so systems stay compliant. Deploying only pushes the baseline out initially and does not address later drift.",
   "d": 4
  },
  {
   "id": 89,
   "t": "hardening-targets",
   "x": "Which action is a fundamental hardening step when a new network switch is first taken out of the box?",
   "o": [
    "Enable the setup wizard on the WAN port",
    "Broadcast the management VLAN over all ports",
    "Restore the factory configuration weekly",
    "Change the default administrator credentials"
   ],
   "a": 3,
   "e": "Changing the default administrator credentials is a core hardening step because published default passwords let an attacker log in immediately. Enabling the setup wizard on the WAN, broadcasting the management VLAN, and restoring factory settings all increase exposure instead of reducing it.",
   "d": 4
  },
  {
   "id": 90,
   "t": "hardening-targets",
   "x": "A security administrator hardening a Linux web server runs a port scan that reveals Telnet, FTP, and a database daemon the application does not use. Which hardening action most directly shrinks the host's attack surface?",
   "o": [
    "Enlarge the server's swap partition",
    "Rotate the TLS certificate on the web service",
    "Turn off the unneeded listeners and close their ports",
    "Schedule more frequent full backups"
   ],
   "a": 2,
   "e": "Disabling unused services such as Telnet and FTP and the idle database, then closing their listening ports, removes entry points and directly reduces the attack surface. Rotating a certificate, resizing swap, and scheduling backups do not remove the exposed services.",
   "d": 4
  },
  {
   "id": 91,
   "t": "hardening-targets",
   "x": "An organization is hardening a fleet of IoT sensors that ship with a single hard-coded manufacturer account and have too little processing power to run an endpoint agent. Which control best compensates for the difficulty of hardening the devices themselves?",
   "o": [
    "Installing antivirus on each sensor",
    "Enabling full-disk encryption on the sensors",
    "Disabling the sensors' status LEDs",
    "Placing the devices on an isolated, segmented network"
   ],
   "a": 3,
   "e": "Constrained IoT and embedded devices often cannot be patched or run security agents, so placing them on an isolated, segmented network (their own VLAN) limits what a compromised sensor can reach. Antivirus and full-disk encryption typically cannot run on such low-power hardware.",
   "d": 4
  },
  {
   "id": 92,
   "t": "wireless-security-settings",
   "x": "WPA3-Personal replaces the WPA2 pre-shared key handshake with a method that resists offline dictionary attacks even when the passphrase is weak. Which handshake provides this protection?",
   "o": [
    "Simultaneous Authentication of Equals",
    "Temporal Key Integrity Protocol",
    "Wired Equivalent Privacy",
    "Wi-Fi Protected Setup"
   ],
   "a": 0,
   "e": "WPA3-Personal uses Simultaneous Authentication of Equals (SAE), a Dragonfly handshake that adds forward secrecy and resists offline dictionary attacks. Temporal Key Integrity Protocol (TKIP) and Wired Equivalent Privacy (WEP) are older broken methods, and Wi-Fi Protected Setup (WPS) is a convenience feature with a brute-forceable PIN.",
   "d": 4
  },
  {
   "id": 93,
   "t": "wireless-security-settings",
   "x": "A company wants employees to authenticate to the corporate wireless network with individual certificates rather than a shared password, and it wants a central server to make each accept-or-reject decision. Which configuration should the wireless network use?",
   "o": [
    "WPA3-Personal with a rotating pre-shared key",
    "Open authentication with a captive portal",
    "WPA2-Personal with MAC address filtering",
    "WPA3-Enterprise with 802.1X and a RADIUS server"
   ],
   "a": 3,
   "e": "WPA3-Enterprise uses 802.1X to hand authentication to a Remote Authentication Dial-In User Service (RADIUS) server, which can validate each user's certificate through EAP. Personal modes rely on one shared passphrase and cannot authenticate individual users with certificates.",
   "d": 4
  },
  {
   "id": 94,
   "t": "wireless-security-settings",
   "x": "In an 802.1X-protected wireless deployment, what role does the wireless access point play during the authentication exchange?",
   "o": [
    "Supplicant that submits its own credentials",
    "Authenticator that relays credentials to the RADIUS server",
    "Certificate authority that issues client certificates",
    "Authentication server that approves the connection"
   ],
   "a": 1,
   "e": "In 802.1X the access point is the authenticator: it blocks the port and relays the client's credentials to the authentication server, typically RADIUS, which makes the accept-or-reject decision. The client device is the supplicant that submits the credentials.",
   "d": 4
  },
  {
   "id": 95,
   "t": "application-security",
   "x": "A web developer wants to block SQL injection and cross-site scripting by confirming that data submitted through forms matches the expected type, length, and format before it is processed. Which application security technique does this?",
   "o": [
    "Input validation",
    "Code signing",
    "Log aggregation",
    "Certificate pinning"
   ],
   "a": 0,
   "e": "Input validation checks that user-supplied data matches the expected type, length, and format (ideally with an allow list) before use, blocking injection and scripting payloads. Code signing verifies software authorship and does not inspect form input.",
   "d": 4
  },
  {
   "id": 96,
   "t": "application-security",
   "x": "During a code review, an analyst finds that session cookies are set with no protective attributes. Which pair of attributes ensures a cookie is sent only over encrypted connections and cannot be read by client-side scripts?",
   "o": [
    "Domain and Path",
    "Secure and HttpOnly",
    "Expires and Max-Age",
    "SameSite and Priority"
   ],
   "a": 1,
   "e": "The Secure attribute restricts a cookie to encrypted HTTPS connections, and HttpOnly hides it from client-side JavaScript, reducing theft through cross-site scripting. Domain, Path, Expires, Max-Age, and SameSite control scope, lifetime, or cross-site behavior, not transport encryption combined with script hiding.",
   "d": 4
  },
  {
   "id": 97,
   "t": "application-security",
   "x": "A development team wants to automatically inspect their source code for insecure functions and coding flaws without executing the program. Which testing approach fits this requirement?",
   "o": [
    "Dynamic application security testing",
    "Fuzzing the running application",
    "Static application security testing",
    "Penetration testing the production host"
   ],
   "a": 2,
   "e": "Static application security testing (SAST) analyzes source code, byte code, or binaries without running the program, catching flaws early in development. Dynamic testing and fuzzing require a running application, and penetration testing targets a live system rather than the code itself.",
   "d": 4
  },
  {
   "id": 98,
   "t": "vulnerability-scanning",
   "x": "An analyst configures the vulnerability scanner with valid account credentials for each target so it can log in and inspect patch levels and configuration files from the inside. Which benefit does this credentialed scan offer over a non-credentialed scan?",
   "o": [
    "Faster scans that use less network bandwidth",
    "The ability to scan hosts that are powered off",
    "The external attacker's view of the host",
    "More accurate results with fewer false positives"
   ],
   "a": 3,
   "e": "A credentialed scan logs into each host to read actual patch levels and configuration, producing deeper results with fewer false positives than an outside-only, non-credentialed scan. The external attacker's viewpoint is exactly what a non-credentialed scan provides, not a credentialed one.",
   "d": 4
  },
  {
   "id": 99,
   "t": "vulnerability-scanning",
   "x": "A vulnerability scanner reports that a server runs an OpenSSL version with a critical flaw, but the analyst verifies the server was patched last week and the scanner simply misread the version. How should the analyst classify this finding?",
   "o": [
    "True positive",
    "False positive",
    "False negative",
    "True negative"
   ],
   "a": 1,
   "e": "A false positive is a reported vulnerability that does not actually exist on the target; here the scanner flagged a flaw the patched server no longer has. A false negative would be the opposite error, a real vulnerability the scanner failed to report.",
   "d": 4
  },
  {
   "id": 100,
   "t": "vulnerability-scanning",
   "x": "After a scan, the security team needs a standardized 0-to-10 severity rating to communicate how serious each discovered vulnerability is and to prioritize remediation. Which system provides this rating?",
   "o": [
    "Common Vulnerabilities and Exposures",
    "Common Platform Enumeration",
    "Common Vulnerability Scoring System",
    "Security Content Automation Protocol"
   ],
   "a": 2,
   "e": "The Common Vulnerability Scoring System (CVSS) rates severity from 0 to 10 to help teams prioritize remediation. Common Vulnerabilities and Exposures (CVE) is an identifier catalog for specific flaws, Common Platform Enumeration (CPE) names products, and the Security Content Automation Protocol (SCAP) ties these standards together.",
   "d": 4
  },
  {
   "id": 101,
   "t": "penetration-testing",
   "x": "A client hires a penetration testing firm but provides no network diagrams, credentials, or source code, requiring the testers to discover everything as an outside attacker would. Which type of engagement is this?",
   "o": [
    "Unknown environment test",
    "Known environment test",
    "Partially known environment test",
    "Integrated environment test"
   ],
   "a": 0,
   "e": "An unknown environment (black box) test gives the tester no prior information, simulating an external attacker who must discover the network. A known environment (white box) test shares full details, and a partially known (gray box) test shares some.",
   "d": 4
  },
  {
   "id": 102,
   "t": "penetration-testing",
   "x": "During the reconnaissance phase of a penetration test, a tester gathers information about the target only from public sources such as WHOIS records, social media, and search engines, without sending any packets to the target's systems. Which technique is being used?",
   "o": [
    "Active reconnaissance",
    "Passive reconnaissance",
    "Privilege escalation",
    "Lateral movement"
   ],
   "a": 1,
   "e": "Passive reconnaissance collects information from public and third-party sources (open-source intelligence) without touching the target, so it is unlikely to be detected. Active reconnaissance, such as port scanning, sends traffic to the target and can be logged.",
   "d": 4
  },
  {
   "id": 103,
   "t": "security-monitoring",
   "x": "A security analyst wants to bring authentication logs from the domain controllers, firewall logs, and web server logs into one place and automatically correlate events across them to reveal attack patterns. Which tool does this?",
   "o": [
    "Syslog",
    "SIEM",
    "SNMP",
    "NetFlow"
   ],
   "a": 1,
   "e": "A SIEM (security information and event management) system collects logs from many sources and correlates events across them to surface patterns no single log would reveal. Syslog can centralize log messages but does not correlate them, while SNMP and NetFlow report device health and traffic flows rather than analyzing security events.",
   "d": 4
  },
  {
   "id": 104,
   "t": "security-monitoring",
   "x": "An administrator needs to monitor the operational status of network switches and routers, such as interface state and CPU load, and be alerted the moment a device crosses a defined threshold. Which protocol provides this?",
   "o": [
    "SMTP",
    "Syslog",
    "ICMP",
    "SNMP"
   ],
   "a": 3,
   "e": "SNMP (Simple Network Management Protocol) polls devices for operational data such as interface state and CPU load, and SNMP traps push an alert the instant a monitored value crosses a threshold. Syslog forwards event messages but does not poll device metrics, and SMTP and ICMP handle email and reachability, not device monitoring.",
   "d": 4
  },
  {
   "id": 105,
   "t": "firewalls",
   "x": "Which firewall type can allow or deny traffic based on the specific application producing it, for example distinguishing chat from video within the same social media service?",
   "o": [
    "A next-generation firewall",
    "A packet-filtering firewall",
    "A stateless firewall",
    "A circuit-level gateway"
   ],
   "a": 0,
   "e": "A next-generation firewall (NGFW) inspects traffic at the application layer, so it can identify and control the specific application in use rather than only ports and addresses. Packet-filtering and stateless firewalls decide at Layers 3 and 4, and a circuit-level gateway validates sessions without examining application content.",
   "d": 4
  },
  {
   "id": 106,
   "t": "firewalls",
   "x": "A public-facing e-commerce site is being hit by SQL injection and cross-site scripting attempts embedded in HTTP requests. Which device is designed to inspect and filter these requests?",
   "o": [
    "A stateful packet-filtering firewall",
    "A network intrusion detection system",
    "A web application firewall",
    "A Layer 4 load balancer"
   ],
   "a": 2,
   "e": "A web application firewall (WAF) inspects HTTP requests at the application layer and filters attacks such as SQL injection and cross-site scripting before they reach the application. A stateful firewall tracks connections but not payload content, an IDS only alerts without blocking, and a Layer 4 load balancer distributes traffic without inspecting it.",
   "d": 4
  },
  {
   "id": 107,
   "t": "firewalls",
   "x": "A firewall's access control list is evaluated from top to bottom and permits only the traffic its rules explicitly allow. What happens to a packet that matches none of the allow rules?",
   "o": [
    "It is forwarded since no rule blocked it",
    "It is logged and then permitted",
    "It is held for administrator review",
    "It is dropped by the implicit deny rule"
   ],
   "a": 3,
   "e": "Firewall access control lists end with an implicit deny, so a packet matching no explicit allow rule is dropped by default. This default-deny posture means required traffic must be explicitly permitted; nothing is forwarded merely because no rule blocked it.",
   "d": 4
  },
  {
   "id": 108,
   "t": "secure-protocols",
   "x": "An administrator is still using Telnet to manage routers, which sends the login credentials across the network in cleartext. Which protocol should replace Telnet to encrypt the management session?",
   "o": [
    "HTTP",
    "SSH",
    "SNMPv2",
    "TFTP"
   ],
   "a": 1,
   "e": "SSH (Secure Shell) encrypts the entire remote management session, including credentials, and is the secure replacement for Telnet on TCP 22. HTTP, SNMPv2, and TFTP all move data across the network without built-in encryption.",
   "d": 4
  },
  {
   "id": 109,
   "t": "secure-protocols",
   "x": "Which protocol provides secure file transfer by carrying the transfer inside an SSH connection?",
   "o": [
    "FTPS",
    "FTP",
    "SFTP",
    "TFTP"
   ],
   "a": 2,
   "e": "SFTP (SSH File Transfer Protocol) runs file transfers inside an SSH session on TCP 22, encrypting both the commands and the data. FTPS secures transfers with TLS rather than SSH, and FTP and TFTP provide no encryption at all.",
   "d": 4
  },
  {
   "id": 110,
   "t": "secure-protocols",
   "x": "A site-to-site VPN must both authenticate the origin of each packet and encrypt its payload. Which IPsec component supplies the confidentiality?",
   "o": [
    "AH",
    "IKE",
    "ESP",
    "GRE"
   ],
   "a": 2,
   "e": "Within IPsec, ESP (Encapsulating Security Payload) encrypts the packet payload to provide confidentiality, whereas AH (Authentication Header) only supplies integrity and origin authentication with no encryption. IKE negotiates the keys, and GRE tunnels traffic without encrypting it.",
   "d": 4
  },
  {
   "id": 111,
   "t": "email-security",
   "x": "Which email mechanism lets a domain owner publish, in DNS, the list of mail servers authorized to send messages for that domain?",
   "o": [
    "SPF",
    "DKIM",
    "DMARC",
    "S/MIME"
   ],
   "a": 0,
   "e": "SPF (Sender Policy Framework) publishes a DNS record naming the servers permitted to send mail for a domain, letting receivers reject mail from unlisted sources. DKIM signs messages, DMARC applies a policy to SPF and DKIM results, and S/MIME secures individual messages rather than listing senders.",
   "d": 4
  },
  {
   "id": 112,
   "t": "email-security",
   "x": "Which email mechanism attaches a cryptographic signature to outgoing messages so a receiver can confirm the message was not altered in transit and originated from the signing domain?",
   "o": [
    "SPF",
    "POP3S",
    "DMARC",
    "DKIM"
   ],
   "a": 3,
   "e": "DKIM (DomainKeys Identified Mail) adds a cryptographic signature that a receiver validates against the sender's public key in DNS, confirming the message is unchanged and from the signing domain. SPF only checks the sending server's address, and DMARC builds a policy on top of SPF and DKIM.",
   "d": 4
  },
  {
   "id": 113,
   "t": "email-security",
   "x": "Executives need to exchange messages whose contents stay encrypted end-to-end and carry a verifiable digital signature tied to each sender's certificate. Which standard provides this?",
   "o": [
    "SPF",
    "S/MIME",
    "DMARC",
    "STARTTLS"
   ],
   "a": 1,
   "e": "S/MIME (Secure/Multipurpose Internet Mail Extensions) uses each user's certificate to encrypt and digitally sign the message itself, so it stays protected end-to-end even after delivery. STARTTLS only encrypts mail in transit between servers, while SPF and DMARC validate sending domains rather than protecting message contents.",
   "d": 4
  },
  {
   "id": 114,
   "t": "endpoint-security",
   "x": "A security team wants a tool on each workstation that continuously watches process behavior, flags suspicious activity, and can automatically isolate the host and roll back malicious changes, going beyond signature-based antivirus. Which technology is this?",
   "o": [
    "Endpoint detection and response",
    "Data loss prevention",
    "A host-based intrusion prevention system",
    "Full-disk encryption"
   ],
   "a": 0,
   "e": "EDR (endpoint detection and response) continuously analyzes process behavior on each host and can automatically isolate the machine and roll back malicious changes, catching threats that signature-based antivirus misses. Data loss prevention, host intrusion prevention, and full-disk encryption address data exfiltration, known network attacks, and data at rest, not behavioral detection with automated response.",
   "d": 4
  },
  {
   "id": 115,
   "t": "endpoint-security",
   "x": "An organization wants to ensure that only explicitly approved programs can run on its workstations, so that unknown or unapproved software, including new malware, is blocked. Which endpoint control enforces this?",
   "o": [
    "Antivirus signature updates",
    "A host-based firewall",
    "Application allow listing",
    "Full-disk encryption"
   ],
   "a": 2,
   "e": "An application allow list permits only pre-approved programs to run and blocks everything else by default, stopping unknown software including new malware. Antivirus works in reverse by blocking known-bad signatures, a host firewall filters network traffic, and full-disk encryption protects data at rest.",
   "d": 4
  },
  {
   "id": 116,
   "t": "identity-and-access-management",
   "x": "When an employee leaves the company, which identity and access management action most directly stops the former employee from using their old credentials to reach company systems?",
   "o": [
    "Deprovisioning the user's accounts",
    "Enforcing password history",
    "Rotating the server's encryption keys",
    "Requiring MFA on future logins"
   ],
   "a": 0,
   "e": "Deprovisioning promptly disables or removes a departing user's accounts, closing the window in which valid but unneeded credentials could be misused. Password history, key rotation, and MFA harden accounts that remain in use but do nothing about an account that should no longer exist.",
   "d": 4
  },
  {
   "id": 117,
   "t": "identity-and-access-management",
   "x": "Which technology lets a user authenticate one time and then reach several independent applications without being prompted for credentials again?",
   "o": [
    "Multifactor authentication",
    "Single sign-on",
    "Role-based access control",
    "Mandatory access control"
   ],
   "a": 1,
   "e": "Single sign-on (SSO) lets a user authenticate once and then reach many separate applications without re-entering credentials, commonly using SAML or OAuth underneath. Multifactor authentication adds identity-proofing factors, while role-based and mandatory access control determine what an authenticated user may do, not how often they log in.",
   "d": 4
  },
  {
   "id": 118,
   "t": "identity-and-access-management",
   "x": "A company lets employees log in to a third-party SaaS application using their existing corporate directory credentials, with the corporate identity provider vouching for each user. What is this cross-organization trust arrangement called?",
   "o": [
    "Privilege escalation",
    "Credential stuffing",
    "Password vaulting",
    "Federation"
   ],
   "a": 3,
   "e": "Federation establishes trust between a company's identity provider and an external service provider, letting employees use existing corporate credentials at third-party applications while the identity provider asserts who they are. Privilege escalation and credential stuffing are attacks, and password vaulting merely stores credentials in a manager.",
   "d": 4
  },
  {
   "id": 119,
   "t": "access-controls",
   "x": "Which access control model uses security labels and clearance levels assigned by a central authority, so that individual data owners cannot grant others access to their own files?",
   "o": [
    "Discretionary access control",
    "Role-based access control",
    "Mandatory access control",
    "Attribute-based access control"
   ],
   "a": 2,
   "e": "Mandatory access control (MAC) assigns every object a security label and every subject a clearance level, and the operating system enforces access based on those labels; users cannot override the policy. In discretionary access control (DAC), the resource owner decides who gets access, which is exactly what MAC prevents.",
   "d": 4
  },
  {
   "id": 120,
   "t": "access-controls",
   "x": "A hospital grants application permissions according to job function, so every nurse receives the same rights and a nurse who transfers to billing automatically gains the billing rights instead. Which access control scheme is in use?",
   "o": [
    "Rule-based access control",
    "Role-based access control",
    "Discretionary access control",
    "Mandatory access control"
   ],
   "a": 1,
   "e": "Role-based access control (RBAC) ties permissions to roles that map to job functions, so a user gains rights by being assigned to a role rather than individually. Rule-based access control instead applies global conditions, such as an ACL that permits traffic only on certain ports, not permissions based on a job role.",
   "d": 4
  },
  {
   "id": 121,
   "t": "access-controls",
   "x": "Granting a user account only the specific permissions required to perform its job, and nothing more, describes which security principle?",
   "o": [
    "Least privilege",
    "Separation of duties",
    "Implicit deny",
    "Defense in depth"
   ],
   "a": 0,
   "e": "The principle of least privilege gives a user or process only the access needed to do its job, which limits the damage if that account is compromised or misused. Separation of duties is different: it divides a sensitive task among multiple people so no single person can complete it alone.",
   "d": 4
  },
  {
   "id": 122,
   "t": "multifactor-authentication",
   "x": "A user signs in by typing a password and then approving a push notification on a company-issued smartphone. Which combination of authentication factors does this represent?",
   "o": [
    "Something you are and something you do",
    "Something you have and somewhere you are",
    "Something you know and something you are",
    "Something you know and something you have"
   ],
   "a": 3,
   "e": "The password is a knowledge factor (something you know) and the company smartphone is a possession factor (something you have), so the login uses two different factors and qualifies as multifactor authentication. A fingerprint or face scan would add an inherence factor (something you are), which is not part of this login.",
   "d": 4
  },
  {
   "id": 123,
   "t": "multifactor-authentication",
   "x": "Why does combining a password with the answer to a personal security question fail to provide multifactor authentication?",
   "o": [
    "Both are the same factor, something you know",
    "A password by itself already satisfies two factors",
    "The security question is a possession factor rather than a knowledge factor",
    "Security questions cannot be used for authentication"
   ],
   "a": 0,
   "e": "Multifactor authentication combines factors from different categories, but a password and a security-question answer are both knowledge factors (something you know), so together they remain single-factor authentication. Adding a possession or inherence factor would make it multifactor.",
   "d": 4
  },
  {
   "id": 124,
   "t": "multifactor-authentication",
   "x": "Verifying that a sign-in attempt originates from within the corporate campus using GPS or IP geolocation is an example of which authentication factor?",
   "o": [
    "Something you know",
    "Something you have",
    "Somewhere you are",
    "Something you are"
   ],
   "a": 2,
   "e": "The location factor, somewhere you are, relies on attributes such as GPS coordinates or IP geolocation to confirm a request originates from an expected place. It is distinct from knowledge, possession, and inherence factors.",
   "d": 4
  },
  {
   "id": 125,
   "t": "incident-response",
   "x": "During a malware outbreak, a responder immediately disconnects the affected subnet from the rest of the network to stop the infection from spreading while the investigation continues. Which incident response phase does this action belong to?",
   "o": [
    "Eradication",
    "Containment",
    "Recovery",
    "Detection and analysis"
   ],
   "a": 1,
   "e": "Containment limits the scope and spread of an incident, for instance by isolating infected systems or network segments, so the damage does not grow while responders work. Eradication is the following phase, where the malware and its artifacts are removed from the systems.",
   "d": 4
  },
  {
   "id": 126,
   "t": "incident-response",
   "x": "In the incident response process, which phase involves documenting what happened and updating the plan after the incident has been resolved?",
   "o": [
    "Preparation",
    "Detection and analysis",
    "Recovery",
    "Lessons learned"
   ],
   "a": 3,
   "e": "The lessons learned phase takes place after recovery and reviews both the incident and the response to improve procedures, tooling, and training before the next event. Preparation, by contrast, is the work done before any incident occurs.",
   "d": 4
  },
  {
   "id": 127,
   "t": "incident-response",
   "x": "A response team meets in a conference room and verbally walks through their roles and decisions for a hypothetical ransomware event, without altering any production systems. What is this type of preparedness activity called?",
   "o": [
    "Root cause analysis",
    "Penetration test",
    "Tabletop exercise",
    "Simulation"
   ],
   "a": 2,
   "e": "A tabletop exercise is a discussion-based drill in which participants talk through their response to a scenario, making it inexpensive and non-disruptive. A simulation differs because it actively tests systems or people, such as launching a mock phishing campaign.",
   "d": 4
  },
  {
   "id": 128,
   "t": "digital-forensics",
   "x": "Which forensic documentation records every individual who handled an item of evidence, along with the date, time, and reason for each transfer, to demonstrate the evidence was not altered?",
   "o": [
    "Chain of custody",
    "Legal hold",
    "Order of volatility",
    "Provenance"
   ],
   "a": 0,
   "e": "The chain of custody is the documented handling history of evidence, showing who collected, stored, and transferred it and when, which is required for the evidence to be admissible in court. A legal hold, by contrast, is a directive to preserve data so it is not deleted.",
   "d": 4
  },
  {
   "id": 129,
   "t": "digital-forensics",
   "x": "The legal department informs IT that litigation is expected and directs staff to suspend the automatic deletion of specific mailboxes and files so they remain intact. What is this directive called?",
   "o": [
    "E-discovery",
    "Legal hold",
    "Chain of custody",
    "Acquisition"
   ],
   "a": 1,
   "e": "A legal hold is a formal instruction to preserve information that may be relevant to anticipated or ongoing litigation, overriding routine deletion and retention schedules. E-discovery is the later stage of locating and producing that preserved electronically stored information for the case.",
   "d": 4
  },
  {
   "id": 130,
   "t": "digital-forensics",
   "x": "During evidence acquisition, an examiner creates a bit-for-bit image of a drive and hashes both the original and the image. What does comparing the two hash values accomplish?",
   "o": [
    "It recovers files that were previously deleted from the drive",
    "It encrypts the image so only the analyst can open it",
    "It compresses the image to save storage space",
    "It proves the image is an exact, unaltered copy of the original"
   ],
   "a": 3,
   "e": "Calculating and comparing the hash of the original drive and the forensic image proves the copy is identical and has not been changed; matching hashes verify the integrity of the evidence. Hashing does not recover, encrypt, or compress data.",
   "d": 4
  },
  {
   "id": 131,
   "t": "log-data",
   "x": "An analyst suspects a workstation is beaconing to an external command-and-control server. Which log source most directly shows the outbound connection attempts leaving the network?",
   "o": [
    "Web server access logs",
    "Endpoint patch logs",
    "Firewall logs",
    "Application logs"
   ],
   "a": 2,
   "e": "Firewall logs record the traffic allowed and blocked at the network boundary, making them the best place to see a host's outbound connection attempts to an external address. Web server access logs capture inbound requests to a server, not a workstation's outbound traffic.",
   "d": 4
  },
  {
   "id": 132,
   "t": "log-data",
   "x": "Which data source captures the full payload of network traffic, including the actual data exchanged during a session?",
   "o": [
    "Packet capture",
    "NetFlow summary",
    "Syslog message",
    "SNMP trap"
   ],
   "a": 0,
   "e": "A packet capture records the complete contents of network frames, including headers and payload, so the exact data transmitted can be examined. NetFlow and similar records contain only metadata about a conversation, such as addresses and byte counts, not the payload itself.",
   "d": 4
  },
  {
   "id": 133,
   "t": "log-data",
   "x": "Which protocol is commonly used to forward log messages from many network devices to a central collection server over the network?",
   "o": [
    "SMTP",
    "Syslog",
    "NTP",
    "LDAP"
   ],
   "a": 1,
   "e": "Syslog is the standard protocol for sending event messages from devices such as routers, firewalls, and servers to a centralized log server, typically over UDP port 514. SMTP transports email, NTP synchronizes clocks, and LDAP queries directory services.",
   "d": 4
  },
  {
   "id": 134,
   "t": "security-policies",
   "x": "Which policy document defines the permitted and prohibited uses of company-owned devices, email, and internet access, and is typically signed by users during onboarding?",
   "o": [
    "Acceptable use policy",
    "Incident response policy",
    "Change management policy",
    "Disaster recovery policy"
   ],
   "a": 0,
   "e": "The acceptable use policy (AUP) states how employees may and may not use organizational systems, and it is commonly signed during onboarding. Incident response, change management, and disaster recovery policies govern operational processes rather than everyday user conduct.",
   "d": 5
  },
  {
   "id": 135,
   "t": "security-policies",
   "x": "A technician modifies a production firewall rule set on a busy afternoon without submitting a request or obtaining approval, causing an outage. Which policy did this violate?",
   "o": [
    "Acceptable use policy",
    "Change management policy",
    "Data retention policy",
    "Incident response policy"
   ],
   "a": 1,
   "e": "A change management policy requires that modifications to production systems follow a formal request, review, and approval process so risk is evaluated before deployment. Skipping that process is the violation here; an acceptable use policy governs user behavior, not operational change control.",
   "d": 5
  },
  {
   "id": 136,
   "t": "security-policies",
   "x": "Which document focuses on keeping essential operations running during a disruption, rather than on the technical steps to restore specific systems afterward?",
   "o": [
    "Disaster recovery policy",
    "Incident response policy",
    "Acceptable use policy",
    "Business continuity policy"
   ],
   "a": 3,
   "e": "A business continuity policy (BCP) addresses sustaining critical operations during a disruption, often through alternate processes or sites. A disaster recovery policy (DRP) is narrower, covering the technical restoration of systems and data after an incident.",
   "d": 5
  },
  {
   "id": 137,
   "t": "security-standards",
   "x": "An organization documents that all user credentials must be at least 14 characters, include mixed character types, and expire every 90 days. This mandatory requirement is best classified as which of the following?",
   "o": [
    "A security standard",
    "A security policy",
    "A security guideline",
    "A security procedure"
   ],
   "a": 0,
   "e": "A standard defines specific, mandatory implementation details (such as exact password length and expiration) that support a broader policy. A policy states high-level intent, a procedure lists step-by-step tasks, and a guideline offers optional recommendations.",
   "d": 5
  },
  {
   "id": 138,
   "t": "security-standards",
   "x": "A company publishes a document titled 'Recommended Practices' that suggests, but does not require, encrypting files before emailing them externally, leaving compliance optional. This document is best classified as a:",
   "o": [
    "Standard",
    "Guideline",
    "Procedure",
    "Policy"
   ],
   "a": 1,
   "e": "A guideline provides recommended, non-mandatory advice to help users make good decisions. Because following it is optional, it is not a standard or policy, both of which impose mandatory requirements.",
   "d": 5
  },
  {
   "id": 139,
   "t": "security-standards",
   "x": "Which type of security standard specifies that remote administrator logins must use multifactor authentication and be limited to a dedicated management network?",
   "o": [
    "Encryption standard",
    "Password standard",
    "Access control standard",
    "Physical security standard"
   ],
   "a": 2,
   "e": "An access control standard governs how authentication and authorization are enforced, including requirements like multifactor authentication and network restrictions for privileged accounts. An encryption standard would specify algorithms and key lengths, while a physical security standard addresses facility protections.",
   "d": 5
  },
  {
   "id": 140,
   "t": "data-roles-and-responsibilities",
   "x": "A retailer hires an external firm to run its employee payroll. The retailer decides what personal information is collected and why, while the firm handles that information only according to the retailer's instructions. What role does the external firm hold?",
   "o": [
    "Data controller",
    "Data owner",
    "Data processor",
    "Data custodian"
   ],
   "a": 2,
   "e": "A data processor handles personal information on behalf of, and under the instructions of, the controller, which is exactly the payroll firm's role. The retailer, which determines the purpose and means of processing, is the data controller.",
   "d": 5
  },
  {
   "id": 141,
   "t": "data-roles-and-responsibilities",
   "x": "Who is the senior individual with ultimate accountability for a specific data set, including assigning its classification level and approving who may use it?",
   "o": [
    "Data owner",
    "Data steward",
    "Data custodian",
    "Data processor"
   ],
   "a": 0,
   "e": "The data owner is a senior role accountable for a specific data set, setting its classification and authorizing access. Custodians and stewards handle day-to-day technical and quality tasks but do not hold that ultimate accountability.",
   "d": 5
  },
  {
   "id": 142,
   "t": "data-roles-and-responsibilities",
   "x": "A database administrator is responsible for configuring backups, applying encryption, and enforcing the permissions that others have defined on a customer database. Which role best fits this administrator?",
   "o": [
    "Data controller",
    "Data owner",
    "Data steward",
    "Data custodian"
   ],
   "a": 3,
   "e": "A data custodian carries out the technical, hands-on protection of data, such as backups, encryption, and enforcing permissions set by the data owner. A data steward focuses more on data quality, context, and correct labeling than on the underlying technical controls.",
   "d": 5
  },
  {
   "id": 143,
   "t": "risk-management",
   "x": "After weighing the potential cost of a data breach, a company buys a cyber insurance policy to cover financial losses if an incident occurs. Which risk management strategy is this?",
   "o": [
    "Risk avoidance",
    "Risk acceptance",
    "Risk transference",
    "Risk mitigation"
   ],
   "a": 2,
   "e": "Purchasing insurance shifts the financial impact of a risk to a third party, which is risk transference. Mitigation would reduce the likelihood or impact directly, while acceptance would take no action and absorb the loss.",
   "d": 5
  },
  {
   "id": 144,
   "t": "risk-management",
   "x": "A security team uses automated tooling to evaluate its exposure to newly disclosed vulnerabilities on an ongoing, real-time basis rather than at fixed intervals. Which type of risk assessment is this?",
   "o": [
    "Continuous",
    "Ad hoc",
    "One-time",
    "Recurring"
   ],
   "a": 0,
   "e": "A continuous risk assessment evaluates risk on an ongoing basis, often with automation, so new exposures are detected as they emerge. A recurring assessment runs on a set schedule, and an ad hoc assessment is triggered by a specific event or need.",
   "d": 5
  },
  {
   "id": 145,
   "t": "risk-management",
   "x": "An organization's leadership formally states it is willing to pursue high-risk, high-reward initiatives in order to grow quickly. This posture best describes which type of risk appetite?",
   "o": [
    "Conservative",
    "Neutral",
    "Averse",
    "Expansionary"
   ],
   "a": 3,
   "e": "An expansionary risk appetite accepts greater risk in pursuit of growth and higher returns. A conservative appetite minimizes risk and a neutral appetite balances the two; 'averse' is not one of the three standard risk appetite categories.",
   "d": 5
  },
  {
   "id": 146,
   "t": "risk-analysis",
   "x": "A server valued at $40,000 would lose 25% of its value in a flood, and floods are expected to strike this site once every four years. What is the annualized loss expectancy?",
   "o": [
    "$10,000",
    "$625",
    "$40,000",
    "$2,500"
   ],
   "a": 3,
   "e": "Annualized loss expectancy (ALE) equals single loss expectancy (SLE) times the annualized rate of occurrence (ARO). SLE is asset value times exposure factor ($40,000 x 0.25 = $10,000); with an ARO of 0.25 (once every four years), ALE = $10,000 x 0.25 = $2,500. The $10,000 figure is only the SLE.",
   "d": 5
  },
  {
   "id": 147,
   "t": "risk-analysis",
   "x": "A laptop is worth $2,000, and a theft scenario is estimated to result in the loss of 80% of its value. What is the single loss expectancy for that scenario?",
   "o": [
    "$400",
    "$1,600",
    "$2,000",
    "$800"
   ],
   "a": 1,
   "e": "Single loss expectancy (SLE) equals asset value multiplied by the exposure factor, the percentage of value lost in one event: $2,000 x 0.80 = $1,600. The $400 figure is the value that remains after the loss, not the loss itself.",
   "d": 5
  },
  {
   "id": 148,
   "t": "risk-analysis",
   "x": "A risk analyst rates each threat's likelihood and impact as low, medium, or high instead of assigning dollar amounts. Which type of risk analysis is being performed?",
   "o": [
    "Qualitative",
    "Quantitative",
    "Continuous",
    "Residual"
   ],
   "a": 0,
   "e": "Qualitative risk analysis uses subjective ratings such as low, medium, and high rather than numeric values. Quantitative analysis assigns concrete monetary figures like single loss expectancy and annualized loss expectancy.",
   "d": 5
  },
  {
   "id": 149,
   "t": "business-impact-analysis",
   "x": "During business impact analysis, managers determine that the accounting system can afford to lose at most 30 minutes of transactions if it fails. Which metric does this 30-minute limit define?",
   "o": [
    "Recovery time objective",
    "Recovery point objective",
    "Mean time to repair",
    "Mean time between failures"
   ],
   "a": 1,
   "e": "The recovery point objective (RPO) is the maximum amount of data, expressed as time, that an organization can afford to lose, which drives how frequently backups must run. The recovery time objective (RTO) instead measures how quickly the system must be brought back online.",
   "d": 5
  },
  {
   "id": 150,
   "t": "business-impact-analysis",
   "x": "A reliability engineer reports that a class of hard drives operates on average 60,000 hours before a unit stops working. Which metric is this figure?",
   "o": [
    "Mean time to repair",
    "Recovery point objective",
    "Mean time between failures",
    "Recovery time objective"
   ],
   "a": 2,
   "e": "Mean time between failures (MTBF) is the average operating time before a repairable device fails, a measure of expected reliability. Mean time to repair (MTTR) instead measures how long it takes to fix the device after it has failed.",
   "d": 5
  },
  {
   "id": 151,
   "t": "third-party-risk-assessment",
   "x": "A financial firm is finalizing a contract with a cloud provider and wants the guaranteed ability to inspect the provider's security controls and records on short notice throughout the term of the agreement. Which contract provision gives the firm this ability?",
   "o": [
    "Service level agreement",
    "Statement of work",
    "Right-to-audit clause",
    "Nondisclosure agreement"
   ],
   "a": 2,
   "e": "A right-to-audit clause reserves the customer's contractual right to examine a vendor's security controls, processes, and supporting evidence during the relationship, which is central to ongoing third-party risk management. A service level agreement (SLA) defines performance targets rather than inspection rights.",
   "d": 5
  },
  {
   "id": 152,
   "t": "third-party-risk-assessment",
   "x": "An organization is concerned that the hardware and software it buys could carry risks introduced by upstream manufacturers and their sub-suppliers. Which activity best evaluates this category of risk?",
   "o": [
    "Supply chain analysis",
    "Penetration testing",
    "Security awareness training",
    "Data loss prevention"
   ],
   "a": 0,
   "e": "Supply chain analysis evaluates the risk introduced through the network of manufacturers, suppliers, and sub-suppliers that produce a product or service. Penetration testing probes a running system for exploitable weaknesses, not the sourcing of its components.",
   "d": 5
  },
  {
   "id": 153,
   "t": "third-party-risk-assessment",
   "x": "During a vendor selection process, an organization learns that the manager leading the evaluation holds a significant personal financial stake in one of the competing bidders. Which vendor selection concern does this situation represent?",
   "o": [
    "Right-to-audit clause",
    "Rules of engagement",
    "Service level agreement",
    "Conflict of interest"
   ],
   "a": 3,
   "e": "A conflict of interest exists when someone influencing vendor selection has a personal or financial interest that could bias an objective decision, so due diligence must identify and manage it. The concern applies regardless of the bidder's actual quality because it compromises impartial evaluation.",
   "d": 5
  },
  {
   "id": 154,
   "t": "agreement-types",
   "x": "Which type of agreement defines measurable performance commitments, such as minimum uptime and maximum support response times, along with the remedies owed if the provider fails to meet them?",
   "o": [
    "Memorandum of understanding",
    "Service level agreement",
    "Nondisclosure agreement",
    "Business partners agreement"
   ],
   "a": 1,
   "e": "A service level agreement (SLA) sets out measurable performance targets and the remedies, such as service credits, that apply when a provider misses them. A memorandum of understanding (MOU) records general intentions and usually carries no enforceable performance obligations.",
   "d": 5
  },
  {
   "id": 155,
   "t": "agreement-types",
   "x": "Two organizations want to document their shared intentions and broad expectations for working together without creating a legally binding or financial obligation. Which agreement type fits this purpose?",
   "o": [
    "Master service agreement",
    "Service level agreement",
    "Statement of work",
    "Memorandum of understanding"
   ],
   "a": 3,
   "e": "A memorandum of understanding (MOU) captures the parties' intentions and general expectations and is typically not legally binding. A master service agreement (MSA), by contrast, sets binding overarching terms that govern future contracts between the parties.",
   "d": 5
  },
  {
   "id": 156,
   "t": "agreement-types",
   "x": "Which agreement establishes the overarching legal and business terms for an ongoing relationship, so that each later project can be handled with only a short document describing its specific tasks?",
   "o": [
    "Master service agreement",
    "Nondisclosure agreement",
    "Memorandum of understanding",
    "Service level agreement"
   ],
   "a": 0,
   "e": "A master service agreement (MSA) defines the general terms that govern a continuing relationship, letting each new engagement proceed with just a statement of work (SOW) that references it. This avoids renegotiating core terms for every project.",
   "d": 5
  },
  {
   "id": 157,
   "t": "compliance",
   "x": "As part of compliance monitoring, an organization requires every employee to formally sign a statement confirming they have read and agree to follow the acceptable use policy. This control is an example of which compliance activity?",
   "o": [
    "Internal compliance reporting",
    "Due diligence and due care",
    "Attestation and acknowledgement",
    "Independent external audit"
   ],
   "a": 2,
   "e": "Attestation and acknowledgement is a compliance-monitoring method in which individuals formally affirm, usually by signature, that they have read and accept a policy. It produces documented evidence of awareness and agreement that auditors can later review.",
   "d": 5
  },
  {
   "id": 158,
   "t": "compliance",
   "x": "Under privacy law, a retailer decides which customer personal data to collect and the purposes for which it will be used, then hires an outside firm that only stores and processes that data on the retailer's instructions. Which role does the retailer hold?",
   "o": [
    "Data processor",
    "Data controller",
    "Data subject",
    "Data custodian"
   ],
   "a": 1,
   "e": "The data controller determines the purposes and means of processing personal data, while the data processor acts only under the controller's instructions. The data subject is the individual whom the personal data describes.",
   "d": 5
  },
  {
   "id": 159,
   "t": "compliance",
   "x": "Which privacy principle allows a data subject to request that an organization delete the personal data it holds about them?",
   "o": [
    "Right to be forgotten",
    "Data retention",
    "Data inventory",
    "Data sovereignty"
   ],
   "a": 0,
   "e": "The right to be forgotten lets a data subject request erasure of their personal data, a right established in laws such as the General Data Protection Regulation (GDPR). Data retention governs how long data is kept, and data sovereignty concerns which nation's laws apply based on where the data is stored.",
   "d": 5
  },
  {
   "id": 160,
   "t": "audits-and-assessments",
   "x": "An organization hires testers to attack its external systems but gives them no network diagrams, credentials, or internal documentation, requiring them to discover everything on their own. Which type of penetration testing engagement is this?",
   "o": [
    "Known environment testing",
    "Partially known environment testing",
    "Defensive testing",
    "Unknown environment testing"
   ],
   "a": 3,
   "e": "In an unknown environment (black box) penetration test, testers begin with no inside information and must perform their own reconnaissance, simulating an outside attacker. A known environment (white box) test instead provides full internal details up front.",
   "d": 5
  },
  {
   "id": 161,
   "t": "audits-and-assessments",
   "x": "A regulated company must give its customers independent assurance that its stated security controls actually operate as described. Which engagement produces that assurance?",
   "o": [
    "An internal self-assessment by the security team",
    "A third-party attestation audit",
    "A penetration test of the public website",
    "A vulnerability scan of the server fleet"
   ],
   "a": 1,
   "e": "An attestation is an external, independent auditor's formal opinion that controls are designed and operating effectively (for example a SOC 2 report). A self-assessment lacks independence, and pen tests or vulnerability scans measure exploitability, not whether documented controls operate as claimed.",
   "d": 5
  },
  {
   "id": 162,
   "t": "audits-and-assessments",
   "x": "Which of the following is an example of an external audit rather than an internal one?",
   "o": [
    "A self-assessment completed by a department manager",
    "A regulatory examination conducted by a government agency",
    "A review performed by the company's own audit committee",
    "A control test run internally by the security team"
   ],
   "a": 1,
   "e": "An external audit is carried out by an independent party outside the organization, such as a regulator or a third-party auditing firm. Self-assessments, audit-committee reviews, and internal control tests are all performed from within the organization, making them internal audits.",
   "d": 5
  },
  {
   "id": 163,
   "t": "security-awareness",
   "x": "A security team periodically sends realistic but fake malicious emails to its own employees and tracks how many click the links, then uses the results to target follow-up training. What is this practice called?",
   "o": [
    "A phishing campaign",
    "A penetration test",
    "A vulnerability scan",
    "A tabletop exercise"
   ],
   "a": 0,
   "e": "A phishing campaign in security awareness sends simulated phishing messages to measure how many users are fooled and to reinforce training for those who click. A tabletop exercise is a discussion-based rehearsal of incident response, not a test of individual email behavior.",
   "d": 5
  },
  {
   "id": 164,
   "t": "security-awareness",
   "x": "During awareness training, staff are taught to notice and question activity that is out of the ordinary, such as an account emailing files at 3 a.m. or a normally careful colleague suddenly disabling security tools. This training objective is best described as which of the following?",
   "o": [
    "Operational security",
    "Password management",
    "Anomalous behavior recognition",
    "Removable media handling"
   ],
   "a": 2,
   "e": "Anomalous behavior recognition trains users to spot and report activity that deviates from normal patterns, whether risky, unexpected, or unintentional. Noticing deviations like odd login times or unusual data transfers helps catch compromised accounts and insider misuse early.",
   "d": 5
  },
  {
   "id": 165,
   "t": "security-awareness",
   "x": "An employee finds an unlabeled USB flash drive in the company parking lot. Following sound security awareness guidance, what should the employee do?",
   "o": [
    "Plug it into a workstation to search for the owner's contact details",
    "Copy its contents to a shared drive so coworkers can help identify it",
    "Use it only on a personal laptop that is off the corporate network",
    "Leave it unplugged and hand it to the security team to examine"
   ],
   "a": 3,
   "e": "Unknown removable media can carry malware or act as a malicious device, so awareness guidance is to avoid plugging it in and to report it to security. This defends against baiting attacks, in which attackers deliberately leave infected drives for curious people to find.",
   "d": 5
  },
  {
   "id": 166,
   "t": "security-awareness",
   "x": "Which type of threat comes from trusted, authorized employees or contractors who misuse their legitimate access to harm the organization, and is a frequent focus of awareness training?",
   "o": [
    "Advanced persistent threat",
    "Insider threat",
    "Supply chain attack",
    "Watering hole attack"
   ],
   "a": 1,
   "e": "An insider threat arises from people with authorized access, such as employees or contractors, who cause harm intentionally or unintentionally. Awareness training helps staff recognize the warning signs and report concerns, since insiders already bypass many perimeter defenses.",
   "d": 5
  }
 ],
 "pbqs": [
  {
   "kind": "match",
   "t": "security-controls",
   "title": "Classify the Controls",
   "scen": "A new security manager is cataloging the measures already in place at a branch office. Each measure must be recorded under its control type. Not all control types will be used.",
   "choices": [
    "Preventive",
    "Deterrent",
    "Detective",
    "Corrective",
    "Compensating",
    "Directive"
   ],
   "items": [
    {
     "l": "A badge reader that keeps the server room door locked",
     "a": 0
    },
    {
     "l": "A lobby sign warning that the premises are under video surveillance",
     "a": 1
    },
    {
     "l": "A SIEM rule that raises an alert after repeated failed logins",
     "a": 2
    },
    {
     "l": "Restoring servers from backup after a ransomware infection",
     "a": 3
    }
   ]
  },
  {
   "kind": "match",
   "t": "threat-actors",
   "title": "Attribute the Attack",
   "scen": "An analyst is reviewing four closed incident reports and must record the most likely threat actor behind each one. Not all actor types will be used.",
   "choices": [
    "Nation-state",
    "Insider threat",
    "Hacktivist",
    "Organized crime",
    "Unskilled attacker",
    "Shadow IT"
   ],
   "items": [
    {
     "l": "A months-long undetected intrusion at a defense contractor using custom-built tooling",
     "a": 0
    },
    {
     "l": "A departing engineer uses still-active credentials to delete a project repository",
     "a": 1
    },
    {
     "l": "A company homepage is defaced with political slogans by a loose online collective",
     "a": 2
    },
    {
     "l": "A point-of-sale breach where stolen card numbers are sold on underground markets",
     "a": 3
    }
   ]
  },
  {
   "kind": "order",
   "t": "incident-response",
   "title": "Run the Response Lifecycle",
   "scen": "A security team is formalizing its incident response plan and must document the phases of the process in the order they occur.",
   "steps": [
    "Preparation",
    "Detection and analysis",
    "Containment",
    "Eradication",
    "Recovery",
    "Lessons learned"
   ]
  },
  {
   "kind": "order",
   "t": "digital-forensics",
   "title": "Collect by Volatility",
   "scen": "A forensic responder arrives at a compromised workstation that is still powered on. Evidence must be collected following the order of volatility, starting with what disappears first.",
   "steps": [
    "CPU registers and cache",
    "System memory contents",
    "Swap space and temporary files",
    "Data on the local disk",
    "Remote logging and monitoring data",
    "Archival backups"
   ]
  },
  {
   "kind": "config",
   "t": "wireless-security-settings",
   "title": "Harden the Office Wi-Fi",
   "scen": "A small office access point is still running its installer's quick-setup defaults. Bring the wireless configuration in line with current security practice for a modern client fleet.",
   "panel": "Access Point · Wireless Security",
   "fields": [
    {
     "id": "mode",
     "label": "Security mode",
     "type": "select",
     "options": [
      "Open",
      "WEP",
      "WPA2-Personal",
      "WPA3-Personal"
     ],
     "answer": 3
    },
    {
     "id": "wps",
     "label": "Wi-Fi Protected Setup (WPS)",
     "type": "toggle",
     "answer": false,
     "initial": true,
     "note": "The PIN method is brute-forceable; current guidance is to disable it."
    },
    {
     "id": "mgmt",
     "label": "Management interface",
     "type": "select",
     "options": [
      "HTTP on LAN and WAN",
      "HTTPS on LAN only",
      "HTTP on LAN only",
      "HTTPS on LAN and WAN"
     ],
     "answer": 1
    },
    {
     "id": "wanadmin",
     "label": "Remote administration from WAN",
     "type": "toggle",
     "answer": false,
     "initial": true
    },
    {
     "id": "ssidbc",
     "label": "Broadcast SSID",
     "type": "toggle",
     "answer": true,
     "initial": true,
     "note": "Hiding the SSID adds no real protection and breaks roaming clients; leave it visible."
    }
   ]
  },
  {
   "kind": "config",
   "t": "access-controls",
   "title": "Lock Down the Directory Accounts",
   "scen": "An audit of the directory server found account policies unchanged since installation. Apply settings that meet the organization's new access-control standard.",
   "panel": "Directory Server · Account Policies",
   "fields": [
    {
     "id": "minlen",
     "label": "Minimum password length",
     "type": "select",
     "options": [
      "6 characters",
      "8 characters",
      "14 characters",
      "4 characters"
     ],
     "answer": 2
    },
    {
     "id": "mfa",
     "label": "Require MFA for remote access",
     "type": "toggle",
     "answer": true,
     "initial": false
    },
    {
     "id": "lockout",
     "label": "Account lockout",
     "type": "select",
     "options": [
      "Disabled",
      "After 5 failed attempts",
      "After 50 failed attempts",
      "After 1 failed attempt"
     ],
     "answer": 1
    },
    {
     "id": "svclogon",
     "label": "Allow interactive logon for service accounts",
     "type": "toggle",
     "answer": false,
     "initial": true
    },
    {
     "id": "history",
     "label": "Enforce password history",
     "type": "toggle",
     "answer": true,
     "initial": false
    }
   ]
  },
  {
   "kind": "hotspot",
   "t": "network-infrastructure-concepts",
   "title": "Build the Screened Subnet",
   "scen": "A company is restructuring its perimeter. Servers that accept connections from the internet must sit in a screened subnet, separated from systems that hold internal data.",
   "prompt": "Select the TWO servers that belong in the screened subnet.",
   "nodes": [
    {
     "id": "inet",
     "x": 8,
     "y": 12,
     "label": "Internet",
     "icon": "cloud"
    },
    {
     "id": "fw",
     "x": 30,
     "y": 12,
     "label": "Edge firewall",
     "icon": "firewall"
    },
    {
     "id": "web",
     "x": 55,
     "y": 6,
     "label": "Public web server",
     "icon": "server"
    },
    {
     "id": "mail",
     "x": 55,
     "y": 22,
     "label": "Inbound mail gateway",
     "icon": "server"
    },
    {
     "id": "sw",
     "x": 55,
     "y": 44,
     "label": "Core switch",
     "icon": "switch"
    },
    {
     "id": "db",
     "x": 80,
     "y": 34,
     "label": "Database server",
     "icon": "server"
    },
    {
     "id": "dc",
     "x": 80,
     "y": 50,
     "label": "Domain controller",
     "icon": "server"
    }
   ],
   "edges": [
    [
     "inet",
     "fw"
    ],
    [
     "fw",
     "web"
    ],
    [
     "fw",
     "mail"
    ],
    [
     "fw",
     "sw"
    ],
    [
     "sw",
     "db"
    ],
    [
     "sw",
     "dc"
    ]
   ],
   "targets": [
    "web",
    "mail"
   ]
  },
  {
   "kind": "hotspot",
   "t": "network-appliances",
   "title": "Block It Before It Lands",
   "scen": "During a purple-team exercise, exploit traffic reached the application servers even though every sensor fired an alert. Management wants the attack stopped automatically next time, not just reported.",
   "prompt": "Select the appliance that can block the malicious traffic on its own.",
   "nodes": [
    {
     "id": "inet",
     "x": 8,
     "y": 12,
     "label": "Internet",
     "icon": "cloud"
    },
    {
     "id": "rtr",
     "x": 28,
     "y": 12,
     "label": "Edge router",
     "icon": "router"
    },
    {
     "id": "ips",
     "x": 48,
     "y": 12,
     "label": "IPS (inline)",
     "icon": "firewall"
    },
    {
     "id": "sw",
     "x": 68,
     "y": 12,
     "label": "Distribution switch",
     "icon": "switch"
    },
    {
     "id": "ids",
     "x": 68,
     "y": 38,
     "label": "IDS (SPAN port)",
     "icon": "server"
    },
    {
     "id": "app",
     "x": 90,
     "y": 12,
     "label": "Application servers",
     "icon": "server"
    }
   ],
   "edges": [
    [
     "inet",
     "rtr"
    ],
    [
     "rtr",
     "ips"
    ],
    [
     "ips",
     "sw"
    ],
    [
     "sw",
     "app"
    ],
    [
     "sw",
     "ids"
    ]
   ],
   "targets": [
    "ips"
   ]
  }
 ]
}
