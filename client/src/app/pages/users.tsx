import { getAllUsers, User } from "@/features/user-table/api/user";
import { columns } from "@/features/user-table/components/user-columns";
import { DataTable } from "@/features/user-table/components/user-data-table";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users ?? []);
    });
  }, []);

  return (
    <div
      id="users"
      className="flex h-full w-full flex-col gap-4 overflow-y-scroll bg-gray-950 p-6"
    >
      <div className="h-full rounded-lg border border-gray-800 bg-gray-900 p-6">
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  );
}

export default Users;
