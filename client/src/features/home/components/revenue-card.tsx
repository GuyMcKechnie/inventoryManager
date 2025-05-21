import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
} from "@/components/ui/chart";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronRight } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { chartData } from "../data/revenue-areachart-data";

function RevenueChart() {
  return (
    <Card className="w-full border border-gray-800">
      <CardContent>
        <ChartContainer config={{}}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid opacity={0.1} vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="var(--color-gray-400)"
              fillOpacity={0.4}
              stroke="var(--color-gray-600)"
              stackId="b"
            />
            <Area
              dataKey="profit"
              type="natural"
              fill="var(--color-blue-500)"
              fillOpacity={0.4}
              stroke="var(--color-blue-700)"
              stackId="a"
            />
            <Area
              dataKey="expenses"
              type="natural"
              fill="var(--color-gray-200)"
              fillOpacity={0.4}
              stroke="var(--color-gray-400)"
              stackId="c"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function RevenueCard() {
  return (
    <div
      id="revenue-graph"
      className="w-full rounded-lg border border-gray-800 bg-gray-900 p-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-6">
        <div className="flex flex-row gap-4">
          <Typography variant="h6" className="!font-bold">
            Sales Performance
          </Typography>
        </div>
      </div>
      <RevenueChart />
      {/* Footer */}
      <div className="pt-4">
        <Button variant={"outline"}>
          See Report
          <ChevronRight />  
        </Button>
      </div>
    </div>
  );
}

export default RevenueCard;
