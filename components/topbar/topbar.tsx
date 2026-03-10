"use client";

import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-6">

      <input
        type="text"
        placeholder="Search..."
        className="border rounded-md px-3 py-2 w-64"
      />

      <div className="flex items-center gap-4">
        <Bell size={20} />
        <div className="font-medium">Admin</div>
      </div>

    </div>
  );
}