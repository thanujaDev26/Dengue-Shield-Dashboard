import React, { useState, useEffect } from 'react';
import DeploymentsTable from './DeploymentsTable';
import MaintenanceForm from './MaintenanceForm';
import MaintenanceTable from './MaintenanceTable';

export default function Deployments() {
  const [sensors, setSensors] = useState([
    { id: 1, waterLevel: 30, flowSpeed: 3.5, temperature: 22, humidity: 80, district: 'District 1' },
    { id: 2, waterLevel: null, flowSpeed: 4.1, temperature: 21, humidity: 75, district: 'District 2' },
    { id: 3, waterLevel: null, flowSpeed: 4.1, temperature: 21, humidity: 75, district: 'District 2' },
    { id: 4, waterLevel: null, flowSpeed: 4.1, temperature: 21, humidity: 75, district: 'District 2' },
    { id: 5, waterLevel: 25, flowSpeed: 4.0, temperature: 20, humidity: 70, district: 'District 3' },
    { id: 6, waterLevel: null, flowSpeed: 4.1, temperature: 21, humidity: 75, district: 'District 2' },
  ]);

  const [maintenanceRecords, setMaintenanceRecords] = useState([]);
  const [maintenanceDataToUpdate, setMaintenanceDataToUpdate] = useState(null);
  const [currentPage, setCurrentPage] = useState('deployments'); // Page management state

  // Set maintenance records from sensors that have issues
  useEffect(() => {
    const issueSensors = sensors.filter(sensor => checkSensorStatus(sensor) === 'Issue');
    setMaintenanceRecords(issueSensors.map(sensor => ({
      sensorId: sensor.id,
      issue: 'Default issue description',
      action: 'Repair',
      progress: 'Pending',
    })));
  }, [sensors]);

  // Function to check sensor status
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
    
  };

  // Go back to deployments page and reset update data
  const handleGoBack = () => {
    setCurrentPage('deployments');
    setMaintenanceDataToUpdate(null);
  };

  // Function to handle form submission for maintenance (both for adding and updating records)
  const handleSubmitMaintenance = (maintenance) => {
    if (maintenanceDataToUpdate) {
      // Update existing maintenance record
      setMaintenanceRecords(prevRecords =>
        prevRecords.map(record =>
          record.sensorId === maintenance.sensorId ? maintenance : record
        )
      );
      setMaintenanceDataToUpdate(null);
    } else {
      // Add new maintenance record
      setMaintenanceRecords(prevRecords => [...prevRecords, maintenance]);
    }
    setCurrentPage('maintenanceTable'); // Navigate to Maintenance Table
  };

  // Function to show maintenance records table
  const handleViewMaintenanceRecords = () => {
    setCurrentPage('maintenanceTable');
  };

  return (
    <div className="deployment-app">
      

      {/* Show Deployments table */}
      {currentPage === 'deployments' && (
        <DeploymentsTable
          sensors={sensors}
          checkSensorStatus={checkSensorStatus}
          handleViewMaintenanceRecords={handleViewMaintenanceRecords}
        />
      )}

      {/* Show Maintenance Table */}
      {currentPage === 'maintenanceTable' && (
        <MaintenanceTable
          maintenanceData={maintenanceRecords}
          handleGoBack={handleGoBack}
          handleUpdateMaintenance={(maintenance) => {
            setMaintenanceDataToUpdate(maintenance);
            setCurrentPage('maintenanceForm');
          }}
        />
      )}

      {/* Show Maintenance Form */}
      {currentPage === 'maintenanceForm' && (
        <MaintenanceForm
          sensorId={maintenanceDataToUpdate?.sensorId}
          handleUpdateMaintenance={handleSubmitMaintenance} // This will handle form submission
          maintenanceDataToUpdate={maintenanceDataToUpdate}
          handleGoBack={handleGoBack}
        />
      )}
    </div>
  );
}
