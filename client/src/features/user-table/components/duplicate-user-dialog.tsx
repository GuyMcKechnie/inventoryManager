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
import { duplicateUser, User } from "../api/user";

function handleDuplicate({
  user,
  setLoading,
}: {
  user: User;
  setLoading: (loading: boolean) => void;
}) {
  setLoading(true);
  setTimeout(() => {
    duplicateUser(user.userId)
      .then((response) => {
        if (response?.status === 200) {
          toast.success(`${user.firstName} duplicated successfully.`);
        } else {
          toast.error("Failed to duplicate user.");
        }
      })
      .catch((error) => {
        console.error("Error duplicating user:", error);
        toast.error("An error occurred while duplicating the user.");
      })
      .finally(() => setLoading(false));
  }, 1000);
}

function DuplicateDialog(user: User) {
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
            <span className="font-semibold text-red-500">{user.fullName}</span>
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
              onClick={() => handleDuplicate({ user, setLoading })}
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
