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
  /** index of the correct option */
  a: number
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

export type PBQ = PBQMatch | PBQOrder

export interface ExamDef {
  id: string
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
