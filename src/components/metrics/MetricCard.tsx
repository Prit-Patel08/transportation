import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, icon: Icon, color }) => {
  return (
    <div className={`bg-[#12161F] p-5 rounded-xl border border-slate-800/50 border-l-4 ${color} transition-all hover:bg-[#1A1F2B]`}>
      <p className="text-[10px] font-black text-slate-500 tracking-widest mb-4">{label}</p>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-black text-white tracking-tighter">{value}</p>
        <Icon className="w-4 h-4 text-slate-600" />
      </div>
    </div>
  );
};

export default MetricCard;
