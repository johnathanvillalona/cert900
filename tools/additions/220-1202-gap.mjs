// 220-1202 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "220-1202",
  questions: [
  {
    "t": "win-networking",
    "x": "A technician needs to join a workstation to the company's Active Directory domain. Which Windows edition supports being domain-joined?",
    "o": [
      "Windows 11 Pro",
      "Windows 11 Home",
      "Windows 10 Home",
      "Windows 11 Home in S mode"
    ],
    "a": 0,
    "e": "Only the Pro, Enterprise, and Education editions can join an Active Directory domain. Home editions can join a workgroup and use a Microsoft account but cannot be domain-joined."
  },
  {
    "t": "win-networking",
    "x": "A user needs to reach a shared folder named Reports on a server named FS01 by typing a UNC path. Which entry is correctly formatted?",
    "o": [
      "\\\\FS01\\Reports",
      "//FS01/Reports",
      "FS01:\\Reports",
      "http://FS01/Reports"
    ],
    "a": 0,
    "e": "A Universal Naming Convention path uses two leading backslashes, then the server name and share, such as \\\\FS01\\Reports. Forward slashes and drive-letter or URL formats do not address an SMB file share."
  },
  {
    "t": "ip-config",
    "x": "A workstation receives its address automatically and can ping websites by IP address but cannot open them by name in a browser. Which setting is most likely misconfigured?",
    "o": [
      "The DNS server address",
      "The default gateway",
      "The subnet mask",
      "The DHCP lease duration"
    ],
    "a": 0,
    "e": "Reaching hosts by IP but not by name points to name resolution, which DNS provides. A bad gateway or subnet mask would break IP connectivity itself, not just name lookups."
  },
  {
    "t": "ip-config",
    "x": "Which command causes a Windows client to request a fresh address lease from the DHCP server?",
    "o": [
      "ipconfig /renew",
      "ipconfig /flushdns",
      "ipconfig /displaydns",
      "ipconfig /all"
    ],
    "a": 0,
    "e": "ipconfig /renew requests a new lease from the DHCP server. The flushdns and displaydns switches manage the DNS resolver cache, and /all only displays configuration details."
  },
  {
    "t": "net-connections",
    "x": "An organization routes all outbound web traffic through a content-filtering server. Which Windows client setting directs the browser to send its requests through that server?",
    "o": [
      "Proxy settings",
      "VPN settings",
      "Metered connection",
      "Airplane mode"
    ],
    "a": 0,
    "e": "A proxy server sits between the client and the internet, so configuring the client's proxy settings routes web traffic through the filtering server. A VPN builds an encrypted tunnel but does not by itself force traffic through a filtering proxy."
  },
  {
    "t": "net-connections",
    "x": "A field technician's laptop has a built-in SIM slot and connects to the internet over a mobile carrier's network. Which connection type is this?",
    "o": [
      "WWAN",
      "WLAN",
      "Wired Ethernet",
      "Bluetooth tethering"
    ],
    "a": 0,
    "e": "A wireless wide area network connection uses cellular carrier data, typical of laptops with an embedded SIM or cellular modem. WLAN is local Wi-Fi and does not use the carrier's mobile network."
  },
  {
    "t": "macos-overview",
    "x": "Which macOS feature lets a user quickly search for files and apps and even perform quick calculations from a keyboard shortcut?",
    "o": [
      "Spotlight",
      "Mission Control",
      "The Finder sidebar",
      "The Dock"
    ],
    "a": 0,
    "e": "Spotlight opens a system-wide search field that finds files and apps and can evaluate calculations or conversions. Mission Control arranges open windows and spaces rather than searching."
  },
  {
    "t": "macos-overview",
    "x": "An application on a Mac has stopped responding and will not close normally. Which built-in option ends the frozen app?",
    "o": [
      "Force Quit",
      "Safe Boot",
      "SMC reset",
      "Recovery mode"
    ],
    "a": 0,
    "e": "Force Quit, reachable from the Apple menu or with Command-Option-Escape, terminates an unresponsive application. Safe Boot, an SMC reset, and Recovery are broader steps that require a restart."
  },
  {
    "t": "macos-prefs",
    "x": "Where does a Mac user go to download and install the latest macOS operating system updates?",
    "o": [
      "Software Update in System Settings",
      "The Purchased tab in the App Store",
      "Disk Utility",
      "The Time Machine menu"
    ],
    "a": 0,
    "e": "macOS updates are delivered through Software Update under System Settings. The App Store handles individual apps, while Disk Utility and Time Machine manage storage and backups."
  },
  {
    "t": "defender-av",
    "x": "When a registered security product from another vendor is actively running, how does Microsoft Defender behave by default?",
    "o": [
      "Its real-time scanning is turned off to prevent conflicts",
      "Both products scan every file at the same time",
      "Windows Security is removed from the system",
      "It restricts scans to browser downloads only"
    ],
    "a": 0,
    "e": "Windows automatically stands down Defender's real-time protection when another registered antivirus is active, avoiding two engines conflicting. Defender stays installed and can still run periodic scans."
  },
  {
    "t": "defender-av",
    "x": "Microsoft Defender flags a known-good internal utility as malware and quarantines it. How can the technician allow the file while keeping protection enabled?",
    "o": [
      "Add a Defender exclusion for the file",
      "Disable Defender entirely",
      "Uninstall Windows Security",
      "Turn off Windows Update"
    ],
    "a": 0,
    "e": "Adding an exclusion tells Defender to skip a trusted file or folder while real-time protection stays on for everything else. Disabling Defender would remove protection for the whole system."
  },
  {
    "t": "windows-firewall",
    "x": "A newly installed server application on a PC cannot receive connections from other computers, though its own outbound traffic works fine. Which Windows Firewall rule most likely needs to be created?",
    "o": [
      "An inbound rule allowing the application's port",
      "An outbound rule blocking the port",
      "A connection security rule",
      "A DNS forwarding rule"
    ],
    "a": 0,
    "e": "Incoming connections are governed by inbound rules, so allowing the app's listening port inbound lets other computers reach it. Outbound rules control traffic the PC initiates, which already works here."
  },
  {
    "t": "windows-firewall",
    "x": "Windows Firewall keeps a separate rule set depending on which network the computer is attached to. What are these categories called?",
    "o": [
      "Profiles for Domain, Private, and Public networks",
      "Zones for trusted and untrusted websites",
      "Scopes for local and remote subnets",
      "Tiers for home and office locations"
    ],
    "a": 0,
    "e": "Windows Firewall applies profiles named Domain, Private, and Public, each with its own rules based on the current network's classification. Zones, scopes, and tiers are terms from other tools, not firewall profiles."
  },
  {
    "t": "auth-methods",
    "x": "Signing in to a service requires both a password and a one-time code from an authenticator app. Which authentication concept does this represent?",
    "o": [
      "Multifactor authentication",
      "Single sign-on",
      "Mutual authentication",
      "Federated identity"
    ],
    "a": 0,
    "e": "Combining two different factor types, a known password and a possessed authenticator code, is multifactor authentication. Single sign-on instead lets one login grant access to many systems."
  },
  {
    "t": "auth-methods",
    "x": "Which options are examples of the \"something you have\" authentication factor? Choose TWO.",
    "o": [
      "A hardware security token",
      "A smart card",
      "A fingerprint scan",
      "A memorized PIN",
      "A security question answer"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A hardware token and a smart card are physical items the user possesses, satisfying the \"something you have\" factor. A fingerprint is \"something you are,\" and a PIN or security answer is \"something you know.\""
  },
  {
    "t": "dos",
    "x": "Which statements describe characteristics of a distributed denial-of-service attack? Choose TWO.",
    "o": [
      "Traffic originates from many distributed compromised hosts",
      "The goal is to exhaust resources and deny availability",
      "It encrypts the victim's files and demands a ransom",
      "It silently harvests stored account credentials",
      "It requires physical access to the server console"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A DDoS uses many compromised hosts to flood a target and exhaust its resources so legitimate users are denied service. Encrypting files for ransom and credential theft describe other attack types, not a DDoS."
  },
  {
    "t": "dos",
    "x": "Which measure best helps an organization absorb and filter a large volumetric DDoS attack before it reaches the origin server?",
    "o": [
      "A cloud-based traffic scrubbing service",
      "A single host-based firewall on the server",
      "A stronger administrator password",
      "Updated antivirus signatures"
    ],
    "a": 0,
    "e": "Cloud scrubbing services have the bandwidth to absorb and filter massive attack traffic upstream of the origin. A single host firewall would be overwhelmed by the same volume it is trying to block."
  },
  {
    "t": "dos",
    "x": "A public website is intermittently unreachable, and logs show a huge spike in half-open connection requests coming from many addresses. Which attack does this indicate?",
    "o": [
      "A denial-of-service attack",
      "A SQL injection attack",
      "A privilege escalation attack",
      "A phishing campaign"
    ],
    "a": 0,
    "e": "A flood of half-open connections that exhausts server resources and blocks legitimate users is a denial-of-service attack. SQL injection and privilege escalation target data and permissions, not raw availability."
  },
  {
    "t": "zero-day",
    "x": "Which statements accurately describe a zero-day vulnerability? Choose TWO.",
    "o": [
      "No vendor patch is available yet",
      "It can evade signature-based detection tools",
      "It only affects printer firmware",
      "It is caused solely by an expired certificate",
      "It requires the software vendor's written consent"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A zero-day is unknown to the vendor, so no patch exists and signature-based tools have nothing to match against. It is not limited to one device type and has nothing to do with certificates or vendor consent."
  },
  {
    "t": "zero-day",
    "x": "Why are signature-based antivirus tools often ineffective at stopping a zero-day exploit?",
    "o": [
      "No signature exists yet for a previously unknown threat",
      "They scan the disk far too frequently",
      "Zero-day exploits only target hardware",
      "Signatures block all encrypted traffic by default"
    ],
    "a": 0,
    "e": "Signature detection relies on a known pattern, and a zero-day is undiscovered, so no matching signature has been created. Behavior-based detection has a better chance against novel exploits."
  },
  {
    "t": "zero-day",
    "x": "A vendor releases an emergency fix for a flaw that attackers had been exploiting in the wild. Once the fix is applied, how is the flaw best described?",
    "o": [
      "A known vulnerability that the patch remediates",
      "A zero-day that can never be patched",
      "An insider threat",
      "A brute-force attack"
    ],
    "a": 0,
    "e": "Once the vendor is aware and has issued a patch, the flaw is a known, patchable vulnerability rather than a zero-day. The term zero-day applies only while the flaw is unknown and unpatched."
  },
  {
    "t": "insider",
    "x": "Which measures most directly help reduce the risk posed by insider threats? Choose TWO.",
    "o": [
      "Enforce the principle of least privilege",
      "Monitor activity with data loss prevention",
      "Extend the guest Wi-Fi coverage area",
      "Increase the display brightness on workstations",
      "Shorten the login warning banner text"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Least privilege limits what an insider can reach, and data loss prevention monitoring can detect and block unauthorized data movement. Wi-Fi range, brightness, and banner length have no bearing on insider risk."
  },
  {
    "t": "insider",
    "x": "An employee accidentally emails a spreadsheet of customer Social Security numbers to the wrong external recipient. This is an example of which kind of insider threat?",
    "o": [
      "An unintentional insider threat",
      "A zero-day exploit",
      "An on-path attack",
      "A brute-force attack"
    ],
    "a": 0,
    "e": "Not all insider threats are malicious; a well-meaning employee who exposes data by mistake is an unintentional insider threat. The other options describe external technical attacks, not accidental disclosure."
  },
  {
    "t": "insider",
    "x": "During the offboarding of a departing employee, which step most reduces insider-threat risk?",
    "o": [
      "Immediately disabling all their accounts and access",
      "Scheduling a friendly exit interview",
      "Collecting the employee's parking pass",
      "Announcing the departure to clients"
    ],
    "a": 0,
    "e": "Promptly revoking accounts and access removes the ability to misuse credentials after departure. The other steps are normal offboarding courtesies but do not address data or system access risk."
  },
  {
    "t": "sqli",
    "x": "If an attacker successfully performs SQL injection against a web application, what is a likely outcome?",
    "o": [
      "Reading or modifying data in the backend database",
      "Physically damaging the server's power supply",
      "Increasing the client monitor's refresh rate",
      "Reformatting the visitor's local hard drive"
    ],
    "a": 0,
    "e": "SQL injection manipulates database queries, so a successful attack can read, alter, or delete data in the backend database. It does not physically damage hardware or reformat client machines."
  },
  {
    "t": "sqli",
    "x": "SQL injection attacks are only possible against applications that handle user input in what way?",
    "o": [
      "They insert user input directly into database queries",
      "They run completely offline with no database at all",
      "They serve only static HTML pages",
      "They store all records on printed paper"
    ],
    "a": 0,
    "e": "Injection works when untrusted input is concatenated into a database query. Applications with no database, or ones using parameterized queries, are not exposed to this technique."
  },
  {
    "t": "xss",
    "x": "In a cross-site scripting attack, what is the primary target that ends up compromised?",
    "o": [
      "The web browsers of other users who load the page",
      "The database server's storage volumes",
      "The network router's firmware",
      "The local printer spooler service"
    ],
    "a": 0,
    "e": "XSS injects script that executes in the browsers of other visitors, letting the attacker steal session tokens or manipulate what those users see. The database and router are not the direct target of the injected script."
  },
  {
    "t": "xss",
    "x": "Which defensive technique most directly prevents cross-site scripting in a web application?",
    "o": [
      "Encoding and sanitizing user-supplied output",
      "Increasing the user session timeout",
      "Registering a longer domain name",
      "Enabling the screen saver sooner"
    ],
    "a": 0,
    "e": "Properly encoding and sanitizing untrusted input before it is rendered stops injected script from executing in visitors' browsers. Session timeouts and domain names do nothing to neutralize the injected code."
  },
  {
    "t": "xss",
    "x": "An attacker crafts a malicious link that runs script from a trusted but vulnerable site to steal the victim's session cookie when clicked. Which XSS variant is this?",
    "o": [
      "Reflected cross-site scripting",
      "Stored cross-site scripting",
      "A rainbow table attack",
      "A birthday attack"
    ],
    "a": 0,
    "e": "When the malicious script is delivered through a crafted request or link and echoed back immediately, it is reflected XSS. Stored XSS instead saves the script on the server to hit every later visitor."
  },
  {
    "t": "bec",
    "x": "Which practice best protects an organization against a business email compromise wire-transfer request?",
    "o": [
      "Verify the request through a separate trusted channel first",
      "Reply directly to the email to confirm the details",
      "Forward the email to the entire company",
      "Pay quickly to avoid any late fees"
    ],
    "a": 0,
    "e": "Confirming the request out-of-band, such as calling a known phone number, defeats a spoofed or hijacked email account. Replying to the same email only reaches the attacker who controls or spoofed it."
  },
  {
    "t": "bec",
    "x": "An email claiming to be from the CEO asks an HR manager to redirect the CEO's direct deposit to a new bank account. This targeted request is best classified as which attack?",
    "o": [
      "Business email compromise",
      "A distributed denial-of-service attack",
      "A watering-hole attack",
      "An evil-twin attack"
    ],
    "a": 0,
    "e": "Impersonating an executive over email to redirect payments or payroll is business email compromise. A watering-hole attack instead infects a website the target group frequently visits."
  },
  {
    "t": "bec",
    "x": "A supplier's email account is hijacked, and the attacker sends a legitimate-looking invoice to the customer with updated banking details. What category of attack is this?",
    "o": [
      "Business email compromise",
      "Cross-site scripting",
      "A zero-day exploit",
      "A brute-force attack"
    ],
    "a": 0,
    "e": "Taking over a trusted business account to send fraudulent payment instructions is a form of business email compromise. The other options are technical attacks unrelated to invoice fraud over email."
  },
  {
    "t": "supply-chain",
    "x": "A developer adds a widely used open-source library to an application, not realizing attackers had inserted malicious code into that library's public repository. Which risk does this best describe?",
    "o": [
      "A supply chain attack through a compromised software dependency",
      "A brute-force attack that guesses the application's login credentials",
      "An on-path attack that intercepts the developer's network traffic",
      "A denial-of-service attack aimed at the repository host"
    ],
    "a": 0,
    "e": "Trusting a third-party component that has been tampered with is a supply chain attack, because the threat enters through a dependency rather than the target directly. Brute force targets credentials, not a poisoned library."
  },
  {
    "t": "supply-chain",
    "x": "An organization buys network switches from an unauthorized reseller and later finds hidden firmware that sends data to an unknown external server. This scenario is an example of what?",
    "o": [
      "A hardware supply chain compromise from an untrusted source",
      "A rogue DHCP server distributing incorrect address leases",
      "An evil twin wireless access point set up near the office",
      "A misconfigured VLAN that leaks broadcast traffic between hosts"
    ],
    "a": 0,
    "e": "Tampered equipment introduced through an untrusted vendor is a supply chain compromise, since the malicious functionality arrives inside purchased hardware. A rogue DHCP server assigns addresses and does not describe pre-installed firmware."
  },
  {
    "t": "supply-chain",
    "x": "Which practice most directly lowers a company's exposure to supply chain attacks when acquiring new equipment and software?",
    "o": [
      "Buying only from authorized vendors and verifying signed updates",
      "Requiring longer and more complex passwords on all employee accounts",
      "Increasing how often full system image backups run",
      "Locking the screen automatically after five idle minutes"
    ],
    "a": 0,
    "e": "Vetting suppliers and validating digitally signed updates addresses the source of supply chain risk before tainted goods enter the environment. Longer passwords and backups are useful controls but do not confirm where hardware and software originate."
  },
  {
    "t": "communication",
    "x": "As a customer explains a recurring error, the technician repeatedly interrupts to guess the cause before the customer can finish. Which communication skill is the technician failing to use?",
    "o": [
      "Active listening while the customer finishes describing the problem",
      "Escalating the ticket to a senior support engineer right away",
      "Documenting the serial number printed on the affected device",
      "Restarting the computer immediately to clear the reported error"
    ],
    "a": 0,
    "e": "Active listening means hearing the customer out fully and avoiding interruptions so details are not missed. Escalating or restarting are actions, not the listening skill being overlooked here."
  },
  {
    "t": "communication",
    "x": "A technician cannot finish a printer repair on-site because a replacement part must be ordered. What best reflects professional customer communication?",
    "o": [
      "Explain the delay, give a realistic timeline, and follow up afterward",
      "Leave the site quietly and wait for the customer to call back later",
      "Tell the customer that the delay is entirely the vendor's fault",
      "Promise a same-day fix even though that outcome is unlikely"
    ],
    "a": 0,
    "e": "Setting and meeting expectations means communicating the delay honestly, offering a realistic timeline, and following up to confirm resolution. Blaming the vendor or promising an unlikely same-day fix breaks trust and sets false expectations."
  }
],
}
