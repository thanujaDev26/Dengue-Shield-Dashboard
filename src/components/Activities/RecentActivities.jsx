import React, { useState } from "react";

const RecentActivities = () => {
  // Sample data for the table
  const [activities, setActivities] = useState([
    { phiId: "PD101", name: "Sunil", activity: "Activity 1", status: "Success" },
    { phiId: "PD102", name: "Kamal", activity: "Activity 2", status: "Success" },
    { phiId: "PD103", name: "Pathum", activity: "Activity 3", status: "Unsuccess" },
    { phiId: "PD103", name: "Vihanga", activity: "Activity 4", status: "Unsuccess" },
    { phiId: "PD103", name: "Amal", activity: "Activity 5", status: "Success" },
    { phiId: "PD103", name: "Kalum", activity: "Activity 6", status: "Unsuccess" },
  ]);

  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // State for sorting
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc

  // Filtered data based on the search query
  const filteredActivities = activities.filter(
    (activity) =>
      activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.activity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting function
  const handleSort = () => {
    const sortedData = [...filteredActivities].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setActivities(sortedData);
  };

  return (
    <div className="recent-activities">
      <div className="flex justify-between items-center mb-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded w-1/3"
        />

        {/* Sort Button */}
        <button
          onClick={handleSort}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sort {sortOrder === "asc" ? "▲" : "▼"}
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">PHI ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Activity</th>
            <th className="border px-4 py-2">Success/Unsuccess</th>
          </tr>
        </thead>
        <tbody>
          {filteredActivities.map((activity, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{activity.phiId}</td>
              <td className="border px-4 py-2">{activity.name}</td>
              <td className="border px-4 py-2">{activity.activity}</td>
              <td
                className={`border px-4 py-2 ${
                  activity.status === "Success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {activity.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Empty State */}
      {filteredActivities.length === 0 && (
        <p className="text-gray-500 mt-4 text-center">No activities found.</p>
      )}
    </div>
  );
};

export default RecentActivities;
