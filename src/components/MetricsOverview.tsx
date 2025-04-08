
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3Icon, MailIcon, UsersIcon, TrendingUpIcon } from "lucide-react";

const MetricsOverview = () => {
  // Demo data - in a real application, this would come from the processed CSV
  const metrics = {
    totalCampaigns: 12,
    totalOpens: 5482,
    averageOpenRate: 23.4,
    clickThroughRate: 3.8,
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
          <MailIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.totalCampaigns}</div>
          <p className="text-xs text-muted-foreground">
            +2 from last period
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Opens</CardTitle>
          <UsersIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.totalOpens.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            +12.5% from last period
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Open Rate</CardTitle>
          <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.averageOpenRate}%</div>
          <p className="text-xs text-muted-foreground">
            +1.2% from industry average
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Click-Through Rate</CardTitle>
          <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.clickThroughRate}%</div>
          <p className="text-xs text-muted-foreground">
            -0.5% from last period
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricsOverview;
