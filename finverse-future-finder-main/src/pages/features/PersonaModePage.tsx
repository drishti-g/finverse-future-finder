
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Users } from "lucide-react";
import { useState } from "react";

type Persona = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  focus: string[];
  roadmap: string[];
};

const PersonaModePage = () => {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);

  const personas: Persona[] = [
    {
      id: "student",
      title: "Student",
      description: "Young individual focusing on education while managing limited income",
      icon: <GraduationCap className="h-12 w-12 text-finverse-blue dark:text-finverse-accent" />,
      focus: ["Tuition management", "Part-time income", "Minimal expenses", "Student loans", "Building credit"],
      roadmap: [
        "Pay off student loans within 5 years of graduation",
        "Build emergency fund of ₹50,000",
        "Start retirement savings by 25",
        "Begin investing 10% of income after debt clearance"
      ]
    },
    {
      id: "freelancer",
      title: "Freelancer",
      description: "Self-employed with variable income but high earning potential",
      icon: <Briefcase className="h-12 w-12 text-finverse-blue dark:text-finverse-accent" />,
      focus: ["Variable income planning", "Tax management", "Business expenses", "Retirement planning", "Health insurance"],
      roadmap: [
        "Build 6-month emergency fund due to income variability",
        "Set aside 30% of income for taxes",
        "Establish SEP-IRA or Solo 401(k)",
        "Create multiple income streams for stability"
      ]
    },
    {
      id: "parent",
      title: "Parent",
      description: "Family-focused with stable income but higher expenses",
      icon: <Users className="h-12 w-12 text-finverse-blue dark:text-finverse-accent" />,
      focus: ["Family budget", "Education planning", "Life insurance", "Estate planning", "Mortgage management"],
      roadmap: [
        "Start children's education fund of ₹15,00,000 per child",
        "Maintain 3-month family emergency fund",
        "Secure adequate life and health insurance",
        "Balance retirement savings with family needs"
      ]
    }
  ];

  return (
    <FeaturePageLayout
      title="Persona Mode"
      subheading="View finances from the lens of a student, parent, or freelancer"
    >
      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <Card 
              key={persona.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedPersona?.id === persona.id 
                  ? 'border-finverse-blue dark:border-finverse-accent border-2' 
                  : 'border-finverse-accent/30'
              }`}
              onClick={() => setSelectedPersona(persona)}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{persona.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-finverse-blue dark:text-finverse-white">
                  {persona.title}
                </h3>
                <p className="text-sm text-finverse-black/70 dark:text-finverse-white/70">
                  {persona.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedPersona ? (
          <div className="space-y-6 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-finverse-blue dark:text-finverse-white">
                    Focus Areas for {selectedPersona.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPersona.focus.map((item, index) => (
                      <span 
                        key={index}
                        className="bg-finverse-accent/20 text-finverse-blue dark:text-finverse-accent px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-finverse-blue dark:text-finverse-white">
                  Financial Roadmap
                </h3>
                <ul className="space-y-4">
                  {selectedPersona.roadmap.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-finverse-blue text-white text-sm mr-3 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-finverse-black/80 dark:text-finverse-white/80">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button className="px-6">Apply This Persona to My Profile</Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <h3 className="text-xl font-medium mb-2 text-finverse-blue dark:text-finverse-white">
              Select a persona to explore financial paths
            </h3>
            <p className="text-finverse-black/70 dark:text-finverse-white/70 max-w-lg">
              Each persona offers insights into how different life situations influence financial decisions and priorities.
            </p>
          </div>
        )}
      </div>
    </FeaturePageLayout>
  );
};

export default PersonaModePage;
