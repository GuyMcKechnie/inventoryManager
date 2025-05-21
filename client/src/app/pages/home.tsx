import BottomMetrics from "@/features/home/components/bottom-metrics";
import GradeCard from "@/features/home/components/rc-grade-card";
import RevenueCard from "@/features/home/components/revenue-card";
import SchoolCard from "@/features/home/components/rc-school-card";
import TopMetrics from "@/features/home/components/top-metrics";

function Home() {
  return (
    <div
      id="overview"
      className="flex h-full w-full flex-col gap-4 overflow-y-scroll bg-gray-950 p-6"
    >
      <TopMetrics />
      <div className="flex items-start justify-between gap-4">
        <RevenueCard />
        <div className="flex h-full min-w-1/4 flex-col justify-between gap-4">
          <GradeCard />
          <SchoolCard />
        </div>
      </div>
      <BottomMetrics />
    </div>
  );
}

export default Home;
