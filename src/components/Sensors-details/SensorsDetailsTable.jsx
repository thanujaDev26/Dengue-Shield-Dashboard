// src/components/SensorDetailsTable.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


// For page redirection

export default function SensorsDetailsTable  ({ sensors, handleAddMaintenance })  {
  const navigate = useNavigate();

  // Function to navigate to map page with the sensor's location
  const viewLocationOnMap = (latitude, longitude) => {
    // Navigate to map page and pass the latitude and longitude as state
    navigate({
      pathname: '/map',
      state: { latitude, longitude },
    });
  };

  // Function to check if a sensor has broken measurements
  const checkSensorStatus = (sensor) => {
    // Check if any measurement is invalid or missing
    if (
      isNaN(sensor.waterLevel) || 
      isNaN(sensor.flowSpeed) || 
      isNaN(sensor.temperature) || 
      isNaN(sensor.humidity) || 
      !sensor.waterLevel || 
      !sensor.flowSpeed || 
      !sensor.temperature || 
      !sensor.humidity
    ) {
      return 'Broken';  // Mark as broken if any measurement is missing or invalid
    }
    return 'Normal';  // Otherwise, it's normal
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Sensor Details</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">Sensor ID</th>
            <th className="border px-4 py-2">Water Level (cm)</th>
            <th className="border px-4 py-2">Flow Speed (m/s)</th>
            <th className="border px-4 py-2">Temperature (°C)</th>
            <th className="border px-4 py-2">Humidity (%)</th>
            <th className="border px-4 py-2">District</th>
            <th className="border px-4 py-2">Status</th> {/* Added Status Column */}
            <th className="border px-4 py-2">View Location</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {sensors.map((sensor) => {
            const status = checkSensorStatus(sensor);  // Get the status of the sensor
            return (
              <tr key={sensor.id}>
                <td className="border px-4 py-2">{sensor.id}</td>
                <td className="border px-4 py-2">{sensor.waterLevel}</td>
                <td className="border px-4 py-2">{sensor.flowSpeed}</td>
                <td className="border px-4 py-2">{sensor.temperature}</td>
                <td className="border px-4 py-2">{sensor.humidity}</td>
                <td className="border px-4 py-2">{sensor.district}</td>
                <td className={`border px-4 py-2 ${status === 'Broken' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                  {status}
                </td> {/* Show Status */}
                <td className="border px-4 py-2">
                  <button
                    onClick={() => viewLocationOnMap(sensor.latitude, sensor.longitude)}
                    className="bg-blue-500 text-white py-1 px-4 rounded"
                  >
                    View Location
                  </button>
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleAddMaintenance(sensor.id)}
                    className="bg-yellow-500 text-white py-1 px-4 rounded"
                  >
                    Add Maintenance Issue
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};


