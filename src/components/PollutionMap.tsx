import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default icon issue for Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const pollutionData = [
  {
    id: 1,
    city: 'Delhi',
    position: [28.6139, 77.209],
    level: 'Severe',
    color: 'red',
    info: 'AQI: 310',
  },
  {
    id: 2,
    city: 'Mumbai',
    position: [19.076, 72.8777],
    level: 'Moderate',
    color: 'yellow',
    info: 'AQI: 180',
  },
  {
    id: 3,
    city: 'Bangalore',
    position: [12.9716, 77.5946],
    level: 'Good',
    color: 'green',
    info: 'AQI: 60',
  },
  {
    id: 4,
    city: 'Kolkata',
    position: [22.5726, 88.3639],
    level: 'Moderate',
    color: 'yellow',
    info: 'AQI: 160',
  },
  {
    id: 5,
    city: 'Chennai',
    position: [13.0827, 80.2707],
    level: 'Good',
    color: 'green',
    info: 'AQI: 70',
  },
];

const PollutionMap: React.FC = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">India Pollution Map</h2>

        <MapContainer center={[22.9734, 78.6569]} zoom={5} className="h-[600px] rounded-lg z-0">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />

          {pollutionData.map((data) => (
            <Marker key={data.id} position={data.position}>
              <Popup>
                <div className="text-sm">
                  <p className="font-semibold">{data.city}</p>
                  <p>{data.level} Pollution</p>
                  <p>{data.info}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Legend */}
        <div className="mt-6 flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">Severe</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <span className="text-sm text-gray-600">Moderate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Good</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollutionMap;
