
import { Gauge, AlertCircle, ArrowUp, DollarSign } from "lucide-react";
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const RegretMeterPage = () => {
  const [regretLevel, setRegretLevel] = useState(50);
  
  const getColor = (value: number) => {
    if (value < 30) return "text-green-500";
    if (value < 70) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <FeaturePageLayout
      title="Regret Meter™"
      subheading="How do past choices affect your future?"
    >
      <div className="space-y-8">
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-32 mb-6">
            <Gauge className={`w-32 h-32 mx-auto ${getColor(regretLevel)}`} strokeWidth={1.5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-3xl font-bold ${getColor(regretLevel)}`}>{regretLevel}%</span>
            </div>
          </div>
          
          <input
            type="range"
            min="0"
            max="100"
            value={regretLevel}
            onChange={(e) => setRegretLevel(parseInt(e.target.value))}
            className="w-full max-w-md mb-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <DollarSign className="w-8 h-8 text-finverse-blue dark:text-finverse-accent" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-finverse-blue dark:text-finverse-white">Daily Savings Impact</h3>
                  <p className="text-finverse-black/80 dark:text-finverse-white/80">
                    If you save ₹100 a day, you could have ₹182,500 more in 5 years.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-8 h-8 text-finverse-blue dark:text-finverse-accent" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-finverse-blue dark:text-finverse-white">Spending Warning</h3>
                  <p className="text-finverse-black/80 dark:text-finverse-white/80">
                    If you keep spending on unnecessary items, your regret level might rise!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow md:col-span-2">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <ArrowUp className="w-8 h-8 text-finverse-blue dark:text-finverse-accent" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-finverse-blue dark:text-finverse-white">Investment Potential</h3>
                  <p className="text-finverse-black/80 dark:text-finverse-white/80">
                    Investing just 10% of your income could yield a 40% increase in your net worth over 10 years.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default RegretMeterPage;
