import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import SliderControl from './SliderControl';
import { useSimulationStore } from '../../store/simulationStore';

const PolicyControls = () => {
  const { policies, setPolicy } = useSimulationStore();

  const controls = [
    { key: 'private_car_usage', label: 'PRIVATE CAR USAGE' },
    { key: 'public_transport', label: 'PUBLIC TRANSPORT' },
    { key: 'bike_lane_coverage', label: 'BIKE LANE COVERAGE' },
    { key: 'ev_adoption', label: 'EV ADOPTION' },
    { key: 'signal_optimization', label: 'SIGNAL OPTIMIZATION' },
  ];

  return (
    <div className="nexus-card p-6 h-full">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-sm font-black text-[#00D1FF] tracking-widest uppercase">Policy Controls</h3>
        <SlidersHorizontal className="w-4 h-4 text-slate-500" />
      </div>
      
      <div className="space-y-10">
        {controls.map((control) => (
          <SliderControl
            key={control.key}
            label={control.label}
            value={policies[control.key as keyof typeof policies]}
            onChange={(val) => setPolicy(control.key as keyof typeof policies, val)}
          />
        ))}
      </div>
    </div>
  );
};

export default PolicyControls;
