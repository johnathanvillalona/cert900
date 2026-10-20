# B3A — Network+ branch-edge ACL simulator

## Isolation and checkpoints

Branch: `codex/pbq-firewall-b3a`.
Worktree: `/home/sorannex/Claude Projects/cert900/firewall-b3a-worktree`.
Base: accepted B2 `f5f8fb10f450c14da68a0b87fd64b31c30a73e93`.

The first commit is the foundation checkpoint: pure ACL state, actions,
validation, exact analysis, grading, session tests, performance fixtures and the
web renderer map. It registers the ACL definition but does not yet opt learners
into an unfinished workspace. The second checkpoint delivers that workspace.
B3B is deferred. Original banks, legacy answers, DHCP v2, vendor scaling,
authentication, infrastructure and database schemas are unchanged.

Clean baseline: scripts-disabled `npm ci`, 355 tests, production build, both
zero-finding audits, no dependency conflicts. Existing Vite chunk-size warning.
No install scripts approved or dependencies changed.

## Approved work order and grading

Binding: Network+ N10-009 / config / security-rules / **Build the Edge ACL**.
The enhanced work order accepts equivalent applied policies, replacing the
original worksheet's instruction to build exactly two allows in fixed order.
That presentation change is explicit and restricted to this registered pilot;
the original bank text and six stored answer fields remain untouched.

Published fixture: management `10.20.30.0/24`, web server `192.0.2.80`.
Permit public TCP/443 to that server; permit TCP/22 from management to any
destination; deny everything else inbound. SSH destination is unrestricted,
as the original wording requires. No hidden IP or executable-path requirement.

Three equally weighted objectives remain exactly as approved:

1. Across TCP/443, allow if and only if the destination is the web server.
2. Across TCP/22, allow if and only if the source belongs to management.
3. Allow no traffic outside those two policy sets, with at least some authorized
   traffic functioning. An empty deny-all policy therefore earns zero.

The equal thirds represent three independent learning outcomes: public-service
availability, restricted administrative access, and least privilege. These are
Cert900's educational weights, not a claim about proprietary examination marks.
Existing CompTIA partial credit, PBQ weight, scaling and progress remain intact.

| Applied policy | Raw credit | Diagnosis |
|---|---:|---|
| Empty / deny all | 0 | Incomplete |
| Correct HTTPS only | 2/3 | Incomplete, without unwanted exposure |
| Correct SSH only | 2/3 | Incomplete, without unwanted exposure |
| Both correct, including equivalent order/subnet splits | 1 | Complete and constrained |
| Allow everything | 0 | Insecure |
| Correct HTTPS, SSH from anywhere | 1/3 | Insecure |
| Required services plus unrelated UDP allowance | 2/3 | Insecure |
| A deny shadows all required allows | 0 | Incomplete |

Incomplete means required access is missing. Insecure means unauthorized traffic
is permitted. Both can apply. Equal numeric scores can describe different
problems; post-grade explanations must distinguish them. No additional penalties,
caps or weight changes are applied. Rule names, creation history and diagnostics
are unscored. Disabled rules do not affect decisions; shadowed rules are judged
by their effective policy, without hidden structural penalties.

## Exact model and execution bounds

Rules evaluate first match, top to bottom; default deny is fixed and always
present, even with no editable rules. Address selectors: Any, IPv4 host, or
CIDR /0–/32; host bits normalize visibly. Destination ports: Any, single port,
or one inclusive interval within 0–65535. TCP/UDP use ports; ICMP and Any IPv4
rules cannot carry port restrictions. Source ports are unrestricted. Other IP
protocols are one equivalence class because no rule can discriminate their
individual numbers. This is a stateless policy decision, not reachability,
NAT, routing, payload inspection or a stateful connection simulation.

Maximum 12 rules. Exact analysis partitions at rule AND policy interval
boundaries, including end sentinels 2^32 and 65536. Numeric arithmetic avoids
signed bitwise IPv4 overflow. Every predicate is constant within a partition
cell; one representative per cell proves coverage/exposure throughout the
supported model, rather than sampling a few test packets.

Conservative bounds: 27 source intervals × 27 destination intervals ×
(2 transport protocols × 29 port intervals + 2 portless protocols) = **43,740
cells**, at most **524,880 rule visits**. Defensive invariants: 65,536 cells and
1,000,000 visits. All objectives are evaluated in one pass. Analysis runs only
when grading; individual traffic tests scan at most 12 rules. A bound or timing
failure must never cause approximation, truncated analysis or altered credit.

