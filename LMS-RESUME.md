# Cert900 LMS — preservation and restart record

Verified locally **24 October 2026 (America/New_York)**. This is an internal project
handoff, not a public course page. **Further LMS implementation is paused while
monetization work proceeds.** Do not merge, deploy, delete, archive or overwrite
this unpublished lineage as part of a monetization release.

## Exact checkpoints and boundaries

| Item | Verified value |
|---|---|
| Accepted LMS checkpoint | `322b7a03f395d1859c01d044d9981a09ef074534` |
| Accepted LMS branch | `codex/m8c-windows-first` |
| Accepted LMS worktree | `/home/sorannex/Claude Projects/cert900/course-production-m8c-windows-worktree` |
| LMS tracked working tree at inspection | Clean; HEAD and branch match the accepted checkpoint |
| Production/main baseline for this sprint | `8f64becefa1575a97a69e2bb959306bf3ac9f73a` |
| Production Worker checkpoint supplied by owner | `4ba3782a-89ef-4e8e-997b-20b023934875` |
| Rollback Worker checkpoint supplied by owner | `8ba0cf42-fcf9-4aaf-b13e-7396549f6d6f` |
| Separate monetization worktree containing this document | `/home/sorannex/Claude Projects/cert900/monetization-ux-seo-m1-worktree` |

The Worker values above identify the established production checkpoints; this
local preservation inspection did not query or change Cloudflare. The monetization
branch starts from production, **not** the unpublished course branch. The accepted
LMS root lockfile already matches the production Zod-hotfix lockfile byte-for-byte;
there is no reason to merge all of main just to obtain Zod 4.6.6.

## Current progress

The complete A+ curriculum specification remains present: **151 lesson concepts,
18 modules, 63 official numbered objectives and 1,309 source items/assignments**.
Lesson IDs are unique; prerequisite references resolve and the graph has no cycles.
These counts describe planned curriculum coverage, not 151 completed lessons or a
published complete course. Four beginner lessons have complete local teaching packages:

| Recommended order | Available lesson | Stable ID | Local route |
|---|---|---|---|
| 1 | What Is a Computer Network? | `c1-o2-7-l2` | `/courses/aplus-220-1201/lessons/c1-o2-7-l2` |
| 2 | What Is an IP Address? | `c1-o2-6-l1` | `/courses/aplus-220-1201/lessons/c1-o2-6-l1` |
| 3 | How Do Devices Get Their Network Settings? | `c1-o2-6-l2` | `/courses/aplus-220-1201/lessons/c1-o2-6-l2` |
| 4 | DHCP and APIPA | `c1-n04-dhcp-apipa` | `/courses/aplus-220-1201/lessons/c1-n04-dhcp-apipa` |

The current directory/outline routes are `/courses`, `/courses/aplus-220-1201` and
`/courses/aplus-220-1202`. Other lesson concepts remain Planned and must not gain
placeholder URLs. Recommendations support direct lesson access rather than locks.
Prerequisites also include existing foundational concepts beyond these four; keep
those relationships intact rather than reducing the curriculum to a four-node graph.

Preserved work includes the course interface, native player and text alternatives,
optional browser-local completion, white/orange title/end cards, reusable animation
and thinking scenes, accepted af_heart narration/pronunciation pipeline, original
figures, captions, complete written teaching, genuine Ubuntu examples and the
reusable authentic-media/intake framework. No LMS accounts, course database,
public video hosting or cross-device course-progress system has been completed.
Existing exam progress is separate from the optional local course-completion marker.

## Source and production paths

All paths in this section are under the exact accepted worktree above. Keep these
source packages and their ignored media together:

