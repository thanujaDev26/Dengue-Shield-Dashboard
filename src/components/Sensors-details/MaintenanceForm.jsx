///
import React, { useState, useEffect } from 'react';

export default function MaintenanceForm({
  sensorId,
  editableMaintenance,
  handleAddMaintenance,
  handleUpdateMaintenance,
  handleGoBack,
}) {
  const [maintenance, setMaintenance] = useState({
    sensorId,
    issue: '',
    action: 'Repair',
    progress: 'Pending',
  });

  useEffect(() => {
    if (editableMaintenance) {
      setMaintenance(editableMaintenance);
    }
  }, [editableMaintenance]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMaintenance((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableMaintenance) {
      handleUpdateMaintenance(maintenance); // Update existing maintenance record
    } else {
      handleAddMaintenance(maintenance); // Add new maintenance record
    }
  };

  return (
    <div className="maintenance-form mb-6">
      <h2 className="text-xl font-semibold mb-4">
        {editableMaintenance ? `Update Maintenance Record for Sensor ${sensorId}` : `Add Maintenance Record for Sensor ${sensorId}`}
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Sensor ID Display (Read-only) */}
        <div className="mb-4">
          <label className="block">Sensor ID</label>
          <input
            type="text"
            value={sensorId}
            readOnly
            className="border px-4 py-2 w-full bg-gray-200"
          />
        </div>

        {/* Issue Field */}
        <div className="mb-4">
          <label className="block">Issue</label>
          <input
            type="text"
            name="issue"
            value={maintenance.issue}
            onChange={handleInputChange}
            className="border px-4 py-2 w-full"
            required
          />
        </div>

        {/* Action Field */}
        <div className="mb-4">
          <label className="block">Action</label>
          <select
            name="action"
            value={maintenance.action}
            onChange={handleInputChange}
            className="border px-4 py-2 w-full"
          >
            <option value="Repair">Repair</option>
            <option value="Replace">Replace</option>
            <option value="Inspection">Inspection</option>
            <option value="Clean">Clean</option>
          </select>
        </div>

        {/* Progress Field */}
        <div className="mb-4">
          <label className="block">Progress</label>
          <select
            name="progress"
            value={maintenance.progress}
            onChange={handleInputChange}
            className="border px-4 py-2 w-full"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Submit and Go Back Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {editableMaintenance ? 'Update Maintenance' : 'Submit Maintenance'}
          </button>
          <button
            type="button"
            onClick={handleGoBack}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}
