import { Card, KanbanBoard } from "@caldwell619/react-kanban";

export const orderBoard: KanbanBoard<Card> = {
  columns: [
    {
      id: 0,
      title: "Pending",
      cards: [
        {
          id: "593308aa-8769-4e6b-8c3b-1964e8d3764e",
          title: "Jean 123 25/05/2025",
          description: "English Advanced Guide",
        },
      ],
    },
    {
      id: 1,
      title: "Processing",
      cards: [],
    },
    {
      id: 2,
      title: "Packaged",
      cards: [],
    },
    {
      id: 3,
      title: "Delivered",
      cards: [],
    },
  ],
};
