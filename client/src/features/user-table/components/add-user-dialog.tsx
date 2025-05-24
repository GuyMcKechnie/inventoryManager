import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import AddDialogForm from "./add-user-dialog-form";

function AddDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus />
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>
        <AddDialogForm />
      </DialogContent>
    </Dialog>
  );
}

export default AddDialog;
