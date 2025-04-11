
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LineChart } from "lucide-react";
import SimulationForm from "@/components/SimulationForm";
import { toast } from "@/hooks/use-toast";

const SimulationPage = () => {
  const [profileCompleted, setProfileCompleted] = useState(false);

  const handleSaveProfile = () => {
    toast({
      title: "Profile saved successfully!",
      description: "Now you can explore our simulation features.",
    });
    setProfileCompleted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-6 bg-gray-50 dark:bg-finverse-black/95">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-finverse-blue dark:text-finverse-white mb-2">
            Your Financial Simulation
          </h1>
          <p className="text-finverse-black/80 dark:text-finverse-white/80 mb-10">
            Let's create your personalized financial profile to generate accurate projections.
          </p>

          {!profileCompleted ? (
            <SimulationForm onSave={handleSaveProfile} />
          ) : (
            <div className="space-y-10 animate-fade-in">
              <div className="bg-white dark:bg-finverse-blue/20 rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-finverse-blue dark:text-finverse-white mb-6">
                  Your Basic Simulation Preview
                </h2>
                
                <div className="mb-8">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-finverse-blue/10 rounded-lg p-4 flex justify-center items-center">
                    <div className="flex flex-col items-center">
                      <LineChart size={64} className="text-finverse-blue dark:text-finverse-accent mb-4" />
                      <div className="text-center">
                        <p className="text-finverse-black/70 dark:text-finverse-white/70">
                          Net Worth Projection (5 Years)
                        </p>
                        <p className="text-lg font-medium text-finverse-blue dark:text-finverse-white mt-2">
                          Current: ₹100,000 → Projected: ₹500,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-finverse-black/80 dark:text-finverse-white/80 mb-4">
                    This is a basic projection based on your input. Explore our features to refine your future scenarios.
                  </p>
                </div>
              </div>
              
              <div className="bg-finverse-accent/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-finverse-blue dark:text-finverse-white mb-4">
                  Ready to explore more?
                </h3>
                <p className="text-finverse-black/80 dark:text-finverse-white/80 mb-6">
                  Visit our features to get detailed insights and personalized recommendations for your financial journey.
                </p>
                <Link
                  to="/#features"
                  className="btn-primary inline-flex items-center"
                >
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimulationPage;
