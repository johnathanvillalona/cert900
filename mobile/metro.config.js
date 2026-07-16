// Metro config. The "@" alias maps to mobile/vendor, which holds the shared web
// logic copied from ../src by scripts/sync-shared.js (run as a prebuild step).
// Vendor lives under the project root so Metro can watch and hash it — importing
// ../src directly fails because Metro's Windows crawler can't hash a sibling
// watchFolder under this repo's parenthesized, spaced path.
const { getDefaultConfig } = require("expo/metro-config")
const path = require("path")
const fs = require("fs")

const projectRoot = __dirname
const vendor = path.join(projectRoot, "vendor")

const config = getDefaultConfig(projectRoot)

// Resolve "@/x" (and the shared files' own "@/data/types" imports) to vendor/x.
// fs-based rather than handing an absolute path to Metro's resolver, which the
// space/parentheses in the project path otherwise trip up.
const SOURCE_EXTS = ["ts", "tsx", "js", "jsx", "json"]
function resolveAlias(sub) {
  const base = path.join(vendor, sub)
  for (const e of SOURCE_EXTS) {
    const file = `${base}.${e}`
    if (fs.existsSync(file)) return file
  }
  for (const e of SOURCE_EXTS) {
    const idx = path.join(base, `index.${e}`)
    if (fs.existsSync(idx)) return idx
  }
  return null
}

const defaultResolveRequest = config.resolver.resolveRequest
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === "@" || moduleName.startsWith("@/")) {
    const filePath = resolveAlias(moduleName === "@" ? "" : moduleName.slice(2))
    if (filePath) return { type: "sourceFile", filePath }
  }
  return (defaultResolveRequest ?? context.resolveRequest)(context, moduleName, platform)
}

module.exports = config
