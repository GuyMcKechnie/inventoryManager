import { ChevronRight, TrendingDown, TrendingUp } from "lucide-react";
import { Typography } from "@mui/material";

export interface Metric {
  id: string;
  title: string;
  subtitle?: string;
  metric: string;
  growthPercentage: number;
  growthNumber: number;
  icon: React.ReactNode;
}

function MetricCard(metric: Metric) {
  return (
    <div className="flex w-full cursor-pointer flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900 p-4 px-6 transition-colors hover:border-blue-500">
      <div id="header" className="flex items-center justify-between gap-4">
        <div className="flex w-full gap-2">
          <span className="rounded-xl bg-gray-700 p-4">{metric.icon}</span>
          <div className="items-left flex flex-col justify-start">
            <Typography variant="h6" fontSize={18} className="text-nowrap">
              {metric.title}
            </Typography>
            <Typography variant="subtitle2" className="text-gray-400">
              {metric.subtitle}
            </Typography>
          </div>
        </div>
        <ChevronRight />
      </div>
      <Typography id="content" variant="h4" fontWeight={"bold"} fontSize={26}>
        {metric.metric}
      </Typography>
      <div id="footer" className="flex items-center gap-6 opacity-70">
        {metric.growthPercentage > 0 ? (
          <span className="flex gap-2 font-bold">
            <TrendingUp className="text-gray-400" />
            {metric.growthPercentage}%
          </span>
        ) : (
          <span className="flex gap-2 font-bold">
            <TrendingDown className="text-gray-400" />
            {metric.growthPercentage}%
          </span>
        )}
        <div className="flex gap-2">
          <span className="font-bold">+{metric.growthNumber}</span>
          <span className="text-gray-400">this week</span>
        </div>
      </div>
    </div>
  );
}

export default MetricCard;
