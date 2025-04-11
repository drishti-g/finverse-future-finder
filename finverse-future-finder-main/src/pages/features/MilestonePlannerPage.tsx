
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, ArrowRight, Calculator, Clock, 
  Check, CalendarDays, BarChart 
} from "lucide-react";
import { useState } from "react";

const MilestonePlannerPage = () => {
  const [targetAmount, setTargetAmount] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [showPlan, setShowPlan] = useState(false);

  const handleGeneratePlan = () => {
    if (targetAmount.trim() && timeframe.trim()) {
      setShowPlan(true);
    }
  };

  // Sample calculations
  const calculateMonthlySavings = () => {
    const amount = parseFloat(targetAmount.replace(/,/g, ""));
    const months = parseInt(timeframe) * 12;
    return isNaN(amount) || isNaN(months) ? 0 : Math.round(amount / months);
  };

  const calculateWeeklySavings = () => {
    const amount = parseFloat(targetAmount.replace(/,/g, ""));
    const weeks = parseInt(timeframe) * 52;
    return isNaN(amount) || isNaN(weeks) ? 0 : Math.round(amount / weeks);
  };

  const calculateDailySavings = () => {
    const amount = parseFloat(targetAmount.replace(/,/g, ""));
    const days = parseInt(timeframe) * 365;
    return isNaN(amount) || isNaN(days) ? 0 : Math.round(amount / days);
  };

  return (
    <FeaturePageLayout
      title="Milestone Auto-Planner"
      subheading="Tell us how much you want to save, we'll break it down into achievable goals"
    >
      <div className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-3 text-finverse-blue dark:text-finverse-white">
                  Set Your Savings Target
                </h3>
                <p className="text-finverse-black/70 dark:text-finverse-white/70 mb-4">
                  Enter your desired savings amount and timeframe, and we'll create a personalized plan to help you achieve it.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-finverse-blue dark:text-finverse-white mb-1">
                      Target Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-finverse-black/60 dark:text-finverse-white/60">
                        ₹
                      </span>
                      <Input
                        placeholder="50,000"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(e.target.value)}
                        className="pl-7"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-finverse-blue dark:text-finverse-white mb-1">
                      Timeframe (Years)
                    </label>
                    <Input
                      placeholder="1"
                      value={timeframe}
                      onChange={(e) => setTimeframe(e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleGeneratePlan} 
                    disabled={!targetAmount.trim() || !timeframe.trim()}
                    className="mt-2"
                  >
                    Generate Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <Calendar className="h-32 w-32 text-finverse-blue dark:text-finverse-accent opacity-80" />
              </div>
            </div>
          </CardContent>
        </Card>

        {showPlan && (
          <div className="space-y-6 animate-fade-in">
            <Card className="border-finverse-blue dark:border-finverse-accent">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-finverse-blue dark:text-finverse-white flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Your Savings Breakdown
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-finverse-blue/10 dark:bg-finverse-accent/20 p-4 rounded-lg flex flex-col items-center text-center">
                    <CalendarDays className="h-8 w-8 text-finverse-blue dark:text-finverse-accent mb-2" />
                    <h4 className="font-medium text-finverse-blue dark:text-finverse-white">Monthly</h4>
                    <p className="text-2xl font-bold text-finverse-blue dark:text-finverse-white">
                      ₹{calculateMonthlySavings().toLocaleString()}
                    </p>
                    <p className="text-sm text-finverse-black/70 dark:text-finverse-white/70">
                      per month
                    </p>
                  </div>
                  
                  <div className="bg-finverse-blue/10 dark:bg-finverse-accent/20 p-4 rounded-lg flex flex-col items-center text-center">
                    <Clock className="h-8 w-8 text-finverse-blue dark:text-finverse-accent mb-2" />
                    <h4 className="font-medium text-finverse-blue dark:text-finverse-white">Weekly</h4>
                    <p className="text-2xl font-bold text-finverse-blue dark:text-finverse-white">
                      ₹{calculateWeeklySavings().toLocaleString()}
                    </p>
                    <p className="text-sm text-finverse-black/70 dark:text-finverse-white/70">
                      per week
                    </p>
                  </div>
                  
                  <div className="bg-finverse-blue/10 dark:bg-finverse-accent/20 p-4 rounded-lg flex flex-col items-center text-center">
                    <Calculator className="h-8 w-8 text-finverse-blue dark:text-finverse-accent mb-2" />
                    <h4 className="font-medium text-finverse-blue dark:text-finverse-white">Daily</h4>
                    <p className="text-2xl font-bold text-finverse-blue dark:text-finverse-white">
                      ₹{calculateDailySavings().toLocaleString()}
                    </p>
                    <p className="text-sm text-finverse-black/70 dark:text-finverse-white/70">
                      per day
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-finverse-blue dark:text-finverse-white">
                    Tips to Reach Your Goal Faster
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-finverse-black/80 dark:text-finverse-white/80">
                        Set up an automatic transfer to savings on payday
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-finverse-black/80 dark:text-finverse-white/80">
                        Cut one unnecessary expense and redirect to savings
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-finverse-black/80 dark:text-finverse-white/80">
                        Consider a high-yield savings account to earn interest
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-finverse-black/80 dark:text-finverse-white/80">
                        Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-finverse-blue dark:text-finverse-white">
                    Timeline Visualization
                  </h3>
                  <p className="text-finverse-black/70 dark:text-finverse-white/70 mb-2">
                    Progress over {timeframe} year{parseInt(timeframe) !== 1 ? 's' : ''}
                  </p>
                  <div className="h-8 bg-gray-100 dark:bg-finverse-black/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-finverse-blue to-finverse-accent rounded-full w-0 animate-grow" style={{animationFillMode: 'forwards'}}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-finverse-black/60 dark:text-finverse-white/60">
                    <span>Start</span>
                    <span>Midpoint</span>
                    <span>Goal: ₹{parseInt(targetAmount).toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-finverse-blue dark:text-finverse-white">
                    Potential Goals
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 rounded-full bg-finverse-accent flex items-center justify-center text-finverse-blue text-sm flex-shrink-0">
                        1
                      </span>
                      <span className="text-finverse-black/80 dark:text-finverse-white/80">
                        Emergency Fund ({parseInt(targetAmount) < 100000 ? "Basic" : "Advanced"})
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 rounded-full bg-finverse-accent flex items-center justify-center text-finverse-blue text-sm flex-shrink-0">
                        2
                      </span>
                      <span className="text-finverse-black/80 dark:text-finverse-white/80">
                        {parseInt(targetAmount) < 50000 ? "Short vacation" : 
                         parseInt(targetAmount) < 200000 ? "International travel" : 
                         "Property down payment"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 rounded-full bg-finverse-accent flex items-center justify-center text-finverse-blue text-sm flex-shrink-0">
                        3
                      </span>
                      <span className="text-finverse-black/80 dark:text-finverse-white/80">
                        {parseInt(targetAmount) < 100000 ? "Electronics upgrade" : 
                         parseInt(targetAmount) < 500000 ? "Vehicle purchase" : 
                         "Investment portfolio"}
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4">
              <Button>Add to My Financial Plan</Button>
              <Button variant="outline">Adjust Goal</Button>
            </div>
          </div>
        )}
      </div>
    </FeaturePageLayout>
  );
};

export default MilestonePlannerPage;
