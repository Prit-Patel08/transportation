import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSimulationStore } from '../store/simulationStore';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const ChangeView = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  map.setView(center, 12);
  return null;
};

const MapView = () => {
  const { selectedCity, results } = useSimulationStore();

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
      <MapContainer 
        center={[selectedCity.lat, selectedCity.lng]} 
        zoom={12} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <ChangeView center={[selectedCity.lat, selectedCity.lng]} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[selectedCity.lat, selectedCity.lng]}>
          <Popup>
            {selectedCity.name} Traffic Center
          </Popup>
        </Marker>

        {/* Placeholder for Heatmap/Overlays */}
        {results && (
          <div className="absolute inset-0 pointer-events-none z-[1000] bg-blue-500/5 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-blue-600 shadow-xl border border-blue-100">
              TRAFFIC MODEL UPDATED
            </div>
          </div>
        )}
      </MapContainer>
      
      <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 backdrop-blur p-3 rounded-lg shadow-md border border-slate-100 text-[10px] uppercase tracking-wider font-bold text-slate-500">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div> High Congestion
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div> Moderate
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div> Low Congestion
        </div>
      </div>
    </div>
  );
};

export default MapView;