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
import { deleteUser, User } from "../api/user";

function handleDelete({
  user,
  setLoading,
}: {
  user: User;
  setLoading: (loading: boolean) => void;
}) {
  setLoading(true);
  setTimeout(() => {
    deleteUser(user.userId)
      .then((response) => {
        if (response?.status === 200) {
          toast.success(`${user.firstName} deleted successfully.`);
        } else {
          toast.error("Failed to delete user.");
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        toast.error("An error occurred while deleting the user.");
      })
      .finally(() => setLoading(false));
  }, 1000);
}

function DeleteDialog(user: User) {
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
            <span className="font-semibold text-red-500">{user.fullName}</span>
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
              onClick={() => handleDelete({ user, setLoading })}
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
