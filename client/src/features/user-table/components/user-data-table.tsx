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
import { exportToCSV } from "@/lib/export";
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
import { useEffect, useRef, useState } from "react";
import { getAllUsers } from "../api/user";
import AddDialog from "./add-user-dialog";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  updateUsers: () => void;
}

interface AboveTableComponentsProps {
  table: any;
  updateUsers: () => void;
}
function AboveTableComponents({
  table,
  updateUsers,
}: AboveTableComponentsProps) {
  const handleExport = () => {
    getAllUsers().then((users) => {
      exportToCSV(users ?? []);
    });
  };
  return (
    <div className="flex w-full items-center justify-between gap-4 pb-4">
      <div>
        <Typography
          variant="h6"
          className="font-medium whitespace-nowrap text-gray-400"
        >
          Users
        </Typography>
      </div>
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
        users
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
  updateUsers,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<any>([]);
  const userTable = useReactTable({
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

  const calculateRows = (height: number) => {
    return Math.round(height / 60);
  };

  const mainTableContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mainTableContainerRef.current) {
      const height = mainTableContainerRef.current.offsetHeight;
      userTable.setPageSize(Number(calculateRows(height)));
    }
  }, [data]);

  return (
    <div className="flex h-full w-full flex-col items-center">
      <AboveTableComponents table={userTable} updateUsers={updateUsers} />
      <div
        className="h-full w-full"
        id="main-table-container"
        ref={mainTableContainerRef}
      >
        <Table>
          <TableHeader className="border-x border-t border-gray-800">
            {userTable.getHeaderGroups().map((headerGroup) => (
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
            {userTable.getRowModel().rows?.length ? (
              userTable.getRowModel().rows.map((row) => (
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
      <BelowTableComponents {...userTable} />
    </div>
  );
}
