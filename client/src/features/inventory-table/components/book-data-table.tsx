import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Typography } from "@mui/material";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  ActivityIcon,
  ArrowLeftToLine,
  ArrowRightToLine,
  ChevronLeft,
  ChevronRight,
  Upload,
} from "lucide-react";
import { useState } from "react";
import { exportToCSV } from "../../../lib/export";
import { getAllBooks } from "../api/book";
import AddDialog from "./add-book-dialog";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  updateBooks: () => void;
}
interface AboveTableComponentsProps {
  table: any;
  updateBooks: () => void;
}

function AboveTableComponents({
  table,
  updateBooks,
}: AboveTableComponentsProps) {
  const handleExport = () => {
    getAllBooks().then((books) => {
      exportToCSV(books ?? []);
    });
  };

  return (
    <div className="flex w-full items-center justify-between gap-4 pb-4">
      <Typography
        variant="h6"
        className="font-medium whitespace-nowrap text-gray-400"
      >
        Textbooks
      </Typography>
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search..."
          className="w-xs"
          onChange={(event) =>
            table.setGlobalFilter(String(event.target.value))
          }
        />
        <AddDialog />
        <Button variant={"outline"} onClick={handleExport}>
          <Upload /> Export
        </Button>
        <Button variant="outline">
          <ActivityIcon /> Bulk Actions
        </Button>
      </div>
    </div>
  );
}
function BelowTableComponents(table: any) {
  return (
    <div className="flex w-full items-center justify-between px-2 py-4">
      <Typography className="font-medium whitespace-nowrap text-gray-400">
        Showing{" "}
        <span className="font-bold text-gray-200">
          {Math.round(
            table.getFilteredRowModel().rows.length / table.getPageCount(),
          )}
        </span>{" "}
        of{" "}
        <span className="font-bold text-gray-200">
          {table.getFilteredRowModel().rows.length}
        </span>{" "}
        textbooks
      </Typography>
      <div className="flex items-center justify-between gap-2">
        <Typography className="font-medium whitespace-nowrap text-gray-400">
          Page{" "}
          <span className="font-bold text-gray-200">
            {table.getState().pagination.pageIndex + 1}
          </span>{" "}
          of{" "}
          <span className="font-bold text-gray-200">
            {table.getPageCount()}
          </span>
        </Typography>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowLeftToLine />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ArrowRightToLine />
        </Button>
      </div>
    </div>
  );
}

export function DataTable<TData, TValue>({
  columns,
  data,
  updateBooks,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<any>([]);
  const bookTable = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    autoResetPageIndex: true,
    globalFilterFn: "includesString",
    state: {
      sorting,
      rowSelection,
      columnFilters,
      globalFilter,
    },
  });

  return (
    <div className="flex h-full flex-col items-center">
      <AboveTableComponents table={bookTable} updateBooks={updateBooks} />
      <div className="h-full w-full">
        <Table>
          <TableHeader className="border-x border-t border-gray-800">
            {bookTable.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="border border-gray-800">
            {bookTable.getRowModel().rows?.length ? (
              bookTable.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <BelowTableComponents {...bookTable} />
    </div>
  );
}
