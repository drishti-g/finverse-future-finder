import { useState } from "react";
import { ChevronDown, Github, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is FinVerse?",
    answer: "FinVerse is a personal finance simulator that lets you explore alternate financial futures."
  },
  {
    question: "Is my data secure?",
    answer: "Yes! We're privacy-first. Your data stays with you, with no third-party selling."
  },
  {
    question: "Do I need any financial background?",
    answer: "Not at all. Our AI and easy visuals make it beginner-friendly."
  },
  {
    question: "Can I customize my future scenarios?",
    answer: "Absolutely. You can tweak career changes, investments, spending habits, and more."
  },
  {
    question: "Is FinVerse free?",
    answer: "The basic simulation is free. Advanced features may require premium access."
  }
];

const Footer = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <footer className="bg-finverse-black text-finverse-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQs Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-finverse-blue/30 pb-2"
                >
                  <button
                    className={`flex justify-between items-center w-full py-3 px-4 text-left rounded-md transition-colors ${
                      openFaq === index 
                        ? "bg-finverse-accent text-finverse-black" 
                        : "hover:bg-finverse-accent/20"
                    }`}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        openFaq === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="py-3 px-4 animate-slide-down">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <p className="mb-4">Reach us at: contact@finverse.example.com</p>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-finverse-white hover:text-finverse-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-finverse-white hover:text-finverse-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/drishti-goel-594967326/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-finverse-white hover:text-finverse-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
            
            <div className="pt-4 border-t border-finverse-blue/30">
              <p className="text-sm text-finverse-white/70">
                Efforts by – Drishti Goel, Rahul Patra, Kanduri Seshadri Vidyasagar
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center text-sm text-finverse-white/50">
          <p>© {new Date().getFullYear()} FinVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
