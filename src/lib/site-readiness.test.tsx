import { readFileSync } from "node:fs"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { AdSlot } from "@/components/AdSlot"
import { SiteFooter } from "@/components/SiteFooter"
import { ADS, CONTACT_EMAIL, GROW } from "@/lib/site"
import { GUIDE_PATHS } from "@/data/routes"

describe("AdSense ownership readiness without advertising", () => {
  it("keeps advertising and the optional Grow integration inactive", () => {
    expect(ADS.enabled).toBe(false)
    expect(ADS.publisherId).toBe("")
    expect(GROW.siteId).toBe("")
    for (const slot of ["results", "dashboard"] as const) {
      expect(renderToStaticMarkup(<AdSlot slot={slot} />)).toBe("")
    }
  })

  it("uses the exact public account meta tag without loading an ad client", () => {
    const html = readFileSync(new URL("../../index.html", import.meta.url), "utf8")
    const head = html.split("</head>")[0]
    expect(head.match(/name="google-adsense-account"/g)).toHaveLength(1)
    expect(head).toContain('<meta name="google-adsense-account" content="ca-pub-7887703829224685" />')
    expect(html).not.toMatch(/adsbygoogle|pagead2\.googlesyndication\.com/)
  })

  it("makes project information, privacy and the existing contact reachable", () => {
    const html = renderToStaticMarkup(<SiteFooter />)
    expect(html).toContain(`href="${GUIDE_PATHS.method}#about"`)
    expect(html).toContain('href="/privacy"')
    expect(html).toContain(`href="mailto:${CONTACT_EMAIL}?subject=cert900%20feedback"`)
  })
})
