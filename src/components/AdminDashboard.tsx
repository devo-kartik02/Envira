import React from 'react';
import { 
  Users, Settings, AlertTriangle, Activity, 
  BarChart2, MapPin, Wind, Droplets, 
  Bell, Shield, Server, Database,
  TrendingUp, UserPlus, Clock, Filter
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* System Overview */}
        <div className="lg:col-span-4 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Server className="mr-2 text-blue-600" />
            System Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-blue-800">Active Sensors</h3>
                <Settings className="text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-600 mt-2">248</p>
              <p className="text-sm text-blue-600 mt-1">+12 from last week</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-green-800">Users</h3>
                <Users className="text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-600 mt-2">15,832</p>
              <p className="text-sm text-green-600 mt-1">+2,345 this month</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-yellow-800">Reports</h3>
                <AlertTriangle className="text-yellow-600" />
              </div>
              <p className="text-3xl font-bold text-yellow-600 mt-2">1,248</p>
              <p className="text-sm text-yellow-600 mt-1">89% resolution rate</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-purple-800">Data Points</h3>
                <Database className="text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-purple-600 mt-2">2.4M</p>
              <p className="text-sm text-purple-600 mt-1">Collected today</p>
            </div>
          </div>
        </div>

        {/* Air Quality Monitoring */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <Wind className="mr-2 text-blue-600" />
            Air Quality Parameters
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">PM2.5 Levels</span>
                <span className="text-red-600 font-medium">75 µg/m³</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-red-600 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">PM10 Levels</span>
                <span className="text-orange-600 font-medium">120 µg/m³</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-orange-600 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">NO2 Levels</span>
                <span className="text-yellow-600 font-medium">45 ppb</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-yellow-600 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">O3 Levels</span>
                <span className="text-green-600 font-medium">32 ppb</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-600 rounded-full" style={{ width: '32%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Water Quality Monitoring */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <Droplets className="mr-2 text-blue-600" />
            Water Quality Parameters
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">pH Level</span>
                <span className="text-green-600 font-medium">7.2</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-600 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Dissolved Oxygen</span>
                <span className="text-blue-600 font-medium">8.5 mg/L</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Turbidity</span>
                <span className="text-yellow-600 font-medium">12 NTU</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-yellow-600 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Total Dissolved Solids</span>
                <span className="text-orange-600 font-medium">350 ppm</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-orange-600 rounded-full" style={{ width: '58%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Critical Alerts */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <Bell className="mr-2 text-red-600" />
            Critical Alerts
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="text-red-500 mt-1" />
              <div>
                <p className="font-medium text-red-800">Severe Air Quality</p>
                <p className="text-sm text-red-600">PM2.5 exceeds safe limits in Sector 12</p>
                <p className="text-xs text-red-500 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
              <AlertTriangle className="text-orange-500 mt-1" />
              <div>
                <p className="font-medium text-orange-800">Industrial Discharge</p>
                <p className="text-sm text-orange-600">Abnormal pH levels detected in River Zone B</p>
                <p className="text-xs text-orange-500 mt-1">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <AlertTriangle className="text-yellow-500 mt-1" />
              <div>
                <p className="font-medium text-yellow-800">Sensor Malfunction</p>
                <p className="text-sm text-yellow-600">3 sensors offline in East Delhi</p>
                <p className="text-xs text-yellow-500 mt-1">6 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <Activity className="mr-2 text-green-600" />
            System Health
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Server Uptime</span>
                <span className="text-green-600 font-medium">99.9%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-600 rounded-full" style={{ width: '99.9%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Data Processing</span>
                <span className="text-blue-600 font-medium">95.5%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '95.5%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Sensor Network</span>
                <span className="text-yellow-600 font-medium">92.8%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-yellow-600 rounded-full" style={{ width: '92.8%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">API Performance</span>
                <span className="text-purple-600 font-medium">97.2%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: '97.2%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <Shield className="mr-2 text-indigo-600" />
            Recent Reports
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500" />
                <div>
                  <p className="font-medium">Industrial Waste Dumping</p>
                  <p className="text-sm text-gray-600">Sector 15, Noida</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                Investigating
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-500" />
                <div>
                  <p className="font-medium">Air Quality Complaint</p>
                  <p className="text-sm text-gray-600">Dwarka, Delhi</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Resolved
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-500" />
                <div>
                  <p className="font-medium">Water Contamination</p>
                  <p className="text-sm text-gray-600">Ghaziabad</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                Critical
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <Bell className="text-blue-600" />
              <span className="font-medium text-blue-800">Send Alert</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
              <UserPlus className="text-green-600" />
              <span className="font-medium text-green-800">Add Admin</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
              <Settings className="text-purple-600" />
              <span className="font-medium text-purple-800">Settings</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors">
              <Filter className="text-yellow-600" />
              <span className="font-medium text-yellow-800">Filters</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;