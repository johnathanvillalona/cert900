import { Bar, BarChart, CartesianGrid, LabelList, Line, LineChart, ReferenceLine, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { PASS_SCALED } from "@/lib/engine"
import type { DomainStat, TrendPoint } from "@/lib/stats"
import type { ExamRecord } from "@/lib/progress"

const oneSeries: ChartConfig = {
  pct: { label: "Accuracy", color: "var(--chart-1)" },
  scaled: { label: "Scaled score", color: "var(--chart-1)" },
}

function EmptyChart({ children }: { children: string }) {
  return (
    <div className="flex h-[220px] items-center justify-center rounded-md border border-dashed">
      <p className="text-muted-foreground max-w-[36ch] px-4 text-center text-sm">{children}</p>
    </div>
  )
}

/** Single-series accuracy line across practice sessions. */
export function AccuracyTrendChart({ trend }: { trend: TrendPoint[] }) {
  if (trend.length < 2) return <EmptyChart>Appears after two practice sessions. Run a drill to start the line.</EmptyChart>
  return (
    <ChartContainer config={oneSeries} className="h-[220px] w-full">
      <LineChart data={trend} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeOpacity={0.35} />
        <XAxis
          dataKey="n"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          className="font-mono"
          fontSize={11}
          tickFormatter={(v: number) => `#${v}`}
        />
        <YAxis domain={[0, 100]} ticks={[0, 50, 100]} tickLine={false} axisLine={false} width={34} className="font-mono" fontSize={11} tickFormatter={(v: number) => `${v}%`} />
        <ChartTooltip
          cursor={{ strokeOpacity: 0.4 }}
          content={<ChartTooltipContent labelFormatter={(_, payload) => `Session ${payload?.[0]?.payload.n} · ${payload?.[0]?.payload.date}`} formatter={(value) => [`${value}% correct`, ""]} />}
        />
        <Line dataKey="pct" type="monotone" stroke="var(--chart-1)" strokeWidth={2} dot={false} activeDot={{ r: 5 }} />
      </LineChart>
    </ChartContainer>
  )
}

/** Exam scaled scores against the exam's pass line. Position vs the line carries pass/fail. */
export function ExamScoreChart({ exams, scale = { max: 900, pass: PASS_SCALED } }: { exams: ExamRecord[]; scale?: { max: number; pass: number } }) {
  if (exams.length === 0)
    return <EmptyChart>{`Take a full exam simulation and your scaled scores plot here against the ${scale.pass} pass line.`}</EmptyChart>
  const data = exams.map((e, i) => ({ n: i + 1, date: e.date, scaled: e.scaled, pct: e.pct }))
  return (
    <ChartContainer config={oneSeries} className="h-[220px] w-full">
      <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeOpacity={0.35} />
        <XAxis dataKey="n" tickLine={false} axisLine={false} tickMargin={8} className="font-mono" fontSize={11} tickFormatter={(v: number) => `#${v}`} />
        <YAxis domain={[100, scale.max]} ticks={[300, 500, scale.pass, scale.max]} tickLine={false} axisLine={false} width={34} className="font-mono" fontSize={11} />
        <ReferenceLine
          y={scale.pass}
          stroke="var(--muted-foreground)"
          strokeDasharray="4 4"
          strokeOpacity={0.6}
          label={{ value: `pass ${scale.pass}`, position: "insideBottomRight", fontSize: 10, fill: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        />
        <ChartTooltip
          cursor={{ strokeOpacity: 0.4 }}
          content={<ChartTooltipContent labelFormatter={(_, payload) => `Exam ${payload?.[0]?.payload.n} · ${payload?.[0]?.payload.date}`} formatter={(value, _n, item) => [`${value} scaled · ${item?.payload.pct}% raw · ${(item?.payload.scaled ?? 0) >= scale.pass ? "pass" : "below pass line"}`, ""]} />}
        />
        <Line dataKey="scaled" type="monotone" stroke="var(--chart-1)" strokeWidth={2} dot={{ r: 4, fill: "var(--chart-1)", strokeWidth: 0 }} activeDot={{ r: 5.5 }} />
      </LineChart>
    </ChartContainer>
  )
}

/** Per-domain accuracy, one hue, direct-labeled bars (contrast relief per validator). */
export function DomainAccuracyChart({ stats }: { stats: DomainStat[] }) {
  const attempted = stats.filter((s) => s.attempts > 0)
  if (attempted.length === 0) return <EmptyChart>Answer a few questions and your accuracy by exam domain shows up here.</EmptyChart>
  const data = stats.map((s) => ({ ...s, tick: s.name.split(" ")[0] }))
  const h = 40 + data.length * 36
  return (
    <ChartContainer config={oneSeries} className="w-full" style={{ height: h }}>
      <BarChart data={data} layout="vertical" margin={{ top: 0, right: 44, left: 0, bottom: 0 }}>
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis dataKey="tick" type="category" tickLine={false} axisLine={false} width={40} className="font-mono" fontSize={11} />
        <ChartTooltip
          cursor={{ fillOpacity: 0.06 }}
          content={<ChartTooltipContent labelFormatter={(_, payload) => payload?.[0]?.payload.name} formatter={(value, _n, item) => [`${value}% · ${item?.payload.attempts} answers`, ""]} />}
        />
        <Bar dataKey="pct" fill="var(--chart-1)" barSize={14} radius={[0, 4, 4, 0]}>
          <LabelList dataKey="pct" position="right" formatter={(v: unknown) => `${v}%`} className="fill-foreground font-mono" fontSize={11} />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
