"use client";

import { products } from "@/lib/products-data";

export default function ProductsTable() {
  return (
    <div className="bg-white rounded-lg border">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Product</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price</th>
            <th className="p-4">Stock</th>
          </tr>
        </thead>

        <tbody>

          {products.map((product) => (
            <tr key={product.id} className="border-t">

              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.category}</td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">{product.stock}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}