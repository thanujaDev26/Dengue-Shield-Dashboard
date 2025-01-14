import React, { useState } from 'react';

export default function MaintenanceTable({ maintenanceData, handleGoBack, handleUpdateMaintenance }) {
  const [searchTerm, setSearchTerm] = useState(''); // For search term
  const [selectedMaintenance, setSelectedMaintenance] = useState(null);
  // Filter maintenance records based on the search term
  const filteredMaintenanceData = maintenanceData.filter((maintenance) =>
    maintenance.sensorId.toString().includes(searchTerm) // Filter by Sensor ID
  );

  const handleViewDetails = (maintenance) => {
    setSelectedMaintenance(maintenance); // Set the selected maintenance data
  };

  const closePopup = () => {
    setSelectedMaintenance(null); // Close the popup
  };


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term
  };
  return (
    <div>
       <h1 className="text-2xl font-semibold mb-4">Sensor Maintenance Details</h1>
       {/* Search bar */}
       <input
          type="text"
          placeholder="Search by Sensor ID"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-5 border w-full md:w-1/4 h-12 rounded-full mt-5 mb-5 text-center border-gray-300"
        />
      {/* Desktop View (Original Table) */}
      <div className="hidden md:block">
        <table className="min-w-full table-auto border-collapse border bg-gray-100 border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Sensor ID</th>
              <th className="border border-gray-500 px-4 py-2">Issue</th>
              <th className="border border-gray-500 px-4 py-2">Action</th>
              <th className="border border-gray-500 px-4 py-2">Progress</th>
              <th className="border border-gray-500 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMaintenanceData.map((maintenance, index) => (
              <tr className="text-center" key={index}>
                <td className="border border-gray-500 px-4 py-2">{maintenance.sensorId}</td>
                <td className="border border-gray-500 px-4 py-2">{maintenance.issue}</td>
                <td className="border border-gray-500 px-4 py-2">{maintenance.action}</td>
                <td className="border border-gray-500 px-4 py-2">{maintenance.progress}</td>
                <td className="border border-gray-500 text-center px-4 py-2">
                  <button
                    onClick={() => handleUpdateMaintenance(maintenance)}
                    className="bg-emerald-300 text-white py-1 px-4 rounded"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (2 Columns - Sensor ID and Status with View button) */}
      <div className="md:hidden">
        {filteredMaintenanceData.map((maintenance) => (
          <div key={maintenance.sensorId} className="border-b border-gray-300 p-4">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Sensor ID: {maintenance.sensorId}</div>
              <div>
                {/* View Button */}
                <button
                  onClick={() => handleViewDetails(maintenance)}
                  className="bg-teal-400 text-white mt-4 py-1 px-5 rounded"
                >
                  View
                </button>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p><strong>Issue:</strong> {maintenance.issue}</p>

            </div>
          </div>
        ))}
      </div>

      {/* Popup for showing maintenance details */}
      {selectedMaintenance && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Maintenance Details</h2>
            <div>
              <p><strong>Sensor ID:</strong> {selectedMaintenance.sensorId}</p>
              <p><strong>Issue:</strong> {selectedMaintenance.issue}</p>
              <p><strong>Action:</strong> {selectedMaintenance.action}</p>
              <p><strong>Progress:</strong> {selectedMaintenance.progress}</p>
            </div>
            <div className="mt-4 flex justify-between">
              {/* Update button */}
              <button
                onClick={() => handleUpdateMaintenance(selectedMaintenance)}
                className="bg-emerald-300 text-white py-2 px-4 rounded"
              >
                Update
              </button>
              <button
                onClick={closePopup}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Go Back Button */}
      <div className="mt-4 md:text-left text-center">
        <button
          onClick={handleGoBack}
          className="bg-gray-400  text-white py-2 px-4 rounded-full"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}