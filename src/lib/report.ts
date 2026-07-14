/** Fire-and-forget question report. Resolves true when the server accepted it. */
export async function reportQuestion(examId: string, ref: string): Promise<boolean> {
  try {
    const res = await fetch("/api/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ examId, ref }),
    })
    return res.ok
  } catch {
    return false
  }
}
