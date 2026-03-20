import React from 'react';
import { Button } from "@/components/ui/button";
import { useSimulation } from "@/hooks/useSimulation";

const RunSimulationButton = () => {
  const { runSimulation, isLoading } = useSimulation();

  return (
    <Button 
      onClick={runSimulation}
      disabled={isLoading}
      className="w-full bg-[#00D1FF] hover:bg-[#00B8E6] text-[#0B0E14] font-black py-6 rounded-lg shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all"
    >
      {isLoading ? 'PROCESSING...' : 'EXECUTE TRAFFIC MODEL'}
    </Button>
  );
};

export default RunSimulationButton;