| Purpose | Path relative to accepted LMS worktree |
|---|---|
| Authoritative curriculum, prerequisites and mappings | `course-production/data/lesson-plan.json`, `source-inventory.json`, `resources.json`, `production-manifest.json` |
| Production contracts and validators | `course-production/MANIFEST.md`, `validate-contracts.ts`, `validate-curriculum.ts`, `contracts.test.ts`, `curriculum.test.ts` |
| Permanent writing requirements | `docs/educational-content-standard.md` |
| Permanent production/media requirements | `course-production/VIDEO-STANDARD.md`, `AUTHENTIC-MEDIA-STANDARD.md`, `STUDIO-BOUNDARY.md`, `LEARNING-PATH-QA.md` |
| Reusable local video components | `course-studio/components/` |
| Course interface, figures, routes and local progress | `src/courses/`, `src/course-client.ts` |
| Build-time curriculum consumer | `tools/course-content.ts`, `tools/prerender.tsx` |
| Local read-only/hash-bound media preview | `tools/qa/course-preview.mjs`, `tools/qa/system-media-review.mjs` |
| DHCP/APIPA package | `course-studio/pilots/dhcp-apipa/` |
| IP-address package | `course-studio/lessons/ip-address/` |
| Basic-network package | `course-studio/lessons/computer-network/` |
| Network-configuration package | `course-studio/lessons/network-configuration/` |
| Public lightweight delivery companions | `public/course-assets/` (no video masters) |
| Authentic Ubuntu sources/metadata | `course-studio/authentic-media/manifest.json`, `raw/`, `capture-receipt.json`, `narration-receipt.json` |
| Accepted clean-presentation revision | `course-studio/authentic-media/clean-presentation/` |
| Blocked Windows preparation | `course-studio/authentic-media/windows-network/` |

### Verified video and raw-media inventory

The read-only inspection verified **103 protected baseline-file hashes** and **nine
video files** (eight lesson/review masters plus one raw recording). All nine video
files exist, match their recorded SHA-256 checksums, are Git-ignored/untracked, and
are readable by the existing ffprobe. Exact sizes, hashes, dimensions and durations
are recorded in [the preservation evidence](docs/lms-preservation-2026-10-24.json).
No media, narration, capture, curriculum or LMS source was changed by this inspection.

These are the exact paths relative to the accepted LMS worktree:

```text
course-studio/lessons/computer-network/output/lesson-computer-network.mp4
course-studio/lessons/ip-address/output/lesson-ip-address.mp4
course-studio/lessons/network-configuration/output/lesson-network-configuration.mp4
course-studio/pilots/dhcp-apipa/output/pilot-dhcp-apipa.mp4
course-studio/authentic-media/output/network-settings-practical.mp4
course-studio/authentic-media/output/network-configuration-revised.mp4
course-studio/authentic-media/output/network-settings-practical-clean-v2.mp4
course-studio/authentic-media/output/network-configuration-revised-clean-v2.mp4
course-studio/authentic-media/raw/terminal.mp4
```

Also verified in the 103-file inventory: original Ubuntu `raw/settings.png`, original
narration WAVs, timing, scripts, caption files, curriculum and protected application
inputs. The current clean practical clip is 1920×1080 at 30 fps, approximately
2:10.067; its combined conceptual/practical preview is approximately 11:21.388.
Those are separate derivatives. Original masters and old derivatives are preserved.

The existing isolated synthesis runtime is at:

```text
/home/sorannex/Claude Projects/cert900/course-production-m2b-worktree/course-studio/benchmarks/m2b/runtime/
```

Its `venv/`, `models/`, `wheels/` and `cache/` directories exist. Do not delete,
relocate, update or reinstall them as part of this sprint. Their detailed licenses,
hashes and reproduction restrictions are in that worktree's
`course-studio/benchmarks/m2b/DEPENDENCIES.md`, `LICENSE-REVIEW.md` and evidence.
The source commit alone cannot restore that ignored runtime or generated media.

### Relevant preserved historical worktrees

All are sibling paths under `/home/sorannex/Claude Projects/cert900/`:

| Worktree | Branch / checkpoint | Purpose |
|---|---|---|
| `aplus-curriculum-m1-worktree` | `codex/aplus-curriculum-m1` / `4ddf6255abe024858e55e63203699b47d59b28d7` | Accepted curriculum foundation |
| `course-interface-m4-worktree` | `codex/course-interface-m4` / `09f34d149c27d0bedb812a5dbe96e4da2b1df114` | Initial local interface |
| `course-production-m3c-worktree` | `codex/course-production-m3c` / `a04c2987220e9a5c67da2f77d5f4d63cded2ec2c` | Branded DHCP/APIPA reference |
| `course-production-m5c-worktree` | `codex/course-production-m5c` / `f6b09a5e266330fab86decd14a85e5c41a3c80cf` | Approved IP thinking/reveal refinement |
| `course-production-m6-network-worktree` | `codex/course-production-m6-network` / `30b188f8093589d76625be68dfebc37b79cc5f26` | Basic-network lesson |
| `zod-security-worktree` | `codex/security-zod-fix` / `8e97fac4d06b6bf2b80fab70a25557628c25fc7a` | Course-lineage security resolution |
| `course-production-m7-config-worktree` | `codex/course-production-m7-config` / `d52d38440a24a934aa47259a83adeec2546009e7` | Network-configuration lesson |
| `course-production-m8-network-path-worktree` | `codex/course-production-m8-network-path` / `98b45e491ac5269fdbd987ffda1e1549d5ecd3fa` | Four-lesson sequence review |
| `course-production-m8b-authentic-media-worktree` | `codex/course-production-m8b-authentic-media` / `be647fd440f7f3fc8fa1718bd4d06058aa2cb42c` | Genuine Ubuntu media framework |

