import React from 'react';
import { Settings, Bell, User } from 'lucide-react';
import { useCitySelection } from "@/hooks/useCitySelection";
import { useSimulationStore } from "@/store/simulationStore";

const Header = () => {
  const { cities, city: selectedCity, setCity } = useCitySelection();
  const { statusMessage } = useSimulationStore();

  return (
    <header className="h-20 border-b border-slate-800/50 flex items-center justify-between px-8 bg-[#0B0E14]/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="flex items-center gap-8">
        {cities.map((c) => (
          <button
            key={c.name}
            onClick={() => setCity(c.name)}
            className={`text-sm font-bold tracking-wide transition-all relative py-2 ${
              c.name === selectedCity.name ? 'text-[#00D1FF]' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {c.name}
            {c.name === selectedCity.name && (
              <div className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-[#00D1FF] shadow-[0_0_10px_rgba(0,209,255,0.5)]"></div>
            )}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#1A1F2B] rounded-full border border-slate-800/50">
          <div className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse"></div>
          <span className="text-[10px] font-black text-[#00D1FF] uppercase tracking-widest">{statusMessage}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-500 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-lg bg-[#1A1F2B] border border-slate-800/50 flex items-center justify-center text-slate-400">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
