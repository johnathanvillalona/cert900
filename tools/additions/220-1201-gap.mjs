// 220-1201 batch 2 (authored, rule-checked by tools/prep-batch.mjs).
export default {
  examId: "220-1201",
  questions: [
  {
    "t": "display-types",
    "x": "A photo editor wants an LCD monitor with the widest viewing angles and consistent color when viewed off-axis. Which TWO panel technologies best meet this need? Choose TWO.",
    "o": [
      "In-plane switching",
      "Vertical alignment",
      "Twisted nematic",
      "Organic light-emitting diode",
      "Plasma display panel"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "IPS and VA LCD panels both deliver wider viewing angles and steadier color than TN panels. TN is fast and cheap but shifts color off-axis, and OLED and plasma are not LCD panel types."
  },
  {
    "t": "display-types",
    "x": "A budget-focused gamer wants the fastest pixel response time at the lowest cost and accepts narrower viewing angles. Which LCD panel type fits best?",
    "o": [
      "Twisted nematic",
      "In-plane switching",
      "Vertical alignment",
      "Electrophoretic ink"
    ],
    "a": 0,
    "e": "TN panels have the quickest response times and lowest cost, which suits fast-paced gaming at the expense of color and viewing angles. IPS trades speed for better color, and E Ink is a reflective display used in e-readers."
  },
  {
    "t": "display-types",
    "x": "Unlike an OLED screen, a standard LCD panel cannot emit its own light. Which component allows an LCD image to be seen?",
    "o": [
      "An LED backlight behind the panel",
      "A per-pixel organic emitter",
      "A phosphor-coated shadow mask",
      "An electron gun assembly"
    ],
    "a": 0,
    "e": "LCD pixels only filter light, so an LED backlight behind the panel supplies the illumination. OLED pixels emit their own light, while shadow masks and electron guns belong to older CRT technology."
  },
  {
    "t": "network-cables",
    "x": "A technician must support 1 Gbps to 100 meters and 10 Gbps only across shorter runs of about 55 meters. Which twisted-pair category matches these limits?",
    "o": [
      "Category 6",
      "Category 5e",
      "Category 3",
      "Category 6a"
    ],
    "a": 0,
    "e": "Category 6 supports 1 Gbps to 100 meters and 10 Gbps only up to roughly 55 meters. Category 5e tops out near 1 Gbps, and Category 6a sustains 10 Gbps to the full 100 meters."
  },
  {
    "t": "network-cables",
    "x": "Cabling near large motors keeps suffering interference and crosstalk. Which type of twisted-pair cable is designed to reduce this electromagnetic interference?",
    "o": [
      "Shielded twisted pair",
      "Unshielded twisted pair",
      "Plenum-rated unshielded twisted pair",
      "Flat satin phone cable"
    ],
    "a": 0,
    "e": "Shielded twisted pair adds foil or braided shielding around the pairs or the whole cable to block interference. Unshielded and plenum-rated UTP have no such shielding, and satin phone cable is not even twisted."
  },
  {
    "t": "network-cables",
    "x": "A cabling contractor selects jacket ratings based on where cable runs through a building. Which TWO ratings describe the fire performance of a cable jacket? Choose TWO.",
    "o": [
      "Plenum",
      "Riser",
      "Category 6a",
      "Direct burial",
      "Multimode"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Plenum and riser are fire-safety jacket ratings, with plenum required in air-handling spaces and riser used between floors. Category and multimode describe performance or fiber type, and direct burial refers to moisture and crush protection."
  },
  {
    "t": "optical-fiber",
    "x": "A data center uses short fiber runs between racks with an inexpensive LED or VCSEL light source. Which fiber type is being described?",
    "o": [
      "Multimode fiber",
      "Single-mode fiber",
      "Twinaxial copper",
      "Category 6a copper"
    ],
    "a": 0,
    "e": "Multimode fiber has a larger core that accepts LED or VCSEL light and suits shorter distances such as within a data center. Single-mode uses a narrow core with a laser for long hauls, and the copper options are not fiber."
  },
  {
    "t": "optical-fiber",
    "x": "Which fiber optic connector uses a 1.25 mm ferrule and a push-pull latch, making it popular for high-density switch and transceiver ports?",
    "o": [
      "LC connector",
      "SC connector",
      "ST connector",
      "RJ45 connector"
    ],
    "a": 0,
    "e": "The LC connector's small 1.25 mm ferrule and push-pull latch pack more ports into a switch faceplate. SC and ST use larger 2.5 mm ferrules, and RJ45 is a copper Ethernet connector."
  },
  {
    "t": "optical-fiber",
    "x": "An organization links two buildings about 500 meters apart and needs a run immune to lightning-induced surges and outside interference. Why choose fiber over copper here?",
    "o": [
      "It uses light rather than electricity, so it resists interference over long spans",
      "It can deliver electrical power to remote equipment across the same strand",
      "It terminates with the same inexpensive RJ11 plugs that phones use",
      "It is always cheaper to install than an equivalent run of copper"
    ],
    "a": 0,
    "e": "Fiber transmits light instead of electricity, so it is immune to electromagnetic interference and reaches far greater distances than copper. It cannot carry electrical power like PoE copper, and it typically costs more to install, not less."
  },
  {
    "t": "video-cables",
    "x": "A legacy projector accepts video through a blue 15-pin connector and has no way to receive audio. Which video standard is this?",
    "o": [
      "VGA",
      "HDMI",
      "DisplayPort",
      "DVI-D"
    ],
    "a": 0,
    "e": "VGA carries an analog signal over a 15-pin connector and cannot transmit audio. HDMI and DisplayPort are digital and carry audio, and DVI-D is a digital video-only interface."
  },
  {
    "t": "video-cables",
    "x": "Which DVI variant carries both digital and analog signals over the same connector so it can adapt to either type of monitor?",
    "o": [
      "DVI-I",
      "DVI-D",
      "DVI-A",
      "Mini-DVI"
    ],
    "a": 0,
    "e": "DVI-I integrates both digital and analog pins, letting it feed digital panels or, with a passive adapter, analog VGA displays. DVI-D is digital only and DVI-A is analog only."
  },
  {
    "t": "video-cables",
    "x": "A laptop with only USB-C ports drives an external monitor using a plain USB-C to DisplayPort cable. Which capability makes this possible?",
    "o": [
      "DisplayPort Alternate Mode over USB-C",
      "Consumer Electronics Control signaling",
      "Mobile High-Definition Link over micro-USB",
      "Serial console redirection"
    ],
    "a": 0,
    "e": "DisplayPort Alternate Mode lets a USB-C port reroute its high-speed lanes to carry native DisplayPort video. CEC controls devices over HDMI, MHL is an older micro-USB video method, and console redirection is unrelated to display output."
  },
  {
    "t": "storage-cables",
    "x": "What is the maximum theoretical transfer rate of a SATA revision 3.0 interface used by most 2.5-inch SATA SSDs?",
    "o": [
      "6 Gbps",
      "3 Gbps",
      "1.5 Gbps",
      "16 Gbps"
    ],
    "a": 0,
    "e": "SATA revision 3.0 tops out at 6 Gbps. SATA 2.0 reached 3 Gbps and SATA 1.0 reached 1.5 Gbps, while 16 Gbps is not a defined SATA speed."
  },
  {
    "t": "storage-cables",
    "x": "An M.2 NVMe SSD greatly outperforms a SATA SSD because it communicates directly over which system bus?",
    "o": [
      "PCI Express lanes",
      "The SATA III channel",
      "A USB 3.2 bridge",
      "The legacy PATA ribbon"
    ],
    "a": 0,
    "e": "NVMe drives ride the PCI Express bus, whose multiple high-speed lanes far exceed the single 6 Gbps SATA channel. Some M.2 slots use SATA, but those do not reach NVMe speeds; USB and PATA are unrelated."
  },
  {
    "t": "storage-cables",
    "x": "You are connecting a 3.5-inch SATA hard drive inside a desktop. Which TWO connectors must plug into the drive? Choose TWO.",
    "o": [
      "A 7-pin data connector",
      "A 15-pin power connector",
      "A 4-pin Molex power connector",
      "A 24-pin main connector",
      "A 6-pin PCIe connector"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "A SATA drive uses a slim 7-pin data connector and a wider 15-pin SATA power connector. The 4-pin Molex predates SATA power, the 24-pin feeds the motherboard, and the 6-pin PCIe powers graphics cards."
  },
  {
    "t": "568a-and-568b-colors",
    "x": "To build a straight-through patch cable that links a computer to a switch, how should the two ends be terminated?",
    "o": [
      "With the same standard on both ends",
      "With T568A on one end and T568B on the other",
      "With the blue and brown pairs left unpunched",
      "With only four of the eight conductors seated"
    ],
    "a": 0,
    "e": "A straight-through cable uses the same pinout, such as T568B on both ends, so each wire lands on the matching pin. Mixing T568A and T568B instead produces a crossover cable."
  },
  {
    "t": "568a-and-568b-colors",
    "x": "The T568A and T568B wiring standards are identical except that they swap which two colored pairs?",
    "o": [
      "The orange pair and the green pair",
      "The blue pair and the brown pair",
      "The orange pair and the blue pair",
      "The green pair and the brown pair"
    ],
    "a": 0,
    "e": "T568A and T568B differ only by swapping the positions of the orange and green pairs; the blue and brown pairs stay put in both. That single swap is what turns a straight-through cable into a crossover when the standards are mixed."
  },
  {
    "t": "568a-and-568b-colors",
    "x": "Under the T568B standard, which wire color is terminated on pin 1 of the RJ45 connector?",
    "o": [
      "White with an orange stripe",
      "White with a green stripe",
      "Solid blue",
      "White with a brown stripe"
    ],
    "a": 0,
    "e": "In T568B, pin 1 is white-orange and pin 2 is solid orange. White-green sits on pin 1 only under T568A, so the pin-1 color is a quick way to tell the two standards apart."
  },
  {
    "t": "an-overview-of-memory",
    "x": "A server needs memory that can detect and automatically correct single-bit errors to prevent silent data corruption. Which memory type provides this?",
    "o": [
      "Error-correcting code memory",
      "Standard non-parity memory",
      "Virtual memory paging",
      "Read-only memory"
    ],
    "a": 0,
    "e": "ECC memory adds extra bits that let the controller detect and correct single-bit errors, which is valued in servers where reliability matters. Non-parity memory has no such protection, and virtual memory and ROM are unrelated concepts."
  },
  {
    "t": "an-overview-of-memory",
    "x": "To enable dual-channel operation for higher memory bandwidth on a motherboard, how should the modules be installed?",
    "o": [
      "As a matched pair in the same-colored slots",
      "As a single large module in the first slot",
      "As two mismatched sizes in adjacent slots",
      "As four modules each of a different speed"
    ],
    "a": 0,
    "e": "Dual-channel needs a matched pair seated in the slots the board marks with the same color, usually alternating slots. A single module runs single-channel, and mismatched modules force a slower or single-channel mode."
  },
  {
    "t": "motherboard-form-factors",
    "x": "Which common motherboard form factor is the full-size desktop standard, offering the most expansion slots and RAM sockets?",
    "o": [
      "ATX",
      "Micro-ATX",
      "Mini-ITX",
      "Nano-ITX"
    ],
    "a": 0,
    "e": "Standard ATX is the largest of the mainstream desktop form factors, giving room for up to seven expansion slots and four or more RAM sockets. The smaller factors trim slots and sockets to save space."
  },
  {
    "t": "motherboard-form-factors",
    "x": "Which form factor keeps the same rear I/O and mounting-hole layout as ATX but is squarer, usually with about four expansion slots?",
    "o": [
      "Micro-ATX",
      "Mini-ITX",
      "Extended ATX",
      "Standard ATX"
    ],
    "a": 0,
    "e": "Micro-ATX shares ATX mounting holes and rear I/O yet is smaller and squarer, typically offering up to four expansion slots. Mini-ITX is smaller still with one slot, while Extended ATX is larger than standard ATX."
  },
  {
    "t": "motherboard-form-factors",
    "x": "A small-form-factor build uses a Mini-ITX motherboard. How many expansion slots does that board typically provide?",
    "o": [
      "One",
      "Four",
      "Seven",
      "Three"
    ],
    "a": 0,
    "e": "Mini-ITX measures 6.7 inches square and typically has a single expansion slot. Micro-ATX offers around four and full ATX up to seven."
  },
  {
    "t": "the-bios",
    "x": "Every time a desktop is unplugged overnight, it forgets the date, time, and firmware settings on the next boot. What is the most likely cause?",
    "o": [
      "A drained CMOS battery",
      "A failing hard drive",
      "Corrupted operating system files",
      "A faulty power supply fan"
    ],
    "a": 0,
    "e": "The coin-cell CMOS battery keeps the real-time clock and firmware settings powered while the system is unplugged; when it dies, those values reset each time. A failing drive or OS corruption would not reset the clock and firmware settings."
  },
  {
    "t": "the-bios",
    "x": "A technician wants the computer to try booting from a USB drive before the internal disk. Where is this configured?",
    "o": [
      "The boot order in UEFI/BIOS setup",
      "The Windows Device Manager",
      "The Disk Management console",
      "The Task Scheduler"
    ],
    "a": 0,
    "e": "Boot device priority is set in the UEFI/BIOS firmware setup, usually reached by pressing a key such as Del or F2 at startup. Device Manager, Disk Management, and Task Scheduler are operating-system tools that cannot change the firmware boot order."
  },
  {
    "t": "the-bios",
    "x": "At power-on a system emits a pattern of beeps and shows no video. This diagnostic feedback is produced by which firmware routine?",
    "o": [
      "The power-on self-test",
      "The disk defragmenter",
      "The S.M.A.R.T. monitor",
      "The Secure Boot check"
    ],
    "a": 0,
    "e": "The power-on self-test checks core hardware before the OS loads and reports failures as beep codes when video is unavailable. Defragmenting and S.M.A.R.T. are storage functions, and Secure Boot validates OS signatures rather than beeping hardware faults."
  },
  {
    "t": "hsm-and-tpm",
    "x": "An enterprise needs a dedicated device to generate and protect cryptographic keys at large scale, available as a plug-in card or network appliance. Which device is this?",
    "o": [
      "A hardware security module",
      "A trusted platform module",
      "A complementary metal-oxide chip",
      "A network interface card"
    ],
    "a": 0,
    "e": "A hardware security module is a dedicated, often removable device built to manage and safeguard keys at scale for many systems. A TPM is soldered to one motherboard and serves only that single machine."
  },
  {
    "t": "hsm-and-tpm",
    "x": "Windows 11 lists a Trusted Platform Module requirement during its hardware compatibility check. Which minimum TPM version must the system provide?",
    "o": [
      "TPM 2.0",
      "TPM 1.2",
      "TPM 1.0",
      "TPM 3.0"
    ],
    "a": 0,
    "e": "Windows 11 requires TPM 2.0 as part of its security baseline. TPM 1.2 is the older standard that does not satisfy the requirement, and TPM 3.0 does not exist."
  },
  {
    "t": "hsm-and-tpm",
    "x": "A motherboard has no separate TPM chip, yet the UEFI can still enable TPM features for BitLocker. Which technology provides this?",
    "o": [
      "A firmware TPM built into the CPU or chipset",
      "A software service running inside Windows",
      "The coin-cell CMOS battery circuit",
      "An external USB flash drive"
    ],
    "a": 0,
    "e": "Firmware TPM, marketed as Intel PTT or AMD fTPM, implements TPM 2.0 inside the processor or chipset with no discrete chip needed. A pure software service would not provide the same hardware-rooted protection."
  },
  {
    "t": "cpu-features",
    "x": "What is the primary advantage of a processor that contains multiple physical cores?",
    "o": [
      "It can execute several threads truly in parallel",
      "It permanently replaces the need for system RAM",
      "It increases the monitor's maximum resolution",
      "It doubles the capacity of the storage drive"
    ],
    "a": 0,
    "e": "Multiple physical cores let a CPU run several threads at the same time, improving multitasking and multithreaded workloads. Cores do not substitute for RAM, storage, or display hardware."
  },
  {
    "t": "cpu-features",
    "x": "Which level of CPU cache is the smallest and fastest and sits closest to each processing core?",
    "o": [
      "Level 1 cache",
      "Level 2 cache",
      "Level 3 cache",
      "Main system memory"
    ],
    "a": 0,
    "e": "L1 cache is the smallest and fastest tier, located right next to each core for the quickest access. L2 and L3 are progressively larger but slower, and main memory is slower still."
  },
  {
    "t": "cooling",
    "x": "A standard air-cooled CPU assembly on a desktop is made up of which TWO main components? Choose TWO.",
    "o": [
      "A finned heat sink",
      "A cooling fan",
      "A radiator",
      "A water block",
      "A circulation pump"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Air cooling pairs a finned heat sink that draws heat off the CPU with a fan that pushes air through the fins. Radiators, water blocks, and pumps belong to a liquid-cooling loop instead."
  },
  {
    "t": "cooling",
    "x": "Why does a technician apply a thin layer of thermal paste between a CPU and its heat sink?",
    "o": [
      "To fill microscopic air gaps and improve heat transfer",
      "To bond the heat sink permanently to the CPU",
      "To electrically insulate the CPU from the board",
      "To keep dust from settling on the die"
    ],
    "a": 0,
    "e": "Thermal paste fills the tiny air gaps between the uneven metal surfaces so heat moves efficiently into the heat sink. It is not an adhesive, an insulator, or a dust barrier."
  },
  {
    "t": "cooling",
    "x": "For balanced case airflow, front fans usually pull cool air in. What role do the rear and top case fans typically serve?",
    "o": [
      "Exhausting warm air out of the case",
      "Drawing additional cool air inward",
      "Filtering dust from the power supply",
      "Cooling the drive bays passively"
    ],
    "a": 0,
    "e": "Rear and top fans normally exhaust the warm air that rises and collects inside the case, creating a front-to-back and bottom-to-top flow. Making them intakes too would trap heat and disrupt that path."
  },
  {
    "t": "laser-printer-maintenance",
    "x": "A laser printer produces a faint duplicate of the previous image repeating down each page. Which component most likely needs to be serviced or replaced?",
    "o": [
      "The imaging drum",
      "The pickup roller",
      "The toner hopper cap",
      "The paper separation tab"
    ],
    "a": 0,
    "e": "Ghosting, a faint repeat of an earlier image, points to a worn imaging drum that retains residual charge instead of fully clearing between passes. Refilling toner or changing the pickup roller does not remove the leftover latent image."
  },
  {
    "t": "laser-printer-maintenance",
    "x": "Toner has spilled inside a laser printer during a cartridge change. What is the correct way to clean it up?",
    "o": [
      "Use a vacuum with a toner-rated ESD-safe filter",
      "Wipe it up with a warm damp cloth",
      "Blow it out with compressed air indoors",
      "Use a standard household vacuum cleaner"
    ],
    "a": 0,
    "e": "Loose toner is a fine conductive powder, so only an ESD-safe, toner-rated vacuum captures it without hazard. A regular vacuum lets the particles pass through and spread, and a damp cloth can fuse the toner into a stain."
  },
  {
    "t": "inkjet-printers",
    "x": "Which inkjet print head technology heats the ink to form a vapor bubble that pushes a droplet out of the nozzle?",
    "o": [
      "Thermal bubble",
      "Piezoelectric",
      "Electrophotographic",
      "Dye sublimation"
    ],
    "a": 0,
    "e": "Thermal, or bubble-jet, heads boil a tiny amount of ink to eject each droplet. Piezoelectric heads flex a crystal rather than using heat, and electrophotographic describes the laser printing process."
  },
  {
    "t": "inkjet-printers",
    "x": "On an inkjet printer, which assembly moves the print head horizontally back and forth across the page as it prints?",
    "o": [
      "The belt-driven carriage",
      "The fuser assembly",
      "The duplexing unit",
      "The transfer corona"
    ],
    "a": 0,
    "e": "The carriage rides a belt and stepper motor to sweep the head across each line of the page. Fusers and transfer coronas are laser-printer parts, and a duplexer only handles two-sided printing."
  },
  {
    "t": "inkjet-printers",
    "x": "A photographer wants inkjet prints that resist water and fading better than standard ink. Which ink characteristic should be selected?",
    "o": [
      "Pigment-based ink",
      "Dye-based ink",
      "Wax-transfer ink",
      "Solid-ink sticks"
    ],
    "a": 0,
    "e": "Pigment inks use solid color particles that resist water and UV fading, while dye inks dissolve in liquid and fade faster. Wax-transfer and solid-ink are used by other printer types rather than inkjets."
  },
  {
    "t": "thermal-printers",
    "x": "Which thermal printing method melts ink from a ribbon onto the media, producing durable labels that resist heat and fading?",
    "o": [
      "Thermal transfer",
      "Direct thermal",
      "Impact ribbon",
      "Electrostatic"
    ],
    "a": 0,
    "e": "Thermal transfer melts a wax or resin ribbon onto the label, so the print survives heat and sunlight. Direct thermal instead marks heat-sensitive paper directly and fades over time."
  },
  {
    "t": "thermal-printers",
    "x": "In a thermal printer, which component applies heat to create the printed image on the media?",
    "o": [
      "The thermal print head",
      "The platen roller",
      "The fuser lamp",
      "The toner drum"
    ],
    "a": 0,
    "e": "The thermal print head holds a row of tiny heating elements that darken the coated paper or melt the ribbon ink. The platen roller only backs and advances the media and applies no heat."
  },
  {
    "t": "thermal-printers",
    "x": "Which TWO statements accurately describe direct thermal printing? Choose TWO.",
    "o": [
      "It requires special heat-sensitive paper",
      "Its output can fade when exposed to heat or light over time",
      "It uses a toner cartridge and fuser",
      "It requires a wax or resin print ribbon to make marks",
      "It naturally prints in full color"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Direct thermal marks specially coated paper with a heated head and uses no ink, toner, or ribbon, so it needs only that coated paper. Because the coating reacts to heat, the printout can fade or darken when exposed to warmth or sunlight."
  },
  {
    "t": "impact-printers",
    "x": "In a dot-matrix printer, which part physically strikes the inked ribbon against the paper to form characters?",
    "o": [
      "The print head pins",
      "The imaging drum",
      "The fuser assembly",
      "The carriage belt motor"
    ],
    "a": 0,
    "e": "A dot-matrix print head fires a column of small pins that strike the ribbon, transferring dots of ink to the paper. Drums and fusers are laser-printer parts and play no role in an impact printer."
  },
  {
    "t": "impact-printers",
    "x": "Which consumable supplies the ink that an impact printer transfers onto the paper?",
    "o": [
      "An inked fabric ribbon",
      "A liquid ink cartridge",
      "A toner cartridge",
      "A heat-sensitive paper roll"
    ],
    "a": 0,
    "e": "Impact printers press their pins through an inked fabric ribbon to mark the paper, and that ribbon is the consumable replaced as it dries out. Liquid ink, toner, and thermal paper belong to other printer types."
  },
  {
    "t": "impact-printers",
    "x": "Which TWO are genuine advantages of impact printers over laser and inkjet models? Choose TWO.",
    "o": [
      "They can print multipart carbon-copy forms",
      "They tolerate harsh industrial environments well",
      "They deliver photo-quality color output",
      "They operate almost silently",
      "They achieve the highest possible print resolution"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Because impact heads physically strike the paper, they can press through multipart carbon forms, and their simple rugged design holds up in dusty industrial settings. They are noisy and low-resolution, so photo quality and quiet operation are not strengths."
  },
  {
    "t": "adapters-and-converters",
    "x": "A display has only a DVI-D input, but the video card provides an HDMI output. Which statement about connecting them with an adapter is correct?",
    "o": [
      "An HDMI-to-DVI adapter passes the video but not the audio",
      "DVI-D will carry the HDMI audio channel to the monitor",
      "An active powered converter is mandatory to pass the video",
      "A VGA adapter is required to convert the digital signal"
    ],
    "a": 0,
    "e": "HDMI and DVI-D share the same digital video signaling, so a simple passive adapter carries the picture, but DVI-D has no audio channel. No powered converter or VGA conversion is needed between two digital interfaces."
  },
  {
    "t": "adapters-and-converters",
    "x": "A laptop has only USB-C ports, but the user needs to plug in a standard USB-A flash drive. Which adapter solves this?",
    "o": [
      "A USB-C to USB-A adapter",
      "A USB-C to Ethernet adapter",
      "An HDMI to DisplayPort adapter",
      "A Thunderbolt to VGA adapter"
    ],
    "a": 0,
    "e": "A USB-C to USB-A adapter lets the older rectangular USB-A drive plug into the newer USB-C port. Ethernet, HDMI, and VGA adapters convert networking or video signals, not USB storage connectors."
  },
  {
    "t": "motherboard-compatibility",
    "x": "A motherboard's memory slots are specified for DDR5. Can DDR4 modules be installed in them?",
    "o": [
      "No, the slots are keyed differently and will not accept DDR4",
      "Yes, if the DIMM voltage is manually lowered",
      "Yes, after applying a BIOS firmware update",
      "Yes, but the memory runs at half its rated speed"
    ],
    "a": 0,
    "e": "DDR generations use different notch positions and electrical designs, so a DDR4 module physically will not seat in a DDR5 slot. No BIOS update or voltage change bridges incompatible memory generations."
  },
  {
    "t": "motherboard-compatibility",
    "x": "A technician wants to mount a microATX motherboard in a mid-tower case rated for ATX. Will it fit?",
    "o": [
      "Yes, microATX reuses ATX mounting holes and rear I/O placement",
      "No, every form factor demands its own proprietary chassis design",
      "Only if the metal case backplane is physically cut to fit",
      "No, microATX boards fit exclusively inside Mini-ITX cases"
    ],
    "a": 0,
    "e": "MicroATX was designed as a smaller subset of ATX, reusing a matching set of standoff holes and the same rear I/O area, so it drops into ATX-compatible cases. A larger ATX board, by contrast, would not fit a smaller Mini-ITX case."
  },
  {
    "t": "inkjet-printer-maintenance",
    "x": "An inkjet printer left unused for months now prints text with white horizontal gaps from clogged nozzles. Which TWO maintenance steps should be tried first? Choose TWO.",
    "o": [
      "Run the printer's automated head-cleaning cycle",
      "Gently clean the print head nozzles with a lint-free swab",
      "Replace the fuser assembly and its heating lamp",
      "Refill the printer's toner hopper",
      "Install a fresh imaging drum unit"
    ],
    "a": 0,
    "as": [
      0,
      1
    ],
    "e": "Dried ink clogs are cleared first by the built-in head-cleaning routine and, if that fails, gentle manual cleaning of the nozzles. Fusers, toner, and imaging drums are laser-printer parts that an inkjet does not have."
  },
  {
    "t": "inkjet-printer-maintenance",
    "x": "An inkjet printer repeatedly fails to pull paper from its input tray. Which maintenance action is most appropriate?",
    "o": [
      "Clean or replace the pickup rollers",
      "Run a color calibration print",
      "Replace the ink cartridges",
      "Perform a nozzle-check pattern"
    ],
    "a": 0,
    "e": "Feed failures usually come from worn or dusty pickup rollers that can no longer grip the paper, so cleaning or replacing them restores feeding. Ink and calibration tasks address print quality, not paper handling."
  },
  {
    "t": "inkjet-printer-maintenance",
    "x": "An inkjet printer stops and reports that the ink waste absorber, or maintenance pad, is full. What does this require?",
    "o": [
      "Replacing or resetting the waste ink absorber pad",
      "Replacing the toner cartridge",
      "Cleaning the fuser rollers",
      "Recharging the transfer belt"
    ],
    "a": 0,
    "e": "Inkjets flush excess ink into an absorber pad during cleaning cycles, and once it saturates the pad must be replaced or its counter reset. Toner, fuser, and transfer parts belong to laser printers instead."
  },
  {
    "t": "thermal-printer-maintenance",
    "x": "Which material should be used to safely clean the heating element of a thermal printer's print head?",
    "o": [
      "Isopropyl alcohol on a lint-free swab",
      "Soapy water on a paper towel",
      "An abrasive scouring pad",
      "White vinegar on a cotton ball"
    ],
    "a": 0,
    "e": "Isopropyl alcohol on a lint-free swab dissolves residue without leaving fibers or corroding the head. Water and vinegar can cause damage, and an abrasive pad scratches the delicate heating elements."
  },
  {
    "t": "thermal-printer-maintenance",
    "x": "A direct thermal receipt printer prints very faintly even with a fresh roll installed. Besides cleaning the head, what should be checked?",
    "o": [
      "That the heat-sensitive side of the paper faces the print head",
      "That the toner cartridge is not empty",
      "That the correct ribbon is installed",
      "That the fuser has reached operating temperature"
    ],
    "a": 0,
    "e": "Direct thermal paper is coated on only one side, so loading it backwards yields faint or blank output. Thermal printers have no toner, ribbon, or fuser for the technician to check."
  },
  {
    "t": "impact-printer-maintenance",
    "x": "Characters from a dot-matrix printer are consistently missing dots along one horizontal row. Which component should be replaced?",
    "o": [
      "The print head",
      "The ribbon cartridge",
      "The tractor-feed unit",
      "The platen roller"
    ],
    "a": 0,
    "e": "A missing row of dots means a print-head pin is stuck or broken, so the head itself must be replaced. A worn ribbon would fade the whole image evenly rather than drop one specific row."
  },
  {
    "t": "impact-printer-maintenance",
    "x": "Continuous forms keep tearing or skewing where the pin sprockets pull them through a dot-matrix printer. Which component should be inspected first?",
    "o": [
      "The tractor-feed mechanism",
      "The fuser assembly",
      "The toner cartridge",
      "The imaging drum"
    ],
    "a": 0,
    "e": "The tractor feed grips the paper's edge perforations, so damage or misadjustment there causes tearing and skewing. Fusers, toner, and drums are laser-printer parts absent from an impact printer."
  },
  {
    "t": "impact-printer-maintenance",
    "x": "Before servicing the print head of a heavily used impact printer, which safety precaution matters most?",
    "o": [
      "Let the print head cool because it gets hot during operation",
      "Discharge the high-voltage primary corona wire",
      "Vacuum spilled toner with a HEPA filter",
      "Drain the waste-ink absorber pad first"
    ],
    "a": 0,
    "e": "An impact print head heats up from constantly firing its pins, so it should cool before you touch it to avoid burns. High-voltage coronas, toner, and ink pads are not part of an impact printer."
  }
],
}
