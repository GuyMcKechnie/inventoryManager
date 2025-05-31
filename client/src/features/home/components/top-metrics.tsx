import { v4 as uuid } from "uuid";
import { Package, ShoppingBag } from "lucide-react";
import React from "react";
import MetricCard from "../../../components/metric-card";
import { People } from "@mui/icons-material";

export interface Metric {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  growthPercentage: number;
  growthNumber: number;
  icon: React.ReactNode;
}

const Metrics = [
  {
    id: uuid(),
    title: "Total Sales",
    subtitle: "621 orders",
    metric: "R12,009,019",
    growthPercentage: 12.5,
    growthNumber: 1230,
    icon: <ShoppingBag />,
    path: "/sales",
  },
  {
    id: uuid(),
    title: "Customer Insights",
    subtitle: "188 reviews",
    metric: "2,190",
    growthPercentage: 19.1,
    growthNumber: 103,
    icon: <People />,
  },
  {
    id: uuid(),
    title: "Order Summary",
    subtitle: "32 cancelled",
    metric: "1,909",
    growthPercentage: -12.2,
    growthNumber: 46,
    icon: <Package />,
    path: "/sales",
  },
];

function TopMetrics() {
  return (
    <div className="flex items-center justify-between gap-4">
      {Metrics.map((metric: Metric) => (
        <MetricCard key={metric.id} {...metric} />
      ))}
    </div>
  );
}

export default TopMetrics;
