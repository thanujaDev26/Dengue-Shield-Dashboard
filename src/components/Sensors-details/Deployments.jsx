///
import React, { useState } from 'react';
import DeploymentsTable from './DeploymentsTable';
import MaintenanceTable from './MaintenanceTable';
import MaintenanceForm from './MaintenanceForm';

export default function Deployments() {
  const [sensors, setSensors] = useState([
    { id: 1, waterLevel: 30, flowSpeed: 3.5, temperature: 22, humidity: 80, district: 'District 1' },
    { id: 2, waterLevel: null, flowSpeed: 4.1, temperature: 21, humidity: 75, district: 'District 2' },
    { id: 3, waterLevel: 25, flowSpeed: 4.0, temperature: 20, humidity: 70, district: 'District 3' },
  ]);

  const [maintenanceRecords, setMaintenanceRecords] = useState([]);
  const [currentSensorId, setCurrentSensorId] = useState(null);
  const [currentPage, setCurrentPage] = useState('deployments');
  const [editableMaintenance, setEditableMaintenance] = useState(null); // Track the maintenance record to be edited
  
  const checkSensorStatus = (sensor) => {
    if (
      sensor.waterLevel == null ||
      sensor.flowSpeed == null ||
      sensor.temperature == null ||
      sensor.humidity == null ||
      isNaN(sensor.waterLevel) ||
      isNaN(sensor.flowSpeed) ||
      isNaN(sensor.temperature) ||
      isNaN(sensor.humidity)
    ) {
      return 'Issue';
    }
    return 'Normal';
  };

  const handleViewMaintenance = (sensorId) => {
    setCurrentSensorId(sensorId);
    setCurrentPage('maintenanceTable');
  };

  const handleAddMaintenance = (newMaintenance) => {
    setMaintenanceRecords((prevRecords) => [...prevRecords, newMaintenance]);
    setCurrentPage('maintenanceTable');
  };

  const handleUpdateMaintenance = (updatedMaintenance) => {
    setMaintenanceRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.sensorId === updatedMaintenance.sensorId ? updatedMaintenance : record
      )
    );
    setEditableMaintenance(null);
    setCurrentPage('maintenanceTable');
  };

  const handleGoBack = () => {
    setCurrentPage('deployments');
  };

  const handleEditMaintenance = (maintenanceData) => {
    setEditableMaintenance(maintenanceData);
    setCurrentPage('maintenanceForm');
  };

  // Add the handler for "Add Maintenance Issue" button
  const handleAddMaintenanceIssue = (sensorId) => {
    setCurrentSensorId(sensorId); // Set the sensorId for which we are adding the maintenance issue
    setEditableMaintenance(null); // Reset editable maintenance data if any
    setCurrentPage('maintenanceForm'); // Go to the maintenance form
  };

  return (
    <div className="deployment-app">
      <h1 className="text-3xl font-semibold mb-6">Sensor Monitoring</h1>
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setCurrentPage('deployments')}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Home
        </button>
      </div>

      {currentPage === 'deployments' && (
        <DeploymentsTable
          sensors={sensors}
          checkSensorStatus={checkSensorStatus}
          handleViewMaintenance={handleViewMaintenance}
          maintenanceRecords={maintenanceRecords} // Pass maintenance records to the table
          handleAddMaintenanceIssue={handleAddMaintenanceIssue} // Pass handler to handle "Add Maintenance Issue"
        />
      )}

      {currentPage === 'maintenanceTable' && (
        <MaintenanceTable
          maintenanceData={maintenanceRecords.filter(
            (record) => record.sensorId === currentSensorId
          )}
          handleEditMaintenance={handleEditMaintenance}
          handleGoBack={handleGoBack}
        />
      )}

      {currentPage === 'maintenanceForm' && (
        <MaintenanceForm
          sensorId={currentSensorId}
          editableMaintenance={editableMaintenance}
          handleAddMaintenance={handleAddMaintenance}
          handleUpdateMaintenance={handleUpdateMaintenance}
          handleGoBack={handleGoBack}
        />
      )}
    </div>
  );
}
