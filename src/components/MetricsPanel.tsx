import React from 'react';
import { useSimulationStore } from '../store/simulationStore';
import { TrendingDown, Clock, Fuel, Leaf, Gauge } from 'lucide-react';

const MetricsPanel = () => {
  const { results } = useSimulationStore();

  if (!results) return (
    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center">
      <p className="text-slate-400 font-medium">Run a simulation to see impact metrics</p>
    </div>
  );

  const { metrics } = results;

  const cards = [
    { label: 'Congestion Reduction', value: `${metrics.congestionReduction}%`, icon: TrendingDown, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Travel Time Improvement', value: `${metrics.travelTimeImprovement}%`, icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Fuel Savings', value: `${metrics.fuelSavings}%`, icon: Fuel, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'CO2 Reduction', value: `${metrics.co2Reduction}%`, icon: Leaf, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Sustainability Score', value: metrics.mobilityScore, icon: Gauge, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className={`${card.bg} ${card.color} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
            <card.icon className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-tight mb-1">{card.label}</p>
          <p className="text-2xl font-black text-slate-800">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default MetricsPanel;