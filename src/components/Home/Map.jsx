import { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Weather from './Weather.jsx';

export default function Map() {
    const [selectedMarker, setSelectedMarker] = useState(null);


    const markers = [
        { position: { lat: 5.9485, lng: 80.5353 }, name: 'Matara' },
        { position: { lat: 6.8466, lng: 79.9287 }, name: 'Maharagama' },
        { position: { lat: 9.6615, lng: 80.2230 }, name: 'Jaffna' },
    ];


    const containerStyle = {
        width: '100%',
        height: '500px',
    };


    const defaultCenter = { lat: 6.5, lng: 80.7718 };
    const zoomLevel = 6;


    const bounds = {
        north: 10.8368,
        south: 4.0123,
        east: 81.8803,
        west: 79.4225,
    };

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-16">
                    Sensor Deployment in Sri Lanka
                </h2>
                <div className="flex justify-between">
                    <div className="w-full lg:w-3/4 h-96 rounded-lg shadow-lg overflow-hidden">
                        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={defaultCenter}
                                zoom={zoomLevel}
                                options={{
                                    restriction: {
                                        latLngBounds: bounds,
                                        strictBounds: true, 
                                    },
                                }}
                            >

                                {markers.map((marker, index) => (
                                    <Marker
                                        key={index}
                                        position={marker.position}
                                        onClick={() => setSelectedMarker(marker)}
                                    />
                                ))}


                                {selectedMarker && (
                                    <InfoWindow
                                        position={selectedMarker.position}
                                        onCloseClick={() => setSelectedMarker(null)}
                                    >
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900">{selectedMarker.name}</h4>
                                            <p className="text-gray-600">Sensor location</p>
                                        </div>
                                    </InfoWindow>
                                )}
                            </GoogleMap>
                        </LoadScript>
                    </div>


                    <div className="w-full lg:w-1/2 pl-8">
                        <Weather />
                    </div>
                </div>
            </div>
        </div>
    );
}
