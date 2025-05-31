import { getActiveOrders, Order } from "@/features/sales/api/orders";
import Kanban from "@/features/sales/components/kanban";
import TopMetrics from "@/features/sales/components/top-metrics";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  const updateOrders = async () => {
    setLoading(true);
    setTimeout(async () => {
      await getActiveOrders()
        .then((response) => {
          console.log(response);
          setOrders(response ?? []);
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
          toast.error("An error occurred while fetching orders.");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    updateOrders();
  }, []);

  return (
    <div
      id="orders"
      className="flex h-full max-h-screen flex-col gap-4 bg-gray-950 p-4"
    >
      <TopMetrics />
      {loading ? (
        <div className="flex h-full w-full items-center justify-center">
          <Loader />
        </div>
      ) : (
        <Kanban orders={orders} />
      )}
    </div>
  );
}

export default Orders;
