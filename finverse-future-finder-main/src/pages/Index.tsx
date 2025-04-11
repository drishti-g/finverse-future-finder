
import { ArrowRight, LineChart, Brain, TrendingUp, Zap, Users, Map, Mountain, Crown, Calendar, Droplet, BarChart3, ArrowRightLeft } from "lucide-react";
import { Link } from "react-router-dom";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const features = [
    {
      title: "Alternate Financial Futures",
      description: "Explore low, medium, or high risk paths for your finances.",
      icon: ArrowRightLeft,
      route: "/features/financial-futures"
    },
    {
      title: "AI Advisor",
      description: "Chat with our virtual expert for personalized tips.",
      icon: Brain,
      route: "/features/ai-advisor"
    },
    {
      title: "Spending Pattern",
      description: "Take a quick quiz to identify your spending behavior.",
      icon: TrendingUp,
      route: "/features/spending-pattern"
    },
    {
      title: "Regret Meter",
      description: "Gauge how past choices affect future outcomes.",
      icon: LineChart,
      route: "/features/regret-meter"
    },
    {
      title: "Chaos Mode",
      description: "Simulate recessions, booms, layoffs, or crypto crashes.",
      icon: Zap,
      route: "/features/chaos-mode"
    },
    {
      title: "Persona Mode",
      description: "View finances from the lens of a student, parent, or freelancer.",
      icon: Users,
      route: "/features/persona-mode"
    },
    {
      title: "Lifestyle Switcher",
      description: "Test relocating or career shifts to see big picture changes.",
      icon: Map,
      route: "/features/lifestyle-switcher"
    },
    {
      title: "Reverse Dream Planner",
      description: "Plan your ideal life backwards, from goal to present.",
      icon: Mountain,
      route: "/features/dream-planner"
    },
    {
      title: "Celebrity Advisor",
      description: "Peek into famous success journeys & get star-inspired strategies.",
      icon: Crown,
      route: "/features/celebrity-advisor"
    },
    {
      title: "Milestone Auto-Planner",
      description: "Hit savings targets with our timeline-based suggestions.",
      icon: Calendar,
      route: "/features/milestone-planner"
    },
    {
      title: "Micro Habit Optimizer",
      description: "Small daily changes → massive long-term gains.",
      icon: Droplet,
      route: "/features/micro-habit"
    },
    {
      title: "Peer Benchmark",
      description: "See how your finances compare to similar users.",
      icon: BarChart3,
      route: "/features/peer-benchmark"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 bg-white dark:bg-finverse-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-finverse-blue dark:text-finverse-white leading-tight animate-slide-up">
                What if you could see your <span className="text-transparent bg-clip-text bg-gradient-to-r from-finverse-blue to-finverse-accent dark:from-finverse-white dark:to-finverse-accent">financial future</span>?
              </h1>
              <p className="text-xl text-finverse-black dark:text-finverse-white/80 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Simulate life decisions. Regret-proof your tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Link to="/login" className="btn-primary flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/simulation" className="btn-secondary flex items-center justify-center">
                  Start Simulation
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-finverse-blue to-finverse-accent rounded-full opacity-10 absolute top-0 -right-10 animate-pulse" style={{ animationDuration: "4s" }}></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Financial future visualization" 
                  className="rounded-2xl shadow-lg max-w-full relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-finverse-black/90">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-finverse-blue dark:text-finverse-white mb-4">
              Explore FinVerse Features
            </h2>
            <p className="text-finverse-black/80 dark:text-finverse-white/80 max-w-2xl mx-auto">
              Discover powerful tools to visualize, plan and optimize your financial future with our innovative platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.05 * index}s` }}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  route={feature.route}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
