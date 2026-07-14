import { describe, it, expect } from "vitest"
import { mergeCloudLocal, type CloudProgress } from "./sync"
import type { ExamProgress, ProgressAll } from "./progress"

const prog = (attempts: number): ExamProgress => ({
  topics: { t: { c: attempts, t: attempts } },
  exams: [],
  seen: {},
})

describe("mergeCloudLocal", () => {
  it("uploads local-only exams", () => {
    const local: ProgressAll = { a: prog(5) }
    const { merged, toUpload } = mergeCloudLocal(local, { a: 100 }, {})
    expect(toUpload).toEqual(["a"])
    expect(merged.a.topics.t.t).toBe(5)
  })

  it("adopts cloud-only exams", () => {
    const cloud: CloudProgress = { b: { data: prog(7), updatedAt: 500 } }
    const { merged, mergedUpdatedAt, toUpload } = mergeCloudLocal({}, {}, cloud)
    expect(toUpload).toEqual([])
    expect(merged.b.topics.t.t).toBe(7)
    expect(mergedUpdatedAt.b).toBe(500)
  })

  it("newer cloud wins over older local", () => {
    const local: ProgressAll = { a: prog(3) }
    const cloud: CloudProgress = { a: { data: prog(9), updatedAt: 2000 } }
    const { merged, toUpload } = mergeCloudLocal(local, { a: 1000 }, cloud)
    expect(merged.a.topics.t.t).toBe(9)
    expect(toUpload).toEqual([])
  })

  it("newer local wins over older cloud and uploads", () => {
    const local: ProgressAll = { a: prog(3) }
    const cloud: CloudProgress = { a: { data: prog(9), updatedAt: 1000 } }
    const { merged, toUpload } = mergeCloudLocal(local, { a: 2000 }, cloud)
    expect(merged.a.topics.t.t).toBe(3)
    expect(toUpload).toEqual(["a"])
  })

  it("fresh browser with no local timestamp defers to cloud", () => {
    const local: ProgressAll = { a: prog(3) }
    const cloud: CloudProgress = { a: { data: prog(9), updatedAt: 1 } }
    const { merged } = mergeCloudLocal(local, {}, cloud)
    expect(merged.a.topics.t.t).toBe(9)
  })
})
