// Reference-sheet content, authored 2026-08 by SME agents and adversarially
// fact-checked (ports sheet formally verified; the other three row-by-row
// reviewed at integration). Rendered by the RefSheet pages in InfoPages.tsx;
// meta/FAQ for each page lives in guide-meta.ts and reads the faq here.

export interface RefSheetSection {
  heading: string
  note?: string
  columns: string[]
  rows: string[][]
}

export interface RefSheet {
  intro: string
  sections: RefSheetSection[]
  faq: [string, string][]
}

export const REF_SHEETS: Record<"ports" | "ccnacli" | "cables" | "cloudsvc", RefSheet> = {
 "ports": {
  "intro": "Both CompTIA Network+ (N10-009) and CompTIA Security+ (SY0-701) expect instant recall of common ports: the number, the transport, and which secure service replaces which insecure one. Drill the main table until the port number alone triggers the service name, then spend your remaining time on the secure/insecure pairs and the handful of lookalike ports the exams use as distractors. Transports shown are the ones the exams grade; several services are registered for both TCP and UDP.",
  "sections": [
   {
    "heading": "Ports to know cold",
    "columns": [
     "Port / transport",
     "Service",
     "Remember for the exam"
    ],
    "rows": [
     [
      "20 TCP",
      "FTP (data)",
      "Active-mode data channel; pairs with 21"
     ],
     [
      "21 TCP",
      "FTP (control)",
      "Logins and commands, all cleartext"
     ],
     [
      "22 TCP",
      "SSH, SFTP, SCP",
      "One port, three services; SFTP rides inside SSH"
     ],
     [
      "23 TCP",
      "Telnet",
      "Cleartext remote shell; the fix is always SSH on 22"
     ],
     [
      "25 TCP",
      "SMTP",
      "Server-to-server mail relay, not client submission"
     ],
     [
      "53 UDP/TCP",
      "DNS",
      "UDP for queries; TCP for zone transfers and large responses"
     ],
     [
      "67, 68 UDP",
      "DHCP",
      "Server listens on 67, client on 68; broadcast-based"
     ],
     [
      "69 UDP",
      "TFTP",
      "No authentication; firmware and config file pushes"
     ],
     [
      "80 TCP",
      "HTTP",
      "Cleartext web; redirect it to 443"
     ],
     [
      "88 TCP/UDP",
      "Kerberos",
      "Active Directory ticket authentication; needs accurate time"
     ],
     [
      "110 TCP",
      "POP3",
      "Download-and-delete mail; secure twin is 995"
     ],
     [
      "123 UDP",
      "NTP",
      "Time sync; clock skew breaks Kerberos and log correlation"
     ],
     [
      "137, 138 UDP; 139 TCP",
      "NetBIOS (name, datagram, session)",
      "Legacy Windows networking; 139 carries SMB sessions"
     ],
     [
      "143 TCP",
      "IMAP",
      "Mail stays on the server; secure twin is 993"
     ],
     [
      "161 UDP",
      "SNMP",
      "Manager polls agents (get/set)"
     ],
     [
      "162 UDP",
      "SNMP traps",
      "Agents push unsolicited alerts to the manager"
     ],
     [
      "389 TCP/UDP",
      "LDAP",
      "Directory lookups (Active Directory); cleartext by default"
     ],
     [
      "443 TCP",
      "HTTPS",
      "HTTP over TLS; HTTP/3 uses QUIC on UDP 443"
     ],
     [
      "445 TCP",
      "SMB",
      "Direct-hosted Windows file sharing; no NetBIOS needed"
     ],
     [
      "465 TCP",
      "SMTPS",
      "Mail submission with implicit TLS from the first byte"
     ],
     [
      "514 UDP",
      "Syslog",
      "Unencrypted, connectionless log forwarding"
     ],
     [
      "587 TCP",
      "SMTP submission",
      "Client mail submission, upgraded with STARTTLS; N10-009 objectives label it SMTPS"
     ],
     [
      "636 TCP",
      "LDAPS",
      "LDAP wrapped in TLS"
     ],
     [
      "993 TCP",
      "IMAPS",
      "IMAP over TLS"
     ],
     [
      "995 TCP",
      "POP3S",
      "POP3 over TLS"
     ],
     [
      "1433 TCP",
      "Microsoft SQL Server",
      "Database engine; never expose to the internet"
     ],
     [
      "1521 TCP",
      "Oracle Database (TNS listener)",
      "Oracle's default listener port"
     ],
     [
      "3306 TCP",
      "MySQL / MariaDB",
      "Common open-source database port"
     ],
     [
      "3389 TCP",
      "RDP",
      "Remote Desktop; classic brute-force target, gate behind a VPN"
     ],
     [
      "5060 TCP/UDP",
      "SIP",
      "VoIP call signaling, unencrypted"
     ],
     [
      "5061 TCP",
      "SIP over TLS",
      "Encrypted signaling only; the voice itself is RTP/SRTP"
     ],
     [
      "6514 TCP",
      "Syslog over TLS",
      "Secure syslog; note the switch to TCP from UDP 514"
     ]
    ],
    "note": "When two numbers appear together (20/21, 67/68, 161/162), expect the exam to test which side is which."
   },
   {
    "heading": "Secure vs insecure pairs",
    "columns": [
     "Insecure (port)",
     "Secure replacement (port)",
     "Exam angle"
    ],
    "rows": [
     [
      "Telnet (23)",
      "SSH (22)",
      "Different protocol and different port"
     ],
     [
      "HTTP (80)",
      "HTTPS (443)",
      "TLS for the web; HSTS enforces it"
     ],
     [
      "FTP (20/21)",
      "SFTP (22) or FTPS (990 implicit)",
      "SFTP is SSH-based, FTPS is TLS-based; they are not the same protocol"
     ],
     [
      "SNMPv1/v2c (161/162)",
      "SNMPv3 (161/162)",
      "Same ports; security comes from the version, not the port"
     ],
     [
      "LDAP (389)",
      "LDAPS (636)",
      "Directory binds carry credentials; encrypt them"
     ],
     [
      "POP3 (110)",
      "POP3S (995)",
      "Add TLS, new port"
     ],
     [
      "IMAP (143)",
      "IMAPS (993)",
      "Add TLS, new port"
     ],
     [
      "SMTP cleartext (25)",
      "Submission 587 (STARTTLS) or SMTPS 465",
      "25 stays for server-to-server relay"
     ],
     [
      "Syslog (514 UDP)",
      "Syslog over TLS (6514 TCP)",
      "Transport changes from UDP to TCP"
     ],
     [
      "SIP (5060)",
      "SIP over TLS (5061)",
      "Signaling encrypted; pair with SRTP for the media"
     ]
    ]
   },
   {
    "heading": "Easily confused",
    "columns": [
     "Ports",
     "The trap",
     "Keep them straight"
    ],
    "rows": [
     [
      "69 vs 21",
      "TFTP vs FTP",
      "Trivial FTP = UDP 69, no logins; full FTP = TCP 21 with authentication"
     ],
     [
      "161 vs 162",
      "SNMP poll vs trap",
      "Manager asks on 161; agents volunteer alerts on 162"
     ],
     [
      "445 vs 139",
      "Modern vs legacy SMB",
      "445 is SMB direct over TCP; 139 is SMB riding a NetBIOS session"
     ],
     [
      "465 vs 587",
      "Implicit TLS vs STARTTLS",
      "465 is encrypted from the first byte; 587 starts plain and upgrades with STARTTLS"
     ],
     [
      "67 vs 68",
      "DHCP server vs client",
      "Server listens on 67, client on 68; server comes first numerically"
     ],
     [
      "993 vs 995",
      "IMAPS vs POP3S",
      "Alphabetical matches numerical: IMAP (993) before POP3 (995)"
     ]
    ]
   }
  ],
  "faq": [
   [
    "Is DNS TCP or UDP?",
    "Both, on port 53. Standard name queries use UDP, while zone transfers and responses too large for a single UDP datagram use TCP. If an exam question mentions zone transfers, the answer involves TCP 53."
   ],
   [
    "What is the difference between port 465 and port 587?",
    "Both are for client mail submission. Port 465 (SMTPS) uses implicit TLS, meaning the session is encrypted from the very first byte, while 587 starts in plaintext and upgrades to encryption with the STARTTLS command. Port 25 remains reserved for server-to-server relay."
   ],
   [
    "Does SNMPv3 use a different port than SNMPv1 or v2c?",
    "No. Every SNMP version polls on UDP 161 and sends traps on UDP 162; version 3 adds authentication and encryption inside the protocol itself. This is a favorite trick because it is the one secure upgrade on the list that does not change ports."
   ],
   [
    "Is SFTP the same thing as FTPS?",
    "No, and both exams test this. SFTP is a separate file-transfer protocol that runs inside an SSH session on TCP 22, while FTPS is classic FTP wrapped in TLS, with implicit mode commonly on port 990. SFTP has nothing to do with TLS or port 21."
   ]
  ]
 },
 "ccnacli": {
  "intro": "Cisco CCNA (200-301) expects you to type, read, and troubleshoot IOS commands from memory, and the CLI simulations grade the exact sequence you enter. This sheet collects the mode navigation, verification commands, and base configuration recipes that appear most on the current v1.1 blueprint, plus the abbreviations you will see in real lab output. Commands work on both routers and Catalyst switches unless a row says otherwise.",
  "sections": [
   {
    "heading": "Modes and navigation",
    "columns": [
     "Command",
     "Where it takes you",
     "Prompt after",
     "Remember"
    ],
    "rows": [
     [
      "(log in)",
      "User EXEC",
      "Switch>",
      "Limited show commands; no config changes"
     ],
     [
      "enable",
      "Privileged EXEC",
      "Switch#",
      "disable drops back to user EXEC"
     ],
     [
      "configure terminal",
      "Global config",
      "Switch(config)#",
      "The only door into configuration modes"
     ],
     [
      "interface g0/1",
      "Interface config",
      "Switch(config-if)#",
      "interface range g0/1-24 edits many ports at once"
     ],
     [
      "line con 0 / line vty 0 15",
      "Line config",
      "Switch(config-line)#",
      "Console is one line; vty lines carry SSH/Telnet sessions"
     ],
     [
      "exit",
      "Up one mode level",
      "varies",
      "From global config it lands in privileged EXEC"
     ],
     [
      "end (or Ctrl+Z)",
      "Privileged EXEC",
      "Switch#",
      "Jumps all the way out from any config depth"
     ],
     [
      "do <exec command>",
      "Stays in config mode",
      "unchanged",
      "Runs show/EXEC commands without leaving config, e.g. do sh run"
     ]
    ],
    "note": "Prompt text is the fastest clue in sim questions: > is user EXEC, # is privileged EXEC, (config)# and deeper are config modes."
   },
   {
    "heading": "Everyday verification",
    "columns": [
     "Command",
     "Question it answers",
     "Remember"
    ],
    "rows": [
     [
      "show running-config",
      "What is configured right now (in RAM)?",
      "Lost on reload unless copied to startup-config"
     ],
     [
      "show ip interface brief",
      "Which interfaces are up, with what IPs?",
      "up/up is healthy; administratively down means it needs no shutdown"
     ],
     [
      "show vlan brief",
      "Which VLANs exist and which access ports are in each?",
      "Trunk ports do not appear in the port list"
     ],
     [
      "show interfaces status",
      "Per-port speed, duplex, VLAN, connected state?",
      "a-full / a-100 prefixes mean autonegotiated"
     ],
     [
      "show interfaces trunk",
      "Which trunks formed; native and allowed VLANs?",
      "Empty output = no trunk formed (classic DTP auto/auto miss)"
     ],
     [
      "show ip route",
      "Which route will forward this destination?",
      "Longest prefix wins; codes: C connected, S static, O OSPF"
     ],
     [
      "show mac address-table",
      "Which port learned this MAC address?",
      "Dynamic entries age out after 300 seconds by default"
     ],
     [
      "show cdp neighbors",
      "What device and port sit at the far end of each link?",
      "Add detail for IP and IOS version; CDP is Cisco-only, LLDP is the open standard"
     ],
     [
      "show version",
      "IOS version, uptime, model, config register?",
      "Register 0x2102 = normal boot; shown on the last line"
     ]
    ]
   },
   {
    "heading": "Base switch and router config",
    "columns": [
     "Task",
     "Commands (in order)",
     "Remember"
    ],
    "rows": [
     [
      "Hostname",
      "hostname SW1",
      "A non-default hostname is required before generating RSA keys"
     ],
     [
      "Login banner",
      "banner motd #No unauthorized access#",
      "The first character after motd is the delimiter that ends the text"
     ],
     [
      "Console password",
      "line con 0 ; password X ; login",
      "Bare login means: check the line password"
     ],
     [
      "Local user account",
      "username admin secret Str0ng!",
      "secret stores a hash; the older password keyword stores plaintext"
     ],
     [
      "Remote-access lines",
      "line vty 0 15 ; login local ; transport input ssh",
      "login local checks username/secret pairs; transport input ssh blocks Telnet"
     ],
     [
      "Privileged-mode password",
      "enable secret X",
      "Hashed, and always overrides an enable password if both exist"
     ],
     [
      "Hide plaintext passwords",
      "service password-encryption",
      "Weak, reversible type 7; it obscures, it does not secure"
     ],
     [
      "Enable SSH",
      "ip domain-name example.com ; crypto key generate rsa modulus 2048 ; ip ssh version 2",
      "Keys need hostname + domain name set first; SSHv2 needs at least 768-bit keys, and modern IOS XE (17.11.1+) requires 2048"
     ],
     [
      "Router interface IP",
      "interface g0/0 ; ip address 10.1.1.1 255.255.255.0 ; no shutdown",
      "Router ports default to shutdown; switch ports default to up"
     ],
     [
      "Switch management IP",
      "interface vlan 1 ; ip address 10.1.1.2 255.255.255.0 ; no shutdown",
      "An SVI (virtual interface), not a physical port"
     ],
     [
      "Switch default gateway",
      "ip default-gateway 10.1.1.1",
      "Global command on a Layer 2 switch so it can reach other subnets"
     ]
    ]
   },
   {
    "heading": "VLANs and trunking",
    "columns": [
     "Task",
     "Commands (in order)",
     "Remember"
    ],
    "rows": [
     [
      "Create and name a VLAN",
      "vlan 10 ; name SALES",
      "Assigning a port to a VLAN that does not exist auto-creates it"
     ],
     [
      "Access port",
      "switchport mode access ; switchport access vlan 10",
      "One data VLAN per access port; a phone uses switchport voice vlan separately"
     ],
     [
      "Static trunk",
      "switchport mode trunk",
      "Older switches need switchport trunk encapsulation dot1q first"
     ],
     [
      "Stop DTP negotiation",
      "switchport nonegotiate",
      "Two ports left at dynamic auto will never form a trunk"
     ],
     [
      "Native VLAN",
      "switchport trunk native vlan 99",
      "Carries untagged frames; a mismatch triggers CDP warnings"
     ],
     [
      "Limit VLANs on a trunk",
      "switchport trunk allowed vlan 10,20",
      "Without the add keyword the list is REPLACED, not appended"
     ],
     [
      "Verify the result",
      "show vlan brief ; show interfaces trunk",
      "Access assignments in the first, formed trunks only in the second"
     ]
    ]
   },
   {
    "heading": "Saving and abbreviations",
    "columns": [
     "Full command",
     "Short form",
     "Remember"
    ],
    "rows": [
     [
      "copy running-config startup-config",
      "copy run start",
      "The canonical save; writes the config to NVRAM so it survives reload"
     ],
     [
      "write memory",
      "wr",
      "Legacy equivalent of the save; still accepted and widely used"
     ],
     [
      "show running-config",
      "sh run",
      "Any unambiguous prefix of a keyword is accepted"
     ],
     [
      "configure terminal",
      "conf t",
      "The most common abbreviation in lab walkthroughs"
     ],
     [
      "interface gigabitethernet0/1",
      "int g0/1",
      "Interface type and number compress together"
     ],
     [
      "show ip interface brief",
      "sh ip int br",
      "Fastest first look at any device"
     ],
     [
      "no shutdown",
      "no shut",
      "Prefixing no reverses most commands"
     ],
     [
      "(context help)",
      "? and Tab",
      "? lists valid next keywords; Tab completes the current word"
     ]
    ],
    "note": "Reload without saving discards the running-config; IOS prompts to save modified config before reloading, and answering incorrectly is a classic exam trap."
   }
  ],
  "faq": [
   [
    "What is the difference between running-config and startup-config?",
    "The running-config lives in RAM and reflects every change the moment you enter it; the startup-config lives in NVRAM and is what loads at boot. They diverge as soon as you configure anything, so copy running-config startup-config (or wr) is required to make changes permanent. A reload without saving reverts the device to the startup-config."
   ],
   [
    "Why does crypto key generate rsa fail or SSH refuse to work?",
    "RSA key generation requires a non-default hostname and a configured ip domain-name first, because the key is labeled with both. Use a 2048-bit modulus: SSH version 2 technically accepts 768 bits and up, but IOS XE 17.11.1 and later rejects keys smaller than 2048 by default. Also confirm the vty lines have login local, a username with a secret exists, and transport input allows SSH."
   ],
   [
    "What is the difference between exit and end in Cisco IOS?",
    "exit backs out exactly one mode level, so from interface config it returns to global config. end (or Ctrl+Z) jumps straight back to privileged EXEC from any configuration depth. In simulations, using end when you meant exit can leave you in the wrong mode for the next command, so watch the prompt."
   ],
   [
    "Why won't a trunk form between two switches?",
    "The usual cause is DTP defaults: two ports both set to dynamic auto passively wait and never negotiate a trunk. Configure switchport mode trunk on at least one side, or on both sides with switchport nonegotiate to disable DTP entirely. Then check show interfaces trunk and make sure the native VLAN matches on both ends."
   ]
  ]
 },
 "cables": {
  "intro": "Every speed and distance on this sheet is a fair-game question on the CompTIA A+ Core 1 (220-1201) exam, and the cable objectives are pure memorization. Drill the numbers in each table until the \"remember\" column feels obvious, then use the FAQ to close the classic traps: the Cat 6 55-meter caveat, M.2 versus NVMe, and T568A versus T568B.",
  "sections": [
   {
    "heading": "Copper network cabling",
    "columns": [
     "Cable",
     "Max speed",
     "Max distance",
     "Remember"
    ],
    "rows": [
     [
      "Cat 5e",
      "1 Gbps",
      "100 m",
      "Minimum grade for gigabit; usually UTP"
     ],
     [
      "Cat 6",
      "10 Gbps",
      "55 m at 10 Gbps; 100 m at 1 Gbps",
      "The 55 m caveat is the classic exam trap"
     ],
     [
      "Cat 6a",
      "10 Gbps",
      "100 m",
      "Full 100 m at 10 Gbps; shielding optional, not required"
     ],
     [
      "Cat 8",
      "25/40 Gbps",
      "30 m",
      "Always shielded; data-center switch-to-server runs"
     ],
     [
      "RG-6 coax",
      "RF broadband (cable TV/internet)",
      "Long runs, low loss",
      "75-ohm, thicker 18 AWG core; F-type connector"
     ],
     [
      "RG-59 coax",
      "Analog/baseband video (CCTV)",
      "Short runs only",
      "75-ohm, thinner 20 AWG; higher loss than RG-6"
     ]
    ],
    "note": "T568A and T568B are RJ45 pin-out standards that swap only the orange and green pairs (pins 1/2 and 3/6). Same standard on both ends = straight-through cable; one of each = crossover. Shielded twisted pair (STP) is an option for any category, but only Cat 8 requires it."
   },
   {
    "heading": "Fiber optic",
    "columns": [
     "Item",
     "What it is",
     "Distance / use",
     "Remember"
    ],
    "rows": [
     [
      "Single-mode fiber",
      "Tiny 8-10 micron core, laser light source",
      "Kilometers: 10 km typical, up to 40 km+",
      "Long-haul, campus and WAN links; yellow jacket typical"
     ],
     [
      "Multimode fiber",
      "Wider 50 or 62.5 micron core, LED/VCSEL source",
      "Up to ~550 m at 1 Gbps; ~300-400 m at 10 Gbps",
      "In-building runs; cheaper optics; orange or aqua jacket"
     ],
     [
      "LC connector",
      "Small form factor, snap-in latch",
      "Fits SFP/SFP+ transceivers",
      "\"Little Connector\"; the standard on modern gear"
     ],
     [
      "SC connector",
      "Square body, push-pull",
      "Patch panels, older equipment",
      "\"Stick and Click\" mnemonic; square shape"
     ],
     [
      "ST connector",
      "Round body, bayonet twist-lock",
      "Legacy multimode installs",
      "\"Stick and Twist\" mnemonic; twist like BNC"
     ]
    ]
   },
   {
    "heading": "Video cables",
    "columns": [
     "Interface",
     "Signal",
     "Max capability",
     "Remember"
    ],
    "rows": [
     [
      "VGA (DE-15)",
      "Analog only",
      "No hard cap; degrades with length and resolution",
      "15 pins in 3 rows; the only analog-only interface here; no audio"
     ],
     [
      "DVI-D",
      "Digital only",
      "Single-link 1920x1200@60; dual-link 2560x1600@60",
      "Dual-link adds center pins for more bandwidth"
     ],
     [
      "DVI-I",
      "Digital + analog",
      "Same digital limits as DVI-D",
      "The 4 pins around the flat blade carry analog; passive VGA adapters work"
     ],
     [
      "HDMI",
      "Digital video + audio",
      "HDMI 2.0: 18 Gbps, 4K60; HDMI 2.1: 48 Gbps, 4K120/8K60",
      "19-pin; mini and micro variants exist; consumer default"
     ],
     [
      "DisplayPort",
      "Digital video + audio",
      "DP 1.4: 32.4 Gbps; DP 2.x: up to 80 Gbps",
      "Locking connector; daisy-chaining via MST; USB-C Alt Mode carries it"
     ]
    ]
   },
   {
    "heading": "USB and Lightning",
    "columns": [
     "Standard / connector",
     "Speed",
     "Cable / power",
     "Remember"
    ],
    "rows": [
     [
      "USB 2.0 (Hi-Speed)",
      "480 Mbps",
      "5 m max cable; 500 mA / 2.5 W",
      "Low-speed 1.5 Mbps and full-speed 12 Mbps also live under 2.0"
     ],
     [
      "USB 3.2 Gen 1",
      "5 Gbps",
      "~3 m practical; 900 mA / 4.5 W",
      "Formerly USB 3.0 / SuperSpeed; blue Type-A ports"
     ],
     [
      "USB 3.2 Gen 2",
      "10 Gbps",
      "~1 m practical",
      "Formerly USB 3.1; SuperSpeed+"
     ],
     [
      "USB 3.2 Gen 2x2",
      "20 Gbps",
      "USB-C only",
      "Two 10 Gbps lanes; needs USB-C on both ends"
     ],
     [
      "USB4",
      "20/40 Gbps; USB4 v2: 80 Gbps",
      "USB-C only",
      "Thunderbolt 3 compatible"
     ],
     [
      "Connectors",
      "Type-A: flat host port; Type-B: square, printers; mini/micro-B: legacy portables",
      "USB-C: reversible, does data + video + power",
      "USB-C is a connector shape, not a speed"
     ],
     [
      "USB Power Delivery",
      "Power, not data",
      "Up to 100 W (20 V/5 A); PD 3.1 EPR up to 240 W (48 V/5 A)",
      "Negotiated over USB-C; above 60 W requires a 5 A e-marked cable"
     ],
     [
      "Lightning",
      "USB 2.0 speeds on most devices",
      "Apple proprietary 8-pin, reversible",
      "Legacy but still on the exam; iPhones moved to USB-C starting with iPhone 15 (2023)"
     ]
    ],
    "note": "Without Power Delivery, a plain USB-C port supplies up to 15 W (5 V/3 A). Port colors (blue, teal, red) hint at speed but are not guaranteed by the spec."
   },
   {
    "heading": "Storage and internal",
    "columns": [
     "Interface",
     "Speed",
     "Connector",
     "Remember"
    ],
    "rows": [
     [
      "SATA III",
      "6 Gbps (~600 MB/s effective)",
      "7-pin data + 15-pin power, L-shaped keying",
      "Revisions: SATA I 1.5 Gbps, II 3 Gbps, III 6 Gbps; data cable max 1 m"
     ],
     [
      "M.2",
      "Depends on the bus underneath",
      "Edge slot; B, M, or B+M key; sizes like 2280 (22 mm x 80 mm)",
      "A form factor, not a protocol; an M.2 drive can be SATA or NVMe"
     ],
     [
      "NVMe",
      "PCIe 3.0 x4 ~3.5 GB/s; 4.0 x4 ~7 GB/s; 5.0 x4 ~14 GB/s",
      "Usually M.2 M-key; also U.2 and add-in cards",
      "A protocol over PCIe lanes; far faster than any SATA SSD"
     ],
     [
      "M.2 keys",
      "B key: SATA or PCIe x2; M key: PCIe x4 (NVMe)",
      "B+M keyed drives fit both slots",
      "Key notches physically prevent wrong-slot installs"
     ],
     [
      "Molex",
      "Power only",
      "4-pin peripheral: +5 V red, +12 V yellow, black grounds",
      "Legacy power for fans, optical drives, older HDDs"
     ]
    ]
   }
  ],
  "faq": [
   [
    "How far can Cat 6 run at 10 Gbps?",
    "Only about 55 meters, versus the usual 100-meter Ethernet limit, because of crosstalk at 10GBASE-T frequencies. If a scenario needs 10 Gbps over a full 100 meters, the answer is Cat 6a. This distance downgrade is one of the most repeated cable questions on Core 1."
   ],
   [
    "What is the difference between M.2 and NVMe?",
    "M.2 is a physical form factor (the small gum-stick slot); NVMe is a storage protocol that runs over PCIe lanes. An M.2 slot can host either a SATA drive capped at 6 Gbps or an NVMe drive running several times faster. On the exam, match the words: form factor questions want M.2, speed/protocol questions want NVMe."
   ],
   [
    "What is the difference between T568A and T568B?",
    "They are two RJ45 pin-out standards that differ only in swapping the orange and green wire pairs (pins 1/2 and 3/6). Terminating both ends the same way makes a straight-through cable; using A on one end and B on the other makes a crossover. Modern switches auto-negotiate with auto-MDIX, so crossover cables matter mostly on legacy gear and exams."
   ],
   [
    "Is Lightning still on the A+ exam in 2026?",
    "Yes. The 220-1201 objectives still list Lightning as a connector type, even though Apple moved iPhones to USB-C starting with the iPhone 15 in 2023. Know it as Apple's proprietary reversible 8-pin connector that typically runs at USB 2.0 speeds."
   ]
  ]
 },
 "cloudsvc": {
  "intro": "AWS and Azure sell the same building blocks under different names, and the AWS Certified Cloud Practitioner (CLF-C02), AWS Certified Solutions Architect - Associate (SAA-C03), Microsoft Azure Fundamentals (AZ-900), and Microsoft Azure Administrator (AZ-104) exams each expect their own vendor's names cold. This sheet pairs the services those exams actually test, using names current as of 2026 (Microsoft Entra ID, not Azure AD; Azure Front Door, not the retiring classic CDN). The pairs are functional equivalents, not identical products; the notes flag where the analogy breaks.",
  "sections": [
   {
    "heading": "Compute",
    "columns": [
     "Category",
     "AWS",
     "Azure",
     "What it is"
    ],
    "rows": [
     [
      "Virtual machines",
      "Amazon EC2",
      "Azure Virtual Machines",
      "Full virtual servers; you pick the size and OS and patch them yourself"
     ],
     [
      "Serverless functions",
      "AWS Lambda",
      "Azure Functions",
      "Event-driven code billed per execution; Lambda caps at 15 minutes per run"
     ],
     [
      "Containers",
      "Amazon ECS / Amazon EKS",
      "Azure Container Apps / AKS",
      "Managed container orchestration; EKS to AKS is the Kubernetes pair"
     ],
     [
      "Web app PaaS",
      "AWS Elastic Beanstalk",
      "Azure App Service",
      "Push code and the platform provisions, scales, and patches for you"
     ]
    ],
    "note": "For serverless containers, pair AWS Fargate with Azure Container Apps; ECS itself is AWS-proprietary and has no exact Azure twin. Elastic Beanstalk keeps its EC2 instances and load balancers visible in your account, while App Service hides the servers entirely."
   },
   {
    "heading": "Storage",
    "columns": [
     "Category",
     "AWS",
     "Azure",
     "What it is"
    ],
    "rows": [
     [
      "Object storage",
      "Amazon S3",
      "Azure Blob Storage",
      "Durable object storage over HTTPS; an S3 bucket maps to a blob container inside a storage account"
     ],
     [
      "Block storage",
      "Amazon EBS",
      "Azure Managed Disks",
      "Persistent block volumes attached to VMs, with snapshot backups"
     ],
     [
      "File shares",
      "Amazon EFS",
      "Azure Files",
      "Managed network file shares; EFS is NFS-only, Azure Files serves SMB and NFS"
     ],
     [
      "Archive tier",
      "S3 Glacier (Instant / Flexible / Deep Archive)",
      "Blob Storage Archive tier",
      "Lowest-cost storage for rarely read, long-retention data"
     ]
    ],
    "note": "Blob access tiers run Hot, Cool, Cold, then Archive; Archive is offline and must be rehydrated (up to hours) before reads, while S3 Glacier Instant Retrieval returns data in milliseconds. Because Azure Files speaks SMB, the closer AWS match for Windows shares is Amazon FSx for Windows File Server."
   },
   {
    "heading": "Networking",
    "columns": [
     "Category",
     "AWS",
     "Azure",
     "What it is"
    ],
    "rows": [
     [
      "Private network",
      "Amazon VPC",
      "Azure Virtual Network (VNet)",
      "Your isolated network: address space, subnets, route tables, peering"
     ],
     [
      "DNS",
      "Amazon Route 53",
      "Azure DNS",
      "Managed DNS zone hosting; Route 53 also registers domains and adds routing policies"
     ],
     [
      "CDN and edge",
      "Amazon CloudFront",
      "Azure Front Door (Standard/Premium)",
      "Global edge delivery: caching, TLS offload, optional WAF"
     ],
     [
      "Load balancing",
      "Elastic Load Balancing (ALB / NLB / GWLB)",
      "Azure Load Balancer + Application Gateway",
      "Traffic distribution; ALB maps to Application Gateway (L7), NLB to Load Balancer (L4)"
     ],
     [
      "Private connectivity",
      "AWS Direct Connect",
      "Azure ExpressRoute",
      "Dedicated private circuit into the cloud that bypasses the public internet"
     ]
    ],
    "note": "Neither Direct Connect nor ExpressRoute encrypts traffic by default, a favorite trick question on both sides. Azure CDN (classic) retires September 30, 2027, so Front Door Standard/Premium is the current Azure answer for edge delivery."
   },
   {
    "heading": "Databases",
    "columns": [
     "Category",
     "AWS",
     "Azure",
     "What it is"
    ],
    "rows": [
     [
      "Relational",
      "Amazon RDS",
      "Azure SQL Database",
      "Managed relational databases: automated backups, patching, HA options"
     ],
     [
      "NoSQL",
      "Amazon DynamoDB",
      "Azure Cosmos DB",
      "Managed NoSQL with single-digit-millisecond latency at any scale"
     ],
     [
      "In-memory cache",
      "Amazon ElastiCache",
      "Azure Cache for Redis",
      "Managed in-memory store for caching, sessions, and leaderboards"
     ]
    ],
    "note": "RDS is one umbrella for MySQL, PostgreSQL, SQL Server, and more, while Azure splits engines across Azure SQL Database, Azure Database for MySQL, and Azure Database for PostgreSQL. Azure Managed Redis is the announced successor to Azure Cache for Redis (Basic/Standard/Premium tiers retire September 30, 2028), though 2026 exams still use the older name."
   },
   {
    "heading": "Identity and security",
    "columns": [
     "Category",
     "AWS",
     "Azure",
     "What it is"
    ],
    "rows": [
     [
      "Identity and access",
      "AWS IAM",
      "Microsoft Entra ID + Azure RBAC",
      "Who can do what; Azure splits identity (Entra ID) from resource permissions (RBAC)"
     ],
     [
      "Key management",
      "AWS KMS",
      "Azure Key Vault",
      "Managed encryption keys; Key Vault also stores secrets and certificates"
     ],
     [
      "Audit logging",
      "AWS CloudTrail",
      "Azure Activity Log",
      "Control-plane audit trail of who did what and when; 90-day default retention in both"
     ],
     [
      "Threat detection",
      "Amazon GuardDuty",
      "Microsoft Defender for Cloud",
      "Built-in threat detection; Defender for Cloud also bundles posture management (CSPM)"
     ]
    ],
    "note": "Microsoft Entra ID is the 2023 rename of Azure Active Directory, and current exams use the new name. What Key Vault does in one service, AWS spreads across KMS, Secrets Manager, and AWS Certificate Manager."
   },
   {
    "heading": "Cost and governance",
    "columns": [
     "Category",
     "AWS",
     "Azure",
     "What it is"
    ],
    "rows": [
     [
      "Spend analysis",
      "AWS Cost Explorer",
      "Microsoft Cost Management",
      "Visualize, analyze, and forecast cloud spend over time"
     ],
     [
      "Org hierarchy",
      "AWS Organizations",
      "Azure management groups",
      "Govern many accounts or subscriptions from one hierarchy; policies inherit down"
     ],
     [
      "Recommendations",
      "AWS Trusted Advisor",
      "Azure Advisor",
      "Automated best-practice checks across cost, security, reliability, and performance"
     ]
    ],
    "note": "An AWS account maps to an Azure subscription, and SCPs in Organizations do the job Azure Policy does at management-group scope. Full Trusted Advisor checks require an upgraded support plan (Business Support+ or higher as of 2026), while Azure Advisor is free."
   }
  ],
  "faq": [
   [
    "Is Microsoft Entra ID the same thing as Azure Active Directory?",
    "Yes. Microsoft renamed Azure Active Directory to Microsoft Entra ID in 2023; it is the same service with the same sign-in and directory features. Current AZ-900 and AZ-104 material uses the Entra ID name, so expect it on the exam even where older study guides still say Azure AD."
   ],
   [
    "Do AWS and Azure services map one-to-one?",
    "No, several mappings are one-to-many. AWS IAM alone covers what Azure splits between Microsoft Entra ID (who you are) and Azure RBAC (what you can touch), while Azure Key Vault covers what AWS splits across KMS, Secrets Manager, and Certificate Manager. Learn what job each service does rather than memorizing name pairs."
   ],
   [
    "What is the AWS equivalent of an Azure subscription?",
    "An AWS account is the closest match: both are the billing and isolation boundary your resources live in. AWS Organizations then groups accounts the way Azure management groups group subscriptions. Azure adds resource groups one level further down; AWS resource groups exist but are only tag-based views, not a management boundary."
   ],
   [
    "Is Azure Cache for Redis being retired?",
    "Yes. Microsoft has named Azure Managed Redis as the successor; the Basic, Standard, and Premium tiers of Azure Cache for Redis retire on September 30, 2028, and the Enterprise tiers on March 31, 2027. The 2026 exams still reference Azure Cache for Redis, so know both names."
   ]
  ]
 }
}
