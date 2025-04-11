
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Droplet, Coffee, TrendingUp, ShoppingBag, 
  Utensils, Smartphone, Home, Car 
} from "lucide-react";
import { useState } from "react";

type Habit = {
  id: string;
  title: string;
  icon: React.ReactNode;
  dailySavings: number;
  monthlySavings: number;
  yearSavings: number;
  yearsImpact: number;
  description: string;
};

const MicroHabitPage = () => {
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);

  const habits: Habit[] = [
    {
      id: "coffee",
      title: "Skip One Coffee",
      icon: <Coffee className="h-10 w-10 text-amber-700" />,
      dailySavings: 150,
      monthlySavings: 4500,
      yearSavings: 54000,
      yearsImpact: 540000,
      description: "Brewing coffee at home instead of buying one expensive coffee shop drink daily can save significantly over time."
    },
    {
      id: "lunch",
      title: "Pack Lunch",
      icon: <Utensils className="h-10 w-10 text-green-600" />,
      dailySavings: 200,
      monthlySavings: 6000,
      yearSavings: 72000,
      yearsImpact: 720000,
      description: "Bringing lunch from home instead of buying outside food can save money and often be healthier."
    },
    {
      id: "subscription",
      title: "Audit Subscriptions",
      icon: <Smartphone className="h-10 w-10 text-blue-500" />,
      dailySavings: 33,
      monthlySavings: 1000,
      yearSavings: 12000,
      yearsImpact: 120000,
      description: "Cancelling unused subscriptions (streaming, apps, services) can eliminate recurring costs you don't benefit from."
    },
    {
      id: "shopping",
      title: "24-Hour Rule",
      icon: <ShoppingBag className="h-10 w-10 text-purple-500" />,
      dailySavings: 100,
      monthlySavings: 3000,
      yearSavings: 36000,
      yearsImpact: 360000,
      description: "Wait 24 hours before making any non-essential purchase to avoid impulse buying."
    },
    {
      id: "energy",
      title: "Energy Saving",
      icon: <Home className="h-10 w-10 text-orange-500" />,
      dailySavings: 50,
      monthlySavings: 1500,
      yearSavings: 18000,
      yearsImpact: 180000,
      description: "Turning off lights and devices when not in use, adjusting thermostat settings, and using energy-efficient appliances."
    },
    {
      id: "transport",
      title: "Optimize Travel",
      icon: <Car className="h-10 w-10 text-gray-600" />,
      dailySavings: 120,
      monthlySavings: 3600,
      yearSavings: 43200,
      yearsImpact: 432000,
      description: "Using public transport, carpooling, or combining errands to save on fuel and parking costs."
    }
  ];

  return (
    <FeaturePageLayout
      title="Micro Habit Optimizer"
      subheading="Small daily changes can lead to massive financial gains over time"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {habits.map((habit) => (
            <Card 
              key={habit.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedHabit?.id === habit.id 
                  ? 'border-finverse-blue dark:border-finverse-accent border-2' 
                  : 'border-finverse-accent/30'
              }`}
              onClick={() => setSelectedHabit(habit)}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-finverse-accent/20 rounded-full mb-4">
                  {habit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-finverse-blue dark:text-finverse-white">
                  {habit.title}
                </h3>
                <p className="text-sm text-finverse-blue/80 dark:text-finverse-white/80 font-medium">
                  Save ₹{habit.monthlySavings.toLocaleString()}/month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedHabit ? (
          <div className="space-y-6 animate-fade-in">
            <Card className="overflow-hidden">
              <div className="bg-finverse-blue dark:bg-finverse-blue/80 text-white p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-full">
                      {selectedHabit.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        {selectedHabit.title}
                      </h3>
                      <p className="text-white/80">
                        Daily impact: ₹{selectedHabit.dailySavings.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-finverse-accent text-finverse-blue px-4 py-2 rounded-lg font-semibold">
                    <TrendingUp className="h-5 w-5" />
                    10-Year Impact: ₹{selectedHabit.yearsImpact.toLocaleString()}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-finverse-black/80 dark:text-finverse-white/80 mb-6">
                  {selectedHabit.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-finverse-blue/10 dark:bg-finverse-accent/20 p-4 rounded-lg text-center">
                    <h4 className="font-medium text-finverse-blue dark:text-finverse-white">Monthly</h4>
                    <p className="text-2xl font-bold text-finverse-blue dark:text-finverse-white">
                      ₹{selectedHabit.monthlySavings.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="bg-finverse-blue/10 dark:bg-finverse-accent/20 p-4 rounded-lg text-center">
                    <h4 className="font-medium text-finverse-blue dark:text-finverse-white">Yearly</h4>
                    <p className="text-2xl font-bold text-finverse-blue dark:text-finverse-white">
                      ₹{selectedHabit.yearSavings.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="bg-finverse-blue/10 dark:bg-finverse-accent/20 p-4 rounded-lg text-center">
                    <h4 className="font-medium text-finverse-blue dark:text-finverse-white">5 Years</h4>
                    <p className="text-2xl font-bold text-finverse-blue dark:text-finverse-white">
                      ₹{(selectedHabit.yearSavings * 5).toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-finverse-blue dark:text-finverse-white">
                    What if you invested these savings?
                  </h4>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-finverse-black/80 dark:text-finverse-white/80">
                          Investing ₹{selectedHabit.monthlySavings.toLocaleString()} monthly with an 8% annual return could grow to 
                          approximately <span className="font-bold text-green-600 dark:text-green-400">
                            ₹{(selectedHabit.monthlySavings * 12 * 10 * 1.5).toLocaleString()}
                          </span> in 10 years.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="flex items-center gap-2">
                <Droplet className="h-4 w-4" />
                Add to My Habits
              </Button>
              <Button variant="outline">Compare With Other Habits</Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Droplet className="h-12 w-12 text-finverse-blue dark:text-finverse-accent mb-4" />
            <h3 className="text-xl font-medium mb-2 text-finverse-blue dark:text-finverse-white">
              Select a micro habit to see its long-term impact
            </h3>
            <p className="text-finverse-black/70 dark:text-finverse-white/70 max-w-lg">
              Small consistent changes in daily spending can dramatically improve your financial future.
            </p>
          </div>
        )}
      </div>
    </FeaturePageLayout>
  );
};

export default MicroHabitPage;
