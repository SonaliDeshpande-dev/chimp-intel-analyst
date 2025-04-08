
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PerformanceChart = () => {
  // Demo data - in a real application, this would come from the processed CSV
  const data = [
    {
      name: "Jan 22",
      openRate: 25.4,
      clickRate: 4.0,
    },
    {
      name: "Feb 22",
      openRate: 28.1,
      clickRate: 4.3,
    },
    {
      name: "Mar 22",
      openRate: 26.8,
      clickRate: 3.9,
    },
    {
      name: "Apr 22",
      openRate: 22.3,
      clickRate: 3.2,
    },
    {
      name: "May 22",
      openRate: 30.5,
      clickRate: 5.1,
    },
    {
      name: "Jun 22",
      openRate: 27.7,
      clickRate: 4.5,
    },
    {
      name: "Jul 22",
      openRate: 23.4,
      clickRate: 3.8,
    },
  ];

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Campaign Performance</CardTitle>
        <CardDescription>
          Open rate and click-through rate over time
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="openRate" name="Open Rate %" fill="#0284c7" radius={[4, 4, 0, 0]} />
              <Bar dataKey="clickRate" name="Click Rate %" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
