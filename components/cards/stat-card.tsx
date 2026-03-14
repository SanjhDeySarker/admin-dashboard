import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: Props) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </CardContent>
    </Card>
  );
}