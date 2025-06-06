
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Lightbulb, TrendingUpIcon } from "lucide-react";

const RecommendationList = () => {
  // In a real application, these recommendations would be generated by an AI based on benchmark comparisons
  const recommendations = [
    {
      title: "Reduce Bounce Rate (High Priority)",
      description: "Your bounce rate (2.1%) is 110% higher than industry average (1.0%). Clean your list by removing inactive subscribers and validating emails.",
      priority: "high",
      metric: "Bounce Rate",
      benchmarkComparison: "110% above average",
    },
    {
      title: "Address Spam Complaints (High Priority)",
      description: "Spam complaints (0.02%) are double the industry average (0.01%). Implement double opt-in and review email frequency.",
      priority: "high",
      metric: "Spam Complaints",
      benchmarkComparison: "100% above average",
    },
    {
      title: "Optimize Send Times (Medium Priority)",
      description: "While your open rate (23.4%) exceeds industry average (21.2%), it's still 34% below top performers (35.6%). Test different send times.",
      priority: "medium",
      metric: "Open Rate",
      benchmarkComparison: "34% below top performers",
    },
    {
      title: "Enhance Revenue Per Email (Medium Priority)",
      description: "Your revenue per email ($0.42) is 20% above industry average ($0.35) but 51% below top performers ($0.85). Test stronger CTAs and offers.",
      priority: "medium",
      metric: "Revenue per Email",
      benchmarkComparison: "51% below top performers",
    },
  ];

  return (
    <Card className="col-span-4 lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>
          <div className="flex items-center">
            <Lightbulb className="mr-2 h-5 w-5 text-primary" />
            Benchmark-Based Recommendations
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, i) => (
            <div
              key={i}
              className={`flex gap-2 p-3 rounded-md ${
                rec.priority === "high" ? "bg-amber-50 border-amber-100" : "bg-blue-50 border-blue-100"
              }`}
            >
              <div className="shrink-0 w-5 h-5 mt-0.5">
                <div className={`h-5 w-5 rounded-full flex items-center justify-center ${
                  rec.priority === "high" ? "bg-amber-100" : "bg-blue-100"
                }`}>
                  <Check className="h-3 w-3 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-medium text-sm">{rec.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{rec.description}</p>
                <div className="flex items-center mt-2 text-xs text-primary">
                  <TrendingUpIcon className="h-3 w-3 mr-1" />
                  <span>{rec.metric}: {rec.benchmarkComparison}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationList;
