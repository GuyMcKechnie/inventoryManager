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

function RecentOrders() {
  return (
    <div
      id="recent-orders"
      className="w-full max-w-1/2 rounded-lg border border-gray-800 bg-gray-900 p-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-6">
        <div className="flex flex-row gap-4">
          <Typography variant="h6" className="!font-bold">
            Recent Orders
          </Typography>
        </div>
      </div>

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

export default RecentOrders;
