import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTitle,
} from "@radix-ui/react-alert-dialog";
import { Loader, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Book, deleteBook } from "../api/book";
function handleDelete({
  book,
  setLoading,
}: {
  book: Book;
  setLoading: (loading: boolean) => void;
}) {
  setLoading(true);
  setTimeout(() => {
    deleteBook(book.isbn)
      .then((response) => {
        if (response?.status === 200) {
          toast.success(`${book.title} deleted successfully.`);
        } else {
          toast.error("Failed to delete book.");
        }
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
        toast.error("An error occurred while deleting the book.");
      })
      .finally(() => setLoading(false));
  }, 1000);
}

function DeleteDialog(book: Book) {
  const [loading, setLoading] = useState(false);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          {loading ? <Loader className="animate-spin" /> : <Trash />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="w-full">
          <AlertDialogTitle>
            Delete{" "}
            <span className="font-semibold text-red-500">{book.title}</span>
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this user? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              onClick={() => handleDelete({ book, setLoading })}
            >
              Delete
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteDialog;
