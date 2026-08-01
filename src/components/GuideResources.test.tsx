import { describe, it, expect, vi } from "vitest"
import { renderToStaticMarkup } from "react-dom/server"
import { GUIDE_PATHS } from "@/data/routes"

/**
 * Rendered with renderToStaticMarkup exactly like tools/prerender.tsx does it,
 * so what these tests see is what ships in the static HTML.
 *
 * The AFFILIATE config is mocked FILLED because the interesting failures only
 * exist once affiliates are live: a block appearing on a page that must not
 * carry one, or a tagged link shipping without its disclosure. (The all-empty
 * default renders nothing everywhere, which the first test pins.)
 */
vi.mock("@/lib/site", async (importOriginal) => {
  const real = await importOriginal<typeof import("@/lib/site")>()
  return {
    ...real,
    AFFILIATE: {
      amazonTag: "cert900test-20",
      measureUpUrl: "https://measureup.example/aff",
      tutorialsDojoUrl: "https://tutorialsdojo.example/aff",
    },
  }
})

const { GuideResources } = await import("@/components/GuideResources")
const html = (path: string) => renderToStaticMarkup(<GuideResources path={path} />)

describe("guide resources block", () => {
  it("renders nothing anywhere while the config is empty", async () => {
    // Re-import with the real (empty) config via a fresh module graph.
    vi.resetModules()
    vi.doUnmock("@/lib/site")
    const fresh = await import("@/components/GuideResources")
    for (const path of Object.values(GUIDE_PATHS)) {
      expect(renderToStaticMarkup(<fresh.GuideResources path={path} />), path).toBe("")
    }
    vi.resetModules()
  })

  it("renders offers on exam guides once configured", () => {
    const nplus = html(GUIDE_PATHS.nplus)
    expect(nplus).toContain("measureup.example")
    expect(nplus).toContain("Sybex")

    const saa = html(GUIDE_PATHS.saa)
    expect(saa).toContain("tutorialsdojo.example")
    expect(saa).not.toContain("measureup.example")
  })

  /**
   * Never on: the PBQ overview and info pages (no exam), and CCNA (no partner
   * worth recommending -- see practiceOffer). An empty section header with
   * nothing under it would be worse than nothing.
   */
  it("renders nothing on pages that must not carry it, even fully configured", () => {
    for (const key of ["pbq", "hub", "scores", "order", "ccna"] as const) {
      expect(html(GUIDE_PATHS[key]), key).toBe("")
    }
  })

  /** The A+ hub covers both cores: one vendor offer, one deduped book. */
  it("dedupes the A+ hub to one offer and one book", () => {
    const out = html(GUIDE_PATHS.aplus)
    expect(out.match(/measureup\.example/g)?.length).toBe(1)
    expect(out.match(/All-in-One/g)?.length).toBe(1)
  })

  /**
   * The prerendered pages have no SiteFooter, so if the disclosure is not in
   * the block itself it is nowhere on the indexed page. FTC + Amazon both
   * require it alongside the links.
   */
  it("ships the disclosures inline with the links", () => {
    const out = html(GUIDE_PATHS.secplus)
    expect(out).toContain("earns a commission")
    expect(out).toContain("As an Amazon Associate")
    // And every link is marked as paid for crawlers.
    const links = out.match(/<a\s[^>]*href="https?:\/\/[^"]*"[^>]*>/g) ?? []
    expect(links.length).toBeGreaterThan(0)
    for (const a of links) expect(a, a).toContain("sponsored")
  })
})
