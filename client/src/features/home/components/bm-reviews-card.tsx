import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { chartData } from "../data/review-barchart-data";

function ReviewsChart() {
  return (
    <ChartContainer config={{}} className="h-[30vh] max-w-[20vw]">
      <BarChart accessibilityLayer data={chartData} layout="vertical">
        <XAxis type="number" dataKey="Count" hide />
        <YAxis
          dataKey="rating"
          type="category"
          tickLine={false}
          axisLine={false}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar dataKey="Count" fillOpacity={0.4} radius={5} barSize={25} />
      </BarChart>
    </ChartContainer>
  );
}

function ReviewsCard() {
  return (
    <Card className="flex w-full flex-col border border-gray-800 bg-gray-900">
      <CardHeader>
        <CardTitle>Review Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <ReviewsChart />
      </CardContent>
    </Card>
  );
}

export default ReviewsCard;
