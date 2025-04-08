
import { ArrowRightIcon, BarChart3Icon, BrainIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl gradient-heading animate-fade-in">
                Turn Campaign Data Into Actionable Insights
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-slide-up">
                Upload your Mailchimp campaign data and let our AI analyze it for you. Get detailed insights, trends, and recommendations to improve your email marketing performance.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Link to="/upload">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="rounded-full bg-primary/10 p-2">
                  <BarChart3Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Data Visualization</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Beautiful charts and graphs to visualize your campaign performance
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="rounded-full bg-primary/10 p-2">
                  <BrainIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Analysis</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Intelligent insights and recommendations from our AI engine
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="rounded-full bg-primary/10 p-2">
                  <MailIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Campaign Tracking</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Track the performance of all your email campaigns in one place
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                <div className="rounded-full bg-primary/10 p-2">
                  <ArrowRightIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Action Items</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Get practical next steps to improve your future campaigns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
