# Handoff: first session on the Ubuntu machine

Written 2026-09-05 on the Windows laptop, to be executed top to bottom on the Ubuntu 24.04
machine that is now the main PC. Everything about the *product* (exams, pipeline, worker,
mobile app, design system) lives where it always did: `CLAUDE.md` first, then `docs/`. They
travelled here inside the repo. This file carries only what is different on Linux and the
steps to stand the workspace up. `docs/handoff/setup-ubuntu.sh` does the mechanical part.

The drive: **ThinkPad Secure 750 GB** (hardware encrypted, unlock it first), NTFS, volume
label "John Villa", so Ubuntu mounts it at `/media/$USER/John Villa`. The bundle:

```
cert900/
  README-FIRST.md            short version of this file
  setup-ubuntu.sh            this repo's docs/handoff/setup-ubuntu.sh, LF, ready to run
  refresh-claude-state.cmd   WINDOWS ONLY: re-mirrors the final transcript after /exit
  repo/                      the whole working tree incl. .git and .dev.vars
                             (no node_modules, dist, .wrangler; the .aab is included)
  claude-state/              ~/.claude/projects/<project>/ (transcript, subagents, memory/),
                             settings.json, skills, ~/.agents/skills, the migration plan
  secure/                    ~/secure (publishing keys), the second Apple key,
                             wrangler OAuth token, ssh key, a copy of .dev.vars
  MANIFEST.sha256            every file under repo/, hashed on the source machine
  CLAUDE-STATE.sha256        same for claude-state/ + secure/
  VERIFY-REPORT.txt          the drive-side read-back that ran after the copy
```

## 1. Choose how to run the setup

Both end with `~/cert900` as the repo root and Claude's project key pointing at it.

**A. Drag and drop (the intended path).** Copy the `cert900` folder from the drive to your
home directory so it is `~/cert900`, then:

```bash
bash ~/cert900/setup-ubuntu.sh
```

It verifies the copy against `MANIFEST.sha256`, then unpacks in place: `repo/*` moves up
so `~/cert900` *is* the repository, `claude-state/` and `secure/` are installed to their
homes, and the handoff files (including the script) move to `~/.cert900-handoff/`.

**B. Straight from the drive.**

```bash
bash "/media/$USER/John Villa/cert900/setup-ubuntu.sh"        # copies repo/ to ~/cert900
```

Or open Claude Code in the dragged folder and say: *read README-FIRST.md and run the setup.*

## 2. System installs (once)

The script checks for these and prints the same commands if anything is missing.

```bash
sudo apt update && sudo apt install -y git curl rsync python3 build-essential
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash - && sudo apt install -y nodejs   # Node 24 (apt's is 18)
sudo mkdir -p -m 755 /etc/apt/keyrings
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg >/dev/null
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list >/dev/null
sudo apt update && sudo apt install -y gh
curl -fsSL https://claude.ai/install.sh | bash      # Claude Code; run `claude` once and log in to the subscription
npm i -g eas-cli                                    # Expo builds/submits
```

Optional, for the Playwright and chrome-devtools MCP servers and any QA driver:
`sudo npx playwright install-deps chromium && npx playwright install chromium`. The
chrome-devtools MCP additionally wants a real Chrome (`google-chrome-stable` .deb).

## 3. What the script does, phase by phase

`bash setup-ubuntu.sh --phase <name>` re-runs one phase; all are idempotent.

| phase | does | aborts when |
|---|---|---|
| prereqs | checks git/node>=22/npm/gh/python3/curl/rsync, prints installs | something is missing |
| repo | manifest verify, unpack or copy, chmod 755/644, git config (`ignorecase false`, `autocrlf false`, `filemode true`, unset `symlinks`, noreply email), `git fsck`, then `git rm --cached -r . && git reset --hard` to rewrite the 93 CRLF working files as LF | manifest mismatch, or `git status` not clean before/after |
| secrets | `~/secure` 700/600, `.dev.vars` 600, `mobile/AuthKey_AAD22D8LBT.p8 -> ~/secure/...` symlink (asserted gitignored), wrangler token, ssh key (only if none exists), fresh global git identity | the key symlink would not be ignored |
| claude | project key from the repo path, transcript + memory into `~/.claude/projects/<key>/`, settings.json (if absent), plan, skills + `~/.agents/skills` + symlinks, a Linux `settings.local.json`, `claude mcp add` agentopus | |
| deps | `npm ci` (root and mobile), `npm test`, `npm run build` | tests or build fail |
| verify | prints state and the interactive NEXT list | |

Why the line-ending rewrite: the Windows checkout had `core.autocrlf=true`, so 93 tracked
files are CRLF on disk while the index is LF. `.gitattributes` (`* text=auto eol=lf`,
committed 2026-09-05) keeps the tree quiet either way, but `git reset --hard` alone would
not touch them (git already considers them clean), hence the `rm --cached` first.

Why `filemode=true` only after a chmod pass: files copied off an NTFS mount arrive 0777.
All 407 tracked files are mode 100644.

## 4. Logins (interactive, after the script)

```bash
gh auth login && gh auth setup-git && (cd ~/cert900 && git pull)   # origin -> johnathanvillalona/cert900 (renamed 2026-09-05)
npx wrangler whoami   # the copied token usually works; otherwise: npx wrangler login
eas login             # Expo owner: sorannex
```

`git pull` should be a no-op: the drive snapshot was taken after the last push.

## 5. First Claude session

```bash
cd ~/cert900 && claude
```

