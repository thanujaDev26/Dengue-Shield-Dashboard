import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    console.log("Form saved!");
  };

  const handleCancel = () => {
    console.log("Form canceled!");
  };

  return (
    <div
      className={`min-h-screen p-4 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-teal-100 to-teal-300 text-gray-900"
      }`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        {/* Back Button */}
        <button
          className={`px-4 py-2 rounded-md ${
            darkMode ? "bg-gray-700 text-white" : "bg-teal-500 text-white"
          }`}
          onClick={() => console.log("Back clicked")}
        >
          Back
        </button>

        {/* Dark Mode Toggle */}
        <button
          className={`px-4 py-2 rounded-md ${
            darkMode ? "bg-teal-500 text-gray-900" : "bg-gray-700 text-white"
          }`}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Form */}
      <div
        className={`rounded-lg shadow-lg p-6 w-full max-w-lg mx-auto ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className={`w-full border rounded-md px-3 py-2 ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Working Area</label>
            <input
              type="text"
              className={`w-full border rounded-md px-3 py-2 ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              className={`w-full border rounded-md px-3 py-2 ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className={`w-full border rounded-md px-3 py-2 ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              className={`w-full border rounded-md px-3 py-2 ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Contact Number</label>
            <input
              type="tel"
              className={`w-full border rounded-md px-3 py-2 ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">PHI ID</label>
            <input
              type="text"
              className={`w-full border rounded-md px-3 py-2 ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Birth Day</label>
            <input
              type="date"
              className={`w-full border rounded-md px-3 py-2 ${
                darkMode
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300"
              }`}
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${
                darkMode ? "bg-gray-600 text-white" : "bg-gray-400 text-white"
              }`}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${
                darkMode
                  ? "bg-teal-500 text-gray-900"
                  : "bg-teal-500 text-white"
              }`}
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
