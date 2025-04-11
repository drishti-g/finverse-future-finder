
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import SimulationPage from "./pages/SimulationPage";
import FinancialFuturesPage from "./pages/features/FinancialFuturesPage";
import AIAdvisorPage from "./pages/features/AIAdvisorPage";
import SpendingPatternPage from "./pages/features/SpendingPatternPage";
import RegretMeterPage from "./pages/features/RegretMeterPage";
import ChaosModePagePage from "./pages/features/ChaosModePagePage";
import PersonaModePage from "./pages/features/PersonaModePage";
import LifestyleSwitcherPage from "./pages/features/LifestyleSwitcherPage";
import DreamPlannerPage from "./pages/features/DreamPlannerPage";
import CelebrityAdvisorPage from "./pages/features/CelebrityAdvisorPage";
import MilestonePlannerPage from "./pages/features/MilestonePlannerPage";
import MicroHabitPage from "./pages/features/MicroHabitPage";
import PeerBenchmarkPage from "./pages/features/PeerBenchmarkPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/simulation" element={<SimulationPage />} />
                <Route path="/features/financial-futures" element={<FinancialFuturesPage />} />
                <Route path="/features/ai-advisor" element={<AIAdvisorPage />} />
                <Route path="/features/spending-pattern" element={<SpendingPatternPage />} />
                <Route path="/features/regret-meter" element={<RegretMeterPage />} />
                <Route path="/features/chaos-mode" element={<ChaosModePagePage />} />
                <Route path="/features/persona-mode" element={<PersonaModePage />} />
                <Route path="/features/lifestyle-switcher" element={<LifestyleSwitcherPage />} />
                <Route path="/features/dream-planner" element={<DreamPlannerPage />} />
                <Route path="/features/celebrity-advisor" element={<CelebrityAdvisorPage />} />
                <Route path="/features/milestone-planner" element={<MilestonePlannerPage />} />
                <Route path="/features/micro-habit" element={<MicroHabitPage />} />
                <Route path="/features/peer-benchmark" element={<PeerBenchmarkPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
