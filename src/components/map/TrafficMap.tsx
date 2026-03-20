import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '@/types/city';
import { Activity } from 'lucide-react';
import CityMarker from './CityMarker';
import TrafficHeatmap from './TrafficHeatmap';

const ChangeView = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 12);
  }, [center, map]);
  return null;
};

interface TrafficMapProps {
  city: City;
}

const TrafficMap: React.FC<TrafficMapProps> = ({ city }) => {
  return (
    <div className="relative w-full h-[450px] rounded-xl overflow-hidden border border-slate-800/50">
      <MapContainer
        {...({
          center: [city.lat, city.lng] as [number, number],
          zoom: 12,
          style: { height: '100%', width: '100%', filter: 'invert(100%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' },
          zoomControl: false
        } as any)}
      >
        <ChangeView center={[city.lat, city.lng]} />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <CityMarker city={city} />
      </MapContainer>

      <TrafficHeatmap />

      <div className="absolute bottom-6 right-6 z-[1000]">
        <button className="bg-[#1A1F2B]/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-800/50 flex items-center gap-2 text-[10px] font-black text-slate-300 tracking-widest hover:bg-[#252B3B] transition-all">
          <Activity className="w-3 h-3 text-[#00D1FF]" />
          LIVE TRAFFIC SIMULATION
        </button>
      </div>
    </div>
  );
};

export default TrafficMap;
