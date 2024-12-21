// src/components/MaintenanceTable.jsx
import React, { useState } from 'react';

const MaintenanceTable = ({ sensors, maintenanceData, handleAddMaintenance }) => {
  const [newMaintenance, setNewMaintenance] = useState({
    sensorId: '',
    issue: '',
    action: '',
    progress: '',
  });

  // Handle changes in the select dropdowns
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMaintenance((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Add a new maintenance record
  const handleAddNewMaintenance = () => {
    if (newMaintenance.sensorId && newMaintenance.issue && newMaintenance.action && newMaintenance.progress) {
      handleAddMaintenance(newMaintenance);
      setNewMaintenance({
        sensorId: '',
        issue: '',
        action: '',
        progress: '',
      }); // Reset form after adding
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="mb-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Maintenance Table</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">Sensor ID</th>
            <th className="border px-4 py-2">District</th>
            <th className="border px-4 py-2">Issue</th>
            <th className="border px-4 py-2">Action</th>
            <th className="border px-4 py-2">Progress</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {maintenanceData.map((data, index) => {
            const sensor = sensors.find((sensor) => sensor.id === data.sensorId);
            return (
              <tr key={index}>
                <td className="border px-4 py-2">{data.sensorId}</td>
                <td className="border px-4 py-2">{sensor ? sensor.district : 'Unknown'}</td>
                <td className="border px-4 py-2">{data.issue}</td>
                <td className="border px-4 py-2">{data.action}</td>
                <td className="border px-4 py-2">{data.progress}</td>
                <td className="border px-4 py-2">
                  <button className="bg-yellow-500 text-white py-1 px-4 rounded">
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6">Add New Maintenance Record</h3>
      <div className="mb-4">
        <label className="block mb-2">Sensor ID</label>
        <select
          name="sensorId"
          value={newMaintenance.sensorId}
          onChange={handleInputChange}
          className="border p-2 rounded"
        >
          <option value="">Select Sensor</option>
          {sensors.map((sensor) => (
            <option key={sensor.id} value={sensor.id}>
              {sensor.id} - {sensor.district}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Issue</label>
        <select
          name="issue"
          value={newMaintenance.issue}
          onChange={handleInputChange}
          className="border p-2 rounded"
        >
          <option value="">Select Issue</option>
          <option value="Sensor not working">Sensor not working</option>
          <option value="Measurement error">Measurement error</option>
          <option value="Water leakage">Water leakage</option>
          <option value="Sensor damaged">Sensor damaged</option>
          <option value="Connectivity issue">Connectivity issue</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Action</label>
        <select
          name="action"
          value={newMaintenance.action}
          onChange={handleInputChange}
          className="border p-2 rounded"
        >
          <option value="">Select Action</option>
          <option value="Repair">Repair</option>
          <option value="Replace">Replace</option>
          <option value="Check">Check</option>
          <option value="Reset">Reset</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Progress</label>
        <select
          name="progress"
          value={newMaintenance.progress}
          onChange={handleInputChange}
          className="border p-2 rounded"
        >
          <option value="">Select Progress</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <button
        onClick={handleAddNewMaintenance}
        className="bg-blue-500 text-white py-2 px-6 rounded"
      >
        Add Maintenance Issue
      </button>
    </div>
  );
};

export default MaintenanceTable;
