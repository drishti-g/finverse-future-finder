
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, TrendingDown, Bomb, CloudLightning, TrendingUp } from "lucide-react";
import { useState } from "react";

type EventType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  impact: string;
};

const ChaosModePagePage = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  const chaosEvents: EventType[] = [
    {
      id: "recession",
      title: "Recession Hits",
      description: "Global economic downturn affecting markets and employment",
      icon: <TrendingDown className="h-10 w-10 text-red-500" />,
      impact: "Your investments would decrease by 28%, but housing costs might drop 15%, creating buying opportunities if you have cash reserves."
    },
    {
      id: "crypto",
      title: "Crypto Bubble Bursts",
      description: "Major cryptocurrencies lose 70% of their value overnight",
      icon: <Bomb className="h-10 w-10 text-purple-500" />,
      impact: "If 20% of your portfolio is in crypto, your net worth would drop by 14%. Recovery could take 3-5 years based on historical patterns."
    },
    {
      id: "layoffs",
      title: "Mass Layoffs",
      description: "Major tech companies reduce workforce by 15%",
      icon: <CloudLightning className="h-10 w-10 text-amber-500" />,
      impact: "With a 3-month emergency fund, you'd stay afloat while finding new employment. Without it, you might need to take on debt averaging ₹2,50,000."
    },
    {
      id: "bullrun",
      title: "Sudden Bull Run",
      description: "Markets surge unexpectedly across all sectors",
      icon: <TrendingUp className="h-10 w-10 text-green-500" />,
      impact: "Your investments would increase by 22%, accelerating your financial goals by approximately 2 years if gains are maintained."
    }
  ];

  return (
    <FeaturePageLayout
      title="Chaos Mode"
      subheading="Simulate unexpected world events and their impact on your finances"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {chaosEvents.map((event) => (
            <Card 
              key={event.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedEvent?.id === event.id 
                  ? 'border-finverse-blue dark:border-finverse-accent border-2' 
                  : 'border-finverse-accent/30'
              }`}
              onClick={() => setSelectedEvent(event)}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{event.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-finverse-blue dark:text-finverse-white">
                  {event.title}
                </h3>
                <p className="text-sm text-finverse-black/70 dark:text-finverse-white/70">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedEvent ? (
          <div className="mt-8 animate-fade-in">
            <Card className="border-finverse-blue dark:border-finverse-accent">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-shrink-0">
                    {selectedEvent.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-finverse-blue dark:text-finverse-white">
                      {selectedEvent.title} - Impact Analysis
                    </h3>
                    <p className="text-finverse-black/80 dark:text-finverse-white/80 mb-4">
                      {selectedEvent.impact}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        See detailed breakdown
                      </Button>
                      <Button>Add to my simulation</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Zap className="h-12 w-12 text-finverse-blue dark:text-finverse-accent mb-4" />
            <h3 className="text-xl font-medium mb-2 text-finverse-blue dark:text-finverse-white">
              Select an event to see how it would affect your finances
            </h3>
            <p className="text-finverse-black/70 dark:text-finverse-white/70 max-w-lg">
              Each scenario simulates a different financial shock or opportunity, showing how prepared you are for the unexpected.
            </p>
          </div>
        )}
      </div>
    </FeaturePageLayout>
  );
};

export default ChaosModePagePage;
