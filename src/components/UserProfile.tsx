import React, { useState } from 'react';
import { MapPin, Bell, Activity, Award, TrendingUp, BarChart2, Leaf } from 'lucide-react';

const UserProfile: React.FC = () => {
  // Sample data for user purchased trees and tokens earned
  const [userData] = useState({
    name: 'Rahul Sharma',
    location: 'New Delhi, India',
    treesPurchased: [
      { name: 'Neem Tree', tokens: 5 },
      { name: 'Peepal Tree', tokens: 3 },
      { name: 'Bamboo', tokens: 2 }
    ],
    totalTokens: 10,
    reportsSubmitted: 15,
    issuesResolved: 8,
    activeAlerts: 3,
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Cover Image */}
            <div
              className="h-48 w-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80')`
              }}
            />

            {/* Profile Info */}
            <div className="relative px-6 py-8">
              <div className="absolute -top-16 left-6">
                <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=128&h=128"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="ml-36">
                <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
                <p className="text-gray-600 flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {userData.location}
                </p>
                <div className="mt-4 flex space-x-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Environmental Champion
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Top Contributor
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 px-6 py-4 border-t border-gray-200">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-blue-600">{userData.reportsSubmitted}</div>
                <div className="text-gray-600">Reports Submitted</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-green-600">{userData.issuesResolved}</div>
                <div className="text-gray-600">Issues Resolved</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-purple-600">{userData.activeAlerts}</div>
                <div className="text-gray-600">Active Alerts</div>
              </div>
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Leaf className="mr-2 text-green-600" />
              Environmental Impact
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium text-green-800">Carbon Footprint Reduction</h3>
                <p className="text-2xl font-bold text-green-600 mt-2">-2.5 tons</p>
                <p className="text-sm text-green-700 mt-1">Through reported violations</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800">Water Quality Improvement</h3>
                <p className="text-2xl font-bold text-blue-600 mt-2">+15%</p>
                <p className="text-sm text-blue-700 mt-1">In reported areas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="mr-2 text-yellow-600" />
              Achievements
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Award className="text-yellow-600" size={20} />
                </div>
                <div>
                  <p className="font-medium">First Response</p>
                  <p className="text-sm text-gray-600">First pollution report submitted</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <TrendingUp className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-medium">Impact Maker</p>
                  <p className="text-sm text-gray-600">5 reports led to action</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trees Purchased */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Leaf className="mr-2 text-green-600" />
              Trees Adopted
            </h2>
            <div className="space-y-4">
              {userData.treesPurchased.map((tree, index) => (
                <div key={index} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{tree.name}</span>
                  <span className="text-sm text-gray-600">{tree.tokens} Tokens Earned</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="font-medium text-gray-900">Total Tokens Earned: {userData.totalTokens}</p>
            </div>
          </div>

          {/* Activity Analytics */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart2 className="mr-2 text-blue-600" />
              Activity Analytics
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Report Accuracy</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Response Rate</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-600 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Activity className="text-blue-500" />
                <div>
                  <p className="font-medium">Reported water pollution in Yamuna River</p>
                  <p className="text-sm text-gray-600">2 days ago</p>
                  <p className="text-sm text-green-600 mt-1">Status: Under Investigation</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Bell className="text-orange-500" />
                <div>
                  <p className="font-medium">Received alert for high AQI levels</p>
                  <p className="text-sm text-gray-600">5 days ago</p>
                  <p className="text-sm text-blue-600 mt-1">Area: South Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
