import React from 'react';

export default function MaintenanceTable({
  maintenanceData,
  handleEditMaintenance,
  handleGoBack,
}) {
  return (
    <div className="maintenance-table mt-6">
      <h2 className="text-2xl font-semibold mb-4">Maintenance Table</h2>

      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">Sensor ID</th>
            <th className="border px-4 py-2">Issue</th>
            <th className="border px-4 py-2">Action</th>
            <th className="border px-4 py-2">Progress</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {maintenanceData.length === 0 ? (
            <tr>
              <td colSpan="5" className="border px-4 py-2 text-center">
                No maintenance records available.
              </td>
            </tr>
          ) : (
            maintenanceData.map((data) => (
              <tr key={data.sensorId}>
                <td className="border px-4 py-2">{data.sensorId}</td>
                <td className="border px-4 py-2">{data.issue}</td>
                <td className="border px-4 py-2">{data.action}</td>
                <td className="border px-4 py-2">{data.progress}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditMaintenance(data)}
                    className="bg-yellow-500 text-white py-1 px-4 rounded"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <button
        onClick={handleGoBack}
        className="bg-gray-500 text-white py-2 px-4 rounded mt-4"
      >
        Back to Deployments
      </button>
    </div>
  );
}
////