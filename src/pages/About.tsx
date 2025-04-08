
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BrainIcon, BarChart3Icon, MailIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-heading">
                About ChimpIntel
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                The intelligent analytics platform for Mailchimp users that transforms raw campaign data 
                into actionable marketing insights.
              </p>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                ChimpIntel was created to solve a common problem faced by email marketers: 
                how to effectively analyze campaign data and extract meaningful insights. 
                While Mailchimp provides basic analytics, truly understanding what drives 
                campaign performance requires deeper analysis.
              </p>
              <p className="text-muted-foreground mb-10">
                Our AI-powered platform analyzes your Mailchimp campaign exports to identify patterns, 
                trends, and opportunities that might otherwise go unnoticed. By combining data visualization 
                with artificial intelligence, we help marketers make data-driven decisions to improve their 
                email marketing strategy.
              </p>
              
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 rounded-full bg-primary/10 p-2">
                    <BarChart3Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Advanced Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      Visualize campaign performance with interactive charts and dashboards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 rounded-full bg-primary/10 p-2">
                    <BrainIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">AI-Powered Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      Get intelligent analysis of your campaigns with actionable takeaways
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 rounded-full bg-primary/10 p-2">
                    <TrendingUpIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Performance Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      Monitor key metrics over time and identify long-term trends
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 rounded-full bg-primary/10 p-2">
                    <MailIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Campaign Recommendations</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive personalized suggestions to improve future campaigns
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h2 className="text-xl font-bold mb-4">Ready to get started?</h2>
                <p className="text-muted-foreground mb-6">
                  Upload your Mailchimp campaign data and see what insights you can discover.
                </p>
                <Button asChild size="lg">
                  <Link to="/upload">Try It Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
