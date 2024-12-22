// src/components/MapPage.jsx
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';

const containerStyle = {
  width: '100%',
  height: '400px',
};

export default function MapPage  () {
  const location = useLocation();
  const { latitude, longitude } = location.state || {};

  const [mapCenter, setMapCenter] = useState({ lat: latitude || 6.9271, lng: longitude || 79.8612 }); // Default location (Colombo, Sri Lanka)

  useEffect(() => {
    if (latitude && longitude) {
      setMapCenter({ lat: latitude, lng: longitude });
    }
  }, [latitude, longitude]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Sensor Location on Map</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={10}
        >
          <Marker position={mapCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};


