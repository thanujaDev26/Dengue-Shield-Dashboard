import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom

export default function SensorData() {
    const [place, setPlace] = useState('');
    const [sensorData, setSensorData] = useState(null);
    const [dengueRisk, setDengueRisk] = useState('');
    const [mohMessage, setMohMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const navigate = useNavigate();  // Initialize useNavigate hook

    const handlePlaceChange = (event) => {
        setPlace(event.target.value);
    };

    const fetchSensorData = () => {
        const mockData = {
            Matara: {
                waterLevel: '5.2m',
                containerType: 'Plastic',
                temperature: '28°C',
                humidity: '80%',
                waterFlowSpeed: '1.5 m/s',
                waterQuality: 'Good',
            },
            Maharagama: {
                waterLevel: '3.8m',
                containerType: 'Concrete',
                temperature: '30°C',
                humidity: '75%',
                waterFlowSpeed: '2.1 m/s',
                waterQuality: 'Moderate',
            },
            Jaffna: {
                waterLevel: '4.1m',
                containerType: 'Metal',
                temperature: '32°C',
                humidity: '70%',
                waterFlowSpeed: '1.2 m/s',
                waterQuality: 'Excellent',
            },
        };
        const data = mockData[place];

        if (data) {
            setSensorData(data);
            evaluateDengueRisk(data);
        } else {
            setSensorData(null);
            setDengueRisk('');
        }
    };

    const evaluateDengueRisk = (data) => {
        const temperature = parseFloat(data.temperature);
        const humidity = parseFloat(data.humidity);
        const waterQuality = data.waterQuality.toLowerCase();

        let risk = 'Low Risk';

        if (temperature >= 25 && temperature <= 30) {
            risk = 'Medium Risk';
        }

        if (humidity > 75) {
            risk = 'High Risk';
        }

        if (waterQuality === 'poor') {
            risk = 'High Risk';
        }

        setDengueRisk(risk);
        generateMOHMessage(risk);
    };

    const generateMOHMessage = (risk) => {
        const mohOffices = {
            Matara: 'Matara MOH Office',
            Maharagama: 'Maharagama MOH Office',
            Jaffna: 'Jaffna MOH Office',
        };

        const office = mohOffices[place] || 'Unknown MOH Office';

        let message = '';
        if (risk === 'High Risk') {
            message = `URGENT: High risk of dengue mosquito breeding detected in ${place}. Immediate action required! Please investigate and take appropriate measures.`;
        } else if (risk === 'Medium Risk') {
            message = `Alert: Medium risk of dengue mosquito breeding detected in ${place}. Please monitor the area closely.`;
        } else {
            message = `No immediate dengue risk detected in ${place}.`;
        }

        setMohMessage(`Message to ${office}: ${message}`);
    };

    const handleSendMessage = () => {
        if (mohMessage) {
            setEmailSent(true);  // Simulate the email being sent
        }
    };

    // New function to handle navigation to MOH office details page
    const handleMohDetails = () => {
        navigate(`/moh-offices/${place.toLowerCase()}`);
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
                <h2 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl mb-12">
                    Real-Time Sensor Data
                </h2>
                <div className="flex justify-center items-center mb-8 space-x-4">
                    <input
                        type="text"
                        value={place}
                        onChange={handlePlaceChange}
                        placeholder="Enter a place (e.g., Matara)"
                        className="w-full sm:w-80 p-3 rounded-lg border-2 border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                    />
                    <button
                        onClick={fetchSensorData}
                        className="w-48 p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                    >
                        Fetch Data
                    </button>
                </div>

                {sensorData ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.keys(sensorData).map((key) => (
                            <div key={key} className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</h3>
                                <p className="text-lg">{sensorData[key]}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    place && <p className="text-center text-lg text-gray-300">No data found for &quot;{place}&quot;. Please try again.</p>
                )}

                {dengueRisk && (
                    <div className="mt-8 text-center">
                        <p className="text-2xl font-bold text-yellow-200">
                            Dengue Breeding Risk: <span className={`text-${dengueRisk === 'High Risk' ? 'red' : dengueRisk === 'Medium Risk' ? 'yellow' : 'green'}-500`}>{dengueRisk}</span>
                        </p>
                    </div>
                )}

                {mohMessage && (
                    <div className="mt-8 text-center">
                        <p className="text-lg text-white">{mohMessage}</p>
                        <button
                            onClick={handleSendMessage}
                            className="mt-4 p-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                        >
                            Send Message
                        </button>
                    </div>
                )}

                {emailSent && (
                    <div className="mt-8 text-center">
                        <p className="text-lg text-green-500">Message has been sent to the MOH office!</p>
                    </div>
                )}

                {place && (
                    <div className="mt-4 text-center">
                        <button
                            onClick={handleMohDetails}
                            className="mt-4 p-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                        >
                            MOH Details
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
