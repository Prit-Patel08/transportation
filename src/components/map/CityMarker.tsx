import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { City } from '../../types/city';

interface CityMarkerProps {
  city: City;
}

const CityMarker: React.FC<CityMarkerProps> = ({ city }) => {
  return (
    <Marker position={[city.lat, city.lng]}>
      <Popup>
        <div className="font-bold">{city.name}</div>
      </Popup>
    </Marker>
  );
};

export default CityMarker;
