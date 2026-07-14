import type { ExamProgress, ProgressAll } from "./progress"

export interface CloudProgress {
  [examId: string]: { data: ExamProgress; updatedAt: number }
}

export type UpdatedAtMap = Record<string, number>
export const UPDATED_AT_KEY = "comptia-trainer-updated-at"

export async function fetchCloud(): Promise<CloudProgress | null> {
  const res = await fetch("/api/progress", { credentials: "include" })
  if (res.status === 401) return null
  if (!res.ok) throw new Error(`progress fetch failed: ${res.status}`)
  return (await res.json()) as CloudProgress
}

export async function pushExam(examId: string, data: ExamProgress, updatedAt: number): Promise<void> {
  const res = await fetch("/api/progress", {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ examId, data, updatedAt }),
  })
  if (!res.ok) throw new Error(`progress push failed: ${res.status}`)
}

/**
 * Merge rule (per plan): for each exam, if cloud is missing it, local wins
 * (upload). If local has no timestamp for it (fresh browser), cloud wins.
 * Otherwise the newer updatedAt wins.
 * Returns the merged state plus which exams need uploading.
 */
export function mergeCloudLocal(
  local: ProgressAll,
  localUpdatedAt: UpdatedAtMap,
  cloud: CloudProgress,
): { merged: ProgressAll; mergedUpdatedAt: UpdatedAtMap; toUpload: string[] } {
  const merged: ProgressAll = { ...local }
  const mergedUpdatedAt: UpdatedAtMap = { ...localUpdatedAt }
  const toUpload: string[] = []

  const examIds = new Set([...Object.keys(local), ...Object.keys(cloud)])
  for (const id of examIds) {
    const l = local[id]
    const c = cloud[id]
    if (l && !c) {
      toUpload.push(id)
      continue
    }
    if (!l && c) {
      merged[id] = c.data
      mergedUpdatedAt[id] = c.updatedAt
      continue
    }
    if (l && c) {
      const lTime = localUpdatedAt[id] ?? 0
      if (c.updatedAt >= lTime) {
        merged[id] = c.data
        mergedUpdatedAt[id] = c.updatedAt
      } else {
        toUpload.push(id)
      }
    }
  }
  return { merged, mergedUpdatedAt, toUpload }
}
