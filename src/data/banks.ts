import type { ExamDef } from "./types"

/**
 * On-demand loader for the heavy half of an exam (its questions and PBQs).
 *
 * The banks total ~846KB of JSON. Statically importing them put all seven in
 * the entry chunk, so every visitor downloaded all of them to use at most one.
 * A static map of dynamic importers lets Vite emit one chunk per exam and fetch
 * only the one that was picked. The map must stay literal — a computed
 * `import(\`./${id}\`)` would defeat the bundler's static analysis.
 *
 * Note this is the WEB path only. `./index.ts` keeps the eager registry for
 * Node consumers (Vitest, tools/prerender.tsx) and for the mobile app, where
 * Metro bundles everything anyway and an offline app wants it all present.
 */
const LOADERS: Record<string, () => Promise<{ exam: ExamDef }>> = {
  "220-1201": () => import("./220-1201"),
  "220-1202": () => import("./220-1202"),
  "n10-009": () => import("./n10-009"),
  "sy0-701": () => import("./sy0-701"),
  "ccna-200-301": () => import("./ccna-200-301"),
  "aif-c01": () => import("./aif-c01"),
  "clf-c02": () => import("./clf-c02"),
  "az-900": () => import("./az-900"),
  "sc-900": () => import("./sc-900"),
}

const cache = new Map<string, ExamDef>()
const inflight = new Map<string, Promise<ExamDef>>()

/** Already-resolved bank, if this exam has been loaded before. */
export function peekBank(id: string): ExamDef | undefined {
  return cache.get(id)
}

/** Loads (and caches) one exam's questions and PBQs. */
export function loadBank(id: string): Promise<ExamDef> {
  const hit = cache.get(id)
  if (hit) return Promise.resolve(hit)
  const pending = inflight.get(id)
  if (pending) return pending
  const loader = LOADERS[id]
  if (!loader) return Promise.reject(new Error(`unknown exam: ${id}`))
  const p = loader()
    .then((m) => {
      cache.set(id, m.exam)
      inflight.delete(id)
      return m.exam
    })
    .catch((err) => {
      // Don't poison the cache: a failed load (offline, deploy mid-session)
      // must be retryable on the next attempt.
      inflight.delete(id)
      throw err
    })
  inflight.set(id, p)
  return p
}
