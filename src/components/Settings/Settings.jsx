import { useState } from "react";
import { Switch } from "@headlessui/react"; // Headless UI switch component for dark mode

export default function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSave = () => {
    // Add save logic here
    console.log("Form saved!");
  };

  const handleCancel = () => {
    // Add cancel logic here
    console.log("Form canceled!");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gray-900"
          : "bg-gradient-to-b from-teal-100 to-teal-300"
      } p-4`}
    >
      {/* Green Container with Back Button and Dark Mode Toggle */}
      <div className="white-500 text-white p-4 rounded-md mb-6">
        <div className="flex justify-between items-center">
          {/* Back Button */}
          <button
            className="bg-teal-700 text-white px-4 py-2 rounded-md"
            onClick={() => console.log("Back clicked")}
          >
            Back
          </button>

          {/* Dark Mode Toggle Button */}
          <div className="flex items-center space-x-2">
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className={`${
                isDarkMode ? "bg-teal-700" : "bg-gray-300"
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Toggle Dark Mode</span>
              <span
                className={`${
                  isDarkMode ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full transition`}
              />
            </Switch>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div
        className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-auto ${
          isDarkMode ? "bg-gray-800 text-white" : ""
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Contact Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Birth Day</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-teal-500 text-white rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
