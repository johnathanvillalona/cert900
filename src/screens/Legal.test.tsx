import { describe, expect, it } from "vitest"
import { renderToStaticMarkup } from "react-dom/server"
import { CONTACT_EMAIL } from "@/lib/site"
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
