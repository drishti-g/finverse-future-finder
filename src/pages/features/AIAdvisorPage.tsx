
import { useState, useEffect, useRef } from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAdvisorPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm your FinVerse AI Advisor. How can I help with your financial questions today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Random delay to simulate AI thinking and typing
    setTimeout(() => {
      const responses = [
        "Based on your financial profile, I'd recommend increasing your emergency fund to cover 6 months of expenses.",
        "Looking at current market conditions, a diversified portfolio with 60% equity and 40% debt might be suitable for your risk profile.",
        "Have you considered investing in index funds? They offer lower fees and good returns for passive investors.",
        "For your retirement goals, you might want to increase your monthly savings by about 15% to reach your target corpus.",
        "Tax-saving investments like ELSS funds could help you save on taxes while building wealth for the long term."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      }]);
      
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    
    simulateAIResponse(inputMessage);
  };

  // Format time as HH:MM
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <FeaturePageLayout
      title="AI Advisor"
      subheading="Ask your personal finance questions, get instant suggestions."
    >
      <div className="bg-white dark:bg-finverse-blue/20 rounded-xl border border-finverse-accent shadow-sm p-4 h-[600px] flex flex-col">
        <div className="flex-1 overflow-y-auto px-2 py-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                {message.sender === 'ai' && (
                  <Avatar className="h-8 w-8 bg-finverse-blue text-white mr-2 flex items-center justify-center">
                    <span className="text-xs">AI</span>
                  </Avatar>
                )}
                
                <div className={`rounded-2xl px-4 py-3 ${
                  message.sender === 'user' 
                    ? 'bg-finverse-accent text-finverse-black ml-2' 
                    : 'bg-finverse-blue text-white'
                }`}>
                  <p>{message.text}</p>
                  <div className={`text-xs mt-1 ${
                    message.sender === 'user' 
                      ? 'text-finverse-black/60' 
                      : 'text-white/60'
                  }`}>
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start max-w-[80%]">
                <Avatar className="h-8 w-8 bg-finverse-blue text-white mr-2 flex items-center justify-center">
                  <span className="text-xs">AI</span>
                </Avatar>
                <div className="bg-finverse-blue text-white rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSendMessage} className="pt-4 border-t border-finverse-accent/30 mt-auto">
          <div className="flex items-center gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask a question about your finances..."
              className="flex-1 border-finverse-accent focus:border-finverse-blue"
            />
            <Button 
              type="submit"
              className="bg-finverse-blue text-white hover:bg-finverse-accent hover:text-finverse-black"
              disabled={isTyping}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </FeaturePageLayout>
  );
};

export default AIAdvisorPage;
