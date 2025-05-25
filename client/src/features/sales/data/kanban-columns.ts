import { Card, KanbanBoard } from "@caldwell619/react-kanban";

export const orderBoard: KanbanBoard<Card> = {
  columns: [
    {
      id: 1,
      title: "Pending",
      cards: [],
    },
    {
      id: 2,
      title: "Processing",
      cards: [],
    },
    {
      id: 3,
      title: "Packaged",
      cards: [],
    },
    {
      id: 4,
      title: "Delivered",
      cards: [],
    },
  ],
};
