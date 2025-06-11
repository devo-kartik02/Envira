// PollutionChart.jsx
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';
  
  const data = [
    { day: 'Mon', PM25: 95, PM10: 120 },
    { day: 'Tue', PM25: 100, PM10: 110 },
    { day: 'Wed', PM25: 85, PM10: 105 },
    { day: 'Thu', PM25: 120, PM10: 130 },
    { day: 'Fri', PM25: 90, PM10: 115 },
  ];
  
  function PollutionChart() {
    return (
      <div className="w-full h-96 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Weekly Pollution Trend</h2>
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={data}>
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
    );
  }
  
  export default PollutionChart;
  