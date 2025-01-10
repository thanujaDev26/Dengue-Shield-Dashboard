import React, { useState } from 'react';

export default function DeploymentsTable({
  sensors,
  checkSensorStatus,
  handleViewMaintenanceRecords,
}) {
  const [searchTerm, setSearchTerm] = useState(''); // For search term
  const [selectedSensor, setSelectedSensor] = useState(null); // For selected sensor in popup

  // Filter the sensors based on the search term
  const filteredSensors = sensors.filter((sensor) =>
    sensor.id.toString().includes(searchTerm) // Filter by Sensor ID
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term
  };

  const handleViewDetails = (sensor) => {
    setSelectedSensor(sensor); // Set the selected sensor to show in the popup
  };

  const closePopup = () => {
    setSelectedSensor(null); // Close the popup by resetting selectedSensor state
  };

  return (
    <div className="deployments-table w-full">
      <h1 className="text-2xl font-semibold mb-4">Sensor Details</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by Sensor ID"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-5 border w-full md:w-1/4 h-12 rounded-full mt-5 mb-5 text-center border-gray-300"
        />

        {/* View Maintenance Records Button */}
        <div className="text-center md:text-right md:items-end p-2 mb-2 w-full md:w-1/2">
          <button
            onClick={handleViewMaintenanceRecords}
            className="text-white border border-teal-600 bg-teal-400 py-4 px-5 rounded-full w-full  mb-5 md:w-auto"
          >
            View Maintenance Records
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <table className="min-w-full table-auto border-collapse bg-gray-100">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Sensor ID</th>
              <th className="border border-gray-500 px-4 py-2">Water Level (cm)</th>
              <th className="border border-gray-500 px-4 py-2">Flow Speed (m/s)</th>
              <th className="border border-gray-500 px-4 py-2">Temperature (°C)</th>
              <th className="border border-gray-500 px-4 py-2">Humidity (%)</th>
              <th className="border border-gray-500 px-4 py-2">District</th>
              <th className="border border-gray-500 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredSensors.map((sensor) => {
              const status = checkSensorStatus(sensor);

              return (
                <tr className="text-center" key={sensor.id}>
                  <td className="border border-gray-500 px-4 py-2">{sensor.id}</td>
                  <td className="border border-gray-500 px-4 py-2">{sensor.waterLevel}</td>
                  <td className="border border-gray-500 px-4 py-2">{sensor.flowSpeed}</td>
                  <td className="border border-gray-500 px-4 py-2">{sensor.temperature}</td>
                  <td className="border border-gray-500 px-4 py-2">{sensor.humidity}</td>
                  <td className="border border-gray-500 px-4 py-2">{sensor.district}</td>
                  <td
                    className={`border border-gray-500 rounded px-4 py-5 ${status === 'Issue' ? 'bg-red-300 text-white' : 'bg-green-300 text-white'}`}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>



      {/* Mobile View */}
      <div className="md:hidden">
        <table className="min-w-full table-auto border-collapse bg-gray-100">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Sensor ID</th>
              <th className="border border-gray-500 px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredSensors.map((sensor) => {
              const status = checkSensorStatus(sensor);

              return (
                <tr key={sensor.id} className="border-b border-gray-500">
                  {/* Sensor ID Column */}
                  <td
                    className={`border border-gray-500 px-4 py-2 font-semibold ${status === 'Issue' ? 'bg-red-300 text-white' : 'bg-green-300 text-white'}`}
                  >
                    {sensor.id}
                  </td>

                  {/* Details Column */}
                  <td className="border justify-items-center border-gray-500 px-4 py-2">
                    <div className="flex justify-between items-center">
                      {/* View Details Button */}
                      <button
                        className="bg-teal-400 text-white px-4 py-2 rounded"
                        onClick={() => handleViewDetails(sensor)}
                      >
                        View Details
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Popup for showing sensor details */}
      {selectedSensor && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Sensor Details</h2>
            <div>
              <p><strong>Sensor ID:</strong> {selectedSensor.id}</p>
              <p><strong>Water Level:</strong> {selectedSensor.waterLevel} cm</p>
              <p><strong>Flow Speed:</strong> {selectedSensor.flowSpeed} m/s</p>
              <p><strong>Temperature:</strong> {selectedSensor.temperature} °C</p>
              <p><strong>Humidity:</strong> {selectedSensor.humidity} %</p>
              <p><strong>District:</strong> {selectedSensor.district}</p>
            </div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className='justify-items-center m-5 py-5 px-5'>
        <div className='flex flex-row md:flex-row  text-center align-middle gap-20'>
          <div className='w-20 h-10 pt-2 bg-green-300 rounded'> Normal</div>
          <div className='w-20 h-10 pt-2 bg-red-300 rounded'>Issue</div>
        </div>
      </div>
    </div>
  );
}