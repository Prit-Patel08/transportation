import { useSimulationStore } from "@/store/simulationStore";
import { simulationApi } from "@/services/simulationApi";
import { toast } from "sonner";

export const useSimulation = () => {
  const { 
    city,
    policies, 
    setResults, 
    setIsLoading, 
    setStatusMessage, 
    isLoading 
  } = useSimulationStore();

  const runSimulation = async () => {
    setIsLoading(true);
    setStatusMessage('Running Simulation...');
    
    try {
      const response = await simulationApi.simulateTraffic({
        city: city.name,
        ...policies
      });
      
      setStatusMessage('Updating traffic model...');
      
      // Artificial delay for UX
      setTimeout(() => {
        setResults(response);
        setIsLoading(false);
        setStatusMessage('Simulation Complete');
        toast.success('Simulation results updated successfully!');
      }, 800);
      
    } catch (error) {
      setIsLoading(false);
      setStatusMessage('Simulation Failed');
      toast.error('Failed to run simulation.');
    }
  };

  return {
    runSimulation,
    isLoading,
    policies
  };
};
