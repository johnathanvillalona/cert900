import type { Vendor } from "./types"

/** Display metadata for exam vendors, in menu/picker order. */
export const VENDORS: Record<Vendor, { name: string; short: string }> = {
  comptia: { name: "CompTIA", short: "CompTIA" },
  aws: { name: "Amazon Web Services", short: "AWS" },
  azure: { name: "Microsoft Azure", short: "Azure" },
}

export const VENDOR_ORDER: Vendor[] = ["comptia", "aws", "azure"]

/**
 * Each vendor's interactive (non multiple-choice) question formats use that
 * vendor's OWN presentation and scoring rules. "PBQ" is CompTIA vocabulary;
 * AWS calls its formats ordering/matching questions (all-or-nothing credit,
 * same weight as one multiple-choice question, mixed through the exam);
 * Microsoft calls its equivalents drag-and-drop / build-list.
 */
export interface VendorFormats {
  /** Home tile title + description for the interactive-formats lab */
  labTitle: string
  labDesc: string
  /** noun for counts in picker rows / snapshots, e.g. "8 PBQs" */
  countNoun: string
  /** badge text shown on an interactive question, by pbq kind */
  itemBadge: Record<string, string>
  /** short suffix for the "Question X of Y" line, by pbq kind */
  itemSuffix: Record<string, string>
  /** CompTIA awards partial credit; AWS/Azure score all-or-nothing */
  partialCredit: boolean
  /** exam points per interactive item (CompTIA weights PBQs 2x) */
  itemWeight: number
  /** mix interactive items among MC in exam sims (CompTIA fronts them) */
  interleave: boolean
}

export const VENDOR_FORMATS: Record<Vendor, VendorFormats> = {
  comptia: {
    labTitle: "PBQ Lab",
    labDesc: "Just the performance-based questions: matching and ordering scenarios with full feedback.",
    countNoun: "PBQs",
    itemBadge: {
      match: "Performance-Based Question",
      order: "Performance-Based Question",
      terminal: "Performance-Based Question",
      config: "Performance-Based Question",
      hotspot: "Performance-Based Question",
      dragconnect: "Performance-Based Question",
    },
    itemSuffix: {
      match: "PBQ", order: "PBQ", terminal: "PBQ", config: "PBQ", hotspot: "PBQ", dragconnect: "PBQ",
    },
    partialCredit: true,
    itemWeight: 2,
    interleave: false,
  },
  aws: {
    labTitle: "Ordering & Matching",
    labDesc: "Practice the exam's interactive question formats. Scored like the real thing: full credit only when every part is right.",
    countNoun: "ordering & matching questions",
    itemBadge: { order: "Ordering question", match: "Matching question" },
    itemSuffix: { order: "Ordering", match: "Matching" },
    partialCredit: false,
    itemWeight: 1,
    interleave: true,
  },
  azure: {
    labTitle: "Interactive Formats",
    labDesc: "Drag-and-drop and build-list questions in Microsoft's own formats, with full feedback.",
    countNoun: "interactive questions",
    itemBadge: { order: "Build list", match: "Drag and drop", config: "Hot area" },
    itemSuffix: { order: "Build list", match: "Drag and drop", config: "Hot area" },
    partialCredit: false,
    itemWeight: 1,
    interleave: true,
  },
}
