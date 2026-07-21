// CCNA 200-301 performance-based items (cisco vendor: terminal, hotspot, match, order).
// 6 terminal CLI sims + 2 hotspot + 2 match + 2 order, per the authoring kit.
export default {
  examId: "ccna-200-301",
  pbqs: [
    // ---------- Terminal (6) ----------
    {
      kind: "terminal",
      t: "trunking",
      title: "Build a VLAN and an 802.1Q trunk",
      scen: "On access switch SW1, create the sales VLAN and turn uplink Gi0/1 into a trunk. Enter one command per objective.",
      host: "SW1(config)#",
      tasks: [
        { prompt: "Create VLAN 10.", accept: ["vlan 10"], output: "SW1(config-vlan)#" },
        { prompt: "Name VLAN 10 SALES.", accept: ["name sales"], output: "SW1(config-vlan)#" },
        { prompt: "On interface Gi0/1, set the switchport mode to trunk.", accept: ["switchport mode trunk"], output: "SW1(config-if)#" },
        { prompt: "Set the trunk native VLAN to 99.", accept: ["switchport trunk native vlan 99"], output: "SW1(config-if)#" },
      ],
    },
    {
      kind: "terminal",
      t: "ospfv2",
      title: "Configure single-area OSPFv2",
      scen: "On router R1, enable OSPF process 1 in area 0, set a router ID, advertise the LAN, and stop hellos on the LAN. One command per objective.",
      host: "R1(config)#",
      tasks: [
        { prompt: "Enter OSPF process 1 router configuration.", accept: ["router ospf 1"], output: "R1(config-router)#" },
        { prompt: "Set the OSPF router ID to 1.1.1.1.", accept: ["router-id 1\\.1\\.1\\.1"], output: "R1(config-router)#" },
        { prompt: "Advertise network 10.0.0.0/24 into area 0.", accept: ["network 10\\.0\\.0\\.0 0\\.0\\.0\\.255 area 0"], output: "R1(config-router)#" },
        { prompt: "Make interface Gi0/0 passive so it sends no hellos.", accept: ["passive-interface (gi|gigabitethernet)0/0", "passive-interface gi 0/0"], output: "R1(config-router)#" },
      ],
    },
    {
      kind: "terminal",
      t: "extended-acls",
      title: "Configure and apply an extended ACL",
      scen: "On R1, block only HTTP from host 192.168.1.10 to server 10.0.0.5, permit everything else, and apply it inbound on Gi0/1. One command per objective.",
      host: "R1(config)#",
      tasks: [
        { prompt: "Create a named extended ACL called BLOCK_WEB.", accept: ["ip access-list extended block_web"], output: "R1(config-ext-nacl)#" },
        { prompt: "Deny TCP from host 192.168.1.10 to host 10.0.0.5 on the web port.", accept: ["deny tcp host 192\\.168\\.1\\.10 host 10\\.0\\.0\\.5 eq (80|www)"], output: "R1(config-ext-nacl)#" },
        { prompt: "Permit all other IP traffic.", accept: ["permit ip any any"], output: "R1(config-ext-nacl)#" },
        { prompt: "Apply BLOCK_WEB inbound on interface Gi0/1.", accept: ["ip access-group block_web in"], output: "R1(config-if)#" },
      ],
    },
    {
      kind: "terminal",
      t: "nat-dynamic-pat",
      title: "Configure inside source NAT with PAT",
      scen: "On R1, overload the inside 192.168.1.0/24 network onto outside interface Gi0/1. Gi0/0 is inside, Gi0/1 is outside. One command per objective.",
      host: "R1(config)#",
      tasks: [
        { prompt: "Create standard ACL 1 permitting 192.168.1.0/24.", accept: ["access-list 1 permit 192\\.168\\.1\\.0 0\\.0\\.0\\.255"], output: "R1(config)#" },
        { prompt: "Configure PAT overloading ACL 1 onto interface Gi0/1.", accept: ["ip nat inside source list 1 interface (gi|gigabitethernet)0/1 overload"], output: "R1(config)#" },
        { prompt: "On Gi0/0, mark the interface as NAT inside.", accept: ["ip nat inside"], output: "R1(config-if)#" },
        { prompt: "On Gi0/1, mark the interface as NAT outside.", accept: ["ip nat outside"], output: "R1(config-if)#" },
      ],
    },
    {
      kind: "terminal",
      t: "device-management-access",
      title: "Harden device management access",
      scen: "Secure switch SW1 so only encrypted SSH is allowed to the VTY lines. One command per objective.",
      host: "SW1(config)#",
      tasks: [
        { prompt: "Set the enable secret to Cisco123.", accept: ["enable secret cisco123"], output: "SW1(config)#" },
        { prompt: "Encrypt all plaintext passwords in the configuration.", accept: ["service password-encryption"], output: "SW1(config)#" },
        { prompt: "Set the IP domain name to example.com so RSA keys can be generated.", accept: ["ip domain[ -]name example\\.com"], output: "SW1(config)#" },
        { prompt: "On the VTY lines, allow SSH only.", accept: ["transport input ssh"], output: "SW1(config-line)#" },
      ],
    },
    {
      kind: "terminal",
      t: "static-routing",
      title: "Configure static and floating default routes",
      scen: "On R1, install a primary default route, a floating backup default, a specific IPv4 route, and an IPv6 default. One command per objective.",
      host: "R1(config)#",
      tasks: [
        { prompt: "Add a default route via next hop 203.0.113.1.", accept: ["ip route 0\\.0\\.0\\.0 0\\.0\\.0\\.0 203\\.0\\.113\\.1"], output: "R1(config)#" },
        { prompt: "Add a floating default via 198.51.100.1 with administrative distance 10.", accept: ["ip route 0\\.0\\.0\\.0 0\\.0\\.0\\.0 198\\.51\\.100\\.1 10"], output: "R1(config)#" },
        { prompt: "Add a static route to 10.2.2.0/24 via 10.1.1.2.", accept: ["ip route 10\\.2\\.2\\.0 255\\.255\\.255\\.0 10\\.1\\.1\\.2"], output: "R1(config)#" },
        { prompt: "Add an IPv6 default route via 2001:db8::1.", accept: ["ipv6 route ::/0 2001:db8::1"], output: "R1(config)#" },
      ],
    },

    // ---------- Hotspot (2) ----------
    {
      kind: "hotspot",
      t: "rapid-pvst",
      title: "Find the spanning-tree root bridge",
      scen: "Four switches run Rapid PVST+ for VLAN 1. Each switch's bridge priority for VLAN 1 is shown; assume all links are equal cost.",
      prompt: "Select the switch that is elected the root bridge for VLAN 1.",
      nodes: [
        { id: "sw1", x: 26, y: 16, label: "SW1", sub: "priority 32769", icon: "switch" },
        { id: "sw2", x: 74, y: 16, label: "SW2", sub: "priority 24577", icon: "switch" },
        { id: "sw3", x: 26, y: 50, label: "SW3", sub: "priority 32769", icon: "switch" },
        { id: "sw4", x: 74, y: 50, label: "SW4", sub: "priority 28673", icon: "switch" },
      ],
      edges: [["sw1", "sw2"], ["sw1", "sw3"], ["sw2", "sw4"], ["sw3", "sw4"], ["sw1", "sw4"]],
      targets: ["sw2"],
      maxSelect: 1,
    },
    {
      kind: "hotspot",
      t: "ospf-dr-bdr",
      title: "Predict the OSPF DR election",
      scen: "Three routers share a broadcast Ethernet segment and form OSPF adjacencies. Each router's OSPF interface priority and router ID are shown.",
      prompt: "Select the router that will be elected the OSPF Designated Router (DR).",
      nodes: [
        { id: "seg", x: 50, y: 30, label: "Segment", icon: "switch" },
        { id: "r1", x: 20, y: 14, label: "R1", sub: "pri 1 / RID 1.1.1.1", icon: "router" },
        { id: "r2", x: 80, y: 14, label: "R2", sub: "pri 200 / RID 2.2.2.2", icon: "router" },
        { id: "r3", x: 50, y: 52, label: "R3", sub: "pri 100 / RID 3.3.3.3", icon: "router" },
      ],
      edges: [["seg", "r1"], ["seg", "r2"], ["seg", "r3"]],
      targets: ["r2"],
      maxSelect: 1,
    },

    // ---------- Match (2) ----------
    {
      kind: "match",
      t: "routing-table",
      title: "Match each route source to its administrative distance",
      scen: "A router compares routes to the same destination by administrative distance. Match each route source to its default AD.",
      choices: ["AD 0", "AD 1", "AD 90", "AD 110", "AD 120"],
      items: [
        { l: "Directly connected interface", a: 0 },
        { l: "Static route", a: 1 },
        { l: "EIGRP internal route", a: 2 },
        { l: "OSPF route", a: 3 },
        { l: "RIP route", a: 4 },
      ],
    },
    {
      kind: "match",
      t: "ipv6-address-types",
      title: "Match each IPv6 address type to its prefix",
      scen: "Match each IPv6 address type to the prefix range it uses.",
      choices: ["fe80::/10", "fc00::/7", "2000::/3", "ff00::/8", "::1/128"],
      items: [
        { l: "Link-local", a: 0 },
        { l: "Unique local", a: 1 },
        { l: "Global unicast", a: 2 },
        { l: "Multicast", a: 3 },
        { l: "Loopback", a: 4 },
      ],
    },

    // ---------- Order (2) ----------
    {
      kind: "order",
      t: "dhcp",
      title: "Order the DHCP DORA exchange",
      scen: "A client with no address obtains one from a DHCP server. Put the four messages in the order they occur.",
      steps: [
        "Discover: the client broadcasts to find a DHCP server",
        "Offer: a server offers an available IP address",
        "Request: the client requests the offered address",
        "Acknowledgement: the server confirms and leases the address",
      ],
    },
    {
      kind: "order",
      t: "spanning-tree",
      title: "Order the spanning-tree convergence decisions",
      scen: "Put the steps STP takes to converge a switched topology in the correct order.",
      steps: [
        "Elect the root bridge (lowest bridge ID)",
        "Each non-root switch chooses its root port (lowest cost to root)",
        "Elect one designated port per segment",
        "Put the remaining non-designated ports into blocking state",
      ],
    },
  ],
}
