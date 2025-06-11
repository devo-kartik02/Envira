import React from 'react';
import { Shield, Users, Home, VenetianMask as Mask, Wind, Sun, Droplets } from 'lucide-react';

const HealthTips: React.FC = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-red-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-red-500" size={24} />
            <h3 className="text-lg font-semibold text-red-800">Current Alert</h3>
          </div>
          <p className="text-red-700 mb-4">
            Air quality is currently unhealthy. Take necessary precautions.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-red-600">
              <Users size={18} />
              <span>Sensitive groups should stay indoors</span>
            </li>
            <li className="flex items-center gap-2 text-red-600">
              <Mask size={18} />
              <span>Wear N95 masks when outdoors</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Home className="text-blue-500" size={24} />
            <h3 className="text-lg font-semibold text-blue-800">Indoor Tips</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-blue-600">
              <Wind size={18} />
              <span>Use air purifiers if available</span>
            </li>
            <li className="flex items-center gap-2 text-blue-600">
              <Sun size={18} />
              <span>Keep windows closed during peak hours</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-green-500" size={24} />
            <h3 className="text-lg font-semibold text-green-800">Water Safety</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-green-600">
              <Droplets size={18} />
              <span>Boil water before drinking</span>
            </li>
            <li className="flex items-center gap-2 text-green-600">
              <Users size={18} />
              <span>Avoid contact with contaminated water</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;