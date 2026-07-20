// sy0-701 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "sy0-701",
  questions: [
  {
    "t": "authentication-authorization-and-accounting",
    "x": "A compliance auditor asks the network team to prove which administrator issued a specific configuration command on a core switch and at what time. Which part of the AAA framework produces that record?",
    "o": [
      "Accounting",
      "Authentication",
      "Authorization",
      "Attestation"
    ],
    "a": 0,
    "e": "Accounting is the AAA function that logs session details such as identity, timestamps, commands issued, and resources consumed, which is exactly what an auditor needs after the fact. Authentication is attractive because it also involves identity, but it only proves who someone is at login time and produces no ongoing activity trail."
  },
  {
    "t": "authentication-authorization-and-accounting",
    "x": "A contractor signs in successfully with her smart card and PIN, but the payroll share refuses to open any of its files for her. Which AAA function is preventing access?",
    "o": [
      "Authorization",
      "Authentication",
      "Accounting",
      "Identification"
    ],
    "a": 0,
    "e": "The sign-in succeeded, so the identity check already passed; what fails is the evaluation of what that verified identity is permitted to reach, which is authorization. Authentication is the common wrong pick here, but a failed authentication would have rejected the login itself rather than allowing it and then blocking a specific share."
  },
  {
    "t": "authentication-authorization-and-accounting",
    "x": "A manufacturing firm wants only company-owned laptops to join the plant wireless network, even when an employee types perfectly valid credentials on a personal tablet. What should be issued to each corporate laptop to enforce this?",
    "o": [
      "A device certificate",
      "A stronger passphrase",
      "A dedicated VLAN tag",
      "A longer DHCP lease"
    ],
    "a": 0,
    "e": "Systems are authenticated the same way people are, and a certificate installed on each managed laptop lets the network verify the machine itself before any user credential is considered. A stronger passphrase is tempting but it authenticates the person, not the hardware, so a valid password typed on a personal tablet would still get in."
  },
  {
    "t": "blockchain-technology",
    "x": "A logistics consortium keeps an identical shared ledger of shipment handoffs at every member company. Changing one older entry would immediately invalidate every entry recorded after it. Which design detail causes that cascade?",
    "o": [
      "Each block stores the hash of the previous block",
      "Each member encrypts entries with a shared secret",
      "Entries are compressed before being written to disk",
      "A central administrator signs off on every entry"
    ],
    "a": 0,
    "e": "Chaining each block to the digest of the one before it means editing any historical entry changes that block's hash and breaks the link for all later blocks, making tampering obvious to every participant. A shared secret sounds plausible but encryption protects confidentiality, not the ordering and immutability of the record."
  },
  {
    "t": "blockchain-technology",
    "x": "A university registrar is evaluating a distributed ledger for issued diplomas so that employers can confirm a credential is genuine without contacting the school. Which characteristic of the technology supports that goal?",
    "o": [
      "Public verifiability of an append-only record",
      "Guaranteed confidentiality of student grades",
      "Automatic deletion of outdated credentials",
      "Reduced storage requirements at every node"
    ],
    "a": 0,
    "e": "A distributed ledger lets any party independently validate that an entry exists and has not been altered, which removes the need to call the issuer for confirmation. Confidentiality is the wrong fit because the same openness that enables verification means the ledger is a poor place to hide private data."
  },
  {
    "t": "deception-and-disruption",
    "x": "A security team builds an isolated segment containing fake servers, workstations, and a router, all stocked with believable but worthless data, purely to watch how intruders move between them. What has the team created?",
    "o": [
      "A honeynet",
      "A screened subnet",
      "A sandbox",
      "A hot site"
    ],
    "a": 0,
    "e": "A honeynet is a whole network of decoy systems, which lets defenders study lateral movement rather than just a single point of contact. A screened subnet is the attractive miss: it also sits apart from the internal network, but it hosts real production services for legitimate users instead of bait."
  },
  {
    "t": "deception-and-disruption",
    "x": "A cloud engineer deliberately plants a fabricated set of API credentials in a public code repository and wires an alert to fire the instant anything attempts to use them. What is the planted item called?",
    "o": [
      "A honeytoken",
      "A digital watermark",
      "A DNS sinkhole",
      "A checksum seed"
    ],
    "a": 0,
    "e": "A honeytoken is fake data that has no legitimate purpose, so any use of it is by definition unauthorized and generates a high-confidence alert. A digital watermark is the closest distractor since both mark data, but a watermark is embedded in real content to trace its origin rather than existing solely as bait."
  },
  {
    "t": "encryption-technologies",
    "x": "A payment processor must generate and hold thousands of production private keys inside dedicated tamper-resistant hardware that can also offload signing operations at very high volume. Which solution fits this requirement?",
    "o": [
      "A hardware security module",
      "A trusted platform module",
      "A key escrow agreement",
      "A self-encrypting drive"
    ],
    "a": 0,
    "e": "A hardware security module is purpose-built for enterprise scale, storing large numbers of keys in tamper-resistant hardware and accelerating cryptographic operations for many servers at once. A trusted platform module is the tempting choice because it is also tamper-resistant silicon, but it serves a single host and is not designed for high-volume, multi-server key operations."
  },
  {
    "t": "encryption-technologies",
    "x": "A cloud architect needs one place where the security team can rotate, audit, and revoke the keys used by dozens of storage buckets and managed databases across several accounts. Which service should be adopted?",
    "o": [
      "A key management system",
      "A certificate revocation list",
      "A password vault for employees",
      "A federated identity provider"
    ],
    "a": 0,
    "e": "A key management system centralizes the entire lifecycle of cryptographic keys, including creation, rotation, auditing, and revocation across many services. A certificate revocation list is a plausible miss because it also deals with revocation, but it only publishes which certificates are no longer trusted and manages nothing about data encryption keys."
  },
  {
    "t": "encryption-technologies",
    "x": "A smartphone vendor isolates stored fingerprint templates inside a dedicated coprocessor that the main operating system cannot read from, even after the OS itself has been fully compromised. What is this protected area called?",
    "o": [
      "A secure enclave",
      "A virtual machine",
      "A recovery partition",
      "A signed bootloader"
    ],
    "a": 0,
    "e": "A secure enclave is an isolated processor and memory region that handles sensitive material and never exposes it to the main OS, so a compromised OS still cannot read the templates. A virtual machine is a reasonable guess about isolation, but it runs on top of the same hardware under a hypervisor and does not provide a hardware root of trust for biometric secrets."
  },
  {
    "t": "gap-analysis",
    "x": "A hospital measures its existing control set against the requirements it must satisfy before an accreditation review next quarter, then lists every deficiency and the effort needed to remediate each one. Which activity is being performed?",
    "o": [
      "Gap analysis",
      "Penetration test",
      "Business impact analysis",
      "Vulnerability scan"
    ],
    "a": 0,
    "e": "Gap analysis compares a current state against a defined target state and enumerates what is missing plus the work required to close the difference. A vulnerability scan is the attractive wrong answer because it also produces a findings list, but it reports technical weaknesses on hosts rather than measuring the organization against a required control baseline."
  },
  {
    "t": "gap-analysis",
    "x": "A retailer's board wants to know whether the company actually meets the security framework it publicly claims to follow. Which assessment answers that question most directly?",
    "o": [
      "A comparison of current practices against the framework's requirements",
      "A scan of internet-facing hosts for missing patches",
      "An interview-based estimate of likely breach costs",
      "A tabletop exercise walking through an incident"
    ],
    "a": 0,
    "e": "Answering a conformance question means holding today's practices side by side with the published requirements and documenting where they diverge. Estimating breach costs is a risk-analysis activity: it may inform priorities later, but it says nothing about whether the claimed framework is being met."
  },
  {
    "t": "key-exchange",
    "x": "Two servers that have never communicated before must establish a common symmetric session key across the public internet, and that key must never travel over the wire. Which approach makes this possible?",
    "o": [
      "Diffie-Hellman key agreement",
      "A pre-shared secret sent by courier",
      "An extended initialization vector",
      "A block cipher running in ECB mode"
    ],
    "a": 0,
    "e": "Diffie-Hellman lets both sides mathematically derive the same secret from exchanged public values, so the resulting session key is never transmitted and cannot be captured. A pre-shared secret delivered by courier does work but it is an out-of-band method that fails the requirement to bootstrap between parties with no prior relationship."
  },
  {
    "t": "key-exchange",
    "x": "An attacker quietly records months of encrypted traffic to a bank's website, betting on decrypting it later if the server's long-term private key is ever stolen. Which configuration defeats that plan?",
    "o": [
      "Generating a new session key per connection",
      "Increasing the certificate validity period",
      "Switching to a cipher with a longer block",
      "Storing the private key on the web server"
    ],
    "a": 0,
    "e": "Ephemeral session keys give perfect forward secrecy: each conversation uses a key that is discarded afterward, so compromising the server's long-term key later reveals nothing about the recorded sessions. A longer block size is a plausible-sounding strength upgrade, but it does not change the fact that a static key could still unlock every archived session."
  },
  {
    "t": "non-repudiation",
    "x": "A supplier insists it never submitted a large purchase order that the buyer's procurement system accepted and processed last week. Which control would let the buyer prove the submission genuinely came from that supplier and arrived unchanged?",
    "o": [
      "A digital signature on the order",
      "A shared account password",
      "A TLS connection to the portal",
      "A nightly database backup"
    ],
    "a": 0,
    "e": "A signature created with the supplier's private key can only have been produced by the holder of that key, and verifying it also confirms the order content was not modified, giving both proof of origin and proof of integrity. A TLS connection is tempting because it protects the order in transit, but it authenticates the server and encrypts the channel without binding the individual submission to a specific sender."
  },
  {
    "t": "non-repudiation",
    "x": "A law firm's document platform must produce evidence admissible in court showing exactly which partner approved a settlement and that the approval text was never altered afterward. Which security property is the platform delivering?",
    "o": [
      "Non-repudiation",
      "Confidentiality",
      "Fault tolerance",
      "Least privilege"
    ],
    "a": 0,
    "e": "Non-repudiation combines proof of origin with proof of integrity so the signer cannot credibly disown the action later. Confidentiality is the common confusion, but keeping the settlement secret from outsiders does nothing to establish who approved it or whether the wording changed."
  },
  {
    "t": "obfuscation",
    "x": "An insider walks a client list out of the company by hiding it inside the pixel data of vacation photos uploaded to a public gallery, and the images still open and display normally. Which technique is in use?",
    "o": [
      "Steganography",
      "Data masking",
      "Tokenization",
      "Salting"
    ],
    "a": 0,
    "e": "Steganography conceals information inside an ordinary-looking carrier file so that nothing about the image signals the presence of hidden data. Tokenization is a reasonable guess since it also disguises sensitive values, but it substitutes a placeholder for data that stays in a system of record rather than smuggling the original inside another file."
  },
  {
    "t": "obfuscation",
    "x": "A retailer allows its offshore support staff to view order histories, but every card value renders as X characters except the final four digits, directly in the same field. Which technique is this?",
    "o": [
      "Data masking",
      "Steganography",
      "Key stretching",
      "Certificate pinning"
    ],
    "a": 0,
    "e": "Data masking hides part of a value in place so staff retain just enough context to do their jobs while the full sensitive value is never displayed. Key stretching is unrelated: it repeatedly hashes a password to slow brute-force attacks and has nothing to do with limiting what a support agent can see on screen."
  },
  {
    "t": "technical-change-management",
    "x": "Immediately after a new inventory application is rolled out, endpoint protection quarantines its executable on every workstation and users cannot launch it. Which technical change must accompany the deployment?",
    "o": [
      "Adding the executable to the allow list",
      "Restarting the domain controllers nightly",
      "Rotating the service account passwords",
      "Increasing the local log retention period"
    ],
    "a": 0,
    "e": "Endpoint protection that permits only approved binaries will block anything unrecognized, so the new application's executable has to be added to the approved list as part of the change. Rotating service account passwords is a legitimate hygiene task but it does not affect whether the security agent will let an unknown binary run."
  },
  {
    "t": "technical-change-management",
    "x": "An administrator plans a database engine upgrade for Saturday night. Two reporting services and a public web front end connect to that instance and will error out while it is offline. What must the plan address before the maintenance window opens?",
    "o": [
      "The dependent services that rely on the instance",
      "The physical rack position of the server",
      "The vendor's marketing release notes",
      "The number of concurrent user licenses"
    ],
    "a": 0,
    "e": "Technical change management requires mapping every downstream system that consumes the component being changed so restart order, outage notices, and rollback timing can be planned. Concurrent license counts might matter for capacity planning but they have no bearing on which services break while the database is unavailable."
  },
  {
    "t": "buffer-overflows",
    "x": "A developer's C routine copies a network-supplied string into a fixed 64-byte stack array without ever checking the incoming length. Crafted traffic makes the program transfer execution to instructions the sender chose. Which coding flaw is being exploited?",
    "o": [
      "Memory leak",
      "Buffer overflow",
      "Integer overflow",
      "Null pointer dereference"
    ],
    "a": 1,
    "e": "Writing more data than the destination region can hold overwrites adjacent stack memory, including the saved return address, which is how the attacker redirects execution. A memory leak is wasted memory that is never released and degrades availability over time, but it does not give an attacker control of the instruction pointer."
  },
  {
    "t": "buffer-overflows",
    "x": "A security architect must make memory-corruption bugs harder to weaponize in legacy C++ services that cannot be rewritten this fiscal year. Which combination of compiler and operating system protections most directly frustrates reliable exploitation?",
    "o": [
      "Full disk encryption and secure boot",
      "Rate limiting and connection throttling",
      "Address space layout randomization and stack canaries",
      "Certificate pinning and mutual authentication"
    ],
    "a": 2,
    "e": "Randomizing where libraries and the stack load removes the predictable addresses an exploit needs, and canary values placed before the return address are checked on function exit so overwrites abort the process. Full disk encryption and secure boot protect data at rest and the boot chain; neither affects what happens inside a running process's memory."
  },
  {
    "t": "race-conditions",
    "x": "A banking application verifies an account balance, pauses briefly while a fraud service responds, and then completes the withdrawal. An attacker fires many simultaneous withdrawal requests and drains the account far past its limit. Which class of flaw made this possible?",
    "o": [
      "Cross-site request forgery",
      "Directory traversal",
      "Insecure deserialization",
      "Time-of-check to time-of-use flaw"
    ],
    "a": 3,
    "e": "The balance validated at check time is stale by the time each transaction commits, so concurrent requests all pass the same check. Cross-site request forgery tricks an authenticated browser into submitting an unwanted request, which is not what happens here because the attacker is submitting the requests directly and the defect is the gap between validation and use."
  },
  {
    "t": "race-conditions",
    "x": "A privileged installer creates a temporary file, then reopens it moments later to write configuration data. A local user exploits that interval by replacing the path with a symbolic link pointing at a system file. Which development practice best removes the opportunity?",
    "o": [
      "Perform the operation atomically with a file lock",
      "Encrypt the temporary file with a session key",
      "Log every write to the temporary file for review",
      "Increase the delay between opening and writing"
    ],
    "a": 0,
    "e": "Holding a lock and using atomic create-and-open semantics means the object validated is the same object written, closing the interval the attacker relies on. Encrypting the file protects confidentiality but the installer would still follow the swapped link and write to a location of the attacker's choosing."
  },
  {
    "t": "memory-injections",
    "x": "Endpoint telemetry shows a signed, legitimate Windows utility starting with an empty command line. A second, unrelated process then allocates executable memory inside that utility and writes shellcode into it before resuming its threads. Which technique does this describe?",
    "o": [
      "Replacing the utility's binary on disk with a trojanized copy",
      "Loading a rogue kernel driver to hide files from listings",
      "Injecting code into the address space of a running process",
      "Modifying the boot record so malware loads before startup"
    ],
    "a": 2,
    "e": "Placing hostile instructions inside a trusted process lets the payload inherit that process's reputation, signature, and network permissions while nothing malicious ever touches the file system. Swapping the binary on disk would leave a modified file that hashing and signature checks would flag, which is exactly what this technique is designed to avoid."
  },
  {
    "t": "malicious-updates",
    "x": "A network appliance vendor's build system is compromised, and the following firmware release contains a hidden backdoor that reaches every customer through the routine maintenance channel. Which customer-side control would most likely have surfaced the tampering before installation?",
    "o": [
      "Scheduling maintenance windows outside business hours",
      "Validating the digital signature on the firmware image",
      "Enabling automatic installation on every managed device",
      "Restricting the appliance to a management network"
    ],
    "a": 1,
    "e": "Checking the cryptographic signature and published hash before deployment is the control designed to prove that an image is the one the vendor actually produced. Automatic installation makes the situation worse by removing the human checkpoint entirely, pushing the tampered image out faster."
  },
  {
    "t": "replay-attacks",
    "x": "An attacker sitting on a guest wireless segment captures the exchange between a badge reader and its door controller, then later retransmits those identical frames byte for byte. The door opens. Which design change would have defeated this?",
    "o": [
      "Increase the shared secret length from 128 to 256 bits",
      "Move the controller onto a dedicated management network",
      "Include a nonce and timestamp in every authentication message",
      "Require badge holders to change their PIN every quarter"
    ],
    "a": 2,
    "e": "A value that is used once, combined with a freshness check, makes a captured message invalid the second time it appears, so recording and resending it accomplishes nothing. Lengthening the shared secret raises the cost of cracking the key but is irrelevant when the attacker never needs the key and simply resends valid ciphertext."
  },
  {
    "t": "replay-attacks",
    "x": "During an assessment, a consultant records a session identifier crossing an unencrypted internal link, submits that same identifier to the application several hours later, and is granted the original user's privileges. Which weakness in the session design allowed it?",
    "o": [
      "The identifier is stored in a browser cookie",
      "The identifier never expires and can be reused",
      "The identifier is drawn from a random source",
      "The identifier is longer than the standard requires"
    ],
    "a": 1,
    "e": "Without expiry or binding to a single use, a captured identifier remains a valid credential indefinitely, so anyone who observes it inherits the account. Storing session identifiers in cookies is normal practice and not itself the defect; the problem is that the value stayed valid long after the legitimate session should have ended."
  },
  {
    "t": "dns-attacks",
    "x": "Staff at one branch office reach a convincing but subtly wrong login page for their bank, while colleagues at headquarters reach the genuine site. The branch resolver holds an entry that disagrees with the authoritative zone data. What has happened?",
    "o": [
      "The registrar account for the bank was taken over",
      "The web server's certificate was revoked early",
      "The branch firewall is blocking outbound port 53",
      "The resolver cache was poisoned with a forged record"
    ],
    "a": 3,
    "e": "An injected false answer stored in the local cache sends every client using that resolver to an address the attacker controls, which explains why only one office is affected. A registrar takeover would misdirect users everywhere, not just at a single branch, because the change would propagate from the authoritative servers."
  },
  {
    "t": "dns-attacks",
    "x": "An automated notice confirms that the nameserver delegation for a company's public namespace was altered overnight, and mail begins flowing to unfamiliar hosts. Investigators confirm nothing inside the corporate perimeter was breached. Which risk does this illustrate?",
    "o": [
      "Hijacking of the domain through the registrar account",
      "Amplification of queries against an open resolver",
      "Exhaustion of the mail server's connection pool",
      "Interception of traffic on the local subnet"
    ],
    "a": 0,
    "e": "Control of the registrar account lets an adversary point the entire namespace at infrastructure they own without ever touching the victim's network, which is why internal forensics come back clean. Amplification abuses resolvers to flood a third party with traffic and would produce a volumetric outage, not a silent redirection of mail."
  },
  {
    "t": "wireless-attacks",
    "x": "Conference attendees associate with a radio broadcasting the hotel's familiar network name at a stronger signal than the genuine one, and their traffic is quietly proxied through a laptop in an adjacent room. Which attack is in progress?",
    "o": [
      "Bluetooth pairing abuse",
      "Signal jamming",
      "Evil twin",
      "Protocol downgrade"
    ],
    "a": 2,
    "e": "A rogue radio impersonating a trusted network name and out-competing it on signal strength pulls clients into associating with the attacker, who then sees everything they send. Jamming would deny service by making the band unusable rather than quietly relaying traffic, so users would notice the outage instead of browsing normally."
  },
  {
    "t": "wireless-attacks",
    "x": "A warehouse deploys handheld scanners that must validate each worker against the corporate directory. The security team specifically wants to prevent an adversary from harvesting one reusable key by capturing the association handshake. Which configuration best meets the goal?",
    "o": [
      "WPA2 Personal with a long passphrase",
      "Open authentication with a captive portal",
      "MAC address filtering with SSID suppression",
      "WPA3 Enterprise with 802.1X authentication"
    ],
    "a": 3,
    "e": "Per-user credentials validated through an authentication server mean there is no single shared key to capture, and each session derives independent keying material. A long passphrase raises cracking cost but every device still shares one secret, so a single captured handshake plus offline effort exposes the whole network."
  },
  {
    "t": "cryptographic-attacks",
    "x": "Researchers publish a method for producing two different documents that yield the same digest under a legacy hashing algorithm, allowing a signed approval form to be exchanged for an altered version. Which property of the algorithm has failed?",
    "o": [
      "Collision resistance",
      "Key length adequacy",
      "Forward secrecy",
      "Perfect randomness"
    ],
    "a": 0,
    "e": "The guarantee that two distinct inputs will not produce the same output is what lets a signature over a digest stand in for a signature over the document, and that guarantee is exactly what the researchers broke. Forward secrecy concerns whether past session traffic stays protected after a long-term key leaks, which has nothing to do with digest uniqueness."
  },
  {
    "t": "cryptographic-attacks",
    "x": "A load balancer still accepts a client request to fall back to an obsolete protocol version whenever the modern handshake fails, and an adversary abuses that behavior to force weak ciphers onto the connection. Which mitigation addresses the underlying problem?",
    "o": [
      "Rotate the server certificate more frequently",
      "Increase the session ticket lifetime",
      "Disable the outdated protocol versions on the server",
      "Enable client certificate authentication"
    ],
    "a": 2,
    "e": "If the weak versions are not offered at all, there is nothing to fall back to and the negotiation cannot be pushed downward. Rotating the certificate more often limits the damage from a stolen private key but leaves the negotiation logic untouched, so the same forced fallback still succeeds."
  },
  {
    "t": "application-attacks",
    "x": "A support portal assembles a file path from a user-supplied filename parameter. A tester submits a value containing several sequences of dot-dot-slash and receives the contents of a system configuration file well outside the web root. Which flaw is being exploited?",
    "o": [
      "Command injection",
      "Session fixation",
      "Privilege escalation",
      "Directory traversal"
    ],
    "a": 3,
    "e": "Relative path sequences let the request climb out of the intended folder and read arbitrary files the web process can access. Command injection would require the input to reach a shell and execute a separate program, but here the application is only resolving a path and returning file contents."
  },
  {
    "t": "application-attacks",
    "x": "An internal ticketing system passes a page parameter to a shell utility. When a tester appends a semicolon followed by a short system command, the HTTP response includes the service account's user identity. Which control best remediates the defect?",
    "o": [
      "Validate input against a strict allow list",
      "Compress responses before they leave the server",
      "Rotate the service account password monthly",
      "Add a rate limit to the ticketing endpoint"
    ],
    "a": 0,
    "e": "Accepting only values that match a known-good pattern, and invoking programs without a shell interpreter, prevents metacharacters from being treated as command separators. Rotating the service account password does not help because the attacker is executing commands as that account, not authenticating with its credentials."
  },
  {
    "t": "malicious-code",
    "x": "Reviewing an accounting workstation, an analyst finds a spreadsheet containing an embedded macro that decodes a long obfuscated string and hands it to a scripting host the moment the file is opened. Which description best characterizes this artifact?",
    "o": [
      "A legitimate add-in with a corrupted signature",
      "Hostile code delivered inside a document macro",
      "A misconfigured spreadsheet formula cache",
      "An unpatched defect in the spreadsheet application"
    ],
    "a": 1,
    "e": "Obfuscated content that automatically hands instructions to an interpreter on open is deliberate attacker tooling, not a functional business macro. An unpatched application defect would be a weakness the attacker exploits, whereas here the document itself carries the payload and no software flaw is required for it to run."
  },
  {
    "t": "viruses-and-worms",
    "x": "Within twenty minutes, a manufacturing plant sees the same malware appear on hundreds of unpatched hosts. Nobody opened an attachment, and the propagation clearly follows exposed file-sharing ports rather than any user action. Which malware type explains this?",
    "o": [
      "Logic bomb",
      "Worm",
      "File-infecting virus",
      "Potentially unwanted program"
    ],
    "a": 1,
    "e": "Self-propagating code that exploits a network service needs no human to carry it, which is why the spread is fast and follows open ports instead of mailboxes. A file-infecting virus requires someone to launch an infected executable, so it could not have covered hundreds of machines in minutes with no user involvement."
  },
  {
    "t": "viruses-and-worms",
    "x": "Malicious code appends itself to executable files sitting on a departmental shared drive and only becomes active when a colleague launches one of those programs on their own workstation. Which statement best describes what this code requires to spread?",
    "o": [
      "It needs an open listening port on the target",
      "It needs a host program and a user to run it",
      "It needs administrative rights on the source host",
      "It needs a command channel before it can activate"
    ],
    "a": 1,
    "e": "This category attaches to a carrier file and depends entirely on someone executing that carrier, which is the defining difference from self-replicating network code. An open listening port would matter for something that propagates over the network on its own, but this sample never initiates a connection to reach a new machine."
  },
  {
    "t": "spyware-and-bloatware",
    "x": "Laptops arriving from a supplier are preloaded with a trial security suite, three browser toolbars, and a vendor utility that consumes memory and resists removal through the normal uninstall path. What is the primary security concern with this software?",
    "o": [
      "It prevents the operating system from booting",
      "It disables the built-in firewall by default",
      "It expands the attack surface with unpatched code",
      "It encrypts user files without a recovery key"
    ],
    "a": 2,
    "e": "Preinstalled extras run with real privileges, are rarely covered by the patch process, and have repeatedly shipped with serious defects, so each one adds exploitable surface nobody is maintaining. It does not stop the system from booting; the machines work fine, which is precisely why the risk goes unnoticed."
  },
  {
    "t": "spyware-and-bloatware",
    "x": "A marketing employee installs a free video converter from a search advertisement. Afterward the browser homepage changes, searches are redirected through an unknown domain, and a background process reports visited addresses to a remote host. Which malware category fits?",
    "o": [
      "Ransomware",
      "Logic bomb",
      "Rootkit",
      "Spyware"
    ],
    "a": 3,
    "e": "Silently monitoring activity and shipping browsing details to a third party is surveillance for profit, bundled with software the user chose to install. Ransomware would announce itself by denying access to data and demanding payment, whereas this code depends on remaining unnoticed so collection continues."
  },
  {
    "t": "physical-attacks",
    "x": "While standing behind a contractor in a lunch line, an attacker holds a small handheld device near the contractor's proximity credential. Days later a duplicate is presented at the loading dock and access is granted. Which countermeasure most directly defeats this?",
    "o": [
      "Shielded badge sleeves and challenge-response cards",
      "Longer PIN codes on the keypad entry system",
      "More frequent password rotation for badge holders",
      "Additional lighting around the loading dock"
    ],
    "a": 0,
    "e": "Blocking the radio field prevents the credential from being read covertly, and cards that answer a cryptographic challenge cannot be duplicated from a captured identifier. Better lighting may deter loitering but does nothing about a read that happens elsewhere, in a public setting, with no visible sign of an attack."
  },
  {
    "t": "physical-attacks",
    "x": "A retail chain discovers that several unattended payment terminals have a thin overlay fitted to the reader slot and a pinhole camera aimed at the keypad. Which attack does this equipment support?",
    "o": [
      "Environmental sabotage",
      "Card skimming",
      "Brute-force entry",
      "Radio frequency jamming"
    ],
    "a": 1,
    "e": "The overlay harvests the magnetic stripe or chip data while the camera records the PIN, giving the attacker everything needed to reproduce transactions. Jamming would interfere with wireless signals to deny service, but this hardware is built to capture data quietly so the terminal keeps working normally."
  },
  {
    "t": "impersonation",
    "x": "A man in a high-visibility vest carrying a printed work order arrives unannounced at a data center loading bay, insists the chiller needs emergency service, and pressures the receptionist to badge him through. Which social engineering technique is central here?",
    "o": [
      "Shoulder surfing",
      "Dumpster diving",
      "Impersonation",
      "Credential stuffing"
    ],
    "a": 2,
    "e": "Assuming the identity of a trusted vendor, backed by props and urgency, is the entire mechanism by which access is obtained. Shoulder surfing is the covert observation of a screen or keypad and would follow only after the attacker was already inside, so it does not explain how entry was gained."
  },
  {
    "t": "watering-hole-attacks",
    "x": "A defense contractor has no authority over the security of a small trade association portal that its engineers visit daily, yet that portal is an obvious staging ground for an adversary who cannot phish them successfully. Which layered control best limits harm if the portal starts serving hostile content?",
    "o": [
      "Quarterly awareness training for the engineers",
      "A stricter outbound email filtering policy",
      "Browser isolation paired with endpoint detection",
      "Longer minimum password length for portal logins"
    ],
    "a": 2,
    "e": "Rendering untrusted sites away from the endpoint contains hostile content before it reaches the workstation, and behavioral detection catches what slips through, which is the right posture when the compromised resource is legitimate and trusted. Email filtering is aimed at the wrong channel because the delivery path here is ordinary web browsing to a site staff already trust."
  },
  {
    "t": "hardware-vulnerabilities",
    "x": "An asset inventory lists forty network switches that passed end of support two years ago, and the manufacturer has confirmed no further security firmware will ever be published for them. Which statement best captures the resulting exposure?",
    "o": [
      "Warranty claims will be denied by the vendor",
      "Newly found flaws will never be patched",
      "The switches will stop forwarding traffic soon",
      "Licensing costs will rise at the next renewal"
    ],
    "a": 1,
    "e": "Once a vendor stops issuing fixes, every future disclosure becomes a permanent exposure that can only be managed by isolation or replacement. Losing warranty coverage is a real business consequence but it is a support and cost issue, not the security condition that makes these devices dangerous to keep in production."
  },
  {
    "t": "virtualization-vulnerabilities",
    "x": "In a shared hosting cluster, a researcher demonstrates that code running inside one tenant's virtual machine can reach memory belonging to the underlying platform and to neighboring tenants. Which condition does this demonstrate?",
    "o": [
      "Exhaustion of the storage array cache",
      "Failure of a guest license validation check",
      "Escape to the hypervisor",
      "Saturation of the virtual switch uplink"
    ],
    "a": 2,
    "e": "Breaking out of the isolation boundary collapses the assumption that tenants cannot affect one another, making it among the most severe findings in any multi-tenant environment. Uplink saturation is a performance and availability concern that might slow neighbors down but never grants read access to their memory."
  },
  {
    "t": "cloud-specific-vulnerabilities",
    "x": "A researcher reports that a company's customer invoices are readable by anyone on the internet because the object storage container was left with public list and read permissions. Which issue does this represent?",
    "o": [
      "A misconfigured storage access policy",
      "A compromised encryption key escrow",
      "An expired service provider contract",
      "An overloaded content delivery network"
    ],
    "a": 0,
    "e": "Nothing was exploited; the permissions themselves granted the world access, which is the most common cause of cloud data exposure. A compromised key would imply the attacker defeated encryption to obtain plaintext, but here the data was simply served to anyone who requested it."
  },
  {
    "t": "cloud-specific-vulnerabilities",
    "x": "During onboarding, a platform team needs to settle who is accountable for patching guest operating systems on infrastructure-as-a-service instances versus who patches the physical hosts underneath them. Which concept answers that question?",
    "o": [
      "The zero trust architecture model",
      "The defense in depth model",
      "The shared responsibility model",
      "The least privilege model"
    ],
    "a": 2,
    "e": "This concept defines the boundary between what the provider secures and what the customer secures, and it shifts depending on the service tier being consumed. Defense in depth describes layering multiple controls to survive a single failure, which is good practice but says nothing about which party owns a given layer."
  },
  {
    "t": "misconfiguration-vulnerabilities",
    "x": "An internal audit uncovers a departmental file share where the everyone group holds full control, letting any authenticated staff member alter payroll spreadsheets. Which remediation addresses the root cause?",
    "o": [
      "Enable full disk encryption on the file server",
      "Apply least-privilege permissions to the share",
      "Move the share behind a reverse proxy",
      "Increase the audit log retention period"
    ],
    "a": 1,
    "e": "Granting each group only the access its role requires eliminates the over-permission that created the exposure. Full disk encryption protects the data if a drive is physically removed, but it is transparent to logged-in users, so every one of them would still be able to modify the payroll files."
  },
  {
    "t": "misconfiguration-vulnerabilities",
    "x": "A penetration tester reaches a printer's embedded web console using the login shown in the manufacturer's published manual, then pivots to documents held in the print spooler. Which weakness enabled that initial foothold?",
    "o": [
      "An unencrypted wireless link",
      "A missing intrusion prevention rule",
      "Unchanged factory credentials",
      "An expired device certificate"
    ],
    "a": 2,
    "e": "Values that ship identically on every unit are effectively public, so leaving them in place means the device has no authentication at all. A missing prevention rule might have detected or blocked follow-on activity, but the console login itself looked like an ordinary successful administrative sign-in."
  },
  {
    "t": "mobile-device-vulnerabilities",
    "x": "An executive's personal phone has been altered to strip the vendor's software restrictions so that applications from outside the official store can be installed. Why does the security team refuse to enroll it in the corporate mail system?",
    "o": [
      "The operating system sandbox no longer holds",
      "The battery will drain faster under policy",
      "The carrier will refuse to activate the SIM",
      "The screen resolution breaks mail rendering"
    ],
    "a": 0,
    "e": "Removing those restrictions dismantles the isolation that keeps one application from reading another's data, so any installed app could reach corporate mail and credentials. Battery consumption is an inconvenience with no bearing on whether company data stays confined to the approved application."
  },
  {
    "t": "mobile-device-vulnerabilities",
    "x": "A field technician loses a tablet holding cached maintenance records for regulated customer sites. The unit had only a four-digit passcode and was never enrolled in management. Which capability would have most reduced the data exposure?",
    "o": [
      "Weekly antivirus scans of the tablet",
      "A louder audible alarm on the device",
      "Remote wipe with enforced device encryption",
      "A tracking sticker on the tablet case"
    ],
    "a": 2,
    "e": "Encryption keeps the stored records unreadable without the passcode, and a remote wipe lets the organization destroy the data before anyone works through a weak four-digit space. Antivirus scanning defends against hostile software on a device you still possess and offers nothing once the hardware is in someone else's hands."
  },
  {
    "t": "operating-system-vulnerabilities",
    "x": "A scan of a domain controller flags a kernel defect that lets any standard user obtain system-level rights. The vendor shipped a fix last month, but the change advisory board has not yet approved the required reboot. Which compensating step is most appropriate in the interim?",
    "o": [
      "Extend the password history requirement",
      "Limit interactive logon to a small admin group",
      "Disable the server's outbound internet access",
      "Increase the scan frequency to daily"
    ],
    "a": 1,
    "e": "The defect requires a local session to abuse, so shrinking the set of accounts allowed to sign in interactively removes nearly all opportunity until the patch window arrives. Scanning more often only re-reports a finding that is already known and does nothing to reduce the likelihood of exploitation."
  },
  {
    "t": "mitigation-techniques",
    "x": "Analysts observe that users repeatedly launch unsigned binaries pulled from the internet, and definition-based scanning misses several of them because the samples are freshly compiled. Which control stops unknown executables from running at all?",
    "o": [
      "Host-based firewall rules",
      "Full disk encryption",
      "Application allow listing",
      "Screen saver lock policy"
    ],
    "a": 2,
    "e": "Permitting only approved binaries to execute inverts the model so that novelty is blocked by default rather than requiring prior knowledge of each threat. Host firewall rules govern network connections and would not prevent a newly compiled program from launching and acting locally on the machine."
  },
  {
    "t": "segmentation-and-access-control",
    "x": "A hospital wants infusion pumps and imaging equipment to communicate only with their two management servers, never with each other and never outbound to the internet, and it cannot replace the switching hardware already installed. Which approach best delivers that outcome?",
    "o": [
      "A single flat network with host antivirus",
      "Port mirroring to a monitoring appliance",
      "Isolated VLANs with restrictive access control lists",
      "Static IP assignment for every device"
    ],
    "a": 2,
    "e": "Separating the medical equipment into its own broadcast domains and permitting only the specific flows to the management servers enforces the requirement using capabilities the existing switches already have. Port mirroring gives visibility into traffic but permits nothing and blocks nothing, so a compromised pump could still reach every other device."
  },
  {
    "t": "port-security",
    "x": "A university dormitory network requires each connecting device to present credentials that the switch relays to a RADIUS server before any user traffic is forwarded on that jack. Which standard defines this port-based authentication exchange?",
    "o": [
      "IEEE 802.1X",
      "IEEE 802.1Q",
      "IEEE 802.3af",
      "IEEE 802.11ax"
    ],
    "a": 0,
    "e": "802.1X provides port-based network access control: the switch acts as an authenticator and holds the port in an unauthorized state until the RADIUS server validates the supplicant. 802.1Q is VLAN tagging, which segments traffic but authenticates nobody, and 802.3af merely delivers power over the same cabling."
  },
  {
    "t": "port-security",
    "x": "Workstations at a branch office intermittently receive an incorrect gateway address from an unauthorized device that someone plugged into a conference room wall jack. Which switch feature prevents those rogue address offers from being honored?",
    "o": [
      "Dynamic ARP inspection",
      "DHCP snooping",
      "BPDU guard",
      "Port mirroring"
    ],
    "a": 1,
    "e": "DHCP snooping designates switch ports as trusted or untrusted and discards server-side lease offers arriving on untrusted ports, so an unauthorized server cannot hand out addressing. Dynamic ARP inspection is a companion feature, but it validates address-to-MAC bindings in ARP messages rather than blocking bogus lease assignment."
  },
  {
    "t": "port-security",
    "x": "A manufacturing plant wants every access layer interface to learn the first hardware address that appears on it and to disable itself if a different device is later attached to the same jack. Which configuration achieves that?",
    "o": [
      "An access control list bound to the interface",
      "A private VLAN edge assignment",
      "Sticky MAC learning with a violation shutdown",
      "A spanning tree root guard setting"
    ],
    "a": 2,
    "e": "Port security with sticky learning records the first MAC address seen and writes it into the running configuration; a violation action of shutdown then disables the port when another device appears. An access control list filters IP traffic after a device is already connected and says nothing about which physical device may use the jack."
  },
  {
    "t": "power-resiliency",
    "x": "A regional hospital's data center has battery units sized to carry the full load for roughly eight minutes. Leadership wants the facility to keep treating patients through a multi-day storm outage. Which investment meets that goal?",
    "o": [
      "Adding a second battery cabinet to each row",
      "Installing an on-site generator with contracted fuel delivery",
      "Fitting every server with dual power supplies",
      "Deploying managed power strips with remote reboot"
    ],
    "a": 1,
    "e": "Batteries bridge seconds to minutes; sustained operation across days requires a generator plus a fuel supply arrangement to keep refilling it. Extra battery cabinets add minutes at considerable cost and still cannot span days, and dual supplies protect against a failed power supply rather than a loss of utility power."
  },
  {
    "t": "power-resiliency",
    "x": "Servers in a colocation cage each ship with two power supplies, but the technician cabled both of them into the same rack strip on one circuit. What weakness does this introduce?",
    "o": [
      "The circuit breaker will trip from doubled inrush current",
      "A single upstream failure still takes every server down",
      "The supplies will share load unevenly and overheat",
      "Voltage sag protection is lost on the second supply"
    ],
    "a": 1,
    "e": "Redundant supplies only help when each is fed from an independent circuit, ideally from separate distribution units and separate utility or battery paths; a shared strip collapses the design back to one point of failure. Inrush current is a genuine design factor, but staggered startup handles it and it is not the flaw created by this cabling choice."
  },
  {
    "t": "power-resiliency",
    "x": "A small branch office needs its network rack shielded from frequent brownouts and voltage sags, not only from total blackouts, and the site has no room or budget for fuel storage. Which option fits best?",
    "o": [
      "A standby generator with a manual transfer switch",
      "A surge protector on each incoming receptacle",
      "A line-interactive UPS with automatic voltage regulation",
      "A second utility feed from a different substation"
    ],
    "a": 2,
    "e": "A line-interactive unit corrects high and low input voltage with an autotransformer without draining its battery, which is exactly what repeated sags and brownouts demand. A surge protector only clamps spikes and does nothing for undervoltage, while a generator addresses complete outages and needs the fuel storage this site cannot provide."
  },
  {
    "t": "capacity-planning",
    "x": "A managed service provider's response plan assumes analysts can staff a round-the-clock bridge call for a full week, yet the entire security team consists of four employees. Which capacity planning dimension was overlooked?",
    "o": [
      "People",
      "Technology",
      "Infrastructure",
      "Documentation"
    ],
    "a": 0,
    "e": "Capacity planning spans people, technology, and infrastructure, and a plan that outruns available headcount has a people gap no matter how capable the tooling is. Technology capacity would be the answer if the shortfall were license counts or appliance throughput, which is not what limits this team."
  },
  {
    "t": "capacity-planning",
    "x": "An online retailer suffered checkout timeouts during a holiday promotion because the database tier exhausted its connection pool at peak. Which activity would most likely have exposed that shortfall in advance?",
    "o": [
      "A credentialed vulnerability scan of the database hosts",
      "Load forecasting and stress testing against projected demand",
      "A tabletop exercise involving the marketing department",
      "A configuration review of the web application firewall"
    ],
    "a": 1,
    "e": "Forecasting expected peak volume and then driving synthetic load at that level surfaces resource ceilings such as connection pools before customers find them. A tabletop exercise validates decision making and communication during an incident, but it never generates the traffic needed to reveal a throughput limit."
  },
  {
    "t": "capacity-planning",
    "x": "A seasonal employer plans to issue 400 additional laptops, while its endpoint protection subscription covers 600 agents and 500 are already deployed. What does this situation reveal?",
    "o": [
      "An unacceptable recovery point objective",
      "A gap in the change management workflow",
      "A technology capacity shortfall for planned growth",
      "An unresolved data classification conflict"
    ],
    "a": 2,
    "e": "Licensing and product ceilings are part of technology capacity, and 900 required agents against a 600-agent entitlement is a shortfall that must be resolved before onboarding begins. Change management governs how the rollout is approved and documented, but no approval workflow conjures the missing entitlements."
  },
  {
    "t": "recovery-testing",
    "x": "A credit union wants to confirm that department leads understand their duties during a ransomware event, but the exercise must not touch live systems or interrupt member services. Which format fits?",
    "o": [
      "A full interruption failover to the alternate site",
      "A parallel processing run at the warm site",
      "A tabletop walkthrough led by a facilitator",
      "A live simulation of encrypted file shares"
    ],
    "a": 2,
    "e": "A tabletop is discussion based: participants talk through their roles against an injected scenario, so no production system is touched. A full interruption test deliberately shuts down the primary site to prove failover works, which is precisely the disruption this organization ruled out."
  },
  {
    "t": "recovery-testing",
    "x": "Nightly jobs have reported success for eight months, yet when a file server is rebuilt the administrator finds the archives cannot be opened. Which practice would have surfaced the problem sooner?",
    "o": [
      "Scheduled test restores from the stored media",
      "Extending the retention period of the media",
      "Replicating the media to a second facility",
      "Encrypting the media before it leaves the site"
    ],
    "a": 0,
    "e": "A job that exits cleanly proves only that it ran, not that the resulting data is readable, so periodically restoring real files to a scratch system is the only reliable validation. Longer retention simply preserves more copies of the same unusable archives."
  },
  {
    "t": "recovery-testing",
    "x": "An insurance carrier runs a full day of claims processing at its alternate facility while the primary site continues serving customers, then reconciles the two sets of output. Which test type is this?",
    "o": [
      "Simulation",
      "Parallel processing",
      "Full interruption",
      "Tabletop exercise"
    ],
    "a": 1,
    "e": "A parallel test brings up the recovery environment and processes real work alongside production so the results can be compared without risking the live service. A full interruption test would require stopping the primary site entirely, which did not happen here."
  },
  {
    "t": "states-of-data",
    "x": "Nightly sales extracts travel from retail stores to a corporate warehouse across the public internet. Which safeguard specifically protects the information while it is moving between those two points?",
    "o": [
      "Full disk encryption on the store servers",
      "Database column encryption at the warehouse",
      "A TLS-protected channel between the endpoints",
      "A hardware security module in the corporate rack"
    ],
    "a": 2,
    "e": "Data in transit is protected by encrypting the channel itself, and TLS supplies confidentiality and integrity for the session from one end to the other. Full disk encryption guards data at rest on the sending system and offers nothing once a file is read into memory and transmitted."
  },
  {
    "t": "states-of-data",
    "x": "Auditors discover that decommissioned laptops from a law firm still hold client matter files on their internal drives while the units await pickup by a recycler. Which control protects information in that state?",
    "o": [
      "Certificate pinning in the browser profile",
      "A rule enforced at the outbound web proxy",
      "Full disk encryption tied to a hardware module",
      "A virtual private network for remote sessions"
    ],
    "a": 2,
    "e": "Stored files on an idle drive are data at rest, and full disk encryption keyed to a trusted platform module renders the volume unreadable once the machine leaves trusted custody. A virtual private network protects a session while data crosses a network and does nothing for a powered-off laptop sitting in a disposal bin."
  },
  {
    "t": "states-of-data",
    "x": "A research consortium wants a cloud analytics job to operate on genomic records that stay encrypted in memory, so the hosting provider never sees plaintext values. Which approach supports that requirement?",
    "o": [
      "Hashing every record before upload",
      "Homomorphic encryption of the working set",
      "Transport layer security between the nodes",
      "Encrypting the underlying storage volumes"
    ],
    "a": 1,
    "e": "Homomorphic encryption permits computation directly on ciphertext, which is the technique that keeps data protected even while it is in use. Encrypting the storage volumes protects the same records at rest, but the provider would see plaintext the moment the job loads them for processing."
  },
  {
    "t": "other-infrastructure-concepts",
    "x": "A water treatment utility operates programmable logic controllers that were certified with the plant and cannot receive vendor updates without an expensive recertification. Which measure best limits their exposure?",
    "o": [
      "Installing endpoint detection agents on each controller",
      "Enabling automatic firmware updates from the vendor",
      "Placing the controllers behind a dedicated firewall segment",
      "Joining the controllers to the corporate directory"
    ],
    "a": 2,
    "e": "Industrial control equipment that cannot be updated is protected with compensating controls, and isolating it in a tightly filtered segment restricts who can reach the vulnerable services at all. Endpoint agents are rarely supported on such controllers, and installing unapproved software would itself invalidate the certification."
  },
  {
    "t": "other-infrastructure-concepts",
    "x": "An avionics module must react to each sensor reading inside a guaranteed time window, and a late response counts as a system failure rather than merely slow performance. Which software platform is required?",
    "o": [
      "A general purpose server operating system",
      "A container runtime on a shared host",
      "A type 2 hypervisor with nested guests",
      "A real-time operating system"
    ],
    "a": 3,
    "e": "A real-time operating system provides deterministic scheduling so critical tasks meet hard deadlines on every cycle. A general purpose operating system optimizes average throughput and fairness, and its scheduler may delay a task unpredictably, which is unacceptable when a missed deadline equals a failure."
  },
  {
    "t": "other-infrastructure-concepts",
    "x": "A development team ships an application bundled only with its libraries, and dozens of these instances share the host kernel on a single server. Which isolation weakness should the security team plan around?",
    "o": [
      "A flaw in the shared kernel can affect every instance",
      "Each instance carries its own vulnerable kernel to patch",
      "The host cannot apply CPU or memory limits per instance",
      "Instances can only be scanned after they reach production"
    ],
    "a": 0,
    "e": "Containers isolate processes but share one kernel, so a kernel escape or privilege escalation defect has a blast radius covering every container on that host. The second option describes virtual machines, where each guest runs its own kernel and patching is handled per guest."
  },
  {
    "t": "infrastructure-considerations",
    "x": "A small law practice moves its file servers to a hosted provider partly so that contractual penalties land on the provider when agreed availability targets are missed. Which consideration does this illustrate?",
    "o": [
      "Ease of recovery",
      "Risk transference",
      "Patch availability",
      "Responsiveness"
    ],
    "a": 1,
    "e": "Shifting the financial consequence of an outage to another party through a contract is risk transference, one of the infrastructure considerations weighed when choosing hosted services. Ease of recovery describes how quickly systems can be restored after a failure, not who absorbs the loss."
  },
  {
    "t": "infrastructure-considerations",
    "x": "A radiology department depends on an imaging console running a vendor-locked operating system that will never receive further security fixes. Which consideration most shapes where that console is placed on the network?",
    "o": [
      "Cost of the appliance",
      "Ease of deployment",
      "Inability to patch",
      "Compute requirements"
    ],
    "a": 2,
    "e": "When a system can never be updated its known flaws become permanent, so the design must compensate with strict segmentation and heavy monitoring around it. Ease of deployment influences how fast a system is rolled out but says nothing about the ongoing exposure that drives its placement."
  },
  {
    "t": "infrastructure-considerations",
    "x": "A startup expects unpredictable traffic spikes after each press mention and has almost no capital available for hardware purchased ahead of demand. Which pair of considerations most favors a provider-hosted design?",
    "o": [
      "Physical isolation and compute",
      "Scalability and cost",
      "Patch availability and power",
      "Risk transference and resilience"
    ],
    "a": 1,
    "e": "Elastic capacity that grows with demand and a consumption-based expense model answer both the unpredictable spikes and the absence of up-front capital. Physical isolation argues the other way, since the strongest isolation comes from dedicated on-premises equipment this company cannot afford to buy."
  },
  {
    "t": "secure-infrastructures",
    "x": "An organization must publish a customer-facing portal to the internet while ensuring its finance database can never be reached directly from outside. Where should the portal server sit?",
    "o": [
      "On the internal trusted segment with a forwarding rule",
      "In a screened subnet between two filtering boundaries",
      "On the same segment as the finance database servers",
      "Outside the perimeter with only a public address"
    ],
    "a": 1,
    "e": "A screened subnet places internet-reachable services in their own zone, filtered both from the internet and toward the internal network, so a compromised portal does not open a path to finance data. Forwarding a port to a host on the trusted segment exposes an internal system directly and leaves the attacker inside the protected zone once it falls."
  },
  {
    "t": "secure-infrastructures",
    "x": "An engineer groups guest wireless, staff desktops, and card processing systems into distinct trust levels and writes explicit rules for any traffic crossing between them. What is this design approach called?",
    "o": [
      "Link aggregation",
      "Loop protection",
      "Security zoning",
      "Port mirroring"
    ],
    "a": 2,
    "e": "Defining zones by trust level and governing every transition between them is the zone-based approach at the heart of secure infrastructure design. Port mirroring only copies traffic to a monitoring appliance and enforces no policy at all between groups of systems."
  },
  {
    "t": "backups",
    "x": "A virtualization administrator wants the ability to return a guest to its exact state from minutes before a failed patch, without pulling media from the tape library. Which capability provides that?",
    "o": [
      "A snapshot captured immediately before the change",
      "A full copy written to the media library overnight",
      "A differential job run earlier the same evening",
      "Continuous replication to the standby data center"
    ],
    "a": 0,
    "e": "A snapshot preserves the guest's disk and memory state at a point in time and can be reverted in moments, which matches a rollback need measured in minutes. Continuous replication keeps a second copy current but faithfully carries the bad patch to the standby site, leaving nothing clean to roll back to."
  },
  {
    "t": "backups",
    "x": "An accounting practice determines it can tolerate losing no more than fifteen minutes of posted transactions after a failure. Which design decision follows most directly from that tolerance?",
    "o": [
      "The number of media rotations retained",
      "How frequently copy jobs are executed",
      "The physical distance to the vault site",
      "The cipher used to protect the media"
    ],
    "a": 1,
    "e": "The tolerable amount of lost work is the recovery point objective, and it is met by running backup or replication jobs at least that often. Retention counts and vault distance matter for compliance and disaster scope, but neither changes how much recent activity disappears when the system fails."
  },
  {
    "t": "firewall-types",
    "x": "An administrator retires a filtering device that judged every packet in isolation and installs one that tracks connection establishment and automatically permits the matching return traffic. What was gained?",
    "o": [
      "Transparent bridging between segments",
      "Unified logging across the appliance fleet",
      "Stateful inspection of active connections",
      "Deep decoding of application payloads"
    ],
    "a": 2,
    "e": "A stateful firewall maintains a connection table, so packets belonging to an already approved session are allowed without a separate inbound rule for each one. Deep payload decoding is a next-generation capability concerned with identifying content and applications, and it is independent of whether the device tracks session state."
  },
  {
    "t": "firewall-types",
    "x": "A 40-person branch needs packet filtering, malware scanning, URL categorization, and spam control delivered by one box under a single management console and support contract. Which product category fits?",
    "o": [
      "Unified threat management",
      "Web application firewall",
      "Forward proxy server",
      "Network access control"
    ],
    "a": 0,
    "e": "A unified threat management appliance consolidates several security functions into one platform, which suits small sites that cannot host or staff separate systems. A web application firewall defends hosted web applications against injection style attacks and supplies none of the antimalware or antispam functions this branch requires."
  },
  {
    "t": "cloud-infrastructures",
    "x": "A finance company keeps regulated ledgers on hardware it owns but shifts heavy analytics to a public provider during quarter close, linking the two environments over a private circuit. Which model is this?",
    "o": [
      "Community cloud",
      "Private cloud",
      "Hybrid cloud",
      "Multitenant hosting"
    ],
    "a": 2,
    "e": "A hybrid model combines owned infrastructure with public cloud capacity and moves workloads between them as requirements dictate. A community cloud is shared by several organizations with common regulatory needs, which is not what a single firm bursting its own workloads is doing."
  },
  {
    "t": "data-types-and-classifications",
    "x": "A chip designer's unreleased fabrication process gives the firm its market advantage and is protected chiefly by patents and trade secret law rather than privacy statutes. Which data type label applies?",
    "o": [
      "Human-readable data",
      "Intellectual property",
      "Financial information",
      "Legal information"
    ],
    "a": 1,
    "e": "Proprietary designs and processes that create competitive value are classified as intellectual property, and their loss injures the business rather than an individual. Legal information covers material such as contracts and case files retained for legal process, a separate category with different handling rules."
  },
  {
    "t": "network-appliances",
    "x": "Before a contractor's laptop receives anything beyond guest connectivity, an appliance verifies that its antivirus definitions are current and its drive is encrypted. Which control performs that posture check?",
    "o": [
      "A content filtering appliance",
      "An intrusion detection sensor",
      "Network access control",
      "A virtual private network gateway"
    ],
    "a": 2,
    "e": "Network access control evaluates a device's health against policy and confines noncompliant systems to a limited or remediation network until they conform. An intrusion detection sensor inspects traffic for attack patterns after devices are already on the network and makes no admission decision."
  },
  {
    "t": "securing-wireless-and-mobile",
    "x": "A logistics firm buys smartphones for its drivers, keeps title to the hardware, and permits a reasonable amount of private use after shifts end. Which mobile deployment model is described?",
    "o": [
      "Corporate owned, personally enabled",
      "Bring your own device",
      "Choose your own device",
      "Virtual desktop infrastructure"
    ],
    "a": 0,
    "e": "Hardware the company buys and controls while still allowing some private use is the corporate owned, personally enabled model. Bring your own device is wrong because the employee would own the handset. Choose your own device also uses company-purchased hardware, but its defining trait is letting staff pick from an approved catalog, which this scenario never mentions."
  },
  {
    "t": "securing-wireless-and-mobile",
    "x": "Staff at a design agency read work email on personal tablets and object to any control that would let the firm see their family photos. Which approach keeps business data in a managed, separately encrypted space that can be erased on its own?",
    "o": [
      "Full device encryption",
      "Containerization of the work profile",
      "A screen lock timeout policy",
      "Geofencing around the office"
    ],
    "a": 1,
    "e": "Containerization creates a managed work profile with its own encryption and its own selective wipe, so corporate data can be removed without touching personal content. Full device encryption protects everything at rest but draws no boundary between personal and business data, and wiping such a device destroys the owner's photos along with the email."
  },
  {
    "t": "securing-wireless-and-mobile",
    "x": "A field auditor loses a tablet in an airport terminal, and the unit never reconnects to any network, so the management console cannot deliver its erase command. Which protection still keeps the stored client files unreadable?",
    "o": [
      "Location tracking enabled in the management profile",
      "Automatic cloud backup of the tablet's documents",
      "Full device encryption with a strong passcode",
      "An erase command queued in the management console"
    ],
    "a": 2,
    "e": "Encryption tied to a strong passcode protects data the moment the device leaves the owner's hands and needs no connectivity to work. A queued erase command is useless here because the tablet never checks in, and backups only preserve the organization's copy of the files rather than denying access to whoever found the device."
  },
  {
    "t": "asset-management",
    "x": "An unpatched Windows host turns up on a production segment, and no record of it exists anywhere because a contractor connected it two years ago and left. Which practice would most likely have surfaced this machine sooner?",
    "o": [
      "Requiring a certificate of destruction for retired hardware",
      "Assigning a data classification label to each file share",
      "Publishing a written acceptable use policy for contractors",
      "Maintaining an accurate inventory with periodic reconciliation"
    ],
    "a": 3,
    "e": "An inventory that is regularly reconciled against what is actually on the network is what turns up systems nobody registered. A written acceptable use policy sets expectations for behavior but produces no technical record and detects nothing on its own, and destruction certificates apply at the end of an asset's life rather than at its introduction."
  },
  {
    "t": "asset-management",
    "x": "A hospital returns leased storage arrays when the contract ends and must show auditors documented proof that a third party rendered every drive unrecoverable. What should the hospital obtain from that vendor?",
    "o": [
      "A certificate of destruction covering each drive",
      "A signed chain of custody form from the courier",
      "A hardware warranty claim from the leasing company",
      "A change advisory board approval for the return"
    ],
    "a": 0,
    "e": "A certificate of destruction is the vendor's formal attestation that specific media were destroyed, which is exactly the artifact an auditor expects. Chain of custody documents who handled the drives in transit and is valuable, but it proves movement and control rather than that the data itself is gone."
  },
  {
    "t": "asset-management",
    "x": "During an audit, several database servers have nobody named as accountable for approving access requests or scheduling their patch windows. Which step in the asset management process closes this gap?",
    "o": [
      "Enrolling the servers in the endpoint detection platform",
      "Assigning a documented owner for each entry in the inventory",
      "Adding the servers to the nightly backup rotation",
      "Listing the servers in the disaster recovery plan"
    ],
    "a": 1,
    "e": "Every asset needs a named owner who is accountable for its access decisions, its maintenance schedule, and ultimately its disposal. Adding the servers to backups or the recovery plan improves resilience but still leaves no person answerable for approving access, which is the gap the auditor identified."
  },
  {
    "t": "threat-intelligence",
    "x": "A regional bank wants curated adversary reporting produced by and for other financial institutions, including sector-specific indicators exchanged under a trust agreement among members. Which source best meets that need?",
    "o": [
      "An open source vulnerability database",
      "A vendor's product security advisory list",
      "An information sharing and analysis center",
      "A public code repository search service"
    ],
    "a": 2,
    "e": "An information sharing and analysis center is the industry-specific membership body built for exactly this kind of trusted, sector-focused exchange. A vendor advisory list is useful but is limited to that vendor's own products and says nothing about which actors are currently targeting banks."
  },
  {
    "t": "threat-intelligence",
    "x": "Two partner organizations want their platforms to trade machine-readable indicators automatically instead of emailing spreadsheets of file hashes back and forth every week. Which pairing supports that?",
    "o": [
      "STIX to structure the data and TAXII to transport it",
      "SNMP to structure the data and syslog to transport it",
      "CVSS to structure the data and CVE to transport it",
      "SAML to structure the data and LDAP to transport it"
    ],
    "a": 0,
    "e": "STIX defines a common structure for describing indicators and adversary behavior, and TAXII defines how those documents move between systems. CVSS and CVE relate to vulnerabilities rather than indicator exchange, and neither one is a transport mechanism at all."
  },
  {
    "t": "threat-intelligence",
    "x": "After a breach at an unrelated firm, a retailer wants early warning that its own employees' credentials are being traded on underground forums. Which intelligence source directly supports that goal?",
    "o": [
      "Regulatory filings published by the retailer's peers",
      "Internal firewall logs from the perimeter devices",
      "Vendor release notes for the point of sale software",
      "Dark web monitoring for leaked credential collections"
    ],
    "a": 3,
    "e": "Monitoring underground marketplaces and paste sites is how organizations learn their credentials are circulating before those credentials get used. Perimeter logs would only reveal an attempt after someone tries the stolen credentials against the retailer, which is far later than the early warning being requested."
  },
  {
    "t": "analyzing-vulnerabilities",
    "x": "A quarterly scan reported nothing on an application server, yet a tester later exploited an unpatched deserialization weakness on that very host. How should the team characterize the scan result?",
    "o": [
      "False positive",
      "False negative",
      "True positive",
      "Documented exception"
    ],
    "a": 1,
    "e": "A false negative is a real weakness the tool failed to report, which is what happened here. A false positive would be the opposite situation, where the tool raises a finding that turns out not to exist, and it does not describe a scanner that stayed silent while a genuine flaw was present."
  },
  {
    "t": "analyzing-vulnerabilities",
    "x": "Two findings carry identical base severity ratings: one sits on an internet-facing payment gateway with published exploit code, the other on a lab workstation with no route in from outside. What should drive the order of remediation?",
    "o": [
      "The alphabetical order of the affected product names",
      "The number of total findings reported per device",
      "Environmental exposure and the availability of a working exploit",
      "The age of the operating system installed on each host"
    ],
    "a": 2,
    "e": "Base severity describes the flaw in isolation, so real prioritization comes from context: reachability, business value, and whether attackers already have usable exploit code. Counting how many findings each device has is misleading, since a single reachable and weaponized flaw outranks a long list of unreachable ones."
  },
  {
    "t": "analyzing-vulnerabilities",
    "x": "A vendor advisory, a scanner report, and a news article all reference one flaw using the same catalog identifier, letting teams be certain they are discussing a single specific issue. What is that identifier called?",
    "o": [
      "A common vulnerability scoring system rating",
      "A common weakness enumeration category",
      "A common platform enumeration string",
      "A common vulnerabilities and exposures entry"
    ],
    "a": 3,
    "e": "The common vulnerabilities and exposures entry is the unique reference number assigned to one disclosed flaw so every tool and vendor can point at the same thing. The weakness enumeration category describes the general class of coding error, such as improper input handling, and is shared by thousands of distinct flaws rather than identifying one."
  },
  {
    "t": "vulnerability-remediation",
    "x": "A manufacturing line depends on control software that refuses to run on a patched version of its operating system, and the supplier has no fix scheduled this year. Which response best lowers exposure while production continues?",
    "o": [
      "Isolate the host on a tightly restricted network segment",
      "Uninstall the control software until a fix finally ships",
      "Close the finding with a note that no fix is available",
      "Repeat the scan monthly to confirm the flaw is still there"
    ],
    "a": 0,
    "e": "When a patch is not an option, a compensating control such as strict segmentation reduces who can reach the weak host and is the accepted answer for legacy production gear. Rescanning monthly generates paperwork but changes nothing about the risk, and it leaves the same reachable host exposed the entire time."
  },
  {
    "t": "vulnerability-remediation",
    "x": "A finding cannot be fixed before the annual audit, and leadership chooses to live with it after weighing repair cost against likely impact. What must accompany that choice for the program to stay defensible?",
    "o": [
      "A rescan scheduled for the following business day",
      "A formal exception record with an owner and review date",
      "A firewall rule change approved by the service desk",
      "A ticket closed with a comment that no fix exists"
    ],
    "a": 1,
    "e": "Accepted risk still has to be tracked, so a written exception names who accepted it, why, and when the decision gets revisited. Simply closing the ticket with a comment records the outcome but assigns nobody, sets no expiry, and leaves the organization unable to show an auditor that the acceptance was a deliberate management decision."
  },
  {
    "t": "vulnerability-remediation",
    "x": "Patches were installed on eighty servers over a maintenance weekend and the change record is already marked complete. What actually confirms the underlying weaknesses are gone?",
    "o": [
      "A signed approval from the change advisory board",
      "An updated entry in the configuration inventory",
      "A verification scan of the affected hosts",
      "A report of patch download success rates"
    ],
    "a": 2,
    "e": "Remediation is not finished until a follow-up scan validates that the finding no longer appears, since patches can fail to apply, get rolled back, or require a reboot nobody performed. Download success rates only prove the files reached the servers, not that the vulnerable component was replaced and is now running."
  },
  {
    "t": "security-tools",
    "x": "Outbound mail is carrying spreadsheets full of customer account numbers to personal webmail addresses. Which tool inspects content in motion and stops transfers matching sensitive patterns?",
    "o": [
      "Network access control",
      "An intrusion detection sensor",
      "A certificate revocation list",
      "Data loss prevention"
    ],
    "a": 3,
    "e": "Data loss prevention exists to recognize sensitive content by pattern or classification and block or quarantine it before it leaves. Network access control decides which devices may join the network in the first place and never examines the contents of a message once a permitted device is connected."
  },
  {
    "t": "security-tools",
    "x": "Sales laptops spend their days on hotel and home connections and rarely join the corporate tunnel, yet leadership wants continuous posture and telemetry from every machine. Which collection approach fits best?",
    "o": [
      "An installed agent reporting back over the internet",
      "Agentless polling from an internal scanner",
      "A weekly manual audit run by the service desk",
      "A port mirror on the headquarters core switch"
    ],
    "a": 0,
    "e": "An agent lives on the endpoint and keeps reporting no matter which network the laptop is using, which is what continuous coverage of roaming devices requires. Agentless polling from inside the corporate network only works while the target is reachable there, so these laptops would go dark for weeks at a time."
  },
  {
    "t": "security-tools",
    "x": "Ahead of a migration, an engineer needs a list of every listening TCP service and its version banner across a subnet of aging hosts. Which category of utility produces that directly?",
    "o": [
      "A password cracking suite",
      "A packet capture decoder",
      "A network port scanner",
      "A configuration backup tool"
    ],
    "a": 2,
    "e": "A port scanner connects to each address and port in a range and can read the banner a service returns, producing exactly this inventory. A packet capture decoder can reveal service details too, but only for traffic that happens to occur while capturing, so idle services on quiet hosts would never appear."
  },
  {
    "t": "web-filtering",
    "x": "An employer wants to stop staff from reaching gambling and adult sites without hand-maintaining a list of individual addresses, since new sites appear daily. Which capability handles this?",
    "o": [
      "Static block entries typed into each browser",
      "Certificate pinning enforced on the endpoint",
      "Bandwidth shaping applied to streaming media",
      "Content categorization applied by the filter"
    ],
    "a": 3,
    "e": "Category-based filtering relies on a maintained classification of sites, so newly registered gambling pages are covered as soon as the vendor classifies them. Static block entries would technically work but require someone to discover and add every new address by hand, which is the burden the employer is trying to avoid."
  },
  {
    "t": "web-filtering",
    "x": "Malware on a workstation resolves an algorithmically generated hostname before it ever opens a session to its operator. Which filtering method can break the callback at the name resolution step?",
    "o": [
      "Blocking known malicious domains at the resolver",
      "Rewriting request headers at the reverse proxy",
      "Dropping inbound connection attempts at the edge router",
      "Requiring signed macros in office productivity documents"
    ],
    "a": 0,
    "e": "Filtering at the resolver refuses to answer lookups for known bad names, so the callback fails before a single packet reaches the operator. Dropping inbound attempts at the edge router addresses traffic arriving from outside, which is the wrong direction for a compromised host reaching out on its own."
  },
  {
    "t": "web-filtering",
    "x": "A gateway can no longer classify most browsing because nearly every session is encrypted between the browser and the site. What must be configured so policy can apply to that traffic?",
    "o": [
      "Rules that block any site whose certificate the gateway did not issue",
      "Inspection that terminates and rebuilds sessions using a trusted internal certificate",
      "A policy that permits encrypted sessions and logs only the destination port",
      "An agent that turns off encryption on the endpoint before traffic departs"
    ],
    "a": 1,
    "e": "The gateway has to act as a trusted intermediary, decrypting on one side and re-encrypting on the other with a certificate the managed endpoints already trust. Logging only the destination port leaves the gateway unable to distinguish a research site from a malware download, since both look identical at that level."
  },
  {
    "t": "operating-system-security",
    "x": "A Windows domain administrator must enforce identical lock screen, audit, and local firewall settings on four thousand desktops and have them reapplied automatically whenever a user changes one. Which native mechanism does this?",
    "o": [
      "A logon script copied to every workstation",
      "Scheduled tasks created by the service desk",
      "Registry backups stored on a central file server",
      "Group policy objects linked within the directory"
    ],
    "a": 3,
    "e": "Group policy distributes settings from the directory and refreshes them on a schedule, so local changes are overwritten without anyone touching the machine. A logon script could push settings once at sign-in but offers no ongoing enforcement, and a user who alters a setting mid-session keeps that change until the next login."
  },
  {
    "t": "operating-system-security",
    "x": "On a hardened Linux server, the team wants the kernel itself to confine each daemon to a narrow set of files and ports, so a compromised web process cannot read database credentials. Which capability provides this?",
    "o": [
      "A mandatory access control module running in enforcing mode",
      "A discretionary permission bit set on each individual file",
      "A scheduled job that resets file ownership every hour",
      "A local firewall rule set that filters loopback traffic"
    ],
    "a": 0,
    "e": "Kernel-level modules such as the ones shipped with major distributions confine each process to a policy the process cannot override, even when it runs as root. Standard permission bits are set at the owner's discretion and a compromised process running with sufficient privilege can simply change or ignore them."
  },
  {
    "t": "operating-system-security",
    "x": "Support technicians sign in to their daily desktops with accounts in the local administrators group, so anything they encounter while browsing or reading mail executes with full rights. Which change most reduces that blast radius?",
    "o": [
      "Require a longer passphrase on the privileged account",
      "Turn on disk encryption for every support desktop",
      "Give each technician a standard account for routine work",
      "Increase how often antivirus definitions are refreshed"
    ],
    "a": 2,
    "e": "Separating routine work onto a standard account means malicious code inherits limited rights and cannot install services or tamper with system files. A longer passphrase on the privileged account helps against guessing, but it does nothing here because the malicious code is already executing inside an authenticated privileged session."
  },
  {
    "t": "monitoring-data",
    "x": "An investigator needs to know which internal hosts talked to a suspicious address, how many bytes moved, and when, but retaining every byte crossing the network is far too expensive. Which record type fits?",
    "o": [
      "Antivirus quarantine reports per endpoint",
      "Flow records summarizing each conversation",
      "Certificate transparency log downloads",
      "Screenshots collected from user desktops"
    ],
    "a": 1,
    "e": "Flow records store the metadata of each conversation, endpoints, ports, byte counts and timing, at a tiny fraction of the storage a full capture demands. Antivirus quarantine reports only describe files the scanner acted on and reveal nothing about which systems communicated with an external address."
  },
  {
    "t": "monitoring-data",
    "x": "A regulator requires authentication records to stay retrievable for seven years, but the live analysis platform holds only ninety days online because of licensing cost. What should the team implement?",
    "o": [
      "Deleting records once the ninety day window closes",
      "Reducing how many systems generate records at all",
      "Archiving older records to cheaper long-term storage",
      "Raising the alerting threshold on authentication events"
    ],
    "a": 2,
    "e": "Archiving moves aged records out of the expensive searchable tier while keeping them retrievable for the required period. Reducing which systems generate records would cut volume but destroys the very evidence the regulator expects to see, and it weakens detection at the same time."
  },
  {
    "t": "monitoring-data",
    "x": "Analysts have begun ignoring a rule that fires two hundred notifications every morning, nearly all of them traced to one backup job's service account. What is the correct response?",
    "o": [
      "Adjust the rule so the known benign pattern is excluded",
      "Switch the rule off completely to clear the queue",
      "Route those notifications to an unmonitored mailbox",
      "Ask the analysts to work through the queue faster"
    ],
    "a": 0,
    "e": "Tuning keeps the detection in place while removing the specific benign condition that generates the noise, which restores the analysts' trust in the alert. Disabling the rule outright also silences the queue, but it eliminates coverage for the malicious version of the same behavior the rule was written to catch."
  },
  {
    "t": "password-security",
    "x": "Members of a nonprofit reuse one memorable phrase across a dozen web services because they cannot keep unique strings in their heads. Which practical control lets them hold long, distinct secrets for each service?",
    "o": [
      "A shorter minimum length so phrases stay memorable",
      "A manager application that generates and stores them",
      "A monthly expiration that forces a fresh phrase",
      "A shared spreadsheet kept on the internal file server"
    ],
    "a": 1,
    "e": "A manager application removes the memory constraint entirely, so each service can hold a long random secret that is never reused. Forcing monthly expiration makes the memory problem worse and usually drives people toward predictable variations of the same phrase across every site."
  },
  {
    "t": "password-security",
    "x": "Policy today forces a change every thirty days, and service desk data shows most staff simply increment a trailing digit. Which revision best improves genuine resistance to guessing?",
    "o": [
      "Shorten the interval so credentials change twice as often",
      "Add one more special character to the complexity requirement",
      "Require greater length and screen values against known breaches",
      "Require the change to happen on the first day of each month"
    ],
    "a": 2,
    "e": "Length drives the cost of an offline attack far more than composition rules do, and screening against breach corpora blocks values attackers already hold. Shortening the interval accelerates the exact predictable-increment behavior the service desk data revealed, so it makes guessing easier rather than harder."
  },
  {
    "t": "password-security",
    "x": "Several administrators share the root credential for a storage appliance, and after a recent outage nobody can establish who was signed in at the time. Which mechanism restores individual accountability?",
    "o": [
      "A vault that checks the secret out per person and rotates it",
      "A stronger passphrase agreed on by all the administrators",
      "A monthly reminder to review the appliance event log",
      "A sealed copy of the credential held by the department manager"
    ],
    "a": 0,
    "e": "A vault forces each administrator to authenticate individually, records who retrieved the shared secret and when, and rotates it afterward so a memorized copy loses value. A stronger shared passphrase raises the bar against guessing but leaves every session attributable only to the same anonymous account."
  },
  {
    "t": "scripting-and-automation",
    "x": "Onboarding a new hire takes three days of manual steps across the directory, the ticketing system, and the payroll portal, and individual steps are sometimes skipped entirely. What does automating that workflow deliver first?",
    "o": [
      "A guarantee that new accounts cannot be compromised",
      "Automatic classification of the data each hire touches",
      "Removal of the need to review entitlements afterward",
      "Consistent execution of the full workflow every time"
    ],
    "a": 3,
    "e": "The primary security benefit of automating provisioning is consistency, since the workflow performs the same steps in the same order every time and leaves an auditable record. Automation does not remove the need for periodic entitlement reviews, because a flawed workflow simply grants the wrong access consistently and at scale."
  },
  {
    "t": "scripting-and-automation",
    "x": "Whenever a phishing report arrives, an analyst manually pulls sender reputation, detonates the attachment in a sandbox, then searches mail stores for other copies. Which capability performs that whole sequence without keystrokes?",
    "o": [
      "An orchestration playbook triggered by the report",
      "A signature update pushed to the mail gateway",
      "A quarantine folder reviewed once each business day",
      "A firewall rule blocking the sender's address range"
    ],
    "a": 0,
    "e": "An orchestration playbook chains together enrichment, detonation, and search steps across separate tools and runs them automatically when the trigger fires. A gateway signature update may block that one campaign going forward but performs none of the investigative steps the analyst is repeating by hand."
  },
  {
    "t": "scripting-and-automation",
    "x": "One engineer wrote the deployment code that now provisions every cloud workload, and it lives on her laptop with no documentation and no repository. Which drawback of automation does this illustrate?",
    "o": [
      "Excess cost from licensing the automation platform",
      "Slower promotion of new workloads into production",
      "A single point of failure in the supporting staff",
      "Loss of version history inside the provider console"
    ],
    "a": 2,
    "e": "Automation concentrates operational knowledge, and when one undocumented person holds it the organization cannot maintain, audit, or recover the process if that person leaves. Licensing cost is a real consideration for commercial tooling but is unrelated to the specific dependency described here."
  },
  {
    "t": "incident-planning",
    "x": "During an exercise, nobody could say who notifies the state regulator, the affected customers, or the cyber insurer, and each participant assumed a different department owned it. Which part of the plan is missing?",
    "o": [
      "A retention schedule for archived system records",
      "A capacity model for the ticketing platform",
      "A vendor list for replacement hardware orders",
      "A communication plan naming roles and recipients"
    ],
    "a": 3,
    "e": "A communication plan states who contacts each internal and external party, on what timeline, and with what approved wording, which is precisely the ambiguity exposed here. A vendor list supports recovery logistics but says nothing about notification duties, and regulatory deadlines are missed while people debate ownership."
  },
  {
    "t": "incident-planning",
    "x": "Instead of waiting for an alert, a team forms a hypothesis that an adversary is abusing scheduled tasks for persistence, then queries endpoint telemetry across the whole fleet to test it. What is this activity?",
    "o": [
      "Threat hunting",
      "Digital forensics",
      "Penetration testing",
      "Vulnerability scanning"
    ],
    "a": 0,
    "e": "Threat hunting is the proactive, hypothesis-driven search through existing telemetry for adversary activity that produced no alert. Digital forensics is also investigative but begins from a known incident and focuses on reconstructing what happened on specific evidence, rather than testing a theory across an entire environment."
  },
  {
    "t": "incident-planning",
    "x": "A company sends unannounced but harmless lure messages to all employees, measures how many click versus how many report, and feeds the numbers back into training. What kind of preparedness activity is this?",
    "o": [
      "A structured walkthrough",
      "A root cause analysis",
      "A simulation exercise",
      "A capability maturity review"
    ],
    "a": 2,
    "e": "Testing people against a realistic but harmless version of a real attack and measuring their behavior is a simulation. A structured walkthrough is a discussion-based review of documented procedures, so no employee is ever placed in front of a live stimulus and no behavioral data comes out of it."
  },
  {
    "t": "endpoint-security",
    "x": "A server team wants immediate notice whenever a system binary or a configuration file under the standard config directory is modified outside an approved change window. Which endpoint capability provides that?",
    "o": [
      "File integrity monitoring",
      "Full disk encryption",
      "A screen lock policy",
      "Removable media control"
    ],
    "a": 0,
    "e": "File integrity monitoring records a cryptographic baseline for watched files and alerts when the current value stops matching, which catches tampering that leaves no other trace. Full disk encryption protects data if the drive is removed but permits any authorized running process to change files freely once the system is booted."
  },
  {
    "t": "endpoint-security",
    "x": "Laptops that roam far outside the perimeter need traffic and process behavior examined on the machine itself, because the central sensors never observe those sessions. Which control belongs on the device?",
    "o": [
      "A network intrusion detection sensor at the core",
      "A next generation firewall at the internet edge",
      "A load balancer health check probe",
      "A host-based intrusion prevention agent"
    ],
    "a": 3,
    "e": "A host-based intrusion prevention agent inspects and can block activity locally regardless of which network the laptop happens to be on. A sensor at the core and a firewall at the edge both depend on the traffic crossing corporate infrastructure, which is exactly what these roaming sessions never do."
  },
  {
    "t": "penetration-testing",
    "x": "Before an external assessment begins, both parties sign a document fixing the target address ranges, the permitted testing hours, the systems that are off limits, and who to call if something breaks. What is that document?",
    "o": [
      "The service level agreement",
      "The business impact analysis",
      "The rules of engagement",
      "The memorandum of understanding"
    ],
    "a": 2,
    "e": "The rules of engagement define scope, timing, prohibited techniques, and escalation contacts for an assessment, protecting both the client and the testers. A service level agreement commits a provider to performance and availability targets for an ongoing service and does not describe how a single assessment will be conducted."
  },
  {
    "t": "penetration-testing",
    "x": "With written authorization in hand, an assessor starts sending crafted probes to a client's public hosts in order to enumerate open ports and grab service banners. Which activity is this?",
    "o": [
      "Active reconnaissance",
      "Passive reconnaissance",
      "Lateral movement",
      "Privilege escalation"
    ],
    "a": 0,
    "e": "Sending packets to the target and interpreting the responses is active reconnaissance, which is effective but detectable in the target's logs. Passive reconnaissance would gather the same kind of information from third-party sources without any traffic ever reaching the client's systems."
  },
  {
    "t": "secure-baselines",
    "x": "An approved configuration standard exists only as a written document, and each administrator applies it by hand, so results differ noticeably between two data centers. Which improvement makes the deployment step reliable?",
    "o": [
      "Email the document to every administrator each quarter",
      "Push the settings using a configuration management tool",
      "Add a quiz about the document to annual staff training",
      "Store the document in a searchable wiki for reference"
    ],
    "a": 1,
    "e": "Automated configuration management applies the same defined state to every system and can correct drift on its own, which removes the human variation described. Training and wikis improve awareness of the standard but still depend on each administrator performing dozens of steps identically by hand."
  },
  {
    "t": "secure-baselines",
    "x": "A three-person team must produce hardening standards for a web server, a database engine, and a server operating system quickly, with no capacity to research every setting from scratch. What is the most efficient starting point?",
    "o": [
      "Default settings shipped by each software vendor",
      "Settings copied from the team's oldest production host",
      "Published industry benchmarks for each platform",
      "A summary of last year's assessment findings"
    ],
    "a": 2,
    "e": "Independent industry benchmarks provide reviewed, per-platform recommendations the team can adopt and then tailor, which is far faster than deriving them alone. Copying the oldest production host would preserve whatever undocumented drift and legacy exceptions have accumulated there and codify them as the new standard."
  },
  {
    "t": "security-monitoring",
    "x": "A finance user authenticates from headquarters at nine in the morning and then successfully from another continent eleven minutes afterward. Which detection approach flags that pattern?",
    "o": [
      "Behavior analytics that model normal user activity",
      "Signature matching against known malware hashes",
      "Scheduled port scanning of the workstation",
      "Certificate validation at the wireless controller"
    ],
    "a": 0,
    "e": "Behavior analytics build a profile of typical activity and raise an alert when an event is physically or statistically implausible, which is how impossible travel gets caught. Signature matching compares artifacts to a list of known bad values, and no signature exists for a legitimate credential used from an unlikely place."
  },
  {
    "t": "security-monitoring",
    "x": "An auditor asks how the team verifies that six hundred servers still match the approved hardening configuration without a person signing in to each one. Which standardized approach performs that at scale?",
    "o": [
      "A quarterly sample audit of twenty selected servers",
      "A change management log review by the audit team",
      "Security content automation protocol tooling",
      "An interview with each system owner about settings"
    ],
    "a": 2,
    "e": "The security content automation protocol expresses checklists in a machine-readable form so scanners can evaluate every host and report compliance consistently. Sampling twenty servers each quarter produces evidence but leaves the other systems unverified, and it detects drift months after it occurs."
  },
  {
    "t": "log-data",
    "x": "Events from a firewall, a proxy, and two domain controllers cannot be lined up into one timeline because each device reports a noticeably different clock. What must be corrected first?",
    "o": [
      "Retention length configured on the collector",
      "Severity levels assigned to each message type",
      "Time synchronization across every logging source",
      "Transport encryption between devices and collector"
    ],
    "a": 2,
    "e": "Correlation depends on a shared and accurate time reference, so every source should synchronize to the same authoritative clock before any timeline is trusted. Adjusting retention keeps records available longer but does nothing to make the timestamps on those records comparable to one another."
  },
  {
    "t": "access-controls",
    "x": "A cloud policy should let a contractor open a project folder only during business hours, only from a managed laptop, and only while assigned to that project. Which model evaluates all of those conditions together?",
    "o": [
      "Discretionary access control",
      "Attribute-based access control",
      "Mandatory access control",
      "Rule-based access control"
    ],
    "a": 1,
    "e": "Attribute-based access control makes each decision by evaluating properties of the user, the resource, and the surrounding context such as time and device state. Discretionary access control leaves the decision to the resource owner through permissions on the object and offers no way to weigh device posture or project assignment at request time."
  },
  {
    "t": "penetration-tests",
    "x": "A hospital hands an outside testing firm full source code, architecture drawings, and administrator credentials so the firm can spend its limited hours probing business logic flaws rather than mapping the estate. Which engagement style is this?",
    "o": [
      "Known environment test",
      "Unknown environment test",
      "Partially known environment test",
      "Physical intrusion test"
    ],
    "a": 0,
    "e": "Supplying source code, diagrams, and privileged credentials up front defines a known environment engagement, which trades realism for depth and lets testers reach flaws that reconnaissance alone would never surface. A partially known engagement would provide only a subset, such as a user account and an IP range, while the hospital here withheld nothing."
  },
  {
    "t": "penetration-tests",
    "x": "A manufacturer contracts a firm to attempt entry into its plant by tailgating through turnstiles and cloning employee badges, with no requirement to touch the corporate network. Which assessment category does this scope fall under?",
    "o": [
      "Physical penetration test",
      "Wireless penetration test",
      "Internal network penetration test",
      "Application penetration test"
    ],
    "a": 0,
    "e": "The scope targets doors, turnstiles, and badge readers rather than hosts or services, which makes it a physical penetration test even though the tester leans on social engineering to get through. An internal network test would begin from a foothold inside the LAN, and the statement of work here explicitly excludes touching the network."
  },
  {
    "t": "penetration-tests",
    "x": "Before a red team starts active scanning, both parties sign a document listing permitted target ranges, blackout hours, escalation contacts, and prohibited techniques such as denial of service. What is that document?",
    "o": [
      "Rules of engagement",
      "Statement of work",
      "Non-disclosure agreement",
      "Interconnection security agreement"
    ],
    "a": 0,
    "e": "Rules of engagement define the operational boundaries of the test: what may be touched, when, by whom, and what is off limits. A statement of work is a close distractor because it also accompanies the engagement, but it describes deliverables, schedule, and fees rather than the tactical constraints on testing activity."
  },
  {
    "t": "penetration-tests",
    "x": "A tester harvests employee names from social media, reviews public DNS records, and reads job postings for technology mentions, all without sending a single packet to the client hosts. This activity is best described as which of the following?",
    "o": [
      "Passive reconnaissance",
      "Active reconnaissance",
      "Credentialed vulnerability scanning",
      "Privilege escalation testing"
    ],
    "a": 0,
    "e": "Gathering intelligence from third-party and public sources without interacting with the target systems is passive reconnaissance, and it leaves nothing in the client logs. Active reconnaissance is the tempting alternative, but it requires sending traffic to the target, such as port scans or banner grabs, which this tester deliberately avoided."
  },
  {
    "t": "privacy",
    "x": "A marketing department wants a catalog listing every system that stores customer records, which categories of personal information each system holds, and where that information flows afterward. Which privacy activity produces this?",
    "o": [
      "Data inventory and mapping",
      "Data minimization review",
      "Data retention enforcement",
      "Data masking deployment"
    ],
    "a": 0,
    "e": "Building a catalog of what personal information exists, where it lives, and how it moves is data inventory and mapping, and it is the prerequisite for nearly every other privacy control. Data minimization is a plausible pick, but it is the decision to stop collecting or to delete unnecessary fields, which cannot be made until the inventory exists."
  },
  {
    "t": "privacy",
    "x": "A European customer emails a retailer asking what personal information the company holds about her and demanding a copy of it. Privacy regulation refers to the individual making that request by which term?",
    "o": [
      "Data subject",
      "Data custodian",
      "Data owner",
      "Data processor"
    ],
    "a": 0,
    "e": "The living person whom the information describes is the data subject, and access requests are one of the rights granted to that person. Data owner is attractive because the customer feels ownership of her own details, but in privacy frameworks the owner is the senior business role inside the organization who is accountable for the data set."
  },
  {
    "t": "privacy",
    "x": "Regulators tell a Brazilian subsidiary that citizen health records must physically remain on servers located inside the country borders, even though the parent firm would prefer one global cloud region. Which requirement is being imposed?",
    "o": [
      "Data sovereignty",
      "Data portability",
      "Data anonymization",
      "Data classification"
    ],
    "a": 0,
    "e": "Data sovereignty is the principle that information is subject to the laws of the nation where it is stored, which is why regulators can compel in-country residency. Data portability sounds relevant to moving records between clouds, but it is a subject right to receive one's own data in a reusable format, not a location mandate."
  },
  {
    "t": "privacy",
    "x": "A research team publishing hospital outcome statistics irreversibly strips every identifier so no row can ever be traced back to a person, accepting that the original values can never be recovered. Which technique was applied?",
    "o": [
      "Anonymization",
      "Pseudonymization",
      "Tokenization",
      "Obfuscation"
    ],
    "a": 0,
    "e": "Anonymization removes identifying elements permanently, so the data set falls outside most privacy regulation because no individual can be re-identified. Pseudonymization is the strong distractor: it swaps identifiers for stand-in values but keeps a mapping somewhere, so the link can be restored and the data stays regulated."
  },
  {
    "t": "risk-management-strategies",
    "x": "A legacy kiosk in a museum lobby cannot be patched, but it holds no sensitive records and sits on an isolated segment. Leadership signs off that the residual exposure will simply be tolerated with no further spending. Which strategy is this?",
    "o": [
      "Acceptance",
      "Avoidance",
      "Mitigation",
      "Transference"
    ],
    "a": 0,
    "e": "Acknowledging the exposure, documenting the decision, and choosing to spend nothing further is acceptance, and the sign-off is what separates it from simple negligence. Mitigation would require adding a control to shrink the exposure, but the isolated segment already existed and no new safeguard was introduced as part of this decision."
  },
  {
    "t": "risk-management-strategies",
    "x": "After weighing the compliance burden, a bank cancels its planned cryptocurrency custody product outright rather than build the controls that offering would demand. Which strategy did the bank choose?",
    "o": [
      "Avoidance",
      "Acceptance",
      "Mitigation",
      "Transference"
    ],
    "a": 0,
    "e": "Declining to undertake the activity at all eliminates the exposure completely, which is avoidance. Mitigation is the natural runner-up, but mitigation means proceeding with the venture while reducing likelihood or impact, and here the bank walked away from the venture entirely."
  },
  {
    "t": "risk-management-strategies",
    "x": "A sales group needs a legacy browser plugin that violates the hardening baseline. Instead of rewriting the baseline, the security officer records a formally approved, time-limited deviation for that group alone with a scheduled review date. What was granted?",
    "o": [
      "A risk exception",
      "A risk transfer",
      "A compensating control",
      "A corrective control"
    ],
    "a": 0,
    "e": "A narrowly scoped, approved, time-boxed deviation from a published requirement is a risk exception, a documented form of acceptance that keeps the baseline itself intact. A compensating control is tempting, but that would be an alternative safeguard put in place to offset the gap, and none was described here."
  },
  {
    "t": "risk-management-strategies",
    "x": "A logistics firm cannot eliminate the chance of ransomware, so it funds immutable backups, tighter segmentation, and rapid isolation tooling to shrink the damage an outbreak would cause. Which strategy is described?",
    "o": [
      "Mitigation",
      "Acceptance",
      "Exemption",
      "Transference"
    ],
    "a": 0,
    "e": "Investing in controls that lower the likelihood or the impact of an event, while continuing the business activity, is mitigation. Transference is a common wrong pick, but that would mean shifting the financial consequence to another party through insurance or a contract clause, and no third party absorbs the loss here."
  },
  {
    "t": "security-considerations",
    "x": "A hotel chain that accepts card payments must follow rules written by a consortium of payment brands rather than by any government body. Which category of consideration drives that obligation?",
    "o": [
      "Industry requirements",
      "Government regulation",
      "Criminal law statutes",
      "National security policy"
    ],
    "a": 0,
    "e": "Requirements published by a trade body or card-brand consortium are industry considerations: they bind participants through contract and membership, not through legislation. Government regulation is the attractive distractor because the consequences feel similar, but no legislature or agency authored these particular rules."
  },
  {
    "t": "security-considerations",
    "x": "A software vendor selling in one U.S. state must honor breach notification deadlines that differ from those of the neighboring state where its data center sits. Which type of consideration creates this complexity?",
    "o": [
      "Local and regional requirements",
      "National requirements",
      "Global requirements",
      "Industry requirements"
    ],
    "a": 0,
    "e": "Conflicting rules between adjacent states or provinces are local and regional considerations, and they force organizations to satisfy the strictest applicable deadline. National requirements would apply uniformly across the whole country, which is precisely what is missing in this scenario."
  },
  {
    "t": "security-considerations",
    "x": "During litigation, an energy company receives an order requiring it to preserve all mailboxes and chat logs belonging to twelve employees, suspending its normal deletion schedule. Which consideration governs that obligation?",
    "o": [
      "Legal requirements",
      "Industry requirements",
      "Regulatory requirements",
      "Contractual requirements"
    ],
    "a": 0,
    "e": "A court-issued preservation order arises from the judicial process, so it is a legal consideration and it overrides internal retention schedules until lifted. Regulatory requirements are close, but those come from an agency enforcing a statute across an entire sector rather than from a court acting on one specific dispute."
  },
  {
    "t": "security-considerations",
    "x": "A startup with users on four continents finds that each region imposes different rules about moving personal information across borders. Which scope of consideration must its compliance program address?",
    "o": [
      "Global considerations",
      "Local considerations",
      "Industry considerations",
      "Contractual considerations"
    ],
    "a": 0,
    "e": "Operating across multiple countries with competing cross-border transfer rules is a global consideration, and it usually forces regional data handling or approved transfer mechanisms. Local considerations would describe a single municipality or state, which understates a program spanning four continents."
  },
  {
    "t": "security-procedures",
    "x": "An engineer resigns on a Friday. The following Monday the help desk finds her building badge still active, her remote access token still valid, and her name still on an outside vendor admin roster. Which procedure was executed poorly?",
    "o": [
      "Offboarding",
      "Onboarding",
      "Change management",
      "Asset disposal"
    ],
    "a": 0,
    "e": "Revoking physical access, disabling remote access, and removing accounts from third-party services are offboarding steps, and each one was missed here. Asset disposal is a related departure task, but it concerns wiping and reclaiming hardware rather than terminating the credentials that remain live."
  },
  {
    "t": "security-procedures",
    "x": "A security operations center wants every analyst to follow the same ordered steps whenever a ransomware alert fires, from isolating the host through notifying legal counsel. Which artifact captures that ordered sequence?",
    "o": [
      "A playbook",
      "A policy",
      "A standard",
      "A guideline"
    ],
    "a": 0,
    "e": "A playbook is the step-by-step operational script that turns intent into repeatable action during a specific scenario. A policy is the frequent wrong answer because it also carries authority, but it states what must be achieved and why, leaving the ordered mechanics to the playbook."
  },
  {
    "t": "security-procedures",
    "x": "A newly hired nurse receives her account, signs the workstation use terms, completes a mandatory privacy briefing, and is granted role-based entry to the records system on day one. Which procedure is this?",
    "o": [
      "Onboarding",
      "Offboarding",
      "Access recertification",
      "Provisioning review"
    ],
    "a": 0,
    "e": "Account creation, agreement signatures, initial training, and first role assignment are the onboarding steps that establish a new worker in the environment. Access recertification is plausible because it also examines entitlements, but it is a periodic re-validation of existing access for people already employed."
  },
  {
    "t": "security-procedures",
    "x": "A change advisory board declines to approve a database upgrade because the submitter never documented how the environment would be returned to its prior state if the upgrade behaves badly. What is missing?",
    "o": [
      "A backout plan",
      "A maintenance window",
      "An impact analysis",
      "A test procedure"
    ],
    "a": 0,
    "e": "The backout plan is the documented path back to the last known good state, and boards routinely reject changes that lack one. An impact analysis is a strong distractor since it is also required, but it predicts what the change will affect rather than describing how to undo it."
  },
  {
    "t": "user-training",
    "x": "A bank assigns secure coding modules to its developers, wire-fraud modules to its finance staff, and modules on targeted executive impersonation to its leadership. Which approach to instruction does this reflect?",
    "o": [
      "Role-based training",
      "Annual refresher training",
      "Just-in-time training",
      "Computer-based training"
    ],
    "a": 0,
    "e": "Tailoring content to the specific duties and exposure of each job function is role-based training, and it raises relevance far above one generic curriculum. Annual refresher training describes the cadence rather than the targeting, and it could just as easily deliver identical content to everyone."
  },
  {
    "t": "user-training",
    "x": "Employees working from home are told not to discuss account numbers on speakerphone in shared apartments and to use a privacy filter when sitting in coffee shops. That guidance addresses which instruction topic?",
    "o": [
      "Hybrid work environments",
      "Password management",
      "Change management",
      "Removable media handling"
    ],
    "a": 0,
    "e": "Shoulder surfing, overheard conversations, and uncontrolled physical surroundings are the hallmarks of hybrid and remote work guidance. Removable media handling is a neighboring awareness topic, but it deals with drives and portable storage rather than the acoustic and visual exposure of a public workspace."
  },
  {
    "t": "user-training",
    "x": "Ahead of an unannounced merger, staff are instructed to stop posting about new office locations, upcoming travel, and unfamiliar visitors on social platforms. Which instruction subject covers that restriction?",
    "o": [
      "Operational security",
      "Physical security",
      "Account management",
      "Incident response"
    ],
    "a": 0,
    "e": "Preventing adversaries from assembling harmless-looking fragments into a picture of sensitive activity is operational security. Physical security is a tempting choice because offices and visitors are mentioned, but the concern is the leak of information about the facility, not the protection of the facility itself."
  },
  {
    "t": "user-training",
    "x": "Help desk tickets reveal that many workers reuse one memorable phrase across every service and keep it written in a desk drawer notebook. Which instruction subject should the team prioritize alongside rolling out a vault?",
    "o": [
      "Password management",
      "Situational awareness",
      "Insider threat recognition",
      "Reporting and monitoring"
    ],
    "a": 0,
    "e": "Reuse and unsafe storage of credentials are exactly what password management guidance addresses, and pairing it with a vault gives users a workable alternative. Situational awareness is a real training topic, but it teaches staff to notice suspicious circumstances rather than to handle their own credentials safely."
  },
  {
    "t": "business-impact-analysis",
    "x": "Executives at a shipping company agree that the dispatch platform must be back in service within four hours of any outage before contractual penalties begin. Which planning figure does that four-hour limit represent?",
    "o": [
      "Recovery time objective",
      "Recovery point objective",
      "Mean time to repair",
      "Mean time between failures"
    ],
    "a": 0,
    "e": "The maximum tolerable downtime before the business suffers unacceptable harm is the recovery time objective, and it drives how much standby capacity must be funded. Mean time to repair is the tempting alternative, but that is an observed average of past repairs rather than a target the business sets in advance."
  },
  {
    "t": "business-impact-analysis",
    "x": "Over the past year a storage array failed six times, and maintenance logs record a combined 18 hours of repair effort across those six events. What figure should the analyst report for mean time to repair?",
    "o": [
      "3 hours",
      "2 hours",
      "6 hours",
      "24 hours"
    ],
    "a": 0,
    "e": "Mean time to repair is total repair time divided by the number of repairs, so 18 hours across 6 events yields 3 hours. Choosing 6 hours mistakes the count of failures for the average duration, and 24 hours simply adds the two given numbers, which has no meaning here."
  },
  {
    "t": "agreement-types",
    "x": "Two entrepreneurs formally establish a shared venture, spelling out capital contributions, how profits are divided, and the conditions under which either founder may exit. Which agreement type governs that arrangement?",
    "o": [
      "Business partnership agreement",
      "Memorandum of agreement",
      "Statement of work",
      "Master service agreement"
    ],
    "a": 0,
    "e": "A business partnership agreement is the binding instrument that defines ownership stakes, profit sharing, decision rights, and exit terms between partners in a joint venture. A memorandum of agreement is the closest distractor, but it records mutually understood roles between cooperating parties without establishing shared ownership or profit division."
  },
  {
    "t": "audits-and-assessments",
    "x": "Staff at a credit union who report to the board rather than to technology leadership examine whether quarterly access reviews were genuinely performed, then escalate the gaps they find. Which activity is this?",
    "o": [
      "An internal audit",
      "An external audit",
      "A regulatory examination",
      "A vulnerability assessment"
    ],
    "a": 0,
    "e": "Employees of the organization who report outside the chain of command they review are performing an internal audit, and that independence is what makes the findings credible. A regulatory examination is plausible for a credit union, but it would be conducted by a supervising agency rather than by the institution's own staff."
  },
  {
    "t": "compliance",
    "x": "A payment processor that fails its annual card-brand assessment is told it may not process transactions for the affected brand until remediation has been independently verified. Which consequence of falling short is this?",
    "o": [
      "Loss of license",
      "Reputational damage",
      "Contractual fine",
      "Criminal sanction"
    ],
    "a": 0,
    "e": "Being barred from performing the regulated activity until requirements are met is a loss of license or authorization, the most immediate operational consequence a processor can face. A contractual fine is a realistic parallel outcome, but a fine permits continued operation while this penalty stops the business line outright."
  },
  {
    "t": "risk-analysis",
    "x": "Historical records show that a coastal warehouse has flooded three times over the past 30 years. Which value should the analyst enter for the annualized rate of occurrence in the quantitative model?",
    "o": [
      "0.10",
      "0.33",
      "3.00",
      "10.00"
    ],
    "a": 0,
    "e": "The annualized rate of occurrence is events divided by years, so 3 floods over 30 years gives 0.10 per year. Selecting 0.33 divides three into one incorrectly, and 3.00 reports the raw count of floods rather than converting it to an annual frequency."
  },
  {
    "t": "risk-management",
    "x": "An organization keeps a living record listing each identified threat, its likelihood and impact scores, the named individual accountable for it, and the current treatment status. What is that record called?",
    "o": [
      "A risk register",
      "A risk appetite statement",
      "A business impact analysis",
      "A vulnerability report"
    ],
    "a": 0,
    "e": "The risk register is the central, continuously updated inventory of identified risks together with scoring, ownership, and treatment status. A business impact analysis is a reasonable guess since it also produces scores, but it measures the consequences of losing specific processes rather than tracking individual risks and their owners over time."
  },
  {
    "t": "security-policies",
    "x": "A software team is directed to document required peer review, dependency scanning, and threat modeling at each stage from design through release. Which governing document establishes those expectations?",
    "o": [
      "Development lifecycle policy",
      "Incident response policy",
      "Disaster recovery policy",
      "Acceptable use policy"
    ],
    "a": 0,
    "e": "Security requirements attached to each phase of building and releasing software belong in a software development lifecycle policy. An acceptable use policy is a common wrong pick because it also constrains employee behavior, but it governs how workers may use company systems and has nothing to say about build-stage gates."
  },
  {
    "t": "third-party-risk-assessment",
    "x": "Before signing with a payroll platform, a buyer sends a standardized set of written control questions covering encryption, subcontractor use, and breach history, then scores the answers. Which due diligence method is this?",
    "o": [
      "A vendor questionnaire",
      "Continuous monitoring",
      "An independent attestation",
      "A right-to-audit clause"
    ],
    "a": 0,
    "e": "A structured, scored set of written control questions issued to a supplier before contracting is a vendor questionnaire, the standard opening step in third-party due diligence. An independent attestation is a stronger form of evidence, but it is produced by an outside assessor rather than self-reported by the vendor in response to the buyer's questions."
  }
],
}
