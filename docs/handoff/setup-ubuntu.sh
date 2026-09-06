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
#   1. Drag the whole cert900 folder to ~/cert900, open `claude` there (the bundle's
#      CLAUDE.md makes it run this script), or run:  bash ~/cert900/setup-ubuntu.sh
#      It unpacks IN PLACE: ~/cert900 becomes the repo root, state/secrets move to their
#      homes, and the handoff files (this script included) move to ~/.cert900-handoff/.
#   2. Run it straight from the drive:  bash "/media/$USER/John Villa/cert900/setup-ubuntu.sh"
#      It copies repo/ to --dest (default ~/cert900) and leaves the drive untouched.
# Non-interactive and idempotent. Re-run one phase with --phase. Nothing inside needs sudo:
# Node 24 (nvm), GitHub CLI, Claude Code and eas-cli are installed into $HOME when missing;
# only git/curl/rsync/python3 are left to apt (it prints the line and stops if one is absent).
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
put()  { run cp "$1" "$2"; run chmod "$3" "$2"; }      # put SRC DST MODE
mkd()  { run mkdir -p "$1"; run chmod "$2" "$1"; }     # mkd DIR MODE

# Mode: in place (the bundle already sits where the repo should live) or copy. After an
# in-place unpack the handoff dir remembers the repo path (dest.txt) so re-runs need no --dest.
if [ -z "$DEST" ] && [ -f "$SCRIPT_DIR/dest.txt" ]; then DEST="$(head -1 "$SCRIPT_DIR/dest.txt")"; fi
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
  log "prerequisites (everything below installs without sudo)"
  missing=()
  for c in git curl rsync python3; do need "$c" || missing+=("$c"); done
  if [ ${#missing[@]} -gt 0 ]; then
    printf 'Missing system packages: %s\nRun this once, then run the setup again:\n\n  sudo apt update && sudo apt install -y git curl rsync python3\n\n' "${missing[*]}"
    exit 1
  fi
  mkdir -p "$HOME/.local/bin"
  case ":$PATH:" in *":$HOME/.local/bin:"*) ;; *) export PATH="$HOME/.local/bin:$PATH" ;; esac
  node_ok=0
  if need node && [ "$(node -p 'process.versions.node.split(".")[0]')" -ge 22 ]; then node_ok=1; fi
  if [ "$DRY" = 1 ]; then
    echo "[dry-run] prereqs: node>=22 $([ "$node_ok" = 1 ] && echo present || echo 'would install via nvm'), gh $(need gh && echo present || echo 'would install to ~/.local/bin'), claude $(need claude && echo present || echo 'would install'), eas $(need eas && echo present || echo 'would install')"
  else
    if [ "$node_ok" = 0 ]; then
      export NVM_DIR="$HOME/.nvm"
      if [ ! -s "$NVM_DIR/nvm.sh" ]; then
        log "installing nvm (Node version manager, into ~/.nvm)"
        curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash >/dev/null
      fi
      log "installing Node 24 via nvm (Ubuntu's apt nodejs is 18, too old for Vite 7 / Wrangler 4 / Expo)"
      set +eu; . "$NVM_DIR/nvm.sh"; nvm install 24 >/dev/null 2>&1; nvm alias default 24 >/dev/null 2>&1; nvm use 24 >/dev/null 2>&1; set -eu
      need node || die "node is still missing after the nvm install; open a new terminal and run the setup again"
    fi
    if ! need gh; then
      log "installing GitHub CLI into ~/.local/bin"
      arch="$(uname -m)"; case "$arch" in x86_64) arch=amd64 ;; aarch64|arm64) arch=arm64 ;; esac
      ver="$(curl -fsSL https://api.github.com/repos/cli/cli/releases/latest | sed -n 's/.*"tag_name": *"v\([^"]*\)".*/\1/p' | head -1)"
      [ -n "$ver" ] || die "could not determine the latest GitHub CLI release (network?)"
      tmp="$(mktemp -d)"
      curl -fsSL "https://github.com/cli/cli/releases/download/v${ver}/gh_${ver}_linux_${arch}.tar.gz" | tar -xz -C "$tmp"
      cp "$tmp/gh_${ver}_linux_${arch}/bin/gh" "$HOME/.local/bin/gh"; chmod 755 "$HOME/.local/bin/gh"; rm -rf "$tmp"
    fi
    if ! need claude; then
      log "installing Claude Code"
      curl -fsSL https://claude.ai/install.sh | bash >/dev/null 2>&1 || echo "Claude Code install failed; run:  curl -fsSL https://claude.ai/install.sh | bash"
    fi
    if ! need eas; then
      log "installing eas-cli"
      npm i -g eas-cli >/dev/null 2>&1 || echo "eas-cli install failed (a system-wide npm needs: sudo npm i -g eas-cli)"
    fi
  fi
  echo "git $(git --version | cut -d' ' -f3), node $(node -v 2>/dev/null || echo missing), npm $(npm -v 2>/dev/null || echo missing), gh $(gh --version 2>/dev/null | head -1 | cut -d' ' -f3 || echo missing), claude $(need claude && echo yes || echo no), eas $(need eas && echo yes || echo no)"
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
    for f in claude-state secure CLAUDE.md README-FIRST.md MANIFEST.sha256 CLAUDE-STATE.sha256 VERIFY-REPORT.txt STATE-REFRESHED.txt refresh-claude-state.cmd refresh-claude-state.ps1; do
      if [ -e "$DRIVE/$f" ]; then rm -rf "${HANDOFF:?}/$f"; mv "$DRIVE/$f" "$HANDOFF/"; fi
    done
    cp "$SCRIPT_PATH" "$HANDOFF/setup-ubuntu.sh"
    find "$DRIVE/repo" -mindepth 1 -maxdepth 1 -exec mv -t "$DRIVE" {} +
    rmdir "$DRIVE/repo"
    rm -f "$SCRIPT_PATH" || true   # bash keeps the running copy open; re-run from $HANDOFF
    DRIVE="$HANDOFF"
    printf '%s\n' "$DEST" > "$HANDOFF/dest.txt"
    echo "this script now lives at $HANDOFF/setup-ubuntu.sh (it remembers the repo path in dest.txt)"
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
  mkd "$HOME/secure" 700
  for f in "$DRIVE"/secure/*; do
    [ -f "$f" ] || continue
    b="$(basename "$f")"
    case "$b" in wrangler-default.toml|dev.vars) continue ;; esac
    if [ ! -e "$HOME/secure/$b" ]; then put "$f" "$HOME/secure/$b" 600; fi
  done
  if [ ! -f "$DEST/.dev.vars" ] && [ -f "$DRIVE/secure/dev.vars" ]; then put "$DRIVE/secure/dev.vars" "$DEST/.dev.vars" 600; fi
  if [ -f "$DEST/.dev.vars" ]; then run chmod 600 "$DEST/.dev.vars"; fi
  run ln -sfn "$HOME/secure/$ASC_KEY" "$DEST/mobile/$ASC_KEY"
  if [ "$DRY" = 0 ]; then ( cd "$DEST" && git check-ignore -q "mobile/$ASC_KEY" ) || die "mobile/$ASC_KEY is NOT gitignored; refusing to leave a key in the tree"; fi
  W="$HOME/.config/.wrangler/config"
  if [ ! -f "$W/default.toml" ] && [ -f "$DRIVE/secure/wrangler-default.toml" ]; then
    mkd "$W" 700; put "$DRIVE/secure/wrangler-default.toml" "$W/default.toml" 600
  fi
  if [ ! -f "$HOME/.ssh/id_ed25519" ] && [ -f "$DRIVE/secure/ssh/id_ed25519" ]; then
    mkd "$HOME/.ssh" 700
    put "$DRIVE/secure/ssh/id_ed25519" "$HOME/.ssh/id_ed25519" 600
    put "$DRIVE/secure/ssh/id_ed25519.pub" "$HOME/.ssh/id_ed25519.pub" 644
    if [ -f "$DRIVE/secure/ssh/known_hosts" ] && [ ! -f "$HOME/.ssh/known_hosts" ]; then put "$DRIVE/secure/ssh/known_hosts" "$HOME/.ssh/known_hosts" 644; fi
  fi
  # GitHub without a browser: git over SSH when the registered key authenticates (else https
  # through gh's credential helper), and gh itself with the laptop's token.
  if [ "$DRY" = 0 ]; then
    ssh_ok=0
    if [ -f "$HOME/.ssh/id_ed25519" ]; then
      out="$(ssh -o BatchMode=yes -o StrictHostKeyChecking=accept-new -o ConnectTimeout=15 -T git@github.com 2>&1 || true)"
      case "$out" in *"successfully authenticated"*) ssh_ok=1 ;; esac
    fi
    if [ "$ssh_ok" = 1 ]; then
      ( cd "$DEST" && git remote set-url origin "git@github.com:johnathanvillalona/cert900.git" )
      echo "git: origin uses SSH (the key in ~/.ssh authenticates to GitHub)"
    else
      echo "git: SSH key not accepted by GitHub; origin stays https (gh's credential helper is set up below)"
    fi
    if need gh && [ -f "$DRIVE/secure/gh-token.txt" ] && ! gh auth status >/dev/null 2>&1; then
      if gh auth login --with-token < "$DRIVE/secure/gh-token.txt" >/dev/null 2>&1; then echo "gh: logged in with the laptop's token"; else echo "gh: token login failed; run 'gh auth login' when you need the GitHub API"; fi
    fi
    if need gh && gh auth status >/dev/null 2>&1; then
      if [ "$ssh_ok" = 1 ]; then gh config set git_protocol ssh >/dev/null 2>&1 || true; else gh auth setup-git >/dev/null 2>&1 || true; fi
    fi
  fi
  if [ -f "$DRIVE/secure/expo-state.json" ] && [ ! -f "$HOME/.expo/state.json" ]; then mkd "$HOME/.expo" 700; put "$DRIVE/secure/expo-state.json" "$HOME/.expo/state.json" 600; fi
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
    put "$DRIVE/claude-state/settings.json" "$HOME/.claude/settings.json" 600
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
  if [ "$DRY" = 1 ]; then
    echo "[dry-run] deps: npm ci (root and mobile), npm test, npm run build in $DEST"
  else
    cd "$DEST"
    log "npm ci (root)";   npm ci
    log "npm ci (mobile)"; ( cd mobile && npm ci )
    log "npm test";        npm test
    log "npm run build";   npm run build
  fi
  echo "Playwright/chrome-devtools MCP browsers (optional, needs sudo once):"
  echo "  sudo npx playwright install-deps chromium && npx playwright install chromium"
fi

# ---------------------------------------------------------------- verify
if want verify; then
  log "state"
  if [ -d "$DEST/.git" ]; then ( cd "$DEST" && echo "git: $(git status --porcelain | wc -l) dirty files, origin $(git remote get-url origin)" ); else echo "$DEST is not a repository yet (run --phase repo first)"; fi
  echo "node $(node -v 2>/dev/null || echo missing), npm $(npm -v 2>/dev/null || echo missing), gh $(gh --version 2>/dev/null | head -1 | cut -d' ' -f3 || echo missing)"
  if need gh; then gh auth status 2>&1 | grep -m1 -iE 'logged in|not logged' | sed 's/^ *//' || true; fi
  if need eas && [ "$DRY" = 0 ]; then echo "eas: $(eas whoami 2>/dev/null | head -1 || true)"; fi
  if [ -d "$DEST/node_modules" ] && [ "$DRY" = 0 ]; then ( cd "$DEST" && echo "wrangler: $(timeout 90 npx wrangler whoami 2>/dev/null | grep -m1 -oE 'associated with[^.]*|not authenticated' || echo 'token expired; run npx wrangler login before the first deploy')" ); fi
  KEY="${PROJECT_KEY:-$(printf '%s' "$DEST" | sed 's/[^A-Za-z0-9]/-/g')}"
  if [ -d "$HOME/.claude/projects/$KEY" ]; then echo "claude project dir: $(ls "$HOME/.claude/projects/$KEY" | tr '\n' ' ')"; fi
  cat <<EOF

Still manual, both optional:
  browsers for the Playwright / chrome-devtools MCP servers:  sudo npx playwright install-deps chromium && npx playwright install chromium
  when everything works, delete the plain-text keys from the drive:  rm -rf "<drive>/cert900/secure" "$HANDOFF/secure"
EOF
  if [ "$PHASE" = all ] && [ "$DRY" = 0 ]; then
    log "SETUP-COMPLETE"
    echo "Exit Claude (/exit) and run 'claude' in $DEST again: the project's own CLAUDE.md and memory load, and /resume lists the 2026-09-05 session (or: claude --resume $SESSION_ID)."
  fi
fi
