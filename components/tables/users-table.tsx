"use client";

import { users } from "@/lib/users-data";
import { Pencil, Trash } from "lucide-react";

export default function UsersTable() {
  return (
    <div className="bg-white rounded-lg border">

      <table className="w-full">

        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Role</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (
            <tr key={user.id} className="border-t">

              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.role}</td>
              <td className="p-4">{user.status}</td>

              <td className="p-4 flex gap-3">

                <button className="text-blue-500">
                  <Pencil size={16} />
                </button>

                <button className="text-red-500">
                  <Trash size={16} />
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}