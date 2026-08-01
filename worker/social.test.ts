import { describe, it, expect } from "vitest"
import { composePost } from "./social"

// Bluesky is the only destination now (X answers 402 credits depleted), and it
// counts the raw link text rather than wrapping it to a fixed width.
const LINK = "https://cert900.com/?utm_source=bluesky&utm_medium=social&utm_campaign=qotd"
const LEN = LINK.length
const LIMIT = 300
const entry = (over: Partial<Parameters<typeof composePost>[0]> = {}) => ({
  code: "220-1201",
  cert: "CompTIA A+",
  vendor: "comptia",
  stem: "Which connector terminates a Cat 6 cable?",
  options: ["RJ45", "RJ11", "LC", "SC"],
  ...over,
})

describe("daily social post", () => {
  /**
   * Regression: the caption hardcoded "Free CompTIA question of the day" and
   * chose between #NetworkPlus and #CompTIAAPlus off the cert string, so every
   * CCNA, AWS, and Azure question in the pool went out branded as CompTIA A+.
   */
  it("captions each post with its own vendor and exam", () => {
    const ccna = composePost(
      entry({ code: "200-301", cert: "Cisco CCNA", vendor: "cisco" }),
      LINK,
      LEN,
      LIMIT,
    )
    expect(ccna).toContain("Free Cisco CCNA question of the day (200-301)")
    expect(ccna).toContain("#CCNA")
    expect(ccna).not.toContain("CompTIA")

    const az = composePost(
      entry({ code: "AZ-900", cert: "Microsoft Certified", vendor: "azure" }),
      LINK,
      LEN,
      LIMIT,
    )
    expect(az).toContain("#Azure")
    expect(az).toContain("#AZ900")
    expect(az).not.toContain("CompTIA")

    const aws = composePost(entry({ code: "SAA-C03", cert: "AWS Certified", vendor: "aws" }), LINK, LEN, LIMIT)
    expect(aws).toContain("#AWS")
    expect(aws).not.toContain("CompTIA")
  })

  it("still tags the CompTIA exams specifically", () => {
    expect(composePost(entry(), LINK, LEN, LIMIT)).toContain("#CompTIAAPlus")
    expect(composePost(entry({ code: "N10-009", cert: "CompTIA Network+" }), LINK, LEN, LIMIT)).toContain("#NetworkPlus")
    expect(composePost(entry({ code: "SY0-701", cert: "CompTIA Security+" }), LINK, LEN, LIMIT)).toContain("#SecurityPlus")
  })

  it("degrades to fit the limit, keeping the link and tags", () => {
    const long = entry({ stem: "x".repeat(400) })
    for (const limit of [280, 300]) {
      const post = composePost(long, LINK, LEN, limit)
      // linkLen stays a parameter: a platform that wraps links to a fixed width
      // counts them differently from their real length.
      expect(post.length - LINK.length + LEN).toBeLessThanOrEqual(limit)
      expect(post).toContain(LINK)
      expect(post).toContain("#CompTIA")
    }
  })

  it("keeps a full post intact when it fits", () => {
    const post = composePost(entry(), LINK, LEN, LIMIT)
    expect(post).toContain("A) RJ45")
    expect(post).toContain("D) SC")
  })
})
