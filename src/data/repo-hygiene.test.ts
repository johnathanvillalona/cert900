import { execFileSync } from "node:child_process"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const ROOT = resolve(import.meta.dirname, "../..")

/**
 * The repository is the owner's work. Names of AI coding tools must not appear
 * in tracked file contents or paths. The names are assembled at runtime so this
 * file does not contain them either.
 */
const NAMES = [["cla", "ude"], ["co", "dex"]].map(parts => parts.join(""))
const PATTERN = new RegExp(`\\b(?:${NAMES.join("|")})`, "i")

function trackedFiles(): string[] {
  try {
    return execFileSync("git", ["ls-files", "-z"], { cwd: ROOT, encoding: "utf8" }).split("\0").filter(Boolean)
  } catch {
    return []
  }
}

describe("repository hygiene", () => {
  const files = trackedFiles()

  it("finds the tracked file list", () => {
    expect(files.length).toBeGreaterThan(100)
  })

  it("has no AI tool names in tracked paths", () => {
    expect(files.filter(file => PATTERN.test(file))).toEqual([])
  })

  it("has no AI tool names in tracked text", () => {
    const offenders: string[] = []
    for (const file of files) {
      let text: string
      try { text = readFileSync(resolve(ROOT, file), "utf8") } catch { continue }
      if (text.includes("\0")) continue
      text.split("\n").forEach((line, i) => { if (PATTERN.test(line)) offenders.push(`${file}:${i + 1}`) })
    }
    expect(offenders).toEqual([])
  })
})
