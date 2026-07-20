import { QOTD_POOL, type QotdEntry } from "@/data/qotd-pool"

export type DailyPick = QotdEntry

/**
 * The landing hero's daily question.
 *
 * Reads a generated, sampled pool rather than scanning every bank: this runs on
 * the landing page, and importing the banks for it is what used to drag ~846KB
 * of question JSON into the entry chunk for every visitor.
 */
export function qotdPool(): DailyPick[] {
  return QOTD_POOL
}

/** Same question for everyone on a given UTC day; rotates at midnight UTC. */
export function questionOfTheDay(dayIndex = Math.floor(Date.now() / 86_400_000)): DailyPick {
  const pool = QOTD_POOL
  return pool[((dayIndex % pool.length) + pool.length) % pool.length]
}
