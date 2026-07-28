import { describe, it, expect } from "vitest"
import { composePost } from "./social"

const LINK = "https://cert900.com/?utm_source=x&utm_medium=social&utm_campaign=qotd"
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
      23,
      280,
    )
    expect(ccna).toContain("Free Cisco CCNA question of the day (200-301)")
    expect(ccna).toContain("#CCNA")
    expect(ccna).not.toContain("CompTIA")

    const az = composePost(
      entry({ code: "AZ-900", cert: "Microsoft Certified", vendor: "azure" }),
      LINK,
      23,
      280,
    )
    expect(az).toContain("#Azure")
    expect(az).toContain("#AZ900")
    expect(az).not.toContain("CompTIA")

    const aws = composePost(entry({ code: "SAA-C03", cert: "AWS Certified", vendor: "aws" }), LINK, 23, 280)
    expect(aws).toContain("#AWS")
    expect(aws).not.toContain("CompTIA")
  })

  it("still tags the CompTIA exams specifically", () => {
    expect(composePost(entry(), LINK, 23, 280)).toContain("#CompTIAAPlus")
    expect(composePost(entry({ code: "N10-009", cert: "CompTIA Network+" }), LINK, 23, 280)).toContain("#NetworkPlus")
    expect(composePost(entry({ code: "SY0-701", cert: "CompTIA Security+" }), LINK, 23, 280)).toContain("#SecurityPlus")
  })

  it("degrades to fit the limit, keeping the link and tags", () => {
    const long = entry({ stem: "x".repeat(400) })
    for (const limit of [280, 300]) {
      const post = composePost(long, LINK, 23, limit)
      // The link counts as `linkLen` chars on X regardless of its real length.
      expect(post.length - LINK.length + 23).toBeLessThanOrEqual(limit)
      expect(post).toContain(LINK)
      expect(post).toContain("#CompTIA")
    }
  })

  it("keeps a full post intact when it fits", () => {
    const post = composePost(entry(), LINK, 23, 280)
    expect(post).toContain("A) RJ45")
    expect(post).toContain("D) SC")
  })
})
