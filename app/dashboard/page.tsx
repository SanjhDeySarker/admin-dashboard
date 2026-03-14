import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-4 gap-6">

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-gray-500">Total Users</p>
          <h3 className="text-2xl font-bold">1,240</h3>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-gray-500">Revenue</p>
          <h3 className="text-2xl font-bold">$12,400</h3>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-gray-500">Orders</p>
          <h3 className="text-2xl font-bold">320</h3>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-gray-500">Growth</p>
          <h3 className="text-2xl font-bold">18%</h3>
        </CardContent>
      </Card>

    </div>
  );
}