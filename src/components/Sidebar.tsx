import React from 'react';
import { LayoutDashboard, Car, Bus, Bike, Zap, Cpu, Settings, LifeBuoy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useSimulationStore } from '../store/simulationStore';
import { simulateTraffic } from '../services/api';
import { showSuccess, showError } from '../utils/toast';

const Sidebar = () => {
  const { 
    policies, 
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

  const navItems = [
    { icon: Car, label: 'CAR USAGE', active: true },
    { icon: Bus, label: 'PUBLIC TRANSIT' },
    { icon: Bike, label: 'BIKE LANES' },
    { icon: Zap, label: 'EV ADOPTION' },
    { icon: Cpu, label: 'SIGNAL OPT' },
  ];

  return (
    <aside className="w-64 bg-[#0B0E14] border-r border-slate-800/50 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-6 bg-[#00D1FF] rounded-full"></div>
          <h1 className="text-xl font-black tracking-tighter text-white">NEXUS TERMINAL</h1>
        </div>

        <div className="space-y-1">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">Policy Control</p>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                item.active 
                ? 'bg-[#1A1F2B] text-[#00D1FF] border-l-2 border-[#00D1FF]' 
                : 'text-slate-400 hover:text-white hover:bg-[#1A1F2B]/50'
              }`}
            >
              <item.icon className={`w-5 h-5 ${item.active ? 'text-[#00D1FF]' : 'text-slate-500 group-hover:text-slate-300'}`} />
              <span className="text-xs font-bold tracking-wide">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto p-6 space-y-6">
        <Button 
          onClick={handleRunSimulation}
          disabled={isLoading}
          className="w-full bg-[#00D1FF] hover:bg-[#00B8E6] text-[#0B0E14] font-black py-6 rounded-lg shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all"
        >
          {isLoading ? 'PROCESSING...' : 'RUN SIMULATION'}
        </Button>

        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            <span className="text-xs font-bold">SETTINGS</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-white transition-colors">
            <LifeBuoy className="w-4 h-4" />
            <span className="text-xs font-bold">SUPPORT</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;