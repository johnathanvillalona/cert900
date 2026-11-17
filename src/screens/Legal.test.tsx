import { describe, expect, it } from "vitest"
import { renderToStaticMarkup } from "react-dom/server"
import { CONTACT_EMAIL } from "@/lib/site"
import { ADVERTISING, ADVERTISING_GUIDE_PATH, type AdvertisingPolicy } from "@/lib/advertising-policy"
import { DeleteAccount, LEGAL_EFFECTIVE_DATE, LEGAL_EFFECTIVE_LABEL, Privacy, Terms } from "./Legal"

const pages = [
  ["Privacy policy", Privacy],
  ["Delete your account", DeleteAccount],
  ["Terms of use", Terms],
] as const

const visibleText = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
const links = (html: string) => [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map((match) => ({
  attributes: match[1],
  href: /href="([^"]+)"/.exec(match[1])?.[1],
  text: visibleText(match[2]),
}))

describe("rendered legal pages", () => {
  it.each(pages)("renders %s with its current effective date and contact", (title, Page) => {
    const html = renderToStaticMarkup(<Page />)
    expect(html).toContain(`>${title}</h1>`)
    expect(visibleText(html)).toContain(`Effective ${LEGAL_EFFECTIVE_LABEL}`)
    expect(LEGAL_EFFECTIVE_DATE).toBe("2026-10-21")
    expect(links(html).some((link) => link.href?.startsWith(`mailto:${CONTACT_EMAIL}`))).toBe(true)
  })

  it("describes local progress, optional email authentication, and hosting without asserting a database region", () => {
    const text = visibleText(renderToStaticMarkup(<Privacy />))
    expect(text).toContain("your practice progress stays on your device")
    expect(text).toContain("email/password sign-in is available")
    expect(text).toContain("a password hash")
    expect(text).toContain("Cloudflare D1")
    expect(text).toContain("one-way hashes of IP addresses")
    expect(text).not.toContain("hosted in the United States")
  })

  it("explains newsletter confirmation, retained opt-outs, and conditional email delivery providers", () => {
    const text = visibleText(renderToStaticMarkup(<Privacy />))
    expect(text).toContain("after you confirm your subscription")
    expect(text).toContain("subscription record remains to honor that choice")
    expect(text).toContain("When email features are enabled")
    expect(text).toContain("verification, password-reset, and newsletter messages")
    expect(text).toContain("sent through Resend or Cloudflare")
    expect(text).toContain("email addresses and message contents")
  })

  it("describes authentication storage by purpose rather than promising a fixed cookie count", () => {
    const text = visibleText(renderToStaticMarkup(<Privacy />))
    expect(text).toContain("Essential cookies support sign-in, authentication security, and session caching")
    expect(text).toContain("local storage keeps your progress, theme, and settings")
    expect(text).toContain("providers can use their own cookies during authentication")
    expect(text).not.toContain("one session cookie")
  })

  it("accurately distinguishes paused Grow and inert AdSense verification from future advertising", () => {
    const html = renderToStaticMarkup(<Privacy />)
    const text = visibleText(html)
    expect(text).toContain("This website currently displays no ads, and Grow is paused")
    expect(text).toContain("Grow by Mediavine is paused, and its script is not loaded")
    expect(text).toContain("static HTML tag identifying our AdSense account for site verification")
    expect(text).toContain("request ads, or set advertising cookies")
    expect(text).toContain("Before enabling advertising, we will update this policy")
    expect(text).toContain("applicable consent and privacy choices")
    expect(html).not.toMatch(/<(?:script|iframe|ins)\b/i)
    expect(text).not.toContain("identifies nobody")
  })

  it("provides named provider and Google partner-data policy links", () => {
    const renderedLinks = links(renderToStaticMarkup(<Privacy />))
    const expectedLinks = [
      "https://www.cloudflare.com/privacypolicy/",
      "https://policies.google.com/privacy",
      "https://www.apple.com/legal/privacy/",
      "https://resend.com/legal/privacy-policy",
      "https://policies.google.com/technologies/partner-sites",
      "/delete-account",
    ]
    for (const href of expectedLinks) {
      const link = renderedLinks.find((item) => item.href === href)
      expect(link, href).toBeDefined()
      expect(link?.text.length, href).toBeGreaterThan(3)
    }
  })

  it("separates application deletion from provider retention, local progress, and newsletter subscriptions", () => {
    const html = renderToStaticMarkup(<DeleteAccount />)
    const text = visibleText(html)
    expect(text).toContain("wait for the success message")
    expect(text).toContain("application database")
    expect(text).toContain("Provider-managed backups and operational logs have separate retention controls")
    expect(text).toContain("Progress saved locally in a browser or app you used stays on that device")
    expect(text).toContain("Newsletter subscriptions are also separate from your account")
    expect(text).toContain("confirm account ownership")
    expect(text).not.toContain("no backup copy")
    expect(text).not.toContain("delete immediately")
    expect(text).not.toContain("signed out everywhere")
    expect(links(html).some((link) => link.href === `mailto:${CONTACT_EMAIL}?subject=Delete%20my%20account`)).toBe(true)
  })

  it("covers all four existing certification vendors and independent practice content", () => {
    const text = visibleText(renderToStaticMarkup(<Terms />))
    for (const vendor of ["CompTIA", "Cisco", "Amazon Web Services", "Microsoft"]) {
      expect(text).toContain(vendor)
    }
    expect(text).toContain("original study content")
    expect(text).toContain("does not guarantee passing the real one")
  })

  it("keeps external policy links safe and text-labeled without adding executable integrations", () => {
    for (const [, Page] of pages) {
      const html = renderToStaticMarkup(<Page />)
      expect(html).not.toMatch(/<(?:script|iframe|ins)\b/i)
      for (const link of links(html).filter((item) => item.href?.startsWith("https://"))) {
        expect(link.text.length).toBeGreaterThan(0)
        if (link.attributes.includes('target="_blank"')) {
          expect(link.attributes).toContain('rel="noopener noreferrer"')
        }
      }
    }
  })
})

