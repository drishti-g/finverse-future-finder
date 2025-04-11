
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mountain, Calendar, DollarSign, Target, ArrowRight } from "lucide-react";
import { useState } from "react";

const DreamPlannerPage = () => {
  const [dream, setDream] = useState("");
  const [showPlan, setShowPlan] = useState(false);

  const handleGeneratePlan = () => {
    if (dream.trim()) {
      setShowPlan(true);
    }
  };

  const samplePlan = [
    {
      year: 2030,
      milestone: "Own a hillside cabin",
      actions: ["Purchase property for approximately ₹80,00,000", "Complete all payments"],
      financialRequirement: "₹80,00,000 total"
    },
    {
      year: 2028,
      milestone: "Secure full down payment",
      actions: ["Have ₹24,00,000 saved for down payment (30%)", "Improve credit score to 800+ for best loan rates"],
      financialRequirement: "₹24,00,000 saved"
    },
    {
      year: 2027,
      milestone: "Begin location research",
      actions: ["Visit potential locations", "Research property values and trends", "Connect with local real estate agents"],
      financialRequirement: "₹1,00,000 for travel and research"
    },
    {
      year: 2026,
      milestone: "Grow investment portfolio",
      actions: ["Increase income by 15%", "Maximize retirement contributions", "Establish dedicated property investment fund"],
      financialRequirement: "₹12,00,000 in property fund"
    },
    {
      year: 2025,
      milestone: "Clear all outstanding debt",
      actions: ["Pay off remaining loans and credit cards", "Build emergency fund to 6 months of expenses"],
      financialRequirement: "₹5,00,000 for debt clearance"
    },
    {
      year: 2024,
      milestone: "Start saving aggressively",
      actions: ["Cut non-essential expenses by 20%", "Set up automatic monthly transfers to savings", "Research investment options for fund growth"],
      financialRequirement: "Begin saving ₹20,000 monthly"
    }
  ];

  return (
    <FeaturePageLayout
      title="Reverse Dream Planner"
      subheading="Start with your ultimate goal and work backward to create a realistic plan"
    >
      <div className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-3 text-finverse-blue dark:text-finverse-white">
                  What's your biggest financial dream?
                </h3>
                <p className="text-finverse-black/70 dark:text-finverse-white/70 mb-4">
                  Enter your ultimate financial goal, and we'll create a step-by-step plan working backward from your target date.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    placeholder="e.g., Own a hillside cabin by 2030"
                    value={dream}
                    onChange={(e) => setDream(e.target.value)}
                    className="flex-grow"
                  />
                  <Button onClick={handleGeneratePlan} disabled={!dream.trim()} className="whitespace-nowrap">
                    Generate Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Mountain className="h-28 w-28 text-finverse-blue dark:text-finverse-accent opacity-80" />
              </div>
            </div>
          </CardContent>
        </Card>

        {showPlan && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-finverse-blue dark:text-finverse-white">
                Your Reverse Plan to: {dream}
              </h3>
              <Button variant="outline" size="sm">
                Export Plan
              </Button>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-finverse-accent/50 dark:bg-finverse-accent/30"></div>
              
              {samplePlan.map((step, index) => (
                <Card key={index} className="mb-6 ml-8 relative">
                  <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-finverse-blue border-4 border-finverse-accent"></div>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <div className="flex items-center gap-2 mb-2 md:mb-0">
                        <Calendar className="h-5 w-5 text-finverse-blue dark:text-finverse-accent" />
                        <span className="font-bold text-finverse-blue dark:text-finverse-white">
                          {step.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-finverse-blue/10 dark:bg-finverse-accent/20 px-3 py-1 rounded-full">
                        <DollarSign className="h-4 w-4 text-finverse-blue dark:text-finverse-accent" />
                        <span className="text-sm font-medium text-finverse-blue dark:text-finverse-accent">
                          {step.financialRequirement}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-finverse-blue dark:text-finverse-white flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      {step.milestone}
                    </h4>
                    
                    <ul className="space-y-2 pl-6 list-disc">
                      {step.actions.map((action, idx) => (
                        <li key={idx} className="text-finverse-black/80 dark:text-finverse-white/80">
                          {action}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button>Add to My Financial Plan</Button>
              <Button variant="outline">Adjust Parameters</Button>
            </div>
          </div>
        )}
      </div>
    </FeaturePageLayout>
  );
};

export default DreamPlannerPage;
