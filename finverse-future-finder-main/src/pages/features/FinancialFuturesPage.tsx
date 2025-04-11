
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Rocket } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FinancialFuturesPage = () => {
  const handlePersonalizedOptions = () => {
    toast({
      title: "Creating personalized options",
      description: "We'll tailor these based on your profile.",
    });
  };

  return (
    <FeaturePageLayout
      title="Explore Alternate Financial Futures"
      subheading="Choose between Low, Medium, and High risk paths, plus see their potential effectiveness (High, Medium, Low) in the long run."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Low Risk Column */}
        <div className="bg-white dark:bg-finverse-blue/20 rounded-xl border border-finverse-accent p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-finverse-blue dark:text-finverse-accent mr-3" />
            <h3 className="text-xl font-semibold text-finverse-blue dark:text-finverse-white">
              Low Risk
            </h3>
          </div>
          
          <div className="space-y-3 mb-6">
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Fixed deposits with 6-7% annual returns
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Government bonds for stable income
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Blue-chip dividend stocks (5-10%)
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Debt mutual funds with moderate returns
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              PPF/EPF for tax-efficient savings
            </p>
          </div>
          
          <div className="bg-finverse-accent/20 p-3 rounded-lg mb-4">
            <p className="text-sm text-finverse-blue dark:text-finverse-white">
              <span className="font-semibold">Expected Return:</span> 6-8% annually
            </p>
            <p className="text-sm text-finverse-blue dark:text-finverse-white">
              <span className="font-semibold">Risk Level:</span> Low
            </p>
            <p className="text-sm text-finverse-blue dark:text-finverse-white">
              <span className="font-semibold">Timeline:</span> 5+ years
            </p>
          </div>
        </div>
        
        {/* Medium Risk Column */}
        <div className="bg-white dark:bg-finverse-blue/20 rounded-xl border border-finverse-accent p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-8 w-8 text-finverse-blue dark:text-finverse-accent mr-3" />
            <h3 className="text-xl font-semibold text-finverse-blue dark:text-finverse-white">
              Medium Risk
            </h3>
          </div>
          
          <div className="space-y-3 mb-6">
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Large-cap equity mutual funds
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Index funds tracking major indices
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Balance between stocks and bonds (60/40)
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              REITs for real estate exposure
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Mid-cap stocks with growth potential
            </p>
          </div>
          
          <div className="bg-finverse-accent/20 p-3 rounded-lg mb-4">
            <p className="text-sm text-finverse-blue dark:text-finverse-white">
              <span className="font-semibold">Expected Return:</span> 9-12% annually
            </p>
            <p className="text-sm text-finverse-blue dark:text-finverse-white">
              <span className="font-semibold">Risk Level:</span> Medium
            </p>
            <p className="text-sm text-finverse-blue dark:text-finverse-white">
              <span className="font-semibold">Timeline:</span> 7-10 years
            </p>
          </div>
        </div>
        
        {/* High Risk Column */}
        <div className="bg-white dark:bg-finverse-blue/20 rounded-xl border border-finverse-accent p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Rocket className="h-8 w-8 text-finverse-blue dark:text-finverse-accent mr-3" />
            <h3 className="text-xl font-semibold text-finverse-blue dark:text-finverse-white">
              High Risk
            </h3>
          </div>
          
          <div className="space-y-3 mb-6">
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Small-cap growth stocks
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Sectoral/thematic funds (tech, pharma)
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              International equity exposure
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Alternative investments (5-10%)
            </p>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 flex items-start">
              <span className="text-finverse-blue dark:text-finverse-accent mr-2">•</span>
              Strategic cryptocurrency allocation (1-5%)
            </p>
          </div>
          
          <div className="bg-finverse-accent/20 p-3 rounded-lg mb-4">
            <p className="text-sm text-finverse-blue dark:text-finverse-white">
              <span className="font-semibold">Expected Return:</span> 12-20%+ annually
            </p>
            <p className="text-sm text-finverse-blue dark:text-finverse-white">
              <span className="font-semibold">Risk Level:</span> High
            </p>
            <p className="text-sm text-finverse-blue dark:text-finverse-white">
              <span className="font-semibold">Timeline:</span> 10+ years
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center">
        <Button 
          onClick={handlePersonalizedOptions}
          className="bg-finverse-blue text-white hover:bg-finverse-accent hover:text-finverse-black transition-colors flex items-center"
        >
          Get Personalized Options
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <p className="mt-3 text-sm text-finverse-black/60 dark:text-finverse-white/60">
          We'll tailor these options based on your financial profile
        </p>
      </div>
    </FeaturePageLayout>
  );
};

export default FinancialFuturesPage;
