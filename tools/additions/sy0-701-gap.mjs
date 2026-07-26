// sy0-701 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "sy0-701",
  questions: [
  {
    "t": "blockchain-technology",
    "x": "A cryptocurrency network has no central authority, yet thousands of independent nodes must agree on which transactions are valid before a new block is committed. Which mechanism lets these mutually distrusting participants reach that agreement?",
    "o": [
      "A consensus mechanism such as proof of work",
      "A trusted certificate authority",
      "A central key escrow service",
      "A load balancer distributing requests"
    ],
    "a": 0,
    "e": "Blockchains use a consensus mechanism, such as proof of work or proof of stake, so distributed nodes agree on the valid ledger without a central authority. A certificate authority is a centralized trust anchor, which is exactly what a blockchain is designed to avoid."
  },
  {
    "t": "blockchain-technology",
    "x": "A public blockchain stores a complete copy of the ledger on every participating node instead of in one database. If some nodes go offline or one operator alters its own copy, the record stays available and correct. Which property provides this resilience?",
    "o": [
      "Decentralized copies stored on every node",
      "A single authoritative master server",
      "Nightly backups to offline media",
      "RAID mirroring on the primary host"
    ],
    "a": 0,
    "e": "Every node holding an independent copy makes the ledger decentralized, so no single failure or tampered copy can take down or rewrite the shared record. A single master server would reintroduce the central point of failure blockchains are built to remove."
  },
  {
    "t": "certificates",
    "x": "A company hosts sites under completely different domain names, including example.com, example.net, and store.example.org, and wants one certificate to protect all of them. Which certificate feature lists several distinct names on a single certificate?",
    "o": [
      "Subject Alternative Name entries",
      "A wildcard covering one domain's subdomains",
      "A self-signed certificate per host",
      "An extended validation marker"
    ],
    "a": 0,
    "e": "Subject Alternative Name lets one certificate carry multiple distinct fully qualified names, even across different domains. A wildcard only covers subdomains of a single domain, so it cannot secure unrelated domain names together."
  },
  {
    "t": "certificates",
    "x": "A browser must confirm in real time that a presented certificate has not been revoked before its expiration date because the private key may have been compromised. Which mechanism lets the browser query the issuer for that live status?",
    "o": [
      "The Online Certificate Status Protocol",
      "A periodically published revocation list",
      "A certificate signing request",
      "A key stretching function"
    ],
    "a": 0,
    "e": "The Online Certificate Status Protocol answers a single certificate's revocation status on demand, giving a real-time result. A revocation list is downloaded in bulk on a schedule, so it can be stale between publications."
  },
  {
    "t": "change-management",
    "x": "A network team wants to apply a core switch update, but policy forbids proceeding until one named individual is formally accountable for the change and authorized to move it forward. Which change management element assigns that accountability?",
    "o": [
      "Ownership of the change",
      "A backout plan",
      "A maintenance window",
      "An application allow list"
    ],
    "a": 0,
    "e": "Assigning an owner establishes who is accountable for and authorized to drive a change through the process. A backout plan only describes how to reverse the change and does not assign responsibility for it."
  },
  {
    "t": "change-management",
    "x": "To limit disruption, an administrator schedules a storage firmware update for Sunday between 2 and 4 a.m., when transaction volume is at its lowest. Defining this approved timeframe for the work is which change management practice?",
    "o": [
      "Setting a maintenance window",
      "Writing a backout plan",
      "Performing an impact analysis",
      "Assigning change ownership"
    ],
    "a": 0,
    "e": "A maintenance window is the pre-approved timeframe during which changes may be performed to minimize impact on users. An impact analysis studies potential effects but does not schedule the work itself."
  },
  {
    "t": "deception-and-disruption",
    "x": "An administrator stands up a single isolated, monitored system that looks vulnerable but serves no production role, so that any connection to it is inherently suspicious. What is this individual decoy system called?",
    "o": [
      "A honeypot",
      "A honeynet",
      "A honeytoken",
      "A jump server"
    ],
    "a": 0,
    "e": "A honeypot is one decoy system deployed to attract and observe attackers. A honeynet is an entire decoy network of such systems, so it does not describe a single host."
  },
  {
    "t": "deception-and-disruption",
    "x": "A security team places a document named executive_salaries_2026.xlsx on a file server; it contains no real data and raises an alert the instant anyone opens it. What decoy artifact is this?",
    "o": [
      "A honeyfile",
      "A honeynet",
      "A honeypot",
      "A data masking rule"
    ],
    "a": 0,
    "e": "A honeyfile is a bait file with no legitimate purpose that alerts defenders whenever it is accessed. A honeypot is a full decoy system rather than a single file placed among real ones."
  },
  {
    "t": "gap-analysis",
    "x": "While conducting a gap analysis, an assessor documents the organization's present security posture and the posture it is required to reach. The analysis then concentrates on identifying what specifically?",
    "o": [
      "The gap between the current and desired states",
      "The residual risk left after all controls",
      "The total cost of ownership for each system",
      "The likelihood assigned to each individual threat"
    ],
    "a": 0,
    "e": "A gap analysis compares where the organization is now against where it needs to be and reports the differences that must be closed. Residual risk is what remains after controls are applied, which is a separate measurement."
  },
  {
    "t": "gap-analysis",
    "x": "After a gap analysis identifies missing controls, which document records each gap together with the planned corrective action, an assigned owner, and a target completion date?",
    "o": [
      "A plan of action and milestones",
      "A business impact analysis",
      "A service level agreement",
      "An acceptable use policy"
    ],
    "a": 0,
    "e": "A plan of action and milestones tracks each identified weakness, the remediation planned, who owns it, and when it is due. A business impact analysis measures the effect of disruptions and does not track remediation tasks."
  },
  {
    "t": "hashing-and-digital-signatures",
    "x": "A researcher discovers that two entirely different input files produce the exact same output from a hashing algorithm. What is this condition called, and why is it dangerous?",
    "o": [
      "A collision, allowing one file to be swapped for another",
      "A salt, adding randomness before a password is hashed",
      "A rainbow table, a precomputed set of hash lookups",
      "A checksum error from a corrupted file transfer"
    ],
    "a": 0,
    "e": "A collision occurs when different inputs share the same hash, breaking the guarantee that a digest uniquely identifies its data and enabling one file to masquerade as another. A salt only adds randomness to password hashing and is unrelated to two files matching."
  },
  {
    "t": "hashing-and-digital-signatures",
    "x": "A password storage scheme deliberately runs its hashing function through many thousands of iterations using algorithms such as bcrypt or PBKDF2. What is the security purpose of this repeated processing?",
    "o": [
      "It slows offline guessing by making each attempt costly",
      "It shortens the resulting digest to save storage",
      "It makes the stored hash reversible on demand",
      "It adds non-repudiation to the stored password"
    ],
    "a": 0,
    "e": "Key stretching runs many iterations so each password guess is expensive, dramatically slowing brute-force and dictionary attacks against stolen hashes. Hashing is one-way, so it never makes the stored value reversible."
  },
  {
    "t": "key-exchange",
    "x": "During a TLS handshake, the client generates a random symmetric session key, encrypts it with the server's public key, and transmits it so only the server's private key can open it. Which type of cryptography protects the session key while it is in transit here?",
    "o": [
      "Asymmetric encryption",
      "Symmetric encryption",
      "Cryptographic hashing",
      "Steganographic hiding"
    ],
    "a": 0,
    "e": "Encrypting the session key with the server's public key so only its private key can decrypt it is asymmetric encryption used for key transport. Symmetric encryption would require the shared key to already exist, which is the very thing being delivered."
  },
  {
    "t": "key-exchange",
    "x": "After two hosts complete their key exchange, they switch to a symmetric cipher such as AES to encrypt the actual session data rather than continuing with the asymmetric algorithm. What is the primary reason for this switch?",
    "o": [
      "Symmetric ciphers process bulk data much faster",
      "Symmetric keys need no protection once created",
      "Asymmetric ciphers cannot encrypt any data at all",
      "Symmetric encryption also provides non-repudiation"
    ],
    "a": 0,
    "e": "Symmetric encryption is far faster and less resource-intensive than asymmetric encryption, so it is preferred for bulk session data once the key is exchanged. Asymmetric encryption can encrypt data but is too slow for large payloads, which is why it is reserved for the exchange itself."
  },
  {
    "t": "non-repudiation",
    "x": "A message authentication code built on a secret key shared between two parties verifies both integrity and authenticity, yet it cannot provide non-repudiation. Why not?",
    "o": [
      "Both parties share the key, so either one could produce it",
      "It relies on a weak internal hashing algorithm",
      "It can be reversed and decrypted into the original message",
      "It protects only part of the message body"
    ],
    "a": 0,
    "e": "Because a shared-key message authentication code can be generated by anyone holding the key, no single party can be uniquely bound to it, so it cannot prove who sent the message. Non-repudiation instead requires a private key held by only one signer, as in a digital signature."
  },
  {
    "t": "non-repudiation",
    "x": "A digital signature delivers non-repudiation precisely because the signing operation relies on a key that only one individual possesses. Which key performs the signing?",
    "o": [
      "The signer's private key",
      "The recipient's public key",
      "A shared symmetric session key",
      "The certificate authority's root key"
    ],
    "a": 0,
    "e": "Signing with the signer's private key, which no one else holds, binds the signature uniquely to that person and provides non-repudiation. The recipient's public key is used to encrypt data to the recipient, not to sign on the sender's behalf."
  },
  {
    "t": "obfuscation",
    "x": "A payment processor replaces each stored card number with a randomly generated surrogate value and keeps the real numbers in a separately secured vault that maps each surrogate back to its card. Which technique is described?",
    "o": [
      "Tokenization",
      "Data masking",
      "Steganography",
      "Salting"
    ],
    "a": 0,
    "e": "Tokenization substitutes a meaningless surrogate for sensitive data and stores the real value separately in a protected vault. Data masking only hides characters in the displayed value and does not swap in a separate reference held elsewhere."
  },
  {
    "t": "obfuscation",
    "x": "A developer passes finished JavaScript through a tool that renames variables to meaningless symbols and strips comments and formatting, making the logic much harder to read and reverse engineer while it still runs identically. Which technique is applied?",
    "o": [
      "Code obfuscation",
      "Symmetric encryption",
      "Tokenization",
      "Digital signing"
    ],
    "a": 0,
    "e": "Obfuscation deliberately makes code difficult for humans to understand while preserving its behavior, which deters reverse engineering. Encryption would render the code unrunnable until decrypted, so it is not what a still-executing script uses."
  },
  {
    "t": "physical-security",
    "x": "A company wants one control that both discourages intrusion after dark and improves the usefulness of its outdoor camera footage by keeping faces and plates visible. Which physical control best meets both goals?",
    "o": [
      "Security lighting",
      "Bollards at the entrance",
      "An access control vestibule",
      "A Faraday cage"
    ],
    "a": 0,
    "e": "Lighting deters intruders who prefer darkness and simultaneously lets cameras capture usable images at night. Bollards stop vehicles but do nothing to improve visibility for surveillance."
  },
  {
    "t": "physical-security",
    "x": "A remote unstaffed site needs controls that will detect an intruder after hours, not merely deter one. Which TWO controls provide detection of an intrusion? Choose TWO.",
    "o": [
      "Motion sensors that alarm on movement",
      "Video surveillance cameras with recording",
      "Concrete vehicle bollards lining the driveway",
      "A perimeter fence around the lot",
      "Warning signage at the gate"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Motion sensors and surveillance cameras actively detect and record an intruder's presence, alerting staff or providing evidence. Bollards, fencing, and signage are deterrent or preventive controls and do not by themselves detect an intrusion."
  },
  {
    "t": "security-controls",
    "x": "After ransomware encrypts several file servers, the team restores the affected data from clean backups to return operations to normal. Which control function does this restoration represent?",
    "o": [
      "A corrective control",
      "A preventive control",
      "A deterrent control",
      "A detective control"
    ],
    "a": 0,
    "e": "A corrective control acts after an incident to restore systems and limit damage, which is exactly what restoring from backup does. A preventive control would have tried to stop the ransomware before it executed."
  },
  {
    "t": "security-controls",
    "x": "A legacy system cannot support the required multifactor authentication, so the organization instead isolates it on a tightly restricted, closely monitored network segment to satisfy the same objective another way. What type of control is this alternative?",
    "o": [
      "A compensating control",
      "A directive control",
      "A physical control",
      "A deterrent control"
    ],
    "a": 0,
    "e": "A compensating control is an alternative measure used when the primary required control is not feasible, meeting the objective by other means. A directive control instructs behavior through policy and would not technically substitute for the missing authentication."
  },
  {
    "t": "technical-change-management",
    "x": "A kernel security patch is installed on a production server, but the fix does not take effect until one more technical step is completed, which briefly interrupts the running services. Which step is required?",
    "o": [
      "Restarting the system to load the patched kernel",
      "Filing a backout plan for the change",
      "Requesting change advisory board approval",
      "Running a fresh vulnerability baseline scan"
    ],
    "a": 0,
    "e": "A kernel patch generally requires a restart so the updated code is actually loaded into memory, a technical change management consideration because of the brief outage. A backout plan is documentation prepared beforehand and does not activate the patch."
  },
  {
    "t": "technical-change-management",
    "x": "After a network team swaps in a new core router and reassigns several VLANs, the physical and logical network diagrams no longer match the live environment. Which technical change management task must be completed to close out the change?",
    "o": [
      "Updating the network documentation and diagrams",
      "Scheduling a second maintenance window",
      "Performing a pre-change impact and dependency analysis",
      "Obtaining initial stakeholder approval"
    ],
    "a": 0,
    "e": "Keeping documentation and diagrams accurate after a change is a required technical task so future work relies on correct information. An impact analysis and stakeholder approval happen before the change, not as part of closing it out."
  },
  {
    "t": "the-cia-triad",
    "x": "A hospital encrypts patient records at rest so that anyone who physically steals the drives cannot read the contents. Which element of the CIA triad does this control primarily protect?",
    "o": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Non-repudiation"
    ],
    "a": 0,
    "e": "Encryption at rest keeps data unreadable to unauthorized parties, which protects confidentiality. Integrity concerns whether data was altered, and non-repudiation is not part of the CIA triad at all."
  },
  {
    "t": "the-cia-triad",
    "x": "Of the following security properties, which one is not a core goal of the CIA triad?",
    "o": [
      "Non-repudiation",
      "Confidentiality",
      "Integrity",
      "Availability"
    ],
    "a": 0,
    "e": "The CIA triad consists of confidentiality, integrity, and availability. Non-repudiation is an important security property but is not one of the three triad goals."
  },
  {
    "t": "zero-trust",
    "x": "In a Zero Trust architecture, which component sits in the data path and actually enforces the decision by permitting or blocking the connection to the requested resource?",
    "o": [
      "The policy enforcement point",
      "The policy engine",
      "The policy administrator",
      "The certificate authority"
    ],
    "a": 0,
    "e": "The policy enforcement point is in the data plane and carries out allow or block actions on the connection. The policy engine only makes the decision in the control plane and does not itself sit in the traffic path."
  },
  {
    "t": "zero-trust",
    "x": "A Zero Trust network is divided into many small, individually isolated segments so that compromising one workload does not let an attacker move freely to the others. Which Zero Trust technique is this?",
    "o": [
      "Microsegmentation",
      "Perfect forward secrecy",
      "Round-robin load balancing",
      "Port mirroring"
    ],
    "a": 0,
    "e": "Microsegmentation isolates workloads into small zones so lateral movement is contained if one is breached. Perfect forward secrecy protects session keys and has nothing to do with segmenting network access."
  },
  {
    "t": "application-attacks",
    "x": "A login form lets a tester type ' OR '1'='1 into the username field and gain access without a valid password because the entry is concatenated directly into a database query. Which attack is this, and what is the primary fix?",
    "o": [
      "SQL injection, fixed with parameterized queries",
      "Cross-site scripting, fixed with output encoding",
      "Directory traversal, fixed with path canonicalization",
      "Buffer overflow, fixed with address space layout randomization"
    ],
    "a": 0,
    "e": "Injecting SQL fragments that alter the query logic is SQL injection, and parameterized queries stop it by separating code from data. Cross-site scripting targets other users' browsers rather than the backend database, so output encoding would not address this flaw."
  },
  {
    "t": "application-attacks",
    "x": "A web application is vulnerable to stored cross-site scripting. Which TWO defenses most directly prevent injected scripts from running in other users' browsers? Choose TWO.",
    "o": [
      "Encoding output before rendering it into the page",
      "Validating and sanitizing user-supplied input",
      "Enabling TLS encryption on the public web server",
      "Adding a CAPTCHA to the submission form",
      "Extending the session inactivity timeout"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Output encoding neutralizes script characters as data is rendered, and input validation rejects or cleans malicious markup before it is stored, together stopping stored cross-site scripting. TLS only encrypts traffic in transit and does nothing to prevent a stored script from executing."
  },
  {
    "t": "buffer-overflows",
    "x": "A program multiplies a user-supplied item count by a fixed record size to size a buffer; an enormous count wraps the result to a tiny number, so the following copy writes far past the undersized allocation. Which flaw enabled this overflow?",
    "o": [
      "An integer overflow",
      "A race condition",
      "A use-after-free",
      "A format string bug"
    ],
    "a": 0,
    "e": "An integer overflow wraps an arithmetic result to a small value, producing an allocation too small for the data that is then copied in. A race condition involves timing between operations and does not explain an undersized buffer from arithmetic wraparound."
  },
  {
    "t": "buffer-overflows",
    "x": "A team wants to keep buffer overflow vulnerabilities out of newly written code from the start. Which TWO practices most directly prevent them? Choose TWO.",
    "o": [
      "Bounds checking on every buffer operation",
      "Using memory-safe languages or safe library functions",
      "Disabling address space layout randomization",
      "Increasing the default thread stack size",
      "Storing all buffers on the heap instead of the stack"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Checking lengths before writing and using memory-safe languages or bounded functions prevent overflows at the source. Disabling address space layout randomization removes a protection, and moving buffers to the heap does not stop an unchecked copy from overflowing."
  },
  {
    "t": "cloud-specific-vulnerabilities",
    "x": "An attacker finds a developer's cloud access key hard-coded in a public code repository and uses it to launch dozens of costly GPU instances for cryptocurrency mining. Which cloud weakness most directly enabled this abuse?",
    "o": [
      "Exposed access credentials",
      "Missing encryption at rest",
      "DNS cache poisoning",
      "A virtual machine escape"
    ],
    "a": 0,
    "e": "A leaked access key gives an attacker direct, authenticated use of the account's resources, which is a credential exposure problem. Missing encryption at rest would risk data confidentiality but would not let an attacker spin up new instances."
  },
  {
    "t": "cloud-specific-vulnerabilities",
    "x": "A team deploying workloads to a public infrastructure-as-a-service provider wants to reduce the most common causes of cloud data exposure. Which TWO practices most directly help? Choose TWO.",
    "o": [
      "Applying least-privilege permissions to identities",
      "Keeping storage buckets private by default",
      "Granting broad wildcard permissions for convenience",
      "Disabling multifactor authentication on service accounts",
      "Committing credentials into the code repository"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Least-privilege access and private-by-default storage remove the two most frequent cloud exposure causes, over-permissioned identities and publicly readable buckets. Wildcard permissions and committing credentials do the opposite by widening access and leaking secrets."
  },
  {
    "t": "common-threat-vectors",
    "x": "During onboarding, a new managed service provider is granted broad remote administrative access to a client's network so it can maintain systems. Attackers later breach the provider and pivot into the client through that trusted connection. Which threat vector does this illustrate?",
    "o": [
      "A supply chain vector through a trusted third-party provider",
      "A removable-media vector using an infected USB drive",
      "A default-credentials vector on an exposed appliance",
      "An unsecure-network vector over open public Wi-Fi"
    ],
    "a": 0,
    "e": "Trusted vendors and managed service providers extend an organization's attack surface, and compromising the provider gives attackers a path into every client. The other options describe unrelated vectors not present in this scenario."
  },
  {
    "t": "common-threat-vectors",
    "x": "A security team is listing ways an attacker could gain initial access to the environment. Which two of the following are threat vectors rather than defensive controls? Choose TWO.",
    "o": [
      "An open service port exposed directly to the internet",
      "A phishing email that carries a malicious link",
      "Enforcing least privilege on user accounts",
      "Requiring multifactor authentication at login",
      "Segmenting the network into isolated zones"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Exposed service ports and phishing messages are avenues attackers use to get in, so they are threat vectors. Least privilege, multifactor authentication, and segmentation are mitigations, not vectors."
  },
  {
    "t": "cross-site-scripting",
    "x": "A search page echoes the visitor's query directly into the results heading. An attacker crafts a link containing script in the query string and emails it to a victim, whose browser runs the script the moment the page loads. Which variant of cross-site scripting is this?",
    "o": [
      "Reflected cross-site scripting",
      "Stored cross-site scripting",
      "DOM-based cross-site scripting",
      "Server-side request forgery"
    ],
    "a": 0,
    "e": "In reflected XSS the malicious script travels in the request and is immediately echoed back in the server's response, so it fires when the victim opens the crafted link. Stored XSS would persist the script on the server, and DOM-based XSS executes entirely in client-side script."
  },
  {
    "t": "cross-site-scripting",
    "x": "A single-page application reads the text after the hash in the URL and writes it into the page using client-side JavaScript with no sanitization, so a crafted fragment executes without the server ever seeing it. Which type of cross-site scripting is this?",
    "o": [
      "DOM-based cross-site scripting",
      "Reflected cross-site scripting",
      "Stored cross-site scripting",
      "Cross-site request forgery"
    ],
    "a": 0,
    "e": "DOM-based XSS occurs when client-side script writes attacker-controlled data into the page's DOM without sanitization, so the payload never reaches the server. Reflected and stored XSS both involve the server processing the input."
  },
  {
    "t": "cryptographic-attacks",
    "x": "An attacker takes advantage of the statistical likelihood that two inputs will share the same hash, finding a collision far faster than testing every possible value. Which cryptographic attack relies on this probability principle?",
    "o": [
      "Birthday attack",
      "Downgrade attack",
      "Brute-force key search",
      "Known-plaintext attack"
    ],
    "a": 0,
    "e": "The birthday attack exploits the birthday paradox to find hash collisions in roughly the square root of the total space, much faster than brute force. A downgrade attack forces weaker protocols, and a known-plaintext attack uses matched plaintext and ciphertext pairs."
  },
  {
    "t": "cryptographic-attacks",
    "x": "Attackers who steal a database of unsalted password hashes reverse them almost instantly using enormous precomputed lookup tables. Which defense specifically defeats these precomputed tables?",
    "o": [
      "Adding a unique random salt to each password before hashing",
      "Increasing the web session idle timeout",
      "Enabling perfect forward secrecy on the server",
      "Switching the server to a longer symmetric key"
    ],
    "a": 0,
    "e": "A unique per-password salt makes every stored hash different, so a single precomputed rainbow table can no longer match many accounts at once. Session timeouts, forward secrecy, and symmetric key length do not affect cracking of stored password hashes."
  },
  {
    "t": "denial-of-service",
    "x": "An attacker sends a rapid stream of connection-opening packets to a server but never completes the final step of the handshake, filling the server's table of half-open connections until it can accept no more. Which attack is described?",
    "o": [
      "SYN flood",
      "DNS amplification",
      "ARP poisoning",
      "Cross-site request forgery"
    ],
    "a": 0,
    "e": "A SYN flood exhausts the target's half-open connection table by never completing the three-way handshake, denying service to legitimate clients. Amplification abuses reflectors for volume, while ARP poisoning targets link-layer address mappings."
  },
  {
    "t": "denial-of-service",
    "x": "A company wants its public web application to stay available even when a massive flood of traffic arrives simultaneously from many sources. Which measure best absorbs and filters that malicious traffic before it reaches the origin server?",
    "o": [
      "A cloud-based DDoS scrubbing and mitigation service",
      "A host-based antivirus scanner on the web server",
      "Full-disk encryption on the database server",
      "A password manager for the administrators"
    ],
    "a": 0,
    "e": "Cloud DDoS mitigation services have the capacity to absorb and scrub volumetric floods upstream of the origin, keeping the application reachable. Antivirus, disk encryption, and password managers address different risks and cannot soak up a flood."
  },
  {
    "t": "dns-attacks",
    "x": "A security team wants assurance that the DNS responses reaching their resolvers were not forged or altered on the way. Which technology adds cryptographic signatures to zone records to provide that integrity guarantee?",
    "o": [
      "DNSSEC",
      "Round-robin DNS",
      "Split-horizon DNS",
      "Dynamic DNS"
    ],
    "a": 0,
    "e": "DNSSEC signs zone data so resolvers can verify that records are authentic and unmodified, defeating forged responses and cache poisoning. Round-robin, split-horizon, and dynamic DNS address load, views, and updates, not authenticity."
  },
  {
    "t": "dns-attacks",
    "x": "An analyst notices a workstation making a steady stream of oddly encoded subdomain lookups to a single external domain, with no matching web browsing to explain them. Which technique is most likely being used to move data out covertly?",
    "o": [
      "DNS tunneling",
      "DNS cache poisoning",
      "A zone transfer",
      "A reverse DNS lookup"
    ],
    "a": 0,
    "e": "DNS tunneling smuggles data inside DNS queries and responses, often as long encoded subdomains, to slip past controls that allow DNS out. Cache poisoning corrupts resolver entries, and a zone transfer copies zone records between servers."
  },
  {
    "t": "hardware-vulnerabilities",
    "x": "A manufacturer releases a critical firmware patch for a widely deployed baseboard management controller after researchers disclose a flaw allowing remote takeover. What is the main security reason to apply firmware updates like this without delay?",
    "o": [
      "Firmware runs beneath the operating system, so its flaws can grant deep, lasting control",
      "Firmware updates mainly deliver new end-user features and interface changes",
      "Firmware sits above the operating system where antivirus already protects it",
      "Firmware defects only affect performance and never create security risk"
    ],
    "a": 0,
    "e": "Because firmware executes below the operating system, an unpatched flaw can give attackers persistent, hard-to-detect control of the device. The other statements misdescribe firmware's role or downplay its security impact."
  },
  {
    "t": "hardware-vulnerabilities",
    "x": "A hospital depends on an imaging device built on an embedded platform the manufacturer will never patch again, yet the device is essential to daily care. Which approach best limits the risk while keeping it in service?",
    "o": [
      "Isolate it on a segmented network with tightly restricted access",
      "Connect it directly to the internet for easier remote support",
      "Grant all clinical staff local administrator rights on it",
      "Turn off its logging so it runs a little faster"
    ],
    "a": 0,
    "e": "When a legacy device cannot be patched, network isolation and strict access control act as compensating controls that shrink its exposure. The other choices increase risk by widening access or removing visibility."
  },
  {
    "t": "hardware-vulnerabilities",
    "x": "A security assessor is sorting findings by category. Which two of the following are hardware vulnerabilities? Choose TWO.",
    "o": [
      "Firmware on a device that no longer receives security updates",
      "A network appliance that has reached end-of-life support",
      "A web form that fails to sanitize script input",
      "A password reused across many personal accounts",
      "A file share whose permissions are set too broadly"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Unpatched firmware and end-of-life appliances are weaknesses in the hardware itself. The script-handling flaw, reused password, and over-broad share permission are application, credential, and configuration issues respectively."
  },
  {
    "t": "impersonation",
    "x": "An employee receives a phone call from someone who claims to be from the internal help desk and insists he must read out his current password so they can clear a mailbox error. Which social engineering technique is the caller using?",
    "o": [
      "Impersonation of a trusted internal role",
      "Watering-hole targeting of a shared website",
      "Dumpster diving for discarded records",
      "Tailgating through a controlled door"
    ],
    "a": 0,
    "e": "The caller is impersonating a trusted help-desk identity to trick the employee into surrendering credentials. Watering-hole attacks compromise popular sites, dumpster diving recovers discarded data, and tailgating is a physical entry technique."
  },
  {
    "t": "impersonation",
    "x": "A finance clerk receives an urgent message that appears to come from the chief executive, demanding an immediate wire transfer to a new supplier while skipping the usual approval steps. Which impersonation-driven attack is this?",
    "o": [
      "Business email compromise",
      "Credential stuffing",
      "SQL injection",
      "Evil twin access point"
    ],
    "a": 0,
    "e": "Business email compromise impersonates a senior executive or trusted partner to pressure staff into fraudulent payments. Credential stuffing reuses leaked passwords, SQL injection targets databases, and an evil twin is a rogue wireless access point."
  },
  {
    "t": "impersonation",
    "x": "To reduce the success of attackers who phone the service desk pretending to be employees who need a password reset, which control is most effective?",
    "o": [
      "Verify the caller through a defined out-of-band identity check before any reset",
      "Reset the password whenever the caller sounds urgent and convincing",
      "Accept the caller once they can state the employee's job title",
      "Publish the reset steps openly so anyone can follow them"
    ],
    "a": 0,
    "e": "Requiring an out-of-band identity verification before a reset stops attackers who merely claim to be an employee. Reacting to urgency, trusting easily known details, or publishing the process all make impersonation easier."
  },
  {
    "t": "indicators-of-compromise",
    "x": "A server that normally sends a few megabytes a day suddenly transfers hundreds of gigabytes over a weekend to an unfamiliar host abroad. Which indicator of compromise best fits this observation?",
    "o": [
      "An unusual spike in outbound data volume",
      "Impossible travel between two logins",
      "A sudden gap in the server's logs",
      "Repeated account lockouts on one user"
    ],
    "a": 0,
    "e": "A large, unexpected outbound transfer to an unknown destination is a classic sign of data exfiltration. Impossible travel, missing logs, and account lockouts are different indicators not shown by this traffic pattern."
  },
  {
    "t": "indicators-of-compromise",
    "x": "During a routine review, administrators discover a new account holding high privileges that no one recalls creating and that maps to no employee or service. Which indicator of compromise does this represent?",
    "o": [
      "Creation of an unauthorized privileged account",
      "Concurrent sessions from a single user",
      "A sudden surge in processor usage",
      "Repeated blocked-content alerts at the proxy"
    ],
    "a": 0,
    "e": "An unexplained privileged account is a strong indicator that an attacker has established persistence. Concurrent sessions, resource spikes, and blocked content are other categories of indicators not described here."
  },
  {
    "t": "malicious-code",
    "x": "Staff arrive one morning to find their documents renamed with an unknown extension and a note demanding cryptocurrency payment to restore access to the files. Which type of malicious code is responsible?",
    "o": [
      "Ransomware",
      "Keylogger",
      "Rootkit",
      "Spyware"
    ],
    "a": 0,
    "e": "Ransomware encrypts or locks files and demands payment for their return, exactly as the ransom note indicates. A keylogger records keystrokes, a rootkit hides an intruder's presence, and spyware quietly gathers information."
  },
  {
    "t": "malicious-code",
    "x": "Soon after one machine is infected, the same malware spreads across a flat network entirely on its own by exploiting a service flaw, with no user ever opening a file or clicking a link. Which classification fits this behavior?",
    "o": [
      "Worm",
      "Trojan",
      "Logic bomb",
      "Ransomware"
    ],
    "a": 0,
    "e": "A worm self-propagates across systems without user interaction, typically by exploiting network vulnerabilities. A trojan needs a user to run it, and a logic bomb waits for a trigger rather than spreading on its own."
  },
  {
    "t": "malicious-code",
    "x": "A disgruntled administrator plants code that runs a check every night and, if his own account is ever removed from the payroll system, deletes critical database tables in retaliation. Which type of malicious code is this?",
    "o": [
      "Logic bomb",
      "Worm",
      "Rootkit",
      "Remote-access trojan"
    ],
    "a": 0,
    "e": "A logic bomb lies dormant until a specific condition is met, then executes its harmful payload, as with the account-removal trigger here. Worms spread, rootkits hide access, and a remote-access trojan gives an attacker interactive control."
  },
  {
    "t": "malicious-updates",
    "x": "Attackers infiltrate a trusted software company's build pipeline and slip a backdoor into a routine product release, which is then digitally signed and delivered to thousands of customers. What makes this kind of attack especially dangerous?",
    "o": [
      "The malicious code arrives inside a trusted, signed update customers already expect",
      "Victims must first visit a suspicious site and disable their antivirus",
      "The backdoor is confined to the vendor and never reaches customers",
      "Signed installers are always quarantined by endpoint protection"
    ],
    "a": 0,
    "e": "Because the tampered update is legitimately signed and pushed through normal channels, customers install it with full trust, giving the attacker wide reach. The other statements describe conditions that do not apply to a trusted-update compromise."
  },
  {
    "t": "malicious-updates",
    "x": "A build process automatically pulls the newest version of an open-source library from a public repository. An attacker publishes a malicious release under a confusingly similar name, and the build ingests it. Which risk does this illustrate?",
    "o": [
      "A software dependency poisoning attack in the supply chain",
      "A volumetric denial-of-service flood",
      "A brute-force attack on a login form",
      "A physical tailgating attempt at the office"
    ],
    "a": 0,
    "e": "Pulling dependencies automatically lets an attacker inject malicious code by publishing a look-alike package that the build trusts, a supply chain risk. Denial of service, brute forcing, and tailgating are unrelated attack types."
  },
  {
    "t": "malicious-updates",
    "x": "An administrator wants to reduce the chance of installing a tampered software or firmware update. Which two practices most directly help? Choose TWO.",
    "o": [
      "Verify the vendor's digital signature or checksum before installing",
      "Deploy the update first to an isolated test environment",
      "Download updates only on weekends to save bandwidth",
      "Disable all future updates to avoid any risk",
      "Rename the update file before running the installer"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Checking a signature or checksum confirms the update is authentic and unaltered, and staging it in a test environment catches problems before wide release. Timing downloads, disabling updates, or renaming files does nothing to detect tampering."
  },
  {
    "t": "memory-injections",
    "x": "A program copies user-supplied input into a fixed-size buffer without checking its length, letting an attacker overwrite adjacent memory and redirect the program's execution. Which vulnerability is being exploited?",
    "o": [
      "Buffer overflow",
      "Cross-site scripting",
      "SQL injection",
      "Directory traversal"
    ],
    "a": 0,
    "e": "A buffer overflow occurs when input exceeds a buffer's bounds and overwrites adjacent memory, potentially hijacking control flow. Cross-site scripting, SQL injection, and directory traversal target the browser, database, and file paths respectively."
  },
  {
    "t": "memory-injections",
    "x": "Malware forces an already running, trusted process to load a rogue library supplied by the attacker, so the hostile code executes within that process's context and permissions. Which technique is this?",
    "o": [
      "DLL injection",
      "SQL injection",
      "Cross-site request forgery",
      "Session hijacking"
    ],
    "a": 0,
    "e": "DLL injection loads an attacker's library into a legitimate process so the malicious code inherits that process's trust and privileges. SQL injection, request forgery, and session hijacking operate on databases, web actions, and active sessions instead."
  },
  {
    "t": "memory-injections",
    "x": "A development team wants to make memory-corruption exploits harder by randomizing where a program's code and data are placed in memory each time it runs. Which protection provides this?",
    "o": [
      "Address space layout randomization",
      "Data loss prevention",
      "Full-disk encryption",
      "Certificate pinning"
    ],
    "a": 0,
    "e": "Address space layout randomization shuffles memory locations so attackers cannot reliably predict the addresses their exploit depends on. Data loss prevention, disk encryption, and certificate pinning address exfiltration, storage, and TLS trust."
  },
  {
    "t": "misconfiguration-vulnerabilities",
    "x": "A company stores customer records in a cloud object-storage bucket that was accidentally left open to public read access, and search engines begin indexing the files. Which category of vulnerability caused this exposure?",
    "o": [
      "A misconfiguration of access permissions",
      "A zero-day exploit in the storage service",
      "An insider deliberately leaking data",
      "A cryptographic downgrade attack"
    ],
    "a": 0,
    "e": "Leaving storage publicly readable by mistake is a misconfiguration, one of the most common causes of cloud data exposure. There is no unknown flaw, deliberate insider, or cipher weakness involved in this accidental setting."
  },
  {
    "t": "misconfiguration-vulnerabilities",
    "x": "A hardening review finds several servers still running legacy management services that no one uses but that remain enabled and reachable on the network. Which action most directly reduces this misconfiguration risk?",
    "o": [
      "Disable and remove the unused services from the servers",
      "Add extra memory so the legacy services respond faster",
      "Rename the built-in administrator account on each server",
      "Shorten the screen-lock timeout on all of the servers"
    ],
    "a": 0,
    "e": "Turning off and removing services that are not needed eliminates unnecessary entry points, directly reducing the attack surface. Adding memory, renaming an account, or adjusting screen locks does not address the exposed services."
  },
  {
    "t": "mitigation-techniques",
    "x": "After a breach spread sideways across a flat network, the security team wants to limit how far a future intrusion could travel between departments. Which mitigation technique addresses this most directly?",
    "o": [
      "Network segmentation",
      "Longer user passwords",
      "More verbose logging",
      "Additional server memory"
    ],
    "a": 0,
    "e": "Segmentation divides the network into isolated zones so a compromise in one area cannot freely reach others, containing lateral movement. Passwords, logging, and hardware capacity do not by themselves stop movement between segments."
  },
  {
    "t": "mitigation-techniques",
    "x": "A review finds that many staff hold administrative rights they never actually use in their daily work. Which principle should guide trimming these permissions down to only what each role truly needs?",
    "o": [
      "Least privilege",
      "Defense in depth",
      "Implicit trust",
      "Security through obscurity"
    ],
    "a": 0,
    "e": "Least privilege grants each user only the access their role requires, reducing what an attacker gains from a compromised account. Defense in depth layers controls, implicit trust is the opposite goal, and obscurity is not access control."
  },
  {
    "t": "mitigation-techniques",
    "x": "An organization keeps being compromised through vulnerabilities for which the vendor released fixes months earlier. Which mitigation technique most directly closes these known holes?",
    "o": [
      "Applying vendor patches promptly through patch management",
      "Deploying additional decoy honeypot systems on the network",
      "Lengthening the user session timeout values in the app",
      "Rotating the office wireless passphrase every single month"
    ],
    "a": 0,
    "e": "Timely patch management removes the very vulnerabilities attackers are exploiting once fixes exist. Honeypots, session timeouts, and Wi-Fi passphrase rotation do not remediate the unpatched software flaws."
  },
  {
    "t": "mobile-device-vulnerabilities",
    "x": "A user installs an application from a third-party website instead of the official app store, bypassing the store's review process. Which mobile risk does this practice introduce?",
    "o": [
      "Sideloaded apps skip store vetting and may carry hidden malware",
      "Sideloading automatically encrypts all of the device's storage",
      "Sideloading enrolls the phone in corporate device management",
      "Sideloading permanently disables the device's cellular radio"
    ],
    "a": 0,
    "e": "Sideloading avoids the app store's malware screening, so a malicious app can reach the device unchecked. The other options describe effects that sideloading does not produce."
  },
  {
    "t": "mobile-device-vulnerabilities",
    "x": "An organization adopts a bring-your-own-device policy and wants to protect corporate data on employees' personal phones without erasing their personal content. Which two capabilities best support this goal? Choose TWO.",
    "o": [
      "Containerization that separates corporate data from personal data",
      "Selective wipe that clears only the corporate container",
      "Disabling the camera on every enrolled device",
      "Requiring each device to be rooted before enrollment",
      "Sharing a single passcode across all managed devices"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Containerization keeps corporate data in a managed space, and selective wipe removes only that space, protecting company data without touching personal content. Disabling cameras, requiring rooting, or sharing passcodes would harm usability or security."
  },
  {
    "t": "on-path-attacks",
    "x": "A user connects to an online banking site, but an attacker positioned between the client and server forces the connection to fall back to unencrypted HTTP and captures the submitted password. Which technique did the attacker use?",
    "o": [
      "SSL stripping",
      "DNS poisoning",
      "Cross-site scripting",
      "Password spraying"
    ],
    "a": 0,
    "e": "SSL stripping downgrades an HTTPS session to plaintext HTTP so an on-path attacker can read data such as credentials. DNS poisoning redirects name lookups but does not by itself strip encryption from an active session."
  },
  {
    "t": "on-path-attacks",
    "x": "A security team wants to ensure that even if an attacker manages to sit between browsers and the company web portal, intercepted traffic cannot be silently downgraded or read. Which measure most directly achieves this?",
    "o": [
      "Enforce HSTS so browsers require HTTPS",
      "Increase the DHCP lease time on the LAN",
      "Disable ICMP echo replies at the firewall",
      "Rotate the wireless preshared key weekly"
    ],
    "a": 0,
    "e": "HSTS forces browsers to use HTTPS and reject downgraded or invalid-certificate connections, so on-path interception yields only encrypted data. Blocking ICMP or changing DHCP leases does nothing to protect the confidentiality of web sessions."
  },
  {
    "t": "operating-system-vulnerabilities",
    "x": "A legacy server runs an operating system that the vendor stopped supporting two years ago, so no new security updates are released for it, yet a business application still requires it. Which action best reduces the risk it poses?",
    "o": [
      "Isolate it on a restricted network segment",
      "Enable automatic updates from the vendor's servers",
      "Install a second antivirus engine alongside the first",
      "Raise the account lockout threshold on the server"
    ],
    "a": 0,
    "e": "An end-of-life operating system receives no patches, so isolating it and limiting its exposure contains the risk until it can be replaced. Automatic updates cannot help because the vendor no longer publishes fixes for that version."
  },
  {
    "t": "operating-system-vulnerabilities",
    "x": "During a hardening review, an analyst is deciding which steps genuinely shrink a file server's operating system attack surface. Which TWO actions directly support that goal? Choose TWO.",
    "o": [
      "Disable services the role does not need",
      "Remove unused default user accounts",
      "Increase the monitor's screen brightness",
      "Extend the DHCP lease duration",
      "Add more RAM to the server"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Disabling unneeded services and removing unused default accounts each eliminate potential entry points, shrinking the attack surface. Adding RAM or changing DHCP leases does not remove any exposed functionality an attacker could target."
  },
  {
    "t": "operating-system-vulnerabilities",
    "x": "A patch that closes a serious operating system flaw is available, but the administrator first applies it to a small group of nonproduction machines and monitors them before a fleet-wide rollout. What is the main purpose of this step?",
    "o": [
      "To catch stability or compatibility problems before wide rollout",
      "To satisfy a regulatory requirement to delay all patches by 30 days",
      "To let attackers reveal whether the flaw is real",
      "To reduce the size of the patch download for other hosts"
    ],
    "a": 0,
    "e": "Testing patches in a controlled group catches stability or application-compatibility problems before they affect the whole fleet. Deliberately delaying patches to observe attackers would leave systems exposed and is not the purpose of a staged rollout."
  },
  {
    "t": "other-social-engineering-attacks",
    "x": "An employee intends to visit a well-known shipping company's website but mistypes the address by one letter and lands on a near-identical page that harvests login details. An attacker registered that misspelled domain on purpose. Which technique is this?",
    "o": [
      "Typosquatting",
      "Session hijacking",
      "Privilege escalation",
      "Rainbow table attack"
    ],
    "a": 0,
    "e": "Typosquatting registers domains that resemble legitimate ones with common misspellings to catch users who mistype a URL. Session hijacking steals an active session token and does not rely on look-alike domain names."
  },
  {
    "t": "other-social-engineering-attacks",
    "x": "A finance clerk receives an urgent email that appears to come from the chief executive, written in the executive's usual style, asking for an immediate wire transfer to a new vendor. No malicious link or attachment is present. Which attack does this best describe?",
    "o": [
      "Business email compromise",
      "Watering hole attack",
      "Bluesnarfing",
      "SQL injection"
    ],
    "a": 0,
    "e": "Business email compromise impersonates a trusted executive or partner to trick staff into transferring funds, often with no malware at all. A watering hole attack instead poisons a website the target frequents, which is not what happened here."
  },
  {
    "t": "physical-attacks",
    "x": "An intruder cuts the cooling supply to a data center, hoping the resulting overheating will force servers to shut down and disrupt operations. Which category of physical attack does this represent?",
    "o": [
      "Environmental attack",
      "Credential harvesting",
      "Deauthentication attack",
      "Directory traversal"
    ],
    "a": 0,
    "e": "Environmental attacks target the surroundings that keep equipment running, such as power and cooling, to cause outages. Deauthentication targets wireless clients and does not involve tampering with facility infrastructure."
  },
  {
    "t": "physical-attacks",
    "x": "After someone tried to ram open a secured server-room door overnight, a facilities team debates which measures actually resist forced physical entry. Which TWO measures most directly help? Choose TWO.",
    "o": [
      "Install a reinforced door and deadbolt",
      "Use tamper-resistant hinges",
      "Increase the minimum password length",
      "Deploy a stricter email spam filter",
      "Schedule more frequent vulnerability scans"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Reinforced doors and tamper-resistant hinges strengthen the physical barrier against someone forcing entry. Password length, spam filtering, and scanning are logical controls that do nothing to stop a physical break-in."
  },
  {
    "t": "race-conditions",
    "x": "An online store lets a shopper apply a single-use promo code. By submitting dozens of checkout requests in the same instant, a customer gets the discount counted many times before the system marks the code as used. Which type of flaw is being exploited?",
    "o": [
      "A race condition",
      "A buffer overflow",
      "Cross-site request forgery",
      "A logic bomb"
    ],
    "a": 0,
    "e": "The exploit depends on timing: many requests act on the code before any of them records it as consumed, which is a race condition. A buffer overflow overruns memory boundaries and is unrelated to concurrent request timing."
  },
  {
    "t": "race-conditions",
    "x": "A developer must ensure that when many threads update the same shared counter at once, the value cannot be corrupted by overlapping operations. Which technique most directly prevents this class of concurrency flaw?",
    "o": [
      "Use locking so one thread writes at a time",
      "Increase the size of the counter variable",
      "Store the counter in a longer-named variable",
      "Run the program with lower CPU priority"
    ],
    "a": 0,
    "e": "Locking or other synchronization serializes access so overlapping updates cannot interleave and corrupt the shared value. Enlarging or renaming the variable does nothing to coordinate simultaneous access."
  },
  {
    "t": "replay-attacks",
    "x": "Which characteristic of a captured network message makes it usable in a replay attack?",
    "o": [
      "It stays valid later with nothing tying it to one use",
      "It is encrypted with a frequently rotating session key",
      "It carries a fresh nonce that changes on every send",
      "It automatically expires within one second of capture"
    ],
    "a": 0,
    "e": "Replay works when a captured message stays acceptable later, which happens when it has no nonce, timestamp, or sequence number binding it to a single use. Messages carrying fresh nonces or short expirations cannot be successfully resubmitted."
  },
  {
    "t": "replay-attacks",
    "x": "An attacker extracts a password hash from a compromised workstation's memory and presents that hash to authenticate to other servers without ever cracking the plaintext password. Which attack, a form of replay, is this?",
    "o": [
      "Pass-the-hash",
      "Dictionary attack",
      "Cross-site scripting",
      "ARP poisoning"
    ],
    "a": 0,
    "e": "Pass-the-hash reuses a captured credential hash to authenticate as the user, replaying stored material rather than recovering the password. A dictionary attack instead guesses plaintext passwords and does not reuse a captured hash."
  },
  {
    "t": "segmentation-and-access-control",
    "x": "A company wants visitors' Wi-Fi devices to reach the internet but never to see internal file servers or printers. Which approach best enforces this separation on the existing network?",
    "o": [
      "Put guest traffic on a separate VLAN with blocking ACLs",
      "Shorten the DHCP lease time for guest devices",
      "Ask guests to sign an acceptable use policy",
      "Assign guests static IP addresses in the server subnet"
    ],
    "a": 0,
    "e": "A dedicated guest VLAN with access control lists keeps visitor devices from routing to internal resources while still allowing internet access. A signed policy or shorter lease does not technically prevent guest devices from reaching internal servers."
  },
  {
    "t": "segmentation-and-access-control",
    "x": "An administrator configures each employee's account so it can reach only the systems and data required for that person's specific job duties, and nothing more. Which access control principle is being applied?",
    "o": [
      "Least privilege",
      "Separation of duties",
      "Security through obscurity",
      "Implicit permit"
    ],
    "a": 0,
    "e": "Least privilege grants each user only the access their role requires, limiting the damage from a compromised account. Separation of duties splits a sensitive task among multiple people and is a different principle."
  },
  {
    "t": "segmentation-and-access-control",
    "x": "A firewall administrator ends every access control list with a rule that blocks any traffic not explicitly permitted by an earlier entry. What is the purpose of this final rule?",
    "o": [
      "To drop any traffic not explicitly permitted",
      "To speed up processing of allowed packets",
      "To log the source port of every allowed session",
      "To translate internal addresses to public ones"
    ],
    "a": 0,
    "e": "A closing deny-all rule ensures anything not specifically allowed is dropped, enforcing a default-deny posture. It does not perform address translation or accelerate processing of permitted traffic."
  },
  {
    "t": "spyware-and-bloatware",
    "x": "A user reports that shortly after installing a free screensaver, an unseen program began recording every keystroke, including passwords, and sending them to an external server. Which type of malware is this?",
    "o": [
      "Spyware",
      "Ransomware",
      "A rootkit bootloader",
      "A denial-of-service tool"
    ],
    "a": 0,
    "e": "Software that secretly records activity such as keystrokes and exfiltrates it is spyware. Ransomware instead encrypts files and demands payment, which does not match the described behavior."
  },
  {
    "t": "spyware-and-bloatware",
    "x": "Before issuing new laptops, an IT team wipes the manufacturer's preinstalled trial programs and utilities and applies a clean corporate image. Which problem does removing that preinstalled software primarily address?",
    "o": [
      "Bloatware that wastes resources and adds risk",
      "A misconfigured default gateway",
      "Weak wireless encryption on the access point",
      "An expired TLS certificate on the mail server"
    ],
    "a": 0,
    "e": "Manufacturer-added bloatware consumes resources and can introduce vulnerabilities, so replacing it with a clean image reduces that risk. Bloatware has nothing to do with gateway settings or the mail server's certificate."
  },
  {
    "t": "sql-injection",
    "x": "An attacker appends a crafted UNION SELECT statement to a vulnerable search field, and the application returns rows from the customer credentials table. What was the attacker's objective in this SQL injection?",
    "o": [
      "Reading data from tables it should not access",
      "Overloading the web server's memory",
      "Encrypting the database files to demand ransom",
      "Spoofing the server's MAC address"
    ],
    "a": 0,
    "e": "A UNION-based injection appends attacker-controlled queries to retrieve data the application never intended to expose, such as credentials. It is not a memory-exhaustion or encryption attack, and it does not alter hardware addresses."
  },
  {
    "t": "sql-injection",
    "x": "Beyond using parameterized queries, a team wants to limit the damage if a SQL injection ever succeeds against their application. Which additional measure best supports that goal?",
    "o": [
      "Run the app's database account with least privilege",
      "Give the application account full database administrator rights",
      "Store the database password in the page source",
      "Disable transport encryption to the database"
    ],
    "a": 0,
    "e": "A least-privilege database account limits what an injection can read or change even if one slips through. Granting the account administrator rights would instead maximize the damage a successful injection could cause."
  },
  {
    "t": "supply-chain-vulnerabilities",
    "x": "A manufacturer discovers that networking gear bought through an unauthorized reseller contains an unexpected chip that was not part of the original design. Which supply chain risk does this illustrate?",
    "o": [
      "Hardware tampering introduced before delivery",
      "A phishing campaign against procurement staff",
      "A brute-force attack on the device password",
      "An expired maintenance contract"
    ],
    "a": 0,
    "e": "An implant or unexpected component added before the equipment reaches the buyer is a hardware supply chain compromise. Phishing and password guessing are attacks on people or credentials, not tampering within the supply chain."
  },
  {
    "t": "supply-chain-vulnerabilities",
    "x": "A development team is choosing controls to reduce the risk that third-party software components introduce vulnerabilities into their product. Which TWO practices best support that goal? Choose TWO.",
    "o": [
      "Check vendor signatures before installing",
      "Maintain a software bill of materials",
      "Automatically trust any digitally labeled update",
      "Disable all logging on build servers",
      "Share signing keys with every supplier"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Verifying vendor signatures and maintaining a software bill of materials help confirm component integrity and quickly identify affected products when a library flaw is disclosed. Blindly trusting labeled updates or sharing signing keys would increase supply chain risk."
  },
  {
    "t": "virtualization-vulnerabilities",
    "x": "An audit of a virtualization platform finds dozens of forgotten virtual machines that nobody patches or monitors, several running outdated software. Which virtualization risk does this describe?",
    "o": [
      "VM sprawl",
      "VM escape",
      "Cross-site scripting",
      "Bluejacking"
    ],
    "a": 0,
    "e": "VM sprawl is the uncontrolled growth of virtual machines that go unmanaged and unpatched, expanding the attack surface. VM escape is a different risk in which code breaks out of a guest into the hypervisor."
  },
  {
    "t": "virtualization-vulnerabilities",
    "x": "On a shared host, one virtual machine is allowed to consume nearly all available CPU and memory, degrading performance for every other guest on the same hardware. Which control most directly prevents this?",
    "o": [
      "Set resource limits and reservations per VM",
      "Disable the host's serial console",
      "Rename the affected virtual machines",
      "Increase the guest operating systems' password length"
    ],
    "a": 0,
    "e": "Setting per-VM resource limits and reservations prevents a single guest from starving its neighbors of CPU and memory. Renaming machines or lengthening passwords does nothing to allocate host resources fairly."
  },
  {
    "t": "virtualization-vulnerabilities",
    "x": "A security review recommends that the hypervisor's web management console be reachable only from a dedicated administrative network rather than from the general corporate LAN. What is the primary benefit of this change?",
    "o": [
      "It limits who can reach a high-value control interface",
      "It increases the number of guests the host can run",
      "It encrypts data at rest inside each virtual machine",
      "It removes the need to patch the guest operating systems"
    ],
    "a": 0,
    "e": "The hypervisor console controls every guest, so restricting it to an isolated admin network limits who can attempt to reach it. This does not encrypt guest data or eliminate the need to patch the guests themselves."
  },
  {
    "t": "viruses-and-worms",
    "x": "A network administrator wants to explain why one piece of malware spread across the entire company overnight while another stayed contained. Which statement correctly distinguishes a worm from a virus?",
    "o": [
      "A worm self-replicates across networks on its own, while a virus needs a host file to be run",
      "A worm requires a user to open an attachment, while a virus spreads with no interaction",
      "A worm can only infect email servers, while a virus only infects databases",
      "A worm encrypts data for ransom, while a virus only displays messages"
    ],
    "a": 0,
    "e": "A worm propagates by itself across networks without needing a host program or user action, whereas a virus attaches to a file and activates only when that file is executed. Neither is limited to a single server type, and self-replication is the defining difference."
  },
  {
    "t": "viruses-and-worms",
    "x": "A finance employee enables editing on a spreadsheet emailed from an unknown sender, and embedded code immediately runs and infects the workstation. Which type of virus most likely executed?",
    "o": [
      "A macro virus",
      "A boot sector virus",
      "A network worm",
      "A hardware root of trust"
    ],
    "a": 0,
    "e": "A macro virus hides in a document's macro code and runs when the user enables content, matching the spreadsheet scenario. A boot sector virus instead infects the disk's startup area and loads before the operating system."
  },
  {
    "t": "watering-hole-attacks",
    "x": "Security analysts determine that a group of researchers were all infected after visiting a legitimate scientific journal website that had been secretly compromised to serve malware. Which attack strategy does this describe?",
    "o": [
      "A watering hole attack",
      "A brute-force attack",
      "A denial-of-service attack",
      "A password-spraying attack"
    ],
    "a": 0,
    "e": "Compromising a trusted site that a specific target group frequents, in order to infect those visitors, is a watering hole attack. A denial-of-service attack seeks to make a service unavailable rather than to infect selective visitors."
  },
  {
    "t": "watering-hole-attacks",
    "x": "Why do attackers often prefer a watering hole approach when targeting employees of a well-trained, security-aware organization?",
    "o": [
      "Victims already trust the legitimate site and rarely suspect it",
      "The site's owner will always share visitor logs with the attacker",
      "It guarantees domain administrator rights on the first visit",
      "It works only against users who have disabled all browsers"
    ],
    "a": 0,
    "e": "A watering hole exploits the trust users place in a familiar, legitimate website, bypassing the suspicion a direct phishing message might raise. It does not automatically grant administrative rights or depend on the site owner cooperating."
  },
  {
    "t": "watering-hole-attacks",
    "x": "An organization cannot control the security of an external industry forum its staff rely on daily. Which endpoint measure best limits the impact if that forum is turned into a watering hole?",
    "o": [
      "Keep browsers and plug-ins patched and protected",
      "Lengthen the corporate account password minimum",
      "Increase the office Wi-Fi transmit power",
      "Disable the screen saver lock timeout"
    ],
    "a": 0,
    "e": "Because the compromise typically exploits browser or plug-in flaws, keeping them patched with active endpoint protection reduces the chance a poisoned site can infect a device. Password length and Wi-Fi power have no bearing on drive-by browser exploitation."
  },
  {
    "t": "wireless-attacks",
    "x": "An attacker floods a wireless network with forged management frames that repeatedly disconnect clients from the access point, disrupting service and forcing devices to reconnect. Which attack is this?",
    "o": [
      "A deauthentication attack",
      "A SQL injection attack",
      "A pass-the-hash attack",
      "A directory traversal attack"
    ],
    "a": 0,
    "e": "Sending spoofed deauthentication management frames knocks clients off the access point, causing disruption and forcing reassociation. SQL injection and directory traversal target applications and file paths, not wireless client sessions."
  },
  {
    "t": "wireless-attacks",
    "x": "Employees report that the office wireless network becomes completely unusable whenever a particular device is switched on nearby, saturating the frequency with radio noise. Which type of wireless attack does this indicate?",
    "o": [
      "RF jamming",
      "Cross-site scripting",
      "Credential stuffing",
      "DNS tunneling"
    ],
    "a": 0,
    "e": "Flooding the wireless spectrum with interfering radio energy so legitimate signals cannot get through is RF jamming, a form of denial of service. Credential stuffing and DNS tunneling do not involve overwhelming the radio frequency itself."
  },
  {
    "t": "zero-day-vulnerabilities",
    "x": "A newly exploited flaw has no signature yet, and the security team is choosing defenses that stand a chance of catching the attack in progress. Which TWO approaches best help here? Choose TWO.",
    "o": [
      "Behavior-based anomaly detection",
      "A defense-in-depth layered architecture",
      "Relying only on signature updates",
      "Waiting for the next quarterly patch cycle",
      "Disabling all endpoint monitoring"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Behavior-based detection and layered defenses can limit or catch novel activity even when no signature exists. Signature-only tools cannot recognize a threat that has no definition yet, so relying on them leaves a gap against zero-days."
  },
  {
    "t": "zero-day-vulnerabilities",
    "x": "A researcher privately reports a previously unknown software flaw to the vendor and agrees to withhold public details until a patch is released. What is the primary security benefit of this coordinated approach?",
    "o": [
      "It shrinks the window attackers have before a fix exists",
      "It guarantees the flaw can never be rediscovered by others",
      "It removes the need for the vendor to test the patch",
      "It automatically compensates the researcher through a regulator"
    ],
    "a": 0,
    "e": "Coordinated disclosure gives the vendor time to develop a fix before details become public, shrinking the exposure window for attackers. It cannot guarantee no one else independently finds the flaw, nor does it replace patch testing."
  }
],
}
