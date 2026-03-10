export default function UsersPage() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <table className="w-full border">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-3 border">John</td>
            <td className="p-3 border">john@email.com</td>
            <td className="p-3 border">Admin</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}