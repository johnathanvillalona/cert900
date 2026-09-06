#!/usr/bin/env bash
# cert900 handoff: stand the workspace up on Ubuntu from the bundle that was
# built on the Windows laptop on 2026-09-05 (D:\cert900 on the ThinkPad Secure
# drive). Companion runbook: docs/handoff-ubuntu.md.
#
#   bash setup-ubuntu.sh [--dest DIR] [--drive DIR] [--project-key KEY]
#                        [--phase all|prereqs|repo|secrets|claude|deps|verify] [--dry-run]
#   --dest is the REPOSITORY directory; --project-key overrides the derived
#   ~/.claude/projects/<key> name if Claude's first launch created a different one.
#
# The bundle next to this script looks like:
#   repo/            working tree + .git            -> becomes the project root
#   claude-state/    ~/.claude project dir (transcript, memory), settings, skills, plan
#   secure/          publishing keys, ssh key, wrangler token, .dev.vars copy
#   MANIFEST.sha256  every file under repo/, hashed on the source machine
#
# Two ways to run it:
#   1. Drag the whole cert900 folder to ~/cert900, then:  bash ~/cert900/setup-ubuntu.sh
#      It unpacks IN PLACE: ~/cert900 becomes the repo root, state/secrets move to their
#      homes, and the handoff files (this script included) move to ~/.cert900-handoff/.
#   2. Run it straight from the drive:  bash "/media/$USER/John Villa/cert900/setup-ubuntu.sh"
#      It copies repo/ to --dest (default ~/cert900) and leaves the drive untouched.
# Every phase is idempotent. Re-run one with --phase; nothing inside needs sudo.
set -euo pipefail

SCRIPT_PATH="$(readlink -f "${BASH_SOURCE[0]}")"
SCRIPT_DIR="$(dirname "$SCRIPT_PATH")"
DRIVE="$SCRIPT_DIR"
DEST=""
PHASE=all
DRY=0
HANDOFF="${CERT900_HANDOFF:-$HOME/.cert900-handoff}"
NOREPLY="129530641+johnathanvillalona@users.noreply.github.com"
SESSION_ID="2503b3e1-5d3d-4149-a12d-230bc62f53b2"
ASC_KEY="AuthKey_AAD22D8LBT.p8"
PROJECT_KEY=""

while [ $# -gt 0 ]; do
  case "$1" in
    --dest) DEST="$2"; shift 2 ;;
    --drive) DRIVE="$(readlink -f "$2")"; shift 2 ;;
    --phase) PHASE="$2"; shift 2 ;;
    --project-key) PROJECT_KEY="$2"; shift 2 ;;
    --dry-run) DRY=1; shift ;;
    -h|--help) sed -n '2,22p' "$SCRIPT_PATH"; exit 0 ;;
    *) echo "unknown argument: $1" >&2; exit 2 ;;
  esac
done

