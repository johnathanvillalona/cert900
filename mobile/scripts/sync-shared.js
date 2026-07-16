// Copies the shared web logic (../../src/lib + ../../src/data) into mobile/vendor
// so Metro can bundle it. The app imports these via the "@" alias, which points
// at vendor (see metro.config.js + tsconfig paths).
//
// Why copy instead of importing ../src directly: Metro's Windows file crawler
// cannot hash files in a sibling watchFolder when the project path contains a
// space and parentheses (this repo lives under ".../(CLAUDE) Comptia practice
// exam"). Vendoring keeps the files under the project root, which Metro handles.
// ../src stays the single source of truth; this runs as a prebuild step.
const fs = require("fs")
const path = require("path")

const webSrc = path.resolve(__dirname, "..", "..", "src")
const vendor = path.resolve(__dirname, "..", "vendor")

const DIRS = ["lib", "data"]

for (const dir of DIRS) {
  const from = path.join(webSrc, dir)
  const to = path.join(vendor, dir)
  fs.rmSync(to, { recursive: true, force: true })
  fs.cpSync(from, to, { recursive: true })
}

fs.writeFileSync(
  path.join(vendor, "README.md"),
  "# Generated — do not edit\n\nCopied from ../src by scripts/sync-shared.js. Edit the source in ../src.\n",
)

console.log(`synced ${DIRS.join(", ")} from ../src into mobile/vendor`)
