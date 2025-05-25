import { Card, KanbanBoard } from "@caldwell619/react-kanban";
import { Order } from "../api/sales";
import { kanbanColumns } from "../data/kanban-columns";
import { columns } from "@/features/user-table/components/user-columns";

export const createKanban = (orders: Order[]): KanbanBoard<Card> => {
  let board: KanbanBoard<Card> = { columns: [] };
  board.columns = kanbanColumns;
  orders.forEach((order) => {
    const card: Card = {
      id: order.orderUUID,
      title: `Order from Buyer ID ${order.buyerId} on ${new Date(order.date).toLocaleDateString()}`,
      description: order.location,
    };
    const column = board.columns.find((column) => column.id === order.status);
    if (column) {
      column.cards.push(card);
    } else {
      console.warn(`No column found for status: ${order.status}`);
    }
  });
  return board;
};