Log in to the subscription, accept the trust prompt, then `/resume` and pick the
2026-09-05 session (or start with `claude --resume 2503b3e1-5d3d-4149-a12d-230bc62f53b2`).
`/memory` should list the six memory files (the migration one is
`ubuntu-migration-2026-09-05.md`); `/mcp` should show shadcn, playwright, chrome-devtools
(from the tracked `.mcp.json`) and agentopus (user scope). Then
`/plugin install stripe@claude-plugins-official`, which `settings.json` already enables.

If Claude created a different directory under `~/.claude/projects/` than the one the script
filled (symlinked home, different folder), re-run `bash ~/.cert900-handoff/setup-ubuntu.sh
--phase claude --dest <the path claude shows>`.

## 6. Where things live now

| thing | Windows | Ubuntu |
|---|---|---|
| repo | `C:\Users\user\Desktop\(CLAUDE) Comptia practice exam` | `~/cert900` |
| GitHub | `johnathanvillalona/comptia-practice-trainer` | `johnathanvillalona/cert900` (renamed; old URL redirects) |
| App Store Connect team key | `C:\Users\user\secure\AuthKey_AAD22D8LBT.p8` | `~/secure/AuthKey_AAD22D8LBT.p8`, issuer `adf2c3f3-e5c5-475d-ae19-457322ec5c6f` |
| Play service account | `C:\Users\user\secure\grimoire-publishing-3e2e8396afec.json` | `~/secure/grimoire-publishing-3e2e8396afec.json` |
| second Apple key (unidentified) | `C:\Users\user\Documents\AuthKey_78NC6JJDLV.p8` | `~/secure/AuthKey_78NC6JJDLV.p8` |
| grimoire-era files (other app) | `~/secure/*` | `~/secure/*` (keystore, Codemagic token, iOS dist key) |
| `eas submit` key path | absolute Windows path in `mobile/eas.json` | `./AuthKey_AAD22D8LBT.p8`, a gitignored symlink into `~/secure` |
| local worker secrets | `.dev.vars` | `.dev.vars` (600) |
| wrangler login | `%APPDATA%\xdg.config\.wrangler\config\default.toml` | `~/.config/.wrangler/config/default.toml` |
| Claude project state | `~/.claude/projects/c--Users-user-Desktop--CLAUDE--Comptia-practice-exam/` | `~/.claude/projects/-home-<user>-cert900/` |

Store tooling dry-runs that prove both keys:
`ASC_ISSUER_ID=adf2c3f3-e5c5-475d-ae19-457322ec5c6f node tools/appstore-listing.mjs --key ~/secure/AuthKey_AAD22D8LBT.p8`
and `node tools/play-listing.mjs --key ~/secure/grimoire-publishing-3e2e8396afec.json`.

The Worker is still named `comptia-practice-trainer` and the D1 database
`comptia-trainer`. Those are live Cloudflare identifiers, unrelated to the repo name. Do
not rename them.

## 7. Cloudflare CI after the repo rename

Workers Builds deploys on every push to `main` (build `npm ci && npm run build`, deploy
`npx wrangler deploy`). The rename was probed with a docs-only push right after it
(c51ec75, 2026-09-05 18:41Z): Workers Builds fired and deployed normally, so the GitHub
App follows the rename and nothing needed reconnecting. If a push ever stops deploying: Cloudflare
dashboard, Workers & Pages, `comptia-practice-trainer`, Settings, Builds, disconnect and
reconnect the repository as `johnathanvillalona/cert900` with the same build and deploy
commands. Until then `npm run build && npx wrangler deploy` from `~/cert900` keeps
production current.

## 8. Troubleshooting

- **manifest mismatch**: a file changed in transit. Re-copy `cert900/` from the drive (the
  drive copy was verified byte for byte, see `VERIFY-REPORT.txt`) and re-run.
- **dirty tree after copy**: `git status --short` names the files. Modes (0777 from NTFS)
  are the usual cause; the script chmods first, so anything left is real. Do not
  `reset --hard` blindly; look first.
- **`npm ci` complains about optional dependencies** (rollup/lightningcss/esbuild native
  binaries): `rm -rf node_modules && npm ci`. Both lockfiles already list the Linux builds.
- **Wrong Claude project dir**: see section 5.
- **`eas submit` cannot find the key**: `ls -l mobile/AuthKey_AAD22D8LBT.p8` must be a
  symlink into `~/secure`; `git check-ignore -v mobile/AuthKey_AAD22D8LBT.p8` must match.
- **`git push` rejected**: the repo-local `user.email` must be the GitHub noreply address
  (`git config user.email` in `~/cert900`); the script sets it.
- **Scratchpad QA scripts** (`qa/drive-v3.js`, `qa/match-repro.js`, `qa/og-guides.js`,
  `qa/brand-render.js`, `qa/mobile-icons.js`) referenced by older notes are gone: they
  lived in a temp directory that was cleaned on 2026-09-05. Re-author on demand.

## 9. Deliberately not bundled

Other projects' Claude state (`third-issue-edit` was migrated separately; the rest are
unrelated), `node_modules` (native binaries), `dist`, `.wrangler` (local D1 test data,
recreate with `npx wrangler d1 execute comptia-trainer --local --file=worker/schema.sql`),
the Windows `~/.gitconfig` (git-lfs filters marked required, Windows-only helpers), and
every account-bound login (Claude, Expo, gh, claude.ai connectors): log in again.

## 10. Last step

Once `~/secure` is confirmed and the store dry-runs pass, delete the plain-text copies:
`rm -rf "/media/$USER/John Villa/cert900/secure" ~/.cert900-handoff/secure`.
