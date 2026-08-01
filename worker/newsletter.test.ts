import { describe, it, expect } from "vitest"
import { composeNewsletter, isValidEmail } from "./newsletter"

const q = {
  code: "SY0-701",
  cert: "Security+",
  vendor: "comptia",
  stem: "A technician needs to verify a downloaded file has not been altered. Which tool fits?",
  options: ["sha256sum", "netstat", "chmod", "traceroute"],
}

describe("email validation", () => {
  it("accepts ordinary addresses", () => {
    for (const e of ["a@b.co", "first.last+tag@example.com", "x_y@sub.domain.org"]) {
      expect(isValidEmail(e), e).toBe(true)
    }
  })

  /** Header-injection characters and list separators must never reach Resend. */
  it("rejects malformed input and header-injection attempts", () => {
    for (const e of [
      "",
      "nope",
      "a@b",
      "a@b.c",
      "a b@example.com",
      "a@example.com, b@example.com",
      "a@example.com;b@example.com",
      "Name <a@example.com>",
      "a@example.com\nBcc: c@example.com",
      `${"a".repeat(250)}@example.com`,
      null,
      42,
    ]) {
      expect(isValidEmail(e), JSON.stringify(e)).toBe(false)
    }
  })
})

describe("daily email", () => {
  const unsub = "https://cert900.com/api/newsletter/unsubscribe?t=tok-123"
  const mail = composeNewsletter(q, unsub)

  it("carries the question, the options and a way out", () => {
    expect(mail.subject).toContain("SY0-701")
    for (const body of [mail.html, mail.text]) {
      expect(body).toContain("sha256sum")
      expect(body).toContain("D) traceroute")
      // Unsubscribe has to be in BOTH bodies: a text-only client that cannot
      // find it has "report spam" as its only remaining exit.
      expect(body).toContain(unsub)
    }
  })

  it("keeps the answer on the site, which is the point of sending it", () => {
    expect(mail.html).toContain("utm_campaign=qotd")
    expect(mail.text).toContain("utm_campaign=qotd")
  })

  /** Question text is authored content, but it still goes through an escaper. */
  it("escapes markup in the question", () => {
    const evil = composeNewsletter(
      { ...q, stem: 'Which tag is <script>alert("x")</script>?', options: ["<b>", "&", '"', "ok"] },
      unsub,
    )
    expect(evil.html).not.toContain("<script>")
    expect(evil.html).toContain("&lt;script&gt;")
    expect(evil.html).toContain("&amp;")
  })
})
