
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardHeader from "@/components/DashboardHeader";
import MetricsOverview from "@/components/MetricsOverview";
import PerformanceChart from "@/components/PerformanceChart";
import AiInsights from "@/components/AiInsights";
import RecommendationList from "@/components/RecommendationList";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";

const Dashboard = () => {
  const [hasData, setHasData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if campaign data exists in localStorage
    const campaignData = localStorage.getItem("campaignData");
    setHasData(!!campaignData);
  }, []);

  if (!hasData) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md p-6">
            <div className="mx-auto rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mb-4">
              <UploadIcon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">No Campaign Data Found</h1>
            <p className="text-muted-foreground mb-6">
              Upload a Mailchimp campaign CSV file to see your analytics dashboard 
              and AI-powered insights.
            </p>
            <Button onClick={() => navigate("/upload")}>Upload Campaign Data</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-6 px-4 lg:px-8">
        <div className="max-w-screen-xl mx-auto space-y-6">
          <DashboardHeader />
          <MetricsOverview />
          <div className="grid gap-4 md:grid-cols-4">
            <PerformanceChart />
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <AiInsights />
            <RecommendationList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
