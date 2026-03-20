import React from 'react';
import { useSimulationStore } from "@/store/simulationStore";
import { Trash2, History, ChevronRight } from "lucide-react";

const ScenarioComparison = () => {
  const { scenarios, removeScenario } = useSimulationStore();

  if (scenarios.length === 0) return null;

  return (
    <div className="mt-12 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#00D1FF]/10 rounded-lg">
            <History className="w-5 h-5 text-[#00D1FF]" />
          </div>
          <h3 className="text-xl font-black text-white tracking-tight italic uppercase">Scenario Comparison</h3>
        </div>
        <div className="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">
          {scenarios.length} {scenarios.length === 1 ? 'Scenario' : 'Scenarios'} Cached
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {scenarios.map((scenario) => (
          <div 
            key={scenario.id} 
            className="group relative bg-[#12161F]/80 backdrop-blur-md border border-slate-800/50 rounded-2xl overflow-hidden transition-all hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.05)]"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-sm font-black text-[#00D1FF] tracking-wider uppercase mb-1">{scenario.name}</h4>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>{scenario.city}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                    <span>{scenario.timestamp}</span>
                  </div>
                </div>
                <button 
                  onClick={() => removeScenario(scenario.id)}
                  className="p-2 text-slate-600 hover:text-red-400 transition-colors bg-slate-800/30 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-bold tracking-wider">
                  <span className="text-slate-500 uppercase">Mobility Score</span>
                  <span className="text-white font-black italic">{Math.round(scenario.results.mobilityScore)}/100</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-[#00D1FF]" 
                    style={{ width: `${scenario.results.mobilityScore}%` }}
                  ></div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#0B0E14] p-3 rounded-xl border border-slate-800/50">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Density Init.</p>
                    <p className="text-sm font-black text-[#00D1FF] italic">-{Math.round(scenario.results.congestionReduction)}%</p>
                  </div>
                  <div className="bg-[#0B0E14] p-3 rounded-xl border border-slate-800/50">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Emissions</p>
                    <p className="text-sm font-black text-red-400 italic">-{Math.round(scenario.results.co2Reduction)}%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-slate-800/20 border-t border-slate-800/50 flex items-center justify-between group-hover:bg-[#00D1FF]/5 transition-colors cursor-pointer">
              <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Inspect Policy Meta</span>
              <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-[#00D1FF] transition-all" />
            </div>
          </div>
        ))}

        {scenarios.length < 3 && (
          <div className="border-2 border-dashed border-slate-800/50 rounded-2xl flex flex-col items-center justify-center p-8 text-slate-600 space-y-3 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
            <div className="p-3 bg-slate-800/50 rounded-full">
              <History className="w-6 h-6" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-center max-w-[140px]">Save up to 3 scenarios for comparison</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenarioComparison;
