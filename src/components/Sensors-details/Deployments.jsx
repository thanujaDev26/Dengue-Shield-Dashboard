import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SensorDetailsTable from './SensorsDetailsTable.jsx';
import MaintenanceTable from './MaintenanceTable.jsx';
import MapPage from './Mappage';

export default function Deployments () {
    // Example sensor data with missing/broken values
    const sensors = [
      { id: 1, waterLevel: 20, flowSpeed: 1.2, temperature: 30, humidity: 85, district: "Colombo", latitude: 6.9271, longitude: 79.8612 },
      { id: 2, waterLevel: null, flowSpeed: 0.9, temperature: 28, humidity: 80, district: "Kandy", latitude: 7.2906, longitude: 80.6341 },
      { id: 3, waterLevel: 15, flowSpeed: NaN, temperature: 28, humidity: 80, district: "Galle", latitude: 6.0535, longitude: 80.2194 },
      // More sensors can be added
    ];
  
    // Maintenance data state
    const [maintenanceData, setMaintenanceData] = useState([]);
  
    // Add maintenance issue
    const handleAddMaintenance = (sensorId) => {
      const issue = prompt("Enter the issue with the sensor:");
      const action = prompt("Select action: Repair/Replace/Check");
      const progress = prompt("Select progress: Not Started/In Progress/Completed");
  
      if (issue && action && progress) {
        setMaintenanceData([
          ...maintenanceData,
          { sensorId, issue, action, progress }
        ]);
      }
    };
  
    return (
      <Router>
        <div className="container mx-auto p-6">
          {/* Header Component */}
          <Header />
  
          <Routes>
            {/* Sensor Details Table */}
            <Route path="/" element={
                <>
                  <SensorDetailsTable
                    sensors={sensors}
                    handleAddMaintenance={handleAddMaintenance}
                  />
                  <MaintenanceTable
                    maintenanceData={maintenanceData}
                    sensors={sensors}
                  />
                </>
              }
            />
  
            {/* Map Page */}
            <Route path="/map" element={<MapPage />}/>
          </Routes>
        </div>
      </Router>
    );
  };
  
  