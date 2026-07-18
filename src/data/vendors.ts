import type { Vendor } from "./types"

/** Display metadata for exam vendors, in menu/picker order. */
export const VENDORS: Record<Vendor, { name: string; short: string }> = {
  comptia: { name: "CompTIA", short: "CompTIA" },
  aws: { name: "Amazon Web Services", short: "AWS" },
  azure: { name: "Microsoft Azure", short: "Azure" },
}

export const VENDOR_ORDER: Vendor[] = ["comptia", "aws", "azure"]
