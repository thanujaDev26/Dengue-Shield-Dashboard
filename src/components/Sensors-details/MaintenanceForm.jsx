import React, { useState, useEffect } from 'react';

export default function MaintenanceForm({
  sensorId,
  handleUpdateMaintenance,
  maintenanceDataToUpdate,
  handleGoBack,
}) {
  const [updateMaintenance, setUpdateMaintenance] = useState({
    sensorId: sensorId || '',
    issue: '',
    action: 'Repair',
    progress: 'Pending',
  });


  useEffect(() => {
    if (maintenanceDataToUpdate) {
      setUpdateMaintenance(maintenanceDataToUpdate);
    } else if (sensorId) {
      setUpdateMaintenance((prevState) => ({ ...prevState, sensorId }));
    }
  }, [sensorId, maintenanceDataToUpdate]);

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateMaintenance((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Function to handle submission and transition to the Maintenance Table
  const handleSubmitAndMoveToMaintenanceTable = (maintenance) => {
    // Submit or update maintenance data
    handleUpdateMaintenance(maintenance);  // Update the parent state with the maintenance data

    // After submitting the maintenance data, navigate to the maintenance table
    setCurrentPage('maintenanceTable');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the maintenance data and move to the Maintenance Table
    if (typeof handleSubmitAndMoveToMaintenanceTable === 'function') {
      handleSubmitAndMoveToMaintenanceTable(updateMaintenance);
    } else {
      console.error('handleSubmitAndMoveToMaintenanceTable is not a function!');
    }
  };


  return (
    <div className='justify-items-center'>
      <div className='border border-gray-900 w-full md:w-1/2 p-5 rounded-lg bg-gray-100'>
        <div className="maintenance-form mb-6 justify-items-center ">
          <h2 className="text-2xl p-5 text-center md:text-center font-semibold mb-4">
            {maintenanceDataToUpdate
              ? 'Edit Maintenance Record'
              : `Add Maintenance Record for Sensor ${sensorId}`}
          </h2>
          <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
            {/* Issue Selection */}
            <div className="mb-4">
              <label className="block font-semibold">Issue</label>
              <select
                name="issue"
                value={updateMaintenance.issue}
                onChange={handleInputChange}
                className="border px-4 py-2 w-full rounded-lg"
              >
                <option value="Temperature">Temperature Issue</option>
                <option value="Flow-Speeed">Flow Speeed Issue</option>
                <option value="Water-qualityn">Water quality Issue</option>
                <option value="RainFalln">RainFall Issue</option>
              </select>
            </div>

            {/* Action Selection */}
            <div className="mb-4">
              <label className="block font-semibold">Action</label>
              <select
                name="action"
                value={updateMaintenance.action}
                onChange={handleInputChange}
                className="border px-4 py-2 w-full rounded-lg"
              >
                <option value="Repair">Repair</option>
                <option value="Replace">Replace</option>
                <option value="Inspection">Inspection</option>
                <option value="Clean">Clean</option>
              </select>
            </div>

            {/* Progress Selection */}
            <div className="mb-4">
              <label className="block font-semibold">Progress</label>
              <select
                name="progress"
                value={updateMaintenance.progress}
                onChange={handleInputChange}
                className="border px-4 py-2 w-full rounded-lg"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="bg-teal-400 text-white py-2 px-4 rounded-full w-full"
              >
                {maintenanceDataToUpdate ? 'Update Maintenance' : 'Submit Maintenance Issue'}
              </button>
            </div>

            {/* Go Back Button */}
            <div className="mb-4">
              <button
                type="button"
                onClick={handleGoBack}
                className="bg-gray-400 text-white py-2 px-4 rounded-full w-full"
              >
                Go Back
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
