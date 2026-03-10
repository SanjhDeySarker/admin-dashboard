"use client";

import Link from "next/link";
import { LayoutDashboard, Users, Package, ShoppingCart, BarChart, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <nav className="space-y-3">

        <Link href="/dashboard" className="flex items-center gap-2">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/users" className="flex items-center gap-2">
          <Users size={18} />
          Users
        </Link>

        <Link href="/products" className="flex items-center gap-2">
          <Package size={18} />
          Products
        </Link>

        <Link href="/orders" className="flex items-center gap-2">
          <ShoppingCart size={18} />
          Orders
        </Link>

        <Link href="/analytics" className="flex items-center gap-2">
          <BarChart size={18} />
          Analytics
        </Link>

        <Link href="/settings" className="flex items-center gap-2">
          <Settings size={18} />
          Settings
        </Link>

      </nav>
    </div>
  );
}