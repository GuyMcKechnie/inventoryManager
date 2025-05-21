import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { User } from "../api/user";
import EditUserForm from "./edit-user-dialog-form";

function EditDialog(user: User) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        <EditUserForm {...user} />
      </DialogContent>
    </Dialog>
  );
}

export default EditDialog;