Performance acceptance: five warm-up grades, 25 measured serial Node grades per
workload (p95 ≤250ms); ten measured Chrome grades at 4× CPU throttling (p95
≤750ms). Workloads cover maximum boundary count, overlapping CIDRs/port
intervals, and complete policies. The measurement includes the versioned
runtime's validation, copying and grading adapter.

## State and reusable boundaries

Applied rules, revision, editor draft, field errors, traffic form and the latest
20 revision-tagged tests all live in the authoritative simulation answer.
Apply is atomic; Cancel leaves applied policy unchanged. Drafts and diagnostics
do not earn credit. Reset uses the existing session reset and clears all of
those values only for the active question. Existing stale-question/version and
post-grade/finish guards remain in charge.

The web seam selects a lazy renderer by scenario ID before creating the timed
session. It retains the six legacy renderers and DHCP v2. UI shells, rule lists,
editor layout, form validation patterns and traffic-result presentation are
reusable for B3B; its Windows policy evaluator will remain separate.

## Validation and review

Foundation checkpoint: 411 unit tests pass, production build passes, all 40
existing PBQ browser regressions pass without screenshot changes, and all five
real-hook/performance browser tests pass. Node p95 by workload: boundary 19.50ms,
overlap 4.57ms, complete 11.97ms. A repeat Chrome run at 4× CPU measured p95
73.40ms, 24.90ms and 40.20ms respectively. Worst-boundary analysis visited
43,740 cells and 524,814 rules, below the conservative limits. Node 24.21.0,
Chrome 155.0.8059.39, x86_64 Ubuntu. No source/lockfile security dependency
changes. Both dependency audit baselines remain zero.

Foundation commit: `fc16c667c5823b596c3a99099c6fb31f4af501c4`.

Final workspace validation:

| Check | Result |
|---|---|
| Full unit suite, including bank integrity | 412 tests / 25 files pass |
| Production build | Pass; existing >500kB chunk-size warning remains |
| Full / production-only npm audits | 0 / 0 findings |
| `npm ls --all` | Pass, no conflicts |
| Combined production PBQ browser suite | 62 pass: existing 40 + new 22; no baseline updates during final run |
| Isolated hook/performance browser suite | 5 pass, including ACL batched Apply/grade and exactly-once callback |
| Isolated Worker suite | All 13 groups pass; zero outbound attempts |
| Browser/fixture TypeScript check | Pass using project aliases and Node/DOM types |
| `git diff --check` | Pass |

Final warmed runtime-grade performance, milliseconds:

| Workload | Node p95 / max (25 samples) | Chrome 4× CPU p95 / max (10 samples) |
|---|---:|---:|
| Maximum boundaries | 16.69 / 21.86 | 77.40 / 77.40 |
| Overlapping CIDRs/ports | 5.96 / 6.25 | 20.90 / 20.90 |
| Complete policy + additional rules | 11.27 / 11.92 | 43.80 / 43.80 |

All results are below the 250ms Node / 750ms throttled-Chrome p95 targets.
The maximum-boundary workload evaluates 43,740 cells and 524,814 rule visits.
Bounds are hard assertions; timings measure this machine and are not a promise
about every physical device. Five warm-ups precede each measured workload.

Full browser coverage includes all supported grading examples, input/selector
normalization, escaped names, invalid Apply and Cancel, first-match reorder,
disabled rules, editing/deleting, immutable default deny, maximum rule count,
keyboard-only creation, touch, reset from an open draft, retained history across
exam navigation, authoritative reset scoring and guarded module-load failure.
Complete workflows run at all five widths in both themes with reduced motion;
they assert no page overflow or browser errors, readable input and 44px actions.
Virtual-keyboard-height checks cover the mobile editor. New screenshot
candidates were inspected for desktop table layout, mobile cards and visible
validation messages; user review is still the milestone gate.

The Worker harness uses a temporary configuration, a fresh local D1 database,
synthetic auth and isolated home/cache directories. Static assets/CSS, API
errors, auth/session lifecycle, D1 reads/writes/restart persistence and disabled
integrations pass. No production credentials/resources or existing secret files
are used. No dependency/install-script approvals, production changes, push,
merge or deployment occurred.

Protected worktrees were rechecked clean at their original SHAs: PBQ b8f59b7,
security 9155df9, integration 3fb230f, repairs ee4beba, and B2 f5f8fb1. The security
checkpoint remains in this branch's ancestry. Original question banks, engine,
session reducer, Worker code, package manifest and lockfile have no B3A diff.

