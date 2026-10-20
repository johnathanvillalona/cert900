/** Numeric IPv4 intervals avoid signed JavaScript bitwise arithmetic. */
export type Interval = { start: number; end: number; text: string }
export const IPV4_END = 2 ** 32
export const PORT_END = 65536
export function ipv4(text: string): number | null {
  const parts = text.split(".")
  if (parts.length !== 4 || parts.some(p => !/^(0|[1-9]\d{0,2})$/.test(p) || Number(p) > 255)) return null
  return parts.reduce((n, p) => n * 256 + Number(p), 0)
}
export function formatIPv4(n: number): string {
  return [24, 16, 8, 0].map(bits => Math.floor(n / 2 ** bits) % 256).join(".")
}
export function address(text: string): Interval | null {
  const value = text.trim()
  if (/^any$/i.test(value)) return { start: 0, end: IPV4_END - 1, text: "Any" }
  const parts = value.split("/")
  if (parts.length > 2) return null
  const ip = ipv4(parts[0])
  if (ip === null || (parts.length === 2 && !/^(0|[1-9]\d?)$/.test(parts[1]))) return null
  const prefix = parts.length === 1 ? 32 : Number(parts[1])
  if (prefix > 32) return null
  const size = 2 ** (32 - prefix), start = Math.floor(ip / size) * size
  return { start, end: start + size - 1, text: prefix === 32 ? formatIPv4(start) : `${formatIPv4(start)}/${prefix}` }
}
export function ports(text: string): Interval | null {
  const value = text.trim()
  if (/^any$/i.test(value)) return { start: 0, end: PORT_END - 1, text: "Any" }
  if (!/^\d{1,5}(\s*-\s*\d{1,5})?$/.test(value)) return null
  const [start, last] = value.split(/\s*-\s*/).map(Number), end = last ?? start
  if (start > end || end >= PORT_END) return null
  return { start, end, text: start === end ? String(start) : `${start}-${end}` }
}
export const contains = (range: Interval, value: number) => value >= range.start && value <= range.end
export const record = (v: unknown): v is Record<string, unknown> => !!v && typeof v === "object" && !Array.isArray(v)
export const boundedText = (v: unknown, max = 120): v is string => typeof v === "string" && v.length <= max
export const counter = (v: unknown): v is number => Number.isSafeInteger(v) && Number(v) >= 0

