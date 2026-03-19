import React from 'react';
import { useSimulationStore } from '../store/simulationStore';
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal } from 'lucide-react';

const PolicyControls = () => {
  const { policies, setPolicy } = useSimulationStore();

  const controls = [
    { key: 'private_car_usage', label: 'PRIVATE CAR USAGE' },
    { key: 'public_transport', label: 'PUBLIC TRANSPORT' },
    { key: 'bike_lane_coverage', label: 'BIKE LANE COVERAGE' },
    { key: 'ev_adoption', label: 'EV ADOPTION' },
  ];

  return (
    <div className="nexus-card p-6 h-full">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-sm font-black text-[#00D1FF] tracking-widest uppercase">Policy Controls</h3>
        <SlidersHorizontal className="w-4 h-4 text-slate-500" />
      </div>
      
      <div className="space-y-10">
        {controls.map((control) => (
          <div key={control.key} className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-black text-slate-400 tracking-widest">{control.label}</label>
              <span className="text-xs font-black text-white">
                {policies[control.key as keyof typeof policies]}%
              </span>
            </div>
            <Slider
              value={[policies[control.key as keyof typeof policies]]}
              max={100}
              step={1}
              onValueChange={(val) => setPolicy(control.key as keyof typeof policies, val[0])}
              className="[&_[role=slider]]:bg-[#00D1FF] [&_[role=slider]]:border-none [&_.relative]:bg-slate-800 [&_.absolute]:bg-[#00D1FF]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyControls;