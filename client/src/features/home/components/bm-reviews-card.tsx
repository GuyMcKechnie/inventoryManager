import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Typography } from "@mui/material";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { chartData } from "../data/review-barchart-data";

function ReviewsChart() {
  return (
    <Card className="border border-gray-800">
      <CardContent>
        <ChartContainer config={{}}>
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
      </CardContent>
    </Card>
  );
}

function ReviewsCard() {
  return (
    <div
      id="revenue-graph"
      className="w-full rounded-lg border border-gray-800 bg-gray-900 p-4"
    >
      <div className="flex items-center justify-between pb-6">
        <Typography variant="h6" className="!pb-0 !font-bold">
          Review Summary
        </Typography>
      </div>
      <ReviewsChart />
    </div>
  );
}

export default ReviewsCard;
