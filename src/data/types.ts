export interface Video {
  /** display title of the Professor Messer video */
  n: string
  /** full URL */
  u: string
  /** domain number (1-based) */
  d: number
}

export interface Question {
  id: number
  /** topic key — must exist in the exam's videos map */
  t: string
  /** question text */
  x: string
  /** options */
  o: string[]
  /** index of the correct option (single-answer questions) */
  a: number
  /**
   * multiple-response questions only: ALL correct option indices ("Choose
   * TWO/THREE"). When present, `a` is ignored and grading is exact-set,
   * all-or-nothing (AWS/Azure rule). Absent on single-answer questions.
   */
  as?: number[]
  /** explanation */
  e: string
  /** domain number */
  d: number
}

export interface MatchItem {
  /** item label */
  l: string
  /** index into choices */
  a: number
}

export interface PBQMatch {
  kind: "match"
  t: string
  title: string
  scen: string
  choices: string[]
  items: MatchItem[]
}

export interface PBQOrder {
  kind: "order"
  t: string
  title: string
  scen: string
  /** steps in correct order */
  steps: string[]
}

export interface TerminalTask {
  /** objective shown to the candidate */
  prompt: string
  /** case-insensitive regex alternatives; any match completes the task */
  accept: string[]
  /** canned output printed when the command is accepted */
  output: string
  hint?: string
}

/** Command-line simulation (CompTIA "terminal window" style). */
export interface PBQTerminal {
  kind: "terminal"
  t: string
  title: string
  scen: string
  /** prompt prefix, e.g. "C:\\Users\\tech>" or "admin@sw01#" */
  host: string
  tasks: TerminalTask[]
}

export interface ConfigField {
  id: string
  label: string
  type: "select" | "toggle" | "text"
  /** for select */
  options?: string[]
  /** select: correct option index · toggle: correct boolean · text: accepted regex alternatives */
  answer: number | boolean | string[]
  /** toggles only: the misconfigured starting state (defaults false) */
  initial?: boolean
  note?: string
}

/** Configuration-screen simulation (router/firewall/OS settings panel). */
export interface PBQConfig {
  kind: "config"
  t: string
  title: string
  scen: string
  /** panel heading, e.g. "Wireless Router · Security" */
  panel: string
  fields: ConfigField[]
}

export type HotspotIcon =
  | "router"
  | "switch"
  | "firewall"
  | "ap"
  | "pc"
  | "server"
  | "printer"
  | "cloud"
  | "phone"

export interface HotspotNode {
  id: string
  /** 0-100 grid coordinates (SVG viewBox is 100 x 62) */
  x: number
  y: number
  label: string
  sub?: string
  icon: HotspotIcon
}

/** Network-diagram interaction: select the right device(s). */
export interface PBQHotspot {
  kind: "hotspot"
  t: string
  title: string
  scen: string
  /** the instruction, e.g. "Select the TWO devices forming the loop." */
  prompt: string
  nodes: HotspotNode[]
  edges: [string, string][]
  targets: string[]
  /** defaults to targets.length */
  maxSelect?: number
}

export type ConnectorGlyph =
  | "rj45"
  | "rj11"
  | "usb-a"
  | "usb-c"
  | "hdmi"
  | "vga"
  | "dp"
  | "audio"
  | "coax"
  | "lc-fiber"
  | "power"
  | "lock"
  | "shield"
  | "badge"
  | "blocker"
  | "keypad"
  | "sata"
  | "sata-pwr"
  | "usb3-header"
  | "fp-leads"
  | "fan"
  | "molex"
  | "dac"
  | "strap"
  | "mat"
  | "bag"
  | "air"
  | "vacuum"
  | "bubble"
  | "toner"
  | "punchdown"
  | "crimper"
  | "tester"
  | "loopback"
  | "multimeter"
  | "nettap"

export interface DragZone {
  id: string
  /** 0-100 coords over the scene (scene viewBox is 100 x H, H per scene) */
  x: number
  y: number
  w: number
  h: number
  /** revealed in the graded review */
  label: string
}

export interface DragItem {
  id: string
  label: string
  glyph: ConnectorGlyph
}

/** Drag connectors/cables onto ports over an illustrated scene. */
export interface PBQDragConnect {
  kind: "dragconnect"
  t: string
  title: string
  scen: string
  prompt: string
  scene: "pc-rear" | "patch-panel" | "rack" | "desk" | "mobo" | "bench"
  zones: DragZone[]
  /** may include distractors that belong to no zone */
  items: DragItem[]
  /** zoneId -> itemId */
  answer: Record<string, string>
}

export type PBQ = PBQMatch | PBQOrder | PBQTerminal | PBQConfig | PBQHotspot | PBQDragConnect

/**
 * An exam minus its question/PBQ payload, plus the counts screens display.
 * The app chrome (header, landing, picker, dashboard, guides) needs only this,
 * which is what lets the heavy banks load on demand instead of shipping to
 * every visitor. Generated into meta.ts by tools/gen-meta.mjs.
 */
export type ExamMeta = Omit<ExamDef, "questions" | "pbqs"> & {
  questionCount: number
  pbqCount: number
}

/**
 * The slice topic/domain helpers actually need. Satisfied by both ExamDef and
 * ExamMeta, so those helpers work before the heavy bank has loaded.
 */
export type ExamTopics = Pick<ExamDef, "videos" | "domains">

export type Vendor = "comptia" | "aws" | "azure" | "cisco"

/** Scaled-score shape; min is always 100. CompTIA tops out at 900, AWS/Azure at 1000. */
export interface ScoreScale {
  max: number
  pass: number
}

export interface ExamDef {
  id: string
  vendor: Vendor
  scale: ScoreScale
  cert: string
  name: string
  code: string
  blurb: string
  domains: Record<number, string>
  examSplit: Record<number, number>
  examMC: number
  examPBQ: number
  examMinutes: number
  videos: Record<string, Video>
  questions: Question[]
  pbqs: PBQ[]
}
