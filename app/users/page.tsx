import UsersTable from "@/components/tables/users-table";

export default function UsersPage() {
  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">Users</h1>

        <button className="bg-black text-white px-4 py-2 rounded-md">
          Add User
        </button>

      </div>

      <UsersTable />

    </div>
  );
}