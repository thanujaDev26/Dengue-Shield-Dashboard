export default function Admins() {
  return (
    <div className="Admins min-h-screen p-6 min-h-screen bg-gradient-to-b from-teal-100 to-teal-300 p-4">
      <div className="flex justify-between items-center mb-6">
        {/* Back Button - Top Left */}
        <button className="px-4 py-2 bg-[#A7D8F2] text-white rounded-md hover:bg-[#8cc5e1] transition duration-300">
          Back
        </button>

        {/* Delete Button - Top Right */}
        <button className="px-4 py-2 bg-[#A7D8F2] text-white rounded-md hover:bg-[#8cc5e1] transition duration-300">
          Delete
        </button>
      </div>

      <div className="profile flex flex-col items-center bg-[#A7D8F2] p-6 border rounded-lg shadow-lg space-y-6 max-w-lg mx-auto">
        {/* Profile Image Section */}
        <div className="profile_image w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 mb-4">
          {/* Profile Image */}
          <img
            src="your-image-url-here"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Admin Name Section Below the Image */}
        <div className="admin-name text-center mb-4">
          <p className="text-2xl font-extrabold text-teal-600 tracking-wide shadow-md">
            JohnDoe
          </p>
        </div>

        {/* Admin Details Section */}
        <div className="details w-full">
          {/* Display Admin Details */}
          <div className="space-y-4">
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-700 mr-2">
                Admin ID:
              </p>
              <p className="mt-1 text-lg font-semibold text-gray-900">AD102</p>
            </div>
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-700 mr-2">
                Username:
              </p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                JohnDoe
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-700 mr-2">
                Contact Number:
              </p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                +1 234 567 890
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-700 mr-2">Address:</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                123 Admin St, City, Country
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
