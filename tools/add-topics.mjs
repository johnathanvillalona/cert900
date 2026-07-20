// Merges new video topics into a data file. Usage:
//   node tools/add-topics.mjs tools/additions/<name>.mjs
// The module default-exports { examId, videos: { <key>: { n, u, d } } }.
//
// Topics were hand-added before this existed, which is why the banks drifted:
// a topic is the unit of video linkage, domain assignment, and the mastery
// map, so adding them by hand is exactly where a typo becomes a 404 link or a
// question filed under the wrong domain. Run tools/linkcheck.js afterwards --
// this validates shape, not that the URL resolves.
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL, fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const addFile = process.argv[2]
if (!addFile) { console.error("usage: node tools/add-topics.mjs <additions.mjs>"); process.exit(1) }

const { default: add } = await import(pathToFileURL(path.resolve(addFile)).href)
const dataPath = path.join(root, "src", "data", `${add.examId}.ts`)
const src = fs.readFileSync(dataPath, "utf8")
const marker = "export const exam: ExamDef = "
const head = src.slice(0, src.indexOf(marker) + marker.length)
const exam = JSON.parse(src.slice(src.indexOf(marker) + marker.length))

// Same contract as src/data/data.test.ts VIDEO_URL_RULES. Duplicated rather
// than imported because that file is TypeScript and this runs as plain node.
const URL_RULES = {
  comptia: /^https:\/\/www\.professormesser\.com\/.+\/$/,
  aws: /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}(&t=\d+s?)?$/,
  azure: /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}(&t=\d+s?)?$/,
}

const errors = []
const seenUrl = new Map(Object.entries(exam.videos).map(([k, v]) => [v.u, k]))
let added = 0

for (const [key, v] of Object.entries(add.videos ?? {})) {
  if (exam.videos[key]) { errors.push(`topic "${key}" already exists`); continue }
  if (!/^[a-z0-9-]+$/.test(key)) { errors.push(`topic key "${key}" must be lowercase kebab-case`); continue }
  if (!v?.n?.length) { errors.push(`topic "${key}" has no title`); continue }
  if (!URL_RULES[exam.vendor].test(v.u ?? "")) { errors.push(`topic "${key}" bad url for ${exam.vendor}: ${v.u}`); continue }
  if (!exam.domains[v.d]) { errors.push(`topic "${key}" has unknown domain ${v.d}`); continue }
  // A shared URL is legitimate for chapter-anchored banks (several AWS topics
  // point at one chapter), so warn rather than fail -- but never for CompTIA,
  // where every topic has its own video and a repeat means a copy-paste slip.
  const dup = seenUrl.get(v.u)
  if (dup && exam.vendor === "comptia") { errors.push(`topic "${key}" reuses the url of "${dup}"`); continue }
  if (dup) console.log(`  note: "${key}" shares a chapter anchor with "${dup}"`)
  seenUrl.set(v.u, key)
  exam.videos[key] = { n: v.n, u: v.u, d: v.d }
  added++
}

if (errors.length) { console.error("ERRORS:\n  " + errors.join("\n  ")); process.exit(1) }

// Keep topics grouped by domain, then alphabetical: the file is read by humans
// and diffed on every content batch.
const ordered = {}
for (const key of Object.keys(exam.videos).sort((a, b) =>
  exam.videos[a].d - exam.videos[b].d || a.localeCompare(b))) ordered[key] = exam.videos[key]
exam.videos = ordered

fs.writeFileSync(dataPath, head + JSON.stringify(exam, null, 1) + "\n")
const dom = {}
for (const v of Object.values(exam.videos)) dom[v.d] = (dom[v.d] || 0) + 1
console.log(`${add.examId}: +${added} topics, now ${Object.keys(exam.videos).length} ${JSON.stringify(dom)}`)
