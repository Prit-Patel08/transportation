import React from 'react';
import { useSimulationStore } from '../store/simulationStore';
import { TrendingDown, Clock, Fuel, Leaf, ShieldCheck } from 'lucide-react';

const MetricsPanel = () => {
  const { results } = useSimulationStore();

  const defaultMetrics = {
    congestionReduction: 28,
    travelTimeImprovement: 15,
    fuelSavings: 12,
    co2Reduction: 20,
    mobilityScore: 78
  };

  const metrics = results?.metrics || defaultMetrics;

  const cards = [
    { label: 'CONGESTION REDUCTION', value: `${metrics.congestionReduction}%`, icon: TrendingDown, color: 'border-l-[#00D1FF]' },
    { label: 'TRAVEL TIME IMPROVEMENT', value: `${metrics.travelTimeImprovement}%`, icon: Clock, color: 'border-l-[#3B82F6]' },
    { label: 'FUEL SAVINGS', value: `${metrics.fuelSavings}%`, icon: Fuel, color: 'border-l-[#F59E0B]' },
    { label: 'CO2 REDUCTION', value: `${metrics.co2Reduction}%`, icon: Leaf, color: 'border-l-[#EF4444]' },
    { label: 'SUSTAINABILITY SCORE', value: `${metrics.mobilityScore}/100`, icon: ShieldCheck, color: 'border-l-[#10B981]' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {cards.map((card, idx) => (
        <div key={idx} className={`bg-[#12161F] p-5 rounded-xl border border-slate-800/50 border-l-4 ${card.color} transition-all hover:bg-[#1A1F2B]`}>
          <p className="text-[10px] font-black text-slate-500 tracking-widest mb-4">{card.label}</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-black text-white tracking-tighter">{card.value}</p>
            <card.icon className="w-4 h-4 text-slate-600" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsPanel;