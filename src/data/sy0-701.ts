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
   "e": "A zero-day vulnerability is one that is unknown to the vendor or has no available patch, so defenders have had zero days to prepare when it is first exploited. The choice describing a flaw that has been patched but not yet deployed is a patch-deployment gap, not a zero-day.",
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
  },
  {
   "id": 167,
   "t": "authentication-authorization-and-accounting",
   "x": "A compliance auditor asks the network team to prove which administrator issued a specific configuration command on a core switch and at what time. Which part of the AAA framework produces that record?",
   "o": [
    "Accounting",
    "Authentication",
    "Attestation",
    "Authorization"
   ],
   "a": 0,
   "e": "Accounting is the AAA function that logs session details such as identity, timestamps, commands issued, and resources consumed, which is exactly what an auditor needs after the fact. Authentication is attractive because it also involves identity, but it only proves who someone is at login time and produces no ongoing activity trail.",
   "d": 1
  },
  {
   "id": 168,
   "t": "authentication-authorization-and-accounting",
   "x": "A contractor signs in successfully with her smart card and PIN, but the payroll share refuses to open any of its files for her. Which AAA function is preventing access?",
   "o": [
    "Authentication",
    "Authorization",
    "Accounting",
    "Identification"
   ],
   "a": 1,
   "e": "The sign-in succeeded, so the identity check already passed; what fails is the evaluation of what that verified identity is permitted to reach, which is authorization. Authentication is the common wrong pick here, but a failed authentication would have rejected the login itself rather than allowing it and then blocking a specific share.",
   "d": 1
  },
  {
   "id": 169,
   "t": "authentication-authorization-and-accounting",
   "x": "A manufacturing firm wants only company-owned laptops to join the plant wireless network, even when an employee types perfectly valid credentials on a personal tablet. What should be issued to each corporate laptop to enforce this?",
   "o": [
    "A dedicated VLAN tag",
    "A stronger passphrase",
    "A longer DHCP lease",
    "A device certificate"
   ],
   "a": 3,
   "e": "Systems are authenticated the same way people are, and a certificate installed on each managed laptop lets the network verify the machine itself before any user credential is considered. A stronger passphrase is tempting but it authenticates the person, not the hardware, so a valid password typed on a personal tablet would still get in.",
   "d": 1
  },
  {
   "id": 170,
   "t": "blockchain-technology",
   "x": "A logistics consortium keeps an identical shared ledger of shipment handoffs at every member company. Changing one older entry would immediately invalidate every entry recorded after it. Which design detail causes that cascade?",
   "o": [
    "Each member encrypts entries with a shared secret",
    "Entries are compressed before being written to disk",
    "Each block stores the hash of the previous block",
    "A central administrator signs off on every entry"
   ],
   "a": 2,
   "e": "Chaining each block to the digest of the one before it means editing any historical entry changes that block's hash and breaks the link for all later blocks, making tampering obvious to every participant. A shared secret sounds plausible but encryption protects confidentiality, not the ordering and immutability of the record.",
   "d": 1
  },
  {
   "id": 171,
   "t": "blockchain-technology",
   "x": "A university registrar is evaluating a distributed ledger for issued diplomas so that employers can confirm a credential is genuine without contacting the school. Which characteristic of the technology supports that goal?",
   "o": [
    "Automatic deletion of outdated credentials",
    "Guaranteed confidentiality of student grades",
    "Reduced storage requirements at every node",
    "Public verifiability of an append-only record"
   ],
   "a": 3,
   "e": "A distributed ledger lets any party independently validate that an entry exists and has not been altered, which removes the need to call the issuer for confirmation. Confidentiality is the wrong fit because the same openness that enables verification means the ledger is a poor place to hide private data.",
   "d": 1
  },
  {
   "id": 172,
   "t": "deception-and-disruption",
   "x": "A security team builds an isolated segment containing fake servers, workstations, and a router, all stocked with believable but worthless data, purely to watch how intruders move between them. What has the team created?",
   "o": [
    "A sandbox",
    "A screened subnet",
    "A hot site",
    "A honeynet"
   ],
   "a": 3,
   "e": "A honeynet is a whole network of decoy systems, which lets defenders study lateral movement rather than just a single point of contact. A screened subnet is the attractive miss: it also sits apart from the internal network, but it hosts real production services for legitimate users instead of bait.",
   "d": 1
  },
  {
   "id": 173,
   "t": "deception-and-disruption",
   "x": "A cloud engineer deliberately plants a fabricated set of API credentials in a public code repository and wires an alert to fire the instant anything attempts to use them. What is the planted item called?",
   "o": [
    "A digital watermark",
    "A checksum seed",
    "A DNS sinkhole",
    "A honeytoken"
   ],
   "a": 3,
   "e": "A honeytoken is fake data that has no legitimate purpose, so any use of it is by definition unauthorized and generates a high-confidence alert. A digital watermark is the closest distractor since both mark data, but a watermark is embedded in real content to trace its origin rather than existing solely as bait.",
   "d": 1
  },
  {
   "id": 174,
   "t": "encryption-technologies",
   "x": "A payment processor must generate and hold thousands of production private keys inside dedicated tamper-resistant hardware that can also offload signing operations at very high volume. Which solution fits this requirement?",
   "o": [
    "A trusted platform module",
    "A hardware security module",
    "A key escrow agreement",
    "A self-encrypting drive"
   ],
   "a": 1,
   "e": "A hardware security module is purpose-built for enterprise scale, storing large numbers of keys in tamper-resistant hardware and accelerating cryptographic operations for many servers at once. A trusted platform module is the tempting choice because it is also tamper-resistant silicon, but it serves a single host and is not designed for high-volume, multi-server key operations.",
   "d": 1
  },
  {
   "id": 175,
   "t": "encryption-technologies",
   "x": "A cloud architect needs one place where the security team can rotate, audit, and revoke the keys used by dozens of storage buckets and managed databases across several accounts. Which service should be adopted?",
   "o": [
    "A key management system",
    "A certificate revocation list",
    "A password vault for employees",
    "A federated identity provider"
   ],
   "a": 0,
   "e": "A key management system centralizes the entire lifecycle of cryptographic keys, including creation, rotation, auditing, and revocation across many services. A certificate revocation list is a plausible miss because it also deals with revocation, but it only publishes which certificates are no longer trusted and manages nothing about data encryption keys.",
   "d": 1
  },
  {
   "id": 176,
   "t": "encryption-technologies",
   "x": "A smartphone vendor isolates stored fingerprint templates inside a dedicated coprocessor that the main operating system cannot read from, even after the OS itself has been fully compromised. What is this protected area called?",
   "o": [
    "A virtual machine",
    "A recovery partition",
    "A signed bootloader",
    "A secure enclave"
   ],
   "a": 3,
   "e": "A secure enclave is an isolated processor and memory region that handles sensitive material and never exposes it to the main OS, so a compromised OS still cannot read the templates. A virtual machine is a reasonable guess about isolation, but it runs on top of the same hardware under a hypervisor and does not provide a hardware root of trust for biometric secrets.",
   "d": 1
  },
  {
   "id": 177,
   "t": "gap-analysis",
   "x": "A hospital measures its existing control set against the requirements it must satisfy before an accreditation review next quarter, then lists every deficiency and the effort needed to remediate each one. Which activity is being performed?",
   "o": [
    "Vulnerability scan",
    "Gap analysis",
    "Penetration test",
    "Business impact analysis"
   ],
   "a": 1,
   "e": "Gap analysis compares a current state against a defined target state and enumerates what is missing plus the work required to close the difference. A vulnerability scan is the attractive wrong answer because it also produces a findings list, but it reports technical weaknesses on hosts rather than measuring the organization against a required control baseline.",
   "d": 1
  },
  {
   "id": 178,
   "t": "gap-analysis",
   "x": "A retailer's board wants to know whether the company actually meets the security framework it publicly claims to follow. Which assessment answers that question most directly?",
   "o": [
    "A comparison of current practices against the framework's requirements",
    "A scan of internet-facing hosts for missing patches",
    "An interview-based estimate of likely breach costs",
    "A tabletop exercise walking through an incident"
   ],
   "a": 0,
   "e": "Answering a conformance question means holding today's practices side by side with the published requirements and documenting where they diverge. Estimating breach costs is a risk-analysis activity: it may inform priorities later, but it says nothing about whether the claimed framework is being met.",
   "d": 1
  },
  {
   "id": 179,
   "t": "key-exchange",
   "x": "Two servers that have never communicated before must establish a common symmetric session key across the public internet, and that key must never travel over the wire. Which approach makes this possible?",
   "o": [
    "A block cipher running in ECB mode",
    "Diffie-Hellman key agreement",
    "A pre-shared secret sent by courier",
    "An extended initialization vector"
   ],
   "a": 1,
   "e": "Diffie-Hellman lets both sides mathematically derive the same secret from exchanged public values, so the resulting session key is never transmitted and cannot be captured. A pre-shared secret delivered by courier does work but it is an out-of-band method that fails the requirement to bootstrap between parties with no prior relationship.",
   "d": 1
  },
  {
   "id": 180,
   "t": "key-exchange",
   "x": "An attacker quietly records months of encrypted traffic to a bank's website, betting on decrypting it later if the server's long-term private key is ever stolen. Which configuration defeats that plan?",
   "o": [
    "Increasing the certificate validity period",
    "Negotiating ephemeral keys discarded after each session",
    "Switching to a cipher with a longer block",
    "Storing the private key on the web server"
   ],
   "a": 1,
   "e": "Keys that exist only for one session and are destroyed when it ends give forward secrecy, so stealing the server's long-term private key later reveals nothing about the archived conversations. A longer block size is a plausible-sounding strength upgrade, but it does not change the fact that a static key could still unlock every recorded session.",
   "d": 1
  },
  {
   "id": 181,
   "t": "non-repudiation",
   "x": "A supplier insists it never submitted a large purchase order that the buyer's procurement system accepted and processed last week. Which control would let the buyer prove the submission genuinely came from that supplier and arrived unchanged?",
   "o": [
    "A nightly database backup",
    "A digital signature on the order",
    "A shared account password",
    "A TLS connection to the portal"
   ],
   "a": 1,
   "e": "A signature created with the supplier's private key can only have been produced by the holder of that key, and verifying it also confirms the order content was not modified, giving both proof of origin and proof of integrity. A TLS connection is tempting because it protects the order in transit, but it authenticates the server and encrypts the channel without binding the individual submission to a specific sender.",
   "d": 1
  },
  {
   "id": 182,
   "t": "non-repudiation",
   "x": "A law firm's document platform must produce evidence admissible in court showing exactly which partner approved a settlement and that the approval text was never altered afterward. Which security property is the platform delivering?",
   "o": [
    "Confidentiality",
    "Fault tolerance",
    "Least privilege",
    "Non-repudiation"
   ],
   "a": 3,
   "e": "Non-repudiation combines proof of origin with proof of integrity so the signer cannot credibly disown the action later. Confidentiality is the common confusion, but keeping the settlement secret from outsiders does nothing to establish who approved it or whether the wording changed.",
   "d": 1
  },
  {
   "id": 183,
   "t": "obfuscation",
   "x": "An insider walks a client list out of the company by hiding it inside the pixel data of vacation photos uploaded to a public gallery, and the images still open and display normally. Which technique is in use?",
   "o": [
    "Tokenization",
    "Salting",
    "Steganography",
    "Data masking"
   ],
   "a": 2,
   "e": "Steganography conceals information inside an ordinary-looking carrier file so that nothing about the image signals the presence of hidden data. Tokenization is a reasonable guess since it also disguises sensitive values, but it substitutes a placeholder for data that stays in a system of record rather than smuggling the original inside another file.",
   "d": 1
  },
  {
   "id": 184,
   "t": "obfuscation",
   "x": "A retailer allows its offshore support staff to view order histories, but every card value renders as X characters except the final four digits, directly in the same field. Which technique is this?",
   "o": [
    "Certificate pinning",
    "Key stretching",
    "Steganography",
    "Data masking"
   ],
   "a": 3,
   "e": "Data masking hides part of a value in place so staff retain just enough context to do their jobs while the full sensitive value is never displayed. Key stretching is unrelated: it repeatedly hashes a password to slow brute-force attacks and has nothing to do with limiting what a support agent can see on screen.",
   "d": 1
  },
  {
   "id": 185,
   "t": "technical-change-management",
   "x": "Immediately after a new inventory application is rolled out, endpoint protection quarantines its executable on every workstation and users cannot launch it. Which technical change must accompany the deployment?",
   "o": [
    "Rotating the service account passwords",
    "Increasing the local log retention period",
    "Adding the executable to the allow list",
    "Restarting the domain controllers nightly"
   ],
   "a": 2,
   "e": "Endpoint protection that permits only approved binaries will block anything unrecognized, so the new application's executable has to be added to the approved list as part of the change. Rotating service account passwords is a legitimate hygiene task but it does not affect whether the security agent will let an unknown binary run.",
   "d": 1
  },
  {
   "id": 186,
   "t": "technical-change-management",
   "x": "An administrator plans a database engine upgrade for Saturday night. Two reporting services and a public web front end connect to that instance and will error out while it is offline. What must the plan address before the maintenance window opens?",
   "o": [
    "The dependent services that rely on the instance",
    "The number of concurrent user licenses",
    "The vendor's marketing release notes",
    "The physical rack position of the server"
   ],
   "a": 0,
   "e": "Technical change management requires mapping every downstream system that consumes the component being changed so restart order, outage notices, and rollback timing can be planned. Concurrent license counts might matter for capacity planning but they have no bearing on which services break while the database is unavailable.",
   "d": 1
  },
  {
   "id": 187,
   "t": "buffer-overflows",
   "x": "A developer's C routine copies a network-supplied string into a fixed 64-byte stack array without ever checking the incoming length. Crafted traffic makes the program transfer execution to instructions the sender chose. Which coding flaw is being exploited?",
   "o": [
    "Integer overflow",
    "Buffer overflow",
    "Memory leak",
    "Null pointer dereference"
   ],
   "a": 1,
   "e": "Writing more data than the destination region can hold overwrites adjacent stack memory, including the saved return address, which is how the attacker redirects execution. A memory leak is wasted memory that is never released and degrades availability over time, but it does not give an attacker control of the instruction pointer.",
   "d": 2
  },
  {
   "id": 188,
   "t": "buffer-overflows",
   "x": "A security architect must make memory-corruption bugs harder to weaponize in legacy C++ services that cannot be rewritten this fiscal year. Which combination of compiler and operating system protections most directly frustrates reliable exploitation?",
   "o": [
    "Certificate pinning and mutual authentication",
    "Address space layout randomization and stack canaries",
    "Rate limiting and connection throttling",
    "Full disk encryption and secure boot"
   ],
   "a": 1,
   "e": "Randomizing where libraries and the stack load removes the predictable addresses an exploit needs, and canary values placed before the return address are checked on function exit so overwrites abort the process. Full disk encryption and secure boot protect data at rest and the boot chain; neither affects what happens inside a running process's memory.",
   "d": 2
  },
  {
   "id": 189,
   "t": "race-conditions",
   "x": "A banking application verifies an account balance, pauses briefly while a fraud service responds, and then completes the withdrawal. An attacker fires many simultaneous withdrawal requests and drains the account far past its limit. Which class of flaw made this possible?",
   "o": [
    "Insecure deserialization",
    "Directory traversal",
    "Cross-site request forgery",
    "Time-of-check to time-of-use flaw"
   ],
   "a": 3,
   "e": "The balance validated at check time is stale by the time each transaction commits, so concurrent requests all pass the same check. Cross-site request forgery tricks an authenticated browser into submitting an unwanted request, which is not what happens here because the attacker is submitting the requests directly and the defect is the gap between validation and use.",
   "d": 2
  },
  {
   "id": 190,
   "t": "race-conditions",
   "x": "A privileged installer creates a temporary file, then reopens it moments later to write configuration data. A local user exploits that interval by replacing the path with a symbolic link pointing at a system file. Which development practice best removes the opportunity?",
   "o": [
    "Perform the operation atomically with a file lock",
    "Encrypt the temporary file with a session key",
    "Increase the delay between opening and writing",
    "Log every write to the temporary file for review"
   ],
   "a": 0,
   "e": "Holding a lock and using atomic create-and-open semantics means the object validated is the same object written, closing the interval the attacker relies on. Encrypting the file protects confidentiality but the installer would still follow the swapped link and write to a location of the attacker's choosing.",
   "d": 2
  },
  {
   "id": 191,
   "t": "memory-injections",
   "x": "Endpoint telemetry shows a signed, legitimate Windows utility starting with an empty command line. A second, unrelated process then allocates executable memory inside that utility and writes shellcode into it before resuming its threads. Which technique does this describe?",
   "o": [
    "Loading a rogue kernel driver to hide files from listings",
    "Modifying the boot record so malware loads before startup",
    "Injecting code into the address space of a running process",
    "Replacing the utility's binary on disk with a trojanized copy"
   ],
   "a": 2,
   "e": "Placing hostile instructions inside a trusted process lets the payload inherit that process's reputation, signature, and network permissions while nothing malicious ever touches the file system. Swapping the binary on disk would leave a modified file that hashing and signature checks would flag, which is exactly what this technique is designed to avoid.",
   "d": 2
  },
  {
   "id": 192,
   "t": "malicious-updates",
   "x": "A hostile actor swaps the update image hosted on a network appliance vendor's public download mirror for a backdoored build, and administrators pull maintenance releases straight from that mirror. Which customer-side control would most likely have surfaced the tampering before installation?",
   "o": [
    "Restricting the appliance to a management network",
    "Enabling automatic installation on every managed device",
    "Validating the digital signature on the firmware image",
    "Scheduling maintenance windows outside business hours"
   ],
   "a": 2,
   "e": "An image swapped on a download mirror cannot carry a valid signature, because the attacker does not hold the vendor's signing key, so verification fails before anything is written to the device. Automatic installation makes the situation worse by removing the human checkpoint entirely, pushing the tampered image out faster.",
   "d": 2
  },
  {
   "id": 193,
   "t": "replay-attacks",
   "x": "An attacker sitting on a guest wireless segment captures the exchange between a badge reader and its door controller, then later retransmits those identical frames byte for byte. The door opens. Which design change would have defeated this?",
   "o": [
    "Increase the shared secret length from 128 to 256 bits",
    "Require badge holders to change their PIN every quarter",
    "Include a nonce and timestamp in every authentication message",
    "Move the controller onto a dedicated management network"
   ],
   "a": 2,
   "e": "A value that is used once, combined with a freshness check, makes a captured message invalid the second time it appears, so recording and resending it accomplishes nothing. Lengthening the shared secret raises the cost of cracking the key but is irrelevant when the attacker never needs the key and simply resends valid ciphertext.",
   "d": 2
  },
  {
   "id": 194,
   "t": "replay-attacks",
   "x": "During an assessment, a consultant records a session identifier crossing an unencrypted internal link, submits that same identifier to the application several hours later, and is granted the original user's privileges. Which weakness in the session design allowed it?",
   "o": [
    "The identifier is stored in a browser cookie",
    "The identifier is drawn from a random source",
    "The identifier is longer than the standard requires",
    "The identifier never expires and can be reused"
   ],
   "a": 3,
   "e": "Without expiry or binding to a single use, a captured identifier remains a valid credential indefinitely, so anyone who observes it inherits the account. Storing session identifiers in cookies is normal practice and not itself the defect; the problem is that the value stayed valid long after the legitimate session should have ended.",
   "d": 2
  },
  {
   "id": 195,
   "t": "dns-attacks",
   "x": "Staff at one branch office reach a convincing but subtly wrong login page for their bank, while colleagues at headquarters reach the genuine site. The branch resolver holds an entry that disagrees with the authoritative zone data. What has happened?",
   "o": [
    "The branch firewall is blocking outbound port 53",
    "The web server's certificate was revoked early",
    "The resolver cache was poisoned with a forged record",
    "The registrar account for the bank was taken over"
   ],
   "a": 2,
   "e": "An injected false answer stored in the local cache sends every client using that resolver to an address the attacker controls, which explains why only one office is affected. A registrar takeover would misdirect users everywhere, not just at a single branch, because the change would propagate from the authoritative servers.",
   "d": 2
  },
  {
   "id": 196,
   "t": "dns-attacks",
   "x": "An automated notice confirms that the nameserver delegation for a company's public namespace was altered overnight, and mail begins flowing to unfamiliar hosts. Investigators confirm nothing inside the corporate perimeter was breached. Which risk does this illustrate?",
   "o": [
    "Interception of traffic on the local subnet",
    "Hijacking of the domain through the registrar account",
    "Exhaustion of the mail server's connection pool",
    "Amplification of queries against an open resolver"
   ],
   "a": 1,
   "e": "Control of the registrar account lets an adversary point the entire namespace at infrastructure they own without ever touching the victim's network, which is why internal forensics come back clean. Amplification abuses resolvers to flood a third party with traffic and would produce a volumetric outage, not a silent redirection of mail.",
   "d": 2
  },
  {
   "id": 197,
   "t": "wireless-attacks",
   "x": "Conference attendees associate with a radio broadcasting the hotel's familiar network name at a stronger signal than the genuine one, and their traffic is quietly proxied through a laptop in an adjacent room. Which attack is in progress?",
   "o": [
    "Bluetooth pairing abuse",
    "Signal jamming",
    "Protocol downgrade",
    "Evil twin"
   ],
   "a": 3,
   "e": "A rogue radio impersonating a trusted network name and out-competing it on signal strength pulls clients into associating with the attacker, who then sees everything they send. Jamming would deny service by making the band unusable rather than quietly relaying traffic, so users would notice the outage instead of browsing normally.",
   "d": 2
  },
  {
   "id": 198,
   "t": "wireless-attacks",
   "x": "A warehouse deploys handheld scanners that must validate each worker against the corporate directory. The security team specifically wants to prevent an adversary from harvesting one reusable key by capturing the association handshake. Which configuration best meets the goal?",
   "o": [
    "Open authentication with a captive portal",
    "WPA2 Personal with a long passphrase",
    "MAC address filtering with SSID suppression",
    "WPA3 Enterprise with 802.1X authentication"
   ],
   "a": 3,
   "e": "Per-user credentials validated through an authentication server mean there is no single shared key to capture, and each session derives independent keying material. A long passphrase raises cracking cost but every device still shares one secret, so a single captured handshake plus offline effort exposes the whole network.",
   "d": 2
  },
  {
   "id": 199,
   "t": "cryptographic-attacks",
   "x": "Researchers publish a method for producing two different documents that yield the same digest under a legacy hashing algorithm, allowing a signed approval form to be exchanged for an altered version. Which property of the algorithm has failed?",
   "o": [
    "Forward secrecy",
    "Key length adequacy",
    "Collision resistance",
    "Perfect randomness"
   ],
   "a": 2,
   "e": "The guarantee that two distinct inputs will not produce the same output is what lets a signature over a digest stand in for a signature over the document, and that guarantee is exactly what the researchers broke. Forward secrecy concerns whether past session traffic stays protected after a long-term key leaks, which has nothing to do with digest uniqueness.",
   "d": 2
  },
  {
   "id": 200,
   "t": "cryptographic-attacks",
   "x": "A load balancer still accepts a client request to fall back to an obsolete protocol version whenever the modern handshake fails, and an adversary abuses that behavior to force weak ciphers onto the connection. Which mitigation addresses the underlying problem?",
   "o": [
    "Enable client certificate authentication",
    "Increase the session ticket lifetime",
    "Rotate the server certificate more frequently",
    "Disable the outdated protocol versions on the server"
   ],
   "a": 3,
   "e": "If the weak versions are not offered at all, there is nothing to fall back to and the negotiation cannot be pushed downward. Rotating the certificate more often limits the damage from a stolen private key but leaves the negotiation logic untouched, so the same forced fallback still succeeds.",
   "d": 2
  },
  {
   "id": 201,
   "t": "application-attacks",
   "x": "A support portal assembles a file path from a user-supplied filename parameter. A tester submits a value containing several sequences of dot-dot-slash and receives the contents of a system configuration file well outside the web root. Which flaw is being exploited?",
   "o": [
    "Privilege escalation",
    "Command injection",
    "Session fixation",
    "Directory traversal"
   ],
   "a": 3,
   "e": "Relative path sequences let the request climb out of the intended folder and read arbitrary files the web process can access. Command injection would require the input to reach a shell and execute a separate program, but here the application is only resolving a path and returning file contents.",
   "d": 2
  },
  {
   "id": 202,
   "t": "application-attacks",
   "x": "An internal ticketing system passes a page parameter to a shell utility. When a tester appends a semicolon followed by a short system command, the HTTP response includes the service account's user identity. Which control best remediates the defect?",
   "o": [
    "Add a rate limit to the ticketing endpoint",
    "Validate input against a strict allow list",
    "Rotate the service account password monthly",
    "Compress responses before they leave the server"
   ],
   "a": 1,
   "e": "Accepting only values that match a known-good pattern, and invoking programs without a shell interpreter, prevents metacharacters from being treated as command separators. Rotating the service account password does not help because the attacker is executing commands as that account, not authenticating with its credentials.",
   "d": 2
  },
  {
   "id": 203,
   "t": "malicious-code",
   "x": "Reviewing an accounting workstation, an analyst finds a spreadsheet containing an embedded macro that decodes a long obfuscated string and hands it to a scripting host the moment the file is opened. Which description best characterizes this artifact?",
   "o": [
    "A legitimate add-in with a corrupted signature",
    "Hostile code delivered inside a document macro",
    "An unpatched defect in the spreadsheet application",
    "A misconfigured spreadsheet formula cache"
   ],
   "a": 1,
   "e": "Obfuscated content that automatically hands instructions to an interpreter on open is deliberate attacker tooling, not a functional business macro. An unpatched application defect would be a weakness the attacker exploits, whereas here the document itself carries the payload and no software flaw is required for it to run.",
   "d": 2
  },
  {
   "id": 204,
   "t": "viruses-and-worms",
   "x": "Within twenty minutes, a manufacturing plant sees the same malware appear on hundreds of unpatched hosts. Nobody opened an attachment, and the propagation clearly follows exposed file-sharing ports rather than any user action. Which malware type explains this?",
   "o": [
    "Potentially unwanted program",
    "File-infecting virus",
    "Logic bomb",
    "Worm"
   ],
   "a": 3,
   "e": "Self-propagating code that exploits a network service needs no human to carry it, which is why the spread is fast and follows open ports instead of mailboxes. A file-infecting virus requires someone to launch an infected executable, so it could not have covered hundreds of machines in minutes with no user involvement.",
   "d": 2
  },
  {
   "id": 205,
   "t": "viruses-and-worms",
   "x": "Malicious code appends itself to executable files sitting on a departmental shared drive and only becomes active when a colleague launches one of those programs on their own workstation. Which statement best describes what this code requires to spread?",
   "o": [
    "It needs a command channel before it can activate",
    "It needs a host program and a user to run it",
    "It needs an open listening port on the target",
    "It needs administrative rights on the source host"
   ],
   "a": 1,
   "e": "This category attaches to a carrier file and depends entirely on someone executing that carrier, which is the defining difference from self-replicating network code. An open listening port would matter for something that propagates over the network on its own, but this sample never initiates a connection to reach a new machine.",
   "d": 2
  },
  {
   "id": 206,
   "t": "spyware-and-bloatware",
   "x": "Laptops arriving from a supplier are preloaded with a trial security suite, three browser toolbars, and a vendor utility that consumes memory and resists removal through the normal uninstall path. What is the primary security concern with this software?",
   "o": [
    "It encrypts user files without a recovery key",
    "It disables the built-in firewall by default",
    "It prevents the operating system from booting",
    "It expands the attack surface with unpatched code"
   ],
   "a": 3,
   "e": "Preinstalled extras run with real privileges, are rarely covered by the patch process, and have repeatedly shipped with serious defects, so each one adds exploitable surface nobody is maintaining. It does not stop the system from booting; the machines work fine, which is precisely why the risk goes unnoticed.",
   "d": 2
  },
  {
   "id": 207,
   "t": "spyware-and-bloatware",
   "x": "A marketing employee installs a free video converter from a search advertisement. Afterward the browser homepage changes, searches are redirected through an unknown domain, and a background process reports visited addresses to a remote host. Which malware category fits?",
   "o": [
    "Logic bomb",
    "Spyware",
    "Ransomware",
    "Rootkit"
   ],
   "a": 1,
   "e": "Silently monitoring activity and shipping browsing details to a third party is surveillance for profit, bundled with software the user chose to install. Ransomware would announce itself by denying access to data and demanding payment, whereas this code depends on remaining unnoticed so collection continues.",
   "d": 2
  },
  {
   "id": 208,
   "t": "physical-attacks",
   "x": "While standing behind a contractor in a lunch line, an attacker holds a small handheld device near the contractor's proximity credential. Days later a duplicate is presented at the loading dock and access is granted. Which countermeasure most directly defeats this?",
   "o": [
    "Shielded badge sleeves and challenge-response cards",
    "Additional lighting around the loading dock",
    "Longer PIN codes on the keypad entry system",
    "More frequent password rotation for badge holders"
   ],
   "a": 0,
   "e": "Blocking the radio field prevents the credential from being read covertly, and cards that answer a cryptographic challenge cannot be duplicated from a captured identifier. Better lighting may deter loitering but does nothing about a read that happens elsewhere, in a public setting, with no visible sign of an attack.",
   "d": 2
  },
  {
   "id": 209,
   "t": "physical-attacks",
   "x": "A retail chain discovers that several unattended payment terminals have a thin overlay fitted to the reader slot and a pinhole camera aimed at the keypad. Which attack does this equipment support?",
   "o": [
    "Brute-force entry",
    "Radio frequency jamming",
    "Card skimming",
    "Environmental sabotage"
   ],
   "a": 2,
   "e": "The overlay harvests the magnetic stripe or chip data while the camera records the PIN, giving the attacker everything needed to reproduce transactions. Jamming would interfere with wireless signals to deny service, but this hardware is built to capture data quietly so the terminal keeps working normally.",
   "d": 2
  },
  {
   "id": 210,
   "t": "impersonation",
   "x": "A man in a high-visibility vest carrying a printed work order arrives unannounced at a data center loading bay, insists the chiller needs emergency service, and pressures the receptionist to badge him through. Which social engineering technique is central here?",
   "o": [
    "Credential stuffing",
    "Shoulder surfing",
    "Dumpster diving",
    "Impersonation"
   ],
   "a": 3,
   "e": "Assuming the identity of a trusted vendor, backed by props and urgency, is the entire mechanism by which access is obtained. Shoulder surfing is the covert observation of a screen or keypad and would follow only after the attacker was already inside, so it does not explain how entry was gained.",
   "d": 2
  },
  {
   "id": 211,
   "t": "watering-hole-attacks",
   "x": "A defense contractor has no authority over the security of a small trade association portal that its engineers visit daily, yet that portal is an obvious staging ground for an adversary who cannot phish them successfully. Which layered control best limits harm if the portal starts serving hostile content?",
   "o": [
    "Browser isolation paired with endpoint detection",
    "A stricter outbound email filtering policy",
    "Quarterly awareness training for the engineers",
    "Longer minimum password length for portal logins"
   ],
   "a": 0,
   "e": "Rendering untrusted sites away from the endpoint contains hostile content before it reaches the workstation, and behavioral detection catches what slips through, which is the right posture when the compromised resource is legitimate and trusted. Email filtering is aimed at the wrong channel because the delivery path here is ordinary web browsing to a site staff already trust.",
   "d": 2
  },
  {
   "id": 212,
   "t": "hardware-vulnerabilities",
   "x": "An asset inventory lists forty network switches that passed end of support two years ago, and the manufacturer has confirmed no further security firmware will ever be published for them. Which statement best captures the resulting exposure?",
   "o": [
    "Warranty claims will be denied by the vendor",
    "Licensing costs will rise at the next renewal",
    "The switches will stop forwarding traffic soon",
    "Newly found flaws will never be patched"
   ],
   "a": 3,
   "e": "Once a vendor stops issuing fixes, every future disclosure becomes a permanent exposure that can only be managed by isolation or replacement. Losing warranty coverage is a real business consequence but it is a support and cost issue, not the security condition that makes these devices dangerous to keep in production.",
   "d": 2
  },
  {
   "id": 213,
   "t": "virtualization-vulnerabilities",
   "x": "In a shared hosting cluster, a researcher demonstrates that code running inside one tenant's virtual machine can reach memory belonging to the underlying platform and to neighboring tenants. Which condition does this demonstrate?",
   "o": [
    "Exhaustion of the storage array cache",
    "Escape to the hypervisor",
    "Failure of a guest license validation check",
    "Saturation of the virtual switch uplink"
   ],
   "a": 1,
   "e": "Breaking out of the isolation boundary collapses the assumption that tenants cannot affect one another, making it among the most severe findings in any multi-tenant environment. Uplink saturation is a performance and availability concern that might slow neighbors down but never grants read access to their memory.",
   "d": 2
  },
  {
   "id": 214,
   "t": "cloud-specific-vulnerabilities",
   "x": "A researcher reports that a company's customer invoices are readable by anyone on the internet because the object storage container was left with public list and read permissions. Which issue does this represent?",
   "o": [
    "An overloaded content delivery network",
    "An expired service provider contract",
    "A compromised encryption key escrow",
    "A misconfigured storage access policy"
   ],
   "a": 3,
   "e": "Nothing was exploited; the permissions themselves granted the world access, which is the most common cause of cloud data exposure. A compromised key would imply the attacker defeated encryption to obtain plaintext, but here the data was simply served to anyone who requested it.",
   "d": 2
  },
  {
   "id": 215,
   "t": "cloud-specific-vulnerabilities",
   "x": "During onboarding, a platform team needs to settle who is accountable for patching guest operating systems on infrastructure-as-a-service instances versus who patches the physical hosts underneath them. Which concept answers that question?",
   "o": [
    "The shared responsibility model",
    "The zero trust architecture model",
    "The least privilege model",
    "The defense in depth model"
   ],
   "a": 0,
   "e": "This concept defines the boundary between what the provider secures and what the customer secures, and it shifts depending on the service tier being consumed. Defense in depth describes layering multiple controls to survive a single failure, which is good practice but says nothing about which party owns a given layer.",
   "d": 2
  },
  {
   "id": 216,
   "t": "misconfiguration-vulnerabilities",
   "x": "An internal audit uncovers a departmental file share where the everyone group holds full control, letting any authenticated staff member alter payroll spreadsheets. Which remediation addresses the root cause?",
   "o": [
    "Increase the audit log retention period",
    "Move the share behind a reverse proxy",
    "Apply least-privilege permissions to the share",
    "Enable full disk encryption on the file server"
   ],
   "a": 2,
   "e": "Granting each group only the access its role requires eliminates the over-permission that created the exposure. Full disk encryption protects the data if a drive is physically removed, but it is transparent to logged-in users, so every one of them would still be able to modify the payroll files.",
   "d": 2
  },
  {
   "id": 217,
   "t": "misconfiguration-vulnerabilities",
   "x": "A penetration tester reaches a printer's embedded web console using the login shown in the manufacturer's published manual, then pivots to documents held in the print spooler. Which weakness enabled that initial foothold?",
   "o": [
    "A missing intrusion prevention rule",
    "An unencrypted wireless link",
    "An expired device certificate",
    "Unchanged factory credentials"
   ],
   "a": 3,
   "e": "Values that ship identically on every unit are effectively public, so leaving them in place means the device has no authentication at all. A missing prevention rule might have detected or blocked follow-on activity, but the console login itself looked like an ordinary successful administrative sign-in.",
   "d": 2
  },
  {
   "id": 218,
   "t": "mobile-device-vulnerabilities",
   "x": "An executive's personal phone has been altered to strip the vendor's software restrictions so that applications from outside the official store can be installed. Why does the security team refuse to enroll it in the corporate mail system?",
   "o": [
    "The screen resolution breaks mail rendering",
    "The carrier will refuse to activate the SIM",
    "The operating system sandbox no longer holds",
    "The battery will drain faster under policy"
   ],
   "a": 2,
   "e": "Removing those restrictions dismantles the isolation that keeps one application from reading another's data, so any installed app could reach corporate mail and credentials. Battery consumption is an inconvenience with no bearing on whether company data stays confined to the approved application.",
   "d": 2
  },
  {
   "id": 219,
   "t": "mobile-device-vulnerabilities",
   "x": "A field technician loses a tablet holding cached maintenance records for regulated customer sites. The unit had only a four-digit passcode and was never enrolled in management. Which capability would have most reduced the data exposure?",
   "o": [
    "Weekly antivirus scans of the tablet",
    "A louder audible alarm on the device",
    "A tracking sticker on the tablet case",
    "Remote wipe with enforced device encryption"
   ],
   "a": 3,
   "e": "Encryption keeps the stored records unreadable without the passcode, and a remote wipe lets the organization destroy the data before anyone works through a weak four-digit space. Antivirus scanning defends against hostile software on a device you still possess and offers nothing once the hardware is in someone else's hands.",
   "d": 2
  },
  {
   "id": 220,
   "t": "operating-system-vulnerabilities",
   "x": "A scan of a domain controller flags a kernel defect that lets any standard user obtain system-level rights. The vendor shipped a fix last month, but the change advisory board has not yet approved the required reboot. Which compensating step is most appropriate in the interim?",
   "o": [
    "Increase the scan frequency to daily",
    "Disable the server's outbound internet access",
    "Extend the password history requirement",
    "Limit interactive logon to a small admin group"
   ],
   "a": 3,
   "e": "The defect requires a local session to abuse, so shrinking the set of accounts allowed to sign in interactively removes nearly all opportunity until the patch window arrives. Scanning more often only re-reports a finding that is already known and does nothing to reduce the likelihood of exploitation.",
   "d": 2
  },
  {
   "id": 221,
   "t": "mitigation-techniques",
   "x": "Analysts observe that users repeatedly launch unsigned binaries pulled from the internet, and definition-based scanning misses several of them because the samples are freshly compiled. Which control stops unknown executables from running at all?",
   "o": [
    "Application allow listing",
    "Screen saver lock policy",
    "Full disk encryption",
    "Host-based firewall rules"
   ],
   "a": 0,
   "e": "Permitting only approved binaries to execute inverts the model so that novelty is blocked by default rather than requiring prior knowledge of each threat. Host firewall rules govern network connections and would not prevent a newly compiled program from launching and acting locally on the machine.",
   "d": 2
  },
  {
   "id": 222,
   "t": "segmentation-and-access-control",
   "x": "A hospital wants infusion pumps and imaging equipment to communicate only with their two management servers, never with each other and never outbound to the internet, and it cannot replace the switching hardware already installed. Which approach best delivers that outcome?",
   "o": [
    "Isolated VLANs with restrictive access control lists",
    "Port mirroring to a monitoring appliance",
    "A single flat network with host antivirus",
    "Static IP assignment for every device"
   ],
   "a": 0,
   "e": "Separating the medical equipment into its own broadcast domains and permitting only the specific flows to the management servers enforces the requirement using capabilities the existing switches already have. Port mirroring gives visibility into traffic but permits nothing and blocks nothing, so a compromised pump could still reach every other device.",
   "d": 2
  },
  {
   "id": 223,
   "t": "port-security",
   "x": "A university dormitory network requires each connecting device to present credentials that the switch relays to a RADIUS server before any user traffic is forwarded on that jack. Which standard defines this port-based authentication exchange?",
   "o": [
    "IEEE 802.11ax",
    "IEEE 802.1Q",
    "IEEE 802.3af",
    "IEEE 802.1X"
   ],
   "a": 3,
   "e": "802.1X provides port-based network access control: the switch acts as an authenticator and holds the port in an unauthorized state until the RADIUS server validates the supplicant. 802.1Q is VLAN tagging, which segments traffic but authenticates nobody, and 802.3af merely delivers power over the same cabling.",
   "d": 3
  },
  {
   "id": 224,
   "t": "port-security",
   "x": "Workstations at a branch office intermittently receive an incorrect gateway address from an unauthorized device that someone plugged into a conference room wall jack. Which switch feature prevents those rogue address offers from being honored?",
   "o": [
    "BPDU guard",
    "Port mirroring",
    "DHCP snooping",
    "Dynamic ARP inspection"
   ],
   "a": 2,
   "e": "DHCP snooping designates switch ports as trusted or untrusted and discards server-side lease offers arriving on untrusted ports, so an unauthorized server cannot hand out addressing. Dynamic ARP inspection is a companion feature, but it validates address-to-MAC bindings in ARP messages rather than blocking bogus lease assignment.",
   "d": 3
  },
  {
   "id": 225,
   "t": "port-security",
   "x": "A manufacturing plant wants every access layer interface to learn the first hardware address that appears on it and to disable itself if a different device is later attached to the same jack. Which configuration achieves that?",
   "o": [
    "Sticky MAC learning with a violation shutdown",
    "A spanning tree root guard setting",
    "An access control list bound to the interface",
    "A private VLAN edge assignment"
   ],
   "a": 0,
   "e": "Port security with sticky learning records the first MAC address seen and writes it into the running configuration; a violation action of shutdown then disables the port when another device appears. An access control list filters IP traffic after a device is already connected and says nothing about which physical device may use the jack.",
   "d": 3
  },
  {
   "id": 226,
   "t": "power-resiliency",
   "x": "A regional hospital's data center has battery units sized to carry the full load for roughly eight minutes. Leadership wants the facility to keep treating patients through a multi-day storm outage. Which investment meets that goal?",
   "o": [
    "Installing an on-site generator with contracted fuel delivery",
    "Deploying managed power strips with remote reboot",
    "Adding a second battery cabinet to each row",
    "Fitting every server with dual power supplies"
   ],
   "a": 0,
   "e": "Batteries bridge seconds to minutes; sustained operation across days requires a generator plus a fuel supply arrangement to keep refilling it. Extra battery cabinets add minutes at considerable cost and still cannot span days, and dual supplies protect against a failed power supply rather than a loss of utility power.",
   "d": 3
  },
  {
   "id": 227,
   "t": "power-resiliency",
   "x": "Servers in a colocation cage each ship with two power supplies, but the technician cabled both of them into the same rack strip on one circuit. What weakness does this introduce?",
   "o": [
    "The supplies will share load unevenly and overheat",
    "A single upstream failure still takes every server down",
    "The circuit breaker will trip from doubled inrush current",
    "Voltage sag protection is lost on the second supply"
   ],
   "a": 1,
   "e": "Redundant supplies only help when each is fed from an independent circuit, ideally from separate distribution units and separate utility or battery paths; a shared strip collapses the design back to one point of failure. Inrush current is a genuine design factor, but staggered startup handles it and it is not the flaw created by this cabling choice.",
   "d": 3
  },
  {
   "id": 228,
   "t": "power-resiliency",
   "x": "A small branch office needs its network rack shielded from frequent brownouts and voltage sags, not only from total blackouts, and the site has no room or budget for fuel storage. Which option fits best?",
   "o": [
    "A second utility feed from a different substation",
    "A surge protector on each incoming receptacle",
    "A line-interactive UPS with automatic voltage regulation",
    "A standby generator with a manual transfer switch"
   ],
   "a": 2,
   "e": "A line-interactive unit corrects high and low input voltage with an autotransformer without draining its battery, which is exactly what repeated sags and brownouts demand. A surge protector only clamps spikes and does nothing for undervoltage, while a generator addresses complete outages and needs the fuel storage this site cannot provide.",
   "d": 3
  },
  {
   "id": 229,
   "t": "capacity-planning",
   "x": "A managed service provider's response plan assumes analysts can staff a round-the-clock bridge call for a full week, yet the entire security team consists of four employees. Which capacity planning dimension was overlooked?",
   "o": [
    "People",
    "Infrastructure",
    "Technology",
    "Documentation"
   ],
   "a": 0,
   "e": "Capacity planning spans people, technology, and infrastructure, and a plan that outruns available headcount has a people gap no matter how capable the tooling is. Technology capacity would be the answer if the shortfall were license counts or appliance throughput, which is not what limits this team.",
   "d": 3
  },
  {
   "id": 230,
   "t": "capacity-planning",
   "x": "An online retailer suffered checkout timeouts during a holiday promotion because the database tier exhausted its connection pool at peak. Which activity would most likely have exposed that shortfall in advance?",
   "o": [
    "A configuration review of the web application firewall",
    "A credentialed vulnerability scan of the database hosts",
    "A tabletop exercise involving the marketing department",
    "Load forecasting and stress testing against projected demand"
   ],
   "a": 3,
   "e": "Forecasting expected peak volume and then driving synthetic load at that level surfaces resource ceilings such as connection pools before customers find them. A tabletop exercise validates decision making and communication during an incident, but it never generates the traffic needed to reveal a throughput limit.",
   "d": 3
  },
  {
   "id": 231,
   "t": "capacity-planning",
   "x": "A seasonal employer plans to issue 400 additional laptops, while its endpoint protection subscription covers 600 agents and 500 are already deployed. What does this situation reveal?",
   "o": [
    "An unresolved data classification conflict",
    "A technology capacity shortfall for planned growth",
    "An unacceptable recovery point objective",
    "A gap in the change management workflow"
   ],
   "a": 1,
   "e": "Licensing and product ceilings are part of technology capacity, and 900 required agents against a 600-agent entitlement is a shortfall that must be resolved before onboarding begins. Change management governs how the rollout is approved and documented, but no approval workflow conjures the missing entitlements.",
   "d": 3
  },
  {
   "id": 232,
   "t": "recovery-testing",
   "x": "A credit union wants to confirm that department leads understand their duties during a ransomware event, but the exercise must not touch live systems or interrupt member services. Which format fits?",
   "o": [
    "A live simulation of encrypted file shares",
    "A full interruption failover to the alternate site",
    "A parallel processing run at the warm site",
    "A tabletop walkthrough led by a facilitator"
   ],
   "a": 3,
   "e": "A tabletop is discussion based: participants talk through their roles against an injected scenario, so no production system is touched. A full interruption test deliberately shuts down the primary site to prove failover works, which is precisely the disruption this organization ruled out.",
   "d": 3
  },
  {
   "id": 233,
   "t": "recovery-testing",
   "x": "Nightly jobs have reported success for eight months, yet when a file server is rebuilt the administrator finds the archives cannot be opened. Which practice would have surfaced the problem sooner?",
   "o": [
    "Encrypting the media before it leaves the site",
    "Extending the retention period of the media",
    "Scheduled test restores from the stored media",
    "Replicating the media to a second facility"
   ],
   "a": 2,
   "e": "A job that exits cleanly proves only that it ran, not that the resulting data is readable, so periodically restoring real files to a scratch system is the only reliable validation. Longer retention simply preserves more copies of the same unusable archives.",
   "d": 3
  },
  {
   "id": 234,
   "t": "recovery-testing",
   "x": "An insurance carrier runs a full day of claims processing at its alternate facility while the primary site continues serving customers, then reconciles the two sets of output. Which test type is this?",
   "o": [
    "Parallel processing",
    "Full interruption",
    "Simulation",
    "Tabletop exercise"
   ],
   "a": 0,
   "e": "A parallel test brings up the recovery environment and processes real work alongside production so the results can be compared without risking the live service. A full interruption test would require stopping the primary site entirely, which did not happen here.",
   "d": 3
  },
  {
   "id": 235,
   "t": "states-of-data",
   "x": "Nightly sales extracts travel from retail stores to a corporate warehouse across the public internet. Which safeguard specifically protects the information while it is moving between those two points?",
   "o": [
    "A TLS-protected channel between the endpoints",
    "A hardware security module in the corporate rack",
    "Full disk encryption on the store servers",
    "Database column encryption at the warehouse"
   ],
   "a": 0,
   "e": "Data in transit is protected by encrypting the channel itself, and TLS supplies confidentiality and integrity for the session from one end to the other. Full disk encryption guards data at rest on the sending system and offers nothing once a file is read into memory and transmitted.",
   "d": 3
  },
  {
   "id": 236,
   "t": "states-of-data",
   "x": "Auditors discover that decommissioned laptops from a law firm still hold client matter files on their internal drives while the units await pickup by a recycler. Which control protects information in that state?",
   "o": [
    "A virtual private network for remote sessions",
    "Certificate pinning in the browser profile",
    "A rule enforced at the outbound web proxy",
    "Full disk encryption tied to a hardware module"
   ],
   "a": 3,
   "e": "Stored files on an idle drive are data at rest, and full disk encryption keyed to a trusted platform module renders the volume unreadable once the machine leaves trusted custody. A virtual private network protects a session while data crosses a network and does nothing for a powered-off laptop sitting in a disposal bin.",
   "d": 3
  },
  {
   "id": 237,
   "t": "states-of-data",
   "x": "A research consortium wants a cloud analytics job to operate on genomic records that stay encrypted in memory, so the hosting provider never sees plaintext values. Which approach supports that requirement?",
   "o": [
    "Homomorphic encryption of the working set",
    "Hashing every record before upload",
    "Encrypting the underlying storage volumes",
    "Transport layer security between the nodes"
   ],
   "a": 0,
   "e": "Homomorphic encryption permits computation directly on ciphertext, which is the technique that keeps data protected even while it is in use. Encrypting the storage volumes protects the same records at rest, but the provider would see plaintext the moment the job loads them for processing.",
   "d": 3
  },
  {
   "id": 238,
   "t": "other-infrastructure-concepts",
   "x": "A water treatment utility operates programmable logic controllers that were certified with the plant and cannot receive vendor updates without an expensive recertification. Which measure best limits their exposure?",
   "o": [
    "Placing the controllers behind a dedicated firewall segment",
    "Joining the controllers to the corporate directory",
    "Installing endpoint detection agents on each controller",
    "Enabling automatic firmware updates from the vendor"
   ],
   "a": 0,
   "e": "Industrial control equipment that cannot be updated is protected with compensating controls, and isolating it in a tightly filtered segment restricts who can reach the vulnerable services at all. Endpoint agents are rarely supported on such controllers, and installing unapproved software would itself invalidate the certification.",
   "d": 3
  },
  {
   "id": 239,
   "t": "other-infrastructure-concepts",
   "x": "An avionics module must react to each sensor reading inside a guaranteed time window, and a late response counts as a system failure rather than merely slow performance. Which software platform is required?",
   "o": [
    "A container runtime on a shared host",
    "A type 2 hypervisor with nested guests",
    "A real-time operating system",
    "A general purpose server operating system"
   ],
   "a": 2,
   "e": "A real-time operating system provides deterministic scheduling so critical tasks meet hard deadlines on every cycle. A general purpose operating system optimizes average throughput and fairness, and its scheduler may delay a task unpredictably, which is unacceptable when a missed deadline equals a failure.",
   "d": 3
  },
  {
   "id": 240,
   "t": "other-infrastructure-concepts",
   "x": "A development team ships an application bundled only with its libraries, and dozens of these instances share the host kernel on a single server. Which isolation weakness should the security team plan around?",
   "o": [
    "Instances can only be scanned after they reach production",
    "The host cannot apply CPU or memory limits per instance",
    "Each instance carries its own vulnerable kernel to patch",
    "A flaw in the shared kernel can affect every instance"
   ],
   "a": 3,
   "e": "Containers isolate processes but share one kernel, so a kernel escape or privilege escalation defect has a blast radius covering every container on that host. The choice about each instance carrying its own kernel to patch describes virtual machines, where each guest runs its own kernel and patching is handled per guest.",
   "d": 3
  },
  {
   "id": 241,
   "t": "infrastructure-considerations",
   "x": "A small law practice moves its file servers to a hosted provider partly so that contractual penalties land on the provider when agreed availability targets are missed. Which consideration does this illustrate?",
   "o": [
    "Responsiveness",
    "Risk transference",
    "Ease of recovery",
    "Patch availability"
   ],
   "a": 1,
   "e": "Shifting the financial consequence of an outage to another party through a contract is risk transference, one of the infrastructure considerations weighed when choosing hosted services. Ease of recovery describes how quickly systems can be restored after a failure, not who absorbs the loss.",
   "d": 3
  },
  {
   "id": 242,
   "t": "infrastructure-considerations",
   "x": "A radiology department depends on an imaging console running a vendor-locked operating system that will never receive further security fixes. Which consideration most shapes where that console is placed on the network?",
   "o": [
    "Cost of the appliance",
    "Ease of deployment",
    "Compute requirements",
    "Inability to patch"
   ],
   "a": 3,
   "e": "When a system can never be updated its known flaws become permanent, so the design must compensate with strict segmentation and heavy monitoring around it. Ease of deployment influences how fast a system is rolled out but says nothing about the ongoing exposure that drives its placement.",
   "d": 3
  },
  {
   "id": 243,
   "t": "infrastructure-considerations",
   "x": "A startup expects unpredictable traffic spikes after each press mention and has almost no capital available for hardware purchased ahead of demand. Which pair of considerations most favors a provider-hosted design?",
   "o": [
    "Risk transference and resilience",
    "Physical isolation and compute",
    "Patch availability and power",
    "Scalability and cost"
   ],
   "a": 3,
   "e": "Elastic capacity that grows with demand and a consumption-based expense model answer both the unpredictable spikes and the absence of up-front capital. Physical isolation argues the other way, since the strongest isolation comes from dedicated on-premises equipment this company cannot afford to buy.",
   "d": 3
  },
  {
   "id": 244,
   "t": "secure-infrastructures",
   "x": "An organization must publish a customer-facing portal to the internet while ensuring its finance database can never be reached directly from outside. Where should the portal server sit?",
   "o": [
    "Outside the perimeter with only a public address",
    "In a screened subnet between two filtering boundaries",
    "On the same segment as the finance database servers",
    "On the internal trusted segment with a forwarding rule"
   ],
   "a": 1,
   "e": "A screened subnet places internet-reachable services in their own zone, filtered both from the internet and toward the internal network, so a compromised portal does not open a path to finance data. Forwarding a port to a host on the trusted segment exposes an internal system directly and leaves the attacker inside the protected zone once it falls.",
   "d": 3
  },
  {
   "id": 245,
   "t": "secure-infrastructures",
   "x": "An engineer groups guest wireless, staff desktops, and card processing systems into distinct trust levels and writes explicit rules for any traffic crossing between them. What is this design approach called?",
   "o": [
    "Loop protection",
    "Link aggregation",
    "Port mirroring",
    "Security zoning"
   ],
   "a": 3,
   "e": "Defining zones by trust level and governing every transition between them is the zone-based approach at the heart of secure infrastructure design. Port mirroring only copies traffic to a monitoring appliance and enforces no policy at all between groups of systems.",
   "d": 3
  },
  {
   "id": 246,
   "t": "backups",
   "x": "A virtualization administrator wants the ability to return a guest to its exact state from minutes before a failed patch, without pulling media from the tape library. Which capability provides that?",
   "o": [
    "A full copy written to the media library overnight",
    "A snapshot captured immediately before the change",
    "A differential job run earlier the same evening",
    "Continuous replication to the standby data center"
   ],
   "a": 1,
   "e": "A snapshot preserves the guest's disk and memory state at a point in time and can be reverted in moments, which matches a rollback need measured in minutes. Continuous replication keeps a second copy current but faithfully carries the bad patch to the standby site, leaving nothing clean to roll back to.",
   "d": 3
  },
  {
   "id": 247,
   "t": "backups",
   "x": "An accounting practice determines it can tolerate losing no more than fifteen minutes of posted transactions after a failure. Which design decision follows most directly from that tolerance?",
   "o": [
    "The number of media rotations retained",
    "How frequently copy jobs are executed",
    "The cipher used to protect the media",
    "The physical distance to the vault site"
   ],
   "a": 1,
   "e": "The tolerable amount of lost work is the recovery point objective, and it is met by running backup or replication jobs at least that often. Retention counts and vault distance matter for compliance and disaster scope, but neither changes how much recent activity disappears when the system fails.",
   "d": 3
  },
  {
   "id": 248,
   "t": "firewall-types",
   "x": "An administrator retires a filtering device that judged every packet in isolation and installs one that tracks connection establishment and automatically permits the matching return traffic. What was gained?",
   "o": [
    "Deep decoding of application payloads",
    "Stateful inspection of active connections",
    "Unified logging across the appliance fleet",
    "Transparent bridging between segments"
   ],
   "a": 1,
   "e": "A stateful firewall maintains a connection table, so packets belonging to an already approved session are allowed without a separate inbound rule for each one. Deep payload decoding is a next-generation capability concerned with identifying content and applications, and it is independent of whether the device tracks session state.",
   "d": 3
  },
  {
   "id": 249,
   "t": "firewall-types",
   "x": "A 40-person branch needs packet filtering, malware scanning, URL categorization, and spam control delivered by one box under a single management console and support contract. Which product category fits?",
   "o": [
    "Web application firewall",
    "Network access control",
    "Forward proxy server",
    "Unified threat management"
   ],
   "a": 3,
   "e": "A unified threat management appliance consolidates several security functions into one platform, which suits small sites that cannot host or staff separate systems. A web application firewall defends hosted web applications against injection style attacks and supplies none of the antimalware or antispam functions this branch requires.",
   "d": 3
  },
  {
   "id": 250,
   "t": "cloud-infrastructures",
   "x": "A finance company keeps regulated ledgers on hardware it owns but shifts heavy analytics to a public provider during quarter close, linking the two environments over a private circuit. Which model is this?",
   "o": [
    "Private cloud",
    "Community cloud",
    "Hybrid cloud",
    "Multitenant hosting"
   ],
   "a": 2,
   "e": "A hybrid model combines owned infrastructure with public cloud capacity and moves workloads between them as requirements dictate. A community cloud is shared by several organizations with common regulatory needs, which is not what a single firm bursting its own workloads is doing.",
   "d": 3
  },
  {
   "id": 251,
   "t": "data-types-and-classifications",
   "x": "A chip designer's unreleased fabrication process gives the firm its market advantage and is protected chiefly by patents and trade secret law rather than privacy statutes. Which data type label applies?",
   "o": [
    "Financial information",
    "Intellectual property",
    "Legal information",
    "Human-readable data"
   ],
   "a": 1,
   "e": "Proprietary designs and processes that create competitive value are classified as intellectual property, and their loss injures the business rather than an individual. Legal information covers material such as contracts and case files retained for legal process, a separate category with different handling rules.",
   "d": 3
  },
  {
   "id": 252,
   "t": "network-appliances",
   "x": "Before a contractor's laptop receives anything beyond guest connectivity, an appliance verifies that its antivirus definitions are current and its drive is encrypted. Which control performs that posture check?",
   "o": [
    "An intrusion detection sensor",
    "A virtual private network gateway",
    "A content filtering appliance",
    "Network access control"
   ],
   "a": 3,
   "e": "Network access control evaluates a device's health against policy and confines noncompliant systems to a limited or remediation network until they conform. An intrusion detection sensor inspects traffic for attack patterns after devices are already on the network and makes no admission decision.",
   "d": 3
  },
  {
   "id": 253,
   "t": "securing-wireless-and-mobile",
   "x": "A logistics firm buys smartphones for its drivers, keeps title to the hardware, and permits a reasonable amount of private use after shifts end. Which mobile deployment model is described?",
   "o": [
    "Bring your own device",
    "Choose your own device",
    "Corporate owned, personally enabled",
    "Virtual desktop infrastructure"
   ],
   "a": 2,
   "e": "Hardware the company buys and controls while still allowing some private use is the corporate owned, personally enabled model. Bring your own device is wrong because the employee would own the handset. Choose your own device also uses company-purchased hardware, but its defining trait is letting staff pick from an approved catalog, which this scenario never mentions.",
   "d": 4
  },
  {
   "id": 254,
   "t": "securing-wireless-and-mobile",
   "x": "Staff at a design agency read work email on personal tablets and object to any control that would let the firm see their family photos. Which approach keeps business data in a managed, separately encrypted space that can be erased on its own?",
   "o": [
    "A screen lock timeout policy",
    "Containerization of the work profile",
    "Full device encryption",
    "Geofencing around the office"
   ],
   "a": 1,
   "e": "Containerization creates a managed work profile with its own encryption and its own selective wipe, so corporate data can be removed without touching personal content. Full device encryption protects everything at rest but draws no boundary between personal and business data, and wiping such a device destroys the owner's photos along with the email.",
   "d": 4
  },
  {
   "id": 255,
   "t": "securing-wireless-and-mobile",
   "x": "A field auditor loses a tablet in an airport terminal, and the unit never reconnects to any network, so the management console cannot deliver its erase command. Which protection still keeps the stored client files unreadable?",
   "o": [
    "An erase command queued in the management console",
    "Automatic cloud backup of the tablet's documents",
    "Location tracking enabled in the management profile",
    "Full device encryption with a strong passcode"
   ],
   "a": 3,
   "e": "Encryption tied to a strong passcode protects data the moment the device leaves the owner's hands and needs no connectivity to work. A queued erase command is useless here because the tablet never checks in, and backups only preserve the organization's copy of the files rather than denying access to whoever found the device.",
   "d": 4
  },
  {
   "id": 256,
   "t": "asset-management",
   "x": "An unpatched Windows host turns up on a production segment, and no record of it exists anywhere because a contractor connected it two years ago and left. Which practice would most likely have surfaced this machine sooner?",
   "o": [
    "Maintaining an accurate inventory with periodic reconciliation",
    "Requiring a certificate of destruction for retired hardware",
    "Publishing a written acceptable use policy for contractors",
    "Assigning a data classification label to each file share"
   ],
   "a": 0,
   "e": "An inventory that is regularly reconciled against what is actually on the network is what turns up systems nobody registered. A written acceptable use policy sets expectations for behavior but produces no technical record and detects nothing on its own, and destruction certificates apply at the end of an asset's life rather than at its introduction.",
   "d": 4
  },
  {
   "id": 257,
   "t": "asset-management",
   "x": "A hospital returns leased storage arrays when the contract ends and must show auditors documented proof that a third party rendered every drive unrecoverable. What should the hospital obtain from that vendor?",
   "o": [
    "A signed chain of custody form from the courier",
    "A change advisory board approval for the return",
    "A certificate of destruction covering each drive",
    "A hardware warranty claim from the leasing company"
   ],
   "a": 2,
   "e": "A certificate of destruction is the vendor's formal attestation that specific media were destroyed, which is exactly the artifact an auditor expects. Chain of custody documents who handled the drives in transit and is valuable, but it proves movement and control rather than that the data itself is gone.",
   "d": 4
  },
  {
   "id": 258,
   "t": "asset-management",
   "x": "During an audit, several database servers have nobody named as accountable for approving access requests or scheduling their patch windows. Which step in the asset management process closes this gap?",
   "o": [
    "Listing the servers in the disaster recovery plan",
    "Assigning a documented owner for each entry in the inventory",
    "Enrolling the servers in the endpoint detection platform",
    "Adding the servers to the nightly backup rotation"
   ],
   "a": 1,
   "e": "Every asset needs a named owner who is accountable for its access decisions, its maintenance schedule, and ultimately its disposal. Adding the servers to backups or the recovery plan improves resilience but still leaves no person answerable for approving access, which is the gap the auditor identified.",
   "d": 4
  },
  {
   "id": 259,
   "t": "threat-intelligence",
   "x": "A regional bank wants curated adversary reporting produced by and for other financial institutions, including sector-specific indicators exchanged under a trust agreement among members. Which source best meets that need?",
   "o": [
    "An information sharing and analysis center",
    "A public code repository search service",
    "An open source vulnerability database",
    "A vendor's product security advisory list"
   ],
   "a": 0,
   "e": "An information sharing and analysis center is the industry-specific membership body built for exactly this kind of trusted, sector-focused exchange. A vendor advisory list is useful but is limited to that vendor's own products and says nothing about which actors are currently targeting banks.",
   "d": 4
  },
  {
   "id": 260,
   "t": "threat-intelligence",
   "x": "Two partner organizations want their platforms to trade machine-readable indicators automatically instead of emailing spreadsheets of file hashes back and forth every week. Which pairing supports that?",
   "o": [
    "CVSS to structure the data and CVE to transport it",
    "SNMP to structure the data and syslog to transport it",
    "SAML to structure the data and LDAP to transport it",
    "STIX to structure the data and TAXII to transport it"
   ],
   "a": 3,
   "e": "STIX defines a common structure for describing indicators and adversary behavior, and TAXII defines how those documents move between systems. CVSS and CVE relate to vulnerabilities rather than indicator exchange, and neither one is a transport mechanism at all.",
   "d": 4
  },
  {
   "id": 261,
   "t": "threat-intelligence",
   "x": "After a breach at an unrelated firm, a retailer wants early warning that its own employees' credentials are being traded on underground forums. Which intelligence source directly supports that goal?",
   "o": [
    "Internal firewall logs from the perimeter devices",
    "Dark web monitoring for leaked credential collections",
    "Regulatory filings published by the retailer's peers",
    "Vendor release notes for the point of sale software"
   ],
   "a": 1,
   "e": "Monitoring underground marketplaces and paste sites is how organizations learn their credentials are circulating before those credentials get used. Perimeter logs would only reveal an attempt after someone tries the stolen credentials against the retailer, which is far later than the early warning being requested.",
   "d": 4
  },
  {
   "id": 262,
   "t": "analyzing-vulnerabilities",
   "x": "A quarterly scan reported nothing on an application server, yet a tester later exploited an unpatched deserialization weakness on that very host. How should the team characterize the scan result?",
   "o": [
    "False positive",
    "Documented exception",
    "True positive",
    "False negative"
   ],
   "a": 3,
   "e": "A false negative is a real weakness the tool failed to report, which is what happened here. A false positive would be the opposite situation, where the tool raises a finding that turns out not to exist, and it does not describe a scanner that stayed silent while a genuine flaw was present.",
   "d": 4
  },
  {
   "id": 263,
   "t": "analyzing-vulnerabilities",
   "x": "Two findings carry identical base severity ratings: one sits on an internet-facing payment gateway with published exploit code, the other on a lab workstation with no route in from outside. What should drive the order of remediation?",
   "o": [
    "The number of total findings reported per device",
    "The age of the operating system installed on each host",
    "Environmental exposure and the availability of a working exploit",
    "The alphabetical order of the affected product names"
   ],
   "a": 2,
   "e": "Base severity describes the flaw in isolation, so real prioritization comes from context: reachability, business value, and whether attackers already have usable exploit code. Counting how many findings each device has is misleading, since a single reachable and weaponized flaw outranks a long list of unreachable ones.",
   "d": 4
  },
  {
   "id": 264,
   "t": "analyzing-vulnerabilities",
   "x": "A vendor advisory, a scanner report, and a news article all reference one flaw using the same catalog identifier, letting teams be certain they are discussing a single specific issue. What is that identifier called?",
   "o": [
    "A common weakness enumeration category",
    "A common vulnerability scoring system rating",
    "A common platform enumeration string",
    "A common vulnerabilities and exposures entry"
   ],
   "a": 3,
   "e": "The common vulnerabilities and exposures entry is the unique reference number assigned to one disclosed flaw so every tool and vendor can point at the same thing. The weakness enumeration category describes the general class of coding error, such as improper input handling, and is shared by thousands of distinct flaws rather than identifying one.",
   "d": 4
  },
  {
   "id": 265,
   "t": "vulnerability-remediation",
   "x": "A manufacturing line depends on control software that refuses to run on a patched version of its operating system, and the supplier has no fix scheduled this year. Which response best lowers exposure while production continues?",
   "o": [
    "Isolate the host on a tightly restricted network segment",
    "Close the finding with a note that no fix is available",
    "Repeat the scan monthly to confirm the flaw is still there",
    "Uninstall the control software until a fix finally ships"
   ],
   "a": 0,
   "e": "When a patch is not an option, a compensating control such as strict segmentation reduces who can reach the weak host and is the accepted answer for legacy production gear. Rescanning monthly generates paperwork but changes nothing about the risk, and it leaves the same reachable host exposed the entire time.",
   "d": 4
  },
  {
   "id": 266,
   "t": "vulnerability-remediation",
   "x": "A finding cannot be fixed before the annual audit, and leadership chooses to live with it after weighing repair cost against likely impact. What must accompany that choice for the program to stay defensible?",
   "o": [
    "A formal exception record with an owner and review date",
    "A rescan scheduled for the following business day",
    "A firewall rule change approved by the service desk",
    "A ticket closed with a comment that no fix exists"
   ],
   "a": 0,
   "e": "Accepted risk still has to be tracked, so a written exception names who accepted it, why, and when the decision gets revisited. Simply closing the ticket with a comment records the outcome but assigns nobody, sets no expiry, and leaves the organization unable to show an auditor that the acceptance was a deliberate management decision.",
   "d": 4
  },
  {
   "id": 267,
   "t": "vulnerability-remediation",
   "x": "Patches were installed on eighty servers over a maintenance weekend and the change record is already marked complete. What actually confirms the underlying weaknesses are gone?",
   "o": [
    "A report of patch download success rates",
    "A verification scan of the affected hosts",
    "A signed approval from the change advisory board",
    "An updated entry in the configuration inventory"
   ],
   "a": 1,
   "e": "Remediation is not finished until a follow-up scan validates that the finding no longer appears, since patches can fail to apply, get rolled back, or require a reboot nobody performed. Download success rates only prove the files reached the servers, not that the vulnerable component was replaced and is now running.",
   "d": 4
  },
  {
   "id": 268,
   "t": "security-tools",
   "x": "Outbound mail is carrying spreadsheets full of customer account numbers to personal webmail addresses. Which tool inspects content in motion and stops transfers matching sensitive patterns?",
   "o": [
    "Data loss prevention",
    "A certificate revocation list",
    "An intrusion detection sensor",
    "Network access control"
   ],
   "a": 0,
   "e": "Data loss prevention exists to recognize sensitive content by pattern or classification and block or quarantine it before it leaves. Network access control decides which devices may join the network in the first place and never examines the contents of a message once a permitted device is connected.",
   "d": 4
  },
  {
   "id": 269,
   "t": "security-tools",
   "x": "Sales laptops spend their days on hotel and home connections and rarely join the corporate tunnel, yet leadership wants continuous posture and telemetry from every machine. Which collection approach fits best?",
   "o": [
    "A port mirror on the headquarters core switch",
    "A weekly manual audit run by the service desk",
    "Agentless polling from an internal scanner",
    "An installed agent reporting back over the internet"
   ],
   "a": 3,
   "e": "An agent lives on the endpoint and keeps reporting no matter which network the laptop is using, which is what continuous coverage of roaming devices requires. Agentless polling from inside the corporate network only works while the target is reachable there, so these laptops would go dark for weeks at a time.",
   "d": 4
  },
  {
   "id": 270,
   "t": "security-tools",
   "x": "Ahead of a migration, an engineer needs a list of every listening TCP service and its version banner across a subnet of aging hosts. Which category of utility produces that directly?",
   "o": [
    "A configuration backup tool",
    "A packet capture decoder",
    "A password cracking suite",
    "A network port scanner"
   ],
   "a": 3,
   "e": "A port scanner connects to each address and port in a range and can read the banner a service returns, producing exactly this inventory. A packet capture decoder can reveal service details too, but only for traffic that happens to occur while capturing, so idle services on quiet hosts would never appear.",
   "d": 4
  },
  {
   "id": 271,
   "t": "web-filtering",
   "x": "An employer wants to stop staff from reaching gambling and adult sites without hand-maintaining a list of individual addresses, since new sites appear daily. Which capability handles this?",
   "o": [
    "Static block entries typed into each browser",
    "Bandwidth shaping applied to streaming media",
    "Certificate pinning enforced on the endpoint",
    "Content categorization applied by the filter"
   ],
   "a": 3,
   "e": "Category-based filtering relies on a maintained classification of sites, so newly registered gambling pages are covered as soon as the vendor classifies them. Static block entries would technically work but require someone to discover and add every new address by hand, which is the burden the employer is trying to avoid.",
   "d": 4
  },
  {
   "id": 272,
   "t": "web-filtering",
   "x": "Malware on a workstation resolves an algorithmically generated hostname before it ever opens a session to its operator. Which filtering method can break the callback at the name resolution step?",
   "o": [
    "Requiring signed macros in office productivity documents",
    "Blocking known malicious domains at the resolver",
    "Dropping inbound connection attempts at the edge router",
    "Rewriting request headers at the reverse proxy"
   ],
   "a": 1,
   "e": "Filtering at the resolver refuses to answer lookups for known bad names, so the callback fails before a single packet reaches the operator. Dropping inbound attempts at the edge router addresses traffic arriving from outside, which is the wrong direction for a compromised host reaching out on its own.",
   "d": 4
  },
  {
   "id": 273,
   "t": "web-filtering",
   "x": "A gateway can no longer classify most browsing because nearly every session is encrypted between the browser and the site. What must be configured so policy can apply to that traffic?",
   "o": [
    "Rules that block any site whose certificate the gateway did not issue",
    "A policy that permits encrypted sessions and logs only the destination port",
    "Inspection that terminates and rebuilds sessions using a trusted internal certificate",
    "An agent that turns off encryption on the endpoint before traffic departs"
   ],
   "a": 2,
   "e": "The gateway has to act as a trusted intermediary, decrypting on one side and re-encrypting on the other with a certificate the managed endpoints already trust. Logging only the destination port leaves the gateway unable to distinguish a research site from a malware download, since both look identical at that level.",
   "d": 4
  },
  {
   "id": 274,
   "t": "operating-system-security",
   "x": "A Windows domain administrator must enforce identical lock screen, audit, and local firewall settings on four thousand desktops and have them reapplied automatically whenever a user changes one. Which native mechanism does this?",
   "o": [
    "A logon script copied to every workstation",
    "Group policy objects linked within the directory",
    "Scheduled tasks created by the service desk",
    "Registry backups stored on a central file server"
   ],
   "a": 1,
   "e": "Group policy distributes settings from the directory and refreshes them on a schedule, so local changes are overwritten without anyone touching the machine. A logon script could push settings once at sign-in but offers no ongoing enforcement, and a user who alters a setting mid-session keeps that change until the next login.",
   "d": 4
  },
  {
   "id": 275,
   "t": "operating-system-security",
   "x": "On a hardened Linux server, the team wants the kernel itself to confine each daemon to a narrow set of files and ports, so a compromised web process cannot read database credentials. Which capability provides this?",
   "o": [
    "A discretionary permission bit set on each individual file",
    "A local firewall rule set that filters loopback traffic",
    "A mandatory access control module running in enforcing mode",
    "A scheduled job that resets file ownership every hour"
   ],
   "a": 2,
   "e": "Kernel-level modules such as the ones shipped with major distributions confine each process to a policy the process cannot override, even when it runs as root. Standard permission bits are set at the owner's discretion and a compromised process running with sufficient privilege can simply change or ignore them.",
   "d": 4
  },
  {
   "id": 276,
   "t": "operating-system-security",
   "x": "Support technicians sign in to their daily desktops with accounts in the local administrators group, so anything they encounter while browsing or reading mail executes with full rights. Which change most reduces that blast radius?",
   "o": [
    "Require a longer passphrase on the privileged account",
    "Give each technician a standard account for routine work",
    "Increase how often antivirus definitions are refreshed",
    "Turn on disk encryption for every support desktop"
   ],
   "a": 1,
   "e": "Separating routine work onto a standard account means malicious code inherits limited rights and cannot install services or tamper with system files. A longer passphrase on the privileged account helps against guessing, but it does nothing here because the malicious code is already executing inside an authenticated privileged session.",
   "d": 4
  },
  {
   "id": 277,
   "t": "monitoring-data",
   "x": "An investigator needs to know which internal hosts talked to a suspicious address, how many bytes moved, and when, but retaining every byte crossing the network is far too expensive. Which record type fits?",
   "o": [
    "Certificate transparency log downloads",
    "Flow records summarizing each conversation",
    "Antivirus quarantine reports per endpoint",
    "Screenshots collected from user desktops"
   ],
   "a": 1,
   "e": "Flow records store the metadata of each conversation, endpoints, ports, byte counts and timing, at a tiny fraction of the storage a full capture demands. Antivirus quarantine reports only describe files the scanner acted on and reveal nothing about which systems communicated with an external address.",
   "d": 4
  },
  {
   "id": 278,
   "t": "monitoring-data",
   "x": "A regulator requires authentication records to stay retrievable for seven years, but the live analysis platform holds only ninety days online because of licensing cost. What should the team implement?",
   "o": [
    "Raising the alerting threshold on authentication events",
    "Reducing how many systems generate records at all",
    "Deleting records once the ninety day window closes",
    "Archiving older records to cheaper long-term storage"
   ],
   "a": 3,
   "e": "Archiving moves aged records out of the expensive searchable tier while keeping them retrievable for the required period. Reducing which systems generate records would cut volume but destroys the very evidence the regulator expects to see, and it weakens detection at the same time.",
   "d": 4
  },
  {
   "id": 279,
   "t": "monitoring-data",
   "x": "Analysts have begun ignoring a rule that fires two hundred notifications every morning, nearly all of them traced to one backup job's service account. What is the correct response?",
   "o": [
    "Ask the analysts to work through the queue faster",
    "Route those notifications to an unmonitored mailbox",
    "Adjust the rule so the known benign pattern is excluded",
    "Switch the rule off completely to clear the queue"
   ],
   "a": 2,
   "e": "Tuning keeps the detection in place while removing the specific benign condition that generates the noise, which restores the analysts' trust in the alert. Disabling the rule outright also silences the queue, but it eliminates coverage for the malicious version of the same behavior the rule was written to catch.",
   "d": 4
  },
  {
   "id": 280,
   "t": "password-security",
   "x": "Members of a nonprofit reuse one memorable phrase across a dozen web services because they cannot keep unique strings in their heads. Which practical control lets them hold long, distinct secrets for each service?",
   "o": [
    "A monthly expiration that forces a fresh phrase",
    "A manager application that generates and stores them",
    "A shared spreadsheet kept on the internal file server",
    "A shorter minimum length so phrases stay memorable"
   ],
   "a": 1,
   "e": "A manager application removes the memory constraint entirely, so each service can hold a long random secret that is never reused. Forcing monthly expiration makes the memory problem worse and usually drives people toward predictable variations of the same phrase across every site.",
   "d": 4
  },
  {
   "id": 281,
   "t": "password-security",
   "x": "Policy today forces a change every thirty days, and service desk data shows most staff simply increment a trailing digit. Which revision best improves genuine resistance to guessing?",
   "o": [
    "Shorten the interval so credentials change twice as often",
    "Require the change to happen on the first day of each month",
    "Require greater length and screen values against known breaches",
    "Add one more special character to the complexity requirement"
   ],
   "a": 2,
   "e": "Length drives the cost of an offline attack far more than composition rules do, and screening against breach corpora blocks values attackers already hold. Shortening the interval accelerates the exact predictable-increment behavior the service desk data revealed, so it makes guessing easier rather than harder.",
   "d": 4
  },
  {
   "id": 282,
   "t": "password-security",
   "x": "Several administrators share the root credential for a storage appliance, and after a recent outage nobody can establish who was signed in at the time. Which mechanism restores individual accountability?",
   "o": [
    "A stronger passphrase agreed on by all the administrators",
    "A vault that checks the secret out per person and rotates it",
    "A sealed copy of the credential held by the department manager",
    "A monthly reminder to review the appliance event log"
   ],
   "a": 1,
   "e": "A vault forces each administrator to authenticate individually, records who retrieved the shared secret and when, and rotates it afterward so a memorized copy loses value. A stronger shared passphrase raises the bar against guessing but leaves every session attributable only to the same anonymous account.",
   "d": 4
  },
  {
   "id": 283,
   "t": "scripting-and-automation",
   "x": "Onboarding a new hire takes three days of manual steps across the directory, the ticketing system, and the payroll portal, and individual steps are sometimes skipped entirely. What does automating that workflow deliver first?",
   "o": [
    "A guarantee that new accounts cannot be compromised",
    "Removal of the need to review entitlements afterward",
    "Consistent execution of the full workflow every time",
    "Automatic classification of the data each hire touches"
   ],
   "a": 2,
   "e": "The primary security benefit of automating provisioning is consistency, since the workflow performs the same steps in the same order every time and leaves an auditable record. Automation does not remove the need for periodic entitlement reviews, because a flawed workflow simply grants the wrong access consistently and at scale.",
   "d": 4
  },
  {
   "id": 284,
   "t": "scripting-and-automation",
   "x": "Whenever a phishing report arrives, an analyst manually pulls sender reputation, detonates the attachment in a sandbox, then searches mail stores for other copies. Which capability performs that whole sequence without keystrokes?",
   "o": [
    "A signature update pushed to the mail gateway",
    "A firewall rule blocking the sender's address range",
    "A quarantine folder reviewed once each business day",
    "An orchestration playbook triggered by the report"
   ],
   "a": 3,
   "e": "An orchestration playbook chains together enrichment, detonation, and search steps across separate tools and runs them automatically when the trigger fires. A gateway signature update may block that one campaign going forward but performs none of the investigative steps the analyst is repeating by hand.",
   "d": 4
  },
  {
   "id": 285,
   "t": "scripting-and-automation",
   "x": "One engineer wrote the deployment code that now provisions every cloud workload, and it lives on her laptop with no documentation and no repository. Which drawback of automation does this illustrate?",
   "o": [
    "A single point of failure in the supporting staff",
    "Excess cost from licensing the automation platform",
    "Loss of version history inside the provider console",
    "Slower promotion of new workloads into production"
   ],
   "a": 0,
   "e": "Automation concentrates operational knowledge, and when one undocumented person holds it the organization cannot maintain, audit, or recover the process if that person leaves. Licensing cost is a real consideration for commercial tooling but is unrelated to the specific dependency described here.",
   "d": 4
  },
  {
   "id": 286,
   "t": "incident-planning",
   "x": "During an exercise, nobody could say who notifies the state regulator, the affected customers, or the cyber insurer, and each participant assumed a different department owned it. Which part of the plan is missing?",
   "o": [
    "A retention schedule for archived system records",
    "A capacity model for the ticketing platform",
    "A communication plan naming roles and recipients",
    "A vendor list for replacement hardware orders"
   ],
   "a": 2,
   "e": "A communication plan states who contacts each internal and external party, on what timeline, and with what approved wording, which is precisely the ambiguity exposed here. A vendor list supports recovery logistics but says nothing about notification duties, and regulatory deadlines are missed while people debate ownership.",
   "d": 4
  },
  {
   "id": 287,
   "t": "incident-planning",
   "x": "Instead of waiting for an alert, a team forms a hypothesis that an adversary is abusing scheduled tasks for persistence, then queries endpoint telemetry across the whole fleet to test it. What is this activity?",
   "o": [
    "Threat hunting",
    "Digital forensics",
    "Vulnerability scanning",
    "Penetration testing"
   ],
   "a": 0,
   "e": "Threat hunting is the proactive, hypothesis-driven search through existing telemetry for adversary activity that produced no alert. Digital forensics is also investigative but begins from a known incident and focuses on reconstructing what happened on specific evidence, rather than testing a theory across an entire environment.",
   "d": 4
  },
  {
   "id": 288,
   "t": "incident-planning",
   "x": "A company sends unannounced but harmless lure messages to all employees, measures how many click versus how many report, and feeds the numbers back into training. What kind of preparedness activity is this?",
   "o": [
    "A simulation exercise",
    "A structured walkthrough",
    "A capability maturity review",
    "A root cause analysis"
   ],
   "a": 0,
   "e": "Testing people against a realistic but harmless version of a real attack and measuring their behavior is a simulation. A structured walkthrough is a discussion-based review of documented procedures, so no employee is ever placed in front of a live stimulus and no behavioral data comes out of it.",
   "d": 4
  },
  {
   "id": 289,
   "t": "endpoint-security",
   "x": "A server team wants immediate notice whenever a system binary or a configuration file under the standard config directory is modified outside an approved change window. Which endpoint capability provides that?",
   "o": [
    "File integrity monitoring",
    "Full disk encryption",
    "A screen lock policy",
    "Removable media control"
   ],
   "a": 0,
   "e": "File integrity monitoring records a cryptographic baseline for watched files and alerts when the current value stops matching, which catches tampering that leaves no other trace. Full disk encryption protects data if the drive is removed but permits any authorized running process to change files freely once the system is booted.",
   "d": 4
  },
  {
   "id": 290,
   "t": "endpoint-security",
   "x": "Laptops that roam far outside the perimeter need traffic and process behavior examined on the machine itself, because the central sensors never observe those sessions. Which control belongs on the device?",
   "o": [
    "A load balancer health check probe",
    "A host-based intrusion prevention agent",
    "A next generation firewall at the internet edge",
    "A network intrusion detection sensor at the core"
   ],
   "a": 1,
   "e": "A host-based intrusion prevention agent inspects and can block activity locally regardless of which network the laptop happens to be on. A sensor at the core and a firewall at the edge both depend on the traffic crossing corporate infrastructure, which is exactly what these roaming sessions never do.",
   "d": 4
  },
  {
   "id": 291,
   "t": "penetration-testing",
   "x": "Before an external assessment begins, both parties sign a document fixing the target address ranges, the permitted testing hours, the systems that are off limits, and who to call if something breaks. What is that document?",
   "o": [
    "The business impact analysis",
    "The service level agreement",
    "The memorandum of understanding",
    "The rules of engagement"
   ],
   "a": 3,
   "e": "The rules of engagement define scope, timing, prohibited techniques, and escalation contacts for an assessment, protecting both the client and the testers. A service level agreement commits a provider to performance and availability targets for an ongoing service and does not describe how a single assessment will be conducted.",
   "d": 4
  },
  {
   "id": 292,
   "t": "penetration-testing",
   "x": "With written authorization in hand, an assessor starts sending crafted probes to a client's public hosts in order to enumerate open ports and grab service banners. Which activity is this?",
   "o": [
    "Lateral movement",
    "Privilege escalation",
    "Active reconnaissance",
    "Passive reconnaissance"
   ],
   "a": 2,
   "e": "Sending packets to the target and interpreting the responses is active reconnaissance, which is effective but detectable in the target's logs. Passive reconnaissance would gather the same kind of information from third-party sources without any traffic ever reaching the client's systems.",
   "d": 4
  },
  {
   "id": 293,
   "t": "secure-baselines",
   "x": "An approved configuration standard exists only as a written document, and each administrator applies it by hand, so results differ noticeably between two data centers. Which improvement makes the deployment step reliable?",
   "o": [
    "Email the document to every administrator each quarter",
    "Push the settings using a configuration management tool",
    "Store the document in a searchable wiki for reference",
    "Add a quiz about the document to annual staff training"
   ],
   "a": 1,
   "e": "Automated configuration management applies the same defined state to every system and can correct drift on its own, which removes the human variation described. Training and wikis improve awareness of the standard but still depend on each administrator performing dozens of steps identically by hand.",
   "d": 4
  },
  {
   "id": 294,
   "t": "secure-baselines",
   "x": "A three-person team must produce hardening standards for a web server, a database engine, and a server operating system quickly, with no capacity to research every setting from scratch. What is the most efficient starting point?",
   "o": [
    "Settings copied from the team's oldest production host",
    "A summary of last year's assessment findings",
    "Default settings shipped by each software vendor",
    "Published industry benchmarks for each platform"
   ],
   "a": 3,
   "e": "Independent industry benchmarks provide reviewed, per-platform recommendations the team can adopt and then tailor, which is far faster than deriving them alone. Copying the oldest production host would preserve whatever undocumented drift and legacy exceptions have accumulated there and codify them as the new standard.",
   "d": 4
  },
  {
   "id": 295,
   "t": "security-monitoring",
   "x": "A finance user authenticates from headquarters at nine in the morning and then successfully from another continent eleven minutes afterward. Which detection approach flags that pattern?",
   "o": [
    "Behavior analytics that model normal user activity",
    "Signature matching against known malware hashes",
    "Certificate validation at the wireless controller",
    "Scheduled port scanning of the workstation"
   ],
   "a": 0,
   "e": "Behavior analytics build a profile of typical activity and raise an alert when an event is physically or statistically implausible, which is how impossible travel gets caught. Signature matching compares artifacts to a list of known bad values, and no signature exists for a legitimate credential used from an unlikely place.",
   "d": 4
  },
  {
   "id": 296,
   "t": "security-monitoring",
   "x": "An auditor asks how the team verifies that six hundred servers still match the approved hardening configuration without a person signing in to each one. Which standardized approach performs that at scale?",
   "o": [
    "A change management log review by the audit team",
    "Security content automation protocol tooling",
    "A quarterly sample audit of twenty selected servers",
    "An interview with each system owner about settings"
   ],
   "a": 1,
   "e": "The security content automation protocol expresses checklists in a machine-readable form so scanners can evaluate every host and report compliance consistently. Sampling twenty servers each quarter produces evidence but leaves the other systems unverified, and it detects drift months after it occurs.",
   "d": 4
  },
  {
   "id": 297,
   "t": "log-data",
   "x": "Events from a firewall, a proxy, and two domain controllers cannot be lined up into one timeline because each device reports a noticeably different clock. What must be corrected first?",
   "o": [
    "Time synchronization across every logging source",
    "Retention length configured on the collector",
    "Severity levels assigned to each message type",
    "Transport encryption between devices and collector"
   ],
   "a": 0,
   "e": "Correlation depends on a shared and accurate time reference, so every source should synchronize to the same authoritative clock before any timeline is trusted. Adjusting retention keeps records available longer but does nothing to make the timestamps on those records comparable to one another.",
   "d": 4
  },
  {
   "id": 298,
   "t": "access-controls",
   "x": "A cloud policy should let a contractor open a project folder only during business hours, only from a managed laptop, and only while assigned to that project. Which model evaluates all of those conditions together?",
   "o": [
    "Rule-based access control",
    "Mandatory access control",
    "Discretionary access control",
    "Attribute-based access control"
   ],
   "a": 3,
   "e": "Attribute-based access control makes each decision by evaluating properties of the user, the resource, and the surrounding context such as time and device state. Discretionary access control leaves the decision to the resource owner through permissions on the object and offers no way to weigh device posture or project assignment at request time.",
   "d": 4
  },
  {
   "id": 299,
   "t": "penetration-tests",
   "x": "A hospital hands an outside testing firm full source code, architecture drawings, and administrator credentials so the firm can spend its limited hours probing business logic flaws rather than mapping the estate. Which engagement style is this?",
   "o": [
    "Known environment test",
    "Partially known environment test",
    "Physical intrusion test",
    "Unknown environment test"
   ],
   "a": 0,
   "e": "Supplying source code, diagrams, and privileged credentials up front defines a known environment engagement, which trades realism for depth and lets testers reach flaws that reconnaissance alone would never surface. A partially known engagement would provide only a subset, such as a user account and an IP range, while the hospital here withheld nothing.",
   "d": 5
  },
  {
   "id": 300,
   "t": "penetration-tests",
   "x": "A manufacturer contracts a firm to attempt entry into its plant by tailgating through turnstiles and cloning employee badges, with no requirement to touch the corporate network. Which assessment category does this scope fall under?",
   "o": [
    "Wireless penetration test",
    "Application penetration test",
    "Internal network penetration test",
    "Physical penetration test"
   ],
   "a": 3,
   "e": "The scope targets doors, turnstiles, and badge readers rather than hosts or services, which makes it a physical penetration test even though the tester leans on social engineering to get through. An internal network test would begin from a foothold inside the LAN, and the statement of work here explicitly excludes touching the network.",
   "d": 5
  },
  {
   "id": 301,
   "t": "penetration-tests",
   "x": "Before a red team starts active scanning, both parties sign a document listing permitted target ranges, blackout hours, escalation contacts, and prohibited techniques such as denial of service. What is that document?",
   "o": [
    "Interconnection security agreement",
    "Rules of engagement",
    "Statement of work",
    "Non-disclosure agreement"
   ],
   "a": 1,
   "e": "Rules of engagement define the operational boundaries of the test: what may be touched, when, by whom, and what is off limits. A statement of work is a close distractor because it also accompanies the engagement, but it describes deliverables, schedule, and fees rather than the tactical constraints on testing activity.",
   "d": 5
  },
  {
   "id": 302,
   "t": "penetration-tests",
   "x": "A tester harvests employee names from social media, reviews public DNS records, and reads job postings for technology mentions, all without sending a single packet to the client hosts. This activity is best described as which of the following?",
   "o": [
    "Active reconnaissance",
    "Passive reconnaissance",
    "Credentialed vulnerability scanning",
    "Privilege escalation testing"
   ],
   "a": 1,
   "e": "Gathering intelligence from third-party and public sources without interacting with the target systems is passive reconnaissance, and it leaves nothing in the client logs. Active reconnaissance is the tempting alternative, but it requires sending traffic to the target, such as port scans or banner grabs, which this tester deliberately avoided.",
   "d": 5
  },
  {
   "id": 303,
   "t": "privacy",
   "x": "A marketing department wants a catalog listing every system that stores customer records, which categories of personal information each system holds, and where that information flows afterward. Which privacy activity produces this?",
   "o": [
    "Data minimization review",
    "Data inventory and mapping",
    "Data retention enforcement",
    "Data masking deployment"
   ],
   "a": 1,
   "e": "Building a catalog of what personal information exists, where it lives, and how it moves is data inventory and mapping, and it is the prerequisite for nearly every other privacy control. Data minimization is a plausible pick, but it is the decision to stop collecting or to delete unnecessary fields, which cannot be made until the inventory exists.",
   "d": 5
  },
  {
   "id": 304,
   "t": "privacy",
   "x": "A European customer emails a retailer asking what personal information the company holds about her and demanding a copy of it. Privacy regulation refers to the individual making that request by which term?",
   "o": [
    "Data processor",
    "Data custodian",
    "Data subject",
    "Data owner"
   ],
   "a": 2,
   "e": "The living person whom the information describes is the data subject, and access requests are one of the rights granted to that person. Data owner is attractive because the customer feels ownership of her own details, but in privacy frameworks the owner is the senior business role inside the organization who is accountable for the data set.",
   "d": 5
  },
  {
   "id": 305,
   "t": "privacy",
   "x": "Regulators tell a Brazilian subsidiary that citizen health records must physically remain on servers located inside the country borders, even though the parent firm would prefer one global cloud region. Which requirement is being imposed?",
   "o": [
    "Data anonymization",
    "Data classification",
    "Data sovereignty",
    "Data portability"
   ],
   "a": 2,
   "e": "Data sovereignty is the principle that information is subject to the laws of the nation where it is stored, which is why regulators can compel in-country residency. Data portability sounds relevant to moving records between clouds, but it is a subject right to receive one's own data in a reusable format, not a location mandate.",
   "d": 5
  },
  {
   "id": 306,
   "t": "privacy",
   "x": "A research team publishing hospital outcome statistics irreversibly strips every identifier so no row can ever be traced back to a person, accepting that the original values can never be recovered. Which technique was applied?",
   "o": [
    "Pseudonymization",
    "Tokenization",
    "Obfuscation",
    "Anonymization"
   ],
   "a": 3,
   "e": "Anonymization removes identifying elements permanently, so the data set falls outside most privacy regulation because no individual can be re-identified. Pseudonymization is the strong distractor: it swaps identifiers for stand-in values but keeps a mapping somewhere, so the link can be restored and the data stays regulated.",
   "d": 5
  },
  {
   "id": 307,
   "t": "risk-management-strategies",
   "x": "A legacy kiosk in a museum lobby cannot be patched, but it holds no sensitive records and sits on an isolated segment. Leadership signs off that the residual exposure will simply be tolerated with no further spending. Which strategy is this?",
   "o": [
    "Transference",
    "Mitigation",
    "Avoidance",
    "Acceptance"
   ],
   "a": 3,
   "e": "Acknowledging the exposure, documenting the decision, and choosing to spend nothing further is acceptance, and the sign-off is what separates it from simple negligence. Mitigation would require adding a control to shrink the exposure, but the isolated segment already existed and no new safeguard was introduced as part of this decision.",
   "d": 5
  },
  {
   "id": 308,
   "t": "risk-management-strategies",
   "x": "After weighing the compliance burden, a bank cancels its planned cryptocurrency custody product outright rather than build the controls that offering would demand. Which strategy did the bank choose?",
   "o": [
    "Avoidance",
    "Transference",
    "Mitigation",
    "Acceptance"
   ],
   "a": 0,
   "e": "Declining to undertake the activity at all eliminates the exposure completely, which is avoidance. Mitigation is the natural runner-up, but mitigation means proceeding with the venture while reducing likelihood or impact, and here the bank walked away from the venture entirely.",
   "d": 5
  },
  {
   "id": 309,
   "t": "risk-management-strategies",
   "x": "A sales group needs a legacy browser plugin that violates the hardening baseline. Instead of rewriting the baseline, the security officer records a formally approved, time-limited deviation for that group alone with a scheduled review date. What was granted?",
   "o": [
    "A compensating control",
    "A risk transfer",
    "A risk exception",
    "A corrective control"
   ],
   "a": 2,
   "e": "A narrowly scoped, approved, time-boxed deviation from a published requirement is a risk exception, a documented form of acceptance that keeps the baseline itself intact. A compensating control is tempting, but that would be an alternative safeguard put in place to offset the gap, and none was described here.",
   "d": 5
  },
  {
   "id": 310,
   "t": "risk-management-strategies",
   "x": "A logistics firm cannot eliminate the chance of ransomware, so it funds immutable backups, tighter segmentation, and rapid isolation tooling to shrink the damage an outbreak would cause. Which strategy is described?",
   "o": [
    "Transference",
    "Mitigation",
    "Exemption",
    "Acceptance"
   ],
   "a": 1,
   "e": "Investing in controls that lower the likelihood or the impact of an event, while continuing the business activity, is mitigation. Transference is a common wrong pick, but that would mean shifting the financial consequence to another party through insurance or a contract clause, and no third party absorbs the loss here.",
   "d": 5
  },
  {
   "id": 311,
   "t": "security-considerations",
   "x": "A hotel chain that accepts card payments must follow rules written by a consortium of payment brands rather than by any government body. Which category of consideration drives that obligation?",
   "o": [
    "National security policy",
    "Industry requirements",
    "Government regulation",
    "Criminal law statutes"
   ],
   "a": 1,
   "e": "Requirements published by a trade body or card-brand consortium are industry considerations: they bind participants through contract and membership, not through legislation. Government regulation is the attractive distractor because the consequences feel similar, but no legislature or agency authored these particular rules.",
   "d": 5
  },
  {
   "id": 312,
   "t": "security-considerations",
   "x": "A software vendor selling in one U.S. state must honor breach notification deadlines that differ from those of the neighboring state where its data center sits. Which type of consideration creates this complexity?",
   "o": [
    "Global requirements",
    "Industry requirements",
    "Local and regional requirements",
    "National requirements"
   ],
   "a": 2,
   "e": "Conflicting rules between adjacent states or provinces are local and regional considerations, and they force organizations to satisfy the strictest applicable deadline. National requirements would apply uniformly across the whole country, which is precisely what is missing in this scenario.",
   "d": 5
  },
  {
   "id": 313,
   "t": "security-considerations",
   "x": "During litigation, an energy company receives an order requiring it to preserve all mailboxes and chat logs belonging to twelve employees, suspending its normal deletion schedule. Which consideration governs that obligation?",
   "o": [
    "Contractual requirements",
    "Industry requirements",
    "Regulatory requirements",
    "Legal requirements"
   ],
   "a": 3,
   "e": "A court-issued preservation order arises from the judicial process, so it is a legal consideration and it overrides internal retention schedules until lifted. Regulatory requirements are close, but those come from an agency enforcing a statute across an entire sector rather than from a court acting on one specific dispute.",
   "d": 5
  },
  {
   "id": 314,
   "t": "security-considerations",
   "x": "A startup with users on four continents finds that each region imposes different rules about moving personal information across borders. Which scope of consideration must its compliance program address?",
   "o": [
    "Local considerations",
    "Contractual considerations",
    "Industry considerations",
    "Global considerations"
   ],
   "a": 3,
   "e": "Operating across multiple countries with competing cross-border transfer rules is a global consideration, and it usually forces regional data handling or approved transfer mechanisms. Local considerations would describe a single municipality or state, which understates a program spanning four continents.",
   "d": 5
  },
  {
   "id": 315,
   "t": "security-procedures",
   "x": "An engineer resigns on a Friday. The following Monday the help desk finds her building badge still active, her remote access token still valid, and her name still on an outside vendor admin roster. Which procedure was executed poorly?",
   "o": [
    "Asset disposal",
    "Change management",
    "Offboarding",
    "Onboarding"
   ],
   "a": 2,
   "e": "Revoking physical access, disabling remote access, and removing accounts from third-party services are offboarding steps, and each one was missed here. Asset disposal is a related departure task, but it concerns wiping and reclaiming hardware rather than terminating the credentials that remain live.",
   "d": 5
  },
  {
   "id": 316,
   "t": "security-procedures",
   "x": "A security operations center wants every analyst to follow the same ordered steps whenever a ransomware alert fires, from isolating the host through notifying legal counsel. Which artifact captures that ordered sequence?",
   "o": [
    "A playbook",
    "A policy",
    "A guideline",
    "A standard"
   ],
   "a": 0,
   "e": "A playbook is the step-by-step operational script that turns intent into repeatable action during a specific scenario. A policy is the frequent wrong answer because it also carries authority, but it states what must be achieved and why, leaving the ordered mechanics to the playbook.",
   "d": 5
  },
  {
   "id": 317,
   "t": "security-procedures",
   "x": "A newly hired nurse receives her account, signs the workstation use terms, completes a mandatory privacy briefing, and is granted role-based entry to the records system on day one. Which procedure is this?",
   "o": [
    "Provisioning review",
    "Offboarding",
    "Onboarding",
    "Access recertification"
   ],
   "a": 2,
   "e": "Account creation, agreement signatures, initial training, and first role assignment are the onboarding steps that establish a new worker in the environment. Access recertification is plausible because it also examines entitlements, but it is a periodic re-validation of existing access for people already employed.",
   "d": 5
  },
  {
   "id": 318,
   "t": "security-procedures",
   "x": "A change advisory board declines to approve a database upgrade because the submitter never documented how the environment would be returned to its prior state if the upgrade behaves badly. What is missing?",
   "o": [
    "An impact analysis",
    "A test procedure",
    "A backout plan",
    "A maintenance window"
   ],
   "a": 2,
   "e": "The backout plan is the documented path back to the last known good state, and boards routinely reject changes that lack one. An impact analysis is a strong distractor since it is also required, but it predicts what the change will affect rather than describing how to undo it.",
   "d": 5
  },
  {
   "id": 319,
   "t": "user-training",
   "x": "A bank assigns secure coding modules to its developers, wire-fraud modules to its finance staff, and modules on targeted executive impersonation to its leadership. Which approach to instruction does this reflect?",
   "o": [
    "Computer-based training",
    "Role-based training",
    "Just-in-time training",
    "Annual refresher training"
   ],
   "a": 1,
   "e": "Tailoring content to the specific duties and exposure of each job function is role-based training, and it raises relevance far above one generic curriculum. Annual refresher training describes the cadence rather than the targeting, and it could just as easily deliver identical content to everyone.",
   "d": 5
  },
  {
   "id": 320,
   "t": "user-training",
   "x": "Employees working from home are told not to discuss account numbers on speakerphone in shared apartments and to use a privacy filter when sitting in coffee shops. That guidance addresses which instruction topic?",
   "o": [
    "Change management",
    "Password management",
    "Hybrid work environments",
    "Removable media handling"
   ],
   "a": 2,
   "e": "Shoulder surfing, overheard conversations, and uncontrolled physical surroundings are the hallmarks of hybrid and remote work guidance. Removable media handling is a neighboring awareness topic, but it deals with drives and portable storage rather than the acoustic and visual exposure of a public workspace.",
   "d": 5
  },
  {
   "id": 321,
   "t": "user-training",
   "x": "Ahead of an unannounced merger, staff are instructed to stop posting about new office locations, upcoming travel, and unfamiliar visitors on social platforms. Which instruction subject covers that restriction?",
   "o": [
    "Incident response",
    "Operational security",
    "Account management",
    "Physical security"
   ],
   "a": 1,
   "e": "Preventing adversaries from assembling harmless-looking fragments into a picture of sensitive activity is operational security. Physical security is a tempting choice because offices and visitors are mentioned, but the concern is the leak of information about the facility, not the protection of the facility itself.",
   "d": 5
  },
  {
   "id": 322,
   "t": "user-training",
   "x": "Help desk tickets reveal that many workers reuse one memorable phrase across every service and keep it written in a desk drawer notebook. Which instruction subject should the team prioritize alongside rolling out a vault?",
   "o": [
    "Reporting and monitoring",
    "Insider threat recognition",
    "Situational awareness",
    "Password management"
   ],
   "a": 3,
   "e": "Reuse and unsafe storage of credentials are exactly what password management guidance addresses, and pairing it with a vault gives users a workable alternative. Situational awareness is a real training topic, but it teaches staff to notice suspicious circumstances rather than to handle their own credentials safely.",
   "d": 5
  },
  {
   "id": 323,
   "t": "business-impact-analysis",
   "x": "Executives at a shipping company agree that the dispatch platform must be back in service within four hours of any outage before contractual penalties begin. Which planning figure does that four-hour limit represent?",
   "o": [
    "Recovery point objective",
    "Mean time to repair",
    "Mean time between failures",
    "Recovery time objective"
   ],
   "a": 3,
   "e": "The maximum tolerable downtime before the business suffers unacceptable harm is the recovery time objective, and it drives how much standby capacity must be funded. Mean time to repair is the tempting alternative, but that is an observed average of past repairs rather than a target the business sets in advance.",
   "d": 5
  },
  {
   "id": 324,
   "t": "business-impact-analysis",
   "x": "Over the past year a storage array failed six times, and maintenance logs record a combined 18 hours of repair effort across those six events. What figure should the analyst report for mean time to repair?",
   "o": [
    "3 hours",
    "24 hours",
    "2 hours",
    "6 hours"
   ],
   "a": 0,
   "e": "Mean time to repair is total repair time divided by the number of repairs, so 18 hours across 6 events yields 3 hours. Choosing 6 hours mistakes the count of failures for the average duration, and 24 hours simply adds the two given numbers, which has no meaning here.",
   "d": 5
  },
  {
   "id": 325,
   "t": "agreement-types",
   "x": "Two entrepreneurs formally establish a shared venture, spelling out capital contributions, how profits are divided, and the conditions under which either founder may exit. Which agreement type governs that arrangement?",
   "o": [
    "Statement of work",
    "Master service agreement",
    "Memorandum of agreement",
    "Business partnership agreement"
   ],
   "a": 3,
   "e": "A business partnership agreement is the binding instrument that defines ownership stakes, profit sharing, decision rights, and exit terms between partners in a joint venture. A memorandum of agreement is the closest distractor, but it records mutually understood roles between cooperating parties without establishing shared ownership or profit division.",
   "d": 5
  },
  {
   "id": 326,
   "t": "audits-and-assessments",
   "x": "Staff at a credit union who report to the board rather than to technology leadership examine whether quarterly access reviews were genuinely performed, then escalate the gaps they find. Which activity is this?",
   "o": [
    "A regulatory examination",
    "An external audit",
    "A vulnerability assessment",
    "An internal audit"
   ],
   "a": 3,
   "e": "Employees of the organization who report outside the chain of command they review are performing an internal audit, and that independence is what makes the findings credible. A regulatory examination is plausible for a credit union, but it would be conducted by a supervising agency rather than by the institution's own staff.",
   "d": 5
  },
  {
   "id": 327,
   "t": "compliance",
   "x": "A payment processor that fails its annual card-brand assessment is told it may not process transactions for the affected brand until remediation has been independently verified. Which consequence of falling short is this?",
   "o": [
    "Reputational damage",
    "Contractual fine",
    "Loss of license",
    "Criminal sanction"
   ],
   "a": 2,
   "e": "Being barred from performing the regulated activity until requirements are met is a loss of license or authorization, the most immediate operational consequence a processor can face. A contractual fine is a realistic parallel outcome, but a fine permits continued operation while this penalty stops the business line outright.",
   "d": 5
  },
  {
   "id": 328,
   "t": "risk-analysis",
   "x": "Historical records show that a coastal warehouse has flooded three times over the past 30 years. Which value should the analyst enter for the annualized rate of occurrence in the quantitative model?",
   "o": [
    "0.10",
    "0.33",
    "3.00",
    "10.00"
   ],
   "a": 0,
   "e": "The annualized rate of occurrence is events divided by years, so 3 floods over 30 years gives 0.10 per year. Selecting 0.33 divides three into one incorrectly, and 3.00 reports the raw count of floods rather than converting it to an annual frequency.",
   "d": 5
  },
  {
   "id": 329,
   "t": "risk-management",
   "x": "An organization keeps a living record listing each identified threat, its likelihood and impact scores, the named individual accountable for it, and the current treatment status. What is that record called?",
   "o": [
    "A risk appetite statement",
    "A business impact analysis",
    "A risk register",
    "A vulnerability report"
   ],
   "a": 2,
   "e": "The risk register is the central, continuously updated inventory of identified risks together with scoring, ownership, and treatment status. A business impact analysis is a reasonable guess since it also produces scores, but it measures the consequences of losing specific processes rather than tracking individual risks and their owners over time.",
   "d": 5
  },
  {
   "id": 330,
   "t": "security-policies",
   "x": "A software team is directed to document required peer review, dependency scanning, and threat modeling at each stage from design through release. Which governing document establishes those expectations?",
   "o": [
    "Development lifecycle policy",
    "Disaster recovery policy",
    "Incident response policy",
    "Acceptable use policy"
   ],
   "a": 0,
   "e": "Security requirements attached to each phase of building and releasing software belong in a software development lifecycle policy. An acceptable use policy is a common wrong pick because it also constrains employee behavior, but it governs how workers may use company systems and has nothing to say about build-stage gates.",
   "d": 5
  },
  {
   "id": 331,
   "t": "third-party-risk-assessment",
   "x": "Before signing with a payroll platform, a buyer sends a standardized set of written control questions covering encryption, subcontractor use, and breach history, then scores the answers. Which due diligence method is this?",
   "o": [
    "An independent attestation",
    "A right-to-audit clause",
    "A vendor questionnaire",
    "Continuous monitoring"
   ],
   "a": 2,
   "e": "A structured, scored set of written control questions issued to a supplier before contracting is a vendor questionnaire, the standard opening step in third-party due diligence. An independent attestation is a stronger form of evidence, but it is produced by an outside assessor rather than self-reported by the vendor in response to the buyer's questions.",
   "d": 5
  },
  {
   "id": 332,
   "t": "blockchain-technology",
   "x": "A cryptocurrency network has no central authority, yet thousands of independent nodes must agree on which transactions are valid before a new block is committed. Which mechanism lets these mutually distrusting participants reach that agreement?",
   "o": [
    "A central key escrow service",
    "A consensus mechanism such as proof of work",
    "A trusted certificate authority",
    "A load balancer distributing requests"
   ],
   "a": 1,
   "e": "Blockchains use a consensus mechanism, such as proof of work or proof of stake, so distributed nodes agree on the valid ledger without a central authority. A certificate authority is a centralized trust anchor, which is exactly what a blockchain is designed to avoid.",
   "d": 1
  },
  {
   "id": 333,
   "t": "blockchain-technology",
   "x": "A public blockchain stores a complete copy of the ledger on every participating node instead of in one database. If some nodes go offline or one operator alters its own copy, the record stays available and correct. Which property provides this resilience?",
   "o": [
    "Decentralized copies stored on every node",
    "A single authoritative master server",
    "Nightly backups to offline media",
    "RAID mirroring on the primary host"
   ],
   "a": 0,
   "e": "Every node holding an independent copy makes the ledger decentralized, so no single failure or tampered copy can take down or rewrite the shared record. A single master server would reintroduce the central point of failure blockchains are built to remove.",
   "d": 1
  },
  {
   "id": 334,
   "t": "certificates",
   "x": "A company hosts sites under completely different domain names, including example.com, example.net, and store.example.org, and wants one certificate to protect all of them. Which certificate feature lists several distinct names on a single certificate?",
   "o": [
    "A wildcard covering one domain's subdomains",
    "A self-signed certificate per host",
    "An extended validation marker",
    "Subject Alternative Name entries"
   ],
   "a": 3,
   "e": "Subject Alternative Name lets one certificate carry multiple distinct fully qualified names, even across different domains. A wildcard only covers subdomains of a single domain, so it cannot secure unrelated domain names together.",
   "d": 1
  },
  {
   "id": 335,
   "t": "certificates",
   "x": "A browser must confirm in real time that a presented certificate has not been revoked before its expiration date because the private key may have been compromised. Which mechanism lets the browser query the issuer for that live status?",
   "o": [
    "The Online Certificate Status Protocol",
    "A certificate signing request",
    "A periodically published revocation list",
    "A key stretching function"
   ],
   "a": 0,
   "e": "The Online Certificate Status Protocol answers a single certificate's revocation status on demand, giving a real-time result. A revocation list is downloaded in bulk on a schedule, so it can be stale between publications.",
   "d": 1
  },
  {
   "id": 336,
   "t": "change-management",
   "x": "A network team wants to apply a core switch update, but policy forbids proceeding until one named individual is formally accountable for the change and authorized to move it forward. Which change management element assigns that accountability?",
   "o": [
    "An application allow list",
    "Ownership of the change",
    "A maintenance window",
    "A backout plan"
   ],
   "a": 1,
   "e": "Assigning an owner establishes who is accountable for and authorized to drive a change through the process. A backout plan only describes how to reverse the change and does not assign responsibility for it.",
   "d": 1
  },
  {
   "id": 337,
   "t": "change-management",
   "x": "To limit disruption, an administrator schedules a storage firmware update for Sunday between 2 and 4 a.m., when transaction volume is at its lowest. Defining this approved timeframe for the work is which change management practice?",
   "o": [
    "Setting a maintenance window",
    "Assigning change ownership",
    "Performing an impact analysis",
    "Writing a backout plan"
   ],
   "a": 0,
   "e": "A maintenance window is the pre-approved timeframe during which changes may be performed to minimize impact on users. An impact analysis studies potential effects but does not schedule the work itself.",
   "d": 1
  },
  {
   "id": 338,
   "t": "deception-and-disruption",
   "x": "An administrator stands up a single isolated, monitored system that looks vulnerable but serves no production role, so that any connection to it is inherently suspicious. What is this individual decoy system called?",
   "o": [
    "A jump server",
    "A honeypot",
    "A honeynet",
    "A honeytoken"
   ],
   "a": 1,
   "e": "A honeypot is one decoy system deployed to attract and observe attackers. A honeynet is an entire decoy network of such systems, so it does not describe a single host.",
   "d": 1
  },
  {
   "id": 339,
   "t": "deception-and-disruption",
   "x": "A security team places a document named executive_salaries_2026.xlsx on a file server; it contains no real data and raises an alert the instant anyone opens it. What decoy artifact is this?",
   "o": [
    "A honeypot",
    "A honeynet",
    "A honeyfile",
    "A data masking rule"
   ],
   "a": 2,
   "e": "A honeyfile is a bait file with no legitimate purpose that alerts defenders whenever it is accessed. A honeypot is a full decoy system rather than a single file placed among real ones.",
   "d": 1
  },
  {
   "id": 340,
   "t": "gap-analysis",
   "x": "While conducting a gap analysis, an assessor documents the organization's present security posture and the posture it is required to reach. The analysis then concentrates on identifying what specifically?",
   "o": [
    "The total cost of ownership for each system",
    "The residual risk left after all controls",
    "The gap between the current and desired states",
    "The likelihood assigned to each individual threat"
   ],
   "a": 2,
   "e": "A gap analysis compares where the organization is now against where it needs to be and reports the differences that must be closed. Residual risk is what remains after controls are applied, which is a separate measurement.",
   "d": 1
  },
  {
   "id": 341,
   "t": "gap-analysis",
   "x": "After a gap analysis identifies missing controls, which document records each gap together with the planned corrective action, an assigned owner, and a target completion date?",
   "o": [
    "An acceptable use policy",
    "A business impact analysis",
    "A service level agreement",
    "A plan of action and milestones"
   ],
   "a": 3,
   "e": "A plan of action and milestones tracks each identified weakness, the remediation planned, who owns it, and when it is due. A business impact analysis measures the effect of disruptions and does not track remediation tasks.",
   "d": 1
  },
  {
   "id": 342,
   "t": "hashing-and-digital-signatures",
   "x": "A researcher discovers that two entirely different input files produce the exact same output from a hashing algorithm. What is this condition called, and why is it dangerous?",
   "o": [
    "A salt, adding randomness before a password is hashed",
    "A checksum error from a corrupted file transfer",
    "A rainbow table, a precomputed set of hash lookups",
    "A collision, allowing one file to be swapped for another"
   ],
   "a": 3,
   "e": "A collision occurs when different inputs share the same hash, breaking the guarantee that a digest uniquely identifies its data and enabling one file to masquerade as another. A salt only adds randomness to password hashing and is unrelated to two files matching.",
   "d": 1
  },
  {
   "id": 343,
   "t": "hashing-and-digital-signatures",
   "x": "A password storage scheme deliberately runs its hashing function through many thousands of iterations using algorithms such as bcrypt or PBKDF2. What is the security purpose of this repeated processing?",
   "o": [
    "It makes the stored hash reversible on demand",
    "It slows offline guessing by making each attempt costly",
    "It shortens the resulting digest to save storage",
    "It adds non-repudiation to the stored password"
   ],
   "a": 1,
   "e": "Key stretching runs many iterations so each password guess is expensive, dramatically slowing brute-force and dictionary attacks against stolen hashes. Hashing is one-way, so it never makes the stored value reversible.",
   "d": 1
  },
  {
   "id": 344,
   "t": "key-exchange",
   "x": "During a TLS handshake, the client generates a random symmetric session key, encrypts it with the server's public key, and transmits it so only the server's private key can open it. Which type of cryptography protects the session key while it is in transit here?",
   "o": [
    "Symmetric encryption",
    "Asymmetric encryption",
    "Steganographic hiding",
    "Cryptographic hashing"
   ],
   "a": 1,
   "e": "Encrypting the session key with the server's public key so only its private key can decrypt it is asymmetric encryption used for key transport. Symmetric encryption would require the shared key to already exist, which is the very thing being delivered.",
   "d": 1
  },
  {
   "id": 345,
   "t": "key-exchange",
   "x": "After two hosts complete their key exchange, they switch to a symmetric cipher such as AES to encrypt the actual session data rather than continuing with the asymmetric algorithm. What is the primary reason for this switch?",
   "o": [
    "Symmetric ciphers process bulk data much faster",
    "Asymmetric ciphers cannot encrypt any data at all",
    "Symmetric keys need no protection once created",
    "Symmetric encryption also provides non-repudiation"
   ],
   "a": 0,
   "e": "Symmetric encryption is far faster and less resource-intensive than asymmetric encryption, so it is preferred for bulk session data once the key is exchanged. Asymmetric encryption can encrypt data but is too slow for large payloads, which is why it is reserved for the exchange itself.",
   "d": 1
  },
  {
   "id": 346,
   "t": "non-repudiation",
   "x": "A message authentication code built on a secret key shared between two parties verifies both integrity and authenticity, yet it cannot provide non-repudiation. Why not?",
   "o": [
    "It relies on a weak internal hashing algorithm",
    "Both parties share the key, so either one could produce it",
    "It can be reversed and decrypted into the original message",
    "It protects only part of the message body"
   ],
   "a": 1,
   "e": "Because a shared-key message authentication code can be generated by anyone holding the key, no single party can be uniquely bound to it, so it cannot prove who sent the message. Non-repudiation instead requires a private key held by only one signer, as in a digital signature.",
   "d": 1
  },
  {
   "id": 347,
   "t": "non-repudiation",
   "x": "A digital signature delivers non-repudiation precisely because the signing operation relies on a key that only one individual possesses. Which key performs the signing?",
   "o": [
    "The recipient's public key",
    "A shared symmetric session key",
    "The certificate authority's root key",
    "The signer's private key"
   ],
   "a": 3,
   "e": "Signing with the signer's private key, which no one else holds, binds the signature uniquely to that person and provides non-repudiation. The recipient's public key is used to encrypt data to the recipient, not to sign on the sender's behalf.",
   "d": 1
  },
  {
   "id": 348,
   "t": "obfuscation",
   "x": "A payment processor replaces each stored card number with a randomly generated surrogate value and keeps the real numbers in a separately secured vault that maps each surrogate back to its card. Which technique is described?",
   "o": [
    "Steganography",
    "Data masking",
    "Tokenization",
    "Salting"
   ],
   "a": 2,
   "e": "Tokenization substitutes a meaningless surrogate for sensitive data and stores the real value separately in a protected vault. Data masking only hides characters in the displayed value and does not swap in a separate reference held elsewhere.",
   "d": 1
  },
  {
   "id": 349,
   "t": "obfuscation",
   "x": "A developer passes finished JavaScript through a tool that renames variables to meaningless symbols and strips comments and formatting, making the logic much harder to read and reverse engineer while it still runs identically. Which technique is applied?",
   "o": [
    "Symmetric encryption",
    "Digital signing",
    "Tokenization",
    "Code obfuscation"
   ],
   "a": 3,
   "e": "Obfuscation deliberately makes code difficult for humans to understand while preserving its behavior, which deters reverse engineering. Encryption would render the code unrunnable until decrypted, so it is not what a still-executing script uses.",
   "d": 1
  },
  {
   "id": 350,
   "t": "physical-security",
   "x": "A company wants one control that both discourages intrusion after dark and improves the usefulness of its outdoor camera footage by keeping faces and plates visible. Which physical control best meets both goals?",
   "o": [
    "An access control vestibule",
    "Bollards at the entrance",
    "A Faraday cage",
    "Security lighting"
   ],
   "a": 3,
   "e": "Lighting deters intruders who prefer darkness and simultaneously lets cameras capture usable images at night. Bollards stop vehicles but do nothing to improve visibility for surveillance.",
   "d": 1
  },
  {
   "id": 351,
   "t": "physical-security",
   "x": "A remote unstaffed site needs controls that will detect an intruder after hours, not merely deter one. Which TWO controls provide detection of an intrusion? Choose TWO.",
   "o": [
    "Video surveillance cameras with recording",
    "Concrete vehicle bollards lining the driveway",
    "Warning signage at the gate",
    "Motion sensors that alarm on movement",
    "A perimeter fence around the lot"
   ],
   "a": 0,
   "e": "Motion sensors and surveillance cameras actively detect and record an intruder's presence, alerting staff or providing evidence. Bollards, fencing, and signage are deterrent or preventive controls and do not by themselves detect an intrusion.",
   "d": 1,
   "as": [
    0,
    3
   ]
  },
  {
   "id": 352,
   "t": "security-controls",
   "x": "After ransomware encrypts several file servers, the team restores the affected data from clean backups to return operations to normal. Which control function does this restoration represent?",
   "o": [
    "A preventive control",
    "A detective control",
    "A deterrent control",
    "A corrective control"
   ],
   "a": 3,
   "e": "A corrective control acts after an incident to restore systems and limit damage, which is exactly what restoring from backup does. A preventive control would have tried to stop the ransomware before it executed.",
   "d": 1
  },
  {
   "id": 353,
   "t": "security-controls",
   "x": "A legacy system cannot support the required multifactor authentication, so the organization instead isolates it on a tightly restricted, closely monitored network segment to satisfy the same objective another way. What type of control is this alternative?",
   "o": [
    "A directive control",
    "A deterrent control",
    "A compensating control",
    "A physical control"
   ],
   "a": 2,
   "e": "A compensating control is an alternative measure used when the primary required control is not feasible, meeting the objective by other means. A directive control instructs behavior through policy and would not technically substitute for the missing authentication.",
   "d": 1
  },
  {
   "id": 354,
   "t": "technical-change-management",
   "x": "A kernel security patch is installed on a production server, but the fix does not take effect until one more technical step is completed, which briefly interrupts the running services. Which step is required?",
   "o": [
    "Requesting change advisory board approval",
    "Restarting the system to load the patched kernel",
    "Filing a backout plan for the change",
    "Running a fresh vulnerability baseline scan"
   ],
   "a": 1,
   "e": "A kernel patch generally requires a restart so the updated code is actually loaded into memory, a technical change management consideration because of the brief outage. A backout plan is documentation prepared beforehand and does not activate the patch.",
   "d": 1
  },
  {
   "id": 355,
   "t": "technical-change-management",
   "x": "After a network team swaps in a new core router and reassigns several VLANs, the physical and logical network diagrams no longer match the live environment. Which technical change management task must be completed to close out the change?",
   "o": [
    "Scheduling a second maintenance window",
    "Updating the network documentation and diagrams",
    "Obtaining initial stakeholder approval",
    "Performing a pre-change impact and dependency analysis"
   ],
   "a": 1,
   "e": "Keeping documentation and diagrams accurate after a change is a required technical task so future work relies on correct information. An impact analysis and stakeholder approval happen before the change, not as part of closing it out.",
   "d": 1
  },
  {
   "id": 356,
   "t": "the-cia-triad",
   "x": "A hospital encrypts patient records at rest so that anyone who physically steals the drives cannot read the contents. Which element of the CIA triad does this control primarily protect?",
   "o": [
    "Confidentiality",
    "Availability",
    "Integrity",
    "Non-repudiation"
   ],
   "a": 0,
   "e": "Encryption at rest keeps data unreadable to unauthorized parties, which protects confidentiality. Integrity concerns whether data was altered, and non-repudiation is not part of the CIA triad at all.",
   "d": 1
  },
  {
   "id": 357,
   "t": "the-cia-triad",
   "x": "Of the following security properties, which one is not a core goal of the CIA triad?",
   "o": [
    "Availability",
    "Non-repudiation",
    "Integrity",
    "Confidentiality"
   ],
   "a": 1,
   "e": "The CIA triad consists of confidentiality, integrity, and availability. Non-repudiation is an important security property but is not one of the three triad goals.",
   "d": 1
  },
  {
   "id": 358,
   "t": "zero-trust",
   "x": "In a Zero Trust architecture, which component sits in the data path and actually enforces the decision by permitting or blocking the connection to the requested resource?",
   "o": [
    "The policy administrator",
    "The policy enforcement point",
    "The policy engine",
    "The certificate authority"
   ],
   "a": 1,
   "e": "The policy enforcement point is in the data plane and carries out allow or block actions on the connection. The policy engine only makes the decision in the control plane and does not itself sit in the traffic path.",
   "d": 1
  },
  {
   "id": 359,
   "t": "zero-trust",
   "x": "A Zero Trust network is divided into many small, individually isolated segments so that compromising one workload does not let an attacker move freely to the others. Which Zero Trust technique is this?",
   "o": [
    "Perfect forward secrecy",
    "Port mirroring",
    "Round-robin load balancing",
    "Microsegmentation"
   ],
   "a": 3,
   "e": "Microsegmentation isolates workloads into small zones so lateral movement is contained if one is breached. Perfect forward secrecy protects session keys and has nothing to do with segmenting network access.",
   "d": 1
  },
  {
   "id": 360,
   "t": "application-attacks",
   "x": "A login form lets a tester type ' OR '1'='1 into the username field and gain access without a valid password because the entry is concatenated directly into a database query. Which attack is this, and what is the primary fix?",
   "o": [
    "Buffer overflow, fixed with address space layout randomization",
    "Directory traversal, fixed with path canonicalization",
    "Cross-site scripting, fixed with output encoding",
    "SQL injection, fixed with parameterized queries"
   ],
   "a": 3,
   "e": "Injecting SQL fragments that alter the query logic is SQL injection, and parameterized queries stop it by separating code from data. Cross-site scripting targets other users' browsers rather than the backend database, so output encoding would not address this flaw.",
   "d": 2
  },
  {
   "id": 361,
   "t": "application-attacks",
   "x": "A web application is vulnerable to stored cross-site scripting. Which TWO defenses most directly prevent injected scripts from running in other users' browsers? Choose TWO.",
   "o": [
    "Validating and sanitizing user-supplied input",
    "Adding a CAPTCHA to the submission form",
    "Encoding output before rendering it into the page",
    "Extending the session inactivity timeout",
    "Enabling TLS encryption on the public web server"
   ],
   "a": 0,
   "e": "Output encoding neutralizes script characters as data is rendered, and input validation rejects or cleans malicious markup before it is stored, together stopping stored cross-site scripting. TLS only encrypts traffic in transit and does nothing to prevent a stored script from executing.",
   "d": 2,
   "as": [
    0,
    2
   ]
  },
  {
   "id": 362,
   "t": "buffer-overflows",
   "x": "A program multiplies a user-supplied item count by a fixed record size to size a buffer; an enormous count wraps the result to a tiny number, so the following copy writes far past the undersized allocation. Which flaw enabled this overflow?",
   "o": [
    "A format string bug",
    "A race condition",
    "A use-after-free",
    "An integer overflow"
   ],
   "a": 3,
   "e": "An integer overflow wraps an arithmetic result to a small value, producing an allocation too small for the data that is then copied in. A race condition involves timing between operations and does not explain an undersized buffer from arithmetic wraparound.",
   "d": 2
  },
  {
   "id": 363,
   "t": "buffer-overflows",
   "x": "A team wants to keep buffer overflow vulnerabilities out of newly written code from the start. Which TWO practices most directly prevent them? Choose TWO.",
   "o": [
    "Increasing the default thread stack size",
    "Using memory-safe languages or safe library functions",
    "Storing all buffers on the heap instead of the stack",
    "Disabling address space layout randomization",
    "Bounds checking on every buffer operation"
   ],
   "a": 1,
   "e": "Checking lengths before writing and using memory-safe languages or bounded functions prevent overflows at the source. Disabling address space layout randomization removes a protection, and moving buffers to the heap does not stop an unchecked copy from overflowing.",
   "d": 2,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 364,
   "t": "cloud-specific-vulnerabilities",
   "x": "An attacker finds a developer's cloud access key hard-coded in a public code repository and uses it to launch dozens of costly GPU instances for cryptocurrency mining. Which cloud weakness most directly enabled this abuse?",
   "o": [
    "A virtual machine escape",
    "Exposed access credentials",
    "DNS cache poisoning",
    "Missing encryption at rest"
   ],
   "a": 1,
   "e": "A leaked access key gives an attacker direct, authenticated use of the account's resources, which is a credential exposure problem. Missing encryption at rest would risk data confidentiality but would not let an attacker spin up new instances.",
   "d": 2
  },
  {
   "id": 365,
   "t": "cloud-specific-vulnerabilities",
   "x": "A team deploying workloads to a public infrastructure-as-a-service provider wants to reduce the most common causes of cloud data exposure. Which TWO practices most directly help? Choose TWO.",
   "o": [
    "Disabling multifactor authentication on service accounts",
    "Keeping storage buckets private by default",
    "Granting broad wildcard permissions for convenience",
    "Applying least-privilege permissions to identities",
    "Committing credentials into the code repository"
   ],
   "a": 1,
   "e": "Least-privilege access and private-by-default storage remove the two most frequent cloud exposure causes, over-permissioned identities and publicly readable buckets. Wildcard permissions and committing credentials do the opposite by widening access and leaking secrets.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 366,
   "t": "common-threat-vectors",
   "x": "During onboarding, a new managed service provider is granted broad remote administrative access to a client's network so it can maintain systems. Attackers later breach the provider and pivot into the client through that trusted connection. Which threat vector does this illustrate?",
   "o": [
    "A supply chain vector through a trusted third-party provider",
    "A default-credentials vector on an exposed appliance",
    "An unsecure-network vector over open public Wi-Fi",
    "A removable-media vector using an infected USB drive"
   ],
   "a": 0,
   "e": "Trusted vendors and managed service providers extend an organization's attack surface, and compromising the provider gives attackers a path into every client. The other options describe unrelated vectors not present in this scenario.",
   "d": 2
  },
  {
   "id": 367,
   "t": "common-threat-vectors",
   "x": "A security team is listing ways an attacker could gain initial access to the environment. Which two of the following are threat vectors rather than defensive controls? Choose TWO.",
   "o": [
    "A phishing email that carries a malicious link",
    "Enforcing least privilege on user accounts",
    "Requiring multifactor authentication at login",
    "Segmenting the network into isolated zones",
    "An open service port exposed directly to the internet"
   ],
   "a": 0,
   "e": "Exposed service ports and phishing messages are avenues attackers use to get in, so they are threat vectors. Least privilege, multifactor authentication, and segmentation are mitigations, not vectors.",
   "d": 2,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 368,
   "t": "cross-site-scripting",
   "x": "A search page echoes the visitor's query directly into the results heading. An attacker crafts a link containing script in the query string and emails it to a victim, whose browser runs the script the moment the page loads. Which variant of cross-site scripting is this?",
   "o": [
    "Server-side request forgery",
    "DOM-based cross-site scripting",
    "Stored cross-site scripting",
    "Reflected cross-site scripting"
   ],
   "a": 3,
   "e": "In reflected XSS the malicious script travels in the request and is immediately echoed back in the server's response, so it fires when the victim opens the crafted link. Stored XSS would persist the script on the server, and DOM-based XSS executes entirely in client-side script.",
   "d": 2
  },
  {
   "id": 369,
   "t": "cross-site-scripting",
   "x": "A single-page application reads the text after the hash in the URL and writes it into the page using client-side JavaScript with no sanitization, so a crafted fragment executes without the server ever seeing it. Which type of cross-site scripting is this?",
   "o": [
    "Stored cross-site scripting",
    "Reflected cross-site scripting",
    "DOM-based cross-site scripting",
    "Cross-site request forgery"
   ],
   "a": 2,
   "e": "DOM-based XSS occurs when client-side script writes attacker-controlled data into the page's DOM without sanitization, so the payload never reaches the server. Reflected and stored XSS both involve the server processing the input.",
   "d": 2
  },
  {
   "id": 370,
   "t": "cryptographic-attacks",
   "x": "An attacker takes advantage of the statistical likelihood that two inputs will share the same hash, finding a collision far faster than testing every possible value. Which cryptographic attack relies on this probability principle?",
   "o": [
    "Birthday attack",
    "Brute-force key search",
    "Downgrade attack",
    "Known-plaintext attack"
   ],
   "a": 0,
   "e": "The birthday attack exploits the birthday paradox to find hash collisions in roughly the square root of the total space, much faster than brute force. A downgrade attack forces weaker protocols, and a known-plaintext attack uses matched plaintext and ciphertext pairs.",
   "d": 2
  },
  {
   "id": 371,
   "t": "cryptographic-attacks",
   "x": "Attackers who steal a database of unsalted password hashes reverse them almost instantly using enormous precomputed lookup tables. Which defense specifically defeats these precomputed tables?",
   "o": [
    "Adding a unique random salt to each password before hashing",
    "Enabling perfect forward secrecy on the server",
    "Switching the server to a longer symmetric key",
    "Increasing the web session idle timeout"
   ],
   "a": 0,
   "e": "A unique per-password salt makes every stored hash different, so a single precomputed rainbow table can no longer match many accounts at once. Session timeouts, forward secrecy, and symmetric key length do not affect cracking of stored password hashes.",
   "d": 2
  },
  {
   "id": 372,
   "t": "denial-of-service",
   "x": "An attacker sends a rapid stream of connection-opening packets to a server but never completes the final step of the handshake, filling the server's table of half-open connections until it can accept no more. Which attack is described?",
   "o": [
    "DNS amplification",
    "Cross-site request forgery",
    "SYN flood",
    "ARP poisoning"
   ],
   "a": 2,
   "e": "A SYN flood exhausts the target's half-open connection table by never completing the three-way handshake, denying service to legitimate clients. Amplification abuses reflectors for volume, while ARP poisoning targets link-layer address mappings.",
   "d": 2
  },
  {
   "id": 373,
   "t": "denial-of-service",
   "x": "A company wants its public web application to stay available even when a massive flood of traffic arrives simultaneously from many sources. Which measure best absorbs and filters that malicious traffic before it reaches the origin server?",
   "o": [
    "A password manager for the administrators",
    "A host-based antivirus scanner on the web server",
    "Full-disk encryption on the database server",
    "A cloud-based DDoS scrubbing and mitigation service"
   ],
   "a": 3,
   "e": "Cloud DDoS mitigation services have the capacity to absorb and scrub volumetric floods upstream of the origin, keeping the application reachable. Antivirus, disk encryption, and password managers address different risks and cannot soak up a flood.",
   "d": 2
  },
  {
   "id": 374,
   "t": "dns-attacks",
   "x": "A security team wants assurance that the DNS responses reaching their resolvers were not forged or altered on the way. Which technology adds cryptographic signatures to zone records to provide that integrity guarantee?",
   "o": [
    "Split-horizon DNS",
    "Round-robin DNS",
    "DNSSEC",
    "Dynamic DNS"
   ],
   "a": 2,
   "e": "DNSSEC signs zone data so resolvers can verify that records are authentic and unmodified, defeating forged responses and cache poisoning. Round-robin, split-horizon, and dynamic DNS address load, views, and updates, not authenticity.",
   "d": 2
  },
  {
   "id": 375,
   "t": "dns-attacks",
   "x": "An analyst notices a workstation making a steady stream of oddly encoded subdomain lookups to a single external domain, with no matching web browsing to explain them. Which technique is most likely being used to move data out covertly?",
   "o": [
    "A zone transfer",
    "A reverse DNS lookup",
    "DNS tunneling",
    "DNS cache poisoning"
   ],
   "a": 2,
   "e": "DNS tunneling smuggles data inside DNS queries and responses, often as long encoded subdomains, to slip past controls that allow DNS out. Cache poisoning corrupts resolver entries, and a zone transfer copies zone records between servers.",
   "d": 2
  },
  {
   "id": 376,
   "t": "hardware-vulnerabilities",
   "x": "A manufacturer releases a critical firmware patch for a widely deployed baseboard management controller after researchers disclose a flaw allowing remote takeover. What is the main security reason to apply firmware updates like this without delay?",
   "o": [
    "Firmware runs beneath the operating system, so its flaws can grant deep, lasting control",
    "Firmware updates mainly deliver new end-user features and interface changes",
    "Firmware sits above the operating system where antivirus already protects it",
    "Firmware defects only affect performance and never create security risk"
   ],
   "a": 0,
   "e": "Because firmware executes below the operating system, an unpatched flaw can give attackers persistent, hard-to-detect control of the device. The other statements misdescribe firmware's role or downplay its security impact.",
   "d": 2
  },
  {
   "id": 377,
   "t": "hardware-vulnerabilities",
   "x": "A hospital depends on an imaging device built on an embedded platform the manufacturer will never patch again, yet the device is essential to daily care. Which approach best limits the risk while keeping it in service?",
   "o": [
    "Connect it directly to the internet for easier remote support",
    "Turn off its logging so it runs a little faster",
    "Isolate it on a segmented network with tightly restricted access",
    "Grant all clinical staff local administrator rights on it"
   ],
   "a": 2,
   "e": "When a legacy device cannot be patched, network isolation and strict access control act as compensating controls that shrink its exposure. The other choices increase risk by widening access or removing visibility.",
   "d": 2
  },
  {
   "id": 378,
   "t": "hardware-vulnerabilities",
   "x": "A security assessor is sorting findings by category. Which two of the following are hardware vulnerabilities? Choose TWO.",
   "o": [
    "Firmware on a device that no longer receives security updates",
    "A network appliance that has reached end-of-life support",
    "A web form that fails to sanitize script input",
    "A file share whose permissions are set too broadly",
    "A password reused across many personal accounts"
   ],
   "a": 0,
   "e": "Unpatched firmware and end-of-life appliances are weaknesses in the hardware itself. The script-handling flaw, reused password, and over-broad share permission are application, credential, and configuration issues respectively.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 379,
   "t": "impersonation",
   "x": "An employee receives a phone call from someone who claims to be from the internal help desk and insists he must read out his current password so they can clear a mailbox error. Which social engineering technique is the caller using?",
   "o": [
    "Watering-hole targeting of a shared website",
    "Dumpster diving for discarded records",
    "Tailgating through a controlled door",
    "Impersonation of a trusted internal role"
   ],
   "a": 3,
   "e": "The caller is impersonating a trusted help-desk identity to trick the employee into surrendering credentials. Watering-hole attacks compromise popular sites, dumpster diving recovers discarded data, and tailgating is a physical entry technique.",
   "d": 2
  },
  {
   "id": 380,
   "t": "impersonation",
   "x": "A finance clerk receives an urgent message that appears to come from the chief executive, demanding an immediate wire transfer to a new supplier while skipping the usual approval steps. Which impersonation-driven attack is this?",
   "o": [
    "SQL injection",
    "Evil twin access point",
    "Business email compromise",
    "Credential stuffing"
   ],
   "a": 2,
   "e": "Business email compromise impersonates a senior executive or trusted partner to pressure staff into fraudulent payments. Credential stuffing reuses leaked passwords, SQL injection targets databases, and an evil twin is a rogue wireless access point.",
   "d": 2
  },
  {
   "id": 381,
   "t": "impersonation",
   "x": "To reduce the success of attackers who phone the service desk pretending to be employees who need a password reset, which control is most effective?",
   "o": [
    "Accept the caller once they can state the employee's job title",
    "Reset the password whenever the caller sounds urgent and convincing",
    "Verify the caller through a defined out-of-band identity check before any reset",
    "Publish the reset steps openly so anyone can follow them"
   ],
   "a": 2,
   "e": "Requiring an out-of-band identity verification before a reset stops attackers who merely claim to be an employee. Reacting to urgency, trusting easily known details, or publishing the process all make impersonation easier.",
   "d": 2
  },
  {
   "id": 382,
   "t": "indicators-of-compromise",
   "x": "A server that normally sends a few megabytes a day suddenly transfers hundreds of gigabytes over a weekend to an unfamiliar host abroad. Which indicator of compromise best fits this observation?",
   "o": [
    "Impossible travel between two logins",
    "Repeated account lockouts on one user",
    "An unusual spike in outbound data volume",
    "A sudden gap in the server's logs"
   ],
   "a": 2,
   "e": "A large, unexpected outbound transfer to an unknown destination is a classic sign of data exfiltration. Impossible travel, missing logs, and account lockouts are different indicators not shown by this traffic pattern.",
   "d": 2
  },
  {
   "id": 383,
   "t": "indicators-of-compromise",
   "x": "During a routine review, administrators discover a new account holding high privileges that no one recalls creating and that maps to no employee or service. Which indicator of compromise does this represent?",
   "o": [
    "Creation of an unauthorized privileged account",
    "Repeated blocked-content alerts at the proxy",
    "A sudden surge in processor usage",
    "Concurrent sessions from a single user"
   ],
   "a": 0,
   "e": "An unexplained privileged account is a strong indicator that an attacker has established persistence. Concurrent sessions, resource spikes, and blocked content are other categories of indicators not described here.",
   "d": 2
  },
  {
   "id": 384,
   "t": "malicious-code",
   "x": "Staff arrive one morning to find their documents renamed with an unknown extension and a note demanding cryptocurrency payment to restore access to the files. Which type of malicious code is responsible?",
   "o": [
    "Spyware",
    "Rootkit",
    "Ransomware",
    "Keylogger"
   ],
   "a": 2,
   "e": "Ransomware encrypts or locks files and demands payment for their return, exactly as the ransom note indicates. A keylogger records keystrokes, a rootkit hides an intruder's presence, and spyware quietly gathers information.",
   "d": 2
  },
  {
   "id": 385,
   "t": "malicious-code",
   "x": "Soon after one machine is infected, the same malware spreads across a flat network entirely on its own by exploiting a service flaw, with no user ever opening a file or clicking a link. Which classification fits this behavior?",
   "o": [
    "Ransomware",
    "Logic bomb",
    "Worm",
    "Trojan"
   ],
   "a": 2,
   "e": "A worm self-propagates across systems without user interaction, typically by exploiting network vulnerabilities. A trojan needs a user to run it, and a logic bomb waits for a trigger rather than spreading on its own.",
   "d": 2
  },
  {
   "id": 386,
   "t": "malicious-code",
   "x": "A disgruntled administrator plants code that runs a check every night and, if his own account is ever removed from the payroll system, deletes critical database tables in retaliation. Which type of malicious code is this?",
   "o": [
    "Logic bomb",
    "Worm",
    "Remote-access trojan",
    "Rootkit"
   ],
   "a": 0,
   "e": "A logic bomb lies dormant until a specific condition is met, then executes its harmful payload, as with the account-removal trigger here. Worms spread, rootkits hide access, and a remote-access trojan gives an attacker interactive control.",
   "d": 2
  },
  {
   "id": 387,
   "t": "malicious-updates",
   "x": "Attackers infiltrate a trusted software company's build pipeline and slip a backdoor into a routine product release, which is then digitally signed and delivered to thousands of customers. What makes this kind of attack especially dangerous?",
   "o": [
    "The malicious code arrives inside a trusted, signed update customers already expect",
    "Signed installers are always quarantined by endpoint protection",
    "Victims must first visit a suspicious site and disable their antivirus",
    "The backdoor is confined to the vendor and never reaches customers"
   ],
   "a": 0,
   "e": "Because the tampered update is legitimately signed and pushed through normal channels, customers install it with full trust, giving the attacker wide reach. The other statements describe conditions that do not apply to a trusted-update compromise.",
   "d": 2
  },
  {
   "id": 388,
   "t": "malicious-updates",
   "x": "A build process automatically pulls the newest version of an open-source library from a public repository. An attacker publishes a malicious release under a confusingly similar name, and the build ingests it. Which risk does this illustrate?",
   "o": [
    "A physical tailgating attempt at the office",
    "A software dependency poisoning attack in the supply chain",
    "A volumetric denial-of-service flood",
    "A brute-force attack on a login form"
   ],
   "a": 1,
   "e": "Pulling dependencies automatically lets an attacker inject malicious code by publishing a look-alike package that the build trusts, a supply chain risk. Denial of service, brute forcing, and tailgating are unrelated attack types.",
   "d": 2
  },
  {
   "id": 389,
   "t": "malicious-updates",
   "x": "An administrator wants to reduce the chance of installing a tampered software or firmware update. Which two practices most directly help? Choose TWO.",
   "o": [
    "Verify the vendor's digital signature or checksum before installing",
    "Deploy the update first to an isolated test environment",
    "Disable all future updates to avoid any risk",
    "Download updates only on weekends to save bandwidth",
    "Rename the update file before running the installer"
   ],
   "a": 0,
   "e": "Checking a signature or checksum confirms the update is authentic and unaltered, and staging it in a test environment catches problems before wide release. Timing downloads, disabling updates, or renaming files does nothing to detect tampering.",
   "d": 2,
   "as": [
    0,
    1
   ]
  },
  {
   "id": 390,
   "t": "memory-injections",
   "x": "A program copies user-supplied input into a fixed-size buffer without checking its length, letting an attacker overwrite adjacent memory and redirect the program's execution. Which vulnerability is being exploited?",
   "o": [
    "SQL injection",
    "Cross-site scripting",
    "Directory traversal",
    "Buffer overflow"
   ],
   "a": 3,
   "e": "A buffer overflow occurs when input exceeds a buffer's bounds and overwrites adjacent memory, potentially hijacking control flow. Cross-site scripting, SQL injection, and directory traversal target the browser, database, and file paths respectively.",
   "d": 2
  },
  {
   "id": 391,
   "t": "memory-injections",
   "x": "Malware forces an already running, trusted process to load a rogue library supplied by the attacker, so the hostile code executes within that process's context and permissions. Which technique is this?",
   "o": [
    "Session hijacking",
    "DLL injection",
    "Cross-site request forgery",
    "SQL injection"
   ],
   "a": 1,
   "e": "DLL injection loads an attacker's library into a legitimate process so the malicious code inherits that process's trust and privileges. SQL injection, request forgery, and session hijacking operate on databases, web actions, and active sessions instead.",
   "d": 2
  },
  {
   "id": 392,
   "t": "memory-injections",
   "x": "A development team wants to make memory-corruption exploits harder by randomizing where a program's code and data are placed in memory each time it runs. Which protection provides this?",
   "o": [
    "Certificate pinning",
    "Full-disk encryption",
    "Address space layout randomization",
    "Data loss prevention"
   ],
   "a": 2,
   "e": "Address space layout randomization shuffles memory locations so attackers cannot reliably predict the addresses their exploit depends on. Data loss prevention, disk encryption, and certificate pinning address exfiltration, storage, and TLS trust.",
   "d": 2
  },
  {
   "id": 393,
   "t": "misconfiguration-vulnerabilities",
   "x": "A company stores customer records in a cloud object-storage bucket that was accidentally left open to public read access, and search engines begin indexing the files. Which category of vulnerability caused this exposure?",
   "o": [
    "A zero-day exploit in the storage service",
    "An insider deliberately leaking data",
    "A misconfiguration of access permissions",
    "A cryptographic downgrade attack"
   ],
   "a": 2,
   "e": "Leaving storage publicly readable by mistake is a misconfiguration, one of the most common causes of cloud data exposure. There is no unknown flaw, deliberate insider, or cipher weakness involved in this accidental setting.",
   "d": 2
  },
  {
   "id": 394,
   "t": "misconfiguration-vulnerabilities",
   "x": "A hardening review finds several servers still running legacy management services that no one uses but that remain enabled and reachable on the network. Which action most directly reduces this misconfiguration risk?",
   "o": [
    "Add extra memory so the legacy services respond faster",
    "Shorten the screen-lock timeout on all of the servers",
    "Rename the built-in administrator account on each server",
    "Disable and remove the unused services from the servers"
   ],
   "a": 3,
   "e": "Turning off and removing services that are not needed eliminates unnecessary entry points, directly reducing the attack surface. Adding memory, renaming an account, or adjusting screen locks does not address the exposed services.",
   "d": 2
  },
  {
   "id": 395,
   "t": "mitigation-techniques",
   "x": "After a breach spread sideways across a flat network, the security team wants to limit how far a future intrusion could travel between departments. Which mitigation technique addresses this most directly?",
   "o": [
    "Longer user passwords",
    "More verbose logging",
    "Network segmentation",
    "Additional server memory"
   ],
   "a": 2,
   "e": "Segmentation divides the network into isolated zones so a compromise in one area cannot freely reach others, containing lateral movement. Passwords, logging, and hardware capacity do not by themselves stop movement between segments.",
   "d": 2
  },
  {
   "id": 396,
   "t": "mitigation-techniques",
   "x": "A review finds that many staff hold administrative rights they never actually use in their daily work. Which principle should guide trimming these permissions down to only what each role truly needs?",
   "o": [
    "Least privilege",
    "Implicit trust",
    "Security through obscurity",
    "Defense in depth"
   ],
   "a": 0,
   "e": "Least privilege grants each user only the access their role requires, reducing what an attacker gains from a compromised account. Defense in depth layers controls, implicit trust is the opposite goal, and obscurity is not access control.",
   "d": 2
  },
  {
   "id": 397,
   "t": "mitigation-techniques",
   "x": "An organization keeps being compromised through vulnerabilities for which the vendor released fixes months earlier. Which mitigation technique most directly closes these known holes?",
   "o": [
    "Deploying additional decoy honeypot systems on the network",
    "Rotating the office wireless passphrase every single month",
    "Lengthening the user session timeout values in the app",
    "Applying vendor patches promptly through patch management"
   ],
   "a": 3,
   "e": "Timely patch management removes the very vulnerabilities attackers are exploiting once fixes exist. Honeypots, session timeouts, and Wi-Fi passphrase rotation do not remediate the unpatched software flaws.",
   "d": 2
  },
  {
   "id": 398,
   "t": "mobile-device-vulnerabilities",
   "x": "A user installs an application from a third-party website instead of the official app store, bypassing the store's review process. Which mobile risk does this practice introduce?",
   "o": [
    "Sideloading automatically encrypts all of the device's storage",
    "Sideloading enrolls the phone in corporate device management",
    "Sideloaded apps skip store vetting and may carry hidden malware",
    "Sideloading permanently disables the device's cellular radio"
   ],
   "a": 2,
   "e": "Sideloading avoids the app store's malware screening, so a malicious app can reach the device unchecked. The other options describe effects that sideloading does not produce.",
   "d": 2
  },
  {
   "id": 399,
   "t": "mobile-device-vulnerabilities",
   "x": "An organization adopts a bring-your-own-device policy and wants to protect corporate data on employees' personal phones without erasing their personal content. Which two capabilities best support this goal? Choose TWO.",
   "o": [
    "Requiring each device to be rooted before enrollment",
    "Selective wipe that clears only the corporate container",
    "Sharing a single passcode across all managed devices",
    "Disabling the camera on every enrolled device",
    "Containerization that separates corporate data from personal data"
   ],
   "a": 1,
   "e": "Containerization keeps corporate data in a managed space, and selective wipe removes only that space, protecting company data without touching personal content. Disabling cameras, requiring rooting, or sharing passcodes would harm usability or security.",
   "d": 2,
   "as": [
    1,
    4
   ]
  },
  {
   "id": 400,
   "t": "on-path-attacks",
   "x": "A user connects to an online banking site, but an attacker positioned between the client and server forces the connection to fall back to unencrypted HTTP and captures the submitted password. Which technique did the attacker use?",
   "o": [
    "Cross-site scripting",
    "Password spraying",
    "SSL stripping",
    "DNS poisoning"
   ],
   "a": 2,
   "e": "SSL stripping downgrades an HTTPS session to plaintext HTTP so an on-path attacker can read data such as credentials. DNS poisoning redirects name lookups but does not by itself strip encryption from an active session.",
   "d": 2
  },
  {
   "id": 401,
   "t": "on-path-attacks",
   "x": "A security team wants to ensure that even if an attacker manages to sit between browsers and the company web portal, intercepted traffic cannot be silently downgraded or read. Which measure most directly achieves this?",
   "o": [
    "Rotate the wireless preshared key weekly",
    "Increase the DHCP lease time on the LAN",
    "Enforce HSTS so browsers require HTTPS",
    "Disable ICMP echo replies at the firewall"
   ],
   "a": 2,
   "e": "HSTS forces browsers to use HTTPS and reject downgraded or invalid-certificate connections, so on-path interception yields only encrypted data. Blocking ICMP or changing DHCP leases does nothing to protect the confidentiality of web sessions.",
   "d": 2
  },
  {
   "id": 402,
   "t": "operating-system-vulnerabilities",
   "x": "A legacy server runs an operating system that the vendor stopped supporting two years ago, so no new security updates are released for it, yet a business application still requires it. Which action best reduces the risk it poses?",
   "o": [
    "Raise the account lockout threshold on the server",
    "Install a second antivirus engine alongside the first",
    "Isolate it on a restricted network segment",
    "Enable automatic updates from the vendor's servers"
   ],
   "a": 2,
   "e": "An end-of-life operating system receives no patches, so isolating it and limiting its exposure contains the risk until it can be replaced. Automatic updates cannot help because the vendor no longer publishes fixes for that version.",
   "d": 2
  },
  {
   "id": 403,
   "t": "operating-system-vulnerabilities",
   "x": "During a hardening review, an analyst is deciding which steps genuinely shrink a file server's operating system attack surface. Which TWO actions directly support that goal? Choose TWO.",
   "o": [
    "Disable services the role does not need",
    "Extend the DHCP lease duration",
    "Increase the monitor's screen brightness",
    "Add more RAM to the server",
    "Remove unused default user accounts"
   ],
   "a": 0,
   "e": "Disabling unneeded services and removing unused default accounts each eliminate potential entry points, shrinking the attack surface. Adding RAM or changing DHCP leases does not remove any exposed functionality an attacker could target.",
   "d": 2,
   "as": [
    0,
    4
   ]
  },
  {
   "id": 404,
   "t": "operating-system-vulnerabilities",
   "x": "A patch that closes a serious operating system flaw is available, but the administrator first applies it to a small group of nonproduction machines and monitors them before a fleet-wide rollout. What is the main purpose of this step?",
   "o": [
    "To catch stability or compatibility problems before wide rollout",
    "To let attackers reveal whether the flaw is real",
    "To satisfy a regulatory requirement to delay all patches by 30 days",
    "To reduce the size of the patch download for other hosts"
   ],
   "a": 0,
   "e": "Testing patches in a controlled group catches stability or application-compatibility problems before they affect the whole fleet. Deliberately delaying patches to observe attackers would leave systems exposed and is not the purpose of a staged rollout.",
   "d": 2
  },
  {
   "id": 405,
   "t": "other-social-engineering-attacks",
   "x": "An employee intends to visit a well-known shipping company's website but mistypes the address by one letter and lands on a near-identical page that harvests login details. An attacker registered that misspelled domain on purpose. Which technique is this?",
   "o": [
    "Rainbow table attack",
    "Session hijacking",
    "Privilege escalation",
    "Typosquatting"
   ],
   "a": 3,
   "e": "Typosquatting registers domains that resemble legitimate ones with common misspellings to catch users who mistype a URL. Session hijacking steals an active session token and does not rely on look-alike domain names.",
   "d": 2
  },
  {
   "id": 406,
   "t": "other-social-engineering-attacks",
   "x": "A finance clerk receives an urgent email that appears to come from the chief executive, written in the executive's usual style, asking for an immediate wire transfer to a new vendor. No malicious link or attachment is present. Which attack does this best describe?",
   "o": [
    "Business email compromise",
    "Watering hole attack",
    "SQL injection",
    "Bluesnarfing"
   ],
   "a": 0,
   "e": "Business email compromise impersonates a trusted executive or partner to trick staff into transferring funds, often with no malware at all. A watering hole attack instead poisons a website the target frequents, which is not what happened here.",
   "d": 2
  },
  {
   "id": 407,
   "t": "physical-attacks",
   "x": "An intruder cuts the cooling supply to a data center, hoping the resulting overheating will force servers to shut down and disrupt operations. Which category of physical attack does this represent?",
   "o": [
    "Credential harvesting",
    "Deauthentication attack",
    "Environmental attack",
    "Directory traversal"
   ],
   "a": 2,
   "e": "Environmental attacks target the surroundings that keep equipment running, such as power and cooling, to cause outages. Deauthentication targets wireless clients and does not involve tampering with facility infrastructure.",
   "d": 2
  },
  {
   "id": 408,
   "t": "physical-attacks",
   "x": "After someone tried to ram open a secured server-room door overnight, a facilities team debates which measures actually resist forced physical entry. Which TWO measures most directly help? Choose TWO.",
   "o": [
    "Deploy a stricter email spam filter",
    "Install a reinforced door and deadbolt",
    "Increase the minimum password length",
    "Use tamper-resistant hinges",
    "Schedule more frequent vulnerability scans"
   ],
   "a": 1,
   "e": "Reinforced doors and tamper-resistant hinges strengthen the physical barrier against someone forcing entry. Password length, spam filtering, and scanning are logical controls that do nothing to stop a physical break-in.",
   "d": 2,
   "as": [
    1,
    3
   ]
  },
  {
   "id": 409,
   "t": "race-conditions",
   "x": "An online store lets a shopper apply a single-use promo code. By submitting dozens of checkout requests in the same instant, a customer gets the discount counted many times before the system marks the code as used. Which type of flaw is being exploited?",
   "o": [
    "Cross-site request forgery",
    "A logic bomb",
    "A race condition",
    "A buffer overflow"
   ],
   "a": 2,
   "e": "The exploit depends on timing: many requests act on the code before any of them records it as consumed, which is a race condition. A buffer overflow overruns memory boundaries and is unrelated to concurrent request timing.",
   "d": 2
  },
  {
   "id": 410,
   "t": "race-conditions",
   "x": "A developer must ensure that when many threads update the same shared counter at once, the value cannot be corrupted by overlapping operations. Which technique most directly prevents this class of concurrency flaw?",
   "o": [
    "Use locking so one thread writes at a time",
    "Increase the size of the counter variable",
    "Run the program with lower CPU priority",
    "Store the counter in a longer-named variable"
   ],
   "a": 0,
   "e": "Locking or other synchronization serializes access so overlapping updates cannot interleave and corrupt the shared value. Enlarging or renaming the variable does nothing to coordinate simultaneous access.",
   "d": 2
  },
  {
   "id": 411,
   "t": "replay-attacks",
   "x": "Which characteristic of a captured network message makes it usable in a replay attack?",
   "o": [
    "It stays valid later with nothing tying it to one use",
    "It automatically expires within one second of capture",
    "It carries a fresh nonce that changes on every send",
    "It is encrypted with a frequently rotating session key"
   ],
   "a": 0,
   "e": "Replay works when a captured message stays acceptable later, which happens when it has no nonce, timestamp, or sequence number binding it to a single use. Messages carrying fresh nonces or short expirations cannot be successfully resubmitted.",
   "d": 2
  },
  {
   "id": 412,
   "t": "replay-attacks",
   "x": "An attacker extracts a password hash from a compromised workstation's memory and presents that hash to authenticate to other servers without ever cracking the plaintext password. Which attack, a form of replay, is this?",
   "o": [
    "Dictionary attack",
    "ARP poisoning",
    "Pass-the-hash",
    "Cross-site scripting"
   ],
   "a": 2,
   "e": "Pass-the-hash reuses a captured credential hash to authenticate as the user, replaying stored material rather than recovering the password. A dictionary attack instead guesses plaintext passwords and does not reuse a captured hash.",
   "d": 2
  },
  {
   "id": 413,
   "t": "segmentation-and-access-control",
   "x": "A company wants visitors' Wi-Fi devices to reach the internet but never to see internal file servers or printers. Which approach best enforces this separation on the existing network?",
   "o": [
    "Ask guests to sign an acceptable use policy",
    "Put guest traffic on a separate VLAN with blocking ACLs",
    "Assign guests static IP addresses in the server subnet",
    "Shorten the DHCP lease time for guest devices"
   ],
   "a": 1,
   "e": "A dedicated guest VLAN with access control lists keeps visitor devices from routing to internal resources while still allowing internet access. A signed policy or shorter lease does not technically prevent guest devices from reaching internal servers.",
   "d": 2
  },
  {
   "id": 414,
   "t": "segmentation-and-access-control",
   "x": "An administrator configures each employee's account so it can reach only the systems and data required for that person's specific job duties, and nothing more. Which access control principle is being applied?",
   "o": [
    "Least privilege",
    "Security through obscurity",
    "Implicit permit",
    "Separation of duties"
   ],
   "a": 0,
   "e": "Least privilege grants each user only the access their role requires, limiting the damage from a compromised account. Separation of duties splits a sensitive task among multiple people and is a different principle.",
   "d": 2
  },
  {
   "id": 415,
   "t": "segmentation-and-access-control",
   "x": "A firewall administrator ends every access control list with a rule that blocks any traffic not explicitly permitted by an earlier entry. What is the purpose of this final rule?",
   "o": [
    "To log the source port of every allowed session",
    "To translate internal addresses to public ones",
    "To speed up processing of allowed packets",
    "To drop any traffic not explicitly permitted"
   ],
   "a": 3,
   "e": "A closing deny-all rule ensures anything not specifically allowed is dropped, enforcing a default-deny posture. It does not perform address translation or accelerate processing of permitted traffic.",
   "d": 2
  },
  {
   "id": 416,
   "t": "spyware-and-bloatware",
   "x": "A user reports that shortly after installing a free screensaver, an unseen program began recording every keystroke, including passwords, and sending them to an external server. Which type of malware is this?",
   "o": [
    "Ransomware",
    "A rootkit bootloader",
    "Spyware",
    "A denial-of-service tool"
   ],
   "a": 2,
   "e": "Software that secretly records activity such as keystrokes and exfiltrates it is spyware. Ransomware instead encrypts files and demands payment, which does not match the described behavior.",
   "d": 2
  },
  {
   "id": 417,
   "t": "spyware-and-bloatware",
   "x": "Before issuing new laptops, an IT team wipes the manufacturer's preinstalled trial programs and utilities and applies a clean corporate image. Which problem does removing that preinstalled software primarily address?",
   "o": [
    "A misconfigured default gateway",
    "An expired TLS certificate on the mail server",
    "Weak wireless encryption on the access point",
    "Bloatware that wastes resources and adds risk"
   ],
   "a": 3,
   "e": "Manufacturer-added bloatware consumes resources and can introduce vulnerabilities, so replacing it with a clean image reduces that risk. Bloatware has nothing to do with gateway settings or the mail server's certificate.",
   "d": 2
  },
  {
   "id": 418,
   "t": "sql-injection",
   "x": "An attacker appends a crafted UNION SELECT statement to a vulnerable search field, and the application returns rows from the customer credentials table. What was the attacker's objective in this SQL injection?",
   "o": [
    "Reading data from tables it should not access",
    "Encrypting the database files to demand ransom",
    "Overloading the web server's memory",
    "Spoofing the server's MAC address"
   ],
   "a": 0,
   "e": "A UNION-based injection appends attacker-controlled queries to retrieve data the application never intended to expose, such as credentials. It is not a memory-exhaustion or encryption attack, and it does not alter hardware addresses.",
   "d": 2
  },
  {
   "id": 419,
   "t": "sql-injection",
   "x": "Beyond using parameterized queries, a team wants to limit the damage if a SQL injection ever succeeds against their application. Which additional measure best supports that goal?",
   "o": [
    "Run the app's database account with least privilege",
    "Give the application account full database administrator rights",
    "Store the database password in the page source",
    "Disable transport encryption to the database"
   ],
   "a": 0,
   "e": "A least-privilege database account limits what an injection can read or change even if one slips through. Granting the account administrator rights would instead maximize the damage a successful injection could cause.",
   "d": 2
  },
  {
   "id": 420,
   "t": "supply-chain-vulnerabilities",
   "x": "A manufacturer discovers that networking gear bought through an unauthorized reseller contains an unexpected chip that was not part of the original design. Which supply chain risk does this illustrate?",
   "o": [
    "An expired maintenance contract",
    "A brute-force attack on the device password",
    "A phishing campaign against procurement staff",
    "Hardware tampering introduced before delivery"
   ],
   "a": 3,
   "e": "An implant or unexpected component added before the equipment reaches the buyer is a hardware supply chain compromise. Phishing and password guessing are attacks on people or credentials, not tampering within the supply chain.",
   "d": 2
  },
  {
   "id": 421,
   "t": "supply-chain-vulnerabilities",
   "x": "A development team is choosing controls to reduce the risk that third-party software components introduce vulnerabilities into their product. Which TWO practices best support that goal? Choose TWO.",
   "o": [
    "Share signing keys with every supplier",
    "Disable all logging on build servers",
    "Maintain a software bill of materials",
    "Check vendor signatures before installing",
    "Automatically trust any digitally labeled update"
   ],
   "a": 2,
   "e": "Verifying vendor signatures and maintaining a software bill of materials help confirm component integrity and quickly identify affected products when a library flaw is disclosed. Blindly trusting labeled updates or sharing signing keys would increase supply chain risk.",
   "d": 2,
   "as": [
    2,
    3
   ]
  },
  {
   "id": 422,
   "t": "virtualization-vulnerabilities",
   "x": "An audit of a virtualization platform finds dozens of forgotten virtual machines that nobody patches or monitors, several running outdated software. Which virtualization risk does this describe?",
   "o": [
    "Cross-site scripting",
    "VM escape",
    "VM sprawl",
    "Bluejacking"
   ],
   "a": 2,
   "e": "VM sprawl is the uncontrolled growth of virtual machines that go unmanaged and unpatched, expanding the attack surface. VM escape is a different risk in which code breaks out of a guest into the hypervisor.",
   "d": 2
  },
  {
   "id": 423,
   "t": "virtualization-vulnerabilities",
   "x": "On a shared host, one virtual machine is allowed to consume nearly all available CPU and memory, degrading performance for every other guest on the same hardware. Which control most directly prevents this?",
   "o": [
    "Rename the affected virtual machines",
    "Disable the host's serial console",
    "Increase the guest operating systems' password length",
    "Set resource limits and reservations per VM"
   ],
   "a": 3,
   "e": "Setting per-VM resource limits and reservations prevents a single guest from starving its neighbors of CPU and memory. Renaming machines or lengthening passwords does nothing to allocate host resources fairly.",
   "d": 2
  },
  {
   "id": 424,
   "t": "virtualization-vulnerabilities",
   "x": "A security review recommends that the hypervisor's web management console be reachable only from a dedicated administrative network rather than from the general corporate LAN. What is the primary benefit of this change?",
   "o": [
    "It increases the number of guests the host can run",
    "It limits who can reach a high-value control interface",
    "It removes the need to patch the guest operating systems",
    "It encrypts data at rest inside each virtual machine"
   ],
   "a": 1,
   "e": "The hypervisor console controls every guest, so restricting it to an isolated admin network limits who can attempt to reach it. This does not encrypt guest data or eliminate the need to patch the guests themselves.",
   "d": 2
  },
  {
   "id": 425,
   "t": "viruses-and-worms",
   "x": "A network administrator wants to explain why one piece of malware spread across the entire company overnight while another stayed contained. Which statement correctly distinguishes a worm from a virus?",
   "o": [
    "A worm requires a user to open an attachment, while a virus spreads with no interaction",
    "A worm encrypts data for ransom, while a virus only displays messages",
    "A worm self-replicates across networks on its own, while a virus needs a host file to be run",
    "A worm can only infect email servers, while a virus only infects databases"
   ],
   "a": 2,
   "e": "A worm propagates by itself across networks without needing a host program or user action, whereas a virus attaches to a file and activates only when that file is executed. Neither is limited to a single server type, and self-replication is the defining difference.",
   "d": 2
  },
  {
   "id": 426,
   "t": "viruses-and-worms",
   "x": "A finance employee enables editing on a spreadsheet emailed from an unknown sender, and embedded code immediately runs and infects the workstation. Which type of virus most likely executed?",
   "o": [
    "A network worm",
    "A boot sector virus",
    "A macro virus",
    "A hardware root of trust"
   ],
   "a": 2,
   "e": "A macro virus hides in a document's macro code and runs when the user enables content, matching the spreadsheet scenario. A boot sector virus instead infects the disk's startup area and loads before the operating system.",
   "d": 2
  },
  {
   "id": 427,
   "t": "watering-hole-attacks",
   "x": "Security analysts determine that a group of researchers were all infected after visiting a legitimate scientific journal website that had been secretly compromised to serve malware. Which attack strategy does this describe?",
   "o": [
    "A brute-force attack",
    "A denial-of-service attack",
    "A watering hole attack",
    "A password-spraying attack"
   ],
   "a": 2,
   "e": "Compromising a trusted site that a specific target group frequents, in order to infect those visitors, is a watering hole attack. A denial-of-service attack seeks to make a service unavailable rather than to infect selective visitors.",
   "d": 2
  },
  {
   "id": 428,
   "t": "watering-hole-attacks",
   "x": "Why do attackers often prefer a watering hole approach when targeting employees of a well-trained, security-aware organization?",
   "o": [
    "It works only against users who have disabled all browsers",
    "Victims already trust the legitimate site and rarely suspect it",
    "The site's owner will always share visitor logs with the attacker",
    "It guarantees domain administrator rights on the first visit"
   ],
   "a": 1,
   "e": "A watering hole exploits the trust users place in a familiar, legitimate website, bypassing the suspicion a direct phishing message might raise. It does not automatically grant administrative rights or depend on the site owner cooperating.",
   "d": 2
  },
  {
   "id": 429,
   "t": "watering-hole-attacks",
   "x": "An organization cannot control the security of an external industry forum its staff rely on daily. Which endpoint measure best limits the impact if that forum is turned into a watering hole?",
   "o": [
    "Disable the screen saver lock timeout",
    "Increase the office Wi-Fi transmit power",
    "Keep browsers and plug-ins patched and protected",
    "Lengthen the corporate account password minimum"
   ],
   "a": 2,
   "e": "Because the compromise typically exploits browser or plug-in flaws, keeping them patched with active endpoint protection reduces the chance a poisoned site can infect a device. Password length and Wi-Fi power have no bearing on drive-by browser exploitation.",
   "d": 2
  },
  {
   "id": 430,
   "t": "wireless-attacks",
   "x": "An attacker floods a wireless network with forged management frames that repeatedly disconnect clients from the access point, disrupting service and forcing devices to reconnect. Which attack is this?",
   "o": [
    "A deauthentication attack",
    "A SQL injection attack",
    "A pass-the-hash attack",
    "A directory traversal attack"
   ],
   "a": 0,
   "e": "Sending spoofed deauthentication management frames knocks clients off the access point, causing disruption and forcing reassociation. SQL injection and directory traversal target applications and file paths, not wireless client sessions.",
   "d": 2
  },
  {
   "id": 431,
   "t": "wireless-attacks",
   "x": "Employees report that the office wireless network becomes completely unusable whenever a particular device is switched on nearby, saturating the frequency with radio noise. Which type of wireless attack does this indicate?",
   "o": [
    "RF jamming",
    "Credential stuffing",
    "DNS tunneling",
    "Cross-site scripting"
   ],
   "a": 0,
   "e": "Flooding the wireless spectrum with interfering radio energy so legitimate signals cannot get through is RF jamming, a form of denial of service. Credential stuffing and DNS tunneling do not involve overwhelming the radio frequency itself.",
   "d": 2
  },
  {
   "id": 432,
   "t": "zero-day-vulnerabilities",
   "x": "A newly exploited flaw has no signature yet, and the security team is choosing defenses that stand a chance of catching the attack in progress. Which TWO approaches best help here? Choose TWO.",
   "o": [
    "Relying only on signature updates",
    "Waiting for the next quarterly patch cycle",
    "A defense-in-depth layered architecture",
    "Disabling all endpoint monitoring",
    "Behavior-based anomaly detection"
   ],
   "a": 2,
   "e": "Behavior-based detection and layered defenses can limit or catch novel activity even when no signature exists. Signature-only tools cannot recognize a threat that has no definition yet, so relying on them leaves a gap against zero-days.",
   "d": 2,
   "as": [
    2,
    4
   ]
  },
  {
   "id": 433,
   "t": "zero-day-vulnerabilities",
   "x": "A researcher privately reports a previously unknown software flaw to the vendor and agrees to withhold public details until a patch is released. What is the primary security benefit of this coordinated approach?",
   "o": [
    "It automatically compensates the researcher through a regulator",
    "It shrinks the window attackers have before a fix exists",
    "It removes the need for the vendor to test the patch",
    "It guarantees the flaw can never be rediscovered by others"
   ],
   "a": 1,
   "e": "Coordinated disclosure gives the vendor time to develop a fix before details become public, shrinking the exposure window for attackers. It cannot guarantee no one else independently finds the flaw, nor does it replace patch testing.",
   "d": 2
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
  },
  {
   "kind": "terminal",
   "t": "indicators-of-compromise",
   "title": "Hunt the Rogue Listener",
   "scen": "An EDR alert flagged unusual outbound traffic from a Linux build server. You have a shell on the host and need to work from open sockets down to the file on disk before the malware analysts can take it.",
   "host": "analyst@build01:~$ ",
   "tasks": [
    {
     "prompt": "List the TCP sockets the host is listening on, including the process that owns each one.",
     "accept": [
      "(?:sudo )?ss -(?=[tulpn]*l)(?=[tulpn]*p)[tulpn]{2,6}",
      "(?:sudo )?netstat -(?=[tulpn]*l)(?=[tulpn]*p)[tulpn]{2,6}",
      "(?:sudo )?lsof(?: -[a-zA-Z]+)* -i(?:TCP)?(?: -sTCP:LISTEN)?(?: -[a-zA-Z]+)*"
     ],
     "hint": "You need the listening sockets plus the owning process, not just the ports.",
     "output": "Netid State  Local Address:Port  Peer Address:Port  Process\ntcp   LISTEN 0.0.0.0:22          0.0.0.0:*          users:((\"sshd\",pid=812,fd=3))\ntcp   LISTEN 127.0.0.1:5432      0.0.0.0:*          users:((\"postgres\",pid=1043,fd=5))\ntcp   LISTEN 0.0.0.0:8080        0.0.0.0:*          users:((\"jenkins\",pid=2277,fd=11))\ntcp   LISTEN 0.0.0.0:4444        0.0.0.0:*          users:((\"updatesvc\",pid=8823,fd=4))"
    },
    {
     "prompt": "Show the currently established TCP connections and their remote peers, so the suspect listener's session can be traced.",
     "accept": [
      "(?:sudo )?ss -(?=[tanpu]*t)(?=[tanpu]*n)[tanpu]{2,5}(?: state established)?",
      "(?:sudo )?netstat -(?=[antpu]*n)(?=[antpu]*[at])[antpu]{2,5}",
      "(?:sudo )?(?:ss|netstat) -[a-z]{2,6} \\| grep -i (?:established|estab)"
     ],
     "output": "State Recv-Q Send-Q Local Address:Port  Peer Address:Port    Process\nESTAB 0      0      10.20.4.31:22       10.20.4.9:52210      users:((\"sshd\",pid=812,fd=4))\nESTAB 0      312    10.20.4.31:4444     203.0.113.66:51044   users:((\"updatesvc\",pid=8823,fd=5))\n(The updatesvc process is holding an open session to an external address.)"
    },
    {
     "prompt": "Reveal the on-disk path of the executable behind PID 8823.",
     "accept": [
      "(?:sudo )?ls -l[a-z]* /proc/8823/exe",
      "(?:sudo )?readlink(?: -f)? /proc/8823/exe",
      "(?:sudo )?lsof -p 8823",
      "(?:sudo )?stat /proc/8823/exe"
     ],
     "hint": "Every running process exposes a link to its own binary under /proc.",
     "output": "lrwxrwxrwx 1 root root 0 Jul 19 02:11 /proc/8823/exe -> /tmp/.cache/updatesvc"
    },
    {
     "prompt": "Generate a SHA-256 digest of /tmp/.cache/updatesvc so the sample can be submitted to threat intelligence.",
     "accept": [
      "(?:sudo )?sha256sum(?: -b)? /tmp/\\.cache/updatesvc",
      "(?:sudo )?shasum -a 256 /tmp/\\.cache/updatesvc",
      "(?:sudo )?openssl (?:dgst -sha256|sha256) /tmp/\\.cache/updatesvc"
     ],
     "output": "b41d5c8a9f0e2731cc60a4b8d9e17f3a5624c0be8871d4f2a93e6c1057bd42ff  /tmp/.cache/updatesvc"
    }
   ]
  },
  {
   "kind": "terminal",
   "t": "certificates",
   "title": "Inspect the Expiring Certificate",
   "scen": "Customers report a browser warning on the payments site. The certificate that the web tier is serving was exported to payments.pem, and the issuing intermediate is in intermediate.pem. Confirm the fault, then confirm the fix.",
   "host": "analyst@sec-ws:~$ ",
   "tasks": [
    {
     "prompt": "Print only the validity window of payments.pem, without dumping the whole certificate.",
     "accept": [
      "openssl x509 -in payments\\.pem -noout -dates",
      "openssl x509 -noout -dates -in payments\\.pem",
      "openssl x509 -noout -in payments\\.pem -dates",
      "openssl x509 -in payments\\.pem -noout -(?:startdate|enddate)",
      "openssl x509 -noout -(?:startdate|enddate) -in payments\\.pem"
     ],
     "hint": "x509 is the subcommand; suppress the encoded output and ask for the dates.",
     "output": "notBefore=Jul 18 09:15:00 2025 GMT\nnotAfter=Jul 18 09:15:00 2026 GMT"
    },
    {
     "prompt": "Decode the certificate in full so the subject, issuer, and the hostnames it covers can be read.",
     "accept": [
      "openssl x509 -in payments\\.pem -noout -text",
      "openssl x509 -in payments\\.pem -text -noout",
      "openssl x509 -noout -text -in payments\\.pem",
      "openssl x509 -text -noout -in payments\\.pem",
      "openssl x509 -in payments\\.pem -noout -ext subjectAltName",
      "openssl x509 -noout -ext subjectAltName -in payments\\.pem"
     ],
     "output": "        Issuer: C = US, O = Example Trust CA, CN = Example Trust TLS RSA CA G2\n        Subject: CN = payments.example.com\n        Signature Algorithm: sha256WithRSAEncryption\n        X509v3 Subject Alternative Name:\n            DNS:payments.example.com, DNS:pay.example.com"
    },
    {
     "prompt": "Have OpenSSL build and check the chain for payments.pem using intermediate.pem as the untrusted link.",
     "accept": [
      "openssl verify -untrusted [\\w./-]+ payments\\.pem",
      "openssl verify -CAfile [\\w./-]+ -untrusted [\\w./-]+ payments\\.pem",
      "openssl verify -untrusted [\\w./-]+ -CAfile [\\w./-]+ payments\\.pem"
     ],
     "output": "C = US, O = Example Trust CA, CN = Example Trust TLS RSA CA G2\nerror 10 at 0 depth lookup: certificate has expired\nerror payments.pem: verification failed"
    },
    {
     "prompt": "The web team says they deployed the renewal. Open a TLS session to payments.example.com on port 443 to see what the server is actually presenting now.",
     "accept": [
      "openssl s_client -connect payments\\.example\\.com:443(?: -servername payments\\.example\\.com)?(?: -showcerts)?",
      "openssl s_client -showcerts -connect payments\\.example\\.com:443(?: -servername payments\\.example\\.com)?",
      "openssl s_client -servername payments\\.example\\.com -connect payments\\.example\\.com:443(?: -showcerts)?",
      "openssl s_client -connect payments\\.example\\.com:443 -showcerts -servername payments\\.example\\.com"
     ],
     "hint": "s_client is the OpenSSL TLS test client; point it at host:port.",
     "output": "CONNECTED(00000003)\ndepth=2 C = US, O = Example Trust CA, CN = Example Trust Root X1\n---\nServer certificate\nsubject=CN = payments.example.com\nissuer=C = US, O = Example Trust CA, CN = Example Trust TLS RSA CA G2\nnotAfter=Jul 17 09:15:00 2027 GMT\n---\nVerify return code: 0 (ok)"
    }
   ]
  },
  {
   "kind": "match",
   "t": "phishing",
   "title": "Name the Social Engineering Play",
   "scen": "Four separate tickets reached the security desk this week. Record the technique that best describes what happened in each one. Not all techniques will be used.",
   "choices": [
    "Vishing",
    "Smishing",
    "Watering hole attack",
    "Typosquatting",
    "Business email compromise",
    "Shoulder surfing",
    "Dumpster diving"
   ],
   "items": [
    {
     "l": "An accounts payable clerk takes a phone call from a caller claiming to be the bank's fraud desk and is walked through confirming a pending wire",
     "a": 0
    },
    {
     "l": "Staff receive an SMS with a shortened link warning that their payroll direct deposit was rejected and must be re-entered",
     "a": 1
    },
    {
     "l": "Attackers plant a browser exploit on a regional trade association site that the firm's engineers visit every morning",
     "a": 2
    },
    {
     "l": "A user mistypes the address of the company's SaaS portal by one character and lands on a pixel-perfect login page",
     "a": 3
    }
   ]
  },
  {
   "kind": "match",
   "t": "encryption-technologies",
   "title": "Pick the Cryptographic Tool",
   "scen": "An architect is annotating a design document with the cryptographic capability that satisfies each requirement. Not all capabilities will be used.",
   "choices": [
    "Digital signature",
    "Symmetric encryption",
    "Hashing",
    "Steganography",
    "Certificate pinning",
    "Perfect forward secrecy"
   ],
   "items": [
    {
     "l": "A field technician must be able to prove a firmware image really came from the manufacturer and has not been altered since it was published",
     "a": 0
    },
    {
     "l": "A web application must verify a returning user's password without ever holding a stored value that can be turned back into that password",
     "a": 2
    },
    {
     "l": "A 40 TB nightly archive must be written to tape fast enough to finish before morning, readable only by holders of a shared secret",
     "a": 1
    },
    {
     "l": "Recorded TLS sessions must stay unreadable even if the server's long-term private key is stolen two years from now",
     "a": 5
    }
   ]
  },
  {
   "kind": "order",
   "t": "risk-management",
   "title": "Work the Risk Register",
   "scen": "A new risk manager is writing the standard operating procedure for handling a newly identified risk. Arrange the activities in the order the procedure should follow.",
   "steps": [
    "Identify the risk and record it as an entry in the risk register",
    "Estimate the likelihood of occurrence and the impact if it occurs",
    "Combine those estimates into a risk score and rank the entry against the others",
    "Select the response for the ranked entry: avoid, transfer, mitigate, or accept",
    "Implement the chosen controls and assign a named risk owner",
    "Measure the residual risk that remains and set the next review date"
   ]
  },
  {
   "kind": "order",
   "t": "vulnerability-remediation",
   "title": "Close the Vulnerability Loop",
   "scen": "An organization is documenting how a single scanner finding travels from discovery through to closure. Put the activities in the order they should be performed.",
   "steps": [
    "Inventory the assets that fall within the assessment scope",
    "Run a credentialed scan against those in-scope hosts",
    "Validate each reported finding on the affected host to eliminate false positives",
    "Rank the confirmed findings by severity and business exposure",
    "Apply the patch or a compensating control through the change process",
    "Rescan the host to confirm the finding no longer reports, then report the metrics"
   ]
  },
  {
   "kind": "config",
   "t": "email-security",
   "title": "Set the Mail Gateway Straight",
   "scen": "A spoofed invoice claiming to come from the company's own domain reached three executives. The mail gateway has not been reviewed since it was migrated. Bring the domain authentication settings to the enforcing state the security team has signed off on.",
   "panel": "Secure Email Gateway · Domain Authentication",
   "fields": [
    {
     "id": "spf",
     "label": "Published SPF record",
     "type": "select",
     "options": [
      "No SPF record published",
      "v=spf1 include:_spf.example.net +all",
      "v=spf1 include:_spf.example.net ~all",
      "v=spf1 include:_spf.example.net -all"
     ],
     "answer": 3,
     "note": "Every legitimate sending source is now inventoried, and the team wants mail from anything else rejected outright rather than merely marked."
    },
    {
     "id": "dkim",
     "label": "Sign outbound mail with DKIM",
     "type": "toggle",
     "answer": true,
     "initial": false
    },
    {
     "id": "dmarc",
     "label": "DMARC policy (p=)",
     "type": "select",
     "options": [
      "No DMARC record",
      "none",
      "quarantine",
      "reject"
     ],
     "answer": 3,
     "note": "The monitoring-only rollout ran a full quarter and no legitimate sender failed alignment."
    },
    {
     "id": "relay",
     "label": "Relay messages from any source address",
     "type": "toggle",
     "answer": false,
     "initial": true
    },
    {
     "id": "banner",
     "label": "Prepend an external-sender warning to inbound mail",
     "type": "toggle",
     "answer": true,
     "initial": false
    },
    {
     "id": "rcpt",
     "label": "Reject inbound mail for unknown recipients",
     "type": "toggle",
     "answer": true,
     "initial": true,
     "note": "Already blocking directory harvest attempts; this one is configured correctly."
    },
    {
     "id": "siem",
     "label": "Forward message disposition logs to the SIEM",
     "type": "toggle",
     "answer": true,
     "initial": true
    }
   ]
  },
  {
   "kind": "hotspot",
   "t": "port-security",
   "title": "Stop the Wall-Jack Walk-In",
   "scen": "A visitor plugged a personal laptop into an unused conference-room wall jack and immediately reached internal file shares. The team is rolling out port-based network access control, and one device has to enforce it for that drop.",
   "prompt": "Select the ONE device that must act as the 802.1X authenticator for that wall jack.",
   "nodes": [
    {
     "id": "inet",
     "x": 8,
     "y": 10,
     "label": "Internet",
     "icon": "cloud"
    },
    {
     "id": "fw",
     "x": 26,
     "y": 10,
     "label": "Edge firewall",
     "icon": "firewall"
    },
    {
     "id": "core",
     "x": 46,
     "y": 10,
     "label": "Core switch",
     "icon": "switch"
    },
    {
     "id": "file",
     "x": 72,
     "y": 6,
     "label": "File server",
     "icon": "server"
    },
    {
     "id": "radius",
     "x": 72,
     "y": 24,
     "label": "RADIUS server",
     "icon": "server"
    },
    {
     "id": "acc",
     "x": 46,
     "y": 36,
     "label": "Conference access switch",
     "sub": "wall jacks",
     "icon": "switch"
    },
    {
     "id": "pc",
     "x": 22,
     "y": 50,
     "label": "Visitor laptop",
     "icon": "pc"
    },
    {
     "id": "ap",
     "x": 72,
     "y": 46,
     "label": "Guest Wi-Fi AP",
     "icon": "ap"
    }
   ],
   "edges": [
    [
     "inet",
     "fw"
    ],
    [
     "fw",
     "core"
    ],
    [
     "core",
     "file"
    ],
    [
     "core",
     "radius"
    ],
    [
     "core",
     "acc"
    ],
    [
     "acc",
     "pc"
    ],
    [
     "acc",
     "ap"
    ]
   ],
   "targets": [
    "acc"
   ]
  }
 ]
}
