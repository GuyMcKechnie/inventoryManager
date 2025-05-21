import OrderStatusCard from "./bm-orderstatus-card";
import ReviewsCard from "./bm-reviews-card";
import SiteVisitsCard from "./bm-site-card";

function BottomMetrics() {
  return (
    <div className="flex items-center justify-between gap-4">
      <SiteVisitsCard />
      <OrderStatusCard />
      <ReviewsCard />
    </div>
  );
}

export default BottomMetrics;
