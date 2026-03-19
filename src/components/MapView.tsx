import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSimulationStore } from '../store/simulationStore';
import { Activity } from 'lucide-react';

const ChangeView = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  map.setView(center, 12);
  return null;
};

const MapView = () => {
  const { selectedCity } = useSimulationStore();

  return (
    <div className="relative w-full h-[450px] rounded-xl overflow-hidden border border-slate-800/50">
      <MapContainer 
        center={[selectedCity.lat, selectedCity.lng]} 
        zoom={12} 
        style={{ height: '100%', width: '100%', filter: 'invert(100%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
        zoomControl={false}
      >
        <ChangeView center={[selectedCity.lat, selectedCity.lng]} />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
      </MapContainer>
      
      {/* Overlays */}
      <div className="absolute top-6 left-6 z-[1000] bg-[#12161F]/90 backdrop-blur p-4 rounded-xl border border-slate-800/50 w-48">
        <h4 className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-4">Live Congestion</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#EF4444]"></div>
            <span className="text-[10px] font-bold text-slate-300">High Density</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
            <span className="text-[10px] font-bold text-slate-300">Medium Flow</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#00D1FF]"></div>
            <span className="text-[10px] font-bold text-slate-300">Optimal</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-[1000]">
        <button className="bg-[#1A1F2B]/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-800/50 flex items-center gap-2 text-[10px] font-black text-slate-300 tracking-widest hover:bg-[#252B3B] transition-all">
          <Activity className="w-3 h-3 text-[#00D1FF]" />
          2035 TRAFFIC FORECAST MODE
        </button>
      </div>
    </div>
  );
};

export default MapView;