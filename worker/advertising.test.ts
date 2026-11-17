import { afterEach, describe, expect, it, vi } from "vitest"
import worker from "./index"
import type { Env } from "./auth"
import { ADVERTISING_GUIDE_PATH } from "../src/lib/advertising-core"
import { ADVERTISING_STRIP_SELECTORS, CSP, GUIDE_CSP, HOME_CSP } from "./csp"

// A synthetic pilot document carrying both markers, as a future gates build
// would. The real prerendered page never carries them while gates are off.
const pilot = '<!doctype html><html><head><title>Pilot</title></head><body><main data-testid="guide-page"><p>Guide</p>'
  + '<aside data-guide-ad="guide-primary"><ins class="adsbygoogle"></ins></aside></main>'
  + '<script type="module" src="/assets/advertising-0000.js" data-cert900-advertising-entry></script></body></html>'

function fixture(runtime?: string, body = pilot) {
  const fetch = vi.fn(async (_req: Request) => new Response(body, { headers: { "content-type": "text/html; charset=utf-8" } }))
  return { fetch, env: { ASSETS: { fetch }, ADVERTISING_RUNTIME: runtime } as unknown as Env }
}

class FakeRewriter {
  static instances: FakeRewriter[] = []
  selectors: string[] = []
  constructor() { FakeRewriter.instances.push(this) }
  on(selector: string) { this.selectors.push(selector); return this }
  transform(res: Response) { return res }
}
afterEach(() => { vi.unstubAllGlobals(); FakeRewriter.instances = [] })

describe("advertising runtime config endpoint", () => {
  it.each([["on", true], ["off", false], [undefined, false], ["ON", false], ["true", false], [" on", false], ["", false]])(
    "reports variable %j as enabled=%s without caching or touching assets", async (value, enabled) => {
      const { env, fetch } = fixture(value)
      const res = await worker.fetch(new Request("https://cert900.com/advertising-config.json"), env)
      expect(res.status).toBe(200)
      expect(await res.json()).toEqual({ enabled })
      expect(res.headers.get("cache-control")).toBe("no-store")
      expect(res.headers.get("content-type")).toBe("application/json")
      expect(res.headers.has("content-security-policy")).toBe(false)
      expect(res.headers.get("x-content-type-options")).toBe("nosniff")
      expect(fetch).not.toHaveBeenCalled()
    })
  it("answers HEAD and refuses writes", async () => {
    const { env } = fixture("on")
    expect((await worker.fetch(new Request("https://cert900.com/advertising-config.json", { method: "HEAD" }), env)).status).toBe(200)
    for (const method of ["POST", "PUT", "DELETE"]) {
      const res = await worker.fetch(new Request("https://cert900.com/advertising-config.json", { method }), env)
      expect(res.status, method).toBe(405)
    }
  })
  it("redirects the www host to the canonical endpoint", async () => {
    const { env, fetch } = fixture("on")
    const res = await worker.fetch(new Request("https://www.cert900.com/advertising-config.json"), env)
    expect(res.status).toBe(301)
    expect(res.headers.get("location")).toBe("https://cert900.com/advertising-config.json")
    expect(fetch).not.toHaveBeenCalled()
  })
})

describe("pilot document runtime strip and policy", () => {
  it("serves the pilot under the guide policy and strips advertising markup while the switch is off", async () => {
    vi.stubGlobal("HTMLRewriter", FakeRewriter)
    const { env, fetch } = fixture("off")
    const res = await worker.fetch(new Request(`https://cert900.com${ADVERTISING_GUIDE_PATH}`, {
      headers: { "if-none-match": '"etag"', "if-modified-since": "Mon, 17 Nov 2026 00:00:00 GMT" },
    }), env)
    expect(res.status).toBe(200)
    expect(res.headers.get("content-security-policy")).toBe(GUIDE_CSP)
    expect(FakeRewriter.instances).toHaveLength(1)
    expect(FakeRewriter.instances[0].selectors).toEqual([...ADVERTISING_STRIP_SELECTORS])
    const forwarded = fetch.mock.calls[0][0]
    expect(forwarded.headers.has("if-none-match")).toBe(false)
    expect(forwarded.headers.has("if-modified-since")).toBe(false)
  })
  it.each([undefined, "ON", "true"])("treats variable %j like off", async value => {
    vi.stubGlobal("HTMLRewriter", FakeRewriter)
    const { env } = fixture(value)
    const res = await worker.fetch(new Request(`https://cert900.com${ADVERTISING_GUIDE_PATH}/`), env)
    expect(res.headers.get("content-security-policy")).toBe(GUIDE_CSP)
    expect(FakeRewriter.instances[0].selectors).toEqual([...ADVERTISING_STRIP_SELECTORS])
  })
  it("with the switch on but the frozen source policy, keeps the guide policy, the body and conditional requests intact", async () => {
    vi.stubGlobal("HTMLRewriter", FakeRewriter)
    const { env, fetch } = fixture("on")
    const res = await worker.fetch(new Request(`https://cert900.com${ADVERTISING_GUIDE_PATH}`, { headers: { "if-none-match": '"etag"' } }), env)
    expect(res.headers.get("content-security-policy")).toBe(GUIDE_CSP)
    expect(FakeRewriter.instances).toHaveLength(0)
    expect(fetch.mock.calls[0][0].headers.get("if-none-match")).toBe('"etag"')
    expect(await res.text()).toBe(pilot)
  })
  it("never registers strip selectors or an advertising policy for other documents", async () => {
    vi.stubGlobal("HTMLRewriter", FakeRewriter)
    const { env } = fixture("off")
    for (const [path, policy] of [["/comptia-a-plus-practice-test", GUIDE_CSP], ["/", HOME_CSP], ["/privacy", CSP], ["/study/n10-009", CSP]] as const) {
      FakeRewriter.instances = []
      const res = await worker.fetch(new Request(`https://cert900.com${path}`), env)
      expect(res.status, path).toBe(200)
      expect(res.headers.get("content-security-policy"), path).toBe(policy)
      for (const rewriter of FakeRewriter.instances) {
        for (const selector of ADVERTISING_STRIP_SELECTORS) expect(rewriter.selectors, path).not.toContain(selector)
      }
    }
  })
})
