import { describe, expect, it, vi } from "vitest"
import worker from "./index"
import type { Env } from "./auth"

// Copied verbatim from the authorized AdSense cert900.com Ads.txt snippet.
const record = "google.com, pub-7887703829224685, DIRECT, f08c47fec0942fa0\n"
function fixture() {
  const fetch = vi.fn(async () => new Response(record, { headers: { "content-type": "text/plain; charset=utf-8" } }))
  return { fetch, env: { ASSETS: { fetch } } as unknown as Env }
}

describe("verified ads.txt asset without advertising", () => {
  it("passes the canonical plain-text asset through with security headers and no HTML fallback", async () => {
    const { env, fetch } = fixture()
    const response = await worker.fetch(new Request("https://cert900.com/ads.txt"), env)
    expect(response.status).toBe(200)
    expect(response.headers.get("content-type")).toBe("text/plain; charset=utf-8")
    expect(response.headers.has("content-security-policy")).toBe(false)
    expect(response.headers.get("x-content-type-options")).toBe("nosniff")
    expect(await response.text()).toBe(record)
    expect(fetch).toHaveBeenCalledOnce()
  })
  it.each(["GET", "HEAD"])("redirects www %s to the exact canonical asset without touching assets or D1", async method => {
    const { env, fetch } = fixture()
    const response = await worker.fetch(new Request("https://www.cert900.com/ads.txt", { method }), env)
    expect(response.status).toBe(301)
    expect(response.headers.get("location")).toBe("https://cert900.com/ads.txt")
    expect(fetch).not.toHaveBeenCalled()
  })
  it("preserves the existing HTTP-to-HTTPS canonical redirect", async () => {
    const { env, fetch } = fixture()
    const response = await worker.fetch(new Request("http://cert900.com/ads.txt", { headers: { "cf-visitor": '{"scheme":"http"}' } }), env)
    expect(response.status).toBe(301)
    expect(response.headers.get("location")).toBe("https://cert900.com/ads.txt")
    expect(fetch).not.toHaveBeenCalled()
  })
})

describe("legal canonical-host redirects", () => {
  it.each(["/privacy", "/terms", "/delete-account"])("preserves the exact canonical path for %s without touching data", async path => {
    const { env, fetch } = fixture()
    const response = await worker.fetch(new Request(`https://www.cert900.com${path}`), env)
    expect(response.status).toBe(301)
    expect(response.headers.get("location")).toBe(`https://cert900.com${path}`)
    expect(fetch).not.toHaveBeenCalled()
  })
})
