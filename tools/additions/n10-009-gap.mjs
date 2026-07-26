// n10-009 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "n10-009",
  questions: [
  {
    "t": "cloud-models",
    "x": "A company subscribes to a hosted email and CRM suite that users reach entirely through a web browser, while the provider maintains the application, runtime, and hardware. Which service model is this?",
    "o": [
      "Software as a Service",
      "Platform as a Service",
      "Infrastructure as a Service",
      "Function as a Service"
    ],
    "a": 0,
    "e": "SaaS delivers a finished application over the network with the vendor managing everything beneath it. IaaS would still require the customer to install and manage the operating system and software."
  },
  {
    "t": "cloud-models",
    "x": "A development team wants a managed environment with a runtime, database, and middleware so they can deploy code without patching servers or operating systems. Which service model fits?",
    "o": [
      "Platform as a Service",
      "Infrastructure as a Service",
      "Software as a Service",
      "Desktop as a Service"
    ],
    "a": 0,
    "e": "PaaS gives developers a ready platform to build and run applications while the provider handles the OS and underlying infrastructure. IaaS would leave the OS and middleware to the customer."
  },
  {
    "t": "wireless-networking",
    "x": "In the 2.4 GHz band in North America, which set of channels is non-overlapping and recommended to reduce co-channel interference among access points?",
    "o": [
      "Channels 1, 6, and 11",
      "Channels 1, 2, and 3",
      "Channels 1, 5, and 9",
      "Channels 2, 7, and 12"
    ],
    "a": 0,
    "e": "The 2.4 GHz band only has room for three non-overlapping 20 MHz channels, which are 1, 6, and 11. Adjacent numbers like 1, 2, and 3 overlap heavily and cause interference."
  },
  {
    "t": "wireless-networking",
    "x": "Which 802.11 standard, marketed as Wi-Fi 6, introduced OFDMA to improve efficiency when many clients share an access point?",
    "o": [
      "802.11ax",
      "802.11ac",
      "802.11n",
      "802.11g"
    ],
    "a": 0,
    "e": "802.11ax (Wi-Fi 6) added OFDMA so an access point can serve multiple clients within a single transmission for better efficiency in dense areas. 802.11ac did not include OFDMA."
  },
  {
    "t": "wireless-networking",
    "x": "An administrator wants to raise the maximum data rate of an 802.11 wireless link between an access point and capable clients. Which two techniques help? Choose TWO.",
    "o": [
      "Bonding channels into a wider channel width",
      "Using multiple spatial streams with MIMO",
      "Lowering the access point transmit power",
      "Forcing every client onto the 2.4 GHz band",
      "Hiding the SSID from beacon frames"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Wider bonded channels carry more data, and MIMO adds parallel spatial streams, both increasing throughput. Lowering power or hiding the SSID does not raise the data rate."
  },
  {
    "t": "optical-fiber",
    "x": "Which fiber connector uses a small form factor with a 1.25 mm ferrule and is common on SFP and SFP+ transceivers?",
    "o": [
      "LC",
      "SC",
      "ST",
      "MPO"
    ],
    "a": 0,
    "e": "The LC connector's compact 1.25 mm ferrule makes it the standard choice for high-density SFP ports. SC uses a larger 2.5 mm ferrule and is not a small form factor connector."
  },
  {
    "t": "optical-fiber",
    "x": "What primarily limits the usable distance of a multimode fiber link compared with single-mode fiber?",
    "o": [
      "Modal dispersion across many light paths",
      "Radio frequency interference in the core",
      "Attenuation caused by the outer jacket",
      "Crosstalk between adjacent strands"
    ],
    "a": 0,
    "e": "Multimode fiber's wider core lets light travel several paths, so modal dispersion smears the signal over distance. Fiber is immune to RFI, so interference is not the limiting factor."
  },
  {
    "t": "classful-subnetting",
    "x": "Under classful addressing rules, what is the default subnet mask for a Class B network?",
    "o": [
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.0",
      "255.255.255.192"
    ],
    "a": 0,
    "e": "Class B uses a default /16 mask of 255.255.0.0, giving 16 network bits. 255.0.0.0 is the Class A default and 255.255.255.0 is the Class C default."
  },
  {
    "t": "classful-subnetting",
    "x": "An IPv4 address begins with a first octet of 200. Under classful rules, which class is it in and what is its default mask?",
    "o": [
      "Class C with a 255.255.255.0 mask",
      "Class B with a 255.255.0.0 mask",
      "Class A with a 255.0.0.0 mask",
      "Class D with no default mask"
    ],
    "a": 0,
    "e": "First octets 192 through 223 fall in Class C, which defaults to a /24 mask of 255.255.255.0. Class B covers first octets 128 through 191."
  },
  {
    "t": "classful-subnetting",
    "x": "Addresses from 224.0.0.0 through 239.255.255.255 fall into which classful category, which is reserved for multicast rather than host addressing?",
    "o": [
      "Class D",
      "Class A",
      "Class C",
      "Class E"
    ],
    "a": 0,
    "e": "Class D covers 224.0.0.0 to 239.255.255.255 and is set aside for multicast groups. Class E, from 240 onward, is reserved for experimental use."
  },
  {
    "t": "zero-trust",
    "x": "Which zero-trust technique divides the network into many small isolated segments so a compromised host cannot move laterally to other systems?",
    "o": [
      "Microsegmentation",
      "VLAN trunking",
      "Port mirroring",
      "Link aggregation"
    ],
    "a": 0,
    "e": "Microsegmentation enforces fine-grained boundaries between workloads so lateral movement is blocked even inside the same subnet. VLAN trunking carries multiple VLANs on one link and does not isolate individual hosts."
  },
  {
    "t": "zero-trust",
    "x": "In a zero-trust architecture, every access attempt passes through a component that checks identity, device health, and policy before permitting or blocking it. What is this component generally called?",
    "o": [
      "A policy enforcement point",
      "A DHCP relay agent",
      "A spanning tree root bridge",
      "A default gateway"
    ],
    "a": 0,
    "e": "The policy enforcement point sits inline and applies the decision to allow or deny each request based on policy. A default gateway simply routes traffic and makes no trust decisions."
  },
  {
    "t": "network-transceivers",
    "x": "Which transceiver form factor is commonly used for a single 40 Gbps or 100 Gbps port by bundling multiple lanes into one module?",
    "o": [
      "QSFP",
      "SFP",
      "GBIC",
      "RJ45 copper module"
    ],
    "a": 0,
    "e": "QSFP is a quad small form-factor pluggable that combines four lanes to reach 40 or 100 Gbps in one port. A standard SFP carries a single 1 Gbps lane."
  },
  {
    "t": "network-transceivers",
    "x": "For a short switch-to-switch connection inside the same rack, which option combines the transceiver and copper cable into one fixed assembly to save cost and power?",
    "o": [
      "A direct attach copper cable",
      "A single-mode patch with LR optics",
      "A fiber media converter",
      "A loopback plug"
    ],
    "a": 0,
    "e": "A direct attach copper cable has the transceiver ends permanently attached, making it cheap and low-power for short runs. Single-mode LR optics are meant for long distances and cost far more."
  },
  {
    "t": "network-architectures",
    "x": "In a three-tier hierarchical campus design, which layer aggregates access switches and applies routing and policy between them?",
    "o": [
      "The distribution layer",
      "The core layer",
      "The access layer",
      "The edge layer"
    ],
    "a": 0,
    "e": "The distribution layer sits between access and core, aggregating uplinks and enforcing routing and policy. The core layer focuses on fast backbone transport, not policy."
  },
  {
    "t": "network-architectures",
    "x": "A small campus merges the core and distribution functions into one layer to cut cost and complexity. What is this design commonly called?",
    "o": [
      "Collapsed core",
      "Full mesh",
      "Spine and leaf",
      "Three-tier hierarchy"
    ],
    "a": 0,
    "e": "A collapsed core combines core and distribution roles into a single layer, which suits smaller networks. A three-tier hierarchy keeps those layers separate."
  },
  {
    "t": "software-defined-networking",
    "x": "In SDN, which interface lets the controller communicate with the physical switches to program their forwarding tables?",
    "o": [
      "The southbound interface",
      "The northbound interface",
      "An east-west interface",
      "The console management port"
    ],
    "a": 0,
    "e": "The southbound interface, using protocols like OpenFlow, pushes instructions from the controller down to the forwarding devices. The northbound interface faces applications and orchestration tools instead."
  },
  {
    "t": "software-defined-networking",
    "x": "In an SDN model, which plane actually forwards packets according to the rules pushed down from the controller?",
    "o": [
      "The data plane",
      "The control plane",
      "The management plane",
      "The application plane"
    ],
    "a": 0,
    "e": "The data plane moves packets based on forwarding entries the controller installs. The control plane makes the decisions but does not move the traffic itself."
  },
  {
    "t": "infrastructure-as-code",
    "x": "A benefit of infrastructure as code is that re-running the same template yields the same end state without creating duplicate objects. What property describes this behavior?",
    "o": [
      "Idempotency",
      "Redundancy",
      "Scalability",
      "Latency"
    ],
    "a": 0,
    "e": "Idempotency means applying a configuration repeatedly produces the same result rather than stacking changes. Redundancy refers to duplicate components for fault tolerance, not repeatable runs."
  },
  {
    "t": "infrastructure-as-code",
    "x": "A team keeps all router and switch configurations in a Git repository managed as code. Which benefit does this MOST directly provide?",
    "o": [
      "A reviewable history of every change with rollback",
      "Faster physical link speeds between switches",
      "Automatic firmware upgrades on all devices",
      "Reduced broadcast traffic on each VLAN"
    ],
    "a": 0,
    "e": "Version control records who changed what and lets the team revert to a known-good state. It does not alter link speed or broadcast traffic, which depend on the hardware and topology."
  },
  {
    "t": "infrastructure-as-code",
    "x": "In infrastructure as code, what does a declarative template specify about the environment?",
    "o": [
      "The desired end state for the tool to reach",
      "The exact sequence of CLI commands to run",
      "The rack and port location of each device",
      "The power draw of each network interface"
    ],
    "a": 0,
    "e": "A declarative template describes the target state and lets the tool figure out the steps to get there. Listing exact commands in order is the imperative style instead."
  },
  {
    "t": "designing-the-cloud",
    "x": "An enterprise wants a private, dedicated circuit from its data center to its cloud provider instead of routing over the public internet. Which solution provides this?",
    "o": [
      "A dedicated cloud direct-connect circuit",
      "A site-to-site IPsec tunnel over the public internet",
      "A browser-based captive portal",
      "A reverse proxy cache"
    ],
    "a": 0,
    "e": "A dedicated cloud interconnect gives a private physical path with predictable performance that never touches the public internet. A site-to-site IPsec tunnel still rides over the public internet."
  },
  {
    "t": "designing-the-cloud",
    "x": "To keep an application available if one facility fails, a cloud architect spreads instances across multiple isolated locations within the same region. What are these locations called?",
    "o": [
      "Availability zones",
      "Edge locations",
      "Subnets",
      "Security groups"
    ],
    "a": 0,
    "e": "Availability zones are physically separate facilities within a region, so a failure in one does not take down the others. A subnet is just an IP range and provides no facility isolation."
  },
  {
    "t": "environmental-factors",
    "x": "A data center manager wants to improve cooling efficiency and airflow around the equipment racks. Which two practices help? Choose TWO.",
    "o": [
      "Arranging racks into hot and cold aisles",
      "Installing blanking panels over empty rack slots",
      "Keeping humidity above 80 percent",
      "Bundling cables so they cover unused vents",
      "Turning off redundant cooling units to save power"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Hot and cold aisle layout separates intake and exhaust air, and blanking panels stop hot air from recirculating through empty slots. High humidity and blocked vents work against cooling."
  },
  {
    "t": "environmental-factors",
    "x": "A technician wears a grounded wrist strap while handling internal switch components on the bench. Which risk is this controlling?",
    "o": [
      "Electrostatic discharge harming the components",
      "Electromagnetic interference on fiber runs",
      "Power surges arriving from the PDU",
      "Condensation forming from high humidity"
    ],
    "a": 0,
    "e": "A grounded wrist strap safely bleeds off static charge so a discharge does not damage sensitive electronics. It does nothing to address EMI, surges, or condensation."
  },
  {
    "t": "vpns",
    "x": "Which VPN configuration sends only corporate-bound traffic through the tunnel while the client's general internet traffic goes out its local connection?",
    "o": [
      "Split tunnel",
      "Full tunnel",
      "Site-to-site tunnel",
      "Transport mode"
    ],
    "a": 0,
    "e": "A split tunnel routes only traffic destined for corporate resources through the VPN and lets everything else exit locally. A full tunnel forces all traffic through the corporate gateway."
  },
  {
    "t": "vpns",
    "x": "Two branch offices need a permanent encrypted link between their entire networks without installing any client software on user devices. Which VPN type fits?",
    "o": [
      "A site-to-site VPN",
      "A remote-access client VPN",
      "A clientless SSL VPN",
      "A host-to-host VPN"
    ],
    "a": 0,
    "e": "A site-to-site VPN joins two networks through their gateways, so end devices need no VPN software. A remote-access client VPN requires software on each user's endpoint."
  },
  {
    "t": "vpns",
    "x": "An administrator is choosing protocols to build an encrypted VPN tunnel between networks. Which two are commonly used for this purpose? Choose TWO.",
    "o": [
      "IPsec",
      "TLS",
      "SNMP",
      "ICMP",
      "ARP"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "IPsec secures site-to-site and remote tunnels, and TLS underpins SSL VPNs, so both encrypt VPN traffic. SNMP, ICMP, and ARP are management and control protocols with no VPN encryption role."
  },
  {
    "t": "network-solutions",
    "x": "Which protocol carries SCSI storage commands over a standard TCP/IP Ethernet network so hosts can reach a SAN without dedicated fiber hardware?",
    "o": [
      "iSCSI",
      "SMB",
      "NFS",
      "FTP"
    ],
    "a": 0,
    "e": "iSCSI encapsulates SCSI block commands inside TCP/IP so ordinary Ethernet can carry SAN traffic. SMB and NFS are file-level protocols, not block storage transports."
  },
  {
    "t": "network-solutions",
    "x": "A storage administrator enables jumbo frames on the dedicated iSCSI network. What is the main purpose of this change?",
    "o": [
      "Raise the MTU so large transfers use fewer packets",
      "Encrypt all traffic between initiator and target",
      "Assign IP addresses to storage targets automatically",
      "Convert block volumes into shared file folders"
    ],
    "a": 0,
    "e": "Jumbo frames increase the MTU so each packet carries more payload, cutting per-packet overhead on big transfers. Jumbo frames do not encrypt data or assign addresses."
  },
  {
    "t": "network-solutions",
    "x": "An architect is selecting transports that present raw block-level storage to servers over a SAN. Which two provide block-level access? Choose TWO.",
    "o": [
      "Fibre Channel",
      "iSCSI",
      "NFS",
      "SMB",
      "HTTP"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Fibre Channel and iSCSI both deliver block-level volumes that appear as local disks to the server. NFS and SMB are file-level protocols that share folders rather than raw blocks."
  },
  {
    "t": "time-protocols",
    "x": "A financial trading network needs sub-microsecond clock synchronization that standard NTP cannot deliver. Which protocol is designed for this level of precision?",
    "o": [
      "Precision Time Protocol",
      "Simple Network Time Protocol",
      "NTP broadcast mode",
      "SNMP polling"
    ],
    "a": 0,
    "e": "Precision Time Protocol uses hardware timestamping to reach sub-microsecond accuracy for demanding environments. Simple Network Time Protocol is a lighter, less accurate variant of NTP."
  },
  {
    "t": "malware",
    "x": "A user installs what looks like a free video converter, but it silently opens a backdoor that lets an attacker control the machine remotely. Which malware type is this?",
    "o": [
      "Trojan",
      "Worm",
      "Ransomware",
      "Rootkit"
    ],
    "a": 0,
    "e": "A Trojan disguises itself as legitimate software to trick the user into running it, then delivers a hidden payload such as a backdoor. A worm is wrong because worms self-propagate without needing a user to install a disguised program."
  },
  {
    "t": "malware",
    "x": "Which of the following are types of malware whose primary purpose is to secretly capture what a user types or does on a system? Choose TWO.",
    "o": [
      "Keylogger",
      "Spyware",
      "Worm",
      "Ransomware",
      "Rootkit"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Keyloggers record keystrokes and spyware quietly gathers user activity and data, both aimed at stealing information. A worm spreads across networks and ransomware encrypts files for extortion, so neither is focused on covert information capture."
  },
  {
    "t": "vlan-hopping",
    "x": "An attacker configures a host to send DTP messages pretending to be a switch, negotiating a trunk link so the host can reach every VLAN. Which VLAN hopping technique is this?",
    "o": [
      "Switch spoofing",
      "Double tagging",
      "ARP spoofing",
      "MAC flooding"
    ],
    "a": 0,
    "e": "Switch spoofing abuses automatic trunk negotiation: the attacker impersonates a switch so the port forms a trunk carrying all VLANs. Double tagging is a different method that embeds two 802.1Q tags and does not rely on forming a trunk."
  },
  {
    "t": "vlan-hopping",
    "x": "A double-tagging VLAN hopping attack against an 802.1Q trunk only succeeds under which specific condition?",
    "o": [
      "The attacker's access VLAN matches the trunk's native VLAN",
      "The trunk link is configured to use ISL rather than 802.1Q tagging",
      "Port security is enabled on the attacker's access port",
      "Dynamic Trunking Protocol has been disabled on the trunk"
    ],
    "a": 0,
    "e": "The first switch strips the outer tag for the native VLAN and forwards the frame with only the inner tag intact, so the attack requires the attacker to sit in the native VLAN. Disabling DTP or enabling port security does not create the condition the attack needs."
  },
  {
    "t": "mac-flooding",
    "x": "During a flooding attack the switch's MAC address table fills completely. How does the switch then handle frames destined for addresses it can no longer store?",
    "o": [
      "It floods those frames out every port in the VLAN, behaving like a hub",
      "It drops all incoming frames until the table frees up space",
      "It forwards those frames only toward the default gateway",
      "It automatically disables the port that is receiving the traffic"
    ],
    "a": 0,
    "e": "With no room to learn or look up destinations, the switch fails open and floods unknown-unicast frames out all ports in the VLAN, which lets the attacker sniff traffic. It does not drop everything or shut its own port down on its own."
  },
  {
    "t": "mac-flooding",
    "x": "A technician sets a switchport port-security violation mode that keeps the port forwarding valid traffic, drops frames from unauthorized MACs, and sends an SNMP trap. Which violation mode is this?",
    "o": [
      "Restrict",
      "Shutdown",
      "Protect",
      "Sticky"
    ],
    "a": 0,
    "e": "Restrict mode discards offending frames while keeping the port up and generates a log or SNMP notification. Protect also drops silently but sends no notification, and shutdown places the port into an err-disabled state."
  },
  {
    "t": "security-rules",
    "x": "A stateless packet-filtering firewall makes its allow or deny decision based on which set of criteria?",
    "o": [
      "Source and destination IP addresses, port numbers, and protocol",
      "Application signatures and the authenticated user's identity",
      "Requested URL categories and downloaded file hashes",
      "Source MAC addresses and 802.1Q VLAN tag values"
    ],
    "a": 0,
    "e": "Stateless filters inspect Layer 3 and Layer 4 header fields such as addresses, ports, and protocol to match traffic. Application signatures and user identity are next-generation firewall features, not fields a basic packet filter evaluates."
  },
  {
    "t": "security-rules",
    "x": "Some administrators add an explicit deny-any rule with logging at the bottom of a rule base even though an implicit deny already blocks unmatched traffic. What is the main reason?",
    "o": [
      "The implicit deny is silent, so an explicit rule logs the dropped packets",
      "An explicit deny rule is processed noticeably faster than the implicit deny",
      "Without it the firewall would otherwise default to permitting all traffic",
      "The implicit deny only applies to inbound traffic and misses outbound"
    ],
    "a": 0,
    "e": "The built-in implicit deny drops unmatched traffic but usually creates no log entries, so admins add an explicit deny-any rule to capture and review what is being blocked. The firewall would still deny unmatched traffic without it, so defaulting to permit is incorrect."
  }
],
}
