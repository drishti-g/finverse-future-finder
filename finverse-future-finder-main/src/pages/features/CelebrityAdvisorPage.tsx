
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Star, Award, Quote, MessageSquare } from "lucide-react";
import { useState } from "react";

type Celebrity = {
  id: string;
  name: string;
  image: string;
  title: string;
  quote: string;
  story: string[];
  advice: string[];
};

const CelebrityAdvisorPage = () => {
  const [selectedCelebrity, setSelectedCelebrity] = useState<Celebrity | null>(null);
  const [askMode, setAskMode] = useState(false);

  const celebrities: Celebrity[] = [
    {
      id: "buffett",
      name: "Warren Buffett",
      image: "https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FycmVuJTIwYnVmZmV0dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Value Investor & CEO of Berkshire Hathaway",
      quote: "The most important investment you can make is in yourself.",
      story: [
        "Started investing at age 11, purchasing his first stock",
        "Famously lives in the same house he bought in 1958 for $31,500",
        "Built wealth through patient, value-focused investing",
        "Pledged to give away 99% of his fortune to philanthropy"
      ],
      advice: [
        "Invest in businesses you understand",
        "Think long-term and ignore market fluctuations",
        "Be fearful when others are greedy, and greedy when others are fearful",
        "Prioritize value over trends or market timing"
      ]
    },
    {
      id: "musk",
      name: "Elon Musk",
      image: "https://images.unsplash.com/photo-1562114608-faa4211d9c7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      title: "Entrepreneur & CEO of Tesla, SpaceX",
      quote: "When something is important enough, you do it even if the odds are not in your favor.",
      story: [
        "Created and sold Zip2 for $307 million and X.com (which became PayPal) for $1.5 billion",
        "Invested almost all proceeds into Tesla, SpaceX, and SolarCity",
        "Nearly went bankrupt in 2008 when both SpaceX and Tesla faced critical failures",
        "Persisted through failures to build multiple revolutionary companies"
      ],
      advice: [
        "Take calculated risks on high-impact problems",
        "Work extremely hard - 80-100 hour weeks when necessary",
        "Vertical integration can create competitive advantages",
        "Think from first principles, not by analogy"
      ]
    },
    {
      id: "graham",
      name: "Sara Blakely",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Founder of Spanx",
      quote: "Don't be intimidated by what you don't know. That can be your greatest strength.",
      story: [
        "Started Spanx with $5,000 of her personal savings",
        "Wrote her own patent to save on legal fees",
        "Maintained 100% ownership with no outside investment",
        "Became the youngest self-made female billionaire"
      ],
      advice: [
        "Embrace what you don't know",
        "Failure is not the outcome - failure is not trying",
        "Differentiate yourself and your product",
        "Maintain ownership as long as possible to control your destiny"
      ]
    },
    {
      id: "narayana",
      name: "Narayana Murthy",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
      title: "Co-founder of Infosys",
      quote: "In God we trust, everybody else brings data to the table.",
      story: [
        "Started Infosys with just $250 borrowed from his wife",
        "Built one of India's largest tech companies from scratch",
        "Focused on creating wealth ethically and transparently",
        "Known for his simple lifestyle despite immense wealth"
      ],
      advice: [
        "Leadership by example is the most powerful form of leadership",
        "Focus on creating long-term value, not short-term profits",
        "Be transparent and ethical in all business dealings",
        "Invest in people and their development consistently"
      ]
    }
  ];

  return (
    <FeaturePageLayout
      title="Celebrity Advisor"
      subheading="Take inspiration from the financial journeys of famous successful people"
    >
      <div className="space-y-8">
        {!selectedCelebrity ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {celebrities.map((celebrity) => (
              <Card 
                key={celebrity.id}
                className="cursor-pointer hover:shadow-lg transition-all border-finverse-accent/30 hover:border-finverse-blue dark:hover:border-finverse-accent"
                onClick={() => setSelectedCelebrity(celebrity)}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={celebrity.image} 
                        alt={celebrity.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-finverse-blue dark:text-finverse-white flex items-center gap-2">
                        {celebrity.name}
                        <Star className="h-4 w-4 text-amber-400" />
                      </h3>
                      <p className="text-sm text-finverse-black/70 dark:text-finverse-white/70 mb-2">
                        {celebrity.title}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-finverse-blue dark:text-finverse-accent">
                        <Quote className="h-3 w-3" />
                        <p className="italic">{celebrity.quote}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-start">
              <Button variant="outline" onClick={() => {
                setSelectedCelebrity(null);
                setAskMode(false);
              }}>
                Back to advisors
              </Button>
              <Button 
                onClick={() => setAskMode(!askMode)}
                className={askMode ? 'bg-finverse-accent text-finverse-blue hover:bg-finverse-blue hover:text-white' : ''}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                {askMode ? 'View Journey' : 'What Would They Do?'}
              </Button>
            </div>

            {!askMode ? (
              <>
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={selectedCelebrity.image} 
                      alt={selectedCelebrity.name} 
                      className="w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Crown className="h-5 w-5 text-amber-400" />
                      <h3 className="text-2xl font-bold text-finverse-blue dark:text-finverse-white">
                        {selectedCelebrity.name}
                      </h3>
                    </div>
                    <p className="text-finverse-black/70 dark:text-finverse-white/70 mb-3">
                      {selectedCelebrity.title}
                    </p>
                    <div className="flex items-start gap-2 mb-6 bg-finverse-blue/10 dark:bg-finverse-accent/10 p-4 rounded-lg">
                      <Quote className="h-6 w-6 text-finverse-blue dark:text-finverse-accent flex-shrink-0 mt-1" />
                      <p className="italic text-lg text-finverse-blue dark:text-finverse-white">
                        "{selectedCelebrity.quote}"
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="h-5 w-5 text-finverse-blue dark:text-finverse-accent" />
                        <h3 className="text-xl font-semibold text-finverse-blue dark:text-finverse-white">
                          Success Journey
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {selectedCelebrity.story.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-finverse-blue dark:bg-finverse-accent text-white dark:text-finverse-blue flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                              {index + 1}
                            </span>
                            <span className="text-finverse-black/80 dark:text-finverse-white/80">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="h-5 w-5 text-finverse-blue dark:text-finverse-accent" />
                        <h3 className="text-xl font-semibold text-finverse-blue dark:text-finverse-white">
                          Financial Wisdom
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {selectedCelebrity.advice.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-finverse-blue dark:bg-finverse-accent flex-shrink-0 mt-2"></span>
                            <span className="text-finverse-black/80 dark:text-finverse-white/80">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </>
            ) : (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="h-5 w-5 text-finverse-blue dark:text-finverse-accent" />
                    <h3 className="text-xl font-semibold text-finverse-blue dark:text-finverse-white">
                      What Would {selectedCelebrity.name} Do?
                    </h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-finverse-blue/10 dark:bg-finverse-accent/10 rounded-lg">
                      <h4 className="font-medium mb-2 text-finverse-blue dark:text-finverse-white">
                        Savings Strategy
                      </h4>
                      <p className="text-finverse-black/80 dark:text-finverse-white/80">
                        {selectedCelebrity.name === "Warren Buffett" 
                          ? "I'd focus on consistent, disciplined saving - at least 20% of income. I'd avoid lifestyle inflation and live well below my means." 
                          : selectedCelebrity.name === "Elon Musk"
                          ? "I'd make aggressive cuts to non-essential spending to maximize investment capital. Every rupee saved is ammunition for future opportunities."
                          : selectedCelebrity.name === "Sara Blakely"
                          ? "I'd maintain a strict budget while keeping an emergency fund. I'd look for creative ways to reduce expenses while maintaining quality of life."
                          : "I'd adopt a systematic savings approach, setting aside a fixed percentage for long-term wealth creation rather than focusing on short-term luxuries."}
                      </p>
                    </div>
                    
                    <div className="p-4 bg-finverse-blue/10 dark:bg-finverse-accent/10 rounded-lg">
                      <h4 className="font-medium mb-2 text-finverse-blue dark:text-finverse-white">
                        Investment Philosophy
                      </h4>
                      <p className="text-finverse-black/80 dark:text-finverse-white/80">
                        {selectedCelebrity.name === "Warren Buffett" 
                          ? "I'd invest in simple, understandable businesses with strong fundamentals and competitive advantages. I'd focus on value, not speculation." 
                          : selectedCelebrity.name === "Elon Musk"
                          ? "I'd allocate a significant portion to high-potential growth opportunities, even if risky. I'd be willing to go all-in on areas where I have deep expertise."
                          : selectedCelebrity.name === "Sara Blakely"
                          ? "I'd invest primarily in myself and my own business ideas first. External investments would come later after establishing my own revenue streams."
                          : "I'd focus on creating a balanced portfolio with emphasis on ethical companies with sustainable business models and good governance."}
                      </p>
                    </div>
                    
                    <div className="p-4 bg-finverse-blue/10 dark:bg-finverse-accent/10 rounded-lg">
                      <h4 className="font-medium mb-2 text-finverse-blue dark:text-finverse-white">
                        Career Advice
                      </h4>
                      <p className="text-finverse-black/80 dark:text-finverse-white/80">
                        {selectedCelebrity.name === "Warren Buffett" 
                          ? "I'd suggest working on skills that have compounding returns and staying in roles where your unique abilities create the most value." 
                          : selectedCelebrity.name === "Elon Musk"
                          ? "I'd recommend focusing on work that solves important problems and has potential for massive impact, even if it means more hours and stress initially."
                          : selectedCelebrity.name === "Sara Blakely"
                          ? "I'd advise you to find gaps in the market that align with your passions, and don't let lack of experience stop you from pursuing great ideas."
                          : "I'd emphasize continuous learning and maintaining work-life balance while creating value through innovation and ethical practices."}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button>Apply This Philosophy to My Plan</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </FeaturePageLayout>
  );
};

export default CelebrityAdvisorPage;
