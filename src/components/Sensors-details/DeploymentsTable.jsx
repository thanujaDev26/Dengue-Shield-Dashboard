//
import React from 'react';

export default function DeploymentsTable({
  sensors,
  checkSensorStatus,
  handleViewMaintenance,
  maintenanceRecords,
  handleAddMaintenanceIssue, // Add handler for the "Add Maintenance Issue" button
}) {
  return (
    <div className="deployments-table">
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
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sensors.map((sensor) => {
            const status = checkSensorStatus(sensor);
            const hasMaintenance = Array.isArray(maintenanceRecords) && maintenanceRecords.some(
              (record) => record.sensorId === sensor.id
            );

            return (
              <tr key={sensor.id}>
                <td className="border px-4 py-2">{sensor.id}</td>
                <td className="border px-4 py-2">{sensor.waterLevel}</td>
                <td className="border px-4 py-2">{sensor.flowSpeed}</td>
                <td className="border px-4 py-2">{sensor.temperature}</td>
                <td className="border px-4 py-2">{sensor.humidity}</td>
                <td className="border px-4 py-2">{sensor.district}</td>
                <td
                  className={`border px-4 py-2 ${
                    status === 'Issue' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                  }`}
                >
                  {status}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleViewMaintenance(sensor.id)}
                    className="bg-blue-500 text-white py-1 px-4 rounded"
                  >
                    View Maintenance
                  </button>

                  {/* Display the Add Maintenance Issue button only if the status is 'Issue' and no maintenance exists */}
                  {status === 'Issue' && !hasMaintenance && (
                    <button
                      onClick={() => handleAddMaintenanceIssue(sensor.id)} // Trigger the navigation to maintenance form
                      className="bg-yellow-500 text-white py-1 px-4 rounded ml-2"
                    >
                      Add Maintenance Issue
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
