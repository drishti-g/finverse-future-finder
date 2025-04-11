
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is just a frontend prototype, so we'll mock the login/signup
    if (email && password) {
      toast({
        title: isLogin ? "Logged in successfully!" : "Account created successfully!",
        description: "Redirecting to simulation page...",
      });
      
      // Simulate successful authentication
      setTimeout(() => {
        navigate("/simulation");
      }, 1500);
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-finverse-black/95 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="glass p-8 rounded-xl shadow-lg backdrop-blur-lg border border-finverse-accent/50">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-finverse-blue dark:text-finverse-white mb-6">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-finverse-black/70 dark:text-finverse-white/70 mb-8">
              {isLogin
                ? "Sign in to continue your financial journey"
                : "Sign up to start exploring your financial future"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="border-finverse-accent focus:border-finverse-blue"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="border-finverse-accent focus:border-finverse-blue"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-finverse-blue text-white hover:bg-finverse-accent hover:text-finverse-black transition-colors"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-finverse-blue dark:text-finverse-accent hover:underline focus:outline-none text-sm"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