log()  { printf '\n== %s\n' "$*"; }
die()  { printf 'ERROR: %s\n' "$*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1; }
want() { [ "$PHASE" = all ] || [ "$PHASE" = "$1" ]; }
run()  { if [ "$DRY" = 1 ]; then printf '[dry-run]'; printf ' %q' "$@"; printf '\n'; else "$@"; fi; }
on_removable() { case "$1" in /media/*|/mnt/*|/run/media/*) return 0 ;; *) return 1 ;; esac; }
# repo copy vs MANIFEST.sha256 (hashed on the laptop). .git/index is skipped on purpose:
# any git command run in the copy rewrites it, and it carries no integrity the objects lack.
verify_repo() {
  if ( cd "$1" && grep -v -E '[ *]\.git/index$' "$DRIVE/MANIFEST.sha256" | sha256sum -c --quiet ); then echo "repo/: ALL-VERIFIED"
  else die "repo/ does not match MANIFEST.sha256 (mismatches listed above): re-copy the cert900 folder from the drive"; fi
}
# claude-state/ + secure/ vs CLAUDE-STATE.sha256. Its paths are bundle-root relative, so
# this works on the drive, in the dragged folder, and in $HANDOFF after an in-place unpack.
verify_state() {
  [ -f "$DRIVE/CLAUDE-STATE.sha256" ] || { echo "no CLAUDE-STATE.sha256 under $DRIVE; state not verified"; return 0; }
  if ( cd "$DRIVE" && sha256sum -c CLAUDE-STATE.sha256 --quiet --ignore-missing ); then echo "claude-state/ + secure/: ALL-VERIFIED"
  else die "claude-state/ or secure/ does not match CLAUDE-STATE.sha256 (mismatches listed above): re-copy the cert900 folder from the drive"; fi
}
# copy-if-absent. Not "cp -n": coreutils 9.2-9.4 (Ubuntu 24.04 ships 9.4) exit 1 when it skips.
sync_in() { run rsync -rlt --chmod=D755,F644 --ignore-existing "$1" "$2"; }

# Mode: in place (the bundle already sits where the repo should live) or copy.
if [ -z "$DEST" ]; then
  if [ -d "$DRIVE/repo/.git" ] && ! on_removable "$DRIVE"; then DEST="$DRIVE"; else DEST="$HOME/cert900"; fi
fi
[ "$DRY" = 1 ] || mkdir -p "$DEST"
DEST="$(readlink -f "$DEST")"
INPLACE=0
[ "$DEST" = "$DRIVE" ] && INPLACE=1
echo "bundle: $DRIVE"
echo "dest:   $DEST  ($([ "$INPLACE" = 1 ] && echo 'unpack in place' || echo 'copy'))"
echo "phase:  $PHASE"

# ---------------------------------------------------------------- prereqs
if want prereqs; then
  log "prerequisites"
  missing=()
  for c in git node npm gh python3 curl rsync; do need "$c" || missing+=("$c"); done
  if [ ${#missing[@]} -gt 0 ]; then
    cat <<EOF
Missing: ${missing[*]}

  sudo apt update && sudo apt install -y git curl rsync python3 build-essential
  # Node 24 (Ubuntu's apt nodejs is 18, too old for Vite 7 / Wrangler 4 / Expo):
  curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash - && sudo apt install -y nodejs
  # GitHub CLI:
  sudo mkdir -p -m 755 /etc/apt/keyrings
  curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg >/dev/null
  echo "deb [arch=\$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list >/dev/null
  sudo apt update && sudo apt install -y gh

Then re-run this script.
EOF
    exit 1
  fi
  major="$(node -p 'process.versions.node.split(".")[0]')"
  [ "$major" -ge 22 ] || die "node >= 22 required (have $(node -v)); see the NodeSource line above"
  need claude || echo "claude is not installed yet:  curl -fsSL https://claude.ai/install.sh | bash   (then run 'claude' once and log in)"
  need eas    || echo "eas-cli is not installed yet:  sudo npm i -g eas-cli   (NodeSource's npm prefix is /usr; then 'eas login')"
  echo "git $(git --version | cut -d' ' -f3), node $(node -v), npm $(npm -v), gh $(gh --version | head -1 | cut -d' ' -f3)"
fi

# ---------------------------------------------------------------- repo
if want repo; then
  log "repo -> $DEST"
  if [ "$DRY" = 1 ]; then
    echo "[dry-run] repo phase: would verify MANIFEST.sha256 + CLAUDE-STATE.sha256, $([ "$INPLACE" = 1 ] && echo 'unpack in place' || echo "rsync repo/ to $DEST"), normalize modes, fix git config, fsck, rewrite CRLF files as LF"
  else
  if [ -d "$DEST/.git" ]; then
    echo "already unpacked at $DEST (copy skipped)"
  elif [ "$INPLACE" = 1 ]; then
    [ -f "$DRIVE/MANIFEST.sha256" ] || die "MANIFEST.sha256 is missing next to this script"
    log "verify the copy against the manifests (byte for byte, before anything is rewritten)"
    verify_repo "$DRIVE/repo"
    verify_state
    log "unpack in place: $DEST becomes the repo root; handoff files -> $HANDOFF"
    mkdir -p "$HANDOFF"
    for f in claude-state secure README-FIRST.md MANIFEST.sha256 CLAUDE-STATE.sha256 VERIFY-REPORT.txt STATE-REFRESHED.txt refresh-claude-state.cmd refresh-claude-state.ps1; do
      if [ -e "$DRIVE/$f" ]; then rm -rf "${HANDOFF:?}/$f"; mv "$DRIVE/$f" "$HANDOFF/"; fi
    done
    cp "$SCRIPT_PATH" "$HANDOFF/setup-ubuntu.sh"
    find "$DRIVE/repo" -mindepth 1 -maxdepth 1 -exec mv -t "$DRIVE" {} +
    rmdir "$DRIVE/repo"
    rm -f "$SCRIPT_PATH" || true   # bash keeps the running copy open; re-run from $HANDOFF
    DRIVE="$HANDOFF"
    echo "this script now lives at $HANDOFF/setup-ubuntu.sh"
  else
    [ -d "$DRIVE/repo/.git" ] || die "no repo/.git under $DRIVE"
    log "copy repo/ -> $DEST"
    rsync -rlt --info=progress2 --no-perms --no-owner --no-group --chmod=D755,F644 "$DRIVE/repo/" "$DEST/"
    log "verify the copy against the manifests (byte for byte, before anything is rewritten)"
    verify_repo "$DEST"
    verify_state
  fi

  cd "$DEST"
  log "normalize modes (NTFS copies arrive 0777) and fix the Windows git config"
  find . -path ./.git -prune -o -type d -exec chmod 755 {} + -o -type f -exec chmod 644 {} +
  if [ -f .dev.vars ]; then chmod 600 .dev.vars; fi
  git config core.ignorecase false
  git config --unset core.symlinks 2>/dev/null || true
  git config core.autocrlf false
  git config core.filemode true
  git config user.email "$NOREPLY"
  if [ -z "$(git ls-files)" ] && git rev-parse -q --verify HEAD >/dev/null; then
    echo "the index is empty (an earlier line-ending rewrite was interrupted); restoring it from HEAD"
    rm -f .git/index.lock; git reset --hard -q
  fi
  git fsck --no-dangling >/dev/null || die "git fsck failed on the copied repo: re-copy it from the drive"
  echo "fsck ok"
  if [ -n "$(git status --porcelain)" ]; then
    git status --short
    die "working tree is not clean after the copy. Nothing uncommitted exists in this copy, so if the list above is only mode or line-ending noise run: git reset --hard   and then re-run --phase repo"
  fi
  log "rewrite the CRLF working files as LF (the index is LF already; .gitattributes pins it)"
  if ! ( git rm --cached -r -q . && git reset --hard -q ); then
    git reset --hard -q || true
    die "the line-ending rewrite did not complete; the index was restored from HEAD, re-run --phase repo"
  fi
  crlf="$(git ls-files --eol | grep -c 'w/crlf' || true)"
  [ "$crlf" = 0 ] || die "$crlf files are still CRLF"
  [ -z "$(git status --porcelain)" ] || die "tree is dirty after the line-ending rewrite"
  echo "clean tree, 0 CRLF files, origin: $(git remote get-url origin)"
  fi
fi

# ---------------------------------------------------------------- secrets
if want secrets; then
  log "secrets -> ~/secure, .dev.vars, eas key symlink, wrangler, ssh, git identity"
  [ -d "$DRIVE/secure" ] || die "no secure/ under $DRIVE (after an in-place unpack it is $HANDOFF/secure)"
  if [ "$DRY" = 0 ]; then verify_state; fi
  run install -d -m 700 "$HOME/secure"
  for f in "$DRIVE"/secure/*; do
    [ -f "$f" ] || continue
    b="$(basename "$f")"
    case "$b" in wrangler-default.toml|dev.vars) continue ;; esac
    if [ ! -e "$HOME/secure/$b" ]; then run install -m 600 "$f" "$HOME/secure/$b"; fi
  done
  if [ ! -f "$DEST/.dev.vars" ] && [ -f "$DRIVE/secure/dev.vars" ]; then run install -m 600 "$DRIVE/secure/dev.vars" "$DEST/.dev.vars"; fi
  [ -f "$DEST/.dev.vars" ] && run chmod 600 "$DEST/.dev.vars"
  run ln -sfn "$HOME/secure/$ASC_KEY" "$DEST/mobile/$ASC_KEY"
  if [ "$DRY" = 0 ]; then ( cd "$DEST" && git check-ignore -q "mobile/$ASC_KEY" ) || die "mobile/$ASC_KEY is NOT gitignored; refusing to leave a key in the tree"; fi
  W="$HOME/.config/.wrangler/config"
  if [ ! -f "$W/default.toml" ] && [ -f "$DRIVE/secure/wrangler-default.toml" ]; then
    run install -d -m 700 "$W"; run install -m 600 "$DRIVE/secure/wrangler-default.toml" "$W/default.toml"
  fi
  if [ ! -f "$HOME/.ssh/id_ed25519" ] && [ -f "$DRIVE/secure/ssh/id_ed25519" ]; then
    run install -d -m 700 "$HOME/.ssh"
    run install -m 600 "$DRIVE/secure/ssh/id_ed25519" "$HOME/.ssh/id_ed25519"
    run install -m 644 "$DRIVE/secure/ssh/id_ed25519.pub" "$HOME/.ssh/id_ed25519.pub"
    if [ -f "$DRIVE/secure/ssh/known_hosts" ] && [ ! -f "$HOME/.ssh/known_hosts" ]; then run install -m 644 "$DRIVE/secure/ssh/known_hosts" "$HOME/.ssh/known_hosts"; fi
  fi
  # Fresh global identity. The Windows ~/.gitconfig is deliberately NOT carried over
  # (git-lfs filters marked required, Windows-only editor and credential helpers).
  git config --global user.name  >/dev/null 2>&1 || run git config --global user.name  "Johnathan Villalona"
  git config --global user.email >/dev/null 2>&1 || run git config --global user.email "johnathanv16@gmail.com"
  run git config --global init.defaultBranch main
  run git config --global pull.rebase false
  if [ -d "$HOME/secure" ]; then echo "keys in ~/secure:"; ls -l "$HOME/secure"; fi
fi

# ---------------------------------------------------------------- claude
if want claude; then
  log "claude state (transcript, memory, settings, skills, plan)"
  [ -d "$DRIVE/claude-state" ] || die "no claude-state/ under $DRIVE (after an in-place unpack it is $HANDOFF/claude-state)"
  if [ "$DRY" = 0 ]; then verify_state; fi
  KEY="${PROJECT_KEY:-$(printf '%s' "$DEST" | sed 's/[^A-Za-z0-9]/-/g')}"
  P="$HOME/.claude/projects/$KEY"
  echo "project key: $KEY"
  run mkdir -p "$P" "$HOME/.claude/plans" "$HOME/.claude/skills" "$HOME/.agents/skills"
  sync_in "$DRIVE/claude-state/project/" "$P/"
  if [ ! -f "$HOME/.claude/settings.json" ]; then
    run install -m 600 "$DRIVE/claude-state/settings.json" "$HOME/.claude/settings.json"
  elif ! diff -q "$DRIVE/claude-state/settings.json" "$HOME/.claude/settings.json" >/dev/null; then
    echo "~/.claude/settings.json already exists and differs from the bundled one; merge by hand:"; diff "$DRIVE/claude-state/settings.json" "$HOME/.claude/settings.json" || true
  fi
  if [ -d "$DRIVE/claude-state/plans" ]; then sync_in "$DRIVE/claude-state/plans/" "$HOME/.claude/plans/"; fi
  sync_in "$DRIVE/claude-state/skills/" "$HOME/.claude/skills/"
  sync_in "$DRIVE/claude-state/agents-skills/" "$HOME/.agents/skills/"
  if [ ! -f "$HOME/.agents/.skill-lock.json" ] && [ -f "$DRIVE/claude-state/skill-lock.json" ]; then run cp "$DRIVE/claude-state/skill-lock.json" "$HOME/.agents/.skill-lock.json"; fi
  for d in "$HOME"/.agents/skills/*/; do
    [ -d "$d" ] || continue
    n="$(basename "$d")"
    if [ ! -e "$HOME/.claude/skills/$n" ]; then run ln -s "${d%/}" "$HOME/.claude/skills/$n"; fi
  done
  if [ ! -f "$DEST/.claude/settings.local.json" ]; then
    run mkdir -p "$DEST/.claude"
    if [ "$DRY" = 0 ]; then cat > "$DEST/.claude/settings.local.json" <<'JSON'
{
  "permissions": {
    "allow": [
      "Bash(node tools/validate.js)",
      "Bash(gh auth *)"
    ]
  },
  "enabledMcpjsonServers": [
    "shadcn"
  ],
  "enableAllProjectMcpServers": true
}
JSON
    fi
  fi
  if need claude; then
    ( cd "$DEST" && claude mcp get agentopus >/dev/null 2>&1 ) || run claude mcp add -s user -t http agentopus https://api.opus.pro/api/agent-mcp
  else
    echo "claude not on PATH yet: after installing it run   claude mcp add -s user -t http agentopus https://api.opus.pro/api/agent-mcp"
  fi
  if [ -d "$P" ]; then
    echo "restored into $P:"; ls "$P"
    T="$P/$SESSION_ID.jsonl"
    if [ -f "$T" ]; then echo "transcript: $(wc -c < "$T") bytes, last modified $(date -r "$T" '+%F %T')"; fi
  fi
  if [ -f "$DRIVE/STATE-REFRESHED.txt" ]; then echo "last Windows refresh: $(cat "$DRIVE/STATE-REFRESHED.txt")"
  else echo "note: no STATE-REFRESHED.txt, so this transcript is the snapshot taken while the Windows session was still running"; fi
  echo "If Claude's first launch creates a DIFFERENT dir under ~/.claude/projects (ls -dt ~/.claude/projects/*/ | head -1), re-run:"
  echo "  bash $HANDOFF/setup-ubuntu.sh --phase claude --project-key <that directory's basename>"
fi

# ---------------------------------------------------------------- deps
if want deps; then
  cd "$DEST"
  log "npm ci (root)";   run npm ci
  log "npm ci (mobile)"; ( cd mobile && run npm ci )
  log "npm test";        run npm test
  log "npm run build";   run npm run build
  echo "Playwright/chrome-devtools MCP browsers (optional, needs sudo once):"
  echo "  sudo npx playwright install-deps chromium && npx playwright install chromium"
fi

# ---------------------------------------------------------------- verify
if want verify; then
  cd "$DEST"
  log "state"
  git status --short; git remote -v; echo "node $(node -v), npm $(npm -v)"
  KEY="${PROJECT_KEY:-$(printf '%s' "$DEST" | sed 's/[^A-Za-z0-9]/-/g')}"
  if [ -d "$HOME/.claude/projects/$KEY" ]; then ls "$HOME/.claude/projects/$KEY"; fi
  cat <<EOF

NEXT, interactive and in this order:
  gh auth login && gh auth setup-git && (cd $DEST && git pull)
  npx wrangler whoami        # the copied token is usually expired by now; if so: npx wrangler login
  eas login                  # Expo owner: sorannex
  cd $DEST && claude         # log in, accept the trust prompt, then:
      /resume                # pick the 2026-09-05 session (or: claude --resume $SESSION_ID)
      /memory  /mcp          # 6 memory files; shadcn, playwright, chrome-devtools, agentopus
      /plugin install stripe@claude-plugins-official
  optional local D1:  npx wrangler d1 execute comptia-trainer --local --file=worker/schema.sql
  when ~/secure is confirmed:  rm -rf "<drive>/cert900/secure"   (and $HANDOFF/secure)
EOF
fi
