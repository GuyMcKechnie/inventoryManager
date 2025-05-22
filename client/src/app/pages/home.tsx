import BottomMetrics from "@/features/home/components/bottom-metrics";
import TopMetrics from "@/features/home/components/top-metrics";
import RecentOrders from "@/features/home/components/recent-orders";
import RevenueChart from "@/features/home/components/revenue-chart";

function Home() {
  return (
    <div
      id="dashboard"
      className="flex flex-col gap-4 overflow-y-scroll bg-gray-950 p-4"
    >
      <TopMetrics />
      <RevenueChart />
      <BottomMetrics />
    </div>
  );
}

export default Home;
