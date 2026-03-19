"use client";

import { orders } from "@/lib/orders-data";

export default function OrdersTable() {
  return (
    <div className="bg-white rounded-lg border">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Order ID</th>
            <th className="p-4">Customer</th>
            <th className="p-4">Product</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Status</th>
            <th className="p-4">Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t">

              <td className="p-4">{order.id}</td>
              <td className="p-4">{order.customer}</td>
              <td className="p-4">{order.product}</td>
              <td className="p-4">{order.amount}</td>

              <td className="p-4">
                <span className="px-2 py-1 text-xs bg-gray-200 rounded">
                  {order.status}
                </span>
              </td>

              <td className="p-4">{order.date}</td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}