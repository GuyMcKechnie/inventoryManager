import {
  KanbanBoard,
  ControlledBoard,
  Card,
  moveCard,
  OnDragEndNotification,
} from "@caldwell619/react-kanban";
import { useState } from "react";
import { orderBoard } from "../data/kanban-columns";
import "@caldwell619/react-kanban/dist/styles.css";
import { Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function Kanban() {
  const [board, setBoard] = useState<KanbanBoard<Card>>(orderBoard);
  const handleCardMove: OnDragEndNotification<Card> = (
    _card,
    source,
    destination,
  ) => {
    setBoard((currentBoard) => {
      return moveCard(currentBoard, source, destination);
    });
  };
  return (
    <div className="flex h-full flex-col gap-6 rounded-lg border border-gray-800 bg-gray-900 p-6">
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
