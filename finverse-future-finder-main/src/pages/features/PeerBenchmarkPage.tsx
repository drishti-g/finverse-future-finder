
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, PieChart, ArrowUpRight, 
  ArrowDownRight, Users, DollarSign, 
  Wallet, BadgePercent 
} from "lucide-react";
import { useState } from "react";

type MetricType = "savings" | "investments" | "expenses" | "debt";

const PeerBenchmarkPage = () => {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>("savings");

  const metrics = {
    savings: {
      yourValue: 20,
      peerAverage: 15,
      topPerformers: 30,
      analysis: "You're saving 5% more than your peers, putting you in the top 30% of savers in your income bracket.",
      recommendations: [
        "Consider allocating some savings to higher-yield investments",
        "Maintain your strong saving habit while ensuring emergency fund is fully funded"
      ]
    },
    investments: {
      yourValue: 10,
      peerAverage: 18,
      topPerformers: 25,
      analysis: "Your investment rate is 8% lower than your peer average, potentially limiting long-term growth.",
      recommendations: [
        "Gradually increase investment allocation by 2% every quarter",
        "Diversify portfolio to include growth-oriented assets appropriate for your age group"
      ]
    },
    expenses: {
      yourValue: 65,
      peerAverage: 60,
      topPerformers: 50,
      analysis: "Your expenses are 5% higher than average, potentially limiting funds available for saving and investing.",
      recommendations: [
        "Identify discretionary spending that can be reduced",
        "Consider implementing a budget tracking system to monitor major expense categories"
      ]
    },
    debt: {
      yourValue: 15,
      peerAverage: 20,
      topPerformers: 10,
      analysis: "You have less debt than average, but still higher than top financial performers in your group.",
      recommendations: [
        "Continue your debt reduction strategy",
        "Consider accelerating payments on highest-interest debts first"
      ]
    }
  };

  const getMetricTitle = (metric: MetricType): string => {
    switch(metric) {
      case "savings": return "Savings Rate";
      case "investments": return "Investment Allocation";
      case "expenses": return "Expense Ratio";
      case "debt": return "Debt-to-Income Ratio";
    }
  };

  const getMetricIcon = (metric: MetricType) => {
    switch(metric) {
      case "savings": return <Wallet className="h-5 w-5" />;
      case "investments": return <DollarSign className="h-5 w-5" />;
      case "expenses": return <PieChart className="h-5 w-5" />;
      case "debt": return <BadgePercent className="h-5 w-5" />;
    }
  };

  const getComparisonText = (yours: number, peers: number) => {
    const diff = yours - peers;
    if (diff > 0) {
      return {
        text: `${diff}% higher than peers`,
        icon: <ArrowUpRight className="h-4 w-4" />,
        color: selectedMetric === "expenses" || selectedMetric === "debt" ? "text-red-500" : "text-green-500"
      };
    } else if (diff < 0) {
      return {
        text: `${Math.abs(diff)}% lower than peers`,
        icon: <ArrowDownRight className="h-4 w-4" />,
        color: selectedMetric === "expenses" || selectedMetric === "debt" ? "text-green-500" : "text-red-500"
      };
    } else {
      return {
        text: "Same as peer average",
        icon: null,
        color: "text-yellow-500"
      };
    }
  };

  const currentMetric = metrics[selectedMetric];
  const comparison = getComparisonText(currentMetric.yourValue, currentMetric.peerAverage);

  return (
    <FeaturePageLayout
      title="Peer Benchmark"
      subheading="Compare your finances with similar profiles and learn from top performers"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(Object.keys(metrics) as MetricType[]).map((metric) => (
            <Card 
              key={metric}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedMetric === metric 
                  ? 'border-finverse-blue dark:border-finverse-accent border-2' 
                  : 'border-finverse-accent/30'
              }`}
              onClick={() => setSelectedMetric(metric)}
            >
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className={`p-2 rounded-full ${selectedMetric === metric ? 'bg-finverse-blue dark:bg-finverse-accent text-white dark:text-finverse-blue' : 'bg-finverse-blue/10 dark:bg-finverse-accent/20 text-finverse-blue dark:text-finverse-accent'} mb-2`}>
                  {getMetricIcon(metric)}
                </div>
                <h3 className="text-sm font-medium text-finverse-blue dark:text-finverse-white">
                  {getMetricTitle(metric)}
                </h3>
                <p className={`text-xl font-bold ${
                  metric === "expenses" || metric === "debt" 
                    ? currentMetric.yourValue > currentMetric.peerAverage ? "text-red-500" : "text-green-500"
                    : currentMetric.yourValue > currentMetric.peerAverage ? "text-green-500" : "text-red-500"
                }`}>
                  {metrics[metric].yourValue}%
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-finverse-blue/30 dark:border-finverse-accent/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-finverse-blue dark:text-finverse-white flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                {getMetricTitle(selectedMetric)} Comparison
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-finverse-blue dark:text-finverse-accent" />
                <span className="text-finverse-black/70 dark:text-finverse-white/70">
                  Compared to users in your income bracket (₹5,00,000-10,00,000/year)
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block text-finverse-blue dark:text-finverse-white">
                      Your {getMetricTitle(selectedMetric)}: {currentMetric.yourValue}%
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {comparison.icon}
                    <span className={`text-xs font-semibold inline-block ${comparison.color}`}>
                      {comparison.text}
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-finverse-black/30">
                  <div style={{ width: `${currentMetric.yourValue * 2}%` }} className="bg-finverse-blue dark:bg-finverse-accent"></div>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold inline-block text-finverse-black/80 dark:text-finverse-white/80">
                    Peer Average: {currentMetric.peerAverage}%
                  </span>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-finverse-black/30">
                  <div style={{ width: `${currentMetric.peerAverage * 2}%` }} className="bg-gray-500 dark:bg-gray-600"></div>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold inline-block text-green-500">
                    Top Performers: {currentMetric.topPerformers}%
                  </span>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-finverse-black/30">
                  <div style={{ width: `${currentMetric.topPerformers * 2}%` }} className="bg-green-500"></div>
                </div>
              </div>
              
              <div className="p-4 bg-finverse-blue/10 dark:bg-finverse-accent/10 rounded-lg">
                <h4 className="font-medium mb-2 text-finverse-blue dark:text-finverse-white">
                  Analysis
                </h4>
                <p className="text-finverse-black/80 dark:text-finverse-white/80 mb-4">
                  {currentMetric.analysis}
                </p>
                
                <h4 className="font-medium mb-2 text-finverse-blue dark:text-finverse-white">
                  Recommendations
                </h4>
                <ul className="space-y-2">
                  {currentMetric.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ArrowUpRight className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-finverse-black/80 dark:text-finverse-white/80">
                        {rec}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-finverse-blue/5 dark:bg-finverse-accent/5 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-finverse-blue dark:text-finverse-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-finverse-black/70 dark:text-finverse-white/70">
              <span className="font-medium text-finverse-blue dark:text-finverse-white">Privacy Note:</span> All benchmarking data is anonymized and aggregated. Your personal financial information is never shared with other users.
            </p>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default PeerBenchmarkPage;
