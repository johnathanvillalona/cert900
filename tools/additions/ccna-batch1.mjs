// ccna-200-301 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "ccna-200-301",
  questions: [
  {
    "t": "network-components",
    "x": "Which device makes forwarding decisions based on Layer 3 destination IP addresses and connects separate broadcast domains?",
    "o": [
      "Router",
      "Layer 2 switch",
      "Ethernet hub",
      "Wireless access point"
    ],
    "a": 0,
    "e": "A router forwards packets between networks using destination IP addresses and terminates broadcast domains, while a Layer 2 switch forwards frames within one broadcast domain using MAC addresses."
  },
  {
    "t": "network-components",
    "x": "A network engineer needs a single appliance that tracks traffic state and permits or denies flows between the inside and outside zones. Which device fits?",
    "o": [
      "Next-generation firewall",
      "Layer 2 access switch",
      "PoE injector",
      "Console server"
    ],
    "a": 0,
    "e": "A firewall enforces security policy between zones and tracks connection state, whereas a Layer 2 switch only forwards frames and applies no zone-based inspection."
  },
  {
    "t": "network-components",
    "x": "Which two functions does a wireless LAN controller provide in a Cisco split-MAC deployment? Choose TWO.",
    "o": [
      "Centralized configuration of lightweight access points",
      "RF channel and power assignment for joined APs",
      "DHCP address assignment for all wired hosts",
      "Layer 3 routing between every configured VLAN",
      "Termination of the ISP wide-area network circuit"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A wireless LAN controller centrally configures lightweight access points and dynamically assigns their RF channels and power; it does not route between VLANs, lease host IPs, or terminate the WAN."
  },
  {
    "t": "network-components",
    "x": "Which characteristic distinguishes a Layer 2 switch from an Ethernet hub?",
    "o": [
      "It forwards a frame only out the port toward its destination",
      "It repeats every received bit out all of its other ports",
      "It selects paths for packets using an IP routing table",
      "It leases IP addresses to hosts using a DHCP pool"
    ],
    "a": 0,
    "e": "A switch builds a MAC table and forwards a frame only out the port toward its destination, while a hub is a repeater that sends every received bit out all other ports, forming one collision domain."
  },
  {
    "t": "network-topology-architectures",
    "x": "In a two-tier collapsed core campus design, which two layers are merged into a single tier?",
    "o": [
      "The core and distribution layers",
      "The access and distribution layers",
      "The access and core layers",
      "The WAN and access layers"
    ],
    "a": 0,
    "e": "A collapsed-core, or two-tier, design merges the core and distribution functions into one layer above a separate access layer, lowering cost for smaller campuses."
  },
  {
    "t": "network-topology-architectures",
    "x": "Which statement correctly describes a spine-leaf data center topology?",
    "o": [
      "Every leaf switch connects to every spine switch",
      "Leaf switches connect directly to each other in a ring",
      "Each spine connects to only one leaf switch",
      "Servers attach directly to the spine switches"
    ],
    "a": 0,
    "e": "In a spine-leaf fabric every leaf connects to every spine, giving predictable latency and equal-cost paths; spines never connect to spines and leaves never connect to leaves."
  },
  {
    "t": "network-topology-architectures",
    "x": "Besides the access layer, which two layers make up the classic three-tier hierarchical campus model? Choose TWO.",
    "o": [
      "Distribution layer",
      "Core layer",
      "Spine layer",
      "Leaf layer",
      "Transport layer"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "The three-tier campus model uses access, distribution, and core layers; spine and leaf describe a data-center fabric rather than the campus hierarchy."
  },
  {
    "t": "network-topology-architectures",
    "x": "A small office replaces its on-premises email server with a subscription email service reached over the internet. Which deployment model is this?",
    "o": [
      "A cloud-based service",
      "An on-premises data center",
      "A spine-leaf fabric",
      "A collapsed core design"
    ],
    "a": 0,
    "e": "Consuming an application over the internet from a provider is a cloud deployment that shifts maintenance to the provider, unlike an on-premises server the company hosts and manages itself."
  },
  {
    "t": "interfaces-and-cabling",
    "x": "Which cabling choice supports the longest distance for a 10 Gbps campus backbone link?",
    "o": [
      "Single-mode fiber",
      "Multimode fiber",
      "Cat5e unshielded twisted pair",
      "Cat6a unshielded twisted pair"
    ],
    "a": 0,
    "e": "Single-mode fiber uses a narrow core and laser source to carry signals many kilometers, far beyond multimode fiber or twisted-pair copper, which tops out near 100 meters."
  },
  {
    "t": "interfaces-and-cabling",
    "x": "You are connecting a PC network card to a switch access port. Which Ethernet cable type is specified for this link?",
    "o": [
      "Straight-through cable",
      "Crossover cable",
      "Rollover cable",
      "Coaxial cable"
    ],
    "a": 0,
    "e": "A straight-through cable connects dissimilar devices such as a PC to a switch, a crossover connects like devices, and a rollover is reserved for console access."
  },
  {
    "t": "interfaces-and-cabling",
    "x": "Which two are advantages of fiber-optic cabling compared with twisted-pair copper? Choose TWO.",
    "o": [
      "Immunity to electromagnetic interference",
      "Support for longer transmission distances",
      "Lower material cost per meter of cable",
      "Ability to deliver PoE power to end devices",
      "Simpler and faster termination in the field"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Fiber is immune to electromagnetic interference and spans far greater distances than copper, but it costs more, cannot deliver PoE, and is harder to terminate in the field."
  },
  {
    "t": "interfaces-and-cabling",
    "x": "Which cable connects a laptop USB console adapter to the console port of a Cisco switch for initial setup?",
    "o": [
      "Rollover cable",
      "Crossover cable",
      "Straight-through cable",
      "Single-mode fiber patch"
    ],
    "a": 0,
    "e": "A rollover, or console, cable connects a management station to the console port of a router or switch, unlike the straight-through or crossover cables used for Ethernet data links."
  },
  {
    "t": "interface-cable-issues",
    "x": "A 100 Mbps link shows late collisions on one end and many CRC errors, and throughput is poor. What is the most likely cause?",
    "o": [
      "A duplex mismatch between the two interfaces",
      "A crossover cable used in place of straight-through",
      "An IP address conflict on the local subnet",
      "An access list that is blocking the traffic"
    ],
    "a": 0,
    "e": "Late collisions with rising errors on an otherwise up link are the classic signature of a duplex mismatch, where one side runs full duplex and the other half duplex."
  },
  {
    "t": "interface-cable-issues",
    "x": "In show interfaces output, a steadily increasing CRC and input errors count most directly indicates which problem?",
    "o": [
      "A Layer 1 problem such as a faulty cable or connector",
      "A routing loop causing packets to circulate endlessly",
      "A DHCP scope that has exhausted its address pool",
      "A default gateway missing from the host configuration"
    ],
    "a": 0,
    "e": "CRC and input errors point to Layer 1 problems such as faulty cabling, connectors, or interference corrupting frames, not routing loops or addressing mistakes."
  },
  {
    "t": "interface-cable-issues",
    "x": "Which two show interfaces counters increment when frames are damaged in transit on a copper link? Choose TWO.",
    "o": [
      "CRC errors",
      "Runts",
      "Manually configured MTU values",
      "Administratively down transitions",
      "Configured interface descriptions"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Damaged frames raise the CRC and runt counters on the receiving interface; MTU values, descriptions, and an administrative shutdown are configuration states, not error counters."
  },
  {
    "t": "interface-cable-issues",
    "x": "A router interface reports status up but line protocol down. Which layer is the most likely source of the fault?",
    "o": [
      "The data link layer, often an encapsulation mismatch",
      "The physical layer, often an unplugged cable",
      "The network layer, often an incorrect subnet mask",
      "The application layer, often a DNS resolution failure"
    ],
    "a": 0,
    "e": "Status up with line protocol down means Layer 1 works but Layer 2 is failing, commonly an encapsulation or keepalive mismatch; a physical fault would instead show status down and protocol down."
  },
  {
    "t": "tcp-vs-udp",
    "x": "Which sequence correctly lists the messages of the TCP three-way handshake?",
    "o": [
      "SYN, SYN-ACK, ACK",
      "SYN-ACK, SYN, ACK",
      "ACK, SYN, SYN-ACK",
      "SYN, ACK, FIN"
    ],
    "a": 0,
    "e": "TCP opens a session with SYN, SYN-ACK, then ACK before data flows; FIN and RST are used to close or reset sessions rather than to establish them."
  },
  {
    "t": "tcp-vs-udp",
    "x": "Which characteristic applies to UDP but not to TCP?",
    "o": [
      "It transfers data without session setup or acknowledgments",
      "It guarantees ordered delivery using segment sequence numbers",
      "It uses a sliding window mechanism for end-to-end flow control",
      "It retransmits any segment that is dropped in transit"
    ],
    "a": 0,
    "e": "UDP transfers data without session setup, acknowledgments, sequencing, or retransmission, which suits latency-sensitive traffic like voice, whereas TCP supplies all of those reliability mechanisms."
  },
  {
    "t": "tcp-vs-udp",
    "x": "Which two services typically rely on UDP as their transport protocol? Choose TWO.",
    "o": [
      "DNS name resolution",
      "DHCP address assignment",
      "HTTPS web browsing",
      "SSH remote administration",
      "SMTP mail transfer"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "DNS queries and DHCP both use UDP for speed and low overhead, while HTTPS, SSH, and SMTP depend on the reliable connection-oriented delivery that TCP provides."
  },
  {
    "t": "tcp-vs-udp",
    "x": "Which two features does TCP provide to ensure reliable delivery? Choose TWO.",
    "o": [
      "Acknowledgment of received segments",
      "Retransmission of lost segments",
      "Connectionless best-effort delivery",
      "A fixed 8-byte header with no options",
      "Broadcast delivery to every host"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "TCP acknowledges received segments and retransmits any that are lost to guarantee delivery; connectionless best-effort behavior and the smaller header describe UDP instead."
  },
  {
    "t": "switching-concepts",
    "x": "By what process does a Layer 2 switch populate its forwarding table with host locations?",
    "o": [
      "By recording the source MAC and port of incoming frames",
      "By reading the destination MAC of each frame it forwards",
      "By copying MAC entries from the connected router cache",
      "By assigning MAC addresses from a configured pool"
    ],
    "a": 0,
    "e": "A switch learns by mapping the source MAC of each incoming frame to the port it arrived on, then forwards later frames toward that destination; it never reads IP or DHCP data to do so."
  },
  {
    "t": "switching-concepts",
    "x": "A switch receives a frame whose destination MAC is not in its address table. What does the switch do?",
    "o": [
      "It floods the frame out all ports except the ingress port",
      "It drops the frame and notifies the sending host",
      "It forwards the frame only to the default gateway",
      "It routes the frame using the destination IP address"
    ],
    "a": 0,
    "e": "An unknown unicast is flooded out every port in the VLAN except the ingress port so it can reach the destination; a switch never uses IP addresses to forward Layer 2 frames."
  },
  {
    "t": "switching-concepts",
    "x": "Which two tasks does an Ethernet switch perform at the data link layer? Choose TWO.",
    "o": [
      "Learning MAC addresses to build a forwarding table",
      "Filtering frames to keep local traffic off other ports",
      "Selecting best end-to-end paths using a routing protocol",
      "Assigning IP subnets to connected hosts",
      "Translating private addresses to a public address"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "An Ethernet switch learns MAC addresses and filters or forwards frames accordingly; routing, IP assignment, and address translation are Layer 3 or higher functions it does not perform by default."
  },
  {
    "t": "switching-concepts",
    "x": "Which switching method reads the entire frame and verifies the FCS before forwarding it?",
    "o": [
      "Store-and-forward switching",
      "Cut-through switching",
      "Fragment-free switching",
      "Fast-forward switching"
    ],
    "a": 0,
    "e": "Store-and-forward buffers the entire frame and checks the FCS, discarding errored frames before forwarding; cut-through methods forward before the frame fully arrives and cannot validate the FCS."
  },
  {
    "t": "virtualization-fundamentals",
    "x": "Which statement correctly describes a Type 1 bare-metal hypervisor?",
    "o": [
      "It runs directly on the physical server hardware",
      "It runs as an application on top of a host OS",
      "It requires a container runtime to launch VMs",
      "It provides Layer 3 routing between VLANs"
    ],
    "a": 0,
    "e": "A Type 1 bare-metal hypervisor installs directly on the server hardware for data-center efficiency, while a Type 2 hypervisor runs as an application above an existing host operating system."
  },
  {
    "t": "virtualization-fundamentals",
    "x": "Which statement best describes a virtual machine running under a hypervisor?",
    "o": [
      "A software computer running a guest OS on virtual hardware",
      "A dedicated physical server that runs one application",
      "A logical switch port bound to a single access VLAN",
      "A physical cable linking two separate hypervisor hosts"
    ],
    "a": 0,
    "e": "A virtual machine is a software-defined computer with virtualized CPU, memory, and NICs running its own guest OS, letting many VMs share one physical host under a hypervisor."
  },
  {
    "t": "virtualization-fundamentals",
    "x": "Which two benefits does server virtualization provide in a data center? Choose TWO.",
    "o": [
      "Higher utilization of physical hardware resources",
      "Faster provisioning of new server instances",
      "Elimination of the need for any network switches",
      "Removal of all software licensing requirements",
      "Guaranteed immunity from cabling faults"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Virtualization consolidates many VMs onto fewer hosts, raising hardware utilization and letting new servers spin up in minutes; it does not remove the need for networking, licensing, or sound cabling."
  },
  {
    "t": "wireless-principles",
    "x": "Which set of 2.4 GHz channels is nonoverlapping in North America and chosen to avoid co-channel interference?",
    "o": [
      "Channels 1, 6, and 11",
      "Channels 1, 5, and 9",
      "Channels 2, 7, and 12",
      "Channels 3, 6, and 9"
    ],
    "a": 0,
    "e": "In the 2.4 GHz band only channels 1, 6, and 11 avoid overlap at the standard 20 MHz width, so they are chosen to minimize adjacent-channel and co-channel interference."
  },
  {
    "t": "wireless-principles",
    "x": "What does the SSID identify in a wireless network?",
    "o": [
      "The name of the wireless network that clients associate with",
      "The MAC address burned into the access point radio",
      "The encryption key used to protect the wireless traffic",
      "The channel number on which the access point transmits"
    ],
    "a": 0,
    "e": "The SSID is the human-readable network name a client selects to associate; the BSSID is the AP radio MAC address, and the passphrase and channel are separate parameters."
  },
  {
    "t": "wireless-principles",
    "x": "Which two statements are true about the 5 GHz band compared with the 2.4 GHz band? Choose TWO.",
    "o": [
      "It offers more nonoverlapping channels",
      "It generally provides higher throughput",
      "It always covers a greater physical range",
      "It penetrates building walls more effectively",
      "It is limited to three usable channels"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "The 5 GHz band offers many more nonoverlapping channels and higher data rates, but its shorter wavelength yields less range and weaker wall penetration than 2.4 GHz."
  },
  {
    "t": "ipv4-addressing",
    "x": "Before any subnetting is applied, what is the classful default subnet mask for the address 172.16.45.9?",
    "o": [
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.0",
      "255.255.255.192"
    ],
    "a": 0,
    "e": "172.16.45.9 falls in the Class B first-octet range of 128 to 191, so its classful default mask is 255.255.0.0. The 255.0.0.0 mask is the Class A default and does not apply to this address."
  },
  {
    "t": "ipv4-addressing",
    "x": "An engineer is converting an IPv4 octet from binary. Which dotted-decimal value equals the binary octet 11000000?",
    "o": [
      "192",
      "224",
      "240",
      "128"
    ],
    "a": 0,
    "e": "The bits 11000000 add 128 plus 64 to give 192. The value 224 would be 11100000, which sets one additional high-order bit."
  },
  {
    "t": "ipv4-addressing",
    "x": "A router interface uses the address 192.168.10.75 with mask 255.255.255.0. What is the directed broadcast address of this network?",
    "o": [
      "192.168.10.255",
      "192.168.10.0",
      "192.168.10.254",
      "192.168.10.127"
    ],
    "a": 0,
    "e": "With a /24 mask the network is 192.168.10.0 and setting every host bit to 1 yields the broadcast 192.168.10.255. The value 192.168.10.0 is the network address, not the broadcast."
  },
  {
    "t": "ipv4-addressing",
    "x": "Which two statements correctly describe the structure of a 32-bit IPv4 address? Choose TWO.",
    "o": [
      "It is written as four octets separated by dots",
      "Each octet represents 8 bits of the address",
      "It is 128 bits divided into eight groups",
      "It is always expressed in hexadecimal notation",
      "It reserves the final octet for the gateway"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "IPv4 uses 32 bits shown as four dotted-decimal octets of 8 bits each. The 128-bit eight-group format describes IPv6, and IPv4 is written in decimal rather than hexadecimal."
  },
  {
    "t": "ipv4-addressing",
    "x": "A host is assigned 192.168.5.130 with a /24 mask. Which two facts are true about this address? Choose TWO.",
    "o": [
      "It belongs to the 192.168.5.0 network",
      "Its broadcast address is 192.168.5.255",
      "It is the network address of its subnet",
      "It is an invalid host address",
      "Its default mask is 255.255.0.0"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "With a /24 mask the host 192.168.5.130 sits in the 192.168.5.0 network whose broadcast is 192.168.5.255. It is a valid usable host, not the network number of the subnet."
  },
  {
    "t": "subnetting",
    "x": "A subnet is configured with the mask 255.255.255.192. How many usable host addresses does each subnet provide?",
    "o": [
      "62",
      "64",
      "30",
      "126"
    ],
    "a": 0,
    "e": "A /26 mask leaves 6 host bits, giving 2 to the sixth power minus 2, or 62 usable hosts. The value 64 fails to subtract the network and broadcast addresses."
  },
  {
    "t": "subnetting",
    "x": "A workstation with IP 192.168.1.100 uses a 255.255.255.224 mask. Which subnet does the workstation belong to?",
    "o": [
      "192.168.1.96",
      "192.168.1.64",
      "192.168.1.100",
      "192.168.1.128"
    ],
    "a": 0,
    "e": "A /27 mask creates address blocks of 32, so 192.168.1.100 falls in the 96 to 127 range and its subnet is 192.168.1.96. The value 192.168.1.64 is the previous subnet."
  },
  {
    "t": "subnetting",
    "x": "An administrator writes subnet masks in prefix form. Which prefix length is equivalent to the mask 255.255.255.240?",
    "o": [
      "/28",
      "/26",
      "/27",
      "/29"
    ],
    "a": 0,
    "e": "The mask 255.255.255.240 sets 28 network bits, because the final octet 240 is 11110000 with four ones. A /27 would instead be 255.255.255.224."
  },
  {
    "t": "subnetting",
    "x": "An administrator applies a /30 mask to point-to-point router links. Which two statements are true about each /30 subnet? Choose TWO.",
    "o": [
      "It provides exactly two usable host addresses",
      "It sets the mask to 255.255.255.252",
      "It provides four usable host addresses",
      "It uses the mask 255.255.255.248",
      "It cannot be assigned to serial interfaces"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A /30 leaves 2 host bits, yielding 2 usable addresses, and its mask is 255.255.255.252. The mask 255.255.255.248 is a /29, which supplies 6 usable hosts instead."
  },
  {
    "t": "subnetting",
    "x": "A Class C network is subnetted with the mask 255.255.255.224. How many subnets are created from the original network?",
    "o": [
      "8",
      "6",
      "4",
      "16"
    ],
    "a": 0,
    "e": "Borrowing 3 host bits with a /27 mask yields 2 to the third power, or 8 subnets. The value 6 mistakenly subtracts two subnets, which current IOS does not require."
  },
  {
    "t": "vlsm",
    "x": "When applying VLSM, which prefix length wastes the fewest addresses on a point-to-point WAN link between two routers?",
    "o": [
      "/30",
      "/29",
      "/28",
      "/24"
    ],
    "a": 0,
    "e": "A point-to-point link needs only two host addresses, which a /30 supplies exactly. A /29 would leave four addresses unused on the same link."
  },
  {
    "t": "vlsm",
    "x": "A LAN segment must support 50 attached hosts using VLSM. Which prefix length is the most efficient choice for it?",
    "o": [
      "/26",
      "/25",
      "/27",
      "/24"
    ],
    "a": 0,
    "e": "A /26 provides 62 usable hosts, the smallest subnet that still covers 50 devices. A /27 offers only 30 usable addresses and is too small for the segment."
  },
  {
    "t": "vlsm",
    "x": "A department in a VLSM design requires 25 usable addresses. Which prefix meets the need with the least waste?",
    "o": [
      "/27",
      "/28",
      "/26",
      "/25"
    ],
    "a": 0,
    "e": "A /27 supplies 30 usable hosts, enough for 25 devices with minimal waste. A /28 offers only 14 usable addresses and cannot fit 25 hosts."
  },
  {
    "t": "vlsm",
    "x": "A network engineer plans a VLSM deployment across many segments. Which two conditions must be met for VLSM to work? Choose TWO.",
    "o": [
      "The routing protocol must send the subnet mask in updates",
      "Subnets of different sizes are carved from one address block",
      "Every subnet must use an identical mask length",
      "The design must rely on classful routing protocols",
      "All subnet boundaries must fall on a /24 line"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "VLSM requires a classless routing protocol that carries the mask and lets different-sized subnets come from one block. Requiring identical masks describes fixed-length subnetting, not VLSM."
  },
  {
    "t": "vlsm",
    "x": "An engineer proposes the subnets 192.168.4.0/26 and 192.168.4.32/27 in one VLSM plan. Why is this plan invalid?",
    "o": [
      "The two address ranges overlap each other",
      "The two subnets share one broadcast address",
      "A /27 may not numerically follow a /26",
      "Both subnets need the same default gateway"
    ],
    "a": 0,
    "e": "The /26 spans 192.168.4.0 through 192.168.4.63, which already includes the /27 range of 32 to 63, so the two ranges overlap. Valid VLSM subnets must never overlap."
  },
  {
    "t": "private-ipv4-addresses",
    "x": "A network designer needs an internal address from the reserved private space. Which of these addresses comes from an RFC 1918 range?",
    "o": [
      "10.240.5.6",
      "172.32.5.6",
      "192.169.1.1",
      "11.0.0.1"
    ],
    "a": 0,
    "e": "The 10.0.0.0/8 block is private, so 10.240.5.6 qualifies. The address 172.32.5.6 sits just outside the private 172.16.0.0 to 172.31.255.255 span."
  },
  {
    "t": "private-ipv4-addresses",
    "x": "An administrator documents the private ranges. What is the full private address range defined within the Class B space?",
    "o": [
      "172.16.0.0 to 172.31.255.255",
      "172.16.0.0 to 172.16.255.255",
      "172.0.0.0 to 172.31.255.255",
      "172.16.0.0 to 172.32.255.255"
    ],
    "a": 0,
    "e": "RFC 1918 reserves 172.16.0.0 through 172.31.255.255 as private Class B space. The range stops before 172.32, which is public address space."
  },
  {
    "t": "private-ipv4-addresses",
    "x": "Two separate companies each use the 10.0.0.0/8 block internally without any conflict. Why is this reuse possible?",
    "o": [
      "Private ranges carry no global uniqueness and may be reused",
      "Private addresses are globally unique per company",
      "The 10.0.0.0 block is assigned by an internet registry",
      "NAT is never required for the 10.0.0.0 block"
    ],
    "a": 0,
    "e": "Private addresses have no global uniqueness, so many organizations reuse the same block behind their own NAT boundary. No regional registry ever assigns private blocks."
  },
  {
    "t": "private-ipv4-addresses",
    "x": "An engineer lists the RFC 1918 blocks for a design document. Which two address blocks are reserved for private use? Choose TWO.",
    "o": [
      "192.168.0.0 to 192.168.255.255",
      "10.0.0.0 to 10.255.255.255",
      "169.254.0.0 to 169.254.255.255",
      "224.0.0.0 to 239.255.255.255",
      "127.0.0.0 to 127.255.255.255"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "The 192.168.0.0/16 and 10.0.0.0/8 blocks are private ranges. The 169.254.0.0/16 block is APIPA link-local space, not RFC 1918 private addressing."
  },
  {
    "t": "private-ipv4-addresses",
    "x": "A student is quizzed on how private addressing behaves on the public internet. Which two statements are correct? Choose TWO.",
    "o": [
      "They must be translated by NAT to reach the internet",
      "They are dropped by routers on the public internet",
      "They are assigned by a regional internet registry",
      "They are limited to the 10.0.0.0 block only",
      "They function as multicast group addresses"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Private addresses require NAT for internet access and are discarded by public internet routers. No registry assigns them, and they span three blocks rather than only 10.0.0.0."
  },
  {
    "t": "ipv6-addressing",
    "x": "A student is learning the size of an IPv6 address. How many bits make up one complete IPv6 address?",
    "o": [
      "128",
      "64",
      "32",
      "256"
    ],
    "a": 0,
    "e": "An IPv6 address is 128 bits long, written as eight 16-bit hextets. The 32-bit length describes IPv4 rather than IPv6."
  },
  {
    "t": "ipv6-addressing",
    "x": "Which value is the correctly compressed form of 2001:0db8:0000:0000:0000:0000:0000:0001?",
    "o": [
      "2001:db8::1",
      "2001:db8:0:1",
      "2001:db8::0::1",
      "2001:0db8::1::"
    ],
    "a": 0,
    "e": "Leading zeros drop and one run of all-zero hextets collapses to a double colon, giving 2001:db8::1. Using the double colon twice in one address is not allowed."
  },
  {
    "t": "ipv6-addressing",
    "x": "An instructor asks about the layout of an uncompressed IPv6 address. How many 16-bit groups are present in it?",
    "o": [
      "8",
      "4",
      "16",
      "6"
    ],
    "a": 0,
    "e": "IPv6 divides its 128 bits into eight 16-bit hextets separated by colons. Four groups would account for only 64 bits of the address."
  },
  {
    "t": "ipv6-addressing",
    "x": "A technician is shortening IPv6 addresses by hand. Which two rules apply when writing them in compressed form? Choose TWO.",
    "o": [
      "Leading zeros in a hextet may be omitted",
      "A double colon may appear only once in an address",
      "Trailing zeros in a hextet may be omitted",
      "A double colon may appear twice for clarity",
      "Every hextet must keep four hexadecimal digits"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "You may drop leading zeros and use the double colon a single time to replace consecutive zero hextets. Trailing zeros inside a hextet cannot be dropped, only leading ones."
  },
  {
    "t": "ipv6-addressing",
    "x": "A router builds an IPv6 interface ID with EUI-64. What value is inserted into the middle of the MAC address during this process?",
    "o": [
      "FFFE",
      "FF00",
      "FEFF",
      "FFFF"
    ],
    "a": 0,
    "e": "EUI-64 splits the 48-bit MAC and inserts FFFE in the middle to form a 64-bit interface ID, then flips the seventh bit. FFFF is used in broadcasts, not EUI-64."
  },
  {
    "t": "ipv6-address-types",
    "x": "A router assigns itself an IPv6 address confined to a single link. Which prefix identifies this link-local address?",
    "o": [
      "FE80::/10",
      "FF00::/8",
      "2000::/3",
      "FC00::/7"
    ],
    "a": 0,
    "e": "Link-local addresses always begin with FE80::/10 and stay on a single link. The FF00::/8 prefix marks multicast traffic rather than link-local addressing."
  },
  {
    "t": "ipv6-address-types",
    "x": "A design calls for internet-routable IPv6 addresses. Which range is currently allocated for global unicast addressing?",
    "o": [
      "2000::/3",
      "FE80::/10",
      "FF00::/8",
      "FC00::/7"
    ],
    "a": 0,
    "e": "Global unicast addresses fall under 2000::/3 and are routable across the internet. The FE80::/10 prefix is reserved for link-local addresses only."
  },
  {
    "t": "ipv6-address-types",
    "x": "An organization wants IPv6 addresses that stay inside its own network only. Which prefix is reserved for unique local addresses?",
    "o": [
      "FC00::/7",
      "FE80::/10",
      "2000::/3",
      "FF02::/16"
    ],
    "a": 0,
    "e": "Unique local addresses use the FC00::/7 prefix and are not routed on the public internet. The FE80::/10 prefix is reserved for link-local addressing instead."
  },
  {
    "t": "ipv6-address-types",
    "x": "A trainee reviews how IPv6 categorizes addresses. Which two statements about IPv6 address types are correct? Choose TWO.",
    "o": [
      "A link-local address is required on every IPv6 interface",
      "A global unicast address is routable on the internet",
      "IPv6 relies on broadcast addresses for local delivery",
      "An anycast address is delivered to every node in a group",
      "The unique local prefix is 2000::/3"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Every IPv6 interface needs a link-local address, and global unicast addresses are internet-routable. IPv6 replaces broadcast with multicast, so the broadcast statement is false."
  },
  {
    "t": "ipv6-address-types",
    "x": "An engineer compares IPv6 delivery methods. Which two address types support one-to-many or one-to-nearest delivery? Choose TWO.",
    "o": [
      "Multicast delivers to all members of a group",
      "Anycast delivers to the nearest member of a group",
      "Broadcast delivers to every host on the subnet",
      "Unicast delivers to a single specific interface",
      "Loopback delivers to a distant remote host"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Multicast reaches all members of a group while anycast reaches the nearest one. IPv6 has no broadcast address, and unicast targets only one specific interface."
  },
  {
    "t": "verify-client-ip",
    "x": "A support technician needs a Windows client's addressing details. Which command displays its IPv4 address, subnet mask, and default gateway?",
    "o": [
      "ipconfig",
      "ifconfig",
      "show ip interface brief",
      "netstat -r"
    ],
    "a": 0,
    "e": "The ipconfig command shows a Windows host its address, mask, and gateway. The ifconfig command performs a similar role on older Linux systems, not on Windows."
  },
  {
    "t": "verify-client-ip",
    "x": "A technician runs ipconfig on a client and sees the address 169.254.44.9. What does this result reveal about the client?",
    "o": [
      "The client failed to obtain an address from DHCP",
      "The client received a valid public address",
      "The client is using a static private address",
      "The client has a duplicate default gateway"
    ],
    "a": 0,
    "e": "A 169.254.x.x address is APIPA, assigned automatically when the DHCP request fails. It does not indicate that a valid DHCP lease was received."
  },
  {
    "t": "verify-client-ip",
    "x": "A technician verifies interface addressing from a modern Linux terminal. Which command shows the interface details on that system?",
    "o": [
      "ip address show",
      "ipconfig /all",
      "show running-config",
      "tracert"
    ],
    "a": 0,
    "e": "The ip address show command lists interface addressing on current Linux hosts. The ipconfig command is a Windows tool and is not present on Linux."
  },
  {
    "t": "verify-client-ip",
    "x": "A client holds a valid DHCP lease yet still cannot reach the internet. Which two settings should the technician verify first? Choose TWO.",
    "o": [
      "The default gateway address is correct",
      "The DNS server address is reachable",
      "The MAC address matches the gateway",
      "The subnet broadcast is set to 0.0.0.0",
      "The loopback address is disabled"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A wrong default gateway or an unreachable DNS server both break internet access even with a valid lease. A host never matches its MAC to the gateway address for routing."
  },
  {
    "t": "vlans",
    "x": "An administrator enters vlan 20 from global configuration and then name SALES. What is the immediate result on the switch?",
    "o": [
      "VLAN 20 is created in the local database and receives the name SALES",
      "VLAN 20 is created but the name is ignored until the switch reloads",
      "The switch rejects the name because it exceeds the length limit",
      "VLAN 20 exists only after copy running-config startup-config runs"
    ],
    "a": 0,
    "e": "The vlan command creates the VLAN in the local database and enters VLAN configuration mode, where name applies a label right away. No reload or save is required for the VLAN to exist and be usable."
  },
  {
    "t": "vlans",
    "x": "You must place interface FastEthernet0/5 into VLAN 30 as an untagged data port. Which command pairing accomplishes this correctly?",
    "o": [
      "switchport mode access followed by switchport access vlan 30",
      "switchport mode trunk followed by switchport access vlan 30",
      "switchport voice vlan 30 followed by switchport mode access",
      "switchport access vlan 30 followed by switchport mode dynamic auto"
    ],
    "a": 0,
    "e": "Setting the port to access mode and then assigning access vlan 30 forces untagged membership in VLAN 30. Leaving the port in trunk or dynamic mode means it never behaves as a simple access port."
  },
  {
    "t": "vlans",
    "x": "On a factory-default Catalyst switch, every access port belongs to which VLAN before any configuration is applied?",
    "o": [
      "VLAN 1",
      "VLAN 0",
      "VLAN 1002",
      "VLAN 4094"
    ],
    "a": 0,
    "e": "VLAN 1 is the default VLAN that all ports join out of the box. VLANs 1002 through 1005 are reserved for legacy media, and VLAN 4094 is merely the top of the extended range, not a default."
  },
  {
    "t": "vlans",
    "x": "Which VLAN ID falls inside the extended range that Catalyst switches store separately from the normal range?",
    "o": [
      "2050",
      "1",
      "100",
      "1005"
    ],
    "a": 0,
    "e": "The extended range spans 1006 through 4094, so 2050 qualifies. VLAN 1005 is a reserved value in the normal range, and 1 and 100 are ordinary normal-range VLANs."
  },
  {
    "t": "vlans",
    "x": "Which two statements correctly describe how VLANs change the behavior of a switched Layer 2 network? Choose TWO.",
    "o": [
      "Each VLAN forms its own separate broadcast domain",
      "Hosts in different VLANs need a Layer 3 process to communicate",
      "All VLANs on one switch share a single broadcast domain",
      "A VLAN automatically extends to every switch in the network",
      "VLAN membership is set by the host MAC address by default"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Each VLAN is an isolated broadcast domain, so inter-VLAN traffic must be routed at Layer 3. Membership is set by port assignment by default, and VLANs do not span switches unless trunks carry them."
  },
  {
    "t": "vlans",
    "x": "A technician deleting old VLANs finds that a few refuse to be removed by any operator command. Which two VLANs are reserved and cannot be deleted? Choose TWO.",
    "o": [
      "VLAN 1",
      "VLAN 1002",
      "VLAN 10",
      "VLAN 200",
      "VLAN 999"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "VLAN 1 and the legacy media VLANs 1002 through 1005 are reserved and cannot be deleted. User-created VLANs such as 10, 200, and 999 are removed with the no vlan command."
  },
  {
    "t": "trunking",
    "x": "Where does the IEEE 802.1Q standard insert its four-byte VLAN tag inside an Ethernet frame?",
    "o": [
      "Between the source MAC address and the EtherType field",
      "Immediately after the frame check sequence",
      "Inside the preamble ahead of the destination MAC",
      "Within the payload after the Layer 3 header"
    ],
    "a": 0,
    "e": "The 802.1Q tag is inserted right after the source MAC address and before the Type/Length field. Because the frame changes, the switch recalculates the frame check sequence rather than tagging after it."
  },
  {
    "t": "trunking",
    "x": "How does traffic assigned to the native VLAN traverse an 802.1Q trunk link?",
    "o": [
      "It is forwarded untagged across the trunk",
      "It is forwarded carrying a double 802.1Q tag",
      "It is dropped unless a voice VLAN is present",
      "It is encapsulated with ISL instead of 802.1Q"
    ],
    "a": 0,
    "e": "802.1Q leaves native VLAN frames untagged on the trunk, which is why both ends must agree on the native VLAN. All other VLANs cross the trunk with a tag added."
  },
  {
    "t": "trunking",
    "x": "Which interface command forces a switchport to become a trunk unconditionally, ignoring the neighbor's negotiation state?",
    "o": [
      "switchport mode trunk",
      "switchport mode dynamic auto",
      "switchport mode dynamic desirable",
      "switchport nonegotiate"
    ],
    "a": 0,
    "e": "switchport mode trunk hard-sets the port to trunk regardless of the far end. The dynamic modes rely on DTP negotiation, and nonegotiate only stops DTP frames without choosing a mode."
  },
  {
    "t": "trunking",
    "x": "You want only VLANs 10, 20, and 30 permitted on trunk GigabitEthernet0/1, replacing whatever is currently allowed. Which command does this?",
    "o": [
      "switchport trunk allowed vlan 10,20,30",
      "switchport trunk allowed vlan add 10,20,30",
      "switchport trunk native vlan 10,20,30",
      "switchport access vlan 10,20,30"
    ],
    "a": 0,
    "e": "Without the add keyword the allowed list is overwritten with exactly 10, 20, and 30. Using add would append to the existing list, and native sets the untagged VLAN rather than the permitted set."
  },
  {
    "t": "trunking",
    "x": "A switch logs a native VLAN mismatch reported through CDP on a working trunk. Which two facts describe this situation? Choose TWO.",
    "o": [
      "Both trunk ends should be set to the same native VLAN",
      "Traffic can leak between the two mismatched VLANs",
      "The trunk shuts down and enters the err-disabled state",
      "The mismatch stops CDP from ever forming an adjacency",
      "All tagged VLAN traffic immediately stops crossing the trunk"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A native VLAN mismatch lets untagged frames cross into the wrong VLAN, so both ends must match. CDP still runs and is what detects the problem; the trunk does not err-disable from this alone."
  },
  {
    "t": "trunking",
    "x": "Which two commands let you verify the operational trunking mode and the list of allowed VLANs on a link? Choose TWO.",
    "o": [
      "show interfaces trunk",
      "show interfaces gi0/1 switchport",
      "show vlan brief",
      "show mac address-table dynamic",
      "show ip interface brief"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "show interfaces trunk lists trunking ports with their native and allowed VLANs, and the switchport form shows administrative and operational mode per port. The other commands report access assignments, MAC entries, or IP status."
  },
  {
    "t": "inter-vlan-routing",
    "x": "On a router-on-a-stick subinterface serving VLAN 40, which command applies the 802.1Q tag before you assign the IP address?",
    "o": [
      "encapsulation dot1Q 40",
      "switchport trunk encapsulation dot1q",
      "encapsulation isl 40",
      "dot1q native vlan 40"
    ],
    "a": 0,
    "e": "On a router subinterface, encapsulation dot1Q 40 binds the subinterface to VLAN 40 so it can tag and untag frames. The switchport form is a switch command, and ISL is a deprecated Cisco encapsulation."
  },
  {
    "t": "inter-vlan-routing",
    "x": "For a Layer 3 switch to route between VLANs using switched virtual interfaces, which global command must be enabled first?",
    "o": [
      "ip routing",
      "ip cef distributed",
      "switchport routing enable",
      "no switchport global"
    ],
    "a": 0,
    "e": "ip routing turns on the Layer 3 forwarding process that lets SVIs route between VLANs. The other options are either invalid or unrelated to enabling multilayer routing."
  },
  {
    "t": "inter-vlan-routing",
    "x": "A router uses a single physical link to a switch to route three VLANs. How must the switch port facing the router be configured?",
    "o": [
      "As a trunk carrying all three VLANs",
      "As an access port in the native VLAN",
      "As a routed port with no switchport",
      "As an EtherChannel bundle to the router"
    ],
    "a": 0,
    "e": "Router-on-a-stick needs the switch port set as a trunk so all three tagged VLANs reach the router subinterfaces. An access port would carry only one VLAN, defeating the design."
  },
  {
    "t": "inter-vlan-routing",
    "x": "A switched virtual interface stays down on a multilayer switch. Which two conditions must be satisfied for that SVI to come up? Choose TWO.",
    "o": [
      "The matching VLAN must exist in the active VLAN database",
      "At least one port in that VLAN must be up and forwarding",
      "The SVI must be mapped to a physical port with a cable",
      "Spanning tree must be disabled for that VLAN",
      "The switch must have a default gateway configured"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "An SVI comes up only when its VLAN exists and at least one access or trunk member port for that VLAN is up. SVIs are logical, so they are not tied to a single cabled port and do not require STP to be off."
  },
  {
    "t": "inter-vlan-routing",
    "x": "Compared with router-on-a-stick, which two benefits does inter-VLAN routing on a Layer 3 switch provide? Choose TWO.",
    "o": [
      "Higher forwarding throughput handled by hardware ASICs",
      "No single trunk link acting as a traffic bottleneck",
      "It removes the need for any IP addressing on VLANs",
      "It eliminates all broadcast domains on the switch",
      "It lets multiple VLANs share one IP subnet"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A Layer 3 switch routes in hardware and avoids funneling all VLAN traffic through one router uplink. Each VLAN still needs its own subnet and gateway, and VLANs remain separate broadcast domains."
  },
  {
    "t": "dtp-vtp",
    "x": "Which command stops a switchport from sending Dynamic Trunking Protocol frames while it stays configured as a trunk?",
    "o": [
      "switchport nonegotiate",
      "switchport mode access",
      "switchport mode dynamic auto",
      "no cdp enable"
    ],
    "a": 0,
    "e": "switchport nonegotiate disables DTP so the port stops trying to negotiate, which is useful on a hard-set trunk. Access mode would drop trunking, dynamic auto keeps DTP active, and no cdp enable affects CDP."
  },
  {
    "t": "dtp-vtp",
    "x": "In which VTP mode does a switch forward advertisements and sync its database yet cannot create, change, or delete VLANs locally?",
    "o": [
      "Client",
      "Server",
      "Transparent",
      "Off"
    ],
    "a": 0,
    "e": "A VTP client applies and relays advertisements but cannot edit VLANs itself. Servers can edit VLANs, transparent switches edit only their own local database, and off switches do not process VTP at all."
  },
  {
    "t": "dtp-vtp",
    "x": "How does a switch running in VTP transparent mode treat VLAN advertisements it receives on a trunk?",
    "o": [
      "It forwards them to neighbors but does not apply them",
      "It applies them and overwrites its own VLAN database",
      "It drops them and tears the trunk link down",
      "It applies them only when its revision number is higher"
    ],
    "a": 0,
    "e": "A transparent switch passes version 2 advertisements along to other switches without syncing its own database. It keeps its locally defined VLANs and ignores the domain revision entirely."
  },
  {
    "t": "dtp-vtp",
    "x": "Two directly connected switchports are both left at the default dynamic auto setting. What operational state will the link reach?",
    "o": [
      "It stays an access port because neither side initiates",
      "It becomes a trunk because both sides agree to trunk",
      "It flips between access and trunk every 30 seconds",
      "It enters err-disabled from a negotiation loop"
    ],
    "a": 0,
    "e": "Two auto ports both wait for the other to start trunking, so the link stays access. At least one side must be desirable or a hard-set trunk for a trunk to form."
  },
  {
    "t": "dtp-vtp",
    "x": "Which two statements about VTP configuration revision numbers are accurate when you add a switch to an existing domain? Choose TWO.",
    "o": [
      "A switch with a higher revision can overwrite the domain VLAN database",
      "Changing the VTP domain name resets the revision number to zero",
      "The revision number increases only after the switch reloads",
      "Client switches always ignore a higher revision number",
      "The revision number is carried inside CDP messages"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A higher revision number wins and can wipe out existing VLANs, which is the classic VTP hazard. Renaming the domain zeroes the revision; it increments on VLAN edits, not reloads, and rides in VTP frames not CDP."
  },
  {
    "t": "cdp-lldp",
    "x": "An engineer wants a discovery protocol that runs between Cisco devices at Layer 2 and is enabled by default. Which protocol fits?",
    "o": [
      "Cisco Discovery Protocol",
      "Link Layer Discovery Protocol",
      "Spanning Tree Protocol",
      "Address Resolution Protocol"
    ],
    "a": 0,
    "e": "CDP is the Cisco-proprietary Layer 2 discovery protocol enabled by default. LLDP is the open standard but is off by default, while STP and ARP serve different purposes entirely."
  },
  {
    "t": "cdp-lldp",
    "x": "LLDP is disabled by default on a Catalyst switch. Which global command activates it across the entire device?",
    "o": [
      "lldp run",
      "cdp run",
      "lldp transmit",
      "lldp receive"
    ],
    "a": 0,
    "e": "lldp run turns LLDP on globally for the switch. cdp run enables the wrong protocol, and lldp transmit or receive are per-interface controls rather than the global switch."
  },
  {
    "t": "cdp-lldp",
    "x": "Which command displays the IP address and IOS version of a directly connected Cisco neighbor learned by discovery?",
    "o": [
      "show cdp neighbors detail",
      "show cdp neighbors",
      "show cdp interface",
      "show cdp traffic"
    ],
    "a": 0,
    "e": "show cdp neighbors detail adds the neighbor management address and software version. The plain neighbors view omits those fields, while interface and traffic report local port and counter data."
  },
  {
    "t": "cdp-lldp",
    "x": "Which two characteristics set LLDP apart from CDP in a multivendor environment? Choose TWO.",
    "o": [
      "LLDP is defined by the IEEE 802.1AB standard",
      "LLDP transmit and receive are controlled separately",
      "LLDP is proprietary to Cisco hardware only",
      "LLDP runs at Layer 3 using UDP port 646",
      "LLDP removes the need to run spanning tree"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "LLDP is the open IEEE 802.1AB standard and lets you enable transmit and receive independently per port. It is not Cisco-proprietary, operates at Layer 2, and has nothing to do with loop prevention."
  },
  {
    "t": "cdp-lldp",
    "x": "To reduce discovery-protocol exposure on an internet-facing interface, which two commands limit the CDP information the switch advertises? Choose TWO.",
    "o": [
      "no cdp run",
      "no cdp enable",
      "no lldp run",
      "no ip domain-lookup",
      "no service config"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "no cdp run disables CDP globally, while no cdp enable turns it off on a single interface for a targeted fix. no lldp run affects LLDP instead, and the other two commands are unrelated to discovery."
  },
  {
    "t": "etherchannel",
    "x": "One switch has its port channel set to LACP active. Which mode on the neighboring switch will successfully bring up the bundle?",
    "o": [
      "Passive",
      "Auto",
      "Desirable",
      "On with no protocol"
    ],
    "a": 0,
    "e": "LACP active pairs with either active or passive on the far end, so passive forms the channel. Auto and desirable are PAgP keywords, and on skips negotiation entirely, so none of those bundle with LACP active."
  },
  {
    "t": "etherchannel",
    "x": "Which EtherChannel negotiation protocol is Cisco proprietary and uses the keywords auto and desirable?",
    "o": [
      "Port Aggregation Protocol",
      "Link Aggregation Control Protocol",
      "Spanning Tree Protocol",
      "Hot Standby Router Protocol"
    ],
    "a": 0,
    "e": "PAgP is the Cisco-proprietary protocol whose modes are auto and desirable. LACP is the open standard using active and passive, and STP and HSRP are unrelated to link bundling."
  },
  {
    "t": "etherchannel",
    "x": "Which interface command bundles a port into a channel statically with no negotiation protocol running?",
    "o": [
      "channel-group 1 mode on",
      "channel-group 1 mode active",
      "channel-group 1 mode desirable",
      "channel-group 1 mode passive"
    ],
    "a": 0,
    "e": "mode on forces the port into the channel without LACP or PAgP frames. active and passive use LACP, and desirable uses PAgP, so all three of those negotiate rather than bundling statically."
  },
  {
    "t": "etherchannel",
    "x": "An EtherChannel fails to bundle two links between switches. Which mismatch most commonly prevents the member ports from joining?",
    "o": [
      "Different speed or duplex settings on the member ports",
      "Different hostnames configured on the two switches",
      "Different management IP addresses on the switches",
      "Different SNMP community strings on the switches"
    ],
    "a": 0,
    "e": "Member ports must match speed, duplex, and VLAN or trunk settings, so a speed or duplex difference blocks bundling. Hostnames, management IPs, and SNMP strings have no effect on channel formation."
  },
  {
    "t": "etherchannel",
    "x": "Which command shows the load-balancing hash method that an EtherChannel currently uses to distribute traffic?",
    "o": [
      "show etherchannel load-balance",
      "show etherchannel summary",
      "show etherchannel port-channel",
      "show spanning-tree summary"
    ],
    "a": 0,
    "e": "show etherchannel load-balance reports the current hashing method such as source and destination IP. The summary and port-channel views show member status, and the STP command is unrelated."
  },
  {
    "t": "etherchannel",
    "x": "Which two channel-group mode combinations will successfully establish an EtherChannel between two switches? Choose TWO.",
    "o": [
      "LACP active on one side and LACP passive on the other",
      "PAgP desirable on one side and PAgP auto on the other",
      "LACP active on one side and PAgP desirable on the other",
      "PAgP auto on one side paired with PAgP auto on the other",
      "LACP passive on one side paired with LACP passive on the other"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Active pairs with passive under LACP, and desirable pairs with auto under PAgP, so both bundle. Mixing LACP with PAgP fails, and auto-auto or passive-passive leave neither side initiating."
  },
  {
    "t": "spanning-tree",
    "x": "Four switches run 802.1D spanning tree with default settings. Which value decides which switch becomes the root bridge?",
    "o": [
      "The lowest bridge ID, formed from priority plus MAC address",
      "The highest MAC address value found on any switch",
      "The switch that owns the greatest number of ports",
      "The device with the lowest configured IOS version"
    ],
    "a": 0,
    "e": "The root bridge is the switch advertising the lowest bridge ID, which is the priority prepended to the switch MAC address; the MAC address only breaks a tie when priorities match, so a highest MAC would not win."
  },
  {
    "t": "spanning-tree",
    "x": "A switch has never had its spanning-tree priority changed by an administrator. What is the default bridge priority in its bridge ID?",
    "o": [
      "32768",
      "0",
      "4096",
      "65535"
    ],
    "a": 0,
    "e": "The default 802.1D bridge priority is 32768; priority is only configurable in increments of 4096, so 4096 is a valid value but not the default, and 65535 exceeds the allowed maximum."
  },
  {
    "t": "spanning-tree",
    "x": "Using the classic IEEE 802.1D short cost table, what path cost does spanning tree assign to a 100 Mbps Fast Ethernet link?",
    "o": [
      "19",
      "4",
      "100",
      "2"
    ],
    "a": 0,
    "e": "The 802.1D short cost for a 100 Mbps link is 19, while 4 represents 1 Gbps and 2 represents 10 Gbps; the value 100 belongs to a slower 10 Mbps link, not to Fast Ethernet."
  },
  {
    "t": "spanning-tree",
    "x": "On a non-root switch running spanning tree, how many root ports can be active toward the root bridge at one time?",
    "o": [
      "Exactly one root port, the lowest-cost path to root",
      "One root port for every VLAN carried on a trunk",
      "One root port on each directly connected segment",
      "As many root ports as the switch has active uplinks"
    ],
    "a": 0,
    "e": "Each non-root switch elects a single root port, the port with the lowest cumulative cost toward the root bridge; other upstream ports become alternate or designated, so simultaneous multiple root ports never exist."
  },
  {
    "t": "spanning-tree",
    "x": "An access port connects to one workstation and you enable spanning-tree portfast on that interface. What does PortFast do?",
    "o": [
      "It skips listening and learning and forwards right away",
      "It stops the port from ever receiving any BPDUs",
      "It makes the port the designated port for its segment",
      "It doubles the link bandwidth during a topology change"
    ],
    "a": 0,
    "e": "PortFast moves an access port straight to forwarding, bypassing the listening and learning delay for end devices; it does not block incoming BPDUs, which is the separate job of BPDU Guard."
  },
  {
    "t": "spanning-tree",
    "x": "A switch port sits in the 802.1D blocking state. Which two behaviors describe that port while it is blocking? Choose TWO.",
    "o": [
      "It receives BPDUs to stay aware of the topology",
      "It discards all user data frames it receives",
      "It populates the MAC address table from user frames",
      "It originates its own configuration BPDUs downstream",
      "It has already transitioned into the forwarding state"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A blocking port keeps listening to BPDUs so it can react to topology changes, yet it discards all user data and does not learn MAC addresses; only designated ports originate BPDUs onto a segment."
  },
  {
    "t": "spanning-tree",
    "x": "You want PC-facing access ports to reach forwarding quickly but be protected if someone plugs in a rogue switch. Which two features apply? Choose TWO.",
    "o": [
      "PortFast to bypass the listening and learning delay",
      "BPDU Guard to disable a port that receives a BPDU",
      "Root Guard to make that access port the root bridge",
      "UplinkFast to speed root port failover on the PC port",
      "Loop Guard to move the workstation into another VLAN"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "PortFast speeds edge ports to forwarding while BPDU Guard err-disables such a port the instant it sees a BPDU, defeating a rogue switch; Root Guard instead prevents a neighbor from becoming root and does not apply here."
  },
  {
    "t": "rapid-pvst",
    "x": "Which global configuration command enables Rapid PVST+ on a Cisco Catalyst switch?",
    "o": [
      "spanning-tree mode rapid-pvst",
      "spanning-tree mode pvst",
      "spanning-tree mode mst",
      "spanning-tree rapid enable"
    ],
    "a": 0,
    "e": "Rapid PVST+ is selected with spanning-tree mode rapid-pvst, the default on many Catalyst platforms; pvst selects the slower per-VLAN 802.1D and mst selects Multiple Spanning Tree."
  },
  {
    "t": "rapid-pvst",
    "x": "In RSTP, what is the function of a port that has been assigned the alternate role?",
    "o": [
      "It offers a fast standby path to root if the root port fails",
      "It forwards user frames as the designated port for a segment",
      "It carries every BPDU that the root bridge originates",
      "It connects two switches across a shared hub segment"
    ],
    "a": 0,
    "e": "An RSTP alternate port is a discarding port that provides a rapid backup toward the root should the current root port go down; the designated port is the forwarding port for a segment, which is a different role."
  },
  {
    "t": "rapid-pvst",
    "x": "The RSTP discarding state merges which legacy 802.1D port states into a single state?",
    "o": [
      "Blocking, listening, and disabled",
      "Learning and forwarding combined",
      "Listening and forwarding combined",
      "Forwarding and disabled combined"
    ],
    "a": 0,
    "e": "RSTP collapses the 802.1D disabled, blocking, and listening states into one discarding state, leaving only discarding, learning, and forwarding; forwarding is never folded into discarding."
  },
  {
    "t": "rapid-pvst",
    "x": "How many port states does RSTP define compared with the five states used by legacy 802.1D spanning tree?",
    "o": [
      "Three states: discarding, learning, and forwarding",
      "Two states: blocking and forwarding only",
      "Four states: listening, learning, forwarding, blocking",
      "Five states identical to the legacy 802.1D standard"
    ],
    "a": 0,
    "e": "RSTP uses just three states, discarding, learning, and forwarding, streamlining the five 802.1D states so convergence can happen much faster."
  },
  {
    "t": "rapid-pvst",
    "x": "Which two conditions allow an RSTP port to transition straight to forwarding without waiting on the legacy timers? Choose TWO.",
    "o": [
      "The port is an edge port facing an end device",
      "The port is full-duplex point-to-point to one switch",
      "The port runs half-duplex on a shared media segment",
      "The port has the highest path cost toward the root",
      "The port is administratively left in the disabled state"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "RSTP achieves rapid transition on edge ports and on point-to-point links, which it infers from full-duplex operation; a half-duplex link is treated as shared and cannot use the proposal and agreement handshake."
  },
  {
    "t": "rapid-pvst",
    "x": "Which two statements accurately describe how Rapid PVST+ operates on Catalyst switches? Choose TWO.",
    "o": [
      "It runs a separate RSTP instance for each VLAN",
      "It converges faster than legacy per-VLAN 802.1D",
      "It runs one shared instance covering all VLANs",
      "It disables spanning tree on every trunk link",
      "It requires an MST region name before it works"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Rapid PVST+ maintains an independent RSTP instance per VLAN and converges quickly using proposal and agreement; a single instance shared by all VLANs describes MST, not Rapid PVST+."
  },
  {
    "t": "wireless-architectures",
    "x": "A lightweight access point forms a secure tunnel to its wireless LAN controller. Which protocol builds that tunnel?",
    "o": [
      "CAPWAP, which tunnels control and data to the controller",
      "LWAPP, the only protocol modern controllers still accept",
      "GRE, which every access point uses to reach the WLC",
      "HSRP, which keeps the controller tunnel highly available"
    ],
    "a": 0,
    "e": "CAPWAP is the standard protocol that tunnels both control and data traffic between a lightweight AP and its WLC; LWAPP is the older Cisco predecessor that CAPWAP replaced."
  },
  {
    "t": "wireless-architectures",
    "x": "In a split-MAC wireless design, which group of tasks does the controller handle rather than the access point?",
    "o": [
      "Authentication, association, and security policy",
      "Beacon transmission and real-time frame encryption",
      "Answering probe requests from nearby clients",
      "Buffering frames for clients in power-save mode"
    ],
    "a": 0,
    "e": "Split-MAC moves management tasks such as authentication, association, and policy to the controller while the AP keeps real-time 802.11 functions like beacons and encryption local to the radio."
  },
  {
    "t": "wireless-architectures",
    "x": "Which UDP port number does CAPWAP use for the control channel between an access point and the controller?",
    "o": [
      "5246",
      "5247",
      "1812",
      "443"
    ],
    "a": 0,
    "e": "CAPWAP control traffic uses UDP 5246 while the data channel uses UDP 5247; port 1812 is RADIUS authentication and 443 is HTTPS, neither of which carries CAPWAP control."
  },
  {
    "t": "wireless-architectures",
    "x": "How does an autonomous access point differ from a lightweight access point in a wireless deployment?",
    "o": [
      "It holds its own configuration and runs without a controller",
      "It must register to a controller before it passes any traffic",
      "It relies on CAPWAP to download its running settings",
      "It can only work while it is joined to a mobility group"
    ],
    "a": 0,
    "e": "An autonomous AP carries a full standalone configuration and forwards traffic independently, whereas a lightweight AP depends on a controller and CAPWAP for its configuration and policy."
  },
  {
    "t": "wireless-architectures",
    "x": "A branch keeps its access points joined to a central controller but needs local data switching if the WAN link drops. Which AP mode fits?",
    "o": [
      "FlexConnect mode for local switching at the branch",
      "Monitor mode to only scan for rogue devices",
      "Sniffer mode to capture frames for later analysis",
      "SE-Connect mode to stream raw spectrum data"
    ],
    "a": 0,
    "e": "FlexConnect lets branch APs switch client data locally and keep serving users during a WAN outage while remaining centrally managed; monitor and sniffer modes handle scanning and capture, not client forwarding."
  },
  {
    "t": "wireless-architectures",
    "x": "Which two access point modes continue to serve wireless clients while the AP is joined to a controller? Choose TWO.",
    "o": [
      "Local mode, the default client-serving mode",
      "FlexConnect mode, which can switch data locally",
      "Monitor mode, which serves no client traffic",
      "Sniffer mode, which forwards frames to an analyzer",
      "Rogue detector mode, which watches wired ARP"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Local and FlexConnect modes both carry client traffic, with FlexConnect adding local switching at branches; monitor, sniffer, and rogue detector are dedicated roles that do not serve clients."
  },
  {
    "t": "wireless-architectures",
    "x": "Which two statements about CAPWAP between a lightweight access point and its controller are correct? Choose TWO.",
    "o": [
      "The control channel can be secured with DTLS",
      "Data reaches the controller over UDP port 5247",
      "The control channel uses TCP port 80 to set up",
      "The tunnel needs a static GRE key on both ends",
      "Client data always bypasses the controller entirely"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "CAPWAP control can be encrypted with DTLS, and the data channel rides UDP 5247; control uses UDP 5246 rather than TCP 80, and lightweight client data is typically tunneled through the controller."
  },
  {
    "t": "device-management-access",
    "x": "Before generating RSA keys to enable SSH, which pair of settings must already exist on the router?",
    "o": [
      "A configured hostname and an ip domain-name value",
      "A loopback interface and a set enable secret",
      "A default gateway and a matching static route",
      "A banner motd and a console line password"
    ],
    "a": 0,
    "e": "The crypto key generate rsa command needs a non-default hostname and an ip domain-name to build the key label; without both configured, key generation is refused and SSH cannot be turned up."
  },
  {
    "t": "device-management-access",
    "x": "Which VTY line command restricts inbound remote access to SSH only and blocks Telnet from connecting?",
    "o": [
      "transport input ssh",
      "transport input all",
      "transport output ssh",
      "login local ssh"
    ],
    "a": 0,
    "e": "transport input ssh permits only SSH inbound on the VTY lines; transport input all would also allow Telnet, and transport output governs outbound sessions rather than inbound access."
  },
  {
    "t": "device-management-access",
    "x": "Why is the enable secret command preferred over enable password for protecting privileged EXEC mode?",
    "o": [
      "enable secret stores the password as a strong hash",
      "enable secret displays the password as plain text",
      "enable password also encrypts every line password",
      "enable password relies on a stronger hash algorithm"
    ],
    "a": 0,
    "e": "enable secret stores its value as a hash and takes precedence over the weakly protected enable password; the plain-text and stronger-algorithm claims actually describe the weaker enable password."
  },
  {
    "t": "device-management-access",
    "x": "What does the global command service password-encryption accomplish on a Cisco IOS device?",
    "o": [
      "It applies weak type 7 encoding to plaintext passwords",
      "It converts every password to a strong type 5 hash",
      "It disables Telnet and forces encrypted SSH sessions",
      "It encrypts the whole configuration file in NVRAM"
    ],
    "a": 0,
    "e": "service password-encryption obscures plaintext passwords in the configuration using reversible type 7 encoding; it does not upgrade them to the stronger type 5 hash used by enable secret."
  },
  {
    "t": "device-management-access",
    "x": "You want only hosts in 10.1.1.0/24 to open SSH sessions to a switch. Which approach on the VTY lines enforces this?",
    "o": [
      "access-class 10 in with an ACL permitting that subnet",
      "ip access-group 10 in on every physical interface",
      "access-list 10 permit any bound to the console line",
      "transport input none applied to all remote lines"
    ],
    "a": 0,
    "e": "access-class binds a numbered ACL to the VTY lines to filter management sessions by source, so an ACL permitting 10.1.1.0/24 applied with access-class in limits SSH; ip access-group filters transit traffic instead."
  },
  {
    "t": "device-management-access",
    "x": "Which two steps are required to bring up SSH version 2 access on a router that currently allows only Telnet? Choose TWO.",
    "o": [
      "Generate RSA keys with a modulus of at least 768 bits",
      "Create a local username and set login local on the VTY",
      "Enter the command no ip domain-lookup globally",
      "Assign a default gateway to the management VLAN",
      "Apply service password-encryption to the console line"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "SSH needs RSA keys of sufficient modulus plus local authentication using a username and login local on the VTY lines; disabling domain lookup and setting a gateway are unrelated to enabling SSH."
  },
  {
    "t": "device-management-access",
    "x": "Which two protocols let a switch learn details about the devices connected directly to its interfaces? Choose TWO.",
    "o": [
      "CDP, the Cisco proprietary discovery protocol",
      "LLDP, the vendor-neutral IEEE discovery protocol",
      "NTP, which synchronizes clocks across devices",
      "SNMP, which polls devices for their statistics",
      "Syslog, which forwards event messages to a server"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "CDP and LLDP both advertise and learn directly connected neighbor details, with LLDP being the multivendor standard; NTP handles time, SNMP handles monitoring, and Syslog handles logging."
  },
  {
    "t": "wlan-gui-config",
    "x": "On a Cisco wireless LAN controller, what is the role of a dynamic interface when you build a WLAN?",
    "o": [
      "It maps the WLAN to a VLAN for client traffic",
      "It provides the console command line for the controller",
      "It authenticates administrators logging into the GUI",
      "It stores the CAPWAP certificate used by the APs"
    ],
    "a": 0,
    "e": "A dynamic interface associates a WLAN with a specific VLAN, giving wireless clients their subnet and gateway; the management and virtual interfaces serve controller functions rather than client VLAN mapping."
  },
  {
    "t": "wlan-gui-config",
    "x": "You configure a corporate WLAN for WPA2 Enterprise in the controller GUI. Which external component must the WLAN reference?",
    "o": [
      "A RADIUS server for 802.1X authentication",
      "A DHCP relay to deliver the pre-shared key",
      "A TFTP server to push client certificates",
      "A DNS server to resolve each supplicant name"
    ],
    "a": 0,
    "e": "WPA2 Enterprise uses 802.1X, which requires a RADIUS server to authenticate users, referenced under the security AAA settings; a pre-shared key deployment would not need RADIUS at all."
  },
  {
    "t": "wlan-gui-config",
    "x": "Under which WLAN configuration tab do you enter the WPA2 pre-shared key in the controller GUI?",
    "o": [
      "The Security tab under the Layer 2 settings",
      "The General tab beside the profile name field",
      "The QoS tab under the assigned bandwidth profile",
      "The Advanced tab under the client exclusion timer"
    ],
    "a": 0,
    "e": "The pre-shared key is entered on the Security tab under Layer 2, where WPA2 and PSK are chosen; the General and QoS tabs handle naming and traffic priority instead of the key."
  },
  {
    "t": "wlan-gui-config",
    "x": "In the WLAN General settings, what is the effect of disabling the Broadcast SSID option?",
    "o": [
      "The AP stops advertising the SSID in its beacon frames",
      "The WLAN is deleted from the controller altogether",
      "All connected clients are immediately deauthenticated",
      "The SSID switches to a stronger cipher suite by force"
    ],
    "a": 0,
    "e": "Disabling SSID broadcast only stops the network name from appearing in beacons, so clients must already know it; it neither deletes the WLAN nor changes the encryption in use."
  },
  {
    "t": "wlan-gui-config",
    "x": "Which two Layer 2 security options can you select for a WLAN in the controller GUI? Choose TWO.",
    "o": [
      "WPA2 using a pre-shared key",
      "WPA3 using 802.1X enterprise authentication",
      "OSPF area authentication for the SSID",
      "Port security sticky MAC on the WLAN",
      "IPsec transport mode for each client"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "The Layer 2 security menu offers wireless schemes such as WPA2 personal and WPA3 enterprise; OSPF, port security, and IPsec transport are wired or routing features that are not selectable there."
  },
  {
    "t": "wlan-gui-config",
    "x": "Which two settings must you define when creating a brand-new WLAN profile in the controller GUI? Choose TWO.",
    "o": [
      "The SSID that clients will see for the network",
      "The interface or VLAN the WLAN traffic maps to",
      "The spanning-tree priority assigned to the SSID",
      "The OSPF process ID for the wireless subnet",
      "The console baud rate used by the controller"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A new WLAN requires an SSID and an interface or VLAN mapping to place client traffic on the network; spanning-tree priority, OSPF process IDs, and console baud rate are unrelated to WLAN creation."
  },
  {
    "t": "routing-table",
    "x": "A router has learned the same destination network through a static route and through OSPF. Which route does the router install in its routing table?",
    "o": [
      "The static route because its administrative distance is 1",
      "The OSPF route because its administrative distance is lower",
      "The route with the lower hop count to the destination",
      "The route that was configured or learned most recently"
    ],
    "a": 0,
    "e": "Administrative distance decides between sources; a static route defaults to 1 and OSPF is 110, so the lower value 1 makes the static route preferred. Metrics only break ties within a single routing protocol."
  },
  {
    "t": "routing-table",
    "x": "A packet is destined for 10.1.1.55 and the routing table holds routes for 10.1.1.0/24, 10.1.1.0/26, and 0.0.0.0/0. Which entry is used to forward the packet?",
    "o": [
      "10.1.1.0/26 because it is the most specific match",
      "0.0.0.0/0 because it is the default gateway of last resort",
      "10.1.1.0/24 because it was installed in the table first",
      "The route with the lowest administrative distance value"
    ],
    "a": 0,
    "e": "Forwarding uses the longest prefix match, and 10.1.1.55 falls inside 10.1.1.0/26 which spans hosts .1 through .62. Longest match is evaluated before administrative distance or metric."
  },
  {
    "t": "routing-table",
    "x": "In show ip route output, a network is listed with the code letter C. What does this code indicate about the entry?",
    "o": [
      "The network is directly connected to a router interface",
      "The network was learned dynamically through the EIGRP process",
      "The route was entered by hand as a static route",
      "The network is a candidate default route from RIP"
    ],
    "a": 0,
    "e": "The C code marks a directly connected network reachable through an active interface with an IP address. Static routes show as S and EIGRP routes show as D."
  },
  {
    "t": "routing-table",
    "x": "After configuring an interface with 192.168.4.1/24, the routing table shows 192.168.4.1/32 with the code L. What is the purpose of this /32 entry?",
    "o": [
      "It identifies the exact address assigned to the router interface",
      "It is a summary route covering the whole 192.168.4.0 network",
      "It is a floating static route used only during a failover",
      "It represents a default route toward the ISP next hop"
    ],
    "a": 0,
    "e": "The L code is the local route, a /32 host entry for the router's own interface address so packets to the router itself are handled locally. The connected /24 network appears separately with a C code."
  },
  {
    "t": "routing-table",
    "x": "An engineer types show ip route and sees the line Gateway of last resort is 203.0.113.2 to network 0.0.0.0. What does this line describe?",
    "o": [
      "The next hop used for destinations with no specific route",
      "The management address assigned to the router loopback",
      "The primary DNS server handed out by the DHCP pool",
      "The router ID selected for the OSPF process"
    ],
    "a": 0,
    "e": "The gateway of last resort is the next hop for the default route 0.0.0.0/0, used when no longer prefix match exists. It is unrelated to loopbacks, DNS servers, or OSPF router IDs."
  },
  {
    "t": "routing-table",
    "x": "Two OSPF paths to the same network exist, one with cost 20 and one with cost 30. Which path does OSPF place in the routing table?",
    "o": [
      "The path with cost 20 because a lower cost is preferred",
      "The path with cost 30 because it consumes more bandwidth",
      "Both paths because OSPF always load balances every route",
      "Neither path until the administrative distance is lowered"
    ],
    "a": 0,
    "e": "Within a single protocol the lowest metric wins, and OSPF cost is inversely based on bandwidth, so the cost-20 path is chosen. OSPF only load balances across equal-cost paths."
  },
  {
    "t": "routing-table",
    "x": "A routing table shows entries beginning with the letters O and D. Which two statements correctly describe these route source codes? Choose TWO.",
    "o": [
      "O marks a route learned through OSPF",
      "D marks a route learned through EIGRP",
      "O marks a directly connected network segment",
      "D marks a manually configured default route",
      "O marks a static route toward a stub network"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "O is the code for OSPF-learned routes and D is the code for EIGRP, named for the Diffusing Update Algorithm. Connected networks use C and static routes use S."
  },
  {
    "t": "routing-table",
    "x": "Which two default administrative distance values are correctly matched to their route source? Choose TWO.",
    "o": [
      "A static route equals 1",
      "An OSPF route equals 110",
      "An EIGRP route equals 120",
      "A directly connected route equals 90",
      "A RIP route equals 100"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A static route defaults to AD 1 and OSPF to 110, making both trusted sources. EIGRP is 90, directly connected is 0, and RIP is 120, so the other pairings are wrong."
  },
  {
    "t": "routing-table",
    "x": "The routing table contains 172.16.0.0/16 via OSPF and 172.16.8.0/22 via EIGRP. Toward which entry is a packet for 172.16.9.100 forwarded?",
    "o": [
      "172.16.8.0/22 because it is the longer matching prefix",
      "172.16.0.0/16 because OSPF has a lower administrative distance",
      "Neither entry because the two protocols directly conflict",
      "The EIGRP entry only after redistribution is first enabled"
    ],
    "a": 0,
    "e": "The address 172.16.9.100 lies within 172.16.8.0/22, which covers 172.16.8.0 through 172.16.11.255, so the more specific route is used. Longest prefix match is applied before administrative distance."
  },
  {
    "t": "routing-table",
    "x": "Which two statements about equal-cost load balancing on a router are correct? Choose TWO.",
    "o": [
      "Traffic is shared across multiple paths with the same metric",
      "The paths must come from the same routing protocol source",
      "One path is always kept idle as a backup only",
      "The paths may each have a different administrative distance",
      "Load balancing requires the paths to use different subnet masks"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Equal-cost load balancing shares traffic over paths that have an identical metric and come from the same routing source. Backup-only behavior and mismatched AD or masks describe different scenarios."
  },
  {
    "t": "routing-table",
    "x": "When a router chooses which path to install for a destination, which three factors does it evaluate in order? Choose THREE.",
    "o": [
      "The longest prefix match",
      "The administrative distance",
      "The routing protocol metric",
      "The interface duplex setting",
      "The configured hostname length"
    ],
    "a": 0,
    "as": [
      0,
      1,
      2
    ],
    "e": "Route selection first prefers the longest prefix match, then the lowest administrative distance between sources, then the lowest metric within a protocol. Duplex and hostname have no effect on the path choice."
  },
  {
    "t": "routing-table",
    "x": "A floating static route is configured with an administrative distance of 200 as a backup to an OSPF route. When does the floating static appear in the routing table?",
    "o": [
      "Only after the OSPF route is withdrawn from the table",
      "Immediately, alongside the currently active OSPF route",
      "Only when the static metric drops below the OSPF cost",
      "Never, because static routes cannot serve as backups"
    ],
    "a": 0,
    "e": "A floating static has an AD higher than the primary source, so it stays out of the table until the preferred OSPF route disappears. When OSPF withdraws its route, the backup is installed."
  },
  {
    "t": "routing-table",
    "x": "A router receives a packet for 198.51.100.9 but no entry matches that address and no default route exists. What does the router do with the packet?",
    "o": [
      "It discards the packet and may send an ICMP unreachable",
      "It floods the packet out every routing interface it has",
      "It stores the packet until a matching route appears",
      "It forwards the packet using its own management address"
    ],
    "a": 0,
    "e": "With no matching route and no default, the router drops the packet and can return an ICMP destination unreachable to the source. Routers never flood unrouted unicast packets."
  },
  {
    "t": "packet-forwarding",
    "x": "As an IPv4 packet is forwarded hop by hop across several routers, which addressing behavior occurs at each Layer 3 hop?",
    "o": [
      "The source and destination MAC addresses are rewritten",
      "The source and destination IP addresses are rewritten",
      "The destination IP address changes at every single router",
      "The source IP address is replaced with the router address"
    ],
    "a": 0,
    "e": "Layer 2 MAC addresses are rewritten at each hop to reflect the new local link, while the source and destination IP addresses stay constant end to end. The IP header identifies the ultimate endpoints."
  },
  {
    "t": "packet-forwarding",
    "x": "Each time a router forwards an IPv4 packet toward its destination, which field in the IP header does the router decrement?",
    "o": [
      "The Time to Live field",
      "The Total Length field",
      "The Fragment Offset field",
      "The Differentiated Services field"
    ],
    "a": 0,
    "e": "Routers decrement the TTL by one at every hop and discard the packet if it reaches zero, preventing endless loops. Total Length and DSCP values are not reduced by forwarding."
  },
  {
    "t": "packet-forwarding",
    "x": "A host on 192.168.10.0/24 sends traffic to a server on a remote subnet. What role does the configured default gateway perform for that host?",
    "o": [
      "It forwards the host traffic toward destinations on other subnets",
      "It assigns the host its IP address through a DHCP lease",
      "It resolves the server domain name into an IP address",
      "It filters the host traffic with an access control list"
    ],
    "a": 0,
    "e": "The default gateway is the router interface a host uses to reach any destination outside its local subnet. DHCP addressing and DNS resolution are handled by separate services."
  },
  {
    "t": "packet-forwarding",
    "x": "Before a router can forward a packet to the next-hop IP address on an Ethernet link, what must the router determine first?",
    "o": [
      "The MAC address of the next-hop device",
      "The administrative distance of the route",
      "The OSPF cost of the outgoing interface",
      "The DHCP lease time of the destination"
    ],
    "a": 0,
    "e": "To build the Layer 2 frame the router needs the next hop's MAC address, which it learns through ARP if it is not already cached. Administrative distance and OSPF cost affect selection, not framing."
  },
  {
    "t": "packet-forwarding",
    "x": "A frame carrying an IPv4 packet travels from one router to the next across an Ethernet segment. Which two header values are changed during that single hop? Choose TWO.",
    "o": [
      "The destination MAC address",
      "The IP header TTL value",
      "The destination IP address",
      "The source TCP port number",
      "The IP protocol number field"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "At each hop the router rewrites the destination MAC to the next device and decrements the IP TTL. The destination IP, TCP port, and protocol number remain unchanged end to end."
  },
  {
    "t": "packet-forwarding",
    "x": "Cisco Express Forwarding relies on two data structures to switch packets quickly without a per-packet lookup. Which two structures does CEF maintain? Choose TWO.",
    "o": [
      "A Forwarding Information Base derived from the routing table",
      "An adjacency table mapping next hops to Layer 2 headers",
      "A spanning-tree topology table for each configured VLAN",
      "A DHCP binding table of currently leased addresses",
      "A NAT translation table for the outbound traffic flows"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "CEF builds the FIB from the routing table and an adjacency table holding rewritten Layer 2 headers for next hops, enabling fast switching. Spanning tree, DHCP, and NAT tables serve unrelated functions."
  },
  {
    "t": "packet-forwarding",
    "x": "When a router forwards a packet out an Ethernet interface, how does it prepare the Layer 2 frame for that outgoing link?",
    "o": [
      "It builds a new frame with local source and next-hop MAC addresses",
      "It keeps the original frame header from the incoming interface",
      "It removes the IP header and forwards only the payload data",
      "It appends a second IP header for the outgoing subnet"
    ],
    "a": 0,
    "e": "The router de-encapsulates the incoming frame, then encapsulates the packet in a new frame using its own interface MAC as source and the next hop's MAC as destination. The IP header is preserved."
  },
  {
    "t": "packet-forwarding",
    "x": "A multilayer switch receives a frame whose destination MAC is the switch's own routing interface. What does the switch do next with the enclosed packet?",
    "o": [
      "It performs a Layer 3 route lookup on the destination IP",
      "It floods the frame out all of the ports in the VLAN",
      "It drops the frame because the MAC matches its own",
      "It forwards the frame based on the source MAC address"
    ],
    "a": 0,
    "e": "A frame addressed to the router or SVI MAC signals that Layer 3 forwarding is needed, so the device looks up the destination IP in its routing table. MAC switching applies only to frames not addressed to it."
  },
  {
    "t": "packet-forwarding",
    "x": "A workstation is configured with an IP address, subnet mask, and default gateway. Which two conditions require the workstation to send frames to the gateway? Choose TWO.",
    "o": [
      "The destination host sits on a different subnet",
      "The destination must be reached across a router",
      "The destination shares the same local subnet",
      "The destination MAC is already held in the ARP cache",
      "The destination is a broadcast on the local link"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A host uses the default gateway whenever the destination is on a different subnet, meaning the traffic must cross a router. Same-subnet and local broadcast traffic are delivered directly without the gateway."
  },
  {
    "t": "packet-forwarding",
    "x": "A traceroute shows an intermediate router returning a Time Exceeded message. Which condition during packet forwarding triggers that message?",
    "o": [
      "The packet TTL reached zero at that router",
      "The packet destination port was found closed",
      "The router ARP table was completely empty",
      "The packet exceeded the outgoing interface MTU"
    ],
    "a": 0,
    "e": "When the TTL decrements to zero the router discards the packet and sends an ICMP Time Exceeded, which traceroute uses to map hops. A closed port or an MTU problem produces different responses."
  },
  {
    "t": "packet-forwarding",
    "x": "A router must forward a 1500-byte IPv4 packet out an interface whose MTU is 1400 bytes, and the Do Not Fragment bit is clear. What does the router do?",
    "o": [
      "It fragments the packet to fit the smaller MTU",
      "It forwards the oversized packet without any change",
      "It drops the packet and clears its routing table",
      "It sets the TTL to zero and discards the packet"
    ],
    "a": 0,
    "e": "With the DF bit clear the router fragments the IPv4 packet so each piece fits the 1400-byte MTU, and the receiver reassembles them. If DF were set it would drop the packet and signal with ICMP."
  },
  {
    "t": "packet-forwarding",
    "x": "A host sends a packet to a server three routers away. In the very first frame leaving the host, what is the destination MAC address?",
    "o": [
      "The MAC address of the default gateway interface",
      "The MAC address of the distant remote server",
      "The broadcast MAC address ffff.ffff.ffff",
      "The MAC address of the host's own network card"
    ],
    "a": 0,
    "e": "For off-subnet traffic the host frames the packet to its default gateway's MAC, since that router is the next Layer 2 hop. The server's MAC is never known to a host on a different subnet."
  },
  {
    "t": "packet-forwarding",
    "x": "For a router to successfully forward an IP packet toward a remote network, which two pieces of information must it have available? Choose TWO.",
    "o": [
      "A matching route to the destination network",
      "The next-hop Layer 2 address for the outgoing link",
      "The destination host operating system version",
      "The application port used inside the segment",
      "The DNS hostname of the destination server"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Forwarding needs a route that selects the exit interface and next hop, plus the next hop's MAC address to build the frame. The OS version, port, and hostname play no part in the decision."
  },
  {
    "t": "static-routing",
    "x": "Which command creates a static route to the 10.5.0.0/16 network using the next-hop address 10.0.0.2?",
    "o": [
      "ip route 10.5.0.0 255.255.0.0 10.0.0.2",
      "ip route 10.5.0.0 255.255.255.0 10.0.0.2",
      "ip route 10.0.0.2 255.255.0.0 10.5.0.0",
      "route add 10.5.0.0 mask 255.255.0.0 10.0.0.2"
    ],
    "a": 0,
    "e": "The syntax is ip route network mask next-hop, so /16 becomes 255.255.0.0 with the destination first and the next hop last. Reversing the operands or using a /24 mask would not match the intended network."
  },
  {
    "t": "static-routing",
    "x": "A stub router needs one route that forwards all traffic with no better match toward the ISP at 209.165.200.1. Which command accomplishes this?",
    "o": [
      "ip route 0.0.0.0 0.0.0.0 209.165.200.1",
      "ip route 209.165.200.1 0.0.0.0 0.0.0.0",
      "ip default-network 209.165.200.1",
      "ip route 255.255.255.255 0.0.0.0 209.165.200.1"
    ],
    "a": 0,
    "e": "A default route uses 0.0.0.0 0.0.0.0 as the network and mask, pointing at the ISP next hop for any unmatched destination. The quad-zero network and mask make it the least specific match."
  },
  {
    "t": "static-routing",
    "x": "An engineer configures ip route 172.20.0.0 255.255.0.0 GigabitEthernet0/1 without a next-hop IP. What is a consequence of using only the exit interface on a multi-access Ethernet link?",
    "o": [
      "The router must ARP for every destination reached through the route",
      "The route is rejected because an interface cannot be used",
      "The route automatically gains an administrative distance of 120",
      "The router load balances the traffic across all its interfaces"
    ],
    "a": 0,
    "e": "On a broadcast multi-access link an interface-only static route forces the router to ARP for each remote destination, which is inefficient. A next-hop address or a fully specified route avoids that behavior."
  },
  {
    "t": "static-routing",
    "x": "Which command configures a floating static default route that stays inactive until the primary route fails, using next hop 198.51.100.1?",
    "o": [
      "ip route 0.0.0.0 0.0.0.0 198.51.100.1 200",
      "ip route 0.0.0.0 0.0.0.0 198.51.100.1 track 1",
      "ip route 0.0.0.0 0.0.0.0 198.51.100.1 tag 200",
      "ip route floating 0.0.0.0 0.0.0.0 198.51.100.1"
    ],
    "a": 0,
    "e": "Adding a trailing administrative distance such as 200 raises the route's AD above the primary so it floats and installs only on failure. The tag keyword marks routes for filtering and does not change preference."
  },
  {
    "t": "static-routing",
    "x": "What is the effect of the command ip route 192.0.2.0 255.255.255.0 null0 on a router?",
    "o": [
      "Traffic to that network is silently discarded by the router",
      "Traffic to that network is forwarded to the loopback interface",
      "The network is advertised as a connected route to neighbors",
      "The router logs every packet matching that destination network"
    ],
    "a": 0,
    "e": "A static route pointing to null0 sends matching traffic to the bit bucket, discarding it, which is common for summarization and blackhole filtering. It does not log packets or create a connected route."
  },
  {
    "t": "static-routing",
    "x": "An engineer replaces a next-hop-only static route with a fully specified route naming both an interface and a next-hop address. Which two benefits result on an Ethernet link? Choose TWO.",
    "o": [
      "The router avoids a recursive routing table lookup",
      "The router resolves the next-hop MAC directly on that interface",
      "The static route gains a lower administrative distance value",
      "The link bandwidth available to the route is effectively doubled",
      "The route begins load balancing across all router interfaces"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A fully specified route names the exit interface so no recursive lookup is needed, and the router resolves the next-hop MAC on that specific link. It does not change AD, bandwidth, or enable load balancing."
  },
  {
    "t": "static-routing",
    "x": "Which command configures an IPv6 static route to 2001:db8:acad:1::/64 through the next hop 2001:db8:acad:2::2?",
    "o": [
      "ipv6 route 2001:db8:acad:1::/64 2001:db8:acad:2::2",
      "ip route 2001:db8:acad:1::/64 2001:db8:acad:2::2",
      "ipv6 route 2001:db8:acad:2::2 2001:db8:acad:1::/64",
      "ipv6 unicast-route 2001:db8:acad:1::/64 2001:db8:acad:2::2"
    ],
    "a": 0,
    "e": "IPv6 static routes use ipv6 route prefix/length next-hop, with the destination prefix first. The ip route command is IPv4 only, and ipv6 unicast-routing enables forwarding rather than defining a route."
  },
  {
    "t": "static-routing",
    "x": "An administrator wants a static route that matches only the single host 10.10.10.7. Which network and mask combination should the ip route command use?",
    "o": [
      "10.10.10.7 255.255.255.255",
      "10.10.10.7 255.255.255.0",
      "10.10.10.0 255.255.255.255",
      "10.10.10.7 0.0.0.0"
    ],
    "a": 0,
    "e": "A /32 mask of 255.255.255.255 defines a host route that matches exactly one address. A /24 mask would match the whole subnet and a zero mask would not identify the host correctly."
  },
  {
    "t": "static-routing",
    "x": "An administrator is choosing between static and dynamic routing for a small stub network. Which two characteristics accurately describe static routes? Choose TWO.",
    "o": [
      "They add no routing protocol traffic to the links",
      "They must be updated by hand when the topology changes",
      "They automatically reroute around a link that has failed",
      "They scale easily to hundreds of frequently changing networks",
      "They elect a designated router on every shared segment"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Static routes consume no protocol bandwidth and give precise control, but an administrator must edit them manually when the network changes. Automatic rerouting and scaling are strengths of dynamic protocols."
  },
  {
    "t": "static-routing",
    "x": "A default static route of 0.0.0.0 0.0.0.0 is often deployed at the network edge. Which two situations make a default route the appropriate choice? Choose TWO.",
    "o": [
      "A stub site with a single connection to the ISP",
      "A branch router that sends all unknown traffic upstream",
      "A core router carrying the full Internet routing table",
      "A router that must balance dozens of specific learned prefixes",
      "A firewall performing deep inspection of every passing flow"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A quad-zero default fits stub and branch routers that have one exit path and forward any unmatched traffic upstream. Core routers holding full tables and complex balancing rely on dynamic routing instead."
  },
  {
    "t": "static-routing",
    "x": "A static route specifies only a next-hop IP address rather than an exit interface. What must the router do to forward traffic using that route?",
    "o": [
      "Perform a recursive lookup to find the exit interface for the next hop",
      "Broadcast an ARP request out all of its interfaces at once",
      "Reject the route entirely until an interface is added to it",
      "Lower the administrative distance of the route to zero automatically"
    ],
    "a": 0,
    "e": "With only a next-hop IP the router recursively resolves that address against the routing table to learn the actual exit interface. Specifying the interface directly removes the extra lookup step."
  },
  {
    "t": "static-routing",
    "x": "A router has separate static routes for 10.1.0.0/24, 10.1.1.0/24, 10.1.2.0/24, and 10.1.3.0/24 through the same next hop. Which single summary route replaces them?",
    "o": [
      "ip route 10.1.0.0 255.255.252.0 10.9.9.1",
      "ip route 10.1.0.0 255.255.255.0 10.9.9.1",
      "ip route 10.1.0.0 255.255.248.0 10.9.9.1",
      "ip route 10.1.0.0 255.255.254.0 10.9.9.1"
    ],
    "a": 0,
    "e": "The four consecutive /24 networks aggregate into 10.1.0.0/22, which is mask 255.255.252.0 covering 10.1.0.0 through 10.1.3.255. A /23 would only cover two of the four subnets."
  },
  {
    "t": "static-routing",
    "x": "After adding a static route, which command displays the routing table so the administrator can confirm the entry appears with an S code?",
    "o": [
      "show ip route",
      "show running-config interface",
      "show ip interface brief",
      "show cdp neighbors detail"
    ],
    "a": 0,
    "e": "The show ip route command lists installed routes and marks static entries with the S code, confirming the route was accepted. The interface and CDP commands show link and neighbor data, not the table."
  },
  {
    "t": "static-routing",
    "x": "A configured static route does not appear in show ip route output. Which two conditions would prevent that static route from being installed? Choose TWO.",
    "o": [
      "The exit interface referenced by the route is down",
      "The next-hop address is unreachable in the routing table",
      "The route was assigned a lower administrative distance",
      "The destination mask was written in dotted decimal form",
      "The route points toward a directly connected network"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A static route is installed only if its next hop is resolvable and its exit interface is up, so a down interface or an unreachable next hop keeps it out. A lower AD or a dotted-decimal mask would not remove a valid route."
  },
  {
    "t": "ospfv2",
    "x": "A router learns the same destination network through both OSPF and RIP. Which route is installed and why?",
    "o": [
      "OSPF, because its administrative distance of 110 beats RIP at 120",
      "RIP, because its administrative distance of 120 beats OSPF at 110",
      "OSPF, because it uses hop count as a lower metric than RIP",
      "RIP, because distance vector routes are preferred over link state"
    ],
    "a": 0,
    "e": "IOS compares administrative distance before metric, and OSPF's 110 is lower than RIP's 120, so the OSPF route is installed. RIP is rejected even though its metric type differs, because AD is evaluated first."
  },
  {
    "t": "ospfv2",
    "x": "By default, how does OSPF calculate the cost value of an interface?",
    "o": [
      "Reference bandwidth divided by the interface bandwidth",
      "Interface bandwidth divided by the reference bandwidth",
      "Delay plus load added to the interface bandwidth",
      "Hop count multiplied by the configured interface bandwidth"
    ],
    "a": 0,
    "e": "OSPF cost equals the reference bandwidth divided by interface bandwidth, rounded to an integer with a minimum of 1. Hop count is RIP's metric, not part of the OSPF cost calculation."
  },
  {
    "t": "ospfv2",
    "x": "With the default reference bandwidth, what OSPF cost is assigned to a 10 Mbps Ethernet interface?",
    "o": [
      "10",
      "1",
      "100",
      "64"
    ],
    "a": 0,
    "e": "The 100 Mbps reference divided by 10 Mbps yields a cost of 10. A 100 Mbps FastEthernet link would instead compute to a cost of 1 under the same default."
  },
  {
    "t": "ospfv2",
    "x": "Which command changes the OSPF reference bandwidth to 10 Gbps so 1 Gbps and 10 Gbps links get distinct costs?",
    "o": [
      "auto-cost reference-bandwidth 10000",
      "auto-cost reference-bandwidth 10",
      "ospf cost reference-bandwidth 10000",
      "bandwidth reference 10000000"
    ],
    "a": 0,
    "e": "The auto-cost reference-bandwidth command takes a value in Mbps, so 10 Gbps is 10000. It must be set identically on every router so cost comparisons stay consistent domain-wide."
  },
  {
    "t": "ospfv2",
    "x": "No router-id is configured and no loopback exists. How does the OSPF process choose its router ID?",
    "o": [
      "It uses the highest IP address on any active physical interface",
      "It uses the lowest IP address on any active physical interface",
      "It uses the MAC address of the first active interface",
      "It generates a random 32-bit value at each router reload"
    ],
    "a": 0,
    "e": "Without a manual router-id or loopback, OSPF selects the highest IPv4 address among active interfaces. A loopback, if one existed, would be preferred over any physical interface."
  },
  {
    "t": "ospfv2",
    "x": "A router has one loopback plus several active Ethernet interfaces but no configured router-id. Which address becomes the router ID?",
    "o": [
      "The loopback interface IP address",
      "The highest Ethernet interface IP address",
      "The lowest Ethernet interface IP address",
      "The management VLAN interface IP address"
    ],
    "a": 0,
    "e": "OSPF prefers a loopback over physical interfaces because loopbacks stay up. If several loopbacks exist, the highest loopback address is chosen as the router ID."
  },
  {
    "t": "ospfv2",
    "x": "After you configure router-id 1.1.1.1 under an already running OSPF process, what makes the new ID take effect?",
    "o": [
      "Clear the OSPF process or reload the router",
      "The new ID applies immediately with no further action",
      "Remove and then re-add every network statement",
      "Shut and re-enable each OSPF-enabled interface"
    ],
    "a": 0,
    "e": "A changed router-id is applied only when the process starts, so clear ip ospf process or a reload is required. Re-adding network statements does not restart the process."
  },
  {
    "t": "ospfv2",
    "x": "Which command enables OSPF on all interfaces in 10.1.1.0/24 and places them in area 0?",
    "o": [
      "network 10.1.1.0 0.0.0.255 area 0",
      "network 10.1.1.0 255.255.255.0 area 0",
      "network 10.1.1.0 0.0.0.255 area 1",
      "network 10.1.1.0 0.0.0.0 area 0"
    ],
    "a": 0,
    "e": "The OSPF network command uses a wildcard mask, so a /24 is 0.0.0.255, and area 0 is the backbone. A subnet mask in that position would be interpreted incorrectly."
  },
  {
    "t": "ospfv2",
    "x": "What is the effect of applying the passive-interface command to an OSPF-enabled interface?",
    "o": [
      "It stops sending hellos so no adjacency forms on that link",
      "It stops advertising the interface subnet into the OSPF area",
      "It blocks all data traffic from crossing the interface",
      "It forces the interface to become the segment designated router"
    ],
    "a": 0,
    "e": "A passive interface still advertises its subnet but stops sending hellos, so no neighbor adjacency forms. It is typically applied to LAN interfaces that face only end hosts."
  },
  {
    "t": "ospfv2",
    "x": "On an OSPF broadcast segment, what are the default hello and dead interval values?",
    "o": [
      "Hello 10 seconds and dead 40 seconds",
      "Hello 30 seconds and dead 120 seconds",
      "Hello 10 seconds and dead 30 seconds",
      "Hello 5 seconds and dead 20 seconds"
    ],
    "a": 0,
    "e": "Broadcast and point-to-point OSPF links default to a 10 second hello and a 40 second dead interval, four times the hello. Nonbroadcast defaults are 30 and 120 instead."
  },
  {
    "t": "ospfv2",
    "x": "Which two parameters must match between two routers for an OSPF adjacency to form? Choose TWO.",
    "o": [
      "Hello and dead timer values",
      "Area ID on the link",
      "OSPF process ID numbers",
      "Router ID values on each router",
      "Interface bandwidth settings"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Adjacency requires matching hello and dead timers and a common area on the link. The process ID is locally significant and router IDs must actually differ, so neither needs to match."
  },
  {
    "t": "ospfv2",
    "x": "Which two show commands help verify OSPF neighbor adjacencies and their current states? Choose TWO.",
    "o": [
      "show ip ospf neighbor",
      "show ip ospf interface",
      "show ip ospf database summary",
      "show ip protocols ospf timers",
      "show running-config ospf brief"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "show ip ospf neighbor lists each neighbor with its state, and show ip ospf interface reveals timers, area, and the local DR/BDR role. The other listed strings are not valid IOS syntax."
  },
  {
    "t": "ospfv2",
    "x": "Which two statements accurately describe OSPFv2 as a routing protocol? Choose TWO.",
    "o": [
      "It is a link-state protocol that builds a topology map",
      "It uses cost based on bandwidth as its metric",
      "It advertises full routing tables every 30 seconds",
      "It uses hop count with a maximum of 15",
      "It is a Cisco-proprietary distance vector protocol"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "OSPF is a standards-based link-state protocol whose metric is cost derived from bandwidth. Periodic full-table updates and a 15-hop limit describe RIP, not OSPF."
  },
  {
    "t": "ospfv2",
    "x": "Which two rules govern OSPF area design within a single autonomous system? Choose TWO.",
    "o": [
      "All areas must connect to the backbone area 0",
      "An ABR sits between area 0 and a nonbackbone area",
      "Every router in a domain must share one area ID",
      "Area 0 may be split into multiple disconnected parts",
      "Interarea routes may bypass the backbone entirely"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Nonbackbone areas must attach to area 0, and an ABR is the router that links them. Interarea traffic must transit the backbone, and area 0 must remain contiguous."
  },
  {
    "t": "ospf-dr-bdr",
    "x": "On a multiaccess Ethernet segment, why does OSPF elect a designated router?",
    "o": [
      "To reduce LSA flooding as a central point for updates",
      "To forward all user data traffic between the segment hosts",
      "To assign IP addresses to routers joining the segment",
      "To convert the segment into a point-to-point link"
    ],
    "a": 0,
    "e": "The DR limits flooding so routers exchange LSAs with it rather than with every neighbor, reducing full adjacencies. It does not forward user data any differently than other routers."
  },
  {
    "t": "ospf-dr-bdr",
    "x": "Which value does OSPF evaluate first when electing the designated router on a segment?",
    "o": [
      "The highest interface OSPF priority",
      "The lowest interface OSPF priority",
      "The highest router process ID",
      "The lowest MAC address on the segment"
    ],
    "a": 0,
    "e": "The router with the highest OSPF interface priority becomes DR. Only when priorities tie is the highest router ID used to break the election."
  },
  {
    "t": "ospf-dr-bdr",
    "x": "Two routers on a segment share the same OSPF interface priority. What breaks the tie for the DR role?",
    "o": [
      "The highest router ID becomes the DR",
      "The lowest router ID becomes the DR",
      "The router with the most interfaces wins",
      "The router that booted first wins automatically"
    ],
    "a": 0,
    "e": "When priorities are equal, the highest router ID wins the DR election. Uptime and interface count play no part in the decision."
  },
  {
    "t": "ospf-dr-bdr",
    "x": "What is the effect of configuring ip ospf priority 0 on a broadcast interface?",
    "o": [
      "The router can never become DR or BDR on that segment",
      "The router is guaranteed to become the DR on that segment",
      "The router doubles its chance of winning the election",
      "The router disables OSPF entirely on that interface"
    ],
    "a": 0,
    "e": "A priority of 0 removes the router from DR and BDR candidacy, so it remains a DROTHER. The highest nonzero priority instead makes a router more likely to win."
  },
  {
    "t": "ospf-dr-bdr",
    "x": "A router with a higher OSPF priority joins a segment that already has a designated router. What happens?",
    "o": [
      "The existing DR keeps the role because election is non-preemptive",
      "The higher-priority router immediately replaces the existing DR",
      "Both routers share the DR role for the segment",
      "A new election runs at every hello interval afterward"
    ],
    "a": 0,
    "e": "OSPF DR election is non-preemptive, so the current DR retains the role even when a higher-priority router appears. A new election runs only if the current DR fails."
  },
  {
    "t": "ospf-dr-bdr",
    "x": "On a broadcast segment, with which routers do DROTHER routers form full adjacencies?",
    "o": [
      "Only the DR and the BDR",
      "Every other router on the segment",
      "Only the router with the lowest router ID",
      "None, since DROTHERs stay in two-way state with all"
    ],
    "a": 0,
    "e": "DROTHER routers become fully adjacent only with the DR and BDR, remaining in two-way state with each other. This is what keeps the number of full adjacencies low."
  },
  {
    "t": "ospf-dr-bdr",
    "x": "Which multicast address do DROTHER routers use to send OSPF updates to the DR and BDR?",
    "o": [
      "224.0.0.6",
      "224.0.0.5",
      "224.0.0.9",
      "224.0.0.10"
    ],
    "a": 0,
    "e": "DROTHERs send to 224.0.0.6, the AllDRouters address, so only the DR and BDR process the update. The DR then floods back to all OSPF routers using 224.0.0.5."
  },
  {
    "t": "ospf-dr-bdr",
    "x": "On which OSPF network type is no designated router elected?",
    "o": [
      "Point-to-point",
      "Broadcast",
      "Nonbroadcast multiaccess",
      "Multiaccess Ethernet"
    ],
    "a": 0,
    "e": "Point-to-point links have only two routers, so no DR is needed or elected. Broadcast and nonbroadcast multiaccess segments do elect a DR and a BDR."
  },
  {
    "t": "ospf-dr-bdr",
    "x": "Which two events trigger a new OSPF DR election on a broadcast segment? Choose TWO.",
    "o": [
      "The current DR fails or loses connectivity",
      "The segment forms adjacencies for the first time",
      "A higher-priority router joins the active segment",
      "The BDR reloads while the DR stays up",
      "An administrator raises the reference bandwidth"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A DR is elected when the segment first comes up and re-elected when the DR fails. A higher-priority late arrival does not preempt, and a BDR reload only replaces the BDR."
  },
  {
    "t": "ospf-dr-bdr",
    "x": "Which two command outputs identify the elected DR and BDR for a segment? Choose TWO.",
    "o": [
      "show ip ospf interface for the local role",
      "show ip ospf neighbor for neighbor roles",
      "show ip route ospf for elected roles",
      "show ip ospf database external listing",
      "show cdp neighbors detail for OSPF roles"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "show ip ospf interface names the DR and BDR plus the local state, and show ip ospf neighbor marks each neighbor as DR, BDR, or DROTHER. The routing table and CDP do not report these roles."
  },
  {
    "t": "ospf-dr-bdr",
    "x": "You want one router to always win the DR role on a stable segment. Which two actions help? Choose TWO.",
    "o": [
      "Set its ip ospf priority above all peers",
      "Set the peer routers ip ospf priority to 0",
      "Lower its router ID below every peer",
      "Configure it as passive on the whole segment",
      "Increase its interface hello interval"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A higher priority on the chosen router plus priority 0 on the peers forces the election result. Lowering router ID hurts its chances, and a passive interface forms no adjacencies at all."
  },
  {
    "t": "fhrp",
    "x": "What problem do first hop redundancy protocols solve on a host LAN?",
    "o": [
      "They provide a redundant default gateway using a virtual IP",
      "They load balance routing updates between OSPF areas",
      "They assign dynamic IP addresses to LAN hosts",
      "They encrypt traffic between hosts and the gateway"
    ],
    "a": 0,
    "e": "FHRPs let routers share a virtual IP and MAC so hosts keep one default gateway even if a router fails. They do not hand out host addresses or perform encryption."
  },
  {
    "t": "fhrp",
    "x": "Which gateway redundancy protocol is defined by an open IETF standard?",
    "o": [
      "VRRP",
      "HSRP",
      "GLBP",
      "PAgP"
    ],
    "a": 0,
    "e": "VRRP is the open IETF standard FHRP, whereas HSRP and GLBP are Cisco proprietary. PAgP negotiates EtherChannel and is not a gateway redundancy option."
  },
  {
    "t": "fhrp",
    "x": "Which capability is unique to GLBP when compared with HSRP and VRRP?",
    "o": [
      "It load balances across multiple active forwarders per group",
      "It uses a single active router with the others on standby",
      "It requires a special license to enable the virtual IP",
      "It runs only over point-to-point serial links"
    ],
    "a": 0,
    "e": "GLBP uses multiple active virtual forwarders so traffic is shared among routers in one group. HSRP and VRRP forward through a single active or master router at a time."
  },
  {
    "t": "fhrp",
    "x": "In HSRP, which router forwards traffic sent to the virtual IP under normal conditions?",
    "o": [
      "The active router",
      "The standby router",
      "The listening router",
      "The speaking router"
    ],
    "a": 0,
    "e": "The HSRP active router forwards traffic for the virtual IP and MAC, while the standby waits to take over. Listen and speak are transitional states rather than the forwarding role."
  },
  {
    "t": "fhrp",
    "x": "What is the format of the virtual MAC address used by an HSRP version 1 group?",
    "o": [
      "0000.0c07.acXX where XX is the group number",
      "0000.5e00.01XX where XX is the group number",
      "0100.5e00.00XX where XX is the group number",
      "ffff.ffff.ffXX where XX is the group number"
    ],
    "a": 0,
    "e": "HSRPv1 uses the virtual MAC 0000.0c07.acXX with the group number in hex as the last octet. The 0000.5e00.01XX range instead belongs to VRRP."
  },
  {
    "t": "fhrp",
    "x": "By default, how does HSRP decide which router becomes active when the priorities are equal?",
    "o": [
      "The highest interface IP address becomes active",
      "The lowest interface IP address becomes active",
      "The router with the most uptime becomes active",
      "The highest interface MAC address becomes active"
    ],
    "a": 0,
    "e": "With equal priorities, the highest configured interface IP address wins the active role. Priority is checked first and defaults to 100 on every router."
  },
  {
    "t": "fhrp",
    "x": "What is the default HSRP priority value assigned to a router in a group?",
    "o": [
      "100",
      "1",
      "255",
      "0"
    ],
    "a": 0,
    "e": "The default HSRP priority is 100, and the highest priority wins the active role. Raising a router above 100 makes it the preferred active gateway when preemption is enabled."
  },
  {
    "t": "fhrp",
    "x": "What must be configured for a recovered higher-priority HSRP router to reclaim the active role?",
    "o": [
      "The standby preempt command on that router",
      "A lower priority on the current active router",
      "A matching group number on all access switches",
      "The passive-interface command on the uplink"
    ],
    "a": 0,
    "e": "HSRP is non-preemptive by default, so standby preempt is required for a recovered higher-priority router to take back the active role. Without it the current active router keeps forwarding."
  },
  {
    "t": "fhrp",
    "x": "In VRRP, what term describes the router that forwards traffic for the virtual router address?",
    "o": [
      "The master router",
      "The active router",
      "The primary forwarder",
      "The designated router"
    ],
    "a": 0,
    "e": "VRRP calls the forwarding router the master and the others backups. Active and standby are HSRP terms, and designated router is an OSPF role."
  },
  {
    "t": "fhrp",
    "x": "Which two states are stable long-term HSRP roles rather than transitional states? Choose TWO.",
    "o": [
      "Active",
      "Standby",
      "Listen",
      "Speak",
      "Learn"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Active and standby are the ongoing HSRP roles, one forwarding and one ready to take over. Listen, speak, and learn are transitional states seen during the election."
  },
  {
    "t": "fhrp",
    "x": "Which two first hop redundancy protocols are Cisco proprietary? Choose TWO.",
    "o": [
      "HSRP",
      "GLBP",
      "VRRP",
      "CARP",
      "BFD"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "HSRP and GLBP are both Cisco-proprietary FHRPs. VRRP is an open standard, CARP is a BSD alternative, and BFD is a fast failure-detection helper rather than an FHRP."
  },
  {
    "t": "fhrp",
    "x": "Which two settings must match on peer routers for them to share a single HSRP group? Choose TWO.",
    "o": [
      "The HSRP group number",
      "The virtual IP address",
      "The physical interface IP address",
      "The router configured hostname",
      "The OSPF routing process ID"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Peers must use the same group number and the same virtual IP to form one HSRP group on the subnet. Their physical interface addresses must differ, and hostname and OSPF ID are irrelevant."
  },
  {
    "t": "fhrp",
    "x": "Which two outcomes result from deploying an FHRP on a host subnet? Choose TWO.",
    "o": [
      "Hosts keep one default gateway address if a router fails",
      "Failover to a backup router is transparent to the hosts",
      "Hosts must be reconfigured with a new gateway on failover",
      "The virtual IP changes each time the active router changes",
      "End hosts run the redundancy protocol themselves"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "An FHRP keeps a stable virtual gateway IP and MAC, so failover is invisible to hosts and no reconfiguration is needed. The virtual address stays constant and only the routers run the protocol."
  },
  {
    "t": "nat",
    "x": "What does the inside global address represent in Cisco NAT terminology?",
    "o": [
      "The public address that represents an inside host to the outside network",
      "The private address assigned to an inside host on the local LAN",
      "The public address of a destination host out on the Internet",
      "The private address an outside host is given on the internal network"
    ],
    "a": 0,
    "e": "Inside global is the routable public address that stands in for an internal host when its traffic reaches the outside. The private address on the LAN is the inside local, not the inside global."
  },
  {
    "t": "nat",
    "x": "Which command creates a permanent one-to-one mapping between private host 10.1.1.5 and public 203.0.113.5?",
    "o": [
      "ip nat inside source static 10.1.1.5 203.0.113.5",
      "ip nat outside source static 203.0.113.5 10.1.1.5",
      "ip nat inside source list 1 pool PUBLIC",
      "ip nat pool PUBLIC 203.0.113.5 203.0.113.5 netmask 255.255.255.255"
    ],
    "a": 0,
    "e": "Static NAT uses ip nat inside source static with the private address first and the public address second. The list-and-pool form builds dynamic NAT, not a fixed one-to-one mapping."
  },
  {
    "t": "nat",
    "x": "An engineer is configuring NAT and must mark the LAN-facing interface as the translation inside interface. Which command does that?",
    "o": [
      "ip nat inside",
      "ip nat outside",
      "ip nat translation max-entries 1000",
      "ip nat inside source static"
    ],
    "a": 0,
    "e": "The ip nat inside interface command tags the interface connected to the private network. The ip nat outside command tags the interface facing the public network instead."
  },
  {
    "t": "nat",
    "x": "Which two commands help verify and troubleshoot address translation on a Cisco router? Choose TWO.",
    "o": [
      "show ip nat translations",
      "show ip nat statistics",
      "show ip nat pool",
      "show translation nat",
      "debug ip nat pool"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "show ip nat translations lists the active mappings and show ip nat statistics reports hit counts and configured interfaces. show ip nat pool and show translation nat are not valid IOS commands."
  },
  {
    "t": "nat-dynamic-pat",
    "x": "Which keyword added to a NAT configuration lets many private hosts share one public address using port numbers?",
    "o": [
      "overload",
      "extendable",
      "no-alias",
      "route-map"
    ],
    "a": 0,
    "e": "The overload keyword turns dynamic NAT into PAT, tracking sessions by source port so one address serves many hosts. The extendable keyword only allows multiple static mappings to one address, not port multiplexing."
  },
  {
    "t": "nat-dynamic-pat",
    "x": "Given the line ip nat inside source list 1 interface g0/1 overload, what does this configuration do?",
    "o": [
      "It translates ACL 1 hosts to the g0/1 address using PAT",
      "It statically maps each ACL 1 host one-to-one to g0/1",
      "It translates only the g0/1 address into a pool named 1",
      "It stops all translation for hosts that ACL 1 permits"
    ],
    "a": 0,
    "e": "This is interface-based PAT: hosts permitted by ACL 1 are overloaded behind the g0/1 interface address. It is not a static one-to-one mapping because the overload keyword forces port-based sharing."
  },
  {
    "t": "nat-dynamic-pat",
    "x": "A branch office has 200 hosts but only a single public IPv4 address from its ISP. Which NAT approach fits best?",
    "o": [
      "Dynamic PAT using the overload keyword",
      "Static NAT with one mapping per host",
      "Dynamic NAT with a pool of 200 addresses",
      "Stateful NAT64 translation for the hosts"
    ],
    "a": 0,
    "e": "PAT lets all 200 hosts share the one public address by distinguishing sessions with port numbers. A dynamic pool of 200 addresses would require 200 public addresses, which the branch does not have."
  },
  {
    "t": "nat-dynamic-pat",
    "x": "Which two elements are required to configure dynamic NAT that draws from an address pool? Choose TWO.",
    "o": [
      "An access list that identifies the inside hosts to translate",
      "A NAT pool defining the range of public addresses",
      "A static route that points to the NAT pool range",
      "A route map matching the outside interface direction",
      "A DHCP pool bound to the public address range"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Dynamic NAT needs an ACL to select which inside sources to translate and a pool of public addresses to assign them. A static route or DHCP pool plays no part in building the translation."
  },
  {
    "t": "ntp",
    "x": "Why is synchronized time from NTP important across network devices?",
    "o": [
      "It keeps log timestamps and certificate checks consistent between devices",
      "It reduces the size of the routing table on core routers",
      "It compresses syslog messages before they are transmitted",
      "It encrypts all management traffic exchanged between switches"
    ],
    "a": 0,
    "e": "Consistent clocks let you correlate log events across devices and validate time-sensitive certificates. NTP does nothing to routing table size, message compression, or traffic encryption."
  },
  {
    "t": "ntp",
    "x": "Which command configures a router to synchronize its clock from an NTP server at 192.168.1.10?",
    "o": [
      "ntp server 192.168.1.10",
      "ntp master 192.168.1.10",
      "ntp peer 192.168.1.10 prefer",
      "clock source 192.168.1.10"
    ],
    "a": 0,
    "e": "ntp server points the device at an upstream time source to act as a client. ntp master makes the local router an authoritative source and takes a stratum number, not a server IP."
  },
  {
    "t": "ntp",
    "x": "In NTP, what does a lower stratum number indicate about a time source?",
    "o": [
      "It sits closer to an authoritative reference clock",
      "It has a higher administrative distance to the clock",
      "It polls its clients more frequently for time updates",
      "It is farther from the reference and less trusted"
    ],
    "a": 0,
    "e": "Stratum counts hops from the reference clock, so a smaller number means fewer hops and a more accurate source. A larger stratum, not a smaller one, means the source is farther away."
  },
  {
    "t": "ntp",
    "x": "An engineer sets up an internal time source and confirms synchronization on IOS. Which two commands accomplish these goals? Choose TWO.",
    "o": [
      "ntp master designates the router as an authoritative time source",
      "show ntp status confirms whether the clock has synchronized",
      "ntp server 123 opens a TCP session to the time source",
      "ntp broadcast forces stratum 1 status on the router",
      "ntp authenticate requires IPsec before any peering starts"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "ntp master makes the device an authoritative clock and show ntp status reports the sync state and reference. NTP runs over UDP port 123, not TCP, and it does not require IPsec to operate."
  },
  {
    "t": "dhcp",
    "x": "Which sequence lists the DHCP message exchange in the correct order?",
    "o": [
      "Discover, Offer, Request, Acknowledge",
      "Offer, Discover, Acknowledge, Request",
      "Request, Offer, Discover, Acknowledge",
      "Discover, Request, Offer, Acknowledge"
    ],
    "a": 0,
    "e": "The DORA process runs Discover, Offer, Request, then Acknowledge. The client must discover a server and receive an offer before it can request that specific lease."
  },
  {
    "t": "dhcp",
    "x": "Clients on a VLAN get no addresses because the DHCP server sits on a different subnet. Which command on their gateway fixes this?",
    "o": [
      "ip helper-address 10.0.0.5",
      "ip dhcp relay 10.0.0.5",
      "ip forward-protocol dhcp 10.0.0.5",
      "ip dhcp pool 10.0.0.5"
    ],
    "a": 0,
    "e": "ip helper-address on the client-facing interface forwards broadcast DHCP requests as unicast to the remote server. ip dhcp relay and ip forward-protocol dhcp are not valid configuration commands in that form."
  },
  {
    "t": "dhcp",
    "x": "Which two commands belong inside an IOS ip dhcp pool configuration block? Choose TWO.",
    "o": [
      "default-router 192.168.10.1",
      "dns-server 8.8.8.8",
      "ip helper-address 192.168.10.1",
      "ip dhcp excluded-address 8.8.8.8",
      "network dns 8.8.8.8"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Inside a pool you set default-router for the gateway and dns-server for name resolution. ip helper-address is an interface command and ip dhcp excluded-address is a global command, so neither lives inside the pool."
  },
  {
    "t": "dhcp",
    "x": "A router acting as a DHCP server hands out addresses that collide with static device IPs. Which two actions prevent the conflict? Choose TWO.",
    "o": [
      "Configure ip dhcp excluded-address for the static range",
      "Narrow the pool network statement so it skips the static IPs",
      "Add the overload keyword to the DHCP pool",
      "Set the lease time to infinite on the pool",
      "Enable ip helper-address on the DHCP server itself"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Excluding the static addresses or shrinking the pool network keeps the server from leasing those IPs. The overload keyword and infinite leases do nothing to reserve the static addresses."
  },
  {
    "t": "dns",
    "x": "In DNS, which record type resolves a hostname to an IPv4 address?",
    "o": [
      "A",
      "AAAA",
      "MX",
      "CNAME"
    ],
    "a": 0,
    "e": "An A record maps a hostname to a 32-bit IPv4 address. AAAA performs the same job for IPv6 addresses, so it is the wrong choice for IPv4."
  },
  {
    "t": "dns",
    "x": "Which command tells a Cisco router which DNS server to query for name resolution?",
    "o": [
      "ip name-server 8.8.8.8",
      "ip dns server 8.8.8.8",
      "ip domain lookup 8.8.8.8",
      "dns-server 8.8.8.8"
    ],
    "a": 0,
    "e": "ip name-server points the router at a resolver to look up names. ip domain lookup only enables or disables resolution and does not take a server address."
  },
  {
    "t": "dns",
    "x": "A host must resolve a name to an IPv6 address. Which record type does the resolver request?",
    "o": [
      "AAAA",
      "A",
      "PTR",
      "NS"
    ],
    "a": 0,
    "e": "AAAA records hold 128-bit IPv6 addresses for forward name resolution. A PTR record does the reverse lookup from an address to a name, so it does not return the IPv6 host address."
  },
  {
    "t": "dns",
    "x": "A technician reviews how name resolution behaves on the network. Which two DNS facts are correct? Choose TWO.",
    "o": [
      "DNS primarily uses UDP port 53 for its queries",
      "A PTR record maps an IP address back to a hostname",
      "DNS relies on TCP port 25 for all standard lookups",
      "An MX record resolves a name to an IPv6 address",
      "A CNAME record stores the physical MAC address"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Most DNS lookups travel over UDP 53, and PTR records provide reverse address-to-name mapping. Port 25 is SMTP, and an MX record points to a mail server rather than resolving an IPv6 address."
  },
  {
    "t": "snmp",
    "x": "Which SNMP version adds authentication and encryption to protect management traffic?",
    "o": [
      "SNMPv3",
      "SNMPv2c",
      "SNMPv1",
      "SNMPv2"
    ],
    "a": 0,
    "e": "SNMPv3 introduces message integrity, authentication, and privacy through encryption. SNMPv2c still relies on plaintext community strings and offers no encryption."
  },
  {
    "t": "snmp",
    "x": "What distinguishes an SNMP trap from a normal get request?",
    "o": [
      "The agent sends a trap to the manager without being polled",
      "The manager sends a trap to poll the agent for data",
      "A trap always requires an acknowledgment from the agent",
      "A trap retrieves the entire MIB in a single message"
    ],
    "a": 0,
    "e": "A trap is an unsolicited alert pushed from the agent to the manager when an event occurs. A get request is the reverse, with the manager polling the agent for a specific value."
  },
  {
    "t": "snmp",
    "x": "In SNMPv2c, what role does a community string serve?",
    "o": [
      "It acts as a plaintext password controlling access to the agent",
      "It encrypts all polling traffic between manager and agent",
      "It defines the UDP port the manager listens on",
      "It stores the OID tree that the agent will expose"
    ],
    "a": 0,
    "e": "The community string is a shared, clear-text credential that gates read or write access on the agent. It provides no encryption, which is a key limitation of SNMPv2c."
  },
  {
    "t": "snmp",
    "x": "Which two statements about SNMP components are accurate? Choose TWO.",
    "o": [
      "The MIB is a hierarchical database of managed objects",
      "An OID uniquely identifies a variable within the MIB",
      "The agent runs on the network management station only",
      "Traps are delivered over TCP port 161 by default",
      "Community strings are mandatory and encrypted in SNMPv3"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "The MIB organizes managed objects as a tree, and each OID names one variable in that tree. The agent runs on the managed device, and SNMP uses UDP rather than TCP for its ports."
  },
  {
    "t": "syslog",
    "x": "In syslog, which severity level number represents the most critical emergency condition?",
    "o": [
      "0",
      "7",
      "1",
      "9"
    ],
    "a": 0,
    "e": "Syslog severity 0 is emergencies, the highest urgency, while 7 is debugging, the lowest. Levels only run from 0 through 7, so 9 is not a valid severity."
  },
  {
    "t": "syslog",
    "x": "Which command directs a router to send its log messages to a syslog server at 10.10.10.5?",
    "o": [
      "logging host 10.10.10.5",
      "logging trap 10.10.10.5",
      "syslog server 10.10.10.5",
      "logging source-interface 10.10.10.5"
    ],
    "a": 0,
    "e": "logging host names the destination syslog collector for the device. logging trap instead sets the minimum severity to send and takes a level, not an IP address."
  },
  {
    "t": "syslog",
    "x": "A log entry reads %LINK-3-UPDOWN: Interface GigabitEthernet0/1, changed state to down. What does the 3 indicate?",
    "o": [
      "The severity level of the message is 3, an error condition",
      "The message is the third one generated since boot",
      "The interface belongs to VLAN number 3",
      "The facility is using process ID number 3"
    ],
    "a": 0,
    "e": "The middle number in a syslog message is its severity, and 3 marks an error-level event. It is not a message count, a VLAN, or a process identifier."
  },
  {
    "t": "syslog",
    "x": "A network operator wants dependable event logging on IOS devices. Which two syslog details hold true? Choose TWO.",
    "o": [
      "Level 7 corresponds to debugging messages",
      "The logging trap command sets which severities go to a server",
      "Syslog messages are encrypted by default on IOS",
      "Level 0 is the least important informational message",
      "The logging buffered command forwards logs to a remote host"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Severity 7 is debugging and logging trap defines the lowest severity forwarded to a server. Syslog is plaintext by default, and logging buffered stores messages in local RAM rather than sending them out."
  },
  {
    "t": "qos",
    "x": "Which header field is used to mark IP packets for DSCP-based quality of service?",
    "o": [
      "The Differentiated Services field in the IPv4 header",
      "The Time To Live field in the IPv4 header",
      "The Type field in the Ethernet frame header",
      "The Window field in the TCP segment header"
    ],
    "a": 0,
    "e": "DSCP values live in the Differentiated Services field of the IP header so devices can classify packets end to end. The TTL field controls hop count and carries no QoS marking."
  },
  {
    "t": "qos",
    "x": "Which DSCP marking is typically reserved for low-latency voice traffic?",
    "o": [
      "Expedited Forwarding, DSCP 46",
      "Best Effort, DSCP 0",
      "Assured Forwarding, DSCP 10",
      "Class Selector 1, DSCP 8"
    ],
    "a": 0,
    "e": "Expedited Forwarding, DSCP 46, gives voice the priority and low delay it needs. Best Effort at DSCP 0 applies no special handling and is unsuitable for real-time voice."
  },
  {
    "t": "qos",
    "x": "Which two techniques does QoS use to manage congestion and traffic priority? Choose TWO.",
    "o": [
      "Queuing that services high-priority traffic first",
      "Classification and marking of packets near the network edge",
      "Rewriting the destination MAC address for each flow",
      "Disabling TCP retransmission for real-time flows",
      "Assigning every packet the same forwarding class"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "QoS classifies and marks traffic at the edge, then uses priority queuing so important flows are served first during congestion. Rewriting MAC addresses or flattening every packet into one class would defeat prioritization."
  },
  {
    "t": "ftp-tftp",
    "x": "Which transport protocol and port does TFTP use for file transfers?",
    "o": [
      "UDP port 69",
      "TCP port 21",
      "TCP port 20",
      "UDP port 53"
    ],
    "a": 0,
    "e": "TFTP is a lightweight protocol that runs over UDP port 69. TCP ports 20 and 21 belong to FTP, which offers reliable, authenticated transfers instead."
  },
  {
    "t": "ftp-tftp",
    "x": "Which command backs up the running configuration to a TFTP server?",
    "o": [
      "copy running-config tftp",
      "copy tftp running-config",
      "backup running-config tftp",
      "archive running-config tftp"
    ],
    "a": 0,
    "e": "copy running-config tftp reads the active config and writes it to the server as the destination. Reversing the arguments to copy tftp running-config would instead download a file onto the device."
  },
  {
    "t": "ftp-tftp",
    "x": "A junior admin must choose between FTP and TFTP for a file transfer. Which two comparisons are accurate? Choose TWO.",
    "o": [
      "FTP uses TCP and supports authentication with a username",
      "TFTP is simpler and often used to move IOS images",
      "TFTP uses TCP ports 20 and 21 for reliable delivery",
      "FTP transfers files without any connection setup",
      "TFTP encrypts user credentials before each transfer"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "FTP runs over TCP with username and password authentication, while TFTP is a minimal UDP tool handy for pushing IOS images. TFTP does not use TCP ports 20 and 21 and provides no encryption or login."
  },
  {
    "t": "security-concepts",
    "x": "A newly discovered flaw in a router's web management interface has no patch available yet. In security terminology, what does this unpatched flaw itself represent?",
    "o": [
      "A vulnerability",
      "An active threat",
      "A working exploit",
      "A countermeasure"
    ],
    "a": 0,
    "e": "The unpatched flaw is a vulnerability, a weakness that could be leveraged. A threat is the potential danger or actor, while an exploit is the actual technique used against the weakness."
  },
  {
    "t": "security-concepts",
    "x": "A checksum is attached to each configuration backup so that any later modification can be detected. Which element of the CIA triad does this practice primarily support?",
    "o": [
      "Integrity",
      "Confidentiality",
      "Availability",
      "Authentication"
    ],
    "a": 0,
    "e": "Integrity ensures data has not been altered, which a checksum verifies. Confidentiality instead protects secrecy through encryption and access control."
  },
  {
    "t": "security-concepts",
    "x": "A security awareness course warns staff about attacks that manipulate people rather than exploiting software. Which two of the following are examples of social engineering? Choose TWO.",
    "o": [
      "Phishing",
      "Tailgating",
      "SYN flood",
      "ARP spoofing",
      "Buffer overflow"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Phishing and tailgating target human behavior to gain access. A SYN flood and ARP spoofing are technical network attacks that do not rely on manipulating a person."
  },
  {
    "t": "security-concepts",
    "x": "Attackers flood a company's public web server with bogus traffic from many compromised hosts at once so that legitimate users can no longer connect. What type of attack is this?",
    "o": [
      "Distributed denial-of-service",
      "Man-in-the-middle interception",
      "Cross-site scripting attack",
      "Password spraying campaign"
    ],
    "a": 0,
    "e": "A distributed denial-of-service uses many hosts to exhaust resources and deny availability. A man-in-the-middle instead quietly intercepts traffic between two parties."
  },
  {
    "t": "security-concepts",
    "x": "A network team documents Layer 2 defenses on its access switches. Which two of the following are mitigation techniques rather than attacks in their own right? Choose TWO.",
    "o": [
      "Dynamic ARP Inspection",
      "DHCP snooping",
      "MAC address table flooding",
      "VLAN hopping attack",
      "Rogue DHCP server"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Dynamic ARP Inspection and DHCP snooping are protective switch features. MAC flooding, VLAN hopping, and a rogue DHCP server are the attacks those features help prevent."
  },
  {
    "t": "security-concepts",
    "x": "A device login requires a password plus a one-time code from a hardware token. Combining these two different categories of proof is best described as which security concept?",
    "o": [
      "Multifactor authentication",
      "Single sign-on federation",
      "Role-based access control",
      "Least privilege model"
    ],
    "a": 0,
    "e": "Multifactor authentication combines factors from different categories such as something you know and something you have. Single sign-on instead reuses one credential across many systems."
  },
  {
    "t": "device-access-control",
    "x": "An administrator must manage a switch over the network without ever sending login credentials across the wire in cleartext. Which protocol should be enabled on the VTY lines?",
    "o": [
      "SSH",
      "Telnet",
      "HTTP",
      "SNMPv2c"
    ],
    "a": 0,
    "e": "SSH encrypts the entire management session including credentials. Telnet transmits everything, including passwords, as readable plaintext."
  },
  {
    "t": "device-access-control",
    "x": "A router is configured with 'line vty 0 4' immediately followed by 'transport input ssh'. What does this pair of commands accomplish?",
    "o": [
      "Only SSH connections are allowed to the VTY lines",
      "Both SSH and Telnet are allowed on the VTY lines",
      "All remote management to the router is disabled",
      "SSH is enabled on the router console port"
    ],
    "a": 0,
    "e": "The transport input ssh command restricts the VTY lines to accept SSH only and rejects Telnet. It has no effect on the console port, which is configured under line con 0."
  },
  {
    "t": "device-access-control",
    "x": "Which command stores the privileged EXEC mode password as a secure hash in the configuration instead of as recoverable cleartext?",
    "o": [
      "enable secret",
      "enable password",
      "service password-encryption",
      "username admin password"
    ],
    "a": 0,
    "e": "The enable secret command stores a hashed privileged password. The enable password command keeps it in cleartext unless service password-encryption is added, which only applies weak type 7 encoding."
  },
  {
    "t": "device-access-control",
    "x": "An engineer is enabling SSH on a brand new switch for the very first time. Which two configuration steps are required before SSH will actually function? Choose TWO.",
    "o": [
      "Configure a hostname and a domain name",
      "Generate the RSA crypto keys",
      "Enable the service password-encryption command",
      "Assign a default gateway to the switch",
      "Set the transport output to telnet"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A hostname and domain name are needed so the RSA key pair can be named, and the crypto key must be generated for SSH to encrypt sessions. Password encryption and a default gateway are unrelated to SSH operation."
  },
  {
    "t": "device-access-control",
    "x": "To require a password when someone connects a rollover cable directly to the physical management port of a switch, under which line should the login credentials be applied?",
    "o": [
      "line con 0",
      "line vty 0 4",
      "line aux 0",
      "interface vlan 1"
    ],
    "a": 0,
    "e": "The console port is secured under line con 0. The VTY lines apply only to remote sessions such as SSH or Telnet, not to a direct rollover connection."
  },
  {
    "t": "password-policies",
    "x": "After an administrator enters the 'service password-encryption' command, how are the existing cleartext passwords in the configuration affected?",
    "o": [
      "They are obscured using the weak type 7 algorithm",
      "They are hashed using the strong type 9 algorithm",
      "They are deleted and must be reentered by hand",
      "They stay in cleartext until the device reloads"
    ],
    "a": 0,
    "e": "Service password-encryption applies reversible type 7 encoding to cleartext passwords, which is easily decoded. It does not upgrade them to a strong hash such as type 9 scrypt."
  },
  {
    "t": "password-policies",
    "x": "When defining a local login credential, which password storage algorithm offers the strongest protection against offline brute-force cracking?",
    "o": [
      "Type 9 scrypt",
      "Type 7 Vigenere",
      "Type 5 MD5",
      "Type 0 cleartext"
    ],
    "a": 0,
    "e": "Type 9 uses the scrypt function, which is far more resistant to brute forcing than the deprecated MD5-based type 5 or the reversible type 7. Type 0 is not hashed at all."
  },
  {
    "t": "password-policies",
    "x": "A company is drafting a login password policy for its network devices. Which two of the following requirements genuinely strengthen that policy? Choose TWO.",
    "o": [
      "Enforce a minimum password length",
      "Require periodic password changes",
      "Store passwords using type 0 encoding",
      "Share one account among all admins",
      "Allow common dictionary words"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A minimum length and periodic rotation reduce the odds a password is guessed or reused after a leak. Shared accounts destroy accountability and cleartext storage exposes the secret directly."
  },
  {
    "t": "password-policies",
    "x": "Which command helps defend device logins against brute-force guessing by pausing further attempts after a set number of failures?",
    "o": [
      "login block-for",
      "login local",
      "password-encryption",
      "exec-timeout"
    ],
    "a": 0,
    "e": "The login block-for command locks out login attempts for a defined period after too many failures. The login local command merely points authentication at the local user database."
  },
  {
    "t": "password-policies",
    "x": "An administrator reviews a configuration and wants credentials stored as hashes rather than as recoverable cleartext. Which two commands store the password as a hash? Choose TWO.",
    "o": [
      "username admin secret StrongPass",
      "enable secret StrongPass",
      "username admin password StrongPass",
      "enable password StrongPass",
      "username guest password 7 StrongPass"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "The secret keyword stores a hashed password for both a local user and the enable prompt. The password keyword stores type 0 cleartext or the weak reversible type 7 form."
  },
  {
    "t": "ipsec-vpns",
    "x": "Within an IPsec VPN, which protocol provides confidentiality by actually encrypting the payload carried in each protected packet?",
    "o": [
      "ESP",
      "AH",
      "IKE",
      "GRE"
    ],
    "a": 0,
    "e": "Encapsulating Security Payload encrypts and authenticates the packet payload. Authentication Header provides integrity and origin authentication but performs no encryption."
  },
  {
    "t": "ipsec-vpns",
    "x": "Two branch office routers build a permanent encrypted tunnel so that their entire LANs can communicate securely across the public internet. Which VPN type is described?",
    "o": [
      "Site-to-site VPN",
      "Remote-access VPN",
      "Clientless SSL VPN",
      "MPLS Layer 3 VPN"
    ],
    "a": 0,
    "e": "A site-to-site VPN connects whole networks through gateway routers. A remote-access VPN instead connects an individual host or user into the network."
  },
  {
    "t": "ipsec-vpns",
    "x": "An engineer explains to management what protections IPsec adds to traffic crossing an untrusted link. Which two security services does IPsec provide? Choose TWO.",
    "o": [
      "Data confidentiality via encryption",
      "Data integrity via hashing",
      "Automatic assignment of host IP addresses",
      "Dynamic routing between the sites",
      "Higher throughput than plaintext"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "IPsec provides confidentiality through encryption and integrity through hashing, along with authentication. It does not assign addresses, run routing, or speed traffic up."
  },
  {
    "t": "ipsec-vpns",
    "x": "Which protocol is responsible for negotiating the security associations and exchanging keys before IPsec begins protecting the actual data traffic?",
    "o": [
      "IKE",
      "ESP",
      "AH",
      "TLS"
    ],
    "a": 0,
    "e": "Internet Key Exchange negotiates the security associations and keying material. ESP and AH then protect the data traffic once IKE has established the parameters."
  },
  {
    "t": "ipsec-vpns",
    "x": "IPsec protects the bulk of tunnel data using algorithms such as AES. Which category of encryption uses the same shared key to both encrypt and decrypt that traffic?",
    "o": [
      "Symmetric encryption",
      "Asymmetric encryption",
      "Hashing",
      "Public key infrastructure"
    ],
    "a": 0,
    "e": "Symmetric encryption like AES uses one shared key for both operations and is efficient for bulk data. Asymmetric encryption uses a key pair and is far slower per byte."
  },
  {
    "t": "aaa",
    "x": "In the AAA framework, which function determines exactly what commands or resources a user is permitted to reach once they have logged in?",
    "o": [
      "Authorization",
      "Authentication",
      "Accounting",
      "Administration"
    ],
    "a": 0,
    "e": "Authorization defines what an authenticated user is allowed to do. Authentication only verifies identity, and accounting records the activity after the fact."
  },
  {
    "t": "aaa",
    "x": "A team wants a AAA protocol that encrypts the entire packet body and separates authorization from authentication for device administration. Which protocol best fits?",
    "o": [
      "TACACS+",
      "RADIUS",
      "SNMPv3",
      "Kerberos"
    ],
    "a": 0,
    "e": "TACACS+ encrypts the whole payload and separates the AAA functions, which suits granular device administration. RADIUS encrypts only the password and merges authentication with authorization."
  },
  {
    "t": "aaa",
    "x": "An engineer compares RADIUS against TACACS+ before choosing a AAA server for the network. Which two statements about RADIUS are accurate? Choose TWO.",
    "o": [
      "It uses UDP for transport",
      "It encrypts only the password field",
      "It uses TCP for transport",
      "It encrypts the entire packet body",
      "It is a Cisco proprietary protocol"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "RADIUS runs over UDP and encrypts only the password portion of the packet. TACACS+ is the Cisco protocol that uses TCP and encrypts the whole payload."
  },
  {
    "t": "aaa",
    "x": "Which global configuration command must be entered first to enable the AAA subsystem and unlock the related authentication and authorization commands on a Cisco device?",
    "o": [
      "aaa new-model",
      "aaa authentication login",
      "login local",
      "username admin secret"
    ],
    "a": 0,
    "e": "The aaa new-model command activates AAA and exposes the rest of the AAA command set. None of the other AAA commands can be configured until it has been enabled."
  },
  {
    "t": "aaa",
    "x": "A large enterprise migrates from local device logins to a centralized AAA server for all its routers and switches. Which two benefits does this design provide? Choose TWO.",
    "o": [
      "Centralized management of user credentials",
      "Detailed accounting logs of user activity",
      "Elimination of the need for any passwords",
      "Faster packet forwarding on the routers",
      "Automatic encryption of all data traffic"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Centralized AAA consolidates credential management and records accounting logs of who did what and when. It does not remove passwords, speed up forwarding, or encrypt user data traffic."
  },
  {
    "t": "acls",
    "x": "Which numbered range identifies a standard IPv4 access control list on a Cisco IOS router?",
    "o": [
      "1 to 99 and 1300 to 1999",
      "100 to 199 and 2000 to 2699",
      "1 to 199 and 2000 to 2699",
      "1 to 99 and 2000 to 2699"
    ],
    "a": 0,
    "e": "Standard IPv4 ACLs use 1 to 99 and the expanded 1300 to 1999 range, while extended ACLs use 100 to 199 and 2000 to 2699."
  },
  {
    "t": "acls",
    "x": "Where should a standard IPv4 ACL generally be placed to avoid unintentionally blocking traffic?",
    "o": [
      "As close to the destination as possible",
      "As close to the source as possible",
      "On the router's loopback interface",
      "On every interface in the path"
    ],
    "a": 0,
    "e": "A standard ACL filters only on the source address, so placing it near the destination avoids blocking traffic the host still needs; extended ACLs go near the source."
  },
  {
    "t": "acls",
    "x": "A router interface applies an ACL that contains only permit entries for two subnets. What happens to traffic from a third subnet?",
    "o": [
      "It is dropped by the implicit deny any entry",
      "It is forwarded because no deny entry matches",
      "It is forwarded but logged as an exception",
      "It triggers an ICMP redirect to the source"
    ],
    "a": 0,
    "e": "Every ACL ends with an implicit deny any, so traffic that matches no permit statement is dropped even though no explicit deny is configured."
  },
  {
    "t": "acls",
    "x": "Which wildcard mask matches all hosts in the 172.16.8.0/22 network for a single ACL entry?",
    "o": [
      "0.0.3.255",
      "0.0.255.255",
      "0.0.7.255",
      "0.0.1.255"
    ],
    "a": 0,
    "e": "A /22 mask of 255.255.252.0 inverts to the wildcard 0.0.3.255; 0.0.7.255 would match a /21 and 0.0.1.255 a /23."
  },
  {
    "t": "acls",
    "x": "Which statements about how a Cisco router processes an IPv4 ACL are true? Choose TWO.",
    "o": [
      "Entries are evaluated top-down and stop at the first match",
      "Traffic matching no entry hits the implicit deny any",
      "All entries are evaluated before a forwarding decision",
      "New entries insert automatically in address order",
      "A named ACL can never be edited after creation"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "ACL entries are read top-down and processing stops at the first match, and any traffic matching no entry hits the implicit deny any. Entries are not auto-sorted or all evaluated first."
  },
  {
    "t": "extended-acls",
    "x": "Which command permits HTTP traffic from host 10.1.1.10 to server 10.2.2.20 in an extended ACL?",
    "o": [
      "permit tcp host 10.1.1.10 host 10.2.2.20 eq 80",
      "permit tcp host 10.1.1.10 eq 80 host 10.2.2.20",
      "permit ip host 10.1.1.10 host 10.2.2.20 eq www",
      "permit udp host 10.1.1.10 host 10.2.2.20 eq 80"
    ],
    "a": 0,
    "e": "HTTP runs over TCP port 80 at the destination, so eq 80 follows the destination address; HTTP is not UDP and the port keyword must trail the destination, not the source."
  },
  {
    "t": "extended-acls",
    "x": "For an extended IPv4 ACL, what is the recommended placement to conserve network resources?",
    "o": [
      "As close to the traffic source as possible",
      "As close to the destination host as possible",
      "On the busiest core uplink interface",
      "On the interface with the lowest bandwidth"
    ],
    "a": 0,
    "e": "Extended ACLs match both source and destination, so filtering near the source drops unwanted traffic before it consumes bandwidth across the network."
  },
  {
    "t": "extended-acls",
    "x": "Which extended ACL entry blocks Telnet from network 192.168.5.0/24 to any destination?",
    "o": [
      "deny tcp 192.168.5.0 0.0.0.255 any eq 23",
      "deny tcp any 192.168.5.0 0.0.0.255 eq 23",
      "deny udp 192.168.5.0 0.0.0.255 any eq 23",
      "deny tcp 192.168.5.0 255.255.255.0 any eq 23"
    ],
    "a": 0,
    "e": "Telnet uses TCP port 23; the source subnet takes wildcard 0.0.0.255 with any as the destination. IOS ACLs require wildcard masks, not a 255.255.255.0 subnet mask."
  },
  {
    "t": "extended-acls",
    "x": "Which fields can an extended IPv4 ACL match that a standard ACL cannot? Choose TWO.",
    "o": [
      "Destination IP address",
      "Layer 4 protocol and port number",
      "Source IP address",
      "Inbound physical interface index",
      "Configured router hostname"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Extended ACLs can match destination address plus Layer 4 protocol and port; standard ACLs match only source address, which both types can evaluate."
  },
  {
    "t": "extended-acls",
    "x": "Which protocol-and-port pairings are correct for use as match criteria in an extended ACL? Choose TWO.",
    "o": [
      "TCP port 22 for SSH",
      "TCP port 443 for HTTPS",
      "UDP port 80 for HTTP",
      "TCP port 69 for TFTP",
      "UDP port 23 for Telnet"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "SSH is TCP 22 and HTTPS is TCP 443. HTTP is TCP 80 not UDP, TFTP is UDP 69, and Telnet is TCP 23, so those pairings are wrong."
  },
  {
    "t": "port-security",
    "x": "What is the default violation mode when port security is enabled on a switch access port?",
    "o": [
      "shutdown",
      "protect",
      "restrict",
      "err-disable-recover"
    ],
    "a": 0,
    "e": "The default violation action is shutdown, which err-disables the port on a violation; protect and restrict must be set explicitly."
  },
  {
    "t": "port-security",
    "x": "What does the command switchport port-security mac-address sticky accomplish on an access port?",
    "o": [
      "It learns MAC addresses and writes them to the running config",
      "It statically pins a single vendor MAC prefix to the port",
      "It permanently disables MAC learning on the interface",
      "It floods learned addresses to all VLAN members"
    ],
    "a": 0,
    "e": "Sticky learning dynamically learns the connected MAC and writes it into the running configuration as a secure address, so it is retained across the current session."
  },
  {
    "t": "port-security",
    "x": "A port-security violation placed an interface into err-disabled state. Which action returns it to service?",
    "o": [
      "Issue shutdown then no shutdown on the interface",
      "Reload the entire switch to clear the condition",
      "Remove the VLAN from the trunk allowed list",
      "Change the interface speed setting to auto"
    ],
    "a": 0,
    "e": "After fixing the cause, shutting the interface and re-enabling it with no shutdown clears the err-disabled state; a full reload is unnecessary."
  },
  {
    "t": "port-security",
    "x": "Which port-security violation modes discard offending frames while keeping the interface forwarding? Choose TWO.",
    "o": [
      "restrict",
      "protect",
      "shutdown",
      "err-disable",
      "monitor"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Both restrict and protect drop violating frames while the port keeps forwarding; restrict also logs and increments a counter, whereas shutdown disables the port."
  },
  {
    "t": "dhcp-snooping",
    "x": "On a switch running DHCP snooping, how should the port toward the legitimate DHCP server be configured?",
    "o": [
      "As a trusted port",
      "As an untrusted port",
      "As a port-security sticky port",
      "As a private VLAN isolated port"
    ],
    "a": 0,
    "e": "The uplink toward the legitimate DHCP server is set trusted so its offers pass, while all access ports stay untrusted to block rogue servers."
  },
  {
    "t": "dhcp-snooping",
    "x": "Which DHCP message will DHCP snooping drop when it arrives inbound on an untrusted port?",
    "o": [
      "DHCPOFFER from a device on that port",
      "DHCPDISCOVER sourced by a client",
      "DHCPREQUEST sourced by a client",
      "DHCPRELEASE from the assigned client"
    ],
    "a": 0,
    "e": "Server-sourced messages such as DHCPOFFER and DHCPACK are illegitimate on untrusted ports and are dropped; client messages like DISCOVER and REQUEST are allowed."
  },
  {
    "t": "dhcp-snooping",
    "x": "What information does the DHCP snooping binding table record for each dynamically assigned client?",
    "o": [
      "MAC address, IP address, VLAN, and switch port",
      "Only the client MAC address and lease time",
      "The client default gateway and DNS server",
      "The switch CPU utilization per VLAN"
    ],
    "a": 0,
    "e": "The binding table records each client's MAC, leased IP, VLAN, and switch port, and this database is later used by DAI and IP source guard."
  },
  {
    "t": "dhcp-snooping",
    "x": "Which steps are required to make DHCP snooping actively filter traffic on VLAN 10? Choose TWO.",
    "o": [
      "Enable DHCP snooping globally",
      "Enable DHCP snooping for VLAN 10",
      "Assign an IP helper address to VLAN 10",
      "Disable spanning tree on the server uplink",
      "Set all access ports to trusted"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "DHCP snooping needs the global enable command plus a per-VLAN enable to filter that VLAN; helper addresses and STP changes are unrelated, and access ports stay untrusted."
  },
  {
    "t": "dynamic-arp-inspection",
    "x": "Dynamic ARP Inspection validates the IP-to-MAC pairing in ARP packets against which data source by default?",
    "o": [
      "The DHCP snooping binding table",
      "The router's CEF forwarding table",
      "The switch MAC address table",
      "A locally configured static ARP cache only"
    ],
    "a": 0,
    "e": "DAI checks ARP packets against the DHCP snooping binding table by default; hosts without a binding need an ARP ACL to be permitted."
  },
  {
    "t": "dynamic-arp-inspection",
    "x": "In a Dynamic ARP Inspection deployment, which ports are typically configured as trusted?",
    "o": [
      "Switch-to-switch uplink ports",
      "End-user access ports",
      "Ports connected to IP phones",
      "Ports in the native VLAN only"
    ],
    "a": 0,
    "e": "Inter-switch uplinks are trusted so ARP is not re-inspected on each hop, while user access ports stay untrusted and are inspected against the bindings."
  },
  {
    "t": "dynamic-arp-inspection",
    "x": "Which attack is Dynamic ARP Inspection primarily designed to mitigate on a switched LAN?",
    "o": [
      "ARP spoofing used for on-path interception",
      "MAC flooding of the switch address table",
      "DHCP starvation of the address pool",
      "VLAN hopping through double tagging"
    ],
    "a": 0,
    "e": "DAI blocks forged ARP replies that enable on-path interception; MAC flooding is handled by port security and VLAN hopping by trunk hardening."
  },
  {
    "t": "dynamic-arp-inspection",
    "x": "A server uses a static IP with no DHCP lease. How can DAI still permit its ARP traffic? Choose TWO.",
    "o": [
      "Define an ARP ACL binding its IP to its MAC",
      "Apply that ARP ACL to the VLAN for inspection",
      "Add a static host route toward the server subnet",
      "Set the server access port to untrusted mode",
      "Disable DHCP snooping globally for the VLAN"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A statically addressed host has no snooping binding, so an ARP ACL defines its valid IP-to-MAC pair and is applied to the VLAN for inspection; routing changes do not help."
  },
  {
    "t": "wireless-security",
    "x": "Which authentication method does WPA3-Personal use to replace the pre-shared key handshake of WPA2?",
    "o": [
      "Simultaneous Authentication of Equals",
      "Extensible Authentication Protocol-TLS",
      "Temporal Key Integrity Protocol",
      "Wired Equivalent Privacy chaining"
    ],
    "a": 0,
    "e": "WPA3-Personal uses SAE, also called Dragonfly, to resist offline dictionary attacks; TKIP and WEP are weaker and EAP-TLS is an enterprise method."
  },
  {
    "t": "wireless-security",
    "x": "In a WPA2-Enterprise deployment using 802.1X, what role does the RADIUS server perform?",
    "o": [
      "It authenticates users and returns keying material to the WLC",
      "It broadcasts the SSID beacon to nearby clients",
      "It assigns DHCP addresses to wireless clients",
      "It encrypts frames over the air toward the client"
    ],
    "a": 0,
    "e": "With 802.1X and EAP the RADIUS server validates user credentials and returns keying material to the authenticator; over-the-air encryption is done by the AP and client."
  },
  {
    "t": "wireless-security",
    "x": "Which practices meaningfully improve the security of an enterprise wireless network? Choose TWO.",
    "o": [
      "Deploy 802.1X authentication with a RADIUS server",
      "Enable WPA3 or WPA2 with AES-CCMP",
      "Rely on hiding the SSID as the primary control",
      "Enable open authentication for guest speed",
      "Use WEP with a long shared key"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Deploying 802.1X with RADIUS and enabling WPA3 or WPA2 with AES-CCMP provide real authentication and encryption; hiding an SSID is easily bypassed and WEP or open auth are insecure."
  },
  {
    "t": "wireless-security",
    "x": "Which statements about WPA2 and WPA3 wireless encryption are correct? Choose TWO.",
    "o": [
      "WPA3 provides forward secrecy for each session",
      "WPA2 requires AES-CCMP for its strongest mode",
      "WEP offers protection equal to WPA2",
      "TKIP is the mandatory cipher in WPA3",
      "Open authentication encrypts management frames"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "WPA3 adds per-session forward secrecy and WPA2's strongest mode mandates AES-CCMP; WEP is weak, WPA3 does not use TKIP, and open authentication provides no encryption."
  },
  {
    "t": "network-automation-impact",
    "x": "A network team wants to reduce human error when deploying identical VLAN settings to 40 access switches. Which approach best achieves consistent, repeatable configuration?",
    "o": [
      "Push the configuration from a central automation tool using a standard template",
      "Configure each switch manually through its own console port",
      "Copy and paste the commands into each switch over separate SSH sessions",
      "Ask each site technician to type the commands from a printed runbook"
    ],
    "a": 0,
    "e": "Template-driven automation applies the same validated configuration everywhere, removing the typos and drift that manual, per-device entry introduces."
  },
  {
    "t": "network-automation-impact",
    "x": "Which two outcomes are primary benefits of adopting network automation for day-to-day operations? Choose TWO.",
    "o": [
      "Faster and more consistent configuration changes across many devices",
      "Reduced configuration drift through standardized templates",
      "Elimination of the need for any IP addressing plan",
      "An automatic increase in physical interface bandwidth",
      "Removal of all routing protocols from the network"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Automation speeds repetitive changes and enforces standard templates that curb drift; it does not change physical bandwidth or remove the need for addressing and routing."
  },
  {
    "t": "network-automation-impact",
    "x": "How does controller-based networking differ from the traditional per-device management model?",
    "o": [
      "A central controller programs many devices from one policy point",
      "Each device must be configured independently at its own CLI",
      "Devices forward traffic without any control plane logic",
      "Only static routes may be used across the entire fabric"
    ],
    "a": 0,
    "e": "Controller-based networking centralizes intent and pushes it to many devices, unlike the traditional model where every device is touched individually at its CLI."
  },
  {
    "t": "network-automation-impact",
    "x": "An organization begins provisioning new branch routers in hours instead of weeks after adopting automation. Which factor most directly produced this improvement?",
    "o": [
      "Standardized machine-driven provisioning replacing manual steps",
      "Slower change windows scheduled only on weekends",
      "More technicians assigned to type commands by hand",
      "Additional approval signatures required per device"
    ],
    "a": 0,
    "e": "Machine-driven provisioning executes standardized steps quickly and repeatably, collapsing lead time that manual, approval-heavy processes stretch out."
  },
  {
    "t": "network-automation-impact",
    "x": "Before rolling out automation broadly, which two concerns should a network team plan for? Choose TWO.",
    "o": [
      "A single scripted error can propagate to many devices at once",
      "Version control and testing are needed for the automation code",
      "Automation removes the need to understand networking fundamentals",
      "Scripts guarantee zero downtime under all conditions",
      "Templates make rollback impossible after any change"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Automation amplifies mistakes across the fleet, and its code must be tested and versioned; it does not replace fundamentals, guarantee uptime, or block rollback."
  },
  {
    "t": "network-automation-impact",
    "x": "Which statement best describes how automation affects configuration consistency in a large network?",
    "o": [
      "Devices converge on one intended baseline defined in source templates",
      "Every device slowly develops its own unique settings over time",
      "Consistency depends entirely on each engineer's memory",
      "Changes can only be verified by physically visiting each site"
    ],
    "a": 0,
    "e": "Source-of-truth templates drive every device to the same intended baseline, whereas manual methods let per-device settings drift apart."
  },
  {
    "t": "sdn-architecture",
    "x": "In a software-defined network, which plane is decoupled from the forwarding devices and centralized on a controller?",
    "o": [
      "The control plane that makes forwarding decisions",
      "The data plane that physically forwards frames",
      "The power distribution plane inside each switch",
      "The optical transceiver plane on each uplink"
    ],
    "a": 0,
    "e": "SDN moves the control plane to a central controller while devices keep a data plane that forwards traffic per the controller's instructions."
  },
  {
    "t": "sdn-architecture",
    "x": "A controller uses OpenFlow or NETCONF to program flow entries onto managed switches. What is this type of interface called?",
    "o": [
      "A southbound interface toward the network devices",
      "A northbound interface toward the applications",
      "An east-west interface between two controllers",
      "A console interface for local device access"
    ],
    "a": 0,
    "e": "Southbound interfaces such as OpenFlow and NETCONF connect the controller down to devices; northbound interfaces face the applications above the controller."
  },
  {
    "t": "sdn-architecture",
    "x": "An orchestration application requests network services from an SDN controller through a REST API. Which interface does this application use?",
    "o": [
      "The northbound interface exposed by the controller",
      "The southbound interface toward the switches",
      "The management loopback of a single router",
      "The out-of-band serial rollover cable"
    ],
    "a": 0,
    "e": "Applications consume controller services over the northbound interface, commonly a REST API; the southbound side is what talks to the devices."
  },
  {
    "t": "sdn-architecture",
    "x": "Which two elements are core to a controller-based SDN architecture? Choose TWO.",
    "o": [
      "A centralized controller holding the network control plane",
      "Southbound protocols that program the forwarding devices",
      "A spanning-tree root bridge election per VLAN",
      "A dedicated broadcast domain for every host",
      "A separate default gateway on each access port"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "SDN centers on a controller that owns the control plane and southbound protocols that push forwarding state to devices; the other choices are ordinary switching concepts."
  },
  {
    "t": "sdn-architecture",
    "x": "Which product functions as an SDN controller for Cisco campus networks, providing central policy and assurance?",
    "o": [
      "Cisco Catalyst Center",
      "Cisco Packet Tracer",
      "Cisco Discovery Protocol",
      "Cisco AnyConnect Client"
    ],
    "a": 0,
    "e": "Catalyst Center, formerly DNA Center, is the campus SDN controller for policy and assurance; the others are a simulator, a discovery protocol, and a VPN client."
  },
  {
    "t": "sdn-architecture",
    "x": "What are two advantages of centralizing forwarding policy on an SDN controller? Choose TWO.",
    "o": [
      "A single point to apply and audit network-wide policy",
      "Programmatic changes pushed to many devices quickly",
      "Each switch independently computes unrelated policies",
      "Physical cabling is no longer required between devices",
      "Broadcast storms are prevented without any loop protection"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Centralized policy gives one place to define and audit intent and to program devices at scale; it does not remove cabling or replace loop-prevention mechanisms."
  },
  {
    "t": "ai-ml-network-operations",
    "x": "How do AI and machine learning most commonly assist network operations teams today?",
    "o": [
      "By analyzing telemetry to detect anomalies and predict issues",
      "By physically replacing failed transceivers automatically",
      "By eliminating the need for any monitoring data",
      "By assigning IP addresses without DHCP or static config"
    ],
    "a": 0,
    "e": "AI and ML models ingest large volumes of telemetry to surface anomalies and forecast problems; they still rely on collected data and perform no physical repairs."
  },
  {
    "t": "ai-ml-network-operations",
    "x": "A monitoring platform flags a wireless controller as likely to exhaust capacity next week based on usage trends. Which capability does this illustrate?",
    "o": [
      "Predictive analytics driven by machine learning",
      "Static threshold logging with no trend analysis",
      "Manual packet capture on a mirrored switch port",
      "Physical inspection of the device chassis"
    ],
    "a": 0,
    "e": "Forecasting a future condition from usage trends is predictive analytics; static thresholds and manual captures only report on current or past state."
  },
  {
    "t": "ai-ml-network-operations",
    "x": "Which two tasks are well suited to AI-assisted network operations? Choose TWO.",
    "o": [
      "Correlating many alerts into a single probable root cause",
      "Baselining normal traffic to highlight unusual behavior",
      "Crimping RJ45 connectors onto new patch cables",
      "Deciding the paint color of the data center walls",
      "Manually reading every syslog line in real time"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "AI excels at correlating noisy alerts into likely root causes and baselining traffic to flag anomalies; it does not perform manual or physical labor."
  },
  {
    "t": "ai-ml-network-operations",
    "x": "When using an AI assistant to generate device configurations, which practice is most important before deploying the output?",
    "o": [
      "Review and validate the generated config in a test environment",
      "Apply it directly to all production devices immediately",
      "Assume the output is always error-free and complete",
      "Delete existing backups to force the new config in"
    ],
    "a": 0,
    "e": "AI-generated configuration must be reviewed and tested because models can produce inaccurate or incomplete output, and blind deployment risks widespread outages."
  },
  {
    "t": "ai-ml-network-operations",
    "x": "Why is high-quality telemetry data essential for machine learning in network operations?",
    "o": [
      "Model accuracy depends on complete and reliable input data",
      "Models ignore all input data once they are trained once",
      "Poor data always improves anomaly detection results",
      "Telemetry is only useful for powering the devices"
    ],
    "a": 0,
    "e": "ML predictions are only as good as their inputs, so incomplete or noisy telemetry degrades accuracy; quality data is what makes anomaly detection reliable."
  },
  {
    "t": "rest-apis",
    "x": "An application must read information from a REST API without modifying any resource. Which HTTP method fits this requirement?",
    "o": [
      "GET",
      "DELETE",
      "PUT",
      "PATCH"
    ],
    "a": 0,
    "e": "GET retrieves a resource without changing it, making it the read-only method; DELETE, PUT, and PATCH all alter server-side data."
  },
  {
    "t": "rest-apis",
    "x": "Which HTTP method is typically used to create a new resource by submitting data to a REST endpoint?",
    "o": [
      "POST",
      "GET",
      "HEAD",
      "OPTIONS"
    ],
    "a": 0,
    "e": "POST submits data to create a new resource; GET only reads, while HEAD and OPTIONS return metadata rather than creating anything."
  },
  {
    "t": "rest-apis",
    "x": "A REST call returns HTTP status code 401. What does this response indicate to the client?",
    "o": [
      "Authentication is required or has failed",
      "The request completed successfully",
      "The requested resource was not found",
      "The server encountered an internal error"
    ],
    "a": 0,
    "e": "A 401 signals missing or invalid authentication; 200 means success, 404 means not found, and 500 indicates a server-side error."
  },
  {
    "t": "rest-apis",
    "x": "Which two statements accurately describe a REST API used for network programmability? Choose TWO.",
    "o": [
      "It commonly uses HTTP methods to act on resources",
      "It is typically stateless between separate requests",
      "It requires a permanent TCP session for every field read",
      "It can only return data formatted as plain text",
      "It removes the need for any authentication tokens"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "REST APIs use HTTP verbs on resources and treat each request statelessly; they support structured formats like JSON and still require authentication."
  },
  {
    "t": "rest-apis",
    "x": "A script authenticates to a controller's REST API and receives a token it includes on later calls. What is the main purpose of that token?",
    "o": [
      "To authorize subsequent API calls for the session",
      "To encrypt the physical cabling to the controller",
      "To assign an IP address to the client device",
      "To compress the JSON payload during transfer"
    ],
    "a": 0,
    "e": "The token proves the client is authenticated so later calls are authorized; it does not handle cabling, addressing, or payload compression."
  },
  {
    "t": "rest-apis",
    "x": "Which two items are commonly part of an HTTP request made to a REST API? Choose TWO.",
    "o": [
      "A method such as GET or POST",
      "Headers that carry metadata like content type",
      "A spanning-tree bridge priority value",
      "An OSPF area identifier for the request",
      "A VLAN trunk native assignment"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "REST requests carry an HTTP method and headers describing the payload; the other options are unrelated Layer 2 and routing parameters."
  },
  {
    "t": "config-management",
    "x": "Which configuration management tool is agentless and connects to network devices over SSH to push changes?",
    "o": [
      "Ansible",
      "Puppet",
      "Chef",
      "Nagios"
    ],
    "a": 0,
    "e": "Ansible is agentless and typically uses SSH to apply changes, so no software must run on the managed device; Puppet and Chef use agents, and Nagios is a monitoring tool."
  },
  {
    "t": "config-management",
    "x": "In Ansible, what is the name of the file that defines the ordered set of tasks to run against managed hosts?",
    "o": [
      "A playbook",
      "A manifest",
      "A recipe",
      "A cookbook"
    ],
    "a": 0,
    "e": "Ansible organizes tasks in a playbook; manifests belong to Puppet, while recipes and cookbooks are Chef constructs."
  },
  {
    "t": "config-management",
    "x": "Which two goals do configuration management tools such as Ansible and Puppet help teams achieve? Choose TWO.",
    "o": [
      "Enforcing a defined desired state across many devices",
      "Reapplying configuration to correct drift automatically",
      "Physically racking and cabling new switches",
      "Negotiating spanning-tree roots between bridges",
      "Replacing the need for any device operating system"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "These tools declare a desired state and can reconcile drift by reapplying it; they do not perform physical installation or replace device software."
  },
  {
    "t": "config-management",
    "x": "A configuration task can run many times yet leaves the device in the same final state without repeating changes. What property describes this behavior?",
    "o": [
      "Idempotency",
      "Convergence latency",
      "Statefulness",
      "Recursion"
    ],
    "a": 0,
    "e": "Idempotency means repeated runs produce the same end state and skip changes already in place, which prevents unnecessary reconfiguration."
  },
  {
    "t": "config-management",
    "x": "Which two constructs does Ansible use to describe managed systems and where to apply the tasks? Choose TWO.",
    "o": [
      "An inventory listing the target hosts",
      "Modules that carry out specific actions",
      "A spanning-tree instance per VLAN",
      "A routing information base per interface",
      "A MAC address table on the controller"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Ansible reads an inventory of hosts and runs modules that perform tasks; the remaining options are unrelated switching and routing structures."
  },
  {
    "t": "config-management",
    "x": "Which statement correctly describes how Puppet typically manages configuration on its nodes?",
    "o": [
      "An agent on each node pulls its desired state from a server",
      "It never uses any central server or master node",
      "It only works by physically consoling into devices",
      "It requires disabling SSH on every managed node"
    ],
    "a": 0,
    "e": "Puppet commonly runs an agent that pulls policy from a Puppet server, which differs from Ansible's agentless push-over-SSH model."
  },
  {
    "t": "json-data",
    "x": "In JSON, how is a collection of key-value pairs represented?",
    "o": [
      "As an object enclosed in curly braces",
      "As a list enclosed in square brackets",
      "As a value wrapped in angle brackets",
      "As text separated only by tab characters"
    ],
    "a": 0,
    "e": "JSON objects use curly braces around comma-separated key-value pairs; square brackets denote arrays, not key-value collections."
  },
  {
    "t": "json-data",
    "x": "Given the JSON fragment \"vlans\": [10, 20, 30], which data structure is the value assigned to the vlans key?",
    "o": [
      "An array of numeric values",
      "An object with three keys",
      "A single string value",
      "A boolean set to true"
    ],
    "a": 0,
    "e": "Square brackets holding comma-separated items form a JSON array; here the array contains three numbers, not an object or string."
  },
  {
    "t": "json-data",
    "x": "Which two of the following are valid JSON value types? Choose TWO.",
    "o": [
      "String",
      "Boolean",
      "Interface",
      "Subnet",
      "Trunk"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "JSON values may be strings, numbers, booleans, arrays, objects, or null; interface, subnet, and trunk are networking terms, not JSON types."
  },
  {
    "t": "json-data",
    "x": "A REST response contains {\"device\": {\"hostname\": \"R1\", \"uptime\": 480}}. What is the value of the hostname key?",
    "o": [
      "R1",
      "480",
      "device",
      "uptime"
    ],
    "a": 0,
    "e": "The hostname key maps to the string R1 inside the nested device object; 480 is the uptime value, and device is the outer key."
  },
  {
    "t": "json-data",
    "x": "Which two rules must valid JSON follow when structuring data? Choose TWO.",
    "o": [
      "Keys and string values are wrapped in double quotes",
      "Elements within an object are separated by commas",
      "Every line must end with a semicolon character",
      "A comment is required before each key name",
      "Indentation changes the meaning of the data"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "JSON requires double-quoted keys and strings and comma-separated elements; it forbids comments, needs no semicolons, and ignores indentation for meaning."
  }
],
}
