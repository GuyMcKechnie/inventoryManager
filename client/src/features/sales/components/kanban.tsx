import {
  Card,
  ControlledBoard,
  KanbanBoard,
  moveCard,
  OnDragEndNotification,
} from "@/components/kanban";
import "@/components/kanban/styles.css";
import { Button } from "@/components/ui/button";
import { Typography } from "@mui/material";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Order, updateOrderStatus } from "../api/sales";
import { createKanban } from "../helper/create-kanban";

function Kanban({ orders }: { orders: Order[] }) {
  const [board, setBoard] = useState<KanbanBoard<Card>>(createKanban(orders));
  // Kanban Cards
  const handleCardMove: OnDragEndNotification<Card> = (
    _card,
    source,
    destination,
  ) => {
    setBoard((currentBoard) => {
      return moveCard(currentBoard, source, destination);
    });
    updateOrderStatus(_card.orderUUID, destination?.toColumnId);
  };

  return (
    <div className="flex h-full max-h-[42rem] flex-col gap-6 rounded-lg border border-gray-800 bg-gray-900 p-6">
      <div className="flex items-center justify-between">
        <Typography variant="h6">Order Status</Typography>
        <Button>
          <Plus />
          New Order
        </Button>
      </div>
      <ControlledBoard
        disableColumnDrag={true}
        allowAddCard={false}
        allowRemoveCard={false}
        allowRemoveColumn={false}
        allowRenameColumn={false}
        onCardDragEnd={handleCardMove}
      >
        {board}
      </ControlledBoard>
    </div>
  );
}
export default Kanban;
