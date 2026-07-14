import type { ExamDef } from "@/data/types"

export function VideoLink({ exam, topic, label = "Watch" }: { exam: ExamDef; topic: string; label?: string }) {
  const v = exam.videos[topic]
  if (!v) return null
  return (
    <a
      href={v.u}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="video-link"
      className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-accent"
    >
      <span aria-hidden className="flex size-5 items-center justify-center rounded-sm bg-red-600 text-[9px] text-white">▶</span>
      <span>
        {label} <span className="text-primary">Professor Messer: {v.n}</span>
      </span>
    </a>
  )
}
