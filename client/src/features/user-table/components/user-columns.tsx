import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Chip } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Check, Clipboard, X } from "lucide-react";
import { toast } from "sonner";
import { User } from "../api/user";
import DeleteDialog from "./delete-user-dialog";
import DuplicateDialog from "./duplicate-user-dialog";
import EditDialog from "./edit-user-dialog";

const booleanChip = (boolean: boolean) => {
  if (boolean) {
    return (
      <Chip
        className="!max-w-xs !border !bg-green-500/10 !p-2 !font-bold !text-green-500"
        label={<Check size={18} />}
      />
    );
  } else {
    return (
      <Chip
        className="!max-w-xs !border !bg-red-500/10 !p-2 !font-bold !text-red-500"
        label={<X size={18} />}
      />
    );
  }
};

const handleCopy = (data: string) => {
  navigator.clipboard.writeText(data);
  toast.info("Copied to clipboard.");
};

export const columns: ColumnDef<User>[] = [
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
    accessorKey: "fullName",
    enableColumnFilter: true,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="!p-0 text-xs font-medium uppercase"
        >
          Full Name
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Button
          className="group"
          variant="link"
          onClick={() => handleCopy(row.original.fullName)}
        >
          {row.original.fullName}
          <Clipboard className="opacity-0 transition-opacity group-hover:opacity-100" />
        </Button>
      );
    },
  },
  {
    accessorKey: "contactInformation",
    header: "Contact Information",
    enableGlobalFilter: true,
    cell: ({ row }) => {
      return (
        <div className="flex flex-col items-start justify-start">
          <Button
            className="group -mt-2 -mb-2"
            variant="link"
            onClick={() => handleCopy(row.original.email)}
          >
            {row.original.email}
            <Clipboard className="opacity-0 transition-opacity group-hover:opacity-100" />
          </Button>
          <Button
            className="group -mt-2 -mb-2"
            variant="link"
            onClick={() => handleCopy(row.original.cellphone)}
          >
            {row.original.cellphone}
            <Clipboard className="opacity-0 transition-opacity group-hover:opacity-100" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "allowsMarketing",
    header: "Marketing",
    cell: ({ row }) => {
      const allowsMarketing: boolean = row.original.allowsMarketing;
      return booleanChip(allowsMarketing);
    },
  },
  {
    accessorKey: "isBuyer",
    header: "Buyer",
    cell: ({ row }) => {
      let isBuyer: boolean = false;
      if (row.original.type == 1 || row.original.type == 2) {
        isBuyer = true;
      }
      return booleanChip(isBuyer);
    },
  },
  {
    accessorKey: "isSeller",
    header: "Seller",
    cell: ({ row }) => {
      let isSeller: boolean = false;
      if (row.original.type == 0 || row.original.type == 2) {
        isSeller = true;
      }
      return booleanChip(isSeller);
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
