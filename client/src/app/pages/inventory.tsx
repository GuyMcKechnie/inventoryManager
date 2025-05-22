import { Book, getAllBooks } from "@/features/inventory-table/api/book";
import { columns } from "@/features/inventory-table/components/book-columns";
import { DataTable } from "@/features/inventory-table/components/book-data-table";
import { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const updateBooks = async () => {
    const books = await getAllBooks();
    setBooks(books ?? []);
  };
  useEffect(() => {
    updateBooks();
  }, []);
  return (
    <div
      id="books"
      className="flex h-full w-full flex-col gap-4 overflow-y-scroll bg-gray-950 p-6"
    >
      <div className="h-full rounded-lg border border-gray-800 bg-gray-900 p-6">
        <DataTable columns={columns} data={books} updateBooks={updateBooks} />
      </div>
    </div>
  );
}

export default Books;
