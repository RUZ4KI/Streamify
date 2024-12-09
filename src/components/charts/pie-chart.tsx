import { TrendingUp } from "lucide-react";
import { Pie, PieChart as RePieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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

export function PieChart() {
  const pieChart = useZustandStore.use.pieChart();

  const chartData = pieChart.map((item, index) => ({
    ...item,
    fill: `hsl(var(--chart-${index + 1}))`,
  }));
  const chartConfig = {
    amount: {
      label: "Amount",
    },
    subscriptions: {
      label: "Subscriptions",
      color: "hsl(var(--chart-1))",
    },
    ads: {
      label: "Ads",
      color: "hsl(var(--chart-2))",
    },
    merchandise: {
      label: "Merchandise",
      color: "hsl(var(--chart-3))",
    },
    streams: {
      label: "Streams",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Revenue Distribution</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 flex">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
          <RePieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="amount" nameKey="source" />
          </RePieChart>
        </ChartContainer>
      </CardContent>
      <CardContent className="flex flex-col gap-2 text-sm items-center justify-center">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing revenue for the last 12 months
        </div>
      </CardContent>
    </Card>
  );
}
