
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBarIcon, TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// In a real application, these would come from an API or database
const campaignMetrics = [
  {
    metric: "Open Rate",
    yourValue: 23.4,
    industryAvg: 21.2,
    topPerformers: 35.6,
    comparison: "above-average", // above-average, below-average, excellent
  },
  {
    metric: "Click-Through Rate",
    yourValue: 3.8,
    industryAvg: 2.6,
    topPerformers: 5.1,
    comparison: "above-average",
  },
  {
    metric: "Click-to-Open Rate",
    yourValue: 16.2,
    industryAvg: 12.3,
    topPerformers: 18.9,
    comparison: "above-average",
  },
  {
    metric: "Bounce Rate",
    yourValue: 2.1,
    industryAvg: 1.0,
    topPerformers: 0.5,
    comparison: "below-average",
  },
  {
    metric: "Unsubscribe Rate",
    yourValue: 0.28,
    industryAvg: 0.25,
    topPerformers: 0.10,
    comparison: "average",
  },
  {
    metric: "Spam Complaints",
    yourValue: 0.02,
    industryAvg: 0.01,
    topPerformers: 0.001,
    comparison: "below-average",
  },
  {
    metric: "List Growth Rate",
    yourValue: 3.2,
    industryAvg: 2.5,
    topPerformers: 5.0,
    comparison: "above-average",
  },
  {
    metric: "Email Delivery Rate",
    yourValue: 98.4,
    industryAvg: 98.0,
    topPerformers: 99.5,
    comparison: "average",
  },
  {
    metric: "Revenue per Email",
    yourValue: 0.42,
    industryAvg: 0.35,
    topPerformers: 0.85,
    comparison: "above-average",
  },
];

const CampaignInsightsTable = () => {
  const getComparisonBadge = (comparison: string) => {
    switch (comparison) {
      case "excellent":
        return <Badge className="bg-green-500">Excellent</Badge>;
      case "above-average":
        return <Badge className="bg-blue-500">Above Average</Badge>;
      case "average":
        return <Badge className="bg-gray-500">Average</Badge>;
      case "below-average":
        return <Badge className="bg-amber-500">Below Average</Badge>;
      default:
        return <Badge className="bg-gray-500">Average</Badge>;
    }
  };

  const getComparisonIcon = (yourValue: number, industryAvg: number) => {
    const percentDiff = ((yourValue - industryAvg) / industryAvg) * 100;
    
    if (percentDiff >= 10) {
      return <TrendingUpIcon className="h-4 w-4 text-green-500" />;
    } else if (percentDiff <= -10) {
      return <TrendingDownIcon className="h-4 w-4 text-red-500" />;
    } else {
      return <ChartBarIcon className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChartBarIcon className="h-5 w-5 text-primary" />
          Campaign Performance Benchmarks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead className="text-right">Your Value</TableHead>
                <TableHead className="text-right">Industry Average</TableHead>
                <TableHead className="text-right">Top Performers</TableHead>
                <TableHead>Comparison</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaignMetrics.map((metric) => (
                <TableRow key={metric.metric}>
                  <TableCell className="font-medium">{metric.metric}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      {getComparisonIcon(metric.yourValue, metric.industryAvg)}
                      {metric.yourValue}%
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{metric.industryAvg}%</TableCell>
                  <TableCell className="text-right">{metric.topPerformers}%</TableCell>
                  <TableCell>{getComparisonBadge(metric.comparison)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          <p>
            <span className="font-medium">Source:</span> Email Marketing Benchmarks 2024. Data updated quarterly based on industry analytics across various sectors.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignInsightsTable;
