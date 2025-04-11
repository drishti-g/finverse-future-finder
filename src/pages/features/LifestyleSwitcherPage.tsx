
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, MapPin, Briefcase, ArrowLeftRight, 
  TrendingDown, TrendingUp, Home 
} from "lucide-react";
import { useState } from "react";

type LifestyleChange = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  impacts: {
    label: string;
    value: string;
    trend: "up" | "down" | "neutral";
  }[];
  overallEffect: string;
};

const LifestyleSwitcherPage = () => {
  const [selectedChange, setSelectedChange] = useState<LifestyleChange | null>(null);

  const lifestyleChanges: LifestyleChange[] = [
    {
      id: "tier2",
      title: "Metro to Tier-2 City",
      description: "Relocate from a major metropolitan area to a smaller city",
      icon: <Building className="h-8 w-8 text-finverse-blue dark:text-finverse-accent" />,
      impacts: [
        { label: "Housing Cost", value: "-30%", trend: "down" },
        { label: "Job Opportunities", value: "-20%", trend: "down" },
        { label: "Commute Expenses", value: "-25%", trend: "down" },
        { label: "Overall Quality of Life", value: "+15%", trend: "up" }
      ],
      overallEffect: "This move could reduce your monthly expenses by approximately ₹25,000, allowing you to reach your savings goals 30% faster."
    },
    {
      id: "remote",
      title: "Remote Work Transition",
      description: "Switch from office-based to fully remote work",
      icon: <Home className="h-8 w-8 text-finverse-blue dark:text-finverse-accent" />,
      impacts: [
        { label: "Commute Expenses", value: "-100%", trend: "down" },
        { label: "Food Expenses", value: "-20%", trend: "down" },
        { label: "Utility Bills", value: "+15%", trend: "up" },
        { label: "Home Office Setup", value: "+₹50,000", trend: "up" }
      ],
      overallEffect: "Working remotely could save you approximately ₹8,000 monthly after initial setup costs, plus reclaim 10 hours per week in commute time."
    },
    {
      id: "career",
      title: "Career Change",
      description: "Transition to a different industry or role",
      icon: <Briefcase className="h-8 w-8 text-finverse-blue dark:text-finverse-accent" />,
      impacts: [
        { label: "Initial Income", value: "-20%", trend: "down" },
        { label: "5-Year Income Potential", value: "+40%", trend: "up" },
        { label: "Job Satisfaction", value: "+35%", trend: "up" },
        { label: "Education Costs", value: "+₹2,00,000", trend: "up" }
      ],
      overallEffect: "Short-term financial setback with significant long-term gains. Break-even point at approximately 2.5 years."
    },
    {
      id: "international",
      title: "International Relocation",
      description: "Move to another country for work or lifestyle",
      icon: <MapPin className="h-8 w-8 text-finverse-blue dark:text-finverse-accent" />,
      impacts: [
        { label: "Income Potential", value: "+60%", trend: "up" },
        { label: "Living Expenses", value: "+45%", trend: "up" },
        { label: "Relocation Costs", value: "₹5,00,000", trend: "up" },
        { label: "Savings Rate", value: "+10%", trend: "up" }
      ],
      overallEffect: "Higher costs offset by significantly increased earning potential. Net positive financial impact after approximately 1 year."
    }
  ];

  return (
    <FeaturePageLayout
      title="Lifestyle Switcher"
      subheading="See how changing your location or lifestyle might affect finances"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lifestyleChanges.map((change) => (
            <Card 
              key={change.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedChange?.id === change.id 
                  ? 'border-finverse-blue dark:border-finverse-accent border-2' 
                  : 'border-finverse-accent/30'
              }`}
              onClick={() => setSelectedChange(change)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-finverse-accent/20 rounded-lg">
                    {change.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-finverse-blue dark:text-finverse-white">
                      {change.title}
                    </h3>
                    <p className="text-finverse-black/70 dark:text-finverse-white/70">
                      {change.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedChange ? (
          <div className="space-y-6 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-finverse-blue dark:text-finverse-white flex items-center gap-2">
                  <ArrowLeftRight className="h-5 w-5" />
                  Financial Impact Analysis
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {selectedChange.impacts.map((impact, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-finverse-black/20 rounded-lg">
                      <span className="text-finverse-black/80 dark:text-finverse-white/80">
                        {impact.label}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className={`font-semibold ${
                          impact.trend === "up" 
                            ? "text-green-500" 
                            : impact.trend === "down" 
                              ? "text-red-500" 
                              : "text-gray-500"
                        }`}>
                          {impact.value}
                        </span>
                        {impact.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : impact.trend === "down" ? (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-finverse-blue/10 dark:bg-finverse-blue/20 rounded-lg">
                  <h4 className="font-medium mb-2 text-finverse-blue dark:text-finverse-white">
                    Overall Financial Effect
                  </h4>
                  <p className="text-finverse-black/80 dark:text-finverse-white/80">
                    {selectedChange.overallEffect}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="px-6">Simulate This Change</Button>
              <Button variant="outline">Compare With Current Lifestyle</Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <ArrowLeftRight className="h-12 w-12 text-finverse-blue dark:text-finverse-accent mb-4" />
            <h3 className="text-xl font-medium mb-2 text-finverse-blue dark:text-finverse-white">
              Select a lifestyle change to explore the financial impact
            </h3>
            <p className="text-finverse-black/70 dark:text-finverse-white/70 max-w-lg">
              Our simulator shows how major life decisions could affect your long-term financial outlook.
            </p>
          </div>
        )}
      </div>
    </FeaturePageLayout>
  );
};

export default LifestyleSwitcherPage;
