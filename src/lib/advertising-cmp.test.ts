import { describe, expect, it } from "vitest"
import { PRIVACY_MESSAGING_FRAME_NAME, createPrivacyMessagingLoader, privacyMessagingUrl } from "./advertising-cmp"

interface FakeElement {
  tag: string
  name?: string
  src?: string
  async?: boolean
  tabIndex?: number
  attributes: Record<string, string>
  dataset: Record<string, string>
  style: { cssText?: string }
  onload?: () => void
  onerror?: () => void
  removed: boolean
  setAttribute: (key: string, value: string) => void
  remove: () => void
}

function fakeDocument() {
  const head: FakeElement[] = []
  const body: FakeElement[] = []
  const doc = {
    head: { appendChild: (element: FakeElement) => { head.push(element) } },
    body: { appendChild: (element: FakeElement) => { body.push(element) } },
    createElement: (tag: string): FakeElement => {
      const element: FakeElement = {
        tag, attributes: {}, dataset: {}, style: {}, removed: false,
        setAttribute(key, value) { element.attributes[key] = value },
        remove() { element.removed = true; const index = head.indexOf(element); if (index >= 0) head.splice(index, 1) },
      }
      return element
    },
    querySelector: (selector: string) => {
      if (selector.startsWith("iframe")) return body.find(element => element.tag === "iframe" && element.name === PRIVACY_MESSAGING_FRAME_NAME) ?? null
      return head.find(element => element.tag === "script" && element.dataset.cert900Cmp === "google-privacy-messaging") ?? null
    },
  }
  return { doc: doc as unknown as Document, head, body }
}
const settle = async () => { for (let i = 0; i < 4; i++) await Promise.resolve() }

describe("Google Privacy & messaging bootstrap URL", () => {
  it("derives the standalone tag from a well-formed publisher id", () => {
    expect(privacyMessagingUrl("ca-pub-7887703829224685")).toBe("https://fundingchoicesmessages.google.com/i/pub-7887703829224685?ers=1")
  })
  it.each(["", "pub-7887703829224685", "ca-pub-123", "ca-pub-7887703829224685x", "javascript:alert(1)", "ca-pub-78877038292246851"])(
    "refuses malformed publisher %j", publisher => {
      expect(privacyMessagingUrl(publisher)).toBeNull()
    })
})

describe("Google Privacy & messaging loader", () => {
  it("appends the async message script once plus Google's hidden presence frame, resolving on load", async () => {
    const { doc, head, body } = fakeDocument()
    const load = createPrivacyMessagingLoader(doc, "ca-pub-0000000000000000")
    const first = load()
    expect(head).toHaveLength(1)
    const script = head[0]
    expect(script.tag).toBe("script")
    expect(script.async).toBe(true)
    expect(script.src).toBe("https://fundingchoicesmessages.google.com/i/pub-0000000000000000?ers=1")
    expect(script.dataset.cert900Cmp).toBe("google-privacy-messaging")
    expect(body).toHaveLength(1)
    expect(body[0].tag).toBe("iframe")
    expect(body[0].name).toBe(PRIVACY_MESSAGING_FRAME_NAME)
    expect(body[0].attributes["aria-hidden"]).toBe("true")
    expect(body[0].style.cssText).toContain("display:none")
    const second = load()
    expect(second).toBe(first)
    expect(head).toHaveLength(1)
    script.onload?.()
    await expect(first).resolves.toBeUndefined()
    // A document that already carries the tag resolves without a second append.
    const again = createPrivacyMessagingLoader(doc, "ca-pub-0000000000000000")
    await expect(again()).resolves.toBeUndefined()
    expect(head).toHaveLength(1)
    expect(body).toHaveLength(1)
  })
  it("rejects on a failed load, removes the tag and never retries", async () => {
    const { doc, head } = fakeDocument()
    const load = createPrivacyMessagingLoader(doc, "ca-pub-0000000000000000")
    const attempt = load()
    const script = head[0]
    script.onerror?.()
    await expect(attempt).rejects.toThrow("Consent manager unavailable")
    expect(script.removed).toBe(true)
    expect(head).toHaveLength(0)
    await expect(load()).rejects.toThrow("Consent manager unavailable")
    await settle()
    expect(head).toHaveLength(0)
  })
  it("never touches the document for a malformed publisher", async () => {
    const { doc, head, body } = fakeDocument()
    const load = createPrivacyMessagingLoader(doc, "pub-1")
    await expect(load()).rejects.toThrow("Consent manager unavailable")
    expect(head).toHaveLength(0)
    expect(body).toHaveLength(0)
  })
})
