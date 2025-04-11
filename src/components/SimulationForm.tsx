
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface SimulationFormProps {
  onSave: () => void;
}

const SimulationForm = ({ onSave }: SimulationFormProps) => {
  const [age, setAge] = useState(30);
  const [occupation, setOccupation] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState(50000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(30000);
  const [savings, setSavings] = useState(100000);
  const [debt, setDebt] = useState(0);

  return (
    <div className="bg-white dark:bg-finverse-blue/20 rounded-xl shadow-sm p-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-finverse-blue dark:text-finverse-white mb-6">
        Your Financial Profile
      </h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <div className="flex items-center gap-4">
              <Slider
                id="age"
                min={18}
                max={80}
                step={1}
                value={[age]}
                onValueChange={(value) => setAge(value[0])}
                className="flex-grow"
              />
              <span className="text-sm font-medium w-8 text-center">{age}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            <Input
              id="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="border-finverse-accent focus:border-finverse-blue"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="monthly-income">Monthly Income (₹)</Label>
            <Input
              id="monthly-income"
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="border-finverse-accent focus:border-finverse-blue"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="monthly-expenses">Monthly Expenses (₹)</Label>
            <Input
              id="monthly-expenses"
              type="number"
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
              className="border-finverse-accent focus:border-finverse-blue"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="savings">Total Savings (₹)</Label>
            <Input
              id="savings"
              type="number"
              value={savings}
              onChange={(e) => setSavings(Number(e.target.value))}
              className="border-finverse-accent focus:border-finverse-blue"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="debt">Total Debt (₹)</Label>
            <Input
              id="debt"
              type="number"
              value={debt}
              onChange={(e) => setDebt(Number(e.target.value))}
              className="border-finverse-accent focus:border-finverse-blue"
            />
          </div>
        </div>
        
        <Button 
          onClick={onSave}
          className="w-full md:w-auto bg-finverse-accent text-finverse-black hover:bg-finverse-blue hover:text-white transition-colors"
        >
          Save & Proceed
        </Button>
      </div>
    </div>
  );
};

export default SimulationForm;
