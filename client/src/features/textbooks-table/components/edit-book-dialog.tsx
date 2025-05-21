import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import EditUserForm from "./edit-book-dialog-form";
import { Book } from "../api/book";

function EditDialog(book: Book) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
        </DialogHeader>
        <EditUserForm {...book} />
      </DialogContent>
    </Dialog>
  );
}

export default EditDialog;
