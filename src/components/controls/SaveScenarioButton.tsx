import React from 'react';
import { Button } from "@/components/ui/button";
import { useSimulationStore } from "@/store/simulationStore";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

const SaveScenarioButton = () => {
  const { results, addScenario } = useSimulationStore();

  const handleSave = () => {
    addScenario();
    toast.success("Scenario saved successfully!");
  };

  return (
    <Button 
      onClick={handleSave}
      disabled={!results}
      variant="outline"
      className="w-full bg-transparent hover:bg-[#1A1F2B] text-slate-400 hover:text-[#00D1FF] border-slate-800 hover:border-[#00D1FF] font-bold py-4 rounded-lg flex items-center gap-2 transition-all uppercase text-[10px] tracking-widest"
    >
      <PlusCircle className="w-3 h-3" />
      SAVE SCENARIO
    </Button>
  );
};

export default SaveScenarioButton;
