import React from 'react';

const TrafficHeatmap = () => {
  // In a real application, this would use react-leaflet-heatmap-layer or similar
  return (
    <div className="absolute top-6 left-6 z-[1000] bg-[#12161F]/90 backdrop-blur p-4 rounded-xl border border-slate-800/50 w-56">
      <h4 className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-4">TRAFFIC DENSITY MAP</h4>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#EF4444]"></div>
          <span className="text-[10px] font-bold text-slate-300">CRITICAL CONGESTION</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
          <span className="text-[10px] font-bold text-slate-300">MODERATE DENSITY</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#00D1FF]"></div>
          <span className="text-[10px] font-bold text-slate-300">OPTIMIZED FLOW</span>
        </div>
      </div>
    </div>
  );
};

export default TrafficHeatmap;
