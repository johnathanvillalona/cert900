# B3B: Warehouse Windows Firewall simulator

Isolated branch `codex/pbq-firewall-b3b`, based on accepted B3A
`9921615826f2c3de85ebc8248d162df6b5ea70df`. Original worktrees are preserved.
No bank, engine/session API, backend, schema, production configuration or
runtime dependency change is required.

## Approved rubric and educational purpose

Three equal instructional objectives represent Domain application availability,
Private application availability, and isolation through program exceptions.
They are Cert900 educational weights, not proprietary exam scoring.

1. Across supported inbound TCP/UDP flows on Domain: Inventory is allowed at
   every port, and no other application is exposed.
2. The same effective policy on Private.
3. Public inbound remains blocked, other applications remain unexposed, no
   enabled inbound Port/Predefined Allow exists, and at least some trusted-profile
   Inventory traffic functions. Deny-all earns no free isolation credit.

Names, row order, creation history, drafts and traffic tests are unscored.
Combined or split profile program exceptions are equivalent. Disabled rules
have no effect. Block rules can prevent access but do not violate the structural
program-exception policy. Enabled inbound Port/Predefined Allows violate that
explicit requirement even when shadowed. No new egress requirement is scored.
Initial/reset empty policy earns zero, the approved change from the legacy
worksheet's initial 1/6. Unregistered/native rendering remains unchanged.

Incomplete means missing required access. Insecure means unauthorized exposure
or violation of the explicit program-exception requirement. Both may coexist.
Post-grade explanations distinguish them; equal percentages can mean different
repairs. Domain only earns 2/3; correct trusted access plus Public exposure earns
2/3; broad All-program Allow earns zero; the constrained complete policy earns 1.

## Separate Windows semantics and exactness

For the active profile/direction/application/protocol/local-and-remote ports,
any enabled matching Block overrides all matching Allows, otherwise a matching
Allow wins, otherwise the fixed default applies. Inbound Block / outbound Allow,
firewall On for all three profiles. There is no first-match ordering.

Application identities are the fixture's Inventory, Diagnostics Helper and
Remote Desktop, plus All programs. An unmatched Other equivalence class is
available to traffic analysis, never as an editable complement matcher.
Paths are synthetic display metadata, not a typed-path grading requirement or
filesystem access. Program rules cover TCP/UDP and all local/remote ports.
Port rules support TCP/UDP and Any, single or inclusive 0..65535 intervals on
both local and remote ports. The bounded Predefined Remote Desktop template
uses its service identity, TCP and destination port 3389 (local inbound, remote
outbound). Outbound decisions are operational but unscored. Tests report
firewall admission, not end-to-end connectivity or reply traffic.

Exact analysis partitions both port axes at every rule interval boundary.
All predicates are constant per cell, across all three profiles, four app
classes and two protocols. Twelve rules yield at most 15,000 cells / 180,000
rule visits. Hard ceilings 65,536 cells / 1,000,000 visits never truncate or
approximate analysis. Rules, draft, revision, traffic form and latest 20
revision-tagged results remain in one authoritative session answer.

IPv6, ICMP, addresses, service-specific wildcards, IPsec, connection tracking,
GPO/MDM policy merging and authenticated bypass are outside this bounded pilot.
No real firewall commands, host shell, filesystem or network changes occur.

## Baseline and foundation checkpoint

Scripts-disabled lockfile installation; 412 baseline tests; build and dependency
tree pass. Fresh full and production-only audits each report one pre-existing
moderate finding for Vite 7.3.6, GHSA-698v-4r3x-3vcv. Its Oct 20 update covers
Windows development editor command escaping, patched in Vite 7.3.7. This Ubuntu
static/Worker deployment does not use the Windows editor endpoint. Vite is a
build/development tool even though an optional peer path retains it in npm's
production-only tree. No advisory is suppressed and no dependency is changed.
Source: https://github.com/advisories/GHSA-698v-4r3x-3vcv .

Foundation validation: 443 unit tests pass, including unchanged bank integrity,
DHCP and ACL suites; production build passes (existing chunk-size warning).
Definition registered but learner opt-in waits for the workspace checkpoint.
