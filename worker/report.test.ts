import { describe, it, expect } from "vitest"
import { isValidReport, isAdminEmail } from "./index"
import { EXAM_IDS } from "../src/data/exam-ids"
import type { Env } from "./auth"

const ok = { examId: "sy0-701", ref: "q:1234" }

describe("report payload guard", () => {
  it("accepts what the report buttons actually send", () => {
    expect(isValidReport(ok)).toBe(true)
    expect(isValidReport({ examId: "220-1201", ref: "pbq:Match each port to its service" })).toBe(true)
    for (const id of EXAM_IDS) expect(isValidReport({ examId: id, ref: "q:1" }), id).toBe(true)
  })

  /**
   * The bug this file exists for. The credential throttle keeps its counters in
   * the reports table under exam_id '__auth', and the report rate limiter
   * excludes exactly those rows -- so before examId was validated against the
   * real exam list, anyone could POST {"examId":"__auth"} and write rows that
   * never counted against their own quota. Unbounded writes into D1.
   */
  it("rejects the '__auth' sentinel that bypasses the rate limiter", () => {
    expect(isValidReport({ examId: "__auth", ref: "q:1" })).toBe(false)
  })

  it("rejects exam ids that are merely short strings", () => {
    for (const examId of ["", "nope", "SY0-701", "sy0-701 ", "../etc", "a".repeat(32)]) {
      expect(isValidReport({ examId, ref: "q:1" }), examId).toBe(false)
    }
  })

  /** The admin triage screen renders `ref`, so it is no longer free text. */
  it("rejects refs outside the q:/pbq: shapes", () => {
    for (const ref of [
      "",
      "1234",
      "q:",
      "q:abc",
      "q:12345678",
      "pbq:",
      `pbq:${"x".repeat(161)}`,
      "pbq:line\nbreak",
      "<script>alert(1)</script>",
      "https://example.com",
    ]) {
      expect(isValidReport({ examId: "sy0-701", ref }), JSON.stringify(ref)).toBe(false)
    }
  })

  it("rejects missing and non-string fields", () => {
    expect(isValidReport({})).toBe(false)
    expect(isValidReport({ examId: "sy0-701" })).toBe(false)
    expect(isValidReport({ ref: "q:1" })).toBe(false)
    expect(isValidReport({ examId: 1, ref: 2 })).toBe(false)
    expect(isValidReport({ examId: ["sy0-701"], ref: "q:1" })).toBe(false)
  })
})

const env = (ADMIN_EMAILS?: string) => ({ ADMIN_EMAILS }) as Env

describe("admin gate", () => {
  it("admits a verified allowlisted address, case and whitespace insensitively", () => {
    const e = env(" owner@example.com , second@example.com ")
    expect(isAdminEmail(e, "owner@example.com", true)).toBe(true)
    expect(isAdminEmail(e, "OWNER@Example.com", true)).toBe(true)
    expect(isAdminEmail(e, "second@example.com", true)).toBe(true)
  })

  /**
   * The half that is easy to omit. Passwords are enabled with
   * requireEmailVerification:false, so an allowlisted address with no account
   * yet could otherwise be claimed by signing up for it.
   */
  it("refuses an allowlisted address that is not verified", () => {
    const e = env("owner@example.com")
    expect(isAdminEmail(e, "owner@example.com", false)).toBe(false)
    expect(isAdminEmail(e, "owner@example.com", undefined)).toBe(false)
    expect(isAdminEmail(e, "owner@example.com", 1)).toBe(false)
    expect(isAdminEmail(e, "owner@example.com", "true")).toBe(false)
  })

  it("refuses everyone else", () => {
    const e = env("owner@example.com")
    expect(isAdminEmail(e, "someone@example.com", true)).toBe(false)
    expect(isAdminEmail(e, "", true)).toBe(false)
    expect(isAdminEmail(e, undefined, true)).toBe(false)
    expect(isAdminEmail(e, null, true)).toBe(false)
  })

  /** A fork or a local checkout has no admins rather than an open door. */
  it("has no admins when the var is unset or empty", () => {
    expect(isAdminEmail(env(), "owner@example.com", true)).toBe(false)
    expect(isAdminEmail(env(""), "owner@example.com", true)).toBe(false)
    expect(isAdminEmail(env(" , , "), "owner@example.com", true)).toBe(false)
    // An empty address must not match an empty list entry.
    expect(isAdminEmail(env(","), "", true)).toBe(false)
  })
})
