import { Book, getAllBooks } from "@/features/inventory-table/api/book";
import { columns } from "@/features/inventory-table/components/book-columns";
import { DataTable } from "@/features/inventory-table/components/book-data-table";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function Books() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const updateBooks = async () => {
    setLoading(true);
    setTimeout(async () => {
      const apiResponse = await getAllBooks()
        .then((response) => {
          console.log(response);
          setBooks(response ?? []);
        })
        .catch((error) => {
          console.error("Error fetching textbooks:", error);
          toast.error("An error occurred while fetching textbooks.");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    updateBooks();
  }, []);

  return (
    <div
      id="textbooks"
      className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-y-scroll bg-gray-950 p-6"
    >
      <div className="flex h-full w-full items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-6">
        {loading ? (
          <Loader className="animate-spin" />
        ) : (
          <DataTable columns={columns} data={books} updateBooks={updateBooks} />
        )}
      </div>
    </div>
  );
}

export default Books;