describe("advertising disclosure follows the source policy", () => {
  const activated: AdvertisingPolicy = {
    ...ADVERTISING, enabled: true, siteApproved: true, cmpVerified: true,
    placements: { "guide-primary": { enabled: true, slot: "1234567890" }, "guide-secondary": { enabled: false, slot: "" } },
  }
  it("renders today's no-advertising text by default and for the committed policy", () => {
    const html = renderToStaticMarkup(<Privacy />)
    expect(html).toBe(renderToStaticMarkup(<Privacy policy={ADVERTISING} />))
    expect(visibleText(html)).toContain("separate from an account. This website currently displays no ads, and Grow is paused.")
  })
  it("keeps the no-advertising text while any gate is still off", () => {
    for (const partial of [{ enabled: false }, { siteApproved: false }, { cmpVerified: false }, { placements: ADVERTISING.placements }]) {
      const text = visibleText(renderToStaticMarkup(<Privacy policy={{ ...activated, ...partial }} />))
      expect(text, JSON.stringify(partial)).toContain("This website currently displays no ads, and Grow is paused")
      expect(text, JSON.stringify(partial)).not.toContain("DoubleClick")
    }
  })
  it("switches to Google's required advertising disclosure once a unit can render", () => {
    const html = renderToStaticMarkup(<Privacy policy={activated} />)
    const text = visibleText(html)
    expect(text).not.toContain("currently displays no ads")
    expect(text).not.toContain("AdSense is not currently serving ads here")
    expect(text).toContain("This website shows one labelled advertisement on a single study guide, and Grow is paused.")
    expect(text).toContain("one clearly labelled Google AdSense advertisement on a single static study guide")
    expect(text).toContain("No advertising appears inside practice exams, PBQs, simulations, results, sign-in, account or progress screens")
    expect(text).toContain("Third-party vendors, including Google, use cookies to serve ads")
    expect(text).toContain("DoubleClick cookie")
    expect(text).toContain("certified consent manager, Google Privacy")
    expect(text).toContain("messaging, before any advertising code")
    expect(text).toContain("no ad request is made until you have made a choice")
    expect(text).toContain("Global Privacy Control")
    expect(text).toContain("Do Not Sell or Share")
    expect(text).toContain("Optional analytics permission does not authorize advertising")
    expect(text).toContain("will not restrict access to our free study resources")
    expect(text).toContain("Advertising privacy choices")
    expect(text).toContain("control under the advertisement")
    expect(html).not.toMatch(/<(?:script|iframe|ins)\b/i)
    const renderedLinks = links(html)
    for (const href of ["https://adssettings.google.com", "https://www.aboutads.info/choices", "https://policies.google.com/technologies/ads", "https://policies.google.com/technologies/partner-sites"]) {
      const link = renderedLinks.find((item) => item.href === href)
      expect(link, href).toBeDefined()
      expect(link?.text.length, href).toBeGreaterThan(3)
      expect(link?.attributes, href).toContain('rel="noopener noreferrer"')
    }
    expect(renderedLinks.find((item) => item.href === ADVERTISING_GUIDE_PATH)?.text).toBe("Network+ practice-test guide")
  })
})
