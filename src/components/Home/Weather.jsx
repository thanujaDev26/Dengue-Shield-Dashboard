import { useState } from "react";
import { FaCloudRain } from "react-icons/fa";

export default function Weather() {
    const [city, setCity] = useState('');
    const [weatherInfo, setWeatherInfo] = useState(null);

    const handleCitySearch = () => {
        setWeatherInfo({
            city,
            temperature: '27°C',
            condition: 'Rainy',
        });
    };

    return (
        <div className="weather">
            <div className="flex flex-col items-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 p-8 shadow-xl max-w-lg mx-auto">
                <h3 className="mb-4 text-3xl font-semibold text-white">Weather in Sri Lanka</h3>
                <div className="w-full flex flex-col items-center mb-8">
                    <input
                        type="text"
                        placeholder="Enter City Name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-3/4 px-4 py-2 border rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        onClick={handleCitySearch}
                        className="mt-4 bg-indigo-700 text-white px-8 py-3 rounded-full shadow-md hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-400"
                    >
                        Search Weather
                    </button>
                </div>

                {/* Displaying weather info with condition check */}
                <div className="w-3/4 h-48 bg-white rounded-xl shadow-lg flex items-center justify-center p-4">
                    {weatherInfo ? (
                        <div className="text-center space-y-2">
                            <p className="text-2xl font-semibold text-gray-900">{weatherInfo.city}</p>
                            <p className="text-xl text-gray-600">{weatherInfo.temperature}</p>
                            <div className="flex justify-center items-center space-x-2">
                                <FaCloudRain className="text-blue-500 text-3xl" />
                                <p className="text-lg text-gray-600">{weatherInfo.condition}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-400">Weather information will appear here</p>
                    )}
                </div>
            </div>
        </div>
    );
}
