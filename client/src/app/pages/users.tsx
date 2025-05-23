import { getAllUsers, User } from "@/features/user-table/api/user";
import { columns } from "@/features/user-table/components/user-columns";
import { DataTable } from "@/features/user-table/components/user-data-table";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const updateUsers = async () => {
    setLoading(true);
    setTimeout(async () => {
      const apiResponse = await getAllUsers()
        .then((response) => {
          console.log(response);
          setUsers(response ?? []);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          toast.error("An error occurred while fetching users.");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    updateUsers();
  }, []);

  return (
    <div
      id="users"
      className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-y-scroll bg-gray-950 p-6"
    >
      <div className="flex h-full w-full items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-6">
        {loading ? (
          <Loader className="animate-spin" />
        ) : (
          <DataTable columns={columns} data={users} updateUsers={updateUsers} />
        )}
      </div>
    </div>
  );
}

export default Users;
