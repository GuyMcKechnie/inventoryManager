import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { Book } from "../api/book";
import DeleteDialog from "./delete-book-dialog";
import DuplicateDialog from "./duplicate-book-dialog";
import EditDialog from "./edit-book-dialog";

const handleCopy = (data: string) => {
  navigator.clipboard.writeText(data);
  toast.info("Copied to clipboard.");
};

export const columns: ColumnDef<Book>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    enableColumnFilter: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="!p-0 text-xs font-medium uppercase"
        >
          Title
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Button
          className="group max-w-[250px] justify-start"
          variant="link"
          onClick={() => handleCopy(row.original.title)}
        >
          <span className="truncate">{row.original.title}</span>
          <Clipboard className="opacity-0 transition-opacity group-hover:opacity-100" />
        </Button>
      );
    },
  },
  {
    accessorKey: "grade",
    header: "Grade",
    enableGlobalFilter: true,
    cell: ({ row }) => {
      return (
        <div className="flex flex-col items-start justify-start">
          {row.original.grade}
        </div>
      );
    },
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
    enableGlobalFilter: true,
    cell: ({ row }) => {
      return (
        <div className="flex flex-col items-start justify-start">
          <Button
            className="group -mt-2 -mb-2"
            variant="link"
            onClick={() => handleCopy(row.original.isbn)}
          >
            {row.original.isbn}
            <Clipboard className="opacity-0 transition-opacity group-hover:opacity-100" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "newPrice",
    header: "New Price",
    enableGlobalFilter: true,
    cell: ({ row }) => {
      return (
        <div className="flex flex-col items-start justify-start">
          <Button className="group -mt-2 -mb-2" variant="link">
            R{row.original.newPrice}
            <Clipboard className="opacity-0 transition-opacity group-hover:opacity-100" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "usedPrice",
    header: "Used Price",
    enableGlobalFilter: true,
    cell: ({ row }) => {
      return (
        <div className="flex flex-col items-start justify-start">
          <Button className="group -mt-2 -mb-2" variant="link">
            R{row.original.usedPrice}
            <Clipboard className="opacity-0 transition-opacity group-hover:opacity-100" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "costPrice",
    header: "Cost Price",
    enableGlobalFilter: true,
    cell: ({ row }) => {
      return (
        <div className="flex flex-col items-start justify-start">
          <Button className="group -mt-2 -mb-2" variant="link">
            R{row.original.costPrice}
            <Clipboard className="opacity-0 transition-opacity group-hover:opacity-100" />
          </Button>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-end gap-2">
          <EditDialog {...row.original} />
          <DuplicateDialog {...row.original} />
          <DeleteDialog {...row.original} />
        </div>
      );
    },
  },
];
