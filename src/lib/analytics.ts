import { EXAM_IDS } from "../data/exam-ids"
import { APP_PATHS, GUIDE_PATHS, STUDY_PATHS, parseExamPath } from "../data/routes"
import type { AnalyticsConsent } from "./consent"

type Mode = "exam" | "practice" | "pbq"
type Config = { measurementId: string; hosts: string[] }
type Parameters = Record<string, string | boolean | number>
export type AnalyticsRuntime = {
  config: () => Promise<unknown>
  host: () => string
  load: (id: string) => Promise<void>
  command: (...args: unknown[]) => void
  disable: (id: string, disabled: boolean) => void
  erase: (id: string) => void
  referrer?: () => string
}

const paths = new Set<string>(["/", ...APP_PATHS, ...Object.values(GUIDE_PATHS), ...STUDY_PATHS, "/privacy", "/terms"])
/** Only known paths; raw query strings, hashes, unknown slugs and auth paths never leave the browser. */
export function analyticsPath(input: string): string | null {
  const path = input.split(/[?#]/, 1)[0]
  if (paths.has(path) || parseExamPath(path)) return path
  return null
}

export function analyticsConfig(input: unknown, host: string): Config | null {
  if (!input || typeof input !== "object") return null
  const value = input as Partial<Config>
  return typeof value.measurementId === "string" && /^G-[A-Z0-9]{6,16}$/.test(value.measurementId) &&
    Array.isArray(value.hosts) && value.hosts.every(h => typeof h === "string") && value.hosts.includes(host)
    ? { measurementId: value.measurementId, hosts: value.hosts } : null
}

export function analyticsReferrer(input: string): string {
  try {
    const url = new URL(input)
    return url.protocol === "https:" || url.protocol === "http:" ? url.origin : ""
  } catch { return "" }
}

/** Small transport boundary: no question/session objects or arbitrary event payload API. */
export function createAnalytics(runtime: AnalyticsRuntime) {
  let allowed = false
  let id = ""
  let ready = false
  let loading = false
  let generation = 0
  let current: string | null = null
  let lastPage: string | null = null
  let previous = ""
  let pending: { name: string; parameters: Parameters }[] = []

  const context = () => ({ page_location: `https://cert900.com${current}`, page_title: "Cert900", page_referrer: previous })
  function flush() {
    if (!allowed || !ready || !id || !current) return
    runtime.disable(id, false)
    runtime.command("set", context())
    if (lastPage !== current) {
      runtime.command("event", "page_view", context())
      lastPage = current
      previous = `https://cert900.com${current}`
    }
    for (const event of pending.splice(0)) runtime.command("event", event.name, { ...context(), ...event.parameters })
  }
  async function ensureReady() {
    if (!allowed || !current || loading || ready) { flush(); return }
    loading = true
    const requestGeneration = generation
    try {
      const config = analyticsConfig(await runtime.config(), runtime.host())
      if (config && !allowed) { runtime.disable(config.measurementId, true); runtime.erase(config.measurementId) }
      if (!config || !allowed || generation !== requestGeneration || !current) return
      id = config.measurementId
      if (!previous) previous = analyticsReferrer(runtime.referrer?.() ?? "")
      runtime.disable(id, false)
      runtime.command("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" })
      runtime.command("js", new Date())
      runtime.command("config", id, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
        cookie_expires: 180 * 24 * 60 * 60, ...context() })
      await runtime.load(id)
      if (!allowed || generation !== requestGeneration) return
      ready = true
      flush()
    } catch { pending = [] /* A blocker, offline connection or invalid config never breaks learning. */ }
    finally {
      loading = false
      if (generation !== requestGeneration && allowed) void ensureReady()
    }
  }
  function event(name: string, parameters: Parameters) {
    if (!allowed || !current) return false
    if (pending.length < 20) pending.push({ name, parameters: { ...context(), ...parameters } })
    void ensureReady()
    return true
  }
  return {
    setConsent(next: AnalyticsConsent) {
      const grant = next === "allow"
      if (grant === allowed) return
      allowed = grant
      if (!grant) {
        generation++; pending = []; lastPage = null
        if (id) { runtime.disable(id, true); runtime.erase(id) }
      } else void ensureReady()
    },
    pageView(path: string) {
      current = analyticsPath(path)
      if (!current) { if (id) runtime.disable(id, true); pending = []; lastPage = null; return }
      void ensureReady()
    },
    startAttempt(examId: string, mode: Mode) {
      const valid = EXAM_IDS.includes(examId) && ["exam", "practice", "pbq"].includes(mode)
      const cohort = valid && event("learning_attempt_start", { certification: examId, mode })
      let completed = false
      return () => {
        if (completed) return
        completed = true
        if (cohort) event("learning_attempt_complete", { certification: examId, mode })
      }
    },
  }
}

type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

const browserRuntime: AnalyticsRuntime = {
  async config() {
    const response = await fetch("/analytics-config.json", { credentials: "omit", cache: "no-store" })
    return response.ok ? response.json() : null
  },
  host: () => location.hostname,
  referrer: () => document.referrer,
  command(...args) {
    try {
      const w = window as AnalyticsWindow
      w.dataLayer ??= []
      // Google's standard queue expects an Arguments object, not an array.
      w.gtag ??= function () { w.dataLayer!.push(arguments) }
      w.gtag(...args)
    } catch { /* Optional telemetry must never interrupt learning. */ }
  },
  load(id) {
    return new Promise<void>((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>("script[data-cert900-ga4]")
      if (existing?.dataset.loaded === "true") { resolve(); return }
      const script = existing ?? document.createElement("script")
      script.async = true
      script.dataset.cert900Ga4 = ""
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
      script.onload = () => { script.dataset.loaded = "true"; resolve() }
      script.onerror = () => { script.remove(); reject(new Error("Optional analytics unavailable")) }
      if (!existing) document.head.append(script)
    })
  },
  disable(id, disabled) {
    Reflect.set(window, `ga-disable-${id}`, disabled)
  },
  erase(id) {
    // Only our GA cookies. Never inspect or remove authentication/progress data.
    const names = ["_ga", `_ga_${id.slice(2)}`]
    const host = location.hostname
    const domains = ["", host, `.${host}`, ...(host.endsWith(".cert900.com") ? ["cert900.com", ".cert900.com"] : [])]
    for (const name of names) for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax${domain ? `; domain=${domain}` : ""}`
    }
  },
}

export const analytics = createAnalytics(browserRuntime)
