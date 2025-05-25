import MetricCard, { Metric } from "@/components/metric-card";
import { Button } from "@/components/ui/button";
import { People } from "@mui/icons-material";
import { Package, Plus, ShoppingBag } from "lucide-react";
import { v4 as uuid } from "uuid";

const Metrics = [
  {
    id: uuid(),
    title: "Sales",
    subtitle: "12 returns",
    metric: "R1,000",
    growthPercentage: 12.5,
    growthNumber: 2,
    icon: <ShoppingBag />,
  },
  {
    id: uuid(),
    title: "Customer Savings",
    subtitle: "188 reviews",
    metric: "2,190",
    growthPercentage: 19.1,
    growthNumber: 103,
    icon: <People />,
  },
  {
    id: uuid(),
    title: "Orders",
    subtitle: "3 cancellations",
    metric: "1,909",
    growthPercentage: -12.2,
    growthNumber: 46,
    icon: <Package />,
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
