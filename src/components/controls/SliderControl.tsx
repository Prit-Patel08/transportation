import React from 'react';
import { Slider } from "@/components/ui/slider";

interface SliderControlProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  max?: number;
  step?: number;
}

const SliderControl: React.FC<SliderControlProps> = ({ 
  label, 
  value, 
  onChange, 
  max = 100, 
  step = 1 
}) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-[10px] font-black text-slate-400 tracking-widest">{label}</label>
        <span className="text-xs font-black text-white">{value}%</span>
      </div>
      <Slider
        value={[value]}
        max={max}
        step={step}
        onValueChange={(val) => onChange(val[0])}
        className="[&_[role=slider]]:bg-[#00D1FF] [&_[role=slider]]:border-none [&_.relative]:bg-slate-800 [&_.absolute]:bg-[#00D1FF]"
      />
    </div>
  );
};

export default SliderControl;
