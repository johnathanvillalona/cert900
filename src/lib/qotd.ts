import { EXAMS, EXAM_ORDER } from "@/data/index"
import type { ExamDef, Question } from "@/data/types"

export interface DailyPick {
  exam: ExamDef
  q: Question
}

/** MCQs that fit the landing hero card: short stem, four short options. */
export function qotdPool(): DailyPick[] {
  const pool: DailyPick[] = []
  for (const id of EXAM_ORDER) {
    const exam = EXAMS[id]
    if (!exam) continue
    for (const q of exam.questions) {
      if (q.x.length <= 130 && q.o.length === 4 && q.o.every((o) => o.length <= 42)) {
        pool.push({ exam, q })
      }
    }
  }
  return pool
}

/** Same question for everyone on a given UTC day; rotates at midnight UTC. */
export function questionOfTheDay(dayIndex = Math.floor(Date.now() / 86_400_000)): DailyPick {
  const pool = qotdPool()
  return pool[((dayIndex % pool.length) + pool.length) % pool.length]
}
