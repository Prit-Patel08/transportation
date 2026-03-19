import React from 'react';
import { useSimulationStore } from '../store/simulationStore';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { simulateTraffic } from '../services/api';
import { Play, Car, Bus, Bike, Zap, Cpu } from 'lucide-react';
import { showSuccess, showError } from '../utils/toast';

const PolicyControls = () => {
  const { 
    policies, 
    setPolicy, 
    selectedCity, 
    setResults, 
    setIsLoading, 
    setStatusMessage,
    isLoading 
  } = useSimulationStore();

  const handleRunSimulation = async () => {
    setIsLoading(true);
    setStatusMessage('Running Simulation...');
    
    try {
      const response = await simulateTraffic({
        city: selectedCity.name,
        ...policies
      });
      
      setStatusMessage('Updating traffic model...');
      setTimeout(() => {
        setResults(response);
        setIsLoading(false);
        setStatusMessage('Simulation Complete');
        showSuccess('Simulation results updated successfully!');
      }, 800);
    } catch (error) {
      setIsLoading(false);
      setStatusMessage('Simulation Failed');
      showError('Failed to run simulation.');
    }
  };

  const controls = [
    { key: 'private_car_usage', label: 'Private Car Usage', icon: Car, color: 'text-blue-500' },
    { key: 'public_transport', label: 'Public Transport', icon: Bus, color: 'text-green-500' },
    { key: 'bike_lane_coverage', label: 'Bike Lane Coverage', icon: Bike, color: 'text-orange-500' },
    { key: 'ev_adoption', label: 'EV Adoption', icon: Zap, color: 'text-yellow-500' },
    { key: 'signal_optimization', label: 'Signal Optimization', icon: Cpu, color: 'text-purple-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 h-full flex flex-col">
      <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        Policy Parameters
      </h3>
      
      <div className="space-y-8 flex-grow">
        {controls.map((control) => (
          <div key={control.key} className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <control.icon className={`w-4 h-4 ${control.color}`} />
                <label className="text-sm font-semibold text-slate-600">{control.label}</label>
              </div>
              <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                {policies[control.key as keyof typeof policies]}%
              </span>
            </div>
            <Slider
              value={[policies[control.key as keyof typeof policies]]}
              max={100}
              step={1}
              onValueChange={(val) => setPolicy(control.key as keyof typeof policies, val[0])}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>

      <Button 
        onClick={handleRunSimulation} 
        disabled={isLoading}
        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        ) : (
          <Play className="w-5 h-5 fill-current" />
        )}
        {isLoading ? 'Processing...' : 'Run Simulation'}
      </Button>
    </div>
  );
};

export default PolicyControls;