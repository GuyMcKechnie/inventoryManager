import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Typography } from "@mui/material";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { getSiteTraffic } from "../api/home";
import { useEffect, useState } from "react";

type TrafficData = {
  month: string;
  visits: number;
};
function SiteChart() {
  const [siteTraffic, setSiteTraffic] = useState<TrafficData[] | undefined>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getSiteTraffic()
        .then((response) => {
          if (response?.status === 200) {
            console.log("Site traffic data:", response.data);
            setSiteTraffic(response.data.slice(-6));
          } else {
            console.error("Failed to fetch site traffic data.");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, []);
  return (
    <Card className="w-full border border-gray-800">
      <CardContent>
        <ChartContainer config={{}}>
          {loading ? (
            <div className="flex h-full w-full items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : (
            <BarChart
              accessibilityLayer
              data={siteTraffic}
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid opacity={0.1} vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                label={"Month"}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="visits"
                fill="var(--color-blue-500)"
                fillOpacity={0.4}
                label="Visits"
                stroke="var(--color-blue-500)"
                radius={8}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-gray-400"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          )}
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function SiteVisitsCard() {
  return (
    <div
      id="revenue-graph"
      className="w-full rounded-lg border border-gray-800 bg-gray-900 p-4"
    >
      <div className="flex items-center justify-between pb-6">
        <div className="flex flex-row gap-4">
          <Typography variant="h6" className="!font-bold">
            Site Visits
          </Typography>
        </div>
      </div>
      <SiteChart />
    </div>
  );
}

export default SiteVisitsCard;
