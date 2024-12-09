import { Bar, BarChart as ReBarChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useZustandStore from "@/store/useStore";

export function BarChart() {
  const barChartData = useZustandStore.use.barChart();

  // Transform the data to match the chart's expected format
  const chartData = barChartData.map((song, index) => ({
    songName: song.songName.replace(/\s+/g, ""), // Remove spaces for key compatibility
    streams: song.streams,
    fill: `hsl(var(--chart-${index + 1}))`, // Random color from our 5 chart colors
  }));

  // Create dynamic chart config based on the data
  const chartConfig = {
    streams: {
      label: "Streams",
    },
    ...chartData.reduce(
      (acc, song) => ({
        ...acc,
        [song.songName]: {
          label: song.songName,
          color: song.fill,
        },
      }),
      {}
    ),
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col h-full justify-center">
      <CardHeader>
        <CardTitle>Top 5 Streamed Songs</CardTitle>
        <CardDescription>Over past 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ReBarChart
            data={chartData}
            layout="vertical"
            margin={{
              left: 5,
            }}
          >
            <YAxis
              dataKey="songName"
              type="category"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                const song = barChartData.find(
                  (s) => s.songName.replace(/\s+/g, "") === value
                );
                return song ? song.songName : value;
              }}
            />
            <XAxis type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="streams" radius={[4, 4, 4, 4]} fill="currentColor" />
          </ReBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Top 5 most-streamed songs over the past 30 days
        </div>
      </CardFooter>
    </Card>
  );
}
