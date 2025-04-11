
import { useState } from "react";
import { CheckCircle, TrendingUp } from "lucide-react";
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "How much do you typically spend on dining out monthly?",
    options: [
      { id: "q1-a", text: "Under ₹1000" },
      { id: "q1-b", text: "₹1000-₹3000" },
      { id: "q1-c", text: "₹3000+" }
    ]
  },
  {
    id: "q2",
    question: "Which best describes your buying style?",
    options: [
      { id: "q2-a", text: "Impulsive" },
      { id: "q2-b", text: "Planned" },
      { id: "q2-c", text: "Deal Hunter" },
      { id: "q2-d", text: "Luxury Oriented" }
    ]
  },
  {
    id: "q3",
    question: "How do you approach saving money?",
    options: [
      { id: "q3-a", text: "I save a fixed amount every month" },
      { id: "q3-b", text: "I save whatever is left after expenses" },
      { id: "q3-c", text: "I rarely save" },
      { id: "q3-d", text: "I invest rather than save" }
    ]
  },
  {
    id: "q4",
    question: "When making a large purchase, you usually:",
    options: [
      { id: "q4-a", text: "Buy immediately if you want it" },
      { id: "q4-b", text: "Research thoroughly and plan for weeks" },
      { id: "q4-c", text: "Wait for sales or discounts" },
      { id: "q4-d", text: "Consult with family or friends first" }
    ]
  },
  {
    id: "q5",
    question: "How often do you check your bank balance?",
    options: [
      { id: "q5-a", text: "Daily" },
      { id: "q5-b", text: "Weekly" },
      { id: "q5-c", text: "Monthly" },
      { id: "q5-d", text: "Only when I'm worried about money" }
    ]
  }
];

const spendingPatterns = [
  "You're a moderate spender, with a slight impulsive streak.",
  "You're quite thrifty and plan your finances carefully.",
  "You're a value-focused spender who hunts for the best deals.",
  "You tend to splurge on luxury items but are cautious with everyday expenses.",
  "You're a mindful spender who balances enjoyment with financial security."
];

const SpendingPatternPage = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [pattern, setPattern] = useState("");

  const handleOptionSelect = (questionId: string, optionId: string) => {
    setAnswers({
      ...answers,
      [questionId]: optionId
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      completeQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const completeQuiz = () => {
    // In a real app, we would analyze the answers here
    // For this demo, we'll just select a random pattern
    const randomPattern = spendingPatterns[Math.floor(Math.random() * spendingPatterns.length)];
    setPattern(randomPattern);
    setQuizCompleted(true);
    toast({
      title: "Quiz Completed!",
      description: "Your spending pattern has been analyzed."
    });
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setQuizCompleted(false);
    setPattern("");
  };

  const currentQuestionData = quizQuestions[currentQuestion];
  
  return (
    <FeaturePageLayout 
      title="Spending Pattern Quiz" 
      subheading="Let's understand your behavior to tailor better advice."
    >
      <div className="bg-white dark:bg-finverse-blue/20 rounded-xl shadow-md p-6 md:p-8">
        {!quizCompleted ? (
          <div className="space-y-6">
            {/* Progress indicator */}
            <div className="w-full bg-gray-200 dark:bg-finverse-blue/40 h-2 rounded-full mb-6">
              <div 
                className="bg-finverse-accent dark:bg-finverse-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-finverse-blue dark:text-finverse-white mb-2">
                {currentQuestionData.question}
              </h3>
              <p className="text-finverse-black/70 dark:text-finverse-white/70">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </p>
            </div>
            
            <div className="space-y-3">
              {currentQuestionData.options.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(currentQuestionData.id, option.id)}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-200 flex items-center ${
                    answers[currentQuestionData.id] === option.id
                      ? "bg-finverse-accent/50 dark:bg-finverse-accent/30 border-2 border-finverse-accent"
                      : "bg-gray-100 dark:bg-finverse-blue/10 hover:bg-finverse-accent/20 dark:hover:bg-finverse-accent/10 border-2 border-transparent"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                    answers[currentQuestionData.id] === option.id
                      ? "bg-finverse-accent text-finverse-blue"
                      : "bg-gray-200 dark:bg-finverse-blue/20"
                  }`}>
                    {answers[currentQuestionData.id] === option.id && (
                      <CheckCircle className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-finverse-blue dark:text-finverse-white">{option.text}</span>
                </button>
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="px-6"
              >
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestionData.id]}
                className="bg-finverse-blue text-white hover:bg-finverse-accent hover:text-finverse-blue px-6"
              >
                {currentQuestion === quizQuestions.length - 1 ? "See My Pattern" : "Next"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6 py-8 animate-fade-in">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-finverse-accent/30 dark:bg-finverse-accent/20 rounded-full flex items-center justify-center">
                <TrendingUp size={50} className="text-finverse-blue dark:text-finverse-accent" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-finverse-blue dark:text-finverse-white mb-4">
              Your Spending Pattern Analysis
            </h3>
            
            <div className="p-6 bg-finverse-accent/10 dark:bg-finverse-accent/5 rounded-xl border border-finverse-accent/30 max-w-2xl mx-auto mb-8">
              <p className="text-xl text-finverse-blue dark:text-finverse-white">
                {pattern}
              </p>
            </div>
            
            <div className="space-y-4 max-w-lg mx-auto text-left">
              <h4 className="font-semibold text-finverse-blue dark:text-finverse-white">What this means for you:</h4>
              <ul className="list-disc list-inside space-y-2 text-finverse-black/80 dark:text-finverse-white/80">
                <li>Understanding your pattern helps identify areas to improve</li>
                <li>We can suggest customized savings strategies</li>
                <li>Personalized recommendations for your financial journey</li>
              </ul>
            </div>
            
            <Button
              onClick={resetQuiz}
              className="mt-8 bg-finverse-blue text-white hover:bg-finverse-accent hover:text-finverse-blue"
            >
              Retake Quiz
            </Button>
          </div>
        )}
      </div>
    </FeaturePageLayout>
  );
};

export default SpendingPatternPage;
