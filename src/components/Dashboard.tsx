import React, { useState } from 'react';
import {
  LineChart as LineChartIcon,
  BarChart2,
  Droplets,
  Wind,
  Bell,
  MapPin,
  AlertTriangle,
} from 'lucide-react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const slides = [
  {
    title: 'Monitor Air & Water Quality',
    description: 'Get real-time updates and stay informed about environmental conditions.',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Report Pollution Incidents',
    description: 'Help authorities take quick action by reporting issues in your area.',
    image: 'https://images.unsplash.com/photo-1618337805185-e7d8f468a29d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwb2xsdXRpb258ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Stay Alert & Safe',
    description: 'Receive instant alerts on hazardous conditions in your locality.',
    image: 'https://images.unsplash.com/photo-1603016129004-c7539f86b53f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0ZXIlMjBwb2xsdXRpb258ZW58MHx8MHx8fDA%3D',
  },
];

const pollutionData = [
  { day: 'Mon', PM25: 95, PM10: 120 },
  { day: 'Tue', PM25: 100, PM10: 110 },
  { day: 'Wed', PM25: 85, PM10: 105 },
  { day: 'Thu', PM25: 120, PM10: 130 },
  { day: 'Fri', PM25: 90, PM10: 115 },
  { day: 'Sat', PM25: 80, PM10: 98 },
  { day: 'Sun', PM25: 88, PM10: 104 },
];

const Dashboard: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Slider */}
      <div className="relative w-full overflow-hidden rounded-xl shadow-md">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-80 md:h-96 lg:h-[28rem] relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl flex flex-col justify-end p-6 text-white">
                <h2 className="text-xl md:text-2xl font-bold">{slide.title}</h2>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
        >
          ▶
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Air Quality */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Air Quality Index</h3>
            <Wind className="text-blue-500" />
          </div>
          <div className="text-4xl font-bold text-blue-600">156</div>
          <div className="mt-2 text-sm text-red-500">Unhealthy</div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>PM2.5: 75 µg/m³</span>
            <span>PM10: 120 µg/m³</span>
          </div>
        </div>

        {/* Water Quality */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Water Quality Index</h3>
            <Droplets className="text-cyan-500" />
          </div>
          <div className="text-4xl font-bold text-cyan-600">82</div>
          <div className="mt-2 text-sm text-green-500">Good</div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>pH: 7.2</span>
            <span>TDS: 350 ppm</span>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Active Alerts</h3>
            <Bell className="text-orange-500" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="text-red-500" size={20} />
              <div>
                <p className="text-sm font-medium text-red-800">High PM2.5 Levels</p>
                <p className="text-xs text-red-600">Sector 12, Noida</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
              <AlertTriangle className="text-yellow-500" size={20} />
              <div>
                <p className="text-sm font-medium text-yellow-800">Moderate Water Pollution</p>
                <p className="text-xs text-yellow-600">Lake Area, Chennai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pollution Trends */}
        <div className="bg-white rounded-xl shadow-lg p-6 col-span-1 md:col-span-2 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Pollution Trends</h3>
            <LineChartIcon className="text-purple-500" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pollutionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="PM25" stroke="#8884d8" />
                <Line type="monotone" dataKey="PM10" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Recent Reports</h3>
            <BarChart2 className="text-green-500" />
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-red-500 mt-1" size={20} />
              <div>
                <p className="text-sm font-medium text-gray-800">Industrial Waste Dumping</p>
                <p className="text-xs text-gray-600">Reported 2 hours ago</p>
                <p className="text-xs text-orange-500">Under Investigation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-green-500 mt-1" size={20} />
              <div>
                <p className="text-sm font-medium text-gray-800">Open Burning</p>
                <p className="text-xs text-gray-600">Reported 5 hours ago</p>
                <p className="text-xs text-green-500">Resolved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
