import Kanban from "@/features/sales/components/kankan";
import TopMetrics from "@/features/sales/components/top-metrics";

function Sales() {
  return (
    <div
      id="sales"
      className="flex h-full flex-col gap-4 overflow-y-scroll bg-gray-950 p-4"
    >
      <TopMetrics />
      <Kanban />
    </div>
  );
}

export default Sales;
