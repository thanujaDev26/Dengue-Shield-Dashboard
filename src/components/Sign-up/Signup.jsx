export default function Signup() {
  return(
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-600 via-gray-300 to-gray-600">
      {/* Register Container */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
        
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
          <div className="relative mt-1">
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Telephone Input */}
        <div className="mb-4">
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-600">Telephone Number</label>
          <div className="relative mt-1">
            <input
              id="telephone"
              type="tel"
              placeholder="Enter your telephone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <div className="relative mt-1">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Username Input */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
          <div className="relative mt-1">
            <input
              id="username"
              type="text"
              placeholder="Choose a username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <div className="relative mt-1">
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Register Button */}
        <button          
          className="w-full bg-gradient-to-r from-gray-400 to-gray-600 text-white py-2 rounded-lg hover:from-gray-600 hover:to-gray-400 focus:ring-2 focus:ring-white"
        >
          <b>Register</b>
        </button>

        {/* Already Have an Account */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? 
          <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
