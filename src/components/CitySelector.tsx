import React from 'react';
import { useSimulationStore } from '../store/simulationStore';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from 'lucide-react';

const CitySelector = () => {
  const { cities, selectedCity, setSelectedCity } = useSimulationStore();

  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
      <MapPin className="text-blue-600 w-5 h-5" />
      <span className="text-sm font-medium text-slate-500">Active City:</span>
      <Select 
        value={selectedCity.name} 
        onValueChange={(name) => {
          const city = cities.find(c => c.name === name);
          if (city) setSelectedCity(city);
        }}
      >
        <SelectTrigger className="w-[180px] border-none shadow-none focus:ring-0 font-semibold text-slate-900">
          <SelectValue placeholder="Select City" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city.name} value={city.name}>
              {city.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CitySelector;