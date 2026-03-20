import React from 'react';
import { TrendingDown, Clock, Fuel, Leaf, ShieldCheck } from 'lucide-react';
import MetricCard from './MetricCard';
import { SimulationMetrics } from '../../types/simulation';

interface MetricsGridProps {
  metrics: SimulationMetrics;
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  const cards = [
    { label: 'DENSITY MITIGATION', value: `${Math.round(metrics.congestionReduction)}%`, icon: TrendingDown, color: 'border-l-[#00D1FF]' },
    { label: 'TRANSIT TIME GAIN', value: `${Math.round(metrics.travelTimeImprovement)}%`, icon: Clock, color: 'border-l-[#3B82F6]' },
    { label: 'FUEL SAVINGS', value: `${Math.round(metrics.fuelSavings)}%`, icon: Fuel, color: 'border-l-[#F59E0B]' },
    { label: 'EMISSIONS ABATEMENT', value: `${Math.round(metrics.co2Reduction)}%`, icon: Leaf, color: 'border-l-[#EF4444]' },
    { label: 'NETWORK HEALTH SCORE', value: `${Math.round(metrics.mobilityScore)}/100`, icon: ShieldCheck, color: 'border-l-[#10B981]' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {cards.map((card, idx) => (
        <MetricCard key={idx} {...card} />
      ))}
    </div>
  );
};

export default MetricsGrid;