The workspace checkpoint enables the pilot only for Network+ PBQ lab and timed
exam modes. MC practice and every unregistered question retain their current
renderers. `src/screens/Quiz.tsx` prepares definitions plus a renderer map before
mounting the timer and uses the scenario's explicit enhanced work-order text.
`src/simulations/web-registry.ts` contains the two web opt-ins: DHCP and this ACL.
No Windows scenario is enabled.

The original administration surface uses existing fonts, tokens, Lucide icons,
React, CSS and Radix dialogs. Its device banner, navigation, task/topology panel,
revision indicator, rule table/cards, explicit default row and inspection log
have no borrowed proprietary interface graphics. Desktop has a task sidebar
and complete table; phones/tablets have full-size cards and collapsible tasks.
At narrow widths editing uses a full-screen form with a scrolling body and
reachable actions. Validation focuses the invalid control and scrolls its
message into view. Run/reset/actions use at least 44px activation areas; entry
fields are at least 16px. Selection and status always have text equivalents.

### Workspace files

- `src/simulations/scenarios/EdgeAclWorkspace.tsx`: scenario presentation,
  session actions, rule/draft binding, operational context and post-grade review.
- `src/simulations/ui/AdministrationWorkspace.tsx`: device/context shell,
  navigation, instructions, reset and status layout.
- `RuleCollection.tsx`: desktop table/mobile cards, enabled controls and safe
  move/edit/delete actions; `RuleEditorDialog.tsx`: accessible form layout,
  field validation, focus restoration and viewport handling.
- `TrafficTester.tsx`: synthetic packet form and revision-tagged inspection log.
- `tests/pbq/firewall-acl.spec.ts`, `firewall-helpers.ts`,
  `firewall-responsive.spec.ts`, `firewall-screenshot.css`: maintained actual
  production-asset browser coverage and B3A-only screenshot candidates.
- The foundation's scenario tests also verify uncommitted draft persistence
  across exam navigation and rejection of post-finish actions.

Shared shell/editor/field components are reusable. The ACL-specific rule and
traffic presentations can supply the layout patterns for Windows without
reusing the ACL evaluator. B3B will need its own application/profile/direction
controls and native Block precedence, after separate approval.

### Local preview

```sh
cd '/home/sorannex/Claude Projects/cert900/firewall-b3a-worktree'
# If dependencies are absent: npm ci --ignore-scripts --no-audit --no-fund
npm run build
node tools/qa/isolated-worker.mjs --serve --port=4178
```

Open **http://127.0.0.1:4178** → **Network+ (N10-009)** → **PBQ Lab** →
**Build the Edge ACL**. The lab is shuffled; Check/Next skips other questions.
Full Exam also uses this pilot when drawn. The preview uses only fresh local
synthetic resources. Keep the process running; Ctrl+C stops it. Stop it before
rebuilding so the preview cannot retain an older asset manifest.

Reproduce validation using installed Chrome, without browser downloads:

```sh
npm test
npm run build
npm run test:simulations
CERT900_TEST_PORT=4177 npm run test:browser
npm run test:worker
npm audit
npm audit --omit=dev
npm ls --all
```

The alternate test port preserves the accepted B2 preview at :4176 and avoids
the new B3A preview at :4178. The error-path browser test preserves the existing
application-level one-time chunk-reload behavior and exercises its guarded
failure path before a timer/session starts.

### Screenshot review and limits

Thirty new candidates cover policy, validation/editor and traffic views at
320/375/390/768/1440px, light/dark and reduced motion. Existing B1/B2 baselines
are not updated. Examples:

- [Desktop policy](../tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-1440-light-linux.png)
- [390px policy](../tests/pbq/firewall-responsive.spec.ts-snapshots/acl-policy-390-dark-linux.png)
- [320px editor validation](../tests/pbq/firewall-responsive.spec.ts-snapshots/acl-editor-320-light-linux.png)
- [375px traffic inspection](../tests/pbq/firewall-responsive.spec.ts-snapshots/acl-traffic-375-light-linux.png)

These are candidates for the user's review, not an automatic approval of visual
quality. Physical iOS/Android keyboard, screen-reader and IME review remains
manual; viewport emulation and 4× CPU throttling are not physical-device tests.
The editor body intentionally scrolls when all fields cannot fit. This is a
12-rule stateless IPv4 policy simulator, not a complete enterprise firewall or
packet stack. No NAT/IPv6, connection state, address groups, payload inspection
or general network troubleshooting is implemented. History retains 20 tests.
State persists within the attempt, not across page reloads.

Do not begin B3B, push, merge or deploy from this milestone. Rollback uses the
previous isolated checkpoint; preserved branches/worktrees are not reset.
