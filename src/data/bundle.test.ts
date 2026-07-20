import { describe, it, expect } from "vitest"
import { readdirSync, readFileSync, statSync } from "node:fs"
import path from "node:path"

/**
 * Guards the entry-bundle split.
 *
 * `src/data/index.ts` eagerly imports all seven banks (~846KB of question
 * JSON). That is correct for Node consumers — Vitest, tools/prerender.tsx — and
 * for the mobile app, which wants every bank inlined. It is wrong for the web
 * app: one stray `import { EXAMS } from "@/data/index"` in a screen or
 * component silently drags every bank back into the entry chunk and no other
 * test notices. The entry went 1234KB -> 454KB by removing exactly these
 * imports, so this test is what keeps that win.
 *
 * If you legitimately need whole banks on the web, load them on demand with
 * `loadBank()` from `@/data/banks` instead.
 */
const SRC = path.resolve(import.meta.dirname, "..")

/** Files allowed to import the eager registry. */
const ALLOWED = new Set(["data/index.ts", "data/bundle.test.ts"])

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, out)
    else if (/\.tsx?$/.test(entry)) out.push(full)
  }
  return out
}

describe("entry bundle", () => {
  it("no web module imports the eager exam registry", () => {
    const offenders: string[] = []
    for (const file of walk(SRC)) {
      const rel = path.relative(SRC, file).replace(/\\/g, "/")
      if (ALLOWED.has(rel) || rel.endsWith(".test.ts") || rel.endsWith(".test.tsx")) continue
      const src = readFileSync(file, "utf8")
      if (/from\s+["'](@\/data\/index|\.\/index|\.\.\/data\/index)["']/.test(src)) offenders.push(rel)
    }
    expect(
      offenders,
      `these import the eager registry and would put all 7 banks back in the entry chunk:\n  ${offenders.join("\n  ")}\nUse EXAM_META from @/data/meta, or loadBank() from @/data/banks.`,
    ).toEqual([])
  })

  it("every exam in EXAM_ORDER has a dynamic loader", async () => {
    const { EXAM_ORDER } = await import("./meta")
    const banks = readFileSync(path.join(SRC, "data", "banks.ts"), "utf8")
    for (const id of EXAM_ORDER) {
      // The importer map must stay literal for the bundler to split it.
      expect(banks, `banks.ts has no loader for ${id}`).toContain(`import("./${id}")`)
    }
  })
})