These working copies are useful comparison/recovery sources on the same machine;
they are **not independent archival backups**. Preserve all other branches and
worktrees too. This list does not authorize cleanup.

## External media backup status: not verified

**No independent/off-device media backup is verified.** Existing source records
explicitly say the ignored masters are local and require separate archival copies.
This inspection checked only scoped project records/current accepted files; it did
not inspect unrelated disks, accounts or storage services. It neither proves that
no owner backup exists elsewhere nor claims any such backup is valid.

Git protects tracked editable source and evidence. It does not protect ignored
video/audio masters, model weights, venvs, raw recordings or caches. A hash proves
identity, not recoverability. Before deleting/archiving a worktree or publishing:

1. Obtain approval for an actual controlled storage destination and capacity.
2. Preserve original raw captures, accepted masters, narration/audio/caches required
   for revision, source receipts and dependency/license records.
3. Create a checksum index and **two verified controlled archival copies**, including
   an independent failure domain/off-device copy.
4. Rehash both copies and perform a sample restore/playback. Record destination,
   date and verification receipt privately without credentials.

No backup service, account, bucket, upload, copy or purchase was created here.

## Windows practical teaching: mandatory and blocked

The owner confirmed **“No windows source yet; prepare the intake package.”** No
new Windows source is established. Ubuntu is optional supplementary instruction,
never a substitute for applicable Windows A+ configuration/troubleshooting teaching.
Do not fabricate Windows UI, repaint Linux output or relabel a simulator as a real
Windows demonstration. Concept-only lessons do not need unrelated OS footage.

Read these files in the accepted worktree before resuming:

- `course-studio/authentic-media/clean-presentation/WINDOWS-ACQUISITION.md`
- `course-studio/authentic-media/windows-network/CAPTURE-PLAN.md`
- `course-studio/authentic-media/windows-network/SOURCES.md`
- `course-studio/authentic-media/windows-network/intake-template.json`
- `course-production/windows-capture-intake.ts`

Preferred source: an existing appropriately licensed Windows 11 test device/VM
with explicit capture/reuse authority, or owner-supplied unmodified originals with
exact edition/release/build, date and rights/privacy evidence. Official vendor
media needs permission for the specific use and transformations. An evaluation VM
is only a future option: separate owner approval, licensing/requirements review and
installation authorization are required. No Windows download, account, license
acceptance or provisioning is authorized by this preservation document.

The first procedure is read-only: open actual Windows Settings connection
properties; inspect IPv4/gateway/DNS fields where the build supplies them; open
Command Prompt (Windows+R, `cmd.exe`, Enter); run **only `ipconfig /all`**; identify
the connected adapter's IPv4 Address, Subnet Mask, Default Gateway and DNS Servers.
Capture a genuine full-context still and continuous readable recording covering
the actual navigation/output. Prefer 1080p/30fps if existing tooling supports it.

No Edit/Save, release/renew/flushdns, reset, network changes, fault induction or
production connectivity probes. Review account names, hostname, MAC, SSID, DNS
suffix, private organizational context, notifications and histories before capture.
Preserve originals locally; never paste private output/credentials in chat. Rights,
privacy, genuine source, readable UI, exact build/paths and synchronization are
separate gates; passing hashes cannot establish them. Do not overwrite Ubuntu's
shared caption/transcript paths when adding Windows media.

Future presentation: explain concepts, show authentic Windows steps/video first,
then offer the optional Linux example. Preserve four original masters; reuse
unchanged narration; use separately versioned derivatives. Applicable DHCP/APIPA
Windows practical coverage also remains a publication gate; the current simulated
Windows exercise alone does not satisfy authentic-media requirements. Do not expand
this intake into repair commands without separate scope approval.

## Publication and release blockers

- Required authorized Windows practical sources/captures and their completed
  written/video integration are missing.
- Final owner listening/educational/visual approval of new derivatives, source
  rights/privacy and physical-device/screen-reader checks remain required.
