import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTitle,
} from "@radix-ui/react-alert-dialog";

import { Button } from "@/components/ui/button";
import { Copy, Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Book, duplicateBook } from "../api/book";

function handleDuplicate({
  book,
  setLoading,
}: {
  book: Book;
  setLoading: (loading: boolean) => void;
}) {
  setLoading(true);
  setTimeout(() => {
    duplicateBook(book.isbn)
      .then((response) => {
        if (response?.status === 200) {
          toast.success(`${book.title} duplicated successfully.`);
        } else {
          toast.error("Failed to duplicate book.");
        }
      })
      .catch((error) => {
        console.error("Error duplicating book:", error);
        toast.error("An error occurred while duplicating the book.");
      })
      .finally(() => setLoading(false));
  }, 1000);
}

function DuplicateDialog(book: Book) {
  const [loading, setLoading] = useState(false);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          {loading ? <Loader className="animate-spin" /> : <Copy />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="w-full">
          <AlertDialogTitle>
            Duplicate{" "}
            <span className="font-semibold text-red-500">{book.title}</span>
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to duplicate this user? This action cannot be
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
              onClick={() => handleDuplicate({ book, setLoading })}
            >
              Duplicate
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DuplicateDialog;