- Independent verified archival media copies and hosting/delivery approval remain
  incomplete. No public media endpoint or publishing account is authorized.
- Only four lessons are locally available; the rest of the full A+ course is still
  planned. Do not market it as a completed course or promise exam passes.
- Any public course release needs a separately reviewed release candidate, SEO/
  noindex decision, privacy/media delivery review and regression gates. Current
  unpublished routes must not leak into a monetization production release.
- Historical validation is evidence at its own checkpoint, not a fresh result:
  accepted M8C records 695 unit tests, 257 browser regressions, 13 focused browser
  cases, seven simulator checks and 13 isolated Worker groups passing. Two old
  DHCP repository-scope assertions are documented historical failures; do not
  weaken them or silently report all suites green. Re-run relevant checks after
  an authorized new change.

## Exact restart procedure — after separate LMS resumption approval

1. Finish/pause the monetization sprint independently. Leave production/main and
   every existing worktree intact. Read this handoff, current owner instructions,
   `AGENTS.md`, `CLAUDE.md`, writing/video/media standards and the Windows intake.
2. From the accepted LMS directory, inspect before editing:

   ```sh
   cd '/home/sorannex/Claude Projects/cert900/course-production-m8c-windows-worktree'
   git status --short
   git branch --show-current
   git rev-parse HEAD
   git diff --check
   ```

   Expected clean `codex/m8c-windows-first` at `322b7a03f395d1859c01d044d9981a09ef074534`.
   Stop on unexpected changes. Do not reset/clean/discard them. Create a new bounded
   branch/worktree from this checkpoint when the resumed milestone is authorized;
   do not merge the whole unpublished lineage into production or vice versa.
3. Rehash the preserved media against this document's evidence and the accepted
   `clean-presentation/baseline.json`. Confirm free RAM/storage and runtime availability.
   Do not regenerate media to replace a missing file without first finding the
   accepted master. Do not install or redownload tools/models automatically.
4. Resolve the authorized Windows source and backup gates. Validate intake with:

   ```sh
   node course-studio/authentic-media/windows-network/check-intake.ts
   ```

   Its current blocked result is correct. `--require-ready` must fail until source
   clearance/file verification is genuinely complete; never mark pending fields
   reviewed merely to make a validator pass.
5. For local review only, use existing dependencies and build from this worktree
   after resumption approval. Check port 4296 first; reuse its appropriate existing
   server, or choose an unused port rather than stopping unrelated processes:

   ```sh
   npm run build
   node tools/qa/course-preview.mjs --port=4296 \
     --media=course-studio/pilots/dhcp-apipa/output/pilot-dhcp-apipa.mp4 \
     --ip-media=course-studio/lessons/ip-address/output/lesson-ip-address.mp4 \
     --network-media=course-studio/lessons/computer-network/output/lesson-computer-network.mp4 \
     --configuration-media=course-studio/lessons/network-configuration/output/lesson-network-configuration.mp4 \
     --system-demo=course-studio/authentic-media/output/network-settings-practical-clean-v2.mp4 \
     --revised-demo=course-studio/authentic-media/output/network-configuration-revised-clean-v2.mp4
   ```

   Review `http://127.0.0.1:4296/courses/aplus-220-1201`, the four lesson routes above,
   `http://127.0.0.1:4296/__system-review/` and `/__system-review/revised`.
   The synthetic Worker/proxy is loopback-only and attaches only explicit
   hash-verified local media. Ordinary production builds do not publish these
   masters. Rebuild/restart only the relevant review server when its asset manifest
   changes. Use authorized Playwright browser tools, preserve existing personal
   tabs/sessions, and close only test tabs created by the resumed task.
6. The separate no-install Windows brief can be restored with:

   ```sh
   node course-studio/authentic-media/windows-network/preview.mjs
   ```

   It uses `http://127.0.0.1:4297/`; check the port before starting another copy.
7. Before committing any resumed change, run curriculum/contract/intake validators,
   media-preservation/pronunciation/timing/scene checks, application and full browser/
   simulator/isolated Worker tests, build, dependency tree, both root audits and
   five-width/both-theme/accessibility/consent/no-ad checks. Compare protected
   media/source hashes before/after. Keep current production-tool/mobile findings
   separately documented. Never use blanket upgrades to make an audit disappear.
8. Obtain owner educational, listening, visual and rights/publication approval before
   any upload or release. No resumption command in this document authorizes push,
   merge, deployment, public video hosting, paid services or production data changes.
